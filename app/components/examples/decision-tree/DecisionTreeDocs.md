# DecisionTree — Component Documentation

## Overview

A generic, self-contained React component that renders an interactive
decision tree from a plain-data props object. Users click answer choices
to traverse from root to leaf; the diagram visualizes the full tree with
the active path highlighted and off-path branches dimmed.

The component is fully closed: it owns its state (current path), styling
(injected CSS), layout (auto-computes node positions), and rendering. The
consumer's only job is to pass the tree data as props.

---

## Quick start

```jsx
import DecisionTree from "@/components/visual-tools/DecisionTree";
import config from "@/data/decision-trees/matrix-classification.data";

export default function Page() {
  return <DecisionTree {...config} />;
}
```

The `config` file is plain JavaScript — no imports, no JSX, no logic.
Just the tree shape and metadata.

---

## Props

| Prop           | Type                          | Required | Default | Purpose                                                              |
|----------------|-------------------------------|----------|---------|----------------------------------------------------------------------|
| `tree`         | `{ [id]: Node }`              | yes      | —       | The full tree: a flat map from node id to node object.               |
| `rootId`       | `string`                      | yes      | —       | The id of the root node (where traversal begins).                    |
| `svgW`         | `number`                      | no       | `1100`  | viewBox width. The SVG always renders at 100% of its container.      |
| `svgH`         | `number`                      | no       | `460`   | viewBox height.                                                      |
| `positions`    | `{ [id]: { x, y } }`          | no       | auto    | Per-node coordinate override. Any id you supply replaces auto-layout.|
| `helpBanner`   | `string`                      | no       | none    | One-line intro shown above the diagram.                              |
| `questionHelp` | `{ [id]: string }`            | no       | none    | Extra explanation under each question, keyed by node id.             |
| `rootTip`      | `string`                      | no       | none    | A callout shown only while on the root question (e.g., a global hint).|

The component renders nothing for any prop you omit beyond the required two.

---

## Tree node schema

Every value in the `tree` map is one of two shapes.

### Question node

```js
{
  type: "q",
  text: "Question shown in the node and in the panel",
  children: [
    { label: "Answer A", to: "nextNodeId" },
    { label: "Answer B", to: "otherNodeId" },
    // ...any number of children (binary, ternary, n-ary)
  ],
}
```

| Field      | Type                            | Notes                                                              |
|------------|---------------------------------|--------------------------------------------------------------------|
| `type`     | `"q"`                           | Marks this node as a question.                                     |
| `text`     | `string`                        | The question itself. Shown inside the SVG node and in the panel.   |
| `children` | `[{ label, to }]`               | Ordered list of answers. Each links to another node's id via `to`. |

A question may have 2, 3, 4, … children. Edge labels are auto-staggered
along the edge so multi-way questions don't pile labels on top of each
other.

### Leaf node

```js
{
  type: "leaf",
  name: "Full name shown as the panel title",
  short: "Short label",
  formula: "Optional formula in highlighted box",
  desc:    "Optional paragraph describing the result",
  example: "Optional worked example in tinted box",
}
```

| Field     | Type     | Required | Where it shows                                |
|-----------|----------|----------|-----------------------------------------------|
| `type`    | `"leaf"` | yes      | —                                             |
| `name`    | `string` | yes      | Panel title; fallback for `short` inside SVG. |
| `short`   | `string` | no       | The label shown inside the SVG leaf box.      |
| `formula` | `string` | no       | Highlighted box below the description.        |
| `desc`    | `string` | no       | Plain paragraph below the title.              |
| `example` | `string` | no       | Tinted "Example:" box at the bottom.          |

Leaves have no children. The traversal ends when the user reaches one.

---

## Behavior

### Navigation
- **Click an answer button** (in the panel) to advance to the next node.
- **Click a child node in the diagram** to advance.
- **Click any ancestor in the diagram** to jump back to that point.
- **Step back** undoes one decision; available in the control bar and
  under every question/leaf panel.
- **Restart / Try again** returns to the root.

### Visual states
- **Current node**: filled with accent color (or highlight orange if it
  is a leaf), thicker border.
- **Visited (in path)**: tinted accent fill.
- **Clickable next children**: full opacity, cursor pointer.
- **Off-path nodes**: dimmed to 40% opacity, non-interactive.

### Layout
- **Auto-layout** (default): leaves spread evenly across the bottom row
  (DFS visit order); internal nodes sit at the midpoint of their
  children's x coordinates, with y assigned by depth. Works for any tree
  shape.
- **Manual override**: pass `positions={{ id: { x, y } }}`. Any node you
  supply uses your coordinates; the rest stay auto-laid-out.

### Edge labels
- Binary edges: label at the midpoint.
- Multi-way edges (3+ children from one parent): `t` values are
  distributed across [0.3, 0.7] so labels sit at staggered y heights and
  do not overlap.

### Scaling
The SVG declares `viewBox="0 0 svgW svgH"` and `width="100%"`. The
diagram fills its container and never overflows horizontally regardless
of screen size.

---

## Example data file

```js
// /data/decision-trees/matrix-classification.data.js
export default {
  rootId: "R",
  svgW: 1100,
  svgH: 460,

  helpBanner:
    "Matrix classification. Given a real square matrix A, walk the tree to find its most specific classification.",

  questionHelp: {
    R: "Compare A with its transpose...",
    SymQ: "Compute the eigenvalues...",
  },

  tree: {
    R: { type: "q", text: "Is A symmetric (A = Aᵀ)?",
      children: [
        { label: "Yes", to: "SymQ" },
        { label: "No",  to: "NS1" },
      ] },

    SymQ: { type: "q", text: "Eigenvalue signs?",
      children: [
        { label: "All λ > 0",  to: "L_posdef" },
        { label: "Mixed",      to: "L_indef" },
        // ...more
      ] },

    L_posdef: { type: "leaf",
      name: "Positive Definite",
      short: "Pos. Def.",
      formula: "xᵀAx > 0 for all x ≠ 0   ⇔   all λ > 0",
      desc:    "Symmetric, curves upward in every direction.",
      example: "[[2, 1], [1, 2]] → λ = 1, 3" },

    // ...more nodes
  },
};
```

---

## Adding a new decision tree

1. Create a new data file: `whatever.data.js`.
2. Fill in `rootId`, `tree`, and any optional metadata (`helpBanner`,
   `questionHelp`, `rootTip`).
3. Create a page that imports both the component and the data, and
   spreads the data:

```jsx
import DecisionTree from "@/components/visual-tools/DecisionTree";
import config from "@/data/decision-trees/whatever.data";

export default function Page() {
  return <DecisionTree {...config} />;
}
```

No other code is needed. The component handles state, styling, layout,
rendering, navigation, step-back, restart, and breadcrumb on its own.

---

## What the component does NOT need

- Custom CSS from the consumer.
- React imports in the data file.
- A wrapper component per tree.
- Manual layout for typical trees (auto-layout is good for most shapes).
- Any logic on the page beyond `<DecisionTree {...config} />`.

---

## Constraints

- Every `to` reference in `children` must match an id in `tree`.
- The tree must be acyclic and have a single root (`rootId`).
- A leaf has no `children`; a question must have at least 2.
- All text (`text`, `name`, `short`, `formula`, `desc`, `example`,
  `helpBanner`, `questionHelp` values, `rootTip`) is rendered as plain
  text — no HTML or JSX.