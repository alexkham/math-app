# AssistantMessage

One assistant reply in the Ask AI thread: 30 × 30 brand avatar on the left, content on the right. Rendered by `AssistantView`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `message` | object | an assistant entry from `useAssistant().messages` |
| `question` | string | the user message before it (for "Search instead") |
| `isMobile` | boolean | chip text max width 210px instead of 260px |
| `onRetry(id)` | fn | Try again |
| `onSearchInstead(question)` | fn | Search instead |
| `onVote(id, value)` | fn | thumbs |
| `onShowAll(id)` | fn | "+n more" |

## By status

| `status` | Rendered |
|---|---|
| `waiting` | 90 × 3 progress track with a moving brand segment (`lmc-search-scan`) and "Looking for related pages" |
| `reading` | same, "Reading {n} pages from Learn Math Class" ("Reading Learn Math Class pages" when there are none) |
| `streaming` | the answer through `assistantMarkdown.renderAnswer(text, { streaming: true })` and a blinking caret (static under reduced motion) |
| `done` / `stopped` | the answer, then an italic note when there is one ("Stopped." / "The answer was cut short…" / "The answer was interrupted."), then the error notice when the stream failed after some text, then sources, then actions |
| `error` | the notice box instead of an answer |

## Sources

Label "From Learn Math Class", then chips (first `ASSIST.visibleSources` = 3, a dashed "+n more" button reveals the rest). A chip is an `<a href>` with the kind icon (colours from `KIND_META`), the title (through `processContent` when it contains `$`), "{Kind} in {pageTitle}" (page title omitted when equal to the title) and a "This page" tag when `onPage` is true. Clicks are handled by `AssistantView`.

## Actions

Copy (raw answer text, Markdown and TeX as received; label becomes "Copied" for 1.5 s; silent on failure) and thumbs up / down (`aria-pressed`, selecting one clears the other).

## Error notices

| `error` | Text | Buttons |
|---|---|---|
| `limited` | You asked a lot of questions in a short time. Wait a minute, then ask again. | Try again |
| `busy` | Many people are asking right now. Try again in a minute. | Try again |
| `unavailable` | Ask AI is not available right now. Search still works. | Try again, Search instead |
| `badRequest` | That message could not be sent. Try shortening it. | none |

Strings live in `UI_TEXT` (`searchConfig.js`).
