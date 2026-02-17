# UnifiedVennDiagram2 Component Documentation

## Overview

`UnifiedVennDiagram2` is a highly configurable React component for rendering interactive 2-set Venn diagrams with SVG. It supports animations, zoom/pan, responsive sizing, numeric data display, comprehensive styling, and export capabilities.

---

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [Props Reference](#props-reference)
   - [Dimensions & Responsive](#dimensions--responsive)
   - [Universe Configuration](#universe-configuration)
   - [Circle Definitions](#circle-definitions)
   - [Region Definitions](#region-definitions)
   - [Values Display](#values-display)
   - [Animation](#animation)
   - [Zoom & Pan](#zoom--pan)
   - [Labels & Typography](#labels--typography)
   - [Tooltip](#tooltip)
   - [Legend](#legend)
   - [Hover Effects](#hover-effects)
   - [Callbacks](#callbacks)
   - [Styling](#styling)
4. [Ref Methods (Export API)](#ref-methods-export-api)
5. [Pattern Types](#pattern-types)
6. [Examples](#examples)
7. [TypeScript Types](#typescript-types)

---

## Installation

```bash
# The component is a single file, copy it to your project
cp UnifiedVennDiagram2-v2.jsx src/components/
```

Dependencies:
- React 18+ (uses `forwardRef`, `useImperativeHandle`)
- No external dependencies

---

## Basic Usage

```jsx
import UnifiedVennDiagram2 from './UnifiedVennDiagram2-v2';

function App() {
  return (
    <UnifiedVennDiagram2
      width={500}
      height={470}
      showValues={true}
      values={{
        'A-only': 15,
        'B-only': 8,
        'A∩B': 7
      }}
    />
  );
}
```

---

## Props Reference

### Dimensions & Responsive

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `500` | Base width of the SVG canvas in pixels. Used as reference for responsive scaling. |
| `height` | `number` | `470` | Base height of the SVG canvas in pixels. Used as reference for responsive scaling. |
| `responsive` | `boolean` | `false` | When `true`, the component observes its container width and scales proportionally. The component will fill its container's width while maintaining aspect ratio. |
| `aspectRatio` | `number \| null` | `null` | Custom aspect ratio (width/height). If `null`, calculated from `width` and `height` props. Only used when `responsive` is `true`. |
| `minWidth` | `number` | `300` | Minimum width in pixels when in responsive mode. Prevents the diagram from becoming too small. |
| `maxWidth` | `number` | `1200` | Maximum width in pixels when in responsive mode. Prevents the diagram from becoming too large. |

**Responsive Mode Details:**

When `responsive={true}`:
- The component uses a `ResizeObserver` to watch its container
- SVG uses `viewBox` for scaling (vector graphics stay crisp)
- All internal coordinates remain in the original coordinate space
- Export methods return the scaled dimensions

```jsx
// Responsive example - fills container width
<div style={{ width: '100%', maxWidth: 800 }}>
  <UnifiedVennDiagram2
    responsive={true}
    width={500}
    height={470}
    minWidth={350}
    maxWidth={700}
  />
</div>
```

---

### Universe Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showUniverse` | `boolean` | `true` | Whether to render the universal set rectangle outline and label. |
| `universe` | `object` | See below | Configuration object for the universal set rectangle. |

**`universe` object properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fill` | `string` | `'#f9f9f9'` | Background fill color (only affects the outside region default). |
| `stroke` | `string` | `'#cccccc'` | Border stroke color of the rectangle. |
| `strokeWidth` | `number` | `1` | Border stroke width in pixels. |
| `label` | `string` | `'U'` | Text label for the universe (typically "U"). Set to empty string to hide. |
| `labelPosition` | `{x, y}` | `{x: 35, y: 45}` | Position of the universe label in SVG coordinates. |
| `labelFontSize` | `number` | `18` | Font size of the universe label. |
| `labelColor` | `string` | `'#666666'` | Color of the universe label. |
| `margin` | `number` | `10` | Margin between SVG edge and universe rectangle in pixels. |

```jsx
<UnifiedVennDiagram2
  showUniverse={true}
  universe={{
    stroke: '#999999',
    strokeWidth: 2,
    label: 'Universal Set',
    labelPosition: { x: 100, y: 30 },
    labelFontSize: 14,
    margin: 20
  }}
/>
```

---

### Circle Definitions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `circles` | `object` | See below | Defines geometry and labels for circles A and B. |

**`circles` object structure:**

```js
circles = {
  A: {
    cx: 180,              // Center X coordinate
    cy: 200,              // Center Y coordinate
    r: 120,               // Radius
    stroke: '#c0392b',    // Outline color (optional, can use styles)
    strokeWidth: 1,       // Outline width (optional)
    label: 'A',           // Circle label text
    labelPosition: { x: 110, y: 140 }  // Label position
  },
  B: {
    cx: 320,
    cy: 200,
    r: 120,
    stroke: '#2980b9',
    strokeWidth: 1,
    label: 'B',
    labelPosition: { x: 390, y: 140 }
  }
}
```

**Each circle object properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `cx` | `number` | Yes | X coordinate of circle center. |
| `cy` | `number` | Yes | Y coordinate of circle center. |
| `r` | `number` | Yes | Circle radius in pixels. |
| `stroke` | `string` | No | Circle outline color. Falls back to `styles.circles.A/B.stroke`. |
| `strokeWidth` | `number` | No | Circle outline width. Falls back to `styles.circles.A/B.strokeWidth`. |
| `label` | `string` | No | Text label displayed near the circle. |
| `labelPosition` | `{x, y}` | No | Position of the label. Defaults to above the circle. |

**Geometry Tips:**
- Circles must overlap for an intersection region to exist
- The intersection is automatically calculated
- Position circles so the intersection is visually centered

```jsx
// Large overlapping circles
<UnifiedVennDiagram2
  circles={{
    A: { cx: 200, cy: 220, r: 150, label: 'Set A', labelPosition: { x: 100, y: 100 } },
    B: { cx: 350, cy: 220, r: 150, label: 'Set B', labelPosition: { x: 450, y: 100 } }
  }}
/>
```

---

### Region Definitions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `regions` | `object` | See below | Defines styling for each region of the Venn diagram. |

**Available region keys:**
- `'outside'` - Area inside universe but outside both circles (U - A - B)
- `'A-only'` - Area inside A but not B (A - B)
- `'B-only'` - Area inside B but not A (B - A)
- `'A∩B'` - Intersection of A and B

**Each region object properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fill` | `string` | Varies | Base fill color for the region. |
| `opacity` | `number` | Varies | Opacity of the region (0-1). |
| `pattern` | `string` | `'solid'` | Fill pattern type. See [Pattern Types](#pattern-types). |
| `label` | `string` | `''` | Text label displayed in the region center. |
| `labelPosition` | `{x, y}` | Auto | Position of the region label. |
| `tooltip` | `string` | Varies | Tooltip text shown on hover. |
| `stroke` | `string` | `'none'` | Border stroke color for this specific region. |
| `strokeWidth` | `number` | `0` | Border stroke width for this specific region. |
| `strokePattern` | `number[]` | `null` | Dash pattern for region stroke (e.g., `[5, 3]`). |

**Pattern-specific properties (vary by pattern type):**

| Property | Used By | Description |
|----------|---------|-------------|
| `stripeWidth` | stripes, horizontal, vertical | Width of stripes. |
| `stripeSpacing` | stripes, horizontal, vertical | Space between stripes. |
| `stripeColor` | stripes, horizontal, vertical | Color of stripes. |
| `stripeAngle` | stripes | Angle of stripes in degrees. |
| `dotRadius` | dots | Radius of dots. |
| `dotSpacing` | dots | Spacing between dots. |
| `dotColor` | dots | Color of dots. |
| `lineWidth` | crosshatch, grid | Width of lines. |
| `lineSpacing` | crosshatch, grid | Spacing between lines. |
| `lineColor` | crosshatch, grid | Color of lines. |
| `squareSize` | checkerboard | Size of squares. |
| `secondaryColor` | checkerboard | Color of alternating squares. |
| `secondaryOpacity` | checkerboard | Opacity of alternating squares. |

```jsx
<UnifiedVennDiagram2
  regions={{
    'outside': {
      fill: '#f5f5f5',
      opacity: 1,
      tooltip: 'Elements in neither set'
    },
    'A-only': {
      fill: '#e74c3c',
      opacity: 0.7,
      pattern: 'stripes',
      stripeColor: '#ffffff',
      stripeWidth: 2,
      stripeSpacing: 6,
      stripeAngle: 45,
      label: 'A only',
      labelPosition: { x: 120, y: 200 },
      tooltip: 'Elements only in A',
      stroke: '#c0392b',
      strokeWidth: 2
    },
    'B-only': {
      fill: '#3498db',
      opacity: 0.7,
      pattern: 'dots',
      dotColor: '#ffffff',
      dotRadius: 2,
      dotSpacing: 8,
      tooltip: 'Elements only in B'
    },
    'A∩B': {
      fill: '#9b59b6',
      opacity: 0.9,
      pattern: 'crosshatch',
      lineColor: '#ffffff',
      lineWidth: 1,
      lineSpacing: 8,
      label: 'A ∩ B',
      tooltip: 'Elements in both A and B',
      stroke: '#8e44ad',
      strokeWidth: 3,
      strokePattern: [5, 3]
    }
  }}
/>
```

---

### Values Display

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showValues` | `boolean` | `false` | When `true`, displays numeric values inside each region. |
| `values` | `object` | `{}` | Object mapping region keys to their numeric values. |
| `valueFormatter` | `function` | `(v) => String(v)` | Function to format values before display. Receives the raw value, returns a string. |
| `valuePositions` | `object` | `{}` | Optional custom positions for value labels. Falls back to region's `labelPosition`. |

**`values` object structure:**
```js
values = {
  'outside': 100,
  'A-only': 15,
  'B-only': 8,
  'A∩B': 7
}
```

**`valuePositions` object structure:**
```js
valuePositions = {
  'A-only': { x: 130, y: 210 },
  'A∩B': { x: 250, y: 220 }
}
```

**Value styling** is controlled via `styles.values`:

| Property | Default | Description |
|----------|---------|-------------|
| `fontSize` | `16` | Font size of value text. |
| `fontFamily` | `'Arial, sans-serif'` | Font family. |
| `fontWeight` | `'normal'` | Font weight. |
| `color` | `'#ffffff'` | Text color. |
| `backgroundColor` | `'rgba(0,0,0,0.5)'` | Background pill color (set to `null` to disable). |
| `padding` | `4` | Padding inside background pill. |
| `borderRadius` | `4` | Border radius of background pill. |

```jsx
<UnifiedVennDiagram2
  showValues={true}
  values={{
    'A-only': 1523,
    'B-only': 892,
    'A∩B': 347
  }}
  valueFormatter={(v) => v.toLocaleString()}
  valuePositions={{
    'A∩B': { x: 250, y: 220 }
  }}
  styles={{
    values: {
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 6
    }
  }}
/>
```

---

### Animation

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableAnimation` | `boolean` | `false` | Master toggle for all animations. |
| `animationDuration` | `number` | `400` | Duration of animations in milliseconds. |
| `animationEasing` | `string` | `'ease-out'` | Easing function. Options: `'linear'`, `'ease-in'`, `'ease-out'`, `'ease-in-out'`. |
| `animateOnMount` | `boolean` | `true` | Whether to animate when component first mounts. |
| `animateOnChange` | `boolean` | `true` | Whether to animate when props change (reserved for future use). |

**Animation Effects:**
- Fade-in on mount (opacity animates from 0 to target)
- Scale on mount (elements scale from 0.9 to 1)
- Smooth opacity transitions on hover/selection

```jsx
<UnifiedVennDiagram2
  enableAnimation={true}
  animationDuration={600}
  animationEasing="ease-in-out"
  animateOnMount={true}
/>
```

---

### Zoom & Pan

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableZoom` | `boolean` | `false` | Enables mouse wheel zoom. |
| `enablePan` | `boolean` | `false` | Enables click-and-drag panning. |
| `minScale` | `number` | `0.5` | Minimum zoom scale (0.5 = 50%). |
| `maxScale` | `number` | `3` | Maximum zoom scale (3 = 300%). |
| `initialScale` | `number` | `1` | Initial zoom level. |
| `initialPan` | `{x, y}` | `{x: 0, y: 0}` | Initial pan offset. |
| `onViewportChange` | `function \| null` | `null` | Callback fired when zoom or pan changes. Receives `{ scale, pan }`. |

**Zoom Behavior:**
- Mouse wheel up = zoom in
- Mouse wheel down = zoom out
- Zoom centers on mouse position

**Pan Behavior:**
- Click and drag on empty space (not on regions)
- Cursor changes to grab/grabbing

```jsx
const [viewport, setViewport] = useState({ scale: 1, pan: { x: 0, y: 0 } });

<UnifiedVennDiagram2
  enableZoom={true}
  enablePan={true}
  minScale={0.3}
  maxScale={5}
  initialScale={1.5}
  initialPan={{ x: 50, y: 50 }}
  onViewportChange={setViewport}
/>

// Display current viewport
<div>Scale: {viewport.scale.toFixed(2)}</div>
```

---

### Labels & Typography

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `labelFontSize` | `number` | `18` | Default font size for region labels. |
| `labelFontFamily` | `string` | `'Arial, sans-serif'` | Default font family for labels. |
| `labelFontWeight` | `string` | `'bold'` | Default font weight for labels. |
| `labelColor` | `string` | `'#333333'` | Default color for region labels. |
| `circleLabelFontSize` | `number` | `24` | Font size for circle labels (A, B). |
| `circleLabelFontWeight` | `string` | `'bold'` | Font weight for circle labels. |

These are default values. Individual regions can override via their `labelPosition`, or use `styles` for more control.

```jsx
<UnifiedVennDiagram2
  labelFontSize={14}
  labelFontFamily="'Helvetica Neue', sans-serif"
  labelFontWeight="600"
  labelColor="#444444"
  circleLabelFontSize={20}
/>
```

---

### Tooltip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showTooltip` | `boolean` | `true` | Whether to show tooltips on region hover. |

**Tooltip Styling** via `styles.tooltip`:

| Property | Default | Description |
|----------|---------|-------------|
| `background` | `'#333333'` | Tooltip background color. |
| `color` | `'#ffffff'` | Tooltip text color. |
| `padding` | `'8px 12px'` | Tooltip padding. |
| `borderRadius` | `4` | Tooltip border radius. |
| `fontSize` | `14` | Tooltip font size. |
| `fontFamily` | `'Arial, sans-serif'` | Tooltip font family. |

Tooltip content is set per-region via `regions[key].tooltip`.

```jsx
<UnifiedVennDiagram2
  showTooltip={true}
  regions={{
    'A∩B': {
      fill: '#9b59b6',
      opacity: 0.8,
      tooltip: 'Intersection: 347 elements (23%)'
    }
  }}
  styles={{
    tooltip: {
      background: 'rgba(0, 0, 0, 0.9)',
      fontSize: 13,
      borderRadius: 8
    }
  }}
/>
```

---

### Legend

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showLegend` | `boolean` | `true` | Whether to display the legend. |
| `legendPosition` | `string \| {x, y}` | `'bottom'` | Position of the legend. |
| `legendItems` | `array` | See below | Array of legend item definitions. |

**`legendPosition` options (string):**
- `'top'`, `'bottom'`, `'left'`, `'right'`
- `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`
- Or an object: `{ x: 100, y: 400 }` for precise positioning

**`legendItems` array structure:**
```js
legendItems = [
  { key: 'A-only', label: 'Only A' },
  { key: 'B-only', label: 'Only B' },
  { key: 'A∩B', label: 'Intersection' }
]
```

| Property | Type | Description |
|----------|------|-------------|
| `key` | `string` | Must match a region key. |
| `label` | `string` | Display text in the legend. |

**Legend Styling** via `styles.legend`:

| Property | Default | Description |
|----------|---------|-------------|
| `background` | `'rgba(255, 255, 255, 0.95)'` | Legend background. |
| `border` | `'#dddddd'` | Legend border color. |
| `borderRadius` | `6` | Legend border radius. |
| `padding` | `10` | Legend internal padding. |
| `fontSize` | `13` | Legend text size. |
| `fontFamily` | `'Arial, sans-serif'` | Legend font. |
| `color` | `'#333333'` | Legend text color. |

**Legend Interaction:**
- Hovering a legend item highlights the corresponding region
- Clicking a legend item selects/deselects the region

```jsx
<UnifiedVennDiagram2
  showLegend={true}
  legendPosition="top-right"
  legendItems={[
    { key: 'A-only', label: 'Customers with Product A' },
    { key: 'B-only', label: 'Customers with Product B' },
    { key: 'A∩B', label: 'Customers with Both' }
  ]}
/>
```

---

### Hover Effects

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableHover` | `boolean` | `true` | Whether regions respond to hover with visual feedback. |
| `hoverOpacity` | `number` | `0.9` | Opacity of the hovered/selected region. |
| `dimmedOpacity` | `number` | `0.2` | Opacity of non-hovered regions when one is hovered. |

When a region is hovered:
1. That region's opacity increases to `hoverOpacity`
2. All other regions dim to `dimmedOpacity`
3. The tooltip appears (if enabled)

```jsx
<UnifiedVennDiagram2
  enableHover={true}
  hoverOpacity={1.0}
  dimmedOpacity={0.15}
/>
```

---

### Callbacks

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onRegionClick` | `function \| null` | `null` | Called when a region is clicked. |
| `onRegionHover` | `function \| null` | `null` | Called when hover state changes. |
| `onViewportChange` | `function \| null` | `null` | Called when zoom/pan changes. |

**Callback Signatures:**

```js
// onRegionClick(regionKey, regionConfig, event)
onRegionClick={(key, config, e) => {
  console.log(`Clicked: ${key}`, config);
}}

// onRegionHover(regionKey | null, regionConfig | null, event | null)
onRegionHover={(key, config, e) => {
  if (key) {
    console.log(`Hovering: ${key}`);
  } else {
    console.log('Hover ended');
  }
}}

// onViewportChange({ scale, pan })
onViewportChange={({ scale, pan }) => {
  console.log(`Zoom: ${scale}, Pan: (${pan.x}, ${pan.y})`);
}}
```

---

### Styling

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | `object` | `{}` | Custom styles object, deep-merged with defaults. |
| `className` | `string` | `''` | CSS class name for the container div. |
| `style` | `object` | `{}` | Inline styles for the container div. |

**`styles` object structure:**

```js
styles = {
  canvas: {
    background: '#ffffff'
  },
  universe: {
    fill: '#f9f9f9',
    stroke: '#cccccc',
    strokeWidth: 1,
    label: 'U',
    labelPosition: { x: 35, y: 45 },
    labelFontSize: 18,
    labelColor: '#666666',
    margin: 10
  },
  circles: {
    A: { stroke: '#c0392b', strokeWidth: 1 },
    B: { stroke: '#2980b9', strokeWidth: 1 }
  },
  regions: {
    'outside': { fill: '#f9f9f9', opacity: 1 },
    'A-only': { fill: '#e74c3c', opacity: 0.6 },
    'B-only': { fill: '#3498db', opacity: 0.6 },
    'A∩B': { fill: '#9b59b6', opacity: 0.8 }
  },
  labels: {
    fontSize: 18,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    color: '#333333'
  },
  circleLabels: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  values: {
    fontSize: 16,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'normal',
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    borderRadius: 4
  },
  tooltip: {
    background: '#333333',
    color: '#ffffff',
    padding: '8px 12px',
    borderRadius: 4,
    fontSize: 14,
    fontFamily: 'Arial, sans-serif'
  },
  legend: {
    background: 'rgba(255, 255, 255, 0.95)',
    border: '#dddddd',
    borderRadius: 6,
    padding: 10,
    fontSize: 13,
    fontFamily: 'Arial, sans-serif',
    color: '#333333'
  }
}
```

---

## Ref Methods (Export API)

Access these methods via a ref:

```jsx
const vennRef = useRef(null);

<UnifiedVennDiagram2 ref={vennRef} />

// Later...
const svg = vennRef.current.getSVG();
```

| Method | Returns | Description |
|--------|---------|-------------|
| `getSVG()` | `string \| null` | Returns the SVG markup as a string. Ready for download or embedding. |
| `getPNGDataURL(options?)` | `Promise<string>` | Returns a PNG as a data URL. Options: `{ scale: 2 }` for higher resolution. |
| `getViewport()` | `{ scale, pan, dimensions }` | Returns current zoom/pan state and computed dimensions. |
| `resetViewport()` | `void` | Resets zoom and pan to initial values. |
| `zoomTo(scale, center?)` | `void` | Programmatically set zoom level. Optional center point. |
| `getRegionData()` | `object` | Returns `{ regions, values, selectedRegion, highlightedRegion }`. |
| `selectRegion(key)` | `void` | Programmatically select a region. |
| `clearSelection()` | `void` | Clear the current selection. |

**Export Example:**

```jsx
const vennRef = useRef(null);

const handleExportSVG = () => {
  const svg = vennRef.current.getSVG();
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'venn-diagram.svg';
  a.click();
  URL.revokeObjectURL(url);
};

const handleExportPNG = async () => {
  const dataUrl = await vennRef.current.getPNGDataURL({ scale: 3 });
  
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = 'venn-diagram.png';
  a.click();
};
```

---

## Pattern Types

Available patterns for `regions[key].pattern`:

| Pattern | Description | Additional Properties |
|---------|-------------|----------------------|
| `'solid'` | Solid fill (default) | None |
| `'stripes'` | Diagonal stripes | `stripeWidth`, `stripeSpacing`, `stripeColor`, `stripeAngle` |
| `'stripes-reverse'` | Reverse diagonal stripes | Same as stripes |
| `'horizontal'` | Horizontal stripes | `stripeWidth`, `stripeSpacing`, `stripeColor` |
| `'vertical'` | Vertical stripes | `stripeWidth`, `stripeSpacing`, `stripeColor` |
| `'dots'` | Dot pattern | `dotRadius`, `dotSpacing`, `dotColor` |
| `'crosshatch'` | Crossed diagonal lines | `lineWidth`, `lineSpacing`, `lineColor` |
| `'grid'` | Perpendicular grid lines | `lineWidth`, `lineSpacing`, `lineColor` |
| `'checkerboard'` | Alternating squares | `squareSize`, `secondaryColor`, `secondaryOpacity` |

---

## Examples

### Basic with Values

```jsx
<UnifiedVennDiagram2
  showValues={true}
  values={{
    'A-only': 150,
    'B-only': 80,
    'A∩B': 45
  }}
/>
```

### Animated with Custom Colors

```jsx
<UnifiedVennDiagram2
  enableAnimation={true}
  animationDuration={500}
  regions={{
    'A-only': { fill: '#2196F3', opacity: 0.7 },
    'B-only': { fill: '#4CAF50', opacity: 0.7 },
    'A∩B': { fill: '#9C27B0', opacity: 0.85 }
  }}
/>
```

### Responsive with Zoom/Pan

```jsx
<div style={{ width: '100%' }}>
  <UnifiedVennDiagram2
    responsive={true}
    enableZoom={true}
    enablePan={true}
    minScale={0.5}
    maxScale={4}
  />
</div>
```

### Full Featured

```jsx
const vennRef = useRef(null);

<UnifiedVennDiagram2
  ref={vennRef}
  width={600}
  height={550}
  responsive={true}
  enableAnimation={true}
  animationDuration={400}
  enableZoom={true}
  enablePan={true}
  showValues={true}
  values={{
    'A-only': 1234,
    'B-only': 567,
    'A∩B': 890
  }}
  valueFormatter={(v) => v.toLocaleString()}
  circles={{
    A: { cx: 200, cy: 230, r: 140, label: 'Customers', labelPosition: { x: 100, y: 110 } },
    B: { cx: 370, cy: 230, r: 140, label: 'Subscribers', labelPosition: { x: 470, y: 110 } }
  }}
  regions={{
    'A-only': {
      fill: '#3498db',
      opacity: 0.7,
      pattern: 'stripes',
      stripeColor: '#fff',
      stripeAngle: 45,
      stroke: '#2980b9',
      strokeWidth: 2,
      tooltip: '1,234 customers only'
    },
    'B-only': {
      fill: '#2ecc71',
      opacity: 0.7,
      stroke: '#27ae60',
      strokeWidth: 2,
      tooltip: '567 subscribers only'
    },
    'A∩B': {
      fill: '#9b59b6',
      opacity: 0.85,
      pattern: 'dots',
      dotColor: '#fff',
      stroke: '#8e44ad',
      strokeWidth: 3,
      tooltip: '890 both customer and subscriber'
    }
  }}
  legendItems={[
    { key: 'A-only', label: 'Customers Only' },
    { key: 'B-only', label: 'Subscribers Only' },
    { key: 'A∩B', label: 'Both' }
  ]}
  onRegionClick={(key) => console.log('Clicked:', key)}
  onViewportChange={(vp) => console.log('Viewport:', vp)}
/>
```

---

## TypeScript Types

```typescript
interface Position {
  x: number;
  y: number;
}

interface CircleConfig {
  cx: number;
  cy: number;
  r: number;
  stroke?: string;
  strokeWidth?: number;
  label?: string;
  labelPosition?: Position;
}

interface RegionConfig {
  fill: string;
  opacity: number;
  pattern?: 'solid' | 'stripes' | 'stripes-reverse' | 'horizontal' | 'vertical' | 'dots' | 'crosshatch' | 'grid' | 'checkerboard';
  label?: string;
  labelPosition?: Position;
  tooltip?: string;
  stroke?: string;
  strokeWidth?: number;
  strokePattern?: number[];
  // Pattern-specific props...
  stripeWidth?: number;
  stripeSpacing?: number;
  stripeColor?: string;
  stripeAngle?: number;
  dotRadius?: number;
  dotSpacing?: number;
  dotColor?: string;
  lineWidth?: number;
  lineSpacing?: number;
  lineColor?: string;
  squareSize?: number;
  secondaryColor?: string;
  secondaryOpacity?: number;
}

interface LegendItem {
  key: string;
  label: string;
}

interface ViewportState {
  scale: number;
  pan: Position;
}

interface UnifiedVennDiagram2Props {
  // Dimensions
  width?: number;
  height?: number;
  responsive?: boolean;
  aspectRatio?: number | null;
  minWidth?: number;
  maxWidth?: number;
  
  // Universe
  showUniverse?: boolean;
  universe?: Partial<UniverseConfig>;
  
  // Geometry
  circles?: { A: CircleConfig; B: CircleConfig };
  regions?: Record<string, RegionConfig>;
  
  // Values
  showValues?: boolean;
  values?: Record<string, number>;
  valueFormatter?: (value: number) => string;
  valuePositions?: Record<string, Position>;
  
  // Animation
  enableAnimation?: boolean;
  animationDuration?: number;
  animationEasing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  animateOnMount?: boolean;
  animateOnChange?: boolean;
  
  // Zoom/Pan
  enableZoom?: boolean;
  enablePan?: boolean;
  minScale?: number;
  maxScale?: number;
  initialScale?: number;
  initialPan?: Position;
  onViewportChange?: (viewport: ViewportState) => void;
  
  // Labels
  labelFontSize?: number;
  labelFontFamily?: string;
  labelFontWeight?: string;
  labelColor?: string;
  circleLabelFontSize?: number;
  circleLabelFontWeight?: string;
  
  // Tooltip
  showTooltip?: boolean;
  
  // Legend
  showLegend?: boolean;
  legendPosition?: string | Position;
  legendItems?: LegendItem[];
  
  // Hover
  enableHover?: boolean;
  hoverOpacity?: number;
  dimmedOpacity?: number;
  
  // Callbacks
  onRegionClick?: (key: string, config: RegionConfig, event: React.MouseEvent) => void;
  onRegionHover?: (key: string | null, config: RegionConfig | null, event: React.MouseEvent | null) => void;
  
  // Styling
  styles?: DeepPartial<DefaultStyles>;
  className?: string;
  style?: React.CSSProperties;
}

interface UnifiedVennDiagram2Ref {
  getSVG: () => string | null;
  getPNGDataURL: (options?: { scale?: number }) => Promise<string>;
  getViewport: () => { scale: number; pan: Position; dimensions: { width: number; height: number } };
  resetViewport: () => void;
  zoomTo: (scale: number, center?: Position) => void;
  getRegionData: () => { regions: Record<string, RegionConfig>; values: Record<string, number>; selectedRegion: string | null; highlightedRegion: string | null };
  selectRegion: (key: string) => void;
  clearSelection: () => void;
}
```

---

## Changelog

### v2.0.0
- Added animation support (`enableAnimation`, `animationDuration`, `animationEasing`)
- Added values display (`showValues`, `values`, `valueFormatter`)
- Added per-region stroke styling (`stroke`, `strokeWidth`, `strokePattern`)
- Added zoom and pan (`enableZoom`, `enablePan`, `minScale`, `maxScale`)
- Added responsive mode (`responsive`, `aspectRatio`, `minWidth`, `maxWidth`)
- Added export methods via ref (`getSVG()`, `getPNGDataURL()`)
- Added callbacks (`onRegionClick`, `onRegionHover`, `onViewportChange`)
- Added programmatic control methods (`selectRegion`, `zoomTo`, `resetViewport`)
- Deep-merged styles system with defaults
- Improved TypeScript support

### v1.0.0
- Initial release with basic Venn diagram rendering
- Pattern support
- Tooltip and legend
- Hover effects