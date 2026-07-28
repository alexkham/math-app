import React, { useState } from 'react';
import { processContent } from '../../../utils/contentProcessor';

/**
 * SequentialReveal — interactive step-by-step reveal.
 *
 * Standalone usage:
 *   <SequentialReveal steps={[
 *     { title: 'Identify a, b, c', description: 'Rewrite in standard form...' },
 *     { title: 'Compute D = b² - 4ac', description: 'One number tells you...' },
 *     ...
 *   ]} />
 *
 * Inside MethodsExplorer componentMap:
 *   Register once:  componentMap = { ...DEFAULT_COMPONENT_MAP, SequentialReveal }
 *   Use in fields:  { component: 'SequentialReveal', props: { steps: [...] } }
 *
 * Props:
 *   steps         — array of { title, description? } (required)
 *   initialIndex  — starting current-step index (default 0)
 *   showControls  — hide the right-hand button column (default true)
 */
function SequentialReveal({
  steps = [],
  initialIndex = 0,
  showControls = true
}) {
  const total = steps.length;
  const [i, setI] = useState(
    Math.min(Math.max(0, initialIndex), Math.max(0, total - 1))
  );

  if (!total) return null;

  const next    = () => { if (i < total - 1) setI(i + 1); };
  const prev    = () => { if (i > 0) setI(i - 1); };
  const showAll = () => setI(total - 1);
  const reset   = () => setI(0);

  return (
    <div className="sr-root">
      <style dangerouslySetInnerHTML={{ __html: SR_CSS }} />
      <div className="sr-wrap">
        <ol className="sr-list">
          {steps.map((step, idx) => {
            const isVisible = idx <= i;
            const isCurrent = idx === i;
            const cls = [
              'sr-step',
              isVisible && 'visible',
              isCurrent && 'current'
            ].filter(Boolean).join(' ');
            return (
              <li key={idx} className={cls}>
                <div className="sr-num">{idx + 1}</div>
                <div className="sr-body">
                  <div className="sr-title">
                    {processContent(String(step.title || ''))}
                  </div>
                  {step.description && (
                    <div className="sr-desc">
                      {processContent(String(step.description))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {showControls && (
          <div className="sr-controls">
            <div className="sr-progress">
              Step {i + 1} / {total}
            </div>
            <button
              type="button"
              className="sr-btn sr-primary"
              onClick={next}
              disabled={i === total - 1}
            >
              Next step →
            </button>
            <button
              type="button"
              className="sr-btn"
              onClick={prev}
              disabled={i === 0}
            >
              ← Back
            </button>
            <button
              type="button"
              className="sr-btn"
              onClick={showAll}
              disabled={i === total - 1}
            >
              Show all
            </button>
            <button
              type="button"
              className="sr-btn"
              onClick={reset}
              disabled={i === 0}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SequentialReveal;

// ============================================================
// STYLES (v8 palette, scoped under .sr-root)
// ============================================================
const SR_CSS = `
.sr-root {
  --sr-blue:      #2563eb;
  --sr-blue-50:   #eff6ff;
  --sr-blue-100:  #dbeafe;
  --sr-blue-800:  #1e40af;
  --sr-gray-100:  #f3f4f6;
  --sr-gray-200:  #e5e7eb;
  --sr-gray-300:  #d1d5db;
  --sr-gray-500:  #6b7280;
  --sr-gray-700:  #374151;
  --sr-ink:       #0f172a;
  --sr-ink-soft:  #475569;
  --sr-muted:     #94a3b8;
  --sr-surface:   #ffffff;
  --sr-sans: 'DM Sans', system-ui, sans-serif;
  --sr-mono: 'JetBrains Mono', monospace;

  font-family: var(--sr-sans);
  color: var(--sr-ink);
}
.sr-root *, .sr-root *::before, .sr-root *::after { box-sizing: border-box; }

.sr-root .sr-wrap {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 22px;
  align-items: start;
}
.sr-root .sr-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sr-root .sr-step {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--sr-gray-200);
  align-items: start;
  opacity: 0.22;
  transition: opacity 0.25s, background 0.25s;
}
.sr-root .sr-step:last-child { border-bottom: none; }
.sr-root .sr-step.visible { opacity: 1; }
.sr-root .sr-step.current {
  opacity: 1;
  background: linear-gradient(90deg, var(--sr-blue-50) 0%, transparent 90%);
  margin: 0 -8px;
  padding: 12px 8px;
  border-radius: 6px 0 0 6px;
  border-left: 3px solid var(--sr-blue);
}
.sr-root .sr-num {
  font-family: var(--sr-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--sr-blue-800);
  background: var(--sr-blue-100);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sr-root .sr-body { min-width: 0; }
.sr-root .sr-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--sr-ink);
  margin-bottom: 3px;
  line-height: 1.4;
}
.sr-root .sr-desc {
  font-size: 13px;
  color: var(--sr-ink-soft);
  line-height: 1.55;
}
.sr-root .sr-controls {
  border-left: 1px solid var(--sr-gray-200);
  padding-left: 20px;
}
.sr-root .sr-progress {
  font-family: var(--sr-mono);
  font-size: 11px;
  color: var(--sr-muted);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.sr-root .sr-btn {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--sr-gray-300);
  background: var(--sr-surface);
  color: var(--sr-ink);
  cursor: pointer;
  font-family: inherit;
  font-size: 12.5px;
  margin-bottom: 8px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.sr-root .sr-btn:hover:not(:disabled) {
  background: var(--sr-gray-100);
}
.sr-root .sr-btn.sr-primary {
  background: var(--sr-blue);
  color: white;
  border-color: var(--sr-blue);
}
.sr-root .sr-btn.sr-primary:hover:not(:disabled) {
  background: var(--sr-blue-800);
  border-color: var(--sr-blue-800);
}
.sr-root .sr-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Narrow layout: stack controls under the list */
@media (max-width: 600px) {
  .sr-root .sr-wrap {
    grid-template-columns: 1fr;
  }
  .sr-root .sr-controls {
    border-left: none;
    border-top: 1px solid var(--sr-gray-200);
    padding-left: 0;
    padding-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .sr-root .sr-progress {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }
  .sr-root .sr-btn { margin-bottom: 0; }
}
`;