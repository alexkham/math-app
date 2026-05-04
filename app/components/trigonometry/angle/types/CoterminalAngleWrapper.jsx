"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ─── Math helpers ─────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;
const ff    = (n)   => n.toFixed(3);

const polar = (cx, cy, r, angleDeg) => ({
  x: cx + r * Math.cos(toRad(angleDeg)),
  y: cy - r * Math.sin(toRad(angleDeg)),
});

const ccwDelta = (from, to) => ((to - from) % 360 + 360) % 360;

function arcPath(cx, cy, r, from, to) {
  const delta = ccwDelta(from, to);
  const s  = polar(cx, cy, r, from);
  const e  = polar(cx, cy, r, to);
  const la = delta > 180 ? 1 : 0;
  return `M ${ff(s.x)} ${ff(s.y)} A ${r} ${r} 0 ${la} 0 ${ff(e.x)} ${ff(e.y)}`;
}

function sectorPath(cx, cy, r, from, to) {
  return `${arcPath(cx, cy, r, from, to)} L ${cx} ${cy} Z`;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SZ  = 340;
const CX  = SZ / 2;
const CY  = SZ / 2;
const ARM = 128;

// Arc radii — offset so both arcs visible simultaneously
const ARC_BASE = 44;
const ARC_COT  = 66;

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const BBG    = "rgba(37,99,235,0.10)";
const ABG    = "rgba(217,119,6,0.10)";

const SNAP_TARGETS = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360];

// ─── Snap ─────────────────────────────────────────────────────────────────────

function snapAngle(raw) {
  const norm = ((raw % 360) + 360) % 360;
  let closest = norm, minDist = Infinity;
  for (const t of SNAP_TARGETS) {
    const d = Math.abs(norm - t);
    if (d < minDist) { minDist = d; closest = t; }
  }
  return minDist <= 5 ? closest : Math.round(norm);
}

// ─── Format angle ─────────────────────────────────────────────────────────────

function formatAngle(angle) {
  if (angle >= 0) return `${angle}°`;
  return `${angle}°`;
}

function formatGeneral(base) {
  return `${base}° + n×360°`;
}

// ─── Default explanation ──────────────────────────────────────────────────────

const DEFAULT_EXPLANATION = {
  title: "Coterminal Angles",
  body: [
    "Two angles are coterminal when they share the same terminal side — they differ by one or more full rotations (multiples of 360°).",
    "Adding 360° moves the terminal side one full turn CCW and lands back in the same place. Subtracting 360° does the same CW.",
    "Because trig functions depend only on the terminal side position, coterminal angles always produce identical trig values.",
  ],
  formula: "θ + n × 360°,  n ∈ ℤ",
};

// ─── Spiral arc helper ────────────────────────────────────────────────────────

/**
 * Approximate a spiral segment using multiple small arcs.
 * Draws from radius r1 at fromAngle to radius r2 at toAngle.
 */
