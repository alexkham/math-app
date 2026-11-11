// WorkedExamples.jsx
// Line-by-line worked examples.
// examples: [{ title, badge?, lines: [{ math, why?, answer? }], note? }]
// `math` is a processContent string (use $...$); the last line is styled as the
// answer when `answer: true`.

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

function ExampleLine(props) {
  const { line, isLast } = props;
  const isAnswer = Boolean(line.answer);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(140px, 240px)',
        gap: '14px',
        alignItems: 'center',
        padding: isAnswer ? '8px' : '8px 0',
        borderBottom: isLast || isAnswer ? 'none' : `1px dashed ${CLEAN.border}`,
        background: isAnswer ? '#f2f8f4' : 'transparent',
        borderRadius: isAnswer ? '6px' : 0,
      }}
    >
      <div style={{ fontSize: '16px', color: CLEAN.primary, fontWeight: isAnswer ? 700 : 400, overflowX: 'auto', overflowY: 'hidden', padding: '2px 0' }}>
        {processContent(line.math)}
      </div>
      <div style={{ fontSize: '13px', color: CLEAN.muted }}>{line.why ? processContent(line.why) : null}</div>
    </div>
  );
}

export default function WorkedExamples(props) {
  const { examples = [], after } = props;
  if (examples.length === 0) return null;

  return (
    <div>
      {examples.map((example, exampleIndex) => (
        <div
          key={exampleIndex}
          style={{ border: `1px solid ${CLEAN.border}`, borderRadius: '10px', marginBottom: '12px' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              background: CLEAN.bgSubtle,
              borderBottom: `1px solid ${CLEAN.border}`,
              borderRadius: '10px 10px 0 0',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '15px', color: CLEAN.title }}>
              Example {exampleIndex + 1} &middot; {processContent(example.title)}
            </h3>
            {example.badge && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: CLEAN.accent,
                  background: CLEAN.tint,
                  border: `1px solid ${CLEAN.tintBorder}`,
                  borderRadius: '999px',
                  padding: '2px 9px',
                  whiteSpace: 'nowrap',
                }}
              >
                {example.badge}
              </span>
            )}
          </div>
          <div style={{ padding: '10px 16px' }}>
            {(example.lines || []).map((line, lineIndex) => (
              <ExampleLine key={lineIndex} line={line} isLast={lineIndex === example.lines.length - 1} />
            ))}
            {example.note && (
              <div style={{ marginTop: '8px', fontSize: '14px', color: CLEAN.text }}>{processContent(example.note)}</div>
            )}
          </div>
        </div>
      ))}
      {after && <div style={{ fontSize: '14px', color: CLEAN.text }}>{processContent(after)}</div>}
    </div>
  );
}
