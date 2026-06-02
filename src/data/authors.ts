export const authors = {
  'benoit-keerman': {
    name: 'Benoit Keerman',
    slug: 'benoit-keerman',
    role: 'Verzekeringsspecialist bouwsector, zaakvoerder Assurman, vader van 3 en motard in hart en nieren',
    shortRole: 'Zaakvoerder & verzekeringsspecialist bouw',
    sidebarBio: 'Als zaakvoerder & expert in verzekeringen voor de bouwsector staat Benoit altijd voor je klaar.',
    company: 'Assurman',
    photo: '/benoitkeerman.jpg',
    photoAlt: 'Benoit Keerman, zaakvoerder Assurman',
    bioShort:
      'Benoit Keerman is zaakvoerder van Assurman en al meer dan 20 jaar onafhankelijk verzekeringsmakelaar. Vanuit het kantoor in Beernem begeleidt hij zelfstandigen en KMO\'s in de bouwsector bij hun BA Onderneming, BA-10, arbeidsongevallen, ABR en wagenpark. Zijn aanpak: eerlijk advies op maat van jouw stiel, geen verrassingen achteraf.',
    bioLong:
      'Benoit Keerman is zaakvoerder van Assurman en al meer dan 20 jaar actief als onafhankelijk verzekeringsmakelaar. Zijn carrière begon na zijn studies als agent voor Landbouwkrediet en als zelfstandig verzekeringsmakelaar in Oostende. Na vijf jaar Oostende keerde hij terug naar zijn thuisbasis Beernem. Eerst als Record-bankagent en verzekeringsmakelaar, later als volledig onafhankelijk zaakvoerder, en sinds enkele jaren onder de naam Assurman.\n\nIn de loop van die twee decennia zag Benoit zijn klantenportefeuille evolueren. Wat begon als een breed kantoor voor particulieren en kleine zelfstandigen groeide uit tot een specialisatie waar bouwondernemers steeds meer de kern van vormen. Dakwerkers, elektriciens, loodgieters, schrijnwerkers, schilders en algemene aannemers vonden hun weg naar Beernem omdat ze een makelaar zochten die hun stiel begreep, niet één die generieke ondernemerspakketten doorverkocht.\n\nVandaag concentreert Benoit zich met Assurmanbouw.be volledig op die bouwsector. Hij kent de Belgische wettelijke verplichtingen die zelfstandigen en KMO\'s onder druk zetten: de Wet-Peeters-Borsus voor BA-10, de Arbeidsongevallenwet, het nieuwe Boek 6 BW dat sinds 1 januari 2025 onderaannemers rechtstreeks aansprakelijk maakt. Die wetgeving vertaalt hij naar polissen die effectief dekken wat moet gedekt zijn. Geen overdekking, geen onderdekking, geen polissen die op papier mooi staan maar in de praktijk struikelen.\n\nZijn methode is eenvoudig: een grondige risico-scan, eerlijk advies, en een polis die meegroeit met je bedrijf. Zonder verrassingen achteraf.',
    linkedin: 'https://www.linkedin.com/in/benoit-keerman-98397352/',
    authorPageUrl: '/auteur/benoit-keerman/',
    yearsExperience: '20+',
    expertises: [
      'BA Onderneming voor bouwondernemers',
      'BA-10 (Wet-Peeters-Borsus, tienjarige aansprakelijkheid)',
      'Arbeidsongevallenverzekering bouwsector',
      "Alle Bouwplaats Risico's (ABR)",
      'Bedrijfsvoertuigen en wagenparkbeheer',
      'Onderaanneming en Boek 6 BW (2025)',
      "Risicoanalyse voor zelfstandigen en KMO's",
      'Premieoptimalisatie en polisvergelijking',
    ],
    ctaLabel: 'Plan jouw gratis verzekeringsscan',
    ctaUrl: '/gratis-verzekeringsscan/',
  },
} as const;

export type AuthorSlug = keyof typeof authors;
export type Author = (typeof authors)[AuthorSlug];
