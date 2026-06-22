# STAP — Mega-menu + mobiel accordeon herbouwen (Verzekeringen)

Het huidige verzekeringen-menu (platte tekstlijst in 4 kolommen) wordt vervangen
door een hover-gestuurd mega-menu op desktop en een twee-niveau-accordeon op mobiel.
Beide voeden zich uit de bestaande databron `src/data/verzekeringen.ts`. Bron van
waarheid blijft `docs/ARCHITECTUUR-INDELING-VERZEKERINGEN.md` — werk bij waar nodig
(incl. "Laatst bijgewerkt" + changelog).

---

## Wat het wordt

**Desktop:** een paneel met links een kolom van 4 categorie-rijen (icoon-tegel +
titel + subzin), rechts een paneel met de polissen van de gehoverde categorie als
kleine kaartjes (titel + microbeschrijving). Hover op een categorie wisselt het
rechterpaneel. Eerste categorie is standaard actief bij openen.

**Mobiel:** een twee-niveau-accordeon. Niveau 1 = de 4 categorieën (dichtgeklapt,
met een telling "5 verzekeringen"). Tik op een categorie → die klapt open en toont
zijn polissen; andere categorieën klappen dicht (één tegelijk open). Zo nooit meer
dan 4 rijen + de items van één groep zichtbaar.

---

## Databron — kleine uitbreiding nodig

Voeg twee dingen toe aan de bestaande structuur in `src/data/verzekeringen.ts`:

1. **Een kort menu-veld per polis.** De microbeschrijving in het menu moet korter
   zijn dan `korteBeschrijving` (die is kaart-lengte). Voeg een veld toe:
   ```ts
   menuOmschrijving: string;  // max ~3 woorden, bv. 'Schade aan derden'
   ```
   Vul het voor alle 18 polissen. Gebruik de waarden uit de tabel onderaan dit
   document (sectie "Microbeschrijvingen").

2. **Categorie-metadata** (icoon + subzin per categorie), naast de bestaande
   `CATEGORIE_LABELS`:
   ```ts
   export const CATEGORIE_META: Record<VerzekeringCategorie, { icoon: string; subzin: string }> = {
     'aansprakelijkheid':  { icoon: 'shield-half',     subzin: 'Als er iets misgaat' },
     'spullen-en-werk':    { icoon: 'tools',           subzin: 'Materieel en gebouw' },
     'jij-en-je-mensen':   { icoon: 'heart-handshake', subzin: 'Inkomen en bescherming' },
     'pensioen-en-fiscaal':{ icoon: 'pig-money',       subzin: 'Opbouwen met voordeel' },
   };
   ```
   LET OP het label: categorie-key `spullen-en-werk` houdt zijn interne naam, maar
   het UI-LABEL in `CATEGORIE_LABELS` moet **"Materiaal & je werk"** worden (niet
   "Je spullen & je werk"). Pas dat label aan.

> De categorie-iconen zijn NIEUWE keys, los van de polis-iconen. Voeg ze toe aan
> de icon-set/ICON_MAP zoals die voor de carousels gebruikt wordt, met fallback.
> Iconen: `shield-half`, `tools`, `heart-handshake`, `pig-money`. Als jullie set
> Tabler-iconen gebruikt bestaan deze; zo niet, kies de dichtstbijzijnde equivalent
> en meld welke.

---

## Bouwinstructie

- Bouw dit als de bestaande nav-component (`Navigation.tsx`). De interactieve delen
  (hover-wissel desktop, accordeon mobiel) zijn een React-island of vanilla JS,
  conform de bestaande architectuur — wikkel GEEN volledige nav in `client:load`.
- Gebruik de bestaande breakpoint-conventie van het project om tussen desktop-
  mega-menu en mobiel-accordeon te schakelen.
- Hover-activatie op desktop MOET ook werken op toetsenbord-focus en klik (a11y):
  een categorie activeert op `mouseenter` én op `focus`/`click`. De polis-links zijn
  echte `<a>`-elementen, tab-bereikbaar.
- Mobiel accordeon: de categorie-kop is een `<button>` met `aria-expanded`. Eén
  categorie tegelijk open.
- Trailing slash: alle links via de bestaande `verzekeringUrl(slug)` helper
  (`/verzekeringen/${slug}/`).
- Kleuren via bestaande brand-tokens. Hex-referentie: blauw `#3F5767`, goud
  `#E9C466`. Gebruik bestaande `.brand-*` classes/tokens waar die bestaan; voeg
  geen nieuwe globale tokens toe.

---

## Exacte styling (referentie-HTML/CSS)

Onderstaande is het GETESTE referentie-ontwerp. Repliceer de maatvoering, kleuren
en het gedrag; vertaal naar de project-conventies (Tailwind/brand-classes) waar dat
netter is, maar behoud de visuele uitkomst (compacte rijen, vaste kaarthoogte,
icoon-tegel die navy/goud wordt bij active).

### Desktop — kernmaten
- Paneel: witte achtergrond, `border: 1px solid #E8E4F0`, `border-radius: 14px`,
  schaduw `0 16px 36px -14px rgba(63,87,103,0.28)`.
- Grid: `grid-template-columns: 244px 1fr`.
- Linkerkolom: `padding: 8px`, achtergrond `#FBFAFE`, `border-right: 1px solid #F0EDF6`.
- Categorie-rij: `display:flex; align-items:center; gap:9px; padding:7px 9px;
  border-radius:9px`. Active/hover: witte achtergrond + `box-shadow: 0 2px 8px -4px
  rgba(63,87,103,0.18)`.
