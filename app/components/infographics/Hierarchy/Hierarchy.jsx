'use client';


/*
 * Hierarchy
 * ------------------------------------------------------------------
 * Rank between levels: one level takes precedence over, generates,
 * dominates, or is built on another. Not kinds of things (that is
 * TaxonomyOutline) and not subsets (containment).
 *
 * 'use client' is required: expand / select state and tooltips.
 *
 * Variants (V1 = default):
 *   pyramid     precedence tiers, apex wins, width grows downward   — panels inline
 *   staircase   each level generated from the one below, height = rank — shared drawer
 *   chain       strict dominance left to right with connectors       — shared drawer
 *   layers      bands resting on a foundation (last level)           — panels inline
 *   derivation  tree; each child produced from its parent by an edge — shared drawer
 *
 * Props
 *   data         required, see below
 *   variant      'pyramid' | 'staircase' | 'chain' | 'layers' | 'derivation'
 *   theme        partial, merged over DEFAULT_THEME (colours + fonts)
 *   initialOpen  inline variants: 'none' | 'all' | [ids]   (default 'none')
 *                drawer variants: an id, selected on mount
 *   showToolbar  expand all / collapse all, inline variants only (default true)
 *   framed       draw the bordered frame (default true)
 *   className    extra class on the wrapper
 *   exportable     show PNG / PDF download buttons (default true)
 *   exportFormats  ['png', 'pdf'] — which buttons, in order
 *   fileName       download base name, no extension (default 'hierarchy')
 *                  the download is exactly what is rendered; toolbar, buttons
 *                  and tooltip are left out, chain / derivation at full width
 *
 * data = {
 *   levels: [ level, ... ]     linear variants, in display order:
 *                                pyramid  top → bottom (highest precedence first)
 *                                staircase / chain  left → right (lowest rank first)
 *                                layers   top → bottom (foundation last)
 *   root:   node               derivation tree
 *                              (either shape works for every variant: levels become a
 *                               single derivation path; a root is flattened depth-first)
 *   axis?:       { top, label, bottom }        pyramid / layers side axis
 *   connector?:  '≪'                           chain link symbol
 *   base?:       { start, middle, end }        staircase baseline labels
 *   rule?:       { label, text }               amber rule strip under the body
 *   walk?:       [ { text, tip, sep } ]        worked line; sep: true renders the
 *                                              step as a small connector (→ 1st, ←)
 *   notes?:      [ string ]                    muted footnotes
 *   legend?:     [ { label, tone } ]           tone: 'accent' | 'warm' | 'muted' | 'dashed'
 *   labels?:     { expandAll, collapseAll, drawerEmpty }
 * }
 *
 * level / node = {
 *   id?        stable key
 *   name       main label
 *   sub?       secondary line (pyramid / layers / chain subtitle, staircase "from",
 *              derivation note)
 *   rank?      badge text — auto when omitted (1st / level 0 / rank 6 / source)
 *   symbol?    pyramid symbols · staircase definition · chain expression ·
 *              derivation formula
 *   example?   staircase example · chain value
 *   exampleLabel?  chain value caption (e.g. "n = 10")
 *   note?      amber badge — a property lost / a caveat (staircase, chain)
 *   chips?     [ { label, tip, flag } ]       layers members
 *   edge?      { label, tip, flag }           derivation: operation from the parent
 *   flag?      true → amber treatment
 *   tip?       { rank, symbol, example, note, connector }
 *              connector = tooltip on the link INTO this level from the previous one
 *   drawerTitle?  heading in the shared drawer (default "rank · name")
 *   panel?     string | ReactNode | (rawLevel) => ReactNode |
 *              { text, facts:[{label, value}], note, warn, content }
 *   children?  [ node, ... ]                  derivation only
 * }
 *
 * Every text field accepts a plain string (run through processContent:
 * $math$, **bold**, @[code]@, [label](!/path)) or a ReactNode.
 */

import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  createContext,
  isValidElement,
} from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { useExport } from '../utils/useExport';
import ExportButton from '../utils/ExportButton';

export const DEFAULT_THEME = {
  bg: '#ffffff',
  panel: '#ffffff',
  panelSoft: '#eef4ff',
  panelSofter: '#f8fafc',
  ink: '#0f172a',
  title: '#1e3a8a',
  titleSoft: '#bfd0f5',
  titleLine: '#3b5bb5',
  muted: '#64748b',
  line: '#e2e8f0',
  line2: '#cbd5e1',
  accent: '#1d4ed8',
  indigoSoft: '#dbe6fd',
  warm: '#b45309',
  warmSoft: '#fffbeb',
  warmLine: '#f2d48a',
  warmInk: '#92400e',
  fontSans: "'Inter', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace",
  fontMath: "'Cambria Math', 'STIX Two Math', 'Times New Roman', serif",
};

const VARIANTS = ['pyramid', 'staircase', 'chain', 'layers', 'derivation'];
const INLINE = { pyramid: true, layers: true };
const DEFAULT_LABELS = { expandAll: 'expand all', collapseAll: 'collapse all', drawerEmpty: 'Select a level for details.' };

/* ---------- helpers ---------- */

const cls = (...a) => a.filter(Boolean).join(' ');
const isEmpty = (v) => v === undefined || v === null || v === '' || v === false;
const rc = (v) => (isEmpty(v) ? null : typeof v === 'string' ? processContent(v) : v);
const hasPanel = (n) => !isEmpty(n.raw.panel);
const tipOf = (raw, k) => (raw.tip ? raw.tip[k] : undefined);

const ordinal = (k) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = k % 100;
  return k + (s[(v - 20) % 10] || s[v] || s[0]);
};

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function normalizeTree(raw, depth, key) {
  const node = { raw, key: raw.id !== undefined && raw.id !== null ? String(raw.id) : key, depth };
  node.children = (raw.children || []).map((c, i) => normalizeTree(c, depth + 1, key + '.' + i));
  return node;
}

function flattenTree(node, out = []) {
  out.push(node);
  node.children.forEach((c) => flattenTree(c, out));
  return out;
}

function levelsToPath(levels) {
  if (!levels.length) return null;
  const [first, ...rest] = levels;
  return { ...first, children: rest.length ? [levelsToPath(rest)] : [] };
}

/* ---------- tooltip ---------- */

const TipCtx = createContext(null);

