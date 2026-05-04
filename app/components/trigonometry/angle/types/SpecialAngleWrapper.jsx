"use client";

import { useState } from "react";

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
const R   = 108;  // unit circle radius
const ARM = 116;

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const PURPLE = "#9333ea";
const BBG    = "rgba(37,99,235,0.10)";

// ─── Special angles data ──────────────────────────────────────────────────────

const S2 = "√2/2";
const S3 = "√3/2";

const SPECIAL_ANGLES = [
  { deg:   0, rad: "0",      radTex: "0",       sin: "0",    cos: "1",    tan: "0",        quadrant: 1 },
  { deg:  30, rad: "π/6",    radTex: "π/6",     sin: "1/2",  cos: S3,     tan: "√3/3",     quadrant: 1 },
  { deg:  45, rad: "π/4",    radTex: "π/4",     sin: S2,     cos: S2,     tan: "1",        quadrant: 1 },
  { deg:  60, rad: "π/3",    radTex: "π/3",     sin: S3,     cos: "1/2",  tan: "√3",       quadrant: 1 },
  { deg:  90, rad: "π/2",    radTex: "π/2",     sin: "1",    cos: "0",    tan: "undef.",   quadrant: 0 },
  { deg: 120, rad: "2π/3",   radTex: "2π/3",    sin: S3,     cos: "−1/2", tan: "−√3",      quadrant: 2 },
  { deg: 135, rad: "3π/4",   radTex: "3π/4",    sin: S2,     cos: "−"+S2, tan: "−1",       quadrant: 2 },
  { deg: 150, rad: "5π/6",   radTex: "5π/6",    sin: "1/2",  cos: "−"+S3, tan: "−√3/3",   quadrant: 2 },
  { deg: 180, rad: "π",      radTex: "π",       sin: "0",    cos: "−1",   tan: "0",        quadrant: 0 },
  { deg: 210, rad: "7π/6",   radTex: "7π/6",    sin: "−1/2", cos: "−"+S3, tan: "√3/3",    quadrant: 3 },
  { deg: 225, rad: "5π/4",   radTex: "5π/4",    sin: "−"+S2, cos: "−"+S2, tan: "1",        quadrant: 3 },
  { deg: 240, rad: "4π/3",   radTex: "4π/3",    sin: "−"+S3, cos: "−1/2", tan: "√3",       quadrant: 3 },
  { deg: 270, rad: "3π/2",   radTex: "3π/2",    sin: "−1",   cos: "0",    tan: "undef.",   quadrant: 0 },
  { deg: 300, rad: "5π/3",   radTex: "5π/3",    sin: "−"+S3, cos: "1/2",  tan: "−√3",      quadrant: 4 },
  { deg: 315, rad: "7π/4",   radTex: "7π/4",    sin: "−"+S2, cos: S2,     tan: "−1",       quadrant: 4 },
  { deg: 330, rad: "11π/6",  radTex: "11π/6",   sin: "−1/2", cos: S3,     tan: "−√3/3",   quadrant: 4 },
];

const Q_COLORS = { 0: "#64748b", 1: BLUE, 2: GREEN, 3: AMBER, 4: RED };

// ─── Default explanation ──────────────────────────────────────────────────────

const DEFAULT_EXPLANATION = {
  title: "Special Angles",
  body: [
    "The 16 special angles are the standard positions on the unit circle that every trigonometry student must know. Their exact sin, cos, and tan values can be expressed without a calculator.",
    "They come from the 30-60-90 and 45-45-90 right triangles, reflected across all four quadrants.",
    "Click any point on the circle to see its exact values.",
  ],
};

// ─── Display mode toggle ──────────────────────────────────────────────────────

