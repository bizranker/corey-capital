import React from "react";

const tiers = [
  {
    label: "FOUNDATION LAYER",
    title: "Standard",
    subtitle: "Entry architecture for qualified operators.",
    emphasis: "Initial access, profile positioning, and pathway visibility.",
    bullets: [
      "Structured platform access",
      "Qualification intake",
      "Core credit and capital orientation",
      "Foundational progression layer",
    ],
    cta: "Enter Foundation Layer",
    accent: "tier-foundation",
  },
  {
    label: "STRATEGIC EXPANSION",
    title: "Premium",
    subtitle: "Strategic depth for expansion-minded operators.",
    emphasis: "Greater strategic context, deeper interpretation, and expanded positioning guidance.",
    bullets: [
      "Strategic expansion guidance",
      "Advanced capital context",
      "Deeper qualification review",
      "Progression toward higher-touch access",
    ],
    cta: "Unlock Strategic Expansion",
    accent: "tier-premium",
  },
  {
    label: "DIRECT PROXIMITY",
    title: "Diamond",
    subtitle: "High-touch access for serious deployment readiness.",
    emphasis: "Reserved for operators seeking direct proximity to Corey’s methodology and judgment.",
    bullets: [
      "Highest priority review",
      "Direct proximity tier",
      "High-touch access pathway",
      "Built for serious deployment readiness",
    ],
    cta: "Request Direct Proximity",
    accent: "tier-diamond",
  },
];

const capitalSignals = [
  {
    title: "Capital Deployment",
    value: "Structured",
    detail: "Positioned for disciplined, scalable use of leverage.",
  },
  {
    title: "Access Logic",
    value: "Qualified",
    detail: "Built for serious operators, not casual traffic.",
  },
  {
    title: "Entity Readiness",
    value: "Measured",
    detail: "Signals align to strength, profile, and timing.",
  },
];

const corePrinciples = [
  "Access is structured, not assumed.",
  "Progression is controlled, not improvised.",
  "Capital pathways scale with readiness.",
];

const progressionSteps = [
  {
    step: "01",
    title: "Enter Profile",
    detail: "Provide your objective and operating stage.",
  },
  {
    step: "02",
    title: "Qualification Review",
    detail: "Signal strength, readiness, and fit are assessed.",
  },
  {
    step: "03",
    title: "Tier Alignment",
    detail: "The right access layer is matched to your position.",
  },
  {
    step: "04",
    title: "Access Expansion",
    detail: "Progression opens deeper strategic pathways.",
  },
];

function BuildingMark() {
  return (
    <svg viewBox="0 0 64 64" className="brand-svg" aria-hidden="true">
      <rect x="10" y="18" width="18" height="30" rx="3" />
      <rect x="36" y="10" width="18" height="38" rx="3" />
      <path d="M16 24h6M16 30h6M16 36h6M16 42h6" />
      <path d="M42 18h6M42 24h6M42 30h6M42 36h6M42 42h6" />
      <path d="M8 50h48" />
    </svg>
  );
}