function Tip({ tip, className, line, children }) {
  const ctx = useContext(TipCtx);
  if (isEmpty(tip) || !ctx) return <span className={className}>{children}</span>;
  const show = (e) => ctx.show(tip, e.currentTarget);
  return (
    <span
      className={cls(className, 'hy-has-tip', line && 'hy-tipline')}
      onMouseEnter={show}
      onMouseLeave={ctx.hide}
      onFocus={show}
      onBlur={ctx.hide}
    >
      {children}
    </span>
  );
}

function TipLayer({ state }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(null);

  useIsoLayoutEffect(() => {
    if (!state || !ref.current) {
      setPos(null);
      return;
    }
    const r = state.el.getBoundingClientRect();
    const w = ref.current.offsetWidth;
    const h = ref.current.offsetHeight;
    const cx = r.left + r.width / 2;
    const left = Math.max(8, Math.min(cx - w / 2, window.innerWidth - w - 8));
    const below = r.top - h - 10 < 0;
    setPos({ left, top: below ? r.bottom + 10 : r.top - h - 10, below, ax: cx - left });
  }, [state]);

  if (!state) return null;
  return (
    <div
      ref={ref}
      role="tooltip"
      data-export-ignore=""
      className={cls('hy-tip', pos && pos.below && 'hy-tip-below')}
      style={
        pos
          ? { left: pos.left, top: pos.top, '--hy-ax': pos.ax + 'px' }
          : { left: -9999, top: -9999, visibility: 'hidden' }
      }
    >
      {rc(state.content)}
    </div>
  );
}

/* ---------- panel ---------- */

function PanelBody({ node }) {
  const p = node.raw.panel;
  if (isEmpty(p)) return null;
  if (typeof p === 'function') return <div className="hy-xp">{p(node.raw)}</div>;
  if (typeof p === 'string') return <div className="hy-xp"><div className="hy-xp-text">{processContent(p)}</div></div>;
  if (isValidElement(p) || Array.isArray(p) || typeof p !== 'object') return <div className="hy-xp">{p}</div>;
  return (
    <div className="hy-xp">
      {!isEmpty(p.text) && <div className="hy-xp-text">{rc(p.text)}</div>}
      {Array.isArray(p.facts) && p.facts.length > 0 && (
        <div className="hy-xp-facts">
          {p.facts.map((f, i) => (
            <div className="hy-xp-fact" key={i}>
              <span className="hy-xp-k">{rc(f.label)}</span>
              <span className="hy-xp-v">{rc(f.value)}</span>
            </div>
          ))}
        </div>
      )}
      {!isEmpty(p.note) && <div className="hy-xp-note">{rc(p.note)}</div>}
      {!isEmpty(p.content) && <div className="hy-xp-content">{p.content}</div>}
      {!isEmpty(p.warn) && <div className="hy-xp-warn">{rc(p.warn)}</div>}
    </div>
  );
}

/* ---------- preface / conclusion (same look as CaseSplit's 'cards' style) ---------- */

const paras = (v) => (Array.isArray(v) ? v.map((p, i) => <p key={i}>{rc(p)}</p>) : rc(v));

/* a neutral bordered text block; label (on the border line), title and body are each
   optional, and the whole block is skipped when all three are missing */
function ProseBlock({ label, title, body, where }) {
  if (isEmpty(label) && isEmpty(title) && isEmpty(body)) return null;
  return (
    <div className={cls('hy-prose', 'hy-prose-' + where, !isEmpty(label) && 'hy-prose-labelled')}>
      {!isEmpty(label) && <span className="hy-prose-label">{rc(label)}</span>}
      {!isEmpty(title) && <div className="hy-prose-title">{rc(title)}</div>}
      {!isEmpty(body) && <div className="hy-prose-body">{paras(body)}</div>}
    </div>
  );
}

const Preface = ({ d }) => <ProseBlock where="pre" label={d.prefaceLabel} title={d.prefaceTitle} body={d.preface} />;
const Conclusion = ({ d }) => <ProseBlock where="con" label={d.conclusionLabel} title={d.conclusionTitle} body={d.conclusion} />;

const Chev = () => <span className="hy-chev" aria-hidden="true" />;
const ChevGap = () => <span className="hy-chev-gap" aria-hidden="true" />;

/* ---------- component ---------- */

