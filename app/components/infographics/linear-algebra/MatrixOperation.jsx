// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import MatrixScene from './MatrixScene';
// /* ============================================================================
//  * THEMES
//  * ==========================================================================*/
// const THEMES = {
//   navy:       { paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478', line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5' },
//   terracotta: { paper: '#fffaf3', ink: '#2a1a14', muted: '#6b5848', line: '#e8d9c4', accent: '#c4543a', soft: '#fdf3e6' },
//   forest:     { paper: '#f6f3ea', ink: '#1a2a1f', muted: '#5a6b5a', line: '#d8dcc9', accent: '#3d6b4a', soft: '#eef2e0' },
//   burgundy:   { paper: '#faf4f4', ink: '#2a1418', muted: '#6b5258', line: '#e6d5d8', accent: '#7d2838', soft: '#f5e9ec' },
//   olive:      { paper: '#f9f6ea', ink: '#1f1f14', muted: '#5a5a4a', line: '#dcd6bc', accent: '#7a7a2a', soft: '#f0ecd4' },
//   ocean:      { paper: '#f0f7f7', ink: '#0f2228', muted: '#4a6168', line: '#cfe0e0', accent: '#1f7a82', soft: '#e0eded' },
//   mono:       { paper: '#ffffff', ink: '#000000', muted: '#666666', line: '#dddddd', accent: '#000000', soft: '#f4f4f4' },
//   plum:       { paper: '#f7f3f8', ink: '#1f1428', muted: '#5a4e6b', line: '#e0d6e4', accent: '#5a2d7a', soft: '#ede4f0' },
//   dark:       { paper: '#1a1a22', ink: '#f0ece0', muted: '#9a958a', line: '#2e2e3a', accent: '#ffb84a', soft: '#22222e' },
// };

