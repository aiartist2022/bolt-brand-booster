import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, MediaSlot, PitchCard, BulletList, Pill, ProgressBar, Reveal } from "@/components/pitch/primitives";

export const Route = createFileRoute("/context")({
  head: () => ({
    meta: [
      { title: "Context & Opportunity — Bolt UAE Pitch" },
      { name: "description", content: "Bolt's current market position, the UAE opportunity, and the window to strike." },
      { property: "og:title", content: "Context & Opportunity — Bolt UAE" },
      { property: "og:description", content: "Where Bolt stands today and the AED 2.8B opportunity ahead." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero
        num="01"
        title="Context & Opportunity"
        kicker="Current market position, growth opportunities, and the strategic window to take Bolt from #2 to #1 in UAE ride-hailing."
        mediaLabel="Chapter Intro Reel"
      />

      {/* Slide 4 — Current Market Position */}
      <SectionShell tone="light" slideNo={4} chapter="Context" title="Current Market Position" kicker="Bolt's position in UAE ride-hailing and the trajectory to #1.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { rank: "1", brand: "Careem", share: "~60%", note: "Market leader · super-app ecosystem" },
            { rank: "2", brand: "Bolt", share: "~20%", note: "Challenger · DTC fleet · 4.2M MAU", accent: true },
            { rank: "3", brand: "Uber", share: "10–15%", note: "Premium positioning" },
            { rank: "4", brand: "Yango", share: "5–7%", note: "New entrant · price-led" },
          ].map((c) => (
            <PitchCard key={c.brand} accent={c.accent}>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-semibold opacity-70">#{c.rank}</span>
                <span className={`font-display text-4xl font-bold ${c.accent ? "text-[var(--bolt-green)]" : ""}`}>{c.share}</span>
              </div>
              <div className="mt-10 font-display text-3xl font-bold">{c.brand}</div>
              <div className={`mt-2 text-sm ${c.accent ? "text-white/70" : "text-[var(--bolt-dark)]/60"}`}>{c.note}</div>
            </PitchCard>
          ))}
        </div>
        <div className="mt-12">
          <StatGrid
            cols={4}
            stats={[
              { value: "AED 1.25B", label: "Market Size" },
              { value: "12–15%", label: "CAGR" },
              { value: "30%", label: "Target Share Q3 '27" },
              { value: "50K", label: "AD Launch Installs" },
            ]}
          />
        </div>
      </SectionShell>

      {/* Slide 5 — The Opportunity */}
      <SectionShell tone="dark" slideNo={5} chapter="Context" title="The Opportunity" kicker="A 1.25B AED market growing 12–15% YoY, with three under-served emirates ripe for share capture.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { city: "Dubai", share: "60%", pop: "Mature · highest penetration", growth: "+12%" },
            { city: "Abu Dhabi", share: "20%", pop: "4.1M+ residents · 33M airport pax", growth: "+18%" },
            { city: "Sharjah", share: "12%", pop: "1.9M+ population · underserved", growth: "+25%" },
            { city: "Ajman / RAK / Fuj / UAQ", share: "8%", pop: "Northern emirates · low competition", growth: "+22%" },
          ].map((c) => (
            <PitchCard key={c.city} tone="dark">
              <div className="font-display text-sm font-semibold text-[var(--bolt-green)]">{c.city}</div>
              <div className="mt-6 font-display text-5xl font-bold">{c.share}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">Penetration</div>
              <div className="mt-6 text-sm text-white/70">{c.pop}</div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--bolt-green)]/15 px-3 py-1 text-xs font-semibold text-[var(--bolt-green)]">
                {c.growth} growth opportunity
              </div>
            </PitchCard>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <MediaSlot tone="dark" label="UAE Market Heatmap" caption="Replace with interactive Emirate-by-Emirate heatmap" />
          <MediaSlot tone="dark" label="12–18 Month Rollout Map" caption="Q2 2026 → Q1 2027 expansion sequence" />
        </div>
      </SectionShell>

      {/* Slide 6 — The Challenge */}
      <SectionShell tone="light" slideNo={6} chapter="Context" title="The Challenge" kicker="Why discount strategies won't work — and why a differentiated approach focused on reliability and superior service will.">
        <div className="grid gap-6 lg:grid-cols-2">
          <PitchCard>
            <Pill>Careem · Market Leader</Pill>
            <div className="mt-6 font-display text-6xl font-bold">~60%</div>
            <div className="mt-1 text-sm text-[var(--bolt-dark)]/60">Market share · super-app heritage · 8+ years</div>
            <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-[var(--bolt-dark)]/60">Key weaknesses</div>
            <BulletList items={["Peak-time ETA delays", "Higher cancellation rates", "Service inconsistency"]} />
          </PitchCard>
          <PitchCard>
            <Pill>Uber · Premium Position</Pill>
            <div className="mt-6 font-display text-6xl font-bold">10–15%</div>
            <div className="mt-1 text-sm text-[var(--bolt-dark)]/60">Market share · global brand · premium focus</div>
            <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-[var(--bolt-dark)]/60">Key weaknesses</div>
            <BulletList items={["High pricing perception", "Limited local presence", "Airport focus only"]} />
          </PitchCard>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Commoditization", d: "Price wars erode brand value and create low loyalty." },
            { t: "Low Loyalty", d: "Discount-driven customers switch brands for better deals." },
            { t: "Margin Pressure", d: "Sustainable growth requires value, not just low prices." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 7 — Bolt's Unfair Advantages */}
      <SectionShell tone="green" slideNo={7} chapter="Context" title="Bolt's Unfair Advantages" kicker="Four differentiators that position Bolt for market leadership.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Local P&L", d: "Independent profit & loss with local decision-making for faster market response.", k: "Local Authority" },
            { t: "Superior UX", d: "Best-in-class user experience with intuitive, seamless booking.", k: "4.8 ★ Rating" },
            { t: "Unique Features", d: "Pink Taxi, POD, Flight Tracking — features competitors don't have.", k: "Safety + Convenience" },
            { t: "Lower ETAs", d: "Direct-to-consumer fleet model for faster pickup times.", k: "2–3 min avg" },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="h-full rounded-2xl bg-white/10 p-7 backdrop-blur">
                <div className="font-display text-xs font-semibold uppercase tracking-wider text-white/70">{x.k}</div>
                <div className="mt-4 font-display text-2xl font-bold">{x.t}</div>
                <p className="mt-3 text-sm text-white/80">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <StatGrid
            tone="green"
            cols={3}
            stats={[
              { value: "12,500+", label: "Active Drivers" },
              { value: "8,200+", label: "Fleet Size" },
              { value: "+15%", label: "YoY Growth" },
            ]}
          />
        </div>
      </SectionShell>

      {/* Slide 8 — Meeting Recap & Alignment */}
      <SectionShell tone="light" slideNo={8} chapter="Context" title="Meeting Recap & Alignment" kicker="Stakeholder alignment on strategy, priorities and the Abu Dhabi launch timeline.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <Pill>Key Priorities</Pill>
            <PitchCard>
              <div className="font-display text-xl font-bold">Awareness-First Approach</div>
              <p className="mt-2 text-sm text-[var(--bolt-dark)]/70">Focus on brand building before performance marketing.</p>
            </PitchCard>
            <PitchCard>
              <div className="font-display text-xl font-bold">Abu Dhabi Launch in 4 Weeks</div>
              <p className="mt-2 text-sm text-[var(--bolt-dark)]/70">Target mid-May 2026 for go-live.</p>
            </PitchCard>
            <PitchCard>
              <div className="font-display text-xl font-bold">Community Building</div>
              <p className="mt-2 text-sm text-[var(--bolt-dark)]/70">Establish loyal rider base in new city.</p>
            </PitchCard>
          </div>
          <div className="space-y-4">
            <Pill>Launch Timeline</Pill>
            {[
              { w: "Week 1–2 · April", t: "Planning", d: "Finalize creative, lock OOH placements" },
              { w: "Week 2 · May", t: "Production", d: "Build 50+ assets, OOH production" },
              { w: "Week 4 · Mid-May", t: "Launch", d: "Seed content, OOH, PR" },
              { w: "Sept 15, 2026", t: "Abu Dhabi Go-Live", d: "30% awareness · 50K installs · 8% engagement" },
            ].map((x, i) => (
              <Reveal key={i}>
                <div className="flex gap-5 border-l-2 border-[var(--bolt-green)] pl-5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--bolt-green)]">{x.w}</div>
                    <div className="mt-1 font-display text-xl font-bold">{x.t}</div>
                    <div className="mt-1 text-sm text-[var(--bolt-dark)]/70">{x.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <ProgressBar value={30} label="Awareness Goal" sub="Aided awareness in Abu Dhabi within 60 days of launch" />
          <div className="mt-6">
            <ProgressBar value={50} label="Installs Goal (50K)" sub="App installs within 60 days post-launch" />
          </div>
          <div className="mt-6">
            <ProgressBar value={8} label="Engagement Goal" sub="Active engaged user rate target" />
          </div>
        </div>
      </SectionShell>

      <SiteFooter next={{ to: "/market-intel", label: "Market Intel & Competition", num: "02" }} />
    </main>
  );
}
