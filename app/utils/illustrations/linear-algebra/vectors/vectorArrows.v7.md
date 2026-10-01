# vectorArrows.v7

Package doc for `vectorArrows.v7.js`. Written with the renderer, 2026-09-29, for
the `/linear-algebra/transformations/geometric` page. A seventh file, not an
edit: rule 11 — v1 to v6 had all shipped.

---

## 1. Scope

A 2 × 2 matrix read the way the page teaches: by what it does to the standard
basis, drawn as the unit square and its image.

| kind | Shows |
|---|---|
| `unitSquareMap` | the unit square (dashed), its image parallelogram (filled), and Ae₁, Ae₂ — the matrix's columns — as the image's two sides |

**Out of scope.** Animated or composed maps — the linear transformation and
matrix composition tools freeze those (`linearTransformationDiagrams`,
`matrixCompositionDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults.

| Role | Hex | Used for |
|---|---|---|
| e1 | `#2563EB` | Ae₁ and its label |
| e2 | `#06357A` | Ae₂ and its label |
| image / imageFill | `#B45309` / `#FDF3E3` | the image parallelogram |
| orig | `#5A7299` | the original unit square (dashed) and its label |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | chrome |

## 3. Primitives

Half-unit grid · axes · image parallelogram · dashed unit square · two column
arrows · labels · note lines · caption.

## 4. Critical implementation notes

1. **Ae₁ and Ae₂ are read from `spec.A`'s columns**, and the image is built from
   them, so the picture is always the true image of the square.
2. Image first (filled), original second (dashed, no fill): both outlines stay
   visible where they overlap, as in the rotation.
3. Labels are hand-placed in grid units; for a rotation, put Ae₂'s label clear
   of the image's upper edge.

## 5. Style tokens

`wVector 2.6`, `wImage 1.8`, `wOrig 1.6`, `wGrid 1`, `wAxis 1.4`, `unit 110`,
`head 11`, `gridStep 0.5`. Fonts `fsLabel 13`, `fsNote 11`, `fsCaption 13`.

## 6. Coordinate model

Grid units over `xRange × yRange` (default x −0.5…2.5, y −0.5…2), one unit =
110px, origin inside the box, y up.

## 7. Layout rules

- Keep A's columns and their sum inside the box.
- Notes run to about 55 characters at the default width.

## 8. Topic-specific specification language

`A: [[a, b], [c, d]]` — columns (a, c) = Ae₁ and (b, d) = Ae₂.
`labels: [[text, x, y, role, anchor]]` with role `e1`, `e2`, `orig` or `image`.

## 9. Spec schema

```js
{
  kind: 'unitSquareMap',
  svgTitle: String, style: {}, width, height: Number,
  A: [[Number, Number], [Number, Number]],
  xRange, yRange: [Number, Number],
  labels: [[String, Number, Number, String, String]],
  notes: [String], caption: String,
}
```

## 10. Spec examples

Shipped specs: `vaSquareMaps.scaling`, `.rotation`, `.shear` in
`pages/linear-algebra/transformations/geometric/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `squareScaling` | geometric obj2 | unitSquareMap | mapping | concept |
| `squareRotation` | geometric obj3 | unitSquareMap | mapping | concept |
| `squareShear` | geometric obj8 | unitSquareMap | mapping | concept |

## 12. Renderer requirements

Default export `renderVectorArrowsV7(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Column labels match `A`'s columns.
- [ ] Any area stated in a note equals |det A|.
- [ ] Page-theme colours.
- [ ] No label on an arrow or across the image's edge.
- [ ] The figure carries its claim with the frame panel covered up.
