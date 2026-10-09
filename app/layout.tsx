import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import PrototypeBanner from "@/components/PrototypeBanner";
import { PROTOTYPE_MODE, SITE_URL, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} | ${siteConfig.parentOrganization.name}`,
    template: `%s | ${siteConfig.titleSuffix}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.parentOrganization.name,
  category: "government",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.parentOrganization.name}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.parentOrganization.name}`,
    description: siteConfig.description,
  },
  // Prototype mode keeps the whole site out of search indexes.
  robots: PROTOTYPE_MODE
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
  icons: {
    icon: [
      { url: "/assets/ias-logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/ias-logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/assets/ias-logo-192.png", sizes: "192x192" }],
    shortcut: ["/assets/ias-logo-192.png"],
  },
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0B4A7D",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400&family=Public+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PrototypeBanner />
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
