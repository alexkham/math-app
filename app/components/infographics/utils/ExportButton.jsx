'use client';

/*
 * ExportButton
 * ------------------------------------------------------------------
 * Presentational download buttons. Logic lives in useExport.
 * Always marked data-export-ignore, so it never appears in its own capture.
 *
 * Props
 *   formats    ['png', 'pdf']            which buttons to show, in order
 *   onExport   (format) => void
 *   busy       disables the buttons while a capture runs
 *   theme      { accent, line2, panel, panelSoft, fontMono } — colours / font
 *   labels     { png, pdf, busy }        button text overrides
 *   className  extra class
 */

import React from 'react';

const DEFAULT_LABELS = { png: 'PNG', pdf: 'PDF', busy: 'saving…' };

export default function ExportButton({ formats = ['png', 'pdf'], onExport, busy = false, theme = {}, labels, className }) {
  const l = { ...DEFAULT_LABELS, ...(labels || {}) };
  const style = {
    '--ex-accent': theme.accent,
    '--ex-line': theme.line2,
    '--ex-panel': theme.panel,
    '--ex-soft': theme.panelSoft,
    '--ex-mono': theme.fontMono,
  };
  return (
    <div className={['ex-group', className].filter(Boolean).join(' ')} style={style} data-export-ignore="" role="group" aria-label="Download" aria-busy={busy}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {formats.map((f) => (
        <button key={f} type="button" className="ex-btn" disabled={busy} onClick={() => onExport && onExport(f)} aria-label={'Download ' + String(f).toUpperCase()}>
          <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
            <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{busy ? l.busy : l[f] || String(f).toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

const CSS = `
.ex-group{display:flex;gap:8px;margin-left:auto}
.ex-btn{display:inline-flex;align-items:center;gap:6px;font-family:var(--ex-mono,'JetBrains Mono',ui-monospace,monospace);font-size:11px;padding:5px 10px;border:1px solid var(--ex-line,#c7d2fe);background:var(--ex-panel,#ffffff);color:var(--ex-accent,#4f46e5);border-radius:6px;cursor:pointer}
.ex-btn:hover{background:var(--ex-soft,#eef2ff)}
.ex-btn:focus-visible{outline:2px solid var(--ex-accent,#4f46e5);outline-offset:2px}
.ex-btn:disabled{opacity:.6;cursor:wait}
`;
