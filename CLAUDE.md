# CLAUDE.md

Project-instructies voor Claude Code-sessies op de Assurmanbouw-website.

## CTA-labels en bestemmingen

Alle CTA-labels en conversie-bestemmingen zijn gecentraliseerd in `src/data/cta-labels.ts`. Dit is de **enige bron van waarheid** voor de tekst en URL's van knoppen die naar de scan, naar /maak-afspraak, naar telefoon of naar e-mail verwijzen.

### Wanneer de constanten gebruiken

Gebruik de constanten **alleen** voor knoppen en links die conversie-CTA's zijn. Concreet: knoppen die leiden naar:
- `/gratis-verzekeringsscan`
- `/maak-afspraak`
- `tel:` (telefoon)
- `mailto:` (e-mail)

### Wanneer NIET

De constanten zijn **niet** voor:
- Interne navigatielinks (bijvoorbeeld van een verzekeringspagina naar een sectorpagina, of tussen kenniscentrum-artikelen)
- Footer-links naar privacy, cookies, algemene voorwaarden
- Links binnen de hoofdnavigatie
- Links naar externe partners of bronnen
- Knoppen op de bestemmings-pagina's zelf (Contact, /maak-afspraak, /gratis-verzekeringsscan): die mogen wél een CTA naar een ándere bestemming bevatten (bijvoorbeeld een eind-CTA op /maak-afspraak die naar de scan verwijst), maar niet naar zichzelf

### Pagina's zonder CTA's

Sommige pagina's hebben helemaal geen conversie-CTA's nodig. Voorbeelden:
- Privacy-, cookie- en juridische pagina's
- 404-pagina (tenzij expliciet anders gevraagd)
- De bestemmings-pagina's zelf (zie hierboven)

Voor zulke pagina's: importeer de constanten niet, en voeg geen CTA-knoppen toe.

### Wanneer een nieuw label nodig is

Als een nieuwe pagina of context een knoptekst nodig heeft die niet in `cta-labels.ts` staat: voeg het label toe aan het bestand. Verzin geen knoptekst rechtstreeks in een pagina-bestand.

### Positie-afspraken

- Hero (boven de vouw): `CTA_SCAN.hero` + `CTA_AFSPRAAK.hero`
- Inline (in lopende tekst): `CTA_SCAN.inline` + `CTA_AFSPRAAK.inline`
- Eind-CTA-band onderaan pagina: `CTA_SCAN.band` + `CTA_AFSPRAAK.band`
- Sticky/floating (indien van toepassing): `CTA_SCAN.short` + `CTA_AFSPRAAK.short`

Naast deze hoofdvarianten bevat `cta-labels.ts` ook varianten zoals `request`, `requestNow`, `start`, `doIt`, `full` (voor scan) en `advisory`, `advisoryFull` (voor afspraak). Gebruik die voor variatie over de site, zodat dezelfde knoptekst niet overal herhaald wordt.
