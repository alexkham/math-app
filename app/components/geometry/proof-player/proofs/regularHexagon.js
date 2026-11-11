// ===========================================================
// proofs/regularHexagon.js — the side of a regular hexagon
// equals the radius of its circumscribed circle.
// The six radii cut the hexagon into six triangles congruent
// by SSS; their angles at O fill a full turn, so each is 60°;
// the base angles of the isosceles triangle OAB are then 60°
// too, and a triangle with equal angles has equal sides.
// B…F are A turned about O by 60°, 120°, … (rotateDeg).
// Phases: given, radii, central, isosceles, equilateral, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const V = ['A', 'B', 'C', 'D', 'E', 'F'];

const regularHexagon = {
  label: 'Regular hexagon',
  info:
    'Join the centre O to the six vertices. The six triangles OAB, OBC, … have two radii and ' +
    'one side each, so they are congruent (SSS), and their six equal angles at O fill a full ' +
    'turn: each is 60°. The triangle OAB is isosceles, so its base angles are (180° − 60°)/2 = ' +
    '60° as well. All three angles equal: all three sides equal, AB = OA. Drag A to turn and ' +
    'resize the hexagon, or O to move it.',
  hint: 'Drag A to turn and resize the hexagon, or O to move it',
  labelCenter: ['O'],
  // Frame for the circle (radius about 140 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 155, y: 165 } },
    params: {},
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'rotateDeg', about: 'O', of: 'A', deg: 60 },
      { id: 'C', type: 'rotateDeg', about: 'O', of: 'B', deg: 60 },
      { id: 'D', type: 'rotateDeg', about: 'O', of: 'C', deg: 60 },
      { id: 'E', type: 'rotateDeg', about: 'O', of: 'D', deg: 60 },
      { id: 'F', type: 'rotateDeg', about: 'O', of: 'E', deg: 60 },
      { id: 'H', type: 'polygon', of: V },
      ...V.map((v, i) => ({ id: 's' + v, type: 'segment', of: [v, V[(i + 1) % 6]] })),
      ...V.map((v, i) => ({ id: 'ts' + v, type: 'ticks', of: [v, V[(i + 1) % 6]], n: 2 })),
      ...V.map((v) => ({ id: 'r' + v, type: 'segment', of: ['O', v] })),
      ...V.map((v) => ({ id: 'tr' + v, type: 'ticks', of: ['O', v], n: 1 })),
      ...V.map((v, i) => ({ id: 'c' + v, type: 'angle', at: 'O', from: v, to: V[(i + 1) % 6], color: 'alpha', label: 'θ' })),
      { id: 'pOAB', type: 'polygon', of: ['O', 'A', 'B'], color: 'beta' },
      { id: 'fA', type: 'angle', at: 'A', from: 'O', to: 'B', color: 'beta', label: 'φ' },
      { id: 'fB', type: 'angle', at: 'B', from: 'A', to: 'O', color: 'beta', label: 'φ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A regular hexagon in its circle',
      formula: 'ABCDEF is a regular hexagon: its six sides are equal (two ticks each) and its vertices lie on a circle with centre O. To prove: <strong>AB = OA</strong>, the side of a regular hexagon equals the radius of its circle.',
      show: ['O', ...V, 'W', 'H', ...V.map((v) => 's' + v), ...V.map((v) => 'ts' + v)],
      hl: V.map((v) => 's' + v)
    },
    {
      phase: 'radii', just: 'SSS',
      title: 'Six congruent triangles',
      formula: 'Join O to the six vertices. The six segments are radii, so they are equal (one tick each). Each of the triangles OAB, OBC, OCD, ODE, OEF, OFA has two radii and one side of the hexagon, so all six have the same three side lengths, and by SSS they are congruent.',
      show: [...V.map((v) => 'r' + v), ...V.map((v) => 'tr' + v)],
      hl: V.map((v) => 'r' + v)
    },
    {
      phase: 'central', just: 'Angles around a point',
      title: 'Each angle at O is 60°',
      formula: 'The congruent triangles have equal angles at O, θ each, and the six angles θ fill the full turn round O: 6θ = 360°, so <strong>θ = 60°</strong>.',
      show: V.map((v) => 'c' + v),
      hl: V.map((v) => 'c' + v)
    },
    {
      phase: 'isosceles', just: 'Isosceles base angles',
      title: 'The base angles of OAB are 60°',
      formula: 'In the triangle OAB the sides OA and OB are radii, so it is isosceles and its base angles at A and B are equal, φ each. The angle sum gives θ + 2φ = 180°, so φ = (180° − 60°)/2 = <strong>60°</strong>.',
      show: ['pOAB', 'fA', 'fB'],
      hl: ['pOAB', 'fA', 'fB']
    },
    {
      phase: 'equilateral', just: 'Equal angles, equal sides',
      title: 'OAB is equilateral',
      formula: 'All three angles of OAB are 60°. In a triangle, equal angles face equal sides: the angle at O faces AB and the angle at A faces OB, so AB = OB; and OB = OA. So <strong>OA = OB = AB</strong>: the triangle is equilateral.',
      show: [],
      hl: ['pOAB', 'cA', 'fA', 'fB']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'AB = OA: side equals radius',
      formula: 'So <strong>AB = OA</strong>, and since all six triangles are congruent, every side of the regular hexagon equals the radius. The hexagon is made of six equilateral triangles meeting at the centre. <strong>∎</strong>',
      show: [],
      hl: ['sA', 'rA']
    }
  ],

  readout: (P) =>
    `AB = ${fmt(dist(P.A, P.B) / UNIT, 2)},  OA = ${fmt(dist(P.O, P.A) / UNIT, 2)},  ∠AOB = ${fmt(angleDeg(P.O, P.A, P.B), 0)}°`,

  // a radius that fits the frame and leaves room for the labels
  isValid: (P) => {
    const r = dist(P.O, P.A);
    const inFrame = (p) => p && p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    return r > 90 && r < 152 && ['O', ...V].every((k) => inFrame(P[k]));
  }
};

export default regularHexagon;
