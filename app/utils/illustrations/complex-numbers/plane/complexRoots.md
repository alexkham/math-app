# complexRoots

Package doc for `complexRoots.js`. Written with the renderer, 2026-09-30, for
the `/complex-numbers/basics` page (Complex Equations and Polynomial Theory
section). Complex numbers' first authored component.

---

## 1. Scope

Roots of a polynomial equation drawn in the complex plane.

| kind | Shows |
|---|---|
| `roots` | the roots as points on a circle about the origin, each with its radius, value and argument; conjugate pairs joined by a dashed line across the real axis |

**Out of scope.** Powers of one number, and single points with modulus and
argument — the De Moivre and polar–rectangular tools freeze those
(`deMoivreDiagrams`, `polarRectangularDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the complex-numbers figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| circle | `#06357A` | the circle and the radii |
| root / rootFill | `#B45309` / `#FDF3E3` | root points and their values |
| pair | `#2563EB` | conjugate links and their legend |
| text / muted | `#1E3A5F` / `#64748B` | caption / axis names, ticks, arguments |
| grid / axis | `#E2E8F0` / `#94A3B8` | grid / axes |

## 3. Primitives

Grid · axes with Re/Im and ±1, ±i ticks · circle · radius to each root · root
point · value label · argument label · conjugate link · legend line · caption
lines.

## 4. Critical implementation notes

1. Roots are given by argument; positions are computed, so each label sits on
   its own point.
2. A conjugate link is drawn only when both a and −a (mod 360) are in the
   spec, with 0 < a < 180, and the legend appears only when a link does.
3. Value labels go outward: right of points with positive real part, left
   otherwise; above points in the upper half, below in the lower.

## 5. Style tokens

`wCircle 1.8`, `wRadius 1.2`, `wAxis 1.4`, `wRoot 2.2`, `wPair 1`, `rRoot 7`,
`unit 150`. Fonts `fsAxis 12`, `fsTick 11`, `fsValue 13`, `fsArg 11`,
`fsLegend 11`, `fsCaption 13`.

## 6. Coordinate model

Plane units scaled by `unit` px around the centre (W/2, 215); the circle has
radius 1 unit. Grid every half unit, axes to ±1.4 (Re) and +1.3 / −1.2 (Im).

## 7. Layout rules

- Up to about 8 roots before value labels crowd; use short labels (or
  cis-form) for n ≥ 6.
- A root on the real axis (argument 0 or 180) takes its label below the axis.
- Up to two caption lines.

## 8. Topic-specific specification language

`roots [{arg, label}]`, `ticks {re: [pos, neg], im: [pos, neg]}`, `pairNote`,
`captionLines`.

## 9. Spec schema

```js
{
  kind: 'roots',
  svgTitle: String, style: {}, width, height: Number,
  roots: [{ arg: Number, label: String }],
  ticks: { re: [String, String], im: [String, String] },
  pairNote: String, captionLines: [String],
}
```

## 10. Spec examples

Shipped specs: `crQuartic` in `pages/complex-numbers/basics/index.jsx`; `crCube8` in `pages/complex-numbers/demoivre-theorem/index.jsx` (blank positive-real tick where a root sits on it); `crCubeUnity` in `pages/complex-numbers/equations-polynomials/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `z4plus1` | basics obj9 | roots | structure | deferred: fundamental theorem of algebra |
| `cubeRoots8` | demoivre-theorem obj5 | roots | structure | concept |
| `cubeUnity` | equations-polynomials obj3 | roots | structure | concept |

## 12. Renderer requirements

Default export `renderComplexRoots(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each root satisfies the equation in the caption.
- [ ] Root count equals the degree.
- [ ] Conjugate links only between true conjugates.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
