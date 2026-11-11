// MethodAlternatives.jsx
// Side-by-side cards for alternative methods of the same task.
// methods: [{ name, tag?, formula? (raw TeX), body?, preferred? }]

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';
import { TeX } from '../calculation-methods/cleanParts';

export default function MethodAlternatives(props) {
  const { methods = [] } = props;
  if (methods.length === 0) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${methods.length > 2 ? 240 : 300}px, 1fr))`,
        gap: '12px',
      }}
    >
      {methods.map((method) => (
        <div
          key={method.name}
          style={{
            border: `1px solid ${method.preferred ? CLEAN.accent : CLEAN.border}`,
            background: method.preferred ? 'linear-gradient(180deg, #f4f8fd, #ffffff)' : CLEAN.card,
            borderRadius: '10px',
            padding: '14px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
            <b style={{ color: CLEAN.title, fontSize: '15px' }}>{processContent(method.name)}</b>
            {method.tag && (
              <span style={{ fontSize: '11px', fontWeight: 600, color: CLEAN.accent, whiteSpace: 'nowrap' }}>
                {method.tag}
              </span>
            )}
          </div>
          {method.formula && (
            <div
              style={{
                margin: '10px 0',
                padding: '8px 10px',
                background: CLEAN.bgSubtle,
                border: `1px solid ${CLEAN.border}`,
                borderRadius: '8px',
                textAlign: 'center',
                color: CLEAN.primary,
                overflowX: 'auto',
              }}
            >
              <TeX tex={method.formula} display />
            </div>
          )}
          {method.body && (
            <div style={{ fontSize: '14px', lineHeight: 1.6, color: CLEAN.text }}>{processContent(method.body)}</div>
          )}
        </div>
      ))}
    </div>
  );
}
