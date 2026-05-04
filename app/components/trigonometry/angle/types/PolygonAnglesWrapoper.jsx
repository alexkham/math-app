"use client";

import { useState } from "react";

// ─── Math helpers ─────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;

const polar = (cx, cy, r, angleDeg) => ({
  x: cx + r * Math.cos(toRad(angleDeg)),
  y: cy - r * Math.sin(toRad(angleDeg)),
});

const ff = (n) => n.toFixed(3);

function arcPath(cx, cy, r, from, to, ccw = false) {
  const fromRad = toRad(from);
  const toRad2  = toRad(to);
  const sx = cx + r * Math.cos(fromRad);
  const sy = cy - r * Math.sin(fromRad);
  const ex = cx + r * Math.cos(toRad2);
  const ey = cy - r * Math.sin(toRad2);
  const delta = ((to - from) % 360 + 360) % 360;
  const la = delta > 180 ? 1 : 0;
  const sweep = ccw ? 1 : 0;
  return `M ${ff(sx)} ${ff(sy)} A ${r} ${r} 0 ${la} ${sweep} ${ff(ex)} ${ff(ey)}`;
}

function sectorPath(cx, cy, r, from, to) {
  return `${arcPath(cx, cy, r, from, to)} L ${cx} ${cy} Z`;
}

// ─── Polygon helpers ──────────────────────────────────────────────────────────

/**
 * Vertices of a regular n-gon centered at (cx,cy) with circumradius r.
 * First vertex points straight up (90° in math convention).
 */
function polygonVertices(cx, cy, r, n) {
  const verts = [];
  for (let i = 0; i < n; i++) {
    const angleDeg = 90 + (360 / n) * i;
    verts.push(polar(cx, cy, r, angleDeg));
  }
  return verts;
}

/** Interior angle of a regular n-gon in degrees */
const interiorAngle = (n) => ((n - 2) * 180) / n;

/** Sum of interior angles */
const angleSum = (n) => (n - 2) * 180;

// ─── Polygon names ────────────────────────────────────────────────────────────

const POLYGON_NAMES = {
  3:  "Triangle",
  4:  "Quadrilateral",
  5:  "Pentagon",
  6:  "Hexagon",
  7:  "Heptagon",
  8:  "Octagon",
  9:  "Nonagon",
  10: "Decagon",
  11: "Hendecagon",
  12: "Dodecagon",
};

// ─── Colors ───────────────────────────────────────────────────────────────────

const BLUE      = "#2563eb";
const BLUE_BG   = "rgba(37,99,235,0.11)";
const BLUE_MILD = "rgba(37,99,235,0.18)";

// ─── Scene constants ──────────────────────────────────────────────────────────

