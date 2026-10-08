import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import NewsFeed from "@/components/NewsFeed";
import { css } from "@/lib/css";

export const metadata = pageMetadata({
  title: "News & Updates",
  description:
    "News, announcements, activities, and accomplishment reports from the City Internal Audit Services Department of Butuan City.",
  path: "/news",
});

const gallery = [
  "Internal control workshop, City Hall Session Hall",
  "Entrance conference with the City Treasurer's Office",
  "Fieldwork at the City Engineering Office",
  "IAS team during the public service fair",
  "Orientation for barangay treasurers",
  "Strategic planning session, January 2026",
  "Exit conference with the City Health Office",
  "Turnover of the CY 2025 accomplishment report",
].map((cap, i) => ({ cap, slot: "gallery-" + (i + 1) }));

export default function NewsPage() {
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
                News &amp; Updates
              </li>
            </ol>
          </nav>
          <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
            News &amp; Updates
          </h1>
          <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:740px;")}>
            Announcements, activities, articles, and accomplishment reports from
            the City Internal Audit Services Department.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="posts-title"
        style={css(
          "max-width:1200px;margin:0 auto;padding:clamp(36px,5vw,56px) clamp(16px,4vw,32px) clamp(48px,7vw,80px);display:flex;flex-direction:column;gap:28px;",
        )}
      >
        <h2 id="posts-title" style={css("position:absolute;left:-9999px;")}>
          Posts
        </h2>
        <NewsFeed />
      </section>

      <section aria-labelledby="gallery-title" style={css("background:#E3F0FB;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px) clamp(56px,8vw,96px);display:flex;flex-direction:column;gap:24px;",
          )}
        >
          <div
            style={css(
              "display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;justify-content:space-between;",
            )}
          >
            <h2 id="gallery-title" style={css("font-size:clamp(25px,3vw,32px);")}>
              Photo Gallery
            </h2>
            <a href="https://www.facebook.com/" style={css("font-weight:700;color:#0B4A7D;")}>
              More photos on our Facebook page
            </a>
          </div>
          <ul
            style={css(
              "list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:16px;",
            )}
          >
            {gallery.map((g) => (
              <li key={g.slot}>
                <figure style={css("margin:0;display:flex;flex-direction:column;gap:8px;")}>
                  <div style={css("width:100%;aspect-ratio:1/1;position:relative;")}>
                    <ImageSlot
                      shape="rounded"
                      radius={6}
                      placeholder="Gallery photo"
                      style={css("position:absolute;inset:0;width:100%;height:100%;")}
                    />
                  </div>
                  <figcaption style={css("font-size:14px;color:#2C3E52;line-height:1.45;")}>
                    {g.cap}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
