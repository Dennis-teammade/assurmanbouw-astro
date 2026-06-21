# Content-brief — Sectorcluster TUIN & BUITEN (4 beroepen)

> **Doel van dit document.** Bouwklare brief voor 4 sectorpagina's. De hoofd-agent
> bouwt elke pagina volgens de norm in `docs/content-guide/sectorpaginas.md` (de 11 vaste
> secties) met `src/pages/sectoren/dakwerkers.astro` als referentie-implementatie.
> Repliceer de structuur 1-op-1, pas alleen content/copy aan. Verzin geen nieuwe secties.

> **Brand voice (hard, geldt overal).** Belgisch Nederlands `je/jij/jouw`, nooit `u/uw`.
> Geen em-dashes. Reviewscore altijd **5/5**. Geen verzonnen klantenaantallen of
> verzekeraarsnamen. Geen specifieke verzekeraars in copy (partner-slider mag visueel).
> Cases en testimonials zijn **fictief-illustratief**: euro-bedragen en fictieve
> namen/bedrijven zijn toegestaan, maar ze zijn herkenbaar algemeen, geen echte klanten.

> **CTA's (hard).** Altijd uit `src/data/cta-labels.ts`. Hero: `CTA_SCAN.request` +
> `CTA_AFSPRAAK.advisoryFull`. Tussen-CTA-band: `CTA_SCAN.requestNow`. Final CTA:
> `CTA_SCAN.request` + `CTA_AFSPRAAK.advisory`. Secundair = `CTA_DESTINATIONS.afspraak`.
> Scan-stat in sectie 6 = `CTA_DESTINATIONS.scan`. Verzin geen knoptekst in de pagina.

> **Polis-data.** `insuranceCards` voeden via `kaartenVoor([...slugs])` uit
> `src/data/verzekeringen.ts` (zelfde patroon als dakwerkers). De "waarom-zin" per polis
> hieronder is begeleidende copy voor de carousel-context, niet de kaart-bullets zelf
> (die komen uit de databron).

---

## FOTO-BEHOEFTE (BLOKKER — aanleveren vóór build)

Per beroep zijn **3 mask-foto's** (hero/why/cta) + **4 case-beelden** nodig. Padconventie
volgt dakwerkers. **Geen enkele foto bestaat vandaag** in `public/` of
`public/images/cases/` voor deze 4 beroepen. Build kan starten met de teksten, maar de
pagina is pas af als deze beelden geleverd zijn.

### Mask-foto's (in `public/`, root)
Conventie dakwerkers: `assurman-verzekeringen-bouwsector-dakwerker-hero.jpg`,
`verzekeringen-bouwsector-dakwerker-why.jpg`, `verzekeringen-bouwsector-dakwerker-cta.jpg`.

| Beroep | hero | why | cta |
|---|---|---|---|
| Tuinaannemers | `assurman-verzekeringen-bouwsector-tuinaannemer-hero.jpg` | `verzekeringen-bouwsector-tuinaannemer-why.jpg` | `verzekeringen-bouwsector-tuinaannemer-cta.jpg` |
| Hoveniers | `assurman-verzekeringen-bouwsector-hovenier-hero.jpg` | `verzekeringen-bouwsector-hovenier-why.jpg` | `verzekeringen-bouwsector-hovenier-cta.jpg` |
| Boomverzorgers | `assurman-verzekeringen-bouwsector-boomverzorger-hero.jpg` | `verzekeringen-bouwsector-boomverzorger-why.jpg` | `verzekeringen-bouwsector-boomverzorger-cta.jpg` |
| Zwembadinstallateurs | `assurman-verzekeringen-bouwsector-zwembadinstallateur-hero.jpg` | `verzekeringen-bouwsector-zwembadinstallateur-why.jpg` | `verzekeringen-bouwsector-zwembadinstallateur-cta.jpg` |

### Case-beelden (in `public/images/cases/`)
Conventie dakwerkers: `case-dakwerkers-1.jpg` t/m `-4.jpg`.

- Tuinaannemers: `case-tuinaannemers-1.jpg` … `case-tuinaannemers-4.jpg`
- Hoveniers: `case-hoveniers-1.jpg` … `case-hoveniers-4.jpg`
- Boomverzorgers: `case-boomverzorgers-1.jpg` … `case-boomverzorgers-4.jpg`
- Zwembadinstallateurs: `case-zwembadinstallateurs-1.jpg` … `case-zwembadinstallateurs-4.jpg`

**Totaal: 12 mask-foto's + 16 case-beelden = 28 beelden.** Tot ze er zijn: blokker op "klaar".

---
---

# 1. TUINAANNEMERS — slug `tuinaannemers`

> Rode draad: **werf + zware machines + graafwerk**. Tuinaanleg, terrassen, opritten,
> afsluitingen, drainage, totaalprojecten buiten. Risico's: verzakkend/slecht afwaterend
> terras, een geraakte leiding bij graven, machineschade aan de minigraver.

## META
- **title** (~55): `Verzekeringen voor tuinaannemers in Vlaanderen`
- **description** (~150): `Graafwerk, terrassen, opritten en zware machines: tuinaannemers lopen specifieke risico's. Assurman bouwt een bouwverzekering op maat van jouw stiel.`
- **canonical**: `/sectoren/tuinaannemers`
- **hoofdzoekterm**: `verzekering tuinaannemer`
- **secundair**: `BA tuinaannemer`, `machineverzekering minigraver`, `verzekering tuinaanleg`

## HERO
- **H1**: `Verzekeringen voor tuinaannemers`
- **gouden subzin**: `Stevig verzekerd, van graafwerk tot afwerking.`
- **intro**: `Als tuinaannemer werk je met zwaar materieel, graaf je in onbekende grond en lever je projecten op die jaren mee moeten. Eén geraakte leiding, een verzakkend terras of een dag stilstand door machinepech kan je flink wat kosten. Assurman is gespecialiseerd in verzekeringen op maat van bouwondernemers in Vlaanderen.`
- **hero-foto-alt**: `Tuinaannemer legt een terras aan met een minigraver op de achtergrond`

## 4 KEY-FEATURES (witte kaartjes, 2 regels, `white-space:pre-line`)
1. `Specialist in\ntuinaanleg & bouw`
2. `Dekking voor werf\n+ machines + graafwerk`
3. `Modulair pakket:\nenkel wat nodig is`
4. `Duidelijke uitleg,\nsnelle service`

