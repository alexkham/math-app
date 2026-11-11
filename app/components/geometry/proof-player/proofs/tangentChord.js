// ===========================================================
// proofs/tangentChord.js — the tangent–chord angle (alternate
// segment theorem, Euclid III.32). The angle between a tangent
// at A and a chord AB equals the inscribed angle on AB in the
// segment on the other side of the chord: ∠TAB = ∠ACB.
// Proof: the diameter AD; tangent ⟂ radius gives ∠TAD = 90°,
// Thales gives ∠ABD = 90°, so ∠TAB and ∠ADB are both the
// complement of ∠BAD; and ∠ADB = ∠ACB on the arc AB.
// Phases: given, diameter, thales, complement, inscribed, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const tangentChord = {
  label: 'Tangent-chord angle',
  info:
    'Draw the diameter AD. The tangent is perpendicular to the radius, so ∠TAD = 90°, and the ' +
    'angle in the semicircle makes ∠ABD = 90°. In the right triangle ABD, ∠ADB = 90° − ∠BAD; and ' +
    'at A, ∠TAB = 90° − ∠BAD as well. So ∠TAB = ∠ADB, and ∠ADB = ∠ACB because both stand on ' +
    'the arc AB. Slide B or C round the circle.',
  hint: 'Drag B or C round the circle, A for the radius, O for the centre',
  labelCenter: ['O'],
  // Frame for the circle (radius 150 about O), the tangent and the labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 130, y: 230 } },
    params: { tb: -0.6, tc: 0.7 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'A', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'A', param: 'tc', drag: true },
      // D: the far end of the diameter through A
      { id: 'D', type: 'pointAlongDist', from: 'O', dir: ['A', 'O'], lenOf: ['O', 'A'], scale: 1 },
      // T and T2 (T2 never shown): the two ends of the tangent at A, perpendicular to OA
      { id: 'T', type: 'perpAlongDist', from: 'A', dir: ['A', 'O'], lenOf: ['O', 'A'], scale: 0.8, side: 1 },
      { id: 'T2', type: 'perpAlongDist', from: 'A', dir: ['A', 'O'], lenOf: ['O', 'A'], scale: 0.55, side: -1 },
      { id: 'tan', type: 'segment', of: ['T2', 'T'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'tTAB', type: 'angle', at: 'A', from: 'T', to: 'B', color: 'alpha', label: 'θ' },
      { id: 'tACB', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'alpha', label: 'θ' },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'rA', type: 'rightAngle', at: 'A', from: 'T', to: 'D' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'A', to: 'D' },
      { id: 'fBAD', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'beta', label: 'φ', radius: 52 },
      { id: 'tADB', type: 'angle', at: 'D', from: 'A', to: 'B', color: 'alpha', label: 'θ' },
      { id: 'pABD', type: 'polygon', of: ['A', 'B', 'D'], color: 'beta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A tangent, a chord and an angle in the alternate segment',
      formula: 'The line TA touches the circle at A, and AB is a chord from the point of contact. C is any point of the circle on the other side of AB from T. To prove: <strong>∠TAB = ∠ACB</strong>, the angle between the tangent and the chord equals the inscribed angle on the chord in the alternate segment.',
      show: ['O', 'A', 'B', 'C', 'T', 'W', 'tan', 'AB', 'AC', 'BC', 'tTAB', 'tACB'],
      hl: ['tTAB', 'tACB']
    },
    {
      phase: 'diameter', just: 'Tangent ⟂ radius',
      title: 'Draw the diameter AD: ∠TAD = 90°',
      formula: 'Draw the diameter from A through the centre O to D. The tangent at A is perpendicular to the radius OA, so <strong>∠TAD = 90°</strong>. Call ∠BAD = φ; then ∠TAB = θ = 90° − φ.',
      show: ['D', 'AD', 'rA', 'fBAD'],
      hl: ['AD', 'rA']
    },
    {
      phase: 'thales', just: "Thales' theorem",
      title: '∠ABD = 90°',
      formula: 'Join B to D. The angle at B stands on the diameter AD, so by Thales\' theorem <strong>∠ABD = 90°</strong>: ABD is a right triangle with the right angle at B.',
      show: ['BD', 'rB', 'pABD'],
      hl: ['pABD', 'rB']
    },
    {
      phase: 'complement', just: 'Angle sum',
      title: '∠ADB = 90° − φ = ∠TAB',
      formula: 'In the right triangle ABD the two acute angles add up to 90°, so ∠ADB = 90° − ∠BAD = 90° − φ. But ∠TAB is also 90° − φ, since ∠TAB + ∠BAD = ∠TAD = 90°. So <strong>∠ADB = ∠TAB = θ</strong>.',
      show: ['tADB'],
      hl: ['tADB', 'tTAB']
    },
    {
      phase: 'inscribed', just: 'Inscribed angles',
      title: '∠ADB = ∠ACB',
      formula: 'The angles at D and at C both stand on the arc AB, and D and C lie on the same side of the chord AB (the side away from T). Inscribed angles on the same arc are equal: <strong>∠ADB = ∠ACB</strong>.',
      show: [],
      hl: ['tADB', 'tACB']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: '∠TAB = ∠ACB',
      formula: '∠TAB = ∠ADB (both are the complement of φ) and ∠ADB = ∠ACB (same arc), so <strong>∠TAB = ∠ACB</strong>. The tangent makes with the chord the angle in the alternate segment. <strong>∎</strong>',
      show: [],
      hl: ['tTAB', 'tACB']
    }
  ],

  readout: (P) =>
    `∠TAB = ${fmt(angleDeg(P.A, P.T, P.B), 0)}°,  ∠ADB = ${fmt(angleDeg(P.D, P.A, P.B), 0)}°,  ∠ACB = ${fmt(angleDeg(P.C, P.A, P.B), 0)}°`,

  // B on the T side of the diameter, C on the far side of the chord AB,
  // the points apart, everything in the frame
  isValid: (P) => {
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    return [P.O, P.A, P.B, P.C, P.D, P.T].every(inFrame) && dist(P.O, P.A) > 90 &&
      cross(P.A, P.D, P.B) * cross(P.A, P.D, P.T) > 0 &&
      cross(P.A, P.B, P.C) * cross(P.A, P.B, P.T) < 0 &&
      dist(P.A, P.B) > 60 && dist(P.B, P.D) > 45 && dist(P.A, P.C) > 60 && dist(P.B, P.C) > 50 &&
      dist(P.C, P.D) > 30 && area2(P.A, P.B, P.C) > 4000;
  }
};

export default tangentChord;
