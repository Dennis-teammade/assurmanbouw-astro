// =============================================================================
// CENTRALE DATABRON — verzekeringen
// Enige bron van waarheid voor de 18 verzekeringen. Voedt straks: de archief-
// pagina /verzekeringen, het (mega)menu en de "gerelateerde verzekeringen"-
// blokken + sectorpagina-carousels. Zelfde patroon als cta-labels.ts / partners.ts.
//
// Architectuur & beslissingen: docs/ARCHITECTUUR-INDELING-VERZEKERINGEN.md
// (bron van waarheid — werk dat document bij elke wijziging hier bij).
//
// NB: deze databron wordt nog NIET geconsumeerd. Archief, menu en carousels
// draaien voorlopig nog op hun eigen hardcoded lijsten. Omschakelen = latere stap.
// =============================================================================

export type VerzekeringCategorie =
  | 'aansprakelijkheid'
  | 'spullen-en-werk'
  | 'jij-en-je-mensen'
  | 'pensioen-en-fiscaal';

export interface Verzekering {
  /** Slug zonder /verzekeringen/-prefix, bv. 'ba-10'. */
  slug: string;
  /** UI-titel voor kaart, menu en koppen. */
  titel: string;
  categorie: VerzekeringCategorie;
  /** Eén zin: kaart-intro + menu-omschrijving. */
  korteBeschrijving: string;
  /** 2-4 korte voordelen/dekkingen voor de kaart. */
  bullets: string[];
  /** ICON_MAP-key uit InsuranceCarousel.tsx (shield, wrench, flame, ...). */
  icoon: string;
  /** Slugs van 2-3 gerelateerde verzekeringen. */
  gerelateerde: string[];
  /** 'live' = pagina uitgewerkt, 'skeleton' = nog te bouwen. */
  status: 'live' | 'skeleton';
}

export const CATEGORIE_LABELS: Record<VerzekeringCategorie, string> = {
  'aansprakelijkheid': 'Aansprakelijkheid',
  'spullen-en-werk': 'Je spullen & je werk',
  'jij-en-je-mensen': 'Jij & je mensen',
  'pensioen-en-fiscaal': 'Pensioen & fiscaal',
};

/** Volgorde waarin categorieën getoond worden op archief + menu. */
export const CATEGORIE_VOLGORDE: VerzekeringCategorie[] = [
  'aansprakelijkheid',
  'spullen-en-werk',
  'jij-en-je-mensen',
  'pensioen-en-fiscaal',
];

// -----------------------------------------------------------------------------
// De 18 verzekeringen. Volgorde binnen elke categorie: meest essentieel bovenaan.
// LIVE-copy komt uit de echte pagina-content (verifieerd). SKELETON-copy is
// voorlopig (zie // TODO) en bevat bewust geen verzonnen cijfers of juridische claims.
// -----------------------------------------------------------------------------

