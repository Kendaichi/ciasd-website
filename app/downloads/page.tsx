import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import LastUpdated from "@/components/LastUpdated";
import { css } from "@/lib/css";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Downloads",
  description:
    "Forms, the Citizen's Charter, and reference documents from the City Internal Audit Services Department of Butuan City, in one place.",
  path: "/downloads",
});

type Doc = {
  title: string;
  description: string;
  type: string;
  size: string;
  updated: string;
};

type Section = { heading: string; blurb: string; docs: Doc[] };

const sections: Section[] = [
  {
    heading: "Citizen's Charter",
    blurb: "Our published service standards and feedback mechanism.",
    docs: [
      {
        title: "CIASD Citizen's Charter, 2024 (3rd Edition)",
        description:
          "Full service standards, requirements, fees, and processing times for every IAS service.",
        type: "PDF",
        size: "2.4 MB",
        updated: "2024",
      },
    ],
  },
  {
    heading: "Forms for city offices",
    blurb: "Use these when requesting a service or preparing for an audit.",
    docs: [
      {
        title: "Request for Audit or Review (Form IAS-03)",
        description:
          "For department heads requesting an audit, review, or validation of their office.",
        type: "PDF",
        size: "120 KB",
        updated: "2026",
      },
      {
        title: "Request for Advisory Service (Form IAS-05)",
        description:
          "For offices seeking guidance on internal control, risk, or process design.",
        type: "PDF",
        size: "110 KB",
        updated: "2026",
      },
      {
        title: "Pre-Audit Checklist (Form IAS-01)",
        description:
          "Helps your office get ready once you receive a Notice of Audit.",
        type: "PDF",
        size: "180 KB",
        updated: "2026",
      },
      {
        title: "Action Plan and Status Report (Form IAS-08)",
        description:
          "For submitting and tracking actions on agreed audit recommendations.",
        type: "XLSX",
        size: "72 KB",
        updated: "2026",
      },
    ],
  },
  {
    heading: "Feedback",
    blurb: "Tell us how we did after availing of a service.",
    docs: [
      {
        title: "Client Satisfaction Measurement (CSM) Form",
        description:
          "The printable survey used to measure satisfaction with IAS services.",
        type: "PDF",
        size: "90 KB",
        updated: "2026",
      },
    ],
  },
  {
    heading: "Internal control guides",
    blurb: "Plain-language references to help offices strengthen controls.",
    docs: [
      {
        title: "A Quick Guide to Internal Control for City Offices",
        description:
          "An introduction to the five components of internal control and common gaps.",
        type: "PDF",
        size: "1.1 MB",
        updated: "2026",
      },
      {
        title: "Cash Handling and Disbursement Controls Checklist",
        description:
          "A self-assessment checklist for offices that collect or disburse funds.",
        type: "PDF",
        size: "140 KB",
        updated: "2026",
      },
    ],
  },
];

const wrap = css(
  "max-width:960px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:clamp(32px,4vw,44px);",
);
const note = css(
  "background:#FEF6E0;border:1px solid #EBD9A6;border-left:4px solid #B88709;border-radius:8px;padding:16px 18px;font-size:15.5px;color:#4A3B12;",
);
const h2 = css("font-size:clamp(20px,2.4vw,25px);margin:0;");

export default function DownloadsPage() {
  const c = siteConfig.contact;
  return (
    <main id="main">
      <PageHeader
        title="Downloads"
        intro="Forms, the Citizen's Charter, and reference documents in one place. While this prototype is under review, files are listed here but are not yet available to download."
      />

      <section>
        <div style={wrap}>
          <p style={note}>
            The documents below are being prepared and are not yet available. In
            the meantime, you may request any form by email at{" "}
            <a href={`mailto:${c.email}`} style={css("font-weight:700;color:#4A3B12;")}>
              {c.email}
            </a>{" "}
            or by calling {c.phoneLandline}.
          </p>

          {sections.map((s) => (
            <div key={s.heading} style={css("display:flex;flex-direction:column;gap:16px;")}>
              <div style={css("display:flex;flex-direction:column;gap:4px;")}>
                <h2 style={h2}>{s.heading}</h2>
                <p style={css("color:#3D5166;font-size:15.5px;")}>{s.blurb}</p>
              </div>
              <ul
                style={css(
                  "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-top:1px solid #D5E1EC;",
                )}
              >
                {s.docs.map((d) => (
                  <li
                    key={d.title}
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
                        {d.type}
                      </span>
                      <span style={css("display:flex;flex-direction:column;gap:3px;")}>
                        <strong style={css("color:#0B4A7D;")}>{d.title}</strong>
                        <span style={css("font-size:15px;color:#2C3E52;")}>
                          {d.description}
                        </span>
                        <span style={css("font-size:13.5px;color:#4A5D70;")}>
                          {d.type}, {d.size} · Updated {d.updated}
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
          ))}
        </div>
      </section>

      <LastUpdated path="/downloads" />
    </main>
  );
}
