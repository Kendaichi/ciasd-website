import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import LastUpdated from "@/components/LastUpdated";
import { css } from "@/lib/css";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "For City Offices",
  description:
    "What to expect during an internal audit: the step-by-step process, how to prepare, your rights as an auditee, and downloadable forms for City Government of Butuan offices.",
  path: "/city-offices",
});

const steps = (
  [
    [
      "Notice of Audit",
      "Day 1",
      "You receive a formal notice at least five working days ahead, stating the objectives, scope, period covered, and audit team.",
    ],
    [
      "Entrance Conference",
      "Day 6",
      "We meet with you and your key personnel to explain the plan, agree on schedules, and name contact persons.",
    ],
    [
      "Fieldwork",
      "Days 7–18",
      "The team reviews documents, interviews staff, observes processes, and tests samples of transactions.",
    ],
    [
      "Exit Conference",
      "Day 19",
      "We present draft observations and recommendations. You may give comments and supporting documents.",
    ],
    [
      "Final Report",
      "Day 24",
      "The confidential report goes to the City Mayor, with a copy to your office. Your comments are included.",
    ],
    [
      "Follow-up",
      "Within 30 days",
      "You submit an action plan. We monitor and validate its implementation until each item is resolved.",
    ],
  ] as [string, string, string][]
).map(([title, when, text], i, a) => ({
  n: i + 1,
  title,
  when,
  text,
  line: i < a.length - 1,
}));

const prep = [
  "Name a liaison officer who will coordinate with the audit team.",
  "Gather the documents listed in the Notice of Audit for the period covered.",
  "Update your office procedures, flowcharts, and organizational chart.",
  "Reconcile records such as cash books, inventories, and registries.",
  "Set aside a workspace for the team during fieldwork.",
  "Brief your personnel on the audit schedule and who will be interviewed.",
];

const rights = [
  "To receive advance notice of the audit, its scope, and the team assigned.",
  "To be heard and to give comments on all findings before the report is final.",
  "To have your comments reflected in the final report.",
  "To confidentiality of information shared during the audit.",
  "To courteous, professional, and impartial treatment.",
];

const duties = [
  "Give the audit team timely access to records, property, and personnel.",
  "Provide complete and accurate information.",
  "Attend the entrance and exit conferences.",
  "Prepare and carry out an action plan for agreed recommendations.",
  "Report the status of corrective actions when requested.",
];

const faqs = [
  {
    q: "Why was my office selected for an audit?",
    a: "Offices are selected through the annual risk-based audit plan approved by the City Mayor. Selection considers the size of budgets, the nature of transactions, past findings, and requests from management. Being selected does not mean wrongdoing is suspected.",
  },
  {
    q: "Is the IAS the same as the COA?",
    a: "No. The IAS is part of the City Government and reports to the City Mayor. The Commission on Audit is an independent constitutional body and the external auditor of all government agencies. Our work helps offices prepare for, but does not replace, COA audits.",
  },
  {
    q: "Can we request an audit of our own office?",
    a: "Yes. Department heads may request any of our services in writing. See the Services page for requirements and processing times.",
  },
  {
    q: "Will the audit disrupt our daily operations?",
    a: "We schedule interviews and document requests with your liaison officer to keep disruption to a minimum. Frontline services to the public should continue as normal.",
  },
  {
    q: "Can we get a copy of other offices' audit reports?",
    a: "No. Audit reports are confidential and are released only to the City Mayor and the office concerned.",
  },
  {
    q: "What happens if we disagree with a finding?",
    a: "Raise it during the exit conference and submit your written comments with supporting documents. Your position will be included in the final report.",
  },
  {
    q: "How long do we have to act on recommendations?",
    a: "Submit an action plan within 30 days of receiving the final report. Target dates for each action are agreed with the IAS and depend on the complexity of the recommendation.",
  },
];

const forms = [
  { code: "Form IAS-01", title: "Pre-Audit Checklist", type: "PDF", size: "180 KB" },
  { code: "Form IAS-02", title: "Internal Control Questionnaire", type: "DOCX", size: "96 KB" },
  { code: "Form IAS-03", title: "Request for Audit or Review", type: "PDF", size: "120 KB" },
  { code: "Form IAS-05", title: "Request for Advisory Service", type: "PDF", size: "110 KB" },
  { code: "Form IAS-07", title: "Management Comments Template", type: "DOCX", size: "64 KB" },
  { code: "Form IAS-08", title: "Action Plan and Status Report", type: "XLSX", size: "72 KB" },
];

