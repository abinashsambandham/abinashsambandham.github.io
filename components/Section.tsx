export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-24">
      <div data-reveal className="mb-10 max-w-2xl sm:mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
