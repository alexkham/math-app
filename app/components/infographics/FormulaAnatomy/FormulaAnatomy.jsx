/*
  FormulaAnatomy.jsx

  Anatomised formula infographic.

  Variants
  --------
  'annotated'  (default) — parts bracketed in the formula, stems up/down to soft
               pill labels, note cards below. Hover on a part, label or card
               highlights that part everywhere and dims the rest; hovering a
               part or label also shows a tooltip when the part has a
               `tip` (a one-line punchline); parts without a `tip`
               only highlight.
               'poster' is accepted as an alias for backward compatibility.
  'legend'     — formula hero with numbered badges, legend entries below.

  Props
  -----
  data     required object, shape:
             {
               header?: {
                 kicker?: string,
                 title:   string,
                 lede?:   string
               },
               formula: FormulaNode[],
               parts:   PartDef[],
               blocks?: BlockStyle        // styling of the note cards, merged over DEFAULT_BLOCKS
             }

             FormulaNode =
                | { kind: 'var',  text: string }                                  // italic letter(s)
                | { kind: 'op',   text: string, big?: boolean, tight?: boolean }  // roman operator / numeral
                                                                                   //   big:   tall glyph, e.g. ( )
                                                                                   //   tight: no side spacing
                | { kind: 'sup',  children: FormulaNode[] }                       // superscript
                | { kind: 'sub',  children: FormulaNode[] }                       // subscript, e.g. log_b
                | { kind: 'frac', num: FormulaNode[], den: FormulaNode[] }
                | { kind: 'rad',  children: FormulaNode[] }                       // radical with overline
                | { kind: 'part', id: string, children: FormulaNode[] }           // highlighted part

             PartDef = {
               id:     string,                // matches a formula part id
               color?: string,                // any CSS colour; default: PART_COLORS in order
               chip:   string,                // short symbol (card chip, tooltip)
               title:  string,                // short name (label, card, tooltip)
               desc:   string,                // one or two sentences (card)
               tip?:   string,                // one-line punchline (tooltip only); desc carries the full text + example;
                                              //   no tip = no tooltip for this part
               side?:  'top' | 'bottom',      // label position, default 'top'
               block?: BlockStyle             // per-card override, merged over data.blocks
             }

             BlockStyle = {                   // every key optional
               bg, border, radius,
               font,                          // font-family for the card
               titleColor, titleSize, titleWeight,
               textColor, textSize,
               trayBg                         // background behind the cards (data.blocks only)
             }

  variant  'annotated' | 'legend'   (default: 'annotated')

  theme    optional partial theme, merged over DEFAULT_THEME (exported).

  All text fields go through processContent.

  Downloads: every absolutely or relatively positioned piece (stage, part,
  badge, bracket, stem, label) carries data-keep-position, so the diagram
  generator does not flatten it (scripts/generate-diagrams.mjs).
*/

'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ------------------------------------------------------------------ */
/*  defaults                                                           */
/* ------------------------------------------------------------------ */

/* site palette: navy #06357A, blue #2563EB */

/* part colours, used in order when a part has no `color`: all in the site's
   blue family (navy, blue, sky, slate, steel, deep sky), no greens or oranges */
export const PART_COLORS = ['#06357A', '#2563EB', '#0284C7', '#475569', '#5B7DB1', '#0C4A6E'];
export const DEFAULT_THEME = {
  bg:          '#ffffff',
  panel:       '#ffffff',
  panelSoft:   '#eff6ff',
  panelSofter: '#f8fafc',
  ink:         '#1f2937',
  title:       '#06357A',
  muted:       '#6b7280',
  line:        '#e5e7eb',
  accent:      '#2563EB',
};

export const DEFAULT_BLOCKS = {
  bg:          '#ffffff',
  border:      '#e5e7eb',
  radius:      '10px',
  font:        "'Inter', system-ui, -apple-system, sans-serif",
  titleColor:  '#06357A',
  titleSize:   '12.5px',
  titleWeight: 700,
  textColor:   '#6b7280',
  textSize:    '12px',
  trayBg:      '#f8fafc',
};

const cssVars = (t) => ({
  '--fan-bg':           t.bg,
  '--fan-panel':        t.panel,
  '--fan-panel-soft':   t.panelSoft,
  '--fan-panel-softer': t.panelSofter,
  '--fan-ink':          t.ink,
  '--fan-title':        t.title,
  '--fan-muted':        t.muted,
  '--fan-line':         t.line,
  '--fan-accent':       t.accent,
});

const blockVars = (b) => {
  const out = {};
  if (b.bg          != null) out['--fan-card-bg']           = b.bg;
  if (b.border      != null) out['--fan-card-border']       = b.border;
  if (b.radius      != null) out['--fan-card-radius']       = b.radius;
  if (b.font        != null) out['--fan-card-font']         = b.font;
  if (b.titleColor  != null) out['--fan-card-title-color']  = b.titleColor;
  if (b.titleSize   != null) out['--fan-card-title-size']   = b.titleSize;
  if (b.titleWeight != null) out['--fan-card-title-weight'] = b.titleWeight;
  if (b.textColor   != null) out['--fan-card-text-color']   = b.textColor;
  if (b.textSize    != null) out['--fan-card-text-size']    = b.textSize;
  if (b.trayBg      != null) out['--fan-tray-bg']           = b.trayBg;
  return out;
};

/* geometry constants (px) */
const STEM      = 30;   // stem length, first tier
const PAD_LABEL = 92;   // stage padding on a side that carries labels
const PAD_EMPTY = 36;   // stage padding on a side with no labels
const GAP       = 8;    // min horizontal gap between labels in one tier
const TIP_W     = 250;  // tooltip width

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.fan-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--fan-ink);
  line-height: 1.45;
}
.fan-root .fan-card {
  position: relative;
  background: var(--fan-panel);
  border: 1px solid var(--fan-line);
  border-radius: 12px;
}

/* ---- header ---- */
.fan-root .fan-head {
  padding: 13px 20px;
  border-bottom: 1px solid var(--fan-line);
}
.fan-root .fan-head-row { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.fan-root .fan-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--fan-accent);
  white-space: nowrap;
}
.fan-root .fan-title {
  font-size: 15px; font-weight: 800;
  color: var(--fan-title);
  letter-spacing: -0.01em;
  margin: 0;
}
.fan-root .fan-lede {
  color: var(--fan-muted);
  font-size: 12.5px;
  margin-top: 4px;
  max-width: 640px;
}

/* ---- formula typography (shared) ---- */
.fan-formula {
  font-family: 'STIX Two Text', 'Times New Roman', serif;
  color: var(--fan-ink);
  display: inline-flex; align-items: center;
  white-space: nowrap;
  line-height: 1;
}
.fan-formula .fan-var { font-style: italic; padding: 0 0.02em; }
.fan-formula .fan-op  { font-style: normal; padding: 0 0.12em; }
.fan-formula .fan-op.tight { padding: 0; }
.fan-formula .fan-op.big {
  font-size: 1.55em;
  display: inline-block;
  transform: translateY(-0.04em);
}
.fan-formula .fan-sup {
  font-size: 0.58em;
  align-self: flex-start;
  margin-top: -0.35em;
  display: inline-flex; align-items: center;
}
.fan-formula .fan-sub {
  font-size: 0.58em;
  align-self: center;
  transform: translateY(0.55em);   /* fixed drop, whatever the row height */
  display: inline-flex; align-items: center;
}
.fan-formula .fan-frac {
  display: inline-flex; flex-direction: column; align-items: center;
  margin: 0 0.12em;
}
.fan-formula .fan-num,
.fan-formula .fan-den { display: inline-flex; align-items: center; padding: 0 0.18em; }
.fan-formula .fan-bar { height: 1.5px; width: 100%; background: currentColor; margin: 0.16em 0; }
.fan-formula .fan-frac .fan-frac { font-size: 0.82em; }
.fan-formula .fan-rad { display: inline-flex; align-items: stretch; }
.fan-formula .fan-rad-sym {
  font-size: 1.12em; line-height: 1;
  padding-right: 0.02em;
  transform: translateY(0.04em);
}
.fan-formula .fan-rad-under {
  border-top: 1.5px solid currentColor;
  padding: 0.1em 0.08em 0;
  display: inline-flex; align-items: center;
}
.fan-formula .fan-part {
  color: var(--c);
  background: color-mix(in srgb, var(--c) 8%, transparent);
  border-radius: 0.1em;
  padding: 0.04em 0.1em;
  display: inline-flex; align-items: center;
  position: relative;
  cursor: default;
  transition: background 0.18s, opacity 0.18s;
}
.fan-formula .fan-part-badge {
  position: absolute; top: -12px; right: -12px;
  width: 18px; height: 18px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 10px; line-height: 1;
  color: #ffffff;
  background: var(--c);
  box-shadow: 0 0 0 2px var(--fan-panel);
}

