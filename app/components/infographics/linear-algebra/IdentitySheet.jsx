// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// /* ============================================================================
//  * THEMES — navy only.
//  * ==========================================================================*/
// const THEMES = {
//   navy: {
//     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
//     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
//   },
// };

// const DEFAULT_THEME = 'navy';

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.ids-root.ids-t-' + key + '{' +
//       '--ids-paper:' + t.paper + ';--ids-ink:' + t.ink + ';--ids-muted:' + t.muted + ';' +
//       '--ids-line:' + t.line + ';--ids-accent:' + t.accent + ';--ids-soft:' + t.soft + ';}';
//   });

//   css +=
//   '.ids-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--ids-ink);background:var(--ids-paper);}' +
//   '.ids-root *,.ids-root *::before,.ids-root *::after{box-sizing:border-box;}' +
//   '.ids-root a{color:var(--ids-accent);text-underline-offset:2px;}' +

//   '.ids-mast{background:var(--ids-ink);color:var(--ids-paper);padding:26px 32px 24px;' +
//   'position:relative;}' +
//   '.ids-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
//   'background:var(--ids-accent);}' +
//   '.ids-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
//   'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
//   '.ids-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
//   'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
//   '.ids-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
//   '.ids-tally{position:absolute;right:32px;top:24px;text-align:right;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
//   '.ids-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
//   '.ids-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

//   /* ---------- variant: columns ---------- */
//   '.ids-cols{border:1px solid var(--ids-line);border-top:none;padding:22px 30px 26px;' +
//   'columns:2;column-gap:34px;}' +
//   '.ids-root.ids-v-single .ids-cols{columns:1;}' +
//   '.ids-grp{break-inside:avoid;margin-bottom:24px;}' +
//   '.ids-gh{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
//   'letter-spacing:.15em;text-transform:uppercase;color:var(--ids-paper);background:var(--ids-ink);' +
//   'padding:5px 11px;}' +
//   '.ids-line{display:grid;grid-template-columns:1fr 122px;gap:14px;align-items:baseline;' +
//   'padding:9px 11px;border-bottom:1px solid var(--ids-line);}' +
//   '.ids-line:nth-child(even){background:var(--ids-soft);}' +
//   '.ids-f{font-size:14px;}' +
//   '.ids-c{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
//   'letter-spacing:.03em;color:var(--ids-muted);text-align:right;line-height:1.35;}' +
//   '.ids-c.is-strict{color:var(--ids-accent);font-weight:800;}' +
//   '.ids-c.is-missing{color:var(--ids-accent);font-style:italic;}' +

//   '.ids-note{border:1px solid var(--ids-line);border-top:none;padding:16px 32px;font-size:13.5px;}' +
//   '.ids-note-in{border-left:3px solid var(--ids-accent);background:var(--ids-soft);' +
//   'padding:14px 17px;}' +
//   '.ids-note b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.13em;text-transform:uppercase;color:var(--ids-accent);display:block;' +
//   'margin-bottom:7px;font-weight:800;}' +

//   '.ids-empty{border:1px dashed var(--ids-line);padding:20px;text-align:center;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--ids-muted);}' +

//   '@media (max-width:820px){.ids-cols{columns:1;}}' +
//   '@media (max-width:640px){' +
//   '.ids-mast{padding:22px 18px 20px;}.ids-mast::after{left:18px;right:18px;}' +
//   '.ids-title{font-size:22px;}' +
//   '.ids-tally{position:static;text-align:left;margin-top:14px;}' +
//   '.ids-cols{padding:20px 16px;}' +
//   '.ids-line{grid-template-columns:1fr;gap:5px;}' +
//   '.ids-c{text-align:left;}' +
//   '.ids-note{padding:14px 18px;}' +
//   '}';

//   return css;
// }

// const IDS_CSS = buildCss();

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   data     – flat object
//  *   theme    – 'navy'
//  *   variant  – 'columns' | 'single'
//  *
//  * data shape
//  *   {
//  *     kicker, title, intro, note, noteLabel,
//  *     groups: [{
//  *       heading,
//  *       identities: [{ formula, condition, strict }]
//  *     }]
//  *   }
//  *
//  * `strict: true` marks a condition that is easy to violate without noticing.
//  * A line with no condition renders "unconditional?" in accent — an unqualified
//  * identity on a reference sheet is a claim nobody checked.
//  * ==========================================================================*/
// export default function IdentitySheet(props) {
//   const data = props.data;
//   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
//   const variant = props.variant || 'columns';

//   const rootClass = 'ids-root ids-t-' + theme + ' ids-v-' + variant;

//   if (!data || !data.groups || data.groups.length === 0) {
//     return (
//       <div className={rootClass}>
//         <style dangerouslySetInnerHTML={{ __html: IDS_CSS }} />
//         <div className="ids-empty">IdentitySheet: no groups supplied</div>
//       </div>
//     );
//   }

//   let total = 0;
//   let unconditioned = 0;
//   data.groups.forEach(function (g) {
//     (g.identities || []).forEach(function (x) {
//       total += 1;
//       if (!x.condition) unconditioned += 1;
//     });
//   });

//   return (
//     <div className={rootClass}>
//       <style dangerouslySetInnerHTML={{ __html: IDS_CSS }} />

//       <div className="ids-mast">
//         {data.kicker ? <div className="ids-kicker">{data.kicker}</div> : null}
//         {data.title ? <h3 className="ids-title">{data.title}</h3> : null}
//         {data.intro ? <p className="ids-intro">{processContent(data.intro)}</p> : null}
//         <div className="ids-tally">
//           <b>{total}</b>
//           <span>{data.tallyLabel || 'entries'}</span>
//         </div>
//       </div>

//       <div className="ids-cols">
//         {data.groups.map(function (g, gi) {
//           return (
//             <div key={g.id || 'grp-' + gi} className="ids-grp">
//               <div className="ids-gh">{g.heading}</div>
//               {(g.identities || []).map(function (x, xi) {
//                 const missing = !x.condition;
//                 return (
//                   <div key={xi} className="ids-line">
//                     <span className="ids-f">{processContent(x.formula)}</span>
//                     <span
//                       className={
//                         'ids-c' +
//                         (x.strict ? ' is-strict' : '') +
//                         (missing ? ' is-missing' : '')
//                       }
//                     >
//                       {missing ? 'unconditional?' : processContent(x.condition)}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>

//       {data.note || unconditioned > 0 ? (
//         <div className="ids-note">
//           <div className="ids-note-in">
//             <b>{data.noteLabel || 'What the condition column is for'}</b>
//             {data.note
//               ? processContent(data.note)
//               : unconditioned +
//                 ' of ' + total +
//                 ' lines carry no condition. On a lookup surface an unqualified identity is a claim nobody checked \u2014 either the hypothesis is genuinely empty and should say so, or it is missing.'}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export { THEMES as IDS_THEMES };



import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * IdentitySheet
 *
 * For rows that are formulas with a hypothesis and no verdict — axioms,
 * identities, reference formulas. Where PropertyLawCard asks "does this hold?",
 * this asks "under what condition?". If every row would carry the same verdict,
 * this is the component and PropertyLawCard is not.
 *
 * Two variants, chosen by the page:
 *
 *   sheet   (default) — grouped, flowing across two columns. Bold group
 *                       headings, each formula on an accent rule. Densest;
 *                       the whole definition fits on one screen. Notes are cut
 *                       to a line and open from a bar beneath.
 *   ledger            — one column, numbered chips, notes visible. Least dense
 *                       and most readable. Use it where the entries get
 *                       referred to by number.
 *
 * Anchors. An entry with an `anchor` renders its name as a link to that page
 * section, with a chip naming the destination. Give `anchorLabel` when several
 * entries point at the same section — ten chips reading "§ 2" is noise, while
 * "Consequences", "Non-examples", "Scalar field" is not.
 *
 * Export. The generator sets `data-diagram-export` on the root, which forces
 * the sheet open, hides the expand bars and strips the link chrome — a printed
 * sheet has nothing to jump to. Expansion is a CSS class rather than React
 * state so the attribute can override it.
 * ==========================================================================*/

const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
  },
};

