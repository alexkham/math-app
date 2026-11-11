// RecognizeBox.jsx
// "How to tell this is the task": a tinted box plus an optional follow-up line
// (typically inline links to the defining lesson and a visual tool).

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

export default function RecognizeBox(props) {
  const { text, note } = props;
  if (!text) return null;

  return (
    <div>
      <div
        style={{
          background: CLEAN.tint,
          borderLeft: `3px solid ${CLEAN.accent}`,
          borderRadius: '0 8px 8px 0',
          padding: '12px 16px',
          fontSize: '15px',
          lineHeight: 1.65,
          color: CLEAN.text,
        }}
      >
        {processContent(text)}
      </div>
      {note && (
        <div style={{ marginTop: '12px', fontSize: '14.5px', lineHeight: 1.6, color: CLEAN.text }}>
          {processContent(note)}
        </div>
      )}
    </div>
  );
}
