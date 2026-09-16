import Image from "next/image";
import { lead, stories } from "@/lib/content";
import { Display, Folio, Sheet, Tag } from "./Type";

export default function Field() {
  return (
    <Sheet id="field" tone="tint" labelledBy="field-h">
      <Folio n="06" label="In the Field" />
      <Display id="field-h">Evidence built at MUHAS, applied across the region.</Display>

      {/* lead story */}
      <article
        data-keep
        className="rv mt-8 mb-10 grid items-center gap-6 border-b border-rule pb-10 sm:mt-12 sm:gap-13 sm:pb-18 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)]"
      >
        <figure className="m-0">
          <Image
            src={lead.image}
            alt={lead.alt}
            width={1400}
            height={1050}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="rounded-[3px]"
          />
        </figure>
        <div>
          <Tag variant="red">{lead.tag}</Tag>
          <h3 className="mb-3 font-serif text-[clamp(1.42rem,3.6vw,2.2rem)] leading-[1.14] font-bold tracking-[-0.022em]">
            {lead.title}
          </h3>
          {lead.body.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 leading-[1.7] text-ink-2">
              {p}
            </p>
          ))}
          <p className="mt-5 text-[0.74rem] tracking-[0.16em] text-ink-3 uppercase">{lead.meta}</p>
        </div>
      </article>

      {/* story grid */}
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {stories.map((s) => (
          <article
            key={s.title}
            data-keep
            className={`rv group flex flex-col ${
              s.flat ? "justify-center bg-navy p-5 text-[#efe9de] sm:p-8" : ""
            }`}
            data-invert={s.flat ? "" : undefined}
          >
            {s.image && (
              <figure className="m-0 mb-4 overflow-hidden rounded-[3px]">
                <Image
                  src={s.image}
                  alt={s.alt ?? ""}
                  width={1400}
                  height={1050}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                  className="aspect-4/3 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                />
              </figure>
            )}
            <Tag variant={s.flat ? "ghost" : "gold"}>{s.tag}</Tag>
            <h3
              className={`mb-2 font-serif text-[clamp(1.14rem,2.6vw,1.34rem)] font-bold tracking-[-0.018em] ${
                s.flat ? "text-white" : ""
              }`}
            >
              {s.title}
            </h3>
            <p className={`text-[0.93rem] leading-[1.66] ${s.flat ? "text-[#efe9de]/75" : "text-ink-2"}`}>
              {s.body}
            </p>
            <p
              className={`mt-5 text-[0.74rem] tracking-[0.16em] uppercase ${
                s.flat ? "text-[#efe9de]/50" : "text-ink-3"
              }`}
            >
              {s.meta}
            </p>
          </article>
        ))}
      </div>
    </Sheet>
  );
}
