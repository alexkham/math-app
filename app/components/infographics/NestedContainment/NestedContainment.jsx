/*
  NestedContainment.jsx

  Levels that sit inside one another: each level is a strict subset of the level around it.
  Drawn as boxes inside boxes, innermost (the core) at the centre, with an optional chain
  line on top (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ). Each level can fold open for details.

  No 'use client': the folding details use native <details>.
  Class prefix: nc-
  Every text field: strings go through processContent ($math$, **bold**, @[code]@,
  [label](!/path)); ReactNodes pass through untouched.
  Full reference: NestedContainment.md
*/

import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const isEmpty = (v) => v === undefined || v === null || v === '' || v === false;
const rc = (v) => (isEmpty(v) ? null : typeof v === 'string' ? processContent(v) : v);
const paras = (v) => (Array.isArray(v) ? v.map((p, i) => <p key={i}>{rc(p)}</p>) : rc(v));
const cls = (...a) => a.filter(Boolean).join(' ');

export const DEFAULT_THEME = {
  bg:          '#ffffff',   // frame background
  ink:         '#0f172a',   // body text
  muted:       '#64748b',   // examples, chain separators
  title:       '#06357A',   // level names, symbols, chain
  border:      '#9bb3ee',   // box borders
  fillA:       '#f5f8ff',   // alternating box fills (outermost = fillA)
  fillB:       '#ffffff',
  coreFill:    '#e8eefc',   // innermost box
  coreBorder:  '#2563EB',
  highlight:   '#B45309',   // the `adds` word
  link:        '#2563EB',
  font:        "'Inter', system-ui, -apple-system, sans-serif",
  mono:        "'JetBrains Mono', ui-monospace, monospace",
  math:        "'Cambria Math', 'STIX Two Math', 'Times New Roman', serif",
};

const cssVars = (t) => ({
  '--nc-bg': t.bg, '--nc-ink': t.ink, '--nc-muted': t.muted, '--nc-title': t.title,
  '--nc-border': t.border, '--nc-core-fill': t.coreFill, '--nc-core-border': t.coreBorder,
  '--nc-highlight': t.highlight, '--nc-link': t.link,
  '--nc-font': t.font, '--nc-mono': t.mono, '--nc-math': t.math,
});

/* ---------- neutral bordered text blocks (same look as Hierarchy / TopDownTree) ---------- */

function ProseBlock({ label, title, body, where }) {
  if (isEmpty(label) && isEmpty(title) && isEmpty(body)) return null;
  return (
    <div className={cls('nc-prose', 'nc-prose-' + where, !isEmpty(label) && 'nc-prose-labelled')}>
      {!isEmpty(label) && <span className="nc-prose-label">{rc(label)}</span>}
      {!isEmpty(title) && <div className="nc-prose-title">{rc(title)}</div>}
      {!isEmpty(body) && <div className="nc-prose-body">{paras(body)}</div>}
    </div>
  );
}

/* ---------- one level's header row ---------- */

function Head({ lv }) {
  const hasAdds = !isEmpty(lv.adds) || !isEmpty(lv.note);
  return (
    <div className="nc-hd">
      <div className={cls('nc-sym', typeof lv.symbol === 'string' && lv.symbol.replace(/\$/g, '').length > 3 && 'nc-sym-long')} style={!isEmpty(lv.textColor) ? { color: lv.textColor } : undefined}>{rc(lv.symbol)}</div>
      <div className="nc-mid">
        {!isEmpty(lv.name) && <div className="nc-name" style={!isEmpty(lv.textColor) ? { color: lv.textColor } : undefined}>{rc(lv.name)}</div>}
        {hasAdds && (
          <div className="nc-adds">
            {!isEmpty(lv.adds) && <>{!isEmpty(lv.addsLabel) ? rc(lv.addsLabel) : 'adds'} <em>{rc(lv.adds)}</em></>}
            {!isEmpty(lv.adds) && !isEmpty(lv.note) && <span className="nc-dot"> · </span>}
            {!isEmpty(lv.note) && rc(lv.note)}
          </div>
        )}
      </div>
      {!isEmpty(lv.example) && <div className="nc-ex">{rc(lv.example)}</div>}
    </div>
  );
}

/* ---------- recursive box: level i contains level i-1 (levels are innermost first) ---------- */

function Box({ levels, i, depthFromOuter, t }) {
  const lv = levels[i];
  const core = i === 0;
  const style = {};
  const fill = !isEmpty(lv.color) ? lv.color : core ? t.coreFill : depthFromOuter % 2 === 0 ? t.fillA : t.fillB;
  style.background = fill;
  if (!isEmpty(lv.borderColor)) style.borderColor = lv.borderColor;
  else if (core) style.borderColor = t.coreBorder;
  if (!isEmpty(lv.font)) style.fontFamily = lv.font;
  if (!isEmpty(lv.bodyTextColor)) style.color = lv.bodyTextColor;

  return (
    <div className={cls('nc-box', core && 'nc-core', i < levels.length - 1 && 'nc-inner')} style={style}>
      {isEmpty(lv.details) ? (
        <Head lv={lv} />
      ) : (
        <details className="nc-more" open={!!lv.open}>
          <summary><Head lv={lv} /></summary>
          <div className="nc-more-body">{paras(lv.details)}</div>
        </details>
      )}
      {i > 0 && <Box levels={levels} i={i - 1} depthFromOuter={depthFromOuter + 1} t={t} />}
    </div>
  );
}

