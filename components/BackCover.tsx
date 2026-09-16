import Image from "next/image";
import { contact, issue } from "@/lib/content";

export default function BackCover() {
  return (
    <footer id="contact" data-invert className="bg-navy py-14 text-center text-[#efe9de] sm:py-20 lg:py-26">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-8 lg:px-16">
        <Image
          src="/assets/logo-muhas.png"
          alt=""
          width={233}
          height={200}
          className="mx-auto mb-5 w-[clamp(66px,11vw,92px)]"
        />
        <p className="mb-3 text-[0.74rem] font-bold tracking-[0.34em] text-gold uppercase">
          {issue.motto.join(" · ")}
        </p>
        <h2 className="mx-auto max-w-[22ch] font-serif text-[clamp(1.34rem,3.6vw,2.1rem)] font-bold tracking-[-0.022em] text-white">
          {issue.university}
        </h2>

        <div className="mt-9 grid gap-6 border-t border-white/20 pt-7 text-left sm:mt-14 sm:grid-cols-3 sm:gap-10">
          <div>
            <p className="mb-3 text-[0.66rem] font-bold tracking-[0.24em] text-gold uppercase">Contact</p>
            <p className="text-[0.92rem] leading-[1.72] text-[#efe9de]/85">
              {contact.postal.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="mb-3 text-[0.66rem] font-bold tracking-[0.24em] text-gold uppercase">
              Admission Office
            </p>
            <p className="text-[0.92rem] leading-[1.72]">
              {contact.phones.map((p, i) => (
                <span key={p.href}>
                  {i > 0 && <br />}
                  <a className="border-b border-white/30 text-white no-underline hover:border-red hover:text-red" href={p.href}>
                    {p.label}
                  </a>
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="mb-3 text-[0.66rem] font-bold tracking-[0.24em] text-gold uppercase">
              Email &amp; Web
            </p>
            <p className="text-[0.92rem] leading-[1.72]">
              <a className="border-b border-white/30 text-white no-underline hover:border-red hover:text-red" href={contact.email.href}>
                {contact.email.label}
              </a>
              <br />
              <a
                className="border-b border-white/30 text-white no-underline hover:border-red hover:text-red"
                href={contact.web.href}
                rel="noopener"
              >
                {contact.web.label}
              </a>
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[72ch] border-t border-white/12 pt-5 text-left text-[0.8rem] leading-[1.7] text-[#efe9de]/55 sm:mt-13">
          <b className="text-[#efe9de]/80">
            {issue.title} &mdash; {issue.number}, {issue.date}.
          </b>{" "}
          Text and photographs drawn from University sources and the MUHAS website. Statistics are
          the University&rsquo;s published figures for 2025&ndash;2026. A draft publication for
          internal review.
        </p>
      </div>
    </footer>
  );
}
