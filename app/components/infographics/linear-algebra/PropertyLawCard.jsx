// // // import React from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // /* ============================================================================
// // //  * THEMES — six base tokens each. Navy is the default.
// // //  * ==========================================================================*/
// // // const THEMES = {
// // //   navy:       { paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478', line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5' },
// // //   terracotta: { paper: '#fffaf3', ink: '#2a1a14', muted: '#6b5848', line: '#e8d9c4', accent: '#c4543a', soft: '#fdf3e6' },
// // //   forest:     { paper: '#f6f3ea', ink: '#1a2a1f', muted: '#5a6b5a', line: '#d8dcc9', accent: '#3d6b4a', soft: '#eef2e0' },
// // //   burgundy:   { paper: '#faf4f4', ink: '#2a1418', muted: '#6b5258', line: '#e6d5d8', accent: '#7d2838', soft: '#f5e9ec' },
// // //   olive:      { paper: '#f9f6ea', ink: '#1f1f14', muted: '#5a5a4a', line: '#dcd6bc', accent: '#7a7a2a', soft: '#f0ecd4' },
// // //   ocean:      { paper: '#f0f7f7', ink: '#0f2228', muted: '#4a6168', line: '#cfe0e0', accent: '#1f7a82', soft: '#e0eded' },
// // //   mono:       { paper: '#ffffff', ink: '#000000', muted: '#666666', line: '#dddddd', accent: '#000000', soft: '#f4f4f4' },
// // //   plum:       { paper: '#f7f3f8', ink: '#1f1428', muted: '#5a4e6b', line: '#e0d6e4', accent: '#5a2d7a', soft: '#ede4f0' },
// // //   dark:       { paper: '#1a1a22', ink: '#f0ece0', muted: '#9a958a', line: '#2e2e3a', accent: '#ffb84a', soft: '#22222e' },
// // // };

// // // const VERDICT_LABELS = {
// // //   holds:       'Unconditional',
// // //   conditional: 'Conditional',
// // //   fails:       'Fails',
// // //   undefined:   'Undefined',
// // // };

// // // /* ============================================================================
// // //  * CSS
// // //  * ==========================================================================*/
// // // function buildCss() {
// // //   let css = '';

// // //   /* theme blocks */
// // //   Object.keys(THEMES).forEach(function (key) {
// // //     const t = THEMES[key];
// // //     css +=
// // //       '.plc-root.plc-t-' + key + '{' +
// // //       '--plc-paper:' + t.paper + ';' +
// // //       '--plc-ink:' + t.ink + ';' +
// // //       '--plc-muted:' + t.muted + ';' +
// // //       '--plc-line:' + t.line + ';' +
// // //       '--plc-accent:' + t.accent + ';' +
// // //       '--plc-soft:' + t.soft + ';}';
// // //   });

// // //   css +=
// // //   /* ---------- root ---------- */
// // //   '.plc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
// // //   'color:var(--plc-ink);background:var(--plc-paper);}' +
// // //   '.plc-root *,.plc-root *::before,.plc-root *::after{box-sizing:border-box;}' +
// // //   '.plc-root a{color:var(--plc-accent);text-underline-offset:2px;text-decoration-thickness:1px;}' +

// // //   /* ---------- masthead ---------- */
// // //   '.plc-mast{background:var(--plc-ink);color:var(--plc-paper);padding:26px 32px 24px;position:relative;}' +
// // //   '.plc-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
// // //   'background:var(--plc-accent);}' +
// // //   '.plc-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
// // //   'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
// // //   '.plc-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:29px;' +
// // //   'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
// // //   '.plc-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
// // //   '.plc-tally{position:absolute;right:32px;top:24px;text-align:right;' +
// // //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
// // //   '.plc-tally b{display:block;font-size:34px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
// // //   '.plc-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

// // //   /* ---------- verdict badge ---------- */
// // //   '.plc-badge{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
// // //   'letter-spacing:.15em;text-transform:uppercase;padding:5px 10px;white-space:nowrap;display:inline-block;}' +
// // //   '.plc-badge.v-holds{background:var(--plc-ink);color:var(--plc-paper);}' +
// // //   '.plc-badge.v-fails{background:var(--plc-accent);color:var(--plc-paper);}' +
// // //   '.plc-badge.v-conditional{background:transparent;color:var(--plc-ink);border:1px solid var(--plc-ink);}' +
// // //   '.plc-badge.v-undefined{background:var(--plc-soft);color:var(--plc-accent);' +
// // //   'border:1px dashed var(--plc-accent);}' +

// // //   /* ==========================================================
// // //    * VARIANT: plate
// // //    * ========================================================*/
// // //   '.plc-plates{border:1px solid var(--plc-line);border-top:none;}' +
// // //   '.plc-plate{display:grid;grid-template-columns:76px 1fr 268px;border-bottom:1px solid var(--plc-line);}' +
// // //   '.plc-plate:last-child{border-bottom:none;}' +
// // //   '.plc-idx{border-right:1px solid var(--plc-line);background:var(--plc-soft);display:flex;' +
// // //   'flex-direction:column;align-items:center;padding-top:26px;gap:10px;}' +
// // //   '.plc-idx-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:22px;font-weight:800;' +
// // //   'color:var(--plc-accent);letter-spacing:-.04em;line-height:1;}' +
// // //   '.plc-idx-r{writing-mode:vertical-rl;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
// // //   'font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--plc-muted);}' +
// // //   '.plc-plate.is-broken .plc-idx{background:var(--plc-accent);}' +
// // //   '.plc-plate.is-broken .plc-idx-n,.plc-plate.is-broken .plc-idx-r{color:var(--plc-paper);}' +
// // //   '.plc-face{padding:26px 30px;display:flex;flex-direction:column;gap:16px;}' +
// // //   '.plc-name{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:19px;' +
// // //   'letter-spacing:-.015em;}' +
// // //   '.plc-stmt{font-size:20px;padding:20px 0 20px 22px;border-left:3px solid var(--plc-accent);}' +
// // //   '.plc-plate.is-broken .plc-stmt{border-left-style:double;border-left-width:6px;}' +
// // //   '.plc-prose{font-size:13.5px;color:var(--plc-muted);max-width:520px;}' +
// // //   '.plc-prose p{margin:0 0 8px;}.plc-prose p:last-child{margin-bottom:0;}' +
// // //   '.plc-aside{border-left:1px solid var(--plc-line);background:var(--plc-soft);padding:24px 22px;' +
// // //   'display:flex;flex-direction:column;gap:18px;}' +
// // //   '.plc-aside .plc-badge{align-self:flex-start;}' +
// // //   '.plc-meta{display:grid;gap:13px;margin:0;}' +
// // //   '.plc-meta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
// // //   'letter-spacing:.16em;text-transform:uppercase;color:var(--plc-muted);margin-bottom:4px;}' +
// // //   '.plc-meta dd{margin:0;font-size:13px;}' +
// // //   '.plc-witness{margin-top:auto;border-top:2px solid var(--plc-accent);padding-top:14px;' +
// // //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;line-height:1.7;}' +
// // //   '.plc-witness b{display:block;font-size:8px;letter-spacing:.16em;text-transform:uppercase;' +
// // //   'color:var(--plc-accent);margin-bottom:8px;font-weight:800;}' +

// // //   /* ==========================================================
// // //    * VARIANT: docket
// // //    * ========================================================*/
// // //   '.plc-docket{border:1px solid var(--plc-line);border-top:none;padding:0 32px 28px;}' +
// // //   '.plc-group{padding-top:26px;margin-top:26px;border-top:1px solid var(--plc-line);}' +
// // //   '.plc-group:first-child{border-top:none;margin-top:0;}' +
// // //   '.plc-group-h{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
// // //   'letter-spacing:.2em;text-transform:uppercase;color:var(--plc-accent);margin-bottom:18px;' +
// // //   'display:flex;align-items:center;gap:14px;}' +
// // //   '.plc-group-h::after{content:\'\';flex:1;height:1px;background:var(--plc-line);}' +
// // //   '.plc-entry{display:grid;grid-template-columns:40px 1fr;gap:20px;padding:14px 0;' +
// // //   'border-bottom:1px dotted var(--plc-line);align-items:baseline;}' +
// // //   '.plc-entry:last-child{border-bottom:none;}' +
// // //   '.plc-hang{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;font-weight:800;' +
// // //   'color:var(--plc-muted);text-align:right;letter-spacing:-.02em;}' +
// // //   '.plc-entry.is-broken .plc-hang{color:var(--plc-accent);}' +
// // //   '.plc-body{display:grid;grid-template-columns:1fr 180px;gap:22px;align-items:baseline;}' +
// // //   '.plc-line{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}' +
// // //   '.plc-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14.5px;' +
// // //   'min-width:136px;}' +
// // //   '.plc-fx{font-size:16px;}' +
// // //   '.plc-cond{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
// // //   'letter-spacing:.05em;color:var(--plc-muted);text-align:right;line-height:1.5;}' +
// // //   '.plc-cond.is-hot{color:var(--plc-accent);font-weight:700;}' +
// // //   '.plc-drop{grid-column:2;margin-top:11px;padding:13px 16px;background:var(--plc-soft);' +
// // //   'border-left:3px solid var(--plc-accent);font-size:12.5px;}' +
// // //   '.plc-drop p{margin:0 0 7px;}.plc-drop p:last-child{margin-bottom:0;}' +

// // //   /* ==========================================================
// // //    * VARIANT: grid
// // //    * ========================================================*/
// // //   '.plc-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(262px,1fr));gap:14px;' +
// // //   'padding:22px 26px 26px;border:1px solid var(--plc-line);border-top:none;}' +
// // //   '.plc-card{border:1px solid var(--plc-line);display:flex;flex-direction:column;' +
// // //   'background:var(--plc-paper);}' +
// // //   '.plc-card.is-broken{border-color:var(--plc-accent);}' +
// // //   '.plc-card-h{display:flex;align-items:baseline;gap:9px;padding:14px 18px 12px;' +
// // //   'border-bottom:1px solid var(--plc-line);flex-wrap:wrap;}' +
// // //   '.plc-card-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
// // //   '.plc-card-fx{padding:22px 18px;flex:1;display:flex;align-items:center;justify-content:center;' +
// // //   'background:var(--plc-soft);font-size:15px;text-align:center;min-height:78px;}' +
// // //   '.plc-card.is-broken .plc-card-fx{background:var(--plc-paper);}' +
// // //   '.plc-strip{padding:12px 18px;border-top:1px solid var(--plc-line);display:grid;' +
// // //   'grid-template-columns:auto 1fr;gap:7px 12px;align-items:baseline;margin:0;}' +
// // //   '.plc-strip dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
// // //   'letter-spacing:.12em;text-transform:uppercase;color:var(--plc-muted);white-space:nowrap;}' +
// // //   '.plc-strip dd{margin:0;font-size:13px;}' +
// // //   '.plc-card-note{padding:11px 18px;font-size:12px;color:var(--plc-muted);' +
// // //   'border-top:1px solid var(--plc-line);}' +
// // //   '.plc-card-wit{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;' +
// // //   'padding:11px 18px;border-top:1px dashed var(--plc-accent);background:var(--plc-soft);' +
// // //   'line-height:1.65;}' +
// // //   '.plc-card-wit b{display:block;font-size:8px;letter-spacing:.14em;text-transform:uppercase;' +
// // //   'color:var(--plc-accent);margin-bottom:6px;font-weight:800;}' +

// // //   /* ==========================================================
// // //    * VARIANT: ledger
// // //    * ========================================================*/
// // //   '.plc-rows{border:1px solid var(--plc-line);border-top:none;padding:0 30px 24px;}' +
// // //   '.plc-row{display:grid;grid-template-columns:180px 1fr 140px;gap:20px;padding:16px 0;' +
// // //   'border-bottom:1px solid var(--plc-line);align-items:center;}' +
// // //   '.plc-row:last-child{border-bottom:none;}' +
// // //   '.plc-row.is-broken{background:var(--plc-soft);}' +
// // //   '.plc-row-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
// // //   '.plc-row-sub{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
// // //   'letter-spacing:.08em;text-transform:uppercase;color:var(--plc-muted);margin-top:3px;}' +
// // //   '.plc-row-fx{font-size:15px;}' +
// // //   '.plc-row-vd{text-align:right;}' +
// // //   '.plc-row-wit{grid-column:1 / -1;border-top:1px dashed var(--plc-accent);margin-top:12px;' +
// // //   'padding:11px 0 0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;' +
// // //   'line-height:1.65;}' +

// // //   /* ---------- footnote ---------- */
// // //   '.plc-foot{border:1px solid var(--plc-line);border-top:none;padding:15px 32px;' +
// // //   'font-size:13px;color:var(--plc-muted);}' +

// // //   /* ---------- fallback ---------- */
// // //   '.plc-empty{border:1px dashed var(--plc-line);padding:20px;text-align:center;' +
// // //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--plc-muted);}' +

// // //   /* ---------- responsive ---------- */
// // //   '@media (max-width:880px){' +
// // //   '.plc-plate{grid-template-columns:56px 1fr;}' +
// // //   '.plc-aside{grid-column:2;border-left:none;border-top:1px solid var(--plc-line);}' +
// // //   '.plc-body{grid-template-columns:1fr;}' +
// // //   '.plc-cond{text-align:left;}' +
// // //   '.plc-drop{grid-column:1;}' +
// // //   '.plc-row{grid-template-columns:1fr;gap:9px;}' +
// // //   '.plc-row-vd{text-align:left;}' +
// // //   '}' +
// // //   '@media (max-width:640px){' +
// // //   '.plc-mast{padding:22px 18px 20px;}' +
// // //   '.plc-mast::after{left:18px;right:18px;}' +
// // //   '.plc-title{font-size:23px;}' +
// // //   '.plc-tally{position:static;text-align:left;margin-top:14px;}' +
// // //   '.plc-face{padding:20px 18px;}' +
// // //   '.plc-aside{padding:18px;}' +
// // //   '.plc-docket{padding:0 18px 22px;}' +
// // //   '.plc-cards{padding:18px;}' +
// // //   '.plc-rows{padding:0 18px 20px;}' +
// // //   '.plc-foot{padding:14px 18px;}' +
// // //   '}';

// // //   return css;
// // // }

// // // const PLC_CSS = buildCss();

// // // /* ============================================================================
// // //  * INTERNAL HELPERS — all derivation happens here, never in the consuming page.
// // //  * ==========================================================================*/
// // // function normaliseVerdict(law) {
// // //   if (law.verdict) return law.verdict;
// // //   if (law.failsWhen || law.witness) return 'fails';
// // //   if (law.holdsWhen || law.requires) return 'conditional';
// // //   return 'holds';
// // // }

// // // function isBroken(verdict) {
// // //   return verdict === 'fails' || verdict === 'undefined';
// // // }

// // // function romanise(n) {
// // //   const map = [
// // //     [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i'],
// // //   ];
// // //   let out = '';
// // //   let rest = n;
// // //   for (let i = 0; i < map.length; i++) {
// // //     while (rest >= map[i][0]) {
// // //       out += map[i][1];
// // //       rest -= map[i][0];
// // //     }
// // //   }
// // //   return out;
// // // }

// // // function padIndex(n) {
// // //   return n < 10 ? '0' + n : String(n);
// // // }

// // // function witnessLines(witness) {
// // //   if (!witness) return null;
// // //   if (typeof witness === 'string') return { label: 'Witness', lines: [witness] };
// // //   return {
// // //     label: witness.label || 'Witness',
// // //     lines: witness.lines || (witness.text ? [witness.text] : []),
// // //   };
// // // }

// // // function groupLaws(laws) {
// // //   const buckets = { holds: [], conditional: [], fails: [], undefined: [] };
// // //   laws.forEach(function (entry) {
// // //     buckets[entry.verdict].push(entry);
// // //   });
// // //   return [
// // //     { key: 'holds',       heading: 'Unconditional', items: buckets.holds },
// // //     { key: 'conditional', heading: 'Conditional',   items: buckets.conditional },
// // //     { key: 'fails',       heading: 'Fails \u2014 and why the failure is instructive', items: buckets.fails },
// // //     { key: 'undefined',   heading: 'Undefined',     items: buckets.undefined },
// // //   ].filter(function (g) { return g.items.length > 0; });
// // // }

