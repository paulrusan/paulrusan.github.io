# Accountium Design System

## Brand

**Product:** Accountium
**Tagline:** AI-powered accounting, built for modern teams.
**Tone:** Confident, clear, modern. Not corporate-stiff — professional but approachable.

---

## Color Tokens

All colors are defined as CSS custom properties in `src/styles/global.css`.

### Dark Theme (Default)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#09090f` | Page background |
| `--color-surface` | `#101018` | Card/section backgrounds |
| `--color-surface-raised` | `#16161f` | Elevated cards |
| `--color-border` | `rgba(255,255,255,0.07)` | Subtle borders |
| `--color-border-strong` | `rgba(255,255,255,0.14)` | Active/focus borders |
| `--color-text-primary` | `#eeeeff` | Headlines, body |
| `--color-text-secondary` | `rgba(238,238,255,0.6)` | Subtext, captions |
| `--color-text-muted` | `rgba(238,238,255,0.35)` | Disabled, placeholders |
| `--color-accent` | `#4f8ef7` | Primary CTA, links, highlights |
| `--color-accent-dim` | `rgba(79,142,247,0.15)` | Accent backgrounds/glows |
| `--color-green` | `#22d3a0` | Positive states, growth indicators |
| `--color-green-dim` | `rgba(34,211,160,0.12)` | Green tinted backgrounds |

### Light Theme (Optional)

Light mode is an opt-in alternative. Use `[data-theme="light"]` on `<html>`.

---

## Typography

### Font Stack
- **Primary:** `'Inter', system-ui, -apple-system, sans-serif`
- Loaded via `<link>` from Google Fonts (subset: Latin)

### Scale (fluid via `clamp()`)

| Token | Size | Usage |
|---|---|---|
| `--text-xs` | `0.75rem` | Labels, badges |
| `--text-sm` | `0.875rem` | Captions, footer |
| `--text-base` | `1rem` | Body copy |
| `--text-lg` | `1.125rem` | Lead text |
| `--text-xl` | `clamp(1.25rem, 2vw, 1.5rem)` | Section subtitles |
| `--text-2xl` | `clamp(1.5rem, 3vw, 2rem)` | Section headings |
| `--text-3xl` | `clamp(2rem, 4vw, 3rem)` | Page headings |
| `--text-hero` | `clamp(2.75rem, 6vw, 5rem)` | Hero headline |

### Line Heights
- Body: `1.65`
- Headings: `1.15`
- Small: `1.4`

---

## Spacing

Base unit: `4px`

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-24` | `96px` |
| `--space-32` | `128px` |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `6px` | Badges, inputs |
| `--radius-md` | `12px` | Cards |
| `--radius-lg` | `20px` | Large cards, modals |
| `--radius-full` | `9999px` | Pills, avatars |

---

## Shadows

```css
--shadow-sm:  0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2);
--shadow-md:  0 4px 20px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3);
--shadow-lg:  0 20px 60px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3);
--shadow-glow-accent: 0 0 40px rgba(79,142,247,0.2);
--shadow-glow-green:  0 0 40px rgba(34,211,160,0.15);
```

---

## Motion

```css
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
--duration-fast:  150ms;
--duration-base:  250ms;
--duration-slow:  400ms;
```

---

## Component Patterns

### Glass Card
- Background: `rgba(255,255,255,0.03)` + `backdrop-filter: blur(16px)`
- Border: conic gradient `::before` pseudo-element (see GUIDE-CC.md)
- Border radius: `--radius-md` or `--radius-lg`

### Primary Button
- Background: `--color-accent`
- Padding: `12px 28px`
- Border radius: `--radius-full`
- Hover: scale `1.03`, glow shadow
- Font: `0.9rem`, `font-weight: 600`, `letter-spacing: 0.02em`

### Section Layout
- Max width: `1200px`, centered, padding: `0 var(--space-6)`
- Section vertical padding: `var(--space-24)` top/bottom

---

## Page Sections (Home)

1. **Header** — Fixed, glass blur, logo left / nav right / CTA button
2. **Hero** — Full-height, centered text, animated gradient orbs, dual CTAs
3. **Logos** — "Trusted by" scrolling marquee of company names
4. **Features** — 3-column grid, glass cards with icon + title + description
5. **AI Highlight** — Full-width dark section, large text, decorative AI visualization
6. **Pricing** — 3 tiers in cards, middle tier highlighted as recommended
7. **Testimonials** — 3-column quote cards
8. **CTA** — Final conversion section, gradient background
9. **Footer** — 4-column links + social + copyright

---

## Named Styles

Named styles are saved shorthand references for reuse across pages.

### bt1 — Ghost Button (`btn btn-ghost`)

```html
<a href="…" class="btn btn-ghost">Label</a>
```

```css
/* Base (.btn) */
display: inline-flex;
align-items: center;
gap: var(--space-2);          /* 8px */
padding: 11px 26px;
border-radius: 6px;
font-family: var(--font-sans);
font-size: 0.9rem;
font-weight: 600;
letter-spacing: 0.01em;
cursor: pointer;
border: none;
text-decoration: none;
white-space: nowrap;
transition:
  transform var(--duration-base) var(--ease-out-expo),
  box-shadow var(--duration-base) var(--ease-out-expo),
  background var(--duration-fast) var(--ease-in-out),
  color var(--duration-fast) var(--ease-in-out);

/* Ghost modifier (.btn-ghost) */
background: transparent;
color: var(--color-accent);
border: 1px solid var(--color-border-strong);   /* rgba(8,145,178,0.3) */

/* Hover */
background: var(--color-accent-dim);            /* rgba(8,145,178,0.08) */
color: var(--color-accent-hover);               /* #0369a1 */
border-color: var(--color-accent);
transform: translateY(-1px);
```

---

## Accessibility

- All interactive elements have visible `:focus-visible` styles
- Color contrast ratio ≥ 4.5:1 for body text
- `aria-label` on icon-only buttons
- Skip-to-content link at top of page
- `prefers-reduced-motion` respects all animations
