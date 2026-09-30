# binomialCurve

Package doc for `binomialCurve.js`. Written with the renderer, 2026-09-29, for
the `/combinatorics/binomial-coefficient` page (Definition section).

---

## 1. Scope

The binomial coefficient C(x, k) drawn as a function of its upper index x.

| kind | Shows |
|---|---|
| `polynomial` | the curve y = x(x−1)…(x−k+1)/k! over a real range; the whole-number points (the counts C(n, k)) marked on it; a few other x values marked as points of the same polynomial |

**Out of scope.** Rows and entries of Pascal's triangle — the Pascal triangle
tool freezes those (`pascalTriangleDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the combinatorics figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| curve | `#2563EB` | the curve and its label |
| count / countFill | `#B45309` / `#FDF3E3` | whole-number points and their labels |
| ext | `#06357A` | other-x points and their labels |
| text / muted | `#1E3A5F` / `#64748B` | legend and caption / tick labels |
| grid / axis | `#E2E8F0` / `#94A3B8` | grid lines / axes |

## 3. Primitives

Grid · axes with tick labels · curve (polyline, 200 samples) · count dot with
label · diamond for another x with label · curve label · two-line legend ·
optional caption.

## 4. Critical implementation notes

1. Every value is computed from `binom(x, k)`; count labels are the computed
   values, so a label cannot disagree with the dot under it.
2. Samples outside `yRange` are dropped from the polyline, so the curve stops
   at the top edge rather than running over the labels.
3. Zero counts (n < k) sit on the axis unlabelled; the legend covers them.

## 5. Style tokens

`wCurve 2.2`, `wAxis 1.4`, `wDot 2`, `rDot 6`, `sExt 10`. Fonts `fsTick 11`,
`fsLabel 12`, `fsExt 11`, `fsTitle 13`, `fsLegend 11`.

## 6. Coordinate model

Data coordinates mapped linearly into the box x 60 → width−40, y 320 → 40.
Grid at every whole x and every `yStep` in y.

## 7. Layout rules

- Count labels sit right of their dot; `labelDy[n]` raises one where the curve
  would cross it (n = 2 in the shipped scene).
- Other-x labels go right of the diamond for negative x, left otherwise.
- k = 2 over [−1.5, 4.5] × [−1, 8] is the shipped scene; larger k needs a taller
  `yRange`.

## 8. Topic-specific specification language

`k` (lower index), `xRange`, `yRange`, `yStep`, `curveLabel {text, x, y}`,
`labelDy {n: px}`, `extra [{x, label}]`, `countNote`, `extNote`.

## 9. Spec schema

```js
{
  kind: 'polynomial',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  k: Number, xRange: [Number, Number], yRange: [Number, Number], yStep: Number,
  curveLabel: { text: String, x: Number, y: Number },
  labelDy: { [n]: Number },
  extra: [{ x: Number, label: String }],
  countNote: String, extNote: String,
}
```

## 10. Spec examples

Shipped spec: `bcGeneral` in `pages/combinatorics/binomial-coefficient/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `generalizedC2` | binomial-coefficient obj1 | polynomial | boundary | deferred: generalized binomial coefficient |

## 12. Renderer requirements

Default export `renderBinomialCurve(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each count label equals C(n, k) for its n.
- [ ] Each diamond sits on the curve.
- [ ] No label crosses the curve.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
