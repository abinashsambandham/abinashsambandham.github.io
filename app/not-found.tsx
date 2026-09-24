import Logo from "@/components/Logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-5 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
      />
      <div className="relative">
        <Logo className="mx-auto h-16 w-16 text-accent" />
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-accent">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">This page isn&apos;t in the graph.</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The link may be old or mistyped. Everything lives on the home page.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink py-3 pl-6 pr-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Back to home
          <span className="grid h-7 w-7 place-items-center rounded-full bg-bg text-ink">→</span>
        </a>
      </div>
    </main>
  );
}
