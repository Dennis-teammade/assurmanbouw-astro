# Content-brief — Cluster TECHNIEKEN (2 sectorpagina's)

> **Voor wie:** hoofd-agent die straks `src/pages/sectoren/zonnepanelen-installateurs.astro` en
> `src/pages/sectoren/koeltechniek-hvac.astro` bouwt.
> **Norm:** repliceer `src/pages/sectoren/dakwerkers.astro` 1-op-1 (11 secties + partners + final CTA).
> Pas alleen content/copy aan. Verzin geen nieuwe sectie-volgorde.
> **Voice:** Belgisch Nederlands je/jij/jouw, nooit u/uw. Geen em-dashes. 5/5 blijft 5/5.
> Geen verzonnen klantenaantallen of verzekeraarsnamen. Cases = fictief-illustratief (euro + fictieve namen toegestaan, zoals dakwerkers).
> **Polis-data:** alle slugs hieronder bestaan in `src/data/verzekeringen.ts` (`kaartenVoor([...])`).

---

## FOTO-BEHOEFTE (BLOKKER — moet aangeleverd worden vóór build)

Padconventie volgt dakwerkers: 3 mask-foto's in `/public/` (root), 4 case-beelden in `/public/images/cases/`.

### Beroep 1 — Zonnepanelen-installateurs
Mask-foto's (root van `/public/`):
- `assurman-verzekeringen-bouwsector-zonnepanelen-hero.jpg` — alt: "Installateur monteert zonnepanelen op een hellend dak"
- `verzekeringen-bouwsector-zonnepanelen-why.jpg` — alt: "Zonnepaneelinstallateur tijdens een werfcontrole op het dak"
- `verzekeringen-bouwsector-zonnepanelen-cta.jpg` — alt: "Installateur rondt een PV-installatie met omvormer af"

Case-beelden (`/public/images/cases/`):
- `case-zonnepanelen-1.jpg` — waterinsijpeling na dakdoorboring
- `case-zonnepanelen-2.jpg` — brand door omvormer/connector
- `case-zonnepanelen-3.jpg` — paneel valt/breekt bij montage
- `case-zonnepanelen-4.jpg` — geschil over opbrengstgarantie

### Beroep 2 — Koeltechniek & HVAC
Mask-foto's (root van `/public/`):
- `assurman-verzekeringen-bouwsector-koeltechniek-hero.jpg` — alt: "Koeltechnicus installeert een warmtepomp aan een gevel"
- `verzekeringen-bouwsector-koeltechniek-why.jpg` — alt: "HVAC-technicus controleert een klimaatinstallatie"
- `verzekeringen-bouwsector-koeltechniek-cta.jpg` — alt: "Technicus rondt de plaatsing van een airco-unit af"

Case-beelden (`/public/images/cases/`):
- `case-koeltechniek-1.jpg` — koelmiddellek
- `case-koeltechniek-2.jpg` — geschil verkeerd gedimensioneerde warmtepomp
- `case-koeltechniek-3.jpg` — waterschade door condensafvoer/lekkage
- `case-koeltechniek-4.jpg` — dure unit beschadigd bij transport/plaatsing

> **Tot deze 14 beelden er zijn: pagina niet als klaar rapporteren.** Tijdelijk mag een placeholder
> mee zolang het pad correct staat, maar markeer het als open punt.

---

# BEROEP 1 — ZONNEPANELEN-INSTALLATEURS

slug: `zonnepanelen-installateurs` · canonical: `/sectoren/zonnepanelen-installateurs`

## META
- **title** (~57): `Verzekeringen voor zonnepaneel-installateurs | Assurman`
- **description** (~150): `Werken op hoogte, dakdoorboringen, dure panelen en omvormers: PV-installateurs hebben specifieke verzekeringsnoden. Ontdek het pakket op maat van Assurman.`
- **hoofdzoekterm:** verzekering zonnepanelen installateur
- **secundair:** BA zonnepanelen installateur · tienjarige aansprakelijkheid zonnepanelen · verzekering PV-installateur België

## HERO
- **H1:** `Verzekeringen voor zonnepaneel-installateurs`
- **Gouden subzin:** `Veilig op het dak, gedekt op de werf en onderweg.`
- **Intro:** `Als zonnepaneel-installateur boor je dagelijks daken aan, til je dure panelen omhoog en sluit je omvormers en batterijen aan. Eén lekkende doorboring, één smeulende connector of één discussie over de opbrengst kan al leiden tot schadeclaims of stilstand. Assurman is gespecialiseerd in verzekeringen op maat van bouwondernemers in Vlaanderen.`
- **hero-foto-alt:** `Installateur monteert zonnepanelen op een hellend dak`

