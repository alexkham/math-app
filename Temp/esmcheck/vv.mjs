// ===========================================================
// proofs/viviani.js — Viviani's theorem: from any point P inside
// an equilateral triangle, the perpendiculars to the three sides
// add up to the height: PD + PE + PF = h.
// The triangles PBC, PCA and PAB fill ABC. Each has a side of
// length a as its base and a perpendicular from P as its height,
// so ½a·PD + ½a·PE + ½a·PF = ½a·h, and dividing by ½a gives the
// result.
// A, B and P are free; C is B turned about A by −60° (rotateDeg).
// The height is drawn as a bar beside the triangle (Bh up to Ch,
// level with C), so it never runs through P or its name.
// K, a hidden point just below P, is the label centre: P is always
// named straight up, between its three perpendiculars, and D, E, F
// are named outward along the perpendiculars.
// Phases: given, split, parts, whole, conclude
// ===========================================================

import { dist, fmt } from './math.mjs';

const UNIT = 60; // px per unit in the readout

const viviani = {
  label: "Viviani's theorem",
  info:
    'P is any point inside the equilateral triangle ABC with side a, and PD, PE, PF are the ' +
    'perpendiculars from P to the sides. The triangles PBC, PCA and PAB fill ABC; each has a side a ' +
    'as its base and a perpendicular from P as its height, so ½a·PD + ½a·PE + ½a·PF = ½a·h. ' +
    'Dividing by ½a: PD + PE + PF = h, whatever the position of P. Drag P, A or B.',
  hint: 'Drag P inside the triangle, or A or B to turn and resize it',
  labelCenter: ['K'],
  // Frame for the triangle, the height bar and the labels.
  viewBox: [105, 52, 400, 320],

  model: {
    points: { A: { x: 150, y: 325 }, B: { x: 410, y: 325 }, P: { x: 250, y: 250 } },
    params: {},
    composites: [],
    objects: [
      { id: 'C', type: 'rotateDeg', about: 'A', of: 'B', deg: -60 },
      // the feet of the perpendiculars from P
      { id: 'D', type: 'foot', from: 'P', to: ['B', 'C'] },
      { id: 'E', type: 'foot', from: 'P', to: ['C', 'A'] },
      { id: 'F', type: 'foot', from: 'P', to: ['A', 'B'] },
      // hidden: the foot of the height from C, the height bar beside B, the label centre
      { id: 'H', type: 'foot', from: 'C', to: ['A', 'B'] },
      { id: 'Bh', type: 'pointAlongDist', from: 'B', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.17 },
      { id: 'Ch', type: 'pointAlongDist', from: 'Bh', dir: ['H', 'C'], lenOf: ['H', 'C'] },
      { id: 'K', type: 'pointAlongDist', from: 'P', dir: ['C', 'H'], lenOf: ['H', 'C'], scale: 0.05 },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'pBC', type: 'polygon', of: ['P', 'B', 'C'], color: 'alpha' },
      { id: 'pCA', type: 'polygon', of: ['P', 'C', 'A'], color: 'beta' },
      { id: 'pAB', type: 'polygon', of: ['P', 'A', 'B'], color: 'gamma' },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'tCA', type: 'ticks', of: ['C', 'A'], n: 1 },
      { id: 'PD', type: 'segment', of: ['P', 'D'], color: 'alpha' },
      { id: 'PE', type: 'segment', of: ['P', 'E'], color: 'beta' },
      { id: 'PF', type: 'segment', of: ['P', 'F'], color: 'gamma' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'B', to: 'P' },
      { id: 'rE', type: 'rightAngle', at: 'E', from: 'C', to: 'P' },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'A', to: 'P' },
      // the height h: a bar from the line AB up to the level of C
      { id: 'gC', type: 'line', of: ['C', 'Ch'] },
      { id: 'hBar', type: 'segment', of: ['Bh', 'Ch'] },
      { id: 'rH', type: 'rightAngle', at: 'Bh', from: 'B', to: 'Ch' },
      { id: 'lh', type: 'sideLabel', of: ['Bh', 'Ch'], text: 'h', side: -1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A point inside an equilateral triangle',
      formula: 'ABC is equilateral with side a (one tick on each side) and height h, drawn beside it. P is any point inside, and PD, PE, PF are the perpendiculars from P to the sides BC, CA and AB. To prove: <strong>PD + PE + PF = h</strong>.',
      show: ['A', 'B', 'C', 'P', 'D', 'E', 'F', 'T', 'AB', 'BC', 'CA', 'tAB', 'tBC', 'tCA', 'PD', 'PE', 'PF', 'rD', 'rE', 'rF', 'gC', 'hBar', 'rH', 'lh'],
      hl: ['PD', 'PE', 'PF']
    },
    {
      phase: 'split', just: 'Area addition',
      title: '[ABC] = [PBC] + [PCA] + [PAB]',
      formula: 'The three triangles PBC, PCA and PAB, shaded, meet at P and fill the triangle ABC without overlapping, so their areas add up to its area: <strong>[ABC] = [PBC] + [PCA] + [PAB]</strong>.',
      show: ['pBC', 'pCA', 'pAB'],
      hl: ['pBC', 'pCA', 'pAB']
    },
    {
      phase: 'parts', just: 'Triangle area',
      title: 'Each part is ½ · a · its perpendicular',
      formula: 'Each small triangle has a side of ABC as its base, of length a, and the perpendicular from P as its height: <strong>[PBC] = ½a·PD, [PCA] = ½a·PE, [PAB] = ½a·PF</strong>.',
      show: [],
      hl: ['PD', 'PE', 'PF', 'tAB', 'tBC', 'tCA']
    },
    {
      phase: 'whole', just: 'Triangle area',
      title: '[ABC] = ½ · a · h',
      formula: 'The whole triangle has the base AB = a and the height h: <strong>[ABC] = ½a·h</strong>.',
      show: [],
      hl: ['T', 'AB', 'hBar', 'lh']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'PD + PE + PF = h',
      formula: 'Put the areas together: ½a·PD + ½a·PE + ½a·PF = ½a·h. Divide by ½a: <strong>PD + PE + PF = h</strong>. The sum is the same for every point inside the triangle. <strong>∎</strong>',
      show: [],
      hl: ['PD', 'PE', 'PF', 'hBar', 'lh']
    }
  ],

  readout: (P) =>
    `PD + PE + PF = ${fmt((dist(P.P, P.D) + dist(P.P, P.E) + dist(P.P, P.F)) / UNIT, 2)},  h = ${fmt(dist(P.C, P.H) / UNIT, 2)}`,

  // AB close to level and of a fair size, P inside with room round it, everything in the frame
  isValid: (P) => {
    const ab = dist(P.A, P.B);
    const tilt = Math.abs(Math.atan2(P.B.y - P.A.y, P.B.x - P.A.x)) * 180 / Math.PI;
    const inFrame = (p) => p.x > 136 && p.x < 476 && p.y > 88 && p.y < 336;
    const inside = (u, v) => ((v.x - u.x) * (P.P.y - u.y) - (v.y - u.y) * (P.P.x - u.x)) < 0;
    return ab > 230 && ab < 280 && tilt < 12 &&
      inside(P.A, P.B) && inside(P.B, P.C) && inside(P.C, P.A) &&
      dist(P.P, P.D) > 32 && dist(P.P, P.E) > 32 && dist(P.P, P.F) > 32 &&
      [P.A, P.B, P.C, P.Bh, P.Ch].every(inFrame);
  }
};

export default viviani;
