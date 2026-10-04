# compositionSteps

Package doc for `compositionSteps.js`. Written with the renderer, 2026-10-03,
for the `/functions/composition` page.

---

## 1. Scope

Composition of functions shown step by step.

| kind | Shows |
|---|---|
| `chain` | rows of input → first function → middle value → second function → output; two rows with the order swapped show that f ∘ g and g ∘ f differ |
| `graphical` | two graphs side by side: read g(a) on the first, carry it to the second's x-axis, read f(g(a)) there |

**Out of scope.** Curves of f(g(x)) against g(f(x)) for whole function
families — the function composition tool freezes those
(`functionCompositionDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the functions figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| f / fFill | `#2563EB` / `#DBEAFE` | f machines, f graph |
| g / gFill | `#06357A` / `#E8EEF7` | g machines, g graph, g(a) point |
| r / rFill | `#B45309` / `#FDF3E3` | final output box, f(g(a)) point and its dashed readings |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | titles, captions / arrows, notes / grid / axes |

## 3. Primitives

Value box · function machine (name + rule) · arrow · row title · row note ·
plot panel with curve · reading point · dashed reading lines · dashed curved
carry arrow · caption.

## 4. Critical implementation notes

1. Middle and output values (chain) and g(a), f(g(a)) (graphical) are
   computed from the spec's functions; the printed rules and the numbers
   cannot disagree.
2. A step named `f` takes the f colour; any other name takes the g colour.
3. Marker ids are `${idPrefix}-arr` (chain) and `${idPrefix}-carry`
   (graphical).

## 5. Style tokens

`wMachine 2`, `wArrow 1.6`, `wCurve 2.4`, `wAxis 1.3`, `boxW 52`, `boxH 36`,
`machineW 90`, `machineH 44`. Fonts `fsTitle 13`, `fsValue 16`, `fsName 15`,
`fsRule 11`, `fsNote 11`, `fsLabel 12`, `fsCaption 13`.

## 6. Coordinate model

chain: fixed columns (boxes at x 20, 236, 452; machines at 108, 324), rows 92
px apart. graphical: two 210 × 220 plot boxes at x 30 and 300, data mapped
linearly from each side's ranges.

## 7. Layout rules

- chain: exactly two steps per row; values up to three digits fit the boxes.
- graphical: keep g(a) inside the f panel's x-range; the carry arrow runs under
  both panels.

## 8. Topic-specific specification language

chain: `rows [{title, input, steps [{name, rule, fn}], note}]`.
graphical: `a`, `g {fn, xRange, yRange, title}`, `f {...}`, `carryNote`.
Both: `svgTitle, style, caption, idPrefix`.

## 9. Spec schema

See §8. Functions are JavaScript arrow functions; the specs live in the page's
`getStaticProps`.

## 10. Spec examples

Shipped specs: `csChain`, `csGraphical` in `pages/functions/composition/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `chain` | composition obj3 | chain | process | concept |
| `graphical` | composition obj11 | graphical | process | concept |

## 12. Renderer requirements

Default export `renderCompositionSteps(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each box value equals its rule applied to the previous value.
- [ ] Reading points lie on their curves.
- [ ] No label crosses a curve or the carry arrow.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
