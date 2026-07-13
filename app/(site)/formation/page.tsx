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
  title: "Formation",
  description:
    "Formations sur mesure pour faire évoluer les pratiques, réaliser le potentiel et renforcer la dynamique d'équipe.",
};

export default async function FormationPage() {
  const c = await getPageContent("formation");

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
                <div className="absolute -inset-4 bg-sage-200/50 rounded-[2.5rem] blur-2xl" />
                <Image
                  src="/illustrations/growth.png"
                  alt="Illustration de la croissance : de la graine à l'arbre florissant"
                  width={600}
                  height={400}
                  className="relative rounded-[2rem] w-full h-auto shadow-lg border border-sand-200"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-y border-sand-200">
        <div className="container-full">
          <div className="text-center mb-10">
            <span className="eyebrow">{c.expertises.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">{c.expertises.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.expertises.items.map((e, i) => {
              const colors = [
                {
                  number: "text-bo",
                  border: "hover:border-bo/40",
                  bg: "bg-sand-50",
                },
                {
                  number: "text-accent-500",
                  border: "hover:border-accent-300",
                  bg: "bg-accent-50",
                },
                {
                  number: "text-sage-600",
                  border: "hover:border-sage-400",
                  bg: "bg-sage-50",
                },
              ];
              const c2 = colors[i % colors.length]!;
              return (
                <Reveal key={i} variant="up" delay={i * 120}>
                <div
                  className={`relative overflow-hidden rounded-2xl border border-sand-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full ${c2.bg} ${c2.border}`}
                >
                  <CardTopBar index={i} />
                  <div className={`font-serif text-3xl mb-3 ${c2.number}`}>
                    0{i + 1}
                  </div>
                  <h3 className="font-sans text-lg md:text-xl font-semibold tracking-tight mb-3">
                    {e.title}
                  </h3>
                  <p className="body-text text-[15px]">{e.text}</p>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-full grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">{c.applications.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">
              {c.applications.title}
            </h2>
            <p className="body-text mt-4">{c.applications.intro}</p>
          </div>

          <ul className="space-y-4">
            {c.applications.items.map((a, i) => (
              <Reveal key={i} variant="right" delay={i * 90}>
              <li
                className="relative overflow-hidden rounded-2xl border border-sand-200 bg-white p-6 md:p-7 hover:border-bo/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <CardTopBar index={i} />
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-xl text-bo-dark shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-base md:text-lg font-semibold tracking-tight mb-2">
                      {a.title}
                    </h3>
                    <p className="body-text text-[15px]">{a.text}</p>
                  </div>
                </div>
              </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-5 md:py-7 bg-accent-100/40">
        <div className="container-prose">
          <QuoteBlock quote={c.quote.text} author={c.quote.author} />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">{c.cta.title}</h2>
          <p className="lead mt-4">{c.cta.lead}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              {c.cta.primaryButton}
            </Link>
            <Link href="/tarifs" className="btn-secondary">
              {c.cta.secondaryButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
