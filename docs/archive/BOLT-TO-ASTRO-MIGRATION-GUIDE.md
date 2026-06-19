# Bolt → Astro migratiegids

> Read this file before converting any Bolt React/TSX page to an Astro page.
> Place this in your project root and reference it in every new conversation.

---

## Why we are migrating

The original Assurmanbouw website was built in Bolt.new as a React/Vite SPA.
This created a critical SEO problem: search engines could not index any page.

**The mechanism:**

When a search engine crawler visits a page from the original Bolt build, the
HTML response contains essentially this:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

All visible content (headings, paragraphs, buttons, lists, images) only
appears in the DOM after JavaScript executes in a browser. Crawlers that do
not run JavaScript see nothing. Crawlers that do run JavaScript (Googlebot)
see content only on a second-pass crawl, and intermittent failures mean
pages may never get fully indexed.

**Consequences in the original Bolt site:**

- Pages did not appear in Google Search Console after weeks
- View-source on any URL showed an empty `<div id="root">`
- Direct URL access on static hosts returned 404 for any deep route
- Meta tags, canonical URLs, and structured data were identical on every page

We migrated to Astro because Astro renders content as real HTML on the
server. Every page is a static HTML file at build time with all text,
headings, links, and structured data present in the source.

---

## What "Astro done correctly" means

A correctly built Astro page in this project meets all of these:

1. Open the built page in browser DevTools → View Source
2. Every heading, paragraph, FAQ question and answer, card title, list
   item, and link is visible in raw HTML
3. Images have real `<img>` tags with alt text in the source
4. Meta title, description, and canonical URL are unique per page and
   present in the `<head>` before any JavaScript runs
5. Structured data (JSON-LD) is in the source as a `<script type="application/ld+json">` block
6. Only small `<script>` tags exist for genuinely interactive components
7. No giant React island wrapping the entire page

---

## The trap to avoid

When converting a Bolt TSX file to Astro, the easiest path is to wrap the
entire page in a single `client:load` React island. This compiles, looks
correct in the browser, and feels efficient — but it reproduces the exact
problem we are solving. The page becomes a React SPA inside an Astro shell.
Google sees an empty container again.

**This is forbidden.** Any single React island that contains the bulk of a
page's text content is a regression to the Bolt failure mode.

---

## Correct island architecture

For every Bolt TSX page being converted, split the work as follows:

**Static Astro HTML (default — most of the page):**
- Hero section text, image, buttons
- All section headings (H2, H3)
- All paragraphs and body copy
- All card titles, descriptions, and bullet lists
- All FAQ questions AND answers (the answers stay in the DOM, only the
  show/hide is JavaScript)
- All accordion panel content (same rule — content in DOM, toggle is JS)
- All tab panel content (all tabs in DOM, only visibility switches)
- All carousel slide content (all slides in DOM, slide position is JS)
- Footer, navigation links, partner logos
- All images and brand decorative elements
- Structured data JSON-LD blocks

**Vanilla JS `<script>` (preferred for simple interactivity):**
- Scroll progress bars
- Sticky nav show/hide based on scroll position
- Show/hide toggles (examples lists, accordions)
- Tab switching (toggle CSS display between pre-rendered panels)
- Active section tracking (scroll spy)
- Any logic that only needs `document.querySelector` and `addEventListener`

**React island (only when genuinely needed):**
- Components with complex multi-state interactions that share refs
- Components requiring resize listeners with derived state
- Carousels with responsive visible-count logic
- Components with React-specific dependencies (lucide-react icons in
  interactive contexts, recharts, etc.)

When in doubt: use vanilla JS. Islands are the exception, not the default.

---

## Conversion workflow

When asked to convert a Bolt TSX page to Astro:

1. **Read the source TSX completely first.** Do not skim. Note every:
   - Inline style object and its values
   - className and CSS class definition
   - Image path and positioning
   - Brand arrow placement
   - useState hook and what it controls
   - useEffect hook and what it listens to

2. **Inventory the interactive parts.** List every piece that needs
   JavaScript. For each, decide: vanilla JS or React island? Default to
   vanilla JS unless React is genuinely required.

3. **Rebuild as Astro page** at the correct route in `src/pages/`.
   - All static content as plain Astro markup
   - All inline styles preserved exactly (same values, same units)
   - All images referenced from `/public/` with same paths
   - All brand arrows in same positions
   - SEO tags via the BaseLayout slot

4. **Extract islands** to `src/components/islands/` only where needed.
   Pass static content as props or children — do not duplicate text
   inside the island.

5. **Add vanilla JS** for simple interactivity inline in the Astro page
   or as separate `<script>` blocks.

6. **Verify after build:**
   ```
   npm run build
   ```
   Open `dist/[route]/index.html` in a text editor. Confirm:
   - All text content is visible as plain HTML
   - All FAQ questions AND answers are in the source
   - All card content is in the source
   - Only small script tags exist for islands
   - HTML file size is reasonable (not 5KB shell)

