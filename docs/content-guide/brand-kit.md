# Brand-kit — echte kleuren, fonts en tokens

Bron: `tailwind.config.mjs`, `src/styles/tokens.css`, `src/styles/global.css` en het
effectieve gebruik in `dakwerkers.astro` + `arbeidsongevallen.astro`. Geen losse
hex-waarden in pagina's die hier niet staan.

> **Let op de tokennaam-valstrik**: de Tailwind-tokennaam zegt niets over de
> hiërarchie. Het primaire merk-donker heet `slate` (`#3F5767`), niet `navy`. Volg de
> use-rules, niet de naam.

## 1. Kleurpalet (exact zoals in de code)

| Token | Hex | Tailwind | CSS-var | Rol |
|---|---|---|---|---|
| navy | `#001F3F` | `navy` | `--color-navy` | **Tekst/inkt**: titels H1-H3 én body-tekst op lichte secties, `theme-color`, prose-`strong`, tabel-header. **Nooit als sectie-achtergrond.** |
| gold | `#E5A524` | `gold` | `--color-gold` | Accent: iconen, section-labels, primaire knop-bg, gouden balken, stat-values op donker, prose-links |
| slate | `#3F5767` | `slate` | `--color-slate` | Donkere sectie-bg, footer, final-CTA-bg; **enige toegestane secundaire/muted teksttint**; body op blog-prose |
| gold-light | `#E9C466` | `gold-light` | `--color-gold-light` | **Alleen achtergrond**: tussen-CTA-banden, hover van gold-knoppen, wave-kleur. Nooit als tekst. |
| cream | `#F5F2FF` | — | `--color-cream` | Lichte (koele) sectie-bg: testimonials, FAQ, badge-pills |
| off-white | `#FBF8FF` | — | `--color-off-white` | Subtiele lichte sectie-bg: intro/positionering |
| sand | `#F7F4EF` | `sand` | `--color-sand` | Warm-neutrale sectie-bg: partners, dekking/premie/faq. **Nieuw officieel token (zie §5).** |
| slate-text | `#CBD5E1` | — | `--color-slate-text` | Body-tekst op donkere (`#3F5767`) secties |
| muted | `#7A6A55` | — | `--color-muted` | Secundaire micro-tekst op licht (bv. partner-label) |
| red-alert | `#dc2626` | — | `--color-red-alert` | "Niet gedekt"-iconen, alert-secties |

