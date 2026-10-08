# City Internal Audit Services Department — Website

Next.js (App Router) implementation of the City Internal Audit Services
Department site for the City Government of Butuan, ported from the Claude Design
project _"Butuan City Audit Services Site"_.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Plain CSS (`app/globals.css`) + inline styles — no UI framework, matching the
  original design's styling approach
- Google Fonts (Merriweather + Public Sans) loaded in the root layout

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## SEO

SEO is centralised in `lib/site.ts` (single source of truth) and `lib/seo.ts`
(per-page metadata helper). Every route exports page-specific metadata via
`pageMetadata({ title, description, path })`, which generates the canonical URL,
Open Graph, and Twitter tags.

- **Canonical / production URL** is read from the `NEXT_PUBLIC_SITE_URL`
  environment variable, falling back to `https://ciasd.butuan.gov.ph`. **Set the
  real domain in the Vercel dashboard** (Project → Settings → Environment
  Variables), e.g. `NEXT_PUBLIC_SITE_URL=https://ciasd.butuan.gov.ph`, with no
  trailing slash. Everything else (sitemap, robots, canonical, OG) follows from
  it automatically.
- Generated routes: `/robots.txt` (`app/robots.ts`), `/sitemap.xml`
  (`app/sitemap.ts`), `/manifest.webmanifest` (`app/manifest.ts`).
- `/opengraph-image` and `/twitter-image` generate a branded 1200×630 social
  card at build time via `next/og` (`app/opengraph-image.tsx`).
- Schema.org JSON-LD (`GovernmentOrganization` + `WebSite`) is rendered site-wide
  by `components/StructuredData.tsx`.
- When adding a new route, add it to the list in `app/sitemap.ts`.

## Structure

```
app/
  layout.tsx          Root layout: fonts, <Header>, <Footer>, metadata
  globals.css         Base styles + hover/focus utilities
  page.tsx            Home (/)
  about/page.tsx      About Us (/about)
  services/page.tsx   Services (/services)
  city-offices/page.tsx   For City Offices (/city-offices)
  news/page.tsx       News & Updates (/news)
  careers/page.tsx    Careers (/careers)
  contact/page.tsx    Contact Us (/contact)
components/
  Header.tsx          Client: PST clock, responsive menu, active-route nav
  Footer.tsx          Server: links + inline Philippine-seal SVG
  ImageSlot.tsx       Presentational photo placeholder (ported <image-slot>)
  NewsFeed.tsx        Client: category filter + post grid + pagination
  ReportForm.tsx      Client: "Report a Concern" form (anonymous / consent / submit)
  OpenOnHash.tsx      Client: opens a <details> section when deep-linked by hash
lib/
  css.ts              Parses the original inline CSS strings into React style objects
public/assets/        Brand images (IAS logo, Butuan city seal)
```

## Notes on the port

- The original "Design Canvas" `.dc.html` components (a small React runtime using
  `{{ }}`, `<sc-if>`, `<sc-for>`) were reimplemented as native React. The shared
  Header/Footer now live in the root layout; the active nav tab is derived from
  the current route (`usePathname`).
- `style-hover` / `style-focus` behavior from the originals is reproduced with
  utility classes in `globals.css`.
- The three brand images (`ias-logo-192`, `ias-logo-512`, `city-seal-192`) were
  imported from the design project. The small Republic of the Philippines footer
  seal (`ph-seal-160.png`) is rendered as a self-contained SVG substitute — drop
  the real PNG into `public/assets/ph-seal-160.png` and swap it into
  `components/Footer.tsx` if you prefer the original artwork.
- Photo areas use `ImageSlot` placeholders (no real photography was in the design).
- Form submission, file upload, and "Download" links are front-end only, as in the
  source design — wire them to real endpoints when available.
```
