// ===========================================================
// proofs/thales.js — Thales' theorem (Euclid III.31, first part)
// The angle in a semicircle is a right angle: AB a diameter,
// C any other point of the circle, then ∠ACB = 90°.
// Two isosceles triangles on the radii, then the angle sum.
// Phases: given, construct, isoA, isoB, sum, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const thales = {
  label: 'Thales’ theorem',
  info:
    'Join the centre O to C. The radii OA, OB, OC are equal, so triangles OAC and OBC are ' +
    'isosceles: the angle at C is α + β, the same two angles that sit at A and at B. The angle ' +
    'sum of triangle ABC then gives 2(α + β) = 180°, so the angle at C is 90°. Slide C round ' +
    'the circle, or drag A or O: the angle in the semicircle is always a right angle.',
  hint: 'Drag C round the circle, A for the radius, O for the centre',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the circle (radius 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 130, y: 230 } },
    params: { th: -1.15 },
    composites: [
      {
        type: 'triangle', id: 'T', of: ['A', 'B', 'C'],
        angles: {
          A: { color: 'alpha', label: 'α' },
          B: { color: 'beta', label: 'β' }
        }
      }
    ],
    objects: [
      // B: the other end of the diameter through A
      { id: 'B', type: 'pointAlongDist', from: 'O', dir: ['A', 'O'], lenOf: ['O', 'A'] },
      { id: 'K', type: 'circle', of: ['O', 'A'] },
      { id: 'C', type: 'onCircle', center: 'O', through: 'A', param: 'th', drag: true },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 1 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 1 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 1 },
      { id: 'angOCA', type: 'angle', at: 'C', from: 'A', to: 'O', color: 'alpha', label: 'α' },
      { id: 'angOCB', type: 'angle', at: 'C', from: 'O', to: 'B', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Diameter AB, point C on the circle',
      formula: 'O is the centre of the circle, AB a diameter, and C any other point of the circle. To prove: <strong>∠ACB = 90°</strong>.',
      show: ['K', 'O', 'A', 'B', 'C', 'T.fill', 'T.AB', 'T.BC', 'T.CA'],
      hl: ['T.CA', 'T.BC']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Join O to C: three equal radii',
      formula: 'OA, OB and OC are radii of the same circle, so all three are equal (one tick each). The segment OC splits the triangle ABC in two.',
      show: ['OC', 'tOA', 'tOB', 'tOC'],
      hl: ['OC', 'tOA', 'tOB', 'tOC']
    },
    {
      phase: 'isoA', just: 'Isosceles base angles',
      title: '∠OAC = ∠OCA = <i>α</i>',
      formula: 'OA = OC, so triangle OAC is isosceles with apex O, and its base angles at A and at C are equal.',
      show: ['T.angleA', 'angOCA'],
      hl: ['T.angleA', 'angOCA', 'tOA', 'tOC']
    },
    {
      phase: 'isoB', just: 'Isosceles base angles',
      title: '∠OBC = ∠OCB = <i>β</i>',
      formula: 'OB = OC, so triangle OBC is isosceles too, and its base angles at B and at C are equal.',
      show: ['T.angleB', 'angOCB'],
      hl: ['T.angleB', 'angOCB', 'tOB', 'tOC']
    },
    {
      phase: 'sum', just: 'Triangle angle sum',
      title: '<i>α</i> + (<i>α</i> + <i>β</i>) + <i>β</i> = 180°',
      formula: 'In triangle ABC the angle at A is <i>α</i>, the angle at B is <i>β</i>, and the angle at C is <i>α</i> + <i>β</i>, its two parts side by side. The three add up to 180°.',
      show: [],
      hl: ['T.angleA', 'T.angleB', 'angOCA', 'angOCB']
    },
    {
      phase: 'conclude', just: 'Halving',
      title: '∠ACB = <i>α</i> + <i>β</i> = 90°',
      formula: '2(<i>α</i> + <i>β</i>) = 180°, so <i>α</i> + <i>β</i> = 90°: the angle at C is a right angle. <strong>∎</strong>',
      show: [],
      hl: ['angOCA', 'angOCB', 'T.CA', 'T.BC']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.B, P.C);
    const b = angleDeg(P.B, P.A, P.C);
    const c = angleDeg(P.C, P.A, P.B);
    return `α ${fmt(a)}° + β ${fmt(b)}° = ∠ACB ${fmt(c)}°`;
  },

  // C away from A and B, and a circle that is not collapsed
  isValid: (P) => area2(P.A, P.B, P.C) > 3000 && dist(P.O, P.A) > 60
};

export default thales;
