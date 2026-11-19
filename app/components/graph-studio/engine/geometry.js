// Graph Studio — engine / geometry
//
// Compiled scene + view + canvas size  →  screen-space geometry.
//
// The result is plain data (arrays of numbers), so it can be drawn by
// the canvas renderer or the SVG renderer, and can later be produced in
// a Web Worker. This is the expensive stage: it runs when the scene or
// the view changes, never on hover. No React, no DOM.
//
//   {
//     W, H, bounds,
//     layers: [
//       { id, index, color, kind: 'paths',  paths: [[sx, sy, …], …] }
//       { id, index, color, kind: 'segs',   segs: [x0, y0, x1, y1, …] }
//       { id, index, color, kind: 'region', runs: [x, y, w, h, …],
//         boundaries: [{ strict, segs }] }
//       { id, index, color, kind: 'point',  x, y, sx, sy, drag, label }
//     ],
//     specials: [{ x, y, sx, sy, kind }],   // of the selected curve
//     stats: { ms, evals }
//   }

import {
  makeTransform, sampleExplicitX, sampleExplicitY, sampleParametric,
  contour, regionRuns, explicitSpecialPoints, intersectionsX
} from './numerics.js';
import { viewBounds } from './scene.js';

const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

// options: { selectedId, specialPoints: 'selected' | 'none',
//            extraItems: curves given as functions, drawn after the rows:
//              [{ type: 'curveX', id, f, color, width, dashed }, { type: 'curveY', id, g, … }] }
export function computeGeometry(compiled, view, W, H, options = {}) {
  const { selectedId = null, specialPoints = 'selected', extraItems = null } = options;
  const items = extraItems && extraItems.length ? [...compiled.items, ...extraItems] : compiled.items;
  const t0 = now();
  const bounds = viewBounds(view, W, H);
  const T = makeTransform(bounds, W, H);
  const layers = [];
  let evals = 0;

  for (const it of items) {
    const base = { id: it.id, index: it.index, color: it.color, width: it.width, dashed: it.dashed };
    if (it.type === 'curveX') {
      const r = sampleExplicitX(it.f, bounds, W, H); evals += r.evals;
      layers.push({ ...base, kind: 'paths', paths: r.paths });
    } else if (it.type === 'curveY') {
      const r = sampleExplicitY(it.g, bounds, W, H); evals += r.evals;
      layers.push({ ...base, kind: 'paths', paths: r.paths });
    } else if (it.type === 'param') {
      const r = sampleParametric(it.xy, it.t0, it.t1, bounds, W, H); evals += r.evals;
      layers.push({ ...base, kind: 'paths', paths: r.paths });
    } else if (it.type === 'implicit') {
      layers.push({ ...base, kind: 'segs', segs: contour(it.F, bounds, W, H) });
    } else if (it.type === 'region') {
      layers.push({
        ...base, kind: 'region',
        runs: regionRuns(it.cond, bounds, W, H),
        boundaries: it.boundaries.map(b => ({ strict: b.strict, segs: contour(b.F, bounds, W, H) }))
      });
    } else if (it.type === 'point') {
      if (Number.isFinite(it.x) && Number.isFinite(it.y)) {
        layers.push({ ...base, kind: 'point', x: it.x, y: it.y, sx: T.sx(it.x), sy: T.sy(it.y), drag: it.drag, label: it.label });
      }
    }
  }

  // Special points are shown for the selected explicit curve only.
  let specials = [];
  if (specialPoints === 'selected' && selectedId !== null) {
    const sel = compiled.items.find(it => it.id === selectedId && it.type === 'curveX');
    if (sel) {
      specials = explicitSpecialPoints(sel.f, bounds, W);
      for (const other of compiled.items) {
        if (other === sel || other.type !== 'curveX') continue;
        specials.push(...intersectionsX(sel.f, other.f, bounds, W));
      }
      specials = specials
        .filter(p => p.y >= bounds.yMin && p.y <= bounds.yMax && p.x >= bounds.xMin && p.x <= bounds.xMax)
        .map(p => ({ ...p, sx: T.sx(p.x), sy: T.sy(p.y) }));
    }
  }

  return { W, H, bounds, layers, specials, stats: { ms: now() - t0, evals } };
}
