# Nacht-bouwplan — verzekeringspagina's (autonoom, gecontroleerd)

> **Dit is mijn operationele draaiboek én live tracker.** Elke iteratie: lees dit
> bestand, neem de eerstvolgende pagina met status `TODO`, doorloop het volledige
> per-pagina-recept, werk de tracker bij, commit. Kwaliteit vóór kwantiteit: liever
> 4 pagina's volledig correct dan 10 half. Eén pagina volledig af + geverifieerd +
> gecommit vóór de volgende start. Nooit half werk laten staan.

**Laatst bijgewerkt:** 2026-06-20 (nacht-run)
**Branch:** `fase-2` (staging-first; NOOIT naar `main`). Per pagina één commit + push.

---

## 0. Harde regels (niet onderhandelbaar)

- **Norm = `docs/content-guide/verzekeringspaginas.md`** + referentie `arbeidsongevallen.astro`
  en het recent gebouwde `alle-bouwplaats-risicos.astro` (ABR) als werkend voorbeeld.
  Structuur repliceren, alleen content/copy aanpassen. Geen nieuwe sectievolgorde verzinnen.
- **Brand voice** (`brand-voice.md`): je/jij, geen em-dashes, 5/5, secundaire tekst slate
  `#3F5767` (niet `#64748b`), body Outfit. CTA's uit `cta-labels.ts`.
- **Geen verzonnen cijfers.** Elk getal/juridische claim: (a) matcht een al-geverifieerde
  waarde (zie `[[reference-be-verzekering-cijfers]]` / `feedback-controlelijst.md`), of
  (b) wordt geverifieerd tegen officiële BE-bron (FSMA/RIZIV/ABEX/Constructiv/FOD), of
  (c) gaat als weloverwogen beslissing naar de controlelijst. Euro-bedragen in cases =
  herkenbaar-fictieve illustratie, nooit als feit.
- **Geen "in opbouw"-tekst** op de afgewerkte pagina. De pagina ziet er volledig af uit;
  alles wat controle vraagt gaat in `docs/planning/feedback-controlelijst.md`.
- **SEO-eis (CLAUDE.md §7):** alle FAQ/accordion/tab/carousel-content statisch in de HTML;
  vanilla-JS toggles; unieke title/description/canonical; FAQPage JSON-LD.
- **`noindex` verwijderen** zodra de pagina af is (skeletons hadden `noindex={true}`).
- **Databron bijwerken:** vervang voor de gebouwde polis de `// TODO`-`korteBeschrijving`
  en `bullets` in `src/data/verzekeringen.ts` door de finale copy.
- **Documenten bijhouden:** controlelijst-blok per pagina; deze tracker per pagina;
  bij architectuurwijziging `ARCHITECTUUR-INDELING-VERZEKERINGEN.md` + changelog.

---

## 1. Bouwvolgorde (research-readiness leidend)

Codex-SERP + Dennis-feiten aanwezig voor 1–8. VAPZ/POZ/IPT (9–11) zijn research-dunner
(Codex behandelt ze onder de pensioenpijler, niet apart) → laatst, leaner, en bij twijfel
flaggen i.p.v. forceren.

| # | Pagina | slug | Cluster | Research | Status |
|---|---|---|---|---|---|
| 1 | BA Bestuurder | `ba-bestuurder` | aansprakelijkheid | Codex+Dennis | TODO |
| 2 | Brandverzekering | `brandverzekering` | spullen-en-werk | Codex+Dennis | TODO |
| 3 | Bedrijfsschade | `bedrijfsschade` | spullen-en-werk | Codex+Dennis | TODO |
| 4 | Vervoerde goederen | `vervoerde-goederen` | spullen-en-werk | Codex+Dennis | TODO |
| 5 | Gewaarborgd inkomen | `gewaarborgd-inkomen` | jij-en-je-mensen | Codex+Dennis | TODO |
| 6 | Bescherming bedrijfsleider | `bescherming-bedrijfsleider` | jij-en-je-mensen | Codex+Dennis | TODO |
| 7 | Groepsverzekering | `groepsverzekering` | pensioen-en-fiscaal | Codex+Dennis | TODO |
| 8 | Aanvullend pensioen (pijler) | `aanvullend-pensioen` | pensioen-en-fiscaal | Codex+Dennis | TODO |
| 9 | VAPZ | `vapz` | pensioen-en-fiscaal | dun (pijler) | TODO |
| 10 | POZ | `poz` | pensioen-en-fiscaal | dun (pijler) | TODO |
| 11 | IPT | `ipt` | pensioen-en-fiscaal | dun (pijler) | TODO |