function ModeToggle({ mode, onChange, border, textSec }) {
  const modes = [
    { id: "degrees", label: "Degrees" },
    { id: "radians", label: "Radians" },
    { id: "both",    label: "Both"    },
  ];
  return (
    <div style={{ display: "flex", background: "transparent", border: `1.5px solid ${border}`, borderRadius: "9px", padding: "3px", gap: "3px" }}>
      {modes.map(m => {
        const act = mode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            style={{ flex: 1, padding: "5px 6px", borderRadius: "6px", border: "none", background: act ? BLUE : "transparent", color: act ? "#fff" : textSec, fontSize: "10px", fontWeight: act ? "700" : "400", fontFamily: "system-ui,sans-serif", cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}
          >
            {m.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Angle label helper ───────────────────────────────────────────────────────

function angleLabel(a, mode) {
  if (mode === "degrees") return `${a.deg}°`;
  if (mode === "radians") return a.rad;
  return `${a.deg}°`;
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ selected, displayMode, dark, onSelect }) {
  const selA     = SPECIAL_ANGLES[selected];
  const selColor = Q_COLORS[selA.quadrant];

  const sub  = dark ? "#475569" : "#94a3b8";
  const grid = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const fs   = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  const termEnd = polar(CX, CY, ARM, selA.deg);
  const arcMid  = selA.deg / 2;
  const arcLp   = polar(CX, CY, 36, arcMid);

  return (
    <svg
      width={SZ}
      height={SZ}
      viewBox={`0 0 ${SZ} ${SZ}`}
      style={{ display: "block" }}
    >
      {/* ── Grid ── */}
      {[R * 0.5, R].map((r, i) => (
        <circle key={i} cx={CX} cy={CY} r={r} fill="none" stroke={grid} strokeWidth={1} />
      ))}

      {/* ── Axes ── */}
      <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
      <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />

      {/* ── Unit circle ── */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1.5} opacity={0.5} />

      {/* ── Selected sector ── */}
      {selA.deg > 0 && selA.deg < 360 && (
        <path d={sectorPath(CX, CY, 32, 0, selA.deg)} fill={BBG} stroke="none" />
      )}
      {selA.deg > 0 && selA.deg < 360 && (
        <path d={arcPath(CX, CY, 32, 0, selA.deg)} fill="none" stroke={selColor} strokeWidth={2} strokeLinecap="round" />
      )}

      {/* ── Arc label ── */}
      {selA.deg > 15 && selA.deg < 360 && (
        <text x={arcLp.x} y={arcLp.y} textAnchor="middle" dominantBaseline="central" fontSize={9} fontWeight="700" fill={selColor} style={fs}>
          {selA.deg}&deg;
        </text>
      )}

      {/* ── Selected angle arms ── */}
      <line x1={CX} y1={CY} x2={CX + ARM} y2={CY}
        stroke={sub} strokeWidth={1.5} strokeLinecap="round" opacity={0.5} />
      <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y}
        stroke={selColor} strokeWidth={2.5} strokeLinecap="round" />

      {/* ── All 16 angle dots + labels ── */}
      {SPECIAL_ANGLES.map((a, i) => {
        const pt      = polar(CX, CY, R, a.deg);
        const isSel   = i === selected;
        const col     = Q_COLORS[a.quadrant];

        // Label offset — push outward from circle
        const labelR  = R + 18;
        const lp      = polar(CX, CY, labelR, a.deg);

        // Adjust label anchor based on position
        let anchor = "middle";
        const px = pt.x - CX;
        if (px > 10)  anchor = "start";
        if (px < -10) anchor = "end";

        const label = angleLabel(a, displayMode);
        const showBothLine2 = displayMode === "both";

        return (
          <g key={i} onClick={() => onSelect(i)} style={{ cursor: "pointer" }}>
            {/* Dot */}
            <circle cx={pt.x} cy={pt.y} r={isSel ? 9 : 5}
              fill={col}
              opacity={isSel ? 1 : 0.55}
              stroke={isSel ? "white" : "none"}
              strokeWidth={2}
            />
            {/* Invisible hit area */}
            <circle cx={pt.x} cy={pt.y} r={14} fill="transparent" />

            {/* Label */}
            <text
              x={lp.x} y={lp.y}
              textAnchor={anchor}
              dominantBaseline="central"
              fontSize={isSel ? 11 : 9}
              fontWeight={isSel ? "700" : "400"}
              fill={isSel ? col : sub}
              opacity={isSel ? 1 : 0.7}
              style={fs}
            >
              {displayMode === "both" ? `${a.deg}°` : label}
            </text>
            {/* Second line for "both" mode */}
            {displayMode === "both" && (
              <text
                x={lp.x}
                y={lp.y + (lp.y > CY ? 11 : -11)}
                textAnchor={anchor}
                dominantBaseline="central"
                fontSize={isSel ? 10 : 8}
                fontWeight={isSel ? "700" : "400"}
                fill={isSel ? col : sub}
                opacity={isSel ? 0.85 : 0.55}
                style={fs}
              >
                {a.rad}
              </text>
            )}
          </g>
        );
      })}

      {/* ── Origin ── */}
      <circle cx={CX} cy={CY} r={4} fill={selColor} />
    </svg>
  );
}

// ─── Trig value row ───────────────────────────────────────────────────────────

function TrigRow({ fn, value, color, panelBg }) {
  const isUndef = value === "undef.";
  const isPos   = !value.startsWith("−") && !isUndef && value !== "0";
  const col     = isUndef ? "#94a3b8" : isPos ? GREEN : value === "0" ? "#64748b" : RED;

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px", borderRadius: "8px", background: panelBg, marginBottom: "4px" }}>
      <span style={{ fontSize: "12px", fontWeight: "600", color, fontFamily: "monospace" }}>{fn}</span>
      <span style={{ fontSize: "12px", fontWeight: "700", color, fontFamily: "monospace" }}>{value}</span>
    </div>
  );
}

// ─── Reference table ──────────────────────────────────────────────────────────

function RefTable({ selected, onSelect, dark, border, textSec }) {
  return (
    <div style={{ overflowY: "auto", maxHeight: "200px", borderRadius: "8px", border: `1.5px solid ${border}` }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px", fontFamily: "monospace" }}>
        <thead style={{ position: "sticky", top: 0, background: dark ? "#1e293b" : "#f8fafc", zIndex: 1 }}>
          <tr>
            {["°", "rad", "sin", "cos", "tan"].map(h => (
              <th key={h} style={{ padding: "5px 6px", textAlign: "center", color: textSec, fontWeight: "600", borderBottom: `1px solid ${border}`, fontSize: "9px", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "system-ui,sans-serif" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SPECIAL_ANGLES.map((a, i) => {
            const act = i === selected;
            const col = Q_COLORS[a.quadrant];
            return (
              <tr
                key={i}
                onClick={() => onSelect(i)}
                style={{ background: act ? `${col}14` : "transparent", cursor: "pointer" }}
              >
                <td style={{ padding: "4px 6px", textAlign: "center", color: act ? col : textSec, fontWeight: act ? "700" : "400" }}>{a.deg}</td>
                <td style={{ padding: "4px 6px", textAlign: "center", color: act ? col : textSec, fontWeight: act ? "700" : "400" }}>{a.rad}</td>
                <td style={{ padding: "4px 6px", textAlign: "center", color: act ? col : textSec }}>{a.sin}</td>
                <td style={{ padding: "4px 6px", textAlign: "center", color: act ? col : textSec }}>{a.cos}</td>
                <td style={{ padding: "4px 6px", textAlign: "center", color: act ? col : textSec }}>{a.tan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Explanation panel ────────────────────────────────────────────────────────

function ExplanationPanel({ explanation, selected, displayMode, onDisplayMode, onSelect, dark, border, textPri, textSec, panelBg }) {
  const a   = SPECIAL_ANGLES[selected];
  const col = Q_COLORS[a.quadrant];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", height: "100%", overflowY: "auto" }}>
      {/* Title */}
      <div>
        <div style={{ fontSize: "13px", fontWeight: "800", color: textPri, marginBottom: "6px" }}>{explanation.title}</div>
        {explanation.body.map((para, i) => (
          <p key={i} style={{ margin: "0 0 8px", fontSize: "12px", lineHeight: "1.65", color: textSec }}>{para}</p>
        ))}
      </div>

      {/* Display mode toggle */}
      <ModeToggle mode={displayMode} onChange={onDisplayMode} border={border} textSec={textSec} />

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Selected angle */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Selected</div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
          <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${col}22`, padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: "600", color: col, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>Degrees</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: col, lineHeight: 1 }}>{a.deg}&deg;</div>
          </div>
          <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${col}22`, padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: "600", color: col, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>Radians</div>
            <div style={{ fontSize: "18px", fontWeight: "900", color: col, lineHeight: 1, fontFamily: "monospace", paddingTop: "3px" }}>{a.rad}</div>
          </div>
        </div>

        {/* Trig values */}
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "6px" }}>Exact values</div>
        <TrigRow fn={`sin(${a.deg}°)`} value={a.sin} panelBg={panelBg} />
        <TrigRow fn={`cos(${a.deg}°)`} value={a.cos} panelBg={panelBg} />
        <TrigRow fn={`tan(${a.deg}°)`} value={a.tan} panelBg={panelBg} />
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Reference table */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>All special angles</div>
        <RefTable selected={selected} onSelect={onSelect} dark={dark} border={border} textSec={textSec} />
      </div>
    </div>
  );
}

// ─── Shared card ──────────────────────────────────────────────────────────────

export function SpecialAnglesCard({ dark = false, explanation }) {
  const exp = explanation || DEFAULT_EXPLANATION;

  const [selected,     setSelected]     = useState(2);  // 45° default
  const [displayMode,  setDisplayMode]  = useState("both");

  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";
  const panelBg = dark ? "#0f172a" : "#f1f5f9";
  const sceneBg = dark ? "#0f172a" : "#f1f5f9";

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "420px" }}>
      {/* Scene 2/3 */}
      <div style={{ flex: "0 0 66.666%", background: sceneBg, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", userSelect: "none", borderRight: `1.5px solid ${border}` }}>
        <Scene
          selected={selected}
          displayMode={displayMode}
          dark={dark}
          onSelect={setSelected}
        />
      </div>

      {/* Explanation 1/3 */}
      <div style={{ flex: "0 0 33.333%", padding: "20px 16px", overflowY: "auto" }}>
        <ExplanationPanel
          explanation={exp}
          selected={selected}
          displayMode={displayMode}
          onDisplayMode={setDisplayMode}
          onSelect={setSelected}
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

export default function SpecialAnglesWrapper({ explanation } = {}) {
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
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>Special Angles</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>Click any point on the circle to see exact degree, radian and trig values</p>
        </div>
        <button onClick={() => setDark(d => !d)} style={{ padding: "6px 14px", borderRadius: "8px", border: `1.5px solid ${border}`, background: surface, color: textSec, fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <div style={{ width: "100%", maxWidth: "900px", background: surface, borderRadius: "20px", border: `1.5px solid ${border}`, boxShadow: dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)", overflow: "hidden" }}>
        <SpecialAnglesCard dark={dark} explanation={explanation} />
      </div>
    </div>
  );
}