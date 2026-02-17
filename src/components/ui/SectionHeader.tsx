import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wide text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}