## INTRO / POSITIONERING
- **H2**: `Waarom een tuinaannemer een specialist nodig heeft`
- **alinea 1**: `Tuinaanleg is geen standaard tuinwerk. Je graaft funderingen voor terrassen en opritten, legt drainage en kabelgoten, en je manoeuvreert met minigravers, trilplaten en kranen op terreinen die je niet altijd kent. Eén ondergrondse leiding die je raakt of één terras dat na een natte winter verzakt, kan al leiden tot een schadeclaim of dagenlange stilstand.`
- **alinea 2**: `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: type projecten (terras, oprit, totaaltuin), machinepark, personeel, onderaannemers, regio en risicoprofiel. Zo betaal je voor wat je echt nodig hebt, niet voor wat je nooit gebruikt.`
- **blockquote**: `"Jij legt aan, wij zorgen dat één tegenslag op de werf je project niet onderuithaalt."`
- **3 why-cards**:
  1. `Graafwerk & ondergrond` — `Raak je een nutsleiding of zorgt slechte afwatering voor schade? Met BA + rechtsbijstand sta je niet alleen.`
  2. `Zware machines` — `Bescherming voor minigraver, trilplaat en kraan, zodat machinepech je planning niet stillegt.`
  3. `Werf & aansprakelijkheid` — `Met BA en ABR dek je de risico's die je het vaakst tegenkomt tijdens de uitvoering.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet waarvoor je verzekerd bent en waarom.`
2. `Slimme modules` — `Voeg toe wat jij nodig hebt: werfdekking, machines, mobiliteit, rechtsbijstand.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw projecten.`
4. `Bouw-expertise` — `We spreken jouw taal: terras, fundering, drainage, klinkers, beplanting.`

## insuranceCards (6 slugs)
`kaartenVoor(['ba-onderneming', 'alle-bouwplaats-risicos', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'rechtsbijstand'])`
- **sectionLabel**: `Het Tuinaannemerspakket`
- **headline**: `Jouw tuinaannemerspakket: de belangrijkste verzekeringen`
- **subheadline**: `Dit zijn de kernblokken voor de meeste tuinaannemers. Daarna verfijnen we met extra modules waar nodig.`
- waarom-zinnen (begeleidend):
  - ba-onderneming: `Voor schade aan eigendom van de klant of buren tijdens aanleg en graafwerk.`
  - alle-bouwplaats-risicos: `Voor onvoorziene schade aan je werk in uitvoering, zeker bij grotere totaalprojecten.`
  - machinebreuk: `Voor plotse defecten of diefstal van minigraver, trilplaat en kraan.`
  - bedrijfsvoertuigen: `Zonder bestelwagen of aanhanger met machines sta je stil.`
  - arbeidsongevallen: `Wettelijk verplicht zodra je personeel of helpers inzet op de werf.`
  - rechtsbijstand: `Voor geschillen over een verzakt terras, afwatering of een betwiste oplevering.`

## 4 CASE STUDIES (category = `TUINAANLEG`)
1. **title**: `Verzakt terras na natte winter leidt tot €22.000 herstelclaim` — **businessName**: `Groentuin Aanleg` — **ownerName**: `Wim Dhondt` — **cityName**: `Aalst` — **description**: `Een ruim terras in keramische tegels begon na de eerste natte winter zichtbaar te verzakken aan één zijde. De klant weet dit aan een fout in de onderbouw en eiste volledige heraanleg.` — **action**: `Via de BA-verzekering en rechtsbijstand werd een onafhankelijk expert ingeschakeld die de fundering en afwatering beoordeelde. Na bemiddeling werd een gedeeld herstel afgesproken. De verzekering dekte de juridische kosten en een deel van de werken, zodat het conflict niet escaleerde.`
2. **title**: `Geraakte nutsleiding bij graafwerk kost €9.500 aan herstel en stilstand` — **businessName**: `Buiten in Balans` — **ownerName**: `Karen Lievens` — **cityName**: `Lokeren` — **description**: `Tijdens het graven van een fundering voor een oprit werd een niet correct ingetekende waterleiding geraakt. De straat liep blank en de nutsmaatschappij stuurde een factuur voor het herstel.` — **action**: `De BA-verzekering ving de schade aan derden op en rechtsbijstand begeleidde de discussie over de aansprakelijkheid en de plannen van de nutsleidingen. De zaakvoerder kon doorwerken zonder dat de factuur zijn marge opat.`
3. **title**: `Defecte minigraver legt totaalproject 6 dagen stil, €7.000 impact` — **businessName**: `TuinTotaal West` — **ownerName**: `Bert Vanhecke` — **cityName**: `Tielt` — **description**: `Midden in een totaaltuinproject viel de minigraver uit met een hydraulisch defect. Zonder de machine lag het grondwerk volledig stil en liep de planning van de klant in het gedrang.` — **action**: `Via de machinebreukdekking werd de herstelling snel afgehandeld en kon een vervangmachine ingezet worden. Het project liep beperkte vertraging op in plaats van weken, en de afgesproken opleverdatum bleef grotendeels overeind.`
4. **title**: `Storm beschadigt geleverde klinkers en beplanting op de werf, €11.000` — **businessName**: `De Groene Hand` — **ownerName**: `Sofie Maes` — **cityName**: `Dendermonde` — **description**: `Geleverde sierklinkers, boordstenen en plantgoed lagen klaar op de werf in afwachting van plaatsing toen een onverwachte storm en wateroverlast een groot deel onbruikbaar maakten.` — **action**: `Via de ABR-dekking werd de schade aan de werken in uitvoering en de materialen op de werf vergoed. Nieuwe leveringen werden versneld geregeld en het project liep slechts enkele dagen vertraging op.`

## FAQ (mensentaal)
1. **Welke risico's heeft een tuinaannemer het meest?** — `De grootste risico's komen meestal uit 4 hoeken:\n\n• Aansprakelijkheid: schade aan eigendom van de klant of de buren (verzakking, beschadigde verharding, een geraakte leiding).\n\n• Werfrisico's: onvoorziene schade aan je werk in uitvoering, zeker bij grotere totaalprojecten.\n\n• Machines: een defecte of gestolen minigraver legt je grondwerk meteen stil.\n\n• Mobiliteit: zonder bestelwagen of aanhanger met je materieel sta je stil.\n\nDaarom is een basis met BA + ABR + machines + bestelwagen voor veel tuinaannemers een logische start.`
2. **Wat is het verschil tussen BA en ABR?** — `BA (Burgerlijke Aansprakelijkheid) gaat over schade die je aan anderen veroorzaakt: aan eigendom van de klant, aan buren of aan derden op de werf.\n\nABR (Alle Bouwplaatsrisico's) focust op je werk in uitvoering: onvoorziene schade aan de werken zelf en aan materialen op de werf. Dat is vooral interessant bij grotere of langere projecten.\n\nIn de praktijk vullen ze elkaar aan. Assurman helpt je kiezen wat in jouw situatie écht nodig is.`
3. **Ben ik gedekt als ik een ondergrondse leiding raak?** — `Schade aan nutsleidingen valt doorgaans onder je BA-aansprakelijkheid tegenover derden. De exacte voorwaarden hangen af van je polis en of je de nodige opzoekingen deed. Dit is een punt dat we bij je intake concreet nakijken, zodat je weet waar je staat voor je de eerste schop in de grond zet.`
4. **Zijn mijn machines verzekerd tegen pech en diefstal?** — `Met een machinebreukpolis dek je plotse defecten, beschadiging en diefstal van je materieel, of het nu op de werf, in de bestelwagen of in het atelier staat. We stemmen de dekking af op de waarde van je machinepark en waar je het bewaart.`
5. **Kan ik mijn pakket later uitbreiden?** — `Ja. Veel tuinaannemers starten met een kernpakket en breiden uit wanneer ze personeel aannemen, grotere werven doen of meer machines vervoeren. Assurman bouwt modulair: je groeit zonder telkens van nul te starten.`
6. **Ik werk met onderaannemers. Wat betekent dat?** — `Dat kan invloed hebben op de afspraken rond aansprakelijkheid op de werf. Geef het aan bij je intake, dan bekijken we welke dekking en voorwaarden het best passen.`

