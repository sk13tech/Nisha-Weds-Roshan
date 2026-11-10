import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Our Story", href: "#couple" },
  { label: "Sessions", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ invited }: { invited: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={invited ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ delay: invited ? 0.7 : 0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-gold/15 bg-night/85 py-3 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 font-script text-lg text-gold transition-colors group-hover:bg-gold/10">
              N·R
            </span>
            <span
              className={`hidden font-roman text-[0.65rem] uppercase tracking-[0.4em] text-champagne/90 sm:block ${
                scrolled ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              Nisha &amp; Roshan
            </span>
          </button>

          <nav className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="group relative font-roman text-[0.65rem] uppercase tracking-[0.35em] text-champagne/75 transition-colors hover:text-gold-light"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="text-gold-light lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="jali-dark fixed inset-0 z-[90] flex flex-col items-center justify-center bg-night/97 backdrop-blur-xl lg:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-gold-light"
              aria-label="Close menu"
            >
              <X size={30} strokeWidth={1.2} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.08, duration: 0.6 }}
                  onClick={() => go(l.href)}
                  className="font-serif text-4xl text-champagne transition-colors hover:text-gold-light"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-shimmer-gold mt-4 font-script text-3xl"
              >
                Nisha &amp; Roshan
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
