// // // utils/illustrations/multiplesLine.js
// // //
// // // String-based SVG renderer for the "multiples-line" illustration component.
// // // Returns SVG markup as a plain string — call in getStaticProps and inject
// // // into pages via dangerouslySetInnerHTML.
// // //
// // // Usage:
// // //   import { renderMultiplesLine } from '@/utils/illustrations/multiplesLine';
// // //
// // //   // in getStaticProps:
// // //   const svg = renderMultiplesLine({
// // //     kind: 'single-track',
// // //     range: [0, 15],
// // //     step: 3,
// // //     target: 12,
// // //     mode: 'exact',
// // //     info: { lines: [
// // //       { kind: 'formula', text: '3 | 12', role: 'primary' },
// // //       { kind: 'note', text: 'Four jumps of 3 land on 12.' },
// // //     ]},
// // //   });
// // //
// // //   // in the page:
// // //   <div dangerouslySetInnerHTML={{ __html: svg }} />

// // // ---------- Palette ----------
// // const C = {
// //   neutral:      '#888780',
// //   text:         '#5F5E5A',
// //   textMuted:    '#888780',
// //   primary:      '#6B62CE',
// //   secondary:    '#4FA8A4',
// //   result:       '#EF9F27',
// //   resultStroke: '#BA7517',
// //   negation:     '#E24B4A',
// //   bgPunch:      'var(--color-background-primary, #FAFAF6)',
// // };

// // // ---------- Layout ----------
// // const VIEWBOX_W = 680;
// // const PLANE_X0 = 30;
// // const PLANE_X1 = 425;
// // const PLANE_INSET = 10;
// // const INFO_X = 450;

// // // ---------- Math helpers ----------
// // function gcd(a, b) {
// //   a = Math.abs(a); b = Math.abs(b);
// //   while (b) { [a, b] = [b, a % b]; }
// //   return a;
// // }
// // function lcm(a, b) { return (a * b) / gcd(a, b); }

// // function makeTx(range) {
// //   const [rMin, rMax] = range;
// //   const span = rMax - rMin;
// //   const x0 = PLANE_X0 + PLANE_INSET;
// //   const x1 = PLANE_X1 - PLANE_INSET;
// //   return (m) => x0 + ((m - rMin) / span) * (x1 - x0);
// // }

// // // ---------- SVG fragment builders ----------

// // function arrowDef(id, color) {
// //   return `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="${color}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></marker>`;
// // }

// // function ticks(y, range, tx, every = 1) {
// //   const [rMin, rMax] = range;
// //   const parts = [];
// //   for (let i = rMin; i <= rMax; i += every) {
// //     parts.push(`<line x1="${tx(i)}" y1="${y - 3}" x2="${tx(i)}" y2="${y + 3}" stroke="${C.neutral}" stroke-width="0.6"/>`);
// //   }
// //   return `<g>${parts.join('')}</g>`;
// // }

// // function multipleMarks(y, range, step, tx, color, style) {
// //   const [rMin, rMax] = range;
// //   const start = Math.max(rMin, Math.ceil(rMin / step) * step);
// //   const parts = [];
// //   for (let m = start; m <= rMax; m += step) {
// //     if (style === 'dot') {
// //       parts.push(`<circle cx="${tx(m)}" cy="${y}" r="3.5" fill="${color}"/>`);
// //     } else {
// //       parts.push(`<line x1="${tx(m)}" y1="${y - 6}" x2="${tx(m)}" y2="${y + 6}" stroke="${color}" stroke-width="1.4"/>`);
// //     }
// //   }
// //   return `<g>${parts.join('')}</g>`;
// // }

// // function multipleLabels(y, range, step, tx, highlight) {
// //   const [rMin, rMax] = range;
// //   const start = Math.max(rMin, Math.ceil(rMin / step) * step);
// //   const set = new Set(
// //     Array.isArray(highlight) ? highlight :
// //     highlight != null ? [highlight] : []
// //   );
// //   const parts = [];
// //   for (let m = start; m <= rMax; m += step) {
// //     const isHi = set.has(m);
// //     const ty = isHi ? y + 3 : y;
// //     const size = isHi ? 12 : 10;
// //     const weight = isHi ? 600 : 400;
// //     const fill = isHi ? C.resultStroke : C.text;
// //     parts.push(`<text x="${tx(m)}" y="${ty}" font-family="sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="middle">${m}</text>`);
// //   }
// //   return `<g>${parts.join('')}</g>`;
// // }

// // function extraLabel(x, y, text, color, size = 12, weight = 600) {
// //   return `<text x="${x}" y="${y}" font-family="sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="middle">${text}</text>`;
// // }

// // function jumpArc(from, to, baseY, color, dashed, tx, arrowId, label) {
// //   const x1 = tx(from);
// //   const x2 = tx(to);
// //   const midX = (x1 + x2) / 2;
// //   const liftY = baseY - 50;
// //   const dashAttr = dashed ? ' stroke-dasharray="5 3"' : '';
// //   const arc = `<path d="M ${x1} ${baseY - 4} Q ${midX} ${liftY} ${x2} ${baseY - 4}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round"${dashAttr} marker-end="url(#${arrowId})"/>`;
// //   const lbl = label
// //     ? `<text x="${midX}" y="${liftY - 4}" font-family="sans-serif" font-size="10" fill="${color}" text-anchor="middle">${label}</text>`
// //     : '';
// //   return `<g>${arc}${lbl}</g>`;
// // }

// // function targetMarker(x, y, mode) {
// //   if (mode === 'filled') {
// //     return `<circle cx="${x}" cy="${y}" r="7" fill="${C.result}" fill-opacity="0.55" stroke="${C.resultStroke}" stroke-width="1.6"/>`;
// //   }
// //   if (mode === 'ring') {
// //     return `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/>`;
// //   }
// //   return `<circle cx="${x}" cy="${y}" r="7" fill="${C.bgPunch}" stroke="${C.resultStroke}" stroke-width="1.6" stroke-dasharray="2.5 2.5"/>`;
// // }

// // function gapBracket(from, to, y, label, tx) {
// //   const x1 = tx(from);
// //   const x2 = tx(to);
// //   const path = `<path d="M ${x1} ${y} L ${x1} ${y + 6} L ${x2} ${y + 6} L ${x2} ${y}" fill="none" stroke="${C.resultStroke}" stroke-width="0.8"/>`;
// //   const lbl = label
// //     ? `<text x="${(x1 + x2) / 2}" y="${y + 20}" font-family="sans-serif" font-size="10" fill="${C.resultStroke}" text-anchor="middle">${label}</text>`
// //     : '';
// //   return `<g>${path}${lbl}</g>`;
// // }

