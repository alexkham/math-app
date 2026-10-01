# circleArc.v2

Package doc for `circleArc.v2.js`. Written with the renderer, 2026-09-27, for
the `/trigonometry/unit-circle` page.

**Why a second file.** Rule 11 forbids editing a shipped renderer to gain a
scene type, and `circleArc.js` was integrated on degrees-radians and
inequalities before these were needed.

| File | Layouts | Shipped on |
|---|---|---|
| `circleArc.js` | arc, sector, cut, compare | degrees-radians, inequalities |
| `circleArc.v2.js` | inscribed, axisPoints | unit-circle |

---

## 1. Scope

The unit circle as a coordinate system: a right triangle inscribed from the
centre, and labelled points on the circle.

## 2. Palette

The inscribed triangle keeps the `triangleDiagrams` side scheme so it reads as
the same triangle the right-triangle page uses: **radius (hypotenuse) red, y
(vertical leg) amber, x (horizontal leg) blue.** Points and failures use the
census: marked points `#DC2626`, text `#1E3A5F`, axes `#94A3B8`, circle
`#CBD5E1`.

## 3. Primitives

Axis pair · circle · inscribed right triangle with right-angle mark · side
labels · point on the circle with a three-line label stack · panel divider ·
figure notes.

## 4. Critical implementation notes

1. **Panels in `inscribed` share the angle and differ only in radius.** The
   triangles are then similar, and the scaling is what the reader sees. The
   first prototype drew both circles the same size and changed only the label
   from `r` to `1` — which made the figure depend on its caption to say
   anything.
2. **Ratios sit on one shared baseline** (`ratioY`) across panels, whatever each
   panel's radius. Positioning them under each circle puts the two sets at
   different heights and breaks the comparison.
3. **Point labels are placed per point.** The side points sit *on* the
   horizontal axis, so their label stacks must go below it; the top point's
   stack goes above. The first prototype had the bottom point's stack running
   into the figure notes.
4. The axis reach is one value for both axes. The approved prototype had the
   horizontal axis 14px longer each side; the renderer draws it at `r + 26`.
   Cosmetic, recorded rather than special-cased.

## 5. Style tokens

`wCircle 1.2`, `wAxis 1`, `wSide 2`, `wRa 1.1`, `wDivider 1`. Fonts
`fsLabel 14`, `fsTitle 12`, `fsRatio 14`, `fsPoint 13`, `fsZero 12`,
`fsDead 11`, `fsNote 12`.

## 6. Coordinate model

Absolute pixels. Each `inscribed` panel names its own `cx`, `cy`, `r`; the angle
is shared from `angleDeg`. `axisPoints` places points by `angleDeg` on one
circle and offsets each label stack by `dx`, `dy`.

## 7. Layout rules

- In `inscribed`, keep the larger radius at least 1.6× the smaller or the
  scaling does not read.
- Give `axisPoints` about 60px below the circle when it carries two note lines.

## 8. Topic-specific specification language

A point is `{ angleDeg, coord, zero, dead, dx, dy, anchor, color }` — `coord`
is the coordinate, `zero` names what vanishes there, `dead` names what that
breaks. All three are optional.

## 9. Spec schema

```js
{
  kind: 'inscribed' | 'axisPoints',
  svgTitle: String, style: {}, width, height: Number,

  // inscribed
  angleDeg, ratioY: Number, dividers: [Number],
  panels: [{ cx, cy, r: Number, radiusLabel, title: String, ratios: [String] }],

  // axisPoints
  cx, cy, r, axisReach: Number,
  points: [{ angleDeg, dx, dy: Number, coord, zero, dead, anchor, color: String }],
  notes: [String],
}
```

## 10. Spec examples

Shipped specs: `caRadiusOne`, `caQuadrantal` in
`pages/trigonometry/unit-circle/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `radiusOne` | unit-circle obj1 | inscribed | contrast |
| `quadrantal` | unit-circle obj3 | axisPoints | boundary |

`quadrantal` was not in the subject plan's §5.2 list: the plan had routed the
section to pass 1 as a harvest gap, and when that premise turned out wrong the
section was read fresh and earned this figure. No tool shows the axes with their
undefined functions.

## 12. Renderer requirements

Default export `renderCircleArcV2(spec)` → SVG string. Pure string building.
Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Inscribed panels share one angle and differ visibly in radius.
- [ ] Ratios sit on one baseline across panels.
- [ ] No point label sits on an axis or runs into a note.
- [ ] Side colours match `triangleDiagrams`.
- [ ] The figure carries its claim with the frame panel covered up.
