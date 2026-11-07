// ===========================================================
// proofs/trapezoidMidsegment.js — the midsegment of a trapezoid
// The segment joining the midpoints of the legs is parallel to
// the bases and equal to half their sum. Through the midpoint K
// of the diagonal AC, the triangle midsegments MK and KN are
// both parallel to the bases, so they lie on one line, and
// MN = MK + KN = ½ DC + ½ AB.
// Phases: given, construct, mid1, mid2, collinear, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const trapezoidMidsegment = {
  label: 'Trapezoid midsegment',
  info:
    'Draw the diagonal AC and mark its midpoint K. In triangle ACD, MK is a midsegment, so ' +
    'MK ∥ DC and MK = ½ DC; in triangle ABC, KN is a midsegment, so KN ∥ AB and KN = ½ AB. ' +
    'Both are parallel to the bases and pass through K, so they lie on one line: M, K, N are ' +
    'collinear and MN = ½ (AB + DC). Drag C along the top, or any other vertex.',
  hint: 'Drag C along the top base, A, B or D to reshape the trapezoid',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the trapezoid and its labels.
  viewBox: [50, 95, 440, 270],

  model: {
    points: { A: { x: 90, y: 330 }, B: { x: 430, y: 330 }, D: { x: 170, y: 130 } },
    params: { tc: 0.55 },
    composites: [],
    objects: [
      // D2 = D + (B − A): the top line through D parallel to AB (never shown)
      { id: 'D2', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      // C slides along that line: DC ∥ AB whatever happens
      { id: 'C', type: 'onLine', of: ['D', 'D2'], param: 'tc', drag: true, minParam: 0.15, maxParam: 1.0 },
      { id: 'M', type: 'midpoint', of: ['A', 'D'] },
      { id: 'N', type: 'midpoint', of: ['B', 'C'] },
      { id: 'K', type: 'midpoint', of: ['A', 'C'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'pAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'pDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 1 },
      { id: 'tMD', type: 'ticks', of: ['M', 'D'], n: 1 },
      { id: 'tBN', type: 'ticks', of: ['B', 'N'], n: 2 },
      { id: 'tNC', type: 'ticks', of: ['N', 'C'], n: 2 },
      { id: 'MN', type: 'segment', of: ['M', 'N'] },
      { id: 'AC', type: 'line', of: ['A', 'C'] },
      { id: 'tAK', type: 'ticks', of: ['A', 'K'], n: 3 },
      { id: 'tKC', type: 'ticks', of: ['K', 'C'], n: 3 },
      { id: 'tri1', type: 'polygon', of: ['A', 'C', 'D'], color: 'alpha' },
      { id: 'MK', type: 'segment', of: ['M', 'K'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['A', 'B', 'C'], color: 'beta' },
      { id: 'KN', type: 'segment', of: ['K', 'N'], color: 'beta' },
      { id: 'pMN', type: 'parallel', of: ['M', 'N'], n: 1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'The midpoints of the legs',
      formula: 'ABCD is a trapezoid with AB ∥ DC (one chevron each). M is the midpoint of the leg AD and N the midpoint of the leg BC. To prove: <strong>MN ∥ AB and MN = ½ (AB + DC)</strong>.',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'pAB', 'pDC', 'M', 'N', 'tAM', 'tMD', 'tBN', 'tNC', 'MN'],
      hl: ['MN']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'The diagonal AC and its midpoint K',
      formula: 'Draw the diagonal AC and mark its midpoint K (three ticks each). The diagonal cuts the trapezoid into two triangles, ACD and ABC, and K is a midpoint in both.',
      show: ['AC', 'K', 'tAK', 'tKC'],
      hl: ['AC', 'K']
    },
    {
      phase: 'mid1', just: 'Midsegment theorem',
      title: 'MK ∥ DC and MK = ½ DC',
      formula: 'In triangle ACD, M is the midpoint of AD and K the midpoint of AC, so MK is a midsegment: it is parallel to the third side DC and half as long.',
      show: ['tri1', 'MK'],
      hl: ['tri1', 'MK', 'CD']
    },
    {
      phase: 'mid2', just: 'Midsegment theorem',
      title: 'KN ∥ AB and KN = ½ AB',
      formula: 'In triangle ABC, K is the midpoint of AC and N the midpoint of BC, so KN is a midsegment: it is parallel to the third side AB and half as long.',
      show: ['tri2', 'KN'],
      hl: ['tri2', 'KN', 'AB']
    },
    {
      phase: 'collinear', just: 'One parallel through a point',
      title: 'M, K and N lie on one line',
      formula: 'DC ∥ AB, so MK and KN are both parallel to AB, and both pass through K. Through a point there is only one line parallel to a given line, so MK and KN are parts of the same line: K lies on MN, and MN ∥ AB.',
      show: [],
      hl: ['MK', 'KN', 'pAB', 'pDC']
    },
    {
      phase: 'conclude', just: 'Adding the parts',
      title: 'MN = ½ (AB + DC)',
      formula: 'Since K is between M and N, MN = MK + KN = ½ DC + ½ AB = ½ (AB + DC): the midsegment is parallel to the bases (one chevron) and equal to half their sum. <strong>∎</strong>',
      show: ['pMN'],
      hl: ['MN', 'pMN', 'AB', 'CD']
    }
  ],

  readout: (P) => {
    const mn = dist(P.M, P.N) / UNIT;
    const half = (dist(P.A, P.B) + dist(P.D, P.C)) / 2 / UNIT;
    return `MN = ${fmt(mn, 2)},  (AB + DC) / 2 = ${fmt(half, 2)}`;
  },

  // a real trapezoid inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.D) > 8000 && dist(P.D, P.C) > 50 &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 70 && p.x < 470 && p.y > 110 && p.y < 350)
};

export default trapezoidMidsegment;
