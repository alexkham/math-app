

// 'use client';

// import React, { useId } from 'react';
// import { processContent } from '../../../utils/contentProcessor';

// const DEFAULT_COLORS = {
//   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
//   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
//   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
//   operationText: '#5F5E5A',
// };

// const SCROLL_CSS = `
//   .fmd-wrap { width: 100%; max-width: 100%; margin: 58px 0; }
//   .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; overflow: visible; }
//   .fmd-cell { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; line-height: 1.1; overflow: visible; font-size: 17px; }
//   .fmd-cell .katex { font-size: 1.15em; }
//   .fmd-label { width: 100%; height: 100%; display: flex; align-items: center; font-family: sans-serif; line-height: 1.1; font-size: 16px; color: #5F5E5A; overflow: visible; }
//   .fmd-label .katex { font-size: 1.15em; }
// `;

// // Estimate visible character count after KaTeX renders (strip LaTeX markup)
// const VISIBLE_NAMES = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','cot','sec','csc','log','ln','exp','det','min','max','lim','sup','inf'];
// const GREEK_MAP = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', phi:'φ', chi:'χ', psi:'ψ', omega:'ω' };

// const visibleLen = (s) => {
//   if (!s) return 0;
//   let str = String(s);
//   str = str.replace(/\$/g, '');
//   VISIBLE_NAMES.forEach(op => { str = str.replace(new RegExp('\\\\' + op + '\\b', 'g'), op); });
//   Object.entries(GREEK_MAP).forEach(([name, ch]) => { str = str.replace(new RegExp('\\\\' + name + '\\b', 'gi'), ch); });
//   str = str.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
//   str = str.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
//   str = str.replace(/\\cdot/g, '·');
//   str = str.replace(/\\times/g, '×');
//   str = str.replace(/\\to|\\rightarrow/g, '→');
//   str = str.replace(/\\(?:left|right)/g, '');
//   str = str.replace(/\\,|\\!|\\;|\\:|\\quad|\\qquad/g, '');
//   str = str.replace(/\\[a-zA-Z]+\s?/g, '');
//   str = str.replace(/[{}^_]/g, '');
//   return str.length;
// };

// export default function FunctionMachineDiagram({
//   steps = [],
//   inverse = null,
//   colors = {},
// }) {
//   const uid = useId().replace(/:/g, '');
//   const markerId = `fm-arr-${uid}`;

//   const c = {
//     input:         { ...DEFAULT_COLORS.input, ...colors.input },
//     output:        { ...DEFAULT_COLORS.output, ...colors.output },
//     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
//     operationText: colors.operationText || DEFAULT_COLORS.operationText,
//   };

//   if (steps.length < 2) return null;

//   const hasInverse = !!inverse;
//   const vertical = !hasInverse && steps.length > 3;

//   const BOX_H        = hasInverse ? 58 : 52;
//   const RX           = 8;
//   const CHAR_W       = 12;
//   const LABEL_CHAR_W = 10;
//   const MIN_BOX_W    = 70;
//   const MIN_GAP      = 90;
//   const PAD_L        = 20;
//   const PAD_R        = 20;
//   const PAD_TOP      = 22;
//   const PAD_BOTTOM   = hasInverse ? 40 : 22;
//   const VERT_GAP     = 60;
//   const LABEL_H      = 24;

//   const boxW = steps.map(s => Math.max(MIN_BOX_W, visibleLen(s.value) * CHAR_W + 28));

//   const boxColor = (i) => {
//     if (i === 0) return c.input;
//     if (i === steps.length - 1) return c.output;
//     return c.intermediate;
//   };

//   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
//   const invArrowColor = c.output.border;

//   const arrowMarker = (
//     <defs>
//       <marker
//         id={markerId}
//         viewBox="0 0 10 10"
//         refX="8" refY="5"
//         markerWidth="6" markerHeight="6"
//         orient="auto-start-reverse"
//       >
//         <path
//           d="M2 1L8 5L2 9"
//           fill="none"
//           stroke="context-stroke"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </marker>
//     </defs>
//   );

