import type { ReactNode } from "react";

/** Section wrapper — one "sheet" of the magazine. */
export function Sheet({
  id,
  children,
  tone = "paper",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  tone?: "paper" | "tint" | "navy";
  labelledBy?: string;
}) {
  const tones = {
    paper: "bg-paper border-t border-rule",
    tint: "bg-paper-2",
    navy: "bg-navy text-[#efe9de]",
  } as const;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-sheet
      data-invert={tone === "navy" ? "" : undefined}
      className={`scroll-mt-16 py-14 sm:py-20 lg:py-28 ${tones[tone]}`}
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-8 lg:px-16">{children}</div>
    </section>
  );
}

/** Folio: the numbered section marker. */
export function Folio({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <p
      className={`rv mb-6 flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.26em] uppercase sm:mb-8 ${
        light ? "text-gold" : "text-red"
      }`}
    >
      <span
        className={`grid size-[2.1em] flex-none place-items-center rounded-full border font-serif text-[1.05rem] tracking-normal ${
          light ? "border-white/30 text-white" : "border-rule text-ink"
        }`}
      >
        {n}
      </span>
      {label}
    </p>
  );
}

/** Display heading — the editorial serif. */
export function Display({
  children,
  id,
  light,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`rv mb-4 max-w-[24ch] font-serif text-[clamp(1.75rem,4.6vw,3.1rem)] leading-[1.08] font-bold tracking-[-0.022em] ${
        light ? "max-w-[26ch] text-white" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/** Standfirst paragraph under a display heading. */
export function Intro({ children }: { children: ReactNode }) {
  return (
    <p className="rv max-w-[66ch] text-[clamp(1.02rem,2.2vw,1.16rem)] leading-[1.66] text-ink-2">
      {children}
    </p>
  );
}

/** Small uppercase label on a coloured chip. */
export function Tag({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "red" | "ghost" }) {
  const styles = {
    gold: "bg-gold/30 text-navy dark:text-ink",
    red: "bg-red text-white dark:text-[#0e1419]",
    ghost: "bg-white/16 text-white",
  } as const;
  return (
    <p
      className={`mb-3 inline-block rounded-sm px-[0.7em] py-[0.42em] text-[0.66rem] leading-normal font-bold tracking-[0.2em] uppercase ${styles[variant]}`}
    >
      {children}
    </p>
  );
}
