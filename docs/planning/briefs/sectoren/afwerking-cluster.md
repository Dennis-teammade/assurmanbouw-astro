# Content-brief — Cluster AFWERKING (4 sectorpagina's)

> **Doel van dit document:** bouwklare content-brief voor 4 nieuwe sectorpagina's. De hoofd-agent bouwt
> elke pagina door `src/pages/sectoren/dakwerkers.astro` te repliceren (11 vaste secties, identieke
> structuur) en alléén de content/copy uit deze brief over te nemen. Verzin geen nieuwe sectie-volgorde.
>
> **Norm:** `docs/content-guide/sectorpaginas.md` + referentie `dakwerkers.astro`.
> **Voice (hard):** Belgisch Nederlands je/jij/jouw, nooit u/uw. Geen em-dashes. Reviewscore overal 5/5.
> Geen verzonnen klantenaantallen of verzekeraarsnamen. Geen verzekeraars in copy. Cases zijn
> herkenbaar-fictieve illustraties (euro-bedragen + fictieve namen toegestaan, zoals in `dakwerkers.astro`).
>
> **Rode draad van dit cluster:** afwerkingsberoepen draaien sterk rond **esthetische- en
> uitvoeringsgeschillen** (vlakheid, kleurverschil, scheuren, loskomend werk, krasschade aan duur materiaal).
> Daarom is **rechtsbijstand + BA-onderneming** in elk van de 4 pakketten de kern. Per beroep zijn de
> risico's écht anders ingevuld; geen template-tekst.

---

## FOTO-BEHOEFTE (BLOKKER — ontbreekt, moet aangeleverd vóór build)

Padconventie volgt `dakwerkers.astro`: hero-mask in `/public` root-niveau, case-beelden in
`/public/images/cases/`. Per beroep 3 mask-foto's (hero / why / cta) + 4 case-beelden = 7 beelden.
Totaal cluster: **28 beelden**.

### Stukadoors (`stukadoors`)
- `/assurman-verzekeringen-bouwsector-stukadoor-hero.jpg` — alt: "Stukadoor brengt pleisterlaag aan op een binnenmuur"
- `/verzekeringen-bouwsector-stukadoor-why.jpg` — alt: "Stukadoor controleert de vlakheid van een afgewerkte wand"
- `/verzekeringen-bouwsector-stukadoor-cta.jpg` — alt: "Stukadoor werkt een gevelpleister af"
- `/images/cases/case-stukadoors-1.jpg` t/m `-4.jpg`

### Chappers (`chappers`)
- `/assurman-verzekeringen-bouwsector-chapper-hero.jpg` — alt: "Chapper egaliseert een verse dekvloer"
- `/verzekeringen-bouwsector-chapper-why.jpg` — alt: "Chapper meet de vlakheid van een uitgehard chape-oppervlak"
- `/verzekeringen-bouwsector-chapper-cta.jpg` — alt: "Chapper giet een dekvloer over vloerverwarmingsleidingen"
- `/images/cases/case-chappers-1.jpg` t/m `-4.jpg`

### Vloerders / tegelzetters (`vloerders-tegelzetters`)
- `/assurman-verzekeringen-bouwsector-tegelzetter-hero.jpg` — alt: "Tegelzetter legt grootformaat vloertegels"
- `/verzekeringen-bouwsector-tegelzetter-why.jpg` — alt: "Tegelzetter controleert de voegen van een afgewerkte tegelvloer"
- `/verzekeringen-bouwsector-tegelzetter-cta.jpg` — alt: "Tegelzetter plaatst natuursteen wandbekleding"
- `/images/cases/case-vloerders-tegelzetters-1.jpg` t/m `-4.jpg`

### Parketzetters (`parketzetters`)
- `/assurman-verzekeringen-bouwsector-parketzetter-hero.jpg` — alt: "Parketzetter legt een houten vloer"
- `/verzekeringen-bouwsector-parketzetter-why.jpg` — alt: "Parketzetter schuurt een houten vloer voor de afwerklaag"
- `/verzekeringen-bouwsector-parketzetter-cta.jpg` — alt: "Parketzetter brengt de laklaag aan op een afgewerkte parketvloer"
- `/images/cases/case-parketzetters-1.jpg` t/m `-4.jpg`

---

## OVERZICHT — gekozen polis-pakketten per beroep

| Beroep | insuranceCards (6 slugs, exact) |
|---|---|
| Stukadoors | `ba-onderneming`, `rechtsbijstand`, `alle-bouwplaats-risicos`, `bedrijfsvoertuigen`, `arbeidsongevallen`, `vervoerde-goederen` |
| Chappers | `ba-onderneming`, `ba-10`, `rechtsbijstand`, `machinebreuk`, `bedrijfsvoertuigen`, `arbeidsongevallen` |
| Vloerders / tegelzetters | `ba-onderneming`, `rechtsbijstand`, `vervoerde-goederen`, `bedrijfsvoertuigen`, `arbeidsongevallen`, `alle-bouwplaats-risicos` |
| Parketzetters | `ba-onderneming`, `rechtsbijstand`, `vervoerde-goederen`, `machinebreuk`, `bedrijfsvoertuigen`, `arbeidsongevallen` |

> Onderbouwing keuzes: `ba-10` (tienjarige aansprakelijkheid) zit enkel bij chappers, omdat de chape
> structureel deel uitmaakt van de vloeropbouw (incl. vloerverwarming-inbedding) en een gebrek daar onder
> de stabiliteit/dichtheid van het gebouw kan vallen. Bij vloerders/parketzetters ligt de nadruk op
> **vervoerde-goederen** (duur natuursteen, parket) en is `ba-10` niet standaard. `machinebreuk` zit bij
> chappers (pompen/menginstallatie) en parketzetters (schuurmachines) waar dure eigen machines centraal staan.

---
---

# 1. STUKADOORS / PLAKKERS — slug `stukadoors`

> Integreert ook de plafonneur. Binnen- en buitenpleisterwerk, gevelpleister, sierpleister.

## META
- **title** (~55 tekens): `Verzekeringen voor stukadoors en plafonneurs`
- **description** (~150): `Krimpscheuren, loslatend pleisterwerk, waterschade op de werf: stukadoors hebben specifieke noden. Bekijk het verzekeringspakket op maat van Assurman.`
- **canonical:** `/sectoren/stukadoors/`
- **hoofdzoekterm:** verzekering stukadoor
- **secundair:** verzekering plafonneur, BA verzekering pleisterwerk, beroepsaansprakelijkheid stukadoor

