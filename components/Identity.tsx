import { identity, issue, stats } from "@/lib/content";
import { Display, Folio, Sheet } from "./Type";

export default function Identity() {
  return (
    <Sheet id="identity" tone="navy" labelledBy="identity-h">
      <Folio n="02" label="Who We Are" light />
      <Display id="identity-h" light>
        A world-class university excelling in health training, research, innovation and services.
      </Display>

      <div className="rv my-8 grid gap-px border border-white/15 bg-white/15 sm:my-11 sm:grid-cols-2 lg:grid-cols-3">
        <article className="bg-navy p-5 sm:p-8">
          <p className="mb-3 text-[0.68rem] font-bold tracking-[0.26em] text-gold uppercase">Vision</p>
          <p className="font-serif text-[clamp(1.02rem,2.3vw,1.2rem)] leading-[1.45] font-medium text-white">
            {identity.vision}
          </p>
        </article>

        <article className="bg-navy p-5 sm:p-8">
          <p className="mb-3 text-[0.68rem] font-bold tracking-[0.26em] text-gold uppercase">Mission</p>
          <p className="font-serif text-[clamp(1.02rem,2.3vw,1.2rem)] leading-[1.45] font-medium text-white">
            {identity.mission}
          </p>
        </article>

        <article className="flex flex-col bg-navy p-5 sm:p-8">
          <p className="mb-3 text-[0.68rem] font-bold tracking-[0.26em] text-gold uppercase">Motto</p>
          <p className="font-serif text-[clamp(1.3rem,3.6vw,1.85rem)] leading-[1.2] font-bold tracking-[-0.01em] text-white">
            {issue.motto.map((word, i) => (
              <span key={word}>
                {i > 0 && <span className="px-[0.12em] text-red">&middot;</span>}
                {word}
              </span>
            ))}
          </p>
          <p className="mt-2 text-[0.82rem] tracking-[0.1em] text-[#efe9de]/60 uppercase">
            {issue.mottoGloss}
          </p>
        </article>
      </div>

      <p className="rv mt-8 mb-4 flex flex-wrap items-baseline gap-2.5 text-[0.7rem] font-bold tracking-[0.26em] text-white uppercase sm:mt-12">
        The year in numbers <span className="tracking-[0.14em] text-gold">2025 &ndash; 2026</span>
      </p>

      <ul className="rv grid grid-cols-2 gap-px border border-white/15 bg-white/15 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <li key={s.label} className="flex flex-col gap-0.5 bg-navy p-4 sm:p-6">
            <b
              data-count={s.value}
              className="font-serif text-[clamp(1.85rem,5.4vw,2.7rem)] leading-none font-bold tracking-[-0.02em] text-white tabular-nums"
            >
              {s.value.toLocaleString("en-US")}
            </b>
            <span className="text-[0.78rem] leading-[1.35] tracking-[0.06em] text-[#efe9de]/65">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </Sheet>
  );
}
