# inverseMirror

Package doc for `inverseMirror.js`. Written with the renderer, 2026-10-03, for
the `/functions/inverse` page (Inverse as Reflection over y = x).

---

## 1. Scope

| kind | Shows |
|---|---|
| `swapPoints` | points (a, b) on f and (b, a) on f⁻¹, each pair joined by a dotted segment that meets y = x at a right angle at its midpoint (marked); optional fixed points on the line, which the swap leaves where they are |

**Out of scope.** Whole curves and their reflections: the inverse function
tool freezes those (`functionInverseDiagrams`).

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the functions figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| f / fFill | `#2563EB` / `#DBEAFE` | points on f and their labels |
| inv / invFill | `#B45309` / `#FDF3E3` | points on f⁻¹ and their labels |
| mirror | `#06357A` | the line y = x, midpoints, fixed points |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | caption / links, ticks / grid / axes |

## 3. Primitives

Square grid with ticks · axes · dashed mirror line with label · dotted link ·
midpoint dot · f point · f⁻¹ point · hollow fixed point · labels · caption.

## 4. Critical implementation notes

1. The grid is square (same units on both axes); otherwise the link would not
   look perpendicular to y = x.
2. Labels are placed by `fPos` / `invPos` / `pos` ('ne' | 'nw' | 'se' | 'sw');
   check them against the links, which run along x + y = a + b.

## 5. Style tokens

`wMirror 1.8`, `wLink 1.4`, `rPoint 6`, `rMid 3`. Fonts `fsTick 10`,
`fsAxis 11`, `fsPoint 12`, `fsMirror 12`, `fsCaption 13`.

## 6. Coordinate model

`range [lo, hi]` on both axes, mapped onto a 340 px square from (50, 24);
figure 480 wide.

## 7. Layout rules

- Keep labels off the links: a label beside (v, v) on the mirror crosses the
  link of any pair with a + b near 2v.
- Captions up to about 65 characters fit.

## 8. Topic-specific specification language

`range`, `pairs [{a, b, fPos, invPos}]`, `fixed [{v, pos, text}]`,
`mirrorLabel`, plus `svgTitle, style, caption`.

## 9. Spec schema

See §8.

## 10. Spec examples

Shipped spec: `imSwap` in `pages/functions/inverse/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `swapPoints` | inverse obj3 | swapPoints | mapping | concept |

## 12. Renderer requirements

Default export `renderInverseMirror(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each f⁻¹ point is its f point with the coordinates swapped.
- [ ] Each midpoint lies on y = x.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
