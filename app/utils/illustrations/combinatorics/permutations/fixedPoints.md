# fixedPoints

Package doc for `fixedPoints.js`. Written with the renderer, 2026-09-29, for the
`/combinatorics/permutations` page (Derangement section).

---

## 1. Scope

Every arrangement of a few items, with the items that stay in their own place
marked.

| kind | Shows |
|---|---|
| `derangements` | all n! orders of n items, one row each; an item in its own place is circled, rows with none (the derangements) are boxed, a last column counts the items left in place; a formula line evaluates !n from the alternating sum |

**Out of scope.** Plain listings of arrangements with no constraint — the full
permutation tool freezes those (`fullPermutationDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the combinatorics figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| head | `#06357A` | place headings (the owner of each place) |
| item | `#1E3A5F` | items not in their own place |
| own / ownFill | `#C0392B` / `#FDECEA` | items in their own place, their counts, legend |
| der / derFill | `#B45309` / `#FDF3E3` | derangement rows, their labels and zero counts |
| text / muted / hair | `#1E3A5F` / `#64748B` / `#CBD5E1` | caption and formula / column labels / header rule |

## 3. Primitives

Place heading · row label · item letter · circle behind an item in its own
place · box behind a derangement row · count column · legend dot · formula
line · caption.

## 4. Critical implementation notes

1. **Every order is drawn**, generated from `items` — never typed in — so the
   boxed rows are exactly the derangements and can be counted.
2. The formula line and the default caption are computed from the same row
   scan, so the number in them always equals the number of boxed rows.
3. Rows run in lexicographic order of the items, so order 1 is the identity
   (everything in place) and the reader starts from the opposite extreme.

## 5. Style tokens

`wOwn 1.6`, `wDer 1.4`, `rOwn 14`, `rowH 40`, `colW 64`, `boxH 32`. Fonts
`fsHead 15`, `fsLabel 12`, `fsRow 11`, `fsItem 15`, `fsCount 14`, `fsNote 11`,
`fsCaption 13`.

## 6. Coordinate model

Pixels. Row labels at x = 70, place j at x = 150 + 64·j, count column 30px
right of the last place; row i baseline at y = 84 + 40·i.

## 7. Layout rules

- n = 3 (6 rows) is the shipped scene. n = 4 gives 24 rows (about 1030px tall)
  — too tall for a page unit; show larger n as numbers, not rows.
- Item labels are single letters; the place heading reuses the owner's letter.

## 8. Topic-specific specification language

`items` (the owners, in place order), `placeName` (column-label heading),
`rowName` (row prefix), `countName` (count-column heading), `ownNote` (legend).

## 9. Spec schema

```js
{
  kind: 'derangements',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  items: [String],
  placeName: String, rowName: String, countName: String, ownNote: String,
}
```

## 10. Spec examples

Shipped spec: `fpHats` in `pages/combinatorics/permutations/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `hatCheck` | permutations obj8 | derangements | classify | deferred: derangements |

## 12. Renderer requirements

Default export `renderFixedPoints(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Row count equals n!.
- [ ] Boxed rows are exactly those with a zero count.
- [ ] Formula line value equals the number of boxed rows.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
