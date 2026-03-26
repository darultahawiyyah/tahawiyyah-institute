import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Explore our comprehensive 2-year curriculum covering six core Islamic sciences: Fiqh, Aqidah, Hadith, Tafsir, Tajwid, and Arabic. Learn about each subject and its instructor.",
  openGraph: {
    title: "Curriculum - Tahawiyyah Institute",
    description:
      "A comprehensive 2-year program covering six core Islamic sciences with dedicated instructors for each subject.",
  },
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
