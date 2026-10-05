# ModeSwitch

The Search / Ask AI segmented control at the left of the palette header, in both modes. Replaced the 40 × 40 spark tile on 2026-10-05.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `mode` | `'search' \| 'assistant'` | `'search'` | selected segment |
| `onChange(next)` | fn | | called with the other mode's key |
| `compact` | boolean | `false` | 10px horizontal padding instead of 12px (mobile header) |

## Behaviour

- `role="tablist"` with two `role="tab"` buttons (`SearchIcon` + "Search", `SparkIcon` + "Ask AI"), roving `tabIndex`.
- Left / Right arrow keys move focus and switch. The palette's document-level key handler skips arrow keys inside the element carrying `MODE_SWITCH_ATTR` (`data-lmc-mode-switch`) so this works.
- Selected: white background, brand text, `TOKENS.segmentShadow`. Unselected: transparent, muted, ink on hover.
- Switching does not carry the typed query: only the "Ask AI" row and Ctrl/⌘ Enter do. Switching from Ask AI to Search opens Search empty.

## Usage

```jsx
<ModeSwitch mode={mode} onChange={(next) => setMode(next, '', 'switch')} compact={isMobile} />
```
