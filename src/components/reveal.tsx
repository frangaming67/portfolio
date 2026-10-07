"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades in every `[data-reveal]` element as it scrolls into view.
 * The hidden starting state only applies under `html.js` (set by an inline
 * script in the layout), so content stays visible when JavaScript is off.
 * Re-runs on every route change because the layout persists across pages.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    // One root layout serves both languages; keep <html lang> in sync.
    document.documentElement.lang = /^\/es(\/|$)/.test(pathname) ? "es" : "en";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    document
      .querySelectorAll("[data-reveal]:not(.is-visible)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
