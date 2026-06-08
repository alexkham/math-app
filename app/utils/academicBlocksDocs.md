# academicBlocks.js — Documentation

`renderAcademicBlockHTML` is the renderer behind the `@academic[...]@` syntax used throughout the site's content. It takes a block-type token, a raw content body, and optional formatting flags, and produces a self-contained HTML string with inline styles. The string is then injected into the React tree by `processContent` via `dangerouslySetInnerHTML`.

This document is the reference for every block type, every option, and every piece of inline syntax that works inside the content body.

---

## 1. Where it lives and how it's wired

- File: `academicBlocks.js`, exporting `renderAcademicBlockHTML(content, blockType, customWidth, customAlign, customOpts)`.
- Consumer: `processContent.js`, which scans the source string for `@academic[...]@`, extracts the type and options, and calls `renderAcademicBlockHTML`. The returned HTML is wrapped in a `<div dangerouslySetInnerHTML={{ __html: ... }} />`.
- Math rendering: uses `react-katex` (`BlockMath`, `InlineMath`) serialized through `ReactDOMServer.renderToString` because the output is a static HTML string, not a React tree.

You do not call `renderAcademicBlockHTML` directly from content. You only write the `@academic[...]@` source, and the rest is automatic.

---

## 2. The `@academic` source syntax

General shape:

```
@academic[<type>[,<opt>:<value>,...]:<content>]@
```

- `<type>` — one of the block types listed in §4 (e.g. `theorem`, `formula_callout`).
- Zero or more `<opt>:<value>` pairs, comma-separated, before the first content `:`.
- Everything after the type+options separator `:` is the content body.

The parser distinguishes the type-options block from the content body using a regex that locates the first `:` whose left-hand side is **not** one of the known option keys (`width`, `align`, `cite`, `tags`, `number`, `linkto`, `collapsible`, `compact`, `aside`). This lets options like `width:60%` keep their colon intact.

### Minimal example

```
@academic[theorem:Pythagorean Theorem
For any right triangle with legs $a$ and $b$ and hypotenuse $c$:
$$a^2 + b^2 = c^2$$]@
```

The first line of the content is the title; everything after is the body.

---

## 3. Inline syntax usable inside the content body

These work in both the title line and the body, processed by an internal `processInline` helper:

| Syntax | Renders as |
|---|---|
| `$...$` | Inline math (KaTeX) |
| `$$...$$` | Block math (KaTeX) |
| `**...**` | Bold |
| `[label](url)` | External link (new tab) |
| `[label](!path)` | Internal link (same tab); leading `!` is stripped, `/` prepended if missing |
| `@[code]@` | Monospace inline code with light gray background |
| `\t` | 8 non-breaking spaces (indent) |
| `<center>line</center>` | Centered single line |

A blank line in the body produces a small vertical spacer.

---

## 4. Block types catalog

Every block type has a fixed color theme defined in the internal `styles` object. Types are grouped below by family.

### 4.1 Original boxed types

| Type | Look |
|---|---|
| `theorem` | 2px blue ring, pale blue bg, label "Theorem" |
| `definition` | 2px green ring, pale green bg, label "Definition" |
| `lemma` | 2px magenta ring, pale magenta bg, label "Lemma" |
| `example` | 2px indigo ring + 8px left accent, pale indigo bg, label "Example" |
| `proof` | 1px gray ring, very light gray bg, label "Proof" |

### 4.2 Thick-left variants

Same colors as 4.1 but with a 10px-wide left accent bar and a thin 1px outline elsewhere.

| Type |
|---|
| `thick_left_theorem` |
| `thick_left_definition` |
| `thick_left_lemma` |
| `thick_left_example` |
| `thick_left_proof` |

### 4.3 Color callouts

| Type | Look | Label |
|---|---|---|
| `gray` | Neutral gray | "Note" |
| `yellow` | Warning yellow | "Pitfall" |

### 4.4 Augmented (pedagogical) types

| Type | Look | Notes |
|---|---|---|
| `corollary` | Purple, 6px left accent | Label "Corollary" |
| `remark` | Slate left bar, transparent bg, italic body | Label "Remark" |
| `warning` | Red, no left accent | Label "⚠ Warning" |
| `tip` | Teal | Label "✓ Tip" |
| `exercise` | Orange | Label "Exercise" |
| `solution` | Dashed orange | Label "Solution"; pulls up against the preceding block (`tightTop`) |
| `intuition` | Amber | Label "💡 Intuition" |
| `recall` | Dashed blue | Label "↩ Recall" |

### 4.5 Notation variants

Seven color themes for short notation entries:

| Type | Theme |
|---|---|
| `notation_slate` | Cool blue-gray |
| `notation_teal` | Teal |
| `notation_lavender` | Soft violet |
| `notation_beige` | Warm beige |
| `notation_mono` | Slate gray, monospace title |
| `notation_indigo` | Indigo on transparent bg |
| `notation_stone` | Warm stone |

The bare alias `notation` maps to `notation_beige`.

### 4.6 Combo types

These split the body on a single line containing only `---`:

| Type | Renders as |
|---|---|
| `theorem+proof` | Theorem-styled top, neutral proof-styled bottom |
| `lemma+proof` | Lemma-styled top, neutral proof-styled bottom |
| `corollary+proof` | Corollary-styled top, neutral proof-styled bottom |

Source shape:

```
@academic[theorem+proof:Title
Statement body here.
---
Proof body here.]@
```

### 4.7 Formula callouts

Special-purpose blocks for embedding reference-style formula cards in content pages, with a built-in back-link footer. See §6 for the dedicated section.

| Type | Look |
|---|---|
| `formula_callout` | 2px blue ring, sans-serif title with bottom border |
| `formula_callout_serif` | Same shell, centered serif title with bottom border |

---

## 5. Options reference

All options are passed inline before the content separator `:`. Multiple options are comma-separated. Values are read as plain strings (no quoting needed unless the value itself contains a comma).

| Option | Type | Effect | Applies to |
|---|---|---|---|
| `width` | CSS length (e.g. `60%`, `400px`, `40rem`) | Sets explicit width and `max-width` | All types |
| `align` | `left` \| `center` \| `right` | Horizontal alignment when a width is set | All types |
| `cite` | string | Adds an italic right-aligned citation footer | All non-combo types |
| `tags` | pipe-separated string (e.g. `geometry\|classical`) | Renders colored pill tags below the title | All non-combo types |
| `number` | string (e.g. `1.1`) | Prepends `<Label> <number> — ` to the title | All non-combo types |
| `linkto` | URL string | Wraps the title in a link with a dashed underline | All non-combo types |
| `collapsible` | `true` | Renders the block as a `<details>` element with a click-to-expand summary | Single types |
| `compact` | `true` | One-line variant with small padding and reduced font size | Single types |
| `aside` | `true` | Floats the block to the right (`float: right`), 40% width default | Single types |

Mutually exclusive: `compact`, `collapsible`, and `aside` each take their own dedicated rendering branch — only one applies. If multiple are set, the order checked is `aside` → `collapsible` → `compact`.

### 5.1 Width and alignment defaults

For most types:

- No `width` set → block fills 100% of its parent, `margin: 20px 0`.
- `width` set, no `align` → centered (`margin: 20px auto`).
- `width` set, `align:left` → `margin: 20px 0`.
- `width` set, `align:right` → `margin: 20px 0 20px auto`.

Formula callouts override this; see §6.2.

---

## 6. Formula callouts (deep dive)

### 6.1 Purpose

Two block types render formula reference cards inline within content pages, distinct from the prose around them, with a built-in back-link to the formula's full reference entry on the relevant `/<section>/formulas` page.

### 6.2 Source convention — three lines

```
@academic[formula_callout:Composition of Functions
$$(f \circ g)(x) = f(g(x))$$
/functions/formulas#composition_of_functions]@
```