// /* Which MatrixScene scene backs each operation. */
// const OP_SCENE = {
//   add: 'addition',
//   subtract: 'subtraction',
//   multiply: 'multiplication',
//   scalar: 'scalarMultiplication',
//   transpose: 'transpose',
//   inverse: 'inversePair',
// };

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.mop-root.mop-t-' + key + '{' +
//       '--mop-paper:' + t.paper + ';--mop-ink:' + t.ink + ';--mop-muted:' + t.muted + ';' +
//       '--mop-line:' + t.line + ';--mop-accent:' + t.accent + ';--mop-soft:' + t.soft + ';}';
//   });

//   css +=
//   '.mop-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--mop-ink);background:var(--mop-paper);}' +
//   '.mop-root *,.mop-root *::before,.mop-root *::after{box-sizing:border-box;}' +
//   '.mop-root a{color:var(--mop-accent);text-underline-offset:2px;}' +

//   '.mop-mast{background:var(--mop-ink);color:var(--mop-paper);padding:26px 32px 24px;' +
//   'position:relative;}' +
//   '.mop-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
//   'background:var(--mop-accent);}' +
//   '.mop-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
//   'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
//   '.mop-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
//   'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
//   '.mop-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +

//   '.mop-stage{border:1px solid var(--mop-line);border-top:none;padding:24px 26px;}' +

//   /* ---------- conformability rail ---------- */
//   '.mop-rail{border:1px solid var(--mop-line);border-top:none;display:grid;' +
//   'grid-template-columns:repeat(auto-fit,minmax(180px,1fr));}' +
//   '.mop-cf{padding:16px 20px;border-right:1px solid var(--mop-line);}' +
//   '.mop-cf:last-child{border-right:none;}' +
//   '.mop-cf dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
//   'letter-spacing:.18em;text-transform:uppercase;color:var(--mop-muted);margin-bottom:6px;}' +
//   '.mop-cf dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:15px;' +
//   'font-weight:800;}' +
//   '.mop-cf dd small{display:block;font-family:\'Inter\',sans-serif;font-size:11px;font-weight:400;' +
//   'color:var(--mop-muted);margin-top:6px;}' +
//   '.mop-cf.is-hot dd{color:var(--mop-accent);}' +
//   '.mop-cf.is-fail{background:var(--mop-soft);}' +
//   '.mop-cf.is-fail dd{color:var(--mop-accent);}' +

//   /* ---------- verdict banner ---------- */
//   '.mop-verdict{border:1px solid var(--mop-line);border-top:none;padding:15px 32px;' +
//   'display:flex;align-items:center;gap:14px;flex-wrap:wrap;}' +
//   '.mop-badge{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
//   'letter-spacing:.15em;text-transform:uppercase;padding:5px 10px;}' +
//   '.mop-badge.is-ok{background:var(--mop-ink);color:var(--mop-paper);}' +
//   '.mop-badge.is-fail{background:var(--mop-accent);color:var(--mop-paper);}' +
//   '.mop-verdict-text{font-size:13px;color:var(--mop-muted);}' +

//   '.mop-note{border:1px solid var(--mop-line);border-top:none;padding:16px 32px;font-size:13.5px;}' +
//   '.mop-note-in{border-left:3px solid var(--mop-accent);background:var(--mop-soft);' +
//   'padding:14px 17px;}' +
//   '.mop-note b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.13em;text-transform:uppercase;color:var(--mop-accent);display:block;' +
//   'margin-bottom:7px;font-weight:800;}' +
//   '.mop-note p{margin:0 0 8px;}.mop-note p:last-child{margin-bottom:0;}' +

//   /* ---------- variant: compact ---------- */
//   '.mop-root.mop-v-compact .mop-mast{padding:16px 22px 14px;}' +
//   '.mop-root.mop-v-compact .mop-mast::after{left:22px;right:22px;}' +
//   '.mop-root.mop-v-compact .mop-title{font-size:19px;}' +
//   '.mop-root.mop-v-compact .mop-stage{padding:16px 18px;}' +
//   '.mop-root.mop-v-compact .mop-cf{padding:12px 16px;}' +
//   '.mop-root.mop-v-compact .mop-cf dd{font-size:13px;}' +

//   '.mop-empty{border:1px dashed var(--mop-line);padding:20px;text-align:center;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--mop-muted);}' +

//   '@media (max-width:640px){' +
//   '.mop-mast{padding:22px 18px 20px;}.mop-mast::after{left:18px;right:18px;}' +
//   '.mop-title{font-size:22px;}' +
//   '.mop-stage{padding:18px 16px;}' +
//   '.mop-verdict,.mop-note{padding:14px 18px;}' +
//   '}';

//   return css;
// }

// const MOP_CSS = buildCss();

// /* ============================================================================
//  * HELPERS — conformability is computed, never supplied
//  * ==========================================================================*/
// function dims(m) {
//   if (!m || !m.length) return null;
//   return { rows: m.length, cols: m[0].length };
// }

// function fmt(d) {
//   return d ? d.rows + '\u00D7' + d.cols : '\u2014';
// }

// function analyse(operation, A, B) {
//   const dA = dims(A);
//   const dB = dims(B);

//   if (operation === 'multiply') {
//     const ok = !!(dA && dB && dA.cols === dB.rows);
//     return {
//       ok: ok,
//       cells: [
//         { label: 'Outer dimensions', value: dA && dB ? dA.rows + '\u00D7' + dB.cols : '\u2014',
//           note: 'survive into the result' },
//         { label: 'Inner dimensions',
//           value: dA && dB ? dA.cols + (ok ? ' = ' : ' \u2260 ') + dB.rows : '\u2014',
//           note: ok ? 'match, then disappear' : 'do not match \u2014 product undefined',
//           hot: true, fail: !ok },
//         { label: 'Reverse product',
//           value: dA && dB && dB.cols === dA.rows ? dB.rows + '\u00D7' + dA.cols : 'undefined',
//           note: 'BA is a different size, or not defined at all', hot: true },
//       ],
//       verdict: ok
//         ? 'Conformable \u2014 the product is defined.'
//         : 'Not conformable \u2014 columns of A must equal rows of B.',
//     };
//   }

//   if (operation === 'add' || operation === 'subtract') {
//     const ok = !!(dA && dB && dA.rows === dB.rows && dA.cols === dB.cols);
//     return {
//       ok: ok,
//       cells: [
//         { label: 'Shape of A', value: fmt(dA) },
//         { label: 'Shape of B', value: fmt(dB), fail: !ok },
//         { label: 'Requirement', value: ok ? 'identical' : 'mismatch', hot: true, fail: !ok,
//           note: 'entrywise operations need the same shape' },
//       ],
//       verdict: ok
//         ? 'Same shape \u2014 the sum is defined entrywise.'
//         : 'Shapes differ \u2014 the sum is undefined. There is no broadcasting here.',
//     };
//   }

//   if (operation === 'transpose') {
//     return {
//       ok: true,
//       cells: [
//         { label: 'Input', value: fmt(dA) },
//         { label: 'Output', value: dA ? dA.cols + '\u00D7' + dA.rows : '\u2014', hot: true,
//           note: 'dimensions swap' },
//         { label: 'Requirement', value: 'none', note: 'defined for every matrix' },
//       ],
//       verdict: 'Always defined \u2014 the transpose imposes no condition.',
//     };
//   }

//   if (operation === 'scalar') {
//     return {
//       ok: true,
//       cells: [
//         { label: 'Input', value: fmt(dA) },
//         { label: 'Output', value: fmt(dA), note: 'unchanged' },
//         { label: 'Requirement', value: 'none' },
//       ],
//       verdict: 'Always defined \u2014 scaling preserves shape.',
//     };
//   }

//   if (operation === 'inverse') {
//     const square = !!(dA && dA.rows === dA.cols);
//     return {
//       ok: square,
//       cells: [
//         { label: 'Shape', value: fmt(dA), fail: !square },
//         { label: 'Square', value: square ? 'yes' : 'no', hot: true, fail: !square },
//         { label: 'Also requires', value: 'det \u2260 0', note: 'squareness alone is not enough' },
//       ],
//       verdict: square
//         ? 'Square \u2014 an inverse may exist, subject to the determinant.'
//         : 'Not square \u2014 no inverse exists, only a pseudoinverse.',
//     };
//   }

//   return { ok: true, cells: [], verdict: null };
// }

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   data     – flat object
//  *   theme    – nine theme keys; default navy
//  *   variant  – 'full' | 'compact'
//  *
//  * data shape
//  *   {
//  *     kicker, title, intro, note,
//  *     operation: 'multiply'|'add'|'subtract'|'scalar'|'transpose'|'inverse',
//  *     A, B?, result, scalar?, inverse?, identity?, pairs?,
//  *     highlight?: { rowOfA, colOfB, caption }
//  *   }
//  * ==========================================================================*/
// export default function MatrixOperation(props) {
//   const data = props.data;
//   const theme = THEMES[props.theme] ? props.theme : 'navy';
//   const variant = props.variant || 'full';

//   const rootClass = 'mop-root mop-t-' + theme + ' mop-v-' + variant;

//   if (!data || !data.A) {
//     return (
//       <div className={rootClass}>
//         <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
//         <div className="mop-empty">MatrixOperation: no operand supplied</div>
//       </div>
//     );
//   }

//   const operation = data.operation || 'multiply';
//   const sceneName = OP_SCENE[operation] || 'display';
//   const report = analyse(operation, data.A, data.B);

//   const sceneContent = {
//     A: data.A,
//     B: data.B,
//     result: data.result,
//     inverse: data.inverse,
//     identity: data.identity,
//     scalar: data.scalar,
//     pairs: data.pairs,
//     nameA: data.nameA,
//     nameB: data.nameB,
//     nameC: data.nameC,
//     showDim: true,
//     highlight: data.highlight,
//     caption: data.caption,
//   };

//   return (
//     <div className={rootClass}>
//       <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />

//       <div className="mop-mast">
//         {data.kicker ? <div className="mop-kicker">{data.kicker}</div> : null}
//         {data.title ? <h3 className="mop-title">{data.title}</h3> : null}
//         {data.intro ? <p className="mop-intro">{processContent(data.intro)}</p> : null}
//       </div>

//       <div className="mop-stage">
//         <MatrixScene theme={theme} scene={sceneName} content={sceneContent} />
//       </div>

//       {report.cells.length > 0 ? (
//         <dl className="mop-rail">
//           {report.cells.map(function (c, i) {
//             return (
//               <div
//                 key={i}
//                 className={'mop-cf' + (c.hot ? ' is-hot' : '') + (c.fail ? ' is-fail' : '')}
//               >
//                 <dt>{c.label}</dt>
//                 <dd>
//                   {c.value}
//                   {c.note ? <small>{c.note}</small> : null}
//                 </dd>
//               </div>
//             );
//           })}
//         </dl>
//       ) : null}

//       {report.verdict ? (
//         <div className="mop-verdict">
//           <span className={'mop-badge ' + (report.ok ? 'is-ok' : 'is-fail')}>
//             {report.ok ? 'Defined' : 'Undefined'}
//           </span>
//           <span className="mop-verdict-text">{report.verdict}</span>
//         </div>
//       ) : null}

//       {data.note ? (
//         <div className="mop-note">
//           <div className="mop-note-in">
//             <b>{data.noteLabel || 'What the dimension rail shows'}</b>
//             {processContent(data.note)}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export { THEMES as MOP_THEMES, OP_SCENE };



import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * MatrixOperation
 *
 * One operation on given operands, shown. Every number below the operands is
 * derived here — the result, the entry expansions, the operation counts, the
 * conformability verdict, the reverse product, the determinant, the trace. The
 * page supplies operands and prose and nothing else, so the page cannot supply
 * a wrong answer.
 *
 * Nothing in this component holds state. Every step of every variant renders at
 * once, and the single collapsible region is a CSS checkbox that the export
 * hooks force open. A capture therefore never depends on what the reader had
 * expanded.
 *
 * Props
 *   data      – flat object, below
 *   theme     – 'navy'
 *   variant   – 'anatomy' (default) | 'ledger' | 'fill' | 'conformability'
 *               | 'pair' | 'iterate' | 'strip'
 *   maxWidth  – override the 920px default
 *   id        – stable id for the collapse control; derived from the title
 *               when absent
 *
 * data
 *   {
 *     kicker, title, intro, note, noteLabel, footnote,
 *     anchor, anchorLabel,
 *     operation: 'multiply'|'add'|'subtract'|'scalar'|'transpose'
 *                |'inverse'|'power',
 *     A, B,                       // arrays of arrays of numbers
 *     scalar,                     // for 'scalar'
 *     powers,                     // for 'power' / the iterate variant
 *     nameA, nameB, nameC,        // display labels, default A, B, and derived
 *     feature: [i, j],            // the entry anatomy expands; default [0,0]
 *   }
 *
 * Not accepted, deliberately: `result`, `inverse`, `identity`, `pairs`. An
 * operand set determines all of them.
 * ==========================================================================*/

/* ============================================================================
 * THEME
 * ==========================================================================*/
const DEFAULT_THEME = 'navy';

const THEMES = {
  navy: {
    paper: '#f5f8fc',
    ink: '#13315c',
    muted: '#4a6285',
    line: '#c3d0e4',
    accent: '#2f6fb5',
    soft: '#e3ecf7',
    rowtint: '#dce8f7',
    coltint: '#eef1e2',
  },
};

const VARIANTS = [
  'anatomy',
  'ledger',
  'fill',
  'conformability',
  'pair',
  'iterate',
  'strip',
];

/* Which operations each variant can actually say something about. An
 * unsupported pairing renders a gap rather than degrading quietly. */
const SUPPORT = {
  anatomy: ['multiply'],
  ledger: ['multiply', 'add', 'subtract'],
  fill: ['multiply', 'add', 'subtract'],
  conformability: [
    'multiply',
    'add',
    'subtract',
    'scalar',
    'transpose',
    'inverse',
    'power',
  ],
  pair: ['multiply'],
  iterate: ['power'],
  strip: [
    'multiply',
    'add',
    'subtract',
    'scalar',
    'transpose',
    'inverse',
    'power',
  ],
};

const FILL_CAP = 6;

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.mop-root.mop-t-' + key + '{' +
      '--mop-paper:' + t.paper + ';' +
      '--mop-ink:' + t.ink + ';' +
      '--mop-muted:' + t.muted + ';' +
      '--mop-line:' + t.line + ';' +
      '--mop-accent:' + t.accent + ';' +
      '--mop-soft:' + t.soft + ';' +
      '--mop-rowtint:' + t.rowtint + ';' +
      '--mop-coltint:' + t.coltint + ';' +
      '}';
  });

  css +=
    /* ---------- root ---------- */
    ".mop-root{font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.5;" +
    'color:var(--mop-ink);background:var(--mop-paper);max-width:920px;' +
    'margin-left:auto;margin-right:auto;}' +
    '.mop-root *,.mop-root *::before,.mop-root *::after{box-sizing:border-box;}' +
    '.mop-root a{color:var(--mop-accent);text-underline-offset:2px;}' +

    /* ---------- masthead ---------- */
    '.mop-mast{background:var(--mop-ink);color:var(--mop-paper);' +
    'padding:24px 30px 22px;position:relative;}' +
    ".mop-mast::after{content:'';position:absolute;left:30px;right:30px;bottom:0;" +
    'height:3px;background:var(--mop-accent);}' +
    ".mop-kick{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;" +
    'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.62;}' +
    ".mop-ttl{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;" +
    'font-size:26px;letter-spacing:-.03em;margin:8px 0 0;line-height:1.07;}' +
    '.mop-intro{font-size:13.5px;margin:10px 0 0;max-width:600px;opacity:.76;}' +
    '.mop-tally{position:absolute;right:30px;top:24px;text-align:right;' +
    "font-family:'JetBrains Mono',ui-monospace,monospace;}" +
    '.mop-tally b{display:block;font-size:22px;font-weight:800;line-height:1;}' +
    '.mop-tally i{font-style:normal;font-size:8px;letter-spacing:.16em;' +
    'text-transform:uppercase;opacity:.6;}' +
    '.mop-tally u{display:block;text-decoration:none;font-size:8px;margin-top:7px;' +
    'letter-spacing:.16em;text-transform:uppercase;color:var(--mop-accent);}' +
    '.mop-anchor{display:inline-block;margin-top:11px;' +
    "font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;" +
    'font-weight:800;letter-spacing:.14em;text-transform:uppercase;' +
    'padding:4px 9px;border:1px solid rgba(255,255,255,.34);' +
    'color:var(--mop-paper);text-decoration:none;}' +
    '.mop-anchor:hover{background:var(--mop-accent);border-color:var(--mop-accent);}' +

    /* ---------- matrices ---------- */
    '.mop-fig{margin:0;text-align:center;}' +
    '.mop-mx{display:inline-grid;position:relative;padding:5px 12px;}' +
    ".mop-mx::before,.mop-mx::after{content:'';position:absolute;top:0;bottom:0;" +
    'width:7px;border:1.5px solid var(--mop-ink);}' +
    '.mop-mx::before{left:0;border-right:none;}' +
    '.mop-mx::after{right:0;border-left:none;}' +
    ".mop-cell{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:14px;" +
    'padding:5px 9px;min-width:38px;text-align:right;}' +
    '.mop-cell.is-row{background:var(--mop-rowtint);}' +
    '.mop-cell.is-col{background:var(--mop-coltint);}' +
    '.mop-cell.is-hit{background:var(--mop-ink);color:var(--mop-paper);font-weight:800;}' +
    '.mop-cell.is-done{background:var(--mop-soft);}' +
    '.mop-cell.is-void{color:var(--mop-line);}' +
    '.mop-cell.is-sep{border-left:1.5px dashed var(--mop-line);}' +
    ".mop-cap{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9.5px;" +
    'letter-spacing:.14em;text-transform:uppercase;color:var(--mop-muted);' +
    'margin-top:9px;}' +
    '.mop-cap b{color:var(--mop-ink);font-size:11px;letter-spacing:.06em;}' +
    ".mop-glyph{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:20px;" +
    'color:var(--mop-muted);padding-bottom:20px;}' +
    '.mop-mx.is-ghost::before,.mop-mx.is-ghost::after{border-color:var(--mop-line);' +
    'border-style:dashed;}' +
    ".mop-ghostfill{padding:22px 26px;font-family:'JetBrains Mono',ui-monospace,monospace;" +
    'font-size:11px;color:var(--mop-muted);text-align:center;letter-spacing:.1em;' +
    'text-transform:uppercase;line-height:1.6;}' +

    /* ---------- chain ---------- */
    '.mop-chain{border:1px solid var(--mop-line);border-top:none;padding:15px 30px;' +
    'display:flex;align-items:center;gap:10px;flex-wrap:wrap;}' +
    ".mop-dim{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:15px;" +
    'font-weight:800;display:inline-flex;align-items:baseline;}' +
    '.mop-dim em{font-style:normal;padding:2px 3px;}' +
    '.mop-dim .out{color:var(--mop-ink);}' +
    '.mop-dim .inn{color:var(--mop-accent);background:var(--mop-soft);}' +
    '.mop-dim .lbl{font-size:10px;font-weight:700;color:var(--mop-muted);' +
    'margin-right:6px;letter-spacing:.08em;}' +
    ".mop-chain .op{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:15px;" +
    'color:var(--mop-muted);}' +
    '.mop-chain .arw{color:var(--mop-muted);font-size:15px;}' +
    '.mop-chain .gloss{font-size:11.5px;color:var(--mop-muted);margin-left:auto;' +
    'max-width:270px;text-align:right;line-height:1.35;}' +
    '.mop-chain.is-fail .inn{color:var(--mop-paper);background:var(--mop-accent);}' +

    /* ---------- stage ---------- */
    '.mop-stage{border:1px solid var(--mop-line);border-top:none;' +
    'padding:24px 30px 20px;display:flex;align-items:center;justify-content:center;' +
    'gap:16px;flex-wrap:wrap;overflow-x:auto;}' +

    /* ---------- derivation ---------- */
    '.mop-deriv{border:1px solid var(--mop-line);border-top:none;padding:18px 30px;' +
    'background:var(--mop-soft);}' +
    ".mop-deriv-h{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;" +
    'font-weight:800;letter-spacing:.16em;text-transform:uppercase;' +
    'color:var(--mop-accent);margin-bottom:11px;}' +
    ".mop-eq{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:15px;" +
    'display:flex;align-items:center;gap:7px;flex-wrap:wrap;}' +
    '.mop-eq .lhs{font-weight:800;}' +
    '.mop-eq .sgn{color:var(--mop-muted);}' +
    '.mop-trm{display:inline-flex;align-items:center;}' +
    '.mop-trm .ta{background:var(--mop-rowtint);padding:3px 6px;}' +
    '.mop-trm .tb{background:var(--mop-coltint);padding:3px 6px;}' +
    '.mop-trm .dot{color:var(--mop-muted);padding:0 3px;}' +
    '.mop-eq .res{background:var(--mop-ink);color:var(--mop-paper);padding:3px 9px;' +
    'font-weight:800;}' +
    '.mop-deriv-g{font-size:12.5px;color:var(--mop-muted);margin:11px 0 0;' +
    'max-width:620px;}' +

    /* ---------- ledger ---------- */
    '.mop-ledger{border:1px solid var(--mop-line);border-top:none;}' +
    '.mop-lrow{display:grid;grid-template-columns:64px 1fr 74px;align-items:center;' +
    'border-bottom:1px solid var(--mop-line);}' +
    '.mop-lrow:last-child{border-bottom:none;}' +
    '.mop-lrow.is-alt{background:var(--mop-soft);}' +
    ".mop-lk{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;" +
    'font-weight:800;padding:12px 0 12px 30px;color:var(--mop-accent);}' +
    ".mop-lt{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12.5px;" +
    'padding:12px 8px;color:var(--mop-muted);}' +
    '.mop-lt b{color:var(--mop-ink);font-weight:700;}' +
    ".mop-lv{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:14px;" +
    'font-weight:800;text-align:right;padding:12px 30px 12px 0;}' +

    /* ---------- fill frames ---------- */
    '.mop-frames{border:1px solid var(--mop-line);border-top:none;display:grid;' +
    'grid-template-columns:repeat(auto-fit,minmax(215px,1fr));}' +
    '.mop-frame{padding:18px 20px 20px;border-right:1px solid var(--mop-line);' +
    'border-top:1px solid var(--mop-line);text-align:center;}' +
    ".mop-frame .fnum{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:8px;" +
    'font-weight:800;letter-spacing:.18em;text-transform:uppercase;' +
    'color:var(--mop-accent);margin-bottom:12px;}' +
    ".mop-frame .feq{font-family:'JetBrains Mono',ui-monospace,monospace;" +
    'font-size:11.5px;color:var(--mop-muted);margin-top:12px;line-height:1.6;}' +
    '.mop-frame .feq b{color:var(--mop-ink);font-weight:700;}' +
    '.mop-frame .feq u{display:block;text-decoration:none;color:var(--mop-ink);' +
    'font-weight:800;font-size:13px;margin-top:4px;}' +

    /* the one collapsible region, and it is a checkbox, never state */
    '.mop-toggle{position:absolute;opacity:0;pointer-events:none;width:0;height:0;}' +
    '.mop-over{display:none;border:1px solid var(--mop-line);border-top:none;' +
    'grid-template-columns:repeat(auto-fit,minmax(215px,1fr));}' +
    '.mop-toggle:checked ~ .mop-over{display:grid;}' +
    '.mop-toggle:checked ~ .mop-more{display:none;}' +
    '.mop-more{display:block;border:1px solid var(--mop-line);border-top:none;' +
    'padding:11px 30px;cursor:pointer;' +
    "font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;" +
    'font-weight:800;letter-spacing:.16em;text-transform:uppercase;' +
    'color:var(--mop-accent);}' +
    '.mop-more:hover{background:var(--mop-soft);}' +

    /* ---------- pair ---------- */
    '.mop-pair{border:1px solid var(--mop-line);border-top:none;display:grid;' +
    'grid-template-columns:1fr 1fr;}' +
    '.mop-pane{padding:22px 24px;border-right:1px solid var(--mop-line);' +
    'text-align:center;overflow-x:auto;}' +
    '.mop-pane:last-child{border-right:none;}' +
    ".mop-pane h4{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;" +
    'font-weight:800;letter-spacing:.16em;text-transform:uppercase;' +
    'color:var(--mop-muted);margin:0 0 4px;}' +
    ".mop-pane .shp{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;" +
    'color:var(--mop-accent);margin-bottom:14px;}' +

    /* ---------- iterate ---------- */
    '.mop-iter{border:1px solid var(--mop-line);border-top:none;padding:24px 26px;' +
    'display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;' +
    'overflow-x:auto;}' +
    '.mop-arw{text-align:center;padding-bottom:20px;}' +
    ".mop-arw b{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:18px;" +
    'color:var(--mop-muted);font-weight:400;}' +
    '.mop-arw em{display:block;font-style:normal;' +
    "font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;" +
    'color:var(--mop-accent);letter-spacing:.1em;margin-top:3px;}' +

    /* ---------- rail ---------- */
    '.mop-rail{border:1px solid var(--mop-line);border-top:none;display:grid;' +
    'grid-template-columns:repeat(auto-fit,minmax(168px,1fr));}' +
    '.mop-rc{padding:14px 20px;border-right:1px solid var(--mop-line);}' +
    '.mop-rc:last-child{border-right:none;}' +
    ".mop-rc dt{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:8px;" +
    'letter-spacing:.18em;text-transform:uppercase;color:var(--mop-muted);' +
    'margin-bottom:6px;}' +
    ".mop-rc dd{margin:0;font-family:'JetBrains Mono',ui-monospace,monospace;" +
    'font-size:15px;font-weight:800;}' +
    ".mop-rc dd small{display:block;font-family:'Inter',sans-serif;font-size:11px;" +
    'font-weight:400;color:var(--mop-muted);margin-top:6px;line-height:1.35;}' +
    '.mop-rc.is-hot dd{color:var(--mop-accent);}' +
    '.mop-rc.is-fail{background:var(--mop-soft);}' +
    '.mop-rc.is-fail dd{color:var(--mop-accent);}' +

    /* ---------- verdict ---------- */
    '.mop-verd{border:1px solid var(--mop-line);border-top:none;padding:14px 30px;' +
    'display:flex;align-items:center;gap:13px;flex-wrap:wrap;}' +
    ".mop-badge{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;" +
    'font-weight:800;letter-spacing:.15em;text-transform:uppercase;padding:5px 10px;}' +
    '.mop-badge.is-ok{background:var(--mop-ink);color:var(--mop-paper);}' +
    '.mop-badge.is-no{background:var(--mop-accent);color:var(--mop-paper);}' +
    '.mop-verd .t{font-size:13px;color:var(--mop-muted);}' +

    /* ---------- note / footnote ---------- */
    '.mop-note{border:1px solid var(--mop-line);border-top:none;padding:16px 30px;' +
    'font-size:13.5px;}' +
    '.mop-note-in{border-left:3px solid var(--mop-accent);background:var(--mop-soft);' +
    'padding:13px 16px;}' +
    ".mop-note-in b{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;" +
    'letter-spacing:.13em;text-transform:uppercase;color:var(--mop-accent);' +
    'display:block;margin-bottom:7px;font-weight:800;}' +
    '.mop-note-in p{margin:0;}' +
    '.mop-foot{border:1px solid var(--mop-line);border-top:none;padding:13px 30px;' +
    'font-size:12.5px;color:var(--mop-muted);}' +

    /* ---------- gap placeholders ---------- */
    ".mop-gap{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;" +
    'letter-spacing:.1em;text-transform:uppercase;color:var(--mop-accent);}' +
    '.mop-empty{border:1px dashed var(--mop-line);padding:20px;text-align:center;' +
    "font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;" +
    'color:var(--mop-muted);}' +

    /* ---------- strip ---------- */
    '.mop-root.mop-v-strip{border:1px solid var(--mop-line);' +
    'border-left:3px solid var(--mop-accent);padding:14px 20px;display:flex;' +
    'align-items:center;gap:16px;flex-wrap:wrap;overflow-x:auto;}' +
    '.mop-root.mop-v-strip .mop-mx{padding:3px 9px;}' +
    '.mop-root.mop-v-strip .mop-cell{font-size:11.5px;padding:2px 6px;min-width:26px;}' +
    '.mop-root.mop-v-strip .mop-glyph{font-size:15px;padding-bottom:0;}' +
    '.mop-root.mop-v-strip .say{font-size:12.5px;color:var(--mop-muted);' +
    'margin-left:auto;max-width:300px;text-align:right;line-height:1.35;}' +

    /* ---------- export hooks ---------- */
    '[data-diagram-export] .mop-over{display:grid !important;}' +
    '[data-diagram-export] .mop-more{display:none !important;}' +
    '[data-diagram-export] .mop-anchor{display:none !important;}' +
    '[data-diagram-export] .mop-stage,' +
    '[data-diagram-export] .mop-iter,' +
    '[data-diagram-export] .mop-pane{overflow-x:visible !important;}' +

    /* ---------- responsive ---------- */
    '@media (max-width:640px){' +
    '.mop-mast{padding:20px 18px 18px;}' +
    '.mop-mast::after{left:18px;right:18px;}' +
    '.mop-ttl{font-size:21px;}' +
    '.mop-tally{display:none;}' +
    '.mop-chain,.mop-stage,.mop-deriv,.mop-verd,.mop-note,.mop-foot,' +
    '.mop-iter,.mop-more{padding-left:18px;padding-right:18px;}' +
    '.mop-lk{padding-left:18px;}.mop-lv{padding-right:18px;}' +
    '.mop-pair{grid-template-columns:1fr;}' +
    '.mop-pane{border-right:none;border-bottom:1px solid var(--mop-line);}' +
    '}';

  return css;
}

