// Static SVG diagrams for the triangle-explorer page sections.
// Each frame freezes one SCENARIOS entry of TriangleExplorer in its opening
// configuration, replicating CoreTriangle's pipeline: the same vbCalc viewBox
// with pad 35, the same 30px grid, the same fill, the same side colouring
// (a = red opposite A, b = amber opposite B, c = blue opposite C), the same
// arcP / aLP angle arcs and label placement, the same 3-degree threshold that
// swaps an arc for a right-angle mark, the same SLbl offset of 18, and the
// same vertex dots with white rings.
//
// Vertices are computed with the component's own expressions (including its
// rt() helper and its Math.round calls) rather than copied as literals, so the
// frames stay in step with the scenario list.
// Consumed by getStaticProps of the page through demoUnitFrame.

const D2R = (d) => (d * Math.PI) / 180;
const R2D = (r) => (r * 180) / Math.PI;
const D = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
const MID = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

const TH = {
  sceneBg: '#f3f4f6',
  grid: 'rgba(30,64,175,0.06)',
  fill: 'rgba(30,64,175,0.05)',
  primary: '#1e40af',
  cA: '#dc2626',
  cB: '#d97706',
  cC: '#1e40af',
};
const FFM = '"IBM Plex Mono", monospace';
const AR = 28;

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

function vbCalc(vs, pad) {
  const xs = vs.map((v) => v.x), ys = vs.map((v) => v.y);
  const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
  return { x, y, w: Math.max(...xs) + pad - x, h: Math.max(...ys) + pad - y };
}

function arcP(c, p1, p2, r) {
  let s = Math.atan2(p1.y - c.y, p1.x - c.x), e = Math.atan2(p2.y - c.y, p2.x - c.x);
  const d = e - s;
  if (d > Math.PI) s += 2 * Math.PI;
  if (d < -Math.PI) e += 2 * Math.PI;
  if (e < s) { const t = s; s = e; e = t; }
  return `M ${(c.x + r * Math.cos(s)).toFixed(2)} ${(c.y + r * Math.sin(s)).toFixed(2)} A ${r} ${r} 0 ${e - s > Math.PI ? 1 : 0} 1 ${(c.x + r * Math.cos(e)).toFixed(2)} ${(c.y + r * Math.sin(e)).toFixed(2)}`;
}

