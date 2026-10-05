# AssistantView

The body of the palette in Ask AI mode: welcome screen, thread, composer, disclaimer. Rendered by `SearchPalette` when `mode === 'assistant'`. Reads the conversation from `useAssistant()` and the pending question from `useSiteSearch()`.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `pagePath` | string | `''` | from `pageContext.currentPagePath`; sent with questions while `usePage` is true |
| `isMobile` | boolean | `false` | tighter paddings, one-column suggestions, 92% user bubbles |
| `fullPageNavigation` | boolean | `false` | passed to `navigateToUrl` (App Router mount) |
| `actionsRef` | ref | | the palette's key handler reads `{ composer(), send(), clearComposer(), focusComposer() }` from it |
| `onSearchInstead` | `(question) => void` | | "Search instead" in an error notice |

## Layout

- Thread: scroll container, padding 26px 28px 10px (20px 14px on mobile), inner column max 700px, gap 22px.
- Welcome (no messages): heading, one-line explanation, 2-column grid of suggestions (1 column on mobile). With page context: the three `ASK_SUGGESTIONS_PAGE` entries and the first `ASK_SUGGESTIONS_GENERAL` entry; without: the first four general ones. A click sends the text.
- User message: right-aligned bubble, plain text, `pre-wrap`.
- Assistant message: `AssistantMessage`.
- Composer: sticky bottom, 700px box, `textarea` that grows to 140px, 16px font (no iOS zoom), `maxLength` 1000. Send button 40 × 40 (disabled while blank); while streaming it is the Stop button. Disclaimer under it.

## Behaviour

| Event | Effect |
|---|---|
| mount | composer focused after 20 ms; a `pendingQuestion` from SearchProvider (Ask AI row, Ctrl/⌘ Enter, `openAssistant(question)`) is sent at once, or put in the composer if an answer is already streaming |
| `Enter` | sends (handled by the palette's document-level listener, which calls `actionsRef.current.send()`); `Shift+Enter` inserts a line; nothing is sent while streaming or during IME composition |
| `Esc` | clears the draft; never closes (same as Search mode) |
| Stop before any text | the question comes back into the composer |
| new message | thread scrolls to the bottom |
| streaming | the thread follows the answer only while the visitor is within 60px of the bottom |
| click on a site-relative link (answer text or source chip) | one delegated handler on the thread: `navigateToUrl` (same-tab, closes the dialog, anchor on the current page scrolls instead); Ctrl/Cmd/Shift/middle clicks are left to the browser; absolute URLs keep `processContent`'s new-tab behaviour |
| answer finished / failed | a visually hidden `aria-live="polite"` region announces "Answer ready" or the error text; the thread carries `aria-busy` while streaming |

## Styles

Inline, except one `<style>` element with the caret keyframe, the `prefers-reduced-motion` rule and the rules for elements that `processContent` renders inside an answer (`.lmc-ask-answer a`, `strong`, `.katex-display`), which cannot take inline styles.
