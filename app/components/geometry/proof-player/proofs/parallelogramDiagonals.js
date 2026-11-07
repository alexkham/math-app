// ===========================================================
// proofs/parallelogramDiagonals.js — the diagonals of a
// parallelogram bisect each other. The diagonals meet at M;
// triangles ABM and CDM have AB = CD (opposite sides) between
// two pairs of alternate angles, so they are congruent (ASA)
// and AM = MC, BM = MD.
// Phases: given, sides, alt1, alt2, asa, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const parallelogramDiagonals = {
  label: 'Parallelogram: diagonals',
  info:
    'The diagonals AC and BD meet at M. Opposite sides are equal, AB = CD, and each diagonal ' +
    'is a transversal of the parallels AB, DC, so ∠BAC = ∠DCA and ∠ABD = ∠CDB. Triangles ABM ' +
    'and CDM then have the equal sides AB, CD between two equal angles: congruent (ASA), so ' +
    'AM = MC and BM = MD. Drag A, B or D; C and M follow.',
  hint: 'Drag A, B or D; C and M follow',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the parallelogram and its labels.
  viewBox: [70, 95, 440, 260],

  model: {
    points: { A: { x: 120, y: 320 }, B: { x: 360, y: 320 }, D: { x: 180, y: 130 } },
    params: {},
    composites: [],
    objects: [
      // C = D + (B − A): the fourth vertex, so that AB ∥ DC and AD ∥ BC
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'M', type: 'intersection', of: ['A', 'C', 'B', 'D'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'pAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'pDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'pAD', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'pBC', type: 'parallel', of: ['B', 'C'], n: 2 },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'M'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['C', 'D', 'M'], color: 'beta' },
      // alternate angles on the transversals AC and BD of the parallels AB, DC
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'aC', type: 'angle', at: 'C', from: 'D', to: 'A', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'D', to: 'A', color: 'beta', label: 'β' },
      { id: 'bD', type: 'angle', at: 'D', from: 'B', to: 'C', color: 'beta', label: 'β' },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 1 },
      { id: 'tMC', type: 'ticks', of: ['M', 'C'], n: 1 },
      { id: 'tBM', type: 'ticks', of: ['B', 'M'], n: 2 },
      { id: 'tMD', type: 'ticks', of: ['M', 'D'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A parallelogram and its diagonals',
      formula: 'ABCD is a parallelogram: AB ∥ DC and AD ∥ BC. Its diagonals AC and BD meet at M. To prove: <strong>AM = MC and BM = MD</strong>, the diagonals bisect each other.',
      show: ['A', 'B', 'C', 'D', 'M', 'Q', 'AB', 'BC', 'CD', 'DA', 'pAB', 'pDC', 'pAD', 'pBC', 'AC', 'BD'],
      hl: ['AC', 'BD']
    },
    {
      phase: 'sides', just: 'Opposite sides',
      title: 'AB = CD',
      formula: 'Opposite sides of a parallelogram are equal, so AB = CD. These two sides belong to the triangles ABM and CDM, the two triangles that the diagonals cut off at the top and bottom.',
      show: ['tri1', 'tri2'],
      hl: ['AB', 'CD']
    },
    {
      phase: 'alt1', just: 'Alternate angles',
      title: '∠BAC = ∠DCA = <i>α</i>',
      formula: 'AB ∥ DC and the diagonal AC crosses both. ∠BAC at A and ∠DCA at C are alternate angles, so they are equal.',
      show: ['aA', 'aC'],
      hl: ['aA', 'aC', 'AC']
    },
    {
      phase: 'alt2', just: 'Alternate angles',
      title: '∠ABD = ∠CDB = <i>β</i>',
      formula: 'AB ∥ DC and the diagonal BD crosses both. ∠ABD at B and ∠CDB at D are alternate angles too, so they are equal.',
      show: ['bB', 'bD'],
      hl: ['bB', 'bD', 'BD']
    },
    {
      phase: 'asa', just: 'ASA congruence',
      title: 'Triangles ABM and CDM are congruent',
      formula: 'In triangle ABM the side AB lies between <i>α</i> at A and <i>β</i> at B; in triangle CDM the equal side CD lies between <i>α</i> at C and <i>β</i> at D. Two angles and the included side: the triangles are congruent, with A ↔ C, B ↔ D, M ↔ M.',
      show: [],
      hl: ['tri1', 'tri2', 'AB', 'CD']
    },
    {
      phase: 'conclude', just: 'Corresponding parts',
      title: 'AM = MC, BM = MD',
      formula: 'Corresponding sides of congruent triangles are equal: AM ↔ CM and BM ↔ DM. So M is the midpoint of AC and the midpoint of BD: each diagonal cuts the other in half. <strong>∎</strong>',
      show: ['tAM', 'tMC', 'tBM', 'tMD'],
      hl: ['AC', 'BD', 'tAM', 'tMC', 'tBM', 'tMD']
    }
  ],

  readout: (P) => {
    const am = dist(P.A, P.M) / UNIT;
    const mc = dist(P.M, P.C) / UNIT;
    const bm = dist(P.B, P.M) / UNIT;
    const md = dist(P.M, P.D) / UNIT;
    return `AM = ${fmt(am, 2)}, MC = ${fmt(mc, 2)};  BM = ${fmt(bm, 2)}, MD = ${fmt(md, 2)}`;
  },

  // a real parallelogram inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.D) > 6000 &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 85 && p.x < 495 && p.y > 108 && p.y < 342)
};

export default parallelogramDiagonals;
