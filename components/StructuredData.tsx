import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Site-wide JSON-LD structured data (Schema.org). Rendered once in the root
 * layout so it appears on every page. Describes the department as a
 * GovernmentOrganization and declares the WebSite entity for search engines.
 */
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logo),
        image: absoluteUrl(siteConfig.logo),
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.telephone,
        parentOrganization: {
          "@type": "GovernmentOrganization",
          name: siteConfig.parentOrganization.name,
          url: siteConfig.parentOrganization.url,
        },
        areaServed: {
          "@type": "City",
          name: "Butuan City",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.locality,
          addressRegion: siteConfig.contact.address.region,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: siteConfig.contact.address.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: siteConfig.contact.email,
          telephone: siteConfig.contact.telephone,
          areaServed: "PH",
          availableLanguage: ["en", "fil"],
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-PH",
        publisher: { "@id": absoluteUrl("/#organization") },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is included.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
