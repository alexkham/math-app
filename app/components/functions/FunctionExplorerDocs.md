# FunctionExplorer

Generic, expression-driven function explorer.

---

## Data flow (the important part)

You pass **one thing**: an expression string like `"0.1x^2 - 2"`.

Everything the Explorer displays &mdash; family label, domain, range, roots, extrema, symmetry, continuity, asymptotes, monotonicity intervals, concavity intervals, sign chart, boundedness, injectivity, first and second derivative formulas, numerical antiderivative, insight cards, theory-reading list &mdash; is computed **internally** from that single expression.

```
initialExpression (string, one prop)
        \u2193
   math.js parser  \u2192  AST + numeric f(x)
        \u2193
   buildPipeline(expression)  \u2192  data object
        \u2193
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   \u2502                                                     \u2502
   VisualizerCore (graph)          16 accordion panels        InsightsStrip
   receives: functions array       each receives: data prop   receives: data
```

No props for individual aspect values. No adapter to feed the panels. The math pipeline is the single source of truth.

**What `buildPipeline` does with the expression:**

- **Parses** with `math.parse(expression)` &rarr; AST.
- **Compiles** to a numeric function `f(x)`.
- **Symbolic differentiation** via `mathjs.derivative` &rarr; formulas for `f'(x)` and `f''(x)`, both as strings and as numeric functions.
- **Numeric solvers** run over the visible viewport:
  - `findRoots`         &rarr; zeros of `f`.
  - `findExtrema`       &rarr; sign changes of numeric `f'`.
  - `findInflections`   &rarr; sign changes of numeric `f''`.
  - `findVerticalAsymptotes` &rarr; jump/discontinuity detection.
- **Sampling passes** derive:
  - `domain`, `range`, missing points &rarr; from where `f(x)` is finite.
  - `parity` &rarr; samples of `f(x)` vs `f(-x)` and `-f(-x)`.
  - `sign` intervals &rarr; from roots + sample signs.
  - `mono` intervals &rarr; from extrema + local slope signs.
  - `concavity` intervals &rarr; from inflections + local `f''` signs.
- **Family detection** &rarr; walks the AST looking for `sin/cos/exp/log/sqrt/^n` patterns and picks a label (Quadratic, Cubic, Trigonometric, Rational, etc.).
- **End behavior** &rarr; evaluates `f(xMin*10)` and `f(xMax*10)`.

All results are packed into one `data` object and passed to every panel.

---

## Install

```bash
npm i mathjs
```

Files (all in one folder, e.g. `components/FunctionExplorer/`):

```
FunctionExplorer.jsx
ExplorerAtoms.jsx
ExplorerPanels.jsx
VisualizerCore.jsx     \u2190 your existing engine
```

Fonts: Geist and Geist Mono must be loaded on the page.

---

## Basic usage

```jsx
import { FunctionExplorer } from '@/components/FunctionExplorer/FunctionExplorer';

export default function Page() {
  return <FunctionExplorer initialExpression="0.1x^2 - 2" />;
}
```

The user can edit the expression in the funcbar; pressing Enter or blurring the input re-runs the pipeline and re-renders every panel and the graph.

---

## Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `initialExpression` | string | `"0.1x^2 - 2"` | Starting expression. User can edit it in the funcbar. |
| `width` | string \| number | `'100%'` | Shell width. |
| `height` | number | `820` | Shell height. Capped at `calc(100vh - 40px)`. |

That&apos;s the entire external API in v1. Everything else lives in the internal state hook `useExplorerState` (toggles, cursor, viewport, pinned insights, active tab, density, view mode).

---

## Expression syntax

Anything math.js can parse. Examples:

| Expression | Detected family |
|---|---|
| `0.1x^2 - 2` | Quadratic |
| `2x + 1` | Linear |
| `x^3 - 3x` | Cubic |
| `2sin(x) + x/4` | Trigonometric |
| `(x^2 - 1) / (x - 3)` | Rational |
| `sqrt(x + 4)` | Radical |
| `exp(-x^2)` | Exponential |
| `log(x)` or `ln(x)` | Logarithmic |
| `abs(x - 2)` | Absolute value |

