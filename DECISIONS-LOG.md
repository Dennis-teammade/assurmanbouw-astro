# DECISIONS-LOG.md — Assurmanbouw Kenniscentrum

Beslissingen die vastgelegd zijn tijdens de bouw van het kenniscentrum.
Chronologisch, meest recent onderaan. Bij conflict wint deze log boven eigen redenering.

---

## 2026-05-09

### D1 — kenniscentrum.astro laten staan
`src/pages/kenniscentrum.astro` wordt niet aangeraakt tijdens de kenniscentrum-build.
Bij go-live beslissen we: verwijderen of 301-redirect naar `/gids/`. Zie POST-LAUNCH-TODO.md.

### D2 — Typografie: Outfit + Open Sans (Questrial geschrapt)
Questrial en Source Sans Pro uit de visuele design-brief worden **genegeerd**.
Leidend zijn de bestaande fonts in `global.css`:
- Headings (H1–H6): **Outfit**
- Body-tekst, paragrafen, meta: **Open Sans**
- Plus Jakarta Sans: alleen waar bestaande pagina's het al gebruiken, niet proactief introduceren.
Reden: design-brief was gebaseerd op een verouderde brand-kit.

### D3 — URL-tabel developer brief is leidend bij slug-mismatches
Bij conflict tussen content-filename en URL-tabel uit developer brief v2:
de URL-tabel wint altijd. Image-bestandsnamen volgen de URL-tabel (zijn al correct).

Vastgelegde afwijkingen voor Cluster 1:
- `c1-3`: frontmatter `slug: "groeiend-bouwbedrijf"` (niet "middelgroot-bouwbedrijf")
- `c1-4`: frontmatter `slug: "zelfstandige-zonder-personeel"` (niet "zelfstandige-bouw")

Principe voor alle andere clusters: bij elk verschil → URL-tabel wint.

### D4 — Dit DECISIONS-LOG.md aangemaakt
Alle bouw-beslissingen worden hier chronologisch vastgelegd voor traceerbaarheid
in toekomstige sessies. Toevoegen bij elke nieuwe beslissing.

---

## 2026-06-14 — afsluiting fase 1

### D5 — Tracking-architectuur: Silktide consent-gate + Rybbit cookieless
Voor compliance + bruikbare statistieken hangen we **vier** trackers op de site, in twee lagen.

**Laag 1: consent-gated via Silktide v2.0.0** (free, CDN via jsdelivr met SRI-hashes, geconfigureerd in `src/layouts/BaseLayout.astro`):
- **Statistieken-categorie** → `Google Analytics 4` (`G-FD7Z07N8ZP`). Script + `gtag('config', ...)` in `onAccept`-callback.
- **Marketing-categorie** → `Meta Pixel` (`1750535209274814`) + `Google Ads` (`AW-18226579560`). Beide scripts in `scripts:[]` van dezelfde Silktide-marketing-config, beide init's in dezelfde `onAccept`-callback met aparte guards (`window.__metaPixelInit`, `window.__googleAdsInit`) tegen dubbele init.
- Trackers laden **alleen** ná expliciete consent op de betrokken categorie. Consent Mode v2-conform.

**Laag 2: cookieless, geen consent nodig** — `Rybbit` (`stats.teammade.li`, site-ID `6b9ef746dc7d`), geladen direct in `<head>` met `defer`. Verzamelt geen persoonsgegevens, plaatst geen cookies. Geeft ons sitestatistieken ook als gebruikers Marketing/Statistieken weigeren. Vermeld in cookie-policy.

**Niet samenvoegen**: GA4 staat onder Statistieken, Google Ads (AW-) onder Marketing — apart, ook al lijken ze beide "Google-tracking". GA4 = analytics, Ads = remarketing.

**Belangrijk**: Silktide free ondersteunt geen runtime kleurenconfig. De wizard-preview toont kleuren die de embed niet uitserveert. Onze huisstijl-kleuren (slate bg, gold-light primaire knoppen, witte koppen) zijn via CSS-overrides geforceerd in `src/styles/global.css` met `!important` op `#stcm-modal`, `#stcm-prompt`, `#stcm-icon`, `.stcm-button-primary`, enz. Bij upgrade naar Silktide v2.1+: controleer of die selectors nog kloppen.

