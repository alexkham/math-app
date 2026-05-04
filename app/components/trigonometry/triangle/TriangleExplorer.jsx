// import { useState, useRef, useEffect, useMemo, useCallback } from "react";

// /* ═══════════════════════════════════════════════
//    TRIANGLE EXPLORER v7
//    Core = pure SVG renderer (props only)
//    Wrapper = all UI controls
//    ═══════════════════════════════════════════════ */

// const D = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
// const R2D = r => (r * 180) / Math.PI;
// const D2R = d => (d * Math.PI) / 180;
// const MID = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
// const FF = '"IBM Plex Mono", monospace';

// function calcAngles(A, B, C) {
//   const a = D(B, C), b = D(A, C), c = D(A, B);
//   if (a < 0.001 || b < 0.001 || c < 0.001) return { A: 0, B: 0, C: Math.PI };
//   const cA = Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)));
//   const cB = Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)));
//   const aA = Math.acos(cA), aB = Math.acos(cB);
//   return { A: aA, B: aB, C: Math.PI - aA - aB };
// }

// function dispAng(rA, rB) {
//   const a = Math.round(R2D(rA) * 10) / 10, b = Math.round(R2D(rB) * 10) / 10;
//   return { A: a, B: b, C: Math.round((180 - a - b) * 10) / 10 };
// }

// function offL(p1, p2, n) {
//   const dx = p2.x - p1.x, dy = p2.y - p1.y, l = Math.sqrt(dx * dx + dy * dy);
//   return l === 0 ? { x: 0, y: 0 } : { x: (-dy / l) * n, y: (dx / l) * n };
// }

// function enforce(c, m, o, r) {
//   const dm = Math.atan2(m.y - c.y, m.x - c.x), dO = D(c, o);
//   if (dO < 0.001) return o;
//   let df = Math.atan2(o.y - c.y, o.x - c.x) - dm;
//   while (df > Math.PI) df -= 2 * Math.PI;
//   while (df < -Math.PI) df += 2 * Math.PI;
//   return { x: c.x + dO * Math.cos(dm + (df >= 0 ? 1 : -1) * r), y: c.y + dO * Math.sin(dm + (df >= 0 ? 1 : -1) * r) };
// }

// function arcP(c, p1, p2, r) {
//   let s = Math.atan2(p1.y - c.y, p1.x - c.x), e = Math.atan2(p2.y - c.y, p2.x - c.x), d = e - s;
//   if (d > Math.PI) s += 2 * Math.PI; if (d < -Math.PI) e += 2 * Math.PI; if (e < s) [s, e] = [e, s];
//   return `M ${c.x + r * Math.cos(s)} ${c.y + r * Math.sin(s)} A ${r} ${r} 0 ${e - s > Math.PI ? 1 : 0} 1 ${c.x + r * Math.cos(e)} ${c.y + r * Math.sin(e)}`;
// }

// function aLP(c, p1, p2, r) {
//   const a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
//   let m = (a1 + a2) / 2; if (Math.abs(a1 - a2) > Math.PI) m += Math.PI;
//   return { x: c.x + (r + 16) * Math.cos(m), y: c.y + (r + 16) * Math.sin(m) };
// }

// function vbCalc(vs, pad) {
//   const xs = vs.map(v => v.x), ys = vs.map(v => v.y);
//   const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
//   return { x, y, w: Math.max(...xs) + pad - x, h: Math.max(...ys) + pad - y };
// }

// /* ── themes ───────────────────────────────────── */

// const TH = {
//   light: {
//     bg: "#f4f6fa", grid: "rgba(0,0,0,0.04)", fill: "rgba(24,100,199,0.03)",
//     sA: "#d9434f", sB: "#2b8a3e", sC: "#1864c7", aA: "#d9434f", aB: "#2b8a3e", aC: "#1864c7",
//     vxH: "#1864c7", dim: "rgba(0,0,0,0.4)", ra: "#1864c7", acc: "#1864c7",
//     lockBg: "rgba(24,100,199,0.08)", pBg: "rgba(0,0,0,0.03)", pBd: "rgba(0,0,0,0.08)",
//     hBd: "rgba(0,0,0,0.08)", tBg: "rgba(0,0,0,0.06)", tTx: "#667", iBd: "rgba(0,0,0,0.15)",
//     wBg: "#eceef2", nBg: "#f4f6fa", nBd: "rgba(0,0,0,0.08)",
//     rpBg: "#f4f6fa", rpBd: "rgba(0,0,0,0.06)", rpHBg: "rgba(24,100,199,0.04)",
//     taBd: "rgba(0,0,0,0.1)", taTx: "#667", taABg: "#1864c7", taATx: "#fff",
//     blBd: "rgba(0,0,0,0.06)", fmBg: "rgba(24,100,199,0.04)",
//     tx: "#333", txD: "rgba(0,0,0,0.42)", txM: "#555", grpBg: "rgba(24,100,199,0.04)",
//   },
//   dark: {
//     bg: "#0a0c12", grid: "rgba(255,255,255,0.03)", fill: "rgba(91,156,245,0.03)",
//     sA: "#ff6b6b", sB: "#51cf66", sC: "#5b9cf5", aA: "#ff6b6b", aB: "#51cf66", aC: "#5b9cf5",
//     vxH: "#5b9cf5", dim: "rgba(255,255,255,0.35)", ra: "#5b9cf5", acc: "#5b9cf5",
//     lockBg: "rgba(91,156,245,0.08)", pBg: "rgba(255,255,255,0.03)", pBd: "rgba(255,255,255,0.06)",
//     hBd: "rgba(255,255,255,0.06)", tBg: "rgba(255,255,255,0.08)", tTx: "#889", iBd: "rgba(255,255,255,0.15)",
//     wBg: "#0e1017", nBg: "#14161e", nBd: "rgba(255,255,255,0.06)",
//     rpBg: "#14161e", rpBd: "rgba(255,255,255,0.06)", rpHBg: "rgba(91,156,245,0.04)",
//     taBd: "rgba(255,255,255,0.08)", taTx: "#889", taABg: "#3b7de0", taATx: "#fff",
//     blBd: "rgba(255,255,255,0.06)", fmBg: "rgba(91,156,245,0.06)",
//     tx: "#e0e0e0", txD: "rgba(255,255,255,0.32)", txM: "#bbb", grpBg: "rgba(91,156,245,0.04)",
//   },
// };

// const AR = 28;

// /* ══════════════════════════════════════════════════
//    CORE TRIANGLE — pure renderer, props only
//    Props: vertices, theme, draggable, zoom, onVertexDrag, lockedAngles
//    No header, no controls, no buttons.
//    ══════════════════════════════════════════════════ */

// function RAMark({ c, p1, p2, col }) {
//   const sz = 14, a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
//   return <polyline points={`${c.x + sz * Math.cos(a1)},${c.y + sz * Math.sin(a1)} ${c.x + sz * Math.cos(a1) + sz * Math.cos(a2)},${c.y + sz * Math.sin(a1) + sz * Math.sin(a2)} ${c.x + sz * Math.cos(a2)},${c.y + sz * Math.sin(a2)}`} fill="none" stroke={col} strokeWidth={1.5} opacity={0.8} />;
// }

// function GridSvg({ vb, col }) {
//   const ln = [], sp = 30, sx = Math.floor(vb.x / sp) * sp, sy = Math.floor(vb.y / sp) * sp;
//   for (let x = sx; x <= vb.x + vb.w; x += sp) ln.push(<line key={`v${x}`} x1={x} y1={vb.y} x2={x} y2={vb.y + vb.h} stroke={col} strokeWidth={0.5} />);
//   for (let y = sy; y <= vb.y + vb.h; y += sp) ln.push(<line key={`h${y}`} x1={vb.x} y1={y} x2={vb.x + vb.w} y2={y} stroke={col} strokeWidth={0.5} />);
//   return <g>{ln}</g>;
// }

// function VtxDot({ pos, onDrag, label, col, hCol, svgRef, locked, canDrag }) {
//   const [hov, setHov] = useState(false);
//   const dr = useRef(false);
//   return (
//     <g onPointerDown={e => { if (!canDrag) return; e.preventDefault(); e.stopPropagation(); dr.current = true; e.target.setPointerCapture(e.pointerId); }}
//       onPointerMove={e => { if (!canDrag || !dr.current || !svgRef.current) return; const p = svgRef.current.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; onDrag(p.matrixTransform(svgRef.current.getScreenCTM().inverse())); }}
//       onPointerUp={() => { dr.current = false; }}
//       onPointerEnter={() => setHov(true)} onPointerLeave={() => setHov(false)}
//       style={{ cursor: canDrag ? "grab" : "default" }}>
//       <circle cx={pos.x} cy={pos.y} r={18} fill="transparent" />
//       {hov && canDrag && <circle cx={pos.x} cy={pos.y} r={12} fill={hCol} opacity={0.15} />}
//       {locked && <circle cx={pos.x} cy={pos.y} r={10} fill="none" stroke={hCol} strokeWidth={1.5} strokeDasharray="3 2" opacity={0.6} />}
//       <circle cx={pos.x} cy={pos.y} r={hov && canDrag ? 6 : 4.5} fill={hov && canDrag ? hCol : col} stroke={col} strokeWidth={2} />
//       <text x={pos.x} y={pos.y - 14} textAnchor="middle" fill={col} style={{ fontSize: 13, fontFamily: FF, fontWeight: 700 }}>{label}{locked ? " 🔒" : ""}</text>
//     </g>
//   );
// }

