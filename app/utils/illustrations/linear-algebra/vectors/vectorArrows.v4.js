// vectorArrows.v4 - the angle between two vectors, and what the dot product
// says about it.
//
// Fourth file, not an edit: rule 11 - v1 to v3 had all shipped before these
// were needed.
//
//   vectorArrows.js     copies               vectors
//   vectorArrows.v2.js  sum / difference     vectors/basic-operations, magnitude
//   vectorArrows.v3.js  units                vectors/magnitude
//   vectorArrows.v4.js  angle / signs        vectors/dot-product
//
// renderVectorArrowsV4(spec) -> SVG string. Docs: vectorArrows.v4.md beside it.
//
// Palette: the page theme (owner decision 2026-09-28, $meta.palette.$pageTheme):
// a site blue, b brand navy, the angle in site amber, a - b brand slate-blue.

const C = {
  a: '#2563EB', b: '#06357A', angle: '#B45309', third: '#5A7299', negation: '#C0392B',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8', divider: '#CBD5E1',

  wVector: 2.6, wThird: 2.2, wArc: 1.8, wGrid: 1, wAxis: 1.4, wDivider: 1,
  unit: 44, head: 11, arcR: 46, arcFill: 0.10,
  panelW: 200, panelUnit: 34, panelArcR: 30,
  fsLabel: 13, fsTheta: 15, fsPanel: 12, fsValue: 14, fsNote: 11, fsCaption: 13, fsOrigin: 12,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const minus = (n) => String(n).replace('-', '−');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

function arrow(a, b, c, d, col, w, dash, P) {
  const ang = Math.atan2(d - b, c - a), h = P.head;
  const ex = c - 8 * Math.cos(ang), ey = d - 8 * Math.sin(ang);
  return `<line x1="${f1(a)}" y1="${f1(b)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"` +
    `${dash ? ` stroke-dasharray="${dash}"` : ''}/>` +
    `<path d="M ${f1(c)} ${f1(d)} L ${f1(c - h * Math.cos(ang - 0.38))} ${f1(d - h * Math.sin(ang - 0.38))} ` +
    `L ${f1(c - h * Math.cos(ang + 0.38))} ${f1(d - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>`;
}

// Filled wedge plus arc from math angle t1 to t2 (radians, counter-clockwise,
// t2 > t1), centred at pixel (cx, cy). Sweep flag 0 because y points down.
function wedge(cx, cy, r, t1, t2, P) {
  const p = (t) => [cx + r * Math.cos(t), cy - r * Math.sin(t)];
  const [x1, y1] = p(t1), [x2, y2] = p(t2), large = t2 - t1 > Math.PI ? 1 : 0;
  return `<path d="M ${f1(cx)} ${f1(cy)} L ${f1(x1)} ${f1(y1)} A ${r} ${r} 0 ${large} 0 ${f1(x2)} ${f1(y2)} Z" ` +
    `fill="${P.angle}" fill-opacity="${P.arcFill}" stroke="none"/>` +
    `<path d="M ${f1(x1)} ${f1(y1)} A ${r} ${r} 0 ${large} 0 ${f1(x2)} ${f1(y2)}" fill="none" stroke="${P.angle}" stroke-width="${P.wArc}"/>`;
}

// Right-angle mark: a small square in the corner between directions t and t + 90°.
function rightMark(cx, cy, s, t, P) {
  const u = [Math.cos(t), -Math.sin(t)], v = [Math.cos(t + Math.PI / 2), -Math.sin(t + Math.PI / 2)];
  return `<path d="M ${f1(cx + s * u[0])} ${f1(cy + s * u[1])} L ${f1(cx + s * u[0] + s * v[0])} ${f1(cy + s * u[1] + s * v[1])} ` +
    `L ${f1(cx + s * v[0])} ${f1(cy + s * v[1])}" fill="none" stroke="${P.angle}" stroke-width="${P.wArc}"/>`;
}

// ----------------------------------------------------------------- angle
// a and b from O with the angle between them marked, and a - b closing the
// triangle from the tip of b to the tip of a: the triangle the law of cosines
// is applied to. Labels are hand-placed ([text, x, y, role, anchor], grid
// units); the notes carry the two computations that agree.
function angle(spec, P) {
  const nx = spec.nx || 7, ny = spec.ny || 5, U = P.unit;
  const X0 = 40, Y0 = 40 + ny * U, px = (x) => X0 + x * U, py = (y) => Y0 - y * U;
  const [ax, ay] = spec.a, [bx, by] = spec.b;
  const o = [];
  for (let i = 0; i <= nx; i += 1) o.push(`<line x1="${px(i)}" y1="${py(0)}" x2="${px(i)}" y2="${py(ny)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  for (let j = 0; j <= ny; j += 1) o.push(`<line x1="${px(0)}" y1="${py(j)}" x2="${px(nx)}" y2="${py(j)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(nx)}" y2="${py(0)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(0)}" y2="${py(ny)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('O', px(0) - 12, py(0) + 16, P.muted, P.fsOrigin, 'middle', 500));

  const ta = Math.atan2(ay, ax), tb = Math.atan2(by, bx);
  const [t1, t2] = ta < tb ? [ta, tb] : [tb, ta];
  o.push(wedge(px(0), py(0), P.arcR, t1, t2, P));
  const tm = (t1 + t2) / 2;
  o.push(txt(spec.thetaLabel || 'θ', px(0) + (P.arcR + 10) * Math.cos(tm) + 4, py(0) - (P.arcR + 10) * Math.sin(tm) + 5, P.angle, P.fsTheta));
  if (spec.third !== false) o.push(arrow(px(bx), py(by), px(ax), py(ay), P.third, P.wThird, '7 5', P));
  o.push(arrow(px(0), py(0), px(ax), py(ay), P.a, P.wVector, null, P));
  o.push(arrow(px(0), py(0), px(bx), py(by), P.b, P.wVector, null, P));
  (spec.labels || []).forEach(([t, x, y, role, anchor]) => o.push(txt(t, px(x), py(y), P[role] || P.text, P.fsLabel, anchor || 'start')));

  const w = spec.width || px(nx) + 30;
  let y = Y0 + 58;
  (spec.notes || []).forEach((n) => { o.push(txt(n, 40, y, P.text, P.fsNote, 'start', 400)); y += 16; });
  const h = spec.height || y + 16;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 12, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ----------------------------------------------------------------- signs
// One panel per case: a fixed along the axis, b turned to the case's angle,
// the angle marked (a square for 90°), then the angle and the value of a · b
// under it. The value is computed from the components, never typed.
function signs(spec, P) {
  const cases = spec.cases || [];
  const PW = P.panelW, s = P.panelUnit, top = 40;
  const [ax, ay] = spec.a;
  const o = [];
  cases.forEach((c, i) => {
    const ox = i * PW + 85, oy = top + 110;
    const [bx, by] = c.b;
    const dot = ax * bx + ay * by;
    const deg = Math.round((Math.acos(dot / (Math.hypot(ax, ay) * Math.hypot(bx, by))) * 180) / Math.PI);
    o.push(`<line x1="${f1(ox - 75)}" y1="${oy}" x2="${f1(ox + 105)}" y2="${oy}" stroke="${P.axis}" stroke-width="${P.wGrid}"/>`);
    const ta = Math.atan2(ay, ax), tb = Math.atan2(by, bx);
    if (Math.abs(dot) < 1e-9) o.push(rightMark(ox, oy, 12, Math.min(ta, tb), P));
    else o.push(wedge(ox, oy, P.panelArcR, Math.min(ta, tb), Math.max(ta, tb), P));
    o.push(arrow(ox, oy, ox + ax * s, oy - ay * s, P.a, P.wVector, null, P));
    o.push(arrow(ox, oy, ox + bx * s, oy - by * s, P.b, P.wVector, null, P));
    o.push(`<circle cx="${ox}" cy="${oy}" r="3" fill="${P.text}"/>`);
    o.push(txt(`a = (${minus(ax)}, ${minus(ay)})`, ox + 60, oy + 18, P.a, P.fsPanel));
    // b's label on the side away from the panel edge it points toward
    const anchor = bx === 0 ? 'middle' : bx > 0 ? 'end' : 'start';
    o.push(txt(`b = (${minus(bx)}, ${minus(by)})`, ox + bx * s + (bx === 0 ? 0 : bx > 0 ? -6 : 6), oy - by * s - 8, P.b, P.fsPanel, anchor));
    o.push(txt(`${deg}°, ${c.kind}`, ox + 45, oy + 44, P.angle, P.fsPanel));
    o.push(txt(`a · b = ${minus(dot)}`, ox + 45, oy + 64, P.text, P.fsValue, 'middle', 700));
    if (i) o.push(`<line x1="${i * PW - 5}" y1="${top}" x2="${i * PW - 5}" y2="${oy + 70}" stroke="${P.divider}" stroke-width="${P.wDivider}"/>`);
  });
  const w = spec.width || cases.length * PW, h = spec.height || top + 220;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 14, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { angle, signs };

export default function renderVectorArrowsV4(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows.v4: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderVectorArrowsV4, C as vectorArrowsV4Defaults };
