/** Bandeaux dégradés — chaque entrée doit rester visuellement distincte. */
export const BAR_GRADIENTS = [
  "from-bo via-bo-light to-joy-400",
  "from-accent-700 via-accent-500 to-accent-300",
  "from-joy-600 via-joy-400 to-joy-200",
  "from-sage-700 via-sage-500 to-sage-300",
  "from-bo-dark via-accent-500 to-accent-200",
  "from-accent-600 via-joy-400 to-bo-light",
  "from-sage-600 via-joy-300 to-joy-100",
  "from-joy-500 via-sage-400 to-accent-400",
] as const;

export const BAR_NUMBER_COLORS = [
  "text-bo-dark",
  "text-accent-600",
  "text-joy-600",
  "text-sage-700",
  "text-bo",
  "text-accent-500",
  "text-sage-600",
  "text-joy-500",
] as const;

type Props = {
  index?: number;
  className?: string;
};

/** Fine bandeau dégradé en haut d'une carte (option design 2). */
export default function CardTopBar({ index = 0, className = "" }: Props) {
  const gradient = BAR_GRADIENTS[index % BAR_GRADIENTS.length];
  return (
    <div
      aria-hidden
      className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${gradient} ${className}`}
    />
  );
}
