"use client";

import { useState } from "react";

// ─── Math helpers ─────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;

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

// ─── Polygon helpers ──────────────────────────────────────────────────────────

function polygonVertices(cx, cy, r, n) {
  const verts = [];
  for (let i = 0; i < n; i++) {
    const angleDeg = 90 + (360 / n) * i;
    verts.push(polar(cx, cy, r, angleDeg));
  }
  return verts;
}

const interiorAngle = (n) => ((n - 2) * 180) / n;
const exteriorAngle = (n) => 360 / n;

const POLYGON_NAMES = {
  3:  "Triangle",      4: "Quadrilateral", 5: "Pentagon",
  6:  "Hexagon",       7: "Heptagon",      8: "Octagon",
  9:  "Nonagon",      10: "Decagon",      11: "Hendecagon",
  12: "Dodecagon",
};

// ─── Colors ───────────────────────────────────────────────────────────────────

const BLUE      = "#2563eb";
const AMBER     = "#d97706";
const BLUE_BG   = "rgba(37,99,235,0.09)";
const AMBER_BG  = "rgba(217,119,6,0.13)";

// ─── Constants ────────────────────────────────────────────────────────────────

const SZ      = 320;
const CX      = SZ / 2;
const CY      = SZ / 2;
const R       = 112;   // circumradius
const ARC_INT = 24;    // interior angle arc radius
const ARC_EXT = 36;    // exterior angle arc radius
const EXT_RAY = 52;    // length of the extended ray beyond vertex

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ n, highlighted, dark, onVertexClick }) {
  const verts    = polygonVertices(CX, CY, R, n);
  const intAngle = interiorAngle(n);
  const extAngle = exteriorAngle(n);
  const subColor = dark ? "#475569" : "#94a3b8";
  const fs = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  return (
    <svg
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      style={{ display: "block" }}
    >
      {/* ── Polygon fill ── */}
      <polygon
        points={verts.map((v) => `${ff(v.x)},${ff(v.y)}`).join(" ")}
        fill={BLUE_BG}
        stroke="none"
      />

      {/* ── Sides ── */}
      {verts.map((v, i) => {
        const next = verts[(i + 1) % n];
        return (
          <line
            key={`side-${i}`}
            x1={ff(v.x)} y1={ff(v.y)}
            x2={ff(next.x)} y2={ff(next.y)}
            stroke={BLUE} strokeWidth={2} strokeLinecap="round"
          />
        );
      })}

      {/* ── Per-vertex elements ── */}
      {verts.map((v, i) => {
        const prev    = verts[(i - 1 + n) % n];
        const next    = verts[(i + 1) % n];
        const isHL    = i === highlighted;

        // Direction angles from this vertex
        const toPrevDeg = Math.atan2(-(prev.y - v.y), prev.x - v.x) * (180 / Math.PI);
        const toNextDeg = Math.atan2(-(next.y - v.y), next.x - v.x) * (180 / Math.PI);

        const a1 = ((toPrevDeg % 360) + 360) % 360;
        const a2 = ((toNextDeg % 360) + 360) % 360;

        // Interior: short CCW arc from a1 to a2
        const delta = ((a2 - a1) % 360 + 360) % 360;
        let intFrom = a1, intTo = a2;
        if (delta > 180) { intFrom = a2; intTo = a1; }
        const intMid = intFrom + ccwDelta(intFrom, intTo) / 2;

        // Exterior: the extension of the prev→v side beyond v
        // Direction from prev to v, continued past v
        const extDirDeg = Math.atan2(-(v.y - prev.y), v.x - prev.x) * (180 / Math.PI);
        const extDirNorm = ((extDirDeg % 360) + 360) % 360;

        // Extension ray endpoint
        const extEnd = polar(v.x, v.y, EXT_RAY, extDirNorm);

        // Exterior angle: from extDirNorm to toNextDeg (CCW, short arc)
        const extDelta = ccwDelta(extDirNorm, a2);
        // For convex polygon the exterior angle is always ≤ 180
        // We use the short arc
        let extFrom = extDirNorm, extTo = a2;
        if (extDelta > 180) { extFrom = a2; extTo = extDirNorm; }
        const extMid = extFrom + ccwDelta(extFrom, extTo) / 2;
        const extLabelPos = polar(v.x, v.y, ARC_EXT + 16, extMid);
        const intLabelPos = polar(v.x, v.y, ARC_INT + 14, intMid);

        return (
          <g key={`vertex-${i}`}>
            {isHL && (
              <>
                {/* Extension ray */}
                <line
                  x1={ff(v.x)} y1={ff(v.y)}
                  x2={ff(extEnd.x)} y2={ff(extEnd.y)}
                  stroke={AMBER} strokeWidth={2}
                  strokeDasharray="5 3" strokeLinecap="round"
                />

                {/* Interior angle sector + arc */}
                <path
                  d={sectorPath(v.x, v.y, ARC_INT, intFrom, intTo)}
                  fill={BLUE_BG} stroke="none"
                />
                <path
                  d={arcPath(v.x, v.y, ARC_INT, intFrom, intTo)}
                  fill="none" stroke={BLUE} strokeWidth={2} strokeLinecap="round"
                />

                {/* Exterior angle sector + arc */}
                <path
                  d={sectorPath(v.x, v.y, ARC_EXT, extFrom, extTo)}
                  fill={AMBER_BG} stroke="none"
                />
                <path
                  d={arcPath(v.x, v.y, ARC_EXT, extFrom, extTo)}
                  fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round"
                />

                {/* Interior label */}
                <text
                  x={intLabelPos.x} y={intLabelPos.y}
                  textAnchor="middle" dominantBaseline="central"
                  fontSize={11} fontWeight="700" fill={BLUE} style={fs}
                >
                  {Math.round(intAngle)}&deg;
                </text>

                {/* Exterior label */}
                <text
                  x={extLabelPos.x} y={extLabelPos.y}
                  textAnchor="middle" dominantBaseline="central"
                  fontSize={12} fontWeight="700" fill={AMBER} style={fs}
                >
                  {Math.round(extAngle)}&deg;
                </text>
              </>
            )}

            {/* Small exterior tick at non-highlighted vertices */}
            {!isHL && (
              <path
                d={arcPath(v.x, v.y, ARC_INT, extDirNorm, a2)}
                fill="none" stroke={AMBER} strokeWidth={1.5}
                strokeLinecap="round" opacity={0.35}
              />
            )}
          </g>
        );
      })}

      {/* ── Vertex dots ── */}
      {verts.map((v, i) => (
        <g
          key={`dot-${i}`}
          onClick={() => onVertexClick(i)}
          style={{ cursor: "pointer" }}
        >
          <circle cx={ff(v.x)} cy={ff(v.y)} r={14} fill="transparent" />
          <circle
            cx={ff(v.x)} cy={ff(v.y)}
            r={i === highlighted ? 7 : 5}
            fill={i === highlighted ? AMBER : subColor}
            opacity={i === highlighted ? 0.95 : 0.5}
            stroke={i === highlighted ? "white" : "none"}
            strokeWidth={2}
          />
        </g>
      ))}

      {/* ── Center sum hint ── */}
      <text
        x={CX} y={CY - 8}
        textAnchor="middle" dominantBaseline="central"
        fontSize={13} fontWeight="700" fill={AMBER} opacity={0.6}
        style={fs}
      >
        360&deg;
      </text>
      <text
        x={CX} y={CY + 10}
        textAnchor="middle" dominantBaseline="central"
        fontSize={9} fill={AMBER} opacity={0.45}
        style={fs}
      >
        always
      </text>
    </svg>
  );
}

