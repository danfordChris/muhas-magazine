import { campuses } from "@/lib/content";
import { Display, Folio, Sheet } from "./Type";

export default function Campuses() {
  return (
    <Sheet id="campuses" labelledBy="campuses-h">
      <Folio n="07" label="The Campuses" />
      <Display id="campuses-h">Three campuses and a teaching unit.</Display>

      <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {campuses.map((c) => (
          <article key={c.name} data-keep className="rv border-t-2 border-navy pt-4">
            <h3 className="mb-1 font-serif text-[clamp(1.18rem,2.7vw,1.44rem)] font-bold tracking-[-0.018em]">
              {c.name}
            </h3>
            <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.1em] text-red uppercase">
              {c.where}
            </p>
            <p className="text-[0.93rem] leading-[1.62] text-ink-2">{c.body}</p>
          </article>
        ))}
      </div>
    </Sheet>
  );
}
