// ===========================================================
// proofs/verticalAngles.js — Euclid I.15
// Two lines crossing at O make two pairs of vertical (opposite)
// angles, and the angles of each pair are equal. Each vertical
// angle makes a linear pair with the same neighbour.
// Phases: given, pair1, pair2, conclude, other
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const verticalAngles = {
  label: 'Vertical angles',
  info:
    'Two lines cross at O. The angle AOC and its neighbour COB fill the straight line AB, ' +
    'and the same neighbour COB with the angle BOD fill the straight line CD. Both sums are ' +
    '180°, so the two angles opposite each other at O are equal. Drag A or C to turn the lines: ' +
    'the opposite angles stay equal.',
  hint: 'Drag A or C to turn a line, O to move the crossing',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the two crossing lines and their labels.
  viewBox: [50, 60, 460, 300],

  model: {
    points: { O: { x: 280, y: 210 }, A: { x: 90, y: 290 }, C: { x: 120, y: 100 } },
    params: {},
    composites: [],
    objects: [
      // B and D: the far ends of the two lines through O
      { id: 'B', type: 'pointAlong', from: 'O', dir: ['A', 'O'], len: 190 },
      { id: 'D', type: 'pointAlong', from: 'O', dir: ['C', 'O'], len: 190 },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'angAOC', type: 'angle', at: 'O', from: 'A', to: 'C', color: 'alpha', label: 'α' },
      { id: 'angBOD', type: 'angle', at: 'O', from: 'B', to: 'D', color: 'alpha', label: 'α′' },
      { id: 'angCOB', type: 'angle', at: 'O', from: 'C', to: 'B', color: 'beta', label: 'β' },
      { id: 'angDOA', type: 'angle', at: 'O', from: 'D', to: 'A', color: 'beta', label: 'β′' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two lines crossing at O',
      formula: 'The lines AB and CD meet at O and make four angles there. The angles opposite each other, <i>α</i> = ∠AOC and <i>α′</i> = ∠BOD, are vertical angles. To prove: <strong><i>α</i> = <i>α′</i></strong>.',
      show: ['AB', 'CD', 'O', 'A', 'B', 'C', 'D', 'angAOC', 'angBOD'],
      hl: ['angAOC', 'angBOD']
    },
    {
      phase: 'pair1', just: 'Straight angle',
      title: '<i>α</i> + <i>β</i> = 180°',
      formula: 'A, O and B lie on one line, so the angles AOC and COB together fill the straight angle AOB: they are a linear pair.',
      show: ['angCOB'],
      hl: ['angAOC', 'angCOB', 'AB']
    },
    {
      phase: 'pair2', just: 'Straight angle',
      title: '<i>β</i> + <i>α′</i> = 180°',
      formula: 'C, O and D lie on one line, so the angles COB and BOD together fill the straight angle COD: a second linear pair, with the same angle <i>β</i> in it.',
      show: [],
      hl: ['angCOB', 'angBOD', 'CD']
    },
    {
      phase: 'conclude', just: 'Equal sums',
      title: '<i>α</i> = <i>α′</i>',
      formula: 'Both sums equal 180°, so <i>α</i> + <i>β</i> = <i>β</i> + <i>α′</i>. Take <i>β</i> away from both sides. <strong>∎</strong>',
      show: [],
      hl: ['angAOC', 'angBOD']
    },
    {
      phase: 'other', just: 'Same argument',
      title: '<i>β</i> = <i>β′</i> as well',
      formula: 'The other pair of vertical angles, COB and DOA, is handled the same way: each makes a linear pair with <i>α</i>, so they are equal too.',
      show: ['angDOA'],
      hl: ['angCOB', 'angDOA']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.O, P.A, P.C);
    const a2 = angleDeg(P.O, P.B, P.D);
    const b = angleDeg(P.O, P.C, P.B);
    const b2 = angleDeg(P.O, P.D, P.A);
    return `α ${fmt(a)}° = α′ ${fmt(a2)}° · β ${fmt(b)}° = β′ ${fmt(b2)}°`;
  },

  // the two lines must actually cross: A, O, C not on one line
  isValid: (P) => area2(P.A, P.O, P.C) > 2500
};

export default verticalAngles;
