import Link from "next/link";
import { css } from "@/lib/css";
import { features, siteConfig } from "@/lib/site";

const THIS_SITE: ReadonlyArray<readonly [string, string]> = [
  ["About Us", "/about"],
  ["Services", "/services"],
  ["For City Offices", "/city-offices"],
  ["Careers", "/careers"],
  ["Downloads", "/downloads"],
  ["Contact Us", "/contact"],
  ["Client Satisfaction Survey", "/feedback"],
];

const GOV_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["City Government of Butuan", "https://butuan.gov.ph"],
  ["Department of Budget and Management", "https://www.dbm.gov.ph"],
  ["Commission on Audit", "https://www.coa.gov.ph"],
  ["Office of the Ombudsman", "https://www.ombudsman.gov.ph"],
];

const LEGAL_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Privacy Policy", "/privacy"],
  ["Accessibility Statement", "/accessibility"],
  ["Sitemap", "/sitemap"],
];

// Footer logo row. The Bagong Pilipinas logo is optional and sits at the far
// right, controlled by features.showBagongPilipinasLogo (default off).
const FOOTER_LOGOS: ReadonlyArray<{ src: string; alt: string }> = [
  {
    src: "/assets/city-seal-192.webp",
    alt: "Official Seal of the City of Butuan",
  },
  {
    src: "/assets/ias-logo-192.webp",
    alt: "City Internal Audit Services Department logo",
  },
  // Optional Bagong Pilipinas logo at the far right, off by default.
  ...(features.showBagongPilipinasLogo
    ? [
        {
          src: "/assets/bagong-pilipinas-placeholder.svg",
          alt: "Bagong Pilipinas logo (placeholder)",
        },
      ]
    : []),
];

export default function Footer() {
  return (
    <footer
      style={css(
        "font-family:'Public Sans',system-ui,sans-serif;color:#fff;font-size:15px;line-height:1.6;"
      )}
    >
      {/* Logo row: City of Butuan seal, IAS logo, optional Bagong Pilipinas */}
      {/* <div
        style={css(
          "background:#0B4A7D;border-bottom:1px solid rgba(255,255,255,.14);"
        )}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:28px clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:clamp(16px,4vw,36px);"
          )}
        >
          {FOOTER_LOGOS.map((logo) => (
            <span
              key={logo.src}
              style={css(
                "display:flex;align-items:center;justify-content:center;height:64px;padding:8px 16px;background:#fff;border-radius:8px;"
              )}
            >
              
              <img
                src={logo.src}
                alt={logo.alt}
                style={css("height:48px;width:auto;display:block;")}
              />
            </span>
          ))}
        </div>
      </div> */}

      <div style={css("background:#0B4A7D;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:56px clamp(16px,4vw,32px) 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px 32px;"
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:12px;")}>
            <span
              style={css(
                "font-family:Merriweather,Georgia,serif;font-weight:700;font-size:19px;line-height:1.3;"
              )}
            >
              {siteConfig.name}
            </span>
            <span style={css("color:#D6E6F4;")}>
              {siteConfig.contact.addressOneLine}
            </span>
            <span style={css("color:#D6E6F4;")}>
              {siteConfig.contact.phoneLandline} · {siteConfig.contact.email}
            </span>
            <span style={css("color:#D6E6F4;")}>
              {siteConfig.contact.hours}
            </span>
          </div>

          <div style={css("display:flex;flex-direction:column;gap:12px;")}>
            <h2
              style={css(
                "font-family:'Public Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;margin:0;display:flex;align-items:center;gap:8px;"
              )}
            >
              <span style={css("width:16px;height:3px;background:#7DC12B;")} />
              This website
            </h2>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;"
              )}
            >
              {THIS_SITE.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hvr-footlink"
                    style={css("color:#fff;")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={css("display:flex;flex-direction:column;gap:12px;")}>
            <h2
              style={css(
                "font-family:'Public Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;margin:0;display:flex;align-items:center;gap:8px;"
              )}
            >
              <span style={css("width:16px;height:3px;background:#7DC12B;")} />
              Government links
            </h2>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;"
              )}
            >
              {GOV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hvr-footlink"
                    style={css("color:#fff;")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={css("background:#072F50;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:28px clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:20px 40px;align-items:flex-start;justify-content:space-between;"
          )}
        >
          <div
            style={css("display:flex;flex-direction:column;max-width:520px;")}
          >
            <span
              style={css(
                "font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:13px;"
              )}
            >
              Republic of the Philippines
            </span>
            <span style={css("color:#D6E6F4;font-size:14px;")}>
              All content is in the public domain unless otherwise stated.
            </span>
          </div>
          <div
            style={css(
              "display:flex;flex-direction:column;gap:8px;align-items:flex-start;"
            )}
          >
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:6px 20px;font-size:14px;"
              )}
            >
              {LEGAL_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} style={css("color:#fff;")}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <span style={css("color:#D6E6F4;font-size:14px;")}>
              © 2026 City Government of Butuan, City Internal Audit Services
              Department
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
