// Frozen-state SVGs for the 2-Set Venn Diagram tool (Line 1 anchor mesh).
//
// The component draws its diagram as inline JSX, so this module ports that
// markup element for element and keeps the component's own geometry:
//
//   canvas 500x300 on #fafafa, omega at (20, 30)
//   circles cx 200 / 300, cy 175, r 80, fills rgba(239,68,68,.15) and
//           rgba(34,197,94,.15), strokes #ef4444 and #22c55e at width 2
//   segments four 30x20 boxes at the component's own coordinates, numbered 1-4;
//           the selected one is filled rgba(255,215,0,.9) with a #f59e0b stroke,
//           exactly as the component renders selectedOutcome
//   labels  A in #dc2626, B in #16a34a
//
// The two problems are imported from the component (they were hoisted there for
// this purpose), so every probability quoted by the page is the tool's own.
//
// The diagram itself carries no numbers - the component shows region
// probabilities in an HTML list beside it, not inside the SVG - so the page puts
// the four values in each unit's text panel rather than inventing labels the
// tool does not draw.

import { defaultProblems } from './VennExplorer2';

const W = 500, H = 300;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// the component's own segment anchors
const SEGMENTS = [
  { x: 250, y: 175 }, // 1: A n B      - intersection
  { x: 180, y: 175 }, // 2: A n Bc     - A only
  { x: 320, y: 175 }, // 3: Ac n B     - B only
  { x: 400, y: 80 },  // 4: Ac n Bc    - outside both
];

export const OUTCOMES = ['A∩B', 'A∩Bᶜ', 'Aᶜ∩B', 'Aᶜ∩Bᶜ'];

function freeze(selected, label) {
  let s = `<rect width="${W}" height="${H}" fill="#fafafa"/>`;
  s += `<text x="20" y="30" font-size="18" font-weight="bold" fill="#374151" ` +
    `font-family="Arial, sans-serif">&#937;</text>`;
  s += `<circle cx="200" cy="175" r="80" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>`;
  s += `<circle cx="300" cy="175" r="80" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>`;

  SEGMENTS.forEach((seg, i) => {
    const on = selected === i;
    s += `<rect x="${seg.x - 15}" y="${seg.y - 10}" width="30" height="20" ` +
      `fill="${on ? 'rgba(255,215,0,0.9)' : 'rgba(255,255,255,0.9)'}" ` +
      `stroke="${on ? '#f59e0b' : '#333'}" stroke-width="${on ? 2 : 1}" rx="3"/>`;
    s += `<text x="${seg.x}" y="${seg.y + 3}" text-anchor="middle" font-size="12" ` +
      `font-weight="bold" font-family="Arial, sans-serif">${i + 1}</text>`;
  });

  s += `<text x="150" y="120" font-size="20" font-weight="bold" fill="#dc2626" font-family="Arial, sans-serif">A</text>`;
  s += `<text x="340" y="120" font-size="20" font-weight="bold" fill="#16a34a" font-family="Arial, sans-serif">B</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" width="440" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

/* ---- each problem's numbers, checked against its own stated marginals ---- */
export const problems = defaultProblems.map((p) => {
  const [ab, anb, nab, nanb] = p.solution;
  return {
    name: p.name,
    events: p.events,
    marginals: p.marginals,
    constraints: p.constraints.map((c) => c.display),
    solution: p.solution,
    explanations: p.explanations,
    total: ab + anb + nab + nanb,
    // recomputed from the four regions, so the page can state that the tool's
    // answer reproduces the marginals it was given
    pA: ab + anb,
    pB: ab + nab,
    union: ab + anb + nab,
    // conditional probabilities the regions make available
    pBgivenA: (ab + anb) > 0 ? ab / (ab + anb) : 0,
    pAgivenB: (ab + nab) > 0 ? ab / (ab + nab) : 0,
  };
});

export const consistent = problems.every((p) =>
  Math.abs(p.total - 1) < 1e-9 &&
  Math.abs(p.pA - p.marginals[0]) < 1e-9 &&
  Math.abs(p.pB - p.marginals[1]) < 1e-9
);

const vennTwoSetDiagrams = {
  // the opening state of each problem: nothing selected
  studentSurvey: freeze(null, 'Two-set Venn diagram, Student Survey, no region selected'),
  healthScreening: freeze(null, 'Two-set Venn diagram, Health Screening, no region selected'),
  // the interaction state: region 1, the intersection, clicked
  intersectionSelected: freeze(0, 'Two-set Venn diagram with region 1, the intersection A and B, selected'),
};

export default vennTwoSetDiagrams;
