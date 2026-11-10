import Reveal from "./Reveal";
import { Diya, Diamond, Mandala, OrnateDivider } from "./ornaments";

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-night jali-dark pb-12 pt-24">
      <div className="rule-gold absolute inset-x-0 top-0" />
      <Mandala className="pointer-events-none absolute left-1/2 top-10 w-[640px] max-w-none -translate-x-1/2 text-gold/[0.05] animate-spin-slower" strokeWidth={0.8} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <div className="relative">
            <Diya className="h-14 w-14 text-gold/90" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 font-script text-5xl md:text-7xl text-shimmer-gold">Nisha &amp; Roshan</p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 pl-[0.5em] font-roman text-[0.6rem] md:text-xs tracking-[0.5em] uppercase text-champagne/60">
            03 · 12 · 2026 &nbsp;—&nbsp; Chas · Jharkhand
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-6 text-gold/70">
          <OrnateDivider width={280} />
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { l: "Our Story", h: "#couple" },
            { l: "Sessions", h: "#events" },
            { l: "Gallery", h: "#gallery" },
            { l: "Venue", h: "#venue" },
            { l: "Contact", h: "#contact" },
          ].map((x) => (
            <button
              key={x.h}
              onClick={() => go(x.h)}
              className="font-roman text-[0.6rem] tracking-[0.35em] pl-[0.35em] uppercase text-champagne/55 transition-colors hover:text-gold-light"
            >
              {x.l}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.38} className="mt-10 flex items-center gap-3">
          <Diamond className="h-2.5 w-2.5 text-gold/60" />
          <p className="font-serif italic text-lg text-champagne/50">
            “Every love story is beautiful — ours is written in gold.”
          </p>
          <Diamond className="h-2.5 w-2.5 text-gold/60" />
        </Reveal>

        <Reveal delay={0.44} className="mt-8">
          <p className="font-roman text-[0.6rem] tracking-[0.4em] pl-[0.4em] uppercase text-gold-light/60">
            #NishaWedsRoshan
          </p>
          <p className="mt-4 font-serif text-sm text-champagne/35">
            Crafted with love · Two families, one celebration · MMXXVI
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
