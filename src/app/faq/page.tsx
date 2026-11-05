import type { Metadata } from "next";
import { faqs, site } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq-list";
import { Eyebrow, PageTitle, PageTransition } from "@/components/ui";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <PageTransition>
      <section className="px-4 py-14 md:py-24">
        <div className="mx-auto flex max-w-[900px] flex-col gap-10">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>FAQ</Eyebrow>
            <PageTitle>Frequently asked questions</PageTitle>
          </Reveal>
          <Reveal delay={0.06}>
            <FaqList items={faqs} />
          </Reveal>
          <p className="text-base text-body">
            Still have questions? Email us at <strong className="text-ink">{site.contactEmail}</strong>.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
