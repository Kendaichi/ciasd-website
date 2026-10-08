"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { css } from "@/lib/css";

const NAV: ReadonlyArray<readonly [string, string, string]> = [
  ["home", "Home", "/"],
  ["about", "About Us", "/about"],
  ["services", "Services", "/services"],
  ["offices", "For City Offices", "/city-offices"],
  ["news", "News & Updates", "/news"],
  ["careers", "Careers", "/careers"],
  ["contact", "Contact Us", "/contact"],
];

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/city-offices")) return "offices";
  if (pathname.startsWith("/news")) return "news";
  if (pathname.startsWith("/careers")) return "careers";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export default function Header() {
  const pathname = usePathname();
  const active = activeKey(pathname);

  const [now, setNow] = useState<Date | null>(null);
  const [narrow, setNarrow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    const onResize = () => setNarrow(window.innerWidth < 960);
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      clearInterval(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Collapse the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  let pst = " ";
  if (now) {
    try {
      pst = new Intl.DateTimeFormat("en-PH", {
        timeZone: "Asia/Manila",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
    } catch {
      pst = now.toString();
    }
  }

  const items = NAV.map(([k, label, href]) => ({
    k,
    label,
    href,
    isActive: k === active,
  }));

  return (
    <header style={{ fontFamily: "'Public Sans',system-ui,sans-serif" }}>
      <a
        href="#main"
        className="skip-link"
        style={css(
          "position:absolute;left:-9999px;top:8px;z-index:100;background:#FFDD00;color:#1A2B3C;padding:10px 16px;font-weight:700;text-decoration:none;",
        )}
      >
        Skip to main content
      </a>

      {/* GOVPH top bar */}
      <div style={css("background:#072F50;color:#fff;font-size:13px;line-height:1.4;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:7px clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:4px 20px;align-items:center;",
          )}
        >
          <a
            href="https://www.gov.ph"
            style={css("color:#fff;font-weight:800;letter-spacing:.06em;text-decoration:none;")}
          >
            GOVPH
          </a>
          <span style={css("opacity:.92;")}>
            Philippine Standard Time:{" "}
            <time style={css("font-variant-numeric:tabular-nums;")} suppressHydrationWarning>
              {pst}
            </time>
          </span>
        </div>
      </div>

      {/* Logo / department identity */}
      <div style={css("background:#fff;border-bottom:1px solid #D5E1EC;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:18px clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:16px 24px;align-items:center;justify-content:space-between;",
          )}
        >
          <Link
            href="/"
            style={css(
              "display:flex;align-items:center;gap:14px;text-decoration:none;color:inherit;min-width:0;",
            )}
          >
            <span style={css("display:flex;gap:8px;flex-shrink:0;")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/city-seal-192.png"
                alt="Official Seal of the City of Butuan"
                width={60}
                height={60}
                style={css("width:60px;height:60px;display:block;")}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/ias-logo-192.png"
                alt="City Internal Audit Services Department logo"
                width={60}
                height={60}
                style={css("width:60px;height:60px;display:block;")}
              />
            </span>
            <span style={css("display:flex;flex-direction:column;gap:2px;min-width:0;")}>
              <span
                style={css(
                  "font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#4A5D70;",
                )}
              >
                City Government of Butuan
              </span>
              <span
                style={css(
                  "font-family:Merriweather,Georgia,serif;font-weight:700;font-size:clamp(17px,2.4vw,22px);line-height:1.25;color:#0B4A7D;",
                )}
              >
                City Internal Audit Services Department
              </span>
              <span style={css("font-size:13px;color:#4A5D70;")}>
                Office of the City Mayor
              </span>
            </span>
          </Link>
          {!narrow ? (
            <Link
              href="/contact#report"
              className="hvr-report"
              style={css(
                "display:inline-flex;align-items:center;gap:8px;background:#3F7412;color:#fff;font-weight:700;font-size:15px;padding:11px 18px;border-radius:4px;text-decoration:none;min-height:44px;",
              )}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 22V4" />
                <path d="M4 4h12l-2 4 2 4H4" />
              </svg>
              Report a Concern
            </Link>
          ) : null}
        </div>
      </div>

      {/* Primary navigation */}
      <nav aria-label="Main" style={css("background:#0B4A7D;")}>
        <div style={css("max-width:1200px;margin:0 auto;padding:0 clamp(16px,4vw,32px);")}>
          {narrow ? (
            <>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                style={css(
                  "display:flex;align-items:center;gap:10px;width:100%;min-height:52px;background:transparent;border:0;color:#fff;font:600 16px 'Public Sans',sans-serif;cursor:pointer;padding:0;",
                )}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7DC12B"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                {open ? "Close menu" : "Menu"}
              </button>
              {open ? (
                <>
                  <ul
                    id="mobile-nav"
                    style={css(
                      "list-style:none;margin:0;padding:0 0 12px;display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.18);",
                    )}
                  >
                    {items.map((item) => (
                      <li
                        key={item.k}
                        style={css("border-bottom:1px solid rgba(255,255,255,.12);")}
                      >
                        <Link
                          href={item.href}
                          aria-current={item.isActive ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          style={css(
                            "display:flex;align-items:center;gap:10px;min-height:48px;color:#fff;text-decoration:none;font-weight:600;font-size:16px;",
                          )}
                        >
                          {item.isActive ? (
                            <span
                              style={css(
                                "width:4px;height:20px;background:#7DC12B;border-radius:2px;",
                              )}
                            />
                          ) : null}
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div style={css("padding:4px 0 16px;")}>
                    <Link
                      href="/contact#report"
                      onClick={() => setOpen(false)}
                      className="hvr-report"
                      style={css(
                        "display:flex;align-items:center;justify-content:center;gap:8px;width:100%;background:#3F7412;color:#fff;font-weight:700;font-size:16px;padding:0 18px;min-height:50px;border-radius:4px;text-decoration:none;",
                      )}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 22V4" />
                        <path d="M4 4h12l-2 4 2 4H4" />
                      </svg>
                      Report a Concern
                    </Link>
                  </div>
                </>
              ) : null}
            </>
          ) : (
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;",
              )}
            >
              {items.map((item) =>
                item.isActive ? (
                  <li key={item.k}>
                    <Link
                      href={item.href}
                      aria-current="page"
                      style={css(
                        "display:block;padding:15px 16px 11px;color:#fff;text-decoration:none;font-weight:700;font-size:15.5px;border-bottom:4px solid #7DC12B;background:#083A63;",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.k}>
                    <Link
                      href={item.href}
                      className="hvr-navlink"
                      style={css(
                        "display:block;padding:15px 16px 11px;color:#fff;text-decoration:none;font-weight:600;font-size:15.5px;border-bottom:4px solid transparent;",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
