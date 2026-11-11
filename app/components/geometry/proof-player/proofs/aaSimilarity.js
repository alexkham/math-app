// ===========================================================
// proofs/aaSimilarity.js — the AA similarity criterion
// Two triangles with two equal angles have proportional sides.
// The second triangle A′B′C′ is not drawn: AD = A′B′ is cut off
// on AB, DE ∥ BC is drawn, ASA makes ADE ≅ A′B′C′, and the
// intercept theorem (twice, the second time with EF ∥ AB) gives
// AD/AB = AE/AC = DE/BC.
// Phases: given, parallel, asa, intercept, third, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const aaSimilarity = {
  label: 'AA similarity',
  info:
    'A second triangle A′B′C′ (not drawn) has ∠A′ = α and ∠B′ = β. Cut off AD = A′B′ on AB and ' +
    'draw DE ∥ BC. Corresponding angles make ∠ADE = β, so ADE ≅ A′B′C′ by ASA. The intercept ' +
    'theorem gives AD/AB = AE/AC, and with EF ∥ AB (DEFB a parallelogram) also DE/BC; replace ' +
    'AD, AE, DE by the sides of A′B′C′. Drag D to resize the second triangle, or a vertex.',
  hint: 'Drag D along AB (the size of the second triangle), or A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 270, y: 95 }, B: { x: 110, y: 330 }, C: { x: 440, y: 330 } },
    params: { t: 0.45 },
    composites: [],
    objects: [
      // D on AB (AD = A′B′); E on AC and F on BC at the same fraction, so DE ∥ BC and EF ∥ AB
      { id: 'D', type: 'onLine', of: ['A', 'B'], param: 't', drag: true, minParam: 0.15, maxParam: 0.85 },
      { id: 'E', type: 'onLine', of: ['A', 'C'], param: 't' },
      { id: 'F', type: 'onLine', of: ['B', 'C'], param: 't' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'DE', type: 'segment', of: ['D', 'E'] },
      { id: 'mDE', type: 'parallel', of: ['D', 'E'], n: 1 },
      { id: 'mBC', type: 'parallel', of: ['B', 'C'], n: 1 },
      { id: 'bD', type: 'angle', at: 'D', from: 'E', to: 'A', color: 'beta', label: 'β' },
      { id: 'pADE', type: 'polygon', of: ['A', 'D', 'E'], color: 'alpha' },
      { id: 'EF', type: 'segment', of: ['E', 'F'] },
      { id: 'mEF', type: 'parallel', of: ['E', 'F'], n: 2 },
      { id: 'mAB', type: 'parallel', of: ['A', 'B'], n: 2 },
      { id: 'pDEFB', type: 'polygon', of: ['D', 'E', 'F', 'B'], color: 'delta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two equal angles',
      formula: 'Triangle ABC has the angles α at A and β at B. A second triangle A′B′C′ (not drawn) has the same two angles, ∠A′ = α and ∠B′ = β. On AB mark the point D with AD = A′B′ (the tick). To prove: <strong>A′B′/AB = B′C′/BC = C′A′/CA</strong>, the triangles are similar.',
      show: ['A', 'B', 'C', 'D', 'T', 'AB', 'BC', 'CA', 'aA', 'bB', 'tAD'],
      hl: ['aA', 'bB']
    },
    {
      phase: 'parallel', just: 'Parallel lines',
      title: '∠ADE = β',
      formula: 'Through D draw the parallel to BC; it meets AC at E. The line AB is a transversal of the parallels DE and BC, so the corresponding angles are equal: ∠ADE = ∠ABC = β.',
      show: ['E', 'DE', 'mDE', 'mBC', 'bD'],
      hl: ['DE', 'BC', 'bD']
    },
    {
      phase: 'asa', just: 'ASA',
      title: 'ADE ≅ A′B′C′',
      formula: 'Triangles ADE and A′B′C′ have ∠A = ∠A′ = α, the side AD = A′B′ between the angles, and ∠ADE = ∠B′ = β. By ASA they are congruent, so <strong>AE = A′C′</strong> and <strong>DE = B′C′</strong>.',
      show: ['pADE'],
      hl: ['pADE']
    },
    {
      phase: 'intercept', just: 'Intercept theorem',
      title: 'AD/AB = AE/AC',
      formula: 'DE ∥ BC, so by the intercept theorem AD/DB = AE/EC. Flip both fractions and add 1: (DB + AD)/AD = (EC + AE)/AE, that is AB/AD = AC/AE, or <strong>AD/AB = AE/AC</strong>.',
      show: [],
      hl: ['AB', 'CA']
    },
    {
      phase: 'third', just: 'Intercept theorem',
      title: 'AE/AC = DE/BC',
      formula: 'Through E draw the parallel to AB; it meets BC at F. In DEFB both pairs of opposite sides are parallel, so it is a parallelogram and DE = BF. The intercept theorem in the angle at C, with EF ∥ AB, gives CE/CA = CF/CB, hence AE/AC = BF/BC, and <strong>AE/AC = DE/BC</strong>.',
      show: ['F', 'EF', 'mEF', 'mAB', 'pDEFB'],
      hl: ['EF', 'pDEFB']
    },
    {
      phase: 'conclude', just: 'Substituting',
      title: 'A′B′/AB = A′C′/AC = B′C′/BC',
      formula: 'So AD/AB = AE/AC = DE/BC. Replace AD, AE and DE by their equals A′B′, A′C′ and B′C′: the three sides of A′B′C′ are in one ratio to the three sides of ABC. The third angles agree too, since both triangles have angle sum 180°. <strong>∎</strong>',
      show: [],
      hl: ['pADE']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.A, P.D) / dist(P.A, P.B);
    const r2 = dist(P.A, P.E) / dist(P.A, P.C);
    const r3 = dist(P.D, P.E) / dist(P.B, P.C);
    return `AD/AB = ${fmt(r1, 2)},  AE/AC = ${fmt(r2, 2)},  DE/BC = ${fmt(r3, 2)},  ∠ADE = ${fmt(angleDeg(P.D, P.A, P.E), 0)}° = ∠B`;
  },

  // a real triangle, everything in the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 &&
    [P.A, P.B, P.C].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348)
};

export default aaSimilarity;
