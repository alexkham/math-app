# matrixGrid

Package doc for `matrixGrid.js`. Written with the renderer, 2026-09-28, for the
`/linear-algebra/matrix` page. Linear algebra's first authored matrix-array
component.

---

## 1. Scope

A matrix drawn as its grid of entries, with the parts a section names marked
on the grid.

| kind | Shows |
|---|---|
| `anatomy` | an m × n matrix of symbolic entries aᵢⱼ with one row, one column and the main diagonal marked and named |

**Out of scope.** Anything a matrix tool already freezes: operations step by
step, products, transposes, types of square matrices. Harvest those from the
`*Diagrams.js` modules under `app/components/linear-algebra copy/matrix/` and
`app/components/matrices/`.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults. Not the matrix
tools' `frozenMatrixSvg` family (#3B82F6 / #475569 / #22C55E): owner decision
2026-09-28, figures follow the page design.

| Role | Hex | Used for |
|---|---|---|
| row / rowFill | `#2563EB` / `#DBEAFE` | the marked row and its entries |
| col / colFill | `#06357A` / `#E8EEF7` | the marked column and its entries |
| diag / diagFill | `#B45309` / `#FDF3E3` | rings on the diagonal entries, its name |
| text | `#1E3A5F` | other entries, brackets, caption |
| muted | `#64748B` | the size labels |

## 3. Primitives

Row band · column band · bracket pair · entry aᵢⱼ (italic, lowered index) ·
diagonal ring · size labels · side names with a short note each · caption.

## 4. Critical implementation notes

1. **The diagonal runs for min(m, n) entries** and is computed, so a wide or
   tall matrix shows it stopping early — the section's point about
   non-square matrices.
2. Bands are drawn behind the entries and the column band over the row band
   at 85% opacity, so the crossing cell reads as belonging to both.
3. An entry's colour follows diagonal, then row, then column — a diagonal entry
   in the marked row stays amber.
4. Names sit outside the brackets (diagonal and row at the right, column below),
   never on the grid.

## 5. Style tokens

`wBand 1.6`, `wBracket 2`, `wDiag 1.8`, `cellW 58`, `cellH 44`, `rDiag 17`,
`colFillOpacity 0.85`. Fonts `fsEntry 15`, `fsSub 10`, `fsSize 12`, `fsName 13`,
`fsNote 11`, `fsCaption 13`.

## 6. Coordinate model

Pixels. Cell (i, j) has its top-left at `(120 + (j−1)·58, 70 + (i−1)·44)`.

## 7. Layout rules

- Up to 5 × 6 before the figure outgrows 600px; the shipped scene is 3 × 4.
- Index pairs are single digits (the lowered tspan prints `ij` side by side).

## 8. Topic-specific specification language

`m`, `n` the size; `row`, `col` the marked row and column (1-based).

## 9. Spec schema

```js
{
  kind: 'anatomy',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  m, n, row, col: Number,
}
```

## 10. Spec examples

Shipped spec: `mgAnatomy` in `pages/linear-algebra/matrix/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `matrixAnatomy` | matrix obj2 | anatomy | structure | concept |

## 12. Renderer requirements

Default export `renderMatrixGrid(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Diagonal length is min(m, n).
- [ ] The marked row and column cross at a(row, col).
- [ ] No name sits on the grid.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
