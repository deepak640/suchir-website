# Shuchir Suri — Premium Founder Portfolio

A luxury editorial portfolio website for Shuchir Suri, founder of Food Talk India, Jade Forest, and the Gin Explorers Club.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations
- **Lenis** — smooth scrolling
- **React Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/
│   ├── Hero/        # Full-viewport hero with typewriter & mouse tracking
│   ├── About/       # Split layout biography section
│   ├── Ventures/    # Three premium venture cards
│   ├── Timeline/    # Scroll-animated vertical timeline
│   ├── Philosophy/  # Full-screen editorial quote section
│   ├── Gallery/     # Filterable masonry gallery
│   ├── Impact/      # Animated counter stats
│   ├── Contact/     # Social links & contact section
│   ├── Navbar/      # Transparent → blurred sticky navbar
│   ├── Footer/      # Minimal footer
│   └── ui/          # Reusable primitives (Button, SectionLabel, SmoothScroll)
├── hooks/           # useScrolled, useActiveSection, useCounter
├── lib/             # animations.ts (Framer variants), data.ts (content)
└── types/           # TypeScript interfaces
```

## Design Tokens

| Token          | Value     |
|----------------|-----------|
| Background     | `#0E0E0E` |
| Surface        | `#181818` |
| Primary Text   | `#F5F5F5` |
| Secondary Text | `#A1A1A1` |
| Accent Gold    | `#C8A15A` |

## Adding Real Images

Replace placeholder images in `public/images/` with actual photos:

- `placeholder-venture-1.jpg` — Food Talk India
- `placeholder-venture-2.jpg` — Jade Forest
- `placeholder-venture-3.jpg` — Gin Explorers Club
- `placeholder-gallery-1.jpg` through `placeholder-gallery-9.jpg` — Gallery

## Build

```bash
npm run build
npm run start
```
