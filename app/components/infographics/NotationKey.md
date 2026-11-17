# NotationKey

A page's notation as an infographic. It takes the **same object NotationSection already uses** (`sectionsContent.notation`), unchanged, and shows it as symbol tiles, as look-alike warnings, or as flashcards. Every colour, label and setting comes from data, with defaults.

```jsx
import NotationKey from '@/app/components/infographics/NotationKey';

<NotationKey data={sectionsContent.notation} variant="tiles" />
```

The component is a single file, `NotationKey.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Interaction](#interaction)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **tiles** (default) | Giving an overview of every mark on the page | The inherited line, a grid of symbol tiles (the symbol and how it is read), and the selected entry: meaning, cases, also written, "Do not confuse" and "Same glyph elsewhere". Then the footer links. |
| **confusables** | The page's look-alikes are the point | One card per entry that has `confusedWith`. The symbol and how it is read stand beside "≠ not" and the first sentence of `confusedWith` as a headline. Clicking a card shows the rest of the sentence and the meaning. |
| **cards** | Self-testing: can the reader read the symbol aloud? | Flashcards. The front shows the symbol; the back shows how it is read and what it means. Includes a "Reveal all" button. |

`variant` selects the layout. An unknown value falls back to `tiles`.

NotationSection stays the full written section. NotationKey is a visual companion to it, or a replacement where a compact view is enough.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. A page's notation object. See [Data shape](#data-shape). |
| `variant` | `'tiles' \| 'confusables' \| 'cards'` | `'tiles'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data**. That is, `data.labels`, `data.theme` and `data.options` override the props.

---

## Data shape

These are the NotationSection fields. All are read as they are:

```js
{
  title?,                 // card title
  lead?,                  // under the title
  inherited?,             // grey "Inherited" box (tiles)
  entries: [{
    id?,
    tex,                  // the symbol(s), e.g. '$\\subseteq$ · $\\subset$'
    read?,                // how it is read aloud
    means?,               // Meaning
    cases?,               // Cases
    alsoWritten?,         // Also written
    confusedWith?,        // Do not confuse (gold); its first sentence is the confusables headline
    confusedWithLabel?,   // replaces "Do not confuse" for this entry
    sameGlyphElsewhere?,  // Same glyph elsewhere (grey)
    sameGlyphLabel?
  }],
  symbolsHref?, symbolsLabel?,   // dark pill: "All … symbols →"
  parentHref?, parentLabel?,     // light pill: "↑ …"
  // fields NotationSection has and NotationKey ignores: before, after, link
}
```

These fields are for NotationKey only and are all optional:

```js
{
  header?: { kicker?, title?, lede? } | null,   // replaces kicker / title / lead; null hides the header
  hint?,                                        // replaces the variant's hint line
  initial?,                                     // tiles: index of the entry open first; null = none
  labels?, theme?, options?
}
```

Without `header`, the header is `labels.kicker` ("Notation"), then `title`, then `lead`.

Every text field goes through `processContent`, so `$…$`, `**bold**`, `@[code]@` and `[label](!/path)` links work as they do in NotationSection.

### The confusables headline

The headline is `confusedWith` up to the first full stop that is followed by a space and is outside `$…$`. For example:

> "The comma's job. In $P(k; n, p)$ the semicolon …" → headline **The comma's job.**

Your pages already start every `confusedWith` with a short naming sentence, so this works without changes. Entries without `confusedWith` are left out of this variant.

---

## Interaction

- **tiles:** click a tile to open its entry, and click it again to close it. When nothing is open, a hint line shows instead.
- **confusables:** click a card, or press Enter or Space on it, to expand it. One card is open at a time.
- **cards:** click a card to turn it over. "Reveal all" turns all of them over and becomes "Hide all".

On phones the tiles sit two per row, the detail panel stacks, the "≠" column of confusables is hidden (the symbol sits above its warning), and the cards are shorter.

---

## Customisation from data

All objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `kicker` | `'Notation'` | header kicker, when `header` is not given |
| `means`, `cases`, `alsoWritten` | `'Meaning'`, `'Cases'`, `'Also written'` | entry fields |
| `confusedWith`, `sameGlyph` | `'Do not confuse'`, `'Same glyph elsewhere'` | bands (the per-entry labels win) |
| `inherited` | `'Inherited'` | tiles |
| `symbols`, `parent` | `'Symbol index'`, `'Shared notation'` | pills, when `symbolsLabel` / `parentLabel` are missing |
| `tilesHint` | `'Click a symbol for its details.'` | tiles, nothing open |
| `notThis` | `'not'` | confusables, under "≠" |
| `confusablesHint` | `'Click a card for the full explanation.'` | confusables |
| `cardsHint` | `'Click a card to see how it is read. Can you read it first?'` | cards |
| `revealAll`, `hideAll` | `'Reveal all'`, `'Hide all'` | cards button |
| `flip` | `'tap to reveal'` | front of a closed card |
| `read` | `'Read'` | reserved |

