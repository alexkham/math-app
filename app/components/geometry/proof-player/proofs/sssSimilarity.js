// ===========================================================
// proofs/sssSimilarity.js — the SSS similarity criterion
// Three sides in the same ratio give similar triangles. A′B′C′
// is not drawn: D on AB with AD = A′B′ and E on AC with AE = A′C′.
// SAS similarity makes ADE ~ ABC with DE/BC = AD/AB, the given
// ratio, so DE = B′C′; then ADE ≅ A′B′C′ by SSS and the angles
// of A′B′C′ are those of ABC.
// Phases: given, sas, subst, sss, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const sssSimilarity = {
  label: 'SSS similarity',
  info:
    'A′B′C′ (not drawn) has A′B′/AB = B′C′/BC = C′A′/CA. Cut off AD = A′B′ on AB and AE = A′C′ on ' +
    'AC; then AD/AB = AE/AC with the common angle at A, so ADE ~ ABC by SAS similarity and ' +
    'DE/BC = AD/AB = B′C′/BC, giving DE = B′C′. Now ADE ≅ A′B′C′ by SSS, and its angles are the ' +
    'angles of ABC. Drag D to resize the second triangle, or a vertex.',
  hint: 'Drag D along AB (the size of the second triangle), or A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 270, y: 95 }, B: { x: 110, y: 330 }, C: { x: 440, y: 330 } },
    params: { t: 0.45 },
    composites: [],
    objects: [
      // D on AB and E on AC at the same fraction: AD/AB = AE/AC, the given ratio
      { id: 'D', type: 'onLine', of: ['A', 'B'], param: 't', drag: true, minParam: 0.15, maxParam: 0.85 },
      { id: 'E', type: 'onLine', of: ['A', 'C'], param: 't' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'DE', type: 'segment', of: ['D', 'E'] },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'tAE', type: 'ticks', of: ['A', 'E'], n: 2 },
      { id: 'pADE', type: 'polygon', of: ['A', 'D', 'E'], color: 'alpha' },
      { id: 'mDE', type: 'parallel', of: ['D', 'E'], n: 1 },
      { id: 'mBC', type: 'parallel', of: ['B', 'C'], n: 1 },
      { id: 'tDE', type: 'ticks', of: ['D', 'E'], n: 3 },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'bD', type: 'angle', at: 'D', from: 'E', to: 'A', color: 'beta', label: 'β' },
      { id: 'cC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'gamma', label: 'γ' },
      { id: 'cE', type: 'angle', at: 'E', from: 'A', to: 'D', color: 'gamma', label: 'γ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Three sides in the same ratio',
      formula: 'A second triangle A′B′C′ (not drawn) has A′B′/AB = B′C′/BC = C′A′/CA. On AB mark D with AD = A′B′ (one tick) and on AC mark E with AE = A′C′ (two ticks); then AD/AB = AE/AC, the given ratio. To prove: <strong>the angles of A′B′C′ equal those of ABC</strong>, the triangles are similar.',
      show: ['A', 'B', 'C', 'D', 'E', 'T', 'AB', 'BC', 'CA', 'DE', 'tAD', 'tAE', 'pADE'],
      hl: ['pADE']
    },
    {
      phase: 'sas', just: 'SAS similarity',
      title: 'ADE ~ ABC',
      formula: 'Triangles ADE and ABC share the angle at A, and the sides about it are in the same ratio, AD/AB = AE/AC. By SAS similarity, ADE ~ ABC: DE ∥ BC and <strong>DE/BC = AD/AB</strong>.',
      show: ['mDE', 'mBC'],
      hl: ['DE', 'BC']
    },
    {
      phase: 'subst', just: 'Substituting',
      title: 'DE = B′C′',
      formula: 'DE/BC = AD/AB = A′B′/AB, and by hypothesis A′B′/AB = B′C′/BC. So DE/BC = B′C′/BC, that is <strong>DE = B′C′</strong> (three ticks).',
      show: ['tDE'],
      hl: ['DE']
    },
    {
      phase: 'sss', just: 'SSS',
      title: 'ADE ≅ A′B′C′',
      formula: 'The triangles ADE and A′B′C′ now have three pairs of equal sides: AD = A′B′, AE = A′C′, DE = B′C′. By SSS they are congruent, so the angles of A′B′C′ are the angles of ADE.',
      show: ['aA'],
      hl: ['pADE']
    },
    {
      phase: 'conclude', just: 'Corresponding angles',
      title: '∠A′ = α, ∠B′ = β, ∠C′ = γ',
      formula: 'DE ∥ BC, so the corresponding angles are equal: ∠ADE = ∠B = β and ∠AED = ∠C = γ, and the angle at A is shared. The angles of ADE, and so of A′B′C′, are the angles of ABC: <strong>A′B′C′ ~ ABC</strong>, with the given ratio of sides. <strong>∎</strong>',
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

export default sssSimilarity;
