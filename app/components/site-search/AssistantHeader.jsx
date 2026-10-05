'use client';
import React from 'react';
import { TOKENS, UI_TEXT } from './searchConfig';
import { PageIcon, CloseIcon, PlusIcon } from './searchIcons';

/**
 * AssistantHeader: what the palette header shows in Ask AI mode instead of the search input.
 *
 *   <PageChip pageTitle usePage setUsePage />   "Using this page: {title}" pill with a remove button,
 *                                               or a "Use this page" text button; nothing without a page
 *   <NewChatButton onClick iconOnly />          "New chat" (icon only on mobile)
 *   <AssistantHeader … />                       both, for the desktop single-row layout
 *
 * Exported as pieces because the mobile header puts New chat on row one and the chip on row two.
 * textButtonStyle is shared with the error notices in AssistantMessage.
 */

export const textButtonStyle = {
  display: 'flex', alignItems: 'center', gap: 6, height: 36, padding: '0 12px', borderRadius: 9,
  border: `1px solid ${TOKENS.line}`, background: TOKENS.surface, color: TOKENS.body,
  font: 'inherit', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
};

export function textButtonHover(event, on) {
  event.currentTarget.style.background = on ? TOKENS.surface2 : TOKENS.surface;
  event.currentTarget.style.color = on ? TOKENS.ink : TOKENS.body;
}

export function PageChip({ pageTitle = '', usePage = true, setUsePage }) {
  if (!pageTitle) return null;
  if (!usePage) {
    return (
      <button
        type="button"
        onClick={() => setUsePage(true)}
        onMouseEnter={(e) => textButtonHover(e, true)}
        onMouseLeave={(e) => textButtonHover(e, false)}
        style={textButtonStyle}
      >
        <PageIcon size={14} />
        {UI_TEXT.askUsePage}
      </button>
    );
  }
  return (
    <span
      title={UI_TEXT.askUsePageTitle}
      style={{
        display: 'flex', alignItems: 'center', gap: 7, height: 32, maxWidth: '100%', padding: '0 8px 0 10px',
        borderRadius: 999, background: TOKENS.brandTint, border: `1px solid ${TOKENS.brandLine}`,
        color: TOKENS.brand, fontSize: 13.5, fontWeight: 600, minWidth: 0,
      }}
    >
      <PageIcon size={14} />
      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
        {UI_TEXT.askUsingPage} {pageTitle}
      </span>
      <button
        type="button"
        aria-label={UI_TEXT.askRemovePage}
        title={UI_TEXT.askRemovePage}
        onClick={() => setUsePage(false)}
        onMouseEnter={(e) => { e.currentTarget.style.color = TOKENS.ink; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = TOKENS.dim; }}
        style={{
          border: 0, background: 'transparent', padding: 4, margin: '0 -4px 0 0', color: TOKENS.dim,
          cursor: 'pointer', display: 'grid', placeItems: 'center', flexShrink: 0, borderRadius: 6,
        }}
      >
        <CloseIcon size={12} />
      </button>
    </span>
  );
}

export function NewChatButton({ onClick, iconOnly = false }) {
  return (
    <button
      type="button"
      aria-label={UI_TEXT.askNewChat}
      title={UI_TEXT.askNewChat}
      onClick={onClick}
      onMouseEnter={(e) => textButtonHover(e, true)}
      onMouseLeave={(e) => textButtonHover(e, false)}
      style={iconOnly ? { ...textButtonStyle, width: 36, padding: 0, justifyContent: 'center' } : textButtonStyle}
    >
      <PlusIcon size={14} />
      {!iconOnly && UI_TEXT.askNewChat}
    </button>
  );
}

export default function AssistantHeader({ pageTitle, usePage, setUsePage, hasMessages, onNewChat }) {
  return (
    <>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
        <PageChip pageTitle={pageTitle} usePage={usePage} setUsePage={setUsePage} />
      </div>
      {hasMessages && <NewChatButton onClick={onNewChat} />}
    </>
  );
}