const MOP_CSS = buildCss();

/* ============================================================================
 * ARITHMETIC — every one of these is pure, and none of it is ever supplied
 * ==========================================================================*/
function isMatrix(m) {
  if (!Array.isArray(m) || m.length === 0) return false;
  if (!Array.isArray(m[0]) || m[0].length === 0) return false;
  const w = m[0].length;
  for (let i = 0; i < m.length; i++) {
    if (!Array.isArray(m[i]) || m[i].length !== w) return false;
  }
  return true;
}

function isNumeric(m) {
  if (!isMatrix(m)) return false;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (typeof m[i][j] !== 'number' || !isFinite(m[i][j])) return false;
    }
  }
  return true;
}

function dims(m) {
  return isMatrix(m) ? { r: m.length, c: m[0].length } : null;
}

function shapeOf(m) {
  const d = dims(m);
  return d ? d.r + '\u00D7' + d.c : '\u2014';
}

function num(v) {
  if (typeof v !== 'number') return String(v);
  return v < 0 ? '\u2212' + Math.abs(v) : String(v);
}

function product(X, Y) {
  if (!isNumeric(X) || !isNumeric(Y)) return null;
  if (X[0].length !== Y.length) return null;
  const out = [];
  for (let i = 0; i < X.length; i++) {
    out.push([]);
    for (let j = 0; j < Y[0].length; j++) {
      let s = 0;
      for (let k = 0; k < Y.length; k++) s += X[i][k] * Y[k][j];
      out[i].push(s);
    }
  }
  return out;
}