**Veelgebruikte alpha-varianten (mogen hardcoded):** `#e5a52414` (gold ~8%,
feature-strip-bg), `#e5a5240f` (gold ~6%, card-bg overzichtspagina's),
`rgba(229,165,36,0.1)` (icon-box-bg), `rgba(255,255,255,0.05)` + `rgba(255,255,255,0.1)`
(kaarten op donkere secties).

### Is marineblauw (`#001F3F`) nog actief?

**Ja — maar uitsluitend als TEKST/INKT, nooit als groot achtergrondvlak.** Navy is de
kleur van titels én body op lichte secties (zie §3), van `theme-color`
(`BaseLayout.astro:128`), prose-`strong` en tabel-headers. Er is geen enkele
`background:#001F3F` als grote sectie, en dat blijft verboden. Navy-als-vlak komt dus
**niet** voor en mag niet geïntroduceerd worden.

## 2. Sectie-achtergronden (het ritme)

Alterneer tussen deze waarden om visueel ritme te creëren:

| Hex | Token | Gebruik |
|---|---|---|
| `#FFFFFF` | white | Standaard sectie-bg, hero, kaarten |
| `#FBF8FF` | off-white | Subtiele afwisseling (intro/positionering) |
| `#F5F2FF` | cream | Koele afwisseling (testimonials, FAQ) |
| `#F7F4EF` | sand | Warm-neutrale afwisseling (partners, info-secties) |
| `#3F5767` | slate | Donkere/contrasterende secties, final CTA |
| `#E9C466` | gold-light | Tussen-CTA-banden (alleen als band, niet als gewone sectie) |
| `#e5a52414` | gold-strip | Smalle gold-accent-strips (feature-rijen) |

**Verboden als sectie-achtergrond:** `#001F3F` (navy — te zwaar, niet on-brand),
`#E5A524` (gold — enkel als knop-bg).

## 3. Body-tekstkleur (vastgelegde norm)

- **Body-tekst op lichte secties = navy `#001F3F`.** Dit is de live realiteit op
  `dakwerkers.astro` (100% van de body op wit) en de hoofd-body op
  `arbeidsongevallen.astro`. Navy is hier **inkt**, geen vlak.
- **Secundaire/muted tekst = slate `#3F5767`.** Dit is de **enige** toegestane
  secundaire tint.
- **Body op donkere (`#3F5767`) secties = `#CBD5E1` (slate-text).**
- **Body op gold-light (`#E9C466`) banden = slate `#3F5767`** (of klein navy inline).

### Bekende afwijking — `#64748b`

`arbeidsongevallen.astro` gebruikt op 12 plaatsen het niet-token-grijs `#64748b` voor
sectie-subtitels en kaart-body (bv. regels 267, 340, 436, 470, 508, 613). Dit is een
**afwijking**: gebruik in nieuwe pagina's `slate #3F5767`. `#64748b` wordt **niet
verder verspreid** en in deze ronde **niet opgekuist**.

## 4. Fonts — laden en toepassen

**Geladen** (Google Fonts, `global.css:1`): **Outfit** (400-900), **Plus Jakarta Sans**
(400-800), **Open Sans** (400/600/700/800). Geen Questrial, geen Source Sans Pro
(geschrapt, DECISIONS-LOG D2).

**Tokens** (`tailwind.config.mjs`): `font-display` = Outfit, `font-sans` = Open Sans,
`font-jakarta` = Plus Jakarta Sans.
**`@layer base`** (`global.css`): default `body` → Open Sans, `h1-h6` → Outfit.

### De vastgelegde font-split (documenteer dit expliciet)

| Context | Headings | Body | UI (knoppen/labels/disclaimers) |
|---|---|---|---|
| Sector-/verzekeringspagina's | **Outfit** | **Outfit** | Open Sans |
| Blog/kenniscentrum-prose | Outfit | **Open Sans** | Open Sans |

Dit is een bewuste split: op de landingspagina's is **Outfit** óók de body-font
(~100% van de praktijk), terwijl de blog-prose **Open Sans** als body houdt (correct
per token). **Plus Jakarta Sans** alleen waar bestaande pagina's het al gebruiken (bv.
proces-stap-titels `dakwerkers.astro:474`); niet proactief introduceren.

## 5. Nieuw token: `sand` (`#F7F4EF`)

Toegevoegd in deze ronde aan:
- `tailwind.config.mjs` → `colors.sand: '#F7F4EF'`
- `src/styles/tokens.css` → `--color-sand: #F7F4EF;` + `--bg-sand`

`#F7F4EF` is een warm-neutrale achtergrond die al hardcoded gebruikt werd (o.a.
partner-secties en de `dekking`/`premie`/`faq`-secties op `arbeidsongevallen.astro`).
Het is nu een **officieel toegestane sectie-achtergrond** naast white/off-white/cream/
slate. **Bestaand hardcoded `#F7F4EF`-gebruik is in deze ronde niet aangeraakt**;
nieuwe pagina's gebruiken bij voorkeur het token (`bg-sand` / `var(--color-sand)`).

## 6. Knoppen, labels en kaarten (uit `global.css`)

`global.css` is de norm-bron voor herbruikbare UI-klassen. Gebruik deze, hardcode geen
nieuwe varianten:

- **Knoppen**: `.brand-btn-primary` (gold-bg, navy tekst; hover gold-light) +
  `.brand-btn-primary--lg`, `.brand-btn-secondary` (transparant, zachte border),
  `.brand-btn-dark` (transparant-wit op donker), `.brand-btn-dark-filled` (slate-bg op
  gold-light band).
