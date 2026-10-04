// functionPlot.v3 - the coordinate plane, points forming a graph, reading values.
//
// renderFunctionPlotV3(spec) -> SVG string. Docs: functionPlot.v3.md beside it.
//
// Chains functionPlot.js and functionPlot.v2.js (process v10 rule 11): those
// files are not edited. This one adds
//   plane          the four quadrants with their sign pairs, the origin, and
//                  one point plotted as "a right/left, b up/down"
//   pointsToCurve  sample points (x, f(x)) marked on a faint curve of f
//   readValues     f(a) read up-and-across (one answer) against f(x) = b read
//                  along a horizontal line (every crossing is an answer)
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry), the same defaults as functionPlot (copied, not imported, like
// the other chained files).

const C = {
  f: '#2563EB', fFill: '#DBEAFE', g: '#06357A', r: '#B45309', rFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',
  wCurve: 2.4, wGuide: 1.6, wStep: 2.4, rPoint: 6, rOrigin: 4, curveFaint: 0.45,
  fsTick: 10, fsAxis: 11, fsQuad: 13, fsSign: 12, fsLabel: 12, fsPoint: 13, fsFn: 13, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const num = (v) => (v < 0 ? `−${-v}` : String(v));

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// Grid at every integer, axes through 0, integer tick numbers.
function frame(o, xr, yr, box, P) {
  const [L, R, Tp, B] = box;
  const X = (x) => L + (x - xr[0]) / (xr[1] - xr[0]) * (R - L);
  const Y = (y) => B - (y - yr[0]) / (yr[1] - yr[0]) * (B - Tp);
  for (let v = Math.ceil(xr[0]); v <= xr[1]; v++) if (v) o.push(`<line x1="${f1(X(v))}" y1="${Tp}" x2="${f1(X(v))}" y2="${B}" stroke="${P.grid}"/>`);
  for (let v = Math.ceil(yr[0]); v <= yr[1]; v++) if (v) o.push(`<line x1="${L}" y1="${f1(Y(v))}" x2="${R}" y2="${f1(Y(v))}" stroke="${P.grid}"/>`);
  o.push(`<line x1="${L}" y1="${f1(Y(0))}" x2="${R}" y2="${f1(Y(0))}" stroke="${P.axis}" stroke-width="1.4"/>`);
  o.push(`<line x1="${f1(X(0))}" y1="${Tp}" x2="${f1(X(0))}" y2="${B}" stroke="${P.axis}" stroke-width="1.4"/>`);
  o.push(txt('x', R + 6, Y(0) + 4, P.muted, P.fsAxis, 'start'));
  o.push(txt('y', X(0) + 6, Tp + 2, P.muted, P.fsAxis, 'start'));
  for (let v = Math.ceil(xr[0]); v <= xr[1]; v++) if (v) o.push(txt(num(v), X(v), Y(0) + 15, P.muted, P.fsTick, 'middle', 500));
  for (let v = Math.ceil(yr[0]); v <= yr[1]; v++) if (v) o.push(txt(num(v), X(0) - 6, Y(v) + 4, P.muted, P.fsTick, 'end', 500));
  return { X, Y };
}

// Sampled path of fn on [a, b]; the pen lifts outside yr.
function curve(fn, a, b, X, Y, yr, n) {
  const p = [];
  let pen = false;
  for (let i = 0; i <= (n || 48); i++) {
    const x = a + (b - a) * i / (n || 48), y = fn(x);
    if (!(y >= yr[0] && y <= yr[1])) { pen = false; continue; }
    p.push(`${pen ? 'L' : 'M'}${f1(X(x))},${f1(Y(y))}`);
    pen = true;
  }
  return p.join(' ');
}

const dot = (x, y, r, fill, stroke) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>`;

// --------------------------------------------------------------------- plane
// spec.point {x, y, label}; the step arrows run along the x-axis, then
// vertically to the point. Quadrant labels sit in the four corners.
function plane(spec, P) {
  const W = 480, H = 400, xr = spec.xRange || [-5, 5], yr = spec.yRange || [-4, 4];
  const o = [`<defs><marker id="fp3-step-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${P.r}"/></marker></defs>`];
  const { X, Y } = frame(o, xr, yr, [40, 440, 24, 344], P);
  const qx = (xr[1] - 1.5), qy = (yr[1] - 0.7), qyb = (yr[0] + 0.8);
  [['Quadrant II', '(−, +)', -qx, qy], ['Quadrant I', '(+, +)', qx, qy], ['Quadrant III', '(−, −)', -qx, qyb], ['Quadrant IV', '(+, −)', qx, qyb]]
    .forEach(([n, s, x, y]) => { o.push(txt(n, X(x), Y(y), P.g, P.fsQuad, 'middle', 700)); o.push(txt(s, X(x), Y(y) + 16, P.muted, P.fsSign, 'middle', 600)); });
  o.push(`<circle cx="${f1(X(0))}" cy="${f1(Y(0))}" r="${P.rOrigin}" fill="${P.text}"/>`);
  o.push(txt('origin (0, 0)', X(0) - 8, Y(0) - 8, P.text, P.fsAxis, 'end', 600));
  const { x, y, label } = spec.point, sx = Math.sign(x), sy = Math.sign(y);
  o.push(`<line x1="${f1(X(0))}" y1="${f1(Y(0))}" x2="${f1(X(x) - 2 * sx)}" y2="${f1(Y(0))}" stroke="${P.r}" stroke-width="${P.wStep}" marker-end="url(#fp3-step-arrow)"/>`);
  o.push(`<line x1="${f1(X(x))}" y1="${f1(Y(0))}" x2="${f1(X(x))}" y2="${f1(Y(y) + 2 * sy)}" stroke="${P.r}" stroke-width="${P.wStep}" marker-end="url(#fp3-step-arrow)"/>`);
  o.push(txt(`${Math.abs(x)} ${sx > 0 ? 'right' : 'left'}`, X(x / 2), Y(0) + (sy < 0 ? -8 : 20), P.r, P.fsLabel, 'middle', 700));
  o.push(txt(`${Math.abs(y)} ${sy > 0 ? 'up' : 'down'}`, X(x) + 8 * sx, Y(y / 2) + 4, P.r, P.fsLabel, sx > 0 ? 'start' : 'end', 700));
  o.push(dot(X(x), Y(y), P.rPoint, P.rFill, P.r));
  o.push(txt(label, X(x) + 10 * sx, Y(y) + (sy < 0 ? 18 : -10), P.r, P.fsPoint, sx > 0 ? 'start' : 'end', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 16, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ------------------------------------------------------------- pointsToCurve
// spec.fn, spec.points [x...]; each point labelled (x, f(x)), left of the
// y-axis to the left, right of it to the right, on it below.
function pointsToCurve(spec, P) {
  const W = 480, H = 380, xr = spec.xRange, yr = spec.yRange, o = [];
  const { X, Y } = frame(o, xr, yr, [40, 440, 24, 314], P);
  o.push(`<path d="${curve(spec.fn, xr[0], xr[1], X, Y, yr)}" fill="none" stroke="${P.f}" stroke-width="${P.wCurve}" opacity="${P.curveFaint}"/>`);
  spec.points.forEach((x) => {
    const y = spec.fn(x), side = Math.sign(x);
    o.push(dot(X(x), Y(y), P.rPoint, P.rFill, P.r));
    o.push(txt(`(${num(x)}, ${num(y)})`, X(x) + 12 * side, Y(y) + (side ? 4 : 22), P.r, P.fsLabel, side < 0 ? 'end' : side > 0 ? 'start' : 'middle', 700));
  });
  if (spec.fnLabel) o.push(txt(spec.fnLabel.text, X(spec.fnLabel.x), Y(spec.fnLabel.y), P.f, P.fsFn, 'start', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 16, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------- readValues
// spec.input {x, label}: dashed up to the curve and across to the y-axis.
// spec.output {y, xs, label}: the crossings of y = output.y, labelled under
// the plot (xs are the solutions, supplied by the spec).
function readValues(spec, P) {
  const W = 480, H = 400, xr = spec.xRange, yr = spec.yRange, o = [];
  const { X, Y } = frame(o, xr, yr, [40, 440, 24, 334], P);
  o.push(`<path d="${curve(spec.fn, xr[0], xr[1], X, Y, yr)}" fill="none" stroke="${P.f}" stroke-width="${P.wCurve}"/>`);
  const a = spec.input.x, fa = spec.fn(a);
  o.push(`<line x1="${f1(X(a))}" y1="${f1(Y(0))}" x2="${f1(X(a))}" y2="${f1(Y(fa))}" stroke="${P.r}" stroke-width="${P.wGuide}" stroke-dasharray="5 4"/>`);
  o.push(`<line x1="${f1(X(a))}" y1="${f1(Y(fa))}" x2="${f1(X(0))}" y2="${f1(Y(fa))}" stroke="${P.r}" stroke-width="${P.wGuide}" stroke-dasharray="5 4"/>`);
  o.push(dot(X(a), Y(fa), P.rPoint, P.rFill, P.r));
  o.push(txt(spec.input.label, X(0) + 8, Y(fa) - 8, P.r, P.fsLabel, 'start', 700));
  const b = spec.output.y;
  if (b !== 0) o.push(`<line x1="40" y1="${f1(Y(b))}" x2="440" y2="${f1(Y(b))}" stroke="${P.g}" stroke-width="${P.wGuide}" stroke-dasharray="5 4"/>`);
  spec.output.xs.forEach((x) => o.push(dot(X(x), Y(b), P.rPoint, P.fFill, P.g)));
  o.push(txt(spec.output.label, W / 2, 356, P.g, P.fsLabel, 'middle', 700));
  if (spec.fnLabel) o.push(txt(spec.fnLabel.text, X(spec.fnLabel.x), Y(spec.fnLabel.y), P.f, P.fsFn, 'start', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 16, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { plane, pointsToCurve, readValues };

export default function renderFunctionPlotV3(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `functionPlot.v3: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `For the other kinds use functionPlot.js or functionPlot.v2.js; add new ones in a further file per process v10 rule 11.`
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

export { renderFunctionPlotV3, C as functionPlotV3Defaults };