// function SLbl({ p1, p2, l, v, col, dim }) {
//   const m = MID(p1, p2), o = offL(p1, p2, 18);
//   return <g><text x={m.x + o.x} y={m.y + o.y - 6} textAnchor="middle" fill={col} style={{ fontSize: 13, fontFamily: FF, fontWeight: 600 }}>{l}</text><text x={m.x + o.x} y={m.y + o.y + 10} textAnchor="middle" fill={dim} style={{ fontSize: 11, fontFamily: FF }}>{v}</text></g>;
// }

// function CoreTriangle({ vertices, theme, draggable, zoom, onVertexDrag, lockedAngles }) {
//   const ref = useRef(null);
//   const t = TH[theme];
//   const [A, B, C] = vertices;
//   const vb = useMemo(() => vbCalc(vertices, 35), [vertices]);
//   const sA = D(B, C), sB = D(A, C), sC = D(A, B);
//   const an = calcAngles(A, B, C), da = dispAng(an.A, an.B);
//   const rA = Math.abs(an.A - Math.PI / 2) < D2R(3), rB = Math.abs(an.B - Math.PI / 2) < D2R(3), rC = Math.abs(an.C - Math.PI / 2) < D2R(3);
//   const u = 30, fm = v => (v / u).toFixed(1);
//   const cols = [t.aA, t.aB, t.aC];
//   const lk = lockedAngles || { A: null, B: null, C: null };

//   return (
//     <div style={{ background: t.bg, borderRadius: 10, overflow: "hidden", userSelect: "none", fontFamily: FF, display: "flex", flexDirection: "column" }}>
//       <div style={{ flex: 1, overflow: "auto", display: "flex", justifyContent: "center", alignItems: "center", padding: 12 }}>
//         <svg ref={ref} viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`} width={Math.round(vb.w * zoom / 100)} height={Math.round(vb.h * zoom / 100)} style={{ display: "block" }}>
//           <rect x={vb.x} y={vb.y} width={vb.w} height={vb.h} fill={t.bg} />
//           <GridSvg vb={vb} col={t.grid} />
//           <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill={t.fill} />
//           <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke={t.sA} strokeWidth={2} opacity={0.85} />
//           <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke={t.sB} strokeWidth={2} opacity={0.85} />
//           <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={t.sC} strokeWidth={2} opacity={0.85} />
//           {rA ? <RAMark c={A} p1={B} p2={C} col={t.ra} /> : <path d={arcP(A, B, C, AR)} fill="none" stroke={t.aA} strokeWidth={1.5} opacity={0.7} />}
//           {rB ? <RAMark c={B} p1={A} p2={C} col={t.ra} /> : <path d={arcP(B, A, C, AR)} fill="none" stroke={t.aB} strokeWidth={1.5} opacity={0.7} />}
//           {rC ? <RAMark c={C} p1={A} p2={B} col={t.ra} /> : <path d={arcP(C, A, B, AR)} fill="none" stroke={t.aC} strokeWidth={1.5} opacity={0.7} />}
//           {!rA && (() => { const p = aLP(A, B, C, AR); return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={t.aA} style={{ fontSize: 11, fontFamily: FF }}>{da.A.toFixed(1)}°</text>; })()}
//           {!rB && (() => { const p = aLP(B, A, C, AR); return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={t.aB} style={{ fontSize: 11, fontFamily: FF }}>{da.B.toFixed(1)}°</text>; })()}
//           {!rC && (() => { const p = aLP(C, A, B, AR); return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={t.aC} style={{ fontSize: 11, fontFamily: FF }}>{da.C.toFixed(1)}°</text>; })()}
//           <SLbl p1={B} p2={C} l="a" v={fm(sA)} col={t.sA} dim={t.dim} />
//           <SLbl p1={A} p2={C} l="b" v={fm(sB)} col={t.sB} dim={t.dim} />
//           <SLbl p1={A} p2={B} l="c" v={fm(sC)} col={t.sC} dim={t.dim} />
//           <VtxDot pos={A} onDrag={p => onVertexDrag(0, p)} label="A" col={t.aA} hCol={t.vxH} svgRef={ref} locked={lk.A !== null} canDrag={draggable} />
//           <VtxDot pos={B} onDrag={p => onVertexDrag(1, p)} label="B" col={t.aB} hCol={t.vxH} svgRef={ref} locked={lk.B !== null} canDrag={draggable} />
//           <VtxDot pos={C} onDrag={p => onVertexDrag(2, p)} label="C" col={t.aC} hCol={t.vxH} svgRef={ref} locked={lk.C !== null} canDrag={draggable} />
//         </svg>
//       </div>
//       {/* info bar */}
//       <div style={{ display: "flex", justifyContent: "center", gap: 24, padding: "10px 16px", background: t.pBg, borderTop: `1px solid ${t.pBd}`, fontSize: 12, flexWrap: "wrap", flexShrink: 0 }}>
//         {[{ n: "A", d: da.A, c: t.aA }, { n: "B", d: da.B, c: t.aB }, { n: "C", d: da.C, c: t.aC }].map(a => <span key={a.n} style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: a.c, display: "inline-block" }} /><span style={{ color: a.c, fontWeight: 600 }}>{a.n}</span><span style={{ color: t.dim }}>{a.d.toFixed(1)}°</span></span>)}
//         <span style={{ width: 1, height: 16, background: t.pBd }} />
//         {[{ n: "a", v: fm(sA), c: t.sA }, { n: "b", v: fm(sB), c: t.sB }, { n: "c", v: fm(sC), c: t.sC }].map(s => <span key={s.n} style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: s.c, display: "inline-block" }} /><span style={{ color: s.c, fontWeight: 600 }}>{s.n}</span><span style={{ color: t.dim }}>{s.v}</span></span>)}
//       </div>
//       {/* trig bar */}
//       {(() => {
//         const arr = [{ v: an.A, i: 0 }, { v: an.B, i: 1 }, { v: an.C, i: 2 }];
//         const best = arr.reduce((b, c) => Math.abs(c.v - Math.PI / 2) < Math.abs(b.v - Math.PI / 2) ? c : b);
//         if (Math.abs(best.v - Math.PI / 2) >= D2R(5)) return draggable ? <div style={{ padding: "8px 16px", fontSize: 11, color: t.dim, textAlign: "center", background: t.pBg, borderTop: `1px solid ${t.pBd}`, flexShrink: 0 }}>drag near 90° for trig ratios</div> : null;
//         const ri = best.i, oi = [0, 1, 2].filter(i => i !== ri), rv = vertices[ri], v1 = vertices[oi[0]], v2 = vertices[oi[1]], h = D(v1, v2);
//         const mk = (n, c, op, ad) => <span key={n} style={{ color: t.dim }}><span style={{ color: c, fontWeight: 600 }}>{n}</span>{`  sin=${(op / h).toFixed(3)}  cos=${(ad / h).toFixed(3)}  tan=${ad > 0.001 ? (op / ad).toFixed(3) : "∞"}`}</span>;
//         return <div style={{ padding: "8px 16px", fontSize: 11, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", background: t.pBg, borderTop: `1px solid ${t.pBd}`, flexShrink: 0 }}>{mk(["A", "B", "C"][oi[0]], cols[oi[0]], D(rv, v2), D(rv, v1))}{mk(["A", "B", "C"][oi[1]], cols[oi[1]], D(rv, v1), D(rv, v2))}</div>;
//       })()}
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════
//    PANEL BLOCKS
//    ══════════════════════════════════════════════════ */

// function PB({ title, children, t }) {
//   return <div style={{ padding: "14px 18px", borderBottom: `1px solid ${t.blBd}`, fontFamily: FF }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: t.acc, marginBottom: 10, textTransform: "uppercase" }}>{title}</div>{children}</div>;
// }
// function Fm({ children, t }) { return <div style={{ fontSize: 13, color: t.txM, background: t.fmBg, padding: "8px 12px", borderRadius: 6, marginBottom: 8, fontFamily: FF, lineHeight: 1.6 }}>{children}</div>; }
// function Nt({ children, t }) { return <div style={{ fontSize: 11, color: t.txD, lineHeight: 1.5, marginTop: 8 }}>{children}</div>; }

// function AngleSumP({ st, t }) {
//   if (!st) return null; const d = st.da;
//   return <PB title="Angle Sum" t={t}><Fm t={t}>∠A + ∠B + ∠C = 180°</Fm><div style={{ fontSize: 13, color: t.tx }}><span style={{ color: t.aA, fontWeight: 700 }}>{d.A}°</span> + <span style={{ color: t.aB, fontWeight: 700 }}>{d.B}°</span> + <span style={{ color: t.aC, fontWeight: 700 }}>{d.C}°</span> = <span style={{ fontWeight: 700 }}>{(d.A + d.B + d.C).toFixed(1)}°</span></div><Nt t={t}>Interior angles always sum to exactly 180°.</Nt></PB>;
// }

// function ClassP({ st, t }) {
//   if (!st) return null; const d = st.da, si = st.ds;
//   let byA = "Acute"; if ([d.A, d.B, d.C].some(a => a >= 89.9 && a <= 90.1)) byA = "Right"; else if ([d.A, d.B, d.C].some(a => a > 90)) byA = "Obtuse";
//   const ss = [parseFloat(si.a), parseFloat(si.b), parseFloat(si.c)], eq = (a, b) => Math.abs(a - b) < 0.15;
//   let byS = "Scalene"; if (eq(ss[0], ss[1]) && eq(ss[1], ss[2])) byS = "Equilateral"; else if (eq(ss[0], ss[1]) || eq(ss[1], ss[2]) || eq(ss[0], ss[2])) byS = "Isosceles";
//   return <PB title="Classification" t={t}><div style={{ fontSize: 13, color: t.tx, marginBottom: 6 }}>By angles: <span style={{ fontWeight: 700, color: t.acc }}>{byA}</span></div><div style={{ fontSize: 13, color: t.tx }}>By sides: <span style={{ fontWeight: 700, color: t.acc }}>{byS}</span></div><Nt t={t}>{byA === "Right" ? "One 90°. " : byA === "Acute" ? "All < 90°. " : "One > 90°. "}{byS === "Equilateral" ? "All equal." : byS === "Isosceles" ? "Two equal." : "All different."}</Nt></PB>;
// }

