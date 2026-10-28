"use client";

import { useEffect } from "react";

// 1. Smooth-scrolls in-page links without putting "#section" in the URL.
// 2. Scroll-reveal fallback for browsers without `animation-timeline: view()`.
export default function PageEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function scrollToId(id: string) {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      return true;
    }

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (id && scrollToId(id)) e.preventDefault();
    }

    document.addEventListener("click", onClick);

    if (location.hash) {
      scrollToId(decodeURIComponent(location.hash.slice(1)));
      history.replaceState(history.state, "", location.pathname + location.search);
    }

    let observer: IntersectionObserver | undefined;
    if (!reduced && !CSS.supports("animation-timeline: view()")) {
      document.documentElement.classList.add("io");
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer!.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px" },
      );
      document.querySelectorAll(".reveal, .line-grow").forEach((el) => observer!.observe(el));
    }

    return () => {
      document.removeEventListener("click", onClick);
      observer?.disconnect();
    };
  }, []);

  return null;
}
