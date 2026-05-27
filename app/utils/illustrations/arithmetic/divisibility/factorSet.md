# Template: `factor-set` — Package Doc

The contract for the `factor-set` illustration component. Covers everything in `factorSet.util.v2.js` (renderer): what it can render, how to author specs for it, and what the renderer guarantees.

Read alongside `illustration-system-process.md` for the overall workflow, and `illustration-system-complete-guide.md` for cross-template conventions.

---

## 1. Scope

`factor-set` renders illustrations of factor sets as labeled chips. Three scene types:

- **`single-set`** — one row of chips, the factors of a number. Supports optional highlights (amber-marked factors) and exclusions (struck-out factors, e.g. for proper divisors). Used for displaying factor lists, counting factors, summing divisors, classifying perfect/abundant/deficient numbers.
- **`pairs`** — one row of chips plus arcs connecting factor pairs `(a, n/a)` above. Includes a √n marker (amber-highlighted chip + callout) and a self-pair loop when n is a perfect square. Used for explaining the search-up-to-√n method and the pair structure of factors.
- **`two-set`** — two rows of chips, each for the factors of a different number. Common factors are highlighted in amber on both rows, vertically connected by dashed lines, with a GCD callout below. Used for common factors and the listing method of computing GCD.

In scope: any illustration whose visual subject is "a finite set of factors as labeled chips."

Out of scope: number lines with multiples (use `multiples-line`), factor trees and prime factorization (use `prime-factorization`), Euclidean algorithm chains (use `euclidean-chain`), GCD-as-tiling (use `rectangle-tile`).

Reuse: no shared primitives extracted yet. All helpers are local to this file.

Deferred: sum-gauge primitive for proper-divisor classification (currently handled by `exclude` + manual `caption` string); explicit count-callout primitive (handled by `caption`).

---

## 2. Palette

| Role            | Constant         | Hex       | Used for                                                  |
|-----------------|------------------|-----------|-----------------------------------------------------------|
| neutral         | `C.neutral`      | `#888780` | excluded chips, fine separators                           |
| text            | `C.text`         | `#5F5E5A` | chip labels, body text                                    |
| text muted      | `C.textMuted`    | `#888780` | info-panel notes, captions                                |
| primary         | `C.primary`      | `#6B62CE` | single-set chips, top-row chips in two-set, factor pair arcs |
| secondary       | `C.secondary`    | `#4FA8A4` | bottom-row chips in two-set                               |
| result fill     | `C.result`       | `#EF9F27` | highlighted chip fill (√n, common factors, manual highlights) |
| result stroke   | `C.resultStroke` | `#BA7517` | highlight strokes, GCD callout, self-pair loop, vertical connectors |
| negation        | `C.negation`     | `#E24B4A` | strike-through line on excluded chips                     |

Conventions follow `illustration-system-complete-guide.md` §9: same role color = same meaning across scenes.

---

## 3. Primitives

| Primitive          | Renders as                                                          |
|--------------------|---------------------------------------------------------------------|
| chip               | rounded rectangle (rx=6) with the factor value centered as text     |
| strike-through     | horizontal red line through a chip when it's excluded (proper divisors) |
| pair arc           | quadratic Bezier `<path>` above the chips, connecting a pair `(a, n/a)`, with the product label `a · b = n` at the apex |
| self-pair loop     | small quadratic Bezier arc above the √n chip, labeled `k · k`        |
| √n callout         | text under the √n chip giving the value and "stop testing here" hint |
| vertical connector | dashed amber line between two common chips in different rows (two-set) |
| GCD callout        | short vertical line under the GCD chip with "gcd(a, b) = k" text and a "largest common factor" subline |
| caption            | italic line of text centered under the chip row, used for counts, σ values, classification |
| set label          | bold text above the row giving the set name ("factors of N")        |
| info-panel line    | typed by `kind`: `formula`, `separator`, `list`, `note` (see §8)    |

---

## 4. Critical implementation notes

