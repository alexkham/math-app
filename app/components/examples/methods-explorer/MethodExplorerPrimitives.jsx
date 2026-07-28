import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { processContent } from '../../../utils/contentProcessor';

// ─── TeX ────────────────────────────────────────────────
// Render a LaTeX string with KaTeX. Use display={true} for a block
// equation, false for inline.
export function TeX({ tex, display = false }) {
  const html = useMemo(() => {
    if (!tex) return '';
    try {
      return katex.renderToString(String(tex), {
        displayMode: display,
        throwOnError: false
      });
    } catch (e) {
      return String(tex);
    }
  }, [tex, display]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

// ─── Refs — universal link strip ────────────────────────
// Attach a `refs` array to any field. Renders as a dashed rule +
// tiny mono label + dot-separated links. Tone inherits from parent.
//
// Shape: refs = [{ text, url, external? }]
export function Refs({ items, label = 'See' }) {
  if (!items || !items.length) return null;
  return (
    <div className="te-refs">
      <span className="te-refs-label">{label}</span>
      {items.map((ref, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="te-refs-sep">·</span>}
          <a
            className={`te-refs-link${ref.external ? ' external' : ''}`}
            href={ref.url}
            target={ref.external ? '_blank' : undefined}
            rel={ref.external ? 'noopener noreferrer' : undefined}
          >
            {ref.text}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── InfoCell — the blue/gray hero cells ────────────────
// Used for "When to use" (tone="blue") and "Notation" (tone="gray").
// Body is prose; refs is optional attached-link data.
export function InfoCell({ label, tone = 'gray', text, refs }) {
  return (
    <div className={`te-info-cell te-info-${tone}`}>
      <span className="te-label">{label}</span>
      <div className="te-info-text">{processContent(String(text || ''))}</div>
      {refs && refs.length > 0 && <Refs items={refs} />}
    </div>
  );
}

// ─── AssumesCallout — red alert-style block ─────────────
// For use inside a tab (typically Procedure). Prose stays clean;
// refs attach below.
export function AssumesCallout({ text, refs, label = 'Assumes' }) {
  return (
    <div className="te-assumes">
      <span className="te-label te-assumes-label">{label}</span>
      <span className="te-assumes-txt">{processContent(String(text || ''))}</span>
      {refs && refs.length > 0 && (
        <div className="te-assumes-refs">
          <Refs items={refs} />
        </div>
      )}
    </div>
  );
}

// ─── NumberedSteps — the compact step table ─────────────
// Renders a 3-column table: number · title · body.
//
// Shape: steps = [{ title, body }]
export function NumberedSteps({ steps }) {
  if (!steps || !steps.length) return null;
  return (
    <div className="te-steps-table">
      {steps.map((s, i) => (
        <div key={i} className="te-step-row">
          <div className="te-step-num-cell">{i + 1}</div>
          <div className="te-step-title-cell">{processContent(String(s.title || ''))}</div>
          <div className="te-step-body-cell">{processContent(String(s.body || ''))}</div>
        </div>
      ))}
    </div>
  );
}

// ─── SeeAlso — tab-level structured link block ──────────
// The prominent version, for the bottom of a tab.
//
// Shape: items = [{ text, url, external?, note? }]
export function SeeAlso({ items, label = 'See also' }) {
  if (!items || !items.length) return null;
  return (
    <div className="te-see-also">
      <div className="te-see-also-label">{label}</div>
      <ul className="te-see-also-list">
        {items.map((item, i) => (
          <li key={i}>
            <a
              className={item.external ? 'external' : ''}
              href={item.url}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              {item.text}
            </a>
            {item.note && (
              <span className="te-see-also-note"> &mdash; {item.note}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Default componentMap ───────────────────────────────
// Pass this (or extend it) as the `componentMap` prop of
// MethodsExplorer. Content authors reference these by string:
//   { component: 'AssumesCallout', props: { text, refs } }
export const DEFAULT_COMPONENT_MAP = {
  TeX,
  Refs,
  InfoCell,
  AssumesCallout,
  NumberedSteps,
  SeeAlso
};