// // // /* ============================================================================
// // //  * COMPONENT
// // //  *
// // //  * Props
// // //  *   data     – one flat object, described below
// // //  *   theme    – one of the nine theme keys; defaults to navy
// // //  *   variant  – 'plate' | 'docket' | 'grid' | 'ledger'
// // //  *   showTally – boolean, default true
// // //  *
// // //  * data shape
// // //  *   {
// // //  *     kicker, title, intro, footnote, tallyLabel,
// // //  *     laws: [{
// // //  *       name, statement,
// // //  *       verdict?: 'holds'|'conditional'|'fails'|'undefined',
// // //  *       requires?, holdsWhen?, failsWhen?, commonError?,
// // //  *       note?,                       // rich text
// // //  *       witness?: string | { label, lines[] }
// // //  *     }]
// // //  *   }
// // //  * ==========================================================================*/
// // // export default function PropertyLawCard(props) {
// // //   const data = props.data;
// // //   const theme = THEMES[props.theme] ? props.theme : 'navy';
// // //   const variant = props.variant || 'plate';
// // //   const showTally = props.showTally !== false;

// // //   const rootClass = 'plc-root plc-t-' + theme + ' plc-v-' + variant;

// // //   if (!data || !data.laws || data.laws.length === 0) {
// // //     return (
// // //       <div className={rootClass}>
// // //         <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
// // //         <div className="plc-empty">PropertyLawCard: no laws supplied</div>
// // //       </div>
// // //     );
// // //   }

// // //   /* -- derive everything once -- */
// // //   const laws = data.laws.map(function (law, i) {
// // //     const verdict = normaliseVerdict(law);
// // //     return {
// // //       raw: law,
// // //       index: i + 1,
// // //       verdict: verdict,
// // //       broken: isBroken(verdict),
// // //       badgeLabel: law.verdictLabel || VERDICT_LABELS[verdict],
// // //       witness: witnessLines(law.witness),
// // //       meta: [
// // //         law.requires    ? { term: 'Requires',     value: law.requires }    : null,
// // //         law.holdsWhen   ? { term: 'Holds when',   value: law.holdsWhen }   : null,
// // //         law.failsWhen   ? { term: 'Fails when',   value: law.failsWhen }   : null,
// // //         law.commonError ? { term: 'Common error', value: law.commonError } : null,
// // //       ].filter(Boolean),
// // //     };
// // //   });

// // //   const brokenCount = laws.filter(function (l) { return l.broken; }).length;
// // //   const groups = groupLaws(laws);

// // //   const masthead = (
// // //     <div className="plc-mast">
// // //       {data.kicker ? <div className="plc-kicker">{data.kicker}</div> : null}
// // //       {data.title ? <h3 className="plc-title">{data.title}</h3> : null}
// // //       {data.intro ? <p className="plc-intro">{processContent(data.intro)}</p> : null}
// // //       {showTally ? (
// // //         <div className="plc-tally">
// // //           <b>{padIndex(laws.length)}</b>
// // //           <span>{data.tallyLabel || 'laws'}</span>
// // //         </div>
// // //       ) : null}
// // //     </div>
// // //   );

// // //   const footnote = data.footnote ? (
// // //     <div className="plc-foot">{processContent(data.footnote)}</div>
// // //   ) : null;

// // //   /* ==========================================================
// // //    * plate
// // //    * ========================================================*/
// // //   function renderPlate() {
// // //     return (
// // //       <div className="plc-plates">
// // //         {laws.map(function (l) {
// // //           return (
// // //             <div key={l.index} className={'plc-plate' + (l.broken ? ' is-broken' : '')}>
// // //               <div className="plc-idx">
// // //                 <span className="plc-idx-n">{padIndex(l.index)}</span>
// // //                 <span className="plc-idx-r">{l.verdict}</span>
// // //               </div>
// // //               <div className="plc-face">
// // //                 <div className="plc-name">{l.raw.name}</div>
// // //                 <div className="plc-stmt">{processContent(l.raw.statement)}</div>
// // //                 {l.raw.note ? <div className="plc-prose">{processContent(l.raw.note)}</div> : null}
// // //               </div>
// // //               <div className="plc-aside">
// // //                 <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
// // //                 {l.meta.length > 0 ? (
// // //                   <dl className="plc-meta">
// // //                     {l.meta.map(function (m, mi) {
// // //                       return (
// // //                         <div key={mi}>
// // //                           <dt>{m.term}</dt>
// // //                           <dd>{processContent(m.value)}</dd>
// // //                         </div>
// // //                       );
// // //                     })}
// // //                   </dl>
// // //                 ) : null}
// // //                 {l.witness ? (
// // //                   <div className="plc-witness">
// // //                     <b>{l.witness.label}</b>
// // //                     {l.witness.lines.map(function (line, li) {
// // //                       return (
// // //                         <React.Fragment key={li}>
// // //                           {processContent(line)}
// // //                           {li < l.witness.lines.length - 1 ? <br /> : null}
// // //                         </React.Fragment>
// // //                       );
// // //                     })}
// // //                   </div>
// // //                 ) : null}
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     );
// // //   }

// // //   /* ==========================================================
// // //    * docket
// // //    * ========================================================*/
// // //   function renderDocket() {
// // //     return (
// // //       <div className="plc-docket">
// // //         {groups.map(function (g) {
// // //           return (
// // //             <div key={g.key} className="plc-group">
// // //               <div className="plc-group-h">{g.heading}</div>
// // //               {g.items.map(function (l) {
// // //                 const cond =
// // //                   l.raw.failsWhen || l.raw.holdsWhen || l.raw.requires || l.badgeLabel;
// // //                 return (
// // //                   <div key={l.index} className={'plc-entry' + (l.broken ? ' is-broken' : '')}>
// // //                     <span className="plc-hang">{romanise(l.index)}</span>
// // //                     <div className="plc-body">
// // //                       <div className="plc-line">
// // //                         <span className="plc-nm">{l.raw.name}</span>
// // //                         <span className="plc-fx">{processContent(l.raw.statement)}</span>
// // //                       </div>
// // //                       <div className={'plc-cond' + (l.broken ? ' is-hot' : '')}>
// // //                         {processContent(cond)}
// // //                       </div>
// // //                       {l.raw.note || l.witness ? (
// // //                         <div className="plc-drop">
// // //                           {l.raw.note ? processContent(l.raw.note) : null}
// // //                           {l.witness
// // //                             ? l.witness.lines.map(function (line, li) {
// // //                                 return <p key={li}>{processContent(line)}</p>;
// // //                               })
// // //                             : null}
// // //                         </div>
// // //                       ) : null}
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     );
// // //   }

// // //   /* ==========================================================
// // //    * grid
// // //    * ========================================================*/
// // //   function renderGrid() {
// // //     return (
// // //       <div className="plc-cards">
// // //         {laws.map(function (l) {
// // //           return (
// // //             <div key={l.index} className={'plc-card' + (l.broken ? ' is-broken' : '')}>
// // //               <div className="plc-card-h">
// // //                 <span className="plc-card-nm">{l.raw.name}</span>
// // //                 <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
// // //               </div>
// // //               <div className="plc-card-fx">{processContent(l.raw.statement)}</div>
// // //               {l.meta.length > 0 ? (
// // //                 <dl className="plc-strip">
// // //                   {l.meta.map(function (m, mi) {
// // //                     return (
// // //                       <React.Fragment key={mi}>
// // //                         <dt>{m.term}</dt>
// // //                         <dd>{processContent(m.value)}</dd>
// // //                       </React.Fragment>
// // //                     );
// // //                   })}
// // //                 </dl>
// // //               ) : null}
// // //               {l.raw.note ? <div className="plc-card-note">{processContent(l.raw.note)}</div> : null}
// // //               {l.witness ? (
// // //                 <div className="plc-card-wit">
// // //                   <b>{l.witness.label}</b>
// // //                   {l.witness.lines.map(function (line, li) {
// // //                     return (
// // //                       <React.Fragment key={li}>
// // //                         {processContent(line)}
// // //                         {li < l.witness.lines.length - 1 ? <br /> : null}
// // //                       </React.Fragment>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               ) : null}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     );
// // //   }

// // //   /* ==========================================================
// // //    * ledger
// // //    * ========================================================*/
// // //   function renderLedger() {
// // //     return (
// // //       <div className="plc-rows">
// // //         {laws.map(function (l) {
// // //           return (
// // //             <div key={l.index} className={'plc-row' + (l.broken ? ' is-broken' : '')}>
// // //               <div>
// // //                 <div className="plc-row-nm">{l.raw.name}</div>
// // //                 {l.raw.subtitle ? <div className="plc-row-sub">{l.raw.subtitle}</div> : null}
// // //               </div>
// // //               <div className="plc-row-fx">{processContent(l.raw.statement)}</div>
// // //               <div className="plc-row-vd">
// // //                 <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
// // //               </div>
// // //               {l.witness ? (
// // //                 <div className="plc-row-wit">
// // //                   {l.witness.lines.map(function (line, li) {
// // //                     return (
// // //                       <React.Fragment key={li}>
// // //                         {processContent(line)}
// // //                         {li < l.witness.lines.length - 1 ? <br /> : null}
// // //                       </React.Fragment>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               ) : null}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     );
// // //   }

// // //   let body;
// // //   if (variant === 'docket') body = renderDocket();
// // //   else if (variant === 'grid') body = renderGrid();
// // //   else if (variant === 'ledger') body = renderLedger();
// // //   else body = renderPlate();

// // //   return (
// // //     <div className={rootClass} data-broken={brokenCount}>
// // //       <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
// // //       {masthead}
// // //       {body}
// // //       {footnote}
// // //     </div>
// // //   );
// // // }

// // // export { THEMES as PLC_THEMES };



// // import React from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';

// // /* ============================================================================
// //  * THEMES — navy only. Add entries here; nothing downstream changes.
// //  * ==========================================================================*/
// // const THEMES = {
// //   navy: {
// //     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
// //     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
// //   },
// // };

// // const DEFAULT_THEME = 'navy';

// // const VERDICT_LABELS = {
// //   holds:       'Unconditional',
// //   conditional: 'Conditional',
// //   fails:       'Fails',
// //   undefined:   'Undefined',
// // };

// // /* ============================================================================
// //  * CSS
// //  * ==========================================================================*/
// // function buildCss() {
// //   let css = '';

// //   Object.keys(THEMES).forEach(function (key) {
// //     const t = THEMES[key];
// //     css +=
// //       '.plc-root.plc-t-' + key + '{' +
// //       '--plc-paper:' + t.paper + ';--plc-ink:' + t.ink + ';--plc-muted:' + t.muted + ';' +
// //       '--plc-line:' + t.line + ';--plc-accent:' + t.accent + ';--plc-soft:' + t.soft + ';}';
// //   });

// //   css +=
// //   /* ---------- root: capped width, own vertical rhythm ---------- */
// //   '.plc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
// //   'color:var(--plc-ink);background:var(--plc-paper);' +
// //   'max-width:880px;margin:28px auto;}' +
// //   '.plc-root *,.plc-root *::before,.plc-root *::after{box-sizing:border-box;}' +
// //   '.plc-root a{color:var(--plc-accent);text-underline-offset:2px;text-decoration-thickness:1px;}' +

// //   /* ---------- masthead ---------- */
// //   '.plc-mast{background:var(--plc-ink);color:var(--plc-paper);padding:22px 26px 20px;' +
// //   'position:relative;}' +
// //   '.plc-mast::after{content:\'\';position:absolute;left:26px;right:26px;bottom:0;height:3px;' +
// //   'background:var(--plc-accent);}' +
// //   '.plc-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
// //   'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
// //   '.plc-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:24px;' +
// //   'letter-spacing:-.03em;margin:7px 0 0;line-height:1.06;}' +
// //   '.plc-intro{font-size:13px;margin:9px 0 0;max-width:520px;opacity:.74;}' +
// //   '.plc-tally{position:absolute;right:26px;top:20px;text-align:right;' +
// //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
// //   '.plc-tally b{display:block;font-size:28px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
// //   '.plc-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

// //   /* ---------- verdict badge ---------- */
// //   '.plc-badge{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
// //   'font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:4px 9px;' +
// //   'white-space:nowrap;display:inline-block;}' +
// //   '.plc-badge.v-holds{background:var(--plc-ink);color:var(--plc-paper);}' +
// //   '.plc-badge.v-fails{background:var(--plc-accent);color:var(--plc-paper);}' +
// //   '.plc-badge.v-conditional{background:transparent;color:var(--plc-ink);' +
// //   'border:1px solid var(--plc-ink);}' +
// //   '.plc-badge.v-undefined{background:var(--plc-soft);color:var(--plc-accent);' +
// //   'border:1px dashed var(--plc-accent);}' +

// //   /* ==========================================================
// //    * VARIANT: plate
// //    * ========================================================*/
// //   '.plc-plates{border:1px solid var(--plc-line);border-top:none;}' +
// //   '.plc-plate{display:grid;grid-template-columns:60px 1fr 234px;' +
// //   'border-bottom:1px solid var(--plc-line);}' +
// //   '.plc-plate:last-child{border-bottom:none;}' +
// //   '.plc-idx{border-right:1px solid var(--plc-line);background:var(--plc-soft);display:flex;' +
// //   'flex-direction:column;align-items:center;padding-top:20px;gap:8px;}' +
// //   '.plc-idx-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:18px;' +
// //   'font-weight:800;color:var(--plc-accent);letter-spacing:-.04em;line-height:1;}' +
// //   '.plc-idx-r{writing-mode:vertical-rl;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
// //   'font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:var(--plc-muted);}' +
// //   '.plc-plate.is-broken .plc-idx{background:var(--plc-accent);}' +
// //   '.plc-plate.is-broken .plc-idx-n,.plc-plate.is-broken .plc-idx-r{color:var(--plc-paper);}' +
// //   '.plc-face{padding:18px 24px;display:flex;flex-direction:column;gap:11px;}' +
// //   '.plc-name{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:16px;' +
// //   'letter-spacing:-.015em;}' +
// //   '.plc-stmt{font-size:16px;padding:12px 0 12px 16px;border-left:3px solid var(--plc-accent);}' +
// //   '.plc-plate.is-broken .plc-stmt{border-left-style:double;border-left-width:5px;}' +
// //   '.plc-prose{font-size:12.5px;color:var(--plc-muted);max-width:480px;}' +
// //   '.plc-prose p{margin:0 0 6px;}.plc-prose p:last-child{margin-bottom:0;}' +
// //   '.plc-aside{border-left:1px solid var(--plc-line);background:var(--plc-soft);' +
// //   'padding:18px 18px;display:flex;flex-direction:column;gap:12px;}' +
// //   '.plc-aside .plc-badge{align-self:flex-start;}' +
// //   '.plc-meta{display:grid;gap:9px;margin:0;}' +
// //   '.plc-meta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
// //   'letter-spacing:.16em;text-transform:uppercase;color:var(--plc-muted);margin-bottom:3px;}' +
// //   '.plc-meta dd{margin:0;font-size:12px;}' +
// //   '.plc-witness{margin-top:auto;border-top:2px solid var(--plc-accent);padding-top:11px;' +
// //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10.5px;line-height:1.6;}' +
// //   '.plc-witness b{display:block;font-size:8px;letter-spacing:.16em;text-transform:uppercase;' +
// //   'color:var(--plc-accent);margin-bottom:6px;font-weight:800;}' +

// //   /* ==========================================================
// //    * VARIANT: docket
// //    * ========================================================*/
// //   '.plc-docket{border:1px solid var(--plc-line);border-top:none;padding:0 26px 22px;}' +
// //   '.plc-group{padding-top:20px;margin-top:20px;border-top:1px solid var(--plc-line);}' +
// //   '.plc-group:first-child{border-top:none;margin-top:0;}' +
// //   '.plc-group-h{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
// //   'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--plc-accent);' +
// //   'margin-bottom:14px;display:flex;align-items:center;gap:14px;}' +
// //   '.plc-group-h::after{content:\'\';flex:1;height:1px;background:var(--plc-line);}' +
// //   '.plc-entry{display:grid;grid-template-columns:34px 1fr;gap:16px;padding:11px 0;' +
// //   'border-bottom:1px dotted var(--plc-line);align-items:baseline;}' +
// //   '.plc-entry:last-child{border-bottom:none;}' +
// //   '.plc-hang{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10.5px;' +
// //   'font-weight:800;color:var(--plc-muted);text-align:right;letter-spacing:-.02em;}' +
// //   '.plc-entry.is-broken .plc-hang{color:var(--plc-accent);}' +
// //   '.plc-body{display:grid;grid-template-columns:1fr 168px;gap:18px;align-items:baseline;}' +
// //   '.plc-line{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}' +
// //   '.plc-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;' +
// //   'min-width:126px;}' +
// //   '.plc-fx{font-size:15px;}' +
// //   '.plc-cond{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
// //   'letter-spacing:.04em;color:var(--plc-muted);text-align:right;line-height:1.5;}' +
// //   '.plc-cond.is-hot{color:var(--plc-accent);font-weight:700;}' +
// //   '.plc-drop{grid-column:2;margin-top:9px;padding:11px 14px;background:var(--plc-soft);' +
// //   'border-left:3px solid var(--plc-accent);font-size:12px;}' +
// //   '.plc-drop p{margin:0 0 6px;}.plc-drop p:last-child{margin-bottom:0;}' +

