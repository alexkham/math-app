// complexRoots - roots of a polynomial equation drawn in the complex plane.
//
// renderComplexRoots(spec) -> SVG string. Docs: complexRoots.md beside it.
//
// Scene types (spec.kind):
//   roots   the roots as points on a circle about the origin, each with a
//           radius, its value and its argument; roots whose conjugate is also
//           a root are joined to it by a dashed line across the real axis
//
// Palette: the page theme ($meta.palette.$pageTheme in the complex-numbers
// figure registry) - circle and radii in brand navy, roots in site amber,
// conjugate links in site blue.

const C = {
  root: '#B45309', rootFill: '#FDF3E3', circle: '#06357A', pair: '#2563EB',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCircle: 1.8, wRadius: 1.2, wAxis: 1.4, wRoot: 2.2, wPair: 1, rRoot: 7, unit: 150,
  fsAxis: 12, fsTick: 11, fsValue: 13, fsArg: 11, fsLegend: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- roots
// The circle has radius spec.r in plane units (default 1), drawn at P.unit px.
// Grid lines every half unit of r. Roots are given by argument in degrees;
// positions are computed, so a label can never sit off its point. A root at
// angle a is paired with a root at -a (mod 360) when both are present and
// a is strictly between 0 and 180; the dashed link joins the pair.
function roots(spec, P) {
  const W = spec.width || 520, cx = W / 2, cy = 215, s = P.unit;
  const X = (x) => cx + x * s, Y = (y) => cy - y * s;
  const o = [];
  for (const v of [-1, -0.5, 0.5, 1]) {
    o.push(`<line x1="${X(v)}" y1="${Y(1.3)}" x2="${X(v)}" y2="${Y(-1.2)}" stroke="${P.grid}"/>`);
    o.push(`<line x1="${X(-1.4)}" y1="${Y(v)}" x2="${X(1.4)}" y2="${Y(v)}" stroke="${P.grid}"/>`);
  }
  o.push(`<line x1="${X(-1.4)}" y1="${cy}" x2="${X(1.4)}" y2="${cy}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${cx}" y1="${Y(1.3)}" x2="${cx}" y2="${Y(-1.2)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('Re', X(1.4) + 4, cy + 4, P.muted, P.fsAxis, 'start', 600));
  o.push(txt('Im', cx, Y(1.3) - 8, P.muted, P.fsAxis, 'middle', 600));
  const t = spec.ticks || { re: ['1', '−1'], im: ['i', '−i'] };
  o.push(txt(t.re[0], X(1) + 8, cy + 16, P.muted, P.fsTick, 'start', 500));
  o.push(txt(t.re[1], X(-1) - 8, cy + 16, P.muted, P.fsTick, 'end', 500));
  o.push(txt(t.im[0], cx - 8, Y(1) - 6, P.muted, P.fsTick, 'end', 500));
  o.push(txt(t.im[1], cx - 8, Y(-1) + 16, P.muted, P.fsTick, 'end', 500));
  o.push(`<circle cx="${cx}" cy="${cy}" r="${s}" fill="none" stroke="${P.circle}" stroke-width="${P.wCircle}"/>`);
  const angs = spec.roots.map((r) => r.arg);
  const pts = angs.map((a) => [Math.cos(a * Math.PI / 180), Math.sin(a * Math.PI / 180)]);
  pts.forEach(([x, y]) => o.push(`<line x1="${cx}" y1="${cy}" x2="${f1(X(x))}" y2="${f1(Y(y))}" stroke="${P.circle}" stroke-width="${P.wRadius}" opacity="0.6"/>`));
  const norm = (a) => ((a % 360) + 360) % 360;
  let paired = false;
  angs.forEach((a, i) => {
    if (norm(a) > 0 && norm(a) < 180 && angs.some((b) => norm(b) === norm(360 - a))) {
      paired = true;
      const [x, y] = pts[i];
      o.push(`<line x1="${f1(X(x))}" y1="${f1(Y(y))}" x2="${f1(X(x))}" y2="${f1(Y(-y))}" stroke="${P.pair}" stroke-width="${P.wPair}" stroke-dasharray="2 3" opacity="0.8"/>`);
    }
  });
  pts.forEach(([x, y], i) => {
    o.push(`<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="${P.rRoot}" fill="${P.rootFill}" stroke="${P.root}" stroke-width="${P.wRoot}"/>`);
    const right = x > 1e-9, up = y > 0;
    o.push(txt(spec.roots[i].label, X(x) + (right ? 12 : -12), Y(y) + (up ? -10 : 20), P.root, P.fsValue, right ? 'start' : 'end', 700));
    o.push(txt(`${angs[i]}°`, X(x) + (right ? 12 : -12), Y(y) + (up ? -26 : 35), P.muted, P.fsArg, right ? 'start' : 'end', 500));
  });
  if (paired) {
    o.push(`<line x1="70" y1="418" x2="94" y2="418" stroke="${P.pair}" stroke-width="1.4" stroke-dasharray="2 3"/>`);
    o.push(txt(spec.pairNote || 'a root and its conjugate: mirror images across the real axis', 102, 422, P.pair, P.fsLegend, 'start', 500));
  }
  const lines = spec.captionLines || [];
  const h = spec.height || 450 + 20 * Math.max(lines.length, 1);
  lines.forEach((l, i) => o.push(txt(l, W / 2, 450 + 20 * i, P.text, P.fsCaption, 'middle', 600)));
  return { w: W, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { roots };

export default function renderComplexRoots(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `complexRoots: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderComplexRoots, C as complexRootsDefaults };
