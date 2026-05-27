// // utils/illustrations/arithmetic/divisibility/factor-set/renderer.js
// //
// // String-based SVG renderer for the "factor-set" illustration component.
// // Returns SVG markup as a plain string — call in getStaticProps and inject
// // into pages via dangerouslySetInnerHTML.

// // ---------- Palette ----------
// const C = {
//   neutral:      '#888780',
//   text:         '#5F5E5A',
//   textMuted:    '#888780',
//   primary:      '#6B62CE',
//   secondary:    '#4FA8A4',
//   result:       '#EF9F27',
//   resultStroke: '#BA7517',
//   negation:     '#E24B4A',
// };

// // ---------- Layout ----------
// const VIEWBOX_W = 680;
// const PLANE_X0 = 30;
// const PLANE_X1 = 420;
// const INFO_X = 450;

// // ---------- Math helpers ----------
// function computeFactors(n) {
//   const r = [];
//   for (let i = 1; i <= n; i++) if (n % i === 0) r.push(i);
//   return r;
// }

// function gcd(a, b) {
//   a = Math.abs(a); b = Math.abs(b);
//   while (b) { [a, b] = [b, a % b]; }
//   return a;
// }

// function computePairs(n) {
//   const pairs = [];
//   const sqrtN = Math.sqrt(n);
//   for (let a = 1; a <= sqrtN; a++) {
//     if (n % a === 0) pairs.push([a, n / a]);
//   }
//   return pairs;
// }

// // ---------- SVG fragment builders ----------

// function chip(x, y, w, h, value, fillColor, strokeColor, fillOpacity, strokeWidth, weight, struck) {
//   const cx = x + w / 2;
//   const cy = y + h / 2 + 5;
//   const parts = [
//     `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" ry="6" fill="${fillColor}" fill-opacity="${fillOpacity}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`,
//     `<text x="${cx}" y="${cy}" font-family="sans-serif" font-size="13" font-weight="${weight}" fill="${C.text}" text-anchor="middle">${value}</text>`,
//   ];
//   if (struck) {
//     parts.push(`<line x1="${x + 4}" y1="${y + h / 2}" x2="${x + w - 4}" y2="${y + h / 2}" stroke="${C.negation}" stroke-width="1.5"/>`);
//   }
//   return parts.join('');
// }

// function pairArc(x1, x2, baseY, apexY, color, label) {
//   const ctrlY = 2 * apexY - baseY;
//   const ctrlX = (x1 + x2) / 2;
//   const path = `<path d="M ${x1} ${baseY} Q ${ctrlX} ${ctrlY} ${x2} ${baseY}" fill="none" stroke="${color}" stroke-width="1.2" stroke-opacity="0.7"/>`;
//   const lbl = label
//     ? `<text x="${ctrlX}" y="${apexY - 6}" font-family="sans-serif" font-size="10" fill="${color}" text-anchor="middle" font-style="italic">${label}</text>`
//     : '';
//   return path + lbl;
// }

// function selfPairLoop(x, baseY, color) {
//   return `<path d="M ${x - 5} ${baseY} Q ${x} ${baseY - 20} ${x + 5} ${baseY}" fill="none" stroke="${color}" stroke-width="1.4"/>`;
// }

// function resolveRole(role) {
//   switch (role) {
//     case 'primary':   return C.primary;
//     case 'secondary': return C.secondary;
//     case 'result':    return C.resultStroke;
//     case 'negation':  return C.negation;
//     default:          return C.text;
//   }
// }

// function infoPanel(lines, yStart) {
//   const x = INFO_X;
//   let y = yStart;
//   const parts = [];
//   (lines || []).forEach((line) => {
//     if (line.kind === 'formula') {
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="15" font-weight="600" fill="${resolveRole(line.role)}">${line.text}</text>`);
//       y += 22;
//     } else if (line.kind === 'separator') {
//       parts.push(`<line x1="${x}" y1="${y - 10}" x2="${x + 200}" y2="${y - 10}" stroke="${C.neutral}" stroke-width="0.5" stroke-opacity="0.4"/>`);
//       y += 4;
//     } else if (line.kind === 'list') {
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="12" fill="${resolveRole(line.role)}">${line.label}</text>`);
//       y += 15;
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}">${line.items}</text>`);
//       y += 22;
//     } else if (line.kind === 'note') {
//       const style = line.italic ? ' font-style="italic"' : '';
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}"${style}>${line.text}</text>`);
//       y += 16;
//     }
//   });
//   return `<g>${parts.join('')}</g>`;
// }

// // ---------- Scene renderers ----------

// function renderSingleSet(spec) {
//   const { of: n, highlight = [], exclude = [], caption, info } = spec;
//   const factors = computeFactors(n);
//   const count = factors.length;

//   const chipW = count <= 8 ? 36 : 32;
//   const chipH = 32;
//   const gap = 8;
//   const totalW = count * chipW + (count - 1) * gap;
//   const planeW = PLANE_X1 - PLANE_X0;
//   const startX = PLANE_X0 + (planeW - totalW) / 2;
//   const chipY = 80;

//   const height = caption ? 170 : 150;

