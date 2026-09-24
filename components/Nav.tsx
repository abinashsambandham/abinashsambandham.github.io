"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Track the section under the top third of the screen, and how far down the page we are.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

        const line = window.innerHeight * 0.35;
        let current = "";
        for (const l of links) {
          const el = document.querySelector(l.href);
          if (el && el.getBoundingClientRect().top <= line) current = l.href;
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close the phone menu on Escape or a click outside it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${profile.name}, back to top`} className="group flex items-center gap-3">
          <Logo className="h-7 w-7 shrink-0 text-accent transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_var(--accent)]" />
          <span className="whitespace-nowrap font-display text-[15px] font-medium leading-none tracking-[-0.02em] sm:text-lg">
            Abinash <span className="text-accent">Sambandham</span>
          </span>
        </a>
        <div className="flex items-center gap-1 text-sm text-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "location" : undefined}
              className={`relative hidden rounded-md px-3 py-1.5 transition-colors hover:text-ink lg:inline ${
                active === l.href ? "text-ink" : ""
              }`}
            >
              {l.label}
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                  active === l.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <a
            href={profile.resume}
            className="ml-2 hidden rounded-lg bg-accent px-3.5 py-1.5 font-medium text-on-accent transition-opacity hover:opacity-90 lg:inline-block"
          >
            Resume
          </a>

          <div ref={menuRef} className="relative ml-1 lg:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                {open ? (
                  <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
            <div
              id="mobile-menu"
              hidden={!open}
              className="absolute right-0 top-[3.25rem] w-52 rounded-xl border border-line bg-surface p-2 shadow-2xl shadow-black/40"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? "location" : undefined}
                  className={`flex items-center justify-between rounded-md px-3 py-3 hover:bg-surface-2 ${
                    active === l.href ? "text-accent" : "text-ink"
                  }`}
                >
                  {l.label}
                  {active === l.href && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />}
                </a>
              ))}
              <a
                href={profile.resume}
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-between rounded-md border-t border-line px-3 py-3 text-ink hover:bg-surface-2"
              >
                Resume (PDF)
                <span aria-hidden className="text-accent">↓</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent/60 via-accent to-accent/60"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
