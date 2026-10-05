'use client';
import React, { useEffect, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { TOKENS, KIND_META, UI_TEXT, ASSIST } from './searchConfig';
import { SparkIcon, SearchIcon, KindIcon, CopyIcon, ThumbUpIcon, ThumbDownIcon } from './searchIcons';
import { renderAnswer } from './assistantMarkdown';
import { textButtonStyle, textButtonHover } from './AssistantHeader';

/**
 * AssistantMessage: one assistant reply in the Ask AI thread.
 *
 *   <AssistantMessage message question isMobile onRetry onSearchInstead onVote onShowAll />
 *
 * By message.status:
 *   waiting / reading   progress row ("Looking for related pages" / "Reading n pages from Learn Math Class")
 *   streaming           rendered answer (assistantMarkdown) and a blinking caret
 *   done / stopped      answer, then notes (Stopped. / cut short / interrupted), the error notice when the
 *                       stream failed after some text, source chips (first ASSIST.visibleSources, "+n more"),
 *                       and the actions row (Copy, thumbs up/down)
 *   error               the notice box instead of an answer, with Try again / Search instead
 *
 * Links in the answer and the source chips are plain <a href>; AssistantView handles clicks on them
 * with one delegated handler. The answer's inner CSS (links, strong, KaTeX) lives in AssistantView's
 * <style> under ANSWER_CLASS, because processContent's elements cannot take inline styles.
 */

const ANIM = 'lmc-search-anim';
export const ANSWER_CLASS = 'lmc-ask-answer';

const ERROR_TEXT = {
  limited: UI_TEXT.askErrorLimited,
  busy: UI_TEXT.askErrorBusy,
  unavailable: UI_TEXT.askErrorUnavailable,
  badRequest: UI_TEXT.askErrorBadRequest,
};

export function errorText(kind) {
  return ERROR_TEXT[kind] || UI_TEXT.askErrorUnavailable;
}

const noteStyle = { fontSize: 14, fontStyle: 'italic', color: TOKENS.muted, margin: '0 0 10px' };

function Progress({ text }) {
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'center', gap: 10, color: TOKENS.muted, fontSize: 14.5, height: 30 }}>
      <span aria-hidden="true" style={{ position: 'relative', width: 90, height: 3, borderRadius: 3, background: TOKENS.brandTint, overflow: 'hidden', flexShrink: 0 }}>
        <span className={ANIM} style={{
          position: 'absolute', top: 0, left: 0, width: '35%', height: 3, borderRadius: 3, background: TOKENS.brand,
          animation: 'lmc-search-scan 1.1s ease-in-out infinite',
        }} />
      </span>
      {text}
    </div>
  );
}

