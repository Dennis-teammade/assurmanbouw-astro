# Feedback-controlelijst — aandachtspunten voor de eigenaar

> **Doel.** Per pagina de punten waar wij een **weloverwogen beslissing** namen die de
> eigenaar (Benoit/Maaike) moet **controleren en goedkeuren** vóór productie. De
> pagina's zelf zien er volledig afgewerkt uit en bevatten **geen** zichtbare
> "nog-uit-te-werken"-markeringen. Deze lijst is het kanaal voor "beslist, maar checken".
>
> **Workflow.** Pagina's worden zo snel mogelijk op het hoogste niveau afgewerkt, op de
> staging-site `assurbouw.onlineprojecten.be` gezet, en daarna ter feedback gedeeld
> **samen met deze lijst**. Benoit loopt deze lijst af naast de pagina's.
>
> **Regel.** Elke nieuwe of herwerkte pagina krijgt hier een blok zodra ze op staging
> staat. Format per punt: **Wat we beslisten** · **Waarom** · **Te controleren / suggestie**.
>
> **Status-legende:** 🔲 open · ✅ goedgekeurd · ✏️ aangepast na feedback · ❌ afgekeurd.

---

## Cross-cutting — geverifieerde cijfers (gelden site-breed)

Geverifieerd door ons tegen officiële/sector-bronnen (juni 2026). Toch laten aftekenen,
want wetgeving en bedragen wijzigen.

| # | Wat we beslisten | Waarom / bron | Te controleren | Status |
|---|---|---|---|---|
| C1 | **WAP-rendementsgarantie = 2,50%** (niet 1,75%) | Sinds 1/1/2025, blijft 2,50% in 2026. 1,75% gold 2016-2024 (stond fout in de research). Bron: Acerta/Attentia. | Bevestig dat 2,50% nog geldt op moment van publicatie. | 🔲 |
| C2 | **VAPZ-max 2026:** gewoon €4.086,34 (8,17%) / sociaal €4.701,54 (9,40%); stijgt na wetswijziging naar €4.251,39 (8,50%) / €4.891,60 (9,78%) | Bron: Practicali. Overgangsregel begin 2026. | Bevestig de bedragen + of de wetswijziging al gepubliceerd is. | 🔲 |
| C3 | **ABEX-index 01/01/2026 ≈ 1056** | Twee bronnen 1056, één 1057; abex.be blokkeert scraping. | Bevestig exacte waarde op de officiële ABEX-publicatie. | 🔲 |
| C4 | **PC 124** = sectoraal aanvullend pensioen (1,1% brutoloon, via Constructiv, opt-out mogelijk) | Niet "groepsverzekering verplicht". Bron: Securex. | Bevestig formulering + percentage. | 🔲 |
| C5 | **Boek 6 BW (1/1/2025)** schaft quasi-immuniteit hulppersoon af → onderaannemers rechtstreeks aansprakelijk | Juridische kernclaim, breed gerapporteerd. | Juridisch laten aftekenen + tegen DECISIONS-LOG checken. | 🔲 |

> Regel brand-voice: euro-bedragen in praktijkcases staan enkel als **herkenbaar-fictieve
> illustratie** op de pagina, nooit als feit.

---

## /verzekeringen/alle-bouwplaats-risicos (ABR)

Status pagina: **afgewerkt, norm-conform, op staging**. Onderstaande punten zijn
weloverwogen ingevuld maar vragen jouw bevestiging.

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| ABR1 | **Premie = 0,1% tot 0,5% van de totale bouwkost**; voorbeeld: nieuwbouw €300.000 → €300-1.500 voor de volledige bouwperiode | Dit is het gangbare marktbereik; de risicofactoren (type werken, bouwwaarde, looptijd) zijn correct. Geen neutrale bron publiceert exacte tarieven (alleen verzekeraars/makelaars, die we niet citeren). | Bevestig het premiebereik en het rekenvoorbeeld tegen de **effectieve tarieven van onze verzekeraars**. Pas aan indien Assurman een ander bereik hanteert. | 🔲 |
| ABR2 | **Aangiftetermijn bij schade = meestal 8 kalenderdagen** (staat in je polis) | Gangbare termijn; pagina verwijst expliciet naar "je polis". | Bevestig dat 8 kalenderdagen klopt als standaard, of geef de juiste termijn. | 🔲 |
| ABR3 | **Onderhoudsdekking = typisch 12-24 maanden** na oplevering | Marktstandaard voor de onderhoudswaarborg. | Bevestig de gangbare duur die wij aanbieden. | 🔲 |
| ABR4 | **Wettelijke basis = Wet van 4 april 2014 + FSMA-toezicht**; ABR niet wettelijk verplicht, wel contractueel bij grotere projecten | Correcte, generieke verwijzing. | Bevestig de juridische formulering. | 🔲 |

**Minors (parkeren, geen blokker voor feedback):**
- Secundaire tekst gebruikt deels `#64748b` i.p.v. token-slate `#3F5767` (bekende afwijking, cosmetisch).
- Hero/CTA-beeld is generiek (`algemeen-hero`); eventueel later een ABR-eigen beeld.
- Geen aparte alert-sectie (rood-tint) zoals de norm optioneel toelaat.
- Overweeg een kruislink naar BA-10 (tienjarige aansprakelijkheid): ABR en tienjarige hangen sterk samen.

---

## /verzekeringen/ba-bestuurder (BA Bestuurder)

Status pagina: **afgewerkt, op staging.** Onderstaande punten weloverwogen ingevuld, vragen jouw bevestiging.

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| BAB1 | Wettelijke basis = WVV art. 2:56 (bestuursfouten) + 2:57 (aansprakelijkheidsbeperking) | Standaard juridisch kader bestuurdersaansprakelijkheid | Juridisch laten aftekenen (artikelnummers + formulering). | 🔲 |
| BAB2 | De wettelijke "cap" staat **kwalitatief** op de pagina (geldt niet bij zware fouten, herhaalde lichte fouten, RSZ/btw) — GEEN bedragen | Codex waarschuwde tegen ongekwalificeerd overnemen van bedragen (bv. "12 miljoen") | Bevestig of we de exacte cap-tiers (125k/250k/1M/3M/12M) willen tonen; zo ja, met officiële bron. | 🔲 |
| BAB3 | Verzekerd kapitaal "richtwaarde vanaf € 250.000", franchise vaak nihil | Marktindicatie aansluitend bij de KMO-cap | Bevestig tegen de effectieve kapitalen/tarieven van onze verzekeraars. | 🔲 |
| BAB4 | Premietaks 9,25% | Standaard taks aansprakelijkheidsverzekering | Bevestig dat 9,25% klopt voor een D&O-polis. | 🔲 |
| BAB5 | Boek 6 BW (1/1/2025) schaft quasi-immuniteit hulppersoon af → bestuurder sneller rechtstreeks aanspreekbaar | Zie cross-cutting C5 | Juridisch laten aftekenen (idem C5). | 🔲 |

