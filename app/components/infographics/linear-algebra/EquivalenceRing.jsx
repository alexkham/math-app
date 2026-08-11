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

// /* Domain fills, expressed as theme tokens so a new theme needs no edits here. */
// const DOMAIN_STYLE = {
//   det:    { fill: 'var(--eqr-ink)',    text: 'var(--eqr-paper)' },
//   rank:   { fill: 'var(--eqr-accent)', text: 'var(--eqr-paper)' },
//   space:  { fill: 'var(--eqr-soft)',   text: 'var(--eqr-ink)' },
//   system: { fill: 'var(--eqr-paper)',  text: 'var(--eqr-ink)' },
// };

// const RING = { vb: 340, cx: 170, cy: 170, r: 126, node: 16 };

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.eqr-root.eqr-t-' + key + '{' +
//       '--eqr-paper:' + t.paper + ';--eqr-ink:' + t.ink + ';--eqr-muted:' + t.muted + ';' +
//       '--eqr-line:' + t.line + ';--eqr-accent:' + t.accent + ';--eqr-soft:' + t.soft + ';}';
//   });

//   css +=
//   '.eqr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--eqr-ink);background:var(--eqr-paper);}' +
//   '.eqr-root *,.eqr-root *::before,.eqr-root *::after{box-sizing:border-box;}' +
//   '.eqr-root a{color:var(--eqr-accent);text-underline-offset:2px;}' +

//   '.eqr-mast{background:var(--eqr-ink);color:var(--eqr-paper);padding:26px 32px 24px;' +
//   'position:relative;}' +
//   '.eqr-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
//   'background:var(--eqr-accent);}' +
//   '.eqr-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
//   'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
//   '.eqr-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
//   'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
//   '.eqr-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
//   '.eqr-tally{position:absolute;right:32px;top:24px;text-align:right;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
//   '.eqr-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
//   '.eqr-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

//   '.eqr-body{border:1px solid var(--eqr-line);border-top:none;padding:24px 30px;display:grid;' +
//   'grid-template-columns:minmax(260px,340px) 1fr;gap:32px;align-items:start;}' +

//   '.eqr-svg{width:100%;height:auto;display:block;}' +
//   '.eqr-nn{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;font-weight:800;}' +
//   '.eqr-hb{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:15px;' +
//   'fill:var(--eqr-ink);}' +
//   '.eqr-hs{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.12em;fill:var(--eqr-muted);}' +

//   '.eqr-list{list-style:none;margin:0;padding:0;counter-reset:eqs;' +
//   'border-top:2px solid var(--eqr-ink);}' +
//   '.eqr-list li{counter-increment:eqs;display:grid;grid-template-columns:30px 1fr auto;gap:13px;' +
//   'padding:12px 0;border-bottom:1px solid var(--eqr-line);align-items:baseline;}' +
//   '.eqr-list li::before{content:counter(eqs);' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;font-weight:800;' +
//   'color:var(--eqr-muted);}' +
//   '.eqr-st{font-size:14px;}' +
//   '.eqr-dm{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.11em;text-transform:uppercase;padding:3px 8px;white-space:nowrap;' +
//   'border:1px solid var(--eqr-line);}' +

//   '.eqr-bal{margin-top:22px;padding:14px 17px;border-left:3px solid var(--eqr-accent);' +
//   'background:var(--eqr-soft);font-size:13px;}' +
//   '.eqr-bal b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.13em;text-transform:uppercase;color:var(--eqr-accent);display:block;' +
//   'margin-bottom:7px;font-weight:800;}' +
//   '.eqr-bal.is-missing{border-left-style:dashed;color:var(--eqr-muted);font-style:italic;}' +
//   '.eqr-tallyrow{display:flex;gap:16px;flex-wrap:wrap;margin-top:11px;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;color:var(--eqr-ink);' +
//   'font-style:normal;}' +
//   '.eqr-tallyrow span{display:flex;align-items:center;gap:6px;}' +
//   '.eqr-tallyrow i{width:11px;height:11px;display:inline-block;' +
//   'border:1px solid var(--eqr-line);}' +

//   '.eqr-empty{border:1px dashed var(--eqr-line);padding:20px;text-align:center;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--eqr-muted);}' +

//   '@media (max-width:820px){.eqr-body{grid-template-columns:1fr;}}' +
//   '@media (max-width:640px){' +
//   '.eqr-mast{padding:22px 18px 20px;}.eqr-mast::after{left:18px;right:18px;}' +
//   '.eqr-title{font-size:22px;}' +
//   '.eqr-tally{position:static;text-align:left;margin-top:14px;}' +
//   '.eqr-body{padding:20px 16px;}' +
//   '.eqr-list li{grid-template-columns:24px 1fr;}' +
//   '.eqr-dm{grid-column:2;justify-self:start;margin-top:6px;}' +
//   '}';

//   return css;
// }

// const EQR_CSS = buildCss();

// /* ============================================================================
//  * HELPERS — geometry derived from the statement count
//  * ==========================================================================*/
// function ringPoints(n) {
//   const pts = [];
//   for (let i = 0; i < n; i++) {
//     const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
//     pts.push({
//       x: RING.cx + RING.r * Math.cos(a),
//       y: RING.cy + RING.r * Math.sin(a),
//     });
//   }
//   return pts;
// }

// /* Chords between non-adjacent nodes — the ring edge already joins neighbours. */
// function chordPairs(n) {
//   const out = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 2; j < n; j++) {
//       if (i === 0 && j === n - 1) continue;
//       out.push([i, j]);
//     }
//   }
//   return out;
// }

// function styleFor(domain) {
//   return DOMAIN_STYLE[domain] || DOMAIN_STYLE.system;
// }

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   data     – flat object
//  *   theme    – 'navy'
//  *   variant  – 'ring'
//  *
//  * data shape
//  *   {
//  *     kicker, title, intro, subject, balance,
//  *     statements: [{ text, domain }]     domain: 'det'|'rank'|'space'|'system'
//  *   }
//  *
//  * Node positions, chords and the domain tally are all computed from
//  * `statements`. Add an eleventh and the ring re-lays itself.
//  * ==========================================================================*/
// export default function EquivalenceRing(props) {
//   const data = props.data;
//   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
//   const variant = props.variant || 'ring';

//   const rootClass = 'eqr-root eqr-t-' + theme + ' eqr-v-' + variant;

//   if (!data || !data.statements || data.statements.length < 2) {
//     return (
//       <div className={rootClass}>
//         <style dangerouslySetInnerHTML={{ __html: EQR_CSS }} />
//         <div className="eqr-empty">EquivalenceRing: needs at least two statements</div>
//       </div>
//     );
//   }

//   const statements = data.statements;
//   const n = statements.length;
//   const pts = ringPoints(n);
//   const chords = chordPairs(n);
//   const missingBalance = !data.balance;

//   const counts = {};
//   statements.forEach(function (s) {
//     const d = s.domain || 'system';
//     counts[d] = (counts[d] || 0) + 1;
//   });

//   return (
//     <div className={rootClass}>
//       <style dangerouslySetInnerHTML={{ __html: EQR_CSS }} />

//       <div className="eqr-mast">
//         {data.kicker ? <div className="eqr-kicker">{data.kicker}</div> : null}
//         {data.title ? <h3 className="eqr-title">{data.title}</h3> : null}
//         {data.intro ? <p className="eqr-intro">{processContent(data.intro)}</p> : null}
//         <div className="eqr-tally">
//           <b>{n}</b>
//           <span>{data.tallyLabel || 'statements'}</span>
//         </div>
//       </div>

//       <div className="eqr-body">
//         <svg
//           className="eqr-svg"
//           viewBox={'0 0 ' + RING.vb + ' ' + RING.vb}
//           xmlns="http://www.w3.org/2000/svg"
//           role="img"
//         >
//           <circle
//             cx={RING.cx} cy={RING.cy} r={RING.r}
//             fill="none" stroke="var(--eqr-line)" strokeWidth="2"
//           />

//           {chords.map(function (c, i) {
//             return (
//               <line
//                 key={'ch-' + i}
//                 x1={pts[c[0]].x.toFixed(1)} y1={pts[c[0]].y.toFixed(1)}
//                 x2={pts[c[1]].x.toFixed(1)} y2={pts[c[1]].y.toFixed(1)}
//                 stroke="var(--eqr-line)" strokeWidth="1" opacity="0.55"
//               />
//             );
//           })}

//           {data.subject ? (
//             <>
//               <text className="eqr-hb" x={RING.cx} y={RING.cy - 6} textAnchor="middle">
//                 {data.subject}
//               </text>
//               <text className="eqr-hs" x={RING.cx} y={RING.cy + 14} textAnchor="middle">
//                 ALL EQUIVALENT
//               </text>
//             </>
//           ) : null}

//           {pts.map(function (p, i) {
//             const st = styleFor(statements[i].domain);
//             return (
//               <React.Fragment key={'nd-' + i}>
//                 <circle
//                   cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r={RING.node}
//                   fill={st.fill} stroke="var(--eqr-ink)" strokeWidth="2"
//                 />
//                 <text
//                   className="eqr-nn"
//                   x={p.x.toFixed(1)} y={p.y.toFixed(1)}
//                   textAnchor="middle" dominantBaseline="central"
//                   fill={st.text}
//                 >
//                   {i + 1}
//                 </text>
//               </React.Fragment>
//             );
//           })}
//         </svg>

//         <div>
//           <ol className="eqr-list">
//             {statements.map(function (s, i) {
//               const st = styleFor(s.domain);
//               return (
//                 <li key={i}>
//                   <span className="eqr-st">{processContent(s.text)}</span>
//                   <span
//                     className="eqr-dm"
//                     style={{ background: st.fill, color: st.text }}
//                   >
//                     {s.domain || 'system'}
//                   </span>
//                 </li>
//               );
//             })}
//           </ol>

//           <div className={'eqr-bal' + (missingBalance ? ' is-missing' : '')}>
//             <b>{data.balanceLabel || 'What the tagging exposes'}</b>
//             {missingBalance
//               ? 'Not stated. Tagging the statements by domain only pays off if someone reads the distribution back \u2014 otherwise the colours are decoration.'
//               : processContent(data.balance)}
//             <div className="eqr-tallyrow">
//               {Object.keys(counts).map(function (k) {
//                 const st = styleFor(k);
//                 return (
//                   <span key={k}>
//                     <i style={{ background: st.fill }} />
//                     {k + ' \u00D7' + counts[k]}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { THEMES as EQR_THEMES };



import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * THEMES — navy only.
 * ==========================================================================*/
const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
  },
};

