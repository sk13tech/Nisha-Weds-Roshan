import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";

import Preloader from "./components/Preloader";
import EnvelopeGate from "./components/EnvelopeGate";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Blessing from "./components/Blessing";
import Couple from "./components/Couple";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-wine/90 text-gold-light shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur transition-all duration-300 hover:bg-gold hover:text-night"
        >
          <ChevronUp size={20} strokeWidth={1.8} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [invited, setInvited] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  useEffect(() => {
    const locked = loading || !invited;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading, invited]);

  return (
    <div className="min-h-screen bg-night">
      {/* gold scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold-soft via-gold-light to-gold"
      />

      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && !invited && <EnvelopeGate onOpen={() => setInvited(true)} />}
      </AnimatePresence>

      <Navbar invited={invited} />

      <main>
        <Hero invited={invited} />
        <Marquee />
        <Blessing />
        <Couple />
        <Countdown />
        <Events />
        <Gallery />
        <Venue />
        <Contact />
      </main>

      <Footer />

      {invited && (
        <>
          <MusicToggle />
          <BackToTop />
        </>
      )}

      {/* cinematic grain */}
      <div className="grain-overlay pointer-events-none fixed inset-0 z-[65] opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}
