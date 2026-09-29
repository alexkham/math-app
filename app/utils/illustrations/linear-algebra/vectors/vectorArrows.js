// vectorArrows - vectors drawn as arrows on a coordinate grid.
//
// renderVectorArrows(spec) -> SVG string. Docs: vectorArrows.md beside it.
//
// Linear algebra's first authored component. Scene types (spec.kind):
//   copies   one vector drawn at several tails, its components marked on each,
//            beside a wrong arrow that shares something with it but is not it
//
// Palette is the linear-algebra census, plane family (process v10 3.3),
// recorded in $meta.palette.plane of
// session-docs/methodology/illustrations/linear-algebra/figure-registry.json:
// orange #EA580C is the vector, as in every 2D visualizer on the site.

const C = {
  vector: '#EA580C', image: '#0891B2', subspace: '#059669', negation: '#DC2626', shape: '#6366F1',
  text: '#0F172A', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8', surface: '#FFFFFF',

  wVector: 2.6, wWrong: 2.2, wLeg: 1.2, wGrid: 1, wAxis: 1.4,
  unit: 42, head: 11, rTail: 3,
  fsLabel: 13, fsLeg: 12, fsNote: 11, fsCaption: 13, fsOrigin: 12,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// Grid with its origin at the lower-left corner; px/py map grid units to pixels.
function grid(nx, ny, P) {
  const X0 = 40, Y0 = 40 + ny * P.unit;
  const px = (x) => X0 + x * P.unit, py = (y) => Y0 - y * P.unit;
  const o = [];
  for (let i = 0; i <= nx; i += 1) o.push(`<line x1="${px(i)}" y1="${py(0)}" x2="${px(i)}" y2="${py(ny)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  for (let j = 0; j <= ny; j += 1) o.push(`<line x1="${px(0)}" y1="${py(j)}" x2="${px(nx)}" y2="${py(j)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(nx)}" y2="${py(0)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(0)}" y2="${py(ny)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('O', px(0) - 12, py(0) + 16, P.muted, P.fsOrigin, 'middle', 500));
  return { px, py, X0, Y0, body: o.join('') };
}

// Arrow in pixel space: shaft stops short of the tip so the head stays sharp.
function arrow(a, b, c, d, col, w, dash, P) {
  const ang = Math.atan2(d - b, c - a), h = P.head;
  const ex = c - 8 * Math.cos(ang), ey = d - 8 * Math.sin(ang);
  return `<line x1="${f1(a)}" y1="${f1(b)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"` +
    `${dash ? ` stroke-dasharray="${dash}"` : ''}/>` +
    `<path d="M ${f1(c)} ${f1(d)} L ${f1(c - h * Math.cos(ang - 0.38))} ${f1(d - h * Math.sin(ang - 0.38))} ` +
    `L ${f1(c - h * Math.cos(ang + 0.38))} ${f1(d - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>` +
    `<circle cx="${f1(a)}" cy="${f1(b)}" r="${P.rTail}" fill="${col}"/>`;
}

// ----------------------------------------------------------------- copies
// Every copy carries its component legs (run, then rise), dashed and muted,
// so "same components" is read off the drawing rather than asserted. The
// wrong arrow is dashed as well as red: it must not pass for a fourth copy.
function copies(spec, P) {
  const nx = spec.nx || 10, ny = spec.ny || 6;
  const [vx, vy] = spec.vector;
  const g = grid(nx, ny, P);
  const { px, py } = g;
  const o = [g.body];

  (spec.tails || []).forEach(([x, y]) => {
    o.push(`<path d="M ${px(x)} ${py(y)} L ${px(x + vx)} ${py(y)} L ${px(x + vx)} ${py(y + vy)}" fill="none" ` +
      `stroke="${P.muted}" stroke-width="${P.wLeg}" stroke-dasharray="4 3"/>`);
    o.push(txt(vx, (px(x) + px(x + vx)) / 2, py(y) + 15, P.muted, P.fsLeg, 'middle', 500));
    o.push(txt(vy, px(x + vx) + 8, (py(y) + py(y + vy)) / 2 + 4, P.muted, P.fsLeg, 'start', 500));
  });
  if (spec.wrong) {
    const w = spec.wrong;
    o.push(arrow(px(w.tail[0]), py(w.tail[1]), px(w.tail[0] + w.vector[0]), py(w.tail[1] + w.vector[1]),
      P.negation, P.wWrong, '7 5', P));
    (w.label || []).forEach((line, i) => o.push(txt(line, px(w.labelAt[0]), py(w.labelAt[1]) + 13 * i, P.negation, P.fsNote, 'start', 400)));
  }
  (spec.tails || []).forEach(([x, y]) => o.push(arrow(px(x), py(y), px(x + vx), py(y + vy), P.vector, P.wVector, null, P)));
  (spec.labels || []).forEach(([t, x, y]) => o.push(txt(t, px(x), py(y), P.vector, P.fsLabel)));

  const w = spec.width || px(nx) + 30;
  let y = g.Y0 + 38;
  if (spec.note) { o.push(txt(spec.note, px(0), y, P.text, P.fsNote, 'start', 400)); y += 24; }
  const h = spec.height || y + 14;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 14, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { copies };

export default function renderVectorArrows(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f1(w)} ${f1(h)}" width="${f1(w)}" height="${f1(h)}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderVectorArrows, C as vectorArrowsDefaults };
