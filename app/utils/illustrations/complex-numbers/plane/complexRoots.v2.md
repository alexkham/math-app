# complexRoots.v2

Package doc for `complexRoots.v2.js`. Written with the renderer, 2026-09-30,
for the `/complex-numbers/equations-polynomials` page (Solving z^n = z̄
section). Chains `complexRoots.js` under process v10 rule 11; that file is not
edited.

---

## 1. Scope

| kind | Shows |
|---|---|
| `withOrigin` | the circle roots exactly as `complexRoots` kind `roots` draws them, plus a solution at z = 0 as a filled point, with a legend separating the r = 0 solution from the r = 1 ones |

For roots on a circle only, use `complexRoots.js`.

## 2. Palette

Same page-theme defaults as `complexRoots` (copied into the file, not
imported). The origin solution uses `root` as a solid fill so it reads as a
different kind of solution from the hollow circle roots.

## 3. Primitives

Everything in `complexRoots` · filled origin point with label · two legend
lines (hollow = on the circle, filled = at 0) above the conjugate legend.

## 4. Critical implementation notes

1. Plane, circle, root and label coordinates are identical to `complexRoots`,
   so the two kinds look alike on neighbouring pages.
2. The origin point is drawn after the radii, on top of them.
3. The legend block sits at y 414–454, below the lowest root labels; captions
   start at y 484.

## 5. Style tokens

As `complexRoots`, plus `rOrigin 8`, `rLegend 6`.

## 6. Coordinate model

As `complexRoots`: unit circle at 150 px about (W/2, 215).

## 7. Layout rules

- As `complexRoots`. The origin label goes below-right of 0, clear of the
  radius to a root at 0°.

## 8. Topic-specific specification language

`roots [{arg, label}]`, `ticks`, `originLabel`, `circleNote`, `originNote`,
`pairNote`, `captionLines`.

## 9. Spec schema

```js
{
  kind: 'withOrigin',
  svgTitle: String, style: {}, width, height: Number,
  roots: [{ arg: Number, label: String }],
  ticks: { re: [String, String], im: [String, String] },
  originLabel: String, circleNote: String, originNote: String, pairNote: String,
  captionLines: [String],
}
```

## 10. Spec examples

Shipped spec: `crZConj` in `pages/complex-numbers/equations-polynomials/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `zSquaredConj` | equations-polynomials obj8 | withOrigin | structure | concept |

## 12. Renderer requirements

Default export `renderComplexRootsV2(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every point satisfies the equation in the caption.
- [ ] Solution count equals the stated total (n + 2 for z^n = z̄).
- [ ] The origin point is filled, the circle points hollow.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
