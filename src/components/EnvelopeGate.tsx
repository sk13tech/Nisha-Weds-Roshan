import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PetalBurst from "./PetalBurst";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);

  const trigger = () => {
    if (opened) return;
    // enter immersive fullscreen — valid here because this runs on a tap
    try {
      const el = document.documentElement as HTMLElement & {
        webkitRequestFullscreen?: () => Promise<void>;
      };
      if (el.requestFullscreen) el.requestFullscreen().catch(() => undefined);
      else el.webkitRequestFullscreen?.().catch(() => undefined);
    } catch {
      /* fullscreen unavailable (e.g. iOS) — continue gracefully */
    }
    // start the serenade with the petal burst
    window.dispatchEvent(new CustomEvent("nr:play-music"));
    setOpened(true);
    window.setTimeout(onOpen, 1750);
  };

  // fallback — auto unseal if the guest doesn't tap
  useEffect(() => {
    const t = setTimeout(trigger, 11000);
    return () => clearTimeout(t);
  }, [opened]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.85, ease: "easeInOut" } }}
      className="fixed inset-0 z-[85] flex flex-col items-center justify-center bg-night px-6"
      onClick={trigger}
      role="button"
      aria-label="Open the invitation"
    >
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.9, ease } }}
        exit={{ opacity: 0 }}
        className="mb-10 max-w-md pl-[0.55em] text-center font-roman text-[0.6rem] uppercase tracking-[0.55em] text-gold-light/85 md:text-xs"
      >
        With love, two families invite you
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.4, duration: 1.1, ease } }}
        style={{ perspective: 1200 }}
        className="relative"
      >
        {/* ---------- envelope ---------- */}
        <div className="relative h-[215px] w-[300px] md:h-[270px] md:w-[400px]">
          {/* back panel */}
          <div className="absolute inset-0 rounded-sm border border-gold/30 bg-gradient-to-b from-[#3a1017] to-[#22080d] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]" />

          {/* inner invitation card — rises out when unsealed */}
          <motion.div
            initial={false}
            animate={opened ? { y: "-82%" } : { y: 12 }}
            transition={{ delay: opened ? 0.6 : 0, duration: 0.95, ease }}
            className="absolute left-1/2 top-[6%] z-[15] flex h-[88%] w-[86%] -translate-x-1/2 flex-col items-center justify-center gap-1.5 border border-gold/40 bg-cream px-4 text-center shadow-xl md:gap-2.5"
          >
            <p className="font-roman text-[0.45rem] uppercase tracking-[0.4em] text-gold-soft md:text-[0.55rem]">
              The Wedding Invitation
            </p>
            <p className="font-script text-3xl leading-tight text-maroon md:text-4xl">
              Nisha &amp; Roshan
            </p>
            <span className="rule-gold w-20" />
            <p className="font-roman text-[0.5rem] uppercase tracking-[0.3em] text-ink/60 md:text-[0.6rem]">
              Thursday · 03 · 12 · 2026 · Chas
            </p>
            <p className="font-serif text-xs italic text-ink/50 md:text-sm">
              the night finds its light
            </p>
          </motion.div>

          {/* side pockets */}
          <div
            className="absolute inset-0 z-20 bg-gradient-to-br from-[#5a1620] to-[#3a0f16]"
            style={{ clipPath: "polygon(0 0, 50% 52%, 0 100%)" }}
          />
          <div
            className="absolute inset-0 z-20 bg-gradient-to-bl from-[#5a1620] to-[#3a0f16]"
            style={{ clipPath: "polygon(100% 0, 50% 52%, 100% 100%)" }}
          />
          {/* bottom pocket */}
          <div
            className="absolute inset-0 z-20 border-b border-gold/40 bg-gradient-to-t from-[#6b1b28] to-[#471019]"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 40%)" }}
          />

          {/* top flap */}
          <motion.div
            initial={false}
            animate={opened ? { rotateX: -178, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{
              rotateX: { delay: opened ? 0.25 : 0, duration: 0.8, ease: "easeInOut" },
              opacity: { delay: opened ? 0.95 : 0, duration: 0.35 },
            }}
            className="absolute inset-x-0 top-0 z-30 h-[56%] origin-top bg-gradient-to-b from-[#7a2534] to-[#571420]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              backfaceVisibility: "visible",
            }}
          >
            <div className="absolute inset-0 jali-dark opacity-50" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
          </motion.div>

          {/* wax seal */}
          <motion.div
            initial={false}
            animate={opened ? { scale: 0, rotate: 130, opacity: 0 } : { scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
            className="absolute left-1/2 top-[52%] z-40 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 md:h-[74px] md:w-[74px]"
              style={{
                background:
                  "radial-gradient(circle at 32% 30%, #94334a, #6b1b28 55%, #4a0f18)",
                animation: "seal-pulse 2.4s ease-in-out infinite",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex h-[calc(100%-10px)] w-[calc(100%-10px)] items-center justify-center rounded-full border border-dashed border-gold/50">
                <span className="font-script text-xl text-gold-light md:text-2xl">N·R</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={opened ? { opacity: 0 } : { opacity: [0.35, 1, 0.35] }}
        transition={opened ? { duration: 0.3 } : { delay: 1.1, duration: 2.2, repeat: Infinity }}
        className="mt-12 font-roman text-[0.55rem] uppercase tracking-[0.45em] text-champagne/70 md:text-[0.65rem]"
      >
        Tap the seal to open your invitation
      </motion.p>

      {/* marigold burst */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-50">
        {opened && <PetalBurst count={30} />}
      </div>
    </motion.div>
  );
}
