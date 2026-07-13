"use client";

import { useEffect, useRef } from "react";

/**
 * Citation sur une seule ligne, centrée sur toute la largeur de l'écran.
 * La taille de police n'est réduite que le minimum nécessaire pour tenir
 * sans déborder.
 */
export default function AutoFitQuote({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const maxSize = window.innerWidth >= 768 ? 30 : 24;
      const minSize = 15;
      const sidePadding = window.innerWidth >= 768 ? 48 : 24;
      const available = window.innerWidth - sidePadding * 2;

      el.style.fontSize = `${maxSize}px`;

      // Mesure hors flux pour obtenir la largeur réelle du texte
      const needed = el.scrollWidth;
      if (needed > available && available > 0) {
        const next = Math.max(
          minSize,
          Math.floor((maxSize * available) / needed),
        );
        el.style.fontSize = `${next}px`;
      }
    };

    // Attendre le chargement des polices pour une mesure correcte
    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    } else {
      fit();
    }

    const ro = new ResizeObserver(fit);
    ro.observe(document.documentElement);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [text]);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 px-6 md:px-12">
      <blockquote
        ref={ref}
        className="mx-auto block w-full text-center font-serif italic leading-relaxed text-accent-700 whitespace-nowrap"
        style={{ fontSize: 30 }}
      >
        «{"\u202F"}
        {text}
        {"\u202F"}»
      </blockquote>
    </div>
  );
}
