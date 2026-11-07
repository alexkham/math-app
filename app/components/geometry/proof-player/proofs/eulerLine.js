// ===========================================================
// proofs/eulerLine.js — the Euler line
// The circumcentre O, the centroid G and the orthocentre H of a
// triangle lie on one line, with HG = 2 GO. Proof: let A′ be
// the point opposite A on the circumcircle. Thales makes A′B ⟂ AB
// and A′C ⟂ AC, so A′B ∥ CH and A′C ∥ BH: BHCA′ is a
// parallelogram, and its diagonals bisect each other, so the
// midpoint D of BC is the midpoint of HA′. In triangle AHA′ the
// segments AD and HO are medians; they meet at its centroid,
// two thirds of the way from A along AD, which is G.
// Phases: given, construct, para, mid, medians, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.05 && t < 0.95;
};

const eulerLine = {
  label: 'Euler line',
  info:
    'Let A′ be the point of the circumcircle opposite A. The angles at B and C in the semicircle ' +
    'are right, so A′B ∥ CH and A′C ∥ BH and BHCA′ is a parallelogram: its diagonals bisect ' +
    'each other, so the midpoint D of BC is also the midpoint of HA′. Then AD and HO are two ' +
    'medians of triangle AHA′, meeting at its centroid, two thirds of the way from A along AD: ' +
    'that point is G. So H, G, O are collinear and HG = 2 GO. Drag any vertex.',
  hint: 'Drag A, B or C; O, G, H and the construction follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle, its circumcircle and the labels.
  viewBox: [50, 60, 440, 350],

  model: {
    points: { A: { x: 330, y: 110 }, B: { x: 140, y: 300 }, C: { x: 400, y: 300 } },
    params: {},
    composites: [],
    objects: [
      // circumcentre: crossing of two perpendicular bisectors
      { id: 'P', type: 'midpoint', of: ['A', 'B'] },
      { id: 'D', type: 'midpoint', of: ['B', 'C'] },
      { id: 'E', type: 'midpoint', of: ['C', 'A'] },
      { id: 'P1', type: 'perpAlongDist', from: 'P', dir: ['A', 'B'], lenOf: ['A', 'B'], side: -1 },
      { id: 'P2', type: 'perpAlongDist', from: 'P', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'D1', type: 'perpAlongDist', from: 'D', dir: ['B', 'C'], lenOf: ['B', 'C'], side: -1 },
      { id: 'D2', type: 'perpAlongDist', from: 'D', dir: ['B', 'C'], lenOf: ['B', 'C'] },
      { id: 'O', type: 'intersection', of: ['P1', 'P2', 'D1', 'D2'] },
      // centroid: crossing of two medians
      { id: 'G', type: 'intersection', of: ['A', 'D', 'B', 'E'] },
      // orthocentre: crossing of two altitudes
      { id: 'Ha', type: 'foot', from: 'A', to: ['B', 'C'] },
      { id: 'Hb', type: 'foot', from: 'B', to: ['C', 'A'] },
      { id: 'Hc', type: 'foot', from: 'C', to: ['A', 'B'] },
      { id: 'H', type: 'intersection', of: ['A', 'Ha', 'B', 'Hb'] },
      // A′: the point of the circumcircle opposite A
      { id: 'A2', type: 'pointAlongDist', from: 'O', dir: ['A', 'O'], lenOf: ['O', 'A'], label: 'A′' },
      // ends of the dashed Euler line
      { id: 'L1', type: 'pointAlongDist', from: 'H', dir: ['O', 'H'], lenOf: ['H', 'O'], scale: 0.5 },
      { id: 'L2', type: 'pointAlongDist', from: 'O', dir: ['H', 'O'], lenOf: ['H', 'O'], scale: 0.8 },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'K', type: 'circle', of: ['O', 'A'] },
      { id: 'AA2', type: 'line', of: ['A', 'A2'] },
      { id: 'BA2', type: 'segment', of: ['B', 'A2'] },
      { id: 'CA2', type: 'segment', of: ['C', 'A2'] },
      { id: 'BHb', type: 'segment', of: ['B', 'Hb'], color: 'alpha' },
      { id: 'CHc', type: 'segment', of: ['C', 'Hc'], color: 'alpha' },
      { id: 'rHb', type: 'rightAngle', at: 'Hb', from: 'A', to: 'B' },
      { id: 'rHc', type: 'rightAngle', at: 'Hc', from: 'B', to: 'C' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'A2', to: 'A' },
      { id: 'rC', type: 'rightAngle', at: 'C', from: 'A', to: 'A2' },
      { id: 'pBA2', type: 'parallel', of: ['B', 'A2'], n: 1 },
      { id: 'pCH', type: 'parallel', of: ['C', 'H'], n: 1 },
      { id: 'pA2C', type: 'parallel', of: ['A2', 'C'], n: 2 },
      { id: 'pBH', type: 'parallel', of: ['B', 'H'], n: 2 },
      { id: 'PG', type: 'polygon', of: ['B', 'H', 'C', 'A2'], color: 'gamma' },
      { id: 'HA2', type: 'segment', of: ['H', 'A2'] },
      { id: 'tHD', type: 'ticks', of: ['H', 'D'], n: 1 },
      { id: 'tDA2', type: 'ticks', of: ['D', 'A2'], n: 1 },
      { id: 'tBD', type: 'ticks', of: ['B', 'D'], n: 2 },
      { id: 'tDC', type: 'ticks', of: ['D', 'C'], n: 2 },
      { id: 'TA', type: 'polygon', of: ['A', 'H', 'A2'], color: 'beta' },
      { id: 'AH', type: 'segment', of: ['A', 'H'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'HO', type: 'segment', of: ['H', 'O'] },
      { id: 'tAO', type: 'ticks', of: ['A', 'O'], n: 3 },
      { id: 'tOA2', type: 'ticks', of: ['O', 'A2'], n: 3 },
      { id: 'EL', type: 'line', of: ['L1', 'L2'] }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Three centres of one triangle',
      formula: 'O is the circumcentre of ABC, G its centroid and H its orthocentre, each found on its own page. To prove: <strong>H, G and O lie on one line, with HG = 2 GO</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'O', 'G', 'H'],
      hl: ['O', 'G', 'H']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'The point A′ opposite A on the circumcircle',
      formula: 'Draw the circumcircle and the diameter from A through O to A′. Join A′ to B and to C, and draw the altitudes from B and from C, which pass through H.',
      show: ['K', 'A2', 'AA2', 'BA2', 'CA2', 'Hb', 'Hc', 'BHb', 'CHc', 'rHb', 'rHc'],
      hl: ['A2', 'AA2']
    },
    {
      phase: 'para', just: 'Thales + parallels',
      title: 'BHCA′ is a parallelogram',
      formula: 'AA′ is a diameter, so the angles at B and C in the semicircle are right: A′B ⟂ AB and A′C ⟂ AC. The altitude from C is also perpendicular to AB, so A′B ∥ CH; the altitude from B is perpendicular to AC, so A′C ∥ BH. Both pairs of opposite sides parallel: BHCA′ is a parallelogram.',
      show: ['rB', 'rC', 'pBA2', 'pCH', 'pA2C', 'pBH', 'PG'],
      hl: ['PG', 'BA2', 'CA2']
    },
    {
      phase: 'mid', just: 'Parallelogram diagonals',
      title: 'D is the midpoint of HA′',
      formula: 'The diagonals of a parallelogram bisect each other. The diagonals of BHCA′ are BC and HA′, so they cross at the midpoint D of BC, and D is the midpoint of HA′ as well: HD = DA′.',
      show: ['D', 'HA2', 'tHD', 'tDA2', 'tBD', 'tDC'],
      hl: ['HA2', 'D', 'tHD', 'tDA2']
    },
    {
      phase: 'medians', just: 'Medians and centroid',
      title: 'AD and HO are medians of triangle AHA′',
      formula: 'In triangle AHA′, D is the midpoint of the side HA′, so AD is a median; and O is the midpoint of the side AA′, so HO is a median. The medians of a triangle meet at its centroid, which lies two thirds of the way from A along AD.',
      show: ['TA', 'AH', 'AD', 'HO', 'tAO', 'tOA2'],
      hl: ['TA', 'AD', 'HO']
    },
    {
      phase: 'conclude', just: 'Same point',
      title: 'G lies on HO, and HG = 2 GO',
      formula: 'AD is also a median of the original triangle ABC, and the point two thirds of the way from A along it is the centroid G of ABC. So G is the centroid of AHA′ too: it lies on the median HO, two thirds of the way from H, which gives HG = 2 GO. The line through H, G and O is the Euler line. <strong>∎</strong>',
      show: ['EL'],
      hl: ['EL', 'H', 'G', 'O']
    }
  ],

  readout: (P) => {
    const r = dist(P.H, P.G) / (dist(P.G, P.O) || 1);
    const ang = angleDeg(P.G, P.H, P.O);
    return `HG / GO = ${fmt(r, 2)},  angle HGO = ${fmt(ang)}°`;
  },

  // an acute, clearly scalene triangle, with the circumcircle and A′ inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 10000 &&
    between(P.Ha, P.B, P.C) && between(P.Hb, P.C, P.A) && between(P.Hc, P.A, P.B) &&
    dist(P.H, P.O) > 25 &&
    [P.A, P.B, P.C, P.A2].every((p) => p.x > 65 && p.x < 475 && p.y > 75 && p.y < 395) &&
    P.O && P.O.y - dist(P.O, P.A) > 70 && P.O.y + dist(P.O, P.A) < 405 &&
    P.O.x - dist(P.O, P.A) > 55 && P.O.x + dist(P.O, P.A) < 485
};

export default eulerLine;
