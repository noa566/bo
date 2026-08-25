import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteBlock from "@/components/QuoteBlock";
import Reveal from "@/components/Reveal";
import CardTopBar from "@/components/CardTopBar";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Le coaching ?",
  description:
    "Le coaching, un processus de changement au service de vos objectifs personnels ou professionnels.",
};

export default async function LeCoachingPage() {
  const c = await getPageContent("leCoaching");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-6 md:py-8">
        <div className="container-prose">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <Reveal variant="left">
              <span className="eyebrow">{c.whatIs.eyebrow}</span>
              <p className="body-text mt-3">{c.whatIs.text}</p>
            </Reveal>
            <Reveal variant="right" className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-200/50 rounded-[2.5rem] blur-2xl" />
                <Image
                  src="/illustrations/coaching-journey.png"
                  alt="Illustration d'une personne sur un chemin vers le soleil levant"
                  width={1536}
                  height={1024}
                  className="relative rounded-[2rem] w-full h-auto shadow-lg border border-sand-200"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-7 md:py-9">
        <div className="container-prose">
          <div className="text-center mb-8">
            <span className="eyebrow">{c.domains.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">{c.domains.title}</h2>
          </div>
          <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
            {c.domains.items.map((item, i) => {
              const d =
                i === 5
                  ? {
                      title: "Cultiver son jardin",
                      text: "Quand nos ressources ont besoin d'être nourries pour fleurir.",
                    }
                  : item;
              const colorIdx = i === 2 ? 3 : i === 3 ? 2 : i;
              return (
              <Reveal key={i} variant="up" delay={(i % 2) * 100} className="shrink-0 basis-[78%] snap-start md:basis-auto">
              <li
                className="relative overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 p-6 transition-all duration-300 hover:border-bo/40 hover:shadow-lg hover:-translate-y-0.5 h-full"
              >
                <CardTopBar index={colorIdx} />
                <h3 className="font-sans text-base md:text-lg font-semibold tracking-tight mt-2 mb-2">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft italic">
                  {d.text}
                </p>
              </li>
              </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container-prose">
          <span className="eyebrow">{c.deontology.eyebrow}</span>
          <h2 className="h-sub mt-3 text-balance">{c.deontology.headline}</h2>
          <p className="body-text mt-4">{c.deontology.paragraph}</p>
        </div>
      </section>

      <section className="relative isolate py-7 md:py-10 bg-sand-100/60">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 left-0 md:left-[8%] h-72 w-72 -translate-y-1/2 rounded-full bg-accent-300/50 halo animate-float-slow -z-10"
        />
        <div className="container-prose">
          <span className="eyebrow">{c.process.eyebrow}</span>
          <h2 className="h-section mt-3 text-balance">{c.process.title}</h2>

          <ol className="mt-6 relative space-y-4">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-accent-200 hidden md:block" />

            {c.process.steps.map((step, i) => {
              const stepColors = [
                "bg-bo text-white",
                "bg-joy-500 text-bo-dark",
                "bg-sage-600 text-white",
              ];
              return (
                <Reveal key={i} variant="left" delay={i * 140}>
                <li className="grid md:grid-cols-[40px_1fr] gap-4 md:gap-8">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center transition-transform hover:scale-110 ${
                        stepColors[i % stepColors.length]
                      }`}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg md:text-xl font-semibold tracking-tight mb-2">{step.title}</h3>
                    <p className="body-text">{step.text}</p>
                  </div>
                </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="py-5 md:py-7 bg-accent-100/40">
        <div className="container-prose">
          <QuoteBlock quote={c.quote.text} author={c.quote.author} />
        </div>
      </section>

      <section className="py-7 md:py-9">
        <div className="container-prose">
          <div className="text-center">
            <h2 className="h-section text-balance">Envie d&apos;échanger autour d&apos;une idée&nbsp;?</h2>
            <p className="lead mt-4">Donnons vie ensemble à un projet qui vous ressemble</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
