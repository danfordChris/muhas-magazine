import Image from "next/image";
import { Display, Folio, Sheet } from "./Type";

export default function Letter() {
  return (
    <Sheet id="letter" labelledBy="letter-h">
      <Folio n="01" label="From the Vice Chancellor" />

      <div className="grid items-start gap-7 sm:gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
        <figure data-keep className="rv m-0 max-w-[260px] lg:sticky lg:top-20 lg:max-w-none">
          <Image
            src="/assets/vc.jpg"
            alt="Portrait of Prof. Appolinary A. R. Kamuhabwa, Vice Chancellor of MUHAS, in a dark suit and striped tie."
            width={1400}
            height={1400}
            sizes="(max-width: 1024px) 60vw, 300px"
            className="rounded-[3px] saturate-[0.96]"
          />
          <figcaption className="mt-3.5 flex flex-col gap-0.5 border-t-2 border-red pt-3 text-[0.86rem] text-ink-2">
            <b className="text-[0.95rem] font-semibold text-ink">Prof. Appolinary A. R. Kamuhabwa</b>
            Vice Chancellor
          </figcaption>
        </figure>

        <div className="rv max-w-[66ch]">
          <Display id="letter-h">&ldquo;Your curiosity will be satisfied.&rdquo;</Display>

          <p className="dropcap mb-4 text-[clamp(1.08rem,2.4vw,1.24rem)] leading-[1.62]">
            I wish to warmly welcome you to Muhimbili University of Health and Allied Sciences, the
            first and leading public university for health sciences in Tanzania. We commend your
            interest in learning more about MUHAS, and we are confident that your curiosity will be
            satisfied as you explore who we are.
          </p>

          <p className="mb-4 text-ink-2">
            Here you will discover the wide range of programmes offered by MUHAS in Medicine,
            Dentistry, Pharmacy, Nursing, Public Health, Laboratory Sciences and other Allied Health
            Sciences, at both undergraduate and postgraduate levels &mdash; our long-established
            programmes alongside newly introduced undergraduate programmes in Biomedical
            Engineering, Midwifery and Nurse Anaesthesia, and eleven new postgraduate programmes
            offered across our schools and institute.
          </p>

          <blockquote className="my-7 border-l-[3px] border-gold pl-4 font-serif text-[clamp(1.12rem,2.7vw,1.44rem)] leading-[1.38] font-medium tracking-[-0.012em] italic sm:pl-7">
            MUHAS also prides itself on hosting a specialised research institute dedicated to
            traditional medicine &mdash; reflecting our commitment to advancing knowledge, research,
            innovation and healthcare in Tanzania and beyond.
          </blockquote>

          <p className="mt-8 flex flex-col gap-0.5">
            <span className="font-serif text-[clamp(1.3rem,3.4vw,1.75rem)] font-medium italic">
              A. A. R. Kamuhabwa
            </span>
            <span className="text-[0.78rem] tracking-[0.14em] text-ink-3 uppercase">
              Professor of Pharmacology &middot; Vice Chancellor
            </span>
          </p>
        </div>
      </div>
    </Sheet>
  );
}
