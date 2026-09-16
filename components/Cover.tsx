import Image from "next/image";
import { coverLines, issue } from "@/lib/content";

export default function Cover() {
  return (
    <section data-cover className="relative isolate flex min-h-[100svh] overflow-hidden">
      <Image
        src="/assets/cover-students.jpg"
        alt="MUHAS students in white coats with stethoscopes standing together on a lawn on the Muhimbili campus."
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_38%]"
      />
      <div aria-hidden className="cover-scrim absolute inset-0 -z-10" />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-4 pt-6 pb-8 text-white sm:px-8 sm:pb-12 lg:px-16">
        {/* masthead */}
        <div className="flex items-center gap-3.5">
          <Image
            src="/assets/logo-muhas.png"
            alt="The MUHAS crest: a circular seal bearing the words Muhimbili University of Health and Allied Sciences and the motto Elimu, Tiba, Utafiti."
            width={233}
            height={200}
            priority
            className="w-[clamp(48px,7vw,66px)] flex-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          />
          <p className="flex flex-col text-[clamp(0.68rem,1.5vw,0.8rem)] leading-[1.5] font-semibold tracking-[0.16em] uppercase opacity-95">
            <span>Muhimbili University of</span>
            <span>Health and Allied Sciences</span>
          </p>
        </div>

        {/* wordmark */}
        <div className="mt-auto py-[min(6vh,48px)]">
          <p className="mb-3 inline-block border-t-2 border-red pt-3 text-[clamp(0.66rem,1.6vw,0.78rem)] font-semibold tracking-[0.34em] uppercase opacity-90">
            {issue.kicker}
          </p>
          <h1 className="font-serif text-[clamp(3.4rem,15.5vw,10.5rem)] leading-[0.86] font-extrabold tracking-[-0.035em] [text-shadow:0_3px_34px_rgba(0,10,24,0.5)]">
            MUHAS
            <span className="mt-[0.1em] block text-[0.4em] font-medium tracking-[-0.01em] text-[#f6e9d6] italic">
              Review
            </span>
          </h1>
          <p className="cover-shadow mt-4 max-w-[34ch] text-[clamp(0.94rem,2.3vw,1.14rem)] leading-[1.5] text-[#f2ebe0]">
            {issue.tagline}
          </p>
        </div>

        {/* cover lines + issue badge */}
        <div className="flex flex-wrap items-end gap-5 border-t border-white/25 pt-4 sm:gap-12 sm:pt-6">
          <ul className="grid flex-1 basis-[300px] gap-3">
            {coverLines.map((l) => (
              <li key={l.title} className="flex flex-col border-l-2 border-red pl-3.5">
                <b className="cover-shadow text-[clamp(0.92rem,2.1vw,1.02rem)] font-semibold tracking-[-0.005em]">
                  {l.title}
                </b>
                <span className="cover-shadow text-[0.82rem] leading-[1.45] text-[#dbd5c9]">{l.blurb}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-none flex-col text-left sm:text-right">
            <span className="font-serif text-[clamp(1.3rem,4vw,1.9rem)] leading-none font-bold">
              {issue.number}
            </span>
            <span className="text-[0.78rem] tracking-[0.14em] text-[#e4dcce] uppercase">{issue.date}</span>
            <span className="text-[0.74rem] text-[#b9b2a6] italic">{issue.numberAlt}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
