// ===========================================================
// proofs/interceptTheorem.js — the intercept theorem, by areas
// A line parallel to one side of a triangle cuts the other two
// sides in the same ratio: DE ∥ BC gives AD/DB = AE/EC.
// BDE and CDE have the same base DE and equal heights (their
// apexes lie on a parallel), so their areas are equal; each
// ratio on a side is a ratio of areas with the same apex.
// Phases: given, equal, left, right, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const interceptTheorem = {
  label: 'Intercept theorem',
  info:
    'DE is parallel to BC. Triangles BDE and CDE share the base DE and their apexes B and C lie ' +
    'on a line parallel to it, so they have the same height and the same area. Then AD/DB = ' +
    '[ADE]/[BDE] and AE/EC = [ADE]/[CDE], two fractions with the same numerator and equal ' +
    'denominators. Drag D along AB, or a vertex.',
  hint: 'Drag D along AB, or A, B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 270, y: 95 }, B: { x: 110, y: 330 }, C: { x: 440, y: 330 } },
    params: { t: 0.45 },
    composites: [],
    objects: [
      // D on AB (draggable); E on AC at the same fraction, so DE ∥ BC
      { id: 'D', type: 'onLine', of: ['A', 'B'], param: 't', drag: true, minParam: 0.15, maxParam: 0.85 },
      { id: 'E', type: 'onLine', of: ['A', 'C'], param: 't' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'DE', type: 'segment', of: ['D', 'E'] },
      { id: 'mDE', type: 'parallel', of: ['D', 'E'], n: 1 },
      { id: 'mBC', type: 'parallel', of: ['B', 'C'], n: 1 },
      { id: 'BE', type: 'segment', of: ['B', 'E'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'pBDE', type: 'polygon', of: ['B', 'D', 'E'], color: 'gamma' },
      { id: 'pCDE', type: 'polygon', of: ['C', 'D', 'E'], color: 'delta' },
      { id: 'pADE', type: 'polygon', of: ['A', 'D', 'E'], color: 'alpha' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A line parallel to one side',
      formula: 'In triangle ABC the line DE is parallel to the side BC, with D on AB and E on AC. To prove: <strong>AD/DB = AE/EC</strong>, the parallel cuts the two sides in the same ratio.',
      show: ['A', 'B', 'C', 'D', 'E', 'T', 'AB', 'BC', 'CA', 'DE', 'mDE', 'mBC'],
      hl: ['DE', 'BC']
    },
    {
      phase: 'equal', just: 'Parallel lines',
      title: '[BDE] = [CDE]',
      formula: 'Join B to E and C to D. Triangles BDE and CDE have the same base DE, and their apexes B and C lie on the line BC, parallel to DE, so they are at the same distance from it: equal heights on the same base, equal areas.',
      show: ['BE', 'CD', 'pBDE', 'pCDE'],
      hl: ['pBDE', 'pCDE']
    },
    {
      phase: 'left', just: 'Same height',
      title: 'AD/DB = [ADE] / [BDE]',
      formula: 'Triangles ADE and BDE have their bases AD and DB on the line AB and the same apex E, so they have the same height, and their areas are in the ratio of their bases.',
      show: ['pADE'],
      hl: ['pADE', 'pBDE']
    },
    {
      phase: 'right', just: 'Same height',
      title: 'AE/EC = [ADE] / [CDE]',
      formula: 'The same on the other side: ADE and CDE have their bases AE and EC on the line AC and the same apex D, so [ADE] / [CDE] = AE/EC.',
      show: [],
      hl: ['pADE', 'pCDE']
    },
    {
      phase: 'conclude', just: 'Equal denominators',
      title: 'AD/DB = AE/EC',
      formula: 'The two fractions have the same numerator [ADE], and their denominators [BDE] and [CDE] are equal. So <strong>AD/DB = AE/EC</strong>; flipping both sides and adding 1 gives AB/AD = AC/AE as well. <strong>∎</strong>',
      show: [],
      hl: ['DE', 'BC']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.A, P.D) / dist(P.D, P.B);
    const r2 = dist(P.A, P.E) / dist(P.E, P.C);
    const r3 = dist(P.D, P.E) / dist(P.B, P.C);
    return `AD/DB = ${fmt(r1, 2)},  AE/EC = ${fmt(r2, 2)},  DE/BC = ${fmt(r3, 2)}`;
  },

  // a real triangle, everything in the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 &&
    [P.A, P.B, P.C].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348)
};

export default interceptTheorem;
