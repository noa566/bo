"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/coach", label: "Votre coach et formateur" },
  { href: "/le-coaching", label: "Le coaching ?" },
  { href: "/coaching", label: "Coaching personnel et d'équipe" },
  { href: "/formation", label: "Formation" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/90 backdrop-blur-md border-b border-sand-200/60"
          : "bg-sand-100/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container-full flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Bo Coaching - Accueil"
        >
          <Image
            src="/logo.png"
            alt="Bo Coaching"
            width={140}
            height={56}
            priority
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-bo-dark font-medium"
                      : "text-ink-soft hover:text-bo-dark"
                  }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-bo origin-left transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="container-full flex flex-col gap-1 pb-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-base transition-colors ${
                    isActive
                      ? "bg-bo/10 text-bo-dark font-medium"
                      : "text-ink-soft hover:bg-sand-200/60"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
