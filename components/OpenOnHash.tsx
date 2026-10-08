"use client";

import { useEffect } from "react";

/**
 * Opens the <details> element whose id matches the current location hash,
 * reproducing the hashchange handler the original Services page carried.
 */
export default function OpenOnHash() {
  useEffect(() => {
    const openFromHash = () => {
      const id = location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el && el.tagName === "DETAILS") {
        (el as HTMLDetailsElement).open = true;
      }
    };
    window.addEventListener("hashchange", openFromHash);
    openFromHash();
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return null;
}
