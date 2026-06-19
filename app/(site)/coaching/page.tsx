import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CardTopBar from "@/components/CardTopBar";
import QuoteBlock from "@/components/QuoteBlock";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Coaching personnel et d'équipe",
  description:
    "Coaching personnel et d'équipe à Genève : développer vos compétences, clarifier le sens de votre vie, combiner performance et équilibre, accompagner votre équipe.",
};

export default async function CoachingPage() {
  const c = await getPageContent("coaching");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-12 md:py-16">
        <div className="container-full">
          <p className="lead text-center max-w-3xl mx-auto">{c.intro}</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {c.orientations.map((o, idx) => {
              const numberColors = [
                "text-bo",
                "text-accent-500",
                "text-joy-500",
                "text-sage-600",
              ];
              const borderHovers = [
                "hover:border-bo/40",
                "hover:border-accent-300",
                "hover:border-joy-400",
                "hover:border-sage-400",
              ];
              return (
              <Reveal key={idx} variant="up" delay={(idx % 2) * 120}><article
                className={`relative overflow-hidden rounded-3xl bg-white border border-sand-200 p-7 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full ${
                  borderHovers[idx % borderHovers.length]
                }`}
              >
                <CardTopBar index={idx} />
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    className={`font-serif text-3xl ${
                      numberColors[idx % numberColors.length]
                    }`}
                  >
                    {o.number}
                  </span>
                  <div className="h-px flex-1 bg-sand-200" />
                </div>
                <h2 className="font-sans text-2xl md:text-[26px] font-semibold tracking-tight mt-2 mb-2 leading-snug">
                  {o.title}
                </h2>
                <p className="text-sm uppercase tracking-wider text-bo-dark/80 mb-5">
                  {o.subtitle}
                </p>

                <div className="mb-5">
                  <QuoteBlock
                    variant="inline"
                    quote={o.quote.text}
                    author={o.quote.author}
                  />
                </div>

                <ul className="space-y-3 mt-auto">
                  {o.items.map((it, i) => (
                    <li
                      key={i}
                      className="text-[15px] leading-relaxed text-ink-soft"
                    >
                      <strong className="text-ink font-medium">
                        {it.strong} :{" "}
                      </strong>
                      {it.text}
                    </li>
                  ))}
                </ul>
              </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container-prose text-center relative">
          <h2 className="h-section text-balance">{c.cta.title}</h2>
          <p className="lead mt-4 text-balance">{c.cta.lead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              {c.cta.primaryButton}
            </Link>
            <Link href="/tarifs" className="btn-secondary">
              {c.cta.secondaryButton}
            </Link>
          </div>
        </div>
      </section>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-16 md:left-[8%] h-80 w-80 translate-y-1/2 rounded-full bg-accent-300/55 halo animate-float-slow -z-10"
      />
    </>
  );
}
