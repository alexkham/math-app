'use client';

/*
 * InfographicsControlPanel
 * ------------------------------------------------------------------
 * The shared control panel for framed infographics: download links,
 * copy-link, and any controls the diagram component wants to expose
 * (expand all, collapse all, reset, …).
 *
 * Two looks, one prop:
 *   variant="buttons"  (default)  a heading, then one labelled button per
 *                                 format; the first format is the primary
 *   variant="menu"                one primary Download button, the formats
 *                                 in a menu, everything else quiet
 *
 * Five layouts:
 *   layout="left" (default) | "right"   a labelled side rail, 136 px, sticky
 *   layout="top" | "bottom"             one toolbar row
 *   layout="strip"                      footer row that also carries title + source
 *
 * Tooltips (the format hints and control titles) always open away from the
 * diagram: to the left of a left rail, to the right of a right rail, above a
 * top or bottom bar.
 *
 * Props
 *   downloads   [{ format: 'png'|'pdf'|'svg'|string, href, hint?, label? }]
 *   copyLink    string — the URL put on the clipboard; omit to hide the button
 *   controls    [{ id, label, icon?, onClick, disabled?, title? }]
 *                 icon: 'expand' | 'collapse' | 'reset' | 'max' | 'download' | 'link' | 'check'
 *   segmented   { value, options: [{ value, label, icon? }], onChange }
 *   meta        { title?, source? } — shown in the strip layout only
 *   heading     text above the downloads (default 'Download'); false to hide
 *   labels      'always' (default) | 'icons' — icon-only rail with tooltips
 *   layout, variant, size ('compact' | 'default' | 'comfortable')
 *   theme       partial, merged over DEFAULT_THEME (site palette)
 *   className   extra class on the root
 *
 * The panel renders no diagram and never sits inside a capture region.
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const DEFAULT_THEME = {
  ink: '#0f172a',
  ink2: '#1e293b',
  muted: '#64748b',
  muted2: '#94a3b8',
  line: '#dbe2ea',
  line2: '#b6c2d1',
  paper: '#ffffff',
  soft: '#f8fafc',
  soft2: '#eef2f7',
  accent: '#2563EB',
  accentDark: '#1d4ed8',
  accentSoft: '#e8f0fe',
  navy: '#06357A',
  okInk: '#15803d',
  okLine: '#86efac',
  okSoft: '#f0fdf4',
  gray: '#06357A',
  grayDark: '#042559',
  grayLight: '#5b7bb0',
  grayLine: '#06357A',
  grayTint: '#e7edf7',
  fontSans: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
};

const LAYOUTS = ['left', 'right', 'top', 'bottom', 'strip'];
const SIZES = ['compact', 'default', 'comfortable'];

const FORMAT_META = {
  png: { label: 'PNG', hint: '2×', tip: 'Raster image, 2× resolution', icon: 'image', menuHint: '2× raster' },
  pdf: { label: 'PDF', hint: '', tip: 'Print quality', icon: 'file', menuHint: 'print' },
  svg: { label: 'SVG', hint: '', tip: 'Vector, scales without loss', icon: 'vector', menuHint: 'vector' },
};

/* ---------- icons (24-box, stroke) ---------- */
const PATHS = {
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
  expand: <path d="m7 9 5-5 5 5M7 15l5 5 5-5" />,
  collapse: <path d="m7 4 5 5 5-5M7 20l5-5 5 5" />,
  max: <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />,
  check: <path d="m5 12 5 5L20 7" />,
  image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
  vector: <><path d="M4 20c6-16 10 16 16-4" /><circle cx="4" cy="20" r="1.5" /><circle cx="20" cy="16" r="1.5" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  reset: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></>,
};

function Icon({ name }) {
  const p = PATHS[name] || PATHS.download;
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{p}</svg>;
}

const cls = (...a) => a.filter(Boolean).join(' ');

/* ---------- component ---------- */