## HERO
- **H1:** `Verzekeringen voor stukadoors`
- **gouden subzin:** `Strak afgewerkt, correct verzekerd.`
- **intro-alinea:** `Als stukadoor of plafonneur staat of valt je reputatie met de afwerking. Een krimpscheur, een plek die loslaat, een kleurverschil in de sierpleister of waterschade tijdens het werk: het leidt snel tot discussie en herstelkosten. Assurman is gespecialiseerd in verzekeringen op maat van afwerkingsondernemers in Vlaanderen.`
- **hero-foto-alt:** `Stukadoor brengt pleisterlaag aan op een binnenmuur`

## 4 KEY-FEATURES (witte kaartjes, `\n` = regelbreuk)
1. `Specialist in\nafwerking & pleisterwerk`
2. `Modulair pakket:\nenkel wat nodig is`
3. `Sterk op geschillen\nrond afwerking`
4. `Dekking voor werk\n+ materiaal + bestelwagen`

## INTRO / POSITIONERING
- **H2:** `Waarom een stukadoor een specialist nodig heeft`
- **alinea 1:** `Pleisterwerk is het zichtbare eindresultaat. Net daar wordt elke onvolkomenheid opgemerkt: een haarscheur na het uitdrogen, een wand die niet perfect vlak aanvoelt, een gevelpleister die anders uitkleurt dan verwacht. Veel discussies gaan niet over instortgevaar, maar over wat de klant esthetisch verwacht had. Dat maakt aansprakelijkheid en rechtsbijstand bij dit beroep extra belangrijk.`
- **alinea 2:** `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: binnen- of buitenwerk, sierpleister, plafonneren, werken in bewoonde woningen, personeel, materiaalwaarde en bestelwagen. Zo ben je gedekt voor de risico's die jouw stiel echt kent.`
- **blockquote:** `"Jij levert de afwerking. Wij zorgen dat een discussie geen financieel probleem wordt."`
- **3 why-cards:**
  1. titel `Esthetische geschillen` — `Rechtsbijstand staat klaar wanneer een klant het werk afkeurt op vlakheid, scheuren of kleur.`
  2. titel `Schade in bewoonde ruimtes` — `Met BA dek je schade aan vloeren, meubels of afwerking van de klant tijdens het pleisteren.`
  3. titel `Materiaal & bestelwagen` — `Bescherming voor je gereedschap, mengmateriaal en bestelwagen zodat je nooit stilstaat.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet precies waar je voor verzekerd bent en waarom.`
2. `Slimme modules` — `Voeg toe wat jij nodig hebt: aansprakelijkheid, rechtsbijstand, werfdekking, materiaal.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw type werven.`
4. `Afwerkings-expertise` — `We spreken jouw taal: gips, kalei, sierpleister, plafonneren, krimpscheuren.`

## insuranceCards (exact deze 6 slugs)
`['ba-onderneming', 'rechtsbijstand', 'alle-bouwplaats-risicos', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'vervoerde-goederen']`
- **Waarom dit pakket past:** stukadoors lopen vooral risico op aansprakelijkheid en esthetische geschillen
  (BA + rechtsbijstand), met daarbovenop werfdekking voor schade tijdens uitvoering, mobiliteit, personeel
  en het vervoer van mengmateriaal en gevelpleister.

## 4 CASE STUDIES
1. **category:** `PLEISTERWERK`
   **title:** `Krimpscheuren in nieuwe wanden leiden tot €14.000 herstelclaim`
   **businessName:** `Plamuur & Plafond`
   **ownerName:** `Wim Dewulf`
   **cityName:** `Tielt`
   **description:** `Enkele weken na oplevering verschenen haarscheuren in verschillende gepleisterde wanden van een nieuwbouwwoning. De klant weet dit aan slecht uitgevoerd werk en eiste een volledige herstelbeurt op kosten van de stukadoor.`
   **action:** `Via de rechtsbijstand werd een onafhankelijke expert ingeschakeld die de droogomstandigheden, het ondergrondtype en de uitvoering beoordeelde. De expertise toonde dat de scheurvorming deels te wijten was aan een te snel ingezette verwarming. Op basis daarvan werd een gedeelde regeling bereikt en bleef de financiële impact voor de stukadoor beperkt.`
2. **category:** `PLEISTERWERK`
   **title:** `Waterschade aan klantvloer tijdens pleisterwerk kost €9.500`
   **businessName:** `Strak Stucwerk`
   **ownerName:** `Nadia Vermeersch`
   **cityName:** `Lokeren`
   **description:** `Tijdens het opmengen van pleister liep water over een net geplaatste parketvloer in een bewoonde woning. Het parket trok krom en moest deels vervangen worden.`
   **action:** `De schade aan de eigendom van de klant viel onder de BA-onderneming. De verzekeraar nam de vervangingskosten van het beschadigde parket op zich. De relatie met de klant bleef goed en het project werd zonder verder conflict afgerond.`
3. **category:** `GEVELPLEISTER`
   **title:** `Discussie over kleurverschil in gevelpleister: €11.000 in het geding`
   **businessName:** `GevelFijn`
   **ownerName:** `Bert Maes`
   **cityName:** `Deinze`
   **description:** `Na het afwerken van een buitengevel met sierpleister klaagde de bouwheer over zichtbare kleurverschillen tussen verschillende vlakken. Hij weigerde de laatste schijf te betalen en dreigde met herstel door derden.`
   **action:** `Via de rechtsbijstand werd technisch advies ingewonnen over de invloed van droogomstandigheden op de uitkleuring van minerale pleister. Na bemiddeling werd een deeltoegeving gedaan en kwam er een betalingsregeling. Een dure procedure werd vermeden.`
4. **category:** `PLEISTERWERK`
   **title:** `Loslatend pleisterwerk in badkamer leidt tot €7.800 geschil`
   **businessName:** `Plafonneerwerken Cools`
   **ownerName:** `Steven Cools`
   **cityName:** `Eeklo`
   **description:** `In een gerenoveerde badkamer kwam de pleisterlaag op enkele plaatsen los. De klant stelde de stukadoor aansprakelijk, terwijl onduidelijk was of het vochtprobleem van de ondergrond kwam.`
   **action:** `De rechtsbijstand liet de oorzaak technisch onderzoeken. De expertise wees op een vochtbron achter de wand die niet door de stukadoor was veroorzaakt. De aansprakelijkheid werd afgewend en de herstelkosten kwamen niet voor rekening van de onderneming.`

## FAQ (mensentaal)
1. **title:** `Welke risico's heeft een stukadoor het meest?`
   **content:** `De meeste discussies bij stukadoors gaan over de afwerking zelf:\n\n• Esthetische geschillen: vlakheid, krimpscheuren, kleurverschil in sierpleister.\n\n• Schade aan eigendom van de klant: vloeren, meubels of afwerking die beschadigd raakt tijdens het werk.\n\n• Materiaal & mobiliteit: zonder mengmateriaal en bestelwagen sta je stil.\n\nDaarom is een basis met BA-onderneming en rechtsbijstand voor de meeste stukadoors een logische start.`
