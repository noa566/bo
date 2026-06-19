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
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 2-4.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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
      <section className="relative pt-24 bg-gradient-to-b from-sand-100/50 via-transparent to-transparent">
        <div className="container-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-10 md:py-16 relative">
          <div className="animate-fade-in-up">
            <span className="eyebrow mb-5">{content.hero.eyebrow}</span>
            <h1 className="h-display mt-4 text-balance">
              {content.hero.titleStart}{" "}
              <span className="text-accent-500 italic">
                {content.hero.titleAccent}
              </span>
              {content.hero.titleEnd}
            </h1>
            <p className="lead mt-5 max-w-xl text-balance">
              {content.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary shine-on-hover group">
                {content.hero.ctaPrimary}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
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
              </Link>
              <Link href="/le-coaching" className="btn-secondary">
                {content.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {content.hero.stats.map((stat, idx) => (
                <Reveal
                  key={idx}
                  variant="up"
                  delay={150 + idx * 120}
                  as="div"
                >
                  <dt
                    className={`font-serif text-3xl ${
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
                src="/illustrations/hero.png"
                alt="Illustration d'un chemin vers le soleil levant"
                width={1200}
                height={800}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Indicateur scroll */}
        <div className="hidden md:flex justify-center pb-6">
          <div className="flex flex-col items-center gap-1 text-ink-muted">
            <span className="text-[10px] uppercase tracking-widest">
              Découvrir
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="animate-bounce-soft"
              aria-hidden
            >
              <path
                d="M3 6l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* INTRODUCTION / PHILOSOPHIE */}
      <section className="py-14 md:py-20">
        <Reveal variant="up" className="container-prose text-center" as="div">
          <span className="eyebrow">{content.philosophy.eyebrow}</span>
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mt-5 text-balance text-ink">
            {content.philosophy.quote}
          </p>
          <p className="text-sm text-ink-muted mt-4 italic">
            {content.philosophy.author}
          </p>
        </Reveal>
      </section>

      {/* 3 PRESTATIONS */}
      <section className="py-14 md:py-20 bg-white border-y border-sand-200">
        <div className="container-full">
          <Reveal
            variant="up"
            className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
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
      <section className="py-14 md:py-20">
        <div className="container-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
            <div className="mt-8">
              <Link href="/coach" className="btn-secondary">
                {content.approach.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CITATION */}
      <section className="py-12 md:py-16 bg-accent-100/40">
        <Reveal variant="scale" className="container-prose" as="div">
          <QuoteBlock
            quote={content.citation.quote}
            author={content.citation.author}
          />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <Reveal variant="up" className="container-prose" as="div">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-bo via-bo to-bo-dark px-8 md:px-14 py-12 md:py-16 text-center text-sand-50 shadow-xl bg-[length:200%_200%] animate-gradient-shift">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-joy-400/45 halo animate-float"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-accent-400/35 halo animate-float-slow"
            />
            <h2 className="relative font-sans text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-balance text-sand-50">
              {content.finalCta.title}
            </h2>
            <p className="relative mt-4 text-sand-50/90 max-w-xl mx-auto text-balance">
              {content.finalCta.description}
            </p>
            <div className="relative mt-8">
              <Link
                href="/contact"
                className="shine-on-hover inline-flex items-center gap-2 rounded-full bg-sand-50 px-8 py-4 text-sm font-medium text-bo-dark transition-all hover:bg-white hover:-translate-y-0.5 shadow-md"
              >
                {content.finalCta.button}
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
