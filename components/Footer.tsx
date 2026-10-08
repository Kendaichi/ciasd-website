import Link from "next/link";
import { css } from "@/lib/css";

const THIS_SITE: ReadonlyArray<readonly [string, string]> = [
  ["About Us", "/about"],
  ["Services", "/services"],
  ["For City Offices", "/city-offices"],
  ["Careers", "/careers"],
  ["Report a Concern", "/contact#report"],
];

const GOV_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["City Government of Butuan", "https://butuan.gov.ph"],
  ["Department of Budget and Management", "https://www.dbm.gov.ph"],
  ["Commission on Audit", "https://www.coa.gov.ph"],
  ["Office of the Ombudsman", "https://www.ombudsman.gov.ph"],
];

/** Compact stand-in for the Republic of the Philippines seal (assets/ph-seal-160.png). */
function PhilippineSeal() {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  const stars: ReadonlyArray<readonly [number, number]> = [
    [28, 7.5],
    [11.5, 36],
    [44.5, 36],
  ];
  const starPath =
    "M0,-3.2 L0.95,-0.95 L3.2,0 L0.95,0.95 L0,3.2 L-0.95,0.95 L-3.2,0 L-0.95,-0.95 Z";
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      role="img"
      aria-label="Seal of the Republic of the Philippines"
      style={{ display: "block", background: "#fff", borderRadius: "50%", flexShrink: 0 }}
    >
      <circle cx="28" cy="28" r="27" fill="#0B4A7D" />
      <circle cx="28" cy="28" r="23.5" fill="none" stroke="#FFDD00" strokeWidth="1.3" />
      <g fill="#FFDD00">
        {rays.map((a) => (
          <polygon key={a} points="28,14 26,28 30,28" transform={`rotate(${a} 28 28)`} />
        ))}
        <circle cx="28" cy="28" r="4.6" />
        {stars.map(([x, y]) => (
          <path key={`${x}-${y}`} d={starPath} transform={`translate(${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={css(
        "font-family:'Public Sans',system-ui,sans-serif;color:#fff;font-size:15px;line-height:1.6;",
      )}
    >
      <div style={css("background:#0B4A7D;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:56px clamp(16px,4vw,32px) 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px 32px;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:12px;")}>
            <span
              style={css(
                "font-family:Merriweather,Georgia,serif;font-weight:700;font-size:19px;line-height:1.3;",
              )}
            >
              City Internal Audit Services Department
            </span>
            <span style={css("color:#D6E6F4;")}>
              2nd Floor, Butuan City Hall, J.P. Rosales Avenue, Doongan, Butuan
              City 8600, Agusan del Norte
            </span>
            <span style={css("color:#D6E6F4;")}>
              (085) 817-2345 · ciasd@butuan.gov.ph
            </span>
            <span style={css("color:#D6E6F4;")}>
              Monday to Friday, 8:00 AM – 5:00 PM
            </span>
          </div>

          <div style={css("display:flex;flex-direction:column;gap:12px;")}>
            <h2
              style={css(
                "font-family:'Public Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;margin:0;display:flex;align-items:center;gap:8px;",
              )}
            >
              <span style={css("width:16px;height:3px;background:#7DC12B;")} />
              This website
            </h2>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;",
              )}
            >
              {THIS_SITE.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hvr-footlink" style={css("color:#fff;")}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={css("display:flex;flex-direction:column;gap:12px;")}>
            <h2
              style={css(
                "font-family:'Public Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;margin:0;display:flex;align-items:center;gap:8px;",
              )}
            >
              <span style={css("width:16px;height:3px;background:#7DC12B;")} />
              Government links
            </h2>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;",
              )}
            >
              {GOV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hvr-footlink" style={css("color:#fff;")}>
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
            "max-width:1200px;margin:0 auto;padding:28px clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:20px 40px;align-items:flex-start;justify-content:space-between;",
          )}
        >
          <div style={css("display:flex;gap:14px;align-items:center;max-width:520px;")}>
            <PhilippineSeal />
            <div style={css("display:flex;flex-direction:column;")}>
              <span
                style={css(
                  "font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:13px;",
                )}
              >
                Republic of the Philippines
              </span>
              <span style={css("color:#D6E6F4;font-size:14px;")}>
                All content is in the public domain unless otherwise stated.
              </span>
            </div>
          </div>
          <div
            style={css(
              "display:flex;flex-direction:column;gap:8px;align-items:flex-start;",
            )}
          >
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:6px 20px;font-size:14px;",
              )}
            >
              <li>
                <a href="#privacy" style={css("color:#fff;")}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#accessibility" style={css("color:#fff;")}>
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#sitemap" style={css("color:#fff;")}>
                  Sitemap
                </a>
              </li>
            </ul>
            <span style={css("color:#D6E6F4;font-size:14px;")}>
              © 2026 City Government of Butuan – City Internal Audit Services
              Department
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
