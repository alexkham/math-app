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

// ─── Scene geometry constants ─────────────────────────────────────────────────

const W   = 360;   // SVG canvas width
const H   = 280;   // SVG canvas height
const CX  = 180;   // Transversal pivot x (center)
const CY  = 140;   // Transversal pivot y (between the two parallel lines)
const Y1  = 88;    // Upper parallel line y
const Y2  = 192;   // Lower parallel line y
const DY  = CY - Y1; // = 52 — half vertical span (symmetric)
const ARC = 40;    // Arc indicator radius

// ─── Colors ───────────────────────────────────────────────────────────────────

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const BLUE_BG  = "rgba(37,99,235,0.12)";
const AMBER_BG = "rgba(217,119,6,0.12)";

// ─── Mode configuration ───────────────────────────────────────────────────────

/**
 * At each intersection, the two lines produce 4 angles (CCW from east):
 *   ∠1  above-left:  from theta   to 180°          size = 180 - theta
 *   ∠2  above-right: from 0°      to theta          size = theta
 *   ∠3  below-left:  from 180°    to theta + 180°   size = theta
 *   ∠4  below-right: from theta+180° to 360°        size = 180 - theta
 *
 * P1 = upper intersection, P2 = lower intersection.
 * Same geometry applies at both (parallel lines → congruent angles).
 */
const MODES = {
  alternateInterior: {
    label:    "Alternate Interior",
    shortLabel: "Alt. Interior",
    getSectors: (t) => [
      { at: "P1", from: 180,   to: t + 180, color: BLUE,  bg: BLUE_BG  }, // ∠3
      { at: "P2", from: 0,     to: t,       color: AMBER, bg: AMBER_BG }, // ∠6
    ],
    getA: (t) => t,
    getB: (t) => t,
    relation: "equal",
    equation: (a, b) => `${a}° = ${b}°`,
    desc:
      "Alternate interior angles lie between the parallel lines on opposite sides of the transversal. They are always equal.",
    shape: "Z-shape (or Z reversed)",
  },
  alternateExterior: {
    label:    "Alternate Exterior",
    shortLabel: "Alt. Exterior",
    getSectors: (t) => [
      { at: "P1", from: t,     to: 180,     color: BLUE,  bg: BLUE_BG  }, // ∠1
      { at: "P2", from: t+180, to: 360,     color: AMBER, bg: AMBER_BG }, // ∠8
    ],
    getA: (t) => 180 - t,
    getB: (t) => 180 - t,
    relation: "equal",
    equation: (a, b) => `${a}° = ${b}°`,
    desc:
      "Alternate exterior angles lie outside the parallel lines on opposite sides of the transversal. They are always equal.",
    shape: "Z-shape (outside)",
  },
  coInterior: {
    label:    "Co-Interior",
    shortLabel: "Co-Interior",
    getSectors: (t) => [
      { at: "P1", from: 180, to: t + 180, color: BLUE,  bg: BLUE_BG  }, // ∠3
      { at: "P2", from: t,   to: 180,     color: AMBER, bg: AMBER_BG }, // ∠5
    ],
    getA: (t) => t,
    getB: (t) => 180 - t,
    relation: "supplementary",
    equation: (a, b) => `${a}° + ${b}° = 180°`,
    desc:
      "Co-interior angles (same-side interior / consecutive interior) lie between the parallel lines on the same side of the transversal. They always sum to 180°.",
    shape: "C-shape",
  },
  corresponding: {
    label:    "Corresponding",
    shortLabel: "Corresponding",
    getSectors: (t) => [
      { at: "P1", from: 0, to: t, color: BLUE,  bg: BLUE_BG  }, // ∠2
      { at: "P2", from: 0, to: t, color: AMBER, bg: AMBER_BG }, // ∠6
    ],
    getA: (t) => t,
    getB: (t) => t,
    relation: "equal",
    equation: (a, b) => `${a}° = ${b}°`,
    desc:
      "Corresponding angles occupy the same position at each intersection — both above-right, both below-left, etc. They are always equal when lines are parallel.",
    shape: "F-shape",
  },
};

const MODE_KEYS = Object.keys(MODES);
const SNAP_TARGETS = [30, 45, 60, 90, 120, 135, 150];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function snapTheta(raw) {
  const clamped = Math.min(Math.max(raw, 15), 165);
  for (const t of SNAP_TARGETS) {
    if (Math.abs(clamped - t) <= 4) return t;
  }
  return Math.round(clamped);
}

/**
 * Convert a pointer SVG position (relative to the canvas) to a theta value.
 * Theta is the angle the transversal makes with the horizontal (0°–180°).
 * Computed from the center pivot (CX, CY).
 */
