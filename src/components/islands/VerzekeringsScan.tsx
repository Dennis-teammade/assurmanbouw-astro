import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  Building2,
  Hammer,
  Zap,
  TreePine,
  HelpCircle,
  User,
  Users,
  Users2,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Phone,
} from 'lucide-react';
import {
  SCAN_CLUSTERS,
  ANDERE_BEROEP_SLUG,
  getBeroep,
  beroepenPerCluster,
  relevantePolissenVoor,
  polisGewicht,
  SCORE_NEUTRALE_CATEGORIE,
  type ScanClusterKey,
} from '../../data/scan';
import { getVerzekering } from '../../data/verzekeringen';
import { CTA_DESTINATIONS } from '../../data/cta-labels';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface Answers {
  hoofdactiviteit: string; // slug uit scan.ts (SCAN_BEROEPEN)
  teamgrootte: string;
  onderaannemers: string;
  projectgrootte: string;
  verzekeringen: string[]; // slugs uit verzekeringen.ts, of 'geen' / 'weet-niet'
  verzekeringAndere: string;
  materiaalwaarde: string;
  advies: string;
  laatsteControle: string;
  bedrijfsnaam: string;
  naam: string;
  email: string;
  telefoon: string;
  website: string; // honeypot
}

const INITIAL_ANSWERS: Answers = {
  hoofdactiviteit: '',
  teamgrootte: '',
  onderaannemers: '',
  projectgrootte: '',
  verzekeringen: [],
  verzekeringAndere: '',
  materiaalwaarde: '',
  advies: '',
  laatsteControle: '',
  bedrijfsnaam: '',
  naam: '',
  email: '',
  telefoon: '',
  website: '',
};

const TOTAL_STEPS = 9;
const MIN_FILL_MS = 4000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CLUSTER_ICON: Record<ScanClusterKey, typeof Building2> = {
  ruwbouw: Building2,
  afwerking: Hammer,
  technieken: Zap,
  buiten: TreePine,
};

// -----------------------------------------------------------------------------
// Scoring & rapport
// -----------------------------------------------------------------------------

type ResultType = 'HIGH_RISK' | 'ATTENTION_NEEDED' | 'BASE_OK';

interface ResultData {
  score: number;
  resultType: ResultType;
  urgentie: string;
  gaps: string[];
  kansPensioen: string | null;
  beroep: ReturnType<typeof getBeroep>;
  hasTeam: boolean;
}

