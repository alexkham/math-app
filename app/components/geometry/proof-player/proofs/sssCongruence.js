// ===========================================================
// proofs/sssCongruence.js — the SSS criterion from SAS
// Two triangles with three pairs of equal sides are congruent.
// Philo's proof: place the second triangle on the common side
// AB, on the other side of it, as ABD. Then ACD and BCD are
// isosceles, so the base angles at C and D agree in pairs, and
// adding gives ∠ACB = ∠ADB; SAS finishes the job.
// Phases: given, join, iso1, iso2, add, conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.08 && t < 0.92;
};

const sssCongruence = {
  label: 'SSS congruence',
  info:
    'Put the second triangle on the first one’s side AB, on the far side, as ABD with AD = AC and ' +
    'BD = BC. Join C to D. Triangle ACD is isosceles, so its base angles at C and D are equal; so ' +
    'is BCD. Adding the two pairs gives ∠ACB = ∠ADB, and then AC = AD, CB = DB with the equal ' +
    'angle between them make the triangles congruent by SAS. Drag any vertex.',
  hint: 'Drag A, B or C; the copy D follows',
  labelCenter: ['A', 'B'],
  // Frame for the two triangles on either side of AB.
  viewBox: [60, 60, 440, 340],

  model: {
    points: { A: { x: 110, y: 230 }, B: { x: 410, y: 230 }, C: { x: 240, y: 90 } },
    params: {},
    composites: [],
    objects: [
      // D: the second triangle's third vertex, placed on the far side of AB
      { id: 'F', type: 'foot', from: 'C', to: ['A', 'B'] },
      { id: 'D', type: 'pointAlongDist', from: 'F', dir: ['C', 'F'], lenOf: ['C', 'F'] },
      { id: 'T1', type: 'polygon', of: ['A', 'B', 'C'], color: 'alpha' },
      { id: 'T2', type: 'polygon', of: ['A', 'B', 'D'], color: 'beta' },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tCA', type: 'ticks', of: ['C', 'A'], n: 1 },
      { id: 'tDA', type: 'ticks', of: ['D', 'A'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 2 },
      { id: 'tBD', type: 'ticks', of: ['B', 'D'], n: 2 },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'aC', type: 'angle', at: 'C', from: 'A', to: 'D', color: 'alpha', label: 'α' },
      { id: 'aD', type: 'angle', at: 'D', from: 'C', to: 'A', color: 'alpha', label: 'α' },
      { id: 'bC', type: 'angle', at: 'C', from: 'D', to: 'B', color: 'beta', label: 'β' },
      { id: 'bD', type: 'angle', at: 'D', from: 'B', to: 'C', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two triangles with three equal sides, base to base',
      formula: 'ABC and ABD have AB in common, AC = AD (one tick each) and BC = BD (two ticks each). ABD is the second triangle of the theorem, moved so that its side equal to AB lies on AB, on the far side. To prove: <strong>ABC ≅ ABD</strong>.',
      show: ['A', 'B', 'C', 'D', 'T1', 'T2', 'AB', 'BC', 'CA', 'BD', 'DA', 'tCA', 'tDA', 'tBC', 'tBD'],
      hl: ['CA', 'DA', 'BC', 'BD']
    },
    {
      phase: 'join', just: 'Construction',
      title: 'Join C to D',
      formula: 'The segment CD crosses AB and splits each of the two triangles. It also makes two new triangles that straddle AB: ACD, with AC = AD, and BCD, with BC = BD. Both are isosceles.',
      show: ['CD'],
      hl: ['CD']
    },
    {
      phase: 'iso1', just: 'Isosceles base angles',
      title: '∠ACD = ∠ADC = <i>α</i>',
      formula: 'In triangle ACD the sides AC and AD are equal, so the base angles at C and at D are equal.',
      show: ['aC', 'aD'],
      hl: ['aC', 'aD', 'tCA', 'tDA']
    },
    {
      phase: 'iso2', just: 'Isosceles base angles',
      title: '∠BCD = ∠BDC = <i>β</i>',
      formula: 'In triangle BCD the sides BC and BD are equal, so the base angles at C and at D are equal too.',
      show: ['bC', 'bD'],
      hl: ['bC', 'bD', 'tBC', 'tBD']
    },
    {
      phase: 'add', just: 'Adding the parts',
      title: '∠ACB = ∠ADB',
      formula: 'CD runs inside both angles, so ∠ACB = <i>α</i> + <i>β</i> and ∠ADB = <i>α</i> + <i>β</i>: the angles at C and at D are equal.',
      show: [],
      hl: ['aC', 'bC', 'aD', 'bD']
    },
    {
      phase: 'conclude', just: 'SAS congruence',
      title: 'ABC ≅ ABD',
      formula: 'AC = AD, CB = DB, and the angles between those sides, at C and at D, have just been shown equal. Two sides and the included angle: the triangles are congruent by SAS. Since ABD is a copy of the second triangle, the two given triangles are congruent. <strong>∎</strong>',
      show: [],
      hl: ['T1', 'T2']
    }
  ],

  readout: (P) => {
    const c = angleDeg(P.C, P.A, P.B);
    const d = angleDeg(P.D, P.A, P.B);
    return `∠ACB = ${fmt(c)}°,  ∠ADB = ${fmt(d)}°`;
  },

  // CD must cross AB between A and B (acute angles at A and B), figure inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 && between(P.F, P.A, P.B) &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 388)
};

export default sssCongruence;