## PROCESS (4 stappen — identiek stramien als dakwerkers)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, kosten en werfrealiteit grondig.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw projecten.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`
- slot-blok: `Geen gedoe. Wel controle.` / `Jij beslist. Wij zorgen dat je verzekering past bij jouw stiel.`

## TUSSEN-CTA (H2)
`Tuinaannemer in Vlaanderen?<br />Wij maken jouw pakket op maat.`
- subzin: `Start nu in 2 minuten of kies meteen voor advies.`

## 3 TESTIMONIALS (geanonimiseerd, 5/5)
1. `Eindelijk iemand die snapt wat graafwerk en een werf inhouden. Helder uitgelegd en snel geregeld.` — `Zaakvoerder, tuinaanleg (Oost-Vlaanderen)`
2. `Ik wou vooral mijn machines en de aansprakelijkheid goed dekken. Alles op maat gezet, zonder gedoe.` — `Tuinaannemer, West-Vlaanderen`
3. `De aanvraag ging vlot en daarna hebben we het pakket echt afgestemd op mijn projecten.` — `Zelfstandig tuinaannemer`

---
---

# 2. HOVENIERS — slug `hoveniers`

> Rode draad: **onderhoud bij de klant + materieel onderweg**. Tuinonderhoud, beplanting,
> gazon, snoeiwerk. Risico's: schade aan eigendom van de klant (steenworp van de maaier
> tegen raam of auto), gestolen materiaal uit de bestelwagen, geschil over gazon/beplanting.
> Aandachtspunt: **fytolicentie** bij professioneel gebruik van gewasbescherming (controlepunt).

## META
- **title** (~52): `Verzekeringen voor hoveniers in Vlaanderen`
- **description** (~150): `Maaien, snoeien en beplanten bij de klant thuis: één steenworp of gestolen materieel kost je geld. Assurman bouwt een verzekering op maat van je hoveniersstiel.`
- **canonical**: `/sectoren/hoveniers`
- **hoofdzoekterm**: `verzekering hovenier`
- **secundair**: `BA hovenier`, `verzekering tuinonderhoud`, `materiaalverzekering hovenier`

## HERO
- **H1**: `Verzekeringen voor hoveniers`
- **gouden subzin**: `Beschermd bij de klant en onderweg.`
- **intro**: `Als hovenier werk je dag in dag uit bij mensen thuis: je maait, snoeit, plant en onderhoudt. Eén steentje dat van onder je maaier wegspringt, één gestolen bosmaaier uit de bestelwagen of één discussie over een gazon kan al voor kopzorgen zorgen. Assurman is gespecialiseerd in verzekeringen op maat van bouw- en tuinondernemers in Vlaanderen.`
- **hero-foto-alt**: `Hovenier maait een gazon in een onderhouden tuin`

## 4 KEY-FEATURES
1. `Specialist in\ntuinonderhoud & groen`
2. `Dekking bij de klant\n+ materieel onderweg`
3. `Modulair pakket:\nenkel wat nodig is`
4. `Duidelijke uitleg,\nsnelle service`

## INTRO / POSITIONERING
- **H2**: `Waarom een hovenier een specialist nodig heeft`
- **alinea 1**: `Tuinonderhoud lijkt onschuldig, maar je werkt voortdurend in en rond de eigendom van je klant. Een steentje dat van onder je maaier tegen een raam of een geparkeerde auto vliegt, een verkeerde snoei of een beplanting die niet aanslaat: het kan allemaal leiden tot een schadeclaim of een discussie over wie opdraait voor de kosten.`
- **alinea 2**: `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: soort opdrachten (onderhoud, aanplant, snoei), machinepark, personeel, hoeveel je onderweg bent en je risicoprofiel. Zo ben je gedekt waar het er voor een hovenier echt toe doet.`
- **blockquote**: `"Jij houdt tuinen in vorm, wij houden je beschermd als er onderweg iets misloopt."`
- **3 why-cards**:
  1. `Schade bij de klant` — `Een steenworp tegen een raam of auto? Met je BA sta je niet zelf voor de rekening.`
  2. `Materieel onderweg` — `Bescherming voor maaiers, bosmaaiers en gereedschap, ook tijdens transport en bij diefstal.`
  3. `Mobiliteit` — `Zonder bestelwagen en aanhanger sta je stil. We dekken je voertuig en je verplaatsingen.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet waarvoor je verzekerd bent en waarom.`
2. `Slimme modules` — `Voeg toe wat jij nodig hebt: aansprakelijkheid, materieel, mobiliteit, rechtsbijstand.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw opdrachten.`
4. `Groen-expertise` — `We spreken jouw taal: maaien, snoeien, aanplant, gazon, beplanting.`

## insuranceCards (6 slugs)
`kaartenVoor(['ba-onderneming', 'bedrijfsvoertuigen', 'machinebreuk', 'arbeidsongevallen', 'rechtsbijstand', 'vervoerde-goederen'])`
- **sectionLabel**: `Het Hovenierspakket`
- **headline**: `Jouw hovenierspakket: de belangrijkste verzekeringen`
- **subheadline**: `Dit zijn de kernblokken voor de meeste hoveniers. Daarna verfijnen we met extra modules waar nodig.`
- waarom-zinnen:
  - ba-onderneming: `Voor schade aan eigendom van de klant, zoals een steenworp tegen een raam of auto.`
  - bedrijfsvoertuigen: `Zonder bestelwagen en aanhanger met je materieel sta je stil.`
  - machinebreuk: `Voor plotse defecten of diefstal van maaiers, bosmaaiers en freesmachines.`
  - arbeidsongevallen: `Wettelijk verplicht zodra je personeel of seizoenshulp inzet.`
  - rechtsbijstand: `Voor geschillen over een gazon, beplanting of een betwiste opdracht.`
  - vervoerde-goederen: `Voor je materieel en gereedschap onderweg tussen de klanten.`