function calculateResult(answers: Answers): ResultData {
  const beroep = getBeroep(answers.hoofdactiviteit) ?? getBeroep(ANDERE_BEROEP_SLUG)!;
  const relevant = relevantePolissenVoor(beroep.slug);
  const geselecteerd = new Set(answers.verzekeringen);
  const hasGeen = geselecteerd.has('geen');
  const hasWeetNiet = geselecteerd.has('weet-niet');
  const hasTeam = answers.teamgrootte !== 'Solo zelfstandige';
  const hasAO = geselecteerd.has('arbeidsongevallen');
  const hasABR = geselecteerd.has('alle-bouwplaats-risicos');
  const hasBA = geselecteerd.has('ba-onderneming');
  const abrRelevant = relevant.some((v) => v.slug === 'alle-bouwplaats-risicos');
  // Materiaaldekking = machinebreuk waar relevant, anders vervoerde goederen
  // (sommige pakketten, bv. stukadoors of zonnepanelen, dekken materiaal via die polis).
  const materiaalSlug = relevant.some((v) => v.slug === 'machinebreuk')
    ? 'machinebreuk'
    : relevant.some((v) => v.slug === 'vervoerde-goederen')
      ? 'vervoerde-goederen'
      : null;

  let score = 0;
  for (const pol of relevant) {
    if (geselecteerd.has(pol.slug)) score += polisGewicht(pol.slug, pol.categorie);
  }
  if (hasGeen) score -= 4;
  if (hasWeetNiet && !hasGeen) score -= 2;
  if (hasTeam && !hasAO) score -= 2;
  if (answers.laatsteControle === 'Minder dan 1 jaar geleden') score += 2;
  if (answers.laatsteControle === 'Meer dan 2 jaar geleden') score -= 1;
  if (answers.laatsteControle === 'Nog nooit') score -= 2;

  const grootProject = answers.projectgrootte === 'Grote projecten (> €150K)';
  const grootOfMiddelgroot =
    grootProject || answers.projectgrootte === 'Middelgrote werven (€25K–€150K)';
  // Enkel grote projecten wegen op de score (fase-1-model); de gap-boodschap
  // hieronder verschijnt wel al vanaf middelgrote werven.
  if (grootProject && abrRelevant && !hasABR) score -= 1;
  if (answers.advies === 'Ja' && !hasBA) score -= 1;

  const resultType: ResultType = score <= 0 ? 'HIGH_RISK' : score >= 5 ? 'BASE_OK' : 'ATTENTION_NEEDED';

  // ---- Gaps: eerst de specifieke, herkenbare cross-sector regels ----
  // `besproken` houdt bij welke ontbrekende polissen al een eigen boodschap
  // kregen, zodat de generieke aanvulling onderaan ze niet dubbel benoemt en
  // ontbrekende kernpolissen nooit onvermeld blijven wanneer een conditionele
  // regel (personeel, advies, materiaalwaarde) toevallig niet vuurt.
  const gaps: string[] = [];
  const besproken = new Set<string>();
  if (hasGeen) {
    gaps.push(
      "Je hebt aangegeven geen verzekeringen te hebben. In de bouwsector ben je hiermee blootgesteld aan persoonlijke aansprakelijkheid bij elk incident op of rond een werf."
    );
  }
  if (hasWeetNiet && !hasGeen) {
    gaps.push(
      "Je weet niet zeker welke polissen actief zijn. Dat is zelf al een risico: als jij het niet weet, is de kans groot dat je dekking niet aansluit op je huidige activiteiten."
    );
  }
  if (hasTeam && !hasAO) {
    gaps.push(
      `Je hebt ${answers.teamgrootte.toLowerCase()} maar geen arbeidsongevallenverzekering. In België is dit wettelijk verplicht voor werkgevers, ontbreekt ze, riskeer je boetes én persoonlijke aansprakelijkheid bij een arbeidsongeval.`
    );
    besproken.add('arbeidsongevallen');
  }
  if (grootOfMiddelgroot && abrRelevant && !hasABR) {
    gaps.push(
      `Voor ${answers.projectgrootte.toLowerCase()} is een ABR-polis (Alle Bouwplaatsrisico's) sterk aanbevolen. Zonder ABR zijn onvoorziene schades aan werken in uitvoering niet gedekt, en dat kan snel oplopen.`
    );
    besproken.add('alle-bouwplaats-risicos');
  }
  if (answers.advies === 'Ja' && !hasBA) {
    gaps.push(
      "Je levert ook advies of ontwerp, maar hebt geen BA Onderneming. Een fout in een studie, plan of na oplevering kan leiden tot een claim die niet gedekt is zonder deze polis."
    );
    besproken.add('ba-onderneming');
  }
  if (answers.onderaannemers === 'Ja, regelmatig' && abrRelevant && !hasABR) {
    gaps.push(
      "Je werkt regelmatig met onderaannemers, maar hebt geen ABR. Bij schade op een gedeelde werf kan onduidelijkheid over aansprakelijkheid leiden tot langlopende claims."
    );
    besproken.add('alle-bouwplaats-risicos');
  }
  if (answers.materiaalwaarde === 'Ja' && materiaalSlug && !geselecteerd.has(materiaalSlug)) {
    const materiaalTitel = getVerzekering(materiaalSlug)?.titel.toLowerCase() ?? 'materiaaldekking';
    gaps.push(
      `Je hebt materiaal of gereedschap boven €5.000 maar geen ${materiaalTitel}. Diefstal of schade aan je tools betekent niet alleen kosten, het betekent stilstand op de werf.`
    );
    besproken.add(materiaalSlug);
  }
  // BA Onderneming is voor elk bouwberoep de basispolis: ontbreekt ze en is er
  // nog geen boodschap over getoond, dan altijd expliciet benoemen.
  if (!hasBA && !hasGeen && !hasWeetNiet && !besproken.has('ba-onderneming')) {
    gaps.push(
      "Je hebt geen BA Onderneming. Dit is de basispolis die schade aan derden op en rond de werf dekt, zonder deze dekking draag je een schadegeval aan een klant, passant of buur volledig zelf."
    );
    besproken.add('ba-onderneming');
  }
  if (geselecteerd.has('bedrijfsvoertuigen') && geselecteerd.has('machinebreuk')) {
    gaps.push(
      "Mogelijke overlap: controleer of je materiaal in de bestelwagen niet dubbel gedekt is, eenmaal via de voertuigpolis, en eenmaal via je machinebreukverzekering. Dat is geld dat je bespaart."
    );
  }
  if (answers.laatsteControle === 'Nog nooit') {
    gaps.push(
      "Je polissen zijn nog nooit grondig doorgelicht. Zelfs een correcte verzekering kan na verloop van tijd niet meer aansluiten op je activiteiten, omzet of teamgrootte."
    );
  }
  if (answers.laatsteControle === 'Meer dan 2 jaar geleden') {
    gaps.push(
      "Je laatste review dateert van meer dan 2 jaar geleden. Sindsdien zijn premies, dekkingslimieten en wetgeving mogelijk veranderd, en misschien ook jouw bedrijf zelf."
    );
  }

  // ---- Generieke aanvulling: overige relevante-maar-ontbrekende polissen ----
  // Niet bij "Geen"/"Weet ik niet" (daar dekt de blanket-boodschap alles) en
  // arbeidsongevallen niet aanraden aan solo zelfstandigen (enkel verplicht
  // met personeel). Max. 2 extra zodat het rapport behapbaar blijft.
  if (!hasGeen && !hasWeetNiet) {
    const overige = relevant.filter(
      (v) =>
        v.categorie !== SCORE_NEUTRALE_CATEGORIE &&
        !geselecteerd.has(v.slug) &&
        !besproken.has(v.slug) &&
        !(v.slug === 'arbeidsongevallen' && !hasTeam)
    );
    const overigeGesorteerd = [...overige].sort(
      (a, b) => polisGewicht(b.slug, b.categorie) - polisGewicht(a.slug, a.categorie)
    );
    for (const pol of overigeGesorteerd.slice(0, 2)) {
      gaps.push(`Nog niet in je pakket: ${pol.titel}. ${pol.korteBeschrijving}`);
    }
  }

  // ---- Pensioen/fiscaal: enkel als losse kans-tip, geen invloed op score ----
  const pensioenOptie = relevant.find((v) => v.categorie === SCORE_NEUTRALE_CATEGORIE);
  const kansPensioen =
    pensioenOptie && !geselecteerd.has(pensioenOptie.slug) && !hasGeen
      ? `${pensioenOptie.titel}. ${pensioenOptie.korteBeschrijving}`
      : null;

  // ---- Urgentie-header ----
  const nooit = answers.laatsteControle === 'Nog nooit';
  const oud = answers.laatsteControle === 'Meer dan 2 jaar geleden';
  let urgentie: string;
  if (resultType === 'HIGH_RISK' && (nooit || hasGeen)) {
    urgentie = 'Jouw situatie verdient dringend aandacht, elk project dat je aanneemt is nu een ongedekt risico.';
  } else if (resultType === 'HIGH_RISK') {
    urgentie = 'Jouw situatie verdient dringend aandacht.';
  } else if (resultType === 'ATTENTION_NEEDED' && (nooit || oud)) {
    urgentie = 'Er zijn aandachtspunten, en die zijn al een tijdje niet bekeken. Dat is het moment om actie te nemen.';
  } else if (resultType === 'ATTENTION_NEEDED') {
    urgentie = 'Goed begin, maar er zijn concrete aandachtspunten voor jouw situatie.';
  } else if (resultType === 'BASE_OK' && !nooit && !oud) {
    urgentie = 'Je basis lijkt in orde. Maar de details en de finesses tellen, zeker in de bouw.';
  } else {
    urgentie = 'Je basis lijkt in orde, maar de details tellen.';
  }

  return { score, resultType, urgentie, gaps, kansPensioen, beroep, hasTeam };
}

