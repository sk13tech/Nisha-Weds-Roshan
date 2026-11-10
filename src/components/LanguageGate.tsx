import { motion } from "framer-motion";
import { useLang, type Lang } from "../lang";
import { Diamond, OrnateDivider } from "./ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

export default function LanguageGate({ onPick }: { onPick: () => void }) {
  const { setLang, t } = useLang();

  const choose = (l: Lang) => {
    setLang(l);
    onPick();
  };

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
      className="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-night px-6"
    >
      {/* minimal ornaments — clean stage */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.9, ease }}
        className="flex flex-col items-center text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50">
          <Diamond className="h-3 w-3 text-gold" />
        </span>
        <p className="mt-6 font-hindi-serif text-base text-champagne/70 md:text-lg">{t.gateEyebrow}</p>
        <h2 className="text-shimmer-gold mt-3 font-hindi-display text-4xl leading-snug md:text-6xl">
          {t.gateTitle}
        </h2>
        <p className="mt-3 max-w-sm font-hindi-serif text-lg italic text-champagne/55 md:text-xl">
          {t.gateSub}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease }}
        className="mt-12 flex flex-col items-center gap-5 sm:flex-row md:gap-8"
      >
        <button
          onClick={() => choose("en")}
          className="group relative w-64 overflow-hidden border border-gold/40 bg-white/[0.03] px-8 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold-light hover:bg-gold/10 hover:shadow-[0_18px_50px_-12px_rgba(212,175,55,0.45)]"
        >
          <span className="block font-roman text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft">
            Continue in
          </span>
          <span className="mt-2 block font-serif text-4xl font-medium text-champagne transition-colors group-hover:text-gold-light">
            English
          </span>
          <span className="rule-gold mx-auto mt-4 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </button>

        <button
          onClick={() => choose("hi")}
          className="group relative w-64 overflow-hidden border border-gold/40 bg-white/[0.03] px-8 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold-light hover:bg-gold/10 hover:shadow-[0_18px_50px_-12px_rgba(212,175,55,0.45)]"
        >
          <span className="block font-hindi-serif text-sm text-gold-soft">जारी रखें</span>
          <span className="mt-2 block font-hindi-display text-4xl text-champagne transition-colors group-hover:text-gold-light">
            हिन्दी
          </span>
          <span className="rule-gold mx-auto mt-4 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 text-gold/60"
      >
        <OrnateDivider width={220} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-4 font-hindi-display text-2xl text-shimmer-gold"
      >
        निशा व रोशन
      </motion.p>
    </motion.div>
  );
}
