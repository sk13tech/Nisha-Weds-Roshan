import { useState } from "react";
import { Check, Download } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Renders a 1080×1350 royal save-the-date card entirely on <canvas> */
/*  and downloads it as a PNG — no dependencies, works offline-first. */
/* ------------------------------------------------------------------ */

const W = 1080;
const H = 1350;

type Ctx = CanvasRenderingContext2D;

/* letter-spaced centre-aligned text, canvas-safe on every browser */
function spaced(ctx: Ctx, text: string, cx: number, y: number, ls: number) {
  const chars = [...text];
  const widths = chars.map((ch) => ctx.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + ls * (chars.length - 1);
  let x = cx - total / 2;
  chars.forEach((ch, i) => {
    ctx.fillText(ch, x, y);
    x += widths[i] + ls;
  });
}

function diamond(ctx: Ctx, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r * 0.72, y);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r * 0.72, y);
  ctx.closePath();
  ctx.fill();
}

function loadImg(src: string) {
  return new Promise<HTMLImageElement | null>((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => res(null);
    img.src = src;
  });
}

async function renderCard(): Promise<Blob | null> {
  try {
    await Promise.all([
      document.fonts.load('150px "Great Vibes"'),
      document.fonts.load('62px "Great Vibes"'),
      document.fonts.load('600 30px "Cinzel"'),
      document.fonts.load('600 38px "Cinzel"'),
      document.fonts.load('500 26px "Cinzel"'),
      document.fonts.load('italic 500 64px "Cormorant Garamond"'),
      document.fonts.load('500 42px "Cormorant Garamond"'),
      document.fonts.load('italic 500 38px "Cormorant Garamond"'),
    ]);
  } catch {
    /* fonts fall back gracefully */
  }

  const ganesha = await loadImg("/images/ganesha.jpg");

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const cx = W / 2;

  /* ---- backdrop ---- */
  ctx.fillStyle = "#150609";
  ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(cx, 560, 60, cx, 560, 760);
  glow.addColorStop(0, "rgba(125,31,46,0.6)");
  glow.addColorStop(1, "rgba(125,31,46,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  /* faint jali lattice */
  ctx.strokeStyle = "rgba(212,175,55,0.06)";
  ctx.lineWidth = 1.4;
  for (let gx = 120; gx < W - 100; gx += 96) {
    for (let gy = 120; gy < H - 100; gy += 96) {
      ctx.beginPath();
      ctx.moveTo(gx, gy - 14);
      ctx.lineTo(gx + 14, gy);
      ctx.lineTo(gx, gy + 14);
      ctx.lineTo(gx - 14, gy);
      ctx.closePath();
      ctx.stroke();
    }
  }

  /* ---- double gold frame ---- */
  ctx.strokeStyle = "rgba(212,175,55,0.85)";
  ctx.lineWidth = 3;
  ctx.strokeRect(46, 46, W - 92, H - 92);
  ctx.strokeStyle = "rgba(212,175,55,0.4)";
  ctx.lineWidth = 1.4;
  ctx.strokeRect(66, 66, W - 132, H - 132);
  ctx.fillStyle = "#d4af37";
  [46, W - 46].forEach((fx) => [46, H - 46].forEach((fy) => diamond(ctx, fx, fy, 13)));

  /* ---- Ganesha medallion ---- */
  if (ganesha) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, 250, 102, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    const scale = Math.max(204 / ganesha.width, 204 / ganesha.height);
    ctx.drawImage(ganesha, cx - (ganesha.width * scale) / 2, 250 - (ganesha.height * scale) / 2, ganesha.width * scale, ganesha.height * scale);
    ctx.restore();
  }
  ctx.beginPath();
  ctx.arc(cx, 250, 104, 0, Math.PI * 2);
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, 250, 114, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(212,175,55,0.45)";
  ctx.lineWidth = 1.4;
  ctx.stroke();

  /* ---- gold gradient ink for the names ---- */
  const goldInk = ctx.createLinearGradient(cx - 320, 0, cx + 320, 0);
  goldInk.addColorStop(0, "#a87c1f");
  goldInk.addColorStop(0.25, "#e9cf87");
  goldInk.addColorStop(0.5, "#fbf3d3");
  goldInk.addColorStop(0.75, "#e9cf87");
  goldInk.addColorStop(1, "#a87c1f");

  /* eyebrow */
  ctx.fillStyle = "#eed9a4";
  ctx.font = '600 27px "Cinzel", serif';
  spaced(ctx, "THE WEDDING INVITATION", cx, 452, 9);

  /* names */
  ctx.fillStyle = goldInk;
  ctx.font = '150px "Great Vibes", cursive';
  spaced(ctx, "Nisha", cx - 10, 600, 2);
  ctx.fillStyle = "#f3e6c0";
  ctx.font = 'italic 500 60px "Cormorant Garamond", serif';
  spaced(ctx, "&", cx, 700, 2);
  ctx.fillStyle = goldInk;
  ctx.font = '150px "Great Vibes", cursive';
  spaced(ctx, "Roshan", cx + 20, 818, 2);

  /* divider */
  ctx.strokeStyle = "rgba(212,175,55,0.9)";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(cx - 180, 890);
  ctx.lineTo(cx - 34, 890);
  ctx.moveTo(cx + 34, 890);
  ctx.lineTo(cx + 180, 890);
  ctx.stroke();
  ctx.fillStyle = "#d4af37";
  diamond(ctx, cx, 890, 12);

  /* date & time */
  ctx.fillStyle = "#f7eeda";
  ctx.font = '600 40px "Cinzel", serif';
  spaced(ctx, "THURSDAY · 03 DECEMBER 2026", cx, 968, 6);
  ctx.fillStyle = "#d4af37";
  ctx.font = '500 26px "Cinzel", serif';
  spaced(ctx, "SEVEN IN THE EVENING", cx, 1024, 8);

  /* venues */
  ctx.fillStyle = "#f3e6c0";
  ctx.font = '500 42px "Cormorant Garamond", serif';
  spaced(ctx, "Ram Nagar Colony, Chas · Jharkhand", cx, 1094, 1);
  ctx.fillStyle = "rgba(243,230,192,0.85)";
  ctx.font = 'italic 500 36px "Cormorant Garamond", serif';
  spaced(ctx, "Reception · Bholu Bandh, Near Bichali Dukan", cx, 1148, 1);

  /* tagline + hashtag */
  ctx.fillStyle = goldInk;
  ctx.font = '62px "Great Vibes", cursive';
  spaced(ctx, "the night finds its light", cx, 1240, 1.5);
  ctx.fillStyle = "rgba(212,175,55,0.95)";
  ctx.font = '500 30px "Cinzel", serif';
  spaced(ctx, "#NISHAWEDSROSHAN", cx, 1302, 5);

  return new Promise((res) => canvas.toBlob(res, "image/png"));
}

