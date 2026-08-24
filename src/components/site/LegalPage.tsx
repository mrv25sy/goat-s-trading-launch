import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieNotice } from "./CookieNotice";

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{updated}</p>
        <p className="mt-6 rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground">
          {intro}
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-semibold tracking-tight">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/terms"
            className="inline-flex items-center rounded-lg border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center rounded-lg border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Privacy Policy
          </Link>
        </div>
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
