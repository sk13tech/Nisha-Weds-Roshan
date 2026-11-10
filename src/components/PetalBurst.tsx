import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#e8a020", "#d4652a", "#f2c14e", "#b03a4a", "#e0763c"];

/* Radial burst of marigold petals, plays once on mount */
export default function PetalBurst({ count = 26 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.6;
        const dist = 170 + Math.random() * 280;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist * 0.85 - 50,
          r: Math.random() * 300 - 150,
          size: 9 + Math.random() * 9,
          color: COLORS[i % COLORS.length],
          delay: Math.random() * 0.15,
          dur: 1.5 + Math.random() * 1.1,
        };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute left-0 top-0"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            x: [0, p.x, p.x * 1.06],
            y: [0, p.y * 0.9, p.y + 130],
            opacity: [0, 1, 0],
            scale: [0.4, 1, 0.9],
            rotate: [0, p.r, p.r * 1.6],
          }}
          transition={{ duration: p.dur, delay: p.delay, times: [0, 0.5, 1], ease: "easeOut" }}
        >
          <svg width={p.size} height={p.size * 1.4} viewBox="0 0 16 22" fill={p.color}>
            <path d="M8 1 C13 5 13 14 8 21 C3 14 3 5 8 1 Z" opacity="0.95" />
            <path d="M8 3 C8 8 8 13 8 19" stroke="rgba(90,20,10,0.35)" strokeWidth="0.8" fill="none" />
          </svg>
        </motion.span>
      ))}
    </div>
  );
}
