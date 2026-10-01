# curveFeature.v2

Package doc for `curveFeature.v2.js`. Written with the renderer, 2026-09-26, for
the `/trigonometry/inverse-functions` page. Thirteen-section skeleton per
`illustration-system-complete-guide.md` §17.

**Why a second file.** Process v10 rule 11 forbids editing a shipped renderer to
gain a scene type. `curveFeature.js` was integrated on `/trigonometry/graphs`
before these layouts were needed, so they live here. v1 owns the parameter
family (one panel, two panels); v2 owns the inverse-function layouts. Neither
imports the other — coupling a shipped renderer to a new one would defeat the
rule it is obeying.

---

## 1. Scope

Four layouts, all about a function and the inverse it can become:

| kind | Shows |
|---|---|
| `reflect` | a restricted curve, the line `y = x`, and the inverse it becomes |
| `lineTest` | a full curve against its restricted piece, cut by one horizontal line |
| `fold` | an out-of-range input carried across a value and folded back |
| `ranges` | several inverse curves, each with its domain on x and range on y |

**Out of scope.** Parameter contrasts (`curveFeature.js`), circles
(`circleArc`), triangles (`triangleLabel`).

## 2. Palette

The trigonometry census, identical to v1's and to `$meta.palette` in the subject
figure registry. Duplicated in `const C` rather than imported, per the note above.

| Role | Hex | Used for |
|---|---|---|
| primary | `#4F46E5` | the parent function, and its restricted piece |
| result | `#B45309` | the inverse — the answer of every scene here |
| negation | `#DC2626` | the failing case: extra crossings, the folded input |
| muted / mutedLight | `#64748B` / `#94A3B8` | axes, `y = x`, the ghosted full curve |
| hairline | `#CBD5E1` | asymptotes |
| text | `#1E3A5F` | scene titles |

The convention that carries the whole component: **blue is what you start with,
amber is what you get back.** Hold it in every scene.

## 3. Primitives

Axis pair · sampled curve with panel clipping · the line `y = x` · horizontal
cut line · restriction band (tinted region) · ghosted full curve · endpoint dots
· matched-pair connector · carry line · domain bar (on x) and range bar (on y) ·
struck-through wrong answer · direction-placed label.

## 4. Critical implementation notes

1. **A reflection needs a square panel and one range on both axes.** `reflect`
   takes a single `limit` and uses `[-limit, limit]` for x and y. Different
   ranges make a reflection look like a shear and the figure lies.
2. **Clipping, not overflow.** `samplePoly` takes a `clip` in data units and
   emits one path per stretch inside it. Tangent on its principal interval
   reaches about 4.3 and would otherwise draw straight out of a panel scaled to
   2.45. Endpoint dots and the matched-pair connector are also suppressed when
   outside.
3. **`ranges` shares one scale across all panels** (`spec.limit`), or the swap
   it exists to show is not comparable between them. Arccosine reaches π, so the
   shared limit must clear it — 3.4 works.
4. **Labels are placed by direction, never by typed coordinates.** See §7.
5. `fold` needs a deep bottom pad (default 56) because the struck-through wrong
   answer sits below the axis labels. At the v1 default of 36 the strike line
   falls outside the viewBox and silently vanishes.

## 5. Style tokens

`const C` defaults, merged once per render as `{ ...C, ...(spec.style || {}) }`.

| Token | Default | Note |
|---|---|---|
| `wCurve` / `wCurveEmph` | `2.2` / `2.5` | the curve is the only heavy stroke |
| `wGhost` | `2.2` | the full curve, drawn in `mutedLight` — weight matches, colour recedes |
| `wBar` | `3.2` | domain and range bars; a bar is a shape, not a line |
| `wRef`, `wEmph`, `wAxis`, `wHair` | `1.2`, `1.7`, `1`, `1` | |
| `fillBand` | `0.11` | the restriction tint |

## 6. Coordinate model

Each scene owns one box with `padL/padR/padT/padB`. `reflect` and `ranges` map a
symmetric `[-limit, limit]` to both axes; `lineTest` and `fold` take explicit
`xRange` / `yRange`. `ranges` lays its panels left to right, `gap` apart, in one
viewBox.