// //   /* ==========================================================
// //    * VARIANT: grid
// //    * ========================================================*/
// //   '.plc-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:12px;' +
// //   'padding:18px 22px 22px;border:1px solid var(--plc-line);border-top:none;}' +
// //   '.plc-card{border:1px solid var(--plc-line);display:flex;flex-direction:column;' +
// //   'background:var(--plc-paper);}' +
// //   '.plc-card.is-broken{border-color:var(--plc-accent);}' +
// //   '.plc-card-h{display:flex;align-items:baseline;gap:8px;padding:12px 15px 10px;' +
// //   'border-bottom:1px solid var(--plc-line);flex-wrap:wrap;}' +
// //   '.plc-card-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;}' +
// //   '.plc-card-fx{padding:16px 15px;flex:1;display:flex;align-items:center;justify-content:center;' +
// //   'background:var(--plc-soft);font-size:14px;text-align:center;min-height:64px;}' +
// //   '.plc-card.is-broken .plc-card-fx{background:var(--plc-paper);}' +
// //   '.plc-strip{padding:10px 15px;border-top:1px solid var(--plc-line);display:grid;' +
// //   'grid-template-columns:auto 1fr;gap:5px 10px;align-items:baseline;margin:0;}' +
// //   '.plc-strip dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
// //   'letter-spacing:.12em;text-transform:uppercase;color:var(--plc-muted);white-space:nowrap;}' +
// //   '.plc-strip dd{margin:0;font-size:12px;}' +
// //   '.plc-card-note{padding:10px 15px;font-size:11.5px;color:var(--plc-muted);' +
// //   'border-top:1px solid var(--plc-line);}' +
// //   '.plc-card-wit{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10.5px;' +
// //   'padding:10px 15px;border-top:1px dashed var(--plc-accent);background:var(--plc-soft);' +
// //   'line-height:1.6;}' +
// //   '.plc-card-wit b{display:block;font-size:8px;letter-spacing:.14em;text-transform:uppercase;' +
// //   'color:var(--plc-accent);margin-bottom:5px;font-weight:800;}' +

// //   /* ==========================================================
// //    * VARIANT: ledger
// //    * ========================================================*/
// //   '.plc-rows{border:1px solid var(--plc-line);border-top:none;padding:0 26px 20px;}' +
// //   '.plc-row{display:grid;grid-template-columns:166px 1fr 130px;gap:18px;padding:13px 0;' +
// //   'border-bottom:1px solid var(--plc-line);align-items:center;}' +
// //   '.plc-row:last-child{border-bottom:none;}' +
// //   '.plc-row.is-broken{background:var(--plc-soft);}' +
// //   '.plc-row-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;}' +
// //   '.plc-row-sub{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
// //   'letter-spacing:.08em;text-transform:uppercase;color:var(--plc-muted);margin-top:3px;}' +
// //   '.plc-row-fx{font-size:14px;}' +
// //   '.plc-row-vd{text-align:right;}' +
// //   '.plc-row-wit{grid-column:1 / -1;border-top:1px dashed var(--plc-accent);margin-top:10px;' +
// //   'padding:10px 0 0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10.5px;' +
// //   'line-height:1.6;}' +

// //   /* ---------- footnote ---------- */
// //   '.plc-foot{border:1px solid var(--plc-line);border-top:none;padding:13px 26px;' +
// //   'font-size:12.5px;color:var(--plc-muted);}' +

// //   /* ---------- fallback ---------- */
// //   '.plc-empty{border:1px dashed var(--plc-line);padding:20px;text-align:center;' +
// //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--plc-muted);}' +

// //   /* ---------- responsive ---------- */
// //   '@media (max-width:820px){' +
// //   '.plc-plate{grid-template-columns:48px 1fr;}' +
// //   '.plc-aside{grid-column:2;border-left:none;border-top:1px solid var(--plc-line);}' +
// //   '.plc-body{grid-template-columns:1fr;}' +
// //   '.plc-cond{text-align:left;}' +
// //   '.plc-drop{grid-column:1;}' +
// //   '.plc-row{grid-template-columns:1fr;gap:8px;}' +
// //   '.plc-row-vd{text-align:left;}' +
// //   '}' +
// //   '@media (max-width:640px){' +
// //   '.plc-root{margin:20px auto;}' +
// //   '.plc-mast{padding:20px 16px 18px;}' +
// //   '.plc-mast::after{left:16px;right:16px;}' +
// //   '.plc-title{font-size:21px;}' +
// //   '.plc-tally{position:static;text-align:left;margin-top:12px;}' +
// //   '.plc-tally b{font-size:24px;}' +
// //   '.plc-face{padding:16px;}' +
// //   '.plc-aside{padding:16px;}' +
// //   '.plc-docket{padding:0 16px 18px;}' +
// //   '.plc-cards{padding:16px;}' +
// //   '.plc-rows{padding:0 16px 16px;}' +
// //   '.plc-foot{padding:12px 16px;}' +
// //   '}';

// //   return css;
// // }

// // const PLC_CSS = buildCss();

// // /* ============================================================================
// //  * INTERNAL HELPERS — all derivation happens here, never in the consuming page.
// //  * ==========================================================================*/
// // function normaliseVerdict(law) {
// //   if (law.verdict) return law.verdict;
// //   if (law.failsWhen || law.witness) return 'fails';
// //   if (law.holdsWhen || law.requires) return 'conditional';
// //   return 'holds';
// // }

// // function isBroken(verdict) {
// //   return verdict === 'fails' || verdict === 'undefined';
// // }

// // function romanise(n) {
// //   const map = [
// //     [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i'],
// //   ];
// //   let out = '';
// //   let rest = n;
// //   for (let i = 0; i < map.length; i++) {
// //     while (rest >= map[i][0]) {
// //       out += map[i][1];
// //       rest -= map[i][0];
// //     }
// //   }
// //   return out;
// // }

// // function padIndex(n) {
// //   return n < 10 ? '0' + n : String(n);
// // }

// // function witnessLines(witness) {
// //   if (!witness) return null;
// //   if (typeof witness === 'string') return { label: 'Witness', lines: [witness] };
// //   return {
// //     label: witness.label || 'Witness',
// //     lines: witness.lines || (witness.text ? [witness.text] : []),
// //   };
// // }

// // function groupLaws(laws) {
// //   const buckets = { holds: [], conditional: [], fails: [], undefined: [] };
// //   laws.forEach(function (entry) {
// //     buckets[entry.verdict].push(entry);
// //   });
// //   return [
// //     { key: 'holds',       heading: 'Unconditional', items: buckets.holds },
// //     { key: 'conditional', heading: 'Conditional',   items: buckets.conditional },
// //     { key: 'fails',       heading: 'Fails \u2014 and why the failure is instructive', items: buckets.fails },
// //     { key: 'undefined',   heading: 'Undefined',     items: buckets.undefined },
// //   ].filter(function (g) { return g.items.length > 0; });
// // }

// // /* ============================================================================
// //  * COMPONENT
// //  *
// //  * Props
// //  *   data      – one flat object, described below
// //  *   theme     – 'navy'
// //  *   variant   – 'plate' | 'docket' | 'grid' | 'ledger'
// //  *   showTally – boolean, default true
// //  *   maxWidth  – optional override of the 880px default
// //  *
// //  * data shape
// //  *   {
// //  *     kicker, title, intro, footnote, tallyLabel,
// //  *     laws: [{
// //  *       name, statement,
// //  *       verdict?: 'holds'|'conditional'|'fails'|'undefined',
// //  *       requires?, holdsWhen?, failsWhen?, commonError?,
// //  *       note?,                       // rich text
// //  *       witness?: string | { label, lines[] }
// //  *     }]
// //  *   }
// //  * ==========================================================================*/
// // export default function PropertyLawCard(props) {
// //   const data = props.data;
// //   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
// //   const variant = props.variant || 'plate';
// //   const showTally = props.showTally !== false;
// //   const maxWidth = props.maxWidth;

// //   const rootClass = 'plc-root plc-t-' + theme + ' plc-v-' + variant;
// //   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

// //   if (!data || !data.laws || data.laws.length === 0) {
// //     return (
// //       <div className={rootClass} style={rootStyle}>
// //         <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
// //         <div className="plc-empty">PropertyLawCard: no laws supplied</div>
// //       </div>
// //     );
// //   }

// //   /* -- derive everything once -- */
// //   const laws = data.laws.map(function (law, i) {
// //     const verdict = normaliseVerdict(law);
// //     return {
// //       raw: law,
// //       index: i + 1,
// //       verdict: verdict,
// //       broken: isBroken(verdict),
// //       badgeLabel: law.verdictLabel || VERDICT_LABELS[verdict],
// //       witness: witnessLines(law.witness),
// //       meta: [
// //         law.requires    ? { term: 'Requires',     value: law.requires }    : null,
// //         law.holdsWhen   ? { term: 'Holds when',   value: law.holdsWhen }   : null,
// //         law.failsWhen   ? { term: 'Fails when',   value: law.failsWhen }   : null,
// //         law.commonError ? { term: 'Common error', value: law.commonError } : null,
// //       ].filter(Boolean),
// //     };
// //   });

// //   const brokenCount = laws.filter(function (l) { return l.broken; }).length;
// //   const groups = groupLaws(laws);

// //   const masthead = (
// //     <div className="plc-mast">
// //       {data.kicker ? <div className="plc-kicker">{data.kicker}</div> : null}
// //       {data.title ? <h3 className="plc-title">{data.title}</h3> : null}
// //       {data.intro ? <p className="plc-intro">{processContent(data.intro)}</p> : null}
// //       {showTally ? (
// //         <div className="plc-tally">
// //           <b>{padIndex(laws.length)}</b>
// //           <span>{data.tallyLabel || 'laws'}</span>
// //         </div>
// //       ) : null}
// //     </div>
// //   );

// //   const footnote = data.footnote ? (
// //     <div className="plc-foot">{processContent(data.footnote)}</div>
// //   ) : null;

// //   /* ==========================================================
// //    * plate
// //    * ========================================================*/
// //   function renderPlate() {
// //     return (
// //       <div className="plc-plates">
// //         {laws.map(function (l) {
// //           return (
// //             <div key={l.index} className={'plc-plate' + (l.broken ? ' is-broken' : '')}>
// //               <div className="plc-idx">
// //                 <span className="plc-idx-n">{padIndex(l.index)}</span>
// //                 <span className="plc-idx-r">{l.verdict}</span>
// //               </div>
// //               <div className="plc-face">
// //                 <div className="plc-name">{l.raw.name}</div>
// //                 <div className="plc-stmt">{processContent(l.raw.statement)}</div>
// //                 {l.raw.note ? <div className="plc-prose">{processContent(l.raw.note)}</div> : null}
// //               </div>
// //               <div className="plc-aside">
// //                 <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
// //                 {l.meta.length > 0 ? (
// //                   <dl className="plc-meta">
// //                     {l.meta.map(function (m, mi) {
// //                       return (
// //                         <div key={mi}>
// //                           <dt>{m.term}</dt>
// //                           <dd>{processContent(m.value)}</dd>
// //                         </div>
// //                       );
// //                     })}
// //                   </dl>
// //                 ) : null}
// //                 {l.witness ? (
// //                   <div className="plc-witness">
// //                     <b>{l.witness.label}</b>
// //                     {l.witness.lines.map(function (line, li) {
// //                       return (
// //                         <React.Fragment key={li}>
// //                           {processContent(line)}
// //                           {li < l.witness.lines.length - 1 ? <br /> : null}
// //                         </React.Fragment>
// //                       );
// //                     })}
// //                   </div>
// //                 ) : null}
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     );
// //   }

// //   /* ==========================================================
// //    * docket
// //    * ========================================================*/
// //   function renderDocket() {
// //     return (
// //       <div className="plc-docket">
// //         {groups.map(function (g) {
// //           return (
// //             <div key={g.key} className="plc-group">
// //               <div className="plc-group-h">{g.heading}</div>
// //               {g.items.map(function (l) {
// //                 const cond =
// //                   l.raw.failsWhen || l.raw.holdsWhen || l.raw.requires || l.badgeLabel;
// //                 return (
// //                   <div key={l.index} className={'plc-entry' + (l.broken ? ' is-broken' : '')}>
// //                     <span className="plc-hang">{romanise(l.index)}</span>
// //                     <div className="plc-body">
// //                       <div className="plc-line">
// //                         <span className="plc-nm">{l.raw.name}</span>
// //                         <span className="plc-fx">{processContent(l.raw.statement)}</span>
// //                       </div>
// //                       <div className={'plc-cond' + (l.broken ? ' is-hot' : '')}>
// //                         {processContent(cond)}
// //                       </div>
// //                       {l.raw.note || l.witness ? (
// //                         <div className="plc-drop">
// //                           {l.raw.note ? processContent(l.raw.note) : null}
// //                           {l.witness
// //                             ? l.witness.lines.map(function (line, li) {
// //                                 return <p key={li}>{processContent(line)}</p>;
// //                               })
// //                             : null}
// //                         </div>
// //                       ) : null}
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     );
// //   }

// //   /* ==========================================================
// //    * grid
// //    * ========================================================*/
// //   function renderGrid() {
// //     return (
// //       <div className="plc-cards">
// //         {laws.map(function (l) {
// //           return (
// //             <div key={l.index} className={'plc-card' + (l.broken ? ' is-broken' : '')}>
// //               <div className="plc-card-h">
// //                 <span className="plc-card-nm">{l.raw.name}</span>
// //                 <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
// //               </div>
// //               <div className="plc-card-fx">{processContent(l.raw.statement)}</div>
// //               {l.meta.length > 0 ? (
// //                 <dl className="plc-strip">
// //                   {l.meta.map(function (m, mi) {
// //                     return (
// //                       <React.Fragment key={mi}>
// //                         <dt>{m.term}</dt>
// //                         <dd>{processContent(m.value)}</dd>
// //                       </React.Fragment>
// //                     );
// //                   })}
// //                 </dl>
// //               ) : null}
// //               {l.raw.note ? <div className="plc-card-note">{processContent(l.raw.note)}</div> : null}
// //               {l.witness ? (
// //                 <div className="plc-card-wit">
// //                   <b>{l.witness.label}</b>
// //                   {l.witness.lines.map(function (line, li) {
// //                     return (
// //                       <React.Fragment key={li}>
// //                         {processContent(line)}
// //                         {li < l.witness.lines.length - 1 ? <br /> : null}
// //                       </React.Fragment>
// //                     );
// //                   })}
// //                 </div>
// //               ) : null}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     );
// //   }

// //   /* ==========================================================
// //    * ledger
// //    * ========================================================*/
// //   function renderLedger() {
// //     return (
// //       <div className="plc-rows">
// //         {laws.map(function (l) {
// //           return (
// //             <div key={l.index} className={'plc-row' + (l.broken ? ' is-broken' : '')}>
// //               <div>
// //                 <div className="plc-row-nm">{l.raw.name}</div>
// //                 {l.raw.subtitle ? <div className="plc-row-sub">{l.raw.subtitle}</div> : null}
// //               </div>
// //               <div className="plc-row-fx">{processContent(l.raw.statement)}</div>
// //               <div className="plc-row-vd">
// //                 <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
// //               </div>
// //               {l.witness ? (
// //                 <div className="plc-row-wit">
// //                   {l.witness.lines.map(function (line, li) {
// //                     return (
// //                       <React.Fragment key={li}>
// //                         {processContent(line)}
// //                         {li < l.witness.lines.length - 1 ? <br /> : null}
// //                       </React.Fragment>
// //                     );
// //                   })}
// //                 </div>
// //               ) : null}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     );
// //   }

// //   let body;
// //   if (variant === 'docket') body = renderDocket();
// //   else if (variant === 'grid') body = renderGrid();
// //   else if (variant === 'ledger') body = renderLedger();
// //   else body = renderPlate();

// //   return (
// //     <div className={rootClass} style={rootStyle} data-broken={brokenCount}>
// //       <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
// //       {masthead}
// //       {body}
// //       {footnote}
// //     </div>
// //   );
// // }

// // export { THEMES as PLC_THEMES };


// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// /* ============================================================================
//  * PropertyLawCard
//  *
//  * A properties explorer. Every law shows its name, statement, verdict and a
//  * one-line excerpt without being opened; the full note and any witness sit
//  * behind a bar along the bottom of the row. Laws whose excerpt already carries
//  * the whole note get no bar at all.
//  *
//  * Two views, switched from the masthead:
//  *
//  *   list    — the semi-accordion above, grouped by verdict
//  *   detail  — every name permanently on the left, one entry at full size on
//  *             the right. Nothing is hidden behind a click you have to guess at.
//  *
//  * Anchors. Each law should carry an `anchor` pointing at the page section that
//  * treats it in full, so the card works as an index into the page rather than a
//  * restatement of it. A law without one renders unlinked and is counted in the
//  * masthead, the same way the other components mark a missing load-bearing
//  * field.
//  *
//  * Export. The generator adds `data-diagram-export` to the component root on its
//  * isolated capture page. That forces the list view, opens every row and hides
//  * the excerpts, the toggle and the expand bars, so a downloaded file is
//  * complete regardless of what the reader had open. Expansion is therefore a
//  * CSS class rather than React state — an attribute cannot override state.
//  * ==========================================================================*/

// const THEMES = {
//   navy: {
//     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
//     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
//   },
// };

// const DEFAULT_THEME = 'navy';

// const VERDICT_LABELS = {
//   holds:       'Unconditional',
//   conditional: 'Conditional',
//   fails:       'Fails',
//   undefined:   'Undefined',
// };

// /* Fails and undefined share a group — both are ways of not working, and
//  * splitting them produces two one-item headings on most pages. */
// const GROUP_ORDER = [
//   { key: 'holds',       heading: 'Unconditional', verdicts: ['holds'] },
//   { key: 'conditional', heading: 'Conditional',   verdicts: ['conditional'] },
//   { key: 'broken',      heading: 'Fails or undefined', verdicts: ['fails', 'undefined'] },
// ];

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.plc-root.plc-t-' + key + '{' +
//       '--plc-paper:' + t.paper + ';--plc-ink:' + t.ink + ';--plc-muted:' + t.muted + ';' +
//       '--plc-line:' + t.line + ';--plc-accent:' + t.accent + ';--plc-soft:' + t.soft + ';}';
//   });

//   css +=
//   /* ---------- root ---------- */
//   '.plc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--plc-ink);background:var(--plc-paper);max-width:880px;margin:28px auto;}' +
//   '.plc-root *,.plc-root *::before,.plc-root *::after{box-sizing:border-box;}' +
//   '.plc-root a{color:var(--plc-accent);text-underline-offset:2px;' +
//   'text-decoration-thickness:1px;}' +

//   /* ---------- masthead ---------- */
//   '.plc-mast{background:var(--plc-ink);color:var(--plc-paper);padding:20px 24px 18px;' +
//   'position:relative;}' +
//   '.plc-mast::after{content:\'\';position:absolute;left:24px;right:24px;bottom:0;height:3px;' +
//   'background:var(--plc-accent);}' +
//   '.plc-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.68;}' +
//   '.plc-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:22px;' +
//   'letter-spacing:-.03em;margin:6px 0 0;line-height:1.06;}' +
//   '.plc-intro{font-size:12.5px;margin:8px 0 0;max-width:460px;opacity:.82;}' +
//   '.plc-mast-r{position:absolute;right:24px;top:18px;display:flex;flex-direction:column;' +
//   'align-items:flex-end;gap:10px;}' +
//   '.plc-tally{text-align:right;font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
//   '.plc-tally b{display:block;font-size:26px;font-weight:800;line-height:1;' +
//   'letter-spacing:-.04em;}' +
//   '.plc-tally span{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.68;}' +
//   '.plc-tally.is-gap b{color:var(--plc-accent);}' +

//   /* view toggle */
//   '.plc-vtog{display:flex;border:1px solid rgba(255,255,255,.38);}' +
//   '.plc-vtog button{background:none;border:0;padding:5px 10px;cursor:pointer;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
//   'letter-spacing:.13em;text-transform:uppercase;color:var(--plc-paper);opacity:.62;' +
//   'transition:background .12s,opacity .12s,color .12s;}' +
//   '.plc-vtog button:hover{opacity:1;}' +
//   '.plc-vtog button:focus-visible{outline:2px solid var(--plc-paper);outline-offset:-2px;}' +
//   '.plc-vtog button.is-on{background:var(--plc-paper);color:var(--plc-ink);opacity:1;}' +

//   /* ---------- verdict pill ---------- */
//   '.plc-vd{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
//   'font-weight:800;letter-spacing:.13em;text-transform:uppercase;padding:4px 8px;' +
//   'white-space:nowrap;}' +
//   '.plc-vd.v-holds{background:var(--plc-ink);color:var(--plc-paper);}' +
//   '.plc-vd.v-conditional{background:transparent;color:var(--plc-ink);' +
//   'border:1px solid var(--plc-ink);}' +
//   '.plc-vd.v-fails{background:var(--plc-accent);color:var(--plc-paper);}' +
//   '.plc-vd.v-undefined{background:var(--plc-soft);color:var(--plc-accent);' +
//   'border:1px dashed var(--plc-accent);}' +

//   /* ---------- views ---------- */
//   '.plc-view{display:none;}' +
//   '.plc-root[data-view="list"] .plc-view-list{display:block;}' +
//   '.plc-root[data-view="detail"] .plc-view-detail{display:grid;}' +

//   /* ==========================================================
//    * list view — semi-accordion
//    * ========================================================*/
//   '.plc-wrap{border:1px solid var(--plc-line);border-top:none;}' +
//   '.plc-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
//   'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--plc-muted);' +
//   'background:var(--plc-soft);padding:7px 20px;border-bottom:1px solid var(--plc-line);' +
//   'display:flex;align-items:center;gap:10px;}' +
//   '.plc-grp span{margin-left:auto;opacity:.6;}' +

//   '.plc-row{border-bottom:1px solid var(--plc-line);}' +
//   '.plc-row:last-child{border-bottom:none;}' +

//   '.plc-top{display:grid;grid-template-columns:30px 1fr auto;gap:13px;align-items:start;' +
//   'padding:13px 20px 12px;}' +
//   '.plc-i{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
//   'color:var(--plc-muted);padding-top:3px;}' +
//   '.plc-mid{min-width:0;}' +
//   '.plc-line{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}' +
//   '.plc-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14.5px;}' +
//   '.plc-nm a{color:inherit;text-decoration:none;border-bottom:1px solid var(--plc-line);' +
//   'transition:color .12s,border-color .12s;}' +
//   '.plc-nm a:hover{color:var(--plc-accent);border-color:var(--plc-accent);}' +
//   '.plc-fx{font-size:13.5px;}' +
//   '.plc-ex{font-size:12.5px;color:var(--plc-muted);margin-top:5px;max-width:620px;}' +
//   '.plc-row.is-open .plc-ex{display:none;}' +

//   '.plc-body{display:none;padding:0 20px 4px 63px;}' +
//   '.plc-row.is-open .plc-body{display:block;}' +
//   '.plc-body p{margin:0 0 10px;font-size:12.5px;color:var(--plc-muted);}' +
//   '.plc-meta{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:0 0 10px;}' +
//   '.plc-meta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
//   'letter-spacing:.15em;text-transform:uppercase;color:var(--plc-muted);}' +
//   '.plc-meta dd{margin:0;font-size:12.5px;}' +

//   /* ---- expand bar: full width, along the bottom of the row ---- */
//   '.plc-more{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;' +
//   'padding:7px 20px 9px;background:none;border:0;border-top:1px dotted var(--plc-line);' +
//   'cursor:pointer;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
//   'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--plc-muted);' +
//   'transition:background .12s,color .12s;}' +
//   '.plc-more:hover{background:var(--plc-soft);color:var(--plc-accent);}' +
//   '.plc-more:focus-visible{outline:2px solid var(--plc-accent);outline-offset:-2px;}' +
//   '.plc-row.is-open .plc-more{background:var(--plc-soft);}' +

//   /* chevron: a single curved stroke, no corner where the halves meet */
//   '.plc-chev{display:block;width:28px;height:8px;flex:0 0 28px;overflow:visible;' +
//   'transition:transform .22s cubic-bezier(.4,0,.2,1);}' +
//   '.plc-chev path{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;}' +
//   '.plc-row.is-open .plc-chev{transform:rotate(180deg);}' +

//   '.plc-more-less{display:none;}' +
//   '.plc-row.is-open .plc-more-more{display:none;}' +
//   '.plc-row.is-open .plc-more-less{display:inline;}' +

//   '.plc-row.is-static .plc-more{display:none;}' +
//   '.plc-row.is-static .plc-top{padding-bottom:13px;}' +

//   /* ==========================================================
//    * detail view — index and pane
//    * ========================================================*/
//   '.plc-view-detail{border:1px solid var(--plc-line);border-top:none;' +
//   'grid-template-columns:250px 1fr;min-height:330px;}' +
//   '.plc-list{border-right:1px solid var(--plc-line);background:var(--plc-soft);}' +
//   '.plc-list-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
//   'font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--plc-muted);' +
//   'padding:11px 16px 6px;}' +
//   '.plc-item{display:grid;grid-template-columns:22px 1fr;gap:9px;align-items:baseline;' +
//   'padding:9px 16px;cursor:pointer;border-left:3px solid transparent;background:none;' +
//   'border-top:0;border-right:0;border-bottom:0;width:100%;text-align:left;' +
//   'font-family:inherit;transition:background .12s;}' +
//   '.plc-item:hover{background:var(--plc-paper);}' +
//   '.plc-item:focus-visible{outline:2px solid var(--plc-accent);outline-offset:-2px;}' +
//   '.plc-item.is-on{background:var(--plc-paper);border-left-color:var(--plc-accent);}' +
//   '.plc-item-i{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
//   'font-weight:800;color:var(--plc-muted);}' +
//   '.plc-item-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;' +
//   'font-size:13.5px;color:var(--plc-ink);}' +
//   '.plc-item.is-on .plc-item-nm{color:var(--plc-accent);}' +

//   '.plc-detail{padding:22px 26px;display:none;}' +
//   '.plc-detail.is-on{display:block;}' +
//   '.plc-d-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:13px;}' +
//   '.plc-d-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:19px;' +
//   'letter-spacing:-.02em;}' +
//   '.plc-d-nm a{color:inherit;text-decoration:none;border-bottom:2px solid var(--plc-line);}' +
//   '.plc-d-nm a:hover{color:var(--plc-accent);border-color:var(--plc-accent);}' +
//   '.plc-d-fx{font-size:17px;padding:13px 0 13px 18px;border-left:3px solid var(--plc-accent);' +
//   'margin-bottom:14px;}' +
//   '.plc-d-note{font-size:13px;color:var(--plc-muted);margin-bottom:13px;}' +
//   '.plc-d-jump{display:inline-flex;align-items:center;gap:7px;margin-top:4px;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
//   'letter-spacing:.14em;text-transform:uppercase;color:var(--plc-accent);' +
//   'text-decoration:none;border-bottom:1px solid var(--plc-accent);padding-bottom:2px;}' +

//   /* ---------- witness ---------- */
//   '.plc-wit{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
//   'line-height:1.7;padding:11px 14px;background:var(--plc-soft);' +
//   'border-left:3px solid var(--plc-accent);color:var(--plc-ink);}' +
//   '.plc-wit b{display:block;font-size:8px;letter-spacing:.14em;text-transform:uppercase;' +
//   'color:var(--plc-accent);margin-bottom:6px;font-weight:800;}' +

//   /* ---------- footnote ---------- */
//   '.plc-foot{border:1px solid var(--plc-line);border-top:none;padding:13px 24px;' +
//   'font-size:12.5px;color:var(--plc-muted);}' +

//   '.plc-empty{border:1px dashed var(--plc-line);padding:20px;text-align:center;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--plc-muted);}' +

//   /* ==========================================================
//    * export state — set by the generator on its capture page
//    * ========================================================*/
//   '.plc-root[data-diagram-export] .plc-vtog{display:none;}' +
//   '.plc-root[data-diagram-export] .plc-view-list{display:block !important;}' +
//   '.plc-root[data-diagram-export] .plc-view-detail{display:none !important;}' +
//   '.plc-root[data-diagram-export] .plc-body{display:block !important;' +
//   'padding-bottom:13px;}' +
//   '.plc-root[data-diagram-export] .plc-ex{display:none !important;}' +
//   '.plc-root[data-diagram-export] .plc-more{display:none !important;}' +

//   /* ---------- responsive ---------- */
//   '@media (max-width:760px){' +
//   '.plc-view-detail{grid-template-columns:1fr;}' +
//   '.plc-list{border-right:none;border-bottom:1px solid var(--plc-line);}' +
//   '.plc-mast-r{position:static;flex-direction:row;align-items:center;' +
//   'justify-content:space-between;margin-top:14px;}' +
//   '}' +
//   '@media (max-width:640px){' +
//   '.plc-root{margin:20px auto;}' +
//   '.plc-mast{padding:18px 16px 16px;}' +
//   '.plc-mast::after{left:16px;right:16px;}' +
//   '.plc-title{font-size:19px;}' +
//   '.plc-top{grid-template-columns:24px 1fr;padding:12px 16px;}' +
//   '.plc-vd{grid-column:2;justify-self:start;margin-top:6px;}' +
//   '.plc-body{padding-left:16px;}' +
//   '.plc-detail{padding:18px 16px;}' +
//   '.plc-foot{padding:12px 16px;}' +
//   '}';

//   return css;
// }

// const PLC_CSS = buildCss();

// /* ============================================================================
//  * HELPERS — every derivation happens here
//  * ==========================================================================*/
// function normaliseVerdict(law) {
//   if (law.verdict) return law.verdict;
//   if (law.failsWhen || law.witness) return 'fails';
//   if (law.holdsWhen || law.requires) return 'conditional';
//   return 'holds';
// }

// function romanise(n) {
//   const map = [[10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']];
//   let out = '';
//   let rest = n;
//   for (let i = 0; i < map.length; i++) {
//     while (rest >= map[i][0]) {
//       out += map[i][1];
//       rest -= map[i][0];
//     }
//   }
//   return out;
// }

// function padIndex(n) {
//   return n < 10 ? '0' + n : String(n);
// }

// function witnessLines(witness) {
//   if (!witness) return null;
//   if (typeof witness === 'string') return { label: 'Witness', lines: [witness] };
//   return {
//     label: witness.label || 'Witness',
//     lines: witness.lines || (witness.text ? [witness.text] : []),
//   };
// }

// /* Strip markup and math so the excerpt is plain prose, then cut at the first
//  * sentence. Anything longer than `limit` is truncated on a word boundary. */
// function makeExcerpt(note, limit) {
//   if (!note) return '';

//   const plain = String(note)
//     .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')      // links → their text
//     .replace(/\$\$?([^$]*)\$\$?/g, '$1')          // math → its body
//     .replace(/[*`_]/g, '')
//     .replace(/\s+/g, ' ')
//     .trim();

//   const stop = plain.search(/[.?!](\s|$)/);
//   let out = stop !== -1 ? plain.slice(0, stop + 1) : plain;

//   if (out.length > limit) {
//     out = out.slice(0, limit);
//     const space = out.lastIndexOf(' ');
//     if (space > limit * 0.6) out = out.slice(0, space);
//     out += '\u2026';
//   }

//   return out;
// }

// /* Wrap a name in a link to its page section when one is given. Anchors are the
//  * point of this component on a properties page — the card indexes the sections
//  * rather than restating them. */
// function nameNode(law) {
//   if (!law.anchor) return law.name;
//   return <a href={law.anchor}>{law.name}</a>;
// }

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   data          – one flat object
//  *   theme         – 'navy'
//  *   defaultView   – 'list' (default) | 'detail'
//  *   showToggle    – boolean, default true
//  *   excerptLength – characters before truncation, default 96
//  *   maxWidth      – override the 880px default
//  *
//  * data shape
//  *   {
//  *     kicker, title, intro, footnote, tallyLabel,
//  *     laws: [{
//  *       name, statement, anchor,
//  *       verdict?: 'holds'|'conditional'|'fails'|'undefined',
//  *       verdictLabel?,
//  *       requires?, holdsWhen?, failsWhen?, commonError?,
//  *       excerpt?,                     // overrides the generated one
//  *       note?,                        // rich text
//  *       witness?: string | { label, lines[] }
//  *     }]
//  *   }
//  * ==========================================================================*/
// export default function PropertyLawCard(props) {
//   const data = props.data;
//   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
//   const showToggle = props.showToggle !== false;
//   const excerptLength = props.excerptLength || 96;
//   const maxWidth = props.maxWidth;

//   const [view, setView] = React.useState(
//     props.defaultView === 'detail' ? 'detail' : 'list'
//   );
//   const [openRows, setOpenRows] = React.useState({});
//   const [selected, setSelected] = React.useState(0);

//   const rootClass = 'plc-root plc-t-' + theme;
//   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

//   if (!data || !data.laws || data.laws.length === 0) {
//     return (
//       <div className={rootClass} style={rootStyle}>
//         <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
//         <div className="plc-empty">PropertyLawCard: no laws supplied</div>
//       </div>
//     );
//   }

//   /* -- derive everything once -- */
//   const laws = data.laws.map(function (law, i) {
//     const verdict = normaliseVerdict(law);
//     const witness = witnessLines(law.witness);
//     const excerpt = law.excerpt || makeExcerpt(law.note, excerptLength);

//     /* A row is static when opening it would add nothing: no witness, no extra
//      * fields, and the excerpt already carries the whole note. */
//     const noteLength = law.note ? String(law.note).length : 0;
//     const meta = [
//       law.requires    ? { term: 'Requires',     value: law.requires }    : null,
//       law.holdsWhen   ? { term: 'Holds when',   value: law.holdsWhen }   : null,
//       law.failsWhen   ? { term: 'Fails when',   value: law.failsWhen }   : null,
//       law.commonError ? { term: 'Common error', value: law.commonError } : null,
//     ].filter(Boolean);

//     const isStatic =
//       !witness && meta.length === 0 && noteLength - excerpt.length < 60;

//     return {
//       key: law.id || 'law-' + i,
//       index: i,
//       raw: law,
//       verdict: verdict,
//       badgeLabel: law.verdictLabel || VERDICT_LABELS[verdict],
//       excerpt: excerpt,
//       witness: witness,
//       meta: meta,
//       isStatic: isStatic,
//       hasAnchor: !!law.anchor,
//     };
//   });

//   const groups = GROUP_ORDER
//     .map(function (g) {
//       return {
//         key: g.key,
//         heading: g.heading,
//         items: laws.filter(function (l) {
//           return g.verdicts.indexOf(l.verdict) !== -1;
//         }),
//       };
//     })
//     .filter(function (g) { return g.items.length > 0; });

//   const missingAnchors = laws.filter(function (l) { return !l.hasAnchor; }).length;

//   function toggleRow(key) {
//     setOpenRows(function (prev) {
//       const next = {};
//       Object.keys(prev).forEach(function (k) { next[k] = prev[k]; });
//       next[key] = !next[key];
//       return next;
//     });
//   }

//   /* ---------------- shared pieces ---------------- */

//   const chevron = (
//     <svg className="plc-chev" viewBox="0 0 28 8" aria-hidden="true">
//       <path d="M1 1.5 C 7 1.5, 10 6.5, 14 6.5 C 18 6.5, 21 1.5, 27 1.5" />
//     </svg>
//   );

//   const masthead = (
//     <div className="plc-mast">
//       {data.kicker ? <div className="plc-kicker">{data.kicker}</div> : null}
//       {data.title ? <h3 className="plc-title">{data.title}</h3> : null}
//       {data.intro ? <p className="plc-intro">{processContent(data.intro)}</p> : null}

//       <div className="plc-mast-r">
//         <div className={'plc-tally' + (missingAnchors > 0 ? ' is-gap' : '')}>
//           <b>{padIndex(laws.length)}</b>
//           <span>{data.tallyLabel || 'entries'}</span>
//         </div>

//         {showToggle ? (
//           <div className="plc-vtog" role="group" aria-label="View">
//             <button
//               type="button"
//               className={view === 'list' ? 'is-on' : ''}
//               onClick={function () { setView('list'); }}
//             >
//               List
//             </button>
//             <button
//               type="button"
//               className={view === 'detail' ? 'is-on' : ''}
//               onClick={function () { setView('detail'); }}
//             >
//               Detail
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );

//   function bodyContent(l) {
//     return (
//       <>
//         {l.meta.length > 0 ? (
//           <dl className="plc-meta">
//             {l.meta.map(function (m, mi) {
//               return (
//                 <React.Fragment key={mi}>
//                   <dt>{m.term}</dt>
//                   <dd>{processContent(m.value)}</dd>
//                 </React.Fragment>
//               );
//             })}
//           </dl>
//         ) : null}

//         {l.raw.note ? <p>{processContent(l.raw.note)}</p> : null}

//         {l.witness ? (
//           <div className="plc-wit">
//             <b>{l.witness.label}</b>
//             {l.witness.lines.map(function (line, li) {
//               return (
//                 <React.Fragment key={li}>
//                   {processContent(line)}
//                   {li < l.witness.lines.length - 1 ? <br /> : null}
//                 </React.Fragment>
//               );
//             })}
//           </div>
//         ) : null}
//       </>
//     );
//   }

//   /* ---------------- list view ---------------- */

//   const listView = (
//     <div className="plc-view plc-view-list">
//       <div className="plc-wrap">
//         {groups.map(function (g) {
//           return (
//             <React.Fragment key={g.key}>
//               <div className="plc-grp">
//                 {g.heading}
//                 <span>{g.items.length}</span>
//               </div>

//               {g.items.map(function (l) {
//                 const open = !!openRows[l.key];
//                 return (
//                   <div
//                     key={l.key}
//                     className={
//                       'plc-row' +
//                       (l.isStatic ? ' is-static' : '') +
//                       (open ? ' is-open' : '')
//                     }
//                   >
//                     <div className="plc-top">
//                       <span className="plc-i">{romanise(l.index + 1)}</span>
//                       <div className="plc-mid">
//                         <div className="plc-line">
//                           <span className="plc-nm">{nameNode(l.raw)}</span>
//                           <span className="plc-fx">
//                             {processContent(l.raw.statement)}
//                           </span>
//                         </div>
//                         {l.excerpt ? (
//                           <div className="plc-ex">{l.excerpt}</div>
//                         ) : null}
//                       </div>
//                       <span className={'plc-vd v-' + l.verdict}>{l.badgeLabel}</span>
//                     </div>

//                     <div className="plc-body">{bodyContent(l)}</div>

//                     {l.isStatic ? null : (
//                       <button
//                         type="button"
//                         className="plc-more"
//                         onClick={function () { toggleRow(l.key); }}
//                         aria-expanded={open}
//                       >
//                         <span className="plc-more-more">Read more</span>
//                         <span className="plc-more-less">Show less</span>
//                         {chevron}
//                       </button>
//                     )}
//                   </div>
//                 );
//               })}
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </div>
//   );

//   /* ---------------- detail view ---------------- */

//   const detailView = (
//     <div className="plc-view plc-view-detail">
//       <div className="plc-list">
//         {groups.map(function (g) {
//           return (
//             <React.Fragment key={g.key}>
//               <div className="plc-list-grp">{g.heading}</div>
//               {g.items.map(function (l) {
//                 return (
//                   <button
//                     key={l.key}
//                     type="button"
//                     className={'plc-item' + (selected === l.index ? ' is-on' : '')}
//                     onClick={function () { setSelected(l.index); }}
//                   >
//                     <span className="plc-item-i">{romanise(l.index + 1)}</span>
//                     <span className="plc-item-nm">{l.raw.name}</span>
//                   </button>
//                 );
//               })}
//             </React.Fragment>
//           );
//         })}
//       </div>

//       <div>
//         {laws.map(function (l) {
//           return (
//             <div
//               key={l.key}
//               className={'plc-detail' + (selected === l.index ? ' is-on' : '')}
//             >
//               <div className="plc-d-head">
//                 <span className="plc-d-nm">{nameNode(l.raw)}</span>
//                 <span className={'plc-vd v-' + l.verdict}>{l.badgeLabel}</span>
//               </div>

//               <div className="plc-d-fx">{processContent(l.raw.statement)}</div>

//               {l.meta.length > 0 ? (
//                 <dl className="plc-meta">
//                   {l.meta.map(function (m, mi) {
//                     return (
//                       <React.Fragment key={mi}>
//                         <dt>{m.term}</dt>
//                         <dd>{processContent(m.value)}</dd>
//                       </React.Fragment>
//                     );
//                   })}
//                 </dl>
//               ) : null}

//               {l.raw.note ? (
//                 <div className="plc-d-note">{processContent(l.raw.note)}</div>
//               ) : null}

//               {l.witness ? (
//                 <div className="plc-wit">
//                   <b>{l.witness.label}</b>
//                   {l.witness.lines.map(function (line, li) {
//                     return (
//                       <React.Fragment key={li}>
//                         {processContent(line)}
//                         {li < l.witness.lines.length - 1 ? <br /> : null}
//                       </React.Fragment>
//                     );
//                   })}
//                 </div>
//               ) : null}

//               {l.hasAnchor ? (
//                 <a className="plc-d-jump" href={l.raw.anchor}>
//                   Read the full section
//                 </a>
//               ) : null}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className={rootClass}
//       style={rootStyle}
//       data-view={view}
//       data-missing-anchors={missingAnchors || undefined}
//     >
//       <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
//       {masthead}
//       {listView}
//       {detailView}
//       {data.footnote ? (
//         <div className="plc-foot">{processContent(data.footnote)}</div>
//       ) : null}
//     </div>
//   );
// }

// export { THEMES as PLC_THEMES, VERDICT_LABELS };


// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// /* ============================================================================
//  * PropertyLawCard
//  *
//  * A properties explorer. Every law shows its name, statement, verdict and a
//  * one-line excerpt without being opened; the full note and any witness sit
//  * behind a bar along the bottom of the row. Laws whose excerpt already carries
//  * the whole note get no bar at all.
//  *
//  * Two views, switched from the masthead:
//  *
//  *   list    — the semi-accordion above, grouped by verdict
//  *   detail  — every name permanently on the left, one entry at full size on
//  *             the right. Nothing is hidden behind a click you have to guess at.
//  *
//  * Anchors. Each law should carry an `anchor` pointing at the page section that
//  * treats it in full, so the card works as an index into the page rather than a
//  * restatement of it. A law without one renders unlinked and is counted in the
//  * masthead, the same way the other components mark a missing load-bearing
//  * field.
//  *
//  * Export. The generator adds `data-diagram-export` to the component root on its
//  * isolated capture page. That forces the list view, opens every row and hides
//  * the excerpts, the toggle and the expand bars, so a downloaded file is
//  * complete regardless of what the reader had open. Expansion is therefore a
//  * CSS class rather than React state — an attribute cannot override state.
//  * ==========================================================================*/

// const THEMES = {
//   navy: {
//     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
//     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
//   },
// };

// const DEFAULT_THEME = 'navy';

// const VERDICT_LABELS = {
//   holds:       'Unconditional',
//   conditional: 'Conditional',
//   fails:       'Fails',
//   undefined:   'Undefined',
// };

