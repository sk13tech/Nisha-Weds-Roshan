import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../lang";

export default function Navbar({ invited }: { invited: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const H = lang === "hi";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { label: t.navStory, href: "#couple" },
    { label: t.navSessions, href: "#events" },
    { label: t.navGallery, href: "#gallery" },
    { label: t.navVenue, href: "#venue" },
    { label: t.navContact, href: "#contact" },
  ];

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkCls = H
    ? "font-hindi-serif text-sm tracking-[0.08em]"
    : "font-roman text-[0.65rem] uppercase tracking-[0.35em]";

  const LangPill = () => (
    <div className="flex items-center rounded-full border border-gold/40 p-1">
      {(["en", "hi"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 text-[0.62rem] transition-all duration-300 ${
            lang === l ? "bg-gold text-night" : "text-champagne/70 hover:text-gold-light"
          } ${H ? "font-hindi-serif" : "font-roman uppercase tracking-[0.2em]"}`}
        >
          {l === "en" ? (H ? "EN" : "EN") : "हिं"}
        </button>
      ))}
    </div>
  );

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
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 font-hindi-display text-base text-gold transition-colors group-hover:bg-gold/10">
              {H ? "नि·रो" : "N·R"}
            </span>
            <span
              className={`hidden text-champagne/90 sm:block ${
                scrolled ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 ${
                H ? "font-hindi-serif text-sm" : "font-roman text-[0.65rem] uppercase tracking-[0.4em]"
              }`}
            >
              {t.navBrand}
            </span>
          </button>

          <nav className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`group relative text-champagne/75 transition-colors hover:text-gold-light ${linkCls}`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
            <LangPill />
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <LangPill />
            <button onClick={() => setOpen(true)} className="text-gold-light" aria-label="Open menu">
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
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
                  className={`text-4xl text-champagne transition-colors hover:text-gold-light ${
                    H ? "font-hindi-display" : "font-serif"
                  }`}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-shimmer-gold mt-4 text-3xl ${H ? "font-hindi-display" : "font-script"}`}
              >
                {t.navBrand}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
