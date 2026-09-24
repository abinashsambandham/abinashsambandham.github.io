import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills and technologies">
      <div data-reveal className="overflow-hidden rounded-2xl border border-line bg-surface">
        {skills.map((g, i) => (
          <div
            key={g.group}
            className={`grid gap-3 p-5 sm:grid-cols-[220px_1fr] sm:gap-6 sm:p-6 ${i > 0 ? "border-t border-line" : ""}`}
          >
            <h3 className="font-medium">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
