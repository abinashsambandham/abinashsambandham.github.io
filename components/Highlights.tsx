import { heroNow, heroStats, techMarquee, pipeline } from "@/data/content";

export default function Highlights() {
  return (
    <section id="highlights" aria-label="Highlights" className="pb-20 pt-16 sm:pb-24">
      {/* Bento grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 [&>*]:min-w-0">
        <article data-reveal className="rounded-3xl border border-line bg-surface p-6 sm:p-7 col-span-2 md:row-span-2">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            {heroNow.label}
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight">{heroNow.title}</p>
          <p className="mt-1 text-sm text-muted">{heroNow.org}</p>
          <ul className="mt-5 space-y-2 text-sm">
            {heroNow.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-line bg-surface-2 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">SAQ document pipeline</p>
            <div className="mt-4 flex flex-wrap items-center gap-y-2 sm:flex-nowrap">
              {pipeline.stages.map((s, i) => (
                <div key={s.n} className="flex items-center sm:flex-1 sm:last:flex-none">
                  <span
                    className="node-pulse rounded-lg border border-line bg-surface px-2 py-1.5 font-mono text-[10px] sm:px-2.5 sm:text-[11px]"
                    style={{ animationDelay: `${i}s` }}
                  >
                    {s.name}
                  </span>
                  {i < pipeline.stages.length - 1 && <span className="flow-line mx-1 h-px w-3 sm:flex-1" />}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">Azure Document Intelligence → Claude → Azure Translator, traced in Langfuse</p>
          </div>
        </article>

        {heroStats.map((s, i) => (
          // On phones the first two stats already appear in the hero, so they show from desktop up only.
          <article data-reveal key={s.value} className={`${i < 2 ? "hidden lg:flex" : "flex"} lift flex-col justify-between rounded-3xl border border-line bg-surface p-5 sm:p-6`}>
            <p className="text-2xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
            <p className="mt-4 text-xs leading-snug text-muted sm:mt-6 sm:text-sm">{s.label}</p>
          </article>
        ))}

        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface py-5 col-span-2 md:col-span-4">
          <div className="marquee flex w-max gap-3 whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={i} className="rounded-full border border-line bg-surface-2 px-4 py-1.5 text-sm text-muted">
                {t}
              </span>
            ))}
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </div>
    </section>
  );
}
