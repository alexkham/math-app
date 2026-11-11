// ===========================================================
// proofs/anglesAroundPoint.js
// The angles around a point add up to 360°: four rays OA, OB,
// OC, OD make α, β, γ, δ. Extend AO beyond O to A′; the line
// AA′ cuts the angles into two straight angles, one on each
// side: α + β + γ₁ = 180° and γ₂ + δ = 180°, with γ = γ₁ + γ₂.
// Phases: given, extend, upper, lower, add, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const anglesAroundPoint = {
  label: 'Angles around a point',
  info:
    'Four rays from O make the angles α, β, γ, δ all the way round. Extend AO beyond O to A′: ' +
    'the line AA′ splits the full turn into two straight angles. On one side α + β + γ₁ = 180°, ' +
    'on the other γ₂ + δ = 180°, and γ₁ + γ₂ = γ, so α + β + γ + δ = 360°. Drag any of A, B, C, D ' +
    'round O.',
  hint: 'Drag A, B, C or D round O (keep them in order), or O itself',
  labelCenter: ['O'],
  // Frame for the rays and their labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: {
      O: { x: 280, y: 225 }, A: { x: 280, y: 85 }, B: { x: 430, y: 170 },
      C: { x: 385, y: 345 }, D: { x: 140, y: 305 }
    },
    params: {},
    composites: [],
    objects: [
      // A′: the ray AO continued beyond O
      { id: 'A2', type: 'pointAlongDist', from: 'O', dir: ['A', 'O'], lenOf: ['O', 'A'], scale: 0.85, label: 'A′' },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'OD', type: 'segment', of: ['O', 'D'] },
      { id: 'aAOB', type: 'angle', at: 'O', from: 'A', to: 'B', color: 'alpha', label: 'α' },
      { id: 'bBOC', type: 'angle', at: 'O', from: 'B', to: 'C', color: 'beta', label: 'β' },
      { id: 'cCOD', type: 'angle', at: 'O', from: 'C', to: 'D', color: 'gamma', label: 'γ', radius: 62 },
      { id: 'dDOA', type: 'angle', at: 'O', from: 'D', to: 'A', color: 'delta', label: 'δ' },
      { id: 'OA2', type: 'line', of: ['O', 'A2'] },
      { id: 'c1', type: 'angle', at: 'O', from: 'C', to: 'A2', color: 'gamma', label: 'γ₁', radius: 30 },
      { id: 'c2', type: 'angle', at: 'O', from: 'A2', to: 'D', color: 'gamma', label: 'γ₂', radius: 30 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Four angles around a point',
      formula: 'Four rays OA, OB, OC, OD go out from the point O, in that order round it, and cut the plane around O into the angles α = ∠AOB, β = ∠BOC, γ = ∠COD and δ = ∠DOA. To prove: <strong>α + β + γ + δ = 360°</strong>, the angles around a point make a full turn.',
      show: ['O', 'A', 'B', 'C', 'D', 'OA', 'OB', 'OC', 'OD', 'aAOB', 'bBOC', 'cCOD', 'dDOA'],
      hl: ['aAOB', 'bBOC', 'cCOD', 'dDOA']
    },
    {
      phase: 'extend', just: 'Construction',
      title: 'Extend AO to A′',
      formula: 'Continue the ray AO beyond O to a point A′ (dashed). The points A, O, A′ lie on one straight line, which passes through the angle γ and cuts it into two parts: γ₁ = ∠COA′ and γ₂ = ∠A′OD, with γ₁ + γ₂ = γ.',
      show: ['A2', 'OA2', 'c1', 'c2'],
      hl: ['OA2', 'c1', 'c2']
    },
    {
      phase: 'upper', just: 'Straight angle',
      title: 'α + β + γ₁ = 180°',
      formula: 'On one side of the line AA′ the angles α, β and γ₁ lie side by side from the ray OA round to the ray OA′, and together they fill the straight angle AOA′: <strong>α + β + γ₁ = 180°</strong>.',
      show: [],
      hl: ['aAOB', 'bBOC', 'c1']
    },
    {
      phase: 'lower', just: 'Straight angle',
      title: 'γ₂ + δ = 180°',
      formula: 'On the other side of the line the angles γ₂ and δ fill the other straight angle from OA′ round to OA: <strong>γ₂ + δ = 180°</strong>.',
      show: [],
      hl: ['c2', 'dDOA']
    },
    {
      phase: 'add', just: 'Adding',
      title: 'α + β + (γ₁ + γ₂) + δ = 360°',
      formula: 'Add the two straight angles: α + β + γ₁ + γ₂ + δ = 180° + 180° = 360°, and γ₁ + γ₂ = γ, since the line AA′ only cut the angle γ into two pieces.',
      show: [],
      hl: ['aAOB', 'bBOC', 'cCOD', 'dDOA']
    },
    {
      phase: 'conclude', just: 'Substituting',
      title: 'α + β + γ + δ = 360°',
      formula: 'So <strong>α + β + γ + δ = 360°</strong>. Nothing used the number four: any number of rays from a point make angles that add up to two straight angles, 360°. <strong>∎</strong>',
      show: [],
      hl: ['aAOB', 'bBOC', 'cCOD', 'dDOA']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.O, P.A, P.B);
    const b = angleDeg(P.O, P.B, P.C);
    const c = angleDeg(P.O, P.C, P.D);
    const d = angleDeg(P.O, P.D, P.A);
    return `α = ${fmt(a, 0)}°,  β = ${fmt(b, 0)}°,  γ = ${fmt(c, 0)}°,  δ = ${fmt(d, 0)}°,  sum = ${fmt(a + b + c + d, 0)}°`;
  },

  // the rays in order round O (each angle under 180° and the four adding to 360°),
  // every angle at least 18°, the extension inside γ, everything in the frame
  isValid: (P) => {
    if (!P.A2) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    const a = angleDeg(P.O, P.A, P.B);
    const b = angleDeg(P.O, P.B, P.C);
    const c = angleDeg(P.O, P.C, P.D);
    const d = angleDeg(P.O, P.D, P.A);
    const split = angleDeg(P.O, P.C, P.A2) + angleDeg(P.O, P.A2, P.D);
    return [P.O, P.A, P.B, P.C, P.D, P.A2].every(inFrame) &&
      [P.A, P.B, P.C, P.D].every((p) => dist(P.O, p) > 80) &&
      Math.abs(a + b + c + d - 360) < 0.01 && Math.min(a, b, c, d) > 18 &&
      Math.abs(split - c) < 0.01 && angleDeg(P.O, P.C, P.A2) > 12 && angleDeg(P.O, P.A2, P.D) > 12;
  }
};

export default anglesAroundPoint;