// // function resolveRole(role) {
// //   switch (role) {
// //     case 'primary':   return C.primary;
// //     case 'secondary': return C.secondary;
// //     case 'result':    return C.resultStroke;
// //     case 'negation':  return C.negation;
// //     default:          return C.text;
// //   }
// // }

// // function infoPanel(lines, yStart) {
// //   const x = INFO_X;
// //   let y = yStart;
// //   const parts = [];
// //   (lines || []).forEach((line) => {
// //     if (line.kind === 'formula') {
// //       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="15" font-weight="600" fill="${resolveRole(line.role)}">${line.text}</text>`);
// //       y += 22;
// //     } else if (line.kind === 'separator') {
// //       parts.push(`<line x1="${x}" y1="${y - 10}" x2="${x + 200}" y2="${y - 10}" stroke="${C.neutral}" stroke-width="0.5" stroke-opacity="0.4"/>`);
// //       y += 4;
// //     } else if (line.kind === 'list') {
// //       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="12" fill="${resolveRole(line.role)}">${line.label}</text>`);
// //       y += 15;
// //       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}">${line.items}</text>`);
// //       y += 22;
// //     } else if (line.kind === 'note') {
// //       const style = line.italic ? ' font-style="italic"' : '';
// //       parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${C.textMuted}"${style}>${line.text}</text>`);
// //       y += 16;
// //     }
// //   });
// //   return `<g>${parts.join('')}</g>`;
// // }

// // // ---------- Scene renderers ----------

// // function renderSingleTrack(spec) {
// //   const {
// //     range, step, target, mode = 'list',
// //     infinite = false, info,
// //     highlights = [],
// //     showAllTicks,
// //   } = spec;
// //   const tx = makeTx(range);
// //   const lineY = 130;
// //   const height = 200;
// //   const useDots = mode === 'list';
// //   const denseTicks = showAllTicks != null ? showAllTicks : !useDots;

// //   const jumps = [];
// //   let bracket = null;
// //   let target_ = null;

// //   if ((mode === 'exact' || mode === 'overshoot' || mode === 'remainder') && target != null) {
// //     const lastBelow = Math.floor(target / step) * step;

// //     if (mode === 'exact') {
// //       for (let m = 0; m < target; m += step) {
// //         jumps.push({ from: m, to: m + step, color: C.primary, label: `+${step}` });
// //       }
// //       target_ = { x: tx(target), mode: 'filled' };
// //     }

// //     if (mode === 'overshoot') {
// //       for (let m = 0; m < lastBelow; m += step) {
// //         jumps.push({ from: m, to: m + step, color: C.primary, label: `+${step}` });
// //       }
// //       jumps.push({
// //         from: lastBelow, to: lastBelow + step,
// //         color: C.negation, dashed: true, label: 'overshoots'
// //       });
// //       target_ = { x: tx(target), mode: 'open' };
// //       bracket = {
// //         from: lastBelow, to: lastBelow + step,
// //         label: `${target} falls in this gap`,
// //       };
// //     }

// //     if (mode === 'remainder') {
// //       for (let m = 0; m < lastBelow; m += step) {
// //         jumps.push({ from: m, to: m + step, color: C.primary, label: `+${step}` });
// //       }
// //       const r = target - lastBelow;
// //       bracket = { from: lastBelow, to: target, label: `remainder = ${r}` };
// //       target_ = { x: tx(target), mode: 'filled' };
// //     }
// //   }

// //   const labelHighlights = [];
// //   if (target != null && target % step === 0) labelHighlights.push(target);
// //   highlights.forEach(h => { if (!labelHighlights.includes(h)) labelHighlights.push(h); });

// //   const parts = [];

// //   parts.push(`<defs>${arrowDef('ml-arr-axis', C.neutral)}${arrowDef('ml-arr-p', C.primary)}${arrowDef('ml-arr-n', C.negation)}</defs>`);

// //   parts.push(`<line x1="${PLANE_X0}" y1="${lineY}" x2="${PLANE_X1}" y2="${lineY}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#ml-arr-axis)"/>`);

// //   parts.push(ticks(lineY, range, tx, denseTicks ? 1 : step));
// //   parts.push(multipleMarks(lineY, range, step, tx, C.primary, useDots ? 'dot' : 'line'));

// //   parts.push(multipleLabels(lineY + 18, range, step, tx, labelHighlights));
// //   if (target != null && target % step !== 0) {
// //     parts.push(extraLabel(tx(target), lineY + 21, String(target), C.resultStroke, 12, 600));
// //   }

// //   highlights.forEach(h => {
// //     parts.push(targetMarker(tx(h), lineY, 'ring'));
// //   });

// //   jumps.forEach(j => {
// //     const arrowId = j.color === C.negation ? 'ml-arr-n' : 'ml-arr-p';
// //     parts.push(jumpArc(j.from, j.to, lineY, j.color, j.dashed, tx, arrowId, j.label));
// //   });

// //   if (target_) {
// //     parts.push(targetMarker(target_.x, lineY, target_.mode));
// //   }

// //   if (bracket) {
// //     parts.push(gapBracket(bracket.from, bracket.to, lineY + 32, bracket.label, tx));
// //   }

// //   if (infinite) {
// //     parts.push(`<text x="${PLANE_X1 + 6}" y="${lineY + 4}" font-family="sans-serif" font-size="14" fill="${C.textMuted}">&#x2026;</text>`);
// //   }

// //   parts.push(infoPanel(info?.lines, 68));

// //   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Number line scene (single track)</title>${parts.join('')}</svg>`;
// // }

// // function renderTwoTrack(spec) {
// //   const { range, trackA, trackB, highlight = 'lcm', info } = spec;
// //   const tx = makeTx(range);
// //   const yA = 75;
// //   const yB = 155;
// //   const height = 220;

// //   const stepA = trackA.step;
// //   const stepB = trackB.step;
// //   const lcmValue = lcm(stepA, stepB);
// //   const showLcm = highlight === 'lcm' && lcmValue >= range[0] && lcmValue <= range[1];

// //   const parts = [];

// //   parts.push(`<defs>${arrowDef('ml2-arr-axis', C.neutral)}</defs>`);

// //   if (showLcm) {
// //     parts.push(`<rect x="${tx(lcmValue) - 5}" y="${yA - 20}" width="10" height="${yB - yA + 35}" fill="${C.result}" fill-opacity="0.18"/>`);
// //   }

