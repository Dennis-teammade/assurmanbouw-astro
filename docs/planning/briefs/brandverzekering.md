# Content-brief — Brandverzekering (`/verzekeringen/brandverzekering/`)

> **Voor de template-agent.** Dit is definitieve copy, geen placeholder. Volg de
> sectie-volgorde van de verzekeringspagina-norm (`docs/content-guide/verzekeringspaginas.md`)
> en repliceer de structuur van `src/pages/verzekeringen/ba-bestuurder.astro` (toon, diepte,
> sectie-ritme, vanilla-JS toggles, SEO-eis: alle tab/accordion/FAQ-content in de HTML-bron).
>
> **Harde regels die in deze copy al verwerkt zijn:** Belgisch Nederlands je/jij (nooit u/uw);
> geen em-dashes; reviewscore 5/5; geen verzonnen verzekeraarsnamen; euro-bedragen in
> praktijkcases enkel als herkenbaar-fictieve illustratie. Auteur kenniscentrum = Benoit Keerman.
>
> **CTA's** uit `src/data/cta-labels.ts` (`CTA_SCAN`, `CTA_AFSPRAAK`, `CTA_DESTINATIONS`),
> secundair = `CTA_DESTINATIONS.afspraak`. Prefix-conventie voor lokale klassen/ids: gebruik
> `br-` (analoog aan `bab-` op de referentiepagina).
>
> **Let op de CONTROLEPUNTEN-tabel onderaan:** elk cijfer of juridische claim die als
> CONTROLEPUNT staat aangemerkt, moet door de eigenaar bevestigd worden. Zet die cijfers in de
> copy nooit neer als hard, ondubbelzinnig feit (gebruik "doorgaans", "vaak", "indicatief",
> "richtwaarde", "afhankelijk van je polis").

---

## META

- **title:** `Brandverzekering voor je bedrijfspand en inhoud | Assurman` (58 tekens)
- **description:** `Brandverzekering voor je bedrijfsgebouw, magazijn en inhoud: brand, storm, water, glas en diefstal. Wat is gedekt, wat kost het en wat als huurder? Doe de scan.` (157 tekens)
- **canonical:** `/verzekeringen/brandverzekering/`
- **schema:** `FAQPage` (uit `faqItems`), zoals op de referentiepagina.

---

## HERO

- **Badge-pill:** `Assurman · Bouwverzekeringen op maat`
- **H1 (2 regels):**
  `Brandverzekering`
  `voor je bedrijfspand`
- **Gouden subzin (1 zin):**
  `Bescherm je gebouw, magazijn, machines en stock tegen méér dan vuur alleen.`
- **Intro-alinea (3-4 zinnen, concreet bouwvoorbeeld):**
  `Een brandverzekering doet veel meer dan vuur dekken. Ze beschermt je bedrijfsgebouw, je werkplaats en alles wat erin staat tegen brand, ontploffing, storm, waterschade, glasbreuk en blikseminslag. Brandt het atelier van een schrijnwerker uit door een kortsluiting in een acculader, dan vergoedt de polis de heropbouw van het pand én de vervanging van de CNC-machine, het gereedschap en de houtvoorraad. Een woonverzekering of de brandpolis van je verhuurder dekt dat beroepsmatige niet: daarvoor heb je een polis op maat van je activiteit nodig.`
- **Hero-disclaimer (1 zin):**
  `Geen verkooppraatjes: een scan op maat van je pand, je activiteit en je voorraad.`
- **Knoppen:** primair `CTA_SCAN.hero` ("Doe de gratis scan") naar `CTA_DESTINATIONS.scan`; secundair `CTA_AFSPRAAK.advisory` ("Plan adviesgesprek") naar `CTA_DESTINATIONS.afspraak`.

---

## IN HET KORT (5 bullets, slate-kaart, gold-check-icoon)

1. De brandverzekering dekt je <strong>bedrijfsgebouw én de inhoud</strong> (machines, gereedschap, kantoormateriaal en voorraad) tegen brand, ontploffing, storm, water, glasbreuk en blikseminslag.
2. Ze dekt <strong>veel meer dan vuur</strong>: storm en hagel, waterschade, elektriciteitsschade en wettelijk verplichte natuurrampendekking horen er standaard bij.
3. Voor een eigenaar van een bedrijfspand is ze <strong>niet wettelijk verplicht</strong>, maar wel contractueel vereist bij <strong>handelshuur en bij elk hypothecair krediet</strong>.
4. Als huurder verzeker je je <strong>huurdersaansprakelijkheid</strong> (art. 1733-1735 oud BW) plus je eigen inhoud. De brandpolis van de eigenaar dekt jouw machines en stock niet.
5. Omzetverlies en doorlopende vaste kosten na een brand zitten er niet in: daarvoor heb je een aparte <strong>bedrijfsschadeverzekering</strong> nodig.

---

## WAT IS HET (H2 + 2 alinea's + infobox)

