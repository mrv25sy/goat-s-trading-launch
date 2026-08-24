export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong bg-primary/15 text-[0.7rem] font-bold tracking-tight text-primary ${className}`}
    >
      GO
    </span>
  );
}
