# InteractiveVectorCanvas v3

Interactive 2D vector engine with full customization for vectors, axes, and grid.

## Import

```jsx
import InteractiveVectorCanvas from './InteractiveVectorCanvas_v3';

// For advanced usage:
import { 
  InteractiveVectorCanvasCore, 
  useCoordinateSystem, 
  useVectorInteraction 
} from './InteractiveVectorCanvas_v3';
```

## Basic Usage

```jsx
import React, { useState } from 'react';
import InteractiveVectorCanvas from './InteractiveVectorCanvas_v3';

function MyComponent() {
  const [vectors, setVectors] = useState([
    { id: "a", coords: [3, 2], color: "#3498db", label: "a" },
    { id: "b", coords: [-2, 4], color: "#e74c3c", label: "b", stroke: 4, pattern: [5, 5] }
  ]);
  const [selected, setSelected] = useState(null);

  const handleChange = (id, newCoords) => {
    setVectors(prev => prev.map(v => 
      v.id === id ? { ...v, coords: newCoords } : v
    ));
  };

  return (
    <InteractiveVectorCanvas
      vectors={vectors}
      selectedId={selected}
      onVectorChange={handleChange}
      onVectorSelect={setSelected}
    />
  );
}
```

---

## Vector Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | string/number | **required** | Unique identifier |
| `coords` | [x, y] | **required** | Vector coordinates |
| `color` | string | `styles.colors.default` | Line and tip color |
| `label` | string | `null` | Text label at tip |
| `stroke` | number | `styles.vector.stroke` | Line thickness |
| `pattern` | number[] | `[]` | Dash pattern, e.g. `[5, 5]` |
| `arrowLength` | number | `12` | Arrowhead size |
| `arrowAngle` | number | `π/6` | Arrowhead angle (radians) |
| `tipRadius` | number | `8` | Draggable tip circle radius |
| `tipFillOpacity` | number | `0.3` | Tip fill opacity |
| `tipStroke` | number | `2` | Tip circle stroke width |
| `labelFont` | string | `"13px system-ui"` | Label font |
| `showCoords` | boolean | `true` | Show coordinates text |

### Examples

```jsx
// Solid thick vector
{ id: "a", coords: [3, 2], color: "#3498db", stroke: 4 }

// Dashed vector
{ id: "b", coords: [-2, 4], color: "#e74c3c", pattern: [8, 4] }

// Dotted vector
{ id: "c", coords: [1, -3], color: "#2ecc71", pattern: [2, 4] }

// Custom arrowhead
{ id: "d", coords: [4, 1], arrowLength: 18, arrowAngle: Math.PI / 4 }

// No coordinates display
{ id: "e", coords: [2, 2], showCoords: false }
```

---

## Styles Object

Full customization for canvas, grid, axes, and vectors.

```jsx
const customStyles = {
  canvas: { 
    background: "#f5f5f5" 
  },
  graphArea: { 
    background: "#ffffff" 
  },
  grid: { 
    color: "#e0e0e0", 
    stroke: 1, 
    pattern: []           // e.g. [2, 4] for dotted grid
  },
  axes: { 
    color: "#2c3e50", 
    stroke: 1.5, 
    pattern: []           // e.g. [10, 5] for dashed axes
  },
  labels: { 
    color: "#666666", 
    font: "11px system-ui, sans-serif", 
    axisNameFont: "14px system-ui, sans-serif" 
  },
  vector: {
    stroke: 2.5,          // default line thickness
    pattern: [],          // default dash pattern
    tipRadius: 8,
    tipFillOpacity: 0.3,
    tipStroke: 2,
    arrowLength: 12,
    arrowAngle: Math.PI / 6
  },
  colors: { 
    default: "#3498db",   // default vector color
    hover: "#f39c12",     // color on hover
    selected: "#e74c3c"   // color when selected
  }
};

<InteractiveVectorCanvas
  vectors={vectors}
  styles={customStyles}
/>
```

### Dashed Grid Example

```jsx
<InteractiveVectorCanvas
  vectors={vectors}
  styles={{
    grid: { pattern: [4, 4] }
  }}
/>
```

