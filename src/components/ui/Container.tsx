import * as React from "react";
import { cn } from "@/lib/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto max-w-6xl px-4 md:px-6", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