const SZ  = 320;
const CX  = SZ / 2;
const CY  = SZ / 2;
const R   = 120;  // circumradius
const ARC = 28;   // interior angle arc radius

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ n, highlighted, dark, onVertexClick }) {
  const verts   = polygonVertices(CX, CY, R, n);
  const intAngle = interiorAngle(n);
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

      {/* ── Interior angle arcs at every vertex ── */}
      {verts.map((v, i) => {
        const prev     = verts[(i - 1 + n) % n];
        const next     = verts[(i + 1) % n];
        const isHL     = i === highlighted;

        // Angle from vertex to prev and next neighbours
        const toPrev = Math.atan2(-(prev.y - v.y), prev.x - v.x) * (180 / Math.PI);
        const toNext = Math.atan2(-(next.y - v.y), next.x - v.x) * (180 / Math.PI);

        // Normalise to [0,360)
        const a1 = ((toPrev % 360) + 360) % 360;
        const a2 = ((toNext % 360) + 360) % 360;

        // We want the smaller (interior) sweep going from a1 to a2 CCW
        // For a convex polygon, the interior arc is always the short arc
        const delta = ((a2 - a1) % 360 + 360) % 360;
        const sweep = delta <= 180 ? delta : 360 - delta;
        // pick the correct from/to for the short CCW arc
        let from = a1, to = a2;
        if (delta > 180) { from = a2; to = a1; }

        const midAngle = from + sweep / 2;
        const lp = polar(v.x, v.y, ARC + 14, midAngle);

        return (
          <g key={`angle-${i}`}>
            {isHL && (
              <path
                d={sectorPath(v.x, v.y, ARC, from, to)}
                fill={BLUE_MILD}
                stroke="none"
              />
            )}
            <path
              d={arcPath(v.x, v.y, ARC, from, to)}
              fill="none"
              stroke={isHL ? BLUE : subColor}
              strokeWidth={isHL ? 2.5 : 1.5}
              strokeLinecap="round"
              opacity={isHL ? 1 : 0.5}
            />
            {isHL && (
              <text
                x={lp.x} y={lp.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="700"
                fill={BLUE}
                style={fs}
              >
                {Math.round(intAngle)}&deg;
              </text>
            )}
          </g>
        );
      })}

      {/* ── Center dot ── */}
      <circle cx={CX} cy={CY} r={3} fill={subColor} opacity={0.4} />

      {/* ── Radii to highlighted vertex ── */}
      {(() => {
        const v    = verts[highlighted];
        const prev = verts[(highlighted - 1 + n) % n];
        const next = verts[(highlighted + 1) % n];
        return (
          <>
            <line
              x1={ff(v.x)} y1={ff(v.y)} x2={ff(prev.x)} y2={ff(prev.y)}
              stroke={BLUE} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.4}
            />
            <line
              x1={ff(v.x)} y1={ff(v.y)} x2={ff(next.x)} y2={ff(next.y)}
              stroke={BLUE} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.4}
            />
          </>
        );
      })()}

      {/* ── Vertex dots ── */}
      {verts.map((v, i) => (
        <g
          key={`vert-${i}`}
          onClick={() => onVertexClick(i)}
          style={{ cursor: "pointer" }}
        >
          <circle cx={ff(v.x)} cy={ff(v.y)} r={14} fill="transparent" />
          <circle
            cx={ff(v.x)} cy={ff(v.y)} r={i === highlighted ? 7 : 5}
            fill={i === highlighted ? BLUE : subColor}
            opacity={i === highlighted ? 0.95 : 0.55}
            stroke={i === highlighted ? "white" : "none"}
            strokeWidth={2}
          />
        </g>
      ))}
    </svg>
  );
}

// ─── Side counter button ──────────────────────────────────────────────────────

function CounterButton({ label, onClick, disabled, border, textSec }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width:        "36px",
        height:       "36px",
        borderRadius: "8px",
        border:       `1.5px solid ${disabled ? "transparent" : border}`,
        background:   "transparent",
        color:        disabled ? "transparent" : textSec,
        fontSize:     "18px",
        lineHeight:   1,
        cursor:       disabled ? "default" : "pointer",
        fontFamily:   "system-ui, sans-serif",
        display:      "flex",
        alignItems:   "center",
        justifyContent: "center",
        transition:   "all 0.12s",
      }}
    >
      {label}
    </button>
  );
}

// ─── Reference table ──────────────────────────────────────────────────────────

