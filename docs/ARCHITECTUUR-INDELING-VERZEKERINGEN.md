# Architectuur — Indeling & databron verzekeringen (assurmanbouw.be)

> **Status van dit document:** BRON VAN WAARHEID voor de verzekeringen-architectuur.
> Dit is het leidende document voor hoe de 18 verzekeringen worden ingedeeld,
> opgeslagen en uitgevoerd in code. Bij twijfel of conflict met oudere planning,
> wint dit document.
>
> **Onderhoudsinstructie (voor Claude Code):** dit bestand MOET bijgewerkt worden
> zodra er iets aan de architectuur wijzigt: een verzekering erbij/eraf, een
> slug-wijziging, een categorie die verschuift, een naamswijziging van een groep,
> of een gewijzigde technische aanpak. Werk dan ook de regel "Laatst bijgewerkt"
> en de changelog onderaan bij. Laat dit document nooit achterlopen op de code.

---

**Laatst bijgewerkt:** 2026-06-23
**Beheerd door:** Teammade
**Project:** assurmanbouw.be
**Definitieve indeling bevestigd door klant:** ❌ NEE — in afwachting van keuze A/B/C (zie §2)

---

## 1. Doel & principe

Er komen **18 verzekeringen** op de site. Die mogen niet als één lange lijst op
`/verzekeringen` staan (onoverzichtelijk + zwak voor SEO). Ze worden ingedeeld in
**logische groepen**.

Diezelfde groepsindeling voedt **drie plaatsen tegelijk**:

1. De overzichtspagina `/verzekeringen` (gerubriceerde secties).
2. Het menu (mega-menu desktop, accordeon mobiel).
3. De "gerelateerde verzekeringen"-blokken op individuele pagina's.

### Kernprincipe: één centrale databron

Kaarten, menu, archiefpagina én gerelateerde verzekeringen putten ALLEMAAL uit
dezelfde lijst. Daarom: **één bestand `src/data/verzekeringen.ts`** als enige bron.
Zelfde patroon als `cta-labels.ts` en `partners.ts`. Voeg je later een verzekering
toe aan dat bestand, dan verschijnt ze automatisch overal. Nooit verzekeringslijsten
los onderhouden op meerdere plaatsen.

---

## 2. De groepsindeling

### 2.1 Gekozen indeling

**Werkindeling = Optie B** (groeperen naar wat de verzekering beschermt).
De categorie-LABELS kunnen nog licht wijzigen na klantfeedback. Het `categorie`-veld
in de databron is daarom de enige plek waar dit leeft: één aanpassing volstaat.

> ⚠️ Tot de klant A/B/C bevestigt, is dit een werkindeling, geen definitief besluit.
> Bouw niets dat een specifieke indeling hardcodeert buiten het `categorie`-veld om.

| Categorie (interne key) | Label (UI) | Verzekeringen |
|---|---|---|
| `aansprakelijkheid` | Aansprakelijkheid | BA Onderneming, BA-10, ABR, BA Bestuurder, Rechtsbijstand |
| `spullen-en-werk` | Materiaal & je werk | Brand, Machinebreuk, Bedrijfsschade, Vervoerde goederen, Bedrijfsvoertuigen |
| `jij-en-je-mensen` | Jij & je mensen | Arbeidsongevallen, Gewaarborgd inkomen, Bescherming bedrijfsleider |
| `pensioen-en-fiscaal` | Pensioen & fiscaal | Groepsverzekering, Aanvullend pensioen, VAPZ, POZ, IPT |

**Volgorde binnen elke groep:** meest essentieel bovenaan, optioneel onderaan
(geleend van optie C, zonder "verplicht" hard te claimen).

### 2.2 De andere opties (voor de volledigheid)

Deze stonden in het klantdocument als alternatief. Pas dit document aan als de
klant uiteindelijk A of C kiest.

- **Optie A (zoals Maaike voorstelde):** groeperen naar "wat sluit je samen af".
  Op de werf / Gebouw & materieel / Personeel & jezelf beschermen / Pensioen & fiscaal.
- **Optie C (verplicht → keuze):** Wettelijk verplicht of onmisbaar / Sterk aangeraden /
  Voor jezelf & lange termijn.

---

## 3. De 18 verzekeringen + slugs

