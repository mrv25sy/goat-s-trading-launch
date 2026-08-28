import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/i18n";

const NAV_LINKS = [
  { key: "home", href: "/#home" },
  { key: "programs", href: "/#programs" },
  { key: "pricing", href: "/#pricing" },
  { key: "about", href: "/#about" },
  { key: "contact", href: "/#contact" },
] as const;

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur transition-colors ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* LOGO */}
        <a href="/#home" className="flex items-center gap-2.5 rounded-md">
          <Logo />
          <span className="text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
            The Goat
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}

          {/* JOIN NOW */}
          <li className="ml-2">
            <a
              href="/#pricing"
              className="inline-flex items-center rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.nav.join}
            </a>
          </li>

          {/* LANGUAGE BUTTON */}
          <li className="ml-1">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              {t.nav.language}
            </button>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}

            {/* MOBILE JOIN NOW */}
            <li className="py-3">
              <a
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                {t.nav.join}
              </a>
            </li>

            {/* MOBILE LANGUAGE BUTTON */}
            <li className="pb-3">
              <button
                type="button"
                onClick={toggleLanguage}
                className="block w-full rounded-lg border border-border px-4 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                {t.nav.language}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}