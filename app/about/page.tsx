import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { css } from "@/lib/css";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about the City Internal Audit Services Department's mandate, organizational structure, divisions, leadership, and Internal Audit Charter under the City Government of Butuan.",
  path: "/about",
});

type Person = { name: string; role: string; initials: string };
type Section = { name: string; members: Person[] };
type Division = {
  name: string;
  chief: Person;
  sections: Section[];
  assistant: Person | null;
};

function ini(n: string): string {
  return n
    .replace(/^(Ma\.|Engr\.)\s+/, "")
    .replace(/,.*$/, "")
    .split(/\s+/)
    .filter((w) => !/^[A-Z]\.$/.test(w))
    .map((w) => w[0] ?? "")
    .filter((_c, i, a) => i === 0 || i === a.length - 1)
    .join("");
}
const p = (name: string, role: string): Person => ({ name, role, initials: ini(name) });
const sec = (name: string, names: string[]): Section => ({
  name,
  members: names.map((n) => p(n, "Internal Auditor")),
});

const divisions: Division[] = [
  {
    name: "Financial Audit Division",
    chief: p("Ma. Rebecca A. Plaza, CPA", "Division Head"),
    sections: [
      sec("Accounting and Recording Audit Section", [
        "Sheena P. Señara",
        "Monah V. Miranda",
      ]),
      sec("Internal Control and Financial Reporting Audit Section", [
        "Mae Anne S. Yao",
        "Erika L. Jamolin",
        "Ana Sofia D. Fuentes",
      ]),
    ],
    assistant: p("Diane Meridel V. Babia", "IA Assistant"),
  },
  {
    name: "Operations Audit Division",
    chief: p("Jefferson P. Cabilin", "Division Head"),
    sections: [
      sec("Operations Support Audit Section", [
        "Evander James M. Gallardo",
        "Jackylene A. Pujeda",
      ]),
      sec("Core Operations Audit Section", [
        "Jeanilyn R. Abuzo",
        "Nadem A. Dolotallas",
        "Annwen A. Mendoza",
      ]),
    ],
    assistant: p("Mark Klenn G. Saludo", "IA Assistant"),
  },
  {
    name: "Information and Communications Technology Audit Division",
    chief: p("Engr. Ian Blair S. Dalman", "Division Head"),
    sections: [
      sec("ICT Audit Support Section", [
        "Eugel Mae B. Cabahug",
        "Phearl M. Piloton",
      ]),
      sec("Advanced Technology Section", [
        "Franclloyd D. Dagdag",
        "Jameva C. Catane",
      ]),
    ],
    assistant: p("Lalaine Xyna Cano", "IA Assistant"),
  },
  {
    name: "Advisory and Compliance Monitoring Division",
    chief: p("Shaira Rutz P. Montilla, CPA", "Division Head"),
    sections: [
      sec("Advisory Services Section", [
        "Al Kennes June M. Pellazar",
        "Alyssa Joy D. Coscos",
      ]),
      sec("Compliance Monitoring Section", [
        "Mike A. Namata",
        "Danice Marvin D. Babor",
      ]),
    ],
    assistant: null,
  },
];

const head: Person = {
  name: "March Belle F. Lor, CPA",
  role: "City Government Department Head II · City Internal Audit Services Officer",
  initials: "ML",
};

const assistantHead = {
  title: "City Government Assistant Department Head II",
  role: "Assistant City Internal Audit Services Officer",
};

const admin: Person[] = [
  p("Joan V. Lira", "Administrative Officer"),
  p("Jiroun G. Gabato", "Administrative Aide"),
  p("Marissa S. Cervantes", "Administrative Aide"),
  p("Kyle D. Generale", "Administrative Aide"),
  p("Glen T. Ngo", "Service Driver"),
];

const leaders = [
  {
    name: "March Belle F. Lor, CPA",
    role: "Department Head II (City Internal Audit Services Officer)",
    slot: "lead-head",
  },
  ...divisions.map((d, i) => ({
    name: d.chief.name,
    role: "Head, " + d.name,
    slot: "lead-" + (i + 1),
  })),
];

