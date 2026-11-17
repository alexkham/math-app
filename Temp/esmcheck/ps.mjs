// ===========================================================
// proofs/pentagramAngles.js — the five point angles of any
// five-pointed star add up to 180°.
// The star is drawn A → C → E → B → D → A. The side EB meets AC at
// X and AD at Y. ∠AXY is an exterior angle of the triangle CEX,
// so it is γ + ε; ∠AYX is an exterior angle of the triangle BDY,
// so it is β + δ; the angle sum of AXY then gives
// α + β + γ + δ + ε = 180°.
// All five points are free; isValid keeps them a star.
// Phases: given, first, second, sum, conclude
// ===========================================================

import { angleDeg, dist, fmt } from './math.mjs';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

// t along a→b where it meets the line c–d (null when parallel)
const along = (a, b, c, d) => {
  const den = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
  if (Math.abs(den) < 1e-9) return null;
  return ((c.x - a.x) * (d.y - c.y) - (c.y - a.y) * (d.x - c.x)) / den;
};

const pentagramAngles = {
  label: 'Angles of a pentagram',
  info:
    'The side EB of the star meets AC at X and AD at Y. In the triangle CEX the angle AXY is an ' +
    'exterior angle, so it equals γ + ε; in the triangle BDY the angle AYX is an exterior angle, so ' +
    'it equals β + δ. The angles of the triangle AXY add up to 180°: α + (γ + ε) + (β + δ) = 180°. ' +
    'Drag any of the five points.',
  hint: 'Drag any of the five points of the star',
  labelCenter: ['A', 'B', 'C', 'D', 'E'],
  // Frame for the five points and their labels.
  viewBox: [40, 40, 480, 370],

  model: {
    points: {
      A: { x: 268, y: 82 }, B: { x: 474, y: 222 }, C: { x: 404, y: 374 },
      D: { x: 140, y: 368 }, E: { x: 76, y: 216 }
    },
    params: {},
    composites: [],
    objects: [
      // X, Y: where the side EB crosses AC and AD
      { id: 'X', type: 'intersection', of: ['A', 'C', 'E', 'B'] },
      { id: 'Y', type: 'intersection', of: ['A', 'D', 'E', 'B'] },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'CE', type: 'segment', of: ['C', 'E'] },
      { id: 'EB', type: 'segment', of: ['E', 'B'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      // arc sizes chosen so that the names stay apart over the whole drag range
      { id: 'aA', type: 'angle', at: 'A', from: 'D', to: 'C', color: 'alpha', label: 'α', radius: 46 },
      { id: 'aB', type: 'angle', at: 'B', from: 'E', to: 'D', color: 'beta', label: 'β', radius: 47 },
      { id: 'aC', type: 'angle', at: 'C', from: 'A', to: 'E', color: 'gamma', label: 'γ', radius: 19 },
      { id: 'aD', type: 'angle', at: 'D', from: 'B', to: 'A', color: 'beta', label: 'δ', radius: 30 },
      { id: 'aE', type: 'angle', at: 'E', from: 'C', to: 'B', color: 'gamma', label: 'ε', radius: 26 },
      { id: 'pCEX', type: 'polygon', of: ['C', 'E', 'X'], color: 'gamma' },
      { id: 'xX', type: 'angle', at: 'X', from: 'A', to: 'Y', color: 'gamma', label: 'θ', radius: 14 },
      { id: 'pBDY', type: 'polygon', of: ['B', 'D', 'Y'], color: 'beta' },
      { id: 'yY', type: 'angle', at: 'Y', from: 'X', to: 'A', color: 'beta', label: 'ψ', radius: 14 },
      { id: 'pAXY', type: 'polygon', of: ['A', 'X', 'Y'], color: 'alpha' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A five-pointed star',
      formula: 'Five points A, B, C, D, E are joined A → C → E → B → D → A, making a star. Its point angles are α, β, γ, δ, ε. To prove: <strong>α + β + γ + δ + ε = 180°</strong>, whatever the shape of the star.',
      show: ['A', 'B', 'C', 'D', 'E', 'AC', 'CE', 'EB', 'BD', 'DA', 'aA', 'aB', 'aC', 'aD', 'aE'],
      hl: ['AC', 'CE', 'EB', 'BD', 'DA']
    },
    {
      phase: 'first', just: 'Exterior angle theorem',
      title: 'θ = ∠AXY = γ + ε',
      formula: 'The side EB crosses AC at X. In the triangle CEX the angles at C and E are γ and ε. The angle AXY lies at X between XA, the extension of CX, and the side XE: it is an exterior angle, so <strong>θ = ∠AXY = γ + ε</strong>.',
      show: ['X', 'pCEX', 'xX'],
      hl: ['pCEX', 'xX', 'aC', 'aE']
    },
    {
      phase: 'second', just: 'Exterior angle theorem',
      title: 'ψ = ∠AYX = β + δ',
      formula: 'EB crosses AD at Y. In the triangle BDY the angles at B and D are β and δ, and the angle AYX lies between YA, the extension of DY, and the side YB: an exterior angle, so <strong>ψ = ∠AYX = β + δ</strong>.',
      show: ['Y', 'pBDY', 'yY'],
      hl: ['pBDY', 'yY', 'aB', 'aD']
    },
    {
      phase: 'sum', just: 'Angle sum',
      title: 'α + (γ + ε) + (β + δ) = 180°',
      formula: 'The triangle AXY has the angles α at A, θ = γ + ε at X and ψ = β + δ at Y, and the angles of a triangle add up to 180°: α + θ + ψ = 180°, that is <strong>α + (γ + ε) + (β + δ) = 180°</strong>.',
      show: ['pAXY'],
      hl: ['pAXY', 'aA', 'xX', 'yY']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'α + β + γ + δ + ε = 180°',
      formula: 'Rearranged: <strong>α + β + γ + δ + ε = 180°</strong>. The five point angles of every five-pointed star add up to a straight angle. <strong>∎</strong>',
      show: [],
      hl: ['aA', 'aB', 'aC', 'aD', 'aE']
    }
  ],

  readout: (P) => {
    const a = [angleDeg(P.A, P.D, P.C), angleDeg(P.B, P.E, P.D), angleDeg(P.C, P.A, P.E), angleDeg(P.D, P.B, P.A), angleDeg(P.E, P.C, P.B)];
    return `${a.map((x) => fmt(x, 0) + '°').join(' + ')} = ${fmt(a.reduce((s, x) => s + x, 0))}°`;
  },

  // the five points in order round a convex pentagon (so the lines make a star),
  // the crossings well inside the sides, the point angles readable, all in the frame
  isValid: (P) => {
    if (!P.X || !P.Y) return false;
    const V = [P.A, P.B, P.C, P.D, P.E];
    const inFrame = (p) => p.x > 64 && p.x < 496 && p.y > 78 && p.y < 380;
    if (!V.every(inFrame)) return false;
    for (let i = 0; i < 5; i++) if (cross(V[i], V[(i + 1) % 5], V[(i + 2) % 5]) <= 600) return false;
    const tX = along(P.E, P.B, P.A, P.C), tY = along(P.E, P.B, P.A, P.D);
    if (tX == null || tY == null || !(tY > 0.15 && tX > tY + 0.18 && tX < 0.85)) return false;
    const pts = [angleDeg(P.A, P.D, P.C), angleDeg(P.B, P.E, P.D), angleDeg(P.C, P.A, P.E), angleDeg(P.D, P.B, P.A), angleDeg(P.E, P.C, P.B)];
    return pts.every((x) => x > 22) && dist(P.A, P.X) > 90 && dist(P.A, P.Y) > 90 && dist(P.X, P.Y) > 90;
  }
};

export default pentagramAngles;
