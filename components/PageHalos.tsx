/**
 * Dégradés circulaires flottants placés en arrière-plan d'une page.
 * Le parent doit être `relative` (et idéalement `overflow-x-clip`).
 * Les halos se répartissent sur toute la hauteur via des `top` en %, donc
 * s'adaptent automatiquement aux pages longues ou courtes.
 */
export default function PageHalos() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Bo (terracotta) — gauche, haut */}
      <div className="absolute top-[4%] -left-24 h-72 w-72 rounded-full bg-bo/20 halo animate-float-slow" />
      {/* Accent (violet) — droite, haut */}
      <div className="absolute top-[18%] -right-28 h-80 w-80 rounded-full bg-accent-200/45 halo animate-float" />
      {/* Sage (vert) — gauche, milieu */}
      <div className="absolute top-[40%] -left-20 h-72 w-72 rounded-full bg-sage-200/45 halo animate-float-slow" />
      {/* Joy (doré) — droite, milieu-bas */}
      <div className="absolute top-[58%] -right-24 h-64 w-64 rounded-full bg-joy-200/50 halo animate-pulse-soft" />
      {/* Bo — gauche, bas (avant le footer terracotta : on reste sur cette teinte) */}
      <div className="absolute top-[80%] -left-24 h-64 w-64 rounded-full bg-bo/15 halo animate-float" />
    </div>
  );
}