2. **title:** `Ben ik gedekt als een klant klaagt over scheuren of vlakheid?`
   **content:** `Dat is precies waar rechtsbijstand voor dient. Bij een geschil over de afwerking kunnen we een onafhankelijke expert inschakelen die de oorzaak beoordeelt. Vaak ligt die deels bij omstandigheden buiten jouw controle, zoals te snel drogen of een gebrekkige ondergrond. Met een goede dekking sta je niet alleen tegenover de klant.`
3. **title:** `Wat als ik schade maak aan de vloer of meubels van de klant?`
   **content:** `Schade aan de eigendom van je klant tijdens het werk valt onder je BA-onderneming. Denk aan een beschadigde parketvloer, bevuilde of beschadigde meubels. We stemmen de dekking af op het type werk dat je doet, zeker als je veel in bewoonde woningen werkt.`
4. **title:** `Heb ik rechtsbijstand echt nodig als ik netjes werk?`
   **content:** `Ook bij vakkundig werk ontstaan geschillen, want "mooi afgewerkt" is deels subjectief. Een klant kan een kleurverschil of een lichte oneffenheid afkeuren. Rechtsbijstand zorgt dat je niet meteen zelf advocaat- en expertisekosten draagt en helpt een conflict snel en redelijk op te lossen.`
5. **title:** `Kan ik mijn pakket later uitbreiden?`
   **content:** `Ja. Veel stukadoors starten met een kernpakket en breiden uit wanneer ze personeel aannemen, meer buitenpleisterwerk doen of grotere werven aanpakken. Assurman bouwt modulair: je groeit zonder telkens opnieuw van nul te starten.`
6. **title:** `Maakt het uit of ik binnen- of buitenpleisterwerk doe?`
   **content:** `Ja. Buitenpleister en gevelafwerking brengen andere risico's mee: weersinvloeden, stellingen, kleurstabiliteit en werken op hoogte. In je intake geef je aan wat je doet, en we stemmen de dekking en voorwaarden daarop af.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, kosten en het type afwerking dat je doet.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw activiteiten.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`

## TUSSEN-CTA (H2)
`Stukadoor in Vlaanderen?<br />Wij maken jouw pakket op maat.`

## 3 TESTIMONIALS (5/5)
1. quote `Eindelijk een makelaar die snapt dat een discussie over scheuren erbij hoort. Helder geregeld.` — name `Zaakvoerder, pleisterwerken (West-Vlaanderen)`
2. quote `Bij een geschil over kleurverschil stonden ze meteen klaar. Dat gaf veel rust.` — name `Stukadoor, Oost-Vlaanderen`
3. quote `Ik wou vooral gedekt zijn voor schade bij de klant thuis. Alles helder uitgelegd.` — name `Zelfstandig plafonneur`

## CONTROLEPUNTEN (tabel — fictief-illustratief)

> **Let op:** onderstaande cases zijn **fictief-illustratief** en dienen enkel om de werking van het pakket te tonen.
> Geen echte klanten, geen verzonnen wettelijke cijfers. Technische claims (droogtijd, vochtmeting) onder voorbehoud van
> intake en expertise.

| Ref | Fictieve case | Gekozen pakket | Technische claim / aandachtspunt |
|---|---|---|---|
| ST-01 | Krimpscheuren na te snelle opwarming | rechtsbijstand + ba-onderneming | Droogomstandigheden en ondergrond bepalen mee de aansprakelijkheid |
| ST-02 | Waterschade aan parket bij klant | ba-onderneming | Schade aan eigendom klant in bewoonde woning |
| ST-03 | Kleurverschil gevelpleister | rechtsbijstand | Uitkleuring minerale pleister hangt af van droogcondities |
| ST-04 | Loslatend pleisterwerk badkamer | rechtsbijstand + ba-onderneming | Vochtbron in ondergrond verifiëren vóór toewijzing aansprakelijkheid |

---
---

# 2. CHAPPERS — slug `chappers`

> Dekvloeren/chapes, gietvloeren-onderlaag, vloerverwarming-inbedding.

## META
- **title** (~50 tekens): `Verzekeringen voor chappers en dekvloerleggers`
- **description** (~150): `Niet-vlakke chape, scheurvorming, vocht onder vloerverwarming, te vroeg belast: chappers dragen reële risico's. Bekijk het pakket op maat van Assurman.`
- **canonical:** `/sectoren/chappers/`
- **hoofdzoekterm:** verzekering chapper
- **secundair:** verzekering dekvloer, BA verzekering chape, tienjarige aansprakelijkheid chapper

## HERO
- **H1:** `Verzekeringen voor chappers`
- **gouden subzin:** `Een vlakke basis, een stevige dekking.`
- **intro-alinea:** `Jouw chape is de basis waar de hele vloerafwerking op rust. Een chape die niet vlak ligt, scheurt, te vroeg wordt belast of vocht vasthoudt rond de vloerverwarming kan grote gevolgschade veroorzaken aan tegels, parket of gietvloer. Assurman is gespecialiseerd in verzekeringen op maat van afwerkingsondernemers in Vlaanderen.`
- **hero-foto-alt:** `Chapper egaliseert een verse dekvloer`

## 4 KEY-FEATURES
1. `Specialist in\nchape & dekvloeren`
2. `Modulair pakket:\nenkel wat nodig is`
3. `Sterk op gevolg-\nschade & geschillen`
4. `Dekking voor werk\n+ machines + bestelwagen`

## INTRO / POSITIONERING
- **H2:** `Waarom een chapper een specialist nodig heeft`
- **alinea 1:** `De chape lijkt eenvoudig, maar de gevolgen van een fout zijn dat niet. Ligt de dekvloer niet vlak, dan komt dat pas uit wanneer de tegelzetter of parketlegger begint. Scheurt de chape of wordt ze te vroeg belast, dan kan de schade doorwerken in de volledige vloerafwerking. Omdat de chape structureel deel uitmaakt van de vloeropbouw, kan een gebrek onder de tienjarige aansprakelijkheid vallen.`
- **alinea 2:** `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: gehechte of zwevende chape, vloerverwarming, gietvloer-onderlagen, eigen pompen en menginstallaties, personeel en bestelwagen. Zo ben je gedekt voor de risico's die jouw stiel echt kent.`
- **blockquote:** `"Jij legt de basis. Wij zorgen dat een gebrek in de chape je niet jaren later inhaalt."`
- **3 why-cards:**
  1. titel `Tienjarige aansprakelijkheid` — `Een chape onder vloerverwarming maakt deel uit van de vloeropbouw. BA-10 dekt zware gebreken die later opduiken.`
  2. titel `Gevolgschade aan afwerking` — `Met BA dek je schade aan de tegels, het parket of de gietvloer die op jouw chape kwamen.`
  3. titel `Machines & bestelwagen` — `Bescherming voor je pompen, menginstallatie en bestelwagen zodat je nooit stilstaat.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet precies waar je voor verzekerd bent en waarom.`
2. `Slimme modules` — `Voeg toe wat jij nodig hebt: aansprakelijkheid, tienjarige dekking, machinebreuk, rechtsbijstand.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw type chapes en werven.`
4. `Chape-expertise` — `We spreken jouw taal: zwevende chape, vloerverwarming, droogtijd, vochtmeting, belastbaarheid.`

## insuranceCards (exact deze 6 slugs)
`['ba-onderneming', 'ba-10', 'rechtsbijstand', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen']`
- **Waarom dit pakket past:** chappers dragen niet alleen aansprakelijkheid voor het eigen werk (BA) en
  geschillen (rechtsbijstand), maar ook tienjarige aansprakelijkheid (BA-10) omdat de chape structureel deel
  is van de vloeropbouw. Machinebreuk dekt de eigen pompen en menginstallatie, aangevuld met mobiliteit en personeel.

## 4 CASE STUDIES
1. **category:** `DEKVLOEREN`
   **title:** `Niet-vlakke chape dwingt herstel van tegelwerk: €16.500 schade`
   **businessName:** `Chape Centraal`
   **ownerName:** `Davy Lambrecht`
   **cityName:** `Aalst`
   **description:** `Na het leggen van de tegels bleek de vloer op verschillende plaatsen niet vlak. De tegelzetter wees naar de chape als oorzaak. De bouwheer eiste herstel van zowel de chape als het tegelwerk.`
   **action:** `Via de rechtsbijstand en BA-onderneming werd een expert aangesteld die de vlakheidsmetingen en de uitvoering beoordeelde. De aansprakelijkheid werd verdeeld op basis van de meetresultaten. De verzekering nam het toegewezen deel van de herstelkosten op zich.`
2. **category:** `VLOERVERWARMING`
   **title:** `Vochtprobleem onder vloerverwarming leidt tot €22.000 gevolgschade`
   **businessName:** `Dekvloer De Backer`
   **ownerName:** `Tom De Backer`
   **cityName:** `Sint-Niklaas`
   **description:** `Een parketvloer kwam los doordat de chape rond de vloerverwarming nog te veel restvocht bevatte bij de afwerking. De claim betrof zowel het parket als het uitbreken en heraanleggen.`
   **action:** `De rechtsbijstand liet een vochtexpertise uitvoeren. Omdat de aansprakelijkheidsvraag complex was (droogtijd versus opvolging door derden), werd onderhandeld over een gedeelde regeling. De financiële impact voor de chapper bleef beperkt.`
3. **category:** `DEKVLOEREN`
   **title:** `Te vroeg belaste chape scheurt: €13.000 in het geding`
   **businessName:** `EgaalChape`
   **ownerName:** `Kris Vanhecke`
   **cityName:** `Dendermonde`
   **description:** `Een verse chape werd door andere aannemers betreden en belast voordat ze voldoende was uitgehard. Er ontstonden scheuren en de bouwheer stelde de chapper aansprakelijk.`
   **action:** `Via de rechtsbijstand werd aangetoond dat de chape vroegtijdig en zonder toestemming was belast door derden. De aansprakelijkheid werd afgewend en de herstelkosten kwamen niet voor rekening van de chapper.`
4. **category:** `MACHINES`
   **title:** `Defecte chapepomp legt planning stil: €8.000 schade en stilstand`
   **businessName:** `Chapewerken Verstraete`
   **ownerName:** `Ann Verstraete`
   **cityName:** `Ninove`
   **description:** `Een dure chapepomp gaf er midden in een reeks werven de brui aan door een interne breuk. Naast de herstelkosten dreigde planningverlies omdat geen alternatief direct beschikbaar was.`
   **action:** `Via de machinebreukdekking werd de herstelling van de pomp snel afgehandeld. Er kon een vervangoplossing geregeld worden zodat de geplande werven slechts enkele dagen vertraging opliepen.`

## FAQ (mensentaal)
1. **title:** `Welke risico's heeft een chapper het meest?`
   **content:** `Bij chappers zit het risico vooral in de gevolgen:\n\n• Vlakheid en scheurvorming: een gebrek in de chape werkt door in tegels, parket of gietvloer.\n\n• Vocht en droogtijd: te veel restvocht onder vloerverwarming kan latere schade veroorzaken.\n\n• Te vroeg belasten: vaak door derden, maar de chapper krijgt de schuld.\n\n• Machines: een defecte pomp of menginstallatie legt je planning stil.\n\nDaarom is een basis met BA-onderneming, rechtsbijstand en tienjarige aansprakelijkheid voor veel chappers logisch.`
2. **title:** `Heb ik tienjarige aansprakelijkheid (BA-10) nodig als chapper?`
   **content:** `In veel gevallen wel. De chape maakt structureel deel uit van de vloeropbouw, zeker bij vloerverwarming. Een ernstig gebrek dat de stabiliteit of dichtheid van de constructie raakt, kan onder de tienjarige aansprakelijkheid vallen. In je intake bekijken we of en in welke vorm dit voor jouw werken nodig is.`
3. **title:** `Wat als de gevolgschade groter is dan mijn eigen werk?`
   **content:** `Dat is net het lastige aan chapewerk: de herstelkosten van de afwerking erbovenop (tegels, parket) zijn vaak hoger dan de chape zelf. Je BA-onderneming is bedoeld om die schade aan het werk van anderen mee op te vangen wanneer jij aansprakelijk bent. We stemmen de verzekerde bedragen af op het soort werven dat je doet.`
4. **title:** `Mijn chape was te vroeg belast door een andere aannemer. Sta ik er alleen voor?`
   **content:** `Nee. Bij dit soort discussies helpt rechtsbijstand om de oorzaak technisch te laten vaststellen. Als blijkt dat derden de chape voortijdig hebben belast, kan de aansprakelijkheid afgewend worden. Documenteer altijd je droogtijden en waarschuwingen; dat versterkt je dossier.`
5. **title:** `Zijn mijn pompen en menginstallatie verzekerd?`
   **content:** `Met machinebreuk kan je je eigen materieel beschermen tegen interne defecten en breuk. Voor een chapper is dat vaak waardevol, want stilstand van een pomp legt meteen meerdere werven stil. We bekijken welke machines je hebt en wat de waarde ervan is.`
