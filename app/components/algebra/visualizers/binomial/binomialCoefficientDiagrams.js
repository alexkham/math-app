// Static SVG diagrams for the binomial coefficient tool (Line 1).
// Each diagram freezes BinomialCoefficientsVisualizer in one view/state,
// replicating the component's own rendering: buildTree geometry (leaf widths
// clamped by n, 65px levels), the b-exponent palette, edge styling
// (#cbd5e1 1.8, a-labels #2563eb / b-labels #b45309), Pascal layout
// (r=22 cells, 60/56 grid, target cell #fbbf24, on-path cells #fef3c7,
// paths #b45309 at 0.55 opacity with the component's per-path 1.5px fan-out),
// and the distribution view's factor boxes, pellets, buckets, and expansion
// line at completion. All counts computed with the component's pure logic.

const BEXP_PALETTE = [
  { bg: '#e0e7ff', border: '#6366f1', text: '#312e81' },
  { bg: '#fef3c7', border: '#b45309', text: '#78350f' },
  { bg: '#ccfbf1', border: '#0d9488', text: '#134e4a' },
  { bg: '#ede9fe', border: '#7c3aed', text: '#4c1d95' },
  { bg: '#dcfce7', border: '#16a34a', text: '#14532d' },
  { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' },
];
const colorForBExp = (b) => BEXP_PALETTE[Math.max(0, b) % BEXP_PALETTE.length];

const SUP = ['⁰', '¹', '²', '³', '⁴', '⁵'];
const fmtTerm = (aC, bC) => {
  if (aC === 0 && bC === 0) return '1';
  let s = '';
  if (aC > 0) s += 'a' + (aC > 1 ? SUP[aC] : '');
  if (bC > 0) s += 'b' + (bC > 1 ? SUP[bC] : '');
  return s;
};
const binom = (n, k) => {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
  return Math.round(r);
};
const allStrings = (n) => {
  const out = [];
  for (let i = 0; i < (1 << n); i++) {
    let s = '';
    for (let bit = n - 1; bit >= 0; bit--) s += ((i >> bit) & 1) ? 'b' : 'a';
    out.push(s);
  }
  return out;
};
const bCount = (s) => s.split('').filter((c) => c === 'b').length;
const fmtExpansion = (n) => {
  let s = '';
  for (let k = 0; k <= n; k++) {
    const c = binom(n, k);
    const coefStr = c === 1 ? '' : String(c);
    s += (s === '' ? '' : ' + ') + coefStr + fmtTerm(n - k, k);
  }
  return s;
};

const leafWidthFor = (n) => (n <= 2 ? 90 : n === 3 ? 70 : n === 4 ? 46 : 32);
const leafFontFor = (n) => (n <= 3 ? 13 : n === 4 ? 12 : 10);

const svgWrap = (W, H, inner) =>
  `<svg width="600" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
  `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto;padding:4px 0">` +
  `<rect width="${W}" height="${H}" fill="#fff"/>` + inner + `</svg>`;

// ---- Decision Tree view ----
const treeFrame = (n) => {
  const leafW = leafWidthFor(n);
  const leaves = 1 << n;
  const treeW = leaves * leafW;
  const levelH = 65;
  const padT = 30;
  const treeH = (n + 1) * levelH + 30;
  const leafFont = leafFontFor(n);

  const W = Math.max(treeW + 40, 620);
  const offX = (W - treeW) / 2;
  const pos = (level, idx) => {
    const count = 1 << level;
    const spacing = treeW / count;
    return { x: offX + spacing * idx + spacing / 2, y: padT + level * levelH };
  };

  let s = '';
  // edges + labels (walk every node breadth-first)
  for (let level = 0; level < n; level++) {
    for (let idx = 0; idx < (1 << level); idx++) {
      const p = pos(level, idx);
      const lp = pos(level + 1, idx * 2);
      const rp = pos(level + 1, idx * 2 + 1);
      s += `<line x1="${p.x.toFixed(1)}" y1="${p.y}" x2="${lp.x.toFixed(1)}" y2="${lp.y}" stroke="#cbd5e1" stroke-width="1.8"/>`;
      s += `<line x1="${p.x.toFixed(1)}" y1="${p.y}" x2="${rp.x.toFixed(1)}" y2="${rp.y}" stroke="#cbd5e1" stroke-width="1.8"/>`;
      s += `<text x="${((p.x + lp.x) / 2 - 8).toFixed(1)}" y="${(p.y + lp.y) / 2}" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">a</text>`;
      s += `<text x="${((p.x + rp.x) / 2 + 8).toFixed(1)}" y="${(p.y + rp.y) / 2}" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">b</text>`;
    }
  }
  // internal nodes
  for (let level = 0; level < n; level++) {
    for (let idx = 0; idx < (1 << level); idx++) {
      const p = pos(level, idx);
      s += `<circle cx="${p.x.toFixed(1)}" cy="${p.y}" r="6" fill="#fff" stroke="#cbd5e1" stroke-width="1.4"/>`;
    }
  }
  s += `<text x="${pos(0, 0).x.toFixed(1)}" y="${padT - 12}" font-size="12" fill="#94a3b8" font-weight="600" text-anchor="middle">start</text>`;
  // leaves
  const strings = allStrings(n);
  strings.forEach((str, idx) => {
    const p = pos(n, idx);
    const col = colorForBExp(bCount(str));
    const boxW = Math.min(leafW - 6, 60);
    s += `<rect x="${(p.x - boxW / 2).toFixed(1)}" y="${p.y - 6}" width="${boxW}" height="28" rx="5" fill="${col.bg}" stroke="${col.border}" stroke-width="1.4"/>`;
    s += `<text x="${p.x.toFixed(1)}" y="${p.y + 12}" font-size="${leafFont}" fill="${col.text}" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">${str}</text>`;
  });
  // group cards
  const gY = padT + n * levelH + 44;
  const gGap = 10, gM = 20;
  const gW = (W - 2 * gM - gGap * n) / (n + 1);
  const gH = 66;
  for (let bC = 0; bC <= n; bC++) {
    const x = gM + bC * (gW + gGap);
    const col = colorForBExp(bC);
    const list = strings.filter((str) => bCount(str) === bC);
    const listStr = list.join(', ');
    s += `<rect x="${x.toFixed(1)}" y="${gY}" width="${gW.toFixed(1)}" height="${gH}" rx="8" fill="${col.bg}" stroke="${col.border}" stroke-width="1.5"/>`;
    s += `<text x="${(x + 8).toFixed(1)}" y="${gY + 18}" font-size="14" fill="${col.text}" font-weight="700" font-family="'Cambria Math',Georgia,serif">${fmtTerm(n - bC, bC)}</text>`;
    s += `<text x="${(x + 8).toFixed(1)}" y="${gY + 36}" font-size="${listStr.length > 26 ? 9 : 11}" fill="${col.text}" font-family="'Cambria Math',Georgia,serif">${listStr}</text>`;
    s += `<text x="${(x + 8).toFixed(1)}" y="${gY + 55}" font-size="11.5" fill="${col.text}">paths landing here: <tspan font-weight="700">${list.length}</tspan></text>`;
  }
  return svgWrap(W, gY + gH + 16, s);
};

// ---- Distribution view, frozen at completion ----
const distributionFrame = (n) => {
  const W = 660;
  const strings = allStrings(n);
  const last = strings[strings.length - 1]; // final delivered combo: all b's
  let s = '';

  // factor boxes (last combo's picks locked)
  const fW = 86, fH = 34, fGap = 26;
  const rowW = n * fW + (n - 1) * fGap;
  let fx = (W - rowW) / 2;
  const fy = 16;
  for (let i = 0; i < n; i++) {
    if (i > 0) s += `<text x="${(fx - fGap / 2).toFixed(1)}" y="${fy + 22}" font-size="15" fill="#94a3b8" font-weight="700" text-anchor="middle">&#183;</text>`;
    s += `<rect x="${fx.toFixed(1)}" y="${fy}" width="${fW}" height="${fH}" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>`;
    const picked = last[i];
    const aPicked = picked === 'a', bPicked = picked === 'b';
    s += aPicked
      ? `<rect x="${(fx + 8).toFixed(1)}" y="${fy + 7}" width="22" height="20" rx="4" fill="#2563eb"/><text x="${(fx + 19).toFixed(1)}" y="${fy + 22}" font-size="14" fill="#fff" font-weight="700" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">a</text>`
      : `<text x="${(fx + 19).toFixed(1)}" y="${fy + 22}" font-size="14" fill="#334155" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">a</text>`;
    s += `<text x="${(fx + fW / 2).toFixed(1)}" y="${fy + 22}" font-size="13" fill="#cbd5e1" text-anchor="middle">+</text>`;
    s += bPicked
      ? `<rect x="${(fx + fW - 30).toFixed(1)}" y="${fy + 7}" width="22" height="20" rx="4" fill="#2563eb"/><text x="${(fx + fW - 19).toFixed(1)}" y="${fy + 22}" font-size="14" fill="#fff" font-weight="700" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">b</text>`
      : `<text x="${(fx + fW - 19).toFixed(1)}" y="${fy + 22}" font-size="14" fill="#334155" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">b</text>`;
    fx += fW + fGap;
  }

  // product row (the final delivery)
  const pY = fy + fH + 14;
  s += `<rect x="60" y="${pY}" width="${W - 120}" height="32" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6,4"/>`;
  s += `<text x="${W / 2}" y="${pY + 21}" font-size="14" fill="#1e293b" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">${last.split('').join(' &#183; ')} = ${fmtTerm(0, n)}   <tspan fill="#64748b" font-size="12">(${1 << n} / ${1 << n} delivered)</tspan></text>`;

  // buckets with pellets
  const bY = pY + 48;
  const bGap = 10, bM = 20;
  const bW = (W - 2 * bM - bGap * n) / (n + 1);
  const bH = 96;
  for (let bC = 0; bC <= n; bC++) {
    const x = bM + bC * (bW + bGap);
    const col = colorForBExp(bC);
    const ofBC = strings.filter((str) => bCount(str) === bC);
    s += `<rect x="${x.toFixed(1)}" y="${bY}" width="${bW.toFixed(1)}" height="${bH}" rx="10" fill="${col.bg}" stroke="${col.border}" stroke-width="2"/>`;
    s += `<text x="${(x + 8).toFixed(1)}" y="${bY + 18}" font-size="14" fill="${col.text}" font-weight="700" font-family="'Cambria Math',Georgia,serif">${fmtTerm(n - bC, bC)}</text>`;
    ofBC.forEach((str, i) => {
      const px = x + 8 + (i % 3) * 38;
      const py = bY + 26 + Math.floor(i / 3) * 26;
      s += `<rect x="${px.toFixed(1)}" y="${py}" width="34" height="20" rx="4" fill="${col.border}"/>`;
      s += `<text x="${(px + 17).toFixed(1)}" y="${py + 14}" font-size="10" fill="${col.bg}" font-weight="700" text-anchor="middle" font-family="'Cambria Math',Georgia,serif">${str}</text>`;
    });
    s += `<text x="${(x + 8).toFixed(1)}" y="${bY + bH - 8}" font-size="11.5" fill="${col.text}">count: <tspan font-weight="700">${ofBC.length}</tspan></text>`;
  }

  // final expansion
  const eY = bY + bH + 32;
  s += `<rect x="${bM}" y="${eY - 22}" width="${W - 2 * bM}" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>`;
  s += `<text x="${W / 2}" y="${eY + 2}" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="700" font-family="'Cambria Math',Georgia,serif">(a + b)${SUP[n]} = ${fmtExpansion(n)}</text>`;
  return svgWrap(W, eY + 28, s);
};

// ---- Pascal Paths view, frozen with a target cell engaged ----
const pascalFrame = (n, targetK) => {
  const CELL_R = 22, ROW_H = 60, COL_W = 56, PAD_T = 30;
  const W = Math.max(n * COL_W + 100, 460);
  const centerX = W / 2;
  const cellPos = (row, k) => ({
    x: centerX - (row * COL_W) / 2 + k * COL_W,
    y: PAD_T + row * ROW_H,
  });
  let s = '';
  // structural edges
  for (let row = 0; row < n; row++) {
    for (let k = 0; k <= row; k++) {
      const p = cellPos(row, k);
      const lc = cellPos(row + 1, k), rc = cellPos(row + 1, k + 1);
      s += `<line x1="${p.x.toFixed(1)}" y1="${p.y}" x2="${lc.x.toFixed(1)}" y2="${lc.y}" stroke="#cbd5e1" stroke-width="1"/>`;
      s += `<line x1="${p.x.toFixed(1)}" y1="${p.y}" x2="${rc.x.toFixed(1)}" y2="${rc.y}" stroke="#cbd5e1" stroke-width="1"/>`;
    }
  }
  // paths to (n, targetK), fanned out like the live view
  const paths = [];
  for (let i = 0; i < (1 << n); i++) {
    let rC = 0;
    for (let bit = 0; bit < n; bit++) if ((i >> bit) & 1) rC++;
    if (rC !== targetK) continue;
    const seq = [];
    for (let bit = n - 1; bit >= 0; bit--) seq.push(((i >> bit) & 1) ? 'R' : 'L');
    paths.push(seq);
  }
  const touched = new Set(['0_0']);
  paths.forEach((seq, i) => {
    let row = 0, col = 0;
    const pts = [cellPos(0, 0)];
    seq.forEach((m) => { row++; if (m === 'R') col++; pts.push(cellPos(row, col)); touched.add(row + '_' + col); });
    const off = (i - (paths.length - 1) / 2) * 1.5;
    const d = pts.map((p, j) => `${j === 0 ? 'M' : 'L'} ${(p.x + off).toFixed(1)} ${p.y}`).join(' ');
    s += `<path d="${d}" fill="none" stroke="#b45309" stroke-width="2.5" opacity="0.55" stroke-linecap="round"/>`;
  });
  // cells
  for (let row = 0; row <= n; row++) {
    for (let k = 0; k <= row; k++) {
      const p = cellPos(row, k);
      const isTarget = row === n && k === targetK;
      const onPath = touched.has(row + '_' + k) && !isTarget;
      const fill = isTarget ? '#fbbf24' : onPath ? '#fef3c7' : '#eff6ff';
      const stroke = isTarget ? '#b45309' : onPath ? '#f59e0b' : '#bfdbfe';
      s += `<circle cx="${p.x.toFixed(1)}" cy="${p.y}" r="${CELL_R}" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`;
      s += `<text x="${p.x.toFixed(1)}" y="${p.y + 5}" font-size="14" font-weight="700" fill="${isTarget ? '#78350f' : '#334155'}" text-anchor="middle">${binom(row, k)}</text>`;
    }
  }
  // caption card
  const cY = PAD_T + n * ROW_H + 40;
  s += `<rect x="${W / 2 - 170}" y="${cY - 20}" width="340" height="32" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>`;
  s += `<text x="${W / 2}" y="${cY + 1}" font-size="13.5" fill="#78350f" text-anchor="middle" font-weight="700">C(${n}, ${targetK}) = ${binom(n, targetK)} &#8212; ${paths.length} paths from the top</text>`;
  return svgWrap(W, cY + 26, s);
};

const binomialCoefficientDiagrams = {
  'view-tree': treeFrame(3),
  'view-distribution': distributionFrame(3),
  'view-pascal': pascalFrame(3, 1),
  'tree-n1': treeFrame(1),
  'pascal-n5': pascalFrame(5, 2),
};

export default binomialCoefficientDiagrams;
