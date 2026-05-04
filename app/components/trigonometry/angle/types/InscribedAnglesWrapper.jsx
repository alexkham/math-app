"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ─── Math helpers ─────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;
const toDeg = (rad) => (rad * 180) / Math.PI;

const polar = (cx, cy, r, angleDeg) => ({
  x: cx + r * Math.cos(toRad(angleDeg)),
  y: cy - r * Math.sin(toRad(angleDeg)),
});

const ff = (n) => n.toFixed(3);

const ccwDelta = (from, to) => ((to - from) % 360 + 360) % 360;

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

/** Angle of a point relative to center, in math convention [0,360) */
function angleOf(cx, cy, px, py) {
  let deg = toDeg(Math.atan2(-(py - cy), px - cx));
  if (deg < 0) deg += 360;
  return deg;
}

/** Snap to nearest 5° */
function snap5(raw) {
  return Math.round(raw / 5) * 5;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SZ  = 320;
const CX  = SZ / 2;
const CY  = SZ / 2;
const R   = 118;   // circle radius
const ARC_C = 44;  // central angle arc radius
const ARC_I = 32;  // inscribed angle arc radius (at vertex P)

const BLUE      = "#2563eb";
const AMBER     = "#d97706";
const GREEN     = "#16a34a";
const BLUE_BG   = "rgba(37,99,235,0.10)";
const AMBER_BG  = "rgba(217,119,6,0.10)";
const GREEN_BG  = "rgba(22,163,74,0.15)";

const MODES = ["both", "central", "inscribed"];
const MODE_LABELS = { both: "Both", central: "Central only", inscribed: "Inscribed only" };

// ─── Constrain P to major arc ─────────────────────────────────────────────────

/**
 * Ensure P stays on the major arc (the arc NOT between A and B CCW).
 * If P drifts onto the minor arc, clamp it just past B (with a small gap).
 */
function constrainP(pAngle, aAngle, bAngle) {
  const gap   = 8; // degrees buffer from A and B
  const minor = ccwDelta(aAngle, bAngle); // arc from A to B CCW
  const inMinor = ccwDelta(aAngle, pAngle) < minor;
  if (!inMinor) return pAngle;
  // Clamp to whichever boundary is closer
  const distToA = Math.min(ccwDelta(pAngle, aAngle), ccwDelta(aAngle, pAngle));
  const distToB = Math.min(ccwDelta(pAngle, bAngle), ccwDelta(bAngle, pAngle));
  return distToA < distToB
    ? ((aAngle - gap) + 360) % 360
    : ((bAngle + gap) + 360) % 360;
}

// ─── Compute inscribed angle at P ─────────────────────────────────────────────

/**
 * The inscribed angle at P subtended by arc AB.
 * We compute it as half the central angle (CCW arc from A to B).
 * This is always exact for a point on the major arc.
 */
function computeInscribed(centralDeg) {
  return centralDeg / 2;
}

// ─── Drag handle ─────────────────────────────────────────────────────────────

function Handle({ cx, cy, r, angle, color, label, onPointerDown, fs }) {
  const pt = polar(cx, cy, r, angle);
  const lp = polar(cx, cy, r + 18, angle);
  return (
    <g onPointerDown={onPointerDown} style={{ cursor: "grab", touchAction: "none" }}>
      <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
      <circle cx={pt.x} cy={pt.y} r={8}  fill={color} opacity={0.92} stroke="white" strokeWidth={2} />
      <text
        x={lp.x} y={lp.y}
        textAnchor="middle" dominantBaseline="central"
        fontSize={12} fontWeight="700" fill={color} style={fs}
      >
        {label}
      </text>
    </g>
  );
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ aAngle, bAngle, pAngle, mode, dark, onADown, onBDown, onPDown }) {
  const centralDeg   = ccwDelta(aAngle, bAngle);
  const inscribedDeg = computeInscribed(centralDeg);

  const ptA = polar(CX, CY, R, aAngle);
  const ptB = polar(CX, CY, R, bAngle);
  const ptP = polar(CX, CY, R, pAngle);

  // Inscribed angle arc: from PA direction to PB direction
  const paAngle = angleOf(ptP.x, ptP.y, ptA.x, ptA.y);
  const pbAngle = angleOf(ptP.x, ptP.y, ptB.x, ptB.y);

  // Pick the short arc for inscribed angle display
  const inscDelta = ccwDelta(paAngle, pbAngle);
  let inscFrom = paAngle, inscTo = pbAngle;
  if (inscDelta > 180) { inscFrom = pbAngle; inscTo = paAngle; }
  const inscMid = inscFrom + ccwDelta(inscFrom, inscTo) / 2;
  const inscLabelPos = polar(ptP.x, ptP.y, ARC_I + 16, inscMid);

  // Central angle label
  const centralMid = aAngle + centralDeg / 2;
  const centralLabelPos = polar(CX, CY, ARC_C + 18, centralMid);

  const showCentral   = mode === "both" || mode === "central";
  const showInscribed = mode === "both" || mode === "inscribed";

  const subColor = dark ? "#475569" : "#94a3b8";
  const fs = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  return (
    <svg
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      style={{ display: "block", touchAction: "none" }}
    >
      {/* ── Circle ── */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={subColor} strokeWidth={1.5} />

      {/* ── Intercepted arc (green) ── */}
      <path
        d={arcPath(CX, CY, R, aAngle, bAngle)}
        fill="none" stroke={GREEN} strokeWidth={4}
        strokeLinecap="round" opacity={0.75}
      />

      {/* ── Central angle sector + arc ── */}
      {showCentral && (
        <>
          <path
            d={sectorPath(CX, CY, ARC_C, aAngle, bAngle)}
            fill={BLUE_BG} stroke="none"
          />
          <path
            d={arcPath(CX, CY, ARC_C, aAngle, bAngle)}
            fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"
          />
          {/* Central arms */}
          <line x1={CX} y1={CY} x2={ptA.x} y2={ptA.y}
            stroke={BLUE} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
          <line x1={CX} y1={CY} x2={ptB.x} y2={ptB.y}
            stroke={BLUE} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
          {/* Central dot */}
          <circle cx={CX} cy={CY} r={5} fill={BLUE} />
          {/* Central label */}
          <text
            x={centralLabelPos.x} y={centralLabelPos.y}
            textAnchor="middle" dominantBaseline="central"
            fontSize={12} fontWeight="700" fill={BLUE} style={fs}
          >
            {Math.round(centralDeg)}&deg;
          </text>
        </>
      )}

      {/* ── Inscribed angle sector + arms ── */}
      {showInscribed && (
        <>
          {/* Inscribed arms */}
          <line x1={ptP.x} y1={ptP.y} x2={ptA.x} y2={ptA.y}
            stroke={AMBER} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
          <line x1={ptP.x} y1={ptP.y} x2={ptB.x} y2={ptB.y}
            stroke={AMBER} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
          {/* Inscribed arc */}
          <path
            d={arcPath(ptP.x, ptP.y, ARC_I, inscFrom, inscTo)}
            fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round"
          />
          {/* Inscribed sector fill */}
          <path
            d={sectorPath(ptP.x, ptP.y, ARC_I, inscFrom, inscTo)}
            fill={AMBER_BG} stroke="none"
          />
          {/* Inscribed label */}
          <text
            x={inscLabelPos.x} y={inscLabelPos.y}
            textAnchor="middle" dominantBaseline="central"
            fontSize={12} fontWeight="700" fill={AMBER} style={fs}
          >
            {Math.round(inscribedDeg)}&deg;
          </text>
        </>
      )}

      {/* ── Drag handles ── */}
      <Handle cx={CX} cy={CY} r={R} angle={aAngle} color={GREEN}  label="A" onPointerDown={onADown} fs={fs} />
      <Handle cx={CX} cy={CY} r={R} angle={bAngle} color={GREEN}  label="B" onPointerDown={onBDown} fs={fs} />
      <Handle cx={CX} cy={CY} r={R} angle={pAngle} color={AMBER}  label="P" onPointerDown={onPDown} fs={fs} />
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
        padding:      "12px 14px",
        textAlign:    "center",
      }}
    >
      <div style={{ fontSize: "11px", fontWeight: "600", color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "2px" }}>
        {label}
      </div>
      <div style={{ fontSize: "10px", color, opacity: 0.6, marginBottom: "5px" }}>
        {sublabel}
      </div>
      <div style={{ fontSize: "36px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>
        {value}&deg;
      </div>
    </div>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function InscribedAnglesWrapper() {
  const [aAngle, setAAngle] = useState(40);
  const [bAngle, setBAngle] = useState(160);
  const [pAngle, setPAngle] = useState(260);
  const [mode,   setMode]   = useState("both");
  const [dark,   setDark]   = useState(false);

  const svgRef   = useRef(null);
  const dragging = useRef(null); // "A" | "B" | "P" | null

  // Keep angle refs for use inside move handler
  const aRef = useRef(aAngle);
  const bRef = useRef(bAngle);
  useEffect(() => { aRef.current = aAngle; }, [aAngle]);
  useEffect(() => { bRef.current = bAngle; }, [bAngle]);

  const centralDeg   = ccwDelta(aAngle, bAngle);
  const inscribedDeg = computeInscribed(centralDeg);
  const isDiameter   = Math.abs(centralDeg - 180) < 3;

  // ── Pointer → angle on circle ─────────────────────────────────────────────

  const getSVGAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale;
    const py    = (e.clientY - rect.top)  * scale;
    return snap5(angleOf(CX, CY, px, py));
  }, []);

  // ── Pointer down on each handle ───────────────────────────────────────────

  const onADown = useCallback((e) => {
    e.preventDefault(); e.stopPropagation();
    dragging.current = "A";
    setAAngle(getSVGAngle(e));
  }, [getSVGAngle]);

  const onBDown = useCallback((e) => {
    e.preventDefault(); e.stopPropagation();
    dragging.current = "B";
    setBAngle(getSVGAngle(e));
  }, [getSVGAngle]);

  const onPDown = useCallback((e) => {
    e.preventDefault(); e.stopPropagation();
    dragging.current = "P";
    const raw = getSVGAngle(e);
    setPAngle(constrainP(raw, aRef.current, bRef.current));
  }, [getSVGAngle]);

  // ── Window move / up ──────────────────────────────────────────────────────

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const raw = getSVGAngle(e);
      if      (dragging.current === "A") setAAngle(raw);
      else if (dragging.current === "B") setBAngle(raw);
      else if (dragging.current === "P") setPAngle(constrainP(raw, aRef.current, bRef.current));
    };
    const onUp = () => { dragging.current = null; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup",   onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup",   onUp);
    };
  }, [getSVGAngle]);

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
            Central &amp; Inscribed Angles
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Drag A and B to set the arc &mdash; drag P along the circle
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
            aAngle={aAngle}
            bAngle={bAngle}
            pAngle={pAngle}
            mode={mode}
            dark={dark}
            onADown={onADown}
            onBDown={onBDown}
            onPDown={onPDown}
          />
        </div>

        {/* Info panel */}
        <div
          style={{
            flex:          "1 1 280px",
            padding:       "28px 24px",
            display:       "flex",
            flexDirection: "column",
            gap:           "18px",
          }}
        >
          {/* Mode toggle */}
          <div
            style={{
              display:      "flex",
              background:   panelBg,
              border:       `1.5px solid ${border}`,
              borderRadius: "10px",
              padding:      "3px",
              gap:          "3px",
            }}
          >
            {MODES.map((m) => {
              const active = mode === m;
              return (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  style={{
                    flex:         1,
                    padding:      "6px 8px",
                    borderRadius: "7px",
                    border:       "none",
                    background:   active ? BLUE : "transparent",
                    color:        active ? "#fff" : textSec,
                    fontSize:     "11px",
                    fontWeight:   active ? "700" : "500",
                    fontFamily:   "system-ui, sans-serif",
                    cursor:       "pointer",
                    transition:   "all 0.15s",
                    whiteSpace:   "nowrap",
                  }}
                >
                  {MODE_LABELS[m]}
                </button>
              );
            })}
          </div>

          {/* Value cards */}
          <div style={{ display: "flex", gap: "10px" }}>
            <ValueCard
              label="Central"
              sublabel="vertex at center"
              value={Math.round(centralDeg)}
              color={BLUE}
              panelBg={panelBg}
            />
            <ValueCard
              label="Inscribed"
              sublabel="vertex on circle"
              value={Math.round(inscribedDeg)}
              color={AMBER}
              panelBg={panelBg}
            />
          </div>

          {/* Theorem */}
          <div
            style={{
              display:        "flex",
              alignItems:     "baseline",
              gap:            "6px",
              fontSize:       "17px",
              fontWeight:     "700",
              justifyContent: "center",
              fontFamily:     "system-ui, sans-serif",
            }}
          >
            <span style={{ color: AMBER }}>{Math.round(inscribedDeg)}&deg;</span>
            <span style={{ color: textPri, opacity: 0.4 }}>=</span>
            <span style={{ color: textPri, fontSize: "13px", fontWeight: "500", opacity: 0.7 }}>½ &times;</span>
            <span style={{ color: BLUE }}>{Math.round(centralDeg)}&deg;</span>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Description */}
          <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.65", color: textSec }}>
            The <strong style={{ color: BLUE }}>central angle</strong> has its vertex at the center.
            The <strong style={{ color: AMBER }}>inscribed angle</strong> has its vertex on the circle.
            Both intercept the same <strong style={{ color: GREEN }}>arc AB</strong>.
            The inscribed angle is always exactly half the central angle.
          </p>

          {/* Theorem callout */}
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
            <strong style={{ color: textPri }}>Inscribed angle theorem:</strong> the inscribed
            angle is always half the central angle that subtends the same arc.
            {isDiameter && (
              <span style={{ color: GREEN, display: "block", marginTop: "6px", fontWeight: "600" }}>
                ✓ Arc AB is a semicircle — inscribed angle = 90&deg;
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}