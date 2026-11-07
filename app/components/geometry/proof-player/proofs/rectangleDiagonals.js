// ===========================================================
// proofs/rectangleDiagonals.js — the diagonals of a rectangle
// are equal. Four right angles make the opposite sides parallel
// (co-interior angles), so a rectangle is a parallelogram and
// AD = BC; the triangles DAB and CBA then agree in two sides and
// the right angle between them (SAS), so DB = CA.
// Phases: given, para, sides, tri, sas, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const rectangleDiagonals = {
  label: 'Rectangle: diagonals',
  info:
    'A rectangle has four right angles, so its opposite sides are parallel and it is a ' +
    'parallelogram: AD = BC. The triangles DAB and CBA share the base AB, have AD = BC, and ' +
    'have right angles between those sides, so they are congruent (SAS) and their third sides ' +
    'are equal: DB = CA. Drag D up or down to change the height, A or B to change the base.',
  hint: 'Drag D up or down for the height, A or B for the base',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the rectangle and its labels.
  viewBox: [70, 95, 440, 260],

  model: {
    points: { A: { x: 120, y: 320 }, B: { x: 380, y: 320 } },
    params: { t: 0.65 },
    composites: [],
    objects: [
      // P0: the point above A at distance AB, on the perpendicular to AB (never shown)
      { id: 'P0', type: 'perpAlongDist', from: 'A', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      // D slides along that perpendicular: the height of the rectangle
      { id: 'D', type: 'onLine', of: ['A', 'P0'], param: 't', drag: true, minParam: 0.25, maxParam: 1.6 },
      // C = D + (B − A)
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'rA', type: 'rightAngle', at: 'A', from: 'B', to: 'D' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'C', to: 'A' },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'D', to: 'B' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'A', to: 'C' },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'pAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'pDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'pAD', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'pBC', type: 'parallel', of: ['B', 'C'], n: 2 },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'tri1', type: 'polygon', of: ['D', 'A', 'B'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['C', 'B', 'A'], color: 'beta' },
      { id: 'tAC', type: 'ticks', of: ['A', 'C'], n: 2 },
      { id: 'tBD', type: 'ticks', of: ['B', 'D'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A rectangle and its diagonals',
      formula: 'ABCD has four right angles: it is a rectangle. Its diagonals are AC and BD. To prove: <strong>AC = BD</strong>, the diagonals are equal.',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'rA', 'rB', 'rC', 'rD', 'AC', 'BD'],
      hl: ['AC', 'BD']
    },
    {
      phase: 'para', just: 'Co-interior angles',
      title: 'A rectangle is a parallelogram',
      formula: 'The angles at A and D are co-interior angles on the transversal AD of the lines AB and DC, and they add up to 90° + 90° = 180°, so AB ∥ DC. In the same way AD ∥ BC. A rectangle is a parallelogram.',
      show: ['pAB', 'pDC', 'pAD', 'pBC'],
      hl: ['pAB', 'pDC', 'pAD', 'pBC']
    },
    {
      phase: 'sides', just: 'Opposite sides',
      title: 'AD = BC',
      formula: 'Opposite sides of a parallelogram are equal, so AD = BC (one tick each). These are the two sides that stand on the base AB at its ends.',
      show: ['tAD', 'tBC'],
      hl: ['DA', 'BC', 'tAD', 'tBC']
    },
    {
      phase: 'tri', just: 'Construction',
      title: 'Two triangles on the base AB',
      formula: 'The diagonal BD cuts off the triangle DAB, and the diagonal AC cuts off the triangle CBA. Both stand on the base AB; one has its right angle at A, the other at B.',
      show: ['tri1', 'tri2'],
      hl: ['tri1', 'tri2']
    },
    {
      phase: 'sas', just: 'SAS congruence',
      title: 'Triangles DAB and CBA are congruent',
      formula: 'AD = BC, the base AB is shared, and the angles between those sides, at A in one triangle and at B in the other, are both right angles. Two sides and the included angle: the triangles are congruent, with D ↔ C, A ↔ B, B ↔ A.',
      show: [],
      hl: ['tri1', 'tri2', 'rA', 'rB']
    },
    {
      phase: 'conclude', just: 'Corresponding parts',
      title: 'AC = BD',
      formula: 'Corresponding sides of congruent triangles are equal: DB ↔ CA. So the two diagonals have the same length (two ticks each). <strong>∎</strong>',
      show: ['tAC', 'tBD'],
      hl: ['AC', 'BD', 'tAC', 'tBD']
    }
  ],

  readout: (P) => {
    const ac = dist(P.A, P.C) / UNIT;
    const bd = dist(P.B, P.D) / UNIT;
    return `AC = ${fmt(ac, 2)}, BD = ${fmt(bd, 2)}`;
  },

  // a real rectangle inside the frame
  isValid: (P) =>
    dist(P.A, P.B) > 120 &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 85 && p.x < 495 && p.y > 108 && p.y < 342)
};

export default rectangleDiagonals;