> ✅ = pagina bestaat en is uitgewerkt. 🔲 = skeleton / nog te bouwen.
> Slugs van bestaande pagina's: **niet wijzigen** zonder redirect-afweging.

| # | Verzekering | Slug | Categorie | Status |
|---|---|---|---|---|
| 1 | BA Onderneming | `/verzekeringen/ba-onderneming` | aansprakelijkheid | ✅ |
| 2 | BA-10 | `/verzekeringen/ba-10` | aansprakelijkheid | ✅ |
| 3 | ABR (Alle Bouwplaats Risico's) | `/verzekeringen/alle-bouwplaats-risicos` | aansprakelijkheid | ✅ |
| 4 | BA Bestuurder | `/verzekeringen/ba-bestuurder` | aansprakelijkheid | 🔲 |
| 5 | Rechtsbijstand | `/verzekeringen/rechtsbijstand` | aansprakelijkheid | ✅ |
| 6 | Brand | `/verzekeringen/brandverzekering` | spullen-en-werk | 🔲 |
| 7 | Machinebreuk | `/verzekeringen/machinebreuk` | spullen-en-werk | ✅ |
| 8 | Bedrijfsschade | `/verzekeringen/bedrijfsschade` | spullen-en-werk | 🔲 |
| 9 | Vervoerde goederen | `/verzekeringen/vervoerde-goederen` | spullen-en-werk | 🔲 |
| 10 | Bedrijfsvoertuigen | `/verzekeringen/bedrijfsvoertuigen` | spullen-en-werk | ✅ |
| 11 | Arbeidsongevallen | `/verzekeringen/arbeidsongevallen` | jij-en-je-mensen | ✅ |
| 12 | Gewaarborgd inkomen | `/verzekeringen/gewaarborgd-inkomen` | jij-en-je-mensen | 🔲 |
| 13 | Bescherming bedrijfsleider | `/verzekeringen/bescherming-bedrijfsleider` | jij-en-je-mensen | 🔲 |
| 14 | Groepsverzekering | `/verzekeringen/groepsverzekering` | pensioen-en-fiscaal | 🔲 |
| 15 | Aanvullend pensioen | `/verzekeringen/aanvullend-pensioen` | pensioen-en-fiscaal | 🔲 |
| 16 | VAPZ | `/verzekeringen/vapz` | pensioen-en-fiscaal | 🔲 |
| 17 | POZ | `/verzekeringen/poz` | pensioen-en-fiscaal | 🔲 |
| 18 | IPT | `/verzekeringen/ipt` | pensioen-en-fiscaal | 🔲 |

> **Slug-noot:** VAPZ/POZ/IPT hebben sinds STAP 3 elk een skeleton-pagina
> (`/verzekeringen/vapz/`, `/poz/`, `/ipt/`, status `skeleton`). De skeletons
> `ba-uitbating`, `omzetverzekering` en
> `overlijdensdekking` bestaan wél als bestand maar staan **buiten** de 18 (zie open punt
> + §2-noot). Bestaande live-slugs ongewijzigd.

### Beslist — BA Onderneming / BA Uitbating

**BA Onderneming en BA Uitbating = ÉÉN item** (blijft op 18). **BA Uitbating wordt
voorlopig NIET opgenomen** (vooral voor handel/horeca, niet de bouwkern). De bestaande
`ba-uitbating`-skeleton blijft als bestand staan maar is **niet** opgenomen in
`verzekeringen.ts` en wordt voorlopig niet gebruikt. Te heropenen als de klant alsnog
een aparte BA Uitbating-pagina wil → dan dit document bijwerken.

### Beslist — omzetverzekering & overlijdensdekking buiten de 18

Niet opgenomen in de databron (de 18 liggen vast). Bevinding bij de inhoudelijke check:

- **Omzetverzekering** is geen zuiver synoniem van Bedrijfsschade. Bedrijfsschade vangt
  stilstand op na **materiële** schade (brand, storm); omzetverzekering vangt de vaste
  kosten van de vennootschap op bij **uitval van de zaakvoerder** (ziekte/ongeval). De
  Codex-contentarchitectuur houdt ze bewust apart. Functioneel leunt ze aan bij
  Bedrijfsschade én Gewaarborgd inkomen; later eventueel als sub-onderdeel daarvan.
- **Overlijdensdekking** is grotendeels een **waarborg/bouwsteen** binnen Bescherming
  bedrijfsleider en de pensioenpolissen (IPT/VAPZ/groepsverzekering), geen losstaand
  product in deze taxonomie. Terecht buiten de 18 als zelfstandige polis.

Beide skeletons blijven als bestand staan, maar buiten de databron.

---

## 4. URL-structuur (vastgelegd, niet wijzigen)

- **Plat houden:** `/verzekeringen/{slug}`.
- **Geen nesting per categorie.** Dus NIET `/verzekeringen/aansprakelijkheid/ba-10`.
- Reden: bestaande pagina's staan al plat (nesting = redirects + herwerk), een polis
  past soms logisch in twee groepen, en platte URL's zijn steviger voor SEO.
- De categorie leeft in de **data + het menu**, niet in het pad.

---

## 5. Databron — `src/data/verzekeringen.ts`

### 5.1 Voorgesteld schema

```ts
export type VerzekeringCategorie =
  | 'aansprakelijkheid'
  | 'spullen-en-werk'
  | 'jij-en-je-mensen'
  | 'pensioen-en-fiscaal';

export interface Verzekering {
  slug: string;              // bv. 'ba-10' (zonder /verzekeringen/-prefix)
  titel: string;             // UI-titel, bv. 'Tienjarige aansprakelijkheid (BA-10)'
  categorie: VerzekeringCategorie;
  korteBeschrijving: string; // 1 zin voor de kaart (kaart-lengte)
  menuOmschrijving: string;  // heel kort (~3 woorden) voor het mega-menu
  bullets: string[];         // 2-4 korte voordelen/dekkingen voor de kaart
  icoon: string;             // icoon-key of SVG-path-referentie
  gerelateerde: string[];    // slugs van gerelateerde verzekeringen
  status: 'live' | 'skeleton';
}

export const CATEGORIE_LABELS: Record<VerzekeringCategorie, string> = {
  'aansprakelijkheid': 'Aansprakelijkheid',
  'spullen-en-werk': 'Materiaal & je werk',
  'jij-en-je-mensen': 'Jij & je mensen',
  'pensioen-en-fiscaal': 'Pensioen & fiscaal',
};

// Categorie-metadata voor het mega-menu (icoon-key + subzin per categorie).
// icoon-key wordt in Navigation.tsx naar lucide-react gemapt.
export const CATEGORIE_META: Record<VerzekeringCategorie, { icoon: string; subzin: string }> = {
  'aansprakelijkheid':   { icoon: 'shield-half',     subzin: 'Als er iets misgaat' },
  'spullen-en-werk':     { icoon: 'tools',           subzin: 'Materieel en gebouw' },
  'jij-en-je-mensen':    { icoon: 'heart-handshake', subzin: 'Inkomen en bescherming' },
  'pensioen-en-fiscaal': { icoon: 'pig-money',       subzin: 'Opbouwen met voordeel' },
};

// Volgorde waarin categorieën getoond worden op archief + menu
export const CATEGORIE_VOLGORDE: VerzekeringCategorie[] = [
  'aansprakelijkheid', 'spullen-en-werk', 'jij-en-je-mensen', 'pensioen-en-fiscaal',
];
```

### 5.2 Consumenten van de databron

Alles hieronder leest uit `verzekeringen.ts`, nooit uit een eigen lokale lijst:

- `/verzekeringen` archiefpagina → rubriceert per `categorie` in `CATEGORIE_VOLGORDE`.
- Mega-menu (desktop) → 4 kolommen = 4 categorieën + "Alle verzekeringen".
- Mobiel menu → accordeon: "Verzekeringen" → 4 categorie-sub-accordeons → polissen.
- "Gerelateerde verzekeringen" op detailpagina's → uit `gerelateerde[]`.
- Sectorpagina-carousels → filteren op relevante slugs uit dezelfde bron.

---

## 6. De kaart-norm (cards)

De kaart die op `/verzekeringen` wordt vastgelegd is **dezelfde** die hergebruikt
wordt op sectorpagina's en in carousels. Leg de kaart hier één keer goed vast,
dan is ze meteen herbruikbaar. Dit is de reden om de archiefpagina vóór de
resterende detailpagina's af te werken: zo kunnen nieuwe verzekeringen meteen
correct in alle lijsten verschijnen.

---

## 7. Aanbevolen uitvoeringsvolgorde

1. **Taxonomie bevestigen** (klant kiest A/B/C; BA-knoop doorhakken). ← blokkeert de rest.
2. **`src/data/verzekeringen.ts` bouwen** (18 polissen + categorie + kaart-velden + relaties).
3. **Archiefpagina + mega-menu erop aansluiten** (consumeren de data; kaart-norm vastleggen).
4. **Detailpagina's golf per golf uitwerken** — elke pagina trekt haar "gerelateerde"
   automatisch uit de data.

> Reden voor deze volgorde: de structured-data (JSON-LD) batch wijst `Service`-schema
> toe aan `/verzekeringen` dat de polissen opsomt. Eerst de indeling vastleggen
> voorkomt dat schema en pagina uit sync raken en je de pagina twee keer moet aanraken.

---

## 8. Wat al gebeurd is (los van de indeling)

- **STAP 3 uitgevoerd — databron geconsumeerd (één bron, nul hardcoded lijsten):**
  - 3 skeleton-pagina's bijgemaakt: `/verzekeringen/vapz/`, `/poz/`, `/ipt/`.
  - Helpers afgemaakt: `verzekeringenPerCategorie()`, `naarKaart()`, plus `kaartenVoor(slugs)`.
  - **Archiefpagina `/verzekeringen`** herbouwd op `verzekeringenPerCategorie()`: 4 gerubriceerde
    secties (categorie-kop + kaarten), alle 18 polissen, iconen via statisch-gerenderde
    lucide-componenten. De badges (Verplicht/Essentieel) zijn vervallen (geen veld in de
    databron) → eventueel later terug via een optioneel `badge`-veld.
  - **Mega-menu** in `Navigation.tsx`: desktop = 4 kolommen (categorieën) + "Alle verzekeringen";
    mobiel = geneste accordeon (Verzekeringen → 4 categorie-sub-accordeons → polissen). De oude
    platte 18-lijst (met omzet/overlijden, zonder VAPZ/POZ/IPT) is vervangen.
  - **13 carousels** omgeschakeld naar `kaartenVoor()`: 7 live verzekeringspagina's + 6
    sectorpagina's. Selectie en volgorde per pagina behouden; copy/iconen komen nu uit de databron.
    Gevolg: 2 kaarttitels zijn langer (BA-10 → "Tienjarige aansprakelijkheid (BA-10)", ABR →
    "Alle Bouwplaatsrisico's (ABR)") en de intro/bullets gebruiken de canonieke databron-copy.
  - Resultaat: **0** hardcoded `insuranceCards`-arrays buiten de databron. Build groen (101 pagina's).
  - Noot scope: op ABR is enkel de gerelateerde-carousel-bron omgeschakeld; geen sectie-/copy-content aangeraakt.

- **STAP 2 uitgevoerd — databron `src/data/verzekeringen.ts` gebouwd:**
  - Alle 18 verzekeringen ingevuld (7 `live` met geverifieerde copy uit de pagina's,
    11 `skeleton` met voorlopige copy, gemarkeerd `// TODO`).
  - Type + interface + `CATEGORIE_LABELS` + `CATEGORIE_VOLGORDE` + helpers
    (`verzekeringUrl` met trailing slash, `getVerzekering`, `verzekeringenPerCategorie`,
    `naarKaart` die de bestaande carousel-kaart afleidt).
  - **3 icon-keys toegevoegd** aan `ICON_MAP` in `InsuranceCarousel.tsx` (met fallback):
    `flame` (brand), `heart` (gewaarborgd inkomen), `piggy-bank` (pensioenpolissen).
  - Databron wordt **nog niet geconsumeerd**; archief/menu/carousels draaien nog op hun
    eigen hardcoded lijsten. Omschakelen = latere stap.

- **ABR-pagina (`alle-bouwplaats-risicos.astro`)** inhoudelijk verbeterd:
  - "In de praktijk"-sectie: 3-kaarten-grid met substantie toegevoegd (naar
    voorbeeld van `ba-onderneming.astro`), de 6 voorbeelden blijven als toggle eronder.
  - FAQ van 14 → 10 vragen; uitleg uit geschrapte vragen verwerkt in de behouden vragen.
  - Build groen, gerenderde HTML geverifieerd. Staat klaar om na te kijken/committen.

---

## Changelog

| Datum | Wijziging | Door |
|---|---|---|
| 2026-06-19 | Document aangemaakt. Werkindeling = optie B vastgelegd. 18 polissen + slugs + schema gedocumenteerd. Taxonomie nog niet klant-bevestigd. BA Onderneming/Uitbating open. | Teammade |
| 2026-06-23 | Homepage verzekeringen-sectie omgebouwd naar **filterbare cards** (`index.astro`): filterbalk met 5 knoppen (Onze selectie · Aansprakelijkheid · Materieel · Mensen · Pensioen) gemapt op de optie-B-categorieën. Alle 18 polissen nu uit de databron (`verzekeringenPerCategorie`), niet langer hardcoded; default "Onze selectie" = 8 curated kaarten + overzichtskaart. Vanilla-JS toggle (geen island), alle kaarten statisch in HTML. Uniform 4-koloms grid; ingekorte home-titels + korte 1-zin home-kaartteksten (home-specifiek, ~2 regels) voor compacte uniforme cards; overzichtskaart altijd als laatste; iconen verbeterd (bouwhelm, auto, vlam). | Claude Code |
| 2026-06-22 | Archiefpagina `/sectoren/` uitgebreid van 6 naar **alle 19 sectorkaarten**, gerubriceerd in de 4 clusters van het sectoren-mega-menu (Ruwbouw & infrastructuur, Afwerking & interieur, Technieken & installatie, Dak, tuin & buitenruimte) met sobere slate-categoriekoppen. Bestaande 6 kaarten ongewijzigd; 13 nieuwe met tags afgeleid uit het polis-pakket en beschrijving uit de hero-intro van elke sectorpagina. Kaart-component/styling onveranderd. Links genormaliseerd naar trailing slash. Kaarten blijven hardcoded in `index.astro` (geen `sectoren.ts`); gedeelde databron archief+mega-menu genoteerd als logische volgende stap. Build 101 pagina's groen. | Claude Code |
| 2026-06-22 | Mega-menu herbouwd: hover-gestuurd mega-menu (desktop) + 2-niveau-accordeon (mobiel) op `Navigation.tsx`. Databron uitgebreid met `menuOmschrijving` (18 polissen) en `CATEGORIE_META` (icoon + subzin). Label `spullen-en-werk` gewijzigd "Je spullen & je werk" → "Materiaal & je werk". Categorie-iconen via lucide (shield-half=ShieldHalf, tools=Hammer, heart-handshake=HeartHandshake, pig-money=PiggyBank). Alle 18 polis-links + microbeschrijvingen statisch in HTML-bron (geen SEO-regressie). Sectoren-menu ongemoeid (19 items, aparte ronde). Build 101 pagina's groen. | Claude Code |
| 2026-06-20 | STAP 3: databron geconsumeerd. 3 skeletons (vapz/poz/ipt). Helpers af (`verzekeringenPerCategorie`, `naarKaart`, `kaartenVoor`). Archief `/verzekeringen` herbouwd (4 rubrieken, lucide-iconen, badges vervallen). Mega-menu desktop + mobiel accordeon. 13 carousels omgeschakeld. 0 hardcoded lijsten over. Build 101 pagina's groen. | Claude Code |
| 2026-06-19 | STAP 2: `verzekeringen.ts` gebouwd (18 records). 4 knopen verwerkt: BA Uitbating uitgesteld (buiten 18, skeleton blijft ongebruikt); omzet/overlijden buiten databron met bevinding genoteerd; VAPZ/POZ/IPT als 3 aparte items (slugs `vapz`/`poz`/`ipt`); trailing slash centraal genormaliseerd. Skeleton-slugs vastgelegd in §3. ICON_MAP +flame/heart/piggy-bank. | Claude Code |

<!--
ONDERHOUD: werk bij elke architectuurwijziging zowel de relevante sectie, de
regel "Laatst bijgewerkt" bovenaan, als deze changelog bij. Voeg een nieuwe
rij toe per wijziging. Verwijder geen historische changelog-rijen.
-->
