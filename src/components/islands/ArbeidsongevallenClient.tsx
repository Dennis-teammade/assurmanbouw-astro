import { useState, useEffect, useRef } from 'react';
import {
  Shield, AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronRight,
  ArrowRight, Users, Briefcase, Truck, Zap, HardHat, Info, FileText,
  Clock, Phone, Activity, Scale, Wrench, Building2, Layers, Car,
  ChevronLeft,
} from 'lucide-react';
import PartnerSlider from '../ui/PartnerSlider';

// ─── Design tokens (match TSX source exactly) ───────────────────────────────
const GOLD = '#E5A524';
const NAVY = '#001F3F';
const SLATE = '#3F5767';
const LIGHT = '#F7F4EF';
const GOLD_STRIP = '#e5a52414';

const sL: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  color: GOLD,
  marginBottom: 12,
  display: 'block',
};

const h2S = (color = NAVY): React.CSSProperties => ({
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 900,
  fontSize: 'clamp(32px, 3.5vw, 48px)',
  lineHeight: 1.05,
  letterSpacing: -0.5,
  color,
  margin: 0,
});

const bT = (color = NAVY): React.CSSProperties => ({
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: 1.65,
  color,
  margin: 0,
});

// ─── FoldedCard (inline, no external dep) ───────────────────────────────────
type Corner = 'bottom-right' | 'both-top-left-bottom-right';
function FoldedCard({
  corner,
  foldSize,
  background,
  padding,
  style,
  className,
  children,
}: {
  corner: Corner;
  foldSize: number;
  background?: string;
  padding?: string | number;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}) {
  const clips: Record<Corner, string> = {
    'bottom-right': `polygon(0% 0%, 100% 0%, 100% calc(100% - ${foldSize}px), calc(100% - ${foldSize}px) 100%, 0% 100%)`,
    'both-top-left-bottom-right': `polygon(${foldSize}px 0%, 100% 0%, 100% calc(100% - ${foldSize}px), calc(100% - ${foldSize}px) 100%, 0% 100%, 0% ${foldSize}px)`,
  };
  return (
    <div
      className={className}
      style={{ background, padding, clipPath: clips[corner], ...style }}
    >
      {children}
    </div>
  );
}

// ─── Static data ─────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'watis', label: 'Wat is het?' },
  { id: 'verplicht', label: 'Verplicht?' },
  { id: 'dekking', label: 'Dekking' },
  { id: 'premie', label: 'Premie' },
  { id: 'procedure', label: 'Bij ongeval' },
  { id: 'faq', label: 'FAQ' },
];

const FAQ_ITEMS = [
  { q: 'Is een arbeidsongevallenverzekering verplicht vanaf mijn eerste werknemer?', a: 'Ja. In België moet je als werkgever in de privésector je eerste werknemer vanaf de eerste werkdag verzekeren tegen arbeidsongevallen.' },
  { q: 'Volstaat mijn RSZ-inschrijving als werkgever?', a: 'Nee. Een RSZ-inschrijving betekent niet dat je automatisch verzekerd bent. Die verzekering moet apart afgesloten worden bij een erkende arbeidsongevallenverzekeraar.' },
  { q: 'Geldt dit ook voor deeltijdse of tijdelijke werknemers?', a: 'Ja. De verzekeringsplicht geldt voor alle werknemers onder arbeidsovereenkomst: deeltijds, tijdelijk, occasioneel. Zelfs bij een Dimona-aangifte van één dag moet er dekking zijn.' },
  { q: 'Geldt dit ook voor woon-werkverkeer?', a: 'Ja. Ook ongevallen op de normale weg van en naar het werk vallen onder de verzekering. "Normaal" betekent niet per se kortste, maar wel logisch en verantwoord.' },
  { q: 'Hoeveel bedraagt het wettelijk loonplafond in 2026?', a: 'Het wettelijk maximumbasisloon voor arbeidsongevallen bedraagt € 58.096,10 in 2026. Boven dat bedrag wordt er zonder aanvullende waarborg geen vergoeding berekend.' },
  { q: 'Wordt al mijn personeel aan dezelfde premie verzekerd?', a: 'Nee. De premievoet verschilt per functiecategorie. Arbeiders op een werf hebben een hogere voet dan bedienden op kantoor, omdat het ongevallenrisico verschilt.' },
  { q: 'Ben ik als zelfstandige zaakvoerder zelf mee verzekerd?', a: 'Niet automatisch. De verplichte polis is bedoeld voor werknemers onder arbeidsovereenkomst. Voor zelfstandige zaakvoerders zijn andere oplossingen nodig (ongevallenverzekering 24u/24, gewaarborgd inkomen).' },
  { q: 'Moet ik elk ongeval aangeven?', a: 'Niet elk ongeval vereist dezelfde procedure. Lichte arbeidsongevallen worden geregistreerd in het register voor eerste hulp. Aangifteplichtige ongevallen moeten gemeld worden aan de verzekeraar.' },
  { q: 'Binnen welke termijn moet ik aangifte doen?', a: 'In de privésector binnen 8 dagen, te rekenen vanaf de dag na het ongeval.' },
  { q: 'Wat bij een ernstig arbeidsongeval?', a: 'Dan volstaat een gewone aangifte niet. Het ongeval moet onmiddellijk gemeld worden aan de arbeidsinspectie, met omstandig verslag.' },
  { q: 'Zijn stagiairs automatisch mee verzekerd?', a: 'Niet altijd op dezelfde manier. Bij stagiairs hangt de plicht af van hun statuut en opleidingscontext (IBO, BIO, schoolstage, leerjongen).' },
  { q: 'Worden alle medische kosten terugbetaald?', a: 'Medische kosten worden terugbetaald aan RIZIV-tarief. Ereloon- en kamersupplementen vallen niet onder de wettelijke dekking, tenzij er een aanvullende waarborg is.' },
  { q: 'Is de premie fiscaal aftrekbaar?', a: 'Ja. De premie is volledig aftrekbaar als beroepskost. Er is een premietaks van 4,13% verschuldigd, die eveneens aftrekbaar is.' },
  { q: 'Wat als ik niet verzekerd ben?', a: 'Fedris kan ambtshalve tussenkomen om de werknemer te beschermen, maar kosten en bijdragen worden nadien op jou als werkgever verhaald. Bovendien riskeer je strafrechtelijke vervolging.' },
];

