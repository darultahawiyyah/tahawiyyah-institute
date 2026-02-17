import * as React from "react";
import { cn } from "@/lib/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn("border-t border-border", className)}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider };



