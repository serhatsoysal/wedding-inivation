# Wedding Invitation

Single-page wedding invitation built with **React 19** and **Vite 8**, styled with **Tailwind CSS 4**. Deployed as a static site (output in `docs/`) for **GitHub Pages**.

Live site: [https://serhatsoysalx.github.io/wedding/](https://serhatsoysalx.github.io/wedding/)

## Features

- **Bilingual UI** — Turkish / English with client-side language persistence (`localStorage`).
- **Sections** — Hero with countdown, story, wedding info (date, venue, transport dialog), photo gallery with categories and lightbox, FAQ accordion, footer.
- **Venue** — Rüyapark Düğün Salonu (Bursa) with Google Maps link and full address in copy.
- **RSVP-style actions** — “Katılıyorum / Katılamıyorum” with non-blocking toast feedback (demo; no backend).
- **Guest photos** — CTA linking to a shared Google Drive folder for uploads.
- **Gallery** — Protected media presentation (blob loading, interaction limits) and decorative CSS animations scoped to the gallery.
- **Accessibility & UX** — Smooth scroll with navbar offset, scroll-spy active nav, responsive layout, `prefers-reduced-motion` respected in global CSS.

## Tech stack

| Layer    | Choice                          |
| -------- | ------------------------------- |
| UI       | React 19                        |
| Build    | Vite 8 (`@vitejs/plugin-react`) |
| Styling  | Tailwind CSS 4 (`@tailwindcss/vite`) |
| i18n     | Plain JSON messages in `src/i18n/` |

## Requirements

- **Node.js** 20+ (recommended; matches current LTS)
- **npm** (ships with Node)

## Getting started

```bash
git clone https://github.com/serhatsoysalx/wedding.git
cd wedding
npm install
npm run dev
```

Dev server defaults to `http://localhost:5173/wedding/` (see `vite.config.js` → `base`).

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Start Vite dev server with HMR                   |
| `npm run build`| Production build → `docs/` (for GitHub Pages)    |
| `npm run preview` | Local preview of the production build         |

## Deployment (GitHub Pages)

1. Repository **Settings → Pages**: source **Deploy from a branch**, branch **`master`** (or `main`), folder **`/ (root)`** if you serve from `docs` via an action, or configure to publish from **`/docs`** on the branch that contains the built `docs/` folder.

2. This project builds **into `docs/`** (`vite.config.js` → `build.outDir: "docs"`). Push the built `docs/` output on the branch GitHub Pages uses.

3. **`base` path** must match the repository name. It is set to `/wedding/` in [`vite.config.js`](vite.config.js). If you rename the repo, update `base` and rebuild.

4. After changing `base`, run `npm run build` and commit the updated `docs/` assets.

## Project layout

```
src/
  App.jsx              # Shell, global handlers
  components/          # Navbar, Hero, Story, WeddingInfo, Gallery*, FAQ, Footer, …
  data/                # Gallery categories / static data
  i18n/                # translations.js, language hook
  styles.css           # Tailwind + keyframes
public/                # Static assets (images, gallery placeholders)
docs/                  # Production build output (GitHub Pages)
```

## Configuration notes

- **Maps & venue** — Map URL and address strings live in [`src/components/WeddingInfo.jsx`](src/components/WeddingInfo.jsx) (constant) and [`src/i18n/translations.js`](src/i18n/translations.js).
- **Guest upload link** — `GUEST_PHOTO_UPLOAD_URL` in [`src/components/Gallery.jsx`](src/components/Gallery.jsx).
- **Security** — Client-side measures only (no substitute for server-side auth). Suitable for a public static invite.

## License

Private / personal use for the wedding event. All rights reserved unless you choose to add an explicit license.

---

Built with care for Özlem & Mustafa.
