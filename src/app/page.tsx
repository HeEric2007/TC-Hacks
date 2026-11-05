import Link from "next/link";
import { heroFacts, whatWeDo } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { HeroStars, Skyline } from "@/components/skyline";
import { SubscribeForm } from "@/components/forms";
import { buttonClass, Container, Eyebrow, PageTransition, SectionTitle } from "@/components/ui";

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero: same color as the skyline sky, so the two blend together */}
      <section className="relative overflow-hidden px-4 pt-24">
        <HeroStars />
        <Container className="relative z-10 flex flex-col items-start gap-6">
          <Reveal>
            <Eyebrow>University of Minnesota · Twin Cities</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[72px] font-extrabold leading-[0.92] tracking-[-0.05em] md:text-[136px]">
              TC Hacks
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[640px] text-[21px] leading-normal text-body">
              The student hackathon for the Twin Cities. Students from any school and any major spend a weekend
              building, learning and meeting Minnesota&apos;s tech community.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-wrap gap-2.5">
            {heroFacts.map((fact) => (
              <span key={fact} className="rounded-lg bg-tint px-3.5 py-2 text-sm font-bold text-accent-soft">
                {fact}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="flex flex-wrap gap-3 pt-1.5">
            <Link href="#updates" className={buttonClass("primary")}>
              Get updates
            </Link>
            <Link href="/sponsor" className={buttonClass("outline")}>
              Sponsor us
            </Link>
          </Reveal>
        </Container>

        <Skyline className="relative -mx-4 mt-[72px] block h-[max(240px,23.6vw)] w-[calc(100%+32px)]" />
        <div aria-hidden="true" className="relative -mx-4 h-[3px] bg-line-strong" />
      </section>

      <section className="px-4 py-14 md:py-24">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex max-w-[620px] flex-col gap-2.5">
              <Eyebrow>What we do</Eyebrow>
              <SectionTitle>A flagship hackathon, plus events all year</SectionTitle>
            </div>
            <Link href="/about" className="text-[15px] font-bold text-accent hover:text-accent-soft">
              Learn more about us
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-4">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="flex flex-col gap-2 border-t-2 border-line-strong pt-[18px]">
                <h3 className="font-display text-[22px] font-extrabold">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{item.short}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-night-deep px-4 py-14 md:py-[88px]">
        <Reveal>
          <Container className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex max-w-[640px] flex-col gap-3.5">
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#cfc6f0]">The flagship event</span>
              <SectionTitle className="text-white">The TC Hacks hackathon</SectionTitle>
              <p className="text-lg leading-relaxed text-[#e8e6f0]">
                24 hours. Teams of up to four. Workshops, mentors, meals and prizes, all free for participants.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div>
                <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#cfc6f0]">Date</div>
                <div className="font-display text-[40px] font-extrabold">To be announced</div>
              </div>
              <Link href="/events" className={buttonClass("light")}>
                See all events
              </Link>
            </div>
          </Container>
        </Reveal>
      </section>

      <section id="updates" className="scroll-mt-20 px-4 py-14 md:py-24">
        <Reveal className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
          <SectionTitle>Stay updated</SectionTitle>
          <p className="text-[17px] leading-relaxed text-body">
            Be the first to hear about event dates, registration and open positions.
          </p>
          <SubscribeForm />
        </Reveal>
      </section>
    </PageTransition>
  );
}
