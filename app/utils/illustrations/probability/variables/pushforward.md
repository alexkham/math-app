# pushforward

Package doc for `pushforward.js`. Written with the renderer, 2026-10-11, for
`/probability/random-variables`; prototype approved by the owner the same day
(demos in `session-docs/demos/illustrations/probability/pushforward/`). The
probability figure registry had listed it as "demos approved; renderer not
built" with no demo files; a fresh prototype was made.

---

## 1. Scope

| kind | Shows |
|---|---|
| `map-and-stack` | the sample space as chips in an Ω box; an arrow from each outcome down to its value on a number line; each outcome lands as one block on the stack above its value, so the stack heights are the PMF of X |

Spec variants of the same kind cover the registry's other scene names:
`highlight` marks the event {X ∈ A} and its preimage (event-as-preimage);
values {0, 1} give an indicator.

**Out of scope.** Equally likely outcomes on a 6×6 dice grid — `outcomeGrid`.
Continuous variables — no stacks to draw.

## 2. Palette

The page theme.

| Role | Hex | Used for |
|---|---|---|
| f / fFill | `#2563EB` / `#DCE8FD` | chips and blocks |
| r / rFill | `#B45309` / `#F5D9B8` | highlighted chips, arrows and blocks |
| g | `#06357A` | Ω box and label |
| text / muted / axis | `#1E3A5F` / `#64748B` / `#94A3B8` | labels / ticks / arrows and axis |

## 3. Primitives

Ω box · outcome chip · arrow (cubic, drawn behind the chips) · stack block ·
mass label under each value · axis with integer ticks · axis label · notes ·
caption.

## 4. Critical implementation notes

1. Arrows are drawn before the chips, so arrows from the top row pass behind
   the second row.
2. Mass labels are `n/N` (blocks over outcomes) unless `massLabel(v, n)` is
   given; outcomes are taken as equally likely.
3. The axis has integer ticks from `range[0]` to `range[1]`.

## 5. Style tokens

Chip 64 × 26, block 28 × 14. Fonts `fsChip 12`, `fsNote 12`, `fsCaption 13`,
`fsTick 12`.

## 6. Coordinate model

Figure 480 wide; Ω box centred at the top (y = 30); axis from x = 60 to 360,
150 px below the box; notes centred under the axis.

## 7. Layout rules

- Up to 4 chips per row (`perRow`), labels up to about 5 characters.
- Stacks of up to about 8 blocks fit between the box and the axis.

## 8. Topic-specific specification language

`kind: 'map-and-stack'`, `outcomes [{label, value}]`, `range [min, max]`,
`perRow`, `omegaLabel`, `axisLabel`, `highlight {test(value)}`,
`massLabel(v, n)`, `notes [{text, color}]`, plus `svgTitle, style, caption,
height`.

## 9. Spec schema

See §8.

## 10. Spec examples

Demo specs in the demos folder (headsMap, preimage); shipped spec on
`/probability/random-variables`.

## 11. Scene catalog

| Scene | Page · section | Variant | Job |
|---|---|---|---|
| heads map | random-variables · definition | plain | structure |

## 12. Renderer requirements

Default export `renderPushforward(spec)` → SVG string. Pure string building,
no React, no DOM. Unknown `kind` throws, naming rule 11.