### D6 — Branchmodel: main = productie, fase-2 = werkbranch
Vanaf 2026-06-02 (commit `52c448b`) is de Hostinger auto-deploy gekoppeld aan **`origin/main`**. Push naar `main` triggert direct een productie-rebuild en deploy op `assurmanbouw.be`.

Vanaf 2026-06-03 is **`fase-2`** de werkbranch voor doorlopend werk:
1. Werken/committen op `fase-2`
2. Klaar voor productie → `git checkout main && git merge fase-2` (fast-forward) → `git push origin main`
3. Direct terug naar `fase-2` voor volgend werk; bij elke deploy houdt `fase-2` zich up-to-date met main

`feedback-maaike-mei26` is uitgewerkt en gemerged in main, niet langer actief.

**Staging Basic Auth**: gebruiker `Maaike`, wachtwoord `klopklop`. Hash apache MD5 (`$apr1$...`). `.htaccess` + `.htpasswd` staan in `staging-auth/` (gitignored, manueel uploaden naar Hostinger). `.htaccess` verwijst naar absoluut Hostinger-pad `/home/u434701396/domains/onlineprojecten.be/public_html/assurbouw/.htpasswd`.

### D7 — Native formulieren: gedeeld React-island, client-side POST naar GHL webhook
**Vervangt** de twee trage `teammade.ai/widget/form/...`-iframes op `/contact/` en `/maak-afspraak/`.

**Architectuur**:
- Eén gedeeld island: `src/components/islands/ContactForm.tsx`. Props: `webhookUrl`, `bron`, `submitLabel`.
- Geladen met `client:load` (mount-tijd nodig voor time-trap timer).
- Site blijft **`output: 'static'`** — geen `@astrojs/node` adapter, geen `src/pages/api/` route. Submit is een client-side `fetch()` rechtstreeks naar de GHL inbound webhook (consent met website-naam-en-zaak-eigenaar, dus webhook-URL mag publiek zijn).

**Veldcontract** (vast, niet wijzigen):
```
naam, bedrijf, email, telefoon, bericht, bron, entry_url, submitted_at
```
- Verplicht: `email`, `telefoon`. Optioneel: `naam`, `bedrijf`, `bericht`.
- `bron = "contact"` of `"maak-afspraak"`.
- `entry_url = window.location.href`, `submitted_at = new Date().toISOString()`.

**Anti-spam**:
- Honeypot `<input name="website">` off-screen (`position:absolute; left:-9999px`), `tabindex="-1"`, `autoComplete="off"`. Ingevuld → silent success, geen `fetch()`.
- Time-trap: `mountTimeRef = Date.now()` bij mount; submit binnen 2000 ms → silent success.

**Webhook-URLs** (GHL inbound):
- Contact: `https://services.leadconnectorhq.com/hooks/CZvuwnma5HR0BBq9wPYn/webhook-trigger/7269ae5d-13af-437c-8154-bf653d8bf2d3`
- Maak-afspraak: `https://services.leadconnectorhq.com/hooks/CZvuwnma5HR0BBq9wPYn/webhook-trigger/dfd7731f-b337-4508-b74a-16950ff5d558`

**UI/UX**:
- Bedankt-state vervangt het formulier op dezelfde pagina (geen redirect).
- Error-state toont mailto-fallback naar `info@assurman.be`, formulier blijft ingevuld.
- Styling: witte card met gold-light (`#E9C466`) border, donkergrijze (`#C7CACF`) input-borders, 16px labels, gold (`#E5A524`) Verstuur-knop met navy tekst.
- Layout via Tailwind utilities (`grid grid-cols-1 md:grid-cols-2 gap-4`) — config heeft brand-kleuren als `navy`/`gold`/`slate`/`gold-light` tokens beschikbaar.
- Brand voice: je/jij/jouw in alle labels, placeholders, knoptekst, bedankt- en foutmeldingen. Geen em-dashes.

**Niet doen** (zelfde voorgaande beslissingen):
- Geen `<style>` JSX-tag binnen het island (hydration error in Astro + React 18).
- Inline styles via `style={{...}}` object syntax voor brand-kleuren (consistent met andere islands).

Bij wijzigingen aan velden of webhook-URLs: pas dit log bij en update beide pagina's én het island in één commit.

---

## 2026-06-19

### D8 — Docs-herstructurering, content-gids als norm, staging-first vastgelegd

