# FloatingAskButton

The fixed "Ask Learn Math" pill at the bottom right, stacked above `ScrollUpButton` (right 20px, bottom 20px, 50 × 50). Rendered once in `pages/_app.js`.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `mode` | `'search' \| 'assistant'` | `'search'` | `'search'` opens the palette. `'assistant'` is reserved for the future AI assistant and currently behaves like `'search'`; branch on it inside `handleClick` when the assistant exists |
| `label` | string | `"Ask Learn Math"` | visible label and `aria-label` |
| `right` | string | `"20px"` | |
| `bottom` | string | `"84px"` | leaves room for `ScrollUpButton` |
| `zIndex` | number | `99990` | below the navbar's mobile menu (100000), above page content |

## Behaviour

- Brand blue pill, 52px high, white spark in a translucent ring, blue-tinted shadow, darker on hover.
- Below 768px: a 52 × 52 round icon-only button (CSS media rule, no layout shift on load).
- Hidden (`visibility: hidden`) while the palette is open. It stays mounted so focus can return to it on close.

## Usage

```jsx
// pages/_app.js, inside <SearchProvider>, after <ScrollUpButton/>
<FloatingAskButton />
```