function combine(X, Y, sign) {
  if (!isNumeric(X) || !isNumeric(Y)) return null;
  if (X.length !== Y.length || X[0].length !== Y[0].length) return null;
  return X.map(function (row, i) {
    return row.map(function (v, j) {
      return v + sign * Y[i][j];
    });
  });
}

function scaleBy(X, k) {
  if (!isNumeric(X) || typeof k !== 'number') return null;
  return X.map(function (row) {
    return row.map(function (v) {
      return v * k;
    });
  });
}

function transposeOf(X) {
  if (!isMatrix(X)) return null;
  const out = [];
  for (let j = 0; j < X[0].length; j++) {
    out.push([]);
    for (let i = 0; i < X.length; i++) out[j].push(X[i][j]);
  }
  return out;
}

function minorOf(X, i, j) {
  const out = [];
  for (let r = 0; r < X.length; r++) {
    if (r === i) continue;
    const row = [];
    for (let c = 0; c < X[r].length; c++) {
      if (c === j) continue;
      row.push(X[r][c]);
    }
    out.push(row);
  }
  return out;
}

function detOf(X) {
  if (!isNumeric(X)) return null;
  const d = dims(X);
  if (d.r !== d.c) return null;
  if (d.r === 1) return X[0][0];
  if (d.r === 2) return X[0][0] * X[1][1] - X[0][1] * X[1][0];
  let s = 0;
  for (let j = 0; j < d.c; j++) {
    s += (j % 2 === 0 ? 1 : -1) * X[0][j] * detOf(minorOf(X, 0, j));
  }
  return s;
}

