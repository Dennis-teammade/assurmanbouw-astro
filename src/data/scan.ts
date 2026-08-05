// =============================================================================
// CENTRALE DATABRON — verzekeringsscan (fase 2)
// Voedt VerzekeringsScan.tsx (het scan-island) en de resultaatberekening.
// Zelfde patroon als cta-labels.ts / verzekeringen.ts: één bron, geen hardcoded
// kopieën elders.
//
// Herkomst van de data:
// - Clusters + beroepen: 1-op-1 overgenomen van de indeling op /sectoren
//   (src/pages/sectoren/index.astro), zodat de scan hetzelfde mentale model
//   gebruikt als de rest van de site.
// - verzekeringSlugs per beroep: overgenomen uit de bestaande `insuranceCards =
//   kaartenVoor([...])`-lijst op elke sectorpagina (het al-gecureerde pakket van
//   7 relevante polissen per beroep). Geen nieuwe aanname, bestaande contentkeuze.
// - tip/fout1/fout2: voor dakwerkers, elektriciens, loodgieters, schrijnwerkers,
//   aannemers 1-op-1 hergebruikt uit de fase-1-scan (GHL). Voor de overige 14
//   beroepen (incl. koeltechniek-hvac, dat in fase 1 nog samen met loodgieters
//   liep) vers opgesteld, gegrond in de bestaande sectorpagina-copy (hero-intro,
//   "waarom"-sectie, case studies). **Concept — nog niet inhoudelijk nagekeken
//   door Benoit**, zie docs/planning/scan-ghl-veldcontract.md.
//
// Beslissingen (bevestigd door Dennis, 2026-07-25):
// - "Levert advies/ontwerp zonder BA Onderneming" blijft een aparte gap-boodschap
//   (dichtst bij de fase-1-logica), ook al bestaat "Beroepsaansprakelijkheid" niet
//   meer als apart product in de 18-polissenlijst — BA Onderneming dekt nu ook
//   BA Na Levering.
// - Pensioen/fiscaal-polissen (VAPZ, POZ, IPT, Groepsverzekering, Aanvullend
//   pensioen) tellen NOOIT mee in de risicoscore. Ze worden getoond als losse
//   "kans"-tip, los van de HIGH_RISK/ATTENTION_NEEDED/BASE_OK-score.
// =============================================================================

import { getVerzekering, type VerzekeringCategorie } from './verzekeringen';

export type ScanClusterKey = 'ruwbouw' | 'afwerking' | 'technieken' | 'buiten';

export interface ScanCluster {
  key: ScanClusterKey;
  label: string;
}

export const SCAN_CLUSTERS: ScanCluster[] = [
  { key: 'ruwbouw', label: 'Ruwbouw & infrastructuur' },
  { key: 'afwerking', label: 'Afwerking & interieur' },
  { key: 'technieken', label: 'Technieken & installatie' },
  { key: 'buiten', label: 'Dak, tuin & buitenruimte' },
];

/** Speciale beroep-slug voor wie niet in de 19 sectoren past. Geen eigen /sectoren-pagina. */
export const ANDERE_BEROEP_SLUG = 'andere-bouwactiviteit';

export interface ScanBeroep {
  /** Matcht de /sectoren/{slug}-pagina, behalve voor ANDERE_BEROEP_SLUG. */
  slug: string;
  titel: string;
  cluster: ScanClusterKey | null;
  /** Slugs uit verzekeringen.ts — het reeds gecureerde polispakket van de sectorpagina. */
  verzekeringSlugs: string[];
  tip: string;
  fout1: string;
  fout2: string;
}

