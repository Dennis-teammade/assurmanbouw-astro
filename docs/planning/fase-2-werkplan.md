# Fase 2 — werkplan (levend document)

> **STATUS: levend werkdocument, kan wijzigen.** Dit is een planning/to-do-lijst met
> beslissingen en volgorde uit de meeting van **9 juni 2026**. Het is **NIET bindend**
> voor stijl, kwaliteit of structuur.
>
> Voor de **norm** (hoe een pagina eruit moet zien) geldt **uitsluitend
> `docs/content-guide/`**. Dit plan kan wijzigen tijdens de uitvoering; de gids niet.
> Bij elk conflict tussen dit plan en de gids wint de gids.

> **⚠️ STAGING-FIRST.** De live site `assurmanbouw.be` (`main`) is bevroren. Al het fase
> 2-werk gebeurt op branch **`fase-2`** en wordt getoond op **`assurbouw.onlineprojecten.be`**
> voor review/goedkeuring. Nooit rechtstreeks naar `main`/productie; pas na goedkeuring
> gaat het van staging naar productie. Volledige regel: zie `CLAUDE.md` (top + §9).

## Normen (bestaan al — niet hier, maar in de gids)

| Paginatype | Norm-pagina | Gids |
|---|---|---|
| Sectorpagina | `src/pages/sectoren/dakwerkers.astro` | [`docs/content-guide/sectorpaginas.md`](../content-guide/sectorpaginas.md) |
| Verzekeringspagina | `src/pages/verzekeringen/arbeidsongevallen.astro` | [`docs/content-guide/verzekeringspaginas.md`](../content-guide/verzekeringspaginas.md) |
| Cards | overzichtspagina's | [`docs/content-guide/cards.md`](../content-guide/cards.md) |

Elke nieuwe pagina wordt afgeleid van die norm — zelfde diepte, structuur, stijl en
SEO-kwaliteit. De eerste nieuwe verzekeringspagina (ABR) is dus **geen nieuw ijkpunt**,
maar de eerste afgeleide die we volgens de bestaande norm bouwen.

---

## 1. Vertrekpunt — wat al af is (niet opnieuw aanpakken)

- Marketing-tracking (Meta Pixel + Google Ads) consent-gated via Silktide; GA4 en
  Rybbit ongemoeid.
- Privacy- en cookiebeleid juridisch goedgekeurd; bullets + CTA-fix op alle 5
  legal-pagina's.
- Hostinger/GitHub auto-deploy hersteld voor beide repos.
- Formulieren native (`ContactForm.tsx`, client-side POST naar GHL, honeypot +
  time-trap); iframes weg, pagina's sneller.
- Scan-CTA linkt correct naar de live `/maak-afspraak`-pagina.

**Bewust uitgesteld:** Node-proxy voor webhooks (enkel bij spam), conversie-instellingen
Meta/Google Ads (najaar), scan-formulier blijft externe embed.

---

## 2. De werkstromen

Fase 2 valt uiteen in vier soorten werk; gescheiden houden geeft overzicht en laat
research bundelen.

