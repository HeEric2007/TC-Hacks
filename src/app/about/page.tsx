import type { Metadata } from "next";
import Image from "next/image";
import { openSeats, site, team, whatWeDo } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, PageTitle, PageTransition, PlusIcon, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

function PersonIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="9" r="4" />
      <path d="M4 21c.8-4 4-6.5 8-6.5s7.2 2.5 8 6.5z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-16 pt-14 md:pb-[72px] md:pt-24">
        <Reveal>
          <Container className="flex flex-col gap-5">
            <Eyebrow>About</Eyebrow>
            <PageTitle>Bringing the Twin Cities&apos; student builders together</PageTitle>
            <p className="max-w-[700px] text-[19px] leading-relaxed text-body">
              TC Hacks is a student organization at the University of Minnesota. Our goal is to give the Twin Cities a
              flagship student hackathon, and to connect students with Minnesota&apos;s tech community throughout the
              year.
            </p>
          </Container>
        </Reveal>
      </section>

      <section className="border-t border-line px-4 py-14 md:py-[72px]">
        <Container className="flex flex-col gap-9">
          <Reveal>
            <SectionTitle>What we do</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.06} className="flex flex-col gap-2 border-t-2 border-line-strong pt-[18px]">
                <h3 className="font-display text-2xl font-extrabold">{item.title}</h3>
                <p className="text-base leading-relaxed text-body">{item.long}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="team" className="border-t border-line px-4 pb-14 pt-14 md:pb-24 md:pt-[72px]">
        <Container className="flex flex-col gap-9">
          <Reveal className="flex max-w-[640px] flex-col gap-3">
            <SectionTitle>Our team</SectionTitle>
            <p className="text-[17px] leading-relaxed text-body">
              TC Hacks is run by a small team of students who share the work equally.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {team.map((person, i) => (
              <Reveal
                key={person.name}
                delay={i * 0.05}
                className="flex items-center gap-4 rounded-[14px] border-[1.5px] border-line bg-panel p-[18px]"
              >
                <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-tint text-muted">
                  {person.image ? (
                    <Image src={person.image} alt="" width={64} height={64} className="size-16 object-cover" />
                  ) : (
                    <PersonIcon />
                  )}
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <span className="text-[17px] font-bold">{person.name}</span>
                  {person.founder && (
                    <span className="rounded-full bg-tint px-2.5 py-0.5 text-xs font-bold text-accent-soft">Founder</span>
                  )}
                </div>
              </Reveal>
            ))}
            {Array.from({ length: openSeats }, (_, i) => (
              <Reveal
                key={`open-${i}`}
                delay={(team.length + i) * 0.05}
                className="flex items-center gap-4 rounded-[14px] border-[1.5px] border-dashed border-line-strong p-[18px]"
              >
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-accent text-accent">
                  <PlusIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[17px] font-bold text-accent">Open seat</span>
                  <span className="text-sm text-muted">Could be you</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] bg-tint p-7">
            <div className="flex max-w-[640px] flex-col gap-1.5">
              <h3 className="font-display text-2xl font-extrabold">Join the team</h3>
              <p className="text-base leading-relaxed text-body">
                We&apos;re looking for people interested in marketing and design, or in sponsorships and finance. No
                coding experience required.
              </p>
            </div>
            <span className="text-base font-bold text-accent-soft">Email us at {site.contactEmail}</span>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
