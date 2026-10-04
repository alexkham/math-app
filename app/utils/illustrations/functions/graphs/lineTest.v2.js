// lineTest.v2 - the horizontal line test: does a horizontal line meet the graph more than once?
//
// renderLineTestV2(spec) -> SVG string. Docs: lineTest.v2.md beside it.
//
// Chains lineTest.js (process v10 rule 11): that file is not edited. Its
// `vertical` kind tests "is this a function"; this one adds
//   horizontal   panels side by side, each the graph of y = f(x) with dashed
//                horizontal lines and the points where they meet it; a panel
//                whose lines each meet the graph at most once passes (amber,
//                one-to-one), a panel with a line meeting it twice fails (red)
//
// Palette: the page theme, the same defaults as lineTest (copied, not
// imported, like the other chained files).

const C = {
  curve: '#2563EB', line: '#06357A', hit: '#B45309', hitFill: '#FDF3E3', bad: '#C0392B', badFill: '#FDECEA',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCurve: 2.4, wLine: 1.4, wAxis: 1.3, wHit: 2.2, rHit: 6,
  panelW: 260, panelH: 240, gap: 20, unit: 24, extent: 5,
  fsTitle: 13, fsAxis: 11, fsLineLabel: 11, fsVerdict: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const num = (v) => (v < 0 ? `−${-v}` : String(v));

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// x-values in [from, to] where f(x) = c: sign changes on a fine grid, then
// bisection. Computed, never listed in the spec, so the verdict colour
// follows from the picture.
function solve(f, from, to, c) {
  const xs = [], n = 400, g = (x) => f(x) - c;
  for (let i = 0; i < n; i += 1) {
    let a = from + (to - from) * i / n, b = from + (to - from) * (i + 1) / n;
    const ga = g(a), gb = g(b);
    if (ga === 0) { xs.push(a); continue; }
    if (ga * gb > 0) continue;
    for (let k = 0; k < 50; k += 1) { const m = (a + b) / 2; if (g(a) * g(m) <= 0) b = m; else a = m; }
    xs.push((a + b) / 2);
  }
  if (g(to) === 0) xs.push(to);
  return xs.filter((x, i) => i === 0 || Math.abs(x - xs[i - 1]) > 1e-6);
}

// ---------------------------------------------------------------- horizontal
function panel(p, x0, P) {
  const R = P.extent, u = P.unit, top = 44, cx = x0 + P.panelW / 2, cy = top + P.panelH / 2;
  const X = (x) => cx + x * u, Y = (y) => cy - y * u;
  const hits = p.lines.map((ly) => solve(p.f, p.from, p.to, ly).map((x) => [x, ly]));
  const ok = hits.every((h) => h.length <= 1);
  const o = [];
  o.push(txt(p.title, cx, 24, P.text, P.fsTitle, 'middle', 700));
  for (let v = -R; v <= R; v += 1) {
    if (!v) continue;
    o.push(`<line x1="${X(v)}" y1="${Y(R)}" x2="${X(v)}" y2="${Y(-R)}" stroke="${P.grid}"/>`);
    o.push(`<line x1="${X(-R)}" y1="${Y(v)}" x2="${X(R)}" y2="${Y(v)}" stroke="${P.grid}"/>`);
  }
  o.push(`<line x1="${X(-R)}" y1="${cy}" x2="${X(R)}" y2="${cy}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${cx}" y1="${Y(R)}" x2="${cx}" y2="${Y(-R)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('x', X(R) + 6, cy + 4, P.muted, P.fsAxis, 'start', 600));
  o.push(txt('y', cx + 6, Y(R) + 2, P.muted, P.fsAxis, 'start', 600));
  const pts = [];
  for (let i = 0; i <= 120; i += 1) {
    const x = p.from + (p.to - p.from) * i / 120, y = p.f(x);
    if (y <= R && y >= -R) pts.push([x, y]);
  }
  o.push(`<path d="${pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f1(X(x))},${f1(Y(y))}`).join(' ')}" fill="none" stroke="${P.curve}" stroke-width="${P.wCurve}"/>`);
  p.lines.forEach((ly) => {
    o.push(`<line x1="${X(-R)}" y1="${f1(Y(ly))}" x2="${X(R)}" y2="${f1(Y(ly))}" stroke="${P.line}" stroke-width="${P.wLine}" stroke-dasharray="5 4"/>`);
    o.push(txt(`y = ${num(ly)}`, X(R) - 2, Y(ly) - 5, P.line, P.fsLineLabel, 'end', 600));
  });
  hits.flat().forEach(([x, y]) => o.push(`<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="${P.rHit}" fill="${ok ? P.hitFill : P.badFill}" stroke="${ok ? P.hit : P.bad}" stroke-width="${P.wHit}"/>`));
  o.push(txt(p.verdict, cx, top + P.panelH + 26, ok ? P.hit : P.bad, P.fsVerdict, 'middle', 700));
  return o.join('');
}

function horizontal(spec, P) {
  const n = spec.panels.length;
  const W = spec.width || n * P.panelW + (n - 1) * P.gap, H = spec.height || 44 + P.panelH + 70;
  const o = spec.panels.map((p, i) => panel(p, i * (P.panelW + P.gap), P));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 10, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { horizontal };

export default function renderLineTestV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `lineTest.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `For the vertical line test use lineTest.js; add new kinds in a further file per process v10 rule 11.`
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

export { renderLineTestV2, C as lineTestV2Defaults };