// //   // Top track
// //   parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yA}" x2="${PLANE_X1}" y2="${yA}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#ml2-arr-axis)"/>`);
// //   parts.push(ticks(yA, range, tx));
// //   parts.push(multipleMarks(yA, range, stepA, tx, C.primary, 'dot'));
// //   parts.push(multipleLabels(yA - 12, range, stepA, tx, showLcm ? lcmValue : null));
// //   parts.push(`<text x="${PLANE_X0 - 12}" y="${yA + 4}" font-family="sans-serif" font-size="11" font-weight="600" fill="${C.primary}" text-anchor="end">${trackA.label || `\u00D7${stepA}`}</text>`);

// //   // Bottom track
// //   parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yB}" x2="${PLANE_X1}" y2="${yB}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#ml2-arr-axis)"/>`);
// //   parts.push(ticks(yB, range, tx));
// //   parts.push(multipleMarks(yB, range, stepB, tx, C.secondary, 'dot'));
// //   parts.push(multipleLabels(yB + 17, range, stepB, tx, showLcm ? lcmValue : null));
// //   parts.push(`<text x="${PLANE_X0 - 12}" y="${yB + 4}" font-family="sans-serif" font-size="11" font-weight="600" fill="${C.secondary}" text-anchor="end">${trackB.label || `\u00D7${stepB}`}</text>`);

// //   if (showLcm) {
// //     parts.push(`<circle cx="${tx(lcmValue)}" cy="${yA}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/>`);
// //     parts.push(`<circle cx="${tx(lcmValue)}" cy="${yB}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/>`);
// //     parts.push(`<line x1="${tx(lcmValue)}" y1="${yB + 31}" x2="${tx(lcmValue)}" y2="${yB + 41}" stroke="${C.resultStroke}" stroke-width="0.8"/>`);
// //     parts.push(`<text x="${tx(lcmValue)}" y="${yB + 55}" font-family="sans-serif" font-size="11" font-weight="600" fill="${C.resultStroke}" text-anchor="middle">lcm = ${lcmValue}</text>`);
// //   }

// //   parts.push(infoPanel(info?.lines, 38));

// //   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Number line scene (two tracks)</title>${parts.join('')}</svg>`;
// // }

// // function renderSplitView(spec) {
// //   // Placeholder until the split-view demo is hand-coded.
// //   const { info } = spec;
// //   const parts = [];
// //   parts.push(`<text x="30" y="100" font-family="sans-serif" font-size="12" fill="${C.textMuted}">SplitView renderer pending hand-coded demo.</text>`);
// //   parts.push(infoPanel(info?.lines, 38));
// //   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} 200" role="img"><title>Split view (pending)</title>${parts.join('')}</svg>`;
// // }

// // // ---------- Public API ----------

// // export function renderMultiplesLine(spec) {
// //   if (!spec) return '';
// //   if (spec.kind === 'single-track') return renderSingleTrack(spec);
// //   if (spec.kind === 'two-track')    return renderTwoTrack(spec);
// //   if (spec.kind === 'split-view')   return renderSplitView(spec);
// //   return '';
// // }


// // utils/illustrations/multiplesLine.js  (v2 — split-view implemented)
// //
// // String-based SVG renderer for the "multiples-line" illustration component.
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
//   bgPunch:      'var(--color-background-primary, #FAFAF6)',
// };

// // ---------- Layout ----------
// const VIEWBOX_W = 680;
// const PLANE_X0 = 30;
// const PLANE_X1 = 425;
// const PLANE_INSET = 10;
// const INFO_X = 450;

// // ---------- Math helpers ----------
// function gcd(a, b) {
//   a = Math.abs(a); b = Math.abs(b);
//   while (b) { [a, b] = [b, a % b]; }
//   return a;
// }
// function lcm(a, b) { return (a * b) / gcd(a, b); }

// function computeFactors(n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) result.push(i);
//   }
//   return result;
// }

// function makeTx(range) {
//   const [rMin, rMax] = range;
//   const span = rMax - rMin;
//   const x0 = PLANE_X0 + PLANE_INSET;
//   const x1 = PLANE_X1 - PLANE_INSET;
//   return (m) => x0 + ((m - rMin) / span) * (x1 - x0);
// }

// // ---------- SVG fragment builders ----------

// function arrowDef(id, color) {
//   return `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="${color}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></marker>`;
// }

// function ticks(y, range, tx, every = 1) {
//   const [rMin, rMax] = range;
//   const parts = [];
//   for (let i = rMin; i <= rMax; i += every) {
//     parts.push(`<line x1="${tx(i)}" y1="${y - 3}" x2="${tx(i)}" y2="${y + 3}" stroke="${C.neutral}" stroke-width="0.6"/>`);
//   }
//   return `<g>${parts.join('')}</g>`;
// }

// function multipleMarks(y, range, step, tx, color, style) {
//   const [rMin, rMax] = range;
//   const start = Math.max(rMin, Math.ceil(rMin / step) * step);
//   const parts = [];
//   for (let m = start; m <= rMax; m += step) {
//     if (style === 'dot') {
//       parts.push(`<circle cx="${tx(m)}" cy="${y}" r="3.5" fill="${color}"/>`);
//     } else {
//       parts.push(`<line x1="${tx(m)}" y1="${y - 6}" x2="${tx(m)}" y2="${y + 6}" stroke="${color}" stroke-width="1.4"/>`);
//     }
//   }
//   return `<g>${parts.join('')}</g>`;
// }

// function multipleLabels(y, range, step, tx, highlight) {
//   const [rMin, rMax] = range;
//   const start = Math.max(rMin, Math.ceil(rMin / step) * step);
//   const set = new Set(
//     Array.isArray(highlight) ? highlight :
//     highlight != null ? [highlight] : []
//   );
//   const parts = [];
//   for (let m = start; m <= rMax; m += step) {
//     const isHi = set.has(m);
//     const ty = isHi ? y + 3 : y;
//     const size = isHi ? 12 : 10;
//     const weight = isHi ? 600 : 400;
//     const fill = isHi ? C.resultStroke : C.text;
//     parts.push(`<text x="${tx(m)}" y="${ty}" font-family="sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="middle">${m}</text>`);
//   }
//   return `<g>${parts.join('')}</g>`;
// }

// function extraLabel(x, y, text, color, size = 12, weight = 600) {
//   return `<text x="${x}" y="${y}" font-family="sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="middle">${text}</text>`;
// }

