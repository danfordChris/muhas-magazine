"use client";

import { useEffect } from "react";

/**
 * Progressive polish only: fades elements in as they arrive and counts the
 * year's figures up once. Renders nothing; the page is complete without it.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealable = Array.from(document.querySelectorAll<HTMLElement>(".rv"));

    if (reduce || !("IntersectionObserver" in window)) {
      revealable.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const rvObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          rvObs.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    revealable.forEach((el) => rvObs.observe(el));

    const frames: number[] = [];
    const numObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          numObs.unobserve(el);

          const end = Number(el.dataset.count);
          if (!end) continue;

          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / 1000, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(end * eased).toLocaleString("en-US");
            if (p < 1) frames.push(requestAnimationFrame(step));
          };
          frames.push(requestAnimationFrame(step));
        }
      },
      { threshold: 0.6 },
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => numObs.observe(el));

    return () => {
      rvObs.disconnect();
      numObs.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, []);

  return null;
}
