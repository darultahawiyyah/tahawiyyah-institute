"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    // Close mobile menu when route changes
    closeMobileMenu();
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 h-[72px] backdrop-blur-md",
          isMobileMenuOpen 
            ? "bg-[rgba(11,13,16,0.95)]" 
            : "bg-[rgba(11,13,16,0.7)] border-b border-border"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <Container className="flex h-full items-center justify-between">
          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Image
              src="/logo.svg"
              alt="Tahawiyyah Institute Logo"
              width={160}
              height={160}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
            <div className="flex items-baseline gap-1 text-xl font-semibold text-text">
              <span>Tahawiyyah</span>
              <span className="text-gold">Institute</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    "hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                    isActive
                      ? "text-gold border-b-2 border-gold pb-1"
                      : "text-text"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink href="/apply" variant="primary" size="sm">
              Apply Now
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex flex-col gap-1.5 p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-text transition-all duration-300",
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-text transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-text transition-all duration-300",
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </Container>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed left-0 right-0 top-0 bottom-0 z-[60] md:hidden overflow-y-auto",
          isMobileMenuOpen
            ? "block"
            : "hidden"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="relative px-4 md:px-6 py-6">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft mt-6 mb-6">
            <h2 id="mobile-menu-title" className="sr-only">
              Mobile navigation menu
            </h2>
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-base font-medium transition-colors",
                      "hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                      isActive ? "text-gold" : "text-text"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <ButtonLink
                  href="/apply"
                  variant="primary"
                  size="md"
                  onClick={closeMobileMenu}
                  className="w-full"
                >
                  Apply Now
                </ButtonLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