const toc = [
  ["vision", "Vision and Mission"],
  ["history", "History"],
  ["mandate", "Mandate and Legal Basis"],
  ["values", "Core Principles"],
  ["functions", "Functions"],
  ["independence", "Independence"],
  ["structure", "Organizational Structure"],
  ["staff", "Our Leadership"],
  ["coa", "IAS vs. COA"],
  ["pledge", "Service Pledge"],
].map(([id, label]) => ({ href: "#" + id, label }));

const history = [
  {
    year: "2016–2017",
    text: "The City Government's internal audit function is established and strengthened under SP Ordinances No. 5111-2016 and No. 5208-2017.",
  },
  {
    year: "2021",
    text: "The function is reorganized as the City Internal Audit Services Office (CIASO) under SP Ordinance No. 6386-2021, which repeals the 2016 and 2017 ordinances.",
  },
  {
    year: "2023",
    text: "SP Ordinance No. 6984-2023 reorganizes the CIASO into the City Internal Audit Services Department (CIASD) — adopted November 14, 2023 and approved by the City Mayor on December 1, 2023 — with a 44-position plantilla across four audit divisions and an Administrative Support Unit.",
  },
];

const laws = [
  {
    title: "City Ordinance No. 6984-2023",
    text: "The CIASD Reorganization Ordinance — reorganizes the City Internal Audit Services Office into the City Internal Audit Services Department, repealing SP Ordinance No. 6386-2021, and defines the department's functions and organization.",
  },
  {
    title: "Republic Act No. 7160 (Local Government Code of 1991)",
    text: "Sections 2(a), 18, and 76 empower local government units to design their own organizational structure and staffing pattern — the authority under which the CIASD was created.",
  },
  {
    title: "Republic Act No. 3456, as amended by Republic Act No. 4177",
    text: "The Internal Auditing Act, providing for internal audit services in government offices and agencies.",
  },
  {
    title: "Philippine Government Internal Audit Manual (PGIAM) and NGICS, DBM",
    text: "National guidelines and manual that set the standards, processes, and reporting requirements for internal audit in government.",
  },
];

const purpose =
  "The purpose of the CIASD is to provide independent, objective assurance and consulting services designed to add value and improve the operations of the City Government of Butuan in achieving its goals and objectives. In carrying out this purpose, the department must possess and demonstrate the following core principles:";

const principles = [
  "Integrity",
  "Competence and due professional care",
  "Objective and free from undue influence (independent)",
  "Appropriately and independently positioned and adequately resourced",
  "Quality and continuous improvement",
  "Communicates effectively",
  "Provides risk-based assurance and advice",
  "Insightful, proactive, and future-focused",
  "Aligned with the strategies, objectives, and risks of the City Government of Butuan",
  "Promotes organizational improvement",
  "Conforms with the Global Internal Audit Standards (GIAS)",
];

const functions = [
  "Monitor and evaluate the City Government's governance processes.",
  "Monitor and evaluate the effectiveness of the City Government's risk management processes.",
  "Establish coordination and/or collaboration with the external audit provider.",
  "Report periodically on the internal audit activity's purpose, authority, responsibility, and performance relative to its plan.",
  "Report significant risk exposures and control issues — including fraud risks, governance issues, and other matters needed or requested by the City Mayor.",
  "Evaluate risk exposure relating to the achievement of the City Government's strategic objectives.",
  "Evaluate the reliability and integrity of information and the means used to identify, measure, classify, and report it.",
  "Evaluate the systems established to ensure compliance with the policies, plans, procedures, laws, and regulations that could significantly affect the City Government.",
  "Evaluate the means of safeguarding assets and, as appropriate, verify the existence of such assets.",
  "Evaluate the effectiveness and efficiency with which resources are employed.",
  "Evaluate operations or programs to ascertain whether results are consistent with established objectives and goals and whether they are carried out as planned.",
  "Evaluate specific operations at the request of the City Mayor, as appropriate.",
].map((text, i) => ({ n: String(i + 1).padStart(2, "0"), text }));