**Content-/stijlgids = single source of truth.** Nieuwe map `docs/content-guide/`
(README, sectorpaginas, verzekeringspaginas, cards, brand-voice, brand-kit,
blog-kenniscentrum) is voortaan de **bindende norm** voor hoe pagina's eruitzien. Norm
afgeleid uit de echte bestanden (`dakwerkers.astro`, `arbeidsongevallen.astro`,
tokens/config), niet uit oudere design-docs. `docs/planning/fase-2-werkplan.md` is een
**levend, niet-bindend** werkdocument. CLAUDE.md verwijst per sectie door naar de gids
maar blijft de beknopte governance.

**Vastgelegde norm-keuzes (waren in tegenspraak met CLAUDE.md, nu rechtgezet in §5):**
- Body-tekst op lichte secties = **navy `#001F3F`** (inkt, nooit als vlak). Slate
  `#3F5767` = enige secundaire/muted tint; `#64748b` is een afwijking die niet verder
  verspreid mag worden.
- Body-font-split: sector-/verzekeringspagina's gebruiken **Outfit** als body;
  blog-prose houdt **Open Sans**. UI (knoppen/labels) = Open Sans.
- Nieuw token **`sand` (`#F7F4EF`)** toegevoegd aan `tailwind.config.mjs` + `tokens.css`,
  toegelaten als sectie-achtergrond. Bestaand hardcoded gebruik niet aangeraakt.

**Domein-bug gefixt.** Structured data (JSON-LD) en RSS gebruikten `www.assurman.be`
terwijl de site op `assurmanbouw.be` staat. Gecentraliseerd in `src/data/site.ts`
(`SITE_URL`), geïmporteerd in `rss.xml.js`, `gids/[pillar]/[spoke].astro`,
`gids/[pillar]/index.astro`, `gids/index.astro`, `auteur/[slug].astro`. `info@assurman.be`
(mailadres) ongemoeid.

**STAGING-FIRST expliciet gemaakt.** De live site `assurmanbouw.be` (`main`) is bevroren.
Alle fase 2-werk gebeurt op `fase-2` en wordt getoond op `assurbouw.onlineprojecten.be`
voor review/goedkeuring; pas daarna naar productie. Nooit rechtstreeks naar `main`
zonder goedkeuring. Vastgelegd als harde regel bovenaan CLAUDE.md + in §9 (verfijnt D6).

**Root-opkuis.** Verwijderd: `astro-build.zip` (build-artefact), `homepage.html` (stale
render), dubbele root-`assurman-logo-cropped.svg` (de geserveerde staat in `public/`).
Verplaatst: `POST-LAUNCH-TODO.md` → `docs/planning/`, Bolt-migratiegids → `docs/archive/`
(historisch, migratie afgerond), `Assurman-brandkit.png` → `docs/reference/`,
`FEEDBACK-CONTEXT*.md` → `docs/archive/`. Tooling-scripts → `scripts/`, output → `reports/`
(gitignored). Root houdt enkel config + `CLAUDE.md` + `DECISIONS-LOG.md`.

## 2026-06-20

### D9 — Verzekeringen: centrale databron + categorie-indeling

Alle **18 verzekeringen** leven in één bron: `src/data/verzekeringen.ts` (zelfde patroon
als `cta-labels.ts`/`partners.ts`). De archiefpagina `/verzekeringen`, het mega-menu en
alle "gerelateerde verzekeringen"-carousels (7 verzekerings- + 6 sectorpagina's) putten
daaruit via `verzekeringenPerCategorie()` / `kaartenVoor()` / `naarKaart()`. **0** hardcoded
verzekeringslijsten meer. Indeling = **4 categorieën** (werkindeling optie B; klant-keuze
A/B/C nog open): `aansprakelijkheid`, `spullen-en-werk`, `jij-en-je-mensen`,
`pensioen-en-fiscaal`. URL's blijven **plat** `/verzekeringen/{slug}/` (categorie leeft in
data + menu, niet in het pad). Beslist: BA Uitbating uitgesteld (buiten de 18, skeleton
blijft ongebruikt); omzet/overlijden buiten de databron; VAPZ/POZ/IPT als 3 aparte
pagina's. Skeleton-copy is voorlopig (`// TODO`); badges op het archief vervielen (geen
databron-veld). **Bron van waarheid + changelog: `docs/ARCHITECTUUR-INDELING-VERZEKERINGEN.md`**
(levend document, bijwerken bij elke architectuurwijziging).

