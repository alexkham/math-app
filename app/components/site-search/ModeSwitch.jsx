'use client';
import React, { useRef } from 'react';
import { TOKENS, UI_TEXT } from './searchConfig';
import { SearchIcon, SparkIcon } from './searchIcons';

/**
 * ModeSwitch: the Search / Ask AI segmented control in the palette header.
 *
 *   <ModeSwitch mode="search" onChange={(next) => setMode(next)} compact={isMobile} />
 *
 * role="tablist" with two role="tab" buttons; Left/Right arrows move between them (and switch).
 * The palette's document-level key handler leaves arrow keys alone inside the element carrying
 * MODE_SWITCH_ATTR so this component can handle them itself.
 */

export const MODE_SWITCH_ATTR = 'data-lmc-mode-switch';

const ITEMS = [
  { key: 'search', label: UI_TEXT.modeSearch, Icon: SearchIcon },
  { key: 'assistant', label: UI_TEXT.modeAsk, Icon: SparkIcon },
];

export default function ModeSwitch({ mode = 'search', onChange, compact = false }) {
  const buttonRefs = useRef([]);

  const onKeyDown = (event, index) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const nextIndex = (index + (event.key === 'ArrowRight' ? 1 : -1) + ITEMS.length) % ITEMS.length;
    const button = buttonRefs.current[nextIndex];
    if (button) button.focus();
    if (ITEMS[nextIndex].key !== mode && typeof onChange === 'function') onChange(ITEMS[nextIndex].key);
  };

  return (
    <div
      role="tablist"
      aria-label="Mode"
      {...{ [MODE_SWITCH_ATTR]: 'true' }}
      style={{
        display: 'flex', padding: 3, gap: 2, borderRadius: 11,
        background: TOKENS.surface2, border: `1px solid ${TOKENS.line}`, flexShrink: 0,
      }}
    >
      {ITEMS.map((item, index) => {
        const on = item.key === mode;
        const Icon = item.Icon;
        return (
          <button
            key={item.key}
            ref={(el) => { buttonRefs.current[index] = el; }}
            type="button"
            role="tab"
            aria-selected={on}
            tabIndex={on ? 0 : -1}
            onClick={() => { if (!on && typeof onChange === 'function') onChange(item.key); }}
            onKeyDown={(event) => onKeyDown(event, index)}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = TOKENS.ink; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = TOKENS.muted; }}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: compact ? '0 10px' : '0 12px',
              border: 0, borderRadius: 8,
              background: on ? TOKENS.white : 'transparent',
              color: on ? TOKENS.brand : TOKENS.muted,
              boxShadow: on ? TOKENS.segmentShadow : 'none',
              font: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            <Icon size={15} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
