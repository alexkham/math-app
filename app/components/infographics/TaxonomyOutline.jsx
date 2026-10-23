'use client';

/*
 * TaxonomyOutline
 * ------------------------------------------------------------------
 * Depth-first hierarchical classification. Every node carries a name,
 * an optional definition and example, and an optional expandable panel.
 *
 * 'use client' is required: expand / collapse state (and the tree-table
 * detail rows, which cannot use <details>) live in React state.
 *
 * Variants (V1 = default):
 *   outline    indented rows with rails, panel continues the row card
 *   table      tree in the first column, fields in aligned columns
 *   numbered   1 / 1.1 / 1.1.1 document outline, panel as inset aside
 *   accordion  branches fold their children, leaves fold their panel
 *   filetree   box-drawing glyphs, dense fixed-height rows
 *   gutter     full-width rows, depth as stacked bars + breadcrumb
 *
 * Props
 *   data         required, see below
 *   variant      'outline' | 'table' | 'numbered' | 'accordion' | 'filetree' | 'gutter'
 *   theme        partial, merged over DEFAULT_THEME (colours + fonts)
 *   initialOpen  'none' | 'all' | [ids]
 *                default: accordion opens every branch, others open nothing
 *   showToolbar  expand all / collapse all buttons (default true)
 *   framed       draw the bordered frame (default true)
 *   className    extra class on the wrapper
 *   exportable     show PNG / PDF download buttons (default true)
 *   exportFormats  ['png', 'pdf'] — which buttons, in order
 *   fileName       download base name, no extension (default 'taxonomy-outline')
 *                  the download is exactly what is rendered; toolbar and
 *                  buttons are left out, the table is captured at full width
 *
 * data = {
 *   nodes: [ node, ... ],                 top-level nodes
 *   columns?: { name, def, example, meta }   table headers
 *   labels?:  { expandAll, collapseAll }
 *   legend?:  [ { label, tone } ]          tone: 'accent' | 'warm' | 'muted'
 * }
 *
 * node = {
 *   id?        stable key (defaults to its path, e.g. "0.1.2")
 *   name       string | ReactNode
 *   def?       short definition
 *   example?   formula / example (math font)
 *   meta?      small side text — table column, accordion badge, gutter sub-line
 *              (table / accordion fall back to the child count)
 *   tag?       { label, tone } — filetree right-hand tag
 *   crumb?     breadcrumb text for the gutter variant (defaults to name)
 *   flag?      true → amber treatment (restriction, warning)
 *   panel?     expandable content, any of:
 *                string                     → run through processContent
 *                ReactNode                  → rendered as-is (child component)
 *                (rawNode) => ReactNode     → render prop
 *                { text, facts:[{label, value}], note, warn, content }
 *                                           → structured panel; content = ReactNode slot
 *   children?  [ node, ... ]
 * }
 *
 * Every text field accepts a plain string (run through processContent:
 * $math$, **bold**, @[code]@, [label](!/path)) or a ReactNode.
 */

import React, { useState, useMemo, useCallback, useRef, isValidElement } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { useExport } from './utils/useExport';
import ExportButton from './utils/ExportButton';

export const DEFAULT_THEME = {
  bg: '#ffffff',
  panel: '#ffffff',
  panelSoft: '#e8eefc',
  panelSofter: '#f5f8ff',
  ink: '#0f172a',
  title: '#06357A',
  titleSoft: '#bfd0f5',
  titleLine: '#3b5bb5',
  muted: '#64748b',
  line: '#e2e8f0',
  line2: '#9bb3ee',
  accent: '#2563EB',
  indigoSoft: '#dbe6fd',
  warm: '#B45309',
  warmSoft: '#fffbeb',
  warmLine: '#f2d48a',
  warmInk: '#92400e',
  fontSans: "'Inter', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace",
  fontMath: "'Cambria Math', 'STIX Two Math', 'Times New Roman', serif",
};

const VARIANTS = ['outline', 'table', 'numbered', 'accordion', 'filetree', 'gutter'];

const DEFAULT_COLUMNS = { name: 'Type', def: 'Definition', example: 'Example', meta: 'Children' };
const DEFAULT_LABELS = { expandAll: 'expand all', collapseAll: 'collapse all' };

/* ---------- helpers ---------- */

const cls = (...a) => a.filter(Boolean).join(' ');

const isEmpty = (v) => v === undefined || v === null || v === '' || v === false;

const rc = (v) => (isEmpty(v) ? null : typeof v === 'string' ? processContent(v) : v);

const hasPanel = (n) => !isEmpty(n.raw.panel);

function normalize(list, depth, parentKey, ancestors, lastStack, numPrefix) {
  return (list || []).map((raw, i, arr) => {
    const isLast = i === arr.length - 1;
    const key = raw.id !== undefined && raw.id !== null ? String(raw.id) : parentKey ? parentKey + '.' + i : String(i);
    const num = numPrefix ? numPrefix + '.' + (i + 1) : String(i + 1);
    const stack = depth === 0 ? [] : [...lastStack, isLast];
    const node = { raw, key, depth, num, isLast, ancestors, stack };
    node.children = normalize(raw.children, depth + 1, key, [...ancestors, raw], stack, num);
    return node;
  });
}

