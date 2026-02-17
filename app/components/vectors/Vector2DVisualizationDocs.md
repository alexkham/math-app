# VectorVisualizer2D

A 2D vector rendering engine. Accepts N vectors via props, no internal controls.

## Import

```jsx
import VectorVisualizer2D from './VectorVisualizer2D';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vectors` | array | `[{ coords: [100, 150] }]` | Array of vector objects |
| `axisRange` | number | `200` | Axis range (±value). Used when `autoFit` is `false` |
| `autoFit` | boolean | `true` | Auto-scale axes to fit all vectors |
| `autoFitPadding` | number | `1.2` | Padding multiplier for auto-fit (1.2 = 20% padding) |
| `gridDivisions` | number | `8` | Number of grid divisions per axis |
| `theme` | object | `defaultTheme` | Styling configuration |

## Vector Object

```jsx
{
  coords: [x, y],       // required
  color: "#3498db",     // optional — falls back to theme.defaultVectorColor
  label: "v1"           // optional — displayed at vector tip
}
```

## Theme Object

```jsx
const defaultTheme = {
  background: "#ffffff",
  labelColor: "gray",
  gridColor: "#e5e5e5",
  axisColor: "#2c3e50",
  defaultVectorColor: "#3498db",
  clampedStrokeDash: "4,3",
  fontFamily: "'Inter', -apple-system, sans-serif"
};
```

## Basic Usage

```jsx
<VectorVisualizer2D
  vectors={[
    { coords: [3, 4], color: "#3498db", label: "a" },
    { coords: [-2, 5], color: "#e74c3c", label: "b" }
  ]}
/>
```

## Auto-Fit vs Fixed Range

### Auto-fit (default)

```jsx
<VectorVisualizer2D
  vectors={myVectors}
  autoFit={true}
  autoFitPadding={1.2}
/>
```

Axes scale automatically to fit all vectors with 20% padding.

### Fixed range

```jsx
<VectorVisualizer2D
  vectors={myVectors}
  autoFit={false}
  axisRange={100}
/>
```

Axes fixed at ±100. Vectors exceeding range are clamped.

## Clamping Behavior

When `autoFit={false}` and a vector exceeds `axisRange`:

- Vector is clamped to 95% of boundary
- Dashed line style applied
- Hollow arrowhead rendered
- Italic label shows actual coordinates

## Multiple Vectors

```jsx
<VectorVisualizer2D
  vectors={[
    { coords: [120, 80], color: "#3498db", label: "v1" },
    { coords: [-90, 60], color: "#e74c3c", label: "v2" },
    { coords: [40, -110], color: "#27ae60", label: "v3" },
    { coords: [-70, -50], color: "#f39c12", label: "v4" }
  ]}
/>
```

## Custom Theme

```jsx
const darkTheme = {
  background: "#1a1a2e",
  labelColor: "#aaa",
  gridColor: "#2d2d44",
  axisColor: "#eee",
  defaultVectorColor: "#00d9ff",
  clampedStrokeDash: "4,3",
  fontFamily: "'Fira Code', monospace"
};

<VectorVisualizer2D
  vectors={myVectors}
  theme={darkTheme}
/>
```

## Notes

- Canvas size is fixed at 400×400px (internal)
- Component renders pure SVG via D3
- No interactivity — for controlled input, wrap with a parent component
- Dependency: `d3`