// Frozen-state SVGs for the Reflection (R²) tool (Line 1 anchor mesh).
//
// Reflection.jsx is self-contained (own Math2D, own SVGRender, rf- prefixed
// CSS) and exports the pieces this module needs: SCENARIOS, DEFAULT_GEOM,
// DEFAULT_LAYERS, Math2D and SVGRender. The composition below is the tool's
// own ReflectionCanvas order at t = 1 — the morph's resting state, where the
// grid and unit square have been flipped across the mirror by R — which is
// also where the live tool lands after every preset replay.
//
// COMPONENT_CSS is not exported, so the stylesheet here is a resolved copy of
// the tool's SVG rules with the variables replaced by their values from the
// .rf-root block (v #ea580c, rv #0891b2, line #2b5bd7, perp #dc2626, mid
// #7c3aed, grid #e2e8f0, axis #94a3b8, soft #243049). The display face falls
// back to Georgia inside an inline SVG.
//
// Nothing in Reflection.jsx is modified.

import { Math2D, SVGRender, SCENARIOS, DEFAULT_GEOM, DEFAULT_LAYERS } from './Reflection';

const GEOM = DEFAULT_GEOM;            // { size: 600, scale: 50, gridR: 6 }
const V = [1.5, 2];                   // the canvas's own default probe vector
const LAYERS = DEFAULT_LAYERS;        // grid, mirror, perp, midpoint, square, labels

const CSS =
  '.rf-grid-line{stroke:#e2e8f0;stroke-width:1;fill:none}' +
  '.rf-grid-axis{stroke:#94a3b8;stroke-width:1.3;fill:none}' +
  '.rf-mirror-line{stroke:#2b5bd7;stroke-width:2.2;fill:none;opacity:.9;stroke-dasharray:8 5}' +
  '.rf-mirror-halo{stroke:#2b5bd7;stroke-width:12;fill:none;opacity:.10}' +
  '.rf-mirror-label{fill:#2b5bd7;font-family:Georgia,serif;font-style:italic;font-size:14px;font-weight:500}' +
  '.rf-unit-square{stroke-width:1.5}' +
  '.rf-perp{stroke:#dc2626;stroke-width:1.5;fill:none;stroke-dasharray:4 4;opacity:.75}' +
  '.rf-right-angle{stroke:#dc2626;stroke-width:1.4;fill:none;opacity:.65}' +
  '.rf-mid-dot{fill:#7c3aed;stroke:#fff;stroke-width:1.5}' +
  '.rf-mid-label{fill:#7c3aed;font-family:Georgia,serif;font-style:italic;font-size:13px;font-weight:600}' +
  '.rf-v-shaft{stroke:#ea580c;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.rf-v-handle{fill:#ea580c;stroke:#fff;stroke-width:2}' +
  '.rf-v-label{fill:#ea580c;font-family:Georgia,serif;font-style:italic;font-size:16px;font-weight:600}' +
  '.rf-rv-shaft{stroke:#0891b2;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.rf-rv-tip{fill:#0891b2;stroke:#fff;stroke-width:2}' +
  '.rf-rv-label{fill:#0891b2;font-family:Georgia,serif;font-style:italic;font-size:16px;font-weight:600}' +
  '.rf-origin-dot{fill:#243049}';

const MARK = (id, fill) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('rf-arr-v', '#ea580c') + MARK('rf-arr-rv', '#0891b2') + '</defs>';

// the canvas's own composition order at the given t (1 = fully reflected,
// 0.5 = the projection, the halfway point of the morph)
function freezeState(theta, v, t, label) {
  const R = Math2D.reflMatrix(theta);
  const P = Math2D.projMatrix(theta);
  const M = Math2D.interp(t, R);
  const u = Math2D.unitFromAngle(theta);
  const Rv = Math2D.apply(R, v);
  const mid = Math2D.apply(P, v);

  let inner = '';
  if (LAYERS.grid) inner += SVGRender.grid(M, GEOM);
  if (LAYERS.mirror) {
    inner += SVGRender.mirrorLine(u, GEOM);
    if (LAYERS.labels) inner += SVGRender.labelOnLine(u, 'mirror', 'rf-mirror-label', GEOM);
  }
  if (LAYERS.square) inner += SVGRender.unitSquare(M, GEOM);
  if (LAYERS.perp && Math.hypot(v[0] - Rv[0], v[1] - Rv[1]) > 1e-3) {
    inner += SVGRender.perpThrough(v, Rv, mid, GEOM);
  }
  if (LAYERS.midpoint) inner += SVGRender.midpoint(mid, GEOM, LAYERS.labels);
  inner += SVGRender.rvArrow(Rv, GEOM, LAYERS.labels);
  inner += SVGRender.vArrow(v, GEOM, LAYERS.labels);
  inner += SVGRender.origin(GEOM);

  return (
    `<svg viewBox="0 0 ${GEOM.size} ${GEOM.size}" width="420" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane with the ${label} mirror line, the vector v and its reflection Rv">` +
    `<style>${CSS}</style>` +
    MARKERS +
    `<rect width="${GEOM.size}" height="${GEOM.size}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

const freeze = (key, t = 1, v = V) => freezeState(SCENARIOS[key].theta, v, t, SCENARIOS[key].label);

// which scenario represents each section on the page
export const representative = {
  axes: 'xAxis',
  diagonals: 'diag',
  custom: 'deg30',
  halfway: 'diag',       // frozen at t = 0.5, where the morph passes through P
};

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => [k, sc.group])
);

// the numbers the tool's cards would show for each preset at the default v
export const statsFor = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => {
    const R = Math2D.reflMatrix(sc.theta);
    const P = Math2D.projMatrix(sc.theta);
    const Rv = Math2D.apply(R, V);
    const Pv = Math2D.apply(P, V);
    return [k, {
      thetaDeg: Math.round(sc.theta * 180 / Math.PI),
      R,
      Rv,
      Pv,
      det: Math2D.det(R),
      trace: Math2D.trace(R),
      normV: Math.hypot(V[0], V[1]),
      normRv: Math.hypot(Rv[0], Rv[1]),
    }];
  })
);

export const meta = {
  geom: GEOM,
  v: V,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, sc]) => {
    (acc[sc.group] = acc[sc.group] || []).push(k);
    return acc;
  }, {}),
};

const reflectionDiagrams = {
  axes: freeze(representative.axes),
  diagonals: freeze(representative.diagonals),
  custom: freeze(representative.custom),
  halfway: freeze(representative.halfway, 0.5),
};

export default reflectionDiagrams;
