// lineTest - line tests on graphs: does a line meet the curve more than once?
//
// renderLineTest(spec) -> SVG string. Docs: lineTest.md beside it.
//
// Scene types (spec.kind):
//   vertical   panels side by side, each a curve with dashed vertical lines
//              and the points where they meet it; a panel whose lines each
//              meet the curve at most once passes (amber), a panel with a line
//              meeting it twice fails (red) - the vertical line test
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry) - curve in site blue, test lines in brand navy, crossings amber
// when the test passes and in the negation red when it fails.

const C = {
  curve: '#2563EB', line: '#06357A', hit: '#B45309', hitFill: '#FDF3E3', bad: '#C0392B', badFill: '#FDECEA',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCurve: 2.4, wLine: 1.4, wAxis: 1.3, wHit: 2.2, rHit: 6,
  panelW: 260, panelH: 240, gap: 20, unit: 40, extent: 3,
  fsTitle: 13, fsAxis: 11, fsVerdict: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// A curve is either { type: 'graph', f, from, to } - the graph of y = f(x) -
// or { type: 'circle', r } - the circle x^2 + y^2 = r^2. Each gives its sample
// points and the y-values where the vertical line x = c meets it.
function curvePoints(c, R) {
  if (c.type === 'circle') {
    const pts = [];
    for (let i = 0; i <= 120; i += 1) { const t = 2 * Math.PI * i / 120; pts.push([c.r * Math.cos(t), c.r * Math.sin(t)]); }
    return pts;
  }
  const pts = [];
  for (let i = 0; i <= 80; i += 1) {
    const x = c.from + (c.to - c.from) * i / 80, y = c.f(x);
    if (y <= R && y >= -R) pts.push([x, y]);
  }
  return pts;
}
function crossings(c, x) {
  if (c.type === 'circle') {
    if (Math.abs(x) > c.r) return [];
    const h = Math.sqrt(c.r * c.r - x * x);
    return h < 1e-9 ? [0] : [h, -h];
  }
  return x >= c.from && x <= c.to ? [c.f(x)] : [];
}

// ---------------------------------------------------------------- vertical
// Crossings are computed from the curve, never listed in the spec, so the
// pass/fail colour follows from the picture: a panel fails as soon as one of
// its lines meets the curve twice.
function panel(p, x0, P) {
  const R = P.extent, u = P.unit, top = 44, cx = x0 + P.panelW / 2, cy = top + P.panelH / 2;
  const X = (x) => cx + x * u, Y = (y) => cy - y * u;
  const hits = p.lines.map((lx) => crossings(p.curve, lx).map((y) => [lx, y]));
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
  const pts = curvePoints(p.curve, R);
  o.push(`<path d="${pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f1(X(x))},${f1(Y(y))}`).join(' ')}" fill="none" stroke="${P.curve}" stroke-width="${P.wCurve}"/>`);
  p.lines.forEach((lx) => o.push(`<line x1="${X(lx)}" y1="${Y(R)}" x2="${X(lx)}" y2="${Y(-R)}" stroke="${P.line}" stroke-width="${P.wLine}" stroke-dasharray="5 4"/>`));
  hits.flat().forEach(([x, y]) => o.push(`<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="${P.rHit}" fill="${ok ? P.hitFill : P.badFill}" stroke="${ok ? P.hit : P.bad}" stroke-width="${P.wHit}"/>`));
  o.push(txt(p.verdict, cx, top + P.panelH + 26, ok ? P.hit : P.bad, P.fsVerdict, 'middle', 700));
  return o.join('');
}

function vertical(spec, P) {
  const n = spec.panels.length;
  const W = spec.width || n * P.panelW + (n - 1) * P.gap, H = spec.height || 44 + P.panelH + 70;
  const o = spec.panels.map((p, i) => panel(p, i * (P.panelW + P.gap), P));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 10, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { vertical };

export default function renderLineTest(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `lineTest: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderLineTest, C as lineTestDefaults };
