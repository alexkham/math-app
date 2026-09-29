// triangleLabel.v2 - oblique-triangle constructions.
//
// Second file, not an edit to triangleLabel.js: rule 11 forbids editing a
// shipped renderer to gain a scene type, and triangleLabel was integrated on
// the right-triangle page before these were needed.
//
//   triangleLabel.js     pair / ratios / sequence / parallel   right-triangle
//   triangleLabel.v2.js  swing / altitude                      sines-cosines-law
//
// Geometry conventions are the same ones, copied from triangleDiagrams.js:
// 30px grid, side-label offset 18, angle radius 28, right-angle mark 14. Side
// colouring is that module's local scheme - a red, b amber, c blue - because
// the colour says which angle a side faces.

const C = {
  a: '#DC2626', b: '#D97706', c: '#1E40AF',
  grid: '#F3F4F6', fill: '#4F46E5', fillOpacity: 0.07,

  primary: '#4F46E5', result: '#B45309', secondary: '#16A34A', negation: '#DC2626',
  text: '#1E3A5F', muted: '#64748B', mutedLight: '#94A3B8',
  hairline: '#CBD5E1', surface: '#F8FAFC',

  wSide: 1.8, wArc: 1.7, wRa: 1.2, wBase: 1.4, wSwing: 1.1, wHeight: 1.2, wGrid: 0.5,
  fsSide: 14, fsAngle: 13, fsTitle: 12, fsNote: 12, fsSmall: 12,
};

