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