export const SCAN_BEROEPEN: ScanBeroep[] = [
  // ===== Ruwbouw & infrastructuur =====
  {
    slug: 'aannemers',
    titel: 'Algemene aannemers',
    cluster: 'ruwbouw',
    // ABR toegevoegd bovenop het sectorpagina-pakket: de onderaannemers- en
    // projectgrootte-gaps (en de aannemers-tip) draaien rond ABR, dus die polis
    // moet selecteerbaar zijn in stap 5 om de logica te laten werken.
    verzekeringSlugs: ['ba-onderneming', 'ba-10', 'alle-bouwplaats-risicos', 'arbeidsongevallen', 'bedrijfsvoertuigen', 'machinebreuk', 'rechtsbijstand', 'groepsverzekering'],
    tip: 'Als hoofdaannemer draag je de eindverantwoordelijkheid, ook voor fouten van je onderaannemers op jouw werf. Controleer altijd of zij zelf correct verzekerd zijn, en zorg dat jouw ABR die situatie dekt.',
    fout1: 'Ervan uitgaan dat de verzekering van een onderaannemer voldoende is als er iets misgaat, de bouwheer komt bij jou aankloppen als eindverantwoordelijke.',
    fout2: 'ABR niet afstemmen op de totale projectwaarde, een polis met een te lage limiet keert niet volledig uit bij een grote schadeclaim.',
  },
  {
    slug: 'grondwerkers',
    titel: 'Grondwerkers',
    cluster: 'ruwbouw',
    verzekeringSlugs: ['ba-onderneming', 'ba-10', 'alle-bouwplaats-risicos', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'groepsverzekering'],
    tip: 'Bij grondwerk zit het risico letterlijk onder de grond. Een geraakte nutsleiding of een verzakking bij het aanpalende pand kan snel oplopen tot tienduizenden euro\'s schade. Zorg dat je BA-onderneming en ABR op elkaar zijn afgestemd voor het soort graafwerk dat je doet.',
    fout1: 'Ervan uitgaan dat een geraakte gas- of waterleiding vanzelf gedekt is, terwijl de gevolgschade en de noodinterventie van de netbeheerder vaak hoger uitvallen dan verwacht.',
    fout2: 'Geen machinebreukverzekering nemen voor de graafmachine of kraan, waardoor een defect midden in een project meteen de hele werf stillegt.',
  },
  {
    slug: 'asfalteerders',
    titel: 'Asfalteerders',
    cluster: 'ruwbouw',
    verzekeringSlugs: ['ba-onderneming', 'alle-bouwplaats-risicos', 'machinebreuk', 'bedrijfsvoertuigen', 'rechtsbijstand', 'arbeidsongevallen', 'aanvullend-pensioen'],
    tip: 'Vlakheid en afwatering zijn de meest voorkomende discussiepunten bij asfaltering. Een klant die klaagt over plassen op de parking of een niet-vlak wegdek kan een dure herstelclaim inleiden. Rechtsbijstand en een goede BA-onderneming zijn hier je eerste verdediging.',
    fout1: 'Denken dat een discussie over vlakheid of afwatering vanzelf overwaait, terwijl dit net de meest voorkomende claim is in de sector.',
    fout2: 'Geen machinebreuk nemen voor de asfalteermachine of wals, terwijl een defect midden in een asfaltering, die op temperatuur verwerkt moet worden, meteen de hele werf stillegt.',
  },
  {
    slug: 'bestraters',
    titel: 'Bestraters & kasseileggers',
    cluster: 'ruwbouw',
    verzekeringSlugs: ['ba-onderneming', 'alle-bouwplaats-risicos', 'machinebreuk', 'bedrijfsvoertuigen', 'rechtsbijstand', 'arbeidsongevallen', 'vapz'],
    tip: 'Verzakking en afwatering zijn de klassieke discussiepunten bij bestrating. Een oprit die water richting de garage laat lopen in plaats van naar de straat, kan leiden tot een volledige heraanleg op jouw kosten. Zorg dat je BA en rechtsbijstand dit soort geschillen dekken.',
    fout1: 'Denken dat een verzakte oprit of een afwateringsprobleem geen zaak is voor je verzekering, terwijl dit de meest voorkomende schadeclaim is bij bestrating.',
    fout2: 'Klinkers, kasseien en materiaal die \'s nachts op de werf blijven liggen niet verzekeren, terwijl diefstal van voorraad geregeld voorkomt.',
  },

  // ===== Afwerking & interieur =====
  {
    slug: 'schilders',
    titel: 'Schilders',
    cluster: 'afwerking',
    verzekeringSlugs: ['ba-onderneming', 'bedrijfsvoertuigen', 'machinebreuk', 'rechtsbijstand', 'arbeidsongevallen', 'alle-bouwplaats-risicos', 'poz'],
    tip: 'Vallen van een ladder of stelling is het grootste risico voor schilders, en een arbeidsongevallenverzekering is dan onmisbaar zodra je personeel hebt. Daarnaast leidt schade die pas weken later opduikt, zoals vocht of schimmel achter een verflaag, vaak tot discussie: kies voor voldoende nawerking op je BA Onderneming.',
    fout1: 'Denken dat een klacht over kleurschakering vanzelf tot herstel op jouw kosten leidt, terwijl een expert via rechtsbijstand vaak vaststelt dat de kleur wel degelijk conform de bestelling was.',
    fout2: 'Te weinig nawerking voorzien op je polis, terwijl schade zoals vocht of schimmel na schraapwerk soms pas maanden later aan het licht komt.',
  },
  {
    slug: 'schrijnwerkers',
    titel: 'Schrijnwerkers',
    cluster: 'afwerking',
    verzekeringSlugs: ['ba-onderneming', 'machinebreuk', 'bedrijfsvoertuigen', 'rechtsbijstand', 'arbeidsongevallen', 'alle-bouwplaats-risicos', 'aanvullend-pensioen'],
    tip: 'Maatwerk en plaatsing zijn je grootste aansprakelijkheidsrisico. Een keuken die niet past, een deur die niet sluit, of schade bij transport van het meubilair, elk van die momenten kan leiden tot een claim.',
    fout1: 'Denken dat een standaard BA ook schade aan het product zelf dekt (bv. een beschadigd keukenblad tijdens plaatsing), dat is doorgaans uitgesloten.',
    fout2: 'Geen materiaaldekking voor duur gereedschap of CNC-machines in het atelier, terwijl die waarde snel de 20.000 euro overstijgt.',
  },
  {
    slug: 'stukadoors',
    titel: 'Stukadoors',
    cluster: 'afwerking',
    verzekeringSlugs: ['ba-onderneming', 'rechtsbijstand', 'alle-bouwplaats-risicos', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'vervoerde-goederen', 'vapz'],
    tip: 'Bij pleisterwerk is "mooi afgewerkt" deels subjectief. Krimpscheuren, een kleurverschil in sierpleister of pleisterwerk dat loslaat leiden sneller tot discussie dan tot een echt gebrek. Een goede rechtsbijstandverzekering helpt je zo\'n geschil objectief te laten beoordelen.',
    fout1: 'Denken dat elke krimpscheur of elk kleurverschil in sierpleister een uitvoeringsfout is waarvoor je meteen aansprakelijk bent, zonder dat de droogomstandigheden of de ondergrond in rekening zijn gebracht.',
    fout2: 'Geen BA-onderneming die schade aan de vloer of meubels van de klant dekt, terwijl je vaak in bewoonde woningen werkt waar een gemorste emmer pleister al snel duur uitvalt.',
  },
  {
    slug: 'chappers',
    titel: 'Chappers',
    cluster: 'afwerking',
    verzekeringSlugs: ['ba-onderneming', 'ba-10', 'rechtsbijstand', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'poz'],
    tip: 'Een chape lijkt een detail, maar de gevolgschade is dat niet. Ligt de dekvloer niet vlak of scheurt ze, dan werkt dat door in het tegel- of parketwerk erbovenop. Omdat de chape structureel deel uitmaakt van de vloeropbouw, is een tienjarige aansprakelijkheid (BA-10) hier geen overbodige luxe.',
    fout1: 'Enkel je eigen werk verzekeren en niet de gevolgschade aan de afwerking erbovenop, terwijl tegels of parket op een gebrekkige chape vaak duurder uitvallen dan de chape zelf.',
    fout2: 'Geen machinebreukdekking nemen voor je pomp of menginstallatie, terwijl een defect daaraan meteen meerdere werven tegelijk stillegt.',
  },
  {
    slug: 'vloerders-tegelzetters',
    titel: 'Vloerders & tegelzetters',
    cluster: 'afwerking',
    verzekeringSlugs: ['ba-onderneming', 'rechtsbijstand', 'vervoerde-goederen', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'alle-bouwplaats-risicos', 'poz'],
    tip: 'Loskomende tegels, een hol klinkende vloer of een kleurverschil in natuursteen zijn de meest voorkomende discussiepunten bij tegelwerk. Omdat natuursteen en grootformaat tegels ook nog eens duur en breekbaar zijn, is een dekking voor vervoerde goederen minstens even belangrijk als je aansprakelijkheid.',
    fout1: 'Denken dat kleurverschil in natuursteen een uitvoeringsfout is, terwijl dit een natuurlijke eigenschap van het materiaal is die je vooraf beter aan de klant uitlegt.',
    fout2: 'Geen dekking voor vervoerde goederen nemen, terwijl een gebroken grootformaat plaat tijdens transport of plaatsing al snel duizenden euro\'s schade betekent.',
  },
  {
    slug: 'parketzetters',
    titel: 'Parketzetters',
    cluster: 'afwerking',
    verzekeringSlugs: ['ba-onderneming', 'rechtsbijstand', 'vervoerde-goederen', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'vapz'],
    tip: 'Hout is een levend materiaal. Parket dat werkt, krimpt of kiert door vocht in de ondergrond of het binnenklimaat leidt vaak tot discussie over wie aansprakelijk is. Documenteer je vochtmetingen altijd en zorg dat je rechtsbijstand dit soort geschillen mee opvangt.',
    fout1: 'Meteen aansprakelijkheid aanvaarden als parket gaat werken, zonder eerst te laten vaststellen of de oorzaak bij het binnenklimaat of de ondergrond ligt in plaats van bij je plaatsing.',
    fout2: 'Kras- en stootschade aan bestaande afwerking van de klant, zoals trappen of plinten, niet gedekt zien, terwijl dat bij het binnenbrengen van parket in bewoonde woningen geregeld voorkomt.',
  },

  // ===== Technieken & installatie =====
  {
    slug: 'elektriciens',
    titel: 'Elektriciens',
    cluster: 'technieken',
    verzekeringSlugs: ['ba-onderneming', 'bedrijfsvoertuigen', 'machinebreuk', 'alle-bouwplaats-risicos', 'rechtsbijstand', 'arbeidsongevallen', 'ipt'],
    tip: 'Als elektricien ben je ook na oplevering aansprakelijk voor gebreken in je installatie. Een brand door een elektrisch defect jaren later kan herleid worden naar jouw werk, beroepsaansprakelijkheid na oplevering (via BA Onderneming) is cruciaal.',
    fout1: 'Vergeten dat brandschade bij een klant (veroorzaakt door een installatiefout) een claim genereert die los staat van je werkzaamheden op dat moment.',
    fout2: 'Geen rekening houden met de 10-jarige aansprakelijkheid voor structurele werken bij renovatieprojecten.',
  },
  {
    slug: 'loodgieters',
    titel: 'Loodgieters',
    cluster: 'technieken',
    verzekeringSlugs: ['ba-onderneming', 'bedrijfsvoertuigen', 'machinebreuk', 'rechtsbijstand', 'alle-bouwplaats-risicos', 'arbeidsongevallen', 'ipt'],
    tip: 'Waterschade is de meest frequente en duurste claim in de bouwsector. Als loodgieter is het essentieel dat je polis toevertrouwd goed en gevolgschade door water expliciet dekt.',
    fout1: 'Aannemen dat waterschade bij een klant automatisch gedekt is, terwijl de polis enkel schade aan derden dekt, niet gevolgschade aan het pand.',
    fout2: 'Sanitaire en thermische installaties onderschatten als klein werk, terwijl fouten daarin kunnen leiden tot structurele vochtproblemen of veiligheidsincidenten.',
  },
  {
    slug: 'zonnepanelen-installateurs',
    titel: 'Zonnepaneel-installateurs',
    cluster: 'technieken',
    verzekeringSlugs: ['ba-10', 'ba-onderneming', 'alle-bouwplaats-risicos', 'vervoerde-goederen', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'ipt'],
    tip: 'Bij het plaatsen van zonnepanelen doorboor je de waterdichting van een dak. Een lekkende doorvoer duikt vaak pas maanden later op als vochtschade. Omdat dit de structuur en waterdichtheid van een gebouw raakt, is tienjarige aansprakelijkheid (BA-10) voor installateurs geen detail maar een kernpolis.',
    fout1: 'Denken dat een standaard BA-onderneming volstaat voor dakdoorboringen, terwijl waterschade die pas na de oplevering opduikt eerder onder BA-10 valt.',
    fout2: 'Panelen, omvormers en thuisbatterijen niet apart verzekeren tijdens transport en plaatsing, terwijl die snel een grote waarde vertegenwoordigen en breekbaar zijn bij montage op hoogte.',
  },
  {
    slug: 'koeltechniek-hvac',
    titel: 'Koeltechniek & HVAC',
    cluster: 'technieken',
    verzekeringSlugs: ['ba-onderneming', 'vervoerde-goederen', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'rechtsbijstand', 'aanvullend-pensioen'],
    tip: 'Als koeltechnicus werk je met koelmiddelen die onder strenge regels vallen en met leidingen die water of condens afvoeren. Een lekkende condensafvoer is een klassieke claim: het water sijpelt vaak pas na een tijd door in het plafond of de gipswanden van de klant.',
    fout1: 'Een lekkende condensafvoer of een koelmiddellek onderschatten, terwijl de gevolgschade aan het gebouw van de klant vaak hoger uitvalt dan de herstelling van de installatie zelf.',
    fout2: 'Je warmtepompen en airco-units niet verzekeren tijdens transport en plaatsing, terwijl een gevallen buitenunit op een platdak al snel duizenden euro\'s schade betekent.',
  },

  // ===== Dak, tuin & buitenruimte =====
  {
    slug: 'dakwerkers',
    titel: 'Dakwerkers',
    cluster: 'buiten',
    verzekeringSlugs: ['ba-onderneming', 'alle-bouwplaats-risicos', 'bedrijfsvoertuigen', 'machinebreuk', 'rechtsbijstand', 'arbeidsongevallen', 'groepsverzekering'],
    tip: 'Dakwerkers werken op hoogte en vaak met open vuur (branders). Sommige standaard BA-polissen bevatten uitsluitingen voor werken met open vuur of werken op hoogte boven een bepaalde hoogte. Check dit expliciet in je polis.',
    fout1: 'Denken dat schade aan het dak zelf (het onderdeel waaraan je werkt) gedekt is, standaard BA dekt dit doorgaans niet.',
    fout2: 'Geen ABR nemen bij renovatiewerken met meerdere partijen op de werf, waarna een discussie over schuld maanden kan aanslepen.',
  },
  {
    slug: 'tuinaannemers',
    titel: 'Tuinaannemers',
    cluster: 'buiten',
    verzekeringSlugs: ['ba-onderneming', 'alle-bouwplaats-risicos', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'rechtsbijstand', 'groepsverzekering'],
    tip: 'Bij tuinaanleg graaf je funderingen voor terrassen en opritten in grond die je niet altijd kent. Een geraakte nutsleiding of een terras dat na een natte winter verzakt, kan al snel leiden tot een stevige schadeclaim. Zorg dat je BA en ABR op elkaar zijn afgestemd voor je type projecten.',
    fout1: 'Geen ABR nemen bij grotere totaalprojecten, waardoor onvoorziene schade aan je eigen werk in uitvoering niet gedekt is.',
    fout2: 'Je minigraver of trilplaat niet verzekeren tegen pech of diefstal, terwijl een defecte machine je grondwerk meteen dagenlang stillegt.',
  },
  {
    slug: 'hoveniers',
    titel: 'Hoveniers',
    cluster: 'buiten',
    verzekeringSlugs: ['ba-onderneming', 'bedrijfsvoertuigen', 'machinebreuk', 'arbeidsongevallen', 'rechtsbijstand', 'vervoerde-goederen', 'vapz'],
    tip: 'Als hovenier werk je voortdurend bij de klant thuis. Een steentje dat van onder je maaier tegen een raam of auto vliegt, is een klassiek schadegeval. Zorg dat je BA-onderneming dit soort schade aan de klant of de buren dekt, en dat je materieel onderweg beschermd is tegen diefstal.',
    fout1: 'Denken dat een steenworp tegen een ruit of auto een uitzondering is, terwijl dit een van de meest voorkomende schadegevallen is in tuinonderhoud.',
    fout2: 'Geen dekking voorzien voor materieel dat uit de bestelwagen gestolen wordt, terwijl een bosmaaier of kettingzaag onderweg net zo kwetsbaar is als op de werf zelf.',
  },
  {
    slug: 'boomverzorgers',
    titel: 'Boomverzorgers',
    cluster: 'buiten',
    verzekeringSlugs: ['ba-onderneming', 'arbeidsongevallen', 'gewaarborgd-inkomen', 'machinebreuk', 'bedrijfsvoertuigen', 'rechtsbijstand', 'vapz'],
    tip: 'Boomverzorging is het fysiek zwaarste werk in de groensector. Een tak die verkeerd valt op een dak of wagen is een aansprakelijkheidsrisico, maar een ongeval tijdens het klimmen raakt ook je eigen inkomen. Naast een sterke BA is een gewaarborgd inkomen voor jou geen luxe.',
    fout1: 'Enkel de aansprakelijkheid voor vallende takken verzekeren en het eigen fysieke risico van het klimwerk vergeten, terwijl dat net het zwaarste risico van je stiel is.',
    fout2: 'Geen gewaarborgd inkomen afsluiten als zelfstandige, waardoor een ongeval je maandenlang zonder vervangingsinkomen zet terwijl de vaste lasten doorlopen.',
  },
  {
    slug: 'zwembadinstallateurs',
    titel: 'Zwembadinstallateurs',
    cluster: 'buiten',
    verzekeringSlugs: ['ba-10', 'alle-bouwplaats-risicos', 'ba-onderneming', 'bedrijfsschade', 'rechtsbijstand', 'arbeidsongevallen', 'aanvullend-pensioen'],
    tip: 'Een zwembad moet jarenlang waterdicht blijven. Een scheur in de kuip of een lek in de waterdichting duikt vaak pas na één of meerdere seizoenen op, soms jaren na de oplevering. Daarom is tienjarige aansprakelijkheid (BA-10) voor zwembadinstallateurs geen detail maar een kernpolis.',
    fout1: 'Denken dat een standaard BA-onderneming volstaat, terwijl constructie- en waterdichtheidsgebreken die jaren later opduiken net onder de tienjarige aansprakelijkheid vallen.',
    fout2: 'Geen bedrijfsschadedekking voorzien, terwijl een lek of herstel die de werf stillegt ook je omzet en vaste kosten op andere projecten kan raken.',
  },

  // ===== Vangnet: past niet in de 19 sectoren =====
  {
    slug: ANDERE_BEROEP_SLUG,
    titel: 'Andere bouwactiviteit',
    cluster: null,
    verzekeringSlugs: ['ba-onderneming', 'arbeidsongevallen', 'machinebreuk', 'bedrijfsvoertuigen', 'rechtsbijstand'],
    tip: 'Elke bouwactiviteit heeft zijn eigen risicoprofiel. Een standaardpolis is bijna nooit volledig afgestemd op een nicheberoep, laat je situatie specifiek beoordelen.',
    fout1: 'Een generieke BA nemen zonder te controleren of jouw specifieke activiteiten expliciet in de polis staan omschreven.',
    fout2: 'Materiaaldekking vergeten voor gespecialiseerd gereedschap of apparatuur met een hoge vervangingswaarde.',
  },
];

