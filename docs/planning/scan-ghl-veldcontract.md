# Verzekeringsscan (fase 2) — GHL-veldcontract & setup-checklist

> **Status 2026-07-27:** webhook-URL ingevuld in `src/pages/lab/verzekeringsscan.astro`
> en **end-to-end getest**: POST vanuit de browser geeft HTTP 200 ("Success:
> request sent to trigger execution server"). Alle 3 nieuwe custom fields zijn
> aangemaakt (scan_cluster, verzekeringen_andere, scan_kans_pensioen); alle
> payload-keys hebben een bestaand veld. Hoofdactiviteit en verzekeringen zijn
> Single line-tekstvelden: prima, geen optielijsten te onderhouden.
> Er staan TEST-payloads klaar in GHL (e-mail `scan-webhook-test@teammade.be`)
> die als sample-request dienen voor de veldmapping in de workflow-trigger.
> Komt er geen contact aan in het CRM, dan ligt het aan de workflow-kant: zie §1e.
>
> **Achtergrond:** de fase-1-scan (GHL AI Studio) gebruikte een tracking-pixel-
> achtige call (`backend.leadconnectorhq.com/external-tracking/events`). De
> nieuwe native scan volgt het patroon van **D7** in `DECISIONS-LOG.md` (zelfde
> als `ContactForm.tsx` op `/contact/` en `/maak-afspraak/`): client-side
> `fetch()` POST naar een GHL **Inbound Webhook**:
> `https://services.leadconnectorhq.com/hooks/CZvuwnma5HR0BBq9wPYn/webhook-trigger/56016b1e-a641-4949-961c-a08930cb1774`

---

## 1. Wat er nog moet gebeuren in GHL

### 1a. Drie nieuwe custom fields aanmaken (type: tekst / lange tekst)

| Nieuw veld | Type | Inhoud |
|---|---|---|
| `contact.scan_cluster` | tekst | Sectorcluster: `ruwbouw` / `afwerking` / `technieken` / `buiten` (leeg bij "andere bouwactiviteit"). Handig voor segmentatie. |
| `contact.verzekeringen_andere` | lange tekst | Vrije tekst uit het nieuwe "Nog een andere verzekering? Vul aan"-veld. Enkel voor de leadbehandelaar, niet automatiseren. |
| `contact.scan_kans_pensioen` | lange tekst | De pensioen/fiscaal-kans-tip (telt niet mee in de score). Leeg als niet van toepassing. |

### 1b. Alle overige velden: HERGEBRUIKEN, niets bijmaken

Alle 17 bestaande fase-1-velden blijven exact zoals ze zijn; de payload-keys
zijn er 1-op-1 op afgestemd (zie §2). Geen nieuwe velden nodig voor de
antwoorden of het rapport.

### 1c. Waarde-audit op bestaande automations (belangrijk!)

De veldnamen blijven gelijk, maar de **waarden** veranderen:

- `contact.hoofdactiviteit`: was 6 waarden ("Dakwerker", "Loodgieter / HVAC",
  ...), wordt 20 waarden met de nieuwe sectortitels ("Dakwerkers",
  "Loodgieters", "Koeltechniek & HVAC", "Vloerders & tegelzetters", ...,
  "Andere bouwactiviteit"). Is dit veld in GHL een dropdown/single-select, dan
  moet de optielijst uitgebreid worden; is het een tekstveld, dan is er niets
  te doen.
- `contact.verzekeringen`: nieuwe polistitels uit de 18-polissenlijst
  ("Tienjarige aansprakelijkheid (BA-10)", "Machinebreuk", "Verzekering
  vervoerde goederen", ...). De fase-1-waarden "Beroepsaansprakelijkheid" en
  "Materiaal & Gereedschap" komen niet meer voor.
- **Check dus elke workflow/filter/tag-regel die op deze oude waarden matcht**
  en werk ze bij naar de nieuwe titels.

### 1d. Workflow bouwen op de nieuwe Inbound Webhook-trigger

1. Trigger: Inbound Webhook (URL hierboven; die vuurt zodra de scan submit).
2. Create/Update Contact op `{{trigger.body.email}}`, met
   `{{trigger.body.naam}}` → first name, `{{trigger.body.bedrijfsnaam}}` →
   organization, `{{trigger.body.telefoon}}` → phone.
3. Per custom field een "Add Custom Field Value" met `{{trigger.body.<key>}}` —
   key = veldnaam zonder `contact.`-prefix (zie §2), dus mapping is 1-op-1.
4. Tag op basis van `scan_resultaat`: `scan-hoog-risico` / `scan-aandacht` /
   `scan-basis-ok` (zelfde tags als fase 1 zodat segmentaties blijven werken).
5. Wachttijd 2 min → bestaande e-mailtemplate hergebruiken (merge-tag
   `contact.scan_rapport_html` blijft identiek werken).
6. Optioneel: interne notificatie bij `HIGH_RISK` (zoals fase 1).

### 1e. Eerste test + troubleshooting "data komt niet aan"

De frontend en de webhook zelf zijn bewezen werkend (HTTP 200, 2026-07-27).
Komt een test toch niet in het CRM terecht, dan zit het probleem in de
workflow-configuratie. Checklist in volgorde:

1. **Is de workflow gepubliceerd?** Een workflow in draft ontvangt requests
   (de webhook geeft gewoon 200 terug) maar voert niets uit. Toggle rechtsboven
   op "Publish".
2. **Veldmapping op basis van een sample-request.** Open de Inbound
   Webhook-trigger → "Check for new requests": daar staan nu TEST-payloads
   (e-mail `scan-webhook-test@teammade.be`) met alle velden. Selecteer die als
   sample en map de velden vanaf dat sample; handmatig getypte
   `{{trigger.body.*}}`-referenties zonder sample zijn foutgevoelig.
3. **Is er een "Create/Update Contact"-actie** die `{{trigger.body.email}}`
   als e-mail gebruikt? Zonder die actie wordt er nooit een contact aangemaakt.
4. **Execution Logs.** Workflow → Enrollment History / Execution Logs toont per
   binnengekomen request of de trigger vuurde en welke stap eventueel faalde.

Daarna: doorloop `/lab/verzekeringsscan` met je eigen e-mailadres en controleer
contact, custom fields, tag en de mail met het gerenderde rapport. Verwijder
nadien het TEST-contact (`scan-webhook-test@teammade.be`).

---

## 2. Payload-contract (vast, wijzig niet zonder dit document te updaten)

De frontend (`VerzekeringsScan.tsx`) stuurt dit platte JSON-object bij stap 9
→ 10 (na validatie, honeypot + time-trap gepasseerd). Kolom "GHL-veld" = het
bestaande of aan te maken custom field.

| JSON-key | GHL-veld | Inhoud |
|---|---|---|
| `naam` | `first_name` | Volledige naam |
| `bedrijfsnaam` | `organization` | Bedrijfsnaam |
| `email` | `email` | — |
| `telefoon` | `phone` | — |
| `hoofdactiviteit` | `contact.hoofdactiviteit` | Sectortitel, bv. "Dakwerkers" (20 mogelijke waarden, zie §1c) |
| `scan_cluster` | `contact.scan_cluster` **(nieuw)** | `ruwbouw` / `afwerking` / `technieken` / `buiten` / leeg |
| `teamgrootte` | `contact.teamgrootte` | "Solo zelfstandige" / "1 tot 4 medewerkers" / "5 of meer medewerkers" |
| `onderaannemers` | `contact.onderaannemers` | "Ja, regelmatig" / "Soms" / "Nee" |
| `projectgrootte` | `contact.projectgrootte` | "Kleine werven (< €25K)" / ... |
| `verzekeringen` | `contact.verzekeringen` | Kommalijst polistitels, incl. "Geen" / "Weet ik niet" |
| `verzekeringen_andere` | `contact.verzekeringen_andere` **(nieuw)** | Vrije tekst |
| `materiaalwaarde` | `contact.materiaalwaarde` | "Ja" / "Nee" / "Weet ik niet" |
| `advies` | `contact.advies` | "Ja" / "Nee" / "Soms" |
| `laatste_controle` | `contact.laatste_controle` | "Nog nooit" / "Meer dan 2 jaar geleden" / "Minder dan 1 jaar geleden" |
| `scan_score` | `contact.scan_score` | Numerieke score |
| `scan_resultaat` | `contact.scan_resultaat` | `HIGH_RISK` / `ATTENTION_NEEDED` / `BASE_OK` |
| `scan_urgentie` | `contact.scan_urgentie` | Dynamische kopregel |
| `scan_risicos` | `contact.scan_risicos` | Gap-boodschappen, pipe-separated (` \| `) |
| `scan_kans_pensioen` | `contact.scan_kans_pensioen` **(nieuw)** | Pensioen/fiscaal-kans-tip of leeg |
| `beroepsspecifieke_tip` | `contact.beroepsspecifieke_tip` | Sector-tip |
| `veelgemaakte_fout_1` | `contact.veelgemaakte_fout_1` | — |
| `veelgemaakte_fout_2` | `contact.veelgemaakte_fout_2` | — |
| `scan_rapport_html` | `contact.scan_rapport_html` | Volledig rapport als HTML-blok (e-mail merge-tag) |
| `scan_interne_notitie` | `contact.scan_interne_notitie` | Leesbare samenvatting voor intern gebruik |
| `bron` | — (geen veld nodig) | Vaste waarde `"verzekeringsscan"`; eventueel als lead source of tag |
| `entry_url` | — (geen veld nodig) | URL bij submit |
| `submitted_at` | — (geen veld nodig) | ISO-datetime |

**Niet in de payload:** het honeypot-veld wordt nooit meegestuurd (zelfde
patroon als `ContactForm.tsx`).

---

## 3. Wat er NIET meer nodig is

Zodra `/lab/verzekeringsscan` is goedgekeurd en live gaat op
`/gratis-verzekeringsscan/`, vervalt de GHL AI Studio-build volledig (geen
iframe, geen `external-tracking`-flow). De enige blijvende GHL-afhankelijkheid
is de workflow uit §1d.

---

## 4. Openstaande content-review (vóór staging/live, niet vóór lokale preview)

`src/data/scan.ts` bevat voor 14 van de 19 beroepen verse tip/fout-content
(concept). Inhoudelijk na te kijken door Benoit.
