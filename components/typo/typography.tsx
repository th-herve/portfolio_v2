import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance font-pixel",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyP({ children, className }: Props) {
  return <p className={cn("leading-7 font-mono", className)}>{children}</p>;
}