6. **title:** `Kan ik mijn pakket later uitbreiden?`
   **content:** `Ja. Veel chappers starten met een kernpakket en breiden uit wanneer ze personeel aannemen, meer vloerverwarming-projecten doen of zwaarder materieel kopen. Assurman bouwt modulair: je groeit zonder telkens opnieuw van nul te starten.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, je machines en het type chapes dat je legt.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw activiteiten.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`

## TUSSEN-CTA (H2)
`Chapper in Vlaanderen?<br />Wij maken jouw pakket op maat.`

## 3 TESTIMONIALS (5/5)
1. quote `Ze begrepen meteen dat gevolgschade bij chape het echte risico is. Sterk pakket.` — name `Zaakvoerder, chapewerken (Oost-Vlaanderen)`
2. quote `Toen mijn chape te vroeg belast was, hielpen ze het dossier opbouwen. Top.` — name `Chapper, Vlaams-Brabant`
3. quote `De dekking voor mijn pomp gaf me rust. Stilstand kost mij het meest.` — name `Zelfstandig dekvloerlegger`

## CONTROLEPUNTEN (tabel — fictief-illustratief)

> **Let op:** onderstaande cases zijn **fictief-illustratief**. Geen echte klanten, geen verzonnen wettelijke cijfers.
> Technische claims (droogtijd, restvochtmeting, belastbaarheid) onder voorbehoud van intake en expertise.

| Ref | Fictieve case | Gekozen pakket | Technische claim / aandachtspunt |
|---|---|---|---|
| CH-01 | Niet-vlakke chape onder tegels | rechtsbijstand + ba-onderneming | Vlakheidstolerantie en meetmethode bepalen aansprakelijkheid |
| CH-02 | Restvocht onder vloerverwarming | rechtsbijstand + ba-10 | Restvochtmeting vóór afwerking; gevolgschade aan parket |
| CH-03 | Te vroeg belaste chape scheurt | rechtsbijstand | Belasting door derden vóór uitharding documenteren |
| CH-04 | Defecte chapepomp | machinebreuk | Intern defect eigen materieel; stilstandrisico |

---
---

# 3. VLOERDERS / TEGELZETTERS — slug `vloerders-tegelzetters`

> Tegelwerk, natuursteen, vloer- en wandbekleding.

## META
- **title** (~55 tekens): `Verzekeringen voor vloerders en tegelzetters`
- **description** (~150): `Loskomende tegels, hol klinkend werk, kleurverschil natuursteen, beschadigd duur materiaal: tegelzetters hebben specifieke noden. Pakket op maat van Assurman.`
- **canonical:** `/sectoren/vloerders-tegelzetters/`
- **hoofdzoekterm:** verzekering tegelzetter
- **secundair:** verzekering vloerder, BA verzekering tegelwerk, verzekering natuursteen leggen

## HERO
- **H1:** `Verzekeringen voor vloerders en tegelzetters`
- **gouden subzin:** `Strak gelegd, goed beschermd.`
- **intro-alinea:** `Als vloerder of tegelzetter werk je met duur materiaal en een zichtbaar eindresultaat. Een tegel die loskomt of hol klinkt, een kleurverschil in natuursteen of een dure plaat die beschadigd raakt bij het leggen: het leidt snel tot discussie en hoge herstelkosten. Assurman is gespecialiseerd in verzekeringen op maat van afwerkingsondernemers in Vlaanderen.`
- **hero-foto-alt:** `Tegelzetter legt grootformaat vloertegels`

## 4 KEY-FEATURES
1. `Specialist in\ntegel- & natuursteenwerk`
2. `Modulair pakket:\nenkel wat nodig is`
3. `Sterk op geschillen\n& materiaalschade`
4. `Dekking voor werk\n+ duur materiaal + bestelwagen`

## INTRO / POSITIONERING
- **H2:** `Waarom een tegelzetter een specialist nodig heeft`
- **alinea 1:** `Tegel- en natuursteenwerk is precisiewerk met dure materialen. Een tegel die loskomt of hol klinkt, een voeg die de klant afkeurt, een zichtbaar kleurverschil tussen natuursteenplaten: het zijn klassieke discussiepunten. En omdat het materiaal zelf veel waard is, telt een beschadigde plaat of een breuk bij transport meteen serieus aan.`
- **alinea 2:** `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: keramiek, natuursteen, grootformaat, wandbekleding, werken in bewoonde woningen, personeel, materiaalwaarde en bestelwagen. Zo ben je gedekt voor de risico's die jouw stiel echt kent.`
- **blockquote:** `"Jij legt het zichtbare eindresultaat. Wij zorgen dat een discussie geen financieel probleem wordt."`
- **3 why-cards:**
  1. titel `Esthetische geschillen` — `Rechtsbijstand staat klaar wanneer een klant het werk afkeurt op voegen, vlakheid of hol klinken.`
  2. titel `Duur materiaal & transport` — `Met dekking voor vervoerde goederen ben je beschermd als natuursteen of grootformaat tegels onderweg of op de werf beschadigen.`
  3. titel `Schade bij de klant` — `Met BA dek je schade aan de eigendom van de klant tijdens het leggen, ook in bewoonde woningen.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet precies waar je voor verzekerd bent en waarom.`
2. `Slimme modules` — `Voeg toe wat jij nodig hebt: aansprakelijkheid, rechtsbijstand, materiaaltransport, werfdekking.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw type werken en materialen.`
4. `Vloer-expertise` — `We spreken jouw taal: keramiek, natuursteen, grootformaat, voegen, hol klinken, lijmlagen.`

## insuranceCards (exact deze 6 slugs)
`['ba-onderneming', 'rechtsbijstand', 'vervoerde-goederen', 'bedrijfsvoertuigen', 'arbeidsongevallen', 'alle-bouwplaats-risicos']`
- **Waarom dit pakket past:** tegelzetters combineren aansprakelijkheid en esthetische geschillen
  (BA + rechtsbijstand) met een hoog materiaalrisico: dure natuursteen en grootformaat tegels zijn kwetsbaar
  bij transport en op de werf (vervoerde-goederen + ABR), aangevuld met mobiliteit en personeel.

## 4 CASE STUDIES
1. **category:** `TEGELWERK`
   **title:** `Loskomende vloertegels in woonkamer: €15.500 herstelclaim`
   **businessName:** `Tegelhuis Vandamme`
   **ownerName:** `Geert Vandamme`
   **cityName:** `Roeselare`
   **description:** `Enkele maanden na oplevering kwamen verschillende vloertegels los en klonken andere hol bij aankloppen. De bouwheer eiste dat de volledige vloer opnieuw gelegd werd.`
   **action:** `Via de rechtsbijstand en BA-onderneming werd een expert aangesteld die de lijmlaag en de ondergrond beoordeelde. Op basis van de bevindingen werd de aansprakelijkheid bepaald en nam de verzekering het toegewezen deel van de herstelkosten op zich.`
