# FEEDBACK-CONTEXT.md — Sure Feedback verwerking mei 2026

> Tijdelijk bestand. Bevat de volledige scope van de huidige feedback-batch. Verwijder na afronding.
>
> **Belangrijk:** dit bestand is **oriëntatie**, geen werkopdracht. Pas alléén toe wat in de actieve prompt staat die Dennis je geeft. Niet vooruithollen, niet improviseren op andere batches.

---

## Wat is dit?

Feedback van **Maaike** (kantoor Assurman) op de staging-site, verzameld via Sure Feedback. Totaal: 64 comments, gegroepeerd in 9 batches.

**Doel:** Maaike's correcties verwerken zonder content elders kapot te maken. Veel comments zijn klein (woordwissel, openingsuren), enkele zijn structureel (volgorde van blokken, kaders verwijderen), enkele zijn inhoudelijk (rechtsbijstand-sectie herschrijven, Benoit's bio aanvullen).

---

## Werkwijze

- Dennis geeft je **één batch per keer** als prompt
- **Toon eerst de vindplaatsen** (grep / view met regelnummers) **vóór** je iets aanpast
- **Wacht op Dennis' "ga door"** voor je een str-replace doet
- **Tussen elke batch** doet Dennis: visuele check + git commit + push
- **Niet improviseren** op basis van dit overzicht — alleen op de actieve prompt

---

## De 9 batches

### Batch 1 — Globale find/replace
Openingsuren `17u15` → `17u` op alle .astro pagina's. Dekt circa 14 comments.

### Batch 2a — Verzekeringen index
Zes tekstwissels op `src/pages/verzekeringen/index.astro` (of `verzekeringen.astro`):
- "uitsluitend" → "in hoofdzaak"
- "aanvulling" → "essentieel"
- BA10: "toevertrouwd goed" toevoegen
- Diefstal: "*onder voorwaarden" toevoegen
- "voor recente bestelwagens" → "afhankelijk van de leeftijd van het voertuig"
- Vlootcondities: corrigeer naar "vanaf 10 voertuigen"

### Batch 2b — Werkwijze
Vijf wijzigingen op `src/pages/werkwijze.astro`:
- Laatste zin "Assurman vraagt polissen op" schrappen (GDPR)
- "hij" → "men"
- "verzekering" → "makelaar" waar het over de partijrol gaat
- Overdrachtsmoment-alinea vervangen door: "Wij nemen over vanaf de volgende vervaldag van je polis. In de bouwsector zijn 3-jaarlijkse contracten gangbaar."
- Kader "actief": Optie A (herformuleren) of B (verwijderen) — Dennis beslist

### Batch 2c — Aannemers + Schilders + Over Assurman
Drie bestanden:
- `sectoren/aannemers.astro`: locatie → Beernem of Oostkamp; "abonnementspolis" toevoegen
- `sectoren/schilders.astro`: typo "ongeklukte" fixen; "factuurgeschillen" markeren als uitbreiding of verwijderen
- `over-assurman.astro`: "uitsluitend" weg

### Batch 2d — Contact + Maak Afspraak + Verzekeringsscan
- `contact.astro`: "kom langs" weg, reactietijd 48u
- `gratis-verzekeringsscan.astro`: "goedkopere" → "correcte"
- Openingsuren behoort tot Batch 1

### Batch 3 — Structurele wijzigingen
- Homepage: 9 verzekeringskotjes herschikken in 3 groepen + "Brand Handel" toevoegen
- Sectoren index: dakwerker OF schrijnwerker vervangen door loodgieter
- Verzekeringen index: "aanhangwagen" afsplitsen, "vervoerde goederen" toevoegen
- Verzekeringsscan: "Brand Handel" + "Rechtsbijstand" toevoegen
- Vlootpolis blog: 2 FAQ's weg, tabel weg, kader weg, voordelen-punt 3 weg, "6 à 10" → "meerdere", zin afkappen bij "1 vervaldag"

### Batch 4a — Rechtsbijstand + BA Uitbating
Op `verzekeringen/index.astro` en `sectoren/aannemers.astro`:
- Bullet-list bij Rechtsbijstand vervangen door één paragraaf over maatwerk
- BA Uitbating: "diefstal van koopwaar en materieel" toevoegen
- Factuurincasso/contractbetwistingen: asterisk + voetnoot "*uitbreidingen op de standaard waarborg"

### Batch 4b — Benoit Keerman auteurpagina
`auteur/benoit-keerman.astro`: biografie vervangen door tekst van Maaike (start Landbouwkrediet + Oostende, Beernem als Record-bankagent, later onafhankelijk zaakvoerder Assurman).

### Batch 4c — Werkwijze + Aannemers rechtsbijstand
- `werkwijze.astro`: kader "actief" — Optie A of B
- `sectoren/aannemers.astro`: Rechtsbijstand bullet-list vervangen door dezelfde paragraaf als 4a

---

## Wat NIET in deze feedback-ronde zit

Deze items wachten op antwoord van Maaike of Benoit. **Niet aanraken** tot Dennis groen licht geeft:

1. Beroepsaansprakelijkheid op verzekeringsscan (wachten op Benoit)
2. Vlootpolis-FAQ: welke specifiek inkorten tot "Ja"
3. Vlootpolis: welke 2 laatste zinnen schrappen
4. Sectoren: dakwerker of schrijnwerker?
5. Werkwijze: volledige zin "wij gaan pas over tot actie ..."
6. Werkwijze: kader "actief" — optie A of B
7. Aannemers + Homepage: "en personen" — welke sectie
8. Verzekeringen: welke zin vervangen door "abonnementspolis"

---

## Belangrijke nuances

- **"Uitsluitend" schrappen** komt 3× terug (verzekeringen-index, over-assurman, sector). Maaike is consistent: Assurman is bouw-gespecialiseerd, niet bouw-exclusief.
- **De rechtsbijstand-paragraaf** raakt 3 pagina's met dezelfde tekst — gebruik in batch 4a en 4c dezelfde formulering.
- **Vlootpolis = vanaf 10 voertuigen** is een harde regel die op meerdere plekken klopgemaakt moet worden.
- **17u (niet 17u15)** geldt op élke pagina waar openingsuren staan.
- **"Kom langs" weg** — werk op afspraak, geen walk-ins.

---

## Voor referentie: link naar Sure Feedback dashboard

Staging URL: `https://assurbouw.onlineprojecten.be/`
Sure Feedback wordt automatisch uitgeladen voor productie via `BaseLayout.astro` switch.
