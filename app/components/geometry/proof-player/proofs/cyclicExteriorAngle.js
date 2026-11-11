// ===========================================================
// proofs/cyclicExteriorAngle.js — the exterior angle of a cyclic
// quadrilateral equals the interior opposite angle.
// With AB extended beyond B to E: ∠CBE + ∠ABC = 180° (linear
// pair) and ∠ABC + ∠ADC = 180° (opposite angles of a cyclic
// quadrilateral), so ∠CBE = ∠ADC. The circle is fixed by a hidden
// centre O and a hidden point Z; A, B, C, D slide round it.
// Phases: given, linear, cyclic, subtract, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const cyclicExteriorAngle = {
  label: 'Cyclic exterior angle',
  info:
    'Extend AB beyond B to E. The exterior angle ε = ∠CBE and the interior angle β = ∠ABC make a ' +
    'straight angle, so ε = 180° − β. ABCD is cyclic, so its opposite angles β and δ add up to 180°, ' +
    'and δ = 180° − β too. So ε = δ: the exterior angle equals the interior opposite angle. Slide ' +
    'any vertex round the circle.',
  hint: 'Drag A, B, C or D round the circle (keep them in order)',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the circle (radius 140 about O), the extension and the labels.
  viewBox: [60, 50, 440, 360],

  model: {
    // O (centre) and Z (sets the radius) are never shown
    points: { O: { x: 280, y: 225 }, Z: { x: 420, y: 225 } },
    params: { ta: -2.3, tb: -0.6, tc: 0.8, td: 2.5 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'Z', param: 'td', drag: true },
      // E: AB continued beyond B
      { id: 'E', type: 'pointAlongDist', from: 'B', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.3 },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'BE', type: 'line', of: ['B', 'E'] },
      { id: 'eB', type: 'angle', at: 'B', from: 'C', to: 'E', color: 'alpha', label: 'ε' },
      { id: 'dD', type: 'angle', at: 'D', from: 'C', to: 'A', color: 'alpha', label: 'δ' },
      { id: 'bB', type: 'angle', at: 'B', from: 'A', to: 'C', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A cyclic quadrilateral and an exterior angle',
      formula: 'ABCD is inscribed in a circle. The side AB is extended beyond B to E, and ε = ∠CBE is the exterior angle at B. δ = ∠ADC is the interior angle at the opposite vertex D. To prove: <strong>ε = δ</strong>, the exterior angle equals the interior opposite angle.',
      show: ['A', 'B', 'C', 'D', 'E', 'W', 'Q', 'AB', 'BC', 'CD', 'DA', 'BE', 'eB', 'dD'],
      hl: ['eB', 'dD']
    },
    {
      phase: 'linear', just: 'Linear pair',
      title: 'β + ε = 180°',
      formula: 'The interior angle β = ∠ABC and the exterior angle ε lie side by side along the straight line A, B, E. Together they make a straight angle: <strong>β + ε = 180°</strong>.',
      show: ['bB'],
      hl: ['bB', 'eB', 'BE']
    },
    {
      phase: 'cyclic', just: 'Cyclic quadrilateral',
      title: 'β + δ = 180°',
      formula: 'The opposite angles of a cyclic quadrilateral add up to 180°. The angles at B and D are opposite, so <strong>β + δ = 180°</strong>.',
      show: [],
      hl: ['bB', 'dD']
    },
    {
      phase: 'subtract', just: 'Subtracting',
      title: 'ε = 180° − β = δ',
      formula: 'Both ε and δ make 180° with the same angle β: ε = 180° − β and δ = 180° − β. So <strong>ε = δ</strong>.',
      show: [],
      hl: ['eB', 'dD']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'The exterior angle equals the interior opposite angle',
      formula: 'The exterior angle at any vertex of a cyclic quadrilateral equals the interior angle at the opposite vertex. The converse also holds: if an exterior angle of a quadrilateral equals the interior opposite angle, then the opposite angles add up to 180° and the quadrilateral is cyclic. <strong>∎</strong>',
      show: [],
      hl: ['eB', 'dD', 'W']
    }
  ],

  readout: (P) => {
    const e = angleDeg(P.B, P.C, P.E);
    const b = angleDeg(P.B, P.A, P.C);
    const d = angleDeg(P.D, P.C, P.A);
    return `ε = ∠CBE = ${fmt(e, 0)}°,  δ = ∠ADC = ${fmt(d, 0)}°,  β + δ = ${fmt(b + d, 0)}°`;
  },

  // the vertices in order round the circle (convex), sides long enough, the
  // exterior angle readable, everything in the frame
  isValid: (P) => {
    if (!P.E) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    const V = [P.A, P.B, P.C, P.D];
    const turns = V.map((p, i) => cross(p, V[(i + 1) % 4], V[(i + 2) % 4]));
    const sign = Math.sign(turns[0]);
    return [...V, P.E].every(inFrame) && turns.every((t) => Math.sign(t) === sign && Math.abs(t) > 3000) &&
      V.every((p, i) => dist(p, V[(i + 1) % 4]) > 70) &&
      angleDeg(P.B, P.C, P.E) > 25 && angleDeg(P.B, P.C, P.E) < 155;
  }
};

export default cyclicExteriorAngle;
