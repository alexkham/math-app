# functionPlot.v4

Package doc for `functionPlot.v4.js`. Written with the renderer, 2026-10-03,
for the `/functions/piecewise` page (Piecewise Functions). Chains
`functionPlot.js`, `.v2` and `.v3` under process v10 rule 11; those files are
not edited.

---

## 1. Scope

| kind | Shows |
|---|---|
| `pieces` | a piecewise graph: each piece only on its interval, in its own colour, labelled with its formula; ends closed (filled dot) or open (hollow dot); optional faint dashed continuations, marked points, notes, dashed threshold lines and range bars along the y-axis |

For graph kinds with one feature (monotone, extrema, sum, product, quotient,
domain) use `functionPlot.js`; for open-ended number lines `.v2`; for the
coordinate plane and reading values `.v3`.

## 2. Palette

The page-theme defaults, copied into the file: pieces `f` `#2563EB` and `g`
`#06357A`; marked points and range bars `r` `#B45309` (fill `#FDF3E3`); text
`#1E3A5F`, muted `#64748B`, grid `#E2E8F0`, axis `#94A3B8`.

## 3. Primitives

Grid with ticks every `xStep` / `yStep` · axes (at 0, or at the range edge
when 0 is outside) · piece path · ghost path · closed end · open end · marked
point · threshold line · range bar with arrowhead · labels · caption.

## 4. Critical implementation notes

1. Each piece is clipped to `xRange`, and the pen lifts outside `yRange`.
2. A closed dot wins over an open dot at the same point (a continuous joint,
   as at t = 1 in the plumber example, shows one solid dot).
3. `ends` is `[left, right]`, each `'open'`, `'closed'` or `null` (the piece
   runs on past the frame; no dot).
4. A range bar whose `to` exceeds the y-range gets an arrowhead: unbounded.

## 5. Style tokens

`wPiece 2.6`, `wGhost 1.4`, `wBar 7`, `rEnd 5.5`, `rPoint 6`,
`ghostOpacity 0.45`. Fonts `fsTick 10`, `fsAxis 11`, `fsPiece 13`, `fsLabel 12`,
`fsNote 11`, `fsCaption 13`.

## 6. Coordinate model

Plot box x 48 → 436, y 24 → 320 px; figure 480 × 376.

## 7. Layout rules

- Label positions `pos`: 'n' 's' 'e' 'w' 'ne' 'nw' 'se' 'sw' around the given
  point; check them against the pieces, the axes and the tick numbers.
- Keep axis letters to one character; there are 44 px right of the plot.
- Captions up to about 65 characters fit the 480 px width.

## 8. Topic-specific specification language

`xRange, yRange, xStep, yStep, xLetter, yLetter`,
`pieces [{fn, from, to, ends, color, label {text, x, y, pos}, ghost [[a, b]]}]`,
`points [{x, y, label, pos}]`, `notes [{x, y, text, pos, color}]`,
`vlines [{x, label}]`, `yBars [{from, to, color, label, labelY, dx}]`,
plus `svgTitle, style, caption`.

## 9. Spec schema

See §8. `fn` is a JS function of x.

## 10. Spec examples

Shipped specs: `fpTwoRules`, `fpDrawJump`, `fpRangeUnion`, `fpPlumber` in
`pages/functions/piecewise/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `twoRules` | piecewise obj1 | pieces | structure | concept |
| `drawJump` | piecewise obj4 | pieces | process | concept |
| `rangeUnion` | piecewise obj6 | pieces | structure | concept |
| `plumber` | piecewise obj11 | pieces | mapping | concept |

## 12. Renderer requirements

Default export `renderFunctionPlotV4(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each end's dot matches its inequality (≤ / ≥ closed, < / > open).
- [ ] Every marked point lies on the piece that owns its input.
- [ ] Range bars equal the union of the pieces' outputs.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
