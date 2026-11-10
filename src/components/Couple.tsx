import Reveal, { SectionHeading } from "./Reveal";
import { Diamond, OrnateDivider } from "./ornaments";

function PersonCard({
  img,
  name,
  role,
  parents,
  quote,
  delay,
}: {
  img: string;
  name: string;
  role: string;
  parents: string;
  quote: string;
  delay: number;
}) {
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
          <p className="pl-[0.5em] font-roman text-[0.6rem] tracking-[0.5em] uppercase text-gold-soft">{role}</p>
          <h3 className="mt-2 font-script text-5xl md:text-6xl text-maroon">{name}</h3>
          <p className="mt-2 font-serif italic text-sm text-ink/55">{parents}</p>
          <div className="mx-auto mt-4 w-24 text-gold">
            <OrnateDivider width={96} />
          </div>
          <p className="mx-auto mt-4 max-w-[30ch] font-serif text-base leading-relaxed text-ink/75 md:text-lg">
            {quote}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="relative scroll-mt-24 overflow-hidden bg-ivory jali-light py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Two Souls · One Story"
          title={
            <>
              The Bride <span className="font-script text-gold-soft">&amp;</span> Groom
            </>
          }
        />
        <Reveal delay={0.2} className="mt-5 text-center">
          <p className="font-serif italic text-lg text-ink/55 md:text-xl">
            — when the night met its light —
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-center gap-14 md:mt-20 lg:flex-row lg:gap-24">
          <PersonCard
            img="/images/bride.jpg"
            name="Nisha"
            role="The Bride"
            parents="Daughter of Radha Devi & Suresh Sah"
            quote="A poet's heart with moonlight in her laughter — she turns strangers into family and evenings into memories."
            delay={0.05}
          />

          <Reveal delay={0.25} className="flex flex-col items-center gap-4 lg:-mx-6">
            <Diamond className="h-3 w-3 text-gold" />
            <span className="font-script text-6xl text-shimmer-gold md:text-7xl">&amp;</span>
            <Diamond className="h-3 w-3 text-gold" />
          </Reveal>

          <PersonCard
            img="/images/groom.jpg"
            name="Roshan"
            role="The Groom"
            parents="Son of Nagina Devi & Raghu Nath Sah"
            quote="Steady as dawn, warm as a winter lamp — he loved her first as a friend, and then for life."
            delay={0.15}
          />
        </div>

      </div>
    </section>
  );
}
