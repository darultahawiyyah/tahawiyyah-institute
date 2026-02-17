import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "View our online class schedule. Classes held Monday & Wednesday evenings via virtual sessions.",
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