function spiralPath(cx, cy, r1, r2, fromAngle, toAngle, steps = 40) {
  const totalDelta = ccwDelta(fromAngle, toAngle) || 360;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t   = i / steps;
    const ang = fromAngle + totalDelta * t;
    const r   = r1 + (r2 - r1) * t;
    const pt  = polar(cx, cy, r, ang);
    d += i === 0 ? `M ${ff(pt.x)} ${ff(pt.y)}` : ` L ${ff(pt.x)} ${ff(pt.y)}`;
  }
  return d;
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ baseAngle, offset, dark, onPointerDown, svgRef }) {
  const coterminal = baseAngle + offset * 360;
  const norm       = ((baseAngle % 360) + 360) % 360;

  const termEnd = polar(CX, CY, ARM, norm);
  const sub     = dark ? "#475569" : "#94a3b8";
  const grid    = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const fs      = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  // Label positions
  const baseMid    = norm / 2;
  const baseLabelP = polar(CX, CY, ARC_BASE + 18, baseMid);
  const cotMid     = norm / 2;
  const cotLabelP  = polar(CX, CY, ARC_COT + 18, cotMid);

  const showBase = norm > 1;
  const showCot  = offset !== 0;

  // Full rotation circles for offset visualization
  const rotCircles = [];
  if (showCot) {
    const steps = Math.abs(offset);
    for (let i = 1; i <= steps; i++) {
      const r = ARC_BASE + (ARC_COT - ARC_BASE) * (i / (steps + 1));
      rotCircles.push({ r, opacity: 0.18 - i * 0.02 });
    }
  }

  return (
    <svg
      ref={svgRef}
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      onPointerDown={onPointerDown}
      style={{ display: "block", touchAction: "none", cursor: "crosshair" }}
    >
      {/* ── Grid ── */}
      {[40, 80, 110].map((r, i) => (
        <circle key={i} cx={CX} cy={CY} r={r} fill="none" stroke={grid} strokeWidth={1} />
      ))}

      {/* ── Axes ── */}
      <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
      <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />

      {/* ── Full rotation hint circles ── */}
      {rotCircles.map((c, i) => (
        <circle key={i} cx={CX} cy={CY} r={c.r}
          fill="none"
          stroke={offset > 0 ? BLUE : AMBER}
          strokeWidth={1.5}
          strokeDasharray="3 4"
          opacity={c.opacity}
        />
      ))}

      {/* ── Coterminal arc (amber, larger radius) ── */}
      {showCot && (
        <>
          {norm > 1
            ? <path d={sectorPath(CX, CY, ARC_COT, 0, norm)} fill={ABG} stroke="none" />
            : <circle cx={CX} cy={CY} r={ARC_COT} fill={ABG} stroke="none" />
          }
          {norm > 1
            ? <path d={arcPath(CX, CY, ARC_COT, 0, norm)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
            : <circle cx={CX} cy={CY} r={ARC_COT} fill="none" stroke={AMBER} strokeWidth={2.5} />
          }
          {norm > 20 && (
            <text x={cotLabelP.x} y={cotLabelP.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={fs}>
              {coterminal}&deg;
            </text>
          )}
        </>
      )}

      {/* ── Base arc (blue, smaller radius) ── */}
      {showBase && (
        <>
          <path d={sectorPath(CX, CY, ARC_BASE, 0, norm)} fill={BBG} stroke="none" />
          <path d={arcPath(CX, CY, ARC_BASE, 0, norm)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
          {norm > 20 && (
            <text x={baseLabelP.x} y={baseLabelP.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE} style={fs}>
              {baseAngle}&deg;
            </text>
          )}
        </>
      )}

      {/* ── Spiral connector when offset ≠ 0 ── */}
      {showCot && norm > 1 && (
        <path
          d={spiralPath(CX, CY, ARC_BASE, ARC_COT, 0, norm)}
          fill="none"
          stroke={AMBER}
          strokeWidth={1}
          strokeDasharray="3 4"
          opacity={0.35}
        />
      )}

      {/* ── Initial side ── */}
      <line x1={CX} y1={CY} x2={CX + ARM} y2={CY}
        stroke={sub} strokeWidth={2} strokeLinecap="round" />

      {/* ── Terminal side ── */}
      <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y}
        stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />

      {/* ── "Same terminal side" label ── */}
      {showCot && (
        <text
          x={polar(CX, CY, ARM + 16, norm).x}
          y={polar(CX, CY, ARM + 16, norm).y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={9} fill={sub} style={fs}
        >
          shared
        </text>
      )}

      {/* ── Origin ── */}
      <circle cx={CX} cy={CY} r={4.5} fill={BLUE} />

      {/* ── Drag handle ── */}
      <g style={{ cursor: "grab", touchAction: "none" }}>
        <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
        <circle cx={termEnd.x} cy={termEnd.y} r={8}
          fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
      </g>
    </svg>
  );
}

// ─── Offset button ────────────────────────────────────────────────────────────

function OffsetButton({ label, onClick, disabled, border, textSec }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "34px", height: "34px",
        borderRadius: "8px",
        border: `1.5px solid ${disabled ? "transparent" : border}`,
        background: "transparent",
        color: disabled ? "transparent" : textSec,
        fontSize: "17px",
        cursor: disabled ? "default" : "pointer",
        fontFamily: "system-ui,sans-serif",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.12s",
      }}
    >
      {label}
    </button>
  );
}

// ─── Explanation panel ────────────────────────────────────────────────────────

function ExplanationPanel({ explanation, baseAngle, offset, dark, border, textPri, textSec, panelBg }) {
  const coterminal = baseAngle + offset * 360;
  const norm       = ((baseAngle % 360) + 360) % 360;
  const areSame    = offset === 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%", overflowY: "auto" }}>
      {/* Title */}
      <div>
        <div style={{ fontSize: "13px", fontWeight: "800", color: textPri, marginBottom: "6px" }}>
          {explanation.title}
        </div>
        {explanation.body.map((para, i) => (
          <p key={i} style={{ margin: "0 0 8px", fontSize: "12px", lineHeight: "1.65", color: textSec }}>{para}</p>
        ))}
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Live values */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
          Current angles
        </div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${BLUE}22`, padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: "600", color: BLUE, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>Base</div>
            <div style={{ fontSize: "26px", fontWeight: "900", color: BLUE, lineHeight: 1 }}>{baseAngle}&deg;</div>
          </div>
          <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${AMBER}22`, padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: "600", color: AMBER, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>Coterminal</div>
            <div style={{ fontSize: "26px", fontWeight: "900", color: AMBER, lineHeight: 1 }}>{coterminal}&deg;</div>
          </div>
        </div>

        {/* Same terminal side confirmation */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 10px", borderRadius: "8px", background: "rgba(22,163,74,0.08)", border: "1.5px solid rgba(22,163,74,0.2)", fontSize: "11px", color: "#16a34a", fontWeight: "600" }}>
          <span>✓</span>
          <span>Same terminal side at {norm}&deg;</span>
        </div>
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Formula */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
          General form
        </div>
        <div style={{ padding: "9px 12px", borderRadius: "8px", background: panelBg, border: `1.5px solid ${border}`, fontFamily: "monospace", fontSize: "12px", color: textPri, lineHeight: "1.7" }}>
          <div style={{ color: textSec }}>{formatGeneral(baseAngle)}</div>
          <div style={{ color: AMBER, fontWeight: "700" }}>
            n = {offset} → {coterminal}&deg;
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Key insight */}
      <div style={{ padding: "9px 12px", borderRadius: "9px", background: panelBg, border: `1.5px solid ${border}`, fontSize: "11px", color: textSec, lineHeight: "1.5" }}>
        <strong style={{ color: textPri }}>Key fact: </strong>
        sin({baseAngle}&deg;) = sin({coterminal}&deg;), cos({baseAngle}&deg;) = cos({coterminal}&deg;). Trig functions are periodic with period 360&deg;.
      </div>
    </div>
  );
}