// function jumpArc(from, to, baseY, color, dashed, tx, arrowId, label) {
//   const x1 = tx(from);
//   const x2 = tx(to);
//   const midX = (x1 + x2) / 2;
//   const liftY = baseY - 50;
//   const dashAttr = dashed ? ' stroke-dasharray="5 3"' : '';
//   const arc = `<path d="M ${x1} ${baseY - 4} Q ${midX} ${liftY} ${x2} ${baseY - 4}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round"${dashAttr} marker-end="url(#${arrowId})"/>`;
//   const lbl = label
//     ? `<text x="${midX}" y="${liftY - 4}" font-family="sans-serif" font-size="10" fill="${color}" text-anchor="middle">${label}</text>`
//     : '';
//   return `<g>${arc}${lbl}</g>`;
// }

// function targetMarker(x, y, mode) {
//   if (mode === 'filled') {
//     return `<circle cx="${x}" cy="${y}" r="7" fill="${C.result}" fill-opacity="0.55" stroke="${C.resultStroke}" stroke-width="1.6"/>`;
//   }
//   if (mode === 'ring') {
//     return `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/>`;
//   }
//   return `<circle cx="${x}" cy="${y}" r="7" fill="${C.bgPunch}" stroke="${C.resultStroke}" stroke-width="1.6" stroke-dasharray="2.5 2.5"/>`;
// }

// // Pivot marker: amber outer ring + filled center, used in split-view at the shared point
// function pivotMarker(x, y) {
//   return `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="3.5" fill="${C.result}" fill-opacity="0.85" stroke="${C.resultStroke}" stroke-width="0.6"/>`;
// }

// function gapBracket(from, to, y, label, tx) {
//   const x1 = tx(from);
//   const x2 = tx(to);
//   const path = `<path d="M ${x1} ${y} L ${x1} ${y + 6} L ${x2} ${y + 6} L ${x2} ${y}" fill="none" stroke="${C.resultStroke}" stroke-width="0.8"/>`;
//   const lbl = label
//     ? `<text x="${(x1 + x2) / 2}" y="${y + 20}" font-family="sans-serif" font-size="10" fill="${C.resultStroke}" text-anchor="middle">${label}</text>`
//     : '';
//   return `<g>${path}${lbl}</g>`;
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

// function renderSingleTrack(spec) {
//   const {
//     range, step, target, mode = 'list',
//     infinite = false, info,
//     highlights = [],
//     showAllTicks,
//   } = spec;
//   const tx = makeTx(range);
//   const lineY = 130;
//   const height = 200;
//   const useDots = mode === 'list';
//   const denseTicks = showAllTicks != null ? showAllTicks : !useDots;

//   const jumps = [];
//   let bracket = null;
//   let target_ = null;

//   if ((mode === 'exact' || mode === 'overshoot' || mode === 'remainder') && target != null) {
//     const lastBelow = Math.floor(target / step) * step;

//     if (mode === 'exact') {
//       for (let m = 0; m < target; m += step) {
//         jumps.push({ from: m, to: m + step, color: C.primary, label: `+${step}` });
//       }
//       target_ = { x: tx(target), mode: 'filled' };
//     }

//     if (mode === 'overshoot') {
//       for (let m = 0; m < lastBelow; m += step) {
//         jumps.push({ from: m, to: m + step, color: C.primary, label: `+${step}` });
//       }
//       jumps.push({
//         from: lastBelow, to: lastBelow + step,
//         color: C.negation, dashed: true, label: 'overshoots'
//       });
//       target_ = { x: tx(target), mode: 'open' };
//       bracket = {
//         from: lastBelow, to: lastBelow + step,
//         label: `${target} falls in this gap`,
//       };
//     }

//     if (mode === 'remainder') {
//       for (let m = 0; m < lastBelow; m += step) {
//         jumps.push({ from: m, to: m + step, color: C.primary, label: `+${step}` });
//       }
//       const r = target - lastBelow;
//       bracket = { from: lastBelow, to: target, label: `remainder = ${r}` };
//       target_ = { x: tx(target), mode: 'filled' };
//     }
//   }

//   const labelHighlights = [];
//   if (target != null && target % step === 0) labelHighlights.push(target);
//   highlights.forEach(h => { if (!labelHighlights.includes(h)) labelHighlights.push(h); });

//   const parts = [];

//   parts.push(`<defs>${arrowDef('ml-arr-axis', C.neutral)}${arrowDef('ml-arr-p', C.primary)}${arrowDef('ml-arr-n', C.negation)}</defs>`);

//   parts.push(`<line x1="${PLANE_X0}" y1="${lineY}" x2="${PLANE_X1}" y2="${lineY}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#ml-arr-axis)"/>`);

//   parts.push(ticks(lineY, range, tx, denseTicks ? 1 : step));
//   parts.push(multipleMarks(lineY, range, step, tx, C.primary, useDots ? 'dot' : 'line'));

//   parts.push(multipleLabels(lineY + 18, range, step, tx, labelHighlights));
//   if (target != null && target % step !== 0) {
//     parts.push(extraLabel(tx(target), lineY + 21, String(target), C.resultStroke, 12, 600));
//   }

//   highlights.forEach(h => {
//     parts.push(targetMarker(tx(h), lineY, 'ring'));
//   });

//   jumps.forEach(j => {
//     const arrowId = j.color === C.negation ? 'ml-arr-n' : 'ml-arr-p';
//     parts.push(jumpArc(j.from, j.to, lineY, j.color, j.dashed, tx, arrowId, j.label));
//   });

//   if (target_) {
//     parts.push(targetMarker(target_.x, lineY, target_.mode));
//   }

//   if (bracket) {
//     parts.push(gapBracket(bracket.from, bracket.to, lineY + 32, bracket.label, tx));
//   }

//   if (infinite) {
//     parts.push(`<text x="${PLANE_X1 + 6}" y="${lineY + 4}" font-family="sans-serif" font-size="14" fill="${C.textMuted}">&#x2026;</text>`);
//   }

//   parts.push(infoPanel(info?.lines, 68));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Number line scene (single track)</title>${parts.join('')}</svg>`;
// }

// function renderTwoTrack(spec) {
//   const { range, trackA, trackB, highlight = 'lcm', info } = spec;
//   const tx = makeTx(range);
//   const yA = 75;
//   const yB = 155;
//   const height = 220;

//   const stepA = trackA.step;
//   const stepB = trackB.step;
//   const lcmValue = lcm(stepA, stepB);
//   const showLcm = highlight === 'lcm' && lcmValue >= range[0] && lcmValue <= range[1];

//   const parts = [];

//   parts.push(`<defs>${arrowDef('ml2-arr-axis', C.neutral)}</defs>`);

