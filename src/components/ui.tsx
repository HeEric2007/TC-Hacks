import { ViewTransition, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-soft",
  outline: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-on-accent",
  light: "bg-ink text-on-accent hover:bg-accent-soft",
};

/** Shared button styling for <Link>, <a> and <button>. */
export function buttonClass(variant: Variant = "primary", size: "md" | "sm" = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[10px] font-bold",
    "transition-[background-color,color,transform] duration-150 hover:-translate-y-px active:scale-[0.97]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "motion-reduce:transform-none motion-reduce:transition-none",
    size === "md" ? "min-h-12 px-[22px] text-[15px]" : "min-h-11 px-[18px] text-sm",
    variants[variant],
  );
}

/** Wraps a page's content so it fades/slides in when you navigate to it. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <main className="flex-1">{children}</main>
    </ViewTransition>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("text-[13px] font-bold uppercase tracking-[0.12em] text-accent", className)}>{children}</span>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="max-w-[900px] font-display text-[44px] font-extrabold leading-none tracking-[-0.04em] md:text-[68px]">
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[44px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1160px]", className)}>{children}</div>;
}

export function StarMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5 L14.2 9.8 L22.5 12 L14.2 14.2 L12 22.5 L9.8 14.2 L1.5 12 L9.8 9.8 Z" fill="currentColor" />
    </svg>
  );
}

export function PlusIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
