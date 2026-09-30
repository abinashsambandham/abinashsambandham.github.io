"use client";

import { useEffect, useRef, useState } from "react";

// Motion is for people watching the page. Background tabs, automated browsers (AI agents, crawlers)
// and reduced-motion users get the finished page straight away: every section visible, real numbers.
function motionAllowed() {
  return (
    document.visibilityState === "visible" &&
    !navigator.webdriver &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Reveals every [data-reveal] element as it scrolls into view. Elements added or replaced later
// (client re-renders, hot reload) are picked up too, so nothing is left hidden.
export function RevealObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !motionAllowed()) return;
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    const watch = () =>
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    watch();

    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    // Backup for browsers that pause or skip observer callbacks: reveal anything already in view.
    let frame = 0;
    const sweep = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const limit = window.innerHeight * 0.95;
        document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < limit && r.bottom > 0) el.classList.add("is-visible");
        });
      });
    };
    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep);

    // If the tab goes to the background, drop the effect so nothing stays hidden while no one watches.
    const onHide = () => {
      if (document.visibilityState === "hidden") root.classList.remove("reveal-ready");
    };
    document.addEventListener("visibilitychange", onHide);

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
      document.removeEventListener("visibilitychange", onHide);
      root.classList.remove("reveal-ready");
    };
  }, []);
  return null;
}

// Counts up to a number once it scrolls into view. The real value is always what renders first, and
// it is restored immediately if the animation cannot run or the tab is hidden part-way through.
export function CountUp({ value, suffix = "", duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const decimals = Number.isInteger(value) ? 0 : 1;
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || !motionAllowed()) return;
    let raf = 0;
    const finish = () => {
      cancelAnimationFrame(raf);
      setShown(value);
    };
    const onHide = () => document.visibilityState === "hidden" && finish();
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !motionAllowed()) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setShown(value * (1 - Math.pow(1 - t, 3)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    document.addEventListener("visibilitychange", onHide);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onHide);
      finish();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