Minors: hero/CTA-beeld generiek (`algemeen`); geen aparte alert-sectie; tab-btn/FAQ-chevron gebruiken nog `#64748b` (cosmetische afwijking, idem norm-pagina's). De 6 sectorcases zijn kwalitatief (geen euro-bedragen).

---

## /verzekeringen/brandverzekering (Brandverzekering)

Status pagina: **afgewerkt, op staging.** 7 controlepunten (uit de research-brief).

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| BRV-1 | Antwoordwoord op "verplicht?" = **"Soms."** (niet wettelijk verplicht voor eigenaar; contractueel vereist bij handelshuur en krediet) | Eerlijkste weergave van de gemengde verplichting | Bevestig de formulering. Liever een hard "Nee."? Dan passen we het aan met behoud van de subzin. | 🔲 |
| BRV-2 | Wettelijke basis = **Wet 4 april 2014** + **huurdersaansprakelijkheid art. 1733-1735 oud BW** + natuurrampendekking wettelijk sinds **2007** | Standaard Belgisch kader | Juridisch laten aftekenen: exacte artikelnummers (1733-1735) + jaartal 2007 + formulering. | 🔲 |
| BRV-3 | **ABEX ± 1056 (begin 2026)** als indexatie, op de pagina "indicatief, controleer bij afsluiten" | Cross-cutting C3 (1056 vs 1057) | Bevestig de exacte ABEX-waarde op de officiële publicatie. | 🔲 |
| BRV-4 | **Aangiftetermijn** niet als vast getal; copy zegt "de termijn die in je polis staat" | Termijn verschilt per polis | Bevestig of we een standaardtermijn (bv. 8 kalenderdagen) tonen, of "zie polis" houden. | 🔲 |
| BRV-5 | **Brandtaks = afwijkend**: basis-premietaks 9,25% (volgens begroting → 9,60% vanaf 1/4/2026) **plus** brandspecifieke RIZIV-bijdrage (± 6,5%). Copy noemt **geen hard eindpercentage**, enkel "hoger dan bij een gewone aansprakelijkheidsverzekering". | Brand draagt een extra wettelijke bijdrage; totaal niet eenduidig in neutrale bronnen | Bevestig: (a) 9,25% of al 9,60%; (b) % brandbijdrage; (c) totaal expliciet tonen of kwalitatief houden. | 🔲 |
| BRV-6 | **Diefstal en bedrijfsschade = aparte/optionele** waarborgen, niet standaard in de brandpolis | Marktstandaard; voorkomt misverstand | Bevestig dat dit aansluit bij wat Assurman aanbiedt. | 🔲 |
| BRV-7 | **Franchise** niet als hard bedrag genoemd | Verschilt sterk per maatschappij | Bevestig of we een franchisebereik willen tonen; zo ja, tegen de effectieve voorwaarden. | 🔲 |

Euro-bedragen in de 6 praktijkcases (bv. ± 18.000 euro gestolen gereedschap) staan enkel als herkenbaar-fictieve illustratie.

---

## /verzekeringen/bedrijfsschade (Bedrijfsschadeverzekering)

Status pagina: **afgewerkt, op staging.** 8 controlepunten (uit de research-brief). Inhoudelijke grens bewaakt: bedrijfsschade = stilstand na **materiële** schade, NIET uitval zaakvoerder (= omzet/gewaarborgd inkomen).

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| BS1 | Wettelijke basis = **Wet 4 april 2014 + FSMA**; niet-verplichte aanvullende waarborg, trigger = gedekt materieel schadegeval | Generieke verzekeringsrechtelijke verwijzing | Juridische formulering laten aftekenen. | 🔲 |
| BS2 | **Vergoedingsperiode = 12 tot 24 maanden** (18-24 als bouw-norm) | Marktstandaard; geen neutrale bron met exacte termijnen | Bevestig dat 12/18/24 de termijnen zijn die wij aanbieden. | 🔲 |
| BS3 | **Dekkingsbasis = brutowinst** (omzet min variabele kosten), op jaarrekening, jaarlijks actualiseren | Gangbare brutowinstmethode | Bevestig dat dit onze standaard is. | 🔲 |
| BS4 | **Premietaks 9,25%** (staat als feit op de pagina, idem BA Bestuurder) | Standaardtaks niet-leven; research §3 noemt 9,25% expliciet | Bevestig dat 9,25% klopt op moment van publicatie (geen brandspecifieke opslag zoals bij de brandpolis). | 🔲 |
| BS5 | **Geen premie-bereik in euro** op de pagina, enkel de factoren | Brand-voice: geen verzonnen cijfers | Bevestig dat we geen indicatief bereik tonen; zo ja met effectieve tarieven. | 🔲 |
| BS6 | **"Failliet binnen het jaar"-statistiek NIET als hard cijfer** (kwalitatief: "verschil tussen heropstarten en stoppen") | Percentage niet controleerbaar onderbouwd | Wil je een cijfer tonen? Lever een controleerbare bron; anders kwalitatief laten. | 🔲 |
| BS7 | **5 uitbreidingen** (leveranciers/klanten, extra kosten, langere vergoedingsperiode, nutsvoorzieningen, boete-/contractverlies) als beschikbaar voorgesteld | Gangbare optionele waarborgen | Bevestig welke wij effectief aanbieden; schrap/hernoem wat niet in ons gamma zit. | 🔲 |
| BS8 | **Boete-/contractverlies** dekt enkel boetes die rechtstreeks uit de gedekte schade voortvloeien | Research §4 | Bevestig de voorwaarde/formulering tegen onze polisvoorwaarden. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/CTA-beeld generiek.

---

## /verzekeringen/vervoerde-goederen (Verzekering vervoerde goederen)

Status pagina: **afgewerkt, op staging.** "Eigen goederen onderweg"-pagina; cargo/CMR scherp afgebakend. 8 controlepunten.

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| VG1 | **Verzekerd bedrag per voertuig: € 5.000 - € 25.000**, richtwaarde € 25.000 indicatief | Gangbaar marktbereik voor stielmannen | Bevestig bereik + richtwaarde tegen onze effectieve limieten. | 🔲 |
| VG2 | **Franchise € 250 - € 500 per schadegeval** | Gangbare franchise | Bevestig het bereik dat wij hanteren. | 🔲 |
| VG3 | **Nachtclausule** (alarm of vaste stallingsplaats) als kernvoorwaarde nachtelijke diefstal | Belangrijkste preventieparameter | Bevestig standaardformulering (uren + eisen) van onze polissen. | 🔲 |
| VG4 | **Braak** als diefstalvoorwaarde | Marktstandaard | Bevestig + of we keyless-uitbreiding aanbieden. | 🔲 |
| VG5 | **Verzekeringstaks 9,25%** | Overgenomen als gangbare taks | Bevestig het correcte percentage voor zaakschade/transport. | 🔲 |
| VG6 | **Territorium = België + buurlanden**, uitbreidbaar Europa | Gangbare default | Bevestig de standaard territoriale dekking. | 🔲 |
| VG7 | **Wet 4 april 2014 + FSMA**; onderscheid eigen rekening vs CMR | CMR-afbakening juridisch gevoelig | Juridisch laten aftekenen (eigen-rekening/CMR). | 🔲 |
| VG8 | **Gereedschap op de werf valt buiten deze polis** (→ ABR of diefstalwaarborg brand) | Afbakening tegen misverstand | Bevestig + welke polis wij daarvoor aanraden. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie.

---

## Beeldmateriaal verzekeringen (geplaatst 2026-06-20)

De 22 klant-aangeleverde foto's (11 pagina's × hero + band) staan in `public/images/verzekeringen/{slug}-hero.jpg` en `-band.jpg`. **BA Bestuurder, Brandverzekering en Bedrijfsschade** gebruiken nu hun **echte** beeld (de eerdere "generiek beeld"-minors zijn opgelost). De skeleton-pagina's (gewaarborgd-inkomen, bescherming-bedrijfsleider, groeps, aanvullend-pensioen, vapz, poz, ipt) krijgen hun beeld zodra ze worden uitgewerkt; de bestanden staan klaar.