export default function InfographicsControlPanel({
  downloads = [],
  copyLink,
  controls = [],
  segmented,
  meta,
  heading = 'Download',
  labels = 'always',
  layout = 'left',
  variant = 'buttons',
  size = 'default',
  theme,
  className,
}) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const L = LAYOUTS.includes(layout) ? layout : 'left';
  const S = SIZES.includes(size) ? size : 'default';
  const isRail = L === 'left' || L === 'right';
  const iconOnly = isRail && labels === 'icons';
  const menuMode = variant === 'menu';

  const [copied, setCopied] = useState(false);
  const [tip, setTip] = useState(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  /* tooltips are rendered into document.body so no column can clip them;
     they open away from the diagram: left of a left rail, right of a right rail, above a bar */
  const showTip = (el, text) => {
    if (!text || !el) return;
    const r = el.getBoundingClientRect();
    if (L === 'left') setTip({ text, x: r.left - 14, y: r.top + r.height / 2, side: 'left' });
    else if (L === 'right') setTip({ text, x: r.right + 14, y: r.top + r.height / 2, side: 'right' });
    else setTip({ text, x: r.left + r.width / 2, y: r.top - 10, side: 'top' });
  };
  const hideTip = () => setTip(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onDoc = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleCopy = () => {
    if (!copyLink || typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(copyLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  const style = {
    '--icp-ink': t.ink, '--icp-ink2': t.ink2, '--icp-muted': t.muted, '--icp-muted2': t.muted2,
    '--icp-line': t.line, '--icp-line2': t.line2, '--icp-paper': t.paper, '--icp-soft': t.soft,
    '--icp-soft2': t.soft2, '--icp-accent': t.accent, '--icp-accent-dark': t.accentDark,
    '--icp-accent-soft': t.accentSoft, '--icp-navy': t.navy, '--icp-ok-ink': t.okInk,
    '--icp-ok-line': t.okLine, '--icp-ok-soft': t.okSoft, '--icp-sans': t.fontSans,
    '--icp-gray': t.gray, '--icp-gray-dark': t.grayDark, '--icp-gray-light': t.grayLight, '--icp-gray-line': t.grayLine, '--icp-gray-tint': t.grayTint,
  };

  const fmt = (d) => FORMAT_META[d.format] || {
    label: (d.label || d.format || '').toUpperCase(), hint: d.hint || '', tip: d.hint || '', icon: 'download', menuHint: d.hint || '',
  };
  const quiet = menuMode;

  /* a button: icon + label, or icon-only with the label as tooltip.
     Called as a plain function, not as <Btn />: a component defined inside the
     render gets a new type on every render, so the tooltip's re-render on hover
     remounted the button under the mouse and the click was lost. */
  const btn = ({ key, as: Tag = 'button', icon, label, tip, hint, primary, className: extra, ...rest }) => {
    const tipText = iconOnly ? (tip ? label + ' · ' + tip : label) : tip;
    return (
      <Tag
        key={key}
        {...rest}
        className={cls('icp-btn', quiet && !primary && 'icp-quiet', primary && 'icp-primary', iconOnly && 'icp-icon', extra)}
        aria-label={iconOnly ? label : undefined}
        title={undefined}
        onMouseEnter={(e) => showTip(e.currentTarget, tipText)}
        onMouseLeave={hideTip}
        onFocus={(e) => showTip(e.currentTarget, tipText)}
        onBlur={hideTip}
      >
        <Icon name={icon} />
        {!iconOnly && <span className="icp-label">{label}</span>}
        {!iconOnly && hint ? <span className="icp-ext">{hint}</span> : null}
      </Tag>
    );
  };

  /* ---- downloads ---- */
  let downloadBlock = null;
  if (downloads.length > 0) {
    if (menuMode && !iconOnly) {
      const first = downloads[0];
      const fm = fmt(first);
      downloadBlock = (
        <div className="icp-group icp-dl" role="group" aria-label="Download">
          {heading && isRail ? <span className="icp-heading">{heading}</span> : null}
          <div className="icp-split" ref={menuRef}>
            <a className="icp-btn icp-primary icp-split-main" href={first.href} download>
              <Icon name="download" />
              <span className="icp-label">{downloads.length === 1 ? fm.label : 'Download'}</span>
            </a>
            {downloads.length > 1 && (
              <button
                type="button"
                className="icp-btn icp-primary icp-split-caret"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                aria-label="Choose a format"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <Icon name="chevron" />
              </button>
            )}
            {menuOpen && (
              <div className="icp-menu" role="menu">
                <div className="icp-menu-h">Format</div>
                {downloads.map((d) => {
                  const m = fmt(d);
                  return (
                    <a key={d.format} role="menuitem" href={d.href} download onClick={() => setMenuOpen(false)}>
                      <Icon name={m.icon} />
                      <span>{m.label}</span>
                      <span className="icp-menu-hint">{d.hint || m.menuHint}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      );
    } else {
      downloadBlock = (
        <div className="icp-group icp-dl" role="group" aria-label="Download">
          {heading ? <span className="icp-heading">{heading}</span> : null}
          {downloads.map((d, i) => {
            const m = fmt(d);
            return btn({
              key: d.format,
              as: 'a',
              href: d.href,
              download: true,
              icon: iconOnly ? m.icon : 'download',
              label: m.label,
              tip: d.tip || m.tip || undefined,
              hint: d.hint || m.hint || undefined,
            });
          })}
        </div>
      );
    }
  }

  /* ---- copy link ---- */
  const copyBlock = copyLink ? btn({
    type: 'button',
    icon: copied ? 'check' : 'link',
    label: copied ? 'Copied' : 'Copy link',
    tip: copied ? undefined : 'Link to this diagram',
    className: copied ? 'icp-done' : undefined,
    onClick: handleCopy,
  }) : null;

  /* ---- diagram controls ---- */
  const controlsBlock = controls.length > 0 ? (
    <div className="icp-group icp-ctl" role="group" aria-label="Diagram controls">
      {isRail && !iconOnly ? <span className="icp-heading">Diagram</span> : null}
      {controls.map((c) => btn({
        key: c.id,
        type: 'button',
        icon: c.icon || 'reset',
        label: c.label,
        tip: c.title,
        disabled: c.disabled,
        onClick: c.onClick,
      }))}
    </div>
  ) : null;

  /* ---- segmented control (not in icon-only rails) ---- */
  const segBlock = segmented && Array.isArray(segmented.options) && !iconOnly ? (
    <div className="icp-seg" role="radiogroup">
      {segmented.options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={segmented.value === o.value}
          className={cls('icp-btn', segmented.value === o.value && 'icp-on')}
          onClick={() => segmented.onChange && segmented.onChange(o.value)}
        >
          {o.icon ? <Icon name={o.icon} /> : null}
          <span className="icp-label">{o.label}</span>
        </button>
      ))}
    </div>
  ) : null;

  const tipBox = mounted && tip ? createPortal(
    <div
      role="tooltip"
      style={{
        position: 'fixed', left: tip.x, top: tip.y, zIndex: 10000, pointerEvents: 'none',
        transform: tip.side === 'left' ? 'translate(-100%, -50%)' : tip.side === 'right' ? 'translate(0, -50%)' : 'translate(-50%, -100%)',
        background: t.ink, color: '#fff', font: '500 12px/1.25 ' + t.fontSans, padding: '6px 9px', borderRadius: 6,
        whiteSpace: 'nowrap', boxShadow: '0 6px 18px rgba(15,23,42,.18)',
      }}
    >
      {tip.text}
    </div>,
    document.body
  ) : null;

  const divider = <span className="icp-divider" aria-hidden="true" />;
  const hasRight = Boolean(controlsBlock || segBlock);
  const rootClass = cls('icp-root', 'icp-l-' + L, 'icp-s-' + S, menuMode && 'icp-v-menu', iconOnly && 'icp-icons', className);

  if (L === 'strip') {
    return (
      <div className={rootClass} style={style}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        {tipBox}
        <div className="icp-strip">
          {meta && (meta.title || meta.source) ? (
            <span className="icp-meta">
              {meta.title ? <b>{meta.title}</b> : null}
              {meta.title && meta.source ? ' · ' : ''}
              {meta.source ? <span>{meta.source}</span> : null}
            </span>
          ) : null}
          <span className="icp-spacer" />
          {controlsBlock}
          {segBlock}
          {(controlsBlock || segBlock) && (copyBlock || downloadBlock) ? divider : null}
          {copyBlock}
          {downloadBlock}
        </div>
      </div>
    );
  }

  return (
    <div className={rootClass} style={style}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {tipBox}
      <div className={cls('icp-bar', isRail && 'icp-rail')}>
        {downloadBlock}
        {downloadBlock && copyBlock ? divider : null}
        {copyBlock}
        {hasRight && (downloadBlock || copyBlock) ? (isRail ? divider : <span className="icp-spacer" />) : null}
        {controlsBlock}
        {segBlock}
      </div>
    </div>
  );
}

/* ---------- scoped CSS ---------- */

const CSS = `
.icp-root{font-family:var(--icp-sans);color:var(--icp-ink);line-height:1.4;-webkit-font-smoothing:antialiased}
.icp-root *,.icp-root *::before,.icp-root *::after{box-sizing:border-box}
.icp-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.icp-group{display:inline-flex;align-items:center;gap:6px}
.icp-spacer{flex:1}
.icp-divider{width:1px;height:22px;background:var(--icp-line2);margin:0 6px;flex:none}
.icp-heading{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--icp-muted);margin-right:4px}

.icp-btn{appearance:none;display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 14px;
  border:1.5px solid var(--icp-gray-line);background:transparent;color:var(--icp-gray);
  font:600 13.5px/1 var(--icp-sans);letter-spacing:.005em;border-radius:8px;cursor:pointer;text-decoration:none;
  white-space:nowrap;box-shadow:none;
  transition:border-color .12s,color .12s,transform .06s}
.icp-btn svg{width:16px;height:16px;flex:none;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;color:var(--icp-gray)}
.icp-btn:hover{background:var(--icp-gray-tint);border-color:var(--icp-gray-dark);color:var(--icp-gray-dark);box-shadow:0 1px 3px rgba(6,53,122,.18)}
.icp-btn:hover svg{color:var(--icp-gray-dark)}
/* the page styles links; the panel's buttons are links too, so win on specificity */
.icp-root a.icp-btn,.icp-root a.icp-btn:link,.icp-root a.icp-btn:visited{color:var(--icp-gray);text-decoration:none}
.icp-root a.icp-btn:hover{color:var(--icp-gray-dark);text-decoration:none}
.icp-root .icp-btn .icp-label,.icp-root .icp-btn .icp-ext{color:inherit}
.icp-root .icp-btn .icp-ext{color:var(--icp-gray-light)}
.icp-root a.icp-primary,.icp-root a.icp-primary:link,.icp-root a.icp-primary:visited{color:var(--icp-gray)}
.icp-root a.icp-primary:hover{color:var(--icp-gray-dark)}
.icp-btn:active{transform:translateY(1px);box-shadow:none}
.icp-btn:focus-visible{outline:2px solid var(--icp-accent);outline-offset:2px}
.icp-btn[disabled]{opacity:.45;cursor:default;box-shadow:none;pointer-events:none}
.icp-ext{font-size:11px;font-weight:700;color:var(--icp-gray-light);letter-spacing:.04em;margin-left:-2px}
.icp-primary{background:transparent;border-color:var(--icp-gray-line);color:var(--icp-gray);box-shadow:none}
.icp-primary svg{color:var(--icp-gray)}
.icp-primary .icp-ext{color:var(--icp-gray-light)}
.icp-primary:hover{background:var(--icp-gray-tint);border-color:var(--icp-gray-dark);color:var(--icp-gray-dark)}
.icp-quiet{border-color:transparent;box-shadow:none;background:transparent}
.icp-quiet:hover{background:var(--icp-soft2);border-color:transparent;color:var(--icp-ink)}
.icp-icon{width:36px;padding:0;justify-content:center}
.icp-done{border-color:var(--icp-ok-line);background:var(--icp-ok-soft);color:var(--icp-ok-ink)}
.icp-done svg{color:#16a34a}

/* segmented */
.icp-seg{display:inline-flex;border:1.5px solid var(--icp-line2);border-radius:8px;overflow:hidden;background:var(--icp-paper);box-shadow:0 1px 2px rgba(15,23,42,.06)}
.icp-seg .icp-btn{border:0;border-radius:0;box-shadow:none}
.icp-seg .icp-btn+.icp-btn{border-left:1.5px solid var(--icp-line2)}
.icp-seg .icp-on{background:var(--icp-gray-tint);color:var(--icp-gray-dark);font-weight:700}
.icp-seg .icp-btn:not(.icp-on):hover{background:var(--icp-gray-tint)}

/* split button + menu */
.icp-split{position:relative;display:inline-flex}
.icp-split-main{border-top-right-radius:0;border-bottom-right-radius:0}
.icp-split-main:only-child{border-radius:8px}
.icp-split-caret{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:var(--icp-gray-line);width:32px;padding:0;justify-content:center}
.icp-menu{position:absolute;top:calc(100% + 6px);left:0;min-width:210px;background:var(--icp-paper);border:1px solid var(--icp-line);
  border-radius:10px;box-shadow:0 6px 18px rgba(15,23,42,.10),0 1px 2px rgba(15,23,42,.06);padding:6px;z-index:20}
.icp-l-bottom .icp-menu,.icp-l-strip .icp-menu{top:auto;bottom:calc(100% + 6px);left:auto;right:0}
.icp-l-left .icp-menu{left:auto;right:calc(100% + 8px);top:0}
.icp-l-right .icp-menu{left:calc(100% + 8px);top:0}
.icp-menu a{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:6px;font-size:13px;font-weight:500;color:var(--icp-ink2);text-decoration:none}
.icp-menu a:hover{background:var(--icp-soft2);color:var(--icp-gray-dark)}
.icp-menu a svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;color:var(--icp-gray)}
.icp-menu-hint{margin-left:auto;font-size:11px;color:var(--icp-muted2)}
.icp-menu-h{font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--icp-muted2);padding:4px 10px 6px}

/* sizes */
.icp-s-compact .icp-btn{height:30px;padding:0 10px;font-size:12.5px;gap:6px;border-radius:7px}
.icp-s-compact .icp-btn svg{width:14px;height:14px}
.icp-s-compact .icp-icon{width:30px}
.icp-s-comfortable .icp-btn{height:40px;padding:0 16px;font-size:14px;gap:9px;border-radius:9px}
.icp-s-comfortable .icp-btn svg{width:17px;height:17px}
.icp-s-comfortable .icp-icon{width:40px}

/* rails: a labelled column */
.icp-rail{flex-direction:column;align-items:stretch;gap:8px;position:sticky;top:16px;padding:12px;width:136px;
  background:var(--icp-paper);border:1px solid var(--icp-line);border-radius:12px;
  box-shadow:0 1px 2px rgba(15,23,42,.06),0 1px 1px rgba(15,23,42,.04)}
.icp-rail .icp-group{flex-direction:column;align-items:stretch;gap:6px}
.icp-rail .icp-heading{margin:0 0 2px 2px}
.icp-rail .icp-btn{width:100%;justify-content:flex-start;padding:0 12px}
.icp-rail .icp-icon{justify-content:center;padding:0}
.icp-rail .icp-divider{width:auto;height:1px;margin:2px 0}
.icp-rail .icp-split{flex-direction:column;align-items:stretch}
.icp-rail .icp-split-main{border-radius:8px 8px 0 0}
.icp-rail .icp-split-caret{width:100%;height:24px;border-radius:0 0 8px 8px;border-left-color:var(--icp-gray-line);border-top-color:var(--icp-gray-line)}
.icp-icons .icp-rail{width:60px;align-items:center}
.icp-icons .icp-rail .icp-heading{display:none}
.icp-icons .icp-rail .icp-divider{width:24px}
.icp-s-compact .icp-rail{width:124px;padding:10px}
.icp-s-comfortable .icp-rail{width:150px;padding:14px}


/* strip */
.icp-strip{display:flex;align-items:center;gap:8px;padding:10px 12px 10px 16px;background:var(--icp-paper);border:1px solid var(--icp-line);
  border-radius:12px;box-shadow:0 1px 2px rgba(15,23,42,.06),0 1px 1px rgba(15,23,42,.04);flex-wrap:wrap}
.icp-meta{font-size:12.5px;color:var(--icp-muted);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.icp-meta b{color:var(--icp-ink2);font-weight:600}

@media print{.icp-root{display:none}}
`;