- **Werkstroom A — Sectorpagina's.** Norm: `dakwerkers.astro` + `sectorpaginas.md`.
  Research per beroep (risico's, cases, FAQ).
- **Werkstroom B — Verzekeringspagina's.** Norm: `arbeidsongevallen.astro` +
  `verzekeringspaginas.md`. Research per polis (wetgeving, dekking, cijfers).
- **Werkstroom C — Verzekeringscards.** Norm eerst vastleggen op de overzichtspagina
  `/verzekeringen/`, daarna uitrollen naar de sectorpagina's, telkens licht aangepast
  per sector (nooit gekopieerd — duplicate content vermijden).
- **Werkstroom D — Scan + site-brede taken.** De scan-aanpassing loopt als apart spoor
  (zie §7). Site-brede taken: Over ons in menu, bijstandspagina, 500-claim weg,
  klantenfoto's, JSON-LD audit.

---

## 3. Golf 0 — Scaffolding (eerst, vóór de content)

Geen quick-win-fase maar een **fundament**. Eerst het skelet van alle nieuwe pagina's,
zodat interne links meteen kloppen en niets later herwerkt moet worden.

**Wat:**
- Lege pagina's met de **juiste URL/slug** voor elke nieuwe sector- en
  verzekeringspagina, opgenomen in de **navigatie**. Secties/content komen later; nu
  enkel structuur en routes.
- Plus de site-brede quick wins zonder content-afhankelijkheid: **500-bouwbedrijven-
  claim weg** van Over ons, **Over ons in het hoofdmenu**, **bijstandspagina** (wacht op
  Europassistance-link), **klantenfoto's verwerken**.

**Waarom eerst:** met het skelet vooraf leg je alle linkbestemmingen één keer en vul je
daarna in. De nieuwe verzekeringen moeten ook nog aangevuld worden op de bestaande
sectorpagina's; zodra de verzekeringspagina's als skelet bestaan, kunnen die links (en
later cards) in orde gebracht worden.

**Integratie-beroepen** (zie §4) worden **niet** gescaffold tot beslist is of ze een
eigen pagina krijgen.

---

## 4. Werkstroom A — Sectorpagina's

### Wél bouwen (eigen pagina)
grondwerker · asfalteerder · stukadoor/plakker · chapper · vloerder/tegelzetter ·
parketzetter · zonnepanelen-installateur · koeltechnicus + HVAC (samen) · tuinaannemer ·
hovenier · boomverzorger · bestrater/kasseilegger · zwembadinstallateur.

### Integreren in bestaande pagina (eerst proberen, anders apart)
| Beroep | Integreren in |
|---|---|
| timmerman | schrijnwerker |
| behanger | schilder |
| glaszetter / keukeninstallateur / plafonneur | schrijnwerker |
| domotica-expert | elektricien |
| sanitair installateur | loodgieter |

### Niet bouwen
bekister · betonarbeider · ijzervlechter · sloopwerker · stellingbouwer ·
kraanmachinist · wegenwerker · lifttechnicus · brandertechnicus · tuinarchitect ·
omheiningsspecialist · groenbeheerder · volledige ontwerp/advies/management-groep.

### Aanpak per pagina
De 11 secties liggen vast in `sectorpaginas.md`. Per beroep:
1. Research (gebundeld per cluster): risico's, 3 realistische cases met bedragen, 5-9
   FAQ-vragen, relevante verzekeringen voor de carousel.
2. Beroep-specifieke foto's voor de masks (hero, why, cta).
3. Content schrijven volgens de norm + brand voice (zie `brand-voice.md`).
4. Bouwen via Claude Code, build, visuele check, commit op `fase-2`.

---

## 5. Werkstroom B — Verzekeringspagina's

Per verzekering hoort zowel een **card** (werkstroom C) als een **volledige pagina**.

- **Reeds aanwezig (verifiëren):** arbeidsongevallen · BA Onderneming · BA-10 ·
  bedrijfsvoertuig · machinebreuk · rechtsbijstand · ABR.
- **Toevoegen — aansprakelijkheid & juridisch:** BA Uitbating (verifiëren) · BA
  Bestuurder.
- **Toevoegen — gebouw, schade & continuïteit:** Brandverzekering (verifiëren) ·
  Bedrijfsschadeverzekering · Verzekering vervoerde goederen.
- **Toevoegen — ondernemer & personeel:** Gewaarborgd inkomen · Groepsverzekering ·
  Aanvullend pensioen (VAPZ/POZ/IPT samen onder één noemer) · Bescherming
  bedrijfsleider · Omzetverzekering.
- **Open:** Overlijdensdekking — samen met bescherming bedrijfsleider of apart, **na
  concurrentie-check**.
- **Parkeren:** Vermogensopbouw (eerder beleggen dan verzekering).

### Aanpak per pagina (6 fases)
1. Setup: naam, slug, hoofdzoekterm, 3 secundaire termen, te verifiëren wetgeving.
2. SERP-research: top 3-5 resultaten, vergelijkingsmatrix, geverifieerd wettelijk
   kader, 6 sectorvoorbeelden. Go/no-go.
3. Sectie-mapping: welke van de 11 secties 1-op-1, welke wijken af.
4. Content schrijven: volledig markdown-bestand volgens de `arbeidsongevallen`-norm.
5. Visuele/structurele elementen + SEO-checklist.
6. Bouwen via Claude Code, build, check, commit op `fase-2`.

**Eerste pagina: ABR.** Niet als nieuw ijkpunt, maar als eerste afgeleide van de
arbeidsongevallen-norm. ABR komt overal terug in de scan en sluit aan op het
sectorwerk, dus het is de logische start.

---

## 6. Werkstroom C — Verzekeringscards

Norm-detail: [`cards.md`](../content-guide/cards.md).

- **Stap 1:** cards-norm vastleggen op de overzichtspagina `/verzekeringen/` (kwaliteit
  en stijl daar bepalen).
- **Stap 2:** uitrollen naar de sectorpagina's, telkens met **licht aangepaste tekst**
  per sector. Nooit volledig kopiëren (duplicate content vermijden).
- **Belangrijk:** de nieuwe verzekeringen moeten ook aangevuld worden op de **bestaande**
  sectorpagina's. Dat kan zodra de verzekeringspagina's bestaan (al is het als skelet
  uit Golf 0).

---

## 7. Werkstroom D — Scan (apart spoor)

Bewust losgekoppeld van de pagina-golven. ABR en nieuwe beroepen toevoegen raakt de
scoring, de gap-logica, de beroepsblokken en de uitkomsten. Dat is pas zinvol als
vaststaat welke verzekeringen en beroepen definitief bestaan, en het zit in **GHL**
(niet vanuit de codebase aan te passen).

- Loopt parallel als eigen spoor; uitgevoerd wanneer content en beroepenlijst vaststaan.
- Nodige aanpassingen: ABR opnemen in de scan-logica, beroepenlijst stap 1 uitbreiden
  in lijn met de nieuwe sectoren, scoring en gap-boodschappen herzien waar nodig.
- Als één doordachte aanpassing, niet stuksgewijs, om de logica consistent te houden.

---

## 8. Research efficiënt aanpakken

**Beide doen research, dan samenvoegen.** Dennis en Claude doen allebei research per
pagina; daarna voegen we de bevindingen samen. Dennis ziet de echte Google-resultaten
en kent de praktijk; Claude verzamelt breed en verifieert het wettelijk kader.

**Bundel per type:**
- Sectoren: research per cluster (ruwbouw, afwerking, technieken, tuin), zodat
  overlappende info (ABR-relevantie, materiaaldekking) één keer verzameld wordt.
- Verzekeringen: per polis, maar het wettelijk kader is grotendeels al verzameld
  (Arbeidsongevallenwet, Boek 6 BW, Wet-Peeters-Borsus, ABEX, Fedris-plafond,
  premietaks). Die ankers hergebruiken.

**Research-regels:**
- Bronnen: alleen Belgische/Vlaamse overheid, FSMA, Fedris, RIZIV, ABEX, Assuralia,
  Constructiv. Nooit naar andere makelaars of verzekeraars.
- Geen verzonnen cijfers; verifieerbaar of weglaten.
- Concurrenten niet letterlijk citeren (paraphraseren).
- Bewering die maar door één bron geclaimd wordt: vlaggen, niet overnemen.

---

## 9. Volgorde van uitvoering

**Golf 0 — Scaffolding.** Lege pagina's met juiste URL/slug + nav voor alle nieuwe
sector- en verzekeringspagina's. Plus de site-brede quick wins zonder
content-afhankelijkheid: 500-claim weg, Over ons in menu, bijstandspagina (wacht op
Europassistance-link), klantenfoto's verwerken.

**Golf 1 — Verzekeringen die scan en sectoren schragen + cards-norm.** ABR volledig
doorlopen als eerste afgeleide. Daarna de verzekeringen die het vaakst terugkomen in
scan-gaps en sectorpagina's (beroepsaansprakelijkheid, materiaal-gerelateerd,
bedrijfsschade). Parallel: cards-norm vastleggen op `/verzekeringen/`.

