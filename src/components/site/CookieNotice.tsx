import { useEffect, useState } from "react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("goat-cookie-notice") !== "dismissed") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use cookies to ensure a smooth browsing experience. By continuing, you agree to our use
          of cookies.
        </p>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem("goat-cookie-notice", "dismissed");
            setVisible(false);
          }}
          className="shrink-0 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
