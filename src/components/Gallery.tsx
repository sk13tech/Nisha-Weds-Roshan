import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { Mandala } from "./ornaments";

const PHOTOS = [
  { src: "/images/couple.jpg", caption: "The Promise", span: "row-span-2 md:col-span-2" },
  { src: "/images/gallery-varmala.jpg", caption: "Varmala", span: "md:col-span-2" },
  { src: "/images/gallery-mehndi.jpg", caption: "Mehndi", span: "" },
  { src: "/images/gallery-rings.jpg", caption: "The Rings", span: "" },
  { src: "/images/gallery-mandap.jpg", caption: "The Mandap", span: "md:col-span-2" },
];

function Lightbox({ active, onClose, onNav }: { active: number | null; onClose: () => void; onNav: (d: number) => void }) {
  const open = active !== null;
  const photo = open ? PHOTOS[active] : null;

  return (
    <AnimatePresence>
      {open && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[95] flex flex-col bg-night/95 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer — ${photo.caption}`}
        >
          {/* chrome */}
          <div className="flex items-center justify-between px-5 py-4 md:px-8">
            <span className="font-roman text-[0.6rem] uppercase tracking-[0.4em] text-gold-light/70 md:text-xs">
              {String(active + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              aria-label="Close viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold/15"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* stage */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-20" onClick={(e) => e.stopPropagation()}>
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.94, x: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) onNav(1);
                else if (info.offset.x > 70) onNav(-1);
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                draggable={false}
                className="max-h-[76vh] max-w-full select-none rounded-sm object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
              />
            </motion.div>

            {/* arrows */}
            <button
              onClick={() => onNav(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-night/60 text-gold-light backdrop-blur transition-all hover:bg-gold hover:text-night md:left-6"
            >
              <ChevronLeft size={22} strokeWidth={1.6} />
            </button>
            <button
              onClick={() => onNav(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-night/60 text-gold-light backdrop-blur transition-all hover:bg-gold hover:text-night md:right-6"
            >
              <ChevronRight size={22} strokeWidth={1.6} />
            </button>
          </div>

          <p className="pb-5 text-center font-roman text-[0.5rem] uppercase tracking-[0.45em] text-champagne/40">
            Swipe or use arrows · Esc to close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const nav = useCallback(
    (d: number) => setActive((a) => (a === null ? null : (a + d + PHOTOS.length) % PHOTOS.length)),
    []
  );

  // keyboard + scroll lock while the viewer is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "ArrowLeft") nav(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, nav]);

  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden bg-night jali-dark py-24 md:py-36">
      <Mandala className="pointer-events-none absolute -right-56 -top-56 w-[560px] text-gold/[0.07] animate-spin-slower" strokeWidth={1} />
      <Mandala className="pointer-events-none absolute -bottom-64 -left-56 w-[560px] text-gold/[0.05] animate-spin-slower-rev" strokeWidth={1} />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Captured in Candlelight — tap any frame"
          title={
            <>
              Moments in <span className="font-script text-shimmer-gold">gold</span>
            </>
          }
        />

        <div className="mt-16 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 md:auto-rows-[260px] md:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.08} className={`${p.span} h-full`}>
              <figure
                className="group relative h-full w-full cursor-pointer overflow-hidden border border-gold/20"
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                aria-label={`View ${p.caption}`}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-75" />
                <div className="absolute inset-3 border border-champagne/0 transition-all duration-700 group-hover:border-champagne/40" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/30 bg-night/50 text-champagne opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                  <Maximize2 size={15} strokeWidth={1.6} />
                </span>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="font-roman text-[0.6rem] md:text-xs tracking-[0.45em] pl-[0.45em] uppercase text-gold-light/70">
            Share yours with <span className="text-shimmer-gold">#NishaWedsRoshan</span>
          </p>
        </Reveal>
      </div>

      <Lightbox active={active} onClose={() => setActive(null)} onNav={nav} />
    </section>
  );
}
