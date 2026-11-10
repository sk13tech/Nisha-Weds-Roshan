import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mandala } from "./ornaments";

export default function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2100);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night"
      exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <Mandala className="w-44 h-44 md:w-56 md:h-56 text-gold/80 animate-spin-slower" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-script text-4xl md:text-5xl text-shimmer-gold"
          >
            N &amp; R
          </motion.span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, letterSpacing: "0.6em" }}
        transition={{ delay: 0.7, duration: 1.1 }}
        className="mt-10 pl-[0.6em] font-roman text-[0.6rem] md:text-[0.7rem] uppercase text-gold-light/80"
      >
        The night finds its light
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1.1, ease: "easeInOut" }}
        className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </motion.div>
  );
}
