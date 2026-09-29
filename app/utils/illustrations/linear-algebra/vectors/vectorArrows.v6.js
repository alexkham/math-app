// vectorArrows.v6 - the solution set of a 2-unknown system as a shifted copy
// of the null space.
//
// Sixth file, not an edit: rule 11 - v1 to v5 had all shipped before this was
// needed.
//
//   vectorArrows.js     copies               vectors
//   vectorArrows.v2.js  sum / difference     vectors/basic-operations, magnitude
//   vectorArrows.v3.js  units                vectors/magnitude
//   vectorArrows.v4.js  angle / signs        vectors/dot-product
//   vectorArrows.v5.js  area / orientation   vectors/cross-product
//   vectorArrows.v6.js  solutionSet          linear-systems/homogeneous
//
// renderVectorArrowsV6(spec) -> SVG string. Docs: vectorArrows.v6.md beside it.
//
// Palette: the page theme ($meta.palette.$pageTheme) - particular solution in
// site blue, the null-space vector in brand navy, the solution line in site
// amber, the null-space line in brand slate-blue.

const C = {
  particular: '#2563EB', homogeneous: '#06357A', solution: '#B45309', nullspace: '#5A7299',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wVector: 2.6, wMoved: 2, wSolution: 2.6, wNull: 2, wGrid: 1, wAxis: 1.4,
  unit: 40, head: 11, rDot: 4,
  fsLabel: 13, fsLine: 12, fsNote: 11, fsCaption: 13, fsOrigin: 12,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ------------------------------------------------------------ solutionSet
// Both lines satisfy n . x = c (the null space with c = 0), clipped to the
// grid box. The particular solution xp and one null-space vector xh are drawn
// from O; xh is drawn again from the tip of xp (dashed), landing on the
// solution line at xp + xh. The renderer checks that xp is on the solution
// line and xh on the null line, so a spec cannot draw a false picture.
function solutionSet(spec, P) {
  const [xmin, xmax] = spec.xRange || [-4, 6], [ymin, ymax] = spec.yRange || [-2, 4];
  const U = P.unit, X0 = 30 - xmin * U, Y0 = 30 + ymax * U;
  const px = (x) => X0 + x * U, py = (y) => Y0 - y * U;
  const [n1, n2] = spec.normal, c = spec.c;
  const [xpX, xpY] = spec.xp, [xhX, xhY] = spec.xh;
  if (Math.abs(n1 * xpX + n2 * xpY - c) > 1e-9) throw new Error('vectorArrows.v6: xp is not on the solution line n . x = c');
  if (Math.abs(n1 * xhX + n2 * xhY) > 1e-9) throw new Error('vectorArrows.v6: xh is not in the null space n . x = 0');
  const o = [];
  for (let i = xmin; i <= xmax; i += 1) o.push(`<line x1="${px(i)}" y1="${py(ymin)}" x2="${px(i)}" y2="${py(ymax)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  for (let j = ymin; j <= ymax; j += 1) o.push(`<line x1="${px(xmin)}" y1="${py(j)}" x2="${px(xmax)}" y2="${py(j)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  o.push(`<line x1="${px(xmin)}" y1="${py(0)}" x2="${px(xmax)}" y2="${py(0)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(ymin)}" x2="${px(0)}" y2="${py(ymax)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('O', px(0) - 10, py(0) + 16, P.muted, P.fsOrigin, 'middle', 500));

  // n1 x + n2 y = k, clipped to the box (n2 != 0: solve for y along x)
  const line = (k, col, w, dash) => {
    const yAt = (x) => (k - n1 * x) / n2, xAt = (y) => (k - n2 * y) / n1;
    const pts = [];
    [xmin, xmax].forEach((x) => { const y = yAt(x); if (y >= ymin - 1e-9 && y <= ymax + 1e-9) pts.push([x, y]); });
    if (n1 !== 0) [ymin, ymax].forEach((y) => { const x = xAt(y); if (x > xmin + 1e-9 && x < xmax - 1e-9) pts.push([x, y]); });
    const [a, b] = pts;
    o.push(`<line x1="${f1(px(a[0]))}" y1="${f1(py(a[1]))}" x2="${f1(px(b[0]))}" y2="${f1(py(b[1]))}" stroke="${col}" stroke-width="${w}"` +
      `${dash ? ` stroke-dasharray="${dash}"` : ''}/>`);
  };
  line(0, P.nullspace, P.wNull, '7 5');
  line(c, P.solution, P.wSolution);

  const arrow = (x1, y1, x2, y2, col, w, dash) => {
    const a = px(x1), b = py(y1), cc = px(x2), d = py(y2);
    const ang = Math.atan2(d - b, cc - a), h = P.head, ex = cc - 8 * Math.cos(ang), ey = d - 8 * Math.sin(ang);
    o.push(`<line x1="${f1(a)}" y1="${f1(b)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"` +
      `${dash ? ` stroke-dasharray="${dash}"` : ''}/>` +
      `<path d="M ${f1(cc)} ${f1(d)} L ${f1(cc - h * Math.cos(ang - 0.38))} ${f1(d - h * Math.sin(ang - 0.38))} ` +
      `L ${f1(cc - h * Math.cos(ang + 0.38))} ${f1(d - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>`);
  };
  arrow(0, 0, xpX, xpY, P.particular, P.wVector);
  arrow(0, 0, xhX, xhY, P.homogeneous, P.wVector);
  arrow(xpX, xpY, xpX + xhX, xpY + xhY, P.homogeneous, P.wMoved, '6 4');
  o.push(`<circle cx="${f1(px(xpX + xhX))}" cy="${f1(py(xpY + xhY))}" r="${P.rDot}" fill="${P.solution}"/>`);
  o.push(`<circle cx="${f1(px(xpX))}" cy="${f1(py(xpY))}" r="${P.rDot}" fill="${P.particular}"/>`);

  const L = spec.labels || {};
  const put = (key, col, size) => { if (L[key]) o.push(txt(L[key][0], px(L[key][1]), py(L[key][2]) + (L[key][4] || 0), col, size, L[key][3] || 'start')); };
  put('xp', P.particular, P.fsLabel);
  put('xh', P.homogeneous, P.fsLabel);
  put('x', P.solution, P.fsLabel);
  put('solutionLine', P.solution, P.fsLine);
  put('nullLine', P.nullspace, P.fsLine);

  const w = spec.width || px(xmax) + 30;
  let y = py(ymin) + 32;
  (spec.notes || []).forEach((t) => { o.push(txt(t, 30, y, P.text, P.fsNote, 'start', 400)); y += 16; });
  const h = spec.height || y + 18;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 12, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { solutionSet };

export default function renderVectorArrowsV6(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows.v6: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderVectorArrowsV6, C as vectorArrowsV6Defaults };
