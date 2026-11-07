// ===========================================================
// proofs/parallelLines.js — Euclid I.29
// Two parallel lines cut by a transversal: corresponding angles
// are equal (the form of the parallel postulate used here),
// hence alternate angles are equal (vertical angles) and
// co-interior angles are supplementary (linear pair).
// Phases: given, corresponding, alternate, cointerior, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const parallelLines = {
  label: 'Parallel lines and a transversal',
  info:
    'A transversal crosses two parallel lines at P and Q. The parallel postulate says the ' +
    'corresponding angles at P and Q are equal. Vertical angles then make the alternate ' +
    'angles equal, and a linear pair makes the co-interior angles add up to 180°. Drag the ' +
    'ends of the transversal or the lines: the three relations hold every time.',
  hint: 'Drag E or F to tilt the transversal, A, B or C to move the lines',
  labelCenter: ['P', 'Q'],
  // Frame for the two lines, the transversal and the labels (labels of the
  // end points sit outside the segments, so the frame is wider than them).
  viewBox: [30, 30, 520, 390],

  model: {
    points: {
      A: { x: 80, y: 150 }, B: { x: 500, y: 150 },
      C: { x: 80, y: 310 },
      E: { x: 230, y: 70 }, F: { x: 360, y: 390 }
    },
    params: {},
    composites: [],
    objects: [
      // D: the second line keeps the direction of the first, so it stays parallel
      { id: 'D', type: 'pointAlongDist', from: 'C', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'P', type: 'intersection', of: ['A', 'B', 'E', 'F'] },
      { id: 'Q', type: 'intersection', of: ['C', 'D', 'E', 'F'] },
      { id: 'L1', type: 'segment', of: ['A', 'B'] },
      { id: 'L2', type: 'segment', of: ['C', 'D'] },
      { id: 'T', type: 'segment', of: ['E', 'F'] },
      { id: 'par1', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'par2', type: 'parallel', of: ['C', 'D'], n: 1 },
      // α at P (upper right) and its corresponding angle α′ at Q
      { id: 'angP', type: 'angle', at: 'P', from: 'B', to: 'E', color: 'alpha', label: 'α' },
      { id: 'angQ', type: 'angle', at: 'Q', from: 'D', to: 'P', color: 'alpha', label: 'α′' },
      // the vertical angle of α at P (lower left): the alternate angle to α′
      { id: 'angPv', type: 'angle', at: 'P', from: 'A', to: 'Q', color: 'alpha', label: 'α' },
      // the co-interior angle at P (lower right)
      { id: 'angPc', type: 'angle', at: 'P', from: 'Q', to: 'B', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two parallel lines and a transversal',
      formula: 'The lines AB and CD are parallel (arrow marks); the transversal EF crosses them at P and at Q. To prove: the pairs of angles at P and Q are related: <strong>corresponding equal, alternate equal, co-interior supplementary</strong>.',
      show: ['L1', 'L2', 'T', 'par1', 'par2', 'A', 'B', 'C', 'D', 'E', 'F', 'P', 'Q'],
      hl: ['L1', 'L2']
    },
    {
      phase: 'corresponding', just: 'Parallel postulate',
      title: 'Corresponding angles: <i>α</i> = <i>α′</i>',
      formula: 'The angles in the same position at the two crossings, upper right at P and upper right at Q, are corresponding angles. Because the lines are parallel they are equal; this is the parallel postulate in the form used here.',
      show: ['angP', 'angQ'],
      hl: ['angP', 'angQ']
    },
    {
      phase: 'alternate', just: 'Vertical angles',
      title: 'Alternate angles: ∠APQ = <i>α′</i>',
      formula: 'The angle at P below the line on the left, ∠APQ, is the vertical angle of <i>α</i>, so it equals <i>α</i> = <i>α′</i>. It and <i>α′</i> lie between the parallels on opposite sides of the transversal: alternate angles, and they are equal.',
      show: ['angPv'],
      hl: ['angPv', 'angQ']
    },
    {
      phase: 'cointerior', just: 'Straight angle',
      title: 'Co-interior angles: <i>β</i> + <i>α′</i> = 180°',
      formula: 'The angle <i>β</i> = ∠QPB and the angle ∠APQ fill the straight line AB at P, so <i>β</i> + ∠APQ = 180°; and ∠APQ = <i>α′</i>. The two angles between the parallels on the same side of the transversal add up to 180°.',
      show: ['angPc'],
      hl: ['angPc', 'angQ', 'L1']
    },
    {
      phase: 'conclude', just: 'Summary',
      title: 'Three relations from one postulate',
      formula: 'Corresponding angles equal (<i>α</i> = <i>α′</i>), alternate angles equal (∠APQ = <i>α′</i>), co-interior angles supplementary (<i>β</i> + <i>α′</i> = 180°). Each holds at every crossing of the transversal with the two parallels. <strong>∎</strong>',
      show: [],
      hl: ['angP', 'angPv', 'angPc', 'angQ']
    }
  ],

  readout: (P) => {
    if (!P.P || !P.Q) return 'the transversal must cross both lines';
    const a = angleDeg(P.P, P.B, P.E);
    const a2 = angleDeg(P.Q, P.D, P.P);
    const b = angleDeg(P.P, P.Q, P.B);
    return `α ${fmt(a)}° = α′ ${fmt(a2)}° · β ${fmt(b)}° + α′ = ${fmt(b + a2)}°`;
  },

  // the transversal must cross both lines inside the drawn segments, and not too flat
  isValid: (P) => {
    if (!P.P || !P.Q) return false;
    const inside = (X, S, T) => Math.min(S.x, T.x) + 40 < X.x && X.x < Math.max(S.x, T.x) - 40;
    return inside(P.P, P.A, P.B) && inside(P.Q, P.C, P.D) && dist(P.P, P.Q) > 60 && dist(P.A, P.B) > 200;
  }
};

export default parallelLines;
