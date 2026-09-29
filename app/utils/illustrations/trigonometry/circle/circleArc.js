// circleArc - a circle, an angle at its centre, and what that angle measures.
//
// renderCircleArc(spec) -> SVG string. Docs: circleArc.md beside it.
//
// Scene types (spec.kind):
//   arc      circle, two radii, the arc between them emphasised
//   sector   the same, with the wedge filled against the whole disc
//   cut      a horizontal line across the circle, the satisfying arc emphasised
//   compare  two panels: two circles, or a circle beside a pre-rendered curve
//
// The `compare` kind takes an already-rendered SVG string as its second panel,
// so a circle can sit beside a curveFeature render without this file knowing
// anything about curves.
//
// Palette is the trigonometry census (process v10 3.3).

const C = {
  primary: '#4F46E5',
  primaryLight: '#818CF8',
  secondary: '#16A34A',
  resultStroke: '#B45309',
  resultFill: '#D97706',
  negation: '#DC2626',
  text: '#1E3A5F',
  muted: '#64748B',
  mutedLight: '#94A3B8',
  hairline: '#CBD5E1',
  hairlineLight: '#E2E8F0',
  surface: '#F8FAFC',

  wCircle: 1.2,
  wRadius: 2.2,
  wArc: 2.6,
  wAngle: 1.7,
  wTick: 1.4,
  wRef: 1.2,
  wHair: 1,

  fillDisc: 0.11,
  fillWedge: 0.42,

  fsLabel: 14,
  fsAngle: 15,
  fsNote: 12,
  fsBig: 20,
  weightBold: 600,
};