// /* Fails and undefined share a group — both are ways of not working, and
//  * splitting them produces two one-item headings on most pages. */
// const GROUP_ORDER = [
//   { key: 'holds',       heading: 'Unconditional', verdicts: ['holds'] },
//   { key: 'conditional', heading: 'Conditional',   verdicts: ['conditional'] },
//   { key: 'broken',      heading: 'Fails or undefined', verdicts: ['fails', 'undefined'] },
// ];

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.plc-root.plc-t-' + key + '{' +
//       '--plc-paper:' + t.paper + ';--plc-ink:' + t.ink + ';--plc-muted:' + t.muted + ';' +
//       '--plc-line:' + t.line + ';--plc-accent:' + t.accent + ';--plc-soft:' + t.soft + ';}';
//   });

//   css +=
//   /* ---------- root ---------- */
//   '.plc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--plc-ink);background:var(--plc-paper);max-width:880px;margin:28px auto;}' +
//   '.plc-root *,.plc-root *::before,.plc-root *::after{box-sizing:border-box;}' +
//   '.plc-root a{color:var(--plc-accent);text-underline-offset:2px;' +
//   'text-decoration-thickness:1px;}' +

//   /* ---------- masthead ---------- */
//   '.plc-mast{background:var(--plc-ink);color:var(--plc-paper);padding:20px 24px 18px;' +
//   'position:relative;}' +
//   '.plc-mast::after{content:\'\';position:absolute;left:24px;right:24px;bottom:0;height:3px;' +
//   'background:var(--plc-accent);}' +
//   '.plc-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.68;}' +
//   '.plc-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:22px;' +
//   'letter-spacing:-.03em;margin:6px 0 0;line-height:1.06;}' +
//   '.plc-intro{font-size:12.5px;margin:8px 0 0;max-width:460px;opacity:.82;}' +
//   '.plc-mast-r{position:absolute;right:24px;top:18px;display:flex;flex-direction:column;' +
//   'align-items:flex-end;gap:10px;}' +
//   '.plc-tally{text-align:right;font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
//   '.plc-tally b{display:block;font-size:26px;font-weight:800;line-height:1;' +
//   'letter-spacing:-.04em;}' +
//   '.plc-tally span{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.68;}' +
//   '.plc-tally.is-gap b{color:var(--plc-accent);}' +

//   /* view toggle */
//   '.plc-vtog{display:flex;border:1px solid rgba(255,255,255,.38);}' +
//   '.plc-vtog button{background:none;border:0;padding:5px 10px;cursor:pointer;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
//   'letter-spacing:.13em;text-transform:uppercase;color:var(--plc-paper);opacity:.62;' +
//   'transition:background .12s,opacity .12s,color .12s;}' +
//   '.plc-vtog button:hover{opacity:1;}' +
//   '.plc-vtog button:focus-visible{outline:2px solid var(--plc-paper);outline-offset:-2px;}' +
//   '.plc-vtog button.is-on{background:var(--plc-paper);color:var(--plc-ink);opacity:1;}' +

//   /* ---------- verdict pill ---------- */
//   '.plc-vd{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
//   'font-weight:800;letter-spacing:.13em;text-transform:uppercase;padding:4px 8px;' +
//   'white-space:nowrap;}' +
//   '.plc-vd.v-holds{background:var(--plc-ink);color:var(--plc-paper);}' +
//   '.plc-vd.v-conditional{background:transparent;color:var(--plc-ink);' +
//   'border:1px solid var(--plc-ink);}' +
//   '.plc-vd.v-fails{background:var(--plc-accent);color:var(--plc-paper);}' +
//   '.plc-vd.v-undefined{background:var(--plc-soft);color:var(--plc-accent);' +
//   'border:1px dashed var(--plc-accent);}' +

//   /* ---------- views ---------- */
//   '.plc-view{display:none;}' +
//   '.plc-root[data-view="list"] .plc-view-list{display:block;}' +
//   '.plc-root[data-view="detail"] .plc-view-detail{display:grid;}' +

//   /* ==========================================================
//    * list view — semi-accordion
//    * ========================================================*/
//   '.plc-wrap{border:1px solid var(--plc-line);border-top:none;}' +
//   '.plc-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
//   'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--plc-muted);' +
//   'background:var(--plc-soft);padding:7px 20px;border-bottom:1px solid var(--plc-line);' +
//   'display:flex;align-items:center;gap:10px;}' +
//   '.plc-grp span{margin-left:auto;opacity:.6;}' +

//   '.plc-row{border-bottom:1px solid var(--plc-line);}' +
//   '.plc-row:last-child{border-bottom:none;}' +

//   '.plc-top{display:grid;grid-template-columns:30px 1fr auto;gap:13px;align-items:start;' +
//   'padding:13px 20px 12px;}' +
//   '.plc-i{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
//   'color:var(--plc-muted);padding-top:3px;}' +
//   '.plc-mid{min-width:0;}' +
//   '.plc-line{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}' +
//   '.plc-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14.5px;}' +
//   '.plc-nm a{color:inherit;text-decoration:none;border-bottom:1px solid var(--plc-line);' +
//   'transition:color .12s,border-color .12s;}' +
//   '.plc-nm a:hover{color:var(--plc-accent);border-color:var(--plc-accent);}' +
//   '.plc-fx{font-size:13.5px;}' +
//   '.plc-ex{font-size:12.5px;color:var(--plc-muted);margin-top:5px;max-width:620px;}' +
//   '.plc-row.is-open .plc-ex{display:none;}' +

//   '.plc-body{display:none;padding:0 20px 4px 63px;}' +
//   '.plc-row.is-open .plc-body{display:block;}' +
//   '.plc-body p{margin:0 0 10px;font-size:12.5px;color:var(--plc-muted);}' +
//   '.plc-meta{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:0 0 10px;}' +
//   '.plc-meta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
//   'letter-spacing:.15em;text-transform:uppercase;color:var(--plc-muted);}' +
//   '.plc-meta dd{margin:0;font-size:12.5px;}' +

//   /* ---- expand bar: full width, along the bottom of the row ---- */
//   '.plc-more{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;' +
//   'padding:7px 20px 9px;background:none;border:0;border-top:1px dotted var(--plc-line);' +
//   'cursor:pointer;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
//   'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--plc-muted);' +
//   'transition:background .12s,color .12s;}' +
//   '.plc-more:hover{background:var(--plc-soft);color:var(--plc-accent);}' +
//   '.plc-more:focus-visible{outline:2px solid var(--plc-accent);outline-offset:-2px;}' +
//   '.plc-row.is-open .plc-more{background:var(--plc-soft);}' +

//   /* chevron: a single curved stroke, no corner where the halves meet */
//   '.plc-chev{display:block;width:28px;height:8px;flex:0 0 28px;overflow:visible;' +
//   'transition:transform .22s cubic-bezier(.4,0,.2,1);}' +
//   '.plc-chev path{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;}' +
//   '.plc-row.is-open .plc-chev{transform:rotate(180deg);}' +

//   '.plc-more-less{display:none;}' +
//   '.plc-row.is-open .plc-more-more{display:none;}' +
//   '.plc-row.is-open .plc-more-less{display:inline;}' +

//   '.plc-row.is-static .plc-more{display:none;}' +
//   '.plc-row.is-static .plc-top{padding-bottom:13px;}' +

//   /* ==========================================================
//    * detail view — index and pane
//    * ========================================================*/
//   '.plc-view-detail{border:1px solid var(--plc-line);border-top:none;' +
//   'grid-template-columns:250px 1fr;min-height:330px;}' +
//   '.plc-list{border-right:1px solid var(--plc-line);background:var(--plc-soft);}' +
//   '.plc-list-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
//   'font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--plc-muted);' +
//   'padding:11px 16px 6px;}' +
//   '.plc-item{display:grid;grid-template-columns:22px 1fr;gap:9px;align-items:baseline;' +
//   'padding:9px 16px;cursor:pointer;border-left:3px solid transparent;background:none;' +
//   'border-top:0;border-right:0;border-bottom:0;width:100%;text-align:left;' +
//   'font-family:inherit;transition:background .12s;}' +
//   '.plc-item:hover{background:var(--plc-paper);}' +
//   '.plc-item:focus-visible{outline:2px solid var(--plc-accent);outline-offset:-2px;}' +
//   '.plc-item.is-on{background:var(--plc-paper);border-left-color:var(--plc-accent);}' +
//   '.plc-item-i{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
//   'font-weight:800;color:var(--plc-muted);}' +
//   '.plc-item-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;' +
//   'font-size:13.5px;color:var(--plc-ink);}' +
//   '.plc-item.is-on .plc-item-nm{color:var(--plc-accent);}' +

//   '.plc-detail{padding:22px 26px;display:none;}' +
//   '.plc-detail.is-on{display:block;}' +
//   '.plc-d-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:13px;}' +
//   '.plc-d-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:19px;' +
//   'letter-spacing:-.02em;}' +
//   '.plc-d-nm a{color:inherit;text-decoration:none;border-bottom:2px solid var(--plc-line);}' +
//   '.plc-d-nm a:hover{color:var(--plc-accent);border-color:var(--plc-accent);}' +
//   '.plc-d-fx{font-size:17px;padding:13px 0 13px 18px;border-left:3px solid var(--plc-accent);' +
//   'margin-bottom:14px;}' +
//   '.plc-d-note{font-size:13px;color:var(--plc-muted);margin-bottom:13px;}' +
//   '.plc-d-jump{display:inline-flex;align-items:center;gap:7px;margin-top:4px;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
//   'letter-spacing:.14em;text-transform:uppercase;color:var(--plc-accent);' +
//   'text-decoration:none;border-bottom:1px solid var(--plc-accent);padding-bottom:2px;}' +

//   /* ---------- witness ---------- */
//   '.plc-wit{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
//   'line-height:1.7;padding:11px 14px;background:var(--plc-soft);' +
//   'border-left:3px solid var(--plc-accent);color:var(--plc-ink);}' +
//   '.plc-wit b{display:block;font-size:8px;letter-spacing:.14em;text-transform:uppercase;' +
//   'color:var(--plc-accent);margin-bottom:6px;font-weight:800;}' +

//   /* ---------- footnote ---------- */
//   '.plc-foot{border:1px solid var(--plc-line);border-top:none;padding:13px 24px;' +
//   'font-size:12.5px;color:var(--plc-muted);}' +

//   '.plc-empty{border:1px dashed var(--plc-line);padding:20px;text-align:center;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--plc-muted);}' +

//   /* ==========================================================
//    * export state — set by the generator on its capture page
//    * ========================================================*/
//   '.plc-root[data-diagram-export] .plc-vtog{display:none;}' +
//   '.plc-root[data-diagram-export] .plc-view-list{display:block !important;}' +
//   '.plc-root[data-diagram-export] .plc-view-detail{display:none !important;}' +
//   '.plc-root[data-diagram-export] .plc-body{display:block !important;' +
//   'padding-bottom:13px;}' +
//   '.plc-root[data-diagram-export] .plc-ex{display:none !important;}' +
//   '.plc-root[data-diagram-export] .plc-more{display:none !important;}' +

//   /* ---------- responsive ---------- */
//   '@media (max-width:760px){' +
//   '.plc-view-detail{grid-template-columns:1fr;}' +
//   '.plc-list{border-right:none;border-bottom:1px solid var(--plc-line);}' +
//   '.plc-mast-r{position:static;flex-direction:row;align-items:center;' +
//   'justify-content:space-between;margin-top:14px;}' +
//   '}' +
//   '@media (max-width:640px){' +
//   '.plc-root{margin:20px auto;}' +
//   '.plc-mast{padding:18px 16px 16px;}' +
//   '.plc-mast::after{left:16px;right:16px;}' +
//   '.plc-title{font-size:19px;}' +
//   '.plc-top{grid-template-columns:24px 1fr;padding:12px 16px;}' +
//   '.plc-vd{grid-column:2;justify-self:start;margin-top:6px;}' +
//   '.plc-body{padding-left:16px;}' +
//   '.plc-detail{padding:18px 16px;}' +
//   '.plc-foot{padding:12px 16px;}' +
//   '}';

//   return css;
// }

// const PLC_CSS = buildCss();

// /* ============================================================================
//  * HELPERS — every derivation happens here
//  * ==========================================================================*/
// function normaliseVerdict(law) {
//   if (law.verdict) return law.verdict;
//   if (law.failsWhen || law.witness) return 'fails';
//   if (law.holdsWhen || law.requires) return 'conditional';
//   return 'holds';
// }

// function romanise(n) {
//   const map = [[10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']];
//   let out = '';
//   let rest = n;
//   for (let i = 0; i < map.length; i++) {
//     while (rest >= map[i][0]) {
//       out += map[i][1];
//       rest -= map[i][0];
//     }
//   }
//   return out;
// }

// function padIndex(n) {
//   return n < 10 ? '0' + n : String(n);
// }

// function witnessLines(witness) {
//   if (!witness) return null;
//   if (typeof witness === 'string') return { label: 'Witness', lines: [witness] };
//   return {
//     label: witness.label || 'Witness',
//     lines: witness.lines || (witness.text ? [witness.text] : []),
//   };
// }

// /* Turn a TeX fragment into something readable as prose. Commands are replaced
//  * by the symbol they render, braces dropped, the rest discarded — an excerpt
//  * carrying `\mathbf{a} \times \mathbf{a}` is worse than one carrying nothing. */
// const TEX_SYMBOLS = [
//   [/\\times/g, '\u00D7'], [/\\cdot/g, '\u00B7'], [/\\div/g, '\u00F7'],
//   [/\\pm/g, '\u00B1'], [/\\mp/g, '\u2213'],
//   [/\\neq/g, '\u2260'], [/\\leq/g, '\u2264'], [/\\geq/g, '\u2265'],
//   [/\\approx/g, '\u2248'], [/\\equiv/g, '\u2261'],
//   [/\\nRightarrow/g, '\u21CF'], [/\\Rightarrow/g, '\u21D2'],
//   [/\\rightarrow|\\to/g, '\u2192'], [/\\iff/g, '\u21D4'],
//   [/\\in\b/g, '\u2208'], [/\\notin/g, '\u2209'],
//   [/\\subset/g, '\u2282'], [/\\subseteq/g, '\u2286'],
//   [/\\cup/g, '\u222A'], [/\\cap/g, '\u2229'],
//   [/\\emptyset|\\varnothing/g, '\u2205'], [/\\infty/g, '\u221E'],
//   [/\\sum/g, '\u2211'], [/\\prod/g, '\u220F'], [/\\sqrt/g, '\u221A'],
//   [/\\perp/g, '\u22A5'], [/\\parallel/g, '\u2225'], [/\\angle/g, '\u2220'],
//   [/\\lambda/g, '\u03BB'], [/\\sigma/g, '\u03C3'], [/\\theta/g, '\u03B8'],
//   [/\\alpha/g, '\u03B1'], [/\\beta/g, '\u03B2'], [/\\delta/g, '\u03B4'],
//   [/\\Sigma/g, '\u03A3'], [/\\Lambda/g, '\u039B'], [/\\Delta/g, '\u0394'],
//   [/\\mathbb\{R\}/g, '\u211D'], [/\\mathbb\{C\}/g, '\u2102'],
//   [/\\mathbb\{Z\}/g, '\u2124'], [/\\mathbb\{Q\}/g, '\u211A'],
//   [/\\mathbb\{N\}/g, '\u2115'],
//   [/\\operatorname\{([^}]*)\}/g, '$1'],
//   [/\\text\{([^}]*)\}/g, '$1'],
//   [/\\mathbf\{([^}]*)\}/g, '$1'],
//   [/\\mathsf\{([^}]*)\}/g, '$1'],
//   [/\\mathrm\{([^}]*)\}/g, '$1'],
//   [/\\vec\{([^}]*)\}/g, '$1'],
//   [/\\left|\\right/g, ''],
//   [/\\,|\\;|\\!|\\quad|\\qquad/g, ' '],
// ];

// function detex(tex) {
//   let out = String(tex);
//   TEX_SYMBOLS.forEach(function (pair) {
//     out = out.replace(pair[0], pair[1]);
//   });
//   return out
//     .replace(/\\[a-zA-Z]+/g, '')   // any command left over
//     .replace(/[{}]/g, '')
//     .replace(/\s+/g, ' ')
//     .trim();
// }

// /* Strip markup and math so the excerpt is plain prose, then cut at the first
//  * sentence. Anything longer than `limit` is truncated on a word boundary. */
// function makeExcerpt(note, limit) {
//   if (!note) return '';

//   const plain = String(note)
//     .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')            // links → their text
//     .replace(/\$\$([\s\S]*?)\$\$/g, function (m, body) { return detex(body); })
//     .replace(/\$([^$]*)\$/g, function (m, body) { return detex(body); })
//     .replace(/[*`_]/g, '')
//     .replace(/\s+/g, ' ')
//     .trim();

//   /* Cut at the first sentence end, ignoring one inside a bracket. */
//   const stop = plain.search(/[.?!](\s|$)/);
//   let out = stop !== -1 ? plain.slice(0, stop + 1) : plain;

//   if (out.length > limit) {
//     out = out.slice(0, limit);
//     const space = out.lastIndexOf(' ');
//     if (space > limit * 0.6) out = out.slice(0, space);
//     out = out.replace(/[,;:\s]+$/, '') + '\u2026';
//   }

//   return out;
// }

// /* Wrap a name in a link to its page section when one is given. Anchors are the
//  * point of this component on a properties page — the card indexes the sections
//  * rather than restating them. */
// function nameNode(law) {
//   if (!law.anchor) return law.name;
//   return <a href={law.anchor}>{law.name}</a>;
// }

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   data          – one flat object
//  *   theme         – 'navy'
//  *   defaultView   – 'list' (default) | 'detail'
//  *   showToggle    – boolean, default true
//  *   excerptLength – characters before truncation, default 96
//  *   maxWidth      – override the 880px default
//  *
//  * data shape
//  *   {
//  *     kicker, title, intro, footnote, tallyLabel,
//  *     laws: [{
//  *       name, statement, anchor,
//  *       verdict?: 'holds'|'conditional'|'fails'|'undefined',
//  *       verdictLabel?,
//  *       requires?, holdsWhen?, failsWhen?, commonError?,
//  *       excerpt?,                     // overrides the generated one
//  *       note?,                        // rich text
//  *       witness?: string | { label, lines[] }
//  *     }]
//  *   }
//  * ==========================================================================*/
// export default function PropertyLawCard(props) {
//   const data = props.data;
//   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
//   const showToggle = props.showToggle !== false;
//   const excerptLength = props.excerptLength || 96;
//   const maxWidth = props.maxWidth;

//   const [view, setView] = React.useState(
//     props.defaultView === 'detail' ? 'detail' : 'list'
//   );
//   const [openRows, setOpenRows] = React.useState({});
//   const [selected, setSelected] = React.useState(0);

//   const rootClass = 'plc-root plc-t-' + theme;
//   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

//   if (!data || !data.laws || data.laws.length === 0) {
//     return (
//       <div className={rootClass} style={rootStyle}>
//         <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
//         <div className="plc-empty">PropertyLawCard: no laws supplied</div>
//       </div>
//     );
//   }

//   /* -- derive everything once -- */
//   const laws = data.laws.map(function (law, i) {
//     const verdict = normaliseVerdict(law);
//     const witness = witnessLines(law.witness);
//     const excerpt = law.excerpt || makeExcerpt(law.note, excerptLength);

//     /* A row is static when opening it would add nothing: no witness, no extra
//      * fields, and the excerpt already carries the whole note. */
//     const noteLength = law.note ? String(law.note).length : 0;
//     const meta = [
//       law.requires    ? { term: 'Requires',     value: law.requires }    : null,
//       law.holdsWhen   ? { term: 'Holds when',   value: law.holdsWhen }   : null,
//       law.failsWhen   ? { term: 'Fails when',   value: law.failsWhen }   : null,
//       law.commonError ? { term: 'Common error', value: law.commonError } : null,
//     ].filter(Boolean);

//     const isStatic =
//       !witness && meta.length === 0 && noteLength - excerpt.length < 60;

//     return {
//       key: law.id || 'law-' + i,
//       index: i,
//       raw: law,
//       verdict: verdict,
//       badgeLabel: law.verdictLabel || VERDICT_LABELS[verdict],
//       excerpt: excerpt,
//       witness: witness,
//       meta: meta,
//       isStatic: isStatic,
//       hasAnchor: !!law.anchor,
//     };
//   });

//   const groups = GROUP_ORDER
//     .map(function (g) {
//       return {
//         key: g.key,
//         heading: g.heading,
//         items: laws.filter(function (l) {
//           return g.verdicts.indexOf(l.verdict) !== -1;
//         }),
//       };
//     })
//     .filter(function (g) { return g.items.length > 0; });

//   const missingAnchors = laws.filter(function (l) { return !l.hasAnchor; }).length;

//   function toggleRow(key) {
//     setOpenRows(function (prev) {
//       const next = {};
//       Object.keys(prev).forEach(function (k) { next[k] = prev[k]; });
//       next[key] = !next[key];
//       return next;
//     });
//   }

//   /* ---------------- shared pieces ---------------- */

//   const chevron = (
//     <svg className="plc-chev" viewBox="0 0 28 8" aria-hidden="true">
//       <path d="M1 1.5 C 7 1.5, 10 6.5, 14 6.5 C 18 6.5, 21 1.5, 27 1.5" />
//     </svg>
//   );

//   const masthead = (
//     <div className="plc-mast">
//       {data.kicker ? <div className="plc-kicker">{data.kicker}</div> : null}
//       {data.title ? <h3 className="plc-title">{data.title}</h3> : null}
//       {data.intro ? <p className="plc-intro">{processContent(data.intro)}</p> : null}

//       <div className="plc-mast-r">
//         <div className={'plc-tally' + (missingAnchors > 0 ? ' is-gap' : '')}>
//           <b>{padIndex(laws.length)}</b>
//           <span>{data.tallyLabel || 'entries'}</span>
//         </div>

//         {showToggle ? (
//           <div className="plc-vtog" role="group" aria-label="View">
//             <button
//               type="button"
//               className={view === 'list' ? 'is-on' : ''}
//               onClick={function () { setView('list'); }}
//             >
//               List
//             </button>
//             <button
//               type="button"
//               className={view === 'detail' ? 'is-on' : ''}
//               onClick={function () { setView('detail'); }}
//             >
//               Detail
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );

//   function bodyContent(l) {
//     return (
//       <>
//         {l.meta.length > 0 ? (
//           <dl className="plc-meta">
//             {l.meta.map(function (m, mi) {
//               return (
//                 <React.Fragment key={mi}>
//                   <dt>{m.term}</dt>
//                   <dd>{processContent(m.value)}</dd>
//                 </React.Fragment>
//               );
//             })}
//           </dl>
//         ) : null}

//         {l.raw.note ? <p>{processContent(l.raw.note)}</p> : null}

//         {l.witness ? (
//           <div className="plc-wit">
//             <b>{l.witness.label}</b>
//             {l.witness.lines.map(function (line, li) {
//               return (
//                 <React.Fragment key={li}>
//                   {processContent(line)}
//                   {li < l.witness.lines.length - 1 ? <br /> : null}
//                 </React.Fragment>
//               );
//             })}
//           </div>
//         ) : null}
//       </>
//     );
//   }

//   /* ---------------- list view ---------------- */

