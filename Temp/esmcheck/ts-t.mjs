// ===========================================================
// proofs/tangentSecantAngle.js — the angle between a tangent and
// a secant from a point outside a circle is half the difference of
// the central angles on the two arcs they cut off:
// ∠TPB = ½(∠TOB − ∠TOA).
// The tangent touches at T, the secant meets the circle at A then B.
// ∠TAB is an exterior angle of the triangle PTA, so ∠TAB = ∠TPB +
// ∠PTA; ∠TAB is an inscribed angle (half ∠TOB) and ∠PTA is a
// tangent-chord angle (half ∠TOA).
// P moves freely outside, B slides round the circle; T is the
// tangent point from P and A the second point of BP on the circle.
// O is fixed (a midpoint of two hidden copies of the centre).
// Phases: given, exterior, first, second, conclude
// ===========================================================

import { angleDeg, dist, fmt } from './math.mjs';

const tangentSecantAngle = {
  label: 'Angle between a tangent and a secant',
  info:
    'The tangent from P touches the circle at T and the secant meets it at A and B. Join T to A: in ' +
    'the triangle PTA the angle TAB is an exterior angle at A, so ∠TAB = ∠TPB + ∠PTA. ∠TAB is an ' +
    'inscribed angle, half of ∠TOB, and ∠PTA is a tangent-chord angle, half of ∠TOA. So ' +
    '∠TPB = ½(∠TOB − ∠TOA). Drag P, or B round the circle.',
  hint: 'Drag P, or B round the circle',
  // names point away from a spot just off the centre towards P
  labelCenter: ['H1', 'H1', 'H1', 'A'],
  // Frame for P, the circle (radius 130 about O) and the labels.
  viewBox: [40, 70, 480, 320],

  model: {
    // H1, H2 (copies of the centre) are never shown
    points: { H1: { x: 350, y: 238 }, H2: { x: 350, y: 238 }, P: { x: 92, y: 200 } },
    params: { r: 130, tb: 0.95 },
    composites: [],
    objects: [
      { id: 'O', type: 'midpoint', of: ['H1', 'H2'] },
      // T: where the tangent from P touches the circle (the upper one)
      { id: 'T', type: 'tangentPoint', center: 'O', from: 'P', radius: 'r', side: -1 },
      { id: 'W', type: 'circle', of: ['O', 'T'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'T', param: 'tb', drag: true },
      // A: where the line from B towards P meets the circle again
      { id: 'A', type: 'secondIntersection', center: 'O', from: 'B', toward: 'P' },
      { id: 'PT', type: 'segment', of: ['P', 'T'] },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'tP', type: 'angle', at: 'P', from: 'T', to: 'B', color: 'gamma', label: 'θ', radius: 40 },
      { id: 'TA', type: 'segment', of: ['T', 'A'] },
      { id: 'pPTA', type: 'polygon', of: ['P', 'T', 'A'], color: 'gamma' },
      { id: 'bA', type: 'angle', at: 'A', from: 'T', to: 'B', color: 'beta', label: 'β', radius: 30 },
      { id: 'dT', type: 'angle', at: 'T', from: 'P', to: 'A', color: 'alpha', label: 'δ', radius: 34 },
      { id: 'OT', type: 'segment', of: ['O', 'T'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'cTB', type: 'angle', at: 'O', from: 'T', to: 'B', color: 'beta', label: '2β', radius: 36 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'cTA', type: 'angle', at: 'O', from: 'T', to: 'A', color: 'alpha', label: '2δ', radius: 50 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A tangent and a secant from a point outside',
      formula: 'P lies outside a circle with centre O. The tangent from P touches the circle at T; a secant from P meets it at A and then B. θ = ∠TPB. To prove: <strong>θ = ½(∠TOB − ∠TOA)</strong>, half the difference of the central angles on the far arc TB and the near arc TA.',
      show: ['P', 'T', 'A', 'B', 'W', 'PT', 'PB', 'tP'],
      hl: ['PT', 'PB', 'tP']
    },
    {
      phase: 'exterior', just: 'Exterior angle theorem',
      title: 'β = θ + δ',
      formula: 'Join T to A. In the triangle PTA the ray AB continues the side PA beyond A, so β = ∠TAB is an exterior angle of PTA. It equals the two remote interior angles, θ at P and δ = ∠PTA at T: β = θ + δ, so <strong>θ = β − δ</strong>.',
      show: ['TA', 'pPTA', 'bA', 'dT'],
      hl: ['pPTA', 'bA', 'dT', 'tP']
    },
    {
      phase: 'first', just: 'Inscribed angle theorem',
      title: '∠TOB = 2β',
      formula: 'The angle β = ∠TAB has its vertex on the circle and stands on the far arc TB, so the central angle on that arc is twice as large: <strong>∠TOB = 2β</strong>.',
      show: ['O', 'OT', 'OB', 'cTB'],
      hl: ['cTB', 'bA']
    },
    {
      phase: 'second', just: 'Tangent-chord angle',
      title: '∠TOA = 2δ',
      formula: 'The angle δ = ∠PTA lies between the tangent PT and the chord TA, so it is half the central angle on the arc TA inside it: <strong>∠TOA = 2δ</strong>.',
      show: ['OA', 'cTA'],
      hl: ['cTA', 'dT']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'θ = ½(∠TOB − ∠TOA)',
      formula: 'Substitute: θ = β − δ = ½∠TOB − ½∠TOA, so <strong>∠TPB = ½(∠TOB − ∠TOA)</strong>. The angle between a tangent and a secant from an outside point is half the difference of the arcs they cut off. <strong>∎</strong>',
      show: [],
      hl: ['tP', 'cTB', 'cTA']
    }
  ],

  readout: (P) =>
    `∠TPB = ${fmt(angleDeg(P.P, P.T, P.B))}°,  (∠TOB − ∠TOA)/2 = ${fmt((angleDeg(P.O, P.T, P.B) - angleDeg(P.O, P.T, P.A)) / 2)}°`,

  // P well outside the circle, the secant crossing it at two points far apart and below
  // the tangent, the far arc TB under 170° so the central angle is the drawn one, the
  // angles large enough for their marks, everything in the frame
  isValid: (P) => {
    if (!P.A || !P.T) return false;
    const r = dist(P.O, P.T);
    const inFrame = (p) => p.x > 62 && p.x < 498 && p.y > 104 && p.y < 356;
    return dist(P.O, P.P) > r + 60 && dist(P.P, P.A) < dist(P.P, P.B) - 60 &&
      dist(P.T, P.A) > 50 && angleDeg(P.O, P.T, P.B) < 170 && angleDeg(P.A, P.T, P.B) < 85 &&
      angleDeg(P.P, P.T, P.B) > 18 && angleDeg(P.T, P.P, P.A) > 14 &&
      [P.P, P.T, P.A, P.B].every(inFrame);
  }
};

export default tangentSecantAngle;
