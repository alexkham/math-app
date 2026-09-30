# SearchProvider

React context that owns the open state of the site search palette.

## What it does

- Holds `isOpen`, `initialQuery` and `openCount` (bumps on every open so the palette resets itself).
- `Ctrl+K` / `⌘+K` toggles the palette. Ignored while typing in another input, textarea, select or contenteditable; the palette's own input is exempt (it carries the `data-lmc-search-input` attribute exported as `SEARCH_INPUT_ATTR`).
- Locks body scroll while open and restores the previous `overflow` on close.
- Remembers `document.activeElement` at open time and focuses it again on close.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | node | | the app tree |

## Hook

```js
const { isOpen, initialQuery, openCount, openSearch, closeSearch } = useSiteSearch();
openSearch();                  // open, empty
openSearch('derivative of sine'); // open, prefilled and searched
closeSearch();
```

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
