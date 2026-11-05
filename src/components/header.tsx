"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { nav } from "@/content/site";
import { buttonClass, StarMark } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-30 border-b border-line bg-night"
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-4 py-2.5"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 font-display text-[22px] font-extrabold tracking-[-0.02em] text-ink"
        >
          <span className="text-accent">
            <StarMark />
          </span>
          TC Hacks
        </Link>

        <div className="order-3 flex w-full gap-0.5 overflow-x-auto md:order-none md:w-auto">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative isolate whitespace-nowrap rounded-lg px-3 py-2.5 text-[15px] transition-[color,transform] duration-150 active:scale-95",
                  active ? "font-bold text-accent" : "font-medium text-ink hover:text-accent",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-tint"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {item.label}
                {!active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-1.5 h-0.5 origin-left scale-x-0 rounded bg-accent transition-transform duration-200 group-hover:scale-x-100"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link href="/#updates" className={buttonClass("primary", "sm")}>
          Get updates
        </Link>
      </nav>
    </header>
  );
}
