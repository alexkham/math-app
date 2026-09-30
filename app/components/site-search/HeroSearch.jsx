'use client';
import React from 'react';
import { mediaQuery } from '@/app/lib/breakpoints';
import { useSiteSearch } from './SearchProvider';
import { TOKENS, UI_TEXT } from './searchConfig';
import { SparkIcon } from './searchIcons';

/**
 * HeroSearch: a large search field for landing pages and topic hubs.
 * Clicking anywhere on it opens the shared palette. Pages opt in by placing it;
 * nothing renders it by default.
 *
 * Props
 *   placeholder   text shown in the field (default "Search by meaning")
 *   initialQuery  optional prefill passed to openSearch
 *   maxWidth      CSS width cap (default "720px")
 *   buttonLabel   label of the button on the right (default "Search"); hidden below 768px
 */

const ANIM = 'lmc-search-anim';
const STYLE = `
@keyframes lmc-search-twinkle { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(.72) rotate(35deg); } }
@media ${mediaQuery.tabletDown} {
  .lmc-hero { height: 56px !important; }
  .lmc-hero .lmc-hero-go { display: none !important; }
}
@media (prefers-reduced-motion: reduce) { .${ANIM} { animation: none !important; transition: none !important; } }
`;

export default function HeroSearch({
  placeholder = UI_TEXT.heroPlaceholder,
  initialQuery = '',
  maxWidth = '720px',
  buttonLabel = UI_TEXT.heroButton,
}) {
  const { openSearch } = useSiteSearch();
  const shown = initialQuery || placeholder;

  return (
    <>
      <style>{STYLE}</style>
      <button
        type="button"
        className="lmc-hero"
        aria-haspopup="dialog"
        aria-label={`${UI_TEXT.triggerLabel}: ${shown}`}
        onClick={() => openSearch(initialQuery)}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = TOKENS.brand; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = TOKENS.brandLine; }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          width: '100%',
          maxWidth,
          height: 64,
          padding: '0 12px 0 18px',
          borderRadius: 16,
          border: `1.5px solid ${TOKENS.brandLine}`,
          background: TOKENS.white,
          boxShadow: TOKENS.heroShadow,
          color: TOKENS.ink,
          font: 'inherit',
          cursor: 'text',
          textAlign: 'left',
          transition: 'border-color .15s',
        }}
      >
        <SparkIcon size={22} className={ANIM} style={{ color: TOKENS.brand, animation: 'lmc-search-twinkle 2.4s ease-in-out infinite' }} />
        <span style={{
          flex: 1, minWidth: 0, fontSize: 17, color: initialQuery ? TOKENS.ink : TOKENS.dim,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {shown}
        </span>
        <span className="lmc-hero-go" style={{
          height: 44, padding: '0 16px', borderRadius: 11, background: TOKENS.brand, color: TOKENS.white,
          fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', flexShrink: 0,
        }}>
          {buttonLabel}
        </span>
      </button>
    </>
  );
}