- **Section-label:** `Wat is het?`
- **H2:** `De polis die je gebouw, je inhoud en je voorraad beschermt`
- **Alinea 1:**
  `De brandverzekering, ook wel zaakschade- of patrimoniumverzekering genoemd, vergoedt de materiële schade aan je bedrijfspand en aan alles wat erin staat. Ondanks de naam dekt ze een hele reeks gevaren: niet alleen brand, rook en ontploffing, maar ook storm, hagel, waterschade, glasbreuk, blikseminslag en de wettelijk verplichte natuurrampendekking. De meeste polissen voor ondernemingen werken volgens het principe "alle risico's behalve", waarbij alles gedekt is wat niet uitdrukkelijk is uitgesloten.`
- **Alinea 2:**
  `Je verzekert twee dingen apart: het gebouw (de constructie, vaste installaties en verbeteringswerken) en de inhoud (je machines, gereedschap, kantoormeubilair, IT en je voorraad of stock). Wie eigenaar is van zijn pand verzekert beide. Een huurder verzekert meestal zijn huurdersaansprakelijkheid voor het gebouw plus zijn eigen inhoud, want de brandpolis van de eigenaar dekt enkel diens gebouw, niet jouw bedrijfsmateriaal. Net die opsplitsing zorgt voor de meeste misverstanden, en daar kijken we bij de scan eerst naar.`
- **Infobox "Wettelijke basis" (gold-tint):**
  **Titel:** `Wettelijke basis`
  **Tekst:** `De brandverzekering valt onder de <strong>Wet van 4 april 2014 betreffende de verzekeringen</strong>, onder toezicht van de FSMA. De huurdersaansprakelijkheid voor brand staat in het <strong>oud Burgerlijk Wetboek (art. 1733-1735)</strong>: een huurder is aansprakelijk voor brandschade aan het gehuurde goed, tenzij hij bewijst dat de brand buiten zijn schuld is ontstaan. De wettelijk verplichte minimumdekking voor natuurrampen is sinds 2007 in de brandpolis voor "eenvoudige risico's" geïntegreerd.`
  > CONTROLEPUNT: artikelnummers oud BW (1733-1735) en de juridische formulering laten aftekenen. Zie tabel BRV-2.

---

## IS HET VERPLICHT

- **Section-label:** `Is het verplicht?`
- **Vraagzin (boven het antwoordwoord):** `Is een brandverzekering verplicht voor je bedrijfspand?`
- **Antwoordwoord:** `Soms.`
  > Toelichting voor de agent: dit is bewust niet "Ja." of "Nee.". Brand is voor een
  > B2B-eigenaar niet wettelijk verplicht, maar contractueel quasi onvermijdelijk bij
  > handelshuur en krediet. "Soms." dekt die nuance het eerlijkst. Wil de eigenaar liever
  > een hard "Nee." (zoals op de referentiepagina), dan met de subzin hieronder.
- **Subzin:** `Niet wettelijk verplicht voor wie zijn bedrijfspand bezit. Maar bij handelshuur en bij een lening is ze contractueel zo goed als altijd vereist.`
- **4 kaarten (titel + 1 tekst):**
  1. **Titel:** `Eigenaar van je bedrijfspand`
     **Tekst:** `Niet wettelijk verplicht. Maar zonder polis draag je bij brand, storm of waterschade de volledige heropbouwkost zelf. Voor de meeste ondernemers is dat een onaanvaardbaar risico.`
  2. **Titel:** `Huurder van een handelspand`
     **Tekst:** `De handelshuurovereenkomst legt je bijna altijd een brandverzekering op. Je bent volgens het oud BW aansprakelijk voor brandschade aan het pand, tenzij je je onschuld bewijst.`
  3. **Titel:** `Lening op je pand`
     **Tekst:** `Een hypothecair krediet of investeringskrediet maakt een brandverzekering contractueel verplicht. De bank wil haar onderpand beschermd zien zolang het krediet loopt.`
  4. **Titel:** `Je eigen inhoud en stock`
     **Tekst:** `Geen wet verplicht je je machines, gereedschap of voorraad te verzekeren. Maar de brandpolis van je verhuurder dekt die niet, dus zonder eigen inhoudsdekking sta je er bij brand alleen voor.`

---

## IN DE PRAKTIJK (3 substantie-kaarten + 6 schadevoorbeelden)

- **Section-label:** `In de praktijk`
- **H2:** `Wanneer komt je brandverzekering tussen?`
- **Intro:** `Brand is maar één van de gevaren. In de praktijk komt de polis even vaak tussen voor stormschade aan een dak, een gesprongen leiding in de werkplaats of een blikseminslag die de IT vernielt.`

**3 substantie-kaarten (titel + tekst):**
1. **Titel:** `Gebouw én inhoud apart`
   **Tekst:** `Het gebouw en de inhoud zijn twee aparte waarborgen met elk hun eigen verzekerd bedrag. Een eigenaar verzekert beide. Een huurder verzekert zijn aansprakelijkheid voor het gebouw plus zijn eigen inhoud, want het gebouw is niet van hem.`
