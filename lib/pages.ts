/**
 * Central record of when each page's content was last reviewed, so the
 * "Last updated" line comes from one place instead of being hardcoded per page.
 * Dates are ISO (YYYY-MM-DD).
 */
export const PAGE_UPDATED: Record<string, string> = {
  "/": "2026-10-09", // TODO: verify before launch
  "/about": "2026-10-09", // TODO: verify before launch
  "/services": "2026-10-09", // TODO: verify before launch
  "/city-offices": "2026-10-09", // TODO: verify before launch
  "/news": "2026-10-09", // TODO: verify before launch
  "/careers": "2026-10-09", // TODO: verify before launch
  "/contact": "2026-10-09", // TODO: verify before launch
  "/downloads": "2026-10-09", // TODO: verify before launch
  "/feedback": "2026-10-09", // TODO: verify before launch
  "/privacy": "2026-10-09", // TODO: verify before launch
  "/accessibility": "2026-10-09", // TODO: verify before launch
  "/sitemap": "2026-10-09", // TODO: verify before launch
};

/** Format an ISO date as e.g. "October 9, 2026" (UTC, so it never drifts). */
export function formatUpdated(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