function RefTable({ current, dark, border, textPri, textSec }) {
  const rows = [3, 4, 5, 6, 8, 10, 12];
  const bg   = dark ? "#0f172a" : "#f8fafc";

  return (
    <table
      style={{
        width:          "100%",
        borderCollapse: "collapse",
        fontSize:       "11px",
        fontFamily:     "system-ui, sans-serif",
      }}
    >
      <thead>
        <tr>
          {["n", "Name", "Angle", "Sum"].map((h) => (
            <th
              key={h}
              style={{
                padding:     "5px 8px",
                textAlign:   "left",
                color:       textSec,
                fontWeight:  "600",
                borderBottom: `1px solid ${border}`,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((nn) => {
          const isActive = nn === current;
          return (
            <tr
              key={nn}
              style={{
                background: isActive ? BLUE_BG : "transparent",
              }}
            >
              <td style={{ padding: "4px 8px", color: isActive ? BLUE : textSec, fontWeight: isActive ? "700" : "400" }}>{nn}</td>
              <td style={{ padding: "4px 8px", color: isActive ? BLUE : textSec, fontWeight: isActive ? "700" : "400" }}>{POLYGON_NAMES[nn]}</td>
              <td style={{ padding: "4px 8px", color: isActive ? BLUE : textSec, fontWeight: isActive ? "700" : "400", fontFamily: "monospace" }}>
                {interiorAngle(nn).toFixed(nn === 3 || nn === 4 || nn === 6 ? 0 : 1)}&deg;
              </td>
              <td style={{ padding: "4px 8px", color: isActive ? BLUE : textSec, fontWeight: isActive ? "700" : "400", fontFamily: "monospace" }}>
                {angleSum(nn)}&deg;
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────

export default function PolygonAnglesWrapper() {
  const [n,           setN]           = useState(6);
  const [highlighted, setHighlighted] = useState(0);
  const [dark,        setDark]        = useState(false);

  const intAngle = interiorAngle(n);
  const sumAngle = angleSum(n);
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
            Polygon Interior Angles
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>
            Adjust sides with +/&minus; &mdash; click a vertex to highlight its angle
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
            <CounterButton
              label="−"
              onClick={() => handleN(-1)}
              disabled={n <= 3}
              border={border}
              textSec={textSec}
            />
            <div style={{ textAlign: "center", minWidth: "80px" }}>
              <div style={{ fontSize: "48px", fontWeight: "900", color: BLUE, lineHeight: 1, letterSpacing: "-0.04em" }}>
                {n}
              </div>
              <div style={{ fontSize: "11px", color: textSec, marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                sides
              </div>
            </div>
            <CounterButton
              label="+"
              onClick={() => handleN(1)}
              disabled={n >= 12}
              border={border}
              textSec={textSec}
            />
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
            <div>
              <span style={{ color: textSec }}>(n &minus; 2) &times; 180&deg; / n</span>
            </div>
            <div>
              <span style={{ color: textSec }}>=&nbsp;</span>
              <span style={{ color: BLUE }}>({n} &minus; 2) &times; 180&deg; / {n}</span>
            </div>
            <div>
              <span style={{ color: textSec }}>=&nbsp;</span>
              <span style={{ color: BLUE, fontWeight: "700", fontSize: "15px" }}>
                {intAngle % 1 === 0 ? intAngle : intAngle.toFixed(2)}&deg;
              </span>
              <span style={{ color: textSec }}> per angle</span>
            </div>
          </div>

          {/* Sum card */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                flex:         1,
                background:   panelBg,
                borderRadius: "12px",
                border:       `1.5px solid ${BLUE}22`,
                padding:      "12px 14px",
                textAlign:    "center",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: "600", color: BLUE, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "5px" }}>
                Each angle
              </div>
              <div style={{ fontSize: "34px", fontWeight: "900", color: BLUE, lineHeight: 1, letterSpacing: "-0.03em" }}>
                {intAngle % 1 === 0 ? intAngle : intAngle.toFixed(1)}&deg;
              </div>
            </div>
            <div
              style={{
                flex:         1,
                background:   panelBg,
                borderRadius: "12px",
                border:       `1.5px solid ${BLUE}22`,
                padding:      "12px 14px",
                textAlign:    "center",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: "600", color: BLUE, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "5px" }}>
                Total sum
              </div>
              <div style={{ fontSize: "34px", fontWeight: "900", color: BLUE, lineHeight: 1, letterSpacing: "-0.03em" }}>
                {sumAngle}&deg;
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: border }} />

          {/* Reference table */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
              Reference
            </div>
            <RefTable
              current={n}
              dark={dark}
              border={border}
              textPri={textPri}
              textSec={textSec}
            />
          </div>
        </div>
      </div>
    </div>
  );
}