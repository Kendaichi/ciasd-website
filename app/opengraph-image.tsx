import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.parentOrganization.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded social-share card used for Open Graph and Twitter previews across the
 * whole site. Generated with next/og — no static image asset to maintain.
 */
export default function OpengraphImage() {
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
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#9EC7EA",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.parentOrganization.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 10,
              backgroundColor: "#7DC12B",
              borderRadius: 5,
              marginBottom: 32,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 76,
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
            fontSize: 34,
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
