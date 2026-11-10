import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { Mandala } from "./ornaments";
import SaveTheDate from "./SaveTheDate";

const TARGET = new Date("2026-12-03T19:00:00+05:30").getTime();

function Unit({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-[74px] md:w-32 overflow-hidden border border-gold/30 bg-white/[0.04] py-5 md:py-8 backdrop-blur-sm">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={text}
            initial={{ y: -26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 26, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block font-roman text-4xl md:text-6xl text-champagne tabular-nums"
          >
            {text}
          </motion.span>
        </AnimatePresence>
        <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
      <p className="mt-3 pl-[0.4em] font-roman text-[0.55rem] md:text-[0.65rem] tracking-[0.4em] uppercase text-gold-light/80">
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const { d, h, m, s } = useMemo(
    () => ({
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff / 3600000) % 24),
      m: Math.floor((diff / 60000) % 60),
      s: Math.floor((diff / 1000) % 60),
    }),
    [diff]
  );

  return (
    <section className="relative overflow-hidden bg-wine jali-dark py-24 md:py-32">
      <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)]" />
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 w-[720px] max-w-none -translate-x-1/2 -translate-y-1/2 text-gold/[0.08] animate-spin-slower" strokeWidth={0.8} />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="pl-[0.55em] font-roman text-[0.65rem] md:text-xs tracking-[0.55em] uppercase text-gold">
            Counting the Moments
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl font-medium text-champagne md:text-6xl">
            Until We Say <span className="font-script text-shimmer-gold text-5xl md:text-7xl">forever</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-5 font-serif italic text-base md:text-lg text-champagne/60">
            Thursday, the third of December, two thousand twenty-six
          </p>
        </Reveal>

        <Reveal delay={0.28} className="mt-12 flex items-start justify-center gap-3 md:gap-8">
          <Unit value={d} label="Days" />
          <span className="pt-4 font-roman text-2xl text-gold/50 md:pt-8 md:text-4xl">:</span>
          <Unit value={h} label="Hours" />
          <span className="pt-4 font-roman text-2xl text-gold/50 md:pt-8 md:text-4xl">:</span>
          <Unit value={m} label="Minutes" />
          <span className="hidden pt-4 font-roman text-2xl text-gold/50 md:block md:pt-8 md:text-4xl">:</span>
          <span className="hidden md:block">
            <Unit value={s} label="Seconds" />
          </span>
        </Reveal>
        <Reveal delay={0.36} className="mt-6 md:hidden">
          <Unit value={s} label="Seconds" />
        </Reveal>

        <Reveal delay={0.42} className="mx-auto mt-16 max-w-md">
          <div className="rule-gold mb-10" />
          <SaveTheDate />
        </Reveal>
      </div>
    </section>
  );
}
