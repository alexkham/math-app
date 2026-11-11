// ===========================================================
// proofs/polygonExteriorAngles.js
// The exterior angles of a convex polygon, one at each vertex
// and all the same way round, add up to 360°, shown on a
// pentagon: each interior and exterior angle make a straight
// angle, five straight angles are 900°, the interior angles
// add up to 540° (polygon angle sum), and 900° − 540° = 360°.
// Phases: given, linear, straight, interior, conclude
// ===========================================================

import { angleDeg, fmt } from '../engine/math';

const V = ['A', 'B', 'C', 'D', 'E'];
const X = ['A1', 'B1', 'C1', 'D1', 'E1'];

const polygonExteriorAngles = {
  label: 'Polygon exterior angles',
  info:
    'Extend every side of the pentagon the same way round; the angle between a side and the ' +
    'next side\'s extension is an exterior angle. At each vertex the interior and the exterior ' +
    'angle make a straight angle, 180°; five of them make 900°. The interior angles add up to ' +
    '540° by the polygon angle sum, so the exterior angles add up to 900° − 540° = 360°. ' +
    'For n sides: n · 180° − (n − 2) · 180° = 360°. Drag any vertex, keeping the shape convex.',
  hint: 'Drag any vertex (keep the pentagon convex)',
  labelCenter: V,
  // Frame for the pentagon, its extensions and the labels.
  viewBox: [60, 30, 440, 350],

  model: {
    points: {
      A: { x: 280, y: 90 }, B: { x: 402, y: 179 }, C: { x: 355, y: 322 },
      D: { x: 205, y: 322 }, E: { x: 158, y: 179 }
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
      // each side extended a little beyond its far end, all the same way round
      { id: 'A1', type: 'pointAlongDist', from: 'A', dir: ['E', 'A'], lenOf: ['E', 'A'], scale: 0.32 },
      { id: 'B1', type: 'pointAlongDist', from: 'B', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.32 },
      { id: 'C1', type: 'pointAlongDist', from: 'C', dir: ['B', 'C'], lenOf: ['B', 'C'], scale: 0.32 },
      { id: 'D1', type: 'pointAlongDist', from: 'D', dir: ['C', 'D'], lenOf: ['C', 'D'], scale: 0.32 },
      { id: 'E1', type: 'pointAlongDist', from: 'E', dir: ['D', 'E'], lenOf: ['D', 'E'], scale: 0.32 },
      { id: 'xA', type: 'segment', of: ['A', 'A1'] },
      { id: 'xB', type: 'segment', of: ['B', 'B1'] },
      { id: 'xC', type: 'segment', of: ['C', 'C1'] },
      { id: 'xD', type: 'segment', of: ['D', 'D1'] },
      { id: 'xE', type: 'segment', of: ['E', 'E1'] },
      // the exterior angles, between each side and the extension of the side before it
      { id: 'eA', type: 'angle', at: 'A', from: 'A1', to: 'B', color: 'beta', label: 'α′' },
      { id: 'eB', type: 'angle', at: 'B', from: 'B1', to: 'C', color: 'beta', label: 'β′' },
      { id: 'eC', type: 'angle', at: 'C', from: 'C1', to: 'D', color: 'beta', label: 'γ′' },
      { id: 'eD', type: 'angle', at: 'D', from: 'D1', to: 'E', color: 'beta', label: 'δ′' },
      { id: 'eE', type: 'angle', at: 'E', from: 'E1', to: 'A', color: 'beta', label: 'ε′' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A convex pentagon with its sides extended',
      formula: 'Every side of the convex pentagon ABCDE is extended beyond its far end, all the same way round. The angle between each extension and the next side is an exterior angle: α′ at A, β′ at B, γ′ at C, δ′ at D, ε′ at E. To prove: <strong>α′ + β′ + γ′ + δ′ + ε′ = 360°</strong>, and the same for every convex polygon.',
      show: ['G.fill', 'G.AB', 'G.BC', 'G.CD', 'G.DE', 'G.EA', 'A', 'B', 'C', 'D', 'E', 'xA', 'xB', 'xC', 'xD', 'xE', 'eA', 'eB', 'eC', 'eD', 'eE'],
      hl: ['eA', 'eB', 'eC', 'eD', 'eE']
    },
    {
      phase: 'linear', just: 'Linear pair',
      title: 'α + α′ = 180° at every vertex',
      formula: 'At A the interior angle α and the exterior angle α′ lie on either side of the side AB, along the straight line through E, A and A1. Together they make a straight angle: α + α′ = 180°. The same at every vertex: β + β′ = γ + γ′ = δ + δ′ = ε + ε′ = 180°.',
      show: ['G.angleA', 'G.angleB', 'G.angleC', 'G.angleD', 'G.angleE'],
      hl: ['G.angleA', 'eA']
    },
    {
      phase: 'straight', just: 'Adding',
      title: 'Five straight angles: 900°',
      formula: 'Add the five equations: (α + α′) + (β + β′) + (γ + γ′) + (δ + δ′) + (ε + ε′) = 5 · 180° = 900°. One straight angle for each vertex, n · 180° for an n-gon.',
      show: [],
      hl: ['G.angleA', 'G.angleB', 'G.angleC', 'G.angleD', 'G.angleE', 'eA', 'eB', 'eC', 'eD', 'eE']
    },
    {
      phase: 'interior', just: 'Polygon angle sum',
      title: 'α + β + γ + δ + ε = 540°',
      formula: 'The interior angles of a convex pentagon add up to (5 − 2) · 180° = 540°, by the polygon angle sum (diagonals from one vertex cut it into three triangles). For an n-gon the interior angles add up to (n − 2) · 180°.',
      show: [],
      hl: ['G.angleA', 'G.angleB', 'G.angleC', 'G.angleD', 'G.angleE']
    },
    {
      phase: 'conclude', just: 'Subtracting',
      title: 'α′ + β′ + γ′ + δ′ + ε′ = 360°',
      formula: 'Take the interior sum away from the total of the straight angles: α′ + β′ + γ′ + δ′ + ε′ = 900° − 540° = <strong>360°</strong>. For an n-gon, n · 180° − (n − 2) · 180° = 360°, whatever n is: the exterior angles of every convex polygon add up to one full turn. <strong>∎</strong>',
      show: [],
      hl: ['eA', 'eB', 'eC', 'eD', 'eE']
    }
  ],

  readout: (P) => {
    const ext = V.reduce((s, v, i) => s + angleDeg(P[v], P[X[i]], P[V[(i + 1) % 5]]), 0);
    const inn = V.reduce((s, v, i) => s + angleDeg(P[v], P[V[(i + 4) % 5]], P[V[(i + 1) % 5]]), 0);
    return `α′ + β′ + γ′ + δ′ + ε′ = ${fmt(ext, 0)}°,  α + β + γ + δ + ε = ${fmt(inn, 0)}°`;
  },

  // convex (every corner turns the same way), sides not too short, everything in the frame
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
      if (Math.hypot(b.x - a.x, b.y - a.y) < 70) return false;
    }
    return [...V, ...X].every((k) => P[k] && P[k].x > 72 && P[k].x < 488 && P[k].y > 40 && P[k].y < 370);
  }
};

export default polygonExteriorAngles;
