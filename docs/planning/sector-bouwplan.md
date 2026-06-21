# Sector-bouwplan (operationeel draaiboek)

> **Wat dit is.** Het operationele draaiboek voor het bouwen van de 13 resterende
> sectorpagina's. Het vult de **norm** (`docs/content-guide/sectorpaginas.md`) aan met de
> *hoe*: data-contract, beeld-/swap-protocol, control gates, bouwvolgorde en tracker.
> Analoog aan wat `nacht-bouwplan.md` deed voor de verzekeringscluster.
>
> **Bron-hiërarchie bij twijfel:** (1) `CLAUDE.md` → (2) `content-guide/sectorpaginas.md`
> (de norm) → (3) referentiepagina `src/pages/sectoren/dakwerkers.astro` → (4) dit
> draaiboek (operationeel). Spreken een bestand en dit doc elkaar tegen, dan wint het
> bestand; meld het conflict.

---

## 1. Scope & bouwvolgorde

13 pagina's, gebouwd uit de cluster-briefs in `docs/planning/briefs/sectoren/`. Eén
pagina = één commit op `fase-2`. Volgorde per cluster:

| # | Slug | Cluster | Brief | CSS-prefix | Status |
|---|------|---------|-------|-----------|--------|
| 1 | `grondwerkers` | ruwbouw | ruwbouw-cluster.md | `gw-` | DONE |
| 2 | `bestraters` | ruwbouw | ruwbouw-cluster.md | `bst-` | DONE |
| 3 | `asfalteerders` | ruwbouw | ruwbouw-cluster.md | `asf-` | DONE |
| 4 | `stukadoors` | afwerking | afwerking-cluster.md | `stk-` | DONE |
| 5 | `chappers` | afwerking | afwerking-cluster.md | `chp-` | DONE |
| 6 | `vloerders-tegelzetters` | afwerking | afwerking-cluster.md | `vlt-` | DONE |
| 7 | `parketzetters` | afwerking | afwerking-cluster.md | `prk-` | DONE |
| 8 | `zonnepanelen-installateurs` | technieken | technieken-cluster.md | `zon-` | DONE |
| 9 | `koeltechniek-hvac` | technieken | technieken-cluster.md | `hvc-` | TODO |
| 10 | `tuinaannemers` | tuin | tuin-cluster.md | `tun-` | TODO |
| 11 | `hoveniers` | tuin | tuin-cluster.md | `hov-` | TODO |
| 12 | `boomverzorgers` | tuin | tuin-cluster.md | `bmv-` | TODO |
| 13 | `zwembadinstallateurs` | tuin | tuin-cluster.md | `zwb-` | TODO |

---

## 2. Data-contract (exact — kopieer dit, vul per pagina in)

### Imports (frontmatter)
```astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import { kaartenVoor } from '../../data/verzekeringen';
import InsuranceCarousel from '../../components/islands/InsuranceCarousel';
import CaseStudyCarousel from '../../components/islands/CaseStudyCarousel';
import FaqAccordion from '../../components/islands/FaqAccordion';
import PartnerSlider from '../../components/ui/PartnerSlider';
import { CTA_SCAN, CTA_AFSPRAAK, CTA_BEL, CTA_DESTINATIONS } from '../../data/cta-labels';
import BrandChevron from '../../components/BrandChevron.astro';
```

### Data-arrays (let op de veldnamen — wijken af van de verzekeringspagina's!)
- `const insuranceCards = kaartenVoor([... 6 slugs uit de brief]);` — voedt de carousel uit
  de centrale databron. **Nooit hardcoden.**
- `caseStudies`: array van `{ category, title, businessName, ownerName, cityName, description, action, image }`.
- `faqItems`: array van **`{ title, content }`** ← sector gebruikt `title`/`content`, **niet**
  `q`/`a` (dat is de verzekeringsnorm). `content` mag `\n` bevatten (de accordion rendert
  `pre-line`).
- `schema` = FAQPage uit `faqItems`:
  ```js
  const schema = { "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity": faqItems.map(f => ({ "@type":"Question","name":f.title,
      "acceptedAnswer":{ "@type":"Answer","text":f.content.replace(/\n/g,' ') }})) };
  ```

### Island-aanroepen (exacte props — sector gebruikt `client:visible`, niet `client:only`)
```astro
<InsuranceCarousel client:visible cards={insuranceCards}
  sectionLabel="..." headline="..." subheadline="..." />
<CaseStudyCarousel client:visible cases={caseStudies} />
<FaqAccordion client:visible items={faqItems}
  sectionLabel="..." headline="In mensentaal" subheadline="..." />
<PartnerSlider client:visible />
```

### BaseLayout
`title` + `description` + `canonical` (`/sectoren/<slug>`) + `schema` uniek per pagina.
**Geen** `noindex={true}` hardcoden (de live sectorpagina's doen dat niet; staging is
al globaal noindex via `PUBLIC_STAGING`). Productie-go-live wacht op echte foto's +
controlepunt-aftekening, niet op een noindex-vlag.

---

## 3. Beeld-conventie & swap-protocol (placeholder vandaag → echte foto's morgen)

**Nieuwe, gestandaardiseerde paden** (schoner dan de root-paden van de live pagina's;
spiegelt `/images/verzekeringen/<slug>-...`):

