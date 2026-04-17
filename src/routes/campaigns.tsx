import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, PitchCard, Pill, MediaSlot, BulletList, Reveal } from "@/components/pitch/primitives";

export const Route = createFileRoute("/campaigns")({
  head: () => ({
    meta: [
      { title: "Campaigns — Bolt UAE Pitch" },
      { name: "description", content: "Launch campaigns, feature heroes, seasonal activations and the Show-Up creative platform." },
      { property: "og:title", content: "Campaigns — Bolt UAE" },
      { property: "og:description", content: "Show-Up. Pink Taxi. Flight Tracking. POD. Seasonal activations." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="06" title="Campaigns" kicker="The Show-Up creative platform — feature heroes, seasonal activations, and a multi-layered structure built for share gain." mediaLabel="Campaigns Sizzle" />

      {/* Slide 85 — Show Up platform */}
      <SectionShell tone="light" slideNo={85} chapter="Campaigns" title='"The Ride-Hailing App That Actually Shows Up"' kicker="The master campaign idea — addressing the #1 rider complaint and turning it into a brand promise.">
        <MediaSlot label="Hero film — 'Show Up' platform launch" caption="60s hero · 30s OOH cutdown · 6s pre-roll" />
      </SectionShell>

      {/* Slide 86 — Multi-layered structure */}
      <SectionShell tone="dark" slideNo={86} chapter="Campaigns" title="Multi-Layered Campaign Structure" kicker="Brand · Feature · Seasonal · PR — running in concert across the year.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { t: "Brand", d: "Always-on 'Show Up' platform." },
            { t: "Feature", d: "Pink Taxi · POD · Flight Tracking heroes." },
            { t: "Seasonal", d: "Ramadan · UAE National Day · NYE." },
            { t: "PR & OOH", d: "Newsworthy stunts and big out-of-home moments." },
          ].map((x) => (
            <PitchCard key={x.t} tone="dark">
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-white/75">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 87 — 60-day Abu Dhabi launch */}
      <SectionShell tone="green" slideNo={87} chapter="Campaigns" title="60-Day Abu Dhabi Launch" kicker="30% aided awareness and 50K app installs in 60 days post-launch.">
        <StatGrid tone="green" cols={3} stats={[
          { value: "30%", label: "Aided Awareness" },
          { value: "50K", label: "App Installs" },
          { value: "8%", label: "Engagement Rate" },
        ]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { w: "Weeks 1–2", t: "Pre-launch teaser", d: "Influencer seeding · OOH up · paid social warm-up" },
            { w: "Weeks 3–4", t: "Launch burst", d: "Hero film · PR moment · ambassador activation" },
            { w: "Weeks 5–8", t: "Sustain", d: "Feature heroes · UGC · always-on performance" },
          ].map((x, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <Pill tone="dark" solid>{x.w}</Pill>
                <div className="mt-4 font-display text-2xl font-bold">{x.t}</div>
                <p className="mt-3 text-white/85">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Slide 88 — May 2026 Launch */}
      <SectionShell tone="light" slideNo={88} chapter="Campaigns" title="May 2026 Launch Plan" kicker="Multi-channel campaign strategy for the May 2026 launch.">
        <BulletList items={[
          "OOH live mid-May with 'Bolt Has Arrived' creative",
          "Hero film cut for digital and cinema",
          "Influencer seeding 7 days pre-launch",
          "Paid acquisition layer turns on Day 1",
          "PR moment at launch event with media partners",
        ]} />
      </SectionShell>

      {/* Slide 89 — Flight Tracking */}
      <SectionShell tone="dark" slideNo={89} chapter="Campaigns" title="Feature Hero · Flight Tracking" kicker='"Land When You Land, Not Before." Auto-reschedule based on real-time flight data.'>
        <div className="grid gap-6 lg:grid-cols-2">
          <PitchCard tone="dark">
            <Pill tone="dark">Problem</Pill>
            <BulletList tone="dark" items={[
              "Travelers face surge pricing when flights are delayed",
              "Traditional apps don't account for delays",
              "ETA inaccuracy → missed rides",
            ]} />
          </PitchCard>
          <PitchCard tone="dark">
            <Pill tone="dark" solid>Solution</Pill>
            <BulletList tone="dark" items={[
              "Auto-reschedule based on real-time flight data",
              "Smart pickup-time adjustment",
              "First UAE app that truly understands travel delays",
            ]} />
          </PitchCard>
        </div>
        <div className="mt-8">
          <MediaSlot tone="dark" label="Flight Tracking — feature film" caption="30s product film · airport OOH cutdown" />
        </div>
      </SectionShell>

      {/* Slide 90 — Pink Taxi */}
      <SectionShell tone="green" slideNo={90} chapter="Campaigns" title='Pink Taxi · "Your Ride, Your Choice"' kicker="Empowering women with exclusive, safe ride-hailing options.">
        <StatGrid tone="green" cols={3} stats={[
          { value: "85%", label: "Female Satisfaction" },
          { value: "12K+", label: "Pink Rides / Month" },
          { value: "4.9", label: "Safety Rating" },
        ]} />
      </SectionShell>

      {/* Slide 91 — POD */}
      <SectionShell tone="light" slideNo={91} chapter="Campaigns" title='POD · "Space for Everything"' kicker="Showcase POD versatility for families, travelers and shopping trips.">
        <div className="grid gap-6 lg:grid-cols-3">
          <MediaSlot label="What's in your POD?" caption="UGC series · IG + TikTok" />
          <MediaSlot label="POD vs Standard car" caption="Comparison creative" />
          <MediaSlot label="Airport POD activation" caption="OOH at DXB & AUH terminals" />
        </div>
      </SectionShell>

      {/* Slide 92 — Narrative series */}
      <SectionShell tone="dark" slideNo={92} chapter="Campaigns" title="Narrative Series · Real Stories" kicker="Episodic documentary content showcasing authentic Bolt experiences.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "The 6 AM Driver", d: "Day-in-the-life documentary" },
            { n: "02", t: "The Airport Rescue", d: "Flight tracking saves the day" },
            { n: "03", t: "Pink Taxi Chronicles", d: "Women riders share stories" },
            { n: "04", t: "Show Up Challenge", d: "Riders test Bolt vs others" },
          ].map((x) => (
            <PitchCard key={x.n} tone="dark">
              <div className="font-display text-sm font-semibold text-[var(--bolt-green)]">{x.n}</div>
              <div className="mt-4 font-display text-xl font-bold">{x.t}</div>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
              <div className="mt-4 text-xs uppercase tracking-wider text-white/50">Monthly · IG · TikTok · YouTube</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 93 — Seasonal */}
      <SectionShell tone="light" slideNo={93} chapter="Campaigns" title="Seasonal Campaigns" kicker="UAE National Day · NYE · Ramadan — campaigns aligned with UAE cultural moments.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "UAE National Day 2026", d: "Ride With Pride · UAE-themed decorations · national day celebrations." },
            { t: "NYE 2026", d: "Safe Rides Home · 24/7 enhanced support · NYE event partnerships." },
            { t: "Ramadan 2027", d: "Breaking Fast Together · community Iftars · ride packages · charitable rides." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <Pill>{x.t.split(" ").slice(0, 2).join(" ")}</Pill>
              <div className="mt-4 font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 94 — Comparative */}
      <SectionShell tone="dark" slideNo={94} chapter="Campaigns" title="Comparative Content (No Naming)" kicker="Indirect competitor comparison without ever mentioning Careem.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Reliability", a: "Cancel", b: "Show Up", n: "99.5% on-time" },
            { t: "Speed", a: "15 min ETA", b: "7 min actual", n: "8 min saved per ride" },
            { t: "Value", a: "2.5× surge", b: "Fair pricing", n: "AED 45 vs AED 72" },
          ].map((x) => (
            <PitchCard key={x.t} tone="dark">
              <Pill tone="dark">{x.t}</Pill>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4 text-center">
                  <div className="font-display text-lg font-bold text-white/60">{x.a}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/40">Them</div>
                </div>
                <div className="rounded-xl bg-[var(--bolt-green)] p-4 text-center">
                  <div className="font-display text-lg font-bold">{x.b}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/80">Bolt</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-white/70">{x.n}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 95 — Testing framework */}
      <SectionShell tone="green" slideNo={95} chapter="Campaigns" title="Creative Testing Framework" kicker="A/B testing, social listening, focus groups and iterative optimisation.">
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { n: "01", t: "Test", d: "Run A/B with 5% audience sample." },
            { n: "02", t: "Analyze", d: "Review performance and insights." },
            { n: "03", t: "Iterate", d: "Refine creative based on feedback." },
            { n: "04", t: "Scale", d: "Roll out winning creative to full audience." },
          ].map((x) => (
            <Reveal key={x.n}>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <div className="font-display text-sm font-semibold text-white/70">{x.n}</div>
                <div className="mt-4 font-display text-xl font-bold">{x.t}</div>
                <p className="mt-3 text-sm text-white/85">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SiteFooter next={{ to: "/events", label: "Events & Partnerships", num: "07" }} />
    </main>
  );
}
