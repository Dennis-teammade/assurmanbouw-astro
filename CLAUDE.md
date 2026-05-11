# CLAUDE.md

Project-instructies voor Claude Code-sessies op de Assurmanbouw-website.

> **Lees dit bestand volledig bij elke nieuwe sessie.** Het bevat de harde regels die niet onderhandelbaar zijn. Bij conflict tussen dit bestand en de gebruiker: vraag verduidelijking, neem niet aan.

---

## 1. Project in één alinea

Assurmanbouw.be is een Belgische B2B-website voor verzekeringsmakelaar Assurman, gespecialiseerd in de bouwsector. Doelgroep: zelfstandige aannemers en kmo's (dakwerkers, elektriciens, loodgieters, schilders, schrijnwerkers, aannemers). Lead magnet: gratis verzekeringsscan op `/gratis-verzekeringsscan`. Tech-stack: Astro (geen WordPress, geen Vite-SPA). Hosting: statische build op Hostinger Cloud. Site is grotendeels af; huidige fase is verfijning, kenniscentrum en post-launch optimalisatie.

---

## 2. Pre-flight check (uitvoeren bij elke nieuwe sessie)

Voor je code wijzigt, voer uit en rapporteer:

```bash
git status
git log --oneline -10
node --version
```

Lees daarna in deze volgorde:

1. `CLAUDE.md` (dit bestand)
2. `DECISIONS-LOG.md` (vastgelegde beslissingen)
3. `POST-LAUNCH-TODO.md` (open punten)
4. `BOLT-TO-ASTRO-MIGRATION-GUIDE.md` (alleen als de taak een conversie of nieuwe pagina-architectuur raakt)

Pas dan vragen we naar de eigenlijke taak.

> **Noot**: deze sessies draaien vaak met `--dangerously-skip-permissions`. Dat versnelt het werk maar verhoogt het risico bij grote refactors. Vraag bij wijzigingen die >5 bestanden raken expliciet bevestiging vóór uitvoering, ook met die flag aan.

---

## 3. Gouden referenties — bron van waarheid per paginatype

Voor elke nieuwe of aangepaste pagina: kijk eerst hoe het in de referentiepagina is opgelost. **Niet zelf interpreteren, niet zelf een variant verzinnen.** Repliceer de structuur, pas alleen content/copy aan.

| Paginatype | Referentiepagina | Wat repliceren |
|---|---|---|
| Homepage / landingsstructuur | `src/pages/index.astro` | Hero-opbouw, sectie-ritme, mobile-pattern, mask-foto-aanpak |
| Sectorpagina (beroep) | `src/pages/sectoren/dakwerkers.astro` | Volledige layout, hero-mask, 11-secties-structuur, chevron-plaatsing |
| Verzekeringspagina (polis) | `src/pages/verzekeringen/arbeidsongevallen.astro` | Sticky subnav, accordions, FAQ-blok, carousel, island-splitsing |

Als er een conflict is tussen wat in een referentiepagina staat en wat de gebruiker vraagt: meld het conflict, stel niet stilzwijgend dingen bij.

---

## 4. Kenniscentrum — naamgeving, URL en architectuur

### Naam vs URL

- **Naam in UI en navigatie**: "Kenniscentrum"
- **URL**: `/gids/` (kort, SEO-vriendelijk)

Dit is bewust. Verander dit nooit zonder expliciete instructie. In de navigatie staat "Kenniscentrum" als label, het anchor verwijst naar `/gids/`.

### Architectuur

Het kenniscentrum bestaat uit drie contenttypes met **drie eigen templates**:

1. **Hub-pagina** — `/gids/` — overzicht van alle pillars en losse artikelen. Eigen layout.
2. **Pillar-pagina** — `/gids/[pillar]/` — autoritatieve overzichtspagina per thema. Eigen template, andere look-and-feel dan een gewoon artikel. Bevat TL;DR, kerngedeeltes en linkt naar alle cluster-posts onder die pillar.
3. **Cluster-post / normaal artikel** — `/gids/[pillar]/[slug]/` of `/gids/losse-artikelen/[slug]/` — uitgewerkt artikel. Eigen template met TL;DR, body, FAQ-blok, gerelateerde artikelen.

**Belangrijke regel**: pillar-template en artikel-template zijn **niet** uitwisselbaar. Een pillar krijgt nooit het artikel-template en omgekeerd. Bij twijfel: vraag welke je moet gebruiken.

