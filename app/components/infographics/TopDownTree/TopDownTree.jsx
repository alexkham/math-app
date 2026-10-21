/*
  TopDownTree.jsx

  One parent, its child siblings below it, joined by connector lines. Each child is a card
  with a head (name, symbol) and a list of items; an item with `details` folds open.

  No 'use client': the expandable items use native <details>, so no state is needed.
  Class prefix: tdt-
  Every text field: strings go through processContent ($math$, **bold**, @[code]@,
  [label](!/path)); ReactNodes pass through untouched.
  Full reference: TopDownTree.md
*/

import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const isEmpty = (v) => v === undefined || v === null || v === '' || v === false;
const rc = (v) => (isEmpty(v) ? null : typeof v === 'string' ? processContent(v) : v);
const paras = (v) => (Array.isArray(v) ? v.map((p, i) => <p key={i}>{rc(p)}</p>) : rc(v));
const cls = (...a) => a.filter(Boolean).join(' ');

export const DEFAULT_THEME = {
  bg:         '#ffffff',   // frame background
  ink:        '#0f172a',   // body text
  muted:      '#64748b',   // item labels, secondary text
  line:       '#e2e8f0',   // dividers inside cards
  connector:  '#9bb3ee',   // tree lines
  rootBg:     '#06357A',   // root block
  rootText:   '#ffffff',
  rootSub:    '#bfd0f5',
  cardBorder: '#9bb3ee',
  headBg:     '#e8eefc',   // card head fill
  headText:   '#06357A',
  symbol:     '#2563EB',   // symbol in the card head
  link:       '#2563EB',
  flagBorder: '#B45309',   // flagged card
  flagHead:   '#fffbeb',
  warnBg:     '#fffbeb',   // warning strip
  warnText:   '#92400e',
  warnLine:   '#f2d48a',
  font:       "'Inter', system-ui, -apple-system, sans-serif",
  mono:       "'JetBrains Mono', ui-monospace, monospace",
};

const cssVars = (t) => ({
  '--tdt-bg': t.bg, '--tdt-ink': t.ink, '--tdt-muted': t.muted, '--tdt-line': t.line,
  '--tdt-connector': t.connector, '--tdt-root-bg': t.rootBg, '--tdt-root-text': t.rootText,
  '--tdt-root-sub': t.rootSub, '--tdt-card-border': t.cardBorder, '--tdt-head-bg': t.headBg,
  '--tdt-head-text': t.headText, '--tdt-symbol': t.symbol, '--tdt-link': t.link,
  '--tdt-flag-border': t.flagBorder, '--tdt-flag-head': t.flagHead, '--tdt-warn-bg': t.warnBg,
  '--tdt-warn-text': t.warnText, '--tdt-warn-line': t.warnLine,
  '--tdt-font': t.font, '--tdt-mono': t.mono,
});

/* per-node colour overrides from the data: color (fill), textColor, font */
function nodeStyle(n, fill, text) {
  const s = {};
  if (!isEmpty(n.color)) s[fill] = n.color;
  if (!isEmpty(n.textColor)) s[text] = n.textColor;
  if (!isEmpty(n.font)) s.fontFamily = n.font;
  return s;
}

/* ---------- neutral bordered text blocks (same look as Hierarchy's) ---------- */

function ProseBlock({ label, title, body, where }) {
  if (isEmpty(label) && isEmpty(title) && isEmpty(body)) return null;
  return (
    <div className={cls('tdt-prose', 'tdt-prose-' + where, !isEmpty(label) && 'tdt-prose-labelled')}>
      {!isEmpty(label) && <span className="tdt-prose-label">{rc(label)}</span>}
      {!isEmpty(title) && <div className="tdt-prose-title">{rc(title)}</div>}
      {!isEmpty(body) && <div className="tdt-prose-body">{paras(body)}</div>}
    </div>
  );
}

/* ---------- card items: plain row, or a folding row when `details` is present ---------- */

function Item({ it }) {
  const head = (
    <>
      {!isEmpty(it.label) && <span className="tdt-k">{rc(it.label)}</span>}
      {!isEmpty(it.text) && <span className="tdt-v">{rc(it.text)}</span>}
    </>
  );
  if (isEmpty(it.details)) {
    return <div className="tdt-row" style={nodeStyle(it, 'background', 'color')}>{head}</div>;
  }
  return (
    <details className="tdt-row tdt-more" open={!!it.open} style={nodeStyle(it, 'background', 'color')}>
      <summary>{head}</summary>
      <div className="tdt-more-body">{paras(it.details)}</div>
    </details>
  );
}

