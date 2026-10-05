# Site search UI

The visible part of the semantic site search and of the Ask AI assistant. One shared dialog with two modes: **Search** (navbar trigger, hero field, `Ctrl+K` / `⌘+K`) and **Ask AI** (floating pill, the "Ask AI" row in results, `Ctrl/⌘+Enter`, the mode switch in the header).

| File | Role |
|---|---|
| `SearchProvider.jsx` | context: `isOpen`, `mode`, `openSearch()`, `openAssistant()`, `setMode()`, `closeSearch()`, `useSiteSearch()`; global shortcut, scroll lock, focus return |
| `AssistantProvider.jsx` | context for the Ask AI conversation: `messages`, `ask()`, `stop()`, `reset()`, `retry()`, `usePage`; survives closing the dialog and client-side navigation |
| `SearchPalette.jsx` | the dialog shell and the whole Search mode, mounted once per router: `pages/_app.js` and `app/layout.js` |
| `ModeSwitch.jsx` | Search / Ask AI segmented control in the header |
| `AssistantHeader.jsx` | Ask AI header pieces: `PageChip` ("Using this page: …" / "Use this page") and `NewChatButton` |
| `AskAiRow.jsx` | the "Ask AI" row pinned on top of results and the start-screen card; `useIsMac()` for the ⌘ hint |
| `AssistantView.jsx` | Ask AI body: welcome, thread, composer, disclaimer, delegated link handler |
| `AssistantMessage.jsx` | one reply: progress states, answer, notes, source chips, Copy and thumbs, error notices |
| `assistantMarkdown.jsx` | `renderAnswer(text, { streaming })`: block structure (paragraphs, lists, multi-line `$$`) then `processContent` per block |
| `assistantClient.js` | `streamAssist()` (POST `/api/assist`, SSE parsing), `parseFrames()`, `AssistError`, `trackAssistant()` (GA4) |
| `pageContext.js` | `currentPagePath()`, `currentPageTitle()` for the page chip and the request |
| `navigate.js` | `navigateToUrl()`: the one way results, answer links and source chips open a page (anchor scroll, `router.push`, or a full load under the App Router) |
| `NavSearchTrigger.jsx` | navbar entry point (field at 1024px and up, icon button below) |
| `FloatingAskButton.jsx` | fixed "Ask AI" pill above `ScrollUpButton`; `mode="assistant"` opens Ask AI mode |
| `HeroSearch.jsx` | large opt-in field for landing and hub pages |
| `searchConfig.js` | data only: colour tokens, kind metadata, tabs, example questions, popular links, UI strings, request settings, `ASK_SUGGESTIONS_*`, `ASSIST` |
| `searchIcons.jsx` | inline stroke SVG icons (`currentColor`), one per kind plus spark, search, close, arrow, send, stop, plus, copy, thumbs |

Each component has its own `<Name>Docs.md` next to it. `assistantClient.js`, `assistantMarkdown.jsx`, `pageContext.js` and `navigate.js` are documented by their header comments and the sections below.

## Wiring

`pages/_app.js` wraps the tree in `<SearchProvider>` and `<AssistantProvider>` and renders `<SearchPalette />` and `<FloatingAskButton mode="assistant" />` once, after `<ScrollUpButton/>`.
`app/layout.js` does the same for the App Router (the home page `app/page.js` lives there and never passes through `pages/_app.js`). The palette navigates with `next/navigation`, which works under both routers. Under the App Router a link opens with a full page load, so the Ask AI conversation does not survive a click there; everything else works.
`MyNavbar3` renders `<NavSearchTrigger />` in its search slot and, below 768px, `<NavSearchTrigger variant="icon" />` in the bar itself.

## API

`GET /api/search?q=<text>&limit=20` (see `pages/api/search.js`). One request per query; the tabs filter the 20 results by `kind` on the client. `source` is `semantic`, `fallback` (service unreachable, page titles only, tabs hidden) or `none` (query under 2 characters). Status 429 shows a quiet "Too many searches" note.

`POST /api/assist` with `{ page, messages }` (see `pages/api/assist.js`). `page` is the current path or `""` when the visitor removed the page chip; `messages` are the completed turns plus the new question (at most 12). The answer streams as Server-Sent Events: `sources` once, `delta` many times, then `done` or `error`. Errors before streaming are JSON: 429 `rate_limited`, 503 `busy` / `unavailable`, 400 `bad_request`; the UI maps them to the notices in `AssistantMessageDocs.md`.

## Ask AI rendering

Answers are Markdown with TeX. `assistantMarkdown.jsx` builds the block structure (paragraphs split on blank lines, `-` / `*` bullet lists, `1.` numbered lists, headings rendered bold, `$$…$$` lifted onto their own blocks even when spread over several lines) and renders the inline content of each block with `processContent`, inside a small error boundary. While streaming, an unfinished `$$` block shows "Writing a formula…" and a dangling `$` is cut, so raw TeX never flickers. `contentProcessor.js` is not modified.

## Conventions

- JavaScript and JSX, inline styles, no new dependencies, fonts inherited from the site.
- Each component renders one small `<style>` element holding its keyframes (prefixed `lmc-search-`), the `prefers-reduced-motion` rule, and, where a breakpoint must not shift layout on load, one media rule keyed to `@/app/lib/breakpoints`.
- Titles and snippets from the API may contain `$…$` TeX and go through `processContent`. Titles without TeX get query words highlighted; titles with TeX are rendered untouched.
- `topic` arrives lowercase and hyphenated (`linear-algebra`) and is capitalised for display. `pageTitle` is omitted from the breadcrumb when it equals `title`.

## Local testing

Without the search service, `/api/search` answers in fallback mode and `/api/assist` answers `503 unavailable` (useful for the error state). For real results and answers open the tunnel described in the handoff, then `npm run dev`. Place `<HeroSearch />` on a scratch page under `pages/test*` to try the hero field; do not commit it.
