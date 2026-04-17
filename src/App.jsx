import React, { useState } from "react";

function BuildingMark({ size = "md" }) {
  const map = {
    xs: {
      wrap: "w-7 h-7",
      base: "w-7",
      frontW: "w-[10px]",
      frontH: "h-[14px]",
      backW: "w-[13px]",
      backH: "h-[18px]",
      leftFront: "left-[13px]",
      leftBack: "left-[2px]",
      baseBottom: "bottom-[2px]",
      windowGap: "gap-[2px]",
      windowW: "w-[4px]",
      windowH: "h-[1.5px]",
    },
    sm: {
      wrap: "w-8 h-8",
      base: "w-8",
      frontW: "w-[11px]",
      frontH: "h-[16px]",
      backW: "w-[14px]",
      backH: "h-[21px]",
      leftFront: "left-[15px]",
      leftBack: "left-[3px]",
      baseBottom: "bottom-[2px]",
      windowGap: "gap-[2px]",
      windowW: "w-[5px]",
      windowH: "h-[1.5px]",
    },
    md: {
      wrap: "w-10 h-10",
      base: "w-10",
      frontW: "w-[13px]",
      frontH: "h-[19px]",
      backW: "w-[17px]",
      backH: "h-[25px]",
      leftFront: "left-[19px]",
      leftBack: "left-[4px]",
      baseBottom: "bottom-[3px]",
      windowGap: "gap-[2px]",
      windowW: "w-[6px]",
      windowH: "h-[2px]",
    },
  };

  const c = map[size];

  return (
    <div className={`relative ${c.wrap}`}>
      <div className={`absolute left-0 right-0 ${c.baseBottom} flex justify-center`}>
        <div className={`h-[2px] ${c.base} rounded-full bg-slate-200/90`} />
      </div>

      <div
        className={`absolute ${c.leftBack} bottom-[4px] ${c.backW} ${c.backH} rounded-t-[5px] border border-slate-200/90 bg-transparent`}
      >
        <div className={`absolute left-1/2 top-[4px] -translate-x-1/2 flex flex-col ${c.windowGap}`}>
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
        </div>
      </div>

      <div
        className={`absolute ${c.leftFront} bottom-[4px] ${c.frontW} ${c.frontH} rounded-t-[4px] border border-slate-200/90 bg-transparent`}
      >
        <div className={`absolute left-1/2 top-[4px] -translate-x-1/2 flex flex-col ${c.windowGap}`}>
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
        </div>
      </div>
    </div>
  );
}

function BrandWordmark({ size = "md" }) {
  const textSizes = {
    xs: "text-[0.98rem]",
    sm: "text-[1.18rem]",
    md: "text-[1.7rem]",
  };

  return (
    <div className="flex items-center gap-2.5">
      <BuildingMark size={size} />
      <div>
        <div className={`${textSizes[size]} font-semibold tracking-tight text-white`}>
          Corey Capital
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
          Entrepreneurs League
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, body, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-8 text-slate-300">{body}</p> : null}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{label}</div>
    </div>
  );
}

function CompactStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-300">{label}</div>
    </div>
  );
}

