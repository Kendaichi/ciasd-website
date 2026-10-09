# CIASD Website — Prototype Hardening Handoff

Working notes for continuing the multi-part task (Parts 1 to 5). Read this top to
bottom, then resume at "What remains".

## Project context

- Next.js 15 (App Router) + React 19 + TypeScript (strict). Plain CSS
  (`app/globals.css`) + inline styles via the `css()` helper in `lib/css.ts`
  (parses `"prop:value;..."` strings into React style objects).
- Deployed on Vercel at `ciasd.daggerbuilds.com`. Production domain is set via
  `NEXT_PUBLIC_SITE_URL` env var (default fallback is `ciasd.butuan.gov.ph` in
  `lib/site.ts`).
- This is a PROTOTYPE with sample content, NOT yet approved by the City
  Government. Everything prototype-related is gated by `PROTOTYPE_MODE`.
- Pages: `/` (home), `/about`, `/services`, `/city-offices`, `/news`,
  `/careers`, `/contact`, plus new: `/privacy`, `/accessibility`, `/sitemap`,
  `/downloads`, `/feedback`.

## House rules for this task

- NO em dashes anywhere in NEW copy (use "to", commas, parentheses, or colons).
  Existing copy on the About page still has em dashes; those are pre-existing.
- Keep the existing design system (colors `#0B4A7D` navy, `#7DC12B` green,
  `#072F50` dark navy, `#E3F0FB`/`#F6FAFE` light; Merriweather + Public Sans).
- The user is editing files in the IDE at the same time; files may be reformatted
  by Prettier or changed under you. Re-read before editing if a match fails.
- `<img>` tags need `{/* eslint-disable-next-line @next/next/no-img-element */}`.
- A production build has NOT been run yet for these changes. Run it in Part 5.

## Central config: `lib/site.ts` (single source of truth)

Already expanded. Exports:
- `PROTOTYPE_MODE` = `process.env.NEXT_PUBLIC_PROTOTYPE_MODE !== "false"` (default true).
- `features` = `{ showBagongPilipinasLogo: false }`.
- `siteConfig` with: `name`, `shortName`, `description`, `tagline`,
  `parentOrganization`, `departmentHead {name,title}`, `contact {email, dpoEmail,
  telephone, phoneLandline, phoneMobile, addressLines[], addressOneLine, address{},
  hours, hoursNote}`, `social {facebookUrl, facebookLabel}`, `agencies[]`
  (Ombudsman, COA, 8888 — each `{name, description, contact, href, linkLabel}`),
  `keywords`. Every factual value has a `// TODO: verify before launch` comment.
- `SITE_URL`, `absoluteUrl()`.

## Task list / status

1. DONE — Central config (contact, social, agencies, flags) in `lib/site.ts`.
2. DONE — `PROTOTYPE_MODE` flag.
3. DONE — Prototype banner: `components/PrototypeBanner.tsx`, rendered first in
   `app/layout.tsx` body (above Header/GOVPH bar). Amber `#FBBF24` + near-black
   text, non-dismissible, `role="note"`. Renders null when prototype off.
4. DONE — SEO blocking: `app/layout.tsx` robots meta is conditional (noindex when
   prototype). `app/robots.ts` disallows all + omits sitemap when prototype.
   `next.config.mjs` adds `X-Robots-Tag: noindex, nofollow` when prototype.
   `app/sitemap.ts` now lists all routes (incl. new pages).
5. DONE — Header (`components/Header.tsx`): removed "Contact Us" from the `NAV`
   array (served by the header button on desktop + mobile menu CTA, so no
   duplicate). PST clock fallback changed from a non-breaking space to
   "Loading..." (Asia/Manila, 1s updates, `suppressHydrationWarning` already on
   the `<time>`).
6. DONE — Footer (`components/Footer.tsx`): removed the Republic of the
   Philippines seal and deleted `public/assets/ph-seal.webp`. Logo row now uses
   the REAL `city-seal-192.webp` + `ias-logo-192.webp`, plus an OPTIONAL Bagong
   Pilipinas entry behind `features.showBagongPilipinasLogo` (default off) using
   `/assets/bagong-pilipinas-placeholder.svg`. Footer contact details now come
   from `siteConfig`. "This website" list adds Downloads + Client Satisfaction
   Survey. Bottom legal links (Privacy/Accessibility/Sitemap) now point to real
   routes via `<Link>` (no more `#`).
   NOTE: the user deleted my placeholder and briefly added a real
   `Bagong_Pilipinas_Logo.svg`, which then disappeared (file flux). Currently the
   footer references the placeholder SVG. If a real Bagong Pilipinas logo is
   added, point the footer entry at it and flip the flag.
