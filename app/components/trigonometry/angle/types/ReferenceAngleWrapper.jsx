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
const R   = 108;
const ARM = 128;

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const BBG    = "rgba(37,99,235,0.08)";
const ABG    = "rgba(217,119,6,0.13)";

const SNAP_TARGETS = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];

// ─── Reference angle logic ────────────────────────────────────────────────────

function getRefInfo(angle) {
  const norm = ((angle % 360) + 360) % 360;

  if (norm === 0 || norm === 180 || norm === 360) {
    return { ref: 0, quadrant: "I", roman: "—", color: "#64748b", formula: "θ is on the x-axis", refFrom: 0, refTo: 0, axisAngle: 0 };
  }
  if (norm === 90 || norm === 270) {
    return { ref: 0, quadrant: "I", roman: "—", color: "#64748b", formula: "θ is on the y-axis", refFrom: 0, refTo: 0, axisAngle: 0 };
  }
  if (norm > 0 && norm < 90) {
    return { ref: norm, quadrant: "I", roman: "I", color: BLUE,
      formula: `ref = θ = ${Math.round(norm)}°`,
      refFrom: 0, refTo: norm, axisAngle: 0 };
  }
  if (norm > 90 && norm < 180) {
    return { ref: 180 - norm, quadrant: "II", roman: "II", color: GREEN,
      formula: `ref = 180° − ${Math.round(norm)}° = ${Math.round(180 - norm)}°`,
      refFrom: norm, refTo: 180, axisAngle: 180 };
  }
  if (norm > 180 && norm < 270) {
    return { ref: norm - 180, quadrant: "III", roman: "III", color: AMBER,
      formula: `ref = ${Math.round(norm)}° − 180° = ${Math.round(norm - 180)}°`,
      refFrom: 180, refTo: norm, axisAngle: 180 };
  }
  if (norm > 270 && norm < 360) {
    return { ref: 360 - norm, quadrant: "IV", roman: "IV", color: RED,
      formula: `ref = 360° − ${Math.round(norm)}° = ${Math.round(360 - norm)}°`,
      refFrom: norm, refTo: 360, axisAngle: 0 };
  }
  return { ref: 0, quadrant: "I", roman: "—", color: "#64748b", formula: "", refFrom: 0, refTo: 0, axisAngle: 0 };
}

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

// ─── Default explanation ──────────────────────────────────────────────────────