## 7. Layout rules

**Label placement.** The prototypes for this component were positioned by typing
coordinates and nudging them off each other; three rounds of that on three
scenes is what the `label()` helper exists to prevent. A label names a direction
from its anchor — `n`, `ne`, `e`, `se`, `s`, `sw`, `w`, `nw` — and the offset and
text-anchor follow from that, consistently everywhere.

There is still no collision detection. Two labels aimed at the same point will
overlap; give them different directions.

Curve labels take `fnLabelAt` / `invLabelAt` (a position along the curve) plus
`fnLabelDir` / `invLabelDir`. Pick the direction that points away from the other
curve.

## 8. Topic-specific specification language

`PRINCIPAL` holds the three restriction intervals exactly as the page states
them: sine `[-π/2, π/2]`, cosine `[0, π]`, tangent `(-π/2, π/2)` (inset slightly
so the sampler stops short of the poles). A scene naming `fn` gets its interval,
its range and its inverse's name without repeating them in the spec.

## 9. Spec schema

```js
{
  kind: 'reflect' | 'lineTest' | 'fold' | 'ranges',
  svgTitle: String,
  style: {},

  // reflect
  fn: 'sin'|'cos'|'tan', size: Number, limit: Number, domain: [Number, Number],
  fnLabel, fnLabelAt, fnLabelDir, invLabel, invLabelAt, invLabelDir, note,
  asymptotes: Boolean,            // tangent only

  // lineTest
  width, height, xRange, yRange, domain, cut: Number, cutLabel: String,
  crossings: Number[], kept: Number, xTicks: Number[],
  ghostNote, ghostNoteAt, keptNote,

  // fold
  xRange, yRange, restricted: [Number, Number], input: Number, output: Number,
  carryLabel, inLabel, outLabel, wrongLabel, bandLabel, title,

  // ranges
  panelWidth, panelHeight, gap, limit,
  panels: [{ fn, title, domain, range, domainLabel, rangeLabel }],
}
```

## 10. Spec examples

```js
{ kind: 'reflect', fn: 'cos', size: 310, limit: 3.45,
  fnLabel: 'cos', fnLabelAt: 2.75, fnLabelDir: 'se',
  invLabel: 'arccos', invLabelAt: 2.6, invLabelDir: 'ne',
  note: 'restricted to [0, π], then exchanged' }
```

The six shipped specs are in `pages/trigonometry/inverse-functions/index.jsx`
inside `getStaticProps`, named `cfWhyRestrict`, `cfArcsine`, `cfArccosine`,
`cfArctangent`, `cfCompositionFold`, `cfInverseRanges`. Their rendered output is
in `session-docs/demos/illustrations/trigonometry/curveFeatureV2/`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `whyRestrict` | inverse-functions obj1 | lineTest | boundary |
| `arcsine` | inverse-functions obj2 | reflect | structure |
| `arccosine` | inverse-functions obj3 | reflect | structure |
| `arctangent` | inverse-functions obj4 | reflect | structure |
| `compositionFold` | inverse-functions obj8 | fold | misconception |
| `inverseRanges` | inverse-functions obj9 | ranges | mapping |

`reflect` is written to serve any of the three functions, so a fourth inverse
scene elsewhere needs no new code.

## 12. Renderer requirements

Default export `renderCurveFeatureV2(spec)` → SVG string. Pure string building —
no React, no DOM — so it runs inside `getStaticProps`. Unknown `kind` throws,
naming rule 11, rather than rendering something silently wrong. Output carries
`style="display:block;max-width:100%;height:auto"` so `demoUnitFrame` keeps it
intact.

## 13. Validation checklist

- [ ] Every `reflect` panel is square and uses one `limit` for both axes.
- [ ] No curve leaves its panel; tangent in particular.
- [ ] In `ranges`, all panels share one `limit`.
- [ ] Blue is the parent function, amber the inverse, in every scene.
- [ ] No two labels overlap; each names a direction.
- [ ] The struck-through wrong answer is inside the viewBox.
- [ ] Nothing inside the SVG repeats a sentence from the frame panel (v10 §3.5).
- [ ] The figure carries its claim with the frame panel covered up.
