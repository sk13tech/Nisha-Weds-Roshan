import Reveal from "./Reveal";
import { CornerFlourish, Mandala, OrnateDivider } from "./ornaments";
import { useLang } from "../lang";

export default function Blessing() {
  const { lang, t } = useLang();
  const H = lang === "hi";
  const serif = H ? "font-hindi-serif" : "font-serif";

  return (
    <section className="jali-light relative overflow-hidden bg-cream py-24 md:py-36">
      {/* watermark mandalas */}
      <Mandala className="animate-spin-slower pointer-events-none absolute -left-40 -top-40 w-[420px] text-maroon/[0.07]" strokeWidth={1.4} />
      <Mandala className="animate-spin-slower-rev pointer-events-none absolute -bottom-48 -right-44 w-[480px] text-maroon/[0.06]" strokeWidth={1.4} />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal className="relative">
          <div className="relative border border-gold/25 bg-ivory/80 px-8 py-16 shadow-[0_30px_90px_-30px_rgba(87,20,32,0.35)] md:px-20 md:py-20">
            <CornerFlourish className="absolute left-3 top-3 h-12 w-12 text-gold/70" />
            <CornerFlourish className="absolute right-3 top-3 h-12 w-12 rotate-90 text-gold/70" />
            <CornerFlourish className="absolute bottom-3 right-3 h-12 w-12 rotate-180 text-gold/70" />
            <CornerFlourish className="absolute bottom-3 left-3 h-12 w-12 -rotate-90 text-gold/70" />

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full border border-gold/50" />
                <div className="absolute -inset-[5px] rounded-full border border-gold/25" />
                <img
                  src="/images/ganesha.jpg"
                  alt="Lord Ganesha"
                  className="h-24 w-24 rounded-full object-cover shadow-[0_10px_30px_rgba(125,31,46,0.35)] md:h-28 md:w-28"
                />
              </div>
              <p className={`mt-6 text-xl text-maroon md:text-2xl ${H ? "font-hindi-serif" : "font-serif italic"}`}>
                Om Shri Ganeshaya Namah
              </p>
              <p
                className={`mt-2 text-[0.6rem] text-gold-soft md:text-[0.65rem] ${
                  H ? "font-hindi-serif text-xs tracking-[0.12em]" : "pl-[0.5em] font-roman uppercase tracking-[0.5em]"
                }`}
              >
                {t.blessSub}
              </p>

              <div className="my-8 text-gold-soft">
                <OrnateDivider width={260} />
              </div>

              <p className={`text-lg leading-relaxed text-ink/85 md:text-2xl ${serif}`}>
                <span className="font-medium text-maroon">{t.blessParents1}</span>
                <br />
                <span className={`text-base text-ink/60 md:text-lg ${H ? "" : "italic"}`}>{t.blessTogether}</span>
                <br />
                <span className="font-medium text-maroon">{t.blessParents2}</span>
              </p>

              <p className={`mt-8 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl ${serif}`}>
                {t.blessBody}
              </p>

              <div
                className={`mt-10 flex items-center gap-4 text-4xl text-maroon md:text-5xl ${
                  H ? "font-hindi-display" : "font-script"
                }`}
              >
                <span>{t.brideName}</span>
                <span
                  className={`mb-3 text-xl text-gold-soft md:text-2xl ${
                    H ? "font-hindi-serif" : "font-serif italic"
                  }`}
                >
                  {t.blessWeds}
                </span>
                <span>{t.groomName}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
