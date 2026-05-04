"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ─── Math helpers ─────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;

const polarToSVG = (cx, cy, r, angleDeg) => {
  const rad = toRad(angleDeg);
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
};

const ccwDelta = (from, to) => ((to - from) % 360 + 360) % 360;

const buildArcPath = (cx, cy, r, from, to) => {
  const delta = ccwDelta(from, to);
  const s = polarToSVG(cx, cy, r, from);
  const e = polarToSVG(cx, cy, r, to);
  const la = delta > 180 ? 1 : 0;
  const f = (n) => n.toFixed(3);
  return `M ${f(s.x)} ${f(s.y)} A ${r} ${r} 0 ${la} 0 ${f(e.x)} ${f(e.y)}`;
};

const buildSectorPath = (cx, cy, r, from, to) =>
  `${buildArcPath(cx, cy, r, from, to)} L ${cx} ${cy} Z`;

const buildBoxPath = (cx, cy, a1, a2, size = 14) => {
  const p1 = polarToSVG(cx, cy, size, a1);
  const p2 = polarToSVG(cx, cy, size, a2);
  const corner = { x: p1.x + p2.x - cx, y: p1.y + p2.y - cy };
  const f = (n) => n.toFixed(2);
  return `M ${f(p1.x)} ${f(p1.y)} L ${f(corner.x)} ${f(corner.y)} L ${f(p2.x)} ${f(p2.y)}`;
};

// ─── Angle type metadata ──────────────────────────────────────────────────────

const ANGLE_TYPES = [
  {
    name:    "Zero",
    cond:    (a) => a === 0,
    range:   "θ = 0°",
    desc:    "Both arms overlap completely. No rotation has occurred.",
    color:   "#64748b",
    bg:      "rgba(100,116,139,0.11)",
    preset:  0,
  },
  {
    name:    "Acute",
    cond:    (a) => a > 0 && a < 90,
    range:   "0° < θ < 90°",
    desc:    "Less than a quarter turn. Sharper than a right angle.",
    color:   "#2563eb",
    bg:      "rgba(37,99,235,0.11)",
    preset:  45,
  },
  {
    name:    "Right",
    cond:    (a) => a === 90,
    range:   "θ = 90°",
    desc:    "Exactly a quarter turn. Arms are perfectly perpendicular.",
    color:   "#16a34a",
    bg:      "rgba(22,163,74,0.11)",
    preset:  90,
  },
  {
    name:    "Obtuse",
    cond:    (a) => a > 90 && a < 180,
    range:   "90° < θ < 180°",
    desc:    "More than a quarter turn but less than a half turn.",
    color:   "#d97706",
    bg:      "rgba(217,119,6,0.11)",
    preset:  130,
  },
  {
    name:    "Straight",
    cond:    (a) => a === 180,
    range:   "θ = 180°",
    desc:    "Exactly a half turn. Both arms form a straight line.",
    color:   "#dc2626",
    bg:      "rgba(220,38,38,0.11)",
    preset:  180,
  },
  {
    name:    "Reflex",
    cond:    (a) => a > 180 && a < 360,
    range:   "180° < θ < 360°",
    desc:    "More than a half turn. The arc wraps around the long way.",
    color:   "#9333ea",
    bg:      "rgba(147,51,234,0.11)",
    preset:  270,
  },
  {
    name:    "Full",
    cond:    (a) => a === 360,
    range:   "θ = 360°",
    desc:    "A complete rotation. Both arms overlap again after a full turn.",
    color:   "#0891b2",
    bg:      "rgba(8,145,178,0.11)",
    preset:  360,
  },
];

const SNAP_TARGETS  = [0, 90, 180, 270, 360];
const SNAP_THRESH   = 4;
const SVG_SIZE      = 340;
const ARM_LEN       = 120;
const ARC_R         = 56;
const VX            = SVG_SIZE / 2;
const VY            = SVG_SIZE / 2;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMeta(a) {
  return ANGLE_TYPES.find((t) => t.cond(a)) ?? ANGLE_TYPES[1];
}

