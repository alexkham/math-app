// complexPoints - a complex number and a related point, drawn in the plane.
//
// renderComplexPoints(spec) -> SVG string. Docs: complexPoints.md beside it.
//
// Scene types (spec.kind):
//   negation   z and -z at opposite ends of a diameter of the circle |w| = |z|;
//              the 180-degree turn about 0 that carries one to the other; the
//              origin marked as their midpoint
//
// Palette: the page theme ($meta.palette.$pageTheme in the complex-numbers
// figure registry) - z in site blue, -z in site amber, circle, diameter and
// turn in brand navy.

const C = {
  z: '#2563EB', zFill: '#DBEAFE', neg: '#B45309', negFill: '#FDF3E3', circle: '#06357A',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wCircle: 1.3, wDiam: 1.2, wTurn: 1.6, wAxis: 1.4, wPoint: 2.2, rPoint: 7, unit: 44, extent: 4.5, turnR: 1.3,
  fsAxis: 12, fsTick: 10, fsTurn: 12, fsOrigin: 11, fsPoint: 14, fsModulus: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const neg = (v) => (v < 0 ? `−${-v}` : String(v));

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// a + bi with proper minus signs; unit imaginary coefficients drop the 1.
function fmt(re, im) {
  const imAbs = Math.abs(im) === 1 ? 'i' : `${Math.abs(im)}i`;
  if (!im) return neg(re);
  if (!re) return (im < 0 ? '−' : '') + imAbs;
  return `${neg(re)} ${im < 0 ? '−' : '+'} ${imAbs}`;
}

// |z| as an integer when a^2 + b^2 is a perfect square, else as a root.
function modulus(re, im) {
  const n = re * re + im * im, r = Math.round(Math.sqrt(n));
  return r * r === n ? String(r) : `√${n}`;
}

// ---------------------------------------------------------------- negation
// Grid every unit to ±4, ticks every 2. The turn is an arc of radius turnR
// units drawn counterclockwise from arg z to arg z + 180°, over the origin,
// ending in an arrowhead at the -z side of the diameter. Labels: z above-right
// of its point, -z below-left, the modulus below-right outside the circle.
function negation(spec, P) {
  const W = spec.width || 520, cx = W / 2, cy = 220, u = P.unit, R = P.extent;
  const X = (x) => cx + x * u, Y = (y) => cy - y * u;
  const a = spec.z.re, b = spec.z.im, r = Math.hypot(a, b), th = Math.atan2(b, a);
  const mid = `${spec.idPrefix || 'cp'}-arrow`;
  const o = [];
  o.push(`<defs><marker id="${mid}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${P.circle}"/></marker></defs>`);
  for (let v = -4; v <= 4; v++) {
    if (!v) continue;
    o.push(`<line x1="${X(v)}" y1="${Y(R)}" x2="${X(v)}" y2="${Y(-R)}" stroke="${P.grid}"/>`);
    o.push(`<line x1="${X(-R)}" y1="${Y(v)}" x2="${X(R)}" y2="${Y(v)}" stroke="${P.grid}"/>`);
  }
  o.push(`<line x1="${X(-R)}" y1="${cy}" x2="${X(R)}" y2="${cy}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${cx}" y1="${Y(R)}" x2="${cx}" y2="${Y(-R)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('Re', X(R) + 4, cy + 4, P.muted, P.fsAxis, 'start'));
  o.push(txt('Im', cx, Y(R) - 8, P.muted, P.fsAxis));
  for (const v of [-4, -2, 2, 4]) {
    o.push(txt(neg(v), X(v), cy + 15, P.muted, P.fsTick, 'middle', 500));
    o.push(txt(`${neg(v)}i`, cx - 6, Y(v) + 4, P.muted, P.fsTick, 'end', 500));
  }
  o.push(`<circle cx="${cx}" cy="${cy}" r="${f1(r * u)}" fill="none" stroke="${P.circle}" stroke-width="${P.wCircle}" stroke-dasharray="5 4"/>`);
  o.push(`<line x1="${X(-a)}" y1="${Y(-b)}" x2="${X(a)}" y2="${Y(b)}" stroke="${P.circle}" stroke-width="${P.wDiam}" opacity="0.7"/>`);
  const ra = P.turnR * u;
  const p0 = [cx + ra * Math.cos(th), cy - ra * Math.sin(th)], p1 = [cx + ra * Math.cos(th + Math.PI), cy - ra * Math.sin(th + Math.PI)];
  o.push(`<path d="M${f1(p0[0])},${f1(p0[1])} A${ra},${ra} 0 0 0 ${f1(p1[0])},${f1(p1[1])}" fill="none" stroke="${P.circle}" stroke-width="${P.wTurn}" marker-end="url(#${mid})"/>`);
  o.push(txt('180°', cx - 0.55 * u, cy - 1.62 * u, P.circle, P.fsTurn, 'middle', 700));
  o.push(`<circle cx="${cx}" cy="${cy}" r="4" fill="${P.text}"/>`);
  o.push(txt('0: the midpoint', cx + 8, cy + 30, P.text, P.fsOrigin, 'start', 600));
  o.push(`<circle cx="${X(a)}" cy="${Y(b)}" r="${P.rPoint}" fill="${P.zFill}" stroke="${P.z}" stroke-width="${P.wPoint}"/>`);
  o.push(txt(`z = ${fmt(a, b)}`, X(a) + 12, Y(b) - 8, P.z, P.fsPoint, 'start', 700));
  o.push(`<circle cx="${X(-a)}" cy="${Y(-b)}" r="${P.rPoint}" fill="${P.negFill}" stroke="${P.neg}" stroke-width="${P.wPoint}"/>`);
  o.push(txt(`−z = ${fmt(-a, -b)}`, X(-a) - 12, Y(-b) + 20, P.neg, P.fsPoint, 'end', 700));
  o.push(txt(`|z| = |−z| = ${modulus(a, b)}`, X(3.4), Y(-3.45), P.circle, P.fsModulus, 'middle', 600));
  const h = spec.height || Y(-R) + 56;
  const cap = spec.caption === undefined ? '−z is z turned a half turn about 0: same distance, opposite direction' : spec.caption;
  if (cap) o.push(txt(cap, W / 2, h - 16, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { negation };

export default function renderComplexPoints(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `complexPoints: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderComplexPoints, C as complexPointsDefaults };
