import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteBlock from "@/components/QuoteBlock";
import Reveal from "@/components/Reveal";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Votre coach et formateur — Boris Lazzarotto",
  description:
    "Boris Lazzarotto, coach professionnel certifié, formateur d'adultes (FSEA), praticien PNL et accompagnant à Genève.",
};

export default async function CoachPage() {
  const c = await getPageContent("coach");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-12 md:py-16">
        <div className="container-full grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          <div className="relative lg:sticky lg:top-32">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent-100 via-sand-100 to-bo/30 shadow-xl border border-sand-200 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto w-28 h-28 rounded-full bg-white/60 flex items-center justify-center mb-4 backdrop-blur-sm">
                  <span className="font-serif text-4xl text-bo-dark">BL</span>
                </div>
                <p className="text-xs text-ink-muted italic">
                  Remplacer par la photo de Boris
                  <br />
                  (public/boris.jpg)
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {c.intro.paragraphs.map((paragraph, i) => (
              <Reveal key={i} variant="up" delay={i * 100}>
                <p className="body-text">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conviction / Engagement */}
      <section className="py-12 md:py-16 bg-white border-y border-sand-200">
        <div className="container-prose grid md:grid-cols-2 gap-10">
          <Reveal variant="left">
            <span className="eyebrow">{c.conviction.eyebrow}</span>
            <p className="font-sans text-xl md:text-2xl font-medium leading-snug tracking-tight mt-4 text-balance">
              {c.conviction.text}
            </p>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <span className="eyebrow">{c.engagement.eyebrow}</span>
            <p className="font-sans text-xl md:text-2xl font-medium leading-snug tracking-tight mt-4 text-balance">
              {c.engagement.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Inspiration quote */}
      <section className="py-12 md:py-16">
        <div className="container-prose">
          <div className="text-center">
            <span className="eyebrow">{c.inspiration.eyebrow}</span>
            <QuoteBlock
              variant="centered"
              quote={c.inspiration.quote}
              author={c.inspiration.author}
            />
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-12 md:py-16 bg-accent-100/40">
        <div className="container-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">{c.formations.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">
              {c.formations.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {c.formations.items.map((item, i) => (
                <Reveal key={i} variant="up" delay={i * 80}>
                <li className="flex items-start gap-3 transition-colors hover:text-bo-dark">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                  <span className="body-text">{item}</span>
                </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/illustrations/team.png"
              alt="Illustration d'un groupe en formation"
              width={800}
              height={800}
              className="rounded-[2rem] w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">{c.cta.title}</h2>
          <p className="lead mt-4">{c.cta.lead}</p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              {c.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