/* ---- number disc ---- */
.fan-n {
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; border-radius: 50%;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 9.5px; line-height: 1;
  color: #ffffff;
  background: var(--c);
  flex: none;
}

/* ---- annotated: stage ---- */
.fan-stage {
  position: relative;
  display: flex; justify-content: center;
  padding-left: 20px; padding-right: 20px;
  background:
    radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--fan-accent) 10%, transparent) 1px, transparent 0) 0 0 / 16px 16px,
    var(--fan-panel);
  overflow-x: auto;
}
.fan-stage .fan-formula { font-size: 44px; }
.fan-anchor { position: relative; display: inline-flex; }

.fan-bracket {
  position: absolute; height: 6px;
  border: 1px solid var(--c);
  pointer-events: none;
  transition: opacity 0.18s, border-width 0.18s;
}
.fan-bracket.top    { border-bottom: none; border-radius: 3px 3px 0 0; }
.fan-bracket.bottom { border-top: none;    border-radius: 0 0 3px 3px; }
.fan-bracket.on     { border-width: 1.5px; }
.fan-bracket.top.on    { border-bottom: none; }
.fan-bracket.bottom.on { border-top: none; }

.fan-stem {
  position: absolute; width: 1px;
  background: var(--c);
  pointer-events: none;
  transition: opacity 0.18s;
}
.fan-stem::after {
  content: ''; position: absolute; left: -2px;
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--c);
}
.fan-stem.top::after    { top: -2px; }
.fan-stem.bottom::after { bottom: -2px; }

.fan-label {
  position: absolute;
  display: inline-flex; align-items: center; gap: 6px;
  padding: 3px 10px 3px 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--c) 9%, var(--fan-panel));
  font-size: 11.5px; font-weight: 600;
  color: var(--c);
  white-space: nowrap;
  cursor: default;
  transition: opacity 0.18s, background 0.18s;
}
.fan-label.on { background: color-mix(in srgb, var(--c) 16%, var(--fan-panel)); }

/* ---- annotated: cards ---- */
.fan-tray {
  display: grid;
  gap: 12px;
  padding: 16px 18px 18px;
  background: var(--fan-tray-bg, var(--fan-panel-softer));
  border-top: 1px solid var(--fan-line);
  border-radius: 0 0 12px 12px;
}
.fan-note {
  background: var(--fan-card-bg, var(--fan-panel));
  border: 1px solid var(--fan-card-border, var(--fan-line));
  border-radius: var(--fan-card-radius, 10px);
  font-family: var(--fan-card-font, inherit);
  padding: 12px 14px 13px;
  box-shadow: 0 1px 2px rgba(17, 24, 39, 0.04);
  cursor: default;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s, opacity 0.18s, background 0.18s;
}
.fan-note-top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap; }
.fan-note-title {
  font-size: var(--fan-card-title-size, 12.5px);
  font-weight: var(--fan-card-title-weight, 700);
  color: var(--fan-card-title-color, var(--fan-title));
}
.fan-note-sym {
  font-family: 'STIX Two Text', 'Times New Roman', serif;
  font-style: italic; font-size: 15px;
  color: var(--c);
  padding: 0 6px; border-radius: 4px;
  background: color-mix(in srgb, var(--c) 8%, transparent);
}
.fan-note-desc {
  font-size: var(--fan-card-text-size, 12px);
  color: var(--fan-card-text-color, var(--fan-muted));
  line-height: 1.5;
}
.fan-note.on {
  border-color: color-mix(in srgb, var(--c) 55%, var(--fan-card-border, var(--fan-line)));
  background: color-mix(in srgb, var(--c) 4%, var(--fan-card-bg, var(--fan-panel)));
  box-shadow: 0 8px 20px -10px color-mix(in srgb, var(--c) 60%, transparent);
  transform: translateY(-2px);
}

