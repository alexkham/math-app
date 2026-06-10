# ParametricSequenceExplorer

Reusable shell for exploring parametric integer sequences (arithmetic, geometric, and similar). One component, many sequences, five modes.

## Files

```
ParametricSequenceExplorer.jsx   the component
parametricSequences.js           registry of sequence descriptors
```

The component imports `processContent` from a project-local utility for KaTeX rendering; adjust the import path to match the host project.

## Usage

```jsx
<ParametricSequenceExplorer />                       {/* defaults to arithmetic */}
<ParametricSequenceExplorer name="arithmetic" />
<ParametricSequenceExplorer name="geometric" />
```

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `name` | string | `"arithmetic"` | Initial sequence key. Must match a key in the `parametricSequences` map. Unknown values fall back to `"arithmetic"`. |

The user can switch sequences via the picker in the header. `name` only seeds the initial selection.

## Modes

Five tabs:

- **List first N** — first N terms plus their sum.
- **List a – b** — terms with index in `[a, b]`.
- **Test a number** — is `m` in the sequence, and at what index.
- **Lookup by index** — single term at position `n`.
- **Solver** — solve relations between the sequence&apos;s parameters and terms.

## Built-in sequences

| Key | Notation | Parameters | Solver modes |
|---|---|---|---|
| `arithmetic` | aₙ = a₁ + (n−1)·d | a₁, d | Find term, Sum Sₙ |
| `geometric`  | aₙ = a₁·rⁿ⁻¹       | a₁, r | Find term, Sum Sₙ, Infinite sum |

## Adding a parametric sequence

Add an export to `parametricSequences.js` and register it in the default-exported map.

### Descriptor shape

```js
export const mySeq = {
  // ---- identity ----
  name: 'My sequence',
  memberLabel: 'in this sequence',
  notation: 'a',
  formulaDisplay: (<>a<sub>n</sub> = ...</>),
  meta: 'parametric \u00b7 closed form',

  // ---- parameters (REQUIRED for this explorer) ----
  parameters: [
    { key: 'a1', label: 'First term a\u2081',  defaultValue: '2' },
    { key: 'd',  label: 'Common difference d', defaultValue: '3' },
  ],

  // ---- math (each gets `params` as second arg) ----
  getTerm: (n, p) => /* ... */,
  isMember: (m, p) => /* index or null */,
  nearestNeighbors: (m, p) => ({ low, high }) /* optional */,

  // ---- initial UI state ----
  initialInputs: { browse, rangeFrom, rangeTo, member, lookup },

  // ---- caps (optional, default 200) ----
  maxBrowseCount: 500,
  maxRangeSpan: 500,

  // ---- side-panel content for base modes ----
  modeExplanations: {
    browse:  { theory, renderWalkthrough: (result, params) => '...' },
    range:   { theory, renderWalkthrough },
    member:  { theory, renderWalkthrough },
    lookup:  { theory, renderWalkthrough },
  },

  // ---- solver modes (REQUIRED for the Solver tab) ----
  solverModes: [
    {
      id: 'term',
      label: 'Find term',
      intro: 'Short user-facing explanation of the relation.',
      defaultSolveFor: 'an',                        // key from `fields`
      fields: [
        { key: 'a1', label: (<>a<sub>1</sub></>) },
        { key: 'd',  label: 'd' },
        { key: 'n',  label: 'n' },
        { key: 'an', label: (<>a<sub>n</sub></>) },
      ],
      compute: (filled, solveFor, params) => /* value or { error } */,
      renderResult: (value, filled, solveFor) => /* JSX */,
      theory: '...',
      renderWalkthrough: (value, filled, solveFor, params) => '...',
    },
    // additional solver modes...
  ],
};
```

### Contract notes

- **`getTerm`, `isMember`, `nearestNeighbors`** all receive `params` as the second argument (the current applied parameter values).
- **`isMember`** returns an index (1-based) if `m` is in the sequence, otherwise `null` (or `undefined`).
- **`solverModes`** is an array. If it contains one entry, no sub-selector renders. If it contains multiple, a pill selector appears at the top of the Solver pane.
- **Solver `compute`** receives an object with all `filled` values (everything except the field being solved for), plus the `solveFor` key. Return a value, or `{ error: 'message' }` for invalid cases. The current applied `params` are also passed as third argument, but most solver relations are self-contained and ignore them.
- **`fields[].label`** can be either a string or JSX (so subscripts work).

## Parameter strip

Renders between the header and the tabs whenever `parameters` is non-empty. Each parameter is a numeric input. `Apply` commits the draft values and recomputes all four base modes; pressing Enter inside any parameter field does the same.

## Walkthrough access to params

The base modes&apos; `renderWalkthrough` receives `(result, params)` so it can substitute actual parameter values into displayed formulas. The solver&apos;s `renderWalkthrough` receives `(value, filled, solveFor, params)`; the solver fields are independent from the global parameters, but the params are available for context.

## Hydration

The component gates its main render behind a mount flag. Server-side and initial client render both produce an empty `.se-placeholder` div with the layout&apos;s reserved height. The real UI mounts in a client-only `useEffect`, making hydration mismatches structurally impossible.

## Styling

All styles live in a `SE_STYLES` template literal injected as an inline `<style>` block. Theme is driven by CSS custom properties (`--ms-header-bg`, `--ms-accent`, `--ms-card`, etc.) with hardcoded fallbacks. Override at the host stylesheet level.