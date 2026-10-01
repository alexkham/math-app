# vectorArrows.v5

Package doc for `vectorArrows.v5.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/vectors/cross-product` page. A fifth file, not an edit:
rule 11 — v1 to v4 had all shipped.

---

## 1. Scope

The cross product of two vectors drawn in their own plane: its length as the
area they span, its direction as out of or into the page.

| kind | Shows |
|---|---|
| `area` | the parallelogram on a and b with a along the x-axis, the height ‖b‖ sin θ dashed, and the area computed from the components |
| `orientation` | two panels with the same a and b; a curl arc in each order and the resulting ⊙ (out of the page) or ⊗ (into it) |

**Out of scope.** True 3D scenes (the parallelepiped of the scalar triple
product). They need a projection this file does not have.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults.

| Role | Hex | Used for |
|---|---|---|
| a | `#2563EB` | first factor |
| b | `#06357A` | second factor |
| angle | `#B45309` | parallelogram tint, θ arc, curl arcs and their text |
| third | `#5A7299` | the height, the ⊙ / ⊗ symbol and its label |
| text | `#1E3A5F` | notes and caption |
| muted / grid / axis / divider | `#64748B` / `#E2E8F0` / `#94A3B8` / `#CBD5E1` | chrome |

## 3. Primitives

Grid · axes · vector arrow · parallelogram · dashed height with right-angle
mark · θ arc · area label · curl arc with arrowhead · ⊙ / ⊗ symbol · panel
divider · notes · caption.

## 4. Critical implementation notes

1. **The area is computed**, `|a₁b₂ − a₂b₁|`, never typed — the length of the 3D
   cross product with zero third components.
2. `area` assumes a is horizontal (`a[1] = 0` in the shipped scene) so the height
   is a vertical drop; with a tilted a the dashed line would not be the height.
3. `orientation` decides ⊙ versus ⊗ from the turning direction of the curl, not
   from the panel's text: counter-clockwise from first factor to second is out
   of the page in right-handed axes.
4. The curl's arrowhead sits at the second factor's end of the arc, pointing
   along the direction of travel.

## 5. Style tokens

`wVector 2.6`, `wHeight 2`, `wArc 1.8`, `wCurl 2`, `wGrid 1`, `wAxis 1.4`,
`wSymbol 2`, `unit 44`, `head 11`, `arcR 30`, `areaFill 0.12`, `curlR 54`,
`symbolR 11`, `panelW 270`, `panelUnit 40`. Fonts `fsLabel 13`, `fsTheta 15`,
`fsArea 15`, `fsHeight 12`, `fsName 14`, `fsSmall 11`, `fsCurl 12`, `fsNote 11`,
`fsCaption 13`, `fsOrigin 12`.

## 6. Coordinate model

`area`: grid units, origin at the grid's lower-left corner, as v2.
`orientation`: pixels; panel i has its origin at `(270i + 70, 180)`, one unit = 40px.

## 7. Layout rules

- `area`: keep a + b inside `nx × ny`; place the area label inside the
  parallelogram, away from the height.
- `orientation`: two panels; keep ‖a‖, ‖b‖ ≤ 3.6 units.

## 8. Topic-specific specification language

`area`: `labels: { a: [text, x, y, anchor], b: [...], height: [text, x, y], area: [x, y] }`.
`orientation`: `panels: [{ first: 'a' | 'b', name, where, curl }]` (defaults to a × b then b × a).

## 9. Spec schema

```js
{
  kind: 'area' | 'orientation',
  svgTitle: String, style: {}, width, height: Number,
  a: [Number, Number], b: [Number, Number],
  nx, ny: Number, labels: {}, panels: [{}],
  notes: [String], caption: String,
}
```

## 10. Spec examples

Shipped specs: `vaCrossArea`, `vaCrossOrientation` in
`pages/linear-algebra/vectors/cross-product/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `crossArea` | cross-product obj3 | area | quantity | concept |
| `crossOrientation` | cross-product obj4 | orientation | contrast | concept |

## 12. Renderer requirements

Default export `renderVectorArrowsV5(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The printed area equals |a₁b₂ − a₂b₁|, and any note agrees.
- [ ] a × b is ⊙ and b × a is ⊗ for a counter-clockwise a → b.
- [ ] The height meets a's line at a right angle.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
