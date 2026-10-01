# curveFeature.v3

Package doc for `curveFeature.v3.js`. Written with the renderer, 2026-09-27,
for the `/trigonometry/functions` page.

**Why a third file.** Rule 11 forbids editing a shipped renderer to gain a
scene type, and by the time a grid layout was needed both earlier files were
integrated on live pages. Owner decision 2026-09-27: keep chaining.

| File | Layouts | Shipped on |
|---|---|---|
| `curveFeature.js` | single, pair | graphs |
| `curveFeature.v2.js` | reflect, lineTest, fold, ranges | inverse-functions |
| `curveFeature.v3.js` | grid | functions |

---

## 1. Scope

One layout: several functions in small panels, in labelled rows, so the rows
themselves carry the claim. Built for "these behave the same way and those do
not".

## 2. Palette

The trigonometry census. Curve `#4F46E5`; excluded-point lines `#DC2626` dashed
`4 3` at `0.8`; panel `#F8FAFC` with an `#E2E8F0` border; row labels take their
own colour — red for a failure pattern, green for none.

## 3. Primitives

Panel with rounded border · horizontal axis · dashed excluded-point line ·
branch-split curve · panel title · row label · figure note.

## 4. Critical implementation notes

1. **Excluded points are computed, not tabulated.** `deadPoints` derives them
   from the function and the x-range, so a panel over a different range still
   marks the right places.
2. **The dash pattern must not vary between panels.** That two rows share a
   pattern *is* the claim; making one panel prettier destroys it.
3. Curves split at every excluded point and again wherever they leave the
   y-range, one path per piece. A single path across a pole draws a vertical
   line through the panel.
4. Panels are deliberately small with no axis ticks. This layout compares
   shapes; ticks make six panels noisy and answer a question the figure is not
   asking.

## 5. Style tokens

`wCurve 1.9` — thinner than a full-size curve at `2.2`, because six small panels
at full weight read as heavy. `wAxis 1`, `wDead 1.2`, `wPanel 1`. Fonts
`fsPanel 12`, `fsGroup 11`, `fsNote 12`. Bold `600`.

## 6. Coordinate model

Each panel owns a box at an absolute offset with internal padding (L/R 6, T 20,
B 16) and maps `xRange` / `yRange` into it. Rows stack by `gapY`, columns by
`gapX`.

## 7. Layout rules

- All panels share one `xRange` and one `yRange`, or the comparison is
  meaningless.
- Row labels sit 7px above their row, left-aligned to the first column.
- The default `[-π, 3π/2]` shows three poles for the broken functions and a
  full period for the whole ones — the minimum that makes the repeat visible.

## 8. Topic-specific specification language

A row is `{ label, panels: ['tan','sec'], color }`. Panel names are function
names; the renderer supplies the function, its excluded points and its title.

## 9. Spec schema

```js
{
  kind: 'grid',
  svgTitle: String, style: {},
  rows: [{ label: String, panels: [String], color: String }],
  panelWidth, panelHeight, gapX, gapY, padT, padB: Number,
  xRange, yRange: [Number, Number],
  samples: Number,
  note: String,
}
```

## 10. Spec examples

```js
{ kind: 'grid',
  rows: [
    { label: 'undefined where cos = 0', panels: ['tan', 'sec'], color: 'negation' },
    { label: 'undefined where sin = 0', panels: ['cot', 'csc'], color: 'negation' },
    { label: 'defined everywhere',      panels: ['sin', 'cos'], color: 'secondary' },
  ],
  note: 'only two patterns of excluded point across all six' }
```

The shipped spec is `cfDomainRange` in `pages/trigonometry/functions/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Job |
|---|---|---|
| `domainRange` | functions obj8 | mapping |

## 12. Renderer requirements

Default export `renderCurveFeatureV3(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] All panels share one x-range and one y-range.
- [ ] Excluded-point lines are identical across every panel that has them.
- [ ] No curve crosses a pole in one path.
- [ ] Row labels clear the panels above them.
- [ ] The figure carries its claim with the frame panel covered up.
