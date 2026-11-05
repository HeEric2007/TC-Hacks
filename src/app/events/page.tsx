import type { Metadata } from "next";
import Link from "next/link";
import { flagship, recurringEvents } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { buttonClass, Container, Eyebrow, PageTitle, PageTransition } from "@/components/ui";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-14 pt-14 md:pt-24">
        <Reveal>
          <Container className="flex flex-col gap-5">
            <Eyebrow>Events</Eyebrow>
            <PageTitle>Our events</PageTitle>
            <p className="max-w-[680px] text-[19px] leading-relaxed text-body">
              We host something every few weeks during the school year. Follow us on Instagram or subscribe on the home
              page for upcoming dates and locations.
            </p>
          </Container>
        </Reveal>
      </section>

      <section className="px-4 pb-[72px]">
        <Reveal>
          <Container className="flex flex-col gap-7 rounded-2xl bg-night-deep p-7 md:p-10">
            <div className="flex max-w-[680px] flex-col gap-2.5">
              <span className="self-start rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-on-accent">
                Flagship event
              </span>
              <h2 className="font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[44px]">
                {flagship.name}
              </h2>
              <p className="text-[17px] leading-relaxed text-body">{flagship.summary}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {flagship.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-line px-[18px] py-4">
                  <div className="text-xs font-bold uppercase tracking-[0.1em] text-subtle">{fact.label}</div>
                  <div className="mt-1.5 text-[17px] font-bold">{fact.value}</div>
                </div>
              ))}
            </div>
            <div>
              <Link href="/#updates" className={buttonClass("light")}>
                Get notified when registration opens
              </Link>
            </div>
          </Container>
        </Reveal>
      </section>

      <section className="px-4 pb-14 md:pb-24">
        <Container className="flex flex-col gap-5">
          <Reveal>
            <h2 className="font-display text-[32px] font-extrabold tracking-[-0.02em]">Throughout the year</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-12 border-t-[1.5px] border-line-strong md:grid-cols-2">
            {recurringEvents.map((event, i) => (
              <Reveal key={event.title} delay={(i % 2) * 0.06} className="flex flex-col gap-2 border-b border-line py-6">
                <span className="self-start rounded-full bg-tint px-2.5 py-0.5 text-xs font-bold text-accent-soft">
                  {event.frequency}
                </span>
                <h3 className="font-display text-2xl font-extrabold">{event.title}</h3>
                <p className="text-base leading-relaxed text-body">{event.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