function thetaFromPointer(px_svg, py_svg) {
  const dx =  px_svg - CX;
  const dy = -(py_svg - CY); // flip y for math convention
  let raw = Math.atan2(dy, dx) * (180 / Math.PI);
  // Fold any angle to the upper half-plane (0°, 180°)
  if (raw < 0) raw += 180;
  if (raw > 180) raw -= 180;
  return snapTheta(raw);
}

// ─── Intersection point helper ────────────────────────────────────────────────

function getIntersections(theta) {
  const cot = Math.cos(toRad(theta)) / Math.sin(toRad(theta));
  return {
    p1: { x: CX + DY * cot, y: Y1 },  // upper
    p2: { x: CX - DY * cot, y: Y2 },  // lower
  };
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ theta, mode, dark, onHandleDown }) {
  const { p1, p2 } = getIntersections(theta);
  const md = MODES[mode];
  const sectors = md.getSectors(theta);

  // Full transversal line clipped to canvas
  const cot = Math.cos(toRad(theta)) / Math.sin(toRad(theta));
  const transTop = { x: CX + CY       * cot, y: 0 };
  const transBtm = { x: CX - (H - CY) * cot, y: H };

  const subColor  = dark ? "#475569" : "#94a3b8";
  const lineColor = dark ? "#64748b" : "#94a3b8";
  const textColor = dark ? "#94a3b8" : "#64748b";
  const fs = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: "block", touchAction: "none", overflow: "hidden" }}
    >
      {/* ── Sector fills ── */}
      {sectors.map((sec, i) => {
        const pt = sec.at === "P1" ? p1 : p2;
        return (
          <path
            key={`fill-${i}`}
            d={sectorPath(pt.x, pt.y, ARC, sec.from, sec.to)}
            fill={sec.bg}
            stroke="none"
          />
        );
      })}

      {/* ── Parallel lines ── */}
      <line x1={0} y1={Y1} x2={W} y2={Y1} stroke={lineColor} strokeWidth={2} strokeLinecap="round" />
      <line x1={0} y1={Y2} x2={W} y2={Y2} stroke={lineColor} strokeWidth={2} strokeLinecap="round" />

      {/* ── Parallel tick marks (||) ── */}
      {[Y1, Y2].map((y) => (
        <g key={y}>
          <line x1={28} y1={y - 7} x2={28} y2={y + 7} stroke={lineColor} strokeWidth={1.5} />
          <line x1={35} y1={y - 7} x2={35} y2={y + 7} stroke={lineColor} strokeWidth={1.5} />
        </g>
      ))}

      {/* ── Line labels ── */}
      <text x={W - 8} y={Y1 - 8} textAnchor="end" fontSize={11} fill={textColor} fontStyle="italic" style={fs}>m</text>
      <text x={W - 8} y={Y2 - 8} textAnchor="end" fontSize={11} fill={textColor} fontStyle="italic" style={fs}>n</text>

      {/* ── Transversal ── */}
      <line
        x1={transTop.x} y1={transTop.y}
        x2={transBtm.x} y2={transBtm.y}
        stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Transversal label ── */}
      {(() => {
        const lx = transTop.x + 10;
        const ly = Math.max(transTop.y + 14, 14);
        return <text x={lx} y={ly} fontSize={11} fill={BLUE} fontStyle="italic" style={fs}>t</text>;
      })()}

      {/* ── Sector arcs ── */}
      {sectors.map((sec, i) => {
        const pt = sec.at === "P1" ? p1 : p2;
        return (
          <path
            key={`arc-${i}`}
            d={arcPath(pt.x, pt.y, ARC, sec.from, sec.to)}
            fill="none"
            stroke={sec.color}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        );
      })}

      {/* ── Sector degree labels ── */}
      {sectors.map((sec, i) => {
        const pt  = sec.at === "P1" ? p1 : p2;
        const mid = sec.from + ccwDelta(sec.from, sec.to) / 2;
        const lp  = polar(pt.x, pt.y, ARC + 18, mid);
        const val = i === 0 ? md.getA(theta) : md.getB(theta);
        return (
          <text
            key={`label-${i}`}
            x={lp.x} y={lp.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={12}
            fontWeight="700"
            fill={sec.color}
            style={fs}
          >
            {val}&deg;
          </text>
        );
      })}

      {/* ── Intersection dots ── */}
      <circle cx={p1.x} cy={p1.y} r={4.5} fill={BLUE} />
      <circle cx={p2.x} cy={p2.y} r={4.5} fill={BLUE} />

      {/* ── Drag handles (one per intersection) ── */}
      {[p1, p2].map((pt, i) => (
        <g
          key={`handle-${i}`}
          onPointerDown={onHandleDown}
          style={{ cursor: "grab", touchAction: "none" }}
        >
          <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
          <circle cx={pt.x} cy={pt.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
        </g>
      ))}
    </svg>
  );
}