/* ---------- component ---------- */

export default function NestedContainment({ data, theme }) {
  const d = data || {};
  const t = { ...DEFAULT_THEME, ...(theme || {}), ...(d.colors || {}) };
  if (!isEmpty(d.font)) t.font = d.font;
  const levels = Array.isArray(d.levels) ? d.levels : [];
  const showChain = d.chain !== false && levels.length > 1;
  const sep = !isEmpty(d.chainSymbol) ? d.chainSymbol : '⊂';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="nc-root" style={cssVars(t)}>
        <ProseBlock where="pre" label={d.prefaceLabel} title={d.prefaceTitle} body={d.preface} />

        {showChain && (
          <p className="nc-chain">
            {typeof d.chain === 'string'
              ? rc(d.chain)
              : levels.map((lv, i) => (
                  <React.Fragment key={lv.id || i}>
                    {i > 0 && <span className="nc-sep">{rc(sep)}</span>}
                    <span className="nc-chain-item">{rc(lv.symbol)}</span>
                  </React.Fragment>
                ))}
          </p>
        )}

        {levels.length > 0 && <Box levels={levels} i={levels.length - 1} depthFromOuter={0} t={t} />}

        <ProseBlock where="con" label={d.conclusionLabel} title={d.conclusionTitle} body={d.conclusion} />
      </div>
    </>
  );
}

/* ---------- scoped CSS ---------- */

const CSS = `
.nc-root{background:var(--nc-bg);color:var(--nc-ink);font-family:var(--nc-font);line-height:1.5}
.nc-root *,.nc-root *::before,.nc-root *::after{box-sizing:border-box}

/* preface / conclusion */
.nc-prose{background:#ffffff;border:2px solid #94a3b8;border-radius:14px;padding:16px 20px}
.nc-prose-labelled{padding-top:22px}
.nc-prose-pre{margin:8px 0 30px}
.nc-prose-con{margin:30px 0 0}
.nc-prose-label{display:table;margin:-33px 0 12px -4px;background:#ffffff;padding:0 8px;font-family:var(--nc-mono);font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#334155;line-height:18px}
.nc-prose-label *,.nc-prose-title *{margin:0!important;padding:0;display:inline}
.nc-prose-title{font-size:16px;font-weight:600;color:#0f172a;margin-bottom:4px}
.nc-prose-body{font-size:14.5px;line-height:1.6;color:#334155}
.nc-prose-body p{margin:0 0 8px}
.nc-prose-body p:last-child{margin-bottom:0}

/* chain line */
.nc-chain{font-family:var(--nc-math);font-size:24px;color:var(--nc-title);text-align:center;margin:0 0 20px;letter-spacing:.04em}
.nc-sep{color:var(--nc-muted);padding:0 8px}

/* boxes */
.nc-box{border:1.5px solid var(--nc-border);border-radius:16px;padding:14px 16px 16px}
.nc-box > .nc-box{margin-top:12px}
.nc-core{border-width:2px}
.nc-hd{display:grid;grid-template-columns:minmax(48px,max-content) minmax(0,1fr) auto;gap:14px;align-items:baseline}
.nc-sym{font-family:var(--nc-math);font-size:30px;color:var(--nc-title);line-height:1;white-space:nowrap}
.nc-sym.nc-sym-long{font-size:20px}
.nc-name{font-weight:700;color:var(--nc-title);font-size:15px}
.nc-name a{color:inherit!important;text-decoration:underline;text-underline-offset:3px}
.nc-adds{font-size:13px;color:var(--nc-ink);margin-top:2px}
.nc-adds em{font-style:normal;color:var(--nc-highlight);font-weight:600}
.nc-adds a{color:var(--nc-link)}
.nc-dot{color:var(--nc-muted)}
.nc-ex{font-family:var(--nc-mono);font-size:12px;color:var(--nc-muted);text-align:right;white-space:nowrap}

/* folding details */
.nc-more > summary{list-style:none;cursor:pointer}
.nc-more > summary::-webkit-details-marker{display:none}
.nc-more > summary .nc-name::after{content:' +';font-family:var(--nc-mono);font-weight:600;color:var(--nc-muted);font-size:12px}
.nc-more[open] > summary .nc-name::after{content:' −'}
.nc-more-body{margin:8px 0 0 0;padding:8px 12px;border-radius:8px;background:#f8fafc;border:1px solid #e2e8f0;font-size:13px;line-height:1.55;color:var(--nc-ink)}
.nc-more-body p{margin:0 0 6px}
.nc-more-body p:last-child{margin-bottom:0}

@media (max-width:640px){
  .nc-hd{grid-template-columns:36px minmax(0,1fr)}
  .nc-ex{grid-column:2;text-align:left;white-space:normal}
  .nc-box{padding:12px 10px 12px}
  .nc-more-body{margin-left:0}
}
`;
