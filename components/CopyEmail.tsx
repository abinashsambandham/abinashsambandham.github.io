"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Older browsers: fall back to a hidden textarea.
      const t = document.createElement("textarea");
      t.value = email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
        {copied ? (
          <path d="m3 8.5 3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.8" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.5 5V3.8A1.3 1.3 0 0 0 9.2 2.5H3.8a1.3 1.3 0 0 0-1.3 1.3v5.4a1.3 1.3 0 0 0 1.3 1.3H5" stroke="currentColor" strokeWidth="1.4" />
          </>
        )}
      </svg>
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
