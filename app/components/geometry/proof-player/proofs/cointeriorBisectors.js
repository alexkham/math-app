// ===========================================================
// proofs/cointeriorBisectors.js
// Two parallel lines cut by a transversal at P and Q: the
// bisectors of the two co-interior angles β = ∠QPB and δ = ∠PQD
// meet at a right angle. β + δ = 180° (co-interior angles), so
// in the triangle PQR the angles at P and Q are β/2 + δ/2 = 90°
// and the angle at R is 180° − 90° = 90°.
// The bisector directions come from bisectorFoot points (never
// shown); R is where the two bisectors cross, so nothing about
// the right angle is built in.
// Phases: given, cointerior, halves, add, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const cointeriorBisectors = {
  label: 'Bisectors of co-interior angles',
  info:
    'The parallel lines AB and CD are cut by a transversal at P and Q. The co-interior angles ' +
    'β = ∠QPB and δ = ∠PQD add up to 180°. Their bisectors meet at R, and the triangle PQR has ' +
    'angles β/2 and δ/2 at P and Q, which add up to 90°, so the angle at R is 90°. Drag P or Q ' +
    'along its line, or A, B or C to move the lines.',
  hint: 'Drag P or Q along its line, or A, B or C to move the lines',
  labelCenter: ['P', 'Q', 'R'],
  // Frame for the two lines, the transversal and the labels.
  viewBox: [36, 92, 500, 290],

  model: {
    points: { A: { x: 80, y: 140 }, B: { x: 500, y: 140 }, C: { x: 80, y: 320 } },
    params: { tp: 0.3, tq: 0.38 },
    composites: [],
    objects: [
      // D: the second line keeps the direction and length of the first, so it stays parallel
      { id: 'D', type: 'pointAlongDist', from: 'C', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'P', type: 'onLine', of: ['A', 'B'], param: 'tp', drag: true, minParam: 0.1, maxParam: 0.6 },
      { id: 'Q', type: 'onLine', of: ['C', 'D'], param: 'tq', drag: true, minParam: 0.1, maxParam: 0.6 },
      // E, F (never shown): the ends of the transversal, a little beyond P and Q
      { id: 'E', type: 'pointAlongDist', from: 'P', dir: ['Q', 'P'], lenOf: ['P', 'Q'], scale: 0.16 },
      { id: 'F', type: 'pointAlongDist', from: 'Q', dir: ['P', 'Q'], lenOf: ['P', 'Q'], scale: 0.16 },
      // GP, GQ (never shown): where the bisectors of QPB and PQD meet QB and PD
      { id: 'GP', type: 'bisectorFoot', at: 'P', of: ['Q', 'B'] },
      { id: 'GQ', type: 'bisectorFoot', at: 'Q', of: ['P', 'D'] },
      // R: where the two bisectors cross
      { id: 'R', type: 'intersection', of: ['P', 'GP', 'Q', 'GQ'] },
      { id: 'L1', type: 'segment', of: ['A', 'B'] },
      { id: 'L2', type: 'segment', of: ['C', 'D'] },
      { id: 'T', type: 'segment', of: ['E', 'F'] },
      { id: 'par1', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'par2', type: 'parallel', of: ['C', 'D'], n: 1 },
      { id: 'PR', type: 'segment', of: ['P', 'R'] },
      { id: 'QR', type: 'segment', of: ['Q', 'R'] },
      { id: 'angB', type: 'angle', at: 'P', from: 'Q', to: 'B', color: 'beta', label: 'β', radius: 49 },
      { id: 'angD', type: 'angle', at: 'Q', from: 'D', to: 'P', color: 'alpha', label: 'δ', radius: 64 },
      // the halves at one vertex have different radii so that their names stay apart
      { id: 'p1', type: 'angle', at: 'P', from: 'Q', to: 'R', color: 'beta', label: 'β/2', radius: 63 },
      { id: 'p2', type: 'angle', at: 'P', from: 'R', to: 'B', color: 'beta', label: 'β/2', radius: 18 },
      { id: 'q1', type: 'angle', at: 'Q', from: 'D', to: 'R', color: 'alpha', label: 'δ/2', radius: 80 },
      { id: 'q2', type: 'angle', at: 'Q', from: 'R', to: 'P', color: 'alpha', label: 'δ/2', radius: 18 },
      { id: 'pPQR', type: 'polygon', of: ['P', 'Q', 'R'], color: 'gamma' },
      { id: 'rR', type: 'rightAngle', at: 'R', from: 'P', to: 'Q' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two parallels, a transversal and two bisectors',
      formula: 'The lines AB and CD are parallel (arrow marks), and a transversal crosses them at P and Q. PR bisects the angle QPB and QR bisects the angle PQD, the two angles between the parallels on the same side of the transversal. To prove: <strong>∠PRQ = 90°</strong>.',
      show: ['L1', 'L2', 'T', 'par1', 'par2', 'A', 'B', 'C', 'D', 'P', 'Q', 'R', 'PR', 'QR'],
      hl: ['PR', 'QR']
    },
    {
      phase: 'cointerior', just: 'Co-interior angles',
      title: 'β + δ = 180°',
      formula: 'The angles β = ∠QPB and δ = ∠PQD lie between the parallels on the same side of the transversal: they are co-interior angles, so <strong>β + δ = 180°</strong>.',
      show: ['angB', 'angD'],
      hl: ['angB', 'angD']
    },
    {
      phase: 'halves', just: 'Angle bisector',
      title: '∠QPR = β/2,  ∠PQR = δ/2',
      formula: 'PR halves the angle β and QR halves the angle δ, so the triangle PQR has the angles <strong>∠QPR = β/2</strong> at P and <strong>∠PQR = δ/2</strong> at Q.',
      show: ['p1', 'p2', 'q1', 'q2'],
      hl: ['p1', 'q2']
    },
    {
      phase: 'add', just: 'Adding',
      title: 'β/2 + δ/2 = 90°',
      formula: 'Add the two angles of the triangle at P and Q: β/2 + δ/2 = (β + δ)/2 = 180°/2 = <strong>90°</strong>.',
      show: ['pPQR'],
      hl: ['pPQR', 'p1', 'q2']
    },
    {
      phase: 'conclude', just: 'Angle sum',
      title: '∠PRQ = 90°',
      formula: 'The three angles of the triangle PQR add up to 180°, and the two at P and Q make 90°, so the third is <strong>∠PRQ = 180° − 90° = 90°</strong>: the bisectors are perpendicular. <strong>∎</strong>',
      show: ['rR'],
      hl: ['rR', 'PR', 'QR']
    }
  ],

  readout: (P) =>
    `β = ${fmt(angleDeg(P.P, P.Q, P.B))}°,  δ = ${fmt(angleDeg(P.Q, P.D, P.P))}°,  ∠PRQ = ${fmt(angleDeg(P.R, P.P, P.Q))}°`,

  // the lines long, nearly level and apart, the co-interior angles between 60°
  // and 120°, and every point far enough inside the frame for its name
  isValid: (P) => {
    if (!P.R || !P.D) return false;
    const inFrame = (p) => p.x > 66 && p.x < 512 && p.y > 118 && p.y < 345;
    const tilt = Math.abs(Math.atan2(P.B.y - P.A.y, P.B.x - P.A.x)) * 180 / Math.PI;
    const b = angleDeg(P.P, P.Q, P.B);
    return [P.A, P.B, P.C, P.D, P.R].every(inFrame) &&
      dist(P.A, P.B) > 300 && dist(P.P, P.Q) > 165 &&
      tilt < 12 && b > 60 && b < 120 && P.R.x < Math.max(P.B.x, P.D.x) - 30;
  }
};

export default cointeriorBisectors;
