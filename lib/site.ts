/**
 * Single source of truth for site-wide configuration: SEO metadata, office and
 * contact details, social links, agency hotlines, and feature flags.
 *
 * Office/contact values are sample content for the prototype. Each one is marked
 * "TODO: verify before launch" so it can be confirmed against official records
 * before the site goes public.
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

/**
 * Prototype mode. Defaults to true (on) so the site stays review-only until it
 * is explicitly cleared for launch. Set NEXT_PUBLIC_PROTOTYPE_MODE=false (in the
 * Vercel dashboard or .env) to switch the site into live mode.
 */
export const PROTOTYPE_MODE =
  process.env.NEXT_PUBLIC_PROTOTYPE_MODE !== "false";

/** Optional, non-prototype feature switches (change in code, then redeploy). */
export const features = {
  /** Show the Bagong Pilipinas logo at the far right of the footer logo row. */
  showBagongPilipinasLogo: false,
};

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

  /** Head of the department, by name and title. */
  departmentHead: {
    name: "March Belle F. Lor, CPA", // TODO: verify before launch
    title: "City Government Department Head II, City Internal Audit Services Officer", // TODO: verify before launch
  },

  contact: {
    email: "ciasd@butuan.gov.ph", // TODO: verify before launch
    /** Data Protection Officer, for Data Privacy Act requests. */
    dpoEmail: "dpo@butuan.gov.ph", // TODO: verify before launch
    /** Machine-readable primary phone (E.164) for structured data. */
    telephone: "+63858172345", // TODO: verify before launch
    /** Human-readable phone numbers. */
    phoneLandline: "(085) 817-2345 local 214", // TODO: verify before launch
    phoneMobile: "0917 123 4567 (Globe)", // TODO: verify before launch
    /** Address as separate lines, for stacked display. */
    addressLines: [
      "3rd Floor, Butuan City Hall", // TODO: verify before launch
      "J.P. Rosales Avenue, Doongan",
      "Butuan City 8600, Agusan del Norte",
    ],
    /** Address on a single line, for inline display. */
    addressOneLine:
      "3rd Floor, Butuan City Hall, J.P. Rosales Avenue, Doongan, Butuan City 8600, Agusan del Norte", // TODO: verify before launch
    /** Structured address for Schema.org / JSON-LD. */
    address: {
      street: "3rd Floor, Butuan City Hall, J.P. Rosales Avenue, Doongan",
      locality: "Butuan City",
      region: "Agusan del Norte",
      postalCode: "8600",
      country: "PH",
    },
    /** Office hours. */
    hours: "Monday to Friday, 8:00 AM to 5:00 PM", // TODO: verify before launch
    hoursNote: "No noon break. Closed on holidays.",
  },

  social: {
    /** Official Facebook page. Placeholder until the real URL is confirmed. */
    facebookUrl: "https://www.facebook.com/CIASDButuan", // TODO: verify before launch
    facebookLabel: "Butuan City IAS on Facebook",
  },

  /** External government bodies for escalating concerns. */
  agencies: [
    {
      name: "Office of the Ombudsman",
      description:
        "For complaints of graft, corruption, or misconduct by public officials and employees.",
      contact: "Hotline: (02) 8926-2662", // TODO: verify before launch
      href: "https://www.ombudsman.gov.ph",
      linkLabel: "Visit ombudsman.gov.ph",
    },
    {
      name: "Commission on Audit",
      description:
        "For concerns about the use of public funds and property that need an external audit.",
      contact: "Citizen Desk: citizendesk@coa.gov.ph", // TODO: verify before launch
      href: "https://www.coa.gov.ph",
      linkLabel: "Visit coa.gov.ph",
    },
    {
      name: "8888 Citizens' Complaint Hotline",
      description:
        "For complaints about red tape, delays, or poor service in any government agency.",
      contact: "Call or text 8888", // TODO: verify before launch
      href: "https://8888.gov.ph",
      linkLabel: "Visit 8888.gov.ph",
    },
  ],

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
