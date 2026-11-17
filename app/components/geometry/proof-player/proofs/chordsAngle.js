// ===========================================================
// proofs/chordsAngle.js — the angle between two chords that
// cross inside a circle is half the sum of the central angles on
// the two arcs it cuts off: ∠AEB = ½(∠AOB + ∠COD).
// ∠AEB is an exterior angle of the triangle AED, so it equals
// ∠EAD + ∠EDA = ∠CAD + ∠BDA; each of these is an inscribed angle,
// half the central angle on its arc (CD and AB).
// A, B, C, D slide round the circle in that order; E is where the
// chords AC and BD cross. O is fixed (a midpoint of two hidden
// copies of the centre, so it is not a handle).
// Phases: given, exterior, first, second, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const TWO_PI = 2 * Math.PI;
const gap = (from, to) => ((to - from) % TWO_PI + TWO_PI) % TWO_PI;

const chordsAngle = {
  label: 'Angle between two chords',
  info:
    'The chords AC and BD cross at E. The angle AEB is an exterior angle of the triangle AED, so it ' +
    'equals the two remote angles ∠CAD + ∠BDA. Each of those is an inscribed angle: ∠BDA stands on ' +
    'the arc AB and is half of ∠AOB, ∠CAD stands on the arc CD and is half of ∠COD. So ' +
    '∠AEB = ½(∠AOB + ∠COD). Drag A, B, C or D round the circle.',
  hint: 'Drag A, B, C or D round the circle',
  // names point away from a spot just off the centre towards the arc BC: A, B, C, D get
  // outward names, and O (which a centre exactly at O would label on its own dot) gets
  // its name in the empty gap towards the arc DA, clear of the four radii
  labelCenter: ['H1', 'H1', 'H1', 'B', 'C'],
  // Frame for the circle (radius 150 about O) and its labels.
  viewBox: [70, 40, 420, 370],

  model: {
    // H1, H2 (copies of the centre) and Z (sets the radius) are never shown
    points: { H1: { x: 280, y: 225 }, H2: { x: 280, y: 225 }, Z: { x: 430, y: 225 } },
    params: { ta: -2.6, tb: -1.2, tc: -0.33, td: 1.24 },
    composites: [],
    objects: [
      { id: 'O', type: 'midpoint', of: ['H1', 'H2'] },
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'Z', param: 'td', drag: true },
      // E: where the chords cross
      { id: 'E', type: 'intersection', of: ['A', 'C', 'B', 'D'] },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'tE', type: 'angle', at: 'E', from: 'A', to: 'B', color: 'gamma', label: 'θ', radius: 30 },
      { id: 'pAED', type: 'polygon', of: ['A', 'E', 'D'], color: 'gamma' },
      { id: 'fA', type: 'angle', at: 'A', from: 'C', to: 'D', color: 'alpha', label: 'φ', radius: 40 },
      { id: 'pD', type: 'angle', at: 'D', from: 'A', to: 'B', color: 'beta', label: 'ψ', radius: 40 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'cAB', type: 'angle', at: 'O', from: 'A', to: 'B', color: 'beta', label: '2ψ', radius: 26 },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'OD', type: 'segment', of: ['O', 'D'] },
      { id: 'cCD', type: 'angle', at: 'O', from: 'C', to: 'D', color: 'alpha', label: '2φ', radius: 26 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two chords crossing inside a circle',
      formula: 'A, B, C, D lie on a circle with centre O, in that order. The chords AC and BD cross at E, and θ = ∠AEB. To prove: <strong>θ = ½(∠AOB + ∠COD)</strong>, half the sum of the central angles on the arcs AB and CD.',
      show: ['A', 'B', 'C', 'D', 'E', 'W', 'AC', 'BD', 'tE'],
      hl: ['AC', 'BD', 'tE']
    },
    {
      phase: 'exterior', just: 'Exterior angle theorem',
      title: 'θ = φ + ψ',
      formula: 'Join A to D. In the triangle AED the ray EB continues the side DE beyond E, so θ = ∠AEB is an exterior angle of AED. It equals the two remote interior angles: <strong>θ = φ + ψ</strong>, with φ = ∠CAD at A and ψ = ∠BDA at D.',
      show: ['AD', 'pAED', 'fA', 'pD'],
      hl: ['pAED', 'tE', 'fA', 'pD']
    },
    {
      phase: 'first', just: 'Inscribed angle theorem',
      title: '∠AOB = 2ψ',
      formula: 'The angle ψ = ∠BDA at D stands on the arc AB. The central angle on the same arc is twice the inscribed angle: <strong>∠AOB = 2ψ</strong>.',
      show: ['O', 'OA', 'OB', 'cAB'],
      hl: ['cAB', 'pD']
    },
    {
      phase: 'second', just: 'Inscribed angle theorem',
      title: '∠COD = 2φ',
      formula: 'The angle φ = ∠CAD at A stands on the arc CD, so the central angle on it is <strong>∠COD = 2φ</strong>.',
      show: ['OC', 'OD', 'cCD'],
      hl: ['cCD', 'fA']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'θ = ½(∠AOB + ∠COD)',
      formula: 'Put the two together: θ = φ + ψ = ½∠COD + ½∠AOB, so <strong>∠AEB = ½(∠AOB + ∠COD)</strong>. The angle between two crossing chords is half the sum of the arcs it and its vertical angle cut off. <strong>∎</strong>',
      show: [],
      hl: ['tE', 'cAB', 'cCD']
    }
  ],

  readout: (P) =>
    `∠AEB = ${fmt(angleDeg(P.E, P.A, P.B))}°,  (∠AOB + ∠COD)/2 = ${fmt((angleDeg(P.O, P.A, P.B) + angleDeg(P.O, P.C, P.D)) / 2)}°`,

  // A, B, C, D in that order round the circle, the arcs AB and CD under 180° (so the
  // central angles are the drawn ones), every arc long enough for the marks, E and O
  // apart, all in the frame
  isValid: (P) => {
    if (!P.E) return false;
    const th = (p) => Math.atan2(p.y - P.O.y, p.x - P.O.x);
    const ab = gap(th(P.A), th(P.B)), bc = gap(th(P.B), th(P.C)), cd = gap(th(P.C), th(P.D)), da = gap(th(P.D), th(P.A));
    if (Math.abs(ab + bc + cd + da - TWO_PI) > 1e-6) return false;
    const deg = (x) => (x * 180) / Math.PI;
    const inFrame = (p) => p.x > 92 && p.x < 468 && p.y > 62 && p.y < 388;
    return [ab, bc, cd, da].every((x) => deg(x) > 40) && deg(ab) < 170 && deg(cd) < 170 &&
      [P.A, P.B, P.C, P.D].every(inFrame) && dist(P.E, P.O) > 50;
  }
};

export default chordsAngle;
