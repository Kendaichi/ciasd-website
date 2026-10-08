"use client";

import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import { css } from "@/lib/css";

type Post = { cat: string; date: string; title: string; ph: string; slot: string };

const ALL: Post[] = (
  [
    ["Activities", "September 26, 2026", "IAS conducts risk-based internal control training for 14 city offices", "Training photo"],
    ["Announcements", "September 15, 2026", "Schedule of entrance conferences for the fourth-quarter audit cycle", "Announcement graphic"],
    ["Accomplishment Reports", "August 29, 2026", "First semester 2026 accomplishment report now available", "Report cover"],
    ["Articles", "August 12, 2026", "Five common cash-handling gaps, and simple controls that close them", "Article illustration"],
    ["Activities", "July 30, 2026", "IAS joins the City Government's anniversary celebration and public service fair", "Event photo"],
    ["Announcements", "July 8, 2026", "IAS office hours during the Kahimunan Festival week", "Announcement graphic"],
    ["Articles", "June 20, 2026", "What to expect during an exit conference: a guide for department heads", "Article illustration"],
    ["Activities", "May 27, 2026", "Barangay treasurers attend orientation on records and disbursement controls", "Orientation photo"],
    ["Accomplishment Reports", "February 14, 2026", "Calendar Year 2025 annual accomplishment report", "Report cover"],
  ] as [string, string, string, string][]
).map(([cat, date, title, ph], i) => ({ cat, date, title, ph, slot: "post-" + (i + 1) }));

const CATS = ["All", "Announcements", "Activities", "Articles", "Accomplishment Reports"];

export default function NewsFeed() {
  const [cat, setCat] = useState("All");
  const posts = cat === "All" ? ALL : ALL.filter((p) => p.cat === cat);
  const countLabel = `Showing ${posts.length} ${posts.length === 1 ? "post" : "posts"}`;

  return (
    <>
      <div
        style={css(
          "display:flex;flex-wrap:wrap;gap:12px 24px;align-items:center;justify-content:space-between;",
        )}
      >
        <div
          role="group"
          aria-label="Filter by category"
          style={css("display:flex;flex-wrap:wrap;gap:8px;")}
        >
          {CATS.map((c) =>
            c === cat ? (
              <button
                key={c}
                type="button"
                aria-pressed="true"
                onClick={() => setCat(c)}
                style={css(
                  "min-height:44px;padding:0 18px;border-radius:999px;border:2px solid #0B4A7D;background:#0B4A7D;color:#fff;font:700 15px 'Public Sans',sans-serif;cursor:pointer;",
                )}
              >
                {c}
              </button>
            ) : (
              <button
                key={c}
                type="button"
                aria-pressed="false"
                onClick={() => setCat(c)}
                className="hvr-tile"
                style={css(
                  "min-height:44px;padding:0 18px;border-radius:999px;border:1px solid #9DB8D2;background:#fff;color:#0B4A7D;font:600 15px 'Public Sans',sans-serif;cursor:pointer;",
                )}
              >
                {c}
              </button>
            ),
          )}
        </div>
        <p aria-live="polite" style={css("font-size:15px;color:#4A5D70;")}>
          {countLabel}
        </p>
      </div>

      <div
        style={css(
          "display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:36px 28px;",
        )}
      >
        {posts.map((post) => (
          <article key={post.slot} style={css("display:flex;flex-direction:column;gap:14px;")}>
            <div style={css("width:100%;aspect-ratio:16/10;position:relative;")}>
              <ImageSlot
                shape="rounded"
                radius={8}
                placeholder={post.ph}
                style={css("position:absolute;inset:0;width:100%;height:100%;")}
              />
            </div>
            <div
              style={css(
                "display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;font-size:14px;",
              )}
            >
              <span
                style={css(
                  "background:#E3F0FB;color:#0B4A7D;font-weight:700;padding:3px 10px;border-radius:999px;",
                )}
              >
                {post.cat}
              </span>
              <time style={css("color:#4A5D70;")}>{post.date}</time>
            </div>
            <h3 style={css("font-size:19px;line-height:1.4;")}>
              <a href="#" className="hvr-underline" style={css("color:#0B4A7D;text-decoration:none;")}>
                {post.title}
              </a>
            </h3>
          </article>
        ))}
      </div>

      <nav aria-label="Pagination" style={css("display:flex;justify-content:center;padding-top:8px;")}>
        <ul
          style={css(
            "list-style:none;margin:0;padding:0;display:flex;gap:6px;align-items:center;",
          )}
        >
          <li>
            <span
              aria-current="page"
              style={css(
                "display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:4px;background:#0B4A7D;color:#fff;font-weight:700;",
              )}
            >
              1
            </span>
          </li>
          <li>
            <a
              href="#"
              className="hvr-pill"
              style={css(
                "display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:4px;border:1px solid #CFDDEA;color:#0B4A7D;font-weight:600;text-decoration:none;",
              )}
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hvr-pill"
              style={css(
                "display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:4px;border:1px solid #CFDDEA;color:#0B4A7D;font-weight:600;text-decoration:none;",
              )}
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hvr-pill"
              style={css(
                "display:flex;align-items:center;min-height:44px;padding:0 16px;border-radius:4px;border:1px solid #CFDDEA;color:#0B4A7D;font-weight:600;text-decoration:none;",
              )}
            >
              Next <span aria-hidden="true" style={css("margin-left:6px;")}>→</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
