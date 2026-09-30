# Site search UI

The visible part of the semantic site search. One shared palette, opened from three entry points and `Ctrl+K` / `⌘+K`.

| File | Role |
|---|---|
| `SearchProvider.jsx` | context: `isOpen`, `openSearch()`, `closeSearch()`, `useSiteSearch()`; global shortcut, scroll lock, focus return |
| `SearchPalette.jsx` | the dialog, mounted once in `pages/_app.js` |
| `NavSearchTrigger.jsx` | navbar entry point (field at 1024px and up, icon button below) |
| `FloatingAskButton.jsx` | fixed "Ask Learn Math" pill above `ScrollUpButton` |
| `HeroSearch.jsx` | large opt-in field for landing and hub pages |
| `searchConfig.js` | data only: colour tokens, kind metadata, tabs, example questions, popular links, UI strings, request settings |
| `searchIcons.jsx` | inline stroke SVG icons (`currentColor`), one per kind plus spark, search, close, arrow |

Each component has its own `<Name>Docs.md` next to it.

## Wiring

`pages/_app.js` wraps the tree in `<SearchProvider>` and renders `<SearchPalette />` and `<FloatingAskButton />` once, after `<ScrollUpButton/>`.
`MyNavbar3` renders `<NavSearchTrigger />` in its search slot and, below 768px, `<NavSearchTrigger variant="icon" />` in the bar itself.

## API

`GET /api/search?q=<text>&limit=20` (see `pages/api/search.js`). One request per query; the tabs filter the 20 results by `kind` on the client. `source` is `semantic`, `fallback` (service unreachable, page titles only, tabs hidden) or `none` (query under 2 characters). Status 429 shows a quiet "Too many searches" note.

## Conventions

- JavaScript and JSX, inline styles, no new dependencies, fonts inherited from the site.
- Each component renders one small `<style>` element holding its keyframes (prefixed `lmc-search-`), the `prefers-reduced-motion` rule, and, where a breakpoint must not shift layout on load, one media rule keyed to `@/app/lib/breakpoints`.
- Titles and snippets from the API may contain `$…$` TeX and go through `processContent`. Titles without TeX get query words highlighted; titles with TeX are rendered untouched.
- `topic` arrives lowercase and hyphenated (`linear-algebra`) and is capitalised for display. `pageTitle` is omitted from the breadcrumb when it equals `title`.

## Local testing

Without the search service, `/api/search` answers in fallback mode. For real results open the tunnel described in the handoff, then `npm run dev`. Place `<HeroSearch />` on a scratch page under `pages/test*` to try the hero field; do not commit it.
