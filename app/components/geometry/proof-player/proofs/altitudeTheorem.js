// ===========================================================
// proofs/altitudeTheorem.js — the right triangle altitude theorem
// (Euclid VI.8 and its corollary). In a right triangle the
// altitude CD to the hypotenuse AB cuts off two triangles similar
// to the whole and to each other: CD² = AD·DB, AC² = AD·AB,
// BC² = BD·AB; adding the last two gives Pythagoras again.
// C is kept on the circle with diameter AB (Thales), so the
// angle at C stays right.
// Phases: given, angles, altitude, leg1, leg2, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const altitudeTheorem = {
  label: 'Right triangle altitude',
  info:
    'The acute angles α and β add up to 90°, so the altitude CD splits the right angle into β ' +
    'at the A side and α at the B side. The two small triangles ACD and CBD have the angles ' +
    'α, β, 90° like the whole triangle: three similar triangles. From ACD ~ CBD, CD² = AD·DB; ' +
    'from ACD ~ ABC, AC² = AD·AB; from CBD ~ ABC, BC² = BD·AB. Drag C round the semicircle, ' +
    'or A or B.',
  hint: 'Drag C round the semicircle on AB, or A or B',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle, the semicircle and the labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 110, y: 320 }, B: { x: 450, y: 320 } },
    params: { tc: -1.9 },
    composites: [],
    objects: [
      // M (never shown) is the midpoint of AB; C on the circle about M through A keeps ∠C = 90°
      { id: 'M', type: 'midpoint', of: ['A', 'B'] },
      { id: 'C', type: 'onCircle', center: 'M', through: 'A', param: 'tc', drag: true },
      { id: 'D', type: 'foot', from: 'C', to: ['A', 'B'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'A', to: 'B' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'C', to: 'B' },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'bC', type: 'angle', at: 'C', from: 'A', to: 'D', color: 'beta', label: 'β' },
      { id: 'aC', type: 'angle', at: 'C', from: 'D', to: 'B', color: 'alpha', label: 'α' },
      { id: 'pACD', type: 'polygon', of: ['A', 'C', 'D'], color: 'alpha' },
      { id: 'pCBD', type: 'polygon', of: ['C', 'B', 'D'], color: 'beta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A right triangle and the altitude to the hypotenuse',
      formula: 'Triangle ABC has a right angle at C; CD is the altitude to the hypotenuse AB, with D between A and B. To prove: <strong>CD² = AD · DB</strong> (the altitude theorem) and <strong>AC² = AD · AB</strong>, <strong>BC² = BD · AB</strong> (the leg theorems).',
      show: ['A', 'B', 'C', 'D', 'T', 'AB', 'BC', 'CA', 'CD', 'rC', 'rD'],
      hl: ['CD']
    },
    {
      phase: 'angles', just: 'Angle sum',
      title: 'The altitude splits the right angle into β and α',
      formula: 'Call the acute angles α at A and β at B; they add up to 90°. In the right triangle ACD the angle at C is 90° − α = β, and in the right triangle CBD the angle at C is 90° − β = α. So each small triangle has the angles α, β and 90°, like the whole triangle.',
      show: ['aA', 'bB', 'bC', 'aC'],
      hl: ['aA', 'bB', 'bC', 'aC']
    },
    {
      phase: 'altitude', just: 'AA similarity',
      title: 'ACD ~ CBD:  CD² = AD · DB',
      formula: 'The triangles ACD and CBD both have the angles α, β, 90°, so they are similar, with A ↔ C, C ↔ B, D ↔ D (α at A and at C, β at C and at B, the right angles at D). Hence AD / CD = CD / BD, that is <strong>CD² = AD · DB</strong>: the altitude is the geometric mean of the two pieces of the hypotenuse.',
      show: ['pACD', 'pCBD'],
      hl: ['pACD', 'pCBD']
    },
    {
      phase: 'leg1', just: 'AA similarity',
      title: 'ACD ~ ABC:  AC² = AD · AB',
      formula: 'The small triangle ACD and the whole triangle ABC share the angle α at A and both have a right angle (at D and at C), so they are similar, with A ↔ A, C ↔ B, D ↔ C. Hence AD / AC = AC / AB, that is <strong>AC² = AD · AB</strong>.',
      show: [],
      hl: ['pACD', 'T']
    },
    {
      phase: 'leg2', just: 'AA similarity',
      title: 'CBD ~ ABC:  BC² = BD · AB',
      formula: 'In the same way CBD and ABC share the angle β at B and both have a right angle, so they are similar, with C ↔ A, B ↔ B, D ↔ C. Hence BD / BC = BC / AB, that is <strong>BC² = BD · AB</strong>.',
      show: [],
      hl: ['pCBD', 'T']
    },
    {
      phase: 'conclude', just: 'Adding',
      title: 'AC² + BC² = AB²',
      formula: 'Add the two leg theorems: AC² + BC² = AD · AB + BD · AB = (AD + DB) · AB = AB², since D lies between A and B. The Pythagorean theorem follows from the three similar triangles. <strong>∎</strong>',
      show: [],
      hl: ['CA', 'BC', 'AB']
    }
  ],

  readout: (P) => {
    const d = (p, q) => dist(P[p], P[q]) / UNIT;
    return `CD² = ${fmt(d('C', 'D') ** 2, 2)},  AD·DB = ${fmt(d('A', 'D') * d('D', 'B'), 2)},  AC² = ${fmt(d('A', 'C') ** 2, 2)},  AD·AB = ${fmt(d('A', 'D') * d('A', 'B'), 2)}`;
  },

  // C above AB with the foot well inside the hypotenuse, everything in the frame
  isValid: (P) => {
    if (!P.D) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const above = (P.B.x - P.A.x) * (P.C.y - P.A.y) - (P.B.y - P.A.y) * (P.C.x - P.A.x) < 0;
    return [P.A, P.B, P.C].every(inFrame) && above && area2(P.A, P.B, P.C) > 8000 &&
      dist(P.A, P.B) > 200 && dist(P.A, P.D) > 30 && dist(P.D, P.B) > 30 && dist(P.C, P.D) > 40;
  }
};

export default altitudeTheorem;