- Implicit multiplication supported (`2x`, `3sin(x)`).
- Use `^` for exponents, not `**`.
- If parsing fails, `data.error` is set. The graph shows `parse error: ...` and panels fall back to placeholders.

---

## What the user interacts with

**Funcbar (top)** &mdash; expression input, family label (auto-detected), Compare and Animate buttons (stubs in v1).

**Left rail &mdash; overlays** (extra curves on the graph):
- `f'` &mdash; derivative curve
- `f''` &mdash; second derivative
- `F` &mdash; antiderivative (numeric cumulative integral over the viewport)
- `f\u207B\u00B9` &mdash; inverse (stub in v1; not drawn)

**Left rail &mdash; marks** (annotations on `f`):
- Roots, extrema, inflection points, vertical asymptotes &mdash; drawn by the engine&apos;s built-in special-point rendering.
- Tangent at cursor &mdash; engine&apos;s `tangentAt` prop; follows the cursor x.
- Shaded area &mdash; engine&apos;s `shadedRegions`; hardcoded to `[-3, 3]` in v1 (edit in `FunctionExplorer.jsx` &rarr; `engineAnnotations`).

**View switch (above graph)** &mdash; Graph / Table / Mapping-diagram views of the same function.

**Right tabs**
- **Properties** &mdash; 10 aspect panels: About, Domain &amp; Range, Zeros/Sign, Symmetry, Continuity, Asymptotes, Monotonicity, Concavity, Boundedness, Invertibility.
- **Transformations &amp; ops** &mdash; parent/transforms (visual sketch), operations (mention + link).
- **Calculus bridge** &mdash; first &amp; second derivative, antiderivative + interval integral, tangent line.
- **Theory &amp; reading** &mdash; curated reading list; wire the routes to your real pages.

**Insights strip (below graph)**
- Five family-default cards computed from `data` (domain, roots, first extremum, symmetry, continuity).
- User-pinned cards on the right of the divider (dashed border, blue tint). Picker is a stub in v1.

**Status bar (bottom)** &mdash; cursor coordinates, current viewport, mode label.

---

## The pipeline output (what every panel receives as `data`)

```ts
{
  expression:    string;                                   // raw input
  formula:       string;                                   // math.js pretty-print
  family:        string;                                   // "Quadratic" etc.

  fn:            (x: number) =&gt; number;                    // numeric f(x)
  fnPrime:       (x: number) =&gt; number;                    // numeric f'(x)
  fnDoublePrime: (x: number) =&gt; number;                    // numeric f''(x)
  derivStr:      string;                                   // symbolic f'(x)
  deriv2Str:     string;                                   // symbolic f''(x)

  domain:        string;                                   // "\u211D" or "\u211D \\ {...}"
  range:         string;                                   // "[lo, hi]" or "unbounded"
  codomain:      string;                                   // "\u211D" in v1
  parity:        'even' | 'odd' | 'neither';

  roots:         number[];
  extrema:       { x, y, kind: 'min' | 'max' }[];
  inflections:   { x, y }[];
  asymptotes:    number[];                                 // vertical asymptote x-coords
  yIntercept:    number | null;

  sign:          { from, to, sign: '+' | '-' | 'undef' }[];
  mono:          { from, to, dir: 'inc' | 'dec' | 'const' | 'undef' }[];
  concavity:     { from, to, kind: 'up' | 'down' | 'flat' | 'undef' }[];

  bounded:       boolean;
  bounds:        { lo, hi, bounded };

  continuous:    boolean;
  farLeft:       number | null;   // f(x) as x \u2192 -\u221E, or null if diverges to infinity
  farRight:      number | null;

  injective:     boolean;

  xMin: number;
  xMax: number;

  error?:        string;          // only present if parsing failed
}
```

Panels destructure whatever they need. No panel receives values from outside this shape.

---

## Numeric solver settings

