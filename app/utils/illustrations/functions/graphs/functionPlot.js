// functionPlot - graphs of functions with one feature picked out.
//
// renderFunctionPlot(spec) -> SVG string. Docs: functionPlot.md beside it.
//
// Scene types (spec.kind):
//   monotone   a curve coloured falling / rising, a turning point, direction
//              arrows, and the decreasing / increasing intervals drawn as
//              x-intervals under the plot
//   extrema    a curve on a closed interval with its local peak and valley
//              (hollow) and its absolute max and min at the endpoints (filled)
//   sum        f, g and f + g, with the two outputs at one input stacked as
//              bars so the sum reads as a height
//   product    f, g and fg, with the zeros of fg marked where a factor is zero
//   quotient   the simplified quotient with the hole where the divisor is zero
//   domain     number lines for Dom f, Dom g and their intersection
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry) - first function site blue, second brand navy, result site amber,
// falling / excluded in the negation red.

const C = {
  f: '#2563EB', g: '#06357A', r: '#B45309', rFill: '#FDF3E3', bad: '#C0392B',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCurve: 2.2, wResult: 2.6, wAxis: 1.3, wPoint: 2.2, rPoint: 6,
  fsAxis: 11, fsLabel: 12, fsTitle: 13, fsNote: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const neg = (s) => String(s).replace('-', '−');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// Grid every whole x and every yStep, axes through 0, axis letters.
function frame(P, xr, yr, box, yStep, yLetter) {
  const [L, R, Tp, B] = box;
  const X = (x) => L + (x - xr[0]) / (xr[1] - xr[0]) * (R - L);
  const Y = (y) => B - (y - yr[0]) / (yr[1] - yr[0]) * (B - Tp);
  const o = [];
  for (let v = Math.ceil(xr[0]); v <= Math.floor(xr[1]); v += 1) if (v) o.push(`<line x1="${f1(X(v))}" y1="${Tp}" x2="${f1(X(v))}" y2="${B}" stroke="${P.grid}"/>`);
  for (let v = Math.ceil(yr[0] / yStep) * yStep; v <= yr[1]; v += yStep) if (v) o.push(`<line x1="${L}" y1="${f1(Y(v))}" x2="${R}" y2="${f1(Y(v))}" stroke="${P.grid}"/>`);
  o.push(`<line x1="${L}" y1="${f1(Y(0))}" x2="${R}" y2="${f1(Y(0))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${f1(X(0))}" y1="${Tp}" x2="${f1(X(0))}" y2="${B}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('x', R + 6, Y(0) + 4, P.muted, P.fsAxis, 'start'));
  if (yLetter) o.push(txt('y', X(0) + 6, Tp + 4, P.muted, P.fsAxis, 'start'));
  return { X, Y, o };
}

// Samples f on [a, b]; samples outside yr lift the pen, so a curve leaving
// the frame stops at its edge instead of running over the labels.
function path(fn, a, b, X, Y, yr, n = 48) {
  const p = [];
  let pen = false;
  for (let i = 0; i <= n; i += 1) {
    const x = a + (b - a) * i / n, y = fn(x);
    if (y < yr[0] || y > yr[1]) { pen = false; continue; }
    p.push(`${pen ? 'L' : 'M'}${f1(X(x))},${f1(Y(y))}`);
    pen = true;
  }
  return p.join(' ');
}
const curve = (d, col, w) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}"/>`;
const dot = (x, y, P, filled, col) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${P.rPoint}" fill="${filled ? col : P.rFill}" stroke="${col}" stroke-width="${P.wPoint}"/>`;
const svgOut = (W, H, body) => ({ w: W, h: H, body });

// ---------------------------------------------------------------- monotone
// The curve is split at the turning point and coloured by direction; one
// short arrow on each branch points the way x moves. The intervals repeat
// under the plot as coloured bars on an x-line, because increase / decrease
// is a statement about x-values.
function monotone(spec, P) {
  const W = 520, H = 400, xr = spec.xRange, yr = spec.yRange, f = spec.f, t = spec.turn.x;
  const { X, Y, o } = frame(P, xr, yr, [40, 480, 30, 290], 1, true);
  const id = spec.idPrefix || 'fp-mono';
  o.unshift(`<defs><marker id="${id}-inc" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${P.f}"/></marker>` +
    `<marker id="${id}-dec" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${P.bad}"/></marker></defs>`);
  o.push(curve(path(f, spec.from, t, X, Y, yr, 40), P.bad, P.wResult));
  o.push(curve(path(f, t, spec.to, X, Y, yr, 40), P.f, P.wResult));
  spec.arrowAt.forEach((x, i) => {
    const d = 0.08, col = i ? P.f : P.bad;
    o.push(`<line x1="${f1(X(x - d))}" y1="${f1(Y(f(x - d)))}" x2="${f1(X(x + d))}" y2="${f1(Y(f(x + d)))}" stroke="${col}" stroke-width="${P.wResult}" marker-end="url(#${id}-${i ? 'inc' : 'dec'})"/>`);
  });
  const ty = f(t);
  o.push(dot(X(t), Y(ty), P, false, P.r));
  o.push(txt(spec.turn.label, X(t) + 10, Y(ty) + 22, P.r, P.fsLabel, 'start', 700));
  o.push(txt(spec.fallsLabel || 'falls', X(-spec.wordAt + t) + 10, Y(f(-spec.wordAt + t)) - 4, P.bad, P.fsLabel, 'start', 700));
  o.push(txt(spec.risesLabel || 'rises', X(spec.wordAt + t) - 10, Y(f(spec.wordAt + t)) - 4, P.f, P.fsLabel, 'end', 700));
  if (spec.curveLabel) o.push(txt(spec.curveLabel.text, X(spec.curveLabel.x), Y(spec.curveLabel.y), P.text, P.fsTitle, 'end', 700));
  const yb = 322;
  o.push(txt(spec.intervalsNote || 'the intervals are x-values:', 40, yb - 8, P.muted, P.fsNote, 'start', 600));
  o.push(`<line x1="${X(spec.from)}" y1="${yb + 6}" x2="${X(t) - 3}" y2="${yb + 6}" stroke="${P.bad}" stroke-width="5" stroke-linecap="round"/>`);
  o.push(`<line x1="${X(t) + 3}" y1="${yb + 6}" x2="${X(spec.to)}" y2="${yb + 6}" stroke="${P.f}" stroke-width="5" stroke-linecap="round"/>`);
  o.push(`<circle cx="${f1(X(t))}" cy="${yb + 6}" r="4" fill="#fff" stroke="${P.r}" stroke-width="2"/>`);
  o.push(txt(spec.decText, X((spec.from + t) / 2), yb + 26, P.bad, P.fsLabel, 'middle', 700));
  o.push(txt(spec.incText, X((t + spec.to) / 2), yb + 26, P.f, P.fsLabel, 'middle', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 14, P.text, P.fsCaption, 'middle', 600));
  return svgOut(W, H, o.join(''));
}

// ---------------------------------------------------------------- extrema
// Local extrema are hollow (amber), absolute ones filled (navy). The absolute
// values are computed from the curve at the interval ends, so the labels
// cannot disagree with the dots.
function extrema(spec, P) {
  const W = 520, H = 400, xr = spec.xRange, yr = spec.yRange, f = spec.f, [a, b] = spec.domain;
  const { X, Y, o } = frame(P, xr, yr, [40, 480, 24, 330], 1, true);
  o.push(curve(path(f, a, b, X, Y, yr, 40), P.f, P.wResult));
  spec.local.forEach(({ x, label, below }) => {
    o.push(dot(X(x), Y(f(x)), P, false, P.r));
    o.push(txt(label, X(x), Y(f(x)) + (below ? 22 : -12), P.r, P.fsLabel, 'middle', 700));
  });
  const ends = [[a, `absolute ${f(a) < f(b) ? 'min' : 'max'} ${neg(f(a).toFixed(2))}`, 'start'], [b, `absolute ${f(b) > f(a) ? 'max' : 'min'} ${neg(f(b).toFixed(2))}`, 'end']];
  ends.forEach(([x, lab, an]) => {
    o.push(dot(X(x), Y(f(x)), P, true, P.g));
    o.push(txt(lab, X(x) + (an === 'start' ? 10 : -10), Y(f(x)) + 4, P.g, P.fsLabel, an, 700));
  });
  if (spec.title) o.push(txt(spec.title, X(xr[0] + 0.2), Y(yr[1] - 0.4), P.text, P.fsTitle, 'start', 700));
  const ly = 350;
  o.push(`<circle cx="52" cy="${ly - 4}" r="6" fill="${P.rFill}" stroke="${P.r}" stroke-width="2"/>`);
  o.push(txt(spec.localNote || 'peak and valley: highest / lowest among nearby values', 64, ly, P.text, P.fsNote, 'start', 500));
  o.push(`<circle cx="52" cy="${ly + 14}" r="6" fill="${P.g}"/>`);
  o.push(txt(spec.absNote || 'endpoints: highest / lowest on the whole interval', 64, ly + 18, P.text, P.fsNote, 'start', 500));
  return svgOut(W, H, o.join(''));
}

// ---------------------------------------------------------------- sum
// At x0 the bar for f(x0) starts on the axis and the bar for g(x0) starts on
// top of it, so the stack ends exactly at the f + g curve.
function sum(spec, P) {
  const W = 520, H = 420, xr = spec.xRange, yr = spec.yRange, f = spec.f, g = spec.g, s = (x) => f(x) + g(x), x0 = spec.x0;
  const { X, Y, o } = frame(P, xr, yr, [40, 470, 20, 340], spec.yStep || 2, false);
  o.push(curve(path(f, xr[0], xr[1], X, Y, yr), P.f, P.wCurve));
  o.push(curve(path(g, xr[0], xr[1], X, Y, yr), P.g, P.wCurve));
  o.push(curve(path(s, xr[0], xr[1], X, Y, yr), P.r, P.wResult));
  const bx = X(x0), fv = f(x0), gv = g(x0), sv = fv + gv;
  o.push(`<line x1="${bx}" y1="${Y(0)}" x2="${bx}" y2="${Y(sv)}" stroke="${P.muted}" stroke-dasharray="3 3"/>`);
  o.push(`<rect x="${bx + 14}" y="${f1(Y(fv))}" width="16" height="${f1(Y(0) - Y(fv))}" fill="${P.f}" opacity="0.85"/>`);
  o.push(`<rect x="${bx + 14}" y="${f1(Y(sv))}" width="16" height="${f1(Y(fv) - Y(sv))}" fill="${P.g}" opacity="0.85"/>`);
  o.push(txt(`f(${x0}) = ${fv}`, bx + 36, Y(fv / 2) + 4, P.f, P.fsLabel, 'start', 700));
  o.push(txt(`+ g(${x0}) = ${gv}`, bx + 36, Y(fv + gv / 2) + 4, P.g, P.fsLabel, 'start', 700));
  o.push(dot(bx, Y(sv), P, false, P.r));
  o.push(txt(`(f + g)(${x0}) = ${sv}`, bx - 10, Y(sv) - 10, P.r, P.fsLabel, 'end', 700));
  o.push(`<circle cx="${f1(bx)}" cy="${f1(Y(fv))}" r="4" fill="${P.f}"/><circle cx="${f1(bx)}" cy="${f1(Y(gv))}" r="4" fill="${P.g}"/>`);
  o.push(txt(spec.fLabel.text, X(spec.fLabel.x), Y(f(spec.fLabel.x)) - 8, P.f, P.fsLabel, 'start', 700));
  o.push(txt(spec.gLabel.text, X(spec.gLabel.x), Y(g(spec.gLabel.x)) + 20, P.g, P.fsLabel, 'start', 700));
  o.push(txt(spec.sumLabel.text, X(spec.sumLabel.x), Y(spec.sumLabel.y), P.r, P.fsTitle, 'end', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 22, P.text, P.fsCaption, 'middle', 600));
  return svgOut(W, H, o.join(''));
}

// ---------------------------------------------------------------- product
function product(spec, P) {
  const W = 520, H = 420, xr = spec.xRange, yr = spec.yRange, f = spec.f, g = spec.g, p = (x) => f(x) * g(x);
  const { X, Y, o } = frame(P, xr, yr, [40, 470, 20, 340], spec.yStep || 2, false);
  o.push(curve(path(f, xr[0], xr[1], X, Y, yr), P.f, P.wCurve));
  o.push(curve(path(g, xr[0], xr[1], X, Y, yr), P.g, P.wCurve));
  o.push(curve(path(p, xr[0], xr[1], X, Y, yr), P.r, P.wResult));
  spec.zeros.forEach((z) => {
    o.push(`<line x1="${f1(X(z.x))}" y1="20" x2="${f1(X(z.x))}" y2="340" stroke="${P.r}" stroke-dasharray="4 4" opacity="0.6"/>`);
    o.push(dot(X(z.x), Y(0), P, false, P.r));
    const col = z.factor === 'g' ? P.g : P.f;
    o.push(txt(z.label, X(z.x) + (z.left ? -8 : 8), Y(0) + (z.dy || 22), col, P.fsLabel, z.left ? 'end' : 'start', 700));
  });
  o.push(txt(spec.fLabel.text, X(spec.fLabel.x), Y(f(spec.fLabel.x)) + 18, P.f, P.fsLabel, 'end', 700));
  o.push(txt(spec.gLabel.text, X(spec.gLabel.x), Y(g(spec.gLabel.x)) - 8, P.g, P.fsLabel, 'start', 700));
  o.push(txt(spec.productLabel.text, X(spec.productLabel.x), Y(spec.productLabel.y) + 22, P.r, P.fsTitle, 'middle', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 22, P.text, P.fsCaption, 'middle', 600));
  return svgOut(W, H, o.join(''));
}

// ---------------------------------------------------------------- quotient
// The simplified curve is drawn in two pieces with a gap at the excluded x,
// and an open circle marks the missing point.
function quotient(spec, P) {
  const W = 520, H = 420, xr = spec.xRange, yr = spec.yRange, q = spec.q, h = spec.hole.x, hy = q(h);
  const { X, Y, o } = frame(P, xr, yr, [40, 470, 20, 340], spec.yStep || 1, false);
  o.push(`<line x1="${f1(X(h))}" y1="20" x2="${f1(X(h))}" y2="340" stroke="${P.bad}" stroke-dasharray="4 4" opacity="0.6"/>`);
  o.push(curve(path(q, xr[0], h - 0.06, X, Y, yr), P.r, P.wResult));
  o.push(curve(path(q, h + 0.06, xr[1], X, Y, yr), P.r, P.wResult));
  o.push(`<circle cx="${f1(X(h))}" cy="${f1(Y(hy))}" r="7" fill="#fff" stroke="${P.bad}" stroke-width="2.4"/>`);
  o.push(txt(spec.hole.label, X(h) - 12, Y(hy) - 4, P.bad, P.fsLabel, 'end', 700));
  if (spec.note) o.push(txt(spec.note, X(h) + 8, 36, P.bad, P.fsLabel, 'start', 700));
  o.push(txt(spec.curveLabel.text, X(spec.curveLabel.x), Y(q(spec.curveLabel.x)) + 22, P.r, P.fsTitle, 'end', 700));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 22, P.text, P.fsCaption, 'middle', 600));
  return svgOut(W, H, o.join(''));
}

// ---------------------------------------------------------------- domain
// Rows are number lines over spec.range. An interval end inside the range is
// a filled dot (closed); an end at the range edge is an arrowhead (unbounded).
// The last row is the intersection, drawn thicker; its ticks are numbered.
function domain(spec, P) {
  const W = 520, [lo, hi] = spec.range, L = 70, R = 470, X = (x) => L + (x - lo) / (hi - lo) * (R - L);
  const n = spec.rows.length, H = 70 + n * 60;
  const o = [];
  spec.rows.forEach((row, i) => {
    const y = 60 + i * 60, col = row.color === 'g' ? P.g : row.color === 'r' ? P.r : P.f, last = i === n - 1;
    o.push(`<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" stroke="${P.axis}" stroke-width="1.2"/>`);
    for (let v = lo; v <= hi; v += 1) {
      o.push(`<line x1="${f1(X(v))}" y1="${y - 4}" x2="${f1(X(v))}" y2="${y + 4}" stroke="${P.axis}"/>`);
      if (last) o.push(txt(v < 0 ? `−${-v}` : String(v), X(v), y + 20, P.muted, P.fsAxis, 'middle', 500));
    }
    const a = row.from === null ? lo : row.from, b = row.to === null ? hi : row.to;
    o.push(`<line x1="${f1(row.from === null ? L : X(a))}" y1="${y}" x2="${f1(row.to === null ? R : X(b))}" y2="${y}" stroke="${col}" stroke-width="${last ? 7 : 5}"/>`);
    o.push(row.from === null ? `<path d="M${L - 2},${y} l10,-7 v14 z" fill="${col}"/>` : `<circle cx="${f1(X(a))}" cy="${y}" r="6" fill="${col}"/>`);
    o.push(row.to === null ? `<path d="M${R + 2},${y} l-10,-7 v14 z" fill="${col}"/>` : `<circle cx="${f1(X(b))}" cy="${y}" r="6" fill="${col}"/>`);
    o.push(txt(row.label, L, y - 14, col, P.fsLabel, 'start', 700));
    if (row.tag) o.push(txt(row.tag.text, X(row.tag.x), y - 14, col, last ? P.fsTitle : P.fsLabel, 'middle', 700));
  });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 14, P.text, P.fsCaption, 'middle', 600));
  return svgOut(W, H, o.join(''));
}

// ---------------------------------------------------------------------------
const KINDS = { monotone, extrema, sum, product, quotient, domain };

export default function renderFunctionPlot(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `functionPlot: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderFunctionPlot, C as functionPlotDefaults };
