import type { Metadata } from "next";
import Link from "next/link";
import { site, sponsorPerks } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SponsorForm } from "@/components/forms";
import { buttonClass, Container, Eyebrow, PageTitle, PageTransition, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Sponsor" };

export default function SponsorPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-14 pt-14 md:pb-[72px] md:pt-24">
        <Reveal>
          <Container className="flex flex-col gap-5">
            <Eyebrow>Sponsor us</Eyebrow>
            <PageTitle>Partner with TC Hacks</PageTitle>
            <p className="max-w-[700px] text-[19px] leading-relaxed text-body">
              Every TC Hacks event is free for students. Our partners make that possible, and in return they connect
              with motivated students from the Twin Cities and beyond.
            </p>
            <div>
              <Link href="#contact" className={buttonClass("primary")}>
                Get in touch
              </Link>
            </div>
          </Container>
        </Reveal>
      </section>

      <section className="border-t border-line px-4 py-14 md:py-[72px]">
        <Container className="flex flex-col gap-9">
          <Reveal>
            <SectionTitle>Why sponsor TC Hacks?</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
            {sponsorPerks.map((perk, i) => (
              <Reveal key={perk.title} delay={(i % 3) * 0.06} className="flex flex-col gap-2 border-t-2 border-line-strong pt-[18px]">
                <h3 className="font-display text-[22px] font-extrabold">{perk.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{perk.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line px-4 py-14 md:py-[72px]">
        <Container className="flex flex-col gap-6">
          <Reveal>
            <SectionTitle>Our partners</SectionTitle>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center rounded-xl border-[1.5px] border-dashed border-line-strong text-sm text-subtle"
              >
                Logo placeholder
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-20 bg-tint px-4 py-14 md:pb-24 md:pt-[72px]">
        <Container className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal className="flex flex-col gap-3.5">
            <SectionTitle>Let&apos;s work together</SectionTitle>
            <p className="text-[17px] leading-relaxed text-body">
              Tell us a bit about your company and how you&apos;d like to be involved. We&apos;ll follow up with
              sponsorship details.
            </p>
            <p className="text-base text-body">
              Prefer email? Reach us at <strong className="text-ink">{site.contactEmail}</strong>.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SponsorForm />
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
