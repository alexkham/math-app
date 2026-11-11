// ===========================================================
// proofs/isoscelesTrapezoid.js — the isosceles trapezoid
// If AB ∥ DC and the legs AD = BC, then the base angles are
// equal (∠A = ∠B) and the diagonals are equal (AC = BD).
// Through C draw the parallel to AD; AECD is a parallelogram,
// so CE = AD = BC and EBC is isosceles; corresponding angles
// move its base angle at E to A. Then SAS on DAB and CBA.
// C is the mirror image of D in the perpendicular bisector of
// AB, built as D + 2(M − F) with F the foot of D and M the
// midpoint of AB; E = C + (A − D).
// Phases: given, parallel, isosceles, corresponding, angles, diagonals
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const isoscelesTrapezoid = {
  label: 'Isosceles trapezoid',
  info:
    'AB ∥ DC and the legs AD = BC. Through C draw the parallel to AD, meeting AB at E: AECD is ' +
    'a parallelogram, so CE = AD = BC and the triangle EBC is isosceles with equal base angles at ' +
    'E and B. The angle at E equals the angle at A (corresponding angles on the parallels CE and ' +
    'DA), so ∠A = ∠B. Then SAS on the triangles DAB and CBA gives AC = BD. Drag D (C follows ' +
    'symmetrically), or A or B.',
  hint: 'Drag D to reshape the trapezoid (C follows), or A or B',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the trapezoid and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 110, y: 320 }, B: { x: 450, y: 320 }, D: { x: 190, y: 160 } },
    params: {},
    composites: [],
    objects: [
      // F (never shown): the foot of D on AB; M (never shown): the midpoint of AB;
      // C = D + 2(M − F) is the mirror image of D, so DC ∥ AB and BC = AD
      { id: 'F', type: 'foot', from: 'D', to: ['A', 'B'] },
      { id: 'M', type: 'midpoint', of: ['A', 'B'] },
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['F', 'M'], lenOf: ['F', 'M'], scale: 2 },
      // E = C + (A − D): on AB, with CE ∥ DA
      { id: 'E', type: 'pointAlongDist', from: 'C', dir: ['D', 'A'], lenOf: ['D', 'A'], scale: 1 },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tDA', type: 'ticks', of: ['D', 'A'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'mAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'mDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'CE', type: 'segment', of: ['C', 'E'] },
      { id: 'mCE', type: 'parallel', of: ['E', 'C'], n: 2 },
      { id: 'mDA', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'pAECD', type: 'polygon', of: ['A', 'E', 'C', 'D'], color: 'alpha' },
      { id: 'tCE', type: 'ticks', of: ['C', 'E'], n: 1 },
      { id: 'pEBC', type: 'polygon', of: ['E', 'B', 'C'], color: 'gamma' },
      { id: 'bE', type: 'angle', at: 'E', from: 'B', to: 'C', color: 'beta', label: 'β' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'bA', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'beta', label: 'β' },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A trapezoid with equal legs',
      formula: 'ABCD is a trapezoid: AB ∥ DC (the chevrons), and its legs are equal, AD = BC (the ticks). To prove: <strong>∠DAB = ∠CBA</strong> (the base angles are equal) and <strong>AC = BD</strong> (the diagonals are equal).',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'tDA', 'tBC', 'mAB', 'mDC'],
      hl: ['tDA', 'tBC']
    },
    {
      phase: 'parallel', just: 'Parallelogram',
      title: 'CE ∥ AD gives CE = AD = BC',
      formula: 'Through C draw the parallel to AD; it meets the base AB at E. In AECD both pairs of opposite sides are parallel (AE ∥ DC and EC ∥ AD), so it is a parallelogram and its opposite sides are equal: CE = AD. Since AD = BC, also <strong>CE = BC</strong>.',
      show: ['E', 'CE', 'mCE', 'mDA', 'pAECD', 'tCE'],
      hl: ['pAECD', 'CE']
    },
    {
      phase: 'isosceles', just: 'Isosceles base angles',
      title: '∠CEB = ∠CBE',
      formula: 'The triangle EBC has two equal sides, CE = CB, so it is isosceles and its base angles are equal: <strong>∠CEB = ∠CBE = β</strong>.',
      show: ['pEBC', 'bE', 'bB'],
      hl: ['pEBC', 'bE', 'bB']
    },
    {
      phase: 'corresponding', just: 'Parallel lines',
      title: '∠DAB = ∠CEB',
      formula: 'The lines DA and CE are parallel and AB is a transversal, so the corresponding angles are equal: <strong>∠DAB = ∠CEB = β</strong>.',
      show: ['bA'],
      hl: ['bA', 'bE']
    },
    {
      phase: 'angles', just: 'Combining',
      title: '∠DAB = ∠CBA: the base angles are equal',
      formula: '∠DAB = ∠CEB and ∠CEB = ∠CBA, so <strong>∠DAB = ∠CBA = β</strong>. The angles at the other base follow: ∠ADC = ∠BCD = 180° − β, since each is co-interior with a base angle between the parallels.',
      show: [],
      hl: ['bA', 'bB']
    },
    {
      phase: 'diagonals', just: 'SAS',
      title: 'AC = BD: the diagonals are equal',
      formula: 'Draw the diagonals. The triangles DAB and CBA have AD = BC, the common side AB, and the included angles ∠DAB = ∠CBA. By SAS they are congruent, and the sides opposite the equal angles are equal: <strong>BD = AC</strong>. <strong>∎</strong>',
      show: ['AC', 'BD'],
      hl: ['AC', 'BD']
    }
  ],

  readout: (P) =>
    `∠A = ${fmt(angleDeg(P.A, P.B, P.D), 0)}°,  ∠B = ${fmt(angleDeg(P.B, P.A, P.C), 0)}°,  AC = ${fmt(dist(P.A, P.C) / UNIT, 2)},  BD = ${fmt(dist(P.B, P.D) / UNIT, 2)}`,

  // D above AB with its foot between A and the midpoint (so DC is the shorter base
  // and E lies inside AB), legs and height long enough, everything in the frame
  isValid: (P) => {
    if (!P.C || !P.E) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const above = cross(P.A, P.B, P.D) < 0;
    const along = (P.F.x - P.A.x) * (P.B.x - P.A.x) + (P.F.y - P.A.y) * (P.B.y - P.A.y);
    return [P.A, P.B, P.C, P.D].every(inFrame) && above && along > 0 &&
      dist(P.A, P.F) > 25 && dist(P.F, P.M) > 35 && dist(P.D, P.F) > 60 && dist(P.A, P.B) > 200;
  }
};

export default isoscelesTrapezoid;
