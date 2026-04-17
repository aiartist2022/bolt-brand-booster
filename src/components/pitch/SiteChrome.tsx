import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import boltLogo from "@/assets/bolt-logo.png";

export const CHAPTERS = [
  { num: "01", to: "/context", title: "Context & Opportunity" },
  { num: "02", to: "/market-intel", title: "Market Intel & Competition" },
  { num: "03", to: "/strategy", title: "Strategy Framework" },
  { num: "04", to: "/social", title: "Social Strategy" },
  { num: "05", to: "/ooh", title: "OOH & Offline" },
  { num: "06", to: "/campaigns", title: "Campaigns" },
  { num: "07", to: "/events", title: "Events & Partnerships" },
  { num: "08", to: "/roadmap", title: "Roadmap & KPIs" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[var(--bolt-cream)]/85 backdrop-blur-md border-b border-[var(--bolt-line)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 lg:px-12">
          <Link to="/" className="group flex items-center gap-4">
            <span
              className={cn(
                "flex items-center justify-center rounded-xl px-3 py-2 transition-colors",
                scrolled ? "bg-[var(--bolt-dark)]" : "bg-[var(--bolt-dark)]/90 backdrop-blur"
              )}
            >
              <img src={boltLogo} alt="Bolt" className="h-8 w-auto md:h-10 brightness-0 invert" />
            </span>
            <span className="hidden items-center gap-3 sm:flex">
              <span className="h-8 w-px bg-[var(--bolt-dark)]/20" />
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--bolt-dark)]/50">
                  In partnership with
                </span>
                <span className="font-display text-base font-bold tracking-tight text-[var(--bolt-dark)] md:text-lg">
                  Melt Media
                </span>
              </span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--bolt-dark)]/15 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[var(--bolt-dark)] backdrop-blur transition hover:bg-[var(--bolt-dark)] hover:text-white"
          >
            <span className="hidden sm:inline">Chapters</span>
            <span className="flex h-4 w-5 flex-col justify-between">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-3/4 bg-current self-end" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--bolt-dark)] text-white"
          >
            <div className="mx-auto flex h-full max-w-[1600px] flex-col px-6 py-6 lg:px-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Bolt UAE · Pitch Deck
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-[var(--bolt-dark)]"
                >
                  Close ✕
                </button>
              </div>
              <nav className="my-auto grid gap-2 lg:grid-cols-2">
                {CHAPTERS.map((c, i) => (
                  <motion.div
                    key={c.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      to={c.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-6 border-b border-white/10 py-5 transition hover:border-[var(--bolt-green)]"
                    >
                      <span className="font-display text-sm font-semibold text-[var(--bolt-green)]">
                        {c.num}
                      </span>
                      <span className="font-display text-3xl font-bold tracking-tight transition group-hover:translate-x-2 md:text-5xl">
                        {c.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SiteFooter({ next }: { next?: { to: string; label: string; num: string } }) {
  return (
    <footer className="bg-[var(--bolt-dark-2)] text-white">
      {next && (
        <Link
          to={next.to}
          className="group block border-b border-white/10 transition hover:bg-[var(--bolt-green)]"
        >
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-12 lg:px-12 lg:py-20">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 group-hover:text-white/80">
                Next chapter · {next.num}
              </div>
              <div className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
                {next.label}
              </div>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-white group-hover:text-[var(--bolt-green)] md:h-20 md:w-20">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </Link>
      )}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.2em] text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <img src={boltLogo} alt="Bolt" className="h-5 w-auto brightness-0 invert" />
          <span>UAE Market Domination Strategy</span>
        </div>
        <div>Prepared by Melt Media · April 2026</div>
      </div>
    </footer>
  );
}

export function ChapterHero({
  num,
  title,
  kicker,
  mediaLabel,
}: {
  num: string;
  title: string;
  kicker: string;
  mediaLabel: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bolt-dark)] text-white bolt-grid-dark">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 pt-32 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:pt-40 lg:pb-32">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--bolt-green)]"
          >
            Chapter {num}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl text-balance"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-xl text-lg text-white/70 md:text-xl"
          >
            {kicker}
          </motion.p>
        </div>
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/5] w-full rounded-3xl border border-dashed border-[var(--bolt-green)]/40 bg-white/[0.03] p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bolt-green)] text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Replace · Hero Video</div>
            <div className="mt-2 font-display text-xl font-bold">{mediaLabel}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
