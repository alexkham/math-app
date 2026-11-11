// ===========================================================
// proofs/squareDiagonals.js — the diagonals of a square are
// equal, perpendicular, bisect each other, make 45° with the
// sides, and have length side · √2.
// Each diagonal cuts the square into two isosceles right
// triangles (base angles 45°); SAS gives AC = BD; the triangles
// around O have two 45° angles, so a right angle at O and two
// equal sides. D is the perpendicular to AB at A, C = D + (B − A).
// Phases: given, half, equal, perpendicular, bisect, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const squareDiagonals = {
  label: 'Square diagonals',
  info:
    'The diagonal AC cuts the square into two isosceles right triangles, so it meets the sides at ' +
    '45°. The triangles ABC and BAD are congruent by SAS, so AC = BD. In the triangle OAB the angles ' +
    'at A and B are both 45°, so the angle at O is 90° and OA = OB; the same around O gives ' +
    'OA = OB = OC = OD. By Pythagoras AC = AB · √2. Drag A or B.',
  hint: 'Drag A or B to turn and resize the square',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the square and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 170, y: 310 }, B: { x: 370, y: 310 } },
    params: {},
    composites: [],
    objects: [
      { id: 'D', type: 'perpAlongDist', from: 'A', dir: ['A', 'B'], lenOf: ['A', 'B'], side: 1 },
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 1 },
      { id: 'O', type: 'intersection', of: ['A', 'C', 'B', 'D'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'tCD', type: 'ticks', of: ['C', 'D'], n: 1 },
      { id: 'tDA', type: 'ticks', of: ['D', 'A'], n: 1 },
      { id: 'rA', type: 'rightAngle', at: 'A', from: 'B', to: 'D' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'C', to: 'A' },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'D', to: 'B' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'A', to: 'C' },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'pABC', type: 'polygon', of: ['A', 'B', 'C'], color: 'alpha' },
      { id: 'fA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'φ' },
      { id: 'fC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'alpha', label: 'φ' },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'pBAD', type: 'polygon', of: ['B', 'A', 'D'], color: 'beta' },
      { id: 'fB', type: 'angle', at: 'B', from: 'D', to: 'A', color: 'beta', label: 'φ' },
      { id: 'pOAB', type: 'polygon', of: ['O', 'A', 'B'], color: 'gamma' },
      { id: 'rO', type: 'rightAngle', at: 'O', from: 'A', to: 'B' },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 2 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 2 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 2 },
      { id: 'tOD', type: 'ticks', of: ['O', 'D'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A square',
      formula: 'ABCD is a square: four equal sides (one tick each) and four right angles. To prove: its diagonals AC and BD are <strong>equal</strong>, <strong>perpendicular</strong>, <strong>bisect each other</strong>, make <strong>45°</strong> with the sides, and are <strong>√2 times the side</strong>.',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'tAB', 'tBC', 'tCD', 'tDA', 'rA', 'rB', 'rC', 'rD'],
      hl: ['rA', 'rB', 'rC', 'rD']
    },
    {
      phase: 'half', just: 'Isosceles base angles',
      title: 'The diagonal meets the sides at 45°',
      formula: 'The diagonal AC cuts off the triangle ABC with AB = BC and a right angle at B. It is isosceles, so its base angles at A and C are equal, φ each, and the angle sum gives 2φ + 90° = 180°: <strong>φ = 45°</strong>. The diagonal halves the right angles at A and C.',
      show: ['AC', 'pABC', 'fA', 'fC'],
      hl: ['pABC', 'fA', 'fC']
    },
    {
      phase: 'equal', just: 'SAS',
      title: 'AC = BD',
      formula: 'Draw the other diagonal BD. The triangles ABC and BAD have the common side AB, BC = AD, and right angles at B and A between them. By SAS they are congruent, so <strong>AC = BD</strong>. The same argument as before gives ∠ABD = 45°.',
      show: ['BD', 'pBAD', 'fB'],
      hl: ['pABC', 'pBAD']
    },
    {
      phase: 'perpendicular', just: 'Angle sum',
      title: 'The diagonals meet at 90°',
      formula: 'The diagonals cross at O. In the triangle OAB the angles at A and B are both 45° (∠OAB = ∠CAB and ∠OBA = ∠DBA), so the angle at O is 180° − 45° − 45° = <strong>90°</strong>: the diagonals are perpendicular.',
      show: ['O', 'pOAB', 'rO'],
      hl: ['pOAB', 'rO', 'fA', 'fB']
    },
    {
      phase: 'bisect', just: 'Equal angles, equal sides',
      title: 'OA = OB = OC = OD',
      formula: 'The triangle OAB has equal angles at A and B, so the sides facing them are equal: OA = OB. Every one of the four triangles around O has two 45° angles in the same way, so <strong>OA = OB = OC = OD</strong> (two ticks each): the diagonals bisect each other.',
      show: ['tOA', 'tOB', 'tOC', 'tOD'],
      hl: ['tOA', 'tOB', 'tOC', 'tOD']
    },
    {
      phase: 'conclude', just: 'Pythagorean theorem',
      title: 'AC = AB · √2',
      formula: 'In the right triangle ABC, AC² = AB² + BC² = 2 · AB², so <strong>AC = AB · √2</strong>, and BD too. The diagonals of a square are equal, perpendicular, bisect each other, meet the sides at 45° and are √2 times the side. <strong>∎</strong>',
      show: [],
      hl: ['AC', 'BD']
    }
  ],

  readout: (P) =>
    `AC = ${fmt(dist(P.A, P.C) / UNIT, 2)},  BD = ${fmt(dist(P.B, P.D) / UNIT, 2)},  AB·√2 = ${fmt((dist(P.A, P.B) / UNIT) * Math.SQRT2, 2)},  ∠AOB = ${fmt(angleDeg(P.O, P.A, P.B), 0)}°`,

  // a square big enough for the marks, entirely in the frame
  isValid: (P) => {
    if (!P.C || !P.D) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    return [P.A, P.B, P.C, P.D].every(inFrame) && dist(P.A, P.B) > 110;
  }
};

export default squareDiagonals;
