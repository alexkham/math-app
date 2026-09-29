// circleArc.v2 - the unit circle as a coordinate system.
//
// Second file, not an edit to circleArc.js: rule 11 forbids editing a shipped
// renderer to gain a scene type, and circleArc was integrated on the
// degrees-radians and inequalities pages before these were needed.
//
//   circleArc.js     arc / sector / cut / compare      degrees-radians, inequalities
//   circleArc.v2.js  inscribed / axisPoints            unit-circle
//
// renderCircleArcV2(spec) -> SVG string. Docs: circleArc.v2.md beside it.

const C = {
  // triangle sides keep the triangleDiagrams scheme: the radius is the
  // hypotenuse (a, red), y the vertical leg (b, amber), x the horizontal (c, blue)
  a: '#DC2626', b: '#D97706', c: '#1E40AF',
  primary: '#4F46E5', result: '#B45309', negation: '#DC2626',
  text: '#1E3A5F', muted: '#64748B', mutedLight: '#94A3B8',
  hairline: '#CBD5E1', hairlineLight: '#E2E8F0', surface: '#F8FAFC',
  fill: '#4F46E5', fillOpacity: 0.07,

  wCircle: 1.2, wAxis: 1, wSide: 2, wRa: 1.1, wDivider: 1,
  fsLabel: 14, fsTitle: 12, fsRatio: 14, fsPoint: 13, fsZero: 12, fsDead: 11, fsNote: 12,
};

const FONT = 'sans-serif';
const f2 = (n) => (+n).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f2(x)}" y="${f2(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}
function seg(x1, y1, x2, y2, col, w) {
  return `<line x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
}
function dot(x, y, col, r, P) {
  return `<circle cx="${f2(x)}" cy="${f2(y)}" r="${r}" fill="${col}" stroke="${P.surface}" stroke-width="1.2"/>`;
}
function axes(cx, cy, reach, P) {
  return seg(cx - reach, cy, cx + reach, cy, P.mutedLight, P.wAxis) +
         seg(cx, cy - reach, cx, cy + reach, P.mutedLight, P.wAxis);
}

// ------------------------------------------------------------- inscribed
// A right triangle inscribed from the centre: radius as hypotenuse, dropped to
// the x-axis. Panels share the angle and differ only in radius, so the
// triangles are similar and the scaling - not a relabelling - is what shows.
// The first prototype drew both circles the same size and only changed the
// label; that made the figure caption-dependent.
function inscribedPanel(p, spec, P, ratioY) {
  const { cx, cy, r } = p;
  const th = (spec.angleDeg === undefined ? 40 : spec.angleDeg) * Math.PI / 180;
  const Pt = { x: cx + r * Math.cos(th), y: cy - r * Math.sin(th) };
  const F = { x: Pt.x, y: cy };
  const o = [];
  o.push(axes(cx, cy, r + 14, P));
  o.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${P.hairline}" stroke-width="${P.wCircle}"/>`);
  o.push(`<polygon points="${f2(cx)},${f2(cy)} ${f2(F.x)},${f2(F.y)} ${f2(Pt.x)},${f2(Pt.y)}" fill="${P.fill}" fill-opacity="${P.fillOpacity}"/>`);
  o.push(seg(cx, cy, Pt.x, Pt.y, P.a, P.wSide));
  o.push(seg(F.x, F.y, Pt.x, Pt.y, P.b, P.wSide));
  o.push(seg(cx, cy, F.x, F.y, P.c, P.wSide));
  o.push(`<polyline points="${f2(F.x - 10)},${f2(F.y)} ${f2(F.x - 10)},${f2(F.y - 10)} ${f2(F.x)},${f2(F.y - 10)}" ` +
    `fill="none" stroke="${P.muted}" stroke-width="${P.wRa}"/>`);
  o.push(txt(p.radiusLabel, (cx + Pt.x) / 2 - 10, (cy + Pt.y) / 2 - 6, P.a, P.fsLabel, 'end'));
  o.push(txt('y', Pt.x + 9, (Pt.y + F.y) / 2 + 4, P.b, P.fsLabel, 'start'));
  o.push(txt('x', (cx + F.x) / 2, cy + 18, P.c, P.fsLabel));
  o.push(dot(Pt.x, Pt.y, P.primary, 4, P));
  if (p.title) o.push(txt(p.title, cx, 22, P.muted, P.fsTitle));
  // ratios on one shared baseline across panels, whatever each radius is
  (p.ratios || []).forEach((l, i) => o.push(txt(l, cx, ratioY + i * 20, P.text, P.fsRatio)));
  return o.join('');
}

function inscribed(spec, P) {
  const w = spec.width || 540, h = spec.height || 330;
  const panels = spec.panels || [];
  const ratioY = spec.ratioY === undefined ? h - 34 : spec.ratioY;
  const o = panels.map((p) => inscribedPanel(p, spec, P, ratioY));
  (spec.dividers || []).forEach((x) => o.push(seg(x, 30, x, h - 30, P.hairlineLight, P.wDivider)));
  return { w, h, body: o.join('') };
}

// ------------------------------------------------------------ axisPoints
// Labelled points on the circle, each with a stack of three lines: the
// coordinate, the coordinate that vanishes there, and what that breaks.
// Placement is per point; the default offsets clear the axes, which the side
// points sit on.
function axisPoints(spec, P) {
  const w = spec.width || 540, h = spec.height || 390;
  const cx = spec.cx === undefined ? 270 : spec.cx;
  const cy = spec.cy === undefined ? 180 : spec.cy;
  const r = spec.r || 104;
  const o = [];
  o.push(axes(cx, cy, r + (spec.axisReach === undefined ? 26 : spec.axisReach), P));
  o.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${P.hairline}" stroke-width="${P.wCircle}"/>`);
  (spec.points || []).forEach((p) => {
    const a = p.angleDeg * Math.PI / 180;
    const x = cx + r * Math.cos(a), y = cy - r * Math.sin(a);
    o.push(dot(x, y, P[p.color] || p.color || P.negation, 5, P));
    const tx = x + p.dx, ty = y + p.dy, an = p.anchor || 'start';
    if (p.coord) o.push(txt(p.coord, tx, ty, P.text, P.fsPoint, an));
    if (p.zero) o.push(txt(p.zero, tx, ty + 16, P.negation, P.fsZero, an));
    if (p.dead) o.push(txt(p.dead, tx, ty + 32, P.negation, P.fsDead, an, 400));
  });
  (spec.notes || []).forEach((n, i) => o.push(txt(n, w / 2, h - 28 + i * 18, P.text, P.fsNote)));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { inscribed, axisPoints };

export default function renderCircleArcV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `circleArc.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderCircleArcV2, C as circleArcV2Defaults };
