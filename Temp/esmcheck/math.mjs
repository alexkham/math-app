// ===========================================================
// engine/math.js
// Pure plane-geometry helpers. Points are { x, y } in SVG
// coordinates (y grows downward). No React, no DOM.
// ===========================================================

export const dist = (p, q) => Math.hypot(q.x - p.x, q.y - p.y);

export const mid = (p, q) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });

export function unit(p, q) {
  const dx = q.x - p.x;
  const dy = q.y - p.y;
  const n = Math.hypot(dx, dy) || 1;
  return { x: dx / n, y: dy / n };
}

export function centroid(pts) {
  if (!pts.length) return { x: 0, y: 0 };
  const s = pts.reduce((a, p) => ({ x: a.x + p.x, y: a.y + p.y }), { x: 0, y: 0 });
  return { x: s.x / pts.length, y: s.y / pts.length };
}

// twice the triangle area (absolute) — used as a degeneracy guard
export const area2 = (a, b, c) =>
  Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));

// start angle a1 of ray v→p1 and the signed sweep d to ray v→p2, |d| ≤ π
export function angleGeom(v, p1, p2) {
  const a1 = Math.atan2(p1.y - v.y, p1.x - v.x);
  const a2 = Math.atan2(p2.y - v.y, p2.x - v.x);
  let d = a2 - a1;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d <= -Math.PI) d += 2 * Math.PI;
  return { a1, d };
}

export const angleDeg = (v, p, q) => (Math.abs(angleGeom(v, p, q).d) * 180) / Math.PI;

// foot of the perpendicular from p onto line ab
export function footOf(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len2 = dx * dx + dy * dy || 1;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2;
  return { x: a.x + t * dx, y: a.y + t * dy };
}

// intersection of lines ab and cd, null when parallel
export function lineIntersection(a, b, c, d) {
  const den = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
  if (Math.abs(den) < 1e-9) return null;
  const t = ((a.x - c.x) * (c.y - d.y) - (a.y - c.y) * (c.x - d.x)) / den;
  return { x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) };
}

export const fmt = (x, digits = 1) => x.toFixed(digits);
