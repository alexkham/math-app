"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ─── Math helpers ─────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;

const polar = (cx, cy, r, angleDeg) => ({
  x: cx + r * Math.cos(toRad(angleDeg)),
  y: cy - r * Math.sin(toRad(angleDeg)),
});

const ccwDelta = (from, to) => ((to - from) % 360 + 360) % 360;

const ff = (n) => n.toFixed(3);

function arcPath(cx, cy, r, from, to) {
  const delta = ccwDelta(from, to);
  const s = polar(cx, cy, r, from);
  const e = polar(cx, cy, r, to);
  const la = delta > 180 ? 1 : 0;
  return `M ${ff(s.x)} ${ff(s.y)} A ${r} ${r} 0 ${la} 0 ${ff(e.x)} ${ff(e.y)}`;
}

function sectorPath(cx, cy, r, from, to) {
  return `${arcPath(cx, cy, r, from, to)} L ${cx} ${cy} Z`;
}

function boxPath(cx, cy, a1, a2, sz = 13) {
  const p1 = polar(cx, cy, sz, a1);
  const p2 = polar(cx, cy, sz, a2);
  const c  = { x: p1.x + p2.x - cx, y: p1.y + p2.y - cy };
  return `M ${ff(p1.x)} ${ff(p1.y)} L ${ff(c.x)} ${ff(c.y)} L ${ff(p2.x)} ${ff(p2.y)}`;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SZ      = 320;
const VX      = SZ / 2;
const VY      = SZ / 2;
const ARM     = 118;
const ARC_A   = 52;   // alpha arc radius
const ARC_B   = 76;   // beta arc radius (larger, so labels don&apos;t overlap)

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const BLUE_BG  = "rgba(37,99,235,0.11)";
const AMBER_BG = "rgba(217,119,6,0.11)";

const MODES = {
  complementary: {
    label:  "Complementary",
    limit:  90,
    sum:    "90°",
    desc:   "Two angles are complementary when they sum to 90°. Together they form a right angle.",
    snapMid: 45,
  },
  supplementary: {
    label:  "Supplementary",
    limit:  180,
    sum:    "180°",
    desc:   "Two angles are supplementary when they sum to 180°. Together they form a straight line.",
    snapMid: 90,
  },
};

// ─── Snap helper ──────────────────────────────────────────────────────────────

function snapAngle(raw, limit) {
  const mid = limit / 2;
  const targets = [0, mid, limit];
  for (const t of targets) {
    if (Math.abs(raw - t) <= 4) return t;
  }
  return Math.round(Math.min(Math.max(raw, 0), limit));
}

function angleFromPointer(px, py, limit) {
  let deg = Math.atan2(-py, px) * (180 / Math.PI);
  if (deg < 0) deg += 360;
  return snapAngle(deg, limit);
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ alpha, beta, limit, dark, onPointerDown }) {
  const isComp    = limit === 90;
  const arm2Angle = alpha;
  const arm3Angle = limit;

  const arm1End  = polar(VX, VY, ARM, 0);
  const arm2End  = polar(VX, VY, ARM, arm2Angle);
  const arm3End  = polar(VX, VY, ARM, arm3Angle);

  // label positions — midpoint of each sector
  const alphaLabelPos = polar(VX, VY, ARC_A + 22, alpha / 2);
  const betaLabelPos  = polar(VX, VY, ARC_B + 20, alpha + beta / 2);

  const isAlphaRight = Math.abs(alpha - 90) < 0.5;
  const isBetaRight  = Math.abs(beta  - 90) < 0.5;

  const subColor = dark ? "#94a3b8" : "#64748b";
  const fs = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  return (
    <svg
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      onPointerDown={onPointerDown}
      style={{ display: "block", touchAction: "none", cursor: "crosshair" }}
    >
      {/* ── Sector fills ── */}
      {alpha > 0 && (
        <path d={sectorPath(VX, VY, ARC_B, 0, arm2Angle)} fill={BLUE_BG}  stroke="none" />
      )}
      {beta > 0 && (
        <path d={sectorPath(VX, VY, ARC_B, arm2Angle, arm3Angle)} fill={AMBER_BG} stroke="none" />
      )}

      {/* ── Alpha arc or right-angle box ── */}
      {alpha > 0 && !isAlphaRight && (
        <path
          d={arcPath(VX, VY, ARC_A, 0, arm2Angle)}
          fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"
        />
      )}
      {isAlphaRight && (
        <path
          d={boxPath(VX, VY, 0, arm2Angle)}
          fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinejoin="miter"
        />
      )}

      {/* ── Beta arc or right-angle box ── */}
      {beta > 0 && !isBetaRight && (
        <path
          d={arcPath(VX, VY, ARC_B, arm2Angle, arm3Angle)}
          fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round"
        />
      )}
      {isBetaRight && (
        <path
          d={boxPath(VX, VY, arm2Angle, arm3Angle)}
          fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter"
        />
      )}

      {/* ── Supplementary mode: right-angle box at the total (straight line end) ── */}
      {!isComp && (
        <path
          d={boxPath(VX, VY, 0, 180, 13)}
          fill="none"
          stroke={subColor}
          strokeWidth={1.5}
          strokeLinejoin="miter"
          opacity={0.35}
        />
      )}

      {/* ── Fixed arms ── */}
      {/* Arm 1 — 0° */}
      <line
        x1={VX} y1={VY} x2={arm1End.x} y2={arm1End.y}
        stroke={subColor} strokeWidth={2.5} strokeLinecap="round"
      />
      {/* Arm 3 — limit (90° or 180°) */}
      {isComp ? (
        <line
          x1={VX} y1={VY} x2={arm3End.x} y2={arm3End.y}
          stroke={subColor} strokeWidth={2.5} strokeLinecap="round"
        />
      ) : (
        /* Supplementary: full straight line through vertex */
        <line
          x1={polar(VX, VY, ARM, 180).x} y1={VY}
          x2={arm1End.x} y2={arm1End.y}
          stroke={subColor} strokeWidth={2.5} strokeLinecap="round"
        />
      )}

      {/* ── Draggable arm (arm 2) ── */}
      <line
        x1={VX} y1={VY} x2={arm2End.x} y2={arm2End.y}
        stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Vertex dot ── */}
      <circle cx={VX} cy={VY} r={4.5} fill={BLUE} />

      {/* ── Arm endpoints ── */}
      <circle cx={arm1End.x} cy={arm1End.y} r={3} fill={subColor} opacity={0.5} />
      <circle cx={arm3End.x} cy={arm3End.y} r={3} fill={subColor} opacity={0.5} />
      <circle cx={arm2End.x} cy={arm2End.y} r={3} fill={BLUE}     opacity={0.5} />

      {/* ── Alpha label ── */}
      {alpha > 0 && (
        <text
          x={alphaLabelPos.x} y={alphaLabelPos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={13} fontWeight="700" fill={BLUE} style={fs}
        >
          {alpha}&deg;
        </text>
      )}

      {/* ── Beta label ── */}
      {beta > 0 && (
        <text
          x={betaLabelPos.x} y={betaLabelPos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={13} fontWeight="700" fill={AMBER} style={fs}
        >
          {beta}&deg;
        </text>
      )}

      {/* ── Greek labels on arms ── */}
      {(() => {
        const alphaTag = polar(VX, VY, ARM + 16, alpha / 2);
        const betaTag  = polar(VX, VY, ARM + 16, alpha + beta / 2);
        return (
          <>
            <text
              x={alphaTag.x} y={alphaTag.y}
              textAnchor="middle" dominantBaseline="central"
              fontSize={11} fill={BLUE} opacity={0.7} style={fs}
            >
              α
            </text>
            <text
              x={betaTag.x} y={betaTag.y}
              textAnchor="middle" dominantBaseline="central"
              fontSize={11} fill={AMBER} opacity={0.7} style={fs}
            >
              β
            </text>
          </>
        );
      })()}

      {/* ── Drag handle ── */}
      <g style={{ cursor: "grab" }}>
        <circle cx={arm2End.x} cy={arm2End.y} r={16} fill="transparent" />
        <circle
          cx={arm2End.x} cy={arm2End.y} r={8}
          fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2}
        />
      </g>
    </svg>
  );
}

