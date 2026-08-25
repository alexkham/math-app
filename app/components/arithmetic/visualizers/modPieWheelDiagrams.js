// Frozen-state SVGs for the Modular Wheel tool (Line 1 anchor mesh).
// Ports app/components/arithmetic/visualizers/ModPieWheel.jsx verbatim: same
// polar geometry (computeGeometry with INNER_R_RATIO 0.075, OUTER_MARGIN 20,
// LABEL_MARGIN 26), same slice paths/opacities (zero class 0.32, others 0.14,
// active slice 0.55), same SLICE_COLORS blue palette with the warm-gold zero
// accent arc and starred label, same outward row stacking with rotated
// upright-reading cell labels, same placement math (remainder = n % d, row =
// per-class counter). Frozen at svgSize 520. No gradients, no shared ids.

const GEO = {
  INNER_R_MIN: 30,
  INNER_R_RATIO: 0.075,
  OUTER_MARGIN: 20,
  LABEL_MARGIN: 26,
};

const SLICE_COLORS = [
  '#1e40af', '#2563eb', '#3b82f6', '#60a5fa',
  '#7aa9f7', '#93c5fd', '#a5b9e5', '#6b8fd6', '#4170c2',
];

const P = {
  bg: '#f5f8ff',
  surface: '#ffffff',
  borderStrong: '#b6c2e0',
  blue3: '#1e40af',
  blue4: '#1e3a8a',
  accentWarm: '#fbbf24',
  accentWarmDeep: '#d97706',
};

