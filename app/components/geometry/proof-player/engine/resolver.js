// ===========================================================
// engine/resolver.js
// model → resolved objects.
//
// model = {
//   points:     { A: { x, y }, ... }        free (draggable) points
//   params:     { h: 240, ... }              scalar parameters
//   composites: [ { type, id, of, ... } ]    expanded via COMPOSITES
//   objects:    [ { id, type, ... } ]        derived points + primitives
// }
//
// Point types own both how they are computed and how they react
// to a drag, so constraints live next to the geometry they bend.
// Every non-point object gets `pts`: its referenced points, read
// from `of` or from [at, from, to].
// ===========================================================

import { mid, unit, footOf, lineIntersection } from './math';
import { COMPOSITES } from './composites';

const movePoint = (o, pos, model) => ({
  ...model,
  points: { ...model.points, [o.id]: { ...model.points[o.id], x: pos.x, y: pos.y } }
});

export const POINT_TYPES = {
  point: {
    resolve: (o) => ({ x: o.x, y: o.y }),
    drag: movePoint
  },

  midpoint: {
    resolve: (o, P) => mid(P[o.of[0]], P[o.of[1]])
  },

  // from + len along direction dir[0] → dir[1]
  pointAlong: {
    resolve: (o, P) => {
      const f = P[o.from];
      const u = unit(P[o.dir[0]], P[o.dir[1]]);
      return { x: f.x + u.x * o.len, y: f.y + u.y * o.len };
    }
  },

  // on the perpendicular bisector of base, at signed height params[param]
  apex: {
    resolve: (o, P, params) => {
      const a = P[o.base[0]];
      const b = P[o.base[1]];
      const m = mid(a, b);
      const u = unit(a, b);
      const h = params[o.param];
      return { x: m.x + u.y * h, y: m.y - u.x * h };
    },
    drag: (o, pos, model, P) => {
      const a = P[o.base[0]];
      const b = P[o.base[1]];
      const m = mid(a, b);
      const u = unit(a, b);
      const h = (pos.x - m.x) * u.y - (pos.y - m.y) * u.x;
      const min = o.minParam != null ? o.minParam : 40;
      return { ...model, params: { ...model.params, [o.param]: Math.max(min, h) } };
    }
  },

  // foot of the perpendicular from `from` onto line to[0]–to[1]
  foot: {
    resolve: (o, P) => footOf(P[o.from], P[o.to[0]], P[o.to[1]])
  },

  // intersection of lines of[0]–of[1] and of[2]–of[3]
  intersection: {
    resolve: (o, P) => lineIntersection(P[o.of[0]], P[o.of[1]], P[o.of[2]], P[o.of[3]])
  }
};

export const isPointType = (type) => Object.prototype.hasOwnProperty.call(POINT_TYPES, type);

const refsOf = (o) => o.of || [o.at, o.from, o.to];

// order matters: free points → derived points → composites → the rest
export function expand(model) {
  const free = Object.entries(model.points || {}).map(([id, p]) => ({ id, type: 'point', free: true, ...p }));
  const objects = model.objects || [];
  const derived = objects.filter((o) => isPointType(o.type));
  const rest = objects.filter((o) => !isPointType(o.type));
  const composites = (model.composites || []).flatMap((c) => COMPOSITES[c.type](c));
  return [...free, ...derived, ...composites, ...rest];
}

export function resolve(model) {
  const params = model.params || {};
  const P = {};
  const R = {};

  for (const o of expand(model)) {
    if (isPointType(o.type)) {
      const p = POINT_TYPES[o.type].resolve(o, P, params);
      if (!p) continue;
      P[o.id] = p;
      R[o.id] = { ...o, ...p };
    } else {
      const pts = refsOf(o).map((k) => P[k]);
      if (pts.some((p) => !p)) continue;
      R[o.id] = { ...o, pts };
    }
  }

  return { R, P };
}

// returns a new model, or the same model when the handle cannot move
export function dragHandle(model, id, pos) {
  const { R, P } = resolve(model);
  const o = R[id];
  if (!o) return model;
  if (o.free) return POINT_TYPES.point.drag(o, pos, model, P);
  const def = POINT_TYPES[o.type];
  if (o.drag && def && def.drag) return def.drag(o, pos, model, P);
  return model;
}
