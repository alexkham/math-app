# vectorArrows

Package doc for `vectorArrows.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/vectors` page. Linear algebra's first authored component.

---

## 1. Scope

Vectors in the plane drawn as arrows on a coordinate grid, where the claim is
about the arrows themselves: their components, where they sit, which ones are
the same vector.

| kind | Shows |
|---|---|
| `copies` | one vector drawn from several tails with its component legs marked, beside a wrong arrow that is not the vector |

**Out of scope.** Anything a 2D visualizer already freezes — a matrix acting on
the plane, eigenlines, kernel and image, projection, reflection, span. Harvest
those from `app/components/linear-algebra copy/r2-visualizers/*Diagrams.js`.

## 2. Palette

The **linear-algebra census, plane family**, recorded in `$meta.palette.plane`
of the subject's figure registry: the same roles every 2D visualizer on the
site uses, so an authored arrow and a frozen tool state read alike.

| Role | Hex | Used for |
|---|---|---|
| vector | `#EA580C` | the vector and every copy of it |
| negation | `#DC2626` | the wrong arrow (also dashed) |
| muted | `#64748B` | component legs and their numbers, the origin mark |
| grid / axis | `#E2E8F0` / `#94A3B8` | grid lines, the two axes |
| text | `#0F172A` | note and caption |

`image #0891B2`, `subspace #059669`, `shape #6366F1` are carried in `C` for
the scene types that will need them.

## 3. Primitives

Grid · axes with origin O · arrow (shaft, head, tail dot) · component legs
(dashed run then rise, each numbered) · vector label · wrong-arrow label ·
note line · caption line.

## 4. Critical implementation notes

1. **Every copy carries its legs.** "Same components" must be read off the
   figure; without the legs the reader has to trust that three arrows are
   parallel and equal in length.
2. **The wrong arrow is red and dashed**, and its label says what it shares
   with v and what it does not. Colour alone would let it pass as a copy.
3. The shaft stops 8px short of the tip so the arrowhead stays sharp at
   stroke width 2.6.
4. Arrows are drawn after the legs and the wrong arrow, so a copy is never
   hidden under a dashed line.

## 5. Style tokens

`wVector 2.6`, `wWrong 2.2`, `wLeg 1.2`, `wGrid 1`, `wAxis 1.4`, `unit 42`,
`head 11`, `rTail 3`. Fonts `fsLabel 13`, `fsLeg 12`, `fsNote 11`,
`fsCaption 13`, `fsOrigin 12`.

## 6. Coordinate model

Grid units, origin at the lower-left corner of the grid at pixel
`(40, 40 + ny·unit)`, y up. `px(x) = 40 + x·unit`, `py(y) = Y0 − y·unit`.
Labels are placed in grid units too.

## 7. Layout rules

- `nx 10`, `ny 6` at unit 42 gives a 490px figure; keep every arrow inside it.
- Place labels by hand (`labels`, `wrong.labelAt`): above-left of each arrow's
  midpoint, clear of the legs.

## 8. Topic-specific specification language

`vector: [a, b]` is the vector; `tails: [[x, y], ..]` the points it is drawn
from; `wrong: { tail, vector, labelAt, label: [lines] }` the arrow that is not
it.

## 9. Spec schema

```js
{
  kind: 'copies',
  svgTitle: String, style: {}, width, height: Number,
  nx, ny: Number,
  vector: [Number, Number],
  tails: [[Number, Number]],
  labels: [[String, Number, Number]],
  wrong: { tail: [x, y], vector: [a, b], labelAt: [x, y], label: [String] },
  note: String, caption: String,
}
```

## 10. Spec examples

Shipped spec: `vaFreeVector` in `pages/linear-algebra/vectors/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `freeVector` | vectors obj3 | copies | contrast | concept |

## 12. Renderer requirements

Default export `renderVectorArrows(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every copy's legs read the vector's components.
- [ ] The wrong arrow is red, dashed, and labelled with what differs.
- [ ] Plane-family colours: the vector is `#EA580C`.
- [ ] No label sits on an arrow or a leg.
- [ ] The figure carries its claim with the frame panel covered up.
