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
import { useLanguage } from "@/lib/i18n";

const BENEFITS = [
  { Icon: BrainCircuit, key: 0 },
  { Icon: CalendarCheck, key: 1 },
  { Icon: Bot, key: 2 },
  { Icon: Users, key: 3 },
  { Icon: LineChart, key: 4 },
  { Icon: MessagesSquare, key: 5 },
  { Icon: UserRoundCheck, key: 6 },
  { Icon: LifeBuoy, key: 7 },
] as const;

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.benefits.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.benefits.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ Icon, key }) => (
            <li
              key={key}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                <Icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-4 text-sm leading-relaxed font-medium text-foreground">
                {t.benefits.items[key]}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}