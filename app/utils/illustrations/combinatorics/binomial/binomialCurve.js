// binomialCurve - the binomial coefficient C(x, k) drawn as a function of its
// upper index.
//
// renderBinomialCurve(spec) -> SVG string. Docs: binomialCurve.md beside it.
//
// Scene types (spec.kind):
//   polynomial   the curve y = x(x-1)...(x-k+1)/k! over a real range, with the
//                whole-number points (the counts C(n, k)) marked on it and a
//                few other x values marked as points of the same polynomial
//
// Palette: the page theme ($meta.palette.$pageTheme in the combinatorics
// figure registry) - curve in site blue, counts in site amber, other values
// in brand navy.

const C = {
  curve: '#2563EB', count: '#B45309', countFill: '#FDF3E3', ext: '#06357A',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCurve: 2.2, wAxis: 1.4, wDot: 2, rDot: 6, sExt: 10,
  fsTick: 11, fsLabel: 12, fsExt: 11, fsTitle: 13, fsLegend: 11,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r1 = (v) => Math.round(v * 10) / 10;

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// C(x, k) = x(x-1)...(x-k+1)/k! for any real x.
function binom(x, k) {
  let v = 1;
  for (let i = 0; i < k; i++) v *= (x - i) / (i + 1);
  return v;
}

// ---------------------------------------------------------------- polynomial
// Grid, then axes, then the curve, then points on top. Count points are drawn
// at every whole number in [0, xmax]; only those with a nonzero value get a
// label (the zeros sit on the axis and the legend explains them). A count
// label goes right of its dot, raised by spec.labelDy[n] where the curve
// would cross it. Other-x points are diamonds, labelled from spec.extra.
function polynomial(spec, P) {
  const k = spec.k, [xmin, xmax] = spec.xRange, [ymin, ymax] = spec.yRange, yStep = spec.yStep || 2;
  const W = spec.width || 540, L = 60, R = W - 40, Tp = 40, B = 320;
  const X = (x) => L + (x - xmin) / (xmax - xmin) * (R - L);
  const Y = (y) => B - (y - ymin) / (ymax - ymin) * (B - Tp);
  const o = [];
  const xTicks = [];
  for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x++) xTicks.push(x);
  xTicks.forEach((x) => o.push(`<line x1="${r1(X(x))}" y1="${Tp}" x2="${r1(X(x))}" y2="${B}" stroke="${P.grid}"/>`));
  for (let y = Math.ceil(ymin / yStep) * yStep; y <= ymax; y += yStep) {
    o.push(`<line x1="${L}" y1="${r1(Y(y))}" x2="${R}" y2="${r1(Y(y))}" stroke="${P.grid}"/>`);
  }
  o.push(`<line x1="${L}" y1="${r1(Y(0))}" x2="${R}" y2="${r1(Y(0))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${r1(X(0))}" y1="${Tp}" x2="${r1(X(0))}" y2="${B}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  xTicks.forEach((x) => o.push(txt(x < 0 ? `−${-x}` : String(x), X(x) + (x === 0 ? -8 : 0), Y(0) + 16, P.muted, P.fsTick, 'middle', 500)));
  for (let y = yStep; y <= ymax; y += yStep) o.push(txt(String(y), X(0) - 8, Y(y) + 4, P.muted, P.fsTick, 'end', 500));
  o.push(txt('x', R + 10, Y(0) + 4, P.muted, P.fsLabel, 'start', 600));
  const pts = [];
  for (let i = 0; i <= 200; i++) {
    const x = xmin + (xmax - xmin) * i / 200, y = binom(x, k);
    if (y <= ymax && y >= ymin) pts.push(`${r1(X(x))},${r1(Y(y))}`);
  }
  o.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${P.curve}" stroke-width="${P.wCurve}"/>`);
  if (spec.curveLabel) o.push(txt(spec.curveLabel.text, X(spec.curveLabel.x), Y(spec.curveLabel.y), P.curve, P.fsTitle, 'end', 700));
  for (let n = 0; n <= Math.floor(xmax); n++) {
    const v = binom(n, k);
    if (v > ymax) continue;
    o.push(`<circle cx="${r1(X(n))}" cy="${r1(Y(v))}" r="${P.rDot}" fill="${P.countFill}" stroke="${P.count}" stroke-width="${P.wDot}"/>`);
    if (v) o.push(txt(`C(${n},${k}) = ${Math.round(v)}`, X(n) + 12, Y(v) + 4 + ((spec.labelDy || {})[n] || 0), P.count, P.fsLabel, 'start', 700));
  }
  (spec.extra || []).forEach(({ x, label }) => {
    const cx = r1(X(x)), cy = r1(Y(binom(x, k))), h = P.sExt / 2;
    o.push(`<rect x="${r1(cx - h)}" y="${r1(cy - h)}" width="${P.sExt}" height="${P.sExt}" transform="rotate(45 ${cx} ${cy})" fill="${P.ext}"/>`);
    o.push(txt(label, cx + (x < 0 ? 10 : -12), cy - 10, P.ext, P.fsExt, x < 0 ? 'start' : 'end', 600));
  });
  const ly = B + 36;
  o.push(`<circle cx="${L + 6}" cy="${ly - 4}" r="${P.rDot}" fill="${P.countFill}" stroke="${P.count}" stroke-width="${P.wDot}"/>`);
  o.push(txt(spec.countNote || `x = n, a whole number: the count of ${k}-element subsets of n items`, L + 18, ly, P.text, P.fsLegend, 'start', 500));
  o.push(`<rect x="${L + 1}" y="${ly + 13}" width="${P.sExt}" height="${P.sExt}" transform="rotate(45 ${L + 6} ${ly + 18})" fill="${P.ext}"/>`);
  o.push(txt(spec.extNote || 'any other x: the same polynomial, no longer a count', L + 18, ly + 22, P.text, P.fsLegend, 'start', 500));
  let h = spec.height || ly + 36;
  if (spec.caption) { h += 26; o.push(txt(spec.caption, W / 2, h - 14, P.text, P.fsTitle)); }
  return { w: W, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { polynomial };

export default function renderBinomialCurve(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `binomialCurve: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderBinomialCurve, binom, C as binomialCurveDefaults };