export default function Hierarchy({
  data,
  variant = 'pyramid',
  theme,
  initialOpen,
  showToolbar = true,
  framed = true,
  className,
  exportable = true,
  exportFormats = ['png', 'pdf'],
  fileName = 'hierarchy',
}) {
  const v = VARIANTS.includes(variant) ? variant : 'pyramid';
  const inline = !!INLINE[v];
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const rootRef = useRef(null);
  const { exportAs, busy } = useExport(rootRef, { fileName, background: t.bg });
  const d = data || {};
  const labels = { ...DEFAULT_LABELS, ...(d.labels || {}) };

  /* both shapes accepted for every variant */
  const { levels, root } = useMemo(() => {
    const rawLevels = Array.isArray(d.levels) ? d.levels : null;
    const rawRoot = d.root || null;
    if (v === 'derivation') {
      const src = rawRoot || (rawLevels ? levelsToPath(rawLevels) : null);
      return { levels: [], root: src ? normalizeTree(src, 0, 'n') : null };
    }
    if (rawLevels) {
      return {
        levels: rawLevels.map((raw, i) => ({ raw, key: raw.id !== undefined && raw.id !== null ? String(raw.id) : 'l' + i, depth: 0, children: [] })),
        root: null,
      };
    }
    if (rawRoot) return { levels: flattenTree(normalizeTree(rawRoot, 0, 'n')), root: null };
    return { levels: [], root: null };
  }, [d.levels, d.root, v]);

  const all = useMemo(() => (root ? flattenTree(root) : levels), [root, levels]);
  const byKey = useMemo(() => {
    const m = {};
    all.forEach((n) => { m[n.key] = n; });
    return m;
  }, [all]);
  const panelKeys = useMemo(() => all.filter(hasPanel).map((n) => n.key), [all]);

  /* inline open set */
  const [open, setOpen] = useState(() => {
    if (!inline) return new Set();
    if (Array.isArray(initialOpen)) return new Set(initialOpen.map(String));
    if (initialOpen === 'all') return new Set(panelKeys);
    return new Set();
  });

  /* drawer selection */
  const [sel, setSel] = useState(() => {
    if (inline || isEmpty(initialOpen) || initialOpen === 'none' || initialOpen === 'all') return null;
    return String(Array.isArray(initialOpen) ? initialOpen[0] : initialOpen);
  });

  const activate = useCallback(
    (key) => {
      if (inline) {
        setOpen((prev) => {
          const next = new Set(prev);
          if (next.has(key)) next.delete(key);
          else next.add(key);
          return next;
        });
      } else {
        setSel((prev) => (prev === key ? null : key));
      }
    },
    [inline]
  );

  const isOn = (key) => (inline ? open.has(key) : sel === key);

  const clickProps = (key) => ({
    role: 'button',
    tabIndex: 0,
    'aria-expanded': isOn(key),
    onClick: () => activate(key),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(key);
      }
    },
  });

  /* tooltip */
  const [tipState, setTipState] = useState(null);
  const tipApi = useMemo(
    () => ({
      show: (content, el) => setTipState({ content, el }),
      hide: () => setTipState(null),
    }),
    []
  );
  useEffect(() => {
    if (!tipState) return undefined;
    const h = () => setTipState(null);
    window.addEventListener('scroll', h, true);
    window.addEventListener('resize', h);
    return () => {
      window.removeEventListener('scroll', h, true);
      window.removeEventListener('resize', h);
    };
  }, [tipState]);

  const style = {
    '--hy-bg': t.bg,
    '--hy-panel': t.panel,
    '--hy-panelSoft': t.panelSoft,
    '--hy-panelSofter': t.panelSofter,
    '--hy-ink': t.ink,
    '--hy-title': t.title,
    '--hy-titleSoft': t.titleSoft,
    '--hy-titleLine': t.titleLine,
    '--hy-muted': t.muted,
    '--hy-line': t.line,
    '--hy-line2': t.line2,
    '--hy-accent': t.accent,
    '--hy-indigoSoft': t.indigoSoft,
    '--hy-warm': t.warm,
    '--hy-warmSoft': t.warmSoft,
    '--hy-warmLine': t.warmLine,
    '--hy-warmInk': t.warmInk,
    '--hy-sans': t.fontSans,
    '--hy-mono': t.fontMono,
    '--hy-math': t.fontMath,
  };

  const n = levels.length;
  const frac = (i) => (n > 1 ? i / (n - 1) : 1);

  /* ===== V1 pyramid ===== */
  const renderPyramid = () => (
    <div className={cls('hy-py', d.axis && 'hy-with-axis')}>
      {d.axis && (
        <div className="hy-axis">
          {rc(d.axis.top)}
          <span className="hy-axis-arrow" />
          <span className="hy-axis-ln hy-axis-ln-top" />
          <b>{rc(d.axis.label)}</b>
          <span className="hy-axis-ln" />
          {rc(d.axis.bottom)}
        </div>
      )}
      <div className="hy-py-stack">
        {levels.map((node, i) => {
          const r = node.raw;
          const can = hasPanel(node);
          const on = can && isOn(node.key);
          /* real pyramid: one straight slope from a pointed apex to the base. The apex tier is
             taller (room for its text); every tier's width follows the slope at its top and bottom. */
          const H0 = 112, H = 66, GAP = 5;
          const yTop = i === 0 ? 0 : H0 + GAP + (i - 1) * (H + GAP);
          const yBot = yTop + (i === 0 ? H0 : H);
          const total = H0 + (n - 1) * (H + GAP);
          const bottom = (yBot / total) * 100;
          const inset = (1 - yTop / yBot) * 50;
          const shade = r.flag ? 'hy-py-flag' : 'hy-py-s' + Math.min(Math.round((i / Math.max(n - 1, 1)) * 4), 4);
          const custom = {};
          if (!isEmpty(r.color)) custom.background = r.color;
          if (!isEmpty(r.textColor)) custom.color = r.textColor;
          return (
            <React.Fragment key={node.key}>
              <div
                className={cls('hy-py-tier', shade, i === 0 && 'hy-py-apex', !isEmpty(r.textColor) && 'hy-py-custom-ink', can && 'hy-click', on && 'hy-sel')}
                style={{ width: bottom + '%', height: (i === 0 ? H0 : H) + 'px', clipPath: 'polygon(' + inset + '% 0, ' + (100 - inset) + '% 0, 100% 100%, 0 100%)', ...custom }}
                {...(can ? clickProps(node.key) : {})}
              >
                {!isEmpty(r.rank) && <Tip className="hy-py-rank" tip={tipOf(r, 'rank')}>{rc(r.rank)}</Tip>}
                <span className="hy-py-name">{rc(r.name)}</span>
                {!isEmpty(r.sub) && <span className="hy-py-sub">{rc(r.sub)}</span>}
                {!isEmpty(r.symbol) && <Tip className="hy-py-sym" tip={tipOf(r, 'symbol')}>{rc(r.symbol)}</Tip>}
              </div>
              {on && <div className="hy-py-panel" style={{ width: bottom + '%' }}><PanelBody node={node} /></div>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  /* ===== V2 staircase ===== */
  const renderStaircase = () => (
    <>
      <div className="hy-st" style={{ gridTemplateColumns: 'repeat(' + Math.max(n, 1) + ', 1fr)' }}>
        {levels.map((node, i) => {
          const r = node.raw;
          const can = hasPanel(node);
          const on = can && isOn(node.key);
          return (
            <div key={node.key} className={cls('hy-st-step', r.flag && 'hy-flag')} style={{ '--hy-i': i }}>
              <div className={cls('hy-st-card', can && 'hy-click', on && 'hy-sel')} {...(can ? clickProps(node.key) : {})}>
                {i > 0 && <Tip className="hy-st-arrow" tip={tipOf(r, 'connector')}>↗</Tip>}
                <div className="hy-st-top">
                  <Tip className="hy-st-lv" tip={tipOf(r, 'rank')}>{!isEmpty(r.rank) ? rc(r.rank) : 'level ' + i}</Tip>
                  {can && <Chev />}
                </div>
                <div className="hy-st-name">{rc(r.name)}</div>
                {!isEmpty(r.symbol) && <Tip className="hy-st-def" tip={tipOf(r, 'symbol')} line>{rc(r.symbol)}</Tip>}
                {!isEmpty(r.sub) && <div className="hy-st-from">{rc(r.sub)}</div>}
                {!isEmpty(r.example) && <Tip className="hy-st-ex" tip={tipOf(r, 'example')}>{rc(r.example)}</Tip>}
                {!isEmpty(r.note) && <Tip className="hy-st-note" tip={tipOf(r, 'note')}>{rc(r.note)}</Tip>}
              </div>
              <div className="hy-st-riser" style={{ height: 10 + 160 * frac(i) + 'px' }} />
            </div>
          );
        })}
      </div>
      {d.base && (
        <div className="hy-st-base">
          <span>{rc(d.base.start)}</span>
          <span>{rc(d.base.middle)}</span>
          <span>{rc(d.base.end)}</span>
        </div>
      )}
    </>
  );

  /* ===== V3 chain ===== */
  const renderChain = () => (
    <div className="hy-dc-scroll" data-export-scroll="">
      <div className="hy-dc" style={{ minWidth: n * 150 + 'px' }}>
        {levels.map((node, i) => {
          const r = node.raw;
          const can = hasPanel(node);
          const on = can && isOn(node.key);
          return (
            <React.Fragment key={node.key}>
              {i > 0 && <Tip className="hy-dc-gt" tip={tipOf(r, 'connector')}>{rc(!isEmpty(d.connector) ? d.connector : '≪')}</Tip>}
              <div className={cls('hy-dc-col', i === n - 1 && 'hy-dark', r.flag && 'hy-flag')}>
                <div className={cls('hy-dc-card', can && 'hy-click', on && 'hy-sel')} {...(can ? clickProps(node.key) : {})}>
                  <Tip className="hy-dc-rank" tip={tipOf(r, 'rank')}>{!isEmpty(r.rank) ? rc(r.rank) : 'rank ' + (n - i)}</Tip>
                  <Tip className="hy-dc-expr" tip={tipOf(r, 'symbol')}>{rc(r.symbol)}</Tip>
                  <span className="hy-dc-name">{rc(r.name)}</span>
                  {!isEmpty(r.sub) && <span className="hy-dc-sub">{rc(r.sub)}</span>}
                  {!isEmpty(r.note) && <Tip className="hy-dc-note" tip={tipOf(r, 'note')}>{rc(r.note)}</Tip>}
                  {can && <Chev />}
                </div>
                <div className="hy-dc-bar" style={{ height: 14 + 140 * frac(i) + 'px' }} />
                {!isEmpty(r.example) && (
                  <Tip className="hy-dc-val" tip={tipOf(r, 'example')}>
                    {rc(r.exampleLabel)}
                    <b>{rc(r.example)}</b>
                  </Tip>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  /* ===== V4 layers ===== */
  const renderLayers = () => (
    <div className={cls('hy-ly', d.axis && 'hy-with-axis')}>
      {d.axis && (
        <div className="hy-axis hy-axis-up">
          <b>{rc(d.axis.label)}</b>
          <span className="hy-axis-ln" />
        </div>
      )}
      <div className="hy-ly-stack">
        {levels.map((node, i) => {
          const r = node.raw;
          const can = hasPanel(node);
          const on = can && isOn(node.key);
          return (
            <div
              key={node.key}
              className={cls('hy-ly-band', i === n - 1 ? 'hy-dark' : 'hy-ly-t' + Math.min(i, 3), r.flag && 'hy-flag', on && 'hy-open')}
            >
              <div className={cls('hy-ly-head', can && 'hy-click')} {...(can ? clickProps(node.key) : {})}>
                {can ? <Chev /> : <ChevGap />}
                <div className="hy-ly-name">
                  {rc(r.name)}
                  {!isEmpty(r.sub) && <small>{rc(r.sub)}</small>}
                </div>
                <div className="hy-ly-chips">
                  {(r.chips || []).map((c, ci) => (
                    <Tip key={ci} className={cls('hy-ly-chip', c.flag && 'hy-flag')} tip={c.tip}>{rc(c.label)}</Tip>
                  ))}
                </div>
              </div>
              {on && <div className="hy-ly-panel"><PanelBody node={node} /></div>}
            </div>
          );
        })}
      </div>
    </div>
  );

  /* ===== V5 derivation ===== */
  const renderTree = (nodes) => (
    <ul>
      {nodes.map((node) => {
        const r = node.raw;
        const can = hasPanel(node);
        const on = can && isOn(node.key);
        const autoRank = node.depth === 0 ? 'source' : node.depth === 1 ? 'derived' : 'level ' + node.depth;
        return (
          <li key={node.key}>
            {node.depth > 0 && r.edge && !isEmpty(r.edge.label) && (
              <Tip className={cls('hy-dt-op', r.edge.flag && 'hy-flag')} tip={r.edge.tip}>{rc(r.edge.label)}</Tip>
            )}
            <div
              className={cls('hy-dt-node', node.depth === 0 && 'hy-dark', node.depth > 0 && node.children.length === 0 && 'hy-leaf', r.flag && 'hy-flag', can && 'hy-click', on && 'hy-sel')}
              {...(can ? clickProps(node.key) : {})}
            >
              <Tip className="hy-dt-lv" tip={tipOf(r, 'rank')}>{!isEmpty(r.rank) ? rc(r.rank) : autoRank}</Tip>
              {!isEmpty(r.symbol) && <Tip className="hy-dt-f" tip={tipOf(r, 'symbol')}>{rc(r.symbol)}</Tip>}
              {!isEmpty(r.name) && <span className="hy-dt-name">{rc(r.name)}</span>}
              {!isEmpty(r.sub) && <span className="hy-dt-n">{rc(r.sub)}</span>}
              {can && <Chev />}
            </div>
            {node.children.length > 0 && renderTree(node.children)}
          </li>
        );
      })}
    </ul>
  );

  const renderDerivation = () =>
    root ? (
      <div className="hy-dt-scroll" data-export-scroll="">
        <div className="hy-dt">{renderTree([root])}</div>
      </div>
    ) : null;

  const body = {
    pyramid: renderPyramid,
    staircase: renderStaircase,
    chain: renderChain,
    layers: renderLayers,
    derivation: renderDerivation,
  }[v]();

  /* drawer content */
  const selNode = sel ? byKey[sel] : null;
  const drawerTitle = (node) => {
    const r = node.raw;
    if (!isEmpty(r.drawerTitle)) return rc(r.drawerTitle);
    const parts = [r.rank, r.name].filter((x) => !isEmpty(x));
    if (parts.length === 0 && !isEmpty(r.symbol)) parts.push(r.symbol);
    return parts.map((p, i) => <React.Fragment key={i}>{i > 0 && ' · '}{rc(p)}</React.Fragment>);
  };

  const hasDrawerItems = !inline && panelKeys.length > 0;

  return (
    <TipCtx.Provider value={tipApi}>
      <div ref={rootRef} className={cls('hy-root', 'hy-v-' + v, framed && 'hy-framed', className)} style={style}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        {((inline && showToolbar && panelKeys.length > 0) || exportable) && (
          <div className="hy-bar" data-export-ignore="">
            {inline && showToolbar && panelKeys.length > 0 && (
              <div className="hy-tools">
                <button type="button" onClick={() => setOpen(new Set(panelKeys))}>{rc(labels.expandAll)}</button>
                <button type="button" onClick={() => setOpen(new Set())}>{rc(labels.collapseAll)}</button>
              </div>
            )}
            {exportable && <ExportButton formats={exportFormats} onExport={exportAs} busy={busy} theme={t} />}
          </div>
        )}

        <Preface d={d} />

        {body}

        {d.rule && (
          <div className="hy-rule">
            {!isEmpty(d.rule.label) && <b>{rc(d.rule.label)}</b>}
            <span>{rc(d.rule.text)}</span>
          </div>
        )}

        {Array.isArray(d.walk) && d.walk.length > 0 && (
          <div className="hy-walk">
            {d.walk.map((s, i) => (
              <Tip key={i} className={s.sep ? 'hy-walk-sep' : 'hy-walk-step'} tip={s.tip}>{rc(s.text)}</Tip>
            ))}
          </div>
        )}

        {Array.isArray(d.notes) && d.notes.length > 0 && (
          <div className="hy-notes">
            {d.notes.map((x, i) => <span key={i}>{rc(x)}</span>)}
          </div>
        )}

        {Array.isArray(d.legend) && d.legend.length > 0 && (
          <div className="hy-legend">
            {d.legend.map((l, i) => (
              <span key={i}><i className={cls('hy-sw', 'hy-tone-' + (l.tone || 'accent'))} />{rc(l.label)}</span>
            ))}
          </div>
        )}

        <Conclusion d={d} />

        {hasDrawerItems && (
          <div className="hy-dr" aria-live="polite">
            {selNode ? (
              <>
                <div className="hy-dr-k">{drawerTitle(selNode)}</div>
                <PanelBody node={selNode} />
              </>
            ) : (
              <p className="hy-dr-empty">{rc(labels.drawerEmpty)}</p>
            )}
          </div>
        )}

        <TipLayer state={tipState} />
      </div>
    </TipCtx.Provider>
  );
}

/* ---------- scoped CSS ---------- */

const CSS = `
.hy-root{background:var(--hy-bg);color:var(--hy-ink);font-family:var(--hy-sans);line-height:1.5;box-sizing:border-box}
.hy-root *,.hy-root *::before,.hy-root *::after{box-sizing:border-box}
.hy-framed{border:1px solid var(--hy-line);border-radius:10px;padding:24px}

/* click affordance: border shift only, no glow */
.hy-click{cursor:pointer;user-select:none;transition:border-color .12s,background-color .12s}
.hy-click:focus-visible{outline:2px solid var(--hy-accent);outline-offset:2px}

/* expand control: small outlined square, thin plus; filled when open */
.hy-chev,.hy-chev-gap{width:22px;height:22px;flex:none;display:inline-block}
.hy-chev{position:relative;border:1px solid var(--hy-line2);border-radius:5px;background:var(--hy-panel);transition:background-color .12s,border-color .12s}
.hy-chev::before,.hy-chev::after{content:'';position:absolute;left:50%;top:50%;width:10px;height:1.5px;margin:-.75px 0 0 -5px;background:var(--hy-accent);transition:transform .15s}
.hy-chev::after{transform:rotate(90deg)}
.hy-click:hover .hy-chev{border-color:var(--hy-accent)}
.hy-open > .hy-click .hy-chev,.hy-sel .hy-chev{background:var(--hy-accent);border-color:var(--hy-accent)}
.hy-open > .hy-click .hy-chev::before,.hy-open > .hy-click .hy-chev::after,.hy-sel .hy-chev::before,.hy-sel .hy-chev::after{background:#fff}
.hy-open > .hy-click .hy-chev::after,.hy-sel .hy-chev::after{transform:rotate(0deg)}
.hy-dark > .hy-click .hy-chev,.hy-dark.hy-click .hy-chev,.hy-dark .hy-dc-card .hy-chev{background:transparent;border-color:var(--hy-titleLine)}
.hy-dark .hy-chev::before,.hy-dark .hy-chev::after{background:#fff}
.hy-dark > .hy-click:hover .hy-chev,.hy-dark.hy-click:hover .hy-chev{border-color:#fff}
.hy-dark.hy-open > .hy-click .hy-chev,.hy-dark.hy-sel .hy-chev,.hy-dark .hy-sel .hy-chev{background:#fff;border-color:#fff}
.hy-dark.hy-open > .hy-click .hy-chev::before,.hy-dark.hy-open > .hy-click .hy-chev::after,.hy-dark.hy-sel .hy-chev::before,.hy-dark.hy-sel .hy-chev::after,.hy-dark .hy-sel .hy-chev::before,.hy-dark .hy-sel .hy-chev::after{background:var(--hy-title)}

/* tooltip */
.hy-has-tip{cursor:help}
.hy-tipline{text-decoration:underline dotted var(--hy-line2);text-underline-offset:3px}
.hy-tip{position:fixed;z-index:1000;max-width:280px;padding:7px 10px;border-radius:5px;background:var(--hy-ink);color:#fff;font-family:var(--hy-sans);font-size:12px;font-weight:400;line-height:1.45;text-transform:none;letter-spacing:0;text-align:left;pointer-events:none}
.hy-tip::after{content:'';position:absolute;left:var(--hy-ax,50%);bottom:-4px;width:8px;height:8px;background:var(--hy-ink);transform:translateX(-50%) rotate(45deg)}
.hy-tip-below::after{bottom:auto;top:-4px}

/* toolbar */
.hy-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:8px;margin-bottom:16px}
.hy-tools{display:flex;gap:0;border:1px solid var(--hy-line2);border-radius:5px;overflow:hidden}
.hy-tools button{font-family:var(--hy-sans);font-size:12px;font-weight:500;padding:5px 12px;border:0;background:var(--hy-panel);color:var(--hy-ink);cursor:pointer}
.hy-tools button + button{border-left:1px solid var(--hy-line2)}
.hy-tools button:hover{background:var(--hy-panelSofter);color:var(--hy-accent)}

/* panel body */
.hy-xp{font-size:13.5px;line-height:1.55}
.hy-xp > * + *{margin-top:10px}
.hy-xp-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));border:1px solid var(--hy-line);border-radius:6px;overflow:hidden}
.hy-xp-fact{padding:8px 12px;background:var(--hy-panel);border-right:1px solid var(--hy-line)}
.hy-xp-fact:last-child{border-right:0}
.hy-xp-k{display:block;font-size:11px;font-weight:600;color:var(--hy-muted);margin-bottom:1px}
.hy-xp-v{font-family:var(--hy-math);font-size:15px;color:var(--hy-ink)}
.hy-xp-note{font-size:13px;color:var(--hy-muted)}
.hy-xp-warn{padding:8px 12px;border-left:3px solid var(--hy-warm);background:var(--hy-warmSoft);color:var(--hy-warmInk);font-size:13px}

/* preface / conclusion */
/* preface / conclusion: neutral bordered blocks, kept well apart from the diagram */
.hy-prose{position:relative;background:#ffffff;border:2px solid #94a3b8;border-radius:14px;padding:16px 20px}
.hy-prose-labelled{padding-top:22px}
.hy-prose-pre{margin:8px 0 34px}
.hy-prose-con{margin:34px 0 0}
.hy-prose-label{display:table;margin:-33px 0 12px -4px;background:#ffffff;padding:0 8px;font-family:var(--hy-mono);font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#334155;line-height:18px}
.hy-prose-label *,.hy-prose-title *{margin:0!important;padding:0;display:inline}
.hy-prose-title{font-size:16px;font-weight:600;color:#0f172a;margin-bottom:4px}
.hy-prose-body{font-size:14.5px;line-height:1.6;color:#334155}
.hy-prose-body p{margin:0 0 8px}
.hy-prose-body p:last-child{margin-bottom:0}

/* drawer */
.hy-dr{margin-top:20px;border:1px solid var(--hy-line);border-top:2px solid var(--hy-title);border-radius:0 0 6px 6px;background:var(--hy-panel);padding:12px 16px 14px}
.hy-dr-k{font-size:12px;font-weight:700;color:var(--hy-title);padding-bottom:8px;margin-bottom:10px;border-bottom:1px solid var(--hy-line)}
.hy-dr-empty{margin:0;font-size:13px;color:var(--hy-muted)}

/* shared extras */
.hy-axis{display:flex;flex-direction:column;align-items:center;justify-content:space-between;font-size:11px;font-weight:500;color:var(--hy-muted)}
.hy-axis b{color:var(--hy-title);font-weight:600;font-size:11px;letter-spacing:.04em;text-transform:uppercase;writing-mode:vertical-rl;transform:rotate(180deg)}
.hy-axis-ln{flex:1;width:1px;background:var(--hy-line2);margin:6px 0}
.hy-axis-up{justify-content:flex-start}
.hy-axis-up .hy-axis-ln{position:relative}
.hy-axis-up .hy-axis-ln::after{content:'';position:absolute;top:-1px;left:-4px;border:4.5px solid transparent;border-bottom:6px solid var(--hy-line2);border-top:0}
.hy-rule{margin-top:20px;display:flex;gap:12px;align-items:baseline;padding:9px 14px;border-left:3px solid var(--hy-warm);background:var(--hy-warmSoft);font-size:13.5px;color:var(--hy-ink)}
.hy-rule b{font-size:11px;font-weight:700;color:var(--hy-warmInk);letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
.hy-walk{margin-top:12px;padding:10px 14px;border:1px solid var(--hy-line);border-radius:6px;font-family:var(--hy-math);font-size:16px;color:var(--hy-ink)}
.hy-walk-sep{font-family:var(--hy-sans);font-size:11px;font-weight:600;color:var(--hy-muted);margin:0 10px}
.hy-v-pyramid .hy-rule,.hy-v-pyramid .hy-walk,.hy-v-layers .hy-rule,.hy-v-layers .hy-walk{margin-left:56px}
.hy-notes{margin-top:14px;display:flex;flex-wrap:wrap;gap:6px 20px;font-size:12.5px;color:var(--hy-muted)}
.hy-legend{display:flex;flex-wrap:wrap;gap:18px;margin-top:18px;padding-top:12px;border-top:1px solid var(--hy-line);font-size:12px;color:var(--hy-muted)}
.hy-sw{display:inline-block;width:12px;height:12px;border-radius:2px;vertical-align:-2px;margin-right:6px}
.hy-sw.hy-tone-accent{background:var(--hy-panelSoft);border:1px solid var(--hy-accent)}
.hy-sw.hy-tone-warm{background:var(--hy-warmSoft);border:1px solid var(--hy-warm)}
.hy-sw.hy-tone-muted{background:var(--hy-panel);border:1px solid var(--hy-line2)}
.hy-sw.hy-tone-dashed{background:var(--hy-panel);border:1px dashed var(--hy-muted)}

/* ===== V1 pyramid (real pyramid: trapezoid tiers) ===== */
.hy-py{display:grid;grid-template-columns:1fr;gap:16px}
.hy-py.hy-with-axis{grid-template-columns:84px minmax(0,1fr) 84px;gap:0}
.hy-py.hy-with-axis .hy-py-stack{width:88%}
.hy-v-pyramid .hy-axis{text-align:center;font-size:11.5px;line-height:1.25;color:#475569;padding:2px 0}
.hy-v-pyramid .hy-axis-ln{width:2px;background:#94a3b8}
.hy-v-pyramid .hy-axis-ln-top{margin-top:0}
.hy-v-pyramid .hy-axis-arrow{display:block;width:0;height:0;margin-top:8px;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:10px solid #94a3b8}
.hy-v-pyramid .hy-axis b{font-size:11px;padding:8px 0;color:var(--hy-title)}
.hy-py-stack{display:flex;flex-direction:column;align-items:center;gap:5px;width:80%;margin:0 auto}
.hy-py-tier{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:6px 12%;transition:filter .12s;overflow:hidden}
.hy-py-apex{justify-content:flex-end;padding:0 4% 12px}
.hy-py-apex .hy-py-name{font-size:14px}
.hy-py-custom-ink .hy-py-sub{color:inherit!important;opacity:.8}
.hy-py-tier.hy-click:hover{filter:brightness(1.08)}
.hy-py-tier.hy-sel{filter:brightness(1.12)}
.hy-py-s0{background:var(--hy-title);color:#fff}
.hy-py-s1{background:var(--hy-titleLine);color:#fff}
.hy-py-s2{background:#6a8be3;color:#fff}
.hy-py-s3{background:#9bb3ee;color:var(--hy-title)}
.hy-py-s4{background:var(--hy-indigoSoft);color:var(--hy-title)}
.hy-py-flag{background:var(--hy-warmSoft);color:var(--hy-warmInk)}
.hy-py-name{font-size:15px;font-weight:600;line-height:1.3}
.hy-py-tier a{color:inherit!important;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}
.hy-py-sub{font-size:12.5px;line-height:1.35;margin-top:2px;opacity:.85}
.hy-py-s0 .hy-py-sub,.hy-py-s1 .hy-py-sub,.hy-py-s2 .hy-py-sub{color:#e6edfc;opacity:1}
.hy-py-rank{font-family:var(--hy-mono);font-size:10.5px;font-weight:600;letter-spacing:.06em;opacity:.8;margin-bottom:2px}
.hy-py-sym{font-family:var(--hy-math);font-size:16px;margin-top:3px}
.hy-py-panel{border:1px solid var(--hy-line);border-radius:6px;padding:12px 14px;background:var(--hy-panel);margin:2px 0 6px}
@media (max-width:720px){
  .hy-py-tier{padding:10px 8%}
  .hy-py.hy-with-axis{grid-template-columns:24px 1fr}
  .hy-v-pyramid .hy-rule,.hy-v-pyramid .hy-walk{margin-left:0}
}

/* ===== V2 staircase ===== */
.hy-st{display:grid;gap:0;align-items:end;border-bottom:2px solid var(--hy-title)}
.hy-st-step{display:flex;flex-direction:column;min-width:0;padding:0 5px}
.hy-st-card{background:var(--hy-panel);border:1px solid var(--hy-line2);border-top:3px solid var(--hy-accent);border-radius:6px 6px 0 0;padding:10px 12px 12px;position:relative}
.hy-st-card.hy-click:hover{border-color:var(--hy-accent)}
.hy-st-card.hy-sel{border-color:var(--hy-accent);background:var(--hy-panelSofter)}
.hy-st-step.hy-flag .hy-st-card{border-top-color:var(--hy-warm)}
.hy-st-top{display:flex;justify-content:space-between;align-items:center;gap:8px}
.hy-st-lv{font-family:var(--hy-mono);font-size:11px;font-weight:600;color:var(--hy-muted)}
.hy-st-name{font-weight:700;color:var(--hy-ink);font-size:14px;margin:4px 0 6px}
.hy-st-def{display:inline-block;font-family:var(--hy-math);font-size:16px;color:var(--hy-title)}
.hy-st-from{font-size:12px;color:var(--hy-muted);margin-top:4px}
.hy-st-ex{display:block;margin-top:8px;padding-top:8px;border-top:1px solid var(--hy-line);font-family:var(--hy-math);font-size:14px;color:var(--hy-ink);word-break:break-all}
.hy-st-note{display:block;margin-top:8px;font-size:12px;color:var(--hy-warmInk);border-left:2px solid var(--hy-warm);padding:1px 0 1px 8px}
.hy-st-riser{background:var(--hy-panelSoft);border:1px solid var(--hy-line2);border-top:0;border-bottom:0;margin:0}
.hy-st-step:last-child .hy-st-riser{background:var(--hy-indigoSoft)}
.hy-st-arrow{position:absolute;left:-17px;top:14px;width:22px;height:22px;border-radius:5px;background:var(--hy-panel);border:1px solid var(--hy-line2);color:var(--hy-accent);font-size:12px;display:grid;place-items:center;font-family:var(--hy-sans);z-index:1}
.hy-st-base{margin-top:8px;font-size:11.5px;font-weight:500;color:var(--hy-muted);display:flex;justify-content:space-between;gap:12px}
@media (max-width:820px){
  .hy-st{grid-template-columns:1fr!important;gap:8px;border-bottom:0}
  .hy-st-card{border-radius:6px}
  .hy-st-riser,.hy-st-arrow,.hy-st-base{display:none}
  .hy-st-step{margin-left:calc(var(--hy-i) * 14px)}
}

/* ===== V3 chain ===== */
.hy-dc-scroll{overflow-x:auto;padding-bottom:4px}
.hy-dc{display:flex;align-items:flex-end}
.hy-dc-col{flex:1;display:flex;flex-direction:column;align-items:stretch;min-width:0}
.hy-dc-card{border:1px solid var(--hy-line2);border-radius:6px;background:var(--hy-panel);padding:10px 10px 12px;text-align:center;position:relative;display:flex;flex-direction:column;align-items:center}
.hy-dc-card.hy-click:hover{border-color:var(--hy-accent)}
.hy-dc-card.hy-sel{border-color:var(--hy-accent);background:var(--hy-panelSofter)}
.hy-dc-col.hy-dark .hy-dc-card,.hy-dc-col.hy-dark .hy-dc-card.hy-click:hover{background:var(--hy-title);border-color:var(--hy-title)}
.hy-dc-col.hy-flag .hy-dc-card{border-color:var(--hy-warm)}
.hy-dc-card .hy-chev{position:absolute;right:6px;top:6px}
.hy-dc-rank{font-family:var(--hy-mono);font-size:10.5px;font-weight:600;color:var(--hy-muted)}
.hy-dc-expr{font-family:var(--hy-math);font-size:22px;color:var(--hy-title);margin:2px 0}
.hy-dc-name{font-size:12.5px;font-weight:600;color:var(--hy-ink)}
.hy-dc-sub{font-size:12px;color:var(--hy-muted)}
.hy-dc-note{margin-top:6px;font-size:11.5px;color:var(--hy-warmInk);border-top:1px solid var(--hy-warmLine);padding-top:4px}
.hy-dc-col.hy-dark .hy-dc-rank,.hy-dc-col.hy-dark .hy-dc-sub{color:var(--hy-titleSoft)}
.hy-dc-col.hy-dark .hy-dc-name,.hy-dc-col.hy-dark .hy-dc-expr{color:#fff}
.hy-dc-bar{margin:12px auto 0;width:44%;background:var(--hy-indigoSoft);border:1px solid var(--hy-line2);border-bottom:0}
.hy-dc-col.hy-dark .hy-dc-bar{background:var(--hy-title);border-color:var(--hy-title)}
.hy-dc-col.hy-flag .hy-dc-bar{background:var(--hy-warmSoft);border-color:var(--hy-warmLine)}
.hy-dc-val{display:block;font-family:var(--hy-sans);font-size:11px;color:var(--hy-muted);text-align:center;padding:8px 0 0;border-top:2px solid var(--hy-title)}
.hy-dc-val b{display:block;font-family:var(--hy-math);font-size:14px;color:var(--hy-ink);font-weight:400}
.hy-dc-gt{flex:0 0 30px;align-self:center;text-align:center;font-family:var(--hy-math);font-size:20px;color:var(--hy-muted);margin-bottom:60px}
.hy-dc-gt.hy-has-tip:hover{color:var(--hy-accent)}

/* ===== V4 layers ===== */
.hy-ly{display:grid;grid-template-columns:1fr;gap:16px}
.hy-ly.hy-with-axis{grid-template-columns:44px 1fr}
.hy-ly-stack{border:1px solid var(--hy-line2);border-radius:6px;overflow:hidden}
.hy-ly-band{border-top:1px solid var(--hy-line2);background:var(--hy-panel)}
.hy-ly-band:first-child{border-top:0}
.hy-ly-t1{background:var(--hy-panelSofter)}
.hy-ly-t2{background:var(--hy-panelSoft)}
.hy-ly-t3{background:var(--hy-indigoSoft)}
.hy-ly-band.hy-dark{background:var(--hy-title);border-top-color:var(--hy-title)}
.hy-ly-band.hy-flag:not(.hy-dark){background:var(--hy-warmSoft)}
.hy-ly-head{display:grid;grid-template-columns:22px 180px 1fr;gap:14px;align-items:center;padding:12px 16px}
.hy-ly-head.hy-click:hover{background:rgba(29,78,216,.04)}
.hy-ly-band.hy-dark .hy-ly-head.hy-click:hover{background:rgba(255,255,255,.05)}
.hy-ly-name{font-weight:700;color:var(--hy-ink);font-size:14.5px}
.hy-ly-name small{display:block;font-weight:400;font-size:12px;color:var(--hy-muted)}
.hy-ly-band.hy-dark .hy-ly-name{color:#fff}
.hy-ly-band.hy-dark .hy-ly-name small{color:var(--hy-titleSoft)}
.hy-ly-chips{display:flex;flex-wrap:wrap;gap:6px}
.hy-ly-chip{font-size:12.5px;padding:3px 9px;border-radius:4px;background:var(--hy-panel);border:1px solid var(--hy-line2);color:var(--hy-ink)}
.hy-ly-chip.hy-has-tip:hover{border-color:var(--hy-accent)}
.hy-ly-band.hy-dark .hy-ly-chip{background:transparent;border-color:var(--hy-titleLine);color:#fff}
.hy-ly-chip.hy-flag,.hy-ly-band.hy-dark .hy-ly-chip.hy-flag{background:var(--hy-warmSoft);border-color:var(--hy-warmLine);color:var(--hy-warmInk)}
.hy-ly-panel{margin:0 16px 14px 52px;padding:12px 14px;border-radius:6px;background:var(--hy-panel);border:1px solid var(--hy-line);color:var(--hy-ink)}
.hy-ly-band.hy-dark .hy-ly-panel{border-color:var(--hy-titleLine)}
@media (max-width:720px){
  .hy-ly-head{grid-template-columns:22px 1fr}
  .hy-ly-chips{grid-column:2}
  .hy-ly.hy-with-axis{grid-template-columns:24px 1fr}
  .hy-ly-panel{margin-left:16px}
  .hy-v-layers .hy-rule,.hy-v-layers .hy-walk{margin-left:0}
}

/* ===== V5 derivation ===== */
.hy-dt-scroll{overflow-x:auto}
.hy-dt{min-width:900px}
.hy-dt ul{list-style:none;margin:0;padding:36px 0 0;display:flex;justify-content:center;position:relative}
.hy-dt > ul{padding-top:0}
.hy-dt li{position:relative;padding:36px 8px 0;flex:1;display:flex;flex-direction:column;align-items:center}
.hy-dt > ul > li{padding-top:0}
.hy-dt li::before,.hy-dt li::after{content:'';position:absolute;top:0;right:50%;width:50%;height:36px;border-top:1px solid var(--hy-line2)}
.hy-dt li::after{right:auto;left:50%;border-left:1px solid var(--hy-line2)}
.hy-dt li:only-child::before{display:none}
.hy-dt li:only-child::after{border-top:0}
.hy-dt li:first-child::before,.hy-dt li:last-child::after{border:0}
.hy-dt li:last-child::before{border-right:1px solid var(--hy-line2);border-radius:0 6px 0 0}
.hy-dt li:first-child::after{border-radius:6px 0 0 0}
.hy-dt ul ul::before{content:'';position:absolute;top:0;left:50%;height:36px;border-left:1px solid var(--hy-line2)}
.hy-dt > ul > li::before,.hy-dt > ul > li::after{display:none}
.hy-dt-op{position:absolute;top:8px;left:50%;transform:translateX(-50%);z-index:1;font-family:var(--hy-sans);font-size:11px;font-weight:500;color:var(--hy-accent);background:var(--hy-panel);border:1px solid var(--hy-line2);border-radius:4px;padding:1px 7px;white-space:nowrap}
.hy-dt-op.hy-flag{color:var(--hy-warmInk);border-color:var(--hy-warmLine);background:var(--hy-warmSoft)}
.hy-dt-node{background:var(--hy-panel);border:1px solid var(--hy-line2);border-top:3px solid var(--hy-accent);border-radius:6px;padding:9px 34px 11px;text-align:center;min-width:170px;position:relative;display:flex;flex-direction:column;align-items:center}
.hy-dt-node.hy-click:hover{border-color:var(--hy-accent)}
.hy-dt-node.hy-sel{border-color:var(--hy-accent);background:var(--hy-panelSofter)}
.hy-dt-node .hy-chev{position:absolute;right:6px;top:6px}
.hy-dt-node.hy-dark,.hy-dt-node.hy-dark.hy-click:hover,.hy-dt-node.hy-dark.hy-sel{background:var(--hy-title);border-color:var(--hy-title)}
.hy-dt-node.hy-leaf{border-top-color:var(--hy-line2);background:var(--hy-panelSofter)}
.hy-dt-node.hy-flag{border-top-color:var(--hy-warm)}
.hy-dt-lv{font-family:var(--hy-mono);font-size:10.5px;font-weight:600;color:var(--hy-muted)}
.hy-dt-f{font-family:var(--hy-math);font-size:17px;color:var(--hy-title);white-space:nowrap}
.hy-dt-name{font-size:13px;font-weight:600;color:var(--hy-ink)}
.hy-dt-n{font-size:12px;color:var(--hy-muted)}
.hy-dt-node.hy-dark .hy-dt-lv,.hy-dt-node.hy-dark .hy-dt-n{color:var(--hy-titleSoft)}
.hy-dt-node.hy-dark .hy-dt-f,.hy-dt-node.hy-dark .hy-dt-name{color:#fff}
.hy-dt-node.hy-dark .hy-dt-f{font-size:20px}
`;