export function getBeroep(slug: string): ScanBeroep | undefined {
  return SCAN_BEROEPEN.find((b) => b.slug === slug);
}

export function beroepenPerCluster(): { cluster: ScanCluster; beroepen: ScanBeroep[] }[] {
  return SCAN_CLUSTERS.map((cluster) => ({
    cluster,
    beroepen: SCAN_BEROEPEN.filter((b) => b.cluster === cluster.key),
  }));
}

/** Relevante polissen voor een beroep, met hun categorie erbij (voor scoring/weergave). */
export function relevantePolissenVoor(beroepSlug: string) {
  const beroep = getBeroep(beroepSlug);
  if (!beroep) return [];
  return beroep.verzekeringSlugs
    .map((slug) => getVerzekering(slug))
    .filter((v): v is NonNullable<ReturnType<typeof getVerzekering>> => Boolean(v));
}

/** Pensioen/fiscaal telt nooit mee in de risicoscore (bevestigd 2026-07-25) — enkel kans-tip. */
export const SCORE_NEUTRALE_CATEGORIE: VerzekeringCategorie = 'pensioen-en-fiscaal';

/**
 * Kern-polissen: +2 punten bij aanwezigheid (wettelijk verplicht of fundament),
 * alle overige scorende polissen +1. Bewust per polis en niet per categorie:
 * anders zou bv. rechtsbijstand even zwaar wegen als BA Onderneming en haalt
 * iemand zonder BA of AO alsnog BASE_OK. Sluit aan op het fase-1-scoremodel
 * (BA +2, AO +2, ABR/materiaal/voertuig +1).
 */
const KERN_POLISSEN = new Set(['ba-onderneming', 'arbeidsongevallen', 'ba-10']);

/** Puntengewicht van één polis bij aanwezigheid. Pensioen/fiscaal = 0. */
export function polisGewicht(slug: string, categorie: VerzekeringCategorie): number {
  if (categorie === SCORE_NEUTRALE_CATEGORIE) return 0;
  return KERN_POLISSEN.has(slug) ? 2 : 1;
}