/* Integer inverse only. A fractional inverse is a real result but not one this
 * component can render honestly without rational arithmetic, so it returns null
 * and the variant shows a gap. */
function inverseOf(X) {
  const d = dims(X);
  if (!isNumeric(X) || !d || d.r !== d.c) return null;
  const det = detOf(X);
  if (!det) return null;
  const n = d.r;
  const adj = [];
  for (let i = 0; i < n; i++) {
    adj.push([]);
    for (let j = 0; j < n; j++) {
      const cof =
        ((i + j) % 2 === 0 ? 1 : -1) *
        (n === 1 ? 1 : detOf(minorOf(X, j, i)));
      adj[i].push(cof);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (adj[i][j] % det !== 0) return null;
    }
  }
  return adj.map(function (row) {
    return row.map(function (v) {
      return v / det;
    });
  });
}

function powerOf(X, k) {
  const d = dims(X);
  if (!isNumeric(X) || !d || d.r !== d.c || !(k >= 1)) return null;
  let acc = X;
  for (let i = 1; i < k; i++) acc = product(acc, X);
  return acc;
}

function traceOf(X) {
  const d = dims(X);
  if (!isNumeric(X) || !d || d.r !== d.c) return null;
  let s = 0;
  for (let i = 0; i < d.r; i++) s += X[i][i];
  return s;
}

function maxAbs(X) {
  let m = 0;
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < X[i].length; j++) {
      if (Math.abs(X[i][j]) > m) m = Math.abs(X[i][j]);
    }
  }
  return m;
}

/* ============================================================================
 * OPERATION MODEL
 * ==========================================================================*/
function isBinary(op) {
  return op === 'multiply' || op === 'add' || op === 'subtract';
}

function opGlyph(op) {
  if (op === 'multiply') return '\u00B7';
  if (op === 'add') return '+';
  if (op === 'subtract') return '\u2212';
  if (op === 'scalar') return '\u00B7';
  return '';
}

function defaultResultName(op, nameA, nameB) {
  if (op === 'multiply') return nameA + nameB;
  if (op === 'add') return nameA + ' + ' + nameB;
  if (op === 'subtract') return nameA + ' \u2212 ' + nameB;
  if (op === 'scalar') return 'k' + nameA;
  if (op === 'transpose') return nameA + '\u1D40';
  if (op === 'inverse') return nameA + '\u207B\u00B9';
  if (op === 'power') return nameA + '\u1D4F';
  return 'result';
}

function computeResult(op, A, B, k, powers) {
  if (op === 'multiply') return product(A, B);
  if (op === 'add') return combine(A, B, 1);
  if (op === 'subtract') return combine(A, B, -1);
  if (op === 'scalar') return scaleBy(A, k);
  if (op === 'transpose') return transposeOf(A);
  if (op === 'inverse') return inverseOf(A);
  if (op === 'power') return powerOf(A, powers || 2);
  return null;
}

/* Conformability, derived. Returns the verdict and the cells that explain it. */
function conformOf(op, A, B, powers) {
  const dA = dims(A);
  const dB = dims(B);

  if (op === 'multiply') {
    const ok = !!(dA && dB && dA.c === dB.r);
    const rev = dA && dB && dB.c === dA.r;
    return {
      ok: ok,
      resultShape: ok ? dA.r + '\u00D7' + dB.c : null,
      verdict: ok
        ? 'Conformable \u2014 the product is defined.'
        : 'Not conformable \u2014 the columns of the left operand must equal the rows of the right.',
      cells: [
        {
          dt: 'Outer dimensions',
          dd: dA && dB ? dA.r + '\u00D7' + dB.c : '\u2014',
          sm: 'survive into the result',
        },
        {
          dt: 'Inner dimensions',
          dd: dA && dB ? dA.c + (ok ? ' = ' : ' \u2260 ') + dB.r : '\u2014',
          sm: ok
            ? 'match, then vanish into the sum'
            : 'do not match \u2014 no entry has anything to sum over',
          hot: true,
          fail: !ok,
        },
        {
          dt: 'Reverse product',
          dd: rev ? dB.r + '\u00D7' + dA.c : 'undefined',
          sm: rev
            ? 'defined, and a different size'
            : 'conformability is a property of the ordered pair',
          hot: true,
        },
      ],
    };
  }

  if (op === 'add' || op === 'subtract') {
    const ok = !!(dA && dB && dA.r === dB.r && dA.c === dB.c);
    return {
      ok: ok,
      resultShape: ok ? shapeOf(A) : null,
      verdict: ok
        ? 'Same shape \u2014 the result is defined entrywise.'
        : 'Shapes differ \u2014 the result is undefined. There is no broadcasting here.',
      cells: [
        { dt: 'Left operand', dd: shapeOf(A) },
        { dt: 'Right operand', dd: shapeOf(B), fail: !ok },
        {
          dt: 'Requirement',
          dd: ok ? 'identical' : 'mismatch',
          hot: true,
          fail: !ok,
          sm: 'entrywise operations act on positions, so positions must correspond',
        },
      ],
    };
  }

  if (op === 'scalar') {
    return {
      ok: !!dA,
      resultShape: shapeOf(A),
      verdict: 'Always defined \u2014 scaling preserves shape.',
      cells: [
        { dt: 'Input', dd: shapeOf(A) },
        { dt: 'Output', dd: shapeOf(A), sm: 'unchanged' },
        { dt: 'Requirement', dd: 'none', sm: 'every matrix can be scaled' },
      ],
    };
  }

  if (op === 'transpose') {
    return {
      ok: !!dA,
      resultShape: dA ? dA.c + '\u00D7' + dA.r : null,
      verdict: 'Always defined \u2014 the transpose imposes no condition.',
      cells: [
        { dt: 'Input', dd: shapeOf(A) },
        {
          dt: 'Output',
          dd: dA ? dA.c + '\u00D7' + dA.r : '\u2014',
          hot: true,
          sm: 'the dimensions swap',
        },
        { dt: 'Requirement', dd: 'none', sm: 'defined for every matrix' },
      ],
    };
  }

  if (op === 'inverse' || op === 'power') {
    const square = !!(dA && dA.r === dA.c);
    const det = square ? detOf(A) : null;
    const cells = [
      { dt: 'Shape', dd: shapeOf(A), fail: !square },
      {
        dt: 'Square',
        dd: square ? 'yes' : 'no',
        hot: true,
        fail: !square,
        sm: 'both operands are the same matrix, so it must be',
      },
    ];
    if (op === 'inverse') {
      cells.push({
        dt: 'Determinant',
        dd: det === null ? '\u2014' : num(det),
        fail: det === 0,
        sm:
          det === 0
            ? 'zero \u2014 squareness alone was never enough'
            : 'non-zero, so the inverse exists',
      });
    } else {
      cells.push({
        dt: 'Exponent',
        dd: String(powers || 2),
        sm: 'a display parameter, not a property of the operand',
      });
    }
    return {
      ok: op === 'inverse' ? square && !!det : square,
      resultShape: square ? shapeOf(A) : null,
      verdict:
        op === 'inverse'
          ? square
            ? det
              ? 'Square and non-singular \u2014 the inverse exists.'
              : 'Square but singular \u2014 no inverse exists.'
            : 'Not square \u2014 no inverse exists, only a pseudoinverse.'
          : square
          ? 'Square \u2014 every power is defined.'
          : 'Not square \u2014 a matrix can only be multiplied by itself when it is.',
      cells: cells,
    };
  }

  return { ok: false, resultShape: null, verdict: null, cells: [] };
}