function Card({ c }) {
  const headStyle = {};
  if (!isEmpty(c.color)) headStyle.background = c.color;
  if (!isEmpty(c.textColor)) headStyle.color = c.textColor;
  const cardStyle = {};
  if (!isEmpty(c.borderColor)) cardStyle.borderColor = c.borderColor;
  if (!isEmpty(c.font)) cardStyle.fontFamily = c.font;
  if (!isEmpty(c.bodyColor)) cardStyle.background = c.bodyColor;
  if (!isEmpty(c.bodyTextColor)) cardStyle.color = c.bodyTextColor;
  return (
    <div className={cls('tdt-card', c.flag && 'tdt-flag')} style={cardStyle}>
      <div className="tdt-head" style={headStyle}>
        <span className="tdt-name">{rc(c.name)}</span>
        {!isEmpty(c.symbol) && <span className="tdt-sym" style={!isEmpty(c.textColor) ? { color: c.textColor } : undefined}>{rc(c.symbol)}</span>}
        {!isEmpty(c.sub) && <span className="tdt-sub">{rc(c.sub)}</span>}
      </div>
      {(c.items || []).map((it, i) => <Item key={it.id || i} it={it} />)}
      {!isEmpty(c.warn) && <p className="tdt-warn">{rc(c.warn)}</p>}
    </div>
  );
}

/* ---------- component ---------- */

