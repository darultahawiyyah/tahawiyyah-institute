import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
