import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Boris Lazzarotto pour réserver une séance fondation ou en savoir plus sur les accompagnements.",
};

export default async function ContactPage() {
  const c = await getPageContent("contact");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-8 md:py-12">
        <div className="container-full grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="h-section text-balance text-bo-dark">Formulaire de contact</h2>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <aside className="order-1 lg:order-2 lg:sticky lg:top-32 space-y-4">
            <div className="rounded-3xl bg-gradient-to-br from-bo to-bo-dark p-7 md:p-8 text-sand-50">
              <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight mb-5 text-sand-50">{c.details.title}</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${c.details.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sand-50/15 flex items-center justify-center shrink-0 group-hover:bg-sand-50/25 transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-sand-50"
                    >
                      <path
                        d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sand-50/70 mb-1">
                      Email
                    </p>
                    <p className="text-sm group-hover:underline underline-offset-4 break-all">
                      {c.details.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${c.details.phoneHref}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sand-50/15 flex items-center justify-center shrink-0 group-hover:bg-sand-50/25 transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-sand-50"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sand-50/70 mb-1">
                      Téléphone
                    </p>
                    <p className="text-sm group-hover:underline underline-offset-4">
                      {c.details.phone}
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/borislazzarotto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sand-50/15 flex items-center justify-center shrink-0 group-hover:bg-sand-50/25 transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-sand-50"
                    >
                      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sand-50/70 mb-1">
                      LinkedIn
                    </p>
                    <p className="text-sm group-hover:underline underline-offset-4 break-all">
                      /in/borislazzarotto
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sand-50/15 flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-sand-50"
                    >
                      <path
                        d="M12 22s-8-7.58-8-13a8 8 0 0 1 16 0c0 5.42-8 13-8 13z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sand-50/70 mb-1">
                      Lieu
                    </p>
                    <p className="text-sm">
                      {c.details.locationTitle}
                      <br />
                      <span className="text-sand-50/70">
                        {c.details.locationDetail}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