function generateRapportHtml(result: ResultData): string {
  const gapsHtml = result.gaps.map((g) => `<li style="margin-bottom:8px;">${g}</li>`).join('');
  const borderColor =
    result.resultType === 'HIGH_RISK' ? '#ef4444' : result.resultType === 'ATTENTION_NEEDED' ? '#d97706' : '#22c55e';
  const bgColor =
    result.resultType === 'HIGH_RISK' ? '#fef2f2' : result.resultType === 'ATTENTION_NEEDED' ? '#fffbeb' : '#f0fdf4';
  const pensioenHtml = result.kansPensioen
    ? `<div style="margin-top:16px;padding:14px 18px;background:#F5F2FF;border-radius:8px;"><strong>Kans:</strong> ${result.kansPensioen}</div>`
    : '';

  return `
    <div style="background-color:${bgColor};border:1px solid ${borderColor};border-radius:8px;padding:20px;margin:25px 0;">
      <h2 style="color:${borderColor};margin-top:0;font-size:20px;">${result.urgentie}</h2>
      <h3 style="color:#1e293b;margin-top:0;">Mogelijke gaten en aandachtspunten:</h3>
      <ul style="padding-left:20px;margin-bottom:0;">${gapsHtml}</ul>
    </div>
    <h3 style="color:#3F5767;font-size:18px;margin-top:30px;">Typisch voor ${(result.beroep?.titel ?? '').toLowerCase()}:</h3>
    <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:15px;margin-bottom:15px;">
      <p style="margin:0;font-size:14px;"><strong>Tip:</strong> ${result.beroep?.tip ?? ''}</p>
    </div>
    <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:15px;margin-bottom:15px;">
      <p style="margin:0;font-size:14px;">${result.beroep?.fout1 ?? ''}</p>
    </div>
    <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:15px;margin-bottom:15px;">
      <p style="margin:0;font-size:14px;">${result.beroep?.fout2 ?? ''}</p>
    </div>
    ${pensioenHtml}
  `;
}

/** Nette weergavenaam voor een selectie in stap 5, incl. de pseudo-opties. */
function verzekeringLabel(slug: string): string {
  if (slug === 'geen') return 'Geen';
  if (slug === 'weet-niet') return 'Weet ik niet';
  return getVerzekering(slug)?.titel ?? slug;
}

function generateInterneNotitie(answers: Answers, result: ResultData): string {
  return `RESULTAAT: ${result.resultType} (Score: ${result.score})
Bedrijf: ${answers.bedrijfsnaam}
Naam: ${answers.naam}
Email: ${answers.email}
Telefoon: ${answers.telefoon}

ANTWOORDEN:
- Beroep: ${result.beroep?.titel ?? answers.hoofdactiviteit}
- Cluster: ${result.beroep?.cluster ?? 'n.v.t.'}
- Teamgrootte: ${answers.teamgrootte}
- Onderaannemers: ${answers.onderaannemers}
- Projectgrootte: ${answers.projectgrootte}
- Verzekeringen: ${answers.verzekeringen.map(verzekeringLabel).join(', ')}
- Andere verzekering (vrije tekst): ${answers.verzekeringAndere || '-'}
- Materiaalwaarde > €5k: ${answers.materiaalwaarde}
- Advies/Ontwerp: ${answers.advies}
- Laatste controle: ${answers.laatsteControle}

URGENTIE: ${result.urgentie}
GAPS:
${result.gaps.map((g) => '- ' + g).join('\n')}
KANS (pensioen/fiscaal, niet meegeteld in score): ${result.kansPensioen ?? '-'}
`;
}