function snapAngle(raw) {
  for (const t of SNAP_TARGETS) {
    if (Math.abs(raw - t) <= SNAP_THRESH) return t;
  }
  return Math.round(raw);
}

function angleFromPointer(px, py) {
  let deg = Math.atan2(-py, px) * (180 / Math.PI);
  if (deg < 0) deg += 360;
  return snapAngle(deg);
}

// ─── Small sub-components ─────────────────────────────────────────────────────

function TypeBadge({ meta }) {
  return (
    <span
      style={{
        display:       "inline-block",
        padding:       "3px 11px",
        borderRadius:  "999px",
        fontSize:      "11px",
        fontWeight:    "700",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color:         meta.color,
        background:    meta.bg,
        border:        `1.5px solid ${meta.color}`,
        fontFamily:    "system-ui, sans-serif",
        transition:    "all 0.2s",
      }}
    >
      {meta.name}
    </span>
  );
}

function RangeBadge({ meta }) {
  return (
    <span
      style={{
        display:      "inline-block",
        padding:      "2px 10px",
        borderRadius: "6px",
        fontSize:     "12px",
        fontWeight:   "600",
        fontFamily:   "monospace",
        color:        meta.color,
        background:   meta.bg,
        transition:   "all 0.2s",
      }}
    >
      {meta.range}
    </span>
  );
}

function PresetChip({ type, active, onClick, border }) {
  return (
    <button
      onClick={() => onClick(type.preset)}
      style={{
        padding:      "5px 13px",
        borderRadius: "8px",
        border:       `1.5px solid ${active ? type.color : border}`,
        background:   active ? type.bg : "transparent",
        color:        active ? type.color : "#64748b",
        fontSize:     "12px",
        fontWeight:   active ? "700" : "500",
        fontFamily:   "system-ui, sans-serif",
        cursor:       "pointer",
        transition:   "all 0.15s",
        whiteSpace:   "nowrap",
      }}
    >
      {type.name}
    </button>
  );
}

// ─── SVG scene ────────────────────────────────────────────────────────────────

