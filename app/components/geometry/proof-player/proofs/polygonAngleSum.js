// ===========================================================
// proofs/polygonAngleSum.js
// The interior angles of a convex n-gon add up to (n − 2) · 180°,
// shown on a pentagon: diagonals from one vertex cut it into
// n − 2 triangles whose angles make up the polygon's angles.
// Phases: given, construct, sum, fit, conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const V = ['A', 'B', 'C', 'D', 'E'];

const polygonAngleSum = {
  label: 'Polygon angle sum',
  info:
    'Draw every diagonal from one vertex of the pentagon: it falls into three triangles. ' +
    'Each triangle has an angle sum of 180°, and the triangles’ angles fit together to ' +
    'make exactly the five angles of the pentagon, so those add up to 3 × 180° = 540°. ' +
    'For any convex polygon with n sides the same cut gives n − 2 triangles: (n − 2) · 180°. ' +
    'Drag any vertex, keeping the shape convex: the sum stays 540°.',
  hint: 'Drag any vertex (keep the pentagon convex)',
  labelCenter: V,
  // Frame for the pentagon (about a circle of radius 150) and its labels.
  viewBox: [60, 30, 440, 350],

  model: {
    points: {
      A: { x: 280, y: 70 }, B: { x: 423, y: 174 }, C: { x: 368, y: 342 },
      D: { x: 192, y: 342 }, E: { x: 137, y: 174 }
    },
    params: {},
    composites: [
      {
        type: 'polygon', id: 'G', of: V,
        angles: {
          A: { color: 'alpha', label: 'α' },
          B: { color: 'alpha', label: 'β' },
          C: { color: 'alpha', label: 'γ' },
          D: { color: 'alpha', label: 'δ' },
          E: { color: 'alpha', label: 'ε' }
        }
      }
    ],
    objects: [
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'C'], color: 'beta' },
      { id: 'tri2', type: 'polygon', of: ['A', 'C', 'D'], color: 'gamma' },
      { id: 'tri3', type: 'polygon', of: ['A', 'D', 'E'], color: 'delta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A convex pentagon ABCDE',
      formula: 'Five sides, five interior angles <i>α</i>, <i>β</i>, <i>γ</i>, <i>δ</i>, <i>ε</i>. To prove: they add up to <strong>540° = (5 − 2) · 180°</strong>, and for an n-gon to (n − 2) · 180°.',
      show: ['G.fill', 'G.AB', 'G.BC', 'G.CD', 'G.DE', 'G.EA', 'G.angleA', 'G.angleB', 'G.angleC', 'G.angleD', 'G.angleE', 'A', 'B', 'C', 'D', 'E'],
      hl: []
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Diagonals from A: three triangles',
      formula: 'The two diagonals AC and AD from the vertex A cut the pentagon into the triangles ABC, ACD and ADE. In a convex polygon every diagonal from one vertex lies inside, so the n − 2 triangles fill it exactly.',
      show: ['AC', 'AD', 'tri1', 'tri2', 'tri3'],
      hl: ['AC', 'AD', 'tri1', 'tri2', 'tri3']
    },
    {
      phase: 'sum', just: 'Triangle angle sum',
      title: '3 × 180° = 540°',
      formula: 'The angles of each triangle add up to 180°, so the nine angles of the three triangles add up to 3 × 180° = 540°.',
      show: [],
      hl: ['tri1', 'tri2', 'tri3']
    },
    {
      phase: 'fit', just: 'Angles fit together',
      title: 'The triangles’ angles make the pentagon’s angles',
      formula: 'At A the three triangle angles sit side by side and make <i>α</i>; at C and at D two triangle angles make <i>γ</i> and <i>δ</i>; at B and E a single triangle angle is the whole of <i>β</i> and <i>ε</i>. Nothing is left over and nothing is counted twice.',
      show: [],
      hl: ['G.angleA', 'G.angleB', 'G.angleC', 'G.angleD', 'G.angleE', 'AC', 'AD']
    },
    {
      phase: 'conclude', just: 'Generalise',
      title: '<i>α</i> + <i>β</i> + <i>γ</i> + <i>δ</i> + <i>ε</i> = 540° = (n − 2) · 180°',
      formula: 'The pentagon’s angles are exactly the triangles’ angles regrouped, so they add up to 540°. With n sides the diagonals from one vertex give n − 2 triangles, hence (n − 2) · 180°. <strong>∎</strong>',
      show: [],
      hl: ['G.angleA', 'G.angleB', 'G.angleC', 'G.angleD', 'G.angleE']
    }
  ],

  readout: (P) => {
    const n = V.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
      const v = P[V[i]];
      const prev = P[V[(i - 1 + n) % n]];
      const next = P[V[(i + 1) % n]];
      total += angleDeg(v, prev, next);
    }
    return `α + β + γ + δ + ε = ${fmt(total)}° = (5 − 2) · 180°`;
  },

  // convex and not pinched: every turn the same way round, every triangle of the fan non-degenerate
  isValid: (P) => {
    const n = V.length;
    let sign = 0;
    for (let i = 0; i < n; i++) {
      const a = P[V[i]];
      const b = P[V[(i + 1) % n]];
      const c = P[V[(i + 2) % n]];
      const cross = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
      if (Math.abs(cross) < 3000) return false;
      const s = Math.sign(cross);
      if (sign === 0) sign = s;
      else if (s !== sign) return false;
    }
    return area2(P.A, P.B, P.C) * sign > 4000 && area2(P.A, P.C, P.D) * sign > 4000 && area2(P.A, P.D, P.E) * sign > 4000;
  }
};

export default polygonAngleSum;
