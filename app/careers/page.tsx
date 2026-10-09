import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import LastUpdated from "@/components/LastUpdated";
import { css } from "@/lib/css";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Current job vacancies at the City Internal Audit Services Department of Butuan City, with qualifications, salary grades, application deadlines, and how to apply.",
  path: "/careers",
});

const qs = (e: string, t: string, x: string, el: string) => [
  { k: "Education", v: e },
  { k: "Training", v: t },
  { k: "Experience", v: x },
  { k: "Eligibility", v: el },
];

const vacancies = [
  {
    title: "Internal Auditor III",
    item: "BUT-CIASD-IA3-004-2023",
    sg: "SG 18",
    pay: "₱51,357",
    deadline: "October 23, 2026",
    qs: qs(
      "Bachelor's degree relevant to the job",
      "8 hours of relevant training",
      "2 years of relevant experience",
      "Career Service (Professional) / Second Level Eligibility",
    ),
  },
  {
    title: "Internal Auditor I",
    item: "BUT-CIASD-IA1-007-2023",
    sg: "SG 11",
    pay: "₱31,705",
    deadline: "October 23, 2026",
    qs: qs(
      "Bachelor's degree relevant to the job",
      "None required",
      "None required",
      "Career Service (Professional) / Second Level Eligibility",
    ),
  },
  {
    title: "Internal Auditing Assistant",
    item: "BUT-CIASD-IAA-010-2023",
    sg: "SG 8",
    pay: "₱21,211",
    deadline: "October 23, 2026",
    qs: qs(
      "Completion of two years of studies in college",
      "4 hours of relevant training",
      "1 year of relevant experience",
      "Career Service (Sub-professional) / First Level Eligibility",
    ),
  },
];

const reqs = [
  "Letter of intent addressed to the City Mayor, stating the position and item number",
  "Fully accomplished Personal Data Sheet (CS Form No. 212, Revised 2017) with a recent passport-size photo",
  "Work Experience Sheet",
  "Performance rating in the last rating period, if applicable",
  "Photocopy of certificate of eligibility, rating, or license",
  "Photocopy of Transcript of Records",
];

const applySteps = [
  {
    title: "Check the qualifications",
    text: "Make sure you meet the education, training, experience, and eligibility standards for the position.",
  },
  {
    title: "Prepare your documents",
    text: "Complete all documentary requirements. Incomplete applications will not be processed.",
  },
  {
    title: "Submit before the deadline",
    text: "Send your application in person or by email to the Human Resource Management Office.",
  },
  {
    title: "Wait for assessment",
    text: "Shortlisted applicants are invited to an examination and interview by the HRMPSB.",
  },
].map((a, i) => ({ ...a, n: i + 1 }));

