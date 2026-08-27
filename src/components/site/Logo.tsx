export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="GO AI Academy logo"
      className={`h-8 w-8 object-contain ${className}`}
    />
  );
}