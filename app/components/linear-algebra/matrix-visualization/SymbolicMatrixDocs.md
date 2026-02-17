# SymbolicMatrix Component Library

A React component library for visualizing linear algebra operations using symbolic notation. Designed for educational tools where abstract mathematical patterns matter more than specific numeric values.

---

## Table of Contents

1. [Installation](#installation)
2. [Quick Start](#quick-start)
3. [Components](#components)
   - [SymbolicMatrix](#symbolicmatrix)
   - [Operator](#operator)
   - [Formula](#formula)
4. [Utility Functions](#utility-functions)
5. [Examples](#examples)
6. [Styling Guide](#styling-guide)
7. [Building Visualizations](#building-visualizations)

---

## Installation

Place `SymbolicMatrix.jsx` in your components directory and import what you need:

```jsx
import { 
  SymbolicMatrix, 
  Operator, 
  Formula,
  identityOverrides,
  numericOverrides,
  multiplicationFormula,
  cellByCellSequence
} from '@/components/SymbolicMatrix';
```

**Requirements:**
- React 18+
- No external dependencies (pure React with inline styles)

---

## Quick Start

```jsx
// Basic symbolic matrix
<SymbolicMatrix symbol="a" rows={3} cols={3} label="A" />

// Matrix equation: A × B = C
<SymbolicMatrix symbol="a" rows={2} cols={3} label="A" />
<Operator symbol="×" />
<SymbolicMatrix symbol="b" rows={3} cols={2} label="B" />
<Operator symbol="=" />
<SymbolicMatrix symbol="c" rows={2} cols={2} label="C" />

// With highlighting
<SymbolicMatrix
  symbol="a"
  rows={3}
  cols={3}
  highlightRows={[0]}
  highlightCells={[[1, 2]]}
  highlightStyle={{ bg: '#dbeafe', border: '#3b82f6' }}
/>
```

---

## Components

### SymbolicMatrix

The core component. Renders a matrix with symbolic notation (a₁₁, a₁₂, etc.) and supports highlighting, animation, and interaction.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **Data** ||||
| `symbol` | string | `'a'` | Base symbol for elements (e.g., 'a', 'b', 'x', 'λ') |
| `rows` | number | `3` | Number of rows |
| `cols` | number | `3` | Number of columns |
| `transpose` | boolean | `false` | Display as transposed (swaps row/col in rendering) |
| `label` | string | `''` | Label above matrix (e.g., 'A', 'B⁻¹') |
| `cellOverrides` | object | `{}` | Override specific cell displays (see below) |
| **Static Highlights** ||||
| `highlightCells` | array | `[]` | Cells to highlight: `[[0,1], [2,2]]` |
| `highlightRows` | array | `[]` | Rows to highlight: `[0, 2]` |
| `highlightCols` | array | `[]` | Columns to highlight: `[1]` |
| `highlightDiagonal` | boolean | `false` | Highlight main diagonal |
| `highlightStyle` | object | `{bg:'#dbeafe', border:'#3b82f6'}` | Colors for primary highlight |
| **Secondary Highlights** ||||
| `secondaryHighlightCells` | array | `[]` | Cells for secondary color |
| `secondaryHighlightRows` | array | `[]` | Rows for secondary color |
| `secondaryHighlightCols` | array | `[]` | Columns for secondary color |
| `secondaryHighlightStyle` | object | `{bg:'#fef3c7', border:'#f59e0b'}` | Colors for secondary highlight |
| **Animation** ||||
| `animationSequence` | array | `[]` | Array of animation steps (see below) |
| `animationPlaying` | boolean | `false` | Start/stop animation |
| `animationSpeed` | number | `1` | Speed multiplier (2 = twice as fast) |
| `animationLoop` | boolean | `false` | Loop animation continuously |
| `onAnimationStep` | function | `null` | Callback: `(stepIndex, stepData) => {}` |
| `onAnimationComplete` | function | `null` | Callback when animation ends |
| **Interaction** ||||
| `onCellHover` | function | `null` | Callback: `(i, j) => {}` when cell hovered |
| `onCellLeave` | function | `null` | Callback when mouse leaves cell |
| `onCellClick` | function | `null` | Callback: `(i, j) => {}` when cell clicked |
| `hoverable` | boolean | `true` | Enable/disable hover effects |
| **Styling** ||||
| `bracketColor` | string | `'#6b7280'` | Color of brackets |
| `bracketType` | string | `'square'` | `'square'`, `'round'`, or `'bars'` (determinant) |
| `cellSize` | number\|string | `'auto'` | Cell size in px, or 'auto' |
| `fontSize` | number\|string | `'auto'` | Font size in px, or 'auto' |
| `showDimensions` | boolean | `true` | Show "3×3" below label |
| `dimStartAt` | number | `1` | Subscripts start at 0 or 1 |

#### Cell Overrides

Override specific cells with custom display values:

```jsx
<SymbolicMatrix
  symbol="a"
  rows={3}
  cols={3}
  cellOverrides={{
    '0,0': { display: '1' },           // Show "1" instead of "a₁₁"
    '0,1': { display: '0' },           // Show "0"
    '1,1': { display: 'λ' },           // Show "λ"
    '2,2': { display: 'a₃₃ - λ', style: { color: 'red' } }  // With custom style
  }}
/>
```

Keys are `'row,col'` using 0-based indices. Each value can have:
- `display`: string to show (required)
- `style`: additional CSS styles (optional)

#### Animation Sequence

Each step in the sequence can highlight cells, rows, and/or columns:

```jsx
const sequence = [
  { cells: [[0, 0]], duration: 500 },           // Highlight single cell
  { cells: [[0, 1], [0, 2]], duration: 500 },   // Multiple cells
  { rows: [1], duration: 700 },                  // Entire row
  { cols: [0, 2], duration: 700 },               // Multiple columns
  { rows: [2], cols: [1], duration: 600 },       // Row AND column (intersection)
];

<SymbolicMatrix
  animationSequence={sequence}
  animationPlaying={isPlaying}
  animationSpeed={1.5}
  onAnimationStep={(idx, step) => console.log(`Step ${idx}`, step)}
  onAnimationComplete={() => setIsPlaying(false)}
/>
```

#### Special Cases

The component automatically handles:

| Configuration | Result |
|---------------|--------|
| `rows={3}, cols={1}` | Column vector |
| `rows={1}, cols={4}` | Row vector |
| `rows={1}, cols={1}` | Scalar |
| `transpose={true}` | Displays transposed, reports original indices in callbacks |

---

### Operator

Renders mathematical operator symbols.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `symbol` | string | `'×'` | Operator to display |
| `size` | number | `20` | Font size in px |
| `color` | string | `'#6b7280'` | Color |
| `style` | object | `{}` | Additional CSS |

#### Available Symbols

| Input | Renders |
|-------|---------|
| `'×'` | × |
| `'*'` | · |
| `'+'` | + |
| `'-'` | − |
| `'='` | = |
| `'->'` | → |
| `'=>'` | ⇒ |
| `'T'` | ᵀ |
| `'\|'` | \| |
| Any other | Passed through as-is |

```jsx
<Operator symbol="×" size={24} color="#1e40af" />
```

---

### Formula

Renders symbolic mathematical formulas with subscripts and superscripts.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `parts` | array | `[]` | Array of formula parts |
| `size` | number | `15` | Font size in px |
| `style` | object | `{}` | Additional CSS |

#### Parts Array

Each element in `parts` can be:

```jsx
// Symbol with subscript and/or superscript
{ sym: 'a', sub: '1,2', sup: '2' }  // Renders: a₁,₂²

// Operator
{ op: '+' }   // Renders: +
{ op: '·' }   // Renders: ·
{ op: '=' }   // Renders: =

// Plain text
{ text: ' where ' }  // Renders as-is, no italic
```

#### Example

```jsx
// Render: c₁,₂ = a₁,₁·b₁,₂ + a₁,₂·b₂,₂ + a₁,₃·b₃,₂
<Formula
  parts={[
    { sym: 'c', sub: '1,2' },
    { op: '=' },
    { sym: 'a', sub: '1,1' },
    { op: '·' },
    { sym: 'b', sub: '1,2' },
    { op: '+' },
    { sym: 'a', sub: '1,2' },
    { op: '·' },
    { sym: 'b', sub: '2,2' },
    { op: '+' },
    { sym: 'a', sub: '1,3' },
    { op: '·' },
    { sym: 'b', sub: '3,2' },
  ]}
  size={16}
/>
```

---

## Utility Functions

### Matrix Override Generators

#### `identityOverrides(n)`

Generates cell overrides for an n×n identity matrix.

```jsx
identityOverrides(3)
// Returns:
// {
//   '0,0': { display: '1' }, '0,1': { display: '0' }, '0,2': { display: '0' },
//   '1,0': { display: '0' }, '1,1': { display: '1' }, '1,2': { display: '0' },
//   '2,0': { display: '0' }, '2,1': { display: '0' }, '2,2': { display: '1' },
// }

<SymbolicMatrix
  rows={3}
  cols={3}
  label="I"
  cellOverrides={identityOverrides(3)}
  highlightDiagonal={true}
/>
```

#### `zeroOverrides(rows, cols)`

Generates cell overrides for a zero matrix.

```jsx
<SymbolicMatrix
  rows={2}
  cols={3}
  label="O"
  cellOverrides={zeroOverrides(2, 3)}
/>
```

#### `numericOverrides(matrix)`

Converts a 2D numeric array to cell overrides.

```jsx
const A = [
  [1, 2, 3],
  [4, 5, 6],
];

<SymbolicMatrix
  rows={2}
  cols={3}
  label="A"
  cellOverrides={numericOverrides(A)}
/>
```

---

### Animation Sequence Generators

#### `cellByCellSequence(rows, cols, duration)`

Creates animation that traverses cells in row-major order.

```jsx
const seq = cellByCellSequence(3, 3, 400);
// Returns: [
//   { cells: [[0,0]], duration: 400 },
//   { cells: [[0,1]], duration: 400 },
//   { cells: [[0,2]], duration: 400 },
//   { cells: [[1,0]], duration: 400 },
//   ... (9 steps total)
// ]
```

#### `rowByRowSequence(rows, duration)`

Creates animation that highlights one row at a time.

```jsx
const seq = rowByRowSequence(3, 600);
// Returns: [
//   { rows: [0], duration: 600 },
//   { rows: [1], duration: 600 },
//   { rows: [2], duration: 600 },
// ]
```

#### `colByColSequence(cols, duration)`

Creates animation that highlights one column at a time.

```jsx
const seq = colByColSequence(4, 500);
// Returns: [
//   { cols: [0], duration: 500 },
//   { cols: [1], duration: 500 },
//   { cols: [2], duration: 500 },
//   { cols: [3], duration: 500 },
// ]
```

#### `diagonalSequence(n, duration)`

Creates animation that builds up the diagonal progressively.

```jsx
const seq = diagonalSequence(3, 500);
// Returns: [
//   { cells: [[0,0]], duration: 500 },
//   { cells: [[0,0], [1,1]], duration: 500 },
//   { cells: [[0,0], [1,1], [2,2]], duration: 500 },
// ]
```

---

### Formula Generators

#### `multiplicationFormula(i, j, innerDim, symA, symB, symC)`

Generates formula parts for matrix multiplication element cᵢⱼ.

```jsx
const parts = multiplicationFormula(1, 2, 3, 'a', 'b', 'c');
// Renders: c₁,₂ = a₁,₁·b₁,₂ + a₁,₂·b₂,₂ + a₁,₃·b₃,₂

<Formula parts={parts} size={16} />
```

**Parameters:**
- `i`, `j`: Row and column of result element (1-based for display)
- `innerDim`: Shared dimension (cols of A = rows of B)
- `symA`, `symB`, `symC`: Symbols for matrices A, B, C

#### `dotProductFormula(dim, symA, symB)`

Generates formula parts for dot product of two vectors.

```jsx
const parts = dotProductFormula(3, 'u', 'v');
// Renders: u₁·v₁ + u₂·v₂ + u₃·v₃

<Formula parts={parts} size={16} />
```

---

## Examples

### 1. Matrix Transpose Visualization

```jsx
function TransposeDemo() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <SymbolicMatrix
        symbol="a"
        rows={2}
        cols={3}
        label="A"
        onCellHover={(i, j) => setHovered([i, j])}
        onCellLeave={() => setHovered(null)}
        highlightCells={hovered ? [hovered] : []}
        bracketColor="#1e40af"
      />
      
      <Operator symbol="->" size={24} />
      
      <SymbolicMatrix
        symbol="a"
        rows={2}
        cols={3}
        transpose={true}
        label="A"
        highlightCells={hovered ? [[hovered[1], hovered[0]]] : []}
        bracketColor="#7c3aed"
      />
      
      {hovered && (
        <div>
          <Formula parts={[
            { sym: 'a', sub: `${hovered[0]+1},${hovered[1]+1}` },
            { text: ' ↔ ' },
            { sym: 'a', sub: `${hovered[1]+1},${hovered[0]+1}` },
          ]} />
        </div>
      )}
    </div>
  );
}
```

### 2. Matrix Multiplication with Hover

```jsx
function MultiplicationDemo() {
  const [hovered, setHovered] = useState(null);
  const rowsA = 3, colsA = 3, colsB = 2;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <SymbolicMatrix
          symbol="a"
          rows={rowsA}
          cols={colsA}
          label="A"
          highlightRows={hovered ? [hovered[0]] : []}
          bracketColor="#1e40af"
        />
        
        <Operator symbol="×" />
        
        <SymbolicMatrix
          symbol="b"
          rows={colsA}
          cols={colsB}
          label="B"
          highlightCols={hovered ? [hovered[1]] : []}
          bracketColor="#b45309"
        />
        
        <Operator symbol="=" />
        
        <SymbolicMatrix
          symbol="c"
          rows={rowsA}
          cols={colsB}
          label="C"
          onCellHover={(i, j) => setHovered([i, j])}
          onCellLeave={() => setHovered(null)}
          highlightCells={hovered ? [hovered] : []}
          highlightStyle={{ bg: '#dcfce7', border: '#16a34a' }}
          bracketColor="#16a34a"
        />
      </div>
      
      {hovered && (
        <div style={{ marginTop: 16 }}>
          <Formula 
            parts={multiplicationFormula(hovered[0]+1, hovered[1]+1, colsA)} 
            size={16} 
          />
        </div>
      )}
    </div>
  );
}
```

### 3. Determinant with Bars

```jsx
<SymbolicMatrix
  symbol="a"
  rows={3}
  cols={3}
  label="|A|"
  bracketType="bars"
  bracketColor="#be185d"
  showDimensions={false}
/>
```

### 4. Eigenvalue Matrix (A - λI)

```jsx
<SymbolicMatrix
  symbol="a"
  rows={3}
  cols={3}
  label="A - λI"
  cellOverrides={{
    '0,0': { display: 'a₁₁ - λ' },
    '1,1': { display: 'a₂₂ - λ' },
    '2,2': { display: 'a₃₃ - λ' },
  }}
  highlightDiagonal={true}
  highlightStyle={{ bg: '#fef3c7', border: '#f59e0b' }}
/>
```

### 5. Animated Row Operations

```jsx
function RowOperationDemo() {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(-1);

  const sequence = [
    { rows: [0], duration: 800 },                    // Select row 1
    { rows: [0], cols: [0], duration: 600 },         // Pivot position
    { rows: [1], duration: 800 },                    // Move to row 2
    { cells: [[1, 0]], duration: 600 },              // Element to eliminate
    { rows: [0, 1], duration: 1000 },                // Both rows involved
  ];

  return (
    <div>
      <SymbolicMatrix
        symbol="a"
        rows={3}
        cols={4}
        label="[A|b]"
        animationSequence={sequence}
        animationPlaying={playing}
        onAnimationStep={(idx) => setStep(idx)}
        onAnimationComplete={() => { setPlaying(false); setStep(-1); }}
      />
      
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Stop' : 'Play'}
      </button>
      
      <p>Step: {step >= 0 ? step + 1 : '—'}</p>
    </div>
  );
}
```

### 6. Numeric Matrix Display

```jsx
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

<SymbolicMatrix
  rows={3}
  cols={3}
  label="A"
  cellOverrides={numericOverrides(matrix)}
  highlightCells={[[1, 1]]}  // Highlight center element
/>
```

---

## Styling Guide

### Highlight Colors

Recommended color palettes for different highlight purposes:

```jsx
// Primary (default blue)
highlightStyle={{ bg: '#dbeafe', border: '#3b82f6' }}

// Secondary (amber)
secondaryHighlightStyle={{ bg: '#fef3c7', border: '#f59e0b' }}

// Success (green)
{ bg: '#dcfce7', border: '#16a34a' }

// Error/Elimination (red)
{ bg: '#fee2e2', border: '#ef4444' }

// Purple (for special elements)
{ bg: '#ede9fe', border: '#8b5cf6' }

// Pivot (yellow)
{ bg: '#fef08a', border: '#eab308' }
```

### Bracket Colors by Matrix Role

```jsx
// Matrix A (blue)
bracketColor="#1e40af"

// Matrix B (amber)
bracketColor="#b45309"

// Result C (green)
bracketColor="#16a34a"

// Transpose (purple)
bracketColor="#7c3aed"

// Determinant (pink)
bracketColor="#be185d"

// Identity (green)
bracketColor="#16a34a"
```

### Cell Sizing

Auto-sizing based on max dimension:
- 2-3: 52px cells, 15px font
- 4: 46px cells, 13px font
- 5+: 40px cells, 12px font

Override with explicit values:
```jsx
<SymbolicMatrix cellSize={60} fontSize={18} />
```

---

## Building Visualizations

### Architecture Pattern

1. **Wrapper Component**: Manages state, computes highlights, handles user interaction
2. **SymbolicMatrix**: Pure rendering, receives everything via props
3. **Controls**: Play/pause, step forward/back, speed controls
4. **Info Panel**: Shows formulas, explanations, current step details

```jsx
function MyVisualization() {
  // State
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  
  // Compute what to highlight based on current step
  const highlights = useMemo(() => computeHighlights(step), [step]);
  
  // Compute formula to display
  const formula = useMemo(() => computeFormula(step), [step]);

  return (
    <div>
      {/* Matrix display */}
      <SymbolicMatrix
        {...highlights}
        animationPlaying={playing}
        onAnimationStep={setStep}
      />
      
      {/* Formula */}
      <Formula parts={formula} />
      
      {/* Controls */}
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <button onClick={() => setStep(s => s + 1)}>Next</button>
    </div>
  );
}
```

### Connecting Multiple Matrices

Use shared state to coordinate highlights across matrices:

```jsx
function ConnectedMatrices() {
  const [focus, setFocus] = useState(null); // { matrix: 'A', row: 0, col: 1 }

  // When hovering A, highlight corresponding parts of B and C
  const aHighlight = focus?.matrix === 'A' ? [[focus.row, focus.col]] : [];
  const bHighlight = focus?.matrix === 'A' ? [focus.col] : [];  // Column
  
  return (
    <>
      <SymbolicMatrix
        label="A"
        highlightCells={aHighlight}
        onCellHover={(i, j) => setFocus({ matrix: 'A', row: i, col: j })}
        onCellLeave={() => setFocus(null)}
      />
      <SymbolicMatrix
        label="B"
        highlightCols={bHighlight}
      />
    </>
  );
}
```

---

## TypeScript Types (Reference)

If converting to TypeScript:

```typescript
interface HighlightStyle {
  bg: string;
  border: string;
}

interface AnimationStep {
  cells?: [number, number][];
  rows?: number[];
  cols?: number[];
  duration?: number;
}

interface CellOverride {
  display: string;
  style?: React.CSSProperties;
}

interface FormulaPart {
  sym?: string;
  sub?: string;
  sup?: string;
  op?: string;
  text?: string;
}

interface SymbolicMatrixProps {
  symbol?: string;
  rows?: number;
  cols?: number;
  transpose?: boolean;
  label?: string;
  cellOverrides?: Record<string, CellOverride>;
  highlightCells?: [number, number][];
  highlightRows?: number[];
  highlightCols?: number[];
  highlightDiagonal?: boolean;
  highlightStyle?: HighlightStyle;
  secondaryHighlightCells?: [number, number][];
  secondaryHighlightRows?: number[];
  secondaryHighlightCols?: number[];
  secondaryHighlightStyle?: HighlightStyle;
  animationSequence?: AnimationStep[];
  animationPlaying?: boolean;
  animationSpeed?: number;
  animationLoop?: boolean;
  onAnimationStep?: (stepIndex: number, stepData: AnimationStep) => void;
  onAnimationComplete?: () => void;
  onCellHover?: (i: number, j: number) => void;
  onCellLeave?: () => void;
  onCellClick?: (i: number, j: number) => void;
  hoverable?: boolean;
  bracketColor?: string;
  bracketType?: 'square' | 'round' | 'bars';
  cellSize?: number | 'auto';
  fontSize?: number | 'auto';
  showDimensions?: boolean;
  dimStartAt?: number;
}
```

---

## Changelog

### v1.0.0
- Initial release
- SymbolicMatrix component with full prop API
- Operator and Formula components
- Utility functions for overrides and animations