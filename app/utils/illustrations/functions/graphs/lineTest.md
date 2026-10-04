# lineTest

Package doc for `lineTest.js`. Written with the renderer, 2026-10-01, for the
`/functions/basics` page (The Vertical Line Test section). Functions' first
authored component.

---

## 1. Scope

Line tests on graphs: does a line meet the curve more than once?

| kind | Shows |
|---|---|
| `vertical` | panels side by side, each a curve with dashed vertical lines and the points where they meet it; a panel passes (amber crossings) when every line meets the curve at most once, fails (red crossings) when one meets it twice |

**Out of scope.** Plain graphs of named function types — the function types
tool freezes those (`functionTypesDiagrams`). A horizontal line test (for
one-to-one functions) would be a further kind in a further file.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the functions figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| curve | `#2563EB` | the graph or curve |
| line | `#06357A` | dashed test lines |
| hit / hitFill | `#B45309` / `#FDF3E3` | crossings and verdict in a passing panel |
| bad / badFill | `#C0392B` / `#FDECEA` | crossings and verdict in a failing panel |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | titles, caption / axis letters / grid / axes |

## 3. Primitives

Panel title · grid and axes · curve path · dashed vertical line · crossing
point · verdict line · caption.

## 4. Critical implementation notes

1. Crossings are computed from the curve (`graph`: one at f(c); `circle`:
   ±√(r² − c²)), never listed, so pass/fail follows from the drawing.
2. A panel fails as soon as one of its lines has two crossings; the verdict
   colour follows.
3. Graph samples outside ±extent are dropped, so steep curves stop at the
   frame.

## 5. Style tokens

`wCurve 2.4`, `wLine 1.4`, `wAxis 1.3`, `wHit 2.2`, `rHit 6`, `panelW 260`,
`panelH 240`, `gap 20`, `unit 40`, `extent 3`. Fonts `fsTitle 13`,
`fsAxis 11`, `fsVerdict 12`, `fsCaption 13`.

## 6. Coordinate model

Each panel: a ±3 square at 40 px per unit, centred in its 260 × 240 box;
panels placed left to right with a 20 px gap.

## 7. Layout rules

- Verdicts under each panel stay under about 36 characters to fit 260 px.
- Two panels make a 540 px figure; three would be 820 px — too wide for the
  page frame.

## 8. Topic-specific specification language

`panels [{ title, curve: { type: 'graph', f, from, to } | { type: 'circle', r }, lines: [x], verdict }]`, `caption`.

## 9. Spec schema

```js
{
  kind: 'vertical',
  svgTitle: String, style: {}, width, height: Number, caption: String,
  panels: [{ title: String, curve: Object, lines: [Number], verdict: String }],
}
```

## 10. Spec examples

Shipped spec: `ltParabolaCircle` in `pages/functions/basics/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `parabolaCircle` | basics obj3 | vertical | contrast | concept |

## 12. Renderer requirements

Default export `renderLineTest(spec)` → SVG string. Pure string building, no
React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each crossing lies on both its line and the curve.
- [ ] Pass/fail colour matches the crossing counts.
- [ ] Verdicts fit under their panels.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
