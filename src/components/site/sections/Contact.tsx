import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const { t } = useLanguage();

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = t.contact.nameError;
    if (!v.email.trim()) e.email = t.contact.emailError;
    else if (!EMAIL_RE.test(v.email.trim())) e.email = t.contact.validEmailError;
    if (!v.message.trim()) e.message = t.contact.messageError;
    return e;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const e = validate(values);
    setErrors(e);

    if (Object.keys(e).length > 0) {
      setSubmitted(false);
      return;
    }

    try {
      const response = await fetch(
        "https://test120.app.n8n.cloud/webhook/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      setSubmitted(true);
      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitted(false);
    }
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
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {t.contact.description}
            </p>

            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=thegoat@gmail.com&su=New%20inquiry%20%E2%80%94%20THE%20GOAT%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Mail
                    className="h-4.5 w-4.5 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  @thegoat@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/the.goat.trading"
                  className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Instagram
                    className="h-4.5 w-4.5 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  @the.goat.trading
                </a>
              </li>
            </ul>
          </div>

          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  {t.contact.name}
                </label>

                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  {...field("name")}
                />

                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  {t.contact.email}
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...field("email")}
                />

                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  {t.contact.message}
                </label>

                <textarea
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  {...field("message")}
                />

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
                {t.contact.send}
              </button>

              <p aria-live="polite" className="min-h-5">
                {submitted && (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                    {t.contact.success}
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