## 4 KEY-FEATURES (gold-strip, `white-space:pre-line`, 2 regels per kaart)
1. `Specialist in\nPV & bouwtechniek`
2. `Modulair pakket:\nenkel wat nodig is`
3. `Duidelijke uitleg,\nsnelle service`
4. `Dekking voor dak\n+ materiaal + mobiliteit`

## INTRO / POSITIONERING
- **H2:** `Waarom een zonnepaneel-installateur een specialist nodig heeft`
- **Alinea 1:** `Zonnepanelen plaatsen is geen standaardklus. Je werkt op hoogte, je doorboort de waterdichting van een dak, je werkt met elektriciteit en je hangt al snel duizenden euro's aan panelen, omvormers en thuisbatterijen aan een gevel of dakconstructie. Eén verkeerde doorboring die later water binnenlaat, één oververhitte connector of één misverstand over de beloofde opbrengst kan uitmonden in een stevige schadeclaim.`
- **Alinea 2:** `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: type daken (hellend, plat, industrieel), werken op bestaande of nieuwe gebouwen, thuisbatterijen, personeel, onderaannemers, de waarde van je materiaal en je bestelwagen, en je regio.`
- **Blockquote:** `"Jij legt de panelen, wij zorgen dat je beschermd bent als er onder of na de installatie iets misgaat."`
- **3 why-cards:**
  1. **Werken op hoogte** — `Specifieke aandacht voor valbeveiliging en schade aan derden door vallende panelen of gereedschap.`
  2. **Dakdoorboring & waterdichtheid** — `De grootste claimbron: lekkage en vochtschade nadat je het dak hebt aangeboord. BA Na Levering en BA-10 zijn hier cruciaal.`
  3. **Dure materialen & mobiliteit** — `Bescherming voor panelen, omvormers, batterijen en bestelwagen zodat één diefstal of breuk je niet stillegt.`

## 4 QUICK BENEFITS (donkere sectie)
1. **Heldere dekking** — `Geen wollige taal. Je weet waarvoor je verzekerd bent op het dak en na oplevering.`
2. **Slimme modules** — `Voeg toe wat jij nodig hebt: tienjarige aansprakelijkheid, werfdekking, materiaal, mobiliteit, rechtsbijstand.`
3. **Snelle intake** — `Na een audit van onze expert stemmen we alles af op jouw installaties en daktypes.`
4. **Bouw-expertise** — `We spreken jouw taal: omvormer, MC4-connector, dakdoorvoer, onderconstructie, thuisbatterij.`

## insuranceCards (slugs in deze volgorde)
`kaartenVoor(['ba-10', 'ba-onderneming', 'alle-bouwplaats-risicos', 'vervoerde-goederen', 'bedrijfsvoertuigen', 'arbeidsongevallen'])`

| Slug | Waarom voor dit beroep |
|---|---|
| `ba-10` | Tienjarige aansprakelijkheid: een doorboring die de waterdichtheid of structuur aantast valt onder stabiliteits-/soliditeitsgebreken. Vaak de zwaarste claim. |
| `ba-onderneming` | BA Uitbating + BA Na Levering: schade aan het dak van de klant tijdens en na de plaatsing, lekkage, brandschade door een omvormer. |
| `alle-bouwplaats-risicos` | Schade aan de installatie in uitvoering door storm, diefstal of vandalisme, zeker bij grotere of industriële PV-projecten. |
| `vervoerde-goederen` | Dure panelen, omvormers en thuisbatterijen die je zelf vervoert en op de werf laadt en lost. |
| `bedrijfsvoertuigen` | Zonder bestelwagen sta je stil. BA verplicht, plus omnium en diefstal van koopwaar. |
| `arbeidsongevallen` | Werken op hoogte is een verhoogd risico. Wettelijk verplicht vanaf de eerste werknemer, dekt ook woon-werkverkeer. |

**Carousel-props:**
- sectionLabel: `Het PV-installateurspakket`
- headline: `Jouw installateurspakket: de belangrijkste verzekeringen`
- subheadline: `Dit zijn de kernblokken voor de meeste zonnepaneel-installateurs. Daarna verfijnen we met extra modules waar nodig.`