2. **Titel:** `Meer dan vuur`
   **Tekst:** `Storm, hagel, waterschade, glasbreuk, blikseminslag en natuurrampen zitten standaard mee in de polis. Net die uitbreidingen verklaren waarom een brandverzekering vaker tussenkomt voor water of storm dan voor echt vuur.`
3. **Titel:** `Eigenaar, huurder of gemengd`
   **Tekst:** `Wie verzekert wat hangt af van je situatie: eigenaar, handelshuurder of een pand dat deels privé en deels beroepsmatig gebruikt wordt. Soms doet de eigenaar afstand van verhaal tegenover de huurder, en dan ligt de verzekerde belang anders.`

**6 concrete bouw-schadevoorbeelden (1 zin elk, herkenbaar-fictieve illustratie):**
1. In het magazijn van een elektricien ontstaat kortsluiting in een acculader van een boormachine, het pand brandt uit en de polis vergoedt de heropbouw plus de voorraad kabels en gereedschap.
2. Tijdens een zware storm waaien de golfplaten van het dak van een schrijnwerker, het regenwater beschadigt de houtbewerkingsmachine en zowel de dak- als de waterschade worden vergoed.
3. Dieven forceren 's nachts de poort van het magazijn van een loodgieter en stelen voor zo'n 18.000 euro aan gereedschap en klaarliggende verwarmingsketels, gedekt dankzij de optie diefstal.
4. In het gehuurde kantoor van een aannemer springt tijdens een vriesweekend een waterleiding, en de huurdersaansprakelijkheid dekt het herstel van vloer en muren van het pand.
5. De bliksem slaat in vlak bij het kantoor van een bouwbedrijf, de overspanning vernielt de servers met alle plannen, en de elektriciteitsschade vervangt de IT-apparatuur.
6. Vandalen gooien in het weekend de grote ruit van de toonzaal van een vloerder in, en de glasbraakdekking betaalt het opruimen en het plaatsen van een nieuwe ruit.

> Toon-tip: net als op de referentiepagina mogen deze 6 voorbeelden achter een
> "Bekijk 6 concrete voorbeelden uit de bouw"-toggle (vanilla-JS, content in DOM).

---

## DEKKING (6 wel / 6 niet + kerngetal-blok)

- **Section-label:** `Dekking`
- **H2:** `Wat is wél en niet gedekt?`
- **Intro:** `Een brandverzekering voor ondernemingen dekt een brede waaier aan gevaren, maar niet alles. Hieronder de hoofdlijnen. De exacte dekking, limieten en franchises staan altijd in je polisvoorwaarden.`

**Wel gedekt (6, groen):**
1. Brand, rook, ontploffing en implosie, met directe en aanverwante schade aan gebouw en inhoud
2. Storm, hagel, sneeuw- en ijsdruk op het gebouw en de installaties
3. Waterschade door lekkende leidingen, binnensijpelend regenwater of een defect toestel
4. Elektriciteitsschade aan installaties en toestellen door kortsluiting, overspanning of blikseminslag
5. Glasbreuk van ruiten, koepels, etalages en glazen afscheidingen
6. Natuurrampen (overstroming, aardbeving, grondverschuiving) als wettelijk verplichte minimumdekking

**Niet (of beperkt) gedekt (6, rood):**
1. Schade door gebrekkig onderhoud, zoals nooit gereinigde dakgoten of een niet-geveegde schoorsteen
2. Constructiefouten en stabiliteitsgebreken (die horen onder ABR of de tienjarige aansprakelijkheid)
3. Diefstal zonder inbraak, en gereedschap dat los buiten op het terrein ligt
4. Slijtage, geleidelijke verslechtering en schade door slecht of uitgesteld onderhoud
5. Omzetverlies en doorlopende vaste kosten na schade (apart te verzekeren via bedrijfsschade)
6. Opzettelijke schade, fraude en schade die onder een andere polis valt (machinebreuk, voertuig)

**Kerngetal-blok (slate-balk, label + H3 + uitleg):**
- **Label:** `Indexatie`
- **H3:** `ABEX-index ± 1056 (begin 2026)`
- **Uitleg:** `Verzekeraars koppelen het verzekerde kapitaal van je gebouw aan de ABEX-index, die de evolutie van de bouwkosten in België volgt. Daardoor wordt je bedrag elk jaar automatisch aangepast en voorkom je onderverzekering: bij totale vernieling krijg je anders te weinig uitgekeerd omdat heropbouwen duurder is geworden. De exacte indexwaarde controleer je best op het moment van afsluiten.`
  > CONTROLEPUNT: ABEX-waarde ± 1056 begin 2026 (cross-cutting C3 in de controlelijst:
  > twee bronnen 1056, één 1057). Markeer als indicatief, niet als hard feit. Zie tabel BRV-3.

