import {
  BrainCircuit,
  CalendarCheck,
  Bot,
  Users,
  LineChart,
  MessagesSquare,
  UserRoundCheck,
  LifeBuoy,
} from "lucide-react";

const BENEFITS = [
  { Icon: BrainCircuit, title: "AI-powered complete education system" },
  { Icon: CalendarCheck, title: "Weekly follow-up system with 10 calls" },
  { Icon: Bot, title: "AI assistant trained on team expertise" },
  { Icon: Users, title: "15+ specialists providing market recommendations" },
  { Icon: LineChart, title: "Multiple income-generating tracks across investment fields" },
  { Icon: MessagesSquare, title: "Community space" },
  { Icon: UserRoundCheck, title: "Personal mentor day-to-day" },
  { Icon: LifeBuoy, title: "Daily dedicated-team support" },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What you get</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Everything included in The Goat, from the first lesson to daily support once you start
            trading.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ Icon, title }) => (
            <li
              key={title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm leading-relaxed font-medium text-foreground">{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