2. **category:** `NATUURSTEEN`
   **title:** `Discussie over kleurverschil in natuursteen: €12.000 in het geding`
   **businessName:** `SteenStijl`
   **ownerName:** `Isabelle Goossens`
   **cityName:** `Gent`
   **description:** `Na het leggen van een natuurstenen vloer klaagde de klant over duidelijke kleur- en structuurverschillen tussen de platen. Hij weigerde een deel van de factuur te betalen.`
   **action:** `Via de rechtsbijstand werd technisch advies ingewonnen over de natuurlijke variatie die eigen is aan natuursteen. Na bemiddeling kwam er een betalingsregeling waarbij de natuurlijke aard van het materiaal werd erkend. Een procedure werd vermeden.`
3. **category:** `MATERIAAL`
   **title:** `Breuk van grootformaat tegels tijdens transport: €9.000 schade`
   **businessName:** `Vloeren Coppens`
   **ownerName:** `Rik Coppens`
   **cityName:** `Lokeren`
   **description:** `Een set dure grootformaat keramische platen brak tijdens het vervoer naar de werf. De levering moest opnieuw besteld worden, met planningverlies tot gevolg.`
   **action:** `Via de dekking voor vervoerde goederen werd de waarde van de gebroken platen vergoed. Een nieuwe levering werd versneld geregeld zodat het project slechts beperkt vertraging opliep.`
4. **category:** `TEGELWERK`
   **title:** `Beschadigde natuursteenplaat bij plaatsing kost €7.500`
   **businessName:** `Tegel & Natuursteen Peeters`
   **ownerName:** `Marleen Peeters`
   **cityName:** `Wetteren`
   **description:** `Tijdens het inpassen van een dure natuursteenplaat ontstond een barst. Het stuk was op maat besteld en kon niet zomaar vervangen worden zonder extra kosten en wachttijd.`
   **action:** `De schade aan het materiaal in uitvoering werd binnen de werfdekking opgevangen. Er kon een nieuwe plaat besteld worden en het project werd zonder verder conflict afgewerkt.`

## FAQ (mensentaal)
1. **title:** `Welke risico's heeft een tegelzetter het meest?`
   **content:** `Bij vloerders en tegelzetters draait het vaak om twee dingen:\n\n• Esthetische geschillen: loskomende of hol klinkende tegels, kleurverschil natuursteen, voegen die afgekeurd worden.\n\n• Duur materiaal: natuursteen en grootformaat tegels zijn kwetsbaar bij transport en plaatsing.\n\n• Schade bij de klant: in bewoonde woningen raakt er snel iets beschadigd.\n\nDaarom is een basis met BA-onderneming, rechtsbijstand en dekking voor vervoerde goederen voor veel tegelzetters logisch.`
2. **title:** `Ben ik gedekt als tegels loskomen of hol klinken?`
   **content:** `Bij een geschil over loskomende of hol klinkende tegels schakelen we via rechtsbijstand een expert in die de lijmlaag, de ondergrond en de uitvoering beoordeelt. Vaak speelt ook de chape of de ondergrond een rol. Met BA-onderneming en rechtsbijstand sta je niet alleen tegenover de klant.`
3. **title:** `Wat als duur materiaal beschadigt onderweg of bij het leggen?`
   **content:** `Daarvoor dient de dekking voor vervoerde goederen, eventueel aangevuld met werfdekking. Natuursteen en grootformaat tegels zijn breekbaar en duur. Of het nu tijdens transport naar de werf is of bij de plaatsing, we zorgen dat de materiaalwaarde mee verzekerd is.`
4. **title:** `Een klant klaagt over kleurverschil in natuursteen. Sta ik er alleen voor?`
   **content:** `Nee. Kleur- en structuurvariatie is eigen aan natuursteen, maar niet elke klant weet dat. Rechtsbijstand laat dit technisch onderbouwen en helpt je het geschil redelijk op te lossen zonder dat je meteen zelf expertise- en advocaatkosten draagt.`
5. **title:** `Werk ik veel in bewoonde woningen. Maakt dat een verschil?`
   **content:** `Ja. In bewoonde woningen is de kans op schade aan bestaande afwerking, meubels of andere vloeren groter. Dat valt onder je BA-onderneming. In je intake geef je aan hoeveel je in bewoonde ruimtes werkt, zodat we de dekking daarop afstemmen.`
6. **title:** `Kan ik mijn pakket later uitbreiden?`
   **content:** `Ja. Veel tegelzetters starten met een kernpakket en breiden uit wanneer ze personeel aannemen, grotere of duurdere projecten doen of meer natuursteen verwerken. Assurman bouwt modulair: je groeit zonder telkens opnieuw van nul te starten.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, je materiaalwaarde en het type werken dat je doet.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw activiteiten.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`

## TUSSEN-CTA (H2)
`Tegelzetter in Vlaanderen?<br />Wij maken jouw pakket op maat.`

## 3 TESTIMONIALS (5/5)
1. quote `Ze snappen dat natuursteen nu eenmaal varieert. Bij een klacht hielpen ze het uitleggen.` — name `Zaakvoerder, tegelwerken (West-Vlaanderen)`
2. quote `Toen een dure plaat brak op de werf, was het snel geregeld. Geen gedoe.` — name `Tegelzetter, Oost-Vlaanderen`
3. quote `Ik wou vooral mijn duur materiaal en transport gedekt zien. Alles helder.` — name `Zelfstandig vloerder`

## CONTROLEPUNTEN (tabel — fictief-illustratief)

> **Let op:** onderstaande cases zijn **fictief-illustratief**. Geen echte klanten, geen verzonnen wettelijke cijfers.
> Technische claims (lijmlaag, hol klinken, materiaalwaarde) onder voorbehoud van intake en expertise.

| Ref | Fictieve case | Gekozen pakket | Technische claim / aandachtspunt |
|---|---|---|---|
| VL-01 | Loskomende / hol klinkende tegels | rechtsbijstand + ba-onderneming | Lijmlaag en ondergrond beoordelen; rol van de chape |
| VL-02 | Kleurverschil natuursteen | rechtsbijstand | Natuurlijke kleur- en structuurvariatie van het materiaal |
| VL-03 | Breuk grootformaat bij transport | vervoerde-goederen | Materiaalwaarde verzekerd tijdens vervoer naar de werf |
| VL-04 | Beschadigde natuursteenplaat bij plaatsing | alle-bouwplaats-risicos | Schade aan materiaal in uitvoering op de werf |

