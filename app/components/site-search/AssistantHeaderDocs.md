# AssistantHeader

What the palette header shows in Ask AI mode instead of the search input. Exported as pieces because the mobile header puts them on different rows.

## Exports

| Export | Renders |
|---|---|
| `PageChip({ pageTitle, usePage, setUsePage })` | with `usePage` true: a 32px pill "Using this page: {title}" (`PageIcon`, brand tint, ellipsis on overflow, `title` "Answers use this page first") with a 12px close button labelled "Don't use this page"; with `usePage` false: a "Use this page" text button; nothing when there is no page title |
| `NewChatButton({ onClick, iconOnly })` | "New chat" text button with `PlusIcon`; `iconOnly` makes it a 36 × 36 button (mobile row one) |
| `AssistantHeader({ pageTitle, usePage, setUsePage, hasMessages, onNewChat })` | both pieces in a row (desktop) |
| `textButtonStyle`, `textButtonHover` | the text-button style shared with the error notices in `AssistantMessage` |

## Page title

`SearchPalette` computes it with `pageContext.currentPageTitle(pathname)`: `document.title` without the site suffix (split on ` | ` and ` - Learn`), else the last path segment humanised, else the path. Read again on every open and route change.

## Usage

```jsx
<PageChip pageTitle={pageTitle} usePage={assistant.usePage} setUsePage={assistant.setUsePage} />
{hasConversation && <NewChatButton onClick={newChat} iconOnly={isMobile} />}
```
