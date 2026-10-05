# AssistantProvider

React context that owns the Ask AI conversation. Mounted inside `SearchProvider` in `pages/_app.js` and `app/layout.js`, above the palette, so the conversation survives closing the dialog, switching to Search mode and client-side navigation. Memory only: a full page reload clears it (no `localStorage`, no `sessionStorage`).

## Hook

```js
const {
  messages, isStreaming, usePage, restoredQuestion,
  setUsePage, ask, stop, reset, retry, setVote, showAllSources, takeRestoredQuestion,
} = useAssistant();
```

| Member | Notes |
|---|---|
| `messages` | `[{ id, role: 'user', content }, { id, role: 'assistant', content, sources, status, finishReason, error, note, vote, showAllSources }]` |
| `isStreaming` | an answer is in flight |
| `usePage` | send the current page with questions; default `true`, `reset()` sets it back |
| `ask(question, pagePath)` | blank questions and calls during streaming are ignored; `pagePath ''` means no page context |
| `stop()` | aborts the fetch. Text received so far stays with status `stopped`; if nothing had arrived, the question and the empty reply are removed and the question is offered back through `restoredQuestion` / `takeRestoredQuestion()` |
| `reset()` | New chat: abort, clear, `usePage = true` |
| `retry(id, pagePath)` | removes the failed pair and asks the same question again |
| `setVote(id, 'up' \| 'down' \| null)` | thumbs; sends the GA4 `assistant_feedback` event (no backend call in v1) |
| `showAllSources(id)` | reveals the chips hidden behind "+n more" |

Outside a provider the hook returns inert values.

## Assistant message status

`waiting` (request sent, no sources yet) → `reading` (sources received, no text) → `streaming` → `done` | `stopped` | `error`.

- `error` (`limited` | `busy` | `unavailable` | `badRequest`) is set with status `error` when the request failed before any text, or with status `done` when the stream failed after some text (the notice renders under the partial answer).
- `note: 'interrupted'` when the stream ended without `done` or `error`.
- `finishReason: 'length'` when the answer hit the length cap.

## History sent with a question (`buildHistory`)

Oldest first; only pairs whose reply is `done` or `stopped` with non-empty text; failed pairs are skipped; the new question last; at most `ASSIST.maxHistoryMessages` (12) messages, trimmed from the start and never starting with an assistant message. The proxy and the service apply their own caps on top.

## Streaming

Deltas arrive 30 to 60 times a second. They are accumulated in a ref and flushed to state at most every `ASSIST.flushMs` (50 ms), so the thread re-renders about 20 times a second instead of once per token. Only Stop, New chat and unmount of the provider abort a stream; closing the dialog does not.

## Analytics

Through `trackAssistant` (`assistantClient.js`), only when `window.gtag` exists: `assistant_question` (`turn`, `with_page`), `assistant_feedback` (`value`, `page`, `question` cut to 100 characters), `assistant_error` (`type`). `assistant_open` is sent by `SearchProvider`. Answer text is never sent.

## Usage

```jsx
<SearchProvider>
  <AssistantProvider>
    …
    <SearchPalette />
    <FloatingAskButton mode="assistant" />
  </AssistantProvider>
</SearchProvider>
```