const SP = 30, AR = 28, RA = 14, SLO = 18;
const FONT = 'sans-serif';
const D2R = (d) => (d * Math.PI) / 180;
const f2 = (n) => (+n).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const MID = (p, q) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f2(x)}" y="${f2(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}
function seg(p, q, col, w, dash) {
  return `<line x1="${f2(p.x)}" y1="${f2(p.y)}" x2="${f2(q.x)}" y2="${f2(q.y)}" stroke="${col}" ` +
    `stroke-width="${w}"` + (dash ? ` stroke-dasharray="${dash}"` : '') + ` stroke-linecap="round"/>`;
}
function offL(p1, p2, n) {
  const dx = p2.x - p1.x, dy = p2.y - p1.y, l = Math.hypot(dx, dy);
  return l === 0 ? { x: 0, y: 0 } : { x: (-dy / l) * n, y: (dx / l) * n };
}
function sideLabel(p1, p2, t, col, flip, P) {
  const m = MID(p1, p2), o = offL(p1, p2, flip ? -SLO : SLO);
  return txt(t, m.x + o.x, m.y + o.y + 4, col, P.fsSide);
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
function grid(vb, P) {
  let out = '';
  const sx = Math.floor(vb.x / SP) * SP, sy = Math.floor(vb.y / SP) * SP;
  for (let x = sx; x <= vb.x + vb.w; x += SP) out += `<line x1="${x}" y1="${f2(vb.y)}" x2="${x}" y2="${f2(vb.y + vb.h)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`;
  for (let y = sy; y <= vb.y + vb.h; y += SP) out += `<line x1="${f2(vb.x)}" y1="${y}" x2="${f2(vb.x + vb.w)}" y2="${y}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`;
  return out;
}
function rightAngle(corner, dx, dy, P) {
  return `<polyline points="${f2(corner.x + dx)},${f2(corner.y)} ${f2(corner.x + dx)},${f2(corner.y + dy)} ` +
    `${f2(corner.x)},${f2(corner.y + dy)}" fill="none" stroke="${P.muted}" stroke-width="${P.wRa}"/>`;
}

// ---------------------------------------------------------------- swing
// Side a pivots about the far end of b and lands on the base ray - twice,
// once, or not at all. b and the angle are identical in every panel; only the
// length of the swung side changes, or the comparison is not one.
function swingPanel(p, spec, P) {
  const A = { x: 34, y: 196 };
  const ang = D2R(spec.angleDeg === undefined ? 35 : spec.angleDeg);
  const bLen = spec.bLength || 150;
  const Cv = { x: A.x + bLen * Math.cos(ang), y: A.y - bLen * Math.sin(ang) };
  const h = bLen * Math.sin(ang);
  const foot = { x: Cv.x, y: A.y };
  const vb = { x: 0, y: 26, w: spec.panelWidth || 272, h: spec.panelHeight || 208 };
  const o = [grid(vb, P)];

  o.push(seg(A, { x: vb.w - 10, y: A.y }, P.mutedLight, P.wBase));
  o.push(seg(Cv, foot, P.secondary, P.wHeight, '4 3'));
  o.push(txt(spec.heightLabel || 'h', Cv.x + 9, (Cv.y + foot.y) / 2 + 4, P.secondary, P.fsSmall, 'start'));
  o.push(seg(A, Cv, P.b, P.wSide));
  o.push(sideLabel(A, Cv, spec.fixedLabel || 'b', P.b, true, P));

  // the swing, as an arc across the base only. A full circle at this radius
  // overflows the panel and bleeds into the next one.
  const r = p.length;
  const t0 = D2R(28), t1 = D2R(152);
  const s0 = { x: Cv.x + r * Math.cos(t0), y: Cv.y + r * Math.sin(t0) };
  const s1 = { x: Cv.x + r * Math.cos(t1), y: Cv.y + r * Math.sin(t1) };
  o.push(`<path d="M ${f2(s0.x)} ${f2(s0.y)} A ${f2(r)} ${f2(r)} 0 0 1 ${f2(s1.x)} ${f2(s1.y)}" ` +
    `fill="none" stroke="${P.a}" stroke-width="${P.wSwing}" stroke-dasharray="4 4" opacity="0.7"/>`);

  // Tangency is decided from the computed height, never from a typed length.
  // A rounded literal missed its own test and drew no triangle at all.
  const disc = r * r - h * h;
  const hits = [];
  if (disc > 1) {
    const dx = Math.sqrt(disc);
    [Cv.x - dx, Cv.x + dx].forEach((x) => { if (x > A.x + 4) hits.push({ x, y: A.y }); });
  } else if (disc > -1) {
    hits.push({ x: Cv.x, y: A.y });
    o.push(rightAngle(foot, 13, -13, P));
  }
  hits.forEach((pt) => {
    o.push(seg(Cv, pt, P.a, P.wSide));
    o.push(`<circle cx="${f2(pt.x)}" cy="${f2(pt.y)}" r="4.5" fill="${P.a}" stroke="${P.surface}" stroke-width="1.2"/>`);
  });
  if (hits.length) {
    o.push(sideLabel(Cv, hits[hits.length - 1], spec.swungLabel || 'a', P.a, hits.length === 1, P));
  }

  o.push(`<path d="${arcP(A, { x: A.x + 60, y: A.y }, Cv, AR)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
  const lp = aLP(A, { x: A.x + 60, y: A.y }, Cv, AR);
  o.push(txt(spec.angleLabel || 'A', lp.x, lp.y + 4, P.result, P.fsAngle));

  const tone = P[p.tone] || p.tone || P.text;
  o.push(txt(p.title, vb.w / 2, vb.y + 14, tone, P.fsTitle));
  o.push(txt(p.note, vb.w / 2, 226, tone, P.fsTitle));
  return { vb, body: o.join('') };
}

function swing(spec, P) {
  const panels = (spec.panels || []).map((p) => swingPanel(p, spec, P));
  const gap = spec.gap === undefined ? 12 : spec.gap;
  const w = panels.reduce((s, p) => s + p.vb.w, 0) + gap * (panels.length - 1);
  const h = panels[0].vb.h;
  let x = 0;
  const gs = panels.map((p) => {
    const g = `<g transform="translate(${f2(x - p.vb.x)},${f2(-p.vb.y)})">${p.body}</g>`;
    x += p.vb.w + gap;
    return g;
  });
  return { w, h, body: gs.join('') };
}

// -------------------------------------------------------------- altitude
function altitude(spec, P) {
  const w = spec.width || 500, h = spec.height || 268;
  const Cv = { x: spec.cx === undefined ? 60 : spec.cx, y: spec.cy === undefined ? 196 : spec.cy };
  const ang = D2R(spec.angleDeg === undefined ? 52 : spec.angleDeg);
  const bLen = spec.bLength || 170, aLen = spec.aLength || 300;
  const B = { x: Cv.x + aLen, y: Cv.y };
  const A = { x: Cv.x + bLen * Math.cos(ang), y: Cv.y - bLen * Math.sin(ang) };
  const foot = { x: A.x, y: Cv.y };
  const o = [grid({ x: 0, y: 0, w, h }, P)];

  o.push(`<polygon points="${f2(Cv.x)},${f2(Cv.y)} ${f2(B.x)},${f2(B.y)} ${f2(A.x)},${f2(A.y)}" ` +
    `fill="${P.fill}" fill-opacity="${P.fillOpacity}"/>`);
  o.push(seg(Cv, B, P.c, P.wSide));
  o.push(seg(Cv, A, P.b, P.wSide));
  o.push(seg(A, B, P.a, P.wSide));

  o.push(seg(A, foot, P.result, P.wArc, '5 4'));
  o.push(rightAngle(foot, 14, -14, P));
  o.push(txt(spec.heightLabel || 'h', A.x + 10, (A.y + foot.y) / 2 + 4, P.result, P.fsSide, 'start'));

  o.push(`<path d="${arcP(Cv, B, A, AR)}" fill="none" stroke="${P.result}" stroke-width="${P.wArc}"/>`);
  const lp = aLP(Cv, B, A, AR);
  o.push(txt(spec.angleLabel || 'C', lp.x, lp.y + 4, P.result, P.fsSide));
  o.push(sideLabel(Cv, A, spec.bLabel || 'b', P.b, true, P));
  o.push(sideLabel(Cv, B, spec.aLabel || 'a', P.c, false, P));
  if (spec.note) o.push(txt(spec.note, w / 2, h - 14, P.text, 15));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { swing, altitude };

export default function renderTriangleLabelV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `triangleLabel.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderTriangleLabelV2, C as triangleLabelV2Defaults };
