import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, PitchCard, BulletList, Pill, MediaSlot, Reveal } from "@/components/pitch/primitives";

export const Route = createFileRoute("/strategy")({
  head: () => ({
    meta: [
      { title: "Strategy Framework — Bolt UAE Pitch" },
      { name: "description", content: "Vision, three-pillar strategy, audience targeting and integrated marketing approach." },
      { property: "og:title", content: "Strategy Framework — Bolt UAE" },
      { property: "og:description", content: "Three-pillar approach, positioning and key messages to win UAE." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="03" title="Strategy Framework" kicker="Three pillars, four key messages, and an integrated channel mix engineered for market domination." mediaLabel="Strategy Sizzle Reel" />

      {/* Slide 21 — Vision, Mission, Values */}
      <SectionShell tone="light" slideNo={21} chapter="Strategy" title="Vision · Mission · Values" kicker="The North-Star that drives Bolt to #1 in UAE.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Vision", d: "The most reliable, loved and locally-rooted ride-hailing brand in the UAE." },
            { t: "Mission", d: "Show up for every rider — every time — with the speed, safety and choice they deserve." },
            { t: "Values", d: "Reliability · Boldness · Local respect · Global craft." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <Pill>{x.t}</Pill>
              <p className="mt-6 font-display text-2xl font-bold leading-snug">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 22 — Global benchmarks */}
      <SectionShell tone="dark" slideNo={22} chapter="Strategy" title="What Global Leaders Teach Us" kicker="Best practices from leading ride-hailing brands worldwide — adapted for UAE.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Lyft (US)", d: "Driver storytelling > paid creative." },
            { t: "Ola (India)", d: "City-specific creators outperform national." },
            { t: "Grab (SEA)", d: "Cross-category loyalty drives frequency." },
          ].map((x) => (
            <PitchCard key={x.t} tone="dark">
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-white/75">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 24 — Audience tiers */}
      <SectionShell tone="light" slideNo={24} chapter="Strategy" title="Audience Tiers" kicker="Primary, secondary, tertiary and niche segments — each with their own message and channel.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { tier: "Primary", who: "Daily commuters 22–40", note: "Affluent urban professionals", colour: true },
            { tier: "Secondary", who: "Airport & business travel", note: "Frequent flyers · Flight tracking" },
            { tier: "Tertiary", who: "Families & shoppers", note: "POD vehicle use cases" },
            { tier: "Niche", who: "Women riders", note: "Pink Taxi safety positioning" },
          ].map((x) => (
            <PitchCard key={x.tier} accent={x.colour}>
              <Pill tone={x.colour ? "dark" : "light"} solid={x.colour}>{x.tier}</Pill>
              <div className="mt-6 font-display text-2xl font-bold">{x.who}</div>
              <div className={`mt-2 text-sm ${x.colour ? "text-white/75" : "text-[var(--bolt-dark)]/70"}`}>{x.note}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 25 — Integrated approach */}
      <SectionShell tone="green" slideNo={25} chapter="Strategy" title="Integrated Approach" kicker="Brand + Performance + Community working as one system to compound share gains.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Brand Pull", d: "OOH, content, PR — ladder up brand love." },
            { t: "Performance Push", d: "Paid social, SEM, app store — convert demand." },
            { t: "Community Glue", d: "Riders & drivers as advocates and creators." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <div className="font-display text-2xl font-bold">{x.t}</div>
                <p className="mt-3 text-white/85">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Slide 26 — Multi-channel presence */}
      <SectionShell tone="light" slideNo={26} chapter="Strategy" title="Multi-Channel Presence" kicker="Always-on, everywhere the rider is — OOH, social, app store, partner ecosystems.">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {["OOH", "Social", "Influencer", "PR", "Events", "Performance"].map((c) => (
            <PitchCard key={c}>
              <div className="font-display text-lg font-bold">{c}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slides 46–48 — Positioning & key messages */}
      <SectionShell tone="dark" slideNo={46} chapter="Strategy" title="Core Positioning" kicker='"Bolt — the ride-hailing app that actually shows up." A challenger position rooted in rider truth.'>
        <MediaSlot tone="dark" label="Positioning film — 30s" caption="Replace with cut-down brand film for the manifesto" />
      </SectionShell>

      <SectionShell tone="light" slideNo={47} chapter="Strategy" title="From 'Affordable' to 'Superior'" kicker="Transforming the brand from 'affordable alternative' to 'superior choice with better service.'">
        <div className="grid gap-6 lg:grid-cols-2">
          <PitchCard>
            <Pill>From</Pill>
            <BulletList items={["Cheap alternative", "Discount-led", "Price-driven loyalty", "Reactive service"]} />
          </PitchCard>
          <PitchCard accent>
            <Pill tone="dark" solid>To</Pill>
            <BulletList tone="dark" items={["Superior choice", "Service-led", "Reliability-driven loyalty", "Proactive, predictive service"]} />
          </PitchCard>
        </div>
      </SectionShell>

      <SectionShell tone="green" slideNo={48} chapter="Strategy" title="Four Key Messages" kicker="Every campaign, every asset, every post must ladder up to one of these four.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "We Show Up", d: "99.5% on-time arrival, every ride." },
            { n: "02", t: "Faster By Design", d: "DTC fleet → 2–3 min ETAs." },
            { n: "03", t: "Built For You", d: "Pink Taxi · POD · Flight Tracking." },
            { n: "04", t: "Locally Yours", d: "UAE-led decisions, UAE-led service." },
          ].map((x) => (
            <Reveal key={x.n}>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <div className="font-display text-sm font-semibold text-white/70">{x.n}</div>
                <div className="mt-4 font-display text-2xl font-bold">{x.t}</div>
                <p className="mt-3 text-white/85">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SiteFooter next={{ to: "/social", label: "Social Strategy", num: "04" }} />
    </main>
  );
}
