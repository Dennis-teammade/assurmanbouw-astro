# Brand-voice — copy-regels en boilerplate

Geldt voor **alle** zichtbare tekst op de site. Harde regels komen uit CLAUDE.md §6;
de boilerplate-formules zijn afgeleid uit het effectieve gebruik op de norm-pagina's.

## 1. Harde regels (niet onderhandelbaar)

- **Belgisch Nederlands: `je / jij / jouw / je`.** Nooit `u / uw`.
- **Geen em-dashes (—) in copy.** Gebruik een punt, dubbele punt of nieuwe zin.
- **Geen verzonnen cijfers.** Geen klantenaantallen, geen besparingen, geen
  verzekeraarsnamen die niet bevestigd zijn.
- **Reviewscore = altijd 5/5.** Nooit 4.9, nooit 4.8. Site-breed consistent.
  (Bevestigd: `dakwerkers.astro:531`, `verzekeringen/index.astro:182`.)
- **Geen specifieke verzekeraars opnoemen in copy op sectorpagina's.** Visueel via de
  partner-slider mag wel.
- **Brand phrases met gewicht, spaarzaam gebruiken:** "correct verzekerd", "geen
  verrassingen achteraf", "eerlijk advies op maat van jouw stiel".
- **Belgische wetgeving:** altijd correcte verwijzing én jaartal. Gevalideerde
  formuleringen staan in `DECISIONS-LOG.md`.
- **Auteur kenniscentrum = altijd Benoit Keerman** (Verzekeringsspecialist bouwsector,
  Assurman). **Nooit Dennis.** Dennis is dev/agency, niet de inhoudelijke auteur.

## 2. Aanbevolen boilerplate (terugkerende formules)

Deze formules komen consistent terug op de norm-pagina's en zijn **aanbevolen** (niet
verplicht). Gebruik ze om dezelfde toon en geruststelling vast te houden, maar wissel af
zodat copy niet mechanisch wordt.

### Hero-disclaimer (onder de hero-knoppen)

> "Geen verplichting. We finaliseren je pakket samen na je intake."

Open Sans, 14px, navy met `opacity:0.75`. Bron: `dakwerkers.astro:275`,
`arbeidsongevallen.astro:207`.

### Final-CTA-disclaimer

> "Geen verplichting. We helpen je kiezen wat écht nodig is."

Bron: `dakwerkers.astro:604-605`, `verzekeringen/index.astro:222`,
`sectoren/index.astro:222`, en (variant "voor jouw stiel") `gids/[pillar]/[spoke].astro`.

### Snelheids-/scan-formules

- "Start nu in 2 minuten of kies meteen voor advies." (`dakwerkers.astro:503`)
- "Doe de gratis verzekeringsscan in 2 minuten" (`sectoren/index.astro:207`)
- "In 2 minuten zie je waar je dekking tekortschiet…" (`verzekeringen/index.astro:210`)

De "scan in 2 minuten"-belofte is de standaard-framing voor de lead magnet.

### Toon

Kort, concreet, geruststellend, in de stiel-taal van de bouwondernemer ("werf",
"onderdak", "EPDM", "bestelwagen"). Vermijd wollige verzekeringstaal; leg uit "in
mensentaal" (letterlijke FAQ-kop op `dakwerkers.astro`).

## 3. CTA-tekst en -bestemmingen

Alle conversie-CTA's komen **verplicht** uit `src/data/cta-labels.ts`. Verzin geen
knoptekst rechtstreeks in een pagina.

### Constanten gebruiken voor (en alleen voor)

- scan → `/gratis-verzekeringsscan/`
- afspraak → `/maak-afspraak`
- telefoon (`tel:`), e-mail (`mailto:`)

### NIET voor

Interne navigatielinks, footer-/juridische links, hoofdnavigatie, externe
partner-links.

### Positie-afspraken

| Positie | Scan | Afspraak |
|---|---|---|
| Hero (boven de vouw) | `CTA_SCAN.hero` | `CTA_AFSPRAAK.hero` |
| Inline (lopende tekst) | `CTA_SCAN.inline` | `CTA_AFSPRAAK.inline` |
| Eind-CTA-band | `CTA_SCAN.band` | `CTA_AFSPRAAK.band` |
| Sticky/floating | `CTA_SCAN.short` | `CTA_AFSPRAAK.short` |

Daarnaast bestaan variant-labels om herhaling te vermijden: `request`, `requestNow`,
`start`, `doIt`, `full` (scan) en `advisory`, `advisoryFull` (afspraak). De norm-pagina's
gebruiken die mix bewust.

### Secundaire CTA = `/maak-afspraak`

De secundaire knop verwijst naar **`CTA_DESTINATIONS.afspraak`** (`/maak-afspraak`),
**niet** naar `/contact/`. (`dakwerkers.astro` doet dit correct; `sectoren/index.astro`
gebruikt nog `/contact/` → zie bekende afwijking.)

### Bekende afwijking — overzichtspagina's hardcoden CTA's

`sectoren/index.astro` en `verzekeringen/index.astro` hardcoden hun CTA-tekst en URL's
("Gratis scan aanvragen", "Afspraak maken", `/gratis-verzekeringsscan/`,
`/maak-afspraak`, `/contact/`) i.p.v. `cta-labels.ts`. Dit is **nog te migreren** naar
constanten en geldt **niet** als norm. Nieuwe pagina's gebruiken altijd de constanten.
