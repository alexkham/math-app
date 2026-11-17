// ===========================================================
// proofs/diagonalsBisectConverse.js — the converse of the
// parallelogram diagonals theorem: a quadrilateral whose
// diagonals bisect each other is a parallelogram.
// AO = OC and BO = OD; the vertical angles at O are equal, so
// AOB ≅ COD (SAS) and ∠OAB = ∠OCD. These are alternate angles for
// AB and CD cut by AC, so AB ∥ CD; the same with AOD ≅ COB gives
// AD ∥ BC.
// O, A and B are free; C and D are A and B mirrored in O, so the
// diagonals bisect each other by construction and nothing about
// the sides is built in.
// O is named in the angle BOC, away from the marked angles; it
// carries labelDist so that its name clears both diagonals.
// Phases: given, vertical, sas, alternate, conclude
// ===========================================================

import { angleDeg, dist, fmt } from './math.mjs';

// the angle between two lines, 0° when they are parallel
const lineAngle = (p, q, r, s) => {
  const a = Math.atan2(q.y - p.y, q.x - p.x) - Math.atan2(s.y - r.y, s.x - r.x);
  let d = Math.abs(a * 180 / Math.PI) % 180;
  return Math.min(d, 180 - d);
};

const diagonalsBisectConverse = {
  label: 'Diagonals that bisect each other',
  info:
    'The diagonals AC and BD cut each other in half at O: AO = OC and BO = OD. The vertical angles AOB ' +
    'and COD are equal, so the triangles AOB and COD are congruent (SAS) and ∠OAB = ∠OCD. These are ' +
    'alternate angles for AB and CD, so AB ∥ CD; in the same way AD ∥ BC, and ABCD is a parallelogram. ' +
    'Drag A, B or O.',
  hint: 'Drag A or B to change the diagonals, or O to move the crossing',
  // names point away from a spot between O and the side AD, so O is named in the angle BOC,
  // away from the marked vertical angles AOB and COD
  labelCenter: ['O', 'O', 'O', 'A', 'D'],
  // Frame for the quadrilateral and its labels.
  viewBox: [105, 92, 350, 266],

  model: {
    points: { O: { x: 280, y: 225, labelDist: 26 }, A: { x: 150, y: 300 }, B: { x: 190, y: 130 } },
    params: {},
    composites: [],
    objects: [
      // C, D: A and B mirrored in O, so that AO = OC and BO = OD
      { id: 'C', type: 'pointAlongDist', from: 'O', dir: ['A', 'O'], lenOf: ['O', 'A'] },
      { id: 'D', type: 'pointAlongDist', from: 'O', dir: ['B', 'O'], lenOf: ['O', 'B'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'tAO', type: 'ticks', of: ['A', 'O'], n: 1 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 1 },
      { id: 'tBO', type: 'ticks', of: ['B', 'O'], n: 2 },
      { id: 'tOD', type: 'ticks', of: ['O', 'D'], n: 2 },
      { id: 'vAOB', type: 'angle', at: 'O', from: 'A', to: 'B', color: 'gamma', label: 'θ', radius: 40 },
      { id: 'vCOD', type: 'angle', at: 'O', from: 'C', to: 'D', color: 'gamma', label: 'θ', radius: 40 },
      { id: 'pAOB', type: 'polygon', of: ['A', 'O', 'B'], color: 'alpha' },
      { id: 'pCOD', type: 'polygon', of: ['C', 'O', 'D'], color: 'alpha' },
      { id: 'aA', type: 'angle', at: 'A', from: 'O', to: 'B', color: 'beta', label: 'α', radius: 20 },
      { id: 'aC', type: 'angle', at: 'C', from: 'O', to: 'D', color: 'beta', label: 'α', radius: 20 },
      { id: 'parAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'parCD', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'parBC', type: 'parallel', of: ['B', 'C'], n: 2 },
      { id: 'parAD', type: 'parallel', of: ['A', 'D'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Diagonals that cut each other in half',
      formula: 'In the quadrilateral ABCD the diagonals AC and BD cross at O, and each is cut in half there: <strong>AO = OC</strong> (one tick) and <strong>BO = OD</strong> (two ticks). To prove: <strong>ABCD is a parallelogram</strong>, that is AB ∥ CD and AD ∥ BC.',
      show: ['O', 'A', 'B', 'C', 'D', 'AB', 'BC', 'CD', 'DA', 'AC', 'BD', 'tAO', 'tOC', 'tBO', 'tOD'],
      hl: ['tAO', 'tOC', 'tBO', 'tOD']
    },
    {
      phase: 'vertical', just: 'Vertical angles',
      title: '∠AOB = ∠COD = θ',
      formula: 'The angles AOB and COD lie opposite each other where the diagonals cross: they are vertical angles, so <strong>∠AOB = ∠COD = θ</strong>.',
      show: ['vAOB', 'vCOD'],
      hl: ['vAOB', 'vCOD']
    },
    {
      phase: 'sas', just: 'SAS congruence',
      title: 'AOB ≅ COD',
      formula: 'The triangles AOB and COD have AO = OC, BO = OD and the equal angles θ between those sides. By SAS, <strong>AOB ≅ COD</strong>.',
      show: ['pAOB', 'pCOD'],
      hl: ['pAOB', 'pCOD', 'vAOB', 'vCOD']
    },
    {
      phase: 'alternate', just: 'Alternate angles converse',
      title: 'AB ∥ CD',
      formula: 'In the congruent triangles the angles at A and C match: ∠OAB = ∠OCD = α. They lie on opposite sides of AC, between AB and CD: they are alternate angles for those lines, and they are equal, so <strong>AB ∥ CD</strong> (one arrow each).',
      show: ['aA', 'aC', 'parAB', 'parCD'],
      hl: ['aA', 'aC', 'parAB', 'parCD']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'AD ∥ BC: a parallelogram',
      formula: 'The same steps for the other two triangles, AOD and COB (vertical angles at O, then SAS), give equal alternate angles for AD and BC, so <strong>AD ∥ BC</strong> (two arrows each). Both pairs of opposite sides are parallel: <strong>ABCD is a parallelogram</strong>. <strong>∎</strong>',
      show: ['parBC', 'parAD'],
      hl: ['parAB', 'parCD', 'parBC', 'parAD']
    }
  ],

  readout: (P) =>
    `angle AB to CD = ${fmt(lineAngle(P.A, P.B, P.C, P.D))}°,  angle AD to BC = ${fmt(lineAngle(P.A, P.D, P.B, P.C))}°`,

  // the diagonals long and crossing at 60° to 110°, the angles at A and C large enough for
  // their marks, and every vertex far enough inside the frame for its name
  isValid: (P) => {
    const inFrame = (p) => p.x > 141 && p.x < 419 && p.y > 128 && p.y < 322;
    const t = angleDeg(P.O, P.A, P.B);
    return dist(P.O, P.A) > 110 && dist(P.O, P.B) > 95 && t > 60 && t < 110 &&
      angleDeg(P.A, P.O, P.B) > 24 && angleDeg(P.B, P.O, P.A) > 24 &&
      [P.A, P.B, P.C, P.D].every(inFrame);
  }
};

export default diagonalsBisectConverse;
