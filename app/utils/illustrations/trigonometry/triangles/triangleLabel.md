# triangleLabel

Package doc for `triangleLabel.js`. Written with the renderer, 2026-09-26, for
the `/trigonometry/right-triangle` page. Thirteen-section skeleton per
`illustration-system-complete-guide.md` §17.

---

## 1. Scope

Labelled right triangles, and the four things this subject does to them:

| kind | Shows |
|---|---|
| `pair` | the same triangle twice, a different acute angle chosen |
| `ratios` | one small triangle per ratio, with only the two sides that ratio uses lit |
| `sequence` | three panels, one leg driven toward zero |
| `parallel` | two horizontals and a transversal — elevation and depression |

**Out of scope.** Curves (`curveFeature`, `curveFeature.v2`), circles
(`circleArc`). Oblique-triangle scenes — the ambiguous case in particular —
belong here in principle but are not built; see §11.

## 2. Palette

**Two schemes, deliberately.**

Sides use the **local scheme of `triangleDiagrams.js`**, not the subject census:

| Side | Hex | Faces |
|---|---|---|
| a | `#DC2626` red | angle A |
| b | `#D97706` amber | angle B |
| c | `#1E40AF` blue | angle C |

The colour says which angle a side faces, and it has to keep saying that here
or an authored triangle and a harvested one contradict each other on the same
page. **The subject plan recorded this mapping backwards** (a = blue) until
2026-09-26; the module's own header comment is the authority.

Everything that is not a side — angle arcs, notes, titles, the failing case —
uses the subject census: `#4F46E5` primary, `#B45309` result, `#DC2626`
negation, `#1E3A5F` text, `#64748B` / `#94A3B8` muted, `#CBD5E1` hairline.

A greyed side is `hairline`, which is how `ratios` says "not part of this one".

## 3. Primitives

Triangle with per-side colouring · right-angle mark · angle arc with label ·
side label offset outside the edge · shared-side tick marks · grid · dashed
horizontal guides · transversal · equation line under a panel.

## 4. Critical implementation notes

1. **Geometry constants are copied from `triangleDiagrams.js` and must stay
   copied**: `vbCalc` pad 35, 30px grid, side-label offset 18, angle radius 28,
   right-angle mark 14, the 3° threshold that swaps an arc for a right-angle
   mark. They are what make an authored triangle sit beside a harvested one.
   `PAD + LABEL_PAD` adds 34 more, because side labels live outside the
   triangle and the module's own pad assumes they do not.
2. **`sequence` drives a leg, never the angle.** The first build computed the
   third vertex from θ; at 87° the triangle was 3,800px tall and left the panel
   entirely. Holding one leg and shrinking the other keeps every panel in its
   box and shows the same thing — a side going to zero. The angles then read
   33°, 3°, 86° rather than round numbers, which is the honest trade.
3. **`ratios` is three triangles, not one.** The first build ran dashed leaders
   from three formulas to three side midpoints: six lines crossing the triangle
   and each other, read as a web. One panel per ratio with the unused side
   ghosted says it immediately.
4. **A `pair` needs more than two titles to carry two different claims.**
   Naming-the-sides and the cofunction scene are the same geometry; without
   `leftEquation` / `rightEquation` and `markShared` the second is the first
   with different captions, which is two figures for one claim.
5. **Check the cofunction equations against the geometry, not against memory.**
   From the top angle, cosine takes the *adjacent* side — which is the same
   physical leg sine took from the bottom angle. That identity is the figure;
   writing `opp / hyp` on the right panel makes it false. It shipped wrong in
   the first render and was caught at inspection.

## 5. Style tokens

`const C` defaults, merged once per render as `{ ...C, ...(spec.style || {}) }`.

| Token | Default | Note |
|---|---|---|
| `wSide` | `1.8` | triangle edges |
| `wArc` | `1.7` | angle arcs — the emphasis weight |
| `wRa` | `1.2` | right-angle mark, shared-side ticks |
| `wSight` | `2.2` | the transversal; it is the subject of `parallel` |
| `wRef`, `wGrid` | `1`, `0.5` | guides and grid |
| `fillOpacity` | `0.07` | triangle interior |
| `fsSide` / `fsAngle` / `fsTitle` / `fsNote` | `14` / `13` / `13` / `11` | |

