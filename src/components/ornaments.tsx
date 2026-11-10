/* ------------------------------------------------------------------ */
/*  Mandala — concentric royal mandala, stroke-based, use with        */
/*  animate-spin-slower for a majestic rotation                        */
/* ------------------------------------------------------------------ */
export function Mandala({
  className = "",
  strokeWidth = 1,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  const outer = Array.from({ length: 24 }, (_, i) => i * 15);
  const mid = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const dots = Array.from({ length: 36 }, (_, i) => i * 10);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        <circle cx="100" cy="100" r="97" />
        <circle cx="100" cy="100" r="86" strokeDasharray="2 6" />
        {dots.map((a) => (
          <circle
            key={`d${a}`}
            cx={100 + 92 * Math.cos((a * Math.PI) / 180)}
            cy={100 + 92 * Math.sin((a * Math.PI) / 180)}
            r="1.5"
            fill="currentColor"
            stroke="none"
          />
        ))}
        {outer.map((a) => (
          <path
            key={`p${a}`}
            d="M100 10 C107 24 107 38 100 52 C93 38 93 24 100 10 Z"
            transform={`rotate(${a} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="55" />
        {mid.map((a) => (
          <path
            key={`q${a}`}
            d="M100 48 C104.5 58 104.5 66 100 76 C95.5 66 95.5 58 100 48 Z"
            transform={`rotate(${a} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="30" strokeDasharray="1 5" />
        <path d="M100 86 L106 94 L114 100 L106 106 L100 114 L94 106 L86 100 L94 94 Z" />
        <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  OrnateDivider — flourished rule with a central diamond bloom      */
/* ------------------------------------------------------------------ */
export function OrnateDivider({
  className = "",
  width = 340,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <svg
      viewBox="0 0 340 28"
      width={width}
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M6 14 H116" opacity="0.8" />
      <path d="M334 14 H224" opacity="0.8" />
      <path d="M116 14 q 10 0 15 -8" />
      <path d="M224 14 q -10 0 -15 -8" />
      <path d="M116 14 q 10 0 15 8" />
      <path d="M224 14 q -10 0 -15 8" />
      <path d="M170 5 L177.5 14 L170 23 L162.5 14 Z" />
      <circle cx="170" cy="14" r="2" fill="currentColor" stroke="none" />
      <path d="M150 14 L154 10.8 L154 17.2 Z" fill="currentColor" stroke="none" opacity="0.7" />
      <path d="M190 14 L186 10.8 L186 17.2 Z" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="8" cy="14" r="2.4" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="332" cy="14" r="2.4" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Lotus — stylised open lotus                                        */
/* ------------------------------------------------------------------ */
export function Lotus({ className = "" }: { className?: string }) {
  const petal = "M24 5 C28.5 11.5, 28.5 18, 24 23.5 C19.5 18, 19.5 11.5, 24 5 Z";
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    >
      <path d={petal} />
      <path d={petal} transform="rotate(30 24 24)" />
      <path d={petal} transform="rotate(-30 24 24)" />
      <path d={petal} transform="rotate(58 24 25)" />
      <path d={petal} transform="rotate(-58 24 25)" />
      <path d="M6 32 Q24 44 42 32" strokeLinecap="round" />
      <path d="M12 36.5 Q24 45 36 36.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Diya — brass lamp with flame                                       */
/* ------------------------------------------------------------------ */
export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 8 C27.2 11.8 28 15.5 24 19.5 C20 15.5 20.8 11.8 24 8 Z" />
      <path d="M24 22 V26" />
      <path d="M7 27 H41 C39.8 33.5 32.9 38 24 38 C15.1 38 8.2 33.5 7 27 Z" />
      <path d="M13 40 H35" opacity="0.7" />
      <path d="M19 43 H29" opacity="0.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  CornerFlourish — vine quarter-arc for framing cards                */
/* ------------------------------------------------------------------ */
export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M60 2 C28 6 8 26 3 60" />
      <path d="M60 14 C36 17 20 32 15 59" opacity="0.65" />
      <circle cx="60" cy="2" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="3" cy="60" r="2.2" fill="currentColor" stroke="none" />
      <path d="M44 6 q -6 -2 -9 2 q 5 1 9 -2 Z" fill="currentColor" stroke="none" opacity="0.8" />
      <path d="M6 44 q -2 -6 2 -9 q 1 5 -2 9 Z" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Diamond — tiny star-diamond separator                              */
/* ------------------------------------------------------------------ */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden fill="currentColor">
      <path d="M8 1 L11 8 L8 15 L5 8 Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Monogram — N & R crest inside double ring                          */
/* ------------------------------------------------------------------ */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full border border-gold/50" />
      <div className="absolute inset-1.5 rounded-full border border-gold/25" />
      <span className="font-script text-shimmer-gold leading-none">N&nbsp;&amp;&nbsp;R</span>
    </div>
  );
}
