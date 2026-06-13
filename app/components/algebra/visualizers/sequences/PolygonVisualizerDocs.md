<!-- # SequenceExplorer

Reusable shell for exploring integer sequences. One component, many sequences, four modes.

## Files

```
SequenceExplorer.jsx   the component
sequences.js           registry of sequence descriptors
primes.js              precomputed first 10,000 primes
```

`SequenceExplorer.jsx` imports `processContent` from a project-local utility for KaTeX rendering of math in the side panel; adjust the import path to match the host project.

## Usage

```jsx
<SequenceExplorer />                       {/* defaults to triangular */}
<SequenceExplorer name="fibonacci" />      {/* initial sequence */}
<SequenceExplorer name="primes" />
```

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `name` | string | `"triangular"` | Initial sequence key. Must match a key in the `sequences` map. Unknown values fall back to `"triangular"`. |

The user can switch sequences in-component via the picker in the header. `name` only seeds the initial selection.

## Modes

The shell exposes four modes as tabs:

- **List first N** — first N terms plus their sum.
- **List a – b** — terms with index in `[a, b]`.
- **Test a number** — is `m` in the sequence, and at what index.
- **Lookup by index** — single term at position `n`.

## Built-in sequences

| Key | Notation | Backing | Index limit |
|---|---|---|---|
| `triangular` | T | closed form | unbounded |
| `fibonacci` | F | BigInt recurrence | `maxBrowseCount: 100`, lookup unbounded |
| `primes` | p | precomputed array | first 10,000 primes (max value 104,729) |

## Adding a new sequence

Add an export to `sequences.js` and include it in the default-exported map.

### Descriptor shape

```js
export const mySequence = {
  // ---- identity ----
  name: 'My sequence',                          // shown in title and picker
  memberLabel: 'a my-sequence number',          // used in alert text
  notation: 'M',                                // single letter for M_n
  formulaDisplay: (<>M<sub>n</sub> = ...</>),   // JSX in the header subtitle
  meta: 'closed form \u00b7 unbounded',         // optional tagline

  // ---- math ----
  getTerm: (n) => /* compute M_n */,
  isMember: (m) => /* return index if m is in sequence, else null */,
  nearestNeighbors: (m) => ({                   // optional; used in walkthrough
    low:  { index, value },
    high: { index, value },
  }),

  // ---- initial UI state ----
  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo:   '15',
    member:    '...',
    lookup:    '...',
  },

  // ---- optional caps (default 200 each) ----
  maxBrowseCount: 200,
  maxRangeSpan:   200,

  // ---- BigInt sequences only ----
  zero: 0n,                                     // sum identity; default 0

  // ---- side-panel content ----
  modeExplanations: {
    browse: {
      theory: '...markdown+LaTeX...',
      renderWalkthrough: (result) => '...markdown+LaTeX...',
    },
    range:  { theory, renderWalkthrough },
    member: { theory, renderWalkthrough },
    lookup: { theory, renderWalkthrough },
  },
};
```

Theory and walkthrough strings are passed to `processContent` and rendered as markdown with inline `$...$` and display `$$...$$` LaTeX.

### `isMember` contract

- Returns a positive integer: `m` is in the sequence at that 1-based index.
- Returns `null` (or `undefined`): `m` is not in the sequence (or cannot be determined; see Primes note below).

### `nearestNeighbors` contract

Optional. Called only when `isMember` returns null. Should return `{ low, high }` where each side has `{ index, value }`. Return `null` to skip neighbor display.

## BigInt sequences

A sequence whose `getTerm` returns `BigInt` must set `zero: 0n` so summation in the shell starts from a BigInt zero. The shell&apos;s `fmt` already handles BigInt values for display. Member-test inputs are parsed via `parseInt`, so input values above `Number.MAX_SAFE_INTEGER` are imprecise at the input stage.

## Hydration

The component gates its main render behind a mount flag. Server-side rendering and the first client render both produce an empty `.se-placeholder` div with the layout&apos;s reserved height. The real UI mounts in a client-only `useEffect`. This makes hydration mismatches structurally impossible at the cost of one repaint after mount.

