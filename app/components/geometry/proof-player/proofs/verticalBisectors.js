// ===========================================================
// proofs/verticalBisectors.js — the bisectors of two vertical
// angles lie on one straight line.
// Lines AB and CD cross at O; OP bisects ∠AOC = α and OQ bisects
// the vertical angle ∠BOD = α. Going round from OP to OQ through
// OC and OB: α/2 + β + α/2 = α + β = 180°, because ∠AOC and ∠COB
// make the straight angle AOB. So P, O, Q are collinear.
// A, C and O are free; B and D are A and C mirrored in O. The
// bisector directions come from bisectorFoot points (never shown).
// Phases: given, vertical, halves, straight, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const verticalBisectors = {
  label: 'Bisectors of vertical angles',
  info:
    'Two lines cross at O, making the vertical angles ∠AOC = ∠BOD = α and the angle ∠COB = β, with ' +
    'α + β = 180° along the line AB. OP bisects ∠AOC and OQ bisects ∠BOD. From OP round to OQ through ' +
    'OC and OB the angle is α/2 + β + α/2 = α + β = 180°, so OP and OQ make a straight line. Drag A, C ' +
    'or O.',
  hint: 'Drag A or C to turn a line, or O to move the crossing',
  // names point away from a spot just above O, so O gets its name below, in the empty angle
  // AOD, and the other points get outward names
  labelCenter: ['O', 'O', 'O', 'C', 'B'],
  // Frame for the two lines, the bisectors and the labels.
  viewBox: [70, 70, 420, 320],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 110, y: 300 }, C: { x: 150, y: 110 } },
    params: {},
    composites: [],
    objects: [
      // B, D: A and C mirrored in O, so AB and CD are straight lines through O
      { id: 'B', type: 'pointAlongDist', from: 'O', dir: ['A', 'O'], lenOf: ['O', 'A'] },
      { id: 'D', type: 'pointAlongDist', from: 'O', dir: ['C', 'O'], lenOf: ['O', 'C'] },
      // the bisector directions (never shown) and the drawn bisector ends P, Q
      { id: 'G1', type: 'bisectorFoot', at: 'O', of: ['A', 'C'] },
      { id: 'G2', type: 'bisectorFoot', at: 'O', of: ['B', 'D'] },
      { id: 'P', type: 'pointAlongDist', from: 'O', dir: ['O', 'G1'], lenOf: ['O', 'A'], scale: 0.85 },
      { id: 'Q', type: 'pointAlongDist', from: 'O', dir: ['O', 'G2'], lenOf: ['O', 'A'], scale: 0.85 },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'OQ', type: 'segment', of: ['O', 'Q'] },
      // arc sizes chosen so that the names stay apart; the halves sit outside the whole angles
      { id: 'aL', type: 'angle', at: 'O', from: 'A', to: 'C', color: 'alpha', label: 'α', radius: 66 },
      { id: 'aR', type: 'angle', at: 'O', from: 'B', to: 'D', color: 'alpha', label: 'α', radius: 66 },
      { id: 'hL', type: 'angle', at: 'O', from: 'P', to: 'C', color: 'gamma', label: 'α/2', radius: 84 },
      { id: 'hR', type: 'angle', at: 'O', from: 'B', to: 'Q', color: 'gamma', label: 'α/2', radius: 84 },
      { id: 'bT', type: 'angle', at: 'O', from: 'C', to: 'B', color: 'beta', label: 'β', radius: 28 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two crossing lines and two bisectors',
      formula: 'The lines AB and CD cross at O. OP bisects the angle AOC and OQ bisects the vertical angle BOD. To prove: <strong>P, O and Q lie on one straight line</strong>, that is ∠POQ = 180°.',
      show: ['O', 'A', 'B', 'C', 'D', 'P', 'Q', 'AB', 'CD', 'OP', 'OQ'],
      hl: ['OP', 'OQ']
    },
    {
      phase: 'vertical', just: 'Vertical angles',
      title: '∠BOD = ∠AOC = α',
      formula: 'The angles AOC and BOD lie opposite each other at the crossing, so they are vertical angles and equal: <strong>∠AOC = ∠BOD = α</strong>.',
      show: ['aL', 'aR'],
      hl: ['aL', 'aR']
    },
    {
      phase: 'halves', just: 'Angle bisector',
      title: '∠POC = ∠BOQ = α/2',
      formula: 'OP halves ∠AOC and OQ halves ∠BOD, so the half next to OC and the half next to OB are both <strong>α/2</strong>.',
      show: ['hL', 'hR'],
      hl: ['hL', 'hR']
    },
    {
      phase: 'straight', just: 'Straight angle',
      title: 'α + β = 180°',
      formula: 'The angle β = ∠COB lies between the two halves. The angles AOC and COB together fill the straight angle AOB along the line AB, so <strong>α + β = 180°</strong>.',
      show: ['bT'],
      hl: ['bT', 'aL', 'AB']
    },
    {
      phase: 'conclude', just: 'Adding',
      title: '∠POQ = 180°',
      formula: 'Going from OP to OQ through OC and OB: ∠POQ = α/2 + β + α/2 = α + β = <strong>180°</strong>. A straight angle at O: the two bisectors OP and OQ lie on one line. <strong>∎</strong>',
      show: [],
      hl: ['hL', 'bT', 'hR', 'OP', 'OQ']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.O, P.A, P.C), b = angleDeg(P.O, P.C, P.B);
    const s = angleDeg(P.O, P.P, P.C) + b + angleDeg(P.O, P.B, P.Q);
    return `α = ${fmt(a)}°,  β = ${fmt(b)}°,  α/2 + β + α/2 = ${fmt(s)}°`;
  },

  // both lines long, α between 50° and 130° so every mark is readable, all in the frame
  isValid: (P) => {
    const inFrame = (p) => p.x > 104 && p.x < 456 && p.y > 104 && p.y < 356;
    const a = angleDeg(P.O, P.A, P.C);
    return [P.A, P.B, P.C, P.D, P.P, P.Q].every(inFrame) &&
      dist(P.O, P.A) > 120 && dist(P.O, P.C) > 120 && a > 50 && a < 130;
  }
};

export default verticalBisectors;
