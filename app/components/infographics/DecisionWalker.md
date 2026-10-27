# DecisionWalker

The interactive version of [DecisionMaker](./DecisionMaker.md). It uses the same data and the same look. The reader answers the questions, either on the map or one card at a time, and the route to the outcome lights up.

```jsx
import DecisionWalker from '@/app/components/infographics/DecisionWalker';

<DecisionWalker data={factoringStrategy} />
```

`DecisionWalker.jsx` imports its views, styles, outcome card, layouts and view switch from `DecisionMaker.jsx`, so **both files must sit in the same folder**. It exports `WALK_VIEWS`.

---

## Contents

1. [How it relates to DecisionMaker](#how-it-relates-to-decisionmaker)
2. [Views](#views)
3. [What the reader sees](#what-the-reader-sees)
4. [Props](#props)
5. [Data](#data)
6. [How views are chosen](#how-views-are-chosen)
7. [Labels](#labels)
8. [Theme](#theme)
9. [Examples](#examples)
10. [Embedding on a page](#embedding-on-a-page)
11. [Notes](#notes)

---

## How it relates to DecisionMaker

| | `DecisionMaker` | `DecisionWalker` |
|---|---|---|
| Purpose | An infographic: the whole decision at a glance | A tool: the reader works through one route |
| Data | questions → answers → outcomes | the same object |
| Views | Steps, Tree →, Tree ↓, Board, Table, Rules | Steps, Tree →, Tree ↓, Card |
| Interaction | Hover traces a path (trees) | Clicking answers builds a route |
| Rendering | — | Reuses DecisionMaker's Steps and tree views in walk mode |

Board, Table and Rules are left out on purpose: they compare every route at once, so there's nothing to walk.

---

## Views

| Key | Switch label | What it is |
|---|---|---|
| `ladder` | Steps | DecisionMaker's ladder. The reader answers on each rung. |
| `treeH` | Tree → | DecisionMaker's left-to-right tree, with clickable answer pills. |
| `treeV` | Tree ↓ | DecisionMaker's top-to-bottom tree, with clickable answer pills. |
| `card` | Card | One question at a time with large answer buttons, ending on the outcome card. |

The reader's progress is kept when they switch views. They can start on a tree, continue on Card, and come back to the tree with the route intact.

---

## What the reader sees

**On a map view (Steps, Tree →, Tree ↓):**
- The question to answer has a **"Your turn"** tag and a blue ring.
- Its answer pills **pulse** and can be clicked. Other pills are plain labels.
- Answered steps turn solid blue: the chosen pills, the connecting lines and the passed questions.
- Branches the reader didn't take **dim**. What's still reachable stays at full strength.
- The reached outcome gets a **ring**. Its link leads to the section that teaches the method.

**On Card:** "Question n", the question and its hint, and a button per answer. At the end it shows "Use this" and the outcome card.

**Always shown:**
- **Answer trail:** a chip per answered question ("How many terms? **3**"). Clicking a chip returns to that question.
- **Back / Start over:** undo one answer, or clear the route.
- **Banners:** `first` above and `last` below, the same as in DecisionMaker.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. The same shape as DecisionMaker. |
| `variant` | `'map' \| 'ladder' \| 'tree' \| 'card'` (also `'treeH'`, `'treeV'`) | `'map'` | The **starting** view. `'map'` picks Steps for chain data, otherwise Tree ↓ if it fits, otherwise Tree →. |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | The tree direction when `variant="tree"`. |
| `switcher` | boolean | `true` | Shows the reader's view switch. Set `false` to lock the starting view. |
| `views` | string[] | `WALK_VIEWS` = `['ladder', 'treeH', 'treeV', 'card']` | Which views the switch may offer, in the order they are shown. |
| `theme` | object | — | A partial theme, merged over DecisionMaker's `DEFAULT_THEME`. |

```jsx
<DecisionWalker data={d} />                                    // best map view for the data
<DecisionWalker data={d} variant="card" />                     // start one-at-a-time
<DecisionWalker data={d} variant="tree" direction="vertical" />
<DecisionWalker data={d} views={['treeV', 'card']} />
<DecisionWalker data={d} variant="card" switcher={false} />    // card only
```

---

## Data

The data is the same as for DecisionMaker; see [DecisionMaker → Data shape](./DecisionMaker.md#data-shape).

```js
{
  header?, first?, last?,
  start: 'nodeId',
  nodes:    { [id]: { question, hint?, answers: [{ label, to }] } },
  outcomes: { [id]: { title, action?, example?, link?, tone? } },
  labels?
}
```

Any data object written for DecisionMaker works here unchanged, and the reverse.

---

## How views are chosen

| View | Offered when | Minimum body width |
|---|---|---|
| `ladder` | The data is a chain (every question has at most one answer leading to another question) | 560px |
| `treeH` | Always | (question depth + 1) × 216 + 290px |
| `treeV` | Always | number of outcomes × 142px |
| `card` | Always | none |

An offered view that doesn't fit the card's current width is **disabled**, greyed out with the `tooWide` tooltip. The width is measured live.

**Starting view:** with `variant="map"`, the first usable of Steps → Tree ↓ → Tree → is chosen. Any other starting view falls back to the first usable view in `views` order if it doesn't fit. Card always fits, so a phone ends up on Card.

---

## Labels

Wording comes from `data.labels`, merged over DecisionMaker's `DEFAULT_LABELS`, which holds both components' keys. One `labels` object covers both.

| Key | Default | Used for |
|---|---|---|
| `ladder` / `treeH` / `treeV` / `card` | `'Steps'` / `'Tree →'` / `'Tree ↓'` / `'Card'` | Switch buttons |
| `view` | `'View'` | The switch's accessible name |
| `tooWide` | `'Not enough room for this view here'` | Tooltip on a disabled view |
| `start` | `'Start'` | The tag on the first question in the trees |
| `yourTurn` | `'Your turn'` | The tag on the question to answer |
| `pick` | `'Pick an answer on the map'` | Empty trail, map views |
| `trailEmpty` | `'Answer the question below'` | Empty trail, Card |
| `question` | `'Question'` | Card heading ("Question 2") |
| `result` | `'Use this'` | Card heading above the outcome |
| `back` | `'Back'` | Button |
| `restart` | `'Start over'` | Button |

---

## Theme

The theme is DecisionMaker's `DEFAULT_THEME`; see [DecisionMaker → Theme](./DecisionMaker.md#theme). The walk-mode highlights use:

| Key | Used for |
|---|---|
| `accent` | The chosen route, live pills, the "Your turn" tag, the trail-empty text |
| `accentSoft` | The ring on the current question and on the reached outcome |
| `accentSofter` | The live pill background |

---

## Examples

### Branching data: opens on Tree ↓; Tree → and Card in the switch

```jsx
import { factoringStrategy } from '@/data/infographics/factoring';

<DecisionWalker data={factoringStrategy} />
```

### Chain data: opens on Steps; all four views in the switch

```jsx
<DecisionWalker data={quadraticMethod} />
```

### Long chain (e.g. the 9-check limit playbook): Steps and Card only

```jsx
<DecisionWalker data={limitPlaybook} />
```

The trees are offered but greyed out, because they're too wide for a normal card.

### Static and interactive on the same page

```jsx
<DecisionMaker  data={factoringStrategy} variant="board" />   // in the summary section
<DecisionWalker data={factoringStrategy} variant="card" />    // in a practice section
```

(The data objects are the ones shown in full in [DecisionMaker → Examples](./DecisionMaker.md#examples).)

---

## Embedding on a page

The walker is a tool rather than an infographic, so place it where the reader acts: a practice block, a "try it" section, or a tool page. The `DiagramFrame` wrapper works the same as for DecisionMaker:

```jsx
<DiagramFrame
  key="obj10-walker"
  id="factoring-walker"
  title="Find your factoring technique"
  source="/algebra/polynomials/factoring"
  before={"Take a polynomial from the exercises and answer the questions."}
  after={"The outcome links to the section with worked examples."}
>
  <DecisionWalker data={factoringStrategy} />
</DiagramFrame>
```

---

## Notes

- **Shared file:** walk mode is drawn by `DecisionMaker.jsx`, so a style change there applies to both components.
- **Route state:** it lives in the component and resets on a page reload. Nothing is stored.
- **Static views:** in DecisionMaker (no `walk`), the Steps and tree views behave as before: hover tracing, no buttons.
- **Data rules:** the same as DecisionMaker. Each outcome is reached by exactly one answer, there are no loops, and `start` must be a question id.
- **Keyboard:** live answer pills and card answers are real `<button>`s, so they can be reached and pressed with the keyboard.
