// triangleLabel - labelled right triangles and the things that happen to them.
//
// renderTriangleLabel(spec) -> SVG string. Docs: triangleLabel.md beside it.
//
// Geometry conventions are lifted from
// app/components/trigonometry/triangle/triangleDiagrams.js so an authored
// triangle and a harvested one sit side by side without reading as two
// systems: vbCalc pad 35, 30px grid, side-label offset 18, angle radius 28,
// right-angle mark 14, and the 3-degree threshold that swaps an angle arc for
// a right-angle mark.
//
// Side colouring is that module's local scheme, NOT the subject census:
// a = red opposite A, b = amber opposite B, c = blue opposite C. The colour
// says which angle a side faces, and it has to keep saying that here.
//
// Scene types (spec.kind):
//   pair      the same triangle twice, a different acute angle chosen
//   ratios    one triangle, each ratio connected to the two sides it relates
//   sequence  three panels, one leg driven to zero
//   parallel  two horizontals and a transversal - elevation and depression

const C = {
  // the triangle module's per-side scheme
  a: '#DC2626', b: '#D97706', c: '#1E40AF',
  grid: '#F3F4F6', fill: '#4F46E5', fillOpacity: 0.07,

  // the subject census, for everything that is not a side
  primary: '#4F46E5', result: '#B45309', negation: '#DC2626',
  text: '#1E3A5F', muted: '#64748B', mutedLight: '#94A3B8',
  hairline: '#CBD5E1', surface: '#F8FAFC',

  wSide: 1.8, wArc: 1.7, wRa: 1.2, wRef: 1, wSight: 2.2, wGrid: 0.5,
  fsSide: 14, fsAngle: 13, fsTitle: 13, fsNote: 11, weightBold: 600,
};

const PAD = 35;        // vbCalc pad
const LABEL_PAD = 34;  // extra, because side labels live outside the triangle
const SP = 30;         // grid spacing
const AR = 28;         // angle radius
const RA = 14;         // right-angle mark
const SLO = 18;        // side-label offset
const FONT = 'sans-serif';