const DEFAULT_EXPLANATION = {
  title: "Reference Angle",
  body: [
    "The reference angle is the acute angle (0°–90°) formed between the terminal side and the nearest part of the x-axis.",
    "It is always positive regardless of which quadrant the terminal side lands in.",
    "Reference angles let you evaluate trig functions for any angle using the known values from Quadrant I.",
  ],
  formulas: [
    { q: "I",   f: "ref = θ" },
    { q: "II",  f: "ref = 180° − θ" },
    { q: "III", f: "ref = θ − 180°" },
    { q: "IV",  f: "ref = 360° − θ" },
  ],
};

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ angle, dark, onPointerDown, svgRef }) {
  const norm   = ((angle % 360) + 360) % 360;
  const ri     = getRefInfo(angle);
  const termEnd = polar(CX, CY, ARM, norm);
  const sub    = dark ? "#475569" : "#94a3b8";
  const grid   = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const fs     = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

  // Full angle arc (0 to norm) — dim blue background
  const fullArcMid = norm / 2;
  const fullLabelPos = polar(CX, CY, 62, fullArcMid);

  // Reference angle arc
  const refMid = ri.refFrom + ccwDelta(ri.refFrom, ri.refTo) / 2;
  const refLabelPos = polar(CX, CY, 44, refMid);

  const showFullArc = norm > 1 && norm < 359;
  const showRefArc  = ri.ref > 1;

  // Nearest x-axis dashed line
  const axisEnd = polar(CX, CY, ARM + 10, ri.axisAngle);

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
      {[R * 0.5, R].map((r, i) => (
        <circle key={i} cx={CX} cy={CY} r={r} fill="none" stroke={grid} strokeWidth={1} />
      ))}

      {/* ── Axes ── */}
      <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
      <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} />
      <polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />

      {/* ── Full angle sector (dim) ── */}
      {showFullArc && (
        <path d={sectorPath(CX, CY, 56, 0, norm)} fill={BBG} stroke="none" />
      )}
      {showFullArc && (
        <path
          d={arcPath(CX, CY, 56, 0, norm)}
          fill="none" stroke={BLUE} strokeWidth={1.5}
          strokeLinecap="round" opacity={0.4}
        />
      )}

      {/* Full angle label */}
      {showFullArc && norm > 20 && (
        <text
          x={fullLabelPos.x} y={fullLabelPos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={10} fill={BLUE} opacity={0.55} fontWeight="600" style={fs}
        >
          {Math.round(norm)}&deg;
        </text>
      )}

      {/* ── Reference angle sector ── */}
      {showRefArc && (
        <path d={sectorPath(CX, CY, 36, ri.refFrom, ri.refTo)} fill={ABG} stroke="none" />
      )}
      {showRefArc && (
        <path
          d={arcPath(CX, CY, 36, ri.refFrom, ri.refTo)}
          fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round"
        />
      )}

      {/* Reference angle label */}
      {showRefArc && ri.ref > 15 && (
        <text
          x={refLabelPos.x} y={refLabelPos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={11} fontWeight="700" fill={AMBER} style={fs}
        >
          {Math.round(ri.ref)}&deg;
        </text>
      )}

      {/* ── Nearest x-axis dashed ray ── */}
      {ri.axisAngle === 180 && (
        <line
          x1={CX} y1={CY}
          x2={axisEnd.x} y2={axisEnd.y}
          stroke={AMBER} strokeWidth={1.5}
          strokeDasharray="5 4" opacity={0.5}
          strokeLinecap="round"
        />
      )}

      {/* ── Unit circle ── */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1} strokeDasharray="3 4" opacity={0.4} />

      {/* ── Terminal side ── */}
      <line
        x1={CX} y1={CY}
        x2={termEnd.x} y2={termEnd.y}
        stroke={ri.color} strokeWidth={2.5} strokeLinecap="round"
      />

      {/* ── Initial side ── */}
      <line
        x1={CX} y1={CY}
        x2={CX + ARM} y2={CY}
        stroke={sub} strokeWidth={2} strokeLinecap="round"
      />

      {/* ── Quadrant label ── */}
      {ri.roman !== "—" && (() => {
        const qAngles = { "I": 45, "II": 135, "III": 225, "IV": 315 };
        const qPos = polar(CX, CY, R * 0.6, qAngles[ri.roman]);
        return (
          <text
            x={qPos.x} y={qPos.y}
            textAnchor="middle" dominantBaseline="central"
            fontSize={13} fontWeight="700"
            fill={ri.color} opacity={0.7} style={fs}
          >
            {ri.roman}
          </text>
        );
      })()}

      {/* ── Origin ── */}
      <circle cx={CX} cy={CY} r={4.5} fill={ri.color} />

      {/* ── Unit circle intersection ── */}
      <circle
        cx={polar(CX, CY, R, norm).x}
        cy={polar(CX, CY, R, norm).y}
        r={4} fill={ri.color} opacity={0.7}
      />

      {/* ── Drag handle ── */}
      <g style={{ cursor: "grab", touchAction: "none" }}>
        <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
        <circle cx={termEnd.x} cy={termEnd.y} r={8}
          fill={ri.color} opacity={0.92} stroke="white" strokeWidth={2} />
      </g>
    </svg>
  );
}

// ─── Explanation panel ────────────────────────────────────────────────────────