## 4 CASE STUDIES (category `ZONNEPANELEN`)
1. **title:** `Waterinsijpeling na dakdoorboring leidt tot €38.000 schadeclaim`
   - businessName: `ZonDak Solar` · ownerName: `Wim Declercq` · cityName: `Roeselare`
   - description: `Enkele maanden na de plaatsing van een installatie op een hellend dak meldde de klant vochtplekken op het plafond. Het water bleek binnen te dringen via een dakdoorvoer die bij de montage was aangebracht. De klant eiste herstel van de waterschade aan dak, isolatie en afwerking.`
   - action: `Via de BA Na Levering kon een expert de oorzaak vaststellen en werd de schade aan het binnenwerk en de dakdichting vergoed. De installateur moest niet zelf opdraaien voor de volledige herstelkost en het geschil escaleerde niet tot een procedure.`
2. **title:** `Brand door oververhitte connector kost €52.000 aan gebouwschade`
   - businessName: `Helios Technics` · ownerName: `Kevin Maes` · cityName: `Aalst`
   - description: `In een PV-installatie ontstond brand door een slecht gecrimpte connector bij de omvormer. Het vuur beschadigde het dak en een deel van de zolderverdieping. De gebouweigenaar stelde de installateur aansprakelijk voor de uitvoeringsfout.`
   - action: `De BA-verzekering van de onderneming dekte de gebouwschade aan derden en de juridische beoordeling van de aansprakelijkheid. De installateur kon doorwerken zonder dat de claim zijn bedrijf in gevaar bracht.`
3. **title:** `Paneel valt en breekt tijdens montage: €9.500 materiaal- en gevolgschade`
   - businessName: `Sunfix bvba` · ownerName: `Tom Vanhauwaert` · cityName: `Brugge`
   - description: `Tijdens het ophijsen van panelen op een plat dak gleed een pakket panelen los. Twee panelen braken en bij de val raakte ook een dakkoepel van het gebouw beschadigd.`
   - action: `De gebroken panelen werden via de materiaaldekking vergoed en de schade aan de dakkoepel van de klant viel onder de BA Uitbating. Nieuwe panelen werden versneld besteld zodat het project amper vertraging opliep.`
4. **title:** `Geschil over opbrengstgarantie loopt uit op juridische betwisting`
   - businessName: `Volt & Co` · ownerName: `Niels Sap` · cityName: `Gent`
   - description: `Een klant claimde dat de installatie de beloofde jaaropbrengst niet haalde en eiste een schadevergoeding. Er ontstond discussie over schaduwval, het paneeltype en wat er precies in de offerte was beloofd.`
   - action: `Via de rechtsbijstand werd een onafhankelijke expert ingeschakeld die de offerte, de plaatsing en de meetgegevens analyseerde. Na bemiddeling werd een redelijke regeling getroffen en bleven de juridische kosten gedekt.`

## FAQ (mensentaal) — 6 items
1. **Welke risico's heeft een zonnepaneel-installateur het meest?**
   `De grootste risico's komen meestal uit 4 hoeken:\n\n• Waterdichtheid: lekkage en vochtschade nadat je het dak hebt aangeboord.\n\n• Brand & elektriciteit: oververhitting bij omvormer, batterij of connector.\n\n• Werken op hoogte: valgevaar en schade aan derden door vallend materiaal.\n\n• Materiaal & mobiliteit: dure panelen, omvormers en batterijen, plus je bestelwagen.\n\nDaarom is een basis met BA-10 + BA Onderneming + ABR + materiaal/bestelwagen voor veel installateurs een logische start.`
2. **Waarom is tienjarige aansprakelijkheid (BA-10) belangrijk voor mij?**
   `Omdat je bij het plaatsen van panelen in het dak boort, raak je aan de waterdichtheid en soms aan de structuur van een gebouw. Als daar jaren later een gebrek uit voortvloeit, kan dat onder de tienjarige aansprakelijkheid vallen. Bij werken aan woningen is BA-10 bovendien wettelijk verplicht. In je intake bekijken we of en hoe dit op jouw werven van toepassing is.`
3. **Wat als de klant klaagt over de opbrengst van zijn installatie?**
   `Discussies over de beloofde opbrengst komen vaak voor. Wat je precies in je offerte belooft, is daarbij doorslaggevend. Een rechtsbijstandsverzekering helpt je om zo'n geschil correct te laten beoordelen en de juridische kosten op te vangen. We bekijken samen hoe je je hier het best tegen indekt.`
