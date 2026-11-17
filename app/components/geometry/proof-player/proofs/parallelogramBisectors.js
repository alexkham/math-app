// ===========================================================
// proofs/parallelogramBisectors.js — the four angle bisectors
// of a parallelogram enclose a rectangle.
// Neighbouring angles of a parallelogram are co-interior, so they
// add up to 180°; their bisectors meet at 180° − 90° = 90° (as on
// the co-interior bisectors page). This happens at all four
// crossings P, Q, R, S, so PQRS has four right angles. At P and R
// the angle of PQRS is the angle of the triangle; at Q and S it is
// its vertical angle.
// A, B, D are free; C copies AB from D, so ABCD stays a
// parallelogram. The bisector directions come from bisectorFoot
// points (never shown).
// Phases: given, cointerior, halves, right, others, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

// distance from p to the line a–b
const off = (p, a, b) => Math.abs((b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x)) / dist(a, b);

const parallelogramBisectors = {
  label: 'Bisectors of a parallelogram',
  info:
    'The angles at A and B of a parallelogram are co-interior, so α + β = 180°, and the bisectors from ' +
    'A and B make with AB the angles α/2 and β/2, which add up to 90°. The triangle ABP then has a ' +
    'right angle at P. The same holds at the other three crossings, so PQRS has four right angles: ' +
    'it is a rectangle. Drag A, B or D to change the parallelogram.',
  hint: 'Drag A, B or D to change the parallelogram',
  // names point away from the centre of the parallelogram, which is also the centre of PQRS
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the parallelogram and its labels.
  viewBox: [60, 120, 480, 260],

  model: {
    points: { A: { x: 110, y: 330 }, B: { x: 380, y: 330 }, D: { x: 190, y: 170 } },
    params: {},
    composites: [],
    objects: [
      // C: D moved by AB, so ABCD stays a parallelogram
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      // the feet of the four bisectors on the diagonals (never shown)
      { id: 'GA', type: 'bisectorFoot', at: 'A', of: ['B', 'D'] },
      { id: 'GB', type: 'bisectorFoot', at: 'B', of: ['C', 'A'] },
      { id: 'GC', type: 'bisectorFoot', at: 'C', of: ['D', 'B'] },
      { id: 'GD', type: 'bisectorFoot', at: 'D', of: ['A', 'C'] },
      // the four crossings of neighbouring bisectors
      { id: 'P', type: 'intersection', of: ['A', 'GA', 'B', 'GB'] },
      { id: 'Q', type: 'intersection', of: ['B', 'GB', 'C', 'GC'] },
      { id: 'R', type: 'intersection', of: ['C', 'GC', 'D', 'GD'] },
      { id: 'S', type: 'intersection', of: ['D', 'GD', 'A', 'GA'] },
      { id: 'G', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'par1', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'par2', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'par3', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'par4', type: 'parallel', of: ['B', 'C'], n: 2 },
      { id: 'AP', type: 'segment', of: ['A', 'P'] },
      { id: 'BP', type: 'segment', of: ['B', 'P'] },
      { id: 'CR', type: 'segment', of: ['C', 'R'] },
      { id: 'DR', type: 'segment', of: ['D', 'R'] },
      // arc sizes chosen so that the names stay apart over the whole drag range
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'alpha', label: 'α', radius: 48 },
      { id: 'aB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β', radius: 34 },
      { id: 'hA', type: 'angle', at: 'A', from: 'B', to: 'P', color: 'alpha', label: 'α/2', radius: 14 },
      { id: 'hB', type: 'angle', at: 'B', from: 'P', to: 'A', color: 'beta', label: 'β/2', radius: 14 },
      { id: 'pABP', type: 'polygon', of: ['A', 'B', 'P'], color: 'gamma' },
      { id: 'rP', type: 'rightAngle', at: 'P', from: 'S', to: 'Q' },
      { id: 'rQ', type: 'rightAngle', at: 'Q', from: 'P', to: 'R' },
      { id: 'rR', type: 'rightAngle', at: 'R', from: 'Q', to: 'S' },
      { id: 'rS', type: 'rightAngle', at: 'S', from: 'R', to: 'P' },
      { id: 'PQRS', type: 'polygon', of: ['P', 'Q', 'R', 'S'], color: 'delta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A parallelogram and its four angle bisectors',
      formula: 'ABCD is a parallelogram (AB ∥ DC, AD ∥ BC). The bisectors of its four angles cross at P (from A and B), Q (from B and C), R (from C and D) and S (from D and A). To prove: <strong>PQRS is a rectangle</strong>.',
      show: ['A', 'B', 'C', 'D', 'P', 'Q', 'R', 'S', 'G', 'AB', 'BC', 'CD', 'DA', 'par1', 'par2', 'par3', 'par4', 'AP', 'BP', 'CR', 'DR'],
      hl: ['AP', 'BP', 'CR', 'DR']
    },
    {
      phase: 'cointerior', just: 'Co-interior angles',
      title: 'α + β = 180°',
      formula: 'AD and BC are parallel and AB crosses them, so the angles α at A and β at B lie on the same side between the parallels: co-interior angles, <strong>α + β = 180°</strong>.',
      show: ['aA', 'aB'],
      hl: ['aA', 'aB', 'DA', 'BC']
    },
    {
      phase: 'halves', just: 'Angle bisector',
      title: '∠PAB = α/2,  ∠PBA = β/2',
      formula: 'AP halves α and BP halves β, so the triangle ABP has the angles <strong>α/2</strong> at A and <strong>β/2</strong> at B, and α/2 + β/2 = 180°/2 = 90°.',
      show: ['hA', 'hB'],
      hl: ['hA', 'hB']
    },
    {
      phase: 'right', just: 'Angle sum',
      title: '∠APB = 90°',
      formula: 'The angles of the triangle ABP add up to 180°, and the two at A and B make 90°, so <strong>∠APB = 90°</strong>. This is the angle of PQRS at P, between PS (towards A) and PQ (towards B).',
      show: ['pABP', 'rP'],
      hl: ['pABP', 'rP']
    },
    {
      phase: 'others', just: 'Same argument',
      title: 'Right angles at Q, R and S',
      formula: 'Every two neighbouring angles of a parallelogram are co-interior, so the same argument gives a right angle where any two neighbouring bisectors cross: ∠BQC = ∠CRD = ∠DSA = 90°. At R this is the angle of PQRS; at Q and S the angle of PQRS is its vertical angle, also 90°. So <strong>∠Q = ∠R = ∠S = 90°</strong>.',
      show: ['rQ', 'rR', 'rS'],
      hl: ['rQ', 'rR', 'rS']
    },
    {
      phase: 'conclude', just: 'Definition of a rectangle',
      title: 'PQRS is a rectangle',
      formula: 'A quadrilateral with four right angles is a rectangle: <strong>the angle bisectors of a parallelogram enclose a rectangle</strong>. <strong>∎</strong>',
      show: ['PQRS'],
      hl: ['PQRS', 'rP', 'rQ', 'rR', 'rS']
    }
  ],

  readout: (P) =>
    `∠P = ${fmt(angleDeg(P.P, P.S, P.Q))}°,  ∠Q = ${fmt(angleDeg(P.Q, P.P, P.R))}°,  ∠R = ${fmt(angleDeg(P.R, P.Q, P.S))}°,  ∠S = ${fmt(angleDeg(P.S, P.R, P.P))}°`,

  // the long side at least 1.45 times the short one (so PQRS is not a dot), P and R far
  // enough from DC and AB for their names (which also keeps PQRS inside), the angle at A
  // between 55° and 115°, everything in the frame
  isValid: (P) => {
    if (!P.P || !P.Q || !P.R || !P.S) return false;
    const inFrame = (p) => p.x > 80 && p.x < 520 && p.y > 142 && p.y < 356;
    const ab = dist(P.A, P.B), ad = dist(P.A, P.D);
    const a = angleDeg(P.A, P.B, P.D);
    return [P.A, P.B, P.C, P.D].every(inFrame) && ab > 1.45 * ad && ab < 1.85 * ad && ad > 140 &&
      a > 55 && a < 115 && dist(P.P, P.R) > 60 &&
      off(P.P, P.D, P.C) > 32 && off(P.R, P.A, P.B) > 32;
  }
};

export default parallelogramBisectors;
