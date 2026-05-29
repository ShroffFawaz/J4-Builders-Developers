export function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="h-px flex-1 bg-border" />
      <div className="w-1.5 h-1.5 bg-primary rotate-45" />
      <div className="h-px w-12 bg-primary" />
      <div className="w-1.5 h-1.5 bg-primary rotate-45" />
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