---

## /verzekeringen/gewaarborgd-inkomen (Gewaarborgd inkomen)

Status pagina: **afgewerkt, op staging.** Persoonlijk vervangingsinkomen, scherp onderscheiden van arbeidsongevallen/bedrijfsschade/omzet. **18 controlepunten** (veel RIZIV-/fiscaal-cijfers, bewust kwalitatief of indicatief gehouden).

| # | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| GI1 | Wettelijke basis = **RIZIV** | Juridische formulering aftekenen. | 🔲 |
| GI2 | Wettelijke wachttijd genoemd, géén hard getal (research: 14 dagen sinds 2018) | Bevestig actuele wachttijd + of we het cijfer tonen. | 🔲 |
| GI3 | RIZIV-daguitkering forfaitair "ruim onvoldoende", géén eurobedrag | Tonen we een actueel bereik (bron+peildatum) of kwalitatief? | 🔲 |
| GI4 | **80%-regel** (verzekerbaar tot ±80% beroepsinkomen) | Bevestig formulering (bruto/netto belastbaar). | 🔲 |
| GI5 | Uitkeringsdrempels **25% / 67%** | Bevestig tegen onze polisvoorwaarden. | 🔲 |
| GI6 | Wachttijden voorbeeld 1/3/6 maanden | Bevestig welke wij aanbieden. | 🔲 |
| GI7 | Eindleeftijd impliciet (research: 65/67) | Bevestig gangbare eindleeftijd. | 🔲 |
| GI8 | Fiscaliteit: premie aftrekbaar, uitkering belast | Fiscaal aftekenen. | 🔲 |
| GI9 | **Premietaks afwijkend/vrijgesteld** → géén "9,25%" op de pagina | Bevestig of gewaarborgd inkomen vrijgesteld is van premietaks. | 🔲 |
| GI10 | Psychische aandoeningen vaak uitgesloten, dekbaar via uitbreiding | Bevestig optie + voorwaarde. | 🔲 |
| GI11 | Risicosporten uitgesloten tenzij bijpremie | Bevestig lijst/regeling. | 🔲 |
| GI12 | Ziekenhuisforfait als optie | Bieden wij dit aan? (bedrag niet getoond) | 🔲 |
| GI13 | Indexering van de rente als optie | Bevestig beschikbaarheid. | 🔲 |
| GI14 | Premievrijstelling als optie | Bevestig in ons gamma. | 🔲 |
| GI15 | Economische vs fysiologische ongeschiktheid (economische aangeraden voor bouw) | Bevestig dat onze polissen economische ongeschiktheid dekken. | 🔲 |
| GI16 | Aangiftetermijn = "zie polis", geen vast getal | Standaardtermijn tonen of "zie polis" houden? | 🔲 |
| GI17 | Medische acceptatie: verzwijgen → weigering (art. 58 Verzekeringswet, niet op pagina) | Wetsartikel vermelden of kwalitatief? | 🔲 |
| GI18 | Geen premiebedrag in euro op de pagina | Bevestig dat we geen indicatief tarief tonen. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/CTA = echt klant-beeld.

---

## /verzekeringen/bescherming-bedrijfsleider (Bescherming bedrijfsleider)

Status pagina: **afgewerkt, op staging.** 11 controlepunten. Afbakening bewaakt: keyman/continuïteit (vennootschap = begunstigde), expliciet onderscheiden van persoonlijke overlijdensdekking (aparte pagina) en BA Bestuurder.

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| BB1 | Wettelijke basis = **Wet 4 april 2014 + FSMA** | Generieke verzekeringsrechtelijke verwijzing | Juridische formulering aftekenen. | 🔲 |
| BB2 | Fiscale aftrek premie = **art. 49 WIB92**, mits vennootschap=begunstigde + reëel continuïteitsrisico | Standaard fiscaal kader keyman | Fiscaal/juridisch aftekenen. | 🔲 |
| BB3 | **Premietaks = 4,40%** (levensverzekering-taks, NIET de 9,25% van schade) | Research §3; dekking op een hoofd | Bevestig dat 4,40% klopt voor deze dekkingsvorm. | 🔲 |
| BB4 | **Uitkering** = uitzonderlijke opbrengst in venn.belasting; **geen hard tarief** op de pagina | Tarief situatieafhankelijk | Bevestig formulering; tarief tonen? Lever actuele cijfers. | 🔲 |
| BB5 | **Verzekerd kapitaal € 100.000 – € 500.000** (richtwaarde, indicatief) | Gangbaar bouw-bereik (research §3) | Bevestig tegen effectieve limieten van onze verzekeraars. | 🔲 |
| BB6 | **Arbeidsongeschiktheid = optionele uitbreiding** met wachttijd (geen vast aantal dagen op de pagina) | Verschilt per polis | Standaardwachttijd tonen of "zie polis" houden? | 🔲 |
| BB7 | **Zelfdoding 1e jaar uitgesloten** | Marktstandaard overlijdensdekking | Bevestig formulering. | 🔲 |
| BB8 | **Sleutelfiguur-criterium fiscus** = directe, zware impact (willekeurige medewerker niet aanvaard) | Research §4 | Bevestig formulering. | 🔲 |
| BB9 | **Uitkoopclausule mede-vennoten** voorgesteld | Gangbare keyman-toepassing | Bevestig dat wij dit aanbieden/faciliteren. | 🔲 |
| BB10 | **Geen premiebedrag in euro** op de pagina, enkel de factoren | Brand-voice: geen verzonnen cijfers | Bevestig dat we geen indicatief tarief tonen. | 🔲 |
| BB11 | Aangiftetermijn = **"zo snel mogelijk"** (geen vast getal) | Termijn verschilt per polis | Standaardtermijn tonen of "zie polis" houden? | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/band = echt beeld (`/images/verzekeringen/bescherming-bedrijfsleider-*`).

---

## /verzekeringen/groepsverzekering (Groepsverzekering)

