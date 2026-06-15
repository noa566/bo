import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs des séances de coaching personnel, coaching d'équipe et formations. Chaque proposition s'adapte à vos besoins.",
};

export default async function TarifsPage() {
  const c = await getPageContent("tarifs");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-12 md:py-16">
        <div className="container-full">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {c.plans.map((p, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 150} as="div">
              <article
                className={`relative rounded-3xl p-7 md:p-9 transition-all duration-300 h-full ${
                  p.highlight
                    ? "bg-gradient-to-br from-bo via-bo to-bo-dark text-sand-50 shadow-xl scale-100 md:scale-[1.04] bg-[length:200%_200%] animate-gradient-shift hover:-translate-y-1 hover:shadow-2xl"
                    : "bg-white border border-sand-200 hover:border-bo/40 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {p.highlight && p.highlightLabel && (
                  <span className="absolute top-5 right-5 text-[11px] uppercase tracking-widest bg-joy-400 text-bo-dark px-3 py-1.5 rounded-full font-medium shadow-sm shine-on-hover animate-pulse-soft">
                    {p.highlightLabel}
                  </span>
                )}

                <h2
                  className={`font-sans text-xl md:text-2xl font-semibold leading-snug tracking-tight ${
                    p.highlight ? "text-sand-50" : "text-ink"
                  }`}
                >
                  {p.title}
                </h2>
                <p
                  className={`text-sm mt-2 ${
                    p.highlight ? "text-sand-50/85" : "text-ink-muted"
                  }`}
                >
                  {p.duration}
                </p>

                <div
                  className={`my-5 h-px ${
                    p.highlight ? "bg-sand-50/25" : "bg-sand-200"
                  }`}
                />

                <ul className="space-y-4">
                  {p.options.map((o, i) => (
                    <li key={i}>
                      <p
                        className={`text-sm ${
                          p.highlight ? "text-sand-50/85" : "text-ink-muted"
                        }`}
                      >
                        {o.label}
                      </p>
                      <p
                        className={`font-sans text-2xl font-semibold tracking-tight mt-1 ${
                          p.highlight ? "text-sand-50" : "text-bo-dark"
                        }`}
                      >
                        {o.price}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link
                    href="/contact"
                    className={
                      p.highlight
                        ? "inline-flex w-full items-center justify-center rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-bo-dark transition-all hover:bg-white"
                        : "inline-flex w-full items-center justify-center rounded-full border border-bo px-6 py-3 text-sm font-medium text-bo-dark transition-all hover:bg-bo hover:text-white"
                    }
                  >
                    {p.cta}
                  </Link>
                </div>
              </article>
              </Reveal>
            ))}
          </div>

          <Reveal
            variant="up"
            className="mt-10 max-w-2xl mx-auto rounded-2xl bg-accent-100/50 border border-accent-200 p-7 text-center transition-all hover:shadow-lg hover:border-accent-300"
            as="div"
          >
            <h3 className="font-sans text-lg md:text-xl font-semibold tracking-tight mb-3">
              {c.founding.title}
            </h3>
            <p className="body-text">{c.founding.text}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
