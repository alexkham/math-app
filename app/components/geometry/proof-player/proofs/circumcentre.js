// ===========================================================
// proofs/circumcentre.js — the perpendicular bisectors meet
// at the circumcentre. Two of them meet at O; SAS on the two
// right triangles at each midpoint gives OA = OB and OB = OC;
// then OAC is isosceles, so its median from O is perpendicular
// to AC and the third bisector passes through O. The circle
// about O through A passes through B and C.
// Phases: given, sas1, sas2, equal, third, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const circumcentre = {
  label: 'Circumcentre',
  info:
    'The perpendicular bisectors of AB and BC meet at O. At the midpoint P of AB the two right ' +
    'triangles OPA and OPB are congruent (SAS), so OA = OB; at the midpoint Q of BC, OB = OC in ' +
    'the same way. So OA = OC, the triangle OAC is isosceles, and its median OR is perpendicular ' +
    'to AC: the third perpendicular bisector passes through O too, and the circle about O ' +
    'through A passes through B and C. Drag any vertex.',
  hint: 'Drag A, B or C; the bisectors and O follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle, its circumcircle and the labels.
  viewBox: [50, 40, 440, 340],

  model: {
    points: { A: { x: 250, y: 70 }, B: { x: 90, y: 330 }, C: { x: 430, y: 330 } },
    params: {},
    composites: [],
    objects: [
      { id: 'P', type: 'midpoint', of: ['A', 'B'] },
      { id: 'Q', type: 'midpoint', of: ['B', 'C'] },
      { id: 'R', type: 'midpoint', of: ['C', 'A'] },
      // ends of the two dashed perpendicular bisectors (never shown as points)
      { id: 'P1', type: 'perpAlongDist', from: 'P', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.35, side: -1 },
      { id: 'P2', type: 'perpAlongDist', from: 'P', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.9 },
      { id: 'Q1', type: 'perpAlongDist', from: 'Q', dir: ['B', 'C'], lenOf: ['B', 'C'], scale: 0.1, side: -1 },
      { id: 'Q2', type: 'perpAlongDist', from: 'Q', dir: ['B', 'C'], lenOf: ['B', 'C'], scale: 0.75 },
      { id: 'O', type: 'intersection', of: ['P1', 'P2', 'Q1', 'Q2'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'LP', type: 'line', of: ['P1', 'P2'] },
      { id: 'LQ', type: 'line', of: ['Q1', 'Q2'] },
      { id: 'rP', type: 'rightAngle', at: 'P', from: 'A', to: 'O' },
      { id: 'rQ', type: 'rightAngle', at: 'Q', from: 'B', to: 'O' },
      { id: 'tPA', type: 'ticks', of: ['P', 'A'], n: 1 },
      { id: 'tPB', type: 'ticks', of: ['P', 'B'], n: 1 },
      { id: 'tQB', type: 'ticks', of: ['Q', 'B'], n: 2 },
      { id: 'tQC', type: 'ticks', of: ['Q', 'C'], n: 2 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'tri1', type: 'polygon', of: ['O', 'P', 'A'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['O', 'P', 'B'], color: 'beta' },
      { id: 'tri3', type: 'polygon', of: ['O', 'Q', 'B'], color: 'gamma' },
      { id: 'tri4', type: 'polygon', of: ['O', 'Q', 'C'], color: 'delta' },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 3 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 3 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 3 },
      { id: 'OR', type: 'segment', of: ['O', 'R'] },
      { id: 'rR', type: 'rightAngle', at: 'R', from: 'C', to: 'O' },
      { id: 'K', type: 'circle', of: ['O', 'A'] }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two perpendicular bisectors meet at O',
      formula: 'P and Q are the midpoints of AB and BC; the dashed lines are the perpendicular bisectors of those sides, and they meet at O. To prove: <strong>OA = OB = OC</strong>, and the perpendicular bisector of AC passes through O as well.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'P', 'Q', 'LP', 'LQ', 'rP', 'rQ', 'tPA', 'tPB', 'tQB', 'tQC', 'O'],
      hl: ['LP', 'LQ', 'O']
    },
    {
      phase: 'sas1', just: 'SAS congruence',
      title: 'OA = OB',
      formula: 'Join O to A and B. The triangles OPA and OPB share the side OP, have PA = PB, and have right angles at P between those sides. So they are congruent, and OA = OB.',
      show: ['OA', 'OB', 'tri1', 'tri2'],
      hl: ['tri1', 'tri2', 'OA', 'OB']
    },
    {
      phase: 'sas2', just: 'SAS congruence',
      title: 'OB = OC',
      formula: 'Join O to C. In the same way the triangles OQB and OQC share OQ, have QB = QC, and have right angles at Q: congruent, so OB = OC.',
      show: ['OC', 'tri3', 'tri4'],
      hl: ['tri3', 'tri4', 'OB', 'OC']
    },
    {
      phase: 'equal', just: 'Equal to the same',
      title: 'OA = OB = OC',
      formula: 'OA = OB and OB = OC, so all three distances are equal (three ticks each): O is equidistant from the three vertices.',
      show: ['tOA', 'tOB', 'tOC'],
      hl: ['OA', 'OB', 'OC', 'tOA', 'tOB', 'tOC']
    },
    {
      phase: 'third', just: 'Isosceles median',
      title: 'The third perpendicular bisector passes through O',
      formula: 'OA = OC, so triangle OAC is isosceles with apex O. Its median OR, to the midpoint R of AC, is perpendicular to AC: the triangles ORA and ORC agree in three sides, so their angles at R are equal and form a straight angle. Hence OR is the perpendicular bisector of AC, and it passes through O.',
      show: ['R', 'OR', 'rR'],
      hl: ['OR', 'rR', 'CA']
    },
    {
      phase: 'conclude', just: 'Definition of a circle',
      title: 'The circle about O through A passes through B and C',
      formula: 'A circle is the set of points at one distance from its centre. OA = OB = OC, so the circle with centre O and radius OA passes through all three vertices: the circumcircle, with O its circumcentre. <strong>∎</strong>',
      show: ['K'],
      hl: ['K', 'O']
    }
  ],

  readout: (P) => {
    const a = dist(P.O, P.A) / UNIT;
    const b = dist(P.O, P.B) / UNIT;
    const c = dist(P.O, P.C) / UNIT;
    return `OA = ${fmt(a, 2)}, OB = ${fmt(b, 2)}, OC = ${fmt(c, 2)}`;
  },

  // a real triangle, with O and the vertices inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 12000 &&
    [P.A, P.B, P.C].every((p) => p.x > 70 && p.x < 470 && p.y > 60 && p.y < 360) &&
    P.O && P.O.x > 65 && P.O.x < 475 && P.O.y > 55 && P.O.y < 365
};

export default circumcentre;
