# DECISIONS-LOG.md — Assurmanbouw Kenniscentrum

Beslissingen die vastgelegd zijn tijdens de bouw van het kenniscentrum.
Chronologisch, meest recent onderaan. Bij conflict wint deze log boven eigen redenering.

---

## 2026-05-09

### D1 — kenniscentrum.astro laten staan
`src/pages/kenniscentrum.astro` wordt niet aangeraakt tijdens de kenniscentrum-build.
Bij go-live beslissen we: verwijderen of 301-redirect naar `/gids/`. Zie POST-LAUNCH-TODO.md.

### D2 — Typografie: Outfit + Open Sans (Questrial geschrapt)
Questrial en Source Sans Pro uit de visuele design-brief worden **genegeerd**.
Leidend zijn de bestaande fonts in `global.css`:
- Headings (H1–H6): **Outfit**
- Body-tekst, paragrafen, meta: **Open Sans**
- Plus Jakarta Sans: alleen waar bestaande pagina's het al gebruiken, niet proactief introduceren.
Reden: design-brief was gebaseerd op een verouderde brand-kit.

### D3 — URL-tabel developer brief is leidend bij slug-mismatches
Bij conflict tussen content-filename en URL-tabel uit developer brief v2:
de URL-tabel wint altijd. Image-bestandsnamen volgen de URL-tabel (zijn al correct).

Vastgelegde afwijkingen voor Cluster 1:
- `c1-3`: frontmatter `slug: "groeiend-bouwbedrijf"` (niet "middelgroot-bouwbedrijf")
- `c1-4`: frontmatter `slug: "zelfstandige-zonder-personeel"` (niet "zelfstandige-bouw")

Principe voor alle andere clusters: bij elk verschil → URL-tabel wint.

### D4 — Dit DECISIONS-LOG.md aangemaakt
Alle bouw-beslissingen worden hier chronologisch vastgelegd voor traceerbaarheid
in toekomstige sessies. Toevoegen bij elke nieuwe beslissing.
