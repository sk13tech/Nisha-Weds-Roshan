import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

/*
 * Plays the wedding serenade from /music.mp3 (drop your own track at
 * public/music.mp3 — zero code changes needed). Loops gently; if the
 * file is missing the control simply stays idle.
 */
export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const start = () => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio("/music.mp3");
      audio.loop = true;
      audio.volume = 0.55;
      audio.addEventListener("error", () => setPlaying(false));
      audioRef.current = audio;
    }
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const stop = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const toggle = () => (playing ? stop() : start());

  useEffect(() => {
    // autoplay the moment the envelope is unsealed (a valid user gesture),
    // plus a one-tap fallback for guests who skipped straight in
    const onCue = () => start();
    window.addEventListener("nr:play-music", onCue);

    const onFirstTap = () => {
      if (!audioRef.current || audioRef.current.paused) start();
    };
    const fallback = window.setTimeout(() => {
      window.addEventListener("pointerdown", onFirstTap, { once: true });
    }, 14000);

    return () => {
      window.removeEventListener("nr:play-music", onCue);
      window.removeEventListener("pointerdown", onFirstTap);
      window.clearTimeout(fallback);
      audioRef.current?.pause();
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={toggle}
      aria-label={playing ? "Mute the music" : "Play the music"}
      title={playing ? "Mute the music" : "Play the music"}
      className="fixed bottom-6 left-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-wine/90 text-gold-light shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur transition-all duration-300 hover:bg-gold hover:text-night"
    >
      {playing ? (
        <span className="flex h-4 items-end gap-[3px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[3px] origin-bottom rounded-sm bg-current"
              style={{
                height: "16px",
                animation: `bar-bounce ${[0.9, 0.6, 1.1][i]}s ease-in-out ${[0, 0.15, 0.3][i]}s infinite`,
              }}
            />
          ))}
        </span>
      ) : (
        <Music size={18} strokeWidth={1.6} />
      )}
    </motion.button>
  );
}
