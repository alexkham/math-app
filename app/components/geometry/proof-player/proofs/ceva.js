// ===========================================================
// proofs/ceva.js — Ceva's theorem, by areas
// If the cevians AD, BE, CF of a triangle pass through one
// point P, then (BD/DC)(CE/EA)(AF/FB) = 1. Each ratio of
// segments is a ratio of areas with the same height, first
// from A, then from P; subtracting gives BD/DC = [ABP]/[ACP],
// and the three ratios multiply to 1.
// Phases: given, base, apex, cancel, others, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const ceva = {
  label: "Ceva's theorem",
  info:
    'Triangles ABD and ADC have the same height from A, so BD/DC equals the ratio of their ' +
    'areas; the same with apex P gives BD/DC = [PBD]/[PDC]. Subtracting the small triangles from ' +
    'the large ones leaves BD/DC = [ABP]/[ACP]. The other two cevians give CE/EA = [BCP]/[BAP] ' +
    'and AF/FB = [CAP]/[CBP], and the three fractions multiply to 1. Drag P inside, or a vertex.',
  hint: 'Drag P inside the triangle, or A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 120, y: 320 }, B: { x: 430, y: 320 }, C: { x: 270, y: 90 }, P: { x: 265, y: 235 } },
    params: {},
    composites: [],
    objects: [
      // D, E, F: where the cevians through P meet the opposite sides
      { id: 'D', type: 'intersection', of: ['A', 'P', 'B', 'C'] },
      { id: 'E', type: 'intersection', of: ['B', 'P', 'C', 'A'] },
      { id: 'F', type: 'intersection', of: ['C', 'P', 'A', 'B'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'BE', type: 'segment', of: ['B', 'E'] },
      { id: 'CF', type: 'segment', of: ['C', 'F'] },
      { id: 'pBD', type: 'polygon', of: ['P', 'B', 'D'], color: 'gamma' },
      { id: 'pDC', type: 'polygon', of: ['P', 'D', 'C'], color: 'delta' },
      { id: 'qAB', type: 'polygon', of: ['A', 'B', 'P'], color: 'alpha' },
      { id: 'qCA', type: 'polygon', of: ['A', 'P', 'C'], color: 'beta' },
      { id: 'qBC', type: 'polygon', of: ['B', 'C', 'P'], color: 'line' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Three cevians through one point',
      formula: 'In triangle ABC the segments AD, BE and CF from the vertices to the opposite sides (cevians) all pass through the point P. To prove: <strong>(BD/DC) · (CE/EA) · (AF/FB) = 1</strong>.',
      show: ['A', 'B', 'C', 'P', 'D', 'E', 'F', 'T', 'AB', 'BC', 'CA', 'AD', 'BE', 'CF'],
      hl: ['AD', 'BE', 'CF']
    },
    {
      phase: 'base', just: 'Same height',
      title: 'BD/DC = [ABD] / [ADC]',
      formula: 'Triangles ABD and ADC have their bases BD and DC on the same line and the same apex A, so they have the same height, and their areas are in the ratio of their bases: [ABD] / [ADC] = BD/DC.',
      show: [],
      hl: ['BC', 'AD']
    },
    {
      phase: 'apex', just: 'Same height',
      title: 'BD/DC = [PBD] / [PDC]',
      formula: 'The same bases BD and DC with the apex P instead of A: triangles PBD and PDC have the same height from P, so [PBD] / [PDC] = BD/DC as well.',
      show: ['pBD', 'pDC'],
      hl: ['pBD', 'pDC']
    },
    {
      phase: 'cancel', just: 'Subtracting',
      title: 'BD/DC = [ABP] / [ACP]',
      formula: 'If a/b = c/d then (a − c)/(b − d) = a/b. Here [ABD] − [PBD] = [ABP] and [ADC] − [PDC] = [ACP], since P lies on AD. So <strong>BD/DC = [ABP] / [ACP]</strong>: the ratio in which the cevian from A cuts BC is the ratio of the two areas on either side of it at P.',
      show: ['qAB', 'qCA'],
      hl: ['qAB', 'qCA']
    },
    {
      phase: 'others', just: 'Same argument',
      title: 'CE/EA = [BCP] / [BAP],  AF/FB = [CAP] / [CBP]',
      formula: 'The other two cevians are treated the same way: BE cuts CA in the ratio of the areas on either side of it, CE/EA = [BCP] / [BAP], and CF cuts AB in the ratio AF/FB = [CAP] / [CBP]. The three triangles ABP, BCP, CAP around P are the only areas left.',
      show: ['qBC'],
      hl: ['qAB', 'qBC', 'qCA']
    },
    {
      phase: 'conclude', just: 'Multiplying',
      title: '(BD/DC)(CE/EA)(AF/FB) = 1',
      formula: 'Multiply the three fractions: ([ABP] / [ACP]) · ([BCP] / [BAP]) · ([CAP] / [CBP]). Each of the three areas appears once above and once below the line, so everything cancels and the product is 1. <strong>∎</strong>',
      show: [],
      hl: ['AD', 'BE', 'CF']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.B, P.D) / dist(P.D, P.C);
    const r2 = dist(P.C, P.E) / dist(P.E, P.A);
    const r3 = dist(P.A, P.F) / dist(P.F, P.B);
    return `BD/DC = ${fmt(r1, 2)},  CE/EA = ${fmt(r2, 2)},  AF/FB = ${fmt(r3, 2)},  product = ${fmt(r1 * r2 * r3, 2)}`;
  },

  // P strictly inside a real triangle, everything in the frame
  isValid: (P) => {
    const whole = area2(P.A, P.B, P.C);
    const a = area2(P.P, P.B, P.C) / whole;
    const b = area2(P.A, P.P, P.C) / whole;
    const c = area2(P.A, P.B, P.P) / whole;
    return whole > 8000 && a > 0.06 && b > 0.06 && c > 0.06 && a + b + c < 1.001 &&
      [P.A, P.B, P.C].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348);
  }
};

export default ceva;
