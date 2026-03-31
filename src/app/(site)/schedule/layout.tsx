import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "View our online class schedule. Class days and times are TBA.",
  openGraph: {
    title: "Schedule - Tahawiyyah Institute",
    description:
      "Fully online program with flexible learning that accommodates different schedules and time zones.",
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

