# NavSearchTrigger

The search entry point in the navbar. Opens the shared palette.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `'auto' \| 'field' \| 'icon'` | `'auto'` | see below |
| `label` | string | `"Search by meaning"` | field text and icon `aria-label` |
| `hint` | string | `"Ctrl K"` | keyboard hint in the field |
| `width` | number | `240` | field width in px |

## Variants

- `auto`: renders both the 240 × 40 translucent field and the 42 × 42 icon button and switches between them with a CSS media rule at the site's `lg` breakpoint (1024px). The switch is CSS rather than `useMediaQuery` so server and first client paint agree and the navbar does not shift on load.
- `field`: always the field.
- `icon`: always the icon button. `MyNavbar3` uses this in the blue bar below 768px, where the search slot is not rendered inside the hamburger menu.

## Usage

```jsx
// default in MyNavbar3
<MyNavbar3 searchComponent={<NavSearchTrigger />} />

// mobile bar
<NavSearchTrigger variant="icon" />
```
