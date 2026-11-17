// ===========================================================
// engine/composites.js
// Composite figures expand into primitive objects with stable,
// addressable ids, so proof scripts can show or highlight parts:
//
//   { type: 'triangle', id: 'T', of: ['A','B','C'], angles: { A: {...} } }
//     → T.fill, T.AB, T.BC, T.CA, T.angleA (only for listed vertices)
//
// Any closed polygon uses the same expansion; triangle and
// quadrilateral are aliases kept for readable proof data.
// ===========================================================

function polygonal(c) {
  const { id, of: verts, angles = {}, fill = true } = c;
  const n = verts.length;
  const out = [];

  if (fill) out.push({ id: `${id}.fill`, type: 'polygon', of: verts });

  for (let i = 0; i < n; i++) {
    const a = verts[i];
    const b = verts[(i + 1) % n];
    out.push({ id: `${id}.${a}${b}`, type: 'segment', of: [a, b] });
  }

  for (let i = 0; i < n; i++) {
    const v = verts[i];
    if (!angles[v]) continue;
    const prev = verts[(i - 1 + n) % n];
    const next = verts[(i + 1) % n];
    out.push({ id: `${id}.angle${v}`, type: 'angle', at: v, from: next, to: prev, ...angles[v] });
  }

  return out;
}

export const COMPOSITES = {
  triangle: polygonal,
  quadrilateral: polygonal,
  polygon: polygonal
};
