import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const TESTIMONIALS = [
  {
    name: "Layla Haddad",
    key: "layla",
  },
  {
    name: "Marcus Delaney",
    key: "marcus",
  },
  {
    name: "Sofia Marchetti",
    key: "sofia",
  },
  {
    name: "Omar Benali",
    key: "omar",
  },
  {
    name: "Hana Yusuf",
    key: "hana",
  },
  {
    name: "Julian Reyes",
    key: "julian",
  },
] as const;

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.testimonials.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <Quote
                className="h-5 w-5 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.testimonials.quotes[testimonial.key]}
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground"
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {t.testimonials.roles[testimonial.key]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
