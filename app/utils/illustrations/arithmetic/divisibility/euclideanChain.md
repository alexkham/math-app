# Template: `euclidean-chain` — Package Doc

The contract for the `euclidean-chain` illustration component. Covers everything in `euclideanChain.util.v1.js` (renderer): what it can render, how to author specs for it, and what the renderer guarantees.

Read alongside `illustration-system-process.md` for the overall workflow, and `illustration-system-complete-guide.md` for cross-template conventions.

---

## 1. Scope

`euclidean-chain` renders illustrations of the Euclidean algorithm as a vertical chain of division-row equations. One scene type:

- **`chain`** — a stack of rows, each row showing one step of the algorithm in the form `dividend = divisor · quotient + remainder`. Live remainders are amber pills; the terminating zero remainder is a dashed-gray pill. A dashed-amber arrow connects each row's remainder to the next row's divisor, illustrating the substitution `(a, b) → (b, r)`. The final row's divisor (the GCD) is boxed in primary, with a "gcd = N" callout beneath.

In scope: any illustration whose visual subject is "the Euclidean algorithm executed step by step on a pair of positive integers."

Out of scope: factor lists (use `factor-set`), prime factorization GCD (use `prime-factorization` — to build), rectangle-tile GCD (use `rectangle-tile` — to build), number lines with multiples (use `multiples-line`).

Reuse: no shared primitives extracted yet. All helpers are local to this file. The `infoPanel` and palette-merge patterns mirror `factor-set` and could be extracted if a third component shows identical code.

Deferred: optional inline annotations per row (e.g. "← swap" callouts on the substitution); side-by-side dual chains for comparing two computations.

---

## 2. Palette

All keys are overridable per spec via `spec.style` (see §4, §9).

