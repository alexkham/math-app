// Frozen-state SVGs for the Linear Transformation (R²) tool (Line 1 anchor mesh).
//
// Unlike the MatrixCore tools, this component already renders SVG: its private
// SVGRender object is a set of pure string builders (grid, samples, circle,
// square, eigen, kerImg, basis) that the live canvas assembles with
// dangerouslySetInnerHTML. Those builders, the scoped stylesheet, the scenario
// table and the geometry are now exported additively, so a frozen still is the
// tool's own output — no renderer port at all.
//
// Two details make these standalone:
//   - the stylesheet is scoped under `.lt5-root`, so the <svg> carries that
//     class and inlines SVG_STYLE_CSS in a <style> element
//   - the basis arrows use marker-end="url(#lt-arr-i|j)", so the two <marker>
//     defs from the live canvas are reproduced here
//
// Every state is frozen at t = 1 — the transformation fully applied, which is
// what the scrub slider reaches at its right-hand end. Layers follow the
// component's DEFAULT_LAYERS: grid, basis, unit square, unit circle, kernel and
// image, with labels on; eigen and samples off.

import { SVGRender, SVG_STYLE_CSS, SCENARIOS, DEFAULT_GEOM } from './LinearTransformations';

const SIZE = DEFAULT_GEOM.size;
const GEOM = { cx: SIZE / 2, cy: SIZE / 2, scale: DEFAULT_GEOM.scale, gridR: DEFAULT_GEOM.gridR };

const MARKERS =
  '<defs>' +
  '<marker id="lt-arr-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ' +
  'orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c"/></marker>' +
  '<marker id="lt-arr-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ' +
  'orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2"/></marker>' +
  '</defs>';

// t = 1, so the displayed matrix M(t) = (1-t)I + tA is simply A
function freeze(key) {
  const sc = SCENARIOS[key];
  const A = sc.A;
  const M = A;

  const body =
    `<g>${SVGRender.grid(M, GEOM)}</g>` +
    `<g>${SVGRender.circle(M, GEOM)}</g>` +
    `<g>${SVGRender.square(M, GEOM)}</g>` +
    `<g>${SVGRender.kerImg(M, A, true, GEOM)}</g>` +
    `<g>${SVGRender.basis(M, true, GEOM)}</g>` +
    `<circle class="origin-dot" cx="${GEOM.cx}" cy="${GEOM.cy}" r="2.4"/>`;

  return (
    `<svg class="lt5-root" viewBox="0 0 ${SIZE} ${SIZE}" width="460" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane under the ${sc.label} transformation, fully applied">` +
    `<style>${SVG_STYLE_CSS}</style>` +
    MARKERS +
    `<rect width="${SIZE}" height="${SIZE}" fill="#ffffff"/>` +
    body +
    `</svg>`
  );
}

// which scenario represents each rank category on the page
export const representative = {
  identity: 'identity',
  fullRank: 'rot45',
  rankOne: 'projectX',
  zero: 'zero',
};

// every scenario's rank group, so the page can key its panel notes by scenario
// and still point at the right section
export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, v]) => [k, v.group])
);

export const meta = {
  size: SIZE,
  geom: GEOM,
  t: 1,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, v]) => {
    (acc[v.group] = acc[v.group] || []).push(k);
    return acc;
  }, {}),
};

const linearTransformationDiagrams = {
  identity: freeze(representative.identity),
  fullRank: freeze(representative.fullRank),
  rankOne: freeze(representative.rankOne),
  zero: freeze(representative.zero),
};

export default linearTransformationDiagrams;
