# Template: `multiples-line` — Package Doc

The contract for the `multiples-line` illustration component. Covers everything in `utils/illustrations/multiplesLine.js`: what it can render, how to author specs for it, and what the renderer guarantees.

Read alongside `illustration-system-process.md` for the overall workflow, and `illustration-system-complete-guide.md` for cross-template conventions.

---

## 1. Scope

`multiples-line` renders illustrations centered on a number line showing multiples of a divisor. Three scene types:

- **`single-track`** — one number line. Shows a divisor's multiples and (optionally) a target value being tested for divisibility. Four modes: `exact` (target hit), `overshoot` (target missed), `remainder` (quotient + remainder), `list` (just the multiples).
- **`two-track`** — two stacked number lines, each showing the multiples of a different divisor. Used for common multiples and LCM.
- **`split-view`** — two stacked number lines for *one* number `n`: factors of `n` above (finite, bounded), multiples of `n` below (infinite, extending). Used for the factors-vs-multiples comparison.

In scope: anything answering "what does it look like when one number is divided by another," "where do two multiple sequences first coincide," and "how does the factor set relate to the multiple sequence."

Out of scope: prime factorization (use `prime-factorization`), Euclidean algorithm chains (use `euclidean-chain`), factor sets as labeled chips (use `factor-set`), digit-rule visualizations (use `digit-rule`).

Reuse: no shared primitives extracted yet. All helpers are local to this file.

Deferred: none — all three scene types are implemented.

---

## 2. Palette

| Role            | Constant         | Hex       | Used for                                                  |
|-----------------|------------------|-----------|-----------------------------------------------------------|
| neutral         | `C.neutral`      | `#888780` | axis lines, ticks, subtle borders                         |
| text            | `C.text`         | `#5F5E5A` | tick labels, body text                                    |
| text muted      | `C.textMuted`    | `#888780` | info-panel notes, ellipsis                                |
| primary         | `C.primary`      | `#6B62CE` | divisor's multiples (single-track), track A (two-track), factors (split-view) |
| secondary       | `C.secondary`    | `#4FA8A4` | track B (two-track), multiples (split-view)               |
| result fill     | `C.result`       | `#EF9F27` | target marker fill, LCM highlight band, pivot fill        |
| result stroke   | `C.resultStroke` | `#BA7517` | result text, pivot rings, target marker stroke            |
| negation        | `C.negation`     | `#E24B4A` | overshoot arcs (single-track `overshoot` mode)            |
| background punch| `C.bgPunch`      | `var(--color-background-primary, #FAFAF6)` | "hole" interior of open target markers       |

Conventions follow `illustration-system-complete-guide.md` §9: same role color = same meaning across scenes.

---

## 3. Primitives

| Primitive          | Renders as                                                          |
|--------------------|---------------------------------------------------------------------|
| axis line          | thin horizontal `<line>` with optional arrow marker at right end    |
| tick               | short vertical `<line>` 6px tall, centered on the axis              |
| multiple mark      | either a small filled `<circle>` (style=`dot`) or a slightly taller vertical line (style=`line`) |
| jump arc           | quadratic Bezier `<path>` rising ~50px above the axis, with arrow head at endpoint |
| target marker      | filled amber circle (`filled` mode), dashed open circle (`open` mode for failed divisions), or amber outline ring (`ring` mode for highlighted multiples) |
| pivot marker       | amber outer ring + small amber filled center; used at the shared point in split-view |
| gap bracket        | "[" shape under the axis spanning a range, with an optional label  |
| LCM highlight band | translucent vertical `<rect>` spanning both tracks at the LCM value |
| ellipsis           | `…` text drawn just past the last tick                              |
| info-panel line    | typed by `kind`: `formula`, `separator`, `list`, `note` (see §8)    |

---

## 4. Critical implementation notes

- **Unicode in SVG text content.** Use HTML numeric entities (`&#x2026;` for `…`, `&#x2224;` for `∤`, `\u00D7` in JS strings for `×`) — both work, but be consistent. Direct Unicode characters in source files are fine for the renderer but mixed encoding has bit us during string concatenation.