//   const highlightSet = new Set(highlight);
//   const excludeSet = new Set(exclude);

//   const parts = [];

//   parts.push(`<text x="30" y="58" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">factors of ${n}</text>`);

//   factors.forEach((f, i) => {
//     const x = startX + i * (chipW + gap);
//     const isHi = highlightSet.has(f);
//     const isEx = excludeSet.has(f);
//     const fillColor = isHi ? C.result : (isEx ? C.neutral : C.primary);
//     const strokeColor = isHi ? C.resultStroke : (isEx ? C.neutral : C.primary);
//     const fillOp = isHi ? 0.4 : (isEx ? 0.08 : 0.15);
//     const sw = isHi ? 1.6 : 1.4;
//     const weight = isHi ? 600 : 400;
//     parts.push(chip(x, chipY, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, isEx));
//   });

//   if (caption) {
//     const cx = startX + totalW / 2;
//     parts.push(`<text x="${cx}" y="138" font-family="sans-serif" font-size="11" font-style="italic" fill="${C.textMuted}" text-anchor="middle">${caption}</text>`);
//   }

//   parts.push(infoPanel(info?.lines, 58));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Factor set (single)</title>${parts.join('')}</svg>`;
// }

// function renderPairs(spec) {
//   const { of: n, info } = spec;
//   const factors = computeFactors(n);
//   const pairs = computePairs(n);
//   const sqrtN = Math.sqrt(n);
//   const isPerfectSquare = Number.isInteger(sqrtN);
//   const count = factors.length;

//   const chipW = count <= 8 ? 36 : 32;
//   const chipH = 32;
//   const gap = 8;
//   const totalW = count * chipW + (count - 1) * gap;
//   const planeW = PLANE_X1 - PLANE_X0;
//   const startX = PLANE_X0 + (planeW - totalW) / 2;
//   const chipY = 160;

//   const cxOf = (f) => startX + factors.indexOf(f) * (chipW + gap) + chipW / 2;

//   // Pair arcs: largest span gets highest peak. Range apex y=15..115 above chip.
//   const arcPairs = pairs.filter(([a, b]) => a !== b);
//   const APEX_TOP = 15;
//   const APEX_BOTTOM = 115;
//   const arcN = arcPairs.length;

//   const height = 240;
//   const parts = [];

//   const labelTitle = isPerfectSquare
//     ? `factors of ${n} \u2014 found by testing 1 to \u221A${n} = ${sqrtN}`
//     : `factors of ${n} \u2014 found by testing 1 to \u221A${n} \u2248 ${sqrtN.toFixed(2)}`;
//   parts.push(`<text x="30" y="48" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">${labelTitle}</text>`);

//   // Pair arcs (largest span first → highest)
//   arcPairs.forEach(([a, b], i) => {
//     const x1 = cxOf(a);
//     const x2 = cxOf(b);
//     const apexY = arcN <= 1
//       ? APEX_BOTTOM
//       : APEX_TOP + (APEX_BOTTOM - APEX_TOP) * i / (arcN - 1);
//     const lbl = `${a} \u00B7 ${b} = ${n}`;
//     parts.push(pairArc(x1, x2, chipY - 2, apexY, C.primary, lbl));
//   });

//   // Self-pair loop (sqrt is itself a factor)
//   if (isPerfectSquare) {
//     const x = cxOf(sqrtN);
//     parts.push(selfPairLoop(x, chipY, C.resultStroke));
//     parts.push(`<text x="${x}" y="${chipY - 12}" font-family="sans-serif" font-size="9" fill="${C.resultStroke}" text-anchor="middle" font-style="italic">${sqrtN} \u00B7 ${sqrtN}</text>`);
//   }

//   // Chips
//   factors.forEach((f, i) => {
//     const x = startX + i * (chipW + gap);
//     const isSqrt = isPerfectSquare && f === sqrtN;
//     const fillColor = isSqrt ? C.result : C.primary;
//     const strokeColor = isSqrt ? C.resultStroke : C.primary;
//     const fillOp = isSqrt ? 0.45 : 0.15;
//     const sw = isSqrt ? 1.6 : 1.4;
//     const weight = isSqrt ? 600 : 400;
//     parts.push(chip(x, chipY, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false));
//   });

//   // Sqrt callout below the sqrt chip
//   if (isPerfectSquare) {
//     const x = cxOf(sqrtN);
//     parts.push(`<text x="${x}" y="${chipY + chipH + 16}" font-family="sans-serif" font-size="10" fill="${C.resultStroke}" text-anchor="middle" font-weight="600">\u221A${n} = ${sqrtN}</text>`);
//     parts.push(`<text x="${x}" y="${chipY + chipH + 29}" font-family="sans-serif" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-style="italic">stop testing here</text>`);
//   }

//   parts.push(infoPanel(info?.lines, 48));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Factor pairs</title>${parts.join('')}</svg>`;
// }

