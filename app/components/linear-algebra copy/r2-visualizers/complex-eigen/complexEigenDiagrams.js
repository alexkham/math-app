// Frozen-state SVGs for the Complex Eigenvalues (R²) tool (Line 1 anchor mesh).
//
// ComplexEigen.jsx is self-contained (own Math2D, own SVGRender, ce- prefixed
// CSS) and exports the pieces this module needs: composeScene, SCENARIOS,
// DEFAULT_GEOM, DEFAULT_LAYERS, DEFAULT_STEPS, DEFAULT_X0, Math2D. Each still is
// the tool's own canvas composition at t = 1 — the full orbit drawn — for a
// representative preset.
//
// COMPONENT_CSS is not exported, so the stylesheet here is a resolved copy of
// the tool's SVG rules with the variables replaced by their values from the
// .ce-root block (v #ea580c, k #0891b2, orbit #2b5bd7, el #7c3aed, ax #16a34a,
// sp #64748b, grid #e2e8f0, axis #94a3b8, soft #243049). The display face
// falls back to Georgia inside an inline SVG.
//
// Nothing in ComplexEigen.jsx is modified.

import { Math2D, composeScene, SCENARIOS, DEFAULT_GEOM, DEFAULT_LAYERS, DEFAULT_STEPS, DEFAULT_X0 } from './ComplexEigen';

const GEOM = DEFAULT_GEOM;
const X0 = DEFAULT_X0;
const LAYERS = DEFAULT_LAYERS;

const CSS =
  '.ce-grid-line{stroke:#e2e8f0;stroke-width:1;fill:none}' +
  '.ce-grid-axis{stroke:#94a3b8;stroke-width:1.3;fill:none}' +
  '.ce-axis-line{stroke-width:1.2;fill:none;stroke-dasharray:6 5;opacity:.55}' +
  '.ce-axis-vec{stroke-width:2;fill:none;stroke-linecap:round}' +
  '.ce-axis-re{stroke:#16a34a}' +
  '.ce-axis-im{stroke:#16a34a;opacity:.8}' +
  '.ce-axis-label{fill:#16a34a;font-family:Georgia,serif;font-style:italic;font-size:12.5px;font-weight:600;stroke:none}' +
  '.ce-ellipse{stroke:#7c3aed;stroke-width:1.6;fill:rgba(124,58,237,.12);opacity:.9}' +
  '.ce-spiral{stroke:#64748b;stroke-width:1.4;fill:none;opacity:.7}' +
  '.ce-orbit-path{stroke:#2b5bd7;stroke-width:1;fill:none;opacity:.35;stroke-dasharray:3 3}' +
  '.ce-orbit-dot{fill:#2b5bd7;stroke:#fff;stroke-width:1.2}' +
  '.ce-orbit-start{fill:#ea580c}' +
  '.ce-orbit-label{fill:#2b5bd7;font-family:Menlo,monospace;font-size:10px;font-weight:600}' +
  '.ce-v-shaft{stroke:#ea580c;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.ce-v-handle{fill:#ea580c;stroke:#fff;stroke-width:2}' +
  '.ce-v-label{fill:#ea580c;font-family:Georgia,serif;font-style:italic;font-size:16px;font-weight:600}' +
  '.ce-k-shaft{stroke:#0891b2;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.ce-k-tip{fill:#0891b2;stroke:#fff;stroke-width:2}' +
  '.ce-k-label{fill:#0891b2;font-family:Georgia,serif;font-style:italic;font-size:15px;font-weight:600}' +
  '.ce-origin-dot{fill:#243049}';

const MARK = (id, fill, size = 4.5) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="${size}" markerHeight="${size}" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('ce-arr-v', '#ea580c') + MARK('ce-arr-k', '#0891b2') +
  MARK('ce-arr-re', '#16a34a', 4) + MARK('ce-arr-im', '#16a34a', 4) + '</defs>';

function freezeState(A, x0, t, steps, layers, label) {
  const { inner } = composeScene({ A, x0, t, steps, layers, geom: GEOM });
  return (
    `<svg viewBox="0 0 ${GEOM.size} ${GEOM.size}" width="420" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane with the orbit of x0 under ${label}">` +
    `<style>${CSS}</style>` +
    MARKERS +
    `<rect width="${GEOM.size}" height="${GEOM.size}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

const freeze = (key, opts = {}) => {
  const sc = SCENARIOS[key];
  return freezeState(sc.A, opts.x0 || X0, opts.t == null ? 1 : opts.t, opts.steps || DEFAULT_STEPS, opts.layers || LAYERS, sc.label);
};

// which scenario represents each section on the page
export const representative = {
  rotation: 'rotate45',
  ellipse: 'ellipse',
  axes: 'ellipse',      // same matrix, orbit and spiral hidden: only P's columns and the ellipse
  inward: 'decay',
  outward: 'growth',
  skew: 'skewIn',
};

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => [k, sc.group])
);

// the numbers the tool's cards would show for each preset at the default x0
export const statsFor = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => {
    const dec = Math2D.decompose(sc.A);
    const x1 = Math2D.apply(sc.A, X0);
    return [k, {
      A: sc.A,
      a: dec.a, b: dec.b, r: dec.r, thetaDeg: Math2D.deg(dec.theta),
      P: dec.P, C: dec.C,
      det: Math2D.det(sc.A), trace: Math2D.trace(sc.A),
      x1,
      stepsPerTurn: 360 / Math.abs(Math2D.deg(dec.theta)),
    }];
  })
);

export const meta = {
  geom: GEOM,
  x0: X0,
  steps: DEFAULT_STEPS,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, sc]) => {
    (acc[sc.group] = acc[sc.group] || []).push(k);
    return acc;
  }, {}),
};

const complexEigenDiagrams = {
  rotation: freeze(representative.rotation),
  ellipse: freeze(representative.ellipse, { steps: 6 }),
  axes: freeze(representative.axes, { t: 0, layers: { ...LAYERS, orbit: false, spiral: false } }),
  inward: freeze(representative.inward, { steps: 12 }),
  outward: freeze(representative.outward, { x0: [1, 0.25], steps: 8 }),
  skew: freeze(representative.skew, { steps: 10 }),
};

export default complexEigenDiagrams;