const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeArc(cx, cy, outerR, innerR, startAngle, endAngle) {
  const oS = polarToCartesian(cx, cy, outerR, startAngle);
  const oE = polarToCartesian(cx, cy, outerR, endAngle);
  const iS = polarToCartesian(cx, cy, innerR, endAngle);
  const iE = polarToCartesian(cx, cy, innerR, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${oS.x} ${oS.y} A ${outerR} ${outerR} 0 ${large} 1 ${oE.x} ${oE.y} L ${iS.x} ${iS.y} A ${innerR} ${innerR} 0 ${large} 0 ${iE.x} ${iE.y} Z`;
}

function describeOuterArc(cx, cy, r, startAngle, endAngle) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

// divisor d, integers 1..placedUpTo placed, optional highlighted slice
function freeze(divisor, placedUpTo, rowsFor, highlight = null) {
  const svgSize = 520;
  const innerR = Math.max(GEO.INNER_R_MIN, svgSize * GEO.INNER_R_RATIO); // 39
  const outerR = svgSize / 2 - GEO.LABEL_MARGIN;                        // 234
  const radial = outerR - innerR - GEO.OUTER_MARGIN;
  const rowsNeeded = Math.ceil(rowsFor / divisor);
  const cellH = radial / rowsNeeded;
  const cx = svgSize / 2, cy = svgSize / 2;
  const sliceAngle = 360 / divisor;
  const angleOffset = -sliceAngle / 2;

  const numberFontSize = Math.max(9, Math.min(14, Math.floor(cellH * 0.55)));
  const labelFontSize = Math.max(11, Math.min(16, Math.floor(svgSize * 0.028)));
  const centerFontSize = Math.max(12, Math.min(18, Math.floor(svgSize * 0.032)));

  let slices = '', dividers = '', labels = '', arcs = '', cells = '';

  for (let i = 0; i < divisor; i++) {
    const s = i * sliceAngle + angleOffset;
    const e = (i + 1) * sliceAngle + angleOffset;
    const isZero = i === 0;
    const opacity = highlight === i ? 0.55 : isZero ? 0.32 : 0.14;
    slices += `<path d="${describeArc(cx, cy, outerR, innerR, s, e)}" fill="${SLICE_COLORS[i % SLICE_COLORS.length]}" ` +
      `opacity="${opacity}" stroke="${P.surface}" stroke-width="2"/>`;

    const ip = polarToCartesian(cx, cy, innerR, s);
    const op = polarToCartesian(cx, cy, outerR, s);
    dividers += `<line x1="${ip.x}" y1="${ip.y}" x2="${op.x}" y2="${op.y}" stroke="rgba(30, 58, 138, 0.18)" stroke-width="1"/>`;

    const lp = polarToCartesian(cx, cy, outerR + 14, s + sliceAngle / 2);
    labels += `<text x="${lp.x}" y="${lp.y}" font-size="${isZero ? labelFontSize + 3 : labelFontSize}" ` +
      `fill="${isZero ? P.accentWarmDeep : P.blue4}" text-anchor="middle" dominant-baseline="middle" ` +
      `font-family='${MONO}' font-weight="700">${isZero ? '★ 0' : i}</text>`;
  }

  for (let row = 1; row < rowsNeeded; row++) {
    const r = innerR + GEO.OUTER_MARGIN / 2 + row * cellH;
    arcs += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(30, 58, 138, 0.08)" stroke-width="0.5"/>`;
  }

  // place 1..placedUpTo with the component's own math
  const slotCounters = new Array(divisor).fill(0);
  for (let n = 1; n <= placedUpTo; n++) {
    const sliceIdx = n % divisor;
    const row = slotCounters[sliceIdx]++;
    const sliceMid = sliceIdx * sliceAngle + angleOffset + sliceAngle / 2;
    const rMid = innerR + GEO.OUTER_MARGIN / 2 + row * cellH + cellH / 2;
    const pos = polarToCartesian(cx, cy, rMid, sliceMid);
    const arcWidth = (sliceAngle * Math.PI / 180) * rMid;
    const cellW = Math.min(arcWidth * 0.82, 56);
    const isZero = sliceIdx === 0;
    cells += `<g transform="translate(${pos.x}, ${pos.y}) rotate(${sliceMid})">` +
      `<rect x="${-cellW / 2}" y="${-cellH / 2 + 2}" width="${cellW}" height="${cellH - 4}" rx="3" ` +
      `fill="${SLICE_COLORS[sliceIdx % SLICE_COLORS.length]}"` +
      (isZero ? ` stroke="rgba(217, 119, 6, 0.6)" stroke-width="1"` : '') + `/>` +
      `<text x="0" y="0" transform="rotate(${-sliceMid})" font-size="${numberFontSize}" fill="#ffffff" ` +
      `text-anchor="middle" dominant-baseline="middle" font-family='${MONO}' font-weight="600">${n}</text></g>`;
  }

  const zeroAccent = `<path d="${describeOuterArc(cx, cy, outerR + 1, angleOffset, sliceAngle + angleOffset)}" ` +
    `fill="none" stroke="${P.accentWarm}" stroke-width="3"/>`;

  return (
    `<svg viewBox="0 0 ${svgSize} ${svgSize}" width="440" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Modular wheel mod ${divisor}, ${placedUpTo} numbers placed${highlight !== null ? `, class ${highlight} highlighted` : ''}">` +
    `<rect x="0" y="0" width="${svgSize}" height="${svgSize}" rx="12" fill="${P.bg}"/>` +
    slices + zeroAccent + arcs + dividers + cells + labels +
    `<circle cx="${cx}" cy="${cy}" r="${innerR - 4}" fill="${P.surface}" stroke="${P.borderStrong}" stroke-width="2"/>` +
    `<text x="${cx}" y="${cy}" font-size="${centerFontSize}" fill="${P.blue3}" text-anchor="middle" ` +
    `dominant-baseline="middle" font-family='${MONO}' font-weight="700">mod ${divisor}</text>` +
    `</svg>`
  );
}

const modPieWheelDiagrams = {
  idle: freeze(6, 0, 36),                    // default config, nothing placed
  running: freeze(6, 17, 36),                // mid-run: 17 just landed in class 5, row 3
  classDetail: freeze(6, 36, 36, 2),         // complete run, class 2 pinned
  zeroPinned: freeze(6, 36, 36, 0),          // complete run, the principal class pinned
  summary: freeze(6, 36, 36),                // complete balanced run: 6 per class
  parity: freeze(2, 20, 20),                 // divisor 2: even and odd halves
};

export default modPieWheelDiagrams;