// function TrigP({ st, t }) {
//   if (!st) return null; const { vs, ir } = st;
//   let rK = null; if (ir.A) rK = "A"; else if (ir.B) rK = "B"; else if (ir.C) rK = "C";
//   if (!rK) return <PB title="Trig Ratios" t={t}><Nt t={t}>Shown when a right angle is present.</Nt></PB>;
//   const idx = { A: 0, B: 1, C: 2 }[rK], oth = [0, 1, 2].filter(i => i !== idx), col = [t.aA, t.aB, t.aC], lbl = ["A", "B", "C"];
//   const rv = vs[idx], v1 = vs[oth[0]], v2 = vs[oth[1]], hyp = D(v1, v2);
//   const row = (n, c, opp, adj) => <div key={n} style={{ marginBottom: 8 }}><div style={{ fontWeight: 700, color: c, fontSize: 12, marginBottom: 4 }}>∠{n}</div><div style={{ fontSize: 12, color: t.txM, lineHeight: 1.8 }}>sin = {(opp / hyp).toFixed(4)}<br />cos = {(adj / hyp).toFixed(4)}<br />tan = {adj > 0.001 ? (opp / adj).toFixed(4) : "∞"}</div></div>;
//   return <PB title="Trig Ratios (SOH-CAH-TOA)" t={t}><Fm t={t}>sin = opp/hyp, cos = adj/hyp, tan = opp/adj</Fm>{row(lbl[oth[0]], col[oth[0]], D(rv, v2), D(rv, v1))}{row(lbl[oth[1]], col[oth[1]], D(rv, v1), D(rv, v2))}</PB>;
// }

// function PythP({ st, t }) {
//   if (!st) return null; const { sides, ir } = st, u = 30, a = sides.a / u, b = sides.b / u, c = sides.c / u, has = ir.A || ir.B || ir.C;
//   return <PB title="Pythagorean Theorem" t={t}><Fm t={t}>a² + b² = c²</Fm><div style={{ fontSize: 12, color: t.txM, lineHeight: 1.8 }}>a²={(a * a).toFixed(2)}, b²={(b * b).toFixed(2)}<br />a²+b²={(a * a + b * b).toFixed(2)}<br />c²={(c * c).toFixed(2)}</div><Nt t={t}><span style={{ color: has ? t.acc : t.txD, fontWeight: has ? 600 : 400 }}>{has ? "✓ a²+b²≈c²" : `Diff: ${Math.abs(a * a + b * b - c * c).toFixed(2)}`}</span></Nt></PB>;
// }

// function SpecP({ st, t, ang }) {
//   if (!st) return null; const d = st.da;
//   return <PB title={`Special: ${ang.join("°-")}°`} t={t}>{ang[0] === 30 && ang[1] === 60 && <Fm t={t}>Ratio 1:√3:2<br />sin30°=0.5, cos30°≈0.866<br />sin60°≈0.866, cos60°=0.5</Fm>}{ang[0] === 45 && ang[1] === 45 && <Fm t={t}>Ratio 1:1:√2<br />sin45°=cos45°≈0.707<br />tan45°=1</Fm>}<Nt t={t}>Current: ∠A={d.A}° ∠B={d.B}° ∠C={d.C}°</Nt></PB>;
// }

// function SideAngP({ st, t }) {
//   if (!st) return null; const d = st.da, si = st.ds;
//   const items = [{ angle: d.A, side: parseFloat(si.a), aN: "A", sN: "a", aC: t.aA, sC: t.sA }, { angle: d.B, side: parseFloat(si.b), aN: "B", sN: "b", aC: t.aB, sC: t.sB }, { angle: d.C, side: parseFloat(si.c), aN: "C", sN: "c", aC: t.aC, sC: t.sC }].sort((a, b) => b.angle - a.angle);
//   return <PB title="Side ↔ Angle" t={t}><Nt t={t}>Largest angle ↔ longest side.</Nt><div style={{ marginTop: 8 }}>{items.map((it, i) => <div key={i} style={{ fontSize: 12, color: t.txM, marginBottom: 4, display: "flex", gap: 8, alignItems: "center" }}><span style={{ fontWeight: 700, color: it.aC, width: 65 }}>∠{it.aN}={it.angle}°</span><span style={{ color: t.dim }}>↔</span><span style={{ fontWeight: 700, color: it.sC }}>{it.sN}={it.side}</span></div>)}</div></PB>;
// }

// /* ══════════════════════════════════════════════════
//    DEFAULT SCENARIOS
//    ══════════════════════════════════════════════════ */

// function rt(b, h) { return [{ x: 0, y: h }, { x: b, y: h }, { x: 0, y: 0 }]; }

// const DEF_SC = [
//   { id: "equilateral", cat: "Classification", name: "Equilateral", verts: (() => { const s = 240, h = Math.round(s * Math.sqrt(3) / 2); return [{ x: 0, y: h }, { x: s, y: h }, { x: s / 2, y: 0 }]; })(), draggable: false, showControls: false, panels: (st, t) => <><ClassP st={st} t={t} /><AngleSumP st={st} t={t} /><SideAngP st={st} t={t} /></> },
//   { id: "isosceles", cat: "Classification", name: "Isosceles", verts: (() => { const b = 240, h = Math.round((b / 2) * Math.tan(D2R(70))); return [{ x: 0, y: h }, { x: b, y: h }, { x: b / 2, y: 0 }]; })(), draggable: false, showControls: false, panels: (st, t) => <><ClassP st={st} t={t} /><AngleSumP st={st} t={t} /><SideAngP st={st} t={t} /></> },
//   { id: "obtuse", cat: "Classification", name: "Obtuse", verts: [{ x: 0, y: 180 }, { x: 300, y: 200 }, { x: 120, y: 0 }], draggable: false, showControls: false, panels: (st, t) => <><ClassP st={st} t={t} /><AngleSumP st={st} t={t} /><PythP st={st} t={t} /></> },
//   { id: "right-45", cat: "Special", name: "45-45-90", verts: rt(220, 220), draggable: false, showControls: false, panels: (st, t) => <><SpecP st={st} t={t} ang={[45, 45, 90]} /><TrigP st={st} t={t} /><PythP st={st} t={t} /></> },
//   { id: "right-30-60", cat: "Special", name: "30-60-90", verts: rt(260, Math.round(260 * Math.tan(D2R(30)))), draggable: false, showControls: false, panels: (st, t) => <><SpecP st={st} t={t} ang={[30, 60, 90]} /><TrigP st={st} t={t} /><PythP st={st} t={t} /></> },
//   { id: "345", cat: "Special", name: "3-4-5", verts: rt(200, 150), draggable: false, showControls: false, panels: (st, t) => <><PB title="Pythagorean Triple: 3-4-5" t={t}><Fm t={t}>3²+4²=9+16=25=5²<br />The smallest Pythagorean triple.</Fm></PB><TrigP st={st} t={t} /><PythP st={st} t={t} /></> },
//   { id: "free", cat: "Explore", name: "Free Drag", verts: [{ x: 0, y: 200 }, { x: 280, y: 200 }, { x: 140, y: 0 }], draggable: true, showControls: true, panels: (st, t) => <><ClassP st={st} t={t} /><AngleSumP st={st} t={t} /><SideAngP st={st} t={t} /><TrigP st={st} t={t} /><PythP st={st} t={t} /></> },
// ];

// /* ══════════════════════════════════════════════════
//    LOCK CONTROL (wrapper UI)
//    ══════════════════════════════════════════════════ */

// function LockCtrl({ l, col, on, val, toggle, set, t }) {
//   const b = a => ({ padding: "3px 8px", border: `1px solid ${a ? col : t.iBd}`, borderRadius: 4, background: a ? t.lockBg : "transparent", color: a ? col : t.tTx, fontSize: 10, fontFamily: FF, fontWeight: a ? 700 : 400, cursor: "pointer" });
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//       <span style={{ color: col, fontWeight: 700, fontSize: 12, width: 14 }}>{l}</span>
//       <button onClick={toggle} style={b(on)}>{on ? "🔒" : "lock"}</button>
//       {on && <>
//         <input type="number" min={0.1} max={179.8} step={0.1} value={val} onChange={e => { const v = parseFloat(e.target.value); if (!isNaN(v) && v > 0 && v < 180) set(v); }}
//           style={{ width: 52, padding: "3px 6px", border: `1px solid ${col}`, borderRadius: 4, background: t.lockBg, color: col, fontSize: 11, fontFamily: FF, fontWeight: 700, textAlign: "center", outline: "none" }} />
//         <span style={{ color: t.dim, fontSize: 10 }}>°</span>
//         <input type="range" min={1} max={178} step={0.5} value={val} onChange={e => set(parseFloat(e.target.value))} style={{ width: 80, accentColor: col }} />
//         <button onClick={() => set(90)} style={b(Math.abs(val - 90) < 0.1)}>90°</button>
//       </>}
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════
//    EXPLORER — all state + all controls live here
//    ══════════════════════════════════════════════════ */

