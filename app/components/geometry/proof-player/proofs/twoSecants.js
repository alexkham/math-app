// ===========================================================
// proofs/twoSecants.js — two secants from an outside point
// From P outside a circle, secants through A, B and through
// C, D satisfy PA · PB = PC · PD (the outside half of Euclid
// III.35/36). Each product is PM² − AM² with M the midpoint of
// the chord, and Pythagoras twice turns that into OP² − R²,
// the same number for both secants.
// Phases: given, foot, squares, pyth, same, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const twoSecants = {
  label: 'Two secants',
  info:
    'For each secant, drop the perpendicular from the centre O to its chord; the foot is the ' +
    'midpoint, and the product of the two secant segments is PM² − AM², a difference of squares. ' +
    'Pythagoras in the right triangles OMP and OMA turns this into OP² − R², which does not ' +
    'depend on the secant. So both products are the same number, the power of P. Drag A or C ' +
    'round the near side of the circle, or move P or O.',
  hint: 'Drag A or C round the near side, P outside, O to move the circle',
  labelCenter: ['O'],
  // Frame for the circle (radius 120 about O) and the outside point.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 300, y: 250 }, P: { x: 100, y: 150 }, Z: { x: 420, y: 250 } },
    params: { ta: -1.95, tc: -3.05 },
    composites: [],
    objects: [
      { id: 'K', type: 'circle', of: ['O', 'Z'] },
      // A, C: the near ends of the two secants, free on the circle
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      // M, N: feet of O on the secants; B, D: the far ends, mirrors of A and C
      { id: 'M', type: 'foot', from: 'O', to: ['P', 'A'] },
      { id: 'B', type: 'pointAlongDist', from: 'M', dir: ['A', 'M'], lenOf: ['A', 'M'] },
      { id: 'N', type: 'foot', from: 'O', to: ['P', 'C'] },
      { id: 'D', type: 'pointAlongDist', from: 'N', dir: ['C', 'N'], lenOf: ['C', 'N'] },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'PD', type: 'segment', of: ['P', 'D'] },
      { id: 'OM', type: 'segment', of: ['O', 'M'] },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'B', to: 'O' },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 1 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 1 },
      { id: 'ON', type: 'segment', of: ['O', 'N'] },
      { id: 'rN', type: 'rightAngle', at: 'N', from: 'D', to: 'O' },
      { id: 'tCN', type: 'ticks', of: ['C', 'N'], n: 2 },
      { id: 'tND', type: 'ticks', of: ['N', 'D'], n: 2 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'triA', type: 'polygon', of: ['O', 'M', 'A'], color: 'alpha' },
      { id: 'triP', type: 'polygon', of: ['O', 'M', 'P'], color: 'beta' },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'triC', type: 'polygon', of: ['O', 'N', 'C'], color: 'gamma' },
      { id: 'triQ', type: 'polygon', of: ['O', 'N', 'P'], color: 'delta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two secants from an outside point',
      formula: 'P lies outside the circle with centre O. Two secants from P cut the circle at A, B and at C, D, with A and C the nearer points. To prove: <strong>PA · PB = PC · PD</strong>.',
      show: ['K', 'O', 'P', 'A', 'B', 'C', 'D', 'PB', 'PD'],
      hl: ['PB', 'PD']
    },
    {
      phase: 'foot', just: 'Perpendicular bisects the chord',
      title: 'M and N, the feet of O, are the midpoints of AB and CD',
      formula: 'Drop the perpendiculars from the centre to the two chords; call the feet M and N. The perpendicular from the centre bisects the chord, so AM = MB (one tick each) and CN = ND (two ticks each).',
      show: ['M', 'N', 'OM', 'ON', 'rM', 'rN', 'tAM', 'tMB', 'tCN', 'tND'],
      hl: ['OM', 'ON', 'tAM', 'tMB', 'tCN', 'tND']
    },
    {
      phase: 'squares', just: 'Difference of squares',
      title: 'PA · PB = PM² − AM² and PC · PD = PN² − CN²',
      formula: 'On the first secant, PA = PM − AM and PB = PM + AM, so PA · PB = (PM − AM)(PM + AM) = <strong>PM² − AM²</strong>. On the second, in the same way, PC · PD = <strong>PN² − CN²</strong>.',
      show: [],
      hl: ['PB', 'PD', 'tAM', 'tMB', 'tCN', 'tND']
    },
    {
      phase: 'pyth', just: 'Pythagorean theorem',
      title: 'PM² − AM² = OP² − R²',
      formula: 'OMP and OMA are right-angled at M. By Pythagoras, PM² = OP² − OM² and AM² = OA² − OM². Subtracting, OM² cancels: PA · PB = PM² − AM² = OP² − OA² = <strong>OP² − R²</strong>, with R = OA the radius.',
      show: ['OA', 'OP', 'triA', 'triP'],
      hl: ['triA', 'triP', 'rM']
    },
    {
      phase: 'same', just: 'Pythagorean theorem',
      title: 'PN² − CN² = OP² − R² as well',
      formula: 'The same two right triangles on the other secant: ONP and ONC are right-angled at N, so PN² = OP² − ON² and CN² = OC² − ON², and PC · PD = PN² − CN² = OP² − OC² = <strong>OP² − R²</strong>. Nothing in this number says which secant was used.',
      show: ['OC', 'triC', 'triQ'],
      hl: ['triC', 'triQ', 'rN']
    },
    {
      phase: 'conclude', just: 'Conclusion',
      title: 'PA · PB = PC · PD',
      formula: 'Both products equal OP² − R², the power of P with respect to the circle. So PA · PB = PC · PD, and every secant from P gives the same product. <strong>∎</strong>',
      show: [],
      hl: ['PB', 'PD']
    }
  ],

  readout: (P) => {
    const pa = dist(P.P, P.A) / UNIT;
    const pb = dist(P.P, P.B) / UNIT;
    const pc = dist(P.P, P.C) / UNIT;
    const pd = dist(P.P, P.D) / UNIT;
    return `PA · PB = ${fmt(pa * pb, 2)},  PC · PD = ${fmt(pc * pd, 2)}`;
  },

  // P outside the circle, A and C the nearer ends, two real distinct chords, all in the frame
  isValid: (P) =>
    dist(P.O, P.P) > dist(P.O, P.Z) + 30 &&
    dist(P.A, P.B) > 50 && dist(P.C, P.D) > 50 && dist(P.A, P.C) > 30 &&
    dist(P.P, P.A) < dist(P.P, P.B) - 10 && dist(P.P, P.C) < dist(P.P, P.D) - 10 &&
    dist(P.P, P.M) > 5 && dist(P.P, P.N) > 5 &&
    [P.O, P.P, P.A, P.B, P.C, P.D].every((p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398)
};

export default twoSecants;
