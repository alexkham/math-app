// Frozen-state SVGs for the Eigenvectors (R²) tool (Line 1 anchor mesh).
//
// Like the other r2-visualizers, this component renders its canvas from pure
// SVG string builders (SVGRender.grid / eigLines / dirLines / angleArc /
// vectors / origin), so a frozen still is the tool's own output rather than a
// port. The stills reproduce the component's own composition order and its
// three arrow <marker> defs.
//
// Styling needs one extra step here. Unlike LinearTransformations, which has a
// small SVG-only stylesheet, this component has a single 16 kB COMPONENT_CSS
// covering the whole UI. Inlining all of it into every unit would be wasteful,
// so `svgCssFor` keeps only the rules whose selectors mention a class the
// frozen SVG actually contains, plus the `.ev-root` block that defines the CSS
// custom properties those rules refer to. The class list is read off the
// generated markup, so it stays correct if the renderer changes.
//
// Every state is frozen with the probe vector at the component's initial
// v = [2, 1] and the component's DEFAULT_LAYERS (grid, eigen lines, direction
// lines, angle arc, labels).

import { SVGRender, SCENARIOS, DEFAULT_GEOM, COMPONENT_CSS, Math2D } from './EigenVectors';

const SIZE = DEFAULT_GEOM.size;
const GEOM = { size: SIZE, scale: DEFAULT_GEOM.scale, gridR: DEFAULT_GEOM.gridR };
const V = [2, 1];

const MARK = (id, fill) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('ev-arr-v', '#ea580c') + MARK('ev-arr-av', '#0891b2') +
  MARK('ev-arr-align', '#d97706') + '</defs>';

/* ---- keep only the stylesheet rules a given frozen SVG needs ---- */
function svgCssFor(markup) {
  const used = new Set();
  for (const m of markup.matchAll(/class="([^"]+)"/g)) {
    m[1].split(/\s+/).forEach((c) => c && used.add(c));
  }
  const out = [];
  // the rules below refer to CSS custom properties declared on .ev-root
  const rootBlock = /\.ev-root\s*\{[^}]*\}/.exec(COMPONENT_CSS);
  if (rootBlock) out.push(rootBlock[0]);
  for (const rule of COMPONENT_CSS.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const sel = rule[1].replace(/\/\*[\s\S]*?\*\//g, '').trim();
    if (!sel || sel.startsWith('@')) continue;
    if ([...used].some((c) => sel.includes('.' + c))) out.push(sel + '{' + rule[2].trim() + '}');
  }
  return out.join('');
}

function freeze(key) {
  const sc = SCENARIOS[key];
  const A = sc.A;
  // the component's own alignment helper: returns Av and whether v is an
  // eigenvector direction, using the same tolerance the live canvas uses
  const { Av, aligned } = Math2D.alignment(A, V);

  let inner = '';
  inner += SVGRender.grid(GEOM);
  inner += SVGRender.eigLines(A, true, GEOM);
  inner += SVGRender.dirLines(V, Av, aligned, GEOM);
  inner += SVGRender.angleArc(V, Av, GEOM);
  inner += SVGRender.vectors(V, Av, aligned, true, GEOM);
  inner += SVGRender.origin(GEOM);

  return (
    `<svg class="ev-root ev-canvas" viewBox="0 0 ${SIZE} ${SIZE}" width="460" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane for the ${sc.label} matrix, with the probe vector v and its image Av">` +
    `<style>${svgCssFor(inner)}</style>` +
    MARKERS +
    `<rect width="${SIZE}" height="${SIZE}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

// which scenario represents each eigen category on the page
export const representative = {
  distinct: 'diag',
  repeated: 'scale2',
  defective: 'defective2',
  complex: 'rotate30',
};

// every scenario's category, so the page can key its panel notes by scenario
// and still point at the right section
export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, v]) => [k, v.group])
);

export const meta = {
  size: SIZE,
  v: V,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, v]) => {
    (acc[v.group] = acc[v.group] || []).push(k);
    return acc;
  }, {}),
};

const eigenVectorsDiagrams = {
  distinct: freeze(representative.distinct),
  repeated: freeze(representative.repeated),
  defective: freeze(representative.defective),
  complex: freeze(representative.complex),
};

export default eigenVectorsDiagrams;