4. **Zijn mijn panelen en omvormers verzekerd onderweg en op de werf?**
   `Dat kan, via een verzekering voor vervoerde goederen en materiaaldekking. Panelen, omvormers en thuisbatterijen vertegenwoordigen snel een grote waarde. We stemmen de dekking af op wat je vervoert, waar het ligt en hoe je beveiliging geregeld is.`
5. **Heb ik als installateur certificaten nodig om verzekerd te zijn?**
   `Voor bepaalde werken en premies gelden in België certificatie- en keuringsregels (zie verder in je intake). Of een verzekeraar daar voorwaarden aan koppelt, hangt af van je activiteiten. We brengen dat samen met jou in kaart zodat je dekking aansluit op je manier van werken.`
6. **Kan ik mijn pakket later uitbreiden?**
   `Ja. Veel installateurs starten met een kernpakket en breiden uit wanneer ze personeel aannemen, grotere of industriële projecten doen, meer thuisbatterijen plaatsen of vaker met onderaannemers werken. Assurman bouwt modulair: je groeit zonder telkens van nul te starten.`

## PROCESS (4 stappen — identiek stramien dakwerkers)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, kosten en werfrealiteit grondig.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw installaties.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`

## TUSSEN-CTA (H2)
`Zonnepaneel-installateur in Vlaanderen?<br />Wij maken jouw pakket op maat.`

## 3 TESTIMONIALS (geanonimiseerd, 5/5)
1. `"Eindelijk iemand die snapt wat dakdoorboring betekent voor je aansprakelijkheid. Duidelijk uitgelegd."` — `Zaakvoerder, zonnepanelen (West-Vlaanderen)`
2. `"Ik wou vooral zekerheid rond mijn panelen en omvormers. Alles helder geregeld, zonder gedoe."` — `PV-installateur, Oost-Vlaanderen`
3. `"De scan ging vlot en daarna hebben we het pakket echt op maat gezet voor mijn type werven."` — `Zelfstandig installateur`

## CONTROLEPUNTEN — ZP (technische/wettelijke claims te verifiëren vóór publicatie)

| Code | Fictieve case / claim | Pakket | Te verifiëren punt | Status |
|---|---|---|---|---|
| ZP-1 | "BA-10 verplicht bij werken aan woningen" | ba-10 | Wet Peeters-Borsus (2018): geldt BA-10 voor PV-werk dat de structuur/waterdichtheid raakt? Reikwijdte bevestigen. Geen exacte artikelnummers verzinnen. | CONTROLEPUNT |
| ZP-2 | "RESCert-certificatie voor PV-installateurs" | ba-onderneming / scan-intake | RESCert is het officiële certificatiesysteem (Vlaams/Waals/Brussels Gewest). Vanaf 1-1-2026 is plaatsing door een RESCert-installateur voorwaarde voor o.a. groenestroomcertificaten bij installaties tot 5 kWc. Verifieer exacte drempel/datum vóór je dit hard in copy zet. | DEELS GEVERIFIEERD — controlepunt |
| ZP-3 | "AREI-keuring verplicht vóór ingebruikname" | ba-onderneming / brandverzekering-link | AREI-keuring is wettelijk verplicht vóór ingebruikname en bij elke uitbreiding. Een installatie zonder keuringsattest kan problemen geven bij brandverzekering/aansprakelijkheid. Bevestig actuele formulering. | DEELS GEVERIFIEERD — controlepunt |
| ZP-4 | "Opbrengstgarantie-geschil €X" (case 4) | rechtsbijstand | Fictief-illustratief bedrag. Geen reële opbrengstcijfers of garanties claimen in copy. | OK (fictief) |

---

# BEROEP 2 — KOELTECHNIEK & HVAC

slug: `koeltechniek-hvac` · canonical: `/sectoren/koeltechniek-hvac`
(1 gecombineerde pagina: warmtepompen, airco, koeling, ventilatie, klimaatinstallaties.)

## META
- **title** (~52): `Verzekeringen voor koeltechniek & HVAC | Assurman`
- **description** (~152): `Warmtepompen, airco, koeling en ventilatie: koeltechnici en HVAC-installateurs werken met koelmiddelen, dure units en waterleidingen. Ontdek je pakket bij Assurman.`
- **hoofdzoekterm:** verzekering koeltechniek HVAC
- **secundair:** verzekering warmtepomp installateur · BA airco installateur · verzekering klimaatinstallatie België