//   if (showLcm) {
//     parts.push(`<rect x="${tx(lcmValue) - 5}" y="${yA - 20}" width="10" height="${yB - yA + 35}" fill="${C.result}" fill-opacity="0.18"/>`);
//   }

//   // Top track
//   parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yA}" x2="${PLANE_X1}" y2="${yA}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#ml2-arr-axis)"/>`);
//   parts.push(ticks(yA, range, tx));
//   parts.push(multipleMarks(yA, range, stepA, tx, C.primary, 'dot'));
//   parts.push(multipleLabels(yA - 12, range, stepA, tx, showLcm ? lcmValue : null));
//   parts.push(`<text x="${PLANE_X0 - 12}" y="${yA + 4}" font-family="sans-serif" font-size="11" font-weight="600" fill="${C.primary}" text-anchor="end">${trackA.label || `\u00D7${stepA}`}</text>`);

//   // Bottom track
//   parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yB}" x2="${PLANE_X1}" y2="${yB}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#ml2-arr-axis)"/>`);
//   parts.push(ticks(yB, range, tx));
//   parts.push(multipleMarks(yB, range, stepB, tx, C.secondary, 'dot'));
//   parts.push(multipleLabels(yB + 17, range, stepB, tx, showLcm ? lcmValue : null));
//   parts.push(`<text x="${PLANE_X0 - 12}" y="${yB + 4}" font-family="sans-serif" font-size="11" font-weight="600" fill="${C.secondary}" text-anchor="end">${trackB.label || `\u00D7${stepB}`}</text>`);

//   if (showLcm) {
//     parts.push(`<circle cx="${tx(lcmValue)}" cy="${yA}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/>`);
//     parts.push(`<circle cx="${tx(lcmValue)}" cy="${yB}" r="7" fill="none" stroke="${C.resultStroke}" stroke-width="1.6"/>`);
//     parts.push(`<line x1="${tx(lcmValue)}" y1="${yB + 31}" x2="${tx(lcmValue)}" y2="${yB + 41}" stroke="${C.resultStroke}" stroke-width="0.8"/>`);
//     parts.push(`<text x="${tx(lcmValue)}" y="${yB + 55}" font-family="sans-serif" font-size="11" font-weight="600" fill="${C.resultStroke}" text-anchor="middle">lcm = ${lcmValue}</text>`);
//   }

//   parts.push(infoPanel(info?.lines, 38));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Number line scene (two tracks)</title>${parts.join('')}</svg>`;
// }

// function renderSplitView(spec) {
//   const {
//     center,
//     factorsOf,
//     multiplesOf,
//     multiplesCount = 4,
//     info,
//   } = spec;

//   const height = 220;
//   const yTop = 80;
//   const yBot = 160;

//   // Top track: range [0, factorsOf], every integer as a tick, factors as dots
//   const topRange = [0, factorsOf];
//   const txTop = makeTx(topRange);
//   const factorList = computeFactors(factorsOf);

//   // Bottom track: range [center, multiplesOf * (multiplesCount + 1)]
//   const bottomMax = multiplesOf * (multiplesCount + 1);
//   const bottomRange = [center, bottomMax];
//   const txBot = makeTx(bottomRange);

//   const parts = [];

//   parts.push(`<defs>${arrowDef('msv-arr-axis', C.neutral)}</defs>`);

//   // ===== TOP TRACK: factors =====

//   // Title (placed above the track line, clear of dots/labels)
//   parts.push(`<text x="20" y="48" font-family="sans-serif" font-size="12" font-weight="600" fill="${C.primary}">factors of ${factorsOf}</text>`);

//   // Track line (no arrow — factors are bounded)
//   parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yTop}" x2="${PLANE_X1}" y2="${yTop}" stroke="${C.neutral}" stroke-width="1"/>`);

//   // Faint ticks at every integer
//   parts.push(ticks(yTop, topRange, txTop, 1));

//   // Factor dots (excluding the pivot itself)
//   const factorDots = factorList
//     .filter(f => f !== center)
//     .map(f => `<circle cx="${txTop(f)}" cy="${yTop}" r="3.5" fill="${C.primary}"/>`)
//     .join('');
//   parts.push(`<g>${factorDots}</g>`);

//   // Pivot at center (amber)
//   parts.push(pivotMarker(txTop(center), yTop));

//   // Labels under each factor
//   const factorLabels = factorList
//     .map(f => {
//       const isPivot = f === center;
//       const fill = isPivot ? C.resultStroke : C.text;
//       const weight = isPivot ? 600 : 400;
//       return `<text x="${txTop(f)}" y="${yTop + 17}" font-family="sans-serif" font-size="10" font-weight="${weight}" fill="${fill}" text-anchor="middle">${f}</text>`;
//     })
//     .join('');
//   parts.push(`<g>${factorLabels}</g>`);

//   // ===== BOTTOM TRACK: multiples =====

//   // Title
//   parts.push(`<text x="20" y="140" font-family="sans-serif" font-size="12" font-weight="600" fill="${C.secondary}">multiples of ${multiplesOf}</text>`);

//   // Track line with arrow (multiples extend forever)
//   parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yBot}" x2="${PLANE_X1}" y2="${yBot}" stroke="${C.neutral}" stroke-width="1" marker-end="url(#msv-arr-axis)"/>`);

//   // Ticks only at multiples
//   const bottomTicks = [];
//   for (let m = center; m <= bottomMax; m += multiplesOf) {
//     bottomTicks.push(`<line x1="${txBot(m)}" y1="${yBot - 3}" x2="${txBot(m)}" y2="${yBot + 3}" stroke="${C.neutral}" stroke-width="0.8"/>`);
//   }
//   parts.push(`<g>${bottomTicks.join('')}</g>`);

//   // Multiple dots (excluding the pivot)
//   const multipleDots = [];
//   for (let m = center + multiplesOf; m <= bottomMax; m += multiplesOf) {
//     multipleDots.push(`<circle cx="${txBot(m)}" cy="${yBot}" r="3.5" fill="${C.secondary}"/>`);
//   }
//   parts.push(`<g>${multipleDots.join('')}</g>`);

//   // Pivot at center on bottom track (amber, matching the top)
//   parts.push(pivotMarker(txBot(center), yBot));

//   // Labels under each multiple
//   const multipleLabelParts = [];
//   for (let m = center; m <= bottomMax; m += multiplesOf) {
//     const isPivot = m === center;
//     const fill = isPivot ? C.resultStroke : C.text;
//     const weight = isPivot ? 600 : 400;
//     multipleLabelParts.push(`<text x="${txBot(m)}" y="${yBot + 17}" font-family="sans-serif" font-size="10" font-weight="${weight}" fill="${fill}" text-anchor="middle">${m}</text>`);
//   }
//   parts.push(`<g>${multipleLabelParts.join('')}</g>`);

