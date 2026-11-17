// ===========================================================
// proofs/parallelBend.js — the angle at a bend between two
// parallel lines: if the rays BA and DC are parallel and point the
// same way, and E lies between them on that side, then
// ∠BED = ∠ABE + ∠CDE.
// Draw EF through E parallel to AB (and so to CD), pointing the
// other way. ∠BEF = ∠ABE and ∠FED = ∠CDE are alternate angles, and
// together they make ∠BED.
// B, A, D and E are free; C keeps DC parallel to BA and as long;
// F is on the parallel through E, so nothing about the sum is
// built in.
// Names point away from a spot between E, F, B and D, so E is named on
// its right, the one side with no line, and F on its left.
// Phases: given, parallel, top, bottom, conclude
// ===========================================================

import { angleDeg, dist, fmt } from './math.mjs';

const parallelBend = {
  label: 'Angle at a bend between parallels',
  info:
    'AB and CD are parallel and E lies between them. Draw EF through E parallel to them, pointing the ' +
    'other way. ∠BEF and ∠ABE are alternate angles for the parallels AB and EF, so they are equal; ' +
    'likewise ∠FED = ∠CDE. Together ∠BEF and ∠FED make ∠BED, so ∠BED = ∠ABE + ∠CDE. Drag B, A, D or E.',
  hint: 'Drag E to bend the path, or B, A or D to move the lines',
  labelCenter: ['E', 'F', 'B', 'D'],
  // Frame for the two lines, the bend and the labels.
  viewBox: [80, 92, 400, 280],

  model: {
    points: { B: { x: 130, y: 140 }, A: { x: 420, y: 140 }, D: { x: 150, y: 330 }, E: { x: 250, y: 240 } },
    params: {},
    composites: [],
    objects: [
      // C: DC keeps the direction and length of BA, so the two lines stay parallel
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['B', 'A'], lenOf: ['B', 'A'] },
      // F: on the parallel through E, on the side away from A and C
      { id: 'F', type: 'pointAlongDist', from: 'E', dir: ['A', 'B'], lenOf: ['B', 'A'], scale: 0.35 },
      { id: 'BA', type: 'segment', of: ['B', 'A'] },
      { id: 'DC', type: 'segment', of: ['D', 'C'] },
      { id: 'BE', type: 'segment', of: ['B', 'E'] },
      { id: 'ED', type: 'segment', of: ['E', 'D'] },
      { id: 'parBA', type: 'parallel', of: ['B', 'A'], n: 1 },
      { id: 'parDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'EF', type: 'line', of: ['E', 'F'] },
      { id: 'parFE', type: 'parallel', of: ['F', 'E'], n: 1 },
      { id: 'aB', type: 'angle', at: 'B', from: 'A', to: 'E', color: 'alpha', label: 'α', radius: 51 },
      { id: 'bD', type: 'angle', at: 'D', from: 'C', to: 'E', color: 'beta', label: 'β', radius: 51 },
      { id: 'aE', type: 'angle', at: 'E', from: 'B', to: 'F', color: 'alpha', label: 'α', radius: 27 },
      { id: 'bE', type: 'angle', at: 'E', from: 'F', to: 'D', color: 'beta', label: 'β', radius: 27 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A bend between two parallels',
      formula: 'The rays BA and DC are parallel (arrow marks) and point the same way. E lies between them, and the path B, E, D bends at E. Call α = ∠ABE and β = ∠CDE. To prove: <strong>∠BED = α + β</strong>.',
      show: ['A', 'B', 'C', 'D', 'E', 'BA', 'DC', 'BE', 'ED', 'parBA', 'parDC', 'aB', 'bD'],
      hl: ['aB', 'bD']
    },
    {
      phase: 'parallel', just: 'Parallel through a point',
      title: 'EF ∥ AB ∥ CD',
      formula: 'Draw the line EF through E parallel to AB, with F on the side away from A and C. Two lines parallel to the same line are parallel to each other, so <strong>EF is parallel to both AB and CD</strong>.',
      show: ['F', 'EF', 'parFE'],
      hl: ['EF', 'parFE']
    },
    {
      phase: 'top', just: 'Alternate angles',
      title: '∠BEF = α',
      formula: 'BE crosses the parallels AB and EF. The angles ABE and BEF lie on opposite sides of BE, between the parallels: they are alternate angles, so <strong>∠BEF = α</strong>.',
      show: ['aE'],
      hl: ['aE', 'aB', 'BE']
    },
    {
      phase: 'bottom', just: 'Alternate angles',
      title: '∠FED = β',
      formula: 'In the same way ED crosses the parallels EF and CD, and the alternate angles are equal: <strong>∠FED = β</strong>.',
      show: ['bE'],
      hl: ['bE', 'bD', 'ED']
    },
    {
      phase: 'conclude', just: 'Adding angles',
      title: '∠BED = α + β',
      formula: 'The ray EF lies inside the angle BED and splits it into ∠BEF and ∠FED, so <strong>∠BED = α + β = ∠ABE + ∠CDE</strong>. <strong>∎</strong>',
      show: [],
      hl: ['aE', 'bE']
    }
  ],

  readout: (P) =>
    `∠ABE + ∠CDE = ${fmt(angleDeg(P.B, P.A, P.E) + angleDeg(P.D, P.C, P.E))}°,  ∠BED = ${fmt(angleDeg(P.E, P.B, P.D))}°`,

  // the lines long, nearly level and apart, E between them with room on both sides, the
  // angles α and β large enough for their marks, everything in the frame
  isValid: (P) => {
    const L = dist(P.B, P.A);
    const ux = (P.A.x - P.B.x) / L, uy = (P.A.y - P.B.y) / L;
    const off = (p) => (p.x - P.B.x) * -uy + (p.y - P.B.y) * ux; // distance from the line BA
    const along = (p, q) => (p.x - q.x) * ux + (p.y - q.y) * uy; // how far p is past q along BA
    const tilt = Math.abs(Math.atan2(uy, ux)) * 180 / Math.PI;
    const h = off(P.D), e = off(P.E);
    const a = angleDeg(P.B, P.A, P.E), b = angleDeg(P.D, P.C, P.E);
    const inFrame = (p) => p.x > 112 && p.x < 448 && p.y > 124 && p.y < 340;
    return L > 230 && tilt < 15 && h > 140 && e > 55 && h - e > 55 &&
      along(P.E, P.B) > 60 && along(P.E, P.D) > 60 && along(P.A, P.E) > 90 && along(P.C, P.E) > 90 &&
      a > 25 && a < 75 && b > 25 && b < 75 && [P.A, P.B, P.C, P.D, P.E, P.F].every(inFrame);
  }
};

export default parallelBend;
