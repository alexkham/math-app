# matrixGrid.v3

Package doc for `matrixGrid.v3.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/matrix/trace` page. A third file, not an edit: rule 11 —
`matrixGrid.js` and `matrixGrid.v2.js` had both shipped.

---

## 1. Scope

Two matrices, both of their products, and a quantity read off each product.

| kind | Shows |
|---|---|
| `products` | A (m × n) and B (n × m) on top; AB (m × m) and BA (n × n) below with their diagonals ringed and their traces summed |

**Out of scope.** The mechanics of multiplying — the matrix multiplication
tools freeze those.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults.

| Role | Hex | Used for |
|---|---|---|
| a | `#2563EB` | A's brackets and name |
| b | `#06357A` | B's brackets and name |
| diag / diagFill | `#B45309` / `#FDF3E3` | diagonal rings and the trace lines |
| text / divider | `#1E3A5F` / `#CBD5E1` | entries, product brackets, caption / the rule between rows |

## 3. Primitives

Bracket pair · entry · diagonal ring · matrix name with size · divider ·
trace line · caption.

## 4. Critical implementation notes

1. **AB, BA and both traces are computed** from `spec.A` and `spec.B`; only the
   inputs are typed.
2. The renderer refuses shapes where one of the products would not exist.
3. Diagonal entries are the only amber cells, so the eye goes straight to what
   is being summed.

## 5. Style tokens

`wBracket 1.8`, `wDiag 1.8`, `wDivider 1`, `cellW 38`, `cellH 34`, `rDiag 14`.
Fonts `fsEntry 14`, `fsName 14`, `fsTrace 14`, `fsCaption 13`.

## 6. Coordinate model

Pixels. A at `(60, 50)`, B at `(250, 50)`; AB at `(90, y)`, BA at `(330, y)` with
y below the divider.

## 7. Layout rules

- Keep m, n ≤ 3 at the default width; entries up to two digits.

## 8. Topic-specific specification language

`A: [[..]]` (m × n), `B: [[..]]` (n × m).

## 9. Spec schema

```js
{
  kind: 'products',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  A: [[Number]], B: [[Number]],
}
```

## 10. Spec examples

Shipped spec: `mgCyclicTrace` in `pages/linear-algebra/matrix/trace/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `cyclicTrace` | trace obj4 | products | contrast | concept |

## 12. Renderer requirements

Default export `renderMatrixGridV3(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The two traces printed are equal (they must be, for any valid A, B).
- [ ] Product sizes shown are m × m and n × n.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