- **`tx` does not cover the full plane.** The coordinate transform maps `range[0]..range[1]` to `x=40..415`, not to `x=PLANE_X0..PLANE_X1`. The 10px inset on each side leaves room for tick edges and avoids clipping. Anything authored against absolute x values (markers, manually-placed labels) must account for this.

- **Two-track + split-view both use viewBox height 220.** Single-track uses 200. The info-panel `yStart` differs accordingly — 38 for height-220 scenes, 68 for single-track — to keep the panel visually centered against the diagram.

- **Marker IDs are unique per scene type.** `ml-arr-*` for single-track, `ml2-arr-*` for two-track, `msv-arr-*` for split-view. If a future scene type reuses an existing marker style, it still gets its own ID to keep multi-scene pages render-deterministic.

- **No `c-*` design-system classes used.** All colors are hex. This component predates the convention shift; if revisited, the inline-fill rule still applies (see §11 of `illustration-system-complete-guide.md`).

---

## 5. Style tokens

| Token            | Value         | Where                                                  |
|------------------|---------------|--------------------------------------------------------|
| viewbox width    | `680`         | all scenes                                             |
| viewbox height   | `200`         | single-track                                           |
| viewbox height   | `220`         | two-track, split-view                                  |
| plane x range    | `30 .. 425`   | `PLANE_X0`, `PLANE_X1`                                 |
| plane inset      | `10`          | `tx` maps to `x=40..415`                               |
| info panel x     | `450`         | `INFO_X`                                               |
| info panel width | `~200`        | from `INFO_X` to `~660`                                |
| axis stroke      | `#888780`, width 1     |                                                |
| tick stroke      | `#888780`, width 0.6   | length 6px (`y±3`)                            |
| multiple-mark line | width 1.4, length 12px (`y±6`)                                      |
| dot radius       | `3.5`         |                                                        |
| pivot ring radius| `7`           | outer ring of pivot/target marker                     |
| jump arc lift    | `50` px above axis                                                  |
| jump arc stroke  | width 1.6, linecap round                                             |
| overshoot dash   | `5 3`         | dashed coral arc in `overshoot` mode                  |
| open target dash | `2.5 2.5`     | dashed amber ring for failed divisions                |
| label baseline   | `axisY + 17` or `+ 18` | below the axis                                |
| label font       | sans-serif, 10px regular, 12px+600 for highlights      |
| formula font     | sans-serif, 15px+600                                   |
| list label font  | sans-serif, 12px regular                               |
| list items font  | sans-serif, 11px regular                               |
| note font        | sans-serif, 11px regular (italic optional)             |
| separator        | `#888780`, width 0.5, opacity 0.4                      |
| LCM highlight band | width 10 (5 px each side of LCM x), height = full strip + 35px below, fill amber at opacity 0.18 |

---

## 6. Coordinate model

Specs author in **math coordinates** (the integers on the number line). The renderer owns the math-to-SVG transform via `makeTx(range)`:

```
svgX = (PLANE_X0 + PLANE_INSET) + ((m - rMin) / (rMax - rMin)) * planeWidth
       = 40 + (m - rMin) / (rMax - rMin) * 375
```

For `range = [0, 24]`: `tx(0) = 40`, `tx(12) = 227.5`, `tx(24) = 415`.

Y coordinates are not subject to math-coordinate transform — they're fixed per scene type (see §7).

Each track gets its own `tx` instance, so the two tracks in `split-view` correctly use different ranges over the same physical plane width.

---

## 7. Layout rules

### Single-track
- Axis line: `y = 130`, `x1 = PLANE_X0`, `x2 = PLANE_X1`, arrow at right.
- Multiple marks on the axis.
- Tick labels below: `y = 148` (`= 130 + 18`).
- Jump arcs rise above the axis (peak at `y ≈ 80`).
- Jump labels above arc peak: `y ≈ 76`.
- Gap bracket below the labels: `y ≈ 162`.
- Info panel: `INFO_X = 450`, `yStart = 68`.

### Two-track
- Top axis: `y = 75`. Bottom axis: `y = 155`. Both span `PLANE_X0 - 10` to `PLANE_X1`.
- Top track labels above its axis: `y = 63` (`= 75 - 12`).
- Bottom track labels below its axis: `y = 172` (`= 155 + 17`).
- Track captions at left margin (`x = PLANE_X0 - 12`, anchored end) at axis baseline.
- LCM band sits behind everything: `x = tx(lcm) - 5`, full height between tracks plus 35px below for the callout.
- LCM callout: vertical tick at `y = 186..196` below bottom track, label at `y = 210`.
- Info panel: `yStart = 38`.