//   const valueCell = (step, x, y, w, h, col) => (
//     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
//       <div
//         xmlns="http://www.w3.org/1999/xhtml"
//         className="fmd-cell"
//         style={{ fontSize: '17px', fontWeight: 500, color: col.text }}
//       >
//         {processContent(step.value)}
//       </div>
//     </foreignObject>
//   );

//   const labelCell = (text, x, y, w, h, align = 'center') => (
//     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
//       <div
//         xmlns="http://www.w3.org/1999/xhtml"
//         className="fmd-label"
//         style={{ justifyContent: align === 'start' ? 'flex-start' : 'center', color: c.operationText }}
//       >
//         {processContent(text)}
//       </div>
//     </foreignObject>
//   );

//   if (vertical) {
//     const maxBoxW = Math.max(...boxW);
//     let maxLabelW = 0;
//     for (let i = 0; i < steps.length - 1; i++) {
//       const op = steps[i].operation || '';
//       maxLabelW = Math.max(maxLabelW, visibleLen(op) * LABEL_CHAR_W);
//     }
//     const ARROW_LABEL_GAP = 10;
//     const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R + 8;
//     const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
//     const centerX = PAD_L + maxBoxW / 2;

//     const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

//     return (
//       <>
//         <style>{SCROLL_CSS}</style>
//         <div className="fmd-wrap">
//           <svg
//             className="fmd-svg"
//             width={W}
//             height={H}
//             viewBox={`0 0 ${W} ${H}`}
//             xmlns="http://www.w3.org/2000/svg"
//             role="img"
//           >
//             <title>Function machine</title>
//             {arrowMarker}

//             {steps.map((step, i) => {
//               const col = boxColor(i);
//               const x = centerX - boxW[i] / 2;
//               const y = yForStep(i);
//               return (
//                 <g key={`b${i}`}>
//                   <rect
//                     x={x}
//                     y={y}
//                     width={boxW[i]}
//                     height={BOX_H}
//                     rx={RX}
//                     fill={col.bg}
//                     stroke={col.border}
//                     strokeWidth="0.5"
//                   />
//                   {valueCell(step, x, y, boxW[i], BOX_H, col)}
//                 </g>
//               );
//             })}

//             {steps.map((step, i) => {
//               if (i >= steps.length - 1 || !step.operation) return null;
//               const y1 = yForStep(i) + BOX_H + 2;
//               const y2 = yForStep(i + 1) - 2;
//               const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
//               const labelY = (y1 + y2) / 2 - LABEL_H / 2;
//               return (
//                 <g key={`a${i}`}>
//                   <line
//                     x1={centerX} y1={y1}
//                     x2={centerX} y2={y2}
//                     stroke={fwdArrowColor}
//                     strokeWidth="1.5"
//                     markerEnd={`url(#${markerId})`}
//                     fill="none"
//                   />
//                   {labelCell(step.operation, labelX, labelY, maxLabelW + 20, LABEL_H, 'start')}
//                 </g>
//               );
//             })}
//           </svg>
//         </div>
//       </>
//     );
//   }

//   const gaps = [];
//   for (let i = 0; i < steps.length - 1; i++) {
//     const op = steps[i].operation || '';
//     gaps.push(Math.max(MIN_GAP, visibleLen(op) * LABEL_CHAR_W + 40));
//   }

//   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
//   const W = PAD_L + contentW + PAD_R;
//   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

//   const bx = [];
//   let cx = PAD_L;
//   for (let i = 0; i < steps.length; i++) {
//     bx.push(cx);
//     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
//   }

//   const by = PAD_TOP;
//   const cy = PAD_TOP + BOX_H / 2;

//   return (
//     <>
//       <style>{SCROLL_CSS}</style>
//       <div className="fmd-wrap">
//         <svg
//           className="fmd-svg"
//           width={W}
//           height={H}
//           viewBox={`0 0 ${W} ${H}`}
//           xmlns="http://www.w3.org/2000/svg"
//           role="img"
//         >
//           <title>Function machine</title>
//           {arrowMarker}

//           {steps.map((step, i) => {
//             const col = boxColor(i);
//             return (
//               <g key={`b${i}`}>
//                 <rect
//                   x={bx[i]}
//                   y={by}
//                   width={boxW[i]}
//                   height={BOX_H}
//                   rx={RX}
//                   fill={col.bg}
//                   stroke={col.border}
//                   strokeWidth="0.5"
//                 />
//                 {valueCell(step, bx[i], by, boxW[i], BOX_H, col)}
//               </g>
//             );
//           })}