| Role            | Constant         | Default hex | Used for                                                  |
|-----------------|------------------|-------------|-----------------------------------------------------------|
| background      | `palette.background` | `transparent` | reserved for future use                              |
| border          | `palette.border`     | `#888780`     | reserved for future use                              |
| fill            | `palette.fill`       | `#EF9F27`     | remainder pill fill (live remainders)                |
| stroke          | `palette.stroke`     | `#BA7517`     | remainder pill stroke; substitution arrow stroke     |
| text            | `palette.text`       | `#5F5E5A`     | equation text (dividend, divisor, `=`, `+`)          |
| text muted      | `palette.textMuted`  | `#888780`    | quotient text, info-panel notes, "stop" label        |
| primary         | `palette.primary`    | `#6B62CE`     | title; GCD box (final row's divisor); GCD callout    |
| secondary       | `palette.secondary`  | `#4FA8A4`    | available for `role: 'secondary'` info-panel lines   |
| result          | `palette.result`     | `#EF9F27`    | alias for fill (kept for role-resolution)            |
| result stroke   | `palette.resultStroke` | `#BA7517`  | `role: 'result'` info-panel lines                    |
| negation        | `palette.negation`   | `#E24B4A`    | `role: 'negation'` info-panel lines                  |
| neutral         | `palette.neutral`    | `#888780`    | zero-remainder pill, separator                       |

Conventions follow `illustration-system-complete-guide.md` §9: same role color = same meaning across scenes.

---

## 3. Primitives

| Primitive          | Renders as                                                          |
|--------------------|---------------------------------------------------------------------|
| equation row       | one horizontal line of text+shapes: dividend, `=`, divisor, `· q`, `+`, remainder pill |
| dividend / divisor | right-aligned plain text at fixed column positions                  |
| quotient suffix    | muted text `· q` immediately after the divisor                      |
| live remainder pill | rounded rectangle (rx=6) with amber fill at low opacity, amber stroke, value centered |
| terminator pill    | dashed-gray rounded rectangle for the zero remainder, with an italic "stop" label below |
| GCD box            | rounded rectangle in primary purple around the final row's divisor   |
| substitution arrow | dashed amber Bezier path from a row's remainder to the next row's divisor, with a left-pointing arrowhead at the divisor end |
| GCD callout        | short vertical primary line below the GCD box, with "gcd = N" text underneath |
| title              | left-anchored primary text at the top of the SVG; default `"Euclidean algorithm — gcd(a, b)"`, overridable via `spec.title` |
| info-panel line    | typed by `kind`: `formula`, `separator`, `note` (see §8)            |

---

## 4. Critical implementation notes

- **Customizability contract.** Every visual color is sourced from `palette`, never a literal hex. The renderer merges `{ ...C, ...(spec.style || {}) }` once at the top of `renderChain`, then references `palette.X` throughout. Spec authors can override any subset of the palette keys in §2.

- **a < b is auto-swapped.** If `spec.a < spec.b`, the renderer swaps them before computing the chain. This avoids a useless first row with `q = 0, r = a`. The convention `a ≥ b` is preserved in the rendered output regardless of spec order.

- **Chain is computed by the renderer, not the spec.** The spec carries only `a` and `b`. The renderer iterates `while (b !== 0)` to produce the row list — including `q`, `r`, and the terminating row.

- **Auto-sized height.** The viewBox height is `ROW0_Y + (rows.length − 1) * ROW_DY + 70`. A 2-row chain produces a 210-px SVG; a 3-row chain produces 270; a 4-row chain 330. Spec authors never set height.

- **`digitWidth(n)` is a coarse approximation.** Uses `String(n).length * 10 + 6` to estimate text width. Tuned for 1–4 digit numbers at font-size 16 sans-serif. For inputs above 5 digits, the GCD box and column alignment may need adjustment.

- **Substitution arrow Bezier geometry.** Each arrow starts at the right edge of the remainder pill (`startX = REM_X + REM_W`), curves rightward by `ctrlX = startX + 54`, and lands with its apex exactly at `(DIVISOR_RIGHT_X, nextRowY)`. The arrowhead extends 8 px to the right of the apex.

- **No `c-*` design-system classes used.** All colors are hex from the merged palette. Theme awareness (light/dark) is handled via the page background, not the SVG.

- **Unicode in SVG text content.** Use JS string escapes (`\u00B7` for ·, `\u2026` for …) inside spec strings if needed. The renderer passes them through as-is.

---

## 5. Style tokens

| Token                    | Value         | Where                                                  |
|--------------------------|---------------|--------------------------------------------------------|
| viewbox width            | `680`         | all chains                                             |
| viewbox height           | auto          | `ROW0_Y + (rows.length − 1) * ROW_DY + 70`            |
| title y                  | `28`          | `TITLE_Y`                                              |
| title font               | sans-serif, 13px, weight 600, primary color           |
| first row y              | `80`          | `ROW0_Y`                                               |
| row spacing              | `60`          | `ROW_DY`                                               |
| dividend column right    | `70`          | `DIVIDEND_X` (text-anchor=end)                         |
| `=` x                    | `82`          | `EQ_X`                                                 |
| divisor column right     | `140`         | `DIVISOR_RIGHT_X` (text-anchor=end, or box right edge for final row) |
| `· q` x                  | `148`         | `QUOT_X`                                               |
| `+` x                    | `200`         | `PLUS_X`                                               |
| remainder pill x         | `220`         | `REM_X` (left edge)                                    |
| remainder pill width     | `42`          | `REM_W`                                                |
| remainder pill height    | `26`          | `REM_H`                                                |
| remainder pill rx        | `6`           | corner radius                                          |
| info panel x             | `450`         | `INFO_X`                                               |
| equation font            | sans-serif, 16px, weight 400 (text color)              |
| quotient font            | sans-serif, 14px, textMuted                            |
| remainder text font      | sans-serif, 14px, weight 600 (live) or 400 (zero)      |
| GCD box stroke           | width 1.8 (primary)                                    |
| GCD box fill             | primary, opacity 0.15                                  |
| GCD box rx               | `5`                                                    |
| live remainder pill fill | fill, opacity 0.4                                      |
| live remainder pill stroke | stroke, width 1.4                                    |
| zero pill fill           | neutral, opacity 0.08                                  |
| zero pill stroke         | neutral, width 1.2, dasharray `3 3`                    |
| "stop" label             | sans-serif, 9px italic, textMuted, centered           |
| substitution arrow       | stroke width 1.2, dasharray `3 3`, control offset `+54` |
| arrowhead                | 8×8 polygon, filled stroke color                       |
| GCD callout line         | primary, width 1.2, length 16                          |
| GCD callout text         | sans-serif, 13px, weight 600, primary, centered        |
| formula font             | sans-serif, 15px, weight 600                           |
| note font                | sans-serif, 11px regular (italic optional)             |
| separator                | neutral, width 0.5, opacity 0.4                        |

---

## 6. Coordinate model

`euclidean-chain` does not use a math-coordinate plane. All positioning is in SVG pixel space.

Rows are stacked vertically at fixed y intervals. Within each row, columns are fixed by the layout constants in §5 — dividend, divisor, quotient suffix, plus sign, and remainder pill each have a known x position.

The only variable geometry is:
- Final-row GCD box width: `digitWidth(gcdValue)`, with the right edge aligned to `DIVISOR_RIGHT_X`.
- GCD callout x: centered on the GCD box (`DIVISOR_RIGHT_X − bw / 2`).
- Substitution arrow endpoint y: `ROW0_Y + (i + 1) * ROW_DY`.

---

## 7. Layout rules

### Single chain
- Title at `y = 28`, left-anchored at `x = 30`.
- Row 0 at `y = 80`; subsequent rows at `y = 80 + 60·i`.
- Substitution arrows from row `i`'s remainder (right edge of pill) to row `i+1`'s divisor (right edge of divisor column).
- Final row's divisor wrapped in a primary-purple rounded box.
- GCD callout: vertical primary line under the GCD box (length 16), then `gcd = N` text centered.
- Info panel: `INFO_X = 450`, `yStart = 28`.

### Wrapper styling (page side)

Set on the wrapping `<div>` in `genericSections`, not in the SVG. Default `max-width: 800px` for typical use, matching `multiples-line` and `factor-set` integration. Page-level decision; see process doc §7.

---

## 8. Topic-specific specification language

### Info-panel line algebra

Same as in `factor-set` and `multiples-line`:

```ts
type InfoLine =
  | { kind: 'formula';   text: string; role?: RoleName }
  | { kind: 'separator' }
  | { kind: 'note';      text: string; italic?: boolean }

type RoleName = 'primary' | 'secondary' | 'result' | 'negation'
```

The `list` line kind from `factor-set` is not needed here (chains do not enumerate set members).

### Style override surface

Per the customizability contract (process doc §5, Step 4): `spec.style` accepts any subset of the palette keys. The renderer merges over the defaults in `C`. Example:

```js
{
  kind: 'chain',
  a: 252, b: 105,
  style: {
    fill: '#FFD966',          // lighter amber for the remainder pills
    primary: '#4B5FCF',       // override title and GCD color
    background: '#FAFAFA',    // unused today, but reserved
  },
  info: { lines: [...] },
}
```

Un-passed keys fall through to the defaults. Document the override surface in the schema (§9) — every overridable key, every default value.

### Chain computation (zero-spec)

The renderer derives the entire row list from `(a, b)`:

1. If `a < b`, swap.
2. While `b ≠ 0`: compute `q = ⌊a/b⌋`, `r = a − q·b`. Record `{a, b, q, r}`. Then `[a, b] = [b, r]`.
3. The last recorded row has `r = 0`; its `b` is the GCD.

Spec authors never list rows, quotients, or remainders.

---

## 9. Spec schema

```ts
type EuclideanChainSpec = Chain

type Chain = {
  kind: 'chain'
  a: number                   // first input (auto-swapped with b if a < b)
  b: number                   // second input (positive)
  title?: string              // optional override; default 'Euclidean algorithm — gcd(a, b)'
  info: InfoPanel
  style?: Partial<StyleOverrides>
}

type StyleOverrides = {
  background:   string
  border:       string
  fill:         string        // live remainder pill fill
  stroke:       string        // live remainder pill stroke, arrow stroke
  text:         string        // main equation text
  textMuted:    string        // quotient text, notes, "stop" label
  primary:      string        // title, GCD box, GCD callout
  secondary:    string        // info-panel role: 'secondary'
  result:       string        // alias for fill
  resultStroke: string        // info-panel role: 'result'
  negation:     string        // info-panel role: 'negation'
  neutral:      string        // zero pill, separator
}

type InfoPanel = { lines: InfoLine[] }

type InfoLine =
  | { kind: 'formula';   text: string; role?: RoleName }
  | { kind: 'separator' }
  | { kind: 'note';      text: string; italic?: boolean }

type RoleName = 'primary' | 'secondary' | 'result' | 'negation'
```

Defaults for `StyleOverrides` are the entries in `C` (see §2).

---

## 10. Spec examples

### Three-step chain — gcd(252, 105)

```js
{
  kind: 'chain',
  a: 252,
  b: 105,
  info: { lines: [
    { kind: 'formula', text: 'gcd(252, 105) = 21', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'Replace (a, b) with (b, a mod b)' },
    { kind: 'note', text: 'until the remainder reaches 0.' },
    { kind: 'note', text: 'The last nonzero remainder', italic: true },
    { kind: 'note', text: 'is the GCD — here, 21.', italic: true },
  ]},
}
```

### Two-step chain — gcd(462, 198)

```js
{
  kind: 'chain',
  a: 462,
  b: 198,
  info: { lines: [
    { kind: 'formula', text: 'gcd(462, 198) = 66', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'Each step replaces the larger' },
    { kind: 'note', text: 'number by the remainder.' },
    { kind: 'note', text: 'Terminates in two steps —', italic: true },
    { kind: 'note', text: '66 divides 198 exactly.', italic: true },
  ]},
}
```

### Three-step chain — gcd(1071, 462)

```js
{
  kind: 'chain',
  a: 1071,
  b: 462,
  info: { lines: [
    { kind: 'formula', text: 'gcd(1071, 462) = 21', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '1071 = 462 · 2 + 147' },
    { kind: 'note', text: '462 = 147 · 3 + 21' },
    { kind: 'note', text: '147 = 21 · 7 + 0' },
    { kind: 'note', text: 'GCD = last nonzero remainder.', italic: true },
  ]},
}
```

### With style overrides

```js
{
  kind: 'chain',
  a: 252, b: 105,
  style: {
    primary: '#2D5BA8',       // navy title + GCD box instead of purple
    fill:    '#FFD966',       // softer amber for remainder pills
    stroke:  '#C99417',
  },
  info: { lines: [
    { kind: 'formula', text: 'gcd(252, 105) = 21', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'navy-themed variant.', italic: true },
  ]},
}
```

---

## 11. Scene catalog

| # | Page                            | Section                              | Spec sketch                       |
|---|---------------------------------|--------------------------------------|-----------------------------------|
| 1 | `/arithmetic/divisibility/gcd`  | §5 Method 3: Euclidean Algorithm     | `a=252, b=105` (3 rows)           |
| 2 | `/arithmetic/divisibility/gcd`  | §6 Euclidean Algorithm Step by Step  | `a=462, b=198` (2 rows)           |
| 3 | `/arithmetic/divisibility/gcd`  | §6 Euclidean Algorithm Step by Step  | `a=1071, b=462` (3 rows)          |

---

## 12. Renderer requirements

The component (`renderEuclideanChain(spec)`) must:

1. Return a string of valid SVG markup wrapped in a `<svg>` element with `xmlns`, `width="100%"`, `viewBox`, `role="img"`, and a `<title>`.
2. Return `''` for missing specs, unknown `kind`, or invalid `(a, b)` (zero or negative).
3. Auto-swap `(a, b)` if `a < b` before computing the chain.
4. Compute the chain via the internal `computeChain(a, b)` helper; never accept the row list as a spec field.
5. Merge `palette = { ...C, ...(spec.style || {}) }` once at the top of `renderChain`; reference only `palette.X` for colors thereafter.
6. Auto-size viewBox height: `ROW0_Y + (rows.length − 1) * ROW_DY + 70`.
7. Box the final row's divisor in primary; render the GCD callout (line + "gcd = N" text) underneath.
8. Render each non-terminator remainder as an amber pill; render the terminating zero as a dashed-gray pill with an italic "stop" label below.
9. Draw a dashed-amber Bezier substitution arrow from each row's remainder to the next row's divisor; omit the arrow on the final row.
10. Render the info panel via `infoPanel(lines, TITLE_Y, palette)`; degrade gracefully if `info.lines` is absent.
11. Default the title to `"Euclidean algorithm — gcd(a, b)"`; honor `spec.title` if provided.
12. Produce byte-identical output for byte-identical spec input (no random IDs, no timestamps).

---

## 13. Validation checklist

Before declaring a change to this component done, run through:

- [ ] All 3 catalog scenes render via spec only — no hand-coded SVG required.
- [ ] Hand-coded demo files (`euclidean-chain-demo-1-252-105.svg`, `-2-462-198.svg`) match spec-rendered output pixel-near.
- [ ] Light + dark mode parity (no role color collides with surface).
- [ ] A 2-row chain produces a ~210 px viewBox; a 3-row chain ~270 px.
- [ ] A chain with `a < b` produces the same output as the swapped version.
- [ ] The final row's divisor is the only one boxed in primary purple.
- [ ] The zero remainder is the only pill rendered with dashed-gray stroke; "stop" label sits below it.
- [ ] Substitution arrows curve cleanly to the right and land with their apex on the next divisor's right edge.
- [ ] The "gcd = N" callout is centered horizontally on the GCD box.
- [ ] `spec.style` overrides apply — passing `{ primary: '#XXX' }` recolors the title, GCD box, and callout; passing `{ fill, stroke }` recolors the remainder pills and arrows.
- [ ] Un-passed style keys fall through to the defaults in `C`.
- [ ] `spec.title` overrides the default title text when present.
- [ ] Two renders of the same spec produce identical strings.
- [ ] Chain with 4+ rows renders correctly (try `a=1071, b=24` → 4-row chain).
- [ ] Chain where `b | a` produces a 1-row chain (e.g. `a=30, b=5`) — single row, immediate termination.