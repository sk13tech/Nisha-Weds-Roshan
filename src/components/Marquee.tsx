import { useLang } from "../lang";
import { Diamond } from "./ornaments";

export default function Marquee() {
  const { lang, t } = useLang();
  const H = lang === "hi";

  const row = (
    <div className="flex shrink-0 items-center">
      {t.marq.map((x: string) => (
        <span key={x} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 text-[0.65rem] text-champagne/90 md:text-xs ${
              H ? "font-hindi-serif text-sm tracking-[0.1em]" : "font-roman uppercase tracking-[0.45em]"
            }`}
          >
            {x}
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