//           {steps.map((step, i) => {
//             if (i >= steps.length - 1 || !step.operation) return null;
//             const x1 = bx[i] + boxW[i] + 2;
//             const x2 = bx[i + 1] - 2;
//             const arrowY = hasInverse ? cy - 9 : cy;
//             const labelW = x2 - x1;

//             return (
//               <g key={`a${i}`}>
//                 <line
//                   x1={x1} y1={arrowY}
//                   x2={x2} y2={arrowY}
//                   stroke={fwdArrowColor}
//                   strokeWidth="1.5"
//                   markerEnd={`url(#${markerId})`}
//                   fill="none"
//                 />
//                 {labelCell(step.operation, x1, arrowY - LABEL_H - 2, labelW, LABEL_H, 'center')}
//               </g>
//             );
//           })}

//           {hasInverse && (() => {
//             const last = steps.length - 1;
//             const x1 = bx[last] - 2;
//             const x2 = bx[0] + boxW[0] + 2;
//             const arrowY = cy + 9;
//             const labelY = arrowY + 4;
//             const labelW = bx[last] - (bx[0] + boxW[0]);

//             return (
//               <g>
//                 <line
//                   x1={x1} y1={arrowY}
//                   x2={x2} y2={arrowY}
//                   stroke={invArrowColor}
//                   strokeWidth="1.5"
//                   markerEnd={`url(#${markerId})`}
//                   fill="none"
//                 />
//                 {labelCell(inverse.operation, bx[0] + boxW[0], labelY, labelW, LABEL_H, 'center')}
//               </g>
//             );
//           })()}
//         </svg>
//       </div>
//     </>
//   );
// }


'use client';

