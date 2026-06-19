# Cards-norm (overzichtspagina's)

Er zijn **twee** card-varianten, bewust bijna identiek. Bronnen:
`src/pages/sectoren/index.astro` (`.sector-card`) en
`src/pages/verzekeringen/index.astro` (`.vz-card`).

> **Kernregel: nooit een card klakkeloos kopiëren — licht aanpassen binnen het vaste
> DNA.** Behoud bg, clip-path, icon-box, titel-stijl, hover en gold-cta. Pas alleen de
> inhoud (en de variant-specifieke extra's) aan.

## Gedeeld card-DNA (beide varianten)

- **Achtergrond:** `#e5a5240f` (gold ~6%).
- **Padding:** 32px.
- **Clip-path:** gevouwen hoek **rechtsonder 32px**
  (`polygon(0% 0%,100% 0%,100% calc(100% - 32px),calc(100% - 32px) 100%,0% 100%)`).
- **Hover:** `translateY(-4px)` + box-shadow.
- **Icon-box** linksboven: gold-tint (`rgba(229,165,36,0.1)`), border-radius 8px,
  padding 14px, gold-icoon (`stroke:#E5A524`, 36×36).
- **Titel:** Outfit 700, 20px, navy `#001F3F`.
- **CTA-link** onderaan: Open Sans 700, gold, met pijl-icoon.
- **Hele kaart is één `<a>`** (volledig klikbaar).
- **Grid:** 3 koloms → 2 (≤1023px) → 1 (≤639px), gap 20px.

## Variant A — sector-card (`sectoren/index.astro`)

Data-array `sectors[]`: `slug, title, description, iconPath, tags[]`.

**Volgorde in de kaart:** icon-box → H2-titel → **gouden accentbalk (40×3px)** →
beschrijving (Outfit 400, 15px, navy) → **tag-pills** (`.sector-tag`: wit-transparant
bg, gouden border, tekst `#8B6A1A`) → "Meer info"-link met pijl.

**Variant-specifiek:** de gouden accentbalk en de tag-pills. `href = /sectoren/{slug}`.

## Variant B — verzekering-card (`verzekeringen/index.astro`)

Data-array `verzekeringen[]`: `title, intro, bullets[], cta, link, badge, badgeBg,
badgeColor, iconPath`.

**Volgorde in de kaart:** **badge-pill rechtsboven** (per-kaart kleur) → icon-box →
H2-titel → intro → **bullets met gouden check-iconen** → "Meer over …"-cta-link.

**Variant-specifiek:** de badge-pill en de check-bullets (geen accentbalk, geen tags).

**Badge-kleurcodes (uit de data):**

| Betekenis | `badgeBg` | `badgeColor` |
|---|---|---|
| Verplicht / Verplicht (BA) / Verplicht bij woningbouw | `#FEE2E2` | `#DC2626` (rood) |
| Essentieel | `rgba(229,165,36,0.15)` | `#8B6A1A` (gold-donker) |
| Sterk aanbevolen / Projectspecifiek / Essentieel (var) | `rgba(63,87,103,0.1)` | `#3F5767` (slate) |

## Wanneer welke variant

- **Sector-overzicht** (`/sectoren`): variant A (tags tonen de relevante polissen per
  beroep).
- **Verzekeringen-overzicht** (`/verzekeringen`): variant B (badge toont
  verplicht/essentieel; bullets vatten de dekking samen).

## Bekende afwijking — CTA's hardcoded

Beide overzichtspagina's hardcoden hun hero-/final-CTA-knoppen (tekst + URL) i.p.v.
`cta-labels.ts`. Dit is **nog te migreren** en geldt niet als norm. `sectoren/index.astro`
linkt zijn secundaire CTA bovendien naar `/contact/`; de norm is
`CTA_DESTINATIONS.afspraak` (`/maak-afspraak`). De **card-links zelf** (naar
`/sectoren/...` en `/verzekeringen/...`) zijn interne navigatie en horen **niet** in
`cta-labels.ts`.

## Andere card-typen (ter referentie, niet de overzichts-norm)

- **Blog "Bijkomende bronnen"**: `SpokeCard.astro` (slate-kaart) + een pillar-kaart
  (`.gs-pillar-card`). Zie `blog-kenniscentrum.md`.
- **Donkere sectie-kaarten** op sector-/verzekeringspagina's: `.brand-insurance-card` /
  `.dw-insurance-card` / `.ao-ins-card` (transparant-wit op slate, clip-path-hoek).
