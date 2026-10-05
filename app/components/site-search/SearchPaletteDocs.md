# SearchPalette

The one dialog, with two modes. Mounted once per router, in `pages/_app.js` and in `app/layout.js` (home page); reads its state from `SearchProvider` (`mode`) and `AssistantProvider` (the conversation, for the New chat button and the page chip). Uses `useRouter`/`usePathname` from `next/navigation` so it works under both routers.

## Modes (2026-10-05)

- **Search**: everything below. Plus the Ask AI entry points: `AskAiRow` pinned on top of the results (query of 2+ characters, not part of the arrow selection), the Ask AI card on the start screen, `Ctrl/⌘+Enter` in the input (sends the query to Ask AI) and the footer hint.
- **Ask AI**: the header shows `ModeSwitch`, `PageChip` and, once there is a conversation, `NewChatButton`; the body is `AssistantView`; no tabs, no footer. Opened by the floating pill, the Ask AI row, the start card or the switch.

The file keeps the Search mode JSX as it was; the mode branch is six insertions: `ModeSwitch` in place of the spark tile, the header middle (`PageChip` or the input), the body (`AssistantView` or the search views), tabs and footer only in Search mode, `AskAiRow` in the results list and on the start screen, and `open()` delegating to `navigate.js`.

Props: `fullPageNavigation` (boolean, default false). `app/layout.js` passes `true`: results then open with a full page load, because the App Router cannot client-navigate into Pages Router routes (it only loops `?_rsc` fetches). Under `pages/_app.js` leave it off and results open client-side.

## Layout

- Overlay: fixed, dimmed and blurred backdrop, `z-index 100100` (navbar 10000, mobile menu and `ScrollUpButton` 100000). Backdrop click closes.
- Panel: white, 16px radius, max 920 × 640, 84px from the top. Below 768px it fills the screen, drops the preview pane and footer, and shows a close button.
- Header: `ModeSwitch`, then in Search mode the input, `Esc` hint and clear button (both shown only while there is a query), close button, thin scan line while a request is in flight. Below 768px the header wraps into two rows: `ModeSwitch`, spacer and buttons on row one; the input (or the Ask AI page chip) on row two.
- Tabs: All / Tools / Definitions / Sections / Pages with counts from the single 20-result response. Hidden while the query is empty and in fallback mode.
- Results list on the left, preview pane on the right (badge, title, breadcrumb, snippet, action button).

## Behaviour

| Event | Effect |
|---|---|
| typing | debounced ~250 ms, `GET /api/search?q=…&limit=20`, stale requests aborted, out-of-order responses ignored |
| empty query | "Try asking" cards (fill the input) and "Popular right now" chips (navigate) from `searchConfig.js` |
| `↑` / `↓` | move the selection, scrolled into view, list not re-rendered |
| `Enter` | open the selected result |
| `Tab` / `Shift+Tab` | cycle the category tabs while a query is active (focus returns to the input); on the start screen Tab moves focus inside the dialog and never leaves it |
| `Esc` | clears the query; never closes (the X button, the backdrop and `Ctrl+K` close). In Ask AI mode it clears the composer draft |
| `Ctrl/⌘+Enter` | with a query of 2+ characters: switches to Ask AI mode and sends the query |
| hover | selects the row; click opens it |
| result URL with `#hash` on the current page | scrolls to the anchor and updates the address instead of `router.push` |
| `source: "fallback"` | page-title results, no tabs, no snippet, a one-line note above the list |
| status 429 | "Too many searches, wait a moment." No retry loop |
| network failure | "Search is not available right now." |

## Keyboard handling

All shortcuts are handled by one `keydown` listener on `document`, registered in the capture phase while the dialog is open, not by handlers on the input or the panel. Consequences:

- They work wherever focus is: in the input, on a button or link inside the panel, or on the page body after a click on a non-focusable spot (preview text, list background, footer).
- Keys the dialog owns (`Esc` clears, `↑`, `↓`, `Tab`, `Enter` on a result) are consumed with `stopImmediatePropagation`, so page components with their own document listeners (navbar `Esc`, explorer arrow keys, visualizer digit keys) never react under the open dialog. Every other key is stopped too, so typing never reaches the page behind. `Ctrl`/`Cmd`/`Alt` combinations pass through untouched (the provider's `Ctrl+K`, copy, paste, browser shortcuts).
- `Enter` on a focused button or link inside the panel is left to that control.
- Left / Right arrows inside `ModeSwitch` are left to it (it moves between the two tabs itself).
- In Ask AI mode the composer owns the keys: only `Esc` (clears the draft), `Tab` (focus trap) and `Enter` inside the composer (send; `Shift+Enter` inserts a line, nothing is sent during IME composition) are handled, through the actions `AssistantView` registers in `actionsRef` (`composer()`, `send()`, `clearComposer()`, `focusComposer()`). Other keys are stopped from reaching the page as in Search mode.
- A printable key pressed while focus is outside the input moves focus to the input first; a `focusin` outside the panel is sent back to the input, so a page script cannot steal focus from the open dialog.
- `mousedown` on a non-interactive spot inside the panel is prevented, so clicking the preview pane does not move focus to the body (text in the preview is therefore not drag-selectable).

## Rendering rules

- `title` and `snippet` may contain `$…$` TeX and are rendered with `processContent` from `@/app/utils/contentProcessor`.
- Query words are highlighted only in titles without TeX (marking inside TeX would break it).
- `topic` is capitalised for display (`linear-algebra` → `Linear Algebra`). `pageTitle` is dropped from the breadcrumb when it equals `title`.
- Results open through `navigateToUrl` (`navigate.js`), shared with the links in Ask AI answers and source chips.

## Usage

```jsx
// pages/_app.js, inside <SearchProvider>
<SearchPalette />
```
