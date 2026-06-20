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