**Golf 2 — Sectorpagina's per cluster.** Cluster per cluster (ruwbouw, afwerking,
technieken, tuin). Per cluster eerst gebundelde research, dan pagina's. Cards uitrollen
naar de sectoren (eigen + bestaande).

**Golf 3 — Resterende verzekeringen + afwerking.** Ondernemer & personeel,
overlijdensdekking-beslissing na concurrentie-check, JSON-LD structured-data audit als
één batch over alle nieuwe pagina's.

**Apart spoor — Scan.** Wanneer content en beroepenlijst vaststaan (zie §7).

**Doorlopend:**
- Branch-discipline: alles op `fase-2`, push naar `origin/fase-2`, merge naar `main`
  enkel na goedkeuring.
- Per batch: staging-links naar Benoit en Maaike voor feedback vóór live.

---

## 10. Kwaliteitsborging

> Stijl/kwaliteit zelf staat in de gids; dit is enkel de checklist-herinnering voor de
> uitvoering.

- Brand voice elke keer (zie `brand-voice.md`): je/jij, geen em-dashes, geen verzonnen
  cijfers, 5/5, auteur Benoit Keerman in frontmatter/byline/schema.
- Norm-trouw: sectoren volgen `sectorpaginas.md`, verzekeringen `verzekeringspaginas.md`.
- Per pagina dezelfde checklist: SEO-meta, interne links (sector + verzekering +
  kenniscentrum), wettelijk kader geverifieerd, mask-foto's, mobiele weergave.