const DEFAULT_THEME = 'navy';

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.ids-root.ids-t-' + key + '{' +
      '--ids-paper:' + t.paper + ';--ids-ink:' + t.ink + ';--ids-muted:' + t.muted + ';' +
      '--ids-line:' + t.line + ';--ids-accent:' + t.accent + ';--ids-soft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root ---------- */
  '.ids-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--ids-ink);background:var(--ids-paper);max-width:880px;margin:28px auto;}' +
  '.ids-root *,.ids-root *::before,.ids-root *::after{box-sizing:border-box;}' +

  /* ---------- masthead ---------- */
  '.ids-mast{background:var(--ids-ink);color:var(--ids-paper);padding:20px 24px 18px;' +
  'position:relative;}' +
  '.ids-mast::after{content:\'\';position:absolute;left:24px;right:24px;bottom:0;height:3px;' +
  'background:var(--ids-accent);}' +
  '.ids-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.68;}' +
  '.ids-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:22px;' +
  'letter-spacing:-.03em;margin:6px 0 0;line-height:1.06;}' +
  '.ids-intro{font-size:12.5px;margin:8px 0 0;max-width:470px;opacity:.82;}' +
  '.ids-tally{position:absolute;right:24px;top:18px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.ids-tally b{display:block;font-size:26px;font-weight:800;line-height:1;' +
  'letter-spacing:-.04em;}' +
  '.ids-tally span{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.68;}' +

  /* ---------- anchor chip, shared by both variants ---------- */
  '.ids-nm a{color:var(--ids-accent);text-decoration:none;display:inline-flex;' +
  'align-items:center;gap:8px;border-bottom:2px solid var(--ids-accent);padding-bottom:2px;' +
  'transition:color .14s,border-color .14s,transform .16s;}' +
  '.ids-nm a:hover{color:var(--ids-ink);border-bottom-color:var(--ids-ink);' +
  'transform:translateX(3px);}' +
  '.ids-nm a:focus-visible{outline:2px solid var(--ids-accent);outline-offset:3px;}' +
  '.ids-go{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.1em;color:var(--ids-accent);background:transparent;' +
  'border:1.5px solid var(--ids-accent);padding:2px 6px;display:inline-flex;' +
  'align-items:center;gap:5px;white-space:nowrap;' +
  'transition:background .14s,color .14s,border-color .14s;}' +
  '.ids-go::after{content:\'\\2192\';font-size:9px;transition:transform .16s;}' +
  '.ids-nm a:hover .ids-go{background:var(--ids-ink);border-color:var(--ids-ink);' +
  'color:var(--ids-paper);}' +
  '.ids-nm a:hover .ids-go::after{transform:translateX(2px);}' +

  /* ==========================================================
   * VARIANT: sheet
   * Group headings from the reference-card layout, formulas on
   * an accent rule from the split layout.
   * ========================================================*/
  '.ids-cols{border:1px solid var(--ids-line);border-top:none;padding:20px 24px 24px;' +
  'columns:2;column-gap:30px;}' +
  '.ids-grp{break-inside:avoid;margin-bottom:22px;}' +
  '.ids-grp:last-child{margin-bottom:0;}' +
  '.ids-gh{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--ids-paper);' +
  'background:var(--ids-ink);padding:5px 11px;display:flex;align-items:center;gap:10px;}' +
  '.ids-gh span{margin-left:auto;opacity:.6;}' +

  '.ids-entry{border-bottom:1px solid var(--ids-line);}' +
  '.ids-entry:last-child{border-bottom:none;}' +
  '.ids-top{display:grid;grid-template-columns:22px 1fr;gap:10px;padding:10px 11px 9px;' +
  'align-items:baseline;}' +
  '.ids-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;color:var(--ids-muted);}' +
  '.ids-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:12.5px;' +
  'display:block;margin-bottom:5px;}' +

  /* the accent rule — the piece taken from the split layout */
  '.ids-f{font-size:13px;padding:2px 0 2px 11px;border-left:2px solid var(--ids-accent);' +
  'display:block;}' +
  '.ids-c{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
  'letter-spacing:.03em;color:var(--ids-muted);margin-top:5px;line-height:1.4;}' +
  '.ids-c.is-strict{color:var(--ids-accent);font-weight:800;}' +
  '.ids-c.is-missing{color:var(--ids-accent);font-style:italic;}' +
  '.ids-ex{font-size:11px;color:var(--ids-muted);margin-top:5px;}' +
  '.ids-entry.is-open .ids-ex{display:none;}' +

  '.ids-body{display:none;padding:0 11px 9px 43px;}' +
  '.ids-entry.is-open .ids-body{display:block;}' +
  '.ids-body p{margin:0;font-size:11.5px;color:var(--ids-muted);}' +

  '.ids-more{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;' +
  'padding:5px 11px 7px;background:none;border:0;border-top:1px dotted var(--ids-line);' +
  'cursor:pointer;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--ids-muted);' +
  'transition:background .12s,color .12s;}' +
  '.ids-more:hover{background:var(--ids-soft);color:var(--ids-accent);}' +
  '.ids-more:focus-visible{outline:2px solid var(--ids-accent);outline-offset:-2px;}' +
  '.ids-entry.is-open .ids-more{background:var(--ids-soft);}' +
  '.ids-entry.is-static .ids-more{display:none;}' +

  '.ids-chev{display:block;width:22px;height:7px;flex:0 0 22px;overflow:visible;' +
  'transition:transform .22s cubic-bezier(.4,0,.2,1);}' +
  '.ids-chev path{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;}' +
  '.ids-entry.is-open .ids-chev{transform:rotate(180deg);}' +
  '.ids-more-less{display:none;}' +
  '.ids-entry.is-open .ids-more-more{display:none;}' +
  '.ids-entry.is-open .ids-more-less{display:inline;}' +

  /* ==========================================================
   * VARIANT: ledger
   * ========================================================*/
  '.ids-wrap{border:1px solid var(--ids-line);border-top:none;}' +
  '.ids-lgrp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--ids-muted);' +
  'background:var(--ids-soft);padding:7px 20px;border-bottom:1px solid var(--ids-line);' +
  'display:flex;align-items:center;gap:10px;}' +
  '.ids-lgrp span{margin-left:auto;opacity:.6;}' +

  '.ids-row{display:grid;grid-template-columns:34px 210px 1fr;gap:16px;padding:13px 20px;' +
  'border-bottom:1px solid var(--ids-line);align-items:baseline;}' +
  '.ids-row:last-child{border-bottom:none;}' +
  '.ids-ln{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'font-weight:800;color:var(--ids-paper);background:var(--ids-ink);width:24px;height:24px;' +
  'display:flex;align-items:center;justify-content:center;}' +
  '.ids-row.is-key .ids-ln{background:var(--ids-accent);}' +
  '.ids-lnm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:13.5px;}' +
  '.ids-lreq{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'color:var(--ids-muted);margin-top:5px;letter-spacing:.04em;line-height:1.4;}' +
  '.ids-lreq.is-strict{color:var(--ids-accent);font-weight:800;}' +
  '.ids-lf{font-size:14px;}' +
  '.ids-lnote{font-size:11.5px;color:var(--ids-muted);margin-top:7px;max-width:440px;}' +

  /* ---------- footnote ---------- */
  '.ids-foot{border:1px solid var(--ids-line);border-top:none;padding:13px 24px;' +
  'font-size:12.5px;color:var(--ids-muted);}' +

  '.ids-empty{border:1px dashed var(--ids-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--ids-muted);}' +

  /* ==========================================================
   * export state
   * ========================================================*/
  '.ids-root[data-diagram-export] .ids-body{display:block !important;padding-bottom:9px;}' +
  '.ids-root[data-diagram-export] .ids-ex{display:none !important;}' +
  '.ids-root[data-diagram-export] .ids-more{display:none !important;}' +
  '.ids-root[data-diagram-export] .ids-go{display:none !important;}' +
  '.ids-root[data-diagram-export] .ids-nm a{color:var(--ids-ink) !important;' +
  'border-bottom:none !important;padding-bottom:0 !important;}' +

  /* ---------- responsive ---------- */
  '@media (max-width:820px){.ids-cols{columns:1;}}' +
  '@media (max-width:640px){' +
  '.ids-root{margin:20px auto;}' +
  '.ids-mast{padding:18px 16px 16px;}.ids-mast::after{left:16px;right:16px;}' +
  '.ids-title{font-size:19px;}' +
  '.ids-tally{position:static;text-align:left;margin-top:12px;}' +
  '.ids-cols{padding:16px;}' +
  '.ids-row{grid-template-columns:28px 1fr;gap:12px;padding:12px 16px;}' +
  '.ids-row > :last-child{grid-column:2;}' +
  '.ids-foot{padding:12px 16px;}' +
  '}';

  return css;
}

