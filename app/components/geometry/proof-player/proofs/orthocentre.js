// ===========================================================
// proofs/orthocentre.js — the altitudes meet at the orthocentre
// Gauss's proof: through each vertex draw the parallel to the
// opposite side. The three parallels form a triangle A′B′C′ in
// which A, B, C are the midpoints of the sides (the figure is
// made of parallelograms). Each altitude of ABC is perpendicular
// to a side of A′B′C′ at its midpoint, so the altitudes are the
// perpendicular bisectors of A′B′C′, and those are concurrent.
// Phases: given, construct, mid, perp, concur, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.05 && t < 0.95;
};

const orthocentre = {
  label: 'Orthocentre',
  info:
    'Through each vertex draw the line parallel to the opposite side. The three lines make a ' +
    'larger triangle A′B′C′, built from parallelograms, in which A, B and C are the midpoints ' +
    'of the sides. Each altitude of ABC is perpendicular to a side of the big triangle and ' +
    'passes through its midpoint, so the altitudes are the perpendicular bisectors of A′B′C′, ' +
    'and those meet at one point. Drag any vertex.',
  hint: 'Drag A, B or C; the altitudes, H and the big triangle follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the small triangle, the big one round it, and the labels.
  viewBox: [40, 70, 460, 350],

  model: {
    points: { A: { x: 250, y: 145 }, B: { x: 165, y: 265 }, C: { x: 335, y: 265 } },
    params: {},
    composites: [],
    objects: [
      { id: 'D', type: 'foot', from: 'A', to: ['B', 'C'] },
      { id: 'E', type: 'foot', from: 'B', to: ['C', 'A'] },
      { id: 'F', type: 'foot', from: 'C', to: ['A', 'B'] },
      { id: 'H', type: 'intersection', of: ['A', 'D', 'B', 'E'] },
      // the big triangle: A′ = B + C − A, B′ = C + A − B, C′ = A + B − C
      { id: 'A2', type: 'pointAlongDist', from: 'B', dir: ['A', 'C'], lenOf: ['A', 'C'], label: 'A′' },
      { id: 'B2', type: 'pointAlongDist', from: 'C', dir: ['B', 'A'], lenOf: ['B', 'A'], label: 'B′' },
      { id: 'C2', type: 'pointAlongDist', from: 'A', dir: ['C', 'B'], lenOf: ['C', 'B'], label: 'C′' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'], color: 'alpha' },
      { id: 'BE', type: 'segment', of: ['B', 'E'], color: 'alpha' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'C', to: 'A' },
      { id: 'rE', type: 'rightAngle', at: 'E', from: 'A', to: 'B' },
      { id: 'LA', type: 'line', of: ['B2', 'C2'] },
      { id: 'LB', type: 'line', of: ['C2', 'A2'] },
      { id: 'LC', type: 'line', of: ['A2', 'B2'] },
      { id: 'pBC', type: 'parallel', of: ['B', 'C'], n: 1 },
      { id: 'pB2C2', type: 'parallel', of: ['C2', 'B2'], n: 1 },
      { id: 'pCA', type: 'parallel', of: ['C', 'A'], n: 2 },
      { id: 'pC2A2', type: 'parallel', of: ['A2', 'C2'], n: 2 },
      { id: 'pAB', type: 'parallel', of: ['B', 'A'], n: 3 },
      { id: 'pA2B2', type: 'parallel', of: ['A2', 'B2'], n: 3 },
      { id: 'tC2B', type: 'ticks', of: ['C2', 'B'], n: 1 },
      { id: 'tBA2', type: 'ticks', of: ['B', 'A2'], n: 1 },
      { id: 'tB2A', type: 'ticks', of: ['B2', 'A'], n: 2 },
      { id: 'tAC2', type: 'ticks', of: ['A', 'C2'], n: 2 },
      { id: 'tA2C', type: 'ticks', of: ['A2', 'C'], n: 3 },
      { id: 'tCB2', type: 'ticks', of: ['C', 'B2'], n: 3 },
      { id: 'rA', type: 'rightAngle', at: 'A', from: 'C2', to: 'D' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'A2', to: 'E' },
      { id: 'CF', type: 'segment', of: ['C', 'F'], color: 'beta' },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'B', to: 'C' },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'B2', to: 'F' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two altitudes meet at H',
      formula: 'AD and BE are altitudes of triangle ABC: AD ⟂ BC and BE ⟂ CA. They meet at H. To prove: <strong>the altitude from C passes through H as well</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'D', 'E', 'AD', 'BE', 'rD', 'rE', 'H'],
      hl: ['AD', 'BE', 'H']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Through each vertex, the parallel to the opposite side',
      formula: 'Draw the line through A parallel to BC, through B parallel to CA, and through C parallel to AB. They meet in pairs at A′, B′, C′ and form a larger triangle A′B′C′ around ABC.',
      show: ['A2', 'B2', 'C2', 'LA', 'LB', 'LC', 'pBC', 'pB2C2', 'pCA', 'pC2A2', 'pAB', 'pA2B2'],
      hl: ['LA', 'LB', 'LC']
    },
    {
      phase: 'mid', just: 'Parallelogram sides',
      title: 'A, B, C are the midpoints of the sides of A′B′C′',
      formula: 'ABA′C has both pairs of opposite sides parallel, so it is a parallelogram and BA′ = AC; likewise AC′BC is a parallelogram and C′B = AC. So C′B = BA′: B is the midpoint of C′A′. In the same way A is the midpoint of B′C′ and C the midpoint of A′B′.',
      show: ['tC2B', 'tBA2', 'tB2A', 'tAC2', 'tA2C', 'tCB2'],
      hl: ['tC2B', 'tBA2', 'tB2A', 'tAC2', 'tA2C', 'tCB2']
    },
    {
      phase: 'perp', just: 'Perpendicular to parallels',
      title: 'The altitudes are perpendicular bisectors of A′B′C′',
      formula: 'BE ⟂ CA, and C′A′ ∥ CA, so BE ⟂ C′A′; and BE passes through B, the midpoint of C′A′. So the line BE is the perpendicular bisector of C′A′. In the same way AD is the perpendicular bisector of B′C′.',
      show: ['rA', 'rB'],
      hl: ['AD', 'BE', 'rA', 'rB']
    },
    {
      phase: 'concur', just: 'Circumcentre',
      title: 'Perpendicular bisectors meet at one point',
      formula: 'The perpendicular bisectors of a triangle meet at one point, its circumcentre. For A′B′C′ two of them are the lines AD and BE, which meet at H; so the third, the perpendicular bisector of A′B′, passes through H too.',
      show: [],
      hl: ['AD', 'BE', 'H', 'LC']
    },
    {
      phase: 'conclude', just: 'Same line',
      title: 'The third altitude passes through H',
      formula: 'The perpendicular bisector of A′B′ is the line through its midpoint C perpendicular to A′B′, and A′B′ ∥ AB, so it is the line through C perpendicular to AB: the altitude CF. It passes through H, so all three altitudes meet at H, the orthocentre. <strong>∎</strong>',
      show: ['F', 'CF', 'rF', 'rC'],
      hl: ['CF', 'H']
    }
  ],

  readout: (P) => {
    const ux = P.H.x - P.C.x;
    const uy = P.H.y - P.C.y;
    const vx = P.B.x - P.A.x;
    const vy = P.B.y - P.A.y;
    const cos = Math.abs(ux * vx + uy * vy) / ((Math.hypot(ux, uy) * Math.hypot(vx, vy)) || 1);
    const ang = (Math.acos(Math.min(1, cos)) * 180) / Math.PI;
    return `angle between CH and AB: ${fmt(ang)}°`;
  },

  // an acute triangle (feet on the sides), with the big triangle inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 6000 &&
    between(P.D, P.B, P.C) && between(P.E, P.C, P.A) && between(P.F, P.A, P.B) &&
    [P.A2, P.B2, P.C2].every((p) => p.x > 55 && p.x < 485 && p.y > 85 && p.y < 405)
};

export default orthocentre;