const compare = [
  {
    k: "Position",
    ias: "Part of the City Government, under the Office of the City Mayor",
    coa: "Independent constitutional commission, external to the City Government",
  },
  {
    k: "Main purpose",
    ias: "Help city offices strengthen controls and improve operations",
    coa: "Examine and settle government accounts and audit financial statements",
  },
  {
    k: "Reports to",
    ias: "Administratively to the City Mayor; functionally to the City Audit Committee",
    coa: "The President, Congress, and the public",
  },
  {
    k: "Timing",
    ias: "Year-round, including advice before problems arise",
    coa: "Post-audit of transactions and annual financial audit",
  },
  {
    k: "Can disallow spending?",
    ias: "No. The IAS issues recommendations.",
    coa: "Yes, through notices of disallowance",
  },
  {
    k: "Audit reports",
    ias: "Confidential; reported to the City Audit Committee and the office concerned",
    coa: "Annual audit reports are published",
  },
];

const pledge = [
  {
    title: "Fair Presentation of Financial Reports",
    text: "The financial statements of the City Government of Butuan are free from material misstatements, faithfully represent the financial performance and position of the organization, and the propriety of financial transactions and compliance with prescribed laws, rules, and regulations are ascertained.",
  },
  {
    title: "Enhanced Efficiency and Effectivity of Operations",
    text: "Unbiased evaluation of processes, systems, and operations to determine whether internal controls are in place and operating effectively to mitigate risks and ensure that organizational goals and objectives are met.",
  },
  {
    title: "Enhanced IT Infrastructure and Data Security",
    text: "Holistic protection of IT infrastructure, data, and security operations.",
  },
  {
    title: "Sustainability and Compliance to Laws and Regulations",
    text: "The City Government of Butuan's compliance with existing rules, regulations, and standards.",
  },
  {
    title: "Quality Management and Continual Improvement",
    text: "Consistently meeting customer requirements and enhancing customer satisfaction through a commitment to the continuing improvement of processes.",
  },
];

const avatar = (size: number, bg: string, color: string) =>
  css(
    `width:${size}px;height:${size}px;flex-shrink:0;border-radius:50%;background:${bg};color:${color};font-weight:700;display:flex;align-items:center;justify-content:center;letter-spacing:.02em;`,
  );

