# functionPlot.v2

Package doc for `functionPlot.v2.js`. Written with the renderer, 2026-10-03,
for the `/functions/domain` page (Finding Domain: Combined Functions). Chains
`functionPlot.js` under process v10 rule 11; that file is not edited.

---

## 1. Scope

| kind | Shows |
|---|---|
| `domainOpen` | number lines built from segments whose ends are closed (filled dot), open (hollow dot) or unbounded (arrowhead); the last row is the result, drawn thicker; a legend tells included from excluded |

For closed-ended number lines and the graph kinds, use `functionPlot.js`.

## 2. Palette

The same page-theme defaults as `functionPlot` (copied into the file): row
colours `f` `#2563EB`, `g` `#06357A`, `r` `#B45309`; text `#1E3A5F`, muted
`#64748B`, axis `#94A3B8`.

## 3. Primitives

Number line with ticks · segment bar · filled end · hollow end · arrowhead ·
row label · row tag · tick numbers (last row) · two-item legend · caption.

## 4. Critical implementation notes

1. A segment is `[a, b, aOpen, bOpen]`; `null` for an end means unbounded.
2. Bars stop 7 px short of an open end so the hollow dot reads as a gap.
3. An endpoint shared by two segments gets one dot, as at x = 3 in
   (−∞, 3) ∪ (3, ∞).

## 5. Style tokens

`wLine 5`, `wResult 7`, `rEnd 6`, `wOpen 2.4`, `rowGap 60`. Fonts `fsLabel 12`,
`fsTag 12`, `fsResultTag 13`, `fsTick 11`, `fsLegend 11`, `fsCaption 13`.

## 6. Coordinate model

x from `range[0]` to `range[1]` mapped onto 70 → 470 px; rows 60 px apart from
y = 60.

## 7. Layout rules

- Keep each row label and its tag apart on x; long labels reach about x = 300.
- Captions up to about 65 characters fit the 520 px width.

## 8. Topic-specific specification language

`range [lo, hi]`, `rows [{label, color 'f'|'g'|'r', segs [[a, b, aOpen, bOpen]], tag {text, x}}]`,
`includedNote`, `excludedNote`, plus `svgTitle, style, caption`.

## 9. Spec schema

See §8.

## 10. Spec examples

Shipped spec: `fpCombinedDomain` in `pages/functions/domain/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| `combinedDomain` | domain obj8 | domainOpen | structure | concept |

## 12. Renderer requirements

Default export `renderFunctionPlotV2(spec)` → SVG string. Pure string
building, no React, no DOM. Unknown `kind` throws, naming rule 11.

## 13. Validation checklist

- [ ] Each end's style (closed / open / unbounded) matches the inequality.
- [ ] The result row equals the intersection of the rows above it.
- [ ] Page-theme colours.
- [ ] The figure carries its claim with the frame panel covered up.
