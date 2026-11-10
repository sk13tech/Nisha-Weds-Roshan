import Reveal, { SectionHeading } from "./Reveal";
import { Diamond, OrnateDivider } from "./ornaments";
import { useLang } from "../lang";

function PersonCard({
  img,
  name,
  role,
  parents,
  quote,
  delay,
  hindi,
}: {
  img: string;
  name: string;
  role: string;
  parents: string;
  quote: string;
  delay: number;
  hindi: boolean;
}) {
  const serif = hindi ? "font-hindi-serif" : "font-serif";
  return (
    <Reveal delay={delay} className="w-full max-w-sm">
      <div className="group relative">
        {/* offset gold plate */}
        <div className="arch-frame absolute -inset-x-3 -top-5 bottom-8 border border-gold/40 transition-transform duration-700 group-hover:-translate-y-2" />
        <div className="arch-frame relative overflow-hidden shadow-[0_35px_80px_-25px_rgba(87,20,32,0.5)]">
          <img
            src={img}
            alt={name}
            className="aspect-[3/4] w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-40" />
          <div className="arch-frame absolute inset-3 border border-champagne/50" />
        </div>
        <div className="relative mt-8 text-center">
          <p
            className={`text-[0.6rem] text-gold-soft ${
              hindi
                ? "font-hindi-serif text-xs tracking-[0.2em]"
                : "pl-[0.5em] font-roman uppercase tracking-[0.5em]"
            }`}
          >
            {role}
          </p>
          <h3
            className={`mt-2 text-5xl text-maroon md:text-6xl ${
              hindi ? "font-hindi-display" : "font-script"
            }`}
          >
            {name}
          </h3>
          <p className={`mt-2 text-sm text-ink/55 ${serif} ${hindi ? "" : "italic"}`}>{parents}</p>
          <div className="mx-auto mt-4 w-24 text-gold">
            <OrnateDivider width={96} />
          </div>
          <p className={`mx-auto mt-4 max-w-[30ch] text-base leading-relaxed text-ink/75 md:text-lg ${serif}`}>
            {quote}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Couple() {
  const { lang, t } = useLang();
  const H = lang === "hi";

  return (
    <section id="couple" className="jali-light relative scroll-mt-24 overflow-hidden bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.coupleEyebrow}
          title={
            <>
              {t.coupleTitleA}{" "}
              <span className={H ? "font-hindi-serif text-2xl text-gold-soft md:text-3xl" : "font-script text-gold-soft"}>
                {t.coupleAmp}
              </span>{" "}
              {t.coupleTitleB}
            </>
          }
        />
        <Reveal delay={0.2} className="mt-5 text-center">
          <p
            className={`text-lg text-ink/55 md:text-xl ${H ? "font-hindi-serif" : "font-serif italic"}`}
          >
            {t.coupleSub}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-center gap-14 md:mt-20 lg:flex-row lg:gap-24">
          <PersonCard
            img="/images/bride.jpg"
            name={t.brideName}
            role={t.brideRole}
            parents={t.brideParents}
            quote={t.brideQuote}
            delay={0.05}
            hindi={H}
          />

          <Reveal delay={0.25} className="flex flex-col items-center gap-4 lg:-mx-6">
            <Diamond className="h-3 w-3 text-gold" />
            <span className={`text-shimmer-gold text-6xl md:text-7xl ${H ? "font-hindi-serif" : "font-script"}`}>
              {t.coupleAmp}
            </span>
            <Diamond className="h-3 w-3 text-gold" />
          </Reveal>

          <PersonCard
            img="/images/groom.jpg"
            name={t.groomName}
            role={t.groomRole}
            parents={t.groomParents}
            quote={t.groomQuote}
            delay={0.15}
            hindi={H}
          />
        </div>
      </div>
    </section>
  );
}