- **Chip sizing is adaptive.** The `chipSizing(slotCount)` helper picks `chipW`, `gap`, and `fontSize` based on how many chips need to fit in the plane (390 px wide). Five tiers from 6 chips (40w/10gap) down to 13+ chips (24w/4gap). The font size shrinks with the chip width so labels never overflow.

- **Two-set uses a "universe" of slots for alignment.** Both rows in `two-set` are positioned against the sorted union of both factor sets. A value that exists in only one set leaves an empty slot in the other row. This is what allows the vertical connectors between common factors to line up.

- **Pair arc apex y is interpolated linearly across all arcs.** The first arc (largest span) peaks at y=15 above the chips; the last arc (smallest span) peaks at y=115. Intermediate arcs interpolate between these. Self-pair loops are separate and always sit just 20 px above the √n chip.

- **`pairs` is read-only with respect to factors.** The renderer computes `factors`, `pairs`, and `√n` from `spec.of` alone. The spec for `pairs` is exactly two fields: `kind` and `of` (plus `info`).

- **`two-set` is read-only with respect to factors and GCD.** Spec is exactly `kind`, `setA`, `setB` (plus `info`). The renderer computes factor sets, intersection, and GCD; spec authors do not pass these in.

- **Unicode in SVG text content.** Use JS string escapes (`\u221A` for √, `\u00B7` for ·, `\u03C3` for σ, `\u2026` for …, `\u00B2`/`\u00B3` for ²/³) inside `caption` and `info` strings. The renderer passes them through as-is.

- **No `c-*` design-system classes used.** All colors are hex. Same conventions as `multiples-line` — see §11 of `illustration-system-complete-guide.md` if `c-*` classes are introduced later.

---

## 5. Style tokens

| Token            | Value         | Where                                                  |
|------------------|---------------|--------------------------------------------------------|
| viewbox width    | `680`         | all scenes                                             |
| viewbox height   | `150` or `170`| single-set (`170` if `caption` present, `150` otherwise) |
| viewbox height   | `240`         | pairs, two-set                                         |
| plane x range    | `30 .. 420`   | `PLANE_X0`, `PLANE_X1` (plane width = 390)             |
| info panel x     | `450`         | `INFO_X`                                               |
| info panel width | `~200`        | from `INFO_X` to `~660`                                |
| chip height      | `32`          | all chips                                              |
| chip rx          | `6`           | corner radius                                          |
| chip stroke      | `1.4` (default) / `1.6` (highlighted) | width                          |
| chip fill opacity | `0.15` (default) / `0.4` (highlighted) / `0.08` (excluded) |     |
| chip font        | sans-serif, 13/12/11/10 px depending on `chipSizing` tier |        |
| chip text weight | `400` (default) / `600` (highlighted)                  |        |
| strike-through   | `#E24B4A`, width 1.5, from `x+4` to `x+w-4` at chip mid-height |
| pair arc stroke  | width 1.2, opacity 0.7                                 |        |
| pair arc apex y range | `15..115`                                         |        |
| self-pair loop   | width 1.4, peaks 20 px above chip top                  |        |
| set label font   | sans-serif, 13px+600                                    |        |
| caption font     | sans-serif, 11px italic, color `C.textMuted`           |        |
| GCD callout      | label 12px+600 amber, subline 9px italic muted          |        |
| connector line   | dashed `3 3`, width 0.8, opacity 0.6                    |        |
| formula font     | sans-serif, 15px+600                                    |        |
| list label font  | sans-serif, 12px regular                                |        |
| list items font  | sans-serif, 11px regular                                |        |
| note font        | sans-serif, 11px regular (italic optional)              |        |
| separator        | `#888780`, width 0.5, opacity 0.4                       |        |

---

## 6. Coordinate model

`factor-set` does not use a math-coordinate plane. Chips are positioned by **slot index**, not by their numeric value.

For `single-set` and `pairs`: chip *i* in the factor list (sorted ascending) is placed at
```
x = startX + i * (chipW + gap)
```
where `startX` centers the chip row in the plane.

For `two-set`: chip values are mapped against the sorted universe of `factorsA ∪ factorsB`. Chip for value *v* is placed at slot `universe.indexOf(v)`. Empty slots are not rendered (the row simply has gaps where the other set has a chip).

