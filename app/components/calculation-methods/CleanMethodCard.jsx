// CleanMethodCard.jsx
// Expandable card for the "clean" variant (used for atomic items).
// Same method schema as CalculationsCard. All fields are rendered as
// labelled blocks (no tabs), so the full text is in the server HTML.
// Collapsing uses grid-template-rows 0fr, which hides text visually only.

import React, { useState, useEffect } from 'react';
import { processContent } from '../../../app/utils/contentProcessor';
import { CLEAN } from './cleanTheme';
import { LevelChip, TeX, BlockLabel, CleanContent, TextLinks } from './cleanParts';

function toId(name) {
  if (!name) return '';
  return name.toLowerCase().replace(/['’()]/g, '').replace(/\s+/g, '-');
}

function isEmptyField(value) {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

function splitFields(fields, rightFields) {
  const entries = Object.entries(fields || {}).filter(([, value]) => !isEmptyField(value));
  const isRight = (key) => (rightFields ? rightFields.includes(key) : /example/i.test(key));
  return {
    left: entries.filter(([key]) => !isRight(key)),
    right: entries.filter(([key]) => isRight(key)),
  };
}

export default function CleanMethodCard(props) {
  const { data = {}, components = {}, defaultExpanded = false } = props;
  const {
    id,
    name,
    subtitle,
    glyph,
    level,
    tag,
    when,
    whenLabel = 'Recognize',
    formula,
    fields,
    rightFields,
    links,
  } = data;

  const cardId = id || toId(name);
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!cardId || typeof window === 'undefined') return undefined;
    const openIfMatch = () => {
      if (window.location.hash.slice(1) === cardId) setExpanded(true);
    };
    openIfMatch();
    window.addEventListener('hashchange', openIfMatch);
    return () => window.removeEventListener('hashchange', openIfMatch);
  }, [cardId]);

  const { left, right } = splitFields(fields, rightFields);
  const linkList = Array.isArray(links) ? links : links ? [links] : [];
  const hasLeft = when || left.length > 0;
  const hasRight = formula || right.length > 0;
  const hasBody = hasLeft || hasRight || linkList.length > 0;

  const handleToggle = () => {
    if (!hasBody) return;
    const next = !expanded;
    setExpanded(next);
    if (next && cardId && typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${cardId}`);
    }
  };

  const renderField = ([key, value]) => (
    <div key={key} style={{ marginTop: '14px' }}>
      <BlockLabel>{key.replace(/_/g, ' ')}</BlockLabel>
      <CleanContent value={value} components={components} />
    </div>
  );

  return (
    <article
      id={cardId}
      style={{
        background: CLEAN.card,
        border: `1px solid ${expanded || hover ? CLEAN.tintBorder : CLEAN.border}`,
        borderRadius: '10px',
        overflow: 'hidden',
        scrollMarginTop: '140px',
        transition: 'border-color .15s',
      }}
    >
      <header
        onClick={handleToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '12px 16px',
          cursor: hasBody ? 'pointer' : 'default',
          userSelect: 'none',
        }}
      >
        {glyph && (
          <div
            style={{
              width: 38,
              height: 38,
              flex: 'none',
              borderRadius: '8px',
              background: CLEAN.tint,
              color: CLEAN.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: CLEAN.serif,
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            {processContent(glyph)}
          </div>
        )}
        <div style={{ minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: CLEAN.title, lineHeight: 1.3 }}>
            {processContent(name)}
          </h3>
          {subtitle && <div style={{ fontSize: '13px', color: CLEAN.muted }}>{processContent(subtitle)}</div>}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LevelChip level={level} label={tag} />
          {hasBody && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              style={{
                color: CLEAN.muted,
                transition: 'transform .2s',
                transform: expanded ? 'rotate(180deg)' : 'none',
              }}
            >
              <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </header>

      {hasBody && (
        <div
          style={{
            display: 'grid',
            gridTemplateRows: expanded ? '1fr' : '0fr',
            transition: 'grid-template-rows .25s ease',
          }}
        >
          <div style={{ overflow: 'hidden', minHeight: 0 }}>
            <div
              style={{
                borderTop: `1px solid ${CLEAN.border}`,
                padding: '16px 18px 18px',
                display: 'grid',
                gridTemplateColumns: hasLeft && hasRight ? '1fr 1fr' : '1fr',
                gap: '18px',
              }}
            >
              {hasLeft && (
                <div>
                  {when && (
                    <div>
                      <BlockLabel>{whenLabel}</BlockLabel>
                      <div
                        style={{
                          background: CLEAN.tint,
                          borderLeft: `3px solid ${CLEAN.accent}`,
                          borderRadius: '0 8px 8px 0',
                          padding: '10px 14px',
                          fontSize: '14.5px',
                          color: CLEAN.text,
                          lineHeight: 1.6,
                        }}
                      >
                        {processContent(when)}
                      </div>
                    </div>
                  )}
                  {left.map(renderField)}
                </div>
              )}

              {hasRight && (
                <div>
                  {formula && (
                    <div>
                      <BlockLabel>Statement</BlockLabel>
                      <div
                        style={{
                          background: CLEAN.bgSubtle,
                          border: `1px solid ${CLEAN.border}`,
                          borderRadius: '8px',
                          padding: '10px 12px',
                          textAlign: 'center',
                          color: CLEAN.primary,
                          overflowX: 'auto',
                        }}
                      >
                        <TeX tex={formula} display />
                      </div>
                    </div>
                  )}
                  {right.map(renderField)}
                </div>
              )}

              {linkList.length > 0 && (
                <div style={{ gridColumn: '1 / -1' }}>
                  <TextLinks links={linkList} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