- **Line 1:** Title (the formula's display name).
- **Lines 2 to N-1:** The formula. Typically a single block math line, but can be multi-line.
- **Last line:** The destination URL. Optional leading `!` is accepted and stripped (for parity with the rest of the link convention on the site).

The footer renders as:

> Learn more about this formula: **Composition of Functions →**

with the link wrapped around the bold portion + arrow.

### 6.3 Variants

| Type | Title style |
|---|---|
| `formula_callout` | Sans-serif, left-aligned, 1.05rem, bottom border |
| `formula_callout_serif` | Serif (Georgia), centered, 1.2rem, bottom border |

Both share the shell (2px blue ring, pale blue background, vertical breathing room around the formula, footer with divider + back-link).

### 6.4 Width behavior

Different from other block types — formula callouts auto-grow:

```css
min-width: 60%;
width: fit-content;
```

- Formulas narrower than 60% → block sits at 60%.
- Formulas wider than 60% → block grows to fit the formula naturally, up to the parent's available width.
- No manual tagging required for wide formulas.

A `,width:` override is still accepted and forces an explicit width.

### 6.5 Centralized customization

All visual constants for formula callouts live in one object at the top of the file:

```js
const FORMULA_CALLOUT_DEFAULTS = {
  minWidth: '60%',
  borderColor: '#0040a0',
  background: '#f8f9ff',
  titleColor: '#0040a0',
  dividerColor: '#0040a040',
  formulaPadY: '18px',
  formulaPadYSerif: '20px',
  footerText: 'Learn more about this formula:',
  arrow: '\u2192',
};
```

Edit this object to retheme every formula callout site-wide.

---

## 7. The combo types (theorem+proof family) — deep dive

### 7.1 Source convention

```
@academic[theorem+proof:Pythagorean Theorem
For any right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.
---
Construct squares on each side and apply equal-area arguments.
By dissection, the squares on the two legs together equal the square on the hypotenuse.
$\square$]@
```

The `---` line separates the statement from the proof. Whitespace around `---` is allowed; the line must contain only the three dashes.

### 7.2 Rendering

- The top half uses the styling of the base type (`theorem`, `lemma`, or `corollary`).
- The bottom half uses a neutral light-gray "Proof" panel, separated by a dashed divider.
- Width defaults to 100% (override with `,width:`).

---

## 8. Special rendering branches

The renderer is a sequence of branches, checked in this order:

1. `formula_callout` / `formula_callout_serif` → §6.
2. `theorem+proof` / `lemma+proof` / `corollary+proof` → §7.
3. `aside: true` → floating sidebar block.
4. `collapsible: true` → `<details>`/`<summary>` block.
5. `compact: true` → one-line inline-styled variant.
6. Default → standard boxed block.

Branches 3–5 require an option flag and apply to any single (non-combo) block type. Branches 1–2 are triggered by type alone.

---

## 9. Integration with `processContent`

`processContent` does the following for each `@academic[...]@` match:

1. Strips the `@academic[` prefix and `]@` suffix.
2. Finds the first `:` not preceded by a known option key.
3. Splits into `beforeColon` (type + options) and `blockContent` (the body).
4. Splits `beforeColon` on commas: `parts[0]` is the type, the rest are options.
5. Calls `renderAcademicBlockHTML(blockContent.trim(), type, customWidth, customAlign, customOpts)`.
6. Stores the resulting HTML string in an `academicBlocks` array and replaces the match with `__ACADEMIC_PLACEHOLDER_N__`.
7. When the placeholder is later encountered, wraps the stored HTML in a `<div dangerouslySetInnerHTML>`.

No changes to `processContent` are needed when adding new block types — the new type token simply flows through.

---

## 10. Worked examples

### 10.1 Plain theorem

```
@academic[theorem:Triangle Inequality
For any vectors $\mathbf{u}, \mathbf{v}$:
$$\|\mathbf{u} + \mathbf{v}\| \leq \|\mathbf{u}\| + \|\mathbf{v}\|$$]@
```

### 10.2 Numbered theorem with tags and citation

```
@academic[theorem,number:1.1,tags:geometry|classical,cite:Euclid, Elements I.47:Pythagorean Theorem
For any right triangle with legs $a, b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.]@
```

### 10.3 Collapsible solution

```
@academic[solution,collapsible:true:Solution to Exercise 3
Apply the chain rule to $f(g(x))$:
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$]@
```

### 10.4 Aside (floats right)

```
@academic[gray,aside:true,width:35%:Side note
This identity is often useful in proofs involving $\sin^2 + \cos^2 = 1$.]@
```

### 10.5 Compact warning

```
@academic[warning,compact:true:Don't forget the constant of integration
Every indefinite integral has a $+ C$ term.]@
```

### 10.6 Formula callout (sans)

```
@academic[formula_callout:Quadratic Formula
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
/algebra/formulas#quadratic_formula]@
```

### 10.7 Formula callout (serif), explicit full width for a wide formula

```
@academic[formula_callout_serif,width:100%:General Form of the Wave Equation
$$\frac{\partial^2 u}{\partial t^2} = c^2 \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} \right)$$
/calculus/formulas#wave_equation]@
```

### 10.8 Theorem + proof combo

```
@academic[theorem+proof:Mean Value Theorem
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ with $f'(c) = \frac{f(b) - f(a)}{b - a}$.
---
Apply Rolle's Theorem to $g(x) = f(x) - L(x)$, where $L$ is the secant line through the endpoints.
$\square$]@
```

---

## 11. Caveats and gotchas

- **No `:` in titles before the content separator.** The parser splits on the first `:` not preceded by an option key. A title beginning with `Pythagorean:` would have its `Pythagorean` interpreted as the type. (Inside the body, `:` is free.)
- **Pipe `|` is reserved as the tag separator.** If a tag value needs a literal pipe, you'd need to pass `tags` as an array via a code path, not via the source syntax.
- **`---` is reserved inside combo types** as the statement/proof separator. A literal `---` inside a statement or proof body will be mis-split.
- **`collapsible: true` blocks don't render their content until expanded.** For SEO purposes, anything you want indexed should stay outside collapsibles.
- **The `aside` branch uses `float: right`.** It pulls out of the normal flow. Use only when the surrounding content is long enough to wrap around it.
- **Formula callout URLs are emitted raw into `href`.** The renderer does not prepend `/` or do other rewriting. If you write `functions/formulas#x` instead of `/functions/formulas#x`, the link will be treated as relative to the current path.
- **Math in titles is supported but layout-sensitive.** Block math (`$$...$$`) inside a title row will render but may produce unusual vertical spacing. Inline math (`$...$`) is the safe choice for titles.

---

## 12. Adding new block types

To add a simple new boxed type:

1. Add an entry to the `styles` object with `border`, `background`, `color`, and `label`.
2. Optionally set `borderLeft`, `italic`, `mono`, or `tightTop` flags for special handling.
3. The renderer's default branch picks it up automatically.

To add a structurally different block (like the formula callouts or the combo types), add a dedicated branch near the top of `renderAcademicBlockHTML`, before the default flow. Follow the patterns established by `formula_callout` and `theorem+proof`.

`processContent` does not need changes for any new block type that goes through the existing `@academic[...]@` syntax.