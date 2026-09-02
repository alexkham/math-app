// Frozen-state SVGs for the Conditional Probability Venn tool (Line 1 mesh).
//
// The component draws a sample-space rectangle divided into n equal vertical
// compartments B1..Bn with an event A drawn as an ellipse across them. This
// module ports that markup element for element and keeps its geometry:
//
//   canvas 650x450, sample space inset by padding 40 with topPadding 70
//   compartments equal vertical slices, divider lines dashed #9ca3af 5,5,
//                labels B1.. above the box
//   event A      ellipse at the centre, rx = 0.45w, ry = 0.48h, fill #6366f1
//                at 0.3 opacity; when a compartment is selected the full
//                ellipse fades to 0.1 with a dashed outline and the part inside
//                that compartment is redrawn at 0.6 through a clipPath
//
// The area maths is the component's own: calculateEllipseRectIntersection
// integrates the ellipse over each compartment on a 100x100 sample grid, the
// raw areas are scaled so A totals exactly 68 out of a sample space of 100, and
// the rounding residue is pushed onto the largest compartment. Those are the
// numbers the tool prints, so they are the numbers the page quotes.

const WIDTH = 650, HEIGHT = 450, PADDING = 40, TOP_PADDING = 70;
const ORIG_W = WIDTH - 2 * PADDING, ORIG_H = HEIGHT - 2 * PADDING;
const SAMPLE = { x: PADDING, y: TOP_PADDING, width: ORIG_W, height: ORIG_H };
const COLORS = ['#93c5fd', '#fbbf24', '#f87171', '#fb923c'];
const NAMES = ['B₁', 'B₂', 'B₃', 'B₄'];
const TARGET_AREA_A = 68;
const NORMALIZED_SPACE = 100;

const r2 = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const EVENT_A = {
  cx: SAMPLE.x + ORIG_W * 0.5,
  cy: SAMPLE.y + ORIG_H * 0.5,
  rx: Math.min(ORIG_W * 0.45, ORIG_W * 0.5),
  ry: Math.min(ORIG_H * 0.48, ORIG_H * 0.5),
};

function buildCompartments(n) {
  const w = SAMPLE.width / n;
  return Array.from({ length: n }, (_, i) => ({
    id: i, name: NAMES[i], color: COLORS[i],
    x: SAMPLE.x + i * w, y: SAMPLE.y, width: w, height: SAMPLE.height,
  }));
}

// ported verbatim from the component
function intersectionArea(comp) {
  const { cx, cy, rx, ry } = EVENT_A;
  const rectLeft = comp.x, rectRight = comp.x + comp.width;
  const rectTop = comp.y, rectBottom = comp.y + comp.height;
  const eLeft = cx - rx, eRight = cx + rx, eTop = cy - ry, eBottom = cy + ry;
  if (rectRight <= eLeft || rectLeft >= eRight || rectBottom <= eTop || rectTop >= eBottom) return 0;
  const oLeft = Math.max(rectLeft, eLeft), oRight = Math.min(rectRight, eRight);
  const oTop = Math.max(rectTop, eTop), oBottom = Math.min(rectBottom, eBottom);
  const samples = 100;
  const dx = (oRight - oLeft) / samples, dy = (oBottom - oTop) / samples;
  let area = 0;
  for (let i = 0; i < samples; i++) {
    for (let j = 0; j < samples; j++) {
      const x = oLeft + (i + 0.5) * dx, y = oTop + (j + 0.5) * dy;
      if (Math.pow((x - cx) / rx, 2) + Math.pow((y - cy) / ry, 2) <= 1) area += dx * dy;
    }
  }
  return area;
}

// the component's own normalisation, including the residue adjustment
export function partition(n) {
  const compartments = buildCompartments(n);
  const raw = compartments.map(intersectionArea);
  const scale = TARGET_AREA_A / raw.reduce((a, b) => a + b, 0);
  const normalized = raw.map((a) => Math.round(a * scale));
  const sum = normalized.reduce((a, b) => a + b, 0);
  if (sum !== TARGET_AREA_A) {
    const maxIndex = normalized.indexOf(Math.max(...normalized));
    normalized[maxIndex] += TARGET_AREA_A - sum;
  }
  const compArea = NORMALIZED_SPACE / n;
  const probabilities = normalized.map((area) => {
    const pB = compArea / NORMALIZED_SPACE;
    const pAandB = area / NORMALIZED_SPACE;
    return { pB, pAandB, pAgivenB: pB > 0 ? pAandB / pB : 0, intersectionArea: area };
  });
  return {
    n, compartments, probabilities,
    totalProbA: probabilities.reduce((s, p) => s + p.pAandB, 0),
    areas: normalized,
  };
}

function freeze(n, selected, label) {
  const { compartments } = partition(n);
  let s = `<rect width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>`;
  s += `<rect x="${SAMPLE.x}" y="${SAMPLE.y}" width="${SAMPLE.width}" height="${SAMPLE.height}" ` +
    `fill="white" stroke="#374151" stroke-width="1.5"/>`;
  s += `<text x="${SAMPLE.x + SAMPLE.width - 10}" y="${SAMPLE.y + 20}" font-size="18" ` +
    `font-weight="bold" fill="#374151" text-anchor="end" font-family="Arial, sans-serif">&#937;</text>`;

  compartments.forEach((c, i) => {
    if (i > 0) {
      s += `<line x1="${r2(c.x)}" y1="${c.y}" x2="${r2(c.x)}" y2="${c.y + c.height}" ` +
        `stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,5"/>`;
    }
    s += `<text x="${r2(c.x + c.width / 2)}" y="${c.y - 15}" font-size="16" font-weight="600" ` +
      `fill="#374151" text-anchor="middle" font-family="Arial, sans-serif">${esc(c.name)}</text>`;
  });

  const E = `cx="${r2(EVENT_A.cx)}" cy="${r2(EVENT_A.cy)}" rx="${r2(EVENT_A.rx)}" ry="${r2(EVENT_A.ry)}"`;
  if (selected === null) {
    s += `<ellipse ${E} fill="#6366f1" fill-opacity="0.3" stroke="#4f46e5" stroke-width="1.5"/>`;
  } else {
    const c = compartments[selected];
    s += `<ellipse ${E} fill="#6366f1" fill-opacity="0.1" stroke="#4f46e5" stroke-width="1.5" ` +
      `stroke-dasharray="5,5"/>`;
    s += `<defs><clipPath id="pv-clip-${n}-${selected}"><rect x="${r2(c.x)}" y="${c.y}" ` +
      `width="${r2(c.width)}" height="${c.height}"/></clipPath></defs>`;
    s += `<ellipse ${E} fill="#6366f1" fill-opacity="0.6" stroke="#4f46e5" stroke-width="1.5" ` +
      `clip-path="url(#pv-clip-${n}-${selected})"/>`;
  }
  s += `<text x="${r2(EVENT_A.cx)}" y="${r2(EVENT_A.cy)}" font-size="24" font-weight="bold" ` +
    `fill="#4338ca" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif">A</text>`;

  return `<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" width="500" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

export const readings = { 2: partition(2), 3: partition(3), 4: partition(4) };

const partitionVennDiagrams = {
  threeCompartments: freeze(3, null,
    'Sample space split into three equal compartments with event A drawn across all three'),
  middleSelected: freeze(3, 1,
    'The middle compartment selected: the part of A inside B2 is solid, the rest of A is faded'),
  fourCompartments: freeze(4, null,
    'The same event A over a four-compartment partition'),
};

export default partitionVennDiagrams;
