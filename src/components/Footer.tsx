import Reveal from "./Reveal";
import { Diya, Diamond, Mandala, OrnateDivider } from "./ornaments";
import { useLang } from "../lang";

export default function Footer() {
  const { lang, t } = useLang();
  const H = lang === "hi";
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const navItems = [
    { l: t.navStory, h: "#couple" },
    { l: t.navSessions, h: "#events" },
    { l: t.navGallery, h: "#gallery" },
    { l: t.navVenue, h: "#venue" },
    { l: t.navContact, h: "#contact" },
  ];

  return (
    <footer className="jali-dark relative overflow-hidden bg-night pb-12 pt-24">
      <div className="rule-gold absolute inset-x-0 top-0" />
      <Mandala className="animate-spin-slower pointer-events-none absolute left-1/2 top-10 w-[640px] max-w-none -translate-x-1/2 text-gold/[0.05]" strokeWidth={0.8} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <div className="relative">
            <Diya className="h-14 w-14 text-gold/90" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p
            className={`text-shimmer-gold mt-6 text-5xl md:text-7xl ${H ? "font-hindi-display" : "font-script"}`}
          >
            {t.navBrand}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p
            className={`mt-4 text-[0.6rem] text-champagne/60 md:text-xs ${
              H ? "font-hindi-serif text-sm tracking-[0.15em]" : "pl-[0.5em] font-roman uppercase tracking-[0.5em]"
            }`}
          >
            {t.ftDate}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-6 text-gold/70">
          <OrnateDivider width={280} />
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navItems.map((x) => (
            <button
              key={x.h}
              onClick={() => go(x.h)}
              className={`text-[0.6rem] text-champagne/55 transition-colors hover:text-gold-light ${
                H ? "font-hindi-serif text-sm tracking-[0.1em]" : "pl-[0.35em] font-roman uppercase tracking-[0.35em]"
              }`}
            >
              {x.l}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.38} className="mt-10 flex items-center gap-3">
          <Diamond className="h-2.5 w-2.5 text-gold/60" />
          <p className={`text-lg text-champagne/50 ${H ? "font-hindi-serif" : "font-serif italic"}`}>{t.ftQuote}</p>
          <Diamond className="h-2.5 w-2.5 text-gold/60" />
        </Reveal>

        <Reveal delay={0.44} className="mt-8">
          <p
            className={`text-[0.6rem] text-gold-light/60 ${
              H ? "font-hindi-display" : "pl-[0.4em] font-roman uppercase tracking-[0.4em]"
            }`}
          >
            #NishaWedsRoshan
          </p>
          <p className={`mt-4 text-sm text-champagne/35 ${H ? "font-hindi-serif" : "font-serif"}`}>{t.ftMade}</p>
        </Reveal>
      </div>
    </footer>
  );
}
