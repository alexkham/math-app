// ===========================================================
// proofs/regularPolygonAngles.js — the angle of a regular
// polygon. Each interior angle of a regular n-gon is
// 180° − 360°/n, shown on a pentagon: the radii make n
// congruent isosceles triangles with apex angle 360°/n, and
// each interior angle is two of their base angles.
// B…E are A turned about O by 72° at a time (rotateDeg).
// Phases: given, radii, central, isosceles, combine, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const V = ['A', 'B', 'C', 'D', 'E'];

const regularPolygonAngles = {
  label: 'Regular polygon angles',
  info:
    'Join the centre O to the five vertices. The five triangles OAB, OBC, … are congruent (SSS), so ' +
    'their angles at O are equal and fill a full turn: 360°/5 = 72° each. Each triangle is isosceles ' +
    'with two radii, so its base angles are (180° − 72°)/2 = 54°. At every vertex two base angles meet, ' +
    'so each interior angle is 2 · 54° = 108° = 180° − 360°/5. For n sides: 180° − 360°/n. Drag A to ' +
    'turn and resize the pentagon, or O to move it.',
  hint: 'Drag A to turn and resize the pentagon, or O to move it',
  labelCenter: ['O'],
  // Frame for the circle (radius about 140 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 225 }, A: { x: 280, y: 85 } },
    params: {},
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'rotateDeg', about: 'O', of: 'A', deg: 72 },
      { id: 'C', type: 'rotateDeg', about: 'O', of: 'B', deg: 72 },
      { id: 'D', type: 'rotateDeg', about: 'O', of: 'C', deg: 72 },
      { id: 'E', type: 'rotateDeg', about: 'O', of: 'D', deg: 72 },
      { id: 'H', type: 'polygon', of: V },
      ...V.map((v, i) => ({ id: 's' + v, type: 'segment', of: [v, V[(i + 1) % 5]] })),
      ...V.map((v, i) => ({ id: 'ts' + v, type: 'ticks', of: [v, V[(i + 1) % 5]], n: 2 })),
      ...V.map((v) => ({ id: 'r' + v, type: 'segment', of: ['O', v] })),
      ...V.map((v) => ({ id: 'tr' + v, type: 'ticks', of: ['O', v], n: 1 })),
      ...V.map((v, i) => ({ id: 'c' + v, type: 'angle', at: 'O', from: v, to: V[(i + 1) % 5], color: 'alpha', label: 'θ' })),
      { id: 'pOAB', type: 'polygon', of: ['O', 'A', 'B'], color: 'beta' },
      { id: 'pOBC', type: 'polygon', of: ['O', 'B', 'C'], color: 'gamma' },
      { id: 'fA', type: 'angle', at: 'A', from: 'O', to: 'B', color: 'beta', label: 'φ' },
      { id: 'fB1', type: 'angle', at: 'B', from: 'A', to: 'O', color: 'beta', label: 'φ' },
      { id: 'fB2', type: 'angle', at: 'B', from: 'O', to: 'C', color: 'gamma', label: 'φ' },
      { id: 'iB', type: 'angle', at: 'B', from: 'A', to: 'C', color: 'delta', label: 'β', radius: 56 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A regular pentagon in its circle',
      formula: 'ABCDE is a regular pentagon: its five sides are equal (two ticks each), its five angles are equal, and its vertices lie on a circle with centre O. To prove: <strong>each interior angle is 180° − 360°/5 = 108°</strong>, and for a regular n-gon 180° − 360°/n.',
      show: ['O', ...V, 'W', 'H', ...V.map((v) => 's' + v), ...V.map((v) => 'ts' + v)],
      hl: V.map((v) => 's' + v)
    },
    {
      phase: 'radii', just: 'SSS',
      title: 'Five congruent triangles',
      formula: 'Join O to the five vertices. The five segments are radii, so they are equal (one tick each). Each of the triangles OAB, OBC, OCD, ODE, OEA has two radii and one side of the pentagon, so all five have the same three sides, and by SSS they are congruent.',
      show: [...V.map((v) => 'r' + v), ...V.map((v) => 'tr' + v)],
      hl: V.map((v) => 'r' + v)
    },
    {
      phase: 'central', just: 'Angles around a point',
      title: 'Each angle at O is 360°/5 = 72°',
      formula: 'The congruent triangles have equal angles at O, θ each, and the five angles θ fill the full turn round O: 5θ = 360°, so <strong>θ = 72°</strong>. For n sides, θ = 360°/n.',
      show: V.map((v) => 'c' + v),
      hl: V.map((v) => 'c' + v)
    },
    {
      phase: 'isosceles', just: 'Isosceles base angles',
      title: 'The base angles are (180° − 72°)/2 = 54°',
      formula: 'The triangle OAB has two radii, OA = OB, so it is isosceles and its base angles at A and B are equal, φ each. Its angle sum gives θ + 2φ = 180°, so <strong>φ = (180° − 72°)/2 = 54°</strong>. The same holds in every one of the five triangles.',
      show: ['pOAB', 'fA', 'fB1'],
      hl: ['pOAB', 'fA', 'fB1']
    },
    {
      phase: 'combine', just: 'Adding',
      title: '∠ABC = 2φ = 108°',
      formula: 'At the vertex B the radius OB splits the interior angle ABC into two parts: ∠ABO, a base angle of OAB, and ∠OBC, a base angle of OBC. Both are φ, so <strong>∠ABC = 2φ = 108°</strong>. Every vertex is the same.',
      show: ['pOBC', 'fB2', 'iB'],
      hl: ['fB1', 'fB2', 'iB']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'Interior angle = 180° − 360°/n',
      formula: 'In general 2φ = 180° − θ = <strong>180° − 360°/n</strong>: 60° for the equilateral triangle, 90° for the square, 108° for the pentagon, 120° for the hexagon. As a check, n of them add up to n · 180° − 360° = (n − 2) · 180°, the polygon angle sum. <strong>∎</strong>',
      show: [],
      hl: ['iB']
    }
  ],

  readout: (P) =>
    `∠AOB = ${fmt(angleDeg(P.O, P.A, P.B), 0)}°,  ∠OBA = ${fmt(angleDeg(P.B, P.O, P.A), 0)}°,  ∠ABC = ${fmt(angleDeg(P.B, P.A, P.C), 0)}°`,

  // a radius that fits the frame and leaves room for the labels
  isValid: (P) => {
    const r = dist(P.O, P.A);
    const inFrame = (p) => p && p.x > 75 && p.x < 485 && p.y > 64 && p.y < 396;
    return r > 95 && r < 150 && ['O', ...V].every((k) => inFrame(P[k]));
  }
};

export default regularPolygonAngles;
