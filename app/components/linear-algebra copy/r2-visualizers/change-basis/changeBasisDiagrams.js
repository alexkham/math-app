// Frozen-state SVGs for the Change of Basis (R²) tool (Line 1 anchor mesh).
//
// This is the one r2 tool that DOES build on 2DCore: its live copy imports
// Math2D, SVGRender, projection and DEFAULT_GEOM from there, and adds two small
// local builders of its own for the decomposition legs and the three arrows.
// Those two are not exported (and the file carries five commented-out earlier
// copies of them, so surgically exporting the live pair is riskier than it is
// worth) — they are ported verbatim below, marked as such.
//
// Everything else is the tool's own: SVGRender.grid / basisGrid / origin from
// 2DCore, the exported SCENARIOS and CB_GEOM, and the two stylesheets
// (2DCore's SHARED_CSS plus the tool's TOOL_CSS) filtered down to the rules the
// markup actually uses.
//
// Every state is frozen at the canvas's own default probe vector v = [2.5, 1.5]
// with the tool's DEFAULT_LAYERS (grid, basis grid, decomposition, labels).

import { Math2D, SVGRender, projection, SHARED_CSS } from '../2DCore';
import { SCENARIOS, CB_GEOM, TOOL_CSS } from './ChangeBasis';

const GEOM = CB_GEOM;                       // { width:600, height:600, scale:50, gridRx:6, gridRy:6 }
const V = [2.5, 1.5];
const LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

const MARK = (id, fill) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('cb-arr-v', '#5b34c4') + MARK('cb-arr-b1', '#b54708') +
  MARK('cb-arr-b2', '#0e6e8a') + '</defs>';

/* ---- decompositionSVG, ported verbatim from ChangeBasis.jsx ---- */
function decompositionSVG(b1, b2, v, geom) {
  const c = Math2D.coordsInBasis(b1, b2, v);
  if (!c) return '';
  const tx = projection(geom);
  const [ox, oy] = tx([0, 0]);
  const leg1End = [c[0] * b1[0], c[0] * b1[1]];
  const [l1x, l1y] = tx(leg1End);
  const [vx, vy] = tx(v);
  let s = '';
  s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
  s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
  s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
  return s;
}

/* ---- arrowSVG, ported verbatim from ChangeBasis.jsx ---- */
function arrowSVG(p, kind, label, showLabel, geom) {
  const tx = projection(geom);
  const [ox, oy] = tx([0, 0]);
  const mag = Math.hypot(p[0], p[1]);
  let s = '';
  if (mag < 0.02) {
    s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
    return s;
  }
  const [tipX, tipY] = tx(p);
  s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
  s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
  if (showLabel) {
    const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
    const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
    const [px, py] = tx([lx, ly]);
    s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
  }
  return s;
}

/* ---- keep only the stylesheet rules this markup needs ---- */
function svgCssFor(markup) {
  const used = new Set();
  for (const m of markup.matchAll(/class="([^"]+)"/g)) {
    m[1].split(/\s+/).forEach((c) => c && used.add(c));
  }
  const all = SHARED_CSS + '\n' + TOOL_CSS;
  const out = [];
  const rootBlock = /\.r2-root\s*\{[^}]*\}/.exec(all);
  if (rootBlock) out.push(rootBlock[0]);
  for (const rule of all.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const sel = rule[1].replace(/\/\*[\s\S]*?\*\//g, '').trim();
    if (!sel || sel.startsWith('@')) continue;
    if ([...used].some((c) => sel.includes('.' + c))) out.push(sel + '{' + rule[2].trim() + '}');
  }
  return out.join('');
}

// the canvas's own composition order
function freeze(key) {
  const sc = SCENARIOS[key];
  const { b1, b2 } = sc;

  let inner = '';
  if (LAYERS.grid) inner += SVGRender.grid(GEOM);
  if (LAYERS.bgrid) inner += SVGRender.basisGrid(b1, b2, GEOM, 'cb-bgrid-1', 'cb-bgrid-2');
  if (LAYERS.decomp) inner += decompositionSVG(b1, b2, V, GEOM);
  inner += arrowSVG(b1, 'b1', 'b₁', LAYERS.labels, GEOM);
  inner += arrowSVG(b2, 'b2', 'b₂', LAYERS.labels, GEOM);
  inner += arrowSVG(V, 'v', 'v', LAYERS.labels, GEOM);
  inner += SVGRender.origin(GEOM);

  return (
    `<svg class="r2-root cb-canvas" viewBox="0 0 ${GEOM.width} ${GEOM.height}" width="460" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane with the ${sc.label} basis and the vector v decomposed along it">` +
    `<style>${svgCssFor(inner)}</style>` +
    MARKERS +
    `<rect width="${GEOM.width}" height="${GEOM.height}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

// which scenario represents each basis category on the page
export const representative = {
  natural: 'rotated30',
  nonorth: 'skewed',
  special: 'flipY',
  degenerate: 'collinear',
};

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, v]) => [k, v.group])
);

// the coordinates the tool computes for v in each frozen basis, so the page
// prose quotes the tool rather than a re-derivation
export const coordsFor = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => [k, Math2D.coordsInBasis(sc.b1, sc.b2, V)])
);

export const meta = {
  geom: GEOM,
  v: V,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, v]) => {
    (acc[v.group] = acc[v.group] || []).push(k);
    return acc;
  }, {}),
};

const changeBasisDiagrams = {
  natural: freeze(representative.natural),
  nonorth: freeze(representative.nonorth),
  special: freeze(representative.special),
  degenerate: freeze(representative.degenerate),
};

export default changeBasisDiagrams;
