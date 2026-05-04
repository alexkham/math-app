// "use client";

// import { useState } from "react";

// // ─── Card imports — one source of truth per concept ───────────────────────────

// // import { BasicAnglesCard }    from "./BasicAnglesWrapper";
// // import { CompSuppAnglesCard } from "./ComplementarySupplementaryWrapper";
// // import { VerticalAnglesCard } from "./VerticalAnglesWrapper";
// // import { AdjacentAnglesCard } from "./AdjacentAnglesWrapper";
// // import { StandardPositionCard } from "./StandardPositionWrapper";
// // import { ReferenceAngleCard }   from "./ReferenceAngleWrapper";
// // import { CoterminalAnglesCard } from "./CoterminalAnglesWrapper";
// // import { SpecialAnglesCard }    from "./SpecialAnglesWrapper";
// // import { DirectedAnglesCard }   from "./DirectedAnglesWrapper";



// import { BasicAnglesCard }      from "./BasicAngleWrapper";
// import { CompSuppAnglesCard }   from "./ComplementarySupplementaryWrapper";
// import { VerticalAnglesCard }   from "./VerticalAnglesWrapper";
// import { AdjacentAnglesCard }   from "./AdjacentAnglesWrapper";
// import { StandardPositionCard } from "./AnglePositionWrapper";
// import { ReferenceAngleCard }   from "./ReferenceAngleWrapper";
// import { CoterminalAnglesCard } from "./CoterminalAngleWrapper";
// import { SpecialAnglesCard }    from "./SpecialAngleWrapper";
// import { DirectedAnglesCard }   from "./DirectedAngleWrapper";
// // ─── Colors ───────────────────────────────────────────────────────────────────

// const BLUE = "#2563eb";

// // ─── Concept registry ─────────────────────────────────────────────────────────

// /**
//  * Each entry:
//  *   id          — unique string key
//  *   group       — sidebar group label
//  *   label       — sidebar display name
//  *   Component   — named card export, accepts { dark, explanation }
//  *   expKey      — key used to look up optional explanation override from props
//  */
// const CONCEPTS = [
//   {
//     id:        "basic",
//     group:     "Classification",
//     label:     "Angle Types",
//     Component: BasicAnglesCard,
//     expKey:    "basic",
//   },
//   {
//     id:        "comp-supp",
//     group:     "Relationships",
//     label:     "Comp. & Supplementary",
//     Component: CompSuppAnglesCard,
//     expKey:    "compSupp",
//   },
//   {
//     id:        "vertical",
//     group:     "Relationships",
//     label:     "Vertical Angles",
//     Component: VerticalAnglesCard,
//     expKey:    "vertical",
//   },
//   {
//     id:        "adjacent",
//     group:     "Relationships",
//     label:     "Adjacent Angles",
//     Component: AdjacentAnglesCard,
//     expKey:    "adjacent",
//   },
//   {
//     id:        "standard",
//     group:     "Trigonometry",
//     label:     "Standard Position",
//     Component: StandardPositionCard,
//     expKey:    "standard",
//   },
//   {
//     id:        "reference",
//     group:     "Trigonometry",
//     label:     "Reference Angles",
//     Component: ReferenceAngleCard,
//     expKey:    "reference",
//   },
//   {
//     id:        "coterminal",
//     group:     "Trigonometry",
//     label:     "Coterminal Angles",
//     Component: CoterminalAnglesCard,
//     expKey:    "coterminal",
//   },
//   {
//     id:        "special",
//     group:     "Trigonometry",
//     label:     "Special Angles",
//     Component: SpecialAnglesCard,
//     expKey:    "special",
//   },
//   {
//     id:        "directed",
//     group:     "Trigonometry",
//     label:     "Directed Angles",
//     Component: DirectedAnglesCard,
//     expKey:    "directed",
//   },
// ];

// const GROUPS = ["Classification", "Relationships", "Trigonometry"];

// // ─── Sidebar ──────────────────────────────────────────────────────────────────

// function Sidebar({ active, onSelect, dark, border, textSec, panelBg }) {
//   return (
//     <div
//       style={{
//         width:         "168px",
//         flexShrink:    0,
//         background:    panelBg,
//         borderRight:   `1.5px solid ${border}`,
//         padding:       "12px 8px",
//         display:       "flex",
//         flexDirection: "column",
//         overflowY:     "auto",
//       }}
//     >
//       {GROUPS.map((group) => {
//         const items = CONCEPTS.filter((c) => c.group === group);
//         return (
//           <div key={group} style={{ marginBottom: "10px" }}>
//             <div
//               style={{
//                 fontSize:      "9px",
//                 fontWeight:    "600",
//                 color:         textSec,
//                 letterSpacing: "0.09em",
//                 textTransform: "uppercase",
//                 padding:       "2px 8px",
//                 marginBottom:  "4px",
//               }}
//             >
//               {group}
//             </div>
//             {items.map((c) => {
//               const act = active === c.id;
//               return (
//                 <button
//                   key={c.id}
//                   onClick={() => onSelect(c.id)}
//                   style={{
//                     display:      "block",
//                     width:        "100%",
//                     textAlign:    "left",
//                     padding:      "7px 10px",
//                     borderRadius: "8px",
//                     border:       "none",
//                     background:   act ? BLUE : "transparent",
//                     color:        act ? "#fff" : textSec,
//                     fontSize:     "11px",
//                     fontWeight:   act ? "600" : "400",
//                     fontFamily:   "system-ui, sans-serif",
//                     cursor:       "pointer",
//                     transition:   "all 0.12s",
//                     marginBottom: "1px",
//                   }}
//                 >
//                   {c.label}
//                 </button>
//               );
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // ─── Main export ──────────────────────────────────────────────────────────────

// /**
//  * TrigoAngleTypesExplorer
//  *
//  * Props:
//  *   explanations  — optional object keyed by expKey, each value overrides
//  *                   the default explanation for that concept. Example:
//  *                   {
//  *                     standard: { title: "...", body: [...], ... },
//  *                     reference: { title: "...", body: [...], ... },
//  *                   }
//  *
//  *   defaultActive — optional string id of the initially selected concept
//  *                   (defaults to "standard")
//  */
// export default function TrigoAngleTypesExplorer({
//   explanations  = {},
//   defaultActive = "standard",
// } = {}) {
//   const [active, setActive] = useState(defaultActive);
//   const [dark,   setDark]   = useState(false);

//   const current = CONCEPTS.find((c) => c.id === active);

//   // ── Theme ──────────────────────────────────────────────────────────────────

//   const bg      = dark ? "#0f172a" : "#f8fafc";
//   const surface = dark ? "#1e293b" : "#ffffff";
//   const border  = dark ? "#334155" : "#e2e8f0";
//   const textPri = dark ? "#f1f5f9" : "#0f172a";
//   const textSec = dark ? "#94a3b8" : "#64748b";
//   const panelBg = dark ? "#111827" : "#f1f5f9";

//   // ── Render ─────────────────────────────────────────────────────────────────

//   return (
//     <div
//       style={{
//         minHeight:      "100vh",
//         background:     bg,
//         display:        "flex",
//         flexDirection:  "column",
//         alignItems:     "center",
//         justifyContent: "center",
//         padding:        "24px 16px",
//         fontFamily:     "system-ui, -apple-system, sans-serif",
//         transition:     "background 0.2s",
//       }}
//     >
//       {/* ── Outer card ── */}
//       <div
//         style={{
//           width:         "100%",
//           maxWidth:      "1000px",
//           background:    surface,
//           borderRadius:  "20px",
//           border:        `1.5px solid ${border}`,
//           boxShadow:     dark
//             ? "0 4px 40px rgba(0,0,0,0.45)"
//             : "0 4px 40px rgba(0,0,0,0.07)",
//           overflow:      "hidden",
//           display:       "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* ── Top bar ── */}
//         <div
//           style={{
//             display:        "flex",
//             justifyContent: "space-between",
//             alignItems:     "center",
//             padding:        "12px 20px",
//             borderBottom:   `1.5px solid ${border}`,
//             background:     surface,
//             flexShrink:     0,
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
//             <span
//               style={{
//                 fontSize:      "16px",
//                 fontWeight:    "800",
//                 color:         textPri,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Angle Types Explorer
//             </span>
//             {current && (
//               <span style={{ fontSize: "12px", color: textSec }}>
//                 {current.label}
//               </span>
//             )}
//           </div>
//           <button
//             onClick={() => setDark((d) => !d)}
//             style={{
//               padding:      "5px 13px",
//               borderRadius: "8px",
//               border:       `1.5px solid ${border}`,
//               background:   "transparent",
//               color:        textSec,
//               fontSize:     "12px",
//               cursor:       "pointer",
//               fontFamily:   "inherit",
//             }}
//           >
//             {dark ? "Light" : "Dark"}
//           </button>
//         </div>

//         {/* ── Body: sidebar + main ── */}
//         <div style={{ display: "flex", flex: 1, minHeight: 0, minHeight: "480px" }}>
//           <Sidebar
//             active={active}
//             onSelect={setActive}
//             dark={dark}
//             border={border}
//             textSec={textSec}
//             panelBg={panelBg}
//           />

//           {/* ── Main panel ── */}
//           <div style={{ flex: 1, background: surface, minWidth: 0, overflowX: "auto" }}>
//             {current && (
//               <current.Component
//                 dark={dark}
//                 explanation={explanations[current.expKey] || undefined}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED MATH
// ═══════════════════════════════════════════════════════════════════════════════

const toRad = (d) => (d * Math.PI) / 180;
const toDeg = (r) => (r * 180) / Math.PI;
const ff    = (n) => n.toFixed(3);

const polar = (cx, cy, r, a) => ({
  x: cx + r * Math.cos(toRad(a)),
  y: cy - r * Math.sin(toRad(a)),
});

const ccwDelta = (f, t) => ((t - f) % 360 + 360) % 360;

