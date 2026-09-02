// Frozen-state SVGs for the Continuity Checker (Line 1 anchor mesh).
//
// Unlike the hand-drawn canvas tools, FunctionContinuity hands a declarative
// scene to FunctionVisualizerCorePro. So this module imports the tool's own
// FAMILIES table and rebuilds each scene exactly as the component does — same
// curves and piecewise domains, same dashed vertical at x = c, same L⁻/L⁺
// reference lines, same f(c) marker, same per-family viewport — then serialises
// it through the core's own generateSVG. Nothing about the geometry is
// re-derived here; if a family's definition changes, these follow.
//
// Each state is frozen at that family's point of interest (its first POI), which
// is the c the tool jumps to when you pick the family, and the c at which the
// checklist verdict for that family is the interesting one. 'smooth' has no POI,
// so it sits at the default c = 0, where all three checks pass.

import { FAMILIES } from './FunctionContinuity';
import frozenSvg from '../frozenSvg';

const COL = { f: '#3b82f6', fp: '#1e3a8a', limit: '#60a5fa', link: '#94a3b8' };

// viewBoundsFor, ported from the component
function viewBoundsFor(key) {
  switch (key) {
    case 'smooth': return { xMin: -3.5, xMax: 3.5, yMin: -1, yMax: 9 };
    case 'hole': return { xMin: -3.5, xMax: 3.5, yMin: -3, yMax: 5 };
    case 'jump': return { xMin: -3.5, xMax: 3.5, yMin: -4, yMax: 4 };
    case 'wrongvalue': return { xMin: -3.5, xMax: 3.5, yMin: -2, yMax: 5 };
    case 'asymptote': return { xMin: -3.5, xMax: 3.5, yMin: -1, yMax: 8 };
    case 'staircase': return { xMin: -3.5, xMax: 3.5, yMin: -3.5, yMax: 3.5 };
    default: return { xMin: -3.5, xMax: 3.5, yMin: -4, yMax: 4 };
  }
}

// fmt, ported from the component
const fmt = (v, d = 2) => {
  if (!Number.isFinite(v)) return Number.isNaN(v) ? 'undefined' : (v > 0 ? '+∞' : '−∞');
  const r = Math.round(v * 1e6) / 1e6;
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : r.toFixed(d);
};

function freeze(key) {
  const fam = FAMILIES[key];
  const c = fam.pois.length ? fam.pois[0] : 0;
  const info = fam.info(c);

  const functions = fam.curves.map((cv, i) => ({
    fn: cv.fn,
    color: COL.f,
    label: i === 0 ? 'f' : undefined,
    formula: i === 0 ? fam.eq : undefined,
    visible: true,
    stroke: 2.25,
    domain: cv.domain,
  }));

  const verticalLines = [
    { x: c, color: COL.link, stroke: 1.5, pattern: [5, 4], label: `c = ${fmt(c, 2)}` },
  ];

  const horizontalLines = [];
  if (Number.isFinite(info.Lminus)) {
    horizontalLines.push({ y: info.Lminus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L⁻ = ${fmt(info.Lminus)}` });
  }
  if (Number.isFinite(info.Lplus) && info.Lplus !== info.Lminus) {
    horizontalLines.push({ y: info.Lplus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L⁺ = ${fmt(info.Lplus)}` });
  }

  const customPoints = [];
  if (Number.isFinite(info.Lminus)) customPoints.push({ x: c, y: info.Lminus, color: COL.f, label: `L⁻ = ${fmt(info.Lminus)}` });
  if (Number.isFinite(info.Lplus) && info.Lplus !== info.Lminus) customPoints.push({ x: c, y: info.Lplus, color: COL.f, label: `L⁺ = ${fmt(info.Lplus)}` });
  if (Number.isFinite(info.Fc) && info.Fc !== info.Lminus && info.Fc !== info.Lplus) {
    customPoints.push({ x: c, y: info.Fc, color: COL.fp, label: `f(c) = ${fmt(info.Fc)}` });
  }

  return frozenSvg({
    functions,
    viewport: viewBoundsFor(key),
    verticalLines,
    horizontalLines,
    customPoints,
    width: 880,
    height: 460,
    labelMode: 'none',
  });
}

// the checklist verdict each frozen state lands on, so the page's prose and the
// registry can quote the tool rather than a re-derivation
export const verdicts = Object.fromEntries(
  Object.keys(FAMILIES).map((k) => {
    const fam = FAMILIES[k];
    const c = fam.pois.length ? fam.pois[0] : 0;
    const { Lminus, Lplus, Fc } = fam.info(c);
    const limitExists = Number.isFinite(Lminus) && Number.isFinite(Lplus) && Math.abs(Lminus - Lplus) < 1e-9;
    const c1 = Number.isFinite(Fc), c2 = limitExists, c3 = c1 && c2 && Math.abs(Fc - Lminus) < 1e-9;
    let kind = 'continuous';
    if (!(c1 && c2 && c3)) {
      if (!c2) kind = (!Number.isFinite(Lminus) || !Number.isFinite(Lplus)) ? 'infinite' : 'jump';
      else kind = 'removable';
    }
    return [k, { c, Lminus, Lplus, Fc, c1, c2, c3, kind }];
  })
);

const functionContinuityDiagrams = {
  smooth: freeze('smooth'),
  hole: freeze('hole'),
  jump: freeze('jump'),
  wrongvalue: freeze('wrongvalue'),
  asymptote: freeze('asymptote'),
  staircase: freeze('staircase'),
};

export default functionContinuityDiagrams;
