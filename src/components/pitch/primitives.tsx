import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/* ---------- Reveal: scroll-triggered fade-up ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "p" | "h2" | "h3";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- SectionShell: alternating dark/light slide canvas ---------- */
export function SectionShell({
  tone = "light",
  slideNo,
  chapter,
  title,
  kicker,
  children,
  bleed = false,
  id,
}: {
  tone?: "light" | "dark" | "green";
  slideNo?: number | string;
  chapter?: string;
  title?: string;
  kicker?: string;
  children: ReactNode;
  bleed?: boolean;
  id?: string;
}) {
  const palette = {
    light: "bg-[var(--bolt-cream)] text-[var(--bolt-dark)]",
    dark: "bg-[var(--bolt-dark)] text-white",
    green: "bg-[var(--bolt-green)] text-white",
  }[tone];
  const grid =
    tone === "light" ? "bolt-grid" : "bolt-grid-dark";
  const meta =
    tone === "light"
      ? "text-[var(--bolt-dark)]/50"
      : "text-white/50";
  return (
    <section
      id={id}
      className={cn("relative w-full overflow-hidden", palette, grid)}
    >
      <div
        className={cn(
          "relative mx-auto",
          bleed ? "max-w-[1600px] px-6 lg:px-12" : "max-w-7xl px-6 lg:px-12",
          "py-24 lg:py-32"
        )}
      >
        {(slideNo || chapter) && (
          <Reveal>
            <div className={cn("mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em]", meta)}>
              {slideNo !== undefined && <span>Slide {String(slideNo).padStart(2, "0")}</span>}
              {chapter && <span className="h-px w-10 bg-current opacity-40" />}
              {chapter && <span>{chapter}</span>}
            </div>
          </Reveal>
        )}
        {title && (
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl text-balance">
              {title}
            </h2>
          </Reveal>
        )}
        {kicker && (
          <Reveal delay={0.12}>
            <p
              className={cn(
                "mt-5 max-w-3xl text-lg leading-relaxed md:text-xl",
                tone === "light" ? "text-[var(--bolt-dark)]/70" : "text-white/70"
              )}
            >
              {kicker}
            </p>
          </Reveal>
        )}
        <div className={cn(title || kicker ? "mt-14 lg:mt-20" : "")}>{children}</div>
      </div>
    </section>
  );
}

/* ---------- StatGrid ---------- */
export function StatGrid({
  stats,
  tone = "light",
  cols = 4,
}: {
  stats: { value: string; label: string; suffix?: string }[];
  tone?: "light" | "dark" | "green";
  cols?: 2 | 3 | 4;
}) {
  const accent =
    tone === "light" ? "text-[var(--bolt-green)]" : "text-[var(--bolt-green)]";
  const label = tone === "light" ? "text-[var(--bolt-dark)]/60" : "text-white/60";
  const border = tone === "light" ? "border-[var(--bolt-line)]" : "border-white/10";
  const colsCls = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={cn("grid grid-cols-1 gap-px", colsCls, "border", border, "bg-current/0")}>
      {stats.map((s, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className={cn("border", border, "p-6 lg:p-8")}>
            <div className={cn("font-display text-4xl font-bold md:text-5xl lg:text-6xl", accent)}>
              {s.value}
              {s.suffix && <span className="ml-1 text-2xl opacity-70">{s.suffix}</span>}
            </div>
            <div className={cn("mt-3 text-sm uppercase tracking-wider", label)}>{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- MediaSlot: replaceable image/video drop zone ---------- */
export function MediaSlot({
  label,
  kind = "image",
  ratio = "16/9",
  tone = "light",
  className,
  caption,
  style,
}: {
  label: string;
  kind?: "image" | "video";
  ratio?: "16/9" | "4/3" | "1/1" | "3/4" | "9/16" | "21/9";
  tone?: "light" | "dark";
  className?: string;
  caption?: string;
  style?: CSSProperties;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={className}>
      <div
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl border border-dashed",
          dark
            ? "border-white/20 bg-white/[0.03]"
            : "border-[var(--bolt-green)]/40 bg-[var(--bolt-green-soft)]"
        )}
        style={{ aspectRatio: ratio, ...style }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full",
              dark ? "bg-white/10 text-white" : "bg-[var(--bolt-green)] text-white"
            )}
            aria-hidden
          >
            {kind === "video" ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-13.5-5.5l2.5 3.01L14.5 11l4.5 6H5l2.5-3.5z"/></svg>
            )}
          </div>
          <div className={cn("text-xs font-semibold uppercase tracking-[0.2em]", dark ? "text-white/60" : "text-[var(--bolt-dark)]/60")}>
            Replace · {kind}
          </div>
          <div className={cn("font-display text-base font-semibold md:text-lg", dark ? "text-white" : "text-[var(--bolt-dark)]")}>
            {label}
          </div>
          {caption && (
            <div className={cn("max-w-sm text-xs", dark ? "text-white/50" : "text-[var(--bolt-dark)]/50")}>{caption}</div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Card ---------- */
export function PitchCard({
  children,
  tone = "light",
  className,
  accent,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  accent?: boolean;
}) {
  const base =
    tone === "light"
      ? accent
        ? "bg-[var(--bolt-dark)] text-white border-[var(--bolt-dark)]"
        : "bg-white text-[var(--bolt-dark)] border-[var(--bolt-line)]"
      : accent
        ? "bg-[var(--bolt-green)] text-white border-[var(--bolt-green)]"
        : "bg-white/[0.04] text-white border-white/10";
  return (
    <Reveal className={className}>
      <div className={cn("rounded-2xl border p-6 lg:p-8 h-full", base)}>{children}</div>
    </Reveal>
  );
}

/* ---------- BulletList ---------- */
export function BulletList({
  items,
  tone = "light",
  className,
}: {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-2 inline-block h-1.5 w-3 shrink-0 rounded-full",
              tone === "light" ? "bg-[var(--bolt-green)]" : "bg-[var(--bolt-green)]"
            )}
          />
          <span className={cn("leading-relaxed", tone === "dark" ? "text-white/85" : "text-[var(--bolt-dark)]/85")}>
            {it}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Pill / Tag ---------- */
export function Pill({ children, tone = "light", solid = false }: { children: ReactNode; tone?: "light" | "dark"; solid?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        solid
          ? "bg-[var(--bolt-green)] text-white"
          : tone === "light"
            ? "bg-[var(--bolt-green-soft)] text-[var(--bolt-green)] border border-[var(--bolt-green)]/20"
            : "bg-white/10 text-white border border-white/15"
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Bar ---------- */
export function ProgressBar({ value, label, sub, tone = "light" }: { value: number; label: string; sub?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Reveal>
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <div className={cn("font-medium", dark ? "text-white" : "text-[var(--bolt-dark)]")}>{label}</div>
          <div className="font-display text-2xl font-bold text-[var(--bolt-green)]">{value}%</div>
        </div>
        <div className={cn("h-2 w-full overflow-hidden rounded-full", dark ? "bg-white/10" : "bg-[var(--bolt-line)]")}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-full rounded-full bg-[var(--bolt-green)]"
          />
        </div>
        {sub && <div className={cn("text-xs", dark ? "text-white/50" : "text-[var(--bolt-dark)]/50")}>{sub}</div>}
      </div>
    </Reveal>
  );
}
