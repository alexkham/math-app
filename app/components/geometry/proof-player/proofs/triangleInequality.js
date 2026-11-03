// ===========================================================
// proofs/triangleInequality.js — Euclid I.20
// Any two sides of a triangle are together longer than the third:
// BA + AC > BC. Euclid's route: cut off AD = AC on BA produced,
// use the isosceles base angles, compare angles in triangle BCD,
// and the longer side lies opposite the larger angle (I.19).
// Phases: given, construct, isosceles, compare, side, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const triangleInequality = {
  label: 'Triangle inequality',
  info:
    'Extend BA past A and cut off AD equal to AC. Triangle ACD is isosceles, so its base ' +
    'angles at D and C are equal; the angle BCD is larger than the angle at D, so in triangle ' +
    'BCD the side BD opposite it is longer than BC. But BD = BA + AC. Drag any vertex: the ' +
    'two sides always beat the third.',
  hint: 'Drag A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for B (top right), A, C and the cut-off point D (far left).
  viewBox: [20, 70, 460, 300],

  model: {
    points: { A: { x: 230, y: 200 }, B: { x: 430, y: 120 }, C: { x: 360, y: 330 } },
    params: {},
    composites: [
      { type: 'triangle', id: 'T', of: ['A', 'B', 'C'] }
    ],
    objects: [
      // D on BA produced beyond A, with AD = AC
      { id: 'D', type: 'pointAlongDist', from: 'A', dir: ['B', 'A'], lenOf: ['A', 'C'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'tAC', type: 'ticks', of: ['A', 'C'], n: 1 },
      { id: 'angD', type: 'angle', at: 'D', from: 'A', to: 'C', color: 'alpha', label: 'δ' },
      { id: 'angACD', type: 'angle', at: 'C', from: 'D', to: 'A', color: 'alpha', label: 'δ' },
      { id: 'angBCD', type: 'angle', at: 'C', from: 'D', to: 'B', color: 'beta', label: 'ε' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Triangle ABC',
      formula: 'Any triangle. To prove: <strong>BA + AC &gt; BC</strong>, two sides together are longer than the third.',
      show: ['T.fill', 'T.AB', 'T.BC', 'T.CA', 'A', 'B', 'C'],
      hl: []
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Extend BA past A to D, with AD = AC',
      formula: 'The side BA is produced beyond A, and D is cut off so that AD equals AC (one tick on each). Join C to D.',
      show: ['D', 'AD', 'CD', 'tAD', 'tAC'],
      hl: ['AD', 'CD', 'tAD', 'tAC']
    },
    {
      phase: 'isosceles', just: 'Isosceles base angles',
      title: '∠ADC = ∠ACD = <i>δ</i>',
      formula: 'AD = AC, so triangle ACD is isosceles with apex A, and its base angles at D and at C are equal.',
      show: ['angD', 'angACD'],
      hl: ['angD', 'angACD', 'tAD', 'tAC']
    },
    {
      phase: 'compare', just: 'Whole greater than part',
      title: '∠BCD &gt; ∠ACD, so ∠BCD &gt; ∠BDC',
      formula: 'The angle BCD = <i>ε</i> contains the angle ACD = <i>δ</i> as a part, so it is larger; and ∠BDC is the same angle <i>δ</i> (B, A, D are on one line).',
      show: ['angBCD'],
      hl: ['angBCD', 'angD']
    },
    {
      phase: 'side', just: 'Larger angle, longer side',
      title: 'BD &gt; BC',
      formula: 'In triangle BCD the larger angle <i>ε</i> at C lies opposite BD and the smaller angle <i>δ</i> at D lies opposite BC. The longer side is opposite the larger angle (Euclid I.19).',
      show: [],
      hl: ['T.AB', 'AD', 'T.BC', 'angBCD', 'angD']
    },
    {
      phase: 'conclude', just: 'Equal lengths',
      title: 'BA + AC &gt; BC',
      formula: 'BD is BA and AD end to end, and AD = AC, so BD = BA + AC. Therefore BA + AC = BD &gt; BC. <strong>∎</strong>',
      show: [],
      hl: ['T.AB', 'AD', 'tAD', 'tAC', 'T.BC']
    }
  ],

  readout: (P) => {
    const ba = dist(P.B, P.A);
    const ac = dist(P.A, P.C);
    const bc = dist(P.B, P.C);
    return `BA ${fmt(ba, 0)} + AC ${fmt(ac, 0)} = ${fmt(ba + ac, 0)} > BC ${fmt(bc, 0)}`;
  },

  isValid: (P) => area2(P.A, P.B, P.C) > 3000
};

export default triangleInequality;