//   const listView = (
//     <div className="plc-view plc-view-list">
//       <div className="plc-wrap">
//         {groups.map(function (g) {
//           return (
//             <React.Fragment key={g.key}>
//               <div className="plc-grp">
//                 {g.heading}
//                 <span>{g.items.length}</span>
//               </div>

//               {g.items.map(function (l) {
//                 const open = !!openRows[l.key];
//                 return (
//                   <div
//                     key={l.key}
//                     className={
//                       'plc-row' +
//                       (l.isStatic ? ' is-static' : '') +
//                       (open ? ' is-open' : '')
//                     }
//                   >
//                     <div className="plc-top">
//                       <span className="plc-i">{romanise(l.index + 1)}</span>
//                       <div className="plc-mid">
//                         <div className="plc-line">
//                           <span className="plc-nm">{nameNode(l.raw)}</span>
//                           <span className="plc-fx">
//                             {processContent(l.raw.statement)}
//                           </span>
//                         </div>
//                         {l.excerpt ? (
//                           <div className="plc-ex">{l.excerpt}</div>
//                         ) : null}
//                       </div>
//                       <span className={'plc-vd v-' + l.verdict}>{l.badgeLabel}</span>
//                     </div>

//                     <div className="plc-body">{bodyContent(l)}</div>

//                     {l.isStatic ? null : (
//                       <button
//                         type="button"
//                         className="plc-more"
//                         onClick={function () { toggleRow(l.key); }}
//                         aria-expanded={open}
//                       >
//                         <span className="plc-more-more">Read more</span>
//                         <span className="plc-more-less">Show less</span>
//                         {chevron}
//                       </button>
//                     )}
//                   </div>
//                 );
//               })}
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </div>
//   );

//   /* ---------------- detail view ---------------- */

//   const detailView = (
//     <div className="plc-view plc-view-detail">
//       <div className="plc-list">
//         {groups.map(function (g) {
//           return (
//             <React.Fragment key={g.key}>
//               <div className="plc-list-grp">{g.heading}</div>
//               {g.items.map(function (l) {
//                 return (
//                   <button
//                     key={l.key}
//                     type="button"
//                     className={'plc-item' + (selected === l.index ? ' is-on' : '')}
//                     onClick={function () { setSelected(l.index); }}
//                   >
//                     <span className="plc-item-i">{romanise(l.index + 1)}</span>
//                     <span className="plc-item-nm">{l.raw.name}</span>
//                   </button>
//                 );
//               })}
//             </React.Fragment>
//           );
//         })}
//       </div>

//       <div>
//         {laws.map(function (l) {
//           return (
//             <div
//               key={l.key}
//               className={'plc-detail' + (selected === l.index ? ' is-on' : '')}
//             >
//               <div className="plc-d-head">
//                 <span className="plc-d-nm">{nameNode(l.raw)}</span>
//                 <span className={'plc-vd v-' + l.verdict}>{l.badgeLabel}</span>
//               </div>

//               <div className="plc-d-fx">{processContent(l.raw.statement)}</div>

//               {l.meta.length > 0 ? (
//                 <dl className="plc-meta">
//                   {l.meta.map(function (m, mi) {
//                     return (
//                       <React.Fragment key={mi}>
//                         <dt>{m.term}</dt>
//                         <dd>{processContent(m.value)}</dd>
//                       </React.Fragment>
//                     );
//                   })}
//                 </dl>
//               ) : null}

//               {l.raw.note ? (
//                 <div className="plc-d-note">{processContent(l.raw.note)}</div>
//               ) : null}

//               {l.witness ? (
//                 <div className="plc-wit">
//                   <b>{l.witness.label}</b>
//                   {l.witness.lines.map(function (line, li) {
//                     return (
//                       <React.Fragment key={li}>
//                         {processContent(line)}
//                         {li < l.witness.lines.length - 1 ? <br /> : null}
//                       </React.Fragment>
//                     );
//                   })}
//                 </div>
//               ) : null}

//               {l.hasAnchor ? (
//                 <a className="plc-d-jump" href={l.raw.anchor}>
//                   Read the full section
//                 </a>
//               ) : null}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className={rootClass}
//       style={rootStyle}
//       data-view={view}
//       data-missing-anchors={missingAnchors || undefined}
//     >
//       <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
//       {masthead}
//       {listView}
//       {detailView}
//       {data.footnote ? (
//         <div className="plc-foot">{processContent(data.footnote)}</div>
//       ) : null}
//     </div>
//   );
// }

// export { THEMES as PLC_THEMES, VERDICT_LABELS };


import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * PropertyLawCard
 *
 * A properties explorer. Every law shows its name, statement, verdict and a
 * one-line excerpt without being opened; the full note and any witness sit
 * behind a bar along the bottom of the row. Laws whose excerpt already carries
 * the whole note get no bar at all.
 *
 * Two views, switched from the masthead:
 *
 *   list    — the semi-accordion above, grouped by verdict
 *   detail  — every name permanently on the left, one entry at full size on
 *             the right. Nothing is hidden behind a click you have to guess at.
 *
 * Anchors. Each law should carry an `anchor` pointing at the page section that
 * treats it in full, so the card works as an index into the page rather than a
 * restatement of it. A law without one renders unlinked and is counted in the
 * masthead, the same way the other components mark a missing load-bearing
 * field.
 *
 * Export. The generator adds `data-diagram-export` to the component root on its
 * isolated capture page. That forces the list view, opens every row and hides
 * the excerpts, the toggle and the expand bars, so a downloaded file is
 * complete regardless of what the reader had open. Expansion is therefore a
 * CSS class rather than React state — an attribute cannot override state.
 * ==========================================================================*/

const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
  },
};

const DEFAULT_THEME = 'navy';

const VERDICT_LABELS = {
  holds:       'Unconditional',
  conditional: 'Conditional',
  fails:       'Fails',
  undefined:   'Undefined',
};

/* Fails and undefined share a group — both are ways of not working, and
 * splitting them produces two one-item headings on most pages. */
const GROUP_ORDER = [
  { key: 'holds',       heading: 'Unconditional', verdicts: ['holds'] },
  { key: 'conditional', heading: 'Conditional',   verdicts: ['conditional'] },
  { key: 'broken',      heading: 'Fails or undefined', verdicts: ['fails', 'undefined'] },
];

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.plc-root.plc-t-' + key + '{' +
      '--plc-paper:' + t.paper + ';--plc-ink:' + t.ink + ';--plc-muted:' + t.muted + ';' +
      '--plc-line:' + t.line + ';--plc-accent:' + t.accent + ';--plc-soft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root ---------- */
  '.plc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--plc-ink);background:var(--plc-paper);max-width:880px;margin:28px auto;}' +
  '.plc-root *,.plc-root *::before,.plc-root *::after{box-sizing:border-box;}' +
  '.plc-root a{color:var(--plc-accent);text-underline-offset:2px;' +
  'text-decoration-thickness:1px;}' +

  /* ---------- masthead ---------- */
  '.plc-mast{background:var(--plc-ink);color:var(--plc-paper);padding:20px 24px 18px;' +
  'position:relative;}' +
  '.plc-mast::after{content:\'\';position:absolute;left:24px;right:24px;bottom:0;height:3px;' +
  'background:var(--plc-accent);}' +
  '.plc-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.68;}' +
  '.plc-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:22px;' +
  'letter-spacing:-.03em;margin:6px 0 0;line-height:1.06;}' +
  '.plc-intro{font-size:12.5px;margin:8px 0 0;max-width:460px;opacity:.82;}' +
  '.plc-mast-r{position:absolute;right:24px;top:18px;display:flex;flex-direction:column;' +
  'align-items:flex-end;gap:10px;}' +
  '.plc-tally{text-align:right;font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.plc-tally b{display:block;font-size:26px;font-weight:800;line-height:1;' +
  'letter-spacing:-.04em;}' +
  '.plc-tally span{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.68;}' +
  '.plc-tally.is-gap b{color:var(--plc-accent);}' +

  /* view toggle */
  '.plc-vtog{display:flex;border:1px solid rgba(255,255,255,.38);}' +
  '.plc-vtog button{background:none;border:0;padding:5px 10px;cursor:pointer;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--plc-paper);opacity:.62;' +
  'transition:background .12s,opacity .12s,color .12s;}' +
  '.plc-vtog button:hover{opacity:1;}' +
  '.plc-vtog button:focus-visible{outline:2px solid var(--plc-paper);outline-offset:-2px;}' +
  '.plc-vtog button.is-on{background:var(--plc-paper);color:var(--plc-ink);opacity:1;}' +

  /* ---------- verdict pill ---------- */
  '.plc-vd{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.13em;text-transform:uppercase;padding:4px 8px;' +
  'white-space:nowrap;}' +
  '.plc-vd.v-holds{background:var(--plc-ink);color:var(--plc-paper);}' +
  '.plc-vd.v-conditional{background:transparent;color:var(--plc-ink);' +
  'border:1px solid var(--plc-ink);}' +
  '.plc-vd.v-fails{background:var(--plc-accent);color:var(--plc-paper);}' +
  '.plc-vd.v-undefined{background:var(--plc-soft);color:var(--plc-accent);' +
  'border:1px dashed var(--plc-accent);}' +

  /* ---------- views ---------- */
  '.plc-view{display:none;}' +
  '.plc-root[data-view="list"] .plc-view-list{display:block;}' +
  '.plc-root[data-view="detail"] .plc-view-detail{display:grid;}' +

  /* ==========================================================
   * list view — semi-accordion
   * ========================================================*/
  '.plc-wrap{border:1px solid var(--plc-line);border-top:none;}' +
  '.plc-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--plc-muted);' +
  'background:var(--plc-soft);padding:7px 20px;border-bottom:1px solid var(--plc-line);' +
  'display:flex;align-items:center;gap:10px;}' +
  '.plc-grp span{margin-left:auto;opacity:.6;}' +

  '.plc-row{border-bottom:1px solid var(--plc-line);}' +
  '.plc-row:last-child{border-bottom:none;}' +

  '.plc-top{display:grid;grid-template-columns:30px 1fr auto;gap:13px;align-items:start;' +
  'padding:13px 20px 12px;}' +
  '.plc-i{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
  'color:var(--plc-muted);padding-top:3px;}' +
  '.plc-mid{min-width:0;}' +
  '.plc-line{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}' +
  '.plc-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14.5px;}' +

  /* An anchored name is a link at rest, not only on hover: accent colour, a
   * solid rule beneath, and a chip naming the section it jumps to. Names with
   * no anchor stay plain ink, and that contrast is what makes the linked ones
   * legible without anyone having to sweep the mouse across the row. */
  '.plc-nm a{color:var(--plc-accent);text-decoration:none;display:inline-flex;' +
  'align-items:center;gap:9px;border-bottom:2px solid var(--plc-accent);' +
  'padding-bottom:2px;' +
  'transition:color .14s,border-color .14s,transform .16s;}' +
  '.plc-nm a:hover{color:var(--plc-ink);border-bottom-color:var(--plc-ink);' +
  'transform:translateX(3px);}' +
  '.plc-nm a:focus-visible{outline:2px solid var(--plc-accent);outline-offset:3px;}' +

  '.plc-go{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.1em;color:var(--plc-accent);background:transparent;' +
  'border:1.5px solid var(--plc-accent);padding:2px 6px;display:inline-flex;' +
  'align-items:center;gap:5px;white-space:nowrap;' +
  'transition:background .14s,color .14s,border-color .14s;}' +
  '.plc-go::after{content:\'\\2192\';font-size:10px;transition:transform .16s;}' +
  '.plc-nm a:hover .plc-go{background:var(--plc-ink);border-color:var(--plc-ink);' +
  'color:var(--plc-paper);}' +
  '.plc-nm a:hover .plc-go::after{transform:translateX(2px);}' +
  '.plc-fx{font-size:13.5px;}' +
  '.plc-ex{font-size:12.5px;color:var(--plc-muted);margin-top:5px;max-width:620px;}' +
  '.plc-row.is-open .plc-ex{display:none;}' +

  '.plc-body{display:none;padding:0 20px 4px 63px;}' +
  '.plc-row.is-open .plc-body{display:block;}' +
  '.plc-body p{margin:0 0 10px;font-size:12.5px;color:var(--plc-muted);}' +
  '.plc-meta{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:0 0 10px;}' +
  '.plc-meta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.15em;text-transform:uppercase;color:var(--plc-muted);}' +
  '.plc-meta dd{margin:0;font-size:12.5px;}' +

  /* ---- expand bar: full width, along the bottom of the row ---- */
  '.plc-more{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;' +
  'padding:7px 20px 9px;background:none;border:0;border-top:1px dotted var(--plc-line);' +
  'cursor:pointer;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--plc-muted);' +
  'transition:background .12s,color .12s;}' +
  '.plc-more:hover{background:var(--plc-soft);color:var(--plc-accent);}' +
  '.plc-more:focus-visible{outline:2px solid var(--plc-accent);outline-offset:-2px;}' +
  '.plc-row.is-open .plc-more{background:var(--plc-soft);}' +

  /* chevron: a single curved stroke, no corner where the halves meet */
  '.plc-chev{display:block;width:28px;height:8px;flex:0 0 28px;overflow:visible;' +
  'transition:transform .22s cubic-bezier(.4,0,.2,1);}' +
  '.plc-chev path{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;}' +
  '.plc-row.is-open .plc-chev{transform:rotate(180deg);}' +

  '.plc-more-less{display:none;}' +
  '.plc-row.is-open .plc-more-more{display:none;}' +
  '.plc-row.is-open .plc-more-less{display:inline;}' +

  '.plc-row.is-static .plc-more{display:none;}' +
  '.plc-row.is-static .plc-top{padding-bottom:13px;}' +

  /* ==========================================================
   * detail view — index and pane
   * ========================================================*/
  '.plc-view-detail{border:1px solid var(--plc-line);border-top:none;' +
  'grid-template-columns:250px 1fr;min-height:330px;}' +
  '.plc-list{border-right:1px solid var(--plc-line);background:var(--plc-soft);}' +
  '.plc-list-grp{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--plc-muted);' +
  'padding:11px 16px 6px;}' +
  '.plc-item{display:grid;grid-template-columns:22px 1fr;gap:9px;align-items:baseline;' +
  'padding:9px 16px;cursor:pointer;border-left:3px solid transparent;background:none;' +
  'border-top:0;border-right:0;border-bottom:0;width:100%;text-align:left;' +
  'font-family:inherit;transition:background .12s;}' +
  '.plc-item:hover{background:var(--plc-paper);}' +
  '.plc-item:focus-visible{outline:2px solid var(--plc-accent);outline-offset:-2px;}' +
  '.plc-item.is-on{background:var(--plc-paper);border-left-color:var(--plc-accent);}' +
  '.plc-item-i{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
  'font-weight:800;color:var(--plc-muted);}' +
  '.plc-item-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;' +
  'font-size:13.5px;color:var(--plc-ink);}' +
  '.plc-item.is-on .plc-item-nm{color:var(--plc-accent);}' +

  '.plc-detail{padding:22px 26px;display:none;}' +
  '.plc-detail.is-on{display:block;}' +
  '.plc-d-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:13px;}' +
  '.plc-d-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:19px;' +
  'letter-spacing:-.02em;}' +
  '.plc-d-nm a{color:var(--plc-accent);text-decoration:none;display:inline-flex;' +
  'align-items:center;gap:11px;border-bottom:2px solid var(--plc-accent);' +
  'padding-bottom:3px;transition:color .14s,border-color .14s,transform .16s;}' +
  '.plc-d-nm a:hover{color:var(--plc-ink);border-bottom-color:var(--plc-ink);' +
  'transform:translateX(3px);}' +
  '.plc-d-nm .plc-go{font-size:10px;padding:3px 8px;}' +
  '.plc-d-fx{font-size:17px;padding:13px 0 13px 18px;border-left:3px solid var(--plc-accent);' +
  'margin-bottom:14px;}' +
  '.plc-d-note{font-size:13px;color:var(--plc-muted);margin-bottom:13px;}' +
  '.plc-d-jump{display:inline-flex;align-items:center;gap:7px;margin-top:4px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
  'letter-spacing:.14em;text-transform:uppercase;color:var(--plc-accent);' +
  'text-decoration:none;border-bottom:1px solid var(--plc-accent);padding-bottom:2px;}' +

  /* ---------- witness ---------- */
  '.plc-wit{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'line-height:1.7;padding:11px 14px;background:var(--plc-soft);' +
  'border-left:3px solid var(--plc-accent);color:var(--plc-ink);}' +
  '.plc-wit b{display:block;font-size:8px;letter-spacing:.14em;text-transform:uppercase;' +
  'color:var(--plc-accent);margin-bottom:6px;font-weight:800;}' +

  /* ---------- footnote ---------- */
  '.plc-foot{border:1px solid var(--plc-line);border-top:none;padding:13px 24px;' +
  'font-size:12.5px;color:var(--plc-muted);}' +

  '.plc-empty{border:1px dashed var(--plc-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--plc-muted);}' +

  /* ==========================================================
   * export state — set by the generator on its capture page
   * ========================================================*/
  '.plc-root[data-diagram-export] .plc-vtog{display:none;}' +
  '.plc-root[data-diagram-export] .plc-view-list{display:block !important;}' +
  '.plc-root[data-diagram-export] .plc-view-detail{display:none !important;}' +
  '.plc-root[data-diagram-export] .plc-body{display:block !important;' +
  'padding-bottom:13px;}' +
  '.plc-root[data-diagram-export] .plc-ex{display:none !important;}' +
  '.plc-root[data-diagram-export] .plc-more{display:none !important;}' +
  /* A printed sheet has nothing to jump to, so the link furniture is noise —
   * the name reads as a heading instead. */
  '.plc-root[data-diagram-export] .plc-go{display:none !important;}' +
  '.plc-root[data-diagram-export] .plc-nm a,' +
  '.plc-root[data-diagram-export] .plc-d-nm a{color:var(--plc-ink) !important;' +
  'border-bottom:none !important;padding-bottom:0 !important;}' +

  /* ---------- responsive ---------- */
  '@media (max-width:760px){' +
  '.plc-view-detail{grid-template-columns:1fr;}' +
  '.plc-list{border-right:none;border-bottom:1px solid var(--plc-line);}' +
  '.plc-mast-r{position:static;flex-direction:row;align-items:center;' +
  'justify-content:space-between;margin-top:14px;}' +
  '}' +
  '@media (max-width:640px){' +
  '.plc-root{margin:20px auto;}' +
  '.plc-mast{padding:18px 16px 16px;}' +
  '.plc-mast::after{left:16px;right:16px;}' +
  '.plc-title{font-size:19px;}' +
  '.plc-top{grid-template-columns:24px 1fr;padding:12px 16px;}' +
  '.plc-vd{grid-column:2;justify-self:start;margin-top:6px;}' +
  '.plc-body{padding-left:16px;}' +
  '.plc-detail{padding:18px 16px;}' +
  '.plc-foot{padding:12px 16px;}' +
  '}';

  return css;
}

