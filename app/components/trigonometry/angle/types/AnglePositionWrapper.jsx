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

function arcPath(cx, cy, r, from, to, cw = false) {
  const delta = ((to - from) % 360 + 360) % 360;
  const s  = polar(cx, cy, r, from);
  const e  = polar(cx, cy, r, to);
  const la = delta > 180 ? 1 : 0;
  const sw = cw ? 1 : 0;
  return `M ${ff(s.x)} ${ff(s.y)} A ${r} ${r} 0 ${la} ${sw} ${ff(e.x)} ${ff(e.y)}`;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SZ  = 340;
const CX  = SZ / 2;
const CY  = SZ / 2;
const R   = 110;  // unit circle radius in px
const ARM = 130;  // terminal side arm length

const BLUE      = "#2563eb";
const AMBER     = "#d97706";
const GREEN     = "#16a34a";
const RED       = "#dc2626";
const BLUE_BG   = "rgba(37,99,235,0.10)";

const SNAP_TARGETS = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360, -30, -45, -60, -90, -120, -135, -150, -180, -210, -225, -240, -270, -300, -315, -330, -360];

// ─── Quadrant info ────────────────────────────────────────────────────────────

function getQuadrantInfo(angle) {
  // Normalize to [0, 360)
  const norm = ((angle % 360) + 360) % 360;

  if (norm === 0 || norm === 360)  return { label: "Positive x-axis", roman: "—",  sinSign: "+", cosSign: "+", tanSign: "+", color: "#64748b" };
  if (norm === 90)                 return { label: "Positive y-axis", roman: "—",  sinSign: "+", cosSign: "0", tanSign: "∞", color: "#64748b" };
  if (norm === 180)                return { label: "Negative x-axis", roman: "—",  sinSign: "0", cosSign: "−", tanSign: "0", color: "#64748b" };
  if (norm === 270)                return { label: "Negative y-axis", roman: "—",  sinSign: "−", cosSign: "0", tanSign: "∞", color: "#64748b" };
  if (norm > 0   && norm < 90)    return { label: "Quadrant I",   roman: "I",   sinSign: "+", cosSign: "+", tanSign: "+", color: BLUE  };
  if (norm > 90  && norm < 180)   return { label: "Quadrant II",  roman: "II",  sinSign: "+", cosSign: "−", tanSign: "−", color: GREEN };
  if (norm > 180 && norm < 270)   return { label: "Quadrant III", roman: "III", sinSign: "−", cosSign: "−", tanSign: "+", color: AMBER };
  if (norm > 270 && norm < 360)   return { label: "Quadrant IV",  roman: "IV",  sinSign: "−", cosSign: "+", tanSign: "−", color: RED   };
  return { label: "—", roman: "—", sinSign: "?", cosSign: "?", tanSign: "?", color: "#64748b" };
}

// ─── Snap ─────────────────────────────────────────────────────────────────────

function snapAngle(raw, negative) {
  const targets = negative
    ? SNAP_TARGETS.filter(t => t <= 0)
    : SNAP_TARGETS.filter(t => t >= 0);
  let closest = raw;
  let minDist = Infinity;
  for (const t of targets) {
    const d = Math.abs(raw - t);
    if (d < minDist) { minDist = d; closest = t; }
  }
  return minDist <= 5 ? closest : Math.round(raw);
}

// ─── Default explanation ──────────────────────────────────────────────────────

const DEFAULT_EXPLANATION = {
  title: "Standard Position",
  body: [
    "An angle is in standard position when its vertex is at the origin and its initial side lies along the positive x-axis.",
    "The terminal side rotates counter-clockwise for positive angles and clockwise for negative angles.",
    "The quadrant of the terminal side determines the signs of all six trig functions.",
    "Any angle coterminal with a quadrantal angle (0°, 90°, 180°, 270°) lies on an axis.",
  ],
  table: [
    { q: "I",   sin: "+", cos: "+", tan: "+" },
    { q: "II",  sin: "+", cos: "−", tan: "−" },
    { q: "III", sin: "−", cos: "−", tan: "+" },
    { q: "IV",  sin: "−", cos: "+", tan: "−" },
  ],
};

