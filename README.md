# hdparmar.github.io

Personal site of Harshdeep Parmar: embedded engineer in Stockholm, plus film photographs and writing.

Live at [hdparmar.github.io](https://hdparmar.github.io).

## Pages

| Route | What's there |
|---|---|
| `/` | Intro, contact links, selected work as two "sides" (firmware / play and image), recent writing, a strip of four photographs |
| `/photographs` | The film album: one frame per row at its own shape |
| `/photographs/:slug` | A single frame with its facts, any writing linked to it, and ← → keyboard navigation |
| `/writing`, `/writing/:slug` | Notes, poems and excerpts, each optionally paired with a photograph |
| `/analytics`, `/analytics/login` | Private analytics dashboard (Supabase) |

## Content

Everything you'd normally edit is in `src/content/`:

- `site.ts`: contact links, the quote, and the Side A / Side B tracklist
- `photographs.ts`: the album (order, captions, landing preview, footer photo)
- `writing/*.md`: published writing as Markdown with a small front-matter header

Images live in `public/photographs/` (1600px) and `public/photographs/thumbs/` (640px).

## Design

"Edge Print": warm paper and ink, Instrument Sans for text, IBM Plex Mono in burnt orange for frame numbers and metadata, a film-edge strip of frame numbers down the left on wide screens, and a footer photograph (Idrefjäll, Minolta 505si) that fades into the page. Light and dark themes, a single readable column, and layouts that stack on a phone.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, React Router. Analytics go through a Supabase edge function (`track-analytics`). They're disabled on localhost, and page views are recorded for every public route.

## Develop

```bash
npm install
npm run dev      # http://localhost:8080
npm run build
npm run lint
```

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`. `public/404.html` redirects deep links back into the single-page app.

© 2026 Harshdeep Parmar. All rights reserved.
