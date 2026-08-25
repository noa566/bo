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

      <section className="py-7 md:py-9">
        <div className="container-prose">
          <div className="text-center mb-8">
            <span className="eyebrow">Mes domaines de prédilection</span>
            <h2 className="h-section mt-3 text-balance">
              Des formations adaptées à vos enjeux
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Communication et posture",
                text: "Renforcer sa posture, communiquer avec clarté, trouver un équilibre entre affirmation et coopération.",
              },
              {
                title: "Coopération et dynamique d'équipe",
                text: "Développer la confiance, renforcer la collaboration et favoriser l'engagement collectif.",
              },
              {
                title: "Organisation et efficacité",
                text: "Clarifier les priorités, optimiser les modes de travail et gagner en efficacité.",
              },
              {
                title: "Développement et adaptation",
                text: "Mobiliser ses ressources, développer ses compétences et accompagner le changement.",
              },
            ].map((d, i) => {
              const colorIdx = i === 2 ? 3 : i === 3 ? 2 : i;
              return (
                <Reveal key={i} variant="up" delay={(i % 2) * 100}>
                  <li className="relative overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 p-6 transition-all duration-300 hover:border-bo/40 hover:shadow-lg hover:-translate-y-0.5 h-full">
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

      <section className="py-5 md:py-7 bg-accent-100/40">
        <div className="container-prose">
          <QuoteBlock quote={c.quote.text} author={c.quote.author} />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">Envie d&apos;échanger sur vos objectifs&nbsp;?</h2>
          <p className="lead mt-4">Construisons ensemble une intervention sur mesure</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
