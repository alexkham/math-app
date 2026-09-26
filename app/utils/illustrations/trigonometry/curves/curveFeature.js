// curveFeature - trigonometric curves with their features marked.
//
// One narrow visual vocabulary: a plotted trigonometric curve on a pi-ticked
// axis, with reference lines, brackets, callouts, bands and key points laid on
// top of it. Serves the "what does this parameter do" family of figures.
//
// renderCurveFeature(spec) -> SVG string. Docs: curveFeature.md beside this file.
//
// Scene types (spec.kind): 'single' | 'pair'. 'grid' and 'reflect' are declared
// in the package doc but not implemented - they are added when the first page
// needing them is worked (functions, inverse-functions). Calling them throws
// rather than rendering something wrong.
//
// Palette is the trigonometry census (process v10 3.3, recorded in
// $meta.palette of the subject figure registry). Line weights are v10 3.4:
// curve 2-2.5 is the only heavy stroke, structure is 1-1.2, emphasis 1.6-1.8.

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
  wRef: 1.2,
  wAxis: 1,
  wBracket: 1,
  wEmph: 1.7,
  wHair: 1,

  fillBand: 0.11,
  fillHighlight: 0.42,

  fsAxis: 11,
  fsLabel: 12,
  fsCallout: 11.5,
  weightBold: 600,
};

const PI = Math.PI;
const FONT = 'sans-serif';

// ---------------------------------------------------------------- functions

const FN = {
  sin: { f: Math.sin, period: 2 * PI, bounded: true },
  cos: { f: Math.cos, period: 2 * PI, bounded: true },
  tan: { f: Math.tan, period: PI, bounded: false },
  cot: { f: (t) => 1 / Math.tan(t), period: PI, bounded: false },
  sec: { f: (t) => 1 / Math.cos(t), period: 2 * PI, bounded: false },
  csc: { f: (t) => 1 / Math.sin(t), period: 2 * PI, bounded: false },
};

// Where the unbounded functions blow up, inside [lo, hi] of the INNER argument.
function asymptotesOf(name, lo, hi) {
  const out = [];
  if (name === 'tan' || name === 'sec') {
    // cos = 0 at pi/2 + k*pi
    let k = Math.floor((lo - PI / 2) / PI) - 1;
    for (; PI / 2 + k * PI <= hi + PI; k += 1) {
      const a = PI / 2 + k * PI;
      if (a > lo && a < hi) out.push(a);
    }
  } else if (name === 'cot' || name === 'csc') {
    // sin = 0 at k*pi
    let k = Math.floor(lo / PI) - 1;
    for (; k * PI <= hi + PI; k += 1) {
      const a = k * PI;
      if (a > lo && a < hi) out.push(a);
    }
  }
  return out;
}

// ------------------------------------------------------------- number format

function fmtPi(v) {
  const r = v / PI;
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  if (near(r, 0)) return '0';
  const sign = r < 0 ? '−' : '';
  const a = Math.abs(r);
  for (let den = 1; den <= 6; den += 1) {
    for (let num = 1; num <= 12 * den; num += 1) {
      if (near(a, num / den)) {
        const top = num === 1 && den !== 1 ? 'π' : num === 1 ? 'π' : num + 'π';
        return den === 1 ? sign + top : sign + top + '/' + den;
      }
    }
  }
  return sign + a.toFixed(2) + 'π';
}

