# vennCount

Package doc for `vennCount.js`. Written with the renderer, 2026-09-30, for the
`/combinatorics/inclusion-exclusion` page (Two Sets section).

---

## 1. Scope

A Venn diagram with a count in every region.

| kind | Shows |
|---|---|
| `twoSets` | two overlapping sets inside a universe; each region's element count; the sum \|A\| + \|B\| counting the overlap twice, then the corrected union |

**Out of scope.** Shaded regions without counts — the set-theory Venn tools
freeze those (`twoSetsVennDiagrams`); step-by-step multiplicities for three
sets — the inclusion-exclusion explorer (`inclusionExclusionDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the combinatorics figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| a / aFill | `#2563EB` / `#DBEAFE` | set A outline, fill, label, count |
| b / bFill | `#06357A` / `#E8EEF7` | set B outline, fill, label, count |
| both / bothFill | `#B45309` / `#FDF3E3` | overlap fill and count, corrected-union line |
| text / muted | `#1E3A5F` / `#64748B` | sum line / universe and neither labels |
| hair / u | `#94A3B8` / `#F8FAFC` | universe outline / universe fill |

## 3. Primitives

Universe box · two circles · lens (circle B clipped to circle A) · set label ·
region count with region name · universe label · neither label · sum line ·
union line · optional caption.

## 4. Critical implementation notes

1. The spec gives \|A\|, \|B\|, \|A ∩ B\| and \|U\|; the four region counts
   are derived, so they always add up to \|U\|. Impossible sizes throw.
2. Outlines are redrawn after the lens so the overlap fill never covers them.
3. The clip-path id is `${idPrefix}-clip`; give each frame on a page its own
   prefix.

## 5. Style tokens

`wSet 2`, `wU 1.2`, `r 100`, `gapX 110`. Fonts `fsSet 13`, `fsCount 24`,
`fsRegion 11`, `fsNote 10`, `fsCorner 12`, `fsSum 13`, `fsUnion 14`.

## 6. Coordinate model

Pixels. Universe box 20..W−20 × 14..266; circle centres at W/2 ∓ 55, y 142,
radius 100; region counts at the circle centres ∓ 50 and at the lens centre.

## 7. Layout rules

- Set names up to about 8 characters fit the "… only" labels inside the
  circles.
- Counts up to three digits fit the lens at fsCount 24.

## 8. Topic-specific specification language

`a {name, letter, size}`, `b {name, letter, size}`, `both`, `total`, `unit`,
`neitherNote`, `idPrefix`.

## 9. Spec schema

```js
{
  kind: 'twoSets',
  svgTitle: String, style: {}, width, height: Number, caption: String, idPrefix: String,
  a: { name: String, letter: String, size: Number },
  b: { name: String, letter: String, size: Number },
  both: Number, total: Number, unit: String, neitherNote: String,
}
```

## 10. Spec examples

Shipped spec: `vcLanguages` in `pages/combinatorics/inclusion-exclusion/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `languages` | inclusion-exclusion obj1 | twoSets | quantity | deferred: inclusion-exclusion principle (two sets) |

## 12. Renderer requirements

Default export `renderVennCount(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Region counts add up to \|U\|.
- [ ] The union line equals the sum of the three inner regions.
- [ ] Clip id unique on the page.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
