import { caseStudies, creator, education, experience, moreWork, profile, site, skills } from "@/data/content";

export const dynamic = "force-static";

// /llms.txt: a plain-text summary of the site for AI assistants and browsing agents. Google Search
// does not use it; it is built from data/content.ts so it never drifts from the site.
export function GET() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Role: ${profile.role} at ${profile.company} (${site.companyUrl})`,
    `- Location: ${profile.location}`,
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    `- Resume (PDF): ${site.url}${profile.resume}`,
    `- Instagram (${creator.name}, personal finance): ${profile.instagram}`,
    `- YouTube (${creator.name}, personal finance): ${profile.youtube}`,
    `- Instagram (personal): ${profile.instagramPersonal}`,
    "",
    "## Case studies",
    "",
    ...caseStudies.flatMap((c) => [
      `### ${c.title}`,
      "",
      `${c.context}. ${c.problem}`,
      "",
      ...c.built.map((b) => `- ${b}`),
      `- Impact: ${c.impact.map((m) => `${m.value} ${m.label}`).join("; ")}`,
      `- Stack: ${c.stack.join(", ")}`,
      "",
    ]),
    "## More work",
    "",
    ...moreWork.map((p) => `- ${p.title}: ${p.body}`),
    "",
    `## Experience at ${experience.company}`,
    "",
    experience.companyNote,
    "",
    ...experience.roles.flatMap((r) => [`### ${r.title} (${r.period})`, "", r.summary, "", ...r.points.map((p) => `- ${p}`), ""]),
    `## ${creator.eyebrow}: ${creator.name}`,
    "",
    `${creator.title} ${creator.body} ${creator.stats.map((x) => `${x.value} ${x.label}`).join(", ")}. ${creator.disclaimer}`,
    "",
    "## Skills",
    "",
    ...skills.map((g) => `- ${g.group}: ${g.items.join(", ")}`),
    "",
    "## Education",
    "",
    `- ${education.degree}, ${education.school} (${education.period})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