// Sample upcoming trainings. Dates, venues, and slots are placeholders for the
// prototype.
const trainings = [
  {
    month: "Nov",
    day: "12",
    year: "2026",
    title: "Risk-Based Internal Control Orientation",
    time: "9:00 AM to 12:00 NN",
    venue: "Training Room, 3rd Floor, Butuan City Hall",
    audience: "Department heads and division chiefs",
    slots: "18 of 30 slots left",
  },
  {
    month: "Nov",
    day: "26",
    year: "2026",
    title: "Cash Handling and Disbursement Controls Workshop",
    time: "1:00 PM to 4:00 PM",
    venue: "Training Room, 3rd Floor, Butuan City Hall",
    audience: "Cashiers, collecting and disbursing officers",
    slots: "9 of 25 slots left",
  },
  {
    month: "Dec",
    day: "10",
    year: "2026",
    title: "Records and Documentation Management for Barangays",
    time: "9:00 AM to 4:00 PM",
    venue: "Butuan City Hall Multi-Purpose Hall",
    audience: "Barangay treasurers and secretaries",
    slots: "Full, waitlist open",
  },
  {
    month: "Jan",
    day: "21",
    year: "2027",
    title: "Preparing for an Internal Audit: A Session for Auditees",
    time: "9:00 AM to 12:00 NN",
    venue: "Training Room, 3rd Floor, Butuan City Hall",
    audience: "Liaison officers and office staff",
    slots: "Opens December 2026",
  },
];

const PILLS: ReadonlyArray<readonly [string, string]> = [
  ["#process", "Audit process"],
  ["#prepare", "How to prepare"],
  ["#rights", "Rights and responsibilities"],
  ["#faqs", "FAQs"],
  ["#forms", "Forms"],
  ["#training", "Training calendar"],
];

