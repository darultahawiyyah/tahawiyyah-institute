import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tahawiyyah Institute",
    default: "Tahawiyyah Institute - Islamic Studies Program",
  },
  description:
    "Comprehensive 2-year Islamic studies program covering Fiqh, Aqidah, Tafsir, Tajwid, and Arabic. Study with qualified scholars in a structured curriculum.",
  openGraph: {
    title: "Tahawiyyah Institute - Islamic Studies Program",
    description:
      "Comprehensive 2-year Islamic studies program covering Fiqh, Aqidah, Tafsir, Tajwid, and Arabic.",
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
        className={`${inter.variable} ${lora.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