export const VERZEKERINGEN: Verzekering[] = [
  // ===== Aansprakelijkheid =====
  {
    slug: 'ba-onderneming',
    titel: 'BA Onderneming',
    categorie: 'aansprakelijkheid',
    korteBeschrijving: 'Dekt schade die je tijdens je beroepsactiviteit toebrengt aan klanten, passanten of buren. BA Uitbating en BA Na Levering in één polis.',
    bullets: ['Schade aan eigendommen van derden', 'Letselschade aan derden op de werf', 'BA Na Levering voor gebreken na oplevering', 'Burenhinder en toevertrouwd goed'],
    icoon: 'shield',
    gerelateerde: ['ba-10', 'alle-bouwplaats-risicos', 'rechtsbijstand'],
    status: 'live',
  },
  {
    slug: 'ba-10',
    titel: 'Tienjarige aansprakelijkheid (BA-10)',
    categorie: 'aansprakelijkheid',
    korteBeschrijving: 'Verplicht bij woningbouw. Dekt stabiliteits- en soliditeitsgebreken tot 10 jaar na oplevering, als abonnementspolis voor al je werven.',
    bullets: ['Verplicht sinds 2018 (Wet Peeters-Borsus)', 'Abonnementspolis voor al je werven', 'Globale polis voor alle bouwactoren'],
    icoon: 'building2',
    gerelateerde: ['ba-onderneming', 'alle-bouwplaats-risicos', 'rechtsbijstand'],
    status: 'live',
  },
  {
    slug: 'alle-bouwplaats-risicos',
    titel: "Alle Bouwplaatsrisico's (ABR)",
    categorie: 'aansprakelijkheid',
    korteBeschrijving: 'Dekt schade aan werken in uitvoering door brand, storm, diefstal en vandalisme. Onmisbaar bij grotere werven of renovaties.',
    bullets: ['Schade tijdens de uitvoering', 'Weersinvloeden zoals storm en hagel', 'Alle partijen op één werf gedekt', 'Per project of als jaarpolis'],
    icoon: 'layers',
    gerelateerde: ['ba-onderneming', 'ba-10', 'machinebreuk'],
    status: 'live',
  },
  {
    slug: 'ba-bestuurder',
    titel: 'BA Bestuurder',
    categorie: 'aansprakelijkheid',
    korteBeschrijving: 'Beschermt het privévermogen van zaakvoerders en bestuurders bij persoonlijke aansprakelijkheid voor bestuursfouten, faillissement of onbetaalde RSZ- en btw-schulden.',
    bullets: ['Beschermt je privévermogen', 'Dekt de verdedigingskosten', 'Ook gewezen en feitelijke bestuurders', 'Cruciaal sinds Boek 6 BW'],
    icoon: 'check-circle',
    gerelateerde: ['ba-onderneming', 'rechtsbijstand', 'bescherming-bedrijfsleider'],
    status: 'live',
  },
  {
    slug: 'rechtsbijstand',
    titel: 'Rechtsbijstand',
    categorie: 'aansprakelijkheid',
    korteBeschrijving: 'Vrije advocaatkeuze en dekking van juridische kosten bij geschillen, factuurincasso, arbeidsconflicten en contractbetwistingen.',
    bullets: ['Hulp bij contractgeschillen en betwiste oplevering', 'Incasso bij onbetaalde facturen', 'Verdediging bij arbeidsrechtelijke conflicten'],
    icoon: 'scale',
    gerelateerde: ['ba-onderneming', 'ba-10', 'alle-bouwplaats-risicos'],
    status: 'live',
  },

  // ===== Je spullen & je werk =====
  {
    slug: 'brandverzekering',
    titel: 'Brandverzekering',
    categorie: 'spullen-en-werk',
    korteBeschrijving: 'Dekt je bedrijfsgebouw, magazijn en inhoud (machines, gereedschap en stock) tegen brand, storm, water, glasbreuk en diefstal, en beschermt je huurdersaansprakelijkheid.',
    bullets: ['Gebouw én inhoud verzekerd', 'Méér dan vuur: storm, water en glas', 'Huurdersaansprakelijkheid gedekt', 'Uit te breiden met diefstal en bedrijfsschade'],
    icoon: 'flame',
    gerelateerde: ['bedrijfsschade', 'machinebreuk', 'alle-bouwplaats-risicos'],
    status: 'live',
  },
  {
    slug: 'machinebreuk',
    titel: 'Machinebreuk',
    categorie: 'spullen-en-werk',
    korteBeschrijving: 'Dekt plotse defecten, beschadiging en diefstal van machines en gereedschap: op de werf, in de bestelwagen of op het atelier.',
    bullets: ['Breuk en beschadiging van machines', 'Diefstal onder voorwaarden', 'Vast atelier- én mobiel werfmaterieel', 'Aanvulbaar met bedrijfsschade'],
    icoon: 'wrench',
    gerelateerde: ['bedrijfsschade', 'vervoerde-goederen', 'bedrijfsvoertuigen'],
    status: 'live',
  },
  {
    slug: 'bedrijfsschade',
    titel: 'Bedrijfsschadeverzekering',
    categorie: 'spullen-en-werk',
    korteBeschrijving: 'Vangt je omzetverlies en vaste kosten op wanneer je bouwbedrijf stilligt na een gedekt schadegeval zoals brand, storm of machinebreuk.',
    bullets: ['Vergoedt gederfde brutowinst bij stilstand', 'Betaalt lonen, huur en leasings door', 'Dekt extra kosten om sneller te heropstarten', 'Aanvulling op brand- en machinebreukverzekering'],
    icoon: 'building2',
    gerelateerde: ['brandverzekering', 'machinebreuk', 'gewaarborgd-inkomen'],
    status: 'live',
  },
  {
    slug: 'vervoerde-goederen',
    titel: 'Verzekering vervoerde goederen',
    categorie: 'spullen-en-werk',
    korteBeschrijving: 'Dekt je gereedschap, machines en materialen tegen diefstal en schade tijdens vervoer.', // TODO: definitieve copy
    bullets: ['Gereedschap en materiaal onderweg', 'Diefstal uit de bestelwagen', 'Schade bij laden en lossen'], // TODO: definitieve bullets
    icoon: 'truck',
    gerelateerde: ['bedrijfsvoertuigen', 'machinebreuk', 'alle-bouwplaats-risicos'],
    status: 'skeleton',
  },
  {
    slug: 'bedrijfsvoertuigen',
    titel: 'Bedrijfsvoertuigen',
    categorie: 'spullen-en-werk',
    korteBeschrijving: 'BA verplicht voor elk voertuig. Omnium, mini-omnium en vlootpolis voor bestelwagens, vrachtwagens en aanhangwagens.',
    bullets: ['BA Auto wettelijk verplicht', 'Omnium en mini-omnium', 'Vlootkorting vanaf 10 voertuigen', 'Diefstal van koopwaar en materieel'],
    icoon: 'car',
    gerelateerde: ['vervoerde-goederen', 'machinebreuk', 'alle-bouwplaats-risicos'],
    status: 'live',
  },

  // ===== Jij & je mensen =====
  {
    slug: 'arbeidsongevallen',
    titel: 'Arbeidsongevallen',
    categorie: 'jij-en-je-mensen',
    korteBeschrijving: 'Wettelijk verplicht voor elke werkgever. Dekt medische kosten, arbeidsongeschiktheid en overlijden bij arbeidsongevallen, ook op het woon-werktraject.',
    bullets: ['Verplicht vanaf de eerste werknemer', 'Dekt de werf én woon-werkverkeer', 'Aanvulbaar met excedent-wet voor hogere lonen'],
    icoon: 'hardhat',
    gerelateerde: ['gewaarborgd-inkomen', 'ba-onderneming', 'rechtsbijstand'],
    status: 'live',
  },
  {
    slug: 'gewaarborgd-inkomen',
    titel: 'Gewaarborgd inkomen',
    categorie: 'jij-en-je-mensen',
    korteBeschrijving: 'Garandeert een maandelijks vervangingsinkomen bij ziekte of ongeval, zodat je je gezinsuitgaven kunt blijven betalen.', // TODO: definitieve copy
    bullets: ['Maandelijks vervangingsinkomen', 'Bij ziekte of ongeval', 'Voor zelfstandigen in de bouw'], // TODO: definitieve bullets
    icoon: 'heart',
    gerelateerde: ['arbeidsongevallen', 'bescherming-bedrijfsleider', 'aanvullend-pensioen'],
    status: 'skeleton',
  },
  {
    slug: 'bescherming-bedrijfsleider',
    titel: 'Bescherming bedrijfsleider',
    categorie: 'jij-en-je-mensen',
    korteBeschrijving: 'Beschermt de continuïteit van je bedrijf bij overlijden of langdurige uitval van een sleutelfiguur.', // TODO: definitieve copy
    bullets: ['Kapitaal bij uitval van een sleutelfiguur', 'Beschermt de bedrijfscontinuïteit', 'Inclusief overlijdensdekking'], // TODO: definitieve bullets
    icoon: 'users',
    gerelateerde: ['gewaarborgd-inkomen', 'aanvullend-pensioen', 'groepsverzekering'],
    status: 'skeleton',
  },

  // ===== Pensioen & fiscaal =====
  {
    slug: 'groepsverzekering',
    titel: 'Groepsverzekering',
    categorie: 'pensioen-en-fiscaal',
    korteBeschrijving: 'Bouw een fiscaal aantrekkelijk aanvullend pensioen op voor je personeel, met overlijdens- en invaliditeitsdekking.', // TODO: definitieve copy
    bullets: ['Aanvullend pensioen voor je personeel', 'Fiscaal aantrekkelijk', 'Bindt en motiveert medewerkers'], // TODO: definitieve bullets
    icoon: 'users',
    gerelateerde: ['aanvullend-pensioen', 'ipt', 'arbeidsongevallen'],
    status: 'skeleton',
  },
  {
    slug: 'aanvullend-pensioen',
    titel: 'Aanvullend pensioen',
    categorie: 'pensioen-en-fiscaal',
    korteBeschrijving: 'Bouw als zelfstandige of zaakvoerder een aanvullend pensioen op met maximaal fiscaal voordeel. De pijler boven VAPZ, IPT en POZ.', // TODO: definitieve copy
    bullets: ['Extra pensioen bovenop het wettelijke', 'Maximaal fiscaal voordeel', 'Via VAPZ, IPT of POZ'], // TODO: definitieve bullets
    icoon: 'piggy-bank',
    gerelateerde: ['vapz', 'ipt', 'poz'],
    status: 'skeleton',
  },
  {
    slug: 'vapz',
    titel: 'VAPZ',
    categorie: 'pensioen-en-fiscaal',
    korteBeschrijving: 'Vrij Aanvullend Pensioen voor Zelfstandigen: fiscaal voordelig pensioensparen via je sociale bijdragen.', // TODO: definitieve copy
    bullets: ['Voor elke zelfstandige', 'Fiscaal aftrekbaar', 'Basis van je aanvullend pensioen'], // TODO: definitieve bullets
    icoon: 'piggy-bank',
    gerelateerde: ['aanvullend-pensioen', 'poz', 'ipt'],
    status: 'skeleton',
  },
  {
    slug: 'poz',
    titel: 'POZ',
    categorie: 'pensioen-en-fiscaal',
    korteBeschrijving: 'Pensioenovereenkomst voor Zelfstandigen: aanvullend pensioen voor zelfstandigen zonder vennootschap.', // TODO: definitieve copy
    bullets: ['Voor zelfstandigen zonder vennootschap', 'Aanvulling op het VAPZ', 'Fiscaal voordeel'], // TODO: definitieve bullets
    icoon: 'piggy-bank',
    gerelateerde: ['aanvullend-pensioen', 'vapz', 'ipt'],
    status: 'skeleton',
  },
  {
    slug: 'ipt',
    titel: 'IPT',
    categorie: 'pensioen-en-fiscaal',
    korteBeschrijving: 'Individuele Pensioentoezegging: aanvullend pensioen dat je vennootschap voor jou als bedrijfsleider opbouwt.', // TODO: definitieve copy
    bullets: ['Voor bedrijfsleiders met vennootschap', 'Premies betaald door de vennootschap', 'Fiscaal geoptimaliseerd'], // TODO: definitieve bullets
    icoon: 'piggy-bank',
    gerelateerde: ['aanvullend-pensioen', 'vapz', 'groepsverzekering'],
    status: 'skeleton',
  },
];

