import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieNotice } from "@/components/site/CookieNotice";
import { Hero } from "@/components/site/sections/Hero";
import { Benefits } from "@/components/site/sections/Benefits";
import { About } from "@/components/site/sections/About";
import { Programs } from "@/components/site/sections/Programs";
import { Support } from "@/components/site/sections/Support";
import { Pricing } from "@/components/site/sections/Pricing";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Contact } from "@/components/site/sections/Contact";

const TITLE = "THE GOAT — Financial Markets Education by GO AI Academy";
const DESCRIPTION =
  "GO AI's flagship program: AI-powered education, 15+ expert market specialists, daily support and a global community for forex, crypto, gold and investing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Programs />
        <About />
        <Support />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
