import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Learn about our comprehensive 2-year Islamic studies program covering Fiqh, Aqidah, Hadith, Tafsir, Tajwid, and Arabic. Discover program objectives, structure, and outcomes.",
  openGraph: {
    title: "Program - Tahawiyyah Institute",
    description:
      "Comprehensive 2-year Islamic studies program designed to deepen your understanding of Islamic sciences through structured learning.",
  },
};

export default function ProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


