"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";

const marketingPages = ["/", "/program", "/curriculum", "/schedule", "/teachers"];

export function MobileStickyCTA() {
  const pathname = usePathname();
  const isMarketingPage = marketingPages.includes(pathname);

  if (!isMarketingPage) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-[rgba(247,245,240,0.97)] backdrop-blur-md shadow-lg md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <ButtonLink
          href="/apply"
          variant="primary"
          size="md"
          className="w-full"
          aria-label="Apply Now - Mobile CTA"
        >
          Apply Now
        </ButtonLink>
      </div>
    </div>
  );
}
