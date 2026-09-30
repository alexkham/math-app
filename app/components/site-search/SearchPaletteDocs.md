# SearchPalette

The one search dialog. Mounted once in `pages/_app.js`; reads its state from `SearchProvider`. No props.

## Layout

- Overlay: fixed, dimmed and blurred backdrop, `z-index 100100` (navbar 10000, mobile menu and `ScrollUpButton` 100000). Backdrop click closes.
- Panel: white, 16px radius, max 920 × 640, 84px from the top. Below 768px it fills the screen, drops the preview pane and footer, and shows a close button.
- Input row: spark tile, input, clear button, `Esc` hint, thin scan line while a request is in flight.
- Tabs: All / Tools / Definitions / Sections / Pages with counts from the single 20-result response. Hidden while the query is empty and in fallback mode.
- Results list on the left, preview pane on the right (badge, title, breadcrumb, snippet, action button).

## Behaviour

| Event | Effect |
|---|---|
| typing | debounced ~250 ms, `GET /api/search?q=…&limit=20`, stale requests aborted, out-of-order responses ignored |
| empty query | "Try asking" cards (fill the input) and "Popular right now" chips (navigate) from `searchConfig.js` |
| `↑` / `↓` | move the selection, scrolled into view, list not re-rendered |
| `Enter` | open the selected result |
| `Tab` / `Shift+Tab` | cycle tabs while focus is in the input; elsewhere Tab moves focus inside the dialog |
| `Esc` | clears the query first, then closes |
| hover | selects the row; click opens it |
| result URL with `#hash` on the current page | scrolls to the anchor and updates the address instead of `router.push` |
| `source: "fallback"` | page-title results, no tabs, no snippet, a one-line note above the list |
| status 429 | "Too many searches, wait a moment." No retry loop |
| network failure | "Search is not available right now." |

## Rendering rules

- `title` and `snippet` may contain `$…$` TeX and are rendered with `processContent` from `@/app/utils/contentProcessor`.
- Query words are highlighted only in titles without TeX (marking inside TeX would break it).
- `topic` is capitalised for display (`linear-algebra` → `Linear Algebra`). `pageTitle` is dropped from the breadcrumb when it equals `title`.

## Usage

```jsx
// pages/_app.js, inside <SearchProvider>
<SearchPalette />
```