/* Operation counts, derived from shape alone. */
function costOf(op, A, B) {
  const dA = dims(A);
  const dB = dims(B);
  if (op === 'multiply' && dA && dB) {
    return {
      mult: dA.r * dA.c * dB.c,
      add: dA.r * (dA.c - 1) * dB.c,
      multNote: 'm \u00B7 n \u00B7 p \u2014 one per term of every entry',
      addNote: 'm(n\u22121)p \u2014 one fewer than the terms',
    };
  }
  if ((op === 'add' || op === 'subtract') && dA) {
    return {
      mult: 0,
      add: dA.r * dA.c,
      multNote: 'none \u2014 nothing is multiplied',
      addNote: 'one per position, and no position touches another',
    };
  }
  if (op === 'scalar' && dA) {
    return {
      mult: dA.r * dA.c,
      add: 0,
      multNote: 'one per entry',
      addNote: 'none',
    };
  }
  return null;
}

/* The expansion of a single entry of the result. */
function entryTerms(op, A, B, i, j) {
  if (op === 'multiply') {
    const parts = [];
    for (let k = 0; k < B.length; k++) {
      parts.push({ a: A[i][k], b: B[k][j], p: A[i][k] * B[k][j] });
    }
    return { mode: 'dot', parts: parts };
  }
  if (op === 'add') {
    return { mode: 'plus', parts: [{ a: A[i][j], b: B[i][j] }] };
  }
  if (op === 'subtract') {
    return { mode: 'minus', parts: [{ a: A[i][j], b: B[i][j] }] };
  }
  return null;
}