// ─── Shared card ──────────────────────────────────────────────────────────────

export function CoterminalAnglesCard({ dark = false, explanation }) {
  const exp = explanation || DEFAULT_EXPLANATION;

  const [baseAngle, setBaseAngle] = useState(60);
  const [offset,    setOffset]    = useState(1);
  const svgRef   = useRef(null);
  const dragging = useRef(false);

  const getAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale - CX;
    const py    = (e.clientY - rect.top)  * scale - CY;
    let deg = Math.atan2(-py, px) * (180 / Math.PI);
    if (deg < 0) deg += 360;
    return snapAngle(deg);
  }, []);

  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    setBaseAngle(getAngle(e));
  }, [getAngle]);

  useEffect(() => {
    const onMove = (e) => { if (dragging.current) setBaseAngle(getAngle(e)); };
    const onUp   = ()  => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup",   onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup",   onUp);
    };
  }, [getAngle]);

  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";
  const panelBg = dark ? "#0f172a" : "#f1f5f9";
  const sceneBg = dark ? "#0f172a" : "#f1f5f9";

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "420px" }}>
      {/* Scene 2/3 */}
      <div style={{ flex: "0 0 66.666%", background: sceneBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px", touchAction: "none", userSelect: "none", borderRight: `1.5px solid ${border}`, gap: "12px" }}>
        <Scene
          baseAngle={baseAngle}
          offset={offset}
          dark={dark}
          onPointerDown={onPointerDown}
          svgRef={svgRef}
        />
        {/* Offset controls below scene */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <OffsetButton label="−" onClick={() => setOffset(o => Math.max(o - 1, -3))} disabled={offset <= -3} border={border} textSec={textSec} />
          <div style={{ textAlign: "center", minWidth: "120px" }}>
            <div style={{ fontSize: "11px", color: textSec, marginBottom: "2px" }}>
              n = <span style={{ color: offset === 0 ? textSec : AMBER, fontWeight: "700" }}>{offset}</span>
              <span style={{ color: textSec, marginLeft: "6px" }}>full rotation{Math.abs(offset) !== 1 ? "s" : ""}</span>
            </div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: AMBER }}>
              {baseAngle} + ({offset} × 360°) = {baseAngle + offset * 360}&deg;
            </div>
          </div>
          <OffsetButton label="+" onClick={() => setOffset(o => Math.min(o + 1, 3))} disabled={offset >= 3}  border={border} textSec={textSec} />
        </div>
      </div>

      {/* Explanation 1/3 */}
      <div style={{ flex: "0 0 33.333%", padding: "20px 16px", overflowY: "auto" }}>
        <ExplanationPanel
          explanation={exp}
          baseAngle={baseAngle}
          offset={offset}
          dark={dark}
          border={border}
          textPri={textPri}
          textSec={textSec}
          panelBg={panelBg}
        />
      </div>
    </div>
  );
}

// ─── Default export (standalone page) ────────────────────────────────────────

export default function CoterminalAnglesWrapper({ explanation } = {}) {
  const [dark, setDark] = useState(false);

  const bg      = dark ? "#0f172a" : "#f8fafc";
  const surface = dark ? "#1e293b" : "#ffffff";
  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";

  return (
    <div style={{ minHeight: "100vh", background: bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 16px", fontFamily: "system-ui, -apple-system, sans-serif", transition: "background 0.2s" }}>
      <div style={{ width: "100%", maxWidth: "900px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>Coterminal Angles</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>Drag to set the base angle — use +/− to add full rotations</p>
        </div>
        <button onClick={() => setDark(d => !d)} style={{ padding: "6px 14px", borderRadius: "8px", border: `1.5px solid ${border}`, background: surface, color: textSec, fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <div style={{ width: "100%", maxWidth: "900px", background: surface, borderRadius: "20px", border: `1.5px solid ${border}`, boxShadow: dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)", overflow: "hidden" }}>
        <CoterminalAnglesCard dark={dark} explanation={explanation} />
      </div>
    </div>
  );
}