Defined in `FunctionExplorer.jsx`; scoped to the current viewport.

| Solver | Samples | Notes |
|---|---|---|
| `findRoots` | 600 | Bisection after sign-change detection. Tolerance 1e-7. |
| `findExtrema` | 400 | Bisection on numerical `f'`. |
| `findInflections` | 400 | Sign changes of numerical `f''`. |
| `findVerticalAsymptotes` | 800 | Jump &gt; 1e4 or NaN transitions. |

Sample counts scale with viewport width, not domain size. Increase for fine detail; decrease for performance.

---

## Design tokens

Exported from `FunctionExplorer.jsx` as `T`:

```jsx
import { T } from './FunctionExplorer';
// T.bg.panel, T.c.blue, T.text.strong, T.font.mono, T.radius.md, T.shadow.s2, ...
```

Blue + slate. No chemical colors. No theming prop in v1 &mdash; edit the `T` object to retheme.

Also exported: `EXPLORER_STYLES`, the deep-merge style override passed to `VisualizerCore`. Edit to restyle the graph.

---

## Extension points

**Add a Properties-tab panel:**
1. Write `MyPanel({ data })` in `ExplorerPanels.jsx` using `Accordion`, `PropRow`, `LinkChip`.
2. Import and mount it inside the `properties` case in `FunctionExplorer.jsx`.

**Add a left-rail toggle:**
1. Add the key to the `overlays` or `annotations` initial object in `useExplorerState`.
2. Add a `RailToggle` in `LeftRail` (`ExplorerAtoms.jsx`).
3. Wire it into `engineFunctions` or `engineAnnotations` in `FunctionExplorer.jsx`.

**Add a new tab:**
1. Add to `RightTabs` (`ExplorerAtoms.jsx`) and to `titleFor` / `subtitleFor` (`FunctionExplorer.jsx`).
2. Add a render case for it in `RightPanel`.

**Change family-default insight cards:** edit `defaultInsightsFor(data)` in `FunctionExplorer.jsx`.

**Change the reading list:** edit `items` in `TheoryReadingList` (`ExplorerPanels.jsx`).

**Compute a new aspect:** add to `buildPipeline`; the new field flows automatically to every panel via `data`.

---

## Known limitations (v1)

- Inverse overlay (`f\u207B\u00B9`) &mdash; toggle exists but doesn&apos;t draw. Needs a reflected-relation renderer in the engine or a per-family symbolic inverse.
- Antiderivative `F(x)` &mdash; numeric, viewport-scoped. Re-samples when the viewport changes.
- Compare, Animate &mdash; stubs.
- Insights `+` picker &mdash; stub.
- Multi-function support (Add function) &mdash; not exposed in v1; expression input is the only input.
- Parent &amp; Transformations panel &mdash; static sketch; no symbolic decomposition.
- Form switcher (standard/vertex/factored) &mdash; dropped from v1; only meaningful per family.
- Cursor updates only if the engine emits hover events with `{x, y}`; otherwise stays at initial `(2.34, -1.45)`.
- **Untested**. Expect bugs on first run: engine prop-name mismatches, math.js edge cases with unusual expressions, JSX escaping quirks. Fix as they come up.

---

## Dependency graph

```
FunctionExplorer.jsx
  \u251C\u2500 imports mathjs (external)
  \u251C\u2500 imports VisualizerCore   (./VisualizerCore)
  \u251C\u2500 imports ExplorerAtoms    (./ExplorerAtoms)
  \u2514\u2500 imports ExplorerPanels   (./ExplorerPanels)

ExplorerAtoms.jsx
  \u2514\u2500 imports T (design tokens) from FunctionExplorer.jsx

ExplorerPanels.jsx
  \u251C\u2500 imports T from FunctionExplorer.jsx
  \u2514\u2500 imports atoms from ExplorerAtoms
```

Tokens (`T`) are a plain object constant at the top of `FunctionExplorer.jsx`, so the reverse import from the other two files doesn&apos;t cause a real cycle.