// export default function TriangleExplorer({ scenarios = DEF_SC }) {
//   const [activeId, setActiveId] = useState(scenarios[0]?.id);
//   const [resetCt, setResetCt] = useState(0);
//   const [theme, setTheme] = useState("light");
//   const [dragOvr, setDragOvr] = useState(null);
//   const [zm, setZm] = useState(100);
//   const [vs, setVs] = useState(scenarios[0]?.verts || []);
//   const [lk, setLk] = useState({ A: null, B: null, C: null });

//   const sc = scenarios.find(s => s.id === activeId) || scenarios[0];
//   const t = TH[theme];
//   const cats = [...new Set(scenarios.map(s => s.cat))];
//   const isDrag = dragOvr !== null ? dragOvr : sc.draggable;
//   const showCtrl = sc.showControls || isDrag;

//   /* switch scenario */
//   const sw = id => {
//     const next = scenarios.find(s => s.id === id) || scenarios[0];
//     setActiveId(id); setVs(next.verts); setLk({ A: null, B: null, C: null }); setZm(100); setDragOvr(null); setResetCt(c => c + 1);
//   };

//   /* refresh */
//   const refresh = () => { setVs(sc.verts); setLk({ A: null, B: null, C: null }); setZm(100); setResetCt(c => c + 1); };

//   /* computed state for panels */
//   const [A, B, C] = vs;
//   const an = calcAngles(A, B, C);
//   const da = dispAng(an.A, an.B);
//   const sA = D(B, C), sB = D(A, C), sC = D(A, B);
//   const u = 30, fm = v => (v / u).toFixed(1);
//   const rA = Math.abs(an.A - Math.PI / 2) < D2R(3), rB = Math.abs(an.B - Math.PI / 2) < D2R(3), rC = Math.abs(an.C - Math.PI / 2) < D2R(3);
//   const panelState = { vs, da, ds: { a: fm(sA), b: fm(sB), c: fm(sC) }, sides: { a: sA, b: sB, c: sC }, ir: { A: rA, B: rB, C: rC } };

//   /* lock logic */
//   const lkK = ["A", "B", "C"].filter(k => lk[k] !== null);
//   const cols = [t.aA, t.aB, t.aC];

//   const applyLk = (k, deg) => {
//     setVs(p => {
//       const n = [...p], i = { A: 0, B: 1, C: 2 }[k], nb = [0, 1, 2].filter(j => j !== i);
//       n[nb[1]] = enforce(p[i], p[nb[0]], p[nb[1]], D2R(deg));
//       const oL = lkK.filter(j => j !== k);
//       if (oL.length === 1) { const oK = oL[0], oI = { A: 0, B: 1, C: 2 }[oK], oN = [0, 1, 2].filter(j => j !== oI); n[oN[1]] = enforce(n[oI], n[oN[0]], n[oN[1]], D2R(lk[oK])); }
//       return n;
//     });
//   };

//   const togLk = k => {
//     setLk(p => {
//       if (p[k] !== null) return { ...p, [k]: null };
//       if (["A", "B", "C"].filter(j => p[j] !== null).length >= 2) return p;
//       return { ...p, [k]: Math.round(R2D(calcAngles(vs[0], vs[1], vs[2])[k]) * 10) / 10 };
//     });
//   };

//   const setLkV = (k, deg) => {
//     const oL = ["A", "B", "C"].filter(j => j !== k && lk[j] !== null);
//     if (deg + oL.reduce((s, j) => s + lk[j], 0) >= 179.9) return;
//     setLk(p => ({ ...p, [k]: deg })); applyLk(k, deg);
//   };

//   /* vertex drag — wrapper manages state */
//   const onVtxDrag = (i, pos) => {
//     if (!isDrag) return;
//     setVs(p => {
//       const n = [...p]; n[i] = pos;
//       for (const k of ["A", "B", "C"]) {
//         const ld = lk[k]; if (ld === null) continue;
//         const li = { A: 0, B: 1, C: 2 }[k], nb = [0, 1, 2].filter(j => j !== li);
//         if (nb.includes(i)) { const oi = nb.find(j => j !== i); n[oi] = enforce(n[li], n[i], n[oi], D2R(ld)); }
//       }
//       return n;
//     });
//   };

//   const bs = { background: t.tBg, border: "none", borderRadius: 4, padding: "3px 8px", color: t.tTx, fontSize: 11, fontFamily: FF, cursor: "pointer" };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: t.wBg, fontFamily: FF, color: t.tx, overflow: "hidden" }}>

//       {/* FIXED TOP: navbar + controls */}
//       <div style={{ flexShrink: 0 }}>
//         {/* navbar row */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", background: t.nBg, borderBottom: `1px solid ${t.nBd}`, overflowX: "auto" }}>
//           <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, color: t.acc, marginRight: 8, whiteSpace: "nowrap" }}>▲ EXPLORER</span>
//           {cats.map(cat => {
//             const inC = scenarios.filter(s => s.cat === cat), hasA = inC.some(s => s.id === activeId);
//             return (
//               <div key={cat} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 6px 4px 10px", borderRadius: 8, border: `1px solid ${hasA ? t.taABg + "44" : t.taBd}`, background: hasA ? t.grpBg : "transparent" }}>
//                 <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.5, color: hasA ? t.acc : t.txD, textTransform: "uppercase", marginRight: 4, whiteSpace: "nowrap" }}>{cat}</span>
//                 {inC.map(s => <button key={s.id} onClick={() => sw(s.id)} style={{ padding: "4px 10px", borderRadius: 5, border: activeId === s.id ? `1px solid ${t.taABg}` : "1px solid transparent", background: activeId === s.id ? t.taABg : "transparent", cursor: "pointer", fontFamily: FF, fontSize: 11, fontWeight: activeId === s.id ? 700 : 500, color: activeId === s.id ? t.taATx : t.taTx, whiteSpace: "nowrap" }}>{s.name}</button>)}
//               </div>
//             );
//           })}
//           <div style={{ flex: 1 }} />
//           <label style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: t.taTx, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
//             <input type="checkbox" checked={isDrag} onChange={e => setDragOvr(e.target.checked)} style={{ accentColor: t.acc }} />draggable
//           </label>
//           <button onClick={refresh} style={{ ...bs, border: `1px solid ${t.taBd}`, background: "transparent" }}>↻ refresh</button>
//           <button onClick={() => setTheme(p => p === "light" ? "dark" : "light")} style={{ ...bs, border: `1px solid ${t.taBd}`, background: "transparent" }}>{theme === "light" ? "● dark" : "○ light"}</button>
//         </div>

//         {/* controls row: zoom + lock */}
//         <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 20px", background: t.nBg, borderBottom: `1px solid ${t.nBd}`, flexWrap: "wrap" }}>
//           {/* zoom */}
//           <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//             <button onClick={() => setZm(z => Math.max(30, z - 10))} style={bs}>−</button>
//             <span style={{ color: t.dim, fontSize: 10, minWidth: 40, textAlign: "center" }}>{zm}%</span>
//             <button onClick={() => setZm(z => Math.min(500, z + 10))} style={bs}>+</button>
//             {zm !== 100 && <button onClick={() => setZm(100)} style={bs}>fit</button>}
//           </div>

//           {/* separator */}
//           <span style={{ width: 1, height: 20, background: t.pBd }} />

//           {/* locks */}
//           {showCtrl && <>
//             {["A", "B", "C"].map((k, i) => <LockCtrl key={k} l={k} col={cols[i]} on={lk[k] !== null} val={lk[k] || 0} toggle={() => togLk(k)} set={d => setLkV(k, d)} t={t} />)}
//             {lkK.length >= 2 && <span style={{ fontSize: 10, color: t.dim, fontStyle: "italic" }}>third = {(180 - lkK.reduce((s, k) => s + lk[k], 0)).toFixed(1)}°</span>}
//           </>}
//         </div>
//       </div>

//       {/* BODY: triangle + panel */}
//       <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
//         <div style={{ flex: "0 0 65%", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, overflow: "auto" }}>
//           <CoreTriangle vertices={vs} theme={theme} draggable={isDrag} zoom={zm} onVertexDrag={onVtxDrag} lockedAngles={lk} />
//         </div>
//         <div style={{ flex: "0 0 35%", background: t.rpBg, borderLeft: `1px solid ${t.rpBd}`, overflowY: "auto", paddingBottom: 20 }}>
//           <div style={{ padding: "14px 18px", fontSize: 14, fontWeight: 700, color: t.acc, borderBottom: `1px solid ${t.rpBd}`, background: t.rpHBg, position: "sticky", top: 0, zIndex: 1 }}>{sc.name}</div>
//           {isDrag && <div style={{ padding: "8px 18px", fontSize: 10, color: t.txD, borderBottom: `1px solid ${t.blBd}`, textAlign: "center" }}>↕ drag · lock angles · explore</div>}
//           {sc.panels(panelState, t)}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useRef, useMemo } from "react";

/* ═══════════════════════════════════════════════
   TRIANGLE EXPLORER v8
   - Blue theme (matches site)
   - Solid, readable controls
   - Stats under scene
   - Explanations panel right
   - Side colors: a=red, b=amber, c=blue
   - Default zoom = 170% effective
   - New scenarios: acute, right scalene, 5-12-13, law of sines, law of cosines
   ═══════════════════════════════════════════════ */

const ZOOM_BASE = 1.7;

const D = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
const R2D = r => (r * 180) / Math.PI;
const D2R = d => (d * Math.PI) / 180;
const MID = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
const FF = "system-ui, -apple-system, sans-serif";
const FFM = '"IBM Plex Mono", monospace';

