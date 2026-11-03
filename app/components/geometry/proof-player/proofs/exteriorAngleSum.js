// ===========================================================
// proofs/exteriorAngleSum.js
// The three exterior angles of a triangle, one at each vertex
// taken the same way round, add up to 360°.
// Phases: given, construct, linear, sum, conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const exteriorAngleSum = {
  label: 'Sum of exterior angles',
  info:
    'Extend each side past the next vertex, the same way round. At every vertex the interior ' +
    'and exterior angle fill a straight line, so the six angles add up to 3 × 180°. Take away the ' +
    'interior angles, which add up to 180°, and the three exterior angles are left with 360°. ' +
    'Drag any vertex: the sum stays 360° for every triangle.',
  hint: 'Drag A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for A..F with the extensions (len 80) and their labels.
  viewBox: [30, 20, 490, 380],

  model: {
    points: { A: { x: 120, y: 300 }, B: { x: 400, y: 300 }, C: { x: 280, y: 120 } },
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
      // one extension per side, each past the next vertex going A → B → C
      { id: 'D', type: 'pointAlong', from: 'B', dir: ['A', 'B'], len: 80 },
      { id: 'E', type: 'pointAlong', from: 'C', dir: ['B', 'C'], len: 80 },
      { id: 'F', type: 'pointAlong', from: 'A', dir: ['C', 'A'], len: 80 },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'CE', type: 'segment', of: ['C', 'E'] },
      { id: 'AF', type: 'segment', of: ['A', 'F'] },
      { id: 'extB', type: 'angle', at: 'B', from: 'D', to: 'C', color: 'delta', label: 'β′' },
      { id: 'extC', type: 'angle', at: 'C', from: 'E', to: 'A', color: 'delta', label: 'γ′' },
      { id: 'extA', type: 'angle', at: 'A', from: 'F', to: 'B', color: 'delta', label: 'α′' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Triangle ABC',
      formula: 'Any triangle with interior angles <i>α</i>, <i>β</i>, <i>γ</i>. To prove: its three exterior angles add up to <strong>360°</strong>.',
      show: ['T.fill', 'T.AB', 'T.BC', 'T.CA', 'T.angleA', 'T.angleB', 'T.angleC', 'A', 'B', 'C'],
      hl: []
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Extend each side, the same way round',
      formula: 'AB past B to D, BC past C to E, CA past A to F. The exterior angles are <i>β′</i> = ∠CBD, <i>γ′</i> = ∠ACE and <i>α′</i> = ∠BAF, one at each vertex.',
      show: ['BD', 'CE', 'AF', 'D', 'E', 'F', 'extA', 'extB', 'extC'],
      hl: ['BD', 'CE', 'AF', 'extA', 'extB', 'extC']
    },
    {
      phase: 'linear', just: 'Straight angle',
      title: 'Three linear pairs: 3 × 180°',
      formula: 'At each vertex the interior and the exterior angle fill a straight line: <i>α</i> + <i>α′</i> = <i>β</i> + <i>β′</i> = <i>γ</i> + <i>γ′</i> = 180°. All six together: 540°.',
      show: [],
      hl: ['T.angleA', 'T.angleB', 'T.angleC', 'extA', 'extB', 'extC']
    },
    {
      phase: 'sum', just: 'Triangle angle sum',
      title: '<i>α</i> + <i>β</i> + <i>γ</i> = 180°',
      formula: 'The three interior angles of every triangle add up to 180°, the theorem proved before.',
      show: [],
      hl: ['T.angleA', 'T.angleB', 'T.angleC']
    },
    {
      phase: 'conclude', just: 'Subtraction',
      title: '<i>α′</i> + <i>β′</i> + <i>γ′</i> = 360°',
      formula: 'Take the 180° of the interior angles away from the 540° of all six: the exterior angles are left with 360°. <strong>∎</strong>',
      show: [],
      hl: ['extA', 'extB', 'extC']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.B, P.C);
    const b = angleDeg(P.B, P.C, P.A);
    const g = angleDeg(P.C, P.A, P.B);
    const ea = 180 - a;
    const eb = 180 - b;
    const eg = 180 - g;
    return `α′ ${fmt(ea)}° + β′ ${fmt(eb)}° + γ′ ${fmt(eg)}° = ${fmt(ea + eb + eg)}°`;
  },

  isValid: (P) => area2(P.A, P.B, P.C) > 3000
};

export default exteriorAngleSum;