7. **Verify visually:**
   ```
   npm run dev
   ```
   Open `http://localhost:4321/[route]`. Confirm pixel-perfect match
   with the original Bolt design. No layout shifts. No hydration errors
   in browser console.

---

## Pixel-perfect requirement

The original Bolt design has been approved by the client. Visual changes
are not permitted during migration. This means:

- Same colors (use the design tokens in `src/styles/tokens.css`)
- Same fonts (Outfit headings, Open Sans body, Plus Jakarta Sans steps)
- Same spacing (padding, margin, gap values from TSX preserved exactly)
- Same brand arrows in same positions with same dimensions
- Same clip-path folded corners on cards (24px or 28px or 32px as in source)
- Same image positions (especially hero images flush to right edge)
- Same content verbatim (do not paraphrase, do not abbreviate, do not
  invent alternative copy)

If the source TSX uses `gridTemplateColumns: '340px 1fr'`, the Astro page
must use the same. If the source uses `padding: '96px 32px'`, preserve it.
Inline styles in TSX translate directly to inline styles in Astro markup
or matching values in component-scoped CSS.

---

## Mobile responsiveness

The original Bolt build was desktop-first and broken on mobile. The Astro
rebuild must fix mobile issues during conversion, not preserve them.

Reference the homepage and `sectoren/dakwerkers.astro` for established
mobile patterns. Multi-column grids must collapse appropriately:

- 4 columns desktop → 2 columns tablet → 1 column mobile
- 3 columns desktop → 1 column mobile (or stay 2 if cards are small)
- 5 columns desktop → 2 columns tablet → 1 column mobile
- Hero images reposition or scale on narrow viewports
- Carousels show 1 card on mobile, 2 on tablet, 3 on desktop

Test breakpoints: 375px, 768px, 1024px, 1280px.

---

## Common pitfalls and how to avoid them

**Pitfall: hydration errors from inline `<style>` tags inside React islands**
React 18 hoists `<style>` to `<head>` on the client but Astro renders
them inline during SSR. The mismatch breaks hydration. Move all CSS to
`global.css` or a component-scoped `<style>` in the Astro file. Never
include `<style>` JSX inside a React island component.

**Pitfall: HTML-encoded apostrophes in inline styles**
String values containing `'` get encoded to `&#x27;` server-side but
stay as `'` client-side. Use double quotes inside style strings, or
move CSS to a stylesheet.

**Pitfall: window or document references in island components**
Server has no window. Wrap browser-only code in `useEffect` or guard
with `typeof window !== 'undefined'`. Or use `client:only="react"`
when SSR adds no value.

**Pitfall: invented content during conversion**
The TSX source is the single source of truth. Do not paraphrase
headings, do not summarize body copy, do not replace button labels.
Copy text verbatim. If the source says "Doe de gratis scan →", the
Astro version says exactly that.

**Pitfall: skipping decorative elements**
Brand arrows, photos with `position: absolute`, gradient overlays,
and SVG waves are not optional. They are part of the approved design.
Preserve every decorative element from the TSX.

**Pitfall: forgetting structured data**
Pages with FAQ sections need FAQPage JSON-LD. Pages about specific
insurance products may need Service or Product schema. Check the TSX
for any `<script type="application/ld+json">` blocks and preserve them
in the Astro `<head>`.

---

## Reference files in this project

When converting a new page, study these for established patterns:

- `src/pages/index.astro` — homepage with hero, sections, mobile patterns
- `src/pages/sectoren/dakwerkers.astro` — sector page template (most
  complete)
- `src/pages/verzekeringen/arbeidsongevallen.astro` — insurance page
  with sticky subnav, accordions, FAQ, carousel — correctly split into
  islands
- `src/styles/tokens.css` — brand colors and typography tokens
- `src/styles/global.css` — global styles and shared CSS rules
- `src/layouts/BaseLayout.astro` — SEO head tags, fonts, navigation
- `src/components/islands/` — existing islands to reuse where possible
- `src/data/partners.ts` — partner data for PartnerSlider

---

## Final checklist before declaring a page done

Before reporting a converted page as complete:

- [ ] `npm run build` passes with zero errors
- [ ] View-source on the built HTML shows all text content as plain HTML
- [ ] No giant React island containing static content
- [ ] Browser console on the live page shows no hydration errors
- [ ] All headings, paragraphs, lists are visible without JavaScript
- [ ] FAQ questions AND answers are in the page source
- [ ] Pixel-perfect visual match with the original Bolt page
- [ ] Mobile layout works at 375px, 768px, 1024px, 1280px
- [ ] Sticky elements behave correctly during scroll
- [ ] All interactive elements (toggles, carousels, accordions) work
- [ ] Meta title, description, canonical are unique to this page
- [ ] Structured data JSON-LD is present where applicable
- [ ] Internal links to other pages use correct routes
- [ ] No console errors or warnings
