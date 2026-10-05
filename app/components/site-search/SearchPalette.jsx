'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { processContent } from '@/app/utils/contentProcessor';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { mediaQuery } from '@/app/lib/breakpoints';
import { useSiteSearch, SEARCH_INPUT_ATTR } from './SearchProvider';
import { useAssistant } from './AssistantProvider';
import ModeSwitch, { MODE_SWITCH_ATTR } from './ModeSwitch';
import { PageChip, NewChatButton } from './AssistantHeader';
import AskAiRow, { useIsMac, askShortcutLabel } from './AskAiRow';
import AssistantView from './AssistantView';
import { navigateToUrl } from './navigate';
import { currentPagePath, currentPageTitle } from './pageContext';
import {
  TOKENS, KIND_META, TABS, TRY_ASKING, POPULAR, UI_TEXT,
  SEARCH_LIMIT, DEBOUNCE_MS, MIN_QUERY_LENGTH, STOP_WORDS,
} from './searchConfig';
import { SparkIcon, CloseIcon, ArrowIcon, KindIcon } from './searchIcons';

/**
 * SearchPalette: the one dialog, mounted once per router (pages/_app.js, app/layout.js).
 * Opens through SearchProvider (navbar trigger, hero field, Ctrl+K: Search mode; floating pill: Ask AI mode).
 *
 * Two modes in one shell (SearchProvider.mode):
 *   search     this file: input, tabs, results, preview, footer. Talks to GET /api/search?q=&limit=20
 *              and filters by kind client-side. Plus the Ask AI entry points (AskAiRow, Ctrl/Cmd+Enter).
 *   assistant  header shows PageChip / New chat (AssistantHeader) and the body is AssistantView;
 *              tabs and footer are not rendered. The conversation lives in AssistantProvider.
 * ModeSwitch sits at the left of the header in both modes.
 */

const Z_INDEX = 100100;
const ANIM = 'lmc-search-anim';

const KEYFRAMES = `
@keyframes lmc-search-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes lmc-search-lift { from { opacity: 0; transform: translateY(12px) scale(.985); } to { opacity: 1; transform: none; } }
@keyframes lmc-search-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@keyframes lmc-search-twinkle { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(.72) rotate(35deg); } }
@keyframes lmc-search-scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(340%); } }
@media (prefers-reduced-motion: reduce) { .${ANIM} { animation: none !important; transition: none !important; } }
`;

/* ---------- small helpers ---------- */

function queryTerms(query) {
  return String(query || '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2 && STOP_WORDS.indexOf(term) === -1);
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const markStyle = { background: TOKENS.highlight, color: 'inherit', borderRadius: 3, padding: '0 2px' };

/** Titles with TeX go through processContent untouched; plain titles get query words marked. */
function renderTitle(title, terms) {
  const text = String(title || '');
  if (text.indexOf('$') !== -1) return processContent(text);
  if (!terms.length) return text;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'ig');
  return text.split(pattern).map((part, index) => (
    terms.indexOf(part.toLowerCase()) !== -1
      ? <mark key={index} style={markStyle}>{part}</mark>
      : <React.Fragment key={index}>{part}</React.Fragment>
  ));
}

function humanizeTopic(topic) {
  return String(topic || '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function breadcrumb(result, withKind) {
  const topic = humanizeTopic(result.topic);
  const page = result.pageTitle && result.pageTitle !== result.title ? result.pageTitle : '';
  const parts = [topic, page].filter(Boolean).join(' › ');
  if (!withKind) return parts;
  const kind = (KIND_META[result.kind] || KIND_META.page).label;
  return parts ? `${kind} in ${parts}` : kind;
}

function setHover(event, on, styleOn, styleOff) {
  const target = event.currentTarget;
  Object.keys(styleOn).forEach((key) => { target.style[key] = on ? styleOn[key] : styleOff[key]; });
}

const kbdStyle = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  fontSize: 11.5,
  padding: '2px 6px',
  borderRadius: 5,
  border: '1px solid currentColor',
  opacity: 0.8,
  lineHeight: 1.2,
};

/* ---------- result row (memoised so moving the selection re-renders only two rows) ---------- */

const ResultRow = React.memo(function ResultRow({ result, index, isActive, terms, onHover, onOpen, registerRef }) {
  const meta = KIND_META[result.kind] || KIND_META.page;
  return (
    <button
      type="button"
      role="option"
      aria-selected={isActive}
      ref={(el) => registerRef(index, el)}
      className={ANIM}
      onMouseMove={() => onHover(index)}
      onClick={() => onOpen(result)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        minHeight: 58,
        padding: '8px 10px',
        borderRadius: 10,
        border: `1px solid ${isActive ? TOKENS.brandLine : 'transparent'}`,
        background: isActive ? TOKENS.brandTint : 'transparent',
        boxShadow: isActive ? `inset 3px 0 0 ${TOKENS.brand}` : 'none',
        color: 'inherit',
        font: 'inherit',
        cursor: 'pointer',
        textAlign: 'left',
        animation: 'lmc-search-rise .26s ease-out both',
        animationDelay: `${Math.min(index, 12) * 35}ms`,
      }}
    >
      <span style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        display: 'grid', placeItems: 'center',
        color: meta.color, background: meta.background,
      }}>
        <KindIcon kind={result.kind} size={18} />
      </span>
      <span style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: TOKENS.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {renderTitle(result.title, terms)}
        </span>
        <span style={{ fontSize: 12.5, color: TOKENS.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {breadcrumb(result, true)}
        </span>
      </span>
    </button>
  );
});

