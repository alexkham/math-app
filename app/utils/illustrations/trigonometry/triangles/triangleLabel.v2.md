# triangleLabel.v2

Package doc for `triangleLabel.v2.js`. Written with the renderer, 2026-09-27,
for the `/trigonometry/sines-cosines-law` page.

**Why a second file.** Rule 11 forbids editing a shipped renderer to gain a
scene type, and `triangleLabel.js` was integrated on the right-triangle page
before these were needed.

| File | Layouts | Shipped on |
|---|---|---|
| `triangleLabel.js` | pair, ratios, sequence, parallel | right-triangle |
| `triangleLabel.v2.js` | swing, altitude | sines-cosines-law |

---

## 1. Scope

Oblique-triangle constructions: a side swung to find where a vertex can go, and
an altitude dropped to find a height.

## 2. Palette

Sides use the local scheme of `triangleDiagrams.js` — **a red, b amber, c blue**,
the colour saying which angle a side faces. Everything else uses the subject
census: the height `#16A34A` dashed in `swing`, the altitude `#B45309` dashed in
`altitude`, angle arcs `#B45309`, the base ray `#94A3B8`.

## 3. Primitives

Base ray · fixed side · swing arc (partial) · landing dots · dropped height ·
right-angle mark · angle arc with label · side labels · panel title and note.

## 4. Critical implementation notes

1. **Tangency is decided from the computed height, never from a typed length.**
   The first render passed `86` for the tangent panel; the true height is
   `150 · sin 35° = 86.04`, so the discriminant came out slightly negative, the
   tangency test failed, and the "exactly one" panel drew no triangle at all.
   The shipped spec passes `150 * Math.sin(35 * Math.PI / 180)`.
2. **The swing is an arc across the base, not a circle.** A full circle at this
   radius overflows its 272px panel and bleeds into the next one. The arc spans
   28°–152° below the pivot, which always covers both possible landings.
3. **In `swing`, side b and angle A must be identical in every panel.** Only the
   swung length varies. Change anything else and the three panels stop being a
   comparison.
4. The altitude label sits on the far side of the altitude from side b. On the
   near side it lands on b's own label.

## 5. Style tokens

`wSide 1.8`, `wArc 1.7`, `wRa 1.2`, `wBase 1.4`, `wSwing 1.1` (dashed `4 4` at
0.7 — it is a construction line, not a side), `wHeight 1.2`, `wGrid 0.5`.

## 6. Coordinate model

`swing` panels share one fixed geometry — vertex A at `(34, 196)`, b at
`angleDeg` for `bLength` — so only the swung length varies between them.
`altitude` places C at `(cx, cy)`, side a along the base and side b at
`angleDeg`.

## 7. Layout rules

- Keep `swung length < bLength` for the two-triangle panel, or both landings
  are not valid triangles.
- Side a's label flips side in the tangent panel, where a coincides with the
  height.

## 8. Topic-specific specification language

A swing panel is `{ length, title, note, tone }` — `length` is the swung side in
pixels, and the tangent case must be the computed height.

## 9. Spec schema

```js
{
  kind: 'swing' | 'altitude',
  svgTitle: String, style: {},

  // swing
  angleDeg, bLength, gap, panelWidth, panelHeight: Number,
  panels: [{ length: Number, title, note: String, tone: String }],
  heightLabel, fixedLabel, swungLabel, angleLabel: String,

  // altitude
  width, height, cx, cy, angleDeg, bLength, aLength: Number,
  heightLabel, angleLabel, aLabel, bLabel, note: String,
}
```

## 10. Spec examples

```js
{ kind: 'swing', angleDeg: 35, bLength: 150,
  panels: [
    { length: 110, title: 'h < a < b', note: 'two triangles', tone: 'negation' },
    { length: 150 * Math.sin(35 * Math.PI / 180), title: 'a = h', note: 'exactly one', tone: 'result' },
    { length: 60, title: 'a < h', note: 'none — it cannot reach', tone: 'muted' },
  ] }
```

Shipped specs: `tlAmbiguousCase`, `tlAreaSAS` in
`pages/trigonometry/sines-cosines-law/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job |
|---|---|---|---|
| `ambiguousCase` | sines-cosines-law obj4 | swing | boundary |
| `areaSAS` | sines-cosines-law obj8 | altitude | quantity |

## 12. Renderer requirements

Default export `renderTriangleLabelV2(spec)` → SVG string. Pure string building.
Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] The tangent panel draws exactly one triangle with a right-angle mark.
- [ ] The swing arc stays inside its panel.
- [ ] b and A are identical across all swing panels.
- [ ] Side colours match `triangleDiagrams`: a red, b amber, c blue.
- [ ] No label sits on another.
- [ ] The figure carries its claim with the frame panel covered up.