Status pagina: **afgewerkt, op staging.** Aanvullend pensioen voor het personeel (tweede pijler), scherp onderscheiden van VAPZ/IPT/POZ (= bedrijfsleider zelf). Rode draad: arbeiders PC 124 (sectoraal via Constructiv) vs bedienden PC 200 (vrijwillig). **12 controlepunten.**

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| GRP1 | Wettelijke basis = **WAP 28 april 2003** + minimumrendement **2,50%** + sectoraal plan PC 124 via Constructiv | Cross-cutting C1 (2,50% sinds 2025, vervangt de verouderde 1,75%) + C4 | Bevestig dat 2,50% nog geldt bij publicatie; juridische formulering aftekenen. | 🔲 |
| GRP2 | Antwoord op "verplicht?" = **"Soms."** (arbeiders PC 124 sectoraal verplicht via Constructiv, bedienden PC 200 vrijwillig) | Eerlijkste weergave van de gemengde verplichting in de bouw | Bevestig de formulering en het onderscheid arbeiders/bedienden. | 🔲 |
| GRP3 | **PC 124** = sectoraal aanvullend pensioen via Constructiv, niet "groepsverzekering verplicht" | Cross-cutting C4 | Bevestig formulering; we noemen bewust GEEN bijdragepercentage (1,1%) op de pagina. | 🔲 |
| GRP4 | **Premietaks 4,40%** op de werkgeversbijdragen (fiscaal-card) | Levensverzekering-taks, cross-cutting | Bevestig dat 4,40% klopt voor een groepsverzekering bij publicatie. | 🔲 |
| GRP5 | **RIZIV-bijdrage 8,86%** op de werkgeverspremies (fiscaal-card) | Bijzondere RSZ/RIZIV-bijdrage, cross-cutting | Bevestig het percentage 8,86%. | 🔲 |
| GRP6 | **80%-regel**: wettelijk + aanvullend pensioen samen max 80% van het laatste brutojaarloon, anders niet aftrekbaar | Standaard fiscaal kader tweede pijler | Bevestig de formulering (bruto/jaarloon, gevolg niet-aftrekbaarheid). | 🔲 |
| GRP7 | **Geen netto-uitkeringspercentage** op de pagina (kwalitatief gehouden) | Brand-voice: geen verzonnen/niet-persoonlijke cijfers | Bevestig dat we geen netto-indicatie tonen, of lever een controleerbaar kader. | 🔲 |
| GRP8 | **Sociaal luik / solidariteitswaarborgen** als aanvulling, met gunstiger fiscaal/parafiscaal regime | Gangbare optie tweede pijler | Bevestig dat dit in ons gamma zit en de fiscale formulering klopt. | 🔲 |
| GRP9 | **Overlijdensdekking, invaliditeitsrente, premievrijstelling** als optionele waarborgen; zelfdoding 1e jaar + opzet uitgesloten | Marktstandaard | Bevestig welke waarborgen wij effectief aanbieden + uitsluitingen. | 🔲 |
| GRP10 | **Geen premiebedrag in euro** op de pagina, enkel de factoren (bijdrage, formule, waarborgen, personeelsbestand) | Brand-voice: geen verzonnen cijfers | Bevestig dat we geen indicatief tarief tonen. | 🔲 |
| GRP11 | Euro-bedragen in de **6 cases** (45.000 overlijdenskapitaal, 400 invaliditeitsrente) = herkenbaar-fictieve illustratie | Brand-voice-regel cases | Bevestig dat dit als illustratie volstaat. | 🔲 |
| GRP12 | Carousel-slugs: **aanvullend-pensioen, ipt, vapz, gewaarborgd-inkomen** | Verwante pensioen-/personeelspolissen, alle slugs bestaan | Bevestig de selectie of wissel met bescherming-bedrijfsleider/arbeidsongevallen. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/band = echt beeld (`/images/verzekeringen/groepsverzekering-*`).

---

## /verzekeringen/aanvullend-pensioen (Aanvullend pensioen — pijler/keuzehub)

Status pagina: **afgewerkt, op staging.** Pijler-/keuzehub-pagina boven VAPZ, POZ, IPT en de groepsverzekering. Geen enkel-product-pagina: "Dekking" is vervangen door **De formules** (4 routeerkaarten), "Premie" door **Fiscaal voordeel**. Rode draad = routeren op statuut: zonder venn. → VAPZ+POZ, met venn. → VAPZ+IPT, werkgever → groepsverzekering. **12 controlepunten.**

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| AP1 | Antwoord op "verplicht?" = **"Nee."** + claim "wettelijk pensioen zelfstandige is laag" (kwalitatief, geen hard cijfer) | Aanvullend pensioen is nooit wettelijk verplicht; het lage zelfstandigenpensioen is de kernmotivatie | Bevestig "Nee." en de kwalitatieve formulering; beslis of je een concreet richtcijfer voor het wettelijk zelfstandigenpensioen wil tonen. | 🔲 |
| AP2 | **Pensioensparen 2026** = max **€ 1.050 (30% vermindering)** of **€ 1.350 (25% vermindering)** | Geverifieerd (KBC, Wikifin, FOD Financiën, juni 2026). Bedragen bevroren t/m aanslagjaar 2026 | Bevestig de bedragen bij publicatie. | 🔲 |
| AP3 | **Langetermijnsparen 2026** = max **€ 2.450**, **30% vermindering**, ruimte afhankelijk van woonkrediet | Geverifieerd (Wikifin, Practicali, juni 2026) | Bevestig het bedrag; let op samenhang met de woonbonus voor oudere kredieten. | 🔲 |
| AP4 | **VAPZ 2026** = gewoon **8,17%**, sociaal **9,40%** (percentages op de koepel; bedragen op de VAPZ-sub-pagina) | Uit geverifieerde reference (Practicali). Wetswijziging op komst (8,50%/9,78%) bewust niet op koepel getoond | Bevestig de huidige percentages; details + overgangsregel horen op de VAPZ-sub-pagina. | 🔲 |
| AP5 | **Premietaks 4,40%** op premies van een tweede-/derdepijlerverzekering | Levensverzekering-taks, cross-cutting | Bevestig dat 4,40% geldt voor de getoonde formules bij publicatie. | 🔲 |
| AP6 | **80%-regel** = wettelijk + aanvullend pensioen samen max 80% van het laatste normale brutojaarloon; geldt voor **IPT/POZ/groepsverzekering** (niet VAPZ) | Standaard fiscaal kader tweede pijler | Bevestig de formulering en de afbakening (geldt niet voor VAPZ). | 🔲 |
| AP7 | **Geen netto-uitkeringspercentage** op de uitkering getoond | Verschilt per formule/situatie; brand-voice: geen ongekwalificeerde cijfers | Bevestig dat we kwalitatief blijven, of lever een controleerbaar kader per formule. | 🔲 |
| AP8 | **Tak21 (gewaarborgd) vs tak23 (geen kapitaalgarantie)** kort uitgelegd in FAQ | Standaard onderscheid pensioenbeleggingen; eerlijke nuance | Bevestig de formulering tegen ons gamma (welke takken bieden we effectief aan). | 🔲 |
| AP9 | Carousel toont de **4 sub-pagina's** `['vapz','ipt','poz','groepsverzekering']`; databron-`gerelateerde` = **`['vapz','ipt','poz']`** | Carousel = de keuzehub-functie; gerelateerde-array houdt de drie zelfstandige-formules | Bevestig de carousel-selectie en de gerelateerde-array (voorkeur `['vapz','ipt','poz']`, alternatief met groepsverzekering). | 🔲 |
| AP10 | **Geen euro-bedrag voor premies** op de pagina, enkel mechanisme en factoren | Brand-voice: geen verzonnen tarieven | Bevestig dat we geen indicatief premietarief tonen. | 🔲 |
| AP11 | Euro-bedragen / scenario's in de **6 cases** zijn herkenbaar-fictieve illustraties; geen verzekeraarsnamen in copy | Brand-voice-regel cases | Bevestig dat dit als illustratie volstaat. | 🔲 |
| AP12 | **Afbakening sub-pagina's:** POZ = zonder vennootschap, IPT = met vennootschap, VAPZ = elke zelfstandige (basis), groepsverzekering = voor personeel | Kern van de routeer-logica; fout hierin stuurt bezoekers verkeerd | Bevestig de afbakening; belangrijkste inhoudelijke check van de pagina. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/band = echt beeld (`/images/verzekeringen/aanvullend-pensioen-*`). De sub-pagina's VAPZ, POZ en IPT zijn nog skelet en worden hierna gebouwd (8 → 9-11).

---

## /verzekeringen/vapz (VAPZ — Vrij Aanvullend Pensioen voor Zelfstandigen)