Y coordinates are fixed per scene type (see §7).

---

## 7. Layout rules

### Single-set
- Set label at `y = 58`, left-anchored at `x = 30`.
- Chips at `y = 80..112`.
- Caption (if present) at `y = 138`, centered under the chip row.
- Info panel: `INFO_X = 450`, `yStart = 58`.

### Pairs
- Set label at `y = 48`, left-anchored at `x = 30`. Title includes the √n value when n is a perfect square, or the approximate √n when not.
- Pair arcs occupy `y = 15..145` (above chips).
- Chips at `y = 160..192`.
- Self-pair loop (if perfect square) at `y = 140..160`, label at `y = 148`.
- √n callout (if perfect square) at `y = 208` (value) and `y = 221` ("stop testing here").
- Info panel: `yStart = 48`.

### Two-set
- Top set label at `y = 48`, top chips at `y = 62..94`.
- Vertical connectors between common chips at `y = 94..142`.
- Bottom set label at `y = 135`, bottom chips at `y = 142..174`.
- GCD callout: short vertical line at `y = 174..190`, label at `y = 206`, subline at `y = 220`.
- Info panel: `yStart = 48`.

### Wrapper styling (page side)

Set on the wrapping `<div>` in `genericSections`, not in the SVG. Default `max-width: 800px` for typical use, matching `multiples-line` integration. Page-level decision; see process doc §7.

---

## 8. Topic-specific specification language

### Info-panel line algebra

Same as in `multiples-line` — every scene's info panel is an array of typed lines:

```ts
type InfoLine =
  | { kind: 'formula';   text: string; role?: RoleName }
  | { kind: 'separator' }
  | { kind: 'list';      label: string; items: string; role?: RoleName }
  | { kind: 'note';      text: string; italic?: boolean }

type RoleName = 'primary' | 'secondary' | 'result' | 'negation'
```

### Set-derived computation (zero-spec)

The renderer derives most values from minimal spec input. For each scene type:

- **`single-set`**: spec gives `of`. Renderer computes the factor list, count, and chip layout.
- **`pairs`**: spec gives `of`. Renderer computes factors, pairs `(a, n/a)`, identifies √n, decides whether n is a perfect square (triggers the self-pair loop and the highlighted √n chip).
- **`two-set`**: spec gives `setA` and `setB`. Renderer computes factor sets, sorted universe, intersection, and GCD.

The spec author never lists factors or pairs explicitly — only the source number(s). This keeps specs minimal and the data-derived values authoritative.

### Highlight, exclude, caption (single-set)

`single-set` is the most configurable scene type. Three optional fields shape the output:

- **`highlight: number[]`** — values to render in amber instead of purple. Used to call attention to specific factors without excluding them.
- **`exclude: number[]`** — values to render in neutral grey with a strike-through. Used for proper divisors (exclude n itself) or to demonstrate "without this factor, the set is …" analyses.
- **`caption: string`** — italic line under the chips, used for counts (`'12 factors'`), sums (`'σ(12) = 28'`), classifications (`'sum = 16 > 12 (abundant)'`), or formula explanations (`'72 = 2³ · 3² → (3+1)(2+1) = 12 factors'`).

