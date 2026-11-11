// MethodSection.jsx
// White section card with an H2 and an anchor id. Every leaf-page section uses it.

import React from 'react';
import { CLEAN } from '../calculation-methods/cleanTheme';

export default function MethodSection(props) {
  const { id, title, children, note } = props;

  return (
    <section
      id={id}
      style={{
        background: CLEAN.card,
        border: `1px solid ${CLEAN.border}`,
        borderRadius: '12px',
        padding: '22px 24px',
        marginBottom: '18px',
        scrollMarginTop: '100px',
      }}
    >
      {title && (
        <h2 style={{ color: CLEAN.title, fontSize: '21px', lineHeight: 1.3, margin: '0 0 14px' }}>{title}</h2>
      )}
      {children}
      {note && <div style={{ marginTop: '12px', fontSize: '14px', color: CLEAN.text }}>{note}</div>}
    </section>
  );
}