## 6. Coordinate model

Each panel computes its own viewBox from its vertices via `vbCalc`, then panels
are laid out left to right with `translate`, `gap` apart, inside one outer
viewBox. `ratios` and `sequence` use fixed panel boxes instead, because their
panels must be the same size to compare.

## 7. Layout rules

- The right angle sits at `A`, lower left, in every built scene. Scenes that
  need it elsewhere should pass vertices rather than rotate the drawing.
- Side labels sit outside the edge; `flip` chooses which side of it. The
  hypotenuse label almost always wants `flip: true` or it lands on the line.
- In a `pair`, both panels must be the same triangle. Different triangles make
  it a comparison of shapes, which is a different claim.

## 8. Topic-specific specification language

`opp` / `adj` / `hyp` name the sides by role; the renderer maps them to the
right edge and the right colour. A `ratios` row is
`{ label, sides: ['opp','hyp'], col }` — the `sides` array is what decides which
edges are lit, so it must match the formula in `label`.

A `sequence` panel is `{ opp, adj, title, note, dying }` in pixels, where
`dying` is `'opp'` or `'adj'` and recolours the vanishing side to negation.

## 9. Spec schema

```js
{
  kind: 'pair' | 'ratios' | 'sequence' | 'parallel',
  svgTitle: String,
  style: {},

  // pair
  leftTitle, rightTitle: String,
  leftEquation, rightEquation: String,      // give the two panels two claims
  angleLabel, hypLabel: String,
  markShared: Boolean,                      // tick the hypotenuse as the same side
  gap: Number,

  // ratios
  rows: [{ label: String, sides: ['opp'|'adj'|'hyp', ...], col: String }],
  gap: Number,

  // sequence
  panels: [{ opp: Number, adj: Number, title, note, dying: 'opp'|'adj'|null }],
  gap: Number,

  // parallel
  width, height: Number,
  sightLabel, lowerLabel, upperLabel, lowerPoint, upperPoint, note: String,
}
```

## 10. Spec examples

```js
{ kind: 'pair',
  leftTitle: 'measured from θ', rightTitle: 'measured from 90° − θ',
  leftEquation: 'sin θ = opp / hyp', rightEquation: 'cos(90° − θ) = adj / hyp',
  hypLabel: 'same hypotenuse', markShared: true }
```

The five shipped specs are in `pages/trigonometry/right-triangle/index.jsx`
inside `getStaticProps`, named `tlNaming`, `tlFindingSides`, `tlCofunction`,
`tlElevation`, `tlLimitations`. Rendered output is in
`session-docs/demos/illustrations/trigonometry/triangleLabel/`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `naming` | right-triangle obj1 | pair | contrast |
| `findingSides` | right-triangle obj4 | ratios | mapping |
| `cofunction` | right-triangle obj8 | pair | contrast |
| `elevation` | right-triangle obj9 | parallel | structure |
| `limitations` | right-triangle obj10 | sequence | boundary |

**Not built:** `sines-cosines-law` obj4 (the ambiguous case) and obj8 (area by
½ab·sin C) are earned and assigned to this component but need two primitives it
does not have — a swing arc for the SSA construction, and a dropped altitude.
Add them in `triangleLabel.v2.js` per v10 rule 11 when that page is worked.

## 12. Renderer requirements

Default export `renderTriangleLabel(spec)` → SVG string. Pure string building,
no React, no DOM, so it runs inside `getStaticProps`. Unknown `kind` throws,
naming rule 11. Output carries
`style="display:block;max-width:100%;height:auto"` so `demoUnitFrame` keeps it
intact.

## 13. Validation checklist

- [ ] Side colours match `triangleDiagrams`: a red, b amber, c blue.
- [ ] No triangle leaves its panel; check the degenerate ones especially.
- [ ] No side label sits on top of its own edge.
- [ ] Every equation is checked against the drawing, not against memory (§4.5).
- [ ] In a `pair`, both panels are the same triangle.
- [ ] In `ratios`, each panel's lit sides match the formula above it.
- [ ] Nothing inside the SVG repeats a sentence from the frame panel (v10 §3.5).
- [ ] The figure carries its claim with the frame panel covered up.
