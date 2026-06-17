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
    <footer className="bg-bo text-sand-50 mt-16">
      <div className="container-full py-10 md:py-12 grid gap-8 md:gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/logo-white.svg"
            alt="Bo Coaching"
            width={140}
            height={56}
            className="h-14 w-auto mb-4"
          />
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
