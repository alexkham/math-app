'use client';
import React, { useEffect, useState } from 'react';
import { TOKENS, UI_TEXT } from './searchConfig';
import { SparkIcon, ArrowIcon } from './searchIcons';

/**
 * AskAiRow: the two entry points to Ask AI inside Search mode.
 *
 *   <AskAiRow variant="results" query={query} isMac={isMac} onClick={…} />
 *       pinned first in the results list: brand badge, "Ask AI", the query, a Ctrl/⌘ Enter hint.
 *       Not part of the arrow-key selection.
 *   <AskAiRow variant="start" onClick={…} />
 *       start-screen group: label "Want an explanation instead of links?" and one card.
 *
 *   useIsMac()              true on macOS (detected once on mount) so hints read "⌘ Enter"
 *   askShortcutLabel(isMac) "⌘ Enter" | "Ctrl Enter"
 */

export function detectMac() {
  if (typeof navigator === 'undefined') return false;
  const data = navigator.userAgentData;
  const platform = (data && data.platform) || navigator.platform || '';
  return /mac/i.test(platform);
}

export function useIsMac() {
  const [isMac, setIsMac] = useState(false);
  useEffect(() => { setIsMac(detectMac()); }, []);
  return isMac;
}

export function askShortcutLabel(isMac) {
  return isMac ? '⌘ Enter' : 'Ctrl Enter';
}

const rowStyle = {
  display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '10px 12px',
  borderRadius: 12, border: `1px solid ${TOKENS.brandLine}`,
  background: `linear-gradient(180deg, ${TOKENS.askRowFrom}, ${TOKENS.brandTint})`,
  color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left',
  transition: 'border-color .15s',
};

function Badge() {
  return (
    <span style={{
      width: 36, height: 36, borderRadius: 10, background: TOKENS.brand, color: TOKENS.white,
      display: 'grid', placeItems: 'center', flexShrink: 0,
    }}>
      <SparkIcon size={18} />
    </span>
  );
}

export default function AskAiRow({ variant = 'results', query = '', isMac = false, onClick }) {
  const hover = (event, on) => { event.currentTarget.style.borderColor = on ? TOKENS.brand : TOKENS.brandLine; };

  if (variant === 'start') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: TOKENS.muted }}>{UI_TEXT.askCardLabel}</div>
        <button
          type="button"
          onClick={onClick}
          onMouseEnter={(e) => hover(e, true)}
          onMouseLeave={(e) => hover(e, false)}
          style={{ ...rowStyle, maxWidth: 520 }}
        >
          <Badge />
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
            <span style={{ fontSize: 14.5, fontWeight: 600, color: TOKENS.brand }}>{UI_TEXT.askRowTitle}</span>
            <span style={{ fontSize: 13.5, color: TOKENS.body }}>{UI_TEXT.askCardSubtitle}</span>
          </span>
          <ArrowIcon size={16} style={{ color: TOKENS.dim }} />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={(e) => hover(e, true)}
      onMouseLeave={(e) => hover(e, false)}
      style={{ ...rowStyle, marginBottom: 6, flexShrink: 0 }}
    >
      <Badge />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
        <span style={{ fontSize: 14.5, fontWeight: 600, color: TOKENS.brand }}>{UI_TEXT.askRowTitle}</span>
        <span style={{ fontSize: 13.5, color: TOKENS.body, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{query}</span>
      </span>
      <kbd style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', fontSize: 11, padding: '2px 6px',
        borderRadius: 5, border: `1px solid ${TOKENS.brandLine}`, color: TOKENS.brand, whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        {askShortcutLabel(isMac)}
      </kbd>
    </button>
  );
}