function AngleScene({ angle, meta, onPointerDown }) {
  const isZero  = angle === 0;
  const isFull  = angle === 360;
  const a2      = isZero ? 0.001 : angle;
  const delta   = ccwDelta(0, a2);
  const isRight = Math.abs(delta - 90) < 0.5;

  const arm1End  = polarToSVG(VX, VY, ARM_LEN, 0);
  const arm2End  = polarToSVG(VX, VY, ARM_LEN, angle);
  const labelPos = polarToSVG(VX, VY, ARC_R + 30, delta / 2);
  const c        = meta.color;
  const bg       = meta.bg;

  const fontStyle = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    userSelect: "none",
  };

  return (
    <svg
      width={SVG_SIZE}
      height={SVG_SIZE}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      onPointerDown={onPointerDown}
      style={{ display: "block", touchAction: "none", cursor: "crosshair" }}
    >
      {/* Sector fill */}
      {!isFull && delta > 0 && (
        <path
          d={buildSectorPath(VX, VY, ARC_R, 0, a2)}
          fill={bg}
          stroke="none"
        />
      )}

      {/* Full circle ring */}
      {isFull && (
        <circle
          cx={VX} cy={VY} r={ARC_R}
          fill="none"
          stroke={c}
          strokeWidth={2.5}
        />
      )}

      {/* Arc or right-angle box */}
      {!isFull && delta > 0 && !isRight && (
        <path
          d={buildArcPath(VX, VY, ARC_R, 0, a2)}
          fill="none"
          stroke={c}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      )}
      {!isFull && isRight && (
        <path
          d={buildBoxPath(VX, VY, 0, a2)}
          fill="none"
          stroke={c}
          strokeWidth={2.5}
          strokeLinejoin="miter"
        />
      )}

      {/* Arm 1 */}
      <line
        x1={VX} y1={VY}
        x2={arm1End.x} y2={arm1End.y}
        stroke={c} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* Arm 2 */}
      <line
        x1={VX} y1={VY}
        x2={arm2End.x} y2={arm2End.y}
        stroke={c} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* Vertex */}
      <circle cx={VX} cy={VY} r={4.5} fill={c} />

      {/* Arm endpoints */}
      <circle cx={arm1End.x} cy={arm1End.y} r={3.5} fill={c} opacity={0.5} />
      <circle cx={arm2End.x} cy={arm2End.y} r={3.5} fill={c} opacity={0.5} />

      {/* Arc label */}
      {!isFull && delta > 0 && !isRight && (
        <text
          x={labelPos.x} y={labelPos.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={13}
          fontWeight="700"
          fill={c}
          style={fontStyle}
        >
          {angle}&deg;
        </text>
      )}

      {/* Drag handle */}
      <g style={{ cursor: "grab" }}>
        <circle cx={arm2End.x} cy={arm2End.y} r={16} fill="transparent" />
        <circle
          cx={arm2End.x} cy={arm2End.y} r={8}
          fill={c} opacity={0.92}
          stroke="white" strokeWidth={2}
        />
      </g>
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function BasicAnglesWrapper() {
  const [angle, setAngle] = useState(45);
  const [dark,  setDark]  = useState(false);
  const svgRef   = useRef(null);
  const dragging = useRef(false);
  const meta     = getMeta(angle);

  // ── Pointer handling ──────────────────────────────────────────────────────

  const getAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SVG_SIZE / rect.width;
    const px    = (e.clientX - rect.left) * scale - VX;
    const py    = (e.clientY - rect.top)  * scale - VY;
    return angleFromPointer(px, py);
  }, []);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    setAngle(getAngle(e));
  }, [getAngle]);

  useEffect(() => {
    const onMove = (e) => { if (dragging.current) setAngle(getAngle(e)); };
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
          <h1
            style={{
              margin:        0,
              fontSize:      "22px",
              fontWeight:    "800",
              color:         textPri,
              letterSpacing: "-0.02em",
            }}
          >
            Angle Types
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Drag the handle or pick a preset
          </p>
        </div>
        <button
          onClick={() => setDark((d) => !d)}
          style={{
            padding:      "6px 14px",
            borderRadius: "8px",
            border:       `1.5px solid ${border}`,
            background:   surface,
            color:        textSec,
            fontSize:     "13px",
            cursor:       "pointer",
            fontFamily:   "inherit",
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
          boxShadow:    dark
            ? "0 4px 40px rgba(0,0,0,0.45)"
            : "0 4px 40px rgba(0,0,0,0.07)",
          display:      "flex",
          flexWrap:     "wrap",
          overflow:     "hidden",
        }}
      >
        {/* SVG panel */}
        <div
          ref={svgRef}
          style={{
            flex:            "0 0 340px",
            background:      panelBg,
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            padding:         "20px",
            touchAction:     "none",
            userSelect:      "none",
            transition:      "background 0.2s",
          }}
        >
          <AngleScene
            angle={angle}
            meta={meta}
            onPointerDown={handlePointerDown}
          />
        </div>

        {/* Info panel */}
        <div
          style={{
            flex:           "1 1 280px",
            padding:        "32px 28px",
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "center",
            gap:            "20px",
          }}
        >
          {/* Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <TypeBadge meta={meta} />
            <RangeBadge meta={meta} />
          </div>

          {/* Live degree */}
          <div>
            <div
              style={{
                fontSize:      "72px",
                fontWeight:    "900",
                lineHeight:    1,
                color:         meta.color,
                letterSpacing: "-0.04em",
                transition:    "color 0.2s",
              }}
            >
              {angle}
            </div>
            <div style={{ fontSize: "15px", color: textSec, marginTop: "4px" }}>
              degrees
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              margin:     0,
              fontSize:   "14px",
              lineHeight: "1.65",
              color:      textSec,
            }}
          >
            {meta.desc}
          </p>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Presets */}
          <div>
            <div
              style={{
                fontSize:      "11px",
                fontWeight:    "600",
                color:         textSec,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom:  "10px",
              }}
            >
              Presets
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {ANGLE_TYPES.map((t) => (
                <PresetChip
                  key={t.name}
                  type={t}
                  active={meta.name === t.name}
                  onClick={setAngle}
                  border={border}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}