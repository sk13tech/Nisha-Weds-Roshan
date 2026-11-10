import { MessageCircle, Phone } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { CornerFlourish, Mandala, OrnateDivider } from "./ornaments";
import { useLang } from "../lang";

const NUMBERS = [
  {
    display: "+91 12345 67890",
    tel: "tel:+911234567890",
    wa: "https://wa.me/911234567890?text=Namaste%20Suresh%20ji!%20We%20have%20a%20question%20about%20Nisha%20%26%20Roshan%27s%20wedding%20on%203rd%20December.",
  },
  {
    display: "+91 68532 56985",
    tel: "tel:+916853256985",
    wa: "https://wa.me/916853256985?text=Namaste%20Suresh%20ji!%20We%20have%20a%20question%20about%20Nisha%20%26%20Roshan%27s%20wedding%20on%203rd%20December.",
  },
];

export default function Contact() {
  const { lang, t } = useLang();
  const H = lang === "hi";
  const serif = H ? "font-hindi-serif" : "font-serif";
  const pillCls = H
    ? "font-hindi-serif text-xs tracking-[0.15em]"
    : "font-roman text-[0.52rem] uppercase tracking-[0.35em]";

  return (
    <section id="contact" className="jali-dark relative scroll-mt-24 overflow-hidden bg-wine py-24 md:py-32">
      <div className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_65%)]" />
      <Mandala className="animate-spin-slower-rev pointer-events-none absolute -right-48 bottom-0 w-[440px] text-gold/[0.06]" strokeWidth={1} />

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          tone="dark"
          eyebrow={t.ctEyebrow}
          title={
            <>
              {t.ctTitleA}{" "}
              <span className={H ? "font-hindi-display text-shimmer-gold" : "font-script text-shimmer-gold"}>
                {t.ctTitleScript}
              </span>
            </>
          }
        />
        <Reveal delay={0.15} className="mt-4 text-center">
          <p className={`text-lg text-champagne/60 md:text-xl ${serif} ${H ? "" : "italic"}`}>{t.ctIntro}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {NUMBERS.map((c, i) => (
            <Reveal key={c.tel} delay={0.1 + i * 0.12}>
              <div className="group relative border border-gold/30 bg-night/50 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 md:p-10">
                <CornerFlourish className="absolute right-3 top-3 h-9 w-9 rotate-90 text-gold/40" />
                <CornerFlourish className="absolute bottom-3 left-3 h-9 w-9 -rotate-90 text-gold/40" />

                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold-light shadow-[0_0_26px_rgba(212,175,55,0.3)]">
                  <div className="absolute inset-1 rounded-full border border-gold/25" />
                  <Phone size={21} strokeWidth={1.4} />
                </div>

                <span
                  className={`mt-5 inline-block rounded-full border border-gold/40 px-4 py-1 text-gold-light/85 ${pillCls}`}
                >
                  {t.ctTags[i]}
                </span>
                <p className={`mt-3 text-3xl text-gold-light ${H ? "font-hindi-display" : "font-script"}`}>
                  {t.ctPerson}
                </p>
                <p
                  className={`mt-1 text-[0.58rem] text-champagne/55 ${
                    H ? "font-hindi-serif text-xs tracking-[0.15em]" : "pl-[0.4em] font-roman uppercase tracking-[0.4em]"
                  }`}
                >
                  {t.ctSide}
                </p>

                <a
                  href={c.tel}
                  className="mt-4 block font-roman text-xl tracking-[0.12em] text-ivory transition-colors hover:text-gold-light md:text-2xl"
                >
                  {c.display}
                </a>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href={c.tel}
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold-light px-6 py-2.5 text-night shadow-[0_6px_24px_rgba(212,175,55,0.3)] transition-all duration-400 hover:shadow-[0_8px_34px_rgba(212,175,55,0.5)] ${pillCls}`}
                  >
                    <Phone size={13} strokeWidth={1.8} />
                    {t.ctCall}
                  </a>
                  <a
                    href={c.wa}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-2.5 text-gold-light transition-all duration-400 hover:bg-gold/10 ${pillCls}`}
                  >
                    <MessageCircle size={13} strokeWidth={1.8} />
                    {t.ctWa}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center text-gold/70">
          <OrnateDivider width={260} />
        </Reveal>
        <Reveal delay={0.25} className="mt-6 text-center">
          <p className={`text-base text-champagne/45 ${serif} ${H ? "" : "italic"}`}>{t.ctClose}</p>
        </Reveal>
      </div>
    </section>
  );
}
