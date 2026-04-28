import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, PitchCard, BulletList, Pill, ProgressBar, MediaSlot, Reveal } from "@/components/pitch/primitives";

export const Route = createFileRoute("/market-intel")({
  head: () => ({
    meta: [
      { title: "Market Intel & Competition — Bolt UAE Pitch" },
      { name: "description", content: "UAE ride-hailing landscape, competitive mapping and rider pain points." },
      { property: "og:title", content: "Market Intel & Competition — Bolt UAE" },
      { property: "og:description", content: "Landscape, players, vulnerabilities and where Bolt wins." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="02" title="Market Intel & Competition" kicker="The UAE landscape, the players, the rider pain points — and the windows of opportunity Bolt can exploit now." mediaLabel="Market Intel B-roll" />

      {/* Slide 10 — UAE Landscape */}
      <SectionShell tone="light" slideNo={10} chapter="Market Intel" title="UAE Ride-Hailing Landscape 2026" kicker="Market size, growth trends and penetration analysis across the Emirates.">
        <StatGrid
          cols={4}
          stats={[
            { value: "AED 1.25B", label: "Market Size" },
            { value: "12–15%", label: "CAGR" },
            { value: "4.2M", label: "Active Users" },
            { value: "39–41%", label: "UAE Penetration" },
          ]}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PitchCard>
            <Pill>Penetration by Emirate</Pill>
            <div className="mt-6 space-y-5">
              <ProgressBar value={60} label="Dubai" />
              <ProgressBar value={20} label="Abu Dhabi" />
              <ProgressBar value={12} label="Sharjah" />
              <ProgressBar value={8} label="Ajman · RAK · Fujairah · UAQ" />
            </div>
          </PitchCard>
          <PitchCard accent>
            <Pill tone="dark" solid>Growth Forecast 2025–2026</Pill>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-6xl font-bold">+12–15%</div>
                <div className="mt-2 text-sm text-white/70">UAE CAGR</div>
              </div>
              <div>
                <div className="font-display text-6xl font-bold">+18%</div>
                <div className="mt-2 text-sm text-white/70">MEA Forecast</div>
              </div>
            </div>
          </PitchCard>
        </div>
      </SectionShell>

      {/* Slide 11 — Competitive Mapping */}
      <SectionShell tone="dark" slideNo={11} chapter="Market Intel" title="Competitive Mapping" kicker="Three major players with distinct positioning — and visible gaps Bolt can fill.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Careem", role: "Market Leader", share: "65%", angle: "Super App Ecosystem",
              s: ["Scale & market dominance", "Super app ecosystem", "8+ years brand heritage", "2.8M active users"],
              w: ["Peak-time ETA delays", "Service inconsistency", "Higher cancellation rates"],
            },
            {
              name: "Uber", role: "Challenger", share: "10%", angle: "Premium Positioning",
              s: ["Global brand recognition", "Premium positioning", "Airport focus", "Quality vehicles"],
              w: ["High pricing perception", "Limited local presence", "Airport focus only"],
            },
            {
              name: "Yango", role: "Follower", share: "5%", angle: "New Entrant",
              s: ["Modern app interface", "Competitive pricing", "Tech-forward features", "Young user base"],
              w: ["Limited traction", "Regulatory headwinds", "Small fleet size"],
            },
          ].map((c) => (
            <PitchCard key={c.name} tone="dark">
              <div className="flex items-center justify-between">
                <Pill tone="dark">{c.role}</Pill>
                <span className="font-display text-3xl font-bold text-[var(--bolt-green)]">{c.share}</span>
              </div>
              <div className="mt-6 font-display text-3xl font-bold">{c.name}</div>
              <div className="mt-1 text-sm text-white/60">{c.angle}</div>
              <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/50">Strengths</div>
              <BulletList tone="dark" items={c.s} />
              <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/50">Weaknesses</div>
              <BulletList tone="dark" items={c.w} />
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 12 — Careem's Vulnerabilities */}
      <SectionShell tone="light" slideNo={12} chapter="Market Intel" title="Careem's Vulnerabilities" kicker="Critical pain points in Careem's market position that Bolt can exploit — sourced from user reviews and social listening.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { t: "Higher Cancellations", v: "25% rate", sev: 75, d: "Drivers canceling rides at higher rates than industry standard." },
              { t: "Peak-time ETA Slippage", v: "15–20 min delays", sev: 60, d: "Significant delays during rush hours and peak times." },
              { t: "Service Inconsistency", v: "4.2/5 rating", sev: 45, d: "Quality varies significantly across different drivers." },
            ].map((x) => (
              <PitchCard key={x.t}>
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-xl font-bold">{x.t}</div>
                  <div className="text-sm font-semibold text-[var(--bolt-green)]">{x.v}</div>
                </div>
                <p className="mt-2 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
                <div className="mt-4">
                  <ProgressBar value={x.sev} label="Severity" />
                </div>
              </PitchCard>
            ))}
          </div>
          <PitchCard accent>
            <Pill tone="dark" solid>Bolt's Opportunity</Pill>
            <div className="mt-6 space-y-5">
              {[
                { t: "Reliability", d: '"Careem cancels, Bolt shows up" positioning' },
                { t: "Speed", d: "Lower ETAs via DTC fleet advantage" },
                { t: "Features", d: "Pink Taxi, POD, Flight Tracking" },
                { t: "Local", d: "Independent P&L, faster decisions" },
              ].map((x) => (
                <div key={x.t} className="border-b border-white/15 pb-4 last:border-0">
                  <div className="font-display text-xl font-bold">{x.t}</div>
                  <div className="mt-1 text-sm text-white/80">{x.d}</div>
                </div>
              ))}
            </div>
          </PitchCard>
        </div>
      </SectionShell>

      {/* Slide 13 — Top Rider Complaints */}
      <SectionShell tone="dark" slideNo={13} chapter="Market Intel" title="Top Rider Complaints (UAE)" kicker="The five biggest pain points across UAE ride-hailing — every one of them a Bolt opportunity.">
        <div className="grid gap-4 lg:grid-cols-5">
          {[
            { n: "01", t: "Cancellations", s: "Bolt shows up — 99.5%" },
            { n: "02", t: "ETA Inaccuracy", s: "Lower ETAs via DTC fleet" },
            { n: "03", t: "Surge Pricing", s: "Fair, transparent pricing" },
            { n: "04", t: "Driver Quality", s: "Vetted, rated 4.8★" },
            { n: "05", t: "Limited Features", s: "Pink Taxi · POD · Flight Tracking" },
          ].map((x) => (
            <PitchCard key={x.n} tone="dark">
              <div className="font-display text-sm font-semibold text-[var(--bolt-green)]">{x.n}</div>
              <div className="mt-6 font-display text-2xl font-bold">{x.t}</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-white/50">Bolt solves it</div>
              <div className="mt-1 text-sm text-white/85">{x.s}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 14 — Global Best-in-Class */}
      <SectionShell tone="light" slideNo={14} chapter="Market Intel" title="Global Best-in-Class Benchmarks" kicker="What Lyft (US), Ola (India) and Grab (SEA) teach us about engagement, content and viral campaigns.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { brand: "Lyft", region: "US", insight: "Driver-storytelling UGC outperforms paid creative by 3×." },
            { brand: "Ola", region: "India", insight: "Hyperlocal Reels per city drive 40% higher saves." },
            { brand: "Grab", region: "SEA", insight: "Super-app cross-promo lifts ride frequency 22%." },
          ].map((x) => (
            <PitchCard key={x.brand}>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--bolt-green)]">{x.region}</div>
              <div className="mt-2 font-display text-3xl font-bold">{x.brand}</div>
              <p className="mt-4 text-[var(--bolt-dark)]/70">{x.insight}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 15–18 — Audience deep-dives */}
      <SectionShell tone="dark" slideNo="15–18" chapter="Market Intel" title="Audience & Geo Deep-Dive" kicker="UAE active users, Abu Dhabi population, Sharjah & Ajman opportunities, average ride economics.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { v: "4.2M", l: "UAE monthly active riders", d: "Across all ride-hailing apps" },
            { v: "1.5M+", l: "Abu Dhabi residents", d: "ADNEC + airport hub demand" },
            { v: "2.3M+", l: "Sharjah + Ajman residents", d: "Underserved & high-margin" },
            { v: "AED 32", l: "Average ride", d: "Mid-distance · 12 min" },
          ].map((x) => (
            <PitchCard key={x.l} tone="dark">
              <div className="font-display text-5xl font-bold text-[var(--bolt-green)]">{x.v}</div>
              <div className="mt-3 font-display text-lg font-bold">{x.l}</div>
              <div className="mt-1 text-sm text-white/60">{x.d}</div>
            </PitchCard>
          ))}
        </div>
        <div className="mt-10">
          <MediaSlot tone="dark" label="Demand heatmap & demographic overlays" caption="Replace with city-by-city data visualisation" />
        </div>
      </SectionShell>

      {/* Slide 19 — Current vs Target */}
      <SectionShell tone="green" slideNo={19} chapter="Market Intel" title="Current State vs 12-Month Target" kicker="From #2 challenger to undisputed #1 in 12 months — measurable, monitored, and on-track.">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { label: "Today", share: "25%", rank: "#2", note: "Challenger position" },
            { label: "12 months", share: "30%+", rank: "#1", note: "Market leader" },
          ].map((x) => (
            <Reveal key={x.label}>
              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">{x.label}</div>
                <div className="mt-6 font-display text-7xl font-bold">{x.rank}</div>
                <div className="mt-2 text-3xl font-bold text-white/90">{x.share} share</div>
                <div className="mt-4 text-sm text-white/70">{x.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Slide 20 — Window of opportunity */}
      <SectionShell tone="light" slideNo={20} chapter="Market Intel" title="Why Now" kicker="The window of opportunity before Careem adapts and Uber reinvests in UAE — every quarter we wait costs share.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Competitor Inertia", d: "Careem distracted by super-app expansion." },
            { t: "User Receptiveness", d: "Riders openly frustrated with cancellations." },
            { t: "Regulatory Tailwind", d: "Abu Dhabi opening up new operator licenses." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      <SiteFooter next={{ to: "/strategy", label: "Strategy Framework", num: "03" }} />
    </main>
  );
}