// -----------------------------------------------------------------------------
// Afleidingen / helpers (puur, nog niet geconsumeerd).
// -----------------------------------------------------------------------------

/** Genormaliseerde detail-URL (altijd met trailing slash). */
export function verzekeringUrl(slug: string): string {
  return `/verzekeringen/${slug}/`;
}

/** Zoek één verzekering op slug. */
export function getVerzekering(slug: string): Verzekering | undefined {
  return VERZEKERINGEN.find((v) => v.slug === slug);
}

/** Verzekeringen gegroepeerd per categorie, in CATEGORIE_VOLGORDE. */
export function verzekeringenPerCategorie(): { categorie: VerzekeringCategorie; label: string; items: Verzekering[] }[] {
  return CATEGORIE_VOLGORDE.map((categorie) => ({
    categorie,
    label: CATEGORIE_LABELS[categorie],
    items: VERZEKERINGEN.filter((v) => v.categorie === categorie),
  }));
}

/**
 * Leidt de bestaande InsuranceCarousel-kaartvorm af uit een record, zodat
 * InsuranceCarousel.tsx ongewijzigd blijft: { title, intro, bullets, cta, link, icon }.
 */
export function naarKaart(v: Verzekering): {
  title: string;
  intro: string;
  bullets: string[];
  cta: string;
  link: string;
  icon: string;
} {
  return {
    title: v.titel,
    intro: v.korteBeschrijving,
    bullets: v.bullets,
    cta: `Meer over ${v.titel}`,
    link: verzekeringUrl(v.slug),
    icon: v.icoon,
  };
}

/**
 * Carousel-kaarten voor een lijst slugs, in opgegeven volgorde.
 * Onbekende slugs worden stil overgeslagen. Gebruikt door de "gerelateerde
 * verzekeringen"-carousels en de sectorpagina-pakketten.
 */
export function kaartenVoor(slugs: string[]): ReturnType<typeof naarKaart>[] {
  return slugs
    .map((s) => getVerzekering(s))
    .filter((v): v is Verzekering => Boolean(v))
    .map(naarKaart);
}
