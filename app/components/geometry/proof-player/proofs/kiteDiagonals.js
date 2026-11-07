// ===========================================================
// proofs/kiteDiagonals.js — the diagonals of a kite
// A kite has two pairs of equal adjacent sides, AB = AD and
// CB = CD. Its diagonals are perpendicular, and the axis AC
// bisects the other diagonal BD (and the angles at A and C).
// SSS on ABC and ADC gives ∠BAC = ∠DAC; SAS on ABM and ADM
// gives BM = MD and equal angles at M, a linear pair → 90°.
// Phases: given, sss, bisect, sas, linear, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const UNIT = 60;

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.08 && t < 0.92;
};

const kiteDiagonals = {
  label: 'Kite diagonals',
  info:
    'The axis AC splits the kite into two triangles with three equal sides, so by SSS the ' +
    'angles at A are equal: AC bisects the angle at A. Then the two small triangles on either ' +
    'side of the axis agree in two sides and the included angle, so by SAS BM = MD and the two ' +
    'angles at M are equal; they make a straight angle, so each is 90°. Drag A, B or C; D mirrors B.',
  hint: 'Drag A, B or C; the fourth vertex D follows',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the kite and its labels.
  viewBox: [60, 60, 440, 340],

  model: {
    points: { A: { x: 280, y: 95 }, B: { x: 150, y: 200 }, C: { x: 280, y: 365 } },
    params: {},
    composites: [],
    objects: [
      // D: the mirror image of B in the axis AC, so that AD = AB and CD = CB
      { id: 'F', type: 'foot', from: 'B', to: ['A', 'C'] },
      { id: 'D', type: 'pointAlongDist', from: 'F', dir: ['B', 'F'], lenOf: ['B', 'F'] },
      { id: 'M', type: 'intersection', of: ['A', 'C', 'B', 'D'] },
      { id: 'K', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'tCB', type: 'ticks', of: ['C', 'B'], n: 2 },
      { id: 'tCD', type: 'ticks', of: ['C', 'D'], n: 2 },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'T1', type: 'polygon', of: ['A', 'B', 'C'], color: 'alpha' },
      { id: 'T2', type: 'polygon', of: ['A', 'D', 'C'], color: 'beta' },
      { id: 'aB', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'aD', type: 'angle', at: 'A', from: 'C', to: 'D', color: 'beta', label: 'α' },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'T3', type: 'polygon', of: ['A', 'B', 'M'], color: 'gamma' },
      { id: 'T4', type: 'polygon', of: ['A', 'D', 'M'], color: 'delta' },
      { id: 'tBM', type: 'ticks', of: ['B', 'M'], n: 3 },
      { id: 'tMD', type: 'ticks', of: ['M', 'D'], n: 3 },
      { id: 'mB', type: 'angle', at: 'M', from: 'B', to: 'A', color: 'gamma', label: 'φ' },
      { id: 'mD', type: 'angle', at: 'M', from: 'A', to: 'D', color: 'delta', label: 'φ' },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'A', to: 'B' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A kite: two pairs of equal adjacent sides',
      formula: 'ABCD is a kite: AB = AD (one tick each) and CB = CD (two ticks each). The equal sides meet at A and at C, the ends of the axis. To prove: <strong>AC ⟂ BD</strong>, and <strong>AC bisects BD</strong>.',
      show: ['A', 'B', 'C', 'D', 'K', 'AB', 'BC', 'CD', 'DA', 'tAB', 'tAD', 'tCB', 'tCD'],
      hl: ['tAB', 'tAD', 'tCB', 'tCD']
    },
    {
      phase: 'sss', just: 'SSS congruence',
      title: 'ABC ≅ ADC',
      formula: 'Draw the axis AC. The triangles ABC and ADC have AB = AD, CB = CD, and the side AC in common: three pairs of equal sides, so they are congruent by SSS.',
      show: ['AC', 'T1', 'T2'],
      hl: ['AC', 'T1', 'T2']
    },
    {
      phase: 'bisect', just: 'Corresponding parts',
      title: '∠BAC = ∠DAC = <i>α</i>',
      formula: 'Congruent triangles have equal corresponding angles. The angle at A in ABC corresponds to the angle at A in ADC, so ∠BAC = ∠DAC: the axis bisects the angle at A. (The same holds at C.)',
      show: ['aB', 'aD'],
      hl: ['aB', 'aD']
    },
    {
      phase: 'sas', just: 'SAS congruence',
      title: 'ABM ≅ ADM',
      formula: 'Draw the other diagonal BD; it meets AC at M. The triangles ABM and ADM have AB = AD, the side AM in common, and the equal angles <i>α</i> between those sides. By SAS they are congruent.',
      show: ['BD', 'M', 'T3', 'T4'],
      hl: ['T3', 'T4', 'aB', 'aD']
    },
    {
      phase: 'linear', just: 'Linear pair',
      title: 'BM = MD and ∠AMB = ∠AMD = 90°',
      formula: 'Corresponding parts of ABM and ADM: BM = MD (three ticks), so M is the midpoint of BD; and ∠AMB = ∠AMD = <i>φ</i>. The two angles at M lie along the straight line BD, so <i>φ</i> + <i>φ</i> = 180° and <i>φ</i> = 90°.',
      show: ['tBM', 'tMD', 'mB', 'mD'],
      hl: ['tBM', 'tMD', 'mB', 'mD']
    },
    {
      phase: 'conclude', just: 'Conclusion',
      title: 'AC ⟂ BD, and AC bisects BD',
      formula: 'The diagonals of a kite are perpendicular, and the axis AC cuts the other diagonal in half at M. The axis also bisects the angles at A and at C. <strong>∎</strong>',
      show: ['rM'],
      hl: ['rM', 'AC', 'BD']
    }
  ],

  readout: (P) => {
    const m = angleDeg(P.M, P.A, P.B);
    return `∠AMB = ${fmt(m)}°,  BM = ${fmt(dist(P.B, P.M) / UNIT)},  MD = ${fmt(dist(P.M, P.D) / UNIT)}`;
  },

  // a convex kite (B off the axis, its foot strictly between A and C) inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 6000 && between(P.F, P.A, P.C) &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 388)
};

export default kiteDiagonals;
