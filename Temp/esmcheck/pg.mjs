// ===========================================================
// proofs/pentagonGoldenRatio.js — in a regular pentagon the
// diagonal d and the side s satisfy d/s = (1 + √5)/2.
// The diagonals AC and BE cross at P. Every diagonal makes 36°
// with the sides at its ends (pentagon-diagonals page), so the
// triangle APE has 72°, 36°, 72° and EP = EA = s; the triangle
// ABP has 36° at A and B, so AP = BP = BE − EP = d − s. ABP and
// ACB are similar (AA), so AP/AB = AB/AC: (d − s)/s = s/d, which
// gives d² − ds − s² = 0 and d/s = (1 + √5)/2.
// B…E are A turned about the hidden centre O by 72° each.
// Phases: given, angles, apex, isosceles, similar, solve, conclude
// ===========================================================

import { dist, fmt } from './math.mjs';

const V = ['A', 'B', 'C', 'D', 'E'];

const pentagonGoldenRatio = {
  label: 'Pentagon and the golden ratio',
  info:
    'The diagonals AC and BE cross at P. Each diagonal makes 36° with the sides at its ends, so ' +
    'the triangle APE has 72° at A and at P, and EP = EA = s. The triangle ABP has 36° at A and B, ' +
    'so AP = BP = d − s. ABP and ACB have the same angles, so AP/AB = AB/AC, that is ' +
    '(d − s)/s = s/d, and d/s = (1 + √5)/2. Drag A to turn and resize the pentagon.',
  hint: 'Drag A to turn and resize the pentagon',
  // names point away from the centre
  labelCenter: ['O'],
  // Frame for the pentagon (radius about 140 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    // O (the centre) is never shown
    points: { O: { x: 280, y: 230 }, A: { x: 280, y: 92 } },
    params: {},
    composites: [],
    objects: [
      { id: 'B', type: 'rotateDeg', about: 'O', of: 'A', deg: 72 },
      { id: 'C', type: 'rotateDeg', about: 'O', of: 'B', deg: 72 },
      { id: 'D', type: 'rotateDeg', about: 'O', of: 'C', deg: 72 },
      { id: 'E', type: 'rotateDeg', about: 'O', of: 'D', deg: 72 },
      // P: where the diagonals AC and BE cross
      { id: 'P', type: 'intersection', of: ['A', 'C', 'B', 'E'] },
      { id: 'H', type: 'polygon', of: V },
      ...V.map((v, i) => ({ id: 's' + v, type: 'segment', of: [v, V[(i + 1) % 5]] })),
      ...V.map((v, i) => ({ id: 't' + v, type: 'ticks', of: [v, V[(i + 1) % 5]], n: 1 })),
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BE', type: 'segment', of: ['B', 'E'] },
      // arc sizes chosen so that the names stay apart over the whole drag range
      { id: 'fA', type: 'angle', at: 'A', from: 'B', to: 'P', color: 'beta', label: 'φ', radius: 14 },
      { id: 'fB', type: 'angle', at: 'B', from: 'P', to: 'A', color: 'beta', label: 'φ', radius: 23 },
      { id: 'fE', type: 'angle', at: 'E', from: 'A', to: 'P', color: 'beta', label: 'φ', radius: 14 },
      { id: 'fC', type: 'angle', at: 'C', from: 'B', to: 'A', color: 'beta', label: 'φ', radius: 19 },
      { id: 'pAPE', type: 'polygon', of: ['A', 'P', 'E'], color: 'alpha' },
      { id: 'eA', type: 'angle', at: 'A', from: 'P', to: 'E', color: 'alpha', label: '2φ', radius: 63 },
      { id: 'eP', type: 'angle', at: 'P', from: 'E', to: 'A', color: 'alpha', label: '2φ', radius: 76 },
      { id: 'tEP', type: 'ticks', of: ['E', 'P'], n: 1 },
      { id: 'pABP', type: 'polygon', of: ['A', 'B', 'P'], color: 'beta' },
      { id: 'tAP', type: 'ticks', of: ['A', 'P'], n: 2 },
      { id: 'tBP', type: 'ticks', of: ['B', 'P'], n: 2 },
      { id: 'pACB', type: 'polygon', of: ['A', 'C', 'B'], color: 'gamma' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A regular pentagon and two diagonals',
      formula: 'ABCDE is a regular pentagon with side s (one tick each). Its diagonals AC and BE cross at P; every diagonal has the same length d. To prove: <strong>d/s = (1 + √5)/2</strong>, the golden ratio.',
      show: [...V, 'P', 'H', ...V.map((v) => 's' + v), ...V.map((v) => 't' + v), 'AC', 'BE'],
      hl: ['AC', 'BE']
    },
    {
      phase: 'angles', just: 'Pentagon diagonals',
      title: 'Every diagonal makes 36° with the sides',
      formula: 'Each angle of the pentagon is 108°, and a diagonal cuts off an isosceles triangle with base angles 36°. So <strong>φ = 36°</strong> at A between AB and AC, at C between CB and CA, at B between BA and BE, and at E between EA and EB.',
      show: ['fA', 'fC', 'fB', 'fE'],
      hl: ['fA', 'fC', 'fB', 'fE']
    },
    {
      phase: 'apex', just: 'Isosceles converse',
      title: 'EP = EA = s',
      formula: 'In the triangle APE the angle at A is 108° − 36° = 72° = 2φ and the angle at E is φ, so the angle at P is 180° − 72° − 36° = 72°. Two equal angles at A and P: the sides opposite them are equal, <strong>EP = EA = s</strong>.',
      show: ['pAPE', 'eA', 'eP', 'tEP'],
      hl: ['pAPE', 'eA', 'eP', 'tEP']
    },
    {
      phase: 'isosceles', just: 'Isosceles converse',
      title: 'AP = BP = d − s',
      formula: 'The triangle ABP has the angle φ at A and at B, so <strong>AP = BP</strong> (two ticks each). And BP = BE − EP = d − s, so <strong>AP = d − s</strong>.',
      show: ['pABP', 'tAP', 'tBP'],
      hl: ['pABP', 'tAP', 'tBP', 'fA', 'fB']
    },
    {
      phase: 'similar', just: 'AA similarity',
      title: 'ABP ∼ ACB',
      formula: 'The triangles ABP and ACB share the angle φ at A, and each has a second angle φ (at B in ABP, at C in ACB). By AA they are similar, so their sides are in proportion: <strong>AP/AB = AB/AC</strong>, that is (d − s)/s = s/d.',
      show: ['pACB'],
      hl: ['pACB', 'pABP', 'fA', 'fB', 'fC']
    },
    {
      phase: 'solve', just: 'Algebra',
      title: 'd² − ds − s² = 0',
      formula: 'Multiply out: d(d − s) = s², so d² − ds − s² = 0. With x = d/s this is x² − x − 1 = 0, whose positive root is <strong>x = (1 + √5)/2 ≈ 1.618</strong>.',
      show: [],
      hl: ['AC', 'sA']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'd/s = (1 + √5)/2',
      formula: 'The diagonal of a regular pentagon is the golden ratio times its side: <strong>d/s = (1 + √5)/2</strong>, and the point P divides the diagonal BE in the golden ratio too, BE/EP = EP/BP. <strong>∎</strong>',
      show: [],
      hl: ['AC', 'BE', 'tEP', 'tBP']
    }
  ],

  readout: (P) =>
    `AC/AB = ${fmt(dist(P.A, P.C) / dist(P.A, P.B), 3)},  AP/AB = ${fmt(dist(P.A, P.P) / dist(P.A, P.B), 3)},  AB/AC = ${fmt(dist(P.A, P.B) / dist(P.A, P.C), 3)}`,

  // the pentagon large enough for the marks, turned at most 20° and every vertex
  // far enough inside the frame for its name
  isValid: (P) => {
    if (!P.P) return false;
    const inFrame = (p) => p.x > 86 && p.x < 474 && p.y > 84 && p.y < 372;
    const r = dist(P.O, P.A);
    // A kept within 20° of the top, so that the level angle labels stay apart
    const turn = Math.abs(Math.atan2(P.A.x - P.O.x, P.O.y - P.A.y)) * 180 / Math.PI;
    return r > 130 && r < 170 && turn < 20 && V.every((v) => inFrame(P[v]));
  }
};

export default pentagonGoldenRatio;
