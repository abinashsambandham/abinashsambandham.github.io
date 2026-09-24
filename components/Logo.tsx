// The mark ("Node A · Precision"): an A drawn as a small agent graph. Solid nodes are the
// orchestrator (apex) and the outcomes (feet); the open nodes on the crossbar are checkpoints.
// Edges stop short of each node, like a network diagram.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden className={className}>
      <path
        d="M54.98 27.99 42.03 58.93M32.76 81.07 29.02 90.01M65.02 27.99 77.97 58.93M87.24 81.07 90.98 90.01M49.4 70h21.2"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="16" r="7.5" fill="currentColor" />
      <circle cx="24" cy="102" r="7.5" fill="currentColor" />
      <circle cx="96" cy="102" r="7.5" fill="currentColor" />
      <circle cx="37.4" cy="70" r="5" className="fill-bg" stroke="currentColor" strokeWidth="3" />
      <circle cx="82.6" cy="70" r="5" className="fill-bg" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
