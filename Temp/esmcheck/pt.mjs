// ===========================================================
// proofs/pitot.js — Pitot's theorem: in a quadrilateral drawn round
// a circle (every side touches it), the two pairs of opposite sides
// have equal sums: AB + CD = BC + DA.
// The circle touches AB, BC, CD, DA at P, Q, R, S. The two tangents
// from each vertex are equal (AP = AS, BP = BQ, CQ = CR, DR = DS);
// each side is the sum of two of these pieces, and both sums use
// one piece from every vertex.
// The circle is fixed: O is a midpoint of two hidden copies of the
// centre and H3 fixes the radius. P, Q, R, S slide round the circle;
// the tangent at each is found with perpAlongDist and the vertices
// are where neighbouring tangents meet.
// Phases: given, tangents, first, second, conclude
// ===========================================================

import { dist, fmt } from './math.mjs';

const UNIT = 60; // px per unit in the readout
const D2R = Math.PI / 180;

const pitot = {
  label: "Pitot's theorem",
  info:
    'The circle touches the sides AB, BC, CD, DA at P, Q, R, S. The two tangents from each vertex are ' +
    'equal: AP = AS, BP = BQ, CQ = CR, DR = DS. So AB + CD = AP + PB + CR + RD and BC + DA = BQ + QC + ' +
    'DS + SA are sums of the same four lengths, and AB + CD = BC + DA. Drag P, Q, R or S round the circle.',
  hint: 'Drag P, Q, R or S round the circle',
  // names point away from a spot just below and right of O, so O is named up and to the left;
  // the points of contact are named outward, square to their sides, and the vertices along
  // the bisectors of their angles
  labelCenter: ['H1', 'H1', 'H1', 'H4'],
  // Frame for the circle, the quadrilateral and the labels.
  viewBox: [80, 85, 400, 320],

  model: {
    // H1, H2 (copies of the centre), H3 (fixes the radius) and H4 (shifts the label centre) are never shown
    points: { H1: { x: 266, y: 228 }, H2: { x: 266, y: 228 }, H3: { x: 346, y: 228 }, H4: { x: 306, y: 268 } },
    params: { tp: -95 * D2R, tq: 0 * D2R, tr: 68 * D2R, ts: 163 * D2R },
    composites: [],
    objects: [
      { id: 'O', type: 'midpoint', of: ['H1', 'H2'] },
      { id: 'W', type: 'circle', of: ['O', 'H3'] },
      { id: 'P', type: 'onCircle', center: 'O', through: 'H3', param: 'tp', drag: true },
      { id: 'Q', type: 'onCircle', center: 'O', through: 'H3', param: 'tq', drag: true },
      { id: 'R', type: 'onCircle', center: 'O', through: 'H3', param: 'tr', drag: true },
      { id: 'S', type: 'onCircle', center: 'O', through: 'H3', param: 'ts', drag: true },
      // a second point on the tangent at each point of contact (never shown)
      { id: 'P2', type: 'perpAlongDist', from: 'P', dir: ['O', 'P'], lenOf: ['O', 'H3'] },
      { id: 'Q2', type: 'perpAlongDist', from: 'Q', dir: ['O', 'Q'], lenOf: ['O', 'H3'] },
      { id: 'R2', type: 'perpAlongDist', from: 'R', dir: ['O', 'R'], lenOf: ['O', 'H3'] },
      { id: 'S2', type: 'perpAlongDist', from: 'S', dir: ['O', 'S'], lenOf: ['O', 'H3'] },
      // the vertices: where neighbouring tangents meet
      { id: 'A', type: 'intersection', of: ['S', 'S2', 'P', 'P2'] },
      { id: 'B', type: 'intersection', of: ['P', 'P2', 'Q', 'Q2'] },
      { id: 'C', type: 'intersection', of: ['Q', 'Q2', 'R', 'R2'] },
      { id: 'D', type: 'intersection', of: ['R', 'R2', 'S', 'S2'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      // the eight tangent pieces, one colour per vertex
      { id: 'sAP', type: 'segment', of: ['A', 'P'], color: 'alpha' },
      { id: 'sSA', type: 'segment', of: ['S', 'A'], color: 'alpha' },
      { id: 'sPB', type: 'segment', of: ['P', 'B'], color: 'beta' },
      { id: 'sBQ', type: 'segment', of: ['B', 'Q'], color: 'beta' },
      { id: 'sQC', type: 'segment', of: ['Q', 'C'], color: 'gamma' },
      { id: 'sCR', type: 'segment', of: ['C', 'R'], color: 'gamma' },
      { id: 'sRD', type: 'segment', of: ['R', 'D'], color: 'delta' },
      { id: 'sDS', type: 'segment', of: ['D', 'S'], color: 'delta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A quadrilateral drawn round a circle',
      formula: 'The circle with centre O touches the four sides of ABCD: AB at P, BC at Q, CD at R and DA at S. To prove: <strong>AB + CD = BC + DA</strong>.',
      show: ['O', 'W', 'A', 'B', 'C', 'D', 'P', 'Q', 'R', 'S', 'AB', 'BC', 'CD', 'DA'],
      hl: ['AB', 'BC', 'CD', 'DA']
    },
    {
      phase: 'tangents', just: 'Two tangents',
      title: 'Equal tangents from each vertex',
      formula: 'From each vertex two tangents touch the circle, and the two are equal (one colour per vertex): <strong>AP = AS, BP = BQ, CQ = CR, DR = DS</strong>.',
      show: ['sAP', 'sSA', 'sPB', 'sBQ', 'sQC', 'sCR', 'sRD', 'sDS'],
      hl: ['sAP', 'sSA', 'sPB', 'sBQ', 'sQC', 'sCR', 'sRD', 'sDS']
    },
    {
      phase: 'first', just: 'Segment addition',
      title: 'AB + CD = AP + PB + CR + RD',
      formula: 'P lies on AB and R on CD, so each side is the sum of its two pieces: <strong>AB + CD = AP + PB + CR + RD</strong>, one piece from each vertex.',
      show: [],
      hl: ['sAP', 'sPB', 'sCR', 'sRD']
    },
    {
      phase: 'second', just: 'Segment addition',
      title: 'BC + DA = BQ + QC + DS + SA',
      formula: 'In the same way Q splits BC and S splits DA: <strong>BC + DA = BQ + QC + DS + SA</strong>, again one piece from each vertex.',
      show: [],
      hl: ['sBQ', 'sQC', 'sDS', 'sSA']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'AB + CD = BC + DA',
      formula: 'Replace each piece by its equal from the same vertex: BQ = BP, QC = CR, DS = DR, SA = AP. Then BC + DA = BP + CR + DR + AP = AB + CD, so <strong>AB + CD = BC + DA</strong>. <strong>∎</strong>',
      show: [],
      hl: ['sAP', 'sSA', 'sPB', 'sBQ', 'sQC', 'sCR', 'sRD', 'sDS']
    }
  ],

  readout: (P) =>
    `AB + CD = ${fmt((dist(P.A, P.B) + dist(P.C, P.D)) / UNIT, 2)},  BC + DA = ${fmt((dist(P.B, P.C) + dist(P.D, P.A)) / UNIT, 2)}`,

  // the points of contact in order round the circle, each arc between neighbours from 55° to
  // 120° (so every vertex is near enough and its angle is not too sharp), all in the frame
  isValid: (P) => {
    const ang = (p) => Math.atan2(p.y - P.O.y, p.x - P.O.x);
    const gap = (a, b) => { let g = (ang(b) - ang(a)) / D2R; while (g < 0) g += 360; return g; };
    const gs = [gap(P.P, P.Q), gap(P.Q, P.R), gap(P.R, P.S), gap(P.S, P.P)];
    const inFrame = (p) => p && p.x > 117 && p.x < 443 && p.y > 122 && p.y < 368;
    return Math.abs(gs.reduce((s, g) => s + g, 0) - 360) < 1 && gs.every((g) => g > 55 && g < 120) &&
      [P.A, P.B, P.C, P.D].every(inFrame);
  }
};

export default pitot;