## HERO
- **H1:** `Verzekeringen voor koeltechniek & HVAC`
- **Gouden subzin:** `Gedekt bij koelmiddel, klimaat en alles wat je installeert.`
- **Intro:** `Als koeltechnicus of HVAC-installateur werk je met warmtepompen, airco, koeling, ventilatie en klimaatinstallaties. Je hanteert koelmiddelen, je sleept dure units en je legt leidingen die water voeren. Eén koelmiddellek, één verkeerd gedimensioneerde warmtepomp of één lekkende condensafvoer kan al leiden tot schadeclaims of stilstand. Assurman is gespecialiseerd in verzekeringen op maat van bouwondernemers in Vlaanderen.`
- **hero-foto-alt:** `Koeltechnicus installeert een warmtepomp aan een gevel`

## 4 KEY-FEATURES (gold-strip, 2 regels)
1. `Specialist in\nkoeltechniek & HVAC`
2. `Modulair pakket:\nenkel wat nodig is`
3. `Duidelijke uitleg,\nsnelle service`
4. `Dekking voor units\n+ materiaal + mobiliteit`

## INTRO / POSITIONERING
- **H2:** `Waarom een koeltechnicus een specialist nodig heeft`
- **Alinea 1:** `Koeltechniek en HVAC zijn geen standaardstiel. Je werkt met koelmiddelen die onder strenge regels vallen, met elektriciteit, met dure buiten- en binnenunits en met leidingen die water of condens afvoeren. Eén lek, één unit die verkeerd gedimensioneerd blijkt of één condensafvoer die water laat lopen kan uitmonden in een claim voor gevolgschade aan het gebouw van je klant.`
- **Alinea 2:** `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: type installaties (warmtepomp, airco, koeling, ventilatie), residentieel of industrieel, onderhoudscontracten, personeel, onderaannemers, de waarde van je units en gereedschap, en je bestelwagen.`
- **Blockquote:** `"Jij zorgt voor het klimaat binnen, wij zorgen dat je beschermd bent als de installatie iets veroorzaakt."`
- **3 why-cards:**
  1. **Koelmiddelen & gevolgschade** — `Werken met F-gassen en koelmiddelen brengt aansprakelijkheid mee. Een lek of fout kan leiden tot gevolgschade en betwisting.`
  2. **Waterschade & condens** — `Lekkende condensafvoer of een leiding die loskomt is een typische HVAC-claim. BA Uitbating en BA Na Levering vangen dit op.`
  3. **Dure units & mobiliteit** — `Bescherming voor warmtepompen, airco-units, gereedschap en bestelwagen zodat één breuk of diefstal je niet stillegt.`

## 4 QUICK BENEFITS (donkere sectie)
1. **Heldere dekking** — `Geen wollige taal. Je weet waarvoor je verzekerd bent tijdens en na de installatie.`
2. **Slimme modules** — `Voeg toe wat jij nodig hebt: materiaal, machinebreuk, mobiliteit, rechtsbijstand.`
3. **Snelle intake** — `Na een audit van onze expert stemmen we alles af op jouw type installaties en onderhoudswerk.`
4. **Bouw-expertise** — `We spreken jouw taal: warmtepomp, split-unit, koelmiddel, condensafvoer, debiet, COP.`

## insuranceCards (slugs in deze volgorde)
`kaartenVoor(['ba-onderneming', 'vervoerde-goederen', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'rechtsbijstand'])`

| Slug | Waarom voor dit beroep |
|---|---|
| `ba-onderneming` | BA Uitbating + BA Na Levering: gevolgschade aan het gebouw door koelmiddellek, waterschade door condensafvoer of een fout na oplevering. De kern voor HVAC. |
| `vervoerde-goederen` | Dure warmtepompen en airco-units die je zelf vervoert en op de werf laadt en lost. |
| `machinebreuk` | Plotse defecten, beschadiging en diefstal van machines en gereedschap, op de werf, in de bestelwagen of op het atelier. |
| `bedrijfsvoertuigen` | Zonder bestelwagen sta je stil. BA verplicht, plus omnium en diefstal van materieel. |
| `arbeidsongevallen` | Wettelijk verplicht vanaf de eerste werknemer. Dekt de werf en het woon-werkverkeer. |
| `rechtsbijstand` | Hulp bij geschillen over dimensionering, uitvoering of betwiste opleveringen, plus factuurincasso. |