### Dashed Axes Example

```jsx
<InteractiveVectorCanvas
  vectors={vectors}
  styles={{
    axes: { pattern: [10, 5], stroke: 2 }
  }}
/>
```

---

## Component Props

### Wrapper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultWidth` | number | `560` | Initial width |
| `defaultHeight` | number | `560` | Initial height |
| `minWidth` | number | `300` | Minimum resize width |
| `minHeight` | number | `300` | Minimum resize height |
| `showControls` | boolean | `true` | Show size/export controls |

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vectors` | array | `[]` | Vector objects |
| `selectedId` | string/number | `null` | Selected vector id |
| `initialRange` | number | `10` | Initial axis range (±) |
| `autoFit` | boolean | `true` | Auto-scale to fit |
| `autoFitPadding` | number | `1.3` | Padding for auto-fit |
| `padding` | number | `50` | Canvas margin |
| `showGrid` | boolean | `true` | Show grid |
| `showAxes` | boolean | `true` | Show axes |
| `showAxisLabels` | boolean | `true` | Show axis numbers |
| `enableZoom` | boolean | `true` | Scroll wheel zoom |
| `enablePan` | boolean | `true` | Drag to pan |
| `snapToGrid` | boolean | `false` | Snap when dragging |
| `snapThreshold` | number | `0.5` | Snap increment |
| `styles` | object | `DEFAULT_STYLES` | Custom styles |
| `onVectorChange` | function | | `(id, [x, y]) => void` |
| `onVectorSelect` | function | | `(id) => void` |
| `onHover` | function | | `(id) => void` |
| `onViewportChange` | function | | `() => void` |

---

## Features

### Canvas Controls

- **Size presets**: S, M, L, XL
- **Custom size**: Manual width/height inputs
- **Reset**: Reset viewport
- **Export**: PNG + SVG
- **Maximize**: Fullscreen (Escape to exit)

### Interactions

- **Drag tips**: Reposition vectors
- **Zoom**: Scroll wheel
- **Pan**: Drag background
- **Select**: Click vector
- **Hover**: Visual highlight

---

## Ref Methods

```jsx
const canvasRef = useRef(null);

canvasRef.current.getPNGDataURL()   // PNG data URL
canvasRef.current.getSVG()          // SVG string
canvasRef.current.getCanvas()       // Canvas element
canvasRef.current.getViewport()     // { xMin, xMax, yMin, yMax }
canvasRef.current.resetViewport()   // Reset view
```

---

## Pattern Reference

| Pattern | Effect |
|---------|--------|
| `[]` | Solid line |
| `[5, 5]` | Dashed |
| `[10, 5]` | Long dash |
| `[2, 4]` | Dotted |
| `[10, 5, 2, 5]` | Dash-dot |
| `[15, 5, 5, 5]` | Long dash-short dash |

---

## Full Example

```jsx
import React, { useState } from 'react';
import InteractiveVectorCanvas from './InteractiveVectorCanvas_v3';

export default function Demo() {
  const [vectors, setVectors] = useState([
    { 
      id: "velocity", 
      coords: [4, 3], 
      color: "#3498db", 
      label: "v",
      stroke: 3
    },
    { 
      id: "force", 
      coords: [-2, 5], 
      color: "#e74c3c", 
      label: "F",
      stroke: 2,
      pattern: [8, 4]
    },
    { 
      id: "acceleration", 
      coords: [1, -4], 
      color: "#2ecc71", 
      label: "a",
      pattern: [2, 4],
      arrowLength: 15
    }
  ]);

  const [selected, setSelected] = useState(null);

  const handleChange = (id, newCoords) => {
    setVectors(prev => prev.map(v => 
      v.id === id ? { ...v, coords: newCoords } : v
    ));
  };

  return (
    <InteractiveVectorCanvas
      vectors={vectors}
      selectedId={selected}
      onVectorChange={handleChange}
      onVectorSelect={setSelected}
      styles={{
        grid: { color: "#ddd", pattern: [2, 2] },
        axes: { stroke: 2 },
        colors: { hover: "#9b59b6" }
      }}
    />
  );
}
```