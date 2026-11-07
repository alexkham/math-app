// ===========================================================
// proofs/secantTangent.js — the secant-tangent theorem
// From a point P outside a circle, a tangent PT and a secant
// through A and B satisfy PT² = PA · PB (Euclid III.36).
// Euclid's route, no similarity: M the midpoint of the chord
// AB (foot of O), PA · PB = PM² − AM² by the difference of
// squares, Pythagoras twice gives OP² − R²; and PT² = OP² − R²
// by tangent ⟂ radius and Pythagoras once more.
// Phases: given, foot, squares, pyth, tangent, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const secantTangent = {
  label: 'Secant and tangent',
  info:
    'Drop the perpendicular from the centre O to the chord AB; its foot M is the midpoint of AB. ' +
    'Then PA · PB = (PM − AM)(PM + AM) = PM² − AM², and by Pythagoras in the right triangles ' +
    'OMP and OMA this equals OP² − OA² = OP² − R². The tangent gives the same number: OT ⟂ PT, ' +
    'so PT² = OP² − OT² = OP² − R². Drag A round the near side of the circle, or move P or O.',
  hint: 'Drag A round the near side of the circle, P outside, O to move the circle',
  labelCenter: ['O'],
  // Frame for the circle (radius 120 about O) and the outside point.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 300, y: 250 }, P: { x: 100, y: 120 } },
    params: { r: 120, ta: -2.2 },
    composites: [],
    objects: [
      // T: the point of contact of the tangent from P
      { id: 'T', type: 'tangentPoint', center: 'O', from: 'P', radius: 'r', side: -1 },
      { id: 'K', type: 'circle', of: ['O', 'T'] },
      // A: the near end of the secant, free on the circle
      { id: 'A', type: 'onCircle', center: 'O', through: 'T', param: 'ta', drag: true },
      // M: foot of O on the line PA; B: the far end, the mirror of A in OM
      { id: 'M', type: 'foot', from: 'O', to: ['P', 'A'] },
      { id: 'B', type: 'pointAlongDist', from: 'M', dir: ['A', 'M'], lenOf: ['A', 'M'] },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'PT', type: 'segment', of: ['P', 'T'] },
      { id: 'OM', type: 'segment', of: ['O', 'M'] },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'B', to: 'O' },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 1 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 1 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'triA', type: 'polygon', of: ['O', 'M', 'A'], color: 'alpha' },
      { id: 'triP', type: 'polygon', of: ['O', 'M', 'P'], color: 'beta' },
      { id: 'OT', type: 'segment', of: ['O', 'T'] },
      { id: 'rT', type: 'rightAngle', at: 'T', from: 'P', to: 'O' },
      { id: 'triT', type: 'polygon', of: ['O', 'T', 'P'], color: 'gamma' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A tangent and a secant from an outside point',
      formula: 'P lies outside the circle with centre O. From P, the tangent touches the circle at T, and the secant through P cuts it at A (nearer) and B (farther). To prove: <strong>PT² = PA · PB</strong>.',
      show: ['K', 'O', 'P', 'T', 'A', 'B', 'PB', 'PT'],
      hl: ['PT', 'PB']
    },
    {
      phase: 'foot', just: 'Perpendicular bisects the chord',
      title: 'M, the foot of O on AB, is the midpoint of AB',
      formula: 'Drop the perpendicular from the centre O to the chord AB; call its foot M. The perpendicular from the centre bisects the chord, so AM = MB (one tick each).',
      show: ['M', 'OM', 'rM', 'tAM', 'tMB'],
      hl: ['OM', 'tAM', 'tMB']
    },
    {
      phase: 'squares', just: 'Difference of squares',
      title: 'PA · PB = PM² − AM²',
      formula: 'P, A, M, B lie on one line in that order, so PA = PM − AM and PB = PM + MB = PM + AM. Their product is (PM − AM)(PM + AM) = <strong>PM² − AM²</strong>.',
      show: [],
      hl: ['PB', 'tAM', 'tMB']
    },
    {
      phase: 'pyth', just: 'Pythagorean theorem',
      title: 'PM² − AM² = OP² − R²',
      formula: 'OMP and OMA are right-angled at M. By Pythagoras, PM² = OP² − OM² and AM² = OA² − OM². Subtracting, the OM² cancels: PM² − AM² = OP² − OA² = <strong>OP² − R²</strong>, where R = OA is the radius.',
      show: ['OA', 'OP', 'triA', 'triP'],
      hl: ['triA', 'triP', 'rM']
    },
    {
      phase: 'tangent', just: 'Tangent ⟂ radius + Pythagoras',
      title: 'PT² = OP² − R²',
      formula: 'The tangent at T is perpendicular to the radius OT, so OTP is right-angled at T, and by Pythagoras PT² = OP² − OT² = <strong>OP² − R²</strong>: the same number.',
      show: ['OT', 'rT', 'triT'],
      hl: ['triT', 'rT', 'PT']
    },
    {
      phase: 'conclude', just: 'Conclusion',
      title: 'PT² = PA · PB',
      formula: 'Both equal OP² − R², which depends only on P and the circle (the power of P). So PT² = PA · PB, and every secant from P gives the same product. <strong>∎</strong>',
      show: [],
      hl: ['PT', 'PB']
    }
  ],

  readout: (P) => {
    const pt = dist(P.P, P.T) / UNIT;
    const pa = dist(P.P, P.A) / UNIT;
    const pb = dist(P.P, P.B) / UNIT;
    return `PT² = ${fmt(pt * pt, 2)},  PA · PB = ${fmt(pa * pb, 2)}`;
  },

  // P outside the circle, A on the near arc (nearer P than B), a real chord, all in the frame
  isValid: (P) =>
    dist(P.O, P.P) > 150 && dist(P.A, P.B) > 50 && dist(P.P, P.A) < dist(P.P, P.B) - 10 &&
    dist(P.P, P.M) > 5 &&
    [P.O, P.P, P.T, P.A, P.B].every((p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398)
};

export default secantTangent;