// Angle-label placement: the component's aLP, bisector direction at radius r.
function aLP(c, p1, p2, r) {
  const a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
  let m = (a1 + a2) / 2;
  if (Math.abs(a1 - a2) > Math.PI) m += Math.PI;
  return { x: c.x + (r + 16) * Math.cos(m), y: c.y + (r + 16) * Math.sin(m) };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const txt = (t, x, y, color, size = 12, anchor = 'middle', weight = 600) =>
  `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="${anchor}" dominant-baseline="middle" fill="${color}" font-size="${size}" font-family='${FFM}' font-weight="${weight}">${esc(t)}</text>`;

function grid(vb) {
  const sp = 30;
  let out = '';
  const sx = Math.floor(vb.x / sp) * sp, sy = Math.floor(vb.y / sp) * sp;
  for (let x = sx; x <= vb.x + vb.w; x += sp) out += `<line x1="${x}" y1="${vb.y}" x2="${x}" y2="${vb.y + vb.h}" stroke="${TH.grid}" stroke-width="0.5"/>`;
  for (let y = sy; y <= vb.y + vb.h; y += sp) out += `<line x1="${vb.x}" y1="${y}" x2="${vb.x + vb.w}" y2="${y}" stroke="${TH.grid}" stroke-width="0.5"/>`;
  return out;
}

function raMark(c, p1, p2, col) {
  const sz = 14;
  const a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
  const x1 = c.x + sz * Math.cos(a1), y1 = c.y + sz * Math.sin(a1);
  const x2 = x1 + sz * Math.cos(a2), y2 = y1 + sz * Math.sin(a2);
  const x3 = c.x + sz * Math.cos(a2), y3 = c.y + sz * Math.sin(a2);
  return `<polyline points="${x1.toFixed(2)},${y1.toFixed(2)} ${x2.toFixed(2)},${y2.toFixed(2)} ${x3.toFixed(2)},${y3.toFixed(2)}" fill="none" stroke="${col}" stroke-width="1.5" opacity="0.85"/>`;
}

function sideLabel(p1, p2, l, col) {
  const m = MID(p1, p2), o = offL(p1, p2, 18);
  return txt(l, m.x + o.x, m.y + o.y + 4, col, 14);
}

function vertexDot(p, label, col) {
  return `<circle cx="${p.x}" cy="${p.y}" r="5" fill="${col}" stroke="white" stroke-width="2"/>` +
    txt(label, p.x, p.y - 14, col, 14);
}

// One frozen scenario frame.
function frame(verts) {
  const [A, B, C] = verts;
  const vb = vbCalc(verts, 35);
  const an = calcAngles(A, B, C), da = dispAng(an.A, an.B);
  const rA = Math.abs(an.A - Math.PI / 2) < D2R(3);
  const rB = Math.abs(an.B - Math.PI / 2) < D2R(3);
  const rC = Math.abs(an.C - Math.PI / 2) < D2R(3);

  let s = `<rect x="${vb.x}" y="${vb.y}" width="${vb.w}" height="${vb.h}" fill="${TH.sceneBg}"/>`;
  s += grid(vb);
  s += `<polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="${TH.fill}"/>`;
  s += `<line x1="${B.x}" y1="${B.y}" x2="${C.x}" y2="${C.y}" stroke="${TH.cA}" stroke-width="1.5"/>`;
  s += `<line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="${TH.cB}" stroke-width="1.5"/>`;
  s += `<line x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" stroke="${TH.cC}" stroke-width="1.5"/>`;

  s += rA ? raMark(A, B, C, TH.primary) : `<path d="${arcP(A, B, C, AR)}" fill="none" stroke="${TH.cA}" stroke-width="1" opacity="0.75"/>`;
  s += rB ? raMark(B, A, C, TH.primary) : `<path d="${arcP(B, A, C, AR)}" fill="none" stroke="${TH.cB}" stroke-width="1" opacity="0.75"/>`;
  s += rC ? raMark(C, A, B, TH.primary) : `<path d="${arcP(C, A, B, AR)}" fill="none" stroke="${TH.cC}" stroke-width="1" opacity="0.75"/>`;

  if (!rA) { const p = aLP(A, B, C, AR); s += txt(`${da.A.toFixed(1)}°`, p.x, p.y, TH.cA); }
  if (!rB) { const p = aLP(B, A, C, AR); s += txt(`${da.B.toFixed(1)}°`, p.x, p.y, TH.cB); }
  if (!rC) { const p = aLP(C, A, B, AR); s += txt(`${da.C.toFixed(1)}°`, p.x, p.y, TH.cC); }

  s += sideLabel(B, C, 'a', TH.cA);
  s += sideLabel(A, C, 'b', TH.cB);
  s += sideLabel(A, B, 'c', TH.cC);

  s += vertexDot(A, 'A', TH.cA) + vertexDot(B, 'B', TH.cB) + vertexDot(C, 'C', TH.cC);

  // Render at a fixed display width; the viewBox keeps the component's aspect.
  const w = 340, h = Math.round((vb.h / vb.w) * w);
  return `<svg width="${w}" height="${h}" viewBox="${vb.x} ${vb.y} ${vb.w} ${vb.h}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #cbd5e1;background:${TH.sceneBg};border-radius:12px;max-width:100%;display:block;margin:12px auto">${s}</svg>`;
}

// Scenario vertices, using the component's own expressions.
const rt = (b, h) => [{ x: 0, y: h }, { x: b, y: h }, { x: 0, y: 0 }];
const equilateral = (() => { const s = 240, h = Math.round(s * Math.sqrt(3) / 2); return [{ x: 0, y: h }, { x: s, y: h }, { x: s / 2, y: 0 }]; })();
const isosceles = (() => { const b = 240, h = Math.round((b / 2) * Math.tan(D2R(70))); return [{ x: 0, y: h }, { x: b, y: h }, { x: b / 2, y: 0 }]; })();

const triangleDiagrams = {
  equilateral: frame(equilateral),
  isosceles: frame(isosceles),
  acute: frame([{ x: 0, y: 180 }, { x: 220, y: 180 }, { x: 90, y: 30 }]),
  obtuse: frame([{ x: 0, y: 180 }, { x: 300, y: 200 }, { x: 120, y: 0 }]),
  'right-scalene': frame(rt(260, 160)),
  'right-45': frame(rt(220, 220)),
  'right-30-60': frame(rt(260, Math.round(260 * Math.tan(D2R(30))))),
  '345': frame(rt(200, 150)),
  '5-12-13': frame(rt(240, 100)),
  'law-of-sines': frame([{ x: 0, y: 200 }, { x: 280, y: 200 }, { x: 220, y: 30 }]),
  'law-of-cosines': frame([{ x: 0, y: 200 }, { x: 260, y: 200 }, { x: 60, y: 50 }]),
  free: frame([{ x: 0, y: 200 }, { x: 280, y: 200 }, { x: 140, y: 0 }]),
};

export default triangleDiagrams;
