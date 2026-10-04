# functionPlot

Package doc for `functionPlot.js`. Written with the renderer, 2026-10-03, for
the `/functions/analyzing` and `/functions/arithmetic` pages.

---

## 1. Scope

Graphs of functions with one feature picked out.

| kind | Shows |
|---|---|
| `monotone` | a curve coloured falling / rising, the turning point, direction arrows, and the decreasing / increasing intervals drawn as x-intervals under the plot |
| `extrema` | a curve on a closed interval: local peak and valley (hollow) against the absolute max and min at the endpoints (filled) |
| `sum` | f, g and f + g, with f(x0) and g(x0) stacked as bars that end on the f + g curve |
| `product` | f, g and fg, with the zeros of fg marked where a factor is zero |
| `quotient` | the simplified quotient with the hole where the divisor is zero |
| `domain` | number lines for Dom f, Dom g and their intersection |

**Out of scope.** Plain graphs of named function types — the function types
tool freezes those (`functionTypesDiagrams`); vertical line tests —
`lineTest.js`.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the functions figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| f | `#2563EB` | first function; rising part (monotone); interval bars |
| g | `#06357A` | second function; absolute extrema (extrema) |
| r / rFill | `#B45309` / `#FDF3E3` | result curve (f + g, fg, quotient); turning point; local extrema; zeros |
| bad | `#C0392B` | falling part (monotone); excluded point (quotient) |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | captions / axis letters, notes / grid / axes |

## 3. Primitives

Grid and axes · sampled curve (the pen lifts outside the y-range) · hollow and
filled points · direction arrow · stacked bars · dashed marker line · open
circle (hole) · number line with closed ends or arrow ends · labels ·
caption.

## 4. Critical implementation notes

1. Values are computed from the spec's functions: the sum bars, the
   absolute-extrema labels and the hole's height cannot disagree with the
   curves.
2. Curves stop at the frame edge rather than running over labels.
3. The `monotone` arrow markers use ids `${idPrefix}-inc` / `-dec`; give each
   frame on a page its own prefix if two appear.

## 5. Style tokens

`wCurve 2.2`, `wResult 2.6`, `wAxis 1.3`, `wPoint 2.2`, `rPoint 6`. Fonts
`fsAxis 11`, `fsLabel 12`, `fsTitle 13`, `fsNote 11`, `fsCaption 13`.

## 6. Coordinate model

Data coordinates mapped linearly into a fixed plot box per kind (520 px wide;
400–420 px tall for graphs, 70 + 60 per row for `domain`). Grid at every whole
x and every `yStep`.

## 7. Layout rules

- Label positions are given in data coordinates in the spec. Check each for
  collisions with the curves after changing a function.
- `domain`: tags sit above their line; keep a row's long label and its tag
  apart on x.

## 8. Topic-specific specification language

monotone: `f, xRange, yRange, from, to, turn {x, label}, arrowAt [xDec, xInc], wordAt, curveLabel, decText, incText`.
extrema: `f, xRange, yRange, domain [a, b], local [{x, label, below}], title`.
sum: `f, g, x0, xRange, yRange, yStep, fLabel {text, x}, gLabel {text, x}, sumLabel {text, x, y}`.
product: `f, g, xRange, yRange, yStep, zeros [{x, label, left, dy, factor}], fLabel, gLabel, productLabel {text, x, y}`.
quotient: `q, xRange, yRange, yStep, hole {x, label}, note, curveLabel {text, x}`.
domain: `range [lo, hi], rows [{label, from|null, to|null, color 'f'|'g'|'r', tag {text, x}}]`.
All kinds: `svgTitle, style, caption, idPrefix`.

## 9. Spec schema

See §8. Functions are passed as JavaScript arrow functions; the specs live in
the page's `getStaticProps`.

## 10. Spec examples

Shipped specs: `fpMonotone`, `fpExtrema` in `pages/functions/analyzing/index.jsx`;
`fpSum`, `fpProduct`, `fpQuotient`, `fpDomain` in `pages/functions/arithmetic/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `monotone` | analyzing obj3 | monotone | structure | concept |
| `extrema` | analyzing obj5 | extrema | contrast | deferred: local maximum, local minimum |
| `sum` | arithmetic obj2 | sum | process | deferred: sum of functions |
| `product` | arithmetic obj4 | product | structure | deferred: product of functions |
| `quotient` | arithmetic obj5 | quotient | boundary | deferred: quotient of functions |
| `domain` | arithmetic obj7 | domain | structure | deferred: domain of a combined function |

## 12. Renderer requirements

Default export `renderFunctionPlot(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every labelled value equals the value of the function it names.
- [ ] No label crosses a curve.
- [ ] Holes and excluded points sit exactly where the divisor is zero.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
