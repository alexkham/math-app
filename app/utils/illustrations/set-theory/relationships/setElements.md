# setElements

Package doc for `setElements.js`. Written with the renderer, 2026-09-27, for the
`/set-theory/relationships` page. Set-theory's first authored component.

---

## 1. Scope

The individual elements of a set: where each one sits, and which is paired with
which. The Venn tools draw regions; this draws what is inside them.

| kind | Shows |
|---|---|
| `pairing` | two sets side by side, arrows pairing their elements; several panels, one comparison each |
| `partition` | a set divided into blocks, each element in exactly one |

**Out of scope.** Region shading, set operations, laws — the Venn tools already
harvest those. Reach for this component only when the claim is about *elements*.

## 2. Palette

The **set-theory census**, recorded in `$meta.palette` of the subject's figure
registry. It is not the trigonometry palette.

| Role | Hex | Used for |
|---|---|---|
| primary | `#2F4FD8` / `#EAEEFF` | the first set |
| secondary | `#0E7C66` / `#DFF2ED` | the second set |
| result | `#B4690E` / `#FDF3E3` | the pairing arrows; a third block |
| negation | `#C0392B` | an element that fails — unpaired |
| text | `#1E293B` | the enclosing set, captions |
| hairline | `#CBD5E1` | panel dividers |

The census found the older `venn-diagrams/*` modules on `#4675EE` / `#2563EB`.
Harvested Venn states keep that; this component does not follow it.

## 3. Primitives

Element (white disc, name, ring in its set's colour) · set region (ellipse or
rounded rectangle, tinted) · pairing arrow · unpaired-element label · block ·
enclosing set outline · verdict line · panel divider.

## 4. Critical implementation notes

1. **An unpaired element is ringed in negation and labelled**, not merely left
   without an arrow. In a failing panel that element is the whole claim; a
   missing arrow alone is too easy to overlook.
2. **Partition blocks never touch.** A 14px gap between blocks shows *no
   overlap*; the blocks together filling the outline shows *no gap*. Both
   halves of the definition must be visible.
3. **Block width follows element count**, with a 54px floor, so a singleton block
   reads as small without collapsing. The approved prototype used hand-set
   widths (180 / 150 / 54); the renderer's proportional widths (≈154 / 154 / 77)
   change the look slightly and not the claim.
4. The `pairing` layout places `L[i]` level with `R[i]`, so straight arrows mean
   index `i` pairs with `i`. A pair `[i, j]` with `i ≠ j` still draws correctly as
   a slanted arrow.

## 5. Style tokens

`wRegion 1.2`, `wElement 1.4`, `wArrow 1.4`, `wDivider 1`, `rElement 13`.
Fonts `fsElement 13`, `fsSetName 13`, `fsVerdict 13`, `fsNote 11`, `fsBlock 12`,
`fsCaption 13`.

## 6. Coordinate model

Absolute pixels. A `pairing` panel is 270px wide with sets at `+60` and `+200`,
panels 20px apart. A `partition` set sits at `(40, 40)` filling the width less
80, blocks laid out inside it left to right.

## 7. Layout rules

- Up to about six elements per set before the ellipses get tall; beyond that,
  split the example.
- Keep two panels in a `pairing` scene: one that works and one that fails. The
  failing one is what makes the working one mean something.

## 8. Topic-specific specification language

A pairing panel is `{ leftName, rightName, left: [..], right: [..], pairs:
[[i, j], ..], verdict, ok }`. An index of `left` that appears in no pair is the
unpaired element. A block is `{ items: [..], label }`.

## 9. Spec schema

```js
{
  kind: 'pairing' | 'partition',
  svgTitle: String, style: {}, width, height: Number,

  // pairing
  panels: [{ leftName, rightName: String, left, right: [String],
             pairs: [[Number, Number]], verdict: String, ok: Boolean,
             unpairedLabel: String, gap: Number }],

  // partition
  setLabel: String, setHeight: Number,
  blocks: [{ items: [String], label: String }],
  note: String,
}
```

## 10. Spec examples

Shipped specs: `seEquivalence`, `sePartition` in
`pages/set-theory/relationships/index.jsx`; `seInfinite` in
`pages/set-theory/cardinality/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `equivalence` | relationships obj2 | pairing | mapping | deferred: equivalent sets |
| `partition` | relationships obj5 | partition | structure | deferred: partition |
| `infiniteSelfPairing` | cardinality obj3 | pairing | contrast | deferred: infinite set |

Both scenes serve terms the content registry had marked **deferred** — concepts
no set-theory tool demonstrates. That is exactly the supply pass 2 exists for.

## 12. Renderer requirements

Default export `renderSetElements(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every unpaired element is ringed in negation and labelled.
- [ ] Partition blocks do not touch and together fill the set.
- [ ] Set-theory census colours, not trigonometry's.
- [ ] No label sits on an element or an arrow.
- [ ] The figure carries its claim with the frame panel covered up.
