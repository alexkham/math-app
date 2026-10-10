# jointRectangle

Package doc for `jointRectangle.js`. Written with the renderer, 2026-10-09, for
the `/probability/bayes-theorem` page (Common Mistakes: confusing P(A | B) with
P(B | A), ignoring the base rate); prototype approved by the owner the same day.
The probability figure registry had listed this renderer as "demos approved;
renderer not built" — no demo files existed, so a fresh prototype was made.

---

## 1. Scope

| kind | Shows |
|---|---|
| `split` | the unit square as total probability 1: columns A and not-A of widths P(A), 1 − P(A); in each column the bottom part is B, of height P(B \| column); each coloured part is a joint probability, printed inside it |

P(B) is the total coloured area; P(A | B) is the blue share of it. Equal
heights in both columns (P(B | A) = P(B | not A)) is the independent case.

**Out of scope.** Equally likely outcomes counted cell by cell — that is
`outcomeGrid`. Trees of conditional probabilities — the conditional tree and
total probability tools freeze those.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the probability figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| f / fFill | `#2563EB` / `#BFD3F8` | the A-and-B part, its area label |
| r / rFill | `#B45309` / `#F5D9B8` | the notA-and-B part, its area label |
| g | `#06357A` | outer frame, column headings |
| text / muted / axis | `#1E3A5F` / `#64748B` / `#94A3B8` | notes, caption / width labels / column borders |

## 3. Primitives

Square frame · column split · B part per column · area labels · column
headings · width labels · notes · caption.

## 4. Critical implementation notes

1. Joint areas are computed (P(A)·P(B|A), P(not A)·P(B|not A)); never type
   them into a spec. Notes are free text and must agree with them.
2. An area label is drawn only when its part is at least 24 × 16 px; put the
   value in a note otherwise.

## 5. Style tokens

`wFrame 1`, `wPart 1.6`. Fonts `fsHead 12`, `fsArea 11`, `fsNote 12`,
`fsCaption 13`.

## 6. Coordinate model

Square of 260 px from (40, 40); notes column from x = 322; figure 480 ×
`height` (default 376).

## 7. Layout rules

- Notes are about 24 characters wide before the edge; use `indent: true` for
  a continuation line.
- Captions up to about 65 characters fit.

## 8. Topic-specific specification language

`kind: 'split'`, `pA`, `pBgivenA`, `pBgivenNotA`, `labelA`, `labelNotA`,
`widthLabelA`, `widthLabelNotA`, `showAreas`, `notes [{text, color, indent}]`,
plus `svgTitle, style, caption, height`.

## 9. Spec schema

See §8.

## 10. Spec examples

Shipped spec: `jrBaseRate` in `pages/probability/bayes-theorem/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| base rate | bayes-theorem · mistakes | split | misconception | concept |

## 12. Renderer requirements

Default export `renderJointRectangle(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.
