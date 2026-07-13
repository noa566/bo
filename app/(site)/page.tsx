import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CardTopBar from "@/components/CardTopBar";
import QuoteBlock from "@/components/QuoteBlock";
import { getHomeContent } from "@/lib/content";

export const dynamic = "force-dynamic";

const SERVICE_ICONS = [
  (
    <svg
      key="personal"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-bo-dark"
    >
      <path
        d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg
      key="team"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-accent-600"
    >
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5M2.5 20c0-2 1.1-3.7 3-4.4M21.5 20c0-2-1.1-3.7-3-4.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (
    <svg
      key="training"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-sage-700"
    >
      <path
        d="M3 7l9-4 9 4-9 4-9-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M21 7v6M7 9v5c0 1.5 2.2 3 5 3s5-1.5 5-3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

const SERVICE_LINKS = ["/coaching", "/coaching", "/formation"];
const SERVICE_BUBBLE_CLASSES = [
  "bg-bo/15 group-hover:bg-bo/25",
  "bg-accent-100 group-hover:bg-accent-200",
  "bg-sage-100 group-hover:bg-sage-200",
];

const STAT_COLORS = ["text-bo-dark", "text-accent-600", "text-sage-700"];

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 bg-gradient-to-b from-sand-100/50 via-transparent to-transparent">
        <div className="container-full grid lg:grid-cols-2 gap-8 lg:gap-10 items-center pt-7 md:pt-10 pb-5 md:pb-6 relative">
          <div className="animate-fade-in-up">
            <span className="eyebrow mb-3">{content.hero.eyebrow}</span>
            <h1 className="h-display not-italic mt-3 text-balance">
              {content.hero.titleStart}{" "}
              <span className="whitespace-nowrap">
                <span style={{ color: "#E91E9A" }}>
                  {content.hero.titleAccent}
                </span>
                {content.hero.titleEnd}
              </span>
            </h1>
            <p className="lead mt-5 max-w-xl text-balance">
              {content.hero.lead}
            </p>
            <dl className="mt-7 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "COACH", label: "certifié" },
                { value: "PRATICIEN", label: "PNL" },
                { value: "FORMATEUR", label: "FSEA" },
              ].map((stat, idx) => (
                <Reveal
                  key={idx}
                  variant="up"
                  delay={150 + idx * 120}
                  as="div"
                >
                  <dt
                    className={`font-serif text-lg ${
                      STAT_COLORS[idx % STAT_COLORS.length]
                    }`}
                  >
                    {stat.value}
                  </dt>
                  <dd className="text-xs text-ink-muted mt-1">{stat.label}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 bg-accent-200/55 rounded-[3rem] blur-2xl animate-pulse-soft" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-sand-200 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src="/illustrations/coaching-crossroads.png"
                alt="Illustration de deux personnes à la croisée de trois chemins"
                width={1200}
                height={800}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION / PHILOSOPHIE */}
      <section className="py-7 md:py-10">
        <Reveal variant="up" className="container-prose text-center" as="div">
          <span className="eyebrow">{content.philosophy.eyebrow}</span>
          <div className="mt-5">
            <QuoteBlock
              quote={content.philosophy.quote.replace(/^«\s*|\s*»$/g, "")}
              author=""
            />
          </div>
        </Reveal>
      </section>

      {/* 3 PRESTATIONS */}
      <section className="relative isolate py-7 md:py-10 bg-white border-y border-sand-200">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 right-0 md:right-[6%] h-72 w-72 -translate-y-1/2 rounded-full bg-accent-300/50 halo animate-float-slow -z-10"
        />
        <div className="container-full">
          <Reveal
            variant="up"
            className="text-center max-w-2xl mx-auto mb-7 md:mb-8"
            as="div"
          >
            <span className="eyebrow">{content.services.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">
              {content.services.title}
            </h2>
            <p className="body-text mt-4">{content.services.intro}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {content.services.items.map((item, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 120} as="div">
                <Link
                  href={SERVICE_LINKS[idx] ?? "/coaching"}
                  className="card group block h-full"
                >
                  <CardTopBar index={idx} />
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${SERVICE_BUBBLE_CLASSES[idx]}`}
                  >
                    {SERVICE_ICONS[idx]}
                  </div>
                  <h3 className="h-sub mb-3">{item.title}</h3>
                  <p className="body-text mb-5">{item.description}</p>
                  <span className="btn-ghost">
                    {item.cta}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10m-4-4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="py-7 md:py-10">
        <div className="container-full grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <Reveal variant="left" className="order-2 lg:order-1 relative" as="div">
            <div className="absolute -inset-4 bg-bo/20 rounded-[2.5rem] blur-2xl animate-pulse-soft" />
            <Image
              src="/illustrations/coaching.png"
              alt="Illustration d'une conversation de coaching"
              width={800}
              height={800}
              className="relative rounded-[2rem] w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </Reveal>
          <Reveal variant="right" className="order-1 lg:order-2" as="div">
            <span className="eyebrow">{content.approach.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">
              {content.approach.title}
            </h2>
            <p className="body-text mt-5">{content.approach.paragraph1}</p>
            <p className="body-text mt-3">{content.approach.paragraph2}</p>
            <div className="mt-6">
              <Link href="/coach" className="btn-secondary">
                {content.approach.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CITATION */}
      <section className="py-5 md:py-7 bg-accent-100/40">
        <Reveal variant="scale" className="container-prose" as="div">
          <QuoteBlock
            quote={content.citation.quote}
            author={content.citation.author}
          />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-7 md:py-10">
        <Reveal variant="up" className="container-prose" as="div">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-bo via-bo to-bo-dark px-8 md:px-14 py-8 md:py-12 text-center text-sand-50 shadow-xl bg-[length:200%_200%] animate-gradient-shift">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-joy-400/45 halo animate-float"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-accent-400/35 halo animate-float-slow"
            />
            <h2 className="relative font-sans text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-balance text-sand-50">
              Prêt à faire le premier pas ?
            </h2>
            <p className="relative mt-4 text-sand-50/90 max-w-xl mx-auto text-balance">
              Parlons-en ensemble pour construire une intervention sur mesure.
            </p>
            <div className="relative mt-6">
              <Link
                href="/contact"
                className="shine-on-hover inline-flex items-center gap-2 rounded-full bg-sand-50 px-8 py-4 text-sm font-medium text-bo-dark transition-all hover:bg-white hover:-translate-y-0.5 shadow-md"
              >
                Me contacter
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10m-4-4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
