'use client';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { streamAssist, AssistError, trackAssistant } from './assistantClient';
import { ASSIST } from './searchConfig';

/**
 * AssistantProvider: the Ask AI conversation. Lives above the palette (pages/_app.js and
 * app/layout.js, inside SearchProvider), so the conversation survives closing the dialog and
 * client-side navigation. Memory only: a full page reload clears it.
 *
 *   messages            [{ id, role: 'user', content },
 *                        { id, role: 'assistant', content, sources, status, finishReason, error, note, vote, showAllSources }]
 *   isStreaming         an answer is in flight
 *   usePage             send the current page with questions (default true; reset() sets it back)
 *   setUsePage(bool)
 *   ask(question, pagePath)       ignored while streaming or when blank; pagePath '' = no page context
 *   stop()                        abort; keeps the text so far ('stopped'); with no text yet the pair is
 *                                 removed and the question comes back through takeRestoredQuestion()
 *   reset()                       New chat: stop, clear, usePage = true
 *   retry(id, pagePath)           remove the failed pair and ask the same question again
 *   setVote(id, 'up' | 'down' | null)
 *   showAllSources(id)
 *   restoredQuestion / takeRestoredQuestion()   see stop()
 *
 * Assistant `status`: waiting (no sources yet) → reading (sources, no text) → streaming → done | stopped | error.
 * `error` (limited | busy | unavailable | badRequest) is set with status 'error', or with status 'done'
 * when the stream failed after some text arrived. `note` is 'interrupted' when the stream ended without
 * done/error. Deltas are buffered and flushed to state at most every ASSIST.flushMs.
 */

const AssistantContext = createContext(null);

const NOOP_CONTEXT = {
  messages: [],
  isStreaming: false,
  usePage: true,
  restoredQuestion: '',
  setUsePage: () => {},
  ask: () => {},
  stop: () => {},
  reset: () => {},
  retry: () => {},
  setVote: () => {},
  showAllSources: () => {},
  takeRestoredQuestion: () => '',
};

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `lmc-ask-${Date.now().toString(36)}-${idCounter}`;
}

const IN_FLIGHT = { waiting: true, reading: true, streaming: true };

/** History sent with a new question: completed pairs only, oldest first, capped, never starting with a reply. */
export function buildHistory(messages, question, limit = ASSIST.maxHistoryMessages) {
  const history = [];
  for (let i = 0; i < messages.length; i += 1) {
    const message = messages[i];
    if (message.role !== 'user') continue;
    const reply = messages[i + 1];
    if (!reply || reply.role !== 'assistant') continue;
    const finished = reply.status === 'done' || reply.status === 'stopped';
    if (finished && reply.content && reply.content.trim()) {
      history.push({ role: 'user', content: message.content }, { role: 'assistant', content: reply.content });
    }
  }
  history.push({ role: 'user', content: question });
  let kept = history.slice(-limit);
  if (kept.length && kept[0].role === 'assistant') kept = kept.slice(1);
  return kept;
}