const BEROEP_TABS = [
  {
    id: 'dakwerkers', label: 'Dakwerkers', link: '/sectoren/dakwerkers',
    title: 'Voor dakwerkers',
    text: 'Werken op hoogte, ladders, stellingen, gladde oppervlakken en materiaalverplaatsing op of rond het dak. De ongevallen zijn relatief gezien ernstig van aard, wat zich vertaalt in een hogere premievoet.',
  },
  {
    id: 'metsers', label: 'Metsers', link: '/sectoren/aannemers',
    title: 'Voor metsers',
    text: "Risico's rond ruwbouw, zware lasten, stellingen, werfverkeer en fysieke belasting. Rugletsels en knellingsletsels komen vaak voor.",
  },
  {
    id: 'loodgieters', label: 'Loodgieters', link: '/sectoren/loodgieters',
    title: 'Voor loodgieters',
    text: "Verplaatsingen, interventies op locatie, werken in bewoonde panden en risico's in technische ruimtes of renovatiesituaties. Brandwonden, snijwonden en rugklachten zijn typisch.",
  },
  {
    id: 'elektriciens', label: 'Elektriciens', link: '/sectoren/elektriciens',
    title: 'Voor elektriciens',
    text: "Werkzaamheden op renovatie- en nieuwbouwwerven, verplaatsingen tussen werven en werken in technische installaties. Elektrische risico's en val- of struikelongevallen staan bovenaan.",
  },
  {
    id: 'schilders', label: 'Schilders', link: '/sectoren/schilders',
    title: 'Voor schilders',
    text: 'Werken op ladders en stellingen, verplaatsingen tussen werven en blootstelling aan chemische producten (verf, oplosmiddelen). Val- en ademhalingsletsels zijn typisch voor dit beroep.',
  },
  {
    id: 'aannemers', label: 'Algemene aannemers', link: '/sectoren/aannemers',
    title: 'Voor algemene aannemers',
    text: 'Organisatie van meerdere ploegen, onderlinge coördinatie en wisselende werfomstandigheden maken de polis complexer: verschillende functies hebben verschillende premievoeten.',
  },
];

const INSURANCE_CARDS = [
  {
    icon: <Shield size={36} color={GOLD} />,
    title: 'BA Onderneming',
    intro: 'Bescherming wanneer je bedrijf schade veroorzaakt aan derden tijdens de uitbating of de beroepsactiviteit.',
    bullets: ['Schade aan eigendommen van derden', 'Letselschade aan derden', 'Claims rond beroepsfouten', 'Aansprakelijkheid tijdens werken'],
    link: '/verzekeringen/ba-onderneming',
    cta: 'Meer over BA Onderneming',
  },
  {
    icon: <Car size={36} color={GOLD} />,
    title: 'Bedrijfsvoertuigen',
    intro: 'De bestelwagen is onmisbaar op de werf. De juiste dekking houdt je mobiel bij schade, diefstal of pech.',
    bullets: ['BA en omnium voor bestelwagens', 'Bescherming bij diefstal of brand', 'Snelle afhandeling bij schade', 'Afstembaar op jouw wagenpark'],
    link: '/verzekeringen/bedrijfsvoertuigen',
    cta: 'Meer over bedrijfsvoertuigen',
  },
  {
    icon: <Wrench size={36} color={GOLD} />,
    title: 'Machinebreuk',
    intro: 'Professionele machines en gereedschap zijn duur. Een defect of diefstal stopt je werk — deze dekking niet.',
    bullets: ['Machines en gereedschap bij breuk', 'Diefstal op werf of in bestelwagen', 'Vervanging of herstelling', 'Afstembaar op jouw materieel'],
    link: '/verzekeringen/machinebreuk',
    cta: 'Meer over machinebreuk',
  },
  {
    icon: <Building2 size={36} color={GOLD} />,
    title: 'BA-10',
    intro: 'Tienjarige aansprakelijkheid voor aannemers en architecten bij ernstige constructiegebreken na oplevering.',
    bullets: ['Verplicht voor aannemers', 'Dekt constructiegebreken 10 jaar', 'Bescherming na oplevering', 'Vereist bij nieuwbouw'],
    link: '/verzekeringen/ba-10',
    cta: 'Meer over BA-10',
  },
  {
    icon: <Scale size={36} color={GOLD} />,
    title: 'Rechtsbijstand',
    intro: 'Juridische bescherming bij geschillen met klanten, leveranciers of personeel. Zodat je niet alleen staat.',
    bullets: ['Hulp bij juridische conflicten', 'Ondersteuning bij betwiste aansprakelijkheid', 'Tussenkomst bij advocaatkosten', 'Aanvulling op BA en machinebreuk'],
    link: '/verzekeringen/rechtsbijstand',
    cta: 'Meer over rechtsbijstand',
  },
  {
    icon: <Layers size={36} color={GOLD} />,
    title: "Alle Bouwplaats Risico's",
    intro: "Allesomvattende dekking voor schade aan werken in uitvoering. Onmisbaar bij grotere werven of renovaties.",
    bullets: ["Schade tijdens uitvoering", "Risico's door weersinvloeden", "Bescherming bij meerdere partijen", "Flexibel per project of jaarpolis"],
    link: '/verzekeringen/alle-bouwplaats-risicos',
    cta: "Meer over ABR",
  },
];

const INSURANCE_VISIBLE = 3;