function flatten(list, out = []) {
  list.forEach((n) => {
    out.push(n);
    flatten(n.children, out);
  });
  return out;
}

const treeGlyph = (n) =>
  n.stack.length === 0
    ? ''
    : n.stack.slice(0, -1).map((l) => (l ? '    ' : '│   ')).join('') + (n.isLast ? '└── ' : '├── ');

const tableGlyph = (n) =>
  n.stack.length === 0
    ? ''
    : n.stack.slice(0, -1).map((l) => (l ? '   ' : '│  ')).join('') + (n.isLast ? '└─ ' : '├─ ');

/* rails continuing down the left edge of a filetree panel */
const panelRails = (n) => [...n.stack.map((l) => !l), n.children.length > 0];

const crumbOf = (raw) => (!isEmpty(raw.crumb) ? raw.crumb : typeof raw.name === 'string' ? raw.name : '');

/* ---------- panel ---------- */

function PanelBody({ node }) {
  const p = node.raw.panel;
  if (isEmpty(p)) return null;
  if (typeof p === 'function') return <div className="to-xp">{p(node.raw)}</div>;
  if (typeof p === 'string') return <div className="to-xp"><div className="to-xp-text">{processContent(p)}</div></div>;
  if (isValidElement(p) || Array.isArray(p) || typeof p !== 'object') return <div className="to-xp">{p}</div>;
  return (
    <div className="to-xp">
      {!isEmpty(p.text) && <div className="to-xp-text">{rc(p.text)}</div>}
      {Array.isArray(p.facts) && p.facts.length > 0 && (
        <div className="to-xp-facts">
          {p.facts.map((f, i) => (
            <div className="to-xp-fact" key={i}>
              <span className="to-xp-k">{rc(f.label)}</span>
              <span className="to-xp-v">{rc(f.value)}</span>
            </div>
          ))}
        </div>
      )}
      {!isEmpty(p.note) && <div className="to-xp-note">{rc(p.note)}</div>}
      {!isEmpty(p.content) && <div className="to-xp-content">{p.content}</div>}
      {!isEmpty(p.warn) && <div className="to-xp-warn">{rc(p.warn)}</div>}
    </div>
  );
}

const Chev = ({ small }) => (
  <span className={cls('to-chev', small && 'to-chev-sm')} aria-hidden="true">▸</span>
);

const ChevGap = ({ small }) => <span className={cls('to-chev-gap', small && 'to-chev-sm')} aria-hidden="true" />;

/* ---------- component ---------- */

/* ---------- neutral bordered text blocks (same look as Hierarchy / TopDownTree / NestedContainment) ---------- */

const prosePars = (v) => (Array.isArray(v) ? v.map((p, i) => <p key={i}>{rc(p)}</p>) : rc(v));

function ProseBlock({ label, title, body, where }) {
  if (isEmpty(label) && isEmpty(title) && isEmpty(body)) return null;
  return (
    <div className={cls('to-prose', 'to-prose-' + where, !isEmpty(label) && 'to-prose-labelled')}>
      {!isEmpty(label) && <span className="to-prose-label">{rc(label)}</span>}
      {!isEmpty(title) && <div className="to-prose-title">{rc(title)}</div>}
      {!isEmpty(body) && <div className="to-prose-body">{prosePars(body)}</div>}
    </div>
  );
}