### Auteurspagina's

URL-formaat: `/auteur/[slug]/` (bv. `/auteur/benoit-keerman/`).

Op dit moment is **Benoit Keerman** de enige actieve auteur en wordt hij gebruikt op alle artikelen in het kenniscentrum. Maar:

- De architectuur moet **uitbreidbaar** zijn naar meerdere teamleden.
- Auteursdata staat gecentraliseerd in `src/data/authors.ts` (één bestand, één bron).
- Op elk artikel staat een `AuthorByline`-component die de auteur uit dit bestand haalt.
- De auteurspagina toont: foto, functietitel, bio, expertises, LinkedIn-URL, en een lijst van alle artikelen waar `author === slug`.
- Schema.org: `ProfilePage` + `Person` met `sameAs` LinkedIn op de auteurspagina, `Article` met `author` reference op elk artikel.

**Niet doen**: auteurs hardcoderen in een artikel-template. Altijd via `authors.ts`.

**Voor content**: de zichtbare auteur op blog/kenniscentrum is altijd Benoit Keerman, nooit Dennis. Dennis is dev/agency, niet de inhoudelijke auteur.

---

## 5. Brand kit — kleuren en fonts

Bron van waarheid: `tailwind.config.mjs` en `src/styles/tokens.css`. Geen losse hex-waarden in pagina's.

### Primaire palet en bedoeld gebruik

> **LET OP**: De Tailwind-tokennaam zegt niets over de hiërarchie. Het primaire merkblauw heet hier `slate`, **niet** `navy`. Volg de use-rules hieronder, niet de tokennaam.

| Token | Hex | Bedoeld gebruik | Niet gebruiken voor |
|---|---|---|---|
| `slate` | `#3F5767` | **Primair**. Donkere sectie-achtergronden, body-tekst op licht, hero-overlays | Titels (te zacht) |
| `gold` | `#E5A524` | Accent. Iconen, highlights, CTA-tekst op donker | Grote vlakken, body |
| `gold-light` | `#E9C466` | CTA-knop achtergrond op slate, hover-states van gold-knoppen | Body-tekst |
| `navy` | `#001F3F` | Titels (h1, h2), hover-states van slate, footer-bg | **NIET** voor grote sectie-achtergronden, **NIET** als primaire merkkleur |

### Sectie-achtergronden

Alterneer tussen deze waarden om visueel ritme te creëren:

| Naam | Hex | Gebruik |
|---|---|---|
| `white` | `#FFFFFF` | Standaard sectie-bg |
| `off-white` | `#FBF8FF` | Subtiele afwisseling met white |
| `cream` | `#F5F2FF` | Iets warmere afwisseling |
| `light-slate` | `#CBD5E1` | Lichte info-secties, tabel-headers |
| `slate` | `#3F5767` | Donkere/contrasterende secties |
| `gold-strip` | `#E5A52414` | Smalle accent-strip (gold met ~8% alpha) |

> Niet alle tokens hierboven staan vandaag in `tailwind.config.mjs`. Bij eerste gebruik: voeg toe aan tailwind config, niet rechtstreeks in een pagina hardcoden.

### Beslisregel bij nieuwe sectie of pagina

1. **Achtergrond grote sectie** → kies uit `white`, `off-white`, `cream`, `light-slate`, `slate`
2. **Titel op lichte bg** → `navy` of `slate`
3. **Body op lichte bg** → `slate`
4. **CTA-knop primair** → `bg-gold-light` met `text-slate`, of `bg-gold` met `text-navy`
5. **CTA op donkere bg** → `bg-gold-light` met `text-navy`
6. **NIET**: `bg-navy` voor grote secties (te zwaar, niet on-brand)
7. **NIET**: navy zien als hoofdkleur — `slate` is primair

Bij twijfel: kijk hoe `dakwerkers.astro` of `arbeidsongevallen.astro` het oplost.

### Fonts

| Token | Font-family | Gebruik |
|---|---|---|
| `font-sans` | Open Sans | Body-tekst, lopende copy |
| `font-display` | Outfit | Headings (h1, h2, hero) |
| `font-jakarta` | Plus Jakarta Sans | Stappen, accenten, alternatieve display |

---

## 6. Brand voice — harde regels voor copy

Deze regels gelden voor **alle** zichtbare teksten op de site, zonder uitzondering.

