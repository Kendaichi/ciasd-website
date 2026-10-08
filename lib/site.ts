/**
 * Single source of truth for site-wide SEO metadata.
 *
 * The canonical production URL is driven by the NEXT_PUBLIC_SITE_URL environment
 * variable so it can be changed in the Vercel dashboard (or .env) without code
 * changes. It falls back to the City Government subdomain placeholder.
 *
 * Set NEXT_PUBLIC_SITE_URL to the final domain, with no trailing slash, e.g.
 *   NEXT_PUBLIC_SITE_URL=https://ciasd.butuan.gov.ph
 */

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ciasd.butuan.gov.ph";

/** Absolute site origin, normalised with no trailing slash. */
export const SITE_URL = rawUrl.replace(/\/+$/, "");

export const siteConfig = {
  url: SITE_URL,
  name: "City Internal Audit Services Department",
  shortName: "CIASD Butuan",
  /** Appears after the page title in the browser tab / search result. */
  titleSuffix: "City Internal Audit Services Department, Butuan City",
  description:
    "The City Internal Audit Services Department is the City Mayor's independent assurance arm, providing objective audit, review, advisory, and training services to the offices of the City Government of Butuan.",
  tagline: "Your Enabling Partner Towards a City Ascending",
  locale: "en_PH",
  parentOrganization: {
    name: "City Government of Butuan",
    url: "https://butuan.gov.ph",
  },
  logo: "/assets/ias-logo-512.png",
  contact: {
    email: "ciasd@butuan.gov.ph",
    telephone: "+63858172345",
    address: {
      street: "3rd Floor, Butuan City Hall, J.P. Rosales Avenue, Doongan",
      locality: "Butuan City",
      region: "Agusan del Norte",
      postalCode: "8600",
      country: "PH",
    },
    hours: "Mo-Fr 08:00-17:00",
  },
  keywords: [
    "City Internal Audit Services Department",
    "CIASD",
    "CIASD Butuan",
    "internal audit Butuan",
    "Butuan City government audit",
    "City Government of Butuan",
    "internal control",
    "Citizen's Charter Butuan",
    "government audit Philippines",
  ],
} as const;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
