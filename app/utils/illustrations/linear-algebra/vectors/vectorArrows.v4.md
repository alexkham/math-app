# vectorArrows.v4

Package doc for `vectorArrows.v4.js`. Written with the renderer, 2026-09-28, for
the `/linear-algebra/vectors/dot-product` page. A fourth file, not an edit:
rule 11 — v1 to v3 had all shipped.

---

## 1. Scope

The angle between two vectors and what the dot product reports about it.

| kind | Shows |
|---|---|
| `angle` | a and b from O, the angle θ between them, and a − b closing the triangle the law of cosines is applied to |
| `signs` | one panel per case, a fixed and b turned; each panel marks the angle and prints a · b computed from the components |

**Out of scope.** Projection of one vector on another — the projection tool
already freezes it (`projectionDiagrams`, harvested on the same page).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme`), as defaults.

| Role | Hex | Used for |
|---|---|---|
| a | `#2563EB` | the first vector (site link blue) |
| b | `#06357A` | the second vector (brand navy) |
| angle | `#B45309` | the angle wedge, arc, right-angle mark and angle text (site amber) |
| third | `#5A7299` | a − b, dashed (brand slate-blue) |
| text | `#1E3A5F` | values, notes, caption |
| muted / grid / axis / divider | `#64748B` / `#E2E8F0` / `#94A3B8` / `#CBD5E1` | chrome |

## 3. Primitives

Grid · axes · vector arrow · dashed third side · angle wedge with arc ·
right-angle square · θ label · panel axis · panel divider · value line · notes ·
caption.

## 4. Critical implementation notes

1. **`signs` computes a · b and the angle from the components.** Neither is
   typed in the spec, so the printed value can never disagree with the drawing.
2. A zero dot product draws the right-angle square instead of an arc — the
   square is the conventional mark and an arc would read as "some angle".
3. Arcs sweep counter-clockwise from the smaller direction angle with sweep
   flag 0 (y points down), the same convention that fixed circleArc in trig.
4. b's label sits on the side of its tip away from the nearest panel edge, so
   no label crosses a divider.

## 5. Style tokens

`wVector 2.6`, `wThird 2.2`, `wArc 1.8`, `wGrid 1`, `wAxis 1.4`, `wDivider 1`,
`unit 44`, `head 11`, `arcR 46`, `arcFill 0.10`, `panelW 200`, `panelUnit 34`,
`panelArcR 30`. Fonts `fsLabel 13`, `fsTheta 15`, `fsPanel 12`, `fsValue 14`,
`fsNote 11`, `fsCaption 13`, `fsOrigin 12`.

## 6. Coordinate model

`angle`: as v2, grid units with the origin at the grid's lower-left corner.
`signs`: pixels; panel i has its origin at `(200i + 85, 150)`, one unit = 34px.

## 7. Layout rules

- `angle`: notes run to about 55 characters at the default width.
- `signs`: three panels; keep |b| ≤ 2.5 units and |a| ≤ 3 so arrows stay in
  their panel.

## 8. Topic-specific specification language

`angle`: `a`, `b`, `labels: [[text, x, y, role, anchor]]` with role `a`, `b`
or `third`, `notes`, `thetaLabel`, `third: false` to omit a − b.
`signs`: `a`, `cases: [{ b, kind }]`.

## 9. Spec schema

```js
{
  kind: 'angle' | 'signs',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  a: [Number, Number],
  // angle
  nx, ny: Number, b: [Number, Number], labels: [[String, Number, Number, String, String]],
  notes: [String], thetaLabel: String, third: Boolean,
  // signs
  cases: [{ b: [Number, Number], kind: String }],
}
```

## 10. Spec examples

Shipped specs: `vaAngleTriangle`, `vaSignPanels` in
`pages/linear-algebra/vectors/dot-product/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `angleTriangle` | dot-product obj2 | angle | structure | concept |
| `signPanels` | dot-product obj6 | signs | contrast | concept |

## 12. Renderer requirements

Default export `renderVectorArrowsV4(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Any number in a note matches the spec's vectors (check a · b and the angle).
- [ ] Right angle shown by the square, not an arc.
- [ ] No label crosses a panel divider.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
