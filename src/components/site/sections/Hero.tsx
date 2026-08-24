import { ArrowRight, PlayCircle } from "lucide-react";

const STATS = [
  { value: "22", label: "Arab countries" },
  { value: "50+", label: "Countries worldwide" },
  { value: "15+", label: "Experts & instructors" },
  { value: "20+", label: "Conferences yearly" },
];

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
              GO AI Academy · Flagship program
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Learn financial markets. Trade with a system. Grow with a community.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Goat is GO AI's flagship program. AI-powered education, expert-led
              recommendations, and hands-on support to help you build real skills in forex, crypto,
              gold, and investing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore the program
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                See pricing
              </a>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/gtYga7cxV30"
                  title="Meet the founder of GO AI Academy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-2 border-t border-border px-4 py-3">
                <PlayCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  Watch: the founder explains how The Goat works
                </p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background px-5 py-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