- Icoon-tegel: `32x32px`, `border-radius:9px`, rust `#ECEFF2` met icoon `#3F5767`;
  active/hover `#3F5767` met icoon `#E9C466`. Icoon `font-size:17px`.
- Cat-titel: `13px / 600 / #3F5767`. Cat-subzin: `10.5px / #9BA1AC`.
- Chevron rechts in de rij: verschijnt op hover/active (`opacity 0→1`,
  `translateX -3px→0`), kleur `#E9C466`.
- Rechterpaneel: `padding: 12px 14px`.
- Polis-grid: `display:grid; grid-template-columns:1fr 1fr; grid-auto-rows:52px;
  align-content:start; gap:6px`.  ← VASTE rijhoogte 52px, bovenaan uitgelijnd, zodat
  een categorie met 3 items dezelfde kaarthoogte heeft als een met 5 items (de
  resterende ruimte blijft leeg, kaartjes rekken NIET uit).
- Polis-kaart: `display:flex; flex-direction:column; justify-content:center;
  padding:8px 11px; border-radius:8px; border:1px solid #F0EDF6; background:#FFF`.
  Hover: `border-color:#E9C466; background:#FFFDF6`.
- Polis-titel: `12px / 600 / #3F5767`. Polis-microbeschrijving: `10px / #9BA1AC`.
- Voettekstbalk: `padding:10px 16px; background:#F9F5EC; border-top:1px solid
  #F0E6CC`. Tekst "Bekijk alle verzekeringen" `12.5px / 600 / #3F5767` links,
  "Overzicht →" `12px / 600 / #B89230` rechts. Linkt naar `/verzekeringen/`.

### Desktop — gedrag
```js
// activeer categorie op mouseenter EN focus van de rij; toon bijhorend paneel,
// verberg de andere. Eerste categorie standaard active bij render.
```

### Mobiel — kernmaten
- Categorie-kop (`<button>`): `padding:11px 16px; gap:11px`. Icoon-tegel `34x34px`,
  zelfde navy/goud-active als desktop. Titel `13.5px / 600 / #3F5767`, telling
  daaronder `10.5px / #9BA1AC` (bv. "5 verzekeringen", afgeleid uit de databron).
- Chevron-down rechts; roteert 180° bij open.
- Body: `max-height 0 → open` met `transition: max-height .26s ease`.
- Polis-link in body: `padding:9px 16px 9px 61px` (inspringen onder de icoon-tegel),
  `font-size:12.5px; font-weight:500; color:#5A6573`, `border-top:1px solid #F7F5FB`.
- Eén categorie tegelijk open (open nieuwe → sluit vorige).
- Voettekstbalk identiek aan desktop.

---

## Microbeschrijvingen (menuOmschrijving per polis)

Aansprakelijkheid:
- BA Onderneming → "Schade aan derden"
- Tienjarige aansprakelijkheid (BA-10) → "BA-10, woningbouw"
- Alle Bouwplaatsrisico's (ABR) → "Werk in uitvoering"
- BA Bestuurder → "Je privévermogen"
- Rechtsbijstand → "Bij geschillen"

Materiaal & je werk:
- Brandverzekering → "Gebouw en inhoud"
- Machinebreuk → "Machines en gereedschap"
- Bedrijfsschade → "Omzetverlies bij stilstand"
- Vervoerde goederen → "Materiaal onderweg"
- Bedrijfsvoertuigen → "BA, omnium en vloot"

Jij & je mensen:
- Arbeidsongevallen → "Verplicht voor werkgevers"
- Gewaarborgd inkomen → "Bij ziekte of ongeval"
- Bescherming bedrijfsleider → "Continuïteit van je zaak"

Pensioen & fiscaal:
- Groepsverzekering → "Voor je personeel"
- Aanvullend pensioen → "Boven VAPZ/IPT/POZ"
- VAPZ → "Voor elke zelfstandige"
- POZ → "Zonder vennootschap"
- IPT → "Via je vennootschap"

---

## Sectoren-menu (apart, kort)

Het Sectoren-dropdownmenu (aannemers, dakwerkers, elektriciens, loodgieters,
schilders, schrijnwerkers) is een ANDER, eenvoudiger geval: 6 items, geen
categorieën. Bouw dat NIET als dit complexe mega-menu. Geef het wel dezelfde
visuele taal (zelfde icoon-tegels, zelfde hover-stijl, zelfde voettekstbalk-stijl),
maar als één-niveau-lijst (desktop: enkele kolom of 2 kolommen; mobiel: één-niveau-
accordeon). Vermijd zo een lange ongeordende lijst. Houd dit binnen scope alleen als
het weinig extra werk is; anders: meld het en laat het Sectoren-menu voorlopig
ongemoeid, focus op Verzekeringen.

---

## Scope-grenzen

- Alleen het Verzekeringen-mega-menu + mobiel accordeon + de databron-uitbreiding
  (menuOmschrijving, CATEGORIE_META, label-fix, categorie-iconen).
- Geen wijziging aan de archiefpagina, de detailpagina's of de carousels.
- Geen bestaande slugs wijzigen. Geen skeletons aanmaken/verwijderen.
- Geen nieuwe globale designtokens of stijlwijzigingen buiten dit menu.

## Afsluiting

1. `npm run build` groen + view-source check: het menu rendert als statische HTML
   waar mogelijk (alleen de interactie is JS), geen SEO-regressie.
2. Toon de diff van Navigation.tsx + de databron-uitbreiding.
3. Bevestig dat hover-, focus- en mobiel-accordeon-gedrag werkt (a11y).
4. Meld welke categorie-iconen je toevoegde en of het Sectoren-menu is meegenomen.
5. Commit nog NIET automatisch — toon het overzicht, ik geef commit-akkoord.
