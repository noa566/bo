import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/coach", label: "Votre coach et formateur" },
  { href: "/le-coaching", label: "Le coaching ?" },
  { href: "/coaching", label: "Coaching personnel et d'équipe" },
  { href: "/formation", label: "Formation" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-bo text-sand-50">
      <div className="container-full py-7 md:py-9 grid gap-8 md:gap-10 md:grid-cols-3">
        <div>
          <span className="inline-flex items-center rounded-xl bg-sand-50 px-4 py-2.5 mb-4 shadow-sm">
            <Image
              src="/logo.png"
              alt="Bo Coaching"
              width={140}
              height={56}
              className="h-9 w-auto"
            />
          </span>
          <p className="text-sm leading-relaxed text-sand-50/80 max-w-xs">
            Coaching personnel, coaching d'équipe et formations pour révéler
            votre potentiel.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-4 text-sand-50">Menu</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sand-50/80 hover:text-sand-50 hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-4 text-sand-50">Contact</h4>
          <ul className="space-y-2 text-sm text-sand-50/90">
            <li>
              <a
                href="mailto:lazzarotto.coaching@gmail.com"
                className="hover:underline underline-offset-4"
              >
                lazzarotto.coaching@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+41792927854"
                className="hover:underline underline-offset-4"
              >
                +41 (0)79 292 78 54
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/borislazzarotto/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline underline-offset-4"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li className="pt-2 text-sand-50/70">Genève, Suisse</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-50/15">
        <div className="container-full py-5 text-center text-xs text-sand-50/70">
          © {year} Bo Coaching. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
