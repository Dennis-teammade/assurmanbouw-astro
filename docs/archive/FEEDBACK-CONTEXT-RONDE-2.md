# FEEDBACK-CONTEXT-RONDE-2.md

> **Referentie-document voor Claude Code**
> **Project:** Assurmanbouw.be
> **Ronde:** 2 (juni 2026)
> **Branch:** feedback-maaike-mei26 (bestaand)
> **Scope:** 10 inhoudelijke wijzigingen na Maaike's staging-review

---

## Context

Maaike heeft de eerste feedback-ronde gereviewed op staging. Ze gaf 15 nieuwe opmerkingen waarvan we er **10** verwerken in deze ronde.

**Niet in scope (uitgesteld of overgeslagen):**
- Brand Handel toevoegen op homepage (fase 2)
- Homepage-kotjes herschikken in 3 groepen (fase 2)
- Brand Handel toevoegen op verzekeringen-overzicht (fase 2)
- Brand Handel + Rechtsbijstand toevoegen op verzekeringsscan (uitgesteld)
- Beroepsaansprakelijkheid op verzekeringsscan (wacht op Maaike + Benoit)

---

## De 10 wijzigingen

### WIJZIGING 1 — Schilders case study herschrijven

**Bestand:** `src/pages/sectoren/schilders.astro`
**Locatie:** "In de praktijk"-sectie (case study)

**Wat er nu staat:**
- Heading boven case: `SCHILDERWERKEN`
- Titel: *"Verfspetters op nieuw parket: €15.000 schade"*
- Beschrijving zin 1: *"Tijdens schilderwerken in een woonkamer vielen verfspetters op een net geplaatst houten parket. Ondanks beschermingsfolie drong de verf door bij een naad."*
- Beschrijving zin 2: *"De BA-verzekering dekte de kosten voor herstel van het parket. Na expertise werd vastgesteld dat de schade accidenteel was. De klant werd volledig vergoed."*
- Bedrijfsnaam: `Verfwerken Desmet`
- Persoon: `Louis Desmet`
- Locatie: `Gent`

