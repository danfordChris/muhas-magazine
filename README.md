# MUHAS Review — Issue 01

The magazine of **Muhimbili University of Health and Allied Sciences**, built with
Next.js (App Router) and Tailwind CSS v4.

## Run it

```bash
npm run dev
```

Then open <http://localhost:3000>. Other scripts: `npm run build`, `npm start`, `npm run lint`.

## How it is laid out

```
app/
  layout.tsx        fonts (Playfair Display + Inter), metadata, theme colour
  page.tsx          composes the issue, in order
  globals.css       design tokens, Tailwind theme, drop cap, print stylesheet
components/
  Type.tsx          Sheet / Folio / Display / Intro / Tag — the shared furniture
  Cover.tsx         the cover
  Contents.tsx      01–08 table of contents
  Letter.tsx        01  From the Vice Chancellor
  Identity.tsx      02  Who We Are  (vision, mission, motto, figures)
  Story.tsx         03  Our Story   (1963 → today)
  Leaders.tsx       04  The Leaders
  Culture.tsx       05  Our Culture (the five core values)
  Field.tsx         06  In the Field
  Campuses.tsx      07  The Campuses
  Units.tsx         08  Academic Units
  BackCover.tsx     contact details and colophon
  Spine.tsx         sticky masthead: progress bar + section nav  (client)
  ScrollEffects.tsx fade-ins and the counting figures             (client)
lib/
  content.ts        ALL the words and numbers
public/assets/      crest + photographs
```

Only `Spine` and `ScrollEffects` are client components; everything else renders on the
server. The page is fully static — `next build` prerenders it.

## Editing the magazine

**Change the words in [`lib/content.ts`](lib/content.ts), not in the components.** Every
section reads from it, so a new issue is a data edit:

- `issue` — title, issue number, date, motto, tagline
- `coverLines` — the three teasers on the cover
- `sections` — drives both the contents page and the sticky nav
- `stats` — the year's figures (they count up on screen)
- `timeline`, `leaders`, `values`, `lead`, `stories`, `campuses`, `units`, `contact`

To start Issue 02: bump `issue.number` / `issue.date`, rewrite `coverLines`, and replace
`lead` and `stories`. No layout work required.

Photographs live in `public/assets/`. Replace a file with the same name and the layout
keeps working; story images crop to 4:3 automatically. `next/image` handles sizing, so
update the `width`/`height` props if a replacement has different proportions.

## Brand

Taken from the MUHAS crest and muhas.ac.tz. Defined once in `app/globals.css` as CSS
variables, exposed to Tailwind through `@theme inline`, so `bg-navy`, `text-red` and
friends flip automatically in dark mode.

| Token | Light | Use |
| --- | --- | --- |
| `navy` | `#001C38` | full-bleed spreads, rules, markers |
| `red` | `#C60100` | section labels, accents, active nav |
| `gold` | `#C9922E` | pull quotes, tags, labels on navy |
| `green` | `#1F7A4C` | crest green, held in reserve |
| `paper` | `#FBF8F3` | warm page stock |

Typefaces: **Playfair Display** for headlines, **Inter** for text, both via `next/font`.
Motto used as the spine device: **Elimu · Tiba · Utafiti**.

## Deploying

Static output, so it deploys anywhere. On Vercel:

```bash
npx vercel
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL so Open Graph images resolve.

## Notes before this goes public

- **Confirm the figures and photo permissions with the Directorate of Communication and
  Marketing.** Statistics are the University's published 2025–2026 numbers; photographs
  came from the MUHAS website.
- `Cmd/Ctrl + P` prints the issue with a dedicated print stylesheet — white stock, no
  navigation, sensible page breaks.
- Accessibility: semantic landmarks and headings, descriptive `alt` text on every
  photograph, visible focus rings, a skip link, `prefers-reduced-motion` honoured, and
  light/dark support via `prefers-color-scheme`.
