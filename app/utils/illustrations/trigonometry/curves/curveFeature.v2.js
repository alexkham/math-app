// curveFeature.v2 - the inverse-function layouts.
//
// A second file, not an edit to curveFeature.js: process v10 rule 11 forbids
// editing a shipped renderer to gain a scene type. v1 owns the parameter
// family (single / pair); v2 owns the four layouts the inverse-functions page
// needs and v1 cannot express:
//
//   reflect   a restricted curve, the line y = x, and the inverse it becomes
//   lineTest  a full curve against its restricted piece, cut by one line
//   fold      an out-of-range input carried across and folded back
//   ranges    several inverse curves with domain and range marked on the axes
//
// renderCurveFeatureV2(spec) -> SVG string. Docs: curveFeature.v2.md beside it.
//
// Both files share the trigonometry census palette (process v10 3.3) and the
// same line-weight rules, so a v1 figure and a v2 figure sit on one page
// without reading as two systems. The palettes are duplicated deliberately:
// importing v1's would couple a shipped renderer to this one.

const C = {
  primary: '#4F46E5',
  primaryLight: '#818CF8',
  secondary: '#16A34A',
  resultStroke: '#B45309',
  resultFill: '#D97706',
  negation: '#DC2626',
  text: '#1E3A5F',
  muted: '#64748B',
  mutedLight: '#94A3B8',
  hairline: '#CBD5E1',
  hairlineLight: '#E2E8F0',
  surface: '#F8FAFC',

  wCurve: 2.2,
  wCurveEmph: 2.5,
  wGhost: 2.2,
  wRef: 1.2,
  wAxis: 1,
  wBar: 3.2,
  wEmph: 1.7,
  wHair: 1,

  fillBand: 0.11,
  fillHighlight: 0.42,

  fsAxis: 11,
  fsLabel: 11,
  fsNote: 10,
  weightBold: 600,
};

const PI = Math.PI;
const FONT = 'sans-serif';
const n1 = (v) => (+v).toFixed(1);

const FN = {
  sin: { f: Math.sin, inv: Math.asin, bounded: true },
  cos: { f: Math.cos, inv: Math.acos, bounded: true },
  tan: { f: Math.tan, inv: Math.atan, bounded: false },
};

// Principal intervals, as the page states them.
const PRINCIPAL = {
  sin: { domain: [-PI / 2, PI / 2], range: [-1, 1], invName: 'arcsin' },
  cos: { domain: [0, PI], range: [-1, 1], invName: 'arccos' },
  tan: { domain: [-PI / 2 + 0.22, PI / 2 - 0.22], range: [-4, 4], invName: 'arctan' },
};

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fmtPi(v) {
  const r = v / PI;
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  if (near(r, 0)) return '0';
  const sign = r < 0 ? '−' : '';
  const a = Math.abs(r);
  for (let den = 1; den <= 4; den += 1) {
    for (let num = 1; num <= 8 * den; num += 1) {
      if (near(a, num / den)) {
        const top = num === 1 ? 'π' : num + 'π';
        return den === 1 ? sign + top : sign + top + '/' + den;
      }
    }
  }
  return sign + a.toFixed(2) + 'π';
}

// ---------------------------------------------------------------------------
// Label placement. The v1 prototypes were positioned by typing coordinates and
// nudging them off each other one at a time; three rounds of that on three
// scenes is what this exists to prevent. A label is placed by naming a
// direction from its anchor, and the offsets are consistent everywhere.
// ---------------------------------------------------------------------------
const DIRS = {
  n:  [0, -9, 'middle'], s:  [0, 15, 'middle'],
  e:  [9, 4, 'start'],   w:  [-9, 4, 'end'],
  ne: [7, -7, 'start'],  nw: [-7, -7, 'end'],
  se: [7, 12, 'start'],  sw: [-7, 12, 'end'],
};

