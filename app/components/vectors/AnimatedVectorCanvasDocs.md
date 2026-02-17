# AnimatedVectorCanvas

Timeline-driven animation engine for 2D vector visualizations. Scripted sequences with playback controls.

## Import

```jsx
import AnimatedVectorCanvas from './AnimatedVectorCanvas';
```

## Basic Usage

```jsx
const initialState = {
  range: 10,
  vectors: [
    { id: "a", coords: [0, 0], color: "#3498db", label: "a", opacity: 0 }
  ],
  message: null
};

const sequence = [
  { action: "fadeIn", target: "a", duration: 500, startAt: 0 },
  { action: "moveTo", target: "a", from: [0, 0], to: [4, 3], duration: 1000, startAt: 500 }
];

<AnimatedVectorCanvas
  initialState={initialState}
  sequence={sequence}
  width={560}
  height={480}
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialState` | object | **required** | Starting state with vectors |
| `sequence` | array | **required** | Animation steps |
| `width` | number | `560` | Canvas width |
| `height` | number | `480` | Canvas height |
| `loop` | boolean | `false` | Loop animation |

---

## Initial State

```jsx
{
  range: 10,              // Axis range (±value)
  vectors: [              // Array of vectors
    {
      id: "a",            // Required - unique identifier
      coords: [x, y],     // Starting position
      color: "#3498db",   // Optional
      label: "a",         // Optional
      opacity: 0,         // Start hidden for fadeIn
      stroke: 2.5,        // Optional line width
      pattern: []         // Optional dash pattern
    }
  ],
  message: null           // Initial message (or null)
}
```

---

## Sequence Step

Each step in the sequence array:

```jsx
{
  action: "moveTo",       // Action type
  target: "a",            // Vector id (for vector actions)
  duration: 1000,         // Duration in ms
  startAt: 0,             // Start time in ms (for parallel animations)
  easing: "easeOutCubic"  // Easing function name
}
```

### Timing

- `duration` — how long the action takes
- `startAt` — when the action begins (absolute time)
- If `startAt` is omitted, actions run sequentially

**Parallel animations:**
```jsx
// These run at the same time
{ action: "fadeIn", target: "a", duration: 500, startAt: 0 },
{ action: "moveTo", target: "a", from: [0,0], to: [4,3], duration: 1000, startAt: 0 }
```

---

## Actions

### moveTo

Move vector from one position to another.

```jsx
{
  action: "moveTo",
  target: "a",
  from: [0, 0],
  to: [4, 3],
  duration: 1000,
  easing: "easeOutCubic"
}
```

### fadeIn

Fade vector from invisible to visible.

```jsx
{
  action: "fadeIn",
  target: "a",
  duration: 500
}
```

### fadeOut

Fade vector from visible to invisible.

```jsx
{
  action: "fadeOut",
  target: "a",
  duration: 500
}
```

### scale

Scale vector by a factor (from origin).

```jsx
{
  action: "scale",
  target: "a",
  from: 1,
  to: 2,
  originalCoords: [4, 3],  // Original position to scale from
  duration: 800
}
```

### rotate

Rotate vector around origin.

```jsx
{
  action: "rotate",
  target: "a",
  fromAngle: 0,
  toAngle: Math.PI / 2,    // 90 degrees
  originalCoords: [4, 0],  // Original position to rotate from
  duration: 1000
}
```

### colorChange

Animate color transition.

```jsx
{
  action: "colorChange",
  target: "a",
  from: "#3498db",
  to: "#e74c3c",
  duration: 500
}
```

### strokeChange

Animate stroke width.

```jsx
{
  action: "strokeChange",
  target: "a",
  from: 2.5,
  to: 5,
  duration: 300
}
```

### addVector

Add a new vector during animation.

```jsx
{
  action: "addVector",
  vector: { id: "new", coords: [2, 2], color: "#2ecc71", label: "new" },
  duration: 500
}
```

### message

Display a message below the canvas.

