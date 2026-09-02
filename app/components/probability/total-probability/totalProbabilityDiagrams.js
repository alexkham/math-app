// Frozen-state SVGs for the Total Probability Visualizer (Line 1 anchor mesh).
//
// TotalProbabilityVisualizerV2 draws its tree inline in JSX, so this module
// ports that drawing: the same 1000-wide canvas and height formula, the same
// three columns (start at x=60, the A partition at x=300, the joint outcomes at
// x=750), the same aSpacing / bSpacingPerA rules, the same path colouring and
// widths under a highlight, the same base colour cycle, and the same white
// label plates on each edge.
//
// The component's own probability model is reproduced exactly: joint[i][j] =
// P(A_i) * P(B_j | A_i), and the B marginals are the column sums - which is the
// law of total probability the tool exists to show.
//
// Highlight semantics are the component's: highlightedPath is either `A{i}`
// (one partition branch) or `B{j}` (one outcome across every branch), and a
// path is emphasised when its belongsTo list contains that key.

const BASE_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899'];
const W = 1000;
const START_X = 60, L1_X = 300, L2_X = 750;

const r2 = (n) => Math.round(n * 100) / 100;
const f3 = (v) => v.toFixed(3);

// the component's opening configuration
export const DEFAULTS = {
  numA: 3,
  numB: 3,
  aProbs: [0.33, 0.33, 0.34],
  condProbs: [
    [0.4, 0.3, 0.3],
    [0.3, 0.5, 0.2],
    [0.2, 0.3, 0.5],
  ],
};

export function model({ numA, numB, aProbs, condProbs }) {
  const joint = Array(numA).fill(null).map((_, i) =>
    Array(numB).fill(null).map((_, j) => aProbs[i] * condProbs[i][j]));
  const bMarginals = Array(numB).fill(0).map((_, j) =>
    joint.reduce((sum, row) => sum + row[j], 0));
  return { joint, bMarginals };
}

