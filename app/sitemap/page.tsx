import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import LastUpdated from "@/components/LastUpdated";
import { css } from "@/lib/css";

export const metadata = pageMetadata({
  title: "Sitemap",
  description:
    "A complete, human-readable list of every page on the City Internal Audit Services Department website, grouped by section.",
  path: "/sitemap",
});

type Entry = { href: string; label: string; desc: string };
type Group = { heading: string; entries: Entry[] };

const groups: Group[] = [
  {
    heading: "Main pages",
    entries: [
      { href: "/", label: "Home", desc: "Overview of the department and what we do." },
      {
        href: "/about",
        label: "About Us",
        desc: "Mandate, organizational structure, leadership, and Internal Audit Charter.",
      },
      {
        href: "/news",
        label: "News and Updates",
        desc: "Announcements, activities, articles, and accomplishment reports.",
      },
    ],
  },
  {
    heading: "Services and resources",
    entries: [
      {
        href: "/services",
        label: "Services",
        desc: "Audit, review, advisory, and training services in the Citizen's Charter.",
      },
      {
        href: "/city-offices",
        label: "For City Offices",
        desc: "The audit process, how to prepare, your rights, and the training calendar.",
      },
      {
        href: "/downloads",
        label: "Downloads",
        desc: "Forms, the Citizen's Charter, and other documents in one place.",
      },
      {
        href: "/careers",
        label: "Careers",
        desc: "Current job vacancies and how to apply.",
      },
    ],
  },
  {
    heading: "Get in touch",
    entries: [
      {
        href: "/contact",
        label: "Contact Us",
        desc: "Visit, call, or email the office, or send a message or concern.",
      },
      {
        href: "/feedback",
        label: "Client Satisfaction Survey",
        desc: "Tell us how we did after availing of a service.",
      },
    ],
  },
  {
    heading: "Policies",
    entries: [
      {
        href: "/privacy",
        label: "Privacy Policy",
        desc: "How we handle personal data under the Data Privacy Act of 2012.",
      },
      {
        href: "/accessibility",
        label: "Accessibility Statement",
        desc: "Our commitment to WCAG 2.1 AA and how to report problems.",
      },
      {
        href: "/sitemap",
        label: "Sitemap",
        desc: "This page: a list of everything on the site.",
      },
    ],
  },
];

const wrap = css(
  "max-width:960px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:clamp(32px,4vw,44px);",
);
const h2 = css(
  "font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4A5D70;margin:0 0 14px;display:flex;align-items:center;gap:8px;",
);

export default function SitemapPage() {
  return (
    <main id="main">
      <PageHeader
        title="Sitemap"
        intro="Every page on this website, grouped by section. Looking for the machine-readable version? It is served at /sitemap.xml."
      />

      <section>
        <div style={wrap}>
          {groups.map((g) => (
            <div key={g.heading}>
              <h2 style={h2}>
                <span style={css("width:16px;height:3px;background:#7DC12B;")} />
                {g.heading}
              </h2>
              <ul
                style={css(
                  "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;",
                )}
              >
                {g.entries.map((e) => (
                  <li key={e.href}>
                    <Link
                      href={e.href}
                      className="hvr-tile"
                      style={css(
                        "display:flex;flex-direction:column;gap:4px;height:100%;border:1px solid #CFDDEA;border-radius:8px;padding:16px 18px;text-decoration:none;color:inherit;border-left:4px solid #0B4A7D;",
                      )}
                    >
                      <strong style={css("color:#0B4A7D;font-size:17px;")}>
                        {e.label}
                      </strong>
                      <span style={css("font-size:15px;color:#3D5166;")}>
                        {e.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <LastUpdated path="/sitemap" />
    </main>
  );
}
