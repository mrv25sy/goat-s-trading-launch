import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Send, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Programs", href: "/#programs" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-sm font-semibold tracking-[0.18em] uppercase">The Goat</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              GO AI Academy's flagship financial markets education program, structured learning,
              expert recommendations, and daily support.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/60 bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              {[
                { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
                { Icon: Send, label: "Telegram", href: "https://telegram.org" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
              Legal &amp; contact
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@goai-academy.example"
                  className="inline-flex items-center gap-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  hello@goai-academy.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">© 2026 GO AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
