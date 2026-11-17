// ===========================================================
// proofs/alternateBisectors.js
// Two parallel lines cut by a transversal at P and Q: the
// bisectors PX and QY of the two alternate angles ∠QPB = ∠PQC = β
// are parallel. Each half is β/2, so ∠QPX = ∠PQY; these are
// alternate angles for the lines PX and QY cut by PQ, and equal
// alternate angles make the lines parallel.
// The bisector directions come from bisectorFoot points (never
// shown), so nothing about PX ∥ QY is built in.
// The β names sit off the bisectors (labelAt), since PX and QY run
// along the middle of the angles they halve.
// Phases: given, alternate, halves, conclude
// ===========================================================

import { angleDeg, fmt } from './math.mjs';

const alternateBisectors = {
  label: 'Bisectors of alternate angles',
  info:
    'The parallel lines AB and CD are cut by a transversal at P and Q. The alternate angles ' +
    '∠QPB and ∠PQC are equal, β each. PX and QY bisect them, so ∠QPX = ∠PQY = β/2. These are ' +
    'alternate angles for the lines PX and QY cut by PQ, and they are equal, so PX ∥ QY. Drag P or Q ' +
    'along its line, or A, B or C to move the lines.',
  hint: 'Drag P or Q along its line, or A, B or C to move the lines',
  // the transversal is drawn only between the parallels, so P is named straight up and Q
  // straight down, with no line in the way
  labelCenter: ['P', 'Q'],
  // Frame for the two lines, the transversal and the labels.
  viewBox: [36, 92, 500, 290],

  model: {
    points: { A: { x: 80, y: 140 }, B: { x: 500, y: 140 }, C: { x: 80, y: 320 } },
    params: { tp: 0.31, tq: 0.385 },
    composites: [],
    objects: [
      // D: the second line keeps the direction and length of the first, so it stays parallel
      { id: 'D', type: 'pointAlongDist', from: 'C', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'P', type: 'onLine', of: ['A', 'B'], param: 'tp', drag: true, minParam: 0.12, maxParam: 0.7 },
      { id: 'Q', type: 'onLine', of: ['C', 'D'], param: 'tq', drag: true, minParam: 0.2, maxParam: 0.85 },
      // GP, GQ (never shown): the bisector directions of QPB and PQC; X, Y the drawn ends
      { id: 'GP', type: 'bisectorFoot', at: 'P', of: ['Q', 'B'] },
      { id: 'GQ', type: 'bisectorFoot', at: 'Q', of: ['P', 'C'] },
      { id: 'X', type: 'pointAlongDist', from: 'P', dir: ['P', 'GP'], lenOf: ['P', 'Q'], scale: 0.75 },
      { id: 'Y', type: 'pointAlongDist', from: 'Q', dir: ['Q', 'GQ'], lenOf: ['P', 'Q'], scale: 0.75 },
      { id: 'L1', type: 'segment', of: ['A', 'B'] },
      { id: 'L2', type: 'segment', of: ['C', 'D'] },
      { id: 'T', type: 'segment', of: ['P', 'Q'] },
      { id: 'par1', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'par2', type: 'parallel', of: ['C', 'D'], n: 1 },
      { id: 'PX', type: 'segment', of: ['P', 'X'] },
      { id: 'QY', type: 'segment', of: ['Q', 'Y'] },
      { id: 'bP', type: 'angle', at: 'P', from: 'Q', to: 'B', color: 'beta', label: 'β', radius: 63, labelAt: 0.78 },
      { id: 'bQ', type: 'angle', at: 'Q', from: 'P', to: 'C', color: 'beta', label: 'β', radius: 63, labelAt: 0.78 },
      { id: 'hP', type: 'angle', at: 'P', from: 'Q', to: 'X', color: 'alpha', label: 'β/2', radius: 104 },
      { id: 'hQ', type: 'angle', at: 'Q', from: 'P', to: 'Y', color: 'alpha', label: 'β/2', radius: 104 },
      { id: 'par3', type: 'parallel', of: ['P', 'X'], n: 2 },
      { id: 'par4', type: 'parallel', of: ['Y', 'Q'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two parallels, a transversal and two bisectors',
      formula: 'The lines AB and CD are parallel (arrow marks), and a transversal crosses them at P and Q. PX bisects the angle QPB and QY bisects the angle PQC, two angles between the parallels on opposite sides of the transversal. To prove: <strong>PX ∥ QY</strong>.',
      show: ['L1', 'L2', 'T', 'par1', 'par2', 'A', 'B', 'C', 'D', 'P', 'Q', 'X', 'Y', 'PX', 'QY'],
      hl: ['PX', 'QY']
    },
    {
      phase: 'alternate', just: 'Alternate angles',
      title: '∠QPB = ∠PQC = β',
      formula: 'The angles QPB and PQC lie between the parallels on opposite sides of the transversal: they are alternate angles, so they are equal, <strong>∠QPB = ∠PQC = β</strong>.',
      show: ['bP', 'bQ'],
      hl: ['bP', 'bQ']
    },
    {
      phase: 'halves', just: 'Angle bisector',
      title: '∠QPX = ∠PQY = β/2',
      formula: 'PX halves the angle QPB and QY halves the angle PQC, so the halves next to the transversal are equal: <strong>∠QPX = ∠PQY = β/2</strong>.',
      show: ['hP', 'hQ'],
      hl: ['hP', 'hQ']
    },
    {
      phase: 'conclude', just: 'Alternate angles converse',
      title: 'PX ∥ QY',
      formula: 'Now look at the lines PX and QY, cut by the transversal PQ. The angles QPX and PQY lie on opposite sides of PQ, between the two lines: they are alternate angles for PX and QY, and they are equal. Equal alternate angles make the lines parallel: <strong>PX ∥ QY</strong>. <strong>∎</strong>',
      show: ['par3', 'par4'],
      hl: ['hP', 'hQ', 'PX', 'QY', 'par3', 'par4']
    }
  ],

  readout: (P) => {
    const ux = P.X.x - P.P.x, uy = P.X.y - P.P.y, vx = P.Q.x - P.Y.x, vy = P.Q.y - P.Y.y;
    const t = Math.abs(Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)) * 180 / Math.PI;
    return `∠QPX = ${fmt(angleDeg(P.P, P.Q, P.X))}°,  ∠PQY = ${fmt(angleDeg(P.Q, P.P, P.Y))}°,  angle PX to QY = ${fmt(t)}°`;
  },

  // the lines long, nearly level and apart, β between 70° and 110°, and every
  // point far enough inside the frame for its name
  isValid: (P) => {
    if (!P.X || !P.Y || !P.D) return false;
    const inFrame = (p) => p.x > 72 && p.x < 502 && p.y > 118 && p.y < 345;
    const tilt = Math.abs(Math.atan2(P.B.y - P.A.y, P.B.x - P.A.x)) * 180 / Math.PI;
    const b = angleDeg(P.P, P.Q, P.B);
    const ab = Math.hypot(P.B.x - P.A.x, P.B.y - P.A.y), pq = Math.hypot(P.Q.x - P.P.x, P.Q.y - P.P.y);
    return [P.A, P.B, P.C, P.D, P.X, P.Y].every(inFrame) &&
      ab > 300 && pq > 160 && tilt < 12 && b > 70 && b < 110;
  }
};

export default alternateBisectors;
