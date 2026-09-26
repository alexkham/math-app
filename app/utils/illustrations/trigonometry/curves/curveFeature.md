# curveFeature

Package doc for `curveFeature.js`. Written with the renderer, 2026-09-26, for the
`/trigonometry/graphs` page. Thirteen-section skeleton per
`illustration-system-complete-guide.md` §17.

---

## 1. Scope

One plotted trigonometric curve (or two, aligned) on a π-ticked axis, with the
features that a section's claim depends on marked on top of it: midlines,
reference lines, brackets, callouts, key points, bands and dimensions.

**In scope.** Any figure whose subject is *the shape of a trigonometric curve and
what moves it*. Amplitude, period, phase shift, vertical shift, key points,
reading an equation off a graph, boundedness, monotonic intervals, counting
solutions against a horizontal line, inequality bands.

**Out of scope.** Anything whose subject is a circle (`circleArc`), a triangle
(`triangleLabel`), or a relation between named objects with no geometry
(`relationMap`). A figure needing a curve *and* a circle belongs to `circleArc`,
which takes a pre-rendered curve panel as its second slot.

Serves 19 of the 34 earned trigonometry scenes. Seven are built (the graphs
page); the rest arrive as their pages are worked.

## 2. Palette

The trigonometry census (process v10 §3.3), recorded in `$meta.palette` of
`session-docs/methodology/illustrations/trigonometry/figure-registry.json`.

| Role | Key | Hex | Used for |
|---|---|---|---|
| primary | `primary` / `primaryLight` | `#4F46E5` / `#818CF8` | the curve that is the subject |
| secondary | `secondary` | `#16A34A` | the second curve; period and interval brackets |
| result / highlight | `resultStroke` / `resultFill` | `#B45309` / `#D97706` | the answer of the scene — key points, amplitude brackets |
| negation | `negation` | `#DC2626` | the wrong case, the trap, the thing that is not what you assume |
| text | `text` | `#1E3A5F` | panel titles |
| muted | `muted` / `mutedLight` | `#64748B` / `#94A3B8` | axes, ticks, tick labels, midlines |
| hairline | `hairline` / `hairlineLight` | `#CBD5E1` / `#E2E8F0` | asymptotes, quarter guides, panel divider |
| surface | `surface` | `#F8FAFC` | key-point halo only |

**Do not** use `angleExplorerDiagrams`' colours (`#E67E22`, `#0066CC`,
`#28A745`, `#DC3545`) or the pre-census sketch palette (`#378ADD`, `#E24B4A`,
`#185FA5`, `#BA7517`). Both predate the census and match nothing shipped.

## 3. Primitives

| Primitive | `marks[].type` | Notes |
|---|---|---|
| plotted curve | `panels[].curves[]` | one path per branch, never across an asymptote |
| midline | `midline` | dashed `6 4`, muted; `labelAt` parks the label clear of the curve |
| reference line | `hline` | dashed `5 3` |
| vertical line | `vline` | dashed `3 3` |
| asymptote | `asymptote` | dashed `5 4`; drawn automatically for unbounded curves |
| interval bracket | `bracket` | `orient: 'h' | 'v'`, with end ticks |
| dimension arrow | `dimension` | double-headed, for a displacement being measured |
| key points | `points` | filled dot with a surface halo, optional per-point label |
| band under a curve | `band` | curve-to-baseline fill over `[from, to]` |
| horizontal strip | `strip` | full-width band between two y values |
| vertical span | `vspan` | full-height band between two x values |
| leader callout | `callout` | line from a point to a text anchor |
| free label | `note` | text at a data coordinate |

## 4. Critical implementation notes

1. **Branch splitting is the whole difficulty.** `tan`, `cot`, `sec` and `csc`
   blow up. `curveSegments()` finds the asymptotes of the *inner* argument
   (`Bx − C`), maps them back to x, and emits one `<path>` per interval between
   them, inset by 0.4% of the interval so the path stops short of the pole. A
   second pass splits again wherever `|y|` exceeds `yClip`. A single path
   crossing an asymptote draws a vertical line through the whole figure — the
   classic broken render. **Test `tan` before anything else.**
