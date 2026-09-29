# vectorArrows.v6

Package doc for `vectorArrows.v6.js`. Written with the renderer, 2026-09-29, for
the `/linear-algebra/linear-systems/homogeneous` page. A sixth file, not an
edit: rule 11 — v1 to v5 had all shipped.

---

## 1. Scope

The solution set of a consistent 2-unknown system drawn next to the null space
of its matrix.

| kind | Shows |
|---|---|
| `solutionSet` | the null-space line n·x = 0 (dashed) and the solution line n·x = c (solid), one particular solution xₚ, one null-space vector xₕ, and xₚ + xₕ landing back on the solution line |

**Out of scope.** Row-reduced forms of the same system — the solution sets
tool freezes those (`linearSystemDiagrams`, harvested on the same page).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults.

| Role | Hex | Used for |
|---|---|---|
| particular | `#2563EB` | xₚ and its tip dot |
| homogeneous | `#06357A` | xₕ from O and again from xₚ's tip (dashed) |
| solution | `#B45309` | the solution line, xₚ + xₕ, its label |
| nullspace | `#5A7299` | the null-space line (dashed) and its label |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | chrome |

## 3. Primitives

Grid · axes with O · clipped line (solid or dashed) · vector arrow · moved
vector (dashed) · tip dot · label · note lines · caption.

## 4. Critical implementation notes

1. **The renderer checks the maths.** It throws if xₚ is not on n·x = c or xₕ
   is not on n·x = 0, so a spec cannot draw a false picture.
2. Lines are clipped to the grid box on all four sides; the prototype's first
   draft let the null line run into the notes.
3. xₕ is drawn twice — from O and from xₚ's tip — so "add a null-space vector"
   is a visible move, not just a sum in a label.
4. Labels are hand-placed in grid units (`labels.key = [text, x, y, anchor,
   dyPixels]`); keep each off both lines.

## 5. Style tokens

`wVector 2.6`, `wMoved 2`, `wSolution 2.6`, `wNull 2`, `wGrid 1`, `wAxis 1.4`,
`unit 40`, `head 11`, `rDot 4`. Fonts `fsLabel 13`, `fsLine 12`, `fsNote 11`,
`fsCaption 13`, `fsOrigin 12`.

## 6. Coordinate model

Grid units over `xRange × yRange` (default x −4…6, y −2…4), origin inside the
box, y up; one unit = 40px.

## 7. Layout rules

- Pick integer xₚ and xₕ inside the box, and keep xₚ + xₕ inside it too.
- The normal must have a nonzero second component (lines are solved for y).

## 8. Topic-specific specification language

`normal: [n1, n2]` and `c` give the equation n1·x + n2·y = c; `xp`, `xh` the
two vectors.

## 9. Spec schema

```js
{
  kind: 'solutionSet',
  svgTitle: String, style: {}, width, height: Number,
  normal: [Number, Number], c: Number, xp: [Number, Number], xh: [Number, Number],
  xRange, yRange: [Number, Number],
  labels: { xp, xh, x, solutionLine, nullLine: [String, Number, Number, String, Number] },
  notes: [String], caption: String,
}
```

## 10. Spec examples

Shipped spec: `vaSolutionSet` in `pages/linear-algebra/linear-systems/homogeneous/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `solutionSet` | homogeneous obj7 | solutionSet | structure | concept |

## 12. Renderer requirements

Default export `renderVectorArrowsV6(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The renderer's two consistency checks pass.
- [ ] Both lines stay inside the grid.
- [ ] Any equation quoted in a note matches `normal` and `c`.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