const DEFAULT_THEME = 'navy';

/* Domain fills, expressed as theme tokens so a new theme needs no edits here. */
const DOMAIN_STYLE = {
  det:    { fill: 'var(--eqr-ink)',    text: 'var(--eqr-paper)' },
  rank:   { fill: 'var(--eqr-accent)', text: 'var(--eqr-paper)' },
  space:  { fill: 'var(--eqr-soft)',   text: 'var(--eqr-ink)' },
  system: { fill: 'var(--eqr-paper)',  text: 'var(--eqr-ink)' },
};

const RING = { vb: 340, cx: 170, cy: 170, r: 126, node: 16 };

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.eqr-root.eqr-t-' + key + '{' +
      '--eqr-paper:' + t.paper + ';--eqr-ink:' + t.ink + ';--eqr-muted:' + t.muted + ';' +
      '--eqr-line:' + t.line + ';--eqr-accent:' + t.accent + ';--eqr-soft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root: capped width, own vertical rhythm ---------- */
  '.eqr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--eqr-ink);background:var(--eqr-paper);' +
  'max-width:860px;margin:28px auto;}' +
  '.eqr-root *,.eqr-root *::before,.eqr-root *::after{box-sizing:border-box;}' +
  '.eqr-root a{color:var(--eqr-accent);text-underline-offset:2px;}' +

  /* ---------- masthead ---------- */
  '.eqr-mast{background:var(--eqr-ink);color:var(--eqr-paper);padding:22px 26px 20px;' +
  'position:relative;}' +
  '.eqr-mast::after{content:\'\';position:absolute;left:26px;right:26px;bottom:0;height:3px;' +
  'background:var(--eqr-accent);}' +
  '.eqr-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.eqr-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:24px;' +
  'letter-spacing:-.03em;margin:7px 0 0;line-height:1.06;}' +
  '.eqr-intro{font-size:13px;margin:9px 0 0;max-width:520px;opacity:.74;}' +
  '.eqr-tally{position:absolute;right:26px;top:20px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.eqr-tally b{display:block;font-size:28px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.eqr-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  /* ---------- body ---------- */
  '.eqr-body{border:1px solid var(--eqr-line);border-top:none;padding:20px 26px;display:grid;' +
  'grid-template-columns:minmax(210px,270px) 1fr;gap:26px;align-items:start;}' +

  '.eqr-svg{width:100%;height:auto;display:block;}' +
  '.eqr-nn{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;font-weight:800;}' +
  '.eqr-hb{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:15px;' +
  'fill:var(--eqr-ink);}' +
  '.eqr-hs{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.12em;fill:var(--eqr-muted);}' +

  /* ---------- statement list ---------- */
  '.eqr-list{list-style:none;margin:0;padding:0;counter-reset:eqs;' +
  'border-top:2px solid var(--eqr-ink);}' +
  '.eqr-list li{counter-increment:eqs;display:grid;grid-template-columns:24px 1fr auto;gap:11px;' +
  'padding:8px 0;border-bottom:1px solid var(--eqr-line);align-items:baseline;}' +
  '.eqr-list li::before{content:counter(eqs);' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;font-weight:800;' +
  'color:var(--eqr-muted);}' +
  '.eqr-st{font-size:13px;}' +
  '.eqr-dm{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.11em;text-transform:uppercase;padding:3px 8px;white-space:nowrap;' +
  'border:1px solid var(--eqr-line);}' +

  /* ---------- balance note ---------- */
  '.eqr-bal{margin-top:18px;padding:13px 16px;border-left:3px solid var(--eqr-accent);' +
  'background:var(--eqr-soft);font-size:12.5px;}' +
  '.eqr-bal b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--eqr-accent);display:block;' +
  'margin-bottom:7px;font-weight:800;}' +
  '.eqr-bal.is-missing{border-left-style:dashed;color:var(--eqr-muted);font-style:italic;}' +
  '.eqr-tallyrow{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10.5px;color:var(--eqr-ink);' +
  'font-style:normal;}' +
  '.eqr-tallyrow span{display:flex;align-items:center;gap:6px;}' +
  '.eqr-tallyrow i{width:11px;height:11px;display:inline-block;' +
  'border:1px solid var(--eqr-line);}' +

  '.eqr-empty{border:1px dashed var(--eqr-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--eqr-muted);}' +

  /* ---------- responsive ---------- */
  '@media (max-width:820px){' +
  '.eqr-body{grid-template-columns:1fr;gap:22px;}' +
  '.eqr-svg{max-width:320px;margin:0 auto;}' +
  '}' +
  '@media (max-width:640px){' +
  '.eqr-root{margin:20px auto;}' +
  '.eqr-mast{padding:20px 16px 18px;}.eqr-mast::after{left:16px;right:16px;}' +
  '.eqr-title{font-size:21px;}' +
  '.eqr-tally{position:static;text-align:left;margin-top:12px;}' +
  '.eqr-tally b{font-size:24px;}' +
  '.eqr-body{padding:18px 16px;}' +
  '.eqr-list li{grid-template-columns:22px 1fr;padding:9px 0;}' +
  '.eqr-dm{grid-column:2;justify-self:start;margin-top:5px;}' +
  '}';

  return css;
}