const PI = Math.PI;
const FONT = 'sans-serif';
const f2 = (n) => (+n).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Screen y grows downward, so a maths angle is negated to place a point.
const pt = (cx, cy, r, a) => ({ x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) });

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f2(x)}" y="${f2(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------------------
// Always drawn from the smaller angle to the larger one. Because screen y grows
// downward, increasing the maths angle moves counterclockwise on screen, which
// is SVG sweep-flag 0. Getting this backwards draws the arc straight across the
// disc instead of along the rim - it did, on the first render of this
// component, in all three scenes at once.
// ---------------------------------------------------------------------------
function arcPath(cx, cy, r, a0, a1) {
  const lo = Math.min(a0, a1), hi = Math.max(a0, a1);
  const p0 = pt(cx, cy, r, lo), p1 = pt(cx, cy, r, hi);
  return `M ${f2(p0.x)} ${f2(p0.y)} A ${r} ${r} 0 ${hi - lo > PI ? 1 : 0} 0 ${f2(p1.x)} ${f2(p1.y)}`;
}

function arc(cx, cy, r, a0, a1, col, w, dash) {
  return `<path d="${arcPath(cx, cy, r, a0, a1)}" fill="none" stroke="${col}" stroke-width="${w}"` +
    (dash ? ` stroke-dasharray="${dash}"` : '') + ` stroke-linecap="round"/>`;
}

function wedge(cx, cy, r, a0, a1, fill, op) {
  const lo = Math.min(a0, a1), hi = Math.max(a0, a1);
  const p0 = pt(cx, cy, r, lo), p1 = pt(cx, cy, r, hi);
  return `<path d="M ${cx} ${cy} L ${f2(p0.x)} ${f2(p0.y)} A ${r} ${r} 0 ${hi - lo > PI ? 1 : 0} 0 ` +
    `${f2(p1.x)} ${f2(p1.y)} Z" fill="${fill}" fill-opacity="${op}" stroke="none"/>`;
}

function seg(x1, y1, x2, y2, col, w, dash) {
  return `<line x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}" stroke="${col}" ` +
    `stroke-width="${w}"` + (dash ? ` stroke-dasharray="${dash}"` : '') + ` stroke-linecap="round"/>`;
}

// A tick across a segment or an arc: "this length".
function tickOn(x1, y1, x2, y2, col, P) {
  const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const nx = (-dy / l) * 5, ny = (dx / l) * 5;
  return seg(mx - nx, my - ny, mx + nx, my + ny, col, P.wTick);
}

function tickAt(cx, cy, r, a, col, P) {
  const p = pt(cx, cy, r, a);
  const nx = Math.cos(a) * 5, ny = -Math.sin(a) * 5;
  return seg(p.x - nx, p.y - ny, p.x + nx, p.y + ny, col, P.wTick);
}

function centreDot(cx, cy, P) {
  return `<circle cx="${cx}" cy="${cy}" r="3.5" fill="${P.muted}"/>`;
}

// Shared body for the arc / sector family.
function discBody(s, P) {
  const { cx, cy, r } = s;
  const a0 = s.from === undefined ? 0 : s.from;
  const a1 = s.to;
  const o = [];

  o.push(`<circle cx="${cx}" cy="${cy}" r="${r}" ` +
    (s.tintDisc ? `fill="${P.primary}" fill-opacity="${P.fillDisc}"` : 'fill="none"') +
    ` stroke="${P.hairline}" stroke-width="${P.wCircle}"/>`);

  if (s.wedge) o.push(wedge(cx, cy, r, a0, a1, P.resultFill, P.fillWedge));

  const p0 = pt(cx, cy, r, a0), p1 = pt(cx, cy, r, a1);
  const radCol = s.wedge ? P.resultStroke : P.primary;
  o.push(seg(cx, cy, p0.x, p0.y, radCol, s.wedge ? 2 : P.wRadius));
  o.push(seg(cx, cy, p1.x, p1.y, radCol, s.wedge ? 2 : P.wRadius));
  if (s.tickRadii) {
    o.push(tickOn(cx, cy, p0.x, p0.y, P.primary, P));
    o.push(tickOn(cx, cy, p1.x, p1.y, P.primary, P));
  }

  o.push(arc(cx, cy, r, a0, a1, P.resultStroke, s.arcWidth || P.wArc));
  if (s.tickArc) o.push(tickAt(cx, cy, r, (a0 + a1) / 2, P.resultStroke, P));

  const ar = s.angleRadius || 34;
  o.push(arc(cx, cy, ar, a0, a1, s.angleColor ? P[s.angleColor] || s.angleColor : P.resultStroke, P.wAngle));
  if (s.angleLabel) {
    const lp = pt(cx, cy, ar + (s.angleLabelOut || 24), (a0 + a1) / 2);
    o.push(txt(s.angleLabel, lp.x, lp.y + 4,
      s.angleColor ? P[s.angleColor] || s.angleColor : P.resultStroke, P.fsAngle));
  }

  (s.radiusLabels || []).forEach((rl) => {
    const lp = pt(cx, cy, r * (rl.at === undefined ? 0.5 : rl.at), rl.angle);
    o.push(txt(rl.text, lp.x + (rl.dx || 0), lp.y + (rl.dy === undefined ? 4 : rl.dy), P.primary, P.fsLabel));
  });

  if (s.arcLabel) {
    const lp = pt(cx, cy, r + (s.arcLabelOut || 24), s.arcLabelAt === undefined ? (a0 + a1) / 2 : s.arcLabelAt);
    o.push(txt(s.arcLabel, lp.x + (s.arcLabelDx || 0), lp.y + (s.arcLabelDy === undefined ? 4 : s.arcLabelDy),
      P.resultStroke, s.arcLabelSize || P.fsAngle, s.arcLabelAnchor));
  }

  o.push(centreDot(cx, cy, P));
  return o.join('');
}

// --------------------------------------------------------------------- notes
function notes(list, P) {
  return (list || []).map((n) =>
    txt(n.text, n.x, n.y, P[n.color] || n.color || P.text, n.size || P.fsNote, n.anchor,
      n.bold === false ? 400 : 600)).join('');
}

// ----------------------------------------------------------------- arc/sector
function discScene(spec, P) {
  const w = spec.width || 440, h = spec.height || 300;
  const s = {
    cx: spec.cx === undefined ? 170 : spec.cx,
    cy: spec.cy === undefined ? 155 : spec.cy,
    r: spec.r || 110,
    from: spec.from, to: spec.to,
    wedge: spec.kind === 'sector',
    tintDisc: spec.tintDisc !== undefined ? spec.tintDisc : spec.kind === 'sector',
    tickRadii: spec.tickRadii, tickArc: spec.tickArc,
    angleRadius: spec.angleRadius, angleLabel: spec.angleLabel,
    angleColor: spec.angleColor, angleLabelOut: spec.angleLabelOut,
    radiusLabels: spec.radiusLabels, arcLabel: spec.arcLabel,
    arcLabelOut: spec.arcLabelOut, arcLabelAt: spec.arcLabelAt,
    arcLabelDx: spec.arcLabelDx, arcLabelDy: spec.arcLabelDy,
    arcLabelSize: spec.arcLabelSize, arcLabelAnchor: spec.arcLabelAnchor,
    arcWidth: spec.arcWidth,
  };
  return { w, h, body: discBody(s, P) + notes(spec.notes, P) };
}

// ----------------------------------------------------------------------- cut
// A horizontal line across the circle; the arc above it is the solution set.
function cut(spec, P) {
  const w = spec.width || 320, h = spec.height || 300;
  const cx = spec.cx === undefined ? 160 : spec.cx;
  const cy = spec.cy === undefined ? 150 : spec.cy;
  const r = spec.r || 112;
  const v = spec.at;                                   // the value cut at, -1..1
  const a0 = Math.asin(v), a1 = PI - a0;               // the satisfying arc
  const o = [];
  o.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${P.hairline}" stroke-width="${P.wCircle}"/>`);
  o.push(seg(cx - r - 12, cy - v * r, cx + r + 12, cy - v * r, P.negation, P.wRef, '5 3'));
  o.push(arc(cx, cy, r, a0, a1, P.resultStroke, P.wArc));
  [a0, a1].forEach((a) => {
    const p = pt(cx, cy, r, a);
    o.push(`<circle cx="${f2(p.x)}" cy="${f2(p.y)}" r="4.5" fill="${P.resultStroke}" stroke="${P.surface}" stroke-width="1.2"/>`);
  });
  // The cut label sits below the line on the left; the endpoint labels sit
  // radially outside. Putting the cut label at the right-hand end of the line
  // ran it straight through the first endpoint label.
  if (spec.cutLabel) {
    o.push(txt(spec.cutLabel, cx - r - 6, cy - v * r + 15, P.negation, P.fsNote, 'start'));
  }
  (spec.endpointLabels || []).forEach((el, i) => {
    const p = pt(cx, cy, r + 26, i === 0 ? a0 : a1);
    o.push(txt(el, p.x, p.y - 2, P.resultStroke, P.fsNote, i === 0 ? 'start' : 'end'));
  });
  if (spec.arcNote) {
    o.push(txt(spec.arcNote, cx, cy - r - 22, P.resultStroke, P.fsNote));
  }
  o.push(centreDot(cx, cy, P));
  return { w, h, body: o.join('') + notes(spec.notes, P) };
}

// ------------------------------------------------------------------- compare
// Two panels side by side. The second may be a pre-rendered SVG string from
// another component - this file never learns to draw curves.
function compare(spec, P) {
  const gap = spec.gap === undefined ? 24 : spec.gap;
  const built = (spec.panels || []).map((p) => {
    if (p.svg) {
      const m = p.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
      return { w: m ? +m[1] : 300, h: m ? +m[2] : 300, body: p.svg, isSvg: true, title: p.title };
    }
    // dispatch on the panel's own kind, or a `cut` panel silently renders as
    // an `arc` one
    const k = p.kind || 'arc';
    const one = (k === 'cut' ? cut : discScene)({ ...p, kind: k }, P);
    return { ...one, isSvg: false, title: p.title };
  });
  const w = built.reduce((a, b) => a + b.w, 0) + gap * (built.length - 1);
  // noteSpace reserves room under the panels; without it a caption lands on
  // the tick labels of whichever panel is tallest
  const h = Math.max(...built.map((b) => b.h)) + (built.some((b) => b.title) ? 22 : 0) + (spec.noteSpace || 0);
  const dy = built.some((b) => b.title) ? 22 : 0;
  let x = 0;
  const gs = built.map((b) => {
    const inner = b.isSvg
      // a nested <svg> keeps its own coordinate system; no transform maths needed
      ? b.body.replace('<svg ', `<svg x="0" y="0" `)
      : b.body;
    const t = b.title ? txt(b.title, b.w / 2, 14, P.text, 13) : '';
    const g = `<g transform="translate(${f2(x)},0)">${t}<g transform="translate(0,${dy})">${inner}</g></g>`;
    x += b.w + gap;
    return g;
  });
  return { w, h, body: gs.join('') + notes(spec.notes, P) };
}

// ---------------------------------------------------------------------------
const KINDS = { arc: discScene, sector: discScene, cut, compare };

export default function renderCircleArc(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `circleArc: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderCircleArc, C as circleArcDefaults };
