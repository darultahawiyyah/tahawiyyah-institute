"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | "auto">("auto");

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          "hover:text-gold"
        )}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <span className="text-lg font-semibold text-text md:text-xl">
          {title}
        </span>
        <svg
          className={cn(
            "h-5 w-5 text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`accordion-content-${title}`}
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        style={{
          height: typeof height === "number" ? `${height}px` : height,
        }}
        aria-hidden={!isOpen}
      >
        <div className="pb-4 text-base leading-relaxed text-muted md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("space-y-0 rounded-2xl border border-border bg-surface p-6 md:p-8", className)}>
      {children}
    </div>
  );
}



