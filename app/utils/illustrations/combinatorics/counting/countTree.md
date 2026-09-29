# countTree

Package doc for `countTree.js`. Written with the renderer, 2026-09-29, for the
`/combinatorics/counting-principles` page. Combinatorics' first authored
component.

---

## 1. Scope

Counting drawn as a tree of choices.

| kind | Shows |
|---|---|
| `product` | a two-step choice: every step-1 option branches into every step-2 option; each root-to-leaf path is one outcome, labelled at its leaf; the caption multiplies the option counts |

**Out of scope.** Arrangements, selections, partitions and distributions — the
combinatorics tools freeze those (`app/components/combinatorics/new-visualizers/`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the combinatorics figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| s1 / s1Fill | `#2563EB` / `#DBEAFE` | step-1 nodes and heading |
| s2 / s2Fill | `#06357A` / `#E8EEF7` | step-2 nodes and heading |
| out / outFill | `#B45309` / `#FDF3E3` | outcome leaves and heading |
| text / line | `#1E3A5F` / `#94A3B8` | root dot, caption / branches |

## 3. Primitives

Root dot · branch line · step node (circle with label) · dashed lead to the
leaf · outcome leaf (rounded box with the path's label) · step headings ·
caption.

## 4. Critical implementation notes

1. **One leaf per row, one row per outcome**: the leaf count on screen *is* the
   product, so the caption can be checked by counting.
2. Each step-1 node sits level with the middle of its own block of leaves, so
   the tree reads as equal fans — the "same number of options whatever the
   first choice" condition, made visible.
3. Leaf labels concatenate the two choices on the path; keep option labels
   short (two characters) so a leaf box of 60px holds them.

## 5. Style tokens

`wBranch 1.6`, `wLead 1.2`, `wNode 1.6`, `wLeaf 1.4`, `rRoot 5`, `rStep1 17`,
`rStep2 16`, `rowH 44`, `leafW 60`, `leafH 28`. Fonts `fsHead 12`, `fsSub 11`,
`fsNode 13`, `fsCaption 13`.

## 6. Coordinate model

Pixels. Columns at x = 50 (root), 190 (step 1), 330 (step 2), 470 (leaves);
leaf row i at y = 60 + 44·i.

## 7. Layout rules

- Up to about 8 leaves before the tree gets tall; 3 × 2 is the shipped scene.
- Two steps only in `product`; a third step would need a further kind.

## 8. Topic-specific specification language

`step1: { name, note, options: [..] }`, `step2: { name, note, options: [..] }`,
`outcomeName`, `outcomePlural`.

## 9. Spec schema

```js
{
  kind: 'product',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  step1: { name: String, note: String, options: [String] },
  step2: { name: String, note: String, options: [String] },
  outcomeName: String, outcomePlural: String,
}
```

## 10. Spec examples

Shipped spec: `ctOutfits` in `pages/combinatorics/counting-principles/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `outfitTree` | counting-principles obj2 | product | process | deferred: multiplication rule |

## 12. Renderer requirements

Default export `renderCountTree(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Leaf count equals the product in the caption.
- [ ] Every leaf label matches its path.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