Status pagina: **afgewerkt, op staging.** Enkel-product-pagina (standaard polis-norm, prefix vz-). De basis-tweedepijlerformule voor élke zelfstandige in hoofdberoep. Rode draad = gewoon vs sociaal VAPZ. Scherp afgebakend t.o.v. POZ/IPT/groepsverzekering en 3e-pijler pensioensparen. Onderscheidend voordeel: vrijstelling premietaks 4,40% + niet onder de 80%-regel. **15 controlepunten.**

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| VZ1 | **Wettelijke basis** = Programmawet (I) van 24 december 2002 / WAPZ-kader + **FSMA-toezicht** | Het VAPZ wordt geregeld door het WAPZ-kader; FSMA houdt toezicht op de aanbieders | Bevestig de exacte wetsverwijzing (Programmawet 24/12/2002) of houd kwalitatief. | 🔲 |
| VZ2 | Antwoord op "verplicht?" = **"Nee."** (VAPZ is vrijwillig, de V staat voor "Vrij") | Eerlijkste weergave: nooit verplicht, wel sterk aangeraden | Bevestig de formulering. | 🔲 |
| VZ3 | **Solidariteitsluik** sociaal VAPZ = minstens 10% van de premie, dekt arbeidsongeschiktheid, overlijden, moederschap, faillissement | Geverifieerd (FSMA/verzekeraars, juni 2026) | Bevestig de opsomming van de gedekte risico's tegen ons gamma. | 🔲 |
| VZ4 | **VAPZ-plafonds 2026** = gewoon **8,17% / € 4.086,34**, sociaal **9,40% / € 4.701,54** | Geverifieerd (reference + Practicali/FSMA, juni 2026) | Aangekondigde wetswijziging (8,50% / € 4.251,39 en 9,78% / € 4.891,60) wordt in 2026 gestemd; voor stortingen begin 2026 gelden voorlopig de huidige percentages. Bevestig of de wijziging bij publicatie al van kracht is. | 🔲 |
| VZ5 | **Vrijstelling premietaks 4,40%** op de VAPZ-premie (kerngetal, fiscaal-card, FAQ, case 6) | Geverifieerd: op een VAPZ is geen premietaks van 4,40% verschuldigd, anders dan op IPT/groepsverzekering/levensverzekering | **LET OP:** op de aanvullende waarborg arbeidsongeschiktheid binnen een sociaal VAPZ kan wél een afzonderlijke taks gelden. We claimen de vrijstelling enkel op de zuivere pensioenpremie. Bevestig. | 🔲 |
| VZ6 | **Dubbel voordeel sociale bijdragen**: premie aftrekbaar via sociale bijdragen + verlaagt de basis van die bijdragen | Kernvoordeel van het VAPZ | Bevestig de formulering. Sociale-bijdragepercentage (~20,5%) bewust niet als hard cijfer getoond. | 🔲 |
| VZ7 | **VAPZ valt NIET onder de 80%-regel**, maar onder een eigen plafond als % van het inkomen | Belangrijke afbakening tegenover IPT/POZ/groepsverzekering | Bevestig de formulering en de afbakening. | 🔲 |
| VZ8 | **Uitkering** belast via **fictieve rente / gunstregime** bij pensioen op de wettelijke leeftijd; **geen hard netto-percentage** | Brand-voice: geen ongekwalificeerde cijfers; bewust kwalitatief | Bevestig de formulering "fictieve rente / gunstregime". | 🔲 |
| VZ9 | **Toegang in bijberoep** afhankelijk van de hoogte van de sociale bijdragen | Een VAPZ is in de eerste plaats voor hoofdberoep/gelijkgestelden | Bevestig de formulering en de voorwaarde. | 🔲 |
| VZ10 | **Referentie-inkomen N-3**: plafond berekend op het geherwaardeerd netto-beroepsinkomen van ongeveer 3 jaar eerder | Geverifieerd (FSMA/Securex/Practicali, juni 2026) | Bevestig de formulering "ongeveer drie jaar eerder (N-3)". | 🔲 |
| VZ11 | **Carousel** = `['aanvullend-pensioen','poz','ipt','gewaarborgd-inkomen']`; databron-`gerelateerde` = `['aanvullend-pensioen','poz','ipt']` | Koepel + de twee vervolgformules; gewaarborgd-inkomen vult het solidariteitsluik inhoudelijk aan | Bevestig de carousel-selectie en de gerelateerde-array. | 🔲 |
| VZ12 | **Tak21 (gewaarborgd) vs tak23 (geen kapitaalgarantie)** kort uitgelegd; **premievrijstelling** als optionele waarborg | Standaard onderscheid pensioenbeleggingen + gangbare optie | Bevestig de formulering tegen ons gamma (welke takken/waarborgen we effectief aanbieden). | 🔲 |
| VZ13 | **Afbakening tegen POZ/IPT/groepsverzekering en 3e pijler**: VAPZ = basis; POZ erbovenop (zonder venn.), IPT erbovenop (met venn.); pensioensparen = privé/3e pijler | Kern van de routeer-logica | Bevestig de afbakening; belangrijkste inhoudelijke check. | 🔲 |
| VZ14 | **Geen euro-premiebedrag** op de pagina, enkel de plafonds en de factoren | Brand-voice: geen verzonnen tarieven | Bevestig dat we geen indicatief premietarief tonen. | 🔲 |
| VZ15 | Euro-scenario's in de **6 cases** zijn herkenbaar-fictieve illustraties; geen verzekeraarsnamen in de copy | Brand-voice-regel cases | Bevestig dat dit als illustratie volstaat. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/band = echt beeld (`/images/verzekeringen/vapz-*`). Consistent met de koepelpagina aanvullend-pensioen. POZ en IPT (sub-pagina's 10-11) worden hierna gebouwd.

---

## /verzekeringen/poz (POZ — Pensioenovereenkomst voor Zelfstandigen)