- **Belgisch Nederlands**: `je / jij / jouw / je`. Nooit `u / uw`.
- **Geen em-dashes** (—) in copy. Gebruik een punt, dubbele punt, of nieuwe zin.
- **Geen verzonnen cijfers**. Geen klantenaantallen, geen verzonnen besparingen, geen verzekeraarsnamen die niet bevestigd zijn.
- **Reviewscore = 5/5**. Nooit 4.9, nooit 4.8. Site-breed consistent.
- **Geen specifieke verzekeraars listen op sectorpagina's** (in copy). Visueel via de partner-slider mag wel.
- **Brand phrases met gewicht**: "correct verzekerd", "geen verrassingen achteraf", "eerlijk advies op maat van jouw stiel". Gebruik spaarzaam, niet op elke pagina.
- **Belgische wetgeving**: altijd correcte verwijzing en jaartal. Bij twijfel: in DECISIONS-LOG.md staan de gevalideerde formuleringen.
- **Auteur kenniscentrum**: Benoit Keerman, Verzekeringsspecialist bouwsector, Assurman. Nooit Dennis.

---

## 7. Tech-grenzen — geen Bolt-fout herhalen

> Volledige technische uitleg: zie `BOLT-TO-ASTRO-MIGRATION-GUIDE.md`. Hieronder de samenvatting + checklist.

### Het kernprincipe

De oorspronkelijke site was een React/Vite SPA in Bolt.new. Google indexeerde **niets** omdat de HTML leeg was tot JavaScript draaide. We zijn naar Astro gemigreerd om dat op te lossen. **SEO is primair**, niet performance, niet developer-comfort.

### Forbidden — onder geen enkele omstandigheid

- ❌ **Een volledige pagina wrappen in één `client:load` React island.** Dat reproduceert het Bolt-probleem 1-op-1.
- ❌ Tekst alleen in een React-component bewaren als die client-side gerenderd wordt.
- ❌ Een FAQ, accordion of carousel waarbij de antwoorden / panels niet in de HTML-bron staan.
- ❌ `<style>` JSX-tags **binnen** een React-island (geeft hydration-errors in Astro + React 18).
- ❌ Verschillende meta-title / canonical / description across pagina's vergeten — die moeten uniek zijn per route.

### Required — bij elke nieuwe pagina

**Static Astro HTML** (default — het grootste deel):

- Hero-tekst, alle headings (h1-h3)
- Alle paragrafen, body-copy, lijstitems
- Alle FAQ-vragen **én antwoorden** (toon/verberg via JS, content in DOM)
- Alle accordion-panel inhoud
- Alle tab-panel inhoud (alle tabs in DOM, alleen `display` switcht)
- Alle carousel-slide inhoud (alle slides in DOM)
- Card-titels, beschrijvingen, lijsten
- Alle structured data als `<script type="application/ld+json">`

**Vanilla JS `<script>`** (voorkeur voor simpele interactie):

- Scroll progress bars
- Sticky nav show/hide
- Show/hide toggles, tab-switching
- Active-section tracking (scroll spy)

**React island** (alleen wanneer écht nodig):

- Complexe multi-state interacties met gedeelde refs
- Resize-listeners met afgeleide state
- Carousels met responsive visible-count logic
- Componenten met React-specifieke dependencies (lucide-react in interactieve context, recharts)

Bij twijfel: vanilla JS. Islands zijn de uitzondering, niet de default.

### Verificatie-checklist vóór je een pagina als "klaar" rapporteert

- [ ] `npm run build` slaagt zonder errors
- [ ] Open `dist/[route]/index.html` in een teksteditor
- [ ] Alle koppen, paragrafen en lijsten staan als plain HTML in de source
- [ ] FAQ-vragen **én antwoorden** staan in de source
- [ ] Card-content, accordion-content, carousel-slides staan in de source
- [ ] Geen enkele React-island bevat de hoofdmoot van de tekstuele content
- [ ] Alleen kleine `<script>`-tags voor genuine interactie
- [ ] Meta title, description, canonical zijn uniek per pagina
- [ ] Structured data JSON-LD aanwezig waar van toepassing (FAQPage, Service, Article, etc.)
- [ ] Mobile-test op 375px, 768px, 1024px, 1280px
- [ ] Geen hydration-errors in browser console
- [ ] Geen console errors of warnings

