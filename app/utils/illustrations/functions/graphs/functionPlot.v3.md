# functionPlot.v3

Package doc for `functionPlot.v3.js`. Written with the renderer, 2026-10-03,
for the `/functions/graphs` page (Graphs of Functions). Chains
`functionPlot.js` and `functionPlot.v2.js` under process v10 rule 11; those
files are not edited.

---

## 1. Scope

| kind | Shows |
|---|---|
| `plane` | the four quadrants with their sign pairs, the origin, and one point plotted as two step arrows (along x, then vertically) |
| `pointsToCurve` | sample points (x, f(x)), labelled, on a faint curve of f |
| `readValues` | f(a) read up to the curve and across to the y-axis (one answer) against the crossings of y = b (every crossing is an answer) |

For graph kinds with features (monotone, extrema, sum, product, quotient,
domain) use `functionPlot.js`; for open-ended number lines use `.v2`.

## 2. Palette

The page-theme defaults, copied into the file: curve `f` `#2563EB` (fill
`#DBEAFE`), quadrant names and output crossings `g` `#06357A`, the plotted or
read point `r` `#B45309` (fill `#FDF3E3`); text `#1E3A5F`, muted `#64748B`,
grid `#E2E8F0`, axis `#94A3B8`.

## 3. Primitives

Integer grid · axes through 0 · tick numbers · sampled curve (pen lifts outside
the y-range) · point dot · step arrow (marker `fp3-step-arrow`) · dashed guide ·
quadrant name and sign pair · labels · caption.

## 4. Critical implementation notes

1. The step-arrow marker id `fp3-step-arrow` is unique to this file; a page
   with two `plane` figures shares one definition harmlessly (same shape).
2. `readValues` takes the solutions of f(x) = b from the spec (`output.xs`);
   the renderer does not solve.
3. When `output.y` is 0 no extra guide line is drawn: the x-axis is the line.

## 5. Style tokens

`wCurve 2.4`, `wGuide 1.6`, `wStep 2.4`, `rPoint 6`, `rOrigin 4`,
`curveFaint 0.45`. Fonts `fsTick 10`, `fsAxis 11`, `fsQuad 13`, `fsSign 12`,
`fsLabel 12`, `fsPoint 13`, `fsFn 13`, `fsCaption 13`.

## 6. Coordinate model

Plot box x 40 → 440 px. y: `plane` 24 → 344, `pointsToCurve` 24 → 314,
`readValues` 24 → 334. One grid line per integer of `xRange` / `yRange`.

## 7. Layout rules

- `plane` puts the quadrant names 1.5 units in from the x-ends and 0.7 / 0.8
  units in from the y-ends; keep the point clear of those corners.
- `pointsToCurve` labels sit right of points with x > 0, left of x < 0, below
  x = 0; keep neighbouring points at least one unit apart.
- Captions up to about 70 characters fit the 480 px width.

## 8. Topic-specific specification language

- `plane`: `xRange, yRange, point {x, y, label}`
- `pointsToCurve`: `xRange, yRange, fn, points [x], fnLabel {text, x, y}`
- `readValues`: `xRange, yRange, fn, input {x, label}, output {y, xs, label}, fnLabel {text, x, y}`
- all: `svgTitle, style, caption`

## 9. Spec schema

See §8. `fn` is a JS function of x.

## 10. Spec examples

Shipped specs: `fpPlaneQuadrants`, `fpPointsSquare`, `fpReadSquareMinus4` in
`pages/functions/graphs/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `planeQuadrants` | graphs obj1 | plane | structure | concept |
| `pointsSquare` | graphs obj2 | pointsToCurve | structure | concept |
| `readSquareMinus4` | graphs obj5 | readValues | contrast | concept |

## 12. Renderer requirements

Default export `renderFunctionPlotV3(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The plotted point lands in the quadrant its signs name.
- [ ] Every sample point lies on the curve.
- [ ] `output.xs` are exactly the solutions of f(x) = `output.y` in range.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