Status pagina: **afgewerkt, op staging.** Enkel-product-pagina (standaard polis-norm, prefix pz-). Tweedepijler-aanvulling bovenop het VAPZ voor zelfstandigen ZONDER vennootschap. De tegenhanger van de IPT. Onderscheidend: valt WEL onder de 80%-regel + premietaks 4,40% WEL van toepassing (verschil met VAPZ). **12 controlepunten.**

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| PZ1 | **Belastingvermindering POZ = 30%** op de gestorte premie (kerngetal, fiscaal-card, FAQ) | Geverifieerd (KBC, Practicali, juni 2026): federale belastingvermindering van 30%, geen aftrek als beroepskost | Bevestig de 30% bij publicatie en de formulering "belastingvermindering" (niet "aftrek"). | 🔲 |
| PZ2 | **Premietaks 4,40% is WEL van toepassing** op de POZ-premie (verschil met VAPZ) | Geverifieerd (Practicali): "premietaks van 4,4% verschuldigd op de POZ-premies", net zoals bij IPT/groepsverzekering | **LET OP:** één online snippet suggereerde een afschaffing in 2025 (onbevestigd, lijkt verwarring met latere hervorming). Bevestig dat 4,40% bij publicatie nog van kracht is. | 🔲 |
| PZ3 | **POZ valt WEL onder de 80%-regel**; referentie-inkomen = gemiddelde belastbaar beroepsinkomen over de voorbije jaren | Geverifieerd (KBC, Practicali, AG). Kernverschil met VAPZ (eigen plafond), gelijk aan IPT | Bevestig de formulering en het referentie-inkomen. | 🔲 |
| PZ4 | **Wettelijke basis** = wet van **18 februari 2018** (versterking aanvullende pensioenen), in werking voor inkomstenjaar 2018 + FSMA-toezicht | POZ ingevoerd in 2018; gaf zelfstandigen zonder vennootschap een eigen tweedepijlerformule | Wetsdatum 18/2/2018 kon niet onafhankelijk bevestigd worden (zoekmachine viel uit). Bevestig de exacte wet + datum, of houd kwalitatief ("ingevoerd in 2018"). | 🔲 |
| PZ5 | Antwoord op "verplicht?" = **"Nee."**; doelgroep = zelfstandige zonder vennootschap (eenmanszaak, vrij beroep, meewerkende echtgenoot) | Eerlijkste weergave: nooit verplicht, wel de logische vervolgstap zonder vennootschap | Bevestig "Nee." en de doelgroep-afbakening. | 🔲 |
| PZ6 | **Afbakening POZ (zonder venn.) vs IPT (met venn.)** + **overstap POZ → IPT** mogelijk bij oprichting vennootschap | Kern van de routeer-logica; overstap-vraag komt vaak terug | Bevestig de afbakening en de overstap-logica (gaat opgebouwde POZ mee, en onder welke voorwaarden). | 🔲 |
| PZ7 | **Uitkering** belast via een **gunstregime** bij pensioen; **geen hard netto-percentage** op de pagina | Brand-voice: geen ongekwalificeerde cijfers; bewust kwalitatief | Bronnen noemen ~10% eindbelasting. Beslis of je dat richtcijfer expliciet wil tonen of kwalitatief houdt. | 🔲 |
| PZ8 | **Carousel** = `['aanvullend-pensioen','vapz','ipt','gewaarborgd-inkomen']`; databron-`gerelateerde` = `['aanvullend-pensioen','vapz','ipt']` | Koepel + basislaag (VAPZ) + tegenhanger (IPT); gewaarborgd-inkomen vult de ao-waarborg aan | Bevestig de carousel-selectie en de gerelateerde-array. | 🔲 |
| PZ9 | **Volgorde-logica:** eerst VAPZ opvullen (voordeligst, vrij van premietaks), dan POZ erbovenop binnen de 80%-regel | Geeft de juiste fiscale prioriteit; consistent met VAPZ- en koepelpagina | Bevestig de formulering. | 🔲 |
| PZ10 | **Tak21 vs tak23** kort uitgelegd; **overlijdensdekking** en **premievrijstelling** als optionele waarborgen | Standaard onderscheid + gangbare opties | Bevestig de formulering tegen ons gamma (welke takken/waarborgen binnen de POZ). | 🔲 |
| PZ11 | **Geen euro-premiebedrag** op de pagina, enkel de 80%-logica en de factoren | Brand-voice: geen verzonnen tarieven | Bevestig dat we geen indicatief premietarief tonen. | 🔲 |
| PZ12 | Euro-scenario's in de **6 cases** zijn herkenbaar-fictieve illustraties; geen verzekeraarsnamen in de copy | Brand-voice-regel cases | Bevestig dat dit als illustratie volstaat. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/band = echt beeld (`/images/verzekeringen/poz-*`). Consistent met de koepel- en VAPZ-pagina. Laatste sub-pagina IPT (11/11) volgt.

---

## /verzekeringen/ipt (IPT — Individuele Pensioentoezegging)

Status pagina: **afgewerkt, op staging.** Enkel-product-pagina (standaard polis-norm, prefix it-). LAATSTE pagina van de pensioencluster. Tweedepijler-aanvulling bovenop het VAPZ voor bedrijfsleiders MET een vennootschap; de tegenhanger van de POZ. Kenmerk: de vennootschap betaalt en trekt af als beroepskost. **15 controlepunten.**

> **BELANGRIJK:** WebSearch lag eruit tijdens het opstellen van deze brief. De fiscale claims zijn afgeleid uit de reeds-geverifieerde POZ/VAPZ/koepel-briefs (gespiegeld-consistent) maar NIET onafhankelijk herbevestigd in die sessie. IP1, IP3, IP5, IP6, IP8 prioritair laten aftekenen vóór go-live.

| # | Wat we beslisten (staat zo op de pagina) | Waarom | Te controleren / suggestie | Status |
|---|---|---|---|---|
| IP1 | **Premie aftrekbaar als beroepskost** door de vennootschap (art. 195 WIB92), binnen de 80%-regel + WAP-kader + FSMA-toezicht | Dé reden waarom een IPT zo krachtig is: opbouw met geld van de vennootschap i.p.v. belast nettoloon | **WebSearch onbeschikbaar bij opstellen.** Bevestig de exacte wetsverwijzing (art. 195 WIB92) of houd kwalitatief. | 🔲 |
| IP2 | Antwoord op "verplicht?" = **"Nee."**; doelgroep = bedrijfsleider/zaakvoerder met een vennootschap | Eerlijkste weergave: nooit verplicht, wel de krachtigste hefboom met een vennootschap | Bevestig "Nee." en de doelgroep-afbakening. | 🔲 |
| IP3 | **Voorwaarde regelmatige maandelijkse bezoldiging** voor de aftrekbaarheid (case 5, fiscaal-card, FAQ 6, mijn-situatie 1) | Wettelijke voorwaarde sinds aanslagjaar 2020; zonder regelmatig maandloon is de premie niet (volledig) aftrekbaar | **WebSearch onbeschikbaar.** Bevestig de voorwaarde en formulering. Raakt direct de aftrekbaarheid: prioritair. | 🔲 |
| IP4 | **IPT valt WEL onder de 80%-regel** = wettelijk + aanvullend pensioen samen max 80% van de laatste normale brutojaarbezoldiging | Kernverschil met VAPZ (eigen plafond), gelijk aan POZ. Consistent met koepel AP6 | Bevestig de toepassing en de referentie (brutojaarbezoldiging bedrijfsleider). | 🔲 |
| IP5 | **Backservice** = berekening op tot **10 jaar voorbije loopbaandienstjaren**, binnen de 80%-regel | Sterke hefboom voor wie laat start; inhaalbijdrage voor het verleden | **WebSearch onbeschikbaar.** Bevestig het maximum van 10 jaar en de werking. | 🔲 |
| IP6 | **Premietaks 4,40% is WEL van toepassing** op de IPT-premie (verschil met VAPZ) | Eerlijk verschil met het vrijgestelde VAPZ; zelfde taks als POZ/groepsverzekering. Consistent met PZ2 en AP5 | Bevestig dat 4,40% bij publicatie nog van kracht is (zelfde waarschuwing als PZ2). | 🔲 |
| IP7 | **Vastgoedfinanciering** via een IPT (voorschot / inpandgeving / wedersamenstelling), kwalitatief gehouden | Veelgevraagde toepassing bij bedrijfsleiders die via hun vennootschap vastgoed kopen | Bevestig de drie mechanismen. Geen euro-bedragen. | 🔲 |
| IP8 | **Wijninckx-bijdrage** = bijzondere bijdrage (~3%) op hoge aanvullende pensioenen boven een drempel (fiscaal-card) | Eerlijke nuance bij hoge opbouw | **WebSearch onbeschikbaar.** Bevestig tarief/drempel, of laat weg als te technisch voor de doelgroep. | 🔲 |
| IP9 | **Uitkering** belast via een **gunstregime**; tarief afhankelijk van leeftijd / effectief actief blijven; **geen hard netto-percentage** | Brand-voice: geen ongekwalificeerde cijfers; bewust kwalitatief | Bevestig de formulering "gunstregime" + nuance "effectief actief blijven = voordeligste tarief". | 🔲 |
| IP10 | **Carousel** = `['aanvullend-pensioen','vapz','poz','bescherming-bedrijfsleider']` | Koepel + basislaag (VAPZ) + tegenhanger (POZ) + bescherming-bedrijfsleider (sluit aan bij doelgroep) | `bescherming-bedrijfsleider` bestaat live → OK. Bevestig de selectie. | 🔲 |
| IP11 | **Databron-`gerelateerde`** gewijzigd naar `['aanvullend-pensioen','vapz','poz']` (was `[...,groepsverzekering]`) | Symmetrie met de tegenhanger: POZ is de directe spiegel van de IPT, wederzijdse link | Bevestig de wijziging, of behoud groepsverzekering als de cross-sell naar personeel-pensioen gewenst is. | 🔲 |
| IP12 | **Afbakening IPT (met venn.) vs POZ (zonder venn.) vs VAPZ (basis)** door de hele pagina | Kern van de routeer-logica; gespiegeld consistent met PZ6 en AP12 | Bevestig de afbakening; belangrijkste inhoudelijke check. | 🔲 |
| IP13 | **Tak21 vs tak23** kort uitgelegd; **overlijdensdekking** en **premievrijstelling** als optionele waarborgen | Standaard onderscheid + gangbare opties | Bevestig de formulering tegen ons gamma. | 🔲 |
| IP14 | **Geen euro-premiebedrag** op de pagina, enkel de 80%-logica, backservice en factoren | Brand-voice: geen verzonnen tarieven | Bevestig dat we geen indicatief premietarief tonen. | 🔲 |
| IP15 | Euro-scenario's in de **6 cases** zijn herkenbaar-fictieve illustraties; geen verzekeraarsnamen in de copy | Brand-voice-regel cases | Bevestig dat dit als illustratie volstaat. | 🔲 |