// function renderTwoSet(spec) {
//   const { setA, setB, info } = spec;
//   const factorsA = computeFactors(setA);
//   const factorsB = computeFactors(setB);
//   const universe = [...new Set([...factorsA, ...factorsB])].sort((x, y) => x - y);
//   const common = factorsA.filter(f => factorsB.includes(f));
//   const commonSet = new Set(common);
//   const gcdVal = gcd(setA, setB);

//   const slotCount = universe.length;
//   const chipW = slotCount <= 8 ? 36 : 32;
//   const chipH = 32;
//   const gap = 8;
//   const totalW = slotCount * chipW + (slotCount - 1) * gap;
//   const planeW = PLANE_X1 - PLANE_X0;
//   const startX = PLANE_X0 + (planeW - totalW) / 2;
//   const yTop = 62;
//   const yBot = 142;

//   const slotX = (val) => startX + universe.indexOf(val) * (chipW + gap);
//   const slotCx = (val) => slotX(val) + chipW / 2;

//   const height = 240;
//   const parts = [];

//   parts.push(`<text x="30" y="48" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">factors of ${setA}</text>`);

//   factorsA.forEach(f => {
//     const x = slotX(f);
//     const isCommon = commonSet.has(f);
//     const fillColor = isCommon ? C.result : C.primary;
//     const strokeColor = isCommon ? C.resultStroke : C.primary;
//     const fillOp = isCommon ? 0.4 : 0.15;
//     const sw = isCommon ? 1.6 : 1.4;
//     const weight = isCommon ? 600 : 400;
//     parts.push(chip(x, yTop, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false));
//   });

//   // Vertical connectors between common chips
//   common.forEach(f => {
//     const x = slotCx(f);
//     parts.push(`<line x1="${x}" y1="${yTop + chipH}" x2="${x}" y2="${yBot}" stroke="${C.resultStroke}" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>`);
//   });

//   parts.push(`<text x="30" y="135" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.secondary}">factors of ${setB}</text>`);

//   factorsB.forEach(f => {
//     const x = slotX(f);
//     const isCommon = commonSet.has(f);
//     const fillColor = isCommon ? C.result : C.secondary;
//     const strokeColor = isCommon ? C.resultStroke : C.secondary;
//     const fillOp = isCommon ? 0.4 : 0.15;
//     const sw = isCommon ? 1.6 : 1.4;
//     const weight = isCommon ? 600 : 400;
//     parts.push(chip(x, yBot, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false));
//   });

//   // GCD callout
//   const gcdX = slotCx(gcdVal);
//   parts.push(`<line x1="${gcdX}" y1="${yBot + chipH}" x2="${gcdX}" y2="${yBot + chipH + 16}" stroke="${C.resultStroke}" stroke-width="1.2"/>`);
//   parts.push(`<text x="${gcdX}" y="${yBot + chipH + 32}" font-family="sans-serif" font-size="12" font-weight="600" fill="${C.resultStroke}" text-anchor="middle">gcd(${setA}, ${setB}) = ${gcdVal}</text>`);
//   parts.push(`<text x="${gcdX}" y="${yBot + chipH + 46}" font-family="sans-serif" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-style="italic">largest common factor</text>`);

//   parts.push(infoPanel(info?.lines, 48));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Common factors of two numbers</title>${parts.join('')}</svg>`;
// }

// // ---------- Public API ----------

// export function renderFactorSet(spec) {
//   if (!spec) return '';
//   if (spec.kind === 'single-set') return renderSingleSet(spec);
//   if (spec.kind === 'pairs')      return renderPairs(spec);
//   if (spec.kind === 'two-set')    return renderTwoSet(spec);
//   return '';
// }


// // utils/illustrations/arithmetic/divisibility/factor-set/renderer.js
// //
// // String-based SVG renderer for the "factor-set" illustration component.
// // v2: adaptive chip sizing.

// // ---------- Palette ----------
// const C = {
//   neutral:      '#888780',
//   text:         '#5F5E5A',
//   textMuted:    '#888780',
//   primary:      '#6B62CE',
//   secondary:    '#4FA8A4',
//   result:       '#EF9F27',
//   resultStroke: '#BA7517',
//   negation:     '#E24B4A',
// };

// // ---------- Layout ----------
// const VIEWBOX_W = 680;
// const PLANE_X0 = 30;
// const PLANE_X1 = 420;
// const INFO_X = 450;

// // ---------- Math helpers ----------
// function computeFactors(n) {
//   const r = [];
//   for (let i = 1; i <= n; i++) if (n % i === 0) r.push(i);
//   return r;
// }

// function gcd(a, b) {
//   a = Math.abs(a); b = Math.abs(b);
//   while (b) { [a, b] = [b, a % b]; }
//   return a;
// }

// function computePairs(n) {
//   const pairs = [];
//   const sqrtN = Math.sqrt(n);
//   for (let a = 1; a <= sqrtN; a++) {
//     if (n % a === 0) pairs.push([a, n / a]);
//   }
//   return pairs;
// }

// // Adaptive chip sizing based on how many chips need to fit in the plane
// function chipSizing(slotCount) {
//   if (slotCount <= 6)  return { chipW: 40, gap: 10, fontSize: 13 };
//   if (slotCount <= 8)  return { chipW: 36, gap: 8,  fontSize: 13 };
//   if (slotCount <= 10) return { chipW: 32, gap: 6,  fontSize: 12 };
//   if (slotCount <= 12) return { chipW: 28, gap: 5,  fontSize: 11 };
//   return { chipW: 24, gap: 4, fontSize: 10 };
// }