### `theme` (`DEFAULT_THEME`)

| Key | Default | |
|---|---|---|
| `ink`, `title`, `muted` | `#1e293b`, `#1e3a8a`, `#64748b` | text |
| `line`, `box` | `#e2e8f0`, `#c7cedb` | dividers, box borders |
| `panel`, `soft`, `headBg` | `#ffffff`, `#f8fafc`, `#eff6ff` | backgrounds; `headBg` behind symbols |
| `navy`, `blue`, `blueSoft` | `#1e3a8a`, `#2563eb`, `#dbeafe` | selection, pills, hover |
| `gold`, `goldBg`, `goldInk` | `#ca8a04`, `#fef3c7`, `#a16207` | "Do not confuse" |
| `slate`, `slateBg`, `onDark` | `#475569`, `#f1f5f9`, `#ffffff` | inherited, same glyph, text on navy |
| `symbol` | `#1e3a8a` | colour of the symbols |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `initial` | `0` | tiles: entry open first (`null` = none; `data.initial` wins) |
| `columns` | `0` | tiles and cards: fixed number of columns (`0` = automatic) |

---

## Examples

### tiles: `set-theory/subsets`

```jsx
<NotationKey data={sectionsContent.notation} variant="tiles" />
```

The page's object, shortened:

```js
notation: {
  title: `Subset and Superset Notation`,
  lead: `Four containment marks, a calligraphic P with an exponent twin, and the double-struck number chain — …`,
  inherited: `$\\in$, $\\varnothing$, the braces and set-builder come from [set theory basics](!/set-theory/basics#2); …`,
  entries: [
    {
      id: 'subset-pair',
      tex: `$\\subseteq$ · $\\subset$`,
      read: `is a subset of; is a proper subset of`,
      means: `Containment with and without the escape clause: …`,
      cases: `The convention war: many texts — especially older and European ones — write $\\subset$ for any subset …`,
      confusedWith: `Membership. $1 \\in A$ but $\\{1\\} \\subseteq A$ — …`,
    },
    // superset-pair, power-set, number-chain
  ],
  symbolsHref: `/math-symbols/set-theory`,
  symbolsLabel: `All set theory symbols`,
  parentHref: `/set-theory`,
  parentLabel: `Set Theory`,
}
```

### confusables: `probability/distributions/discrete/binomial`

```jsx
<NotationKey data={sectionsContent.notation} variant="confusables" />
```

The three entries give the headlines "The Beta function.", "A free parameter." and "The comma's job.".

### cards: `combinatorics/binomial-coefficient`

```jsx
<NotationKey data={sectionsContent.notation} variant="cards" />
```

### Customised from data

```jsx
<NotationKey
  data={{
    ...sectionsContent.notation,
    header: { kicker: 'Quick check', title: 'Can you read these?' },
    hint: 'Say each one aloud, then turn the card over.',
    options: { columns: 3 }
  }}
  variant="cards"
/>
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`, and pass the notation object the page already has.

```jsx
<DiagramFrame
  key="notation-key"
  id="subset-notation-key"
  title="Subset and Superset Notation"
  source="/set-theory/subsets"
>
  <NotationKey data={sectionsContent.notation} variant="tiles" />
</DiagramFrame>
```

Good homes: any of the pages that have a `notation` object. That includes `cards` near the end of a page as a self-test, and `confusables` on pages whose entries are mostly warnings (binomial, binomial coefficient, subsets).

---

## Authoring tips

- **No new data:** reuse `sectionsContent.notation`. Edits to the page's notation entries show up in both NotationSection and NotationKey.
- **Short naming sentence:** keep `confusedWith` starting with one, ending in a full stop outside maths. It becomes the confusables headline.
- **`read` drives tiles and cards:** an entry without it shows only the symbol on its tile, and only the meaning on its card.
- **Long `tex`:** a tile wraps a long chain like $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Set `options.columns` lower if that looks crowded.
- **Escaping:** the page objects already escape LaTeX for template strings (`\\subseteq`). Pass them as they are.
