/**
 * Dégradés circulaires flottants placés en arrière-plan du site.
 * Placé dans le layout `(site)` pour couvrir navbar + contenu sans coupure.
 * Le parent doit être `relative` (et idéalement `overflow-x-clip`).
 * Les halos se répartissent sur toute la hauteur via des `top` en %, donc
 * s'adaptent automatiquement aux pages longues ou courtes.
 */
export default function PageHalos() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {/* Bo (terracotta) — gauche, haut (position fixe pour rester visible sous la navbar) */}
      <div className="absolute top-28 -left-24 h-72 w-72 rounded-full bg-bo/35 halo animate-float-slow" />
      {/* Accent (violet) — droite, haut */}
      <div className="absolute top-[18%] -right-28 h-80 w-80 rounded-full bg-accent-300/60 halo animate-float" />
      {/* Sage (vert) — gauche, milieu */}
      <div className="absolute top-[40%] -left-20 h-72 w-72 rounded-full bg-sage-300/55 halo animate-float-slow" />
      {/* Joy (doré) — droite, milieu-bas */}
      <div className="absolute top-[58%] -right-24 h-64 w-64 rounded-full bg-joy-300/60 halo animate-pulse-soft" />
      {/* Bo — gauche, bas (avant le footer terracotta : on reste sur cette teinte) */}
      <div className="absolute top-[80%] -left-24 h-64 w-64 rounded-full bg-bo/28 halo animate-float" />
    </div>
  );
}