const EQR_CSS = buildCss();

/* ============================================================================
 * HELPERS — geometry derived from the statement count
 * ==========================================================================*/
function ringPoints(n) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    pts.push({
      x: RING.cx + RING.r * Math.cos(a),
      y: RING.cy + RING.r * Math.sin(a),
    });
  }
  return pts;
}

/* Chords between non-adjacent nodes — the ring edge already joins neighbours. */
function chordPairs(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      out.push([i, j]);
    }
  }
  return out;
}

function styleFor(domain) {
  return DOMAIN_STYLE[domain] || DOMAIN_STYLE.system;
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'ring'
 *
 * data shape
 *   {
 *     kicker, title, intro, subject, balance, balanceLabel, tallyLabel,
 *     statements: [{ text, domain }]     domain: 'det'|'rank'|'space'|'system'
 *   }
 *
 * Node positions, chords and the domain tally are all computed from
 * `statements`. Add an eleventh and the ring re-lays itself.
 * ==========================================================================*/
export default function EquivalenceRing(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'ring';

  const rootClass = 'eqr-root eqr-t-' + theme + ' eqr-v-' + variant;

  if (!data || !data.statements || data.statements.length < 2) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: EQR_CSS }} />
        <div className="eqr-empty">EquivalenceRing: needs at least two statements</div>
      </div>
    );
  }

  const statements = data.statements;
  const n = statements.length;
  const pts = ringPoints(n);
  const chords = chordPairs(n);
  const missingBalance = !data.balance;

  const counts = {};
  statements.forEach(function (s) {
    const d = s.domain || 'system';
    counts[d] = (counts[d] || 0) + 1;
  });

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: EQR_CSS }} />

      <div className="eqr-mast">
        {data.kicker ? <div className="eqr-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="eqr-title">{data.title}</h3> : null}
        {data.intro ? <p className="eqr-intro">{processContent(data.intro)}</p> : null}
        <div className="eqr-tally">
          <b>{n}</b>
          <span>{data.tallyLabel || 'statements'}</span>
        </div>
      </div>

      <div className="eqr-body">
        <svg
          className="eqr-svg"
          viewBox={'0 0 ' + RING.vb + ' ' + RING.vb}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <circle
            cx={RING.cx} cy={RING.cy} r={RING.r}
            fill="none" stroke="var(--eqr-line)" strokeWidth="2"
          />

          {chords.map(function (c, i) {
            return (
              <line
                key={'ch-' + i}
                x1={pts[c[0]].x.toFixed(1)} y1={pts[c[0]].y.toFixed(1)}
                x2={pts[c[1]].x.toFixed(1)} y2={pts[c[1]].y.toFixed(1)}
                stroke="var(--eqr-line)" strokeWidth="1" opacity="0.55"
              />
            );
          })}

          {data.subject ? (
            <>
              <text className="eqr-hb" x={RING.cx} y={RING.cy - 6} textAnchor="middle">
                {data.subject}
              </text>
              <text className="eqr-hs" x={RING.cx} y={RING.cy + 14} textAnchor="middle">
                ALL EQUIVALENT
              </text>
            </>
          ) : null}

          {pts.map(function (p, i) {
            const st = styleFor(statements[i].domain);
            return (
              <React.Fragment key={'nd-' + i}>
                <circle
                  cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r={RING.node}
                  fill={st.fill} stroke="var(--eqr-ink)" strokeWidth="2"
                />
                <text
                  className="eqr-nn"
                  x={p.x.toFixed(1)} y={p.y.toFixed(1)}
                  textAnchor="middle" dominantBaseline="central"
                  fill={st.text}
                >
                  {i + 1}
                </text>
              </React.Fragment>
            );
          })}
        </svg>

        <div>
          <ol className="eqr-list">
            {statements.map(function (s, i) {
              const st = styleFor(s.domain);
              return (
                <li key={i}>
                  <span className="eqr-st">{processContent(s.text)}</span>
                  <span
                    className="eqr-dm"
                    style={{ background: st.fill, color: st.text }}
                  >
                    {s.domain || 'system'}
                  </span>
                </li>
              );
            })}
          </ol>

          <div className={'eqr-bal' + (missingBalance ? ' is-missing' : '')}>
            <b>{data.balanceLabel || 'What the tagging exposes'}</b>
            {missingBalance
              ? 'Not stated. Tagging the statements by domain only pays off if someone reads the distribution back \u2014 otherwise the colours are decoration.'
              : processContent(data.balance)}
            <div className="eqr-tallyrow">
              {Object.keys(counts).map(function (k) {
                const st = styleFor(k);
                return (
                  <span key={k}>
                    <i style={{ background: st.fill }} />
                    {k + ' \u00D7' + counts[k]}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { THEMES as EQR_THEMES };