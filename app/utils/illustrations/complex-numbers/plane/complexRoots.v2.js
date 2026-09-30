// complexRoots.v2 - roots in the complex plane, adding a root at the origin.
//
// renderComplexRootsV2(spec) -> SVG string. Docs: complexRoots.v2.md beside it.
//
// Chains complexRoots.js (process v10 rule 11): that file is not edited. It
// draws roots on a circle only; this one adds
//   withOrigin   the circle roots of complexRoots' `roots`, plus a solution at
//                z = 0 drawn as a filled point, and a legend separating the
//                r = 0 solution from the r = 1 ones
//
// Palette: the page theme ($meta.palette.$pageTheme in the complex-numbers
// figure registry), the same defaults as complexRoots (copied, not imported,
// like the other chained files: each file stands alone).

const C = {
  root: '#B45309', rootFill: '#FDF3E3', circle: '#06357A', pair: '#2563EB',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCircle: 1.8, wRadius: 1.2, wAxis: 1.4, wRoot: 2.2, wPair: 1, rRoot: 7, unit: 150, rOrigin: 8, rLegend: 6,
  fsAxis: 12, fsTick: 11, fsValue: 13, fsArg: 11, fsLegend: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- withOrigin
// Plane, circle, radii, conjugate links and root labels follow complexRoots'
// `roots` exactly (same coordinates), so the two kinds read alike on a page.
// The origin point is drawn after the radii so it sits on top of them. The
// legend block moves below the plot (y 414..454) to clear the lower labels.
function withOrigin(spec, P) {
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
  o.push(`<circle cx="${cx}" cy="${cy}" r="${P.rOrigin}" fill="${P.root}" stroke="${P.root}" stroke-width="${P.wRoot}"/>`);
  o.push(txt(spec.originLabel || '0', cx + 10, cy + 23, P.root, P.fsValue, 'start', 700));
  o.push(`<circle cx="82" cy="414" r="${P.rLegend}" fill="${P.rootFill}" stroke="${P.root}" stroke-width="2"/>`);
  o.push(txt(spec.circleNote || `r = 1: ${spec.roots.length} solutions on the unit circle`, 102, 418, P.root, P.fsLegend, 'start', 500));
  o.push(`<circle cx="82" cy="432" r="${P.rLegend}" fill="${P.root}"/>`);
  o.push(txt(spec.originNote || 'r = 0: the solution z = 0, off the circle', 102, 436, P.root, P.fsLegend, 'start', 500));
  if (paired) {
    o.push(`<line x1="70" y1="450" x2="94" y2="450" stroke="${P.pair}" stroke-width="1.4" stroke-dasharray="2 3"/>`);
    o.push(txt(spec.pairNote || 'a root and its conjugate: mirror images across the real axis', 102, 454, P.pair, P.fsLegend, 'start', 500));
  }
  const lines = spec.captionLines || [];
  const h = spec.height || 484 + 20 * Math.max(lines.length, 1) - 4;
  lines.forEach((l, i) => o.push(txt(l, W / 2, 484 + 20 * i, P.text, P.fsCaption, 'middle', 600)));
  return { w: W, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { withOrigin };

export default function renderComplexRootsV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `complexRoots.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `For 'roots' use complexRoots.js; add a new one in a further file per process v10 rule 11.`
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

export { renderComplexRootsV2, C as complexRootsV2Defaults };