### Split-view
- Track titles above each track at left (`x = 20`): `y = 48` for top, `y = 140` for bottom.
- Top axis: `y = 80` (factors track, no arrow — bounded).
- Bottom axis: `y = 160` (multiples track, arrow at right — unbounded).
- Pivot marker at the shared value (`center`) on both tracks — top-right of factors, top-left of multiples.
- Labels: `y = 97` below top axis, `y = 177` below bottom axis.
- Ellipsis after the last multiple: `x = PLANE_X1 + 6`, `y = bottomAxisY + 4`.
- Info panel: `yStart = 38`.

### Wrapper styling (page side)

Set on the wrapping `<div>` in `genericSections`, not in the SVG. Default `max-width: 700px` for general use, `800px` for scenes with denser info panels. Page-level decision; see process doc §7.

---

## 8. Topic-specific specification language

### Info-panel line algebra

Every scene's info panel is an array of typed lines, each rendered top-to-bottom with the spacing built into the renderer:

```ts
type InfoLine =
  | { kind: 'formula';   text: string; role?: RoleName }
  | { kind: 'separator' }
  | { kind: 'list';      label: string; items: string; role?: RoleName }
  | { kind: 'note';      text: string; italic?: boolean }

type RoleName = 'primary' | 'secondary' | 'result' | 'negation'
```

Role coloring is applied via `resolveRole(role)`. Omit `role` for neutral text.

### Mode-driven scene construction (single-track)

`single-track` does not have separate scene-type entries per mode. Instead, `mode` switches the renderer's behavior:

- `mode: 'exact'` + `target` → renders jumps from 0 to `target` in primary, filled amber target.
- `mode: 'overshoot'` + `target` → renders jumps to the multiple just below `target` in primary, plus one coral dashed jump overshooting; open dashed amber target; gap bracket.
- `mode: 'remainder'` + `target` → renders jumps to `floor(target / step) * step` in primary; gap bracket between that and `target` labeled with the remainder; filled amber target.
- `mode: 'list'` → no jumps; multiples rendered as dots (style switches from `line` to `dot`); ticks shown only at multiples (sparse) unless `showAllTicks: true`.

The `highlights: number[]` array adds amber rings at specified multiples without rendering jumps to them. Used for the "3 divides 12, 36, 60" scaling scene.

### Pivot logic (split-view)

`center` is the shared value between the two tracks. The renderer:
- Marks `center` with the pivot marker (amber ring + amber fill) on both tracks.
- On the factors track, all other factors of `factorsOf` render as primary dots.
- On the multiples track, multiples `center + multiplesOf`, `center + 2·multiplesOf`, … up through `multiplesOf * (multiplesCount + 1)` render as secondary dots.

In all current scenes, `center === factorsOf === multiplesOf`. The schema allows them to differ for future flexibility.

---

## 9. Spec schema

```ts
type MultiplesLineSpec = SingleTrack | TwoTrack | SplitView

// ─── single-track ──────────────────────────────────────────────────────

type SingleTrack = {
  kind: 'single-track'
  range: [number, number]                       // math coordinates, e.g. [0, 15]
  step: number                                  // the divisor
  target?: number                               // present in exact / overshoot / remainder
  mode?: 'exact' | 'overshoot' | 'remainder' | 'list'  // default 'list'
  infinite?: boolean                            // ellipsis at right end
  highlights?: number[]                         // amber rings at additional multiples
  showAllTicks?: boolean                        // override default tick density
  info: InfoPanel
}

// ─── two-track ─────────────────────────────────────────────────────────

type TwoTrack = {
  kind: 'two-track'
  range: [number, number]                       // shared range for both tracks
  trackA: { step: number; label?: string }      // primary (purple)
  trackB: { step: number; label?: string }      // secondary (teal)
  highlight?: 'lcm' | 'none'                    // default 'lcm'
  info: InfoPanel
}

// ─── split-view ────────────────────────────────────────────────────────

type SplitView = {
  kind: 'split-view'
  center: number                                // shared pivot value
  factorsOf: number                             // top track shows factors of this
  multiplesOf: number                           // bottom track shows multiples of this
  multiplesCount?: number                       // how many multiples past center (default 4)
  info: InfoPanel
}

// ─── shared ────────────────────────────────────────────────────────────

type InfoPanel = { lines: InfoLine[] }

type InfoLine =
  | { kind: 'formula';   text: string; role?: RoleName }
  | { kind: 'separator' }
  | { kind: 'list';      label: string; items: string; role?: RoleName }
  | { kind: 'note';      text: string; italic?: boolean }

type RoleName = 'primary' | 'secondary' | 'result' | 'negation'
```