---
---

# 4. PARKETZETTERS — slug `parketzetters`

> Parket, laminaat, houten vloeren, schuren/afwerken.

## META
- **title** (~50 tekens): `Verzekeringen voor parketzetters`
- **description** (~150): `Werkend parket door vocht, krasschade bij plaatsing, geschillen over lak en afwerking: parketzetters dragen reële risico's. Pakket op maat van Assurman.`
- **canonical:** `/sectoren/parketzetters/`
- **hoofdzoekterm:** verzekering parketzetter
- **secundair:** verzekering parket leggen, BA verzekering houten vloer, verzekering vloerschuren

## HERO
- **H1:** `Verzekeringen voor parketzetters`
- **gouden subzin:** `Warm hout, koele zekerheid.`
- **intro-alinea:** `Als parketzetter werk je met een natuurlijk materiaal dat leeft. Parket dat werkt of krimpt door vocht, een kras of beschadiging bij de plaatsing, of een discussie over het lak- en afwerkingsresultaat: het kan snel tot herstel en discussie leiden. Assurman is gespecialiseerd in verzekeringen op maat van afwerkingsondernemers in Vlaanderen.`
- **hero-foto-alt:** `Parketzetter legt een houten vloer`

## 4 KEY-FEATURES
1. `Specialist in\nparket & houten vloeren`
2. `Modulair pakket:\nenkel wat nodig is`
3. `Sterk op geschillen\nrond afwerking`
4. `Dekking voor werk\n+ duur materiaal + machines`

## INTRO / POSITIONERING
- **H2:** `Waarom een parketzetter een specialist nodig heeft`
- **alinea 1:** `Hout is een levend materiaal. Te veel of te weinig vocht en het parket gaat werken, krimpen of bol staan. Komt dat na de plaatsing aan het licht, dan volgt vaak een discussie: lag het aan het hout, aan de ondergrond, aan het binnenklimaat of aan de plaatsing. Daarbovenop komen kras- en stootschade tijdens het werk en geschillen over het eindresultaat van schuren en lakken.`
- **alinea 2:** `Daarom werkt Assurman niet met een one-size-fits-all polis. We bouwen een pakket op maat van jouw realiteit: massief parket, meerlaags, laminaat, schuren en afwerken, werken in bewoonde woningen, eigen schuurmachines, personeel en bestelwagen. Zo ben je gedekt voor de risico's die jouw stiel echt kent.`
- **blockquote:** `"Jij brengt warmte met hout. Wij zorgen dat een discussie geen financieel probleem wordt."`
- **3 why-cards:**
  1. titel `Esthetische geschillen` — `Rechtsbijstand staat klaar bij discussies over werkend parket, kleur of het lak- en afwerkingsresultaat.`
  2. titel `Duur materiaal & machines` — `Bescherming voor je parket in transport en je eigen schuurmachines tegen breuk en defect.`
  3. titel `Schade bij de klant` — `Met BA dek je kras- en stootschade aan eigendom van de klant tijdens het leggen en schuren.`

## 4 QUICK BENEFITS (donker)
1. `Heldere dekking` — `Geen wollige taal. Je weet precies waar je voor verzekerd bent en waarom.`
2. `Slimme modules` — `Voeg toe wat jij nodig hebt: aansprakelijkheid, rechtsbijstand, materiaaltransport, machinebreuk.`
3. `Snelle intake` — `Na een audit van onze expert stemmen we alles af op jouw type vloeren en machines.`
4. `Parket-expertise` — `We spreken jouw taal: massief, meerlaags, schuren, lakken, oliën, werkend hout, vochtmeting.`

## insuranceCards (exact deze 6 slugs)
`['ba-onderneming', 'rechtsbijstand', 'vervoerde-goederen', 'machinebreuk', 'bedrijfsvoertuigen', 'arbeidsongevallen']`
- **Waarom dit pakket past:** parketzetters combineren aansprakelijkheid en esthetische geschillen
  (BA + rechtsbijstand) met een hoog materiaalrisico (vervoerde-goederen voor duur parket) en eigen
  schuurmachines (machinebreuk), aangevuld met mobiliteit en personeel.

## 4 CASE STUDIES
1. **category:** `PARKET`
   **title:** `Werkend parket door vochtprobleem: €17.000 herstelclaim`
   **businessName:** `Parket Vansteenkiste`
   **ownerName:** `Lieven Vansteenkiste`
   **cityName:** `Kortrijk`
   **description:** `Enkele maanden na plaatsing begon een massieve parketvloer te werken en kieren te vertonen. De bouwheer stelde de parketzetter aansprakelijk en eiste een nieuwe vloer.`
   **action:** `Via de rechtsbijstand werd een vochtexpertise uitgevoerd op de ondergrond en het binnenklimaat. Daaruit bleek dat een te hoge restvochtigheid van de ondergrond meespeelde. De aansprakelijkheid werd gedeeld en de financiële impact voor de parketzetter bleef beperkt.`
2. **category:** `PARKET`
   **title:** `Krasschade aan bestaande afwerking bij plaatsing kost €6.500`
   **businessName:** `Houtvloer De Clercq`
   **ownerName:** `Sofie De Clercq`
   **cityName:** `Brugge`
   **description:** `Tijdens het binnenbrengen en leggen van parket in een bewoonde woning raakte een bestaande trap en plint beschadigd. De klant vroeg herstel van de schade.`
   **action:** `De schade aan de eigendom van de klant viel onder de BA-onderneming. De verzekeraar regelde het herstel van de beschadigde trap en plint. Het project werd zonder verder conflict afgerond.`
3. **category:** `AFWERKING`
   **title:** `Geschil over lakresultaat na schuren: €8.500 in het geding`
   **businessName:** `Parket & Lak Mortier`
   **ownerName:** `Jürgen Mortier`
   **cityName:** `Oostende`
   **description:** `Na het schuren en lakken van een parketvloer klaagde de klant over zichtbare strepen en een ongelijkmatige glansgraad. Hij weigerde de eindfactuur te betalen.`
   **action:** `Via de rechtsbijstand werd het lakresultaat technisch beoordeeld op uitvoering en op factoren zoals stof en droogcondities. Na bemiddeling kwam er een gedeeltelijke herwerking en een betalingsregeling. Een dure procedure werd vermeden.`