// // ---------- SVG fragment builders ----------

// function chip(x, y, w, h, value, fillColor, strokeColor, fillOpacity, strokeWidth, weight, struck, fontSize) {
//   const cx = x + w / 2;
//   const cy = y + h / 2 + 4;
//   const parts = [
//     `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" ry="6" fill="${fillColor}" fill-opacity="${fillOpacity}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`,
//     `<text x="${cx}" y="${cy}" font-family="sans-serif" font-size="${fontSize}" font-weight="${weight}" fill="${C.text}" text-anchor="middle">${value}</text>`,
//   ];
//   if (struck) {
//     parts.push(`<line x1="${x + 4}" y1="${y + h / 2}" x2="${x + w - 4}" y2="${y + h / 2}" stroke="${C.negation}" stroke-width="1.5"/>`);
//   }
//   return parts.join('');
// }

// function pairArc(x1, x2, baseY, apexY, color, label) {
//   const ctrlY = 2 * apexY - baseY;
//   const ctrlX = (x1 + x2) / 2;
//   const path = `<path d="M ${x1} ${baseY} Q ${ctrlX} ${ctrlY} ${x2} ${baseY}" fill="none" stroke="${color}" stroke-width="1.2" stroke-opacity="0.7"/>`;
//   const lbl = label
//     ? `<text x="${ctrlX}" y="${apexY - 6}" font-family="sans-serif" font-size="10" fill="${color}" text-anchor="middle" font-style="italic">${label}</text>`
//     : '';
//   return path + lbl;
// }

// function selfPairLoop(x, baseY, color) {
//   return `<path d="M ${x - 5} ${baseY} Q ${x} ${baseY - 20} ${x + 5} ${baseY}" fill="none" stroke="${color}" stroke-width="1.4"/>`;
// }

// function resolveRole(role) {
//   switch (role) {
//     case 'primary':   return C.primary;
//     case 'secondary': return C.secondary;
//     case 'result':    return C.resultStroke;
//     case 'negation':  return C.negation;
//     default:          return C.text;
//   }
// }

// function infoPanel(lines, yStart) {
//   const x = INFO_X;
//   let y = yStart;
//   const parts = [];
//   (lines || []).forEach((line) => {
//     if (line.kind === 'formula') {
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="15" font-weight="600" fill="${resolveRole(line.role)}">${line.text}</text>`);
//       y += 22;
//     } else if (line.kind === 'separator') {
//       parts.push(`<line x1="${x}" y1="${y - 10}" x2="${x + 200}" y2="${y - 10}" stroke="${C.neutral}" stroke-width="0.5" stroke-opacity="0.4"/>`);
//       y += 4;
//     } else if (line.kind === 'list') {
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="12" fill="${resolveRole(line.role)}">${line.label}</text>`);
//       y += 15;
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}">${line.items}</text>`);
//       y += 22;
//     } else if (line.kind === 'note') {
//       const style = line.italic ? ' font-style="italic"' : '';
//       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}"${style}>${line.text}</text>`);
//       y += 16;
//     }
//   });
//   return `<g>${parts.join('')}</g>`;
// }

// // ---------- Scene renderers ----------

// function renderSingleSet(spec) {
//   const { of: n, highlight = [], exclude = [], caption, info } = spec;
//   const factors = computeFactors(n);
//   const count = factors.length;
//   const { chipW, gap, fontSize } = chipSizing(count);
//   const chipH = 32;
//   const totalW = count * chipW + (count - 1) * gap;
//   const planeW = PLANE_X1 - PLANE_X0;
//   const startX = PLANE_X0 + (planeW - totalW) / 2;
//   const chipY = 80;

//   const height = caption ? 170 : 150;

//   const highlightSet = new Set(highlight);
//   const excludeSet = new Set(exclude);

//   const parts = [];

//   parts.push(`<text x="30" y="58" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">factors of ${n}</text>`);

//   factors.forEach((f, i) => {
//     const x = startX + i * (chipW + gap);
//     const isHi = highlightSet.has(f);
//     const isEx = excludeSet.has(f);
//     const fillColor = isHi ? C.result : (isEx ? C.neutral : C.primary);
//     const strokeColor = isHi ? C.resultStroke : (isEx ? C.neutral : C.primary);
//     const fillOp = isHi ? 0.4 : (isEx ? 0.08 : 0.15);
//     const sw = isHi ? 1.6 : 1.4;
//     const weight = isHi ? 600 : 400;
//     parts.push(chip(x, chipY, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, isEx, fontSize));
//   });

//   if (caption) {
//     const cx = startX + totalW / 2;
//     parts.push(`<text x="${cx}" y="138" font-family="sans-serif" font-size="11" font-style="italic" fill="${C.textMuted}" text-anchor="middle">${caption}</text>`);
//   }