## Styling

All styles live in a `SE_STYLES` template literal injected as an inline `<style>` block. Theme is driven by CSS custom properties (`--ms-header-bg`, `--ms-accent`, `--ms-card`, etc.) with hardcoded fallbacks. Override at the host stylesheet level.

## Known limits

- **Fibonacci browse cap** is 100 by default — F<sub>200</sub> has 43 digits and the grid becomes unreadable beyond that. Adjust per-descriptor.
- **Primes membership** is bounded by the precomputed list. For `m > 104,729` the explorer reports out-of-range in the walkthrough rather than guessing.
- **Parametric sequences** (arithmetic, geometric) are not supported by this shell. They need a parameter-input strip and a 5th solver mode and will be a separate explorer variant. -->



# SequenceExplorer

Reusable shell for exploring integer sequences. One component, many sequences, four modes.

## Files

```
SequenceExplorer.jsx   the component
sequences.js           registry of sequence descriptors
primes.js              precomputed first 10,000 primes
```

`SequenceExplorer.jsx` imports `processContent` from a project-local utility for KaTeX rendering of math in the side panel; adjust the import path to match the host project.

## Usage

```jsx
<SequenceExplorer />                       {/* defaults to triangular */}
<SequenceExplorer name="square" />
<SequenceExplorer name="pentagonal" />
<SequenceExplorer name="hexagonal" />
<SequenceExplorer name="heptagonal" />
<SequenceExplorer name="octagonal" />
<SequenceExplorer name="tetrahedral" />
<SequenceExplorer name="fibonacci" />
<SequenceExplorer name="primes" />
```

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `name` | string | `"triangular"` | Initial sequence key. Must match a key in the `sequences` map. Unknown values fall back to `"triangular"`. |

The user can switch sequences in-component via the picker in the header. `name` only seeds the initial selection.

## Modes

The shell exposes four modes as tabs:

- **List first N** — first N terms plus their sum.
- **List a – b** — terms with index in `[a, b]`.
- **Test a number** — is `m` in the sequence, and at what index.
- **Lookup by index** — single term at position `n`.

## Built-in sequences

| Key | Notation | Backing | Index limit |
|---|---|---|---|
| `triangular` | T | closed form | unbounded |
| `square` | S | closed form | unbounded |
| `pentagonal` | P | closed form | unbounded |
| `hexagonal` | H | closed form | unbounded |
| `heptagonal` | Hp | closed form | unbounded |
| `octagonal` | O | closed form | unbounded |
| `tetrahedral` | Te | closed form | unbounded |
| `fibonacci` | F | BigInt recurrence | `maxBrowseCount: 100`, lookup unbounded |
| `primes` | p | precomputed array | first 10,000 primes (max value 104,729) |

## Adding a new sequence

Add an export to `sequences.js` and include it in the default-exported map.

### Descriptor shape

```js
export const mySequence = {
  // ---- identity ----
  name: 'My sequence',                          // shown in title and picker
  memberLabel: 'a my-sequence number',          // used in alert text
  notation: 'M',                                // single letter for M_n
  formulaDisplay: (<>M<sub>n</sub> = ...</>),   // JSX in the header subtitle
  meta: 'closed form \u00b7 unbounded',         // optional tagline

  // ---- math ----
  getTerm: (n) => /* compute M_n */,
  isMember: (m) => /* return index if m is in sequence, else null */,
  nearestNeighbors: (m) => ({                   // optional; used in walkthrough
    low:  { index, value },
    high: { index, value },
  }),

  // ---- initial UI state ----
  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo:   '15',
    member:    '...',
    lookup:    '...',
  },

  // ---- optional caps (default 200 each) ----
  maxBrowseCount: 200,
  maxRangeSpan:   200,

  // ---- BigInt sequences only ----
  zero: 0n,                                     // sum identity; default 0

  // ---- side-panel content ----
  modeExplanations: {
    browse: {
      theory: '...markdown+LaTeX...',
      renderWalkthrough: (result) => '...markdown+LaTeX...',
    },
    range:  { theory, renderWalkthrough },
    member: { theory, renderWalkthrough },
    lookup: { theory, renderWalkthrough },
  },
};
```

