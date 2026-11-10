import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { Mandala } from "./ornaments";
import SaveTheDate from "./SaveTheDate";
import { useLang } from "../lang";

const TARGET = new Date("2026-12-03T19:00:00+05:30").getTime();

function Unit({ value, label, hindi }: { value: number; label: string; hindi: boolean }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-[74px] overflow-hidden border border-gold/30 bg-white/[0.04] py-5 backdrop-blur-sm md:w-32 md:py-8">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={text}
            initial={{ y: -26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 26, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block font-roman text-4xl tabular-nums text-champagne md:text-6xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
        <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
      <p
        className={`mt-3 text-[0.55rem] text-gold-light/80 md:text-[0.65rem] ${
          hindi
            ? "font-hindi-serif text-xs tracking-[0.15em] md:text-sm"
            : "pl-[0.4em] font-roman uppercase tracking-[0.4em]"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());
  const { lang, t } = useLang();
  const H = lang === "hi";

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
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
    <section className="jali-dark relative overflow-hidden bg-wine py-24 md:py-32">
      <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)]" />
      <Mandala className="animate-spin-slower pointer-events-none absolute left-1/2 top-1/2 w-[720px] max-w-none -translate-x-1/2 -translate-y-1/2 text-gold/[0.08]" strokeWidth={0.8} />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p
            className={`text-[0.65rem] text-gold md:text-xs ${
              H ? "font-hindi-serif text-sm tracking-[0.15em] md:text-base" : "pl-[0.55em] font-roman uppercase tracking-[0.55em]"
            }`}
          >
            {t.cdEyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className={`mt-4 text-4xl font-medium text-champagne md:text-6xl ${H ? "font-hindi-serif" : "font-serif"}`}>
            {t.cdTitleA}{" "}
            <span className={`text-shimmer-gold text-5xl md:text-7xl ${H ? "font-hindi-display" : "font-script"}`}>
              {t.cdTitleScript}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className={`mt-5 text-base text-champagne/60 md:text-lg ${H ? "font-hindi-serif" : "font-serif italic"}`}>
            {t.cdDateLine}
          </p>
        </Reveal>

        <Reveal delay={0.28} className="mt-12 flex items-start justify-center gap-3 md:gap-8">
          <Unit value={d} label={t.cdUnits[0]} hindi={H} />
          <span className="pt-4 font-roman text-2xl text-gold/50 md:pt-8 md:text-4xl">:</span>
          <Unit value={h} label={t.cdUnits[1]} hindi={H} />
          <span className="pt-4 font-roman text-2xl text-gold/50 md:pt-8 md:text-4xl">:</span>
          <Unit value={m} label={t.cdUnits[2]} hindi={H} />
          <span className="hidden pt-4 font-roman text-2xl text-gold/50 md:block md:pt-8 md:text-4xl">:</span>
          <span className="hidden md:block">
            <Unit value={s} label={t.cdUnits[3]} hindi={H} />
          </span>
        </Reveal>
        <Reveal delay={0.36} className="mt-6 md:hidden">
          <Unit value={s} label={t.cdUnits[3]} hindi={H} />
        </Reveal>

        <Reveal delay={0.42} className="mx-auto mt-16 max-w-md">
          <div className="rule-gold mb-10" />
          <SaveTheDate />
        </Reveal>
      </div>
    </section>
  );
}