import React, { useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// ─────────────────────────────────────────────────────────────
// Themes
//   - 'deep-focus' (default) — monochromatic indigo intensification
//   - 'cool-ramp'            — sky → slate → indigo
//   - 'indigo-bookends'      — brand tint → warm neutral → solid brand
// The `colors` prop still overrides individual pieces of the chosen theme.
// ─────────────────────────────────────────────────────────────
const THEMES = {
  'deep-focus': {
    input:         { bg: '#EEF2FF', border: '#A5B4FC', text: '#4338CA' },
    intermediate:  { bg: '#E0E7FF', border: '#6366F1', text: '#3730A3' },
    output:        { bg: '#4F46E5', border: '#3730A3', text: '#FFFFFF' },
    operationText: '#4F46E5',
  },
  'cool-ramp': {
    input:         { bg: '#F0F9FF', border: '#0EA5E9', text: '#0C4A6E' },
    intermediate:  { bg: '#F8FAFC', border: '#94A3B8', text: '#475569' },
    output:        { bg: '#EEF2FF', border: '#4F46E5', text: '#312E81' },
    operationText: '#64748B',
  },
  'indigo-bookends': {
    input:         { bg: '#EEF2FF', border: '#4F46E5', text: '#3730A3' },
    intermediate:  { bg: '#F5F5F4', border: '#A8A29E', text: '#57534E' },
    output:        { bg: '#4F46E5', border: '#3730A3', text: '#FFFFFF' },
    operationText: '#57534E',
  },
};

const DEFAULT_THEME = 'deep-focus';

const SCROLL_CSS = `
  .fmd-wrap { width: 100%; max-width: 100%; margin: 58px 0; }
  .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; overflow: visible; }
  .fmd-cell { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; line-height: 1.1; overflow: visible; font-size: 17px; }
  .fmd-cell .katex { font-size: 1.15em; }
  .fmd-label { width: 100%; height: 100%; display: flex; align-items: center; font-family: sans-serif; line-height: 1.1; font-size: 16px; color: #5F5E5A; overflow: visible; }
  .fmd-label .katex { font-size: 1.15em; }
`;

// Estimate visible character count after KaTeX renders (strip LaTeX markup)
const VISIBLE_NAMES = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','cot','sec','csc','log','ln','exp','det','min','max','lim','sup','inf'];
const GREEK_MAP = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', phi:'φ', chi:'χ', psi:'ψ', omega:'ω' };

const visibleLen = (s) => {
  if (!s) return 0;
  let str = String(s);
  str = str.replace(/\$/g, '');
  VISIBLE_NAMES.forEach(op => { str = str.replace(new RegExp('\\\\' + op + '\\b', 'g'), op); });
  Object.entries(GREEK_MAP).forEach(([name, ch]) => { str = str.replace(new RegExp('\\\\' + name + '\\b', 'gi'), ch); });
  str = str.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
  str = str.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
  str = str.replace(/\\cdot/g, '·');
  str = str.replace(/\\times/g, '×');
  str = str.replace(/\\to|\\rightarrow/g, '→');
  str = str.replace(/\\(?:left|right)/g, '');
  str = str.replace(/\\,|\\!|\\;|\\:|\\quad|\\qquad/g, '');
  str = str.replace(/\\[a-zA-Z]+\s?/g, '');
  str = str.replace(/[{}^_]/g, '');
  return str.length;
};

export default function FunctionMachineDiagram({
  steps = [],
  inverse = null,
  theme = DEFAULT_THEME,
  colors = {},
}) {
  const uid = useId().replace(/:/g, '');
  const markerId = `fm-arr-${uid}`;

  // Resolve base theme (fall back to default if unknown key given)
  const baseTheme = THEMES[theme] || THEMES[DEFAULT_THEME];

  // Merge `colors` prop on top of the chosen theme
  const c = {
    input:         { ...baseTheme.input,        ...colors.input },
    output:        { ...baseTheme.output,       ...colors.output },
    intermediate:  { ...baseTheme.intermediate, ...colors.intermediate },
    operationText: colors.operationText || baseTheme.operationText,
  };

  if (steps.length < 2) return null;

  const hasInverse = !!inverse;
  const vertical = !hasInverse && steps.length > 3;

  const BOX_H        = hasInverse ? 58 : 52;
  const RX           = 8;
  const CHAR_W       = 12;
  const LABEL_CHAR_W = 10;
  const MIN_BOX_W    = 70;
  const MIN_GAP      = 90;
  const PAD_L        = 20;
  const PAD_R        = 20;
  const PAD_TOP      = 22;
  const PAD_BOTTOM   = hasInverse ? 40 : 22;
  const VERT_GAP     = 60;
  const LABEL_H      = 24;

  const boxW = steps.map(s => Math.max(MIN_BOX_W, visibleLen(s.value) * CHAR_W + 28));

  const boxColor = (i) => {
    if (i === 0) return c.input;
    if (i === steps.length - 1) return c.output;
    return c.intermediate;
  };

  const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
  const invArrowColor = c.output.border;

  const arrowMarker = (
    <defs>
      <marker
        id={markerId}
        viewBox="0 0 10 10"
        refX="8" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse"
      >
        <path
          d="M2 1L8 5L2 9"
          fill="none"
          stroke="context-stroke"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>
  );

  const valueCell = (step, x, y, w, h, col) => (
    <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="fmd-cell"
        style={{ fontSize: '17px', fontWeight: 500, color: col.text }}
      >
        {processContent(step.value)}
      </div>
    </foreignObject>
  );

  const labelCell = (text, x, y, w, h, align = 'center') => (
    <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="fmd-label"
        style={{ justifyContent: align === 'start' ? 'flex-start' : 'center', color: c.operationText }}
      >
        {processContent(text)}
      </div>
    </foreignObject>
  );

  if (vertical) {
    const maxBoxW = Math.max(...boxW);
    let maxLabelW = 0;
    for (let i = 0; i < steps.length - 1; i++) {
      const op = steps[i].operation || '';
      maxLabelW = Math.max(maxLabelW, visibleLen(op) * LABEL_CHAR_W);
    }
    const ARROW_LABEL_GAP = 10;
    const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R + 8;
    const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
    const centerX = PAD_L + maxBoxW / 2;

    const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

    return (
      <>
        <style>{SCROLL_CSS}</style>
        <div className="fmd-wrap">
          <svg
            className="fmd-svg"
            width={W}
            height={H}
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Function machine</title>
            {arrowMarker}

            {steps.map((step, i) => {
              const col = boxColor(i);
              const x = centerX - boxW[i] / 2;
              const y = yForStep(i);
              return (
                <g key={`b${i}`}>
                  <rect
                    x={x}
                    y={y}
                    width={boxW[i]}
                    height={BOX_H}
                    rx={RX}
                    fill={col.bg}
                    stroke={col.border}
                    strokeWidth="0.5"
                  />
                  {valueCell(step, x, y, boxW[i], BOX_H, col)}
                </g>
              );
            })}

            {steps.map((step, i) => {
              if (i >= steps.length - 1 || !step.operation) return null;
              const y1 = yForStep(i) + BOX_H + 2;
              const y2 = yForStep(i + 1) - 2;
              const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
              const labelY = (y1 + y2) / 2 - LABEL_H / 2;
              return (
                <g key={`a${i}`}>
                  <line
                    x1={centerX} y1={y1}
                    x2={centerX} y2={y2}
                    stroke={fwdArrowColor}
                    strokeWidth="1.5"
                    markerEnd={`url(#${markerId})`}
                    fill="none"
                  />
                  {labelCell(step.operation, labelX, labelY, maxLabelW + 20, LABEL_H, 'start')}
                </g>
              );
            })}
          </svg>
        </div>
      </>
    );
  }

  const gaps = [];
  for (let i = 0; i < steps.length - 1; i++) {
    const op = steps[i].operation || '';
    gaps.push(Math.max(MIN_GAP, visibleLen(op) * LABEL_CHAR_W + 40));
  }

  const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
  const W = PAD_L + contentW + PAD_R;
  const H = PAD_TOP + BOX_H + PAD_BOTTOM;

  const bx = [];
  let cx = PAD_L;
  for (let i = 0; i < steps.length; i++) {
    bx.push(cx);
    if (i < steps.length - 1) cx += boxW[i] + gaps[i];
  }

  const by = PAD_TOP;
  const cy = PAD_TOP + BOX_H / 2;

  return (
    <>
      <style>{SCROLL_CSS}</style>
      <div className="fmd-wrap">
        <svg
          className="fmd-svg"
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <title>Function machine</title>
          {arrowMarker}

          {steps.map((step, i) => {
            const col = boxColor(i);
            return (
              <g key={`b${i}`}>
                <rect
                  x={bx[i]}
                  y={by}
                  width={boxW[i]}
                  height={BOX_H}
                  rx={RX}
                  fill={col.bg}
                  stroke={col.border}
                  strokeWidth="0.5"
                />
                {valueCell(step, bx[i], by, boxW[i], BOX_H, col)}
              </g>
            );
          })}

          {steps.map((step, i) => {
            if (i >= steps.length - 1 || !step.operation) return null;
            const x1 = bx[i] + boxW[i] + 2;
            const x2 = bx[i + 1] - 2;
            const arrowY = hasInverse ? cy - 9 : cy;
            const labelW = x2 - x1;

            return (
              <g key={`a${i}`}>
                <line
                  x1={x1} y1={arrowY}
                  x2={x2} y2={arrowY}
                  stroke={fwdArrowColor}
                  strokeWidth="1.5"
                  markerEnd={`url(#${markerId})`}
                  fill="none"
                />
                {labelCell(step.operation, x1, arrowY - LABEL_H - 2, labelW, LABEL_H, 'center')}
              </g>
            );
          })}

          {hasInverse && (() => {
            const last = steps.length - 1;
            const x1 = bx[last] - 2;
            const x2 = bx[0] + boxW[0] + 2;
            const arrowY = cy + 9;
            const labelY = arrowY + 4;
            const labelW = bx[last] - (bx[0] + boxW[0]);

            return (
              <g>
                <line
                  x1={x1} y1={arrowY}
                  x2={x2} y2={arrowY}
                  stroke={invArrowColor}
                  strokeWidth="1.5"
                  markerEnd={`url(#${markerId})`}
                  fill="none"
                />
                {labelCell(inverse.operation, bx[0] + boxW[0], labelY, labelW, LABEL_H, 'center')}
              </g>
            );
          })()}
        </svg>
      </div>
    </>
  );
}