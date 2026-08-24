import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Instagram } from "lucide-react";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (!v.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    setSubmitted(Object.keys(e).length === 0);
  };

  const field = (key: keyof typeof values) => ({
    id: key,
    name: key,
    value: values[key],
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onChange: (
      ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const next = { ...values, [key]: ev.target.value };
      setValues(next);
      if (errors[key]) setErrors(validate(next));
    },
    className: `w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground ${
      errors[key] ? "border-destructive" : "border-input"
    }`,
  });

  return (
    <section id="contact" className="section-neutral border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact us</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us where you are in your journey and which markets you want to learn. Our team
              will point you to the right plan.
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href="mailto:hello@goai-academy.example"
                  className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Mail className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} aria-hidden />
                  hello@goai-academy.example
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Instagram className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} aria-hidden />
                  @goai.academy
                </a>
              </li>
            </ul>
          </div>

          <form noValidate onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input type="text" placeholder="Your full name" {...field("name")} />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input type="email" placeholder="you@example.com" {...field("email")} />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea rows={5} placeholder="What would you like to learn?" {...field("message")} />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send message
              </button>
              <p aria-live="polite" className="min-h-5">
                {submitted && (
                  <span className="inline-flex items-center gap-2 text-sm text-success">
                    <CheckCircle2 className="h-4 w-4" aria-hidden /> Thanks — your details look
                    good. Our team will be in touch.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