// ─── Counter button ───────────────────────────────────────────────────────────

function CounterButton({ label, onClick, disabled, border, textSec }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width:          "36px",
        height:         "36px",
        borderRadius:   "8px",
        border:         `1.5px solid ${disabled ? "transparent" : border}`,
        background:     "transparent",
        color:          disabled ? "transparent" : textSec,
        fontSize:       "18px",
        cursor:         disabled ? "default" : "pointer",
        fontFamily:     "system-ui, sans-serif",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        transition:     "all 0.12s",
      }}
    >
      {label}
    </button>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function ExteriorAnglesWrapper() {
  const [n,           setN]           = useState(6);
  const [highlighted, setHighlighted] = useState(0);
  const [dark,        setDark]        = useState(false);

  const extAngle = exteriorAngle(n);
  const intAngle = interiorAngle(n);
  const name     = POLYGON_NAMES[n];

  const handleN = (delta) => {
    const next = Math.min(Math.max(n + delta, 3), 12);
    setN(next);
    setHighlighted(0);
  };

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
            Exterior Angles
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Adjust sides with +/&minus; &mdash; click a vertex to highlight its exterior angle
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
          style={{
            flex:           "0 0 320px",
            background:     panelBg,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            padding:        "16px",
            userSelect:     "none",
            transition:     "background 0.2s",
          }}
        >
          <Scene
            n={n}
            highlighted={highlighted}
            dark={dark}
            onVertexClick={setHighlighted}
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
          {/* Side counter */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CounterButton label="−" onClick={() => handleN(-1)} disabled={n <= 3}  border={border} textSec={textSec} />
            <div style={{ textAlign: "center", minWidth: "80px" }}>
              <div style={{ fontSize: "48px", fontWeight: "900", color: AMBER, lineHeight: 1, letterSpacing: "-0.04em" }}>{n}</div>
              <div style={{ fontSize: "11px", color: textSec, marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>sides</div>
            </div>
            <CounterButton label="+" onClick={() => handleN(1)}  disabled={n >= 12} border={border} textSec={textSec} />
            <div style={{ marginLeft: "8px" }}>
              <div style={{ fontSize: "16px", fontWeight: "700", color: textPri }}>{name}</div>
              <div style={{ fontSize: "12px", color: textSec, marginTop: "2px" }}>regular polygon</div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Formula */}
          <div
            style={{
              padding:      "12px 16px",
              borderRadius: "12px",
              background:   panelBg,
              border:       `1.5px solid ${border}`,
              fontFamily:   "monospace",
              fontSize:     "13px",
              color:        textPri,
              lineHeight:   "1.8",
            }}
          >
            <div style={{ color: textSec, fontSize: "11px", fontFamily: "system-ui, sans-serif", fontWeight: "600", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "6px" }}>
              Formula
            </div>
            <div><span style={{ color: textSec }}>Exterior angle = 360&deg; / n</span></div>
            <div>
              <span style={{ color: textSec }}>=&nbsp;</span>
              <span style={{ color: AMBER }}>360&deg; / {n}</span>
            </div>
            <div>
              <span style={{ color: textSec }}>=&nbsp;</span>
              <span style={{ color: AMBER, fontWeight: "700", fontSize: "15px" }}>
                {extAngle % 1 === 0 ? extAngle : extAngle.toFixed(2)}&deg;
              </span>
            </div>
          </div>

          {/* Value cards */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                flex: 1, background: panelBg, borderRadius: "12px",
                border: `1.5px solid ${AMBER}22`, padding: "12px 14px", textAlign: "center",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: "600", color: AMBER, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "5px" }}>
                Exterior
              </div>
              <div style={{ fontSize: "34px", fontWeight: "900", color: AMBER, lineHeight: 1, letterSpacing: "-0.03em" }}>
                {extAngle % 1 === 0 ? extAngle : extAngle.toFixed(1)}&deg;
              </div>
            </div>
            <div
              style={{
                flex: 1, background: panelBg, borderRadius: "12px",
                border: `1.5px solid ${BLUE}22`, padding: "12px 14px", textAlign: "center",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: "600", color: BLUE, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "5px" }}>
                Interior
              </div>
              <div style={{ fontSize: "34px", fontWeight: "900", color: BLUE, lineHeight: 1, letterSpacing: "-0.03em" }}>
                {intAngle % 1 === 0 ? intAngle : intAngle.toFixed(1)}&deg;
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Supplementary relationship */}
          <div
            style={{
              display:        "flex",
              alignItems:     "baseline",
              gap:            "6px",
              fontSize:       "15px",
              fontWeight:     "700",
              justifyContent: "center",
              fontFamily:     "system-ui, sans-serif",
            }}
          >
            <span style={{ color: BLUE }}>{Math.round(intAngle)}&deg;</span>
            <span style={{ color: textPri, opacity: 0.4 }}>+</span>
            <span style={{ color: AMBER }}>{Math.round(extAngle)}&deg;</span>
            <span style={{ color: textPri, opacity: 0.4 }}>=</span>
            <span style={{ color: textPri }}>180&deg;</span>
          </div>

          {/* Key theorem callout */}
          <div
            style={{
              padding:      "12px 16px",
              borderRadius: "12px",
              background:   "rgba(217,119,6,0.08)",
              border:       `1.5px solid ${AMBER}33`,
              fontSize:     "13px",
              color:        textSec,
              lineHeight:   "1.6",
            }}
          >
            <strong style={{ color: AMBER }}>Exterior angle theorem:</strong> the exterior
            angles of any convex polygon, one at each vertex, always sum to exactly{" "}
            <strong style={{ color: AMBER }}>360&deg;</strong> — regardless of the number of sides.
          </div>
        </div>
      </div>
    </div>
  );
}