// ===========================================================
// proofs/triangle306090.js — the 30-60-90 triangle. In a right
// triangle with a 30° angle the side opposite it is half the
// hypotenuse, and the other leg is half the hypotenuse times √3.
// Reflect B in the line AC to B′: SAS makes ABB′ a triangle with
// three 60° angles, so it is equilateral, BB′ = AB and BC = AB/2;
// Pythagoras gives AC. B is on the perpendicular at C with
// CB = CA/√3, so the angle at A stays 30°.
// Phases: given, reflect, sas, equilateral, half, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const triangle306090 = {
  label: '30-60-90 triangle',
  info:
    'Reflect B in the leg AC to B′. The triangles ACB and ACB′ are congruent (SAS), so the angle at A ' +
    'doubles to 60° and the angle at B′ is 60° like the angle at B: ABB′ has three 60° angles, so it ' +
    'is equilateral. Then BB′ = AB and BC = BB′/2 = AB/2, and Pythagoras gives AC = AB·√3/2. ' +
    'Drag A or C.',
  hint: 'Drag A or C to turn and resize the triangle',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle, its mirror image and the labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { C: { x: 170, y: 210 }, A: { x: 395, y: 210 } },
    params: {},
    composites: [],
    objects: [
      // B on the perpendicular to CA at C with CB = CA / √3, so ∠A = 30°
      { id: 'B', type: 'perpAlongDist', from: 'C', dir: ['C', 'A'], lenOf: ['C', 'A'], scale: 0.5773502692, side: 1 },
      // B′: the mirror image of B in the line AC
      { id: 'B2', type: 'pointAlongDist', from: 'C', dir: ['B', 'C'], lenOf: ['B', 'C'], scale: 1, label: 'B′' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'A', to: 'B' },
      { id: 'aA', type: 'angle', at: 'A', from: 'C', to: 'B', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'A', to: 'C', color: 'beta', label: 'β' },
      { id: 'CB2', type: 'segment', of: ['C', 'B2'] },
      { id: 'AB2', type: 'segment', of: ['A', 'B2'] },
      { id: 'tCB', type: 'ticks', of: ['C', 'B'], n: 1 },
      { id: 'tCB2', type: 'ticks', of: ['C', 'B2'], n: 1 },
      { id: 'pACB', type: 'polygon', of: ['A', 'C', 'B'], color: 'alpha' },
      { id: 'pACB2', type: 'polygon', of: ['A', 'C', 'B2'], color: 'beta' },
      { id: 'aA2', type: 'angle', at: 'A', from: 'B2', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB2', type: 'angle', at: 'B2', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 2 },
      { id: 'tAB2', type: 'ticks', of: ['A', 'B2'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A right triangle with angles 30° and 60°',
      formula: 'ABC has a right angle at C, the angle α = 30° at A and the angle β = 60° at B. To prove: <strong>BC = AB/2</strong>, the side opposite 30° is half the hypotenuse, and <strong>AC = AB · √3/2</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'rC', 'aA', 'bB'],
      hl: ['aA', 'bB', 'rC']
    },
    {
      phase: 'reflect', just: 'Construction',
      title: 'Reflect B in AC to B′',
      formula: 'Extend BC beyond C to the point B′ with CB′ = CB (one tick each), and join A to B′. Since the angle at C is right, B′ is the mirror image of B in the line AC, and B, C, B′ lie on one line.',
      show: ['B2', 'CB2', 'AB2', 'tCB', 'tCB2'],
      hl: ['CB2', 'AB2']
    },
    {
      phase: 'sas', just: 'SAS',
      title: 'ACB ≅ ACB′',
      formula: 'The triangles ACB and ACB′ share AC, have CB = CB′, and have right angles at C between those sides. By SAS they are congruent, so AB′ = AB, the angle CAB′ is α = 30° and the angle at B′ is β = 60°.',
      show: ['pACB', 'pACB2', 'aA2', 'bB2'],
      hl: ['pACB', 'pACB2', 'aA2', 'bB2']
    },
    {
      phase: 'equilateral', just: 'Equilateral triangle',
      title: 'ABB′ is equilateral',
      formula: 'In the big triangle ABB′ the angle at A is α + α = 60°, and the angles at B and B′ are both 60°. A triangle with three equal angles is equilateral: <strong>AB = BB′ = AB′</strong> (two ticks on AB and AB′).',
      show: ['tAB', 'tAB2'],
      hl: ['AB', 'AB2', 'aA', 'aA2', 'bB', 'bB2']
    },
    {
      phase: 'half', just: 'Halving',
      title: 'BC = AB/2',
      formula: 'C is the midpoint of BB′, so BC = BB′/2, and BB′ = AB. So <strong>BC = AB/2</strong>: the side opposite the 30° angle is half the hypotenuse.',
      show: [],
      hl: ['BC', 'tCB', 'tCB2']
    },
    {
      phase: 'conclude', just: 'Pythagorean theorem',
      title: 'AC = AB · √3/2',
      formula: 'In the right triangle ABC, AC² = AB² − BC² = AB² − AB²/4 = 3AB²/4, so <strong>AC = AB · √3/2</strong>. The sides of a 30-60-90 triangle are in the ratio <strong>1 : √3 : 2</strong>. <strong>∎</strong>',
      show: [],
      hl: ['CA', 'AB']
    }
  ],

  readout: (P) => {
    const ab = dist(P.A, P.B) / UNIT;
    return `BC = ${fmt(dist(P.B, P.C) / UNIT, 2)},  AB/2 = ${fmt(ab / 2, 2)},  AC = ${fmt(dist(P.A, P.C) / UNIT, 2)},  AB·√3/2 = ${fmt((ab * Math.sqrt(3)) / 2, 2)},  ∠A = ${fmt(angleDeg(P.A, P.C, P.B), 0)}°`;
  },

  // a triangle big enough for the marks, it and its mirror image in the frame
  isValid: (P) => {
    if (!P.B || !P.B2) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    return [P.A, P.B, P.C, P.B2].every(inFrame) && dist(P.C, P.A) > 150;
  }
};

export default triangle306090;