export default function SaveTheDate() {
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");

  const download = async () => {
    if (state === "busy") return;
    setState("busy");
    try {
      const blob = await renderCard();
      if (!blob) throw new Error("render failed");
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nisha-Roshan-Save-The-Date.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      setState("done");
      setTimeout(() => setState("idle"), 3500);
    } catch {
      setState("idle");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-serif italic text-base md:text-lg text-champagne/55">
        Share the joy with family — take the invitation card with you
      </p>
      <button
        onClick={download}
        disabled={state === "busy"}
        className="group relative mt-6 overflow-hidden rounded-full bg-gradient-to-r from-gold-soft via-gold-light to-gold-soft px-10 py-4 font-roman text-[0.65rem] md:text-xs tracking-[0.35em] pl-[0.35em] uppercase text-night shadow-[0_8px_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:shadow-[0_8px_55px_rgba(212,175,55,0.55)] disabled:opacity-70"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative inline-flex items-center gap-3">
          {state === "done" ? (
            <>
              Saved to your device <Check size={15} strokeWidth={2.4} />
            </>
          ) : (
            <>
              {state === "busy" ? "Crafting your card…" : "Download Save-the-Date Card"}
              <Download size={15} strokeWidth={1.8} />
            </>
          )}
        </span>
      </button>
      <p className="mt-3 font-roman text-[0.52rem] tracking-[0.35em] pl-[0.35em] uppercase text-champagne/35">
        PNG · 1080 × 1350 · perfect for WhatsApp &amp; print
      </p>
    </div>
  );
}