function Notice({ kind, canRetry, canSearch, onRetry, onSearchInstead }) {
  return (
    <div role="alert" style={{
      padding: '14px 16px', borderRadius: 12, border: `1px solid ${TOKENS.line}`, background: TOKENS.surface,
      color: TOKENS.body, fontSize: 15, lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div>{errorText(kind)}</div>
      {(canRetry || canSearch) && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {canRetry && (
            <button type="button" onClick={onRetry} onMouseEnter={(e) => textButtonHover(e, true)} onMouseLeave={(e) => textButtonHover(e, false)} style={textButtonStyle}>
              {UI_TEXT.askRetry}
            </button>
          )}
          {canSearch && (
            <button type="button" onClick={onSearchInstead} onMouseEnter={(e) => textButtonHover(e, true)} onMouseLeave={(e) => textButtonHover(e, false)} style={textButtonStyle}>
              <SearchIcon size={14} />
              {UI_TEXT.askSearchInstead}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function SourceChip({ source, isMobile }) {
  const meta = KIND_META[source.kind] || KIND_META.page;
  const title = String(source.title || '');
  const pageTitle = String(source.pageTitle || '');
  const maxWidth = isMobile ? 210 : 260;
  return (
    <a
      href={source.url}
      aria-label={pageTitle && pageTitle !== title ? `${title} (${meta.label} in ${pageTitle})` : title}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = TOKENS.brandLine; e.currentTarget.style.background = TOKENS.surface; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = TOKENS.line; e.currentTarget.style.background = TOKENS.white; }}
      style={{
        display: 'flex', alignItems: 'center', gap: 9, maxWidth: '100%', minHeight: 44, padding: '6px 12px 6px 6px',
        borderRadius: 12, border: `1px solid ${TOKENS.line}`, background: TOKENS.white, color: TOKENS.ink,
        textDecoration: 'none', cursor: 'pointer', transition: 'border-color .15s, background .15s',
      }}
    >
      <span style={{ width: 30, height: 30, borderRadius: 8, display: 'grid', placeItems: 'center', color: meta.color, background: meta.background, flexShrink: 0 }}>
        <KindIcon kind={source.kind} size={15} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <span style={{ fontSize: 13.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth }}>
          {title.indexOf('$') !== -1 ? processContent(title) : title}
        </span>
        <span style={{ fontSize: 12, color: TOKENS.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth }}>
          {meta.label}{pageTitle && pageTitle !== title ? ` in ${pageTitle}` : ''}
        </span>
      </span>
      {source.onPage && (
        <span style={{ fontSize: 11, fontWeight: 600, color: TOKENS.brand, background: TOKENS.brandTint, padding: '2px 7px', borderRadius: 999, whiteSpace: 'nowrap', flexShrink: 0 }}>
          {UI_TEXT.askThisPage}
        </span>
      )}
    </a>
  );
}

function Sources({ sources, showAll, onShowAll, isMobile }) {
  const shown = showAll ? sources : sources.slice(0, ASSIST.visibleSources);
  const extra = sources.length - shown.length;
  return (
    <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: TOKENS.muted }}>{UI_TEXT.askSourcesLabel}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {shown.map((source, index) => <SourceChip key={`${source.url}-${index}`} source={source} isMobile={isMobile} />)}
        {extra > 0 && (
          <button
            type="button"
            onClick={onShowAll}
            onMouseEnter={(e) => { e.currentTarget.style.color = TOKENS.ink; e.currentTarget.style.borderColor = TOKENS.dim; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = TOKENS.muted; e.currentTarget.style.borderColor = TOKENS.line; }}
            style={{
              border: `1px dashed ${TOKENS.line}`, background: 'transparent', color: TOKENS.muted, borderRadius: 12,
              padding: '0 12px', minHeight: 44, cursor: 'pointer', font: 'inherit', fontSize: 13.5,
            }}
          >
            {UI_TEXT.askMoreSources.replace('{n}', String(extra))}
          </button>
        )}
      </div>
    </div>
  );
}

const actionStyle = {
  display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 10px', borderRadius: 8, border: 0,
  background: 'transparent', color: TOKENS.muted, font: 'inherit', fontSize: 13, cursor: 'pointer',
};

function actionHover(event, on, pressed) {
  if (pressed) return;
  event.currentTarget.style.background = on ? TOKENS.surface2 : 'transparent';
  event.currentTarget.style.color = on ? TOKENS.ink : TOKENS.muted;
}

function Actions({ message, onVote }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const copy = () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(message.content).then(() => {
      setCopied(true);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 1500);
    }).catch(() => {});
  };

  const vote = (value) => onVote(message.vote === value ? null : value);
  const pressedStyle = { ...actionStyle, color: TOKENS.brand, background: TOKENS.brandTint };

  return (
    <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
      <button type="button" onClick={copy} onMouseEnter={(e) => actionHover(e, true)} onMouseLeave={(e) => actionHover(e, false)} style={actionStyle}>
        <CopyIcon size={15} />
        {copied ? UI_TEXT.askCopied : UI_TEXT.askCopy}
      </button>
      <button
        type="button"
        aria-label={UI_TEXT.askHelpful}
        title={UI_TEXT.askHelpful}
        aria-pressed={message.vote === 'up'}
        onClick={() => vote('up')}
        onMouseEnter={(e) => actionHover(e, true, message.vote === 'up')}
        onMouseLeave={(e) => actionHover(e, false, message.vote === 'up')}
        style={message.vote === 'up' ? pressedStyle : actionStyle}
      >
        <ThumbUpIcon size={15} />
      </button>
      <button
        type="button"
        aria-label={UI_TEXT.askNotHelpful}
        title={UI_TEXT.askNotHelpful}
        aria-pressed={message.vote === 'down'}
        onClick={() => vote('down')}
        onMouseEnter={(e) => actionHover(e, true, message.vote === 'down')}
        onMouseLeave={(e) => actionHover(e, false, message.vote === 'down')}
        style={message.vote === 'down' ? pressedStyle : actionStyle}
      >
        <ThumbDownIcon size={15} />
      </button>
    </div>
  );
}

export default function AssistantMessage({ message, question = '', isMobile = false, onRetry, onSearchInstead, onVote, onShowAll }) {
  const { status } = message;
  const sources = Array.isArray(message.sources) ? message.sources : [];
  const retry = () => onRetry(message.id);
  const searchInstead = () => onSearchInstead(question);

  let body;
  if (status === 'waiting') {
    body = <Progress text={UI_TEXT.askLooking} />;
  } else if (status === 'reading') {
    body = <Progress text={sources.length ? UI_TEXT.askReadingPages.replace('{n}', String(sources.length)) : UI_TEXT.askReadingFallback} />;
  } else if (status === 'error') {
    body = (
      <Notice
        kind={message.error}
        canRetry={message.error !== 'badRequest'}
        canSearch={message.error === 'unavailable'}
        onRetry={retry}
        onSearchInstead={searchInstead}
      />
    );
  } else {
    const streaming = status === 'streaming';
    let note = '';
    if (status === 'stopped') note = UI_TEXT.askStopped;
    else if (message.finishReason === 'length') note = UI_TEXT.askCutShort;
    else if (message.note === 'interrupted') note = UI_TEXT.askInterrupted;
    body = (
      <>
        <div className={ANSWER_CLASS} style={{ fontSize: 16, lineHeight: 1.7, color: TOKENS.body }}>
          {renderAnswer(message.content, { streaming })}
          {streaming && (
            <span
              aria-hidden="true"
              className={ANIM}
              style={{
                display: 'inline-block', width: 8, height: 17, background: TOKENS.brand, borderRadius: 2,
                verticalAlign: -3, marginLeft: 2, animation: 'lmc-search-caret 1s steps(1) infinite',
              }}
            />
          )}
        </div>
        {!streaming && note && <div style={noteStyle}>{note}</div>}
        {!streaming && message.error && (
          <div style={{ margin: '4px 0 10px' }}>
            <Notice kind={message.error} canRetry canSearch={message.error === 'unavailable'} onRetry={retry} onSearchInstead={searchInstead} />
          </div>
        )}
        {!streaming && sources.length > 0 && (
          <Sources sources={sources} showAll={message.showAllSources} onShowAll={() => onShowAll(message.id)} isMobile={isMobile} />
        )}
        {!streaming && <Actions message={message} onVote={(value) => onVote(message.id, value)} />}
      </>
    );
  }

  return (
    <div className={ANIM} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', animation: 'lmc-search-rise .22s ease-out both' }}>
      <span aria-hidden="true" style={{
        width: 30, height: 30, borderRadius: 9, background: TOKENS.brand, color: TOKENS.white,
        display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 2,
      }}>
        <SparkIcon size={16} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>{body}</div>
    </div>
  );
}