export function AssistantProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [usePage, setUsePage] = useState(true);
  const [restoredQuestion, setRestoredQuestion] = useState('');

  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const abortRef = useRef(null);
  const bufferRef = useRef('');
  const totalRef = useRef('');
  const flushTimerRef = useRef(null);
  const turnRef = useRef(0);

  const patchMessage = useCallback((id, patch) => {
    setMessages((list) => list.map((message) => (
      message.id === id ? { ...message, ...(typeof patch === 'function' ? patch(message) : patch) } : message
    )));
  }, []);

  const flush = useCallback((id) => {
    window.clearTimeout(flushTimerRef.current);
    flushTimerRef.current = null;
    const text = bufferRef.current;
    if (!text) return;
    bufferRef.current = '';
    patchMessage(id, (message) => ({ content: message.content + text, status: 'streaming' }));
  }, [patchMessage]);

  const run = useCallback(async (question, pagePath, history) => {
    const userId = nextId();
    const replyId = nextId();
    setMessages((list) => [
      ...list,
      { id: userId, role: 'user', content: question },
      {
        id: replyId, role: 'assistant', content: '', sources: [], status: 'waiting',
        finishReason: '', error: '', note: '', vote: null, showAllSources: false,
      },
    ]);
    setIsStreaming(true);
    const controller = new AbortController();
    abortRef.current = controller;
    bufferRef.current = '';
    totalRef.current = '';
    turnRef.current += 1;
    trackAssistant('assistant_question', { turn: turnRef.current, with_page: !!pagePath });

    let errorKind = '';
    try {
      const result = await streamAssist({
        page: pagePath || '',
        messages: history,
        signal: controller.signal,
        onSources: (sources) => patchMessage(replyId, { sources, status: 'reading' }),
        onDelta: (piece) => {
          bufferRef.current += piece;
          totalRef.current += piece;
          if (!flushTimerRef.current) flushTimerRef.current = window.setTimeout(() => flush(replyId), ASSIST.flushMs);
        },
      });
      flush(replyId);
      const hasText = !!totalRef.current.trim();
      if (result.outcome === 'done') {
        patchMessage(replyId, { status: 'done', finishReason: result.finishReason || 'stop' });
      } else if (result.outcome === 'error') {
        errorKind = 'unavailable';
        patchMessage(replyId, hasText ? { status: 'done', error: 'unavailable' } : { status: 'error', error: 'unavailable' });
      } else {
        patchMessage(replyId, hasText ? { status: 'done', note: 'interrupted' } : { status: 'error', error: 'unavailable' });
        if (!hasText) errorKind = 'unavailable';
      }
    } catch (error) {
      flush(replyId);
      if (!(error && error.name === 'AbortError')) {
        errorKind = error instanceof AssistError ? error.kind : 'unavailable';
        patchMessage(replyId, { status: 'error', error: errorKind });
      }
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
        setIsStreaming(false);
      }
    }
    if (errorKind) trackAssistant('assistant_error', { type: errorKind });
  }, [flush, patchMessage]);

  const ask = useCallback((question, pagePath = '') => {
    const text = String(question || '').replace(/\s+/g, ' ').trim();
    if (!text || abortRef.current) return;
    run(text, pagePath, buildHistory(messagesRef.current, text));
  }, [run]);

  const stop = useCallback(() => {
    const controller = abortRef.current;
    if (!controller) return;
    abortRef.current = null;
    controller.abort();
    window.clearTimeout(flushTimerRef.current);
    flushTimerRef.current = null;
    const pending = bufferRef.current;
    bufferRef.current = '';
    const hasText = !!totalRef.current.trim();
    let question = '';
    setMessages((list) => {
      const last = list[list.length - 1];
      if (!last || last.role !== 'assistant' || !IN_FLIGHT[last.status]) return list;
      if (hasText) return [...list.slice(0, -1), { ...last, content: last.content + pending, status: 'stopped' }];
      const asked = list[list.length - 2];
      question = asked && asked.role === 'user' ? asked.content : '';
      return list.slice(0, -2);
    });
    if (!hasText) {
      const asked = messagesRef.current[messagesRef.current.length - 2];
      question = question || (asked && asked.role === 'user' ? asked.content : '');
      setRestoredQuestion(question);
    }
    setIsStreaming(false);
  }, []);

  const reset = useCallback(() => {
    const controller = abortRef.current;
    abortRef.current = null;
    if (controller) controller.abort();
    window.clearTimeout(flushTimerRef.current);
    flushTimerRef.current = null;
    bufferRef.current = '';
    totalRef.current = '';
    turnRef.current = 0;
    setMessages([]);
    setUsePage(true);
    setRestoredQuestion('');
    setIsStreaming(false);
  }, []);

  const retry = useCallback((id, pagePath = '') => {
    if (abortRef.current) return;
    const list = messagesRef.current;
    const index = list.findIndex((message) => message.id === id);
    if (index < 1) return;
    const asked = list[index - 1];
    if (!asked || asked.role !== 'user') return;
    const remaining = [...list.slice(0, index - 1), ...list.slice(index + 1)];
    messagesRef.current = remaining;
    setMessages(remaining);
    run(asked.content, pagePath, buildHistory(remaining, asked.content));
  }, [run]);

  const setVote = useCallback((id, vote) => {
    const list = messagesRef.current;
    const index = list.findIndex((message) => message.id === id);
    if (index === -1) return;
    patchMessage(id, { vote });
    if (vote === 'up' || vote === 'down') {
      const asked = list[index - 1];
      trackAssistant('assistant_feedback', {
        value: vote,
        page: typeof window !== 'undefined' ? window.location.pathname : '',
        question: asked && asked.role === 'user' ? asked.content.slice(0, 100) : '',
      });
    }
  }, [patchMessage]);

  const showAllSources = useCallback((id) => patchMessage(id, { showAllSources: true }), [patchMessage]);

  const takeRestoredQuestion = useCallback(() => {
    const text = restoredQuestion;
    if (text) setRestoredQuestion('');
    return text;
  }, [restoredQuestion]);

  // Unmount of the provider is the only thing besides Stop and New chat that aborts a stream.
  useEffect(() => () => {
    if (abortRef.current) abortRef.current.abort();
    window.clearTimeout(flushTimerRef.current);
  }, []);

  const value = useMemo(() => ({
    messages, isStreaming, usePage, restoredQuestion,
    setUsePage, ask, stop, reset, retry, setVote, showAllSources, takeRestoredQuestion,
  }), [messages, isStreaming, usePage, restoredQuestion, ask, stop, reset, retry, setVote, showAllSources, takeRestoredQuestion]);

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
}

/** Read the conversation. Outside a provider it returns inert values instead of throwing. */
export function useAssistant() {
  const context = useContext(AssistantContext);
  return context || NOOP_CONTEXT;
}

export default AssistantProvider;
