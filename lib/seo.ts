import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageSeoInput = {
  /** Page title WITHOUT the site-name suffix (the layout template adds it). */
  title?: string;
  description: string;
  /** Site-relative path, e.g. "/about". Used for the canonical URL. */
  path: string;
};

/**
 * Build per-page Metadata with a canonical URL and page-specific Open Graph /
 * Twitter cards. Title is passed through the root layout's title template, so
 * pass the bare page name (e.g. "About Us"); omit it only for the home page.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageSeoInput): Metadata {
  const canonical = path;
  const absoluteTitle = title
    ? `${title} | ${siteConfig.titleSuffix}`
    : siteConfig.name;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      title: absoluteTitle,
      description,
      locale: siteConfig.locale,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