//   parts.push(infoPanel(info?.lines, 58));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Factor set (single)</title>${parts.join('')}</svg>`;
// }

// function renderPairs(spec) {
//   const { of: n, info } = spec;
//   const factors = computeFactors(n);
//   const pairs = computePairs(n);
//   const sqrtN = Math.sqrt(n);
//   const isPerfectSquare = Number.isInteger(sqrtN);
//   const count = factors.length;
//   const { chipW, gap, fontSize } = chipSizing(count);
//   const chipH = 32;
//   const totalW = count * chipW + (count - 1) * gap;
//   const planeW = PLANE_X1 - PLANE_X0;
//   const startX = PLANE_X0 + (planeW - totalW) / 2;
//   const chipY = 160;

//   const cxOf = (f) => startX + factors.indexOf(f) * (chipW + gap) + chipW / 2;

//   const arcPairs = pairs.filter(([a, b]) => a !== b);
//   const APEX_TOP = 15;
//   const APEX_BOTTOM = 115;
//   const arcN = arcPairs.length;

//   const height = 240;
//   const parts = [];

//   const labelTitle = isPerfectSquare
//     ? `factors of ${n} \u2014 found by testing 1 to \u221A${n} = ${sqrtN}`
//     : `factors of ${n} \u2014 found by testing 1 to \u221A${n} \u2248 ${sqrtN.toFixed(2)}`;
//   parts.push(`<text x="30" y="48" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">${labelTitle}</text>`);

//   arcPairs.forEach(([a, b], i) => {
//     const x1 = cxOf(a);
//     const x2 = cxOf(b);
//     const apexY = arcN <= 1
//       ? APEX_BOTTOM
//       : APEX_TOP + (APEX_BOTTOM - APEX_TOP) * i / (arcN - 1);
//     const lbl = `${a} \u00B7 ${b} = ${n}`;
//     parts.push(pairArc(x1, x2, chipY - 2, apexY, C.primary, lbl));
//   });

//   if (isPerfectSquare) {
//     const x = cxOf(sqrtN);
//     parts.push(selfPairLoop(x, chipY, C.resultStroke));
//     parts.push(`<text x="${x}" y="${chipY - 12}" font-family="sans-serif" font-size="9" fill="${C.resultStroke}" text-anchor="middle" font-style="italic">${sqrtN} \u00B7 ${sqrtN}</text>`);
//   }

//   factors.forEach((f, i) => {
//     const x = startX + i * (chipW + gap);
//     const isSqrt = isPerfectSquare && f === sqrtN;
//     const fillColor = isSqrt ? C.result : C.primary;
//     const strokeColor = isSqrt ? C.resultStroke : C.primary;
//     const fillOp = isSqrt ? 0.45 : 0.15;
//     const sw = isSqrt ? 1.6 : 1.4;
//     const weight = isSqrt ? 600 : 400;
//     parts.push(chip(x, chipY, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false, fontSize));
//   });

//   if (isPerfectSquare) {
//     const x = cxOf(sqrtN);
//     parts.push(`<text x="${x}" y="${chipY + chipH + 16}" font-family="sans-serif" font-size="10" fill="${C.resultStroke}" text-anchor="middle" font-weight="600">\u221A${n} = ${sqrtN}</text>`);
//     parts.push(`<text x="${x}" y="${chipY + chipH + 29}" font-family="sans-serif" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-style="italic">stop testing here</text>`);
//   }

//   parts.push(infoPanel(info?.lines, 48));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Factor pairs</title>${parts.join('')}</svg>`;
// }

// function renderTwoSet(spec) {
//   const { setA, setB, info } = spec;
//   const factorsA = computeFactors(setA);
//   const factorsB = computeFactors(setB);
//   const universe = [...new Set([...factorsA, ...factorsB])].sort((x, y) => x - y);
//   const common = factorsA.filter(f => factorsB.includes(f));
//   const commonSet = new Set(common);
//   const gcdVal = gcd(setA, setB);

//   const slotCount = universe.length;
//   const { chipW, gap, fontSize } = chipSizing(slotCount);
//   const chipH = 32;
//   const totalW = slotCount * chipW + (slotCount - 1) * gap;
//   const planeW = PLANE_X1 - PLANE_X0;
//   const startX = PLANE_X0 + (planeW - totalW) / 2;
//   const yTop = 62;
//   const yBot = 142;

//   const slotX = (val) => startX + universe.indexOf(val) * (chipW + gap);
//   const slotCx = (val) => slotX(val) + chipW / 2;

//   const height = 240;
//   const parts = [];

//   parts.push(`<text x="30" y="48" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">factors of ${setA}</text>`);

//   factorsA.forEach(f => {
//     const x = slotX(f);
//     const isCommon = commonSet.has(f);
//     const fillColor = isCommon ? C.result : C.primary;
//     const strokeColor = isCommon ? C.resultStroke : C.primary;
//     const fillOp = isCommon ? 0.4 : 0.15;
//     const sw = isCommon ? 1.6 : 1.4;
//     const weight = isCommon ? 600 : 400;
//     parts.push(chip(x, yTop, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false, fontSize));
//   });

