// vectorArrows.v5 - the cross product drawn in the plane of its two factors:
// its length as an area, its direction as out of or into the page.
//
// Fifth file, not an edit: rule 11 - v1 to v4 had all shipped before these
// were needed.
//
//   vectorArrows.js     copies               vectors
//   vectorArrows.v2.js  sum / difference     vectors/basic-operations, magnitude
//   vectorArrows.v3.js  units                vectors/magnitude
//   vectorArrows.v4.js  angle / signs        vectors/dot-product
//   vectorArrows.v5.js  area / orientation   vectors/cross-product
//
// renderVectorArrowsV5(spec) -> SVG string. Docs: vectorArrows.v5.md beside it.
//
// Palette: the page theme ($meta.palette.$pageTheme): a site blue, b brand
// navy, area / angle / curl in site amber, height and the out-of-page symbol
// in brand slate-blue.

const C = {
  a: '#2563EB', b: '#06357A', angle: '#B45309', third: '#5A7299',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8', divider: '#CBD5E1', surface: '#FFFFFF',

  wVector: 2.6, wHeight: 2, wArc: 1.8, wCurl: 2, wGrid: 1, wAxis: 1.4, wSymbol: 2,
  unit: 44, head: 11, arcR: 30, areaFill: 0.12, curlR: 54, symbolR: 11,
  panelW: 270, panelUnit: 40,
  fsLabel: 13, fsTheta: 15, fsArea: 15, fsHeight: 12, fsName: 14, fsSmall: 11, fsCurl: 12,
  fsNote: 11, fsCaption: 13, fsOrigin: 12,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

function arrow(a, b, c, d, col, w, P) {
  const ang = Math.atan2(d - b, c - a), h = P.head;
  const ex = c - 8 * Math.cos(ang), ey = d - 8 * Math.sin(ang);
  return `<line x1="${f1(a)}" y1="${f1(b)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<path d="M ${f1(c)} ${f1(d)} L ${f1(c - h * Math.cos(ang - 0.38))} ${f1(d - h * Math.sin(ang - 0.38))} ` +
    `L ${f1(c - h * Math.cos(ang + 0.38))} ${f1(d - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>`;
}

function footer(o, spec, w, y0, P) {
  let y = y0;
  (spec.notes || []).forEach((n) => { o.push(txt(n, spec.noteX || 40, y, P.text, P.fsNote, 'start', 400)); y += 16; });
  const h = spec.height || y + 16;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 12, P.text, P.fsCaption));
  return h;
}

