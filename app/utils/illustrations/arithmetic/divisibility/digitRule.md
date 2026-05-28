# Component Package — digit-rule

Digit-pattern visualizations for divisibility rules. A number is shown as a row of digit cells; the scene type determines how the digits are read — a trailing slice, a digit sum, or an alternating sum.

Renderer: `app/utils/illustrations/arithmetic/divisibility/digitRule.js`
Export: `renderDigitRule(spec) → string`

---

## 1. Scope

Covered: three scene types over one shared digit-cell-row primitive.

- `last-k` — highlight the last *k* digits (k derived from the divisor: 2/5/10→1, 4→2, 8→3); brace them into the trailing value, test that value.
- `digit-sum` — all digits feed an amber sum chip; test the sum (divisors 3, 9).
- `alt-sum` — digits get alternating +/− signs from the right; test the alternating sum (divisor 11).

The renderer computes digit splitting, active cells, the last-k value, the digit sum, the alternating sum, and per-cell signs. Authors pass only `number`, `divisor`, and the info panel.

Reused: nothing. Self-contained renderer and palette.

Not in scope: the coprime-split rules (6, 12, 15, …) — those are conceptual combinations of other rules with no new digit pattern (covered by page tables obj11/obj13). Repeated digit-sum collapse (729→18→9) is shown single-level; the chain lives in info notes.

Placement: `/arithmetic/divisibility/rules`, the nine rule sections — obj2, obj4, obj5, obj7, obj9 (`last-k`); obj3, obj8 (`digit-sum`); obj10 (`alt-sum`).

---

## 2. Palette

`const C` at the top of the renderer; overridable per spec via `spec.style`.

| Role             | Default   | Meaning                                    |
|------------------|-----------|--------------------------------------------|
| `background`     | `#f4f4f1` | inactive cell fill                         |
| `border`         | `#cfcfc8` | inactive cell stroke                       |
| `text`           | `#34495e` | info text                                  |
| `textMuted`      | `#8a8a85` | gloss, inactive glyphs, plus signs         |
| `primary`        | `#7F77DD` | active cell fill (last-k, digit-sum)       |
| `primaryStroke`  | `#5A52C9` | active cell stroke + glyph                 |
| `secondary`      | `#3FB6A8` | alt-sum "+" cells (teal)                   |
| `secondaryStroke`| `#2E8C81` | alt-sum "+" stroke + glyph                 |
| `negation`       | `#E0654A` | alt-sum "−" cells (coral)                  |
| `negationStroke` | `#C25E3A` | alt-sum "−" stroke + glyph                 |
| `result`         | `#EF9F27` | sum chip fill (amber)                      |
| `resultStroke`   | `#C25E3A` | chip stroke + brace + result formula       |
| `separator`      | `#dddddd` | info hairline                              |

---

## 3. Primitives

| Primitive     | Visual                                                            |
|---------------|------------------------------------------------------------------|
| Digit cell    | 44×52 bordered box, one digit glyph centered                      |
| Active cell   | Role-tinted fill (0.16) + bold colored glyph                      |
| Inactive cell | Gray fill, muted glyph (last-k only)                              |
| Underbrace    | Curly brace under the last-k cells → trailing value (coral)       |
| Plus signs    | Between cells in digit-sum (muted)                                |
| Sign tag      | "+"/"−" above each alt-sum cell                                   |
| Sum chip      | Rounded amber pill holding the computed sum                       |
| Info panel    | Right-of-row block: formula / note / separator                   |

---

## 4. Critical implementation notes

- No `c-*` themed groups; `style="fill:none"` gotcha does not apply.
- All fills are opacity-tinted hex (0.14–0.55), readable over light/dark.
- Defaults are hardcoded hex per the customizability contract; theme via `spec.style`.
- Alt-sum signs are assigned from the **right** (rightmost digit `+`), matching the math. The renderer owns this; authors never specify signs.

---

## 5. Style tokens

| Token         | Value | Use                              |
|---------------|-------|----------------------------------|
| `VIEWBOX_W`   | 680   | width (height auto-computed)     |
| `CELL_X0`     | 60    | first cell x                     |
| `CELL_W/H`    | 44/52 | cell dimensions                  |
| cell stroke   | 1.5   | all cell borders                 |
| glyph size    | 24    | digit glyphs                     |
| sign size     | 16    | alt-sum sign tags                |
| chip size     | 18    | sum value                        |
| `INFO_X_GAP`  | 60    | row-right → info gap             |
| `INFO_MIN_X`  | 300   | info panel left floor            |
| fill opacity  | 0.16  | active cells (0.14 for neg)      |
| chip opacity  | 0.55  | sum chip                         |

Info panel x = `max(rowRight + 60, 300)` — slides right for long numbers, floored so short numbers don't crowd.

---

## 6. Coordinate model

No math plane. Cells are laid left-to-right: cell `i` at `x = 60 + i·44`. Digit index 0 is the leftmost (most significant) digit. Alt-sum sign depends on distance from the right edge.

---

## 7. Layout rules

Digit row on the left from `(60, y0)` (y0 varies 50–60 by scene type to fit sign tags / chips). Info panel to the right. Brace/chip sit below the row. ViewBox height auto-computed from the lowest element (brace text, chip, or info column).

