# Verzekeringspagina-norm (polis)

Referentie/norm: `src/pages/verzekeringen/arbeidsongevallen.astro`. Repliceer deze
structuur voor elke nieuwe polis-pagina. Dit is een **inhoudelijk/juridisch zware**
pagina met een eigen ritme; bouw bijna alles als **statische HTML** met **vanilla-JS
toggles** (SEO-eis, CLAUDE.md §7) en gebruik islands alleen waar echt nodig.

## Opzet van het bestand

1. **Frontmatter:** importeert `BaseLayout`, `InsuranceCarousel`, `PartnerSlider`,
   `BrandChevron`, CTA-constanten.
2. **Data-arrays:** `faqItems` ({q,a}), `beroepTabs`, `insuranceCards`, plus de
   FAQPage-`schema` en inline SVG-helper-strings (`svgCheck16g`, `svgX16r`, `svgArr18`).
3. **`<BaseLayout>`** met unieke meta + `schema`.
4. **Twee `<style>`-blokken:** een `is:global` (sticky-/tab-/card-klassen met `ao-`
   prefix) en een gewone met responsieve grid-klassen.
5. **Een wrapper-`<div>`** + de secties, afgesloten met één groot vanilla-JS-`<script>`.

> **Body-kleur:** navy `#001F3F` (hoofd-body); slate `#3F5767` (secundair). **Body-font:**
> Outfit; UI = Open Sans. **Vermijd** het niet-token-grijs `#64748b` (bekende afwijking).
> **CTA's:** uit `cta-labels.ts`, secundair = `CTA_DESTINATIONS.afspraak`.

## Sectie-structuur (sectie voor sectie)

> De exacte sectie-inhoud verschilt per polis. Wat hieronder **vast** heet, is het
> *patroon/skelet*; **varieert** is de polis-specifieke inhoud.

### 0. Scroll-progress bar
- **Vast:** vaste gold-balk bovenaan (`#ao-progress-track` / `#ao-progress-bar`),
  aangedreven door het scroll-script.

### 1. Hero (`#ao-hero`) — `#FFFFFF`, `min-height:100vh`
- **Vast:** badge-pill, H1 (Outfit 900), gouden subzin, intro, knoppen
  (`.brand-btn-primary--lg` scan + `.brand-btn-secondary` afspraak), hero-disclaimer,
  hero-mask rechts.
- **Varieert:** polisnaam + copy.
- **Layout (norm sinds D10 — NIET zelf afwijken):** geen eigen header-`padding-top`
  (zit centraal op `<main>` via `--header-clear`). Tekst-inner `padding: 100px 32px 80px`.
  Hero-foto flush tegen de bovenrand (`top: 0; right: -5px`), content-onafhankelijke maat
  `height: min(85vh, calc(48vw * 709 / 594)); width: auto` (géén losse `max-width`).
  Identiek aan de sectorpagina's. Zie DECISIONS-LOG D10.

### 2. Sticky sub-nav (`#ao-sticky-nav`) — `position:sticky; top:72px`
- **Doel:** sectie-navigatie + scroll-spy.
- **Vast:** knoppenrij met check-icoontjes, vanilla-JS smooth-scroll + active-tracking;
  **verborgen < 768px**.
