import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, Clock, Flower2, Flame, MapPin, Music2, Sparkles, Sun } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { OrnateDivider } from "./ornaments";

const SESSIONS = [
  {
    icon: Flower2,
    numeral: "I",
    accent: "#4a5d23",
    img: "/images/gallery-mehndi.jpg",
    day: "Tuesday",
    date: "01 December 2026",
    time: "11:00 AM Onwards",
    title: "Mehndi",
    venue: "Ram Nagar Colony, Chas",
    text: "A morning of henna, marigolds and mango sherbet — Nisha's hands painted with little stories in mehndi while the aunties compete over whose design blooms best.",
  },
  {
    icon: Sun,
    numeral: "II",
    accent: "#c98a12",
    img: "/images/gallery-haldi.jpg",
    day: "Wednesday",
    date: "02 December 2026",
    time: "11:00 AM Onwards",
    title: "Haldi",
    venue: "Ram Nagar Colony, Chas",
    text: "Turmeric, laughter and a golden glow that no filter can match. Wear yellow — and expect to leave drenched in joy (and possibly haldi).",
  },
  {
    icon: Music2,
    numeral: "III",
    accent: "#6b2d5c",
    img: "/images/hero-bg.jpg",
    day: "Wednesday",
    date: "02 December 2026",
    time: "07:00 PM Onwards",
    title: "Sangeet",
    venue: "Ram Nagar Colony, Chas",
    text: "An evening of music and dance beneath strings of lights, where two families battle it out on stage. Bring your best moves — bragging rights are eternal.",
  },
  {
    icon: Flame,
    numeral: "IV",
    accent: "#7d1f2e",
    img: "/images/gallery-mandap.jpg",
    day: "Thursday",
    date: "03 December 2026",
    time: "07:00 PM · The Muhurtham",
    title: "The Wedding",
    venue: "Ram Nagar Colony, Chas",
    text: "Pheras around the sacred fire, seven vows beneath a winter-night sky — the luminous moment the night finally finds its light.",
    featured: true,
  },
  {
    icon: Sparkles,
    numeral: "V",
    accent: "#a4782a",
    img: "/images/venue.jpg",
    day: "Thursday",
    date: "03 December 2026",
    time: "07:00 PM Onwards",
    title: "The Reception",
    venue: "Bholu Bandh, Near Bichali Dukan",
    text: "Dinner, blessings and an evening glowing gold — a joyful first celebration for the newlyweds, hosted by both families together.",
  },
];

function SessionPanel({ s, i }: { s: (typeof SESSIONS)[number]; i: number }) {
  const flip = i % 2 === 1;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const Icon = s.icon;

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col border border-gold/25 bg-ivory shadow-[0_30px_90px_-35px_rgba(87,20,32,0.5)] lg:flex-row ${
        flip ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* accent spine */}
      <span
        className="absolute inset-x-0 top-0 z-20 h-[3px]"
        style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
      />

      {/* photograph with parallax */}
      <div className="relative h-72 overflow-hidden md:h-96 lg:h-auto lg:w-1/2">
        <motion.img
          src={s.img}
          alt={s.title}
          loading="lazy"
          style={{ y }}
          className="absolute -top-[6%] left-0 h-[112%] w-full scale-[1.02] object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/45 via-transparent to-night/20" />
        <div className="absolute inset-3 border border-champagne/40" />
        {s.featured && (
          <span className="absolute left-6 top-6 z-10 rounded-full bg-gradient-to-r from-gold-soft via-gold-light to-gold-soft px-5 py-1.5 font-roman text-[0.5rem] uppercase tracking-[0.35em] text-night shadow-lg md:text-[0.55rem]">
            The Main Ceremony
          </span>
        )}
        {/* ghost numeral on photo */}
        <span className="pointer-events-none absolute bottom-2 right-5 select-none font-roman text-[5.5rem] leading-none text-champagne/25 md:text-[7rem]">
          {s.numeral}
        </span>
      </div>

      {/* copy */}
      <div className="relative flex flex-1 flex-col justify-center px-8 py-12 md:px-12 lg:w-1/2 lg:px-14 lg:py-16">
        {/* seam medallion — desktop */}
        <div
          className={`absolute top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-wine text-gold-light shadow-[0_0_26px_rgba(212,175,55,0.35)] lg:flex ${
            flip ? "-right-7" : "-left-7"
          }`}
        >
          <div className="absolute inset-1 rounded-full border border-gold/25" />
          <Icon size={22} strokeWidth={1.4} />
        </div>

        <span className="pointer-events-none absolute right-6 top-4 select-none font-roman text-[7rem] leading-none text-maroon/[0.06] md:text-[9rem]">
          {s.numeral}
        </span>

        <div className="flex items-center gap-3 lg:hidden">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-maroon text-gold-light shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Icon size={19} strokeWidth={1.4} />
          </span>
          <span className="rule-gold w-14" />
        </div>

        <p
          className="mt-5 font-roman text-[0.6rem] uppercase tracking-[0.45em] lg:mt-0 md:text-[0.65rem]"
          style={{ color: s.accent }}
        >
          Session {s.numeral} · {s.day}
        </p>
        <h3 className="mt-3 font-serif text-4xl font-medium text-maroon md:text-5xl">{s.title}</h3>

        <div className="mt-5 flex flex-col gap-2">
          <span className="flex items-center gap-2.5 text-ink/65">
            <CalendarDays size={14} className="shrink-0 text-gold-soft" strokeWidth={1.6} />
            <span className="font-roman text-[0.62rem] uppercase tracking-[0.25em]">{s.date}</span>
          </span>
          <span className="flex items-center gap-2.5 text-ink/65">
            <Clock size={14} className="shrink-0 text-gold-soft" strokeWidth={1.6} />
            <span className="font-roman text-[0.62rem] uppercase tracking-[0.25em]">{s.time}</span>
          </span>
          <span className="flex items-center gap-2.5 text-ink/65">
            <MapPin size={14} className="shrink-0 text-gold-soft" strokeWidth={1.6} />
            <span className="font-roman text-[0.62rem] uppercase tracking-[0.25em]">{s.venue}</span>
          </span>
        </div>

        <span className="rule-gold mt-6 w-24" />
        <p className="mt-5 max-w-[52ch] font-serif text-base italic leading-relaxed text-ink/70 md:text-lg">
          {s.text}
        </p>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className="jali-light relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Three Days · Five Sessions"
          title={
            <>
              The Wedding <span className="font-script text-gold-soft">sessions</span>
            </>
          }
        />
        <Reveal delay={0.15} className="mt-6 flex justify-center text-gold-soft">
          <OrnateDivider width={300} />
        </Reveal>
        <Reveal delay={0.22} className="mt-4 text-center">
          <p className="mx-auto max-w-xl font-serif text-lg italic text-ink/55 md:text-xl">
            Every ceremony is its own little universe — walk through each one with us.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
          {SESSIONS.map((s, i) => (
            <Reveal key={s.title} delay={0.05}>
              <SessionPanel s={s} i={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 text-center">
          <p className="font-serif text-lg italic text-ink/60 md:text-xl">
            Dress code — festive Indian attire in jewel tones <span className="text-gold-soft">&amp;</span> gold
          </p>
        </Reveal>
      </div>
    </section>
  );
}
