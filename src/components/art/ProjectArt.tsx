import type { ArtKind } from "@/data/resume";

/* Original illustrations for each project. Replace with real screenshots any time:
   put an image in /public/projects/ and swap the <ProjectArt> for an <Image>. */

function CncArt() {
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration of a CNC machine inside a VR training scene, with a controller pointing at its control panel">
      <defs>
        <pattern id="cnc-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" className="s-line" fill="none" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="480" height="340" fill="url(#cnc-grid)" />
      {/* floor */}
      <path d="M0 290 L480 290" className="s-line" strokeWidth="2" />
      {/* machine body */}
      <rect x="120" y="70" width="230" height="220" rx="6" className="f-surface s-line" strokeWidth="2" />
      <rect x="138" y="88" width="150" height="150" rx="3" className="f-bg s-line" strokeWidth="2" />
      {/* spindle head */}
      <rect x="196" y="96" width="34" height="58" rx="3" className="f-muted" />
      <g className="scan">
        <rect x="200" y="154" width="26" height="10" className="f-fg" />
        <g className="spin">
          <rect x="209" y="164" width="8" height="26" className="f-accent" />
        </g>
      </g>
      {/* workpiece + bed */}
      <rect x="172" y="206" width="82" height="16" className="f-accent-soft s-accent" strokeWidth="2" />
      <rect x="150" y="222" width="126" height="10" className="f-muted" />
      {/* control panel */}
      <rect x="298" y="96" width="40" height="120" rx="3" className="f-bg s-line" strokeWidth="2" />
      <circle cx="318" cy="114" r="6" className="f-accent blink" />
      <circle cx="318" cy="136" r="6" className="f-cool" />
      <rect x="306" y="154" width="24" height="6" rx="2" className="f-muted" />
      <rect x="306" y="166" width="24" height="6" rx="2" className="f-muted" />
      <circle cx="318" cy="196" r="10" className="f-accent-soft s-accent" strokeWidth="2" />
      {/* controller ray from the trainee */}
      <path d="M440 320 L325 196" className="s-accent ray" strokeWidth="2" strokeDasharray="6 6" />
      <g className="bob">
        <rect x="420" y="296" width="34" height="22" rx="8" transform="rotate(-42 437 307)" className="f-fg" />
      </g>
      {/* instructor panel */}
      <g className="bob-2">
        <rect x="24" y="40" width="150" height="62" rx="4" className="f-surface s-accent" strokeWidth="1.5" />
        <rect x="36" y="54" width="54" height="6" rx="2" className="f-accent" />
        <rect x="36" y="68" width="122" height="5" rx="2" className="f-muted" />
        <rect x="36" y="80" width="94" height="5" rx="2" className="f-muted" />
      </g>
      <text x="24" y="124" className="t-mono">VIRTUAL INSTRUCTOR</text>
    </svg>
  );
}

function RacingArt() {
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration of a race car on a track, seen from behind, with AI rivals ahead">
      {/* horizon */}
      <path d="M0 120 L480 120" className="s-line" strokeWidth="2" />
      <path d="M0 120 L70 96 L130 112 L200 84 L270 110 L340 90 L410 108 L480 94 L480 120 Z" className="f-surface" />
      {/* road */}
      <path d="M210 120 L270 120 L460 340 L20 340 Z" className="f-surface s-line" strokeWidth="2" />
      <path d="M240 122 L240 340" className="s-accent dash-move" strokeWidth="5" strokeDasharray="22 18" />
      <path d="M212 122 L28 340 M268 122 L452 340" className="s-muted" strokeWidth="3" />
      {/* kerbs */}
      <path d="M205 126 L10 340" className="s-accent dash-move" strokeWidth="8" strokeDasharray="10 10" opacity="0.6" />
      <path d="M275 126 L470 340" className="s-accent dash-move" strokeWidth="8" strokeDasharray="10 10" opacity="0.6" />
      {/* AI rivals ahead */}
      <g className="sway">
        <rect x="223" y="140" width="18" height="10" rx="2" className="f-cool" />
      </g>
      <g className="sway" style={{ animationDelay: ".8s" }}>
        <rect x="248" y="156" width="24" height="13" rx="2" className="f-muted" />
      </g>
      {/* player car */}
      <g className="sway">
        <rect x="186" y="244" width="108" height="46" rx="8" className="f-accent" />
        <rect x="204" y="226" width="72" height="26" rx="6" className="f-accent" />
        <rect x="212" y="232" width="56" height="14" rx="3" className="f-bg" />
        <rect x="178" y="236" width="124" height="8" rx="2" className="f-fg" />
        <rect x="174" y="276" width="26" height="30" rx="5" className="f-fg" />
        <rect x="280" y="276" width="26" height="30" rx="5" className="f-fg" />
        <rect x="200" y="270" width="18" height="6" rx="2" className="f-bg blink" />
        <rect x="262" y="270" width="18" height="6" rx="2" className="f-bg blink" />
      </g>
      {/* HUD */}
      <text x="22" y="40" className="t-display">P2 / 4</text>
      <text x="22" y="60" className="t-mono">LAP 2/3 · AI WAYPOINTS ON</text>
      <g transform="translate(410 56)">
        <circle r="34" className="f-surface s-line" strokeWidth="2" />
        <g className="spin-slow">
          <path d="M0 0 L0 -26" className="s-accent" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle r="4" className="f-accent" />
      </g>
    </svg>
  );
}