```jsx
{
  action: "message",
  text: "This is vector a",
  duration: 1500,
  persist: false       // If true, message stays after duration
}
```

---

## Easing Functions

| Name | Description |
|------|-------------|
| `linear` | Constant speed |
| `easeInQuad` | Slow start |
| `easeOutQuad` | Slow end |
| `easeInOutQuad` | Slow start and end |
| `easeInCubic` | Slower start |
| `easeOutCubic` | Slower end |
| `easeInOutCubic` | Slower start and end |
| `easeOutElastic` | Bouncy overshoot |
| `easeOutBounce` | Bounce at end |

---

## Playback Controls

Built-in controls include:

- **Play/Pause** button
- **Reset** button
- **Timeline scrubber** — drag to seek
- **Speed control** — 0.5x, 1x, 1.5x, 2x

---

## useTimeline Hook

For custom implementations:

```jsx
import { useTimeline } from './AnimatedVectorCanvas';

const timeline = useTimeline(sequence, { loop: false, onComplete: () => {} });

// Properties
timeline.isPlaying      // boolean
timeline.currentTime    // ms
timeline.totalDuration  // ms
timeline.speed          // multiplier

// Methods
timeline.play()
timeline.pause()
timeline.reset()
timeline.seek(timeMs)
timeline.setSpeed(1.5)
timeline.computeState(initialState)  // Returns current state
```

---

## Full Example: Vector Addition

```jsx
const initialState = {
  range: 8,
  vectors: [
    { id: "a", coords: [0, 0], color: "#3498db", label: "a", opacity: 0 },
    { id: "b", coords: [0, 0], color: "#e74c3c", label: "b", opacity: 0 },
    { id: "sum", coords: [0, 0], color: "#2ecc71", label: "a + b", opacity: 0 }
  ],
  message: null
};

const sequence = [
  // Show vector a
  { action: "fadeIn", target: "a", duration: 500, startAt: 0 },
  { action: "moveTo", target: "a", from: [0,0], to: [4,2], duration: 1000, startAt: 0, easing: "easeOutCubic" },
  { action: "message", text: "Vector a = (4, 2)", duration: 1500, startAt: 1000 },

  // Show vector b
  { action: "fadeIn", target: "b", duration: 500, startAt: 2500 },
  { action: "moveTo", target: "b", from: [0,0], to: [-2,3], duration: 1000, startAt: 2500, easing: "easeOutCubic" },
  { action: "message", text: "Vector b = (-2, 3)", duration: 1500, startAt: 3500 },

  // Show sum
  { action: "fadeIn", target: "sum", duration: 400, startAt: 5000 },
  { action: "moveTo", target: "sum", from: [0,0], to: [2,5], duration: 1200, startAt: 5000, easing: "easeOutElastic" },
  { action: "message", text: "a + b = (2, 5)", duration: 2000, startAt: 6000, persist: true }
];

<AnimatedVectorCanvas
  initialState={initialState}
  sequence={sequence}
  width={560}
  height={480}
/>
```

---

## Full Example: Rotation

```jsx
const initialState = {
  range: 6,
  vectors: [
    { id: "v", coords: [4, 0], color: "#9b59b6", label: "v", opacity: 1 }
  ]
};

const sequence = [
  { action: "message", text: "Watch the vector rotate 360°", duration: 1000, startAt: 0 },
  { 
    action: "rotate", 
    target: "v", 
    fromAngle: 0, 
    toAngle: Math.PI * 2,
    originalCoords: [4, 0],
    duration: 3000, 
    startAt: 1000,
    easing: "linear"
  },
  { action: "message", text: "Full rotation complete!", duration: 1500, startAt: 4000, persist: true }
];

<AnimatedVectorCanvas
  initialState={initialState}
  sequence={sequence}
  loop={true}
/>
```

---

## Notes

- Canvas-based rendering (no D3/SVG)
- 60fps via requestAnimationFrame
- All times in milliseconds
- Vectors need unique `id` for targeting
- Use `startAt` for parallel animations
- `opacity: 0` in initial state for fadeIn effect