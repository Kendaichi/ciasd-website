import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.parentOrganization.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded social-share card used for Open Graph and Twitter previews across the
 * whole site. Generated with next/og — no static image asset to maintain. The
 * CIASD seal is read from public/ at build time and inlined as a data URI (on a
 * white chip for contrast against the dark-blue background).
 */
export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/assets/ias-logo-192.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B4A7D",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.22)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={98} height={98} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#9EC7EA",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.parentOrganization.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 10,
              backgroundColor: "#7DC12B",
              borderRadius: 5,
              marginBottom: 28,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#ffffff",
              maxWidth: 940,
            }}
          >
            City Internal Audit Services Department
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontStyle: "italic",
            color: "#D6E6F4",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
