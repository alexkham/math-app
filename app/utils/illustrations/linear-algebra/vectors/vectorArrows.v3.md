# vectorArrows.v3

Package doc for `vectorArrows.v3.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/vectors/magnitude` page. A third file, not an edit: rule
11 — `vectorArrows.js` and `vectorArrows.v2.js` had both shipped.

---

## 1. Scope

Vectors drawn from the centre of an axis cross, against the unit circle.

| kind | Shows |
|---|---|
| `units` | several vectors from the origin with the unit circle dashed behind them; a vector marked `wrong` is drawn red and dashed |

**Out of scope.** Grid-corner scenes with one vector in several places or two
vectors combined — `vectorArrows.js` and `.v2.js`.

## 2. Palette

The **page theme** (owner decision 2026-09-28, `$meta.palette.$pageTheme` in
the linear-algebra figure registry). This is the first renderer whose defaults
*are* the page theme; v1 and v2 get it through `spec.style`.

| Role | Hex | Used for |
|---|---|---|
| vector | `#2563EB` | every vector (site link blue) |
| shape | `#5A7299` | the unit circle and its label (brand slate-blue) |
| negation | `#C0392B` | a `wrong` vector |
| text | `#1E3A5F` | note and caption (demo frame title colour) |
| muted / grid / axis | `#64748B` / `#E2E8F0` / `#94A3B8` | ticks, grid, axes |

## 3. Primitives

Grid every half unit · axes through the centre · ±1 ticks · unit circle
(dashed, faint fill) · vector from the origin · vector label · circle label ·
note · caption.

## 4. Critical implementation notes

1. **The renderer does not normalise.** A vector is drawn exactly where `at`
   puts it, so a deliberately non-unit vector can be shown off the circle
   (mark it `wrong`).
2. The circle is drawn before the vectors, so arrowheads sit on top of its
   dashed line where they touch it.
3. Ticks mark ±1 only: the claim is about radius 1, and more numbers compete
   with the vector labels.

## 5. Style tokens

`wVector 2.6`, `wShape 1.6`, `wGrid 1`, `wAxis 1.4`, `radius 120`, `reach 1.5`,
`head 11`, `shapeOpacity 0.05`. Fonts `fsLabel 13`, `fsShape 12`, `fsTick 11`,
`fsNote 11`, `fsCaption 13`.

## 6. Coordinate model

Centred: one unit = `radius` px, origin at `(30 + reach·R, 20 + reach·R)`, y up.
Vector labels are offset in pixels from the tip (`dx`, `dy`); the circle label
is placed in units.

## 7. Layout rules

- Keep labels outside the circle, beyond each tip.
- Five vectors is the comfortable maximum at radius 120.

## 8. Topic-specific specification language

`vectors: [{ at: [x, y], label, dx, dy, anchor, wrong }]`;
`shapeLabel: { text, at: [x, y] }`.

## 9. Spec schema

```js
{
  kind: 'units',
  svgTitle: String, style: {}, width, height: Number, reach: Number,
  vectors: [{ at: [Number, Number], label: String, dx, dy: Number,
              anchor: 'start' | 'middle' | 'end', wrong: Boolean }],
  shapeLabel: { text: String, at: [Number, Number] },
  note: String, caption: String,
}
```

## 10. Spec examples

Shipped spec: `vaUnitCircle` in `pages/linear-algebra/vectors/magnitude/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `unitCircle` | magnitude obj5 | units | structure | concept |

## 12. Renderer requirements

Default export `renderVectorArrowsV3(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every vector not marked `wrong` has length 1 (tip on the circle).
- [ ] Any sum of squares quoted in a label or note is exact.
- [ ] Page-theme colours.
- [ ] No label inside the circle or on an arrow.
- [ ] The figure carries its claim with the frame panel covered up.