export default function CityOfficesPage() {
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
                For City Offices
              </li>
            </ol>
          </nav>
          <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
            For City Offices
          </h1>
          <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:740px;")}>
            What to expect when the IAS reviews your office, how to get ready, and
            the forms you will need.
          </p>
          <ul
            style={css(
              "list-style:none;margin:6px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:8px;",
            )}
          >
            {PILLS.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="hvr-pill"
                  style={css(
                    "display:inline-flex;align-items:center;min-height:40px;padding:0 16px;border-radius:999px;background:#fff;color:#0B4A7D;font-weight:600;font-size:15px;text-decoration:none;border:1px solid #B9CFE3;",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audit process */}
      <section id="process" aria-labelledby="process-title" style={css("scroll-margin-top:20px;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:32px;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:10px;max-width:720px;")}>
            <h2 id="process-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              The audit process
            </h2>
            <p>
              Every IAS engagement follows the same six stages. A typical audit
              takes about four weeks from notice to final report.
            </p>
          </div>
          <ol
            style={css(
              "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr));gap:28px 16px;",
            )}
          >
            {steps.map((s) => (
              <li key={s.n} style={css("position:relative;display:flex;flex-direction:column;gap:10px;")}>
                {s.line ? (
                  <span
                    aria-hidden="true"
                    style={css(
                      "position:absolute;top:22px;left:52px;right:-12px;height:2px;background:#9DB8D2;",
                    )}
                  />
                ) : null}
                <span
                  style={css(
                    "position:relative;width:46px;height:46px;border-radius:50%;background:#0B4A7D;color:#fff;font-family:Merriweather,Georgia,serif;font-weight:900;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 4px #fff,0 0 0 6px #7DC12B;",
                  )}
                >
                  {s.n}
                </span>
                <span
                  style={css(
                    "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#4A5D70;margin-top:6px;",
                  )}
                >
                  {s.when}
                </span>
                <h3 style={css("font-size:18px;line-height:1.35;")}>{s.title}</h3>
                <p style={css("font-size:15.5px;color:#2C3E52;")}>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How to prepare */}
      <section
        id="prepare"
        aria-labelledby="prep-title"
        style={css("background:#E3F0FB;scroll-margin-top:20px;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:32px 64px;",
          )}
        >
          <div style={css("flex:1 1 300px;display:flex;flex-direction:column;gap:14px;max-width:420px;")}>
            <h2 id="prep-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              How to prepare
            </h2>
            <p>
              Good preparation shortens fieldwork and reduces disruption to your
              office&apos;s daily work. Once you receive a Notice of Audit:
            </p>
            <a href="#forms" style={css("font-weight:700;color:#0B4A7D;align-self:flex-start;")}>
              Get the pre-audit checklist (Form IAS-01)
            </a>
          </div>
          <ul
            style={css(
              "flex:2 1 480px;list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px;",
            )}
          >
            {prep.map((item) => (
              <li
                key={item}
                style={css(
                  "display:flex;gap:12px;background:#fff;border-radius:8px;padding:18px 20px;",
                )}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  style={css("flex-shrink:0;margin-top:2px;")}
                >
                  <circle cx="12" cy="12" r="11" fill="#0B4A7D" />
                  <path d="M7 12.5l3.2 3L17 9" stroke="#7DC12B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={css("font-size:16px;")}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rights and responsibilities */}
      <section id="rights" aria-labelledby="rights-title" style={css("scroll-margin-top:20px;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:28px;",
          )}
        >
          <h2 id="rights-title" style={css("font-size:clamp(25px,3vw,32px);")}>
            Rights and responsibilities of auditees
          </h2>
          <div
            style={css(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:20px;",
            )}
          >
            <div
              style={css(
                "border:1px solid #CFDDEA;border-radius:8px;padding:clamp(22px,3vw,32px);display:flex;flex-direction:column;gap:16px;border-top:4px solid #0B4A7D;",
              )}
            >
              <h3 style={css("font-size:20px;")}>Your rights</h3>
              <ul style={css("margin:0;padding-left:20px;display:flex;flex-direction:column;gap:10px;")}>
                {rights.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div
              style={css(
                "border:1px solid #CFDDEA;border-radius:8px;padding:clamp(22px,3vw,32px);display:flex;flex-direction:column;gap:16px;border-top:4px solid #1878B0;",
              )}
            >
              <h3 style={css("font-size:20px;")}>Your responsibilities</h3>
              <ul style={css("margin:0;padding-left:20px;display:flex;flex-direction:column;gap:10px;")}>
                {duties.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        aria-labelledby="faq-title"
        style={css("background:#E3F0FB;scroll-margin-top:20px;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:28px 64px;",
          )}
        >
          <div style={css("flex:1 1 260px;max-width:360px;display:flex;flex-direction:column;gap:12px;")}>
            <h2 id="faq-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Frequently asked questions
            </h2>
            <p>
              Can&apos;t find your answer? Call us at{" "}
              {siteConfig.contact.phoneLandline} or email{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={css("color:#0B4A7D;")}
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
          <div style={css("flex:2 1 520px;display:flex;flex-direction:column;gap:10px;")}>
            {faqs.map((f) => (
              <details key={f.q} style={css("background:#fff;border-radius:8px;border:1px solid #CFDDEA;")}>
                <summary
                  style={css(
                    "list-style:none;cursor:pointer;display:flex;gap:16px;align-items:center;justify-content:space-between;padding:18px 22px;min-height:56px;font-weight:700;color:#0B4A7D;font-size:17px;",
                  )}
                >
                  {f.q}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1878B0"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    aria-hidden="true"
                    style={css("flex-shrink:0;")}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p style={css("padding:0 22px 20px;color:#2C3E52;max-width:680px;")}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section id="forms" aria-labelledby="forms-title" style={css("scroll-margin-top:20px;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px) clamp(56px,8vw,96px);display:flex;flex-direction:column;gap:24px;",
          )}
        >
          <h2 id="forms-title" style={css("font-size:clamp(25px,3vw,32px);")}>
            Downloadable forms
          </h2>
          <p style={css("max-width:720px;color:#2C3E52;")}>
            These forms are collected on the{" "}
            <Link href="/downloads" style={css("color:#0B4A7D;font-weight:600;")}>
              Downloads page
            </Link>
            . While this prototype is under review, files are not yet available.
            To request a form now, call {siteConfig.contact.phoneLandline} or email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              style={css("color:#0B4A7D;")}
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
          <ul
            style={css(
              "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-top:1px solid #D5E1EC;",
            )}
          >
            {forms.map((f) => (
              <li
                key={f.code}
                style={css(
                  "display:flex;flex-wrap:wrap;gap:12px 24px;align-items:center;justify-content:space-between;padding:18px 4px;border-bottom:1px solid #D5E1EC;",
                )}
              >
                <span style={css("display:flex;gap:16px;align-items:flex-start;flex:1 1 360px;")}>
                  <span
                    style={css(
                      "flex-shrink:0;width:44px;height:52px;border-radius:4px;background:#E3F0FB;color:#0B4A7D;font-size:11px;font-weight:800;display:flex;align-items:flex-end;justify-content:center;padding-bottom:7px;border-top:4px solid #7DC12B;",
                    )}
                  >
                    {f.type}
                  </span>
                  <span style={css("display:flex;flex-direction:column;gap:2px;")}>
                    <strong style={css("color:#0B4A7D;")}>{f.title}</strong>
                    <span style={css("font-size:14px;color:#4A5D70;")}>
                      {f.code} · {f.type}, {f.size}
                    </span>
                  </span>
                </span>
                <span
                  style={css(
                    "display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border:1px dashed #9DB8D2;border-radius:4px;color:#5A6E82;font-weight:700;font-size:14px;background:#F6FAFE;",
                  )}
                >
                  Not yet available
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Training calendar */}
      <section
        id="training"
        aria-labelledby="training-title"
        style={css("background:#E3F0FB;scroll-margin-top:20px;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px) clamp(56px,8vw,96px);display:flex;flex-direction:column;gap:28px;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:10px;max-width:760px;")}>
            <h2 id="training-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Training calendar
            </h2>
            <p>
              Upcoming capacity-building sessions run by the IAS for city offices
              and barangays. Schedules below are samples for this prototype. To
              confirm a slot or request a session for your office, call{" "}
              {siteConfig.contact.phoneLandline} or email{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={css("color:#0B4A7D;")}
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
          <ul
            style={css(
              "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:20px;",
            )}
          >
            {trainings.map((t) => (
              <li
                key={t.title}
                style={css(
                  "background:#fff;border:1px solid #CFDDEA;border-radius:8px;border-top:4px solid #0B4A7D;padding:clamp(18px,2.5vw,24px);display:flex;flex-direction:column;gap:16px;",
                )}
              >
                <div style={css("display:flex;gap:14px;align-items:flex-start;")}>
                  <span
                    aria-hidden="true"
                    style={css(
                      "flex-shrink:0;width:54px;border-radius:6px;overflow:hidden;text-align:center;border:1px solid #CFDDEA;",
                    )}
                  >
                    <span
                      style={css(
                        "display:block;background:#0B4A7D;color:#fff;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:3px 0;",
                      )}
                    >
                      {t.month}
                    </span>
                    <span
                      style={css(
                        "display:block;font-family:Merriweather,Georgia,serif;font-size:22px;font-weight:900;color:#0B4A7D;padding:4px 0;",
                      )}
                    >
                      {t.day}
                    </span>
                  </span>
                  <div style={css("display:flex;flex-direction:column;gap:4px;")}>
                    <h3 style={css("font-size:18px;line-height:1.35;")}>{t.title}</h3>
                    <span style={css("font-size:14px;color:#4A5D70;")}>
                      {t.month} {t.day}, {t.year} · {t.time}
                    </span>
                  </div>
                </div>
                <dl style={css("margin:0;display:flex;flex-direction:column;gap:8px;font-size:15px;")}>
                  <div style={css("display:flex;gap:8px;")}>
                    <dt style={css("font-weight:700;min-width:54px;color:#2C3E52;")}>
                      Venue
                    </dt>
                    <dd style={css("margin:0;color:#3D5166;")}>{t.venue}</dd>
                  </div>
                  <div style={css("display:flex;gap:8px;")}>
                    <dt style={css("font-weight:700;min-width:54px;color:#2C3E52;")}>
                      For
                    </dt>
                    <dd style={css("margin:0;color:#3D5166;")}>{t.audience}</dd>
                  </div>
                </dl>
                <div
                  style={css(
                    "display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;justify-content:space-between;margin-top:auto;padding-top:12px;border-top:1px solid #EDF3F9;",
                  )}
                >
                  <span style={css("font-size:14px;font-weight:700;color:#0B4A7D;")}>
                    {t.slots}
                  </span>
                  <span style={css("font-size:13.5px;color:#5A6E82;")}>
                    Register at the IAS office
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LastUpdated path="/city-offices" />
    </main>
  );
}
