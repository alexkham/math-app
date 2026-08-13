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

// /* Default slot set for matrix types. Overridable via data.slots. */
// const DEFAULT_SLOTS = [
//   { key: 'det',        label: 'det' },
//   { key: 'rank',       label: 'rank' },
//   { key: 'eigenvalues',label: 'eigen' },
//   { key: 'inverse',    label: 'inverse' },
//   { key: 'transpose',  label: 'transpose' },
//   { key: 'trace',      label: 'trace' },
// ];

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.otp-root.otp-t-' + key + '{' +
//       '--otp-paper:' + t.paper + ';--otp-ink:' + t.ink + ';--otp-muted:' + t.muted + ';' +
//       '--otp-line:' + t.line + ';--otp-accent:' + t.accent + ';--otp-soft:' + t.soft + ';}';
//   });

//   css +=
//   '.otp-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--otp-ink);background:var(--otp-paper);}' +
//   '.otp-root *,.otp-root *::before,.otp-root *::after{box-sizing:border-box;}' +
//   '.otp-root a{color:var(--otp-accent);text-underline-offset:2px;}' +

//   '.otp-mast{background:var(--otp-ink);color:var(--otp-paper);padding:26px 32px 24px;position:relative;}' +
//   '.otp-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
//   'background:var(--otp-accent);}' +
//   '.otp-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
//   'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
//   '.otp-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:29px;' +
//   'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
//   '.otp-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
//   '.otp-tally{position:absolute;right:32px;top:24px;text-align:right;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
//   '.otp-tally b{display:block;font-size:34px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
//   '.otp-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +
//   '.otp-tally.is-gap b{color:var(--otp-accent);}' +

//   /* ---------- variant: cards ---------- */
//   '.otp-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(258px,1fr));gap:14px;' +
//   'padding:22px 26px 26px;border:1px solid var(--otp-line);border-top:none;}' +
//   '.otp-card{border:1px solid var(--otp-line);display:flex;flex-direction:column;' +
//   'background:var(--otp-paper);}' +
//   '.otp-card-h{padding:14px 18px 11px;border-bottom:1px solid var(--otp-line);}' +
//   '.otp-name{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:16px;' +
//   'letter-spacing:-.015em;}' +
//   '.otp-cond{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
//   'color:var(--otp-accent);margin-top:5px;}' +
//   '.otp-example{padding:12px;background:var(--otp-soft);border-bottom:1px solid var(--otp-line);' +
//   'display:flex;align-items:center;justify-content:center;min-height:82px;}' +
//   '.otp-slots{padding:13px 18px;display:grid;grid-template-columns:auto 1fr;gap:6px 12px;' +
//   'align-items:baseline;margin:0;}' +
//   '.otp-slots dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.11em;text-transform:uppercase;color:var(--otp-muted);white-space:nowrap;}' +
//   '.otp-slots dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
//   'font-weight:500;}' +
//   '.otp-slots dd.is-gap{color:var(--otp-accent);font-weight:800;}' +
//   '.otp-slots dd.is-gap::after{content:\' \\2014 not stated\';font-weight:400;font-size:10px;' +
//   'letter-spacing:.05em;font-family:\'Inter\',sans-serif;}' +
//   '.otp-note{padding:11px 18px;border-top:1px solid var(--otp-line);font-size:12px;' +
//   'color:var(--otp-muted);}' +

//   /* ---------- variant: matrix ---------- */
//   '.otp-scroll{overflow-x:auto;border:1px solid var(--otp-line);border-top:none;}' +
//   '.otp-table{width:100%;border-collapse:collapse;font-size:13px;min-width:720px;}' +
//   '.otp-table thead th{background:var(--otp-ink);color:var(--otp-paper);text-align:left;' +
//   'padding:11px 13px;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
//   'letter-spacing:.12em;text-transform:uppercase;font-weight:800;}' +
//   '.otp-table thead th:first-child{background:var(--otp-accent);}' +
//   '.otp-table tbody th{text-align:left;padding:11px 13px;background:var(--otp-soft);' +
//   'border-bottom:1px solid var(--otp-line);font-family:\'Bricolage Grotesque\',sans-serif;' +
//   'font-weight:600;font-size:13px;white-space:nowrap;}' +
//   '.otp-table tbody td{padding:11px 13px;border-bottom:1px solid var(--otp-line);' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;}' +
//   '.otp-table tbody td.is-gap{color:var(--otp-accent);font-weight:800;background:var(--otp-soft);}' +

//   /* ---------- variant: stack ---------- */
//   '.otp-stack{border:1px solid var(--otp-line);border-top:none;}' +
//   '.otp-row{display:grid;grid-template-columns:200px 190px 1fr;gap:20px;' +
//   'border-bottom:1px solid var(--otp-line);align-items:center;padding:16px 26px;}' +
//   '.otp-row:last-child{border-bottom:none;}' +
//   '.otp-row-fig{display:flex;justify-content:center;}' +
//   '.otp-row-slots{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));gap:11px;' +
//   'margin:0;}' +
//   '.otp-row-slots dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
//   'letter-spacing:.14em;text-transform:uppercase;color:var(--otp-muted);margin-bottom:4px;}' +
//   '.otp-row-slots dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
//   'font-weight:600;}' +
//   '.otp-row-slots dd.is-gap{color:var(--otp-accent);}' +

//   /* ---------- legend + footnote ---------- */
//   '.otp-legend{border:1px solid var(--otp-line);border-top:none;padding:14px 32px;display:flex;' +
//   'gap:10px;align-items:center;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
//   'letter-spacing:.1em;text-transform:uppercase;color:var(--otp-muted);}' +
//   '.otp-legend i{width:14px;height:14px;background:var(--otp-soft);' +
//   'border:1px solid var(--otp-accent);display:inline-block;}' +
//   '.otp-foot{border:1px solid var(--otp-line);border-top:none;padding:15px 32px;font-size:13px;' +
//   'color:var(--otp-muted);}' +

//   '.otp-empty{border:1px dashed var(--otp-line);padding:20px;text-align:center;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--otp-muted);}' +

//   '@media (max-width:880px){.otp-row{grid-template-columns:1fr;gap:14px;}}' +
//   '@media (max-width:640px){' +
//   '.otp-mast{padding:22px 18px 20px;}.otp-mast::after{left:18px;right:18px;}' +
//   '.otp-title{font-size:23px;}' +
//   '.otp-tally{position:static;text-align:left;margin-top:14px;}' +
//   '.otp-cards{padding:18px;}.otp-legend,.otp-foot{padding:14px 18px;}' +
//   '.otp-row{padding:16px 18px;}' +
//   '}';

//   return css;
// }

// const OTP_CSS = buildCss();

// /* ============================================================================
//  * HELPERS
//  * ==========================================================================*/
// const GAP_TOKENS = ['', '-', '\u2014', 'n/a', 'N/A', null, undefined];

// function isGapValue(v) {
//   return GAP_TOKENS.indexOf(v) !== -1;
// }

// function resolveSlots(data) {
//   if (data.slots && data.slots.length > 0) {
//     return data.slots.map(function (s) {
//       return typeof s === 'string' ? { key: s, label: s } : s;
//     });
//   }
//   return DEFAULT_SLOTS;
// }

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   data     – { kicker, title, intro, footnote, slots?, types: [...] }
//  *   theme    – nine theme keys; default navy
//  *   variant  – 'cards' | 'matrix' | 'stack'
//  *
//  * type shape
//  *   { name, condition, note, example: [[...]], dimZero?, highlight?,
//  *     properties: { det, rank, eigenvalues, inverse, transpose, trace, ... } }
//  * ==========================================================================*/
// export default function ObjectTypeProfile(props) {
//   const data = props.data;
//   const theme = THEMES[props.theme] ? props.theme : 'navy';
//   const variant = props.variant || 'cards';

//   const rootClass = 'otp-root otp-t-' + theme + ' otp-v-' + variant;

//   if (!data || !data.types || data.types.length === 0) {
//     return (
//       <div className={rootClass}>
//         <style dangerouslySetInnerHTML={{ __html: OTP_CSS }} />
//         <div className="otp-empty">ObjectTypeProfile: no types supplied</div>
//       </div>
//     );
//   }

//   const slots = resolveSlots(data);

//   /* derive every cell once, marking gaps */
//   const types = data.types.map(function (t, i) {
//     const cells = slots.map(function (s) {
//       const raw = t.properties ? t.properties[s.key] : undefined;
//       return {
//         key: s.key,
//         label: s.label,
//         value: isGapValue(raw) ? '\u2014' : raw,
//         gap: isGapValue(raw),
//       };
//     });
//     return {
//       key: t.id || 'type-' + i,
//       raw: t,
//       cells: cells,
//       gapCount: cells.filter(function (c) { return c.gap; }).length,
//     };
//   });

//   const totalGaps = types.reduce(function (sum, t) { return sum + t.gapCount; }, 0);

//   function renderFigure(t, size) {
//     if (!t.raw.example) return null;
//     const highlights = [];
//     if (t.raw.highlight) {
//       highlights.push({ target: t.raw.highlight, role: 'rowA' });
//     }
//     return (
//       <MatrixScene
//         theme={theme}
//         cellSize={size || 'sm'}
//         spec={{
//           matrices: [{
//             data: t.raw.example,
//             dimZero: !!t.raw.dimZero,
//             highlights: highlights,
//           }],
//         }}
//       />
//     );
//   }

//   const masthead = (
//     <div className="otp-mast">
//       {data.kicker ? <div className="otp-kicker">{data.kicker}</div> : null}
//       {data.title ? <h3 className="otp-title">{data.title}</h3> : null}
//       {data.intro ? <p className="otp-intro">{processContent(data.intro)}</p> : null}
//       <div className={'otp-tally' + (totalGaps > 0 ? ' is-gap' : '')}>
//         <b>{totalGaps > 0 ? totalGaps : types.length}</b>
//         <span>{totalGaps > 0 ? 'unfilled slots' : 'types'}</span>
//       </div>
//     </div>
//   );

//   function renderCards() {
//     return (
//       <div className="otp-cards">
//         {types.map(function (t) {
//           return (
//             <div key={t.key} className="otp-card">
//               <div className="otp-card-h">
//                 <div className="otp-name">{t.raw.name}</div>
//                 {t.raw.condition ? (
//                   <div className="otp-cond">{processContent(t.raw.condition)}</div>
//                 ) : null}
//               </div>
//               {t.raw.example ? (
//                 <div className="otp-example">{renderFigure(t, 'sm')}</div>
//               ) : null}
//               <dl className="otp-slots">
//                 {t.cells.map(function (c) {
//                   return (
//                     <React.Fragment key={c.key}>
//                       <dt>{c.label}</dt>
//                       <dd className={c.gap ? 'is-gap' : ''}>
//                         {c.gap ? c.value : processContent(String(c.value))}
//                       </dd>
//                     </React.Fragment>
//                   );
//                 })}
//               </dl>
//               {t.raw.note ? <div className="otp-note">{processContent(t.raw.note)}</div> : null}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

//   function renderMatrix() {
//     return (
//       <div className="otp-scroll">
//         <table className="otp-table">
//           <thead>
//             <tr>
//               <th>Type</th>
//               {slots.map(function (s) { return <th key={s.key}>{s.label}</th>; })}
//             </tr>
//           </thead>
//           <tbody>
//             {types.map(function (t) {
//               return (
//                 <tr key={t.key}>
//                   <th>{t.raw.name}</th>
//                   {t.cells.map(function (c) {
//                     return (
//                       <td key={c.key} className={c.gap ? 'is-gap' : ''}>
//                         {c.gap ? c.value : processContent(String(c.value))}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   function renderStack() {
//     return (
//       <div className="otp-stack">
//         {types.map(function (t) {
//           return (
//             <div key={t.key} className="otp-row">
//               <div>
//                 <div className="otp-name">{t.raw.name}</div>
//                 {t.raw.condition ? (
//                   <div className="otp-cond">{processContent(t.raw.condition)}</div>
//                 ) : null}
//               </div>
//               <div className="otp-row-fig">{renderFigure(t, 'xs')}</div>
//               <dl className="otp-row-slots">
//                 {t.cells.map(function (c) {
//                   return (
//                     <div key={c.key}>
//                       <dt>{c.label}</dt>
//                       <dd className={c.gap ? 'is-gap' : ''}>
//                         {c.gap ? c.value : processContent(String(c.value))}
//                       </dd>
//                     </div>
//                   );
//                 })}
//               </dl>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

//   let body;
//   if (variant === 'matrix') body = renderMatrix();
//   else if (variant === 'stack') body = renderStack();
//   else body = renderCards();

//   return (
//     <div className={rootClass} data-gaps={totalGaps}>
//       <style dangerouslySetInnerHTML={{ __html: OTP_CSS }} />
//       {masthead}
//       {body}
//       {totalGaps > 0 ? (
//         <div className="otp-legend"><i /> slot the page never filled</div>
//       ) : null}
//       {data.footnote ? <div className="otp-foot">{processContent(data.footnote)}</div> : null}
//     </div>
//   );
// }

// export { THEMES as OTP_THEMES, DEFAULT_SLOTS };



import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * ObjectTypeProfile
 *
 * For rows that are objects with attributes — matrix types, distribution
 * families, anything where the same slots are filled for every entry. Where
 * PropertyLawCard asks "does this hold?" and IdentitySheet asks "under what
 * condition?", this asks "what is this thing, and what does it do in each
 * slot?".
 *
 * The distinguishing feature is that a **column** is worth reading. Which types
 * have determinant ±1, which have real eigenvalues — those questions are the
 * reason this is not a list of profiles, and they are why the `grid` variant
 * exists at all.
 *
 * Three variants, chosen by the page:
 *
 *   stack  (default) — one row per type, sketch left, slots inline, grouped.
 *                      The only variant with room for a note per type.
 *   grid             — types down, slots across. The audit view: gaps and
 *                      column patterns are visible at a glance.
 *   cards            — one panel per type, sketch reversed on an ink band.
 *                      Best when recognising the shape matters most.
 *
 * Colour. Navy by default and navy throughout: `groupAccents` is off unless the
 * data asks for it, in which case each group takes a hue from the palette. That
 * is opt-in because five hues on a page whose other diagrams are monochrome
 * reads as a different system rather than a grouped one.
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * THEMES
 *
 * `ink` is a real navy rather than a near-black with a blue cast, so the two
 * blues sit a usable distance apart and alternating bands actually separate.
 * -------------------------------------------------------------------------*/
const THEMES = {
  navy: {
    paper: '#f5f8fc', ink: '#13315c', muted: '#4a6285',
    line: '#c3d0e4', accent: '#2f6fb5', soft: '#e3ecf7',
  },
};

const DEFAULT_THEME = 'navy';

/* Optional per-group hues. Used only when `groupAccents` is on, and only on
 * group bands, row rails and sketch fills — never on body text. */
const GROUP_PALETTE = [
  { fam: '#2f6fb5', soft: '#e3ecf7' },   // blue
  { fam: '#0f7b6c', soft: '#dcefec' },   // teal
  { fam: '#8c3a1f', soft: '#f6e6e0' },   // rust
  { fam: '#6b3fa0', soft: '#ece4f6' },   // violet
  { fam: '#a8761c', soft: '#f7edda' },   // ochre
];

/* Default slots. A page may override with `data.slots`. */
const DEFAULT_SLOTS = [
  { key: 'det',         label: 'det' },
  { key: 'eigenvalues', label: 'eigenvalues' },
  { key: 'rank',        label: 'rank' },
  { key: 'inverse',     label: 'inverse' },
];

/* A property counts as missing when it is absent or a placeholder dash. */
const EMPTY_VALUES = ['', '-', '\u2014', '\u2013', 'n/a', 'N/A', 'none stated'];

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.otp-root.otp-t-' + key + '{' +
      '--otp-paper:' + t.paper + ';--otp-ink:' + t.ink + ';--otp-muted:' + t.muted + ';' +
      '--otp-line:' + t.line + ';--otp-accent:' + t.accent + ';--otp-soft:' + t.soft + ';' +
      /* fallbacks, overridden per group when groupAccents is on */
      '--otp-fam:' + t.accent + ';--otp-famSoft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root ---------- */
  '.otp-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--otp-ink);background:var(--otp-paper);max-width:960px;margin:28px auto;}' +
  '.otp-root *,.otp-root *::before,.otp-root *::after{box-sizing:border-box;}' +

  /* ---------- masthead ---------- */
  '.otp-mast{background:var(--otp-ink);color:var(--otp-paper);padding:20px 24px 18px;' +
  'position:relative;}' +
  '.otp-mast::after{content:\'\';position:absolute;left:24px;right:24px;bottom:0;height:3px;' +
  'background:var(--otp-accent);}' +
  '.otp-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.72;}' +
  '.otp-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:22px;' +
  'letter-spacing:-.03em;margin:6px 0 0;line-height:1.06;}' +
  '.otp-intro{font-size:12.5px;margin:8px 0 0;max-width:470px;opacity:.85;}' +
  '.otp-tally{position:absolute;right:24px;top:18px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.otp-tally b{display:block;font-size:26px;font-weight:800;line-height:1;' +
  'letter-spacing:-.04em;}' +
  '.otp-tally span{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.72;}' +
  '.otp-tally.is-gap b{color:var(--otp-accent);}' +

  /* ---------- anchor chip ---------- */
  '.otp-nm a{color:var(--otp-fam);text-decoration:none;display:inline-flex;align-items:center;' +
  'gap:8px;border-bottom:2px solid var(--otp-fam);padding-bottom:2px;' +
  'transition:color .14s,border-color .14s,transform .16s;}' +
  '.otp-nm a:hover{color:var(--otp-ink);border-bottom-color:var(--otp-ink);' +
  'transform:translateX(3px);}' +
  '.otp-nm a:focus-visible{outline:2px solid var(--otp-fam);outline-offset:3px;}' +
  '.otp-go{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.1em;color:var(--otp-fam);background:transparent;' +
  'border:1.5px solid var(--otp-fam);padding:2px 6px;display:inline-flex;align-items:center;' +
  'gap:5px;white-space:nowrap;transition:background .14s,color .14s,border-color .14s;}' +
  '.otp-go::after{content:\'\\2192\';font-size:9px;transition:transform .16s;}' +
  '.otp-nm a:hover .otp-go{background:var(--otp-ink);border-color:var(--otp-ink);' +
  'color:var(--otp-paper);}' +

  /* ---------- matrix sketch ---------- */
  '.otp-mx{display:inline-grid;gap:1px;background:var(--otp-line);' +
  'border:1.5px solid var(--otp-ink);padding:1px;vertical-align:middle;}' +
  '.otp-mx i{width:9px;height:9px;background:var(--otp-paper);display:block;}' +
  '.otp-mx i.on{background:var(--otp-fam);}' +
  '.otp-mx i.half{background:var(--otp-fam);opacity:.32;}' +
  '.otp-mx.is-lg i{width:14px;height:14px;}' +

  /* ==========================================================
   * VARIANT: stack
   * ========================================================*/
  '.otp-wrap{border:1px solid var(--otp-line);border-top:none;}' +
  '.otp-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:#fff;' +
  'background:var(--otp-fam);padding:8px 20px;display:flex;align-items:center;gap:10px;}' +
  '.otp-grp.is-alt{background:var(--otp-ink);}' +
  '.otp-grp span{margin-left:auto;opacity:.8;}' +

  '.otp-row{display:grid;grid-template-columns:70px 1fr;gap:18px;padding:14px 20px;' +
  'border-bottom:1px solid var(--otp-line);align-items:start;' +
  'border-left:4px solid var(--otp-fam);}' +
  '.otp-row.is-alt{border-left-color:var(--otp-ink);}' +
  '.otp-row:last-child{border-bottom:none;}' +
  '.otp-row:hover{background:var(--otp-famSoft);}' +
  '.otp-sk{display:flex;align-items:center;justify-content:center;padding-top:2px;}' +
  '.otp-top{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}' +
  '.otp-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;}' +
  '.otp-cond{font-size:12px;padding-left:11px;border-left:2px solid var(--otp-fam);}' +
  '.otp-slots{display:flex;gap:20px;flex-wrap:wrap;margin-top:9px;}' +
  '.otp-slot{font-size:11px;}' +
  '.otp-slot b{display:block;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--otp-muted);' +
  'font-weight:800;margin-bottom:3px;}' +
  '.otp-slot span{font-size:11.5px;font-weight:500;}' +
  '.otp-slot span.is-gap{color:var(--otp-accent);font-style:italic;}' +
  '.otp-note{font-size:11.5px;color:var(--otp-muted);margin-top:8px;max-width:560px;}' +

  /* ==========================================================
   * VARIANT: grid
   * ========================================================*/
  '.otp-scroll{border:1px solid var(--otp-line);border-top:none;overflow-x:auto;}' +
  '.otp-tbl{border-collapse:collapse;width:100%;font-size:12px;min-width:760px;}' +
  '.otp-tbl th{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--otp-paper);' +
  'background:var(--otp-ink);padding:10px;text-align:left;white-space:nowrap;}' +
  '.otp-tbl td{padding:10px;border-bottom:1px solid var(--otp-line);vertical-align:middle;}' +
  '.otp-tbl tr:last-child td{border-bottom:none;}' +
  '.otp-gband td{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.16em;text-transform:uppercase;padding:7px 10px;' +
  'background:var(--otp-fam);color:#fff;}' +
  '.otp-gband.is-alt td{background:var(--otp-ink);}' +
  '.otp-item td:first-child{border-left:4px solid var(--otp-fam);}' +
  '.otp-item.is-alt td:first-child{border-left-color:var(--otp-ink);}' +
  '.otp-item:hover td{background:var(--otp-famSoft);}' +
  '.otp-cell-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;' +
  'font-size:13px;display:flex;align-items:center;gap:10px;}' +
  '.otp-cell{font-size:11px;}' +
  '.otp-cell.is-gap{color:var(--otp-accent);font-style:italic;}' +

  /* ==========================================================
   * VARIANT: cards
   * ========================================================*/
  '.otp-cards{border:1px solid var(--otp-line);border-top:none;padding:18px 20px 20px;' +
  'display:grid;grid-template-columns:repeat(auto-fit,minmax(228px,1fr));gap:12px;}' +
  '.otp-card{border:1px solid var(--otp-line);background:var(--otp-paper);display:flex;' +
  'flex-direction:column;border-top:3px solid var(--otp-fam);}' +
  '.otp-card.is-alt{border-top-color:var(--otp-ink);}' +
  '.otp-card-h{padding:11px 13px 9px;display:flex;align-items:center;gap:9px;' +
  'justify-content:space-between;}' +
  '.otp-card-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;' +
  'font-size:13.5px;}' +
  /* the sketch reverses onto an ink band — the strongest contrast available */
  '.otp-card-sk{padding:16px;display:flex;align-items:center;justify-content:center;' +
  'background:var(--otp-ink);}' +
  '.otp-card-sk .otp-mx{border-color:var(--otp-paper);background:#2a4c7d;}' +
  '.otp-card-sk .otp-mx i{background:#1b3d6b;}' +
  '.otp-card-sk .otp-mx i.on{background:var(--otp-paper);}' +
  '.otp-card-sk .otp-mx i.half{background:var(--otp-paper);opacity:.38;}' +
  '.otp-card-cond{padding:10px 13px;font-size:11px;border-bottom:1px solid var(--otp-line);}' +
  '.otp-card-slots{margin:0;padding:9px 13px;display:grid;grid-template-columns:auto 1fr;' +
  'gap:4px 10px;font-size:11px;align-items:baseline;}' +
  '.otp-card-slots dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.12em;text-transform:uppercase;color:var(--otp-muted);white-space:nowrap;}' +
  '.otp-card-slots dd{margin:0;font-size:10.5px;}' +
  '.otp-card-slots dd.is-gap{color:var(--otp-accent);font-style:italic;}' +

  /* ---------- footnote ---------- */
  '.otp-foot{border:1px solid var(--otp-line);border-top:none;padding:13px 24px;' +
  'font-size:12.5px;color:var(--otp-muted);}' +

  '.otp-empty{border:1px dashed var(--otp-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
  'color:var(--otp-muted);}' +

  /* ==========================================================
   * export state
   * ========================================================*/
  '.otp-root[data-diagram-export] .otp-go{display:none !important;}' +
  '.otp-root[data-diagram-export] .otp-nm a{color:var(--otp-ink) !important;' +
  'border-bottom:none !important;padding-bottom:0 !important;}' +

  /* ---------- responsive ---------- */
  '@media (max-width:640px){' +
  '.otp-root{margin:20px auto;}' +
  '.otp-mast{padding:18px 16px 16px;}.otp-mast::after{left:16px;right:16px;}' +
  '.otp-title{font-size:19px;}' +
  '.otp-tally{position:static;text-align:left;margin-top:12px;}' +
  '.otp-row{grid-template-columns:1fr;gap:10px;padding:13px 16px;}' +
  '.otp-sk{justify-content:flex-start;}' +
  '.otp-cards{padding:16px;}' +
  '.otp-foot{padding:12px 16px;}' +
  '}';

  return css;
}

const OTP_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/

function isMissing(value) {
  if (value === null || value === undefined) return true;
  return EMPTY_VALUES.indexOf(String(value).trim()) !== -1;
}

function anchorLabel(anchor, explicit) {
  if (explicit) return explicit;
  const raw = String(anchor).replace(/^#/, '');
  if (/^\d+$/.test(raw)) return '\u00A7 ' + raw;
  return raw.replace(/[-_]+/g, ' ');
}

function nameNode(type) {
  const label = processContent(type.name);
  if (!type.anchor) return label;

  return (
    <a href={type.anchor}>
      {label}
      <span className="otp-go">{anchorLabel(type.anchor, type.anchorLabel)}</span>
    </a>
  );
}

/* ---------------------------------------------------------------------------
 * Sketch
 *
 * `shape` names a fill rule; the component draws an n×n grid from it. This is
 * deliberately not a full matrix renderer — the point is that a reader
 * recognises "upper triangular" from the silhouette, which a 4×4 sketch does
 * and a set of actual entries does not.
 * -------------------------------------------------------------------------*/
const SHAPES = {
  identity:    function (i, j) { return i === j ? 1 : 0; },
  diagonal:    function (i, j) { return i === j ? 1 : 0; },
  upper:       function (i, j) { return j >= i ? 1 : 0; },
  lower:       function (i, j) { return j <= i ? 1 : 0; },
  strictUpper: function (i, j) { return j > i ? 1 : 0; },
  strictLower: function (i, j) { return j < i ? 1 : 0; },
  symmetric:   function (i, j) { return Math.abs(i - j) <= 1 ? 1 : 0.5; },
  skew:        function (i, j) { return i === j ? 0 : (j > i ? 1 : 0.5); },
  orthogonal:  function (i, j) { return (i + j) % 2 === 0 ? 1 : 0; },
  antidiagonal:function (i, j, n) { return i === n - 1 - j ? 1 : 0; },
  permutation: function (i, j, n) { return j === (i + 1) % n ? 1 : 0; },
  dense:       function () { return 1; },
  block:       function (i, j) { return (i < 2 && j < 2) || (i >= 2 && j >= 2) ? 1 : 0; },
};

function Sketch(props) {
  const rule = SHAPES[props.shape];
  if (!rule) return null;

  const n = props.n || 4;
  const cells = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = rule(i, j, n);
      cells.push(
        <i key={i + '-' + j} className={v === 1 ? 'on' : v === 0.5 ? 'half' : ''} />
      );
    }
  }

  return (
    <span
      className={'otp-mx' + (props.large ? ' is-lg' : '')}
      style={{ gridTemplateColumns: 'repeat(' + n + ', auto)' }}
      aria-hidden="true"
    >
      {cells}
    </span>
  );
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data          – flat object
 *   theme         – 'navy'
 *   variant       – 'stack' (default) | 'grid' | 'cards'
 *   groupAccents  – give each group its own hue. Default false: navy
 *                   throughout, with groups separated by alternating ink and
 *                   accent bands instead.
 *   maxWidth      – override the 960px default
 *
 * data shape
 *   {
 *     kicker, title, intro, footnote, tallyLabel,
 *     slots: [{ key, label }],          // optional; defaults to det/eig/rank/inv
 *     groups: [{
 *       heading,
 *       accent,                          // optional hex, overrides the palette
 *       types: [{
 *         name, anchor, anchorLabel,
 *         condition,                     // the defining condition
 *         shape,                         // a key of SHAPES
 *         note,                          // shown in the stack variant only
 *         properties: { det, rank, eigenvalues, inverse, … }
 *       }]
 *     }]
 *   }
 *
 * A type may also be given without groups, as `data.types`, in which case one
 * unnamed group is created.
 *
 * A property that is missing or a placeholder dash renders "not stated" in
 * accent and is counted in the masthead — the profile audits its own content.
 * ==========================================================================*/
export default function ObjectTypeProfile(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant =
    props.variant === 'grid' || props.variant === 'cards' ? props.variant : 'stack';
  const groupAccents = !!props.groupAccents;
  const maxWidth = props.maxWidth;

  const rootClass = 'otp-root otp-t-' + theme + ' otp-v-' + variant;
  const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

  const hasGroups = data && data.groups && data.groups.length > 0;
  const hasTypes = data && data.types && data.types.length > 0;

  if (!hasGroups && !hasTypes) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: OTP_CSS }} />
        <div className="otp-empty">ObjectTypeProfile: no types supplied</div>
      </div>
    );
  }

  const slots = data.slots || DEFAULT_SLOTS;

  /* -- normalise to groups, and derive once -- */
  const rawGroups = hasGroups
    ? data.groups
    : [{ heading: null, types: data.types }];

  let total = 0;
  let missing = 0;

  const groups = rawGroups.map(function (g, gi) {
    const palette = GROUP_PALETTE[gi % GROUP_PALETTE.length];

    /* Colour resolution: an explicit `accent` on the group wins, then the
     * palette when groupAccents is on, then nothing — in which case the CSS
     * falls back to the theme accent and groups alternate ink instead. */
    let style;
    if (g.accent) {
      style = { '--otp-fam': g.accent, '--otp-famSoft': g.accentSoft || 'var(--otp-soft)' };
    } else if (groupAccents) {
      style = { '--otp-fam': palette.fam, '--otp-famSoft': palette.soft };
    }

    const types = (g.types || []).map(function (t, ti) {
      total += 1;
      const properties = t.properties || {};
      const cells = slots.map(function (s) {
        const value = properties[s.key];
        const gap = isMissing(value);
        if (gap) missing += 1;
        return { key: s.key, label: s.label, value: value, gap: gap };
      });

      return {
        key: t.id || 'otp-' + gi + '-' + ti,
        raw: t,
        cells: cells,
      };
    });

    return {
      key: g.id || 'grp-' + gi,
      heading: g.heading,
      style: style,
      /* Without per-group hues, consecutive groups alternate ink and accent so
       * they still separate. With hues that alternation would fight them. */
      alt: !groupAccents && !g.accent && gi % 2 === 1,
      types: types,
    };
  });

  const masthead = (
    <div className="otp-mast">
      {data.kicker ? (
        <div className="otp-kicker">{processContent(data.kicker)}</div>
      ) : null}
      {data.title ? (
        <h3 className="otp-title">{processContent(data.title)}</h3>
      ) : null}
      {data.intro ? (
        <p className="otp-intro">{processContent(data.intro)}</p>
      ) : null}
      <div className={'otp-tally' + (missing > 0 ? ' is-gap' : '')}>
        <b>{missing > 0 ? missing : total}</b>
        <span>{missing > 0 ? 'gaps' : data.tallyLabel || 'types'}</span>
      </div>
    </div>
  );

  const footnote = data.footnote ? (
    <div className="otp-foot">{processContent(data.footnote)}</div>
  ) : missing > 0 ? (
    <div className="otp-foot">
      {missing + ' of ' + total * slots.length +
        ' cells are unfilled. A profile with holes in it invites the reader to ' +
        'infer a value from the neighbouring rows, which is exactly the ' +
        'inference the table exists to prevent.'}
    </div>
  ) : null;

  /* ---------------- stack ---------------- */

  function renderStack() {
    return (
      <div className="otp-wrap">
        {groups.map(function (g) {
          return (
            <React.Fragment key={g.key}>
              {g.heading ? (
                <div
                  className={'otp-grp' + (g.alt ? ' is-alt' : '')}
                  style={g.style}
                >
                  {processContent(g.heading)}
                  <span>{g.types.length}</span>
                </div>
              ) : null}

              {g.types.map(function (t) {
                return (
                  <div
                    key={t.key}
                    className={'otp-row' + (g.alt ? ' is-alt' : '')}
                    style={g.style}
                  >
                    <div className="otp-sk">
                      <Sketch shape={t.raw.shape} n={t.raw.size} large />
                    </div>

                    <div>
                      <div className="otp-top">
                        <span className="otp-nm">{nameNode(t.raw)}</span>
                        {t.raw.condition ? (
                          <span className="otp-cond">
                            {processContent(t.raw.condition)}
                          </span>
                        ) : null}
                      </div>

                      <div className="otp-slots">
                        {t.cells.map(function (c) {
                          return (
                            <div key={c.key} className="otp-slot">
                              <b>{c.label}</b>
                              <span className={c.gap ? 'is-gap' : ''}>
                                {c.gap ? 'not stated' : processContent(c.value)}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {t.raw.note ? (
                        <div className="otp-note">{processContent(t.raw.note)}</div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  /* ---------------- grid ---------------- */

  function renderGrid() {
    return (
      <div className="otp-scroll">
        <table className="otp-tbl">
          <thead>
            <tr>
              <th>Type</th>
              <th>Condition</th>
              {slots.map(function (s) {
                return <th key={s.key}>{s.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {groups.map(function (g) {
              return (
                <React.Fragment key={g.key}>
                  {g.heading ? (
                    <tr
                      className={'otp-gband' + (g.alt ? ' is-alt' : '')}
                      style={g.style}
                    >
                      <td colSpan={slots.length + 2}>{processContent(g.heading)}</td>
                    </tr>
                  ) : null}

                  {g.types.map(function (t) {
                    return (
                      <tr
                        key={t.key}
                        className={'otp-item' + (g.alt ? ' is-alt' : '')}
                        style={g.style}
                      >
                        <td>
                          <span className="otp-cell-nm">
                            <Sketch shape={t.raw.shape} n={t.raw.size} />
                            <span className="otp-nm">{nameNode(t.raw)}</span>
                          </span>
                        </td>
                        <td>
                          <span className="otp-cell">
                            {t.raw.condition ? processContent(t.raw.condition) : null}
                          </span>
                        </td>
                        {t.cells.map(function (c) {
                          return (
                            <td key={c.key}>
                              <span className={'otp-cell' + (c.gap ? ' is-gap' : '')}>
                                {c.gap ? 'not stated' : processContent(c.value)}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  /* ---------------- cards ---------------- */

  function renderCards() {
    const flat = [];
    groups.forEach(function (g) {
      g.types.forEach(function (t) {
        flat.push({ group: g, type: t });
      });
    });

    return (
      <div className="otp-cards">
        {flat.map(function (entry) {
          const g = entry.group;
          const t = entry.type;
          return (
            <div
              key={t.key}
              className={'otp-card' + (g.alt ? ' is-alt' : '')}
              style={g.style}
            >
              <div className="otp-card-h">
                <span className="otp-card-nm otp-nm">{nameNode(t.raw)}</span>
              </div>

              <div className="otp-card-sk">
                <Sketch shape={t.raw.shape} n={t.raw.size} large />
              </div>

              {t.raw.condition ? (
                <div className="otp-card-cond">{processContent(t.raw.condition)}</div>
              ) : null}

              <dl className="otp-card-slots">
                {t.cells.map(function (c) {
                  return (
                    <React.Fragment key={c.key}>
                      <dt>{c.label}</dt>
                      <dd className={c.gap ? 'is-gap' : ''}>
                        {c.gap ? 'not stated' : processContent(c.value)}
                      </dd>
                    </React.Fragment>
                  );
                })}
              </dl>
            </div>
          );
        })}
      </div>
    );
  }

  let body;
  if (variant === 'grid') body = renderGrid();
  else if (variant === 'cards') body = renderCards();
  else body = renderStack();

  return (
    <div
      className={rootClass}
      style={rootStyle}
      data-missing-cells={missing || undefined}
    >
      <style dangerouslySetInnerHTML={{ __html: OTP_CSS }} />
      {masthead}
      {body}
      {footnote}
    </div>
  );
}

export { THEMES as OTP_THEMES, SHAPES, GROUP_PALETTE, DEFAULT_SLOTS };