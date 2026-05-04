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

const SZ   = 320;
const VX   = SZ / 2;
const VY   = SZ / 2;
const ARM  = 118;

const ARC_A = 52;  // alpha arc
const ARC_B = 76;  // beta arc — larger so labels don&apos;t overlap

const BLUE      = "#2563eb";
const AMBER     = "#d97706";
const PURPLE    = "#9333ea";
const BLUE_BG   = "rgba(37,99,235,0.11)";
const AMBER_BG  = "rgba(217,119,6,0.11)";

const ALPHA_MIN = 2;
const BETA_MIN  = 2;
const TOTAL_MAX = 358;

const SNAP_VALS = [30, 45, 60, 90, 120, 135, 150, 180];

// ─── Snap ────────────────────────────────────────────────────────────────────

function snapVal(raw, min, max) {
  const clamped = Math.min(Math.max(raw, min), max);
  for (const t of SNAP_VALS) {
    if (t >= min && t <= max && Math.abs(clamped - t) <= 4) return t;
  }
  return Math.round(clamped);
}

// ─── Pointer → angle ─────────────────────────────────────────────────────────

function rawAngleFromPointer(px, py) {
  let deg = Math.atan2(-py, px) * (180 / Math.PI);
  if (deg < 0) deg += 360;
  return deg;
}

// ─── Drag handle component ───────────────────────────────────────────────────

function Handle({ cx, cy, angle, r, color, onPointerDown }) {
  const pt = polar(cx, cy, r, angle);
  return (
    <g onPointerDown={onPointerDown} style={{ cursor: "grab", touchAction: "none" }}>
      <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
      <circle cx={pt.x} cy={pt.y} r={8}  fill={color} opacity={0.92} stroke="white" strokeWidth={2} />
    </g>
  );
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

/**
 * Three arms:
 *   arm1 — fixed at 0° (gray, outer boundary)
 *   arm2 — at alpha (purple, shared arm — draggable)
 *   arm3 — at alpha+beta (gray, outer boundary — draggable via beta)
 *
 * Two drag handles:
 *   blue handle on arm2 tip  → drags alpha (arm3 follows)
 *   amber handle on arm3 tip → drags beta (arm2 stays)
 */
function Scene({ alpha, beta, dark, onArm2Down, onArm3Down }) {
  const total    = alpha + beta;
  const arm1End  = polar(VX, VY, ARM, 0);
  const arm2End  = polar(VX, VY, ARM, alpha);
  const arm3End  = polar(VX, VY, ARM, total);

  const isAlphaRight = Math.abs(alpha - 90) < 0.5;
  const isBetaRight  = Math.abs(beta  - 90) < 0.5;

  // Label positions — midpoint of each sector
  const alphaLabelPos = polar(VX, VY, ARC_A + 22, alpha / 2);
  const betaLabelPos  = polar(VX, VY, ARC_B + 20, alpha + beta / 2);

  // Greek symbol positions near arm tips
  const alphaTag = polar(VX, VY, ARM + 16, alpha / 2);
  const betaTag  = polar(VX, VY, ARM + 16, alpha + beta / 2);

  const subColor = dark ? "#475569" : "#94a3b8";
  const fs = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  return (
    <svg
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      style={{ display: "block", touchAction: "none" }}
    >
      {/* ── Sector fills ── */}
      <path d={sectorPath(VX, VY, ARC_B, 0, alpha)}       fill={BLUE_BG}  stroke="none" />
      <path d={sectorPath(VX, VY, ARC_B, alpha, total)}    fill={AMBER_BG} stroke="none" />

      {/* ── Alpha arc or box ── */}
      {isAlphaRight
        ? <path d={boxPath(VX, VY, 0, alpha)}             fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinejoin="miter" />
        : <path d={arcPath(VX, VY, ARC_A, 0, alpha)}      fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
      }

      {/* ── Beta arc or box ── */}
      {isBetaRight
        ? <path d={boxPath(VX, VY, alpha, total)}          fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter" />
        : <path d={arcPath(VX, VY, ARC_B, alpha, total)}   fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
      }

      {/* ── Arm 1 — fixed outer (gray) ── */}
      <line
        x1={VX} y1={VY} x2={arm1End.x} y2={arm1End.y}
        stroke={subColor} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Arm 3 — outer boundary (gray, draggable) ── */}
      <line
        x1={VX} y1={VY} x2={arm3End.x} y2={arm3End.y}
        stroke={subColor} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Arm 2 — shared arm (purple, draggable) ── */}
      <line
        x1={VX} y1={VY} x2={arm2End.x} y2={arm2End.y}
        stroke={PURPLE} strokeWidth={2.5} strokeLinecap="round"
        strokeDasharray="6 3"
      />

      {/* ── Vertex ── */}
      <circle cx={VX} cy={VY} r={4.5} fill={PURPLE} />

      {/* ── Arm endpoint dots ── */}
      <circle cx={arm1End.x} cy={arm1End.y} r={3} fill={subColor} opacity={0.5} />
      <circle cx={arm3End.x} cy={arm3End.y} r={3} fill={subColor} opacity={0.5} />
      <circle cx={arm2End.x} cy={arm2End.y} r={3} fill={PURPLE}   opacity={0.6} />

      {/* ── Degree labels inside sectors ── */}
      <text
        x={alphaLabelPos.x} y={alphaLabelPos.y}
        textAnchor="middle" dominantBaseline="central"
        fontSize={13} fontWeight="700" fill={BLUE} style={fs}
      >
        {alpha}&deg;
      </text>
      <text
        x={betaLabelPos.x} y={betaLabelPos.y}
        textAnchor="middle" dominantBaseline="central"
        fontSize={13} fontWeight="700" fill={AMBER} style={fs}
      >
        {beta}&deg;
      </text>

      {/* ── Greek labels near arm tips ── */}
      <text x={alphaTag.x} y={alphaTag.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fill={BLUE}  opacity={0.7} style={fs}>α</text>
      <text x={betaTag.x}  y={betaTag.y}  textAnchor="middle" dominantBaseline="central" fontSize={11} fill={AMBER} opacity={0.7} style={fs}>β</text>

      {/* ── Shared arm label ── */}
      {(() => {
        const lp = polar(VX, VY, ARM + 16, alpha);
        return (
          <text
            x={lp.x} y={lp.y}
            textAnchor="middle" dominantBaseline="central"
            fontSize={10} fill={PURPLE} opacity={0.8} style={fs}
          >
            shared
          </text>
        );
      })()}

      {/* ── Drag handle on arm2 (blue — drags alpha) ── */}
      <Handle
        cx={VX} cy={VY}
        angle={alpha}
        r={ARM}
        color={BLUE}
        onPointerDown={onArm2Down}
      />

      {/* ── Drag handle on arm3 (amber — drags beta) ── */}
      <Handle
        cx={VX} cy={VY}
        angle={total}
        r={ARM}
        color={AMBER}
        onPointerDown={onArm3Down}
      />
    </svg>
  );
}

