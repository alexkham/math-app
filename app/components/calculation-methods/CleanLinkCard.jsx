// CleanLinkCard.jsx
// Short card for page-level items (composite, strategy, applied) in the
// "clean" variant. The whole card links to the item's own page.
// `planned: true` renders it dimmed and without a link.

import React, { useState } from 'react';
import { processContent } from '../../../app/utils/contentProcessor';
import { CLEAN } from './cleanTheme';
import { LevelChip } from './cleanParts';

export default function CleanLinkCard(props) {
  const { data = {} } = props;
  const { id, name, subtitle, description, uses, level, tag, meta, href, planned = false } = data;
  const [hover, setHover] = useState(false);

  const usesText = Array.isArray(uses) ? uses.join(' · ') : uses;
  const active = hover && !planned;

  const content = (
    <>
      <span style={{ fontWeight: 600, color: CLEAN.title, fontSize: '15.5px', lineHeight: 1.35 }}>
        {processContent(name)}
      </span>
      {(description || subtitle) && (
        <span style={{ fontSize: '13.5px', color: CLEAN.text, lineHeight: 1.5 }}>
          {processContent(description || subtitle)}
        </span>
      )}
      {usesText && (
        <span style={{ fontSize: '12px', color: CLEAN.muted }}>
          {'uses: '}
          {processContent(usesText)}
        </span>
      )}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: 'auto',
          paddingTop: '4px',
          fontSize: '12px',
          color: CLEAN.muted,
        }}
      >
        <LevelChip level={level} label={tag} />
        {planned ? 'planned' : meta}
      </span>
    </>
  );

  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    background: CLEAN.card,
    border: `1px solid ${active ? CLEAN.accent : CLEAN.border}`,
    borderRadius: '10px',
    padding: '14px 16px',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: active ? '0 2px 10px rgba(20,58,102,.08)' : 'none',
    opacity: planned ? 0.55 : 1,
    transition: 'border-color .15s, box-shadow .15s',
    scrollMarginTop: '140px',
  };

  if (planned || !href) {
    return (
      <div id={id} style={style}>
        {content}
      </div>
    );
  }

  return (
    <a
      id={id}
      href={href}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </a>
  );
}
