import { values } from "@/lib/content";
import { Display, Folio, Intro, Sheet } from "./Type";

export default function Culture() {
  return (
    <Sheet id="culture" labelledBy="culture-h">
      <Folio n="05" label="Our Culture" />
      <Display id="culture-h">Five values that define the institution.</Display>
      <Intro>
        In executing its mission, the University is guided by five core values. They are not
        decoration on a wall; they are what the institution has agreed to be held to.
      </Intro>

      <div className="mt-8 grid gap-px border border-rule bg-rule sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <article key={v.n} data-keep className="rv flex flex-col bg-paper p-5 sm:p-8">
            <p className="mb-2 font-serif text-[1.4rem] leading-none font-bold text-red italic">
              {v.n}
            </p>
            <h3 className="mb-2 font-serif text-[clamp(1.08rem,2.4vw,1.28rem)] font-bold tracking-[-0.015em]">
              {v.title}
            </h3>
            <p className="text-[0.93rem] leading-[1.66] text-ink-2">{v.body}</p>
          </article>
        ))}
      </div>
    </Sheet>
  );
}
