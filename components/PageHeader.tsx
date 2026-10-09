import Link from "next/link";
import { css } from "@/lib/css";

/**
 * Standard page hero: breadcrumb, title, and optional intro, matching the
 * existing content pages (About, Contact, News). Used by the newer pages so
 * they share the same look.
 */
export default function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
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
              {title}
            </li>
          </ol>
        </nav>
        <h1 style={css("font-size:clamp(32px,4.6vw,46px);line-height:1.15;font-weight:900;")}>
          {title}
        </h1>
        {intro ? (
          <p style={css("font-size:clamp(17px,1.6vw,20px);max-width:760px;")}>
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