// ------------------------------------------------------------------- area
// a lies along the x-axis so the height is vertical: the dashed height from
// b's tip to the axis, with its right-angle mark, is base x height made
// visible. The area label is computed as |a1 b2 - a2 b1|, the length of the
// 3D cross product with zero third components.
function area(spec, P) {
  const nx = spec.nx || 7, ny = spec.ny || 4, U = P.unit;
  const X0 = 40, Y0 = 40 + ny * U, px = (x) => X0 + x * U, py = (y) => Y0 - y * U;
  const [ax, ay] = spec.a, [bx, by] = spec.b;
  const cross = Math.abs(ax * by - ay * bx);
  const o = [];
  for (let i = 0; i <= nx; i += 1) o.push(`<line x1="${px(i)}" y1="${py(0)}" x2="${px(i)}" y2="${py(ny)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  for (let j = 0; j <= ny; j += 1) o.push(`<line x1="${px(0)}" y1="${py(j)}" x2="${px(nx)}" y2="${py(j)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(nx)}" y2="${py(0)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(0)}" y2="${py(ny)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('O', px(0) - 12, py(0) + 16, P.muted, P.fsOrigin, 'middle', 500));
  o.push(`<path d="M ${px(0)} ${py(0)} L ${px(ax)} ${py(ay)} L ${px(ax + bx)} ${py(ay + by)} L ${px(bx)} ${py(by)} Z" ` +
    `fill="${P.angle}" fill-opacity="${P.areaFill}" stroke="${P.angle}" stroke-width="1" stroke-opacity="0.5"/>`);
  // height: from b's tip straight down to a's line (a is horizontal)
  o.push(`<line x1="${px(bx)}" y1="${py(by)}" x2="${px(bx)}" y2="${py(ay)}" stroke="${P.third}" stroke-width="${P.wHeight}" stroke-dasharray="6 4"/>`);
  o.push(`<path d="M ${px(bx) + 10} ${py(ay)} L ${px(bx) + 10} ${py(ay) - 10} L ${px(bx)} ${py(ay) - 10}" fill="none" stroke="${P.third}" stroke-width="1.4"/>`);
  const ta = Math.atan2(ay, ax), tb = Math.atan2(by, bx), r = P.arcR;
  o.push(`<path d="M ${f1(px(0) + r * Math.cos(ta))} ${f1(py(0) - r * Math.sin(ta))} A ${r} ${r} 0 0 0 ${f1(px(0) + r * Math.cos(tb))} ${f1(py(0) - r * Math.sin(tb))}" ` +
    `fill="none" stroke="${P.angle}" stroke-width="${P.wArc}"/>`);
  const tm = (ta + tb) / 2;
  o.push(txt('θ', px(0) + (r + 10) * Math.cos(tm) + 3, py(0) - (r + 10) * Math.sin(tm) + 5, P.angle, P.fsTheta));
  o.push(arrow(px(0), py(0), px(ax), py(ay), P.a, P.wVector, P));
  o.push(arrow(px(0), py(0), px(bx), py(by), P.b, P.wVector, P));
  const L = spec.labels || {};
  if (L.a) o.push(txt(L.a[0], px(L.a[1]), py(L.a[2]), P.a, P.fsLabel, L.a[3] || 'middle'));
  if (L.b) o.push(txt(L.b[0], px(L.b[1]), py(L.b[2]), P.b, P.fsLabel, L.b[3] || 'start'));
  if (L.height) o.push(txt(L.height[0], px(L.height[1]), py(L.height[2]), P.third, P.fsHeight, 'start'));
  const at = L.area || [(ax + bx) / 2 + 0.8, (ay + by) / 2 + 0.6];
  o.push(txt(`area ${+cross.toFixed(2)}`, px(at[0]), py(at[1]), P.angle, P.fsArea, 'middle', 700));
  const w = spec.width || px(nx) + 30;
  const h = footer(o, spec, w, Y0 + 50, P);
  return { w, h, body: o.join('') };
}

// ----------------------------------------------------------- orientation
// Two panels, same a and b. Each has a curl arc between them with an
// arrowhead showing the order (first toward second) and the resulting
// symbol: a dot in a circle for out of the page, a cross for into it.
// Counter-clockwise from first to second gives out of the page - the
// right-hand rule with the page's right-handed axes.
function orientation(spec, P) {
  const PW = P.panelW, s = P.panelUnit;
  const [ax, ay] = spec.a, [bx, by] = spec.b;
  const ta = Math.atan2(ay, ax), tb = Math.atan2(by, bx);
  const panels = spec.panels || [
    { first: 'a', name: 'a × b', where: 'out of the page', curl: 'curl from a toward b' },
    { first: 'b', name: 'b × a', where: 'into the page', curl: 'curl from b toward a' },
  ];
  const o = [];
  panels.forEach((pn, i) => {
    const ox = i * PW + 70, oy = 180;
    o.push(arrow(ox, oy, ox + ax * s, oy - ay * s, P.a, P.wVector, P));
    o.push(arrow(ox, oy, ox + bx * s, oy - by * s, P.b, P.wVector, P));
    const r = P.curlR, t1 = Math.min(ta, tb) + 0.12, t2 = Math.max(ta, tb) - 0.12;
    const pt = (t) => [ox + r * Math.cos(t), oy - r * Math.sin(t)];
    const [x1, y1] = pt(t1), [x2, y2] = pt(t2);
    o.push(`<path d="M ${f1(x1)} ${f1(y1)} A ${r} ${r} 0 0 0 ${f1(x2)} ${f1(y2)}" fill="none" stroke="${P.angle}" stroke-width="${P.wCurl}"/>`);
    // the arc runs counter-clockwise from a's side to b's; its head sits at
    // the second factor's end, pointing along the direction of travel
    const toward = pn.first === 'a' ? tb : ta;
    const ccw = toward > (pn.first === 'a' ? ta : tb);
    const tipT = toward === Math.max(ta, tb) ? t2 : t1;
    const dir = ccw ? 1 : -1;
    const [tx, ty] = pt(tipT), tan = [-Math.sin(tipT) * dir, -Math.cos(tipT) * dir], nrm = [-tan[1], tan[0]];
    o.push(`<path d="M ${f1(tx + tan[0] * 9)} ${f1(ty + tan[1] * 9)} L ${f1(tx + nrm[0] * 5)} ${f1(ty + nrm[1] * 5)} ` +
      `L ${f1(tx - nrm[0] * 5)} ${f1(ty - nrm[1] * 5)} Z" fill="${P.angle}"/>`);
    o.push(txt('a', ox + ax * s - 4, oy - ay * s + 20, P.a, P.fsName));
    o.push(txt('b', ox + bx * s + 12, oy - by * s + 4, P.b, P.fsName, 'start'));
    const sx = ox + 150, sy = 70, R = P.symbolR;
    o.push(`<circle cx="${sx}" cy="${sy}" r="${R}" fill="${P.surface}" stroke="${P.third}" stroke-width="${P.wSymbol}"/>`);
    if (ccw) o.push(`<circle cx="${sx}" cy="${sy}" r="3.2" fill="${P.third}"/>`);
    else o.push(`<path d="M ${sx - 6} ${sy - 6} L ${sx + 6} ${sy + 6} M ${sx + 6} ${sy - 6} L ${sx - 6} ${sy + 6}" stroke="${P.third}" stroke-width="${P.wSymbol}"/>`);
    o.push(txt(pn.name, sx, sy + 30, P.third, P.fsName));
    o.push(txt(pn.where, sx, sy + 45, P.third, P.fsSmall, 'middle', 500));
    o.push(txt(pn.curl, ox + 70, oy + 44, P.angle, P.fsCurl));
    o.push(txt(ccw ? 'counter-clockwise' : 'clockwise', ox + 70, oy + 60, P.angle, P.fsSmall, 'middle', 500));
    if (i) o.push(`<line x1="${i * PW - 5}" y1="30" x2="${i * PW - 5}" y2="${oy + 66}" stroke="${P.divider}" stroke-width="1"/>`);
  });
  const w = spec.width || panels.length * PW;
  const h = footer(o, { ...spec, noteX: 20 }, w, 264, P);
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { area, orientation };

export default function renderVectorArrowsV5(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows.v5: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderVectorArrowsV5, C as vectorArrowsV5Defaults };
