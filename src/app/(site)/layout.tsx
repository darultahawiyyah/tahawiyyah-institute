import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: {
    template: "%s | Tahawiyyah Institute",
    default: "Tahawiyyah Institute - Islamic Studies Program",
  },
  description:
    "Comprehensive 2-year Islamic studies program covering Fiqh, Aqidah, Hadith, Tafsir, Tajwid, and Arabic. Fully online program.",
  openGraph: {
    title: "Tahawiyyah Institute - Islamic Studies Program",
    description:
      "Comprehensive 2-year Islamic studies program covering Fiqh, Aqidah, Hadith, Tafsir, Tajwid, and Arabic. Fully online.",
    type: "website",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-0">{children}</main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