function slugify(s) {
  return String(s || 'matrix-operation')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

/* ============================================================================
 * RENDER HELPERS
 * ==========================================================================*/
function matrixNode(m, o) {
  const opts = o || {};
  const cols = m[0].length;
  const cells = [];
  let k = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < cols; j++) {
      let cls = 'mop-cell';
      let shown = num(m[i][j]);
      if (opts.filled != null && k >= opts.filled) {
        cls += ' is-void';
        shown = '\u00B7';
      } else if (opts.hit && opts.hit[0] === i && opts.hit[1] === j) {
        cls += ' is-hit';
      } else if (opts.filled != null) {
        cls += ' is-done';
      } else if (opts.row === i) {
        cls += ' is-row';
      } else if (opts.col === j) {
        cls += ' is-col';
      }
      if (opts.split != null && j === opts.split) cls += ' is-sep';
      cells.push(
        <span className={cls} key={i + '-' + j}>
          {shown}
        </span>
      );
      k++;
    }
  }
  return (
    <figure className="mop-fig">
      <div
        className="mop-mx"
        style={{ gridTemplateColumns: 'repeat(' + cols + ',auto)' }}
      >
        {cells}
      </div>
      {opts.label ? (
        <figcaption className="mop-cap">
          <b>{processContent(opts.label)}</b>
          {opts.hideShape ? null : ' \u00A0' + shapeOf(m)}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ghostNode(shapeText, label, lines) {
  return (
    <figure className="mop-fig">
      <div className="mop-mx is-ghost">
        <div className="mop-ghostfill">
          {lines.map(function (l, i) {
            return <div key={i}>{l}</div>;
          })}
        </div>
      </div>
      <figcaption className="mop-cap">
        <b>{processContent(label)}</b>
        {shapeText ? ' \u00A0' + shapeText : null}
      </figcaption>
    </figure>
  );
}

function chainNode(op, A, B, conform, names, gloss) {
  const dA = dims(A);
  const dB = dims(B);
  const fail = !conform.ok;

  const segs = [];

  segs.push(
    <span className="mop-dim" key="a">
      <span className="lbl">{processContent(names.a)}</span>
      <em className={op === 'multiply' ? 'out' : 'out'}>{dA ? dA.r : '?'}</em>
      <em>{'\u00D7'}</em>
      <em className={op === 'multiply' ? 'inn' : 'out'}>{dA ? dA.c : '?'}</em>
    </span>
  );

  if (isBinary(op) && dB) {
    segs.push(
      <span className="op" key="op">
        {opGlyph(op)}
      </span>
    );
    segs.push(
      <span className="mop-dim" key="b">
        <span className="lbl">{processContent(names.b)}</span>
        <em className={op === 'multiply' ? 'inn' : 'out'}>{dB.r}</em>
        <em>{'\u00D7'}</em>
        <em className="out">{dB.c}</em>
      </span>
    );
  }

  segs.push(
    <span className="arw" key="arw">
      {'\u2192'}
    </span>
  );

  segs.push(
    <span className="mop-dim" key="c">
      {conform.resultShape ? (
        <>
          <span className="lbl">{processContent(names.c)}</span>
          <em className="out">{conform.resultShape}</em>
        </>
      ) : (
        <em className="inn">undefined</em>
      )}
    </span>
  );

  const text =
    gloss ||
    (op === 'multiply'
      ? fail
        ? 'The inner pair disagrees, so no entry of a product has anything to sum over.'
        : 'The inner pair matches, then vanishes. Only the outer numbers survive into the result.'
      : fail
      ? 'The shapes do not correspond position by position.'
      : 'Shape is preserved, so the result sits in the same space as the operands.');

  return (
    <div className={'mop-chain' + (fail ? ' is-fail' : '')}>
      {segs}
      <span className="gloss">{processContent(text)}</span>
    </div>
  );
}

function railNode(cells) {
  if (!cells || cells.length === 0) return null;
  return (
    <dl className="mop-rail">
      {cells.map(function (c, i) {
        return (
          <div
            className={
              'mop-rc' + (c.hot ? ' is-hot' : '') + (c.fail ? ' is-fail' : '')
            }
            key={i}
          >
            <dt>{c.dt}</dt>
            <dd>
              {c.dd}
              {c.sm ? <small>{c.sm}</small> : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

function noteNode(label, text) {
  return (
    <div className="mop-note">
      <div className="mop-note-in">
        <b>{processContent(label || 'What the diagram shows')}</b>
        {text ? (
          <p>{processContent(text)}</p>
        ) : (
          <p className="mop-gap">note not written</p>
        )}
      </div>
    </div>
  );
}

function equationNode(op, terms, value, label) {
  if (!terms) return null;
  const bits = [];

  bits.push(
    <span className="lhs" key="lhs">
      {label}
    </span>
  );
  bits.push(
    <span className="sgn" key="eq0">
      =
    </span>
  );

  if (terms.mode === 'dot') {
    terms.parts.forEach(function (t, k) {
      if (k) {
        bits.push(
          <span className="sgn" key={'p' + k}>
            +
          </span>
        );
      }
      bits.push(
        <span className="mop-trm" key={'t' + k}>
          <span className="ta">{num(t.a)}</span>
          <span className="dot">{'\u00B7'}</span>
          <span className="tb">{num(t.b)}</span>
        </span>
      );
    });
    bits.push(
      <span className="sgn" key="eq1">
        =
      </span>
    );
    terms.parts.forEach(function (t, k) {
      if (k) {
        bits.push(
          <span className="sgn" key={'s' + k}>
            {t.p < 0 ? '\u2212' : '+'}
          </span>
        );
      }
      bits.push(
        <span key={'v' + k}>{k ? String(Math.abs(t.p)) : num(t.p)}</span>
      );
    });
  } else {
    const t = terms.parts[0];
    bits.push(
      <span className="mop-trm" key="t0">
        <span className="ta">{num(t.a)}</span>
      </span>
    );
    bits.push(
      <span className="sgn" key="mid">
        {terms.mode === 'minus' ? '\u2212' : '+'}
      </span>
    );
    bits.push(
      <span className="mop-trm" key="t1">
        <span className="tb">{num(t.b)}</span>
      </span>
    );
  }

  bits.push(
    <span className="sgn" key="eq2">
      =
    </span>
  );
  bits.push(
    <span className="res" key="res">
      {num(value)}
    </span>
  );

  return <div className="mop-eq">{bits}</div>;
}

function frameNode(op, A, B, R, i, j, index, key) {
  const cols = R[0].length;
  const terms = entryTerms(op, A, B, i, j);
  const line = [];
  if (terms && terms.mode === 'dot') {
    terms.parts.forEach(function (t, k) {
      if (k) line.push(<span key={'s' + k}> + </span>);
      line.push(
        <b key={'b' + k}>
          {'(' + num(t.a) + ')(' + num(t.b) + ')'}
        </b>
      );
    });
  } else if (terms) {
    line.push(
      <b key="b0">
        {num(terms.parts[0].a) +
          (terms.mode === 'minus' ? ' \u2212 ' : ' + ') +
          num(terms.parts[0].b)}
      </b>
    );
  }

  return (
    <div className="mop-frame" key={key}>
      <div className="fnum">
        {'entry ' + (i + 1) + ',' + (j + 1)}
      </div>
      {matrixNode(R, { filled: index + 1, hit: [i, j] })}
      <div className="feq">
        {op === 'multiply'
          ? 'row ' + (i + 1) + ' \u00B7 col ' + (j + 1)
          : 'position ' + (i + 1) + ',' + (j + 1)}
        <br />
        {line}
        <u>{'= ' + num(R[i][j])}</u>
      </div>
    </div>
  );
}

/* ============================================================================
 * COMPONENT
 * ==========================================================================*/
export default function MatrixOperation(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant =
    VARIANTS.indexOf(props.variant) >= 0 ? props.variant : 'anatomy';
  const maxWidth = props.maxWidth;

  const rootClass = 'mop-root mop-t-' + theme + ' mop-v-' + variant;
  const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

  if (!data || !isMatrix(data.A)) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        <div className="mop-empty">MatrixOperation: no operand supplied</div>
      </div>
    );
  }

  const op = data.operation || 'multiply';
  const A = data.A;
  const B = data.B;
  const k = data.scalar;
  const powers = data.powers || 3;

  const names = {
    a: data.nameA || 'A',
    b: data.nameB || 'B',
    c: data.nameC || defaultResultName(op, data.nameA || 'A', data.nameB || 'B'),
  };

  const supported = (SUPPORT[variant] || []).indexOf(op) >= 0;
  const conform = conformOf(op, A, B, powers);
  const R = supported ? computeResult(op, A, B, k, powers) : null;
  const cost = costOf(op, A, B);

  const symbolic =
    !isNumeric(A) || (isBinary(op) && B != null && !isNumeric(B));

  /* Gaps: load-bearing things that are missing, counted in the masthead. */
  const gaps = [];
  if (!data.intro) gaps.push('intro');
  if (!data.note) gaps.push('note');
  if (!data.anchor) gaps.push('anchor');
  if (!supported) gaps.push('variant');
  if (symbolic && variant !== 'conformability' && variant !== 'strip') {
    gaps.push('symbolic operands');
  }

  const uid =
    'mop-' + slugify(props.id || data.title || names.c) + '-over';

  /* ------------------------------------------------------------------
   * strip — no masthead, no rail, one line
   * ----------------------------------------------------------------*/
  if (variant === 'strip') {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {matrixNode(A, {})}
        {isBinary(op) && isMatrix(B) ? (
          <>
            <span className="mop-glyph">{opGlyph(op)}</span>
            {matrixNode(B, {})}
          </>
        ) : null}
        <span className="mop-glyph">=</span>
        {R ? (
          matrixNode(R, {})
        ) : (
          <span className="mop-gap">
            {conform.resultShape ? 'not integral' : 'undefined'}
          </span>
        )}
        <span className="say">
          {data.intro ? (
            processContent(data.intro)
          ) : (
            <span className="mop-gap">intro not written</span>
          )}
        </span>
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * masthead, shared by every other variant
   * ----------------------------------------------------------------*/
  const tally =
    variant === 'iterate'
      ? { n: powers, label: 'powers' }
      : R
      ? { n: R.length * R[0].length, label: data.tallyLabel || 'entries' }
      : null;

  const mast = (
    <div className="mop-mast">
      {tally ? (
        <div className="mop-tally">
          <b>{tally.n}</b>
          <i>{processContent(tally.label)}</i>
          {gaps.length ? <u>{gaps.length + ' gap' + (gaps.length > 1 ? 's' : '')}</u> : null}
        </div>
      ) : null}
      {data.kicker ? (
        <div className="mop-kick">{processContent(data.kicker)}</div>
      ) : null}
      {data.title ? (
        <h3 className="mop-ttl">{processContent(data.title)}</h3>
      ) : null}
      {data.intro ? (
        <p className="mop-intro">{processContent(data.intro)}</p>
      ) : (
        <p className="mop-intro mop-gap">intro not written</p>
      )}
      {data.anchor ? (
        <a className="mop-anchor" href={data.anchor}>
          {data.anchorLabel || '\u00A7 ' + data.anchor.replace('#', '')}
        </a>
      ) : null}
    </div>
  );

  const foot = data.footnote ? (
    <div className="mop-foot">{processContent(data.footnote)}</div>
  ) : null;

  /* ------------------------------------------------------------------
   * unsupported pairing — say so rather than degrade
   * ----------------------------------------------------------------*/
  if (!supported) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {mast}
        <div className="mop-empty">
          {'MatrixOperation: the ' +
            variant +
            ' variant has nothing to say about ' +
            op +
            '. Supported here: ' +
            (SUPPORT[variant] || []).join(', ') +
            '.'}
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * conformability — the shape check is the whole content
   * ----------------------------------------------------------------*/
  if (variant === 'conformability') {
    const extra = conform.cells.slice();
    if (op === 'multiply' && !conform.ok) {
      const dA = dims(A);
      extra.push({
        dt: 'What would fix it',
        dd: 'right operand ' + dA.c + '\u00D7p',
        hot: true,
        sm: 'any width \u2014 only the row count is constrained',
      });
    }
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {mast}
        {chainNode(op, A, B, conform, names, data.gloss)}
        <div className="mop-stage">
          {matrixNode(A, { label: names.a })}
          {isBinary(op) && isMatrix(B) ? (
            <>
              <span className="mop-glyph">{opGlyph(op)}</span>
              {matrixNode(B, { label: names.b })}
            </>
          ) : null}
          <span className="mop-glyph">=</span>
          {conform.ok && R
            ? matrixNode(R, { label: names.c })
            : ghostNode(conform.resultShape, names.c, [
                'no entry',
                'to form',
              ])}
        </div>
        <div className="mop-verd">
          <span className={'mop-badge ' + (conform.ok ? 'is-ok' : 'is-no')}>
            {conform.ok ? 'Defined' : 'Undefined'}
          </span>
          <span className="t">{processContent(conform.verdict)}</span>
        </div>
        {railNode(extra)}
        {noteNode(data.noteLabel, data.note)}
        {foot}
      </div>
    );
  }

  /* Everything below needs a result. */
  if (!R) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {mast}
        {chainNode(op, A, B, conform, names, data.gloss)}
        <div className="mop-empty">
          {symbolic
            ? 'MatrixOperation: symbolic entries. Only the conformability and strip variants read shape alone.'
            : conform.ok
            ? 'MatrixOperation: the result is not integral, and this component does not do rational arithmetic.'
            : 'MatrixOperation: the operation is undefined on these operands \u2014 use the conformability variant.'}
        </div>
        {foot}
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * iterate — the same operation reapplied
   * ----------------------------------------------------------------*/
  if (variant === 'iterate') {
    const states = [];
    for (let p = 1; p <= powers; p++) states.push(powerOf(A, p));

    const dets = states.map(function (s) {
      return num(detOf(s));
    });
    const traces = states.map(function (s) {
      return num(traceOf(s));
    });
    const peaks = states.map(function (s) {
      return String(maxAbs(s));
    });

    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {mast}
        <div className="mop-iter">
          {states.map(function (s, p) {
            return (
              <React.Fragment key={p}>
                {p ? (
                  <div className="mop-arw">
                    <b>{'\u2192'}</b>
                    <em>{'\u00B7 ' + names.a}</em>
                  </div>
                ) : null}
                {matrixNode(s, {
                  label: p === 0 ? names.a : names.a + '^' + (p + 1),
                  hideShape: true,
                })}
              </React.Fragment>
            );
          })}
        </div>
        {railNode([
          {
            dt: 'Determinant',
            dd: dets.join(', '),
            hot: true,
            sm: 'det(A\u1D4F) = (det A)\u1D4F',
          },
          {
            dt: 'Trace',
            dd: traces.join(', '),
            sm: 'grows, and by a fixed recurrence',
          },
          {
            dt: 'Largest entry',
            dd: peaks.join(', '),
            sm: 'the growth the trace conceals',
          },
        ])}
        {noteNode(data.noteLabel, data.note)}
        {foot}
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * pair — AB against BA
   * ----------------------------------------------------------------*/
  if (variant === 'pair') {
    const AB = product(A, B);
    const BA = product(B, A);
    const dA = dims(A);
    const dB = dims(B);
    const bothSquare = AB && BA && AB.length === BA.length;

    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {mast}
        <div className="mop-pair">
          <div className="mop-pane">
            <h4>{processContent(names.a + ' \u00B7 ' + names.b)}</h4>
            <div className="shp">
              {shapeOf(A) + ' \u00B7 ' + shapeOf(B) + ' \u2192 ' + shapeOf(AB)}
            </div>
            {AB ? matrixNode(AB, {}) : <span className="mop-gap">undefined</span>}
          </div>
          <div className="mop-pane">
            <h4>{processContent(names.b + ' \u00B7 ' + names.a)}</h4>
            <div className="shp">
              {BA
                ? shapeOf(B) + ' \u00B7 ' + shapeOf(A) + ' \u2192 ' + shapeOf(BA)
                : 'not conformable'}
            </div>
            {BA ? matrixNode(BA, {}) : <span className="mop-gap">undefined</span>}
          </div>
        </div>
        <div className="mop-verd">
          <span className="mop-badge is-no">Order matters</span>
          <span className="t">
            {BA
              ? bothSquare
                ? 'Both products are square and the same size, so the entries can be compared \u2014 and they differ.'
                : 'Different shapes, so the two products differ before a single entry is compared.'
              : 'Only one order is even defined on these operands.'}
          </span>
        </div>
        {railNode([
          {
            dt: 'Both defined when',
            dd: 'm\u00D7n and n\u00D7m',
            sm: 'otherwise only one order conforms',
          },
          {
            dt: 'Same size when',
            dd: dA && dB && dA.r === dB.c ? 'here, yes' : 'm = n',
            hot: true,
            sm: 'and only then can the entries be compared at all',
          },
          {
            dt: 'Shared invariant',
            dd:
              AB && BA
                ? 'tr = ' + num(traceOf(AB)) + ', ' + num(traceOf(BA))
                : 'tr(AB) = tr(BA)',
            sm: 'equal even when the products are not',
          },
        ])}
        {noteNode(data.noteLabel, data.note)}
        {foot}
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * shared head for anatomy / ledger / fill
   * ----------------------------------------------------------------*/
  const feature = Array.isArray(data.feature) ? data.feature : [0, 0];
  const fi = Math.min(feature[0], R.length - 1);
  const fj = Math.min(feature[1], R[0].length - 1);

  const head = (
    <>
      {mast}
      {chainNode(op, A, B, conform, names, data.gloss)}
      <div className="mop-stage">
        {matrixNode(A, {
          label: names.a,
          row: variant === 'anatomy' ? fi : undefined,
        })}
        {isBinary(op) && isMatrix(B) ? (
          <>
            <span className="mop-glyph">{opGlyph(op)}</span>
            {matrixNode(B, {
              label: names.b,
              col: variant === 'anatomy' ? fj : undefined,
            })}
          </>
        ) : null}
        <span className="mop-glyph">=</span>
        {matrixNode(R, {
          label: names.c,
          hit: variant === 'anatomy' ? [fi, fj] : undefined,
        })}
      </div>
    </>
  );

  /* ------------------------------------------------------------------
   * anatomy — one entry, formed in full
   * ----------------------------------------------------------------*/
  if (variant === 'anatomy') {
    const terms = entryTerms(op, A, B, fi, fj);
    const dA = dims(A);
    const rev = product(B, A);

    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {head}
        <div className="mop-deriv">
          <div className="mop-deriv-h">How that entry was formed</div>
          {equationNode(
            op,
            terms,
            R[fi][fj],
            'c' + (fi + 1) + (fj + 1)
          )}
          <p className="mop-deriv-g">
            {'Row ' +
              (fi + 1) +
              ' of ' +
              names.a +
              ' pairs off against column ' +
              (fj + 1) +
              ' of ' +
              names.b +
              ', term by term, and the ' +
              dA.c +
              ' products are summed. The shared length ' +
              dA.c +
              ' is the inner dimension \u2014 it is consumed by the sum and does not appear in the answer.'}
          </p>
        </div>
        {railNode(
          cost
            ? [
                { dt: 'Multiplications', dd: String(cost.mult), sm: cost.multNote },
                { dt: 'Additions', dd: String(cost.add), sm: cost.addNote },
                {
                  dt: 'Reverse product',
                  dd: rev ? shapeOf(rev) : 'undefined',
                  hot: true,
                  sm: rev
                    ? 'defined here, and a different size'
                    : 'the other order does not conform',
                },
              ]
            : null
        )}
        {noteNode(data.noteLabel, data.note)}
        {foot}
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * ledger — every entry derived
   * ----------------------------------------------------------------*/
  if (variant === 'ledger') {
    const rows = [];
    let n = 0;
    for (let i = 0; i < R.length; i++) {
      for (let j = 0; j < R[0].length; j++) {
        const terms = entryTerms(op, A, B, i, j);
        const line = [];
        if (terms.mode === 'dot') {
          terms.parts.forEach(function (t, q) {
            if (q) line.push(<span key={'s' + q}> + </span>);
            line.push(
              <b key={'b' + q}>{'(' + num(t.a) + ')(' + num(t.b) + ')'}</b>
            );
          });
        } else {
          line.push(
            <b key="b0">
              {num(terms.parts[0].a) +
                (terms.mode === 'minus' ? ' \u2212 ' : ' + ') +
                num(terms.parts[0].b)}
            </b>
          );
        }
        rows.push(
          <div
            className={'mop-lrow' + (n % 2 ? ' is-alt' : '')}
            key={i + '-' + j}
          >
            <div className="mop-lk">{'c' + (i + 1) + (j + 1)}</div>
            <div className="mop-lt">{line}</div>
            <div className="mop-lv">{num(R[i][j])}</div>
          </div>
        );
        n++;
      }
    }

    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        {head}
        <div className="mop-ledger">{rows}</div>
        {noteNode(data.noteLabel, data.note)}
        {foot}
      </div>
    );
  }

  /* ------------------------------------------------------------------
   * fill — the result revealed entry by entry
   * ----------------------------------------------------------------*/
  const cols = R[0].length;
  const total = R.length * cols;
  const shown = [];
  const over = [];

  for (let idx = 0; idx < total; idx++) {
    const i = Math.floor(idx / cols);
    const j = idx % cols;
    const node = frameNode(op, A, B, R, i, j, idx, idx);
    if (idx < FILL_CAP) shown.push(node);
    else over.push(node);
  }

  return (
    <div className={rootClass} style={rootStyle}>
      <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
      {head}
      <div className="mop-frames">{shown}</div>
      {over.length ? (
        <>
          <input type="checkbox" id={uid} className="mop-toggle" />
          <div className="mop-over">{over}</div>
          <label htmlFor={uid} className="mop-more">
            {'+ ' + over.length + ' more ' + (over.length > 1 ? 'entries' : 'entry')}
          </label>
        </>
      ) : null}
      {noteNode(data.noteLabel, data.note)}
      {foot}
    </div>
  );
}

export { THEMES as MOP_THEMES, VARIANTS as MOP_VARIANTS, SUPPORT as MOP_SUPPORT };