//   // Ellipsis past the last visible multiple
//   parts.push(`<text x="${PLANE_X1 + 6}" y="${yBot + 4}" font-family="sans-serif" font-size="14" fill="${C.textMuted}">&#x2026;</text>`);

//   // Info panel
//   parts.push(infoPanel(info?.lines, 38));

//   return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Split view (factors vs multiples)</title>${parts.join('')}</svg>`;
// }

// // ---------- Public API ----------

// export function renderMultiplesLine(spec) {
//   if (!spec) return '';
//   if (spec.kind === 'single-track') return renderSingleTrack(spec);
//   if (spec.kind === 'two-track')    return renderTwoTrack(spec);
//   if (spec.kind === 'split-view')   return renderSplitView(spec);
//   return '';
// }



// app/utils/illustrations/arithmetic/divisibility/multiplesLine.js
//
// String-based SVG renderer for the "multiples-line" illustration component.
// v3: customizability contract — every color reference goes through `palette`,
//     merged once per render from defaults (`C`) and `spec.style` overrides.
//     v2 visual behavior preserved exactly when no `style` is passed.

// ---------- Default palette ----------
const C = {
  neutral:      '#888780',
  text:         '#5F5E5A',
  textMuted:    '#888780',
  primary:      '#6B62CE',
  secondary:    '#4FA8A4',
  result:       '#EF9F27',
  resultStroke: '#BA7517',
  negation:     '#E24B4A',
  bgPunch:      'var(--color-background-primary, #FAFAF6)',
};

// ---------- Layout ----------
const VIEWBOX_W = 680;
const PLANE_X0 = 30;
const PLANE_X1 = 425;
const PLANE_INSET = 10;
const INFO_X = 450;

// ---------- Math helpers ----------
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
function lcm(a, b) { return (a * b) / gcd(a, b); }

function computeFactors(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}

function makeTx(range) {
  const [rMin, rMax] = range;
  const span = rMax - rMin;
  const x0 = PLANE_X0 + PLANE_INSET;
  const x1 = PLANE_X1 - PLANE_INSET;
  return (m) => x0 + ((m - rMin) / span) * (x1 - x0);
}

// ---------- SVG fragment builders ----------

function arrowDef(id, color) {
  return `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="${color}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></marker>`;
}

function ticks(y, range, tx, every = 1, palette) {
  const [rMin, rMax] = range;
  const parts = [];
  for (let i = rMin; i <= rMax; i += every) {
    parts.push(`<line x1="${tx(i)}" y1="${y - 3}" x2="${tx(i)}" y2="${y + 3}" stroke="${palette.neutral}" stroke-width="0.6"/>`);
  }
  return `<g>${parts.join('')}</g>`;
}

function multipleMarks(y, range, step, tx, color, style) {
  const [rMin, rMax] = range;
  const start = Math.max(rMin, Math.ceil(rMin / step) * step);
  const parts = [];
  for (let m = start; m <= rMax; m += step) {
    if (style === 'dot') {
      parts.push(`<circle cx="${tx(m)}" cy="${y}" r="3.5" fill="${color}"/>`);
    } else {
      parts.push(`<line x1="${tx(m)}" y1="${y - 6}" x2="${tx(m)}" y2="${y + 6}" stroke="${color}" stroke-width="1.4"/>`);
    }
  }
  return `<g>${parts.join('')}</g>`;
}

function multipleLabels(y, range, step, tx, highlight, palette) {
  const [rMin, rMax] = range;
  const start = Math.max(rMin, Math.ceil(rMin / step) * step);
  const set = new Set(
    Array.isArray(highlight) ? highlight :
    highlight != null ? [highlight] : []
  );
  const parts = [];
  for (let m = start; m <= rMax; m += step) {
    const isHi = set.has(m);
    const ty = isHi ? y + 3 : y;
    const size = isHi ? 12 : 10;
    const weight = isHi ? 600 : 400;
    const fill = isHi ? palette.resultStroke : palette.text;
    parts.push(`<text x="${tx(m)}" y="${ty}" font-family="sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="middle">${m}</text>`);
  }
  return `<g>${parts.join('')}</g>`;
}

function extraLabel(x, y, text, color, size = 12, weight = 600) {
  return `<text x="${x}" y="${y}" font-family="sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="middle">${text}</text>`;
}

function jumpArc(from, to, baseY, color, dashed, tx, arrowId, label) {
  const x1 = tx(from);
  const x2 = tx(to);
  const midX = (x1 + x2) / 2;
  const liftY = baseY - 50;
  const dashAttr = dashed ? ' stroke-dasharray="5 3"' : '';
  const arc = `<path d="M ${x1} ${baseY - 4} Q ${midX} ${liftY} ${x2} ${baseY - 4}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round"${dashAttr} marker-end="url(#${arrowId})"/>`;
  const lbl = label
    ? `<text x="${midX}" y="${liftY - 4}" font-family="sans-serif" font-size="10" fill="${color}" text-anchor="middle">${label}</text>`
    : '';
  return `<g>${arc}${lbl}</g>`;
}

function targetMarker(x, y, mode, palette) {
  if (mode === 'filled') {
    return `<circle cx="${x}" cy="${y}" r="7" fill="${palette.result}" fill-opacity="0.55" stroke="${palette.resultStroke}" stroke-width="1.6"/>`;
  }
  if (mode === 'ring') {
    return `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${palette.resultStroke}" stroke-width="1.6"/>`;
  }
  return `<circle cx="${x}" cy="${y}" r="7" fill="${palette.bgPunch}" stroke="${palette.resultStroke}" stroke-width="1.6" stroke-dasharray="2.5 2.5"/>`;
}

function pivotMarker(x, y, palette) {
  return `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${palette.resultStroke}" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="3.5" fill="${palette.result}" fill-opacity="0.85" stroke="${palette.resultStroke}" stroke-width="0.6"/>`;
}

function gapBracket(from, to, y, label, tx, palette) {
  const x1 = tx(from);
  const x2 = tx(to);
  const path = `<path d="M ${x1} ${y} L ${x1} ${y + 6} L ${x2} ${y + 6} L ${x2} ${y}" fill="none" stroke="${palette.resultStroke}" stroke-width="0.8"/>`;
  const lbl = label
    ? `<text x="${(x1 + x2) / 2}" y="${y + 20}" font-family="sans-serif" font-size="10" fill="${palette.resultStroke}" text-anchor="middle">${label}</text>`
    : '';
  return `<g>${path}${lbl}</g>`;
}

