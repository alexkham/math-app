# binomialExpansion

Package doc for `binomialExpansion.js`. Written with the renderer, 2026-09-29,
for the `/combinatorics/binomial-theorem` page (The Theorem section).

---

## 1. Scope

(a + b)^n expanded by choosing a or b from each factor.

| kind | Shows |
|---|---|
| `choices` | all 2^n picks (a or b from each of the n factors), sorted into columns by how many b's they take; each column's size is C(n, k), shown as the coefficient of its term; the full expansion as the caption |

**Out of scope.** Pascal's triangle rows — the Pascal triangle tool freezes
those (`pascalTriangleDiagrams`); the curve C(x, k) — `binomialCurve.js`.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the combinatorics figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| a / aFill | `#2563EB` / `#DBEAFE` | a cells |
| b / bFill | `#06357A` / `#E8EEF7` | b cells |
| res / resFill | `#B45309` / `#FDF3E3` | term boxes and '+' signs |
| text / muted / hair | `#1E3A5F` / `#64748B` / `#CBD5E1` | title, counts, caption / subtitle, headings / column separators |

## 3. Primitives

Title and subtitle · column heading · pick (a row of n letter cells) · count
line · term box · '+' sign · dashed column separator · caption.

## 4. Critical implementation notes

1. Picks are generated, never typed: m = 0 … 2^n − 1 in binary, b = 1, first
   factor most significant. The column sizes are therefore counted, not
   asserted, and must equal C(n, k).
2. Term text and caption are built from `choose(n, k)`, so the coefficient in
   each box always equals the number of picks above it.
3. Coefficient 1 and exponent 1 are omitted, exponent 0 drops the letter:
   a³, 3a²b, 3ab², b³.

## 5. Style tokens

`wCell 1.4`, `wTerm 1.4`, `cell 24`, `gap 3`, `rowH 34`, `colW 135`,
`termW 76`, `termH 30`. Fonts `fsTitle 13`, `fsSub 11`, `fsHead 12`,
`fsCell 14`, `fsCount 12`, `fsTerm 16`, `fsCaption 14`.

## 6. Coordinate model

Pixels. Column k centred at x = W/2 + (k − n/2)·135; pick rows from y = 86 at
34px; count, term and caption rows below the tallest column.

## 7. Layout rules

- n = 3 (8 picks, 580 × 296) is the shipped scene. n = 4 works (16 picks,
  715 × 398); n ≥ 5 gives a 10-row column and a width past the page frame.
- Term boxes are 76px: terms up to 6 characters (6a²b²) fit.

## 8. Topic-specific specification language

`n` (the power). Everything else is derived.

## 9. Spec schema

```js
{ kind: 'choices', svgTitle: String, style: {}, width, height: Number, caption: String, n: Number }
```

## 10. Spec examples

Shipped spec: `beChoices` in `pages/combinatorics/binomial-theorem/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `choicesN3` | binomial-theorem obj1 | choices | structure | concept |

## 12. Renderer requirements

Default export `renderBinomialExpansion(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Column sizes equal C(n, k).
- [ ] Each term's coefficient equals its column size.
- [ ] Every pick in column k has exactly k b's.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
