// ===========================================================
// proofs/pythagoras.js — the Pythagorean theorem, a² + b² = c²
// The rearrangement proof: four copies of the right triangle
// in the corners of a square of side a + b leave a tilted
// square of side c in the middle; counting the area two ways
// gives (a + b)² = c² + 2ab. Uses SAS and the angle sum.
// Phases: given, construct, four, square, areas, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const pythagoras = {
  label: 'Pythagorean theorem',
  info:
    'Put four copies of the right triangle into the corners of a square of side a + b, each ' +
    'turned a quarter turn further than the last. What is left in the middle is a square of ' +
    'side c, because the two acute angles of the triangle add up to 90°. The big square has ' +
    'area (a + b)² = a² + 2ab + b², and also c² + four triangles = c² + 2ab. So a² + b² = c². ' +
    'Drag X to change a and b, or P and Q to move the square.',
  hint: 'Drag X to change a and b, P or Q to move the square',
  labelCenter: ['P', 'Q', 'R', 'S'],
  // Frame for the square of side 300 and its labels.
  viewBox: [60, 15, 440, 385],

  model: {
    points: { P: { x: 130, y: 360 }, Q: { x: 430, y: 360 } },
    params: { t: 0.4 },
    composites: [],
    objects: [
      // X cuts the bottom side into a = PX and b = XQ
      { id: 'X', type: 'onLine', of: ['P', 'Q'], param: 't', drag: true, minParam: 0.2, maxParam: 0.8 },
      // the other two corners of the square on PQ
      { id: 'R', type: 'perpAlongDist', from: 'Q', dir: ['P', 'Q'], lenOf: ['P', 'Q'] },
      { id: 'S', type: 'perpAlongDist', from: 'P', dir: ['P', 'Q'], lenOf: ['P', 'Q'] },
      // the cut points on the other three sides, each a from the next corner round
      { id: 'Y', type: 'pointAlongDist', from: 'Q', dir: ['Q', 'R'], lenOf: ['P', 'X'] },
      { id: 'Z', type: 'pointAlongDist', from: 'R', dir: ['R', 'S'], lenOf: ['P', 'X'] },
      { id: 'W', type: 'pointAlongDist', from: 'S', dir: ['S', 'P'], lenOf: ['P', 'X'] },

      // the given triangle, in the bottom-left corner
      { id: 'PX', type: 'segment', of: ['P', 'X'] },
      { id: 'PW', type: 'segment', of: ['P', 'W'] },
      { id: 'WX', type: 'segment', of: ['W', 'X'] },
      { id: 'rP', type: 'rightAngle', at: 'P', from: 'X', to: 'W' },
      { id: 'angX', type: 'angle', at: 'X', from: 'P', to: 'W', color: 'alpha', label: 'α' },
      { id: 'angW', type: 'angle', at: 'W', from: 'X', to: 'P', color: 'beta', label: 'β' },
      { id: 'la', type: 'sideLabel', of: ['P', 'X'], text: 'a' },
      { id: 'lb', type: 'sideLabel', of: ['P', 'W'], text: 'b' },
      { id: 'lc', type: 'sideLabel', of: ['W', 'X'], text: 'c', side: 1, color: 'beta' },

      // the big square
      { id: 'PQ', type: 'segment', of: ['P', 'Q'] },
      { id: 'QR', type: 'segment', of: ['Q', 'R'] },
      { id: 'RS', type: 'segment', of: ['R', 'S'] },
      { id: 'SP', type: 'segment', of: ['S', 'P'] },
      { id: 'rQ', type: 'rightAngle', at: 'Q', from: 'Y', to: 'X' },
      { id: 'rR', type: 'rightAngle', at: 'R', from: 'Z', to: 'Y' },
      { id: 'rS', type: 'rightAngle', at: 'S', from: 'W', to: 'Z' },
      { id: 'lb2', type: 'sideLabel', of: ['X', 'Q'], text: 'b' },
      { id: 'la2', type: 'sideLabel', of: ['Q', 'Y'], text: 'a' },
      { id: 'lb3', type: 'sideLabel', of: ['Y', 'R'], text: 'b' },
      { id: 'la3', type: 'sideLabel', of: ['R', 'Z'], text: 'a' },
      { id: 'lb4', type: 'sideLabel', of: ['Z', 'S'], text: 'b' },
      { id: 'la4', type: 'sideLabel', of: ['S', 'W'], text: 'a' },

      // the four triangles and the inner square
      { id: 'T1', type: 'polygon', of: ['W', 'P', 'X'], color: 'alpha' },
      { id: 'T2', type: 'polygon', of: ['X', 'Q', 'Y'], color: 'alpha' },
      { id: 'T3', type: 'polygon', of: ['Y', 'R', 'Z'], color: 'alpha' },
      { id: 'T4', type: 'polygon', of: ['Z', 'S', 'W'], color: 'alpha' },
      { id: 'XY', type: 'segment', of: ['X', 'Y'] },
      { id: 'YZ', type: 'segment', of: ['Y', 'Z'] },
      { id: 'ZW', type: 'segment', of: ['Z', 'W'] },
      { id: 'SQ', type: 'polygon', of: ['X', 'Y', 'Z', 'W'], color: 'beta' },
      { id: 'lc2', type: 'sideLabel', of: ['X', 'Y'], text: 'c', side: 1, color: 'beta' },
      { id: 'lc3', type: 'sideLabel', of: ['Y', 'Z'], text: 'c', side: 1, color: 'beta' },
      { id: 'lc4', type: 'sideLabel', of: ['Z', 'W'], text: 'c', side: 1, color: 'beta' },
      // the angles at X: β from the second triangle, and the right angle between
      { id: 'angX2', type: 'angle', at: 'X', from: 'Y', to: 'Q', color: 'beta', label: 'β' },
      { id: 'angY', type: 'angle', at: 'Y', from: 'Q', to: 'X', color: 'alpha', label: 'α' },
      { id: 'rX', type: 'rightAngle', at: 'X', from: 'Y', to: 'W', color: 'beta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A right triangle with legs <i>a</i>, <i>b</i> and hypotenuse <i>c</i>',
      formula: 'The angle at P is right; PX = <i>a</i>, PW = <i>b</i>, WX = <i>c</i>. The two acute angles are <i>α</i> at X and <i>β</i> at W. To prove: <strong><i>a</i>² + <i>b</i>² = <i>c</i>²</strong>.',
      show: ['P', 'X', 'W', 'PX', 'PW', 'WX', 'rP', 'angX', 'angW', 'la', 'lb', 'lc'],
      hl: ['WX']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'A square of side <i>a</i> + <i>b</i>',
      formula: 'Extend PX by <i>b</i> to Q and PW by <i>a</i> to S, and complete the square PQRS of side <i>a</i> + <i>b</i>. Going round it, cut each side at <i>a</i> from one corner and <i>b</i> from the next: the points X, Y, Z, W.',
      show: ['Q', 'R', 'S', 'Y', 'Z', 'PQ', 'QR', 'RS', 'SP', 'rQ', 'rR', 'rS', 'lb2', 'la2', 'lb3', 'la3', 'lb4', 'la4'],
      hl: ['PQ', 'QR', 'RS', 'SP']
    },
    {
      phase: 'four', just: 'SAS congruence',
      title: 'Four copies of the triangle',
      formula: 'In each corner of the square sits a triangle with legs <i>a</i> and <i>b</i> and a right angle between them. By side-angle-side all four are congruent to the given triangle: each hypotenuse is <i>c</i>, each has area <i>ab</i>/2, and each has the angles <i>α</i> and <i>β</i>.',
      show: ['T1', 'T2', 'T3', 'T4', 'XY', 'YZ', 'ZW'],
      hl: ['T1', 'T2', 'T3', 'T4']
    },
    {
      phase: 'square', just: 'Angle sum',
      title: 'The middle piece is a square of side <i>c</i>',
      formula: 'XYZW has four sides of length <i>c</i>. At X the straight angle along PQ is made of <i>α</i>, the angle of XYZW, and <i>β</i>; since <i>α</i> + <i>β</i> = 90° in a right triangle, the angle of XYZW at X is 90°. The same holds at Y, Z and W, so XYZW is a square, of area <i>c</i>².',
      show: ['SQ', 'lc2', 'lc3', 'lc4', 'angX2', 'angY', 'rX'],
      hl: ['SQ', 'rX', 'angX', 'angX2']
    },
    {
      phase: 'areas', just: 'Area two ways',
      title: '(<i>a</i> + <i>b</i>)² = <i>c</i>² + 4 · <i>ab</i>/2',
      formula: 'The big square has side <i>a</i> + <i>b</i>, so its area is (<i>a</i> + <i>b</i>)². It is also the inner square plus the four triangles: <i>c</i>² + 4 · (<i>ab</i>/2) = <i>c</i>² + 2<i>ab</i>.',
      show: [],
      hl: ['SQ', 'T1', 'T2', 'T3', 'T4']
    },
    {
      phase: 'conclude', just: 'Algebra',
      title: '<i>a</i>² + <i>b</i>² = <i>c</i>²',
      formula: 'Expanding the left side, (<i>a</i> + <i>b</i>)² = <i>a</i>² + 2<i>ab</i> + <i>b</i>². So <i>a</i>² + 2<i>ab</i> + <i>b</i>² = <i>c</i>² + 2<i>ab</i>, and taking 2<i>ab</i> from both sides leaves <i>a</i>² + <i>b</i>² = <i>c</i>². <strong>∎</strong>',
      show: [],
      hl: ['SQ', 'lc', 'lc2', 'lc3', 'lc4']
    }
  ],

  readout: (P) => {
    const a = dist(P.P, P.X) / UNIT;
    const b = dist(P.P, P.W) / UNIT;
    const c = dist(P.W, P.X) / UNIT;
    return `a² + b² = ${fmt(a * a)} + ${fmt(b * b)} = ${fmt(a * a + b * b)},  c² = ${fmt(c * c)}`;
  },

  // the whole square must stay inside the frame, and not too small
  isValid: (P) =>
    ['P', 'Q', 'R', 'S'].every((k) => P[k].x > 85 && P[k].x < 475 && P[k].y > 45 && P[k].y < 375) &&
    dist(P.P, P.Q) > 200
};

export default pythagoras;
