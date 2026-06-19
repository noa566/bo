type Props = {
  /** Kept for backwards compatibility with stored Firestore content but no longer rendered. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="relative pt-24 bg-gradient-to-b from-sand-100/50 to-transparent">
      <div className="container-prose py-12 md:py-16 text-center animate-fade-in-up">
        <h1 className="h-display text-balance">{title}</h1>
        {subtitle && (
          <p className="lead mt-4 max-w-2xl mx-auto text-balance">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
