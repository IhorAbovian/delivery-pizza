# AGENTS.md

## Overview

Pizza delivery storefront (catalog browsing, currently no checkout/ordering flow yet). Next.js 16.3.5 App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui (radix-ui based).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Architecture

- `app/page.tsx` — server component. Fetches the pizza catalog and renders it grouped by category (pizza, breakfast, wings, milkshake).
- `app/layout.tsx` — root layout (fonts, `CartProvider`).
- `lib/api.ts` — data layer. `fetchPizzaCatalog()` hits `${NEXT_PUBLIC_API_URL}/pizzas/catalog` (revalidate: 60s), returns `Pizza[]`. Also has `getStartingPrice`, `getPizzaImageUrl`, `groupPizzasByCategory`.
- `lib/constants.ts` — `PIZZA_CATEGORIES` order + `PIZZA_CATEGORY_LABELS`.
- `lib/utils.ts` — `cn` (re-exported from `cn` package, not the usual clsx+tailwind-merge local helper), `formatPrice` (CAD currency formatting, e.g. `CA$25`).
- `types/pizza.ts` — `Pizza`, `PizzaSize`, `PizzaOption`, `PizzaIngredient`, `PizzaCategory` types. This is the source of truth for catalog shape.
- `types/cart.ts` — currently empty, cart types not yet defined.
- `components/cart-context.tsx` — `CartProvider`/`useCart`. Client-side only state (itemCount, totalPrice, addItem); nothing persisted, no per-item detail yet.
- `components/pizza-card.tsx`, `components/pizza-details-dialog.tsx` — catalog card + detail dialog.
- `components/header.tsx`, `components/footer.tsx` — layout chrome.
- `components/ui/*` — shadcn/ui primitives (button, dialog, badge, toggle, toggle-group).

## Conventions

- Env var `NEXT_PUBLIC_API_URL` points to the backend serving `/pizzas/catalog`; image paths from the API may be relative and must go through `getPizzaImageUrl`.
- Prices are always in cents-free integers (whole CAD dollars) — `formatPrice` has no decimals.
- Server components fetch data (`app/page.tsx`); client components (`"use client"`) hold interaction state (cart, dialogs).

## Notes

- `.agents/` directory is gitignored — contains AI agent skills only
- Branch: `junior`
