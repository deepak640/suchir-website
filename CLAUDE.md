# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (output: 'standalone', see next.config.ts)
npm run start    # serve the production build
npm run lint     # eslint (flat config in eslint.config.mjs)
```

There is no test runner configured.

Docker: `docker compose up --build` builds the standalone image (Dockerfile is a
multi-stage build that relies on `output: 'standalone'` in `next.config.ts` —
keep that setting if you change the config).

## Architecture

Single-page marketing/portfolio site on the Next.js **App Router**. Path alias
`@/*` maps to `app/*` (see tsconfig.json), so imports look like
`@/components/Hero`, not relative paths.

- `app/page.tsx` — the entire site is one page composed of section components.
  **Only a subset of the built components are actually rendered**: Navbar, Hero,
  About, Contact, Footer. Components like `Ventures`, `Timeline`, `Philosophy`,
  `Gallery`, `Impact` exist and are fully built but are **not** currently mounted
  in `page.tsx`. Add them back to `page.tsx` to use them.
- `app/layout.tsx` — root layout: global metadata/SEO/OpenGraph, Google Fonts
  (Playfair Display + Inter) loaded via `<link>`, dark theme baked into `<body>`.
- Each section lives in `app/components/<Name>/index.tsx`; shared primitives are
  in `app/components/ui/` (`Button`, `SectionLabel`, `SmoothScroll`).
- `app/lib/data.ts` — **all site content** (ventures, timeline, gallery, impact
  stats, nav items) is centralized here as typed constants. Edit copy here, not
  inside components. Types back it in `app/types/index.ts`.
- `app/lib/animations.ts` — shared Framer Motion `Variants` (fadeUp, fadeLeft,
  scaleIn, staggerContainer, …). Reuse these instead of inline animation props.
- `app/hooks/` — `useScrolled` (navbar transparency), `useActiveSection`
  (IntersectionObserver-based nav highlighting), `useCounter` (animated stats).

### Gotchas

- `app/components/ui/SmoothScroll.tsx` is currently a **pass-through wrapper** — it
  renders children only and does NOT wire up Lenis, even though `@studio-freight/lenis`
  is a dependency and the README claims smooth scrolling. To actually enable smooth
  scroll you must implement it here.
- Section components using hooks, Framer Motion, or browser APIs must be Client
  Components (`'use client'`).

### API

- `app/api/submit-lead/route.ts` — POST handler that pushes contact-form
  submissions to **Zoho CRM Leads**. It exchanges a refresh token for an access
  token on every request. Requires env vars: `ZOHO_CLIENT_ID`,
  `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN` (Zoho India endpoints: `accounts.zoho.in`
  / `zohoapis.in`). `name` and `email` are required fields.

## Styling

Tailwind CSS v4 (via `@tailwindcss/postcss`; config-less — customization lives in
`app/globals.css`). Design tokens are dark/luxury: bg `#0E0E0E`, surface `#181818`,
text `#F5F5F5`/`#A1A1A1`, accent gold `#C8A15A`. These are used as arbitrary values
(e.g. `bg-[#0E0E0E]`) rather than named theme colors.