const IDS_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/

/* '#4' → '§ 4'. A non-numeric anchor keeps its own words, so
 * '#non-examples' reads as written. */
function anchorLabel(anchor, explicit) {
  if (explicit) return explicit;
  const raw = String(anchor).replace(/^#/, '');
  if (/^\d+$/.test(raw)) return '\u00A7 ' + raw;
  return raw.replace(/[-_]+/g, ' ');
}

function nameNode(entry) {
  if (!entry.name) return null;
  if (!entry.anchor) return entry.name;

  return (
    <a href={entry.anchor}>
      {entry.name}
      <span className="ids-go">{anchorLabel(entry.anchor, entry.anchorLabel)}</span>
    </a>
  );
}

/* TeX → prose, so an excerpt never carries raw commands. */
const TEX_SYMBOLS = [
  [/\\times/g, '\u00D7'], [/\\cdot/g, '\u00B7'], [/\\div/g, '\u00F7'],
  [/\\pm/g, '\u00B1'], [/\\neq/g, '\u2260'], [/\\leq/g, '\u2264'],
  [/\\geq/g, '\u2265'], [/\\approx/g, '\u2248'], [/\\equiv/g, '\u2261'],
  [/\\Rightarrow/g, '\u21D2'], [/\\rightarrow|\\to/g, '\u2192'],
  [/\\iff/g, '\u21D4'], [/\\in\b/g, '\u2208'], [/\\notin/g, '\u2209'],
  [/\\exists/g, '\u2203'], [/\\forall/g, '\u2200'],
  [/\\cup/g, '\u222A'], [/\\cap/g, '\u2229'],
  [/\\emptyset|\\varnothing/g, '\u2205'], [/\\infty/g, '\u221E'],
  [/\\sum/g, '\u2211'], [/\\prod/g, '\u220F'], [/\\sqrt/g, '\u221A'],
  [/\\perp/g, '\u22A5'], [/\\lambda/g, '\u03BB'], [/\\theta/g, '\u03B8'],
  [/\\mathbb\{R\}/g, '\u211D'], [/\\mathbb\{C\}/g, '\u2102'],
  [/\\mathbb\{Z\}/g, '\u2124'], [/\\mathbb\{N\}/g, '\u2115'],
  [/\\operatorname\{([^}]*)\}/g, '$1'], [/\\text\{([^}]*)\}/g, '$1'],
  [/\\mathbf\{([^}]*)\}/g, '$1'], [/\\mathsf\{([^}]*)\}/g, '$1'],
  [/\\mathrm\{([^}]*)\}/g, '$1'], [/\\vec\{([^}]*)\}/g, '$1'],
  [/\\left|\\right/g, ''], [/\\,|\\;|\\!|\\quad|\\qquad/g, ' '],
];