// -----------------------------------------------------------------------------
// Shared styles
// -----------------------------------------------------------------------------

const s = {
  h2: {
    fontFamily: "'Outfit',sans-serif",
    fontWeight: 800,
    fontSize: 'clamp(24px,3.5vw,32px)',
    lineHeight: 1.15,
    color: '#001F3F',
    margin: '0 0 8px',
  } as CSSProperties,
  p: {
    fontFamily: "'Outfit',sans-serif",
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#3F5767',
    margin: '0 0 28px',
  } as CSSProperties,
  tile: (active: boolean): CSSProperties => ({
    cursor: 'pointer',
    background: active ? 'rgba(229,165,36,0.06)' : '#FFFFFF',
    border: active ? '1px solid #E5A524' : '1px solid rgba(0,31,63,0.12)',
    boxShadow: active ? '0 0 0 1px #E5A524 inset' : 'none',
    borderRadius: '10px',
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'border-color 0.15s, background 0.15s',
    textAlign: 'left',
    width: '100%',
  }),
  tileTitle: {
    fontFamily: "'Outfit',sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    color: '#001F3F',
  } as CSSProperties,
  iconWrap: (active: boolean): CSSProperties => ({
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: active ? '#E5A524' : 'rgba(229,165,36,0.10)',
    color: active ? '#FFFFFF' : '#E5A524',
  }),
};

function OptionButton({
  label,
  active,
  onClick,
  sub,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  sub?: string;
}) {
  return (
    <button type="button" onClick={onClick} style={s.tile(active)}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={s.tileTitle}>{label}</span>
        {sub && <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '13px', color: '#7A6A55' }}>{sub}</span>}
      </div>
    </button>
  );
}

// -----------------------------------------------------------------------------
// Main component
// -----------------------------------------------------------------------------

interface ScanProps {
  webhookUrl: string;
  /** LAB-modus: toont op het resultaatscherm een grijze debug-regel met de exacte verzendstatus. */
  debug?: boolean;
}

