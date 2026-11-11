# Methods tier — leaf-page components

Leaf pages (composite, strategy, applied) of the Methods tier. Hubs use
`CalculationsExplorer` with `variant: 'clean'`; leaves use `MethodPage`.
Everything renders on the server: no tabs, no client-only text.

## Files

| File | Role |
| --- | --- |
| `MethodPage.jsx` | Leaf body: H1, lead, sections for the item's `level`, sticky TOC |
| `compositeSections.jsx` / `strategySections.jsx` / `appliedSections.jsx` | Which sections each level shows, in order |
| `MethodSection.jsx` | Section card (H2 + anchor id) |
| `RecognizeBox.jsx` | "Recognize the task" |
| `MethodAlternatives.jsx` | Alternative methods side by side |
| `MethodSteps.jsx` | Numbered steps with trace column and link to the atomic card |
| `WorkedExamples.jsx` | Line-by-line examples |
| `VisualWalkthrough.jsx` | Slot for a registered tool / SVG / image + caption |
| `PitfallsList.jsx` | Wrong vs right |
| `ProblemSetup.jsx` | Applied: setup list, hand-off to a composite method, interpretation |
| `StrategyTree.jsx` | Strategy: SVG decision tree + written-out list |
| `RelatedMethods.jsx` | Link cards to related items |
| `MethodTOC.jsx` | Sticky TOC + "Built on" + "Back to" |
| `resolveMethodRefs.js` | Item states, hrefs, `prepareHubData`, `leafSlugs` |
| `ruleAnchors.js` | Rule anchor map: rule id → current URL#anchor |

## Data (one file per sub-hub)

Example: `app/components/calculation-methods/data/calculus/derivatives.methods.js`

```js
{
  hubPath: '/calculus/derivatives/techniques',
  hubLabel: 'derivative techniques',
  variant: 'clean',
  methods: [ /* items */ ],
  categories: [...], filters: {...}, sidebarLinks: {...},
}
```

Item states are derived, never hand-written:

| Item has | State | URL |
| --- | --- | --- |
| no `slug` | atomic card | `hubPath#id` |
| `slug` + `page` | live leaf | `hubPath/slug` |
| `slug`, no `page` | planned (dimmed card) | — |

Leaf item:

```js
{
  id, slug, name, description, uses, level: 'composite' | 'strategy' | 'applied',
  tag, meta, category, indexed: false,          // indexed → robots tag
  seo: { title, description, keywords: [] },
  page: {
    h1, lead,
    recognize, recognizeNote,                    // all levels
    methods: [{ name, tag, formula, body, preferred }],                  // composite
    steps: { traceLabel, items: [{ title, body, state, atomic: '<atomic id>' }] },
    examples: [{ title, badge, lines: [{ math, why, answer }], note }],
    examplesAfter,
    visual: { component, props, svg, src, caption, steps },
    pitfalls: [{ title, wrong, right, note }],
    tree: { rootId, svgW, nodes: { id: { type: 'q', text, children: [{ label, to }] }
                                     | { type: 'leaf', to: '<item id>', short } },
            branches: [{ condition, answer }] },                            // strategy
    setup: [{ label, body }], handoff: { to: '<item id>', body }, interpretation, // applied
    related: ['<item id>', ...],
    builtOn: [{ label, url }],
    titles: { recognize, methods, steps, examples, visual, pitfalls, related, tree, setup },
  },
}
```

## Links

- Rules and lessons: never hardcode URLs. Use `ruleUrl('<rule id>')` from `ruleAnchors.js`;
  inside text: `[chain rule](!${ruleUrl('derivatives.chain-rule')})` (`!` = same tab).
- Atomic step links: `atomic: '<atomic item id>'` → `hubPath#id`.
- Related / hand-off / tree leaves: item ids → resolved to live, planned or anchor automatically.

## Visuals

The page registers the components it may show:

```js
const VISUAL_COMPONENTS = { DerivativeVisualizer }
<MethodPage hub={data} slug={view} components={VISUAL_COMPONENTS} />
```

`page.visual = { component: 'DerivativeVisualizer', props: {...}, caption: '...' }`

## Pages

- Hub: `pages/<...>/index.jsx` → `<CalculationsExplorer data={prepareHubData(data)} />`
- Leaves: `pages/<...>/[view].jsx` → `getStaticPaths` from `leafSlugs(data)`, `fallback: false`;
  SEO object and robots (`item.indexed`) in `getStaticProps`.
