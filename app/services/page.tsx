import type { Metadata } from "next";
import Link from "next/link";
import OpenOnHash from "@/components/OpenOnHash";
import { css } from "@/lib/css";

export const metadata: Metadata = { title: "Services" };

type Req = { what: string; where: string };
type Action = { action: string; time: string; person: string };
type Group = { client: string; actions: Action[] };

type Service = {
  id: string;
  name: string;
  tag: string;
  short: string;
  desc: string;
  cls: string;
  who: string;
  total: string[];
  reqs: Req[];
  groups: Group[];
};

const DATA: Service[] = [
  {
    id: "document-requisition",
    name: "Document Requisition and Approval",
    tag: "External / Internal Service",
    short:
      "Release of audit-related documents and general documentary requests to authorized departments or agencies.",
    desc: "The release of audit-related documents and general documentary requests to authorized departments or agencies while upholding the integrity and sensitivity of such documents.",
    cls: "Complex",
    who: "City Government departments and other authorized agencies",
    total: [
      "5 days, 1 hour, 38 minutes — for requests requiring the approval of the City Audit Committee or Local Chief Executive",
      "1 day, 1 hour, 3 minutes — for requests requiring only the approval of the City IAS Officer",
    ],
    reqs: [
      {
        what: "Request Letter duly signed by the head of the Requesting Party Office (2 original copies)",
        where: "Client or Requesting Party",
      },
    ],
    groups: [
      {
        client:
          "Submit the request letter with a Routing and Action Slip to the CIASD Administrative Support Unit, or send it via email to the CIASD or Department Head's official email address.",
        actions: [
          {
            action:
              "1.1 Receive and record the request, whether physically submitted or via email, in the Incoming Communications Monitoring Logbook",
            time: "5 minutes",
            person: "Administrative Officer, CIASD",
          },
          {
            action:
              "1.2 Assess the validity of the request and determine the required level of approval based on the approval matrix",
            time: "30 minutes",
            person: "City IAS Officer, CIASD",
          },
          {
            action:
              "1.3 For requests requiring the approval of the City Audit Committee or Local Chief Executive — 1.3.1 Indorsement of the request to the City Audit Committee or LCE",
            time: "30 minutes",
            person: "City IAS Officer, CIASD",
          },
          {
            action: "1.3.2 Approval / disapproval of the request",
            time: "5 days",
            person: "City Audit Committee Chairperson, CGB",
          },
          {
            action: "1.3.3 Indorsement to the City IAS Officer",
            time: "5 minutes",
            person: "Administrative Officer, CIASD",
          },
          {
            action:
              "1.4 For requests requiring the approval of the City IAS Officer — 1.4.1 Approval / disapproval of the request",
            time: "1 day",
            person: "City IAS Officer, CIASD",
          },
          {
            action:
              "1.5 Indorsement of the approved or disapproved request to the Administrative Officer",
            time: "5 minutes",
            person: "City IAS Officer, CIASD",
          },
          {
            action: "1.6 Communicate the status of the request to the requesting party",
            time: "5 minutes",
            person: "Administrative Officer, CIASD",
          },
        ],
      },
      {
        client:
          "Receive the requested documents or, in case of disapproval, a Notice of Denial from the CIASD Administrative Support Unit (physically or via email), and sign the pro-forma Acknowledgment Form as applicable.",
        actions: [
          {
            action: "2.1 If approved — 2.1.1 Retrieve the requested documents",
            time: "5 minutes",
            person: "Administrative Officer, CIASD",
          },
          {
            action: "2.1.2 Provide the pro-forma Acknowledgement Form for signing",
            time: "3 minutes",
            person: "Administrative Officer, CIASD",
          },
          {
            action: "2.1.3 Log the release of the documentary requests into the Monitoring Logbook",
            time: "3 minutes",
            person: "Administrative Officer, CIASD",
          },
          {
            action: "2.1.4 Release of documents",
            time: "5 minutes",
            person: "Administrative Officer, CIASD",
          },
          {
            action:
              "2.2 If disapproved — 2.2.1 Issue a Notice of Denial or a response email in case of an email request",
            time: "5 minutes",
            person: "Administrative Officer or City IAS Officer, CIASD",
          },
        ],
      },
      {
        client: "Fill out the Client Satisfaction Measurement (CSM) survey.",
        actions: [
          {
            action:
              "3.1 Provide a copy of the CSM survey form — the onsite form for physical requests and the online form for email requests",
            time: "1 minute",
            person: "Administrative Officer, CIASD",
          },
          {
            action: "3.2 Receive the accomplished CSM survey form",
            time: "1 minute",
            person: "Administrative Officer, CIASD",
          },
        ],
      },
    ],
  },
  {
    id: "advisory-services",
    name: "Advisory Services",
    tag: "Internal Service",
    short:
      "Structured, agreed-upon advisory engagements — consulting, data analytics, pre-implementation reviews, and learning services.",
    desc: "Advisory services are structured, agreed-upon procedures between CIASD and the client, formalized through an Engagement Letter. They are collaboratively planned with the requesting party and governed by a formal agreement, designed to add value and enhance the organization's governance, risk management, and control processes. The Engagement Team provides advisory support without assuming management responsibilities. Advisory services may take the form of consulting, data analytics, pre-implementation reviews, learning services, and other advisory-related services.",
    cls: "Highly Technical",
    who: "City Government departments",
    total: [
      "19 days, 1 hour, 13 minutes* (*subject to change based on the agreed timeline and scope of the advisory engagement)",
    ],
    reqs: [
      {
        what: "Request Letter duly signed by the head of office of the Requesting Party (2 original copies)",
        where: "Client or Requesting Party",
      },
    ],
    groups: [
      {
        client:
          "Submit the request letter with a Routing and Action Slip to the CIASD Administrative Support Unit.",
        actions: [
          {
            action:
              "Receive and record the request in the incoming monitoring file, and forward it to the Department Head / Officer-in-Charge for appropriate action",
            time: "5 minutes",
            person: "Administrative Officer, CIASD",
          },
        ],
      },
      {
        client:
          "Attend an initial meeting with CIASD's Advisory Management Team to discuss and provide details regarding the requested service.",
        actions: [
          {
            action:
              "Initiate a meeting with the requesting client to understand the client's needs, requirements, objectives, and scope",
            time: "2 hours",
            person: "Advisory Management Team, CIASD",
          },
          {
            action: "Assess the request based on the criteria of acceptance",
            time: "1 hour",
            person: "Advisory Management Team, CIASD",
          },
          {
            action:
              "2.3 If all criteria are met — 2.3.1 Issue a communication letter or equivalent document for approval of the request",
            time: "1 hour",
            person: "Advisory Management Team, CIASD",
          },
          {
            action:
              "2.4 If criteria are not met — 2.4.1 Issue communication for disapproval of the request",
            time: "1 hour",
            person: "Advisory Management Team, CIASD",
          },
        ],
      },
      {
        client: "Receipt of communication letter from CIASD.",
        actions: [
          {
            action: "Assign Engagement Team Leader and Team Member",
            time: "30 minutes",
            person: "Advisory Management Team, CIASD",
          },
          {
            action:
              "Accomplish Engagement-level Independence and Ethics Confirmation for the Advisory Engagement Team",
            time: "5 minutes",
            person: "Engagement Team, CIASD",
          },
          { action: "Develop Engagement Plan", time: "1 day", person: "Engagement Team, CIASD" },
          {
            action: "Approval of Engagement Plan",
            time: "1 day",
            person: "City IAS Officer, CIASD",
          },
          { action: "Prepare Engagement Letter", time: "1 day", person: "Engagement Team, CIASD" },
        ],
      },
      {
        client: "Sign the Engagement Letter.",
        actions: [
          {
            action: "Receipt of the signed Engagement Letter from the requesting client",
            time: "1 minute",
            person: "Administrative Officer, CIASD",
          },
        ],
      },
      {
        client:
          "Attend meetings with the CIASD Engagement Team as needed and provide the required data and other relevant information.",
        actions: [
          {
            action: "Perform advisory engagement based on the agreed-upon procedures and timeline",
            time: "10 days*",
            person: "Engagement Team, CIASD",
          },
          { action: "Develop recommendations", time: "2 days", person: "Engagement Team, CIASD" },
        ],
      },
      {
        client: "Receipt of communication letter and attend the conduct of the closing meeting.",
        actions: [
          {
            action: "Prepare communication letter for the conduct of the closing meeting",
            time: "1 hour",
            person: "Engagement Team, CIASD",
          },
          {
            action:
              "Conduct closing meeting with the requesting client to present the draft Advisory Engagement Report",
            time: "3 hours",
            person: "Engagement Team, CIASD",
          },
          {
            action: "Finalize Advisory Engagement Report",
            time: "1 day",
            person: "Engagement Team, CIASD",
          },
          {
            action: "Prepare Minutes of the Meeting for the closing meeting",
            time: "1 day",
            person: "Engagement Team, CIASD",
          },
          {
            action: "Approval of Advisory Engagement Report and Minutes of the Meeting",
            time: "1 day",
            person: "City IAS Officer, CIASD",
          },
        ],
      },
      {
        client: "Receipt of approved Advisory Engagement Report and Minutes of the Meeting.",
        actions: [
          {
            action: "Transmit approved Advisory Engagement Report and Minutes of the Meeting",
            time: "30 minutes",
            person: "Engagement Team, CIASD",
          },
        ],
      },
      {
        client: "Fill out the Client Satisfaction Measurement (CSM) survey.",
        actions: [
          {
            action:
              "Provide a copy of the CSM survey form — the onsite form for physical requests and the online form for email requests",
            time: "1 minute",
            person: "Engagement Team, CIASD",
          },
          {
            action: "Receive the accomplished CSM survey form",
            time: "1 minute",
            person: "Engagement Team, CIASD",
          },
        ],
      },
    ],
  },
];

