// Frozen-state SVGs for the Derivative Explorer (Line 1 anchor mesh).
//
// FunctionDerivative hands a declarative scene to FunctionVisualizerCorePro, so
// this module rebuilds the same scene per family — f solid, f′ dashed, the grey
// vertical link line at x₀, the light-blue tangent on f, and the two marker dots
// — then serialises it through the core's own generateSVG (see ../frozenSvg).
// The tool's own FAMILIES table is imported, so the curves here are the tool's
// curves, not a copy.
//
// Every state is frozen at x₀ = 1, the component's initialX0, which is inside
// the domain of all seven families (including ln).

import { FAMILIES } from './FunctionDerivative';
import frozenSvg from '../frozenSvg';

const COL = { f: '#3b82f6', fp: '#1e3a8a', tan: '#60a5fa', link: '#94a3b8' };

// zoom={5} on the component's VisualizerWithControls
const VIEWPORT = { xMin: -5, xMax: 5, yMin: -5, yMax: 5 };
const X0 = 1;

// getTangentLine, ported from FunctionVisualizerCorePro (central difference,
// same h) so the frozen tangent is the line the tool draws, not an analytic
// stand-in for it.
function tangentLineAt(fn, x0) {
  try {
    const y0 = fn(x0), h = 1e-7;
    const slope = (fn(x0 + h) - fn(x0 - h)) / (2 * h);
    if (!Number.isFinite(y0) || !Number.isFinite(slope)) return null;
    return { slope, intercept: y0 - slope * x0, x0, y0 };
  } catch { return null; }
}

function freeze(key) {
  const fam = FAMILIES[key];
  const f0 = fam.fn(X0);
  const fp0 = fam.dfn(X0);

  const functions = [
    { fn: fam.fn, color: COL.f, label: 'f', formula: fam.eq, visible: true, stroke: 2.25 },
    { fn: fam.dfn, color: COL.fp, label: "f'", formula: fam.deq, visible: true, stroke: 2, pattern: [9, 5] },
  ];

  const customPoints = [];
  if (Number.isFinite(f0)) customPoints.push({ x: X0, y: f0, color: COL.f, label: 'f(x₀)' });
  if (Number.isFinite(fp0)) customPoints.push({ x: X0, y: fp0, color: COL.fp, label: "f'(x₀)" });

  return frozenSvg({
    functions,
    viewport: VIEWPORT,
    verticalLines: [{ x: X0, color: COL.link, stroke: 1.25, pattern: [5, 4] }],
    customPoints,
    tangentLine: tangentLineAt(fam.fn, X0),
    width: 880,
    height: 460,
    labelMode: 'none',
    styles: { line: { tangent: { color: COL.tan, stroke: 2, pattern: [] } } },
  });
}

// the readings each frozen state shows, so page prose quotes the tool
export const readings = Object.fromEntries(
  Object.keys(FAMILIES).map((k) => [k, {
    x0: X0,
    f: FAMILIES[k].fn(X0),
    fp: FAMILIES[k].dfn(X0),
    eq: FAMILIES[k].eq,
    deq: FAMILIES[k].deq,
  }])
);

const functionDerivativeDiagrams = {
  identity: freeze('identity'),
  quadratic: freeze('quadratic'),
  cubic: freeze('cubic'),
  sine: freeze('sine'),
  cosine: freeze('cosine'),
  exponential: freeze('exponential'),
  logarithm: freeze('logarithm'),
};

export default functionDerivativeDiagrams;