/* ---- annotated: highlight / dim ---- */
.fan-card.has-hl .fan-part:not(.on),
.fan-card.has-hl .fan-label:not(.on),
.fan-card.has-hl .fan-bracket:not(.on),
.fan-card.has-hl .fan-stem:not(.on) { opacity: 0.28; }
.fan-card.has-hl .fan-note:not(.on) { opacity: 0.5; }
.fan-card.has-hl .fan-part.on { background: color-mix(in srgb, var(--c) 16%, transparent); }

/* ---- tooltip ---- */
.fan-tip {
  position: absolute; z-index: 20;
  padding: 10px 12px 11px;
  background: var(--fan-panel);
  border: 1px solid color-mix(in srgb, var(--c) 35%, var(--fan-line));
  border-radius: 8px;
  box-shadow: 0 10px 28px -8px rgba(30, 58, 138, 0.28), 0 2px 6px rgba(30, 58, 138, 0.08);
  pointer-events: none;
}
.fan-tip.above { transform: translateY(-100%); }
.fan-tip-top { display: flex; align-items: baseline; gap: 8px; }
.fan-tip-sym {
  font-family: 'STIX Two Text', 'Times New Roman', serif;
  font-style: italic; font-size: 16px;
  color: var(--c);
}
.fan-tip-title { font-size: 12.5px; font-weight: 700; color: var(--fan-title); line-height: 1.4; }
.fan-tip-desc  { font-size: 12px; color: var(--fan-ink); line-height: 1.45; }
.fan-tip::before {
  content: ''; position: absolute; left: var(--ax, 50%);
  width: 9px; height: 9px;
  background: var(--fan-panel);
  border: 1px solid color-mix(in srgb, var(--c) 35%, var(--fan-line));
  transform: translateX(-50%) rotate(45deg);
}
.fan-tip.below::before { top: -5px;    border-right: none; border-bottom: none; }
.fan-tip.above::before { bottom: -5px; border-left: none;  border-top: none; }