function arcPath(cx, cy, r, f, t) {
  const d = ccwDelta(f, t);
  const s = polar(cx, cy, r, f);
  const e = polar(cx, cy, r, t);
  const la = d > 180 ? 1 : 0;
  return `M ${ff(s.x)} ${ff(s.y)} A ${r} ${r} 0 ${la} 0 ${ff(e.x)} ${ff(e.y)}`;
}

function arcPathCW(cx, cy, r, f, t) {
  const d = ccwDelta(t, f);
  const s = polar(cx, cy, r, f);
  const e = polar(cx, cy, r, t);
  const la = d > 180 ? 1 : 0;
  return `M ${ff(s.x)} ${ff(s.y)} A ${r} ${r} 0 ${la} 1 ${ff(e.x)} ${ff(e.y)}`;
}

function secPath(cx, cy, r, f, t) {
  return `${arcPath(cx, cy, r, f, t)} L ${cx} ${cy} Z`;
}

function secPathCW(cx, cy, r, f, t) {
  return `${arcPathCW(cx, cy, r, f, t)} L ${cx} ${cy} Z`;
}

function boxPath(cx, cy, a1, a2, sz) {
  const s = sz || 13;
  const p1 = polar(cx, cy, s, a1);
  const p2 = polar(cx, cy, s, a2);
  const c  = { x: p1.x + p2.x - cx, y: p1.y + p2.y - cy };
  return `M ${ff(p1.x)} ${ff(p1.y)} L ${ff(c.x)} ${ff(c.y)} L ${ff(p2.x)} ${ff(p2.y)}`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED COLORS
// ═══════════════════════════════════════════════════════════════════════════════

const BLUE   = "#2563eb";
const AMBER  = "#d97706";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const PURPLE = "#9333ea";
const BBG    = "rgba(37,99,235,0.11)";
const ABG    = "rgba(217,119,6,0.11)";
const GBG    = "rgba(22,163,74,0.15)";
const FS     = { fontFamily: "system-ui, sans-serif", userSelect: "none" };

// ═══════════════════════════════════════════════════════════════════════════════
// THEME HELPER
// ═══════════════════════════════════════════════════════════════════════════════

function useTheme(dark) {
  return {
    surface: dark ? "#1e293b" : "#ffffff",
    border:  dark ? "#334155" : "#e2e8f0",
    textPri: dark ? "#f1f5f9" : "#0f172a",
    textSec: dark ? "#94a3b8" : "#64748b",
    panelBg: dark ? "#0f172a" : "#f1f5f9",
    sceneBg: dark ? "#0f172a" : "#f1f5f9",
    sub:     dark ? "#475569" : "#94a3b8",
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED LAYOUT WRAPPER
// ═══════════════════════════════════════════════════════════════════════════════

function CardLayout({ dark, scene, explanation }) {
  const { border, sceneBg } = useTheme(dark);
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "480px" }}>
      <div style={{ flex: "0 0 66.666%", background: sceneBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px", touchAction: "none", userSelect: "none", borderRight: `1.5px solid ${border}` }}>
        {scene}
      </div>
      <div style={{ flex: "0 0 33.333%", padding: "20px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "13px" }}>
        {explanation}
      </div>
    </div>
  );
}

function Divider({ border }) {
  return <div style={{ height: "1px", background: border, flexShrink: 0 }} />;
}

function MiniCard({ label, sublabel, value, color, panelBg }) {
  return (
    <div style={{ flex: 1, background: panelBg, borderRadius: "10px", border: `1.5px solid ${color}22`, padding: "10px", textAlign: "center" }}>
      <div style={{ fontSize: "10px", fontWeight: "600", color, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: sublabel ? "2px" : "4px" }}>{label}</div>
      {sublabel && <div style={{ fontSize: "10px", color, opacity: 0.6, marginBottom: "4px" }}>{sublabel}</div>}
      <div style={{ fontSize: "26px", fontWeight: "900", color, lineHeight: 1, letterSpacing: "-0.03em" }}>{value}°</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 1 — BASIC ANGLE TYPES
// ═══════════════════════════════════════════════════════════════════════════════

const BASIC_TYPES = [
  { name:"Zero",    cond:a=>a===0,          range:"θ = 0°",         desc:"Both arms overlap. No rotation.",              color:"#64748b", bg:"rgba(100,116,139,0.11)", preset:0   },
  { name:"Acute",   cond:a=>a>0&&a<90,      range:"0° < θ < 90°",   desc:"Less than a quarter turn.",                    color:BLUE,      bg:BBG,                      preset:45  },
  { name:"Right",   cond:a=>a===90,         range:"θ = 90°",        desc:"Exactly a quarter turn.",                      color:GREEN,     bg:GBG,                      preset:90  },
  { name:"Obtuse",  cond:a=>a>90&&a<180,    range:"90° < θ < 180°", desc:"More than a quarter, less than a half turn.",  color:AMBER,     bg:ABG,                      preset:130 },
  { name:"Straight",cond:a=>a===180,        range:"θ = 180°",       desc:"Exactly a half turn. A straight line.",        color:RED,       bg:"rgba(220,38,38,0.11)",   preset:180 },
  { name:"Reflex",  cond:a=>a>180&&a<360,   range:"180° < θ < 360°",desc:"More than a half turn.",                       color:PURPLE,    bg:"rgba(147,51,234,0.11)",  preset:270 },
  { name:"Full",    cond:a=>a===360,        range:"θ = 360°",       desc:"A complete rotation.",                         color:"#0891b2", bg:"rgba(8,145,178,0.11)",   preset:360 },
];

function snapBasic(r) {
  for (const t of [0,90,180,270,360]) if (Math.abs(r-t) <= 4) return t;
  return Math.round(r);
}

function BasicAngles({ dark }) {
  const SZ=300, VX=150, VY=150, ARM=110, ARC=50;
  const [angle, setAngle] = useState(45);
  const svgRef = useRef(null);
  const drag   = useRef(false);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const meta = BASIC_TYPES.find(t => t.cond(angle)) || BASIC_TYPES[1];

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let d = Math.atan2(-((e.clientY - rect.top) * sc - VY), (e.clientX - rect.left) * sc - VX) * 180 / Math.PI;
    if (d < 0) d += 360;
    return snapBasic(d);
  }, []);

  const onPD = useCallback((e) => { e.preventDefault(); drag.current = true; setAngle(getA(e)); }, [getA]);

  useEffect(() => {
    const mv = (e) => { if (drag.current) setAngle(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const isZero = angle === 0, isFull = angle === 360;
  const a2 = isZero ? 0.001 : angle;
  const delta = ccwDelta(0, a2);
  const isRight = Math.abs(delta - 90) < 0.5;
  const a1e = polar(VX, VY, ARM, 0), a2e = polar(VX, VY, ARM, angle);
  const lp  = polar(VX, VY, ARC + 26, delta / 2);
  const c = meta.color, bg = meta.bg;

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} onPointerDown={onPD} style={{ cursor:"crosshair", touchAction:"none", display:"flex", flexDirection:"column", alignItems:"center", gap:"12px" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            {!isFull && delta > 0 && <path d={secPath(VX, VY, ARC, 0, a2)} fill={bg} stroke="none" />}
            {isFull && <circle cx={VX} cy={VY} r={ARC} fill="none" stroke={c} strokeWidth={2.5} />}
            {!isFull && delta > 0 && (isRight
              ? <path d={boxPath(VX, VY, 0, a2)} fill="none" stroke={c} strokeWidth={2.5} strokeLinejoin="miter" />
              : <path d={arcPath(VX, VY, ARC, 0, a2)} fill="none" stroke={c} strokeWidth={2.5} strokeLinecap="round" />
            )}
            <line x1={VX} y1={VY} x2={a1e.x} y2={a1e.y} stroke={c} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={VX} y1={VY} x2={a2e.x} y2={a2e.y} stroke={c} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={VX} cy={VY} r={4.5} fill={c} />
            {!isFull && delta > 0 && !isRight && <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="700" fill={c} style={FS}>{angle}°</text>}
            <g style={{ cursor:"grab" }}>
              <circle cx={a2e.x} cy={a2e.y} r={16} fill="transparent" />
              <circle cx={a2e.x} cy={a2e.y} r={8} fill={c} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          </svg>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"5px", justifyContent:"center" }}>
            {BASIC_TYPES.map(t => (
              <button key={t.name} onClick={() => setAngle(t.preset)} style={{ padding:"4px 10px", borderRadius:"7px", border:`1.5px solid ${meta.name===t.name?t.color:border}`, background:meta.name===t.name?t.bg:"transparent", color:meta.name===t.name?t.color:textSec, fontSize:"11px", fontWeight:meta.name===t.name?"700":"400", fontFamily:"system-ui,sans-serif", cursor:"pointer" }}>
                {t.name}
              </button>
            ))}
          </div>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Angle Types</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>An angle is formed by two rays sharing a common vertex. In trigonometry, the type determines which quadrant the terminal side lands in, and therefore the signs of sin, cos, and tan.</p>
          <Divider border={border} />
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
            <span style={{ padding:"3px 10px", borderRadius:"999px", fontSize:"10px", fontWeight:"700", letterSpacing:"0.07em", textTransform:"uppercase", color:c, background:bg, border:`1.5px solid ${c}` }}>{meta.name}</span>
            <span style={{ padding:"2px 9px", borderRadius:"6px", fontSize:"11px", fontWeight:"600", fontFamily:"monospace", color:c, background:bg }}>{meta.range}</span>
          </div>
          <div style={{ fontSize:"42px", fontWeight:"900", lineHeight:1, color:c, letterSpacing:"-0.04em" }}>{angle}<span style={{ fontSize:"18px" }}>°</span></div>
          <p style={{ margin:0, fontSize:"12px", color:textSec, lineHeight:"1.6" }}>{meta.desc}</p>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 2 — COMPLEMENTARY & SUPPLEMENTARY
// ═══════════════════════════════════════════════════════════════════════════════

const CMODES = {
  complementary: { label:"Complementary", limit:90,  sum:"90°"  },
  supplementary: { label:"Supplementary", limit:180, sum:"180°" },
};

function snapComp(r, lim) {
  const mid = lim / 2;
  for (const t of [0, mid, lim]) if (Math.abs(r - t) <= 4) return t;
  return Math.round(Math.min(Math.max(r, 0), lim));
}

function CompSupp({ dark }) {
  const SZ=300, VX=150, VY=150, ARM=108, ARCA=50, ARCB=70;
  const [mode, setMode]   = useState("complementary");
  const [alpha, setAlpha] = useState(35);
  const svgRef = useRef(null);
  const drag   = useRef(false);
  const md = CMODES[mode], limit = md.limit, beta = limit - alpha;
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";

  const handleMode = (k) => { setMode(k); setAlpha((a) => Math.min(a, CMODES[k].limit)); };

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let d = Math.atan2(-((e.clientY - rect.top) * sc - VY), (e.clientX - rect.left) * sc - VX) * 180 / Math.PI;
    if (d < 0) d += 360;
    return snapComp(d, limit);
  }, [limit]);

  const onPD = useCallback((e) => { e.preventDefault(); drag.current = true; setAlpha(getA(e)); }, [getA]);

  useEffect(() => {
    const mv = (e) => { if (drag.current) setAlpha(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const isComp = mode === "complementary";
  const a1e = polar(VX, VY, ARM, 0), a2e = polar(VX, VY, ARM, alpha), a3e = polar(VX, VY, ARM, limit);
  const alp = polar(VX, VY, ARCA + 20, alpha / 2), blp = polar(VX, VY, ARCB + 16, alpha + beta / 2);
  const isAR = Math.abs(alpha - 90) < 0.5, isBR = Math.abs(beta - 90) < 0.5;

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} onPointerDown={onPD} style={{ cursor:"crosshair", touchAction:"none", display:"flex", flexDirection:"column", alignItems:"center", gap:"12px" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            {alpha > 0 && <path d={secPath(VX, VY, ARCB, 0, alpha)} fill={BBG} stroke="none" />}
            {beta  > 0 && <path d={secPath(VX, VY, ARCB, alpha, limit)} fill={ABG} stroke="none" />}
            {alpha > 0 && (isAR ? <path d={boxPath(VX,VY,0,alpha)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinejoin="miter"/> : <path d={arcPath(VX,VY,ARCA,0,alpha)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"/>)}
            {beta  > 0 && (isBR ? <path d={boxPath(VX,VY,alpha,limit)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter"/> : <path d={arcPath(VX,VY,ARCB,alpha,limit)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round"/>)}
            {isComp ? <line x1={VX} y1={VY} x2={a3e.x} y2={a3e.y} stroke={sub} strokeWidth={2.5} strokeLinecap="round"/> : <line x1={polar(VX,VY,ARM,180).x} y1={VY} x2={a1e.x} y2={a1e.y} stroke={sub} strokeWidth={2.5} strokeLinecap="round"/>}
            <line x1={VX} y1={VY} x2={a1e.x} y2={a1e.y} stroke={sub} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={VX} y1={VY} x2={a2e.x} y2={a2e.y} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={VX} cy={VY} r={4} fill={BLUE} />
            {alpha > 0 && <text x={alp.x} y={alp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE}  style={FS}>{alpha}°</text>}
            {beta  > 0 && <text x={blp.x} y={blp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={FS}>{beta}°</text>}
            <g style={{ cursor:"grab" }}>
              <circle cx={a2e.x} cy={a2e.y} r={16} fill="transparent" />
              <circle cx={a2e.x} cy={a2e.y} r={8} fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          </svg>
          <div style={{ display:"flex", background:dark?"#0f172a":"#f1f5f9", border:`1.5px solid ${border}`, borderRadius:"9px", padding:"3px", gap:"3px", width:"260px" }}>
            {Object.entries(CMODES).map(([k, m]) => {
              const act = mode === k;
              return <button key={k} onClick={() => handleMode(k)} style={{ flex:1, padding:"5px 8px", borderRadius:"6px", border:"none", background:act?BLUE:"transparent", color:act?"#fff":textSec, fontSize:"11px", fontWeight:act?"700":"400", fontFamily:"system-ui,sans-serif", cursor:"pointer" }}>{m.label}</button>;
            })}
          </div>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Comp. &amp; Supplementary</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Complementary angles sum to 90°. Supplementary angles sum to 180°.</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>These appear in trig via co-function identities: sin(θ) = cos(90°−θ).</p>
          <Divider border={border} />
          <div style={{ display:"flex", alignItems:"baseline", gap:"6px", fontSize:"17px", fontWeight:"700", justifyContent:"center" }}>
            <span style={{ color:BLUE }}>{alpha}°</span><span style={{ color:textSec, opacity:0.4 }}>+</span><span style={{ color:AMBER }}>{beta}°</span><span style={{ color:textSec, opacity:0.4 }}>=</span><span style={{ color:textPri }}>{md.sum}</span>
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            <MiniCard label="α" value={alpha} color={BLUE}  panelBg={panelBg} />
            <MiniCard label="β" value={beta}  color={AMBER} panelBg={panelBg} />
          </div>
          <Divider border={border} />
          <div style={{ padding:"9px 12px", borderRadius:"9px", background:panelBg, border:`1.5px solid ${border}`, fontFamily:"monospace", fontSize:"11px", color:textPri, lineHeight:"1.8" }}>
            <div>sin(θ) = cos(90°−θ)</div>
            <div>cos(θ) = sin(90°−θ)</div>
            <div>tan(θ) = cot(90°−θ)</div>
          </div>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 3 — VERTICAL ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function snapVert(r) {
  const c = Math.min(Math.max(r, 1), 179);
  for (const t of [30,45,60,90,120,135,150]) if (Math.abs(c - t) <= 4) return t;
  return Math.round(c);
}

function VertAngles({ dark }) {
  const SZ=300, VX=150, VY=150, ARM=110, ARC=42;
  const [theta, setTheta] = useState(55);
  const svgRef = useRef(null);
  const drag   = useRef(false);
  const upper  = useRef(true);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";
  const alpha = theta, beta = 180 - theta, isPerp = theta === 90;

  const getT = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let d = Math.atan2(-((e.clientY - rect.top) * sc - VY), (e.clientX - rect.left) * sc - VX) * 180 / Math.PI;
    if (d < 0) d += 360;
    if (!upper.current) { d -= 180; if (d < 0) d += 360; }
    if (d > 180) d = 360 - d;
    return snapVert(d);
  }, []);

  const onDrag = useCallback((e, isU) => { e.preventDefault(); e.stopPropagation(); drag.current = true; upper.current = isU; setTheta(getT(e)); }, [getT]);

  useEffect(() => {
    const mv = (e) => { if (drag.current) setTheta(getT(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getT]);

  const aE = polar(VX, VY, ARM, 0), aW = polar(VX, VY, ARM, 180);
  const bN = polar(VX, VY, ARM, theta), bS = polar(VX, VY, ARM, theta + 180);
  const lA1 = polar(VX, VY, ARC+16, alpha/2), lB1 = polar(VX, VY, ARC+16, theta+beta/2);
  const lA2 = polar(VX, VY, ARC+16, 180+alpha/2), lB2 = polar(VX, VY, ARC+16, theta+180+beta/2);

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} style={{ touchAction:"none", userSelect:"none" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            <path d={secPath(VX,VY,ARC,0,theta)}       fill={BBG} stroke="none" />
            <path d={secPath(VX,VY,ARC,theta,180)}     fill={ABG} stroke="none" />
            <path d={secPath(VX,VY,ARC,180,theta+180)} fill={BBG} stroke="none" />
            <path d={secPath(VX,VY,ARC,theta+180,360)} fill={ABG} stroke="none" />
            {isPerp ? (
              <>
                {[[0,90,BLUE],[90,180,AMBER],[180,270,BLUE],[270,360,AMBER]].map(([a1,a2,col],i) => (
                  <path key={i} d={boxPath(VX,VY,a1,a2,12)} fill="none" stroke={col} strokeWidth={2} strokeLinejoin="miter" />
                ))}
              </>
            ) : (
              <>
                <path d={arcPath(VX,VY,ARC,0,theta)}       fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
                <path d={arcPath(VX,VY,ARC,theta,180)}     fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
                <path d={arcPath(VX,VY,ARC,180,theta+180)} fill="none" stroke={BLUE}  strokeWidth={2.5} strokeLinecap="round" />
                <path d={arcPath(VX,VY,ARC,theta+180,360)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />
              </>
            )}
            <line x1={aW.x} y1={aW.y} x2={aE.x} y2={aE.y} stroke={sub}  strokeWidth={2.5} strokeLinecap="round" />
            <line x1={bS.x} y1={bS.y} x2={bN.x} y2={bN.y} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={VX} cy={VY} r={4.5} fill={BLUE} />
            {!isPerp && <>
              <text x={lA1.x} y={lA1.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE}  style={FS}>{alpha}°</text>
              <text x={lB1.x} y={lB1.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{beta}°</text>
              <text x={lA2.x} y={lA2.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE}  style={FS}>{alpha}°</text>
              <text x={lB2.x} y={lB2.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{beta}°</text>
            </>}
            {[bN, bS].map((pt, i) => (
              <g key={i} onPointerDown={(e) => onDrag(e, i === 0)} style={{ cursor:"grab", touchAction:"none" }}>
                <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
                <circle cx={pt.x} cy={pt.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
              </g>
            ))}
          </svg>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Vertical Angles</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>When two lines intersect, opposite angles are equal. Adjacent pairs sum to 180°.</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Drag to 90° to make all four angles equal right angles.</p>
          <Divider border={border} />
          <div style={{ display:"flex", gap:"8px" }}>
            <MiniCard label="α pair" sublabel="vertical" value={alpha} color={BLUE}  panelBg={panelBg} />
            <MiniCard label="β pair" sublabel="vertical" value={beta}  color={AMBER} panelBg={panelBg} />
          </div>
          <div style={{ padding:"10px 12px", borderRadius:"10px", background:panelBg, border:`1.5px solid ${border}`, fontSize:"12px", color:textSec, lineHeight:"1.7" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"7px", marginBottom:"4px" }}>
              <span style={{ width:9, height:9, borderRadius:"50%", background:BLUE,  display:"inline-block" }} />
              <span>α = α <strong style={{ color:BLUE }}>( vertical pair )</strong></span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"7px" }}>
              <span style={{ width:9, height:9, borderRadius:"50%", background:AMBER, display:"inline-block" }} />
              <span>β = β <strong style={{ color:AMBER }}>( vertical pair )</strong></span>
            </div>
          </div>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 4 — ADJACENT ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

const SNAP_ADJ = [30,45,60,90,120,135,150,180];
function snapAdj(r, mn, mx) {
  const c = Math.min(Math.max(r, mn), mx);
  for (const t of SNAP_ADJ) if (t >= mn && t <= mx && Math.abs(c - t) <= 4) return t;
  return Math.round(c);
}

function AdjacentAngles({ dark }) {
  const SZ=300, VX=150, VY=150, ARM=108, ARCA=48, ARCB=66;
  const [alpha, setAlpha] = useState(65);
  const [beta,  setBeta]  = useState(80);
  const svgRef = useRef(null);
  const drag   = useRef(null);
  const aRef   = useRef(65);
  const bRef   = useRef(80);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";

  useEffect(() => { aRef.current = alpha; }, [alpha]);
  useEffect(() => { bRef.current = beta;  }, [beta]);

  const total = alpha + beta;

  const getRA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let d = Math.atan2(-((e.clientY - rect.top) * sc - VY), (e.clientX - rect.left) * sc - VX) * 180 / Math.PI;
    if (d < 0) d += 360;
    return d;
  }, []);

  const onA2 = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "arm2"; setAlpha(snapAdj(getRA(e), 2, 358 - bRef.current)); }, [getRA]);
  const onA3 = useCallback((e) => { e.preventDefault(); e.stopPropagation(); drag.current = "arm3"; const nt = Math.min(Math.max(getRA(e), aRef.current + 2), 358); setBeta(snapAdj(nt - aRef.current, 2, 358 - aRef.current)); }, [getRA]);

  useEffect(() => {
    const mv = (e) => {
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

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} style={{ touchAction:"none", userSelect:"none" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            <path d={secPath(VX, VY, ARCB, 0, alpha)}    fill={BBG} stroke="none" />
            <path d={secPath(VX, VY, ARCB, alpha, total)} fill={ABG} stroke="none" />
            {isAR ? <path d={boxPath(VX,VY,0,alpha)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinejoin="miter"/> : <path d={arcPath(VX,VY,ARCA,0,alpha)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round"/>}
            {isBR ? <path d={boxPath(VX,VY,alpha,total)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinejoin="miter"/> : <path d={arcPath(VX,VY,ARCB,alpha,total)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round"/>}
            <line x1={VX} y1={VY} x2={a1e.x} y2={a1e.y} stroke={sub}    strokeWidth={2.5} strokeLinecap="round" />
            <line x1={VX} y1={VY} x2={a3e.x} y2={a3e.y} stroke={sub}    strokeWidth={2.5} strokeLinecap="round" />
            <line x1={VX} y1={VY} x2={a2e.x} y2={a2e.y} stroke={PURPLE} strokeWidth={2.5} strokeLinecap="round" strokeDasharray="6 3" />
            <circle cx={VX} cy={VY} r={4.5} fill={PURPLE} />
            <text x={alp.x} y={alp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={BLUE}  style={FS}>{alpha}°</text>
            <text x={blp.x} y={blp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={AMBER} style={FS}>{beta}°</text>
            <g onPointerDown={onA2} style={{ cursor:"grab", touchAction:"none" }}>
              <circle cx={a2e.x} cy={a2e.y} r={16} fill="transparent" />
              <circle cx={a2e.x} cy={a2e.y} r={8}  fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
            <g onPointerDown={onA3} style={{ cursor:"grab", touchAction:"none" }}>
              <circle cx={a3e.x} cy={a3e.y} r={16} fill="transparent" />
              <circle cx={a3e.x} cy={a3e.y} r={8}  fill={AMBER} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          </svg>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Adjacent Angles</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Adjacent angles share a common arm (dashed, purple) and vertex, lying on opposite sides without overlapping.</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Their sum has no fixed total. They appear in the angle addition identities.</p>
          <Divider border={border} />
          <div style={{ display:"flex", alignItems:"baseline", gap:"5px", fontSize:"16px", fontWeight:"700", justifyContent:"center" }}>
            <span style={{ color:BLUE }}>{alpha}°</span><span style={{ color:textSec, opacity:0.4 }}>+</span><span style={{ color:AMBER }}>{beta}°</span><span style={{ color:textSec, opacity:0.4 }}>=</span><span style={{ color:PURPLE }}>{total}°</span>
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            <MiniCard label="α" value={alpha} color={BLUE}  panelBg={panelBg} />
            <MiniCard label="β" value={beta}  color={AMBER} panelBg={panelBg} />
          </div>
          <div style={{ padding:"9px 12px", borderRadius:"9px", background:panelBg, border:`1.5px solid ${border}`, fontFamily:"monospace", fontSize:"11px", color:textPri }}>
            sin(α+β) = sinα cosβ + cosα sinβ
          </div>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 5 — STANDARD POSITION
// ═══════════════════════════════════════════════════════════════════════════════

const STD_SNAPS = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360,-30,-45,-60,-90,-120,-135,-150,-180,-210,-225,-240,-270,-300,-315,-330,-360];

function snapStd(raw, neg) {
  const targets = neg ? STD_SNAPS.filter(t => t <= 0) : STD_SNAPS.filter(t => t >= 0);
  let closest = raw, minD = Infinity;
  for (const t of targets) { const d = Math.abs(raw - t); if (d < minD) { minD = d; closest = t; } }
  return minD <= 5 ? closest : Math.round(raw);
}

function getQInfo(angle) {
  const n = ((angle % 360) + 360) % 360;
  if (n === 0 || n === 360) return { label:"Positive x-axis", roman:"—", sin:"+", cos:"+", tan:"+", color:"#64748b" };
  if (n === 90)  return { label:"Positive y-axis", roman:"—", sin:"+", cos:"0", tan:"∞", color:"#64748b" };
  if (n === 180) return { label:"Negative x-axis", roman:"—", sin:"0", cos:"−", tan:"0", color:"#64748b" };
  if (n === 270) return { label:"Negative y-axis", roman:"—", sin:"−", cos:"0", tan:"∞", color:"#64748b" };
  if (n > 0   && n < 90)  return { label:"Quadrant I",   roman:"I",   sin:"+", cos:"+", tan:"+", color:BLUE  };
  if (n > 90  && n < 180) return { label:"Quadrant II",  roman:"II",  sin:"+", cos:"−", tan:"−", color:GREEN };
  if (n > 180 && n < 270) return { label:"Quadrant III", roman:"III", sin:"−", cos:"−", tan:"+", color:AMBER };
  return { label:"Quadrant IV", roman:"IV", sin:"−", cos:"+", tan:"−", color:RED };
}

function StandardPosition({ dark }) {
  const SZ=300, CX=150, CY=150, R=100, ARM=118, ARC=44;
  const [angle, setAngle] = useState(55);
  const svgRef  = useRef(null);
  const drag    = useRef(false);
  const isNegR  = useRef(false);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";
  const qi = getQInfo(angle);

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let deg = Math.atan2(-((e.clientY - rect.top) * sc - CY), (e.clientX - rect.left) * sc - CX) * 180 / Math.PI;
    if (deg < 0) deg += 360;
    if (isNegR.current && deg > 0) deg = deg - 360;
    return snapStd(deg, isNegR.current);
  }, []);

  const onPD = useCallback((e) => {
    e.preventDefault(); drag.current = true;
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    isNegR.current = ((e.clientY - rect.top) * sc - CY) > 0;
    setAngle(getA(e));
  }, [getA]);

  useEffect(() => {
    const mv = (e) => { if (drag.current) setAngle(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const norm = ((angle % 360) + 360) % 360;
  const isNeg = angle < 0;
  const arcCol = isNeg ? AMBER : BLUE;
  const termEnd = polar(CX, CY, ARM, norm);
  const showArc = Math.abs(angle) > 1;
  const arcMid  = isNeg ? -(Math.abs(angle) / 2) : angle / 2;
  const lp = polar(CX, CY, ARC + 22, arcMid);
  const QT = [{q:"I",sin:"+",cos:"+",tan:"+"},{q:"II",sin:"+",cos:"−",tan:"−"},{q:"III",sin:"−",cos:"−",tan:"+"},{q:"IV",sin:"−",cos:"+",tan:"−"}];

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} onPointerDown={onPD} style={{ cursor:"crosshair", touchAction:"none", userSelect:"none" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} />
            <polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
            <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} />
            <polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />
            <text x={SZ-10} y={CY-8} textAnchor="middle" fontSize={11} fontStyle="italic" fill={sub} style={FS}>x</text>
            <text x={CX+8}  y={14}   textAnchor="start"  fontSize={11} fontStyle="italic" fill={sub} style={FS}>y</text>
            <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1} strokeDasharray="3 4" opacity={0.45} />
            {showArc && <path d={isNeg ? secPathCW(CX,CY,ARC,0,norm) : secPath(CX,CY,ARC,0,norm)} fill={isNeg ? ABG : BBG} stroke="none" />}
            {showArc && <path d={isNeg ? arcPathCW(CX,CY,ARC,0,norm) : arcPath(CX,CY,ARC,0,norm)} fill="none" stroke={arcCol} strokeWidth={2.5} strokeLinecap="round" />}
            {showArc && Math.abs(angle) > 20 && Math.abs(angle) < 355 && <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={arcCol} style={FS}>{angle}°</text>}
            {["I","II","III","IV"].map((q, i) => { const qa=[45,135,225,315]; const qp=polar(CX,CY,R*0.55,qa[i]); return <text key={q} x={qp.x} y={qp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="600" fill={qi.roman===q?qi.color:sub} opacity={qi.roman===q?0.9:0.2} style={FS}>{q}</text>; })}
            <line x1={CX} y1={CY} x2={CX+ARM} y2={CY} stroke={sub} strokeWidth={2} strokeLinecap="round" />
            <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y} stroke={arcCol} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={polar(CX,CY,R,norm).x} cy={polar(CX,CY,R,norm).y} r={4} fill={arcCol} opacity={0.7} />
            <circle cx={CX} cy={CY} r={4.5} fill={arcCol} />
            <g style={{ cursor:"grab" }}>
              <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
              <circle cx={termEnd.x} cy={termEnd.y} r={8} fill={arcCol} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          </svg>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Standard Position</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Vertex at origin, initial side on positive x-axis. Positive angles rotate CCW; negative rotate CW.</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>The quadrant of the terminal side determines the signs of all six trig functions.</p>
          <Divider border={border} />
          <div style={{ fontSize:"40px", fontWeight:"900", lineHeight:1, color:arcCol, letterSpacing:"-0.04em" }}>{angle}<span style={{ fontSize:"16px" }}>°</span></div>
          <div style={{ display:"inline-block", padding:"3px 10px", borderRadius:"999px", fontSize:"11px", fontWeight:"700", color:qi.color, background:`${qi.color}18`, border:`1.5px solid ${qi.color}33` }}>{qi.label}</div>
          <div style={{ display:"flex", gap:"6px" }}>
            {[["sin",qi.sin],[" cos",qi.cos],["tan",qi.tan]].map(([fn, sign]) => {
              const col = sign==="+"?GREEN : sign==="−"?RED : "#64748b";
              return <div key={fn} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:"4px", padding:"6px", borderRadius:"8px", background:panelBg, border:`1.5px solid ${col}22` }}><span style={{ fontSize:"11px", fontWeight:"600", color:"#64748b", fontFamily:"monospace" }}>{fn}</span><span style={{ fontSize:"14px", fontWeight:"900", color:col, fontFamily:"monospace" }}>{sign}</span></div>;
            })}
          </div>
          <Divider border={border} />
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"11px" }}>
            <thead><tr>{["Q","sin","cos","tan"].map(h => <th key={h} style={{ padding:"4px 6px", textAlign:"center", color:textSec, fontWeight:"600", borderBottom:`1px solid ${border}`, fontSize:"10px", textTransform:"uppercase" }}>{h}</th>)}</tr></thead>
            <tbody>{QT.map(row => { const act=qi.roman===row.q; return <tr key={row.q} style={{ background:act?`${qi.color}12`:"transparent" }}><td style={{ padding:"4px 6px", textAlign:"center", color:act?qi.color:textSec, fontWeight:act?"700":"400" }}>{row.q}</td>{["sin","cos","tan"].map(fn => <td key={fn} style={{ padding:"4px 6px", textAlign:"center", fontWeight:"700", color:row[fn]==="+"?GREEN:row[fn]==="−"?RED:textSec }}>{row[fn]}</td>)}</tr>; })}</tbody>
          </table>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 6 — REFERENCE ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function snapRef(r) {
  const n = ((r % 360) + 360) % 360;
  let c = n, m = Infinity;
  for (const t of [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360]) { const d = Math.abs(n-t); if (d < m) { m = d; c = t; } }
  return m <= 5 ? c : Math.round(n);
}

function getRefInfo(angle) {
  const n = ((angle % 360) + 360) % 360;
  if (n === 0 || n === 180 || n === 360) return { ref:0, roman:"—", color:"#64748b", formula:"θ is on the x-axis", refFrom:0, refTo:0 };
  if (n === 90 || n === 270)             return { ref:0, roman:"—", color:"#64748b", formula:"θ is on the y-axis", refFrom:0, refTo:0 };
  if (n > 0   && n < 90)  return { ref:n,       roman:"I",   color:BLUE,  formula:`ref = θ = ${Math.round(n)}°`,                              refFrom:0,   refTo:n,   axisAngle:0   };
  if (n > 90  && n < 180) return { ref:180-n,   roman:"II",  color:GREEN, formula:`ref = 180° − ${Math.round(n)}° = ${Math.round(180-n)}°`,   refFrom:n,   refTo:180, axisAngle:180 };
  if (n > 180 && n < 270) return { ref:n-180,   roman:"III", color:AMBER, formula:`ref = ${Math.round(n)}° − 180° = ${Math.round(n-180)}°`,   refFrom:180, refTo:n,   axisAngle:180 };
  return { ref:360-n, roman:"IV", color:RED, formula:`ref = 360° − ${Math.round(n)}° = ${Math.round(360-n)}°`, refFrom:n, refTo:360, axisAngle:0 };
}

function ReferenceAngle({ dark }) {
  const SZ=300, CX=150, CY=150, R=100, ARM=118, ARCA=34, ARCB=52;
  const [angle, setAngle] = useState(130);
  const svgRef = useRef(null);
  const drag   = useRef(false);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";
  const norm = ((angle % 360) + 360) % 360;
  const ri   = getRefInfo(angle);

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let d = Math.atan2(-((e.clientY - rect.top) * sc - CY), (e.clientX - rect.left) * sc - CX) * 180 / Math.PI;
    if (d < 0) d += 360;
    return snapRef(d);
  }, []);

  const onPD = useCallback((e) => { e.preventDefault(); drag.current = true; setAngle(getA(e)); }, [getA]);

  useEffect(() => {
    const mv = (e) => { if (drag.current) setAngle(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const termEnd  = polar(CX, CY, ARM, norm);
  const showFull = norm > 1 && norm < 359;
  const showRef  = ri.ref > 1;
  const fullMid  = norm / 2;
  const refMid   = ri.refFrom + ccwDelta(ri.refFrom, ri.refTo) / 2;
  const fullLp   = polar(CX, CY, ARCB + 18, fullMid);
  const refLp    = polar(CX, CY, ARCA + 14, refMid);
  const qColors  = { I:BLUE, II:GREEN, III:AMBER, IV:RED };
  const formulas = [{q:"I",f:"ref = θ"},{q:"II",f:"ref = 180°−θ"},{q:"III",f:"ref = θ−180°"},{q:"IV",f:"ref = 360°−θ"}];

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} onPointerDown={onPD} style={{ cursor:"crosshair", touchAction:"none", userSelect:"none" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} /><polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
            <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} /><polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />
            <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1} strokeDasharray="3 4" opacity={0.4} />
            {showFull && <path d={secPath(CX,CY,ARCB,0,norm)} fill={BBG} stroke="none" />}
            {showFull && <path d={arcPath(CX,CY,ARCB,0,norm)} fill="none" stroke={BLUE} strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />}
            {showFull && norm > 20 && <text x={fullLp.x} y={fullLp.y} textAnchor="middle" dominantBaseline="central" fontSize={10} fill={BLUE} opacity={0.55} fontWeight="600" style={FS}>{Math.round(norm)}°</text>}
            {showRef  && <path d={secPath(CX,CY,ARCA,ri.refFrom,ri.refTo)} fill={ABG} stroke="none" />}
            {showRef  && <path d={arcPath(CX,CY,ARCA,ri.refFrom,ri.refTo)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />}
            {showRef  && ri.ref > 15 && <text x={refLp.x} y={refLp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{Math.round(ri.ref)}°</text>}
            {ri.axisAngle === 180 && <line x1={CX} y1={CY} x2={polar(CX,CY,ARM+10,180).x} y2={CY} stroke={AMBER} strokeWidth={1.5} strokeDasharray="5 4" opacity={0.5} strokeLinecap="round" />}
            <line x1={CX} y1={CY} x2={CX+ARM} y2={CY} stroke={sub} strokeWidth={2} strokeLinecap="round" />
            <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y} stroke={ri.color} strokeWidth={2.5} strokeLinecap="round" />
            {ri.roman !== "—" && (() => { const qa={I:45,II:135,III:225,IV:315}; const qp=polar(CX,CY,R*0.6,qa[ri.roman]); return <text x={qp.x} y={qp.y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="700" fill={ri.color} opacity={0.7} style={FS}>{ri.roman}</text>; })()}
            <circle cx={CX} cy={CY} r={4.5} fill={ri.color} />
            <circle cx={polar(CX,CY,R,norm).x} cy={polar(CX,CY,R,norm).y} r={4} fill={ri.color} opacity={0.7} />
            <g style={{ cursor:"grab" }}>
              <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
              <circle cx={termEnd.x} cy={termEnd.y} r={8} fill={ri.color} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          </svg>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Reference Angles</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>The reference angle is the acute angle (0°–90°) between the terminal side and the nearest x-axis. Always positive.</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Trig functions of any angle equal ± the same function of its reference angle — sign depends on quadrant.</p>
          <Divider border={border} />
          <div style={{ display:"flex", gap:"8px" }}>
            <MiniCard label="θ"   value={Math.round(norm)}   color={BLUE}  panelBg={panelBg} />
            <MiniCard label="ref" value={Math.round(ri.ref)} color={AMBER} panelBg={panelBg} />
          </div>
          {ri.roman !== "—" && <div style={{ padding:"8px 12px", borderRadius:"8px", background:`${ri.color}12`, border:`1.5px solid ${ri.color}33`, fontFamily:"monospace", fontSize:"11px", color:ri.color }}>{ri.formula}</div>}
          <Divider border={border} />
          {formulas.map(row => { const act=ri.roman===row.q; const col=qColors[row.q]||textSec; return <div key={row.q} style={{ display:"flex", alignItems:"center", gap:"8px", padding:"6px 10px", borderRadius:"7px", marginBottom:"3px", background:act?`${col}12`:"transparent", border:`1.5px solid ${act?col+"33":"transparent"}` }}><span style={{ fontSize:"11px", fontWeight:"700", color:col, minWidth:"22px" }}>{row.q}</span><span style={{ fontSize:"11px", fontFamily:"monospace", color:act?col:textSec, fontWeight:act?"700":"400" }}>{row.f}</span></div>; })}
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 7 — COTERMINAL ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

function snapCot(r) {
  const n = ((r % 360) + 360) % 360;
  let c = n, m = Infinity;
  for (const t of [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360]) { const d = Math.abs(n-t); if (d < m) { m = d; c = t; } }
  return m <= 5 ? c : Math.round(n);
}

function CoterminalAngles({ dark }) {
  const SZ=300, CX=150, CY=150, ARM=118, ARCA=42, ARCB=62;
  const [base, setBase]     = useState(60);
  const [offset, setOffset] = useState(1);
  const svgRef = useRef(null);
  const drag   = useRef(false);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub  = dark ? "#475569" : "#94a3b8";
  const cot  = base + offset * 360;
  const norm = ((base % 360) + 360) % 360;

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let d = Math.atan2(-((e.clientY - rect.top) * sc - CY), (e.clientX - rect.left) * sc - CX) * 180 / Math.PI;
    if (d < 0) d += 360;
    return snapCot(d);
  }, []);

  const onPD = useCallback((e) => { e.preventDefault(); drag.current = true; setBase(getA(e)); }, [getA]);

  useEffect(() => {
    const mv = (e) => { if (drag.current) setBase(getA(e)); };
    const up = () => { drag.current = false; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const termEnd  = polar(CX, CY, ARM, norm);
  const showArc  = norm > 1;
  const bLp = polar(CX, CY, ARCA + 18, norm / 2);
  const cLp = polar(CX, CY, ARCB + 18, norm / 2);

  function spiralPath(r1, r2, from, to, steps) {
    const st = steps || 36;
    const tot = ccwDelta(from, to) || 360;
    let d = "";
    for (let i = 0; i <= st; i++) {
      const t = i / st, a = from + tot * t, r = r1 + (r2 - r1) * t;
      const pt = polar(CX, CY, r, a);
      d += i === 0 ? `M ${ff(pt.x)} ${ff(pt.y)}` : ` L ${ff(pt.x)} ${ff(pt.y)}`;
    }
    return d;
  }

  return (
    <CardLayout dark={dark}
      scene={(
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"12px" }}>
          <div ref={svgRef} onPointerDown={onPD} style={{ cursor:"crosshair", touchAction:"none", userSelect:"none" }}>
            <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
              <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} /><polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
              <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} /><polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />
              {offset !== 0 && showArc && <path d={secPath(CX,CY,ARCB,0,norm)} fill={ABG} stroke="none" />}
              {offset !== 0 && showArc && <path d={arcPath(CX,CY,ARCB,0,norm)} fill="none" stroke={AMBER} strokeWidth={2.5} strokeLinecap="round" />}
              {offset !== 0 && norm > 20 && <text x={cLp.x} y={cLp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={AMBER} style={FS}>{cot}°</text>}
              {showArc && <path d={secPath(CX,CY,ARCA,0,norm)} fill={BBG} stroke="none" />}
              {showArc && <path d={arcPath(CX,CY,ARCA,0,norm)} fill="none" stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />}
              {norm > 20 && <text x={bLp.x} y={bLp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={BLUE} style={FS}>{base}°</text>}
              {offset !== 0 && showArc && <path d={spiralPath(ARCA,ARCB,0,norm)} fill="none" stroke={AMBER} strokeWidth={1} strokeDasharray="3 4" opacity={0.35} />}
              <line x1={CX} y1={CY} x2={CX+ARM} y2={CY} stroke={sub} strokeWidth={2} strokeLinecap="round" />
              <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
              <circle cx={CX} cy={CY} r={4.5} fill={BLUE} />
              <g style={{ cursor:"grab" }}>
                <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
                <circle cx={termEnd.x} cy={termEnd.y} r={8} fill={BLUE} opacity={0.92} stroke="white" strokeWidth={2} />
              </g>
            </svg>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <button onClick={() => setOffset(o => Math.max(o-1,-3))} disabled={offset <= -3} style={{ width:32, height:32, borderRadius:"7px", border:`1.5px solid ${offset<=-3?"transparent":border}`, background:"transparent", color:offset<=-3?"transparent":textSec, fontSize:"17px", cursor:offset<=-3?"default":"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
            <div style={{ textAlign:"center", minWidth:"160px" }}>
              <div style={{ fontSize:"11px", color:textSec, marginBottom:"2px" }}>n = <strong style={{ color:AMBER }}>{offset}</strong></div>
              <div style={{ fontSize:"13px", fontWeight:"700", color:AMBER }}>{base} + ({offset}×360°) = {cot}°</div>
            </div>
            <button onClick={() => setOffset(o => Math.min(o+1,3))}  disabled={offset >= 3}  style={{ width:32, height:32, borderRadius:"7px", border:`1.5px solid ${offset>=3?"transparent":border}`, background:"transparent", color:offset>=3?"transparent":textSec, fontSize:"17px", cursor:offset>=3?"default":"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
          </div>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Coterminal Angles</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Two angles are coterminal when they share the same terminal side — differing by full rotations (multiples of 360°).</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Coterminal angles produce identical trig values. sin(θ) = sin(θ+360°) because trig functions are periodic.</p>
          <Divider border={border} />
          <div style={{ display:"flex", gap:"8px" }}>
            <MiniCard label="Base"       value={base} color={BLUE}  panelBg={panelBg} />
            <MiniCard label="Coterminal" value={cot}  color={AMBER} panelBg={panelBg} />
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"6px", padding:"7px 10px", borderRadius:"8px", background:"rgba(22,163,74,0.08)", border:"1.5px solid rgba(22,163,74,0.2)", fontSize:"11px", color:GREEN, fontWeight:"600" }}>
            <span>✓</span><span>Same terminal side at {norm}°</span>
          </div>
          <div style={{ padding:"9px 12px", borderRadius:"8px", background:panelBg, border:`1.5px solid ${border}`, fontFamily:"monospace", fontSize:"11px", color:textPri, lineHeight:"1.8" }}>
            <div style={{ color:textSec }}>{base}° + n×360°</div>
            <div style={{ color:AMBER, fontWeight:"700" }}>n = {offset} → {cot}°</div>
          </div>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 8 — SPECIAL ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

const S2 = "√2/2", S3 = "√3/2";
const SPECIAL = [
  {deg:0,  rad:"0",      sin:"0",   cos:"1",   tan:"0",      q:0},{deg:30, rad:"π/6",   sin:"1/2", cos:S3,    tan:"√3/3",  q:1},
  {deg:45, rad:"π/4",   sin:S2,    cos:S2,    tan:"1",      q:1},{deg:60, rad:"π/3",   sin:S3,    cos:"1/2", tan:"√3",    q:1},
  {deg:90, rad:"π/2",   sin:"1",   cos:"0",   tan:"undef.", q:0},{deg:120,rad:"2π/3",  sin:S3,    cos:"−1/2",tan:"−√3",   q:2},
  {deg:135,rad:"3π/4",  sin:S2,    cos:"−"+S2,tan:"−1",     q:2},{deg:150,rad:"5π/6",  sin:"1/2", cos:"−"+S3,tan:"−√3/3", q:2},
  {deg:180,rad:"π",     sin:"0",   cos:"−1",  tan:"0",      q:0},{deg:210,rad:"7π/6",  sin:"−1/2",cos:"−"+S3,tan:"√3/3",  q:3},
  {deg:225,rad:"5π/4",  sin:"−"+S2,cos:"−"+S2,tan:"1",      q:3},{deg:240,rad:"4π/3",  sin:"−"+S3,cos:"−1/2",tan:"√3",    q:3},
  {deg:270,rad:"3π/2",  sin:"−1",  cos:"0",   tan:"undef.", q:0},{deg:300,rad:"5π/3",  sin:"−"+S3,cos:"1/2", tan:"−√3",   q:4},
  {deg:315,rad:"7π/4",  sin:"−"+S2,cos:S2,    tan:"−1",     q:4},{deg:330,rad:"11π/6", sin:"−1/2",cos:S3,    tan:"−√3/3", q:4},
];
const QC = { 0:"#64748b", 1:BLUE, 2:GREEN, 3:AMBER, 4:RED };

function SpecialAngles({ dark }) {
  const SZ=300, CX=150, CY=150, R=104;
  const [sel, setSel]   = useState(2);
  const [mode, setMode] = useState("both");
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";
  const a = SPECIAL[sel], col = QC[a.q];

  return (
    <CardLayout dark={dark}
      scene={(
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"12px" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block" }}>
            <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} /><polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
            <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} /><polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />
            <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1.5} opacity={0.5} />
            {a.deg > 0 && a.deg < 360 && <path d={secPath(CX,CY,30,0,a.deg)} fill={BBG} stroke="none" />}
            {a.deg > 0 && a.deg < 360 && <path d={arcPath(CX,CY,30,0,a.deg)} fill="none" stroke={col} strokeWidth={2} strokeLinecap="round" />}
            <line x1={CX} y1={CY} x2={CX+R} y2={CY} stroke={sub} strokeWidth={1.5} strokeLinecap="round" opacity={0.5} />
            <line x1={CX} y1={CY} x2={polar(CX,CY,R,a.deg).x} y2={polar(CX,CY,R,a.deg).y} stroke={col} strokeWidth={2.5} strokeLinecap="round" />
            {SPECIAL.map((sp, i) => {
              const pt = polar(CX, CY, R, sp.deg), isSel = i === sel, c = QC[sp.q];
              const lr = R + 18, lp = polar(CX, CY, lr, sp.deg);
              let anchor = "middle";
              if (pt.x - CX > 10) anchor = "start";
              if (pt.x - CX < -10) anchor = "end";
              const lbl = mode === "degrees" ? `${sp.deg}°` : mode === "radians" ? sp.rad : `${sp.deg}°`;
              return (
                <g key={i} onClick={() => setSel(i)} style={{ cursor:"pointer" }}>
                  <circle cx={pt.x} cy={pt.y} r={isSel?9:5} fill={c} opacity={isSel?1:0.55} stroke={isSel?"white":"none"} strokeWidth={2} />
                  <circle cx={pt.x} cy={pt.y} r={14} fill="transparent" />
                  <text x={lp.x} y={lp.y} textAnchor={anchor} dominantBaseline="central" fontSize={isSel?11:8} fontWeight={isSel?"700":"400"} fill={isSel?c:sub} opacity={isSel?1:0.7} style={FS}>{lbl}</text>
                  {mode === "both" && <text x={lp.x} y={lp.y + (lp.y > CY ? 11 : -11)} textAnchor={anchor} dominantBaseline="central" fontSize={isSel?10:7} fontWeight={isSel?"700":"400"} fill={isSel?c:sub} opacity={isSel?0.85:0.5} style={FS}>{sp.rad}</text>}
                </g>
              );
            })}
            <circle cx={CX} cy={CY} r={4} fill={col} />
          </svg>
          <div style={{ display:"flex", background:dark?"#0f172a":"#f1f5f9", border:`1.5px solid ${border}`, borderRadius:"9px", padding:"3px", gap:"3px", width:"260px" }}>
            {[["degrees","Degrees"],["radians","Radians"],["both","Both"]].map(([m, lbl]) => {
              const act = mode === m;
              return <button key={m} onClick={() => setMode(m)} style={{ flex:1, padding:"5px 6px", borderRadius:"6px", border:"none", background:act?BLUE:"transparent", color:act?"#fff":textSec, fontSize:"10px", fontWeight:act?"700":"400", fontFamily:"system-ui,sans-serif", cursor:"pointer" }}>{lbl}</button>;
            })}
          </div>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Special Angles</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>16 standard unit circle angles with exact trig values. Come from 30-60-90 and 45-45-90 triangles reflected across all four quadrants.</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Click any point to see its exact values.</p>
          <Divider border={border} />
          <div style={{ display:"flex", gap:"8px" }}>
            <div style={{ flex:1, background:panelBg, borderRadius:"10px", border:`1.5px solid ${col}22`, padding:"10px", textAlign:"center" }}><div style={{ fontSize:"10px", fontWeight:"600", color:col, textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"3px" }}>Degrees</div><div style={{ fontSize:"24px", fontWeight:"900", color:col, lineHeight:1 }}>{a.deg}°</div></div>
            <div style={{ flex:1, background:panelBg, borderRadius:"10px", border:`1.5px solid ${col}22`, padding:"10px", textAlign:"center" }}><div style={{ fontSize:"10px", fontWeight:"600", color:col, textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"3px" }}>Radians</div><div style={{ fontSize:"18px", fontWeight:"900", color:col, lineHeight:1, fontFamily:"monospace", paddingTop:"3px" }}>{a.rad}</div></div>
          </div>
          {[["sin",a.sin],["cos",a.cos],["tan",a.tan]].map(([fn, val]) => {
            const pos = !val.startsWith("−") && val !== "0" && val !== "undef.";
            const c = val === "undef." ? "#64748b" : pos ? GREEN : val === "0" ? "#64748b" : RED;
            return <div key={fn} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px", borderRadius:"8px", background:panelBg, border:`1.5px solid ${border}` }}><span style={{ fontSize:"12px", fontWeight:"600", color:c, fontFamily:"monospace" }}>{fn}({a.deg}°)</span><span style={{ fontSize:"12px", fontWeight:"700", color:c, fontFamily:"monospace" }}>{val}</span></div>;
          })}
          <Divider border={border} />
          <div style={{ overflowY:"auto", maxHeight:"160px", borderRadius:"8px", border:`1.5px solid ${border}` }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"10px", fontFamily:"monospace" }}>
              <thead><tr style={{ background:dark?"#1e293b":"#f8fafc" }}>{["°","rad","sin","cos","tan"].map(h => <th key={h} style={{ padding:"4px 5px", textAlign:"center", color:textSec, fontWeight:"600", borderBottom:`1px solid ${border}`, fontSize:"9px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif" }}>{h}</th>)}</tr></thead>
              <tbody>{SPECIAL.map((sp, i) => { const act = i === sel; const c = QC[sp.q]; return <tr key={i} onClick={() => setSel(i)} style={{ background:act?`${c}14`:"transparent", cursor:"pointer" }}><td style={{ padding:"3px 5px", textAlign:"center", color:act?c:textSec, fontWeight:act?"700":"400" }}>{sp.deg}</td><td style={{ padding:"3px 5px", textAlign:"center", color:act?c:textSec, fontWeight:act?"700":"400" }}>{sp.rad}</td><td style={{ padding:"3px 5px", textAlign:"center", color:act?c:textSec }}>{sp.sin}</td><td style={{ padding:"3px 5px", textAlign:"center", color:act?c:textSec }}>{sp.cos}</td><td style={{ padding:"3px 5px", textAlign:"center", color:act?c:textSec }}>{sp.tan}</td></tr>; })}</tbody>
            </table>
          </div>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT 9 — DIRECTED ANGLES
// ═══════════════════════════════════════════════════════════════════════════════

const DIR_SNAPS = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360,-30,-45,-60,-90,-120,-135,-150,-180,-210,-225,-240,-270,-300,-315,-330,-360];
function snapDir(r) { let c = r, m = Infinity; for (const t of DIR_SNAPS) { const d = Math.abs(r-t); if (d < m) { m = d; c = t; } } return m <= 5 ? c : Math.round(r); }

function DirectedAngles({ dark }) {
  const SZ=300, CX=150, CY=150, R=100, ARM=118, ARC=48;
  const [angle, setAngle] = useState(60);
  const svgRef  = useRef(null);
  const drag    = useRef(false);
  const isNegR  = useRef(false);
  const lastY   = useRef(null);
  const { border, textPri, textSec, panelBg } = useTheme(dark);
  const sub = dark ? "#475569" : "#94a3b8";

  const getA = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    let deg = Math.atan2(-((e.clientY - rect.top) * sc - CY), (e.clientX - rect.left) * sc - CX) * 180 / Math.PI;
    if (deg < 0) deg += 360;
    if (isNegR.current && deg > 0) deg = deg - 360;
    return snapDir(Math.max(-360, Math.min(360, deg)));
  }, []);

  const onPD = useCallback((e) => {
    e.preventDefault(); drag.current = true;
    const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
    const py = (e.clientY - rect.top) * sc - CY;
    isNegR.current = py > 0; lastY.current = py;
    setAngle(getA(e));
  }, [getA]);

  useEffect(() => {
    const mv = (e) => {
      if (!drag.current) return;
      const rect = svgRef.current.getBoundingClientRect(), sc = SZ / rect.width;
      const py = (e.clientY - rect.top) * sc - CY;
      if (lastY.current !== null) {
        if (lastY.current <= 0 && py > 0) isNegR.current = true;
        if (lastY.current >= 0 && py < 0) isNegR.current = false;
      }
      lastY.current = py;
      setAngle(getA(e));
    };
    const up = () => { drag.current = false; lastY.current = null; };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [getA]);

  const isNeg    = angle < 0;
  const absAngle = Math.abs(angle);
  const norm     = ((angle % 360) + 360) % 360;
  const col      = isNeg ? AMBER : BLUE;
  const termEnd  = polar(CX, CY, ARM, norm);
  const unitPt   = polar(CX, CY, R, norm);
  const showArc  = absAngle > 1;
  const arcMid   = isNeg ? -(absAngle / 2) : angle / 2;
  const lp       = polar(CX, CY, ARC + 22, arcMid);
  const sinV     = Math.sin(toRad(angle));
  const cosV     = Math.cos(toRad(angle));
  const sinN     = Math.sin(toRad(-angle));
  const cosN     = Math.cos(toRad(-angle));

  return (
    <CardLayout dark={dark}
      scene={(
        <div ref={svgRef} onPointerDown={onPD} style={{ cursor:"crosshair", touchAction:"none", userSelect:"none" }}>
          <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`} style={{ display:"block", touchAction:"none" }}>
            <line x1={12} y1={CY} x2={SZ-12} y2={CY} stroke={sub} strokeWidth={1.5} /><polygon points={`${SZ-8},${CY} ${SZ-16},${CY-4} ${SZ-16},${CY+4}`} fill={sub} />
            <line x1={CX} y1={SZ-12} x2={CX} y2={12} stroke={sub} strokeWidth={1.5} /><polygon points={`${CX},8 ${CX-4},16 ${CX+4},16`} fill={sub} />
            <text x={SZ-10} y={CY-8} textAnchor="middle" fontSize={11} fontStyle="italic" fill={sub} style={FS}>x</text>
            <text x={CX+8}  y={14}   textAnchor="start"  fontSize={11} fontStyle="italic" fill={sub} style={FS}>y</text>
            <circle cx={CX} cy={CY} r={R} fill="none" stroke={sub} strokeWidth={1} strokeDasharray="3 4" opacity={0.45} />
            {showArc && <path d={isNeg ? secPathCW(CX,CY,ARC,0,norm) : secPath(CX,CY,ARC,0,norm)} fill={isNeg?ABG:BBG} stroke="none" />}
            {showArc && <path d={isNeg ? arcPathCW(CX,CY,ARC,0,norm) : arcPath(CX,CY,ARC,0,norm)} fill="none" stroke={col} strokeWidth={2.5} strokeLinecap="round" />}
            {showArc && absAngle > 20 && absAngle < 355 && <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700" fill={col} style={FS}>{angle}°</text>}
            {showArc && <text x={polar(CX,CY,ARC-14,arcMid/2).x} y={polar(CX,CY,ARC-14,arcMid/2).y} textAnchor="middle" dominantBaseline="central" fontSize={8} fill={col} opacity={0.6} style={FS}>{isNeg?"CW":"CCW"}</text>}
            <line x1={CX} y1={unitPt.y} x2={unitPt.x} y2={unitPt.y} stroke={GREEN} strokeWidth={1.5} strokeDasharray="3 3" opacity={0.5} />
            <line x1={unitPt.x} y1={CY} x2={unitPt.x} y2={unitPt.y} stroke={RED} strokeWidth={1.5} strokeDasharray="3 3" opacity={0.5} />
            <line x1={CX} y1={CY} x2={CX+ARM} y2={CY} stroke={sub} strokeWidth={2} strokeLinecap="round" />
            <line x1={CX} y1={CY} x2={termEnd.x} y2={termEnd.y} stroke={col} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={unitPt.x} cy={unitPt.y} r={5} fill={col} opacity={0.85} stroke="white" strokeWidth={1.5} />
            <circle cx={CX} cy={CY} r={4.5} fill={col} />
            <g style={{ cursor:"grab" }}>
              <circle cx={termEnd.x} cy={termEnd.y} r={16} fill="transparent" />
              <circle cx={termEnd.x} cy={termEnd.y} r={8} fill={col} opacity={0.92} stroke="white" strokeWidth={2} />
            </g>
          </svg>
        </div>
      )}
      explanation={(
        <>
          <div style={{ fontSize:"13px", fontWeight:"800", color:textPri }}>Directed Angles</div>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>A directed angle has magnitude and direction. Positive = CCW (blue). Negative = CW (amber).</p>
          <p style={{ margin:0, fontSize:"12px", lineHeight:"1.65", color:textSec }}>Drag above the x-axis for positive, below for negative.</p>
          <Divider border={border} />
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <div style={{ fontSize:"40px", fontWeight:"900", lineHeight:1, color:col, letterSpacing:"-0.04em" }}>{angle}<span style={{ fontSize:"16px" }}>°</span></div>
            <span style={{ display:"inline-block", padding:"3px 10px", borderRadius:"6px", fontSize:"11px", fontWeight:"700", color:col, background:`${col}15`, border:`1.5px solid ${col}33` }}>{isNeg?"CW ↻":"CCW ↺"}</span>
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            <div style={{ flex:1, background:panelBg, borderRadius:"9px", border:`1.5px solid ${RED}22`, padding:"8px", textAlign:"center" }}><div style={{ fontSize:"9px", fontWeight:"600", color:RED, textTransform:"uppercase", marginBottom:"3px", fontFamily:"monospace" }}>sin({angle}°)</div><div style={{ fontSize:"18px", fontWeight:"900", color:RED, lineHeight:1, fontFamily:"monospace" }}>{sinV.toFixed(2)}</div></div>
            <div style={{ flex:1, background:panelBg, borderRadius:"9px", border:`1.5px solid ${GREEN}22`, padding:"8px", textAlign:"center" }}><div style={{ fontSize:"9px", fontWeight:"600", color:GREEN, textTransform:"uppercase", marginBottom:"3px", fontFamily:"monospace" }}>cos({angle}°)</div><div style={{ fontSize:"18px", fontWeight:"900", color:GREEN, lineHeight:1, fontFamily:"monospace" }}>{cosV.toFixed(2)}</div></div>
          </div>
          <Divider border={border} />
          <div style={{ padding:"9px 12px", borderRadius:"9px", background:panelBg, border:`1.5px solid ${border}`, fontFamily:"monospace", fontSize:"11px", lineHeight:"1.8", color:textSec }}>
            <div><span style={{ color:RED }}>sin({angle}°)</span> = <span style={{ color:RED, fontWeight:"700" }}>{sinV.toFixed(3)}</span></div>
            <div><span style={{ color:RED }}>sin({-angle}°)</span> = <span style={{ color:RED, fontWeight:"700" }}>{sinN.toFixed(3)}</span> ✓ negated</div>
            <div style={{ marginTop:"4px" }}><span style={{ color:GREEN }}>cos({angle}°)</span> = <span style={{ color:GREEN, fontWeight:"700" }}>{cosV.toFixed(3)}</span></div>
            <div><span style={{ color:GREEN }}>cos({-angle}°)</span> = <span style={{ color:GREEN, fontWeight:"700" }}>{cosN.toFixed(3)}</span> ✓ same</div>
          </div>
          <div style={{ padding:"9px 12px", borderRadius:"9px", background:panelBg, border:`1.5px solid ${border}`, fontFamily:"monospace", fontSize:"11px", color:textPri, lineHeight:"1.8" }}>
            <div>sin(−θ) = −sin(θ) <span style={{ color:textSec, fontSize:"10px" }}>odd</span></div>
            <div>cos(−θ) = cos(θ) <span style={{ color:textSec, fontSize:"10px" }}>even</span></div>
          </div>
        </>
      )}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT REGISTRY
// ═══════════════════════════════════════════════════════════════════════════════

const CONCEPTS = [
  { id:"basic",      group:"Classification", label:"Angle Types",          Component:BasicAngles      },
  { id:"comp-supp",  group:"Relationships",  label:"Comp. & Supplementary",Component:CompSupp         },
  { id:"vertical",   group:"Relationships",  label:"Vertical Angles",      Component:VertAngles       },
  { id:"adjacent",   group:"Relationships",  label:"Adjacent Angles",      Component:AdjacentAngles   },
  { id:"standard",   group:"Trigonometry",   label:"Standard Position",    Component:StandardPosition },
  { id:"reference",  group:"Trigonometry",   label:"Reference Angles",     Component:ReferenceAngle   },
  { id:"coterminal", group:"Trigonometry",   label:"Coterminal Angles",    Component:CoterminalAngles },
  { id:"special",    group:"Trigonometry",   label:"Special Angles",       Component:SpecialAngles    },
  { id:"directed",   group:"Trigonometry",   label:"Directed Angles",      Component:DirectedAngles   },
];

const GROUPS = ["Classification", "Relationships", "Trigonometry"];

// ═══════════════════════════════════════════════════════════════════════════════
// HUB — DEFAULT EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export default function TrigoAngleTypesExplorer({ defaultActive = "standard" } = {}) {
  const [active, setActive] = useState(defaultActive);
  const [dark,   setDark]   = useState(false);
  const current = CONCEPTS.find((c) => c.id === active);
  const { surface, border, textPri, textSec, panelBg } = useTheme(dark);
  const bg = dark ? "#0f172a" : "#f8fafc";

  return (
    <div style={{ minHeight:"100vh", background:bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px", fontFamily:"system-ui, -apple-system, sans-serif", transition:"background 0.2s" }}>
      <div style={{ width:"100%", maxWidth:"1000px", background:surface, borderRadius:"20px", border:`1.5px solid ${border}`, boxShadow:dark?"0 4px 40px rgba(0,0,0,0.45)":"0 4px 40px rgba(0,0,0,0.07)", overflow:"hidden", display:"flex", flexDirection:"column" }}>

        {/* Top bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 20px", borderBottom:`1.5px solid ${border}`, background:surface, flexShrink:0 }}>
          <div style={{ display:"flex", alignItems:"baseline", gap:"10px" }}>
            <span style={{ fontSize:"16px", fontWeight:"800", color:textPri, letterSpacing:"-0.02em" }}>Angle Types Explorer</span>
            {current && <span style={{ fontSize:"12px", color:textSec }}>{current.label}</span>}
          </div>
          <button onClick={() => setDark((d) => !d)} style={{ padding:"5px 13px", borderRadius:"8px", border:`1.5px solid ${border}`, background:"transparent", color:textSec, fontSize:"12px", cursor:"pointer", fontFamily:"inherit" }}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Body */}
        <div style={{ display:"flex", flex:1, minHeight:"480px" }}>

          {/* Sidebar */}
          <div style={{ width:"168px", flexShrink:0, background:panelBg, borderRight:`1.5px solid ${border}`, padding:"12px 8px", display:"flex", flexDirection:"column", overflowY:"auto" }}>
            {GROUPS.map((group) => {
              const items = CONCEPTS.filter((c) => c.group === group);
              return (
                <div key={group} style={{ marginBottom:"10px" }}>
                  <div style={{ fontSize:"9px", fontWeight:"600", color:textSec, letterSpacing:"0.09em", textTransform:"uppercase", padding:"2px 8px", marginBottom:"4px" }}>{group}</div>
                  {items.map((c) => {
                    const act = active === c.id;
                    return (
                      <button key={c.id} onClick={() => setActive(c.id)} style={{ display:"block", width:"100%", textAlign:"left", padding:"7px 10px", borderRadius:"8px", border:"none", background:act?BLUE:"transparent", color:act?"#fff":textSec, fontSize:"11px", fontWeight:act?"600":"400", fontFamily:"system-ui,sans-serif", cursor:"pointer", transition:"all 0.12s", marginBottom:"1px" }}>
                        {c.label}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Main panel */}
          <div style={{ flex:1, background:surface, minWidth:0, overflowX:"auto" }}>
            {current && <current.Component dark={dark} />}
          </div>

        </div>
      </div>
    </div>
  );
}