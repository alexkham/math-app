// Frozen-state SVGs for the 3-Set Venn Diagram tool (Line 1 anchor mesh).
//
// The component draws its diagram as inline JSX, so this module ports that
// markup element for element and keeps the component's own geometry:
//
//   canvas 500x350 on #fafafa, omega at (20, 30)
//   circles A cx 200 cy 160, B cx 300 cy 160, C cx 250 cy 220, all r 90;
//           fills rgba(239,68,68,.15), rgba(34,197,94,.15), rgba(59,130,246,.15);
//           strokes #ef4444, #22c55e, #3b82f6 at width 2
//   segments eight 30x20 boxes at the component's own coordinates, numbered
//           1-8; the selected one is filled rgba(255,215,0,.9) with a #f59e0b
//           stroke, exactly as the component renders selectedOutcome
//   labels  A in #dc2626, B in #16a34a, C in #2563eb
//
// The problem is imported from vennThreeSetProblems.js - the corrected
// "Demographics Study" the page passes to the component as problemsData - so
// every probability quoted by the page is the tool's own rendered data. See
// that file's header for what was wrong with the component's shipped default
// and how the repair was derived.
//
// The diagram itself carries no numbers - the component shows region
// probabilities in an HTML list beside it, not inside the SVG - so the page
// puts the eight values in each unit's text panel rather than inventing
// labels the tool does not draw.

import { threeSetProblems } from './vennThreeSetProblems';

const W = 500, H = 350;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// the component's own segment anchors
const SEGMENTS = [
  { x: 250, y: 180 }, // 1: A n B n C    - centre, the triple intersection
  { x: 250, y: 115 }, // 2: A n B n Cc   - top intersection
  { x: 195, y: 200 }, // 3: A n Bc n C   - left intersection
  { x: 170, y: 140 }, // 4: A n Bc n Cc  - A only
  { x: 305, y: 200 }, // 5: Ac n B n C   - right intersection
  { x: 330, y: 140 }, // 6: Ac n B n Cc  - B only
  { x: 250, y: 260 }, // 7: Ac n Bc n C  - C only
  { x: 400, y: 60 },  // 8: Ac n Bc n Cc - outside all three circles
];

// the component's own circles, in its own draw order
const CIRCLES = [
  { cx: 200, cy: 160, r: 90, fill: 'rgba(239,68,68,0.15)', stroke: '#ef4444' },
  { cx: 300, cy: 160, r: 90, fill: 'rgba(34,197,94,0.15)', stroke: '#22c55e' },
  { cx: 250, cy: 220, r: 90, fill: 'rgba(59,130,246,0.15)', stroke: '#3b82f6' },
];

export const OUTCOMES = [
  'A∩B∩C', 'A∩B∩Cᶜ', 'A∩Bᶜ∩C', 'A∩Bᶜ∩Cᶜ',
  'Aᶜ∩B∩C', 'Aᶜ∩B∩Cᶜ', 'Aᶜ∩Bᶜ∩C', 'Aᶜ∩Bᶜ∩Cᶜ',
];

function freeze(selected, label) {
  let s = `<rect width="${W}" height="${H}" fill="#fafafa"/>`;
  s += `<text x="20" y="30" font-size="18" font-weight="bold" fill="#374151" ` +
    `font-family="Arial, sans-serif">&#937;</text>`;

  CIRCLES.forEach((c) => {
    s += `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="${c.fill}" ` +
      `stroke="${c.stroke}" stroke-width="2"/>`;
  });

  SEGMENTS.forEach((seg, i) => {
    const on = selected === i;
    s += `<rect x="${seg.x - 15}" y="${seg.y - 10}" width="30" height="20" ` +
      `fill="${on ? 'rgba(255,215,0,0.9)' : 'rgba(255,255,255,0.9)'}" ` +
      `stroke="${on ? '#f59e0b' : '#333'}" stroke-width="${on ? 2 : 1}" rx="3"/>`;
    s += `<text x="${seg.x}" y="${seg.y + 3}" text-anchor="middle" font-size="12" ` +
      `font-weight="bold" font-family="Arial, sans-serif">${i + 1}</text>`;
  });

  s += `<text x="130" y="120" font-size="20" font-weight="bold" fill="#dc2626" font-family="Arial, sans-serif">A</text>`;
  s += `<text x="350" y="120" font-size="20" font-weight="bold" fill="#16a34a" font-family="Arial, sans-serif">B</text>`;
  s += `<text x="245" y="300" font-size="20" font-weight="bold" fill="#2563eb" font-family="Arial, sans-serif">C</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" width="440" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

/* ---- the problem's numbers, checked against its own stated givens ---- */
export const problems = threeSetProblems.map((p) => {
  const [r1, r2, r3, r4, r5, r6, r7, r8] = p.solution;
  return {
    name: p.name,
    events: p.events,
    marginals: p.marginals,
    constraints: p.constraints.map((c) => c.display),
    solution: p.solution,
    explanations: p.explanations,
    total: r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8,
    // recomputed from the eight regions, so the page can state that the tool's
    // answer reproduces every marginal and constraint it was given
    pA: r1 + r2 + r3 + r4,
    pB: r1 + r2 + r5 + r6,
    pC: r1 + r3 + r5 + r7,
    pAB: r1 + r2,
    pAC: r1 + r3,
    pBC: r1 + r5,
    pABC: r1,
    pAnotB: r3 + r4,
    pAnotC: r2 + r4,
    // at least one of the three events - segments 1 through 7
    union: 1 - r8,
    // conditional probabilities the regions make available
    pABgivenC: (r1 + r3 + r5 + r7) > 0 ? r1 / (r1 + r3 + r5 + r7) : 0,
    pBgivenA: (r1 + r2 + r3 + r4) > 0 ? (r1 + r2) / (r1 + r2 + r3 + r4) : 0,
    pBgivenNotA: (r5 + r6 + r7 + r8) > 0 ? (r5 + r6) / (r5 + r6 + r7 + r8) : 0,
  };
});

const near = (a, b) => Math.abs(a - b) < 1e-9;

// every stated given, re-derived from the eight regions the tool prints
export const consistent = problems.every((p) =>
  near(p.total, 1) &&
  near(p.pA, p.marginals[0]) &&
  near(p.pB, p.marginals[1]) &&
  near(p.pC, p.marginals[2]) &&
  near(p.pAnotB, 0.4) &&
  near(p.pAnotC, 0.18) &&
  near(p.pBC, 0.38) &&
  near(p.pABC, 0.08) &&
  p.solution.every((r) => r >= 0)
);

// The inclusion-exclusion identity the page quotes, computed both ways.
export const inclusionExclusion = problems.map((p) => ({
  fromRegions: p.union,
  fromFormula: p.pA + p.pB + p.pC - p.pAB - p.pAC - p.pBC + p.pABC,
}));

const vennThreeSetDiagrams = {
  // the opening state: nothing selected
  demographicsStudy: freeze(null, 'Three-set Venn diagram, Demographics Study, no region selected'),
  // region 1, the triple intersection at the centre, clicked
  tripleIntersectionSelected: freeze(0, 'Three-set Venn diagram with region 1, the triple intersection A and B and C, selected'),
  // region 8, inside the sample space but outside all three circles, clicked
  outsideRegionSelected: freeze(7, 'Three-set Venn diagram with region 8, outside all three circles, selected'),
};

export default vennThreeSetDiagrams;
