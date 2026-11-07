# NotationCheatSheet

A notation summary for a whole section of the site: the marks from the notation cards on each page of the section, one short row per mark (the symbol, how it is read, what it means), grouped by page. The same sheet sits at the bottom of the notation section on every page of that section, and the group for the current page is marked "This page". There is one layout. The sheet's content lives in a data file in the `sheets` folder; colours are fixed.

```jsx
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet';
import arithmeticNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/arithmetic';

<NotationCheatSheet key={'notation-sheet'} sheet={arithmeticNotationSheet} current={'/arithmetic/fractions'} />
```

The component is a single file, `NotationCheatSheet.jsx`, with a default export only. It wraps itself in `DiagramFrameV2` (`@/app/components/infographics/DiagramsFrameV2`), so it has the PNG / PDF downloads and the copy-link button without a frame around it on the page. There are no variants and no labels, theme or options objects.

---

## Contents

1. [Props](#props)
2. [Data shape](#data-shape)
3. [The sheets folder](#the-sheets-folder)
4. [Examples](#examples)
5. [Embedding on a page](#embedding-on-a-page)
6. [Authoring tips](#authoring-tips)

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `sheet` | object | — | Required. See [Data shape](#data-shape). Without it the component renders nothing. |
| `current` | string | `''` | The path of the page the sheet sits on, e.g. `'/arithmetic/fractions'`. The group whose `href` (without its `#…` part) equals this path gets a "This page" tag instead of the arrow. |

---

## Data shape

```js
{
  id,                          // frame id: the anchor and the download file name
  source,                      // the page named in the download's attribution strip
  eyebrow?, title, lead?,
  groups: [
    { page, href, rows: [{ tex, read, means }] }
  ],
  clashes?: { label, rows: [{ tex, text }] },
  symbolsHref?, symbolsLabel?, // the matching group of the symbols table
  parentHref?, parentLabel?    // the section's landing page
}
```

`lead`, row `tex` and `means`, and clash `tex` and `text` go through `processContent`, so `$…$`, `**bold**` and `[label](!/path)` links work there. `eyebrow`, `title`, group `page`, row `read`, `clashes.label`, `symbolsLabel` and `parentLabel` are printed as plain text.

### The sheet

| Field | |
|---|---|
| `id` | Passed to `DiagramFrameV2` as its `id`: the page anchor and the download file name. The same on every page that shows the sheet. |
| `source` | Passed to `DiagramFrameV2` as its `source`. |
| `eyebrow` | Small uppercase line above the title. Default `'Notation · Cheat sheet'`. |
| `title` | The heading, also passed to `DiagramFrameV2` as its `title`. |
| `lead` | One paragraph under the title. |

### `groups[]`

One group per page of the section. Groups sit in columns at least 400px wide (one column under 720px).

| Field | |
|---|---|
| `page` | The page's name, shown as the group heading. Also the React key, so it must be unique within the sheet. |
| `href` | The heading links here, usually that page's notation card: `'/arithmetic/fractions#notation'`. The part before `#` is compared with `current`. |
| `rows[].tex` | The symbol, in a shaded box on the left. Kept on one line. |
| `rows[].read` | How it is read aloud, in small uppercase. Plain text. |
| `rows[].means` | What it means, in one sentence. |

### `clashes`

A box under the groups for marks that mean different things in different places. Optional: without it the box is not drawn.

| Field | |
|---|---|
| `label` | The box heading. Plain text. All sheets use `'Same marks, different job'`. |
| `rows[].tex` | The symbol. |
| `rows[].text` | Its meanings. |

### Footer links

| Field | |
|---|---|
| `symbolsHref`, `symbolsLabel` | A solid navy button, usually to the matching groups of the symbols table: `'/math-symbols/arithmetic#divisibility,modular_arithmetic,fractions,basic_operations'`. |
| `parentHref`, `parentLabel` | An outlined button to the section's landing page. |

Each button is drawn only when its `href` is set.

### In the download

The footer buttons, the group arrows and the "This page" tag are left out of the PNG / PDF, so the download is the same whichever page it was taken from.

---

## The sheets folder

`NotationCheatSheet/sheets/` holds one data file per section or sub-section of the site. Some subjects have one sheet (arithmetic, set theory), others several (linear algebra has nine, probability five). Each file starts with a short comment naming what it covers, builds one object and exports it as the default:

```js
// Notation cheat sheet for the whole arithmetic section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'arithmetic-notation-cheat-sheet',
  source: '/arithmetic',
  // ...
};

export default sheet;
```

A page imports the sheet for its section by file name, without the extension:

```js
import arithmeticNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/arithmetic'
```

The 27 sheet files:

| File | Title | Groups |
|---|---|---|
| `algebra-polynomials-equations-inequalities.js` | Polynomials, Equations and Inequalities: Notation at a Glance | 6 |
| `algebra-powers-roots-logarithms.js` | Powers, Roots and Logarithms: Notation at a Glance | 8 |
| `algebra-sequences.js` | Sequence Notation at a Glance | 8 |
| `arithmetic.js` | Arithmetic Notation at a Glance | 8 |
| `calculus-derivatives.js` | Derivative Notation at a Glance | 7 |
| `calculus-integrals.js` | Integral Notation at a Glance | 5 |
| `calculus-limits.js` | Limit Notation at a Glance | 5 |
| `combinatorics.js` | Combinatorics Notation at a Glance | 3 |
| `complex-numbers.js` | Complex Number Notation at a Glance | 10 |
| `functions.js` | Function Notation at a Glance | 8 |
| `linear-algebra-decompositions.js` | Decomposition Notation at a Glance | 5 |
| `linear-algebra-determinants.js` | Determinant Notation at a Glance | 4 |
| `linear-algebra-eigen.js` | Eigenvalue Notation at a Glance | 4 |
| `linear-algebra-linear-systems.js` | Linear System Notation at a Glance | 4 |
| `linear-algebra-matrix.js` | Matrix Notation at a Glance | 4 |
| `linear-algebra-orthogonality.js` | Orthogonality Notation at a Glance | 5 |
| `linear-algebra-transformations.js` | Linear Transformation Notation at a Glance | 5 |
| `linear-algebra-vector-spaces.js` | Vector Space Notation at a Glance | 7 |
| `linear-algebra-vectors.js` | Vector Notation at a Glance | 6 |
| `logic.js` | Propositional Logic Notation at a Glance | 5 |
| `probability-distributions.js` | Distribution Notation at a Glance | 10 |
| `probability-events-rules.js` | Events and Probability Rules: Notation at a Glance | 7 |
| `probability-expectation-spread.js` | Expectation and Spread: Notation at a Glance | 5 |
| `probability-inequalities-limits.js` | Inequalities and Limit Theorems: Notation at a Glance | 4 |
| `probability-random-variables.js` | Random Variable Notation at a Glance | 6 |
| `set-theory.js` | Set Notation at a Glance | 4 |
| `trigonometry.js` | Trigonometry Notation at a Glance | 8 |

Every file sets all the fields, `clashes` included. The sheets are shown on 161 pages.

---

## Examples

### `sheets/arithmetic.js`, shown on `arithmetic/fractions` and the other arithmetic pages

```js
const sheet = {
  id: 'arithmetic-notation-cheat-sheet',
  source: '/arithmetic',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Arithmetic Notation at a Glance',
  lead: 'The marks from the notation cards across the arithmetic pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Fractions', href: '/arithmetic/fractions#notation',
      rows: [
        { tex: '$\\frac{a}{b}$', read: 'a over b', means: 'The vinculum: numerator over denominator, a division held in place.' },
        { tex: '$a/b$', read: 'a slash b; a over b', means: 'The inline spelling for running text and code; same value, no grouping power.' },
        { tex: '$a \\div b$', read: 'a divided by b', means: 'The obelus, the schoolroom division sign: $a \\div b = \\frac{a}{b}$.' },
      ],
    },
    {
      page: 'Divisibility', href: '/arithmetic/divisibility#2',
      rows: [
        { tex: '$a \\mid b$', read: 'a divides b', means: 'A statement, true or false: $b = a \\cdot k$ for some integer $k$.' },
        // two more rows
      ],
    },
    // six more groups: Mixed numbers, Factors, GCD, LCM, Modulo, Integer part
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\{x\\}$', text: 'The fractional part here; a one-element set in set theory.' },
      { tex: '$\\bmod$ vs $\\pmod{n}$', text: 'An operator that returns a number; a label on a congruence statement.' },
      // three more rows
    ],
  },
  symbolsHref: '/math-symbols/arithmetic#divisibility,modular_arithmetic,fractions,basic_operations',
  symbolsLabel: 'Arithmetic symbols table',
  parentHref: '/arithmetic',
  parentLabel: 'Arithmetic',
};

export default sheet;
```

The Divisibility group links to `#2` rather than `#notation`: `href` is whatever anchor holds that page's notation card.

---

## Embedding on a page

Place it in the notation section's `content` array, straight after the page's `NotationSection`. Do not wrap it in `DiagramFrame`: it already renders its own `DiagramFrameV2`. From `arithmetic/fractions`:

```jsx
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import arithmeticNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/arithmetic'
```

```jsx
<NotationSection
  key={'notation'}
  title={sectionsContent.notation.title}
  // ...
  theme={'navy'}
/>,
<NotationCheatSheet
  key={'notation-sheet'}
  sheet={arithmeticNotationSheet}
  current={'/arithmetic/fractions'}
/>,
```

The sheet is imported in the page module (not passed through `getStaticProps`), and `current` is the page's own path.

---

## Authoring tips

- **Take the content from the notation cards:** each row is a short form of an entry on the page's notation card; `read` is how the mark is said aloud, `means` one sentence.
- **One sheet per section:** every page of the section imports the same file and passes its own path as `current`. Keep `id` the same on every page; it is the anchor and the download name.
- **`href` per group:** point it at the anchor of that page's notation card, and use the page's path exactly as it is passed in `current` on that page, or the "This page" tag will not appear.
- **Keep `tex` short:** it never wraps on wide screens, and the symbol column is 170px wide (130px on narrow screens, where it may wrap).
- **Plain-text fields:** no `$…$` in `read`, `page`, the title, the eyebrow or the clash label.
- **Clashes:** list marks that the same subject, or a neighbouring one, uses for something else.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\frac'`, `'\\mid'`).