function label(px, py, text, opt) {
  const o = opt || {};
  const [dx, dy, anchor] = DIRS[o.dir || 'n'] || DIRS.n;
  const gap = o.gap === undefined ? 0 : o.gap;
  const gx = dx === 0 ? 0 : (dx > 0 ? gap : -gap);
  const gy = dy === 0 ? 0 : (dy > 0 ? gap : -gap);
  return (
    `<text x="${n1(px + dx + gx)}" y="${n1(py + dy + gy)}" text-anchor="${o.anchor || anchor}" ` +
    `font-family="${FONT}" font-size="${o.size || C.fsLabel}"` +
    (o.bold === false ? '' : ` font-weight="${C.weightBold}"`) +
    ` fill="${o.fill || C.muted}">${esc(text)}</text>`
  );
}

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------
function axisPair(X, Y, box, P, xr, yr) {
  const { padL, padT, plotW, plotH } = box;
  const yz = yr[0] <= 0 && yr[1] >= 0 ? Y(0) : padT + plotH;
  const xz = xr[0] <= 0 && xr[1] >= 0 ? X(0) : padL;
  return (
    `<line x1="${n1(padL)}" y1="${n1(yz)}" x2="${n1(padL + plotW)}" y2="${n1(yz)}" stroke="${P.mutedLight}" stroke-width="${P.wAxis}"/>` +
    `<line x1="${n1(xz)}" y1="${n1(padT)}" x2="${n1(xz)}" y2="${n1(padT + plotH)}" stroke="${P.mutedLight}" stroke-width="${P.wAxis}"/>`
  );
}

// clip is [lo, hi] in DATA units on y. A curve that leaves the panel is cut
// there and resumes when it returns, rather than being drawn outside the box:
// tangent on its principal interval reaches about 4.3 and would otherwise
// shoot straight out of a panel scaled to 2.6.
function samplePoly(f, a, b, X, Y, n, clip) {
  const steps = n || 160;
  const segs = [];
  let cur = [];
  for (let i = 0; i <= steps; i += 1) {
    const x = a + (i / steps) * (b - a);
    const y = f(x);
    const ok = isFinite(y) && (!clip || (y >= clip[0] && y <= clip[1]));
    if (ok) {
      cur.push(`${n1(X(x))} ${n1(Y(y))}`);
    } else if (cur.length) {
      segs.push(cur);
      cur = [];
    }
  }
  if (cur.length) segs.push(cur);
  return segs.filter((s) => s.length > 1).map((s) => 'M ' + s.join(' L ')).join(' ');
}

function path(d, stroke, w, extra) {
  if (!d) return '';
  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${extra || ''}/>`;
}

function dot(x, y, fill, P, r) {
  return `<circle cx="${n1(x)}" cy="${n1(y)}" r="${r || 4}" fill="${fill}" stroke="${P.surface}" stroke-width="1.2"/>`;
}

function bar(x1, y1, x2, y2, col, P) {
  return `<line x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}" stroke="${col}" stroke-width="${P.wBar}" stroke-linecap="round"/>`;
}

function boxOf(spec, w, h) {
  const padL = spec.padL === undefined ? 40 : spec.padL;
  const padR = spec.padR === undefined ? 18 : spec.padR;
  const padT = spec.padT === undefined ? 22 : spec.padT;
  const padB = spec.padB === undefined ? 36 : spec.padB;
  return { padL, padR, padT, padB, plotW: w - padL - padR, plotH: h - padT - padB };
}

