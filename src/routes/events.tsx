import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, PitchCard, Pill, MediaSlot, BulletList } from "@/components/pitch/primitives";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Partnerships — Bolt UAE Pitch" },
      { name: "description", content: "Melt IP integration, brand experiences, partnerships and the Abu Dhabi launch event plan." },
      { property: "og:title", content: "Events & Partnerships — Bolt UAE" },
      { property: "og:description", content: "Pre-during-post activations, brand experiences and event partnerships." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="07" title="Events & Partnerships" kicker="Melt IP event integration, immersive brand experiences and the Abu Dhabi launch playbook." mediaLabel="Event Sizzle Reel" />

      {/* Slide 97 — Melt IP */}
      <SectionShell tone="light" slideNo={97} chapter="Events" title="Melt IP Event Integration" kicker="Pre-during-post activation plan for Melt Media IP events in Abu Dhabi.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { n: "01", t: "Pre-Event", d: "Countdown content, social teasers, influencer previews." },
            { n: "02", t: "During Event", d: "Branded photo booths, AR filters, social walls." },
            { n: "03", t: "Post-Event", d: "UGC compilations, highlight reels, follow-up paid amplification." },
          ].map((x) => (
            <PitchCard key={x.n}>
              <div className="font-display text-sm font-semibold text-[var(--bolt-green)]">{x.n}</div>
              <div className="mt-4 font-display text-2xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 99 — Brand experiences */}
      <SectionShell tone="dark" slideNo={99} chapter="Events" title="Immersive Brand Experiences" kicker="Live activations that turn riders into raving fans.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Pink Taxi Squad", d: "Roving Pink Taxi parade in Marina." },
            { t: "POD Pop-up", d: "Branded POD activation at City Walk." },
            { t: "Show-Up Challenge", d: "Live Bolt vs competitor race outside Mall of Emirates." },
            { t: "Driver Heroes Wall", d: "Photo wall celebrating top drivers." },
            { t: "Airport Welcome Lounge", d: "Bolt branded lounge at AUH arrivals." },
            { t: "Ramadan Iftar Bus", d: "Mobile Iftar tent serving riders & drivers." },
          ].map((x) => (
            <PitchCard key={x.t} tone="dark">
              <div className="font-display text-lg font-bold">{x.t}</div>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Abu Dhabi launch event (slide 88 / detail) */}
      <SectionShell tone="green" slideNo="AD-Launch" chapter="Events" title="Abu Dhabi Launch · Sept 2026" kicker="A two-week burst with 15 OOH locations, 20+ lamp posts, 50+ wrapped vehicles, ambassadors and influencer rollout.">
        <StatGrid tone="green" cols={4} stats={[
          { value: "15", label: "OOH Locations" },
          { value: "20+", label: "Lamp Posts" },
          { value: "50+", label: "Wrapped Vehicles" },
          { value: "10", label: "Micro-Influencers" },
        ]} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PitchCard accent>
            <Pill tone="dark" solid>Strategic Locations</Pill>
            <BulletList tone="dark" items={["Corniche", "Marina Mall", "ADNEC", "Zayed International Airport"]} />
          </PitchCard>
          <PitchCard accent>
            <Pill tone="dark" solid>First Week Content</Pill>
            <BulletList tone="dark" items={["Brand Ambassador welcome video", "Rider testimonials", "Driver POV unboxing", "PR launch moment"]} />
          </PitchCard>
        </div>
      </SectionShell>

      {/* Partnerships */}
      <SectionShell tone="light" slideNo="P-01" chapter="Events" title="Strategic Partnerships" kicker="Partnerships that drive demand and credibility — across travel, retail, lifestyle and B2B.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Etihad / Emirates", d: "Flight Tracking integrations & traveler offers." },
            { t: "JCDecaux", d: "Premium airport & SZR media partnership." },
            { t: "Mall Operators", d: "POD pop-ups, mall pickup zones." },
            { t: "Corporate Travel", d: "B2B accounts for business travelers." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-lg font-bold">{x.t}</div>
              <p className="mt-2 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="dark" slideNo="P-02" chapter="Events" title="Event Calendar 2026–2027" kicker="The flagship moments where Bolt shows up in person.">
        <MediaSlot tone="dark" label="Calendar visualisation — IPL · UAE National Day · NYE · Ramadan · F1 · Art Dubai" caption="Replace with branded calendar graphic" />
      </SectionShell>

      <SiteFooter next={{ to: "/roadmap", label: "Roadmap & KPIs", num: "08" }} />
    </main>
  );
}
