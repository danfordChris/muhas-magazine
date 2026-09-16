import { leaders } from "@/lib/content";
import { Display, Folio, Intro, Sheet } from "./Type";

export default function Leaders() {
  return (
    <Sheet id="leaders" tone="tint" labelledBy="leaders-h">
      <Folio n="04" label="The Leaders" />
      <Display id="leaders-h">Four offices, one direction.</Display>
      <Intro>
        Top management at MUHAS is held by four professors, each an active researcher in their own
        right. Their work spans pharmacology, sickle cell disease, tuberculosis and malaria, and
        public health nutrition.
      </Intro>

      <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {leaders.map((l) => (
          <article
            key={l.name}
            data-keep
            className={`rv border border-rule bg-paper p-5 sm:p-8 ${
              l.lead
                ? "border-t-[3px] border-t-red bg-linear-to-b from-red/5 to-paper sm:col-span-2 lg:col-span-3"
                : "border-t-[3px] border-t-navy"
            }`}
          >
            <p className="mb-3 text-[0.68rem] font-bold tracking-[0.2em] text-red uppercase">
              {l.role}
            </p>
            <h3 className="mb-1.5 font-serif text-[clamp(1.22rem,2.9vw,1.6rem)] font-bold tracking-[-0.018em]">
              {l.name}
            </h3>
            <p className="mb-4 border-b border-rule pb-4 text-[0.84rem] leading-[1.5] text-ink-3">
              {l.cred}
            </p>
            <p className={`text-[0.95rem] leading-[1.68] text-ink-2 ${l.lead ? "max-w-[78ch]" : ""}`}>
              {l.bio}
            </p>
          </article>
        ))}
      </div>
    </Sheet>
  );
}