const services = DATA.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, "0"),
  anchor: "#" + s.id,
  open: i === 0,
}));

const feedback = [
  {
    q: "How to send feedback",
    a: "For walk-ins, clients may answer the Client Satisfaction Measurement (CSM) Questionnaire in the office lobby and place it in the feedback and complaints drop box. Other concerns may be coursed through email at ciasd@butuan.gov.ph.",
  },
  {
    q: "How feedback is processed",
    a: "The ARTA Focal collects, tabulates, compiles, and records all feedback submitted. If the feedback requires an answer, it is forwarded to the relevant department/division, which must respond within three (3) days from receipt.",
  },
  {
    q: "How to file a complaint",
    a: "Clients may express complaints, comments, or suggestions through several channels: visit and talk to our Public Assistance Complaints Desk Officer (PACDO); write a formal letter addressed to the Local Chief Executive or the Department Head; or email ciasd@butuan.gov.ph.",
  },
  {
    q: "How complaints are processed",
    a: "For walk-ins, the PACDO interviews the client, evaluates and assesses the complaint, and provides recommendations. For emails/calls, the PACDO verifies and endorses the complaint to the concerned personnel/division and prepares a report on action taken within three (3) days. For social media, the CEMD–PID endorses and informs the client of the action taken within three (3) days. For post mail and the 8888 hotline, the PACDO evaluates and reports actions taken within seventy-two (72) hours.",
  },
  {
    q: "Contact information of CCB, PCC, ARTA",
    a: "ARTA: complaints@arta.gov.ph · Presidential Complaint Center (PCC): 8888",
  },
];

