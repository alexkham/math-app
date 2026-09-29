# relationMap

Package doc for `relationMap.js`. Written with the renderer, 2026-09-27, for the
`/trigonometry/functions` page.

The subject plan marked this component **provisional** — two scenes is below the
bar, and the instruction was to drop it if the prototypes felt forced. They did
not: both scenes are boxes, arrows and labels with no geometry at all, and they
share every primitive. Kept, on that evidence, with the owner's approval.

---

## 1. Scope

Named quantities and the relations between them. The one component in this
subject that draws nothing mathematical.

| kind | Shows |
|---|---|
| `roots` | several boxes reducing to one or two root boxes |
| `chain` | a left-to-right derivation, each arrow labelled with its rule, optionally fanning out to results |

**Out of scope.** Anything with a shape. If the claim is about a curve, a
triangle or a circle it belongs to another component — a box diagram of
geometric facts is decoration.

## 2. Palette

The trigonometry census, with one convention that carries both scenes:
**blue is a starting point or a root, amber is something derived from it.**
Blue boxes `#4F46E5` on `#EEF2FF`; amber `#B45309` on `#FEF6EC`; neutral steps
`#1E3A5F` on `#F8FAFC`. An arrow takes the colour of what it produces.

## 3. Primitives

Rounded box with a label · directed arrow with a head · arrow label · caption
under a box · figure note.

## 4. Critical implementation notes

1. **One arrow per box.** The first build drew `tan` and `cot` to *both* roots:
   four arrows crossed the middle and the figure read as a tangle. Each box now
   points at one root, and the label carries the whole relation (`sin / cos`) —
   both truthful and legible.
2. **Order the leaves so no arrow crosses another.** Put each leaf under the
   root it points at. There is no routing logic; the `x` values are the layout.
3. Arrow labels sit at `t = 0.52` along the arrow with a 20px lateral offset
   away from the root. At the midpoint they land on the line.
4. A chain's `via` label sits above the boxes, not on the arrow — on the arrow
   it collides with the box edges at any realistic spacing.

## 5. Style tokens

`wBox 1.4`, `wArrow 1.3`, `radius 7`, `headLen 6`. Fonts `fsBox 15`,
`fsSmall 13`, `fsLabel 11`, `fsNote 12`. Bold `600`.

## 6. Coordinate model

Absolute pixel space. Boxes are placed by explicit `x`; the renderer supplies
`y` from the scene's rows (`rootY` / `leafY`, or a single `y` for a chain).
Arrows are computed from box edges, so moving a box moves its arrow.

## 7. Layout rules

- Root row and leaf row want about 160px between them or the labels crowd.
- In a chain, leave at least 40px between boxes for the arrow and its label.
- Outputs fan from the last step's right edge; `outGap` should be the output
  box height plus about 16.

## 8. Topic-specific specification language

A leaf is `{ x, label, root, relation }` where `root` is a key from the `roots`
array. A chain step is `{ x, label, tone, via, under }` — `via` is the rule that
produced this step from the previous one, `under` is a gloss beneath the box,
`tone` is `root` / `result` / omitted and selects the colour pair.

## 9. Spec schema

```js
{
  kind: 'roots' | 'chain',
  svgTitle: String, style: {}, width, height: Number,

  // roots
  roots: [{ key, x, label }], rootsLabel: String,
  leaves: [{ x, label, root, relation }],
  boxWidth, boxHeight, boxSize, rootY, leafY, labelAt: Number,

  // chain
  steps: [{ x, label, tone, via, under }],
  outputs: [String], outX, outY, outGap, outWidth, outHeight, y: Number,

  note: String, noteX: Number,
}
```

## 10. Spec examples

```js
{ kind: 'roots',
  roots: [{ key: 'sin', x: 92, label: 'sin θ' }, { key: 'cos', x: 340, label: 'cos θ' }],
  leaves: [{ x: 26, label: 'csc θ', root: 'sin', relation: '1 / sin' }] }
```

Shipped specs: `rmReduceToTwo` and `rmFromOneValue` in
`pages/trigonometry/functions/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `reduceToTwo` | functions obj7 | roots | mapping |
| `fromOneValue` | functions obj10 | chain | process |

Both scenes this component was created for. If no third appears in the rest of
the subject, that is worth recording rather than hiding — a two-scene component
is a judgement made once, and it should be revisited when another subject needs
the same vocabulary.

## 12. Renderer requirements

Default export `renderRelationMap(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] No arrow crosses another.
- [ ] No arrow label sits on its own arrow or on a box.
- [ ] Blue is a root or a starting point, amber is derived — every box obeys it.
- [ ] Each arrow label states the full relation, not a hint.
- [ ] The figure carries its claim with the frame panel covered up.