---

## 10. Spec examples

### Exact divides (single-track / exact)

```js
{
  kind: 'single-track',
  range: [0, 15],
  step: 3,
  target: 12,
  mode: 'exact',
  info: { lines: [
    { kind: 'formula', text: '3 | 12', role: 'primary' },
    { kind: 'separator' },
    { kind: 'formula', text: '12 = 3 · 4' },
    { kind: 'note', text: 'Four jumps of 3 land exactly on 12.' },
  ]},
}
```

### Quotient + remainder (single-track / remainder)

```js
{
  kind: 'single-track',
  range: [0, 32],
  step: 7,
  target: 30,
  mode: 'remainder',
  info: { lines: [
    { kind: 'formula', text: '30 = 7·4 + 2' },
    { kind: 'separator' },
    { kind: 'formula', text: '7 ∤ 30', role: 'negation' },
    { kind: 'note', text: 'Four jumps of 7 reach 28, remainder 2 left over.' },
  ]},
}
```

### Sequence with multiple highlights (single-track / list)

```js
{
  kind: 'single-track',
  range: [0, 63],
  step: 3,
  mode: 'list',
  infinite: true,
  highlights: [12, 36, 60],
  info: { lines: [
    { kind: 'formula', text: '3 | 12, 3 | 36, 3 | 60', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'If 3 divides 12, it divides every multiple of 12.' },
  ]},
}
```

### Common multiples / LCM (two-track)

```js
{
  kind: 'two-track',
  range: [0, 24],
  trackA: { step: 4 },
  trackB: { step: 6 },
  highlight: 'lcm',
  info: { lines: [
    { kind: 'formula', text: 'lcm(4, 6) = 12' },
    { kind: 'separator' },
    { kind: 'list', label: 'multiples of 4:', items: '4, 8, 12, 16, 20, 24, …', role: 'primary' },
    { kind: 'list', label: 'multiples of 6:', items: '6, 12, 18, 24, …', role: 'secondary' },
    { kind: 'note', text: 'smallest = 12', italic: true },
  ]},
}
```

### Labeled scenario (two-track)

```js
{
  kind: 'two-track',
  range: [0, 42],
  trackA: { step: 12, label: 'Bus A' },
  trackB: { step: 18, label: 'Bus B' },
  highlight: 'lcm',
  info: { lines: [
    { kind: 'formula', text: 'lcm(12, 18) = 36' },
    { kind: 'separator' },
    { kind: 'note', text: 'Bus A every 12 min, Bus B every 18 min.' },
    { kind: 'note', text: 'Both arrive together every 36 minutes.', italic: true },
  ]},
}
```

### Factors vs multiples (split-view)

```js
{
  kind: 'split-view',
  center: 24,
  factorsOf: 24,
  multiplesOf: 24,
  multiplesCount: 4,
  info: { lines: [
    { kind: 'formula', text: 'factors vs multiples', role: 'result' },
    { kind: 'separator' },
    { kind: 'list', label: 'factors of 24:', items: '1, 2, 3, 4, 6, 8, 12, 24', role: 'primary' },
    { kind: 'note', text: '8 values, finite', italic: true },
    { kind: 'list', label: 'multiples of 24:', items: '24, 48, 72, 96, …', role: 'secondary' },
    { kind: 'note', text: 'infinitely many', italic: true },
    { kind: 'note', text: '24 is the pivot — largest factor, smallest multiple.' },
  ]},
}
```

---

## 11. Scene catalog