function CardsArt() {
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration of poker cards and chips beside a Ludo board corner and a dice">
      {/* table felt ellipse */}
      <ellipse cx="200" cy="230" rx="230" ry="120" className="f-surface s-line" strokeWidth="2" />
      {/* ludo board corner */}
      <g transform="translate(300 34)">
        <rect width="150" height="150" rx="6" className="f-surface s-line" strokeWidth="2" />
        <rect x="12" y="12" width="60" height="60" rx="4" className="f-accent-soft s-accent" strokeWidth="2" />
        <rect x="78" y="78" width="60" height="60" rx="4" className="f-cool-soft s-cool" strokeWidth="2" />
        <circle cx="32" cy="32" r="7" className="f-accent" />
        <circle cx="52" cy="52" r="7" className="f-accent" />
        <circle cx="98" cy="98" r="7" className="f-cool" />
        <circle cx="118" cy="118" r="7" className="f-cool" />
        <path d="M78 12 H138 V72 H78 Z M12 78 H72 V138 H12 Z" className="s-line" fill="none" strokeWidth="2" />
      </g>
      {/* dice */}
      <g className="bob-3">
        <rect x="402" y="214" width="46" height="46" rx="8" className="f-fg" transform="rotate(14 425 237)" />
        <g transform="rotate(14 425 237)">
          <circle cx="414" cy="226" r="4" className="f-bg" />
          <circle cx="425" cy="237" r="4" className="f-bg" />
          <circle cx="436" cy="248" r="4" className="f-bg" />
        </g>
      </g>
      {/* fanned cards */}
      <g transform="translate(150 150)">
        <g className="bob">
          <g transform="rotate(-18)">
            <rect x="-40" y="-60" width="80" height="112" rx="8" className="f-fg" />
            <text x="-30" y="-36" className="t-card">A</text>
            <path d="M0 -6 l12 16 -12 16 -12 -16 Z" className="f-accent" />
          </g>
        </g>
        <g className="bob-2">
          <g transform="translate(46 -6) rotate(6)">
            <rect x="-40" y="-60" width="80" height="112" rx="8" className="f-fg" />
            <text x="-30" y="-36" className="t-card">K</text>
            <path d="M0 -10 c10 -14 26 0 0 26 c-26 -26 -10 -40 0 -26 Z" className="f-accent" />
          </g>
        </g>
      </g>
      {/* chips */}
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={`a${i}`} cx="70" cy={268 - i * 9} rx="30" ry="10" className={i === 3 ? "f-accent" : "f-accent-soft s-accent"} strokeWidth="2" />
      ))}
      {[0, 1, 2].map((i) => (
        <ellipse key={`b${i}`} cx="132" cy={282 - i * 9} rx="30" ry="10" className={i === 2 ? "f-cool" : "f-cool-soft s-cool"} strokeWidth="2" />
      ))}
      <text x="22" y="40" className="t-mono">ONLINE · 4 PLAYERS · AI: HARD</text>
    </svg>
  );
}

export default function ProjectArt({ kind }: { kind: ArtKind }) {
  if (kind === "cnc") return <CncArt />;
  if (kind === "racing") return <RacingArt />;
  return <CardsArt />;
}
