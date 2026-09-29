# setElements.v2

Package doc for `setElements.v2.js`. Written with the renderer, 2026-09-28, for
the `/set-theory/cardinality` page. A second file, not an edit to
`setElements.js`: rule 11 — that renderer had shipped on the relationships page.

---

## 1. Scope

Listing the elements of an infinite set one by one, and the argument that a
listing of the reals always misses one.

| kind | Shows |
|---|---|
| `listing` | positive fractions in a grid, walked diagonal by diagonal; each new number numbered in order, repeats skipped |
| `diagonal` | an assumed complete list of decimals, the diagonal digits boxed, and the new number built by changing each one |

**Out of scope.** Pairing two sets and partitions — `setElements.js`. Regions and
set operations — the Venn tools.

## 2. Palette

The **set-theory census**, as in `setElements.md` §2.

| Role | Hex | Used for |
|---|---|---|
| primary | `#2F4FD8` / `#EAEEFF` | listed fractions; the rows of the list |
| result | `#B4690E` / `#FDF3E3` | the walk and its order numbers; the diagonal and the new number x |
| negation | `#C0392B` | where each row differs from x; the verdict |
| muted | `#64748B` | repeats (dashed), axis ticks, the digit changes |
| hairline | `#CBD5E1` | fractions beyond the drawn walk; the divider above x |

## 3. Primitives

Grid cell (disc with a fraction) · repeat cell (dashed disc) · walk step
(arrow between cells) · order number · axis label · digit · diagonal box ·
row name `r₁ = 0.` · difference note · divider · listing line · verdict line.

## 4. Critical implementation notes

1. **Repeats stay on the walk but get no number.** 2/2 is drawn dashed and the
   walk passes through it: the order numbers jump over it. "Every element
   appears exactly once" (the page's wording) is only true because of this.
2. **The walk alternates direction** per diagonal (1/1 → 2/1 → 1/2 → 1/3 → …),
   so each step is to a neighbouring cell; the listing line is computed from
   the same walk, never typed.
3. **The diagonal rule is +1, 9 → 0.** Choose rows with no 9 on the diagonal:
   a changed digit of 0 after a 9 can build a number with two decimal spellings
   (0.0999… = 0.1), which the figure does not address.
4. The number x uses the same box as the diagonal digits, directly under its
   column, so the eye links digit n of x to digit n of row n without arrows.

## 5. Style tokens

`wElement 1.4`, `wSkipped 1`, `wPath 1.6`, `wBox 1.4`, `wDivider 1`, `rCell 17`,
`cell 74`, `rowGap 40`, `digitGap 44`, `box 30`. Fonts `fsCell 12`,
`fsIndex 11`, `fsAxis 12`, `fsTick 11`, `fsNote 11`, `fsLine 13`, `fsDigit 15`,
`fsRowName 14`.

## 6. Coordinate model

Absolute pixels. `listing`: cell (1, 1) at `(110, 90)`, spacing 74, numerator
across, denominator down. `diagonal`: digit k of row i at `(150 + 44k, 70 + 40i)`;
x one row gap below the last row, under a divider.

## 7. Layout rules

- `listing` at `size` 5: eleven numbers listed, three repeats shown. Larger
  grids crowd the order numbers.
- `diagonal` with five rows of five digits; more rows push the difference notes
  past a 560 width.

## 8. Topic-specific specification language

A grid is its `size`; the walk and the listing follow from it. A list is
`rows: [[digit, ..], ..]`, row i's diagonal digit being `rows[i][i]`.

## 9. Spec schema

```js
{
  kind: 'listing' | 'diagonal',
  svgTitle: String, style: {}, width, height: Number,

  // listing
  size: Number, setName: String, acrossLabel, downLabel, skippedNote: String,

  // diagonal
  heading: String, rows: [[Number]], verdict: String,
  change: Function,   // digit -> different digit; default (d + 1) % 10
}
```

## 10. Spec examples

Shipped specs: `seListing`, `seDiagonal` in
`pages/set-theory/cardinality/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `countingRationals` | cardinality obj4 | listing | process | deferred: countable set |
| `cantorDiagonal` | cardinality obj5 | diagonal | process | deferred: uncountable set |

## 12. Renderer requirements

Default export `renderSetElementsV2(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The listing line matches the numbered cells, repeats excluded.
- [ ] Every repeat cell is dashed and unnumbered.
- [ ] No 9 on the diagonal.
- [ ] Each row's difference note names its own diagonal position.
- [ ] Set-theory census colours.
- [ ] The figure carries its claim with the frame panel covered up.
