import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import boltLogo from "@/assets/bolt-logo.png";
import { CHAPTERS, SiteFooter } from "@/components/pitch/SiteChrome";
import { StatGrid, Reveal, MediaSlot, Pill } from "@/components/pitch/primitives";
import { SplashScrub } from "@/components/pitch/SplashScrub";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bolt UAE × Melt Media — Pitch" },
      { name: "description", content: "From #2 to #1 in UAE ride-hailing. The strategic pitch." },
      { property: "og:title", content: "Bolt UAE × Melt Media — Pitch" },
      { property: "og:description", content: "Strategic roadmap to dominate UAE ride-hailing in 18 months." },
    ],
  }),
  component: HomeWithSplash,
});

function HomeWithSplash() {
  return (
    <SplashScrub>
      <Home />
    </SplashScrub>
  );
}

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--bolt-dark)] text-white bolt-grid-dark">
        <div className="absolute -right-32 top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--bolt-green)]/30 blur-[140px]" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--bolt-green)]/20 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-6 pt-32 pb-12 lg:px-12 lg:pt-40">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--bolt-green)]"
              >
                <span className="h-px w-12 bg-[var(--bolt-green)]" />
                Melt Media · UAE Strategy · April 2026
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-[10rem]"
              >
                Bolt
                <br />
                <span className="text-[var(--bolt-green)]">UAE.</span>
                <br />
                Domination.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-10 max-w-2xl text-lg text-white/70 md:text-xl"
              >
                A strategic roadmap to take Bolt from <strong className="text-white">#2 to #1</strong> in
                UAE ride-hailing. 18 months. 8 chapters. One challenger brand ready to show up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <Link
                  to="/context"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--bolt-green)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--bolt-dark)]"
                >
                  Start the pitch
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <a
                  href="#chapters"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--bolt-dark)]"
                >
                  Browse chapters
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-4 lg:pt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="space-y-3"
              >
                {[
                  { v: "#2", l: "Current Position" },
                  { v: "May 14", l: "AD Launch · 2026" },
                  { v: "AED 1.25B", l: "Market Size" },
                  { v: "12–15%", l: "CAGR" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                    <span className="font-display text-3xl font-bold text-[var(--bolt-green)]">{s.v}</span>
                    <span className="text-xs uppercase tracking-wider text-white/60">{s.l}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/50"
          >
            <div className="flex items-center gap-3">
              <img src={boltLogo} alt="Bolt" className="h-5 w-auto brightness-0 invert" />
              <span>× Melt Media</span>
            </div>
            <div>Scroll · 8 chapters · 100+ slides</div>
          </motion.div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="chapters" className="relative bg-[var(--bolt-cream)] py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <Pill>Agenda Overview</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl text-balance">
              Eight chapters.
              <br />
              <span className="text-[var(--bolt-green)]">One mission.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-[var(--bolt-dark)]/70">
              A three-pillar approach across context, competition, strategy, social, OOH,
              campaigns, events and a 90-day execution roadmap.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-[var(--bolt-line)] md:grid-cols-2 lg:grid-cols-4">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.to} delay={i * 0.05}>
                <Link
                  to={c.to}
                  className="group block h-full border border-[var(--bolt-line)] bg-white p-8 transition hover:bg-[var(--bolt-dark)] hover:text-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-semibold text-[var(--bolt-green)]">
                      {c.num}
                    </span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="mt-16 font-display text-2xl font-bold leading-tight md:text-3xl">
                    {c.title}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HEADLINE STATS */}
      <section className="bg-[var(--bolt-green)] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">The opportunity at a glance</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl text-balance">
              The UAE ride-hailing market is moving fast. Bolt moves faster.
            </h3>
          </Reveal>

          <div className="mt-14">
            <StatGrid
              tone="green"
              cols={4}
              stats={[
                { value: "AED 1.25B", label: "Market Size" },
                { value: "12–15%", label: "CAGR" },
                { value: "4.2M", label: "Active Users" },
                { value: "60%", label: "Dubai Penetration" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* HERO MEDIA SLOT */}
      <section className="bg-[var(--bolt-cream)] py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal><Pill>Brand Film</Pill></Reveal>
              <Reveal delay={0.05}>
                <h3 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl text-balance">
                  "The ride-hailing app that actually shows up."
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg text-[var(--bolt-dark)]/70">
                  Anchor brand film for the launch. Drop the final cut into the slot on the right —
                  a 60s hero version and a 15s social cut.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[var(--bolt-line)] bg-[var(--bolt-dark)] shadow-2xl">
                <video
                  src="/media/brand-film.mp4"
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter next={{ to: "/context", label: "Context & Opportunity", num: "01" }} />
    </main>
  );
}