// ─── Value card ───────────────────────────────────────────────────────────────

function ValueCard({ label, value, color, bg, dark }) {
  const surface = dark ? "#1e293b" : "#f8fafc";
  return (
    <div
      style={{
        flex:          "1 1 100px",
        background:    surface,
        borderRadius:  "12px",
        border:        `1.5px solid ${color}22`,
        padding:       "14px 16px",
        textAlign:     "center",
      }}
    >
      <div style={{ fontSize: "11px", fontWeight: "600", color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "6px" }}>
        {label}
      </div>
      <div style={{ fontSize: "38px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>
        {value}
      </div>
      <div style={{ fontSize: "12px", color, opacity: 0.6, marginTop: "3px" }}>degrees</div>
    </div>
  );
}

// ─── Equation display ─────────────────────────────────────────────────────────

function Equation({ alpha, beta, sum, dark }) {
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const fs = {
    fontFamily:  "system-ui, sans-serif",
    display:     "flex",
    alignItems:  "baseline",
    gap:         "6px",
    fontSize:    "18px",
    fontWeight:  "700",
    flexWrap:    "wrap",
    justifyContent: "center",
  };
  return (
    <div style={fs}>
      <span style={{ color: BLUE }}>{alpha}&deg;</span>
      <span style={{ color: textPri, opacity: 0.4 }}>+</span>
      <span style={{ color: AMBER }}>{beta}&deg;</span>
      <span style={{ color: textPri, opacity: 0.4 }}>=</span>
      <span style={{ color: textPri }}>{sum}</span>
    </div>
  );
}

// ─── Mode toggle ──────────────────────────────────────────────────────────────

function ModeToggle({ mode, onChange, border, surface, textSec }) {
  return (
    <div
      style={{
        display:      "flex",
        background:   surface,
        border:       `1.5px solid ${border}`,
        borderRadius: "10px",
        padding:      "3px",
        gap:          "3px",
      }}
    >
      {Object.entries(MODES).map(([key, m]) => {
        const active = mode === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            style={{
              flex:         1,
              padding:      "6px 14px",
              borderRadius: "7px",
              border:       "none",
              background:   active ? BLUE : "transparent",
              color:        active ? "#fff" : textSec,
              fontSize:     "12px",
              fontWeight:   active ? "700" : "500",
              fontFamily:   "system-ui, sans-serif",
              cursor:       "pointer",
              transition:   "all 0.15s",
              whiteSpace:   "nowrap",
            }}
          >
            {m.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function ComplementarySupplementaryWrapper() {
  const [mode,  setMode]  = useState("complementary");
  const [alpha, setAlpha] = useState(35);
  const [dark,  setDark]  = useState(false);

  const svgRef   = useRef(null);
  const dragging = useRef(false);

  const modeData = MODES[mode];
  const limit    = modeData.limit;
  const beta     = limit - alpha;

  // ── When mode changes, clamp alpha if needed ──
  const handleModeChange = useCallback((next) => {
    setMode(next);
    const nextLimit = MODES[next].limit;
    setAlpha((a) => Math.min(a, nextLimit));
  }, []);

  // ── Pointer handling ──────────────────────────────────────────────────────

  const getAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale - VX;
    const py    = (e.clientY - rect.top)  * scale - VY;
    return angleFromPointer(px, py, limit);
  }, [limit]);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    setAlpha(getAngle(e));
  }, [getAngle]);

  useEffect(() => {
    const onMove = (e) => { if (dragging.current) setAlpha(getAngle(e)); };
    const onUp   = ()  => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup",   onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup",   onUp);
    };
  }, [getAngle]);

  // ── Theme ─────────────────────────────────────────────────────────────────

  const bg      = dark ? "#0f172a" : "#f8fafc";
  const surface = dark ? "#1e293b" : "#ffffff";
  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";
  const panelBg = dark ? "#0f172a" : "#f1f5f9";

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        minHeight:      "100vh",
        background:     bg,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "32px 16px",
        fontFamily:     "system-ui, -apple-system, sans-serif",
        transition:     "background 0.2s",
      }}
    >
      {/* Header */}
      <div
        style={{
          width:          "100%",
          maxWidth:       "780px",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          marginBottom:   "24px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>
            {modeData.label} Angles
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Drag the middle arm to split the angle
          </p>
        </div>
        <button
          onClick={() => setDark((d) => !d)}
          style={{
            padding: "6px 14px", borderRadius: "8px",
            border: `1.5px solid ${border}`, background: surface,
            color: textSec, fontSize: "13px", cursor: "pointer", fontFamily: "inherit",
          }}
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      {/* Card */}
      <div
        style={{
          width:        "100%",
          maxWidth:     "780px",
          background:   surface,
          borderRadius: "20px",
          border:       `1.5px solid ${border}`,
          boxShadow:    dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)",
          display:      "flex",
          flexWrap:     "wrap",
          overflow:     "hidden",
        }}
      >
        {/* SVG panel */}
        <div
          ref={svgRef}
          style={{
            flex:           "0 0 320px",
            background:     panelBg,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            padding:        "16px",
            touchAction:    "none",
            userSelect:     "none",
            transition:     "background 0.2s",
          }}
        >
          <Scene
            alpha={alpha}
            beta={beta}
            limit={limit}
            dark={dark}
            onPointerDown={handlePointerDown}
          />
        </div>

        {/* Info panel */}
        <div
          style={{
            flex:           "1 1 280px",
            padding:        "28px 24px",
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "center",
            gap:            "20px",
          }}
        >
          {/* Mode toggle */}
          <ModeToggle
            mode={mode}
            onChange={handleModeChange}
            border={border}
            surface={panelBg}
            textSec={textSec}
          />

          {/* Live equation */}
          <Equation alpha={alpha} beta={beta} sum={modeData.sum} dark={dark} />

          {/* Value cards */}
          <div style={{ display: "flex", gap: "10px" }}>
            <ValueCard label="α (alpha)" value={alpha} color={BLUE}  bg={BLUE_BG}  dark={dark} />
            <ValueCard label="β (beta)"  value={beta}  color={AMBER} bg={AMBER_BG} dark={dark} />
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Description */}
          <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.65", color: textSec }}>
            {modeData.desc}
          </p>

          {/* Equal angles note */}
          <div
            style={{
              padding:      "10px 14px",
              borderRadius: "10px",
              background:   panelBg,
              border:       `1.5px solid ${border}`,
              fontSize:     "12px",
              color:        textSec,
              lineHeight:   "1.5",
            }}
          >
            <strong style={{ color: textPri }}>Equal split:</strong> drag to the midpoint to see two equal {mode === "complementary" ? "45°" : "90°"} angles.
          </div>
        </div>
      </div>
    </div>
  );
}