7. DONE — ReportForm (`components/ReportForm.tsx`): prototype notice above form +
   submit disabled in prototype + `onSubmit` returns early (never transmits).
   Anonymous checked => name/email/mobile are not rendered (hidden, not required,
   not submitted); unchecked => Full name + Email are `required`, Mobile optional.
   Required-note text is state-aware. Added a honeypot field (`company`, off-screen)
   and a commented CAPTCHA/Turnstile placeholder before the submit button. DPO
   email now from `siteConfig`.
8. DONE — Applied config across site: contact page (details, agencies, Facebook
   link), footer, services FAQ emails, city-offices phone/email. Careers uses the
   separate HRMO office (left as-is). Facebook generic link replaced with
   `siteConfig.social.facebookUrl` (placeholder).
9. DONE — New pages. Shared helpers: `lib/pages.ts` (`PAGE_UPDATED` map +
   `formatUpdated()`), `components/LastUpdated.tsx`, `components/PageHeader.tsx`.
   - `/privacy` (`app/privacy/page.tsx`): full RA 10173 policy, sample content
     pending DPO review.
   - `/accessibility` (`app/accessibility/page.tsx`): WCAG 2.1 AA statement,
     features, known limitations, how to report issues (email/phone/address).
   - `/sitemap` (`app/sitemap/page.tsx`): human-readable grouped list of every
     page as linked cards (Main / Services & resources / Get in touch /
     Policies). Coexists with the machine `/sitemap.xml` from `app/sitemap.ts`.
   - `/downloads` (`app/downloads/page.tsx`): grouped placeholder docs as rows
     with type/size/updated and a non-interactive "Not yet available" badge (no
     `#` links). Amber note points to email/phone to request a form.
   - `/feedback` (`app/feedback/page.tsx` + `components/FeedbackForm.tsx`): CSM
     survey. Client form mirrors ReportForm (prototype notice, submit disabled
     in prototype, onSubmit early-returns, honeypot, consent gate). 5-point
     agreement scale across 7 service-quality dimensions; all fields optional.
10. DONE — "Last updated" line added before `</main>` on all 7 existing content
    pages (`/`, `/about`, `/services`, `/city-offices`, `/news`, `/careers`,
    `/contact`), plus the 5 new pages. Dates come from `PAGE_UPDATED` in
    `lib/pages.ts`.
11. DONE — Training Calendar section on `/city-offices` (`#training`, 4 sample
    trainings: date badge, title, time, venue, audience, slots) added after the
    Forms section with a matching nav pill. News search: `components/NewsFeed.tsx`
    now has a client-side title search that combines with the category filter
    (filter by `cat` AND title substring), a live count, and an empty state with
    a "clear" button.
12. DONE — Final checks. `npx tsc --noEmit` clean; `npm run build` succeeds (20
    routes prerendered; lint ran in-build with no errors). `next lint` as a
    standalone is NOT set up (no eslint dep/config) and would prompt to install,
    so it was skipped in favour of the in-build check. All `href="#"` resolved:
    NewsFeed post titles are now plain text and the dead pagination was removed;
    the city-offices Forms buttons are "Not yet available" badges. Remaining `#`
    links are legitimate in-page anchors only (`#main`, `#apply`, `#forms`,
    `#process`, `#prepare`, `#rights`, `#faqs`, `#training`) and every target id
    exists. No em dashes in any NEW copy (pre-existing em dashes remain on the
    About and Services pages and in `opengraph-image.tsx`). Titles and
    descriptions are unique per page.

ALL PARTS COMPLETE. Nothing is committed yet — the build has been run and passes.

## What remains (detailed)

### New pages still to create (Task 9)
Follow the `/privacy` page as the template: `pageMetadata({title, description,
path})`, `<PageHeader title intro />`, content `<section>` with
`max-width:860px` wrapper (wider for sitemap/downloads), end with
`<LastUpdated path="/<route>" />`. No em dashes.

