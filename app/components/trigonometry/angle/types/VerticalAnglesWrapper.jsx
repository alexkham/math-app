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
const ARM  = 124;
const ARC  = 46;

const BLUE      = "#2563eb";
const AMBER     = "#d97706";
const BLUE_BG   = "rgba(37,99,235,0.11)";
const AMBER_BG  = "rgba(217,119,6,0.11)";

const SNAP_TARGETS = [30, 45, 60, 90, 120, 135, 150];
const SNAP_THRESH  = 4;

// ─── Snap ────────────────────────────────────────────────────────────────────

function snapTheta(raw) {
  const clamped = Math.min(Math.max(raw, 1), 179);
  for (const t of SNAP_TARGETS) {
    if (Math.abs(clamped - t) <= SNAP_THRESH) return t;
  }
  return Math.round(clamped);
}

// ─── Angle from pointer ───────────────────────────────────────────────────────

/**
 * Given pointer offset from vertex, return the math angle (CCW from east).
 * Then fold into [1, 179] — we only care about where line B points
 * in the upper half-plane for dragging (the other handle mirrors it).
 */
function thetaFromPointer(px, py, fromUpperHandle) {
  let deg = Math.atan2(-py, px) * (180 / Math.PI);
  if (deg < 0) deg += 360;
  // If dragging the lower handle (theta+180), mirror back
  if (!fromUpperHandle) {
    deg = deg - 180;
    if (deg < 0) deg += 360;
  }
  // Fold to [1,179]
  if (deg > 180) deg = 360 - deg;
  return snapTheta(deg);
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

/**
 * Two crossing lines through the vertex.
 * Line A is fixed at 0°/180°.
 * Line B is at theta / (theta+180°).
 *
 * The 4 sectors (CCW from 0°):
 *   α  — 0° to theta         (blue)
 *   β  — theta to 180°       (amber)
 *   α  — 180° to theta+180°  (blue)  ← vertical to first α
 *   β  — theta+180° to 360°  (amber) ← vertical to first β
 */
function Scene({ theta, dark, onDragHandleDown }) {
  const alpha = theta;
  const beta  = 180 - theta;

  const isPerp    = theta === 90;
  const isAlphaRA = Math.abs(alpha - 90) < 0.5;
  const isBetaRA  = Math.abs(beta  - 90) < 0.5;

  // Arm endpoints — line A
  const aE = polar(VX, VY, ARM, 0);
  const aW = polar(VX, VY, ARM, 180);

  // Arm endpoints — line B
  const bN = polar(VX, VY, ARM, theta);
  const bS = polar(VX, VY, ARM, theta + 180);

  // Sector label positions (midpoint angle of each sector)
  const lAlpha1 = polar(VX, VY, ARC + 20, alpha / 2);
  const lBeta1  = polar(VX, VY, ARC + 20, theta + beta / 2);
  const lAlpha2 = polar(VX, VY, ARC + 20, 180 + alpha / 2);
  const lBeta2  = polar(VX, VY, ARC + 20, theta + 180 + beta / 2);

  const subColor = dark ? "#475569" : "#94a3b8";
  const fs = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  // When all four angles are 90°, just show the single right-angle box
  const showBoxAll = isPerp;

  return (
    <svg
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      style={{ display: "block", touchAction: "none" }}
    >
      {/* ── Sector fills ── */}
      {/* α1 — 0° to theta */}
      <path d={sectorPath(VX, VY, ARC, 0, theta)}           fill={BLUE_BG}  stroke="none" />
      {/* β1 — theta to 180° */}
      <path d={sectorPath(VX, VY, ARC, theta, 180)}         fill={AMBER_BG} stroke="none" />
      {/* α2 — 180° to theta+180° */}
      <path d={sectorPath(VX, VY, ARC, 180, theta + 180)}   fill={BLUE_BG}  stroke="none" />
      {/* β2 — theta+180° to 360° */}
      <path d={sectorPath(VX, VY, ARC, theta + 180, 360)}   fill={AMBER_BG} stroke="none" />

      {/* ── Arcs ── */}
      {showBoxAll ? (
        /* All 90° — draw four right-angle boxes */
        <>
          <path d={boxPath(VX, VY, 0,   90,  13)} fill="none" stroke={BLUE}  strokeWidth={2} strokeLinejoin="miter" />
          <path d={boxPath(VX, VY, 90,  180, 13)} fill="none" stroke={AMBER} strokeWidth={2} strokeLinejoin="miter" />
          <path d={boxPath(VX, VY, 180, 270, 13)} fill="none" stroke={BLUE}  strokeWidth={2} strokeLinejoin="miter" />
          <path d={boxPath(VX, VY, 270, 360, 13)} fill="none" stroke={AMBER} strokeWidth={2} strokeLinejoin="miter" />
        </>
      ) : (
        <>
          {/* α1 arc or box */}
          {isAlphaRA
            ? <path d={boxPath(VX, VY, 0, theta)}       fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinejoin="miter" />
            : <path d={arcPath(VX, VY, ARC, 0, theta)}  fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
          }
          {/* β1 arc or box */}
          {isBetaRA
            ? <path d={boxPath(VX, VY, theta, 180)}           fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter" />
            : <path d={arcPath(VX, VY, ARC, theta, 180)}      fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
          }
          {/* α2 arc or box (vertical to α1) */}
          {isAlphaRA
            ? <path d={boxPath(VX, VY, 180, theta + 180)}       fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinejoin="miter" />
            : <path d={arcPath(VX, VY, ARC, 180, theta + 180)}  fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
          }
          {/* β2 arc or box (vertical to β1) */}
          {isBetaRA
            ? <path d={boxPath(VX, VY, theta + 180, 360)}       fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter" />
            : <path d={arcPath(VX, VY, ARC, theta + 180, 360)}  fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
          }
        </>
      )}

      {/* ── Line A (fixed) ── */}
      <line
        x1={aW.x} y1={aW.y} x2={aE.x} y2={aE.y}
        stroke={subColor} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Line B (draggable) ── */}
      <line
        x1={bS.x} y1={bS.y} x2={bN.x} y2={bN.y}
        stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Vertex ── */}
      <circle cx={VX} cy={VY} r={4.5} fill={BLUE} />

      {/* ── Arm endpoint dots ── */}
      <circle cx={aE.x} cy={aE.y} r={3} fill={subColor} opacity={0.5} />
      <circle cx={aW.x} cy={aW.y} r={3} fill={subColor} opacity={0.5} />
      <circle cx={bN.x} cy={bN.y} r={3} fill={BLUE}     opacity={0.5} />
      <circle cx={bS.x} cy={bS.y} r={3} fill={BLUE}     opacity={0.5} />

      {/* ── Sector labels ── */}
      {!showBoxAll && (
        <>
          <text x={lAlpha1.x} y={lAlpha1.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE}  style={fs}>{alpha}&deg;</text>
          <text x={lBeta1.x}  y={lBeta1.y}  textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={fs}>{beta}&deg;</text>
          <text x={lAlpha2.x} y={lAlpha2.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE}  style={fs}>{alpha}&deg;</text>
          <text x={lBeta2.x}  y={lBeta2.y}  textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={fs}>{beta}&deg;</text>
        </>
      )}
      {showBoxAll && (
        <>
          {[lAlpha1, lAlpha2].map((p, i) => (
            <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE} style={fs}>90&deg;</text>
          ))}
          {[lBeta1, lBeta2].map((p, i) => (
            <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={fs}>90&deg;</text>
          ))}
        </>
      )}

      {/* ── Drag handles on line B ── */}
      {/* Upper handle (at theta) */}
      <g
        onPointerDown={(e) => onDragHandleDown(e, true)}
        style={{ cursor: "grab", touchAction: "none" }}
      >
        <circle cx={bN.x} cy={bN.y} r={16} fill="transparent" />
        <circle cx={bN.x} cy={bN.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
      </g>
      {/* Lower handle (at theta+180°) */}
      <g
        onPointerDown={(e) => onDragHandleDown(e, false)}
        style={{ cursor: "grab", touchAction: "none" }}
      >
        <circle cx={bS.x} cy={bS.y} r={16} fill="transparent" />
        <circle cx={bS.x} cy={bS.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
      </g>
    </svg>
  );
}

