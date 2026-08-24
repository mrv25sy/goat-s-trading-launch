import { Check, Minus } from "lucide-react";

type Cell = boolean | string;

const PLANS = [
  { name: "Connect", price: "$349.99", period: "30 days", popular: false },
  { name: "Create", price: "$999.99", period: "60 days", popular: false },
  { name: "Complete", price: "$1699.99", period: "90 days", popular: true },
];

const ROWS: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "Market fundamentals course", values: [true, true, true] },
  { label: "Forex market access", values: [true, true, true] },
  { label: "Crypto market access", values: [true, true, true] },
  { label: "E-commerce course", values: [true, true, true] },
  { label: "24/7 AI support bot", values: [true, true, true] },
  { label: "Recommendation channels", values: ["3", "7", "10"] },
  { label: "Technical analysis course", values: [true, true, true] },
  { label: "Trading mastery plan", values: [false, true, true] },
  { label: "Timing analysis", values: [false, true, true] },
  { label: "Investment plan", values: [false, true, true] },
  { label: "Weekly follow-up calls", values: [false, true, true] },
  { label: "Full trading + investment strategy suite", values: [false, false, true] },
  { label: "Financial literacy course", values: [false, false, true] },
  { label: "Priority follow-up support", values: [false, false, true] },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-foreground">{value}</span>;
  }
  return value ? (
    <>
      <Check className="h-5 w-5 text-success" strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">Included</span>
    </>
  ) : (
    <>
      <Minus className="h-5 w-5 text-muted-foreground" strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">Not included</span>
    </>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section-neutral border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose your plan</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Three levels of access to the same program. Compare what's included and pick the depth
            that fits you.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <caption className="sr-only">
              Plan comparison for Connect, Create and Complete
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="w-[34%] p-5 align-bottom">
                  <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    What's included
                  </span>
                </th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={`w-[22%] p-5 align-bottom ${
                      plan.popular ? "border-x border-primary/50 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex h-6 items-start">
                      {plan.popular && (
                        <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-2.5 py-0.5 text-[0.68rem] font-semibold tracking-wide text-primary uppercase">
                          Most popular
                        </span>
                      )}
                    </div>
                    <div className="mt-3 text-base font-semibold tracking-tight text-foreground">
                      {plan.name}
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                      {plan.price}
                    </div>
                    <div className="mt-1 text-xs font-normal text-muted-foreground">
                      {plan.period}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th
                    scope="row"
                    className="h-14 px-5 text-sm font-normal text-muted-foreground"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={PLANS[i].name}
                      className={`h-14 px-5 ${
                        PLANS[i].popular ? "border-x border-primary/50 bg-primary/5" : ""
                      }`}
                    >
                      <span className="flex items-center">
                        <CellValue value={value} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-5" />
                {PLANS.map((plan) => (
                  <td
                    key={plan.name}
                    className={`p-5 ${plan.popular ? "border-x border-b border-primary/50 bg-primary/5" : ""}`}
                  >
                    <a
                      href="#contact"
                      className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                        plan.popular
                          ? "border border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-border-strong text-foreground hover:bg-surface"
                      }`}
                    >
                      Get started
                    </a>
                    <span className="sr-only">{plan.name} plan</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