- **Labels/badges**: `.brand-section-label` (Outfit 700, 14px, uppercase,
  letter-spacing 1.4px, gold), `.brand-badge-pill`.
- **Kaarten**: `.brand-why-card`, `.brand-insurance-card`, `.brand-solution-card`,
  `.brand-testimonial-card`, `.brand-faq-item`.
- **Misc**: `.brand-step-number`, navigatie-klassen, partner-slider-animatie.

### Bekende afwijking — lokale `dw-*` / `ao-*`-duplicatie

`dakwerkers.astro` definieert eigen `.dw-btn-primary`, `.dw-why-card` enz. die de
`.brand-*`-klassen grotendeels **dupliceren**. `arbeidsongevallen.astro` gebruikt deels
wél `.brand-*`. Voor **nieuwe** pagina's is `.brand-*` de norm. De bestaande
duplicatie blijft staan (niet herwerken).

## 7. Vaste visuele bouwstenen

- **Clip-path gevouwen hoeken** (uit `tokens.css`): rechtsonder 24/32px, linksboven
  32px, beide 32px. Consistent op kaarten, banden en CTA-blokken.
- **`BrandChevron`** (`src/components/BrandChevron.astro`): sectie-overgangen. Op
  donker = wit; op gold-light band = wit; op licht/cream = gold; witte neerwaartse
  chevron als page-divider.
- **Wave-polygon** onderaan de slate final-CTA: `<polygon points="0,60 1440,20 1440,60"
  fill="#FFFFFF" />`.
- **Foto-masks** via `class="assurman-mask assurman-mask--hero|--why|--cta|--left"`
  (clip-paths gedefinieerd 1× in `BaseLayout.astro`). Hero-foto verdwijnt < 1024px.

## 8. Domein in structured data / feeds

Het canonieke website-domein staat centraal in `src/data/site.ts`
(`SITE_URL = 'https://assurmanbouw.be'`). Gebruik **altijd** die import voor absolute
URL's in JSON-LD-schema en RSS. Hardcode geen domein. `info@assurman.be` is een
**mailadres**, geen website-domein, en blijft ongemoeid.

---

## Conflicten met CLAUDE.md

Deze gids legt de huidige live realiteit vast. Dit zijn de punten waar CLAUDE.md vandaag
**afwijkt** van die realiteit en dus apart in CLAUDE.md bijgewerkt moet worden (deze
gids doet dat niet zelf):

1. **Body-kleur.** CLAUDE.md §5 (beslisregel 3) zegt "Body op lichte bg → **slate**".
   De vastgelegde realiteit + norm = **navy `#001F3F`** voor primaire body op licht;
   slate = secundair/muted. → CLAUDE.md §5 aanpassen.
2. **Body-font.** CLAUDE.md §5 koppelt `font-sans` (Open Sans) aan body. De vastgelegde
   norm voor sector-/verzekeringspagina's = **Outfit als body**; Open Sans = UI +
   blog-prose-body. → CLAUDE.md §5 nuanceren met de split.
3. **`#F7F4EF` / `sand`.** CLAUDE.md §5 noemt sectie-bg-tokens `light-slate (#CBD5E1)`
   en `gold-strip`, maar niet de warm-neutrale `#F7F4EF`. Die is nu een officieel token
   (`sand`) en toegelaten als sectie-achtergrond. → toevoegen aan CLAUDE.md §5-tabel.
4. **Secundaire teksttint.** CLAUDE.md benoemt `#64748b` nergens; het leeft als
   afwijking in de code. Norm = slate `#3F5767` als enige secundaire tint. → eventueel
   expliciteren in CLAUDE.md.
5. **Domein.** Niet echt een CLAUDE.md-regel, maar ter info: de schema/RSS-domeinbug
   (`www.assurman.be`) is gefixt naar `assurmanbouw.be` via `src/data/site.ts`.
