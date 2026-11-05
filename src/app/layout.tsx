import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "TC Hacks · The Twin Cities student hackathon",
    template: "%s · TC Hacks",
  },
  description:
    "TC Hacks is a student organization at the University of Minnesota running the Twin Cities' student hackathon, plus networking nights, resume reviews and build nights all year.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-night font-sans text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
