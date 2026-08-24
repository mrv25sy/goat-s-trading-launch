import {
  GraduationCap,
  Radio,
  Gem,
  Waypoints,
  Bitcoin,
  PiggyBank,
  Bot,
  type LucideIcon,
} from "lucide-react";

const PROGRAMS: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: GraduationCap,
    title: "Education",
    body: "We teach financial markets from the ground up to a professional level, led by 6+ Arab instructors with 9+ years of experience each.",
  },
  {
    Icon: Radio,
    title: "Market recommendations",
    body: "Our 15+ specialists each run a dedicated channel in their area of focus: forex, metals, stock indices, investment opportunities, crypto, and oil.",
  },
  {
    Icon: Gem,
    title: "Go Hunter — gold system",
    body: "An AI-driven system that generates ready technical signals with a single click, helping you spot opportunities in the gold market.",
  },
  {
    Icon: Waypoints,
    title: "Go Maestro — forex system",
    body: "An AI-driven system built to surface ready technical signals in real time, helping you identify opportunities across the forex market.",
  },
  {
    Icon: Bitcoin,
    title: "Crypto system",
    body: "An AI-driven system that scans the crypto market and delivers ready technical signals with a single click.",
  },
  {
    Icon: PiggyBank,
    title: "Investment system",
    body: "Investment knowledge is one of the most valuable skills of this era. Our AI reviews the market daily to surface strong investment opportunities, with a daily update on your portfolio, no extra effort required on your side.",
  },
  {
    Icon: Bot,
    title: "GO OS — AI assistant",
    body: "GO OS is an AI system trained on our team's expertise and approach. Ask it anything related to the field and get accurate, grounded answers back.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Programs</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Seven connected tracks, structured teaching, live specialist coverage, and AI systems
            built for each market.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
