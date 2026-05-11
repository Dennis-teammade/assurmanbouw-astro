# POST-LAUNCH-TODO.md — Assurmanbouw Kenniscentrum

Actiepunten die bewust uitgesteld zijn tot na go-live van het kenniscentrum.
Niet vergeten bij de go-live checklist.

---

## Routing

- [ ] **`/kenniscentrum/` route beslissen**
  Bestand: `src/pages/kenniscentrum.astro`
  - Optie A: verwijderen (als route nooit publiek gepromoot werd)
  - Optie B: 301-redirect instellen van `/kenniscentrum/` naar `/gids/`
  Toegevoegd: 2026-05-09 (zie DECISIONS-LOG.md D1)

---

## Navigatie

- [ ] **Kenniscentrum-link toevoegen in hoofdnavigatie**
  `src/components/Navigation.tsx` — menu-item "Kenniscentrum" → `/gids/`
  Pas toe nadat alle content live is (niet eerder, anders linkt het naar een lege hub).

---
