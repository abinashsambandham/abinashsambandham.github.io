import Section, { Chip } from "./Section";
import { pillars, principles } from "@/data/content";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="What I do"
      title="An engineer who owns the whole path"
      intro="I sit where customer problems, product design and AI engineering meet. I scope the work with enterprise customers, architect it, build it, and stay on the hook once it's in production."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <article data-reveal key={p.title} className="lift rounded-2xl border border-line bg-surface p-6 sm:p-7">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.body}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">How I work</h3>
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="bg-surface p-6">
              <p className="font-semibold">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
