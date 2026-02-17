import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tahawiyyah Institute. Contact us via email for questions about our Islamic studies program, or apply directly for enrollment.",
  openGraph: {
    title: "Contact - Tahawiyyah Institute",
    description:
      "Get in touch with Tahawiyyah Institute. Contact us via email or apply directly for enrollment.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

