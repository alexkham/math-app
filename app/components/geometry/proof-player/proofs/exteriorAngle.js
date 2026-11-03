// ===========================================================
// proofs/exteriorAngle.js — Euclid I.32, first part
// Phases: given, construct, linear, sum, conclude
// The exterior angle at B equals the sum of the two remote
// interior angles: δ = α + γ.
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const exteriorAngle = {
  label: 'Exterior angle theorem',
  info:
    'Extend one side of the triangle past a vertex. The angle between the extension ' +
    'and the other side is an exterior angle. It and the interior angle at that vertex ' +
    'fill a straight line, and the three interior angles add up to 180°, so the exterior ' +
    'angle equals the sum of the two far interior angles. Drag any vertex: δ = α + γ holds every time.',
  hint: 'Drag A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Tight frame: A..D span x 70..510, labels to y≈80 / 355.
  viewBox: [30, 60, 520, 310],

  model: {
    points: { A: { x: 70, y: 330 }, B: { x: 340, y: 330 }, C: { x: 230, y: 110 } },
    params: {},
    composites: [
      {
        type: 'triangle', id: 'T', of: ['A', 'B', 'C'],
        angles: {
          A: { color: 'alpha', label: 'α' },
          B: { color: 'beta', label: 'β' },
          C: { color: 'gamma', label: 'γ' }
        }
      }
    ],
    objects: [
      { id: 'D', type: 'pointAlong', from: 'B', dir: ['A', 'B'], len: 170 },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'ext', type: 'angle', at: 'B', from: 'D', to: 'C', color: 'delta', label: 'δ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Triangle ABC',
      formula: 'Any triangle with interior angles <i>α</i>, <i>β</i>, <i>γ</i>. To prove: the exterior angle at B equals <strong><i>α</i> + <i>γ</i></strong>.',
      show: ['T.fill', 'T.AB', 'T.BC', 'T.CA', 'T.angleA', 'T.angleB', 'T.angleC', 'A', 'B', 'C'],
      hl: []
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Extend AB past B to D',
      formula: 'The side AB is produced beyond B. The angle <i>δ</i> = ∠CBD between the extension BD and the side BC is the exterior angle at B.',
      show: ['BD', 'D', 'ext'],
      hl: ['BD', 'ext']
    },
    {
      phase: 'linear', just: 'Straight angle',
      title: '<i>β</i> + <i>δ</i> = 180°',
      formula: 'A, B and D lie on one straight line, so the interior angle <i>β</i> and the exterior angle <i>δ</i> together fill the straight angle ABD.',
      show: [],
      hl: ['T.angleB', 'ext', 'T.AB', 'BD']
    },
    {
      phase: 'sum', just: 'Triangle angle sum',
      title: '<i>α</i> + <i>β</i> + <i>γ</i> = 180°',
      formula: 'The three interior angles of every triangle add up to 180°, the theorem proved before this one.',
      show: [],
      hl: ['T.angleA', 'T.angleB', 'T.angleC']
    },
    {
      phase: 'conclude', just: 'Equal sums',
      title: '<i>δ</i> = <i>α</i> + <i>γ</i>',
      formula: 'Both sums equal 180°, so <i>β</i> + <i>δ</i> = <i>α</i> + <i>β</i> + <i>γ</i>. Take <i>β</i> away from both sides. <strong>∎</strong>',
      show: [],
      hl: ['ext', 'T.angleA', 'T.angleC']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.B, P.C);
    const g = angleDeg(P.C, P.A, P.B);
    const d = angleDeg(P.B, P.C, P.D);
    return `δ ${fmt(d)}° = α ${fmt(a)}° + γ ${fmt(g)}° = ${fmt(a + g)}°`;
  },

  isValid: (P) => area2(P.A, P.B, P.C) > 3000
};

export default exteriorAngle;
