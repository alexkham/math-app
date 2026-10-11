# fractionBar

Package doc for `fractionBar.js`. Written with the renderer, 2026-10-11, for
the `/arithmetic/fractions` pages; prototype approved by the owner the same
day (demos in `session-docs/demos/illustrations/arithmetic/fractionBar/`).

---

## 1. Scope

| kind | Shows |
|---|---|
| `bars` | stacked bars, each one whole wide; row i is cut into `n` equal parts with `k` shaded. When `k > n` the row continues into further wholes drawn side by side (improper fractions, mixed numbers) |
| `area` | the unit square cut into `b` columns and `d` rows; `a` columns shaded blue, `c` rows shaded navy, their overlap amber: the product (a/b)·(c/d) = (a·c)/(b·d) |

**Out of scope.** Number lines with fractions — use `functionPlot.v4` (dots
and segments). Divisor structure — the divisibility renderers.

## 2. Palette

The page theme, as defaults.

| Role | Hex | Used for |
|---|---|---|
| f / fFill | `#2563EB` / `#BFD3F8` | default bar colour; area columns |
| r / rFill | `#B45309` / `#F5D9B8` | second bar colour; area overlap |
| g / gFill | `#06357A` / `#C9D6EA` | third bar colour; area rows, square frame |
| text / muted / grid | `#1E3A5F` / `#64748B` / `#94A3B8` | notes, caption / part labels / part borders |

## 3. Primitives

Bar with part cells · whole outline · row label · part labels (`1/n`, only
when a part is at least 22 px wide) · area grid · overlap outline · side labels
`a/b`, `c/d` · notes · caption.

## 4. Critical implementation notes

1. All bars share one whole width, so equal shaded lengths mean equal values.
2. A row's colour (`'f' | 'r' | 'g'`) sets both its outline and its fill.
3. In `area`, the overlap cells get an amber outline as well as the fill.

## 5. Style tokens

`fsLabel 13`, `fsNote 12`, `fsCaption 13`, `fsPart 11`; whole width at most
300 px, bar height 34, row gap 22. Area square 220 px.

## 6. Coordinate model

Figure 480 wide. `bars`: label column `labelWidth` (default 70), bars from
there; height grows with rows and notes unless `height` is given. `area`:
square at (40, 34), notes column from x = 286, height default 330.

## 7. Layout rules

- Notes in `area` are about 26 characters wide; in `bars` they run under the
  bars and can be longer.
- With 3 wholes or more the whole width shrinks to fit 480 px.

## 8. Topic-specific specification language

`bars`: `rows [{n, k, label, color, partLabels}]`, `notes [{text, color}]`,
`labelWidth`. `area`: `cols [a, b]`, `rows [c, d]`, `notes [{text, color}]`.
Both: `svgTitle, style, caption, height`.

## 9. Spec schema

See §8.

## 10. Spec examples

Prototype specs in `session-docs/demos/illustrations/arithmetic/fractionBar/`
(equivalent, improper, product); shipped specs on the fraction pages.

## 11. Scene catalog

Filled in as the fraction pages are illustrated (see the arithmetic figure
registry).

## 12. Renderer requirements

Default export `renderFractionBar(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.
