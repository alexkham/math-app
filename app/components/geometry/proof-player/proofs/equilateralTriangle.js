// ===========================================================
// proofs/equilateralTriangle.js — the angles of an equilateral
// triangle are all 60°, and an equiangular triangle is
// equilateral. Isosceles base angles twice give α = β = γ, the
// angle sum gives 60°; the converse uses equal angles facing
// equal sides. C is B turned about A by −60° (rotateDeg).
// Phases: given, first, second, equal, sum, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const equilateralTriangle = {
  label: 'Equilateral triangle',
  info:
    'AB = AC makes the triangle isosceles with apex A, so the angles at B and C are equal; BA = BC ' +
    'makes it isosceles with apex B, so the angles at A and C are equal. All three angles are equal ' +
    'and add up to 180°, so each is 60°. Conversely, if the three angles are equal, the sides facing ' +
    'them are equal. Drag A or B.',
  hint: 'Drag A or B to turn and resize the triangle',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 160, y: 300 }, B: { x: 400, y: 300 } },
    params: {},
    composites: [],
    objects: [
      { id: 'C', type: 'rotateDeg', about: 'A', of: 'B', deg: -60 },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'tCA', type: 'ticks', of: ['C', 'A'], n: 1 },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'cC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'gamma', label: 'γ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A triangle with three equal sides',
      formula: 'ABC is equilateral: AB = BC = CA (one tick each). Its angles are α at A, β at B and γ at C. To prove: <strong>α = β = γ = 60°</strong>, and conversely a triangle with three equal angles has three equal sides.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'tAB', 'tBC', 'tCA', 'aA', 'bB', 'cC'],
      hl: ['tAB', 'tBC', 'tCA']
    },
    {
      phase: 'first', just: 'Isosceles base angles',
      title: 'AB = AC gives β = γ',
      formula: 'Look at the triangle as isosceles with apex A: the sides AB and AC are equal. The base angles, opposite these sides, are equal: <strong>β = γ</strong>.',
      show: [],
      hl: ['AB', 'CA', 'bB', 'cC']
    },
    {
      phase: 'second', just: 'Isosceles base angles',
      title: 'BA = BC gives α = γ',
      formula: 'Now look at it as isosceles with apex B: the sides BA and BC are equal, so the base angles at A and C are equal: <strong>α = γ</strong>.',
      show: [],
      hl: ['AB', 'BC', 'aA', 'cC']
    },
    {
      phase: 'equal', just: 'Combining',
      title: 'α = β = γ',
      formula: 'β = γ and α = γ, so all three angles are equal: <strong>α = β = γ</strong>. An equilateral triangle is equiangular.',
      show: [],
      hl: ['aA', 'bB', 'cC']
    },
    {
      phase: 'sum', just: 'Angle sum',
      title: 'Each angle is 60°',
      formula: 'The angles of a triangle add up to 180°: α + β + γ = 3α = 180°, so <strong>α = β = γ = 60°</strong>.',
      show: [],
      hl: ['aA', 'bB', 'cC']
    },
    {
      phase: 'conclude', just: 'Equal angles, equal sides',
      title: 'Conversely: equal angles give equal sides',
      formula: 'If a triangle has α = β = γ, then α = β means the sides facing them, BC and CA, are equal, and β = γ means CA = AB (in a triangle equal angles face equal sides; otherwise the larger side would face the larger angle). So <strong>a triangle is equilateral exactly when it is equiangular</strong>, with all angles 60°. <strong>∎</strong>',
      show: [],
      hl: ['tAB', 'tBC', 'tCA', 'aA', 'bB', 'cC']
    }
  ],

  readout: (P) =>
    `α = ${fmt(angleDeg(P.A, P.B, P.C), 0)}°,  β = ${fmt(angleDeg(P.B, P.C, P.A), 0)}°,  γ = ${fmt(angleDeg(P.C, P.A, P.B), 0)}°,  AB = BC = CA = ${fmt(dist(P.A, P.B) / UNIT, 2)}`,

  // a triangle big enough for the marks, entirely in the frame
  isValid: (P) => {
    if (!P.C) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    return [P.A, P.B, P.C].every(inFrame) && dist(P.A, P.B) > 120;
  }
};

export default equilateralTriangle;
