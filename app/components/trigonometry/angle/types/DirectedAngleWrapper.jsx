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

// CW arc path (sweep flag = 1)
function arcPathCW(cx, cy, r, from, to) {
  const delta = ccwDelta(to, from); // reversed
  const s  = polar(cx, cy, r, from);
  const e  = polar(cx, cy, r, to);
  const la = delta > 180 ? 1 : 0;
  return `M ${ff(s.x)} ${ff(s.y)} A ${r} ${r} 0 ${la} 1 ${ff(e.x)} ${ff(e.y)}`;
}

function sectorPathCCW(cx, cy, r, from, to) {
  return `${arcPath(cx, cy, r, from, to)} L ${cx} ${cy} Z`;
}

function sectorPathCW(cx, cy, r, from, to) {
  return `${arcPathCW(cx, cy, r, from, to)} L ${cx} ${cy} Z`;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SZ  = 340;
const CX  = SZ / 2;
const CY  = SZ / 2;
const R   = 108;
const ARM = 126;
const ARC = 50;

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const BBG    = "rgba(37,99,235,0.10)";
const ABG    = "rgba(217,119,6,0.10)";

const SNAP_TARGETS = [
  0, 30, 45, 60, 90, 120, 135, 150, 180,
  210, 225, 240, 270, 300, 315, 330, 360,
  -30, -45, -60, -90, -120, -135, -150, -180,
  -210, -225, -240, -270, -300, -315, -330, -360,
];

// ─── Snap ─────────────────────────────────────────────────────────────────────

function snapAngle(raw) {
  let closest = raw, minDist = Infinity;
  for (const t of SNAP_TARGETS) {
    const d = Math.abs(raw - t);
    if (d < minDist) { minDist = d; closest = t; }
  }
  return minDist <= 5 ? closest : Math.round(raw);
}

// ─── Default explanation ──────────────────────────────────────────────────────

const DEFAULT_EXPLANATION = {
  title: "Directed Angles",
  body: [
    "A directed angle has both a magnitude and a direction. Positive angles rotate counter-clockwise (CCW); negative angles rotate clockwise (CW).",
    "This is fundamental to trigonometry — the sign of the angle determines the signs of sin and cos via the unit circle.",
    "Drag CCW (upward from the positive x-axis) for positive angles. Drag CW (downward) for negative angles.",
  ],
  identities: [
    { label: "sin(−θ) = −sin(θ)", note: "sine is odd" },
    { label: "cos(−θ) = cos(θ)",  note: "cosine is even" },
    { label: "tan(−θ) = −tan(θ)", note: "tangent is odd" },
  ],
};

// ─── Direction arrow helper ───────────────────────────────────────────────────

/**
 * Small arrowhead at the tip of the arc indicating rotation direction.
 */
function ArrowHead({ cx, cy, r, angle, isNeg, color }) {
  const ARROW_SIZE = 8;
  // Arrow sits at the terminal point of the arc
  const tip = polar(cx, cy, r, angle);
  // Tangent direction at tip:
  // For CCW arc, tangent is perpendicular CCW to the radius
  // For CW arc, tangent is perpendicular CW
  const tangentAngle = isNeg ? angle - 90 : angle + 90;
  const back = polar(tip.x, tip.y, ARROW_SIZE, tangentAngle + 150);
  const left = polar(tip.x, tip.y, ARROW_SIZE, tangentAngle - 150);
  return (
    <polygon
      points={`${ff(tip.x)},${ff(tip.y)} ${ff(back.x)},${ff(back.y)} ${ff(left.x)},${ff(left.y)}`}
      fill={color}
      opacity={0.9}
    />
  );
}

// ─── SVG Scene ────────────────────────────────────────────────────────────────

function Scene({ angle, dark, onPointerDown, svgRef }) {
  const isNeg    = angle < 0;
  const isZero   = angle === 0;
  const absAngle = Math.abs(angle);
  const norm     = ((angle % 360) + 360) % 360; // normalized for terminal side

  const color    = isNeg ? AMBER : BLUE;
  const sectorBg = isNeg ? ABG   : BBG;

  const termEnd  = polar(CX, CY, ARM, norm);
  const unitPt   = polar(CX, CY, R,   norm);

  // Arc endpoints: always from 0 to norm, direction depends on sign
  const showArc  = absAngle > 1;
  const fullCirc = absAngle === 360;

  // Label position — midpoint of arc
  const arcMid   = isNeg ? -(absAngle / 2) : absAngle / 2;
  const labelPos = polar(CX, CY, ARC + 22, arcMid);

  // cos/sin values
  const cosVal   = Math.cos(toRad(angle)).toFixed(3);
  const sinVal   = Math.sin(toRad(angle)).toFixed(3);

  const sub  = dark ? "#475569" : "#94a3b8";
  const grid = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const fs   = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

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
      <text x={SZ-10} y={CY-8}  textAnchor="middle" fontSize={11} fontStyle="italic" fill={sub} style={fs}>x</text>
      <text x={CX+8}  y={14}    textAnchor="start"  fontSize={11} fontStyle="italic" fill={sub} style={fs}>y</text>

      {/* ── Unit circle ── */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1} strokeDasharray="3 4" opacity={0.45} />
      <text x={CX+R+4} y={CY-6} fontSize={9} fill={sub} opacity={0.5} style={fs}>1</text>

      {/* ── Sector fill ── */}
      {showArc && !fullCirc && (
        <path
          d={isNeg
            ? sectorPathCW(CX, CY, ARC, 0, norm)
            : sectorPathCCW(CX, CY, ARC, 0, norm)
          }
          fill={sectorBg}
          stroke="none"
        />
      )}
      {fullCirc && (
        <circle cx={CX} cy={CY} r={ARC} fill={sectorBg} stroke="none" />
      )}

      {/* ── Arc stroke ── */}
      {showArc && !fullCirc && (
        <path
          d={isNeg
            ? arcPathCW(CX, CY, ARC, 0, norm)
            : arcPath(CX, CY, ARC, 0, norm)
          }
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      )}
      {fullCirc && (
        <circle cx={CX} cy={CY} r={ARC} fill="none" stroke={color} strokeWidth={2.5} />
      )}

      {/* ── Direction arrowhead ── */}
      {showArc && absAngle > 10 && absAngle < 355 && (
        <ArrowHead cx={CX} cy={CY} r={ARC} angle={norm} isNeg={isNeg} color={color} />
      )}

      {/* ── Direction badge ── */}
      {showArc && (
        <g>
          <rect
            x={polar(CX, CY, ARC + 36, arcMid).x - 11}
            y={polar(CX, CY, ARC + 36, arcMid).y - 9}
            width={22} height={18} rx={5}
            fill={color} opacity={0.15}
          />
          <text
            x={polar(CX, CY, ARC + 36, arcMid).x}
            y={polar(CX, CY, ARC + 36, arcMid).y + 1}
            textAnchor="middle" dominantBaseline="central"
            fontSize={11} fontWeight="800" fill={color} style={fs}
          >
            {isNeg ? "−" : "+"}
          </text>
        </g>
      )}

      {/* ── Angle label ── */}
      {showArc && absAngle > 20 && absAngle < 355 && (
        <text
          x={labelPos.x} y={labelPos.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={12} fontWeight="700" fill={color} style={fs}
        >
          {angle}&deg;
        </text>
      )}

      {/* ── Direction label on arc ── */}
      {showArc && absAngle > 45 && (
        <text
          x={polar(CX, CY, ARC - 12, arcMid / 2).x}
          y={polar(CX, CY, ARC - 12, arcMid / 2).y}
          textAnchor="middle" dominantBaseline="central"
          fontSize={8} fill={color} opacity={0.6} style={fs}
        >
          {isNeg ? "CW" : "CCW"}
        </text>
      )}

      {/* ── Initial side ── */}
      <line x1={CX} y1={CY} x2={CX + ARM} y2={CY}
        stroke={sub} strokeWidth={2} strokeLinecap="round" />
      <text x={CX + ARM + 5} y={CY + 13} fontSize={9} fill={sub} style={fs}>initial</text>

      {/* ── Terminal side ── */}
      <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y}
        stroke={color} strokeWidth={2.5} strokeLinecap="round" />
      <text
        x={polar(CX, CY, ARM + 14, norm).x}
        y={polar(CX, CY, ARM + 14, norm).y}
        textAnchor="middle" dominantBaseline="central"
        fontSize={9} fill={color} style={fs}
      >
        terminal
      </text>

      {/* ── Unit circle point ── */}
      <circle cx={unitPt.x} cy={unitPt.y} r={5} fill={color} opacity={0.85} stroke="white" strokeWidth={1.5} />

      {/* ── cos/sin projections ── */}
      {/* cos projection (horizontal) */}
      <line
        x1={CX} y1={unitPt.y}
        x2={unitPt.x} y2={unitPt.y}
        stroke={GREEN} strokeWidth={1.5} strokeDasharray="3 3" opacity={0.6}
      />
      {/* sin projection (vertical) */}
      <line
        x1={unitPt.x} y1={CY}
        x2={unitPt.x} y2={unitPt.y}
        stroke={RED} strokeWidth={1.5} strokeDasharray="3 3" opacity={0.6}
      />
      {/* cos label */}
      <text
        x={(CX + unitPt.x) / 2} y={unitPt.y - 7}
        textAnchor="middle" fontSize={9} fill={GREEN} fontWeight="600" style={fs}
      >
        cos
      </text>
      {/* sin label */}
      <text
        x={unitPt.x + (unitPt.x > CX ? 8 : -8)} y={(CY + unitPt.y) / 2}
        textAnchor={unitPt.x > CX ? "start" : "end"} fontSize={9} fill={RED} fontWeight="600" style={fs}
      >
        sin
      </text>

      {/* ── Origin ── */}
      <circle cx={CX} cy={CY} r={4.5} fill={color} />
      <text x={CX + 7} y={CY + 14} fontSize={9} fill={sub} style={fs}>O</text>

      {/* ── Drag handle ── */}
      <g style={{ cursor: "grab", touchAction: "none" }}>
        <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
        <circle cx={termEnd.x} cy={termEnd.y} r={8}
          fill={color} opacity={0.92} stroke="white" strokeWidth={2} />
      </g>
    </svg>
  );
}