// ─── Mode button ──────────────────────────────────────────────────────────────

function ModeButton({ label, active, onClick, border, textSec }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex:         "1 1 120px",
        padding:      "7px 10px",
        borderRadius: "8px",
        border:       `1.5px solid ${active ? BLUE : border}`,
        background:   active ? BLUE : "transparent",
        color:        active ? "#fff" : textSec,
        fontSize:     "11px",
        fontWeight:   active ? "700" : "500",
        fontFamily:   "system-ui, sans-serif",
        cursor:       "pointer",
        transition:   "all 0.15s",
        whiteSpace:   "nowrap",
        textAlign:    "center",
      }}
    >
      {label}
    </button>
  );
}

// ─── Equation display ─────────────────────────────────────────────────────────

function Equation({ md, theta, textPri }) {
  const a = md.getA(theta);
  const b = md.getB(theta);
  const isEqual = md.relation === "equal";

  return (
    <div
      style={{
        display:        "flex",
        alignItems:     "baseline",
        justifyContent: "center",
        gap:            "6px",
        fontSize:       "18px",
        fontWeight:     "700",
        flexWrap:       "wrap",
        fontFamily:     "system-ui, sans-serif",
      }}
    >
      <span style={{ color: BLUE }}>{a}&deg;</span>
      <span style={{ color: textPri, opacity: 0.4 }}>{isEqual ? "=" : "+"}</span>
      <span style={{ color: AMBER }}>{b}&deg;</span>
      {!isEqual && (
        <>
          <span style={{ color: textPri, opacity: 0.4 }}>=</span>
          <span style={{ color: textPri }}>180&deg;</span>
        </>
      )}
    </div>
  );
}

// ─── Value cards ──────────────────────────────────────────────────────────────

function ValueCard({ label, value, color, panelBg }) {
  return (
    <div
      style={{
        flex:         "1 1 90px",
        background:   panelBg,
        borderRadius: "12px",
        border:       `1.5px solid ${color}22`,
        padding:      "12px 14px",
        textAlign:    "center",
      }}
    >
      <div style={{ fontSize: "11px", fontWeight: "600", color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "5px" }}>
        {label}
      </div>
      <div style={{ fontSize: "36px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>
        {value}&deg;
      </div>
    </div>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function ParallelLinesWrapper() {
  const [theta, setTheta] = useState(60);
  const [mode,  setMode]  = useState("alternateInterior");
  const [dark,  setDark]  = useState(false);

  const svgRef   = useRef(null);
  const dragging = useRef(false);

  const md     = MODES[mode];
  const angleA = md.getA(theta);
  const angleB = md.getB(theta);

  // ── Pointer handling ──────────────────────────────────────────────────────

  const getTheta = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = W / rect.width;
    const px    = (e.clientX - rect.left) * scale;
    const py    = (e.clientY - rect.top)  * scale;
    return thetaFromPointer(px, py);
  }, []);

  const onHandleDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    setTheta(getTheta(e));
  }, [getTheta]);

  useEffect(() => {
    const onMove = (e) => { if (dragging.current) setTheta(getTheta(e)); };
    const onUp   = ()  => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup",   onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup",   onUp);
    };
  }, [getTheta]);

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
          maxWidth:       "820px",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          marginBottom:   "24px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>
            Parallel Lines &amp; Transversal
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Drag either handle to rotate the transversal
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
          maxWidth:     "820px",
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
            flex:           "0 0 360px",
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
            theta={theta}
            mode={mode}
            dark={dark}
            onHandleDown={onHandleDown}
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
            gap:            "18px",
          }}
        >
          {/* Mode selector — 2×2 grid */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {MODE_KEYS.map((key) => (
              <ModeButton
                key={key}
                label={MODES[key].shortLabel}
                active={mode === key}
                onClick={() => setMode(key)}
                border={border}
                textSec={textSec}
              />
            ))}
          </div>

          {/* Mode label */}
          <div style={{ fontSize: "15px", fontWeight: "700", color: textPri }}>
            {md.label} Angles
          </div>

          {/* Live equation */}
          <Equation md={md} theta={theta} textPri={textPri} />

          {/* Value cards */}
          <div style={{ display: "flex", gap: "10px" }}>
            <ValueCard label="angle 1" value={angleA} color={BLUE}  panelBg={panelBg} />
            <ValueCard label="angle 2" value={angleB} color={AMBER} panelBg={panelBg} />
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Description */}
          <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.65", color: textSec }}>
            {md.desc}
          </p>

          {/* Shape hint */}
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
            <strong style={{ color: textPri }}>Memory aid:</strong>{" "}
            {md.shape}. Look for the letter shape formed by the two parallel lines and the transversal.
          </div>
        </div>
      </div>
    </div>
  );
}