Highlight and exclude can co-exist on different values; behavior on the same value is undefined (don't do it).

---

## 9. Spec schema

```ts
type FactorSetSpec = SingleSet | Pairs | TwoSet

// ─── single-set ────────────────────────────────────────────────────────

type SingleSet = {
  kind: 'single-set'
  of: number                  // the number whose factors to show
  highlight?: number[]        // factors to mark in amber
  exclude?: number[]          // factors to strike out and grey
  caption?: string            // italic line under the row
  info: InfoPanel
}

// ─── pairs ─────────────────────────────────────────────────────────────

type Pairs = {
  kind: 'pairs'
  of: number                  // renderer auto-computes factors, pairs, √n
  info: InfoPanel
}

// ─── two-set ───────────────────────────────────────────────────────────

type TwoSet = {
  kind: 'two-set'
  setA: number                // first number — top row in primary purple
  setB: number                // second number — bottom row in secondary teal
  info: InfoPanel             // renderer auto-computes intersection + GCD
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

### Simple factor set (single-set)

```js
{
  kind: 'single-set',
  of: 24,
  info: { lines: [
    { kind: 'formula', text: 'factors of 24', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'every integer that divides 24' },
    { kind: 'note', text: 'with no remainder.' },
    { kind: 'note', text: '8 factors — finite set.', italic: true },
  ]},
}
```

### Proper divisors with classification (single-set)

```js
{
  kind: 'single-set',
  of: 12,
  exclude: [12],
  caption: 'sum of proper divisors = 1+2+3+4+6 = 16 > 12 (abundant)',
  info: { lines: [
    { kind: 'formula', text: 'proper divisors of 12' },
    { kind: 'separator' },
    { kind: 'note', text: 'all factors except 12 itself.' },
    { kind: 'list', label: 'proper divisors:', items: '{1, 2, 3, 4, 6}', role: 'primary' },
    { kind: 'formula', text: 'sum = 16', role: 'result' },
    { kind: 'note', text: '16 > 12 → 12 is abundant.', italic: true },
  ]},
}
```

### Counting factors with formula caption (single-set)

```js
{
  kind: 'single-set',
  of: 72,
  caption: '72 = 2³ · 3² → (3+1)(2+1) = 12 factors',
  info: { lines: [
    { kind: 'formula', text: 'counting factors', role: 'primary' },
    { kind: 'separator' },
    { kind: 'formula', text: '72 = 2³ · 3²' },
    { kind: 'note', text: 'for n = p₁^a₁ · p₂^a₂ · …' },
    { kind: 'note', text: 'count = (a₁+1)(a₂+1) · …' },
    { kind: 'formula', text: '= 4 · 3 = 12', role: 'result' },
  ]},
}
```

### Factor pairs with √n self-pair (pairs)

```js
{
  kind: 'pairs',
  of: 36,
  info: { lines: [
    { kind: 'formula', text: 'finding factors of 36' },
    { kind: 'separator' },
    { kind: 'note', text: 'test 1 to √36 = 6:' },
    { kind: 'note', text: 'each success gives a pair.' },
    { kind: 'list', label: 'pairs:', items: '(1,36), (2,18), (3,12), (4,9), (6,6)', role: 'result' },
    { kind: 'note', text: '9 factors found from 6 tests.', italic: true },
  ]},
}
```

### Factor pairs without self-pair (pairs)

```js
{
  kind: 'pairs',
  of: 24,
  info: { lines: [
    { kind: 'formula', text: 'factor pairs of 24', role: 'primary' },
    { kind: 'separator' },
    { kind: 'list', label: 'pairs:', items: '(1, 24), (2, 12), (3, 8), (4, 6)', role: 'primary' },
    { kind: 'note', text: 'each pair multiplies to 24.' },
    { kind: 'note', text: '24 is not a perfect square,' },
    { kind: 'note', text: 'so no self-pair.', italic: true },
  ]},
}
```

### Common factors and GCD (two-set)

```js
{
  kind: 'two-set',
  setA: 12,
  setB: 18,
  info: { lines: [
    { kind: 'formula', text: 'common factors', role: 'result' },
    { kind: 'separator' },
    { kind: 'list', label: 'factors of 12:', items: '1, 2, 3, 4, 6, 12', role: 'primary' },
    { kind: 'list', label: 'factors of 18:', items: '1, 2, 3, 6, 9, 18', role: 'secondary' },
    { kind: 'list', label: 'common:', items: '{1, 2, 3, 6}', role: 'result' },
    { kind: 'note', text: 'max = 6 = gcd(12, 18)', italic: true },
  ]},
}
```

---

## 11. Scene catalog

| # | Page                                  | Section                          | Scene type   | Spec sketch                                  |
|---|---------------------------------------|----------------------------------|--------------|----------------------------------------------|
| 1 | `/arithmetic/divisibility`            | §6 Factors and Multiples         | pairs        | `of=24`                                      |
| 2 | `/arithmetic/divisibility/factors`    | §1 Factors                       | single-set   | `of=24`                                      |
| 3 | `/arithmetic/divisibility/factors`    | §2 Finding All Factors           | pairs        | `of=36`                                      |
| 4 | `/arithmetic/divisibility/factors`    | §3 Factor Pairs                  | pairs        | `of=24`                                      |
| 5 | `/arithmetic/divisibility/factors`    | §4 Proper Divisors               | single-set   | `of=12, exclude=[12], caption='abundant'`    |
| 6 | `/arithmetic/divisibility/factors`    | §7 Common Factors                | two-set      | `setA=12, setB=18`                           |
| 7 | `/arithmetic/divisibility/factors`    | §9 Counting Factors              | single-set   | `of=72, caption='12 factors'`                |
| 8 | `/arithmetic/divisibility/factors`    | §10 Sum of Factors               | single-set   | `of=12, caption='σ(12) = 28'`                |
| 9 | `/arithmetic/divisibility/gcd`        | §1 What is GCD?                  | two-set      | `setA=20, setB=35`                           |
| 10| `/arithmetic/divisibility/gcd`        | §3 Method 1: Listing Factors     | two-set      | `setA=24, setB=36`                           |

---

## 12. Renderer requirements

The component (`renderFactorSet(spec)`) must:

1. Return a string of valid SVG markup wrapped in a `<svg>` element with `xmlns`, `width="100%"`, `viewBox`, `role="img"`, and a `<title>`.
2. Dispatch on `spec.kind` to the appropriate scene renderer; return `''` for missing or unknown specs.
3. Compute the factor list of any provided number via the internal `computeFactors` helper; never accept the factor list as a spec field.
4. Compute factor pairs via `computePairs` for `pairs` scenes; detect perfect-square cases and produce the self-pair loop.
5. Compute the universe, intersection, and GCD for `two-set` scenes; never accept these as spec fields.
6. Use `chipSizing(slotCount)` to pick chip width / gap / font size adaptively; never use a fixed chip width.
7. Render the info panel via `infoPanel(lines, yStart)`, with `yStart` per scene type (58 for single-set, 48 for pairs and two-set).
8. Default `highlight` and `exclude` to empty arrays if absent on `single-set`.
9. Omit the caption row entirely (and use the shorter viewbox height) when `caption` is absent on `single-set`.
10. Never throw on missing `info.lines` — degrade gracefully (empty info panel).
11. Produce byte-identical output for byte-identical spec input (no random IDs, no timestamps).

---

## 13. Validation checklist

Before declaring a change to this component done, run through:

- [ ] All 10 catalog scenes render via spec only — no hand-coded SVG required.
- [ ] Hand-coded demo files (`factor-set-demo-1` through `-3`) match spec-rendered output pixel-near.
- [ ] Light + dark mode parity (no role color collides with surface).
- [ ] `single-set` with no `highlight`, no `exclude`, no `caption` renders cleanly with `viewBox` height 150.
- [ ] `single-set` with `highlight` marks specified factors in amber while leaving others purple.
- [ ] `single-set` with `exclude` greys excluded factors and draws a red strike-through.
- [ ] `single-set` with `caption` renders the italic caption centered below the chip row.
- [ ] `pairs` for a perfect square (e.g. 36) draws the self-pair loop above the √n chip and the √n callout below.
- [ ] `pairs` for a non-perfect-square (e.g. 24) draws no self-pair loop and no √n callout; the title shows the approximate √n.
- [ ] `pairs` arc apex y values interpolate smoothly from largest-span (top) to smallest-span (bottom).
- [ ] `two-set` highlights all common factors in both rows in amber.
- [ ] `two-set` vertical connectors align common chips across rows.
- [ ] `two-set` GCD callout points to the correct (maximum) common factor.
- [ ] Adaptive chip sizing kicks in correctly at the 6/8/10/12/13 boundaries.
- [ ] Two renders of the same spec produce identical strings.