---

## AANVULLINGEN (5 uitbreidingen, slate-sectie + 1 gold CTA-kaart)

- **Section-label:** `Aanvullen`
- **H2:** `Vijf uitbreidingen die je polis afmaken`
- **Intro:** `De basiswaarborgen dekken de klassieke gevaren. Deze uitbreidingen sluiten de gaten die in de bouw telkens terugkomen.`

1. **Titel:** `Diefstal en vandalisme`
   **Tekst:** `Dekt inbraak en diefstal van gereedschap, machines, koper en voorraad uit je gebouw, plus vandalismeschade. Meestal vereist de waarborg sporen van braak en soms een minimale beveiliging.`
2. **Titel:** `Glasbreuk`
   **Tekst:** `Breekt een etalage, koepel of glazen wand, dan dekt deze uitbreiding het glas zelf én de opruim- en plaatsingskosten. Handig voor toonzalen en kantoren met veel beglazing.`
3. **Titel:** `Onrechtstreekse verliezen`
   **Tekst:** `Bovenop de vergoede schade keert de verzekeraar een forfait uit voor de talloze kleine bijkomende kosten (administratie, verplaatsingen, herorganisatie) die een schadegeval altijd meebrengt.`
4. **Titel:** `Alle risico's (uitgebreide formule)`
   **Tekst:** `In plaats van een lijst van gedekte gevaren is alles gedekt wat niet uitdrukkelijk is uitgesloten. Een ruimere bescherming voor wie weinig open eindjes wil.`
5. **Titel:** `Koppeling met bedrijfsschade`
   **Tekst:** `Een brandpolis vergoedt de materiële schade, maar niet je omzetverlies terwijl je stilligt. Gekoppeld aan een bedrijfsschadeverzekering houd je ook je vaste kosten en je omzet overeind tot je weer draait.`

**Gold CTA-kaart (laatste cel van de grid):**
- **H3:** `Niet zeker of je gebouw én inhoud goed gedekt zijn?`
- **Tekst:** `Doe de scan: we bekijken je pand, je inhoud, je voorraadpieken en je huur- of eigendomssituatie tegenover wat verzekeraars vandaag aanbieden.`
- **Knop:** `CTA_SCAN.start` ("Start de scan") naar `CTA_DESTINATIONS.scan`.

---

## PREMIE (intro + 3 formuleblokken + 4 factoren + fiscaal-zin)

- **Section-label:** `Prijs & berekening`
- **H2:** `Hoe wordt je premie berekend?`
- **Intro:** `Er is geen vaste prijs. De premie van een brandverzekering wordt berekend op de verzekerde waarden van je gebouw en je inhoud, vermenigvuldigd met een premievoet die afhangt van je activiteit, je constructie en je preventie. Voor een doorsnee bouwonderneming is een correcte polis vaak betaalbaarder dan gevreesd.`

**3 formuleblokken (basis × premievoet = jaarpremie):**
1. **Blok 1 (Basis):**
   **Titel:** `Verzekerde waarden`
   **Uitleg:** `heropbouwwaarde gebouw + nieuwwaarde inhoud en stock`
2. **Blok 2 (Premievoet, × ):**
   **Titel:** `Premievoet (‰)`
   **Uitleg:** `per duizend euro verzekerd kapitaal, afhankelijk van activiteit en risico`
3. **Blok 3 (Jaarpremie, = ):**
   **Titel:** `Jouw jaarpremie`
   **Uitleg:** `plus taksen (zie fiscaal hieronder)`

**4 premiefactoren:**
1. **Titel:** `Waarde van gebouw en inhoud`
   **Tekst:** `De heropbouwwaarde van je pand en de nieuwwaarde van je machines, gereedschap en voorraad vormen de basis van de premie.`
2. **Titel:** `Activiteit en constructie`
   **Tekst:** `Een houtatelier of een spuiterij weegt zwaarder dan een kantoor. Ook de bouwmaterialen, de oppervlakte en de ligging spelen mee.`
3. **Titel:** `Preventie en beveiliging`
   **Tekst:** `Branddetectie, blusmiddelen, een alarm en een goede elektrische keuring kunnen je premie verlagen en zijn soms een voorwaarde voor dekking.`
4. **Titel:** `Voorraad, opties en schadeverleden`
   **Tekst:** `Seizoenspieken in je stock, gekozen uitbreidingen zoals diefstal, je franchise en eerdere schadegevallen beïnvloeden het eindtarief.`