- `/accessibility` (`app/accessibility/page.tsx`): Accessibility Statement
  committing to WCAG 2.1 AA; list features (skip link, keyboard navigation, alt
  text, color contrast, responsive/zoom, visible focus); known limitations
  (sample content, some placeholder images/maps, PDFs pending); how to report
  issues (email `siteConfig.contact.email`, phone, and the DPO/office address).
- `/sitemap` (`app/sitemap/page.tsx`): human-readable list of EVERY page grouped
  (Main pages; Services & resources: Services, For City Offices, Downloads,
  Careers; Get in touch: Contact, Client Satisfaction Survey; Policies: Privacy,
  Accessibility, Sitemap). Use `<Link>`. (The machine `sitemap.xml` already
  exists via `app/sitemap.ts` and is only advertised in robots.txt when
  prototype is off.)
- `/downloads` (`app/downloads/page.tsx`): one place for Citizen's Charter, audit
  request form, client satisfaction survey form, internal control guides. Use
  PLACEHOLDER entries (no real files) each with file name, short description,
  file size, last-updated date. Render as rows, NOT links to `#`; show a "Not yet
  available" / disabled state (prototype). Consider a data array of
  `{title, description, size, updated}`.
- `/feedback` (`app/feedback/page.tsx`): placeholder Client Satisfaction
  Measurement (CSM) page/form. In prototype mode show a disabled state with the
  same style of notice as the concern form ("Online submissions are not yet
  available. Please visit or call the office directly."). The Contact page
  "Give feedback" button already links here (`/contact` uses `<Link href="/feedback">`).

### Known `#`-link cleanups for Task 12 (item 21)
- `components/NewsFeed.tsx`: post title links use `href="#"` and pagination uses
  `href="#"`. No real article pages exist. Decide: render titles as non-link
  text (or `/news`), and make pagination non-interactive for the prototype.
- `app/city-offices/page.tsx`: the "Downloadable forms" section has `href="#"`
  download buttons. Point them at `/downloads` or render as "Not yet available".
- Grep the whole app for `href="#"` and `href={"#"}` and resolve each (keep only
  real in-page anchors like `/contact#report`, which is valid).

### Switch OUT of prototype mode (for the final summary)
Set `NEXT_PUBLIC_PROTOTYPE_MODE=false` in Vercel (Project > Settings >
Environment Variables), then redeploy (NEXT_PUBLIC vars are build-time, so it
needs a new build). That single change: removes the banner, flips robots meta to
index/follow, makes robots.txt allow + advertise the sitemap, drops the
`X-Robots-Tag` header, and enables the Report a Concern + Feedback submit buttons.
Everything is driven off `PROTOTYPE_MODE` in `lib/site.ts`.

### "TODO: verify before launch" items (collect for final summary)
All are in `lib/site.ts` (department head name + title; contact email; DPO email;
telephone; landline; mobile; address lines + one-line; office hours; Facebook
URL — currently a placeholder; Ombudsman/COA/8888 contact details) and in
`lib/pages.ts` (every page's last-updated date). Also: the Bagong Pilipinas logo
is a placeholder; `/downloads` entries are placeholders; `/privacy` and the other
new pages are sample content pending review.

## Files created/modified so far

Created: `components/PrototypeBanner.tsx`, `components/LastUpdated.tsx`,
`components/PageHeader.tsx`, `components/FeedbackForm.tsx`, `lib/pages.ts`,
`app/privacy/page.tsx`, `app/accessibility/page.tsx`, `app/sitemap/page.tsx`,
`app/downloads/page.tsx`, `app/feedback/page.tsx`,
`public/assets/bagong-pilipinas-placeholder.svg`.
Modified: `lib/site.ts`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`,
`next.config.mjs`, `components/Header.tsx`, `components/Footer.tsx`,
`components/ReportForm.tsx`, `components/NewsFeed.tsx`, `app/page.tsx`,
`app/about/page.tsx`, `app/contact/page.tsx`, `app/services/page.tsx`,
`app/city-offices/page.tsx`, `app/news/page.tsx`, `app/careers/page.tsx`.
Deleted: `public/assets/ph-seal.webp`, `public/assets/city-seal-placeholder.svg`.

Nothing has been committed. The build has been run (`npm run build`) and passes.