function fmtNum(v) {
  if (Math.abs(v - Math.round(v)) < 1e-9) return String(Math.round(v)).replace('-', '−');
  return v.toFixed(2).replace('-', '−');
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --------------------------------------------------------------- one panel

// Builds the SVG body of one panel in its own local pixel box.
function panelBody(p, geom, P) {
  const { w, h, padL, padR, padT, padB } = geom;
  const xr = p.xRange, yr = p.yRange;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const X = (x) => padL + ((x - xr[0]) / (xr[1] - xr[0])) * plotW;
  const Y = (y) => padT + ((yr[1] - y) / (yr[1] - yr[0])) * plotH;
  const out = [];

  const y0 = Y(0);
  const x0 = X(0) >= padL && X(0) <= padL + plotW ? X(0) : padL;

  // ---- ticks first, so the axes sit on top of them
  const ticks = [];
  if (p.xTicks === 'pi') {
    const step = p.xTickStep || PI / 2;
    const first = Math.ceil(xr[0] / step) * step;
    for (let t = first; t <= xr[1] + 1e-9; t += step) {
      if (Math.abs(t) > 1e-9) ticks.push({ at: t, label: fmtPi(t) });
    }
  } else if (Array.isArray(p.xTicks)) {
    p.xTicks.forEach((t) => {
      ticks.push(typeof t === 'number' ? { at: t, label: fmtNum(t) } : t);
    });
  }
  // Tick marks sit on the axis; their LABELS sit under the plot box, never on
  // the axis - a label at y0+16 lands on top of the curve wherever the curve
  // crosses zero, which is exactly where the interesting ticks are.
  const labelY = padT + plotH + 15;
  ticks.forEach((t) => {
    const x = X(t.at);
    out.push(
      `<line x1="${x.toFixed(1)}" y1="${(y0 - 4).toFixed(1)}" x2="${x.toFixed(1)}" y2="${(y0 + 4).toFixed(1)}" stroke="${P.mutedLight}" stroke-width="${P.wHair}"/>`
    );
    if (t.label) {
      out.push(
        `<line x1="${x.toFixed(1)}" y1="${(padT + plotH).toFixed(1)}" x2="${x.toFixed(1)}" y2="${(padT + plotH + 4).toFixed(1)}" stroke="${P.hairline}" stroke-width="${P.wHair}"/>`
      );
      out.push(
        `<text x="${x.toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${P.fsAxis}" fill="${P.muted}">${esc(t.label)}</text>`
      );
    }
  });
  (p.yTicks || []).forEach((t) => {
    const at = typeof t === 'number' ? t : t.at;
    const lab = typeof t === 'number' ? fmtNum(t) : t.label;
    const y = Y(at);
    out.push(
      `<line x1="${(x0 - 4).toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x0 + 4).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${P.mutedLight}" stroke-width="${P.wHair}"/>`
    );
    if (lab) {
      out.push(
        `<text x="${(x0 - 8).toFixed(1)}" y="${(y + 3.5).toFixed(1)}" text-anchor="end" font-family="${FONT}" font-size="${P.fsAxis}" fill="${P.muted}">${esc(lab)}</text>`
      );
    }
  });

  // ---- axes
  out.push(
    `<line x1="${padL.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${(padL + plotW).toFixed(1)}" y2="${y0.toFixed(1)}" stroke="${P.mutedLight}" stroke-width="${P.wAxis}"/>`
  );
  out.push(
    `<line x1="${x0.toFixed(1)}" y1="${padT.toFixed(1)}" x2="${x0.toFixed(1)}" y2="${(padT + plotH).toFixed(1)}" stroke="${P.mutedLight}" stroke-width="${P.wAxis}"/>`
  );

  // ---- marks that sit UNDER the curve
  const marks = p.marks || [];
  const under = marks.filter((m) => m.type === 'band' || m.type === 'strip' || m.type === 'vspan');
  under.forEach((m) => {
    const col = P[m.color] || m.color || P.primary;
    if (m.type === 'strip') {
      // horizontal strip between two y values, full width
      const ya = Y(Math.max(m.from, m.to)), yb = Y(Math.min(m.from, m.to));
      out.push(
        `<rect x="${padL.toFixed(1)}" y="${ya.toFixed(1)}" width="${plotW.toFixed(1)}" height="${(yb - ya).toFixed(1)}" fill="${col}" fill-opacity="${m.opacity || P.fillBand}"/>`
      );
      if (m.outline) {
        out.push(
          `<rect x="${padL.toFixed(1)}" y="${ya.toFixed(1)}" width="${plotW.toFixed(1)}" height="${(yb - ya).toFixed(1)}" fill="none" stroke="${col}" stroke-width="${P.wRef}" stroke-dasharray="4 3"/>`
        );
      }
    } else if (m.type === 'vspan') {
      // vertical span between two x values, full height
      const xa = X(Math.min(m.from, m.to)), xb = X(Math.max(m.from, m.to));
      out.push(
        `<rect x="${xa.toFixed(1)}" y="${padT.toFixed(1)}" width="${(xb - xa).toFixed(1)}" height="${plotH.toFixed(1)}" fill="${col}" fill-opacity="${m.opacity || P.fillBand}"/>`
      );
    } else {
      // band: between the curve and a horizontal line, over [from, to]
      const src = p.curves[m.curve || 0];
      const pts = samplePath(src, [m.from, m.to], 220);
      const base = Y(m.base === undefined ? 0 : m.base);
      const d =
        'M ' +
        pts.map((q) => `${X(q[0]).toFixed(1)} ${Y(q[1]).toFixed(1)}`).join(' L ') +
        ` L ${X(m.to).toFixed(1)} ${base.toFixed(1)} L ${X(m.from).toFixed(1)} ${base.toFixed(1)} Z`;
      out.push(
        `<path d="${d}" fill="${col}" fill-opacity="${m.opacity || P.fillBand}" stroke="none"/>`
      );
    }
  });

  // ---- horizontal / vertical reference lines
  marks
    .filter((m) => m.type === 'hline' || m.type === 'midline' || m.type === 'vline' || m.type === 'asymptote')
    .forEach((m) => {
      const col = P[m.color] || m.color || (m.type === 'midline' ? P.muted : P.resultStroke);
      if (m.type === 'vline' || m.type === 'asymptote') {
        const x = X(m.at);
        out.push(
          `<line x1="${x.toFixed(1)}" y1="${padT.toFixed(1)}" x2="${x.toFixed(1)}" y2="${(padT + plotH).toFixed(1)}" stroke="${col}" stroke-width="${P.wRef}" stroke-dasharray="${m.type === 'asymptote' ? '5 4' : '3 3'}"/>`
        );
      } else {
        const y = Y(m.at);
        out.push(
          `<line x1="${padL.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(padL + plotW).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${col}" stroke-width="${P.wRef}" stroke-dasharray="${m.type === 'midline' ? '6 4' : '5 3'}"/>`
        );
        if (m.label) {
          // labelAt lets the caller park the label where the curve is not.
          const lx = m.labelAt === undefined ? padL + plotW - 2 : X(m.labelAt);
          out.push(
            `<text x="${lx.toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="${m.labelAnchor || 'end'}" font-family="${FONT}" font-size="${P.fsAxis}" font-weight="${P.weightBold}" fill="${col}">${esc(m.label)}</text>`
          );
        }
      }
    });

  // ---- the curves
  p.curves.forEach((cv, i) => {
    const col = P[cv.color] || cv.color || (i === 0 ? P.primary : P.secondary);
    const wStroke = cv.emphasis ? P.wCurveEmph : P.wCurve;
    const segs = curveSegments(cv, xr);
    segs.forEach((seg) => {
      if (seg.length < 2) return;
      const d = 'M ' + seg.map((q) => `${X(q[0]).toFixed(1)} ${Y(q[1]).toFixed(1)}`).join(' L ');
      out.push(
        `<path d="${d}" fill="none" stroke="${col}" stroke-width="${wStroke}" stroke-linecap="round" stroke-linejoin="round"${cv.dash ? ` stroke-dasharray="${cv.dash}"` : ''}${cv.opacity ? ` opacity="${cv.opacity}"` : ''}/>`
      );
    });
    // auto-draw asymptotes for unbounded curves unless told not to
    if (cv.asymptotes !== false && !FN[cv.fn].bounded) {
      const B = cv.B === undefined ? 1 : cv.B;
      const Cc = cv.C === undefined ? 0 : cv.C;
      asymptotesOf(cv.fn, B * xr[0] - Cc, B * xr[1] - Cc).forEach((a) => {
        const x = X((a + Cc) / B);
        out.push(
          `<line x1="${x.toFixed(1)}" y1="${padT.toFixed(1)}" x2="${x.toFixed(1)}" y2="${(padT + plotH).toFixed(1)}" stroke="${P.hairline}" stroke-width="${P.wHair}" stroke-dasharray="5 4"/>`
        );
      });
    }
    if (cv.label) {
      const lx = cv.labelAt === undefined ? xr[1] - (xr[1] - xr[0]) * 0.02 : cv.labelAt;
      const ly = evalAt(cv, lx);
      const anchor = cv.labelAnchor || 'end';
      out.push(
        `<text x="${X(lx).toFixed(1)}" y="${(Y(isFinite(ly) ? ly : 0) - 8).toFixed(1)}" text-anchor="${anchor}" font-family="${FONT}" font-size="${P.fsLabel}" font-weight="${P.weightBold}" fill="${col}">${esc(cv.label)}</text>`
      );
    }
  });

  // ---- marks that sit OVER the curve
  marks.forEach((m) => {
    const col = P[m.color] || m.color || P.resultStroke;
    if (m.type === 'points') {
      const src = p.curves[m.curve || 0];
      m.at.forEach((x, idx) => {
        const y = m.y && m.y[idx] !== undefined ? m.y[idx] : evalAt(src, x);
        out.push(
          `<circle cx="${X(x).toFixed(1)}" cy="${Y(y).toFixed(1)}" r="${m.r || 4}" fill="${col}" stroke="${P.surface}" stroke-width="1.2"/>`
        );
        if (m.labels && m.labels[idx]) {
          out.push(
            `<text x="${X(x).toFixed(1)}" y="${(Y(y) - 11).toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${P.fsAxis}" font-weight="${P.weightBold}" fill="${col}">${esc(m.labels[idx])}</text>`
          );
        }
      });
    } else if (m.type === 'bracket') {
      out.push(bracket(m, X, Y, P, padT, plotH));
    } else if (m.type === 'callout') {
      out.push(callout(m, X, Y, P));
    } else if (m.type === 'dimension') {
      out.push(dimension(m, X, Y, P));
    } else if (m.type === 'note') {
      out.push(
        `<text x="${X(m.at).toFixed(1)}" y="${Y(m.y).toFixed(1)}" text-anchor="${m.anchor || 'middle'}" font-family="${FONT}" font-size="${m.size || P.fsCallout}" font-weight="${m.bold === false ? 400 : P.weightBold}" fill="${P[m.color] || m.color || P.text}">${esc(m.text)}</text>`
      );
    }
  });

  if (p.title) {
    out.push(
      `<text x="${(padL + plotW / 2).toFixed(1)}" y="${(padT - 10).toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${P.fsLabel}" font-weight="${P.weightBold}" fill="${P.text}">${esc(p.title)}</text>`
    );
  }
  return out.join('');
}

// --------------------------------------------------------------- primitives

function bracket(m, X, Y, P, padT, plotH) {
  const col = P[m.color] || m.color || P.resultStroke;
  const tick = 5;
  const out = [];
  if (m.orient === 'v') {
    const x = X(m.at === undefined ? 0 : m.at);
    const ya = Y(m.from), yb = Y(m.to);
    out.push(
      `<line x1="${x.toFixed(1)}" y1="${ya.toFixed(1)}" x2="${x.toFixed(1)}" y2="${yb.toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}"/>`
    );
    out.push(
      `<line x1="${(x - tick).toFixed(1)}" y1="${ya.toFixed(1)}" x2="${(x + tick).toFixed(1)}" y2="${ya.toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}"/>`
    );
    out.push(
      `<line x1="${(x - tick).toFixed(1)}" y1="${yb.toFixed(1)}" x2="${(x + tick).toFixed(1)}" y2="${yb.toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}"/>`
    );
    if (m.label) {
      out.push(
        `<text x="${(x + (m.labelSide === 'left' ? -9 : 9)).toFixed(1)}" y="${((ya + yb) / 2 + 4).toFixed(1)}" text-anchor="${m.labelSide === 'left' ? 'end' : 'start'}" font-family="${FONT}" font-size="${P.fsCallout}" font-weight="${P.weightBold}" fill="${col}">${esc(m.label)}</text>`
      );
    }
  } else {
    const y = m.y === undefined ? padT + plotH - 6 : Y(m.y);
    const xa = X(m.from), xb = X(m.to);
    out.push(
      `<line x1="${xa.toFixed(1)}" y1="${y.toFixed(1)}" x2="${xb.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}"/>`
    );
    out.push(
      `<line x1="${xa.toFixed(1)}" y1="${(y - tick).toFixed(1)}" x2="${xa.toFixed(1)}" y2="${(y + tick).toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}"/>`
    );
    out.push(
      `<line x1="${xb.toFixed(1)}" y1="${(y - tick).toFixed(1)}" x2="${xb.toFixed(1)}" y2="${(y + tick).toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}"/>`
    );
    if (m.label) {
      out.push(
        `<text x="${((xa + xb) / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${P.fsCallout}" font-weight="${P.weightBold}" fill="${col}">${esc(m.label)}</text>`
      );
    }
  }
  return out.join('');
}

function callout(m, X, Y, P) {
  const col = P[m.color] || m.color || P.resultStroke;
  const tx = X(m.tx), ty = Y(m.ty);
  const ax = X(m.ax), ay = Y(m.ay);
  return (
    `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${tx.toFixed(1)}" y2="${ty.toFixed(1)}" stroke="${col}" stroke-width="${P.wBracket}" opacity="0.75"/>` +
    `<circle cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" r="2.6" fill="${col}"/>` +
    `<text x="${tx.toFixed(1)}" y="${(ty + (m.above === false ? 12 : -6)).toFixed(1)}" text-anchor="${m.anchor || 'middle'}" font-family="${FONT}" font-size="${P.fsCallout}" font-weight="${P.weightBold}" fill="${col}">${esc(m.text)}</text>`
  );
}

function dimension(m, X, Y, P) {
  const col = P[m.color] || m.color || P.resultStroke;
  const y = Y(m.y);
  const xa = X(m.from), xb = X(m.to);
  const head = 4;
  return (
    `<line x1="${xa.toFixed(1)}" y1="${y.toFixed(1)}" x2="${xb.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${col}" stroke-width="${P.wEmph}"/>` +
    `<path d="M ${(xa + head).toFixed(1)} ${(y - head).toFixed(1)} L ${xa.toFixed(1)} ${y.toFixed(1)} L ${(xa + head).toFixed(1)} ${(y + head).toFixed(1)}" fill="none" stroke="${col}" stroke-width="${P.wBracket}"/>` +
    `<path d="M ${(xb - head).toFixed(1)} ${(y - head).toFixed(1)} L ${xb.toFixed(1)} ${y.toFixed(1)} L ${(xb - head).toFixed(1)} ${(y + head).toFixed(1)}" fill="none" stroke="${col}" stroke-width="${P.wBracket}"/>` +
    (m.label
      ? `<text x="${((xa + xb) / 2).toFixed(1)}" y="${(y - 7).toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${P.fsCallout}" font-weight="${P.weightBold}" fill="${col}">${esc(m.label)}</text>`
      : '')
  );
}

// ----------------------------------------------------------------- sampling

function evalAt(cv, x) {
  const A = cv.A === undefined ? 1 : cv.A;
  const B = cv.B === undefined ? 1 : cv.B;
  const Cc = cv.C === undefined ? 0 : cv.C;
  const D = cv.D === undefined ? 0 : cv.D;
  return A * FN[cv.fn].f(B * x - Cc) + D;
}

function samplePath(cv, range, n) {
  const pts = [];
  const step = (range[1] - range[0]) / n;
  for (let i = 0; i <= n; i += 1) {
    const x = range[0] + i * step;
    const y = evalAt(cv, x);
    if (isFinite(y)) pts.push([x, y]);
  }
  return pts;
}

// One path per branch: never a single path crossing an asymptote.
function curveSegments(cv, xr) {
  const B = cv.B === undefined ? 1 : cv.B;
  const Cc = cv.C === undefined ? 0 : cv.C;
  const clip = cv.clip || xr;
  const lo = Math.max(xr[0], clip[0]);
  const hi = Math.min(xr[1], clip[1]);
  const asymX = asymptotesOf(cv.fn, B * lo - Cc, B * hi - Cc)
    .map((a) => (a + Cc) / B)
    .filter((x) => x > lo && x < hi)
    .sort((a, b) => a - b);

  const bounds = [lo].concat(asymX, [hi]);
  const segs = [];
  const yLimit = cv.yClip === undefined ? 1e4 : cv.yClip;
  for (let i = 0; i < bounds.length - 1; i += 1) {
    const eps = (bounds[i + 1] - bounds[i]) * 0.004;
    const a = i === 0 ? bounds[i] : bounds[i] + eps;
    const b = i === bounds.length - 2 ? bounds[i + 1] : bounds[i + 1] - eps;
    if (b <= a) continue;
    const raw = samplePath(cv, [a, b], cv.samples || 260);
    // split again wherever the value leaves the drawable band
    let cur = [];
    raw.forEach((q) => {
      if (Math.abs(q[1]) > yLimit) {
        if (cur.length > 1) segs.push(cur);
        cur = [];
      } else {
        cur.push(q);
      }
    });
    if (cur.length > 1) segs.push(cur);
  }
  return segs;
}

// -------------------------------------------------------------------- entry

export default function renderCurveFeature(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const kind = spec.kind || 'single';
  if (kind !== 'single' && kind !== 'pair') {
    throw new Error(
      `curveFeature: scene type '${kind}' is declared in the package doc but not built yet. ` +
        `Add it in a new file per process v10 rule 11; do not edit this one.`
    );
  }

  const panels = (spec.panels || []).map((p) => ({
    xRange: p.xRange || spec.xRange || [0, 2 * PI],
    yRange: p.yRange || spec.yRange || [-1.4, 1.4],
    xTicks: p.xTicks === undefined ? (spec.xTicks === undefined ? 'pi' : spec.xTicks) : p.xTicks,
    xTickStep: p.xTickStep || spec.xTickStep,
    yTicks: p.yTicks || spec.yTicks,
    curves: p.curves || [],
    marks: p.marks || [],
    title: p.title,
  }));

  const gap = spec.gap === undefined ? 26 : spec.gap;
  const pw = spec.panelWidth || (kind === 'pair' ? 250 : 480);
  const ph = spec.panelHeight || (kind === 'pair' ? 190 : 230);
  const geom = {
    w: pw,
    h: ph,
    padL: spec.padL === undefined ? 34 : spec.padL,
    padR: spec.padR === undefined ? 14 : spec.padR,
    padT: spec.padT === undefined ? (panels.some((p) => p.title) ? 26 : 12) : spec.padT,
    padB: spec.padB === undefined ? 26 : spec.padB,
  };

  const totalW = panels.length * pw + (panels.length - 1) * gap;
  const groups = panels.map((p, i) => {
    const dx = i * (pw + gap);
    return `<g transform="translate(${dx},0)">${panelBody(p, geom, P)}</g>`;
  });

  const divider =
    kind === 'pair' && panels.length === 2
      ? `<line x1="${(pw + gap / 2).toFixed(1)}" y1="6" x2="${(pw + gap / 2).toFixed(1)}" y2="${ph - 6}" stroke="${P.hairlineLight}" stroke-width="${P.wHair}"/>`
      : '';

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${ph}" width="${totalW}" height="${ph}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.title ? `<title>${esc(spec.title)}</title>` : '') +
    divider +
    groups.join('') +
    `</svg>`
  );
}

export { renderCurveFeature, C as curveFeatureDefaults };
