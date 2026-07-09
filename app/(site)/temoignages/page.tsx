import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CardTopBar from "@/components/CardTopBar";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Ce qu'ils en disent : témoignages de personnes accompagnées par Boris Lazzarotto en coaching et en formation.",
};

export default async function TemoignagesPage() {
  const c = await getPageContent("temoignages");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-12 md:py-16">
        <div className="container-full">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {c.testimonials.map((t, i) => {
              const isLastAlone =
                i === c.testimonials.length - 1 && !t.long;
              return (
              <Reveal
                key={i}
                variant="up"
                delay={(i % 4) * 100}
                as="div"
                className={t.long || isLastAlone ? "md:col-span-2" : ""}
              >
              <figure
                className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 md:p-8 hover:shadow-xl hover:border-bo/30 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <CardTopBar index={i} />
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="absolute top-6 right-6 text-bo/30"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
                </svg>

                <blockquote className="body-text italic pr-10">
                  « {t.text} »
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-sand-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-bo to-accent-400 flex items-center justify-center text-white text-sm font-medium">
                    {(t.author || "—")
                      .split(" ")[0]
                      .replace(/[.,]/g, "")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <span className="font-medium text-ink">{t.author}</span>
                </figcaption>
              </figure>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-16 md:right-[8%] h-80 w-80 translate-y-1/2 rounded-full bg-accent-300/55 halo animate-float-slow -z-10"
      />
    </>
  );
}