---

## 8. Topic-specific specification language

None. The only computed-not-authored values: digit array, k (from divisor), last-k value, digit sum, alternating sum, per-cell signs. Authors never pass digits, k, sums, or signs.

---

## 9. Spec schema

```ts
type Spec = LastK | DigitSum | AltSum;

type LastK = {
  kind: 'last-k';
  number: number;            // e.g. 53104
  divisor: number;           // 2, 4, 5, 8, 10 — k derived from this
  info: InfoPanel;
  style?: Partial<Palette>;
};

type DigitSum = {
  kind: 'digit-sum';
  number: number;            // e.g. 729
  divisor: number;           // 3 or 9
  info: InfoPanel;
  style?: Partial<Palette>;
};

type AltSum = {
  kind: 'alt-sum';
  number: number;            // e.g. 9273
  divisor: number;           // 11
  info: InfoPanel;
  style?: Partial<Palette>;
};

type InfoPanel = { lines: InfoLine[] };
type InfoLine =
  | { kind: 'formula'; text: string; role?: 'primary' | 'secondary' | 'result' }
  | { kind: 'note'; text: string; italic?: boolean }
  | { kind: 'separator' };

// Renderer-derived, never authored:
//   digits, k = kForDivisor(divisor), lastKValue, digitSum, altSum, per-cell signs
```

k derivation: `4→2, 8→3, else→1`. Overridable `style` keys: all of §2.

Defaults: unknown `kind` or missing spec → empty `<svg>`; absent/malformed `info` → empty info column.

---

## 10. Spec examples

last-k (8 | 53104):

```js
renderDigitRule({
  kind: 'last-k',
  number: 53104, divisor: 8,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 8?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'check the last 3 digits' },
    { kind: 'note', text: '104 ÷ 8 = 13' },
    { kind: 'separator' },
    { kind: 'formula', text: '8 | 53104', role: 'result' },
  ]},
})
```

digit-sum (9 | 729):

```js
renderDigitRule({
  kind: 'digit-sum',
  number: 729, divisor: 9,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 9?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'sum the digits' },
    { kind: 'note', text: '7 + 2 + 9 = 18' },
    { kind: 'note', text: '18 ÷ 9 = 2' },
    { kind: 'separator' },
    { kind: 'formula', text: '9 | 729', role: 'result' },
  ]},
})
```

alt-sum (11 | 9273):

```js
renderDigitRule({
  kind: 'alt-sum',
  number: 9273, divisor: 11,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 11?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'alternating sum, right → left' },
    { kind: 'note', text: '3 − 7 + 2 − 9 = −11' },
    { kind: 'note', text: '11 | (−11)' },
    { kind: 'separator' },
    { kind: 'formula', text: '11 | 9273', role: 'result' },
  ]},
})
```

---

## 11. Scene catalog

| Scene name      | Spec shape                          | Placement   |
|-----------------|-------------------------------------|-------------|
| by-2-1746       | `last-k`, 1746, div 2               | rules obj2  |
| by-4-3516       | `last-k`, 3516, div 4               | rules obj4  |
| by-5-4835       | `last-k`, 4835, div 5               | rules obj5  |
| by-8-53104      | `last-k`, 53104, div 8              | rules obj7  |
| by-10-5230      | `last-k`, 5230, div 10              | rules obj9  |
| by-3-729        | `digit-sum`, 729, div 3             | rules obj3  |
| by-9-8127       | `digit-sum`, 8127, div 9            | rules obj8  |
| by-11-9273      | `alt-sum`, 9273, div 11             | rules obj10 |

---

## 12. Renderer requirements

The component takes a `Spec` and returns an SVG string. It must:

1. Return empty `<svg>` on missing spec or unknown `kind`.
2. Merge `palette = { ...C, ...(spec.style || {}) }`; reference colors only via `palette.X`.
3. Split `number` into digits; index 0 = leftmost.
4. `last-k`: derive k from divisor, highlight the trailing k cells, brace them, compute and label the trailing value.
5. `digit-sum`: mark all cells active, draw plus signs, compute the sum, draw the amber chip.
6. `alt-sum`: assign +/− from the right, color cells teal/coral, tag signs, compute the alternating sum, draw the chip (with proper minus glyph).
7. Render the info panel (formula / note / separator).
8. Auto-compute viewBox height from the lowest element.
9. Emit `<title>`/`<desc>` stating the rule result.
10. Be deterministic: identical spec → byte-identical string.

---

## 13. Validation checklist

- All catalog scenes render from spec only.
- Hand-coded demos (`digit-rule-demo-1/2/3`) match spec-rendered output pixel-near.
- k derivation correct (4→2, 8→3, others→1).
- Trailing-value parse correct, including leading-zero cases (5230 last-1 → 0; 104 not "0104").
- Digit sum and alternating sum computed correctly; negative alt-sum renders with a real minus glyph.
- Alt-sum signs start "+" at the rightmost digit.
- Long numbers push the info panel right without overlap; short numbers respect the floor.
- Light + dark surround parity (opacity-tinted fills readable in both).
- ViewBox height auto-fits; no whitespace below the lowest element.
- `style` override of any key changes only that role.
- Two renders of the same spec produce identical strings.