import Image from "next/image";
import { timeline } from "@/lib/content";
import { Display, Folio, Intro, Sheet } from "./Type";

export default function Story() {
  return (
    <Sheet id="story" labelledBy="story-h">
      <Folio n="03" label="Our Story" />
      <Display id="story-h">Six decades, one continuous line.</Display>
      <Intro>
        MUHAS traces its origins to the Dar es Salaam Medical School, established in 1963. Every
        change of name since has been a widening of the same mandate &mdash; to advance knowledge
        through transformative education, research, innovation and public service in health and
        allied sciences.
      </Intro>

      <ol className="relative mt-8 sm:mt-12">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[5px] w-px bg-rule"
        />
        {timeline.map((t) => (
          <li key={t.years} data-keep className="rv relative pb-7 pl-7 sm:pb-10 sm:pl-11">
            <span
              aria-hidden
              className={`absolute top-[7px] left-0 size-[11px] rounded-full border-2 ${
                t.now
                  ? "border-red bg-red ring-4 ring-red/20"
                  : "border-ink-3 bg-paper"
              }`}
            />
            <p className="mb-1 text-[0.76rem] font-bold tracking-[0.2em] text-red uppercase">
              {t.years}
            </p>
            <h3 className="mb-1.5 font-serif text-[clamp(1.14rem,2.8vw,1.5rem)] font-bold tracking-[-0.015em]">
              {t.title}
            </h3>
            <p className="max-w-[60ch] text-[0.97rem] text-ink-2">{t.body}</p>
          </li>
        ))}
      </ol>

      <figure data-keep className="rv mt-9 sm:mt-14">
        <Image
          src="/assets/graduation.jpg"
          alt="Graduands in black gowns with coloured hoods on a red carpet at the MUHAS 19th Graduation Ceremony, with a large stage banner behind them."
          width={1400}
          height={933}
          sizes="(max-width: 1120px) 100vw, 1024px"
          className="rounded-[3px]"
        />
        <figcaption className="mt-3 max-w-[62ch] text-[0.87rem] leading-[1.55] text-ink-2">
          <b className="font-semibold text-ink">The 19th Graduation Ceremony.</b> Each cohort is the
          visible output of six decades of institution-building.
        </figcaption>
      </figure>
    </Sheet>
  );
}
