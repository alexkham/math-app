// ===========================================================
// proofs/medianArea.js — a median splits a triangle into two
// triangles of equal area: [ABM] = [AMC] when M is the midpoint
// of BC.
// The two triangles have the bases BM and MC on the same line and
// the same apex A, so they share the height AH; with BM = MC
// the areas ½·BM·AH and ½·MC·AH are equal.
// A, B and C are free; M is the midpoint and H the foot of the
// altitude from A (kept between B and C, away from M).
// Phases: given, height, areas, conclude
// ===========================================================

import { area2, dist, fmt } from './math.mjs';

const UNIT = 60; // px per unit in the readout

const medianArea = {
  label: 'A median halves the area',
  info:
    'M is the midpoint of BC, so the median AM cuts the triangle ABC into ABM and AMC with equal ' +
    'bases BM = MC. Both have their base on the line BC and their apex at A, so they share the height ' +
    'AH. Their areas ½·BM·AH and ½·MC·AH are equal. Drag A, B or C.',
  hint: 'Drag A, B or C to change the triangle',
  // weighted towards A so that H and M, on BC, are named well below it
  labelCenter: ['A', 'A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [80, 90, 400, 280],

  model: {
    points: { A: { x: 220, y: 135 }, B: { x: 120, y: 320 }, C: { x: 440, y: 320 } },
    params: {},
    composites: [],
    objects: [
      { id: 'M', type: 'midpoint', of: ['B', 'C'] },
      { id: 'H', type: 'foot', from: 'A', to: ['B', 'C'] },
      { id: 'pABM', type: 'polygon', of: ['A', 'B', 'M'], color: 'alpha' },
      { id: 'pAMC', type: 'polygon', of: ['A', 'M', 'C'], color: 'beta' },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AM', type: 'segment', of: ['A', 'M'] },
      { id: 'tBM', type: 'ticks', of: ['B', 'M'], n: 1 },
      { id: 'tMC', type: 'ticks', of: ['M', 'C'], n: 1 },
      { id: 'AH', type: 'line', of: ['A', 'H'] },
      { id: 'rH', type: 'rightAngle', at: 'H', from: 'B', to: 'A' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A triangle and a median',
      formula: 'M is the midpoint of BC (one tick on each half), and AM is the median from A. It cuts ABC into the triangles ABM and AMC. To prove: <strong>[ABM] = [AMC]</strong>, writing [XYZ] for the area of XYZ.',
      show: ['A', 'B', 'C', 'M', 'AB', 'BC', 'CA', 'AM', 'tBM', 'tMC'],
      hl: ['AM', 'tBM', 'tMC']
    },
    {
      phase: 'height', just: 'Altitude',
      title: 'One height for both',
      formula: 'Drop the perpendicular AH from A to BC. Both triangles have their base on the line BC and their apex at A, so <strong>both have the height AH</strong>.',
      show: ['H', 'AH', 'rH'],
      hl: ['AH', 'rH']
    },
    {
      phase: 'areas', just: 'Triangle area',
      title: '[ABM] = ½·BM·AH,  [AMC] = ½·MC·AH',
      formula: 'The area of a triangle is half its base times its height: <strong>[ABM] = ½·BM·AH</strong> and <strong>[AMC] = ½·MC·AH</strong>.',
      show: ['pABM', 'pAMC'],
      hl: ['pABM', 'pAMC']
    },
    {
      phase: 'conclude', just: 'Midpoint',
      title: '[ABM] = [AMC]',
      formula: 'M is the midpoint, so BM = MC and the two areas are equal: ½·BM·AH = ½·MC·AH, that is <strong>[ABM] = [AMC]</strong>. The median halves the area of the triangle. <strong>∎</strong>',
      show: [],
      hl: ['pABM', 'pAMC', 'tBM', 'tMC']
    }
  ],

  readout: (P) =>
    `[ABM] = ${fmt(area2(P.A, P.B, P.M) / 2 / (UNIT * UNIT), 2)},  [AMC] = ${fmt(area2(P.A, P.M, P.C) / 2 / (UNIT * UNIT), 2)}`,

  // BC long and close to level, A high enough above it, the foot H between B and C and
  // away from M so that their names stay apart, everything in the frame
  isValid: (P) => {
    const bc = dist(P.B, P.C);
    const tilt = Math.abs(Math.atan2(P.C.y - P.B.y, P.C.x - P.B.x)) * 180 / Math.PI;
    const t = ((P.H.x - P.B.x) * (P.C.x - P.B.x) + (P.H.y - P.B.y) * (P.C.y - P.B.y)) / (bc * bc);
    const inFrame = (p) => p.x > 114 && p.x < 446 && p.y > 114 && p.y < 336;
    return bc > 240 && tilt < 15 && P.A.y < P.H.y - 110 && t * bc > 40 && (1 - t) * bc > 40 &&
      dist(P.H, P.M) > 36 && P.A.y > 132 && [P.A, P.B, P.C].every(inFrame);
  }
};

export default medianArea;
