import { css } from "@/lib/css";
import { PAGE_UPDATED, formatUpdated } from "@/lib/pages";

/**
 * "Last updated" line for the bottom of a content page. The date is looked up
 * by path from the central PAGE_UPDATED record, so it is maintained in one
 * place. Renders nothing if the path has no recorded date.
 */
export default function LastUpdated({ path }: { path: string }) {
  const iso = PAGE_UPDATED[path];
  if (!iso) return null;

  return (
    <div style={css("border-top:1px solid #E1E9F1;background:#fff;")}>
      <div
        style={css(
          "max-width:1200px;margin:0 auto;padding:16px clamp(16px,4vw,32px);",
        )}
      >
        <p style={css("font-size:14px;color:#5A6E82;")}>
          Last updated:{" "}
          <time dateTime={iso} style={css("color:#3D5166;")}>
            {formatUpdated(iso)}
          </time>
        </p>
      </div>
    </div>
  );
}