/* ---- legend ---- */
.fan-legend-hero {
  padding: 40px 32px 36px;
  background: var(--fan-panel-softer);
  border-bottom: 1px solid var(--fan-line);
  display: flex; align-items: center; justify-content: center;
  overflow-x: auto;
}
.fan-legend-hero .fan-formula { font-size: 44px; }
.fan-legend-body {
  padding: 18px 18px 20px;
  background: var(--fan-tray-bg, var(--fan-panel-softer));
  border-radius: 0 0 12px 12px;
}
.fan-legend-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--fan-muted);
  margin-bottom: 12px;
}
.fan-entries { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

@media (max-width: 640px) {
  .fan-stage .fan-formula { font-size: 30px; }
  .fan-legend-hero .fan-formula { font-size: 32px; }
  .fan-tray, .fan-entries { grid-template-columns: 1fr !important; }
}
`;

/* ------------------------------------------------------------------ */
/*  formula renderer                                                   */
/* ------------------------------------------------------------------ */
/*
  ctx = {
    colorMap,                 id -> colour
    partRefs?,                ref object collecting part elements
    numbered?,                id -> number (legend badges)
    hl?,                      highlighted id
    onEnter?, onLeave?        hover handlers (id)
  }
*/

function renderNodes(nodes, ctx) {
  return (nodes || []).map((n, i) => renderNode(n, i, ctx));
}

function renderNode(node, key, ctx) {
  switch (node.kind) {
    case 'var':
      return <span key={key} className="fan-var">{processContent(node.text)}</span>;
    case 'op': {
      const cls = 'fan-op' + (node.tight ? ' tight' : '') + (node.big ? ' big' : '');
      return <span key={key} className={cls}>{processContent(node.text)}</span>;
    }
    case 'sup':
      return <span key={key} className="fan-sup">{renderNodes(node.children, ctx)}</span>;
    case 'sub':
      return <span key={key} className="fan-sub">{renderNodes(node.children, ctx)}</span>;
    case 'frac':
      return (
        <span key={key} className="fan-frac">
          <span className="fan-num">{renderNodes(node.num, ctx)}</span>
          <span className="fan-bar" />
          <span className="fan-den">{renderNodes(node.den, ctx)}</span>
        </span>
      );
    case 'rad':
      return (
        <span key={key} className="fan-rad">
          <span className="fan-rad-sym">&#8730;</span>
          <span className="fan-rad-under">{renderNodes(node.children, ctx)}</span>
        </span>
      );
    case 'part': {
      const color = ctx.colorMap[node.id] || 'currentColor';
      const num   = ctx.numbered ? ctx.numbered[node.id] : null;
      const on    = ctx.hl === node.id;
      return (
        <span
          key={key}
          className={'fan-part' + (on ? ' on' : '')}
          data-part-id={node.id}
          data-keep-position=""
          style={{ '--c': color }}
          ref={ctx.partRefs ? (el) => { if (el) ctx.partRefs.current[node.id] = el; } : undefined}
          onMouseEnter={ctx.onEnter ? () => ctx.onEnter(node.id, true) : undefined}
          onMouseLeave={ctx.onLeave}
          onClick={ctx.onEnter ? () => ctx.onEnter(node.id, true) : undefined}
        >
          {renderNodes(node.children, ctx)}
          {num != null && <span className="fan-part-badge" data-keep-position="">{num}</span>}
        </span>
      );
    }
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  shared pieces                                                      */
/* ------------------------------------------------------------------ */

function Header({ header }) {
  if (!header) return null;
  return (
    <div className="fan-head">
      <div className="fan-head-row">
        {header.kicker && <span className="fan-kicker">{processContent(header.kicker)}</span>}
        <h2 className="fan-title">{processContent(header.title)}</h2>
      </div>
      {header.lede && <div className="fan-lede">{processContent(header.lede)}</div>}
    </div>
  );
}

function NoteCard({ part, index, on, onEnter, onLeave }) {
  return (
    <div
      className={'fan-note' + (on ? ' on' : '')}
      style={{ '--c': part.color, ...blockVars(part.block || {}) }}
      tabIndex={0}
      onMouseEnter={onEnter ? () => onEnter(part.id, false) : undefined}
      onMouseLeave={onLeave}
      onFocus={onEnter ? () => onEnter(part.id, false) : undefined}
      onBlur={onLeave}
    >
      <div className="fan-note-top">
        <span className="fan-n">{index + 1}</span>
        <span className="fan-note-title">{processContent(part.title)}</span>
        <span className="fan-note-sym">{processContent(part.chip)}</span>
      </div>
      <div className="fan-note-desc">{processContent(part.desc)}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  annotated variant                                                  */
/* ------------------------------------------------------------------ */

function Annotated({ data }) {
  const cardRef   = useRef(null);
  const stageRef  = useRef(null);
  const anchorRef = useRef(null);
  const partRefs  = useRef({});
  const labelRefs = useRef({});

  const hasTop    = data.parts.some((p) => (p.side || 'top') === 'top');
  const hasBottom = data.parts.some((p) => p.side === 'bottom');
  const basePad   = {
    top:    hasTop    ? PAD_LABEL : PAD_EMPTY,
    bottom: hasBottom ? PAD_LABEL : PAD_EMPTY,
  };

  const [pad, setPad] = useState(basePad);
  const [geo, setGeo] = useState({});
  const [hl,  setHl]  = useState(null);
  const [tip, setTip] = useState(null);

  const colorMap = Object.fromEntries(data.parts.map((p) => [p.id, p.color]));
  const byId     = Object.fromEntries(data.parts.map((p) => [p.id, p]));

  /* ---- layout ---- */
  useLayoutEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const s = stage.getBoundingClientRect();
      /* the overlay is drawn inside the formula's own box, so it stays on the
         parts when the stage width changes (e.g. in the download page) */
      const a  = anchorRef.current ? anchorRef.current.getBoundingClientRect() : s;
      const ox = a.left - s.left + stage.scrollLeft;
      const oy = a.top - s.top;

      const items = data.parts.map((p) => {
        const partEl  = partRefs.current[p.id];
        const labelEl = labelRefs.current[p.id];
        if (!partEl || !labelEl) return null;
        const r   = partEl.getBoundingClientRect();
        const rad = partEl.closest('.fan-rad');
        const topEdge = rad ? Math.min(r.top, rad.getBoundingClientRect().top) : r.top;
        return {
          id:     p.id,
          side:   p.side || 'top',
          left:   r.left - s.left + stage.scrollLeft,
          width:  r.width,
          top:    topEdge - s.top,
          bottom: r.bottom - s.top,
          cx:     r.left - s.left + stage.scrollLeft + r.width / 2,
          lw:     labelEl.offsetWidth,
          lh:     labelEl.offsetHeight,
        };
      }).filter(Boolean).sort((a, b) => a.cx - b.cx);

      const placed  = { top: [], bottom: [] };
      const maxTier = { top: 0, bottom: 0 };
      let   step    = 30;
      const next    = {};
      const width   = Math.max(s.width, stage.scrollWidth);

      items.forEach((it) => {
        step = Math.max(step, it.lh + 8);
        const lx = Math.max(8, Math.min(width - it.lw - 8, it.cx - it.lw / 2));
        let tier = 0;
        /* move out a tier while the label hits a label of the same tier, or sits
           across the line of a label placed further out (a higher tier) */
        while (placed[it.side].some((o) =>
          (o.tier === tier && lx < o.x + o.w + GAP && o.x < lx + it.lw + GAP) ||
          (o.tier > tier && lx - GAP < o.cx && o.cx < lx + it.lw + GAP))) tier++;
        placed[it.side].push({ x: lx, w: it.lw, tier, cx: it.cx });
        maxTier[it.side] = Math.max(maxTier[it.side], tier);

        const len = STEM + tier * (it.lh + 8);
        if (it.side === 'top') {
          const bTop = it.top - 9;
          const ly   = bTop - len - it.lh;
          next[it.id] = {
            br:    { left: it.left - ox, top: bTop - oy, width: it.width },
            stem:  { left: it.cx - 0.5 - ox, top: ly + it.lh - oy, height: len },
            label: { left: lx - ox, top: ly - oy },
          };
        } else {
          const bTop = it.bottom + 3;
          const sTop = bTop + 6;
          next[it.id] = {
            br:    { left: it.left - ox, top: bTop - oy, width: it.width },
            stem:  { left: it.cx - 0.5 - ox, top: sTop - oy, height: len },
            label: { left: lx - ox, top: sTop + len - oy },
          };
        }
      });

      const wantPad = {
        top:    basePad.top    + maxTier.top    * step,
        bottom: basePad.bottom + maxTier.bottom * step,
      };
      if (wantPad.top !== pad.top || wantPad.bottom !== pad.bottom) {
        setPad(wantPad);          /* re-runs this effect with the new padding */
        return;
      }
      setGeo(next);
    };

    measure();
    let cancelled = false;
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    const ro = new ResizeObserver(measure);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => { cancelled = true; ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, pad.top, pad.bottom]);

  /* ---- hover ---- */
  const onEnter = (id, withTip) => {
    setHl(id);
    if (!withTip || !byId[id] || !byId[id].tip) { setTip(null); return; }
    const card   = cardRef.current;
    const partEl = partRefs.current[id];
    if (!card || !partEl) return;
    const f  = card.getBoundingClientRect();
    const r  = partEl.getBoundingClientRect();
    const w  = Math.min(TIP_W, f.width - 20);
    const cx = r.left - f.left + r.width / 2;
    const x  = Math.max(10, Math.min(f.width - w - 10, cx - w / 2));
    const below = (byId[id].side || 'top') === 'top';   /* opposite side to the label */
    setTip({
      id,
      left:  x,
      width: w,
      ax:    cx - x,
      top:   below ? r.bottom - f.top + 12 : r.top - f.top - 12,
      place: below ? 'below' : 'above',
    });
  };
  const onLeave = () => { setHl(null); setTip(null); };

  const ctx = { colorMap, partRefs, hl, onEnter, onLeave };
  const tipPart = tip ? byId[tip.id] : null;

  return (
    <div className={'fan-card' + (hl ? ' has-hl' : '')} ref={cardRef} data-keep-position="">
      <Header header={data.header} />

      <div
        className="fan-stage"
        ref={stageRef}
        data-keep-position=""
        style={{ paddingTop: pad.top, paddingBottom: pad.bottom }}
      >
        <span className="fan-anchor" ref={anchorRef} data-keep-position="">
        <span className="fan-formula">{renderNodes(data.formula, ctx)}</span>

        {data.parts.map((p, i) => {
          const side = p.side || 'top';
          const g    = geo[p.id];
          const on   = hl === p.id ? ' on' : '';
          return (
            <React.Fragment key={p.id}>
              {g && (
                <div
                  className={`fan-bracket ${side}${on}`}
                  data-keep-position=""
                  style={{ '--c': p.color, left: g.br.left, top: g.br.top, width: g.br.width }}
                />
              )}
              {g && (
                <div
                  className={`fan-stem ${side}${on}`}
                  data-keep-position=""
                  style={{ '--c': p.color, left: g.stem.left, top: g.stem.top, height: g.stem.height }}
                />
              )}
              <div
                className={'fan-label' + on}
                data-keep-position=""
                ref={(el) => { if (el) labelRefs.current[p.id] = el; }}
                style={{
                  '--c': p.color,
                  left: g ? g.label.left : 0,
                  top:  g ? g.label.top  : 0,
                  visibility: g ? 'visible' : 'hidden',
                }}
                onMouseEnter={() => onEnter(p.id, true)}
                onMouseLeave={onLeave}
                onClick={() => onEnter(p.id, true)}
              >
                <span className="fan-n">{i + 1}</span>
                {processContent(p.title)}
              </div>
            </React.Fragment>
          );
        })}
        </span>
      </div>

      <div
        className="fan-tray"
        style={{ gridTemplateColumns: `repeat(${data.parts.length === 4 ? 2 : Math.min(data.parts.length, 3)}, 1fr)` }}
      >
        {data.parts.map((p, i) => (
          <NoteCard
            key={p.id}
            part={p}
            index={i}
            on={hl === p.id}
            onEnter={onEnter}
            onLeave={onLeave}
          />
        ))}
      </div>

      {tip && tipPart && (
        <div
          className={`fan-tip ${tip.place}`}
          style={{ '--c': tipPart.color, '--ax': `${tip.ax}px`, left: tip.left, top: tip.top, width: tip.width }}
        >
          <div className="fan-tip-top">
            <span className="fan-tip-sym">{processContent(tipPart.chip)}</span>
            <span className="fan-tip-title">{processContent(tipPart.tip)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  legend variant                                                     */
/* ------------------------------------------------------------------ */

function Legend({ data }) {
  const colorMap = Object.fromEntries(data.parts.map((p) => [p.id, p.color]));
  const numbered = Object.fromEntries(data.parts.map((p, i) => [p.id, i + 1]));
  const ctx = { colorMap, numbered };

  return (
    <div className="fan-card" data-keep-position="">
      <Header header={data.header} />
      <div className="fan-legend-hero">
        <span className="fan-formula">{renderNodes(data.formula, ctx)}</span>
      </div>
      <div className="fan-legend-body">
        <div className="fan-legend-label">Legend</div>
        <div className="fan-entries">
          {data.parts.map((p, i) => (
            <NoteCard key={p.id} part={p} index={i} on={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function FormulaAnatomy({ data: rawData, variant = 'annotated', theme }) {
  /* fill missing part colours; memoised so the layout effect does not re-run */
  const data = React.useMemo(() => rawData && {
    ...rawData,
    parts: (rawData.parts || []).map((p, i) => (p.color ? p : { ...p, color: PART_COLORS[i % PART_COLORS.length] })),
  }, [rawData]);
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const b = { ...DEFAULT_BLOCKS, ...((data && data.blocks) || {}) };
  const V = variant === 'legend' ? Legend : Annotated;   /* 'poster' maps to Annotated */
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fan-root" style={{ ...cssVars(t), ...blockVars(b) }}>
        <V data={data} />
      </div>
    </>
  );
}
