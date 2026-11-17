// ===========================================================
// proofs/regularPolygonArea.js — the area of a regular polygon
// is half its perimeter times its apothem, shown on a hexagon:
// area = ½ · P · a, where a = OM is the distance from the centre
// O to a side.
// The radii cut the hexagon into six congruent isosceles
// triangles (SSS); each has a side s as its base and the apothem
// a as its height, so the area is 6 · ½ · s · a = ½ · (6s) · a.
// The six triangles are shown by alternating shades rather than
// drawn radii, so that the name of O is clear of lines.
// O and A are free; B…F are A turned about O by 60° at a time.
// Phases: given, split, congruent, one, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout
const V = ['A', 'B', 'C', 'D', 'E', 'F'];

const regularPolygonArea = {
  label: 'Area of a regular polygon',
  info:
    'The regular hexagon ABCDEF has centre O, side s and apothem a = OM, the distance from O to a side. ' +
    'Joining O to the vertices cuts it into six congruent isosceles triangles, each with base s and ' +
    'height a, so the area is 6 · ½ · s · a = ½ · (6s) · a = ½ · perimeter · apothem. Drag O to move ' +
    'the hexagon, or A to turn and resize it.',
  hint: 'Drag O to move the hexagon, or A to turn and resize it',
  // names point away from a spot between O and M, so O is named on the side away from the
  // apothem and every vertex outward
  labelCenter: ['O', 'O', 'O', 'M'],
  // Frame for the hexagon and its labels.
  viewBox: [100, 62, 360, 330],

  model: {
    points: { O: { x: 280, y: 227 }, A: { x: 222, y: 127 } },
    params: {},
    composites: [],
    objects: [
      { id: 'B', type: 'rotateDeg', about: 'O', of: 'A', deg: 60 },
      { id: 'C', type: 'rotateDeg', about: 'O', of: 'B', deg: 60 },
      { id: 'D', type: 'rotateDeg', about: 'O', of: 'C', deg: 60 },
      { id: 'E', type: 'rotateDeg', about: 'O', of: 'D', deg: 60 },
      { id: 'F', type: 'rotateDeg', about: 'O', of: 'E', deg: 60 },
      { id: 'M', type: 'midpoint', of: ['A', 'B'] },
      { id: 'H', type: 'polygon', of: V },
      // the six triangles from the centre, in alternating shades
      ...V.map((v, i) => ({ id: 'p' + v, type: 'polygon', of: ['O', v, V[(i + 1) % 6]], color: i % 2 ? 'beta' : 'alpha' })),
      ...V.map((v, i) => ({ id: 's' + v, type: 'segment', of: [v, V[(i + 1) % 6]] })),
      { id: 'OM', type: 'segment', of: ['O', 'M'], color: 'gamma' },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'B', to: 'O' },
      { id: 'la', type: 'sideLabel', of: ['O', 'M'], text: 'a', side: -1, color: 'gamma' },
      { id: 'ls', type: 'sideLabel', of: ['C', 'D'], text: 's' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A regular hexagon and its apothem',
      formula: 'ABCDEF is a regular hexagon with centre O and side s. The apothem a = OM is the perpendicular from O to a side. The perimeter is P = 6s. To prove: <strong>area = ½ · P · a</strong>.',
      show: ['O', ...V, 'M', 'H', ...V.map((v) => 's' + v), 'OM', 'rM', 'la', 'ls'],
      hl: ['OM', 'rM', 'la']
    },
    {
      phase: 'split', just: 'Area addition',
      title: 'Six triangles from the centre',
      formula: 'Joining O to the six vertices cuts the hexagon into the six triangles OAB, OBC, OCD, ODE, OEF, OFA (shaded in turn). They fill it without overlapping, so <strong>the area is the sum of their six areas</strong>.',
      show: V.map((v) => 'p' + v),
      hl: V.map((v) => 'p' + v)
    },
    {
      phase: 'congruent', just: 'SSS congruence',
      title: 'Six congruent triangles',
      formula: 'The centre is equally far from all six vertices, and all six sides are s, so the six triangles are congruent by SSS. In particular <strong>each has the same height a</strong> from O to its base.',
      show: [],
      hl: ['pA', 'pC', 'pE', 'OM', 'la']
    },
    {
      phase: 'one', just: 'Triangle area',
      title: '[OAB] = ½ · s · a',
      formula: 'The triangle OAB has the base AB = s and the height OM = a, so <strong>[OAB] = ½ · s · a</strong>, and the same for each of the six.',
      show: [],
      hl: ['pA', 'sA', 'OM', 'rM', 'la']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'Area = ½ · P · a',
      formula: 'Add the six equal areas: area = 6 · ½ · s · a = ½ · (6s) · a = <strong>½ · P · a</strong>. The same splitting works for every regular polygon. <strong>∎</strong>',
      show: [],
      hl: [...V.map((v) => 's' + v), 'OM', 'la']
    }
  ],

  readout: (P) => {
    let s2 = 0;
    for (let i = 0; i < 6; i++) { const p = P[V[i]], q = P[V[(i + 1) % 6]]; s2 += p.x * q.y - q.x * p.y; }
    const area = Math.abs(s2) / 2 / (UNIT * UNIT);
    const half = 0.5 * 6 * dist(P.A, P.B) * dist(P.O, P.M) / (UNIT * UNIT);
    return `area = ${fmt(area, 2)},  ½ · perimeter · apothem = ${fmt(half, 2)}`;
  },

  // the hexagon between radius 95 and 122, and every vertex far enough inside the frame for its name
  isValid: (P) => {
    const r = dist(P.O, P.A);
    const inFrame = (p) => p.x > 136 && p.x < 424 && p.y > 96 && p.y < 358;
    return r > 95 && r < 122 && V.every((v) => inFrame(P[v]));
  }
};

export default regularPolygonArea;
