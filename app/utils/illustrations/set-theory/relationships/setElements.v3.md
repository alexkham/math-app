# setElements.v3

Package doc for `setElements.v3.js`. Written with the renderer, 2026-09-28, for
the `/set-theory/subsets` page. A third file, not an edit: rule 11 —
`setElements.js` and `setElements.v2.js` had both shipped.

---

## 1. Scope

Why a set of n elements has 2ⁿ subsets: one in-or-out choice per element, drawn
as a tree whose leaves are the subsets.

| kind | Shows |
|---|---|
| `choices` | a binary tree, one level per element; left branch keeps the element, right leaves it out; the leaves are every subset; a total line multiplies the 2s |

**Out of scope.** The subsets ordered by containment — that is the power set
tool's lattice (`powerSetExplorerDiagrams`), harvested, not drawn here.

## 2. Palette

The **set-theory census**, as in `setElements.md` §2.

| Role | Hex | Used for |
|---|---|---|
| primary | `#2F4FD8` | "in" branches |
| muted | `#64748B` | "out" branches (dashed) |
| result | `#B4690E` / `#FDF3E3` | the subsets at the leaves |
| text | `#1E293B` | decision nodes, level questions, the total line |

## 3. Primitives

Decision node (small dot) · in branch (solid) · out branch (dashed) · branch
label · level question · leaf (rounded box with the subset) · total line.

## 4. Critical implementation notes

1. **In is always the left branch**, so the leaves run from the full set on the
   left to ∅ on the right, and every leaf's contents can be read off the solid
   branches above it.
2. **The total line is computed**, one `2` per level, never typed: it has to
   agree with the leaf count.
3. In and out differ by colour *and* dash, so the tree still reads in greyscale.

## 5. Style tokens

`wIn 1.6`, `wOut 1.2`, `wLeaf 1.4`, `rNode 4`, `levelGap 72`, `leafW 56`,
`leafH 28`. Fonts `fsLevel 12`, `fsEdge 11`, `fsLeaf 12`, `fsTotal 14`.

## 6. Coordinate model

Absolute pixels. The tree spans x 120 → width − 24; the level questions sit in
the left margin. Level l at y = 56 + 72l; leaf i is centred in its 1/2ⁿ share
of the span.

## 7. Layout rules

- Three elements (8 leaves) at width 620. Four elements needs about 1000px
  before the leaves collide; split the example instead.
- Element names of one character; the leaf box is 56px wide.

## 8. Topic-specific specification language

`elements: ['a', 'b', 'c']` in tree order, top level first.

## 9. Spec schema

```js
{
  kind: 'choices',
  svgTitle: String, style: {}, width, height: Number,
  elements: [String], levelQuestion: String, total: String,
}
```

## 10. Spec examples

Shipped spec: `seChoices` in `pages/set-theory/subsets/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `subsetChoices` | subsets obj4 | choices | process | concept |

## 12. Renderer requirements

Default export `renderSetElementsV3(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Leaf count equals the number in the total line.
- [ ] Every leaf equals the elements on the solid branches above it.
- [ ] In left, out right, at every level.
- [ ] Set-theory census colours.
- [ ] The figure carries its claim with the frame panel covered up.
