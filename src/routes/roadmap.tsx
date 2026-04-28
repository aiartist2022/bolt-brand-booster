import { createFileRoute, Link } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, PitchCard, Pill, ProgressBar, BulletList, Reveal } from "@/components/pitch/primitives";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap & KPIs — Bolt UAE Pitch" },
      { name: "description", content: "90-day action plan, milestones, paid media plan and the path to #1." },
      { property: "og:title", content: "Roadmap & KPIs — Bolt UAE" },
      { property: "og:description", content: "Milestones, KPIs, paid media and the journey from #2 to #1." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="08" title="Roadmap & KPIs" kicker="The 4-week sprint to May 14 Abu Dhabi launch, the 6-month milestones and the metrics that take Bolt to #1." mediaLabel="Roadmap Reel" />

      {/* 4-week sprint */}
      <SectionShell tone="light" slideNo="R-01" chapter="Roadmap" title="4-Week Sprint to Launch" kicker="Compressed timeline for Abu Dhabi launch · Target: May 14, 2026.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { period: "Week 1 · May 1–10", t: "Planning", d: "Finalize creative, lock OOH placements, sign influencer contracts, confirm AD locations." },
            { period: "Week 2 · May 11–17", t: "Production", d: "Build 30+ social assets, print & install OOH, scale community ops, launch video content." },
            { period: "Week 3 · May 18–24", t: "Pre-Launch", d: "Seed influencer content, deploy outdoor assets, press outreach, team training." },
            { period: "Week 4 · May 25–30", t: "Final Prep", d: "Soft launch, system tests, final approvals — Go-Live May 14." },
          ].map((x) => (
            <PitchCard key={x.period}>
              <Pill>{x.period}</Pill>
              <div className="mt-4 font-display text-2xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* North-star KPIs */}
      <SectionShell tone="dark" slideNo="R-02" chapter="Roadmap" title="North-Star KPIs" kicker="The numbers we're measured against.">
        <StatGrid tone="dark" cols={4} stats={[
          { value: "30%", label: "Market Share by Q3 2027" },
          { value: "30%", label: "Aided Awareness" },
          { value: "50K", label: "AD Launch Installs" },
          { value: "8%", label: "Engagement Rate" },
        ]} />
      </SectionShell>

      {/* KPI dashboard */}
      <SectionShell tone="light" slideNo="R-03" chapter="Roadmap" title="Tracking To #1" kicker="Monthly progress tracking against benchmarks and competitors.">
        <div className="grid gap-6 lg:grid-cols-2">
          <PitchCard>
            <Pill>Brand</Pill>
            <div className="mt-6 space-y-5">
              <ProgressBar value={30} label="Aided Awareness" sub="Target by Q3 2026" />
              <ProgressBar value={45} label="Branded Search Lift" sub="vs. baseline" />
              <ProgressBar value={22} label="Brand Love Score" sub="vs. competitor average" />
            </div>
          </PitchCard>
          <PitchCard>
            <Pill>Performance</Pill>
            <div className="mt-6 space-y-5">
              <ProgressBar value={50} label="App Installs (50K)" sub="60 days post-AD launch" />
              <ProgressBar value={8} label="Engagement Rate" sub="MAU / Installs" />
              <ProgressBar value={30} label="Market Share" sub="Q3 2027 target" />
            </div>
          </PitchCard>
        </div>
      </SectionShell>

      {/* Slides 100-102 — Paid media */}
      <SectionShell tone="green" slideNo="100–102" chapter="Roadmap" title="Paid Media Plan" kicker="Performance-based acquisition complementing Bolt's in-house team — advanced optimisation, SKAN-ready, cross-channel integration.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Channel Mix", d: "Meta · TikTok · Google · ASA · Programmatic OOH." },
            { t: "Optimisation", d: "SKAN-aware, MMM-validated, weekly QA." },
            { t: "Integration", d: "Aligned with brand calendar and creative system." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <div className="font-display text-xl font-bold">{x.t}</div>
                <p className="mt-3 text-white/85">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Governance & ways of working */}
      <SectionShell tone="light" slideNo="R-04" chapter="Roadmap" title="Ways of Working" kicker="How Melt and Bolt operate as one team.">
        <div className="grid gap-6 lg:grid-cols-2">
          <PitchCard>
            <Pill>Cadence</Pill>
            <BulletList items={[
              "Weekly creative & performance stand-up",
              "Bi-weekly strategy review",
              "Monthly market & KPI deep-dive",
              "Quarterly brand health & roadmap reset",
            ]} />
          </PitchCard>
          <PitchCard>
            <Pill>Decision Rights</Pill>
            <BulletList items={[
              "Brand: Melt-led, Bolt-approved",
              "Performance: Bolt-led, Melt-supported",
              "PR & crisis: Joint on-call protocol",
              "Local insight: Bolt UAE team owns",
            ]} />
          </PitchCard>
        </div>
      </SectionShell>

      {/* Closing CTA */}
      <SectionShell tone="dark" slideNo="R-05" chapter="Roadmap" title="Let's Take Bolt to #1" kicker="Eight chapters. One mission. Ready when you are.">
        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--bolt-green)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--bolt-dark)]"
        >
          Back to top
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </SectionShell>

      <SiteFooter />
    </main>
  );
}
