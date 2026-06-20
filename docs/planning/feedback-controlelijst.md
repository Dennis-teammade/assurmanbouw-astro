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