function SectionIcon({ type }) {
  if (type === "authority") {
    return (
      <svg viewBox="0 0 24 24" className="section-icon" aria-hidden="true">
        <path d="M4 17h16" />
        <path d="M6 17V9l6-4 6 4v8" />
        <path d="M9 17v-4h6v4" />
      </svg>
    );
  }

  if (type === "architecture") {
    return (
      <svg viewBox="0 0 24 24" className="section-icon" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="M17 8l4 4-4 4" />
      </svg>
    );
  }

  if (type === "pathways") {
    return (
      <svg viewBox="0 0 24 24" className="section-icon" aria-hidden="true">
        <path d="M4 18h16" />
        <path d="M6 18v-5" />
        <path d="M12 18V9" />
        <path d="M18 18V5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="section-icon" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="cc-shell">
      <style>{`
        :root {
          --panel: rgba(9, 18, 38, 0.82);
          --panel-2: rgba(12, 24, 48, 0.9);
          --panel-alt: rgba(11, 21, 42, 0.86);
          --line: rgba(255,255,255,0.09);
          --line-strong: rgba(255,255,255,0.16);
          --text: #edf2ff;
          --muted: rgba(237,242,255,0.70);
          --soft: rgba(237,242,255,0.52);
          --teal: #18c7a1;
          --blue: #5b8cff;
          --gold: #d7a64c;
          --shadow: 0 24px 80px rgba(0,0,0,0.35);
        }

        * { box-sizing: border-box; }

        html, body, #root {
          margin: 0;
          min-height: 100%;
          background:
            radial-gradient(circle at top right, rgba(24,199,161,0.10), transparent 30%),
            radial-gradient(circle at 15% 20%, rgba(91,140,255,0.12), transparent 32%),
            linear-gradient(180deg, #04101d 0%, #071426 45%, #08111e 100%);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        a { color: inherit; text-decoration: none; }

        .cc-shell {
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .cc-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.24;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent 95%);
        }

        .cc-orbits {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .cc-orbit {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 999px;
        }

        .orbit-a {
          width: 520px;
          height: 520px;
          top: -120px;
          right: -120px;
        }

        .orbit-b {
          width: 380px;
          height: 380px;
          left: -90px;
          top: 280px;
        }

        .orbit-c {
          width: 240px;
          height: 240px;
          right: 16%;
          top: 52%;
        }

        .cc-wrap {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
          padding: 34px 0 100px;
        }

        .cc-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 18px 22px;
          margin-bottom: 34px;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: rgba(7, 15, 30, 0.58);
          backdrop-filter: blur(18px);
          box-shadow: var(--shadow);
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .brand-mark {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.12);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)),
            rgba(12, 24, 48, 0.8);
          box-shadow: 0 0 24px rgba(91,140,255,0.10);
          flex: 0 0 auto;
        }

        .brand-svg {
          width: 26px;
          height: 26px;
          stroke: rgba(255,255,255,0.92);
          stroke-width: 1.7;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .brand-text {
          min-width: 0;
        }

        .brand-kicker {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 5px;
        }

        .brand-title {
          font-size: 22px;
          font-weight: 650;
          line-height: 1.05;
        }

        .brand-subtitle {
          font-size: 11px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: var(--soft);
          margin-top: 6px;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .micro-pill {
          border: 1px solid var(--line);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 12px;
          color: var(--muted);
          background: rgba(255,255,255,0.02);
          white-space: nowrap;
        }

        .divider-subtle {
          height: 1px;
          width: 100%;
          margin: 42px 0;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.10),
            transparent
          );
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 14px;
        }

        .section-icon {
          width: 14px;
          height: 14px;
          stroke: rgba(237,242,255,0.58);
          stroke-width: 1.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex: 0 0 auto;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.92fr;
          gap: 28px;
          align-items: stretch;
        }

        .hero-left,
        .hero-right,
        .panel,
        .signal-card,
        .tier-card,
        .principle-card {
          border: 1px solid var(--line);
          background: var(--panel);
          backdrop-filter: blur(16px);
          box-shadow: var(--shadow);
        }

        .hero-left,
        .hero-right {
          border-radius: 30px;
          padding: 34px;
          position: relative;
          overflow: hidden;
        }

        .hero-left::before,
        .hero-right::before,
        .panel::before,
        .signal-card::before,
        .tier-card::before,
        .principle-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.04),
            rgba(255,255,255,0.00) 24%,
            rgba(255,255,255,0.00)
          );
        }

        .hero-left {
          background:
            radial-gradient(circle at 82% 18%, rgba(24,199,161,0.10), transparent 26%),
            radial-gradient(circle at 24% 0%, rgba(91,140,255,0.14), transparent 28%),
            var(--panel);
        }

        .hero-right {
          background:
            radial-gradient(circle at 84% 12%, rgba(24,199,161,0.10), transparent 24%),
            radial-gradient(circle at 12% 64%, rgba(91,140,255,0.10), transparent 26%),
            var(--panel-2);
        }

        .hero-title {
          margin: 0;
          max-width: 11ch;
          font-size: clamp(3.2rem, 8vw, 5.5rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 680;
        }

        .hero-title .glow-key {
          color: #f7fbff;
          text-shadow: 0 0 16px rgba(91,140,255,0.12);
        }

        .hero-copy {
          margin-top: 22px;
          max-width: 660px;
          font-size: 18px;
          line-height: 1.82;
          color: var(--muted);
        }

        .hero-micro-trust {
          margin-top: 16px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--soft);
        }

        .founder-card {
          margin-top: 28px;
          padding: 24px;
          border-radius: 24px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.025);
        }

        .founder-name {
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 12px;
        }

        .founder-title {
          margin: 0 0 14px;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          line-height: 1.22;
          font-weight: 620;
        }

        .founder-copy {
          margin: 0;
          font-size: 15px;
          line-height: 1.85;
          color: var(--muted);
          max-width: 58ch;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .tag {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--line);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          background: rgba(255,255,255,0.025);
        }

        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 18px;
          border-radius: 16px;
          border: 1px solid var(--line-strong);
          font-weight: 600;
          font-size: 15px;
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(180deg, rgba(24,199,161,1), rgba(17,182,146,1));
          color: #061119;
          border-color: rgba(24,199,161,0.45);
          box-shadow: 0 0 22px rgba(24,199,161,0.18);
        }

        .btn-secondary {
          background: rgba(91,140,255,0.06);
          color: var(--text);
          border-color: rgba(91,140,255,0.18);
          box-shadow: 0 0 14px rgba(91,140,255,0.05);
        }

        .btn-tertiary {
          background: rgba(255,255,255,0.02);
          color: var(--text);
        }

        .entry-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 12px;
        }

        .entry-title {
          font-size: clamp(1.65rem, 4vw, 2.2rem);
          line-height: 1.1;
          font-weight: 640;
          margin: 0 0 12px;
        }

        .entry-copy {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
          margin: 0 0 12px;
        }

        .trust-line {
          color: var(--soft);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 18px;
        }

        .preview-stack {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .preview-item {
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 16px 16px 15px;
          background: rgba(255,255,255,0.025);
        }

        .preview-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .preview-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--soft);
        }

        .preview-value {
          font-size: 14px;
          font-weight: 650;
          color: rgba(237,242,255,0.92);
        }

        .preview-copy {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
          color: var(--muted);
        }

        .entry-footer {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: var(--soft);
          font-size: 13px;
          line-height: 1.7;
        }

        .signals {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .signal-card {
          position: relative;
          border-radius: 24px;
          padding: 24px;
          min-height: 194px;
          background: var(--panel-alt);
        }

        .signal-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .signal-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 10px;
        }

        .signal-title {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 580;
        }

        .signal-value {
          font-size: 28px;
          line-height: 1;
          font-weight: 680;
          text-align: right;
          white-space: nowrap;
        }

        .signal-detail {
          margin-top: 22px;
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 26ch;
        }

        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 40px;
          margin-top: 18px;
        }

        .mini-chart span {
          width: 8px;
          border-radius: 999px 999px 2px 2px;
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.18));
          opacity: 0.78;
        }

        .mini-chart span:nth-child(1) { height: 12px; }
        .mini-chart span:nth-child(2) { height: 20px; }
        .mini-chart span:nth-child(3) { height: 28px; }
        .mini-chart span:nth-child(4) { height: 18px; }
        .mini-chart span:nth-child(5) { height: 34px; }

        .panel {
          position: relative;
          border-radius: 28px;
          padding: 30px;
          margin-top: 10px;
        }

        .panel.alt {
          background: var(--panel-alt);
        }

        .access-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 28px;
          align-items: start;
        }

        .panel-title {
          margin: 0 0 14px;
          font-size: clamp(1.55rem, 3vw, 2.15rem);
          line-height: 1.14;
          font-weight: 620;
        }

        .panel-copy {
          margin: 0;
          font-size: 15px;
          line-height: 1.85;
          color: var(--muted);
          max-width: 62ch;
        }

        .capital-line {
          margin-top: 24px;
          padding-left: 16px;
          border-left: 1px solid rgba(215,166,76,0.35);
          color: rgba(237,242,255,0.82);
          font-size: 15px;
          line-height: 1.8;
          font-style: italic;
        }

        .progress-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          align-items: stretch;
          margin-top: 12px;
        }

        .progress-step {
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 18px 16px;
          background: rgba(255,255,255,0.025);
          position: relative;
        }

        .progress-step::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -7px;
          width: 14px;
          height: 1px;
          background: rgba(255,255,255,0.16);
          transform: translateY(-50%);
        }

        .progress-step:last-child::after {
          display: none;
        }

        .progress-number {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 10px;
        }

        .progress-title {
          margin: 0 0 8px;
          font-size: 1rem;
          font-weight: 620;
        }

        .progress-copy {
          margin: 0;
          font-size: 13px;
          line-height: 1.65;
          color: var(--muted);
        }

        .tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 18px;
        }

        .tier-card {
          position: relative;
          border-radius: 26px;
          padding: 24px;
          min-height: 360px;
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .tier-card:hover {
          transform: translateY(-2px);
        }

        .tier-foundation {
          box-shadow: 0 0 18px rgba(91,140,255,0.07);
        }

        .tier-premium {
          box-shadow: 0 0 24px rgba(215,166,76,0.09);
          border-color: rgba(215,166,76,0.18);
        }

        .tier-diamond {
          box-shadow: 0 0 28px rgba(24,199,161,0.12);
          border-color: rgba(24,199,161,0.22);
        }

        .tier-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 14px;
        }

        .tier-title {
          margin: 0 0 8px;
          font-size: 1.7rem;
          line-height: 1.05;
          font-weight: 650;
        }

        .tier-subtitle {
          margin: 0 0 16px;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .tier-emphasis {
          margin: 0 0 18px;
          color: rgba(237,242,255,0.84);
          line-height: 1.75;
          font-size: 14px;
        }

        .tier-list {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: grid;
          gap: 11px;
        }

        .tier-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: var(--muted);
          line-height: 1.55;
          font-size: 14px;
        }

        .tier-list li::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 8px;
          flex: 0 0 auto;
          background: rgba(255,255,255,0.40);
        }

        .tier-premium .tier-list li::before {
          background: rgba(215,166,76,0.72);
        }

        .tier-diamond .tier-list li::before {
          background: rgba(24,199,161,0.75);
        }

        .tier-cta {
          width: 100%;
        }

        .principle-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 18px;
        }

        .principle-card {
          position: relative;
          border-radius: 22px;
          padding: 22px;
          min-height: 170px;
          background: var(--panel-alt);
        }

        .principle-index {
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--soft);
          margin-bottom: 20px;
        }

        .principle-text {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.6;
          color: rgba(237,242,255,0.90);
          max-width: 26ch;
        }

        .funnel-frame {
          margin-top: 30px;
          border-radius: 24px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.02);
          padding: 24px;
          text-align: center;
        }

        .funnel-frame p {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .footer-note {
          text-align: center;
          margin-top: 38px;
          color: var(--soft);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        @media (max-width: 1080px) {
          .hero,
          .access-grid,
          .signals,
          .tier-grid,
          .principle-grid,
          .progress-strip {
            grid-template-columns: 1fr;
          }

          .hero-title {
            max-width: none;
          }

          .signal-detail,
          .principle-text {
            max-width: none;
          }

          .progress-step::after {
            display: none;
          }
        }

        @media (max-width: 720px) {
          .cc-wrap {
            width: min(100% - 22px, 1240px);
            padding-top: 18px;
            padding-bottom: 54px;
          }

          .cc-topbar,
          .hero-left,
          .hero-right,
          .panel,
          .signal-card,
          .tier-card,
          .principle-card {
            border-radius: 22px;
          }

          .cc-topbar,
          .hero-left,
          .hero-right,
          .panel {
            padding: 22px;
          }

          .hero-title {
            font-size: clamp(2.45rem, 14vw, 3.9rem);
          }

          .hero-copy,
          .founder-copy,
          .panel-copy,
          .entry-copy,
          .signal-detail,
          .tier-subtitle,
          .tier-emphasis {
            font-size: 15px;
            line-height: 1.78;
          }

          .cta-row {
            flex-direction: column;
          }

          .btn,
          .tier-cta {
            width: 100%;
          }

          .divider-subtle {
            margin: 32px 0;
          }
        }
      `}</style>

      <div className="cc-grid" />
      <div className="cc-orbits">
        <div className="cc-orbit orbit-a" />
        <div className="cc-orbit orbit-b" />
        <div className="cc-orbit orbit-c" />
      </div>

      <main className="cc-wrap">
        <section className="cc-topbar">
          <div className="brand-lockup">
            <div className="brand-mark">
              <BuildingMark />
            </div>
            <div className="brand-text">
              <div className="brand-kicker">Private Capital Interface</div>
              <div className="brand-title">Corey Capital</div>
              <div className="brand-subtitle">Entrepreneurs League</div>
            </div>
          </div>

          <div className="topbar-right">
            <div className="micro-pill">Institutional access model</div>
            <div className="micro-pill">Qualification-first entry</div>
            <div className="micro-pill">Private progression system</div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-left">
            <div className="section-label">
              <SectionIcon type="authority" />
              <span>Founder Authority</span>
            </div>

            <h1 className="hero-title">
              Structured access
              <br />
              to business credit,
              <br />
              <span className="glow-key">capital deployment,</span>
              <br />
              and controlled
              <br />
              progression.
            </h1>

            <p className="hero-copy">
              Corey Capital is a controlled entry layer for serious operators
              seeking structured credit, capital positioning, and disciplined
              progression.
            </p>

            <div className="hero-micro-trust">
              Structured for serious operators
            </div>

            <div className="divider-subtle" style={{ margin: "22px 0 0" }} />

            <div className="founder-card">
              <div className="founder-name">Corey P. Smith</div>
              <h2 className="founder-title">
                Author • Credit Strategist • Capital Systems Architect
              </h2>
              <p className="founder-copy">
                Corey is known for translating credit literacy into usable
                leverage. His body of work extends beyond repair and into
                structured acquisition, business credit, financial positioning,
                and disciplined expansion of opportunity.
              </p>

              <div className="tag-row">
                <span className="tag">Business Credit Systems</span>
                <span className="tag">Capital Access</span>
                <span className="tag">Financial Structuring</span>
                <span className="tag">Wealth Leverage</span>
              </div>
            </div>

            <div className="cta-row">
              <a href="#entry-preview" className="btn btn-primary">Begin Qualification</a>
              <a href="#capital-pathways" className="btn btn-secondary">View Capital Pathways</a>
              <a href="#tier-architecture" className="btn btn-tertiary">Review Access Tiers</a>
            </div>
          </div>

          <div className="hero-right" id="entry-preview">
            <div className="entry-label">
              <SectionIcon type="architecture" />
              <span>Entry Preview</span>
            </div>

            <h2 className="entry-title">A guided starting point for serious operators.</h2>
            <p className="entry-copy">
              The first step is not complexity. It is orientation, qualification,
              and a clear next move into the right access layer.
            </p>
            <div className="trust-line">
              Built on proven credit and capital frameworks
            </div>

            <div className="preview-stack">
              <div className="preview-item">
                <div className="preview-item-top">
                  <span className="preview-label">Access Layer</span>
                  <span className="preview-value">Entry</span>
                </div>
                <p className="preview-copy">
                  Begin with a structured intake designed to reduce friction and
                  establish fit.
                </p>
              </div>

              <div className="preview-item">
                <div className="preview-item-top">
                  <span className="preview-label">Profile Signal</span>
                  <span className="preview-value">Pending Review</span>
                </div>
                <p className="preview-copy">
                  Qualification is shaped by readiness, objective, and the
                  strength of the operating profile.
                </p>
              </div>

              <div className="preview-item">
                <div className="preview-item-top">
                  <span className="preview-label">Recommended Path</span>
                  <span className="preview-value">Tier Alignment</span>
                </div>
                <p className="preview-copy">
                  Users are guided toward the most appropriate entry point, not
                  overwhelmed with every possibility at once.
                </p>
              </div>
            </div>

            <div className="entry-footer">
              This interface is designed to feel safe, selective, and intuitive
              while guiding the right users deeper into Corey’s ecosystem.
            </div>
          </div>
        </section>

        <div className="divider-subtle" />

        <section className="signals">
          {capitalSignals.map((signal) => (
            <article className="signal-card" key={signal.title}>
              <div className="signal-top">
                <div>
                  <div className="signal-label">{signal.title}</div>
                  <h3 className="signal-title">{signal.title}</h3>
                </div>
                <div className="signal-value">{signal.value}</div>
              </div>

              <div className="mini-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <p className="signal-detail">{signal.detail}</p>
            </article>
          ))}
        </section>

        <div className="divider-subtle" />

        <section className="panel alt" id="capital-pathways">
          <div className="section-label">
            <SectionIcon type="architecture" />
            <span>Access Architecture</span>
          </div>

          <div className="access-grid">
            <div>
              <h2 className="panel-title">
                A controlled system for qualification, progression, and capital
                alignment.
              </h2>
              <p className="panel-copy">
                This interface is designed to feel less like a page and more
                like a governed financial environment. Each step is meant to
                create confidence through structure, measured visibility, and
                intuitive forward movement.
              </p>

              <p className="capital-line">
                Capital access pathways scale based on entity strength, credit
                profile, and deployment readiness.
              </p>
            </div>

            <div className="progress-strip">
              {progressionSteps.map((item) => (
                <div className="progress-step" key={item.step}>
                  <div className="progress-number">Step {item.step}</div>
                  <h3 className="progress-title">{item.title}</h3>
                  <p className="progress-copy">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-subtle" />

        <section className="panel" id="tier-architecture">
          <div className="section-label">
            <SectionIcon type="pathways" />
            <span>Capital Pathways</span>
          </div>

          <h2 className="panel-title">
            Tier progression is built as a governed access structure, not a
            pricing table.
          </h2>
          <p className="panel-copy">
            Each level reflects greater strategic depth, stronger signal, and
            increased proximity to Corey’s methodology. The progression is meant
            to feel earned, controlled, and commercially intuitive.
          </p>

          <div className="tier-grid">
            {tiers.map((tier) => (
              <article className={`tier-card ${tier.accent}`} key={tier.title}>
                <div className="tier-label">{tier.label}</div>
                <h3 className="tier-title">{tier.title}</h3>
                <p className="tier-subtitle">{tier.subtitle}</p>
                <p className="tier-emphasis">{tier.emphasis}</p>

                <ul className="tier-list">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <a href="#entry-preview" className={`btn ${tier.accent === "tier-diamond" ? "btn-primary" : "btn-secondary"} tier-cta`}>
                  {tier.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="divider-subtle" />

        <section className="panel alt">
          <div className="section-label">
            <SectionIcon type="authority" />
            <span>Core Principle</span>
          </div>

          <h2 className="panel-title">
            Quiet authority comes from structure, not noise.
          </h2>
          <p className="panel-copy">
            The experience should communicate that access is earned, progression
            is controlled, and capital pathways are governed by readiness rather
            than hype.
          </p>

          <div className="principle-grid">
            {corePrinciples.map((text, idx) => (
              <article className="principle-card" key={text}>
                <div className="principle-index">Principle 0{idx + 1}</div>
                <p className="principle-text">{text}</p>
              </article>
            ))}
          </div>

          <div className="funnel-frame">
            <p>
              This interface is the front door. The underlying system manages
              qualification, capture, and structured progression into capital
              pathways.
            </p>
          </div>
        </section>

        <div className="footer-note">
          Corey Capital • Entrepreneurs League • Controlled Access Environment
        </div>
      </main>
    </div>
  );
}