//   common.forEach(f => {
//     const x = slotCx(f);
//     parts.push(`<line x1="${x}" y1="${yTop + chipH}" x2="${x}" y2="${yBot}" stroke="${C.resultStroke}" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>`);
//   });

//   parts.push(`<text x="30" y="135" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.secondary}">factors of ${setB}</text>`);

//   factorsB.forEach(f => {
//     const x = slotX(f);
//     const isCommon = commonSet.has(f);
//     const fillColor = isCommon ? C.result : C.secondary;
//     const strokeColor = isCommon ? C.resultStroke : C.secondary;
//     const fillOp = isCommon ? 0.4 : 0.15;
//     const sw = isCommon ? 1.6 : 1.4;
//     const weight = isCommon ? 600 : 400;
//     parts.push(chip(x, yBot, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false, fontSize));
//   });

//   const gcdX = slotCx(gcdVal);
//   parts.push(`<line x1="${gcdX}" y1="${yBot + chipH}" x2="${gcdX}" y2="${yBot + chipH + 16}" stroke="${C.resultStroke}" stroke-width="1.2"/>`);
//   parts.push(`<text x="${gcdX}" y="${yBot + chipH + 32}" font-family="sans-serif" font-size="12" font-weight="600" fill="${C.resultStroke}" text-anchor="middle">gcd(${setA}, ${setB}) = ${gcdVal}</text>`);
//   parts.push(`<text x="${gcdX}" y="${yBot + chipH + 46}" font-family="sans-serif" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-style="italic">largest common factor</text>`);

//   parts.push(infoPanel(info?.lines, 48));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Common factors of two numbers</title>${parts.join('')}</svg>`;
// }

// // ---------- Public API ----------

// export function renderFactorSet(spec) {
//   if (!spec) return '';
//   if (spec.kind === 'single-set') return renderSingleSet(spec);
//   if (spec.kind === 'pairs')      return renderPairs(spec);
//   if (spec.kind === 'two-set')    return renderTwoSet(spec);
//   return '';
// }




// utils/illustrations/arithmetic/divisibility/factor-set/renderer.js
//
// String-based SVG renderer for the "factor-set" illustration component.
// v3: title moved to y=20 (above the arcs); pair-arc range shifted to
//     APEX_TOP=50, APEX_BOTTOM=130 so the highest arc clears the title
//     and the lowest arc keeps clearance above the chips.

// ---------- Palette ----------
const C = {
  neutral:      '#888780',
  text:         '#5F5E5A',
  textMuted:    '#888780',
  primary:      '#6B62CE',
  secondary:    '#4FA8A4',
  result:       '#EF9F27',
  resultStroke: '#BA7517',
  negation:     '#E24B4A',
};

// ---------- Layout ----------
const VIEWBOX_W = 680;
const PLANE_X0 = 30;
const PLANE_X1 = 420;
const INFO_X = 450;

// ---------- Math helpers ----------
function computeFactors(n) {
  const r = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) r.push(i);
  return r;
}

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function computePairs(n) {
  const pairs = [];
  const sqrtN = Math.sqrt(n);
  for (let a = 1; a <= sqrtN; a++) {
    if (n % a === 0) pairs.push([a, n / a]);
  }
  return pairs;
}

// Adaptive chip sizing based on how many chips need to fit in the plane
function chipSizing(slotCount) {
  if (slotCount <= 6)  return { chipW: 40, gap: 10, fontSize: 13 };
  if (slotCount <= 8)  return { chipW: 36, gap: 8,  fontSize: 13 };
  if (slotCount <= 10) return { chipW: 32, gap: 6,  fontSize: 12 };
  if (slotCount <= 12) return { chipW: 28, gap: 5,  fontSize: 11 };
  return { chipW: 24, gap: 4, fontSize: 10 };
}

// ---------- SVG fragment builders ----------

