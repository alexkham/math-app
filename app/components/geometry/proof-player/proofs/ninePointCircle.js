// ===========================================================
// proofs/ninePointCircle.js — the nine-point circle
// The midpoints D, E, F of the sides, the feet Ha, Hb, Hc of the
// altitudes and the midpoints P, Q, R of AH, BH, CH lie on one
// circle. EFQR and DEPQ are rectangles (midsegments parallel to
// a side and to the altitude perpendicular to it) sharing the
// diagonal EQ, so six points lie on the circle with diameter
// EQ; each foot sees a diameter at a right angle (converse of
// Thales); the centre N is the midpoint of OH and the radius is
// half the circumradius (parallelograms ODHP and OAPD).
// Phases: given, rect1, circle1, rect2, feet, centre, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.05 && t < 0.95;
};

const ninePointCircle = {
  label: 'Nine-point circle',
  info:
    'Midsegments make EFQR a rectangle: EF and QR are parallel to BC, FQ and ER to the altitude ' +
    'AH, which is perpendicular to BC. Its diagonal EQ is a diameter of a circle through E, F, ' +
    'Q, R. The rectangle DEPQ has the same diagonal, so D and P are on that circle too; each ' +
    'foot of an altitude sees a diameter at a right angle, so the feet are on it as well. The ' +
    'centre is the midpoint of OH and the radius is half the circumradius. Drag any vertex.',
  hint: 'Drag A, B or C; the nine points, the circle, O and H follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [50, 50, 440, 320],

  model: {
    points: { A: { x: 280, y: 90 }, B: { x: 120, y: 330 }, C: { x: 420, y: 330 } },
    params: {},
    composites: [],
    objects: [
      { id: 'Ha', type: 'foot', from: 'A', to: ['B', 'C'] },
      { id: 'Hb', type: 'foot', from: 'B', to: ['C', 'A'] },
      { id: 'Hc', type: 'foot', from: 'C', to: ['A', 'B'] },
      { id: 'H', type: 'intersection', of: ['A', 'Ha', 'B', 'Hb'] },
      { id: 'D', type: 'midpoint', of: ['B', 'C'] },
      { id: 'E', type: 'midpoint', of: ['C', 'A'] },
      { id: 'F', type: 'midpoint', of: ['A', 'B'] },
      { id: 'P', type: 'midpoint', of: ['A', 'H'] },
      { id: 'Q', type: 'midpoint', of: ['B', 'H'] },
      { id: 'R', type: 'midpoint', of: ['C', 'H'] },
      { id: 'N', type: 'midpoint', of: ['E', 'Q'] },
      // circumcentre, from two perpendicular bisectors (ends never shown)
      { id: 'F1', type: 'perpAlongDist', from: 'F', dir: ['A', 'B'], lenOf: ['A', 'B'], side: -1 },
      { id: 'F2', type: 'perpAlongDist', from: 'F', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'D1', type: 'perpAlongDist', from: 'D', dir: ['B', 'C'], lenOf: ['B', 'C'], side: -1 },
      { id: 'D2', type: 'perpAlongDist', from: 'D', dir: ['B', 'C'], lenOf: ['B', 'C'] },
      { id: 'O', type: 'intersection', of: ['F1', 'F2', 'D1', 'D2'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AHa', type: 'segment', of: ['A', 'Ha'], color: 'line' },
      { id: 'BHb', type: 'segment', of: ['B', 'Hb'], color: 'line' },
      { id: 'CHc', type: 'segment', of: ['C', 'Hc'], color: 'line' },
      { id: 'R1', type: 'polygon', of: ['E', 'F', 'Q', 'R'], color: 'alpha' },
      { id: 'EF', type: 'segment', of: ['E', 'F'], color: 'alpha' },
      { id: 'FQ', type: 'segment', of: ['F', 'Q'], color: 'alpha' },
      { id: 'QR', type: 'segment', of: ['Q', 'R'], color: 'alpha' },
      { id: 'RE', type: 'segment', of: ['R', 'E'], color: 'alpha' },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'E', to: 'Q' },
      { id: 'EQ', type: 'segment', of: ['E', 'Q'] },
      { id: 'FR', type: 'line', of: ['F', 'R'] },
      { id: 'K', type: 'circle', of: ['N', 'E'] },
      { id: 'R2', type: 'polygon', of: ['D', 'E', 'P', 'Q'], color: 'beta' },
      { id: 'DE', type: 'segment', of: ['D', 'E'], color: 'beta' },
      { id: 'EP', type: 'segment', of: ['E', 'P'], color: 'beta' },
      { id: 'PQ', type: 'segment', of: ['P', 'Q'], color: 'beta' },
      { id: 'QD', type: 'segment', of: ['Q', 'D'], color: 'beta' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'E', to: 'Q' },
      { id: 'DP', type: 'line', of: ['D', 'P'] },
      { id: 'rHa', type: 'rightAngle', at: 'Ha', from: 'C', to: 'A' },
      { id: 'rHb', type: 'rightAngle', at: 'Hb', from: 'A', to: 'B' },
      { id: 'rHc', type: 'rightAngle', at: 'Hc', from: 'B', to: 'C' },
      { id: 'OH', type: 'segment', of: ['O', 'H'] },
      { id: 'OD', type: 'segment', of: ['O', 'D'] },
      { id: 'tOD', type: 'ticks', of: ['O', 'D'], n: 1 },
      { id: 'tAP', type: 'ticks', of: ['A', 'P'], n: 1 },
      { id: 'tPH', type: 'ticks', of: ['P', 'H'], n: 1 },
      { id: 'tON', type: 'ticks', of: ['O', 'N'], n: 2 },
      { id: 'tNH', type: 'ticks', of: ['N', 'H'], n: 2 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 3 },
      { id: 'tDP', type: 'ticks', of: ['D', 'P'], n: 3 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Nine points in a triangle',
      formula: 'D, E, F are the midpoints of the sides; H<sub>a</sub>, H<sub>b</sub>, H<sub>c</sub> the feet of the altitudes, which meet at the orthocentre H; and P, Q, R the midpoints of AH, BH, CH. To prove: <strong>all nine lie on one circle</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'AHa', 'BHb', 'CHc', 'H', 'Ha', 'Hb', 'Hc', 'D', 'E', 'F', 'P', 'Q', 'R'],
      hl: ['D', 'E', 'F', 'Ha', 'Hb', 'Hc', 'P', 'Q', 'R']
    },
    {
      phase: 'rect1', just: 'Midsegments',
      title: 'EFQR is a rectangle',
      formula: 'EF is a midsegment of triangle ABC and QR a midsegment of triangle HBC, so both are parallel to BC and equal to half of it. FQ is a midsegment of triangle ABH and ER of triangle ACH, so both are parallel to AH. AH ⟂ BC, so the sides of EFQR meet at right angles: it is a rectangle.',
      show: ['R1', 'EF', 'FQ', 'QR', 'RE', 'rF'],
      hl: ['R1', 'EF', 'QR', 'FQ', 'RE']
    },
    {
      phase: 'circle1', just: 'Rectangle diagonals',
      title: 'E, F, Q, R lie on the circle with diameter EQ',
      formula: 'The diagonals EQ and FR of the rectangle are equal and bisect each other at N, so N is at the same distance from E, F, Q and R: the circle with centre N and radius NE passes through all four, and EQ is a diameter.',
      show: ['N', 'EQ', 'FR', 'K'],
      hl: ['K', 'N', 'EQ']
    },
    {
      phase: 'rect2', just: 'Midsegments',
      title: 'DEPQ is a rectangle with the same diagonal',
      formula: 'DE and PQ are midsegments parallel to AB (in triangles CAB and HAB); DQ and EP are midsegments parallel to CH (in triangles BCH and ACH); CH ⟂ AB, so DEPQ is a rectangle too. Its diagonal EQ is the same segment, so its other diagonal DP is a diameter of the same circle: D and P lie on it.',
      show: ['R2', 'DE', 'EP', 'PQ', 'QD', 'rD', 'DP'],
      hl: ['R2', 'DP', 'D', 'P']
    },
    {
      phase: 'feet', just: 'Converse of Thales',
      title: 'The three feet lie on the circle',
      formula: 'H<sub>a</sub> lies on BC, which contains D, and on the altitude AH, which contains P; so ∠DH<sub>a</sub>P = 90°, and a point that sees the diameter DP at a right angle lies on the circle. In the same way H<sub>b</sub> sees the diameter EQ and H<sub>c</sub> the diameter FR at right angles. All nine points are on the circle.',
      show: ['rHa', 'rHb', 'rHc'],
      hl: ['Ha', 'Hb', 'Hc', 'rHa', 'rHb', 'rHc']
    },
    {
      phase: 'centre', just: 'Parallelogram diagonals',
      title: 'The centre N is the midpoint of OH',
      formula: 'O is the circumcentre. OD ⟂ BC like AH, so OD ∥ PH; and OD = ½ AH = PH (one tick each). ODHP has a pair of opposite sides equal and parallel, so it is a parallelogram, and its diagonals DP and OH bisect each other: the midpoint N of DP is the midpoint of OH.',
      show: ['O', 'OH', 'OD', 'tOD', 'tAP', 'tPH', 'tON', 'tNH'],
      hl: ['OH', 'OD', 'N']
    },
    {
      phase: 'conclude', just: 'Parallelogram sides',
      title: 'The radius is half the circumradius',
      formula: 'OD = AP and OD ∥ AP, so OAPD is a parallelogram and its opposite sides DP and AO are equal (three ticks). DP is a diameter of the nine-point circle and OA is the circumradius R, so the nine-point circle has radius R / 2, with centre halfway between O and H on the Euler line. <strong>∎</strong>',
      show: ['OA', 'tOA', 'tDP'],
      hl: ['K', 'OA', 'DP']
    }
  ],

  readout: (P) => {
    const pts = ['D', 'E', 'F', 'Ha', 'Hb', 'Hc', 'P', 'Q', 'R'].map((k) => dist(P.N, P[k]) / UNIT);
    const lo = Math.min(...pts);
    const hi = Math.max(...pts);
    return `N to the nine points: ${fmt(lo, 2)} to ${fmt(hi, 2)};  R / 2 = ${fmt(dist(P.O, P.A) / 2 / UNIT, 2)}`;
  },

  // an acute triangle inside the frame, with O and H not too close
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 12000 &&
    between(P.Ha, P.B, P.C) && between(P.Hb, P.C, P.A) && between(P.Hc, P.A, P.B) &&
    dist(P.O, P.H) > 20 &&
    [P.A, P.B, P.C, P.O, P.H].every((p) => p.x > 65 && p.x < 475 && p.y > 62 && p.y < 358)
};

export default ninePointCircle;
