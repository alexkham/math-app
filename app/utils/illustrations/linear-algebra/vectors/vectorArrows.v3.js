// vectorArrows.v3 - vectors of length one, on the unit circle.
//
// Third file, not an edit: rule 11 - vectorArrows.js and vectorArrows.v2.js
// had both shipped before this was needed.
//
//   vectorArrows.js     copies               vectors
//   vectorArrows.v2.js  sum / difference     vectors/basic-operations, magnitude
//   vectorArrows.v3.js  units                vectors/magnitude
//
// renderVectorArrowsV3(spec) -> SVG string. Docs: vectorArrows.v3.md beside it.
//
// Palette: the page theme (owner decision 2026-09-28, recorded as
// $meta.palette.$pageTheme in the linear-algebra figure registry) - site blue
// for the vectors, brand slate-blue for the circle. The first renderer here
// whose defaults are the page theme; v1 and v2 receive it through spec.style.

const C = {
  vector: '#2563EB', shape: '#5A7299', negation: '#C0392B',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wVector: 2.6, wShape: 1.6, wGrid: 1, wAxis: 1.4,
  radius: 120, reach: 1.5, head: 11, shapeOpacity: 0.05,
  fsLabel: 13, fsShape: 12, fsTick: 11, fsNote: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ----------------------------------------------------------------- units
// Axes through the centre, grid every half unit, the unit circle dashed in the
// shape colour, and every listed vector drawn from the centre. A vector whose
// length is not 1 is still drawn where the spec puts it - the renderer does
// not normalise - so a wrong case can be shown off the circle on purpose.
function units(spec, P) {
  const R = P.radius, reach = spec.reach || P.reach;
  const pad = 30, cx = pad + reach * R, cy = 20 + reach * R;
  const X = (x) => cx + x * R, Y = (y) => cy - y * R;
  const o = [];
  for (let k = -Math.floor(reach * 2); k <= Math.floor(reach * 2); k += 1) {
    o.push(`<line x1="${f1(X(k / 2))}" y1="${f1(Y(-reach))}" x2="${f1(X(k / 2))}" y2="${f1(Y(reach))}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
    o.push(`<line x1="${f1(X(-reach))}" y1="${f1(Y(k / 2))}" x2="${f1(X(reach))}" y2="${f1(Y(k / 2))}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  }
  o.push(`<line x1="${f1(X(-reach))}" y1="${f1(Y(0))}" x2="${f1(X(reach))}" y2="${f1(Y(0))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${f1(X(0))}" y1="${f1(Y(-reach))}" x2="${f1(X(0))}" y2="${f1(Y(reach))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('1', X(1), Y(0) + 16, P.muted, P.fsTick, 'middle', 500));
  o.push(txt('−1', X(-1), Y(0) + 16, P.muted, P.fsTick, 'middle', 500));
  o.push(txt('1', X(0) - 10, Y(1) + 4, P.muted, P.fsTick, 'middle', 500));
  o.push(txt('−1', X(0) - 10, Y(-1) + 4, P.muted, P.fsTick, 'middle', 500));
  o.push(`<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${R}" fill="${P.shape}" fill-opacity="${P.shapeOpacity}" ` +
    `stroke="${P.shape}" stroke-width="${P.wShape}" stroke-dasharray="5 4"/>`);

  (spec.vectors || []).forEach((v) => {
    const col = v.wrong ? P.negation : P.vector;
    const c = X(v.at[0]), d = Y(v.at[1]);
    const ang = Math.atan2(d - cy, c - cx), h = P.head;
    const ex = c - 8 * Math.cos(ang), ey = d - 8 * Math.sin(ang);
    o.push(`<line x1="${f1(cx)}" y1="${f1(cy)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${P.wVector}" stroke-linecap="round"` +
      `${v.wrong ? ' stroke-dasharray="7 5"' : ''}/>`);
    o.push(`<path d="M ${f1(c)} ${f1(d)} L ${f1(c - h * Math.cos(ang - 0.38))} ${f1(d - h * Math.sin(ang - 0.38))} ` +
      `L ${f1(c - h * Math.cos(ang + 0.38))} ${f1(d - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>`);
    if (v.label) o.push(txt(v.label, c + v.dx, d + v.dy, col, P.fsLabel, v.anchor || 'start'));
  });
  if (spec.shapeLabel) {
    const [x, y] = spec.shapeLabel.at;
    o.push(txt(spec.shapeLabel.text, X(x), Y(y), P.shape, P.fsShape, 'end', 500));
  }

  const w = spec.width || 2 * cx;
  let y = Y(-reach) + 30;
  if (spec.note) { o.push(txt(spec.note, pad, y, P.text, P.fsNote, 'start', 400)); y += 22; }
  const h = spec.height || y + 12;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 12, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { units };

export default function renderVectorArrowsV3(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows.v3: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderVectorArrowsV3, C as vectorArrowsV3Defaults };
