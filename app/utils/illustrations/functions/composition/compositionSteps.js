// compositionSteps - composition of functions shown step by step.
//
// renderCompositionSteps(spec) -> SVG string. Docs: compositionSteps.md beside it.
//
// Scene types (spec.kind):
//   chain       rows of input -> [first function] -> middle value -> [second
//               function] -> output; two rows with the order swapped show
//               that f o g and g o f differ
//   graphical   two graphs side by side: read g(a) on the first, carry it to
//               the x-axis of the second, read f(g(a)) there
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry) - f in site blue, g in brand navy, the final output in site amber.

const C = {
  f: '#2563EB', fFill: '#DBEAFE', g: '#06357A', gFill: '#E8EEF7', r: '#B45309', rFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wMachine: 2, wArrow: 1.6, wCurve: 2.4, wAxis: 1.3, boxW: 52, boxH: 36, machineW: 90, machineH: 44,
  fsTitle: 13, fsValue: 16, fsName: 15, fsRule: 11, fsNote: 11, fsLabel: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const num = (v) => (v < 0 ? `−${-v}` : String(v));

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}
const marker = (id, col) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${col}"/></marker></defs>`;

// ---------------------------------------------------------------- chain
// Each row: input box, machine 1, middle box, machine 2, output box. The
// middle and output values are computed from the steps' functions, so the
// numbers in the boxes always follow from the rules printed on the machines.
// A step named 'f' is drawn in the f colour, any other name in the g colour.
function chain(spec, P) {
  const W = 540, H = 66 + spec.rows.length * 92, id = `${spec.idPrefix || 'cs'}-arr`;
  const o = [marker(id, P.muted)];
  const boxX = [20, 236, 452], machX = [108, 324];
  spec.rows.forEach((row, i) => {
    const y = 64 + i * 92;
    const v1 = row.steps[0].fn(row.input), v2 = row.steps[1].fn(v1);
    o.push(txt(row.title, 20, y - 30, P.text, P.fsTitle, 'start', 700));
    [num(row.input), num(v1), num(v2)].forEach((v, j) => {
      const last = j === 2, w = P.boxW + (last ? 16 : 0);
      o.push(`<rect x="${boxX[j]}" y="${y - P.boxH / 2}" width="${w}" height="${P.boxH}" rx="8" fill="${last ? P.rFill : '#fff'}" stroke="${last ? P.r : P.axis}" stroke-width="${last ? 2 : 1.4}"/>`);
      o.push(txt(v, boxX[j] + w / 2, y + 6, last ? P.r : P.text, P.fsValue, 'middle', 700));
    });
    row.steps.forEach((step, j) => {
      const x = machX[j], isF = step.name === 'f', col = isF ? P.f : P.g, fill = isF ? P.fFill : P.gFill;
      const from = boxX[j] + P.boxW, to = boxX[j + 1];
      o.push(`<line x1="${from + 4}" y1="${y}" x2="${x - 4}" y2="${y}" stroke="${P.muted}" stroke-width="${P.wArrow}" marker-end="url(#${id})"/>`);
      o.push(`<rect x="${x}" y="${y - P.machineH / 2}" width="${P.machineW}" height="${P.machineH}" rx="10" fill="${fill}" stroke="${col}" stroke-width="${P.wMachine}"/>`);
      o.push(txt(step.name, x + P.machineW / 2, y - 3, col, P.fsName, 'middle', 700));
      o.push(txt(step.rule, x + P.machineW / 2, y + 14, col, P.fsRule, 'middle', 600));
      o.push(`<line x1="${x + P.machineW + 4}" y1="${y}" x2="${to - 4}" y2="${y}" stroke="${P.muted}" stroke-width="${P.wArrow}" marker-end="url(#${id})"/>`);
    });
    if (row.note) o.push(txt(row.note, W - 12, y + 34, P.muted, P.fsNote, 'end', 500));
  });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 10, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------- graphical
// Left panel: g, with the input a marked on the axis and the point (a, g(a)).
// Right panel: f, with g(a) marked on its x-axis, dashed lines up to the
// curve and across to the y-axis at f(g(a)). A dashed curved arrow carries
// the value from the first panel to the second. g(a) and f(g(a)) are
// computed from the spec's functions.
function graphical(spec, P) {
  const W = 540, H = 330, id = `${spec.idPrefix || 'cs'}-carry`;
  const o = [marker(id, P.muted)];
  const panel = (x0, side, col) => {
    const L = x0 + 30, R = x0 + 240, Tp = 40, B = 260, xr = side.xRange, yr = side.yRange;
    const X = (x) => L + (x - xr[0]) / (xr[1] - xr[0]) * (R - L);
    const Y = (y) => B - (y - yr[0]) / (yr[1] - yr[0]) * (B - Tp);
    for (let v = Math.ceil(xr[0]); v <= xr[1]; v += 1) if (v) o.push(`<line x1="${f1(X(v))}" y1="${Tp}" x2="${f1(X(v))}" y2="${B}" stroke="${P.grid}"/>`);
    for (let v = Math.ceil(yr[0]); v <= yr[1]; v += 1) if (v) o.push(`<line x1="${L}" y1="${f1(Y(v))}" x2="${R}" y2="${f1(Y(v))}" stroke="${P.grid}"/>`);
    o.push(`<line x1="${L}" y1="${f1(Y(0))}" x2="${R}" y2="${f1(Y(0))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
    o.push(`<line x1="${f1(X(0))}" y1="${Tp}" x2="${f1(X(0))}" y2="${B}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
    const p = [];
    for (let i = 0; i <= 48; i += 1) {
      const x = xr[0] + (xr[1] - xr[0]) * i / 48, y = side.fn(x);
      if (y >= yr[0] && y <= yr[1]) p.push(`${p.length ? 'L' : 'M'}${f1(X(x))},${f1(Y(y))}`);
    }
    o.push(`<path d="${p.join(' ')}" fill="none" stroke="${col}" stroke-width="${P.wCurve}"/>`);
    o.push(txt(side.title, (L + R) / 2, Tp - 14, col, P.fsTitle, 'middle', 700));
    return { X, Y };
  };
  const a = spec.a, ga = spec.g.fn(a), fga = spec.f.fn(ga);
  const A = panel(0, spec.g, P.g), B = panel(270, spec.f, P.f);
  o.push(`<circle cx="${f1(A.X(a))}" cy="${f1(A.Y(ga))}" r="6" fill="${P.gFill}" stroke="${P.g}" stroke-width="2"/>`);
  o.push(txt(`g(${num(a)}) = ${num(ga)}`, A.X(a) - 10, A.Y(ga) + 4, P.g, P.fsLabel, 'end', 700));
  o.push(`<circle cx="${f1(A.X(a))}" cy="${f1(A.Y(0))}" r="4" fill="${P.text}"/>`);
  o.push(txt(`input ${num(a)}`, A.X(a) - 8, A.Y(0) + 16, P.muted, P.fsNote, 'end', 600));
  o.push(`<line x1="${f1(B.X(ga))}" y1="${f1(B.Y(0))}" x2="${f1(B.X(ga))}" y2="${f1(B.Y(fga))}" stroke="${P.r}" stroke-width="1.4" stroke-dasharray="4 3"/>`);
  o.push(`<line x1="${f1(B.X(ga))}" y1="${f1(B.Y(fga))}" x2="${f1(B.X(0))}" y2="${f1(B.Y(fga))}" stroke="${P.r}" stroke-width="1.4" stroke-dasharray="4 3"/>`);
  o.push(`<circle cx="${f1(B.X(ga))}" cy="${f1(B.Y(0))}" r="5" fill="${P.gFill}" stroke="${P.g}" stroke-width="2"/>`);
  o.push(`<circle cx="${f1(B.X(ga))}" cy="${f1(B.Y(fga))}" r="6" fill="${P.rFill}" stroke="${P.r}" stroke-width="2.2"/>`);
  o.push(txt(`input ${num(ga)}`, B.X(ga) - 10, B.Y(0) - 6, P.g, P.fsNote, 'end', 700));
  o.push(txt(`f(${num(ga)}) = ${num(fga)}`, B.X(0) + 6, B.Y(fga) - 6, P.r, P.fsLabel, 'start', 700));
  const sx = A.X(a) + 8, sy = A.Y(ga) + 4, ex = B.X(ga) - 2, ey = B.Y(0) + 6;
  o.push(`<path d="M${f1(sx)},${f1(sy)} C${f1(sx + 90)},${f1(sy + 50)} ${f1(ex - 60)},${f1(ey + 50)} ${f1(ex)},${f1(ey + 8)}" fill="none" stroke="${P.muted}" stroke-width="${P.wArrow}" stroke-dasharray="5 4" marker-end="url(#${id})"/>`);
  o.push(txt(spec.carryNote || 'output of g becomes the input of f', (sx + ex) / 2 + 10, Math.max(sy, ey) + 50, P.muted, P.fsNote, 'middle', 600));
  o.push(txt(spec.caption || `(f ∘ g)(${num(a)}) = f(g(${num(a)})) = f(${num(ga)}) = ${num(fga)}`, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { chain, graphical };

export default function renderCompositionSteps(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `compositionSteps: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderCompositionSteps, C as compositionStepsDefaults };