## 4 CASE STUDIES (category = `TUINONDERHOUD`)
1. **title**: `Steenworp van maaier verbrijzelt autoruit klant, €3.200 schade` — **businessName**: `Groen & Net` — **ownerName**: `Tom Verhaeghe` — **cityName**: `Deinze` — **description**: `Tijdens het maaien van een oprit sprong een steentje van onder de maaier weg en verbrijzelde de achterruit van de geparkeerde wagen van de klant. De klant eiste meteen vergoeding.` — **action**: `De BA-verzekering ving de schade aan het voertuig van de klant op. De zaakvoerder kon de situatie kalm afhandelen en de klant behouden, zonder zelf voor de rekening op te draaien.`
2. **title**: `Bosmaaier en kettingzaag gestolen uit bestelwagen, €4.800` — **businessName**: `TuinFris` — **ownerName**: `Nele Dewulf` — **cityName**: `Waregem` — **description**: `Tijdens een onderhoudsronde werd de bestelwagen opengebroken terwijl de zaakvoerder in een tuin werkte. Een bosmaaier, kettingzaag en handgereedschap waren in één klap weg.` — **action**: `Via de dekking voor vervoerde goederen en machinebreuk werd het gestolen materieel vergoed. Binnen enkele dagen lag er nieuw gereedschap klaar en kon de planning grotendeels gerespecteerd worden.`
3. **title**: `Aangelegd gazon slaat niet aan, klant betwist factuur van €5.500` — **businessName**: `Het Groene Pad` — **ownerName**: `Jurgen Claes` — **cityName**: `Geraardsbergen` — **description**: `Een nieuw aangelegd gazon kleurde na enkele weken bruin en kwam niet goed op. De klant weigerde de eindfactuur te betalen en eiste een volledige heraanleg op kosten van de hovenier.` — **action**: `Met rechtsbijstand werd de discussie onderbouwd met een onafhankelijke beoordeling van de grond en het onderhoud na aanleg. Er werd een redelijk compromis bereikt en de juridische kosten werden gedekt.`
4. **title**: `Snoeischade aan haag van de buur leidt tot €2.700 claim` — **businessName**: `Hovenij De Wilg` — **ownerName**: `Annick Peeters` — **cityName**: `Zottegem` — **description**: `Bij snoeiwerk in een tuin werd per vergissing een stuk van de aanpalende haag van de buur te ver teruggezet. De buur eiste een vergoeding voor de aangetaste afscherming.` — **action**: `De BA-verzekering ving de schade aan de eigendom van de buur op. Rechtsbijstand begeleidde de afhandeling zodat de zaak vlot en zonder verdere escalatie werd geregeld.`

