"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { buttonClass } from "@/components/ui";

const fieldClass =
  "w-full min-h-12 rounded-[10px] border-[1.5px] border-[#4e4685] bg-field px-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-subtle focus:border-accent focus:ring-[3px] focus:ring-[#4e4685]";

const swap = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25 },
};

// NOTE: these forms don't send anything yet. Hook them up to a service
// (e.g. Google Forms, Formspree, Mailchimp) when you're ready.

export function SubscribeForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          role="status"
          {...swap}
          className="mt-2 rounded-[10px] bg-tint px-5 py-3.5 text-[15px] font-medium text-accent-soft"
        >
          Thank you for subscribing.
        </motion.div>
      ) : (
        <motion.form
          key="form"
          {...swap}
          onSubmit={onSubmit}
          className="mt-2 flex w-full max-w-[520px] flex-wrap justify-center gap-2.5"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`${fieldClass} w-auto flex-[1_1_260px]`}
          />
          <button type="submit" className={buttonClass("primary")}>
            Subscribe
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export function SponsorForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const labelClass = "flex flex-col gap-1.5 text-sm font-bold text-ink";

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          role="status"
          {...swap}
          className="self-start rounded-[14px] border-[1.5px] border-line bg-panel p-7 text-base leading-relaxed text-body"
        >
          Thank you for your interest. Our team will reach out shortly.
        </motion.div>
      ) : (
        <motion.form
          key="form"
          {...swap}
          onSubmit={onSubmit}
          className="flex flex-col gap-3.5 rounded-[14px] border-[1.5px] border-line bg-panel p-7"
        >
          <label className={labelClass}>
            Full name
            <input className={fieldClass} type="text" required autoComplete="name" />
          </label>
          <label className={labelClass}>
            Company
            <input className={fieldClass} type="text" required autoComplete="organization" />
          </label>
          <label className={labelClass}>
            Work email
            <input className={fieldClass} type="email" required autoComplete="email" placeholder="name@company.com" />
          </label>
          <label className={labelClass}>
            How would you like to get involved?
            <textarea className={`${fieldClass} min-h-[120px] resize-y py-3`} />
          </label>
          <div>
            <button type="submit" className={buttonClass("primary")}>
              Submit
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
