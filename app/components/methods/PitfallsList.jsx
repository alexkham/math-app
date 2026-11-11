// PitfallsList.jsx
// Common mistakes, each with the wrong and the right version.
// items: [{ title, wrong?, right?, note? }]   (strings through processContent)

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

const WRONG = '#b23b3b';
const RIGHT = '#2f7d5b';

export default function PitfallsList(props) {
  const { items = [] } = props;
  if (items.length === 0) return null;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
      {items.map((item, index) => (
        <div key={index} style={{ border: `1px solid ${CLEAN.border}`, borderRadius: '10px', padding: '12px 14px' }}>
          <h3 style={{ margin: '0 0 6px', fontSize: '14.5px', color: CLEAN.title }}>{processContent(item.title)}</h3>
          {item.wrong && (
            <div style={{ color: WRONG, fontSize: '14.5px', lineHeight: 1.7 }}>
              <span aria-label="wrong">&#10007;</span> {processContent(item.wrong)}
            </div>
          )}
          {item.right && (
            <div style={{ color: RIGHT, fontSize: '14.5px', lineHeight: 1.7 }}>
              <span aria-label="right">&#10003;</span> {processContent(item.right)}
            </div>
          )}
          {item.note && (
            <div style={{ marginTop: '6px', fontSize: '13.5px', color: CLEAN.text }}>{processContent(item.note)}</div>
          )}
        </div>
      ))}
    </div>
  );
}
