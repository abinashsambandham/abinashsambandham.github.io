import Section, { Chip } from "./Section";
import { experience, education, recognition } from "@/data/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Five and a half years, one company, three roles"
      intro={`${experience.company}: ${experience.companyNote}`}
    >
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.roles.map((r, i) => (
          <li key={r.title} className="relative">
            <span
              className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 sm:-left-[39px] ${
                i === 0 ? "border-accent bg-accent" : "border-line bg-bg"
              }`}
            />
            <article data-reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                <span className="font-mono text-xs text-muted">{r.period}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{r.summary}</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
                {r.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {r.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-14 grid gap-5 lg:grid-cols-[1fr_360px]">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Recognition</h3>
          <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {recognition.map((r) => (
              <div key={r.title} className="bg-surface p-5">
                <p className="font-semibold">{r.title}</p>
                <p className="mt-1.5 text-sm text-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Education</h3>
          <div className="mt-5 rounded-2xl border border-line bg-surface p-6">
            <p className="font-semibold">{education.degree}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{education.school}</p>
            <p className="mt-3 font-mono text-xs text-muted">{education.period}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