**Fiscaal-zin (folded card):**
`<strong>Fiscaal:</strong> de premie voor je beroepsmatig pand en inhoud is aftrekbaar als beroepskost. Op een brandpolis weeg je naast de basis-premietaks ook een bijkomende, brandspecifieke bijdrage mee, zodat de totale belasting op de premie hoger ligt dan bij een gewone aansprakelijkheidsverzekering.`
  > CONTROLEPUNT (taks): brandverzekering heeft een afwijkende taksstructuur. Basis-premietaks
  > 9,25% op niet-levensverzekeringen, die volgens de federale begroting vanaf 1 april 2026
  > stijgt naar 9,60%. Daarbovenop geldt voor brandpolissen een bijkomende RIZIV/INAMI-bijdrage
  > op brandrisico's (in de bronnen ± 6,5%-6,56%). Concreet eindpercentage NIET als hard feit in
  > de copy zetten zonder bevestiging. Zie tabel BRV-5.

---

## CTA-BAND (H2, 2 regels, gold-light)

- **H2 (2 regels):**
  `Pand, magazijn of atelier in de bouw?`
  `Wij verzekeren je gebouw én je inhoud correct.`
- **Subzin:** `Start nu in 2 minuten of kies meteen voor persoonlijk advies.`
- **Knop:** `CTA_SCAN.requestNow` ("Doe de scan nu") naar `CTA_DESTINATIONS.scan`.

---

## PER BEROEP (6 tabs, 1 alinea per stiel)

- **Section-label:** `Per beroep`
- **H2:** `Wat brand betekent voor jouw stiel`
- **Intro:** `Elk bouwberoep heeft een ander pand, andere machines en een andere voorraad. Hieronder wat een brandverzekering concreet voor jou beschermt.`

1. **Dakwerkers** (`/sectoren/dakwerkers`)
   **Titel:** `Voor dakwerkers`
   **Tekst:** `Je werkt met branders, bitumen en hete lucht, en net dat maakt het brandrisico op de werf en in je opslag reëel. In je magazijn liggen rollen dakdicht, EPDM, isolatie en dure machines die bij brand of storm in één klap verloren gaan. Een brandverzekering vergoedt het pand én die voorraad, en met de optie diefstal ook je gestolen gereedschap.`
2. **Metsers / aannemers** (`/sectoren/aannemers`)
   **Titel:** `Voor metsers en algemene aannemers`
   **Tekst:** `Je hebt vaak een loods of werkplaats met materieel, stelling, kleinmaterieel en bouwmaterialen in stock. Brand, storm of een gesprongen leiding kan die opslag en je administratie lamleggen. Huur je je loods, dan dekt je huurdersaansprakelijkheid de schade aan het gebouw, terwijl je eigen inhoud apart verzekerd hoort te zijn.`
3. **Loodgieters** (`/sectoren/loodgieters`)
   **Titel:** `Voor loodgieters`
   **Tekst:** `In je magazijn liggen verwarmingsketels, sanitair, koper en gereedschap, vaak voor een serieus bedrag aan klaarliggende bestellingen. Koper en ketels zijn een geliefd doelwit voor dieven, en een kortsluiting of brand legt je voorraad plat. De brandpolis met diefstaloptie vangt zowel de brand- als de inbraakschade op.`
4. **Elektriciens** (`/sectoren/elektriciens`)
   **Titel:** `Voor elektriciens`
   **Tekst:** `Je werkt dagelijks met spanning, acculaders en kabelhaspels, en juist daar schuilt een verhoogd brandrisico in je atelier. Een kortsluiting in een laadstation of een blikseminslag kan je voorraad kabels, je meetapparatuur en je IT vernielen. De waarborgen brand en elektriciteitsschade vergoeden zowel het pand als de getroffen installaties en toestellen.`
5. **Schilders** (`/sectoren/schilders`)
   **Titel:** `Voor schilders`
   **Tekst:** `Verf, solventen, white spirit en spuitapparatuur maken je opslag brandgevoeliger dan gemiddeld. Een smeulende vod of een vonk volstaat om je voorraad en je atelier te verliezen. Een brandverzekering met aandacht voor je opslag van brandbare producten dekt het pand en de inhoud, en de verzekeraar kan extra preventie vragen.`
6. **Schrijnwerkers** (`/sectoren/schrijnwerkers`)
   **Titel:** `Voor schrijnwerkers`
   **Tekst:** `Houtstof, machines en gestockeerd hout vormen samen een hoog brandrisico in je atelier. Een kortsluiting in een afzuiginstallatie of een oververhitte motor kan je CNC-machine, je voorraad en je hele werkplaats in de as leggen. De brandpolis vergoedt de heropbouw, de machines en het hout, terwijl bedrijfsschade je omzet overeind houdt terwijl je heropbouwt.`

---

## MIJN SITUATIE (3 accordion-panels, titel + 2 alinea's, slate-sectie)

- **Section-label:** `Mijn situatie`
- **H2:** `Welke situatie past bij jou?`
- **Intro:** `Drie typische situaties uit de Belgische bouwsector. Vind de jouwe en zie wat dat concreet betekent voor je brandverzekering.`

