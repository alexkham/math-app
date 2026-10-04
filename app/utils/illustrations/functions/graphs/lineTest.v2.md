# lineTest.v2

Package doc for `lineTest.v2.js`. Written with the renderer, 2026-10-03, for
the `/functions/inverse` page (The Horizontal Line Test section). Chains
`lineTest.js` under process v10 rule 11; that file is not edited.

---

## 1. Scope

| kind | Shows |
|---|---|
| `horizontal` | panels side by side, each the graph of y = f(x) with dashed horizontal lines, labelled `y = c`, and the points where they meet it; a panel passes (amber crossings, one-to-one) when every line meets the graph at most once, fails (red crossings) when one meets it twice |

For the vertical line test (is it a function?) use `lineTest.js`.

## 2. Palette

The page-theme defaults of `lineTest` (copied into the file): curve
`#2563EB`, lines `#06357A`, pass `#B45309` / `#FDF3E3`, fail `#C0392B` /
`#FDECEA`; text `#1E3A5F`, muted `#64748B`, grid `#E2E8F0`, axis `#94A3B8`.

## 3. Primitives

Panel title · grid and axes · curve path · dashed horizontal line with its
`y = c` label · crossing point · verdict line · caption.

## 4. Critical implementation notes

1. Crossings are solved from f (sign changes on a 400-step grid over
   [from, to], then bisection), never listed, so pass/fail follows from the
   drawing.
2. Only crossings inside [from, to] count: the panel's domain is part of the
   claim (x² on [0, ∞) would pass).
3. Graph samples outside ±extent are dropped, so steep curves stop at the
   frame.

## 5. Style tokens

`wCurve 2.4`, `wLine 1.4`, `wAxis 1.3`, `wHit 2.2`, `rHit 6`, `panelW 260`,
`panelH 240`, `gap 20`, `unit 24`, `extent 5`. Fonts `fsTitle 13`,
`fsAxis 11`, `fsLineLabel 11`, `fsVerdict 12`, `fsCaption 13`.

## 6. Coordinate model

Each panel: a ±5 square at 24 px per unit, centred in its 260 × 240 box;
panels left to right with a 20 px gap.

## 7. Layout rules

- Verdicts stay under about 34 characters to fit 260 px.
- Line labels sit at the right end of each line; keep crossings away from
  the panel's right edge.
- The curve is one connected path: a function with a gap in its domain
  (log₂(x²) at 0, 1/x) gets its branches joined by a straight segment. Use
  gap-free functions, or a further file that splits the path.

## 8. Topic-specific specification language

`panels [{ title, f, from, to, lines: [y], verdict }]`, `caption`, plus
`svgTitle, style, width, height`.

## 9. Spec schema

```js
{
  kind: 'horizontal',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  panels: [{ title: String, f: Function, from: Number, to: Number, lines: [Number], verdict: String }],
}
```

## 10. Spec examples

Shipped spec: `ltSquareCube` in `pages/functions/inverse/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `squareCube` | inverse obj7 | horizontal | contrast | concept |

## 12. Renderer requirements

Default export `renderLineTestV2(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Every drawn crossing lies on its line and on the curve.
- [ ] The verdict text agrees with the computed colour.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
