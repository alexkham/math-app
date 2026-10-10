# outcomeGrid

Package doc for `outcomeGrid.js`. Written with the renderer, 2026-10-09, for
the `/probability/axioms` page (Axiom 3, additivity for disjoint events);
prototype approved by the owner the same day.

---

## 1. Scope

| kind | Shows |
|---|---|
| `dice` | the 36 equally likely outcomes of two dice as a 6 × 6 grid (first die = row, second die = column); up to three events coloured on it; cells in two events split diagonally and outlined; an optional condition greys out every cell outside it |

Counts beside the grid ("6 of 36 outcomes") are computed from the event
predicates; with a condition they are counted inside it ("2 of 6").

**Out of scope.** The dice tool's own frames (`diceSampleSpaceDiagrams`:
none, sum7, doubles, even) — harvest those when one event is enough. Areas
proportional to probability (unequal outcomes) — that is the proposed
`joint-rectangle`, not this grid.

## 2. Palette

The **page theme** (`$meta.palette.$pageTheme` in the probability figure
registry), as defaults.

| Role | Hex | Used for |
|---|---|---|
| f / fFill | `#2563EB` / `#DBEAFE` | first event colour |
| r / rFill | `#B45309` / `#FDF3E3` | second event colour |
| g / gFill | `#06357A` / `#E0E7F1` | third event colour, outline of shared cells |
| off | `#F1F5F9` | cells outside the condition |
| text / muted / grid / axis | `#1E3A5F` / `#64748B` / `#E2E8F0` / `#94A3B8` | labels / axis titles / cell borders / greyed labels |

## 3. Primitives

Cell · event fill · split fill for shared cells · outline · row and column
headings · legend swatch with computed count · condition swatch · notes ·
caption.

## 4. Critical implementation notes

1. Never type counts into a spec: the legend reads them off the predicates.
2. Only the first two events of a shared cell are drawn in its split; a cell
   in all three keeps the navy outline.

## 5. Style tokens

`wEvent 1.6`, `wBoth 2`. Fonts `fsHead 12`, `fsCell 11`, `fsLegend 12`,
`fsCaption 13`.

## 6. Coordinate model

Cells 40 px from (70, 56); legend column from x = 334; figure 480 × `height`
(default 376).

## 7. Layout rules

- Legend lines are about 17 characters wide before they reach the edge; keep
  event labels and notes short.
- Captions up to about 65 characters fit.

## 8. Topic-specific specification language

`kind: 'dice'`, `events [{label, test(a, b), color: 'f'|'r'|'g'}]`,
`condition {label, test(a, b)}`, `notes [{text, color}]`, plus
`svgTitle, style, caption, height`.

## 9. Spec schema

See §8.

## 10. Spec examples

Shipped spec: `ogDisjoint` in `pages/probability/axioms/index.jsx`.

## 11. Scene catalog

| Scene | Page · section | Kind | Job | Origin |
|---|---|---|---|---|
| disjoint events add | axioms · axiom3 | dice | quantity | concept |

## 12. Renderer requirements

Default export `renderOutcomeGrid(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.
