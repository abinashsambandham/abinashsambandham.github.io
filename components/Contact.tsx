import { profile } from "@/data/content";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-24">
      <div data-reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl"
        />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk about agents, RAG and AI in production.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Happy to compare notes on multi-agent systems, evals or document intelligence, or to go deeper on any of the
          work above.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.resume}
            className="rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Resume (PDF) ↓
          </a>
        </div>
      </div>
    </section>
  );
}