Theory and walkthrough strings are passed to `processContent` and rendered as markdown with inline `$...$` and display `$$...$$` LaTeX.

### `isMember` contract

- Returns a positive integer: `m` is in the sequence at that 1-based index.
- Returns `null` (or `undefined`): `m` is not in the sequence (or cannot be determined; see Primes note below).

### `nearestNeighbors` contract

Optional. Called only when `isMember` returns null. Should return `{ low, high }` where each side has `{ index, value }`. Return `null` to skip neighbor display.

## Membership-test mechanics

Each sequence determines membership differently:

- **Triangular**: $m$ is triangular iff $8m+1$ is a perfect square.
- **Square**: $m$ is square iff $\sqrt{m}$ is a positive integer.
- **Pentagonal**: $m$ is pentagonal iff $24m+1$ is a perfect square and $1 + \sqrt{24m+1}$ is divisible by $6$. The index is $n = \dfrac{1 + \sqrt{24m+1}}{6}$.
- **Hexagonal**: $m$ is hexagonal iff $8m+1$ is a perfect square and $1 + \sqrt{8m+1}$ is divisible by $4$. The index is $n = \dfrac{1 + \sqrt{8m+1}}{4}$. (Every hexagonal number is triangular; the divisibility check rules out the triangular numbers that are not hexagonal.)
- **Heptagonal**: $m$ is heptagonal iff $40m+9$ is a perfect square and $3 + \sqrt{40m+9}$ is divisible by $10$. The index is $n = \dfrac{3 + \sqrt{40m+9}}{10}$.
- **Octagonal**: $m$ is octagonal iff $3m+1$ is a perfect square and $1 + \sqrt{3m+1}$ is divisible by $3$. The index is $n = \dfrac{1 + \sqrt{3m+1}}{3}$.
- **Tetrahedral**: no clean closed-form inverse. Estimate $n \approx \sqrt[3]{6m}$ and verify $\mathrm{Te}_k = m$ for $k$ near the estimate.
- **Fibonacci**: $m$ is Fibonacci iff $5m^2 + 4$ or $5m^2 - 4$ is a perfect square (Gessel, 1972). Then iterate the recurrence to find the index.
- **Primes**: hash-set lookup against the precomputed list; out of range above $104{,}729$.

## BigInt sequences

A sequence whose `getTerm` returns `BigInt` must set `zero: 0n` so summation in the shell starts from a BigInt zero. The shell&apos;s `fmt` already handles BigInt values for display. Member-test inputs are parsed via `parseInt`, so input values above `Number.MAX_SAFE_INTEGER` are imprecise at the input stage.

## Hydration

The component gates its main render behind a mount flag. Server-side rendering and the first client render both produce an empty `.se-placeholder` div with the layout&apos;s reserved height. The real UI mounts in a client-only `useEffect`. This makes hydration mismatches structurally impossible at the cost of one repaint after mount.

## Styling

All styles live in a `SE_STYLES` template literal injected as an inline `<style>` block via `dangerouslySetInnerHTML` (apostrophes inside CSS values would otherwise be HTML-escaped on the server and cause a hydration mismatch). Theme is driven by CSS custom properties (`--ms-header-bg`, `--ms-accent`, `--ms-card`, etc.) with hardcoded fallbacks. Override at the host stylesheet level.

## Known limits

- **Fibonacci browse cap** is 100 by default — F<sub>200</sub> has 43 digits and the grid becomes unreadable beyond that. Adjust per-descriptor.
- **Primes membership** is bounded by the precomputed list. For `m > 104,729` the explorer reports out-of-range in the walkthrough rather than guessing.
- **Parametric sequences** (arithmetic, geometric) are not supported by this shell. They need a parameter-input strip and a 5th solver mode and use a separate explorer variant.