## FAQ (mensentaal)
1. **Welke risico's heeft een hovenier het meest?** — `De grootste risico's komen meestal uit 4 hoeken:\n\n• Aansprakelijkheid: schade aan de eigendom van je klant of de buren (steenworp, snoeischade, beschadiging).\n\n• Materieel: diefstal van of schade aan je maaiers en gereedschap, vaak onderweg of uit de bestelwagen.\n\n• Geschillen: discussies over een gazon, beplanting of een betwiste factuur.\n\n• Mobiliteit: zonder bestelwagen en aanhanger sta je stil.\n\nDaarom is een basis met BA + materieel + bestelwagen + rechtsbijstand voor veel hoveniers een logische start.`
2. **Ben ik gedekt als een steentje van mijn maaier schade veroorzaakt?** — `Schade die je tijdens je werk aan de eigendom van een klant of derde veroorzaakt, valt doorgaans onder je BA-aansprakelijkheid. Een steenworp tegen een raam of auto is een klassiek voorbeeld. De exacte voorwaarden bekijken we samen bij je intake.`
3. **Is mijn materieel verzekerd als het uit mijn bestelwagen gestolen wordt?** — `Met een combinatie van machinebreuk en een dekking voor vervoerde goederen kan je je maaiers en gereedschap beschermen tegen diefstal en schade, ook onderweg en uit de bestelwagen. We stemmen de dekking af op de waarde van je materieel en hoe je het bewaart.`
4. **Heb ik een fytolicentie nodig en heeft dat invloed op mijn verzekering?** — `Voor het professioneel gebruik van gewasbeschermingsmiddelen geldt in België een fytolicentie-verplichting. Of dit voor jouw activiteiten van toepassing is en wat het betekent voor je dekking, nemen we mee in je intake. Dit is een punt dat we concreet met je nakijken.` *(controlepunt: zie tabel)*
5. **Kan ik mijn pakket later uitbreiden?** — `Ja. Veel hoveniers starten met een kernpakket en breiden uit wanneer ze personeel aannemen, meer materieel vervoeren of grotere aanplantprojecten doen. Assurman bouwt modulair: je groeit zonder telkens van nul te starten.`
6. **Ik werk met seizoenshulp. Telt dat als personeel?** — `Zodra je mensen voor je laat werken, ook tijdelijk of seizoensgebonden, is een arbeidsongevallenverzekering wettelijk verplicht. Geef je situatie aan bij je intake, dan zorgen we dat je correct in orde bent.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, kosten en werkrealiteit grondig.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw opdrachten.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`
- slot-blok: `Geen gedoe. Wel controle.` / `Jij beslist. Wij zorgen dat je verzekering past bij jouw stiel.`

## TUSSEN-CTA (H2)
`Hovenier in Vlaanderen?<br />Wij maken jouw pakket op maat.`
- subzin: `Start nu in 2 minuten of kies meteen voor advies.`

## 3 TESTIMONIALS (5/5)
1. `Snel geregeld en in mensentaal uitgelegd. Eindelijk een makelaar die mijn werk snapt.` — `Zaakvoerder, tuinonderhoud (Oost-Vlaanderen)`
2. `Ik wou vooral mijn materieel en de aansprakelijkheid bij de klant goed gedekt zien. Alles op maat.` — `Hovenier, West-Vlaanderen`
3. `De aanvraag verliep vlot en het pakket past nu echt bij hoe ik werk.` — `Zelfstandig hovenier`

---
---

# 3. BOOMVERZORGERS — slug `boomverzorgers`

> Rode draad: **fysiek risico op hoogte + schade door vallende takken/bomen**. Klimmen,
> snoeien en vellen op hoogte, rooien, versnipperen. **Hoogste fysieke risico van het
> cluster.** Risico's: een vallende tak die op een dak, wagen of serre terechtkomt, een
> klimongeval, schade aan een naburig perceel. Daarom extra accent op **arbeidsongevallen
> + gewaarborgd inkomen + BA** als rode draad. Aandachtspunt: **ETW (European Tree Worker)
> certificaat** (controlepunt).

## META
- **title** (~57): `Verzekeringen voor boomverzorgers in Vlaanderen`
- **description** (~150): `Klimmen, snoeien op hoogte en vellen: boomverzorgers lopen het hoogste fysieke risico. Assurman dekt je aansprakelijkheid, je mensen en je inkomen op maat.`
- **canonical**: `/sectoren/boomverzorgers`
- **hoofdzoekterm**: `verzekering boomverzorger`
- **secundair**: `BA boomverzorger`, `arbeidsongevallen boomverzorging`, `gewaarborgd inkomen boomverzorger`

## HERO
- **H1**: `Verzekeringen voor boomverzorgers`
- **gouden subzin**: `Beschermd op hoogte, in de boom en eronder.`
- **intro**: `Als boomverzorger doe je werk waar weinig anderen aan beginnen: klimmen, snoeien op hoogte, vellen en rooien. Het is fysiek het zwaarste en risicovolste werk in de groensector. Eén vallende tak op een dak of een geparkeerde wagen, één misstap in de boom: de gevolgen kunnen groot zijn, voor jezelf en voor anderen. Assurman is gespecialiseerd in verzekeringen op maat van bouw- en groenondernemers in Vlaanderen.`
- **hero-foto-alt**: `Boomverzorger zekert zich in de kruin van een boom tijdens snoeiwerk`

## 4 KEY-FEATURES
1. `Specialist in\nboomverzorging & groen`
2. `Dekking op hoogte\n+ je inkomen beschermd`
3. `Modulair pakket:\nenkel wat nodig is`
4. `Duidelijke uitleg,\nsnelle service`

## INTRO / POSITIONERING
- **H2**: `Waarom een boomverzorger een specialist nodig heeft`
- **alinea 1**: `Boomverzorging is geen standaard groenwerk. Je werkt op hoogte, in de kruin, met klimtechniek en kettingzagen, vaak vlak bij gebouwen, daken, serres en geparkeerde wagens. Eén tak die verkeerd valt of één misrekening bij een velling kan grote schade veroorzaken aan andermans eigendom. En omdat je het met je lichaam doet, raakt een ongeval niet alleen je werk, maar ook je inkomen.`
- **alinea 2**: `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: type werken (snoei, velling, rooiing), klimwerk, personeel, machinepark en je risicoprofiel. Bij boomverzorging leggen we extra nadruk op je aansprakelijkheid voor vallende takken, op je arbeidsongevallendekking en op een gewaarborgd inkomen als je zelf uitvalt.`
- **blockquote**: `"Jij werkt op hoogte met risico, wij zorgen dat één val je bedrijf en je inkomen niet meesleurt."`
- **3 why-cards**:
  1. `Vallende takken & bomen` — `Een tak op een dak, wagen of serre? Je BA dekt de schade die je aan andermans eigendom veroorzaakt.`
  2. `Werken op hoogte` — `Klimwerk is fysiek het zwaarst. Arbeidsongevallen en valbeveiliging staan hier centraal.`
  3. `Je inkomen beschermd` — `Val je zelf uit door een ongeval? Met gewaarborgd inkomen blijft je gezinsbudget overeind.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet waarvoor je verzekerd bent en waarom.`
2. `Focus op fysiek risico` — `We zetten je aansprakelijkheid, je mensen en je inkomen centraal, want dat telt hier het zwaarst.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw klim- en velwerk.`
4. `Groen-expertise` — `We spreken jouw taal: klimwerk, kroonreductie, velling, rooiing, versnipperen.`

## insuranceCards (6 slugs)
`kaartenVoor(['ba-onderneming', 'arbeidsongevallen', 'gewaarborgd-inkomen', 'machinebreuk', 'bedrijfsvoertuigen', 'rechtsbijstand'])`
- **sectionLabel**: `Het Boomverzorgerspakket`
- **headline**: `Jouw boomverzorgerspakket: de belangrijkste verzekeringen`
- **subheadline**: `Dit zijn de kernblokken voor de meeste boomverzorgers. Omdat dit fysiek het zwaarste groenwerk is, leggen we extra nadruk op je mensen en je inkomen.`
- waarom-zinnen:
  - ba-onderneming: `Voor schade door een vallende tak of boom op een dak, wagen, serre of naburig perceel.`
  - arbeidsongevallen: `Onmisbaar bij klimwerk en werken op hoogte, het hoogste risico in dit beroep.`
  - gewaarborgd-inkomen: `Val je zelf uit door ziekte of ongeval, dan blijft er een maandelijks inkomen.`
  - machinebreuk: `Voor plotse defecten of diefstal van kettingzaag, klimmateriaal en versnipperaar.`
  - bedrijfsvoertuigen: `Zonder bestelwagen, aanhanger en versnipperaar onderweg sta je stil.`
  - rechtsbijstand: `Voor geschillen over schade aan andermans eigendom of een betwiste velling.`

## 4 CASE STUDIES (category = `BOOMVERZORGING`)
1. **title**: `Vallende tak beschadigt dak van de buur, €16.000 herstelclaim` — **businessName**: `Boomzorg Vandeput` — **ownerName**: `Dirk Vandeput` — **cityName**: `Hasselt` — **description**: `Bij het inkorten van een grote beuk brak een zware tak anders af dan voorzien en kwam op het dak van de aanpalende woning terecht. Dakpannen en een dakgoot raakten zwaar beschadigd.` — **action**: `De BA-verzekering ving de schade aan de eigendom van de buur op. Rechtsbijstand begeleidde de afhandeling met de buur en hun verzekeraar, zodat het herstel vlot werd geregeld en de zaakvoerder zijn reputatie behield.`
2. **title**: `Klimongeval legt zaakvoerder 5 maanden plat, inkomen weg` — **businessName**: `Arbo Climb` — **ownerName**: `Stijn Goossens` — **cityName**: `Genk` — **description**: `Tijdens een kroonreductie viel de zaakvoerder ongelukkig en liep een ernstige beenbreuk op. Maandenlang klimwerk was onmogelijk en de inkomsten vielen grotendeels stil.` — **action**: `De arbeidsongevallendekking ving de medische kosten op en het gewaarborgd inkomen zorgde voor een maandelijks vervangingsinkomen. Daardoor bleven de vaste lasten en het gezinsbudget overeind tijdens het herstel.`
3. **title**: `Velling beschadigt serre op naburig perceel, €8.900` — **businessName**: `De Boomklever` — **ownerName**: `Liesbeth Maes` — **cityName**: `Sint-Truiden` — **description**: `Een geplande velling van een aangetaste populier liep mis door een onverwachte windvlaag. De boom kwam deels op de serre van het naburige perceel terecht en vernielde een groot deel van de constructie en de beplanting erin.` — **action**: `Via de BA-verzekering werd de schade aan het naburige perceel vergoed. Rechtsbijstand hielp de aansprakelijkheid correct af te bakenen, zodat het geschil zonder escalatie werd opgelost.`
4. **title**: `Versnipperaar valt uit en kettingzaag gestolen, €6.300 impact` — **businessName**: `TreeCare Limburg` — **ownerName**: `Pieter Aerts` — **cityName**: `Tongeren` — **description**: `Een hydraulisch defect legde de versnipperaar stil midden in een grote snoeiopdracht, en kort daarna werd een professionele kettingzaag uit de aanhanger gestolen. De combinatie zette de planning onder druk.` — **action**: `Via de machinebreukdekking werden de herstelling en het gestolen materieel afgehandeld. Met vervangmateriaal kon de opdracht doorgaan en bleef de vertraging beperkt.`

## FAQ (mensentaal)
1. **Waarom is boomverzorging zo'n risicoberoep voor verzekeringen?** — `Omdat twee risico's hier samenkomen die elders zelden zo zwaar wegen:\n\n• Schade aan derden: je werkt op hoogte vlak bij daken, wagens en serres. Een tak die verkeerd valt, veroorzaakt snel grote schade aan andermans eigendom.\n\n• Fysiek risico: klimwerk is lichamelijk zwaar en gevaarlijk. Een ongeval raakt niet alleen je gezondheid, maar ook je inkomen.\n\nDaarom leggen we de nadruk op BA, arbeidsongevallen en gewaarborgd inkomen.`
2. **Ben ik gedekt als een tak op een dak of auto valt?** — `Schade die je tijdens je werk aan de eigendom van een klant of een derde veroorzaakt, zoals een vallende tak op een dak, wagen of serre, valt doorgaans onder je BA-aansprakelijkheid. De exacte voorwaarden, zeker bij vellingen en risicovol klimwerk, bekijken we samen bij je intake.`
3. **Wat gebeurt er met mijn inkomen als ik zelf uitval?** — `Als zelfstandige val je bij arbeidsongeschiktheid vaak terug op een beperkte uitkering. Met een gewaarborgd inkomen krijg je een maandelijks vervangingsinkomen, zodat je je vaste lasten en gezinsuitgaven kunt blijven betalen terwijl je herstelt. Bij een fysiek beroep als het jouwe is dat geen luxe.`
4. **Heeft een ETW- of klimcertificaat invloed op mijn dossier?** — `Certificaten zoals ETW (European Tree Worker) tonen je vakbekwaamheid en kunnen meespelen in hoe je dossier en je risicoprofiel beoordeeld worden. Of en hoe dit voor jouw situatie meetelt, nemen we mee in je intake. Dit is een punt dat we concreet met je nakijken.` *(controlepunt: zie tabel)*
5. **Is arbeidsongevallenverzekering verplicht als ik alleen werk?** — `Als zuivere eenmanszaak zonder personeel ben je niet onderworpen aan de wettelijke arbeidsongevallenverzekering voor werknemers, maar je eigen fysieke risico blijft hoog. Daarom kijken we naar passende dekkingen voor jezelf, zoals een ongevallenverzekering en gewaarborgd inkomen. Werk je met helpers of personeel, dan is arbeidsongevallen wel verplicht.`
6. **Zijn mijn klimmateriaal en kettingzagen verzekerd?** — `Met een machinebreukpolis dek je plotse defecten, beschadiging en diefstal van je materieel, van kettingzaag tot versnipperaar en klimuitrusting. We stemmen de dekking af op de waarde en op waar je het bewaart.`
7. **Kan ik mijn pakket later uitbreiden?** — `Ja. Veel boomverzorgers starten met een kernpakket en breiden uit wanneer ze personeel aannemen of grotere vellingen aanpakken. Assurman bouwt modulair: je groeit zonder telkens van nul te starten.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, je fysieke risico en je werkrealiteit grondig.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, met extra aandacht voor je mensen en je inkomen.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`
- slot-blok: `Geen gedoe. Wel controle.` / `Jij beslist. Wij zorgen dat je verzekering past bij jouw stiel.`

