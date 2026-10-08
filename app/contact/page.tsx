import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import ReportForm from "@/components/ReportForm";
import { css } from "@/lib/css";

export const metadata: Metadata = { title: "Contact Us" };

const details = [
  {
    k: "Address",
    v: "2nd Floor, Butuan City Hall\nJ.P. Rosales Avenue, Doongan\nButuan City 8600, Agusan del Norte",
    icon: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  },
  {
    k: "Phone",
    v: "(085) 817-2345 local 214\n0917 123 4567 (Globe)",
    icon: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  },
  { k: "Email", v: "ciasd@butuan.gov.ph", icon: "M3 6h18v12H3zM3 7l9 6 9-6" },
  {
    k: "Office hours",
    v: "Monday to Friday, 8:00 AM – 5:00 PM\nNo noon break. Closed on holidays.",
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  },
];

const agencies = [
  {
    name: "Office of the Ombudsman",
    text: "For complaints of graft, corruption, or misconduct by public officials and employees.",
    contact: "Hotline: (02) 8926-2662",
    href: "https://www.ombudsman.gov.ph",
    link: "Visit ombudsman.gov.ph",
  },
  {
    name: "Commission on Audit",
    text: "For concerns about the use of public funds and property that need an external audit.",
    contact: "Citizen Desk: citizendesk@coa.gov.ph",
    href: "https://www.coa.gov.ph",
    link: "Visit coa.gov.ph",
  },
  {
    name: "8888 Citizens' Complaint Hotline",
    text: "For complaints about red tape, delays, or poor service in any government agency.",
    contact: "Call or text 8888",
    href: "https://8888.gov.ph",
    link: "Visit 8888.gov.ph",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <section style={css("background:#E3F0FB;border-bottom:1px solid #CFE0F0;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(28px,5vw,44px) clamp(16px,4vw,32px) clamp(36px,5vw,56px);display:flex;flex-direction:column;gap:14px;",
          )}
        >
          <nav aria-label="Breadcrumb">
            <ol
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px;font-size:14px;",
              )}
            >
              <li>
                <Link href="/" style={css("color:#0B4A7D;")}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true" style={css("color:#4A5D70;")}>
                ›
              </li>
              <li aria-current="page" style={css("color:#3D5166;")}>
                Contact Us
              </li>
            </ol>
          </nav>
          <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
            Contact Us
          </h1>
          <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:740px;")}>
            Visit, call, or write to us. To report a possible irregularity or
            control weakness in a city office, use the Report a Concern form
            below.
          </p>
        </div>
      </section>

      {/* Our office */}
      <section aria-labelledby="office-title">
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:32px 48px;",
          )}
        >
          <div style={css("flex:1 1 340px;display:flex;flex-direction:column;gap:22px;")}>
            <h2 id="office-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Our office
            </h2>
            <dl style={css("margin:0;display:flex;flex-direction:column;gap:18px;")}>
              {details.map((d) => (
                <div key={d.k} style={css("display:flex;gap:16px;")}>
                  <span
                    style={css(
                      "flex-shrink:0;width:44px;height:44px;border-radius:50%;background:#0B4A7D;display:flex;align-items:center;justify-content:center;",
                    )}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#7DC12B"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={d.icon} />
                    </svg>
                  </span>
                  <div>
                    <dt
                      style={css(
                        "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#4A5D70;",
                      )}
                    >
                      {d.k}
                    </dt>
                    <dd style={css("margin:2px 0 0;white-space:pre-line;")}>{d.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <a
              href="https://www.facebook.com/"
              className="hvr-invert"
              style={css(
                "align-self:flex-start;display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 20px;border:2px solid #0B4A7D;border-radius:4px;color:#0B4A7D;font-weight:700;text-decoration:none;",
              )}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v8h4v-8h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z" />
              </svg>
              Follow Butuan City IAS on Facebook
            </a>
          </div>
          <div style={css("flex:1.3 1 420px;min-height:360px;position:relative;")}>
            <ImageSlot
              shape="rounded"
              radius={8}
              placeholder="Embedded map: Butuan City Hall, J.P. Rosales Avenue"
              style={css("position:absolute;inset:0;width:100%;height:100%;")}
            />
          </div>
        </div>
      </section>

      {/* Report a Concern */}
      <section
        id="report"
        aria-labelledby="report-title"
        style={css("background:#E3F0FB;scroll-margin-top:20px;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:32px 56px;align-items:flex-start;",
          )}
        >
          <div style={css("flex:1 1 300px;max-width:400px;display:flex;flex-direction:column;gap:18px;")}>
            <h2 id="report-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Report a Concern
            </h2>
            <p>
              Use this form to tell us about a possible weakness in controls,
              inefficiency, or irregularity in a City Government office or process.
            </p>
            <div style={css("display:flex;flex-direction:column;gap:10px;")}>
              <h3 style={css("font-size:17px;")}>What happens next</h3>
              <ol
                style={css(
                  "margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:16px;",
                )}
              >
                <li>You receive a reference number right away.</li>
                <li>We assess your concern within 7 working days.</li>
                <li>If you gave contact details, we tell you whether it will be reviewed.</li>
              </ol>
            </div>
            <div
              style={css(
                "background:#fff;border-radius:8px;padding:18px 20px;display:flex;flex-direction:column;gap:6px;font-size:15.5px;",
              )}
            >
              <strong style={css("color:#0B4A7D;")}>This form is not for:</strong>
              <span>
                Requests for copies of audit reports, which are confidential;
                complaints against private persons; or matters already filed with
                the Ombudsman, COA, or the courts.
              </span>
            </div>
          </div>

          <ReportForm />
        </div>
      </section>

      {/* Other agencies */}
      <section aria-labelledby="agencies-title">
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:24px;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:10px;max-width:720px;")}>
            <h2 id="agencies-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Other agencies you can contact
            </h2>
            <p>Some concerns are better handled by other government bodies.</p>
          </div>
          <div
            style={css(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px;",
            )}
          >
            {agencies.map((a) => (
              <div
                key={a.name}
                style={css(
                  "border:1px solid #CFDDEA;border-radius:8px;padding:24px;display:flex;flex-direction:column;gap:10px;border-top:4px solid #0B4A7D;",
                )}
              >
                <h3 style={css("font-size:19px;")}>{a.name}</h3>
                <p style={css("font-size:16px;color:#2C3E52;")}>{a.text}</p>
                <span style={css("font-weight:700;color:#0B4A7D;")}>{a.contact}</span>
                <a href={a.href} style={css("margin-top:auto;font-weight:700;")}>
                  {a.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section aria-labelledby="fb-title" style={css("background:#0B4A7D;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(36px,5vw,56px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:20px 40px;align-items:center;justify-content:space-between;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:6px;max-width:680px;")}>
            <h2 id="fb-title" style={css("font-size:clamp(22px,2.6vw,26px);color:#fff;")}>
              How did we do?
            </h2>
            <p style={css("color:#E3F0FB;")}>
              If you recently availed of an IAS service, please answer our Client
              Satisfaction Measurement survey. It takes about three minutes.
            </p>
          </div>
          <a
            href="#"
            className="hvr-btn-light"
            style={css(
              "display:inline-flex;align-items:center;min-height:48px;padding:0 22px;background:#fff;color:#0B4A7D;font-weight:700;text-decoration:none;border-radius:4px;border-bottom:4px solid #7DC12B;",
            )}
          >
            Give feedback
          </a>
        </div>
      </section>
    </main>
  );
}
