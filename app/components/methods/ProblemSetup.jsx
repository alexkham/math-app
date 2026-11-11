// ProblemSetup.jsx
// Applied level: turning the words into math, then handing off to a composite method.
// setup:   [{ label, body }]          e.g. Unknowns, Constraint, Objective, Domain
// handoff: { href, label, body? }     the composite method that does the calculation
// interpretation: string              how to turn the result back into an answer

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

function HandoffBox(props) {
  const { href, style, children } = props;
  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    );
  }
  return <div style={style}>{children}</div>;
}

export default function ProblemSetup(props) {
  const { setup = [], handoff, interpretation } = props;

  return (
    <div>
      {setup.length > 0 && (
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {setup.map((item, index) => (
            <li
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px minmax(0, 1fr)',
                gap: '14px',
                padding: '10px 14px',
                border: `1px solid ${CLEAN.border}`,
                borderRadius: '10px',
              }}
            >
              <span style={{ fontWeight: 600, color: CLEAN.title, fontSize: '14px' }}>
                {index + 1}. {item.label}
              </span>
              <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: CLEAN.text }}>{processContent(item.body)}</span>
            </li>
          ))}
        </ol>
      )}

      {handoff && (
        <HandoffBox href={handoff.href}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '14px',
            padding: '12px 16px',
            borderRadius: '10px',
            background: CLEAN.tint,
            border: `1px solid ${CLEAN.tintBorder}`,
            color: CLEAN.primary,
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '20px' }}>&#8594;</span>
          <span>
            <b>Now solve it: {handoff.label}</b>
            {handoff.body && (
              <span style={{ display: 'block', fontSize: '13.5px', color: CLEAN.text }}>{processContent(handoff.body)}</span>
            )}
          </span>
        </HandoffBox>
      )}

      {interpretation && (
        <div style={{ marginTop: '14px', fontSize: '14.5px', lineHeight: 1.6, color: CLEAN.text }}>
          <b style={{ color: CLEAN.title }}>Interpret the result. </b>
          {processContent(interpretation)}
        </div>
      )}
    </div>
  );
}
