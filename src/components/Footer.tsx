import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/cn";

const quickLinks = [
  { href: "/program", label: "Program" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/schedule", label: "Schedule" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(11,13,16,0.7)] backdrop-blur-md" role="contentinfo">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {/* Column 1: Logo + Description */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-3 md:items-start">
                <Link
                  href="/"
                  className="flex items-center justify-center md:justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <Image
                    src="/logo.svg"
                    alt="Tahawiyyah Institute Logo"
                    width={160}
                    height={160}
                    className="h-14 md:h-16 w-auto object-contain"
                  />
                </Link>
                <Link
                  href="/"
                  className="flex items-baseline gap-1 text-xl font-semibold text-text transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <span>Tahawiyyah</span>
                  <span className="text-gold">Institute</span>
                </Link>
              </div>
              <p className="max-w-prose text-sm leading-relaxed text-muted text-center md:text-left">
                Empowering students with comprehensive education and training
                programs.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
                Quick Links
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm text-muted transition-colors",
                          "hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:Darultahawiyyah@gmail.com"
                  className={cn(
                    "text-sm text-muted transition-colors",
                    "hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  )}
                >
                  Darultahawiyyah@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider + Copyright */}
          <div className="mt-12 space-y-4 md:mt-16">
            <Divider />
            <p className="text-center text-sm text-muted">
              © {new Date().getFullYear()} Tahawiyyah Institute. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
