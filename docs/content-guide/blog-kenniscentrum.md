# Kenniscentrum / blog-norm

Naam in UI/navigatie = **"Kenniscentrum"**; URL = **`/gids/`**. Verander dit nooit
zonder expliciete instructie (CLAUDE.md §4).

Bronnen: `src/content/config.ts`, `src/pages/gids/[pillar]/[spoke].astro`,
`src/pages/gids/[pillar]/index.astro`, `src/pages/gids/index.astro`,
`src/components/{TLDR,AuthorByline,SpokeCard,Breadcrumbs}.astro`, `src/data/authors.ts`.

## 1. Drie contenttypes, drie templates

| Type | URL | Template | Collection |
|---|---|---|---|
| Hub | `/gids/` | `gids/index.astro` | (aggregeert alle) |
| Pillar | `/gids/[pillar]/` | `gids/[pillar]/index.astro` | `pillars` |
| Cluster-post / artikel | `/gids/[pillar]/[slug]/` | `gids/[pillar]/[spoke].astro` | `cluster-posts` |
| Los artikel | `/gids/...` | (eigen) | `losse-artikelen` |

**Pillar-template en artikel-template zijn niet uitwisselbaar** (CLAUDE.md §4). Bij
twijfel: vraag welke.

## 2. Content-collections (schema = `src/content/config.ts`)

**Gedeelde verplichte velden** (pillar + cluster-post): `title`, `seoTitle`,
`metaDescription`, `primaryKeyword`, `category`, `publishDate` (ISO-string), `author`
(slug), `readingTime` (min), `heroImage`, `heroImageAlt`, `status`
(`draft|published|archived`).

- **Pillar-specifiek:** `pillarId` (bv. "P3"), `spokes[]` (volgorde van de cluster-
  posts), `hubIntro`, optioneel `hubTitle`, `tldr`, `faq[]`, `primaryCta`.
- **Cluster-post-specifiek:** `spokeId` (bv. "P3-S3"), `parentPillar` (slug),
  **verplichte `tldr`**, optioneel `secondaryKeywords[]`, `sectors[]`,
  `relatedInsurances[]`, `targetAudience`, `midContentImage(+Alt)`, `faq[]`,
  `relatedSpokes[]`, `tileTitle`, `featured`, `conclusion`.

Alleen `status: "published"` wordt gepubliceerd (alle `getCollection`-filters checken
dit).

## 3. Artikel-template (`[spoke].astro`) — opbouw

Twee-koloms (`.gs-grid`: 280px sidebar + content), op ≤1023px wordt de sidebar verborgen
en verschijnen mobile-varianten.

**Sidebar (desktop):**
1. "In dit artikel" — ToC uit de H2-headings (`details`/`summary`, standaard dicht).
2. "X artikelen in deze reeks" — siblings uit dezelfde pillar + "Lees het hoofdartikel".
3. "Direct regelen" (sticky) — slate-blok met scan/afspraak/contact-links.

**Main content (volgorde):**
1. Category-label (gold) → H1 (Outfit 900, navy) → `AuthorByline variant="compact"`
   (auteur + publishDate + readingTime).
2. `TLDR`-component (`spoke.data.tldr`).
3. Mobile-ToC (verborgen op desktop).
4. Prose-body (`.gs-prose`, `data-pagefind-body`): hero-image staat bovenaan maar wordt
   via een klein `<script>` **na de eerste alinea** geplaatst; daarna `<Content />`.
5. Optionele mid-content-image.
6. FAQ-blok (`FaqAccordion client:visible`, `hideHeader`) als `faq[]` bestaat.
7. Conclusie (`conclusion`, gesplitst op `\n\n`).
8. Mobile "Direct regelen".
9. "Lees het hoofdartikel"-link.
10. `AuthorByline variant="full"` (onder de grid).
11. "Bijkomende bronnen"-grid: `SpokeCard`'s (related) + 1 pillar-kaart
    (`.gs-pillar-card`, slate).
12. Slate final-CTA met wave (scan + afspraak, beide uit `CTA_DESTINATIONS`).

## 4. Prose-stijl (`.gs-prose`) — afwijkend van de landingspagina's

Dit is **de plek waar de body-font/-kleur-split geldt**:

- **Body (`p`, `li`): Open Sans, 17px, kleur `slate #3F5767`**, line-height 1.75.
- **Headings (h2/h3): Outfit**, navy.
- **`strong`:** navy. **Links:** gold met underline, hover navy.
- **Tabellen:** navy header (`#001F3F`), even rijen `#F7F4EF` (sand).
- **Blockquote:** gouden left-border + gold-tint bg.

> Dus: **landingspagina's = Outfit-body + navy-tekst; blog-prose = Open Sans-body +
> slate-tekst.** Dat is een bewuste, gedocumenteerde split (zie `brand-kit.md` §4).

## 5. Schema (per artikel, via `BaseLayout`)

`[spoke].astro` genereert: `Article` + `BreadcrumbList` + (indien `faq`) `FAQPage`.
- `Article`: `author` = `Person` met `jobTitle` (= `author.role`), `url` (auteurspagina)
  en `sameAs` (LinkedIn); `publisher` = `InsuranceAgency` "Assurman".
- Alle absolute URL's gebruiken **`SITE_URL` uit `src/data/site.ts`**
  (`https://assurmanbouw.be`). Hardcode geen domein.

## 6. Auteur (CLAUDE.md §4)

- Eén bron: `src/data/authors.ts`. Auteur op elk artikel = **Benoit Keerman**
  (`benoit-keerman`). Nooit Dennis.
- `AuthorByline` haalt de data uit `authors.ts`; auteurs nooit hardcoden in een
  template.
- Auteurspagina: `/auteur/[slug]/`, schema `ProfilePage` + `Person` met `sameAs`
  LinkedIn, lijst van alle artikelen waar `author === slug`.

## 7. RSS

`src/pages/rss.xml.js` bouwt de feed uit alle gepubliceerde pillars + cluster-posts +
losse artikelen, gesorteerd op `publishDate`, max 25 items. Gebruikt `SITE_URL` voor
alle links. Aangekondigd via `<link rel="alternate" type="application/rss+xml">` in
`BaseLayout`.