**Panel 1**
- **Titel:** `Ik ben eigenaar van mijn bedrijfspand`
- **Alinea 1:** `Je verzekert zowel het gebouw (de constructie, de vaste installaties en de verbeteringswerken) als de inhoud (je machines, gereedschap, IT en voorraad). De heropbouwwaarde van het gebouw bepaalt het verzekerde kapitaal, en de ABEX-koppeling houdt dat bedrag mee met de stijgende bouwkosten.`
- **Alinea 2:** `Praktisch: heb je een lening lopen op het pand, dan eist je bank een brandverzekering zolang het krediet loopt. Let ook op verbouwingen, zonnepanelen of een uitbreiding: meld die aan je makelaar, anders dreig je onderverzekerd te zijn op het moment dat het ertoe doet.`

**Panel 2**
- **Titel:** `Ik huur mijn werkplaats of kantoor`
- **Alinea 1:** `Als huurder ben je volgens het oud Burgerlijk Wetboek aansprakelijk voor brandschade aan het gehuurde pand, tenzij je bewijst dat de brand buiten je schuld ontstond. Daarom verzeker je je huurdersaansprakelijkheid. Soms doet de eigenaar in het huurcontract afstand van verhaal, maar ook dan moet je je eigen inhoud en je aansprakelijkheid tegenover buren en derden nog regelen.`
- **Alinea 2:** `Praktisch: de brandpolis van je verhuurder dekt enkel zijn gebouw, nooit jouw machines, gereedschap of stock. Reken er dus niet op. Een eigen inhoudsdekking is wat je werkkapitaal beschermt als de werkplaats afbrandt of onder water loopt.`

**Panel 3**
- **Titel:** `Ik sla materiaal en stock op`
- **Alinea 1:** `Heb je een magazijn of loods vol gereedschap, materialen of klaarliggende bestellingen, dan is de inhoudsdekking je belangrijkste waarborg. De verzekerde waarde moet je werkelijke voorraad volgen, ook in piekperiodes, anders krijg je bij schade maar een deel uitgekeerd.`
- **Alinea 2:** `Praktisch: hou een actuele inventaris en bewaar aankoopfacturen, zodat je bij schade de waarde kunt aantonen. Een diefstaloptie is hier vaak geen luxe, want koper, ketels en machines zijn gewild bij inbrekers en de standaarddekking vereist meestal sporen van braak.`

---

## BIJ EEN SCHADEGEVAL (4 stappen, titel + tekst)

- **Section-label:** `Bij schade`
- **H2:** `Wat moet je doen na brand-, storm- of waterschade?`
- **Intro:** `Snel en correct reageren beperkt de schade én versnelt je vergoeding. Verwittig je makelaar altijd zo snel mogelijk: je polis bepaalt de aangiftetermijn.`

1. **Stap 1 — Titel:** `Beperk en beveilig`
   **Tekst:** `Breng jezelf en anderen in veiligheid en verwittig indien nodig de hulpdiensten. Doe wat redelijk is om verdere schade te beperken, bijvoorbeeld de hoofdkraan of de stroom afsluiten.`
2. **Stap 2 — Titel:** `Bewijs de schade`
   **Tekst:** `Maak foto's en video's vóór je iets opruimt, en bewaar de beschadigde goederen. Verzamel je inventaris en aankoopfacturen zodat je de waarde kunt aantonen.`
3. **Stap 3 — Titel:** `Meld aan je makelaar`
   **Tekst:** `Verwittig je makelaar of verzekeraar binnen de termijn die in je polis staat. Hoe sneller je meldt, hoe vlotter de expert kan langskomen en de vergoeding op gang komt.`
4. **Stap 4 — Titel:** `Volg op met de expert`
   **Tekst:** `Werk mee aan de expertise, hou alle stukken bij en herstel pas wat dringend is. Voor grotere herstellingen wacht je het akkoord van de verzekeraar af.`
   > CONTROLEPUNT: aangiftetermijn niet als vast getal poneren. Copy verwijst bewust naar
   > "de termijn die in je polis staat". Zie tabel BRV-4.

---

## FAQ (11 vragen + antwoorden)

1. **Wat dekt een brandverzekering voor ondernemingen?**
   `Ze vergoedt de materiële schade aan je bedrijfsgebouw en aan de inhoud (machines, gereedschap, kantoormateriaal en voorraad) door brand, ontploffing, storm, hagel, waterschade, glasbreuk, blikseminslag en de wettelijk verplichte natuurrampendekking. Diefstal en bedrijfsschade zijn aparte uitbreidingen. De exacte dekking staat in je polisvoorwaarden.`
2. **Is een brandverzekering wettelijk verplicht voor een bedrijf in België?**
   `Voor een eigenaar van een bedrijfspand is ze niet wettelijk verplicht. Toch is ze in de praktijk bijna onvermijdelijk: een handelshuurovereenkomst legt ze je als huurder zo goed als altijd op, en een bank eist ze zolang er een krediet op het pand loopt.`
