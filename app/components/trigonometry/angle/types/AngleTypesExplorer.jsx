"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED MATH HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

const toRad = (deg) => (deg * Math.PI) / 180;
const toDeg = (rad) => (rad * 180) / Math.PI;

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

function boxPath(cx, cy, a1, a2, sz = 12) {
  const p1 = polar(cx, cy, sz, a1);
  const p2 = polar(cx, cy, sz, a2);
  const c  = { x: p1.x + p2.x - cx, y: p1.y + p2.y - cy };
  return `M ${ff(p1.x)} ${ff(p1.y)} L ${ff(c.x)} ${ff(c.y)} L ${ff(p2.x)} ${ff(p2.y)}`;
}

function angleOf(cx, cy, px, py) {
  let deg = toDeg(Math.atan2(-(py - cy), px - cx));
  if (deg < 0) deg += 360;
  return deg;
}

function snap5(raw) { return Math.round(raw / 5) * 5; }

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const GREEN  = "#16a34a";
const PURPLE = "#9333ea";

const BBG = "rgba(37,99,235,0.11)";
const ABG = "rgba(217,119,6,0.11)";
const GBG = "rgba(22,163,74,0.15)";

const FS = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function ValueCard({ label, sublabel, value, color, panelBg }) {
  return (
    <div style={{ flex: "1 1 90px", background: panelBg, borderRadius: "10px", border: `1.5px solid ${color}22`, padding: "10px 12px", textAlign: "center" }}>
      <div style={{ fontSize: "10px", fontWeight: "600", color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
      {sublabel && <div style={{ fontSize: "10px", color, opacity: 0.6, marginBottom: "4px" }}>{sublabel}</div>}
      <div style={{ fontSize: "28px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>{value}&deg;</div>
    </div>
  );
}

function Equation({ parts, size = "15px" }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "5px", fontSize: size, fontWeight: "700", justifyContent: "center", flexWrap: "wrap", fontFamily: "system-ui, sans-serif" }}>
      {parts.map((p, i) => <span key={i} style={{ color: p.color, opacity: p.dim ? 0.4 : 1, fontSize: p.small ? "11px" : undefined, fontWeight: p.light ? "500" : "700" }}>{p.text}</span>)}
    </div>
  );
}

function InfoRow({ label, value, color, tp, ts }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px" }}>
      <span style={{ color: ts }}>{label}</span>
      <span style={{ color, fontWeight: "700" }}>{value}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 1 — BASIC ANGLE TYPES
// ═══════════════════════════════════════════════════════════════════════════════

const BASIC_TYPES = [
  { name: "Zero",     cond: a => a === 0,         range: "θ = 0°",         desc: "Both arms overlap. No rotation has occurred.",        color: "#64748b", bg: "rgba(100,116,139,0.11)", preset: 0   },
  { name: "Acute",    cond: a => a > 0 && a < 90, range: "0° < θ < 90°",   desc: "Less than a quarter turn. Sharper than a right angle.", color: BLUE,     bg: BBG,                      preset: 45  },
  { name: "Right",    cond: a => a === 90,         range: "θ = 90°",        desc: "Exactly a quarter turn. Arms are perpendicular.",      color: GREEN,    bg: GBG,                      preset: 90  },
  { name: "Obtuse",   cond: a => a > 90 && a < 180, range: "90° < θ < 180°", desc: "More than a quarter, less than a half turn.",       color: AMBER,    bg: ABG,                      preset: 130 },
  { name: "Straight", cond: a => a === 180,        range: "θ = 180°",       desc: "Exactly a half turn. Forms a straight line.",         color: "#dc2626", bg: "rgba(220,38,38,0.11)",   preset: 180 },
  { name: "Reflex",   cond: a => a > 180 && a < 360, range: "180° < θ < 360°", desc: "More than a half turn. Arc wraps the long way.", color: PURPLE,   bg: "rgba(147,51,234,0.11)",  preset: 270 },
  { name: "Full",     cond: a => a === 360,        range: "θ = 360°",       desc: "Complete rotation. Arms overlap again.",               color: "#0891b2", bg: "rgba(8,145,178,0.11)",   preset: 360 },
];

function snapBasic(r) {
  for (const t of [0, 90, 180, 270, 360]) if (Math.abs(r - t) <= 4) return t;
  return Math.round(r);
}

function BasicAngles({ dark }) {
  const SZ = 260, VX = 130, VY = 130, ARM = 104, ARC = 48;
  const [angle, setAngle] = useState(45);
  const svgRef = useRef(null), drag = useRef(false);
  const meta = BASIC_TYPES.find(t => t.cond(angle)) || BASIC_TYPES[1];

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    const px = (e.clientX - rect.left) * sc - VX, py = (e.clientY - rect.top) * sc - VY;
    let d = Math.atan2(-py, px) * 180 / Math.PI;
    if (d < 0) d += 360;
    return snapBasic(d);
  }, []);

  const onPD = useCallback((e) => { e.preventDefault(); drag.current = true; setAngle(getA(e)); }, [getA]);

  useEffect(() => {
    const mv = e => { if (drag.current) setAngle(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const isZero = angle === 0, isFull = angle === 360;
  const a2 = isZero ? 0.001 : angle, delta = ccwDelta(0, a2), isRight = Math.abs(delta - 90) < 0.5;
  const a1e = polar(VX, VY, ARM, 0), a2e = polar(VX, VY, ARM, angle), lp = polar(VX, VY, ARC + 24, delta / 2);
  const c = meta.color, bg = meta.bg;

  const { ts, pb, brd, tp } = useTheme(dark);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div ref={svgRef} onPointerDown={onPD} style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", touchAction: "none", userSelect: "none", cursor: "crosshair" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block", touchAction: "none" }}>
          {!isFull && delta > 0 && <path d={sectorPath(VX, VY, ARC, 0, a2)} fill={bg} stroke="none" />}
          {isFull && <circle cx={VX} cy={VY} r={ARC} fill="none" stroke={c} strokeWidth={2.5} />}
          {!isFull && delta > 0 && (isRight
            ? <path d={boxPath(VX, VY, 0, a2)} fill="none" stroke={c} strokeWidth={2.5} strokeLinejoin="miter" />
            : <path d={arcPath(VX, VY, ARC, 0, a2)} fill="none" stroke={c} strokeWidth={2.5} strokeLinecap="round" />
          )}
          <line x1={VX} y1={VY} x2={a1e.x} y2={a1e.y} stroke={c} strokeWidth={2.5} strokeLinecap="round" />
          <line x1={VX} y1={VY} x2={a2e.x} y2={a2e.y} stroke={c} strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={VX} cy={VY} r={4} fill={c} />
          {!isFull && delta > 0 && !isRight && <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={c} style={FS}>{angle}&deg;</text>}
          <g style={{ cursor: "grab" }}>
            <circle cx={a2e.x} cy={a2e.y} r={16} fill="transparent" />
            <circle cx={a2e.x} cy={a2e.y} r={8} fill={c} opacity={0.92} stroke="white" strokeWidth={2} />
          </g>
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
          <span style={{ padding: "3px 10px", borderRadius: "999px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: c, background: bg, border: `1.5px solid ${c}` }}>{meta.name}</span>
          <span style={{ padding: "2px 9px", borderRadius: "6px", fontSize: "11px", fontWeight: "600", fontFamily: "monospace", color: c, background: bg }}>{meta.range}</span>
        </div>
        <div>
          <div style={{ fontSize: "56px", fontWeight: "900", lineHeight: 1, color: c, letterSpacing: "-0.04em", transition: "color 0.2s" }}>{angle}</div>
          <div style={{ fontSize: "12px", color: ts, marginTop: "2px" }}>degrees</div>
        </div>
        <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.6", color: ts }}>{meta.desc}</p>
        <div style={{ height: "1px", background: brd }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {BASIC_TYPES.map(t => (
            <button key={t.name} onClick={() => setAngle(t.preset)} style={{ padding: "4px 10px", borderRadius: "7px", border: `1.5px solid ${meta.name === t.name ? t.color : brd}`, background: meta.name === t.name ? t.bg : "transparent", color: meta.name === t.name ? t.color : ts, fontSize: "11px", fontWeight: meta.name === t.name ? "700" : "400", fontFamily: "system-ui,sans-serif", cursor: "pointer", transition: "all 0.12s" }}>{t.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 2 — COMPLEMENTARY & SUPPLEMENTARY
// ═══════════════════════════════════════════════════════════════════════════════

const CMODES = {
  complementary: { label: "Complementary", limit: 90,  sum: "90°",  desc: "Two angles summing to 90°. Together they form a right angle."    },
  supplementary: { label: "Supplementary", limit: 180, sum: "180°", desc: "Two angles summing to 180°. Together they form a straight line." },
};

function snapComp(r, lim) {
  const mid = lim / 2;
  for (const t of [0, mid, lim]) if (Math.abs(r - t) <= 4) return t;
  return Math.round(Math.min(Math.max(r, 0), lim));
}

function CompSupp({ dark }) {
  const SZ = 260, VX = 130, VY = 130, ARM = 104, ARCA = 48, ARCB = 68;
  const [mode,  setMode]  = useState("complementary");
  const [alpha, setAlpha] = useState(35);
  const svgRef = useRef(null), drag = useRef(false);
  const md = CMODES[mode], limit = md.limit, beta = limit - alpha;

  const handleMode = k => { setMode(k); setAlpha(a => Math.min(a, CMODES[k].limit)); };

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    const px = (e.clientX - rect.left) * sc - VX, py = (e.clientY - rect.top) * sc - VY;
    let d = Math.atan2(-py, px) * 180 / Math.PI;
    if (d < 0) d += 360;
    return snapComp(d, limit);
  }, [limit]);

  const onPD = useCallback((e) => { e.preventDefault(); drag.current = true; setAlpha(getA(e)); }, [getA]);

  useEffect(() => {
    const mv = e => { if (drag.current) setAlpha(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const isComp = mode === "complementary";
  const a1e = polar(VX, VY, ARM, 0), a2e = polar(VX, VY, ARM, alpha), a3e = polar(VX, VY, ARM, limit);
  const alp = polar(VX, VY, ARCA + 20, alpha / 2), blp = polar(VX, VY, ARCB + 16, alpha + beta / 2);
  const isAR = Math.abs(alpha - 90) < 0.5, isBR = Math.abs(beta - 90) < 0.5;
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div ref={svgRef} onPointerDown={onPD} style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", touchAction: "none", userSelect: "none", cursor: "crosshair" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block", touchAction: "none" }}>
          {alpha > 0 && <path d={sectorPath(VX, VY, ARCB, 0, alpha)} fill={BBG} stroke="none" />}
          {beta  > 0 && <path d={sectorPath(VX, VY, ARCB, alpha, limit)} fill={ABG} stroke="none" />}
          {alpha > 0 && (isAR ? <path d={boxPath(VX, VY, 0, alpha)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinejoin="miter" /> : <path d={arcPath(VX, VY, ARCA, 0, alpha)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />)}
          {beta  > 0 && (isBR ? <path d={boxPath(VX, VY, alpha, limit)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter" /> : <path d={arcPath(VX, VY, ARCB, alpha, limit)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />)}
          {isComp
            ? <line x1={VX} y1={VY} x2={a3e.x} y2={a3e.y} stroke={sub} strokeWidth={2.5} strokeLinecap="round" />
            : <line x1={polar(VX, VY, ARM, 180).x} y1={VY} x2={a1e.x} y2={a1e.y} stroke={sub} strokeWidth={2.5} strokeLinecap="round" />
          }
          <line x1={VX} y1={VY} x2={a1e.x} y2={a1e.y} stroke={sub} strokeWidth={2.5} strokeLinecap="round" />
          <line x1={VX} y1={VY} x2={a2e.x} y2={a2e.y} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={VX} cy={VY} r={4} fill={BLUE} />
          {alpha > 0 && <text x={alp.x} y={alp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE}  style={FS}>{alpha}&deg;</text>}
          {beta  > 0 && <text x={blp.x} y={blp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={FS}>{beta}&deg;</text>}
          <g style={{ cursor: "grab" }}>
            <circle cx={a2e.x} cy={a2e.y} r={16} fill="transparent" />
            <circle cx={a2e.x} cy={a2e.y} r={8} fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
          </g>
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <div style={{ display: "flex", background: pb, border: `1.5px solid ${brd}`, borderRadius: "9px", padding: "3px", gap: "3px" }}>
          {Object.entries(CMODES).map(([k, m]) => {
            const act = mode === k;
            return <button key={k} onClick={() => handleMode(k)} style={{ flex: 1, padding: "5px 8px", borderRadius: "6px", border: "none", background: act ? BLUE : "transparent", color: act ? "#fff" : ts, fontSize: "11px", fontWeight: act ? "700" : "400", fontFamily: "system-ui,sans-serif", cursor: "pointer", transition: "all 0.15s" }}>{m.label}</button>;
          })}
        </div>
        <Equation parts={[{ text: alpha + "°", color: BLUE }, { text: "+", color: tp, dim: true }, { text: beta + "°", color: AMBER }, { text: "=", color: tp, dim: true }, { text: md.sum, color: tp }]} />
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="α (alpha)" value={alpha} color={BLUE}  panelBg={pb} />
          <ValueCard label="β (beta)"  value={beta}  color={AMBER} panelBg={pb} />
        </div>
        <div style={{ height: "1px", background: brd }} />
        <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.65", color: ts }}>{md.desc}</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 3 — VERTICAL ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function snapVert(r) {
  const c = Math.min(Math.max(r, 1), 179);
  for (const t of [30, 45, 60, 90, 120, 135, 150]) if (Math.abs(c - t) <= 4) return t;
  return Math.round(c);
}

function VertAngles({ dark }) {
  const SZ = 260, VX = 130, VY = 130, ARM = 110, ARC = 42;
  const [theta, setTheta] = useState(55);
  const svgRef = useRef(null), drag = useRef(false), upper = useRef(true);
  const alpha = theta, beta = 180 - theta, isPerp = theta === 90;

  const getT = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    const px = (e.clientX - rect.left) * sc - VX, py = (e.clientY - rect.top) * sc - VY;
    let d = Math.atan2(-py, px) * 180 / Math.PI;
    if (d < 0) d += 360;
    if (!upper.current) { d -= 180; if (d < 0) d += 360; }
    if (d > 180) d = 360 - d;
    return snapVert(d);
  }, []);

  const onDrag = useCallback((e, isU) => { e.preventDefault(); e.stopPropagation(); drag.current = true; upper.current = isU; setTheta(getT(e)); }, [getT]);

  useEffect(() => {
    const mv = e => { if (drag.current) setTheta(getT(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getT]);

  const aE = polar(VX, VY, ARM, 0), aW = polar(VX, VY, ARM, 180);
  const bN = polar(VX, VY, ARM, theta), bS = polar(VX, VY, ARM, theta + 180);
  const lA1 = polar(VX, VY, ARC + 16, alpha / 2), lB1 = polar(VX, VY, ARC + 16, theta + beta / 2);
  const lA2 = polar(VX, VY, ARC + 16, 180 + alpha / 2), lB2 = polar(VX, VY, ARC + 16, theta + 180 + beta / 2);
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div ref={svgRef} style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", touchAction: "none", userSelect: "none" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block", touchAction: "none" }}>
          <path d={sectorPath(VX, VY, ARC, 0, theta)}         fill={BBG} stroke="none" />
          <path d={sectorPath(VX, VY, ARC, theta, 180)}       fill={ABG} stroke="none" />
          <path d={sectorPath(VX, VY, ARC, 180, theta + 180)} fill={BBG} stroke="none" />
          <path d={sectorPath(VX, VY, ARC, theta + 180, 360)} fill={ABG} stroke="none" />
          {isPerp ? (
            <>
              {[[0,90,BLUE],[90,180,AMBER],[180,270,BLUE],[270,360,AMBER]].map(([a1,a2,col],i) => (
                <path key={i} d={boxPath(VX, VY, a1, a2, 12)} fill="none" stroke={col} strokeWidth={2} strokeLinejoin="miter" />
              ))}
            </>
          ) : (
            <>
              <path d={arcPath(VX, VY, ARC, 0, theta)}         fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
              <path d={arcPath(VX, VY, ARC, theta, 180)}       fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
              <path d={arcPath(VX, VY, ARC, 180, theta + 180)} fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
              <path d={arcPath(VX, VY, ARC, theta + 180, 360)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
            </>
          )}
          <line x1={aW.x} y1={aW.y} x2={aE.x} y2={aE.y} stroke={sub}  strokeWidth={2.5} strokeLinecap="round" />
          <line x1={bS.x} y1={bS.y} x2={bN.x} y2={bN.y} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={VX} cy={VY} r={4} fill={BLUE} />
          {!isPerp && <>
            <text x={lA1.x} y={lA1.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE}  style={FS}>{alpha}&deg;</text>
            <text x={lB1.x} y={lB1.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{beta}&deg;</text>
            <text x={lA2.x} y={lA2.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE}  style={FS}>{alpha}&deg;</text>
            <text x={lB2.x} y={lB2.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{beta}&deg;</text>
          </>}
          {[bN, bS].map((pt, i) => (
            <g key={i} onPointerDown={e => onDrag(e, i === 0)} style={{ cursor: "grab", touchAction: "none" }}>
              <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
              <circle cx={pt.x} cy={pt.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          ))}
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <Equation parts={[{ text: alpha + "°", color: BLUE }, { text: "+", color: tp, dim: true }, { text: beta + "°", color: AMBER }, { text: "=", color: tp, dim: true }, { text: "180°", color: tp }]} />
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="α pair" sublabel="vertical" value={alpha} color={BLUE}  panelBg={pb} />
          <ValueCard label="β pair" sublabel="vertical" value={beta}  color={AMBER} panelBg={pb} />
        </div>
        <div style={{ height: "1px", background: brd }} />
        <div style={{ padding: "10px 12px", borderRadius: "10px", background: pb, border: `1.5px solid ${brd}`, fontSize: "12px", lineHeight: "1.65", color: ts }}>
          {[[BLUE, alpha], [AMBER, beta]].map(([col, val], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: i === 0 ? "4px" : 0 }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: col, display: "inline-block", flexShrink: 0 }} />
              <span>Vertical pair: <strong style={{ color: col }}>{val}&deg;</strong> = <strong style={{ color: col }}>{val}&deg;</strong></span>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.65", color: ts }}>Opposite angles formed by two intersecting lines are always equal. Drag to 90&deg; to make all four right angles.</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 4 — ADJACENT ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

const SNAP_ADJ = [30, 45, 60, 90, 120, 135, 150, 180];

function snapAdj(r, mn, mx) {
  const c = Math.min(Math.max(r, mn), mx);
  for (const t of SNAP_ADJ) if (t >= mn && t <= mx && Math.abs(c - t) <= 4) return t;
  return Math.round(c);
}

function rawAngle(px, py) {
  let d = Math.atan2(-py, px) * 180 / Math.PI;
  if (d < 0) d += 360;
  return d;
}

function AdjacentAngles({ dark }) {
  const SZ = 260, VX = 130, VY = 130, ARM = 104, ARCA = 46, ARCB = 64;
  const [alpha, setAlpha] = useState(65);
  const [beta,  setBeta]  = useState(80);
  const svgRef = useRef(null), drag = useRef(null), aRef = useRef(65), bRef = useRef(80);

  useEffect(() => { aRef.current = alpha; }, [alpha]);
  useEffect(() => { bRef.current = beta;  }, [beta]);

  const total = alpha + beta;

  const getRA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    return rawAngle((e.clientX - rect.left) * sc - VX, (e.clientY - rect.top) * sc - VY);
  }, []);

  const onA2 = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "arm2"; setAlpha(snapAdj(getRA(e), 2, 358 - bRef.current)); }, [getRA]);
  const onA3 = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "arm3"; const nt = Math.min(Math.max(getRA(e), aRef.current + 2), 358); setBeta(snapAdj(nt - aRef.current, 2, 358 - aRef.current)); }, [getRA]);

  useEffect(() => {
    const mv = e => {
      if (!drag.current) return;
      const r = getRA(e);
      if (drag.current === "arm2") setAlpha(snapAdj(r, 2, 358 - bRef.current));
      else { const nt = Math.min(Math.max(r, aRef.current + 2), 358); setBeta(snapAdj(nt - aRef.current, 2, 358 - aRef.current)); }
    };
    const up = () => { drag.current = null; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getRA]);

  const a1e = polar(VX, VY, ARM, 0), a2e = polar(VX, VY, ARM, alpha), a3e = polar(VX, VY, ARM, total);
  const isAR = Math.abs(alpha - 90) < 0.5, isBR = Math.abs(beta - 90) < 0.5;
  const alp = polar(VX, VY, ARCA + 20, alpha / 2), blp = polar(VX, VY, ARCB + 16, alpha + beta / 2);
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div ref={svgRef} style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", touchAction: "none", userSelect: "none" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block", touchAction: "none" }}>
          <path d={sectorPath(VX, VY, ARCB, 0, alpha)}    fill={BBG} stroke="none" />
          <path d={sectorPath(VX, VY, ARCB, alpha, total)} fill={ABG} stroke="none" />
          {isAR ? <path d={boxPath(VX, VY, 0, alpha)}    fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinejoin="miter" /> : <path d={arcPath(VX, VY, ARCA, 0, alpha)}    fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />}
          {isBR ? <path d={boxPath(VX, VY, alpha, total)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter" /> : <path d={arcPath(VX, VY, ARCB, alpha, total)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />}
          <line x1={VX} y1={VY} x2={a1e.x} y2={a1e.y} stroke={sub}    strokeWidth={2.5} strokeLinecap="round" />
          <line x1={VX} y1={VY} x2={a3e.x} y2={a3e.y} stroke={sub}    strokeWidth={2.5} strokeLinecap="round" />
          <line x1={VX} y1={VY} x2={a2e.x} y2={a2e.y} stroke={PURPLE} strokeWidth={2.5} strokeLinecap="round" strokeDasharray="6 3" />
          <circle cx={VX} cy={VY} r={4.5} fill={PURPLE} />
          <text x={alp.x} y={alp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE}  style={FS}>{alpha}&deg;</text>
          <text x={blp.x} y={blp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={FS}>{beta}&deg;</text>
          <g onPointerDown={onA2} style={{ cursor: "grab", touchAction: "none" }}>
            <circle cx={a2e.x} cy={a2e.y} r={16} fill="transparent" />
            <circle cx={a2e.x} cy={a2e.y} r={8}  fill={BLUE}  opacity={0.92} stroke="white" strokeWidth={2} />
          </g>
          <g onPointerDown={onA3} style={{ cursor: "grab", touchAction: "none" }}>
            <circle cx={a3e.x} cy={a3e.y} r={16} fill="transparent" />
            <circle cx={a3e.x} cy={a3e.y} r={8}  fill={AMBER} opacity={0.92} stroke="white" strokeWidth={2} />
          </g>
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <Equation parts={[{ text: alpha + "°", color: BLUE }, { text: "+", color: tp, dim: true }, { text: beta + "°", color: AMBER }, { text: "=", color: tp, dim: true }, { text: total + "°", color: PURPLE }]} />
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="α (alpha)" sublabel="first angle"  value={alpha} color={BLUE}  panelBg={pb} />
          <ValueCard label="β (beta)"  sublabel="second angle" value={beta}  color={AMBER} panelBg={pb} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Common vertex", "Common arm", "Non-overlapping"].map(lbl => (
            <div key={lbl} style={{ display: "flex", alignItems: "center", gap: "4px", padding: "3px 9px", borderRadius: "999px", background: "rgba(22,163,74,0.10)", border: "1.5px solid rgba(22,163,74,0.2)", fontSize: "11px", fontWeight: "600", color: GREEN }}>✓ {lbl}</div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.65", color: ts }}>Adjacent angles share a <strong style={{ color: PURPLE }}>common arm</strong> (dashed) and vertex. Their sum has no fixed total.</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 5 — PARALLEL LINES & TRANSVERSAL
// ═══════════════════════════════════════════════════════════════════════════════

const PLMODES = {
  alternateInterior: { label: "Alt. Interior",  getSectors: t => [{ at: "P1", from: 180, to: t+180, color: BLUE, bg: BBG }, { at: "P2", from: 0,   to: t,   color: AMBER, bg: ABG }], getA: t => t,       getB: t => t,       rel: "equal",        desc: "Between the parallel lines, opposite sides. Always equal.",          shape: "Z-shape" },
  alternateExterior: { label: "Alt. Exterior",  getSectors: t => [{ at: "P1", from: t,   to: 180,  color: BLUE, bg: BBG }, { at: "P2", from: t+180, to: 360, color: AMBER, bg: ABG }], getA: t => 180-t,   getB: t => 180-t,   rel: "equal",        desc: "Outside the parallel lines, opposite sides. Always equal.",          shape: "Z-shape (exterior)" },
  coInterior:        { label: "Co-Interior",    getSectors: t => [{ at: "P1", from: 180, to: t+180, color: BLUE, bg: BBG }, { at: "P2", from: t,   to: 180, color: AMBER, bg: ABG }], getA: t => t,       getB: t => 180-t,   rel: "supplementary", desc: "Between the parallel lines, same side. Always sum to 180°.",         shape: "C-shape" },
  corresponding:     { label: "Corresponding",  getSectors: t => [{ at: "P1", from: 0,   to: t,    color: BLUE, bg: BBG }, { at: "P2", from: 0,   to: t,   color: AMBER, bg: ABG }], getA: t => t,       getB: t => t,       rel: "equal",        desc: "Same position at each intersection. Always equal when lines are parallel.", shape: "F-shape" },
};

function ParallelLines({ dark }) {
  const W = 360, H = 260, CX = 180, CY = 130, Y1 = 82, Y2 = 178, DY = CY - Y1, ARC = 38;
  const [theta, setTheta] = useState(60);
  const [mode,  setMode]  = useState("alternateInterior");
  const svgRef = useRef(null), drag = useRef(false);
  const md = PLMODES[mode];

  const getIntersections = useCallback((t) => {
    const cot = Math.cos(toRad(t)) / Math.sin(toRad(t));
    return { p1: { x: CX + DY * cot, y: Y1 }, p2: { x: CX - DY * cot, y: Y2 } };
  }, []);

  const getTheta = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = W / rect.width;
    const px = (e.clientX - rect.left) * sc, py = (e.clientY - rect.top) * sc;
    const dx = px - CX, dy = -(py - CY);
    let r = Math.atan2(dy, dx) * 180 / Math.PI;
    if (r < 0) r += 180; if (r > 180) r -= 180;
    return Math.round(Math.min(Math.max(r, 15), 165));
  }, []);

  const onHD = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = true; setTheta(getTheta(e)); }, [getTheta]);

  useEffect(() => {
    const mv = e => { if (drag.current) setTheta(getTheta(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getTheta]);

  const { p1, p2 } = getIntersections(theta);
  const cot = Math.cos(toRad(theta)) / Math.sin(toRad(theta));
  const tTop = { x: CX + CY * cot, y: 0 }, tBtm = { x: CX - (H - CY) * cot, y: H };
  const sectors = md.getSectors(theta);
  const angleA = md.getA(theta), angleB = md.getB(theta);
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div ref={svgRef} style={{ flex: "0 0 360px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", touchAction: "none", userSelect: "none" }}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: "block", touchAction: "none", overflow: "hidden" }}>
          {sectors.map((sec, i) => { const pt = sec.at === "P1" ? p1 : p2; return <path key={`f${i}`} d={sectorPath(pt.x, pt.y, ARC, sec.from, sec.to)} fill={sec.bg} stroke="none" />; })}
          <line x1={0} y1={Y1} x2={W} y2={Y1} stroke={sub} strokeWidth={2} strokeLinecap="round" />
          <line x1={0} y1={Y2} x2={W} y2={Y2} stroke={sub} strokeWidth={2} strokeLinecap="round" />
          {[Y1, Y2].map(y => <g key={y}><line x1={28} y1={y-7} x2={28} y2={y+7} stroke={sub} strokeWidth={1.5} /><line x1={35} y1={y-7} x2={35} y2={y+7} stroke={sub} strokeWidth={1.5} /></g>)}
          <text x={W-8} y={Y1-8} textAnchor="end" fontSize={11} fill={sub} fontStyle="italic" style={FS}>m</text>
          <text x={W-8} y={Y2-8} textAnchor="end" fontSize={11} fill={sub} fontStyle="italic" style={FS}>n</text>
          <line x1={tTop.x} y1={tTop.y} x2={tBtm.x} y2={tBtm.y} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
          {sectors.map((sec, i) => { const pt = sec.at === "P1" ? p1 : p2; return <path key={`a${i}`} d={arcPath(pt.x, pt.y, ARC, sec.from, sec.to)} fill="none" stroke={sec.color} strokeWidth={2.5} strokeLinecap="round" />; })}
          {sectors.map((sec, i) => { const pt = sec.at === "P1" ? p1 : p2, mid = sec.from + ccwDelta(sec.from, sec.to) / 2, lp = polar(pt.x, pt.y, ARC + 16, mid), val = i === 0 ? angleA : angleB; return <text key={`l${i}`} x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={sec.color} style={FS}>{val}&deg;</text>; })}
          <circle cx={p1.x} cy={p1.y} r={4.5} fill={BLUE} />
          <circle cx={p2.x} cy={p2.y} r={4.5} fill={BLUE} />
          {[p1, p2].map((pt, i) => (
            <g key={i} onPointerDown={onHD} style={{ cursor: "grab", touchAction: "none" }}>
              <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
              <circle cx={pt.x} cy={pt.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          ))}
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {Object.entries(PLMODES).map(([k, m]) => {
            const act = mode === k;
            return <button key={k} onClick={() => setMode(k)} style={{ padding: "4px 10px", borderRadius: "7px", border: `1.5px solid ${act ? BLUE : brd}`, background: act ? BLUE : "transparent", color: act ? "#fff" : ts, fontSize: "11px", fontWeight: act ? "700" : "400", fontFamily: "system-ui,sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>{m.label}</button>;
          })}
        </div>
        <Equation parts={md.rel === "equal"
          ? [{ text: angleA + "°", color: BLUE }, { text: "=", color: tp, dim: true }, { text: angleB + "°", color: AMBER }]
          : [{ text: angleA + "°", color: BLUE }, { text: "+", color: tp, dim: true }, { text: angleB + "°", color: AMBER }, { text: "=", color: tp, dim: true }, { text: "180°", color: tp }]
        } />
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="Angle 1" value={angleA} color={BLUE}  panelBg={pb} />
          <ValueCard label="Angle 2" value={angleB} color={AMBER} panelBg={pb} />
        </div>
        <div style={{ height: "1px", background: brd }} />
        <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.65", color: ts }}>{md.desc}</p>
        <div style={{ padding: "9px 12px", borderRadius: "9px", background: pb, border: `1.5px solid ${brd}`, fontSize: "11px", color: ts }}><strong style={{ color: tp }}>Memory aid:</strong> {md.shape}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 6 & 7 — POLYGON HELPERS (shared)
// ═══════════════════════════════════════════════════════════════════════════════

function polyVerts(cx, cy, r, n) {
  return Array.from({ length: n }, (_, i) => polar(cx, cy, r, 90 + (360 / n) * i));
}

const interiorAngle = (n) => ((n - 2) * 180) / n;
const exteriorAngle = (n) => 360 / n;
const sumAngle      = (n) => (n - 2) * 180;

const POLY_NAMES = { 3:"Triangle",4:"Quadrilateral",5:"Pentagon",6:"Hexagon",7:"Heptagon",8:"Octagon",9:"Nonagon",10:"Decagon",11:"Hendecagon",12:"Dodecagon" };

function CounterBtn({ label, onClick, disabled, brd, ts }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ width: 34, height: 34, borderRadius: "7px", border: `1.5px solid ${disabled ? "transparent" : brd}`, background: "transparent", color: disabled ? "transparent" : ts, fontSize: "17px", cursor: disabled ? "default" : "pointer", fontFamily: "system-ui,sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>{label}</button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 6 — POLYGON INTERIOR ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function PolygonInterior({ dark }) {
  const SZ = 260, CX = 130, CY = 130, R = 104, ARC = 22;
  const [n,  setN]  = useState(6);
  const [hl, setHl] = useState(0);
  const verts = polyVerts(CX, CY, R, n);
  const ia = interiorAngle(n);
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);
  const handleN = d => { const nx = Math.min(Math.max(n + d, 3), 12); setN(nx); setHl(0); };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", userSelect: "none" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block" }}>
          <polygon points={verts.map(v => `${ff(v.x)},${ff(v.y)}`).join(" ")} fill={BBG} stroke="none" />
          {verts.map((v, i) => { const next = verts[(i+1)%n]; return <line key={i} x1={ff(v.x)} y1={ff(v.y)} x2={ff(next.x)} y2={ff(next.y)} stroke={BLUE} strokeWidth={2} strokeLinecap="round" />; })}
          {verts.map((v, i) => {
            const prev = verts[(i-1+n)%n], next = verts[(i+1)%n], isHL = i === hl;
            const a1 = ((Math.atan2(-(prev.y-v.y),prev.x-v.x)*180/Math.PI)%360+360)%360;
            const a2 = ((Math.atan2(-(next.y-v.y),next.x-v.x)*180/Math.PI)%360+360)%360;
            const delta = ((a2-a1)%360+360)%360;
            let f=a1, t=a2; if(delta>180){f=a2;t=a1;}
            const mid=f+ccwDelta(f,t)/2, lp=polar(v.x,v.y,ARC+13,mid);
            return (
              <g key={i}>
                {isHL && <path d={sectorPath(v.x,v.y,ARC,f,t)} fill="rgba(37,99,235,0.18)" stroke="none" />}
                <path d={arcPath(v.x,v.y,ARC,f,t)} fill="none" stroke={isHL?BLUE:sub} strokeWidth={isHL?2.5:1.5} strokeLinecap="round" opacity={isHL?1:0.4} />
                {isHL && <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight="700" fill={BLUE} style={FS}>{Math.round(ia)}&deg;</text>}
              </g>
            );
          })}
          {verts.map((v, i) => (
            <g key={`d${i}`} onClick={() => setHl(i)} style={{ cursor: "pointer" }}>
              <circle cx={ff(v.x)} cy={ff(v.y)} r={12} fill="transparent" />
              <circle cx={ff(v.x)} cy={ff(v.y)} r={i===hl?6:4.5} fill={i===hl?BLUE:sub} opacity={i===hl?0.95:0.5} stroke={i===hl?"white":"none"} strokeWidth={1.5} />
            </g>
          ))}
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CounterBtn label="−" onClick={() => handleN(-1)} disabled={n<=3} brd={brd} ts={ts} />
          <div style={{ textAlign: "center", minWidth: "64px" }}>
            <div style={{ fontSize: "44px", fontWeight: "900", color: BLUE, lineHeight: 1, letterSpacing: "-0.04em" }}>{n}</div>
            <div style={{ fontSize: "10px", color: ts, textTransform: "uppercase", letterSpacing: "0.06em" }}>sides</div>
          </div>
          <CounterBtn label="+" onClick={() => handleN(1)} disabled={n>=12} brd={brd} ts={ts} />
          <div style={{ marginLeft: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: tp }}>{POLY_NAMES[n]}</div>
            <div style={{ fontSize: "11px", color: ts }}>regular polygon</div>
          </div>
        </div>
        <div style={{ padding: "10px 12px", borderRadius: "10px", background: pb, border: `1.5px solid ${brd}`, fontFamily: "monospace", fontSize: "12px", lineHeight: "1.7" }}>
          <div style={{ color: ts, fontSize: "10px", fontFamily: "system-ui,sans-serif", marginBottom: "4px" }}>(n−2) × 180° / n</div>
          <div><span style={{ color: BLUE }}>({n}−2)×180°/{n} = </span><span style={{ color: BLUE, fontWeight: "700", fontSize: "14px" }}>{ia%1===0?ia:ia.toFixed(1)}&deg;</span></div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="Each angle" value={ia%1===0?ia:ia.toFixed(1)} color={BLUE} panelBg={pb} />
          <ValueCard label="Total sum"  value={sumAngle(n)}               color={BLUE} panelBg={pb} />
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: ts }}>Click a vertex to highlight its angle.</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 7 — EXTERIOR ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function ExteriorAngles({ dark }) {
  const SZ = 260, CX = 130, CY = 130, R = 100, ARC_I = 20, ARC_E = 30, EXT = 46;
  const [n,  setN]  = useState(6);
  const [hl, setHl] = useState(0);
  const verts = polyVerts(CX, CY, R, n);
  const ia = interiorAngle(n), ea = exteriorAngle(n);
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);
  const handleN = d => { const nx = Math.min(Math.max(n + d, 3), 12); setN(nx); setHl(0); };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", userSelect: "none" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block" }}>
          <polygon points={verts.map(v=>`${ff(v.x)},${ff(v.y)}`).join(" ")} fill={BBG} stroke="none" />
          {verts.map((v,i)=>{const next=verts[(i+1)%n];return <line key={i} x1={ff(v.x)} y1={ff(v.y)} x2={ff(next.x)} y2={ff(next.y)} stroke={BLUE} strokeWidth={2} strokeLinecap="round" />;} )}
          {verts.map((v,i) => {
            const prev=verts[(i-1+n)%n],next=verts[(i+1)%n],isHL=i===hl;
            const a1=((Math.atan2(-(prev.y-v.y),prev.x-v.x)*180/Math.PI)%360+360)%360;
            const a2=((Math.atan2(-(next.y-v.y),next.x-v.x)*180/Math.PI)%360+360)%360;
            const extDir=((Math.atan2(-(v.y-prev.y),v.x-prev.x)*180/Math.PI)%360+360)%360;
            const extEnd=polar(v.x,v.y,EXT,extDir);
            const extD=ccwDelta(extDir,a2);
            let ef=extDir,et=a2;if(extD>180){ef=a2;et=extDir;}
            const extMid=ef+ccwDelta(ef,et)/2,elp=polar(v.x,v.y,ARC_E+14,extMid);
            return (
              <g key={i}>
                {isHL && <>
                  <line x1={ff(v.x)} y1={ff(v.y)} x2={ff(extEnd.x)} y2={ff(extEnd.y)} stroke={AMBER} strokeWidth={2} strokeDasharray="5 3" strokeLinecap="round" />
                  <path d={sectorPath(v.x,v.y,ARC_E,ef,et)} fill={ABG} stroke="none" />
                  <path d={arcPath(v.x,v.y,ARC_E,ef,et)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
                  <text x={elp.x} y={elp.y} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight="700" fill={AMBER} style={FS}>{Math.round(ea)}&deg;</text>
                </>}
                {!isHL && <path d={arcPath(v.x,v.y,ARC_I,ef,et)} fill="none" stroke={AMBER} strokeWidth={1.5} strokeLinecap="round" opacity={0.3} />}
              </g>
            );
          })}
          {verts.map((v,i) => (
            <g key={`d${i}`} onClick={() => setHl(i)} style={{ cursor: "pointer" }}>
              <circle cx={ff(v.x)} cy={ff(v.y)} r={12} fill="transparent" />
              <circle cx={ff(v.x)} cy={ff(v.y)} r={i===hl?6:4.5} fill={i===hl?AMBER:sub} opacity={i===hl?0.95:0.5} stroke={i===hl?"white":"none"} strokeWidth={1.5} />
            </g>
          ))}
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CounterBtn label="−" onClick={() => handleN(-1)} disabled={n<=3} brd={brd} ts={ts} />
          <div style={{ textAlign: "center", minWidth: "64px" }}>
            <div style={{ fontSize: "44px", fontWeight: "900", color: AMBER, lineHeight: 1, letterSpacing: "-0.04em" }}>{n}</div>
            <div style={{ fontSize: "10px", color: ts, textTransform: "uppercase", letterSpacing: "0.06em" }}>sides</div>
          </div>
          <CounterBtn label="+" onClick={() => handleN(1)} disabled={n>=12} brd={brd} ts={ts} />
          <div style={{ marginLeft: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: tp }}>{POLY_NAMES[n]}</div>
            <div style={{ fontSize: "11px", color: ts }}>regular polygon</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="Exterior" value={ea%1===0?ea:ea.toFixed(1)} color={AMBER} panelBg={pb} />
          <ValueCard label="Interior" value={ia%1===0?ia:ia.toFixed(1)} color={BLUE}  panelBg={pb} />
        </div>
        <Equation parts={[{ text: Math.round(ia)+"°", color: BLUE }, { text: "+", color: tp, dim: true }, { text: Math.round(ea)+"°", color: AMBER }, { text: "=", color: tp, dim: true }, { text: "180°", color: tp }]} />
        <div style={{ padding: "9px 12px", borderRadius: "9px", background: "rgba(217,119,6,0.08)", border: `1.5px solid ${AMBER}33`, fontSize: "12px", color: ts }}><strong style={{ color: AMBER }}>Theorem:</strong> exterior angles always sum to 360°.</div>
        <p style={{ margin: 0, fontSize: "12px", color: ts }}>Click a vertex to highlight its exterior angle.</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 8 — CENTRAL & INSCRIBED ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function constrainP(p, a, b) {
  const gap = 8, minor = ccwDelta(a, b);
  if (ccwDelta(a, p) >= minor) return p;
  const dA = Math.min(ccwDelta(p,a), ccwDelta(a,p)), dB = Math.min(ccwDelta(p,b), ccwDelta(b,p));
  return dA < dB ? ((a - gap) + 360) % 360 : ((b + gap) + 360) % 360;
}

function InscribedAngles({ dark }) {
  const SZ = 260, CX = 130, CY = 130, R = 104, ARC_C = 38, ARC_I = 28;
  const [aA, setAA] = useState(40);
  const [bA, setBA] = useState(160);
  const [pA, setPA] = useState(260);
  const [mode, setMode] = useState("both");
  const svgRef = useRef(null), drag = useRef(null), aRef = useRef(40), bRef = useRef(160);

  useEffect(() => { aRef.current = aA; }, [aA]);
  useEffect(() => { bRef.current = bA; }, [bA]);

  const getSA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    const px = (e.clientX - rect.left) * sc, py = (e.clientY - rect.top) * sc;
    return snap5(angleOf(CX, CY, px, py));
  }, []);

  const onAD = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "A"; setAA(getSA(e)); }, [getSA]);
  const onBD = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "B"; setBA(getSA(e)); }, [getSA]);
  const onPD = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "P"; setPA(constrainP(getSA(e), aRef.current, bRef.current)); }, [getSA]);

  useEffect(() => {
    const mv = e => {
      if (!drag.current) return;
      const r = getSA(e);
      if      (drag.current === "A") setAA(r);
      else if (drag.current === "B") setBA(r);
      else setPA(constrainP(r, aRef.current, bRef.current));
    };
    const up = () => { drag.current = null; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getSA]);

  const central = ccwDelta(aA, bA), inscribed = central / 2;
  const ptA = polar(CX, CY, R, aA), ptB = polar(CX, CY, R, bA), ptP = polar(CX, CY, R, pA);
  const paA = ((toDeg(Math.atan2(-(ptA.y-ptP.y),ptA.x-ptP.x))%360)+360)%360;
  const pbA = ((toDeg(Math.atan2(-(ptB.y-ptP.y),ptB.x-ptP.x))%360)+360)%360;
  const id = ccwDelta(paA, pbA); let iF=paA, iT=pbA; if(id>180){iF=pbA;iT=paA;}
  const iMid = iF+ccwDelta(iF,iT)/2, ilp = polar(ptP.x,ptP.y,ARC_I+15,iMid);
  const cMid = aA+central/2, clp = polar(CX,CY,ARC_C+16,cMid);
  const showC = mode==="both"||mode==="central", showI = mode==="both"||mode==="inscribed";
  const isDiam = Math.abs(central-180) < 3;
  const sub = dark ? "#475569" : "#94a3b8";
  const { ts, pb, brd, tp } = useTheme(dark);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div ref={svgRef} style={{ flex: "0 0 260px", background: pb, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", touchAction: "none", userSelect: "none" }}>
        <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display: "block", touchAction: "none" }}>
          <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1.5} />
          <path d={arcPath(CX,CY,R,aA,bA)} fill="none" stroke={GREEN} strokeWidth={4} strokeLinecap="round" opacity={0.75} />
          {showC && <>
            <path d={sectorPath(CX,CY,ARC_C,aA,bA)} fill={BBG} stroke="none" />
            <path d={arcPath(CX,CY,ARC_C,aA,bA)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={CX} y1={CY} x2={ptA.x} y2={ptA.y} stroke={BLUE} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
            <line x1={CX} y1={CY} x2={ptB.x} y2={ptB.y} stroke={BLUE} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
            <circle cx={CX} cy={CY} r={5} fill={BLUE} />
            <text x={clp.x} y={clp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE} style={FS}>{Math.round(central)}&deg;</text>
          </>}
          {showI && <>
            <line x1={ptP.x} y1={ptP.y} x2={ptA.x} y2={ptA.y} stroke={AMBER} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
            <line x1={ptP.x} y1={ptP.y} x2={ptB.x} y2={ptB.y} stroke={AMBER} strokeWidth={2} strokeLinecap="round" opacity={0.7} />
            <path d={sectorPath(ptP.x,ptP.y,ARC_I,iF,iT)} fill={ABG} stroke="none" />
            <path d={arcPath(ptP.x,ptP.y,ARC_I,iF,iT)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
            <text x={ilp.x} y={ilp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{Math.round(inscribed)}&deg;</text>
          </>}
          {[{ pt:ptA, col:GREEN, lbl:"A", onPD:onAD }, { pt:ptB, col:GREEN, lbl:"B", onPD:onBD }, { pt:ptP, col:AMBER, lbl:"P", onPD:onPD }].map(({ pt, col, lbl, onPD }) => {
            const lp = polar(CX, CY, R+15, angleOf(CX, CY, pt.x, pt.y));
            return (
              <g key={lbl} onPointerDown={onPD} style={{ cursor: "grab", touchAction: "none" }}>
                <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
                <circle cx={pt.x} cy={pt.y} r={8} fill={col} opacity={0.92} stroke="white" strokeWidth={2} />
                <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={col} style={FS}>{lbl}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
        <div style={{ display: "flex", background: pb, border: `1.5px solid ${brd}`, borderRadius: "9px", padding: "3px", gap: "3px" }}>
          {[["both","Both"],["central","Central"],["inscribed","Inscribed"]].map(([m,lbl]) => {
            const act = mode === m;
            return <button key={m} onClick={() => setMode(m)} style={{ flex: 1, padding: "5px 6px", borderRadius: "6px", border: "none", background: act ? BLUE : "transparent", color: act ? "#fff" : ts, fontSize: "10px", fontWeight: act ? "700" : "400", fontFamily: "system-ui,sans-serif", cursor: "pointer" }}>{lbl}</button>;
          })}
        </div>
        <Equation parts={[{ text: Math.round(inscribed)+"°", color: AMBER }, { text: "=", color: tp, dim: true }, { text: "½ ×", color: tp, small: true, light: true }, { text: Math.round(central)+"°", color: BLUE }]} />
        <div style={{ display: "flex", gap: "10px" }}>
          <ValueCard label="Central"   sublabel="vertex at center" value={Math.round(central)}   color={BLUE}  panelBg={pb} />
          <ValueCard label="Inscribed" sublabel="vertex on circle" value={Math.round(inscribed)} color={AMBER} panelBg={pb} />
        </div>
        <div style={{ height: "1px", background: brd }} />
        {isDiam && <div style={{ padding: "7px 10px", borderRadius: "8px", background: GBG, border: `1.5px solid ${GREEN}33`, fontSize: "11px", color: GREEN, fontWeight: "600" }}>✓ Semicircle — inscribed angle = 90&deg;</div>}
        <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.65", color: ts }}>The <strong style={{ color: BLUE }}>central angle</strong> has its vertex at the center. The <strong style={{ color: AMBER }}>inscribed angle</strong> has its vertex on the circle. Both intercept the same <strong style={{ color: GREEN }}>arc AB</strong>. The inscribed angle is always half the central angle.</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// THEME HELPER HOOK
// ═══════════════════════════════════════════════════════════════════════════════

function useTheme(dark) {
  return {
    bg:      dark ? "#0f172a" : "#f8fafc",
    surface: dark ? "#1e293b" : "#ffffff",
    border:  dark ? "#334155" : "#e2e8f0",
    textPri: dark ? "#f1f5f9" : "#0f172a",
    textSec: dark ? "#94a3b8" : "#64748b",
    panelBg: dark ? "#0f172a" : "#f1f5f9",
    // short aliases used inside concepts
    tp:      dark ? "#f1f5f9" : "#0f172a",
    ts:      dark ? "#94a3b8" : "#64748b",
    pb:      dark ? "#0f172a" : "#f1f5f9",
    brd:     dark ? "#334155" : "#e2e8f0",
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT REGISTRY
// ═══════════════════════════════════════════════════════════════════════════════

const CONCEPTS = [
  { id: "basic",     group: "Classification", label: "Angle Types",          Component: BasicAngles     },
  { id: "comp",      group: "Relationships",  label: "Comp. & Supplementary",Component: CompSupp        },
  { id: "vertical",  group: "Relationships",  label: "Vertical Angles",      Component: VertAngles      },
  { id: "adjacent",  group: "Relationships",  label: "Adjacent Angles",      Component: AdjacentAngles  },
  { id: "parallel",  group: "Geometry",       label: "Parallel Lines",       Component: ParallelLines   },
  { id: "polyint",   group: "Polygons",       label: "Interior Angles",      Component: PolygonInterior },
  { id: "polyext",   group: "Polygons",       label: "Exterior Angles",      Component: ExteriorAngles  },
  { id: "inscribed", group: "Polygons",       label: "Inscribed & Central",  Component: InscribedAngles },
];

const GROUPS = ["Classification", "Relationships", "Geometry", "Polygons"];

// ═══════════════════════════════════════════════════════════════════════════════
// HUB — MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export default function AngleTypesExplorer() {
  const [active, setActive] = useState("basic");
  const [dark,   setDark]   = useState(false);

  const current = CONCEPTS.find(c => c.id === active);
  const { bg, surface, border, textPri, textSec, panelBg } = useTheme(dark);

  return (
    <div
      style={{
        minHeight:     "100vh",
        background:    bg,
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        justifyContent: "center",
        padding:       "24px 16px",
        fontFamily:    "system-ui, -apple-system, sans-serif",
        transition:    "background 0.2s",
      }}
    >
      <div
        style={{
          width:        "100%",
          maxWidth:     "900px",
          background:   surface,
          borderRadius: "20px",
          border:       `1.5px solid ${border}`,
          boxShadow:    dark ? "0 4px 40px rgba(0,0,0,0.45)" : "0 4px 40px rgba(0,0,0,0.07)",
          overflow:     "hidden",
          display:      "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Top bar ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", borderBottom: `1.5px solid ${border}`, background: surface, flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: "16px", fontWeight: "800", color: textPri, letterSpacing: "-0.02em" }}>Angle Explorer</span>
            <span style={{ fontSize: "12px", color: textSec, marginLeft: "10px" }}>{current?.label}</span>
          </div>
          <button onClick={() => setDark(d => !d)} style={{ padding: "5px 13px", borderRadius: "8px", border: `1.5px solid ${border}`, background: "transparent", color: textSec, fontSize: "12px", cursor: "pointer", fontFamily: "inherit" }}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ display: "flex", flex: 1, minHeight: 0 }}>

          {/* ── Sidebar ── */}
          <div style={{ width: "160px", flexShrink: 0, background: panelBg, borderRight: `1.5px solid ${border}`, padding: "12px 8px", display: "flex", flexDirection: "column", gap: "4px", overflowY: "auto" }}>
            {GROUPS.map(group => {
              const items = CONCEPTS.filter(c => c.group === group);
              return (
                <div key={group} style={{ marginBottom: "8px" }}>
                  <div style={{ fontSize: "9px", fontWeight: "600", color: textSec, letterSpacing: "0.09em", textTransform: "uppercase", padding: "2px 8px", marginBottom: "3px" }}>
                    {group}
                  </div>
                  {items.map(c => {
                    const act = active === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setActive(c.id)}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "7px 10px", borderRadius: "8px", border: "none", background: act ? BLUE : "transparent", color: act ? "#fff" : textSec, fontSize: "11px", fontWeight: act ? "600" : "400", fontFamily: "system-ui,sans-serif", cursor: "pointer", transition: "all 0.12s", marginBottom: "1px" }}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* ── Main panel ── */}
          <div style={{ flex: 1, background: surface, minWidth: 0, overflowX: "auto" }}>
            {current && <current.Component dark={dark} />}
          </div>
        </div>
      </div>
    </div>
  );
}