## 2026-06-23

### D10 — Centrale header-offset + gestandaardiseerde hero-afbeelding

Aanleiding: na de utility-topbar werd de gedeelde header hoger; daardoor kwamen latente
problemen boven (hero's begonnen achter de fixed header, breadcrumbs verdwenen op
gids-/auteurpagina's, schuine home-foto piepte uit bij het shrinken). Oorzaak: er werd
**nergens centraal** ruimte gereserveerd voor de fixed header; elke pagina loste het
lokaal op met een eigen `padding-top` (110/120/140/180px). Gekozen route: **B — header
blijft fixed, echte hoogte als CSS-variabele, één keer toegepast op `<main>`**.

**Variabelen (`src/styles/tokens.css`):**
- `--topbar-h: 34px` (utility-topbar; **0 op ≤900px** via media-query — topbar is daar verborgen)
- `--nav-h: 100px` — hoofdnav expanded (logo 80 + 2×10 padding)
- `--nav-h-shrunk: 68px` — hoofdnav shrunk (logo 56 + 2×6 padding)
- `--header-clear: calc(var(--topbar-h) + var(--nav-h))` → **134px desktop / 100px mobiel**
- `--hero-gap: 40px` — uniforme lucht header→eyebrow op de overige pagina-types

> **`--nav-h` en `--nav-h-shrunk` zijn GEMETEN constanten**, niet uit CSS af te leiden:
> ze spiegelen de inline logohoogte + padding in `Navigation.tsx`. Wijzigt iemand de
> logohoogte of nav-padding daar, dan **moeten deze twee waarden mee**. Staat als comment
> in tokens.css.

**Toepassing (`src/styles/global.css`):**
- `main { padding-top: var(--header-clear); }` — centrale reserve, geen per-pagina magic numbers meer.
- `html { scroll-padding-top: calc(var(--nav-h-shrunk) + 16px); }` (=84px) — in-page ankers (`#id`) landen onder de header.
- `header.site-header { top: var(--util-offset, var(--topbar-h)); }` — fallback nu via de variabele.
- Alle lokale hero-`padding-top` (110/120/140/180) verwijderd; hero-lucht loopt via `--hero-gap`, breadcrumb-strips op 16px.
- `StickyNav.tsx`: `top:72` → `var(--nav-h-shrunk)`, scroll-offset afgeleid i.p.v. `-80` (dode code, hygiëne).

**Hero-afbeelding gestandaardiseerd (sector- én verzekeringspagina's).** Probleem: de
afbeelding groeide mee met de content (sector `height:90%` van sectie; verzekering
`height:85vh` was al beter maar `arbeidsongevallen` week af met `85%`). Plus: de combinatie
`height + max-width:48%` vervormde de maskervorm op vierkante/staande schermen.

Eén formule op **alle 19 sector- en 18 verzekering-hero-afbeeldingen**:
```css
top: 0; right: -5px;
height: min(85vh, calc(48vw * 709 / 594));   /* 85vh, nooit breder dan 48vw */
width: auto;                                  /* volgt uit aspect-ratio 594/709 */
```
- Beeldgrootte hangt aan het **scherm**, niet aan de content → op een gegeven viewport is élke pagina identiek (geverifieerd: sector = verzekering, aspect altijd 0.838 op 1280×760, 1440×900, 1920×1080, 1280×1024).
- De losse `max-width:48%` verviel; de breedte-cap zit nu in de hoogte-`min()`, zodat de maskervorm **nooit** vervormt (ook niet op grote/vierkante schermen).
- Sector-hero's: tekst-linkerkolom `padding-top: 100px`, afbeelding flush `top:0`, sectie `min-height: 480px → 100vh` (zoals verzekeringen, nodig zodat het 85vh-beeld niet wordt afgesneden). Verzekering-hero's: tekst `padding:100px 32px 80px`, afbeelding flush `top:0`.

**Nog te doen (kleine design-ronde):** home + overzichtspagina's (`--left`-masker) staan
nog op het oude model; die trekken we later gelijk. Mobiel (`display:none` ≤1023px op de
hero-foto) ongemoeid.