3. **Kan een handelshuurcontract me een brandverzekering opleggen?**
   `Ja. De meeste handelshuurcontracten verplichten de huurder uitdrukkelijk om zijn huurdersaansprakelijkheid voor brand te verzekeren. Daarnaast ben je volgens het oud Burgerlijk Wetboek sowieso aansprakelijk voor brandschade aan het gehuurde, tenzij je bewijst dat de brand buiten je schuld ontstond.`
4. **Dekt de brandverzekering van mijn verhuurder mijn machines en stock?**
   `Nee. De polis van de eigenaar dekt enkel zijn gebouw, niet jouw bedrijfsmateriaal, machines, IT of voorraad. Die moet je zelf verzekeren via een eigen waarborg inhoud. Dit is het meest voorkomende misverstand bij huurders.`
5. **Wat is het verschil tussen heropbouwwaarde en marktwaarde?**
   `De brandverzekering werkt op de heropbouwwaarde: wat het kost om je pand opnieuw op te bouwen met dezelfde materialen, inclusief architect- en studiekosten en btw. Dat staat los van de marktwaarde, die ook bepaald wordt door de ligging en de grondwaarde. Daarom kan de verzekerde waarde verschillen van wat je pand zou opbrengen bij verkoop.`
6. **Is mijn beroepsactiviteit gedekt door mijn woonverzekering?**
   `Doorgaans niet of slechts heel beperkt. Een woonverzekering is gemaakt voor privégebruik. Werk je beroepsmatig van thuis of in een gemengd pand, dan dekt ze je machines, voorraad en beroepsaansprakelijkheid meestal niet. Voor professioneel gebruik heb je een aangepaste of aparte polis nodig.`
7. **Is diefstal standaard inbegrepen?**
   `Nee, diefstal is een optionele uitbreiding. Standaard dekt de brandverzekering brand, storm, water en aanverwante gevaren. Wil je je gereedschap, koper of voorraad tegen inbraak beschermen, dan voeg je de waarborg diefstal toe. Die vereist meestal sporen van braak en soms een minimale beveiliging.`
8. **Dekt de brandverzekering mijn omzetverlies als ik stilval?**
   `Nee. Een standaard brandverzekering vergoedt enkel de materiële schade. Het omzetverlies en de vaste kosten die doorlopen terwijl je niet kunt werken, dek je met een aparte bedrijfsschadeverzekering. Brand en bedrijfsschade vullen elkaar aan.`
9. **Wat is onderverzekering en hoe vermijd ik het?**
   `Van onderverzekering is sprake als je verzekerde bedrag lager ligt dan de werkelijke waarde. Bij schade keert de verzekeraar dan maar evenredig uit. Je vermijdt het door je waarden correct te bepalen, de ABEX-indexatie te laten lopen en wijzigingen (verbouwing, nieuwe machines, hogere voorraad) tijdig te melden.`
10. **Zijn zonnepanelen, een uithangbord en goederen buiten het gebouw gedekt?**
    `Niet automatisch. Zonnepanelen, uithangborden, terrasoverkappingen en materiaal dat buiten of bij derden staat, vragen vaak een specifieke vermelding of uitbreiding. Geef ze bij het afsluiten op, zodat ze mee in het verzekerde bedrag zitten.`
11. **Welke factoren bepalen mijn premie?**
    `De verzekerde waarde van je gebouw en inhoud, je activiteit en constructie, je ligging, je preventie- en beveiligingsmaatregelen, je voorraadpieken, je gekozen opties en je schadeverleden. Een houtatelier of spuiterij weegt zwaarder dan een kantoor, en goede preventie kan je premie verlagen.`

