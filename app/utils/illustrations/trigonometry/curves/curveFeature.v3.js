// curveFeature.v3 - the six-function grid.
//
// Third file in the chain, not an edit to either shipped one: process v10
// rule 11 forbids editing a shipped renderer to gain a scene type, and by the
// time this was needed both curveFeature.js (graphs page) and
// curveFeature.v2.js (inverse-functions page) were integrated.
//
//   v1  single / pair      the four sinusoidal parameters
//   v2  reflect / lineTest / fold / ranges   the inverse functions
//   v3  grid               several functions side by side, compared
//
// Owner decision 2026-09-27: keep chaining rather than consolidate.
//
// renderCurveFeatureV3(spec) -> SVG string. Docs: curveFeature.v3.md beside it.

const C = {
  primary: '#4F46E5',
  secondary: '#16A34A',
  resultStroke: '#B45309',
  negation: '#DC2626',
  text: '#1E3A5F',
  muted: '#64748B',
  mutedLight: '#94A3B8',
  hairline: '#CBD5E1',
  hairlineLight: '#E2E8F0',
  surface: '#F8FAFC',

  wCurve: 1.9,
  wAxis: 1,
  wDead: 1.2,
  wPanel: 1,

  fsPanel: 12,
  fsGroup: 11,
  fsNote: 12,
  weightBold: 600,
};

const PI = Math.PI;
const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const FN = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  cot: (t) => 1 / Math.tan(t),
  sec: (t) => 1 / Math.cos(t),
  csc: (t) => 1 / Math.sin(t),
};

// Where each function is undefined. Computed rather than tabulated, so a panel
// over a different x-range still marks the right places.
function deadPoints(name, lo, hi) {
  const out = [];
  if (name === 'sin' || name === 'cos') return out;
  const cosZero = name === 'tan' || name === 'sec';
  const base = cosZero ? PI / 2 : 0;
  let k = Math.ceil((lo - base) / PI);
  for (; base + k * PI <= hi; k += 1) {
    const v = base + k * PI;
    if (v > lo && v < hi) out.push(v);
  }
  return out;
}

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// One small panel: the curve, its axis, and its excluded points.
function panel(name, x0, y0, w, h, spec, P) {
  const xr = spec.xRange || [-PI, 3 * PI / 2];
  const yr = spec.yRange || [-3.2, 3.2];
  const L = 6, R = 6, T = 20, B = 16;
  const pw = w - L - R, ph = h - T - B;
  const X = (v) => x0 + L + ((v - xr[0]) / (xr[1] - xr[0])) * pw;
  const Y = (v) => y0 + T + ((yr[1] - v) / (yr[1] - yr[0])) * ph;
  const o = [];

  o.push(`<rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(w)}" height="${f1(h)}" fill="${P.surface}" ` +
    `stroke="${P.hairlineLight}" stroke-width="${P.wPanel}" rx="6"/>`);
  o.push(`<line x1="${f1(X(xr[0]))}" y1="${f1(Y(0))}" x2="${f1(X(xr[1]))}" y2="${f1(Y(0))}" ` +
    `stroke="${P.mutedLight}" stroke-width="${P.wAxis}"/>`);

  const dead = deadPoints(name, xr[0], xr[1]);
  // Marked identically in every panel that has them - that sameness IS the
  // claim of this layout, so the dash pattern must not vary per panel.
  dead.forEach((d) => {
    o.push(`<line x1="${f1(X(d))}" y1="${f1(y0 + T)}" x2="${f1(X(d))}" y2="${f1(y0 + T + ph)}" ` +
      `stroke="${P.negation}" stroke-width="${P.wDead}" stroke-dasharray="4 3" opacity="0.8"/>`);
  });

  // one path per branch, clipped to the panel
  const bounds = [xr[0]].concat(dead, [xr[1]]);
  const samples = spec.samples || 90;
  const emit = (pts) => {
    if (pts.length > 1) {
      o.push(`<path d="M ${pts.join(' L ')}" fill="none" stroke="${P.primary}" ` +
        `stroke-width="${P.wCurve}" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  };
  for (let i = 0; i < bounds.length - 1; i += 1) {
    const eps = (bounds[i + 1] - bounds[i]) * 0.02;
    const a = i === 0 ? bounds[i] : bounds[i] + eps;
    const b = i === bounds.length - 2 ? bounds[i + 1] : bounds[i + 1] - eps;
    let pts = [];
    for (let k = 0; k <= samples; k += 1) {
      const v = a + (k / samples) * (b - a);
      const yv = FN[name](v);
      if (isFinite(yv) && yv >= yr[0] && yv <= yr[1]) {
        pts.push(`${f1(X(v))} ${f1(Y(yv))}`);
      } else {
        emit(pts);
        pts = [];
      }
    }
    emit(pts);
  }

  o.push(txt(name, x0 + w / 2, y0 + 14, P.text, P.fsPanel));
  return o.join('');
}

function grid(spec, P) {
  const pw = spec.panelWidth || 186;
  const ph = spec.panelHeight || 128;
  const gx = spec.gapX === undefined ? 10 : spec.gapX;
  const gy = spec.gapY === undefined ? 26 : spec.gapY;
  const padL = 12, padT = spec.padT === undefined ? 26 : spec.padT;
  const padB = spec.padB === undefined ? 22 : spec.padB;
  const rows = spec.rows || [];
  const cols = Math.max(...rows.map((r) => r.panels.length));
  const w = padL * 2 + cols * pw + (cols - 1) * gx;
  const h = padT + rows.length * ph + (rows.length - 1) * gy + padB;
  const o = [];

  rows.forEach((row, r) => {
    const y = padT + r * (ph + gy);
    if (row.label) {
      o.push(txt(row.label, padL, y - 7, P[row.color] || row.color || P.negation, P.fsGroup, 'start'));
    }
    row.panels.forEach((name, c) => {
      o.push(panel(name, padL + c * (pw + gx), y, pw, ph, spec, P));
    });
  });
  if (spec.note) o.push(txt(spec.note, w / 2, h - 7, P.text, P.fsNote));
  return { w, h, body: o.join('') };
}

const KINDS = { grid };

export default function renderCurveFeatureV3(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `curveFeature.v3: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderCurveFeatureV3, C as curveFeatureV3Defaults };
