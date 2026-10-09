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
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const posts = ALL.filter(
    (p) =>
      (cat === "All" || p.cat === cat) &&
      (q === "" || p.title.toLowerCase().includes(q)),
  );
  const countLabel = `Showing ${posts.length} ${posts.length === 1 ? "post" : "posts"}`;

  return (
    <>
      <div style={css("display:flex;flex-direction:column;gap:16px;")}>
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

          <div style={css("position:relative;flex:1 1 240px;max-width:320px;")}>
            <label htmlFor="news-search" style={css("position:absolute;left:-9999px;")}>
              Search news by title
            </label>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4A5D70"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
              style={css(
                "position:absolute;left:14px;top:50%;transform:translateY(-50%);pointer-events:none;",
              )}
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              id="news-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title"
              style={css(
                "width:100%;min-height:44px;padding:0 14px 0 40px;border:1px solid #9DB8D2;border-radius:6px;font:400 15px 'Public Sans',sans-serif;color:#1A2B3C;background:#fff;",
              )}
            />
          </div>
        </div>
        <p aria-live="polite" style={css("font-size:15px;color:#4A5D70;")}>
          {countLabel}
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          style={css(
            "border:1px solid #CFDDEA;border-radius:8px;background:#F6FAFE;padding:clamp(28px,5vw,44px);text-align:center;display:flex;flex-direction:column;gap:14px;align-items:center;",
          )}
        >
          <p style={css("font-size:17px;color:#2C3E52;")}>
            No posts match{query ? ` "${query.trim()}"` : ""}
            {cat !== "All" ? ` in ${cat}` : ""}.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCat("All");
            }}
            style={css(
              "min-height:44px;padding:0 18px;border:2px solid #0B4A7D;border-radius:4px;background:#fff;color:#0B4A7D;font:700 15px 'Public Sans',sans-serif;cursor:pointer;",
            )}
          >
            Clear search and filters
          </button>
        </div>
      ) : (
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
              <h3 style={css("font-size:19px;line-height:1.4;color:#0B4A7D;")}>
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