function AuthorityCard({ title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function ProofCard({ title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
        {title}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function TierCard({
  tier,
  price,
  cadence,
  subtitle,
  access,
  features,
  cta,
  featured = false,
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-3xl border p-6 shadow-xl ${
        featured
          ? "border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-white/[0.04] ring-1 ring-white/10"
          : "border-white/10 bg-slate-950/70"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
              featured
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : "border-white/10 bg-white/5 text-slate-200"
            }`}
          >
            {tier}
          </div>
          <div className="mt-4 text-4xl font-semibold tracking-tight text-white">
            {price}
            <span className="ml-1 text-xl text-slate-300">/{cadence}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{subtitle}</p>
        </div>

        {featured ? (
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Highest Access
          </div>
        ) : null}
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
        <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Access Model</div>
        <div className="mt-2 text-sm font-medium text-white">{access}</div>
      </div>

      <div className="mt-6 space-y-3 pb-8">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <p className="text-sm leading-6 text-slate-200">{feature}</p>
          </div>
        ))}
      </div>

      <button
        className={`mt-auto w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${
          featured
            ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
            : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}

function Chevron({ open }) {
  return (
    <span
      className={`inline-block text-slate-300 transition-transform duration-200 ${
        open ? "rotate-90" : ""
      }`}
    >
      ▶
    </span>
  );
}

function ExpandableSection({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
      >
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          {subtitle ? <div className="mt-1 text-xs text-slate-400">{subtitle}</div> : null}
        </div>
        <Chevron open={open} />
      </button>

      {open ? <div className="border-t border-white/10 px-4 py-4">{children}</div> : null}
    </div>
  );
}

function AccessPanel() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      <div className="mb-6">
        <div className="mb-4 overflow-hidden">
          <BrandWordmark size="md" />
        </div>
        <h2 className="text-2xl font-semibold text-white">Private Access Portal</h2>
        <p className="mt-2 text-sm text-slate-300">
          Structured for qualified users who want business credit, capital positioning,
          and closer proximity to Corey’s methodology.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm text-slate-200">Name or business email</label>
          <input
            className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-slate-400 focus:outline-none"
            placeholder="Enter your information"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-200">Primary objective</label>
          <input
            className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-slate-400 focus:outline-none"
            placeholder="Funding, credit, leverage, or access"
          />
        </div>

        <button className="h-12 w-full rounded-xl bg-emerald-500 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          Unlock Access
        </button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-200">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <div className="mb-1 font-medium text-white">Qualified Entry</div>
          Serious users enter through a controlled front door.
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <div className="mb-1 font-medium text-white">Premium Progression</div>
          Structured path toward deeper access and founder proximity.
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3 text-xs text-slate-300">
        This panel is designed to become the first step of a gated high-ticket funnel.
      </div>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="hidden lg:block">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <BrandWordmark size="sm" />
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="hidden sm:block">
                <div className="text-[11px] uppercase tracking-[0.32em] text-slate-300">
                  Private Financial Ecosystem
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-emerald-300">
                  Institutional Entry Layer
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-200 transition hover:bg-white/15">
              Enter the Platform
            </button>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Qualified Access
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-18 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
            <div className="relative max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200">
                Business Credit • Capital Positioning • Premium Access
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
                Structured access to business credit, capital deployment, and premium proximity to Corey.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Corey Capital is the private front door to Corey Entrepreneurs League —
                built for serious operators who want more than information. It is designed
                for credibility, leverage, and access to structured financial opportunity.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs uppercase tracking-[0.26em] text-slate-400">
                  Corey P. Smith
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Author • Credit Strategist • Capital Systems Architect
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Corey is known for turning credit literacy into usable leverage. His work
                  goes beyond repair and into structured capital acquisition, business credit,
                  and disciplined expansion of financial optionality.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Business Credit Systems
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Capital Access
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Financial Structuring
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Wealth Leverage
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Unlock Access
                </button>
                <button className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15">
                  View Qualified Opportunities
                </button>
                <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Enter the Platform
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <StatCard value="High-Trust" label="Institutional tone from first impression" />
                <StatCard value="Tiered" label="Access modeled by proximity and value" />
                <StatCard value="Selective" label="Built for serious, qualified users" />
              </div>
            </div>

            <AccessPanel />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <SectionHeading
            eyebrow="Founder Authority"
            title="Why serious users would trust Corey with high-value financial decisions."
            body="Corey should be presented as the premium asset: not a generic personality, but a disciplined operator whose value lies in structured methodology, capital access, and long-horizon leverage thinking."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <AuthorityCard
              title="Beyond credit repair"
              body="Most people are taught how to repair credit. Corey teaches how to structure it, access more of it, and use it as a lever for growth."
            />
            <AuthorityCard
              title="Capital as optionality"
              body="His real differentiator is not information alone, but the ability to turn financial access into mobility, acquisitions, and reduced decision friction."
            />
            <AuthorityCard
              title="Trusted by transformation"
              body="The platform should communicate that Corey’s work changes how people interact with banks, lenders, and financial opportunity at scale."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <SectionHeading
            eyebrow="What Changes With Access"
            title="Credit, properly structured, becomes leverage — not survival."
            body="The outcome is not just approvals. It is the ability to operate with greater freedom, stronger purchasing power, and more control over timing, movement, and opportunity."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <ProofCard
              title="Institutional Approval Profile"
              body="High-limit revolving credit across major financial networks, premium cards, retail lines, and stronger lender confidence."
            />
            <ProofCard
              title="Asset & Mobility Expansion"
              body="Zero-down acquisition, favorable rates, travel flexibility, rental access, and lower dependence on immediate cash reserves."
            />
            <ProofCard
              title="Capital Confidence"
              body="Reduced stress, faster decisions, and the ability to pursue business, personal, or strategic opportunities with real leverage behind them."
            />
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/8 p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-emerald-300">
              Core Principle
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Access is only phase one. Expansion is where the real leverage begins.
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Corey’s value lies in teaching people how to move from financial constraint
              into structured access — and then how to extend that access into wider freedom,
              better positioning, and long-term wealth-building capacity.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <SectionHeading
            eyebrow="Access Architecture"
            title="Three tiers. Three levels of proximity."
            body="Standard opens the platform. Premium deepens strategic context. Diamond is the direct path to Corey."
          />

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            <TierCard
              tier="Standard"
              price="$149"
              cadence="month"
              subtitle="Platform access and structured entry into the ecosystem."
              access="Business credit platform layer, entry resources, and qualified funnel positioning."
              features={[
                "Platform access",
                "Foundational business credit resources",
                "Private member environment",
                "Initial access path into the system",
              ]}
              cta="Enter Standard"
            />

            <TierCard
              tier="Premium"
              price="$997"
              cadence="year"
              subtitle="Strategy, context, and deeper financial positioning."
              access="A higher-context tier for users who want stronger insight and sharper capital-readiness framing."
              features={[
                "Everything in Standard",
                "Expanded strategic guidance",
                "Higher-context business credit insight",
                "Priority progression into premium funnel layers",
              ]}
              cta="Unlock Premium"
            />

            <TierCard
              tier="Diamond"
              price="$2,500"
              cadence="entry"
              subtitle="Direct access path for serious users seeking real proximity to Corey."
              access="The premium tier built around selectivity, founder access, and high-value positioning."
              features={[
                "Everything in Premium",
                "Direct access pathway to Corey",
                "Highest-trust placement",
                "Private opportunity orientation",
              ]}
              cta="Apply for Diamond"
              featured
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
                Funnel Layer
              </div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                The site is the front door. The real engine is qualification, capture, and controlled progression.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                This build establishes authority, transformation, and premium positioning.
                The next phase connects the experience to gated access, lead capture, and deeper founder interaction.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Continue to Funnel Build
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Add Real Brand Assets
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MobileLayout() {
  return (
    <div className="block lg:hidden">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <BrandWordmark size="xs" />
            </div>
            <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-200">
              Enter
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 pb-10 pt-4">
        <section>
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-sky-200">
            Capital • Credit • Access
          </div>

          <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-tight text-white">
            A private platform built around Corey’s judgment, leverage, and access.
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Structured business credit, capital positioning, and premium founder proximity for serious operators.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <button className="rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950">
              Unlock Access
            </button>
            <button className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-200">
              View Qualified Opportunities
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <CompactStat value="Private" label="Platform" />
            <CompactStat value="3" label="Tiers" />
            <CompactStat value="Direct" label="Access" />
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
          <div className="mb-4 overflow-hidden">
            <BrandWordmark size="sm" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Corey P. Smith
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Author • Credit Strategist • Capital Systems Architect
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Corey’s value is not just credit education. It is structured access, financial leverage,
              and the disciplined expansion of opportunity.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Business Credit
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Capital Access
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Wealth Leverage
            </span>
          </div>
        </section>

        <section className="mt-6">
          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Access Tiers
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Choose your level of proximity.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Standard opens the platform. Premium deepens the strategy. Diamond moves closest to Corey.
            </p>
          </div>

          <div className="space-y-4">
            <TierCard
              tier="Standard"
              price="$149"
              cadence="month"
              subtitle="Structured entry into the platform."
              access="Platform-first access and controlled onboarding into the ecosystem."
              features={[
                "Platform access",
                "Foundational resources",
                "Private member environment",
                "Clear starting point",
              ]}
              cta="Enter Standard"
            />

            <TierCard
              tier="Premium"
              price="$997"
              cadence="year"
              subtitle="Higher-context strategy and financial positioning."
              access="Built for users ready for stronger insight and deeper progression."
              features={[
                "Everything in Standard",
                "Expanded strategic guidance",
                "Stronger capital-readiness framing",
                "Premium access path",
              ]}
              cta="Unlock Premium"
            />

            <TierCard
              tier="Diamond"
              price="$2,500"
              cadence="entry"
              subtitle="Direct access path for serious, qualified users."
              access="The premium tier for people seeking Corey’s closest proximity."
              features={[
                "Everything in Premium",
                "Direct access pathway to Corey",
                "Highest-trust positioning",
                "Private opportunity orientation",
              ]}
              cta="Apply for Diamond"
              featured
            />
          </div>
        </section>

        <section className="mt-6">
          <div className="space-y-3">
            <ExpandableSection
              title="Why trust Corey"
              subtitle="Tap for the authority frame"
              defaultOpen
            >
              <div className="space-y-2 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                  He is positioned as judgment and structured access, not entertainment.
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                  His differentiator is not repair alone, but expansion and leverage.
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                  The platform communicates financial seriousness, selectivity, and capital optionality.
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="What changes with access"
              subtitle="Tap for transformation"
            >
              <div className="space-y-2 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                  Stronger approvals across major financial networks and lender environments.
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                  Better asset mobility, travel flexibility, and reduced dependence on immediate cash.
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                  Greater optionality, lower friction, and more confident decision-making.
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="Why the tiers matter"
              subtitle="Tap for the monetization logic"
            >
              <div className="grid grid-cols-2 gap-3">
                <CompactStat value="Standard" label="Platform entry" />
                <CompactStat value="Premium" label="Strategy depth" />
                <CompactStat value="Diamond" label="Direct Corey access" />
                <CompactStat value="High-end" label="Authority tone" />
              </div>
            </ExpandableSection>
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Next Step
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Enter the ecosystem.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Choose the right access tier, move through the platform, and step into a more serious capital conversation.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950">
                Unlock Access
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                Enter the Platform
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_22%)]" />
      <div className="relative">
        <DesktopLayout />
        <MobileLayout />
      </div>
    </div>
  );
}
