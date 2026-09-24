import Section, { Chip } from "./Section";
import { caseStudies, moreWork } from "@/data/content";

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Case studies"
      intro="Production systems I've led, each described as the problem, what I built, and what changed for the business."
    >
      <div className="space-y-6">
        {caseStudies.map((c, i) => (
          <article data-reveal key={c.id} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="grid lg:grid-cols-[1fr_300px]">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{c.tag}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.context}</p>

                <h4 className="mt-7 font-mono text-[11px] uppercase tracking-wider text-muted">The problem</h4>
                <p className="mt-2 leading-relaxed">{c.problem}</p>

                <h4 className="mt-7 font-mono text-[11px] uppercase tracking-wider text-muted">What I built</h4>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed">
                  {c.built.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-ink/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="flex flex-col border-t border-line bg-surface-2 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted">Impact</h4>
                <dl className="mt-4 space-y-5">
                  {c.impact.map((m) => (
                    <div key={m.label}>
                      <dt className="text-3xl font-semibold tracking-tight text-accent">{m.value}</dt>
                      <dd className="mt-1 text-sm text-muted">{m.label}</dd>
                    </div>
                  ))}
                </dl>
                <h4 className="mt-8 font-mono text-[11px] uppercase tracking-wider text-muted">Stack</h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </aside>
            </div>
          </article>
        ))}
      </div>

      <h3 data-reveal className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted">More work</h3>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {moreWork.map((p) => (
          <article data-reveal
            key={p.title}
            className="lift flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.tag}</p>
            <h4 className="mt-2.5 font-semibold tracking-tight">{p.title}</h4>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.body}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
