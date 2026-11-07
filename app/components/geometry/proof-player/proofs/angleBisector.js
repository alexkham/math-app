// ===========================================================
// proofs/angleBisector.js — the angle bisector theorem
// The bisector of the angle at A meets BC at D, and
// BD : DC = AB : AC. Area proof: D is equidistant from AB and
// AC (congruent right triangles on the hypotenuse AD), so the
// areas of ABD and ACD are in the ratio AB : AC; the same two
// triangles share the height from A, so their areas are also
// in the ratio BD : DC.
// Phases: given, heights, congruent, areas1, areas2, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.05 && t < 0.95;
};

const angleBisector = {
  label: 'Angle bisector theorem',
  info:
    'Drop perpendiculars from D to the two sides: DE to AB and DF to AC. The right triangles ' +
    'ADE and ADF share the hypotenuse AD and have equal angles at A, so DE = DF. Then the ' +
    'triangles ABD and ACD have areas ½·AB·DE and ½·AC·DF, in the ratio AB : AC; and since they ' +
    'share the height from A, their areas are also in the ratio BD : DC. Drag any vertex.',
  hint: 'Drag A, B or C; D and the feet follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [50, 50, 440, 320],

  model: {
    points: { A: { x: 240, y: 80 }, B: { x: 90, y: 340 }, C: { x: 440, y: 340 } },
    params: {},
    composites: [],
    objects: [
      { id: 'D', type: 'bisectorFoot', at: 'A', of: ['B', 'C'] },
      { id: 'E', type: 'foot', from: 'D', to: ['A', 'B'] },
      { id: 'F', type: 'foot', from: 'D', to: ['A', 'C'] },
      { id: 'H', type: 'foot', from: 'A', to: ['B', 'C'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'aA1', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'alpha', label: 'α' },
      { id: 'aA2', type: 'angle', at: 'A', from: 'D', to: 'C', color: 'alpha', label: 'α' },
      { id: 'DE', type: 'segment', of: ['D', 'E'], color: 'beta' },
      { id: 'DF', type: 'segment', of: ['D', 'F'], color: 'beta' },
      { id: 'rE', type: 'rightAngle', at: 'E', from: 'A', to: 'D' },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'D', to: 'A' },
      { id: 'triE', type: 'polygon', of: ['A', 'D', 'E'], color: 'gamma' },
      { id: 'triF', type: 'polygon', of: ['A', 'D', 'F'], color: 'delta' },
      { id: 'tDE', type: 'ticks', of: ['D', 'E'], n: 1 },
      { id: 'tDF', type: 'ticks', of: ['D', 'F'], n: 1 },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'D'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['A', 'D', 'C'], color: 'beta' },
      { id: 'AH', type: 'line', of: ['A', 'H'] },
      { id: 'rH', type: 'rightAngle', at: 'H', from: 'C', to: 'A' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'The bisector of the angle at A',
      formula: 'AD bisects the angle at A: ∠BAD = ∠DAC = <i>α</i>, and D is the point where the bisector meets BC. To prove: <strong>BD : DC = AB : AC</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'D', 'AD', 'aA1', 'aA2'],
      hl: ['AD', 'aA1', 'aA2']
    },
    {
      phase: 'heights', just: 'Construction',
      title: 'Perpendiculars from D to the two sides',
      formula: 'Drop the perpendicular from D to AB, meeting it at E, and the perpendicular from D to AC, meeting it at F. DE and DF are the distances from D to the two sides of the angle.',
      show: ['E', 'F', 'DE', 'DF', 'rE', 'rF'],
      hl: ['DE', 'DF']
    },
    {
      phase: 'congruent', just: 'AAS congruence',
      title: 'DE = DF',
      formula: 'The right triangles ADE and ADF share the hypotenuse AD and have equal angles <i>α</i> at A, so their third angles are equal too. Two angles and a corresponding side: the triangles are congruent, and DE = DF (one tick each). A point on the bisector is equidistant from the two sides.',
      show: ['triE', 'triF', 'tDE', 'tDF'],
      hl: ['triE', 'triF', 'tDE', 'tDF']
    },
    {
      phase: 'areas1', just: 'Area = ½ base · height',
      title: 'Area ABD : area ACD = AB : AC',
      formula: 'Take AB as the base of triangle ABD: its height is DE, so its area is ½·AB·DE. Take AC as the base of triangle ACD: its height is DF, so its area is ½·AC·DF. Since DE = DF, the areas are in the ratio AB : AC.',
      show: ['tri1', 'tri2'],
      hl: ['tri1', 'tri2', 'AB', 'CA']
    },
    {
      phase: 'areas2', just: 'Area = ½ base · height',
      title: 'Area ABD : area ACD = BD : DC',
      formula: 'Now take BD and DC as the bases. Both triangles have their apex at A and their bases on the line BC, so they share the same height AH. Their areas are ½·BD·AH and ½·DC·AH, in the ratio BD : DC.',
      show: ['H', 'AH', 'rH'],
      hl: ['tri1', 'tri2', 'AH', 'BC']
    },
    {
      phase: 'conclude', just: 'Same ratio',
      title: 'BD : DC = AB : AC',
      formula: 'The ratio of the two areas has been written in two ways, as AB : AC and as BD : DC. They are the same number, so BD : DC = AB : AC: the bisector divides the opposite side in the ratio of the adjacent sides. <strong>∎</strong>',
      show: [],
      hl: ['AB', 'CA', 'BC', 'D']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.B, P.D) / dist(P.D, P.C);
    const r2 = dist(P.A, P.B) / dist(P.A, P.C);
    return `BD / DC = ${fmt(r1, 3)},  AB / AC = ${fmt(r2, 3)}`;
  },

  // a real triangle inside the frame, with the feet E and F on the sides themselves
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 10000 &&
    between(P.E, P.A, P.B) && between(P.F, P.A, P.C) && between(P.H, P.B, P.C) &&
    [P.A, P.B, P.C].every((p) => p.x > 70 && p.x < 470 && p.y > 70 && p.y < 355)
};

export default angleBisector;
