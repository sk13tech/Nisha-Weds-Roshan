import { MapPin, Navigation, Shirt } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { CornerFlourish } from "./ornaments";
import { useLang } from "../lang";

export default function Venue() {
  const { lang, t } = useLang();
  const H = lang === "hi";
  const serif = H ? "font-hindi-serif" : "font-serif";

  return (
    <section id="venue" className="jali-light relative scroll-mt-24 overflow-hidden bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-gold/50" />
            <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-gold/50" />
            <div className="group relative overflow-hidden shadow-[0_35px_90px_-25px_rgba(87,20,32,0.45)]">
              <img
                src="/images/venue.jpg"
                alt="The wedding venue at dusk"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.8s] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
              <div className="absolute inset-3 border border-champagne/50" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p
                    className={`text-[0.55rem] text-gold-light ${
                      H ? "font-hindi-serif text-xs tracking-[0.15em]" : "pl-[0.4em] font-roman uppercase tracking-[0.4em]"
                    }`}
                  >
                    {t.vnCapEyebrow}
                  </p>
                  <p className={`mt-1 text-3xl text-champagne ${H ? "font-hindi-display" : "font-script"}`}>
                    {t.vnCapTitle}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow={t.vnEyebrow}
              title={
                <>
                  {t.vnTitleA}{" "}
                  <span className={H ? "font-hindi-display text-gold-soft" : "font-script text-gold-soft"}>
                    {t.vnTitleScript}
                  </span>
                </>
              }
            />

            <Reveal delay={0.2} className="mt-8 space-y-5">
              <p className={`text-xl leading-relaxed text-ink/80 md:text-2xl ${serif}`}>{t.vnPara}</p>
              <div className="flex items-start gap-3 text-ink/70">
                <MapPin size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-gold-soft" />
                <p className={`text-lg leading-relaxed ${serif}`}>
                  <span className="font-medium text-maroon">{t.vnCeremonyLabel}</span>
                  <br />
                  {t.vnCeremonyAddr[0]}
                  <br />
                  {t.vnCeremonyAddr[1]}
                </p>
              </div>
              <div className="flex items-start gap-3 text-ink/70">
                <MapPin size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-gold-soft" />
                <p className={`text-lg leading-relaxed ${serif}`}>
                  <span className="font-medium text-maroon">{t.vnReceptionLabel}</span>
                  <br />
                  {t.vnReceptionAddr[0]}
                  <br />
                  {t.vnReceptionAddr[1]}
                </p>
              </div>
              <div className="flex items-start gap-3 text-ink/70">
                <Shirt size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-gold-soft" />
                <p className={`text-lg leading-relaxed ${serif}`}>{t.vnDress}</p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ram+Nagar+Colony+Chas+Jharkhand"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-maroon via-rosewood to-maroon px-9 py-4 font-roman text-[0.65rem] uppercase tracking-[0.35em] text-champagne shadow-[0_14px_40px_-10px_rgba(125,31,46,0.6)] transition-shadow hover:shadow-[0_18px_55px_-8px_rgba(125,31,46,0.75)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Navigation size={15} strokeWidth={1.6} className="relative" />
                <span className={`relative ${H ? "font-hindi-serif text-sm tracking-[0.1em]" : "pl-[0.35em]"}`}>
                  {t.vnDirections}
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.4} className="mt-10">
              <div className="relative border border-gold/30 bg-cream/70 p-6">
                <CornerFlourish className="absolute right-2 top-2 h-8 w-8 rotate-90 text-gold/60" />
                <p
                  className={`text-[0.6rem] text-gold-soft ${
                    H ? "font-hindi-serif text-xs tracking-[0.15em]" : "pl-[0.4em] font-roman uppercase tracking-[0.4em]"
                  }`}
                >
                  {t.vnGuestTitle}
                </p>
                <p className={`mt-2 text-base leading-relaxed text-ink/70 ${serif} ${H ? "" : "italic"}`}>
                  {t.vnGuestNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