- **Varieert:** de ankers (id's + labels van de inhoudssecties).

### 3. "Wat is het" (`#watis`) — `#FFFFFF`
- **Vast:** "In het kort"-slate-kaart (vaste kolom 340px) met check-bullets + uitleg-
  kolom (H2 + alinea's) + "Wettelijke basis"-infobox (gold-tint).
- **Varieert:** copy + correcte wetsverwijzing met jaartal.

### 4. "Is het verplicht" (`#verplicht`) — `#e5a52414`
- **Vast:** groot antwoord-woord ("Ja.") + 4-kaarten-grid.
- **Varieert:** copy + de 4 kaarten.

### 5. Definitie/voorwaarden — `#FFFFFF` + chevron
- **Vast:** genummerde voorwaarden-grid + info-box + **uitklapbare lijst** (vanilla-JS
  toggle, content in DOM).
- **Varieert:** de voorwaarden + voorbeelden.

### 6. Dekking (`#dekking`) — `#F7F4EF` (sand)
- **Vast:** twee-koloms "wel gedekt" (groen) / "niet gedekt" (rood) met
  check-/kruis-iconen; eronder een slate-balk met een kerngetal (bv. loonplafond).
- **Varieert:** de bullets + het bedrag/jaartal.

### 7. Aanvullingen — `#3F5767` (slate) + chevron
- **Vast:** grid van waarborg-kaarten + 1 gouden CTA-kaart (scan).
- **Varieert:** de aanvullingen.

### 8. Premie/berekening (`#premie`) — `#F7F4EF` (sand) + chevron
- **Vast:** formule-blokken (factor × factor = resultaat) + factoren-grid + fiscaal-
  foldedcard.
- **Varieert:** de bedragen/factoren.

### 9. Tussen-CTA band (`#ao-cta-band`) — `#E9C466` (gold-light)
- **Vast:** mask-foto + chevrons; H2 (wit) + subzin (slate); 1 donkere scan-knop.
- **Varieert:** H2-tekst.

### 10. Per beroep (tabs) (`#ao-beroep`) — `#e5a52414`
- **Doel:** vertaal de polis naar elke stiel.
- **Vast:** tab-balk + **alle tab-panels in DOM** (display-switch via JS — SEO-safe),
  gevoed door `beroepTabs`; elk panel linkt naar de sectorpagina.
- **Varieert:** de beroep-teksten + links.

### 11. Statuten (accordion) — `#3F5767` (slate)
- **Vast:** accordion-panels met **alle content in DOM**, vanilla-JS toggle.
- **Varieert:** de statuut-teksten.

### 12. Procedure (`#procedure`) — `#FFFFFF` + chevron
- **Vast:** genummerde stappen-grid met verbindingslijn.
- **Varieert:** de stappen.

### 13. Alert-sectie — `#FEF2F2` (rood-tint)
- **Doel:** gevolgen van niet/te laat verzekerd zijn.
- **Vast:** waarschuwingsblok met rode iconen + bullets.
- **Varieert:** de risico-bullets.

### 14. FAQ (`#faq`) — `#F7F4EF` (sand)
- **Vast:** accordion met **alle Q+A in statische HTML** (`data-faq-*`), vanilla-JS
  toggle. (Let op: hier géén `FaqAccordion`-island, maar inline statische accordion.)
- **Varieert:** `faqItems` + FAQPage-schema.

### 15. Gerelateerde verzekeringen — island `InsuranceCarousel client:only="react"`
- **Vast:** carousel uit `insuranceCards`, prop `background="#F5F2FF"`.
- **Varieert:** de `insuranceCards`.

### Partners (vaste afsluiter) — `#F7F4EF` (sand)
- **Vast:** micro-label + `PartnerSlider client:only="react"`.

### Final CTA (vaste afsluiter) — `#3F5767` (slate)
- **Vast:** dot-pattern + section-label + H2 + 2 knoppen (scan + afspraak) + wave-
  polygon.
- **Varieert:** copy.

## Verschil met de sectorpagina (de norm-DNA)

| | Sectorpagina | Verzekeringspagina |
|---|---|---|
| Islands | veel (4) | weinig (2: InsuranceCarousel, PartnerSlider) |
| Interactie | grotendeels in islands | sticky sub-nav + scroll-progress + **vanilla-JS** tabs/accordions |
| FAQ | `FaqAccordion`-island | **inline statische** accordion (data-faq) |
| Focus | overtuiging/cases/testimonials | inhoud/juridisch, dekking-detail, per-beroep |

**Gedeeld:** hero-opzet, badge-pill, gouden section-labels, clip-path-hoeken,
`BrandChevron`-overgangen, gold-light tussen-CTA-band, slate final-CTA met wave,
`PartnerSlider`.

## SEO-eis (CLAUDE.md §7) — hard

- Tabs, accordions en carousel-slides: **alle content in de HTML-bron**; JS switcht
  alleen `display`. Nooit antwoorden/panels die pas client-side bestaan.
- Geen volledige pagina in één `client:load` React-island.
- Geen `<style>` JSX-tag binnen een React-island (hydration-error).
- Unieke `title` / `description` / `canonical` per route + JSON-LD waar van toepassing.

## Bekende afwijkingen

- `arbeidsongevallen.astro` gebruikt `#64748b` voor veel secundaire tekst → nieuwe
  pagina's: `slate #3F5767`.
- De `ao-`-klassen leven lokaal in het bestand (deels naast `.brand-*`). Dit blijft
  staan; nieuwe pagina's gebruiken bij voorkeur `.brand-*` voor knoppen/kaarten.
