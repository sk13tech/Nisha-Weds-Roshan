import { motion } from "framer-motion";
import React from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 34,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Section heading kit — eyebrow / title / divider, reused site-wide  */
export function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <Reveal>
        <p
          className={`font-roman text-[0.65rem] md:text-xs tracking-[0.55em] uppercase ${
            tone === "light" ? "text-maroon" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-serif font-medium leading-[1.05] text-4xl md:text-6xl ${
            tone === "light" ? "text-ink" : "text-champagne"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
