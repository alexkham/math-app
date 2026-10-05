'use client';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSiteSearch } from './SearchProvider';
import { useAssistant } from './AssistantProvider';
import { TOKENS, UI_TEXT, ASSIST, ASK_SUGGESTIONS_PAGE, ASK_SUGGESTIONS_GENERAL } from './searchConfig';
import { SendIcon, StopIcon, ArrowIcon } from './searchIcons';
import AssistantMessage, { ANSWER_CLASS, errorText } from './AssistantMessage';
import { navigateToUrl, isModifiedClick } from './navigate';

/**
 * AssistantView: the body of the palette in Ask AI mode. Welcome screen (no messages yet),
 * the thread, the composer and the disclaimer.
 *
 *   <AssistantView pagePath isMobile fullPageNavigation actionsRef onSearchInstead />
 *
 *   pagePath            current page path from pageContext.currentPagePath; sent with questions while usePage is true
 *   fullPageNavigation  passed through to navigateToUrl (App Router mount)
 *   actionsRef          ref the palette's document-level key handler reads:
 *                       { composer(), send(), clearComposer(), focusComposer() }
 *   onSearchInstead(q)  switch to Search mode with the failed question
 *
 * The conversation itself lives in AssistantProvider; this component only renders it and sends.
 * - A pendingQuestion from SearchProvider (Ask AI row, Ctrl+Enter, pill with a question) is sent on mount.
 * - Stop before any text arrived puts the question back into the composer (restoredQuestion).
 * - Auto-scroll: a new message scrolls to the bottom; while streaming the thread follows only if the
 *   visitor was within ASSIST.stickToBottomPx of the bottom.
 * - One delegated click handler on the thread opens site-relative links (answers and source chips)
 *   through navigateToUrl; modifier clicks and absolute URLs are left to the browser.
 * - A visually hidden aria-live region announces "Answer ready" or the error text.
 */

export const ASK_INPUT_ATTR = 'data-lmc-ask-input';
const ANIM = 'lmc-search-anim';
const MAX_COMPOSER_HEIGHT = 140;

const STYLE = `
@keyframes lmc-search-caret { 50% { opacity: 0; } }
.${ANSWER_CLASS} strong { color: ${TOKENS.ink}; }
.${ANSWER_CLASS} a { color: ${TOKENS.brand}; text-decoration: underline; text-decoration-color: ${TOKENS.brandLine}; text-underline-offset: 3px; font-weight: 500; }
.${ANSWER_CLASS} a:hover { text-decoration-color: ${TOKENS.brand}; }
.${ANSWER_CLASS} .katex-display { margin: 0; }
.${ANSWER_CLASS} .katex-display > .katex { white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { .${ANIM} { animation: none !important; transition: none !important; } }
`;

function Suggestion({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = TOKENS.brandLine; e.currentTarget.style.background = TOKENS.brandTint; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = TOKENS.line; e.currentTarget.style.background = TOKENS.surface; }}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, minHeight: 56, padding: '12px 14px',
        borderRadius: 12, border: `1px solid ${TOKENS.line}`, background: TOKENS.surface,
        color: TOKENS.ink, font: 'inherit', fontSize: 15, cursor: 'pointer', textAlign: 'left',
        transition: 'border-color .15s, background .15s',
      }}
    >
      <span style={{ flex: 1 }}>{text}</span>
      <ArrowIcon size={16} style={{ color: TOKENS.dim }} />
    </button>
  );
}

