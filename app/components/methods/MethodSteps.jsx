// MethodSteps.jsx
// Numbered procedure table: [# | step | trace on the running example].
// steps: [{ title, body?, state?, atomic?: { href, label } }]
// `title` and `body` go through processContent, so inline rule links are
// written as markdown: [chain rule](!/calculus/derivatives/rules#chain-rule)
// (the "!" keeps internal links in the same tab).
// `atomic` is the structural link to the atomic card this step applies.

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

const headCell = {
  fontSize: '11px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: CLEAN.muted,
  textAlign: 'left',
  padding: '6px 10px',
  borderBottom: `2px solid ${CLEAN.tintBorder}`,
  fontWeight: 600,
};

const bodyCell = {
  padding: '11px 10px',
  borderBottom: `1px solid ${CLEAN.border}`,
  verticalAlign: 'top',
};

function AtomicChip(props) {
  const { atomic } = props;
  if (!atomic || !atomic.href) return null;
  return (
    <a
      href={atomic.href}
      title={atomic.label ? `Card: ${atomic.label}` : 'Open the single-rule card'}
      style={{
        display: 'inline-block',
        marginLeft: '6px',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1.6,
        padding: '0 6px',
        borderRadius: '4px',
        border: `1px solid ${CLEAN.tintBorder}`,
        background: CLEAN.tint,
        color: CLEAN.accent,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {atomic.label || 'rule card'} &#8599;
    </a>
  );
}

export default function MethodSteps(props) {
  const { steps = [], traceLabel } = props;
  if (steps.length === 0) return null;

  const hasTrace = steps.some((step) => step.state);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14.5px', color: CLEAN.text }}>
        <thead>
          <tr>
            <th style={{ ...headCell, width: '34px' }} />
            <th style={headCell}>Step</th>
            {hasTrace && (
              <th style={{ ...headCell, textTransform: 'none', letterSpacing: 0, fontSize: '12.5px' }}>
                {processContent(traceLabel || 'On the example')}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {steps.map((step, index) => (
            <tr key={index}>
              <td style={{ ...bodyCell, width: '34px' }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: CLEAN.accent,
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  {index + 1}
                </span>
              </td>
              <td style={{ ...bodyCell, lineHeight: 1.6 }}>
                <b style={{ color: CLEAN.title }}>{processContent(step.title)}</b>
                {step.body && <> {processContent(step.body)}</>}
                <AtomicChip atomic={step.atomic} />
              </td>
              {hasTrace && (
                <td style={{ ...bodyCell, color: CLEAN.primary, whiteSpace: 'nowrap' }}>
                  {step.state ? processContent(step.state) : null}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
