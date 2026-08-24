import { Clock, PhoneCall, Headset, ImageIcon, Globe2 } from "lucide-react";

export function Support() {
  return (
    <section id="support" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Follow-up &amp; support
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We built a real-time support system so you're never stuck: ask a question and get a
              response in under 10 minutes, backed by regular follow-up calls to keep you moving
              forward.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { Icon: Clock, text: "Under 10 minutes average response time" },
                { Icon: PhoneCall, text: "Regular scheduled follow-up calls" },
                { Icon: Headset, text: "A dedicated team available every day" },
              ].map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Community</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Join a community of thousands of members from around the world. Build real connections
              with people from different countries, all working toward the same goal.
            </p>
            <figure className="mt-8 flex flex-col items-center justify-center rounded-xl border border-dashed border-border-strong bg-surface px-6 py-12 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <ImageIcon className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} aria-hidden />
              </span>
              <figcaption className="mt-3 text-sm font-medium text-foreground">
                Community photo slot — members meetup
              </figcaption>
              <span className="mt-1 text-xs text-muted-foreground">
                Add your real community photograph here · Landscape, 1600×900
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Globe2 className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                Members across 50+ countries
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
