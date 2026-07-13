import AutoFitQuote from "./AutoFitQuote";

type Props = {
  quote: string;
  author: string;
  /** Grande citation de section (défaut) ou compacte dans une carte */
  variant?: "section" | "inline" | "centered";
  /** Affiche l’icône guillemets (variant section uniquement) */
  showIcon?: boolean;
};

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
    </svg>
  );
}

export default function QuoteBlock({
  quote,
  author,
  variant = "section",
  showIcon = true,
}: Props) {
  const resolved = variant === "centered" ? "section" : variant;

  if (resolved === "inline") {
    return (
      <figure className="quote-block">
        <blockquote className="font-serif text-base italic leading-relaxed">
          «{"\u202F"}
          {quote}
          {"\u202F"}»
        </blockquote>
        <figcaption className="quote-author">{author}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="relative flex flex-col items-center justify-center text-center min-h-[5.5rem] md:min-h-[6.5rem]">
      {showIcon && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <QuoteIcon className="text-accent-400 animate-float-fast" />
        </div>
      )}
      <div className={showIcon ? "pt-8" : undefined}>
        <AutoFitQuote text={quote} />
        {author && (
          <figcaption className="mt-2 text-sm text-accent-600 italic">
            {author}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