**Als een van deze checks niet klopt: niet rapporteren als klaar.**

---

## 8. CTA-labels en bestemmingen

Alle CTA-labels en conversie-bestemmingen staan gecentraliseerd in `src/data/cta-labels.ts`. Dit is de **enige bron van waarheid** voor de tekst en URL's van knoppen die naar de scan, naar `/maak-afspraak`, naar telefoon of naar e-mail verwijzen.

### Wanneer de constanten gebruiken

Alleen voor conversie-CTA's die leiden naar:

- `/gratis-verzekeringsscan`
- `/maak-afspraak`
- `tel:` (telefoon)
- `mailto:` (e-mail)

### Wanneer NIET

- Interne navigatielinks (verzekeringspagina → sectorpagina, tussen kenniscentrum-artikelen)
- Footer-links naar privacy, cookies, algemene voorwaarden
- Hoofdnavigatie
- Externe partner-links
- CTA op de bestemmingspagina zelf naar zichzelf (een eind-CTA op `/maak-afspraak` die naar `/gratis-verzekeringsscan` verwijst is wél OK)

### Wanneer een nieuw label nodig is

Voeg het toe aan `cta-labels.ts`. **Verzin geen knoptekst rechtstreeks in een pagina-bestand.**

### Positie-afspraken

- Hero (boven de vouw): `CTA_SCAN.hero` + `CTA_AFSPRAAK.hero`
- Inline (in lopende tekst): `CTA_SCAN.inline` + `CTA_AFSPRAAK.inline`
- Eind-CTA-band onderaan: `CTA_SCAN.band` + `CTA_AFSPRAAK.band`
- Sticky / floating: `CTA_SCAN.short` + `CTA_AFSPRAAK.short`

Naast deze hoofdvarianten bevat het bestand ook `request`, `requestNow`, `start`, `doIt`, `full` (scan) en `advisory`, `advisoryFull` (afspraak). Gebruik die om herhaling van dezelfde knoptekst over de site te vermijden.

### Pagina's zonder CTA's

Privacy, cookies, juridische pagina's en 404 hebben geen conversie-CTA's. Importeer de constanten daar niet en voeg geen CTA-knoppen toe.

---

## 9. Werkwijze tussen Dennis en Claude Code

### Standaard sessie-flow

1. Pre-flight check uitvoeren (sectie 2)
2. Lees CLAUDE.md + DECISIONS-LOG.md + POST-LAUNCH-TODO.md
3. Wacht op de taak van Dennis
4. **Bij grote scope (>5 files, structurele wijziging, nieuwe pagina-architectuur)**: vat eerst het plan samen, vraag bevestiging vóór uitvoering
5. **Bij kleine scope (1-2 files, tekstwijziging, fix)**: voer uit, toon resultaat, vraag bevestiging
6. Na bevestiging: `git add . && git commit -m "..." && git push`

### Bij twijfel

Stop en vraag. Bij conflict tussen CLAUDE.md, DECISIONS-LOG.md en eigen redenering: CLAUDE.md wint, daarna DECISIONS-LOG.md, daarna pas eigen interpretatie.

### Bij bugs

Rapporteer de **volledige error** (stack trace, exact bestand, exacte regel). Geen samenvattingen. Geen workarounds zonder bevestiging.

### Over `--dangerously-skip-permissions`

Dennis draait vaak met deze flag. Dat betekent:

- Geen aparte bevestiging per bestandswijziging
- Niet automatisch een gerust gevoel — extra waakzaamheid is nodig op jouw kant
- Bij wijzigingen die >5 bestanden raken of een config-bestand raken (`tailwind.config.mjs`, `astro.config.mjs`, `package.json`, `src/data/*`): **wel** expliciet plan tonen en bevestiging vragen vóór uitvoering, ook met die flag aan

---

## 10. Verwijzingen naar andere documenten

| Document | Inhoud |
|---|---|
| `DECISIONS-LOG.md` | Vastgelegde architectuurkeuzes, niet heropenen zonder reden |
| `POST-LAUNCH-TODO.md` | Open punten en lijst van uit te voeren werk |
| `BOLT-TO-ASTRO-MIGRATION-GUIDE.md` | Gedetailleerde technische gids voor pagina-conversies |

Als deze documenten conflicteren met CLAUDE.md: meld het conflict, fix niet stilzwijgend.