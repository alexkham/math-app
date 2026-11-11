// ===========================================================
// proofs/simsonLine.js — the Simson line. The feet D, E, F of
// the perpendiculars from a point P of the circumcircle to the
// sides BC, CA, AB of a triangle are collinear.
// P, B, D, F lie on the circle with diameter PB and P, C, D, E
// on the circle with diameter PC; inscribed angles move the
// angles at D to P; the exterior angle of the cyclic
// quadrilateral ABPC makes the two angles at P equal; so the
// angles BDF and CDE are equal and DF, DE make one line.
// Shown in the case P on the arc BC away from A, with F on AB
// extended beyond B and E on the side CA.
// Phases: given, first, second, cyclic, complement, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const along = (X, U, V) => {
  const dx = V.x - U.x;
  const dy = V.y - U.y;
  return ((X.x - U.x) * dx + (X.y - U.y) * dy) / (dx * dx + dy * dy || 1);
};
const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const simsonLine = {
  label: 'Simson line',
  info:
    'Drop the perpendiculars from P to the three sides. The right angles at D and F stand on PB, ' +
    'so P, B, D, F lie on a circle and ∠BDF = ∠BPF; likewise P, C, D, E lie on a circle and ' +
    '∠CDE = ∠CPE. ABPC is cyclic, so its exterior angle at B equals the angle at C: ∠PBF = ∠PCE, ' +
    'and the complements ∠BPF and ∠CPE are equal. So ∠BDF = ∠CDE, and since B, D, C are on a ' +
    'line, F, D, E are on a line too. Drag P round the arc BC, or A, B, C.',
  hint: 'Drag P round the arc BC, or A, B or C round the circle',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the circumcircle (radius 132 about O) and its labels, the small circles included.
  viewBox: [60, 50, 440, 360],

  model: {
    // O (centre) and Z (sets the radius) are never shown
    points: { O: { x: 280, y: 223 }, Z: { x: 412, y: 223 } },
    params: { ta: -1.745, tb: 2.793, tc: 0.349, tp: 1.92 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      { id: 'P', type: 'onCircle', center: 'O', through: 'Z', param: 'tp', drag: true },
      { id: 'D', type: 'foot', from: 'P', to: ['B', 'C'] },
      { id: 'E', type: 'foot', from: 'P', to: ['C', 'A'] },
      { id: 'F', type: 'foot', from: 'P', to: ['A', 'B'] },
      // centres of the two circles with diameters PB and PC (never shown)
      { id: 'M1', type: 'midpoint', of: ['P', 'B'] },
      { id: 'M2', type: 'midpoint', of: ['P', 'C'] },
      // the ends of the drawn Simson line, a little beyond F and E (never shown)
      { id: 'S1', type: 'pointAlongDist', from: 'F', dir: ['E', 'F'], lenOf: ['E', 'F'], scale: 0.12 },
      { id: 'S2', type: 'pointAlongDist', from: 'E', dir: ['F', 'E'], lenOf: ['E', 'F'], scale: 0.12 },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'BF', type: 'line', of: ['B', 'F'] },
      { id: 'PD', type: 'segment', of: ['P', 'D'] },
      { id: 'PE', type: 'segment', of: ['P', 'E'] },
      { id: 'PF', type: 'segment', of: ['P', 'F'] },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'P', to: 'C' },
      { id: 'rE', type: 'rightAngle', at: 'E', from: 'P', to: 'C' },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'P', to: 'B' },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'PC', type: 'segment', of: ['P', 'C'] },
      { id: 'K1', type: 'circle', of: ['M1', 'P'], color: 'alpha' },
      { id: 'K2', type: 'circle', of: ['M2', 'P'], color: 'beta' },
      { id: 'd1', type: 'angle', at: 'D', from: 'B', to: 'F', color: 'alpha', label: 'θ₁', radius: 30 },
      { id: 'p1', type: 'angle', at: 'P', from: 'F', to: 'B', color: 'alpha', label: 'θ₁', radius: 40 },
      { id: 'd2', type: 'angle', at: 'D', from: 'C', to: 'E', color: 'beta', label: 'θ₂', radius: 30 },
      { id: 'p2', type: 'angle', at: 'P', from: 'C', to: 'E', color: 'beta', label: 'θ₂', radius: 40 },
      { id: 'fB', type: 'angle', at: 'B', from: 'P', to: 'F', color: 'gamma', label: 'φ' },
      { id: 'fC', type: 'angle', at: 'C', from: 'P', to: 'E', color: 'gamma', label: 'φ' },
      { id: 'L', type: 'line', of: ['S1', 'S2'], color: 'alpha' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A point on the circumcircle and three feet',
      formula: 'P is a point of the circumcircle of triangle ABC, on the arc BC away from A. D, E, F are the feet of the perpendiculars from P to the lines BC, CA, AB (here F lies on AB extended beyond B). To prove: <strong>D, E and F lie on one line</strong>, the Simson line of P.',
      show: ['A', 'B', 'C', 'P', 'D', 'E', 'F', 'W', 'T', 'AB', 'BC', 'CA', 'BF', 'PD', 'PE', 'PF', 'rD', 'rE', 'rF'],
      hl: ['PD', 'PE', 'PF']
    },
    {
      phase: 'first', just: 'Inscribed angles',
      title: 'P, B, D, F concyclic: ∠BDF = ∠BPF',
      formula: 'The angles PDB and PFB are right angles standing on PB, so D and F lie on the circle with diameter PB (the converse of Thales). In that circle the angles at D and at P both stand on the arc BF: <strong>∠BDF = ∠BPF = θ₁</strong>.',
      show: ['PB', 'K1', 'd1', 'p1'],
      hl: ['K1', 'd1', 'p1']
    },
    {
      phase: 'second', just: 'Inscribed angles',
      title: 'P, C, D, E concyclic: ∠CDE = ∠CPE',
      formula: 'In the same way the right angles PDC and PEC stand on PC, so D and E lie on the circle with diameter PC, and the angles at D and at P on the arc CE are equal: <strong>∠CDE = ∠CPE = θ₂</strong>.',
      show: ['PC', 'K2', 'd2', 'p2'],
      hl: ['K2', 'd2', 'p2']
    },
    {
      phase: 'cyclic', just: 'Cyclic quadrilateral',
      title: '∠PBF = ∠PCE',
      formula: 'ABPC is a cyclic quadrilateral, so its opposite angles at B and C add up to 180°. The angle PBF is the exterior angle at B (F is on AB extended), so it equals the interior angle at C: <strong>∠PBF = ∠ACP = ∠PCE = φ</strong>.',
      show: ['fB', 'fC'],
      hl: ['fB', 'fC']
    },
    {
      phase: 'complement', just: 'Angle sum',
      title: 'θ₁ = 90° − φ = θ₂',
      formula: 'The triangles PFB and PEC have right angles at F and E, so their other two angles add up to 90°: θ₁ = ∠BPF = 90° − φ and θ₂ = ∠CPE = 90° − φ. So <strong>θ₁ = θ₂</strong>, and therefore ∠BDF = ∠CDE.',
      show: [],
      hl: ['p1', 'p2', 'fB', 'fC']
    },
    {
      phase: 'conclude', just: 'Vertical angles',
      title: 'D, E, F are collinear',
      formula: 'B, D, C lie on one line, and F and E are on opposite sides of it. The rays DF and DE make equal angles with the opposite rays DB and DC, so they are vertical angles, which happens only when DF and DE are the two halves of one line: <strong>F, D, E are collinear</strong>. <strong>∎</strong>',
      show: ['L'],
      hl: ['L', 'd1', 'd2']
    }
  ],

  readout: (P) =>
    `∠BDF = ${fmt(angleDeg(P.D, P.B, P.F), 0)}°,  ∠CDE = ${fmt(angleDeg(P.D, P.C, P.E), 0)}°,  ∠FDE = ${fmt(angleDeg(P.D, P.F, P.E), 0)}°`,

  // the case drawn: P on the arc BC away from A, D inside BC, E inside CA, F on AB
  // beyond B; points apart enough for the labels; everything in the frame
  isValid: (P) => {
    if (!P.D || !P.E || !P.F || !P.S1 || !P.S2) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    const tD = along(P.D, P.B, P.C);
    const tE = along(P.E, P.C, P.A);
    const tF = along(P.F, P.A, P.B);
    return ['A', 'B', 'C', 'P', 'D', 'E', 'F', 'S1', 'S2'].every((k) => inFrame(P[k])) &&
      dist(P.O, P.Z) > 100 &&
      [P.M1, P.M2].every((m) => { const r = dist(m, P.P); return m.x - r > 62 && m.x + r < 498 && m.y - r > 52 && m.y + r < 408; }) &&
      cross(P.B, P.C, P.A) * cross(P.B, P.C, P.P) < 0 &&
      tD > 0.12 && tD < 0.88 && tE > 0.12 && tE < 0.88 && tF > 1.06 &&
      dist(P.P, P.D) > 72 && dist(P.B, P.F) > 20 && dist(P.P, P.B) > 70 && dist(P.P, P.C) > 70 &&
      dist(P.A, P.B) > 120 && dist(P.A, P.C) > 120;
  }
};

export default simsonLine;
