import { Diamond } from "./ornaments";

const ITEMS = [
  "Nisha Weds Roshan",
  "03 · 12 · 2026",
  "Save The Date",
  "Chas · Jharkhand",
  "#NishaWedsRoshan",
  "Two Families · One Celebration",
];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-roman text-[0.65rem] md:text-xs tracking-[0.45em] uppercase text-champagne/90">
            {t}
          </span>
          <Diamond className="h-2.5 w-2.5 shrink-0 text-gold" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-wine/90 py-4">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-wine to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-wine to-transparent" />
    </div>
  );
}