/* ---------- the palette ---------- */

/**
 * Props
 *   fullPageNavigation  true where the palette is mounted under the App Router (app/layout.js):
 *                       results then open with a full page load, because the App Router cannot
 *                       client-navigate into Pages Router routes. Default false (pages/_app.js).
 */
export default function SearchPalette({ fullPageNavigation = false }) {
  const router = useRouter();
  const currentPathname = usePathname();
  const { isOpen, mode, initialQuery, openCount, closeSearch, setMode } = useSiteSearch();
  const assistant = useAssistant();
  const isMobile = useMediaQuery(mediaQuery.tabletDown);
  const isMac = useIsMac();
  const isAssistant = mode === 'assistant';
  const actionsRef = useRef({}); // AssistantView registers its composer actions here
  const pagePath = currentPagePath(currentPathname);
  // Page title comes from document.title, read again on every open and on every route change.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pageTitle = useMemo(() => currentPageTitle(currentPathname), [currentPathname, openCount]);

  const [query, setQuery] = useState('');
  const [shownQuery, setShownQuery] = useState('');
  const [results, setResults] = useState([]);
  const [source, setSource] = useState('none');
  const [status, setStatus] = useState('idle'); // idle | loading | ready | limited | error
  const [tab, setTab] = useState('all');
  const [active, setActive] = useState(0);

  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const rowRefs = useRef(new Map());
  const abortRef = useRef(null);
  const sequenceRef = useRef(0);
  const timerRef = useRef(null);

  /* reset on every open */
  useEffect(() => {
    if (!isOpen) return;
    setQuery(initialQuery || '');
    setShownQuery('');
    setResults([]);
    setSource('none');
    setStatus('idle');
    setTab('all');
    setActive(0);
    const id = window.setTimeout(() => { if (inputRef.current) inputRef.current.focus(); }, 20);
    return () => window.clearTimeout(id);
  }, [isOpen, openCount, initialQuery]);

  /* abort anything in flight on close */
  useEffect(() => {
    if (isOpen) return;
    if (abortRef.current) abortRef.current.abort();
    window.clearTimeout(timerRef.current);
  }, [isOpen]);

  const runSearch = useCallback(async (text) => {
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    sequenceRef.current += 1;
    const sequence = sequenceRef.current;
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(text)}&limit=${SEARCH_LIMIT}`,
        { signal: controller.signal },
      );
      if (sequence !== sequenceRef.current) return;
      if (response.status === 429) {
        setResults([]);
        setShownQuery(text);
        setStatus('limited');
        return;
      }
      if (!response.ok) throw new Error(`search answered ${response.status}`);
      const data = await response.json();
      if (sequence !== sequenceRef.current) return;
      setResults(Array.isArray(data.results) ? data.results : []);
      setSource(data.source || 'semantic');
      setShownQuery(text);
      setActive(0);
      setStatus('ready');
    } catch (error) {
      if (error && error.name === 'AbortError') return;
      if (sequence !== sequenceRef.current) return;
      setResults([]);
      setShownQuery(text);
      setStatus('error');
    }
  }, []);

  /* debounce */
  useEffect(() => {
    if (!isOpen) return undefined;
    const text = query.replace(/\s+/g, ' ').trim();
    window.clearTimeout(timerRef.current);
    if (text.length < MIN_QUERY_LENGTH) {
      if (abortRef.current) abortRef.current.abort();
      sequenceRef.current += 1;
      setResults([]);
      setShownQuery('');
      setSource('none');
      setStatus('idle');
      return undefined;
    }
    if (text === shownQuery && status !== 'idle') return undefined;
    setStatus('loading');
    timerRef.current = window.setTimeout(() => runSearch(text), DEBOUNCE_MS);
    return () => window.clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, isOpen]);

  /* derived view */
  const searching = query.trim().length >= MIN_QUERY_LENGTH;
  const isFallback = source === 'fallback';
  const terms = useMemo(() => queryTerms(shownQuery), [shownQuery]);
  const counts = useMemo(() => {
    const table = { all: results.length, tool: 0, definition: 0, section: 0, page: 0 };
    results.forEach((result) => { if (table[result.kind] !== undefined) table[result.kind] += 1; });
    return table;
  }, [results]);
  const effectiveTab = tab;
  const visible = useMemo(
    () => (effectiveTab === 'all' ? results : results.filter((result) => result.kind === effectiveTab)),
    [results, effectiveTab],
  );
  const activeIndex = Math.min(active, Math.max(0, visible.length - 1));
  const selected = visible[activeIndex] || null;

  /* keep the selected row in view without re-rendering the list */
  useEffect(() => {
    const row = rowRefs.current.get(activeIndex);
    if (row && typeof row.scrollIntoView === 'function') row.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, visible]);

  const registerRef = useCallback((index, el) => {
    if (el) rowRefs.current.set(index, el);
    else rowRefs.current.delete(index);
  }, []);

  const moveActive = useCallback((delta) => {
    setActive((current) => {
      const max = Math.max(0, visible.length - 1);
      return Math.max(0, Math.min(Math.min(current, max) + delta, max));
    });
  }, [visible.length]);

  const cycleTab = useCallback((direction) => {
    const index = TABS.findIndex((item) => item.key === tab);
    const next = TABS[(index + direction + TABS.length) % TABS.length];
    setTab(next.key);
    setActive(0);
  }, [tab]);

  const open = useCallback((result) => {
    if (!result || !result.url) return;
    navigateToUrl(result.url, { router, currentPath: currentPathname, closeSearch, fullPageNavigation });
  }, [router, currentPathname, closeSearch, fullPageNavigation]);

  const clearQuery = useCallback(() => {
    setQuery('');
    if (inputRef.current) inputRef.current.focus();
  }, []);

  /* ---------- keyboard: one document-level listener while open ----------
   * Registered in the capture phase on `document`, so it runs no matter where
   * focus is (input, a button in the panel, or the page body after a click on
   * a non-focusable spot) and before any page component's own document
   * listener (navbar Escape, explorer arrow keys, visualizer digits...).
   * Keys the dialog owns are consumed with stopImmediatePropagation; the rest
   * are still stopped so the page behind never reacts to typing. Ctrl/Cmd
   * combinations pass through untouched (the provider's Ctrl+K toggle, copy,
   * paste, browser shortcuts).
   * In Ask AI mode the composer owns the keys: only Escape (clears the draft), Tab (focus trap)
   * and Enter inside the composer (send; Shift+Enter inserts a line) are handled here, through
   * the actions AssistantView registers in actionsRef.
   */
  const keyStateRef = useRef({});
  keyStateRef.current = { searching, selected, moveActive, cycleTab, open, clearQuery, isAssistant, actionsRef };

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return undefined;

    const focusInput = () => {
      const state = keyStateRef.current;
      if (state.isAssistant) {
        const actions = state.actionsRef.current;
        if (actions && actions.focusComposer) actions.focusComposer();
        return;
      }
      if (inputRef.current) inputRef.current.focus();
    };
    const focusables = () => Array.from(panelRef.current ? panelRef.current.querySelectorAll('button, a[href], input, textarea') : [])
      .filter((el) => !el.disabled && el.tabIndex !== -1 && el.offsetParent !== null);
    const trapTab = (event, target, inPanel) => {
      event.stopImmediatePropagation();
      const list = focusables();
      if (!list.length) { event.preventDefault(); return; }
      const first = list[0];
      const last = list[list.length - 1];
      if (!inPanel) { event.preventDefault(); (event.shiftKey ? last : first).focus(); return; }
      if (event.shiftKey && target === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && target === last) { event.preventDefault(); first.focus(); }
    };

    const onKeyDown = (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const state = keyStateRef.current;
      const key = event.key;
      const panel = panelRef.current;
      const input = inputRef.current;
      const target = event.target;
      const inPanel = !!(panel && target && typeof target.nodeType === 'number' && panel.contains(target));
      const onControl = inPanel && target !== input && (target.tagName === 'BUTTON' || target.tagName === 'A');
      const consume = () => { event.preventDefault(); event.stopImmediatePropagation(); };

      // ModeSwitch handles Left/Right itself (roving tabs), in both modes.
      if (inPanel && typeof target.closest === 'function' && target.closest(`[${MODE_SWITCH_ATTR}]`)
        && (key === 'ArrowLeft' || key === 'ArrowRight')) return;

      if (state.isAssistant) {
        const actions = state.actionsRef.current || {};
        const composer = actions.composer ? actions.composer() : null;
        const inComposer = !!(composer && target === composer);
        if (key === 'Escape') { consume(); if (actions.clearComposer) actions.clearComposer(); return; }
        if (key === 'Tab') { trapTab(event, target, inPanel); return; }
        if (key === 'Enter') {
          if (inComposer) {
            if (event.shiftKey || event.isComposing || event.keyCode === 229) { event.stopPropagation(); return; }
            consume();
            if (actions.send) actions.send();
            return;
          }
          event.stopPropagation(); // a button or link acts natively
          return;
        }
        event.stopPropagation();
        if (!inPanel && composer && key.length === 1) composer.focus();
        return;
      }

      if (key === 'Escape') {
        consume();
        state.clearQuery(); // never closes: the X button does that
        return;
      }
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        consume();
        state.moveActive(key === 'ArrowDown' ? 1 : -1);
        if (target !== input) focusInput();
        return;
      }
      if (key === 'Enter') {
        if (onControl) { event.stopPropagation(); return; } // the button or link acts natively
        event.stopImmediatePropagation();
        if (state.selected) { event.preventDefault(); state.open(state.selected); }
        return;
      }
      if (key === 'Tab') {
        if (state.searching) {
          consume();
          state.cycleTab(event.shiftKey ? -1 : 1);
          focusInput();
          return;
        }
        // Start screen: keep focus cycling inside the dialog.
        trapTab(event, target, inPanel);
        return;
      }
      // Any other key: the page behind must not see it. A printable character
      // typed while focus is outside the input goes to the input.
      event.stopPropagation();
      if (!inPanel && input && key.length === 1) focusInput();
    };

    // If a page script or a click moves focus out of the panel, bring it back.
    const onFocusIn = (event) => {
      const panel = panelRef.current;
      if (!panel || !event.target || panel.contains(event.target)) return;
      focusInput();
    };

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('focusin', onFocusIn, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('focusin', onFocusIn, true);
    };
  }, [isOpen]);

  // Clicking a non-interactive spot inside the panel (preview text, list
  // background, footer) must not move focus to the page body.
  const onPanelMouseDown = (event) => {
    const target = event.target;
    if (target && typeof target.closest === 'function' && target.closest('button, a[href], input, textarea, select, [tabindex]')) return;
    event.preventDefault();
  };

  if (!isOpen) return null;

  /* ---------- styles ---------- */

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: Z_INDEX,
    background: TOKENS.backdrop,
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: isMobile ? 0 : '84px 16px 16px',
    animation: 'lmc-search-fade .16s ease-out',
  };
  const panelStyle = {
    width: isMobile ? '100%' : 'min(920px, 100%)',
    height: isMobile ? '100%' : 'min(640px, calc(100vh - 110px))',
    background: TOKENS.white,
    color: TOKENS.ink,
    border: isMobile ? 0 : `1px solid ${TOKENS.line}`,
    borderRadius: isMobile ? 0 : 16,
    boxShadow: TOKENS.panelShadow,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    animation: 'lmc-search-lift .24s cubic-bezier(.2, .8, .2, 1)',
  };
  const iconButtonStyle = {
    width: 36, height: 36, borderRadius: 9,
    border: `1px solid ${TOKENS.line}`,
    background: TOKENS.surface,
    color: TOKENS.muted,
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    flexShrink: 0,
    padding: 0,
  };
  const iconHoverOn = { background: TOKENS.surface2, color: TOKENS.ink };
  const iconHoverOff = { background: TOKENS.surface, color: TOKENS.muted };

  const showTabs = !isAssistant;
  const showCounts = searching;
  const showFooter = !isMobile && !isAssistant;
  const askQuery = query.replace(/\s+/g, ' ').trim();
  const goAsk = (carry, origin) => setMode('assistant', carry, origin);
  const newChat = () => {
    assistant.reset();
    const actions = actionsRef.current;
    if (actions && actions.focusComposer) actions.focusComposer();
  };
  const hasConversation = assistant.messages.length > 0;

  /* ---------- pieces ---------- */

  /* Header. 2026-10-05: ModeSwitch replaced the spark tile; in Ask AI mode the page chip and New chat
   * replace the input. Below 768px the header wraps into two rows: ModeSwitch, spacer and the
   * buttons on row one; the input (or the page chip) on row two. */
  const closeButton = (
    <button
      type="button"
      aria-label={UI_TEXT.close}
      title={UI_TEXT.close}
      onClick={closeSearch}
      onMouseEnter={(e) => setHover(e, true, iconHoverOn, iconHoverOff)}
      onMouseLeave={(e) => setHover(e, false, iconHoverOn, iconHoverOff)}
      style={isMobile ? { ...iconButtonStyle, width: 44, height: 44 } : iconButtonStyle}
    >
      <CloseIcon size={16} />
    </button>
  );

  const searchInput = (
    <div style={{
      flex: isMobile ? '1 1 100%' : 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 14,
    }}>
      <label htmlFor="lmc-search-input" style={{ position: 'absolute', left: -9999 }}>{UI_TEXT.triggerLabel}</label>
      <input
        id="lmc-search-input"
        ref={inputRef}
        {...{ [SEARCH_INPUT_ATTR]: 'true' }}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          // Ctrl/Cmd+Enter: ask the AI about the typed text. Plain keys are handled by the document listener.
          if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && askQuery.length >= MIN_QUERY_LENGTH) {
            event.preventDefault();
            goAsk(askQuery, 'ask_row');
          }
        }}
        placeholder={UI_TEXT.placeholder}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        role="combobox"
        aria-expanded={searching}
        aria-controls="lmc-search-results"
        aria-autocomplete="list"
        style={{
          flex: 1, minWidth: 0, height: 44, border: 0, background: 'transparent',
          color: TOKENS.ink, font: 'inherit', fontSize: isMobile ? 18 : 21, fontWeight: 500, outline: 'none',
        }}
      />
      {/* 2026-10-04: Esc clears the query (never closes), so its hint sits before the clear button, shown with it; the X button closes on every layout */}
      {!isMobile && <kbd style={{ ...kbdStyle, color: TOKENS.dim, visibility: query ? 'visible' : 'hidden' }}>{UI_TEXT.escHint}</kbd>}
      <button
        type="button"
        aria-label={UI_TEXT.clear}
        onClick={clearQuery}
        onMouseEnter={(e) => setHover(e, true, iconHoverOn, iconHoverOff)}
        onMouseLeave={(e) => setHover(e, false, iconHoverOn, iconHoverOff)}
        style={{ ...iconButtonStyle, visibility: query ? 'visible' : 'hidden' }}
      >
        <CloseIcon size={14} />
      </button>
    </div>
  );

  const pageChip = (
    <div style={{ flex: isMobile ? '1 1 100%' : 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
      <PageChip pageTitle={pageTitle} usePage={assistant.usePage} setUsePage={assistant.setUsePage} />
    </div>
  );

  const header = (
    <div style={isMobile ? {
      position: 'relative', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10,
      minHeight: 64, padding: '10px 12px', borderBottom: `1px solid ${TOKENS.line}`, flexShrink: 0,
    } : {
      position: 'relative', display: 'flex', alignItems: 'center', gap: 14,
      height: 74, padding: '0 18px', borderBottom: `1px solid ${TOKENS.line}`, flexShrink: 0,
    }}>
      <ModeSwitch mode={mode} onChange={(next) => setMode(next, '', 'switch')} compact={isMobile} />
      {isMobile && <span style={{ flex: 1 }} />}
      {isMobile && isAssistant && hasConversation && <NewChatButton onClick={newChat} iconOnly />}
      {isMobile && closeButton}
      {isAssistant ? pageChip : searchInput}
      {!isMobile && isAssistant && hasConversation && <NewChatButton onClick={newChat} />}
      {!isMobile && closeButton}
      {!isAssistant && (
        <div aria-hidden="true" style={{
          position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, overflow: 'hidden',
          opacity: status === 'loading' ? 1 : 0, transition: 'opacity .15s',
        }}>
          <div className={ANIM} style={{
            position: 'absolute', top: 0, left: 0, width: '30%', height: 2,
            background: `linear-gradient(90deg, rgba(77, 77, 255, 0), ${TOKENS.brand}, rgba(77, 77, 255, 0))`,
            animation: status === 'loading' ? 'lmc-search-scan 1.1s ease-in-out infinite' : 'none',
          }} />
        </div>
      )}
    </div>
  );

  const tabStrip = showTabs && (
    <div role="tablist" aria-label="Result categories" style={{
      display: 'flex', alignItems: 'stretch', gap: 4, padding: '0 14px',
      borderBottom: `1px solid ${TOKENS.line}`, background: TOKENS.surface, flexShrink: 0, overflowX: 'auto',
    }}>
      {TABS.map((item) => {
        const on = item.key === tab;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={on}
            tabIndex={-1}
            onClick={() => { setTab(item.key); setActive(0); if (inputRef.current) inputRef.current.focus(); }}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = TOKENS.ink; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = TOKENS.muted; }}
            style={{
              display: 'flex', alignItems: 'center', gap: 7, height: 46, padding: '0 12px',
              border: 0, borderBottom: `2px solid ${on ? TOKENS.brand : 'transparent'}`,
              background: 'transparent', color: on ? TOKENS.brand : TOKENS.muted,
              font: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            {item.key !== 'all' && <KindIcon kind={item.key} size={15} />}
            {item.label}
            {showCounts && (
              <span style={{
                minWidth: 22, height: 20, padding: '0 6px', borderRadius: 999,
                background: on ? TOKENS.brand : TOKENS.white,
                border: `1px solid ${on ? TOKENS.brand : TOKENS.line}`,
                color: on ? TOKENS.white : TOKENS.muted,
                fontFamily: kbdStyle.fontFamily, fontSize: 11.5, display: 'grid', placeItems: 'center',
              }}>
                {counts[item.key]}
              </span>
            )}
          </button>
        );
      })}
      {!isMobile && (!searching || source === 'semantic') && (
        <span style={{
          marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 16,
          fontSize: 13, color: TOKENS.brand, fontWeight: 600, whiteSpace: 'nowrap',
        }}>
          <SparkIcon size={13} />
          {UI_TEXT.understands}
        </span>
      )}
    </div>
  );

  const startScreen = (
    <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '22px 16px' : '26px 28px', display: 'flex', flexDirection: 'column', gap: 26 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: TOKENS.muted }}>
          <SparkIcon size={14} style={{ color: TOKENS.brand }} />
          {UI_TEXT.tryAsking}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
          {TRY_ASKING.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => { setQuery(question); if (inputRef.current) inputRef.current.focus(); }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = TOKENS.brandLine; e.currentTarget.style.background = TOKENS.brandTint; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = TOKENS.line; e.currentTarget.style.background = TOKENS.surface; }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, minHeight: 56, padding: '12px 14px',
                borderRadius: 12, border: `1px solid ${TOKENS.line}`, background: TOKENS.surface,
                color: TOKENS.ink, font: 'inherit', fontSize: 15, cursor: 'pointer', textAlign: 'left',
                transition: 'border-color .15s, background .15s',
              }}
            >
              <span style={{ flex: 1 }}>{question}</span>
              <ArrowIcon size={16} style={{ color: TOKENS.dim }} />
            </button>
          ))}
        </div>
      </div>
      <AskAiRow variant="start" onClick={() => goAsk('', 'start_card')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: TOKENS.muted }}>{UI_TEXT.popular}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {POPULAR.map((item) => {
            const meta = KIND_META[item.kind] || KIND_META.page;
            return (
              <a
                key={item.url}
                href={item.url}
                onClick={(event) => { event.preventDefault(); open(item); }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = TOKENS.brandLine; e.currentTarget.style.background = TOKENS.surface; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = TOKENS.line; e.currentTarget.style.background = TOKENS.white; }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8, minHeight: 44, padding: '0 12px 0 8px',
                  borderRadius: 999, border: `1px solid ${TOKENS.line}`, background: TOKENS.white,
                  color: TOKENS.ink, fontSize: 14, textDecoration: 'none', cursor: 'pointer',
                }}
              >
                <span style={{ width: 24, height: 24, borderRadius: 7, display: 'grid', placeItems: 'center', color: meta.color, background: meta.background }}>
                  <KindIcon kind={item.kind} size={13} />
                </span>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );

  const noteStyle = { padding: '26px 16px', color: TOKENS.muted, fontSize: 15, lineHeight: 1.55 };

  let listContent;
  if (status === 'limited') {
    listContent = <div role="status" style={noteStyle}>{UI_TEXT.rateLimited}</div>;
  } else if (status === 'error') {
    listContent = <div role="status" style={noteStyle}>{UI_TEXT.unavailable}</div>;
  } else if (visible.length) {
    listContent = visible.map((result, index) => (
      <ResultRow
        key={`${result.url}-${index}`}
        result={result}
        index={index}
        isActive={index === activeIndex}
        terms={terms}
        onHover={setActive}
        onOpen={open}
        registerRef={registerRef}
      />
    ));
  } else if (status === 'loading' && !shownQuery) {
    listContent = <div role="status" style={noteStyle}>{UI_TEXT.searching}</div>;
  } else if (status === 'ready' && results.length) {
    listContent = <div role="status" style={noteStyle}>{UI_TEXT.emptyCategory}</div>;
  } else if (status === 'ready') {
    listContent = <div role="status" style={noteStyle}>{UI_TEXT.noResults}</div>;
  } else {
    listContent = null;
  }

  const resultsList = (
    <div
      id="lmc-search-results"
      role="listbox"
      aria-label="Results"
      style={{
        width: isMobile ? '100%' : 430,
        borderRight: isMobile ? 0 : `1px solid ${TOKENS.line}`,
        overflowY: 'auto', padding: 10, display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0,
      }}
    >
      {askQuery.length >= MIN_QUERY_LENGTH && (
        <AskAiRow variant="results" query={askQuery} isMac={isMac} onClick={() => goAsk(askQuery, 'ask_row')} />
      )}
      {isFallback && visible.length > 0 && (
        <div style={{ padding: '6px 10px 8px', fontSize: 12.5, color: TOKENS.muted }}>{UI_TEXT.fallbackNote}</div>
      )}
      {listContent}
    </div>
  );

  const previewPane = !isMobile && (
    <div style={{ flex: 1, minWidth: 0, padding: '26px 28px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 15, background: TOKENS.white }}>
      {selected && (() => {
        const meta = KIND_META[selected.kind] || KIND_META.page;
        return (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 999, color: meta.color, background: meta.background }}>
                {meta.label}
              </span>
            </div>
            <h2 style={{ fontSize: 27, fontWeight: 600, lineHeight: 1.2, color: TOKENS.ink, margin: 0 }}>
              {renderTitle(selected.title, terms)}
            </h2>
            {breadcrumb(selected, false) && (
              <div style={{ fontSize: 14, color: TOKENS.muted }}>{breadcrumb(selected, false)}</div>
            )}
            {!isFallback && selected.snippet && (
              <div style={{ fontSize: 16, lineHeight: 1.65, color: TOKENS.body, maxWidth: '60ch' }}>
                {processContent(selected.snippet)}
              </div>
            )}
            <a
              href={selected.url}
              onClick={(event) => { event.preventDefault(); open(selected); }}
              onMouseEnter={(e) => { e.currentTarget.style.background = TOKENS.brandHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = TOKENS.brand; }}
              style={{
                alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, height: 44, padding: '0 18px',
                borderRadius: 10, background: TOKENS.brand, color: TOKENS.white, textDecoration: 'none',
                fontWeight: 600, fontSize: 15,
              }}
            >
              {meta.action}
              <ArrowIcon size={16} />
            </a>
          </>
        );
      })()}
    </div>
  );

  const footer = showFooter && (
    <div style={{
      height: 44, borderTop: `1px solid ${TOKENS.line}`, background: TOKENS.surface, flexShrink: 0,
      display: 'flex', alignItems: 'center', gap: 18, padding: '0 18px', fontSize: 12.5, color: TOKENS.muted,
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><kbd style={kbdStyle}>&uarr;&darr;</kbd> {UI_TEXT.footerNavigate}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><kbd style={kbdStyle}>Enter</kbd> {UI_TEXT.footerOpen}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><kbd style={kbdStyle}>{askShortcutLabel(isMac)}</kbd> {UI_TEXT.footerAsk}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><kbd style={kbdStyle}>Tab</kbd> {UI_TEXT.footerTab}</span>
      <button
        type="button"
        onClick={clearQuery}
        aria-label={UI_TEXT.clear}
        onMouseEnter={(e) => setHover(e, true, { color: TOKENS.ink, background: TOKENS.surface2 }, { color: TOKENS.muted, background: 'transparent' })}
        onMouseLeave={(e) => setHover(e, false, { color: TOKENS.ink, background: TOKENS.surface2 }, { color: TOKENS.muted, background: 'transparent' })}
        style={{
          display: 'flex', alignItems: 'center', gap: 6, border: 0, background: 'transparent', color: TOKENS.muted,
          font: 'inherit', cursor: 'pointer', padding: '4px 8px', margin: '0 0 0 -8px', borderRadius: 7,
        }}
      ><kbd style={kbdStyle}>{UI_TEXT.escHint}</kbd> {UI_TEXT.footerClear}</button>
      <span style={{ marginLeft: 'auto' }}>{UI_TEXT.footerNote}</span>
    </div>
  );

  return (
    <div
      className={ANIM}
      style={overlayStyle}
      onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch(); }}
    >
      <style>{KEYFRAMES}</style>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={UI_TEXT.dialogLabel}
        className={ANIM}
        style={panelStyle}
        onMouseDown={onPanelMouseDown}
      >
        {header}
        {tabStrip}
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {isAssistant && (
            <AssistantView
              pagePath={pagePath}
              isMobile={isMobile}
              fullPageNavigation={fullPageNavigation}
              actionsRef={actionsRef}
              onSearchInstead={(question) => setMode('search', question, 'search_instead')}
            />
          )}
          {!isAssistant && (searching ? (
            <>
              {resultsList}
              {previewPane}
            </>
          ) : startScreen)}
        </div>
        {footer}
      </div>
    </div>
  );
}
