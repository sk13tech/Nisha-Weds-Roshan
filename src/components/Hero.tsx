import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { OrnateDivider } from "./ornaments";
import { useLang } from "../lang";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: d, ease },
  }),
};

function Item({
  children,
  delay,
  invited,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  invited: boolean;
  className?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      animate={invited ? "show" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ invited }: { invited: boolean }) {
  const { lang, t } = useLang();
  const H = lang === "hi";

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 220]);
  const bgScale = useTransform(scrollY, [0, 1000], [1.06, 1.16]);
  const fade = {
    hidden: { opacity: 0 },
    show: (d: number) => ({ opacity: 1, transition: { duration: 1.4, delay: d, ease } }),
  };

  const nameCls = H
    ? "text-shimmer-gold font-hindi-display text-[clamp(4.6rem,16vw,11rem)] leading-[1.05] drop-shadow-[0_6px_30px_rgba(0,0,0,0.55)]"
    : "text-shimmer-gold font-script text-[clamp(4.2rem,15vw,10.5rem)] leading-[0.95] drop-shadow-[0_6px_30px_rgba(0,0,0,0.55)]";

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* photographic backdrop with gentle parallax */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <motion.img
          src="/images/hero-bg.jpg"
          alt=""
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 2.4, delay: 0.1, ease } },
          }}
          initial="hidden"
          animate={invited ? "show" : "hidden"}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* legibility veils — keep the gold type crisp over the photograph */}
      <div className="absolute inset-0 bg-night/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/35 to-night" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(21,6,9,0.45)_15%,rgba(21,6,9,0.72)_100%)]" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-28 pt-32 text-center">
        <Item invited={invited} delay={0.15}>
          <p
            className={`text-[0.6rem] text-gold-light md:text-xs ${
              H
                ? "font-hindi-serif text-sm tracking-[0.15em] md:text-base"
                : "pl-[0.6em] font-roman uppercase tracking-[0.6em]"
            }`}
          >
            {t.heroEyebrow}
          </p>
        </Item>

        <Item invited={invited} delay={0.35} className="mt-6 md:mt-8">
          <h1 className={nameCls}>{t.brideName}</h1>
        </Item>

        <Item invited={invited} delay={0.5} className="-my-2 flex items-center gap-5 md:-my-3">
          <span className="rule-gold w-12 md:w-24" />
          <span
            className={`text-champagne ${
              H ? "font-hindi-serif text-3xl md:text-4xl" : "font-serif text-3xl italic md:text-5xl"
            }`}
          >
            {t.heroAnd}
          </span>
          <span className="rule-gold w-12 md:w-24" />
        </Item>

        <Item invited={invited} delay={0.65}>
          <h1 className={`${nameCls} ${H ? "" : "pl-6"}`}>{t.groomName}</h1>
        </Item>

        <Item invited={invited} delay={0.85} className="mt-7 md:mt-9">
          <p
            className={`text-lg text-champagne/85 md:text-2xl ${
              H ? "font-hindi-serif" : "font-serif italic"
            }`}
          >
            {t.heroTagline}
          </p>
        </Item>

        <Item invited={invited} delay={0.98} className="mt-6 text-gold">
          <OrnateDivider width={300} className="md:w-[380px]" />
        </Item>

        <Item invited={invited} delay={1.12} className="mt-6">
          <p
            className={`text-sm text-ivory md:text-lg ${
              H
                ? "font-hindi-serif text-base tracking-[0.12em] md:text-xl"
                : "pl-[0.35em] font-roman uppercase tracking-[0.35em]"
            }`}
          >
            {t.heroDate}
          </p>
          <p
            className={`mt-2 text-[0.6rem] text-champagne/60 md:text-[0.7rem] ${
              H
                ? "font-hindi-serif text-sm tracking-[0.12em]"
                : "pl-[0.45em] font-roman uppercase tracking-[0.45em]"
            }`}
          >
            {t.heroTime}
          </p>
        </Item>
      </div>

      {/* scroll cue */}
      <motion.div
        variants={fade}
        custom={1.6}
        initial="hidden"
        animate={invited ? "show" : "hidden"}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-light/80"
      >
        <span
          className={`text-[0.55rem] ${
            H ? "font-hindi-serif text-xs tracking-[0.15em]" : "pl-[0.5em] font-roman uppercase tracking-[0.5em]"
          }`}
        >
          {t.heroScroll}
        </span>
        <ChevronDown size={18} strokeWidth={1.5} className="animate-cue" />
      </motion.div>
    </section>
  );
}
