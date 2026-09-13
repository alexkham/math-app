// Frozen-state SVGs for the Projection (R²) tool (Line 1 anchor mesh).
//
// Projection.jsx is self-contained (own Math2D, own SVGRender, pr- prefixed
// CSS) and exports the pieces this module needs: SCENARIOS, DEFAULT_GEOM,
// DEFAULT_LAYERS, Math2D and SVGRender. The composition below is the tool's
// own ProjectionCanvas order at t = 1 — the morph's resting state, where the
// grid and unit square have been flattened onto the line by P — which is also
// where the live tool lands after every preset replay.
//
// COMPONENT_CSS is not exported, so the stylesheet here is a resolved copy of
// the tool's SVG rules with the variables replaced by their values from the
// .pr-root block (v #ea580c, pv #059669, line #2b5bd7, perp #dc2626, grid
// #e2e8f0, axis #94a3b8, soft #243049). The display face falls back to
// Georgia inside an inline SVG.
//
// Nothing in Projection.jsx is modified.

import { Math2D, SVGRender, SCENARIOS, DEFAULT_GEOM, DEFAULT_LAYERS } from './Projection';

const GEOM = DEFAULT_GEOM;            // { size: 600, scale: 50, gridR: 6 }
const V = [1.5, 1.5];                 // the canvas's own default probe vector
const LAYERS = DEFAULT_LAYERS;        // grid, line, kernel, square, dropline, labels

const CSS =
  '.pr-grid-line{stroke:#e2e8f0;stroke-width:1;fill:none}' +
  '.pr-grid-axis{stroke:#94a3b8;stroke-width:1.3;fill:none}' +
  '.pr-line-line{stroke:#2b5bd7;stroke-width:2.2;fill:none;opacity:.9;stroke-dasharray:8 5}' +
  '.pr-line-halo{stroke:#2b5bd7;stroke-width:12;fill:none;opacity:.10}' +
  '.pr-ker-line{stroke:#dc2626;stroke-width:1.5;fill:none;stroke-dasharray:5 4;opacity:.55}' +
  '.pr-line-label{fill:#2b5bd7;font-family:Georgia,serif;font-style:italic;font-size:14px;font-weight:500}' +
  '.pr-ker-label{fill:#dc2626;font-family:Georgia,serif;font-style:italic;font-size:13px;font-weight:500;opacity:.85}' +
  '.pr-unit-square{stroke-width:1.5}' +
  '.pr-dropline{stroke:#dc2626;stroke-width:1.5;fill:none;stroke-dasharray:4 4;opacity:.75}' +
  '.pr-right-angle{stroke:#dc2626;stroke-width:1.4;fill:none;opacity:.65}' +
  '.pr-v-shaft{stroke:#ea580c;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.pr-v-handle{fill:#ea580c;stroke:#fff;stroke-width:2}' +
  '.pr-v-label{fill:#ea580c;font-family:Georgia,serif;font-style:italic;font-size:16px;font-weight:600}' +
  '.pr-pv-shaft{stroke:#059669;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.pr-pv-tip{fill:#059669;stroke:#fff;stroke-width:2}' +
  '.pr-pv-label{fill:#059669;font-family:Georgia,serif;font-style:italic;font-size:16px;font-weight:600}' +
  '.pr-pv-collapsed{fill:none;stroke:#dc2626;stroke-width:2;stroke-dasharray:3 3}' +
  '.pr-origin-dot{fill:#243049}';

const MARK = (id, fill) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('pr-arr-v', '#ea580c') + MARK('pr-arr-pv', '#059669') + '</defs>';

// the canvas's own composition order at t = 1
function freezeState(theta, v, label) {
  const P = Math2D.projMatrix(theta);
  const M = P;                                  // Math2D.interp(1, P)
  const u = Math2D.unitFromAngle(theta);
  const uPerp = [-u[1], u[0]];
  const Pv = Math2D.apply(P, v);

  let inner = '';
  if (LAYERS.grid) inner += SVGRender.grid(M, GEOM);
  if (LAYERS.line) {
    inner += SVGRender.lineThroughOrigin(u, 'pr-line-line', 'pr-line-halo', GEOM);
    if (LAYERS.labels) inner += SVGRender.labelOnLine(u, 'im P', 'pr-line-label', GEOM);
  }
  if (LAYERS.kernel) {
    inner += SVGRender.lineThroughOrigin(uPerp, 'pr-ker-line', null, GEOM);
    if (LAYERS.labels) inner += SVGRender.labelOnLine(uPerp, 'ker P', 'pr-ker-label', GEOM);
  }
  if (LAYERS.square) inner += SVGRender.unitSquare(M, GEOM);
  if (LAYERS.dropline && Math.hypot(v[0] - Pv[0], v[1] - Pv[1]) > 1e-3) {
    inner += SVGRender.dropline(v, Pv, GEOM);
  }
  inner += SVGRender.pvArrow(Pv, GEOM, LAYERS.labels);
  inner += SVGRender.vArrow(v, GEOM, LAYERS.labels);
  inner += SVGRender.origin(GEOM);

  return (
    `<svg viewBox="0 0 ${GEOM.size} ${GEOM.size}" width="420" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane with the ${label} projection line, the vector v and its projection Pv">` +
    `<style>${CSS}</style>` +
    MARKERS +
    `<rect width="${GEOM.size}" height="${GEOM.size}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

const freeze = (key, v = V) => freezeState(SCENARIOS[key].theta, v, SCENARIOS[key].label);

// which scenario represents each section on the page
export const representative = {
  axes: 'xAxis',
  diagonals: 'diag',
  custom: 'deg30',
  kernel: 'diag',        // with v placed on ker P, see below
};

// a probe vector lying on the kernel of the diagonal projection: v ⟂ (1, 1)
export const KERNEL_V = [1.5, -1.5];

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => [k, sc.group])
);

// the numbers the tool's cards would show for each preset at the default v
export const statsFor = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => {
    const P = Math2D.projMatrix(sc.theta);
    const Pv = Math2D.apply(P, V);
    return [k, {
      thetaDeg: Math.round(sc.theta * 180 / Math.PI),
      P,
      Pv,
      residual: Math.hypot(V[0] - Pv[0], V[1] - Pv[1]),
      det: Math2D.det(P),
      trace: Math2D.trace(P),
    }];
  })
);

export const meta = {
  geom: GEOM,
  v: V,
  kernelV: KERNEL_V,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, sc]) => {
    (acc[sc.group] = acc[sc.group] || []).push(k);
    return acc;
  }, {}),
};

const projectionDiagrams = {
  axes: freeze(representative.axes),
  diagonals: freeze(representative.diagonals),
  custom: freeze(representative.custom),
  kernel: freeze(representative.kernel, KERNEL_V),
};

export default projectionDiagrams;
