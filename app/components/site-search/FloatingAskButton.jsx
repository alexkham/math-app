'use client';
import React from 'react';
import { mediaQuery } from '@/app/lib/breakpoints';
import { useSiteSearch } from './SearchProvider';
import { TOKENS, UI_TEXT } from './searchConfig';
import { SparkIcon } from './searchIcons';

/**
 * FloatingAskButton: the fixed "Ask Learn Math" pill, bottom right,
 * stacked above ScrollUpButton (right 20px, bottom 20px, 50 x 50).
 *
 * mode 'search'    (default) opens the search palette.
 * mode 'assistant' reserved for the future AI assistant. Nothing is built for it yet:
 *                  today it behaves exactly like 'search'. When the assistant exists,
 *                  branch on `mode` inside handleClick and leave the search path alone.
 *
 * The pill stays mounted while the palette is open (only hidden), so focus can
 * return to it when the palette closes.
 */

const ANIM = 'lmc-search-anim';
const STYLE = `
@keyframes lmc-search-twinkle { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(.72) rotate(35deg); } }
@media ${mediaQuery.tabletDown} {
  .lmc-ask-pill { width: 52px !important; padding: 0 !important; justify-content: center !important; }
  .lmc-ask-pill .lmc-ask-label { display: none !important; }
  .lmc-ask-pill .lmc-ask-ring { background: transparent !important; }
}
@media (prefers-reduced-motion: reduce) { .${ANIM} { animation: none !important; transition: none !important; } }
`;

export default function FloatingAskButton({
  mode = 'search',
  label = UI_TEXT.askLabel,
  right = '20px',
  bottom = '84px',
  zIndex = 99990,
}) {
  const { isOpen, openSearch } = useSiteSearch();

  const handleClick = () => {
    // Future: if (mode === 'assistant') open the assistant instead.
    openSearch('');
  };

  return (
    <>
      <style>{STYLE}</style>
      <button
        type="button"
        className={`lmc-ask-pill ${ANIM}`}
        data-mode={mode}
        aria-label={label}
        aria-haspopup="dialog"
        onClick={handleClick}
        onMouseEnter={(e) => { e.currentTarget.style.background = TOKENS.brandHover; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = TOKENS.brand; e.currentTarget.style.transform = 'none'; }}
        style={{
          position: 'fixed',
          right,
          bottom,
          zIndex,
          height: 52,
          padding: '0 20px 0 8px',
          borderRadius: 999,
          border: 0,
          background: TOKENS.brand,
          color: TOKENS.white,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          cursor: 'pointer',
          boxShadow: TOKENS.pillShadow,
          font: 'inherit',
          fontSize: 15.5,
          fontWeight: 600,
          whiteSpace: 'nowrap',
          transition: 'background .15s, transform .15s',
          visibility: isOpen ? 'hidden' : 'visible',
          pointerEvents: isOpen ? 'none' : 'auto',
        }}
      >
        <span className="lmc-ask-ring" style={{
          width: 36, height: 36, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.18)',
          display: 'grid', placeItems: 'center', flexShrink: 0,
        }}>
          <SparkIcon size={18} className={ANIM} style={{ animation: 'lmc-search-twinkle 2.4s ease-in-out infinite' }} />
        </span>
        <span className="lmc-ask-label">{label}</span>
      </button>
    </>
  );
}
