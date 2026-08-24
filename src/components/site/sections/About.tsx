import { ImageIcon } from "lucide-react";

const PHOTO_SLOTS = [
  { label: "Annual conference — Dubai", hint: "Landscape, 1600×900", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Instructor workshop — Cairo", hint: "Portrait, 800×1000", span: "" },
  { label: "Community meetup — Riyadh", hint: "Portrait, 800×1000", span: "" },
  { label: "Awards night — Casablanca", hint: "Landscape, 1200×800", span: "" },
  { label: "Trading floor session — Amman", hint: "Landscape, 1200×800", span: "" },
];

export function About() {
  return (
    <section id="about" className="section-neutral border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About GO AI</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              GO AI is one of the leading educational academies in the Arab world, with a presence
              in 22 Arab countries and 50+ countries worldwide. Our team includes 15+ Arab experts
              and instructors working across 6+ languages, and we host 20+ conferences globally each
              year.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["22", "Arab countries"],
                ["50+", "Countries worldwide"],
                ["6+", "Languages taught"],
                ["20+", "Global conferences a year"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[140px] sm:grid-cols-4">
              {PHOTO_SLOTS.map((slot) => (
                <figure
                  key={slot.label}
                  className={`flex flex-col items-center justify-center rounded-xl border border-dashed border-border-strong bg-card p-4 text-center ${slot.span}`}
                >
                  <ImageIcon
                    className="h-5 w-5 text-muted-foreground"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <figcaption className="mt-2 text-xs font-medium text-foreground">
                    {slot.label}
                  </figcaption>
                  <span className="mt-1 text-[0.7rem] text-muted-foreground">
                    Photo slot · {slot.hint}
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
