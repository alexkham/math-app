# AskAiRow

The two entry points to Ask AI inside Search mode.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `'results' \| 'start'` | `'results'` | see below |
| `query` | string | `''` | shown under "Ask AI" in the results variant |
| `isMac` | boolean | `false` | kbd reads "⌘ Enter" instead of "Ctrl Enter" |
| `onClick` | fn | | the palette calls `setMode('assistant', query, source)` |

## Variants

- `results`: pinned as the first element of the results list whenever the query has at least `MIN_QUERY_LENGTH` characters (also in fallback mode and when the active tab is empty). Brand badge with a white spark, "Ask AI" and the query (one line, ellipsis), a kbd hint on the right. Gradient `TOKENS.askRowFrom` → `TOKENS.brandTint`, border `TOKENS.brandLine` (brand on hover). Not part of the arrow-key selection.
- `start`: a group on the start screen under "Try asking": label "Want an explanation instead of links?" and one card (max 520px) with title "Ask AI", subtitle "Get a step-by-step answer built from Learn Math Class pages" and an arrow. Opens the Ask AI welcome screen with no question.

## Helpers

`useIsMac()` detects macOS once on mount (`navigator.userAgentData.platform`, then `navigator.platform`); `askShortcutLabel(isMac)` returns the kbd text. The footer uses the same helpers for its "Ctrl Enter ask AI" hint.
