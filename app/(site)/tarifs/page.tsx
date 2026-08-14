import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CardTopBar from "@/components/CardTopBar";
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

      <section className="py-8 md:py-12">
        <div className="container-full">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {c.plans.map((p, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 150} as="div">
              <article
                className={`relative overflow-hidden rounded-3xl p-7 md:p-9 transition-all duration-300 h-full ${
                  p.highlight
                    ? "bg-gradient-to-br from-bo via-bo to-bo-dark text-sand-50 shadow-xl scale-100 md:scale-[1.04] bg-[length:200%_200%] animate-gradient-shift hover:-translate-y-1 hover:shadow-2xl"
                    : "bg-white border border-sand-200 hover:border-bo/40 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {!p.highlight && <CardTopBar index={idx} />}
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

              </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 grid gap-6 max-w-2xl mx-auto">
            <Reveal
              variant="up"
              className="relative overflow-hidden rounded-2xl bg-accent-100/50 border border-accent-200 p-7 transition-all hover:shadow-lg hover:border-accent-300 h-full"
              as="div"
            >
              <CardTopBar index={2} />
              <h3 className="font-sans text-lg md:text-xl font-semibold tracking-tight mb-3">
                Comment je travaille
              </h3>
              <ul className="space-y-2 text-sm text-ink-soft leading-relaxed">
                {[
                  "Réponse sous 48h ouvrées",
                  "Contact téléphonique ou par email",
                  "Première séance fondation sans engagement",
                  "Confidentialité garantie",
                  "En présentiel ou en visio",
                ].map((item, i) => (
                  <li key={i}>· {item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">Envie d&apos;échanger autour d&apos;une idée&nbsp;?</h2>
          <p className="lead mt-4">Construisons ensemble un projet qui vous ressemble</p>
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