**Carousel-props:**
- sectionLabel: `Het koeltechniek- & HVAC-pakket`
- headline: `Jouw koeltechniek- en HVAC-pakket: de belangrijkste verzekeringen`
- subheadline: `Dit zijn de kernblokken voor de meeste koeltechnici en HVAC-installateurs. Daarna verfijnen we met extra modules waar nodig.`

## 4 CASE STUDIES (category `KOELTECHNIEK & HVAC`)
1. **title:** `Koelmiddellek na installatie leidt tot €16.000 herstel- en gevolgschade`
   - businessName: `Klimaat Coolservice` · ownerName: `Bart Wauters` · cityName: `Hasselt`
   - description: `Na de plaatsing van een airco-installatie in een winkelpand ontstond een lek in het koelmiddelcircuit. De installatie viel uit en de klant claimde naast het herstel ook de schade door het stilvallen van de koeling tijdens een warme periode.`
   - action: `De BA Na Levering dekte de gevolgschade die aan de uitvoeringsfout werd toegeschreven. Een expert beoordeelde de oorzaak en de installateur kon het geschil afronden zonder zelf de volledige kost te dragen.`
2. **title:** `Geschil over verkeerd gedimensioneerde warmtepomp loopt op tot €22.000`
   - businessName: `WarmteWise` · ownerName: `Dieter Cools` · cityName: `Leuven`
   - description: `Een klant stelde dat de geplaatste warmtepomp de woning onvoldoende verwarmde en eiste vervanging plus schadevergoeding. Er ontstond discussie over de berekende warmtebehoefte en wat er in de offerte was afgesproken.`
   - action: `Via de rechtsbijstand werd een onafhankelijke expert ingeschakeld die de dimensionering en de offerte beoordeelde. Na bemiddeling kwam er een regeling en bleven de juridische kosten gedekt.`
3. **title:** `Waterschade door lekkende condensafvoer veroorzaakt €13.500 aan plafondschade`
   - businessName: `Aircomfort bvba` · ownerName: `Sven Peeters` · cityName: `Mechelen`
   - description: `Bij een binnenunit kwam de condensafvoer los waardoor water in het plafond en de gipswanden van de verdieping eronder liep. De gebouweigenaar stelde de installateur aansprakelijk voor de waterschade.`
   - action: `De BA Uitbating dekte de waterschade aan het gebouw van de klant. De claim werd snel afgehandeld en het conflict liep niet uit op een procedure.`
4. **title:** `Dure warmtepomp beschadigd bij transport en plaatsing: €8.900`
   - businessName: `Thermflow Technics` · ownerName: `Glenn Verhulst` · cityName: `Antwerpen`
   - description: `Bij het lossen en hijsen van een buitenunit op een platdak viel de warmtepomp van de pallet en raakte de behuizing en het lamellenpakket beschadigd. De unit was niet meer bruikbaar.`
   - action: `Via de verzekering voor vervoerde goederen werd de beschadigde unit vergoed. Een vervangende unit werd versneld geleverd zodat het project nauwelijks vertraging opliep.`

## FAQ (mensentaal) — 6 items
1. **Welke risico's heeft een koeltechnicus of HVAC-installateur het meest?**
   `De grootste risico's komen meestal uit 4 hoeken:\n\n• Koelmiddelen: lekken en fouten brengen aansprakelijkheid en gevolgschade mee.\n\n• Waterschade: lekkende condensafvoer of een leiding die loskomt.\n\n• Materiaal & mobiliteit: dure units en gereedschap, plus je bestelwagen.\n\n• Geschillen: discussie over dimensionering, uitvoering of opbrengst.\n\nDaarom is een basis met BA Onderneming + materiaal/machinebreuk + bestelwagen + rechtsbijstand voor veel technici een logische start.`
2. **Mijn werk valt onder de F-gassenregels. Heeft dat invloed op mijn verzekering?**
   `Werken met koelmiddelen valt in België onder de Europese F-gassenverordening, waarvoor erkenning en certificatie geldt. Of een verzekeraar daar voorwaarden aan koppelt, hangt af van je activiteiten. In je intake brengen we dit samen in kaart zodat je dekking aansluit op je manier van werken.`