> De agent mag desgewenst een 12e FAQ toevoegen ("Wat moet ik onmiddellijk doen na een
> brand?") door de stappen uit "Bij een schadegeval" beknopt te herhalen, zodat de FAQ
> 10-12 vragen telt zoals de norm vraagt.

---

## CAROUSEL (3 gerelateerde slugs)

`kaartenVoor(['bedrijfsschade', 'machinebreuk', 'alle-bouwplaats-risicos'])`

- **sectionLabel:** `Ook interessant`
- **headline:** `Gerelateerde verzekeringen`
- **subheadline:** `Deze verzekeringen vullen je brandverzekering aan en houden je bouwbedrijf draaiende na schade.`
- **background:** `#F5F2FF`

> Reden: bedrijfsschade (omzetverlies na brand), machinebreuk (defecten die brand niet dekt)
> en ABR (schade aan werken in uitvoering) liggen voor brand het meest voor de hand. Alle drie
> bestaan als geldige slugs in `src/data/verzekeringen.ts`.

---

## DATABRON-UPDATE (`src/data/verzekeringen.ts`, slug `brandverzekering`)

Vervang de huidige `// TODO`-copy door deze definitieve waarden en zet `status: 'live'`.

- **korteBeschrijving (1 zin):**
  `Dekt je bedrijfsgebouw, magazijn en inhoud (machines, gereedschap en stock) tegen brand, storm, water, glasbreuk en diefstal, en beschermt je huurdersaansprakelijkheid.`
- **4 korte kaart-bullets:**
  1. `Gebouw én inhoud verzekerd`
  2. `Méér dan vuur: storm, water en glas`
  3. `Huurdersaansprakelijkheid gedekt`
  4. `Uit te breiden met diefstal en bedrijfsschade`
- **gerelateerde:** ongewijzigd laten: `['bedrijfsschade', 'machinebreuk', 'alle-bouwplaats-risicos']` (klopt al).
- **icoon:** `flame` (ongewijzigd).

---

## CONTROLEPUNTEN

Elk getal of elke juridische claim die de eigenaar (Benoit/Maaike) moet bevestigen vóór
productie. Format conform `docs/planning/feedback-controlelijst.md`. Voeg dit blok toe onder
`## /verzekeringen/brandverzekering` in de controlelijst.

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie |
|---|---|---|---|
| BRV-1 | Brand is **niet wettelijk verplicht** voor een B2B-eigenaar, maar **contractueel vereist bij handelshuur en bij elk hypothecair/investeringskrediet**. Het antwoordwoord is bewust "Soms." i.p.v. "Ja./Nee." | Eerlijkste weergave van de gemengde verplichting; sluit aan bij research (Callant, Yago) en de juridische nuance uit het SERP-onderzoek. | Bevestig de formulering. Indien je liever een hard "Nee." wil (zoals op ba-bestuurder), zeg het, dan passen we het antwoordwoord aan met behoud van de subzin. |
| BRV-2 | Wettelijke basis = **Wet van 4 april 2014** (verzekeringen) + **huurdersaansprakelijkheid art. 1733-1735 oud BW** + natuurrampendekking wettelijk verplicht sinds 2007. | Standaard Belgisch kader; art. 1733 staat in de research, 1734-1735 als context. | Juridisch laten aftekenen: exacte artikelnummers (1733-1735), het jaartal 2007 voor de verplichte natuurrampendekking, en de formulering. |
| BRV-3 | **ABEX-index ± 1056 (begin 2026)** als indexatiemechanisme tegen onderverzekering; in copy als "indicatief / controleer bij afsluiten". | Cross-cutting C3: twee bronnen 1056, één 1057; abex.be blokkeert scraping. | Bevestig de exacte ABEX-waarde op de officiële publicatie op moment van publiceren. |
| BRV-4 | **Aangiftetermijn bij schade** wordt NIET als vast getal genoemd; copy verwijst naar "de termijn die in je polis staat". | Termijn verschilt per polis (vgl. ABR2 = meestal 8 kalenderdagen). Bewust open gelaten om geen fout cijfer te poneren. | Bevestig of we een standaardtermijn (bv. 8 kalenderdagen) willen tonen, of het bij "zie je polis" houden. |
| BRV-5 | **Premietaks brandverzekering = afwijkend**: basis-premietaks 9,25% op niet-levensverzekeringen (volgens federale begroting **naar 9,60% vanaf 1/4/2026**) **plus een bijkomende brandspecifieke bijdrage** (RIZIV/INAMI op brandrisico's, in bronnen ± 6,5%-6,56%). Copy noemt geen hard eindpercentage, enkel "hoger dan bij een gewone aansprakelijkheidsverzekering". | Brand draagt een extra wettelijke bijdrage bovenop de gewone premietaks; het exacte totaal is niet eenduidig in neutrale bronnen en de 9,60%-verhoging hangt aan de begroting. | Bevestig: (a) geldt 9,25% of al 9,60% op moment van publicatie; (b) het exacte percentage van de brandspecifieke bijdrage; (c) of we het totaal expliciet op de pagina willen of bewust kwalitatief houden. |
| BRV-6 | **Diefstal en bedrijfsschade zijn aparte/optionele waarborgen**, niet standaard inbegrepen in de brandpolis. | Marktstandaard (research §4 misconceptions); voorkomt het misverstand dat alles in één polis zit. | Bevestig dat dit aansluit bij wat Assurman effectief aanbiedt (diefstal als optie, bedrijfsschade als aparte polis). |
| BRV-7 | **Franchise** wordt op de pagina niet als hard bedrag genoemd. | Research noemt ± 250-350 euro geïndexeerd (in praktijk ± 1.000 euro) en de Engelse franchise, maar dit verschilt sterk per maatschappij en is niet neutraal te poneren. | Bevestig of we een franchisebereik willen tonen; zo ja, tegen de effectieve voorwaarden van onze verzekeraars. |

> Euro-bedragen in de 6 praktijkcases (bv. ± 18.000 euro gestolen gereedschap) staan enkel
> als **herkenbaar-fictieve illustratie**, conform de brand-voice-regel. Geen verzekeraarsnamen
> in de copy; partners enkel visueel via de PartnerSlider.