function calcAngles(A, B, C) {
  const a = D(B, C), b = D(A, C), c = D(A, B);
  if (a < 0.001 || b < 0.001 || c < 0.001) return { A: 0, B: 0, C: Math.PI };
  const cA = Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)));
  const cB = Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)));
  const aA = Math.acos(cA), aB = Math.acos(cB);
  return { A: aA, B: aB, C: Math.PI - aA - aB };
}

function dispAng(rA, rB) {
  const a = Math.round(R2D(rA) * 10) / 10, b = Math.round(R2D(rB) * 10) / 10;
  return { A: a, B: b, C: Math.round((180 - a - b) * 10) / 10 };
}

function offL(p1, p2, n) {
  const dx = p2.x - p1.x, dy = p2.y - p1.y, l = Math.sqrt(dx * dx + dy * dy);
  return l === 0 ? { x: 0, y: 0 } : { x: (-dy / l) * n, y: (dx / l) * n };
}

function enforce(c, m, o, r) {
  const dm = Math.atan2(m.y - c.y, m.x - c.x), dO = D(c, o);
  if (dO < 0.001) return o;
  let df = Math.atan2(o.y - c.y, o.x - c.x) - dm;
  while (df > Math.PI) df -= 2 * Math.PI;
  while (df < -Math.PI) df += 2 * Math.PI;
  return { x: c.x + dO * Math.cos(dm + (df >= 0 ? 1 : -1) * r), y: c.y + dO * Math.sin(dm + (df >= 0 ? 1 : -1) * r) };
}

function arcP(c, p1, p2, r) {
  let s = Math.atan2(p1.y - c.y, p1.x - c.x), e = Math.atan2(p2.y - c.y, p2.x - c.x), d = e - s;
  if (d > Math.PI) s += 2 * Math.PI; if (d < -Math.PI) e += 2 * Math.PI; if (e < s) [s, e] = [e, s];
  return `M ${c.x + r * Math.cos(s)} ${c.y + r * Math.sin(s)} A ${r} ${r} 0 ${e - s > Math.PI ? 1 : 0} 1 ${c.x + r * Math.cos(e)} ${c.y + r * Math.sin(e)}`;
}

function aLP(c, p1, p2, r) {
  const a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
  let m = (a1 + a2) / 2;
  if (Math.abs(a1 - a2) > Math.PI) m += Math.PI;
  return { x: c.x + (r + 16) * Math.cos(m), y: c.y + (r + 16) * Math.sin(m) };
}

function vbCalc(vs, pad) {
  const xs = vs.map(v => v.x), ys = vs.map(v => v.y);
  const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
  return { x, y, w: Math.max(...xs) + pad - x, h: Math.max(...ys) + pad - y };
}

function area(A, B, C) {
  return Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y)) / 2;
}

/* ── theme: blue, light-only (matches site) ───── */

const TH = {
  // backgrounds
  bg:        "#ffffff",
  sceneBg:   "#f3f4f6",
  statsBg:   "#f9fafb",
  panelBg:   "#f3f4f6",
  topBarBg:  "#1e40af",
  ctrlBarBg: "#eff6ff",

  // borders
  border:    "#bfdbfe",
  borderMid: "#d1d5db",
  borderLt:  "#e5e7eb",
  grid:      "rgba(30,64,175,0.06)",
  fill:      "rgba(30,64,175,0.05)",

  // accents
  primary:   "#1e40af",
  primaryLt: "#dbeafe",

  // side & vertex colors (blue-compatible: red / amber / blue)
  cA: "#dc2626", // a (opposite A)
  cB: "#d97706", // b (opposite B)
  cC: "#1e40af", // c (opposite C)

  // text
  tx:    "#0f172a",
  txMid: "#475569",
  txDim: "#94a3b8",

  // top bar text
  tbTx:    "#ffffff",
  tbTxDim: "rgba(255,255,255,0.7)",
  tbBd:    "rgba(255,255,255,0.3)",
  tbActive:"rgba(255,255,255,0.18)",
};

const AR = 28;

/* ══════════════════════════════════════════════════
   CORE TRIANGLE
   ══════════════════════════════════════════════════ */

function RAMark({ c, p1, p2, col }) {
  const sz = 14;
  const a1 = Math.atan2(p1.y - c.y, p1.x - c.x);
  const a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
  return (
    <polyline
      points={`${c.x + sz * Math.cos(a1)},${c.y + sz * Math.sin(a1)} ${c.x + sz * Math.cos(a1) + sz * Math.cos(a2)},${c.y + sz * Math.sin(a1) + sz * Math.sin(a2)} ${c.x + sz * Math.cos(a2)},${c.y + sz * Math.sin(a2)}`}
      fill="none" stroke={col} strokeWidth={1.5} opacity={0.85}
    />
  );
}

function GridSvg({ vb, col }) {
  const ln = [], sp = 30;
  const sx = Math.floor(vb.x / sp) * sp, sy = Math.floor(vb.y / sp) * sp;
  for (let x = sx; x <= vb.x + vb.w; x += sp) ln.push(<line key={`v${x}`} x1={x} y1={vb.y} x2={x} y2={vb.y + vb.h} stroke={col} strokeWidth={0.5} />);
  for (let y = sy; y <= vb.y + vb.h; y += sp) ln.push(<line key={`h${y}`} x1={vb.x} y1={y} x2={vb.x + vb.w} y2={y} stroke={col} strokeWidth={0.5} />);
  return <g>{ln}</g>;
}

function VtxDot({ pos, onDrag, label, col, svgRef, locked, canDrag }) {
  const [hov, setHov] = useState(false);
  const dr = useRef(false);
  return (
    <g
      onPointerDown={e => {
        if (!canDrag) return;
        e.preventDefault(); e.stopPropagation();
        dr.current = true;
        e.target.setPointerCapture(e.pointerId);
      }}
      onPointerMove={e => {
        if (!canDrag || !dr.current || !svgRef.current) return;
        const p = svgRef.current.createSVGPoint();
        p.x = e.clientX; p.y = e.clientY;
        onDrag(p.matrixTransform(svgRef.current.getScreenCTM().inverse()));
      }}
      onPointerUp={() => { dr.current = false; }}
      onPointerEnter={() => setHov(true)} onPointerLeave={() => setHov(false)}
      style={{ cursor: canDrag ? "grab" : "default" }}
    >
      <circle cx={pos.x} cy={pos.y} r={18} fill="transparent" />
      {hov && canDrag && <circle cx={pos.x} cy={pos.y} r={12} fill={col} opacity={0.18} />}
      {locked && <circle cx={pos.x} cy={pos.y} r={10} fill="none" stroke={col} strokeWidth={1.5} strokeDasharray="3 2" opacity={0.7} />}
      <circle cx={pos.x} cy={pos.y} r={hov && canDrag ? 6.5 : 5} fill={col} stroke="white" strokeWidth={2} />
      <text x={pos.x} y={pos.y - 14} textAnchor="middle" fill={col} style={{ fontSize: 14, fontFamily: FFM, fontWeight: 600 }}>
        {label}{locked ? " 🔒" : ""}
      </text>
    </g>
  );
}

function SLbl({ p1, p2, l, col }) {
  const m = MID(p1, p2), o = offL(p1, p2, 18);
  return (
    <text x={m.x + o.x} y={m.y + o.y + 4} textAnchor="middle" fill={col} style={{ fontSize: 14, fontFamily: FFM, fontWeight: 600 }}>
      {l}
    </text>
  );
}

