"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PlusIcon } from "@/components/ui";
import { cn } from "@/lib/utils";

type Faq = { q: string; a: string; link?: { href: string; label: string } };

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="border-t-[1.5px] border-line-strong">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-4 py-[18px] text-left text-lg font-bold text-ink transition-colors hover:text-accent focus-visible:rounded-md focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.q}
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="shrink-0 text-accent"
                >
                  <PlusIcon />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 0.8, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-[760px] pb-[22px] text-base leading-relaxed text-body")}>
                    {item.a}
                    {item.link && (
                      <>
                        {" "}
                        <Link href={item.link.href} className="font-bold text-accent hover:text-accent-soft">
                          {item.link.label}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