- Cards: nooit gekopieerd, altijd licht aangepast per sector.
- Feedbacklus: staging eerst, feedback Benoit/Maaike, dan merge naar `main`.

---

## 11. Openstaande beslissingen

1. ~~**Integratie-beroepen** (timmerman, behanger, glaszetter, keukeninstallateur,
   plafonneur, domotica, sanitair): samenvoegen of apart?~~ **BESLIST (2026-06-26,
   Dennis): blijft zoals nu — geen eigen pagina's. Deze beroepen zijn geïntegreerd op
   verschillende plekken in de bestaande sectorpagina's (zie de integratie-tabel in §4).
   Geen extra scaffolding-ronde nodig.**
2. ~~**Overlijdensdekking:** samen met bescherming bedrijfsleider of apart?~~
   **BESLIST (2026-06-23, na concurrentie-check): samenvoegen, geen aparte business-pagina.**
   - *Opties:* (a) aparte `/verzekeringen/overlijdensdekking`-pagina; (b) opnemen als
     waarborg binnen Bescherming bedrijfsleider (+ pensioenpolissen).
   - *Motivatie:* de zakelijke/keyman-overlijdensdekking (vennootschap = begunstigde) is
     al de kern van **Bescherming bedrijfsleider**; een aparte pagina dupliceert dat en
     geeft dunne content. De concurrentie-check (Wikifin, Assuralia, FSMA) bevestigt dat
     "overlijdensverzekering" in BE een koepel-/waarborgbegrip is met meerdere vormen
     (pensioen, schuldsaldo, keyman), geen losstaand productpagina-item. De `overlijdens-
     dekking.astro`-skeleton blijft geparkeerd. Een **aparte pagina is enkel later zinvol
     voor de persoonlijke gezins-overlijdensdekking** (partner/kinderen = begunstigde), een
     ander product, zoals de brief `bescherming-bedrijfsleider.md` al voorzag. De
     `overlijdensdekking.astro`-skeleton is verwijderd (2026-06-23, geen verwijzingen).
3. ~~**Omzetverzekering:** aparte pagina?~~ **BESLIST (2026-06-23): niet als aparte
   pagina; opgenomen als FAQ op Gewaarborgd inkomen.**
   - *Opties:* (a) eigen pagina; (b) sub-onderdeel/FAQ van Gewaarborgd inkomen of
     Bedrijfsschade; (c) parkeren.
   - *Motivatie:* zelfde trigger als gewaarborgd inkomen (uitval van de zaakvoerder door
     ziekte/ongeval), maar gericht op de vaste kosten van de vennootschap i.p.v. het
     persoonlijke inkomen. Te dun voor een eigen pagina nu; daarom een **dedicated FAQ op
     `gewaarborgd-inkomen.astro`** ("Wat is een omzetverzekering en heb ik die ook nodig?")
     plus de bestaande kruislink vanuit Bedrijfsschade. Skeleton `omzetverzekering.astro`
     verwijderd (2026-06-23, geen verwijzingen); eigen pagina pas bij aangetoonde zoekvraag.
4. **BA Uitbating en Brandverzekering:** eerst verifiëren of die al live staan voor we
   ze scaffolden.

---

## 12. Eerste concrete stappen

1. **Golf 0 starten:** skelet-pagina's aanmaken (URL/slug + nav) voor de nieuwe
   verzekeringen en sectoren, plus de site-brede quick wins (500-claim weg, Over ons in
   menu).
2. **ABR-pagina:** fase 1-setup volgens `verzekeringspaginas.md` klaarzetten (slug,
   zoektermen, te verifiëren wetgeving), dan beide research doen en samenvoegen.
3. **Cards-norm:** eerste cards uitwerken op `/verzekeringen/`.
4. **Research ruwbouw-cluster** bundelen voor de eerste sectorbatch.
