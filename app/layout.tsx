import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bo Coaching — Coaching et formation à Genève",
    template: "%s | Bo Coaching",
  },
  description:
    "Boris Lazzarotto, coach professionnel et formateur à Genève. Coaching personnel, coaching d'équipe et formations pour révéler votre potentiel.",
  keywords: [
    "coaching",
    "coaching Genève",
    "coaching d'équipe",
    "formation",
    "Boris Lazzarotto",
    "développement personnel",
  ],
  authors: [{ name: "Boris Lazzarotto" }],
  openGraph: {
    title: "Bo Coaching — Coaching et formation à Genève",
    description:
      "Coaching personnel et d'équipe, formations pour révéler votre potentiel.",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