function CoreTriangle({ vertices, draggable, zoom, onVertexDrag, lockedAngles }) {
  const ref = useRef(null);
  const [A, B, C] = vertices;
  const vb = useMemo(() => vbCalc(vertices, 35), [vertices]);
  const an = calcAngles(A, B, C), da = dispAng(an.A, an.B);
  const rA = Math.abs(an.A - Math.PI / 2) < D2R(3);
  const rB = Math.abs(an.B - Math.PI / 2) < D2R(3);
  const rC = Math.abs(an.C - Math.PI / 2) < D2R(3);
  const lk = lockedAngles || { A: null, B: null, C: null };
  const eff = (zoom * ZOOM_BASE) / 100;

  return (
    <div style={{ flex: 1, background: TH.sceneBg, display: "flex", justifyContent: "center", alignItems: "center", padding: 16, overflow: "auto" }}>
      <svg
        ref={ref}
        viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
        width={Math.round(vb.w * eff)}
        height={Math.round(vb.h * eff)}
        style={{ display: "block" }}
      >
        <rect x={vb.x} y={vb.y} width={vb.w} height={vb.h} fill={TH.sceneBg} />
        <GridSvg vb={vb} col={TH.grid} />
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill={TH.fill} />

        {/* sides: a opposite A (BC), b opposite B (AC), c opposite C (AB) */}
        <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke={TH.cA} strokeWidth={1.5} />
        <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke={TH.cB} strokeWidth={1.5} />
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={TH.cC} strokeWidth={1.5} />

        {/* angle arcs */}
        {rA ? <RAMark c={A} p1={B} p2={C} col={TH.primary} /> : <path d={arcP(A, B, C, AR)} fill="none" stroke={TH.cA} strokeWidth={1.0} opacity={0.75} />}
        {rB ? <RAMark c={B} p1={A} p2={C} col={TH.primary} /> : <path d={arcP(B, A, C, AR)} fill="none" stroke={TH.cB} strokeWidth={1.0} opacity={0.75} />}
        {rC ? <RAMark c={C} p1={A} p2={B} col={TH.primary} /> : <path d={arcP(C, A, B, AR)} fill="none" stroke={TH.cC} strokeWidth={1.0} opacity={0.75} />}

        {/* angle labels */}
        {!rA && (() => { const p = aLP(A, B, C, AR); return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={TH.cA} style={{ fontSize: 12, fontFamily: FFM, fontWeight: 600 }}>{da.A.toFixed(1)}°</text>; })()}
        {!rB && (() => { const p = aLP(B, A, C, AR); return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={TH.cB} style={{ fontSize: 12, fontFamily: FFM, fontWeight: 600 }}>{da.B.toFixed(1)}°</text>; })()}
        {!rC && (() => { const p = aLP(C, A, B, AR); return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={TH.cC} style={{ fontSize: 12, fontFamily: FFM, fontWeight: 600 }}>{da.C.toFixed(1)}°</text>; })()}

        {/* side labels */}
        <SLbl p1={B} p2={C} l="a" col={TH.cA} />
        <SLbl p1={A} p2={C} l="b" col={TH.cB} />
        <SLbl p1={A} p2={B} l="c" col={TH.cC} />

        {/* vertices */}
        <VtxDot pos={A} onDrag={p => onVertexDrag(0, p)} label="A" col={TH.cA} svgRef={ref} locked={lk.A !== null} canDrag={draggable} />
        <VtxDot pos={B} onDrag={p => onVertexDrag(1, p)} label="B" col={TH.cB} svgRef={ref} locked={lk.B !== null} canDrag={draggable} />
        <VtxDot pos={C} onDrag={p => onVertexDrag(2, p)} label="C" col={TH.cC} svgRef={ref} locked={lk.C !== null} canDrag={draggable} />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   STATS BAR (under scene)
   ══════════════════════════════════════════════════ */

function StatsBar({ vs }) {
  const [A, B, C] = vs;
  const an = calcAngles(A, B, C);
  const da = dispAng(an.A, an.B);
  const u = 30;
  const sA = D(B, C) / u, sB = D(A, C) / u, sC = D(A, B) / u;
  const peri = sA + sB + sC;
  const ar = area(A, B, C) / (u * u);

  const Item = ({ label, value, color }) => (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
      <span style={{ color, fontWeight: 600, fontFamily: FFM }}>{label}</span>
      <span style={{ color: TH.tx, fontFamily: FFM }}>{value}</span>
    </span>
  );
  const Sep = () => <span style={{ color: TH.txDim }}>|</span>;

  return (
    <div style={{ background: TH.statsBg, borderTop: `1px solid ${TH.borderLt}`, padding: "10px 16px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, fontSize: 13, alignItems: "center" }}>
        <Item label="∠A" value={`${da.A.toFixed(1)}°`} color={TH.cA} />
        <Item label="∠B" value={`${da.B.toFixed(1)}°`} color={TH.cB} />
        <Item label="∠C" value={`${da.C.toFixed(1)}°`} color={TH.cC} />
        <Sep />
        <Item label="a" value={sA.toFixed(2)} color={TH.cA} />
        <Item label="b" value={sB.toFixed(2)} color={TH.cB} />
        <Item label="c" value={sC.toFixed(2)} color={TH.cC} />
        <Sep />
        <span style={{ color: TH.txMid, fontFamily: FFM }}>P {peri.toFixed(2)}</span>
        <span style={{ color: TH.txMid, fontFamily: FFM }}>Area {ar.toFixed(2)}</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   EXPLANATION BLOCKS (right panel)
   ══════════════════════════════════════════════════ */

function ExpBlock({ title, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontWeight: 600, color: TH.primary, marginBottom: 5, fontSize: 13 }}>{title}</div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: TH.tx }}>{children}</div>
    </div>
  );
}

function FormulaBox({ children }) {
  return (
    <div style={{ background: TH.primaryLt, border: `1px solid ${TH.border}`, borderRadius: 6, padding: "8px 10px", fontFamily: FFM, fontSize: 12, color: TH.primary, marginTop: 6, lineHeight: 1.6 }}>
      {children}
    </div>
  );
}

/* ── per-scenario explanation renderers ── */

function ExpClassification({ st }) {
  const { da, ds } = st;
  let byA = "Acute";
  if ([da.A, da.B, da.C].some(a => a >= 89.9 && a <= 90.1)) byA = "Right";
  else if ([da.A, da.B, da.C].some(a => a > 90)) byA = "Obtuse";
  const ss = [parseFloat(ds.a), parseFloat(ds.b), parseFloat(ds.c)];
  const eq = (a, b) => Math.abs(a - b) < 0.15;
  let byS = "Scalene";
  if (eq(ss[0], ss[1]) && eq(ss[1], ss[2])) byS = "Equilateral";
  else if (eq(ss[0], ss[1]) || eq(ss[1], ss[2]) || eq(ss[0], ss[2])) byS = "Isosceles";
  return (
    <ExpBlock title="Classification">
      By angles: <strong>{byA}</strong>. By sides: <strong>{byS}</strong>.
      <div style={{ marginTop: 6, color: TH.txMid, fontSize: 12 }}>
        {byA === "Right" ? "One 90° angle. " : byA === "Acute" ? "All angles below 90°. " : "One angle exceeds 90°. "}
        {byS === "Equilateral" ? "All sides equal." : byS === "Isosceles" ? "Two sides equal." : "All sides different."}
      </div>
    </ExpBlock>
  );
}

function ExpAngleSum({ st }) {
  const { da } = st;
  return (
    <ExpBlock title="Angle sum">
      Interior angles always sum to 180°.
      <FormulaBox>
        <span style={{ color: TH.cA }}>{da.A.toFixed(1)}°</span> + <span style={{ color: TH.cB }}>{da.B.toFixed(1)}°</span> + <span style={{ color: TH.cC }}>{da.C.toFixed(1)}°</span> = {(da.A + da.B + da.C).toFixed(1)}°
      </FormulaBox>
    </ExpBlock>
  );
}

function ExpPyth({ st }) {
  const { sides, ir } = st, u = 30;
  const a = sides.a / u, b = sides.b / u, c = sides.c / u;
  const has = ir.A || ir.B || ir.C;
  // pick the two legs (shorter) and hypotenuse (longest)
  const arr = [a, b, c].sort((x, y) => x - y);
  const [l1, l2, hyp] = arr;
  return (
    <ExpBlock title="Pythagorean theorem">
      For any right triangle, leg² + leg² = hypotenuse².
      <FormulaBox>
        {l1.toFixed(2)}² + {l2.toFixed(2)}² = {(l1 * l1 + l2 * l2).toFixed(2)}
        <br />
        {hyp.toFixed(2)}² = {(hyp * hyp).toFixed(2)}
      </FormulaBox>
      {has && <div style={{ marginTop: 6, color: TH.cC, fontSize: 12, fontWeight: 500 }}>✓ Right angle present — equality holds.</div>}
    </ExpBlock>
  );
}

function ExpTrig({ st }) {
  const { vs, ir } = st;
  let rK = ir.A ? "A" : ir.B ? "B" : ir.C ? "C" : null;
  if (!rK) return null;
  const idx = { A: 0, B: 1, C: 2 }[rK];
  const oth = [0, 1, 2].filter(i => i !== idx);
  const lbl = ["A", "B", "C"];
  const col = [TH.cA, TH.cB, TH.cC];
  const rv = vs[idx], v1 = vs[oth[0]], v2 = vs[oth[1]];
  const hyp = D(v1, v2);

  const Row = ({ name, color, opp, adj }) => (
    <div style={{ marginBottom: 8 }}>
      <div style={{ fontWeight: 600, color, fontSize: 12, marginBottom: 3 }}>∠{name}</div>
      <div style={{ fontFamily: FFM, fontSize: 12, color: TH.txMid, lineHeight: 1.7 }}>
        sin = {(opp / hyp).toFixed(3)}<br />
        cos = {(adj / hyp).toFixed(3)}<br />
        tan = {adj > 0.001 ? (opp / adj).toFixed(3) : "∞"}
      </div>
    </div>
  );

  return (
    <ExpBlock title="Trig ratios (SOH-CAH-TOA)">
      Right angle at ∠{rK}. Hypotenuse = side opposite the right angle.
      <div style={{ marginTop: 8 }}>
        <Row name={lbl[oth[0]]} color={col[oth[0]]} opp={D(rv, v2)} adj={D(rv, v1)} />
        <Row name={lbl[oth[1]]} color={col[oth[1]]} opp={D(rv, v1)} adj={D(rv, v2)} />
      </div>
    </ExpBlock>
  );
}

function ExpSpecial({ ang, st }) {
  const { da } = st;
  return (
    <ExpBlock title={`Special triangle: ${ang.join("-")}`}>
      {ang[0] === 30 && ang[1] === 60 && (
        <>
          Sides in ratio 1 : √3 : 2.
          <FormulaBox>
            sin 30° = 0.5, cos 30° ≈ 0.866<br />
            sin 60° ≈ 0.866, cos 60° = 0.5<br />
            tan 30° ≈ 0.577, tan 60° ≈ 1.732
          </FormulaBox>
        </>
      )}
      {ang[0] === 45 && ang[1] === 45 && (
        <>
          Isosceles right triangle. Sides in ratio 1 : 1 : √2.
          <FormulaBox>
            sin 45° = cos 45° ≈ 0.707<br />
            tan 45° = 1
          </FormulaBox>
        </>
      )}
      <div style={{ marginTop: 6, color: TH.txMid, fontSize: 12 }}>
        Current: ∠A={da.A}°, ∠B={da.B}°, ∠C={da.C}°
      </div>
    </ExpBlock>
  );
}

function ExpPythagoreanTriple({ name, values }) {
  return (
    <ExpBlock title={`Pythagorean triple: ${name}`}>
      Integer side lengths satisfying a² + b² = c².
      <FormulaBox>
        {values[0]}² + {values[1]}² = {values[0] * values[0]} + {values[1] * values[1]} = {values[0] * values[0] + values[1] * values[1]}
        <br />
        {values[2]}² = {values[2] * values[2]}
      </FormulaBox>
    </ExpBlock>
  );
}

function ExpLawOfSines({ st }) {
  const { da, sides } = st, u = 30;
  const a = sides.a / u, b = sides.b / u, c = sides.c / u;
  const ratioA = a / Math.sin(D2R(da.A));
  const ratioB = b / Math.sin(D2R(da.B));
  const ratioC = c / Math.sin(D2R(da.C));
  return (
    <ExpBlock title="Law of sines">
      Each side divided by the sine of its opposite angle gives the same ratio (= 2R, the circumcircle diameter).
      <FormulaBox>
        a / sin A = b / sin B = c / sin C
      </FormulaBox>
      <div style={{ marginTop: 6, fontFamily: FFM, fontSize: 12, color: TH.txMid, lineHeight: 1.7 }}>
        a / sin A = {ratioA.toFixed(3)}<br />
        b / sin B = {ratioB.toFixed(3)}<br />
        c / sin C = {ratioC.toFixed(3)}
      </div>
      <div style={{ marginTop: 6, color: TH.txMid, fontSize: 12 }}>
        Use this when you know two angles and one side, or two sides and a non-included angle.
      </div>
    </ExpBlock>
  );
}

function ExpLawOfCosines({ st }) {
  const { da, sides } = st, u = 30;
  const a = sides.a / u, b = sides.b / u, c = sides.c / u;
  // verify c² = a² + b² − 2ab·cos C
  const lhs = c * c;
  const rhs = a * a + b * b - 2 * a * b * Math.cos(D2R(da.C));
  return (
    <ExpBlock title="Law of cosines">
      Generalises Pythagoras to any triangle. Reduces to a² + b² = c² when C = 90°.
      <FormulaBox>
        c² = a² + b² − 2ab · cos C
      </FormulaBox>
      <div style={{ marginTop: 6, fontFamily: FFM, fontSize: 12, color: TH.txMid, lineHeight: 1.7 }}>
        c² = {lhs.toFixed(3)}<br />
        a² + b² − 2ab cos C = {rhs.toFixed(3)}
      </div>
      <div style={{ marginTop: 6, color: TH.txMid, fontSize: 12 }}>
        Use this when you know two sides and the included angle, or all three sides.
      </div>
    </ExpBlock>
  );
}

/* ══════════════════════════════════════════════════
   SCENARIOS
   ══════════════════════════════════════════════════ */

function rt(b, h) { return [{ x: 0, y: h }, { x: b, y: h }, { x: 0, y: 0 }]; }

const SCENARIOS = [
  // Classification
  {
    id: "equilateral", cat: "Classification", name: "Equilateral",
    verts: (() => { const s = 240, h = Math.round(s * Math.sqrt(3) / 2); return [{ x: 0, y: h }, { x: s, y: h }, { x: s / 2, y: 0 }]; })(),
    draggable: false,
    intro: "All three sides and angles are equal. The most symmetric triangle.",
    explain: st => <><ExpClassification st={st} /><ExpAngleSum st={st} /></>,
  },
  {
    id: "isosceles", cat: "Classification", name: "Isosceles",
    verts: (() => { const b = 240, h = Math.round((b / 2) * Math.tan(D2R(70))); return [{ x: 0, y: h }, { x: b, y: h }, { x: b / 2, y: 0 }]; })(),
    draggable: false,
    intro: "Two sides equal, two angles equal. The base angles (opposite the equal sides) are congruent.",
    explain: st => <><ExpClassification st={st} /><ExpAngleSum st={st} /></>,
  },
  {
    id: "acute", cat: "Classification", name: "Acute",
    verts: [{ x: 0, y: 180 }, { x: 220, y: 180 }, { x: 90, y: 30 }],
    draggable: false,
    intro: "All three angles are less than 90°. Distinct from equilateral and isosceles — all sides differ.",
    explain: st => <><ExpClassification st={st} /><ExpAngleSum st={st} /></>,
  },
  {
    id: "obtuse", cat: "Classification", name: "Obtuse",
    verts: [{ x: 0, y: 180 }, { x: 300, y: 200 }, { x: 120, y: 0 }],
    draggable: false,
    intro: "One angle exceeds 90°. The side opposite the obtuse angle is the longest.",
    explain: st => <><ExpClassification st={st} /><ExpAngleSum st={st} /></>,
  },
  {
    id: "right-scalene", cat: "Classification", name: "Right scalene",
    verts: rt(260, 160),
    draggable: false,
    intro: "Right triangle with all three sides of different lengths. Not a special-ratio triangle.",
    explain: st => <><ExpClassification st={st} /><ExpPyth st={st} /><ExpTrig st={st} /></>,
  },

  // Special right triangles
  {
    id: "right-45", cat: "Special", name: "45-45-90",
    verts: rt(220, 220),
    draggable: false,
    intro: "Isosceles right triangle. Both legs equal, hypotenuse is leg × √2.",
    explain: st => <><ExpSpecial ang={[45, 45, 90]} st={st} /><ExpTrig st={st} /><ExpPyth st={st} /></>,
  },
  {
    id: "right-30-60", cat: "Special", name: "30-60-90",
    verts: rt(260, Math.round(260 * Math.tan(D2R(30)))),
    draggable: false,
    intro: "Half of an equilateral triangle. Sides in ratio 1 : √3 : 2.",
    explain: st => <><ExpSpecial ang={[30, 60, 90]} st={st} /><ExpTrig st={st} /><ExpPyth st={st} /></>,
  },
  {
    id: "345", cat: "Special", name: "3-4-5",
    verts: rt(200, 150),
    draggable: false,
    intro: "Smallest Pythagorean triple. Sides 3, 4, 5 produce an exact right angle.",
    explain: st => <><ExpPythagoreanTriple name="3-4-5" values={[3, 4, 5]} /><ExpTrig st={st} /><ExpPyth st={st} /></>,
  },
  {
    id: "5-12-13", cat: "Special", name: "5-12-13",
    verts: rt(240, 100),
    draggable: false,
    intro: "Second-smallest Pythagorean triple. 5² + 12² = 25 + 144 = 169 = 13².",
    explain: st => <><ExpPythagoreanTriple name="5-12-13" values={[5, 12, 13]} /><ExpTrig st={st} /><ExpPyth st={st} /></>,
  },

  // Trigonometric laws
  {
    id: "law-of-sines", cat: "Trig laws", name: "Law of sines",
    verts: [{ x: 0, y: 200 }, { x: 280, y: 200 }, { x: 220, y: 30 }],
    draggable: true,
    intro: "Drag any vertex. Watch the three ratios a/sin A, b/sin B, c/sin C remain equal.",
    explain: st => <><ExpLawOfSines st={st} /><ExpAngleSum st={st} /></>,
  },
  {
    id: "law-of-cosines", cat: "Trig laws", name: "Law of cosines",
    verts: [{ x: 0, y: 200 }, { x: 260, y: 200 }, { x: 60, y: 50 }],
    draggable: true,
    intro: "Drag vertices. The relation c² = a² + b² − 2ab·cos C holds for any triangle.",
    explain: st => <><ExpLawOfCosines st={st} /><ExpAngleSum st={st} /></>,
  },

  // Free explore
  {
    id: "free", cat: "Explore", name: "Free drag",
    verts: [{ x: 0, y: 200 }, { x: 280, y: 200 }, { x: 140, y: 0 }],
    draggable: true,
    intro: "Drag any vertex to reshape the triangle. Lock angles below to constrain the shape while dragging.",
    explain: st => <><ExpClassification st={st} /><ExpAngleSum st={st} /><ExpTrig st={st} /><ExpPyth st={st} /></>,
  },
];

/* ══════════════════════════════════════════════════
   LOCK CONTROL
   ══════════════════════════════════════════════════ */

function LockCtrl({ label, color, on, val, toggle, set }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ color, fontWeight: 600, fontSize: 13, fontFamily: FFM, minWidth: 14 }}>{label}</span>
      <button
        onClick={toggle}
        style={{
          padding: "4px 10px",
          border: `1px solid ${on ? color : TH.borderMid}`,
          borderRadius: 4,
          background: on ? color : "white",
          color: on ? "white" : TH.txMid,
          fontSize: 11,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: FF,
        }}
      >
        {on ? "🔒 locked" : "lock"}
      </button>
      {on && (
        <>
          <input
            type="number" min={0.1} max={179.8} step={0.1} value={val}
            onChange={e => { const v = parseFloat(e.target.value); if (!isNaN(v) && v > 0 && v < 180) set(v); }}
            style={{
              width: 60, padding: "4px 6px",
              border: `1px solid ${color}`, borderRadius: 4,
              background: "white", color, fontSize: 12, fontFamily: FFM,
              fontWeight: 600, textAlign: "center", outline: "none",
            }}
          />
          <span style={{ color: TH.txDim, fontSize: 11 }}>°</span>
          <input
            type="range" min={1} max={178} step={0.5} value={val}
            onChange={e => set(parseFloat(e.target.value))}
            style={{ width: 80, accentColor: color }}
          />
        </>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN EXPLORER
   ══════════════════════════════════════════════════ */

export default function TriangleExplorer({ scenarios = SCENARIOS, maxWidth = 1380 }) {
  const [activeId, setActiveId] = useState(scenarios[0]?.id);
  const [dragOvr, setDragOvr] = useState(null);
  const [zm, setZm] = useState(100);
  const [vs, setVs] = useState(scenarios[0]?.verts || []);
  const [lk, setLk] = useState({ A: null, B: null, C: null });

  const sc = scenarios.find(s => s.id === activeId) || scenarios[0];
  const cats = [...new Set(scenarios.map(s => s.cat))];
  const isDrag = dragOvr !== null ? dragOvr : sc.draggable;

  /* switch scenario */
  const sw = id => {
    const next = scenarios.find(s => s.id === id) || scenarios[0];
    setActiveId(id); setVs(next.verts); setLk({ A: null, B: null, C: null });
    setZm(100); setDragOvr(null);
  };

  /* refresh */
  const refresh = () => {
    setVs(sc.verts); setLk({ A: null, B: null, C: null }); setZm(100);
  };

  /* computed state for explanations */
  const [A, B, C] = vs;
  const an = calcAngles(A, B, C);
  const da = dispAng(an.A, an.B);
  const sA = D(B, C), sB = D(A, C), sC = D(A, B);
  const u = 30, fm = v => (v / u).toFixed(2);
  const rA = Math.abs(an.A - Math.PI / 2) < D2R(3);
  const rB = Math.abs(an.B - Math.PI / 2) < D2R(3);
  const rC = Math.abs(an.C - Math.PI / 2) < D2R(3);
  const panelState = {
    vs, da,
    ds: { a: fm(sA), b: fm(sB), c: fm(sC) },
    sides: { a: sA, b: sB, c: sC },
    ir: { A: rA, B: rB, C: rC },
  };

  /* lock logic */
  const lkK = ["A", "B", "C"].filter(k => lk[k] !== null);

  const applyLk = (k, deg) => {
    setVs(p => {
      const n = [...p];
      const i = { A: 0, B: 1, C: 2 }[k];
      const nb = [0, 1, 2].filter(j => j !== i);
      n[nb[1]] = enforce(p[i], p[nb[0]], p[nb[1]], D2R(deg));
      const oL = lkK.filter(j => j !== k);
      if (oL.length === 1) {
        const oK = oL[0];
        const oI = { A: 0, B: 1, C: 2 }[oK];
        const oN = [0, 1, 2].filter(j => j !== oI);
        n[oN[1]] = enforce(n[oI], n[oN[0]], n[oN[1]], D2R(lk[oK]));
      }
      return n;
    });
  };

  const togLk = k => {
    setLk(p => {
      if (p[k] !== null) return { ...p, [k]: null };
      if (["A", "B", "C"].filter(j => p[j] !== null).length >= 2) return p;
      return { ...p, [k]: Math.round(R2D(calcAngles(vs[0], vs[1], vs[2])[k]) * 10) / 10 };
    });
  };

  const setLkV = (k, deg) => {
    const oL = ["A", "B", "C"].filter(j => j !== k && lk[j] !== null);
    if (deg + oL.reduce((s, j) => s + lk[j], 0) >= 179.9) return;
    setLk(p => ({ ...p, [k]: deg }));
    applyLk(k, deg);
  };

  /* vertex drag */
  const onVtxDrag = (i, pos) => {
    if (!isDrag) return;
    setVs(p => {
      const n = [...p]; n[i] = pos;
      for (const k of ["A", "B", "C"]) {
        const ld = lk[k]; if (ld === null) continue;
        const li = { A: 0, B: 1, C: 2 }[k];
        const nb = [0, 1, 2].filter(j => j !== li);
        if (nb.includes(i)) {
          const oi = nb.find(j => j !== i);
          n[oi] = enforce(n[li], n[i], n[oi], D2R(ld));
        }
      }
      return n;
    });
  };

  /* small button style */
  const btn = {
    padding: "5px 11px",
    borderRadius: 5,
    border: `1px solid ${TH.tbBd}`,
    background: "transparent",
    color: TH.tbTx,
    fontSize: 12,
    fontFamily: FF,
    fontWeight: 500,
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const ctrlBtn = {
    padding: "5px 11px",
    borderRadius: 5,
    border: `1px solid ${TH.borderMid}`,
    background: "white",
    color: TH.tx,
    fontSize: 12,
    fontFamily: FF,
    fontWeight: 500,
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth, margin: "0 auto", fontFamily: FF }}>
      <div style={{ border: `1px solid ${TH.primary}`, borderRadius: 8, background: TH.bg, overflow: "hidden" }}>

        {/* ═══ TOP BAR — scenarios ═══ */}
        <div style={{
          background: TH.topBarBg,
          color: TH.tbTx,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}>
          <span style={{
            fontSize: 13, fontWeight: 600, letterSpacing: 0.6,
            textTransform: "uppercase", marginRight: 6, whiteSpace: "nowrap",
          }}>
            Triangle Explorer
          </span>

          {cats.map(cat => {
            const inC = scenarios.filter(s => s.cat === cat);
            return (
              <div key={cat} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: 0.5,
                  color: TH.tbTxDim, textTransform: "uppercase",
                  marginLeft: 6, marginRight: 2, whiteSpace: "nowrap",
                }}>
                  {cat}
                </span>
                {inC.map(s => (
                  <button
                    key={s.id}
                    onClick={() => sw(s.id)}
                    style={{
                      ...btn,
                      background: activeId === s.id ? TH.tbActive : "transparent",
                      borderColor: activeId === s.id ? "white" : TH.tbBd,
                      fontWeight: activeId === s.id ? 600 : 500,
                    }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            );
          })}

          <span style={{ flex: 1 }} />

          <label style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: TH.tbTx, cursor: "pointer", whiteSpace: "nowrap" }}>
            <input type="checkbox" checked={isDrag} onChange={e => setDragOvr(e.target.checked)} style={{ accentColor: "white" }} />
            draggable
          </label>
          <button onClick={refresh} style={btn}>↻ reset</button>
        </div>

        {/* ═══ CONTROLS BAR — zoom + locks ═══ */}
        <div style={{
          background: TH.ctrlBarBg,
          padding: "8px 14px",
          borderBottom: `1px solid ${TH.border}`,
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: TH.primary, textTransform: "uppercase", letterSpacing: 0.4, marginRight: 4 }}>Zoom</span>
            <button onClick={() => setZm(z => Math.max(30, z - 10))} style={ctrlBtn}>−</button>
            <span style={{ color: TH.tx, fontSize: 12, fontFamily: FFM, fontWeight: 600, minWidth: 44, textAlign: "center" }}>{zm}%</span>
            <button onClick={() => setZm(z => Math.min(500, z + 10))} style={ctrlBtn}>+</button>
            {zm !== 100 && <button onClick={() => setZm(100)} style={ctrlBtn}>fit</button>}
          </div>

          <span style={{ width: 1, height: 22, background: TH.borderMid }} />

          <span style={{ fontSize: 11, fontWeight: 600, color: TH.primary, textTransform: "uppercase", letterSpacing: 0.4 }}>Lock angles</span>
          <LockCtrl label="A" color={TH.cA} on={lk.A !== null} val={lk.A || 0} toggle={() => togLk("A")} set={d => setLkV("A", d)} />
          <LockCtrl label="B" color={TH.cB} on={lk.B !== null} val={lk.B || 0} toggle={() => togLk("B")} set={d => setLkV("B", d)} />
          <LockCtrl label="C" color={TH.cC} on={lk.C !== null} val={lk.C || 0} toggle={() => togLk("C")} set={d => setLkV("C", d)} />
          {lkK.length >= 2 && (
            <span style={{ fontSize: 11, color: TH.txMid, fontStyle: "italic" }}>
              third angle = {(180 - lkK.reduce((s, k) => s + lk[k], 0)).toFixed(1)}°
            </span>
          )}
        </div>

        {/* ═══ BODY ═══ */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", minHeight: 480 }}>

          {/* LEFT — scene + stats */}
          <div style={{ display: "flex", flexDirection: "column", borderRight: `1px solid ${TH.border}`, minWidth: 0 }}>
            <CoreTriangle
              vertices={vs}
              draggable={isDrag}
              zoom={zm}
              onVertexDrag={onVtxDrag}
              lockedAngles={lk}
            />
            <StatsBar vs={vs} />
          </div>

          {/* RIGHT — explanations */}
          <div style={{ background: TH.panelBg, padding: 16, overflowY: "auto" }}>
            <div style={{
              fontSize: 11, fontWeight: 600, color: TH.primary,
              textTransform: "uppercase", letterSpacing: 0.5,
              paddingBottom: 8, borderBottom: `1px solid ${TH.borderMid}`,
              marginBottom: 14,
            }}>
              {sc.name} — Explanations
            </div>

            {sc.intro && (
              <div style={{
                fontSize: 13, lineHeight: 1.6, color: TH.txMid,
                paddingBottom: 12, marginBottom: 12,
                borderBottom: `1px solid ${TH.borderLt}`,
              }}>
                {sc.intro}
              </div>
            )}

            {sc.explain(panelState)}

            {isDrag && (
              <div style={{
                marginTop: 12,
                padding: "10px 12px",
                background: TH.primaryLt,
                border: `1px solid ${TH.border}`,
                borderRadius: 6,
                fontSize: 12,
                color: TH.primary,
                lineHeight: 1.5,
              }}>
                <strong>Drag</strong> any vertex to reshape. <strong>Lock</strong> up to two angles to constrain.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}