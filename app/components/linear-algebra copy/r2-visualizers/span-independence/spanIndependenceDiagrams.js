// Frozen-state SVGs for the Span & Independence (R²) tool (Line 1 anchor mesh).
//
// SpanIndependence.jsx is self-contained (own Math2D, own SVGRender, sp-
// prefixed CSS) and exports the pieces this module needs: SCENARIOS,
// DEFAULT_GEOM, Math2D and SVGRender. The canvas composition below is the
// tool's own SpanCanvas order, minus the sweep-only layers (trail, sweep
// circle, anchor badge), which have no meaning in a still.
//
// COMPONENT_CSS is not exported, so the stylesheet here is a resolved copy of
// the tool's SVG rules with the CSS variables replaced by their values from
// the .sp-root block (a #ea580c, b #0891b2, indep #6366f1, dep #dc2626, grid
// #e2e8f0, axis #94a3b8, faint #7989a3, soft #243049, dim #4a5673). Web fonts
// are not loaded inside an inline SVG, so the display face falls back to
// Georgia and the mono face to Menlo/monospace.
//
// Nothing in SpanIndependence.jsx is modified.

import { Math2D, SVGRender, SCENARIOS, DEFAULT_GEOM } from './SpanIndependence';

const GEOM = DEFAULT_GEOM;   // { size: 600, scale: 50, gridR: 6 }

const CSS =
  '.sp-grid-line{stroke:#e2e8f0;stroke-width:1;fill:none}' +
  '.sp-grid-axis{stroke:#94a3b8;stroke-width:1.3;fill:none}' +
  '.sp-span-shade{fill:#6366f1;opacity:.03}' +
  '.sp-span-line{stroke:#dc2626;stroke-width:2.2;fill:none;opacity:.9;stroke-dasharray:8 5}' +
  '.sp-span-halo{stroke:#dc2626;stroke-width:12;fill:none;opacity:.10}' +
  '.sp-lattice-dot{fill:#6366f1;opacity:.42}' +
  '.sp-parallelogram{stroke-width:1.5}' +
  '.sp-para-pos{fill:rgba(99,102,241,0.18);stroke:#6366f1}' +
  '.sp-para-neg{fill:rgba(124,58,237,0.16);stroke:#7c3aed}' +
  '.sp-para-zero{fill:rgba(148,163,184,0.18);stroke:#94a3b8}' +
  '.sp-angle-arc{fill:none;stroke:#7989a3;stroke-width:1.2;stroke-dasharray:2 3}' +
  '.sp-angle-label{fill:#7989a3;font-family:Menlo,monospace;font-size:11px;font-weight:600}' +
  '.sp-a-shaft{stroke:#ea580c;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.sp-a-handle{fill:#ea580c;stroke:#fff;stroke-width:2}' +
  '.sp-a-label{fill:#ea580c;font-family:Georgia,serif;font-style:italic;font-size:17px;font-weight:600}' +
  '.sp-b-shaft{stroke:#0891b2;stroke-width:2.6;fill:none;stroke-linecap:round}' +
  '.sp-b-handle{fill:#0891b2;stroke:#fff;stroke-width:2}' +
  '.sp-b-label{fill:#0891b2;font-family:Georgia,serif;font-style:italic;font-size:17px;font-weight:600}' +
  '.sp-b-zero{fill:none;stroke:#dc2626;stroke-width:2;stroke-dasharray:3 3}' +
  '.sp-origin-dot{fill:#243049}' +
  '.sp-spanlbl-indep{fill:#6366f1;font-family:Georgia,serif;font-style:italic;font-size:14px;font-weight:500}' +
  '.sp-spanlbl-dep{fill:#dc2626;font-family:Georgia,serif;font-style:italic;font-size:14px;font-weight:500}' +
  '.sp-spanlbl-zero{fill:#4a5673;font-family:Georgia,serif;font-style:italic;font-size:14px;font-weight:500}';

const MARK = (id, fill) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('sp-arr-a', '#ea580c') + MARK('sp-arr-b', '#0891b2') + '</defs>';

// the canvas's own composition order, sweep layers omitted
function freeze(key) {
  const sc = SCENARIOS[key];
  const { a, b } = sc;
  const rank = Math2D.rank2(a, b);
  const spanDir = rank === 1 ? Math2D.spanDir(a, b) : null;

  let inner = '';
  inner += SVGRender.grid(GEOM);
  if (rank === 2) inner += SVGRender.spanShade(GEOM);
  if (rank === 1) inner += SVGRender.spanLine(spanDir, GEOM);
  inner += SVGRender.lattice(a, b, GEOM);
  inner += SVGRender.parallelogram(a, b, GEOM);
  inner += SVGRender.angleArc(a, b, GEOM);
  inner += SVGRender.aArrow(a, true, GEOM);
  inner += SVGRender.bArrow(b, true, GEOM);
  inner += SVGRender.origin(GEOM);
  inner += SVGRender.spanLabel(rank, GEOM);

  return (
    `<svg viewBox="0 0 ${GEOM.size} ${GEOM.size}" width="420" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="The R2 plane with the ${sc.label} pair a and b and the parallelogram they span">` +
    `<style>${CSS}</style>` +
    MARKERS +
    `<rect width="${GEOM.size}" height="${GEOM.size}" fill="#ffffff"/>` +
    inner +
    `</svg>`
  );
}

// which scenario represents each section on the page
export const representative = {
  independent: 'orthogonal',
  nearDependent: 'nearAligned15',
  dependent: 'bTwoA',
  edge: 'aZero',
};

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, v]) => [k, v.group])
);

// the numbers the tool's live card would show for each preset, so the page
// prose quotes the tool rather than a re-derivation
export const statsFor = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, sc]) => [k, {
    det: Math2D.det(sc.a, sc.b),
    area: Math2D.area(sc.a, sc.b),
    angle: Math2D.angleBetween(sc.a, sc.b),
    rank: Math2D.rank2(sc.a, sc.b),
  }])
);

export const meta = {
  geom: GEOM,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, v]) => {
    (acc[v.group] = acc[v.group] || []).push(k);
    return acc;
  }, {}),
};

const spanIndependenceDiagrams = {
  independent: freeze(representative.independent),
  nearDependent: freeze(representative.nearDependent),
  dependent: freeze(representative.dependent),
  edge: freeze(representative.edge),
};

export default spanIndependenceDiagrams;