Euro-bedragen in de 6 cases = herkenbaar-fictieve illustratie. Hero/band = echt beeld (`/images/verzekeringen/ipt-*`). Gespiegeld-consistent met de POZ-pagina (de tegenhanger). **Pensioencluster (8-11) volledig af; alle 18 databron-records nu live.**

---

## /sectoren/grondwerkers (Sectorpagina — sectorcluster 1/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden** — echte foto's morgen). Gebouwd uit `briefs/sectoren/ruwbouw-cluster.md`, norm `sectorpaginas.md`, referentie `dakwerkers.astro`, prefix `gw-`. Polis-pakket: BA-onderneming, BA-10, ABR, machinebreuk, bedrijfsvoertuigen, arbeidsongevallen. Build groen, 6 FAQ statisch + FAQPage-schema. Cases fictief-illustratief.

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| GW-1 | Fictieve cases + bedragen (€60.000 / €38.000 / €22.000 / €9.500) | Akkoord als illustratie? | 🔲 |
| GW-2 | Polis-pakket: BA-onderneming, BA-10, ABR, machinebreuk, bedrijfsvoertuigen, arbeidsongevallen | Pakket akkoord? | 🔲 |
| GW-3 | BA-10 (tienjarige aansprakelijkheid) in het pakket | Terecht, of enkel bij funderings-/stabiliteitswerk? | 🔲 |
| GW-4 | KLIP-formulering (FAQ 3): "wettelijke informatieplicht, planaanvraag via KLIP", geen termijn/cijfer | Akkoord met deze neutrale formulering? | 🔲 |
| GW-5 | Geraakte leidingen / verzakking / schade aanpalend pand als "gedekt" gepresenteerd | Stellig houden of voorwaardelijker ("kan gedekt worden")? | 🔲 |
| GW-FOTO | Placeholder-beelden (`/images/sectoren/grondwerkers-{hero,why,cta}.jpg` + `/images/cases/case-grondwerkers-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/bestraters (Sectorpagina — sectorcluster 2/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/ruwbouw-cluster.md`, prefix `bst-`. Polis-pakket: BA-onderneming, ABR, machinebreuk, bedrijfsvoertuigen, rechtsbijstand, arbeidsongevallen. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: verzakking/afwatering-geschillen → rechtsbijstand.

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| BS-1 | Fictieve cases + bedragen (€16.000 / €12.500 / €8.000 / €7.500) | Akkoord als illustratie? | 🔲 |
| BS-2 | Polis-pakket: BA-onderneming, ABR, machinebreuk, bedrijfsvoertuigen, rechtsbijstand, arbeidsongevallen | Pakket akkoord? | 🔲 |
| BS-3 | "Materiaal- en werfdekking" voor klinkers/kasseien op de werf | Dekt het pakket dit voldoende, of `vervoerde-goederen`/materiaalmodule expliciet toevoegen? | 🔲 |
| BS-4 | Rechtsbijstand sterk benadrukt voor afwatering-/verzakkingsgeschillen | Akkoord met die framing? | 🔲 |
| BS-FOTO | Placeholder-beelden (`/images/sectoren/bestraters-{hero,why,cta}.jpg` + `/images/cases/case-bestraters-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/asfalteerders (Sectorpagina — sectorcluster 3/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/ruwbouw-cluster.md`, prefix `asf-`. Polis-pakket: BA-onderneming, ABR, machinebreuk, bedrijfsvoertuigen, rechtsbijstand, arbeidsongevallen. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: vlakheid-/afwateringsgeschillen + schade wegmeubilair + dure asfalteermachine. **Ruwbouw-cluster (1-3) compleet.**

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| AS-1 | Fictieve cases + bedragen (€24.000 / €11.000 / €35.000 / €6.500) | Akkoord als illustratie? | 🔲 |
| AS-2 | Polis-pakket: BA-onderneming, ABR, machinebreuk, bedrijfsvoertuigen, rechtsbijstand, arbeidsongevallen | Pakket akkoord? | 🔲 |
| AS-3 | Schade aan wegmeubilair / boordstenen / nutsput als "gedekt" gepresenteerd | Stellig houden of voorwaardelijker? | 🔲 |
| AS-4 | Asfalteermachine: dekking via machinebreuk als hoofdblok (vs. ingeschreven voertuig) | Klopt die aanname? | 🔲 |
| AS-FOTO | Placeholder-beelden (`/images/sectoren/asfalteerders-{hero,why,cta}.jpg` + `/images/cases/case-asfalteerders-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/stukadoors (Sectorpagina — sectorcluster 4/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/afwerking-cluster.md`, prefix `stk-`. Polis-pakket: BA-onderneming, rechtsbijstand, ABR, bedrijfsvoertuigen, arbeidsongevallen, vervoerde-goederen. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: esthetische geschillen (vlakheid/scheuren/kleur) → rechtsbijstand + BA.

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| ST-01 | Fictieve case krimpscheuren (€14.000) na te snelle opwarming | Akkoord; droogomstandigheden/ondergrond bepalen mee aansprakelijkheid? | 🔲 |
| ST-02 | Fictieve case waterschade parket bij klant (€9.500) → BA-onderneming | Akkoord als illustratie? | 🔲 |
| ST-03 | Fictieve case kleurverschil gevelpleister (€11.000) → rechtsbijstand | Akkoord; uitkleuring minerale pleister hangt af van droogcondities? | 🔲 |
| ST-04 | Fictieve case loslatend pleisterwerk badkamer (€7.800) → rechtsbijstand + BA | Akkoord; vochtbron in ondergrond verifiëren vóór toewijzing? | 🔲 |
| ST-PAK | Polis-pakket: BA-onderneming, rechtsbijstand, ABR, bedrijfsvoertuigen, arbeidsongevallen, vervoerde-goederen | Pakket akkoord? | 🔲 |
| ST-FOTO | Placeholder-beelden (`/images/sectoren/stukadoors-{hero,why,cta}.jpg` + `/images/cases/case-stukadoors-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/vloerders-tegelzetters (Sectorpagina — sectorcluster 6/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/afwerking-cluster.md`, prefix `vlt-`. Polis-pakket: BA-onderneming, rechtsbijstand, vervoerde-goederen, bedrijfsvoertuigen, arbeidsongevallen, ABR. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: esthetische geschillen (loskomend/hol klinkend werk, kleurverschil natuursteen) + hoog materiaalrisico (duur natuursteen/grootformaat) → rechtsbijstand + BA + vervoerde-goederen.

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| VL-01 | Fictieve case loskomende/hol klinkende tegels (€15.500) → rechtsbijstand + BA | Akkoord; lijmlaag/ondergrond beoordelen, rol van de chape? | 🔲 |
| VL-02 | Fictieve case kleurverschil natuursteen (€12.000) → rechtsbijstand | Akkoord; natuurlijke kleur-/structuurvariatie van het materiaal? | 🔲 |
| VL-03 | Fictieve case breuk grootformaat bij transport (€9.000) → vervoerde-goederen | Akkoord; materiaalwaarde verzekerd tijdens vervoer naar de werf? | 🔲 |
| VL-04 | Fictieve case beschadigde natuursteenplaat bij plaatsing (€7.500) → ABR/werfdekking | Akkoord; schade aan materiaal in uitvoering op de werf? | 🔲 |
| VL-PAK | Polis-pakket: BA-onderneming, rechtsbijstand, vervoerde-goederen, bedrijfsvoertuigen, arbeidsongevallen, ABR | Pakket akkoord? | 🔲 |
| VL-FOTO | Placeholder-beelden (`/images/sectoren/vloerders-tegelzetters-{hero,why,cta}.jpg` + `/images/cases/case-vloerders-tegelzetters-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/zonnepanelen-installateurs (Sectorpagina — sectorcluster 8/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/technieken-cluster.md`, prefix `zon-`. Polis-pakket: BA-10, BA-onderneming, ABR, vervoerde-goederen, bedrijfsvoertuigen, arbeidsongevallen. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: dakdoorboring/waterdichtheid (claimbron) + tienjarige aansprakelijkheid + brand/elektriciteit + dure panelen/omvormers.

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| ZP-01 | Fictieve case waterinsijpeling na dakdoorboring (€38.000) → BA Na Levering | Akkoord als illustratie? | 🔲 |
| ZP-02 | Fictieve case brand door oververhitte connector (€52.000) → BA-onderneming | Akkoord als illustratie? | 🔲 |
| ZP-03 | Fictieve case paneel valt/breekt bij montage (€9.500) → materiaal + BA Uitbating | Akkoord als illustratie? | 🔲 |
| ZP-04 | Fictieve case geschil opbrengstgarantie → rechtsbijstand | Akkoord; geen reële opbrengstcijfers/garanties in copy? | 🔲 |
| ZP-PAK | Polis-pakket: BA-10, BA-onderneming, ABR, vervoerde-goederen, bedrijfsvoertuigen, arbeidsongevallen | Pakket akkoord? | 🔲 |
| ZP-BA10 | **BA-10 (tienjarige aansprakelijkheid) als eerste blok** ("verplicht bij werken aan woningen", Wet Peeters-Borsus) | Bevestig reikwijdte BA-10 voor PV-werk dat structuur/waterdichtheid raakt; geen artikelnummers in copy. | 🔲 |
| ZP-RES | RESCert-installateur (drempel 5 kWc / datum 1-1-2026) — kwalitatief in FAQ, geen harde cijfers in copy | Bevestig exacte drempel/datum vóór hard in copy. | 🔲 |
| ZP-AREI | AREI-keuring vóór ingebruikname — kwalitatief in FAQ | Bevestig actuele formulering. | 🔲 |
| ZP-FOTO | Placeholder-beelden (`/images/sectoren/zonnepanelen-installateurs-{hero,why,cta}.jpg` + `/images/cases/case-zonnepanelen-installateurs-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/parketzetters (Sectorpagina — sectorcluster 7/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/afwerking-cluster.md`, prefix `prk-`. Polis-pakket: BA-onderneming, rechtsbijstand, vervoerde-goederen, machinebreuk, bedrijfsvoertuigen, arbeidsongevallen. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: werkend hout (vocht/binnenklimaat) + afwerkingsgeschillen (lak/schuren) + duur parket en eigen schuurmachines. **Afwerking-cluster (4-7) compleet.**

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| PA-01 | Fictieve case werkend parket door restvocht (€17.000) → rechtsbijstand + BA | Akkoord; vochtmeting ondergrond/binnenklimaat bepalen aansprakelijkheid? | 🔲 |
| PA-02 | Fictieve case krasschade aan trap/plint bij plaatsing (€6.500) → BA-onderneming | Akkoord; schade aan eigendom klant in bewoonde woning? | 🔲 |
| PA-03 | Fictieve case geschil over lak-/schuurresultaat (€8.500) → rechtsbijstand | Akkoord; glansgraad/strepen technisch laten beoordelen? | 🔲 |
| PA-04 | Fictieve case defecte schuurmachine (€5.500) → machinebreuk | Akkoord; intern defect eigen materieel + stilstandrisico? | 🔲 |
| PA-PAK | Polis-pakket: BA-onderneming, rechtsbijstand, vervoerde-goederen, machinebreuk, bedrijfsvoertuigen, arbeidsongevallen | Pakket akkoord? | 🔲 |
| PA-FOTO | Placeholder-beelden (`/images/sectoren/parketzetters-{hero,why,cta}.jpg` + `/images/cases/case-parketzetters-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.

---

## /sectoren/chappers (Sectorpagina — sectorcluster 5/13)

Status pagina: **afgewerkt, op staging** (met **placeholder-beelden**). Gebouwd uit `briefs/sectoren/afwerking-cluster.md`, prefix `chp-`. Polis-pakket: BA-onderneming, **BA-10**, rechtsbijstand, machinebreuk, bedrijfsvoertuigen, arbeidsongevallen. Build groen, 6 FAQ statisch + FAQPage-schema. Rode draad: gevolgschade aan afwerking + tienjarige aansprakelijkheid (chape = structureel deel vloeropbouw).

| Code | Wat we beslisten (staat zo op de pagina) | Te controleren / suggestie | Status |
|---|---|---|---|
| CH-01 | Fictieve case niet-vlakke chape (€16.500) | Akkoord; vlakheidstolerantie/meetmethode bepalen aansprakelijkheid? | 🔲 |
| CH-02 | Fictieve case restvocht onder vloerverwarming (€22.000) → rechtsbijstand + BA-10 | Akkoord; restvochtmeting vóór afwerking + gevolgschade parket? | 🔲 |
| CH-03 | Fictieve case te vroeg belaste chape scheurt (€13.000) → rechtsbijstand | Akkoord; belasting door derden vóór uitharding documenteren? | 🔲 |
| CH-04 | Fictieve case defecte chapepomp (€8.000) → machinebreuk | Akkoord als illustratie? | 🔲 |
| CH-BA10 | **BA-10 (tienjarige aansprakelijkheid) in het kernpakket** (enige afwerkingsberoep met BA-10) | Akkoord dat chape onder de tienjarige valt (structureel deel vloeropbouw, vloerverwarming)? | 🔲 |
| CH-FOTO | Placeholder-beelden (`/images/sectoren/chappers-{hero,why,cta}.jpg` + `/images/cases/case-chappers-1..4.jpg`) | Echte foto's plaatsen (1-op-1 overschrijven). | 🔲 |

Cases, bedragen en namen zijn fictief-illustratief. Beelden = voorlopige placeholders.
