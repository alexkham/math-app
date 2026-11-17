// ===========================================================
// proofs/cyclicHexagon.js — in a hexagon ABCDEF drawn in a circle,
// alternate angles add up to 360°: ∠B + ∠D + ∠F = 360°.
// The diagonals AC, CE, EA make the triangle ACE. ABCE, CDEA and
// EFAC are cyclic quadrilaterals, so ∠B + ∠AEC = 180°,
// ∠D + ∠CAE = 180° and ∠F + ∠ECA = 180°. Adding: ∠B + ∠D + ∠F +
// 180° = 540°.
// The circle is fixed (O is a midpoint of two hidden copies of the
// centre and is never shown); the six vertices slide round it.
// Phases: given, triangle, first, others, conclude
// ===========================================================

import { angleDeg, fmt } from './math.mjs';

const D2R = Math.PI / 180;
const V = ['A', 'B', 'C', 'D', 'E', 'F'];

const cyclicHexagon = {
  label: 'Angles of a cyclic hexagon',
  info:
    'The hexagon ABCDEF is drawn in a circle. The diagonals AC, CE and EA make a triangle with angles ' +
    'p, q, r adding up to 180°. ABCE, CDEA and EFAC are cyclic quadrilaterals, so their opposite angles ' +
    'add up to 180°: β + p = δ + q = φ + r = 180°. Adding the three: β + δ + φ + 180° = 540°, so ' +
    '∠B + ∠D + ∠F = 360°. Drag any vertex round the circle.',
  hint: 'Drag any vertex round the circle',
  // names point outward from the centre (O itself is never shown)
  labelCenter: ['H1'],
  // Frame for the circle and its labels.
  viewBox: [118, 66, 324, 322],

  model: {
    // H1, H2 (copies of the centre) and H3 (fixes the radius) are never shown
    points: { H1: { x: 280, y: 226 }, H2: { x: 280, y: 226 }, H3: { x: 398, y: 226 } },
    params: { ta: 195 * D2R, tb: 255 * D2R, tc: 315 * D2R, td: 15 * D2R, te: 85 * D2R, tf: 140 * D2R },
    composites: [],
    objects: [
      { id: 'O', type: 'midpoint', of: ['H1', 'H2'] },
      { id: 'W', type: 'circle', of: ['O', 'H3'] },
      ...V.map((v) => ({ id: v, type: 'onCircle', center: 'O', through: 'H3', param: 't' + v.toLowerCase(), drag: true })),
      ...V.map((v, i) => ({ id: 's' + v, type: 'segment', of: [v, V[(i + 1) % 6]] })),
      { id: 'AC', type: 'segment', of: ['A', 'C'], color: 'gamma' },
      { id: 'CE', type: 'segment', of: ['C', 'E'], color: 'gamma' },
      { id: 'EA', type: 'segment', of: ['E', 'A'], color: 'gamma' },
      { id: 'pACE', type: 'polygon', of: ['A', 'C', 'E'], color: 'gamma' },
      { id: 'aB', type: 'angle', at: 'B', from: 'A', to: 'C', color: 'alpha', label: 'β', radius: 22 },
      { id: 'aD', type: 'angle', at: 'D', from: 'C', to: 'E', color: 'beta', label: 'δ', radius: 22 },
      { id: 'aF', type: 'angle', at: 'F', from: 'E', to: 'A', color: 'delta', label: 'φ', radius: 22 },
      { id: 'pE', type: 'angle', at: 'E', from: 'A', to: 'C', color: 'alpha', label: 'p', radius: 30 },
      { id: 'qA', type: 'angle', at: 'A', from: 'C', to: 'E', color: 'beta', label: 'q', radius: 30 },
      { id: 'rC', type: 'angle', at: 'C', from: 'E', to: 'A', color: 'delta', label: 'r', radius: 30 },
      { id: 'qABCE', type: 'polygon', of: ['A', 'B', 'C', 'E'], color: 'alpha' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A hexagon in a circle',
      formula: 'The six vertices of the hexagon ABCDEF lie on one circle. Its angles at B, D and F are β, δ and φ. To prove: <strong>β + δ + φ = 360°</strong>, and in the same way the angles at A, C and E add up to 360°.',
      show: [...V, 'W', ...V.map((v) => 's' + v), 'aB', 'aD', 'aF'],
      hl: ['aB', 'aD', 'aF']
    },
    {
      phase: 'triangle', just: 'Angle sum',
      title: 'p + q + r = 180°',
      formula: 'Draw the diagonals AC, CE and EA. They make the triangle ACE, with angles p at E, q at A and r at C, so <strong>p + q + r = 180°</strong>.',
      show: ['AC', 'CE', 'EA', 'pACE', 'pE', 'qA', 'rC'],
      hl: ['pACE', 'pE', 'qA', 'rC']
    },
    {
      phase: 'first', just: 'Cyclic quadrilateral',
      title: 'β + p = 180°',
      formula: 'ABCE has all four vertices on the circle, so it is a cyclic quadrilateral and its opposite angles add up to 180°. The angles at B and E are opposite: <strong>β + p = 180°</strong>.',
      show: ['qABCE'],
      hl: ['qABCE', 'aB', 'pE']
    },
    {
      phase: 'others', just: 'Cyclic quadrilateral',
      title: 'δ + q = 180°,  φ + r = 180°',
      formula: 'In the same way CDEA and EFAC are cyclic quadrilaterals, with D opposite A and F opposite C: <strong>δ + q = 180°</strong> and <strong>φ + r = 180°</strong>.',
      show: [],
      hl: ['aD', 'qA', 'aF', 'rC']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'β + δ + φ = 360°',
      formula: 'Add the three equations: β + δ + φ + (p + q + r) = 540°. With p + q + r = 180°, <strong>β + δ + φ = 360°</strong>. Starting from the triangle BDF instead gives ∠A + ∠C + ∠E = 360°. <strong>∎</strong>',
      show: [],
      hl: ['aB', 'aD', 'aF']
    }
  ],

  readout: (P) =>
    `∠B + ∠D + ∠F = ${fmt(angleDeg(P.B, P.A, P.C) + angleDeg(P.D, P.C, P.E) + angleDeg(P.F, P.E, P.A))}°,  ∠A + ∠C + ∠E = ${fmt(angleDeg(P.A, P.F, P.B) + angleDeg(P.C, P.B, P.D) + angleDeg(P.E, P.D, P.F))}°`,

  // the vertices in order round the circle, each arc between neighbours from 38° to 100°
  isValid: (P) => {
    const ang = (p) => Math.atan2(p.y - P.O.y, p.x - P.O.x);
    let total = 0;
    for (let i = 0; i < 6; i++) {
      let g = (ang(P[V[(i + 1) % 6]]) - ang(P[V[i]])) / D2R;
      while (g < 0) g += 360;
      if (g < 45 || g > 100) return false;
      total += g;
    }
    return Math.abs(total - 360) < 1;
  }
};

export default cyclicHexagon;
