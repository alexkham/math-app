# SkillsToLearn

A list of the skills a student should learn for a lesson's topic, each with a one-sentence summary. Every skill links to its how-to page in the Methods tier (a leaf like `/algebra/equations/methods/quadratic-formula`, or an atomic card like `/complex-numbers/methods#modulus`).

The list covers the whole topic, not only what the lesson teaches. A skill the lesson teaches gets an **On this page ↑** link to its section. A skill from another Methods hub shows which hub it lives in.

```jsx
import SkillsToLearn from '@/app/components/infographics/SkillsToLearn/SkillsToLearn';

<SkillsToLearn data={skillsToLearn} />
```

## Placement on a lesson page

Its own section near the end of `genericSections`, before the FAQ:

```jsx
{
    id:'skills',
    title:'Skills You Should Learn',
    link:``,
    content:[
      <SkillsToLearn key={'skills-to-learn'} data={skillsToLearn} />,
    ]
},
```

Keep `skillsToLearn` at module level (outside `getStaticProps`). Set `title: false` in the data, since the section heading already shows the title.

## Data shape

```js
const skillsToLearn = {
  title: false,                       // or a string; default 'Skills you should learn'
  lede: 'One line under the title.',  // optional
  numbered: false,                    // optional; true numbers the skills 1, 2, 3 ... across groups
  groups: [
    {
      title: 'Solving a quadratic equation',
      items: [
        { skill: 'Use the quadratic formula', href: '/algebra/equations/methods/quadratic-formula', desc: 'Read off a, b, c and substitute; works for every quadratic.', level: 'composite', here: '#4' },
        { skill: 'Factor a trinomial', href: '/algebra/polynomials/methods/factor-trinomials', level: 'composite', from: 'polynomial methods' },
      ],
    },
  ],
  hub: { href: '/algebra/equations/methods', label: 'All equation methods' },  // optional footer link
};
```

| Field | Meaning |
|---|---|
| `skill` | What the student can do. processContent applies ($math$, **bold**); no links inside. |
| `href` | The Methods page. Must be a live leaf or a card anchor on a hub. |
| `desc` | One or two sentences on the method. Rollout takes the leaf's hub-card `description`, or the card's `when` text. |
| `level` | `atomic`, `composite`, `strategy` or `applied`. Atomic shows "Single rule", strategy "Which method", applied "Word problems"; composite shows no tag. |
| `here` | Section anchor on this lesson when the lesson teaches the skill, e.g. `'#3'`. |
| `from` | Hub label (the data file's `hubLabel`) when the skill lives in another hub. |

## Linking rules

- Link only Methods pages that exist; prefer leaves with `indexed: true`.
- Take skill wording from the method page's name ("How to factor a trinomial" → "Factor a trinomial").
- `here` must point to the section that actually teaches the skill.

## Numbering

Off by default: each skill gets a small dot. Turn it on with `numbered: true` in the data or the `numbered` prop (the prop wins); the numbers run across all groups.

## Theme

Gentle defaults: hairline dividers, soft slate text, site blue `#2563EB` for the links, a light amber pill for "On this page". Override any key of `DEFAULT_THEME` through the `theme` prop.
