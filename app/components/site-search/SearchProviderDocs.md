# SearchProvider

React context that owns the open state of the site search palette and which mode it shows.

## What it does

- Holds `isOpen`, `mode` (`'search'` | `'assistant'`), `initialQuery`, `openCount` (bumps on every open, and on every switch to Search, so the palette resets itself) and `pendingQuestion` (a question Ask AI mode sends as soon as it mounts).
- `openSearch(query)` opens in Search mode; `openAssistant(question, source)` opens in Ask AI mode; `setMode(mode, carry, source)` switches while open: `carry` goes into the search input or becomes the pending question. `source` only feeds the GA4 `assistant_open` event (`pill`, `switch`, `ask_row`, `start_card`, `search_instead`).
- `Ctrl+K` / `⌘+K` toggles the palette. Ignored while typing in another input, textarea, select or contenteditable; the palette's own input is exempt (it carries the `data-lmc-search-input` attribute exported as `SEARCH_INPUT_ATTR`).
- Locks body scroll while open and restores the previous `overflow` on close.
- Remembers `document.activeElement` at open time and focuses it again on close.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | node | | the app tree |

## Hook

```js
const {
  isOpen, mode, initialQuery, openCount, pendingQuestion,
  openSearch, openAssistant, setMode, consumePendingQuestion, closeSearch,
} = useSiteSearch();
openSearch();                           // open in Search mode, empty
openSearch('derivative of sine');       // open, prefilled and searched
openAssistant();                        // open in Ask AI mode (welcome screen)
openAssistant('why is sin²x + cos²x = 1?'); // open in Ask AI mode and send the question
setMode('assistant', 'covariance', 'ask_row'); // switch while open and send the text
setMode('search', 'covariance');        // back to Search, prefilled
closeSearch();
```

`Ctrl+K` / `⌘+K` always opens in Search mode. The conversation itself lives in `AssistantProvider`.

Outside a provider the hook returns inert values, so components stay safe to render on their own.

## Usage

```jsx
// pages/_app.js
import { SearchProvider } from '@/app/components/site-search/SearchProvider';
import SearchPalette from '@/app/components/site-search/SearchPalette';

<SearchProvider>
  <MyNavbar3 />
  <Component {...pageProps} />
  <SearchPalette />
</SearchProvider>
```