export default function TaxonomyOutline({
  data,
  variant = 'outline',
  theme,
  initialOpen,
  showToolbar = true,
  framed = true,
  className,
  exportable = true,
  exportFormats = ['png', 'pdf'],
  fileName = 'taxonomy-outline',
}) {
  const v = VARIANTS.includes(variant) ? variant : 'outline';
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const rootRef = useRef(null);
  const { exportAs, busy } = useExport(rootRef, { fileName, background: t.bg });
  const columns = { ...DEFAULT_COLUMNS, ...((data && data.columns) || {}) };
  const labels = { ...DEFAULT_LABELS, ...((data && data.labels) || {}) };

  const tree = useMemo(() => normalize((data && data.nodes) || [], 0, '', [], [], ''), [data]);
  const flat = useMemo(() => flatten(tree), [tree]);
  const maxDepth = useMemo(() => flat.reduce((m, n) => Math.max(m, n.depth), 0), [flat]);

  const openable = useCallback(
    (n) => (v === 'accordion' && n.children.length > 0) || hasPanel(n),
    [v]
  );
  const openableKeys = useMemo(() => flat.filter(openable).map((n) => n.key), [flat, openable]);

  const [open, setOpen] = useState(() => {
    if (Array.isArray(initialOpen)) return new Set(initialOpen.map(String));
    if (initialOpen === 'all') return new Set(openableKeys);
    if (initialOpen === 'none') return new Set();
    return v === 'accordion' ? new Set(flat.filter((n) => n.children.length > 0).map((n) => n.key)) : new Set();
  });

  const toggle = useCallback((key) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const setAll = (state) => setOpen(state ? new Set(openableKeys) : new Set());

  const clickProps = (key) => ({
    role: 'button',
    tabIndex: 0,
    'aria-expanded': open.has(key),
    onClick: () => toggle(key),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(key);
      }
    },
  });

  const style = {
    '--to-bg': t.bg,
    '--to-panel': t.panel,
    '--to-panelSoft': t.panelSoft,
    '--to-panelSofter': t.panelSofter,
    '--to-ink': t.ink,
    '--to-title': t.title,
    '--to-titleSoft': t.titleSoft,
    '--to-titleLine': t.titleLine,
    '--to-muted': t.muted,
    '--to-line': t.line,
    '--to-line2': t.line2,
    '--to-accent': t.accent,
    '--to-indigoSoft': t.indigoSoft,
    '--to-warm': t.warm,
    '--to-warmSoft': t.warmSoft,
    '--to-warmLine': t.warmLine,
    '--to-warmInk': t.warmInk,
    '--to-sans': t.fontSans,
    '--to-mono': t.fontMono,
    '--to-math': t.fontMath,
    '--to-gw': (maxDepth + 1) * 10 + 10 + 'px',
  };

  const d = data || {};
  const rowStyle = (r) => {
    const st = {};
    if (!isEmpty(r.color)) st.background = r.color;
    if (!isEmpty(r.borderColor)) st.borderColor = r.borderColor;
    if (!isEmpty(r.textColor)) st.color = r.textColor;
    if (!isEmpty(r.font)) st.fontFamily = r.font;
    return st;
  };

  /* ===== V1 outline ===== */
  const renderOutline = (list, nested) => (
    <ul className={cls('to-ol', nested && 'to-ol-nested')}>
      {list.map((n) => {
        const can = hasPanel(n);
        const isOpen = can && open.has(n.key);
        const r = n.raw;
        return (
          <li key={n.key}>
            <div className={cls('to-ol-item', 'to-d' + Math.min(n.depth, 3), r.flag && 'to-flag', isOpen && 'to-open', !isEmpty(r.textColor) && 'to-custom-ink')}>
              <div className={cls('to-ol-row', can && 'to-click', d.showLevels && 'to-ol-row-lv')} style={rowStyle(r)} {...(can ? clickProps(n.key) : {})}>
                {can ? <Chev /> : <ChevGap />}
                {d.showLevels && <span className="to-ol-lv">{!isEmpty(r.level) ? rc(r.level) : 'L' + n.depth}</span>}
                <span className="to-ol-name">
                  {rc(r.name)}
                  {!isEmpty(r.def) && <span className="to-ol-def">{rc(r.def)}</span>}
                </span>
                <span className="to-ol-ex">{rc(r.example)}</span>
              </div>
              {isOpen && <div className="to-ol-panel"><PanelBody node={n} /></div>}
            </div>
            {n.children.length > 0 && renderOutline(n.children, true)}
          </li>
        );
      })}
    </ul>
  );

  /* ===== V2 table ===== */
  const renderTable = () => (
    <div className="to-tt-scroll" data-export-scroll="">
      <table className="to-tt">
        <thead>
          <tr>
            <th>{rc(columns.name)}</th>
            <th>{rc(columns.def)}</th>
            <th>{rc(columns.example)}</th>
            <th className="to-tt-right">{rc(columns.meta)}</th>
          </tr>
        </thead>
        <tbody>
          {flat.map((n) => {
            const can = hasPanel(n);
            const isOpen = can && open.has(n.key);
            const r = n.raw;
            return (
              <React.Fragment key={n.key}>
                <tr
                  className={cls('to-tt-r', n.depth === 0 && 'to-tt-d0', n.depth === 1 && 'to-tt-d1', r.flag && 'to-flag', isOpen && 'to-open', can && 'to-click')}
                  {...(can ? clickProps(n.key) : {})}
                >
                  <td>
                    <span className="to-tt-name">
                      <span className="to-tt-gl">{tableGlyph(n)}</span>
                      {can ? <Chev small /> : <ChevGap small />}
                      <span>{rc(r.name)}</span>
                    </span>
                  </td>
                  <td className="to-tt-def">{rc(r.def)}</td>
                  <td className="to-tt-ex">{rc(r.example)}</td>
                  <td className="to-tt-cnt">{!isEmpty(r.meta) ? rc(r.meta) : n.children.length || '—'}</td>
                </tr>
                {isOpen && (
                  <tr className={cls('to-tt-x', r.flag && 'to-flag')}>
                    <td colSpan={4}>
                      <div className="to-tt-ind" style={{ paddingLeft: n.depth * 3 + 'ch' }}>
                        <div className="to-tt-panel"><PanelBody node={n} /></div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  /* ===== V3 numbered ===== */
  const renderNumbered = () => (
    <div className="to-nd">
      {flat.map((n) => {
        const can = hasPanel(n);
        const isOpen = can && open.has(n.key);
        const r = n.raw;
        return (
          <div key={n.key} className={cls('to-nd-item', 'to-nd-l' + Math.min(n.depth, 2), r.flag && 'to-flag', isOpen && 'to-open')}>
            <div className={cls('to-nd-sum', can && 'to-click')} {...(can ? clickProps(n.key) : {})}>
              <span className="to-nd-num">{n.num}</span>
              <span className="to-nd-body">
                <span className="to-nd-h">{rc(r.name)}</span>
                {!isEmpty(r.def) && <span className="to-nd-def">{rc(r.def)}</span>}
                {!isEmpty(r.example) && <span className="to-nd-formula">{rc(r.example)}</span>}
              </span>
              {can ? <Chev /> : <ChevGap />}
            </div>
            {isOpen && <div className="to-nd-panel"><PanelBody node={n} /></div>}
          </div>
        );
      })}
    </div>
  );

  /* ===== V4 accordion ===== */
  const renderAccordion = (list) =>
    list.map((n) => {
      const r = n.raw;
      if (n.children.length > 0) {
        const isOpen = open.has(n.key);
        return (
          <div key={n.key} className={cls('to-ac-br', n.depth === 0 && 'to-ac-root', n.depth > 0 && 'to-ac-sub', r.flag && 'to-flag', isOpen && 'to-open')}>
            <div className="to-ac-sum to-click" {...clickProps(n.key)}>
              <Chev />
              <span className="to-ac-t">
                {rc(r.name)}
                {!isEmpty(r.def) && <small>{rc(r.def)}</small>}
              </span>
              <span className="to-ac-badge">{!isEmpty(r.meta) ? rc(r.meta) : n.children.length}</span>
            </div>
            {isOpen && (
              <div className="to-ac-body">
                {hasPanel(n) && <div className="to-ac-intro"><PanelBody node={n} /></div>}
                {renderAccordion(n.children)}
              </div>
            )}
          </div>
        );
      }
      const can = hasPanel(n);
      const isOpen = can && open.has(n.key);
      return (
        <div key={n.key} className={cls('to-ac-leaf', r.flag && 'to-flag', isOpen && 'to-open')}>
          <div className={cls('to-ac-leaf-sum', can && 'to-click')} {...(can ? clickProps(n.key) : {})}>
            {can ? <Chev small /> : <ChevGap small />}
            <span className="to-ac-leaf-name">
              {rc(r.name)}
              {!isEmpty(r.def) && <small>{rc(r.def)}</small>}
            </span>
            <span className="to-ac-ex">{rc(r.example)}</span>
          </div>
          {isOpen && <div className="to-ac-panel"><PanelBody node={n} /></div>}
        </div>
      );
    });

  /* ===== V5 filetree ===== */
  const renderTag = (r) => {
    if (r.tag && !isEmpty(r.tag.label)) {
      return <span className={cls('to-tag', 'to-tone-' + (r.tag.tone || 'accent'))}>{rc(r.tag.label)}</span>;
    }
    if (!isEmpty(r.meta)) return <span className="to-tag to-tone-muted">{rc(r.meta)}</span>;
    return <span />;
  };

  const renderFiletree = () => (
    <div className="to-ft">
      {flat.map((n) => {
        const can = hasPanel(n);
        const isOpen = can && open.has(n.key);
        const r = n.raw;
        return (
          <div key={n.key} className={cls('to-ft-item', n.depth === 0 && 'to-ft-root', n.children.length > 0 && 'to-ft-dir', r.flag && 'to-flag', isOpen && 'to-open')}>
            <div className={cls('to-ft-row', can && 'to-click')} {...(can ? clickProps(n.key) : {})}>
              <span className="to-ft-g">{treeGlyph(n)}</span>
              <span className="to-ft-n">
                {rc(r.name)}
                {!isEmpty(r.def) && <i>{rc(r.def)}</i>}
              </span>
              {renderTag(r)}
              {can ? <Chev small /> : <ChevGap small />}
            </div>
            {isOpen && (
              <div className="to-ft-panel">
                <span className="to-ft-rails" aria-hidden="true">
                  {panelRails(n).map((on, i) => <i key={i} className={on ? 'to-on' : ''} />)}
                </span>
                <div className="to-ft-xp"><PanelBody node={n} /></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  /* ===== V6 gutter ===== */
  const renderGutter = () => (
    <div className="to-dg">
      {flat.map((n) => {
        const can = hasPanel(n);
        const isOpen = can && open.has(n.key);
        const r = n.raw;
        const bars = [];
        for (let i = 0; i <= maxDepth; i++) {
          bars.push(<i key={i} className={cls('to-dg-bar', i < n.depth && 'to-on', i === n.depth && 'to-me')} />);
        }
        return (
          <div key={n.key} className={cls('to-dg-row', n.depth === 0 && 'to-dg-top', r.flag && 'to-flag', isOpen && 'to-open')}>
            <div className="to-dg-gut" aria-hidden="true">{bars}</div>
            <div className="to-dg-item">
              <div className={cls('to-dg-card', can && 'to-click')} {...(can ? clickProps(n.key) : {})}>
                <span className="to-dg-kicker">
                  {n.ancestors.map((a, i) => (
                    <React.Fragment key={i}>{rc(crumbOf(a))}<span className="to-dg-sep"> › </span></React.Fragment>
                  ))}
                  <span className="to-dg-here">{rc(crumbOf(r))}</span>
                </span>
                <span className="to-dg-name">
                  {rc(r.name)}
                  {!isEmpty(r.def) && <small>{rc(r.def)}</small>}
                </span>
                <span className="to-dg-ex">
                  {rc(r.example)}
                  {!isEmpty(r.meta) && <small>{rc(r.meta)}</small>}
                </span>
                {can ? <Chev /> : <ChevGap />}
              </div>
              {isOpen && <div className="to-dg-panel"><PanelBody node={n} /></div>}
            </div>
          </div>
        );
      })}
    </div>
  );

  const body = {
    outline: () => renderOutline(tree, false),
    table: renderTable,
    numbered: renderNumbered,
    accordion: () => <div className="to-ac">{renderAccordion(tree)}</div>,
    filetree: renderFiletree,
    gutter: renderGutter,
  }[v]();

  const legend = data && Array.isArray(data.legend) && data.legend.length > 0 && (
    <div className="to-legend">
      {data.legend.map((l, i) => (
        <span key={i}><i className={cls('to-sw', 'to-tone-' + (l.tone || 'accent'))} />{rc(l.label)}</span>
      ))}
    </div>
  );

  return (
    <div ref={rootRef} className={cls('to-root', 'to-v-' + v, framed && 'to-framed', className)} style={style}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {((showToolbar && openableKeys.length > 0) || exportable) && (
        <div className="to-bar" data-export-ignore="">
          {showToolbar && openableKeys.length > 0 && (
            <div className="to-tools">
              <button type="button" onClick={() => setAll(true)}>{rc(labels.expandAll)}</button>
              <button type="button" onClick={() => setAll(false)}>{rc(labels.collapseAll)}</button>
            </div>
          )}
          {exportable && <ExportButton formats={exportFormats} onExport={exportAs} busy={busy} theme={t} />}
        </div>
      )}
      <ProseBlock where="pre" label={d.prefaceLabel} title={d.prefaceTitle} body={d.preface} />
      {body}
      {legend}
      <ProseBlock where="con" label={d.conclusionLabel} title={d.conclusionTitle} body={d.conclusion} />
    </div>
  );
}

/* ---------- scoped CSS ---------- */

const CSS = `
.to-root{background:var(--to-bg);color:var(--to-ink);font-family:var(--to-sans);line-height:1.5;box-sizing:border-box}
.to-root *,.to-root *::before,.to-root *::after{box-sizing:border-box}
.to-framed{border:1px solid var(--to-line);border-radius:16px;padding:24px}
.to-click{cursor:pointer;user-select:none}
.to-click:focus-visible{outline:2px solid var(--to-accent);outline-offset:2px}

/* toolbar */
.to-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:16px}
.to-tools{display:flex;gap:8px}
.to-tools button{font-family:var(--to-mono);font-size:11px;padding:5px 10px;border:1px solid var(--to-line2);background:var(--to-panel);color:var(--to-accent);border-radius:6px;cursor:pointer}
.to-tools button:hover{background:var(--to-panelSoft)}

/* chevron */
.to-chev,.to-chev-gap{width:22px;height:22px;flex:none}
.to-chev{border-radius:999px;display:inline-grid;place-items:center;font-size:11px;line-height:1;color:var(--to-accent);background:var(--to-panel);border:1px solid var(--to-line2);transition:transform .15s}
.to-chev-gap{display:inline-block}
.to-chev-sm{width:18px;height:18px;font-size:9px}
.to-open > [role=button] .to-chev,.to-open[role=button] .to-chev{transform:rotate(90deg)}

/* panel body */
.to-xp{font-size:13.5px}
.to-xp > * + *{margin-top:10px}
.to-xp-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.to-xp-fact{background:var(--to-panelSofter);border:1px solid var(--to-line);border-radius:8px;padding:7px 10px}
.to-xp-k{display:block;font-family:var(--to-mono);font-size:10px;color:var(--to-muted);text-transform:uppercase;letter-spacing:.06em}
.to-xp-v{font-family:var(--to-math);font-size:15px;color:var(--to-title)}
.to-xp-note{font-size:13px;color:var(--to-muted)}
.to-xp-warn{padding:7px 12px;border-radius:8px;background:var(--to-warmSoft);color:var(--to-warmInk);font-size:12.5px;font-weight:600;border:1px solid var(--to-warmLine)}

/* tones */
.to-tag{font-family:var(--to-mono);font-size:10.5px;line-height:1.4;padding:2px 8px;border-radius:4px;white-space:nowrap}
.to-tag.to-tone-accent{background:var(--to-panelSoft);color:var(--to-accent)}
.to-tag.to-tone-warm{background:var(--to-warmSoft);color:var(--to-warmInk)}
.to-tag.to-tone-muted{background:transparent;color:var(--to-muted);border:1px solid var(--to-line)}
.to-legend{display:flex;flex-wrap:wrap;gap:16px;margin-top:18px;padding-top:14px;border-top:1px solid var(--to-line);font-size:12px;color:var(--to-muted)}
.to-sw{display:inline-block;width:12px;height:12px;border-radius:3px;vertical-align:-2px;margin-right:6px}
.to-sw.to-tone-accent{background:var(--to-panelSoft);border:1px solid var(--to-line2)}
.to-sw.to-tone-warm{background:var(--to-warmSoft);border:1px solid var(--to-warm)}
.to-sw.to-tone-muted{background:var(--to-panel);border:1px solid var(--to-line)}

/* ===== V1 outline ===== */
.to-ol{list-style:none;margin:0;padding:0}
.to-ol-nested{margin-left:22px;padding-left:18px;border-left:1.5px solid var(--to-line2)}
.to-ol li{position:relative}
.to-ol-nested > li::before{content:'';position:absolute;left:-18px;top:28px;width:14px;border-top:1.5px solid var(--to-line2)}
.to-ol-item{margin:6px 0}
.to-ol-row.to-ol-row-lv{grid-template-columns:22px auto 1fr auto}
.to-ol-lv{font-family:var(--to-mono);font-size:10.5px;padding:2px 7px;border-radius:999px;background:var(--to-panel);color:var(--to-accent);border:1px solid var(--to-line2)}
.to-d0 > .to-ol-row .to-ol-lv{background:transparent;color:var(--to-titleSoft);border-color:var(--to-titleLine)}
.to-custom-ink > .to-ol-row .to-ol-name,.to-custom-ink > .to-ol-row .to-ol-ex,.to-custom-ink > .to-ol-row .to-ol-def{color:inherit!important}
.to-ol-name a{color:inherit!important;text-decoration:underline;text-underline-offset:3px}
.to-prose{background:#ffffff;border:2px solid #94a3b8;border-radius:14px;padding:16px 20px}
.to-prose-labelled{padding-top:22px}
.to-prose-pre{margin:8px 0 30px}
.to-prose-con{margin:30px 0 0}
.to-prose-label{display:table;margin:-33px 0 12px -4px;background:#ffffff;padding:0 8px;font-family:var(--to-mono);font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#334155;line-height:18px}
.to-prose-label *,.to-prose-title *{margin:0!important;padding:0;display:inline}
.to-prose-title{font-size:16px;font-weight:600;color:#0f172a;margin-bottom:4px}
.to-prose-body{font-size:14.5px;line-height:1.6;color:#334155}
.to-prose-body p{margin:0 0 8px}
.to-prose-body p:last-child{margin-bottom:0}
.to-ol-row{display:grid;grid-template-columns:22px 1fr auto;gap:12px;align-items:center;padding:10px 14px;border-radius:10px}
.to-ol-item.to-open > .to-ol-row{border-radius:10px 10px 0 0}
.to-ol-name{font-weight:700;font-size:14px;color:var(--to-title)}
.to-ol-def{font-size:13px;color:var(--to-muted);font-weight:400;margin-left:8px}
.to-ol-ex{font-family:var(--to-math);font-size:15px;color:var(--to-accent);white-space:nowrap}
.to-d0 > .to-ol-row{background:var(--to-title)}
.to-d0 > .to-ol-row .to-ol-name,.to-d0 > .to-ol-row .to-ol-ex{color:#fff}
.to-d0 > .to-ol-row .to-ol-def{color:var(--to-titleSoft)}
.to-d0 > .to-ol-row .to-chev{background:transparent;color:var(--to-titleSoft);border-color:var(--to-titleLine)}
.to-d1 > .to-ol-row{background:var(--to-panelSoft)}
.to-d2 > .to-ol-row{background:var(--to-panelSofter);border:1px solid var(--to-line)}
.to-d3 > .to-ol-row{background:var(--to-panel);border:1px dashed var(--to-line2)}
.to-ol-item.to-flag > .to-ol-row{background:var(--to-warmSoft);border:1px solid var(--to-warmLine)}
.to-ol-item.to-flag > .to-ol-row .to-ol-ex{color:var(--to-warm)}
.to-ol-panel{border:1px solid var(--to-line);border-top:0;border-radius:0 0 10px 10px;padding:14px 16px}
.to-d0 > .to-ol-panel{border-color:var(--to-title)}
.to-ol-item.to-flag > .to-ol-panel{border-color:var(--to-warmLine)}
@media (max-width:640px){
  .to-ol-row{grid-template-columns:22px 1fr}
  .to-ol-ex{grid-column:2}
  .to-ol-def{display:block;margin-left:0}
  .to-ol-nested{margin-left:10px;padding-left:12px}
  .to-ol-nested > li::before{left:-12px;width:9px}
}

/* ===== V2 table ===== */
.to-tt-scroll{overflow-x:auto}
.to-tt{width:100%;min-width:720px;border-collapse:collapse}
.to-tt th{font-family:var(--to-mono);font-size:10.5px;font-weight:600;color:var(--to-muted);text-transform:uppercase;letter-spacing:.06em;text-align:left;padding:0 14px 10px;border-bottom:1.5px solid var(--to-line2)}
.to-tt th.to-tt-right{text-align:right}
.to-tt td{padding:10px 14px;border-bottom:1px solid var(--to-line);font-size:13.5px;vertical-align:middle}
.to-tt-r.to-click:hover td{background:var(--to-panelSofter)}
.to-tt-name{display:flex;align-items:center;gap:8px;font-weight:600;color:var(--to-title)}
.to-tt-gl{font-family:var(--to-mono);color:var(--to-line2);white-space:pre;font-weight:400}
.to-tt-d0 td{background:var(--to-panelSoft)}
.to-tt-d0 .to-tt-name{font-weight:800;font-size:15px}
.to-tt-d1 .to-tt-name{font-weight:700}
.to-tt-def{color:var(--to-muted)}
.to-tt-ex{font-family:var(--to-math);font-size:15px;color:var(--to-accent);white-space:nowrap}
.to-tt-cnt{font-family:var(--to-mono);font-size:11px;color:var(--to-muted);text-align:right}
.to-tt-r.to-flag td{background:var(--to-warmSoft)}
.to-tt-r.to-flag .to-tt-ex{color:var(--to-warm)}
.to-tt-r.to-open td{border-bottom-color:transparent}
.to-tt-x td{padding:0 14px 14px}
.to-tt-ind{font-family:var(--to-mono);font-size:13.5px}
.to-tt-panel{font-family:var(--to-sans);padding:12px 14px;border-left:3px solid var(--to-line2);background:var(--to-panelSofter);border-radius:0 8px 8px 0}
.to-tt-x.to-flag .to-tt-panel{border-left-color:var(--to-warm)}

/* ===== V3 numbered ===== */
.to-nd-item{border-top:1px solid var(--to-line)}
.to-nd-item:first-child{border-top:0}
.to-nd-sum{display:grid;grid-template-columns:64px 1fr 22px;gap:4px 16px;padding:12px 0;align-items:start}
.to-nd-num{font-family:var(--to-mono);color:var(--to-accent);font-weight:600;padding-top:2px}
.to-nd-body{display:block}
.to-nd-h{display:block;color:var(--to-title)}
.to-nd-def{display:block;margin-top:2px;color:var(--to-muted);font-size:13.5px}
.to-nd-formula{display:inline-block;margin-top:6px;padding:4px 10px;border-radius:6px;background:var(--to-panelSofter);border:1px solid var(--to-line);font-family:var(--to-math);font-size:15px;color:var(--to-title)}
.to-nd-sum.to-click:hover .to-nd-h{color:var(--to-accent)}
.to-nd-l0 .to-nd-num{font-size:20px}
.to-nd-l0 .to-nd-h{font-size:20px;font-weight:800}
.to-nd-l1{padding-left:40px}
.to-nd-l1 .to-nd-num{font-size:14px}
.to-nd-l1 .to-nd-h{font-size:16px;font-weight:700}
.to-nd-l2{padding-left:80px;border-top-style:dashed}
.to-nd-l2 .to-nd-num{font-size:12px;color:var(--to-muted)}
.to-nd-l2 .to-nd-h{font-size:14px;font-weight:600}
.to-nd-item.to-flag .to-nd-formula{background:var(--to-warmSoft);border-color:var(--to-warmLine)}
.to-nd-item.to-flag .to-nd-num{color:var(--to-warm)}
.to-nd-panel{margin:0 38px 14px 80px;padding:12px 14px;border-left:3px solid var(--to-line2);background:var(--to-panelSofter);border-radius:0 8px 8px 0}
.to-nd-item.to-flag .to-nd-panel{border-left-color:var(--to-warm)}
@media (max-width:640px){
  .to-nd-sum{grid-template-columns:44px 1fr 22px}
  .to-nd-l1{padding-left:16px}
  .to-nd-l2{padding-left:32px}
  .to-nd-panel{margin:0 0 14px 60px}
}

/* ===== V4 accordion ===== */
.to-ac-br{border-left:2px solid var(--to-line2);margin:6px 0}
.to-ac-sub{margin-left:18px}
.to-ac-sum{display:grid;grid-template-columns:22px 1fr auto;gap:10px;align-items:center;padding:10px 14px;border-radius:0 10px 10px 0;background:var(--to-panelSofter)}
.to-ac-br.to-open > .to-ac-sum{background:var(--to-panelSoft)}
.to-ac-sum:hover{background:var(--to-indigoSoft)}
.to-ac-t{font-weight:700;color:var(--to-title);font-size:14px}
.to-ac-t small{font-weight:400;color:var(--to-muted);margin-left:8px;font-size:12.5px}
.to-ac-badge{font-family:var(--to-mono);font-size:10.5px;color:var(--to-accent);background:var(--to-panel);border:1px solid var(--to-line2);border-radius:999px;padding:1px 8px}
.to-ac-root > .to-ac-sum,.to-ac-root.to-open > .to-ac-sum,.to-ac-root > .to-ac-sum:hover{background:var(--to-title)}
.to-ac-root > .to-ac-sum .to-chev{background:transparent;color:var(--to-titleSoft);border-color:var(--to-titleLine)}
.to-ac-root > .to-ac-sum .to-ac-t{color:#fff}
.to-ac-root > .to-ac-sum .to-ac-t small{color:var(--to-titleSoft)}
.to-ac-root > .to-ac-sum .to-ac-badge{background:transparent;color:var(--to-titleSoft);border-color:var(--to-titleLine)}
.to-ac-br.to-flag{border-left-color:var(--to-warm)}
.to-ac-br.to-flag > .to-ac-sum{background:var(--to-warmSoft)}
.to-ac-intro{margin:6px 0 6px 18px;padding:10px 14px;background:var(--to-panel);border:1px dashed var(--to-line2);border-radius:8px}
.to-ac-leaf{margin:4px 0 4px 18px;border:1px solid var(--to-line);border-radius:8px;overflow:hidden}
.to-ac-leaf-sum{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:center;padding:8px 14px;font-size:13.5px}
.to-ac-leaf-sum.to-click:hover{background:var(--to-panelSofter)}
.to-ac-leaf-name{color:var(--to-title);font-weight:600}
.to-ac-leaf-name small{font-weight:400;color:var(--to-muted);margin-left:8px;font-size:12.5px}
.to-ac-ex{font-family:var(--to-math);font-size:15px;color:var(--to-accent);white-space:nowrap}
.to-ac-leaf.to-flag{border-color:var(--to-warm)}
.to-ac-leaf.to-flag > .to-ac-leaf-sum{background:var(--to-warmSoft)}
.to-ac-leaf.to-flag .to-ac-ex{color:var(--to-warm)}
.to-ac-panel{padding:12px 14px 14px 42px;border-top:1px solid var(--to-line)}
.to-ac-leaf.to-flag > .to-ac-panel{border-top-color:var(--to-warmLine)}

/* ===== V5 filetree ===== */
.to-ft{font-family:var(--to-mono);font-size:13px}
.to-ft-row{display:grid;grid-template-columns:auto 1fr auto 18px;align-items:center;gap:0 10px;padding:0 10px;height:34px;border-radius:6px;line-height:1}
.to-ft-row.to-click:hover{background:var(--to-panelSofter)}
.to-ft-item.to-open > .to-ft-row{background:var(--to-panelSoft)}
.to-ft-g{color:var(--to-line2);white-space:pre}
.to-ft-n{font-family:var(--to-sans);font-size:13.5px;color:var(--to-title);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}
.to-ft-n i{font-style:normal;font-weight:400;color:var(--to-muted);margin-left:10px;font-size:12.5px}
.to-ft-root .to-ft-n{font-size:15px;font-weight:800}
.to-ft-dir .to-ft-n::before{content:'';display:inline-block;width:7px;height:7px;background:var(--to-accent);margin-right:8px;vertical-align:2px}
.to-ft-root .to-ft-n::before{background:var(--to-title)}
.to-ft-panel{display:flex;align-items:stretch;padding:2px 10px 8px}
.to-ft-rails{display:flex;flex:none}
.to-ft-rails i{display:block;width:4ch;position:relative}
.to-ft-rails i.to-on::before{content:'';position:absolute;left:.5ch;top:-2px;bottom:-8px;border-left:1.5px solid var(--to-line2)}
.to-ft-xp{flex:1;min-width:0;margin-left:10px;font-family:var(--to-sans);padding:10px 12px;border:1px solid var(--to-line);border-radius:8px;background:var(--to-panelSofter)}
.to-ft-item.to-flag .to-ft-xp{border-color:var(--to-warmLine);background:var(--to-warmSoft)}
@media (max-width:640px){ .to-ft-n i{display:none} }

/* ===== V6 gutter ===== */
.to-dg-row{display:grid;grid-template-columns:var(--to-gw) 1fr;align-items:stretch}
.to-dg-gut{display:flex;gap:4px;padding-right:10px}
.to-dg-bar{display:block;width:6px;border-radius:3px;background:var(--to-line)}
.to-dg-bar.to-on{background:var(--to-line2)}
.to-dg-bar.to-me{background:var(--to-accent)}
.to-dg-row.to-flag .to-dg-bar.to-me{background:var(--to-warm)}
.to-dg-item{border-bottom:1px solid var(--to-line);min-width:0}
.to-dg-row:last-child .to-dg-item{border-bottom:0}
.to-dg-card{display:grid;grid-template-columns:1fr auto 22px;gap:2px 16px;padding:10px 14px;align-items:center}
.to-dg-card.to-click:hover{background:var(--to-panelSofter)}
.to-dg-kicker{grid-column:1/-1;font-family:var(--to-mono);font-size:10px;color:var(--to-muted);text-transform:uppercase;letter-spacing:.06em}
.to-dg-here{color:var(--to-accent)}
.to-dg-name{font-weight:700;color:var(--to-title);font-size:14px}
.to-dg-name small{display:block;font-weight:400;font-size:12.5px;color:var(--to-muted)}
.to-dg-ex{font-family:var(--to-math);font-size:15px;color:var(--to-accent);white-space:nowrap;text-align:right}
.to-dg-ex small{display:block;font-family:var(--to-mono);font-size:10.5px;color:var(--to-muted)}
.to-dg-top .to-dg-item{background:var(--to-panelSoft);border-radius:8px;border-bottom:0;margin:6px 0 2px}
.to-dg-top .to-dg-name{font-size:16px}
.to-dg-row.to-flag .to-dg-item{background:var(--to-warmSoft)}
.to-dg-row.to-flag .to-dg-ex{color:var(--to-warm)}
.to-dg-panel{padding:0 50px 14px 14px}
.to-dg-panel .to-xp-fact{background:var(--to-panel)}
@media (max-width:640px){
  .to-dg-card{grid-template-columns:1fr 22px}
  .to-dg-ex{text-align:left;grid-column:1}
  .to-dg-panel{padding-right:14px}
}
`;