const PLC_CSS = buildCss();

/* ============================================================================
 * HELPERS — every derivation happens here
 * ==========================================================================*/
function normaliseVerdict(law) {
  if (law.verdict) return law.verdict;
  if (law.failsWhen || law.witness) return 'fails';
  if (law.holdsWhen || law.requires) return 'conditional';
  return 'holds';
}

function romanise(n) {
  const map = [[10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']];
  let out = '';
  let rest = n;
  for (let i = 0; i < map.length; i++) {
    while (rest >= map[i][0]) {
      out += map[i][1];
      rest -= map[i][0];
    }
  }
  return out;
}

function padIndex(n) {
  return n < 10 ? '0' + n : String(n);
}

function witnessLines(witness) {
  if (!witness) return null;
  if (typeof witness === 'string') return { label: 'Witness', lines: [witness] };
  return {
    label: witness.label || 'Witness',
    lines: witness.lines || (witness.text ? [witness.text] : []),
  };
}

/* Turn a TeX fragment into something readable as prose. Commands are replaced
 * by the symbol they render, braces dropped, the rest discarded — an excerpt
 * carrying `\mathbf{a} \times \mathbf{a}` is worse than one carrying nothing. */
const TEX_SYMBOLS = [
  [/\\times/g, '\u00D7'], [/\\cdot/g, '\u00B7'], [/\\div/g, '\u00F7'],
  [/\\pm/g, '\u00B1'], [/\\mp/g, '\u2213'],
  [/\\neq/g, '\u2260'], [/\\leq/g, '\u2264'], [/\\geq/g, '\u2265'],
  [/\\approx/g, '\u2248'], [/\\equiv/g, '\u2261'],
  [/\\nRightarrow/g, '\u21CF'], [/\\Rightarrow/g, '\u21D2'],
  [/\\rightarrow|\\to/g, '\u2192'], [/\\iff/g, '\u21D4'],
  [/\\in\b/g, '\u2208'], [/\\notin/g, '\u2209'],
  [/\\subset/g, '\u2282'], [/\\subseteq/g, '\u2286'],
  [/\\cup/g, '\u222A'], [/\\cap/g, '\u2229'],
  [/\\emptyset|\\varnothing/g, '\u2205'], [/\\infty/g, '\u221E'],
  [/\\sum/g, '\u2211'], [/\\prod/g, '\u220F'], [/\\sqrt/g, '\u221A'],
  [/\\perp/g, '\u22A5'], [/\\parallel/g, '\u2225'], [/\\angle/g, '\u2220'],
  [/\\lambda/g, '\u03BB'], [/\\sigma/g, '\u03C3'], [/\\theta/g, '\u03B8'],
  [/\\alpha/g, '\u03B1'], [/\\beta/g, '\u03B2'], [/\\delta/g, '\u03B4'],
  [/\\Sigma/g, '\u03A3'], [/\\Lambda/g, '\u039B'], [/\\Delta/g, '\u0394'],
  [/\\mathbb\{R\}/g, '\u211D'], [/\\mathbb\{C\}/g, '\u2102'],
  [/\\mathbb\{Z\}/g, '\u2124'], [/\\mathbb\{Q\}/g, '\u211A'],
  [/\\mathbb\{N\}/g, '\u2115'],
  [/\\operatorname\{([^}]*)\}/g, '$1'],
  [/\\text\{([^}]*)\}/g, '$1'],
  [/\\mathbf\{([^}]*)\}/g, '$1'],
  [/\\mathsf\{([^}]*)\}/g, '$1'],
  [/\\mathrm\{([^}]*)\}/g, '$1'],
  [/\\vec\{([^}]*)\}/g, '$1'],
  [/\\left|\\right/g, ''],
  [/\\,|\\;|\\!|\\quad|\\qquad/g, ' '],
];

function detex(tex) {
  let out = String(tex);
  TEX_SYMBOLS.forEach(function (pair) {
    out = out.replace(pair[0], pair[1]);
  });
  return out
    .replace(/\\[a-zA-Z]+/g, '')   // any command left over
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/* Strip markup and math so the excerpt is plain prose, then cut at the first
 * sentence. Anything longer than `limit` is truncated on a word boundary. */
function makeExcerpt(note, limit) {
  if (!note) return '';

  const plain = String(note)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')            // links → their text
    .replace(/\$\$([\s\S]*?)\$\$/g, function (m, body) { return detex(body); })
    .replace(/\$([^$]*)\$/g, function (m, body) { return detex(body); })
    .replace(/[*`_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  /* Cut at the first sentence end, ignoring one inside a bracket. */
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

/* Turn '#4' into '\u00A7 4' for the chip. A non-numeric anchor keeps its own
 * text, so '#the-cyclic-property' reads as written rather than being mangled. */
function anchorLabel(anchor, explicit) {
  if (explicit) return explicit;

  const raw = String(anchor).replace(/^#/, '');
  if (/^\d+$/.test(raw)) return '\u00A7 ' + raw;

  return raw.replace(/[-_]+/g, ' ');
}

/* Wrap a name in a link to its page section when one is given. Anchors are the
 * point of this component on a properties page — the card indexes the sections
 * rather than restating them, so the link has to be visible at rest and has to
 * say where it goes. A law with no anchor renders as plain text. */
function nameNode(law) {
  if (!law.anchor) return law.name;

  return (
    <a href={law.anchor}>
      {law.name}
      <span className="plc-go">{anchorLabel(law.anchor, law.anchorLabel)}</span>
    </a>
  );
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data          – one flat object
 *   theme         – 'navy'
 *   defaultView   – 'list' (default) | 'detail'
 *   showToggle    – boolean, default true
 *   excerptLength – characters before truncation, default 96
 *   maxWidth      – override the 880px default
 *
 * data shape
 *   {
 *     kicker, title, intro, footnote, tallyLabel,
 *     laws: [{
 *       name, statement, anchor, anchorLabel,
 *       verdict?: 'holds'|'conditional'|'fails'|'undefined',
 *       verdictLabel?,
 *       requires?, holdsWhen?, failsWhen?, commonError?,
 *       excerpt?,                     // overrides the generated one
 *       note?,                        // rich text
 *       witness?: string | { label, lines[] }
 *     }]
 *   }
 * ==========================================================================*/
export default function PropertyLawCard(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const showToggle = props.showToggle !== false;
  const excerptLength = props.excerptLength || 96;
  const maxWidth = props.maxWidth;

  const [view, setView] = React.useState(
    props.defaultView === 'detail' ? 'detail' : 'list'
  );
  const [openRows, setOpenRows] = React.useState({});
  const [selected, setSelected] = React.useState(0);

  const rootClass = 'plc-root plc-t-' + theme;
  const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

  if (!data || !data.laws || data.laws.length === 0) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
        <div className="plc-empty">PropertyLawCard: no laws supplied</div>
      </div>
    );
  }

  /* -- derive everything once -- */
  const laws = data.laws.map(function (law, i) {
    const verdict = normaliseVerdict(law);
    const witness = witnessLines(law.witness);
    const excerpt = law.excerpt || makeExcerpt(law.note, excerptLength);

    /* A row is static when opening it would add nothing: no witness, no extra
     * fields, and the excerpt already carries the whole note. */
    const noteLength = law.note ? String(law.note).length : 0;
    const meta = [
      law.requires    ? { term: 'Requires',     value: law.requires }    : null,
      law.holdsWhen   ? { term: 'Holds when',   value: law.holdsWhen }   : null,
      law.failsWhen   ? { term: 'Fails when',   value: law.failsWhen }   : null,
      law.commonError ? { term: 'Common error', value: law.commonError } : null,
    ].filter(Boolean);

    const isStatic =
      !witness && meta.length === 0 && noteLength - excerpt.length < 60;

    return {
      key: law.id || 'law-' + i,
      index: i,
      raw: law,
      verdict: verdict,
      badgeLabel: law.verdictLabel || VERDICT_LABELS[verdict],
      excerpt: excerpt,
      witness: witness,
      meta: meta,
      isStatic: isStatic,
      hasAnchor: !!law.anchor,
    };
  });

  const groups = GROUP_ORDER
    .map(function (g) {
      return {
        key: g.key,
        heading: g.heading,
        items: laws.filter(function (l) {
          return g.verdicts.indexOf(l.verdict) !== -1;
        }),
      };
    })
    .filter(function (g) { return g.items.length > 0; });

  const missingAnchors = laws.filter(function (l) { return !l.hasAnchor; }).length;

  function toggleRow(key) {
    setOpenRows(function (prev) {
      const next = {};
      Object.keys(prev).forEach(function (k) { next[k] = prev[k]; });
      next[key] = !next[key];
      return next;
    });
  }

  /* ---------------- shared pieces ---------------- */

  const chevron = (
    <svg className="plc-chev" viewBox="0 0 28 8" aria-hidden="true">
      <path d="M1 1.5 C 7 1.5, 10 6.5, 14 6.5 C 18 6.5, 21 1.5, 27 1.5" />
    </svg>
  );

  const masthead = (
    <div className="plc-mast">
      {data.kicker ? <div className="plc-kicker">{data.kicker}</div> : null}
      {data.title ? <h3 className="plc-title">{data.title}</h3> : null}
      {data.intro ? <p className="plc-intro">{processContent(data.intro)}</p> : null}

      <div className="plc-mast-r">
        <div className={'plc-tally' + (missingAnchors > 0 ? ' is-gap' : '')}>
          <b>{padIndex(laws.length)}</b>
          <span>{data.tallyLabel || 'entries'}</span>
        </div>

        {showToggle ? (
          <div className="plc-vtog" role="group" aria-label="View">
            <button
              type="button"
              className={view === 'list' ? 'is-on' : ''}
              onClick={function () { setView('list'); }}
            >
              List
            </button>
            <button
              type="button"
              className={view === 'detail' ? 'is-on' : ''}
              onClick={function () { setView('detail'); }}
            >
              Detail
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );

  function bodyContent(l) {
    return (
      <>
        {l.meta.length > 0 ? (
          <dl className="plc-meta">
            {l.meta.map(function (m, mi) {
              return (
                <React.Fragment key={mi}>
                  <dt>{m.term}</dt>
                  <dd>{processContent(m.value)}</dd>
                </React.Fragment>
              );
            })}
          </dl>
        ) : null}

        {l.raw.note ? <p>{processContent(l.raw.note)}</p> : null}

        {l.witness ? (
          <div className="plc-wit">
            <b>{l.witness.label}</b>
            {l.witness.lines.map(function (line, li) {
              return (
                <React.Fragment key={li}>
                  {processContent(line)}
                  {li < l.witness.lines.length - 1 ? <br /> : null}
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </>
    );
  }

  /* ---------------- list view ---------------- */

  const listView = (
    <div className="plc-view plc-view-list">
      <div className="plc-wrap">
        {groups.map(function (g) {
          return (
            <React.Fragment key={g.key}>
              <div className="plc-grp">
                {g.heading}
                <span>{g.items.length}</span>
              </div>

              {g.items.map(function (l) {
                const open = !!openRows[l.key];
                return (
                  <div
                    key={l.key}
                    className={
                      'plc-row' +
                      (l.isStatic ? ' is-static' : '') +
                      (open ? ' is-open' : '')
                    }
                  >
                    <div className="plc-top">
                      <span className="plc-i">{romanise(l.index + 1)}</span>
                      <div className="plc-mid">
                        <div className="plc-line">
                          <span className="plc-nm">{nameNode(l.raw)}</span>
                          <span className="plc-fx">
                            {processContent(l.raw.statement)}
                          </span>
                        </div>
                        {l.excerpt ? (
                          <div className="plc-ex">{l.excerpt}</div>
                        ) : null}
                      </div>
                      <span className={'plc-vd v-' + l.verdict}>{l.badgeLabel}</span>
                    </div>

                    <div className="plc-body">{bodyContent(l)}</div>

                    {l.isStatic ? null : (
                      <button
                        type="button"
                        className="plc-more"
                        onClick={function () { toggleRow(l.key); }}
                        aria-expanded={open}
                      >
                        <span className="plc-more-more">Read more</span>
                        <span className="plc-more-less">Show less</span>
                        {chevron}
                      </button>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  /* ---------------- detail view ---------------- */

  const detailView = (
    <div className="plc-view plc-view-detail">
      <div className="plc-list">
        {groups.map(function (g) {
          return (
            <React.Fragment key={g.key}>
              <div className="plc-list-grp">{g.heading}</div>
              {g.items.map(function (l) {
                return (
                  <button
                    key={l.key}
                    type="button"
                    className={'plc-item' + (selected === l.index ? ' is-on' : '')}
                    onClick={function () { setSelected(l.index); }}
                  >
                    <span className="plc-item-i">{romanise(l.index + 1)}</span>
                    <span className="plc-item-nm">{l.raw.name}</span>
                  </button>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>

      <div>
        {laws.map(function (l) {
          return (
            <div
              key={l.key}
              className={'plc-detail' + (selected === l.index ? ' is-on' : '')}
            >
              <div className="plc-d-head">
                <span className="plc-d-nm">{nameNode(l.raw)}</span>
                <span className={'plc-vd v-' + l.verdict}>{l.badgeLabel}</span>
              </div>

              <div className="plc-d-fx">{processContent(l.raw.statement)}</div>

              {l.meta.length > 0 ? (
                <dl className="plc-meta">
                  {l.meta.map(function (m, mi) {
                    return (
                      <React.Fragment key={mi}>
                        <dt>{m.term}</dt>
                        <dd>{processContent(m.value)}</dd>
                      </React.Fragment>
                    );
                  })}
                </dl>
              ) : null}

              {l.raw.note ? (
                <div className="plc-d-note">{processContent(l.raw.note)}</div>
              ) : null}

              {l.witness ? (
                <div className="plc-wit">
                  <b>{l.witness.label}</b>
                  {l.witness.lines.map(function (line, li) {
                    return (
                      <React.Fragment key={li}>
                        {processContent(line)}
                        {li < l.witness.lines.length - 1 ? <br /> : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : null}

              {l.hasAnchor ? (
                <a className="plc-d-jump" href={l.raw.anchor}>
                  Read the full section
                </a>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className={rootClass}
      style={rootStyle}
      data-view={view}
      data-missing-anchors={missingAnchors || undefined}
    >
      <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
      {masthead}
      {listView}
      {detailView}
      {data.footnote ? (
        <div className="plc-foot">{processContent(data.footnote)}</div>
      ) : null}
    </div>
  );
}

export { THEMES as PLC_THEMES, VERDICT_LABELS };