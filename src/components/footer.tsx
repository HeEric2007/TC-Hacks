import Link from "next/link";
import { nav, site } from "@/content/site";

const linkClass = "text-[15px] text-[#e8e6f0] transition-colors hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="bg-night-deep px-4 pb-8 pt-14">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex max-w-[340px] flex-col gap-2.5">
            <span className="font-display text-[22px] font-extrabold text-white">{site.name}</span>
            <span className="text-[15px] leading-relaxed text-muted">
              A student organization at the University of Minnesota, Twin Cities.
            </span>
          </div>
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-2.5">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-subtle">Pages</span>
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-subtle">Connect</span>
              <a href={site.instagram} className={linkClass}>
                Instagram
              </a>
              <a href={site.linkedin} className={linkClass}>
                LinkedIn
              </a>
              <span className="text-[15px] text-[#e8e6f0]">{site.contactEmail}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-line pt-5 text-sm text-subtle">
          © 2026 TC Hacks · Minneapolis–Saint Paul, Minnesota
        </div>
      </div>
    </footer>
  );
}