export default function CareersPage() {
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
                Careers
              </li>
            </ol>
          </nav>
          <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
            Careers
          </h1>
          <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:740px;")}>
            Join a team that helps the City Government of Butuan work with
            integrity. We welcome applications from accountants, auditors, and
            public administration professionals.
          </p>
        </div>
      </section>

      {/* Vacancies */}
      <section
        aria-labelledby="vac-title"
        style={css(
          "max-width:1200px;margin:0 auto;padding:clamp(36px,5vw,56px) clamp(16px,4vw,32px) clamp(48px,7vw,80px);display:flex;flex-direction:column;gap:24px;",
        )}
      >
        <div
          style={css(
            "display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;justify-content:space-between;",
          )}
        >
          <h2 id="vac-title" style={css("font-size:clamp(25px,3vw,32px);")}>
            Current vacancies
          </h2>
          <span style={css("font-size:15px;color:#4A5D70;")}>
            Posted October 8, 2026 · 3 positions
          </span>
        </div>
        {vacancies.map((v) => (
          <article key={v.item} style={css("border:1px solid #CFDDEA;border-radius:8px;overflow:hidden;")}>
            <header
              style={css(
                "background:#F6FAFE;border-bottom:1px solid #E1EAF2;padding:clamp(18px,3vw,26px) clamp(18px,3vw,28px);display:flex;flex-wrap:wrap;gap:16px 32px;align-items:flex-start;justify-content:space-between;",
              )}
            >
              <div style={css("display:flex;flex-direction:column;gap:6px;")}>
                <h3 style={css("font-size:clamp(20px,2.4vw,24px);")}>{v.title}</h3>
                <span style={css("font-size:15px;color:#3D5166;")}>
                  Plantilla Item No. <strong style={css("color:#1A2B3C;")}>{v.item}</strong> ·
                  Place of assignment: City Internal Audit Services Department
                </span>
              </div>
              <span
                style={css(
                  "display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #CFDDEA;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:700;color:#0B4A7D;",
                )}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4E8A16"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                Deadline: {v.deadline}
              </span>
            </header>
            <div
              style={css(
                "padding:clamp(18px,3vw,28px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:28px 40px;",
              )}
            >
              <div style={css("display:flex;flex-direction:column;gap:16px;")}>
                <dl
                  style={css(
                    "margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;",
                  )}
                >
                  <div style={css("background:#E3F0FB;border-radius:6px;padding:12px 16px;")}>
                    <dt
                      style={css(
                        "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#3D5166;",
                      )}
                    >
                      Salary grade
                    </dt>
                    <dd
                      style={css(
                        "margin:2px 0 0;font-family:Merriweather,Georgia,serif;font-weight:700;font-size:20px;color:#0B4A7D;",
                      )}
                    >
                      {v.sg}
                    </dd>
                  </div>
                  <div style={css("background:#E3F0FB;border-radius:6px;padding:12px 16px;")}>
                    <dt
                      style={css(
                        "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#3D5166;",
                      )}
                    >
                      Monthly salary
                    </dt>
                    <dd
                      style={css(
                        "margin:2px 0 0;font-family:Merriweather,Georgia,serif;font-weight:700;font-size:20px;color:#0B4A7D;",
                      )}
                    >
                      {v.pay}
                    </dd>
                  </div>
                </dl>
                <h4 style={css("font-size:16px;")}>Qualification standards</h4>
                <dl style={css("margin:0;display:flex;flex-direction:column;border-top:1px solid #E1EAF2;")}>
                  {v.qs.map((q) => (
                    <div
                      key={q.k}
                      style={css(
                        "display:grid;grid-template-columns:110px 1fr;gap:12px;padding:10px 0;border-bottom:1px solid #E1EAF2;font-size:16px;",
                      )}
                    >
                      <dt style={css("font-weight:700;color:#0B4A7D;")}>{q.k}</dt>
                      <dd style={css("margin:0;")}>{q.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div style={css("display:flex;flex-direction:column;gap:14px;")}>
                <h4 style={css("font-size:16px;")}>Documentary requirements</h4>
                <ol
                  style={css(
                    "margin:0;padding-left:22px;display:flex;flex-direction:column;gap:8px;font-size:16px;",
                  )}
                >
                  {reqs.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
                <a
                  href="#apply"
                  className="hvr-btn-primary"
                  style={css(
                    "align-self:flex-start;display:inline-flex;align-items:center;min-height:44px;padding:0 18px;margin-top:6px;background:#0B4A7D;color:#fff;font-weight:700;font-size:15px;text-decoration:none;border-radius:4px;",
                  )}
                >
                  How to apply
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* OJT */}
      <section id="ojt-title-wrap" aria-labelledby="ojt-title" style={css("background:#E3F0FB;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:32px 56px;align-items:center;",
          )}
        >
          <div style={css("flex:1 1 320px;max-width:460px;aspect-ratio:4/3;position:relative;")}>
            <ImageSlot
              shape="rounded"
              radius={8}
              placeholder="Photo: student interns with IAS staff"
              style={css("position:absolute;inset:0;width:100%;height:100%;")}
            />
          </div>
          <div style={css("flex:1 1 440px;display:flex;flex-direction:column;gap:16px;")}>
            <h2 id="ojt-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Internship and On-the-Job Training
            </h2>
            <p>
              We accept OJT students taking up Accountancy, Internal Auditing,
              Management Accounting, and Public Administration. Interns assist in
              document reviews, data analysis, and training logistics under the
              supervision of an internal auditor.
            </p>
            <dl
              style={css(
                "margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:12px;",
              )}
            >
              <div style={css("background:#fff;border-radius:6px;padding:14px 16px;")}>
                <dt
                  style={css(
                    "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#3D5166;",
                  )}
                >
                  Intake
                </dt>
                <dd style={css("margin:2px 0 0;font-weight:600;")}>January and June</dd>
              </div>
              <div style={css("background:#fff;border-radius:6px;padding:14px 16px;")}>
                <dt
                  style={css(
                    "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#3D5166;",
                  )}
                >
                  Duration
                </dt>
                <dd style={css("margin:2px 0 0;font-weight:600;")}>300 to 600 hours</dd>
              </div>
              <div style={css("background:#fff;border-radius:6px;padding:14px 16px;")}>
                <dt
                  style={css(
                    "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#3D5166;",
                  )}
                >
                  Slots per batch
                </dt>
                <dd style={css("margin:2px 0 0;font-weight:600;")}>Up to 6 students</dd>
              </div>
            </dl>
            <p style={css("font-size:16px;")}>
              <strong style={css("color:#0B4A7D;")}>Requirements:</strong> endorsement
              letter from your school, memorandum of agreement with the City
              Government, résumé, medical certificate, and proof of accident
              insurance.
            </p>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section id="apply" aria-labelledby="apply-title" style={css("scroll-margin-top:20px;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px) clamp(56px,8vw,96px);display:flex;flex-direction:column;gap:28px;",
          )}
        >
          <h2 id="apply-title" style={css("font-size:clamp(25px,3vw,32px);")}>
            How to apply
          </h2>
          <ol
            style={css(
              "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:16px;",
            )}
          >
            {applySteps.map((a) => (
              <li
                key={a.n}
                style={css(
                  "display:flex;flex-direction:column;gap:10px;padding:22px;border:1px solid #CFDDEA;border-radius:8px;",
                )}
              >
                <span
                  style={css(
                    "width:40px;height:40px;border-radius:50%;background:#0B4A7D;color:#fff;font-family:Merriweather,Georgia,serif;font-weight:900;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3px #fff,0 0 0 5px #7DC12B;",
                  )}
                >
                  {a.n}
                </span>
                <strong style={css("color:#0B4A7D;font-size:17px;margin-top:4px;")}>
                  {a.title}
                </strong>
                <span style={css("font-size:16px;color:#2C3E52;")}>{a.text}</span>
              </li>
            ))}
          </ol>
          <div
            style={css(
              "display:flex;flex-wrap:wrap;gap:20px 48px;padding:24px clamp(18px,3vw,28px);background:#F6FAFE;border:1px solid #D5E1EC;border-radius:8px;",
            )}
          >
            <div style={css("display:flex;flex-direction:column;gap:4px;flex:1 1 320px;")}>
              <strong style={css("color:#0B4A7D;")}>Submit applications to</strong>
              <span>
                The City Mayor, City Government of Butuan
                <br />
                Attention: Human Resource Management Office
                <br />
                Ground Floor, Butuan City Hall, J.P. Rosales Avenue, Doongan,
                Butuan City 8600
              </span>
            </div>
            <div style={css("display:flex;flex-direction:column;gap:4px;flex:1 1 280px;")}>
              <strong style={css("color:#0B4A7D;")}>Or by email</strong>
              <a href="mailto:hrmo@butuan.gov.ph" style={css("color:#0B4A7D;")}>
                hrmo@butuan.gov.ph
              </a>
              <span style={css("font-size:15px;color:#3D5166;")}>
                Use the subject line: Application – [Position Title] – [Item No.]
              </span>
            </div>
          </div>
          <p style={css("font-size:15px;color:#3D5166;max-width:860px;")}>
            The City Government of Butuan practices equal employment opportunity.
            Selection does not discriminate on the basis of sex, sexual
            orientation and gender identity, civil status, disability, religion,
            ethnicity, or political affiliation. Only shortlisted applicants will
            be notified.
          </p>
        </div>
      </section>
      <LastUpdated path="/careers" />
    </main>
  );
}
