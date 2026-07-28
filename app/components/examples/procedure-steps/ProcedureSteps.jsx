import React from 'react';
import { processContent } from '../../../utils/contentProcessor';

/**
 * ProcedureSteps — a procedure rendered as [# | (title / description) | state].
 * Merges the v8 baseline table (title + description) with the state-trace idea
 * (running value column) into one component. Both `description` and `state`
 * are optional per step, and the state column disappears entirely when no
 * step provides one — so the same component covers:
 *   - baseline mode  (only title + description)
 *   - trace mode     (only title + state)
 *   - full mode      (all three)
 *
 * Standalone usage:
 *   <ProcedureSteps steps={[
 *     {
 *       title: 'Identify a, b, c',
 *       description: 'Rewrite in standard form...',
 *       state: 'a = 2, b = -4, c = -6'
 *     },
 *     ...
 *   ]} />
 *
 * Inside MethodsExplorer componentMap:
 *   componentMap = { ...DEFAULT_COMPONENT_MAP, ProcedureSteps }
 *   Then in fields:
 *     { component: 'ProcedureSteps', props: { steps: [...] } }
 *
 * Props:
 *   steps         — [{ title, description?, state? }], required
 *   showHeader    — show the column-header row (default true)
 *   highlightLast — bold the final state cell as the "answer" (default true)
 *
 * Each field (title / description / state) accepts:
 *   - a plain string (goes through processContent for markdown/links)
 *   - a React element (rendered as-is; use e.g. <TeX tex="..." /> for math)
 */

function renderField(value) {
  if (value === undefined || value === null || value === '') return null;
  if (React.isValidElement(value)) return value;
  return processContent(String(value));
}

function hasValue(v) {
  return v !== undefined && v !== null && v !== '';
}

function ProcedureSteps({
  steps = [],
  showHeader = true,
  highlightLast = true
}) {
  if (!steps.length) return null;

  const anyState = steps.some(s => hasValue(s.state));
  const anyDesc  = steps.some(s => hasValue(s.description));

  const rootClass = `pt-root${anyState ? ' has-state' : ''}`;
  const bodyLabel = anyDesc ? 'Action & description' : 'Action';

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: PT_CSS }} />
      <div className="pt-table">
        {showHeader && (
          <div className="pt-header">
            <div>#</div>
            <div>{bodyLabel}</div>
            {anyState && <div>State after</div>}
          </div>
        )}

        {steps.map((step, idx) => {
          const isFinal = highlightLast && idx === steps.length - 1;
          const titleNode = renderField(step.title);
          const descNode  = renderField(step.description);
          const stateNode = renderField(step.state);
          const rowClass = `pt-row${isFinal ? ' pt-final' : ''}`;

          return (
            <div key={idx} className={rowClass}>
              <div className="pt-n">{idx + 1}</div>
              <div className="pt-body">
                {titleNode && <div className="pt-title">{titleNode}</div>}
                {descNode  && <div className="pt-desc">{descNode}</div>}
              </div>
              {anyState && (
                <div className="pt-state">
                  {stateNode || <span className="pt-state-empty">—</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcedureSteps;

// ============================================================
// STYLES (v8 palette, scoped under .pt-root)
// ============================================================
const PT_CSS = `
.pt-root {
  --pt-blue:     #2563eb;
  --pt-blue-50:  #eff6ff;
  --pt-blue-100: #dbeafe;
  --pt-blue-800: #1e40af;
  --pt-gray-50:  #f9fafb;
  --pt-gray-100: #f3f4f6;
  --pt-gray-200: #e5e7eb;
  --pt-gray-500: #6b7280;
  --pt-gray-600: #4b5563;
  --pt-gray-700: #374151;
  --pt-ink:      #0f172a;
  --pt-ink-soft: #475569;
  --pt-muted:    #94a3b8;
  --pt-sans: 'DM Sans', system-ui, sans-serif;
  --pt-mono: 'JetBrains Mono', monospace;

  color: var(--pt-ink);
  font-family: var(--pt-sans);
}
.pt-root *, .pt-root *::before, .pt-root *::after { box-sizing: border-box; }

.pt-root .pt-table {
  border: 1px solid var(--pt-gray-200);
  border-radius: 4px;
  overflow: hidden;
}

/* 2-column default (# + body). 3-column when has-state. */
.pt-root .pt-header,
.pt-root .pt-row {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: stretch;
}
.pt-root.has-state .pt-header,
.pt-root.has-state .pt-row {
  grid-template-columns: 42px minmax(0, 1.4fr) minmax(0, 1fr);
}

.pt-root .pt-header {
  font-family: var(--pt-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--pt-muted);
  background: var(--pt-gray-50);
  border-bottom: 1px solid var(--pt-gray-200);
}
.pt-root .pt-header > div { padding: 8px 14px; }
.pt-root .pt-header > div:first-child { text-align: center; }
.pt-root .pt-header > div:not(:last-child) {
  border-right: 1px solid var(--pt-gray-200);
}

.pt-root .pt-row { border-bottom: 1px solid var(--pt-gray-200); }
.pt-root .pt-row:last-child { border-bottom: none; }
.pt-root .pt-row > div:not(:last-child) {
  border-right: 1px solid var(--pt-gray-200);
}

.pt-root .pt-n {
  text-align: center;
  font-family: var(--pt-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--pt-blue-800);
  background: var(--pt-blue-50);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pt-root .pt-body {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.pt-root .pt-title {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--pt-ink);
  line-height: 1.4;
}
.pt-root .pt-desc {
  font-size: 12.5px;
  color: var(--pt-ink-soft);
  line-height: 1.5;
}

.pt-root .pt-state {
  padding: 12px 14px;
  font-family: var(--pt-mono);
  font-size: 13px;
  color: var(--pt-blue-800);
  background: var(--pt-blue-50);
  display: flex;
  align-items: center;
  min-width: 0;
  word-break: break-word;
}
.pt-root .pt-row.pt-final .pt-state { font-weight: 600; }
.pt-root .pt-state-empty { color: var(--pt-muted); }

/* Narrow layout: stack state below the body */
@media (max-width: 560px) {
  .pt-root.has-state .pt-header,
  .pt-root.has-state .pt-row {
    grid-template-columns: 42px minmax(0, 1fr);
  }
  .pt-root.has-state .pt-header > div:nth-child(3) {
    display: none;
  }
  .pt-root.has-state .pt-row > .pt-state {
    grid-column: 1 / -1;
    border-right: none;
    border-top: 1px solid var(--pt-gray-200);
    padding-left: 56px;
  }
}
`;