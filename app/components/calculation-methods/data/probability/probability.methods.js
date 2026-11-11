// probability.methods.js (probability)
// Single data source for the probability section hub's own items:
// /probability/methods (hub) and /probability/methods/[view] (leaf pages).
// Topics: the three basic rules, counting and conditioning methods, the
// rule-choosing strategy, and four applied pages (cards, dice, coins, urns).
// Random variables and distributions have their own sub-hubs.
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/probability/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/probability/methods';

const probabilityMethods = {
  hubPath: HUB,
  hubLabel: 'probability methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ Atomic ═══════════════════════════════════════════════════════
    {
      id: 'complement-rule',
      name: 'How to find a probability with the complement rule',
      subtitle: 'Complement rule',
      glyph: '1−P',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The event is easier to describe by what does not happen: "at least one", "not all", "no six".',
      formula: 'P(A^c) = 1 - P(A)',
      fields: {
        steps: ['1. Describe the opposite event $A^c$ in words.', '2. Find $P(A^c)$ and subtract it from $1$.'],
        worked_example: 'At least one head in $3$ tosses: $1 - P(\\text{no heads}) = 1 - \\left(\\frac{1}{2}\\right)^3 = \\frac{7}{8}$',
      },
      links: [
        { url: ruleUrl('prob.complement-rule'), label: 'Complement rule' },
        { url: ruleUrl('lesson.prob.axioms.consequences'), label: 'Consequences of the axioms (lesson)' },
      ],
    },
    {
      id: 'addition-rule',
      name: 'How to find the probability of A or B',
      subtitle: 'Addition rule',
      glyph: '∪',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question says "or": a heart or a king, an even number or a number above $4$, rain or wind.',
      formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
      fields: {
        steps: ['1. Find $P(A)$, $P(B)$ and the overlap $P(A \\cap B)$.', '2. Add the two and subtract the overlap once; for disjoint events the overlap is $0$.'],
        worked_example: 'Heart or king: $\\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$',
      },
      links: [
        { url: ruleUrl('prob.addition-rule'), label: 'Addition rule' },
        { url: ruleUrl('prob.inclusion-exclusion-principle'), label: 'Inclusion-exclusion' },
      ],
    },
    {
      id: 'multiplication-rule-independent',
      name: 'How to find the probability of A and B for independent events',
      subtitle: 'Multiplication rule (independent events)',
      glyph: '×',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question says "and" and one event has no effect on the other: two dice, repeated coin tosses, draws with replacement.',
      formula: 'P(A \\cap B) = P(A)\\cdot P(B)',
      fields: {
        steps: ['1. Check that the events are independent (separate dice, replacement, separate trials).', '2. Multiply the single probabilities.'],
        worked_example: 'Two dice both show a six: $\\frac{1}{6}\\cdot\\frac{1}{6} = \\frac{1}{36}$',
      },
      links: [
        { url: ruleUrl('prob.independence-formula'), label: 'Independence formula' },
        { url: ruleUrl('lesson.prob.independence.formula'), label: 'Independence (lesson)' },
      ],
    },

    // ═══ Composite ════════════════════════════════════════════════════
    {
      id: 'sample-space',
      slug: 'sample-space',
      name: 'How to list a sample space',
      description: 'Write down every possible outcome of an experiment with a list, a grid or a tree, then count it.',
      uses: ['outcomes', 'grid', 'tree diagram'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to List a Sample Space (Lists, Grids and Trees) | Learn Math Class',
        description: 'List a sample space step by step: decide what one outcome records, pick a list, grid or tree, write every outcome, then count and check. Examples and mistakes.',
        keywords: ['how to list a sample space', 'sample space examples', 'sample space of two dice', 'sample space coin toss', 'list all outcomes'],
      },
      page: {
        h1: 'How to List a Sample Space',
        lead:
          'A sample space $\\Omega$ is the set of all possible outcomes of an experiment. Decide what one outcome records, then list the outcomes in a fixed pattern so none is missed and none is written twice.',
        recognize:
          'The question asks you to "list all outcomes", "write the sample space", or to count outcomes before finding a probability: two coins, a coin and a die, two dice, two balls drawn from a bag. Test: can you say in one phrase what a single run of the experiment produces?',
        recognizeNote: `See the ${link('lesson.prob.sample-space.definition', 'definition of a sample space')} and the ways of ${link('lesson.prob.sample-space.outcomes', 'listing and representing outcomes')}.`,
        methods: [
          {
            name: 'Grid',
            tag: 'two stages',
            preferred: true,
            formula: '|\\Omega| = m \\cdot n',
            body: 'Rows for the first stage, columns for the second; each cell is one outcome.',
          },
          {
            name: 'Plain list',
            tag: 'few outcomes',
            formula: '\\Omega = \\{\\omega_1, \\omega_2, \\ldots\\}',
            body: 'Write the outcomes in a fixed order, for example alphabetical, inside set braces.',
          },
          {
            name: 'Tree',
            tag: 'three or more stages',
            formula: '\\text{outcomes} = \\text{paths}',
            body: `Branch once per stage; every path from the root to a tip is one outcome (see [tree diagrams](!${HUB}/tree-diagrams)).`,
          },
        ],
        steps: {
          traceLabel: 'On tossing a coin and rolling a die',
          items: [
            {
              title: 'Decide what one outcome records.',
              body: 'Note the order of the stages and whether it matters.',
              state: 'an ordered pair (coin, die)',
            },
            {
              title: 'Pick a way to list.',
              body: 'Two stages fit a grid; three or more fit a tree.',
              state: 'grid: $2$ rows (H, T), $6$ columns',
            },
            {
              title: 'Write every outcome in a fixed pattern.',
              body: 'Go row by row so nothing is skipped.',
              state: '$\\Omega = \\{H1, \\ldots, H6, T1, \\ldots, T6\\}$',
            },
            {
              title: 'Count and check.',
              body: 'The count must equal the product of the stage sizes.',
              state: '$|\\Omega| = 2 \\cdot 6 = 12$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'three coin tosses',
            badge: 'list',
            lines: [
              { math: '$\\Omega = \\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\}$', why: 'alphabetical order' },
              { math: '$|\\Omega| = 2^3 = 8$', why: 'two choices, three times', answer: true },
            ],
          },
          {
            title: 'two dice, sum 8',
            badge: 'grid',
            lines: [
              { math: '$6 \\cdot 6 = 36$ ordered pairs', why: 'first die, second die' },
              { math: 'sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$', why: 'read the diagonal' },
              { math: '$5$ outcomes out of $36$', why: '', answer: true },
            ],
          },
          {
            title: 'two balls from red, green, blue',
            badge: 'without replacement',
            lines: [
              { math: 'order matters: $RG, RB, GR, GB, BR, BG$', why: 'no ball repeats' },
              { math: '$3 \\cdot 2 = 6$ outcomes', why: 'second draw has one fewer' },
              { math: 'order ignored: $\\{R,G\\}, \\{R,B\\}, \\{G,B\\}$, $3$ outcomes', why: 'each pair counted once', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A grid is the multiplication principle made visible: $2$ rows times $6$ columns gives $12$ cells, one per outcome. Roll and toss in the [dice roll visualizer](!/probability/visual-tools/dice-roll) and the [coin toss visualizer](!/probability/visual-tools/coin-toss) to see every outcome appear.',
        },
        pitfalls: [
          {
            title: 'Listing sums instead of outcomes',
            wrong: 'two dice: $\\Omega = \\{2, 3, \\ldots, 12\\}$, all equally likely',
            right: 'list the $36$ ordered pairs; a sum of $7$ has $6$ of them, a sum of $2$ only one',
          },
          {
            title: 'Dropping the order',
            wrong: 'two coins: $\\{HH, HT, TT\\}$',
            right: '$HT$ and $TH$ are different outcomes: $\\{HH, HT, TH, TT\\}$',
          },
          {
            title: 'Repeating an item drawn without replacement',
            wrong: '$RR$ in the list for two different balls',
            right: 'without replacement a ball cannot appear twice',
          },
        ],
        related: ['classical-probability', 'tree-diagrams', 'dice-problems'],
        builtOn: [
          { label: 'Definition of sample space (lesson)', url: ruleUrl('lesson.prob.sample-space.definition') },
          { label: 'Listing outcomes (lesson)', url: ruleUrl('lesson.prob.sample-space.outcomes') },
          { label: 'Types of sample spaces (lesson)', url: ruleUrl('lesson.prob.sample-space.types') },
        ],
      },
    },
    {
      id: 'classical-probability',
      slug: 'classical-probability',
      name: 'How to find a probability by counting outcomes',
      description: 'Equally likely outcomes: count the favorable ones, count all of them, divide.',
      uses: ['classical probability', 'complement rule', 'combinations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Probability by Counting Outcomes | Learn Math Class',
        description: 'Find a probability by counting: check the outcomes are equally likely, count all of them, count the favorable ones, divide. Worked examples and common mistakes.',
        keywords: ['classical probability', 'favorable outcomes over total outcomes', 'how to find probability', 'probability by counting', 'equally likely outcomes'],
      },
      page: {
        h1: 'How to Find a Probability by Counting Outcomes',
        lead:
          'When every outcome is equally likely, a probability is a ratio of two counts: the outcomes in the event over all outcomes. The work is in counting both correctly, on the same sample space.',
        recognize:
          'Fair coins, fair dice, a well-shuffled deck, a random choice from a group: "what is the probability that the sum is $7$", "that the card is a heart", "that both chosen people are women". Test: are all outcomes equally likely?',
        recognizeNote: `The ${link('prob.classical-probability-formula', 'classical probability formula')} is developed in ${link('lesson.prob.combinatorics.3', 'counting in classical probability experiments')}.`,
        methods: [
          {
            name: 'Count the event',
            tag: 'usual choice',
            preferred: true,
            formula: 'P(A) = \\frac{|A|}{|\\Omega|}',
            body: 'List or count the favorable outcomes directly.',
          },
          {
            name: 'Count the complement',
            tag: '"at least one"',
            formula: 'P(A) = 1 - \\frac{|A^c|}{|\\Omega|}',
            body: `Count the outcomes that are not in the event and use the ${link('prob.complement-rule', 'complement rule')}.`,
          },
          {
            name: 'Counting formulas',
            tag: 'large spaces',
            formula: 'P(A) = \\frac{\\binom{k}{r}\\binom{n-k}{s}}{\\binom{n}{r+s}}',
            body: 'Count unordered selections with combinations when listing is too long.',
          },
        ],
        steps: {
          traceLabel: 'On two fair dice, sum equal to 7',
          items: [
            {
              title: 'Check that the outcomes are equally likely.',
              body: `Use ordered pairs, not sums (see [listing a sample space](!${HUB}/sample-space)).`,
              state: 'ordered pairs $(a, b)$, each with chance $\\frac{1}{36}$',
            },
            {
              title: 'Count all outcomes.',
              body: 'Multiply the sizes of the stages.',
              state: '$|\\Omega| = 6 \\cdot 6 = 36$',
            },
            {
              title: 'Count the favorable outcomes.',
              body: 'Use the same kind of outcome as in the total.',
              state: '$(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$: $|A| = 6$',
            },
            {
              title: 'Divide and simplify.',
              body: 'The answer lies between $0$ and $1$.',
              state: '$P(A) = \\frac{6}{36} = \\frac{1}{6}$',
            },
          ],
        },
        examples: [
          {
            title: 'one card',
            badge: 'direct count',
            lines: [
              { math: '$P(\\text{heart}) = \\frac{13}{52}$', why: '13 hearts in 52 cards' },
              { math: '$= \\frac{1}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'at least one six with two dice',
            badge: 'complement',
            lines: [
              { math: 'no six: $5 \\cdot 5 = 25$ of $36$ pairs', why: 'five faces each' },
              { math: '$P = 1 - \\frac{25}{36}$', why: 'complement rule' },
              { math: '$= \\frac{11}{36}$', why: '', answer: true },
            ],
          },
          {
            title: 'choosing a committee',
            badge: 'combinations',
            lines: [
              { math: '$2$ people chosen from $5$ men and $3$ women; both women?', why: '' },
              { math: '$|\\Omega| = \\binom{8}{2} = 28$, $|A| = \\binom{3}{2} = 3$', why: 'order does not matter' },
              { math: '$P = \\frac{3}{28}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Picture the $36$ cells of the two-dice grid. An event is a set of cells; its probability is the fraction of the grid it covers. That only works because every cell has the same weight, which is why the outcomes must be equally likely. The [probability calculator](!/probability/calculators/basic) checks simple ratios.',
        },
        pitfalls: [
          {
            title: 'Outcomes that are not equally likely',
            wrong: '$P(\\text{sum } 12) = \\frac{1}{11}$ because there are $11$ sums',
            right: 'only $(6,6)$ gives $12$: $\\frac{1}{36}$',
          },
          {
            title: 'Ordered total, unordered event',
            wrong: 'favorable pairs counted as sets, total counted as ordered pairs',
            right: 'count both the same way, ordered or unordered',
          },
          {
            title: 'A probability above 1',
            wrong: '$\\frac{36}{6}$',
            right: 'favorable over total: $\\frac{6}{36}$; the total is always the larger count',
          },
        ],
        related: ['sample-space', 'card-problems', 'which-probability-rule'],
        builtOn: [
          { label: 'Classical probability formula', url: ruleUrl('prob.classical-probability-formula') },
          { label: 'Counting in classical experiments (lesson)', url: ruleUrl('lesson.prob.combinatorics.3') },
          { label: 'Complement rule', url: ruleUrl('prob.complement-rule') },
        ],
      },
    },
    {
      id: 'conditional-probability',
      slug: 'conditional-probability',
      name: 'How to find a conditional probability',
      description: 'The probability of A given B: divide the overlap by the probability of the condition.',
      uses: ['conditional probability formula', 'restricted sample space'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Conditional Probability (Formula and Examples) | Learn Math Class',
        description: 'Find P(A given B): identify the condition, find its probability and the overlap, then divide. Includes the restricted sample space, examples and mistakes.',
        keywords: ['how to find conditional probability', 'P(A given B)', 'conditional probability formula', 'conditional probability examples', 'given that probability'],
      },
      page: {
        h1: 'How to Find a Conditional Probability',
        lead:
          'Knowing that $B$ happened shrinks the sample space to $B$. The conditional probability $P(A \\mid B)$ is the share of $B$ that also lies in $A$.',
        recognize:
          'The words **given**, **given that**, **if it is known that**, **among those who**: "the probability of a six given that the roll is even", "of those who passed, what fraction studied". Test: is part of the information a fact that has already happened?',
        recognizeNote: `The ${link('lesson.prob.conditional-probability.formula', 'conditional probability formula')} follows from ${link('lesson.prob.conditional-probability.conditioning', 'conditioning as restricting the situation')}.`,
        methods: [
          {
            name: 'Formula',
            tag: 'usual choice',
            preferred: true,
            formula: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0',
            body: `Divide the probability of both by the probability of the condition (${link('prob.conditional-probability', 'formula')}).`,
          },
          {
            name: 'Restricted sample space',
            tag: 'equally likely outcomes',
            formula: 'P(A \\mid B) = \\frac{|A \\cap B|}{|B|}',
            body: 'Keep only the outcomes in $B$ and count how many of them are in $A$.',
          },
        ],
        steps: {
          traceLabel: 'On one die: a six, given the roll is even',
          items: [
            {
              title: 'Name the condition.',
              body: 'The event after "given" is $B$; the event asked about is $A$.',
              state: '$B = \\{2, 4, 6\\}$, $A = \\{6\\}$',
            },
            {
              title: 'Find the probability of the condition.',
              body: 'It must be positive.',
              state: '$P(B) = \\frac{3}{6} = \\frac{1}{2}$',
            },
            {
              title: 'Find the probability of both.',
              body: 'The outcomes in $A$ and in $B$.',
              state: '$A \\cap B = \\{6\\}$, $P(A \\cap B) = \\frac{1}{6}$',
            },
            {
              title: 'Divide.',
              body: 'Overlap over condition.',
              state: '$P(A \\mid B) = \\frac{1/6}{1/2} = \\frac{1}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'two coins',
            badge: 'restricted space',
            lines: [
              { math: 'given at least one head: $B = \\{HH, HT, TH\\}$', why: 'drop $TT$' },
              { math: '$P(HH \\mid B) = \\frac{1}{3}$', why: 'one of three outcomes', answer: true },
            ],
          },
          {
            title: 'a king, given a face card',
            badge: 'cards',
            lines: [
              { math: '$12$ face cards, $4$ of them kings', why: 'jack, queen, king per suit' },
              { math: '$P(\\text{king} \\mid \\text{face}) = \\frac{4}{12} = \\frac{1}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'from the union',
            badge: 'addition rule first',
            lines: [
              { math: '$P(A) = 0.5$, $P(B) = 0.4$, $P(A \\cup B) = 0.7$', why: '' },
              { math: '$P(A \\cap B) = 0.5 + 0.4 - 0.7 = 0.2$', why: 'addition rule, solved for overlap' },
              { math: '$P(A \\mid B) = \\frac{0.2}{0.4} = 0.5$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw $B$ as a region and shade the part of it that is inside $A$. Conditioning throws away everything outside $B$ and rescales $B$ to probability $1$; the shaded share is the answer. The [conditional probability visualizer](!/probability/visual-tools/conditional-probability) shows the same rescaling as a Venn diagram, a tree, a table and a waffle chart.',
        },
        pitfalls: [
          {
            title: 'Reversing the condition',
            wrong: '$P(A \\mid B) = P(B \\mid A)$',
            right: 'they share a numerator but divide by $P(B)$ and $P(A)$',
          },
          {
            title: 'Dividing by the wrong event',
            wrong: '$P(6 \\mid \\text{even}) = \\frac{1/6}{1/6}$',
            right: 'divide by the condition: $\\frac{1/6}{1/2} = \\frac{1}{3}$',
          },
          {
            title: 'Ignoring the condition',
            wrong: '$P(6 \\mid \\text{even}) = \\frac{1}{6}$',
            right: 'the sample space is now $\\{2, 4, 6\\}$: $\\frac{1}{3}$',
          },
        ],
        examplesAfter: 'Check your own numbers in the [conditional probability calculator](!/probability/calculators/conditional-probability).',
        related: ['multiplication-rule-dependent', 'bayes-theorem', 'contingency-tables'],
        builtOn: [
          { label: 'Conditional probability formula', url: ruleUrl('prob.conditional-probability') },
          { label: 'Conditional probability formula (lesson)', url: ruleUrl('lesson.prob.conditional-probability.formula') },
          { label: 'Addition rule', url: ruleUrl('prob.addition-rule') },
        ],
      },
    },
    {
      id: 'independence-test',
      slug: 'independence-test',
      name: 'How to test whether two events are independent',
      description: 'Compare the probability of both with the product of the single probabilities.',
      uses: ['independence formula', 'conditional probability'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Test Whether Two Events Are Independent | Learn Math Class',
        description: 'Test two events for independence: find each probability, find the probability of both from the outcomes, compare it with the product. Examples and mistakes.',
        keywords: ['how to test independence', 'are two events independent', 'independent events test', 'P(A and B) = P(A)P(B)', 'independent vs mutually exclusive'],
      },
      page: {
        h1: 'How to Test Whether Two Events Are Independent',
        lead:
          'Two events are independent when knowing one happened does not change the chance of the other. Numerically, the probability of both equals the product of the two probabilities.',
        recognize:
          '"Are $A$ and $B$ independent?", "show that the events are dependent", "does the result of one affect the other?". You are given the probabilities, a table, or an experiment you can list. Test: can you find $P(A \\cap B)$ without assuming independence?',
        recognizeNote: `Independence is defined in ${link('lesson.prob.independence.definition', 'the formal definition of independence')}; the test is the ${link('lesson.prob.independence.formula', 'independence formula')}.`,
        methods: [
          {
            name: 'Product test',
            tag: 'usual choice',
            preferred: true,
            formula: 'P(A \\cap B) = P(A)\\cdot P(B)',
            body: `Equal means independent (${link('prob.independence-formula', 'independence formula')}).`,
          },
          {
            name: 'Conditional test',
            tag: 'when a conditional is given',
            formula: 'P(A \\mid B) = P(A)',
            body: `Compare the [conditional probability](!${HUB}/conditional-probability) with the unconditional one.`,
          },
        ],
        steps: {
          traceLabel: 'On one die: A = even, B = at most 2',
          items: [
            {
              title: 'Find each probability.',
              body: 'Count or read them off.',
              state: '$P(A) = \\frac{3}{6} = \\frac{1}{2}$, $P(B) = \\frac{2}{6} = \\frac{1}{3}$',
            },
            {
              title: 'Find the probability of both from the outcomes.',
              body: 'Do not multiply here; that is what is being tested.',
              state: '$A \\cap B = \\{2\\}$, $P(A \\cap B) = \\frac{1}{6}$',
            },
            {
              title: 'Multiply the single probabilities.',
              body: 'This is what independence would predict.',
              state: '$P(A)\\cdot P(B) = \\frac{1}{2}\\cdot\\frac{1}{3} = \\frac{1}{6}$',
            },
            {
              title: 'Compare.',
              body: 'Equal: independent. Different: dependent.',
              state: '$\\frac{1}{6} = \\frac{1}{6}$: independent',
            },
          ],
        },
        examples: [
          {
            title: 'two coins',
            badge: 'independent',
            lines: [
              { math: '$A$ = first is heads, $B$ = second is heads', why: '' },
              { math: '$P(A \\cap B) = \\frac{1}{4} = \\frac{1}{2}\\cdot\\frac{1}{2}$: independent', why: 'one of four outcomes', answer: true },
            ],
          },
          {
            title: 'a heart and a king',
            badge: 'independent',
            lines: [
              { math: '$P(\\text{heart}) = \\frac{1}{4}$, $P(\\text{king}) = \\frac{1}{13}$', why: '' },
              { math: '$P(\\text{king of hearts}) = \\frac{1}{52} = \\frac{1}{4}\\cdot\\frac{1}{13}$', why: 'one card is both' },
              { math: 'independent', why: '', answer: true },
            ],
          },
          {
            title: 'even and above 3',
            badge: 'dependent',
            lines: [
              { math: '$A = \\{2, 4, 6\\}$, $B = \\{4, 5, 6\\}$, $A \\cap B = \\{4, 6\\}$', why: '' },
              { math: '$P(A \\cap B) = \\frac{1}{3}$, $P(A)P(B) = \\frac{1}{4}$', why: 'compare the two' },
              { math: '$\\frac{1}{3} \\neq \\frac{1}{4}$: dependent', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'In a unit square, give $A$ the left strip of width $P(A)$ and $B$ the bottom strip of height $P(B)$. If the events are independent, their overlap is exactly the corner rectangle of area $P(A)\\cdot P(B)$. A larger or smaller overlap means one event pulls the other up or down. Try it in the [two events calculator](!/probability/calculators/two-events).',
        },
        pitfalls: [
          {
            title: 'Disjoint read as independent',
            wrong: '$A$ and $B$ cannot happen together, so they are independent',
            right: 'disjoint events with positive probabilities are dependent: $0 \\neq P(A)P(B)$',
          },
          {
            title: 'Assuming the answer',
            wrong: '$P(A \\cap B) = P(A)P(B)$, so the product equals itself',
            right: 'find $P(A \\cap B)$ from the outcomes or the table first',
          },
          {
            title: 'Judging by the story',
            wrong: '"the events seem unrelated", so independent',
            right: 'independence is a numerical fact; check the product',
          },
        ],
        related: ['conditional-probability', 'contingency-tables', 'multiplication-rule-dependent'],
        builtOn: [
          { label: 'Independence formula', url: ruleUrl('prob.independence-formula') },
          { label: 'Independence formula (lesson)', url: ruleUrl('lesson.prob.independence.formula') },
          { label: 'Independence mistakes (lesson)', url: ruleUrl('lesson.prob.independence.mistakes') },
        ],
      },
    },
    {
      id: 'multiplication-rule-dependent',
      slug: 'multiplication-rule-dependent',
      name: 'How to find the probability of A and B for dependent events',
      description: 'Multiply the first probability by the second one, worked out after the first has happened.',
      uses: ['multiplication rule', 'chain rule', 'conditional probability'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Probability of A and B for Dependent Events | Learn Math Class',
        description: 'Find the probability of A and B when the first event changes the second: order the events, find each conditional probability, multiply. Examples and mistakes.',
        keywords: ['multiplication rule dependent events', 'probability of A and B', 'without replacement probability', 'chain rule probability', 'dependent events examples'],
      },
      page: {
        h1: 'How to Find the Probability of A and B for Dependent Events',
        lead:
          'When the first event changes the situation, the second probability must be worked out in the changed situation. Multiply the probability of the first event by the conditional probability of the second.',
        recognize:
          'The word **and** together with **without replacement**, **then**, **one after another**, **both**: two cards from one deck, two balls from one bag, two people chosen from one group. Test: does the second step have fewer items, or different chances, because of the first?',
        recognizeNote: `The ${link('prob.multiplication-rule', 'multiplication rule')} is the ${link('lesson.prob.conditional-probability.formula', 'conditional probability formula')} solved for the overlap.`,
        methods: [
          {
            name: 'Multiplication rule',
            tag: 'usual choice',
            preferred: true,
            formula: 'P(A \\cap B) = P(A)\\cdot P(B \\mid A)',
            body: `For three or more events, keep multiplying with the ${link('prob.chain-rule', 'chain rule')}.`,
          },
          {
            name: 'Counting',
            tag: 'equally likely selections',
            formula: 'P = \\frac{\\binom{4}{2}}{\\binom{52}{2}}',
            body: `Count unordered selections and [divide by the total](!${HUB}/classical-probability).`,
          },
        ],
        steps: {
          traceLabel: 'On two cards without replacement, both aces',
          items: [
            {
              title: 'Put the events in order.',
              body: 'What happens first is $A$.',
              state: '$A$ = first card is an ace, $B$ = second card is an ace',
            },
            {
              title: 'Find the probability of the first event.',
              body: 'In the full situation.',
              state: '$P(A) = \\frac{4}{52}$',
            },
            {
              title: 'Find the second probability after the first.',
              body: 'Remove what the first event used up.',
              state: '$3$ aces left in $51$ cards: $P(B \\mid A) = \\frac{3}{51}$',
            },
            {
              title: 'Multiply.',
              body: 'Then simplify.',
              state: '$\\frac{4}{52}\\cdot\\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$',
            },
          ],
        },
        examples: [
          {
            title: 'two red balls',
            badge: 'two steps',
            lines: [
              { math: 'bag of $5$ red, $3$ blue; draw $2$ without replacement', why: '' },
              { math: '$\\frac{5}{8}\\cdot\\frac{4}{7} = \\frac{20}{56}$', why: 'one red fewer for the second' },
              { math: '$= \\frac{5}{14}$', why: '', answer: true },
            ],
          },
          {
            title: 'three hearts',
            badge: 'chain rule',
            lines: [
              { math: '$\\frac{13}{52}\\cdot\\frac{12}{51}\\cdot\\frac{11}{50}$', why: 'one heart fewer each time' },
              { math: '$= \\frac{1716}{132600} = \\frac{11}{850}$', why: '', answer: true },
            ],
          },
          {
            title: 'exactly one red',
            badge: 'two orders',
            lines: [
              { math: 'red then blue: $\\frac{5}{8}\\cdot\\frac{3}{7} = \\frac{15}{56}$', why: 'same bag of 5 red, 3 blue' },
              { math: 'blue then red: $\\frac{3}{8}\\cdot\\frac{5}{7} = \\frac{15}{56}$', why: '' },
              { math: '$\\frac{30}{56} = \\frac{15}{28}$', why: 'add the disjoint orders', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Think of the first draw as cutting the sample space down to the cases where $A$ happened, and the second probability as a fraction of that smaller space. Taking a fraction of a fraction is multiplication. The [tree diagram tool](!/probability/visual-tools/conditional-probability/tree-diagram) shows the second-level branches changing with the first.',
        },
        pitfalls: [
          {
            title: 'Treating the draws as independent',
            wrong: '$\\frac{4}{52}\\cdot\\frac{4}{52}$',
            right: 'one ace and one card are gone: $\\frac{4}{52}\\cdot\\frac{3}{51}$',
          },
          {
            title: 'Reducing only the top',
            wrong: '$\\frac{4}{52}\\cdot\\frac{3}{52}$',
            right: 'the deck is smaller too: $\\frac{3}{51}$',
          },
          {
            title: 'Forgetting the other order',
            wrong: 'exactly one red $= \\frac{5}{8}\\cdot\\frac{3}{7}$',
            right: 'add blue-then-red as well: $\\frac{15}{28}$',
          },
        ],
        related: ['tree-diagrams', 'urn-problems', 'conditional-probability'],
        builtOn: [
          { label: 'Multiplication rule', url: ruleUrl('prob.multiplication-rule') },
          { label: 'Chain rule', url: ruleUrl('prob.chain-rule') },
          { label: 'Dependence patterns (lesson)', url: ruleUrl('lesson.prob.independence.patterns') },
        ],
      },
    },
    {
      id: 'total-probability',
      slug: 'total-probability',
      name: 'How to use the law of total probability',
      description: 'Split into cases, find the chance of the event in each case, weight by the case and add.',
      uses: ['law of total probability', 'multiplication rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Law of Total Probability | Learn Math Class',
        description: 'Use the law of total probability: split into cases that cover everything, find the event chance in each case, weight by the case and add. Worked examples.',
        keywords: ['law of total probability', 'total probability examples', 'how to use total probability', 'weighted probability cases', 'total probability formula'],
      },
      page: {
        h1: 'How to Use the Law of Total Probability',
        lead:
          'When the chance of an event depends on which case you are in, find it in each case and take a weighted average. The weights are the probabilities of the cases.',
        recognize:
          'Several sources, groups or scenarios, each with its own rate: two machines with different defect rates, an urn chosen by a coin toss, a test that behaves differently for sick and healthy people. The question asks for the overall probability. Test: do the cases cover everything without overlapping?',
        recognizeNote: `The ${link('lesson.prob.total-probability.law', 'law of total probability')} is built from ${link('lesson.prob.total-probability.cases', 'splitting a probability across cases')}.`,
        steps: {
          traceLabel: 'On two machines: 60% of parts at 2% defective, 40% at 5%',
          items: [
            {
              title: 'Split into cases.',
              body: 'The cases must not overlap and their probabilities must add to $1$.',
              state: '$P(M_1) = 0.6$, $P(M_2) = 0.4$; $0.6 + 0.4 = 1$ ✓',
            },
            {
              title: 'Write the event probability in each case.',
              body: 'These are conditional probabilities.',
              state: '$P(D \\mid M_1) = 0.02$, $P(D \\mid M_2) = 0.05$',
            },
            {
              title: 'Multiply each case by its weight.',
              body: `${link('prob.multiplication-rule', 'Multiplication rule')}.`,
              state: '$0.6 \\cdot 0.02 = 0.012$, $0.4 \\cdot 0.05 = 0.02$',
            },
            {
              title: 'Add the products.',
              body: `${link('prob.law-of-total-probability', 'Law of total probability')}.`,
              state: '$P(D) = 0.012 + 0.02 = 0.032$',
            },
          ],
        },
        examples: [
          {
            title: 'an urn chosen by a coin',
            badge: 'two cases',
            lines: [
              { math: 'urn 1: $3$ red, $2$ blue; urn 2: $1$ red, $4$ blue', why: 'each urn with chance $\\frac{1}{2}$' },
              { math: '$P(R) = \\frac{1}{2}\\cdot\\frac{3}{5} + \\frac{1}{2}\\cdot\\frac{1}{5}$', why: 'weight each urn' },
              { math: '$= \\frac{2}{5}$', why: '', answer: true },
            ],
          },
          {
            title: 'three suppliers',
            badge: 'three cases',
            lines: [
              { math: 'shares $0.5, 0.3, 0.2$; defect rates $0.01, 0.02, 0.03$', why: '' },
              { math: '$0.005 + 0.006 + 0.006$', why: 'share times rate' },
              { math: '$P(D) = 0.017$', why: '', answer: true },
            ],
          },
          {
            title: 'the second card is an ace',
            badge: 'cases from the first card',
            lines: [
              { math: 'first an ace: $\\frac{4}{52}\\cdot\\frac{3}{51}$', why: '' },
              { math: 'first not an ace: $\\frac{48}{52}\\cdot\\frac{4}{51}$', why: '' },
              { math: '$\\frac{12 + 192}{2652} = \\frac{204}{2652} = \\frac{1}{13}$', why: 'same as the first card', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Cut the sample space into strips, one per case, with widths $P(B_i)$. Inside each strip, shade the fraction $P(A \\mid B_i)$. The total shaded area is $P(A)$: a weighted average of the strip rates. Build your own partition in the [total probability visualizer](!/probability/visual-tools/total-probability).',
        },
        pitfalls: [
          {
            title: 'Adding the rates without weights',
            wrong: '$P(D) = 0.02 + 0.05 = 0.07$',
            right: 'weight each rate by its case: $0.6 \\cdot 0.02 + 0.4 \\cdot 0.05 = 0.032$',
          },
          {
            title: 'Cases that do not cover everything',
            wrong: 'weights $0.5$ and $0.3$ only',
            right: 'the weights must add to $1$; add the missing case',
          },
          {
            title: 'Reversed conditionals',
            wrong: 'using $P(M_1 \\mid D)$ as the weight',
            right: 'the weight is $P(M_1)$; the rate is $P(D \\mid M_1)$',
          },
        ],
        related: ['bayes-theorem', 'tree-diagrams', 'conditional-probability'],
        builtOn: [
          { label: 'Law of total probability', url: ruleUrl('prob.law-of-total-probability') },
          { label: 'The law (lesson)', url: ruleUrl('lesson.prob.total-probability.law') },
          { label: 'Multiplication rule', url: ruleUrl('prob.multiplication-rule') },
        ],
      },
    },
    {
      id: 'bayes-theorem',
      slug: 'bayes-theorem',
      name: "How to use Bayes' theorem",
      description: 'Reverse a conditional probability: from P(evidence given cause) to P(cause given evidence).',
      uses: ["Bayes' theorem", 'law of total probability'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Use Bayes' Theorem (Step by Step) | Learn Math Class",
        description: "Use Bayes' theorem step by step: name the cause and the evidence, write the prior and the rates, find the evidence by total probability, divide. Examples.",
        keywords: ["how to use Bayes' theorem", "Bayes' theorem examples", 'false positive probability', 'reverse conditional probability', 'Bayes rule steps'],
      },
      page: {
        h1: "How to Use Bayes' Theorem",
        lead:
          'You know how likely the evidence is under each cause and want how likely each cause is after seeing the evidence. Multiply the prior by the rate, then divide by the total chance of the evidence.',
        recognize:
          'The given conditional points the other way from the one asked: the test detects the disease $95\\%$ of the time, but what is the chance of the disease **given a positive test**? Also "which machine made the defective part", "which urn was the ball from". Test: you know $P(E \\mid H)$ and need $P(H \\mid E)$.',
        recognizeNote: `The formula is in ${link('lesson.prob.bayes-theorem.formula', "Bayes' theorem (the formula)")}; its denominator comes from ${link('lesson.prob.bayes-theorem.total', 'the role of total probability')}.`,
        methods: [
          {
            name: 'Formula',
            tag: 'usual choice',
            preferred: true,
            formula: 'P(H \\mid E) = \\frac{P(E \\mid H)\\,P(H)}{P(E)}',
            body: `${link('prob.bayes-theorem', "Bayes' theorem")} with $P(E)$ from the [law of total probability](!${HUB}/total-probability).`,
          },
          {
            name: 'Natural frequencies',
            tag: 'no formula',
            formula: '\\frac{\\text{true positives}}{\\text{all positives}}',
            body: 'Imagine $10000$ people, split them by the rates, and count.',
          },
          {
            name: 'Tree',
            tag: 'visual',
            formula: '\\frac{\\text{one path}}{\\text{all paths with } E}',
            body: `Draw the [tree diagram](!${HUB}/tree-diagrams), then divide the path you want by all paths ending in the evidence.`,
          },
        ],
        steps: {
          traceLabel: 'On a test: 1% have the disease, 95% detected, 5% false positives',
          items: [
            {
              title: 'Name the cause and the evidence.',
              body: 'The cause is what you want to know; the evidence is what you observed.',
              state: '$H$ = has the disease, $E$ = tests positive',
            },
            {
              title: 'Write the prior and the two rates.',
              body: 'Read them from the question.',
              state: '$P(H) = 0.01$, $P(E \\mid H) = 0.95$, $P(E \\mid H^c) = 0.05$',
            },
            {
              title: 'Find the total chance of the evidence.',
              body: 'Add the true and the false positives.',
              state: '$P(E) = 0.0095 + 0.0495 = 0.059$',
            },
            {
              title: 'Divide the cause path by the total.',
              body: 'Round at the end only.',
              state: '$P(H \\mid E) = \\frac{0.0095}{0.059} = \\frac{19}{118} \\approx 0.1610$',
            },
          ],
        },
        examples: [
          {
            title: 'which machine',
            badge: 'two causes',
            lines: [
              { math: '$M_1$: $60\\%$ at $2\\%$ defective, $M_2$: $40\\%$ at $5\\%$', why: '' },
              { math: '$P(D) = 0.012 + 0.02 = 0.032$', why: 'total probability' },
              { math: '$P(M_2 \\mid D) = \\frac{0.02}{0.032} = 0.625$', why: '', answer: true },
            ],
          },
          {
            title: 'which urn',
            badge: 'equal priors',
            lines: [
              { math: 'coin picks urn 1 ($3$ red of $5$) or urn 2 ($1$ red of $5$)', why: '' },
              { math: '$P(R) = \\frac{3}{10} + \\frac{1}{10} = \\frac{2}{5}$', why: 'both paths to red' },
              { math: '$P(\\text{urn 1} \\mid R) = \\frac{3/10}{2/5} = \\frac{3}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'a second positive test',
            badge: 'posterior as new prior',
            lines: [
              { math: 'new prior $\\frac{19}{118}$; healthy $\\frac{99}{118}$', why: 'result of the first test' },
              { math: '$\\frac{19 \\cdot 0.95}{19 \\cdot 0.95 + 99 \\cdot 0.05} = \\frac{18.05}{23}$', why: 'the 118 cancels' },
              { math: '$P(H \\mid E_1, E_2) \\approx 0.7848$', why: 'rounded to 4 places', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Picture $10000$ people: $100$ are sick and $95$ of them test positive; $9900$ are healthy and $495$ of them test positive too. Of the $590$ positives, only $95$ are sick, about $16\\%$. The rare cause is swamped by false alarms from the large group. Try other rates in the [Bayes calculator](!/probability/calculators/bayes-calculator).',
        },
        pitfalls: [
          {
            title: 'Reading the rate as the answer',
            wrong: '$P(H \\mid E) = 0.95$ because the test is $95\\%$ accurate',
            right: '$0.95$ is $P(E \\mid H)$; with a $1\\%$ prior $P(H \\mid E) \\approx 0.1610$',
          },
          {
            title: 'Forgetting the false positives',
            wrong: '$P(E) = 0.0095$',
            right: 'add the healthy positives: $0.0095 + 0.0495 = 0.059$',
          },
          {
            title: 'Using the wrong numerator',
            wrong: '$\\frac{P(E \\mid H)}{P(E)}$',
            right: 'multiply by the prior: $\\frac{P(E \\mid H)\\,P(H)}{P(E)}$',
          },
        ],
        related: ['total-probability', 'tree-diagrams', 'conditional-probability'],
        builtOn: [
          { label: "Bayes' theorem", url: ruleUrl('prob.bayes-theorem') },
          { label: "Bayes' theorem (lesson)", url: ruleUrl('lesson.prob.bayes-theorem.formula') },
          { label: 'Law of total probability', url: ruleUrl('prob.law-of-total-probability') },
        ],
      },
    },
    {
      id: 'tree-diagrams',
      slug: 'tree-diagrams',
      name: 'How to solve a probability problem with a tree diagram',
      description: 'One level per stage: label the branches, multiply along each path, add the paths you want.',
      uses: ['tree diagram', 'multiplication rule', 'adding disjoint paths'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a Probability Problem with a Tree Diagram | Learn Math Class',
        description: 'Solve a probability problem with a tree diagram: one level per stage, label the branches, multiply along each path, add the paths in the event. Worked examples.',
        keywords: ['probability tree diagram', 'how to draw a tree diagram', 'tree diagram examples', 'multiply along branches', 'tree diagram without replacement'],
      },
      page: {
        h1: 'How to Solve a Probability Problem with a Tree Diagram',
        lead:
          'A tree turns a multi-stage experiment into paths. Each branch carries a conditional probability; multiplying along a path gives the chance of that path, and adding paths gives the chance of an event.',
        recognize:
          'The experiment happens in stages: two draws from a bag, a weather forecast and then being late, a test after a diagnosis. The second-stage chances may depend on the first. Test: can you name the stages in order?',
        recognizeNote: `The parts of a tree are described in ${link('lesson.prob.tree-diagrams.2', 'components of a tree diagram')}, and their use in ${link('lesson.prob.tree-diagrams.5', 'computing probabilities with trees')}.`,
        steps: {
          traceLabel: 'On a bag of 3 red, 2 blue: two draws without replacement, same color',
          items: [
            {
              title: 'Draw one level per stage.',
              body: 'Each node splits into the possible results of the next stage.',
              state: 'first: R or B; second: R or B after each',
            },
            {
              title: 'Label each branch with its probability.',
              body: 'Second-level branches are conditional on the path so far; each fan adds to $1$.',
              state: 'R $\\frac{3}{5}$ then R $\\frac{2}{4}$; B $\\frac{2}{5}$ then B $\\frac{1}{4}$',
            },
            {
              title: 'Multiply along each path you need.',
              body: `${link('prob.multiplication-rule', 'Multiplication rule')}.`,
              state: 'RR: $\\frac{6}{20}$, BB: $\\frac{2}{20}$',
            },
            {
              title: 'Add the paths that make up the event.',
              body: 'Different paths are disjoint, so their probabilities add.',
              state: '$\\frac{6}{20} + \\frac{2}{20} = \\frac{2}{5}$',
              atomic: 'addition-rule',
            },
          ],
        },
        examples: [
          {
            title: 'two coin tosses',
            badge: 'independent stages',
            lines: [
              { math: 'exactly one head: paths HT and TH', why: '' },
              { math: '$\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$', why: 'each path $\\frac{1}{2}\\cdot\\frac{1}{2}$', answer: true },
            ],
          },
          {
            title: 'rain and being late',
            badge: 'total probability',
            lines: [
              { math: '$P(\\text{rain}) = 0.3$; late with rain $0.4$, without $0.1$', why: '' },
              { math: '$0.3 \\cdot 0.4 + 0.7 \\cdot 0.1 = 0.12 + 0.07$', why: 'two paths end in late' },
              { math: '$P(\\text{late}) = 0.19$', why: '', answer: true },
            ],
          },
          {
            title: 'rain, given late',
            badge: 'reverse',
            lines: [
              { math: 'path rain-late $0.12$ of all late paths $0.19$', why: 'same tree' },
              { math: '$P(\\text{rain} \\mid \\text{late}) = \\frac{12}{19} \\approx 0.6316$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each branch passes on a fraction of what reaches it, so a path keeps a fraction of a fraction: that is why you multiply. The tips of the tree split the whole probability $1$ into disjoint pieces, which is why you add them. Build a tree in the [tree diagram tool](!/probability/visual-tools/conditional-probability/tree-diagram).',
        },
        pitfalls: [
          {
            title: 'Adding along a path',
            wrong: 'RR: $\\frac{3}{5} + \\frac{2}{4}$',
            right: 'multiply along a path: $\\frac{3}{5}\\cdot\\frac{2}{4}$',
          },
          {
            title: 'Second level not updated',
            wrong: 'R then R: $\\frac{3}{5}\\cdot\\frac{3}{5}$ without replacement',
            right: 'one red is gone: $\\frac{3}{5}\\cdot\\frac{2}{4}$',
          },
          {
            title: 'A fan that does not add to 1',
            wrong: 'after R: R $\\frac{2}{4}$, B $\\frac{3}{4}$',
            right: 'after R the bag has $2$ red, $2$ blue: $\\frac{2}{4}$ and $\\frac{2}{4}$',
          },
        ],
        related: ['multiplication-rule-dependent', 'total-probability', 'bayes-theorem'],
        builtOn: [
          { label: 'Probability values on a tree (lesson)', url: ruleUrl('lesson.prob.tree-diagrams.3') },
          { label: 'Computing with trees (lesson)', url: ruleUrl('lesson.prob.tree-diagrams.5') },
          { label: 'Multiplication rule', url: ruleUrl('prob.multiplication-rule') },
        ],
      },
    },
    {
      id: 'contingency-tables',
      slug: 'contingency-tables',
      name: 'How to find probabilities from a two-way table',
      description: 'Joint, marginal and conditional probabilities: pick the right cell and the right total.',
      uses: ['joint probability', 'marginal probability', 'conditional probability'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Probabilities from a Two-Way Table | Learn Math Class',
        description: 'Find joint, marginal and conditional probabilities from a two-way contingency table: add the totals, then divide the right cell by the right total. Examples.',
        keywords: ['two-way table probability', 'contingency table probability', 'conditional probability from a table', 'marginal probability', 'joint probability table'],
      },
      page: {
        h1: 'How to Find Probabilities from a Two-Way Table',
        lead:
          'A two-way table counts every combination of two categories. Every probability you need is one number from the table divided by one total; the question decides which total.',
        recognize:
          'A table of counts with two categories, such as studied or not against passed or failed, smokers against non-smokers by gender. Questions ask for "both", "either", or "given". Test: is each person counted in exactly one cell?',
        recognizeNote: `Tables are introduced in ${link('lesson.prob.joint-probability.tables', 'contingency tables')}; row and column totals give ${link('lesson.prob.joint-probability.marginal', 'marginal probabilities')}.`,
        steps: {
          traceLabel: 'On 200 students: studied 90 pass, 30 fail; did not study 40 pass, 40 fail',
          items: [
            {
              title: 'Add the row and column totals.',
              body: 'The grand total is the sum of all cells.',
              state: 'studied $120$, not $80$; pass $130$, fail $70$; total $200$',
            },
            {
              title: 'For "both", divide one cell by the grand total.',
              body: 'This is the joint probability.',
              state: '$P(S \\cap \\text{pass}) = \\frac{90}{200} = 0.45$',
            },
            {
              title: 'For one category, divide its total by the grand total.',
              body: 'This is the marginal probability.',
              state: '$P(\\text{pass}) = \\frac{130}{200} = 0.65$',
            },
            {
              title: 'For "given", divide the cell by the total of the condition.',
              body: `The condition is your new sample space (${link('prob.conditional-probability', 'conditional probability')}).`,
              state: '$P(\\text{pass} \\mid S) = \\frac{90}{120} = 0.75$',
            },
          ],
        },
        examples: [
          {
            title: 'a marginal',
            badge: 'column total',
            lines: [
              { math: '$P(\\text{fail}) = \\frac{70}{200}$', why: 'fail column over grand total' },
              { math: '$= \\frac{7}{20}$', why: '', answer: true },
            ],
          },
          {
            title: 'the reverse conditional',
            badge: 'condition on a column',
            lines: [
              { math: 'given pass: the pass column, $130$ students', why: '' },
              { math: '$P(S \\mid \\text{pass}) = \\frac{90}{130} = \\frac{9}{13}$', why: '', answer: true },
            ],
          },
          {
            title: 'are studying and passing independent?',
            badge: 'independence',
            lines: [
              { math: '$P(S)\\,P(\\text{pass}) = 0.6 \\cdot 0.65 = 0.39$', why: 'what independence would give' },
              { math: '$P(S \\cap \\text{pass}) = 0.45 \\neq 0.39$', why: 'from the cell' },
              { math: 'dependent', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The grand total is the whole sample space; a row or a column is a smaller sample space. A conditional probability simply swaps the denominator from the grand total to the row or column of the condition. Explore it in the [contingency table tool](!/probability/visual-tools/contingency-tables) or the [joint probability calculator](!/probability/calculators/joint-probability).',
        },
        pitfalls: [
          {
            title: 'Grand total for a conditional',
            wrong: '$P(\\text{pass} \\mid S) = \\frac{90}{200}$',
            right: 'divide by the studied row: $\\frac{90}{120}$',
          },
          {
            title: 'Row and column swapped',
            wrong: '$P(S \\mid \\text{pass}) = \\frac{90}{120}$',
            right: 'the condition is pass, so use its column: $\\frac{90}{130}$',
          },
          {
            title: 'Counting a cell twice for "or"',
            wrong: '$P(S \\cup \\text{pass}) = \\frac{120 + 130}{200}$',
            right: 'subtract the shared cell: $\\frac{120 + 130 - 90}{200} = 0.8$',
          },
        ],
        related: ['conditional-probability', 'independence-test', 'which-probability-rule'],
        builtOn: [
          { label: 'Contingency tables (lesson)', url: ruleUrl('lesson.prob.joint-probability.tables') },
          { label: 'Marginal probabilities (lesson)', url: ruleUrl('lesson.prob.joint-probability.marginal') },
          { label: 'Conditional probability formula', url: ruleUrl('prob.conditional-probability') },
        ],
      },
    },

    // ═══ Strategy ═════════════════════════════════════════════════════
    {
      id: 'which-probability-rule',
      slug: 'which-probability-rule',
      name: 'Which probability rule should I use?',
      description: 'A decision tree from the wording of the question (not, or, and, given) to the rule that answers it.',
      uses: 'leads to 7 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Probability Rule Should I Use? (Decision Tree) | Learn Math Class',
        description: 'Choose the right probability rule from the wording: counting, complement, addition, multiplication for independent or dependent events, conditional or Bayes.',
        keywords: ['which probability rule to use', 'probability rules', 'and vs or probability', 'when to use Bayes theorem', 'probability decision tree'],
      },
      page: {
        h1: 'Which Probability Rule Should I Use?',
        lead: `The key word in the question picks the rule: **not** or **at least one** points to the complement, **or** to the addition rule, **and** to a multiplication rule, **given** to a conditional probability. All of them are collected in the ${link('lesson.prob.rules', 'probability rules')} lesson.`,
        tree: {
          rootId: 'ask',
          svgW: 1100,
          nodes: {
            ask: {
              type: 'q',
              text: 'What does the question ask for?',
              children: [
                { label: 'one event', to: 'classicalLeaf' },
                { label: 'not / at least one', to: 'complementLeaf' },
                { label: 'A or B', to: 'additionLeaf' },
                { label: 'A and B', to: 'affects' },
                { label: 'A given B', to: 'known' },
              ],
            },
            affects: {
              type: 'q',
              text: 'Does the first event change the second?',
              children: [
                { label: 'no', to: 'indepLeaf' },
                { label: 'yes', to: 'depLeaf' },
              ],
            },
            known: {
              type: 'q',
              text: 'Is the reverse conditional given?',
              children: [
                { label: 'no', to: 'condLeaf' },
                { label: 'yes', to: 'bayesLeaf' },
              ],
            },
            classicalLeaf: { type: 'leaf', to: 'classical-probability', short: 'Count outcomes' },
            complementLeaf: { type: 'leaf', to: 'complement-rule', short: 'Complement rule' },
            additionLeaf: { type: 'leaf', to: 'addition-rule', short: 'Addition rule' },
            indepLeaf: { type: 'leaf', to: 'multiplication-rule-independent', short: 'Multiply (independent)' },
            depLeaf: { type: 'leaf', to: 'multiplication-rule-dependent', short: 'Multiply (dependent)' },
            condLeaf: { type: 'leaf', to: 'conditional-probability', short: 'Conditional formula' },
            bayesLeaf: { type: 'leaf', to: 'bayes-theorem', short: "Bayes' theorem" },
          },
          branches: [
            {
              condition: 'The question asks for the probability of a single event, and the outcomes are equally likely.',
              answer: `[Count the outcomes](!${HUB}/classical-probability) after you [list the sample space](!${HUB}/sample-space). If the chance depends on which of several cases you are in, use the [law of total probability](!${HUB}/total-probability).`,
            },
            {
              condition: 'The question says "not", "none" or "at least one".',
              answer: `Use the [complement rule](!${HUB}#complement-rule): find the opposite event and subtract from $1$.`,
            },
            {
              condition: 'The question says "A or B".',
              answer: `Use the [addition rule](!${HUB}#addition-rule): add the two probabilities and subtract the overlap (${link('prob.addition-rule', 'formula')}).`,
            },
            {
              condition: 'The question says "A and B", and the first event has no effect on the second.',
              answer: `Use the [multiplication rule for independent events](!${HUB}#multiplication-rule-independent). If you are not sure, [test for independence](!${HUB}/independence-test) first.`,
            },
            {
              condition: 'The question says "A and B", and the first event changes the second (for example, drawing without replacement).',
              answer: `Use the [multiplication rule for dependent events](!${HUB}/multiplication-rule-dependent); for several stages, draw a [tree diagram](!${HUB}/tree-diagrams).`,
            },
            {
              condition: 'The question says "given", and you know the probability of both events or have a table of counts.',
              answer: `Use the [conditional probability formula](!${HUB}/conditional-probability), or read it from a [two-way table](!${HUB}/contingency-tables).`,
            },
            {
              condition: 'The question says "given", but what you know is the conditional the other way round.',
              answer: `Use [Bayes' theorem](!${HUB}/bayes-theorem) (${link('prob.bayes-theorem', 'formula')}), with the total chance of the evidence from the law of total probability.`,
            },
          ],
        },
        related: ['conditional-probability', 'multiplication-rule-dependent', 'bayes-theorem'],
        builtOn: [
          { label: 'Probability rules (lesson)', url: ruleUrl('lesson.prob.rules') },
          { label: 'Addition rule', url: ruleUrl('prob.addition-rule') },
          { label: 'Multiplication rule', url: ruleUrl('prob.multiplication-rule') },
          { label: 'Conditional probability formula', url: ruleUrl('prob.conditional-probability') },
        ],
      },
    },

    // ═══ Applied ══════════════════════════════════════════════════════
    {
      id: 'card-problems',
      slug: 'card-problems',
      name: 'How to solve playing card probability problems',
      description: 'One card, several cards in a row, or a whole hand from a standard 52-card deck.',
      uses: ['counting outcomes', 'multiplication rule', 'combinations'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Playing Card Probability Problems (52-Card Deck) | Learn Math Class',
        description: 'Solve playing card probability problems: deck facts, order and replacement, counting the sample space and the event, then dividing. Three worked card examples.',
        keywords: ['card probability problems', 'probability with a deck of cards', 'probability of drawing a card', 'poker hand probability', 'cards without replacement'],
      },
      page: {
        h1: 'How to Solve Playing Card Probability Problems',
        lead:
          'A standard deck has $52$ cards: $4$ suits of $13$ ranks. Every card is equally likely, so card problems are counting problems; the only questions are what is drawn, in what order, and whether cards go back.',
        recognize:
          'Trigger words: **deck**, **suit**, **hearts**, **face card**, **ace**, **drawn at random**, **without replacement**, **hand of 5 cards**. A single card, a sequence of cards, or an unordered hand.',
        setup: [
          { label: 'Deck facts', body: '$52$ cards; $4$ suits (hearts and diamonds red, clubs and spades black) of $13$ ranks; $12$ face cards (jack, queen, king); $4$ of each rank.' },
          { label: 'What is drawn', body: 'One card, several cards one after another, or a hand where order does not matter.' },
          { label: 'Replacement', body: 'With replacement, every draw has the full deck. Without replacement, the deck shrinks by one card each time.' },
          { label: 'Count the sample space', body: 'One card: $52$. A sequence: multiply the deck sizes. A hand of $k$ cards: $\\binom{52}{k}$.' },
          { label: 'Count the event', body: 'Count in the same way as the sample space, then divide; or multiply step-by-step probabilities for a sequence.' },
        ],
        handoff: {
          to: 'classical-probability',
          body: `Divide the favorable count by the total [by counting outcomes](!${HUB}/classical-probability); for a "given" question, [condition on the known card](!${HUB}/conditional-probability).`,
        },
        interpretation:
          'Give the answer as a simplified fraction, or a decimal rounded to $4$ places. Check that it lies between $0$ and $1$, and that a hand probability does not depend on the order you imagined the cards in.',
        examples: [
          {
            title: 'a red face card',
            badge: 'one card',
            lines: [
              { math: 'red face cards: $3$ in hearts, $3$ in diamonds', why: 'jack, queen, king' },
              { math: '$P = \\frac{6}{52} = \\frac{3}{26}$', why: '', answer: true },
            ],
          },
          {
            title: 'two hearts in a row',
            badge: 'without replacement',
            lines: [
              { math: '$\\frac{13}{52}\\cdot\\frac{12}{51}$', why: 'one heart fewer second time' },
              { math: '$= \\frac{156}{2652} = \\frac{1}{17}$', why: '', answer: true },
            ],
          },
          {
            title: 'exactly two aces in a 5-card hand',
            badge: 'combinations',
            lines: [
              { math: '$\\binom{4}{2}\\binom{48}{3} = 6 \\cdot 17296 = 103776$', why: '2 aces, 3 other cards' },
              { math: '$\\binom{52}{5} = 2598960$', why: 'all hands' },
              { math: '$P = \\frac{103776}{2598960} \\approx 0.0399$', why: 'rounded to 4 places', answer: true },
            ],
          },
        ],
        visual: {
          caption: `Lay the deck out as a $4 \\times 13$ grid, suits by ranks. "Hearts" is a row, "kings" is a column, "king of hearts" is the one cell where they cross, so a card question is about which cells you shade. Hands with a fixed number of special cards follow the [hypergeometric probability](!/probability/distributions/methods/hypergeometric-probability) method.`,
        },
        pitfalls: [
          {
            title: 'Wrong deck facts',
            wrong: '$16$ face cards (aces included)',
            right: 'face cards are jack, queen, king: $12$',
          },
          {
            title: 'Full deck on the second draw',
            wrong: 'two hearts: $\\frac{13}{52}\\cdot\\frac{13}{52}$ without replacement',
            right: '$\\frac{13}{52}\\cdot\\frac{12}{51}$',
          },
          {
            title: 'Ordered and unordered mixed',
            wrong: 'favorable hands counted with order, total as $\\binom{52}{5}$',
            right: 'use combinations for both, or permutations for both',
          },
        ],
        related: ['classical-probability', 'multiplication-rule-dependent', 'urn-problems'],
        builtOn: [
          { label: 'Classical probability formula', url: ruleUrl('prob.classical-probability-formula') },
          { label: 'Counting in classical experiments (lesson)', url: ruleUrl('lesson.prob.combinatorics.3') },
          { label: 'Multiplication rule', url: ruleUrl('prob.multiplication-rule') },
        ],
      },
    },
    {
      id: 'dice-problems',
      slug: 'dice-problems',
      name: 'How to solve dice probability problems',
      description: 'Sums, doubles and "at least one six": list the ordered outcomes and count.',
      uses: ['sample space grid', 'complement rule', 'conditional probability'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Dice Probability Problems (Sums, Doubles) | Learn Math Class',
        description: 'Solve dice probability problems: list ordered outcomes in a grid, count sums and doubles, use the complement for at least one six. Three worked dice examples.',
        keywords: ['dice probability problems', 'probability of rolling a sum', 'two dice probability', 'at least one six probability', 'dice probability examples'],
      },
      page: {
        h1: 'How to Solve Dice Probability Problems',
        lead:
          'A fair die has $6$ equally likely faces, and separate dice do not affect each other. Two dice give $36$ ordered pairs, so most dice questions come down to counting cells in a $6 \\times 6$ grid.',
        recognize:
          'Trigger words: **die**, **dice**, **roll**, **sum of the dice**, **doubles**, **at least one six**, **the product of the numbers**. One die rolled several times, or several dice rolled once.',
        setup: [
          { label: 'Outcomes', body: 'Treat the dice as different (first and second) and write ordered pairs; $(1,2)$ and $(2,1)$ are two outcomes.' },
          { label: 'Grid', body: 'For two dice, a $6 \\times 6$ grid of $36$ cells. For $n$ dice, $6^n$ outcomes.' },
          { label: 'Event cells', body: 'Mark the cells that satisfy the condition. Equal sums lie on a diagonal; doubles on the main diagonal.' },
          { label: 'Complement', body: 'For "at least one", count the rolls with none and subtract from $1$.' },
          { label: 'Given', body: 'For "given that", keep only the cells of the condition and count inside them.' },
        ],
        handoff: {
          to: 'classical-probability',
          body: `Count the event cells over all cells [by counting outcomes](!${HUB}/classical-probability).`,
        },
        interpretation:
          'Give a simplified fraction over $36$ (or $6^n$), or a decimal rounded to $4$ places. Check that the probabilities of all possible sums add to $1$.',
        examples: [
          {
            title: 'a sum of 9',
            badge: 'two dice',
            lines: [
              { math: '$(3,6), (4,5), (5,4), (6,3)$', why: 'a diagonal of the grid' },
              { math: '$P = \\frac{4}{36} = \\frac{1}{9}$', why: '', answer: true },
            ],
          },
          {
            title: 'at least one six in four rolls',
            badge: 'complement',
            lines: [
              { math: 'no six: $\\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$', why: 'independent rolls' },
              { math: '$P = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0.5177$', why: '', answer: true },
            ],
          },
          {
            title: 'doubles, given a sum of 8',
            badge: 'conditional',
            lines: [
              { math: 'sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$', why: 'the new sample space' },
              { math: 'only $(4,4)$ is a double', why: '' },
              { math: '$P = \\frac{1}{5}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'In the $6 \\times 6$ grid, each sum fills one diagonal: $7$ fills the longest diagonal ($6$ cells), $2$ and $12$ fill single corners. That is why middle sums are more likely. Roll and count in the [dice roll visualizer](!/probability/visual-tools/dice-roll).',
        },
        pitfalls: [
          {
            title: 'Sums treated as equally likely',
            wrong: '$P(\\text{sum } 7) = \\frac{1}{11}$',
            right: '$6$ of $36$ pairs: $\\frac{1}{6}$',
          },
          {
            title: 'Identical dice, one pair',
            wrong: '$(1,2)$ and $(2,1)$ counted once',
            right: 'the dice are different objects: two outcomes',
          },
          {
            title: 'Adding chances for "at least one"',
            wrong: 'at least one six in four rolls: $4 \\cdot \\frac{1}{6} = \\frac{2}{3}$',
            right: '$1 - \\left(\\frac{5}{6}\\right)^4 \\approx 0.5177$',
          },
        ],
        related: ['classical-probability', 'sample-space', 'coin-problems'],
        builtOn: [
          { label: 'Dice roll model (lesson)', url: ruleUrl('lesson.prob.models.dice-roll') },
          { label: 'Complement rule', url: ruleUrl('prob.complement-rule') },
          { label: 'Classical probability formula', url: ruleUrl('prob.classical-probability-formula') },
        ],
      },
    },
    {
      id: 'coin-problems',
      slug: 'coin-problems',
      name: 'How to solve coin toss probability problems',
      description: 'Heads and tails over several tosses: count the sequences, or use the binomial formula for a biased coin.',
      uses: ['sample space', 'complement rule', 'binomial probability'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Coin Toss Probability Problems | Learn Math Class',
        description: 'Solve coin toss probability problems: count head-tail sequences, use the complement for at least one head, and the binomial formula for a biased coin. Examples.',
        keywords: ['coin toss probability', 'probability of heads', 'coin flip probability problems', 'at least one head', 'exactly two heads probability'],
      },
      page: {
        h1: 'How to Solve Coin Toss Probability Problems',
        lead:
          'Each toss of a fair coin is heads or tails with chance $\\frac{1}{2}$, independent of the others. With $n$ tosses there are $2^n$ equally likely sequences, and counting them answers most questions.',
        recognize:
          'Trigger words: **coin**, **toss**, **flip**, **heads**, **tails**, **exactly**, **at least one**, **in a row**, **biased coin**. A fixed number of tosses and a question about how many heads or which pattern.',
        setup: [
          { label: 'Outcomes', body: 'Write each result as a sequence of H and T; $n$ tosses give $2^n$ sequences.' },
          { label: 'Exactly k heads', body: 'Choose the positions of the heads: $\\binom{n}{k}$ sequences.' },
          { label: 'At least one', body: 'Use the complement: $1 - P(\\text{no heads}) = 1 - \\left(\\frac{1}{2}\\right)^n$.' },
          { label: 'A pattern', body: 'A fixed sequence such as HTH has chance $\\left(\\frac{1}{2}\\right)^n$; multiply the tosses because they are independent.' },
          { label: 'Biased coin', body: 'If $P(H) = p \\neq \\frac{1}{2}$, sequences are no longer equally likely; weight each one by $p^k(1-p)^{n-k}$.' },
        ],
        handoff: {
          to: 'classical-probability',
          body: `For a fair coin, divide the favorable sequences by $2^n$ [by counting outcomes](!${HUB}/classical-probability). For a biased coin, use the [binomial probability](!/probability/distributions/methods/binomial-probability) method.`,
        },
        interpretation:
          'Give a fraction over $2^n$ or a decimal rounded to $4$ places. Check the symmetry for a fair coin: $k$ heads and $k$ tails have the same probability.',
        examples: [
          {
            title: 'exactly two heads in three tosses',
            badge: 'count sequences',
            lines: [
              { math: '$HHT, HTH, THH$: $\\binom{3}{2} = 3$ of $8$', why: 'choose where the heads go' },
              { math: '$P = \\frac{3}{8}$', why: '', answer: true },
            ],
          },
          {
            title: 'at least one head in five tosses',
            badge: 'complement',
            lines: [
              { math: 'no heads: only $TTTTT$, $\\frac{1}{32}$', why: '' },
              { math: '$P = 1 - \\frac{1}{32} = \\frac{31}{32}$', why: '', answer: true },
            ],
          },
          {
            title: 'a biased coin',
            badge: 'binomial',
            lines: [
              { math: '$P(H) = 0.6$, four tosses, exactly three heads', why: '' },
              { math: '$\\binom{4}{3}(0.6)^3(0.4) = 4 \\cdot 0.216 \\cdot 0.4$', why: 'four positions for the tail' },
              { math: '$P = 0.3456$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each extra toss doubles the number of sequences, so a tree of $n$ tosses has $2^n$ tips. The number of tips with exactly $k$ heads is $\\binom{n}{k}$, which is why the middle counts are largest. Toss many times in the [coin toss visualizer](!/probability/visual-tools/coin-toss).',
        },
        pitfalls: [
          {
            title: 'Counting head totals as outcomes',
            wrong: 'three tosses: $0, 1, 2, 3$ heads, each $\\frac{1}{4}$',
            right: 'two heads covers $3$ of $8$ sequences: $\\frac{3}{8}$',
          },
          {
            title: 'The gambler\'s fallacy',
            wrong: 'after $HHHH$, tails is more likely',
            right: 'tosses are independent: still $\\frac{1}{2}$',
          },
          {
            title: 'Equal weights for a biased coin',
            wrong: '$P(H) = 0.6$: three heads in four tosses $= \\frac{4}{16}$',
            right: 'weight each sequence: $4 \\cdot 0.6^3 \\cdot 0.4 = 0.3456$',
          },
        ],
        related: ['classical-probability', 'sample-space', 'dice-problems'],
        builtOn: [
          { label: 'Coin toss model (lesson)', url: ruleUrl('lesson.prob.models.coin-toss') },
          { label: 'Complement rule', url: ruleUrl('prob.complement-rule') },
          { label: 'Binomial PMF', url: ruleUrl('prob.binomial-pmf') },
        ],
      },
    },
    {
      id: 'urn-problems',
      slug: 'urn-problems',
      name: 'How to solve urn and ball-drawing problems',
      description: 'Colored balls drawn from a bag, with or without replacement: multiply step by step or count combinations.',
      uses: ['multiplication rule', 'tree diagram', 'combinations'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Urn and Ball-Drawing Problems | Learn Math Class',
        description: 'Solve urn problems: note the colors and replacement, multiply step-by-step probabilities or count combinations, add the orders that fit. Three worked examples.',
        keywords: ['urn problems probability', 'drawing balls from a bag', 'probability without replacement', 'marbles probability problems', 'balls in an urn'],
      },
      page: {
        h1: 'How to Solve Urn and Ball-Drawing Problems',
        lead:
          'An urn holds balls of a few colors and you draw some at random. With replacement the draws are independent; without replacement each draw changes the bag, and the next probability must be updated.',
        recognize:
          'Trigger words: **urn**, **bag**, **box**, **marbles**, **balls**, **drawn at random**, **with replacement**, **without replacement**, **both red**, **exactly two**. Also any setting that works the same way: choosing people from a group, picking items from a batch.',
        setup: [
          { label: 'Contents', body: 'Write how many balls of each color, and the total.' },
          { label: 'Replacement', body: 'With replacement, every draw has the same bag; multiply equal probabilities. Without replacement, reduce the color and the total after each draw.' },
          { label: 'Order', body: 'For a sequence ("red then blue"), multiply along one order. For "exactly" or "one of each", add every order that fits.' },
          { label: 'Counting shortcut', body: 'Without replacement and order ignored, count combinations: $\\frac{\\binom{r}{a}\\binom{b}{c}}{\\binom{r+b}{a+c}}$.' },
          { label: 'Check', body: 'The probabilities of all possible color counts add to $1$.' },
        ],
        handoff: {
          to: 'multiplication-rule-dependent',
          body: `Multiply the step-by-step probabilities with the [multiplication rule for dependent events](!${HUB}/multiplication-rule-dependent), using a [tree diagram](!${HUB}/tree-diagrams) when several orders count.`,
        },
        interpretation:
          'Give a simplified fraction or a decimal rounded to $4$ places. A count of a fixed number of one color in a fixed-size draw without replacement follows the [hypergeometric probability](!/probability/distributions/methods/hypergeometric-probability) method; with replacement it is binomial.',
        examples: [
          {
            title: 'two red, with replacement',
            badge: 'independent draws',
            lines: [
              { math: 'bag of $4$ red, $6$ blue', why: '' },
              { math: '$\\frac{4}{10}\\cdot\\frac{4}{10} = \\frac{16}{100} = \\frac{4}{25}$', why: 'bag restored each time', answer: true },
            ],
          },
          {
            title: 'two red, without replacement',
            badge: 'dependent draws',
            lines: [
              { math: '$\\frac{4}{10}\\cdot\\frac{3}{9} = \\frac{12}{90}$', why: 'one red fewer, one ball fewer' },
              { math: '$= \\frac{2}{15}$', why: '', answer: true },
            ],
          },
          {
            title: 'exactly two red in three draws',
            badge: 'combinations',
            lines: [
              { math: '$\\binom{4}{2}\\binom{6}{1} = 6 \\cdot 6 = 36$', why: '2 red, 1 blue' },
              { math: '$\\binom{10}{3} = 120$', why: 'all sets of three' },
              { math: '$P = \\frac{36}{120} = \\frac{3}{10}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Without replacement, each draw removes a ball, so the tree changes its branch labels at every level. With replacement, every level has the same labels. Watch the second-level branches change in the [tree diagram tool](!/probability/visual-tools/conditional-probability/tree-diagram).',
        },
        pitfalls: [
          {
            title: 'Replacement ignored',
            wrong: 'without replacement: $\\frac{4}{10}\\cdot\\frac{4}{10}$',
            right: '$\\frac{4}{10}\\cdot\\frac{3}{9}$',
          },
          {
            title: 'Only one order counted',
            wrong: 'exactly two red in three draws: $\\frac{4}{10}\\cdot\\frac{3}{9}\\cdot\\frac{6}{8}$',
            right: 'three orders (RRB, RBR, BRR), each $\\frac{1}{10}$: total $\\frac{3}{10}$',
          },
          {
            title: 'Total not reduced',
            wrong: '$\\frac{4}{10}\\cdot\\frac{3}{10}$',
            right: 'the bag has one ball fewer: $\\frac{3}{9}$',
          },
        ],
        related: ['multiplication-rule-dependent', 'tree-diagrams', 'card-problems'],
        builtOn: [
          { label: 'Multiplication rule', url: ruleUrl('prob.multiplication-rule') },
          { label: 'Counting in classical experiments (lesson)', url: ruleUrl('lesson.prob.combinatorics.3') },
          { label: 'Hypergeometric PMF', url: ruleUrl('prob.hypergeometric-pmf') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · complement, addition, multiplication' },
    { id: 'composite', label: 'Multi-step methods', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a rule', blurb: 'Strategy' },
    { id: 'applied', label: 'Word problems', blurb: 'cards, dice, coins, urns' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
        { value: 'applied', label: 'Applied' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other probability methods',
    links: [
      { url: '/probability/random-variables/methods', label: 'Random variable methods' },
      { url: '/probability/distributions/methods', label: 'Distribution methods' },
    ],
  },
};

export default probabilityMethods;