## TUSSEN-CTA (H2)
`Boomverzorger in Vlaanderen?<br />Wij maken jouw pakket op maat.`
- subzin: `Start nu in 2 minuten of kies meteen voor advies.`

## 3 TESTIMONIALS (5/5)
1. `Eindelijk een makelaar die het risico van klimwerk echt snapt. Helder en snel geregeld.` — `Zaakvoerder, boomverzorging (Limburg)`
2. `Ik wou vooral mijn aansprakelijkheid en mijn inkomen goed gedekt zien. Precies op maat gezet.` — `Boomverzorger, Vlaams-Brabant`
3. `De aanvraag ging vlot en het pakket houdt rekening met hoe zwaar mijn werk fysiek is.` — `Zelfstandig boomverzorger`

---
---

# 4. ZWEMBADINSTALLATEURS — slug `zwembadinstallateurs`

> Rode draad: **tienjarige aansprakelijkheid (BA-10) op constructie en waterdichtheid**.
> Aanleg en installatie van zwembaden, technische ruimte, waterbehandeling. Risico's: een
> lekkend of scheurend bad, waterschade in de technische ruimte, een geschil over de
> waterdichtheid of afwerking. **BA-10 als rode draad**, omdat constructie- en
> waterdichtheidsgebreken zich pas jaren later kunnen tonen. Aandachtspunt: **BA-10 /
> tienjarige aansprakelijkheid** als verplichting bij verbonden bouwwerk (controlepunt).

## META
- **title** (~58): `Verzekeringen voor zwembadinstallateurs in Vlaanderen`
- **description** (~150): `Een lekkend bad of betwiste waterdichtheid kan jaren later opduiken. Assurman dekt zwembadinstallateurs met tienjarige aansprakelijkheid en een pakket op maat.`
- **canonical**: `/sectoren/zwembadinstallateurs`
- **hoofdzoekterm**: `verzekering zwembadinstallateur`
- **secundair**: `tienjarige aansprakelijkheid zwembad`, `BA-10 zwembad`, `verzekering zwembadbouw`

## HERO
- **H1**: `Verzekeringen voor zwembadinstallateurs`
- **gouden subzin**: `Waterdicht verzekerd, jaren na de oplevering.`
- **intro**: `Als zwembadinstallateur bouw je iets dat waterdicht moet blijven en jaren mee moet. Een scheur in het bad, een lek in de technische ruimte of een discussie over de afwerking kan opduiken lang nadat je de werf verlaten hebt. Daarom is tienjarige aansprakelijkheid voor jouw stiel geen detail. Assurman is gespecialiseerd in verzekeringen op maat van bouwondernemers in Vlaanderen.`
- **hero-foto-alt**: `Zwembadinstallateur werkt aan de afwerking van een nieuw aangelegd zwembad`

## 4 KEY-FEATURES
1. `Specialist in\nzwembadbouw & bouw`
2. `Tienjarige dekking\nop constructie & waterdichtheid`
3. `Modulair pakket:\nenkel wat nodig is`
4. `Duidelijke uitleg,\nsnelle service`

