// ===========================================================
// proofs/midsegment.js — the midsegment theorem
// The segment joining the midpoints D, E of two sides of a
// triangle is parallel to the third side and half as long.
// Extend DE to F with EF = DE; triangles ADE and CFE are
// congruent (SAS, vertical angles), so CF = DB and CF ∥ DB;
// then DBCF is a parallelogram (shown with the diagonal DC and
// a second SAS), so DF = BC and DF ∥ BC.
// Phases: given, construct, sas1, alt, equal, join, sas2, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const midsegment = {
  label: 'Midsegment theorem',
  info:
    'Extend DE past E to F with EF = DE and join CF. Triangles ADE and CFE are congruent (SAS, ' +
    'with the vertical angles at E), so CF = AD = DB and the alternate angles at A and C make ' +
    'CF ∥ AB. Then DBCF has one pair of opposite sides equal and parallel; the diagonal DC and ' +
    'a second SAS show it is a parallelogram, so DF = BC and DF ∥ BC: DE is half of BC and ' +
    'parallel to it. Drag any vertex.',
  hint: 'Drag A, B or C; the midpoints and F follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle, the extension to F, and the labels.
  viewBox: [50, 60, 460, 330],

  model: {
    points: { A: { x: 200, y: 95 }, B: { x: 90, y: 340 }, C: { x: 390, y: 340 } },
    params: {},
    composites: [],
    objects: [
      { id: 'D', type: 'midpoint', of: ['A', 'B'] },
      { id: 'E', type: 'midpoint', of: ['A', 'C'] },
      // F: DE extended past E by its own length
      { id: 'F', type: 'pointAlongDist', from: 'E', dir: ['D', 'E'], lenOf: ['D', 'E'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'DE', type: 'segment', of: ['D', 'E'] },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'tDB', type: 'ticks', of: ['D', 'B'], n: 1 },
      { id: 'tAE', type: 'ticks', of: ['A', 'E'], n: 2 },
      { id: 'tEC', type: 'ticks', of: ['E', 'C'], n: 2 },
      { id: 'EF', type: 'segment', of: ['E', 'F'] },
      { id: 'CF', type: 'segment', of: ['C', 'F'] },
      { id: 'tDE', type: 'ticks', of: ['D', 'E'], n: 3 },
      { id: 'tEF', type: 'ticks', of: ['E', 'F'], n: 3 },
      { id: 'tri1', type: 'polygon', of: ['A', 'D', 'E'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['C', 'F', 'E'], color: 'beta' },
      { id: 'aE1', type: 'angle', at: 'E', from: 'A', to: 'D', color: 'alpha', label: 'ε' },
      { id: 'aE2', type: 'angle', at: 'E', from: 'C', to: 'F', color: 'alpha', label: 'ε' },
      { id: 'aA', type: 'angle', at: 'A', from: 'D', to: 'E', color: 'beta', label: 'α' },
      { id: 'aC', type: 'angle', at: 'C', from: 'F', to: 'E', color: 'beta', label: 'α' },
      { id: 'pBA', type: 'parallel', of: ['B', 'A'], n: 2 },
      { id: 'pCF', type: 'parallel', of: ['C', 'F'], n: 2 },
      { id: 'tCF', type: 'ticks', of: ['C', 'F'], n: 1 },
      { id: 'DC', type: 'segment', of: ['D', 'C'] },
      { id: 'gD', type: 'angle', at: 'D', from: 'B', to: 'C', color: 'gamma', label: 'γ' },
      { id: 'gC', type: 'angle', at: 'C', from: 'F', to: 'D', color: 'gamma', label: 'γ' },
      { id: 'tri3', type: 'polygon', of: ['D', 'B', 'C'], color: 'gamma' },
      { id: 'tri4', type: 'polygon', of: ['C', 'F', 'D'], color: 'delta' },
      { id: 'dC', type: 'angle', at: 'C', from: 'B', to: 'D', color: 'delta', label: 'δ' },
      { id: 'dD', type: 'angle', at: 'D', from: 'F', to: 'C', color: 'delta', label: 'δ' },
      { id: 'pBC', type: 'parallel', of: ['B', 'C'], n: 1 },
      { id: 'pDF', type: 'parallel', of: ['D', 'F'], n: 1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'The midpoints of two sides',
      formula: 'In triangle ABC, D is the midpoint of AB (one tick each) and E the midpoint of AC (two ticks each). To prove: <strong>DE ∥ BC and DE = ½ BC</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'D', 'E', 'DE', 'tAD', 'tDB', 'tAE', 'tEC'],
      hl: ['DE', 'BC']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Extend DE to F with EF = DE, and join CF',
      formula: 'Draw DE on past E to the point F with EF = DE (three ticks each), and join C to F. The point F is hollow: it follows D and E.',
      show: ['F', 'EF', 'CF', 'tDE', 'tEF'],
      hl: ['EF', 'CF']
    },
    {
      phase: 'sas1', just: 'SAS congruence',
      title: 'Triangles ADE and CFE are congruent',
      formula: 'AE = EC (E is a midpoint), DE = EF (by construction), and the angles at E between those sides are vertical angles, so they are equal. Two sides and the included angle: the triangles are congruent, with A ↔ C, D ↔ F, E ↔ E.',
      show: ['tri1', 'tri2', 'aE1', 'aE2'],
      hl: ['tri1', 'tri2', 'aE1', 'aE2']
    },
    {
      phase: 'alt', just: 'Alternate angles',
      title: 'CF ∥ AB',
      formula: 'Corresponding angles of the congruent triangles are equal: ∠DAE = ∠FCE. These are alternate angles on the transversal AC of the lines AB and CF, and equal alternate angles mean the lines are parallel.',
      show: ['aA', 'aC', 'pBA', 'pCF'],
      hl: ['aA', 'aC', 'pBA', 'pCF']
    },
    {
      phase: 'equal', just: 'Corresponding parts',
      title: 'CF = AD = DB',
      formula: 'Corresponding sides of the congruent triangles are equal: CF = AD. And AD = DB because D is the midpoint of AB. So CF = DB (one tick each): DBCF has a pair of opposite sides that are equal and parallel.',
      show: ['tCF'],
      hl: ['CF', 'tCF', 'tDB']
    },
    {
      phase: 'join', just: 'Alternate angles',
      title: 'The diagonal DC: ∠BDC = ∠FCD',
      formula: 'Join D to C. DC is a transversal of the parallels DB and CF, so the alternate angles ∠BDC and ∠FCD are equal.',
      show: ['DC', 'gD', 'gC'],
      hl: ['DC', 'gD', 'gC']
    },
    {
      phase: 'sas2', just: 'SAS congruence',
      title: 'Triangles DBC and CFD are congruent',
      formula: 'DB = CF, DC is a side of both, and the angles between those sides, at D and at C, were just shown equal. So the triangles are congruent, with D ↔ C, B ↔ F, C ↔ D: BC = FD, and ∠BCD = ∠FDC.',
      show: ['tri3', 'tri4', 'dC', 'dD'],
      hl: ['tri3', 'tri4', 'dC', 'dD']
    },
    {
      phase: 'conclude', just: 'Corresponding parts',
      title: 'DE ∥ BC and DE = ½ BC',
      formula: '∠BCD = ∠FDC are alternate angles on the transversal DC, so DF ∥ BC, and DE lies along DF. And BC = DF = DE + EF = 2 DE, so DE = ½ BC. <strong>∎</strong>',
      show: ['pBC', 'pDF'],
      hl: ['DE', 'BC', 'pBC', 'pDF']
    }
  ],

  readout: (P) => {
    const de = dist(P.D, P.E) / UNIT;
    const bc = dist(P.B, P.C) / UNIT;
    return `DE = ${fmt(de, 2)}, BC = ${fmt(bc, 2)}  (BC / 2 = ${fmt(bc / 2, 2)})`;
  },

  // a real triangle, with the extension to F inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 &&
    [P.A, P.B, P.C, P.F].every((p) => p.x > 65 && p.x < 495 && p.y > 75 && p.y < 375)
};

export default midsegment;
