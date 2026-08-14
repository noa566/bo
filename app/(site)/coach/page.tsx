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
        subtitle="Inspiré par la rencontre, la transmission et la transformation"
      />

      <section className="py-8 md:py-12">
        <div className="container-full grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-10 items-start">
          <div className="relative lg:sticky lg:top-32">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-sand-100 shadow-xl border border-sand-200">
              <Image
                src="/boris.jpg"
                alt="Boris Lazzarotto, coach et formateur"
                width={1024}
                height={1024}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-4">
            {c.intro.paragraphs.map((paragraph, i) => (
              <Reveal key={i} variant="up" delay={i * 100}>
                <p className="body-text">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conviction / Engagement */}
      <section className="py-8 md:py-12 bg-white border-y border-sand-200">
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
      <section className="py-5 md:py-7 bg-accent-100/40">
        <div className="container-prose">
          <QuoteBlock
            quote={c.inspiration.quote}
            author={c.inspiration.author}
          />
        </div>
      </section>

      {/* Formations */}
      <section className="relative isolate py-8 md:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -left-16 md:left-[6%] h-72 w-72 -translate-y-1/2 rounded-full bg-accent-300/50 halo animate-float-slow -z-10"
        />
        <div className="container-full grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div>
            <h2 className="h-section text-balance text-bo-dark">
              {c.formations.eyebrow}
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
      <section className="py-8 md:py-12">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">Envie d&apos;échanger autour d&apos;une idée&nbsp;?</h2>
          <p className="lead mt-4">{c.cta.lead}</p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