## INTRO / POSITIONERING
- **H2**: `Waarom een zwembadinstallateur een specialist nodig heeft`
- **alinea 1**: `Een zwembad aanleggen is geen gewone bouwklus. Je werkt met constructie, waterdichting, technische ruimtes, leidingen, pompen en waterbehandeling. En het bijzondere: een gebrek toont zich vaak niet meteen. Een scheurtje, een lekkende doorvoer of een fout in de waterdichting kan pas na één of meerdere seizoenen aan het licht komen, soms jaren na de oplevering.`
- **alinea 2**: `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: type baden (inox, polyester, beton), aandeel renovatie, technische installaties, personeel en je risicoprofiel. Voor zwembaden staat de tienjarige aansprakelijkheid (BA-10) centraal, omdat constructie- en waterdichtheidsgebreken nu net het soort risico zijn dat zich laat in de tijd kan tonen.`
- **blockquote**: `"Jij levert een bad dat jaren mee moet, wij zorgen dat je ook jaren later beschermd bent."`
- **3 why-cards**:
  1. `Tienjarige aansprakelijkheid` — `Constructie- en waterdichtheidsgebreken kunnen jaren later opduiken. BA-10 staat hier centraal.`
  2. `Werf & uitvoering` — `Met BA en ABR dek je de schade en risico's tijdens de aanleg zelf.`
  3. `Stilstand & herstel` — `Loopt een schadegeval uit op stilstand of herstel? We denken mee over bedrijfsschade en machines.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet waarvoor je verzekerd bent en waarom.`
2. `Focus op de lange termijn` — `Bij zwembaden telt wat zich jaren later kan tonen. We zetten tienjarige aansprakelijkheid centraal.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw baden en installaties.`
4. `Bouw-expertise` — `We spreken jouw taal: waterdichting, technische ruimte, doorvoeren, pompen, waterbehandeling.`

## insuranceCards (6 slugs)
`kaartenVoor(['ba-10', 'alle-bouwplaats-risicos', 'ba-onderneming', 'bedrijfsschade', 'rechtsbijstand', 'arbeidsongevallen'])`
- **sectionLabel**: `Het Zwembadinstallateurspakket`
- **headline**: `Jouw zwembadpakket: de belangrijkste verzekeringen`
- **subheadline**: `Dit zijn de kernblokken voor de meeste zwembadinstallateurs. Omdat gebreken zich laat kunnen tonen, staat de tienjarige aansprakelijkheid centraal.`
- waarom-zinnen:
  - ba-10: `Voor constructie- en waterdichtheidsgebreken die zich pas jaren na de oplevering tonen.`
  - alle-bouwplaats-risicos: `Voor onvoorziene schade aan het bad in uitvoering, zeker bij grotere werven.`
  - ba-onderneming: `Voor schade aan eigendom van de klant of buren tijdens de aanleg.`
  - bedrijfsschade: `Vangt je omzetverlies op als een schadegeval je werf of werking stillegt.`
  - rechtsbijstand: `Voor geschillen over waterdichtheid, afwerking of een betwiste oplevering.`
  - arbeidsongevallen: `Wettelijk verplicht zodra je personeel of helpers inzet op de werf.`

> **Build-noot:** de richtlijn noemt "bedrijfsschade óf machinebreuk". Hier is **bedrijfsschade**
> gekozen omdat een lekkend bad of waterschade in de technische ruimte vaker tot stilstand en
> omzetverlies leidt dan tot pure machinepech. Wil je machinebreuk verkiezen, vervang dan de
> slug in de `kaartenVoor`-array en de bijhorende waarom-zin.

## 4 CASE STUDIES (category = `ZWEMBADBOUW`)
1. **title**: `Scheur in betonbad veroorzaakt lek, €34.000 herstel twee jaar na oplevering` — **businessName**: `AquaBouw Vlaanderen` — **ownerName**: `Geert Dewaele` — **cityName**: `Roeselare` — **description**: `Twee jaar na de oplevering ontstond een scheur in de betonkuip waardoor het bad water verloor. De klant stelde de installateur aansprakelijk voor een constructiegebrek en eiste volledig herstel.` — **action**: `Via de tienjarige aansprakelijkheid (BA-10) werd het constructiegebrek beoordeeld door een expert en werd het herstel grotendeels gedekt. Rechtsbijstand begeleidde de discussie over de oorzaak, zodat de zaakvoerder niet zelf voor de volledige factuur stond.`
2. **title**: `Lek in technische ruimte richt €12.500 waterschade aan` — **businessName**: `PoolTech West` — **ownerName**: `Hannelore Vlaeminck` — **cityName**: `Izegem` — **description**: `Een lekkende koppeling in de technische ruimte zorgde voor wateroverlast die de pompinstallatie en een deel van de afwerking aantastte. De klant claimde herstel en gederfd gebruik van het zwembad.` — **action**: `De BA-verzekering ving de schade op en met de bedrijfsschadedekking werd de impact van de stilstand verzacht. Het herstel werd snel georganiseerd, zodat het bad weer in gebruik kon worden genomen.`
3. **title**: `Geschil over waterdichtheid liner blokkeert eindfactuur van €18.000` — **businessName**: `Zwembaden De Meyer` — **ownerName**: `Frank De Meyer` — **cityName**: `Waregem` — **description**: `Na de aanleg betwistte de klant de waterdichtheid van de afwerking en hield een groot deel van de eindfactuur in tot er volgens hem een sluitende oplossing was.` — **action**: `Met rechtsbijstand werd een onafhankelijke beoordeling van de waterdichtheid en de afwerking opgestart. Op basis daarvan werd een redelijk compromis bereikt en werden de juridische kosten gedekt.`
4. **title**: `Storm beschadigt zwembad in aanbouw en geleverd materiaal, €15.000` — **businessName**: `BlueLine Pools` — **ownerName**: `Steven Carlier` — **cityName**: `Kortrijk` — **description**: `Tijdens de ruwbouwfase van een zwembad zorgde een hevige storm met wateroverlast voor schade aan de kuip in uitvoering en aan geleverde technische installaties die klaar lagen op de werf.` — **action**: `Via de ABR-dekking werd de schade aan de werken in uitvoering en de materialen op de werf vergoed. Nieuwe leveringen werden versneld geregeld zodat het project beperkt vertraging opliep.`

