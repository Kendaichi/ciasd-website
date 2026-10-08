import type { CSSProperties } from "react";

/**
 * Parse a CSS declaration string (as used in the original Design Canvas
 * templates, e.g. "display:flex;gap:10px;color:#0B4A7D") into a React style
 * object. Hyphenated property names are camelCased; values are passed through
 * untouched as strings, which React accepts for every CSS property.
 */
export function css(input: string): CSSProperties {
  const style: Record<string, string> = {};
  for (const part of input.split(";")) {
    const seg = part.trim();
    if (!seg) continue;
    const idx = seg.indexOf(":");
    if (idx === -1) continue;
    const rawKey = seg.slice(0, idx).trim();
    const value = seg.slice(idx + 1).trim();
    if (!rawKey) continue;
    const key = rawKey.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[key] = value;
  }
  return style as CSSProperties;
}
