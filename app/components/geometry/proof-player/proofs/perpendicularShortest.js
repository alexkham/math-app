// ===========================================================
// proofs/perpendicularShortest.js
// The perpendicular is the shortest segment from a point to a
// line: PF ⟂ ℓ at F, Q any other point of ℓ, then PF < PQ.
// In the right triangle PFQ the right angle is the largest angle,
// so the side opposite it, PQ, is the longest.
// Phases: given, triangle, acute, largest, side, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const perpendicularShortest = {
  label: 'Perpendicular is shortest',
  info:
    'Drop the perpendicular from P to the line, meeting it at F, and take any other point Q ' +
    'of the line. Triangle PFQ has a right angle at F, so its other two angles are acute; the ' +
    'right angle is the largest angle, and the side opposite it, PQ, is the longest. ' +
    'Drag P, Q, or the line: PF is always shorter than PQ.',
  hint: 'Drag P, Q (along the line), A or B',
  labelCenter: ['P', 'F', 'Q'],
  // Frame for the line A..B, the point P above it and the labels.
  viewBox: [30, 80, 480, 290],

  model: {
    points: { A: { x: 60, y: 330 }, B: { x: 500, y: 330 }, P: { x: 240, y: 120 } },
    params: { t: 0.76 },
    composites: [
      {
        type: 'triangle', id: 'T', of: ['P', 'F', 'Q'], fill: true,
        angles: {
          P: { color: 'alpha', label: 'φ' },
          Q: { color: 'beta', label: 'θ' }
        }
      }
    ],
    objects: [
      { id: 'L', type: 'line', of: ['A', 'B'] },
      { id: 'F', type: 'foot', from: 'P', to: ['A', 'B'] },
      { id: 'Q', type: 'onLine', of: ['A', 'B'], param: 't', drag: true, minParam: 0.02, maxParam: 0.98 },
      { id: 'PF', type: 'segment', of: ['P', 'F'] },
      { id: 'PQ', type: 'segment', of: ['P', 'Q'] },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'P', to: 'Q' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Point P, line ℓ, foot F, any other point Q',
      formula: 'PF is perpendicular to the line ℓ = AB at F; Q is any other point of ℓ. To prove: <strong>PF &lt; PQ</strong>, the perpendicular is the shortest segment from P to ℓ.',
      show: ['L', 'A', 'B', 'P', 'F', 'Q', 'PF', 'PQ', 'rF'],
      hl: ['PF', 'rF']
    },
    {
      phase: 'triangle', just: 'Definition',
      title: 'Triangle PFQ is right-angled at F',
      formula: 'P, F and Q form a triangle, and the angle at F is a right angle, 90°, because PF ⟂ ℓ and FQ lies along ℓ.',
      show: ['T.fill', 'T.FQ', 'T.angleP', 'T.angleQ'],
      hl: ['T.fill', 'rF']
    },
    {
      phase: 'acute', just: 'Triangle angle sum',
      title: '<i>φ</i> + <i>θ</i> = 90°',
      formula: 'The three angles add up to 180°, and the angle at F already takes 90°, so the angles at P and at Q share the other 90°: each is acute, smaller than 90°.',
      show: [],
      hl: ['T.angleP', 'T.angleQ']
    },
    {
      phase: 'largest', just: 'Compare angles',
      title: 'The right angle at F is the largest angle',
      formula: '90° &gt; <i>φ</i> and 90° &gt; <i>θ</i>: in triangle PFQ the angle at F is larger than each of the other two.',
      show: [],
      hl: ['rF']
    },
    {
      phase: 'side', just: 'Larger angle, longer side',
      title: 'PQ &gt; PF',
      formula: 'The side opposite the larger angle is the longer side. PQ lies opposite the right angle at F, PF opposite the acute angle at Q, so PQ is longer than PF.',
      show: [],
      hl: ['PQ', 'PF', 'rF', 'T.angleQ']
    },
    {
      phase: 'conclude', just: 'Any Q',
      title: 'PF &lt; PQ for every Q on ℓ',
      formula: 'Q was any point of ℓ other than F, so the perpendicular PF is shorter than every other segment from P to the line: it is the distance from P to ℓ. <strong>∎</strong>',
      show: [],
      hl: ['PF', 'rF']
    }
  ],

  readout: (P) =>
    `PF ${fmt(dist(P.P, P.F), 0)} < PQ ${fmt(dist(P.P, P.Q), 0)} · ∠F ${fmt(angleDeg(P.F, P.P, P.Q), 0)}°`,

  // P off the line, Q away from F, and the line not collapsed
  isValid: (P) => area2(P.P, P.F, P.Q) > 2500 && dist(P.A, P.B) > 120
};

export default perpendicularShortest;