2. **Tick labels go under the plot box, never on the axis.** A label at
   `y0 + 16` lands on top of the curve wherever the curve crosses zero, which is
   exactly where the interesting ticks are. Cost one render cycle on 2026-09-26.
3. **Draw order is fixed**: ticks → axes → fills (`band`/`strip`/`vspan`) →
   reference lines → curves → overlay marks → panel title. Fills before curves,
   or the tint covers the curve it is measuring.
4. **`evalAt` returns `Infinity` near a pole**; every consumer must test
   `isFinite` before using it as a coordinate. `samplePath` drops non-finite
   points rather than emitting `NaN` into a path `d`.
5. Coordinates are emitted at one decimal. Keeps the string short and avoids
   float noise in diffs.

## 5. Style tokens

Defaults live in `const C`, merged once per render as
`palette = { ...C, ...(spec.style || {}) }`. Every colour and weight is read
through that object — no literal hex or width below the entry point.

| Token | Default | Rule it implements |
|---|---|---|
| `wCurve` / `wCurveEmph` | `2.2` / `2.5` | v10 §3.4 — the curve is the only heavy stroke |
| `wRef` | `1.2` | region and reference lines |
| `wAxis`, `wBracket`, `wHair` | `1` | structure |
| `wEmph` | `1.7` | the one emphasised element |
| `fillBand` | `0.11` | region tint |
| `fillHighlight` | `0.42` | overlap / highlight |
| `weightBold` | `600` | never `700` |
| `fsAxis` / `fsLabel` / `fsCallout` | `11` / `12` / `11.5` | |

Ratio check: heaviest structural stroke `1.2` against lightest `1` = 1.2×,
inside the ~1.5× ceiling. The curve at `2.2` is exempt — it is the subject.

## 6. Coordinate model

Each panel owns a local pixel box `panelWidth × panelHeight` with padding
`padL/padR/padT/padB`. Data maps to pixels linearly from `xRange` / `yRange`.
Panels are laid out left to right, `gap` apart, inside one `viewBox` of
`n·panelWidth + (n−1)·gap` by `panelHeight`.

The x-axis is drawn at data `y = 0` and the y-axis at data `x = 0`, each clamped
into the plot box so a range excluding the origin still gets an axis at the edge.

## 7. Layout rules

- **`pair` panels must share `xRange` and `yRange`.** The claim of every contrast
  scene is "one variable changed"; different ranges make the panels
  incomparable and the figure lies.
- One panel: `480 × 230`. Two panels: `250 × 190` each. Both sit inside the
  demonstration-unit frame at its natural width without scaling.
- `padT` grows to 26 automatically when any panel carries a title.
- Park a midline label with `labelAt` wherever the curve is not. There is no
  collision detection.

## 8. Topic-specific specification language

A curve is `{ fn, A, B, C, D }` for `y = A·fn(Bx − C) + D`, matching the page's
own general sinusoidal form exactly. Defaults `A=1, B=1, C=0, D=0`.

`xTicks: 'pi'` labels multiples of π as `π/2`, `π`, `3π/2` using a true minus
(`−`). `xTickStep` sets the spacing, default `π/2`. `xTicks: [numbers]` or
`[{at,label}]` overrides. `yTicks` takes the same shapes.

`clip` restricts a curve to a sub-range of the panel — for drawing a restricted
domain beside its full one. `yClip` sets the vertical cut for unbounded curves.

## 9. Spec schema

