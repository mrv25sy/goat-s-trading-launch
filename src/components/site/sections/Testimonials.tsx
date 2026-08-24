import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Layla Haddad",
    role: "Member since 2024 · Amman",
    quote:
      "I started with zero background. The structured lessons and the weekly calls kept me accountable, and I finally understand what I'm doing instead of guessing.",
  },
  {
    name: "Marcus Delaney",
    role: "Member since 2025 · Manchester",
    quote:
      "The specialist channels changed how I follow the market. Having one place for gold, indices and forex coverage saves me hours every week.",
  },
  {
    name: "Sofia Marchetti",
    role: "Member since 2024 · Milan",
    quote:
      "Support genuinely answers in minutes. When I got stuck on risk sizing, my mentor walked me through it the same day.",
  },
  {
    name: "Omar Benali",
    role: "Member since 2025 · Casablanca",
    quote:
      "The investment track is the part I use most. A daily portfolio update and a shortlist of opportunities is exactly what I needed.",
  },
  {
    name: "Hana Yusuf",
    role: "Member since 2023 · Dubai",
    quote:
      "The community is the surprise. Thousands of people from different countries, all learning the same system and sharing what works.",
  },
  {
    name: "Julian Reyes",
    role: "Member since 2025 · Madrid",
    quote:
      "GO OS answers questions with the same logic the instructors teach, so nothing contradicts the course material.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What members say</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Feedback from members working through the program across different markets and time
            zones.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="flex flex-col rounded-xl border border-border bg-surface p-6">
              <Quote className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
