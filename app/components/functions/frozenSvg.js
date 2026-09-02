// Shared frozen-state SVG builder for the tools built on FunctionVisualizerCorePro
// (Line 1 anchor mesh).
//
// These tools don't hand-draw their canvas — they hand a declarative scene
// (functions, viewport, verticalLines, horizontalLines, customPoints) to the
// core, which renders it to canvas at runtime and can serialise the very same
// scene to SVG via generateSVG. Rather than re-implementing that renderer per
// tool, this helper calls generateSVG directly with the core's own defaults, so
// a frozen diagram is produced by exactly the code path the live tool uses.
//
// generateSVG is a pure string builder with no DOM access, which is what makes
// it safe to run inside getStaticProps at build time.

import { generateSVG, DEFAULT_STYLES, mergeStyles } from './FunctionVisualizerCorePro';

// same formula as useCoordinateSystem's gridStep
function gridStepFor(viewport) {
  const range = Math.max(viewport.xMax - viewport.xMin, viewport.yMax - viewport.yMin);
  const rawStep = range / 10;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const norm = rawStep / mag;
  return norm <= 1.5 ? mag : norm <= 3.5 ? 2 * mag : norm <= 7.5 ? 5 * mag : 10 * mag;
}

/**
 * Build one frozen scene as an SVG string.
 *
 * @param {object} o
 * @param {Array}  o.functions        same shape the tool passes to the core
 * @param {object} o.viewport         { xMin, xMax, yMin, yMax }
 * @param {Array}  [o.customPoints]   rendered as specialPoints of type 'custom'
 * @param {Array}  [o.verticalLines]
 * @param {Array}  [o.horizontalLines]
 * @param {Array}  [o.shadedRegions]
 * @param {object} [o.tangentLine]
 * @param {object} [o.secantLine]
 * @param {number} [o.width]          defaults to the tool's own canvas width
 * @param {number} [o.height]
 * @param {number} [o.samples]        curve sampling; 240 is plenty for a static
 *                                   880px asset (the core uses 500 live). Raise
 *                                   it for curves that genuinely need the
 *                                   resolution, e.g. sin(1/x) near the origin.
 * @param {number} [o.padding]        core default is 50
 * @param {string} [o.labelMode]      core default for these tools is 'none'
 * @param {object} [o.styles]         style overrides merged over DEFAULT_STYLES
 * @returns {string} standalone SVG markup
 */
export default function frozenSvg({
  functions,
  viewport,
  customPoints = [],
  verticalLines = [],
  horizontalLines = [],
  shadedRegions = [],
  tangentLine = null,
  secantLine = null,
  width = 880,
  height = 460,
  padding = 50,
  labelMode = 'none',
  legendPosition = 'top-right',
  showGrid = true,
  showMinorGrid = true,
  showAxes = true,
  showAxisLabels = true,
  samples = 240,
  styles = {},
}) {
  const merged = mergeStyles(DEFAULT_STYLES, styles);
  const normFns = (functions || []).map((f) => (typeof f === 'function' ? { fn: f } : f));
  const specialPoints = customPoints.map((p) => ({ type: 'custom', ...p }));

  // generateSVG writes full float precision (e.g. "412.3456789012345"), which
  // is invisible on screen but triples the byte size of a static asset that
  // ships inside the page HTML. Rounding to 2 decimals is sub-pixel at any
  // realistic render width. Only geometry attributes are touched - label text
  // keeps the precision the tool itself displays (c = 1.1547 stays 1.1547).
  const round2 = (m) => String(Math.round(parseFloat(m) * 100) / 100);
  const NUM = /-?\d+\.\d{3,}/g;
  const trim = (svg) => svg
    .replace(/ (d|points)="([^"]*)"/g, (_, a, v) => ` ${a}="${v.replace(NUM, round2)}"`)
    .replace(/ (x|y|x1|y1|x2|y2|cx|cy|r|width|height)="(-?\d+\.\d{3,})"/g,
             (_, a, v) => ` ${a}="${round2(v)}"`);

  return trim(generateSVG({
    width, height, padding,
    viewport,
    gridStep: gridStepFor(viewport),
    functions: normFns,
    styles: merged,
    showGrid, showMinorGrid, showAxes, showAxisLabels,
    shadedRegions,
    asymptotes: [],
    tangentLine,
    secantLine,
    specialPoints,
    labelMode,
    legendPosition,
    samples,
    defaultStroke: merged.curve.stroke,
    xAxisHighlights: [],
    yAxisHighlights: [],
    verticalLines,
    horizontalLines,
  }));
}