// ─── Component ───────────────────────────────────────────────────────────────
export default function ArbeidsongevallenClient() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('watis');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('dakwerkers');
  const [examplesOpen, setExamplesOpen] = useState(false);
  const [insuranceSlide, setInsuranceSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const maxSlide = INSURANCE_CARDS.length - INSURANCE_VISIBLE;

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);

      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setStickyVisible(heroBottom <= 0);
      }

      const ids = NAV_ITEMS.map(n => n.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) { setActiveSection(ids[i]); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .ao-sticky-btn {
          background: #F7F4EF;
          border: 1px solid rgba(229,165,36,0.2);
          cursor: pointer;
          padding: 7px 16px;
          margin: 10px 5px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          border-radius: 9999px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          color: #001F3F;
        }
        .ao-sticky-btn:hover {
          background: rgba(229,165,36,0.15);
          border-color: #E5A524;
          color: #001F3F;
        }
        .ao-sticky-btn.active {
          background: rgba(229,165,36,0.18);
          border-color: #E5A524;
          color: #001F3F;
        }
        .ao-sticky-btn .ao-check {
          color: #94a3b8;
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .ao-sticky-btn.active .ao-check,
        .ao-sticky-btn:hover .ao-check {
          color: #E5A524;
        }
        .ao-ins-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: background 0.2s, transform 0.2s;
          clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0% 100%);
        }
        .ao-ins-card:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-4px);
        }
        .ao-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 20px 24px;
        }
        .ao-tab-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 14px 24px;
          white-space: nowrap;
          font-family: 'Open Sans', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #64748b;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ao-tab-btn.active { color: #E5A524; border-bottom: 2px solid #E5A524; }
        .ao-tab-btn:hover { color: #E5A524; }
        .brand-slide-nav-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 2px solid #E5A524;
          display: flex; align-items: center; justify-content: center;
          background: transparent; cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          color: #001F3F;
        }
        .brand-slide-nav-btn:hover { background: #3F5767; color: white; border-color: #3F5767; }
        .brand-why-card {
          background: #FFFFFF;
          border-left: 4px solid #E5A524;
          box-shadow: 0px 1px 2px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .brand-why-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }
      `}</style>

      {/* SCROLL PROGRESS */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: 'rgba(0,31,63,0.07)' }}>
        <div style={{ height: '100%', background: GOLD, width: `${scrollProgress}%`, transition: 'width 0.1s linear' }} />
      </div>

      <div style={{ fontFamily: "'Outfit', sans-serif", color: NAVY, background: '#FFFFFF' }}>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section ref={heroRef} style={{ paddingTop: 130, background: '#FFFFFF', position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src="/foto-contact-35.png"
            alt="Bouwprofessionals op de werf"
            style={{
              position: 'absolute',
              top: 118,
              right: 0,
              height: '70%',
              width: 'auto',
              maxWidth: '50%',
              objectFit: 'contain',
              objectPosition: 'right top',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 32px 64px', position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '50%' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(229,165,36,0.1)', border: `1px solid rgba(229,165,36,0.25)`, borderRadius: 9999, padding: '6px 16px', marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '1.2px', textTransform: 'uppercase', color: NAVY }}>Assurman · Bouwverzekeringen op maat</span>
              </div>

              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1.04, letterSpacing: -1.5, color: NAVY, marginBottom: 8 }}>
                Arbeidsongevallen&#x2011;<br />verzekering
              </h1>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 34px)', lineHeight: 1.1, letterSpacing: -0.8, color: GOLD, marginBottom: 20 }}>
                Verplicht. Essentieel. Op maat van de bouw.
              </p>

              <p style={{ ...bT(), marginBottom: 28, maxWidth: 500, fontSize: 17 }}>
                Heb je personeel in dienst in de bouwsector? Dan is een arbeidsongevallenverzekering in België geen extra optie, maar een wettelijke verplichting vanaf je eerste werknemer.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
                <a href="/gratis-verzekeringsscan" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 17, padding: '16px 28px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s' }}>
                  Doe de gratis scan <ArrowRight size={16} />
                </a>
                <a href="/maak-afspraak" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: NAVY, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 17, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', border: `2px solid rgba(0,31,63,0.18)`, transition: 'border-color 0.2s' }}>
                  Plan adviesgesprek
                </a>
              </div>

              <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: 13, color: NAVY, opacity: 0.6, marginTop: 4, marginBottom: 200 }}>
                Geen verplichting. We finaliseren je pakket samen na je intake.
              </p>
            </div>
          </div>
        </section>

        {/* ── STICKY NAV ───────────────────────────────────────────── */}
        <div style={{
          position: 'sticky',
          top: 72,
          zIndex: 90,
          background: '#FFFFFF',
          borderBottom: `1px solid rgba(0,31,63,0.08)`,
          transform: stickyVisible ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          overflow: 'auto',
          marginTop: stickyVisible ? 0 : 0,
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`ao-sticky-btn${activeSection === item.id ? ' active' : ''}`}
              >
                <CheckCircle size={14} className="ao-check" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── WAT IS HET ───────────────────────────────────────────── */}
        <section id="watis" style={{ background: '#FFFFFF', padding: '96px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 56, alignItems: 'flex-start' }}>

              {/* "In het kort" kader links */}
              <div style={{ background: SLATE, borderRadius: 0, padding: 32, clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0% 100%)' }}>
                <span style={{ ...sL, color: GOLD }}>In het kort</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    <><strong style={{ color: '#FFFFFF' }}>Wettelijk verplicht</strong> vanaf je eerste werknemer — ook bij een Dimona van één dag.</>,
                    <>Dekt werknemers <strong style={{ color: '#FFFFFF' }}>op de werf én op woon-werkverkeer</strong>.</>,
                    <>Vergoeding begrensd tot <strong style={{ color: '#FFFFFF' }}>€ 58.096,10 (2026)</strong>.</>,
                    <>Aangifte bij de verzekeraar binnen <strong style={{ color: '#FFFFFF' }}>8 dagen</strong>, ernstige ongevallen onmiddellijk.</>,
                    <>Niet verzekerd zijn = <strong style={{ color: '#FFFFFF' }}>strafrechtelijke gevolgen</strong> en alle kosten verhaalbaar.</>,
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <CheckCircle size={16} color={GOLD} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.55, color: '#CBD5E1' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tekst rechts */}
              <div>
                <span style={sL}>Wat is het?</span>
                <h2 style={{ ...h2S(), marginBottom: 24 }}>Een wettelijke basisbescherming voor je personeel</h2>
                <p style={{ ...bT(), marginBottom: 20 }}>
                  Een arbeidsongevallenverzekering beschermt werknemers wanneer zij het slachtoffer worden van een ongeval tijdens het werk of op de normale weg van en naar het werk. Het gaat dus niet alleen over ongevallen op de werf zelf, maar ook over woon-werkverkeer.
                </p>
                <p style={{ ...bT(), marginBottom: 36 }}>
                  Voor bouwbedrijven is dat cruciaal. Een val van een ladder, een ongeval met materiaal, een misstap op een stelling, een incident bij laden en lossen of een verkeersongeval onderweg naar een werf: het zijn allemaal situaties waarin deze verzekering relevant kan worden.
                </p>
                <div style={{ display: 'flex', gap: 20, background: 'rgba(229,165,36,0.07)', border: `1px solid rgba(229,165,36,0.22)`, borderRadius: 10, padding: 24 }}>
                  <Info size={22} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>Wettelijke basis</p>
                    <p style={{ ...bT(SLATE), fontSize: 15 }}>
                      De verplichting is vastgelegd in de <strong>Arbeidsongevallenwet van 10 april 1971</strong>. Toezicht en schadebeheer gebeuren via <strong>Fedris</strong> (Federaal agentschap voor beroepsrisico's).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IS HET VERPLICHT ─────────────────────────────────────── */}
        <section id="verplicht" style={{ background: GOLD_STRIP, padding: '96px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Is het verplicht?</span>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 18, color: '#64748b', marginBottom: 8 }}>
                Is een arbeidsongevallenverzekering verplicht in België?
              </p>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(72px, 12vw, 128px)', lineHeight: 0.9, color: NAVY, letterSpacing: -4 }}>Ja.</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 20, color: SLATE, marginTop: 12 }}>
                Vanaf de eerste werkdag van je eerste werknemer.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {[
                { icon: <FileText size={28} color={GOLD} />, title: 'RSZ ≠ dekking', text: 'Een RSZ-inschrijving betekent niet dat je automatisch verzekerd bent. De polis staat los daarvan en moet apart afgesloten worden.' },
                { icon: <Clock size={28} color={GOLD} />, title: 'Geen retroactief effect', text: 'Dekking kan niet achteraf ingaan. De polis moet actief zijn vóór de eerste werkdag van de werknemer.' },
                { icon: <Users size={28} color={GOLD} />, title: 'Ook deeltijds & tijdelijk', text: 'De verplichting geldt voor alle werknemers onder arbeidsovereenkomst: voltijds, deeltijds, interim, seizoenswerk.' },
                { icon: <Shield size={28} color={GOLD} />, title: 'Ook tijdens proefperiode', text: 'Zelfs tijdens een proeftermijn of bij een Dimona van één dag moet er dekking zijn.' },
              ].map((card, i) => (
                <FoldedCard key={i} corner="bottom-right" foldSize={24} background="#FFFFFF" padding={28} style={{ boxShadow: '0 2px 8px rgba(0,31,63,0.05)' }}>
                  <div style={{ background: 'rgba(229,165,36,0.1)', borderRadius: 10, padding: 12, display: 'inline-flex', marginBottom: 18 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ ...bT('#64748b'), fontSize: 15 }}>{card.text}</p>
                </FoldedCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── WANNEER ARBEIDSONGEVAL ───────────────────────────────── */}
        <section style={{ background: '#FFFFFF', padding: '0 32px 96px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src="/ASSURMAN_BRAND_ARROW-horizontal-GEEL.png" alt="" style={{ height: 80, width: 'auto' }} />
          </div>

          <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 48 }}>
            <div style={{ maxWidth: 640, marginBottom: 52 }}>
              <span style={sL}>De 5 voorwaarden</span>
              <h2 style={{ ...h2S(), marginBottom: 20 }}>Wanneer is er sprake van een arbeidsongeval?</h2>
              <p style={{ ...bT() }}>Een ongeval wordt als arbeidsongeval erkend wanneer het voldoet aan vijf wettelijke voorwaarden. Het moet gaan om:</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 44 }}>
              {['Een plotse gebeurtenis', 'Met een externe oorzaak', 'Tijdens het werk', 'Door het werk', 'Met een letsel tot gevolg'].map((v, i) => (
                <div key={i} className="ao-ins-card" style={{
                  background: SLATE,
                  padding: '28px 20px',
                  textAlign: 'center',
                  transition: 'background 0.2s, transform 0.2s',
                }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 36, color: GOLD, lineHeight: 1, marginBottom: 10 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: '#FFFFFF', margin: 0, lineHeight: 1.4 }}>{v}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 20, background: 'rgba(229,165,36,0.07)', border: `1px solid rgba(229,165,36,0.22)`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
              <Info size={22} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>Ook woon-werkverkeer telt mee</p>
                <p style={{ ...bT(SLATE), fontSize: 15 }}>
                  Een ongeval op de normale weg van en naar het werk wordt ook als arbeidsongeval beschouwd. "Normaal" betekent niet per se het kortste traject, maar wel logisch en verantwoord. Korte onderbrekingen (kinderen afzetten, even tanken, kort langs de bouwhandel) blijven meestal toegelaten.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={() => setExamplesOpen(v => !v)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(0,31,63,0.04)', border: `1px solid rgba(0,31,63,0.1)`, borderRadius: 8, padding: '14px 24px', cursor: 'pointer', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 15, color: NAVY }}>
                <span>Bekijk 6 concrete voorbeelden uit de bouw</span>
                <ChevronDown size={18} style={{ transform: examplesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
            </div>
            {examplesOpen && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  'Een dakwerker valt van een ladder tijdens werken op hoogte',
                  'Een metser raakt gewond bij het verplaatsen van zware materialen',
                  'Een elektricien struikelt op een renovatiewerf en loopt letsels op',
                  'Een loodgieter krijgt onderweg naar een werf een verkeersongeval',
                  'Een arbeider glijdt uit op een natte werfzone bij het laden of lossen',
                  'Een stukadoor loopt een oogletsel op door opspattend materiaal',
                ].map((ex, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: LIGHT, borderRadius: 8, padding: '12px 16px' }}>
                    <CheckCircle size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: NAVY, lineHeight: 1.5 }}>{ex}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ── DEKKING ──────────────────────────────────────────────── */}
        <section id="dekking" style={{ background: LIGHT, padding: '96px 32px' }}>
          <div style={{ maxWidth: 1025, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Dekking</span>
              <h2 style={{ ...h2S(), marginBottom: 16 }}>Wat is wél en niet gedekt?</h2>
              <p style={{ ...bT('#64748b'), maxWidth: 580, margin: '0 auto' }}>
                De wettelijke basisdekking beschermt je werknemer bij een erkend arbeidsongeval, maar niet alles valt onder de polis.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
              <div style={{ background: '#FFFFFF', border: `2px solid rgba(34,197,94,0.5)`, borderRadius: 1, overflow: 'hidden' }}>
                <div style={{ background: 'rgba(34,197,94,0.08)', borderBottom: `1px solid rgba(34,197,94,0.18)`, padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={18} color="#16a34a" />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: '#15803d' }}>Wel gedekt</span>
                </div>
                <ul style={{ listStyle: 'none', padding: '20px 28px', margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {['Medische kosten, terugbetaald aan RIZIV-tarief', 'Hospitalisatie, geneesmiddelen en prothesen', 'Verplaatsingskosten verbonden aan de behandeling', '90% van het begrensde loon bij tijdelijke arbeidsongeschiktheid', 'Vergoeding of rente bij blijvende arbeidsongeschiktheid', 'Uitvaartkosten en rente voor nabestaanden bij overlijden'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: NAVY, lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: `2px solid rgba(239,68,68,0.5)`, borderRadius: 1, overflow: 'hidden' }}>
                <div style={{ background: 'rgba(239,68,68,0.06)', borderBottom: `1px solid rgba(239,68,68,0.18)`, padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <XCircle size={18} color="#dc2626" />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: '#b91c1c' }}>Niet (of beperkt) gedekt</span>
                </div>
                <ul style={{ listStyle: 'none', padding: '20px 28px', margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {['Stoffelijke schade (kledij, smartphone, materiaal)', 'Morele schade', 'Loon boven het wettelijk plafond (zonder aanvulling)', 'Ereloon- en kamersupplementen bij hospitalisatie', 'De resterende 10% gewaarborgd loon in de eerste maand', 'Zaakvoerders zonder arbeidsovereenkomst'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <XCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: NAVY, lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Loonplafond */}
            <div style={{ background: SLATE, clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0% 100%)', padding: '36px 40px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
              <div>
                <span style={{ ...sL }}>Loonplafond</span>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 24, color: '#FFFFFF', marginBottom: 12 }}>Op welk loon wordt er berekend?</h3>
                <p style={{ ...bT('#CBD5E1'), fontSize: 15, maxWidth: 520 }}>
                  De wettelijke vergoedingen zijn gebaseerd op het brutoloon van de werknemer, maar begrensd tot een jaarlijks geïndexeerd maximumbasisloon. Verdient je werknemer meer, dan is een aanvullende waarborg aangewezen.
                </p>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1.2px', textTransform: 'uppercase', color: GOLD, marginBottom: 6 }}>Wettelijk plafond · 2026</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 44, color: '#FFFFFF', letterSpacing: -1, lineHeight: 1 }}>€ 58.096,10</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#94a3b8', marginTop: 6 }}>per jaar, per werknemer</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AANVULLENDE WAARBORGEN ───────────────────────────────── */}
        <section style={{ background: SLATE, padding: '0 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src="/ASSURMAN_BRAND_ARROW-horizontal-WIT.png" alt="" style={{ height: 80, width: 'auto' }} />
          </div>

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 32px 0', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 640, marginBottom: 52 }}>
              <span style={{ ...sL, color: GOLD }}>Aanvullen</span>
              <h2 style={{ ...h2S('#FFFFFF'), marginBottom: 16 }}>Welke aanvullingen zijn zinvol voor de bouw?</h2>
              <p style={{ ...bT('#CBD5E1') }}>De wettelijke polis is de basis. In de praktijk zien we dat bouwbedrijven bijna altijd baat hebben bij een of meer aanvullingen.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { icon: <Activity size={24} color={GOLD} />, title: 'Excedent wet', text: 'Verzekert het deel van het loon boven € 58.096,10. Relevant voor ploegbazen, werfleiders, calculators of gespecialiseerde technici.' },
                { icon: <Shield size={24} color={GOLD} />, title: 'Gewaarborgd loon', text: 'Dicht het gat tussen de 90% die de verzekering betaalt en de 100% die je als werkgever de eerste maand moet uitkeren, inclusief patronale bijdragen.' },
                { icon: <Users size={24} color={GOLD} />, title: 'Privéleven', text: 'Breidt de dekking uit naar ongevallen in het privéleven van je werknemer. Populair voor retentie en extra bescherming buiten de werf.' },
                { icon: <Truck size={24} color={GOLD} />, title: 'Bijstand dienstopdrachten', text: 'Relevant bij werven in het buitenland of langere verplaatsingen binnen België — medische bijstand en repatriëring inbegrepen.' },
                { icon: <Briefcase size={24} color={GOLD} />, title: 'Thuiswerk & events', text: 'Dekt ongevallen tijdens thuiswerk (calculators, werkvoorbereiders) en door de werkgever georganiseerde events.' },
                {
                  isCtaCard: true as const,
                  icon: null as any,
                  title: '',
                  text: '',
                },
              ].map((card, i) => {
                if (card.isCtaCard) {
                  return (
                    <div key={i} style={{
                      background: GOLD,
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0% 100%)',
                      padding: 32,
                      display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    }}>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22, color: NAVY, marginBottom: 12 }}>Volledig op jouw maat</h3>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: 'rgba(0,31,63,0.75)', lineHeight: 1.55, marginBottom: 20 }}>
                        Niet elke bouwactiviteit heeft dezelfde aanvullingen nodig. Laat ons jouw polis doorlichten in een gratis scan.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                          href="/gratis-verzekeringsscan"
                          style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                            background: SLATE, color: '#FFFFFF',
                            fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 15,
                            padding: '12px 24px', borderRadius: 8, textDecoration: 'none',
                            transition: 'background 0.2s',
                            width: '100%',
                          }}
                          onMouseOver={e => (e.currentTarget.style.background = '#324554')}
                          onMouseOut={e => (e.currentTarget.style.background = SLATE)}
                        >
                          Doe de scan <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={i} className="ao-ins-card" style={{ padding: 28 }}>
                    <div style={{ background: 'rgba(229,165,36,0.15)', borderRadius: 10, padding: 10, display: 'inline-flex', marginBottom: 16 }}>{card.icon}</div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: '#FFFFFF', marginBottom: 10 }}>{card.title}</h3>
                    <p style={{ ...bT('#94A3B8'), fontSize: 15 }}>{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PREMIE ───────────────────────────────────────────────── */}
        <section id="premie" style={{ background: LIGHT, padding: '0 32px 96px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src="/ASSURMAN_BRAND_ARROW-horizontal-GEEL.png" alt="" style={{ height: 80, width: 'auto' }} />
          </div>

          <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 48 }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Prijs & berekening</span>
              <h2 style={{ ...h2S(), marginBottom: 16 }}>Hoe wordt de premie berekend?</h2>
              <p style={{ ...bT('#64748b'), maxWidth: 520, margin: '0 auto' }}>De premie ligt niet vast per wet. Verzekeraars bepalen die zelf, maar volgen een herkenbare logica.</p>
            </div>

            {/* Formule */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 64, flexWrap: 'wrap' }}>
              {[
                { label: '1. Loonmassa', main: 'Brutolonen', note: 'begrensd tot € 58.096,10/werknemer', accent: false },
                null,
                { label: '2. Premievoet', main: 'Activiteit + functie', note: 'bouw = hogere voet dan kantoor', accent: false },
                null,
                { label: 'Jaarpremie', main: 'Jouw polis', note: 'afgerekend op werkelijke lonen', accent: true },
              ].map((block, i) => {
                if (block === null) return (
                  <div key={i} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 40, color: GOLD, userSelect: 'none' }}>
                    {i === 1 ? '×' : '='}
                  </div>
                );
                return (
                  <div key={i} style={{
                    background: block.accent ? SLATE : '#FFFFFF',
                    border: `1px solid ${block.accent ? 'transparent' : 'rgba(0,31,63,0.1)'}`,
                    borderRadius: 12,
                    padding: '28px 32px', textAlign: 'center', minWidth: 200,
                    boxShadow: block.accent ? '0 8px 32px rgba(63,87,103,0.3)' : '0 2px 8px rgba(0,31,63,0.05)',
                  }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '1.2px', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>{block.label}</div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 20, color: block.accent ? '#FFFFFF' : NAVY, marginBottom: 8 }}>{block.main}</div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: block.accent ? '#94a3b8' : '#64748b', lineHeight: 1.4 }}>{block.note}</div>
                  </div>
                );
              })}
            </div>

            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 22, color: NAVY, textAlign: 'center', marginBottom: 32 }}>4 factoren die je premievoet beïnvloeden</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 800, margin: '0 auto 40px' }}>
              {[
                { num: '1', title: 'Activiteit van het bedrijf', text: 'Bouw heeft een hoger risicoprofiel dan administratie.' },
                { num: '2', title: 'Functie van de werknemer', text: 'Arbeiders hebben doorgaans een hogere voet dan bedienden.' },
                { num: '3', title: 'Schadestatistieken', text: 'Eerdere ongevallen binnen je bedrijf beïnvloeden de voet.' },
                { num: '4', title: 'Aantal werknemers & aanvullingen', text: 'Extra waarborgen verhogen de premie, maar verlagen het risico.' },
              ].map((f, i) => (
                <div key={i} className="brand-why-card" style={{ padding: '20px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 16, color: NAVY }}>{f.num}</span>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 4 }}>{f.title}</h4>
                    <p style={{ ...bT('#64748b'), fontSize: 14 }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fiscale box */}
            <div style={{ maxWidth: 640, margin: '0 auto' }}>
              <FoldedCard corner="both-top-left-bottom-right" foldSize={24} background="rgba(229,165,36,0.10)" padding="20px 28px" style={{ border: `1px solid rgba(229,165,36,0.3)` }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Info size={18} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ ...bT(), fontSize: 15 }}>
                    <strong>Fiscaal:</strong> de premie is volledig aftrekbaar als beroepskost. Op de premie is wel een premietaks van <strong>4,13%</strong> verschuldigd, die ook aftrekbaar is.
                  </p>
                </div>
              </FoldedCard>
            </div>
          </div>
        </section>

        {/* ── TUSSEN-CTA BAND ──────────────────────────────────────── */}
        <section style={{ background: '#E9C466', padding: '0 0 100px', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/verzekeringen_arbeidsongevallen.png"
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              right: -5,
              height: '100%',
              width: 'auto',
              maxWidth: '40%',
              objectFit: 'contain',
              objectPosition: 'right top',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 60, position: 'relative', zIndex: 3, pointerEvents: 'none' }}>
            <img src="/ASSURMAN_BRAND_ARROW-horizontal-WIT.png" alt="" style={{ height: 100, width: 'auto', opacity: 1 }} />
          </div>
          <div style={{ position: 'absolute', right: -20, top: '30%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 2 }}>
            <img src="/ASSURMAN_BRAND_ARROW-WIT.png" alt="" style={{ height: 240, width: 'auto' }} />
          </div>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 4, padding: '0 32px' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.15, color: '#FFFFFF', marginBottom: 16 }}>
              Bouwprofessional in Vlaanderen?<br />
              Wij maken jouw pakket op maat.
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 22, lineHeight: 1.4, color: SLATE, marginBottom: 40, opacity: 0.9 }}>
              Start nu in 2 minuten of kies meteen voor persoonlijk advies.
            </p>
            <a href="/gratis-verzekeringsscan" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: SLATE, color: '#FFFFFF', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18, padding: '18px 40px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.2s' }}>
              Vraag nu een scan aan
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* ── PER BEROEP TABS ───────────────────────────────────────── */}
        <section style={{ background: GOLD_STRIP, padding: '96px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Per beroep</span>
              <h2 style={{ ...h2S(), marginBottom: 16 }}>Wat betekent dit voor jouw stiel?</h2>
              <p style={{ ...bT('#64748b'), maxWidth: 520, margin: '0 auto' }}>De verzekering is dezelfde, maar de risico's verschillen per beroep.</p>
            </div>

            <div style={{ display: 'flex', gap: 0, borderBottom: `2px solid rgba(0,31,63,0.12)`, marginBottom: 40, justifyContent: 'center' }}>
              {BEROEP_TABS.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`ao-tab-btn${activeTab === tab.id ? ' active' : ''}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {BEROEP_TABS.filter(t => t.id === activeTab).map(tab => (
              <div key={tab.id} style={{ background: '#FFFFFF', borderRadius: 12, padding: '36px 40px', display: 'flex', gap: 32, alignItems: 'flex-start', maxWidth: 860, margin: '0 auto' }}>
                <div style={{ background: 'rgba(229,165,36,0.12)', borderRadius: 12, padding: 18, flexShrink: 0 }}>
                  <HardHat size={32} color={GOLD} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22, color: NAVY, marginBottom: 12 }}>{tab.title}</h3>
                  <p style={{ ...bT(), fontSize: 17, marginBottom: 20 }}>{tab.text}</p>
                  <a href={tab.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: GOLD, textDecoration: 'none' }}>
                    Bekijk sectorpagina <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STATUTEN ACCORDION ───────────────────────────────────── */}
        <section style={{ background: SLATE, padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 840, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span style={{ ...sL, color: GOLD }}>Statuten</span>
            <h2 style={{ ...h2S('#FFFFFF'), marginBottom: 16 }}>Zaakvoerder, onderaannemers, stagiairs?</h2>
            <p style={{ ...bT('#CBD5E1'), marginBottom: 40 }}>Een punt waar veel verwarring rond bestaat. Hieronder per statuut wat geldt — klik open om te lezen.</p>

            {[
              {
                icon: <Briefcase size={20} color={GOLD} />,
                title: 'Ik werk alleen als zelfstandige zaakvoerder',
                content: (
                  <>
                    <p style={{ ...bT('#CBD5E1'), fontSize: 16, marginBottom: 16 }}>De verplichte arbeidsongevallenverzekering beschermt werknemers onder arbeidsovereenkomst. Werk je als zelfstandige zaakvoerder zonder arbeidsovereenkomst, dan ben je <strong style={{ color: '#FFFFFF' }}>niet automatisch mee verzekerd</strong> via deze polis.</p>
                    <p style={{ ...bT('#CBD5E1'), fontSize: 16, marginBottom: 12 }}>Voor jezelf als zaakvoerder kan je kijken naar:</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {['een ongevallenverzekering voor zelfstandigen (24u/24-formule)', 'een verzekering gewaarborgd inkomen', 'een aanvullende individuele ongevallenverzekering'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <ChevronRight size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#CBD5E1' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                icon: <Users size={20} color={GOLD} />,
                title: 'Ik werk met onderaannemers',
                content: (
                  <>
                    <p style={{ ...bT('#CBD5E1'), fontSize: 16, marginBottom: 16 }}>Werk je met zelfstandige onderaannemers, ga er dan niet automatisch vanuit dat zij onder jouw polis vallen. Belangrijk is te bekijken:</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {['wie is werknemer (onder arbeidsovereenkomst)?', 'wie is zelfstandige onderaannemer?', 'heeft de onderaannemer zelf zijn personeel correct verzekerd?', 'hoe wordt dit contractueel afgedekt in de werfafspraken?'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <ChevronRight size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#CBD5E1' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ background: 'rgba(229,165,36,0.12)', border: `1px solid rgba(229,165,36,0.25)`, borderRadius: 8, padding: '14px 18px' }}>
                      <p style={{ ...bT('#CBD5E1'), fontSize: 15 }}><strong style={{ color: '#FFFFFF' }}>Let op:</strong> een "zelfstandige" die in werkelijkheid functioneert als werknemer kan door Fedris of de rechtbank als werknemer herkwalificeerd worden — met terugwerkende kracht aan alle gevolgen van dien.</p>
                    </div>
                  </>
                ),
              },
              {
                icon: <HardHat size={20} color={GOLD} />,
                title: 'Ik heb stagiairs of leerjongens',
                content: (
                  <p style={{ ...bT('#CBD5E1'), fontSize: 16 }}>Ook hier is het statuut bepalend. Voor werknemers onder arbeidsovereenkomst is de plicht duidelijk. Voor stagiairs kan de regeling verschillen naargelang het statuut en de opleidingscontext (IBO, BIO, schoolstage, leerjongen). Dat moet per situatie correct bekeken worden.</p>
                ),
              },
            ].map((panel, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 10, overflow: 'hidden', marginBottom: 12 }}>
                <button className="ao-accordion-btn" onClick={() => setOpenAccordion(openAccordion === i ? null : i)}>
                  <div style={{ background: 'rgba(229,165,36,0.15)', borderRadius: 8, padding: 8, flexShrink: 0 }}>{panel.icon}</div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: '#FFFFFF', flex: 1 }}>{panel.title}</span>
                  <ChevronDown size={18} color="#CBD5E1" style={{ flexShrink: 0, transform: openAccordion === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {openAccordion === i && (
                  <div style={{ padding: '0 24px 24px 24px' }}>{panel.content}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── BIJ EEN ONGEVAL ───────────────────────────────────────── */}
        <section id="procedure" style={{ background: '#FFFFFF', padding: '0 32px 96px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src="/ASSURMAN_BRAND_ARROW-horizontal-GEEL.png" alt="" style={{ height: 80, width: 'auto' }} />
          </div>

          <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 48 }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Bij een ongeval</span>
              <h2 style={{ ...h2S(), marginBottom: 16 }}>Wat moet je doen als er iets gebeurt?</h2>
              <p style={{ ...bT('#64748b'), maxWidth: 520, margin: '0 auto' }}>Een goede polis is belangrijk, maar een correcte reactie na een ongeval evenzeer. Deze 4 stappen houd je aan.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: `linear-gradient(to right, ${GOLD}, rgba(229,165,36,0.2))`, zIndex: 0 }} />
              {[
                { icon: <Phone size={20} color={NAVY} />, title: 'Meteen melden', text: 'Werknemer meldt het ongeval zo snel mogelijk aan de werkgever, ook bij beperkte gevolgen.' },
                { icon: <Activity size={20} color={NAVY} />, title: 'Inschatting maken', text: 'Licht, aangifteplichtig of ernstig? Bepaalt de volgende stap.' },
                { icon: <FileText size={20} color={NAVY} />, title: 'Aangifte binnen 8 dagen', text: 'Bij aangifteplichtig ongeval: aangifte bij de verzekeraar via Publiato, binnen 8 dagen na het ongeval.' },
                { icon: <AlertTriangle size={20} color={NAVY} />, title: 'Ernstig? Arbeidsinspectie', text: 'Ernstige ongevallen onmiddellijk melden aan de arbeidsinspectie, met omstandig verslag.' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 4px 16px rgba(229,165,36,0.3)' }}>
                    {s.icon}
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 13, letterSpacing: '1px', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>Stap {i + 1}</div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ ...bT('#64748b'), fontSize: 15 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALERT: NIET VERZEKERD ─────────────────────────────────── */}
        <section style={{ background: '#FEF2F2', borderTop: '1px solid rgba(239,68,68,0.15)', borderBottom: '1px solid rgba(239,68,68,0.15)', padding: '56px 32px' }}>
          <div style={{ maxWidth: 1025, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'flex-start', marginBottom: 16 }}>
              <div style={{ background: 'rgba(239,68,68,0.1)', borderRadius: 12, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={48} color="#dc2626" strokeWidth={1.8} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 26, color: '#991b1b', marginBottom: 12 }}>Wat als je niet of te laat verzekerd bent?</h2>
                <p style={{ ...bT('#7f1d1d'), fontSize: 16, marginBottom: 0 }}>Niet correct verzekerd zijn is geen detail. Fedris kan ambtshalve aansluiten, maar de rekening wordt op jou verhaald:</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                'Werknemer blijft beschermd via Fedris',
                'Alle kosten worden op de werkgever verhaald',
                'Forfaitaire ambtshalve bijdrage per niet-verzekerde maand',
                'Strafrechtelijke vervolging (geldboete, in ernstige gevallen gevangenisstraf)',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'rgba(239,68,68,0.05)', borderRadius: 8, padding: '12px 16px' }}>
                  <XCircle size={15} color="#dc2626" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#7f1d1d', lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section id="faq" style={{ background: LIGHT, padding: '96px 32px' }}>
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Veelgestelde vragen</span>
              <h2 style={{ ...h2S(), marginBottom: 12 }}>Antwoorden op de meest voorkomende vragen</h2>
              <p style={{ ...bT('#64748b') }}>14 concrete vragen van bouwondernemers — klik open voor het antwoord.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: `1px solid rgba(0,31,63,0.08)`, borderRadius: 10, overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: NAVY, lineHeight: 1.35 }}>{item.q}</span>
                    <ChevronDown size={18} color="#64748b" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px' }}>
                      <p style={{ ...bT(SLATE), fontSize: 16 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GERELATEERDE VERZEKERINGEN (carousel) ────────────────── */}
        <section style={{ background: '#F5F2FF', padding: '96px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span style={{ ...sL, display: 'block', textAlign: 'center' }}>Ook interessant</span>
              <h2 style={{ ...h2S(), marginBottom: 16 }}>Gerelateerde verzekeringen</h2>
              <p style={{ ...bT('#64748b'), maxWidth: 520, margin: '0 auto' }}>
                Deze verzekeringen vullen je basisdekking aan en worden vaak samen bekeken in een bouwpolis.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${INSURANCE_CARDS.length}, calc((100% - 40px) / 3))`,
                  gap: 20,
                  transform: `translateX(calc(-${insuranceSlide} * (100% / ${INSURANCE_CARDS.length}) * ${INSURANCE_CARDS.length / INSURANCE_VISIBLE} + -${insuranceSlide * 20 / INSURANCE_VISIBLE}px))`,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}>
                  {INSURANCE_CARDS.map((card, idx) => (
                    <div key={idx} style={{ background: '#FFFFFF', padding: 40, boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0% 100%)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ background: 'rgba(229,165,36,0.1)', borderRadius: 8, padding: 16, display: 'inline-flex', alignSelf: 'flex-start', marginBottom: 24 }}>
                        {card.icon}
                      </div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.27, color: NAVY, marginBottom: 12 }}>{card.title}</h3>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: NAVY, marginBottom: 24 }}>{card.intro}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                        {card.bullets.map((bullet, bidx) => (
                          <li key={bidx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <CheckCircle size={18} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: NAVY }}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={card.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 15, color: GOLD, textDecoration: 'none' }}>
                        {card.cta} <ChevronRight size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 40 }}>
                <button onClick={() => setInsuranceSlide(s => Math.max(0, s - 1))} disabled={insuranceSlide === 0} className="brand-slide-nav-btn" style={{ opacity: insuranceSlide === 0 ? 0.35 : 1 }} aria-label="Vorige">
                  <ChevronLeft size={18} />
                </button>
                <div style={{ display: 'flex', gap: 8 }}>
                  {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                    <button key={i} onClick={() => setInsuranceSlide(i)} style={{ height: 4, width: i === insuranceSlide ? 40 : 24, borderRadius: 2, background: i === insuranceSlide ? GOLD : 'rgba(229,165,36,0.25)', border: 'none', cursor: 'pointer', padding: 0, transition: 'width 0.3s, background 0.3s' }} aria-label={`Pagina ${i + 1}`} />
                  ))}
                </div>
                <button onClick={() => setInsuranceSlide(s => Math.min(maxSlide, s + 1))} disabled={insuranceSlide === maxSlide} className="brand-slide-nav-btn" style={{ opacity: insuranceSlide === maxSlide ? 0.35 : 1 }} aria-label="Volgende">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS ─────────────────────────────────────────────── */}
        <section style={{ background: '#F7F4EF', padding: '64px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, color: '#7A6A55', textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 36 }}>
              Ondersteund door sterke verzekeringspartners
            </p>
            <PartnerSlider />
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section style={{ background: SLATE, paddingTop: 120, paddingBottom: 0, position: 'relative', textAlign: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '28px 28px', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 896, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
            <span style={{ ...sL, display: 'block', textAlign: 'center', marginBottom: 20 }}>Start met Assurman</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, color: '#FFFFFF', maxWidth: 727, margin: '0 auto 24px' }}>
              Is jouw bouwbedrijf correct verzekerd?
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 22, lineHeight: 1.4, color: '#CBD5E1', maxWidth: 832, margin: '0 auto 48px' }}>
              Werk je in de bouwsector en wil je zeker zijn dat jouw personeel correct verzekerd is? Wij bekijken met jou wat echt nodig is — zonder verplichting.
            </p>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 80, flexWrap: 'wrap' }}>
              <a href="/gratis-verzekeringsscan" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, padding: '20px 40px', borderRadius: 8, textDecoration: 'none', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', transition: 'transform 0.15s' }}>
                Doe de gratis scan <ArrowRight size={18} />
              </a>
              <a href="/maak-afspraak" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, padding: '20px 40px', borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', transition: 'background 0.2s' }}>
                Plan adviesgesprek
              </a>
            </div>
          </div>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <polygon points="0,60 1440,20 1440,60" fill="#FFFFFF" />
          </svg>
        </section>

      </div>
    </>
  );
}
