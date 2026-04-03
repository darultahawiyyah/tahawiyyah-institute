import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3", centered && "justify-center")}>
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            {eyebrow}
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn("text-base leading-relaxed text-muted md:text-lg", centered ? "mx-auto max-w-2xl" : "max-w-prose")}>
          {description}
        </p>
      )}
    </div>
  );
}
