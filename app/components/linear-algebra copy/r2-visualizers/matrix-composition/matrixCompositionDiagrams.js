// Frozen-state SVGs for the Matrix Composition (R²) tool (Line 1 anchor mesh).
//
// MatrixComposition.jsx is self-contained (own Math2D, own SVGRender, mc-
// prefixed CSS) and exports the pieces this module needs: SCENARIOS,
// DEFAULT_GEOM, DEFAULT_LAYERS, Math2D, SVGRender and phaseMatrices. The
// composition below is the tool's own TrailCanvas order in AB mode at t = 1,
// the end of the two-phase animation: the grid and unit square carry the full
// product AB, the solid two-segment trail runs v₀ → Bv → ABv, and the dashed
// alternative trail shows the BA route for comparison.
//
// The scenarios store A and B as factory functions, so each is called.
//
// COMPONENT_CSS is not exported, so the stylesheet here is a resolved copy of
// the few class rules the canvas markup uses (the arrows, trails and ghosts
// carry their colours as inline attributes). Grid #e2e8f0, axis #94a3b8,
// final square #6366f1, origin #243049; the display face falls back to
// Georgia and the mono face to Menlo/monospace inside an inline SVG.
//
// Nothing in MatrixComposition.jsx is modified.

import { Math2D, SVGRender, SCENARIOS, DEFAULT_GEOM, DEFAULT_LAYERS, phaseMatrices } from './MatrixComposition';

const GEOM = DEFAULT_GEOM;            // { size: 600, scale: 50, gridR: 8 }
const V = [1.5, 1];                   // the canvas's own default probe vector
const LAYERS = DEFAULT_LAYERS;        // grid, unitSquare, ghosts, primaryPath, altPath, labels
const T = 1;                          // end of the animation

const COLOR_B = '#0d9488';            // first matrix in AB mode
const COLOR_A = '#7c3aed';            // second matrix in AB mode

const CSS =
  '.mc-grid-line{stroke:#e2e8f0;stroke-width:1;fill:none}' +
  '.mc-grid-axis{stroke:#94a3b8;stroke-width:1.3;fill:none}' +
  '.mc-unit-square{stroke-width:1.5;fill:rgba(148,163,184,0.12);stroke:#94a3b8}' +
  '.mc-unit-square.mc-final-square{fill:rgba(99,102,241,0.18);stroke:#6366f1}' +
  '.mc-origin-dot{fill:#243049}' +
  '.mc-v-label{font-family:Georgia,serif;font-style:italic;font-size:16px;font-weight:600}' +
  '.mc-ghost-label{font-family:Menlo,monospace;font-size:10px;font-weight:600}';

const MARKERS =
  '<defs><marker id="mc-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ' +
  'orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c"/></marker></defs>';

// the TrailCanvas composition order, AB mode, t = 1
function freezeState(A, B, v, label) {
  const first = B, second = A;
  const firstColor = COLOR_B, secondColor = COLOR_A;
  const otherFirst = A, otherSecond = B;
  const otherFirstColor = COLOR_A, otherSecondColor = COLOR_B;

  const { Mcomposed } = phaseMatrices(T, first, second);
  const vMid = Math2D.apply(first, v);
  const vEnd = Math2D.apply(Math2D.mul(second, first), v);
  const vNow = Math2D.apply(Mcomposed, v);
  const vAltMid = Math2D.apply(otherFirst, v);
  const vAltEnd = Math2D.apply(Math2D.mul(otherSecond, otherFirst), v);

  let inner = '';
  if (LAYERS.grid) inner += SVGRender.morphedGroup(Mcomposed, GEOM, SVGRender.gridIdentity(GEOM));
  if (LAYERS.unitSquare) inner += SVGRender.unitSquare(Mcomposed, GEOM, 'mc-unit-square mc-final-square');

  if (LAYERS.altPath) {
    inner += SVGRender.altPath(v, vAltMid, vAltEnd, otherFirstColor, otherSecondColor, GEOM);
    if (LAYERS.ghosts) {
      inner += SVGRender.ghost(vAltMid, otherFirstColor, GEOM, {
        radius: 5, opacity: 0.7, labelOpacity: 0.8,
        label: LAYERS.labels ? 'Av' : null, labelOffset: [-12, -4],
      });
      inner += SVGRender.ghost(vAltEnd, otherSecondColor, GEOM, {
        radius: 5.5, opacity: 0.75, labelOpacity: 0.85,
        label: LAYERS.labels ? 'BAv' : null, labelOffset: [14, -4],
      });
    }
  }

  if (LAYERS.primaryPath) inner += SVGRender.trailPath(T, v, vMid, vEnd, vNow, firstColor, secondColor, GEOM);

  if (LAYERS.ghosts) {
    inner += SVGRender.ghost(v, '#ea580c', GEOM, {
      radius: 6, opacity: 1, labelOpacity: 1,
      label: LAYERS.labels ? 'v₀' : null, labelOffset: [0, 18],
    });
    inner += SVGRender.ghost(vMid, firstColor, GEOM, {
      solid: true, withInnerDot: true, radius: 6.5,
      label: LAYERS.labels ? 'Bv' : null, labelOffset: [8, 16],
    });
    inner += SVGRender.ghost(vEnd, secondColor, GEOM, {
      solid: true, withInnerDot: true, opacity: 1, labelOpacity: 1,
      label: LAYERS.labels ? 'ABv' : null, labelOffset: [0, -8],
    });
  }

  inner += SVGRender.origin(GEOM);
  inner += SVGRender.vectorArrow(vNow, '#ea580c', LAYERS.labels ? 'v' : null, 'mc-arr-v', GEOM, false);

  return (
    `<svg viewBox="0 0 ${GEOM.size} ${GEOM.size}" width="420" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane after the composition AB for the ${label} pair, with the trail of v through Bv to ABv and the alternative BA route">` +
    `<style>${CSS}</style>` +
    MARKERS +
    `<rect width="${GEOM.size}" height="${GEOM.size}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

const freeze = (key) => {
  const sc = SCENARIOS[key];
  return freezeState(sc.A(), sc.B(), V, sc.label);
};

// which scenario represents each section on the page
export const representative = {
  commute: 'twoRotations',
  noncommute: 'shearRotate',
  revealRotation: 'twoReflections',
  revealInverse: 'shearInverse',
};

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => [k, sc.group])
);

// the numbers the tool's cards would show for each preset at the default v
export const statsFor = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => {
    const A = sc.A(), B = sc.B();
    const AB = Math2D.mul(A, B), BA = Math2D.mul(B, A);
    return [k, {
      A, B, AB, BA,
      Bv: Math2D.apply(B, V),
      Av: Math2D.apply(A, V),
      ABv: Math2D.apply(AB, V),
      BAv: Math2D.apply(BA, V),
      commutes: Math2D.matEquals(AB, BA),
      detAB: Math2D.det(AB),
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

const matrixCompositionDiagrams = {
  commute: freeze(representative.commute),
  noncommute: freeze(representative.noncommute),
  revealRotation: freeze(representative.revealRotation),
  revealInverse: freeze(representative.revealInverse),
};

export default matrixCompositionDiagrams;
