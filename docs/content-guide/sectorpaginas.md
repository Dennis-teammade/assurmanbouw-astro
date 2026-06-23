# Sectorpagina-norm (beroep)

Referentie/norm: `src/pages/sectoren/dakwerkers.astro`. Repliceer deze structuur voor
elke nieuwe sectorpagina (loodgieters, elektriciens, …). Pas alleen content/copy aan.
Verzin geen nieuwe sectie-volgorde.

## Opzet van het bestand

1. **Frontmatter (Astro):** importeert `BaseLayout`, de islands (`InsuranceCarousel`,
   `CaseStudyCarousel`, `FaqAccordion`, `PartnerSlider`), `BrandChevron`, en de
   CTA-constanten uit `cta-labels.ts`.
2. **Data-arrays** bovenaan: `insuranceCards`, `caseStudies`, `faqItems`, en de
   `schema` (FAQPage uit `faqItems`).
3. **`<BaseLayout>`** met unieke `title`, `description`, `canonical`, `schema`.
4. **Lokale `<style>`** met `dw-`-prefix (zie bekende afwijking onderaan).
5. **De 11 secties** in vaste volgorde.

> **Body-kleur:** navy `#001F3F`. **Body-font:** Outfit. **UI (knoppen/labels):** Open
> Sans. Zie `brand-kit.md`. **CTA's:** altijd uit `cta-labels.ts`, secundair =
> `CTA_DESTINATIONS.afspraak`.

## De 11 secties (sectie voor sectie)

### 1. Hero — `background:#FFFFFF`, `min-height:100vh`
- **Doel:** beroep benoemen, gouden belofte-subzin, vertrouwen, 2 CTA's.
- **Vast:** badge-pill ("Assurman • Bouwverzekeringen op maat"), H1 (Outfit 900,
  clamp 36-64px, navy), gouden subzin (Outfit 800, navy→gold), intro-alinea (Outfit
  400, navy), knoppenrij (primair scan + secundair afspraak), hero-disclaimer,
  hero-mask-foto rechts (`assurman-mask--hero`, verdwijnt < 1024px).
- **Varieert:** beroepsnaam, H1-tekst, subzin, intro-copy, hero-afbeelding + alt.
- **Layout (norm sinds D10 — NIET zelf afwijken):** de sectie heeft **geen** eigen
  header-`padding-top`; de header-ruimte zit centraal op `<main>` (`--header-clear`).
  Tekst-linkerkolom (`.dw-hero-content`) `padding-top: 100px`. Hero-foto flush tegen de
  bovenrand (`top: 0; right: -5px`) met de gestandaardiseerde, content-onafhankelijke
  maat `height: min(85vh, calc(48vw * 709 / 594)); width: auto` (géén losse `max-width`).
  Identiek aan de verzekeringspagina's. Zie DECISIONS-LOG D10.

### 2. Key-features strip — `background:#e5a52414` (gold-strip)
- **Doel:** 4 kernbeloftes in één oogopslag.
- **Vast:** micro-label ("Een goede verzekering begint bij:"), 4 witte kaartjes met
  gold-icoon + 2-regel tekst (`white-space:pre-line`).
- **Varieert:** de 4 feature-teksten + icon-paths.

### 3. Intro + positionering — `background:#FBF8FF` (off-white)
- **Doel:** "waarom een specialist", merkverhaal.
- **Vast:** twee-koloms (`1fr 1fr`); links H2 + gouden balk (96×6px) + 2 alinea's +
  blockquote (gouden left-border); rechts 3 `.dw-why-card` (witte kaart, gouden
  left-border) met icoon.
- **Varieert:** alle copy, de 3 kaart-titels/teksten/iconen, de blockquote-zin.

### 4. Quick benefits (donker) — `background:#3F5767` (slate)
- **Doel:** "wat de sector waardeert", 4 voordelen.
- **Vast:** decoratieve `BrandChevron` (wit, opacity 0.07) rechts; section-label (gold)
  + H2 (wit); 4 `.dw-insurance-card` met clip-path-hoek, gold-icoon, witte titel,
  `#CBD5E1` body.
- **Varieert:** de 4 benefit-teksten + iconen.

### 5. Insurance carousel — island `InsuranceCarousel client:visible`
- **Doel:** het sectorpakket: de belangrijkste polissen.
- **Vast:** carousel gevoed door `insuranceCards`; props `sectionLabel`, `headline`,
  `subheadline`.
- **Varieert:** de `insuranceCards`-array (titel, intro, bullets, cta, link, icon).
  Links wijzen naar `/verzekeringen/...`-pagina's.