function build(cfg, highlightedPath) {
  const { numA, numB, aProbs, condProbs } = cfg;
  const { joint } = model(cfg);

  const height = Math.max(650, 200 + Math.max(numA, numA * numB) * 60);
  const startY = height / 2;
  const aSpacing = Math.min(140, (height - 100) / numA);
  const bSpacingPerA = Math.min(80, aSpacing / numB);

  const nodes = { start: { x: START_X, y: startY, label: 'Start' } };
  for (let i = 0; i < numA; i++) {
    const y = startY + (i - (numA - 1) / 2) * aSpacing;
    nodes[`A${i}`] = { x: L1_X, y, label: `A${i + 1}`, prob: aProbs[i] };
    for (let j = 0; j < numB; j++) {
      nodes[`A${i}B${j}`] = {
        x: L2_X,
        y: y + (j - (numB - 1) / 2) * bSpacingPerA,
        label: `A${i + 1} ∩ B${j + 1}`,
        prob: joint[i][j],
      };
    }
  }

  const paths = [];
  for (let i = 0; i < numA; i++) {
    paths.push({
      from: 'start', to: `A${i}`, prob: aProbs[i],
      label: `P(A${i + 1}) = ${f3(aProbs[i])}`,
      belongsTo: [`A${i}`, `A${i}_all`,
        ...Array(numB).fill(null).map((_, j) => `A${i}B${j}`),
        ...Array(numB).fill(null).map((_, j) => `B${j}`)],
    });
  }
  for (let i = 0; i < numA; i++) {
    for (let j = 0; j < numB; j++) {
      paths.push({
        from: `A${i}`, to: `A${i}B${j}`, prob: condProbs[i][j],
        label: `P(B${j + 1}|A${i + 1}) = ${f3(condProbs[i][j])}`,
        belongsTo: [`A${i}B${j}`, `A${i}_all`, `B${j}`],
      });
    }
  }

  // getPathColor / getPathWidth / getNodeColor, ported
  const pathColor = (p) => {
    if (!highlightedPath) return '#666';
    if (p.belongsTo.includes(highlightedPath)) {
      const mA = highlightedPath.match(/A(\d+)/);
      if (mA) return BASE_COLORS[parseInt(mA[1], 10) % BASE_COLORS.length];
      const mB = highlightedPath.match(/^B(\d+)$/);
      if (mB) return BASE_COLORS[parseInt(mB[1], 10) % BASE_COLORS.length];
      return '#10b981';
    }
    return '#cbd5e1';
  };
  const pathWidth = (p) => (!highlightedPath ? 2 : (p.belongsTo.includes(highlightedPath) ? 4 : 1));
  const nodeColor = (name) => {
    if (!highlightedPath) return '#3b82f6';
    if (name === 'start') return BASE_COLORS[0];
    const mA = name.match(/^A(\d+)$/);
    if (mA) {
      const i = parseInt(mA[1], 10);
      if (highlightedPath === `A${i}` || highlightedPath === `A${i}_all` ||
          highlightedPath.startsWith(`A${i}B`) || /^B\d+$/.test(highlightedPath)) {
        return BASE_COLORS[i % BASE_COLORS.length];
      }
      return '#cbd5e1';
    }
    const mAB = name.match(/^A(\d+)B(\d+)$/);
    if (mAB) {
      const a = parseInt(mAB[1], 10), b = parseInt(mAB[2], 10);
      if (highlightedPath === name || highlightedPath === `A${a}_all` || highlightedPath === `B${b}`) {
        return BASE_COLORS[a % BASE_COLORS.length];
      }
      return '#cbd5e1';
    }
    return '#3b82f6';
  };

  let s = `<rect width="${W}" height="${height}" fill="#ffffff"/>`;

  // edges, then their label plates (component order)
  paths.forEach((p) => {
    const a = nodes[p.from], b = nodes[p.to];
    s += `<line x1="${r2(a.x)}" y1="${r2(a.y)}" x2="${r2(b.x)}" y2="${r2(b.y)}" ` +
      `stroke="${pathColor(p)}" stroke-width="${pathWidth(p)}"/>`;
  });
  paths.forEach((p) => {
    const a = nodes[p.from], b = nodes[p.to];
    const lx = (a.x + b.x) / 2, ly = (a.y + b.y) / 2;
    const lw = p.label.length * 5.4, lh = 12, pad = 3;
    s += `<rect x="${r2(lx - lw / 2 - pad)}" y="${r2(ly - lh / 2 - pad)}" width="${r2(lw + pad * 2)}" ` +
      `height="${lh + pad * 2}" fill="white" stroke="${pathColor(p)}" stroke-width="1.5" rx="4"/>`;
    s += `<text x="${r2(lx)}" y="${r2(ly + 4)}" font-size="10" fill="${pathColor(p)}" ` +
      `text-anchor="middle" font-weight="500">${p.label}</text>`;
  });

  // nodes
  Object.entries(nodes).forEach(([key, n]) => {
    s += `<circle cx="${r2(n.x)}" cy="${r2(n.y)}" r="${key === 'start' ? 8 : 20}" ` +
      `fill="${nodeColor(key)}"/>`;
    if (key !== 'start') {
      s += `<text x="${r2(n.x)}" y="${r2(n.y + 4)}" font-size="${key.includes('B') ? 10 : 13}" ` +
        `font-weight="600" fill="#ffffff" text-anchor="middle">${key.includes('B') ? '' : n.label}</text>`;
      if (key.includes('B')) {
        s += `<text x="${r2(n.x + 30)}" y="${r2(n.y + 4)}" font-size="10" fill="#334155">` +
          `${n.label} = ${f3(n.prob)}</text>`;
      } else {
        s += `<text x="${r2(n.x)}" y="${r2(n.y + 36)}" font-size="10" fill="#334155" ` +
          `text-anchor="middle">P = ${f3(n.prob)}</text>`;
      }
    }
  });

  return { svg: s, height };
}

function freeze(cfg, highlightedPath, label) {
  const { svg, height } = build(cfg, highlightedPath);
  return (
    `<svg viewBox="0 0 ${W} ${height}" width="520" xmlns="http://www.w3.org/2000/svg" ` +
    `role="img" aria-label="${label}">` + svg + `</svg>`
  );
}

// a wider partition, to show the tree is not fixed at three branches
export const WIDE = {
  numA: 4,
  numB: 3,
  aProbs: [0.25, 0.25, 0.25, 0.25],
  condProbs: [
    [0.4, 0.3, 0.3],
    [0.3, 0.5, 0.2],
    [0.2, 0.3, 0.5],
    [0.5, 0.25, 0.25],
  ],
};

// the numbers each frozen state shows, so the page prose quotes the tool
export const readings = {
  default: model(DEFAULTS),
  wide: model(WIDE),
};

const totalProbabilityDiagrams = {
  overview: freeze(DEFAULTS, null, 'Total probability tree, three branches, nothing highlighted'),
  branch: freeze(DEFAULTS, 'A0', 'Total probability tree with the first partition branch highlighted'),
  outcome: freeze(DEFAULTS, 'B1', 'Total probability tree with one outcome highlighted across every branch'),
  wide: freeze(WIDE, null, 'Total probability tree with a four-part partition'),
};

export default totalProbabilityDiagrams;
