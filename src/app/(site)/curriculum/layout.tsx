import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Explore our comprehensive 2-year curriculum structured across four semesters. Detailed course breakdown by year and semester with subject lists and required texts.",
  openGraph: {
    title: "Curriculum - Tahawiyyah Institute",
    description:
      "A comprehensive 2-year program structured across four semesters, covering essential Islamic sciences with progressive depth.",
  },
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


