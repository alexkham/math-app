# circleArc

Package doc for `circleArc.js`. Written with the renderer, 2026-09-26, for the
`/trigonometry/degrees-radians` page; extended for `/trigonometry/inequalities`
the same pass.

---

## 1. Scope

A circle, an angle at its centre, and what that angle measures.

| kind | Shows |
|---|---|
| `arc` | circle, two radii, the arc between them emphasised |
| `sector` | the same with the wedge filled, against the whole disc |
| `cut` | a horizontal line across the circle, the satisfying arc emphasised |
| `compare` | two panels: two circles, or a circle beside a pre-rendered curve |

**Out of scope.** Curves — but `compare` accepts an already-rendered SVG string
as a panel, so a circle can sit beside a `curveFeature` render without this file
ever learning to draw one. That seam is the reason the two components stay
separate.

## 2. Palette

The trigonometry census (process v10 §3.3). Blue is the circle and its radii;
amber is the arc, wedge or answer; red is a cut line or threshold; slate is
chrome. Disc tint `0.11`, wedge fill `0.42`.

## 3. Primitives

Circle, optionally tinted · radius segment · arc of given sweep · sector wedge ·
angle arc with label · length ticks on a radius or an arc · horizontal cut line
with endpoint dots · free notes · nested panel.

## 4. Critical implementation notes

1. **Arc direction is the trap.** Screen y grows downward, so increasing the
   maths angle moves *counterclockwise* on screen, which is SVG sweep-flag `0`.
   `arcPath` always draws from the smaller angle to the larger and hard-codes
   that flag. Getting it backwards draws the arc straight across the disc
   instead of along the rim — it did, on the first render, in all three scenes
   at once.
2. **`compare` must dispatch on each panel's own `kind`**, or a `cut` panel
   renders silently as an `arc` one.
3. **`noteSpace` reserves room under the panels** in `compare`. Without it a
   caption lands on the tick labels of whichever panel is tallest.
4. **The cut label goes below the line on the left.** At the right-hand end it
   runs straight through the first endpoint label.
5. A tinted disc and a wedge at `0.42` over it is the intended reading of
   `sector`: the disc is the whole, the wedge is the share. An extra dashed
   ring outside the disc adds nothing — it was tried and removed.

## 5. Style tokens

`const C` defaults, merged once as `{ ...C, ...(spec.style || {}) }`.
`wCircle 1.2`, `wRadius 2.2`, `wArc 2.6`, `wAngle 1.7`, `wTick 1.4`,
`wRef 1.2`, `wHair 1`; `fillDisc 0.11`, `fillWedge 0.42`; bold `600`.

## 6. Coordinate model

Absolute pixel space with an explicit `cx`, `cy`, `r`. Angles are maths angles
in radians, measured counterclockwise from the positive x-axis, negated on the
y coordinate by `pt()`. `compare` lays panels left to right with `translate`,
embedding a foreign panel as a nested `<svg>` so it keeps its own coordinates.

## 7. Layout rules

- Leave at least `r + 40` below the centre when a caption sits under the circle.
- Endpoint labels sit radially outside at `r + 26`; the arc note sits above at
  `r + 22`.
- In `compare`, give both panels the same height or the shorter one floats.

## 8. Topic-specific specification language

`from` / `to` are the two bounding angles. `at` in a `cut` scene is the **value**
being cut at (a sine value in `[-1, 1]`), not an angle — the renderer derives
the two boundary angles from it with `asin`.

## 9. Spec schema

```js
{
  kind: 'arc' | 'sector' | 'cut' | 'compare',
  svgTitle: String, style: {},
  width, height, cx, cy, r: Number,
  from, to: Number,                       // radians
  tintDisc, tickRadii, tickArc: Boolean,
  angleRadius, angleLabel, angleColor, angleLabelOut,
  radiusLabels: [{ text, angle, at, dx, dy }],
  arcLabel, arcLabelOut, arcLabelAt, arcLabelDx, arcLabelDy, arcLabelSize, arcLabelAnchor,
  arcWidth: Number,
  at: Number, cutLabel, endpointLabels: [String], arcNote,   // cut
  panels: [ /* a spec, or { svg: String, title } */ ], gap, noteSpace,  // compare
  notes: [{ text, x, y, color, size, anchor, bold }],
}
```

## 10. Spec examples

```js
{ kind: 'sector', cx: 168, cy: 150, r: 110, from: 0, to: 1.25,
  angleLabel: 'θ', notes: [{ text: 'the whole disc — 2π', x: 168, y: 290, color: 'primary' }] }
```

Shipped specs are in the two pages' `getStaticProps`: `caOneRadian`,
`caArcLength`, `caSectorArea` on `degrees-radians`, and `caUnitCircleMethod` on
`inequalities`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `oneRadian` | degrees-radians obj2 | arc | quantity |
| `arcLength` | degrees-radians obj4 | arc | quantity |
| `sectorArea` | degrees-radians obj5 | sector | quantity |
| `unitCircleMethod` | inequalities obj3 | compare | contrast |

Earned and not built: `unit-circle` obj1 (two circles, radius r against radius
1) and obj3 (the quadrantal angles). Both fit `compare` and `arc` as they stand.

## 12. Renderer requirements

Default export `renderCircleArc(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every arc lies on its circle, not across it.
- [ ] Endpoint labels clear the cut label.
- [ ] A `compare` caption clears the tallest panel's tick labels.
- [ ] Wedge fill `0.42`, disc tint `0.11`, nothing solid.
- [ ] Nothing inside the SVG repeats a sentence from the frame panel.
- [ ] The figure carries its claim with the frame panel covered up.
