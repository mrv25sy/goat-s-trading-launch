//tsx
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
import { useLanguage } from "@/lib/i18n";

const PROGRAMS: { Icon: LucideIcon; key: keyof typeof PROGRAM_KEYS }[] = [
  { Icon: GraduationCap, key: "education" },
  { Icon: Radio, key: "recommendations" },
  { Icon: Gem, key: "hunter" },
  { Icon: Waypoints, key: "maestro" },
  { Icon: Bitcoin, key: "crypto" },
  { Icon: PiggyBank, key: "investment" },
  { Icon: Bot, key: "os" },
];

const PROGRAM_KEYS = {
  education: true,
  recommendations: true,
  hunter: true,
  maestro: true,
  crypto: true,
  investment: true,
  os: true,
} as const;

export function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.programs.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.programs.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ Icon, key }) => (
            <article
              key={key}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                <Icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {t.programs[key].title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.programs[key].body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