## FAQ (mensentaal)
1. **Waarom is tienjarige aansprakelijkheid (BA-10) zo belangrijk bij zwembaden?** — `Omdat de typische gebreken bij een zwembad zich vaak laat tonen. Een scheur, een lek of een fout in de waterdichting kan pas na één of meerdere seizoenen opduiken, soms jaren na de oplevering. Tienjarige aansprakelijkheid dekt net dat soort stabiliteits- en soliditeitsgebreken over een lange periode. Voor jouw stiel is dat geen detail, maar een kern.`
2. **Ben ik verplicht om een BA-10 te hebben?** — `De tienjarige aansprakelijkheid is in België verplicht voor werken die de stabiliteit of soliditeit van een woning raken. Of en in welke mate dat op jouw zwembadwerken van toepassing is, hangt af van het type werk en de verbondenheid met het gebouw. Dit is een punt dat we concreet met je nakijken bij je intake.` *(controlepunt: zie tabel)*
3. **Wat is het verschil tussen BA, ABR en BA-10?** — `BA (Burgerlijke Aansprakelijkheid) gaat over schade aan derden tijdens je werk. ABR (Alle Bouwplaatsrisico's) dekt onvoorziene schade aan het bad in uitvoering op de werf. BA-10 (tienjarige aansprakelijkheid) komt pas later in beeld: voor zware constructie- en waterdichtheidsgebreken tot tien jaar na de oplevering. Bij zwembaden vullen die drie elkaar aan.`
4. **Wat als de klant de waterdichtheid betwist?** — `Dat is een klassiek geschil bij zwembaden. Met rechtsbijstand kan je een onafhankelijke beoordeling laten opstarten en worden je juridische kosten gedekt. Vaak leidt dat tot een onderbouwd compromis in plaats van een slepende procedure.`
5. **Wat als een schadegeval mijn werf stillegt?** — `Loopt een schadegeval uit op stilstand, dan kan een bedrijfsschadeverzekering je omzetverlies en vaste kosten mee opvangen. Zo blijft een tegenslag op één werf niet je hele werking en cashflow raken.`
6. **Kan ik mijn pakket later uitbreiden?** — `Ja. Veel zwembadinstallateurs starten met een kernpakket rond aansprakelijkheid en werf, en breiden uit wanneer ze personeel aannemen, meer renovaties doen of complexere installaties plaatsen. Assurman bouwt modulair: je groeit zonder telkens van nul te starten.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, je werk rond waterdichtheid en je werfrealiteit grondig.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, met de tienjarige aansprakelijkheid als kern.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`
- slot-blok: `Geen gedoe. Wel controle.` / `Jij beslist. Wij zorgen dat je verzekering past bij jouw stiel.`

## TUSSEN-CTA (H2)
`Zwembadinstallateur in Vlaanderen?<br />Wij maken jouw pakket op maat.`
- subzin: `Start nu in 2 minuten of kies meteen voor advies.`

## 3 TESTIMONIALS (5/5)
1. `Eindelijk een makelaar die snapt dat een gebrek bij een zwembad pas jaren later kan opduiken.` — `Zaakvoerder, zwembadbouw (West-Vlaanderen)`
2. `De tienjarige aansprakelijkheid hadden we onderschat. Nu zit dat correct geregeld.` — `Zwembadinstallateur, Oost-Vlaanderen`
3. `Vlotte aanvraag en een pakket dat echt rekening houdt met waterdichtheid en herstel.` — `Zelfstandig zwembadinstallateur`

---
---

# CONTROLEPUNTEN (alle 4 beroepen)

> **Alle cases hieronder zijn fictief-illustratief.** Bedragen, bedrijfs- en persoonsnamen
> zijn verzonnen voor illustratie en verwijzen niet naar echte klanten of dossiers.
> Markeer elke regel hieronder als **controlepunt**: laat een mens (Benoit/Maaike) de
> juridische of beroepsspecifieke claim bevestigen vóór publicatie. **Geen wettelijke
> cijfers of regelnummers verzonnen** in dit document. Prefix: TA = tuinaannemers,
> HO = hoveniers, BV = boomverzorgers, ZW = zwembadinstallateurs.

| ID | Beroep | Fictieve case (illustratief) | Pakket | Claim die bevestiging vraagt | Status |
|---|---|---|---|---|---|
| TA-1 | Tuinaannemer | Verzakt terras, €22.000 (Wim Dhondt, Aalst) | BA + rechtsbijstand | Valt een verzakking door fout in de onderbouw onder BA en/of BA-10? Speelt tienjarige aansprakelijkheid bij verharding mee? | **Controlepunt** |
| TA-2 | Tuinaannemer | Geraakte nutsleiding, €9.500 (Karen Lievens, Lokeren) | BA + rechtsbijstand | Onder welke voorwaarden dekt BA schade aan nutsleidingen (opzoekplicht KLIP/KLIM)? | **Controlepunt** |
| HO-1 | Hovenier | Steenworp tegen autoruit klant, €3.200 (Tom Verhaeghe, Deinze) | BA Onderneming | Bevestig dat steenworp-schade aan eigendom klant standaard onder BA valt. | **Controlepunt** |
| HO-2 | Hovenier | Fytolicentie bij gewasbescherming | BA + intake | Geldt de fytolicentie-verplichting voor de beschreven activiteiten en hoe verwoorden we dit correct? | **Controlepunt** |
| HO-3 | Hovenier | Gestolen materieel uit bestelwagen, €4.800 (Nele Dewulf, Waregem) | machinebreuk + vervoerde-goederen | Welke polis dekt diefstal uit voertuig: machinebreuk, vervoerde goederen of combinatie? Voorwaarden braak? | **Controlepunt** |
| BV-1 | Boomverzorger | ETW (European Tree Worker) certificaat | BA + arbeidsongevallen | Speelt ETW-certificering mee in risicobeoordeling of premie, en hoe formuleren we dat correct? | **Controlepunt** |
| BV-2 | Boomverzorger | Vallende tak op dak buur, €16.000 (Dirk Vandeput, Hasselt) | BA Onderneming | Bevestig dekking van schade aan derden door vallende takken bij snoei/velling. | **Controlepunt** |
| BV-3 | Boomverzorger | Klimongeval, 5 maanden uitval (Stijn Goossens, Genk) | arbeidsongevallen + gewaarborgd-inkomen | Klopt het onderscheid eenmanszaak-zonder-personeel (geen wettelijke AO) vs. met personeel (wel verplicht)? | **Controlepunt** |
| ZW-1 | Zwembadinstallateur | Scheur in betonbad, €34.000, 2 jaar later (Geert Dewaele, Roeselare) | BA-10 | Valt een waterdichtheids-/constructiegebrek bij een zwembad onder de tienjarige aansprakelijkheid? | **Controlepunt** |
| ZW-2 | Zwembadinstallateur | BA-10-verplichting bij verbonden bouwwerk | BA-10 | Is BA-10 verplicht voor zwembadwerken en onder welke voorwaarde (verbondenheid met woning, stabiliteit/soliditeit)? | **Controlepunt** |
| ZW-3 | Zwembadinstallateur | Geschil waterdichtheid liner, €18.000 (Frank De Meyer, Waregem) | rechtsbijstand | Bevestig dat geschil over waterdichtheid/afwerking onder rechtsbijstand valt (vrije advocaatkeuze). | **Controlepunt** |

---

## Build-checklist per pagina (samengevat)
- [ ] 11 secties in vaste volgorde, `dakwerkers.astro` als referentie, lokale `dw-`/`brand-`-CSS.
- [ ] Alle copy als statische Astro-HTML (FAQ-vragen **én** antwoorden in de bron).
- [ ] `insuranceCards` via `kaartenVoor([...])` met de 6 slugs hierboven.
- [ ] FAQPage-schema gegenereerd uit `faqItems` (zoals dakwerkers).
- [ ] CTA's uitsluitend uit `cta-labels.ts`; secundair = `CTA_DESTINATIONS.afspraak`.
- [ ] Unieke meta title/description/canonical per pagina.
- [ ] 28 beelden (12 mask + 16 case) geleverd — **blokker** tot dan.
- [ ] Reviewscore 5/5, geen u/uw, geen em-dashes, geen verzonnen verzekeraars/cijfers.
