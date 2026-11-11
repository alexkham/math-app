// ===========================================================
// proofs/sasSimilarity.js — the SAS similarity criterion
// Two sides in the same ratio and the included angle equal give
// similar triangles. A′B′C′ is not drawn: D on AB with AD = A′B′
// and E on AC with AE = A′C′, so AD/AB = AE/AC. Areas show that
// [BDE] = [CDE], hence DE ∥ BC, and corresponding angles with
// AA similarity finish.
// Phases: given, left, right, equal, parallel, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const sasSimilarity = {
  label: 'SAS similarity',
  info:
    'A′B′C′ (not drawn) has ∠A′ = ∠A and A′B′/AB = A′C′/AC. Cut off AD = A′B′ and AE = A′C′, so ' +
    'AD/AB = AE/AC and ADE ≅ A′B′C′ by SAS. Same heights give [ADE]/[ABE] = AD/AB and ' +
    '[ADE]/[ACD] = AE/AC, so [ABE] = [ACD] and, taking away ADE, [BDE] = [CDE]: equal areas on ' +
    'the same base DE put B and C at the same distance from DE, so DE ∥ BC. Corresponding angles ' +
    'and AA finish. Drag D to resize the second triangle, or a vertex.',
  hint: 'Drag D along AB (the size of the second triangle), or A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 270, y: 95 }, B: { x: 110, y: 330 }, C: { x: 440, y: 330 } },
    params: { t: 0.45 },
    composites: [],
    objects: [
      // D on AB and E on AC at the same fraction: AD/AB = AE/AC is the hypothesis
      { id: 'D', type: 'onLine', of: ['A', 'B'], param: 't', drag: true, minParam: 0.15, maxParam: 0.85 },
      { id: 'E', type: 'onLine', of: ['A', 'C'], param: 't' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'DE', type: 'segment', of: ['D', 'E'] },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'tAE', type: 'ticks', of: ['A', 'E'], n: 2 },
      { id: 'pADE', type: 'polygon', of: ['A', 'D', 'E'], color: 'alpha' },
      { id: 'BE', type: 'segment', of: ['B', 'E'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'pABE', type: 'polygon', of: ['A', 'B', 'E'], color: 'gamma' },
      { id: 'pACD', type: 'polygon', of: ['A', 'C', 'D'], color: 'delta' },
      { id: 'pBDE', type: 'polygon', of: ['B', 'D', 'E'], color: 'beta' },
      { id: 'pCDE', type: 'polygon', of: ['C', 'D', 'E'], color: 'line' },
      { id: 'mDE', type: 'parallel', of: ['D', 'E'], n: 1 },
      { id: 'mBC', type: 'parallel', of: ['B', 'C'], n: 1 },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'bD', type: 'angle', at: 'D', from: 'E', to: 'A', color: 'beta', label: 'β' },
      { id: 'cC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'gamma', label: 'γ' },
      { id: 'cE', type: 'angle', at: 'E', from: 'A', to: 'D', color: 'gamma', label: 'γ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two sides in ratio, included angle equal',
      formula: 'A second triangle A′B′C′ (not drawn) has ∠A′ = ∠A = α and A′B′/AB = A′C′/AC. On AB mark D with AD = A′B′ (one tick) and on AC mark E with AE = A′C′ (two ticks), so that AD/AB = AE/AC. By SAS, ADE ≅ A′B′C′. To prove: <strong>ADE, and so A′B′C′, is similar to ABC</strong>.',
      show: ['A', 'B', 'C', 'D', 'E', 'T', 'AB', 'BC', 'CA', 'DE', 'aA', 'tAD', 'tAE', 'pADE'],
      hl: ['pADE']
    },
    {
      phase: 'left', just: 'Same height',
      title: 'AD/AB = [ADE] / [ABE]',
      formula: 'Join B to E. Triangles ADE and ABE have their bases AD and AB on the line AB and the same apex E, so their areas are in the ratio of their bases.',
      show: ['BE', 'pABE'],
      hl: ['pADE', 'pABE']
    },
    {
      phase: 'right', just: 'Same height',
      title: 'AE/AC = [ADE] / [ACD]',
      formula: 'Join C to D. Triangles ADE and ACD have their bases AE and AC on the line AC and the same apex D, so [ADE] / [ACD] = AE/AC.',
      show: ['CD', 'pACD'],
      hl: ['pADE', 'pACD']
    },
    {
      phase: 'equal', just: 'Equal ratios',
      title: '[BDE] = [CDE]',
      formula: 'AD/AB = AE/AC was given, so [ADE] / [ABE] = [ADE] / [ACD], and therefore [ABE] = [ACD]. Both contain the triangle ADE; take it away from each: [BDE] = [CDE].',
      show: ['pBDE', 'pCDE'],
      hl: ['pBDE', 'pCDE']
    },
    {
      phase: 'parallel', just: 'Same base',
      title: 'DE ∥ BC',
      formula: 'Triangles BDE and CDE have the same base DE and equal areas, so they have equal heights: B and C are at the same distance from the line DE, and on the same side of it. A line through two such points is parallel to DE: <strong>BC ∥ DE</strong>.',
      show: ['mDE', 'mBC'],
      hl: ['DE', 'BC']
    },
    {
      phase: 'conclude', just: 'AA similarity',
      title: 'ADE ~ ABC',
      formula: 'With DE ∥ BC the corresponding angles are equal: ∠ADE = ∠B = β and ∠AED = ∠C = γ. The triangles ADE and ABC have equal angles, so by AA similarity DE/BC = AD/AB = AE/AC. Since ADE ≅ A′B′C′, the same holds for A′B′C′. <strong>∎</strong>',
      show: ['bB', 'bD', 'cC', 'cE'],
      hl: ['bD', 'cE']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.A, P.D) / dist(P.A, P.B);
    const r3 = dist(P.D, P.E) / dist(P.B, P.C);
    return `AD/AB = AE/AC = ${fmt(r1, 2)},  DE/BC = ${fmt(r3, 2)},  ∠ADE = ${fmt(angleDeg(P.D, P.A, P.E), 0)}°,  ∠B = ${fmt(angleDeg(P.B, P.A, P.C), 0)}°`;
  },

  // a real triangle, everything in the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 &&
    [P.A, P.B, P.C].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348)
};

export default sasSimilarity;