const f2 = (n) => (+n).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const MID = (p, q) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f2(x)}" y="${f2(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

function vbCalc(vs, pad) {
  const xs = vs.map((v) => v.x), ys = vs.map((v) => v.y);
  const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
  return { x, y, w: Math.max(...xs) + pad - x, h: Math.max(...ys) + pad - y };
}

function grid(vb, P) {
  let out = '';
  const sx = Math.floor(vb.x / SP) * SP, sy = Math.floor(vb.y / SP) * SP;
  for (let x = sx; x <= vb.x + vb.w; x += SP) {
    out += `<line x1="${x}" y1="${f2(vb.y)}" x2="${x}" y2="${f2(vb.y + vb.h)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`;
  }
  for (let y = sy; y <= vb.y + vb.h; y += SP) {
    out += `<line x1="${f2(vb.x)}" y1="${y}" x2="${f2(vb.x + vb.w)}" y2="${y}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`;
  }
  return out;
}

function offL(p1, p2, n) {
  const dx = p2.x - p1.x, dy = p2.y - p1.y, l = Math.hypot(dx, dy);
  return l === 0 ? { x: 0, y: 0 } : { x: (-dy / l) * n, y: (dx / l) * n };
}

function sideLabel(p1, p2, text, col, flip, P) {
  const m = MID(p1, p2), o = offL(p1, p2, flip ? -SLO : SLO);
  return txt(text, m.x + o.x, m.y + o.y + 4, col, P.fsSide);
}

function arcP(c, p1, p2, r) {
  let s = Math.atan2(p1.y - c.y, p1.x - c.x), e = Math.atan2(p2.y - c.y, p2.x - c.x);
  const d = e - s;
  if (d > Math.PI) s += 2 * Math.PI;
  if (d < -Math.PI) e += 2 * Math.PI;
  if (e < s) { const t = s; s = e; e = t; }
  return `M ${f2(c.x + r * Math.cos(s))} ${f2(c.y + r * Math.sin(s))} A ${r} ${r} 0 ${e - s > Math.PI ? 1 : 0} 1 ${f2(c.x + r * Math.cos(e))} ${f2(c.y + r * Math.sin(e))}`;
}

function aLP(c, p1, p2, r) {
  const a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
  let m = (a1 + a2) / 2;
  if (Math.abs(a1 - a2) > Math.PI) m += Math.PI;
  return { x: c.x + (r + 16) * Math.cos(m), y: c.y + (r + 16) * Math.sin(m) };
}

function raMark(c, p1, p2, col, P) {
  const a1 = Math.atan2(p1.y - c.y, p1.x - c.x), a2 = Math.atan2(p2.y - c.y, p2.x - c.x);
  const x1 = c.x + RA * Math.cos(a1), y1 = c.y + RA * Math.sin(a1);
  const x2 = x1 + RA * Math.cos(a2), y2 = y1 + RA * Math.sin(a2);
  const x3 = c.x + RA * Math.cos(a2), y3 = c.y + RA * Math.sin(a2);
  return `<polyline points="${f2(x1)},${f2(y1)} ${f2(x2)},${f2(y2)} ${f2(x3)},${f2(y3)}" fill="none" stroke="${col}" stroke-width="${P.wRa}"/>`;
}

// A right triangle with the right angle at A. Sides keep the module's colours
// unless a scene overrides one to mark it dying.
function triangle(A, B, C_, P, over) {
  const o = over || {};
  return `<polygon points="${f2(A.x)},${f2(A.y)} ${f2(B.x)},${f2(B.y)} ${f2(C_.x)},${f2(C_.y)}" fill="${P.fill}" fill-opacity="${P.fillOpacity}"/>` +
    `<line x1="${f2(B.x)}" y1="${f2(B.y)}" x2="${f2(C_.x)}" y2="${f2(C_.y)}" stroke="${o.a || P.a}" stroke-width="${P.wSide}" stroke-linecap="round"/>` +
    `<line x1="${f2(A.x)}" y1="${f2(A.y)}" x2="${f2(C_.x)}" y2="${f2(C_.y)}" stroke="${o.b || P.b}" stroke-width="${P.wSide}" stroke-linecap="round"/>` +
    `<line x1="${f2(A.x)}" y1="${f2(A.y)}" x2="${f2(B.x)}" y2="${f2(B.y)}" stroke="${o.c || P.c}" stroke-width="${P.wSide}" stroke-linecap="round"/>`;
}

// --------------------------------------------------------------------- pair
function pairPanel(atLowerRight, spec, P) {
  const A = { x: 40, y: 200 }, B = { x: 240, y: 200 }, Cv = { x: 40, y: 70 };
  const vb = vbCalc([A, B, Cv], PAD + LABEL_PAD);
  const o = [triangle(A, B, Cv, P), raMark(A, B, Cv, P.muted, P)];
  const v = atLowerRight ? B : Cv;
  const other = atLowerRight ? Cv : B;
  o.push(`<path d="${arcP(v, A, other, AR)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
  const lp = aLP(v, A, other, AR);
  o.push(txt(spec.angleLabel || 'θ', lp.x, lp.y + 4, P.result, 15));
  // the names swap with the choice; the side colours do not
  const opp = atLowerRight ? [A, Cv] : [A, B];
  const adj = atLowerRight ? [A, B] : [A, Cv];
  const oppCol = atLowerRight ? P.b : P.c;
  const adjCol = atLowerRight ? P.c : P.b;
  o.push(sideLabel(opp[0], opp[1], 'opposite', oppCol, atLowerRight, P));
  o.push(sideLabel(adj[0], adj[1], 'adjacent', adjCol, !atLowerRight, P));
  o.push(sideLabel(B, Cv, spec.hypLabel || 'hypotenuse', P.a, true, P));
  if (spec.markShared) {
    // two ticks across the hypotenuse: the classic "this side is the same one"
    const m = MID(B, Cv), d = offL(B, Cv, 7);
    [-5, 5].forEach((t) => {
      const px = m.x + (Cv.x - B.x) / Math.hypot(Cv.x - B.x, Cv.y - B.y) * t;
      const py = m.y + (Cv.y - B.y) / Math.hypot(Cv.x - B.x, Cv.y - B.y) * t;
      o.push(`<line x1="${f2(px - d.x)}" y1="${f2(py - d.y)}" x2="${f2(px + d.x)}" y2="${f2(py + d.y)}" stroke="${P.a}" stroke-width="${P.wRa}"/>`);
    });
  }
  o.push(txt(atLowerRight ? spec.leftTitle : spec.rightTitle, vb.x + vb.w / 2, vb.y + 18, P.text, P.fsTitle));
  const eq = atLowerRight ? spec.leftEquation : spec.rightEquation;
  if (eq) o.push(txt(eq, vb.x + vb.w / 2, vb.y + vb.h - 10, P.result, 14));
  return { vb, body: o.join('') };
}

function pair(spec, P) {
  const L = pairPanel(true, spec, P), R = pairPanel(false, spec, P);
  const gap = spec.gap === undefined ? 26 : spec.gap;
  const w = L.vb.w + gap + R.vb.w, h = Math.max(L.vb.h, R.vb.h);
  const body =
    `<g transform="translate(${f2(-L.vb.x)},${f2(-L.vb.y)})">${grid(L.vb, P)}${L.body}</g>` +
    `<g transform="translate(${f2(L.vb.w + gap - R.vb.x)},${f2(-R.vb.y)})">${grid(R.vb, P)}${R.body}</g>`;
  return { w, h, body };
}

// ------------------------------------------------------------------- ratios
// One triangle per ratio, with only the two sides that ratio uses drawn at
// full strength and the third ghosted. The first build ran leaders from three
// formulas to three side midpoints; six dashed lines crossed the triangle and
// each other and the figure read as a web.
function ratioPanel(row, P) {
  const A = { x: 34, y: 150 }, B = { x: 174, y: 150 }, Cv = { x: 34, y: 60 };
  const vb = { x: 0, y: 26, w: 208, h: 168 };
  const lit = (name, col) => (row.sides.indexOf(name) >= 0 ? col : P.hairline);
  const o = [triangle(A, B, Cv, P, {
    a: lit('hyp', P.a), b: lit('opp', P.b), c: lit('adj', P.c),
  })];
  o.push(raMark(A, B, Cv, P.hairline, P));
  o.push(`<path d="${arcP(B, A, Cv, 22)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
  const lp = aLP(B, A, Cv, 22);
  o.push(txt('θ', lp.x, lp.y + 4, P.result, 13));
  row.sides.forEach((s) => {
    const seg = s === 'opp' ? [A, Cv] : s === 'adj' ? [A, B] : [B, Cv];
    const col = s === 'opp' ? P.b : s === 'adj' ? P.c : P.a;
    o.push(sideLabel(seg[0], seg[1], s, col, s === 'hyp', P));
  });
  o.push(txt(row.label, vb.w / 2, vb.y + 12, row.col || P.text, 15));
  return { vb, body: o.join('') };
}

function ratios(spec, P) {
  const rows = spec.rows || [
    { label: 'sin θ = opp / hyp', sides: ['opp', 'hyp'], col: P.b },
    { label: 'cos θ = adj / hyp', sides: ['adj', 'hyp'], col: P.c },
    { label: 'tan θ = opp / adj', sides: ['opp', 'adj'], col: P.result },
  ];
  const panels = rows.map((r) => ratioPanel(r, P));
  const gap = spec.gap === undefined ? 12 : spec.gap;
  const w = panels.reduce((a, p) => a + p.vb.w, 0) + gap * (panels.length - 1);
  const h = panels[0].vb.h;
  let x = 0;
  const gs = panels.map((p) => {
    const g = `<g transform="translate(${f2(x - p.vb.x)},${f2(-p.vb.y)})">${grid(p.vb, P)}${p.body}</g>`;
    x += p.vb.w + gap;
    return g;
  });
  return { w, h, body: gs.join('') };
}

// ----------------------------------------------------------------- sequence
// Drive a LEG to zero, never the angle: tan(87 deg) x 200 is 3800px and leaves
// the panel entirely, while the claim is only that a side vanishes.
function seqPanel(p, P) {
  const A = { x: 40, y: 200 }, B = { x: 40 + p.adj, y: 200 }, Cv = { x: 40, y: 200 - p.opp };
  const theta = Math.round(Math.atan2(p.opp, p.adj) * 180 / Math.PI);
  const vb = { x: 5, y: 30, w: 270, h: 225 };
  const over = p.dying === 'opp' ? { a: P.negation, c: P.negation }
             : p.dying === 'adj' ? { a: P.negation, c: P.negation } : null;
  const o = [triangle(A, B, Cv, P, p.dying ? { c: P.negation } : null)];
  if (theta > 4 && theta < 86) o.push(raMark(A, B, Cv, P.muted, P));
  if (theta > 3) {
    o.push(`<path d="${arcP(B, A, Cv, AR)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
    const lp = aLP(B, A, Cv, AR);
    o.push(txt(theta + '°', lp.x, lp.y + 4, P.result, P.fsAngle));
  }
  o.push(txt(p.title, 140, vb.y + 14, p.dying ? P.negation : P.text, 12));
  o.push(txt(p.note, 140, 236, p.dying ? P.negation : P.muted, p.dying ? 12 : P.fsNote, 'middle', p.dying ? 600 : 400));
  return { vb, body: o.join('') };
}

function sequence(spec, P) {
  const panels = (spec.panels || []).map((p) => seqPanel(p, P));
  const gap = spec.gap === undefined ? 14 : spec.gap;
  const w = panels.reduce((a, p) => a + p.vb.w, 0) + gap * (panels.length - 1);
  const h = panels[0].vb.h;
  let x = 0;
  const gs = panels.map((p) => {
    const g = `<g transform="translate(${f2(x - p.vb.x)},${f2(-p.vb.y)})">${grid(p.vb, P)}${p.body}</g>`;
    x += p.vb.w + gap;
    return g;
  });
  return { w, h, body: gs.join('') };
}

// ----------------------------------------------------------------- parallel
function parallel(spec, P) {
  const w = spec.width || 470, h = spec.height || 262;
  const Ox = 66, Oy = 182, Tx = 330, Ty = 58;
  const O = { x: Ox, y: Oy }, T = { x: Tx, y: Ty };
  const o = [grid({ x: 0, y: 0, w, h }, P)];
  [Oy, Ty].forEach((y) => {
    o.push(`<line x1="30" y1="${y}" x2="${w - 30}" y2="${y}" stroke="${P.mutedLight}" stroke-width="${P.wRef}" stroke-dasharray="5 4"/>`);
    o.push(txt('horizontal', 40, y - 8, P.muted, P.fsNote, 'start'));
  });
  o.push(`<line x1="${Ox}" y1="${Oy}" x2="${Tx}" y2="${Ty}" stroke="${P.primary}" stroke-width="${P.wSight}" stroke-linecap="round"/>`);
  o.push(txt(spec.sightLabel || 'line of sight', (Ox + Tx) / 2, (Oy + Ty) / 2 - 10, P.primary, 12));
  o.push(`<path d="${arcP(O, { x: Ox + 90, y: Oy }, T, 34)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
  o.push(`<path d="${arcP(T, { x: Tx - 90, y: Ty }, O, 34)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
  const l1 = aLP(O, { x: Ox + 90, y: Oy }, T, 34), l2 = aLP(T, { x: Tx - 90, y: Ty }, O, 34);
  o.push(txt(spec.lowerLabel || 'elevation', l1.x + 14, l1.y + 4, P.result, 12, 'start'));
  o.push(txt(spec.upperLabel || 'depression', l2.x - 14, l2.y + 4, P.result, 12, 'end'));
  [[O, spec.lowerPoint || 'observer', 24], [T, spec.upperPoint || 'target', -12]].forEach(([p, t, dy], i) => {
    o.push(`<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="${P.primary}" stroke="${P.surface}" stroke-width="1.2"/>`);
    o.push(txt(t, p.x + (i ? 6 : 0), p.y + dy, P.muted, P.fsNote, i ? 'start' : 'middle'));
  });
  if (spec.note) o.push(txt(spec.note, w / 2, h - 16, P.text, 12));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { pair, ratios, sequence, parallel };

export default function renderTriangleLabel(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `triangleLabel: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f2(w)} ${f2(h)}" width="${f2(w)}" height="${f2(h)}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderTriangleLabel, C as triangleLabelDefaults };
