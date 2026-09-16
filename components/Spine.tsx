"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { issue, sections } from "@/lib/content";

/**
 * The sticky "spine": reading progress, wordmark and section nav.
 * Appears once the reader is past the cover.
 */
export default function Spine() {
  const [progress, setProgress] = useState(0);
  const [shown, setShown] = useState(false);
  const [here, setHere] = useState<string>("");
  const coverH = useRef(0);

  useEffect(() => {
    const cover = document.querySelector("[data-cover]") as HTMLElement | null;
    const measure = () => {
      coverH.current = cover?.offsetHeight ?? window.innerHeight;
    };
    measure();

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShown(window.scrollY > coverH.current * 0.72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setHere(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div
        data-print-hide
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]"
      >
        <span
          className="block h-full bg-red transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        data-print-hide
        className={`fixed inset-x-0 top-0 z-40 bg-paper/88 backdrop-blur-lg backdrop-saturate-150 transition-transform duration-300 ${
          shown ? "translate-y-0 border-b border-rule" : "-translate-y-[102%] border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center gap-3 px-4 py-2 sm:px-8 lg:px-16">
          <Image src="/assets/logo-muhas.png" alt="" width={233} height={200} className="size-[26px] flex-none object-contain" />
          <span className="font-serif text-base font-extrabold tracking-[-0.01em] whitespace-nowrap">
            {issue.title}
          </span>
          <span className="hidden text-[0.66rem] tracking-[0.18em] whitespace-nowrap text-ink-3 uppercase md:inline">
            {issue.motto.join(" · ")}
          </span>

          <nav aria-label="Sections" className="no-scrollbar ml-auto hidden gap-[18px] overflow-x-auto sm:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={here === s.id ? "true" : undefined}
                className={`border-b-[1.5px] pb-0.5 text-[0.74rem] font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors ${
                  here === s.id
                    ? "border-red text-red"
                    : "border-transparent text-ink-2 hover:text-ink"
                }`}
              >
                {s.nav}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
