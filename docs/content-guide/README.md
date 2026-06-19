# Content- en stijlgids — Assurmanbouw

Dit is de **single source of truth** voor het bouwen van nieuwe sector- en
verzekeringspagina's (en het kenniscentrum) op assurmanbouw.be. Doel: een nieuwe
pagina correct kunnen bouwen **zonder de referentiepagina's te moeten ontleden** en
**zonder giswerk**.

> Planning en to-do's staan in [`docs/planning/`](../planning/) — wijzigbaar en **niet bindend** voor stijl/kwaliteit. Deze gids is de norm.

## Kernregel

Alles in deze gids is **afgeleid uit de echte bestanden in deze repo** (code, config,
content), niet uit oudere design-documenten of trainingskennis. Waar een bestand en
een ouder document elkaar tegenspreken, **wint het bestand**.

De referentiepagina's blijven leidend bij twijfel:

| Paginatype | Referentie (norm) |
|---|---|
| Sectorpagina (beroep) | `src/pages/sectoren/dakwerkers.astro` |
| Verzekeringspagina (polis) | `src/pages/verzekeringen/arbeidsongevallen.astro` |
| Overzichts-/cards-pagina | `src/pages/sectoren/index.astro` + `src/pages/verzekeringen/index.astro` |
| Kenniscentrum-artikel | `src/pages/gids/[pillar]/[spoke].astro` |

## Inhoud van deze gids

| Bestand | Inhoud |
|---|---|
| [`sectorpaginas.md`](./sectorpaginas.md) | De 11-secties-norm, sectie voor sectie (doel / vast / varieert), afgeleid van `dakwerkers.astro` |
| [`verzekeringspaginas.md`](./verzekeringspaginas.md) | De polis-pagina-norm, sectie voor sectie, afgeleid van `arbeidsongevallen.astro` |
| [`cards.md`](./cards.md) | De twee card-varianten (sector + verzekering) + de regel "nooit kopiëren, licht aanpassen" |
| [`brand-voice.md`](./brand-voice.md) | Harde copy-regels + aanbevolen boilerplate-formules |
| [`brand-kit.md`](./brand-kit.md) | De echte kleuren, fonts en tokens zoals ze NU in de code staan |
| [`blog-kenniscentrum.md`](./blog-kenniscentrum.md) | De artikel-/pillar-norm, content-collections en de body-font/-kleur-split |

## Hoe deze gids te gebruiken

1. **Bepaal het paginatype** en open het bijhorende gids-bestand.
2. **Repliceer de structuur** van de referentiepagina; pas alleen content/copy aan.
   Verzin geen nieuwe sectie-volgorde, geen nieuwe kleur, geen nieuwe knoptekst.
3. **Check de brand-kit** voor elke kleur/font die je gebruikt. Geen losse hex-waarden
   die niet in de gids staan.
4. **Check de brand-voice** voor alle zichtbare tekst.
5. **CTA's** komen altijd uit `src/data/cta-labels.ts` (zie `brand-voice.md` en de
   pagina-gidsen).

## Verhouding tot CLAUDE.md

`CLAUDE.md` blijft de bovenliggende projectinstructie. Deze gids legt de **huidige live
realiteit** vast en is op een aantal punten **specifieker of afwijkend** van wat
CLAUDE.md vandaag beschrijft. Die conflicten staan expliciet opgesomd onderaan
[`brand-kit.md`](./brand-kit.md#conflicten-met-claudemd) zodat ze apart in CLAUDE.md
verwerkt kunnen worden. Deze gids werkt CLAUDE.md **niet** zelf bij.

## Status van bekende afwijkingen (niet nu opkuisen)

Deze zaken zijn vastgelegd als "bekende afwijking" — vermeld in de gids, maar in deze
ronde **niet** herwerkt:

- De 2 overzichtspagina's (`sectoren/index.astro`, `verzekeringen/index.astro`)
  hardcoden hun CTA-tekst/URL's i.p.v. `cta-labels.ts`. → **nog te migreren**.
- `dakwerkers.astro` (en deels `arbeidsongevallen.astro`) dupliceren knop-/kaart-CSS
  lokaal (`dw-*` / `ao-*`) i.p.v. de `.brand-*`-klassen uit `global.css`. → laten staan.
- De niet-token-grijs `#64748b` wordt op `arbeidsongevallen.astro` gebruikt voor
  secundaire tekst. → niet verder verspreiden; `slate #3F5767` is de norm.