4. **category:** `MACHINES`
   **title:** `Defecte parketschuurmachine legt werven stil: €5.500 schade`
   **businessName:** `Schuurwerken Tytgat`
   **ownerName:** `Pieter Tytgat`
   **cityName:** `Veurne`
   **description:** `Een dure bandschuurmachine viel uit door een interne breuk midden in een drukke periode. Naast de herstelkosten dreigde planningverlies omdat het werk stillag.`
   **action:** `Via de machinebreukdekking werd de herstelling snel afgehandeld en een vervangtoestel geregeld. De geplande werven liepen slechts beperkt vertraging op.`

## FAQ (mensentaal)
1. **title:** `Welke risico's heeft een parketzetter het meest?`
   **content:** `Bij parketzetters zitten de risico's vooral hier:\n\n• Werkend hout: parket dat krimpt, kiert of bol staat door vocht of binnenklimaat.\n\n• Afwerkingsgeschillen: discussies over schuren, lakken en glansgraad.\n\n• Kras- en stootschade: aan het parket zelf of aan eigendom van de klant tijdens het werk.\n\n• Materiaal en machines: duur parket en eigen schuurmachines.\n\nDaarom is een basis met BA-onderneming en rechtsbijstand voor de meeste parketzetters een logische start.`
2. **title:** `Parket dat werkt door vocht. Ben ik daar aansprakelijk voor?`
   **content:** `Dat hangt af van de oorzaak: het hout, de ondergrond, het binnenklimaat of de plaatsing. Bij een geschil laat rechtsbijstand een vochtexpertise uitvoeren om de oorzaak vast te stellen. Vaak speelt restvocht in de ondergrond of het binnenklimaat mee, en dan ligt de aansprakelijkheid niet volledig bij jou. Documenteer altijd je vochtmetingen.`
3. **title:** `Een klant is niet tevreden over het lak- of schuurresultaat. Wat dan?`
   **content:** `Afwerking is deels subjectief, dus discussies over glansgraad of strepen komen voor. Rechtsbijstand helpt het resultaat technisch te laten beoordelen en het geschil redelijk op te lossen, zonder dat je meteen zelf expertise- en advocaatkosten draagt.`
4. **title:** `Wat als ik schade maak aan de woning tijdens het leggen of schuren?`
   **content:** `Kras- en stootschade aan eigendom van de klant, zoals trappen, plinten of bestaande vloeren, valt onder je BA-onderneming. Zeker bij werken in bewoonde woningen is dat waardevol. We stemmen de dekking af op het type werk dat je doet.`
5. **title:** `Zijn mijn schuurmachines verzekerd?`
   **content:** `Met machinebreuk kan je je eigen materieel beschermen tegen interne defecten en breuk. Voor een parketzetter is dat vaak waardevol: een uitgevallen schuurmachine legt je werf meteen stil. We bekijken welke machines je hebt en wat de vervangwaarde is.`
6. **title:** `Kan ik mijn pakket later uitbreiden?`
   **content:** `Ja. Veel parketzetters starten met een kernpakket en breiden uit wanneer ze personeel aannemen, meer schuur- en lakwerk doen of duurder parket verwerken. Assurman bouwt modulair: je groeit zonder telkens opnieuw van nul te starten.`

## PROCESS (4 stappen)
1. `Online scan (2 minuten)` — `Ben je voldoende beschermd? Doe nu de gratis scan en ontdek wat je nodig hebt.`
2. `Risico-audit op maat` — `We checken je huidige polissen, je machines en het type vloeren dat je legt.`
3. `Voorstel met modules` — `Je krijgt een helder voorstel, precies afgestemd op jouw activiteiten.`
4. `Afstemming & activatie` — `We leggen alles helder uit en zetten je dekking correct actief.`

## TUSSEN-CTA (H2)
`Parketzetter in Vlaanderen?<br />Wij maken jouw pakket op maat.`

## 3 TESTIMONIALS (5/5)
1. quote `Ze begrijpen dat hout leeft. Bij een vochtdiscussie stonden ze meteen klaar.` — name `Zaakvoerder, parketwerken (West-Vlaanderen)`
2. quote `Toen mijn schuurmachine uitviel, was de herstelling snel geregeld. Geen stilstand.` — name `Parketzetter, Oost-Vlaanderen`
3. quote `Ik wou vooral gedekt zijn voor schade bij de klant en mijn duur parket. Helder.` — name `Zelfstandig parketlegger`

## CONTROLEPUNTEN (tabel — fictief-illustratief)

> **Let op:** onderstaande cases zijn **fictief-illustratief**. Geen echte klanten, geen verzonnen wettelijke cijfers.
> Technische claims (vochtmeting, restvocht ondergrond, lakresultaat) onder voorbehoud van intake en expertise.

| Ref | Fictieve case | Gekozen pakket | Technische claim / aandachtspunt |
|---|---|---|---|
| PA-01 | Werkend parket door restvocht | rechtsbijstand + ba-onderneming | Vochtmeting ondergrond en binnenklimaat bepalen aansprakelijkheid |
| PA-02 | Krasschade aan trap/plint bij plaatsing | ba-onderneming | Schade aan eigendom klant in bewoonde woning |
| PA-03 | Geschil over lak-/schuurresultaat | rechtsbijstand | Glansgraad en strepen technisch laten beoordelen |
| PA-04 | Defecte schuurmachine | machinebreuk | Intern defect eigen materieel; stilstandrisico |

---
---

## BUILD-NOTITIES voor de hoofd-agent

- **insuranceCards** in elke `.astro` via `kaartenVoor([...])` met exact de slug-arrays hierboven. Alle 18 slugs
  bestaan in `src/data/verzekeringen.ts` (geverifieerd).
- **CTA's** uitsluitend uit `src/data/cta-labels.ts` (`CTA_SCAN`, `CTA_AFSPRAAK`, `CTA_DESTINATIONS`), exact zoals
  in `dakwerkers.astro`. Niet hardcoden.
- **Schema:** FAQPage genereren uit `faqItems` (zelfde patroon als `dakwerkers.astro:83-91`).
- **Em-dashes:** deze brief gebruikt bewust geen em-dashes in de copy-strings. De "—" in deze build-notities en
  tabel-uitleg zijn documentatie, niet site-copy. Neem ze niet over in de pagina.
- **CONTROLEPUNTEN-tabellen** zijn een intern QA-hulpmiddel (mapping case → pakket → technische aanname). Ze hoeven
  niet als zichtbare sectie op de pagina; het zijn de afwerkings-specifieke claims die bij twijfel via intake/expertise
  geverifieerd moeten worden. Beslis met Dennis of een afgeslankte versie (zonder claims) op de pagina nut heeft.
- **lokale CSS-prefix:** repliceer de `dw-`-klassen of, zoals de norm aanbeveelt voor nieuwe pagina's, gebruik de
  `.brand-*`-klassen uit `global.css`. Houd dit consistent binnen het cluster.