// ---------------------------------------------------------------------------
// reflect - a restricted curve, y = x, and the inverse it becomes
// ---------------------------------------------------------------------------
function reflect(spec, P) {
  const S = spec.size || 300;
  const box = boxOf(spec, S, S);
  const fn = spec.fn || 'sin';
  const pr = PRINCIPAL[fn];
  const lim = spec.limit || 2.0;                 // one range on BOTH axes, or it is not a reflection
  const X = (x) => box.padL + ((x + lim) / (2 * lim)) * box.plotW;
  const Y = (y) => box.padT + ((lim - y) / (2 * lim)) * box.plotH;
  const o = [];

  o.push(axisPair(X, Y, box, P, [-lim, lim], [-lim, lim]));
  o.push(
    `<line x1="${n1(X(-lim))}" y1="${n1(Y(-lim))}" x2="${n1(X(lim))}" y2="${n1(Y(lim))}" ` +
    `stroke="${P.muted}" stroke-width="${P.wRef}" stroke-dasharray="5 4"/>`
  );
  o.push(label(X(lim * 0.94), Y(lim * 0.86), 'y = x', { dir: 'nw', fill: P.muted }));

  const [a, b] = spec.domain || pr.domain;
  const clip = [-lim, lim];
  o.push(path(samplePoly(FN[fn].f, a, b, X, Y, 200, clip), P.primary, P.wCurveEmph));
  // the inverse is the same curve with x and y exchanged
  const ia = FN[fn].f(a), ib = FN[fn].f(b);
  o.push(path(samplePoly(FN[fn].inv, Math.max(Math.min(ia, ib), -lim), Math.min(Math.max(ia, ib), lim), X, Y, 200, clip), P.resultStroke, P.wCurveEmph));

  if (fn === 'tan' && spec.asymptotes !== false) {
    // the claim is that the VERTICAL asymptotes become HORIZONTAL ones, so
    // draw one of each and let the reflection be visible between them
    o.push(`<line x1="${n1(X(PI / 2))}" y1="${n1(box.padT)}" x2="${n1(X(PI / 2))}" y2="${n1(box.padT + box.plotH)}" stroke="${P.primary}" stroke-width="${P.wHair}" stroke-dasharray="5 4" opacity="0.8"/>`);
    o.push(`<line x1="${n1(X(-PI / 2))}" y1="${n1(box.padT)}" x2="${n1(X(-PI / 2))}" y2="${n1(box.padT + box.plotH)}" stroke="${P.primary}" stroke-width="${P.wHair}" stroke-dasharray="5 4" opacity="0.8"/>`);
    o.push(`<line x1="${n1(box.padL)}" y1="${n1(Y(PI / 2))}" x2="${n1(box.padL + box.plotW)}" y2="${n1(Y(PI / 2))}" stroke="${P.resultStroke}" stroke-width="${P.wHair}" stroke-dasharray="5 4" opacity="0.8"/>`);
    o.push(`<line x1="${n1(box.padL)}" y1="${n1(Y(-PI / 2))}" x2="${n1(box.padL + box.plotW)}" y2="${n1(Y(-PI / 2))}" stroke="${P.resultStroke}" stroke-width="${P.wHair}" stroke-dasharray="5 4" opacity="0.8"/>`);
  }

  const inside = (x, y) => Math.abs(x) <= lim && Math.abs(y) <= lim;
  [[b, FN[fn].f(b)], [a, FN[fn].f(a)]].forEach(([x, y]) => { if (inside(x, y)) o.push(dot(X(x), Y(y), P.primary, P, 3.5)); });
  [[FN[fn].f(b), b], [FN[fn].f(a), a]].forEach(([x, y]) => { if (inside(x, y)) o.push(dot(X(x), Y(y), P.resultStroke, P, 3.5)); });
  // the matched pair, joined: the reflection made concrete
  if (inside(b, FN[fn].f(b))) {
    o.push(
      `<line x1="${n1(X(b))}" y1="${n1(Y(FN[fn].f(b)))}" x2="${n1(X(FN[fn].f(b)))}" y2="${n1(Y(b))}" ` +
      `stroke="${P.muted}" stroke-width="${P.wHair}" stroke-dasharray="2 3"/>`
    );
  }

  o.push(label(X(spec.fnLabelAt === undefined ? b : spec.fnLabelAt),
               Y(FN[fn].f(spec.fnLabelAt === undefined ? b : spec.fnLabelAt)),
               spec.fnLabel || fn, { dir: spec.fnLabelDir || 'se', fill: P.primary }));
  o.push(label(X(FN[fn].f(spec.invLabelAt === undefined ? b * 0.62 : spec.invLabelAt)),
               Y(spec.invLabelAt === undefined ? b * 0.62 : spec.invLabelAt),
               spec.invLabel || pr.invName, { dir: spec.invLabelDir || 'nw', fill: P.resultStroke }));
  if (spec.note) {
    o.push(label(box.padL + box.plotW / 2, box.padT + box.plotH + 16, spec.note,
                 { dir: 's', fill: P.muted, size: P.fsNote, bold: false }));
  }
  return { w: S, h: S, body: o.join('') };
}