// ─── Identity row ─────────────────────────────────────────────────────────────

function IdentityRow({ label, note, border, textPri, textSec, panelBg }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px", borderRadius: "8px", background: panelBg, border: `1.5px solid ${border}`, marginBottom: "4px" }}>
      <span style={{ fontSize: "11px", fontWeight: "700", fontFamily: "monospace", color: textPri }}>{label}</span>
      <span style={{ fontSize: "10px", color: textSec, fontStyle: "italic" }}>{note}</span>
    </div>
  );
}

// ─── Explanation panel ────────────────────────────────────────────────────────

function ExplanationPanel({ explanation, angle, dark, border, textPri, textSec, panelBg }) {
  const isNeg    = angle < 0;
  const absAngle = Math.abs(angle);
  const norm     = ((angle % 360) + 360) % 360;
  const color    = isNeg ? AMBER : BLUE;

  const sinVal = Math.sin(toRad(angle));
  const cosVal = Math.cos(toRad(angle));

  // Mirror values for identity display
  const sinNeg = Math.sin(toRad(-angle));
  const cosNeg = Math.cos(toRad(-angle));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", height: "100%", overflowY: "auto" }}>
      {/* Title */}
      <div>
        <div style={{ fontSize: "13px", fontWeight: "800", color: textPri, marginBottom: "6px" }}>{explanation.title}</div>
        {explanation.body.map((para, i) => (
          <p key={i} style={{ margin: "0 0 8px", fontSize: "12px", lineHeight: "1.65", color: textSec }}>{para}</p>
        ))}
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Live values */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Current angle</div>

        {/* Angle display */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
          <div style={{ fontSize: "42px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.04em" }}>{angle}&deg;</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "6px", fontSize: "10px", fontWeight: "700", color, background: `${color}15`, border: `1.5px solid ${color}33` }}>
              {isNeg ? "CW ↻" : "CCW ↺"}
            </span>
            <span style={{ fontSize: "10px", color: textSec }}>
              terminal: {norm}&deg;
            </span>
          </div>
        </div>

        {/* sin / cos live */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
          {[
            { fn: `sin(${angle}°)`, val: sinVal, col: RED   },
            { fn: `cos(${angle}°)`, val: cosVal, col: GREEN },
          ].map(({ fn, val, col }) => (
            <div key={fn} style={{ flex: 1, background: panelBg, borderRadius: "9px", border: `1.5px solid ${col}22`, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: "9px", fontWeight: "600", color: col, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px", fontFamily: "monospace" }}>{fn}</div>
              <div style={{ fontSize: "16px", fontWeight: "900", color: col, lineHeight: 1, fontFamily: "monospace" }}>{val >= 0 ? "" : ""}{val.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Live identity verification */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Live identity check</div>
        <div style={{ padding: "9px 12px", borderRadius: "9px", background: panelBg, border: `1.5px solid ${border}`, fontFamily: "monospace", fontSize: "11px", lineHeight: "1.8", color: textSec }}>
          <div><span style={{ color: RED }}>sin({angle}°)</span> = <span style={{ color: RED, fontWeight: "700" }}>{sinVal.toFixed(3)}</span></div>
          <div><span style={{ color: RED }}>sin({-angle}°)</span> = <span style={{ color: RED, fontWeight: "700" }}>{sinNeg.toFixed(3)}</span> ✓ negated</div>
          <div style={{ marginTop: "4px" }}><span style={{ color: GREEN }}>cos({angle}°)</span> = <span style={{ color: GREEN, fontWeight: "700" }}>{cosVal.toFixed(3)}</span></div>
          <div><span style={{ color: GREEN }}>cos({-angle}°)</span> = <span style={{ color: GREEN, fontWeight: "700" }}>{cosNeg.toFixed(3)}</span> ✓ same</div>
        </div>
      </div>

      <div style={{ height: "1px", background: border, flexShrink: 0 }} />

      {/* Identities */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: "600", color: textSec, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Identities</div>
        {explanation.identities.map((id, i) => (
          <IdentityRow key={i} label={id.label} note={id.note} border={border} textPri={textPri} textSec={textSec} panelBg={panelBg} />
        ))}
      </div>
    </div>
  );
}

// ─── Shared card ──────────────────────────────────────────────────────────────

export function DirectedAnglesCard({ dark = false, explanation }) {
  const exp = explanation || DEFAULT_EXPLANATION;

  const [angle, setAngle] = useState(60);
  const svgRef    = useRef(null);
  const dragging  = useRef(false);
  const lastY     = useRef(null);
  const negative  = useRef(false);

  /**
   * Pointer → angle strategy:
   * - Compute standard math angle from pointer position relative to center
   * - Track vertical movement to determine CW vs CCW direction
   * - Above x-axis + moving CCW → positive; below x-axis → detect direction from lastY
   */
  const getAngle = useCallback((e) => {
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const px    = (e.clientX - rect.left) * scale - CX;
    const py    = (e.clientY - rect.top)  * scale - CY;
    let deg = Math.atan2(-py, px) * (180 / Math.PI);
    if (deg < 0) deg += 360;
    // Use negative convention if user is dragging CW
    if (negative.current) deg = deg - 360;
    return snapAngle(Math.max(-360, Math.min(360, deg)));
  }, []);

  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    const rect  = svgRef.current.getBoundingClientRect();
    const scale = SZ / rect.width;
    const py    = (e.clientY - rect.top) * scale - CY;
    // Start below x-axis → CW → negative
    negative.current = py > 0;
    lastY.current    = py;
    setAngle(getAngle(e));
  }, [getAngle]);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const rect  = svgRef.current.getBoundingClientRect();
      const scale = SZ / rect.width;
      const py    = (e.clientY - rect.top) * scale - CY;
      // Update direction if crossed x-axis
      if (lastY.current !== null) {
        if (lastY.current <= 0 && py > 0) negative.current = true;
        if (lastY.current >= 0 && py < 0) negative.current = false;
      }
      lastY.current = py;
      setAngle(getAngle(e));
    };
    const onUp = () => { dragging.current = false; lastY.current = null; };
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

export default function DirectedAnglesWrapper({ explanation } = {}) {
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
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>Directed Angles</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: textSec }}>Drag above the x-axis for positive (CCW) — drag below for negative (CW)</p>
        </div>
        <button onClick={() => setDark(d => !d)} style={{ padding: "6px 14px", borderRadius: "8px", border: `1.5px solid ${border}`, background: surface, color: textSec, fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <div style={{ width: "100%", maxWidth: "900px", background: surface, borderRadius: "20px", border: `1.5px solid ${border}`, boxShadow: dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)", overflow: "hidden" }}>
        <DirectedAnglesCard dark={dark} explanation={explanation} />
      </div>
    </div>
  );
}