function chip(x, y, w, h, value, fillColor, strokeColor, fillOpacity, strokeWidth, weight, struck, fontSize) {
  const cx = x + w / 2;
  const cy = y + h / 2 + 4;
  const parts = [
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" ry="6" fill="${fillColor}" fill-opacity="${fillOpacity}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`,
    `<text x="${cx}" y="${cy}" font-family="sans-serif" font-size="${fontSize}" font-weight="${weight}" fill="${C.text}" text-anchor="middle">${value}</text>`,
  ];
  if (struck) {
    parts.push(`<line x1="${x + 4}" y1="${y + h / 2}" x2="${x + w - 4}" y2="${y + h / 2}" stroke="${C.negation}" stroke-width="1.5"/>`);
  }
  return parts.join('');
}

function pairArc(x1, x2, baseY, apexY, color, label) {
  const ctrlY = 2 * apexY - baseY;
  const ctrlX = (x1 + x2) / 2;
  const path = `<path d="M ${x1} ${baseY} Q ${ctrlX} ${ctrlY} ${x2} ${baseY}" fill="none" stroke="${color}" stroke-width="1.2" stroke-opacity="0.7"/>`;
  const lbl = label
    ? `<text x="${ctrlX}" y="${apexY - 6}" font-family="sans-serif" font-size="10" fill="${color}" text-anchor="middle" font-style="italic">${label}</text>`
    : '';
  return path + lbl;
}

function selfPairLoop(x, baseY, color) {
  return `<path d="M ${x - 5} ${baseY} Q ${x} ${baseY - 20} ${x + 5} ${baseY}" fill="none" stroke="${color}" stroke-width="1.4"/>`;
}

function resolveRole(role) {
  switch (role) {
    case 'primary':   return C.primary;
    case 'secondary': return C.secondary;
    case 'result':    return C.resultStroke;
    case 'negation':  return C.negation;
    default:          return C.text;
  }
}

function infoPanel(lines, yStart) {
  const x = INFO_X;
  let y = yStart;
  const parts = [];
  (lines || []).forEach((line) => {
    if (line.kind === 'formula') {
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="15" font-weight="600" fill="${resolveRole(line.role)}">${line.text}</text>`);
      y += 22;
    } else if (line.kind === 'separator') {
      parts.push(`<line x1="${x}" y1="${y - 10}" x2="${x + 200}" y2="${y - 10}" stroke="${C.neutral}" stroke-width="0.5" stroke-opacity="0.4"/>`);
      y += 4;
    } else if (line.kind === 'list') {
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="12" fill="${resolveRole(line.role)}">${line.label}</text>`);
      y += 15;
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}">${line.items}</text>`);
      y += 22;
    } else if (line.kind === 'note') {
      const style = line.italic ? ' font-style="italic"' : '';
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}"${style}>${line.text}</text>`);
      y += 16;
    }
  });
  return `<g>${parts.join('')}</g>`;
}

// ---------- Scene renderers ----------