3. **Ben ik gedekt voor waterschade die mijn installatie veroorzaakt?**
   `Waterschade door een lekkende condensafvoer of een leiding is een typische HVAC-claim. Schade aan het gebouw van je klant valt doorgaans onder je BA Uitbating, en gebreken die na de oplevering opduiken onder BA Na Levering. We bekijken samen of jouw dekking dit correct opvangt.`
4. **Wat als een klant klaagt dat de warmtepomp niet goed werkt?**
   `Discussies over dimensionering en prestaties komen vaak voor. Wat je in je offerte belooft en hoe de berekening is gemaakt, weegt zwaar door. Een rechtsbijstandsverzekering helpt je om zo'n geschil correct te laten beoordelen en de juridische kosten op te vangen.`
5. **Zijn mijn units en gereedschap verzekerd onderweg en op de werf?**
   `Dat kan, via een verzekering voor vervoerde goederen en een machinebreukdekking. Warmtepompen en airco-units zijn duur en kwetsbaar bij transport en plaatsing. We stemmen de dekking af op wat je vervoert, waar het ligt en hoe je beveiliging geregeld is.`
6. **Kan ik mijn pakket later uitbreiden?**
   `Ja. Veel technici starten met een kernpakket en breiden uit wanneer ze personeel aannemen, onderhoudscontracten opnemen, grotere of industriële installaties doen of vaker met onderaannemers werken. Assurman bouwt modulair: je groeit zonder telkens van nul te starten.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, kosten en werfrealiteit grondig.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw installaties.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`

## TUSSEN-CTA (H2)
`Koeltechnicus of HVAC-installateur in Vlaanderen?<br />Wij maken jouw pakket op maat.`

## 3 TESTIMONIALS (geanonimiseerd, 5/5)
1. `"Eindelijk een makelaar die snapt wat koelmiddel en gevolgschade betekenen. Duidelijk uitgelegd."` — `Zaakvoerder, koeltechniek (Limburg)`
2. `"Ik wou vooral zekerheid rond mijn warmtepompen en de bestelwagen. Alles helder geregeld."` — `HVAC-installateur, Antwerpen`
3. `"De scan ging vlot en daarna hebben we het pakket echt op maat van mijn onderhoudswerk gezet."` — `Zelfstandig koeltechnicus`

## CONTROLEPUNTEN — HV (technische/wettelijke claims te verifiëren vóór publicatie)

| Code | Fictieve case / claim | Pakket | Te verifiëren punt | Status |
|---|---|---|---|---|
| HV-1 | "F-gassencertificaat verplicht voor koeltechnici" | ba-onderneming / scan-intake | EU-Verordening 517/2014 (F-gassen): persoons- én bedrijfscertificaat verplicht voor installatie, onderhoud, lekcontrole en terugwinning van koelmiddelen. In Vlaanderen geldt erkenning als koeltechnicus. Bevestig actuele formulering en vermijd exacte artikelnummers in copy. | GEVERIFIEERD (kwalitatief) — controlepunt |
| HV-2 | "Koelmiddellek → gevolgschade" (case 1) | ba-onderneming (BA Na Levering) | Of een koelmiddellek als uitvoeringsfout onder BA Na Levering valt, hangt af van polisvoorwaarden. Houd copy kwalitatief ("doorgaans / in principe"), geen harde dekkingsbelofte. | CONTROLEPUNT |
| HV-3 | "Waterschade condensafvoer → BA Uitbating" (case 3) | ba-onderneming | Dekking van waterschade aan derden is voorwaardelijk. Kwalitatief formuleren. | CONTROLEPUNT |
| HV-4 | "Dimensionering-geschil €X" (case 2) | rechtsbijstand | Fictief-illustratief bedrag. Geen reële prestatie-/COP-cijfers of garanties claimen in copy. | OK (fictief) |

---

## Bronnen voor de controlepunten (voor de verifieerder)
- F-gassen / EU 517/2014, erkenning koeltechnicus Vlaanderen: vlaanderen.be (Erkenning als koeltechnicus), airco-plaatsen.be (Wetgeving airco), ondernemersplein.overheid.nl.
- RESCert / AREI zonnepanelen: rescert.be, energy-village.be (AREI-keuring), brugel.brussels, sun4power.be. Let op: 5 kWc-drempel en datum 1-1-2026 koppelen aan groenestroomcertificaten — verifieer de exacte voorwaarde vóór publicatie.