export default function VerzekeringsScan({ webhookUrl, debug = false }: ScanProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
  const [activeCluster, setActiveCluster] = useState<ScanClusterKey | null>(null);
  const [toonAndereVeld, setToonAndereVeld] = useState(false);
  const [contactErrors, setContactErrors] = useState<{ email?: string; telefoon?: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [verzendInfo, setVerzendInfo] = useState('nog niet verstuurd');
  const mountTimeRef = useRef(0);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const progress = (Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100;

  const updateAnswer = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => setStep((s2) => s2 + 1);
  const goPrev = () => {
    if (step === 1 && activeCluster) {
      setActiveCluster(null);
      return;
    }
    setStep((s2) => Math.max(1, s2 - 1));
  };

  const kiesBeroep = (slug: string) => {
    updateAnswer('hoofdactiviteit', slug);
    setTimeout(goNext, 250);
  };

  const toggleVerzekering = (slug: string) => {
    setAnswers((prev) => {
      let current = [...prev.verzekeringen];
      if (slug === 'geen' || slug === 'weet-niet') {
        return { ...prev, verzekeringen: [slug] };
      }
      current = current.filter((v) => v !== 'geen' && v !== 'weet-niet');
      current = current.includes(slug) ? current.filter((v) => v !== slug) : [...current, slug];
      return { ...prev, verzekeringen: current };
    });
  };

  const isStepValid = (): boolean => {
    switch (step) {
      case 1:
        return !!answers.hoofdactiviteit;
      case 2:
        return !!answers.teamgrootte;
      case 3:
        return !!answers.onderaannemers;
      case 4:
        return !!answers.projectgrootte;
      case 5:
        return answers.verzekeringen.length > 0;
      case 6:
        return !!answers.materiaalwaarde;
      case 7:
        return !!answers.advies;
      case 8:
        return !!answers.laatsteControle;
      case 9:
        return !!answers.bedrijfsnaam && !!answers.naam && !!answers.email && !!answers.telefoon;
      default:
        return true;
    }
  };

  const validateContact = () => {
    const fe: { email?: string; telefoon?: string } = {};
    if (!EMAIL_RE.test(answers.email.trim())) fe.email = 'Geef een geldig e-mailadres in.';
    if (answers.telefoon.trim().length < 8) fe.telefoon = 'Geef een geldig telefoonnummer in.';
    return fe;
  };

  const handleSubmitScan = async () => {
    // Honeypot: bot vult dit verborgen veld in. Doe alsof het lukt.
    // console.warn zodat dit bij het testen diagnosticeerbaar is (bots lezen
    // geen console; echte bezoekers verliezen we zo niet ongemerkt).
    if (answers.website.trim() !== '') {
      console.warn('[VerzekeringsScan] Niet verstuurd: honeypot-veld was ingevuld (bot, of autofill van de browser).');
      setVerzendInfo('overgeslagen: honeypot ingevuld (bot of browser-autofill)');
      goNext();
      return;
    }
    // Time-trap: hele scan in <4s ingevuld = bot. Silent success.
    if (Date.now() - mountTimeRef.current < MIN_FILL_MS) {
      console.warn('[VerzekeringsScan] Niet verstuurd: scan in minder dan 4s ingevuld (time-trap).');
      setVerzendInfo('overgeslagen: sneller dan 4s ingevuld (time-trap)');
      goNext();
      return;
    }
    const fe = validateContact();
    if (Object.keys(fe).length > 0) {
      setContactErrors(fe);
      return;
    }
    setContactErrors({});
    setSubmitStatus('submitting');

    const result = calculateResult(answers);
    const payload = {
      naam: answers.naam.trim(),
      bedrijfsnaam: answers.bedrijfsnaam.trim(),
      email: answers.email.trim(),
      telefoon: answers.telefoon.trim(),
      // Keys 1-op-1 gelijk aan de bestaande GHL custom-field-namen uit fase 1
      // (contact.hoofdactiviteit etc.), zodat het mappen in de workflow triviaal is.
      hoofdactiviteit: result.beroep?.titel ?? answers.hoofdactiviteit,
      scan_cluster: result.beroep?.cluster ?? '',
      teamgrootte: answers.teamgrootte,
      onderaannemers: answers.onderaannemers,
      projectgrootte: answers.projectgrootte,
      verzekeringen: answers.verzekeringen.map(verzekeringLabel).join(', '),
      verzekeringen_andere: answers.verzekeringAndere.trim(),
      materiaalwaarde: answers.materiaalwaarde,
      advies: answers.advies,
      laatste_controle: answers.laatsteControle,
      scan_score: result.score,
      scan_resultaat: result.resultType,
      scan_urgentie: result.urgentie,
      scan_risicos: result.gaps.join(' | '),
      scan_kans_pensioen: result.kansPensioen ?? '',
      beroepsspecifieke_tip: result.beroep?.tip ?? '',
      veelgemaakte_fout_1: result.beroep?.fout1 ?? '',
      veelgemaakte_fout_2: result.beroep?.fout2 ?? '',
      scan_rapport_html: generateRapportHtml(result),
      scan_interne_notitie: generateInterneNotitie(answers, result),
      bron: 'verzekeringsscan',
      entry_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
    };

    // Placeholder-URL (webhook nog niet aangemaakt in GHL): niets versturen,
    // wel het resultaat tonen. Zie docs/planning/scan-ghl-veldcontract.md.
    if (webhookUrl.startsWith('REPLACE_ME')) {
      console.info('[VerzekeringsScan] Webhook-URL is nog een placeholder; payload niet verstuurd.', payload);
      setVerzendInfo('overgeslagen: webhook-URL is nog een placeholder');
      setSubmitStatus('idle');
      goNext();
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      console.info(`[VerzekeringsScan] Payload verstuurd, antwoord: HTTP ${res.status}`);
      setVerzendInfo(`verstuurd, antwoord van GHL: HTTP ${res.status}${res.ok ? ' (OK)' : ' (FOUT)'}`);
      setSubmitStatus(res.ok ? 'idle' : 'error');
    } catch (err) {
      // Netwerkfout: server onbereikbaar, óf een adblocker die
      // leadconnectorhq.com blokkeert (staat op gangbare blocklists).
      console.error('[VerzekeringsScan] Versturen mislukt (netwerkfout of adblocker):', err);
      setVerzendInfo('MISLUKT: netwerkfout, mogelijk blokkeert een adblocker leadconnectorhq.com');
      setSubmitStatus('error');
    }
    goNext();
  };

  const handleNext = () => {
    if (step === TOTAL_STEPS) {
      handleSubmitScan();
      return;
    }
    goNext();
  };

  // ---------------------------------------------------------------------------
  // Render: resultaatscherm (step 10)
  // ---------------------------------------------------------------------------
  if (step > TOTAL_STEPS) {
    const result = calculateResult(answers);
    const headerColor =
      result.resultType === 'HIGH_RISK' ? '#dc2626' : result.resultType === 'ATTENTION_NEEDED' ? '#b45309' : '#16a34a';
    const cardBorder =
      result.resultType === 'HIGH_RISK'
        ? '1px solid rgba(220,38,38,0.3)'
        : result.resultType === 'ATTENTION_NEEDED'
          ? '1px solid rgba(217,119,6,0.3)'
          : '1px solid rgba(34,197,94,0.3)';
    const cardBg =
      result.resultType === 'HIGH_RISK'
        ? 'rgba(220,38,38,0.05)'
        : result.resultType === 'ATTENTION_NEEDED'
          ? 'rgba(217,119,6,0.05)'
          : 'rgba(34,197,94,0.05)';
    const HeaderIcon = result.resultType === 'BASE_OK' ? CheckCircle2 : AlertTriangle;

    return (
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', color: headerColor }}>
          <HeaderIcon size={30} style={{ flexShrink: 0, marginTop: '2px' }} />
          <h2 style={{ ...s.h2, margin: 0 }}>{result.urgentie}</h2>
        </div>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '14px', color: '#7A6A55', marginBottom: '32px' }}>
          Gebaseerd op je antwoorden als <strong>{result.beroep?.titel}</strong>
          {result.hasTeam ? ` met ${answers.teamgrootte.toLowerCase()}` : ', solo'}.
        </p>

        {debug && (
          <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#3F5767', background: 'rgba(0,31,63,0.05)', border: '1px dashed rgba(0,31,63,0.2)', borderRadius: '6px', padding: '8px 12px', marginBottom: '24px' }}>
            LAB-debug · verzendstatus: {verzendInfo}
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            role="alert"
            style={{ background: 'rgba(185,28,28,0.06)', border: '1px solid rgba(185,28,28,0.2)', borderRadius: '8px', padding: '14px 18px', fontFamily: "'Open Sans',sans-serif", fontSize: '14px', color: '#7F1D1D', lineHeight: 1.5, marginBottom: '32px' }}
          >
            Het versturen van je resultaat per e-mail is niet gelukt. Je rapport staat hieronder gewoon klaar, maar
            neem gerust ook contact op via{' '}
            <a href={CTA_DESTINATIONS.email} style={{ color: '#001F3F', fontWeight: 700, textDecoration: 'underline' }}>
              info@assurman.be
            </a>
            .
          </div>
        )}

        {result.gaps.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ ...s.h2, fontSize: '18px', marginBottom: '12px' }}>
              {result.resultType === 'BASE_OK' ? 'Aandachtspunten om te bespreken' : "Concrete risico's op basis van jouw antwoorden"}
            </h3>
            <div style={{ background: cardBg, border: cardBorder, borderRadius: '10px', padding: '24px' }}>
              {result.gaps.map((gap, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#001F3F', marginBottom: i < result.gaps.length - 1 ? '14px' : 0 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: headerColor, marginTop: '7px', flexShrink: 0 }} />
                  <span>{gap}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {result.kansPensioen && (
          <div style={{ marginBottom: '32px', background: '#F5F2FF', border: '1px solid rgba(213,196,174,0.3)', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', color: '#7A6A55', margin: '0 0 8px' }}>
              Kans, geen risico
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: '#001F3F', margin: 0, lineHeight: 1.6 }}>{result.kansPensioen}</p>
          </div>
        )}

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ ...s.h2, fontSize: '18px', marginBottom: '12px' }}>Typisch voor {result.beroep?.titel.toLowerCase()}</h3>
          <div style={{ background: 'rgba(229,165,36,0.05)', border: '1px solid rgba(229,165,36,0.25)', borderRadius: '10px', padding: '24px' }}>
            <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#001F3F', marginBottom: '16px' }}>
              <Info size={16} color="#E5A524" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{result.beroep?.tip}</span>
            </div>
            <div style={{ borderTop: '1px solid rgba(229,165,36,0.2)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: '#7A6A55', margin: 0 }}>
                Veelgemaakte fouten in jouw sector
              </p>
              <div style={{ fontSize: '14px', color: '#001F3F' }}>{result.beroep?.fout1}</div>
              <div style={{ fontSize: '14px', color: '#001F3F' }}>{result.beroep?.fout2}</div>
            </div>
          </div>
        </div>

        {answers.verzekeringAndere.trim() && (
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '13px', color: '#7A6A55', fontStyle: 'italic', marginBottom: '24px' }}>
            Je vermeldde ook nog: "{answers.verzekeringAndere.trim()}"
          </p>
        )}

        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '13px', color: '#7A6A55', background: 'rgba(0,31,63,0.04)', borderRadius: '8px', padding: '14px 18px', display: 'flex', gap: '8px', marginBottom: '40px' }}>
          <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
          Dit is een indicatieve scan, geen verzekeringsadvies. Elke situatie is anders, ook binnen hetzelfde beroep.
        </p>

        <div style={{ background: '#3F5767', borderRadius: '14px', padding: '40px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,30px)', color: '#FFFFFF', margin: '0 0 12px' }}>
            Wil je zeker zijn dat je correct verzekerd bent?
          </h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: '#CBD5E1', maxWidth: '520px', margin: '0 auto 28px' }}>
            {result.resultType === 'HIGH_RISK'
              ? 'Boek vandaag nog een gratis gesprek met een Assurman-expert. Geen verplichtingen, enkel duidelijkheid.'
              : result.resultType === 'ATTENTION_NEEDED'
                ? 'Boek een vrijblijvend gesprek en we kijken samen naar de puntjes die er toe doen.'
                : 'Je basis is goed. Een kort gesprek bevestigt dat, of toont waar nog winst zit.'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CTA_DESTINATIONS.afspraak} className="brand-btn-primary">
              <Calendar size={18} />
              Boek je gratis gesprek
            </a>
            <a href={CTA_DESTINATIONS.tel} className="brand-btn-dark">
              <Phone size={18} />
              Bel ons direct
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Render: stappen 1-9
  // ---------------------------------------------------------------------------
  return (
    <div>
      <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '13px', fontWeight: 600, color: '#7A6A55' }}>
          Stap {step} van {TOTAL_STEPS}
        </span>
      </div>
      <div style={{ height: '6px', background: 'rgba(0,31,63,0.08)', borderRadius: '999px', marginBottom: '32px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: '#E5A524', borderRadius: '999px', transition: 'width 0.3s ease' }} />
      </div>

      {step === 1 && (
        <div>
          <h2 style={s.h2}>Wat is jouw hoofdactiviteit?</h2>
          <p style={s.p}>
            {activeCluster
              ? 'Kies het beroep dat het best bij je past.'
              : 'Kies eerst de groep die het best bij je bedrijf past.'}
          </p>

          {!activeCluster && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {SCAN_CLUSTERS.map((c) => {
                const Icon = CLUSTER_ICON[c.key];
                return (
                  <button key={c.key} type="button" onClick={() => setActiveCluster(c.key)} style={s.tile(false)}>
                    <div style={s.iconWrap(false)}>
                      <Icon size={22} />
                    </div>
                    <span style={s.tileTitle}>{c.label}</span>
                  </button>
                );
              })}
              <button type="button" onClick={() => kiesBeroep(ANDERE_BEROEP_SLUG)} style={s.tile(false)}>
                <div style={s.iconWrap(false)}>
                  <HelpCircle size={22} />
                </div>
                <span style={s.tileTitle}>Mijn beroep staat er niet tussen</span>
              </button>
            </div>
          )}

          {activeCluster && (
            <div>
              <button
                type="button"
                onClick={() => setActiveCluster(null)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#7A6A55', fontFamily: "'Open Sans',sans-serif", fontSize: '13px', fontWeight: 600, marginBottom: '16px', padding: 0 }}
              >
                <ArrowLeft size={14} /> Andere groep kiezen
              </button>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                {beroepenPerCluster()
                  .find((g) => g.cluster.key === activeCluster)!
                  .beroepen.map((b) => (
                    <OptionButton key={b.slug} label={b.titel} active={answers.hoofdactiviteit === b.slug} onClick={() => kiesBeroep(b.slug)} />
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 style={s.h2}>Werk je alleen of heb je personeel?</h2>
          <p style={s.p}>Dit beïnvloedt onder andere de arbeidsongevallenverzekering.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { v: 'Solo zelfstandige', icon: User, sub: 'Ik werk voornamelijk alleen' },
              { v: '1 tot 4 medewerkers', icon: Users, sub: 'Klein team' },
              { v: '5 of meer medewerkers', icon: Users2, sub: 'KMO of groter' },
            ].map((opt) => (
              <OptionButton
                key={opt.v}
                label={opt.v}
                sub={opt.sub}
                active={answers.teamgrootte === opt.v}
                onClick={() => {
                  updateAnswer('teamgrootte', opt.v);
                  setTimeout(goNext, 250);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 style={s.h2}>Werk je regelmatig met onderaannemers?</h2>
          <p style={s.p}>Onderaannemers brengen specifieke aansprakelijkheidsrisico's met zich mee.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Ja, regelmatig', 'Soms', 'Nee'].map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                active={answers.onderaannemers === opt}
                onClick={() => {
                  updateAnswer('onderaannemers', opt);
                  setTimeout(goNext, 250);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 style={s.h2}>Wat is je gemiddelde projectgrootte?</h2>
          <p style={s.p}>De waarde van de werven bepaalt de benodigde dekking voor o.a. ABR.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Kleine werven (< €25K)', 'Middelgrote werven (€25K–€150K)', 'Grote projecten (> €150K)'].map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                active={answers.projectgrootte === opt}
                onClick={() => {
                  updateAnswer('projectgrootte', opt);
                  setTimeout(goNext, 250);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2 style={s.h2}>Welke verzekeringen heb je al?</h2>
          <p style={s.p}>Selecteer alle verzekeringen die je momenteel actief hebt. (Meerdere keuzes mogelijk)</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '16px' }}>
            {relevantePolissenVoor(answers.hoofdactiviteit).map((pol) => {
              const active = answers.verzekeringen.includes(pol.slug);
              return (
                <button key={pol.slug} type="button" onClick={() => toggleVerzekering(pol.slug)} style={s.tile(active)}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '5px', border: active ? 'none' : '1px solid rgba(0,31,63,0.25)', background: active ? '#E5A524' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {active && <CheckCircle2 size={14} color="#FFFFFF" />}
                  </div>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '14px', color: '#001F3F' }}>{pol.titel}</span>
                </button>
              );
            })}
            {['geen', 'weet-niet'].map((slug) => {
              const active = answers.verzekeringen.includes(slug);
              return (
                <button key={slug} type="button" onClick={() => toggleVerzekering(slug)} style={s.tile(active)}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '5px', border: active ? 'none' : '1px solid rgba(0,31,63,0.25)', background: active ? '#E5A524' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {active && <CheckCircle2 size={14} color="#FFFFFF" />}
                  </div>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '14px', color: '#001F3F' }}>
                    {slug === 'geen' ? 'Geen' : 'Weet ik niet'}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setToonAndereVeld((v) => !v)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#3F5767', fontFamily: "'Open Sans',sans-serif", fontSize: '13px', fontWeight: 600, padding: 0, marginBottom: toonAndereVeld ? '10px' : 0 }}
          >
            + Nog een andere verzekering? Vul aan
          </button>
          {toonAndereVeld && (
            <input
              type="text"
              value={answers.verzekeringAndere}
              onChange={(e) => updateAnswer('verzekeringAndere', e.target.value)}
              placeholder="Bv. omzetverzekering, brandverzekering..."
              style={{ width: '100%', fontFamily: "'Open Sans',sans-serif", fontSize: '14px', padding: '11px 14px', borderRadius: '8px', border: '1px solid #C7CACF', outline: 'none' }}
            />
          )}
        </div>
      )}

      {step === 6 && (
        <div>
          <h2 style={s.h2}>Heb je eigen materiaal of gereedschap met een totale waarde boven €5.000?</h2>
          <p style={s.p}>Diefstal of schade aan duur werkmateriaal is een veelvoorkomend risico.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Ja', 'Nee', 'Weet ik niet'].map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                active={answers.materiaalwaarde === opt}
                onClick={() => {
                  updateAnswer('materiaalwaarde', opt);
                  setTimeout(goNext, 250);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 7 && (
        <div>
          <h2 style={s.h2}>Lever je naast uitvoering ook advies, ontwerp of studies?</h2>
          <p style={s.p}>Denk aan stabiliteitsstudies, energie-advies of technische ontwerpen.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Ja', 'Nee', 'Soms'].map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                active={answers.advies === opt}
                onClick={() => {
                  updateAnswer('advies', opt);
                  setTimeout(goNext, 250);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 8 && (
        <div>
          <h2 style={s.h2}>Wanneer werd jouw verzekeringssituatie voor het laatst grondig bekeken?</h2>
          <p style={s.p}>De bouwwetgeving en jouw bedrijf veranderen. Je verzekeringen moeten mee evolueren.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Nog nooit', 'Meer dan 2 jaar geleden', 'Minder dan 1 jaar geleden'].map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                active={answers.laatsteControle === opt}
                onClick={() => {
                  updateAnswer('laatsteControle', opt);
                  setTimeout(goNext, 250);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 9 && (
        <div>
          <h2 style={s.h2}>Bijna daar! Waar mogen we je resultaat naartoe sturen?</h2>
          <p style={s.p}>Vul je gegevens in om direct je persoonlijke risicoscan te zien.</p>
          <div style={{ background: '#FFFFFF', border: '1px solid #E9C466', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Honeypot */}
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }} aria-hidden="true">
              <label>
                Laat dit veld leeg
                <input type="text" value={answers.website} onChange={(e) => updateAnswer('website', e.target.value)} tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            {[
              { key: 'bedrijfsnaam' as const, label: 'Bedrijfsnaam', placeholder: 'Bv. Peeters Bouw', type: 'text' },
              { key: 'naam' as const, label: 'Jouw naam', placeholder: 'Jan Peeters', type: 'text' },
              { key: 'email' as const, label: 'E-mailadres', placeholder: 'jan@peetersbouw.be', type: 'email' },
              { key: 'telefoon' as const, label: 'Telefoonnummer', placeholder: '0470 12 34 56', type: 'tel' },
            ].map((f) => (
              <div key={f.key}>
                <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', fontWeight: 600, color: '#3F5767', marginBottom: '6px', display: 'block' }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  value={answers[f.key]}
                  onChange={(e) => updateAnswer(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  style={{ width: '100%', fontFamily: "'Open Sans',sans-serif", fontSize: '15px', padding: '12px 14px', borderRadius: '8px', border: (f.key === 'email' && contactErrors.email) || (f.key === 'telefoon' && contactErrors.telefoon) ? '1px solid #B91C1C' : '1px solid #C7CACF', outline: 'none' }}
                />
                {f.key === 'email' && contactErrors.email && (
                  <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '13px', color: '#B91C1C', marginTop: '6px' }}>{contactErrors.email}</div>
                )}
                {f.key === 'telefoon' && contactErrors.telefoon && (
                  <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '13px', color: '#B91C1C', marginTop: '6px' }}>{contactErrors.telefoon}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', borderTop: '1px solid rgba(0,31,63,0.08)' }}>
        <button
          type="button"
          onClick={goPrev}
          style={{
            visibility: step === 1 && !activeCluster ? 'hidden' : 'visible',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#7A6A55',
            fontFamily: "'Open Sans',sans-serif",
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          <ArrowLeft size={16} /> Vorige
        </button>
        {!(step === 1 && !activeCluster) && (
          <button
            type="button"
            onClick={handleNext}
            disabled={!isStepValid() || submitStatus === 'submitting'}
            className="brand-btn-primary"
            style={{ opacity: !isStepValid() || submitStatus === 'submitting' ? 0.5 : 1, cursor: !isStepValid() || submitStatus === 'submitting' ? 'not-allowed' : 'pointer' }}
          >
            {submitStatus === 'submitting' ? 'Versturen...' : step === TOTAL_STEPS ? 'Bekijk resultaat' : 'Volgende'}
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
