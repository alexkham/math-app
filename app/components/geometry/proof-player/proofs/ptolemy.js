// ===========================================================
// proofs/ptolemy.js — Ptolemy's theorem
// In a cyclic quadrilateral ABCD, AC·BD = AB·CD + AD·BC.
// K is taken on AC with ∠ABK = ∠DBC; inscribed angles on the
// arcs BC and AB give two pairs of similar triangles,
// ABK ~ DBC and KBC ~ ABD, whose proportions add up.
// Phases: given, construct, inscribed, first, second, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const ptolemy = {
  label: "Ptolemy's theorem",
  info:
    'Take K on the diagonal AC with ∠ABK = ∠DBC. The inscribed angles on the arc BC make ' +
    '∠BAC = ∠BDC, so ABK ~ DBC and AK·BD = AB·CD; the inscribed angles on the arc AB make ' +
    '∠BCA = ∠BDA, so KBC ~ ABD and KC·BD = AD·BC. Add: AC·BD = AB·CD + AD·BC. Slide a vertex ' +
    'round the circle.',
  hint: 'Drag B, C or D round the circle, A for the radius, O for the centre',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the circle (radius 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 180, y: 118 } },
    params: { tb: -0.75, tc: 0.65, td: 2.3 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'A', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'A', param: 'tc', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'A', param: 'td', drag: true },
      // K on AC with ∠ABK = ∠DBC: the ray BA turned towards BC by ∠DBC
      { id: 'K', type: 'angleCopy', at: 'B', from: 'A', toward: 'C', angle: ['D', 'B', 'C'], of: ['A', 'C'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'BK', type: 'segment', of: ['B', 'K'] },
      { id: 'tABK', type: 'angle', at: 'B', from: 'A', to: 'K', color: 'alpha', label: 'θ' },
      { id: 'tDBC', type: 'angle', at: 'B', from: 'D', to: 'C', color: 'alpha', label: 'θ' },
      { id: 'fA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'beta', label: 'φ' },
      { id: 'fD', type: 'angle', at: 'D', from: 'B', to: 'C', color: 'beta', label: 'φ' },
      { id: 'sC', type: 'angle', at: 'C', from: 'B', to: 'A', color: 'gamma', label: 'ψ' },
      { id: 'sD', type: 'angle', at: 'D', from: 'A', to: 'B', color: 'gamma', label: 'ψ', radius: 52 },
      { id: 'pABK', type: 'polygon', of: ['A', 'B', 'K'], color: 'alpha' },
      { id: 'pDBC', type: 'polygon', of: ['D', 'B', 'C'], color: 'delta' },
      { id: 'pKBC', type: 'polygon', of: ['K', 'B', 'C'], color: 'gamma' },
      { id: 'pABD', type: 'polygon', of: ['A', 'B', 'D'], color: 'beta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A cyclic quadrilateral and its diagonals',
      formula: 'ABCD is inscribed in a circle, with diagonals AC and BD. To prove: <strong>AC · BD = AB · CD + AD · BC</strong>, the product of the diagonals equals the sum of the products of the two pairs of opposite sides.',
      show: ['O', 'A', 'B', 'C', 'D', 'W', 'Q', 'AB', 'BC', 'CD', 'DA', 'AC', 'BD'],
      hl: ['AC', 'BD']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'K on AC with ∠ABK = ∠DBC',
      formula: 'On the diagonal AC take the point K for which ∠ABK = ∠DBC (both marked θ). It exists because the ray BD runs inside the angle ABC, so ∠DBC is smaller than ∠ABC. Taking θ away from ∠ABC on either side also gives ∠KBC = ∠ABD.',
      show: ['K', 'BK', 'tABK', 'tDBC'],
      hl: ['tABK', 'tDBC']
    },
    {
      phase: 'inscribed', just: 'Inscribed angles',
      title: '∠BAC = ∠BDC,  ∠BCA = ∠BDA',
      formula: 'The angles ∠BAC and ∠BDC both stand on the arc BC, so they are equal (φ); the angles ∠BCA and ∠BDA both stand on the arc AB, so they are equal (ψ). Inscribed angles on the same arc are equal.',
      show: ['fA', 'fD', 'sC', 'sD'],
      hl: ['fA', 'fD', 'sC', 'sD']
    },
    {
      phase: 'first', just: 'AA similarity',
      title: 'ABK ~ DBC:  AK · BD = AB · CD',
      formula: 'Triangles ABK and DBC have ∠ABK = ∠DBC = θ and ∠BAK = ∠BDC = φ, so they are similar, with A ↔ D, B ↔ B, K ↔ C. Hence AK / DC = AB / DB, that is <strong>AK · BD = AB · CD</strong>.',
      show: ['pABK', 'pDBC'],
      hl: ['pABK', 'pDBC']
    },
    {
      phase: 'second', just: 'AA similarity',
      title: 'KBC ~ ABD:  KC · BD = AD · BC',
      formula: 'Triangles KBC and ABD have ∠KBC = ∠ABD (both are ∠ABC − θ) and ∠BCK = ∠BDA = ψ, so they are similar, with K ↔ A, B ↔ B, C ↔ D. Hence KC / AD = BC / BD, that is <strong>KC · BD = AD · BC</strong>.',
      show: ['pKBC', 'pABD'],
      hl: ['pKBC', 'pABD']
    },
    {
      phase: 'conclude', just: 'Adding',
      title: 'AC · BD = AB · CD + AD · BC',
      formula: 'Add the two equations: (AK + KC) · BD = AB · CD + AD · BC. Since K lies on the diagonal, AK + KC = AC, and so <strong>AC · BD = AB · CD + AD · BC</strong>. <strong>∎</strong>',
      show: [],
      hl: ['AC', 'BD']
    }
  ],

  readout: (P) => {
    const d = (p, q) => dist(P[p], P[q]) / UNIT;
    const lhs = d('A', 'C') * d('B', 'D');
    const rhs = d('A', 'B') * d('C', 'D') + d('A', 'D') * d('B', 'C');
    return `AC·BD = ${fmt(lhs, 2)},  AB·CD + AD·BC = ${fmt(rhs, 2)}`;
  },

  // a convex quadrilateral in order round the circle, with the centre inside,
  // sides long enough for the labels and K well inside AC
  isValid: (P) => {
    if (!P.K) return false;
    const V = [P.A, P.B, P.C, P.D];
    const turns = V.map((p, i) => cross(p, V[(i + 1) % 4], V[(i + 2) % 4]));
    const sign = Math.sign(turns[0]);
    if (!turns.every((t) => Math.sign(t) === sign && Math.abs(t) > 3000)) return false;
    const inside = V.every((p, i) => Math.sign(cross(p, V[(i + 1) % 4], P.O)) === sign &&
      Math.abs(cross(p, V[(i + 1) % 4], P.O)) > 2500);
    const sides = V.every((p, i) => dist(p, V[(i + 1) % 4]) > 45);
    return inside && sides && area2(P.O, P.A, P.B) > 2000 && dist(P.O, P.A) > 60 &&
      dist(P.A, P.K) > 20 && dist(P.K, P.C) > 20;
  }
};

export default ptolemy;
