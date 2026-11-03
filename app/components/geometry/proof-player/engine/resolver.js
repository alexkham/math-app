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

import { mid, unit, dist, footOf, lineIntersection } from './math';
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

  // from + |lenOf[0] lenOf[1]| along direction dir[0] → dir[1]: a length
  // copied from another segment (Euclid's "cut off AD equal to AC")
  pointAlongDist: {
    resolve: (o, P) => {
      const f = P[o.from];
      const u = unit(P[o.dir[0]], P[o.dir[1]]);
      const len = dist(P[o.lenOf[0]], P[o.lenOf[1]]) * (o.scale || 1);
      return { x: f.x + u.x * len, y: f.y + u.y * len };
    }
  },

  // on the line through of[0], of[1] at parameter params[param]
  // (0 = of[0], 1 = of[1]); draggable along the line when drag: true
  onLine: {
    resolve: (o, P, params) => {
      const a = P[o.of[0]];
      const b = P[o.of[1]];
      const t = params[o.param];
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    },
    drag: (o, pos, model, P) => {
      const a = P[o.of[0]];
      const b = P[o.of[1]];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len2 = dx * dx + dy * dy || 1;
      let t = ((pos.x - a.x) * dx + (pos.y - a.y) * dy) / len2;
      if (o.minParam != null) t = Math.max(o.minParam, t);
      if (o.maxParam != null) t = Math.min(o.maxParam, t);
      return { ...model, params: { ...model.params, [o.param]: t } };
    }
  },

  // on the circle with centre `center` through `through`, at angle
  // params[param] (radians, clockwise on screen); draggable round the
  // circle when drag: true
  onCircle: {
    resolve: (o, P, params) => {
      const c = P[o.center];
      const r = dist(c, P[o.through]);
      const th = params[o.param];
      return { x: c.x + r * Math.cos(th), y: c.y + r * Math.sin(th) };
    },
    drag: (o, pos, model, P) => {
      const c = P[o.center];
      const th = Math.atan2(pos.y - c.y, pos.x - c.x);
      return { ...model, params: { ...model.params, [o.param]: th } };
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