function resolveRole(role, palette) {
  switch (role) {
    case 'primary':   return palette.primary;
    case 'secondary': return palette.secondary;
    case 'result':    return palette.resultStroke;
    case 'negation':  return palette.negation;
    default:          return palette.text;
  }
}

function infoPanel(lines, yStart, palette) {
  const x = INFO_X;
  let y = yStart;
  const parts = [];
  (lines || []).forEach((line) => {
    if (line.kind === 'formula') {
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="15" font-weight="600" fill="${resolveRole(line.role, palette)}">${line.text}</text>`);
      y += 22;
    } else if (line.kind === 'separator') {
      parts.push(`<line x1="${x}" y1="${y - 10}" x2="${x + 200}" y2="${y - 10}" stroke="${palette.neutral}" stroke-width="0.5" stroke-opacity="0.4"/>`);
      y += 4;
    } else if (line.kind === 'list') {
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="12" fill="${resolveRole(line.role, palette)}">${line.label}</text>`);
      y += 15;
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${palette.textMuted}">${line.items}</text>`);
      y += 22;
    } else if (line.kind === 'note') {
      const style = line.italic ? ' font-style="italic"' : '';
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${palette.textMuted}"${style}>${line.text}</text>`);
      y += 16;
    }
  });
  return `<g>${parts.join('')}</g>`;
}

// ---------- Scene renderers ----------

