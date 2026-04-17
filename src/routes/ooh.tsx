import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, PitchCard, Pill, MediaSlot, BulletList } from "@/components/pitch/primitives";

export const Route = createFileRoute("/ooh")({
  head: () => ({
    meta: [
      { title: "OOH & Offline — Bolt UAE Pitch" },
      { name: "description", content: "Billboard strategy, taxi wraps, airport presence and offline activations." },
      { property: "og:title", content: "OOH & Offline — Bolt UAE" },
      { property: "og:description", content: "How Bolt owns the streets, the airport and the city skyline." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="05" title="OOH & Offline" kicker="From Sheikh Zayed Road billboards to airport takeovers, taxi wraps and creative guerrilla — owning the city in the physical world." mediaLabel="OOH Mock Reel" />

      {/* Slide 66 — Approach */}
      <SectionShell tone="light" slideNo={66} chapter="OOH" title="OOH Strategy" kicker="A focused, premium-placement-first approach for maximum brand impact and recall.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Premium First", d: "Iconic Sheikh Zayed billboards before secondary inventory." },
            { t: "Frequency Beats Reach", d: "Same rider sees Bolt 5+ times per commute." },
            { t: "Earned Amplification", d: "Every OOH designed to be photographed and shared." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 68 — Inventory mix */}
      <SectionShell tone="dark" slideNo={68} chapter="OOH" title="Inventory Mix" kicker="1 premium billboard, 15–20 lamp posts, airport presence and transit stations.">
        <StatGrid tone="dark" cols={4} stats={[
          { value: "1", label: "Premium SZR Billboard" },
          { value: "15–20", label: "Lamp Posts" },
          { value: "2", label: "Airport Activations" },
          { value: "50+", label: "Wrapped Vehicles" },
        ]} />
      </SectionShell>

      {/* Slide 69 — Three billboard concepts */}
      <SectionShell tone="light" slideNo={69} chapter="OOH" title="Three Billboard Concepts" kicker="Three strategic concepts for maximum impact and brand recall.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "BOLT HAS ARRIVED", k: "Launch · awareness", d: "Big logo · bold green · simple statement." },
            { t: "YOUR SAFE RIDE", k: "Pink Taxi · safety", d: "Female-led visual · safety messaging." },
            { t: "LAND WHEN YOU LAND", k: "Flight Tracking · airport", d: "Travel-traveller-truth headline." },
          ].map((x) => (
            <div key={x.t}>
              <MediaSlot label={x.t} caption={`${x.k} · ${x.d}`} />
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Slide 71 — Northern Emirates focus */}
      <SectionShell tone="green" slideNo={71} chapter="OOH" title="Sharjah & Ajman Focus" kicker="Universities, malls, residential areas — budget-conscious, high-frequency execution in Q4 2026 / Q1 2027.">
        <BulletList tone="dark" items={[
          "Universities (AUS, Ajman University) — student rider acquisition",
          "Malls (City Centre Sharjah, Ajman City Centre) — family riders",
          "Residential clusters — daily commuter habit-building",
        ]} />
      </SectionShell>

      {/* Slide 73 — Airport */}
      <SectionShell tone="dark" slideNo={73} chapter="OOH" title="Airport Domination" kicker="DXB + Zayed International with JCDecaux partnership — Flight Tracking as the hero feature.">
        <div className="grid gap-6 lg:grid-cols-2">
          <MediaSlot tone="dark" label="DXB Arrivals — Flight Tracking hero" />
          <MediaSlot tone="dark" label="Zayed Intl — Welcome to AUH" />
        </div>
      </SectionShell>

      {/* Slide 74 — SZR competitive displacement */}
      <SectionShell tone="light" slideNo={74} chapter="OOH" title="Sheikh Zayed Road Takeover" kicker="Premium large-format on Dubai's main highway — with playful competitive displacement (no naming).">
        <div className="grid gap-6 lg:grid-cols-2">
          <MediaSlot label="SZR Hero · 'We Show Up'" />
          <MediaSlot label="SZR Pair · 'Cancel vs Show Up'" />
        </div>
      </SectionShell>

      {/* Slide 76 — Taxi wraps */}
      <SectionShell tone="dark" slideNo={76} chapter="OOH" title="Taxi & Vehicle Wraps" kicker="Moving billboards in high-traffic loops — the most cost-effective brand reach in the UAE.">
        <MediaSlot tone="dark" label="Wrapped Bolt fleet — 50 vehicles" caption="Concept renders for green-and-white livery system" />
      </SectionShell>

      {/* Slide 77 — Creative tactics */}
      <SectionShell tone="light" slideNo={77} chapter="OOH" title="Creative & Guerrilla Tactics" kicker="Earned moments designed to break through the city.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Cancellation Counter", d: "LED ticker counting Bolt vs competitor on-time arrivals." },
            { t: "Pink Taxi Squad", d: "Roving Pink Taxi parade in Marina." },
            { t: "POD Pop-up", d: "Branded POD as mall installation." },
            { t: "Driver Spotlight", d: "Real driver portraits at lamp posts." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-lg font-bold">{x.t}</div>
              <p className="mt-2 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 79 — Tone */}
      <SectionShell tone="green" slideNo={79} chapter="OOH" title="Tone of Voice on the Street" kicker="Truth-based storytelling, bold but not reckless, challenger tone with local respect and global craft.">
        <Pill tone="dark" solid>Brand voice principles</Pill>
        <div className="mt-6">
          <BulletList tone="dark" items={[
            "Bold > clever",
            "Truth > exaggeration",
            "Local respect > global cliché",
            "Confidence > arrogance",
          ]} />
        </div>
      </SectionShell>

      {/* Slide 81 — Measurement */}
      <SectionShell tone="light" slideNo={81} chapter="OOH" title="OOH Measurement" kicker="Track brand recall, app downloads and search volume correlation per panel.">
        <StatGrid cols={3} stats={[
          { value: "+30%", label: "Aided Awareness Lift" },
          { value: "+45%", label: "Branded Search Lift" },
          { value: "+22%", label: "App Install Lift" },
        ]} />
      </SectionShell>

      {/* Slide 83 — Distribution */}
      <SectionShell tone="dark" slideNo={83} chapter="OOH" title="Distribution Plan & Cost Estimates" kicker="Strategic distribution across UAE markets with indicative cost estimates.">
        <MediaSlot tone="dark" label="OOH distribution map + budget breakdown" caption="Replace with map graphic and final media-buy table" />
      </SectionShell>

      <SiteFooter next={{ to: "/campaigns", label: "Campaigns", num: "06" }} />
    </main>
  );
}