function detex(tex) {
  let out = String(tex);
  TEX_SYMBOLS.forEach(function (pair) { out = out.replace(pair[0], pair[1]); });
  return out
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeExcerpt(note, limit) {
  if (!note) return '';

  const plain = String(note)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\$\$([\s\S]*?)\$\$/g, function (m, b) { return detex(b); })
    .replace(/\$([^$]*)\$/g, function (m, b) { return detex(b); })
    .replace(/[*`_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const stop = plain.search(/[.?!](\s|$)/);
  let out = stop !== -1 ? plain.slice(0, stop + 1) : plain;

  if (out.length > limit) {
    out = out.slice(0, limit);
    const space = out.lastIndexOf(' ');
    if (space > limit * 0.6) out = out.slice(0, space);
    out = out.replace(/[,;:\s]+$/, '') + '\u2026';
  }

  return out;
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data          – flat object
 *   theme         – 'navy'
 *   variant       – 'sheet' (default) | 'ledger'
 *   excerptLength – characters before truncation in the sheet, default 72
 *   maxWidth      – override the 880px default
 *
 * data shape
 *   {
 *     kicker, title, intro, footnote, tallyLabel,
 *     groups: [{
 *       heading,
 *       identities: [{
 *         name,                   // optional; carries the anchor when present
 *         formula,                // rich text
 *         condition,              // the hypothesis — the point of the sheet
 *         strict,                 // condition is easy to violate unnoticed
 *         key,                    // accent the number in the ledger variant
 *         anchor, anchorLabel,
 *         note,                   // rich text; excerpted in the sheet variant
 *       }]
 *     }]
 *   }
 *
 * An entry with no `condition` renders "unconditional?" in accent and is
 * counted — on a reference surface an unqualified identity is a claim nobody
 * checked.
 * ==========================================================================*/
export default function IdentitySheet(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant === 'ledger' ? 'ledger' : 'sheet';
  const excerptLength = props.excerptLength || 72;
  const maxWidth = props.maxWidth;

  const [openRows, setOpenRows] = React.useState({});

  const rootClass = 'ids-root ids-t-' + theme + ' ids-v-' + variant;
  const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

  if (!data || !data.groups || data.groups.length === 0) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: IDS_CSS }} />
        <div className="ids-empty">IdentitySheet: no groups supplied</div>
      </div>
    );
  }

  /* -- derive once; numbering runs across groups, not within them -- */
  let counter = 0;
  let unconditioned = 0;

  const groups = data.groups.map(function (g, gi) {
    const items = (g.identities || []).map(function (x, xi) {
      counter += 1;
      if (!x.condition) unconditioned += 1;

      const excerpt = x.excerpt || makeExcerpt(x.note, excerptLength);
      const noteLength = x.note ? String(x.note).length : 0;

      return {
        key: x.id || 'ids-' + gi + '-' + xi,
        raw: x,
        n: counter,
        excerpt: excerpt,
        missing: !x.condition,
        /* Nothing to open when the excerpt already carries the whole note. */
        isStatic: noteLength - excerpt.length < 40,
      };
    });

    return { key: g.id || 'grp-' + gi, heading: g.heading, items: items };
  });

  const total = counter;

  function toggleRow(key) {
    setOpenRows(function (prev) {
      const next = {};
      Object.keys(prev).forEach(function (k) { next[k] = prev[k]; });
      next[key] = !next[key];
      return next;
    });
  }

  const chevron = (
    <svg className="ids-chev" viewBox="0 0 22 7" aria-hidden="true">
      <path d="M1 1.4 C 5.5 1.4, 8 5.6, 11 5.6 C 14 5.6, 16.5 1.4, 21 1.4" />
    </svg>
  );

  const masthead = (
    <div className="ids-mast">
      {data.kicker ? <div className="ids-kicker">{data.kicker}</div> : null}
      {data.title ? <h3 className="ids-title">{data.title}</h3> : null}
      {data.intro ? <p className="ids-intro">{processContent(data.intro)}</p> : null}
      <div className="ids-tally">
        <b>{total}</b>
        <span>{data.tallyLabel || 'entries'}</span>
      </div>
    </div>
  );

  const footnote = data.footnote ? (
    <div className="ids-foot">{processContent(data.footnote)}</div>
  ) : unconditioned > 0 ? (
    <div className="ids-foot">
      {unconditioned + ' of ' + total +
        ' entries carry no condition. On a reference surface an unqualified ' +
        'identity is a claim nobody checked \u2014 either the hypothesis is ' +
        'genuinely empty and should say so, or it is missing.'}
    </div>
  ) : null;

  /* ---------------- sheet ---------------- */

  function renderSheet() {
    return (
      <div className="ids-cols">
        {groups.map(function (g) {
          return (
            <div key={g.key} className="ids-grp">
              <div className="ids-gh">
                {g.heading}
                <span>{g.items.length}</span>
              </div>

              {g.items.map(function (it) {
                const open = !!openRows[it.key];
                return (
                  <div
                    key={it.key}
                    className={
                      'ids-entry' +
                      (it.isStatic ? ' is-static' : '') +
                      (open ? ' is-open' : '')
                    }
                  >
                    <div className="ids-top">
                      <span className="ids-n">{it.n}</span>
                      <div>
                        {it.raw.name ? (
                          <span className="ids-nm">{nameNode(it.raw)}</span>
                        ) : null}
                        <span className="ids-f">{processContent(it.raw.formula)}</span>
                        <div
                          className={
                            'ids-c' +
                            (it.raw.strict ? ' is-strict' : '') +
                            (it.missing ? ' is-missing' : '')
                          }
                        >
                          {it.missing
                            ? 'unconditional?'
                            : processContent(it.raw.condition)}
                        </div>
                        {it.excerpt ? (
                          <div className="ids-ex">{it.excerpt}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="ids-body">
                      {it.raw.note ? <p>{processContent(it.raw.note)}</p> : null}
                    </div>

                    {it.isStatic ? null : (
                      <button
                        type="button"
                        className="ids-more"
                        onClick={function () { toggleRow(it.key); }}
                        aria-expanded={open}
                      >
                        <span className="ids-more-more">Read more</span>
                        <span className="ids-more-less">Show less</span>
                        {chevron}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  /* ---------------- ledger ---------------- */

  function renderLedger() {
    return (
      <div className="ids-wrap">
        {groups.map(function (g) {
          return (
            <React.Fragment key={g.key}>
              <div className="ids-lgrp">
                {g.heading}
                <span>{g.items.length}</span>
              </div>

              {g.items.map(function (it) {
                return (
                  <div
                    key={it.key}
                    className={'ids-row' + (it.raw.key ? ' is-key' : '')}
                  >
                    <span className="ids-ln">{it.n}</span>

                    <div>
                      {it.raw.name ? (
                        <div className="ids-lnm">
                          <span className="ids-nm">{nameNode(it.raw)}</span>
                        </div>
                      ) : null}
                      <div
                        className={
                          'ids-lreq' +
                          (it.raw.strict ? ' is-strict' : '') +
                          (it.missing ? ' is-missing' : '')
                        }
                      >
                        {it.missing
                          ? 'unconditional?'
                          : processContent(it.raw.condition)}
                      </div>
                    </div>

                    <div>
                      <div className="ids-lf">{processContent(it.raw.formula)}</div>
                      {it.raw.note ? (
                        <div className="ids-lnote">{processContent(it.raw.note)}</div>
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

  return (
    <div
      className={rootClass}
      style={rootStyle}
      data-unconditioned={unconditioned || undefined}
    >
      <style dangerouslySetInnerHTML={{ __html: IDS_CSS }} />
      {masthead}
      {variant === 'ledger' ? renderLedger() : renderSheet()}
      {footnote}
    </div>
  );
}

export { THEMES as IDS_THEMES };