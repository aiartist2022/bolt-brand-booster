import { createFileRoute } from "@tanstack/react-router";
import { ChapterHero, SiteFooter } from "@/components/pitch/SiteChrome";
import { SectionShell, StatGrid, PitchCard, BulletList, Pill, MediaSlot, Reveal } from "@/components/pitch/primitives";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Social Strategy — Bolt UAE Pitch" },
      { name: "description", content: "Content pillars, influencer matrix, viral playbooks and community engagement for Bolt UAE." },
      { property: "og:title", content: "Social Strategy — Bolt UAE" },
      { property: "og:description", content: "How Bolt wins social: pillars, creators, formats and community." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ChapterHero num="04" title="Social Strategy" kicker="Content pillars, influencer matrix, weekly cadence and the viral playbook to dominate UAE social." mediaLabel="Social Highlight Reel" />

      {/* Slide 27 — Organic excellence */}
      <SectionShell tone="light" slideNo={27} chapter="Social" title="Organic Social Excellence" kicker="Authentic storytelling and user-generated content as the engine of growth.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Authenticity", d: "Driver POV, real-rider stories, behind-the-wheel." },
            { t: "Cadence", d: "Daily IG · 4×/week TikTok · Weekly LinkedIn thought leadership." },
            { t: "Tone", d: "Bold but warm, locally fluent, never preachy." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 28 — Community & advocacy */}
      <SectionShell tone="dark" slideNo={28} chapter="Social" title="Community & Advocacy" kicker="Building loyalty, advocacy and word-of-mouth through strategic community engagement.">
        <StatGrid tone="dark" cols={4} stats={[
          { value: "15K", label: "IG Followers · Nov 2026" },
          { value: "8K", label: "TikTok Followers · Nov 2026" },
          { value: "3–6%", label: "IG Engagement Target" },
          { value: "8%", label: "Engagement Target" },
        ]} />
      </SectionShell>

      {/* Slide 35 — Strategic posture per channel */}
      <SectionShell tone="light" slideNo={35} chapter="Social" title="Strategic Posture per Channel" kicker="Each platform with its own role, voice and KPI.">
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { c: "Instagram", role: "Brand & culture", kpi: "Saves & shares" },
            { c: "TikTok", role: "Reach & virality", kpi: "Watch time" },
            { c: "LinkedIn", role: "B2B & talent", kpi: "Thought-leadership" },
            { c: "X", role: "Real-time & service", kpi: "Reply velocity" },
          ].map((x) => (
            <PitchCard key={x.c}>
              <Pill>{x.c}</Pill>
              <div className="mt-4 font-display text-xl font-bold">{x.role}</div>
              <div className="mt-1 text-sm text-[var(--bolt-dark)]/60">KPI · {x.kpi}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 39 — Topics & sentiment */}
      <SectionShell tone="dark" slideNo={39} chapter="Social" title="Conversation Topics & Sentiment" kicker="Where the UAE ride-hailing conversation is happening — and how Bolt should show up.">
        <div className="grid gap-3">
          {[
            { topic: "Cancellations", mentions: "12.4K", sentiment: "Negative", color: "bg-red-500/30" },
            { topic: "Surge Pricing", mentions: "9.1K", sentiment: "Negative", color: "bg-red-500/30" },
            { topic: "Driver Quality", mentions: "7.6K", sentiment: "Mixed", color: "bg-yellow-500/30" },
            { topic: "App Experience", mentions: "5.2K", sentiment: "Positive (Bolt-leaning)", color: "bg-[var(--bolt-green)]/30" },
            { topic: "Safety", mentions: "4.8K", sentiment: "Positive (Pink Taxi)", color: "bg-[var(--bolt-green)]/30" },
          ].map((x) => (
            <Reveal key={x.topic}>
              <div className="grid grid-cols-12 items-center gap-4 rounded-xl bg-white/5 p-4">
                <div className="col-span-5 font-display text-lg font-bold">{x.topic}</div>
                <div className="col-span-3 text-sm text-white/70">{x.mentions}</div>
                <div className={`col-span-4 inline-block rounded-full px-3 py-1 text-xs font-semibold w-fit ${x.color}`}>{x.sentiment}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Slide 44 — Trend-jacking */}
      <SectionShell tone="light" slideNo={44} chapter="Social" title="Real-Time Listening & Trend-Jacking" kicker="Monitor competitor mentions, jump on trending audio and reply faster than the conversation moves.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Always-on Listening", d: "Bolt + competitors + UAE travel keywords, 24/7." },
            { t: "Trend Squad", d: "3-person rapid-response team, 2h SLA." },
            { t: "Crisis Protocol", d: "Tiered escalation with PR, ops, brand." },
          ].map((x) => (
            <PitchCard key={x.t}>
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-sm text-[var(--bolt-dark)]/70">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 51 — Content framework */}
      <SectionShell tone="green" slideNo={51} chapter="Social" title="Content Framework" kicker="40% educational · 30% entertaining · 20% promotional · 10% UGC.">
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { v: "40%", t: "Educational", d: "Explainers, how-tos, hidden features." },
            { v: "30%", t: "Entertaining", d: "Skits, trends, driver POV." },
            { v: "20%", t: "Promotional", d: "Launches, offers, partnerships." },
            { v: "10%", t: "UGC", d: "Repost riders & drivers." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <div className="font-display text-5xl font-bold">{x.v}</div>
                <div className="mt-3 font-display text-lg font-bold">{x.t}</div>
                <p className="mt-2 text-sm text-white/85">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Slide 53 — Weekly content series */}
      <SectionShell tone="light" slideNo={53} chapter="Social" title="Weekly Content Series" kicker="A repeatable cadence that builds anticipation and habit.">
        <div className="grid gap-4 lg:grid-cols-5">
          {[
            { d: "MON", t: "Show-Up Monday", k: "On-time stories" },
            { d: "TUE", t: "Tip Tuesday", k: "App hacks" },
            { d: "WED", t: "Driver Wednesday", k: "POV reels" },
            { d: "THU", t: "Throwback / Pink Taxi", k: "Safety stories" },
            { d: "FRI", t: "Feature Friday", k: "POD · Flight Track" },
          ].map((x) => (
            <PitchCard key={x.d}>
              <div className="font-display text-sm font-semibold text-[var(--bolt-green)]">{x.d}</div>
              <div className="mt-4 font-display text-lg font-bold">{x.t}</div>
              <div className="mt-2 text-sm text-[var(--bolt-dark)]/60">{x.k}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 54 — Viral secret sauce */}
      <SectionShell tone="dark" slideNo={54} chapter="Social" title="The Viral Secret Sauce" kicker="The four ingredients of every shareable Bolt post.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { t: "Native format", d: "Trending audio, vertical, low-fi." },
            { t: "Local truth", d: "Built on a real UAE rider insight." },
            { t: "Punchline first", d: "Hook in the first 1.5 seconds." },
            { t: "Reply hook", d: "Designed to be quoted & duetted." },
          ].map((x) => (
            <PitchCard key={x.t} tone="dark">
              <div className="font-display text-xl font-bold">{x.t}</div>
              <p className="mt-3 text-white/75">{x.d}</p>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 55 — UGC engine */}
      <SectionShell tone="light" slideNo={55} chapter="Social" title="UGC Engine" kicker="Authentic content from real riders and drivers — incentivised, curated, amplified.">
        <MediaSlot label="Sample UGC reel grid" caption="Replace with curated rider & driver clips" />
      </SectionShell>

      {/* Slide 56 — Influencer matrix */}
      <SectionShell tone="dark" slideNo={56} chapter="Social" title="Influencer Matrix" kicker="A tiered creator strategy across mega, macro, micro and driver-creators.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { tier: "Mega", n: "3", who: "Regional A-list", goal: "Awareness" },
            { tier: "Macro", n: "10", who: "Niche celebs", goal: "Consideration" },
            { tier: "Micro", n: "30", who: "Local creators", goal: "Trust + reach" },
            { tier: "Driver-creators", n: "12", who: "Bolt drivers", goal: "Authenticity" },
          ].map((x) => (
            <PitchCard key={x.tier} tone="dark">
              <Pill tone="dark">{x.tier}</Pill>
              <div className="mt-6 font-display text-5xl font-bold text-[var(--bolt-green)]">{x.n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">creators</div>
              <div className="mt-6 font-display text-lg font-bold">{x.who}</div>
              <div className="mt-1 text-sm text-white/65">Goal · {x.goal}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slides 57-58 — Visual & viral concepts */}
      <SectionShell tone="light" slideNo="57–58" chapter="Social" title="Content Concepts — IG & TikTok" kicker="Visual content concepts and viral TikTok concepts for Bolt UAE.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Show-Up Challenge", k: "TikTok · viral" },
            { t: "Pink Taxi Diaries", k: "IG · series" },
            { t: "What's in your POD?", k: "IG · UGC" },
            { t: "Land When You Land", k: "TikTok · feature hero" },
            { t: "Driver POV", k: "TikTok · BTS" },
            { t: "60-Second City Tours", k: "Reels · culture" },
          ].map((x) => (
            <MediaSlot key={x.t} label={x.t} caption={x.k} />
          ))}
        </div>
      </SectionShell>

      {/* Slide 59 — Community management */}
      <SectionShell tone="green" slideNo={59} chapter="Social" title="Community Management" kicker="Reply <2h · friendly tone · crisis protocol · content opportunities baked into every conversation.">
        <BulletList tone="dark" items={[
          "<2h reply SLA across all platforms",
          "Tone: warm, witty, never sarcastic",
          "Crisis protocol with brand+PR+ops on-call",
          "Every reply considered for content potential",
        ]} />
      </SectionShell>

      {/* Slide 61 — Growth hacks */}
      <SectionShell tone="light" slideNo={61} chapter="Social" title="Growth Hacks" kicker="Strategic growth hacks for rapid follower acquisition and engagement.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Comment-to-DM lead-magnets", "Creator collab posts", "Geo-tagged stories", "Save-worthy carousels"].map((x) => (
            <PitchCard key={x}>
              <div className="font-display text-lg font-bold">{x}</div>
            </PitchCard>
          ))}
        </div>
      </SectionShell>

      {/* Slide 63-64 — KPIs */}
      <SectionShell tone="dark" slideNo="63–64" chapter="Social" title="Social KPIs & Tracking" kicker="Monthly tracking of social performance vs. competitor benchmarks — the line of sight to #1.">
        <StatGrid tone="dark" cols={4} stats={[
          { value: "+250%", label: "Follower Growth Y1" },
          { value: "8%", label: "Engagement Rate" },
          { value: "30M", label: "Monthly Reach" },
          { value: "<2h", label: "Reply SLA" },
        ]} />
      </SectionShell>

      <SiteFooter next={{ to: "/ooh", label: "OOH & Offline", num: "05" }} />
    </main>
  );
}