### 6. Waarom kiezen (donker) — `background:#3F5767` (slate)
- **Doel:** geloofwaardigheid + stats + 3 redenen.
- **Vast:** dot-pattern-overlay + mask-foto (`assurman-mask--why`); section-label + H2 +
  subzin; `.dw-stats-grid` (4 items, waarvan 1 een gouden scan-link met
  `CTA_DESTINATIONS.scan`); `.dw-cards3-grid` (3 kaarten met clip-path-hoek).
- **Varieert:** stats + 3 kaarten.

### 7. Case carousel — island `CaseStudyCarousel client:visible`
- **Doel:** concrete schadecases uit de sector.
- **Vast:** slides uit `caseStudies`.
- **Varieert:** de cases (category, title, businessName, ownerName, cityName,
  description, action, image). Bedragen/namen mogen niet verzonnen worden buiten wat
  als illustratieve case is afgesproken (zie brand-voice: geen verzonnen cijfers —
  cases zijn fictieve illustraties, houd ze als zodanig herkenbaar/algemeen).

### 8. FAQ — island `FaqAccordion client:visible`
- **Doel:** veelgestelde vragen, "in mensentaal".
- **Vast:** accordion uit `faqItems`; props `sectionLabel`, `headline` ("In
  mensentaal"), `subheadline`. FAQPage-`schema` gegenereerd uit `faqItems`.
- **Varieert:** de FAQ-items (title/content).

### 9. Process — `background:#FFFFFF`
- **Doel:** "onze aanpak" in 4 stappen.
- **Vast:** section-label ("Onze aanpak") + H2 + subzin; `.dw-process-grid` (4 stappen
  met grote `.dw-step-number`); afsluitend quote-blok met clip-path
  ("Geen gedoe. Wel controle."). Stap-titels gebruiken Plus Jakarta Sans (bestaand
  gebruik).
- **Varieert:** de 4 stappen + het slot-blok.

### Chevron-overgang
Witte neerwaartse `BrandChevron` tussen sectie 9 en 10 (page-divider).

### 10. Tussen-CTA band — `background:#E9C466` (gold-light)
- **Doel:** conversie-onderbreking.
- **Vast:** mask-foto (`assurman-mask--cta`); H2 (wit) + subzin (slate); 1 donkere knop
  (slate-bg) met `CTA_SCAN.requestNow`.
- **Varieert:** H2-tekst.

### 11. Testimonials — `background:#F5F2FF` (cream)
- **Doel:** sociaal bewijs + certificering.
- **Vast:** twee-koloms header (links intro + 5/5-blok; rechts "Sector Gecertificeerd"
  met FSMA `0805.250.547` + `BZB-FEDAF` badges); `.dw-testimonials-grid` (3 testimonial-
  kaarten met clip-path); badge-rij onderaan.
- **Varieert:** quotes + namen (geanonimiseerd, geen verzonnen identiteiten). **5/5
  blijft 5/5.**

### Partners (vaste afsluiter) — `background:#F7F4EF` (sand)
- **Vast:** micro-label ("Ondersteund door sterke verzekeringspartners") +
  `PartnerSlider client:visible`.

### Final CTA (vaste afsluiter) — `background:#3F5767` (slate)
- **Vast:** H2 (wit) + subzin (`#CBD5E1`) + 2 knoppen (scan + afspraak) + disclaimer +
  witte wave-polygon onderaan.
- **Varieert:** H2/subzin.

## Vaste DNA-elementen (op elke sectorpagina identiek)

- `.dw-container`: `max-width:1280px`, padding 32px → 24px (≤1023) → 15px (≤767).
- Badge-pill in hero, gouden section-labels (Outfit 700, 14px, uppercase, ls 1.4px).
- Clip-path gevouwen hoeken (24/28/32px).
- `BrandChevron` als sectie-overgang; wave-polygon onderaan final CTA.
- Mask-foto's (`--hero`, `--why`, `--cta`); hero-foto verborgen < 1024px.
- Responsieve grids verschuiven naar 2-koloms (≤1023px) en 1-koloms (≤767px).

## Bekende afwijking — lokale `dw-*`-CSS

`dakwerkers.astro` definieert in zijn lokale `<style>` o.a. `.dw-btn-primary`,
`.dw-btn-secondary`, `.dw-why-card`, `.dw-insurance-card`, `.dw-step-number` die de
`.brand-*`-equivalenten uit `global.css` **dupliceren**. Dit blijft staan (niet
herwerken). Voor **nieuwe** pagina's: gebruik bij voorkeur de `.brand-*`-klassen uit
`global.css`; gebruik lokale `<style>` enkel voor pagina-specifieke layout-grids.
