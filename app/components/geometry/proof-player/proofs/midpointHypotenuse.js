// ===========================================================
// proofs/midpointHypotenuse.js — the midpoint of the hypotenuse
// of a right triangle is equidistant from the three vertices.
// Complete ABC to the rectangle CADB; its diagonals AB and CD
// are equal and bisect each other, so M, the midpoint of AB,
// is also the midpoint of CD and MC = MA = MB.
// The right angle at C is kept by a hidden perpendicular end P
// (B is an onLine point on C–P), so the circle is not assumed.
// Phases: given, complete, rectangle, diagonals, bisect, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const midpointHypotenuse = {
  label: 'Midpoint of the hypotenuse',
  info:
    'Complete the right triangle ABC to the rectangle CADB by drawing parallels through A and B. ' +
    'A parallelogram with one right angle has four, so CADB is a rectangle; its diagonals AB and ' +
    'CD are equal and bisect each other. So the midpoint M of AB is also the midpoint of CD, and ' +
    'MC = CD/2 = AB/2 = MA = MB. Drag B along its leg, or A or C.',
  hint: 'Drag B along its leg, or A or C (the angle at C stays right)',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the rectangle, the circle about M and the labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { C: { x: 180, y: 285 }, A: { x: 380, y: 285 } },
    params: { t: 0.7 },
    composites: [],
    objects: [
      // P (never shown): the end of the perpendicular to CA at C; B on C–P keeps ∠C = 90°
      { id: 'P', type: 'perpAlongDist', from: 'C', dir: ['C', 'A'], lenOf: ['C', 'A'], side: 1 },
      { id: 'B', type: 'onLine', of: ['C', 'P'], param: 't', drag: true, minParam: 0.4, maxParam: 0.85 },
      // D = A + (B − C): the fourth corner of the rectangle
      { id: 'D', type: 'pointAlongDist', from: 'A', dir: ['C', 'B'], lenOf: ['C', 'B'], scale: 1 },
      { id: 'M', type: 'midpoint', of: ['A', 'B'] },
      { id: 'pR', type: 'polygon', of: ['C', 'A', 'D', 'B'], color: 'alpha' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'A', to: 'B' },
      { id: 'tMA', type: 'ticks', of: ['M', 'A'], n: 1 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 1 },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'mCB', type: 'parallel', of: ['C', 'B'], n: 2 },
      { id: 'mAD', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'mCA', type: 'parallel', of: ['C', 'A'], n: 1 },
      { id: 'mBD', type: 'parallel', of: ['B', 'D'], n: 1 },
      { id: 'rA', type: 'rightAngle', at: 'A', from: 'C', to: 'D' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'D', to: 'C' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'B', to: 'A' },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'tMC', type: 'ticks', of: ['M', 'C'], n: 1 },
      { id: 'tMD', type: 'ticks', of: ['M', 'D'], n: 1 },
      { id: 'K', type: 'circle', of: ['M', 'A'], color: 'alpha' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A right triangle and the midpoint of its hypotenuse',
      formula: 'Triangle ABC has a right angle at C, and M is the midpoint of the hypotenuse AB, so MA = MB (one tick each). To prove: <strong>MC = MA = MB</strong>, the midpoint of the hypotenuse is equally far from all three vertices.',
      show: ['A', 'B', 'C', 'M', 'T', 'AB', 'BC', 'CA', 'rC', 'tMA', 'tMB'],
      hl: ['tMA', 'tMB']
    },
    {
      phase: 'complete', just: 'Construction',
      title: 'Complete the parallelogram CADB',
      formula: 'Through A draw the parallel to CB, and through B the parallel to CA; they meet at D. Both pairs of opposite sides of CADB are parallel, so it is a parallelogram.',
      show: ['D', 'AD', 'BD', 'pR', 'mCB', 'mAD', 'mCA', 'mBD'],
      hl: ['pR']
    },
    {
      phase: 'rectangle', just: 'Parallelogram angles',
      title: 'CADB is a rectangle',
      formula: 'Neighbouring angles of a parallelogram add up to 180°, and the angle at C is 90°. So the angles at A and B are 180° − 90° = 90°, and the angle at D, opposite C, is 90° as well: <strong>CADB is a rectangle</strong>.',
      show: ['rA', 'rB', 'rD'],
      hl: ['rC', 'rA', 'rB', 'rD']
    },
    {
      phase: 'diagonals', just: 'Rectangle diagonals',
      title: 'CD = AB',
      formula: 'Draw the second diagonal CD. The diagonals of a rectangle are equal, so <strong>CD = AB</strong>.',
      show: ['CD'],
      hl: ['CD', 'AB']
    },
    {
      phase: 'bisect', just: 'Parallelogram diagonals',
      title: 'M is the midpoint of CD as well',
      formula: 'The diagonals of a parallelogram bisect each other, so they cross at the midpoint of each. That crossing point is the midpoint of AB, which is M: so CD passes through M and <strong>MC = MD = CD/2</strong>.',
      show: ['tMC', 'tMD'],
      hl: ['tMC', 'tMD']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'MC = MA = MB',
      formula: 'MC = CD/2 = AB/2 = MA = MB. The midpoint of the hypotenuse is equally far from all three vertices, so the circle about M through A passes through B and C: <strong>the hypotenuse is a diameter of the circumcircle</strong>. <strong>∎</strong>',
      show: ['K'],
      hl: ['K', 'tMA', 'tMB', 'tMC']
    }
  ],

  readout: (P) =>
    `MA = ${fmt(dist(P.M, P.A) / UNIT, 2)},  MB = ${fmt(dist(P.M, P.B) / UNIT, 2)},  MC = ${fmt(dist(P.M, P.C) / UNIT, 2)},  ∠C = ${fmt(angleDeg(P.C, P.A, P.B), 0)}°`,

  // legs long enough, the rectangle and the circle about M inside the frame
  isValid: (P) => {
    if (!P.B || !P.D || !P.M) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const r = dist(P.M, P.A);
    return [P.A, P.B, P.C, P.D].every(inFrame) && dist(P.C, P.A) > 120 && dist(P.C, P.B) > 80 &&
      P.M.x - r > 62 && P.M.x + r < 498 && P.M.y - r > 62 && P.M.y + r < 358;
  }
};

export default midpointHypotenuse;
