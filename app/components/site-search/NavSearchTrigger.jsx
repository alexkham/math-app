'use client';
import React from 'react';
import { mediaQuery } from '@/app/lib/breakpoints';
import { useSiteSearch } from './SearchProvider';
import { TOKENS, UI_TEXT } from './searchConfig';
import { SparkIcon, SearchIcon } from './searchIcons';

/**
 * NavSearchTrigger: the search entry point in the navbar.
 *
 * variant 'auto'  (default) renders the 240 x 40 field for 1024px and up and the
 *                 42 x 42 icon button from 768 to 1023px. The switch is a CSS media
 *                 rule (not useMediaQuery) so the server and the first client paint
 *                 agree and the navbar does not shift on load.
 * variant 'field' always the field.
 * variant 'icon'  always the icon button (MyNavbar3 uses this in the bar below 768px).
 */

const ANIM = 'lmc-search-anim';
const STYLE = `
@keyframes lmc-search-twinkle { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(.72) rotate(35deg); } }
.lmc-nst-icon-auto { display: none !important; }
@media ${mediaQuery.lgDown} {
  .lmc-nst-field-auto { display: none !important; }
  .lmc-nst-icon-auto { display: grid !important; }
}
@media (prefers-reduced-motion: reduce) { .${ANIM} { animation: none !important; transition: none !important; } }
`;

const glass = 'rgba(255, 255, 255, 0.15)';
const glassHover = 'rgba(255, 255, 255, 0.24)';
const glassLine = 'rgba(255, 255, 255, 0.3)';
const glassLineHover = 'rgba(255, 255, 255, 0.5)';

export default function NavSearchTrigger({
  variant = 'auto',
  label = UI_TEXT.triggerLabel,
  hint = UI_TEXT.triggerHint,
  width = 240,
}) {
  const { openSearch } = useSiteSearch();
  const handleClick = () => openSearch('');
  const hoverOn = (e) => { e.currentTarget.style.background = glassHover; e.currentTarget.style.borderColor = glassLineHover; };
  const hoverOff = (e) => { e.currentTarget.style.background = glass; e.currentTarget.style.borderColor = glassLine; };

  const field = (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={handleClick}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      className={variant === 'auto' ? 'lmc-nst-field-auto' : ''}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: 40, width, padding: '0 8px 0 12px',
        borderRadius: 10, border: `1px solid ${glassLine}`, background: glass,
        color: TOKENS.white, font: 'inherit', cursor: 'pointer',
        transition: 'background .15s, border-color .15s',
      }}
    >
      <SparkIcon size={17} className={ANIM} style={{ animation: 'lmc-search-twinkle 2.4s ease-in-out infinite' }} />
      <span style={{ flex: 1, textAlign: 'left', fontSize: 14.5, color: 'rgba(255, 255, 255, 0.92)', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <kbd style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', fontSize: 11.5,
        padding: '2px 6px', borderRadius: 5, border: '1px solid currentColor', opacity: 0.75, lineHeight: 1.2,
      }}>
        {hint}
      </kbd>
    </button>
  );

  const icon = (
    <button
      type="button"
      aria-label={label}
      aria-haspopup="dialog"
      onClick={handleClick}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      className={variant === 'auto' ? 'lmc-nst-icon-auto' : ''}
      style={{
        position: 'relative', width: 42, height: 42, minWidth: 42, padding: 0,
        borderRadius: 10, border: `1px solid ${glassLine}`, background: glass,
        color: TOKENS.white, cursor: 'pointer', display: 'grid', placeItems: 'center',
        transition: 'background .15s, border-color .15s',
      }}
    >
      <SearchIcon size={19} />
      <SparkIcon size={10} style={{ position: 'absolute', top: 6, right: 6 }} />
    </button>
  );

  if (variant === 'icon') return <><style>{STYLE}</style>{icon}</>;
  if (variant === 'field') return <><style>{STYLE}</style>{field}</>;
  return (
    <>
      <style>{STYLE}</style>
      {field}
      {icon}
    </>
  );
}