export default function TopDownTree({ data, theme }) {
  const d = data || {};
  const t = { ...DEFAULT_THEME, ...(theme || {}), ...(d.colors || {}) };
  if (!isEmpty(d.font)) t.font = d.font;
  const root = d.root || {};
  const kids = Array.isArray(d.children) ? d.children : [];
  const minW = Math.max(kids.length, 1) * 140;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tdt-root" style={cssVars(t)}>
        <ProseBlock where="pre" label={d.prefaceLabel} title={d.prefaceTitle} body={d.preface} />

        <div className="tdt-scroll">
          <div className="tdt-tree" style={{ minWidth: minW + 'px' }}>
            <div className="tdt-top" style={nodeStyle(root, 'background', 'color')}>
              <span className="tdt-top-name">{rc(root.name)}</span>
              {!isEmpty(root.sub) && <span className="tdt-top-sub" style={!isEmpty(root.textColor) ? { color: root.textColor, opacity: 0.8 } : undefined}>{rc(root.sub)}</span>}
            </div>
            {kids.length > 0 && (
              <>
                <div className="tdt-stem" />
                {kids.length > 1 && (
                  <div className="tdt-rail" style={{ marginLeft: 50 / kids.length + '%', marginRight: 50 / kids.length + '%' }} />
                )}
                <div className="tdt-row-kids" style={{ gridTemplateColumns: 'repeat(' + kids.length + ', minmax(0, 1fr))' }}>
                  {kids.map((c, i) => (
                    <div className="tdt-kid" key={c.id || i}>
                      <div className="tdt-tick" />
                      <Card c={c} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {Array.isArray(d.legend) && d.legend.length > 0 && (
          <div className="tdt-legend">
            {d.legend.map((l, i) => (
              <span key={i}>
                <i className="tdt-sw" style={{ background: l.color || (l.tone === 'warn' ? t.warnBg : t.headBg), borderColor: l.border || (l.tone === 'warn' ? t.flagBorder : t.cardBorder) }} />
                {rc(l.label)}
              </span>
            ))}
          </div>
        )}

        <ProseBlock where="con" label={d.conclusionLabel} title={d.conclusionTitle} body={d.conclusion} />
      </div>
    </>
  );
}

/* ---------- scoped CSS ---------- */

const CSS = `
.tdt-root{background:var(--tdt-bg);color:var(--tdt-ink);font-family:var(--tdt-font);line-height:1.5}
.tdt-root *,.tdt-root *::before,.tdt-root *::after{box-sizing:border-box}

/* preface / conclusion */
.tdt-prose{background:#ffffff;border:2px solid #94a3b8;border-radius:14px;padding:16px 20px}
.tdt-prose-labelled{padding-top:22px}
.tdt-prose-pre{margin:8px 0 34px}
.tdt-prose-con{margin:34px 0 0}
.tdt-prose-label{display:table;margin:-33px 0 12px -4px;background:#ffffff;padding:0 8px;font-family:var(--tdt-mono);font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#334155;line-height:18px}
.tdt-prose-label *,.tdt-prose-title *{margin:0!important;padding:0;display:inline}
.tdt-prose-title{font-size:16px;font-weight:600;color:#0f172a;margin-bottom:4px}
.tdt-prose-body{font-size:14.5px;line-height:1.6;color:#334155}
.tdt-prose-body p{margin:0 0 8px}
.tdt-prose-body p:last-child{margin-bottom:0}

/* tree: in-flow connector pieces (no absolute positioning, so downloads match the page) */
.tdt-scroll{overflow-x:auto;padding-bottom:4px}
.tdt-tree{display:flex;flex-direction:column;align-items:stretch}
.tdt-stem{width:1.5px;height:22px;background:var(--tdt-connector);margin:0 auto}
.tdt-rail{height:0;border-top:1.5px solid var(--tdt-connector)}
.tdt-row-kids{display:grid;gap:0;align-items:stretch}
.tdt-kid{display:flex;flex-direction:column;align-items:center;min-width:0;padding:0 6px}
.tdt-tick{width:1.5px;height:22px;background:var(--tdt-connector);flex:none}

/* root */
.tdt-top{align-self:center;background:var(--tdt-root-bg);color:var(--tdt-root-text);border-radius:12px;padding:12px 28px;text-align:center}
.tdt-top-name{display:block;font-size:18px;font-weight:700}
.tdt-top-sub{display:block;font-family:var(--tdt-mono);font-size:11px;color:var(--tdt-root-sub);margin-top:2px}
.tdt-top a{color:inherit!important;text-decoration:underline;text-underline-offset:3px}

/* cards */
.tdt-card{width:100%;flex:1;background:#ffffff;border:1.5px solid var(--tdt-card-border);border-radius:12px;overflow:hidden;text-align:left}
.tdt-card.tdt-flag{border-color:var(--tdt-flag-border)}
.tdt-head{background:var(--tdt-head-bg);color:var(--tdt-head-text);padding:10px 12px;border-bottom:1px solid var(--tdt-card-border)}
.tdt-card.tdt-flag .tdt-head{background:var(--tdt-flag-head);border-bottom-color:var(--tdt-warn-line)}
.tdt-name{display:block;font-size:14px;font-weight:700}
.tdt-name a{color:inherit!important;text-decoration:underline;text-underline-offset:3px}
.tdt-sym{display:block;font-size:14px;color:var(--tdt-symbol);margin-top:1px}
.tdt-sub{display:block;font-size:12px;opacity:.8;margin-top:1px}
.tdt-row{display:block;padding:9px 12px;border-bottom:1px solid var(--tdt-line);font-size:13px}
.tdt-row:last-child{border-bottom:0}
.tdt-k{font-family:var(--tdt-mono);font-size:11px;color:var(--tdt-muted);letter-spacing:.02em;display:block}
.tdt-k *{margin:0!important;display:inline}
.tdt-v{display:block}
.tdt-v a,.tdt-more-body a{color:var(--tdt-link)}

/* folding items */
.tdt-more > summary{list-style:none;cursor:pointer;position:relative;padding-right:18px}
.tdt-more > summary::-webkit-details-marker{display:none}
.tdt-more > summary::after{content:'';position:absolute;right:2px;top:50%;width:6px;height:6px;margin-top:-5px;border-right:1.5px solid var(--tdt-muted);border-bottom:1.5px solid var(--tdt-muted);transform:rotate(45deg);transition:transform .15s}
.tdt-more[open] > summary::after{transform:rotate(-135deg);margin-top:-1px}
.tdt-more > summary:hover .tdt-k{color:var(--tdt-link)}
.tdt-more-body{margin-top:6px;padding:8px 10px;border-radius:8px;background:#f8fafc;font-size:12.5px;line-height:1.55;color:var(--tdt-ink)}
.tdt-more-body p{margin:0 0 6px}
.tdt-more-body p:last-child{margin-bottom:0}

/* warning strip */
.tdt-warn{margin:0;padding:8px 12px;background:var(--tdt-warn-bg);color:var(--tdt-warn-text);font-size:12px;font-weight:600;border-top:1px solid var(--tdt-warn-line)}

/* legend */
.tdt-legend{display:flex;flex-wrap:wrap;gap:18px;margin-top:22px;font-size:12px;color:var(--tdt-muted);justify-content:center}
.tdt-sw{display:inline-block;width:12px;height:12px;border-radius:3px;border:1px solid;vertical-align:-2px;margin-right:6px}

@media (max-width:720px){
  .tdt-tree{min-width:0!important}
  .tdt-row-kids{grid-template-columns:1fr!important}
  .tdt-rail,.tdt-tick{display:none}
}
`;
