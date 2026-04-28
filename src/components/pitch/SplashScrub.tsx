import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SplashScrub
 * --------------------------------------------------------------
 * A scroll-scrubbed image-sequence splash that:
 *  - Preloads N WebP frames and renders them onto a <canvas>.
 *  - Maps the user's scroll within a tall sticky section (4× viewport)
 *    to the frame index, supporting both forward + reverse scrubbing.
 *  - Once the user has finished scrolling through the sequence (or hits
 *    "Skip"), unmounts itself and reveals the children below
 *    (the existing home page) with a smooth fade.
 *
 * Performance:
 *  - Frames are decoded once via Image() and cached in an array.
 *  - We render on requestAnimationFrame, only when the target frame
 *    differs from the last-drawn frame.
 *  - Canvas is sized to devicePixelRatio for crisp 4K-friendly output
 *    while frames themselves are 1920px wide WebP (~80KB each).
 */

const FRAME_COUNT = 137;
const FRAME_PATH = (i: number) =>
  `/splash/frame_${String(i + 1).padStart(4, "0")}.webp`;

// 4x viewport scrub length
const SCRUB_VH_MULTIPLIER = 4;

export function SplashScrub({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);

  // Preload all frames before enabling scroll
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);
    let completed = 0;

    const onOne = () => {
      if (cancelled) return;
      completed += 1;
      setLoaded(completed);
      if (completed === FRAME_COUNT) {
        framesRef.current = imgs;
        setReady(true);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = FRAME_PATH(i);
      img.onload = onOne;
      img.onerror = onOne; // tolerate any 1-2 missing
      imgs[i] = img;
    }

    return () => {
      cancelled = true;
    };
  }, []);

  // Mark splash active globally so SiteNav can hide
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (done) {
      delete document.documentElement.dataset.splash;
    } else {
      document.documentElement.dataset.splash = "active";
    }
    window.dispatchEvent(new Event("splash:change"));
    return () => {
      delete document.documentElement.dataset.splash;
      window.dispatchEvent(new Event("splash:change"));
    };
  }, [done]);

  // Lock body scroll while splash is loading so users don't scroll past nothing.
  useEffect(() => {
    if (done) return;
    const prev = document.body.style.overflow;
    if (!ready) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [ready, done]);

  // Size canvas to device pixel ratio
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      // Force redraw of last-known frame
      lastFrameRef.current = -1;
      drawFrame(currentFrameIndex());
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  function currentFrameIndex() {
    const el = containerRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    // -rect.top goes from 0 (top of section at top of viewport) to total
    const progress = Math.min(Math.max(-rect.top / total, 0), 1);
    return Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
  }

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    if (index === lastFrameRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    // cover-fit
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
    lastFrameRef.current = index;
  }

  // rAF-driven scroll scrubbing
  const [frameIdx, setFrameIdx] = useState(0);
  useEffect(() => {
    if (!ready || done) return;

    const tick = () => {
      const idx = currentFrameIndex();
      drawFrame(idx);
      setFrameIdx(idx);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, done]);

  const atEnd = frameIdx >= FRAME_COUNT - 2;

  // Section labels mapped to frame ranges
  const SECTIONS: { from: number; to: number; eyebrow: string; title: string }[] = [
    { from: 0, to: 18, eyebrow: "Chapter 01", title: "Market & Competition" },
    { from: 19, to: 36, eyebrow: "Chapter 02", title: "Context & Opportunity" },
    { from: 37, to: 54, eyebrow: "Chapter 03", title: "Brand Positioning" },
    { from: 55, to: 72, eyebrow: "Chapter 04", title: "Strategic Framework" },
    { from: 73, to: 90, eyebrow: "Pillar 01", title: "Awareness Dominance" },
    { from: 91, to: 108, eyebrow: "Pillar 02", title: "Content Superiority" },
    { from: 109, to: 126, eyebrow: "Pillar 03", title: "Community Building" },
    { from: 127, to: 134, eyebrow: "Closing", title: "Reporting & Roadmap" },
  ];
  const activeSection = SECTIONS.find((s) => frameIdx >= s.from && frameIdx <= s.to);

  // After splash completes, scroll user back to top so the revealed home
  // page starts from the top.
  useEffect(() => {
    if (!done) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [done]);

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    );
  }

  const pct = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <>
      {/* Tall scroll container drives the scrub */}
      <div
        ref={containerRef}
        style={{ height: `${SCRUB_VH_MULTIPLIER * 100}vh` }}
        className="relative w-full bg-[var(--bolt-dark)]"
      >
        {/* Sticky stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--bolt-dark)]">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            aria-hidden
          />

          {/* Subtle vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bolt-dark)]/50 via-transparent to-[var(--bolt-dark)]/80" />

          {/* Section title overlays — fade in/out per frame range */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!atEnd && activeSection && (
                <motion.div
                  key={activeSection.title}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="px-6 text-center text-white"
                >
                  <div className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bolt-green)] md:text-xs">
                    <span className="h-px w-8 bg-[var(--bolt-green)] md:w-12" />
                    {activeSection.eyebrow}
                    <span className="h-px w-8 bg-[var(--bolt-green)] md:w-12" />
                  </div>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
                    {activeSection.title}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Final banger headline + Enter button */}
          <AnimatePresence>
            {atEnd && (
              <motion.div
                key="finale"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 px-6 text-center text-white"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bolt-green)] md:text-xs"
                >
                  <span className="h-px w-12 bg-[var(--bolt-green)]" />
                  Bolt UAE × Melt Media
                  <span className="h-px w-12 bg-[var(--bolt-green)]" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.25, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem] text-balance"
                >
                  From <span className="text-[var(--bolt-green)]">#2</span>
                  <br />
                  to <span className="text-[var(--bolt-green)]">#1.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="max-w-xl text-base text-white/70 md:text-lg"
                >
                  4 weeks to launch · 3 pillars · One challenger brand ready to show up. May 14, 2026.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  onClick={() => setDone(true)}
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--bolt-green)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_20px_60px_-15px_rgba(52,211,153,0.7)] transition hover:bg-white hover:text-[var(--bolt-dark)]"
                >
                  Enter the pitch
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current transition group-hover:translate-x-1" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HUD: bottom-left meta */}
          <AnimatePresence>
            {!atEnd && (
              <motion.div
                key="hud"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute bottom-8 left-6 right-6 flex items-end justify-between text-white lg:bottom-12 lg:left-12 lg:right-12"
              >
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 md:text-xs">
                  <span className="h-px w-8 bg-[var(--bolt-green)] md:w-12" />
                  Bolt UAE · Melt Media
                </div>
                <div className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 md:flex md:text-xs">
                  Scroll to explore
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 animate-bounce fill-none stroke-current"
                    strokeWidth="2"
                  >
                    <path
                      d="M12 5v14M5 12l7 7 7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip intro */}
          <button
            onClick={() => setDone(true)}
            className="absolute right-6 top-6 z-20 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md transition hover:border-[var(--bolt-green)] hover:bg-[var(--bolt-green)] hover:text-white lg:right-12 lg:top-12"
          >
            Skip intro
          </button>

          {/* Loader overlay */}
          <AnimatePresence>
            {!ready && (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-30 flex items-center justify-center bg-[var(--bolt-dark)]"
              >
                <div className="w-[min(420px,80vw)] text-center">
                  <div className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-[var(--bolt-green)]">
                    Loading the city
                  </div>
                  <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
                    <motion.div
                      className="h-full bg-[var(--bolt-green)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ ease: "easeOut", duration: 0.3 }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/40">
                    <span>Frames</span>
                    <span>
                      {loaded} / {FRAME_COUNT}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Pre-render children offscreen so transition is instant once done */}
      <div aria-hidden className="pointer-events-none invisible h-0 overflow-hidden">
        {children}
      </div>
    </>
  );
}
