// ===========================================================
// proofs/angleSum.js — Euclid I.32
// Phases: given, construct, alternate (×2), conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const angleSum = {
  label: 'Triangle angle sum',
  info:
    'Through one vertex draw the line parallel to the opposite side. The two ' +
    'alternate-angle pairs carry the other two angles up to that vertex, where ' +
    'all three fill a straight angle. Drag any vertex: the sum stays 180° for every triangle.',
  hint: 'Drag A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Tight frame around the figure (D..E span x 70..470, labels to y≈95 / 375),
  // so the scene is not surrounded by empty canvas.
  viewBox: [20, 50, 520, 350],

  model: {
    points: { A: { x: 100, y: 350 }, B: { x: 460, y: 350 }, C: { x: 270, y: 120 } },
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
      { id: 'D', type: 'pointAlong', from: 'C', dir: ['B', 'A'], len: 200 },
      { id: 'E', type: 'pointAlong', from: 'C', dir: ['A', 'B'], len: 200 },
      { id: 'L', type: 'line', of: ['D', 'E'] },
      { id: 'altA', type: 'angle', at: 'C', from: 'D', to: 'A', color: 'alpha', label: 'α' },
      { id: 'altB', type: 'angle', at: 'C', from: 'B', to: 'E', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Triangle ABC',
      formula: 'Any triangle with interior angles <i>α</i>, <i>β</i>, <i>γ</i>. To prove: <strong><i>α</i> + <i>β</i> + <i>γ</i> = 180°</strong>.',
      show: ['T.fill', 'T.AB', 'T.BC', 'T.CA', 'T.angleA', 'T.angleB', 'T.angleC', 'A', 'B', 'C'],
      hl: []
    },
    {
      phase: 'construct', just: 'Parallel postulate',
      title: 'Draw DE ∥ AB through C',
      formula: 'Through vertex C there is exactly one line parallel to the opposite side AB.',
      show: ['L', 'D', 'E'],
      hl: ['L']
    },
    {
      phase: 'alternate', just: 'Alternate angles',
      title: '∠ACD = ∠CAB = <i>α</i>',
      formula: 'AC is a transversal of the parallel lines DE and AB, so the alternate angles at A and C are equal.',
      show: ['altA'],
      hl: ['T.CA', 'T.angleA', 'altA']
    },
    {
      phase: 'alternate', just: 'Alternate angles',
      title: '∠BCE = ∠CBA = <i>β</i>',
      formula: 'BC is a second transversal of the same pair of lines, giving the second pair of equal angles.',
      show: ['altB'],
      hl: ['T.BC', 'T.angleB', 'altB']
    },
    {
      phase: 'conclude', just: 'Straight angle',
      title: '<i>α</i> + <i>γ</i> + <i>β</i> = 180°',
      formula: 'At C the three angles lie side by side along the straight line DE, so together they measure 180°. <strong>∎</strong>',
      show: [],
      hl: ['altA', 'T.angleC', 'altB', 'L']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.B, P.C);
    const b = angleDeg(P.B, P.C, P.A);
    const g = angleDeg(P.C, P.A, P.B);
    return `α ${fmt(a)}° + β ${fmt(b)}° + γ ${fmt(g)}° = ${fmt(a + b + g)}°`;
  },

  isValid: (P) => area2(P.A, P.B, P.C) > 3000
};

export default angleSum;
