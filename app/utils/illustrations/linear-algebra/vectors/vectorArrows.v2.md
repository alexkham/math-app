# vectorArrows.v2

Package doc for `vectorArrows.v2.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/vectors/basic-operations` page. A second file, not an edit:
rule 11 — `vectorArrows.js` had shipped on the vectors page.

---

## 1. Scope

Two vectors from a common origin and the arrow their sum or difference draws.

| kind | Shows |
|---|---|
| `sum` | a then b and b then a, both routes around the parallelogram, ending on one diagonal a + b |
| `difference` | a and b from O, and a − b from the tip of b to the tip of a |

**Out of scope.** One vector in several places — `vectorArrows.js` `copies`.
Component-by-component arithmetic — the vector addition and scalar tools
already freeze it (`vectorAdditionDiagrams`, `vectorScalarDiagrams`).

## 2. Palette

The **linear-algebra census, plane family** (`$meta.palette.plane`).

| Role | Hex | Used for |
|---|---|---|
| a | `#EA580C` | the first vector and its moved copy |
| b | `#0891B2` | the second vector and its moved copy |
| result | `#059669` | a + b or a − b, and the parallelogram tint |
| muted / grid / axis | `#64748B` / `#E2E8F0` / `#94A3B8` | origin mark, grid, axes |
| text | `#0F172A` | notes and caption |

Orange / cyan is the i / j and v / Av pair of every 2D visualizer; green is
their subspace colour and the matrix tools' result colour.

## 3. Primitives

Grid · axes with O · vector arrow · moved copy (dashed) · result arrow ·
parallelogram tint · tip dot · label · note lines · caption.

## 4. Critical implementation notes

1. **Moved copies are dashed, never a new colour.** They are the same vectors
   relocated; a new colour would read as a new vector.
2. **The result is drawn first** so the four sides sit on top of the diagonal
   where they meet it at O and at the far corner.
3. `difference` draws no −b arrow: "b followed by a − b lands on a" is carried
   by the arrow's position alone, which is the page's claim.
4. Labels are hand-placed in grid units; the result label of `sum` sits beyond
   the far corner, the only place clear of all five arrows.

## 5. Style tokens

`wVector 2.6`, `wMoved 2.2`, `wResult 2.8`, `wGrid 1`, `wAxis 1.4`, `unit 44`,
`head 11`, `rTip 3.5`, `fillOpacity 0.06`. Fonts `fsLabel 14`, `fsNote 11`,
`fsCaption 13`, `fsOrigin 12`.

## 6. Coordinate model

As `vectorArrows.js`: grid units, origin at the grid's lower-left corner
`(40, 40 + ny·unit)`, y up.

## 7. Layout rules

- `nx 7`, `ny 5` at unit 44: keep a + b (or both tips) inside the grid.
- Notes run to about 55 characters at the default width.

## 8. Topic-specific specification language

`a: [x, y]`, `b: [x, y]`; `labels: [[text, x, y, role, anchor]]` with role one
of `a`, `b`, `result`.

## 9. Spec schema

```js
{
  kind: 'sum' | 'difference',
  svgTitle: String, style: {}, width, height: Number,
  nx, ny: Number,
  a: [Number, Number], b: [Number, Number],
  labels: [[String, Number, Number, 'a' | 'b' | 'result', 'start' | 'middle' | 'end']],
  notes: [String], caption: String,
}
```

## 10. Spec examples

Shipped specs: `vaSumRoutes`, `vaDifferenceTips` in
`pages/linear-algebra/vectors/basic-operations/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `sumRoutes` | basic-operations obj2 | sum | structure | concept |
| `differenceTips` | basic-operations obj3 | difference | process | concept |

## 12. Renderer requirements

Default export `renderVectorArrowsV2(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Both routes of `sum` end on the diagonal's tip.
- [ ] `difference` arrow starts on b's tip and ends on a's.
- [ ] Moved copies dashed, same colour as their vector.
- [ ] Any length or component quoted in a note matches the spec.
- [ ] The figure carries its claim with the frame panel covered up.
