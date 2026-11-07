// ===========================================================
// proofs/rhombusDiagonals.js — the diagonals of a rhombus are
// perpendicular. A rhombus is a parallelogram, so M, where the
// diagonals meet, is the midpoint of BD. Triangles ABM and ADM
// then have three pairs of equal sides (SSS), so the angles at
// M are equal; they are a linear pair, so each is 90°.
// Phases: given, para, sss, angles, linear, conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const rhombusDiagonals = {
  label: 'Rhombus: diagonals',
  info:
    'All four sides of a rhombus are equal, so it is a parallelogram and its diagonals bisect ' +
    'each other: BM = MD. Triangles ABM and ADM have AB = AD, BM = MD and the common side AM, ' +
    'so they are congruent (SSS) and the angles at M are equal. The two angles make a straight ' +
    'angle along BD, so each is 90°. Drag D round A to open or close the rhombus.',
  hint: 'Drag D round A to open or close the rhombus, A or B to move it',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the rhombus and its labels.
  viewBox: [70, 125, 440, 250],

  model: {
    points: { A: { x: 110, y: 250 }, B: { x: 290, y: 340 } },
    params: { td: -0.4636 },
    composites: [],
    objects: [
      // D on the circle about A through B: AD = AB
      { id: 'D', type: 'onCircle', center: 'A', through: 'B', param: 'td', drag: true },
      // C = D + (B − A): the fourth vertex; with AD = AB all four sides are equal
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'M', type: 'intersection', of: ['A', 'C', 'B', 'D'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'tCD', type: 'ticks', of: ['C', 'D'], n: 1 },
      { id: 'tDA', type: 'ticks', of: ['D', 'A'], n: 1 },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'tBM', type: 'ticks', of: ['B', 'M'], n: 2 },
      { id: 'tMD', type: 'ticks', of: ['M', 'D'], n: 2 },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'M'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['A', 'D', 'M'], color: 'beta' },
      { id: 'angB', type: 'angle', at: 'M', from: 'B', to: 'A', color: 'alpha', label: 'φ' },
      { id: 'angD', type: 'angle', at: 'M', from: 'A', to: 'D', color: 'beta', label: 'φ' },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'A', to: 'B' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A rhombus and its diagonals',
      formula: 'ABCD is a rhombus: all four sides are equal (one tick each). Its diagonals AC and BD meet at M. To prove: <strong>AC ⟂ BD</strong>, the diagonals are perpendicular.',
      show: ['A', 'B', 'C', 'D', 'M', 'Q', 'AB', 'BC', 'CD', 'DA', 'tAB', 'tBC', 'tCD', 'tDA', 'AC', 'BD'],
      hl: ['AC', 'BD']
    },
    {
      phase: 'para', just: 'Parallelogram diagonals',
      title: 'BM = MD',
      formula: 'A rhombus has equal opposite sides, so it is a parallelogram, and the diagonals of a parallelogram bisect each other. So M is the midpoint of BD: BM = MD (two ticks each).',
      show: ['tBM', 'tMD'],
      hl: ['BD', 'tBM', 'tMD']
    },
    {
      phase: 'sss', just: 'SSS congruence',
      title: 'Triangles ABM and ADM are congruent',
      formula: 'AB = AD, sides of the rhombus; BM = MD, just shown; and AM is a side of both. Three pairs of equal sides: the triangles are congruent, with A ↔ A, B ↔ D, M ↔ M.',
      show: ['tri1', 'tri2'],
      hl: ['tri1', 'tri2']
    },
    {
      phase: 'angles', just: 'Corresponding parts',
      title: '∠AMB = ∠AMD = <i>φ</i>',
      formula: 'Corresponding angles of congruent triangles are equal. The angle at M in triangle ABM corresponds to the angle at M in triangle ADM, so the two angles at M on either side of AM are equal.',
      show: ['angB', 'angD'],
      hl: ['angB', 'angD']
    },
    {
      phase: 'linear', just: 'Linear pair',
      title: '<i>φ</i> + <i>φ</i> = 180°',
      formula: 'B, M and D lie on one line, the diagonal BD. The two angles ∠AMB and ∠AMD together fill the straight angle at M along that line, so they add up to 180°.',
      show: [],
      hl: ['BD', 'angB', 'angD']
    },
    {
      phase: 'conclude', just: 'Conclusion',
      title: 'AC ⟂ BD',
      formula: '2<i>φ</i> = 180°, so <i>φ</i> = 90°: the diagonals meet at right angles. The same congruence shows that AM bisects the angle at A, so each diagonal of a rhombus also bisects the angles at its ends. <strong>∎</strong>',
      show: ['rM'],
      hl: ['AC', 'BD', 'rM']
    }
  ],

  readout: (P) => {
    const b = angleDeg(P.M, P.A, P.B);
    const d = angleDeg(P.M, P.A, P.D);
    return `∠AMB = ${fmt(b)}°, ∠AMD = ${fmt(d)}°`;
  },

  // a real rhombus inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.D) > 6000 &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 85 && p.x < 495 && p.y > 138 && p.y < 362)
};

export default rhombusDiagonals;
