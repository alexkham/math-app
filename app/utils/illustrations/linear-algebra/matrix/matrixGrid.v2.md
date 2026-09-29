# matrixGrid.v2

Package doc for `matrixGrid.v2.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/matrix/inverse` page. A second file, not an edit: rule 11
— `matrixGrid.js` had shipped on the matrix page.

---

## 1. Scope

A small matrix and the matrix a recipe turns it into, with each entry's fate
carried by its colour.

| kind | Shows |
|---|---|
| `recipe` | A = (a b; c d) → (1 / (ad − bc)) · (d −b; −c a), with the three steps listed in the entries' colours |

**Out of scope.** Row reduction of [A | I] and the adjugate route — the inverse
tool freezes both (`inverseDiagrams`, harvested on the same page).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults.

| Role | Hex | Used for |
|---|---|---|
| diag / diagFill | `#B45309` / `#FDF3E3` | a and d, and step 1 |
| off / offFill | `#2563EB` / `#DBEAFE` | b and c, and step 2 |
| det | `#06357A` | the 1 / (ad − bc) factor and step 3 |
| text / muted | `#1E3A5F` / `#64748B` | brackets, names, caption / the arrow |

## 3. Primitives

Bracket pair · entry chip (tinted rounded cell, italic label) · matrix name ·
fraction bar with numerator and determinant · arrow · numbered step lines ·
caption.

## 4. Critical implementation notes

1. **Colour follows the entry, not the position.** a is amber on the left at
   top-left and amber on the right at bottom-right; the swap is read from the
   colour moving, so no swap arrows are drawn (the prototype's curves were
   removed as clutter).
2. The step lines use the same three colours, in the page's order: swap,
   negate, divide.
3. `entries` / `result` let a numeric example reuse the layout; the defaults
   are the symbolic recipe.

## 5. Style tokens

`wCell 1.4`, `wBracket 2`, `wArrow 1.6`, `wBar 1.6`, `cellW 56`, `cellH 46`,
`cellR 7`. Fonts `fsEntry 17`, `fsName 15`, `fsDet 15`, `fsStep 12`,
`fsCaption 13`.

## 6. Coordinate model

Pixels. A's grid from `(60, 70)`, the result's from `(400, 70)`, cells 56 × 46;
the fraction sits left of the result, the arrow between.

## 7. Layout rules

- 2 × 2 only.
- Entry labels up to three characters (`−12`) fit a chip.

## 8. Topic-specific specification language

`entries: [a, b, c, d]`, `result: [4 labels]`, `det`, `name`, `inverseName`,
`steps: [[text, role]]` with role `diag`, `off` or `det`.

## 9. Spec schema

```js
{
  kind: 'recipe',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  entries: [String], result: [String], det: String, name: String, inverseName: String,
  steps: [[String, 'diag' | 'off' | 'det']],
}
```

## 10. Spec examples

Shipped spec: `mgInverseRecipe` in `pages/linear-algebra/matrix/inverse/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `inverseRecipe` | inverse obj2 | recipe | process | concept |

## 12. Renderer requirements

Default export `renderMatrixGridV2(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The result is the true inverse pattern (d, −b, −c, a) for the entries given.
- [ ] Each entry keeps its colour across the arrow.
- [ ] Steps in the page's order.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
