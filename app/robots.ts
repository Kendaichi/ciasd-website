import type { MetadataRoute } from "next";
import { absoluteUrl, PROTOTYPE_MODE, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Prototype: disallow every crawler and do not advertise the sitemap.
  if (PROTOTYPE_MODE) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  // Live: allow crawling and point crawlers at the sitemap.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