```js
{
  kind: 'single' | 'pair',      // 'grid' and 'reflect' declared, not built
  title: String,                // <title>, accessibility only
  xRange: [Number, Number],     // panel-level override allowed
  yRange: [Number, Number],
  xTicks: 'pi' | Number[] | [{at,label}],
  xTickStep: Number,
  yTicks: Number[] | [{at,label}],
  panelWidth: Number, panelHeight: Number, gap: Number,
  padL: Number, padR: Number, padT: Number, padB: Number,
  style: {},                    // merged over const C
  panels: [{
    title: String,
    xRange, yRange, xTicks, xTickStep, yTicks,   // per-panel overrides
    curves: [{
      fn: 'sin'|'cos'|'tan'|'cot'|'sec'|'csc',
      A, B, C, D: Number,
      color: String,            // palette key or literal
      emphasis: Boolean,        // wCurveEmph instead of wCurve
      dash: String, opacity: Number,
      label: String, labelAt: Number, labelAnchor: String,
      clip: [Number, Number], yClip: Number,
      samples: Number,          // default 260
      asymptotes: Boolean,      // false suppresses the automatic dashes
    }],
    marks: [ /* see section 3; each carries its own fields */ ],
  }],
}
```

## 10. Spec examples

Contrast, two panels, one variable changed:

```js
{
  kind: 'pair', xRange: [0, 2 * Math.PI], yRange: [-3.6, 3.6],
  panels: [
    { title: 'y = sin x',   curves: [{ fn: 'sin', A: 1 }],
      marks: [{ type: 'bracket', orient: 'v', at: Math.PI / 2, from: 0, to: 1, label: '1' }] },
    { title: 'y = 3 sin x', curves: [{ fn: 'sin', A: 3 }],
      marks: [{ type: 'bracket', orient: 'v', at: Math.PI / 2, from: 0, to: 3, label: '3' }] },
  ],
}
```

The seven shipped specs are in `pages/trigonometry/graphs/index.jsx`, inside
`getStaticProps`. The working copies used to iterate are
`session-docs/scripts/_trig-graphs-specs.mjs`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `generalForm` | graphs obj5 | single | structure |
| `amplitude` | graphs obj6 | pair | contrast |
| `period` | graphs obj7 | pair | contrast |
| `phaseShift` | graphs obj8 | pair | contrast |
| `verticalShift` | graphs obj9 | pair | contrast |
| `equationFromGraph` | graphs obj10 | single | process |
| `keyPoints` | graphs obj11 | single | process |

Twelve further scenes are earned and waiting: `properties` obj3/obj6,
`functions` obj8, `equations` obj8, `inequalities` obj1/obj6,
`inverse-functions` obj1–obj4, obj8, obj9. `functions` obj8 needs `grid`;
`inverse-functions` obj2–obj4 and obj9 need `reflect`. Both are unbuilt — add
them in a new file (`curveFeature.v2.js`) per v10 rule 11, never by editing this
one.

## 12. Renderer requirements

- Default export `renderCurveFeature(spec)` → SVG string. Named export too.
- No React, no JSX, no Tailwind, no DOM. Pure string building, so it runs inside
  `getStaticProps`.
- `const C` defaults, one `palette` merge per render, every colour via
  `palette.X`.
- Unknown `kind` throws with a message naming rule 11, rather than rendering
  something silently wrong.
- Output carries `style="display:block;max-width:100%;height:auto"` so
  `demoUnitFrame`'s `normalizeSvg` keeps it intact and it scales inside the
  frame.

## 13. Validation checklist

- [ ] `tan` renders as separate branches with no line through an asymptote.
- [ ] No tick label sits on top of the curve.
- [ ] In a `pair`, both panels share `xRange` and `yRange`.
- [ ] Every fill is `0.11` or `0.42`; no solid role colour as a fill.
- [ ] No stroke wider than `2.5`, and only a curve is that wide.
- [ ] Bold text is `600`.
- [ ] Nothing inside the SVG repeats a sentence from the frame panel (v10 §3.5).
- [ ] The figure carries its claim with the frame panel covered up.
- [ ] Renders identically in Node (`getStaticProps`) and in the browser.
