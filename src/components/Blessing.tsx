import Reveal from "./Reveal";
import { CornerFlourish, Mandala, OrnateDivider } from "./ornaments";

export default function Blessing() {
  return (
    <section className="relative overflow-hidden bg-cream jali-light py-24 md:py-36">
      {/* watermark mandalas */}
      <Mandala className="pointer-events-none absolute -left-40 -top-40 w-[420px] text-maroon/[0.07] animate-spin-slower" strokeWidth={1.4} />
      <Mandala className="pointer-events-none absolute -bottom-48 -right-44 w-[480px] text-maroon/[0.06] animate-spin-slower-rev" strokeWidth={1.4} />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal className="relative">
          <div className="relative bg-ivory/80 px-8 py-16 md:px-20 md:py-20 shadow-[0_30px_90px_-30px_rgba(87,20,32,0.35)] border border-gold/25">
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
              <p className="mt-6 font-serif italic text-xl md:text-2xl text-maroon">
                Om Shri Ganeshaya Namah
              </p>
              <p className="mt-2 pl-[0.5em] font-roman text-[0.6rem] md:text-[0.65rem] tracking-[0.5em] uppercase text-gold-soft">
                With the divine blessings of Lord Ganesha
              </p>

              <div className="my-8 text-gold-soft">
                <OrnateDivider width={260} />
              </div>

              <p className="font-serif text-lg md:text-2xl leading-relaxed text-ink/85">
                <span className="font-medium text-maroon">Mrs. Radha Devi &amp; Mr. Suresh Sah</span>
                <br />
                <span className="italic text-base md:text-lg text-ink/60">together with</span>
                <br />
                <span className="font-medium text-maroon">Mrs. Nagina Devi &amp; Mr. Raghu Nath Sah</span>
              </p>

              <p className="mt-8 max-w-xl font-serif text-lg md:text-xl leading-relaxed text-ink/75">
                request the honour of your presence as their children exchange
                vows of a lifetime — an evening of sacred fire, marigold air
                and two families becoming one.
              </p>

              <div className="mt-10 flex items-center gap-4 font-script text-4xl md:text-5xl text-maroon">
                <span>Nisha</span>
                <span className="mb-3 font-serif italic text-xl md:text-2xl text-gold-soft">weds</span>
                <span>Roshan</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
