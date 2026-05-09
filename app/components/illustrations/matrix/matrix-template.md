# MatrixTemplate — Usage Guide

A single-file React component for rendering matrix illustrations as inline SVG. Renders any of 19 named scenes (display, addition, multiplication, transpose, factorization, etc.) with theming, highlights, connectors, and color-coded cells.

---

## Contents

1. [What it is](#1-what-it-is)
2. [Installation](#2-installation)
3. [Quick start](#3-quick-start)
4. [The two APIs](#4-the-two-apis)
5. [Scene catalog](#5-scene-catalog)
6. [Spec schema (full reference)](#6-spec-schema-full-reference)
7. [Highlight system](#7-highlight-system)
8. [Color roles](#8-color-roles)
9. [Bracket styles](#9-bracket-styles)
10. [Theming](#10-theming)
11. [Sizing](#11-sizing)
12. [Connectors (advanced)](#12-connectors-advanced)
13. [Recipes](#13-recipes)
14. [Troubleshooting](#14-troubleshooting)

---

## 1. What it is

`MatrixTemplate` is a self-contained React component (~1000 lines, no dependencies beyond React) that renders matrix illustrations as inline SVG. You give it either a scene name + matrix data, or a full spec object describing what to draw.

Key facts:
- **Output:** inline SVG that scales fluidly to its container
- **Imports:** just React
- **Files:** one `.jsx` file. That's it
- **Theming:** via CSS custom properties (with hardcoded fallbacks)
- **Highlighting:** cells, rows, columns, diagonals, triangles, symmetric pairs
- **Bracket styles:** `[ ]` (default), `| |`, `( )`

---

## 2. Installation

Drop `MatrixTemplate.v3.jsx` (rename if you like) into your project. Import it:

```jsx
import MatrixTemplate from './path/to/MatrixTemplate.v3';
```

It exports both as default and as a named export:

```jsx
import { MatrixTemplate } from './path/to/MatrixTemplate.v3';
```

---

## 3. Quick start

The simplest possible call: render a 2×2 matrix.

```jsx
import MatrixTemplate from './MatrixTemplate.v3';

function Demo() {
  const A = [[1, 2], [3, 4]];
  return <MatrixTemplate scene="display" content={{ A, name: 'A', showDim: true }} />;
}
```

Render multiplication with auto-highlighted row/column and connector arrows:

```jsx
function MultDemo() {
  const A = [[1, 2], [3, 4]];
  const B = [[5, 6], [7, 8]];
  const result = [[19, 22], [43, 50]];
  return <MatrixTemplate scene="multiplication" content={{ A, B, result }} />;
}
```

---

## 4. The two APIs

`MatrixTemplate` accepts these props:

| Prop      | Type       | Required | Description |
|-----------|------------|----------|-------------|
| `scene`   | string     | one of   | A named scene from the catalog (see §5) |
| `content` | object     | with `scene` | The data the scene needs |
| `spec`    | object     | one of   | A full spec — bypass scenes entirely (see §6) |
| `width`   | number     | no       | Max rendered width in px (defaults to natural size) |

You must pass either `scene + content` **or** `spec`. If both are given, `spec` wins.

### Scene API (recommended)

Use a preset:

```jsx
<MatrixTemplate scene="addition" content={{ A, B, result }} />
```

The scene knows what matrices to show, what operators sit between them, what to highlight, and what connectors to draw. You only provide the data.

### Spec API (advanced)

Skip the scene presets and pass a complete spec describing exactly what to render:

```jsx
<MatrixTemplate spec={{
  matrices: [
    { name: 'A', data: [[1, 2], [3, 4]], showDimension: true },
  ],
  caption: 'A 2×2 example',
}} />
```

This is what scene builders return internally. Use it when no preset fits or when you want full control.

---

## 5. Scene catalog

All 19 scenes, alphabetically. Every `content` field is shown with its type and default (if any).

### `display`

A single matrix.

```jsx
<MatrixTemplate scene="display" content={{
  A: [[1, 2], [3, 4]],
  name: 'A',         // default: 'A'
  showDim: true,     // default: false
}} />
```

---

### `addition`

Three matrices: `A + B = C`.

```jsx
<MatrixTemplate scene="addition" content={{
  A: [[1, 2], [3, 4]],
  B: [[5, 6], [7, 8]],
  result: [[6, 8], [10, 12]],
  names: ['A', 'B', 'C'],   // default: ['A', 'B', 'C']
}} />
```

---

### `subtraction`

Same as addition but with a `−` operator.

```jsx
<MatrixTemplate scene="subtraction" content={{
  A: [[5, 6], [7, 8]],
  B: [[1, 2], [3, 4]],
  result: [[4, 4], [4, 4]],
}} />
```

---

### `scalarMultiplication`

A matrix multiplied by a scalar: `A → kA`.

```jsx
<MatrixTemplate scene="scalarMultiplication" content={{
  A: [[1, 2], [3, 4]],
  result: [[2, 4], [6, 8]],
  scalar: 2,
  name: 'A',   // default: 'A'
}} />
```

---

### `multiplication`

`A × B = C` with row/column highlights and connector arrows showing how `cell[i][j]` is computed.

```jsx
<MatrixTemplate scene="multiplication" content={{
  A: [[1, 2], [3, 4]],
  B: [[5, 6], [7, 8]],
  result: [[19, 22], [43, 50]],
  highlight: {
    rowOfA: 0,                  // default: 0
    colOfB: 1,                  // default: last col of B
    resultCell: [0, 1],         // default: [rowOfA, colOfB]
    caption: '1·6 + 2·8',       // optional
  },
}} />
```

If you omit `highlight` entirely, defaults give you row 0 of A × last column of B → top-right cell.

---

### `transpose`

`A → Aᵀ` with paired-color highlight on a row of A and the corresponding column of Aᵀ.

```jsx
<MatrixTemplate scene="transpose" content={{
  A: [[1, 2, 3], [4, 5, 6]],
  transposed: [[1, 4], [2, 5], [3, 6]],
  highlightRow: 0,   // default: 0
}} />
```

---

### `identity`

Identity matrix `Iₙ` with the diagonal highlighted. Auto-generated from `n`.

```jsx
<MatrixTemplate scene="identity" content={{ n: 4 }} />
```

---

### `diagonal`

Diagonal matrix from a list of values.

```jsx
<MatrixTemplate scene="diagonal" content={{
  values: [3, 5, 7],
  name: 'D',   // default: 'D'
}} />
```

---

### `rowOperation`

Show a Gaussian-elimination step: `A → A'`.

```jsx
<MatrixTemplate scene="rowOperation" content={{
  before: [[1, 2, 3], [2, 5, 8], [3, 7, 11]],
  after:  [[1, 2, 3], [0, 1, 2], [3, 7, 11]],
  opLabel: 'R₂ ← R₂ − 2·R₁',
  sourceRow: 0,    // optional, highlighted blue in `before`
  targetRow: 1,    // optional, highlighted teal in `before`, amber in `after`
}} />
```

---

### `determinant`

Boxed determinant `|A|` with a scalar result. Uses pipe brackets automatically.

```jsx
<MatrixTemplate scene="determinant" content={{
  A: [[1, 2], [3, 4]],
  value: -2,
  equation: '1·4 − 2·3',   // optional caption under the value
}} />
```

---

### `inversePair`

`A · A⁻¹ = I`.

```jsx
<MatrixTemplate scene="inversePair" content={{
  A: [[1, 2], [3, 4]],
  inverse: [[-2, 1], [1.5, -0.5]],
  n: 2,
}} />
```

---

### `augmented`

Augmented matrix `[A | b]` with a column divider.

```jsx
<MatrixTemplate scene="augmented" content={{
  A: [[1, 2, 3], [4, 5, 6]],
  b: [7, 8],                  // m-vector OR
  // b: [[7], [8]],           // m×1 column matrix, both work
  name: '[A | b]',            // default: '[A | b]'
}} />
```

---

### `luFactorization`

`A = L · U` with lower-triangle highlight on L and upper-triangle highlight on U.

```jsx
<MatrixTemplate scene="luFactorization" content={{
  A: [[4, 3], [6, 3]],
  L: [[1, 0], [1.5, 1]],
  U: [[4, 3], [0, -1.5]],
}} />
```

---

### `symmetric`

A symmetric matrix `S = Sᵀ` with mirrored-pair highlights and a diagonal axis.

```jsx
<MatrixTemplate scene="symmetric" content={{
  S: [[1, 2, 3], [2, 4, 5], [3, 5, 6]],
  pairs: [[0, 1], [0, 2], [1, 2]],   // optional; defaults to all upper-Δ pairs
  name: 'S',                          // default: 'S'
}} />
```

---

### `upperTriangular`

```jsx
<MatrixTemplate scene="upperTriangular" content={{
  U: [[1, 2, 3], [0, 4, 5], [0, 0, 6]],
  strict: false,   // if true, excludes the diagonal
  name: 'U',
}} />
```

---

### `lowerTriangular`

```jsx
<MatrixTemplate scene="lowerTriangular" content={{
  L: [[1, 0, 0], [2, 3, 0], [4, 5, 6]],
  strict: false,
  name: 'L',
}} />
```

---

### `banded`

Banded (e.g. tridiagonal) with each band a different color.

```jsx
<MatrixTemplate scene="banded" content={{
  T: [[2, 1, 0, 0], [1, 2, 1, 0], [0, 1, 2, 1], [0, 0, 1, 2]],
  bands: [-1, 0, 1],   // diagonal offsets; default [-1, 0, 1] = tridiagonal
  name: 'T',
}} />
```

---

### `sparse`

Zero entries dimmed to 30% opacity.

```jsx
<MatrixTemplate scene="sparse" content={{
  M: [[1, 0, 0, 0], [0, 0, 2, 0], [0, 0, 0, 0], [0, 3, 0, 0]],
  name: 'M',
}} />
```

---

### `trace`

`A` with diagonal highlighted, scalar result `tr(A)` to the right.

```jsx
<MatrixTemplate scene="trace" content={{
  A: [[1, 2], [3, 4]],
  value: 5,
  equation: 'tr(A)',   // default: 'tr(A)'
}} />
```

---

## 6. Spec schema (full reference)

When you pass `spec={...}` directly, here's everything it accepts.

### Top-level spec

```js
{
  matrices: Matrix[],                  // required
  operators: Operator[],               // optional, length === matrices.length - 1
  connectors: Connector[],             // optional
  scalarResult: ScalarResult,          // optional, drawn after the last matrix
  caption: string,                     // optional, drawn at the bottom
  cellSize: 'sm' | 'md' | 'lg' | 'auto', // default 'auto'
  relation: string,                    // metadata only, not rendered
}
```

### Matrix

```js
{
  data: (number | string)[][],         // required, rectangular
  name: string,                        // optional, drawn above
  showDimension: boolean,              // optional, "m × n" below
  bracketStyle: 'square' | 'pipes' | 'parens',  // default 'square'
  highlights: Highlight[],             // optional, see §7
  dividers: Divider[],                 // optional, vertical lines
  dimZero: boolean,                    // optional, dims zero entries to 30%
}
```

### Operator

Either a string (the symbol) or an object:

```js
'+'                                    // shorthand
{ symbol: '×', sublabel: 'transpose' } // operator with a tiny label below it
```

### Connector

Curved arrow from one matrix to another:

```js
{
  from: ConnectorEnd,
  to: ConnectorEnd,
  color: ColorRole,                    // optional, default 'result'
  style: 'solid' | 'dashed',           // optional, default 'dashed'
}
```

### ConnectorEnd

Identifies a point on a matrix:

```js
{ matrix: 0, cell: [r, c] }            // a specific cell (top edge anchor)
{ matrix: 0, row: r }                  // right edge of the row
{ matrix: 0, col: c }                  // top edge of the column
{ matrix: 0 }                          // top-center of the matrix
```

### ScalarResult

```js
{
  value: number | string,
  precedingOperator: string,           // optional, default '='
  caption: string,                     // optional, small label below
}
```

### Divider

```js
{
  afterCol: number,                    // 0-indexed column
  style: 'solid' | 'dashed',           // optional, default solid
}
```

---

## 7. Highlight system

Highlights are color overlays on matrix cells. Each matrix can have any number. They evaluate top-to-bottom — first match wins per cell.

```js
{
  target: HighlightTarget,
  color: ColorRole,                    // see §8
  caption: string,                     // optional, drawn below the matrix
}
```

### Target kinds

**Single cell:**

```js
{ kind: 'cell', row: 1, col: 2 }
```

**Whole row:**

```js
{ kind: 'row', index: 0 }
```

**Whole column:**

```js
{ kind: 'col', index: 1 }
```

**Diagonal** (with optional offset; 0 = main, +1 = superdiagonal, −1 = subdiagonal):

```js
{ kind: 'diagonal' }
{ kind: 'diagonal', offset: 1 }
```

**Upper triangle** (with optional `strict` to exclude the diagonal):

```js
{ kind: 'upper-triangle' }
{ kind: 'upper-triangle', strict: true }
```

**Lower triangle:**

```js
{ kind: 'lower-triangle' }
{ kind: 'lower-triangle', strict: true }
```

**Symmetric pairs** (mirrored pairs of cells):

```js
{ kind: 'symmetric-pairs', pairs: [[0, 1], [0, 2], [1, 2]], showAxis: true }
```

`showAxis: true` adds a faint dashed line along the main diagonal.

---

## 8. Color roles

Six built-in roles. Use them in `highlights[].color`, `connectors[].color`, etc.

| Role          | Hue       | Default use case |
|---------------|-----------|------------------|
| `neutral`     | grey      | unhighlighted cells (default background) |
| `activeRow`   | blue      | "the row being acted on" |
| `activeCol`   | coral/red | "the column being acted on" |
| `result`      | amber     | "the output" or "the diagonal" |
| `transformed` | teal      | "before/after" pairs, transposes |
| `alt`         | purple    | secondary highlights |

You can mix freely — the multiplication scene uses `activeRow` + `activeCol` + `result` together.

---

## 9. Bracket styles

Set per-matrix via `bracketStyle`:

**Square (default)** — `[ ]`, hooks point inward toward the cells:

```js
{ data: [[1, 2], [3, 4]], bracketStyle: 'square' }
```

**Pipes** — `| |`, plain vertical lines (used automatically by determinant):

```js
{ data: [[1, 2], [3, 4]], bracketStyle: 'pipes' }
```

**Parens** — `( )`, round parentheses:

```js
{ data: [[1, 2], [3, 4]], bracketStyle: 'parens' }
```

---

## 10. Theming

The component reads five CSS custom properties (with built-in fallbacks). Set them on a parent element to theme:

```css
.my-illustration {
  --ill-cell-bg: #FAFAF6;
  --ill-cell-stroke: #D4D4CC;
  --ill-text-primary: #1A1A18;
  --ill-text-secondary: #5A5A55;
  --ill-text-tertiary: #8A8A85;
}
```

```jsx
<div className="my-illustration">
  <MatrixTemplate scene="addition" content={...} />
</div>
```

Only the **neutral** (unhighlighted) cell uses these vars. Highlight colors are hardcoded hex values chosen to read in both light and dark surroundings — they don't change with theme.

For dark mode, override the vars in your dark theme:

```css
@media (prefers-color-scheme: dark) {
  .my-illustration {
    --ill-cell-bg: #1F1F1D;
    --ill-cell-stroke: #3A3A35;
    --ill-text-primary: #E8E8E5;
    --ill-text-secondary: #A8A8A2;
    --ill-text-tertiary: #787872;
  }
}
```

---

## 11. Sizing

The component picks a cell size automatically based on the largest matrix in the scene:

- `≤ 4` rows or columns → `md` (44×30 px cells)
- `> 4` → `sm` (36×24 px cells)

Override with `spec.cellSize`:

```jsx
<MatrixTemplate spec={{
  cellSize: 'lg',                       // 'sm' | 'md' | 'lg' | 'auto' (default)
  matrices: [{ data: [[1, 2], [3, 4]] }],
}} />
```

The SVG renders at its natural size by default but scales to fill its container. Cap the rendered width with the `width` prop:

```jsx
<MatrixTemplate scene="multiplication" content={...} width={500} />
```

---

## 12. Connectors (advanced)

Connectors draw curved arrows between points on different matrices. The multiplication scene uses two connectors automatically. To add your own:

```jsx
<MatrixTemplate spec={{
  matrices: [
    { name: 'A', data: [[1, 2], [3, 4]] },
    { name: 'A²', data: [[7, 10], [15, 22]] },
  ],
  operators: [{ symbol: '→', sublabel: 'square' }],
  connectors: [
    {
      from: { matrix: 0, cell: [0, 0] },
      to: { matrix: 1, cell: [0, 0] },
      color: 'transformed',
      style: 'dashed',
    },
  ],
}} />
```

Connectors lift upward (a Bézier curve arching above the matrices). They're drawn last, so they sit on top of cells and brackets.

---

## 13. Recipes

### Two scenes side by side

Wrap them in any container:

```jsx
<div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
  <MatrixTemplate scene="addition" content={addContent} />
  <MatrixTemplate scene="subtraction" content={subContent} />
</div>
```

### Custom highlight on top of a scene

The scene API gives you a spec; if you need to tweak it, use the spec API instead and copy the structure from `matrixScenes` if needed. Or just use spec from scratch:

```jsx
<MatrixTemplate spec={{
  matrices: [{
    name: 'A',
    data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    highlights: [
      { target: { kind: 'diagonal' }, color: 'result' },
      { target: { kind: 'cell', row: 0, col: 2 }, color: 'alt' },
      { target: { kind: 'cell', row: 2, col: 0 }, color: 'alt' },
    ],
  }],
  caption: 'main diagonal + corners',
}} />
```

### Block matrix with multiple dividers

```jsx
<MatrixTemplate spec={{
  matrices: [{
    name: 'M',
    data: [
      [1, 2, 0, 0],
      [3, 4, 0, 0],
      [0, 0, 5, 6],
      [0, 0, 7, 8],
    ],
    dividers: [{ afterCol: 1, style: 'dashed' }],
  }],
  caption: 'block-diagonal structure',
}} />
```

### Generating large matrices programmatically

```jsx
function bigIdentity(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}

<MatrixTemplate scene="display" content={{
  A: bigIdentity(8),
  name: 'I₈',
}} />
```

For the identity case specifically, just use the `identity` scene which auto-builds the data:

```jsx
<MatrixTemplate scene="identity" content={{ n: 8 }} />
```

---

## 14. Troubleshooting

**`ReferenceError: A is not defined`**

You're passing `{ A, B, result }` without defining those variables. Define them first:

```jsx
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
const result = [[19, 22], [43, 50]];
return <MatrixTemplate scene="multiplication" content={{ A, B, result }} />;
```

**Brackets pointing the wrong way**

You're on v1 (or v2 of the original split-file version) where the square bracket geometry was inverted. Use v3.

**`MatrixTemplate: unknown scene 'foo'`**

Scene name typo. Names are case-sensitive: `multiplication` not `Multiplication`, `luFactorization` not `lu_factorization`.

**Highlights not showing**

Check that the `color` is one of the six valid roles (§8). An unknown role will throw later at render time when the palette lookup returns undefined.

**Cell values look wrong after symmetric or upper/lower-triangle highlight**

The first matching highlight wins per cell. If you list `{ diagonal }` after `{ upper-triangle }`, the upper-triangle covers the diagonal and the diagonal highlight never fires. Reorder so more-specific targets come first.

**Matrices look stretched / overflow the container**

By default the SVG fills 100% width up to its natural size. Constrain with `width={px}` on the component, or set `max-width` on a parent.

**Empty/invisible output**

Either `spec` is `null` or `matrices` is `[]`. Check your data is loaded before the component mounts, and that scene names match exactly.