function ExplanationPanel({ explanation, angle, dark, border, textPri, textSec, panelBg }) {
  const norm = ((angle % 360) + 360) % 360;
  const ri   = getRefInfo(angle);

  const qColors = { "I": BLUE, "II": GREEN, "III": AMBER, "IV": RED };

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
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Current</div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
          <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${BLUE}22`, padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: "600", color: BLUE, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>θ</div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: BLUE, lineHeight: 1 }}>{Math.round(norm)}&deg;</div>
          </div>
          <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${AMBER}22`, padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: "600", color: AMBER, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>ref</div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: AMBER, lineHeight: 1 }}>{Math.round(ri.ref)}&deg;</div>
          </div>
        </div>

        {/* Active formula */}
        {ri.roman !== "—" && (
          <div style={{ padding: "8px 12px", borderRadius: "8px", background: `${ri.color}12`, border: `1.5px solid ${ri.color}33`, fontFamily: "monospace", fontSize: "11px", color: ri.color, marginBottom: "4px" }}>
            {ri.formula}
          </div>
        )}

        {/* Quadrant badge */}
        {ri.roman !== "—" && (
          <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", color: ri.color, background: `${ri.color}15`, border: `1.5px solid ${ri.color}33`, marginTop: "6px" }}>
            {ri.quadrant}
          </div>
        )}
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Formula table */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
          Formulas
        </div>
        {explanation.formulas.map((row) => {
          const active = ri.roman === row.q;
          const col    = qColors[row.q] || textSec;
          return (
            <div
              key={row.q}
              style={{
                display:       "flex",
                alignItems:    "center",
                gap:           "8px",
                padding:       "6px 10px",
                borderRadius:  "7px",
                marginBottom:  "4px",
                background:    active ? `${col}12` : "transparent",
                border:        `1.5px solid ${active ? col + "33" : "transparent"}`,
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: "700", color: col, minWidth: "20px" }}>{row.q}</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: active ? col : textSec, fontWeight: active ? "700" : "400" }}>{row.f}</span>
            </div>
          );
        })}
      </div>

      {/* Key insight */}
      <div style={{ padding: "9px 12px", borderRadius: "9px", background: panelBg, border: `1.5px solid ${border}`, fontSize: "11px", color: textSec, lineHeight: "1.5" }}>
        <strong style={{ color: textPri }}>Key insight: </strong>
        trig functions of any angle equal ± the same trig function of its reference angle. The sign depends on the quadrant.
      </div>
    </div>
  );
}

// ─── Shared card ──────────────────────────────────────────────────────────────

export function ReferenceAngleCard({ dark = false, explanation }) {
  const exp = explanation || DEFAULT_EXPLANATION;

  const [angle, setAngle] = useState(130);
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

  const border  = dark ? "#334155" : "#e2e8f0";
  const textPri = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "#94a3b8" : "#64748b";
  const panelBg = dark ? "#0f172a" : "#f1f5f9";
  const sceneBg = dark ? "#0f172a" : "#f1f5f9";

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "420px" }}>
      {/* Scene 2/3 */}
      <div style={{ flex: "0 0 66.666%", background: sceneBg, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", touchAction: "none", userSelect: "none", borderRight: `1.5px solid ${border}` }}>
        <Scene angle={angle} dark={dark} onPointerDown={onPointerDown} svgRef={svgRef} />
      </div>
      {/* Explanation 1/3 */}
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

// ─── Default export (standalone page) ────────────────────────────────────────

export default function ReferenceAngleWrapper({ explanation } = {}) {
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
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>Reference Angles</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>Drag the terminal side — see the reference angle update across quadrants</p>
        </div>
        <button onClick={() => setDark(d => !d)} style={{ padding: "6px 14px", borderRadius: "8px", border: `1.5px solid ${border}`, background: surface, color: textSec, fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <div style={{ width: "100%", maxWidth: "900px", background: surface, borderRadius: "20px", border: `1.5px solid ${border}`, boxShadow: dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)", overflow: "hidden" }}>
        <ReferenceAngleCard dark={dark} explanation={explanation} />
      </div>
    </div>
  );
}