**Wat het moet worden (Maaike's verhaal, herwerkt zonder em-dashes):**
- Heading boven case: `GEWAARBORGD INKOMEN` (of `ARBEIDSONGEVAL` — afhangend van wat past in de sectiestructuur)
- Titel: *"Val van stelling: levenslang werkonbekwaam"*
- Beschrijving zin 1: *"Na een zwaar arbeidsongeval, een val van een stelling met twee gebroken benen, ben ik voor de rest van mijn leven werkonbekwaam in de sector. Op een stelling klimmen zit er nooit meer in."*
- Beschrijving zin 2: *"De maatschappij waar mijn gewaarborgd inkomen liep, wilde de uitkering stopzetten. Benoit betwistte de stopzetting en zorgde ervoor dat ik nu weer op beide oren kan slapen."*
- Bedrijfsnaam: behoud structuur, optie: maak anoniem of behoud een fictieve naam
- Persoon: behoud structuur of maak anoniem ("anonieme schilder")
- Locatie: ` Beernem` (of laat bestaand)

**Werkwijze:** STAP 1 — toon huidige structuur (alle velden van de case-data). Wacht op akkoord voor STAP 2.

---

### WIJZIGING 2 — Schrijnwerkers typo "schrijnwerk"

**Bestand:** `src/pages/sectoren/schrijnwerkers.astro`
**Locatie:** ergens in de body-tekst (specifieke locatie nog te bepalen)

**Maaike's feedback:** *"schrijnwerk is fout geschreven"*

**Aanpak:**
- STAP 1: zoek "schrijnwerk" + alle varianten op de pagina + toon context
- STAP 2: na mijn analyse, vervang door correcte schrijfwijze

**Verwachte schrijffouten:**
- Mogelijk "schrijnwerk" waar "schrijnwerken" zou moeten staan
- Of een spelfout zoals "schreinwerk" / "shrijnwerk"

---

### WIJZIGING 3 — Schrijnwerkers typo "geïnstalleerd"

**Bestand:** `src/pages/sectoren/schrijnwerkers.astro`

**Maaike's feedback:** *"geïnstalleerd is verkeerd geschreven"*

**Aanpak:**
- STAP 1: zoek "geinstalleerd" of varianten ("geïnstalleerd", "geïnstaleerd")
- STAP 2: vervang door correcte schrijfwijze (waarschijnlijk "geïnstalleerd" met trema)

---

### WIJZIGING 4 — Schrijnwerkers bedrijfsnaam vervangen

**Bestand:** `src/pages/sectoren/schrijnwerkers.astro`

**Wat er nu staat:**
- Bedrijfsnaam: `Schrijnwerkerij Vandenberghe`
- Locatie: onbekend (te vinden)
- Tagline: onbekend of geen

**Wat het moet worden:**
- Bedrijfsnaam: `Timmer & Schrijnwerk De Grande Dries`
- Locatie: `Oostkamp`
- Tagline: `Sterk in hout`

**Werkwijze:** STAP 1 — toon de volledige huidige case-data (bedrijfsnaam, locatie, eventuele tagline, persoon). STAP 2 — uitvoeren na mijn akkoord.

---

### WIJZIGING 5 — Elektriciens case study herschrijven

**Bestand:** `src/pages/sectoren/elektriciens.astro`
**Locatie:** "In de praktijk"-sectie (case study)

**Wat er nu staat:**
- Heading: `ELEKTRICITEITSWERKEN`
- Titel: *"Brand na elektrische fout kost €32.000: wie is aansprakelijk?"*
- Beschrijving zin 1: *"Na renovatie van een appartement brak brand uit door een kortsluiting. De bewoner stelde de elektricien aansprakelijk voor de schade aan de inboedel en structurele schade."*
- Beschrijving zin 2: *"Via de BA-polis werd een expert aangesteld om de oorzaak te onderzoeken. Na analyse bleek een fabricagefout mee verantwoordelijk. De verzekeraar handelde de claim af en de elektricien werd slechts gedeeltelijk aangesproken."*
- Bedrijfsnaam: `ElectroPro bvba`
- Persoon: `Stef Claes`
- Locatie: `Gent`

**Wat het moet worden (Maaike's verhaal, herwerkt):**
- Heading: `AANRIJDINGSSCHADE` (of `SCHADEAFHANDELING` — kies wat past)
- Titel: *"Twee aanrijdingen kort na elkaar: schadeteam pakt aan"*
- Beschrijving zin 1: *"In korte tijd reden twee verschillende transportfirma's ons gebouw aan toen ze hun lading kwamen lossen. De schades werden doorgegeven en alles verliep vlot, tot de hersteller slechts één schade wilde aanpakken."*
- Beschrijving zin 2: *"Het schadeteam van Assurman nam contact op met de aannemer en wees hem op zijn plichten zoals vastgelegd tijdens de expertise. Beide schades werden correct hersteld."*
- Bedrijfsnaam: `Prolectro`
- Persoon: behoud structuur of maak anoniem
- Locatie: `Beernem`

**Werkwijze:** STAP 1 — toon huidige structuur. STAP 2 — uitvoeren na akkoord.

---

### WIJZIGING 6 — Bedrijfsvoertuigen "Vanaf" → "Voor"

**Bestand:** `src/pages/verzekeringen/bedrijfsvoertuigen.astro`

**Maaike's feedback:** in de Vloot-box staat `Vanaf` waar `Voor` zou moeten staan.

**Concrete wijziging:**
- Zoek: `"Vanaf meerdere voertuigen kan je een vlootpolis afsluiten: vaak voordeliger."`
- Vervang door: `"Voor meerdere voertuigen kan je een vlootpolis afsluiten: vaak voordeliger."`

**Notitie:** deze zin kan op meerdere plekken voorkomen (verschillende kaarten). Vervang **alle** voorkomens.

**Aanpak:** direct uitvoeren — duidelijke one-on-one vervanging.

---

### WIJZIGING 7 — Rechtsbijstand dakwerker-case verwijderen

**Bestand:** `src/pages/verzekeringen/rechtsbijstand.astro`

**Maaike's feedback:** *"Voorbeeld dakwerker mag weg: zo'n schadegeval wordt eerst via een andere weg afgehandeld, pas in extremis in rechtsbijstand."*

**Aanpak:**
- STAP 1: zoek de dakwerker-case op de pagina. Toon volledige inhoud (heading, titel, beschrijving). Toon ook wat eromheen staat (vorige/volgende sectie of case).
- STAP 2: wacht op mijn akkoord voor verwijdering

**Belangrijk:** check of de pagina nog goed leesbaar blijft na verwijdering. Mogelijk moet er een verbinding/overgangszin worden aangepast.

---

### WIJZIGING 8 — Rechtsbijstand "depuis" vervangen

**Bestand:** `src/pages/verzekeringen/rechtsbijstand.astro`

**Maaike's feedback:** *"depuis vervangen aub"*

**Aanpak:**
- STAP 1: zoek "depuis" op de pagina + 1-2 regels context. Toon wat er staat.
- STAP 2: na mijn beslissing — mogelijk wordt het "sinds", "vanaf", of "al"

---

### WIJZIGING 9 — Rechtsbijstand "often" → "vaak"

**Bestand:** `src/pages/verzekeringen/rechtsbijstand.astro`

**Concrete wijziging:**
- Zoek "often" op de pagina (Engelse woord in Nederlandse tekst)
- Vervang door "vaak"

**Aanpak:** direct uitvoeren + toon ter bevestiging het zinsdeel waar het stond.

---

### WIJZIGING 10 — Vlootpolis blog "full stop na 1 vervaldag"

**Bestand:** `src/content/cluster-posts/kosten-en-premies/vlootpolis-besparen.md`

**Maaike's feedback:** *"met 1 vervaldag. full stop 😉"*

**Interpretatie:** Maaike wil dat de zin stopt op "met 1 vervaldag." en dat eventuele volgende zinnen geschrapt worden.

**Aanpak:**
- STAP 1: zoek de zin "met 1 vervaldag" + de zin/zinnen erna (mogelijk 1-3 zinnen die te schrappen zijn). Toon de volledige passage.
- STAP 2: na mijn beslissing exact welke tekst geschrapt wordt

**Notitie:** dit is een herhaling van eerdere feedback uit batch 6. Mogelijk hebben we toen niet de volledige zin geschrapt.

---

## Brand voice — herinneringen voor deze ronde

Bij elke wijziging die je schrijft of voorstelt:

| Regel | Toepassing |
|---|---|
| Belgisch Nederlands | "je/jij/jouw", nooit "u/uw" |
| Geen em-dashes | Bij zinssplitser: punt + hoofdletter. Bij terzijde: komma's. Bij opsomming: dubbele punt |
| Geen verzonnen cijfers | Maaike's tekst gebruikt geen prijzen — als je referentiebedrag toevoegt, vraag eerst |
| Reviewscore | 5/5 |
| Auteur | Benoit Keerman (relevant voor case-handler vermelding) |
| Bedrijfsnaam | "Assurman" exact |

---

## Werkwijze samenvatting

| Wijziging | STAP 1 nodig (rapport) | STAP 2 (uitvoering) |
|---|---|---|
| 1 — Schilders case | Ja | Wacht op akkoord |
| 2 — Schrijnwerkers typo schrijnwerk | Ja | Wacht op akkoord |
| 3 — Schrijnwerkers typo geïnstalleerd | Ja | Wacht op akkoord |
| 4 — Schrijnwerkers bedrijfsnaam | Ja | Wacht op akkoord |
| 5 — Elektriciens case | Ja | Wacht op akkoord |
| 6 — Bedrijfsvoertuigen "Vanaf" → "Voor" | Nee | Direct uitvoeren |
| 7 — Rechtsbijstand dakwerker weg | Ja | Wacht op akkoord |
| 8 — Rechtsbijstand "depuis" | Ja | Wacht op akkoord |
| 9 — Rechtsbijstand "often" → "vaak" | Nee | Direct uitvoeren |
| 10 — Vlootpolis "full stop" | Ja | Wacht op akkoord |

**Volgorde:** doe eerst de 2 "directe" wijzigingen (6, 9). Daarna 1 voor 1 de andere met STAP 1 rapport → wachten → STAP 2.

---

## Na voltooiing van alle 10 wijzigingen

1. Toon mij een totale samenvatting met:
   - Lijst van bestanden die gewijzigd zijn
   - Per bestand: aantal wijzigingen
2. Voer `npm run build` uit en bevestig:
   - Aantal pagina's gegenereerd
   - Geen errors
3. Bevestig welke .html bestanden in `dist/` moeten geüpload worden naar Hostinger:
   - dist/sectoren/schilders/index.html
   - dist/sectoren/schrijnwerkers/index.html
   - dist/sectoren/elektriciens/index.html
   - dist/verzekeringen/bedrijfsvoertuigen/index.html
   - dist/verzekeringen/rechtsbijstand/index.html
   - dist/gids/kosten-en-premies/vlootpolis-besparen/index.html
4. WACHT op mijn akkoord voor git commit + push
5. Bij akkoord:
   ```
   git add .
   git commit -m "feedback maaike ronde 2: 10 wijzigingen op sector-, verzekerings- en blog-pagina's"
   git push
   ```