function renderSingleTrack(spec) {
  const palette = { ...C, ...(spec.style || {}) };
  const {
    range, step, target, mode = 'list',
    infinite = false, info,
    highlights = [],
    showAllTicks,
  } = spec;
  const tx = makeTx(range);
  const lineY = 130;
  const height = 200;
  const useDots = mode === 'list';
  const denseTicks = showAllTicks != null ? showAllTicks : !useDots;

  const jumps = [];
  let bracket = null;
  let target_ = null;

  if ((mode === 'exact' || mode === 'overshoot' || mode === 'remainder') && target != null) {
    const lastBelow = Math.floor(target / step) * step;

    if (mode === 'exact') {
      for (let m = 0; m < target; m += step) {
        jumps.push({ from: m, to: m + step, color: palette.primary, label: `+${step}` });
      }
      target_ = { x: tx(target), mode: 'filled' };
    }

    if (mode === 'overshoot') {
      for (let m = 0; m < lastBelow; m += step) {
        jumps.push({ from: m, to: m + step, color: palette.primary, label: `+${step}` });
      }
      jumps.push({
        from: lastBelow, to: lastBelow + step,
        color: palette.negation, dashed: true, label: 'overshoots'
      });
      target_ = { x: tx(target), mode: 'open' };
      bracket = {
        from: lastBelow, to: lastBelow + step,
        label: `${target} falls in this gap`,
      };
    }

    if (mode === 'remainder') {
      for (let m = 0; m < lastBelow; m += step) {
        jumps.push({ from: m, to: m + step, color: palette.primary, label: `+${step}` });
      }
      const r = target - lastBelow;
      bracket = { from: lastBelow, to: target, label: `remainder = ${r}` };
      target_ = { x: tx(target), mode: 'filled' };
    }
  }

  const labelHighlights = [];
  if (target != null && target % step === 0) labelHighlights.push(target);
  highlights.forEach(h => { if (!labelHighlights.includes(h)) labelHighlights.push(h); });

  const parts = [];

  parts.push(`<defs>${arrowDef('ml-arr-axis', palette.neutral)}${arrowDef('ml-arr-p', palette.primary)}${arrowDef('ml-arr-n', palette.negation)}</defs>`);

  parts.push(`<line x1="${PLANE_X0}" y1="${lineY}" x2="${PLANE_X1}" y2="${lineY}" stroke="${palette.neutral}" stroke-width="1" marker-end="url(#ml-arr-axis)"/>`);

  parts.push(ticks(lineY, range, tx, denseTicks ? 1 : step, palette));
  parts.push(multipleMarks(lineY, range, step, tx, palette.primary, useDots ? 'dot' : 'line'));

  parts.push(multipleLabels(lineY + 18, range, step, tx, labelHighlights, palette));
  if (target != null && target % step !== 0) {
    parts.push(extraLabel(tx(target), lineY + 21, String(target), palette.resultStroke, 12, 600));
  }

  highlights.forEach(h => {
    parts.push(targetMarker(tx(h), lineY, 'ring', palette));
  });

  jumps.forEach(j => {
    const arrowId = j.color === palette.negation ? 'ml-arr-n' : 'ml-arr-p';
    parts.push(jumpArc(j.from, j.to, lineY, j.color, j.dashed, tx, arrowId, j.label));
  });

  if (target_) {
    parts.push(targetMarker(target_.x, lineY, target_.mode, palette));
  }

  if (bracket) {
    parts.push(gapBracket(bracket.from, bracket.to, lineY + 32, bracket.label, tx, palette));
  }

  if (infinite) {
    parts.push(`<text x="${PLANE_X1 + 6}" y="${lineY + 4}" font-family="sans-serif" font-size="14" fill="${palette.textMuted}">&#x2026;</text>`);
  }

  parts.push(infoPanel(info?.lines, 68, palette));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Number line scene (single track)</title>${parts.join('')}</svg>`;
}

function renderTwoTrack(spec) {
  const palette = { ...C, ...(spec.style || {}) };
  const { range, trackA, trackB, highlight = 'lcm', info } = spec;
  const tx = makeTx(range);
  const yA = 75;
  const yB = 155;
  const height = 220;

  const stepA = trackA.step;
  const stepB = trackB.step;
  const lcmValue = lcm(stepA, stepB);
  const showLcm = highlight === 'lcm' && lcmValue >= range[0] && lcmValue <= range[1];

  const parts = [];

  parts.push(`<defs>${arrowDef('ml2-arr-axis', palette.neutral)}</defs>`);

  if (showLcm) {
    parts.push(`<rect x="${tx(lcmValue) - 5}" y="${yA - 20}" width="10" height="${yB - yA + 35}" fill="${palette.result}" fill-opacity="0.18"/>`);
  }

  // Top track
  parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yA}" x2="${PLANE_X1}" y2="${yA}" stroke="${palette.neutral}" stroke-width="1" marker-end="url(#ml2-arr-axis)"/>`);
  parts.push(ticks(yA, range, tx, 1, palette));
  parts.push(multipleMarks(yA, range, stepA, tx, palette.primary, 'dot'));
  parts.push(multipleLabels(yA - 12, range, stepA, tx, showLcm ? lcmValue : null, palette));
  parts.push(`<text x="${PLANE_X0 - 12}" y="${yA + 4}" font-family="sans-serif" font-size="11" font-weight="600" fill="${palette.primary}" text-anchor="end">${trackA.label || `\u00D7${stepA}`}</text>`);

  // Bottom track
  parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yB}" x2="${PLANE_X1}" y2="${yB}" stroke="${palette.neutral}" stroke-width="1" marker-end="url(#ml2-arr-axis)"/>`);
  parts.push(ticks(yB, range, tx, 1, palette));
  parts.push(multipleMarks(yB, range, stepB, tx, palette.secondary, 'dot'));
  parts.push(multipleLabels(yB + 17, range, stepB, tx, showLcm ? lcmValue : null, palette));
  parts.push(`<text x="${PLANE_X0 - 12}" y="${yB + 4}" font-family="sans-serif" font-size="11" font-weight="600" fill="${palette.secondary}" text-anchor="end">${trackB.label || `\u00D7${stepB}`}</text>`);

  if (showLcm) {
    parts.push(`<circle cx="${tx(lcmValue)}" cy="${yA}" r="7" fill="none" stroke="${palette.resultStroke}" stroke-width="1.6"/>`);
    parts.push(`<circle cx="${tx(lcmValue)}" cy="${yB}" r="7" fill="none" stroke="${palette.resultStroke}" stroke-width="1.6"/>`);
    parts.push(`<line x1="${tx(lcmValue)}" y1="${yB + 31}" x2="${tx(lcmValue)}" y2="${yB + 41}" stroke="${palette.resultStroke}" stroke-width="0.8"/>`);
    parts.push(`<text x="${tx(lcmValue)}" y="${yB + 55}" font-family="sans-serif" font-size="11" font-weight="600" fill="${palette.resultStroke}" text-anchor="middle">lcm = ${lcmValue}</text>`);
  }

  parts.push(infoPanel(info?.lines, 38, palette));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Number line scene (two tracks)</title>${parts.join('')}</svg>`;
}

function renderSplitView(spec) {
  const palette = { ...C, ...(spec.style || {}) };
  const {
    center,
    factorsOf,
    multiplesOf,
    multiplesCount = 4,
    info,
  } = spec;

  const height = 220;
  const yTop = 80;
  const yBot = 160;

  const topRange = [0, factorsOf];
  const txTop = makeTx(topRange);
  const factorList = computeFactors(factorsOf);

  const bottomMax = multiplesOf * (multiplesCount + 1);
  const bottomRange = [center, bottomMax];
  const txBot = makeTx(bottomRange);

  const parts = [];

  parts.push(`<defs>${arrowDef('msv-arr-axis', palette.neutral)}</defs>`);

  // ===== TOP TRACK: factors =====
  parts.push(`<text x="20" y="48" font-family="sans-serif" font-size="12" font-weight="600" fill="${palette.primary}">factors of ${factorsOf}</text>`);
  parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yTop}" x2="${PLANE_X1}" y2="${yTop}" stroke="${palette.neutral}" stroke-width="1"/>`);
  parts.push(ticks(yTop, topRange, txTop, 1, palette));

  const factorDots = factorList
    .filter(f => f !== center)
    .map(f => `<circle cx="${txTop(f)}" cy="${yTop}" r="3.5" fill="${palette.primary}"/>`)
    .join('');
  parts.push(`<g>${factorDots}</g>`);

  parts.push(pivotMarker(txTop(center), yTop, palette));

  const factorLabels = factorList
    .map(f => {
      const isPivot = f === center;
      const fill = isPivot ? palette.resultStroke : palette.text;
      const weight = isPivot ? 600 : 400;
      return `<text x="${txTop(f)}" y="${yTop + 17}" font-family="sans-serif" font-size="10" font-weight="${weight}" fill="${fill}" text-anchor="middle">${f}</text>`;
    })
    .join('');
  parts.push(`<g>${factorLabels}</g>`);

  // ===== BOTTOM TRACK: multiples =====
  parts.push(`<text x="20" y="140" font-family="sans-serif" font-size="12" font-weight="600" fill="${palette.secondary}">multiples of ${multiplesOf}</text>`);
  parts.push(`<line x1="${PLANE_X0 - 10}" y1="${yBot}" x2="${PLANE_X1}" y2="${yBot}" stroke="${palette.neutral}" stroke-width="1" marker-end="url(#msv-arr-axis)"/>`);

  const bottomTicks = [];
  for (let m = center; m <= bottomMax; m += multiplesOf) {
    bottomTicks.push(`<line x1="${txBot(m)}" y1="${yBot - 3}" x2="${txBot(m)}" y2="${yBot + 3}" stroke="${palette.neutral}" stroke-width="0.8"/>`);
  }
  parts.push(`<g>${bottomTicks.join('')}</g>`);

  const multipleDots = [];
  for (let m = center + multiplesOf; m <= bottomMax; m += multiplesOf) {
    multipleDots.push(`<circle cx="${txBot(m)}" cy="${yBot}" r="3.5" fill="${palette.secondary}"/>`);
  }
  parts.push(`<g>${multipleDots.join('')}</g>`);

  parts.push(pivotMarker(txBot(center), yBot, palette));

  const multipleLabelParts = [];
  for (let m = center; m <= bottomMax; m += multiplesOf) {
    const isPivot = m === center;
    const fill = isPivot ? palette.resultStroke : palette.text;
    const weight = isPivot ? 600 : 400;
    multipleLabelParts.push(`<text x="${txBot(m)}" y="${yBot + 17}" font-family="sans-serif" font-size="10" font-weight="${weight}" fill="${fill}" text-anchor="middle">${m}</text>`);
  }
  parts.push(`<g>${multipleLabelParts.join('')}</g>`);

  parts.push(`<text x="${PLANE_X1 + 6}" y="${yBot + 4}" font-family="sans-serif" font-size="14" fill="${palette.textMuted}">&#x2026;</text>`);

  parts.push(infoPanel(info?.lines, 38, palette));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Split view (factors vs multiples)</title>${parts.join('')}</svg>`;
}

// ---------- Public API ----------

export function renderMultiplesLine(spec) {
  if (!spec) return '';
  if (spec.kind === 'single-track') return renderSingleTrack(spec);
  if (spec.kind === 'two-track')    return renderTwoTrack(spec);
  if (spec.kind === 'split-view')   return renderSplitView(spec);
  return '';
}