export default function AssistantView({ pagePath = '', isMobile = false, fullPageNavigation = false, actionsRef, onSearchInstead }) {
  const router = useRouter();
  const currentPathname = usePathname();
  const { closeSearch, pendingQuestion, consumePendingQuestion } = useSiteSearch();
  const {
    messages, isStreaming, usePage, ask, stop, retry, setVote, showAllSources, restoredQuestion, takeRestoredQuestion,
  } = useAssistant();

  const [draft, setDraft] = useState('');
  const [focused, setFocused] = useState(false);
  const [live, setLive] = useState('');

  const textareaRef = useRef(null);
  const threadRef = useRef(null);
  const stickRef = useRef(true);
  const countRef = useRef(messages.length);
  const announcedRef = useRef('');
  const sendRef = useRef(() => {});

  const effectivePage = usePage ? pagePath : '';
  const hasMessages = messages.length > 0;

  const focusComposer = useCallback(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  const send = useCallback((text) => {
    const question = String(text === undefined ? draft : text).replace(/\s+/g, ' ').trim();
    if (!question || isStreaming) return;
    ask(question, effectivePage);
    setDraft('');
    focusComposer();
  }, [draft, isStreaming, ask, effectivePage, focusComposer]);
  sendRef.current = send;

  // What the palette's key handler can do to the composer.
  useEffect(() => {
    if (!actionsRef) return undefined;
    actionsRef.current = {
      composer: () => textareaRef.current,
      send: () => sendRef.current(),
      clearComposer: () => setDraft(''),
      focusComposer,
    };
    return () => { actionsRef.current = {}; };
  }, [actionsRef, focusComposer]);

  // Focus the composer when Ask AI mode opens (same 20 ms as the search input).
  useEffect(() => {
    const id = window.setTimeout(focusComposer, 20);
    return () => window.clearTimeout(id);
  }, [focusComposer]);

  // A question carried over from Search mode (Ask AI row, Ctrl+Enter) or from openAssistant(question).
  useEffect(() => {
    if (!pendingQuestion) return;
    const question = consumePendingQuestion();
    if (!question) return;
    if (isStreaming) setDraft(question);
    else ask(question, effectivePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuestion]);

  // Stop before any text: the question comes back to the composer.
  useEffect(() => {
    if (!restoredQuestion) return;
    setDraft(takeRestoredQuestion());
    focusComposer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restoredQuestion]);

  // Composer grows with its content up to MAX_COMPOSER_HEIGHT.
  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_COMPOSER_HEIGHT)}px`;
  }, [draft]);

  // Auto-scroll.
  const scrollToBottom = useCallback(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);
  const onThreadScroll = useCallback(() => {
    const el = threadRef.current;
    if (!el) return;
    stickRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < ASSIST.stickToBottomPx;
  }, []);
  useEffect(() => {
    const added = messages.length > countRef.current;
    countRef.current = messages.length;
    if (added) { stickRef.current = true; scrollToBottom(); return; }
    if (stickRef.current) scrollToBottom();
  }, [messages, scrollToBottom]);

  // Screen-reader announcements.
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last || last.role !== 'assistant') return;
    const key = `${last.id}:${last.status}`;
    if (announcedRef.current === key) return;
    if (last.status === 'done' || last.status === 'stopped') { announcedRef.current = key; setLive(UI_TEXT.askReady); }
    else if (last.status === 'error') { announcedRef.current = key; setLive(errorText(last.error)); }
  }, [messages]);

  // Links inside answers and source chips.
  const onThreadClick = useCallback((event) => {
    const target = event.target;
    const anchor = target && typeof target.closest === 'function' ? target.closest('a[href]') : null;
    if (!anchor || !threadRef.current || !threadRef.current.contains(anchor)) return;
    const href = anchor.getAttribute('href') || '';
    if (!href.startsWith('/')) return;
    if (isModifiedClick(event)) return;
    event.preventDefault();
    navigateToUrl(href, { router, currentPath: currentPathname, closeSearch, fullPageNavigation });
  }, [router, currentPathname, closeSearch, fullPageNavigation]);

  const onComposerKeyDown = (event) => {
    // The palette's document-level handler normally consumes Enter first; this is the fallback
    // for the component rendered on its own.
    if (event.key !== 'Enter' || event.shiftKey) return;
    if (event.nativeEvent && event.nativeEvent.isComposing) return;
    event.preventDefault();
    send();
  };

  const suggestions = usePage
    ? [...ASK_SUGGESTIONS_PAGE, ASK_SUGGESTIONS_GENERAL[0]]
    : ASK_SUGGESTIONS_GENERAL.slice(0, 4);

  const questionFor = (index) => {
    const previous = messages[index - 1];
    return previous && previous.role === 'user' ? previous.content : '';
  };

  const canSend = draft.trim().length > 0;

  return (
    <div style={{ flex: 1, minHeight: 0, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <style>{STYLE}</style>

      <div
        ref={threadRef}
        onScroll={onThreadScroll}
        onClick={onThreadClick}
        aria-busy={isStreaming}
        style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '20px 14px 10px' : '26px 28px 10px' }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22 }}>
          {!hasMessages && (
            <div className={ANIM} style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 10, animation: 'lmc-search-rise .3s ease-out both' }}>
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: 1.25, color: TOKENS.ink }}>{UI_TEXT.askWelcomeTitle}</h3>
              <p style={{ margin: 0, color: TOKENS.muted, fontSize: 15, lineHeight: 1.55 }}>{UI_TEXT.askWelcomeText}</p>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
                {suggestions.map((text) => <Suggestion key={text} text={text} onClick={() => send(text)} />)}
              </div>
            </div>
          )}
          {messages.map((message, index) => (
            message.role === 'user' ? (
              <div
                key={message.id}
                className={ANIM}
                style={{
                  alignSelf: 'flex-end', maxWidth: isMobile ? '92%' : '82%', padding: '11px 15px',
                  borderRadius: '16px 16px 4px 16px', background: TOKENS.brandTint, border: `1px solid ${TOKENS.brandLine}`,
                  color: TOKENS.ink, fontSize: 15.5, lineHeight: 1.55, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere',
                  animation: 'lmc-search-rise .22s ease-out both',
                }}
              >
                {message.content}
              </div>
            ) : (
              <AssistantMessage
                key={message.id}
                message={message}
                question={questionFor(index)}
                isMobile={isMobile}
                onRetry={(id) => retry(id, effectivePage)}
                onSearchInstead={onSearchInstead}
                onVote={setVote}
                onShowAll={showAllSources}
              />
            )
          ))}
        </div>
      </div>

      <div aria-live="polite" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>{live}</div>

      <div style={{ flexShrink: 0, padding: isMobile ? '10px 12px 12px' : '12px 28px 14px', borderTop: `1px solid ${TOKENS.line}`, background: TOKENS.white }}>
        <div style={{
          maxWidth: 700, margin: '0 auto', display: 'flex', alignItems: 'flex-end', gap: 10, padding: '8px 8px 8px 14px',
          borderRadius: 14, border: `1px solid ${focused ? TOKENS.brandLine : TOKENS.line}`,
          background: focused ? TOKENS.white : TOKENS.surface, boxShadow: focused ? TOKENS.focusRing : 'none',
          transition: 'border-color .15s, box-shadow .15s, background .15s',
        }}>
          <label htmlFor="lmc-ask-input" style={{ position: 'absolute', left: -9999 }}>{UI_TEXT.modeAsk}</label>
          <textarea
            id="lmc-ask-input"
            ref={textareaRef}
            {...{ [ASK_INPUT_ATTR]: 'true' }}
            rows={1}
            value={draft}
            maxLength={ASSIST.maxQuestionChars}
            placeholder={hasMessages ? UI_TEXT.askPlaceholderFollowUp : UI_TEXT.askPlaceholder}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={onComposerKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            style={{
              flex: 1, minWidth: 0, border: 0, background: 'transparent', resize: 'none', outline: 'none',
              color: TOKENS.ink, font: 'inherit', fontSize: 16, lineHeight: 1.5, padding: '7px 0',
              maxHeight: MAX_COMPOSER_HEIGHT, overflowY: 'auto',
            }}
          />
          {isStreaming ? (
            <button
              type="button"
              aria-label={UI_TEXT.askStop}
              title={UI_TEXT.askStop}
              onClick={stop}
              style={{
                width: 40, height: 40, borderRadius: 10, border: 0, background: TOKENS.ink, color: TOKENS.white,
                display: 'grid', placeItems: 'center', cursor: 'pointer', flexShrink: 0,
              }}
            >
              <StopIcon size={18} />
            </button>
          ) : (
            <button
              type="button"
              aria-label={UI_TEXT.askSend}
              title={UI_TEXT.askSend}
              disabled={!canSend}
              onClick={() => send()}
              onMouseEnter={(e) => { if (canSend) e.currentTarget.style.background = TOKENS.brandHover; }}
              onMouseLeave={(e) => { if (canSend) e.currentTarget.style.background = TOKENS.brand; }}
              style={{
                width: 40, height: 40, borderRadius: 10, border: 0, background: canSend ? TOKENS.brand : TOKENS.brandLine,
                color: TOKENS.white, display: 'grid', placeItems: 'center', cursor: canSend ? 'pointer' : 'default', flexShrink: 0,
                transition: 'background .15s',
              }}
            >
              <SendIcon size={18} />
            </button>
          )}
        </div>
        <div style={{ maxWidth: 700, margin: '8px auto 0', fontSize: 12, color: TOKENS.dim, textAlign: 'center' }}>
          {UI_TEXT.askDisclaimer}
        </div>
      </div>
    </div>
  );
}
