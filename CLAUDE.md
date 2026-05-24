# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5000 (port is strict)
npm run build     # Build to dist/
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

## Architecture

This is a React 18 + Vite 5 single-page application for **Hashtag Overseas Education**, an immigration and study-abroad consultancy.

### Data-driven page pattern

Most pages (all visa and service pages) are **not individually coded**. Instead:
- A single `GenericPage` component ([src/pages/GenericPage.jsx](src/pages/GenericPage.jsx)) renders all service/visa pages
- Each page is identified by a `pageKey` string (e.g. `canada_study_visa`)
- Content comes from [`src/data/scraped_site_content.json`](src/data/scraped_site_content.json) — a flat JSON keyed by `pageKey`
- [`src/utils/contentParser.js`](src/utils/contentParser.js) filters header/footer noise from the scraped data, merges fragmented paragraphs, and returns structured `{ title, sections }` with tagged items (`h2`, `h3`, `h4`, `li`, `p`)

**To add a new service page:**
1. Add content under a new key in `scraped_site_content.json`
2. Add a route in `App.jsx`: `<Route path="/new-page" element={<GenericPage pageKey="new_page" />} />`
3. Add a banner image mapping in the `bannerImages` object inside `GenericPage.jsx`

### Routing

All routes are declared in [`src/App.jsx`](src/App.jsx). The app uses React Router v6. `ScrollToTop` resets scroll position on every route change.

### Global UI elements (App.jsx)

`App.jsx` owns these site-wide elements rendered outside `<Routes>`:
- `Header` — sticky nav with multi-level hover dropdowns (desktop) and accordion (mobile)
- `Footer`
- `CallBackModal` — callback request form, toggled via `isModalOpen` state passed down as `onOpenCallback` prop
- Floating WhatsApp button (links to `wa.me/919816221774`)
- Floating social sidebar (Facebook, YouTube, Instagram)
- Dismissible disclaimer banner

### Styling approach

The project mixes three styling approaches:
- **CSS variables** defined in [`src/index.css`](src/index.css) (e.g. `var(--primary)` is `#67239a`, `var(--font-title)`, `var(--font-body)`)
- **Inline JS `styles` objects** — every component has a local `const styles = {...}` at the bottom
- **Dynamic `<style>` injection** — `Header.jsx` and `GenericPage.jsx` inject `<style>` tags into `document.head` at module load time for hover-driven CSS (dropdowns, PTE table layout, responsive overrides)

The `.container` utility class and responsive breakpoints come from `index.css` / `App.css`.

### Images

Images are served from `/images/` (i.e. `public/images/`). All banner images for `GenericPage` are referenced by filename in `GenericPage.jsx`'s `bannerImages` map.

### Special case: spoken_english page

`GenericPage.jsx` has a special pre-processing step for `pageKey === 'spoken_english'` that groups `h4` elements with `Part-1/2/3` titles into a `pte_table` pseudo-node, which renders as a 3-column CSS grid layout.