// ---------------------------------------------------------------------------
// lineTest - the full curve against its restricted piece, cut by one line
// ---------------------------------------------------------------------------
function lineTest(spec, P) {
  const W = spec.width || 540, H = spec.height || 250;
  const box = boxOf(spec, W, H);
  const fn = spec.fn || 'sin';
  const xr = spec.xRange || [-2 * PI, 2 * PI];
  const yr = spec.yRange || [-1.7, 1.7];
  const X = (x) => box.padL + ((x - xr[0]) / (xr[1] - xr[0])) * box.plotW;
  const Y = (y) => box.padT + ((yr[1] - y) / (yr[1] - yr[0])) * box.plotH;
  const [a, b] = spec.domain || PRINCIPAL[fn].domain;
  const cut = spec.cut === undefined ? 0.5 : spec.cut;
  const o = [];

  o.push(`<rect x="${n1(X(a))}" y="${n1(box.padT)}" width="${n1(X(b) - X(a))}" height="${n1(box.plotH)}" fill="${P.primary}" fill-opacity="${P.fillBand}"/>`);
  o.push(axisPair(X, Y, box, P, xr, yr));
  o.push(path(samplePoly(FN[fn].f, xr[0], xr[1], X, Y, 220), P.mutedLight, P.wGhost));
  o.push(path(samplePoly(FN[fn].f, a, b, X, Y), P.primary, P.wCurveEmph));
  o.push(`<line x1="${n1(box.padL)}" y1="${n1(Y(cut))}" x2="${n1(box.padL + box.plotW)}" y2="${n1(Y(cut))}" stroke="${P.negation}" stroke-width="${P.wRef}" stroke-dasharray="5 3"/>`);
  o.push(label(box.padL + box.plotW, Y(cut), spec.cutLabel || 'y = ½', { dir: 'nw', fill: P.negation }));

  (spec.crossings || []).forEach((x) => o.push(dot(X(x), Y(cut), P.negation, P, 4)));
  if (spec.kept !== undefined) o.push(dot(X(spec.kept), Y(cut), P.resultStroke, P, 5));

  (spec.xTicks || []).forEach((x) =>
    o.push(label(X(x), box.padT + box.plotH, fmtPi(x), { dir: 's', fill: P.muted, bold: false, size: P.fsAxis })));
  if (spec.ghostNote) {
    o.push(label(X(spec.ghostNoteAt === undefined ? (xr[0] + a) / 2 : spec.ghostNoteAt), box.padT + 6,
                 spec.ghostNote, { dir: 's', fill: P.negation }));
  }
  if (spec.keptNote) {
    o.push(label(X((a + b) / 2), box.padT + box.plotH + 14, spec.keptNote, { dir: 's', fill: P.primary }));
  }
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
// fold - an out-of-range input carried across and folded back
// ---------------------------------------------------------------------------
function fold(spec, P) {
  const W = spec.width || 470, H = spec.height || 268;
  const box = boxOf({ ...spec, padB: spec.padB === undefined ? 56 : spec.padB }, W, H);
  const fn = spec.fn || 'sin';
  const xr = spec.xRange || [-0.35, PI + 0.35];
  const yr = spec.yRange || [-1.25, 1.25];
  const X = (x) => box.padL + ((x - xr[0]) / (xr[1] - xr[0])) * box.plotW;
  const Y = (y) => box.padT + ((yr[1] - y) / (yr[1] - yr[0])) * box.plotH;
  const [ra, rb] = spec.restricted || PRINCIPAL[fn].domain;
  const o = [];

  o.push(`<rect x="${n1(X(Math.max(ra, xr[0])))}" y="${n1(box.padT)}" width="${n1(X(Math.min(rb, xr[1])) - X(Math.max(ra, xr[0])))}" height="${n1(box.plotH)}" fill="${P.primary}" fill-opacity="${P.fillBand}"/>`);
  o.push(label(X((Math.max(ra, xr[0]) + Math.min(rb, xr[1])) / 2), box.padT + 6,
               spec.bandLabel || 'the restricted range', { dir: 's', fill: P.primary, size: P.fsNote }));
  o.push(axisPair(X, Y, box, P, xr, yr));
  o.push(path(samplePoly(FN[fn].f, xr[0], xr[1], X, Y), P.primary, P.wCurve));

  const xin = spec.input, xout = spec.output, v = FN[fn].f(xin);
  o.push(`<line x1="${n1(X(xin))}" y1="${n1(Y(0))}" x2="${n1(X(xin))}" y2="${n1(Y(v))}" stroke="${P.negation}" stroke-width="${P.wRef}" stroke-dasharray="3 3"/>`);
  o.push(`<line x1="${n1(X(xout))}" y1="${n1(Y(v))}" x2="${n1(X(xin))}" y2="${n1(Y(v))}" stroke="${P.resultStroke}" stroke-width="${P.wEmph}"/>`);
  o.push(`<line x1="${n1(X(xout))}" y1="${n1(Y(v))}" x2="${n1(X(xout))}" y2="${n1(Y(0))}" stroke="${P.resultStroke}" stroke-width="${P.wRef}" stroke-dasharray="3 3"/>`);
  o.push(dot(X(xin), Y(v), P.negation, P, 4.5));
  o.push(dot(X(xout), Y(v), P.resultStroke, P, 4.5));
  o.push(label(X((xin + xout) / 2), Y(v), spec.carryLabel || '', { dir: 'n', fill: P.resultStroke }));
  o.push(label(X(xin), box.padT + box.plotH + 14, spec.inLabel || '', { dir: 's', fill: P.negation }));
  o.push(label(X(xout), box.padT + box.plotH + 14, spec.outLabel || '', { dir: 's', fill: P.resultStroke }));

  if (spec.wrongLabel) {
    const wy = box.padT + box.plotH + 30;
    o.push(label(X(xin), wy, spec.wrongLabel, { dir: 's', fill: P.negation, size: P.fsNote, bold: false }));
    const half = 3.1 * spec.wrongLabel.length;
    o.push(`<line x1="${n1(X(xin) - half)}" y1="${n1(wy + 11)}" x2="${n1(X(xin) + half)}" y2="${n1(wy + 11)}" stroke="${P.negation}" stroke-width="${P.wRef}"/>`);
  }
  if (spec.title) {
    o.push(label(box.padL + box.plotW / 2, box.padT - 8, spec.title, { dir: 's', fill: P.text, size: 12 }));
  }
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
// ranges - several inverse curves, domain on the x-axis, range on the y-axis
// ---------------------------------------------------------------------------
function ranges(spec, P) {
  const pw = spec.panelWidth || 176, ph = spec.panelHeight || 200, gap = spec.gap === undefined ? 16 : gap0(spec);
  const panels = spec.panels || [];
  const out = [];
  panels.forEach((p, i) => {
    const box = boxOf({ padL: 34, padR: 14, padT: 26, padB: 44 }, pw, ph);
    // ONE scale across every panel, or the swap is not comparable between them
    const lim = spec.limit || p.limit || 3.4;
    const X = (x) => box.padL + ((x + lim) / (2 * lim)) * box.plotW;
    const Y = (y) => box.padT + ((lim - y) / (2 * lim)) * box.plotH;
    const o = [];
    o.push(axisPair(X, Y, box, P, [-lim, lim], [-lim, lim]));
    const fn = p.fn;
    const dom = p.domain, rng = p.range;
    o.push(path(samplePoly(FN[fn].inv, dom[0], dom[1], X, Y, 160, [-lim, lim]), P.resultStroke, P.wCurveEmph));
    o.push(bar(X(dom[0]), Y(0) + 4, X(dom[1]), Y(0) + 4, P.resultStroke, P));
    o.push(bar(X(0) - 4, Y(rng[0]), X(0) - 4, Y(rng[1]), P.primary, P));
    o.push(label(box.padL + box.plotW / 2, box.padT - 10, p.title, { dir: 's', fill: P.text, size: P.fsLabel }));
    o.push(label(box.padL + box.plotW / 2, box.padT + box.plotH + 12, p.domainLabel,
                 { dir: 's', fill: P.resultStroke, size: P.fsNote }));
    o.push(label(box.padL + box.plotW / 2, box.padT + box.plotH + 24, p.rangeLabel,
                 { dir: 's', fill: P.primary, size: P.fsNote }));
    out.push(`<g transform="translate(${i * (pw + gap)},0)">${o.join('')}</g>`);
  });
  return { w: panels.length * pw + (panels.length - 1) * gap, h: ph, body: out.join('') };
}
function gap0(spec) { return spec.gap === undefined ? 16 : spec.gap; }

// ---------------------------------------------------------------------------
const KINDS = { reflect, lineTest, fold, ranges };

export default function renderCurveFeatureV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `curveFeature.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderCurveFeatureV2, C as curveFeatureV2Defaults, PRINCIPAL };
