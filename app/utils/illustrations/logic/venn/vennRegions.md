# vennRegions

Package doc for `vennRegions.js`. Written with the renderer, 2026-10-12, for
`/logic/truth-tables/biconditionals`; prototype approved by the owner the same
day (demos in `session-docs/demos/illustrations/logic/vennRegions/`).

---

## 1. Scope

| kind | Shows |
|---|---|
| `two` | a rectangle (all truth assignments) with circles P and Q; each of the four regions (P only, Q only, both, neither) is shaded when `spec.test(p, q)` is true for that region, so any of the 16 two-variable formulas can be drawn |

**Out of scope.** Three variables — a new scene type in `vennRegions.v2.js`.
The fixed states of the set-theory Venn truth-table tool — harvest those as
tool frames instead (`vennTruthTableDiagrams`).

## 2. Palette

The page theme.

| Role | Hex | Used for |
|---|---|---|
| fill | `#BFD3F8` | shaded regions |
| stroke | `#06357A` | circles, labels |
| on | `#2563EB` | formula above the frame |
| frame / text / amber | `#94A3B8` / `#1E3A5F` / `#B45309` | rectangle / notes, caption / highlighted notes |

## 3. Primitives

Universe rectangle · two circles · four masked regions · circle labels ·
formula line · notes column · caption.

## 4. Critical implementation notes

1. Regions are painted with SVG masks and a clip path whose ids start with
   `spec.id` (default `vr`); give every figure on a page its own `id`, or two
   figures will share masks.
2. `test(p, q)` receives the region's truth values, not coordinates.

## 5. Style tokens

Circle radius 78, centres at x = 150 and 250, y = 140; rectangle 360 × 200 at
(40, 40). Fonts `fsLabel 15`, `fsNote 12`, `fsCaption 13`.

## 6. Coordinate model

Figure 480 wide, `height` default 330; notes column starts at x = 412.

## 7. Layout rules

- Notes column is narrow (about 8 characters); prefer the caption and the
  unit text for explanations.

## 8. Topic-specific specification language

`kind: 'two'`, `test(p, q)`, `id`, `labelA`, `labelB`, `formula`,
`notes [{text, color}]`, plus `svgTitle, style, caption, height`.

## 9. Spec schema

See §8.

## 10. Spec examples

Demo specs: biconditional (`test: (p, q) => p === q`), xor
(`test: (p, q) => p !== q`). Shipped spec on `/logic/truth-tables/biconditionals`.

## 11. Scene catalog

| Scene | Page · section | Job |
|---|---|---|
| P ↔ Q | truth-tables/biconditionals · obj3 | structure |

## 12. Renderer requirements

Default export `renderVennRegions(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.