function renderSingleSet(spec) {
  const { of: n, highlight = [], exclude = [], caption, info } = spec;
  const factors = computeFactors(n);
  const count = factors.length;
  const { chipW, gap, fontSize } = chipSizing(count);
  const chipH = 32;
  const totalW = count * chipW + (count - 1) * gap;
  const planeW = PLANE_X1 - PLANE_X0;
  const startX = PLANE_X0 + (planeW - totalW) / 2;
  const chipY = 80;

  const height = caption ? 170 : 150;

  const highlightSet = new Set(highlight);
  const excludeSet = new Set(exclude);

  const parts = [];

  parts.push(`<text x="30" y="58" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">factors of ${n}</text>`);

  factors.forEach((f, i) => {
    const x = startX + i * (chipW + gap);
    const isHi = highlightSet.has(f);
    const isEx = excludeSet.has(f);
    const fillColor = isHi ? C.result : (isEx ? C.neutral : C.primary);
    const strokeColor = isHi ? C.resultStroke : (isEx ? C.neutral : C.primary);
    const fillOp = isHi ? 0.4 : (isEx ? 0.08 : 0.15);
    const sw = isHi ? 1.6 : 1.4;
    const weight = isHi ? 600 : 400;
    parts.push(chip(x, chipY, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, isEx, fontSize));
  });

  if (caption) {
    const cx = startX + totalW / 2;
    parts.push(`<text x="${cx}" y="138" font-family="sans-serif" font-size="11" font-style="italic" fill="${C.textMuted}" text-anchor="middle">${caption}</text>`);
  }

  parts.push(infoPanel(info?.lines, 58));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Factor set (single)</title>${parts.join('')}</svg>`;
}

function renderPairs(spec) {
  const { of: n, info } = spec;
  const factors = computeFactors(n);
  const pairs = computePairs(n);
  const sqrtN = Math.sqrt(n);
  const isPerfectSquare = Number.isInteger(sqrtN);
  const count = factors.length;
  const { chipW, gap, fontSize } = chipSizing(count);
  const chipH = 32;
  const totalW = count * chipW + (count - 1) * gap;
  const planeW = PLANE_X1 - PLANE_X0;
  const startX = PLANE_X0 + (planeW - totalW) / 2;
  const chipY = 160;

  const cxOf = (f) => startX + factors.indexOf(f) * (chipW + gap) + chipW / 2;

  const arcPairs = pairs.filter(([a, b]) => a !== b);
  const APEX_TOP = 50;
  const APEX_BOTTOM = 130;
  const arcN = arcPairs.length;

  const height = 240;
  const parts = [];

  const labelTitle = isPerfectSquare
    ? `factors of ${n} \u2014 found by testing 1 to \u221A${n} = ${sqrtN}`
    : `factors of ${n} \u2014 found by testing 1 to \u221A${n} \u2248 ${sqrtN.toFixed(2)}`;
  parts.push(`<text x="30" y="20" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">${labelTitle}</text>`);

  arcPairs.forEach(([a, b], i) => {
    const x1 = cxOf(a);
    const x2 = cxOf(b);
    const apexY = arcN <= 1
      ? APEX_BOTTOM
      : APEX_TOP + (APEX_BOTTOM - APEX_TOP) * i / (arcN - 1);
    const lbl = `${a} \u00B7 ${b} = ${n}`;
    parts.push(pairArc(x1, x2, chipY - 2, apexY, C.primary, lbl));
  });

  if (isPerfectSquare) {
    const x = cxOf(sqrtN);
    parts.push(selfPairLoop(x, chipY, C.resultStroke));
    parts.push(`<text x="${x}" y="${chipY - 12}" font-family="sans-serif" font-size="9" fill="${C.resultStroke}" text-anchor="middle" font-style="italic">${sqrtN} \u00B7 ${sqrtN}</text>`);
  }

  factors.forEach((f, i) => {
    const x = startX + i * (chipW + gap);
    const isSqrt = isPerfectSquare && f === sqrtN;
    const fillColor = isSqrt ? C.result : C.primary;
    const strokeColor = isSqrt ? C.resultStroke : C.primary;
    const fillOp = isSqrt ? 0.45 : 0.15;
    const sw = isSqrt ? 1.6 : 1.4;
    const weight = isSqrt ? 600 : 400;
    parts.push(chip(x, chipY, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false, fontSize));
  });

  if (isPerfectSquare) {
    const x = cxOf(sqrtN);
    parts.push(`<text x="${x}" y="${chipY + chipH + 16}" font-family="sans-serif" font-size="10" fill="${C.resultStroke}" text-anchor="middle" font-weight="600">\u221A${n} = ${sqrtN}</text>`);
    parts.push(`<text x="${x}" y="${chipY + chipH + 29}" font-family="sans-serif" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-style="italic">stop testing here</text>`);
  }

  parts.push(infoPanel(info?.lines, 48));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Factor pairs</title>${parts.join('')}</svg>`;
}

function renderTwoSet(spec) {
  const { setA, setB, info } = spec;
  const factorsA = computeFactors(setA);
  const factorsB = computeFactors(setB);
  const universe = [...new Set([...factorsA, ...factorsB])].sort((x, y) => x - y);
  const common = factorsA.filter(f => factorsB.includes(f));
  const commonSet = new Set(common);
  const gcdVal = gcd(setA, setB);

  const slotCount = universe.length;
  const { chipW, gap, fontSize } = chipSizing(slotCount);
  const chipH = 32;
  const totalW = slotCount * chipW + (slotCount - 1) * gap;
  const planeW = PLANE_X1 - PLANE_X0;
  const startX = PLANE_X0 + (planeW - totalW) / 2;
  const yTop = 62;
  const yBot = 142;

  const slotX = (val) => startX + universe.indexOf(val) * (chipW + gap);
  const slotCx = (val) => slotX(val) + chipW / 2;

  const height = 240;
  const parts = [];

  parts.push(`<text x="30" y="48" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.primary}">factors of ${setA}</text>`);

  factorsA.forEach(f => {
    const x = slotX(f);
    const isCommon = commonSet.has(f);
    const fillColor = isCommon ? C.result : C.primary;
    const strokeColor = isCommon ? C.resultStroke : C.primary;
    const fillOp = isCommon ? 0.4 : 0.15;
    const sw = isCommon ? 1.6 : 1.4;
    const weight = isCommon ? 600 : 400;
    parts.push(chip(x, yTop, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false, fontSize));
  });

  common.forEach(f => {
    const x = slotCx(f);
    parts.push(`<line x1="${x}" y1="${yTop + chipH}" x2="${x}" y2="${yBot}" stroke="${C.resultStroke}" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>`);
  });

  parts.push(`<text x="30" y="135" font-family="sans-serif" font-size="13" font-weight="600" fill="${C.secondary}">factors of ${setB}</text>`);

  factorsB.forEach(f => {
    const x = slotX(f);
    const isCommon = commonSet.has(f);
    const fillColor = isCommon ? C.result : C.secondary;
    const strokeColor = isCommon ? C.resultStroke : C.secondary;
    const fillOp = isCommon ? 0.4 : 0.15;
    const sw = isCommon ? 1.6 : 1.4;
    const weight = isCommon ? 600 : 400;
    parts.push(chip(x, yBot, chipW, chipH, f, fillColor, strokeColor, fillOp, sw, weight, false, fontSize));
  });

  const gcdX = slotCx(gcdVal);
  parts.push(`<line x1="${gcdX}" y1="${yBot + chipH}" x2="${gcdX}" y2="${yBot + chipH + 16}" stroke="${C.resultStroke}" stroke-width="1.2"/>`);
  parts.push(`<text x="${gcdX}" y="${yBot + chipH + 32}" font-family="sans-serif" font-size="12" font-weight="600" fill="${C.resultStroke}" text-anchor="middle">gcd(${setA}, ${setB}) = ${gcdVal}</text>`);
  parts.push(`<text x="${gcdX}" y="${yBot + chipH + 46}" font-family="sans-serif" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-style="italic">largest common factor</text>`);

  parts.push(infoPanel(info?.lines, 48));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Common factors of two numbers</title>${parts.join('')}</svg>`;
}

// ---------- Public API ----------

export function renderFactorSet(spec) {
  if (!spec) return '';
  if (spec.kind === 'single-set') return renderSingleSet(spec);
  if (spec.kind === 'pairs')      return renderPairs(spec);
  if (spec.kind === 'two-set')    return renderTwoSet(spec);
  return '';
}