export default function AboutPage() {
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
                About Us
              </li>
            </ol>
          </nav>
          <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
            About Us
          </h1>
          <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:740px;")}>
            The City Internal Audit Services Department is the City Mayor&apos;s
            independent assurance arm. We evaluate the internal controls,
            operations, and compliance of city offices, and help them improve.
          </p>
        </div>
      </section>

      <div
        style={css(
          "max-width:1200px;margin:0 auto;padding:clamp(36px,5vw,64px) clamp(16px,4vw,32px) clamp(56px,8vw,96px);display:flex;flex-wrap:wrap;gap:48px;align-items:flex-start;",
        )}
      >
        <aside className="toc-aside" style={css("flex:1 1 220px;position:sticky;top:20px;")}>
          <nav
            aria-label="On this page"
            style={css("display:flex;flex-direction:column;gap:10px;")}
          >
            <span
              style={css(
                "font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4A5D70;",
              )}
            >
              On this page
            </span>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-left:2px solid #D5E1EC;",
              )}
            >
              {toc.map((t) => (
                <li key={t.href}>
                  <a
                    href={t.href}
                    className="hvr-toc"
                    style={css(
                      "display:block;padding:6px 0 6px 14px;margin-left:-2px;border-left:2px solid transparent;color:#0B4A7D;text-decoration:none;font-size:15px;",
                    )}
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div
          style={css(
            "flex:999 1 560px;min-width:0;display:flex;flex-direction:column;gap:clamp(56px,7vw,80px);",
          )}
        >
          {/* Vision and Mission */}
          <section
            id="vision"
            aria-labelledby="vm-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="vm-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Vision and Mission
            </h2>
            <div
              style={css(
                "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px;",
              )}
            >
              <div
                style={css(
                  "background:#0B4A7D;color:#fff;border-radius:8px;padding:30px;display:flex;flex-direction:column;gap:12px;",
                )}
              >
                <h3
                  style={css(
                    "color:#fff;font-size:15px;font-family:'Public Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:10px;",
                  )}
                >
                  <span
                    aria-hidden="true"
                    style={css("width:20px;height:4px;background:#7DC12B;border-radius:2px;")}
                  />
                  Vision
                </h3>
                <p
                  style={css(
                    "font-family:Merriweather,Georgia,serif;font-size:19px;line-height:1.6;",
                  )}
                >
                  By 2030, the City Internal Audit Services Department to be
                  internationally competitive and a premier partner of the City
                  Government of Butuan in attaining its strategic goals and
                  objectives by providing independent, value-adding, and advanced
                  internal audit services.
                </p>
              </div>
              <div
                style={css(
                  "background:#E3F0FB;border-radius:8px;padding:30px;display:flex;flex-direction:column;gap:12px;",
                )}
              >
                <h3
                  style={css(
                    "font-size:15px;font-family:'Public Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:10px;",
                  )}
                >
                  <span
                    aria-hidden="true"
                    style={css("width:20px;height:4px;background:#7DC12B;border-radius:2px;")}
                  />
                  Mission
                </h3>
                <p
                  style={css(
                    "font-family:Merriweather,Georgia,serif;font-size:19px;line-height:1.6;color:#1A2B3C;",
                  )}
                >
                  To enhance and protect organizational value by providing
                  risk-based and objective assurance, advice, and insight. The
                  CIASD helps the City Government of Butuan accomplish its mission
                  to be a great, inspirational, competitive, livable, and
                  sustainable city by bringing a systematic, disciplined approach
                  to evaluate and improve the effectiveness of risk management,
                  control, governance, quality, and compliance processes.
                </p>
              </div>
            </div>
          </section>

          {/* History */}
          <section
            id="history"
            aria-labelledby="hist-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="hist-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              History
            </h2>
            <p style={css("max-width:720px;")}>
              The City Internal Audit Services Department was created through{" "}
              <strong>City Ordinance No. 6984-2023</strong>, the &quot;City
              Internal Audit Services Department (CIASD) Reorganization
              Ordinance,&quot; which reorganized the former City Internal Audit
              Services Office (CIASO) into a full department and repealed SP
              Ordinance No. 6386-2021. It was adopted by the Sangguniang
              Panlungsod on November 14, 2023 and approved by City Mayor Ronnie
              Vicente C. Lagnada on December 1, 2023.
            </p>
            <ol
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;max-width:720px;",
              )}
            >
              {history.map((h) => (
                <li
                  key={h.year}
                  style={css(
                    "display:grid;grid-template-columns:72px 1fr;gap:16px;padding:14px 0;border-top:1px solid #E1EAF2;",
                  )}
                >
                  <span
                    style={css(
                      "font-family:Merriweather,Georgia,serif;font-weight:700;color:#0B4A7D;font-size:18px;",
                    )}
                  >
                    {h.year}
                  </span>
                  <span>{h.text}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Mandate */}
          <section
            id="mandate"
            aria-labelledby="mandate-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="mandate-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Mandate and Legal Basis
            </h2>
            <p style={css("max-width:720px;")}>
              The IAS performs its functions under the following laws and
              issuances:
            </p>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px;",
              )}
            >
              {laws.map((l) => (
                <li
                  key={l.title}
                  style={css(
                    "display:flex;gap:16px;padding:20px 22px;border:1px solid #D5E1EC;border-radius:8px;",
                  )}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7DC12B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={css("flex-shrink:0;margin-top:2px;")}
                  >
                    <path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0zM17 7l-3 7a3 3 0 0 0 6 0zM8 21h8" />
                  </svg>
                  <span style={css("display:flex;flex-direction:column;gap:4px;")}>
                    <strong style={css("color:#0B4A7D;")}>{l.title}</strong>
                    <span style={css("color:#3D5166;font-size:16px;")}>{l.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Core Values */}
          <section
            id="values"
            aria-labelledby="values-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="values-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Our Purpose and Core Principles
            </h2>
            <p style={css("max-width:760px;")}>{purpose}</p>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px;",
              )}
            >
              {principles.map((pr) => (
                <li
                  key={pr}
                  style={css(
                    "display:flex;gap:12px;align-items:flex-start;background:#E3F0FB;border-radius:8px;padding:16px 18px;",
                  )}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    style={css("flex-shrink:0;margin-top:1px;")}
                  >
                    <circle cx="12" cy="12" r="11" fill="#0B4A7D" />
                    <path d="M7 12.5l3.2 3L17 9" stroke="#7DC12B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={css("font-size:16px;color:#1A2B3C;")}>{pr}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Functions */}
          <section
            id="functions"
            aria-labelledby="fn-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="fn-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Functions
            </h2>
            <ol
              style={css(
                "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:0 32px;",
              )}
            >
              {functions.map((f) => (
                <li
                  key={f.n}
                  style={css(
                    "display:flex;gap:14px;padding:14px 0;border-top:1px solid #E1EAF2;",
                  )}
                >
                  <span
                    style={css(
                      "font-family:Merriweather,Georgia,serif;font-weight:700;color:#1878B0;min-width:26px;",
                    )}
                  >
                    {f.n}
                  </span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Independence */}
          <section
            id="independence"
            aria-labelledby="ind-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="ind-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Independence and Reporting Line
            </h2>
            <p style={css("max-width:720px;")}>
              The CIASD&apos;s independence is established by its Internal Audit
              Charter. The City IAS Officer reports administratively to the Local
              Chief Executive (City Mayor) and functionally to the City Audit
              Committee, so audit work can be performed without interference in
              audit selection, scope, procedures, timing, or report content.
            </p>
            <ul
              style={css(
                "margin:0;padding-left:22px;display:flex;flex-direction:column;gap:10px;max-width:720px;",
              )}
            >
              <li>
                The City IAS Officer reports administratively to the Local Chief
                Executive (City Mayor) and functionally to the City Audit
                Committee.
              </li>
              <li>
                The CIASD has no direct operational responsibility or authority
                over the activities it audits — it does not implement controls,
                develop procedures, install systems, or prepare records.
              </li>
              <li>
                Under its Internal Audit Charter, the CIASD has full, free, and
                unrestricted access to the City Audit Committee and to the
                functions, data, records, properties, and personnel needed for an
                engagement, with strict accountability for confidentiality.
              </li>
              <li>
                The City IAS Officer confirms the internal audit activity&apos;s
                organizational independence to the Local Chief Executive at least
                annually, and discloses any interference to the City Audit
                Committee.
              </li>
              <li>
                The CIASD conforms with the Global Internal Audit Standards (GIAS)
                and maintains a Quality Assurance and Improvement Program, with an
                external assessment at least once every five years.
              </li>
            </ul>
            <a
              href="/downloads/CIASD-Internal-Audit-Charter.docx"
              download
              className="hvr-invert"
              style={css(
                "align-self:flex-start;display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 20px;border:2px solid #0B4A7D;border-radius:4px;color:#0B4A7D;font-weight:700;text-decoration:none;",
              )}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download the Internal Audit Charter
            </a>
            <div
              style={css(
                "background:#F6FAFE;border:1px solid #D5E1EC;border-left:4px solid #0B4A7D;border-radius:8px;padding:clamp(18px,3vw,24px);display:flex;flex-direction:column;gap:10px;max-width:760px;",
              )}
            >
              <h3 style={css("font-size:19px;")}>Oversight: the City Audit Committee</h3>
              <p>
                The CIASD&apos;s oversight body is the City Audit Committee,
                created by City Ordinance No. 7253-2025. It is chaired by the City
                Mayor and vice-chaired by the City Vice-Mayor, with four
                Sangguniang Panlungsod committee chairpersons as members. The
                CIASD serves as its Secretariat.
              </p>
            </div>
          </section>

          {/* Organizational Structure */}
          <section
            id="structure"
            aria-labelledby="org-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="org-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Organizational Structure
            </h2>
            <p style={css("max-width:720px;")}>
              The CIASD is led by a City Government Department Head II (City
              Internal Audit Services Officer), assisted by a City Government
              Assistant Department Head II. It is organized into four audit
              divisions — each headed by an Internal Auditor IV and composed of
              two sections — plus an Administrative Support Unit, for a
              44-position plantilla.
            </p>
            <div
              style={css(
                "display:flex;flex-direction:column;gap:16px;padding:clamp(14px,2.5vw,24px);background:#F6FAFE;border:1px solid #D5E1EC;border-radius:8px;",
              )}
            >
              <div style={css("display:flex;flex-wrap:wrap;gap:16px;align-items:stretch;")}>
                <div
                  style={css(
                    "flex:1 1 260px;background:#0B4A7D;color:#fff;border-radius:8px;padding:20px;display:flex;gap:16px;align-items:center;border-bottom:4px solid #7DC12B;",
                  )}
                >
                  <span
                    aria-hidden="true"
                    style={css(
                      "width:64px;height:64px;flex-shrink:0;border-radius:50%;background:#fff;color:#0B4A7D;font-family:Merriweather,Georgia,serif;font-weight:900;font-size:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3px #7DC12B;",
                    )}
                  >
                    {head.initials}
                  </span>
                  <span style={css("display:flex;flex-direction:column;gap:2px;")}>
                    <span
                      style={css(
                        "font-family:Merriweather,Georgia,serif;font-weight:700;font-size:18px;line-height:1.3;",
                      )}
                    >
                      {head.name}
                    </span>
                    <span style={css("font-size:14px;color:#D6E6F4;")}>{head.role}</span>
                  </span>
                </div>
                <div
                  style={css(
                    "flex:2 1 380px;background:#fff;border:1px solid #CFDDEA;border-radius:8px;padding:16px 18px;display:flex;flex-direction:column;gap:12px;",
                  )}
                >
                  <span
                    style={css(
                      "font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#3F7412;display:flex;align-items:center;gap:8px;",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      style={css("width:14px;height:4px;background:#7DC12B;border-radius:2px;")}
                    />
                    Admin Support
                  </span>
                  <ul
                    style={css(
                      "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,200px),1fr));gap:10px 16px;",
                    )}
                  >
                    {admin.map((m) => (
                      <li key={m.name} style={css("display:flex;gap:10px;align-items:center;")}>
                        <span aria-hidden="true" style={avatar(38, "#E3F0FB", "#0B4A7D")}>
                          {m.initials}
                        </span>
                        <span style={css("display:flex;flex-direction:column;line-height:1.3;")}>
                          <span style={css("font-weight:600;font-size:15px;")}>{m.name}</span>
                          <span style={css("font-size:13px;color:#4A5D70;")}>{m.role}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                style={css(
                  "display:flex;gap:16px;align-items:center;background:#fff;border:1px solid #CFDDEA;border-left:4px solid #0B4A7D;border-radius:8px;padding:16px 18px;",
                )}
              >
                <span aria-hidden="true" style={avatar(52, "#0B4A7D", "#fff")}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-1a6 6 0 0 1 12 0v1" transform="translate(2 0)" />
                  </svg>
                </span>
                <span style={css("display:flex;flex-direction:column;gap:2px;")}>
                  <span style={css("font-weight:700;color:#0B4A7D;font-size:16px;line-height:1.3;")}>
                    {assistantHead.title}
                  </span>
                  <span style={css("font-size:13.5px;color:#4A5D70;")}>
                    {assistantHead.role} · oversees the four audit divisions
                  </span>
                </span>
              </div>
              <div
                style={css(
                  "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:16px;",
                )}
              >
                {divisions.map((d) => (
                  <div
                    key={d.name}
                    style={css(
                      "background:#fff;border:1px solid #CFDDEA;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;",
                    )}
                  >
                    <h3
                      style={css(
                        "background:#0B4A7D;color:#fff;font-family:'Public Sans',sans-serif;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:12px 16px;line-height:1.35;",
                      )}
                    >
                      {d.name}
                    </h3>
                    <div
                      style={css(
                        "display:flex;gap:12px;align-items:center;padding:14px 16px;border-bottom:1px solid #E1EAF2;background:#F6FAFE;",
                      )}
                    >
                      <span aria-hidden="true" style={avatar(48, "#0B4A7D", "#fff")}>
                        {d.chief.initials}
                      </span>
                      <span style={css("display:flex;flex-direction:column;line-height:1.3;")}>
                        <span style={css("font-weight:700;color:#0B4A7D;font-size:15.5px;")}>
                          {d.chief.name}
                        </span>
                        <span style={css("font-size:13px;color:#4A5D70;")}>
                          Internal Auditor IV · Division Head
                        </span>
                      </span>
                    </div>
                    <div style={css("padding:14px 16px;display:flex;flex-direction:column;gap:16px;")}>
                      {d.sections.map((s) => (
                        <div key={s.name} style={css("display:flex;flex-direction:column;gap:8px;")}>
                          <span
                            style={css(
                              "font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#1878B0;",
                            )}
                          >
                            {s.name}
                          </span>
                          <ul
                            style={css(
                              "list-style:none;margin:0;padding:0 0 0 12px;border-left:2px solid #D5E1EC;display:flex;flex-direction:column;gap:8px;",
                            )}
                          >
                            {s.members.map((m) => (
                              <li key={m.name} style={css("display:flex;gap:10px;align-items:center;")}>
                                <span aria-hidden="true" style={avatar(34, "#E3F0FB", "#0B4A7D")}>
                                  {m.initials}
                                </span>
                                <span style={css("display:flex;flex-direction:column;line-height:1.3;")}>
                                  <span style={css("font-weight:600;font-size:15px;")}>{m.name}</span>
                                  <span style={css("font-size:13px;color:#4A5D70;")}>
                                    Internal Auditor
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {d.assistant ? (
                        <div
                          style={css(
                            "display:flex;gap:10px;align-items:center;padding-top:12px;border-top:1px dashed #CFDDEA;",
                          )}
                        >
                          <span aria-hidden="true" style={avatar(34, "#E3F0FB", "#0B4A7D")}>
                            {d.assistant.initials}
                          </span>
                          <span style={css("display:flex;flex-direction:column;line-height:1.3;")}>
                            <span style={css("font-weight:600;font-size:15px;")}>
                              {d.assistant.name}
                            </span>
                            <span style={css("font-size:13px;color:#4A5D70;")}>
                              Internal Auditing Assistant
                            </span>
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section
            id="staff"
            aria-labelledby="staff-title"
            style={css("display:flex;flex-direction:column;gap:24px;scroll-margin-top:20px;")}
          >
            <h2 id="staff-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Our Leadership
            </h2>
            <ul
              style={css(
                "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,190px),1fr));gap:28px 20px;",
              )}
            >
              {leaders.map((s) => (
                <li key={s.slot} style={css("display:flex;flex-direction:column;gap:12px;")}>
                  <div style={css("width:100%;aspect-ratio:4/5;position:relative;")}>
                    <ImageSlot
                      shape="rounded"
                      radius={8}
                      placeholder="Portrait"
                      style={css("position:absolute;inset:0;width:100%;height:100%;")}
                    />
                  </div>
                  <span
                    style={css(
                      "display:flex;flex-direction:column;gap:2px;border-top:3px solid #7DC12B;padding-top:10px;",
                    )}
                  >
                    <strong style={css("color:#0B4A7D;font-size:16px;line-height:1.35;")}>
                      {s.name}
                    </strong>
                    <span style={css("font-size:14px;color:#3D5166;line-height:1.45;")}>
                      {s.role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* IAS vs COA */}
          <section
            id="coa"
            aria-labelledby="coa-title"
            style={css("display:flex;flex-direction:column;gap:20px;scroll-margin-top:20px;")}
          >
            <h2 id="coa-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              IAS and COA: What&apos;s the Difference?
            </h2>
            <p style={css("max-width:720px;")}>
              The IAS is often confused with the Commission on Audit. Both review
              government operations, but they have different roles.
            </p>
            <div style={css("overflow-x:auto;border:1px solid #D5E1EC;border-radius:8px;")}>
              <table
                style={css(
                  "width:100%;min-width:620px;border-collapse:collapse;font-size:16px;",
                )}
              >
                <thead>
                  <tr style={css("background:#0B4A7D;color:#fff;text-align:left;")}>
                    <th scope="col" style={css("padding:14px 18px;width:22%;font-weight:700;position:relative;")}>
                      <span style={css("position:absolute;left:-9999px;")}>Aspect</span>
                    </th>
                    <th scope="col" style={css("padding:14px 18px;font-weight:700;")}>
                      City Internal Audit Services Department
                    </th>
                    <th scope="col" style={css("padding:14px 18px;font-weight:700;")}>
                      Commission on Audit (COA)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((c) => (
                    <tr
                      key={c.k}
                      style={css("border-top:1px solid #D5E1EC;vertical-align:top;")}
                    >
                      <th
                        scope="row"
                        style={css(
                          "padding:14px 18px;text-align:left;color:#0B4A7D;background:#F6FAFE;font-weight:700;",
                        )}
                      >
                        {c.k}
                      </th>
                      <td style={css("padding:14px 18px;")}>{c.ias}</td>
                      <td style={css("padding:14px 18px;")}>{c.coa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Service Pledge */}
          <section id="pledge" aria-labelledby="pledge-title" style={css("scroll-margin-top:20px;")}>
            <div
              style={css(
                "background:#E3F0FB;border-radius:8px;padding:clamp(28px,4vw,44px);display:flex;flex-direction:column;gap:18px;",
              )}
            >
              <h2 id="pledge-title" style={css("font-size:clamp(25px,3vw,32px);")}>
                Our Service Pledge
              </h2>
              <p style={css("max-width:720px;color:#1A2B3C;")}>
                We, the officials and personnel of the City Internal Audit
                Services Department, commit to deliver the following to the City
                Government of Butuan:
              </p>
              <ol
                style={css(
                  "list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;counter-reset:pledge;",
                )}
              >
                {pledge.map((item, i) => (
                  <li
                    key={item.title}
                    style={css(
                      "display:flex;gap:16px;background:#fff;border-radius:8px;padding:18px 20px;",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      style={css(
                        "flex-shrink:0;width:34px;height:34px;border-radius:50%;background:#0B4A7D;color:#fff;font-family:Merriweather,Georgia,serif;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;",
                      )}
                    >
                      {i + 1}
                    </span>
                    <span style={css("display:flex;flex-direction:column;gap:4px;")}>
                      <strong
                        style={css(
                          "font-family:Merriweather,Georgia,serif;color:#0B4A7D;font-size:17px;",
                        )}
                      >
                        {item.title}
                      </strong>
                      <span style={css("font-size:16px;color:#2C3E52;")}>{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p style={css("font-weight:700;color:#0B4A7D;")}>
                City Internal Audit Services Department
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