const DownloadButton = () => (
  <a
    href="/downloads/CIASD-Citizens-Charter-2024-3rd-Edition.docx"
    download
    className="hvr-btn-primary"
    style={css(
      "display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 22px;background:#0B4A7D;color:#fff;font-weight:700;text-decoration:none;border-radius:4px;",
    )}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7DC12B"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
    Download Citizen&apos;s Charter{" "}
    <span style={css("font-weight:400;font-size:14px;color:#D6E6F4;")}>
      2024 (3rd Edition)
    </span>
  </a>
);

const cell = "padding:12px 16px;";

export default function ServicesPage() {
  return (
    <main id="main">
      <OpenOnHash />

      <section style={css("background:#E3F0FB;border-bottom:1px solid #CFE0F0;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(28px,5vw,44px) clamp(16px,4vw,32px) clamp(36px,5vw,56px);display:flex;flex-wrap:wrap;gap:24px 48px;align-items:flex-end;justify-content:space-between;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:14px;flex:1 1 520px;")}>
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
                  Services
                </li>
              </ol>
            </nav>
            <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
              Services
            </h1>
            <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:720px;")}>
              The CIASD Citizen&apos;s Charter, 2024 (3rd Edition). All services
              are provided free of charge to departments and offices of the City
              Government of Butuan, following the Citizen&apos;s Charter format
              under Republic Act No. 11032 (Ease of Doing Business and Efficient
              Government Service Delivery Act of 2018).
            </p>
          </div>
          <DownloadButton />
        </div>
      </section>

      {/* Index */}
      <section
        aria-labelledby="index-title"
        style={css(
          "max-width:1200px;margin:0 auto;padding:clamp(36px,5vw,56px) clamp(16px,4vw,32px) 0;display:flex;flex-direction:column;gap:20px;",
        )}
      >
        <h2 id="index-title" style={css("font-size:clamp(23px,2.8vw,28px);")}>
          Our services
        </h2>
        <ul
          style={css(
            "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:14px;",
          )}
        >
          {services.map((s) => (
            <li key={s.id}>
              <a
                href={s.anchor}
                className="hvr-tile"
                style={css(
                  "height:100%;display:flex;flex-direction:column;gap:8px;padding:20px 22px;border:1px solid #CFDDEA;border-radius:8px;text-decoration:none;color:#1A2B3C;",
                )}
              >
                <span style={css("display:flex;align-items:center;gap:10px;")}>
                  <span
                    style={css(
                      "font-family:Merriweather,Georgia,serif;font-weight:700;color:#1878B0;font-size:14px;",
                    )}
                  >
                    {s.num}
                  </span>
                  <strong
                    style={css(
                      "font-family:Merriweather,Georgia,serif;color:#0B4A7D;font-size:17px;line-height:1.35;",
                    )}
                  >
                    {s.name}
                  </strong>
                </span>
                <span
                  style={css(
                    "font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#3F7412;",
                  )}
                >
                  {s.tag}
                </span>
                <span style={css("font-size:15px;color:#3D5166;")}>{s.short}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Details */}
      <section
        aria-label="Service details"
        style={css(
          "max-width:1200px;margin:0 auto;padding:clamp(36px,5vw,56px) clamp(16px,4vw,32px) clamp(40px,6vw,64px);display:flex;flex-direction:column;gap:16px;",
        )}
      >
        {services.map((s) => (
          <details
            key={s.id}
            id={s.id}
            open={s.open}
            style={css(
              "border:1px solid #CFDDEA;border-radius:8px;background:#fff;scroll-margin-top:20px;overflow:hidden;",
            )}
          >
            <summary
              style={css(
                "list-style:none;cursor:pointer;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;padding:20px clamp(18px,3vw,28px);background:#F6FAFE;border-bottom:1px solid #E1EAF2;",
              )}
            >
              <span style={css("display:flex;align-items:baseline;gap:12px;")}>
                <span
                  style={css(
                    "font-family:Merriweather,Georgia,serif;font-weight:700;color:#1878B0;",
                  )}
                >
                  {s.num}
                </span>
                <h2 style={css("font-size:clamp(20px,2.4vw,24px);")}>{s.name}</h2>
              </span>
              <span
                style={css(
                  "display:flex;align-items:center;gap:10px;font-size:14px;color:#3D5166;",
                )}
              >
                <span
                  style={css(
                    "background:#fff;border:1px solid #CFDDEA;padding:2px 10px;border-radius:999px;font-weight:600;color:#0B4A7D;",
                  )}
                >
                  {s.cls}
                </span>
                {s.tag}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B4A7D"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <div
              style={css(
                "padding:clamp(20px,3vw,32px) clamp(18px,3vw,28px);display:flex;flex-direction:column;gap:26px;",
              )}
            >
              <p style={css("max-width:860px;font-size:18px;")}>{s.desc}</p>
              <dl
                style={css(
                  "margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));border:1px solid #D5E1EC;border-radius:6px;overflow:hidden;",
                )}
              >
                {[
                  ["Office or Division", "City Internal Audit Services Department (CIASD)"],
                  ["Classification", s.cls],
                  ["Type of Transaction", "G2G – Government to Government"],
                  ["Who May Avail", s.who],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    style={css(
                      `padding:14px 18px;border-bottom:1px solid #E1EAF2;${i % 2 === 0 ? "border-right:1px solid #E1EAF2;" : ""}`,
                    )}
                  >
                    <dt
                      style={css(
                        "font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#4A5D70;",
                      )}
                    >
                      {k}
                    </dt>
                    <dd style={css("margin:4px 0 0;")}>{v}</dd>
                  </div>
                ))}
              </dl>

              <div style={css("display:flex;flex-direction:column;gap:12px;")}>
                <h3 style={css("font-size:18px;")}>Checklist of requirements</h3>
                <div style={css("overflow-x:auto;border:1px solid #D5E1EC;border-radius:6px;")}>
                  <table
                    style={css(
                      "width:100%;min-width:520px;border-collapse:collapse;font-size:16px;",
                    )}
                  >
                    <thead>
                      <tr style={css("background:#0B4A7D;color:#fff;text-align:left;")}>
                        <th scope="col" style={css(cell)}>
                          Requirement
                        </th>
                        <th scope="col" style={css("padding:12px 16px;width:36%;")}>
                          Where to secure
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.reqs.map((r, i) => (
                        <tr key={i} style={css("border-top:1px solid #E1EAF2;vertical-align:top;")}>
                          <td style={css(cell)}>{r.what}</td>
                          <td style={css("padding:12px 16px;color:#3D5166;")}>{r.where}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={css("display:flex;flex-direction:column;gap:12px;")}>
                <h3 style={css("font-size:18px;")}>Process</h3>
                <div style={css("overflow-x:auto;border:1px solid #D5E1EC;border-radius:6px;")}>
                  <table
                    style={css(
                      "width:100%;min-width:900px;border-collapse:collapse;font-size:15px;",
                    )}
                  >
                    <thead>
                      <tr
                        style={css(
                          "background:#0B4A7D;color:#fff;text-align:left;vertical-align:bottom;",
                        )}
                      >
                        <th scope="col" style={css("padding:12px 16px;width:24%;")}>
                          Client steps
                        </th>
                        <th scope="col" style={css(cell)}>
                          Agency actions
                        </th>
                        <th scope="col" style={css("padding:12px 16px;width:9%;")}>
                          Fees to be paid
                        </th>
                        <th scope="col" style={css("padding:12px 16px;width:13%;")}>
                          Processing time
                        </th>
                        <th scope="col" style={css("padding:12px 16px;width:18%;")}>
                          Person responsible
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.groups.map((g, gi) =>
                        g.actions.map((a, ai) => (
                          <tr
                            key={`${gi}-${ai}`}
                            style={css("border-top:1px solid #E1EAF2;vertical-align:top;")}
                          >
                            {ai === 0 ? (
                              <td style={css("padding:12px 16px;")} rowSpan={g.actions.length}>
                                <span style={css("display:flex;gap:10px;")}>
                                  <span
                                    style={css(
                                      "flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#E3F0FB;color:#0B4A7D;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;",
                                    )}
                                  >
                                    {gi + 1}
                                  </span>
                                  {g.client}
                                </span>
                              </td>
                            ) : null}
                            <td style={css(cell)}>{a.action}</td>
                            <td style={css(cell)}>None</td>
                            <td style={css(cell)}>{a.time}</td>
                            <td style={css("padding:12px 16px;color:#3D5166;")}>{a.person}</td>
                          </tr>
                        )),
                      )}
                      <tr
                        style={css(
                          "border-top:2px solid #0B4A7D;background:#F6FAFE;font-weight:700;color:#0B4A7D;vertical-align:top;",
                        )}
                      >
                        <td colSpan={2} style={css("padding:12px 16px;text-align:right;")}>
                          Total
                        </td>
                        <td style={css(cell)}>None</td>
                        <td colSpan={2} style={css(cell)}>
                          {s.total.map((t, i) => (
                            <span key={i} style={css("display:block;")}>
                              {t}
                            </span>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </details>
        ))}
      </section>

      {/* Feedback and Complaints Mechanism */}
      <section
        id="feedback"
        aria-labelledby="fb-mech-title"
        style={css("background:#E3F0FB;scroll-margin-top:20px;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:24px;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:10px;max-width:760px;")}>
            <h2 id="fb-mech-title" style={css("font-size:clamp(23px,2.8vw,28px);")}>
              Feedback and Complaints Mechanism
            </h2>
            <p style={css("color:#2C3E52;")}>
              How to give feedback or file a complaint about any CIASD service, as
              provided in the Citizen&apos;s Charter.
            </p>
          </div>
          <dl
            style={css(
              "margin:0;display:flex;flex-direction:column;border-top:1px solid #B9CFE3;",
            )}
          >
            {feedback.map((f) => (
              <div
                key={f.q}
                style={css(
                  "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:4px 32px;padding:18px 0;border-bottom:1px solid #B9CFE3;",
                )}
              >
                <dt style={css("font-weight:700;color:#0B4A7D;font-size:16px;")}>{f.q}</dt>
                <dd style={css("margin:0;color:#2C3E52;font-size:16px;max-width:720px;")}>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" aria-labelledby="dl-title" style={css("background:#fff;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px) clamp(56px,8vw,96px);display:flex;flex-wrap:wrap;gap:20px 40px;align-items:center;justify-content:space-between;",
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:8px;max-width:640px;")}>
            <h2 id="dl-title" style={css("font-size:clamp(23px,2.8vw,28px);")}>
              CIASD Citizen&apos;s Charter, 2024 (3rd Edition)
            </h2>
            <p style={css("color:#2C3E52;")}>
              The complete Citizen&apos;s Charter of the City Internal Audit
              Services Department, including the full service standards and the
              feedback and complaints mechanism.
            </p>
          </div>
          <DownloadButton />
        </div>
      </section>
    </main>
  );
}
