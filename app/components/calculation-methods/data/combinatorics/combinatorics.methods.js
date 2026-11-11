// combinatorics.methods.js (combinatorics)
// Single data source for /combinatorics/methods (hub) and
// /combinatorics/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/combinatorics/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/combinatorics/methods';

const combinatoricsMethods = {
  hubPath: HUB,
  hubLabel: 'combinatorics methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'multiplication-principle',
      name: 'How to count choices made in stages',
      subtitle: 'Multiplication principle',
      glyph: 'm·n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'One outcome is built from several steps, and the number of options at each step does not depend on the earlier choices: an outfit of a shirt and pants and shoes, a code digit by digit, a meal of $3 \\times 2 \\times 4$ dishes.',
      formula: '|A_1 \\times A_2 \\times \\cdots \\times A_k| = m_1 \\cdot m_2 \\cdots m_k',
      fields: {
        steps: [
          '1. Split one outcome into steps joined by the word **and**.',
          '2. Count the options at each step.',
          '3. Multiply the counts.',
        ],
        worked_example: '$3$ shirts, $4$ pants, $2$ pairs of shoes: $3 \\cdot 4 \\cdot 2 = 24$ outfits',
      },
      links: [
        { url: ruleUrl('cb.multiplication-rule'), label: 'Multiplication rule' },
        { url: ruleUrl('lesson.cb.counting-principles.2'), label: 'The multiplication rule (lesson)' },
      ],
    },
    {
      id: 'addition-principle',
      name: 'How to count choices from separate cases',
      subtitle: 'Addition principle',
      glyph: 'm+n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'One outcome comes from one of several groups that share no outcomes, joined by the word **or**: one book from $5$ novels or $7$ biographies, one trip by bus or by train.',
      formula: '|A_1 \\cup A_2 \\cup \\cdots \\cup A_k| = |A_1| + |A_2| + \\cdots + |A_k|, \\quad A_i \\cap A_j = \\emptyset',
      fields: {
        steps: [
          '1. Split the outcomes into cases that cannot happen together.',
          '2. Count each case and add the counts. If two cases share outcomes, use inclusion-exclusion instead.',
        ],
        worked_example: '$5$ novels or $7$ biographies, pick one book: $5 + 7 = 12$ choices',
      },
      links: [
        { url: ruleUrl('cb.addition-rule'), label: 'Addition rule' },
        { url: ruleUrl('lesson.cb.counting-principles.1'), label: 'The addition rule (lesson)' },
      ],
    },
    {
      id: 'factorial',
      name: 'How to compute a factorial',
      subtitle: 'Factorial',
      glyph: 'n!',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A product of all whole numbers from $n$ down to $1$ appears, or a ratio of factorials must be simplified: $6!$, $\\frac{8!}{6!}$, $0!$.',
      formula: 'n! = n \\cdot (n-1) \\cdots 2 \\cdot 1, \\qquad 0! = 1',
      fields: {
        steps: [
          '1. Multiply the whole numbers from $n$ down to $1$; use $0! = 1$.',
          '2. In a ratio, cancel the smaller factorial first: $\\frac{n!}{m!} = n(n-1)\\cdots(m+1)$.',
        ],
        worked_example: '$6! = 720, \\qquad \\dfrac{8!}{6!} = 8 \\cdot 7 = 56$',
      },
      links: [
        { url: ruleUrl('cb.factorial'), label: 'Factorial' },
        { url: ruleUrl('lesson.cb.permutations'), label: 'Permutations (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'permutations',
      slug: 'permutations',
      name: 'How to count permutations',
      description: 'Count ordered arrangements of $r$ items chosen from $n$ distinct items: multiply $r$ falling factors, $P(n, r) = \\frac{n!}{(n-r)!}$.',
      uses: ['multiplication principle', 'factorial', 'P(n, r)'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Permutations (Ordered Arrangements) | Learn Math Class',
        description: 'Count permutations step by step: check that order matters, read n and r, multiply r falling factors or use P(n, r). Worked examples and common mistakes.',
        keywords: ['how to count permutations', 'permutation formula', 'P(n, r) examples', 'ordered arrangements', 'permutation word problems'],
      },
      page: {
        h1: 'How to Count Permutations',
        lead:
          'A permutation is an ordered arrangement of distinct items, each used at most once. Fill the positions one at a time: the first has $n$ choices, the next one fewer, and the count is the product of these falling factors.',
        recognize:
          'Distinct items are placed in order and none repeats: officers such as president, vice president and secretary, a race podium, books on a shelf, a batting lineup. Test: swap two of the chosen items; if that gives a different outcome, order matters and this is a permutation.',
        recognizeNote: `Permutations and the notation $P(n, r)$ are defined in the ${link('lesson.cb.permutations', 'permutations lesson')}.`,
        methods: [
          {
            name: 'Multiply falling factors',
            tag: 'usual',
            preferred: true,
            formula: 'P(n, r) = n(n-1)(n-2)\\cdots(n-r+1)',
            body: `One factor per position, each one smaller than the last, by the ${link('cb.multiplication-rule', 'multiplication rule')}.`,
          },
          {
            name: 'Factorial formula',
            tag: 'formula',
            formula: 'P(n, r) = \\dfrac{n!}{(n-r)!}',
            body: `The ${link('cb.partial-permutation', 'partial permutation formula')}; with all $n$ items it becomes ${link('cb.full-permutation', 'the full permutation')} $n!$.`,
          },
        ],
        steps: {
          traceLabel: 'On 8 club members choosing a president, vice president and secretary',
          items: [
            {
              title: 'Check that order matters and nothing repeats.',
              body: 'The offices are different, so Ana as president and Ben as secretary is not the same as the reverse. One person holds one office.',
              state: 'ordered, no repetition',
            },
            {
              title: 'Read n and r.',
              body: '$n$ is the number of distinct items to choose from; $r$ is the number of positions to fill.',
              state: '$n = 8$, $r = 3$',
            },
            {
              title: 'Multiply one factor per position.',
              body: 'The first position has $n$ choices, the next $n - 1$, and so on, $r$ factors in all.',
              state: '$8 \\cdot 7 \\cdot 6$',
              atomic: 'multiplication-principle',
            },
            {
              title: 'Compute the product.',
              body: 'Check with the factorial form: $\\frac{8!}{5!}$ cancels to the same three factors.',
              state: '$P(8, 3) = 336$',
              atomic: 'factorial',
            },
          ],
        },
        examples: [
          {
            title: 'all items in a row',
            badge: 'full permutation',
            lines: [
              { math: '$5$ books, $5$ places on a shelf', why: 'every item is used' },
              { math: '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1$', why: 'one factor per place' },
              { math: '$120$ orders', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'some items in a row',
            badge: 'partial',
            lines: [
              { math: '$4$ of $7$ photos in a row: $n = 7$, $r = 4$', why: 'only four places' },
              { math: '$P(7, 4) = 7 \\cdot 6 \\cdot 5 \\cdot 4$', why: 'four falling factors' },
              { math: '$840$ arrangements', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'two people at the ends',
            badge: 'restriction',
            lines: [
              { math: '$6$ people in a row, Ann and Bo at the two ends', why: 'fill the fixed places first' },
              { math: '$2$ ways for the ends', why: 'Ann left or Ann right' },
              { math: '$4! = 24$ ways for the middle', why: 'four people, four seats' },
              { math: '$2 \\cdot 24 = 48$', why: 'multiplication principle', answer: true },
            ],
          },
        ],
        examplesAfter: 'Watch arrangements grow position by position in the [permutations visualizer](!/combinatorics/permutations/permutations-visualizer) or the [partial permutation tool](!/combinatorics/visual-tools/partial-permutation).',
        visual: {
          caption:
            'Picture $r$ empty slots. The first slot can take any of the $n$ items. Once it is filled, that item is gone, so the second slot has $n - 1$ choices, the third $n - 2$, and so on. The arrangements form a tree whose branches thin out by one at every level, and the number of leaves is the product of the branch counts.',
        },
        pitfalls: [
          {
            title: 'Using combinations when order matters',
            wrong: 'president, vice president, secretary from $8$: $\\binom{8}{3} = 56$',
            right: '$P(8, 3) = 336$: each group of $3$ fills the offices in $3! = 6$ ways',
          },
          {
            title: 'Writing too many factors',
            wrong: '$P(7, 4) = 7! = 5040$',
            right: 'stop after $r = 4$ factors: $7 \\cdot 6 \\cdot 5 \\cdot 4 = 840$',
          },
          {
            title: 'Allowing repeats',
            wrong: '$3$ different offices from $8$ people: $8^3 = 512$',
            right: 'one person per office: $8 \\cdot 7 \\cdot 6 = 336$',
            note: 'Use $n^r$ only when an item can be used again.',
          },
        ],
        related: ['combinations', 'permutations-with-repetition', 'which-counting-formula'],
        builtOn: [
          { label: 'Partial permutation', url: ruleUrl('cb.partial-permutation') },
          { label: 'Full permutation', url: ruleUrl('cb.full-permutation') },
          { label: 'Multiplication rule', url: ruleUrl('cb.multiplication-rule') },
        ],
      },
    },
    {
      id: 'permutations-with-repetition',
      slug: 'permutations-with-repetition',
      name: 'How to count arrangements with repetition',
      description: 'Fill $r$ positions when every position can take any of $n$ options again: multiply $n$ by itself $r$ times, $n^r$.',
      uses: ['multiplication principle', 'powers'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Arrangements with Repetition (n^r) | Learn Math Class',
        description: 'Count codes, PINs and license plates where symbols may repeat: options per position, positions, then n^r or a product. Worked examples and common mistakes.',
        keywords: ['permutations with repetition', 'how to count codes', 'n to the r counting', 'license plate counting', 'PIN combinations count'],
      },
      page: {
        h1: 'How to Count Arrangements with Repetition',
        lead:
          'When an option stays available after it is used, every position has the full set of choices. The count is the number of options multiplied by itself once per position: $n^r$.',
        recognize:
          'Positions are filled in order and a symbol can be used again: PIN codes, passwords, license plates, answer sheets, strings of digits or letters. Test: after you use an option once, is it still available for the next position? If yes, the count is a power, or a product when positions have different option sets.',
        recognizeNote: `Permutations with repetition are defined in the ${link('lesson.cb.permutations', 'permutations lesson')}.`,
        methods: [
          {
            name: 'Power formula',
            tag: 'usual',
            preferred: true,
            formula: 'n^r',
            body: `Every position has the same $n$ options (${link('cb.permutation-with-repetition', 'permutation with repetition')}).`,
          },
          {
            name: 'Position by position',
            tag: 'mixed',
            formula: 'm_1 \\cdot m_2 \\cdots m_r',
            body: 'When positions have different option counts, such as letters then digits, multiply the counts one by one.',
          },
        ],
        steps: {
          traceLabel: 'On 3-letter codes from A, B, C, D (letters may repeat)',
          items: [
            {
              title: 'Check that order matters and repeats are allowed.',
              body: 'ABA and AAB are different codes, and a letter may appear more than once.',
              state: 'ordered, repetition allowed',
            },
            {
              title: 'Count the options for each position.',
              body: 'Every position takes any of the $n$ options, whatever came before.',
              state: '$4$ options in each of $3$ positions',
            },
            {
              title: 'Multiply across the positions.',
              body: 'One factor per position.',
              state: '$4 \\cdot 4 \\cdot 4 = 4^3$',
              atomic: 'multiplication-principle',
            },
            {
              title: 'Compute the power.',
              body: 'The base is the number of options; the exponent is the number of positions.',
              state: '$64$ codes',
            },
          ],
        },
        examples: [
          {
            title: 'binary strings',
            badge: 'two options',
            lines: [
              { math: '$5$ positions, each $0$ or $1$', why: '$n = 2$, $r = 5$' },
              { math: '$2^5 = 32$ strings', why: 'one factor $2$ per position', answer: true },
            ],
          },
          {
            title: 'license plates',
            badge: 'mixed positions',
            lines: [
              { math: '$3$ letters, then $3$ digits', why: 'two kinds of position' },
              { math: '$26^3 \\cdot 10^3 = 17{,}576 \\cdot 1000$', why: 'one power per kind' },
              { math: '$17{,}576{,}000$ plates', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'even 3-digit numbers',
            badge: 'restricted positions',
            lines: [
              { math: 'first digit $1$ to $9$: $9$ options', why: 'no leading zero' },
              { math: 'middle digit: $10$; last digit $0, 2, 4, 6, 8$: $5$', why: 'even means even last digit' },
              { math: '$9 \\cdot 10 \\cdot 5 = 450$', why: 'multiply position by position', answer: true },
            ],
          },
        ],
        examplesAfter: 'Build codes slot by slot in the [permutation with repetition tool](!/combinatorics/visual-tools/permutation-with-repetition).',
        visual: {
          caption:
            'Each position is an independent dial with $n$ settings. Turning one dial never changes the settings of the others, so every new position multiplies the number of codes by $n$. That is why the count grows as a power: $r$ positions give $n \\cdot n \\cdots n = n^r$.',
        },
        pitfalls: [
          {
            title: 'Swapping base and exponent',
            wrong: '$3$-letter codes from $4$ letters: $3^4 = 81$',
            right: '$4$ options per position, $3$ positions: $4^3 = 64$',
          },
          {
            title: 'Removing used options',
            wrong: '$4$-digit PINs: $10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$',
            right: 'digits may repeat: $10^4 = 10{,}000$',
          },
          {
            title: 'Ignoring a restricted position',
            wrong: '$3$-digit numbers: $10^3 = 1000$',
            right: 'no leading zero: $9 \\cdot 10 \\cdot 10 = 900$',
          },
        ],
        related: ['permutations', 'complementary-counting', 'which-counting-formula'],
        builtOn: [
          { label: 'Permutation with repetition', url: ruleUrl('cb.permutation-with-repetition') },
          { label: 'Multiplication rule', url: ruleUrl('cb.multiplication-rule') },
          { label: 'The multiplication rule (lesson)', url: ruleUrl('lesson.cb.counting-principles.2') },
        ],
      },
    },
    {
      id: 'permutations-identical-items',
      slug: 'permutations-identical-items',
      name: 'How to count arrangements with identical items',
      description: 'Arrange $n$ items where some are identical: divide $n!$ by the factorial of each group size, $\\frac{n!}{n_1!\\,n_2!\\cdots n_k!}$.',
      uses: ['factorial', 'multinomial coefficient'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Arrangements with Identical Items | Learn Math Class',
        description: 'Count arrangements of letters or objects with repeats: group the equal items, divide n! by each group factorial. Worked examples like BANANA and mistakes.',
        keywords: ['permutations with identical items', 'arrangements of letters with repeats', 'how many ways to arrange a word', 'multinomial coefficient', 'permutations of a multiset'],
      },
      page: {
        h1: 'How to Count Arrangements with Identical Items',
        lead:
          'If some items look the same, swapping them does not create a new arrangement. Count as if all items were different, $n!$, then divide by the swaps inside each group of identical items.',
        recognize:
          'All items are placed in a row, but some are indistinguishable: the letters of a word with repeated letters (BANANA, LEVEL), flags or balls of the same color, steps right and up on a grid path. Test: swap two equal items; if the arrangement looks the same, divide by that group.',
        recognizeNote: `Arrangements with identical items are covered in the ${link('lesson.cb.permutations', 'permutations lesson')}; the same count is the ${link('lesson.cb.binomial-coefficient.4', 'multinomial coefficient')}.`,
        methods: [
          {
            name: 'Divide out the repeats',
            tag: 'usual',
            preferred: true,
            formula: '\\dfrac{n!}{n_1!\\,n_2!\\cdots n_k!}',
            body: `The ${link('cb.permutation-with-identical-items', 'identical items formula')} removes the swaps inside each group.`,
          },
          {
            name: 'Choose places group by group',
            tag: 'combinations',
            formula: '\\binom{n}{n_1}\\binom{n - n_1}{n_2}\\cdots',
            body: 'Choose the places of the first letter, then of the second among the places left; the product is the same number.',
          },
        ],
        steps: {
          traceLabel: 'On the letters of BANANA',
          items: [
            {
              title: 'Count all the items.',
              body: 'Every letter counts, repeated or not.',
              state: '$n = 6$ letters',
            },
            {
              title: 'Group equal items and count each group.',
              body: 'A letter that appears once is a group of size $1$; it contributes $1! = 1$.',
              state: 'A: $3$, N: $2$, B: $1$',
            },
            {
              title: 'Divide n! by the factorial of each group.',
              body: 'Each group of size $m$ can be shuffled in $m!$ ways without changing the word.',
              state: '$\\dfrac{6!}{3!\\,2!\\,1!} = \\dfrac{720}{12}$',
              atomic: 'factorial',
            },
            {
              title: 'Simplify.',
              body: 'The quotient is always a whole number.',
              state: '$60$ arrangements',
            },
          ],
        },
        examples: [
          {
            title: 'a word with two pairs',
            badge: 'LEVEL',
            lines: [
              { math: 'L: $2$, E: $2$, V: $1$; $n = 5$', why: 'group the letters' },
              { math: '$\\dfrac{5!}{2!\\,2!\\,1!} = \\dfrac{120}{4}$', why: 'divide out both pairs' },
              { math: '$30$ arrangements', why: 'simplify', answer: true },
            ],
          },
          {
            title: 'colored flags',
            badge: 'three groups',
            lines: [
              { math: '$3$ red, $2$ blue, $2$ green flags in a row', why: '$n = 7$' },
              { math: '$\\dfrac{7!}{3!\\,2!\\,2!} = \\dfrac{5040}{24}$', why: 'one factorial per color' },
              { math: '$210$ signals', why: 'simplify', answer: true },
            ],
          },
          {
            title: 'a longer word',
            badge: 'STATISTICS',
            lines: [
              { math: 'S: $3$, T: $3$, I: $2$, A: $1$, C: $1$', why: '$n = 10$' },
              { math: '$\\dfrac{10!}{3!\\,3!\\,2!} = \\dfrac{3{,}628{,}800}{72}$', why: 'single letters give $1! = 1$' },
              { math: '$50{,}400$ arrangements', why: 'simplify', answer: true },
            ],
          },
        ],
        examplesAfter: 'Try other words and group sizes in the [identical items tool](!/combinatorics/visual-tools/permutation-with-identical).',
        visual: {
          caption:
            'Label the equal letters for a moment: $A_1, A_2, A_3$ and $N_1, N_2$. Now all $6! = 720$ orders are different. Erase the labels again. Every word you can still see was produced $3! \\cdot 2! = 12$ times, once for each way to shuffle the labeled copies among their own places. Dividing by $12$ counts each visible word once.',
        },
        pitfalls: [
          {
            title: 'Missing a repeated group',
            wrong: 'BANANA: $\\dfrac{6!}{3!} = 120$',
            right: 'divide by the two Ns too: $\\dfrac{6!}{3!\\,2!} = 60$',
          },
          {
            title: 'One factorial for all repeats',
            wrong: 'LEVEL: $\\dfrac{5!}{4!} = 5$',
            right: 'one factorial per group: $\\dfrac{5!}{2!\\,2!} = 30$',
          },
          {
            title: 'Treating identical items as different',
            wrong: '$3$ red and $2$ blue flags: $5! = 120$',
            right: '$\\dfrac{5!}{3!\\,2!} = 10$',
          },
        ],
        related: ['permutations', 'combinations', 'which-counting-formula'],
        builtOn: [
          { label: 'Permutation with identical items', url: ruleUrl('cb.permutation-with-identical-items') },
          { label: 'Multinomial coefficient', url: ruleUrl('cb.multinomial-coefficient') },
          { label: 'Factorial', url: ruleUrl('cb.factorial') },
        ],
      },
    },
    {
      id: 'circular-permutations',
      slug: 'circular-permutations',
      name: 'How to count circular arrangements',
      description: 'Seat $n$ distinct items around a circle where turning the circle changes nothing: fix one item and arrange the rest, $(n-1)!$.',
      uses: ['factorial', 'fix one item'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Circular Arrangements (Round Table) | Learn Math Class',
        description: 'Count seatings around a round table: fix one person, arrange the rest in (n-1)! ways, halve for necklaces. Worked examples with blocks and common mistakes.',
        keywords: ['circular permutations', 'round table seating', '(n-1)! formula', 'necklace arrangements', 'how to count circular arrangements'],
      },
      page: {
        h1: 'How to Count Circular Arrangements',
        lead:
          'Around a circle there is no first seat, so turning the whole arrangement gives the same arrangement. Fix one item as a reference point; the others then form an ordinary row, which gives $(n-1)!$.',
        recognize:
          'Items sit around a round table, on a ring, a bracelet or a carousel, and only who sits next to whom matters, not which chair. Test: turn the whole arrangement one place; if the problem calls it the same arrangement, use $(n-1)!$. Numbered chairs make it an ordinary row again.',
        recognizeNote: `Circular permutations are defined in the ${link('lesson.cb.permutations', 'permutations lesson')}.`,
        methods: [
          {
            name: 'Fix one item',
            tag: 'usual',
            preferred: true,
            formula: '(n-1)!',
            body: `Seat one item first as a reference; the rest form a row (${link('cb.circular-permutation', 'circular permutation')}).`,
          },
          {
            name: 'Divide the row count',
            tag: 'rotations',
            formula: '\\dfrac{n!}{n}',
            body: 'Count all rows, then divide by the $n$ turns that give the same circle.',
          },
          {
            name: 'Turning over allowed',
            tag: 'necklace',
            formula: '\\dfrac{(n-1)!}{2}',
            body: 'If the ring can also be flipped, a mirror image is the same arrangement, so halve the count (for $n \\ge 3$).',
          },
        ],
        steps: {
          traceLabel: 'On 6 people at a round table',
          items: [
            {
              title: 'Check that only the circular order matters.',
              body: 'The chairs are not numbered, so turning the table gives the same seating.',
              state: 'turns count as one seating',
            },
            {
              title: 'Fix one item as a reference.',
              body: 'Seat any one person. The other places are now first, second, third and so on, clockwise from that person.',
              state: '$1$ person fixed, $5$ left',
            },
            {
              title: 'Arrange the rest in a row.',
              body: 'The remaining $n - 1$ items fill the remaining places in any order.',
              state: '$5! = 120$',
              atomic: 'factorial',
            },
            {
              title: 'Halve only if mirror images match.',
              body: 'This applies to necklaces and key rings that can be turned over; people at a table cannot be flipped.',
              state: 'a table: no halving, $120$ seatings',
            },
          ],
        },
        examples: [
          {
            title: 'four at a table',
            badge: 'basic',
            lines: [
              { math: '$n = 4$ people', why: 'turns are the same' },
              { math: '$(4-1)! = 3!$', why: 'fix one, arrange three' },
              { math: '$6$ seatings', why: '', answer: true },
            ],
          },
          {
            title: 'beads on a necklace',
            badge: 'flip allowed',
            lines: [
              { math: '$7$ different beads on a necklace', why: 'it can be turned over' },
              { math: '$(7-1)! = 720$', why: 'turns removed' },
              { math: '$\\dfrac{720}{2} = 360$', why: 'mirror images removed', answer: true },
            ],
          },
          {
            title: 'two friends together',
            badge: 'block',
            lines: [
              { math: '$6$ people, Ann and Bo side by side', why: 'glue them into one block' },
              { math: '$5$ units around the table: $(5-1)! = 24$', why: 'the block moves as one' },
              { math: '$24 \\cdot 2 = 48$', why: 'Ann left or right of Bo', answer: true },
            ],
          },
        ],
        examplesAfter: 'Turn seatings and spot the duplicates in the [circular permutation tool](!/combinatorics/visual-tools/circular-permutation).',
        visual: {
          caption:
            'Write a seating as a row read clockwise from some chair. Each circle gives $n$ different rows, one for each chair you could start reading from, so the $n!$ rows describe only $\\frac{n!}{n} = (n-1)!$ circles. Fixing one person in place is the same idea: you always start reading from that person.',
        },
        pitfalls: [
          {
            title: 'Using n! for a round table',
            wrong: '$6$ people: $6! = 720$',
            right: 'turns are the same: $(6-1)! = 120$',
          },
          {
            title: 'Halving for people',
            wrong: '$6$ people: $\\dfrac{5!}{2} = 60$',
            right: 'a seating and its mirror image differ (left and right neighbors swap): $120$',
          },
          {
            title: 'Treating numbered seats as a circle',
            wrong: '$6$ people, $6$ numbered chairs at a round table: $5! = 120$',
            right: 'numbered chairs make every seat different: $6! = 720$',
          },
        ],
        related: ['permutations', 'permutations-identical-items', 'which-counting-formula'],
        builtOn: [
          { label: 'Circular permutation', url: ruleUrl('cb.circular-permutation') },
          { label: 'Full permutation', url: ruleUrl('cb.full-permutation') },
          { label: 'Factorial', url: ruleUrl('cb.factorial') },
        ],
      },
    },
    {
      id: 'combinations',
      slug: 'combinations',
      name: 'How to count combinations',
      description: 'Choose $r$ of $n$ distinct items when order does not matter: count the ordered picks and divide by $r!$, which gives $\\binom{n}{r}$.',
      uses: ['binomial coefficient', 'factorial', 'multiplication principle'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Combinations (n Choose r) | Learn Math Class',
        description: 'Count combinations when order does not matter: read n and r, count ordered picks, divide by r! to get n choose r. Worked examples, committees, mistakes.',
        keywords: ['how to count combinations', 'n choose r', 'combination formula examples', 'committee counting', 'combinations vs permutations'],
      },
      page: {
        h1: 'How to Count Combinations',
        lead:
          'A combination is a selection where only the chosen group matters, not the order. Count the ordered picks as for a permutation, then divide by $r!$, the number of orders of each group.',
        recognize:
          'A group, set, hand, team or committee is chosen and its members have no roles: $3$ pizza toppings, a $5$-card hand, $4$ people for a team, lottery numbers. Test: write one choice in a different order; if it is the same choice, order does not matter.',
        recognizeNote: `Combinations and the symbol $\\binom{n}{r}$ are defined in the ${link('lesson.cb.combinations', 'combinations lesson')}.`,
        methods: [
          {
            name: 'Falling factors over r!',
            tag: 'usual',
            preferred: true,
            formula: '\\binom{n}{r} = \\dfrac{n(n-1)\\cdots(n-r+1)}{r!}',
            body: 'Count the ordered picks, then divide by the $r!$ orders of each group.',
          },
          {
            name: 'Factorial formula',
            tag: 'formula',
            formula: '\\binom{n}{r} = \\dfrac{n!}{r!\\,(n-r)!}',
            body: `The ${link('cb.combination', 'combination formula')}; cancel before you multiply.`,
          },
        ],
        steps: {
          traceLabel: 'On choosing 4 people from 9 for a team',
          items: [
            {
              title: 'Check that order does not matter.',
              body: 'A team has no first or second member, so the same four people in another order are the same team.',
              state: 'unordered, no repetition',
            },
            {
              title: 'Read n and r.',
              body: '$n$ is the number of items to choose from; $r$ is the size of the group.',
              state: '$n = 9$, $r = 4$',
            },
            {
              title: 'Count the ordered picks.',
              body: 'Multiply $r$ falling factors, as if the members had roles.',
              state: '$9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$',
              atomic: 'multiplication-principle',
            },
            {
              title: 'Divide by r!.',
              body: 'Each team was counted once for each of its $r!$ orders.',
              state: '$\\dfrac{3024}{4!} = \\dfrac{3024}{24}$',
              atomic: 'factorial',
            },
            {
              title: 'Simplify.',
              body: 'The result is always a whole number.',
              state: '$\\binom{9}{4} = 126$',
            },
          ],
        },
        examples: [
          {
            title: 'pizza toppings',
            badge: 'one group',
            lines: [
              { math: '$2$ toppings from $6$', why: 'order does not matter' },
              { math: '$\\binom{6}{2} = \\dfrac{6 \\cdot 5}{2!}$', why: 'two factors over $2!$' },
              { math: '$15$ pizzas', why: 'simplify', answer: true },
            ],
          },
          {
            title: 'a committee from two groups',
            badge: 'multiply',
            lines: [
              { math: '$3$ of $5$ women and $2$ of $4$ men', why: 'two separate choices' },
              { math: '$\\binom{5}{3} = 10$, $\\binom{4}{2} = 6$', why: 'choose each group' },
              { math: '$10 \\cdot 6 = 60$ committees', why: 'multiplication principle', answer: true },
            ],
          },
          {
            title: 'two people not both',
            badge: 'subtract',
            lines: [
              { math: '$4$ of $10$ people, Ann and Bo not both', why: 'one forbidden pair' },
              { math: '$\\binom{10}{4} = 210$ teams in all', why: 'no restriction' },
              { math: 'with both: $\\binom{8}{2} = 28$', why: 'two more from the other 8' },
              { math: '$210 - 28 = 182$', why: 'remove the forbidden teams', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare ordered and unordered picks in the [combination tool](!/combinatorics/visual-tools/combination), or check your numbers in the [counting calculator](!/combinatorics/calculator).',
        visual: {
          caption:
            'Count the ordered picks first: $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$. Now sort them into piles, one pile per team. Every pile holds the same number of picks, $4! = 24$, because four people can be lined up in $24$ ways. The number of piles is the number of teams, so divide: $\\frac{3024}{24} = 126$.',
        },
        pitfalls: [
          {
            title: 'Using permutations for a group',
            wrong: '$2$ toppings from $6$: $6 \\cdot 5 = 30$',
            right: 'ham and olive is olive and ham: $\\dfrac{30}{2!} = 15$',
          },
          {
            title: 'Adding the groups',
            wrong: '$3$ women and $2$ men: $\\binom{5}{3} + \\binom{4}{2} = 16$',
            right: 'both choices are made: $10 \\cdot 6 = 60$',
          },
          {
            title: 'Dividing by the wrong factorial',
            wrong: '$\\binom{9}{4} = \\dfrac{9 \\cdot 8 \\cdot 7 \\cdot 6}{5!}$',
            right: 'divide by $r! = 4!$: $\\dfrac{3024}{24} = 126$',
          },
        ],
        related: ['permutations', 'combinations-with-repetition', 'binomial-coefficients'],
        builtOn: [
          { label: 'Combination', url: ruleUrl('cb.combination') },
          { label: 'Binomial coefficient', url: ruleUrl('cb.binomial-coefficient') },
          { label: 'Multiplication rule', url: ruleUrl('cb.multiplication-rule') },
        ],
      },
    },
    {
      id: 'combinations-with-repetition',
      slug: 'combinations-with-repetition',
      name: 'How to count combinations with repetition',
      description: 'Choose $r$ items from $n$ kinds when a kind may be chosen again and order does not matter: stars and bars, $\\binom{n+r-1}{r}$.',
      uses: ['stars and bars', 'binomial coefficient'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Combinations with Repetition (Stars and Bars) | Learn Math Class',
        description: 'Count selections where kinds can repeat: stars for items, bars between kinds, then n+r-1 choose r. Worked examples with donuts and equations, plus mistakes.',
        keywords: ['combinations with repetition', 'stars and bars', 'multiset counting', 'nonnegative integer solutions', 'n+r-1 choose r'],
      },
      page: {
        h1: 'How to Count Combinations with Repetition',
        lead:
          'When you pick several items from a few kinds and a kind may be picked again, a selection is fixed by how many of each kind you take. Write it as stars for the items and bars between the kinds, and count the ways to place the bars.',
        recognize:
          'You choose several items from a few kinds, a kind can be chosen more than once, and only how many of each kind matters: donuts from a shop, scoops of ice cream, identical coins into labeled boxes, whole-number solutions of $x + y + z = 7$. Test: can the result be written as a count per kind?',
        recognizeNote: `This count is the weak composition (stars and bars) in the ${link('lesson.cb.combinations', 'combinations lesson')}.`,
        methods: [
          {
            name: 'Stars and bars',
            tag: 'usual',
            preferred: true,
            formula: '\\binom{n + r - 1}{r} = \\binom{n + r - 1}{n - 1}',
            body: `$r$ stars for the items and $n - 1$ bars between the kinds (${link('cb.weak-composition', 'weak composition')}).`,
          },
          {
            name: 'At least one of each kind',
            tag: 'no empty kind',
            formula: '\\binom{r - 1}{n - 1}',
            body: `Give one of each kind first and choose the rest freely, or use the ${link('cb.strong-composition', 'strong composition')} formula directly.`,
          },
        ],
        steps: {
          traceLabel: 'On 4 donuts from 3 kinds',
          items: [
            {
              title: 'Check that kinds repeat and order does not matter.',
              body: 'Two glazed, one jam and one plain is one box, however you list it.',
              state: 'unordered, repetition allowed',
            },
            {
              title: 'Read the number of kinds and the number of picks.',
              body: '$n$ counts the kinds, $r$ counts the items you take.',
              state: '$n = 3$ kinds, $r = 4$ donuts',
            },
            {
              title: 'Write each choice as stars and bars.',
              body: 'Put $r$ stars in a row and split them into the kinds with $n - 1$ bars: $\\star\\star \\mid \\star \\mid \\star$ means $2, 1, 1$.',
              state: '$4$ stars, $2$ bars, $6$ symbols',
            },
            {
              title: 'Choose the places of the stars.',
              body: 'Every choice of places among the $n + r - 1$ symbols gives exactly one box.',
              state: '$\\binom{6}{4} = \\binom{6}{2} = 15$',
            },
          ],
        },
        examples: [
          {
            title: 'ice cream scoops',
            badge: 'basic',
            lines: [
              { math: '$3$ scoops from $5$ flavors, repeats allowed', why: '$n = 5$, $r = 3$' },
              { math: '$\\binom{5 + 3 - 1}{3} = \\binom{7}{3}$', why: 'stars and bars' },
              { math: '$35$ cups', why: '', answer: true },
            ],
          },
          {
            title: 'whole-number solutions',
            badge: 'equation',
            lines: [
              { math: '$x + y + z + w = 6$, all $\\ge 0$', why: '$6$ units into $4$ variables' },
              { math: '$\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3}$', why: '$6$ stars, $3$ bars' },
              { math: '$84$ solutions', why: '', answer: true },
            ],
          },
          {
            title: 'at least one of each',
            badge: 'shift first',
            lines: [
              { math: '$9$ donuts from $4$ kinds, each kind at least once', why: 'lower bound on every kind' },
              { math: 'give one of each: $5$ left to choose', why: 'removes the lower bound' },
              { math: '$\\binom{5 + 4 - 1}{5} = \\binom{8}{5}$', why: 'free choice of the rest' },
              { math: '$56$ boxes', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Move the stars and bars yourself in the [weak composition tool](!/combinatorics/visual-tools/weak-composition); the at-least-one case is in the [strong composition tool](!/combinatorics/visual-tools/strong-composition).',
        visual: {
          caption:
            'A box of donuts is fixed by how many of each kind it holds, so line the donuts up by kind and draw a bar where one kind ends and the next begins. With $3$ kinds you need $2$ bars. Every box becomes a row of $4$ stars and $2$ bars, and every such row is a box. Counting the rows means choosing which $2$ of the $6$ places hold bars.',
        },
        pitfalls: [
          {
            title: 'Using plain combinations',
            wrong: '$4$ donuts from $3$ kinds: $\\binom{3}{4} = 0$',
            right: 'kinds repeat: $\\binom{3 + 4 - 1}{4} = 15$',
          },
          {
            title: 'Using n to the r',
            wrong: '$4$ donuts from $3$ kinds: $3^4 = 81$ boxes',
            right: '$81$ counts ordered picks; a box ignores order: $15$',
          },
          {
            title: 'Swapping kinds and items',
            wrong: '$3$ scoops from $5$ flavors: $\\binom{3 + 5 - 1}{5} = 21$',
            right: '$n = 5$ flavors, $r = 3$ scoops: $\\binom{7}{3} = 35$',
          },
        ],
        related: ['combinations', 'permutations-identical-items', 'which-counting-formula'],
        builtOn: [
          { label: 'Weak composition', url: ruleUrl('cb.weak-composition') },
          { label: 'Strong composition', url: ruleUrl('cb.strong-composition') },
          { label: 'Binomial coefficient', url: ruleUrl('cb.binomial-coefficient') },
        ],
      },
    },
    {
      id: 'binomial-coefficients',
      slug: 'binomial-coefficients',
      name: 'How to compute binomial coefficients',
      description: 'Evaluate $\\binom{n}{k}$ by hand: switch to the smaller $k$ by symmetry, write $k$ falling factors over $k!$, and cancel before you multiply.',
      uses: ['factorial', 'symmetry', "Pascal's rule"],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute Binomial Coefficients (n Choose k) | Learn Math Class',
        description: "Compute n choose k by hand: use symmetry for the smaller k, write falling factors over k!, cancel, multiply, or use Pascal's rule. Examples and common mistakes.",
        keywords: ['how to calculate n choose k', 'binomial coefficient by hand', 'compute combinations', "Pascal's rule", 'binomial coefficient symmetry'],
      },
      page: {
        h1: 'How to Compute Binomial Coefficients',
        lead:
          'The binomial coefficient $\\binom{n}{k}$ is a ratio of factorials, but you never need the full factorials. Keep only $k$ factors on top, divide by $k!$, and cancel first so the numbers stay small.',
        recognize:
          `A value $\\binom{n}{k}$, also written $C(n, k)$ or $_nC_k$, must be evaluated: $\\binom{7}{2}$, $\\binom{12}{9}$, $\\binom{20}{18}$, an entry of Pascal's triangle, or a coefficient in a binomial expansion. Test: if $k$ is more than half of $n$, switch to $n - k$ first.`,
        recognizeNote: `The binomial coefficient is defined in the ${link('lesson.cb.binomial-coefficient.1', 'binomial coefficient lesson')}.`,
        methods: [
          {
            name: 'Falling factors over k!',
            tag: 'usual',
            preferred: true,
            formula: '\\binom{n}{k} = \\dfrac{n(n-1)\\cdots(n-k+1)}{k!}',
            body: `The ${link('cb.binomial-coefficient', 'factorial definition')} after the $(n-k)!$ cancels.`,
          },
          {
            name: "Pascal's rule",
            tag: 'table',
            formula: '\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}',
            body: `Add the two entries above it in ${link('lesson.cb.binomial-coefficient.3', "Pascal's triangle")} (${link('cb.pascals-rule', "Pascal's rule")}).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\binom{12}{9}$',
          items: [
            {
              title: 'Use symmetry if k is large.',
              body: `Choosing $k$ items is the same as leaving out $n - k$ (${link('cb.binomial-symmetry-identity', 'symmetry identity')}).`,
              state: '$\\binom{12}{9} = \\binom{12}{3}$',
            },
            {
              title: 'Write k falling factors over k!.',
              body: 'Start at $n$ and count down $k$ factors.',
              state: '$\\dfrac{12 \\cdot 11 \\cdot 10}{3!}$',
              atomic: 'factorial',
            },
            {
              title: 'Cancel before multiplying.',
              body: 'Divide the factors of $k!$ into the top first; the result is always a whole number.',
              state: '$\\dfrac{12}{6} \\cdot 11 \\cdot 10 = 2 \\cdot 110$',
            },
            {
              title: 'Multiply what is left.',
              body: 'Check that the answer is a whole number.',
              state: '$220$',
            },
          ],
        },
        examples: [
          {
            title: 'small k',
            badge: 'two factors',
            lines: [
              { math: '$\\binom{7}{2} = \\dfrac{7 \\cdot 6}{2!}$', why: 'two factors over $2!$' },
              { math: '$= \\dfrac{42}{2}$', why: 'multiply' },
              { math: '$21$', why: '', answer: true },
            ],
          },
          {
            title: 'large k',
            badge: 'symmetry',
            lines: [
              { math: '$\\binom{10}{7} = \\binom{10}{3}$', why: '$10 - 7 = 3$' },
              { math: '$\\dfrac{10 \\cdot 9 \\cdot 8}{6} = \\dfrac{720}{6}$', why: '$3! = 6$' },
              { math: '$120$', why: '', answer: true },
            ],
          },
          {
            title: 'from the row above',
            badge: "Pascal's rule",
            lines: [
              { math: '$\\binom{9}{4} = \\binom{8}{3} + \\binom{8}{4}$', why: 'the two entries above' },
              { math: '$= 56 + 70$', why: 'row $8$ of the triangle' },
              { math: '$126$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'See every entry as the sum of the two above it in the [Pascal triangle visualizer](!/combinatorics/visual-tools/pascal-triangle).',
        visual: {
          caption:
            '$\\binom{n}{k}$ counts the ways to choose $k$ of $n$ items. The ordered picks number $n(n-1)\\cdots(n-k+1)$, and every unordered choice appears $k!$ times among them, so the quotient is always a whole number. That is also why cancelling works. Symmetry is the same count seen from the other side: choosing the $n - k$ items you leave out.',
        },
        pitfalls: [
          {
            title: 'Skipping symmetry',
            wrong: '$\\binom{20}{18} = \\dfrac{20 \\cdot 19 \\cdots 3}{18!}$',
            right: '$\\binom{20}{18} = \\binom{20}{2} = \\dfrac{20 \\cdot 19}{2} = 190$',
          },
          {
            title: 'Forgetting the k! below',
            wrong: '$\\binom{7}{2} = 7 \\cdot 6 = 42$',
            right: '$\\binom{7}{2} = \\dfrac{7 \\cdot 6}{2!} = 21$',
          },
          {
            title: 'Reading it as a fraction',
            wrong: '$\\binom{8}{4} = \\dfrac{8}{4} = 2$',
            right: 'it is a count, not a quotient: $\\dfrac{8 \\cdot 7 \\cdot 6 \\cdot 5}{24} = 70$',
          },
        ],
        related: ['combinations', 'binomial-expansion', 'specific-binomial-term'],
        builtOn: [
          { label: 'Binomial coefficient', url: ruleUrl('cb.binomial-coefficient') },
          { label: 'Symmetry identity', url: ruleUrl('cb.binomial-symmetry-identity') },
          { label: "Pascal's rule", url: ruleUrl('cb.pascals-rule') },
        ],
      },
    },
    {
      id: 'binomial-expansion',
      slug: 'binomial-expansion',
      name: 'How to expand a binomial power',
      description: "Expand $(a + b)^n$ with the binomial theorem: coefficients from row $n$ of Pascal's triangle, powers of $a$ falling and powers of $b$ rising.",
      uses: ['binomial theorem', "Pascal's triangle", 'binomial coefficients'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Expand a Binomial Power (Binomial Theorem) | Learn Math Class',
        description: "Expand (a + b)^n step by step: name a, b and n, take row n of Pascal's triangle, pair falling and rising powers, simplify. Worked examples and common mistakes.",
        keywords: ['how to expand binomials', 'binomial expansion', 'binomial theorem examples', "expand using Pascal's triangle", 'expand (a + b)^n'],
      },
      page: {
        h1: 'How to Expand a Binomial Power',
        lead:
          "The binomial theorem writes $(a + b)^n$ as $n + 1$ terms. The coefficients are row $n$ of Pascal's triangle, the power of $a$ falls from $n$ to $0$, and the power of $b$ rises from $0$ to $n$.",
        recognize:
          `A sum of two terms is raised to a whole-number power and the whole expansion is wanted: $(x + 1)^5$, $(2x + 1)^4$, $(x - 2)^4$, $(3x - y)^3$. Test: the bracket holds exactly two terms. If only one term or one coefficient is asked for, [find that term directly](!${HUB}/specific-binomial-term).`,
        recognizeNote: `The binomial theorem is stated in the ${link('lesson.cb.binomial-theorem.1', 'binomial theorem lesson')}.`,
        methods: [
          {
            name: 'Binomial theorem',
            tag: 'usual',
            preferred: true,
            formula: '(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k',
            body: `Each term is a coefficient times a power of $a$ times a power of $b$ (${link('cb.binomial-theorem', 'binomial theorem')}).`,
          },
          {
            name: 'Multiply the brackets',
            tag: 'small n',
            formula: '(a + b)^2 = a^2 + 2ab + b^2',
            body: 'For $n = 2$ or $3$, multiplying the brackets out is just as quick.',
          },
        ],
        steps: {
          traceLabel: 'On $(2x + 1)^4$',
          items: [
            {
              title: 'Name a, b and n.',
              body: 'Keep each coefficient and each sign with its term.',
              state: '$a = 2x$, $b = 1$, $n = 4$',
            },
            {
              title: "Write row n of Pascal's triangle.",
              body: 'Row $n$ has $n + 1$ entries $\\binom{n}{0}, \\ldots, \\binom{n}{n}$.',
              state: '$1, 4, 6, 4, 1$',
            },
            {
              title: 'Pair the coefficients with the powers.',
              body: 'The power of $a$ falls from $n$ to $0$ while the power of $b$ rises from $0$ to $n$.',
              state: '$(2x)^4 + 4(2x)^3 + 6(2x)^2 + 4(2x) + 1$',
            },
            {
              title: 'Simplify each term.',
              body: 'Raise the whole term $a$, its coefficient included, to its power.',
              state: '$16x^4 + 32x^3 + 24x^2 + 8x + 1$',
            },
          ],
        },
        examples: [
          {
            title: 'a plain binomial',
            badge: 'row 5',
            lines: [
              { math: '$(x + 1)^5$: row $5$ is $1, 5, 10, 10, 5, 1$', why: 'powers of $1$ are $1$' },
              { math: '$x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1$', why: 'coefficients only', answer: true },
            ],
          },
          {
            title: 'a minus sign',
            badge: 'b negative',
            lines: [
              { math: '$(x - 2)^4$ with $b = -2$', why: 'the sign stays with $b$' },
              { math: '$x^4 + 4x^3(-2) + 6x^2(4) + 4x(-8) + 16$', why: 'powers of $-2$' },
              { math: '$x^4 - 8x^3 + 24x^2 - 32x + 16$', why: 'signs alternate', answer: true },
            ],
          },
          {
            title: 'two variables',
            badge: 'coefficients inside',
            lines: [
              { math: '$(3x - y)^3$: row $3$ is $1, 3, 3, 1$', why: '$a = 3x$, $b = -y$' },
              { math: '$(3x)^3 + 3(3x)^2(-y) + 3(3x)(-y)^2 + (-y)^3$', why: 'pair the powers' },
              { math: '$27x^3 - 27x^2y + 9xy^2 - y^3$', why: 'simplify each term', answer: true },
            ],
          },
        ],
        examplesAfter: 'Read off any row of coefficients in the [Pascal triangle visualizer](!/combinatorics/visual-tools/pascal-triangle).',
        visual: {
          caption:
            '$(a + b)^n$ is $n$ brackets multiplied together. Every term of the product takes $a$ or $b$ from each bracket. A term with $b^k$ comes from choosing which $k$ brackets give $b$, and there are $\\binom{n}{k}$ such choices. That is why the coefficients are binomial coefficients, and why the exponents in every term add up to $n$.',
        },
        pitfalls: [
          {
            title: 'Dropping the middle terms',
            wrong: '$(x + 2)^3 = x^3 + 8$',
            right: '$(x + 2)^3 = x^3 + 6x^2 + 12x + 8$',
          },
          {
            title: 'Leaving the coefficient outside the power',
            wrong: '$(2x)^4 = 2x^4$',
            right: '$(2x)^4 = 2^4x^4 = 16x^4$',
          },
          {
            title: 'Losing the sign of b',
            wrong: '$(x - 1)^3 = x^3 - 3x^2 - 3x - 1$',
            right: '$(-1)^2 = 1$, so $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$',
          },
        ],
        related: ['specific-binomial-term', 'binomial-coefficients', 'combinations'],
        builtOn: [
          { label: 'Binomial theorem', url: ruleUrl('cb.binomial-theorem') },
          { label: 'Binomial coefficient', url: ruleUrl('cb.binomial-coefficient') },
          { label: 'Worked expansions (lesson)', url: ruleUrl('lesson.cb.binomial-theorem.5') },
        ],
      },
    },
    {
      id: 'specific-binomial-term',
      slug: 'specific-binomial-term',
      name: 'How to find a specific term in a binomial expansion',
      description: 'Find one term or coefficient of $(a + b)^n$ without expanding: write the general term $\\binom{n}{k}a^{n-k}b^k$ and solve for $k$.',
      uses: ['general term', 'binomial coefficient', 'laws of exponents'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Specific Term in a Binomial Expansion | Learn Math Class',
        description: 'Find one term of (a + b)^n without expanding: write the general term, collect the power of x, solve for k, evaluate. Constant term examples and common mistakes.',
        keywords: ['general term binomial expansion', 'find the coefficient of x', 'constant term binomial', 'specific term of binomial expansion', 'kth term formula'],
      },
      page: {
        h1: 'How to Find a Specific Term in a Binomial Expansion',
        lead:
          'You rarely need the whole expansion to answer a question about one term. The general term $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$ describes every term at once; choose the $k$ that matches the question and evaluate just that term.',
        recognize:
          'The question asks for one part of an expansion: the $4$th term of $(x + 3)^6$, the coefficient of $x^4$ in $(x + 2)^7$, the constant term (the term independent of $x$) of $\\left(x^2 + \\frac{1}{x}\\right)^6$, or the middle term. Test: only one term is wanted, and the power is too large to expand comfortably.',
        recognizeNote: `The general term and its numbering are explained in the ${link('lesson.cb.binomial-theorem.2', 'general term lesson')}.`,
        methods: [
          {
            name: 'General term',
            tag: 'usual',
            preferred: true,
            formula: 'T_{k+1} = \\binom{n}{k} a^{n-k} b^k',
            body: `The ${link('cb.general-term-in-binomial-expansion', 'general term formula')} gives any term from its index.`,
          },
          {
            name: 'Expand and read',
            tag: 'small n',
            formula: '(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k',
            body: `For small $n$, [expand the whole power](!${HUB}/binomial-expansion) and read the term off.`,
          },
        ],
        steps: {
          traceLabel: 'On the coefficient of $x^4$ in $(x + 2)^7$',
          items: [
            {
              title: 'Write the general term.',
              body: 'Substitute $a$, $b$ and $n$; keep $k$ as a letter.',
              state: '$T_{k+1} = \\binom{7}{k} x^{7-k} 2^k$',
            },
            {
              title: 'Collect the power of x.',
              body: 'Combine every power of $x$ in the term into one exponent written in terms of $k$.',
              state: 'exponent of $x$: $7 - k$',
            },
            {
              title: 'Solve for k.',
              body: 'Set the exponent equal to the power asked for; for the $m$-th term use $k = m - 1$. $k$ must be a whole number from $0$ to $n$.',
              state: '$7 - k = 4$, so $k = 3$',
            },
            {
              title: 'Evaluate the term.',
              body: 'Compute the binomial coefficient and the power of the constant, with its sign.',
              state: '$\\binom{7}{3} \\cdot 2^3 = 35 \\cdot 8 = 280$',
            },
          ],
        },
        examples: [
          {
            title: 'the 4th term',
            badge: 'by position',
            lines: [
              { math: '$(x + 3)^6$, $4$th term: $k = 3$', why: 'term $m$ has $k = m - 1$' },
              { math: '$T_4 = \\binom{6}{3} x^3 \\cdot 3^3 = 20 \\cdot 27\\,x^3$', why: 'general term' },
              { math: '$540x^3$', why: '', answer: true },
            ],
          },
          {
            title: 'a coefficient with a sign',
            badge: 'b negative',
            lines: [
              { math: '$(1 - 2x)^5$: $T_{k+1} = \\binom{5}{k}(-2x)^k$', why: '$a = 1$, $b = -2x$' },
              { math: 'coefficient of $x^2$: $k = 2$', why: 'power of $x$ is $k$' },
              { math: '$\\binom{5}{2}(-2)^2 = 10 \\cdot 4 = 40$', why: 'even power, positive', answer: true },
            ],
          },
          {
            title: 'the constant term',
            badge: 'negative powers',
            lines: [
              { math: '$\\left(x^2 + \\frac{1}{x}\\right)^6$: $T_{k+1} = \\binom{6}{k} x^{2(6-k)} x^{-k}$', why: 'general term' },
              { math: '$12 - 3k = 0$, so $k = 4$', why: 'constant means $x^0$' },
              { math: '$\\binom{6}{4} = 15$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Look up the coefficients of any row in the [Pascal triangle visualizer](!/combinatorics/visual-tools/pascal-triangle).',
        visual: {
          caption:
            'The terms of $(a + b)^n$ are numbered from $T_1 = a^n$, the term with no $b$. Each step to the right trades one factor $a$ for one factor $b$, so the term with $b^k$ sits in position $k + 1$. Finding a term means finding the one value of $k$ whose powers match the question; all other terms can stay unwritten.',
        },
        pitfalls: [
          {
            title: 'Off by one in the index',
            wrong: '$4$th term of $(x + 3)^6$ with $k = 4$: $\\binom{6}{4}x^2 \\cdot 3^4$',
            right: 'term $4$ has $k = 3$: $540x^3$',
          },
          {
            title: 'Forgetting the power of the constant',
            wrong: 'coefficient of $x^2$ in $(x + 2)^5$: $\\binom{5}{3} = 10$',
            right: 'include $2^3$: $\\binom{5}{3} \\cdot 8 = 80$',
          },
          {
            title: 'Dropping the sign',
            wrong: 'coefficient of $x$ in $(1 - 2x)^5$: $\\binom{5}{1} \\cdot 2 = 10$',
            right: '$\\binom{5}{1}(-2) = -10$',
          },
          {
            title: 'Ignoring the power inside a term',
            wrong: 'constant term of $\\left(x^2 + \\frac{1}{x}\\right)^6$ from $6 - 2k = 0$: $k = 3$, $20$',
            right: 'the exponent is $2(6 - k) - k = 12 - 3k$: $k = 4$, $15$',
          },
        ],
        related: ['binomial-expansion', 'binomial-coefficients', 'combinations'],
        builtOn: [
          { label: 'General term in binomial expansion', url: ruleUrl('cb.general-term-in-binomial-expansion') },
          { label: 'Middle term in binomial expansion', url: ruleUrl('cb.middle-term-in-binomial-expansion') },
          { label: 'Binomial theorem', url: ruleUrl('cb.binomial-theorem') },
        ],
      },
    },
    {
      id: 'inclusion-exclusion-two-sets',
      slug: 'inclusion-exclusion-two-sets',
      name: 'How to use inclusion-exclusion for two sets',
      description: 'Count the items in A or B: add the two sizes and subtract the overlap once, $|A \\cup B| = |A| + |B| - |A \\cap B|$.',
      uses: ['addition principle', 'intersection'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Inclusion-Exclusion for Two Sets | Learn Math Class',
        description: 'Count items in A or B: define both sets, count each, count the overlap, add and subtract it once. Worked examples with surveys and divisibility, plus mistakes.',
        keywords: ['inclusion exclusion two sets', 'A or B counting', 'union of two sets formula', 'how many in at least one', 'inclusion exclusion examples'],
      },
      page: {
        h1: 'How to Use Inclusion-Exclusion for Two Sets',
        lead:
          'Adding the sizes of two overlapping groups counts the overlap twice. Inclusion-exclusion adds both sizes and subtracts the overlap once, so every item in either group is counted exactly once.',
        recognize:
          'The question asks for the items with property A **or** property B (or both), and the two groups overlap: students taking French or Spanish, numbers divisible by $4$ or $6$, line-ups where Ann is first or Bo is last. Test: can one item be in both groups? If yes, plain adding double counts it.',
        recognizeNote: `The two-set formula is introduced in the ${link('lesson.cb.inclusion-exclusion.1', 'inclusion-exclusion lesson')}.`,
        methods: [
          {
            name: 'Add, then subtract the overlap',
            tag: 'usual',
            preferred: true,
            formula: '|A \\cup B| = |A| + |B| - |A \\cap B|',
            body: `The ${link('cb.inclusion-exclusion-principle-two-sets', 'two-set formula')}.`,
          },
          {
            name: 'Neither of the two',
            tag: 'complement',
            formula: '|U| - |A \\cup B|',
            body: `For "neither", subtract the union from the total (${link('cb.inclusion-exclusion-complementary-form', 'complementary form')}).`,
          },
        ],
        steps: {
          traceLabel: 'On the integers 1 to 60 divisible by 4 or 6',
          items: [
            {
              title: 'Define the two sets.',
              body: 'Name each property as a set of items.',
              state: '$A$: multiples of $4$; $B$: multiples of $6$',
            },
            {
              title: 'Count each set.',
              body: 'Here the count is $\\left\\lfloor \\frac{60}{d} \\right\\rfloor$ for the multiples of $d$.',
              state: '$|A| = 15$, $|B| = 10$',
            },
            {
              title: 'Count the overlap.',
              body: 'Items in both sets; for divisibility, the multiples of the least common multiple, $12$.',
              state: '$|A \\cap B| = 5$',
            },
            {
              title: 'Add, then subtract the overlap once.',
              body: 'Each item in both sets was counted twice by the sum.',
              state: '$15 + 10 - 5 = 20$',
            },
          ],
        },
        examples: [
          {
            title: 'a survey',
            badge: 'neither',
            lines: [
              { math: '$40$ students: $25$ soccer, $18$ basketball, $10$ both', why: 'how many like neither?' },
              { math: '$25 + 18 - 10 = 33$', why: 'like at least one' },
              { math: '$40 - 33 = 7$', why: 'subtract from the total', answer: true },
            ],
          },
          {
            title: 'divisibility',
            badge: 'numbers',
            lines: [
              { math: '$1$ to $100$: $33$ multiples of $3$, $14$ of $7$', why: 'count each set' },
              { math: 'both: multiples of $21$, $4$ of them', why: 'least common multiple' },
              { math: '$33 + 14 - 4 = 43$', why: '', answer: true },
            ],
          },
          {
            title: 'line-ups',
            badge: 'arrangements',
            lines: [
              { math: '$5$ people in a row, Ann first or Bo last', why: 'two overlapping conditions' },
              { math: 'Ann first: $4! = 24$; Bo last: $4! = 24$', why: 'fix one place each' },
              { math: 'both: $3! = 6$', why: 'fix both places' },
              { math: '$24 + 24 - 6 = 42$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw two overlapping circles. Adding $|A|$ and $|B|$ covers every region, but the lens where the circles overlap is covered twice. Subtracting $|A \\cap B|$ once leaves every item counted exactly once. When the circles do not overlap, the formula becomes the plain addition principle. Try it in the [two-set Venn diagram tool](!/probability/visual-tools/venn-diagrams/two-sets).',
        },
        pitfalls: [
          {
            title: 'Adding without the overlap',
            wrong: 'multiples of $4$ or $6$ up to $60$: $15 + 10 = 25$',
            right: 'the $5$ multiples of $12$ were counted twice: $25 - 5 = 20$',
          },
          {
            title: 'Subtracting the overlap twice',
            wrong: '$25 + 18 - 10 - 10 = 23$ like soccer or basketball',
            right: 'subtract once: $33$; the $23$ is the number who like exactly one',
          },
          {
            title: 'Using the product for the overlap',
            wrong: 'multiples of $4$ and $6$ = multiples of $24$: $2$ of them',
            right: 'use the least common multiple $12$: $5$ of them',
          },
        ],
        related: ['inclusion-exclusion-three-sets', 'complementary-counting', 'which-counting-formula'],
        builtOn: [
          { label: 'Inclusion-exclusion (two sets)', url: ruleUrl('cb.inclusion-exclusion-principle-two-sets') },
          { label: 'Addition rule', url: ruleUrl('cb.addition-rule') },
          { label: 'Complementary form', url: ruleUrl('cb.inclusion-exclusion-complementary-form') },
        ],
      },
    },
    {
      id: 'inclusion-exclusion-three-sets',
      slug: 'inclusion-exclusion-three-sets',
      name: 'How to use inclusion-exclusion for three sets',
      description: 'Count the items in at least one of three sets: add the three sizes, subtract the three pairwise overlaps, add back the triple overlap.',
      uses: ['inclusion-exclusion', 'intersections', 'complement'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Inclusion-Exclusion for Three Sets | Learn Math Class',
        description: 'Count items in A, B or C: add the singles, subtract the pairs, add back the triple, subtract from the total for none. Worked examples, surjections and mistakes.',
        keywords: ['inclusion exclusion three sets', 'three set venn diagram counting', 'A or B or C formula', 'divisible by 2 3 or 5', 'inclusion exclusion examples'],
      },
      page: {
        h1: 'How to Use Inclusion-Exclusion for Three Sets',
        lead:
          'With three overlapping sets, one correction is not enough. Add the three sizes, subtract the three pairwise overlaps, and add back the items in all three, which the subtraction removed completely.',
        recognize:
          'Three properties overlap and the question asks for "at least one", "A or B or C", or "none of them": numbers divisible by $2$, $3$ or $5$; students taking math, physics or chemistry; job assignments that leave no worker idle. Test: you know, or can count, all three pairwise overlaps and the triple overlap.',
        recognizeNote: `The three-set formula is introduced in the ${link('lesson.cb.inclusion-exclusion.2', 'three sets lesson')}.`,
        methods: [
          {
            name: 'Seven-term formula',
            tag: 'usual',
            preferred: true,
            formula: '|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|',
            body: `Singles plus, pairs minus, triple plus (${link('cb.inclusion-exclusion-principle-three-sets', 'three-set formula')}).`,
          },
          {
            name: 'Fill the Venn regions',
            tag: 'regions',
            formula: '\\text{center} \\to \\text{pairs only} \\to \\text{singles only}',
            body: 'Write the triple overlap in the middle, subtract it from each pair, then fill the single regions, and add all seven regions.',
          },
        ],
        steps: {
          traceLabel: 'On the integers 1 to 60 divisible by 2, 3 or 5',
          items: [
            {
              title: 'Add the three single sets.',
              body: 'Multiples of $2$, $3$ and $5$.',
              state: '$30 + 20 + 12 = 62$',
            },
            {
              title: 'Subtract the three pairs.',
              body: 'Multiples of $6$, $10$ and $15$.',
              state: '$62 - (10 + 6 + 4) = 42$',
            },
            {
              title: 'Add back the triple overlap.',
              body: 'Multiples of $30$ were added three times and subtracted three times, so they are missing.',
              state: '$42 + 2 = 44$',
            },
            {
              title: 'Subtract from the total if the question says none.',
              body: 'The items in none of the sets are the total minus the union.',
              state: 'none of them: $60 - 44 = 16$',
            },
          ],
        },
        examples: [
          {
            title: 'a three-subject survey',
            badge: 'none',
            lines: [
              { math: '$50$ students: math $28$, physics $23$, chemistry $18$', why: 'single sets' },
              { math: 'pairs $12$, $9$, $7$; all three $4$', why: 'overlaps' },
              { math: '$69 - 28 + 4 = 45$ take at least one', why: 'seven-term formula' },
              { math: '$50 - 45 = 5$ take none', why: 'subtract from the total', answer: true },
            ],
          },
          {
            title: 'divisibility up to 1000',
            badge: 'numbers',
            lines: [
              { math: 'multiples of $3$, $5$, $7$: $333 + 200 + 142 = 675$', why: 'single sets' },
              { math: 'of $15$, $21$, $35$: $66 + 47 + 28 = 141$; of $105$: $9$', why: 'pairs and triple' },
              { math: '$675 - 141 + 9 = 543$', why: '', answer: true },
            ],
          },
          {
            title: 'every worker gets a job',
            badge: 'surjections',
            lines: [
              { math: '$5$ jobs to $3$ workers: $3^5 = 243$ ways', why: 'each job picks a worker' },
              { math: 'some worker idle: $3 \\cdot 2^5 - 3 \\cdot 1^5 + 0 = 93$', why: 'inclusion-exclusion on idle workers' },
              { math: '$243 - 93 = 150$', why: 'subtract from the total', answer: true },
            ],
          },
        ],
        examplesAfter: `The rule for any number of sets is in the ${link('lesson.cb.inclusion-exclusion.3', 'general formula lesson')}.`,
        visual: {
          caption:
            'Three overlapping circles cut the plane into seven regions. Adding the three circles counts each pair-only region twice and the center three times. Subtracting the three pairs fixes the pair-only regions but removes the center completely, three minus three. Adding the triple overlap once puts the center back, so every region is counted exactly once. Try it in the [three-set Venn diagram tool](!/probability/visual-tools/venn-diagrams/three-sets).',
        },
        pitfalls: [
          {
            title: 'Forgetting the triple overlap',
            wrong: '$30 + 20 + 12 - 10 - 6 - 4 = 42$',
            right: 'add back the $2$ multiples of $30$: $44$',
          },
          {
            title: 'Using region counts as overlaps',
            wrong: '$|M \\cap P| = 8$ (math and physics only)',
            right: '$|M \\cap P| = 12$ includes the $4$ who take all three',
          },
          {
            title: 'Subtracting the triple term',
            wrong: '$62 - 20 - 2 = 40$',
            right: 'singles plus, pairs minus, triple plus: $62 - 20 + 2 = 44$',
          },
        ],
        related: ['inclusion-exclusion-two-sets', 'derangements', 'complementary-counting'],
        builtOn: [
          { label: 'Inclusion-exclusion (three sets)', url: ruleUrl('cb.inclusion-exclusion-principle-three-sets') },
          { label: 'Inclusion-exclusion (general)', url: ruleUrl('cb.inclusion-exclusion-principle-general') },
          { label: 'Surjective functions count', url: ruleUrl('cb.surjective-functions-count') },
        ],
      },
    },
    {
      id: 'complementary-counting',
      slug: 'complementary-counting',
      name: 'How to use complementary counting',
      description: 'Count the outcomes you do not want and subtract them from the total; the standard route for "at least one" questions.',
      uses: ['complement', 'multiplication principle', 'subtraction'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Complementary Counting (At Least One) | Learn Math Class',
        description: 'Solve at-least-one counting problems: count all outcomes, state the opposite, count it the same way and subtract. Examples with PINs, committees and line-ups.',
        keywords: ['complementary counting', 'at least one counting', 'counting the complement', 'total minus complement', 'at least one combinatorics'],
      },
      page: {
        h1: 'How to Use Complementary Counting',
        lead:
          'Some sets are hard to count directly but easy to count from the outside. Count everything, count what you do not want, and subtract. "At least one" questions are the classic case, because their opposite, "none", is a single count.',
        recognize:
          'The words **at least one**, **not all**, **some repeat** or **not next to each other** appear, or a direct count splits into many overlapping cases: PINs with a repeated digit, committees with at least one woman, line-ups where two people are not side by side. Test: is the opposite condition ("none", "all different", "together") one easy count?',
        recognizeNote: `Complementary counting is explained in the ${link('lesson.cb.counting-principles.3', 'counting principles lesson')}.`,
        methods: [
          {
            name: 'Total minus complement',
            tag: 'usual',
            preferred: true,
            formula: '|A| = |U| - |A^c|',
            body: `The ${link('cb.complementary-counting', 'complementary counting')} formula.`,
          },
          {
            name: 'Add the cases',
            tag: 'direct',
            formula: '|A| = |A_1| + |A_2| + \\cdots',
            body: `Split into exactly one, exactly two, and so on, and use the ${link('cb.addition-rule', 'addition rule')}; slower and easy to double count.`,
          },
        ],
        steps: {
          traceLabel: 'On 4-digit PINs with at least one repeated digit',
          items: [
            {
              title: 'Count all outcomes.',
              body: 'Use the same rules as the question: here digits may repeat.',
              state: '$10^4 = 10{,}000$',
              atomic: 'multiplication-principle',
            },
            {
              title: 'State the opposite condition.',
              body: '"At least one repeat" fails only when all digits are different.',
              state: 'all $4$ digits different',
            },
            {
              title: 'Count the opposite.',
              body: 'Count it the same way as the total, ordered if the total is ordered.',
              state: '$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$',
            },
            {
              title: 'Subtract.',
              body: 'The wanted outcomes are the rest of the total.',
              state: '$10{,}000 - 5040 = 4960$',
            },
          ],
        },
        examples: [
          {
            title: 'coin flips',
            badge: 'at least one head',
            lines: [
              { math: '$5$ flips: $2^5 = 32$ outcomes', why: 'total' },
              { math: 'no heads: $1$ outcome', why: 'all tails' },
              { math: '$32 - 1 = 31$', why: '', answer: true },
            ],
          },
          {
            title: 'at least one woman',
            badge: 'committee',
            lines: [
              { math: '$4$ from $6$ men and $5$ women: $\\binom{11}{4} = 330$', why: 'all committees' },
              { math: 'no women: $\\binom{6}{4} = 15$', why: 'all four are men' },
              { math: '$330 - 15 = 315$', why: '', answer: true },
            ],
          },
          {
            title: 'not side by side',
            badge: 'line-up',
            lines: [
              { math: '$6$ people in a row: $6! = 720$', why: 'all line-ups' },
              { math: 'Ann and Bo together: $2 \\cdot 5! = 240$', why: 'glue them into one block' },
              { math: '$720 - 240 = 480$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check the total and the complement separately in the [counting calculator](!/combinatorics/calculator).',
        visual: {
          caption:
            'Think of the total as a whole pie. "At least one" is most of the pie and is made of many overlapping slices: exactly one, exactly two, and so on. "None" is one thin slice with no overlaps. Measuring the thin slice and subtracting it from the whole is faster and never counts an outcome twice.',
        },
        pitfalls: [
          {
            title: 'Securing one success first',
            wrong: 'at least one head in $5$ flips: $5 \\cdot 2^4 = 80$',
            right: 'that is more than the $32$ outcomes; use $32 - 1 = 31$',
          },
          {
            title: 'Taking the wrong opposite',
            wrong: 'opposite of "at least one woman" is "at least one man"',
            right: 'the opposite is "no women": all four are men',
          },
          {
            title: 'Counting the total and the opposite differently',
            wrong: 'PINs: ordered total $10^4$, unordered opposite $\\binom{10}{4}$',
            right: 'count both in order: $10^4 - 10 \\cdot 9 \\cdot 8 \\cdot 7 = 4960$',
          },
        ],
        related: ['inclusion-exclusion-two-sets', 'combinations', 'which-counting-formula'],
        builtOn: [
          { label: 'Complementary counting', url: ruleUrl('cb.complementary-counting') },
          { label: 'Inclusion-exclusion, complementary form', url: ruleUrl('cb.inclusion-exclusion-complementary-form') },
          { label: 'Putting the principles together (lesson)', url: ruleUrl('lesson.cb.counting-principles.6') },
        ],
      },
    },
    {
      id: 'derangements',
      slug: 'derangements',
      name: 'How to count derangements',
      description: 'Count the orders in which no item stays in its own place: the alternating sum $!n = n!\\sum_{k=0}^{n} \\frac{(-1)^k}{k!}$ or the recurrence.',
      uses: ['inclusion-exclusion', 'factorial', 'recurrence'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Derangements (Subfactorial !n) | Learn Math Class',
        description: 'Count derangements, orders with no item in its own place: the alternating sum for !n, the recurrence and n!/e. Examples with envelopes and common mistakes.',
        keywords: ['how to count derangements', 'subfactorial', 'derangement formula', 'hat check problem', 'letters in wrong envelopes'],
      },
      page: {
        h1: 'How to Count Derangements',
        lead:
          'A derangement is an order in which no item stays in its own place. Start from all $n!$ orders and remove those with fixed points by inclusion-exclusion; the result is an alternating sum that is quick to evaluate.',
        recognize:
          'Items go back to owners or places and **none** may land in its own: letters in envelopes, hats returned at random, a gift swap where nobody draws their own name, a seating where everyone must move. Test: each item has exactly one forbidden place, and the forbidden places are all different.',
        recognizeNote: `Derangements and the notation $!n$ are defined in the ${link('lesson.cb.permutations', 'permutations lesson')} and derived in the ${link('lesson.cb.inclusion-exclusion.5', 'inclusion-exclusion lesson')}.`,
        methods: [
          {
            name: 'Alternating sum',
            tag: 'usual',
            preferred: true,
            formula: '!n = n! \\sum_{k=0}^{n} \\dfrac{(-1)^k}{k!}',
            body: `The ${link('cb.derangement', 'derangement formula')}, from inclusion-exclusion on the fixed points.`,
          },
          {
            name: 'Recurrence',
            tag: 'step up',
            formula: '!n = (n-1)\\big(!(n-1) + !(n-2)\\big)',
            body: `Build up from $!1 = 0$ and $!2 = 1$ (${link('cb.derangement-recurrence', 'derangement recurrence')}).`,
          },
          {
            name: 'Nearest whole number',
            tag: 'shortcut',
            formula: '!n = \\text{round}\\left(\\dfrac{n!}{e}\\right), \\quad n \\ge 1',
            body: `Works because $\\frac{!n}{n!}$ approaches $\\frac{1}{e}$ very fast (${link('cb.derangement-asymptotic-limit', 'asymptotic limit')}).`,
          },
        ],
        steps: {
          traceLabel: 'On 5 letters in 5 envelopes, none correct',
          items: [
            {
              title: 'Check the condition.',
              body: 'Every item has one forbidden place, and no item may sit in it.',
              state: '$n = 5$',
            },
            {
              title: 'Write the alternating sum.',
              body: 'One term for each $k$ from $0$ to $n$, signs alternating.',
              state: '$!5 = 5!\\left(1 - 1 + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!}\\right)$',
            },
            {
              title: 'Multiply n! into each term.',
              body: 'Each term becomes the whole number $\\frac{n!}{k!}$.',
              state: '$120 - 120 + 60 - 20 + 5 - 1$',
              atomic: 'factorial',
            },
            {
              title: 'Add.',
              body: 'Check: the result is close to $\\frac{n!}{e}$.',
              state: '$!5 = 44$',
            },
          ],
        },
        examples: [
          {
            title: 'three items',
            badge: 'list them',
            lines: [
              { math: '$!3 = 3!\\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6}\\right) = 3 - 1$', why: 'alternating sum' },
              { math: '$2$: the orders $231$ and $312$', why: 'no digit in its place', answer: true },
            ],
          },
          {
            title: 'six items',
            badge: 'recurrence',
            lines: [
              { math: '$!4 = 9$, $!5 = 44$', why: 'known smaller values' },
              { math: '$!6 = 5(44 + 9)$', why: 'recurrence with $n = 6$' },
              { math: '$265$', why: '', answer: true },
            ],
          },
          {
            title: 'exactly two right',
            badge: 'choose, then derange',
            lines: [
              { math: '$5$ letters, exactly $2$ in the right envelope', why: 'the rest all wrong' },
              { math: '$\\binom{5}{2} = 10$ ways to pick the correct two', why: 'choose the fixed letters' },
              { math: 'other $3$ all wrong: $!3 = 2$', why: 'derange the rest' },
              { math: '$10 \\cdot 2 = 20$', why: 'multiplication principle', answer: true },
            ],
          },
        ],
        examplesAfter: 'Step through all orders of a few items in the [permutations visualizer](!/combinatorics/permutations/permutations-visualizer) and pick out the ones with no item in place.',
        visual: {
          caption:
            'Start with all $n!$ orders and remove those that leave item $1$ in place, item $2$ in place, and so on. Orders that fix two items were removed twice, so add them back; orders that fix three were added back once too often, so remove them again. Each level has $\\binom{n}{k}$ choices of fixed items and $(n-k)!$ orders of the rest, which is where $\\frac{n!}{k!}$ comes from. For large $n$ about $37\\%$ of all orders are derangements.',
        },
        pitfalls: [
          {
            title: 'Stopping after one level',
            wrong: '$!5 = 120 - 5 \\cdot 4! = 0$',
            right: 'continue the alternating sum: $120 - 120 + 60 - 20 + 5 - 1 = 44$',
          },
          {
            title: 'Confusing !n with n!',
            wrong: '$!4 = 24$',
            right: '$4! = 24$ counts all orders; $!4 = 9$',
          },
          {
            title: 'Not choosing the fixed items',
            wrong: 'exactly $2$ of $5$ right: $!3 = 2$',
            right: 'choose the $2$ fixed letters first: $\\binom{5}{2} \\cdot !3 = 20$',
          },
        ],
        related: ['inclusion-exclusion-three-sets', 'complementary-counting', 'permutations'],
        builtOn: [
          { label: 'Derangement', url: ruleUrl('cb.derangement') },
          { label: 'Derangement recurrence', url: ruleUrl('cb.derangement-recurrence') },
          { label: 'Inclusion-exclusion, complementary form', url: ruleUrl('cb.inclusion-exclusion-complementary-form') },
        ],
      },
    },

    // ═══ III. Strategy ═════════════════════════════════════════════════
    {
      id: 'which-counting-formula',
      slug: 'which-counting-formula',
      name: 'Which counting formula should I use?',
      description: 'A decision tree from three questions (does order matter, can items repeat, is anything special) to the formula that counts the outcomes.',
      uses: 'leads to 7 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Counting Formula Should I Use? (Decision Tree) | Learn Math Class',
        description: 'Choose the right counting formula: does order matter, can items repeat, are some identical, is it a circle, or is it at least one. A decision tree with links.',
        keywords: ['permutation or combination', 'which counting formula to use', 'does order matter', 'counting decision tree', 'when to use combinations'],
      },
      page: {
        h1: 'Which Counting Formula Should I Use?',
        lead:
          'Two questions decide most counting problems: does the order of the chosen items matter, and can an item be used again? Two more checks, identical items and a circle, finish the choice. Questions with "at least one" or "none" go to complementary counting.',
        recognize:
          'You have a counting question and are not sure whether it is a permutation, a combination or something else: officers from a club, a pizza with $3$ toppings, PIN codes, rearranging BANANA, seating at a round table. Test: swap two chosen items and ask whether the outcome changed.',
        recognizeNote: `All counting scenarios are compared in the ${link('lesson.cb.basics', 'combinatorics basics lesson')}.`,
        tree: {
          rootId: 'order',
          svgW: 1100,
          nodes: {
            order: {
              type: 'q',
              text: 'Does the order matter?',
              children: [
                { label: 'yes, positions differ', to: 'repeatOrdered' },
                { label: 'no, only the group', to: 'repeatGroup' },
                { label: 'at least one / none', to: 'complementLeaf' },
              ],
            },
            repeatOrdered: {
              type: 'q',
              text: 'Can an item be used again?',
              children: [
                { label: 'yes', to: 'repLeaf' },
                { label: 'no', to: 'special' },
              ],
            },
            special: {
              type: 'q',
              text: 'Anything special?',
              children: [
                { label: 'all items distinct', to: 'permLeaf' },
                { label: 'some identical', to: 'identLeaf' },
                { label: 'around a circle', to: 'circleLeaf' },
              ],
            },
            repeatGroup: {
              type: 'q',
              text: 'Can an item be chosen again?',
              children: [
                { label: 'no', to: 'combLeaf' },
                { label: 'yes', to: 'combRepLeaf' },
              ],
            },
            repLeaf: { type: 'leaf', to: 'permutations-with-repetition', short: 'Codes and PINs' },
            permLeaf: { type: 'leaf', to: 'permutations', short: 'Permutations' },
            identLeaf: { type: 'leaf', to: 'permutations-identical-items', short: 'Identical items' },
            circleLeaf: { type: 'leaf', to: 'circular-permutations', short: 'Round table' },
            combLeaf: { type: 'leaf', to: 'combinations', short: 'Combinations' },
            combRepLeaf: { type: 'leaf', to: 'combinations-with-repetition', short: 'Stars and bars' },
            complementLeaf: { type: 'leaf', to: 'complementary-counting', short: 'Count the opposite' },
          },
          branches: [
            {
              condition: 'Order matters and an item can be used again, as in PINs, passwords and license plates.',
              answer: `Use [arrangements with repetition](!${HUB}/permutations-with-repetition): $n^r$, the ${link('cb.permutation-with-repetition', 'permutation with repetition')} formula.`,
            },
            {
              condition: 'Order matters, every item is different, and each item is used at most once.',
              answer: `Use [permutations](!${HUB}/permutations): $P(n, r) = \\frac{n!}{(n-r)!}$, or $n!$ for all items. The formula is in the ${link('lesson.cb.permutations', 'permutations lesson')}.`,
            },
            {
              condition: 'Order matters, all items are used, and some of them are identical, as in the letters of BANANA.',
              answer: `Use [arrangements with identical items](!${HUB}/permutations-identical-items): $\\frac{n!}{n_1!\\,n_2!\\cdots n_k!}$, the ${link('lesson.cb.binomial-coefficient.4', 'multinomial coefficient')}.`,
            },
            {
              condition: 'Order matters and the items sit around a circle, where turning the circle gives the same arrangement.',
              answer: `Use [circular arrangements](!${HUB}/circular-permutations): $(n-1)!$ by the ${link('cb.circular-permutation', 'circular permutation')} formula, explained in the ${link('lesson.cb.permutations', 'permutations lesson')}.`,
            },
            {
              condition: 'Only the chosen group matters, and each item can be chosen at most once.',
              answer: `Use [combinations](!${HUB}/combinations): $\\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!}$, defined in the ${link('lesson.cb.combinations', 'combinations lesson')}.`,
            },
            {
              condition: 'Only how many of each kind matters, and a kind can be chosen again.',
              answer: `Use [combinations with repetition](!${HUB}/combinations-with-repetition): $\\binom{n+r-1}{r}$, the ${link('cb.weak-composition', 'weak composition')} count (stars and bars) in the ${link('lesson.cb.combinations', 'combinations lesson')}.`,
            },
            {
              condition: 'The question says "at least one", "none" or "not all", or the direct count splits into many overlapping cases.',
              answer: `Use [complementary counting](!${HUB}/complementary-counting): the total minus the opposite (${link('lesson.cb.counting-principles.3', 'complementary counting lesson')}). When the groups to remove overlap, use [inclusion-exclusion for two sets](!${HUB}/inclusion-exclusion-two-sets) or [for three sets](!${HUB}/inclusion-exclusion-three-sets).`,
            },
          ],
        },
        examplesAfter: 'Pick the scenario and get the count in the [counting calculator](!/combinatorics/calculator).',
        related: ['permutations', 'combinations', 'complementary-counting'],
        builtOn: [
          { label: 'Combinatorics basics (lesson)', url: ruleUrl('lesson.cb.basics') },
          { label: 'Multiplication rule', url: ruleUrl('cb.multiplication-rule') },
          { label: 'Partial permutation', url: ruleUrl('cb.partial-permutation') },
          { label: 'Combination', url: ruleUrl('cb.combination') },
        ],
      },
    },

    // ═══ IV. Applied ══════════════════════════════════════════════════
    {
      id: 'counting-word-problems',
      slug: 'counting-word-problems',
      name: 'How to solve counting word problems',
      description: 'Committees, license plates, seating plans and "at least one" questions: translate the story, pick the formula, count each stage.',
      uses: ['permutations', 'combinations', 'complementary counting'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 4 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Counting Word Problems (Combinatorics) | Learn Math Class',
        description: 'Solve counting word problems: write one outcome, decide order and repetition, handle restrictions, multiply the stages. Committees, plates, seats, at least one.',
        keywords: ['counting word problems', 'combinatorics word problems', 'how many ways problems', 'permutation and combination word problems', 'license plate problems'],
      },
      page: {
        h1: 'How to Solve Counting Word Problems',
        lead:
          'A counting word problem hides a formula behind a story. Decide what one outcome looks like, whether its order matters and whether items can repeat; the rest is one of the standard counts, often several of them joined by the multiplication principle.',
        recognize:
          'Trigger words: **how many ways**, **how many different**, **arrangements**, **committee**, **code**, **password**, **license plate**, **seated**, **at least one**, **together**. The answer is a whole number of outcomes, not a probability.',
        setup: [
          { label: 'One outcome', body: 'Write one possible outcome in full, for example "Ana chair, with Ben and Cy" or "QXT 042". It shows exactly what is being counted.' },
          { label: 'Order', body: 'Swap two parts of your outcome. A different outcome means order matters (permutations); the same outcome means it does not (combinations).' },
          { label: 'Repetition', body: 'Ask whether an item can appear twice: digits in a code can, people on a committee cannot.' },
          { label: 'Restrictions', body: 'Mark fixed positions, people who must sit together (glue them into one block), and "at least one" conditions (count the opposite and subtract).' },
          { label: 'Stages', body: 'Split the outcome into stages, count each stage with its formula, and multiply; add only for separate cases that cannot happen together.' },
        ],
        handoff: {
          to: 'combinations',
          body: `Count each stage with [combinations](!${HUB}/combinations) or [permutations](!${HUB}/permutations); if you are not sure which, follow the [counting decision tree](!${HUB}/which-counting-formula).`,
        },
        interpretation:
          'The answer is a number of outcomes, so it must be a whole number. Check it against a rough bound: it cannot exceed the count with no restrictions. For a small version of the problem, list the outcomes to see that none is missing or counted twice. Write large counts with separators, such as $15{,}600{,}000$.',
        examples: [
          {
            title: 'a committee with a chair',
            badge: 'committee',
            lines: [
              { math: '$8$ people: choose $3$ for a committee and name one the chair', why: 'roles for one member only' },
              { math: 'chair: $8$ ways; other two: $\\binom{7}{2} = 21$', why: 'two stages' },
              { math: '$8 \\cdot 21 = 168$ committees', why: 'multiplication principle', answer: true },
            ],
          },
          {
            title: 'license plates',
            badge: 'codes',
            lines: [
              { math: '$3$ different letters, then $3$ digits (digits may repeat)', why: 'two kinds of stage' },
              { math: 'letters: $26 \\cdot 25 \\cdot 24 = 15{,}600$', why: 'no repeated letter' },
              { math: 'digits: $10^3 = 1000$', why: 'repeats allowed' },
              { math: '$15{,}600 \\cdot 1000 = 15{,}600{,}000$ plates', why: 'multiply the stages', answer: true },
            ],
          },
          {
            title: 'a couple sits together',
            badge: 'seating',
            lines: [
              { math: '$6$ people in a row, one couple side by side', why: 'restriction' },
              { math: 'glue the couple: $5$ units, $5! = 120$', why: 'block counts as one' },
              { math: '$120 \\cdot 2 = 240$ seatings', why: 'couple in either order', answer: true },
            ],
          },
          {
            title: 'at least one defective',
            badge: 'at least one',
            lines: [
              { math: '$12$ bulbs, $3$ defective; choose $4$', why: 'order does not matter' },
              { math: 'all: $\\binom{12}{4} = 495$; no defective: $\\binom{9}{4} = 126$', why: 'count the opposite' },
              { math: '$495 - 126 = 369$ choices', why: 'subtract', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check each stage in the [counting calculator](!/combinatorics/calculator).',
        visual: {
          caption:
            'Picture one outcome as a row of boxes to fill. Each box is a stage with its own number of choices, and the multiplication principle multiplies the boxes. A box that holds a group rather than a single item is filled with a combination. The examples above all fit this picture: a chair box and a two-member box, six plate boxes, five seating units plus the couple order, and one bulb box counted from its opposite.',
        },
        pitfalls: [
          {
            title: 'Order where there is none',
            wrong: 'committee of $3$ from $8$: $8 \\cdot 7 \\cdot 6 = 336$',
            right: 'members have no roles: $\\binom{8}{3} = 56$',
          },
          {
            title: 'Forgetting the order inside a block',
            wrong: 'couple together: $5! = 120$',
            right: 'the couple can swap places: $2 \\cdot 5! = 240$',
          },
          {
            title: 'Counting "at least one" by fixing one',
            wrong: 'at least one defective: $3 \\cdot \\binom{11}{3} = 495$',
            right: 'that counts sets with two or three defectives several times; use $495 - 126 = 369$',
          },
        ],
        related: ['combinations', 'permutations', 'which-counting-formula'],
        builtOn: [
          { label: 'Multiplication rule', url: ruleUrl('cb.multiplication-rule') },
          { label: 'Combination', url: ruleUrl('cb.combination') },
          { label: 'Complementary counting', url: ruleUrl('cb.complementary-counting') },
          { label: 'Putting the principles together (lesson)', url: ruleUrl('lesson.cb.counting-principles.6') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Counting rules', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Arrangements, selections, expansions and overlaps', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a formula', blurb: 'Strategy' },
    { id: 'applied', label: 'Word problems', blurb: 'committees, codes, seating, at least one' },
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
    title: 'Other methods',
    links: [
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/probability/methods', label: 'Probability methods' },
      { url: '/probability/distributions/methods', label: 'Distribution methods' },
    ],
  },
};

export default combinatoricsMethods;