// ─── Value card ───────────────────────────────────────────────────────────────

function ValueCard({ label, sublabel, value, color, panelBg }) {
  return (
    <div
      style={{
        flex:         "1 1 100px",
        background:   panelBg,
        borderRadius: "12px",
        border:       `1.5px solid ${color}22`,
        padding:      "14px 16px",
        textAlign:    "center",
      }}
    >
      <div style={{ fontSize: "11px", fontWeight: "600", color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "2px" }}>
        {label}
      </div>
      <div style={{ fontSize: "11px", color, opacity: 0.6, marginBottom: "6px" }}>
        {sublabel}
      </div>
      <div style={{ fontSize: "38px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>
        {value}&deg;
      </div>
    </div>
  );
}

// ─── Equality callout ─────────────────────────────────────────────────────────

function EqualityCallout({ alpha, beta, border, panelBg, textPri, textSec }) {
  return (
    <div
      style={{
        padding:      "12px 16px",
        borderRadius: "12px",
        background:   panelBg,
        border:       `1.5px solid ${border}`,
        fontSize:     "13px",
        lineHeight:   "1.7",
        color:        textSec,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: BLUE, display: "inline-block", flexShrink: 0 }} />
          <span>Vertical pair:&nbsp;
            <strong style={{ color: BLUE }}>{alpha}&deg;</strong>
            &nbsp;=&nbsp;
            <strong style={{ color: BLUE }}>{alpha}&deg;</strong>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: AMBER, display: "inline-block", flexShrink: 0 }} />
          <span>Vertical pair:&nbsp;
            <strong style={{ color: AMBER }}>{beta}&deg;</strong>
            &nbsp;=&nbsp;
            <strong style={{ color: AMBER }}>{beta}&deg;</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function VerticalAnglesWrapper() {
  const [theta, setTheta] = useState(55);
  const [dark,  setDark]  = useState(false);

  const svgRef      = useRef(null);
  const dragging    = useRef(false);
  const upperHandle = useRef(true); // which handle is being dragged

  const alpha = theta;
  const beta  = 180 - theta;

  // ── Pointer handling ──────────────────────────────────────────────────────

  const getTheta = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale - VX;
    const py    = (e.clientY - rect.top)  * scale - VY;
    return thetaFromPointer(px, py, upperHandle.current);
  }, []);

  const handleDragStart = useCallback((e, isUpper) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current    = true;
    upperHandle.current = isUpper;
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
          maxWidth:       "780px",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          marginBottom:   "24px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>
            Vertical Angles
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Drag either handle on the blue line to rotate it
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
            theta={theta}
            dark={dark}
            onDragHandleDown={handleDragStart}
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
          {/* Live equation */}
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
            <span style={{ color: textPri }}>180&deg;</span>
          </div>

          {/* Value cards */}
          <div style={{ display: "flex", gap: "10px" }}>
            <ValueCard
              label="α pair"
              sublabel="vertical angles"
              value={alpha}
              color={BLUE}
              panelBg={panelBg}
            />
            <ValueCard
              label="β pair"
              sublabel="vertical angles"
              value={beta}
              color={AMBER}
              panelBg={panelBg}
            />
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Equality callout */}
          <EqualityCallout
            alpha={alpha}
            beta={beta}
            border={border}
            panelBg={panelBg}
            textPri={textPri}
            textSec={textSec}
          />

          {/* Description */}
          <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.65", color: textSec }}>
            When two straight lines intersect, the opposite angles are always equal.
            These are called <strong style={{ color: textPri }}>vertical</strong> (or <strong style={{ color: textPri }}>opposite</strong>) angles.
            Each adjacent pair sums to 180&deg;.
          </p>

          {/* Perpendicular hint */}
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
            <strong style={{ color: textPri }}>Perpendicular lines:</strong> drag to 90&deg; — all four angles become equal right angles.
          </div>
        </div>
      </div>
    </div>
  );
}