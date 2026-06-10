# Harshdeep Parmar - Portfolio

Personal developer portfolio for Harshdeep Parmar, built as a narrow editorial ledger around music technology, research, writing, and photography.

Live site: [hdparmar.github.io](https://hdparmar.github.io)

## Current State

The homepage is a React/Vite single-page portfolio with a Hallmark-guided visual system:

- Soft off-white light mode and charcoal dark mode
- Urbanist as the global font family
- Narrow `44rem` editorial content column
- Inline dark-mode toggle in the LinkedIn/GitHub row
- Hero bio focused on [tonestruments.se](https://tonestruments.se), musical intuition, writing, photography, chess, and food
- Footer with live Stockholm local time using the `Europe/Stockholm` timezone

## Public Sections

- **Hero / Bio** - Name, pronunciation guide, personal bio, linked `tonestruments.se`, linked `hello@tonestruments.se`, LinkedIn, GitHub, dark-mode toggle, and section navigation.
- **TonePad** - Featured `TonePad Beat Blocks` project section with tagline, description, checklist, and links to `tonestruments.se`.
- **Research** - Academic research project and education history.
- **Writing** - Drafts, notes, and essays in a ledger-row format.
- **Photography** - Film photography entries with expandable story text and load-more behavior.
- **Footer** - Copyright plus `📍 Stockholm, Sweden · HH:MM CEST/CET`, updated every minute.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS, OKLCH CSS tokens, shadcn/ui, Radix primitives
- **Icons:** lucide-react
- **Data/Admin:** Supabase integration for analytics routes
- **Deployment:** GitHub Pages

## Important Files

- [src/pages/Index.tsx](src/pages/Index.tsx) - Public homepage assembly
- [src/components/Hero.tsx](src/components/Hero.tsx) - Bio, social links, section nav, inline dark-mode toggle
- [src/components/DarkModeToggle.tsx](src/components/DarkModeToggle.tsx) - Persisted light/dark toggle
- [src/components/Tonestruments.tsx](src/components/Tonestruments.tsx) - Featured TonePad section
- [src/components/Footer.tsx](src/components/Footer.tsx) - Copyright and live Stockholm time
- [src/index.css](src/index.css) - Global Urbanist import, OKLCH theme tokens, base styles
- [tailwind.config.ts](tailwind.config.ts) - Tailwind token mappings and animation setup
- [design.md](design.md) - Locked Hallmark design system for future UI work

## Local Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Routes

- `/` - Public portfolio
- `/analytics` - Private analytics dashboard
- `/analytics/login` - Analytics login
- `*` - Not found page

## Deployment

The site is intended for GitHub Pages at `hdparmar.github.io`.

## License

© 2026 Harshdeep Parmar. All rights reserved.