> Overlijdensdekking + BA Uitbating + Omzetverzekering: NIET bouwen (buiten de 18 / uitgesteld).

---

## 2. Per-pagina-recept (elke pagina identiek doorlopen)

### Fase A — Research consolideren (read-only)
> **Sneller pad:** als `docs/planning/briefs/<slug>.md` bestaat, is de research al door een
> research-subagent geconsolideerd tot definitieve copy + een CONTROLEPUNTEN-tabel. Lees dan
> die brief i.p.v. Fase A zelf te doen, en neem de controlepunten over in `feedback-controlelijst.md`.
> Beschikbare briefs: brandverzekering, bedrijfsschade, vervoerde-goederen.

1. Lees `Fase2-Research-codex/SERP_ONDERZOEK_<TOPIC>.md` (of pilot) → SERP-gaps, aanbevolen
   H2-structuur, FAQ's, content-matrix, bronnen.
2. Lees `Fase2 Research/Verzekeringen/<topic>.md` → feiten, juridisch kader, dekking/
   uitsluitingen, 6 sectorvoorbeelden, cards-input.
3. Skim de norm + het dichtstbijzijnde referentiebestand (aansprakelijkheid → `ba-onderneming`/
   ABR; overige → `arbeidsongevallen`/ABR).
4. Stel de inhoud samen per norm-sectie: H1 + gouden subzin + intro · "wat is het" +
   wettelijke-basis-box · verplicht/wanneer · dekking wel/niet · aanvullingen · premie ·
   per-beroep-tabs (link naar sectorpagina's) · statuten · procedure · alert · FAQ (8–12).

### Fase B — Cijfers verifiëren (control)
5. Lijst elk getal/juridische claim. Per stuk: match met geverifieerde waarde, of verifieer
   via WebSearch tegen officiële BE-bron, of markeer als controlelijst-punt. Niets verzinnen.
6. Euro-bedragen in de 6 sectorcases → expliciet fictief-illustratief houden.

### Fase C — Bouwen (.astro schrijven)
7. Repliceer de norm-structuur (zelfde secties, lokale `<style>` met eigen prefix, vanilla-JS
   toggles, `InsuranceCarousel` via `kaartenVoor([...])`, `PartnerSlider`, final CTA, chevrons).
8. Vul met de geconsolideerde content. CTA's uit `cta-labels.ts`. Brand voice strikt.
9. Verwijder `noindex`. Unieke title/description/canonical (mét trailing slash).
10. Update `src/data/verzekeringen.ts`: finale `korteBeschrijving` + `bullets` (weg `// TODO`).
    Kies `gerelateerde[]` + de carousel-slugs logisch binnen/aanleunend bij de cluster.

### Fase D — Controlegates (allemaal groen vóór commit)
- [ ] `npm run build` exit 0.
- [ ] Brand-voice grep: 0 em-dash, geen `\bu\b/\buw\b` aanspreking, geen 4.9/4.8.
- [ ] `dist/verzekeringen/<slug>/index.html`: unieke `<title>`, FAQPage `ld+json` aanwezig,
      H1 in bron, **alle FAQ-antwoorden in de statische HTML**, geen `noindex`.
- [ ] Secties compleet vs norm (sticky nav, dekking, premie, tabs, statuten, procedure, FAQ).
- [ ] Interne links: per-beroep-tabs → `/sectoren/...`; carousel uit databron.
- [ ] Controlelijst-blok toegevoegd in `feedback-controlelijst.md` (beslist + te-controleren).
- [ ] Tracker (§1) bijgewerkt: status → `DONE`.

### Fase E — Commit
11. `git add -A && git commit` (één pagina per commit, duidelijke message) `&& git push origin fase-2`.
12. Ga naar de volgende `TODO`-pagina.

---

## 3. Resume-instructie (bij contextsamenvatting / herstart)

1. Lees dit bestand. Kijk in §1 welke pagina's `DONE` zijn en welke `TODO`.
2. `git log --oneline -15` om te zien wat al gecommit is (per-pagina-commits).
3. Als een pagina half af is (status `WIP`): lees het `.astro`-bestand, vergelijk met de norm,
   maak af vanaf waar het stokt. Bij twijfel: opnieuw vanaf Fase C voor die ene pagina.
4. Ga verder met het recept bij de eerstvolgende `TODO`.

## 4. Stop-condities (loop beëindigen)
- Alle 11 pagina's `DONE`, OF
- Een pagina vereist user-input die ik niet zelf kan beslissen (bv. een juridische claim die
  ik niet kan verifiëren én niet verantwoord kan flaggen) → noteer in de tracker onder
  "BLOKKERS", sla die pagina over, ga door met de volgende; meld blokkers in de
  ochtendsamenvatting.
- Bij 2 opeenvolgende build-fails die ik niet binnen redelijke tijd oplos → stop, rapporteer.

## 5. Ochtendsamenvatting (laatste iteratie)
Schrijf onderaan dit bestand: welke pagina's af + gecommit (met commit-hashes), welke
controlelijst-punten zijn toegevoegd, welke blokkers/openstaande beslissingen, en het
voorstel voor de volgende dag.

---

## TRACKER — voortgang & log

> Werk deze sectie bij na ELKE fase-D. Houd commit-hash per pagina bij.

- [x] 1. BA Bestuurder — DONE
- [x] 2. Brandverzekering — DONE
- [x] 3. Bedrijfsschade — DONE
- [x] 4. Vervoerde goederen — DONE
- [x] 5. Gewaarborgd inkomen — DONE
- [ ] 6. Bescherming bedrijfsleider — TODO
- [ ] 7. Groepsverzekering — TODO
- [ ] 8. Aanvullend pensioen — TODO
- [ ] 9. VAPZ — TODO
- [ ] 10. POZ — TODO
- [ ] 11. IPT — TODO

### Blokkers / openstaande beslissingen
(leeg)

### Log
(per pagina: tijd, commit-hash, controlelijst-punten, bijzonderheden)

- **BA Bestuurder** — DONE. Pagina herschreven op norm-skelet (ba-onderneming-template, prefix bab-), volledige D&O-content uit Codex+Dennis. Databron-record → live + finale copy. Build groen (101 pagina's). Controlelijst-punten BAB1-5. Brand voice schoon (0 em-dash, 0 u/uw, FR-slip gefixt). FR-slip "Depuis" uit origineel ba-onderneming meegefixt — NB: check of ba-onderneming.astro diezelfde slip nog heeft.
- **Brandverzekering** — DONE. Gebouwd uit brief (prefix brv-), databron live. Build groen (101 pagina's). Controlepunten BRV-1..7 (let op: afwijkende brandtaks, bewust kwalitatief). Brand voice schoon. Volgende: Bedrijfsschade (brief klaar).
- **Bedrijfsschade** — DONE. Gebouwd uit brief (prefix bs-), databron live. Build groen (101 pagina's). Controlepunten BS1-8. Inhoudelijke grens bedrijfsschade vs omzet/gewaarborgd-inkomen zuiver gehouden. Volgende: Vervoerde goederen (brief klaar).
- **Vervoerde goederen** — DONE. Gebouwd uit brief (prefix vg-), met echte beelden. Databron live. Build groen. Controlepunten VG1-8. + 22 klant-foto's geplaatst in public/images/verzekeringen/; ba-bestuurder/brand/bedrijfsschade omgezet van generiek naar echt beeld. Volgende: Gewaarborgd inkomen (brief nog te maken via subagent).
- **Gewaarborgd inkomen** — DONE. Gebouwd uit subagent-brief (prefix gi-), echt beeld, databron live. Build groen. 18 controlepunten (RIZIV/fiscaal). Premietaks bewust WEG (persoonsverzekering, vrijgesteld) - dus geen 9,25% op de pagina. Volgende: Bescherming bedrijfsleider (brief nog te maken via subagent).