// ─── Sign pill ────────────────────────────────────────────────────────────────

function SignPill({ fn, sign, color }) {
  const positive = sign === "+";
  const bg  = positive ? "rgba(22,163,74,0.10)"  : "rgba(220,38,38,0.10)";
  const col = positive ? GREEN : sign === "−" ? RED : "#64748b";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "8px", background: bg, border: `1.5px solid ${col}22` }}>
      <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", fontFamily: "system-ui,sans-serif" }}>{fn}</span>
      <span style={{ fontSize: "14px", fontWeight: "900", color: col, fontFamily: "monospace" }}>{sign}</span>
    </div>
  );
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ angle, dark, onPointerDown, svgRef }) {
  const qi      = getQuadrantInfo(angle);
  const isNeg   = angle < 0;
  const dispAngle = angle; // keep sign for display

  // Terminal side is at `angle` degrees (math convention, CCW from east)
  const termEnd  = polar(CX, CY, ARM, angle);
  const unitPt   = polar(CX, CY, R,   angle);

  // Arc: always from 0° to angle
  // For negative angles, we sweep CW (from 0 to angle going CW)
  const arcFrom  = 0;
  const arcTo    = angle;
  const arcR     = 46;

  // Arc midpoint for label
  const arcMid   = isNeg ? -(Math.abs(angle) / 2) : angle / 2;
  const labelPos = polar(CX, CY, arcR + 20, arcMid);

  // Direction arrow on arc — small triangle near end of arc
  const arrowAngle = isNeg ? angle + 8 : angle - 8;
  const arrowPt    = polar(CX, CY, arcR, arrowAngle);

  const sub  = dark ? "#475569" : "#94a3b8";
  const grid = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const fs   = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  // Quadrant label positions
  const qLabels = [
    { label: "I",   pos: polar(CX, CY, R * 0.55,  45) },
    { label: "II",  pos: polar(CX, CY, R * 0.55, 135) },
    { label: "III", pos: polar(CX, CY, R * 0.55, 225) },
    { label: "IV",  pos: polar(CX, CY, R * 0.55, 315) },
  ];

  const showArc = Math.abs(angle) > 1;

  return (
    <svg
      ref={svgRef}
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      onPointerDown={onPointerDown}
      style={{ display: "block", touchAction: "none", cursor: "crosshair" }}
    >
      {/* ── Grid circles ── */}
      {[R * 0.5, R, R * 1.15].map((r, i) => (
        <circle key={i} cx={CX} cy={CY} r={r} fill="none" stroke={grid} strokeWidth={1} />
      ))}

      {/* ── Axes ── */}
      {/* x-axis */}
      <line x1={12} y1={CY} x2={SZ - 12} y2={CY} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
      {/* y-axis */}
      <line x1={CX} y1={SZ - 12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />

      {/* ── Axis labels ── */}
      <text x={SZ - 10} y={CY - 8} textAnchor="middle" fontSize={11} fontStyle="italic" fill={sub} style={fs}>x</text>
      <text x={CX + 8}  y={14}     textAnchor="start"  fontSize={11} fontStyle="italic" fill={sub} style={fs}>y</text>

      {/* ── Quadrant labels ── */}
      {qLabels.map(({ label, pos }) => (
        <text
          key={label}
          x={pos.x} y={pos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={12} fontWeight="600"
          fill={qi.roman === label ? qi.color : sub}
          opacity={qi.roman === label ? 0.9 : 0.25}
          style={fs}
        >
          {label}
        </text>
      ))}

      {/* ── Unit circle ── */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1} strokeDasharray="4 3" opacity={0.5} />
      <text x={CX + R + 4} y={CY - 6} fontSize={9} fill={sub} opacity={0.6} style={fs}>1</text>

      {/* ── Arc fill ── */}
      {showArc && (
        <path
          d={isNeg
            ? `${arcPath(CX, CY, arcR, arcTo, 0)} L ${CX} ${CY} Z`
            : `${arcPath(CX, CY, arcR, 0, arcTo)} L ${CX} ${CY} Z`
          }
          fill={BLUE_BG}
          stroke="none"
        />
      )}

      {/* ── Arc stroke ── */}
      {showArc && (
        <path
          d={isNeg
            ? arcPath(CX, CY, arcR, arcTo, 0)
            : arcPath(CX, CY, arcR, 0, arcTo)
          }
          fill="none"
          stroke={isNeg ? AMBER : BLUE}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      )}

      {/* ── Angle label ── */}
      {showArc && (
        <text
          x={labelPos.x} y={labelPos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={12} fontWeight="700"
          fill={isNeg ? AMBER : BLUE}
          style={fs}
        >
          {dispAngle}&deg;
        </text>
      )}

      {/* ── Initial side (positive x-axis ray) ── */}
      <line
        x1={CX} y1={CY}
        x2={CX + ARM} y2={CY}
        stroke={sub} strokeWidth={2.5} strokeLinecap="round"
      />
      <text x={CX + ARM + 6} y={CY + 14} fontSize={10} fill={sub} style={fs}>initial side</text>

      {/* ── Terminal side ── */}
      <line
        x1={CX} y1={CY}
        x2={termEnd.x} y2={termEnd.y}
        stroke={isNeg ? AMBER : BLUE}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <text
        x={polar(CX, CY, ARM + 14, angle).x}
        y={polar(CX, CY, ARM + 14, angle).y}
        textAnchor="middle" dominantBaseline="central"
        fontSize={10} fill={isNeg ? AMBER : BLUE} style={fs}
      >
        terminal
      </text>

      {/* ── Unit circle intersection point ── */}
      <circle cx={unitPt.x} cy={unitPt.y} r={4} fill={isNeg ? AMBER : BLUE} opacity={0.7} />

      {/* ── Origin ── */}
      <circle cx={CX} cy={CY} r={4.5} fill={isNeg ? AMBER : BLUE} />
      <text x={CX + 7} y={CY + 14} fontSize={9} fill={sub} style={fs}>O</text>

      {/* ── Drag handle ── */}
      <g style={{ cursor: "grab", touchAction: "none" }}>
        <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
        <circle
          cx={termEnd.x} cy={termEnd.y} r={8}
          fill={isNeg ? AMBER : BLUE}
          opacity={0.92} stroke="white" strokeWidth={2}
        />
      </g>
    </svg>
  );
}

// ─── Explanation panel ────────────────────────────────────────────────────────

function ExplanationPanel({ explanation, angle, dark, border, textPri, textSec, panelBg }) {
  const qi = getQuadrantInfo(angle);
  const isNeg = angle < 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%", overflowY: "auto" }}>
      {/* Title */}
      <div>
        <div style={{ fontSize: "13px", fontWeight: "800", color: textPri, letterSpacing: "-0.01em", marginBottom: "6px" }}>
          {explanation.title}
        </div>
        {explanation.body.map((para, i) => (
          <p key={i} style={{ margin: "0 0 8px", fontSize: "12px", lineHeight: "1.65", color: textSec }}>{para}</p>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Live angle info */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
          Current angle
        </div>
        <div style={{ fontSize: "42px", fontWeight: "900", color: isNeg ? AMBER : BLUE, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "4px" }}>
          {angle}&deg;
        </div>
        <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", color: qi.color, background: `${qi.color}18`, border: `1.5px solid ${qi.color}33`, marginBottom: "12px" }}>
          {qi.label}
        </div>

        {/* Trig signs */}
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "7px" }}>
          Signs in this quadrant
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <SignPill fn="sin" sign={qi.sinSign} />
          <SignPill fn="cos" sign={qi.cosSign} />
          <SignPill fn="tan" sign={qi.tanSign} />
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Quadrant table */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
          All quadrants
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11px", fontFamily: "system-ui,sans-serif" }}>
          <thead>
            <tr>
              {["Q", "sin", "cos", "tan"].map(h => (
                <th key={h} style={{ padding: "4px 6px", textAlign: "center", color: textSec, fontWeight: "600", borderBottom: `1px solid ${border}`, fontSize: "10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {explanation.table.map((row) => {
              const active = qi.roman === row.q;
              return (
                <tr key={row.q} style={{ background: active ? `${qi.color}12` : "transparent" }}>
                  <td style={{ padding: "5px 6px", textAlign: "center", fontWeight: active ? "700" : "400", color: active ? qi.color : textSec }}>{row.q}</td>
                  {["sin", "cos", "tan"].map(fn => (
                    <td key={fn} style={{ padding: "5px 6px", textAlign: "center", fontWeight: "700", color: row[fn] === "+" ? GREEN : row[fn] === "−" ? RED : textSec }}>{row[fn]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Rotation direction hint */}
      <div style={{ padding: "9px 12px", borderRadius: "9px", background: panelBg, border: `1.5px solid ${border}`, fontSize: "11px", color: textSec, lineHeight: "1.5" }}>
        <strong style={{ color: textPri }}>Direction: </strong>
        {isNeg
          ? <span><span style={{ color: AMBER }}>Negative</span> → clockwise rotation</span>
          : <span><span style={{ color: BLUE }}>Positive</span> → counter-clockwise rotation</span>
        }
      </div>
    </div>
  );
}

// ─── Shared card layout ───────────────────────────────────────────────────────

function StandardPositionCard({ dark = false, explanation }) {
  const exp = explanation || DEFAULT_EXPLANATION;

  const [angle, setAngle] = useState(55);
  const svgRef   = useRef(null);
  const dragging = useRef(false);
  const isNeg    = useRef(false);

  const getAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale - CX;
    const py    = (e.clientY - rect.top)  * scale - CY;
    let deg = Math.atan2(-py, px) * (180 / Math.PI);
    if (deg < 0) deg += 360;
    // Preserve negative convention if user has been dragging in CW direction
    if (isNeg.current && deg > 0) deg = deg - 360;
    return snapAngle(deg, isNeg.current);
  }, []);

  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    const raw = getAngle(e);
    isNeg.current = raw < 0;
    setAngle(raw);
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

  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";
  const panelBg = dark ? "#0f172a" : "#f1f5f9";
  const sceneBg = dark ? "#0f172a" : "#f1f5f9";

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "420px" }}>
      {/* ── Scene (2/3) ── */}
      <div
        style={{
          flex:           "0 0 66.666%",
          background:     sceneBg,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "16px",
          touchAction:    "none",
          userSelect:     "none",
          borderRight:    `1.5px solid ${border}`,
        }}
      >
        <Scene
          angle={angle}
          dark={dark}
          onPointerDown={onPointerDown}
          svgRef={svgRef}
        />
      </div>

      {/* ── Explanation (1/3) ── */}
      <div style={{ flex: "0 0 33.333%", padding: "20px 16px", overflowY: "auto" }}>
        <ExplanationPanel
          explanation={exp}
          angle={angle}
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

// ─── Named export (for hub) ───────────────────────────────────────────────────

export { StandardPositionCard };

// ─── Default export (standalone page) ────────────────────────────────────────

export default function StandardPositionWrapper({ explanation } = {}) {
  const [dark, setDark] = useState(false);

  const bg      = dark ? "#0f172a" : "#f8fafc";
  const surface = dark ? "#1e293b" : "#ffffff";
  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";

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
      <div style={{ width: "100%", maxWidth: "900px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>Standard Position</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>Drag the handle to rotate the terminal side</p>
        </div>
        <button
          onClick={() => setDark(d => !d)}
          style={{ padding: "6px 14px", borderRadius: "8px", border: `1.5px solid ${border}`, background: surface, color: textSec, fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      {/* Card */}
      <div
        style={{
          width:        "100%",
          maxWidth:     "900px",
          background:   surface,
          borderRadius: "20px",
          border:       `1.5px solid ${border}`,
          boxShadow:    dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)",
          overflow:     "hidden",
        }}
      >
        <StandardPositionCard dark={dark} explanation={explanation} />
      </div>
    </div>
  );
}