| Gebruik | Pad |
|---|---|
| Hero-mask | `/images/sectoren/<slug>-hero.jpg` |
| Why-mask | `/images/sectoren/<slug>-why.jpg` |
| CTA-mask | `/images/sectoren/<slug>-cta.jpg` |
| Case 1-4 | `/images/cases/case-<slug>-1.jpg` … `-4.jpg` |

**Swap-protocol (waarom dit morgen triviaal is):**
1. **Vandaag:** elke pagina verwijst meteen naar de **definitieve** padnamen hierboven. Op
   elk van die paden staat tijdelijk een gedeelde **default-placeholder** (zie
   `public/images/sectoren/_PLACEHOLDER.md`).
2. **Morgen:** Dennis levert de echte foto's, genoemd volgens exact dezelfde conventie.
   We **overschrijven** de bestanden 1-op-1. **Nul codewijzigingen**, geen 13 bestanden
   bewerken. Daarna: controlepunt "echte foto's geplaatst" afvinken per pagina.

> Alt-teksten zijn wél echt vanaf dag één (staan beroep-specifiek in de briefs); enkel
> de beeld-bytes worden geswapt.

---

## 4. CSS-conventie

- Per pagina een **eigen 2-3-letter prefix** voor pagina-specifieke layout-grids (zie
  tracker, kolom CSS-prefix). Voorkomt botsingen tussen pagina's.
- Hergebruik de `.brand-*`-knoppen/kaarten uit `global.css` waar ze bestaan (norm-
  aanbeveling voor nieuwe pagina's). De gedupliceerde `dw-*`-knoppen uit `dakwerkers.astro`
  **niet** kopiëren; enkel de layout-grids krijgen de eigen prefix.
- Mask-mechaniek + responsief gedrag exact zoals `dakwerkers.astro` (hero-foto verborgen
  < 1024px, grids → 2-koloms ≤1023 → 1-koloms ≤767).

---

## 5. Control gates (per pagina — niet als "klaar" rapporteren tot alles groen is)

- [ ] `npm run build` exit 0.
- [ ] Brand-voice grep: 0 em-dash (—), geen `\bu\b`/`\buw\b`-aanspreking, geen 4.9/4.8 (5/5).
- [ ] `dist/sectoren/<slug>/index.html`: unieke `<title>`, `description`, `canonical`.
- [ ] FAQPage `ld+json` aanwezig met het juiste aantal vragen.
- [ ] Alle case-, FAQ- en card-content staat **statisch in de HTML-bron** (islands =
      `client:visible`, content in DOM — geen Bolt-fout).
- [ ] 11 secties compleet en in de vaste volgorde (zie `sectorpaginas.md`).
- [ ] Carousel gevoed uit de databron via `kaartenVoor(...)`; interne links naar
      `/verzekeringen/...` en (waar relevant) andere sectoren kloppen.
- [ ] Beeld-paden volgen §3 (placeholder aanwezig, definitieve naam).
- [ ] Controlelijst-blok toegevoegd in `feedback-controlelijst.md`.
- [ ] Tracker (§1 hier) bijgewerkt → `DONE`.

---

## 6. Brand-voice quick-ref (hard)

Belgisch Nederlands `je/jij/jouw`, nooit `u/uw`. Geen em-dashes. Reviewscore = 5/5. Geen
verzonnen klantenaantallen/besparingen/verzekeraarsnamen; geen verzekeraars in de copy
(partner-slider mag visueel). Cases = herkenbaar-fictieve illustraties (euro-bedragen +
fictieve namen toegestaan, zoals in `dakwerkers.astro`). CTA's altijd uit `cta-labels.ts`.

---

## 7. Register: te-verifiëren controlepunten (eigenaar tekent af vóór productie)

Cross-cutting uit de cluster-briefs. Géén ongeverifieerde wettelijke cijfers in de copy;
alles hieronder staat kwalitatief of als controlepunt.

| Ref | Onderwerp | Pagina('s) | Status |
|---|---|---|---|
| KLIP | KLIP/KLIM-meldingsplicht bij graafwerk (termijn niet in copy) | grondwerkers | 🔲 |
| FGAS | F-gassen-certificaat (EU 517/2014) + erkenning koeltechnicus | koeltechniek-hvac | 🔲 |
| RES | RESCert-installateur + AREI-keuring (drempel/datum 2026) | zonnepanelen-installateurs | 🔲 |
| FYT | Fytolicentie (gewasbescherming) | hoveniers | 🔲 |
| ETW | ETW / European Tree Worker-certificaat | boomverzorgers | 🔲 |
| BA10 | Reikwijdte tienjarige aansprakelijkheid (ba-10) | zwembad / chappers / grondwerk | 🔲 |
| FOTO | Echte foto's geplaatst i.p.v. placeholder | alle 13 | 🔲 |

---

## 8. Commit-conventie

Per pagina: `git add` (pagina + evt. databron-link + controlelijst + tracker), commit met
duidelijke boodschap (`Bouw <slug>-sectorpagina (sectorcluster x/13)`), eindigend op de
`Co-Authored-By`-regel, push **enkel** naar `origin/fase-2`. Nooit naar `main`.