| # | Page                              | Section                          | Scene type    | Spec sketch                                       |
|---|-----------------------------------|----------------------------------|---------------|---------------------------------------------------|
| 1 | `/arithmetic/divisibility`        | §1 What is Divisibility          | single-track  | `step=3, target=12, mode='exact'`                 |
| 2 | `/arithmetic/divisibility`        | §1 What is Divisibility          | single-track  | `step=5, target=12, mode='overshoot'`             |
| 3 | `/arithmetic/divisibility`        | §3 Basic Properties              | single-track  | `step=3, mode='list', highlights=[12,36,60]`      |
| 4 | `/arithmetic/divisibility`        | §4 Divisibility and Remainders   | single-track  | `step=7, target=30, mode='remainder'`             |
| 5 | `/arithmetic/divisibility/factors`| §5 Multiples                     | single-track  | `step=7, mode='list', infinite=true`              |
| 6 | `/arithmetic/divisibility/factors`| §6 Factors vs Multiples          | split-view    | `center=24, factorsOf=24, multiplesOf=24`         |
| 7 | `/arithmetic/divisibility/lcm`    | §1 What is LCM                   | two-track     | `trackA={step:4}, trackB={step:6}`                |
| 8 | `/arithmetic/divisibility/lcm`    | §3 Listing Multiples             | two-track     | `trackA={step:6}, trackB={step:8}`                |
| 9 | `/arithmetic/divisibility/lcm`    | §10 Applications                 | two-track     | `trackA={step:12, label:'Bus A'}, trackB={step:18, label:'Bus B'}` |

---

## 12. Renderer requirements

The component (`renderMultiplesLine(spec)`) must:

1. Return a string of valid SVG markup wrapped in a `<svg>` element with `xmlns`, `width="100%"`, `viewBox`, `role="img"`, and a `<title>`.
2. Dispatch on `spec.kind` to the appropriate scene renderer; return `''` for missing or unknown specs.
3. Compute layout entirely from the spec — no static x positions per-scene, no hardcoded dot lists.
4. Use `makeTx(range)` for all math-to-SVG coordinate conversion.
5. Use `gcd` / `lcm` / `computeFactors` helpers for derived values; never accept them as spec fields.
6. Render the info panel via `infoPanel(lines, yStart)`, with `yStart` chosen per scene type (68 for single-track, 38 for two-track + split-view).
7. Use unique marker IDs per scene type (`ml-arr-*`, `ml2-arr-*`, `msv-arr-*`) to keep multi-scene pages deterministic.
8. Default `mode` to `'list'` if absent on a single-track spec.
9. Default `highlight` to `'lcm'` on a two-track spec.
10. Default `multiplesCount` to `4` on a split-view spec.
11. Never throw on a missing `info.lines` — degrade gracefully (empty info panel).
12. Produce byte-identical output for byte-identical spec input (no random IDs, no timestamps).

---

## 13. Validation checklist

Before declaring a change to this component done, run through:

- [ ] All 9 catalog scenes render via spec only — no hand-coded SVG required.
- [ ] Hand-coded demo files (`multiples-line-demo-1` through `-4`) match spec-rendered output pixel-near.
- [ ] Light + dark mode parity (no role color collides with surface).
- [ ] Single-track `exact` mode lands the final jump on the target dot, target marker fills correctly.
- [ ] Single-track `overshoot` mode places the open dashed marker between the last reached multiple and the overshoot endpoint; gap bracket spans correctly.
- [ ] Single-track `remainder` mode brackets the gap from `floor(target/step)*step` to `target`, labels the remainder correctly.
- [ ] Single-track `list` with `infinite: true` renders ellipsis past the last tick.
- [ ] Single-track `highlights` array adds amber rings without disturbing jumps or main target.
- [ ] Two-track `highlight: 'lcm'` correctly computes LCM, renders highlight band + rings + callout only when LCM falls in range.
- [ ] Two-track track labels respect custom `label` strings (e.g. `'Bus A'`) when provided.
- [ ] Split-view `center` value renders with the pivot marker on both tracks.
- [ ] Split-view top track has no arrow; bottom track has arrow + ellipsis.
- [ ] Info panel renders every supported line kind without overflow past the viewbox.
- [ ] Two renders of the same spec produce identical strings.