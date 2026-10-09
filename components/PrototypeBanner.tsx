import { css } from "@/lib/css";
import { PROTOTYPE_MODE } from "@/lib/site";

/**
 * Slim, non-dismissible notice shown at the very top of every page while the
 * site is in prototype mode. Renders nothing once PROTOTYPE_MODE is off.
 * Amber background with near-black text for WCAG AA contrast.
 */
export default function PrototypeBanner() {
  if (!PROTOTYPE_MODE) return null;

  return (
    <div
      role="note"
      aria-label="Site notice"
      style={css(
        "background:#FBBF24;color:#1A2B3C;font-family:'Public Sans',system-ui,sans-serif;font-size:14px;line-height:1.45;border-bottom:1px solid #B88709;",
      )}
    >
      <div
        style={css(
          "max-width:1200px;margin:0 auto;padding:9px clamp(16px,4vw,32px);display:flex;gap:10px;align-items:flex-start;justify-content:center;text-align:center;",
        )}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A2B3C"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ flexShrink: 0, marginTop: "2px" }}
        >
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
        <span>
          <strong>Prototype for review only.</strong> This is not an official
          website of the City Government of Butuan. Information shown is sample
          content.
        </span>
      </div>
    </div>
  );
}
