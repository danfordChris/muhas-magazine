import { sections } from "@/lib/content";

export default function Contents() {
  return (
    <section aria-labelledby="contents-h" data-sheet className="bg-paper py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-8 lg:px-16">
        <p className="rv mb-6 text-[0.7rem] font-bold tracking-[0.26em] text-red uppercase sm:mb-8">
          In this issue
        </p>
        <h2 id="contents-h" className="sr-only">
          Contents
        </h2>
        <ol className="gap-x-6 sm:columns-2 sm:gap-x-12 lg:gap-x-16">
          {sections.map((s) => (
            <li key={s.id} className="rv break-inside-avoid">
              <a
                href={`#${s.id}`}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-x-3.5 gap-y-1 border-b border-rule py-3 no-underline transition-[padding,border-color] duration-200 hover:border-red hover:pl-1.5"
              >
                <span className="font-serif text-[0.86rem] font-bold tracking-[0.04em] text-red">{s.n}</span>
                <span className="font-serif text-[clamp(1.08rem,2.5vw,1.3rem)] font-bold tracking-[-0.015em]">
                  {s.title}
                </span>
                <span className="col-start-2 text-[0.85rem] leading-[1.4] text-ink-3">{s.blurb}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
