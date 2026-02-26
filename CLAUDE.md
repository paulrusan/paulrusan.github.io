# Accountium — Claude Code Instructions

## Project Overview

Static marketing website for **Accountium**, an AI-powered accounting software.
Built with **Astro 4** (static output), TypeScript, vanilla CSS.

## Key Files

- `DESIGN.md` — Design system: colors, typography, spacing, component patterns
- `GUIDE-CC.md` — Build guide: Astro conventions, data architecture, component patterns
- `src/data/` — All site content as typed TypeScript arrays
- `src/components/` — Reusable `.astro` components
- `src/layouts/` — Page layout templates
- `src/styles/global.css` — CSS custom properties and global styles
- `user-website-content/` — Raw user-provided content (text, images, fonts)

## Conventions

- **Data lives in `src/data/*.ts`** — never hardcode content in components
- **Components are PascalCase** — `FeatureCard.astro`, not `feature-card.astro`
- **Pages are kebab-case** — `about.astro`, `our-team.astro`
- **Images in `public/images/`** — reference as `/images/filename.ext`
- **Scoped styles** preferred — use `<style>` inside `.astro` files
- **No frameworks** — vanilla JS only for interactivity (Astro islands if needed)

## Site URL

Production: `https://accountium.ca`
Update `site` in `astro.config.mjs` before deployment.

## Adding Content

1. Add/edit entries in `src/data/*.ts`
2. A new page (e.g. blog post) is auto-generated when `getStaticPaths()` iterates the data

## Deployment

GitHub Actions → FTP (see GUIDE-CC.md for workflow template).
Or push to Netlify/Vercel — zero config needed for static output.

## Contact Form

Uses Formspree. User must create account at formspree.io and replace
`YOUR_FORM_ID` in `src/pages/contact.astro` with their actual form endpoint ID.

## Design Principles

- **Dark mode first** — `--color-bg: #09090f`
- **Minimal chrome** — let content breathe, negative space is a feature
- **Glass morphism** — conic gradient borders, backdrop blur on floating elements
- **Responsive motion** — cursor-following zoom on cards, smooth easing
- See `DESIGN.md` for full token reference

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist
npm run preview   # Preview production build
```
