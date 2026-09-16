import { units } from "@/lib/content";
import { Display, Folio, Intro, Sheet } from "./Type";

const SPECIAL = "Institute of Traditional Medicine";

export default function Units() {
  return (
    <Sheet id="academic" tone="tint" labelledBy="academic-h">
      <Folio n="08" label="Academic Units" />
      <Display id="academic-h">Where the teaching happens.</Display>
      <Intro>
        Programmes are delivered through the University&rsquo;s college, schools, institute and
        directorates &mdash; from biomedical and clinical sciences to dentistry, nursing, pharmacy,
        public health and traditional medicine.
      </Intro>

      <ul className="mt-7 grid gap-x-6 sm:mt-11 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
        {units.map((u) => {
          const special = u === SPECIAL;
          return (
            <li
              key={u}
              className={`rv flex items-baseline gap-2.5 border-b border-rule py-3.5 font-serif text-[clamp(1rem,2.3vw,1.14rem)] font-medium tracking-[-0.01em] ${
                special ? "text-red" : ""
              }`}
            >
              <span
                aria-hidden
                className={`size-[5px] flex-none -translate-y-[3px] rounded-full ${
                  special ? "bg-red" : "bg-navy"
                }`}
              />
              {u}
            </li>
          );
        })}
      </ul>

      <p className="rv mt-6 max-w-[66ch] text-[0.93rem] text-ink-3 italic sm:mt-8">
        The Institute of Traditional Medicine is a specialised research institute dedicated to
        traditional medicine &mdash; something few universities in the region can claim.
      </p>
    </Sheet>
  );
}
