# complexPoints

Package doc for `complexPoints.js`. Written with the renderer, 2026-09-30, for
the `/complex-numbers/additive-inverse` page (Geometric Interpretation
section).

---

## 1. Scope

A complex number and a related point, drawn in the plane.

| kind | Shows |
|---|---|
| `negation` | z and −z at opposite ends of a diameter of the circle of radius \|z\|; the 180° turn about 0 carrying z to −z; the origin as their midpoint; \|z\| = \|−z\| |

**Out of scope.** The conjugate and modulus pair — the complex conjugate tool
freezes it (`conjugateModulusDiagrams`); sums and differences — the addition
and subtraction tool (`complexAddSubDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the complex-numbers figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| z / zFill | `#2563EB` / `#DBEAFE` | the point z and its label |
| neg / negFill | `#B45309` / `#FDF3E3` | the point −z and its label |
| circle | `#06357A` | circle \|w\| = \|z\|, diameter, turn arc and arrowhead, modulus label |
| text / muted | `#1E3A5F` / `#64748B` | origin, caption / axis names and ticks |
| grid / axis | `#E2E8F0` / `#94A3B8` | grid / axes |

## 3. Primitives

Grid · axes with ticks every 2 · dashed circle · diameter · turn arc with
arrowhead · origin dot and label · two labelled points · modulus label ·
caption.

## 4. Critical implementation notes

1. Only z is given; −z, both labels and the modulus text are computed, so the
   figure cannot show a wrong negation.
2. \|z\| prints as an integer when a² + b² is a perfect square, else as √n.
3. The arrowhead marker id is `${idPrefix}-arrow`; give each frame on a page
   its own prefix.

## 5. Style tokens

`wCircle 1.3`, `wDiam 1.2`, `wTurn 1.6`, `wAxis 1.4`, `wPoint 2.2`,
`rPoint 7`, `unit 44`, `extent 4.5`, `turnR 1.3`. Fonts `fsAxis 12`,
`fsTick 10`, `fsTurn 12`, `fsOrigin 11`, `fsPoint 14`, `fsModulus 12`,
`fsCaption 13`.

## 6. Coordinate model

Plane units at `unit` px around (W/2, 220); grid to ±4, axes to ±`extent`.

## 7. Layout rules

- z in the first quadrant with \|re\|, \|im\| ≤ 3.5 keeps every label inside
  the frame; the shipped z is 3 + 2i.
- The "180°" and origin labels are placed for a z in the first quadrant; a z
  elsewhere needs a check of those two.

## 8. Topic-specific specification language

`z {re, im}`, `idPrefix`.

## 9. Spec schema

```js
{ kind: 'negation', svgTitle: String, style: {}, width, height: Number, caption: String, idPrefix: String, z: { re: Number, im: Number } }
```

## 10. Spec examples

Shipped spec: `cpNegation` in `pages/complex-numbers/additive-inverse/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `negation` | additive-inverse obj4 | negation | structure | deferred: additive inverse |

## 12. Renderer requirements

Default export `renderComplexPoints(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] −z has both coordinates negated.
- [ ] Both points lie on the dashed circle.
- [ ] The turn arc runs from z's side of the diameter to −z's.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
