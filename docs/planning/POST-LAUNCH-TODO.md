# POST-LAUNCH-TODO.md — Assurmanbouw Kenniscentrum

Actiepunten die bewust uitgesteld zijn tot na go-live van het kenniscentrum.
Niet vergeten bij de go-live checklist.

---

## Routing

- **BESLIST (2026-06-26, Dennis):** Het kenniscentrum leeft op **`/gids/`** en dat
  **blijft zo voorlopig**. De naam in de UI = "Kenniscentrum", de URL = `/gids/`.
- [ ] **Oude `/kenniscentrum/` route opruimen bij go-live**
  Bestand: `src/pages/kenniscentrum.astro` (legacy losse pagina, gebruikt nog "u" =
  off-brand, is NIET de echte kenniscentrum-hub).
  - Optie A: verwijderen (route werd nooit publiek gepromoot; nav linkt naar `/gids/`)
  - Optie B: 301-redirect instellen van `/kenniscentrum/` naar `/gids/`
  Toegevoegd: 2026-05-09 (zie DECISIONS-LOG.md D1). Beslissing uitstellen tot go-live.

---

## Navigatie

- [x] **Kenniscentrum-link in hoofdnavigatie** — staat in `src/components/Navigation.tsx`
  als menu-item "Kenniscentrum" → `/gids/`. Voorwaarde ("alle content live") is voldaan:
  het kenniscentrum is voldoende ruim uitgebouwd (Dennis, 2026-06-26).

---
