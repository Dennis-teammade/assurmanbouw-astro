// CTA-labels en bestemmingen voor Assurmanbouw
// Eén bron van waarheid. Wijzigen hier propageert overal in de site.
// Zie CLAUDE.md voor de regels rond wanneer deze constanten wel/niet gebruikt worden.

export const CTA_DESTINATIONS = {
  scan: '/gratis-verzekeringsscan',
  afspraak: '/maak-afspraak',
  contact: '/contact',
  tel: 'tel:+3250361693',
  telDisplay: '050 36 16 93',
  email: 'mailto:info@assurman.be',
} as const;

// Scan-CTA's — leiden naar /gratis-verzekeringsscan
export const CTA_SCAN = {
  hero: 'Doe de gratis scan',
  inline: 'Start de scan',
  band: 'Doe de scan',
  short: 'Gratis scan',
  question: 'Hoe sta jij ervoor? Doe de scan',
  request: 'Doe de scan',
  requestNow: 'Doe de scan nu',
  start: 'Start de scan',
  doIt: 'Doe de scan',
  full: 'Gratis verzekeringsscan',
} as const;

// Afspraak-CTA's — leiden naar /maak-afspraak
// Alle varianten zijn synoniemen, gebruikt voor variatie over de site
export const CTA_AFSPRAAK = {
  hero: 'Maak een afspraak',
  inline: 'Plan een gesprek',
  band: 'Laat je contacteren',
  short: 'Bel mij op',
  question: 'Wens je opgebeld te worden?',
  advisory: 'Plan adviesgesprek',
  advisoryFull: 'Plan een adviesgesprek',
} as const;

// Directe contact-CTA's
export const CTA_BEL = {
  primary: 'Bel ons direct',
  inline: 'Liever bellen?',
  short: 'Bellen',
} as const;

// Welke variant op welke positie — referentie voor consistentie over de site
export const CTA_USAGE_GUIDE = {
  hero: {
    primary: CTA_SCAN.hero,
    secondary: CTA_AFSPRAAK.hero,
  },
  endBand: {
    primary: CTA_SCAN.band,
    secondary: CTA_AFSPRAAK.band,
  },
  inline: {
    primary: CTA_SCAN.inline,
    secondary: CTA_AFSPRAAK.inline,
  },
  sticky: {
    primary: CTA_SCAN.short,
    secondary: CTA_AFSPRAAK.short,
  },
} as const;
