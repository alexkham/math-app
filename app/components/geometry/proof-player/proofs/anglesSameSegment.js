// ===========================================================
// proofs/anglesSameSegment.js — angles in the same segment are
// equal (Euclid III.21). C and D on the same arc AB see the chord
// AB under the same angle: each is half the central angle AOB.
// The circle is fixed by its centre O and a hidden point Z;
// A, B, C, D slide round it. The player keeps O inside both
// angles, the case the inscribed angle page draws.
// Phases: given, central, first, second, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
const inside = (O, a, b, c) => {
  const s1 = Math.sign(cross(a, b, O));
  return s1 !== 0 && s1 === Math.sign(cross(b, c, O)) && s1 === Math.sign(cross(c, a, O));
};

const anglesSameSegment = {
  label: 'Angles in the same segment',
  info:
    'The chord AB cuts the circle into two segments, and C and D lie in the same one. By the inscribed ' +
    'angle theorem each of the angles ACB and ADB is half the central angle AOB on the same arc. Two ' +
    'halves of one angle are equal, so ∠ACB = ∠ADB. Slide C or D along its arc, or move A and B.',
  hint: 'Drag C or D along the arc, or A or B round the circle',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the circle (radius 140 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    // Z (sets the radius) is never shown
    points: { O: { x: 280, y: 225 }, Z: { x: 420, y: 225 } },
    params: { ta: 2.4, tb: 0.75, tc: -2.0, td: -0.9 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'Z', param: 'td', drag: true },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'CB', type: 'segment', of: ['C', 'B'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'DB', type: 'segment', of: ['D', 'B'] },
      { id: 'tC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'alpha', label: 'θ₁' },
      { id: 'tD', type: 'angle', at: 'D', from: 'A', to: 'B', color: 'beta', label: 'θ₂' },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'wO', type: 'angle', at: 'O', from: 'A', to: 'B', color: 'gamma', label: 'ω', radius: 30 },
      { id: 'pACB', type: 'polygon', of: ['A', 'C', 'B'], color: 'alpha' },
      { id: 'pADB', type: 'polygon', of: ['A', 'D', 'B'], color: 'beta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two angles on the same chord',
      formula: 'AB is a chord of the circle, and C and D are two points on the same arc AB, the same side of the chord. θ₁ = ∠ACB and θ₂ = ∠ADB are the angles under which C and D see the chord. To prove: <strong>θ₁ = θ₂</strong>, angles in the same segment are equal.',
      show: ['A', 'B', 'C', 'D', 'W', 'AB', 'CA', 'CB', 'DA', 'DB', 'tC', 'tD'],
      hl: ['tC', 'tD']
    },
    {
      phase: 'central', just: 'Construction',
      title: 'The central angle ω = ∠AOB',
      formula: 'Join the centre O to A and to B. The angle ω = ∠AOB is the central angle standing on the arc AB, the arc on the far side of the chord from C and D.',
      show: ['O', 'OA', 'OB', 'wO'],
      hl: ['wO', 'OA', 'OB']
    },
    {
      phase: 'first', just: 'Inscribed angle theorem',
      title: 'θ₁ = ω/2',
      formula: 'The angle ACB at the circumference and the angle AOB at the centre stand on the same arc AB. By the inscribed angle theorem the angle at the circumference is half the angle at the centre: <strong>θ₁ = ω/2</strong>.',
      show: ['pACB'],
      hl: ['pACB', 'tC', 'wO']
    },
    {
      phase: 'second', just: 'Inscribed angle theorem',
      title: 'θ₂ = ω/2',
      formula: 'The same for D: the angle ADB stands on the same arc AB as the central angle, so <strong>θ₂ = ω/2</strong>.',
      show: ['pADB'],
      hl: ['pADB', 'tD', 'wO']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'θ₁ = θ₂',
      formula: 'Both angles are half of the same central angle ω, so <strong>θ₁ = θ₂</strong>: every point of the arc sees the chord AB under the same angle. Points on the other arc see it under the supplementary angle 180° − θ₁, by the cyclic quadrilateral theorem. <strong>∎</strong>',
      show: [],
      hl: ['tC', 'tD']
    }
  ],

  readout: (P) =>
    `θ₁ = ∠ACB = ${fmt(angleDeg(P.C, P.A, P.B), 0)}°,  θ₂ = ∠ADB = ${fmt(angleDeg(P.D, P.A, P.B), 0)}°,  ω/2 = ${fmt(angleDeg(P.O, P.A, P.B) / 2, 0)}°`,

  // C and D on the arc on O's side of AB with O inside both angles, points apart, in the frame
  isValid: (P) => {
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    const pts = [P.A, P.B, P.C, P.D];
    const apart = pts.every((p, i) => pts.every((q, j) => i >= j || dist(p, q) > 55));
    return pts.every(inFrame) && apart && dist(P.A, P.B) > 110 &&
      inside(P.O, P.A, P.B, P.C) && inside(P.O, P.A, P.B, P.D);
  }
};

export default anglesSameSegment;