// ─── Property check pill ──────────────────────────────────────────────────────

function CheckPill({ label, dark }) {
  const bg  = dark ? "rgba(22,163,74,0.15)" : "rgba(22,163,74,0.10)";
  const col = "#16a34a";
  return (
    <div
      style={{
        display:      "flex",
        alignItems:   "center",
        gap:          "6px",
        padding:      "5px 12px",
        borderRadius: "999px",
        background:   bg,
        border:       `1.5px solid ${col}33`,
        fontSize:     "12px",
        fontWeight:   "600",
        color:        col,
        whiteSpace:   "nowrap",
      }}
    >
      <span style={{ fontSize: "13px" }}>✓</span>
      {label}
    </div>
  );
}

// ─── Value card ───────────────────────────────────────────────────────────────

function ValueCard({ label, sublabel, value, color, panelBg }) {
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
      <div style={{ fontSize: "11px", fontWeight: "600", color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
      <div style={{ fontSize: "10px", color, opacity: 0.6, marginBottom: "5px" }}>{sublabel}</div>
      <div style={{ fontSize: "36px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>{value}&deg;</div>
    </div>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function AdjacentAnglesWrapper() {
  const [alpha, setAlpha] = useState(65);
  const [beta,  setBeta]  = useState(80);
  const [dark,  setDark]  = useState(false);

  const svgRef      = useRef(null);
  const dragging    = useRef(null); // "arm2" | "arm3" | null
  const alphaRef    = useRef(alpha);
  const betaRef     = useRef(beta);

  // Keep refs in sync for use inside event listeners
  useEffect(() => { alphaRef.current = alpha; }, [alpha]);
  useEffect(() => { betaRef.current  = beta;  }, [beta]);

  const total = alpha + beta;

  // ── Pointer → angle ────────────────────────────────────────────────────────

  const getPointerAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale - VX;
    const py    = (e.clientY - rect.top)  * scale - VY;
    return rawAngleFromPointer(px, py);
  }, []);

  // ── Arm 2 drag — moves shared arm, beta preserved, arm3 follows ────────────

  const onArm2Down = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = "arm2";
    const raw   = getPointerAngle(e);
    const maxA  = TOTAL_MAX - betaRef.current;
    setAlpha(snapVal(raw, ALPHA_MIN, maxA));
  }, [getPointerAngle]);

  // ── Arm 3 drag — moves outer arm, alpha preserved, beta changes ────────────

  const onArm3Down = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = "arm3";
    const raw    = getPointerAngle(e);
    // total = raw angle; beta = total - alpha
    const newTotal = Math.min(Math.max(raw, alphaRef.current + BETA_MIN), TOTAL_MAX);
    const newBeta  = snapVal(newTotal - alphaRef.current, BETA_MIN, TOTAL_MAX - alphaRef.current);
    setBeta(newBeta);
  }, [getPointerAngle]);

  // ── Window pointer events ──────────────────────────────────────────────────

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const raw = getPointerAngle(e);
      if (dragging.current === "arm2") {
        const maxA = TOTAL_MAX - betaRef.current;
        setAlpha(snapVal(raw, ALPHA_MIN, maxA));
      } else {
        const newTotal = Math.min(Math.max(raw, alphaRef.current + BETA_MIN), TOTAL_MAX);
        const newBeta  = snapVal(newTotal - alphaRef.current, BETA_MIN, TOTAL_MAX - alphaRef.current);
        setBeta(newBeta);
      }
    };
    const onUp = () => { dragging.current = null; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup",   onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup",   onUp);
    };
  }, [getPointerAngle]);

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
          maxWidth:       "800px",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          marginBottom:   "24px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>
            Adjacent Angles
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Blue handle moves the shared arm &mdash; amber handle moves the outer boundary
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
          maxWidth:     "800px",
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
            dark={dark}
            onArm2Down={onArm2Down}
            onArm3Down={onArm3Down}
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
          {/* Live sum */}
          <div
            style={{
              display:        "flex",
              alignItems:     "baseline",
              gap:            "6px",
              fontSize:       "18px",
              fontWeight:     "700",
              flexWrap:       "wrap",
              justifyContent: "center",
              fontFamily:     "system-ui, sans-serif",
            }}
          >
            <span style={{ color: BLUE }}>{alpha}&deg;</span>
            <span style={{ color: textPri, opacity: 0.4 }}>+</span>
            <span style={{ color: AMBER }}>{beta}&deg;</span>
            <span style={{ color: textPri, opacity: 0.4 }}>=</span>
            <span style={{ color: PURPLE, fontWeight: "900" }}>{total}&deg;</span>
          </div>

          {/* Value cards */}
          <div style={{ display: "flex", gap: "10px" }}>
            <ValueCard label="α (alpha)" sublabel="first angle"  value={alpha} color={BLUE}  panelBg={panelBg} />
            <ValueCard label="β (beta)"  sublabel="second angle" value={beta}  color={AMBER} panelBg={panelBg} />
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Property checks */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
              Properties
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              <CheckPill label="Common vertex" dark={dark} />
              <CheckPill label="Common arm"    dark={dark} />
              <CheckPill label="Non-overlapping" dark={dark} />
            </div>
          </div>

          {/* Description */}
          <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.65", color: textSec }}>
            Adjacent angles share a <strong style={{ color: PURPLE }}>common arm</strong> (dashed) and a common vertex,
            and lie on opposite sides of the shared arm without overlapping.
            Unlike complementary or supplementary pairs, their sum has no fixed total.
          </p>

          {/* Hint */}
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
            <strong style={{ color: textPri }}>Two handles, two jobs:</strong> the{" "}
            <strong style={{ color: BLUE }}>blue</strong> handle moves the shared arm &mdash;
            the <strong style={{ color: AMBER }}>amber</strong> handle moves the outer boundary.
          </div>
        </div>
      </div>
    </div>
  );
}