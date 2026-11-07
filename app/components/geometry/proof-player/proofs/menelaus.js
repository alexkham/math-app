// ===========================================================
// proofs/menelaus.js — Menelaus' theorem, by areas
// If a line meets the sides BC, CA of a triangle at D, E and the
// extension of AB at F, then (BD/DC)(CE/EA)(AF/FB) = 1. Each
// ratio on a side is a ratio of areas of triangles with the same
// apex (F, F, then E); after one cancellation the rest pair up
// along the transversal and cancel too.
// Phases: given, cutbc, cutca, cutab, pair, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const menelaus = {
  label: "Menelaus' theorem",
  info:
    'A line cuts BC at D, CA at E and the extension of AB at F. Triangles on BD and DC with the ' +
    'apex F have the same height, so BD/DC = [FBD]/[FDC]; likewise CE/EA = [FCE]/[FEA] and, with ' +
    'the apex E, AF/FB = [EAF]/[EFB]. Multiply: [FEA] cancels, and the four areas left pair up ' +
    'along the transversal, [FBD]/[FBE] = FD/FE and [FCE]/[FCD] = FE/FD, so the product is 1. ' +
    'Drag D along BC or F along the extension of AB, or a vertex.',
  hint: 'Drag D along BC, F along the extension of AB, or A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle, the transversal and F beyond B.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 110, y: 320 }, B: { x: 330, y: 320 }, C: { x: 260, y: 100 } },
    params: { t: 0.5, u: 1.33 },
    composites: [],
    objects: [
      // D on BC, F on the extension of AB beyond B, E where the line DF meets CA
      { id: 'D', type: 'onLine', of: ['B', 'C'], param: 't', drag: true, minParam: 0.12, maxParam: 0.88 },
      { id: 'F', type: 'onLine', of: ['A', 'B'], param: 'u', drag: true, minParam: 1.15, maxParam: 1.7 },
      { id: 'E', type: 'intersection', of: ['D', 'F', 'C', 'A'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'BF', type: 'segment', of: ['B', 'F'] },
      { id: 'L', type: 'line', of: ['E', 'F'] },
      { id: 'pFBD', type: 'polygon', of: ['F', 'B', 'D'], color: 'gamma' },
      { id: 'pFDC', type: 'polygon', of: ['F', 'D', 'C'], color: 'delta' },
      { id: 'pFCE', type: 'polygon', of: ['F', 'C', 'E'], color: 'alpha' },
      { id: 'pFEA', type: 'polygon', of: ['F', 'E', 'A'], color: 'beta' },
      { id: 'pEFB', type: 'polygon', of: ['E', 'F', 'B'], color: 'gamma' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A line across the triangle',
      formula: 'A line (the transversal) crosses the sides BC and CA of triangle ABC at D and E, and the extension of the third side AB at F. To prove: <strong>(BD/DC) · (CE/EA) · (AF/FB) = 1</strong>.',
      show: ['A', 'B', 'C', 'D', 'E', 'F', 'T', 'AB', 'BC', 'CA', 'BF', 'L'],
      hl: ['L']
    },
    {
      phase: 'cutbc', just: 'Same height',
      title: 'BD/DC = [FBD] / [FDC]',
      formula: 'Triangles FBD and FDC have their bases BD and DC on the line BC and the same apex F, so they have the same height, and their areas (in square brackets) are in the ratio of their bases: [FBD] / [FDC] = BD/DC.',
      show: ['pFBD', 'pFDC'],
      hl: ['pFBD', 'pFDC']
    },
    {
      phase: 'cutca', just: 'Same height',
      title: 'CE/EA = [FCE] / [FEA]',
      formula: 'The bases CE and EA lie on the line CA, and the apex is F again: triangles FCE and FEA have the same height, so [FCE] / [FEA] = CE/EA.',
      show: ['pFCE', 'pFEA'],
      hl: ['pFCE', 'pFEA']
    },
    {
      phase: 'cutab', just: 'Same height',
      title: 'AF/FB = [EAF] / [EFB]',
      formula: 'The bases AF and FB lie on the line AB (F is beyond B, so FB is the short piece), and this time the apex is E, the point of the transversal that is not on that line: [EAF] / [EFB] = AF/FB.',
      show: ['pEFB'],
      hl: ['pFEA', 'pEFB']
    },
    {
      phase: 'pair', just: 'Same height',
      title: '[FBD] / [FBE] = FD/FE,  [FCE] / [FCD] = FE/FD',
      formula: 'Multiply the three fractions: ([FBD] / [FDC]) · ([FCE] / [FEA]) · ([EAF] / [EFB]). The area [FEA] = [EAF] cancels. The four areas left pair up along the transversal: FBD and FBE stand on FD and FE with the apex B, so [FBD] / [FBE] = FD/FE; FCE and FCD stand on FE and FD with the apex C, so [FCE] / [FCD] = FE/FD.',
      show: [],
      hl: ['pFBD', 'pEFB', 'pFCE', 'pFDC']
    },
    {
      phase: 'conclude', just: 'Multiplying',
      title: '(BD/DC)(CE/EA)(AF/FB) = 1',
      formula: 'So the product equals ([FBD] / [FBE]) · ([FCE] / [FCD]) = (FD/FE) · (FE/FD) = 1. <strong>∎</strong>',
      show: [],
      hl: ['L']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.B, P.D) / dist(P.D, P.C);
    const r2 = dist(P.C, P.E) / dist(P.E, P.A);
    const r3 = dist(P.A, P.F) / dist(P.F, P.B);
    return `BD/DC = ${fmt(r1, 2)},  CE/EA = ${fmt(r2, 2)},  AF/FB = ${fmt(r3, 2)},  product = ${fmt(r1 * r2 * r3, 2)}`;
  },

  // a real triangle, F beyond B, E on the side CA itself, everything in the frame
  isValid: (P) => {
    const E = P.E;
    if (!E || !Number.isFinite(E.x) || !Number.isFinite(E.y)) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const onCA = Math.abs(dist(P.C, E) + dist(E, P.A) - dist(P.C, P.A)) < 0.5;
    return area2(P.A, P.B, P.C) > 8000 && [P.A, P.B, P.C, P.F].every(inFrame) && onCA &&
      dist(P.C, E) > 25 && dist(E, P.A) > 25 && dist(P.D, P.B) > 25 && dist(P.D, P.C) > 25 &&
      dist(P.F, P.B) > 30 && dist(P.D, E) > 30;
  }
};

export default menelaus;
