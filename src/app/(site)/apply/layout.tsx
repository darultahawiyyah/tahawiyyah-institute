import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to our comprehensive 2-year Islamic studies program. Fill out the application form and take the first step towards deepening your Islamic knowledge.",
  openGraph: {
    title: "Apply - Tahawiyyah Institute",
    description:
      "Take the first step towards deepening your Islamic knowledge. Applications are now open for April 2025.",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


