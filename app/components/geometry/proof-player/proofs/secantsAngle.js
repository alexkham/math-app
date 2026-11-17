// ===========================================================
// proofs/secantsAngle.js — the angle between two secants from a
// point outside a circle is half the difference of the central
// angles on the two arcs they cut off: ∠BPD = ½(∠BOD − ∠AOC).
// The secants are P → A → B and P → C → D. ∠BAD is an exterior
// angle of the triangle PAD, so ∠BAD = ∠BPD + ∠ADC; both ∠BAD and
// ∠ADC are inscribed angles, half the central angles on BD and AC.
// B and D slide round the circle and P moves freely outside; A and
// C are where the lines BP and DP meet the circle again. O is fixed
// (a midpoint of two hidden copies of the centre).
// Phases: given, exterior, first, second, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const secantsAngle = {
  label: 'Angle between two secants',
  info:
    'The secants from P meet the circle at A, B and at C, D. Join A to D: in the triangle PAD the ' +
    'angle BAD is an exterior angle at A, so ∠BAD = ∠BPD + ∠ADC, and ∠BPD = ∠BAD − ∠ADC. Both are ' +
    'inscribed angles: ∠BAD is half of ∠BOD and ∠ADC is half of ∠AOC. So ∠BPD = ½(∠BOD − ∠AOC). ' +
    'Drag P, or B or D round the circle.',
  hint: 'Drag P, or B or D round the circle',
  // names point away from a spot just off the centre towards P, so O gets its name on the
  // far side, away from the four radii, and the points on the circle get outward names
  labelCenter: ['H1', 'H1', 'H1', 'P'],
  // Frame for P, the circle (radius 130 about O) and the labels.
  viewBox: [40, 70, 480, 320],

  model: {
    // H1, H2 (copies of the centre) and Z (sets the radius) are never shown
    points: { H1: { x: 350, y: 230 }, H2: { x: 350, y: 230 }, Z: { x: 480, y: 230 }, P: { x: 92, y: 236 } },
    params: { tb: -1.05, td: 1.1 },
    composites: [],
    objects: [
      { id: 'O', type: 'midpoint', of: ['H1', 'H2'] },
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'Z', param: 'td', drag: true },
      // A, C: where the lines from B and D towards P meet the circle again
      { id: 'A', type: 'secondIntersection', center: 'O', from: 'B', toward: 'P' },
      { id: 'C', type: 'secondIntersection', center: 'O', from: 'D', toward: 'P' },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'PD', type: 'segment', of: ['P', 'D'] },
      { id: 'tP', type: 'angle', at: 'P', from: 'B', to: 'D', color: 'gamma', label: 'θ', radius: 43 },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'pPAD', type: 'polygon', of: ['P', 'A', 'D'], color: 'gamma' },
      { id: 'bA', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'beta', label: 'β', radius: 29 },
      { id: 'dD', type: 'angle', at: 'D', from: 'A', to: 'C', color: 'alpha', label: 'δ', radius: 33 },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OD', type: 'segment', of: ['O', 'D'] },
      { id: 'cBD', type: 'angle', at: 'O', from: 'B', to: 'D', color: 'beta', label: '2β', radius: 43 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'cAC', type: 'angle', at: 'O', from: 'A', to: 'C', color: 'alpha', label: '2δ', radius: 50 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two secants from a point outside',
      formula: 'P lies outside a circle with centre O. One line from P meets the circle at A and then B, another at C and then D. θ = ∠BPD. To prove: <strong>θ = ½(∠BOD − ∠AOC)</strong>, half the difference of the central angles on the far arc BD and the near arc AC.',
      show: ['P', 'A', 'B', 'C', 'D', 'W', 'PB', 'PD', 'tP'],
      hl: ['PB', 'PD', 'tP']
    },
    {
      phase: 'exterior', just: 'Exterior angle theorem',
      title: 'β = θ + δ',
      formula: 'Join A to D. In the triangle PAD the ray AB continues the side PA beyond A, so β = ∠BAD is an exterior angle of PAD. It equals the two remote interior angles, θ at P and δ = ∠ADC at D: β = θ + δ, so <strong>θ = β − δ</strong>.',
      show: ['AD', 'pPAD', 'bA', 'dD'],
      hl: ['pPAD', 'bA', 'dD', 'tP']
    },
    {
      phase: 'first', just: 'Inscribed angle theorem',
      title: '∠BOD = 2β',
      formula: 'The angle β = ∠BAD has its vertex A on the circle and stands on the arc BD, so the central angle on that arc is twice as large: <strong>∠BOD = 2β</strong>.',
      show: ['O', 'OB', 'OD', 'cBD'],
      hl: ['cBD', 'bA']
    },
    {
      phase: 'second', just: 'Inscribed angle theorem',
      title: '∠AOC = 2δ',
      formula: 'The angle δ = ∠ADC stands on the arc AC, so <strong>∠AOC = 2δ</strong>.',
      show: ['OA', 'OC', 'cAC'],
      hl: ['cAC', 'dD']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'θ = ½(∠BOD − ∠AOC)',
      formula: 'Substitute: θ = β − δ = ½∠BOD − ½∠AOC, so <strong>∠BPD = ½(∠BOD − ∠AOC)</strong>. The angle between two secants from an outside point is half the difference of the arcs they cut off. <strong>∎</strong>',
      show: [],
      hl: ['tP', 'cBD', 'cAC']
    }
  ],

  readout: (P) =>
    `∠BPD = ${fmt(angleDeg(P.P, P.B, P.D))}°,  (∠BOD − ∠AOC)/2 = ${fmt((angleDeg(P.O, P.B, P.D) - angleDeg(P.O, P.A, P.C)) / 2)}°`,

  // P outside the circle with both lines crossing it well inside (A nearer P than B, C nearer
  // than D), the arc BD under 170° so the central angle is the drawn one, the chords and
  // angles large enough for the marks, everything in the frame
  isValid: (P) => {
    if (!P.A || !P.C) return false;
    const r = dist(P.O, P.B);
    const inFrame = (p) => p.x > 62 && p.x < 498 && p.y > 104 && p.y < 356;
    return dist(P.O, P.P) > r + 60 &&
      dist(P.P, P.A) < dist(P.P, P.B) - 60 && dist(P.P, P.C) < dist(P.P, P.D) - 60 &&
      dist(P.A, P.C) > 60 && angleDeg(P.O, P.B, P.D) < 170 && angleDeg(P.A, P.B, P.D) < 85 &&
      angleDeg(P.P, P.B, P.D) > 18 && angleDeg(P.D, P.A, P.C) > 14 &&
      [P.P, P.A, P.B, P.C, P.D].every(inFrame);
  }
};

export default secantsAngle;
