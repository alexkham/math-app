// set-theory.methods.js (set theory)
// Single data source for /set-theory/methods (hub) and
// /set-theory/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/set-theory/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/set-theory/methods';

const setTheoryMethods = {
  hubPath: HUB,
  hubLabel: 'set theory methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'union',
      name: 'How to find the union of two sets',
      subtitle: 'Union',
      glyph: 'A ∪ B',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question asks for the elements in one set **or** the other, or both: $A \\cup B$, "in at least one of the sets", "everyone on either team".',
      formula: 'A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}',
      fields: {
        steps: [
          '1. Write down every element of $A$.',
          '2. Add each element of $B$ that is not listed yet; write every element only once.',
        ],
        worked_example: '$\\{1, 3, 5\\} \\cup \\{3, 4\\} = \\{1, 3, 4, 5\\}$',
      },
      links: [
        { url: ruleUrl('lesson.st.operations.1'), label: 'Union (lesson)' },
        { url: ruleUrl('st.commutative-law-union'), label: 'Commutative law of union' },
      ],
    },
    {
      id: 'intersection',
      name: 'How to find the intersection of two sets',
      subtitle: 'Intersection',
      glyph: 'A ∩ B',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question asks for the elements in **both** sets: $A \\cap B$, "common to", "in $A$ and in $B$". If nothing is shared, the answer is $\\emptyset$.',
      formula: 'A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}',
      fields: {
        steps: [
          '1. Go through the elements of the smaller set.',
          '2. Keep each one that is also in the other set; if none is kept, write $\\emptyset$.',
        ],
        worked_example: '$\\{2, 4, 6, 8\\} \\cap \\{4, 5, 6\\} = \\{4, 6\\}$',
      },
      links: [
        { url: ruleUrl('lesson.st.operations.2'), label: 'Intersection (lesson)' },
        { url: ruleUrl('st.commutative-law-intersection'), label: 'Commutative law of intersection' },
      ],
    },
    {
      id: 'difference',
      name: 'How to find the difference of two sets',
      subtitle: 'Set difference',
      glyph: 'A ∖ B',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question asks for the elements of one set that are **not** in another: $A \\setminus B$ (also written $A - B$), "in $A$ but not in $B$". Order matters.',
      formula: 'A \\setminus B = \\{x : x \\in A \\text{ and } x \\notin B\\} = A \\cap B^c',
      fields: {
        steps: [
          '1. Go through the elements of the first set $A$.',
          '2. Cross out each one that is also in $B$; the rest is $A \\setminus B$. Elements of $B$ outside $A$ play no part.',
        ],
        worked_example: '$\\{1, 2, 3, 4\\} \\setminus \\{2, 4, 6\\} = \\{1, 3\\}$',
      },
      links: [
        { url: ruleUrl('lesson.st.operations.4'), label: 'Set difference (lesson)' },
        { url: ruleUrl('st.difference-as-intersection-with-complement'), label: 'Difference as intersection with complement' },
      ],
    },
    {
      id: 'complement',
      name: 'How to find the complement of a set',
      subtitle: 'Complement',
      glyph: 'Aᶜ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question asks for everything **not** in a set, relative to a universal set $U$: $A^c$, "not in $A$", "outside the circle". Without a stated $U$ the complement is not defined.',
      formula: 'A^c = \\{x \\in U : x \\notin A\\} = U \\setminus A',
      fields: {
        steps: [
          '1. Write down the universal set $U$.',
          '2. Cross out every element of $A$; what remains is $A^c$.',
        ],
        worked_example: '$U = \\{1, \\ldots, 8\\}$, $A = \\{2, 3, 5, 7\\}$: $A^c = \\{1, 4, 6, 8\\}$',
      },
      links: [
        { url: ruleUrl('lesson.st.operations.3'), label: 'Complement (lesson)' },
        { url: ruleUrl('st.double-complement-law'), label: 'Double complement law' },
      ],
    },
    {
      id: 'symmetric-difference',
      name: 'How to find the symmetric difference of two sets',
      subtitle: 'Symmetric difference',
      glyph: 'A △ B',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The question asks for the elements in **exactly one** of two sets: $A \\triangle B$, "in $A$ or in $B$ but not in both".',
      formula: 'A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)',
      fields: {
        steps: [
          '1. Find the union $A \\cup B$ and the intersection $A \\cap B$.',
          '2. Remove the shared elements from the union.',
        ],
        worked_example: '$\\{1, 2, 3, 4\\} \\triangle \\{3, 4, 5\\} = \\{1, 2, 5\\}$',
      },
      links: [
        { url: ruleUrl('lesson.st.operations.5'), label: 'Symmetric difference (lesson)' },
        { url: ruleUrl('st.symmetric-difference-union-minus-intersection'), label: 'Symmetric difference as union minus intersection' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'venn-two-sets',
      slug: 'venn-two-sets',
      name: 'How to fill a two-set Venn diagram',
      description: 'Place elements or counts in the four regions of a two-set Venn diagram: the overlap first, then each set alone, then the outside.',
      uses: ['intersection', 'difference', 'complement'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Fill a Two-Set Venn Diagram (Regions and Counts) | Learn Math Class',
        description: 'Fill a two-set Venn diagram step by step: overlap first, then A only, B only and the outside region. Worked examples with elements and counts, plus mistakes.',
        keywords: ['two set venn diagram', 'how to fill a venn diagram', 'venn diagram regions', 'venn diagram with numbers', 'A only B only neither'],
      },
      page: {
        h1: 'How to Fill a Two-Set Venn Diagram',
        lead:
          'Two overlapping circles inside a rectangle cut the universal set into four regions, and every element sits in exactly one of them. Fill the overlap first, because both circles contain it, then each circle alone, then the outside.',
        recognize:
          'You have two sets inside a universal set $U$, given as lists of elements or as counts, and the question asks about a region: "in both", "in $A$ only", "in neither". Typical forms: two lists to place, the sizes $|A|$, $|B|$ and $|A \\cap B|$, or region counts with one missing. Test: every element answers two yes or no questions, in $A$? in $B$?, and the two answers pick its region.',
        recognizeNote: `The four regions of a two-set diagram are defined in the ${link('lesson.st.venn-diagrams.2', 'two-set Venn diagrams lesson')}.`,
        methods: [
          {
            name: 'Overlap first',
            tag: 'usual',
            preferred: true,
            formula: '|A \\setminus B| = |A| - |A \\cap B|',
            body: 'Write the overlap in the lens, then subtract it from each circle total to get the part of each circle outside the lens.',
          },
          {
            name: 'Element by element',
            tag: 'lists',
            formula: 'x \\in A? \\quad x \\in B?',
            body: 'For listed sets, ask the two membership questions for each element of $U$ and write it in the region the answers choose.',
          },
        ],
        steps: {
          traceLabel: 'On $U = \\{1, 2, \\ldots, 10\\}$, $A$ = even numbers, $B$ = multiples of $3$',
          items: [
            {
              title: 'Fill the overlap.',
              body: 'List the elements that are in both sets. They go in the lens where the circles meet.',
              state: '$A = \\{2, 4, 6, 8, 10\\}$, $B = \\{3, 6, 9\\}$, $A \\cap B = \\{6\\}$',
              atomic: 'intersection',
            },
            {
              title: 'Fill the part of A outside the overlap.',
              body: 'Remove the overlap from $A$.',
              state: '$A \\setminus B = \\{2, 4, 8, 10\\}$',
              atomic: 'difference',
            },
            {
              title: 'Fill the part of B outside the overlap.',
              body: 'Remove the overlap from $B$.',
              state: '$B \\setminus A = \\{3, 9\\}$',
              atomic: 'difference',
            },
            {
              title: 'Fill the outside and check the total.',
              body: 'What is left of $U$ lies in neither circle. The four regions must add up to $|U|$.',
              state: '$(A \\cup B)^c = \\{1, 5, 7\\}$; $1 + 4 + 2 + 3 = 10$',
              atomic: 'complement',
            },
          ],
        },
        examples: [
          {
            title: 'two listed sets',
            badge: 'elements',
            lines: [
              { math: '$U = \\{1, \\ldots, 12\\}$, $A$ = divisors of $12$, $B$ = odd numbers', why: 'list both sets first' },
              { math: '$A = \\{1, 2, 3, 4, 6, 12\\}$, $B = \\{1, 3, 5, 7, 9, 11\\}$', why: 'write out the members' },
              { math: 'both: $\\{1, 3\\}$; $A$ only: $\\{2, 4, 6, 12\\}$', why: 'overlap, then A without it' },
              { math: '$B$ only: $\\{5, 7, 9, 11\\}$; neither: $\\{8, 10\\}$', why: 'regions add to $12$', answer: true },
            ],
          },
          {
            title: 'counts from the totals',
            badge: 'counts',
            lines: [
              { math: '$|U| = 30$, $|A| = 17$, $|B| = 12$, $|A \\cap B| = 5$', why: 'the overlap goes in the lens' },
              { math: '$A$ only: $17 - 5 = 12$; $B$ only: $12 - 5 = 7$', why: 'subtract the overlap' },
              { math: 'neither: $30 - (12 + 5 + 7) = 6$', why: 'the rest of the rectangle', answer: true },
            ],
          },
          {
            title: 'the overlap is missing',
            badge: 'reverse',
            lines: [
              { math: '$|U| = 25$; $A$ only $9$, $B$ only $6$, neither $4$', why: 'three regions known' },
              { math: '$|A \\cap B| = 25 - 9 - 6 - 4 = 6$', why: 'the regions add up to $|U|$' },
              { math: '$|A| = 9 + 6 = 15$, $|B| = 6 + 6 = 12$', why: 'circle = only part + overlap', answer: true },
            ],
          },
        ],
        examplesAfter: 'Place elements in the four regions with the [two-set Venn diagram tool](!/set-theory/visual-tools/two-sets-basic-venn).',
        visual: {
          caption:
            'Each element answers two questions, in $A$ or not and in $B$ or not, and the four possible answer pairs are the four regions. That is why the regions never overlap and together fill the rectangle. A circle total such as $|A|$ covers two regions, the part of $A$ alone and the lens, so the lens is filled first and subtracted from each circle; otherwise it is counted twice.',
        },
        pitfalls: [
          {
            title: 'Writing the circle total in the "only" region',
            wrong: '$|A| = 17$ written in the $A$-only part',
            right: '$A$ only is $17 - 5 = 12$; the $5$ in the lens belong to $A$ too',
          },
          {
            title: 'Forgetting the outside region',
            wrong: 'all $30$ elements are inside the circles',
            right: '$12 + 5 + 7 = 24$ are inside; $6$ lie outside both',
          },
          {
            title: 'Placing a shared element twice',
            wrong: '$6$ written in $A$ only and in $B$ only',
            right: '$6$ is in both sets, so it goes once, in the lens',
          },
        ],
        related: ['venn-three-sets', 'union-cardinality', 'survey-problems'],
        builtOn: [
          { label: 'Two-set Venn diagrams (lesson)', url: ruleUrl('lesson.st.venn-diagrams.2') },
          { label: 'Inclusion-exclusion (two sets)', url: ruleUrl('st.inclusion-exclusion-two-sets') },
          { label: 'Difference as intersection with complement', url: ruleUrl('st.difference-as-intersection-with-complement') },
        ],
      },
    },
    {
      id: 'venn-three-sets',
      slug: 'venn-three-sets',
      name: 'How to fill a three-set Venn diagram',
      description: 'Fill the eight regions of a three-set Venn diagram from the center out: all three, the pair-only regions, each set alone, then the outside.',
      uses: ['intersection', 'difference', 'complement'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Fill a Three-Set Venn Diagram (Center Out) | Learn Math Class',
        description: 'Fill a three-set Venn diagram from the center out: triple overlap, pair-only regions, single regions, outside. Worked examples with counts and a missing center.',
        keywords: ['three set venn diagram', 'how to fill a 3 circle venn diagram', 'venn diagram regions three sets', 'venn diagram center out', 'three set venn diagram with numbers'],
      },
      page: {
        h1: 'How to Fill a Three-Set Venn Diagram',
        lead:
          'Three circles cut the universal set into eight regions. Every overlap count includes the center, so start there: write the triple overlap, subtract it from each pairwise overlap, subtract those from each circle, and put the rest outside.',
        recognize:
          'Three sets $A$, $B$, $C$ in a universal set, with the sizes $|A|$, $|B|$, $|C|$, the pairwise overlaps $|A \\cap B|$, $|A \\cap C|$, $|B \\cap C|$ and the triple overlap $|A \\cap B \\cap C|$, or three lists of elements. The question names a region: "only $A$", "$A$ and $B$ but not $C$", "none". Test: each element answers three yes or no questions, so there are $2^3 = 8$ regions.',
        recognizeNote: `The eight regions are listed in the ${link('lesson.st.venn-diagrams.3', 'three-set Venn diagrams lesson')}.`,
        methods: [
          {
            name: 'Center out',
            tag: 'usual',
            preferred: true,
            formula: '|A \\cap B \\cap C^c| = |A \\cap B| - |A \\cap B \\cap C|',
            body: 'Every overlap count contains the center, so subtract the inner regions from each outer total, one ring at a time.',
          },
          {
            name: 'Element by element',
            tag: 'lists',
            formula: 'x \\in A? \\quad x \\in B? \\quad x \\in C?',
            body: 'For listed sets, the three answers for each element pick one of the eight regions.',
          },
        ],
        steps: {
          traceLabel: 'On $|U| = 60$, $|A| = 30$, $|B| = 25$, $|C| = 20$, $|A \\cap B| = 10$, $|A \\cap C| = 8$, $|B \\cap C| = 6$, $|A \\cap B \\cap C| = 3$',
          items: [
            {
              title: 'Write the triple overlap in the center.',
              body: 'It is the only region that lies in all three circles.',
              state: 'center: $3$',
              atomic: 'intersection',
            },
            {
              title: 'Fill the three pair-only regions.',
              body: 'Subtract the center from each pairwise overlap.',
              state: '$A \\cap B$ only: $10 - 3 = 7$; $A \\cap C$ only: $8 - 3 = 5$; $B \\cap C$ only: $6 - 3 = 3$',
              atomic: 'difference',
            },
            {
              title: 'Fill the three single regions.',
              body: 'From each circle total, subtract its two pair-only regions and the center.',
              state: '$A$ only: $30 - 7 - 5 - 3 = 15$; $B$ only: $12$; $C$ only: $9$',
            },
            {
              title: 'Fill the outside.',
              body: 'Add the seven inner regions and subtract the sum from $|U|$.',
              state: '$3 + 7 + 5 + 3 + 15 + 12 + 9 = 54$; outside: $60 - 54 = 6$',
              atomic: 'complement',
            },
            {
              title: 'Check with inclusion-exclusion.',
              body: `The inner total must equal the ${link('st.inclusion-exclusion-three-sets', 'three-set inclusion-exclusion formula')}, and no region may be negative.`,
              state: '$75 - 24 + 3 = 54$',
            },
          ],
        },
        examples: [
          {
            title: 'three listed sets',
            badge: 'elements',
            lines: [
              { math: '$U = \\{1, \\ldots, 10\\}$, $A = \\{1, \\ldots, 6\\}$, $B = \\{4, \\ldots, 8\\}$, $C$ = even numbers', why: 'three membership questions' },
              { math: 'center $\\{4, 6\\}$; pair-only: $\\{5\\}$, $\\{2\\}$, $\\{8\\}$', why: 'center first, then pairs AB, AC, BC' },
              { math: '$A$ only $\\{1, 3\\}$, $B$ only $\\{7\\}$, $C$ only $\\{10\\}$, none $\\{9\\}$', why: 'regions add to $10$', answer: true },
            ],
          },
          {
            title: 'counts with the center given',
            badge: 'counts',
            lines: [
              { math: '$|U| = 50$; circles $22$, $19$, $16$; pairs $7$, $6$, $5$; center $2$', why: 'pairs in the order AB, AC, BC' },
              { math: 'pair-only: $5$, $4$, $3$', why: 'subtract the center' },
              { math: 'single-only: $22 - 5 - 4 - 2 = 11$, $9$, $7$', why: 'subtract pairs and center' },
              { math: 'none: $50 - 41 = 9$', why: 'the inner regions add to $41$', answer: true },
            ],
          },
          {
            title: 'the center is missing',
            badge: 'unknown center',
            lines: [
              { math: '$|U| = 40$, none $5$; circles $20$, $18$, $15$; pairs $8$, $6$, $7$', why: 'center not given' },
              { math: '$40 - 5 = 35$ in at least one circle', why: 'remove the outside' },
              { math: '$35 = 53 - 21 + x$', why: 'singles minus pairs plus center' },
              { math: '$x = 3$ in all three', why: 'then fill the rest center out', answer: true },
            ],
          },
        ],
        examplesAfter: 'Fill the eight regions yourself in the [three-set Venn diagram tool](!/set-theory/visual-tools/three-sets-basic-venn).',
        visual: {
          caption:
            'Each circle total is spread over four regions: its single region, two pair-only regions and the center. Each pairwise overlap covers two regions: its pair-only region and the center. So the center is the only number you can write directly, and every other region is a given total minus regions already filled. Working from the center outward means every subtraction uses numbers you already have.',
        },
        pitfalls: [
          {
            title: 'Starting from the outside',
            wrong: '$A$ only $= 30 - 10 - 8 = 12$',
            right: 'the center sits in both overlaps and was removed twice: $30 - 7 - 5 - 3 = 15$',
          },
          {
            title: 'Writing a pair total in the pair-only region',
            wrong: '$A \\cap B$ only $= 10$',
            right: '$10$ includes the center: $10 - 3 = 7$',
          },
          {
            title: 'Skipping the outside region',
            wrong: 'the regions add to $54$, so $|U| = 54$',
            right: 'the other $60 - 54 = 6$ lie outside all three circles',
          },
          {
            title: 'Keeping a negative region',
            wrong: 'a region of $-2$ is written in the diagram',
            right: 'a negative count means a misread number or an arithmetic slip; recheck the givens',
          },
        ],
        related: ['venn-two-sets', 'union-cardinality', 'survey-problems'],
        builtOn: [
          { label: 'Three-set Venn diagrams (lesson)', url: ruleUrl('lesson.st.venn-diagrams.3') },
          { label: 'Inclusion-exclusion (three sets)', url: ruleUrl('st.inclusion-exclusion-three-sets') },
          { label: 'Complement law (union)', url: ruleUrl('st.complement-law-union') },
        ],
      },
    },
    {
      id: 'prove-set-identities',
      slug: 'prove-set-identities',
      name: 'How to prove a set identity',
      description: 'Prove that two set expressions are equal: show each side is a subset of the other, or rewrite one side with the laws of set algebra.',
      uses: ['set equality criterion', 'De Morgan laws', 'membership table'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Prove a Set Identity (Element Method) | Learn Math Class',
        description: 'Prove set identities step by step: show both inclusions with an arbitrary element, or rewrite with set laws or a membership table. Worked examples and mistakes.',
        keywords: ['how to prove set identities', 'prove two sets are equal', 'element method proof sets', 'set identity proof examples', 'membership table sets'],
      },
      page: {
        h1: 'How to Prove a Set Identity',
        lead:
          'Two sets are equal when each is a subset of the other. To prove an identity, take an arbitrary element of the left side and show it lies in the right side, then do the same in reverse.',
        recognize:
          'The task says **prove**, **show** or **verify** that two set expressions are equal: $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$, $(A \\cup B)^c = A^c \\cap B^c$, $A \\setminus (A \\setminus B) = A \\cap B$. Test: the claim is meant to hold for all sets $A$, $B$, $C$, so one example is not enough; you need an argument for an arbitrary element.',
        recognizeNote: `Equal sets and the two-inclusion test are covered in the ${link('lesson.st.relationships.1', 'equal sets lesson')}.`,
        methods: [
          {
            name: 'Two inclusions',
            tag: 'usual',
            preferred: true,
            formula: 'A = B \\iff A \\subseteq B \\text{ and } B \\subseteq A',
            body: `The ${link('st.set-equality-criterion', 'set equality criterion')}: follow an arbitrary element through both sides.`,
          },
          {
            name: 'Laws of set algebra',
            tag: 'algebra',
            formula: '(A \\cup B)^c = A^c \\cap B^c',
            body: `Rewrite one side into the other with named laws such as ${link('st.de-morgan-law-union', "De Morgan's law")} and the distributive laws.`,
          },
          {
            name: 'Membership table',
            tag: 'table',
            formula: '2^n \\text{ rows for } n \\text{ sets}',
            body: 'List every in or out pattern of the sets, one row per Venn region, and check that both sides agree in every row.',
          },
        ],
        steps: {
          traceLabel: 'On $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$',
          items: [
            {
              title: 'Translate each side into membership conditions.',
              body: 'Use the definition of each operation, one at a time.',
              state: 'left: $x \\in A$, $x \\notin B \\cup C$; right: $x \\in A \\setminus B$, $x \\in A \\setminus C$',
            },
            {
              title: 'Show that the left side is a subset of the right side.',
              body: 'Take any $x$ on the left. $x \\notin B \\cup C$ means $x \\notin B$ and $x \\notin C$, so $x \\in A \\setminus B$ and $x \\in A \\setminus C$.',
              state: '$A \\setminus (B \\cup C) \\subseteq (A \\setminus B) \\cap (A \\setminus C)$',
            },
            {
              title: 'Show that the right side is a subset of the left side.',
              body: 'Take any $x$ on the right. Then $x \\in A$, $x \\notin B$ and $x \\notin C$, so $x$ is in neither $B$ nor $C$: $x \\notin B \\cup C$.',
              state: '$(A \\setminus B) \\cap (A \\setminus C) \\subseteq A \\setminus (B \\cup C)$',
            },
            {
              title: 'Conclude that the sets are equal.',
              body: 'Two inclusions give equality. Before writing a proof, test the claim on small sets: a single failure disproves it.',
              state: 'the identity holds',
            },
          ],
        },
        examples: [
          {
            title: 'with set laws',
            badge: 'algebra',
            lines: [
              { math: '$(A \\cap B) \\cup (A \\cap B^c)$', why: 'start from the longer side' },
              { math: '$= A \\cap (B \\cup B^c)$', why: 'distributive law, read backward' },
              { math: '$= A \\cap U$', why: 'complement law' },
              { math: '$= A$', why: 'identity law', answer: true },
            ],
          },
          {
            title: 'with a membership table',
            badge: 'table',
            lines: [
              { math: 'claim: $A \\setminus (A \\setminus B) = A \\cap B$; rows ($x \\in A$, $x \\in B$): $11$, $10$, $01$, $00$', why: 'one row per region' },
              { math: 'left side: $1$, $0$, $0$, $0$', why: 'in $A$ but not in $A \\setminus B$' },
              { math: 'right side: $1$, $0$, $0$, $0$', why: 'in both $A$ and $B$' },
              { math: 'the columns agree in all $4$ rows', why: 'so the sets are equal', answer: true },
            ],
          },
          {
            title: 'with two inclusions',
            badge: 'elements',
            lines: [
              { math: 'claim: $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$', why: 'take $x$ on the left' },
              { math: '$x \\in A$ and $x \\notin B \\cap C$', why: 'definition of difference' },
              { math: '$x \\in A$ and ($x \\notin B$ or $x \\notin C$)', why: 'not in both means missing one' },
              { math: '$x \\in A \\setminus B$ or $x \\in A \\setminus C$; every step reverses', why: 'both inclusions hold, so equal', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare both sides region by region in the [two-set laws Venn tool](!/set-theory/visual-tools/two-sets-laws-venn) or the [three-set laws Venn tool](!/set-theory/visual-tools/three-sets-laws-venn), or build the rows in the [Venn truth table tool](!/set-theory/visual-tools/venn-truth-table).',
        visual: {
          caption:
            'With $n$ sets, every element has one of $2^n$ in or out patterns, and each pattern is one region of the Venn diagram. A set expression is a choice of regions. Two expressions are equal exactly when they choose the same regions: a membership table checks this row by row, and an element argument proves it without drawing. A Venn sketch shows why an identity is true, but it is a check, not a proof.',
        },
        pitfalls: [
          {
            title: 'Taking one example as a proof',
            wrong: 'it works for $A = \\{1, 2\\}$, $B = \\{2\\}$, so it is true',
            right: 'an example can only disprove; prove it for an arbitrary element $x$',
          },
          {
            title: 'Proving only one inclusion',
            wrong: 'left $\\subseteq$ right, so left $=$ right',
            right: 'also show right $\\subseteq$ left',
          },
          {
            title: 'Moving a complement without switching the operation',
            wrong: '$(A \\cap B)^c = A^c \\cap B^c$',
            right: '$(A \\cap B)^c = A^c \\cup B^c$',
            note: 'With $U = \\{1, 2, 3, 4\\}$, $A = \\{1, 2\\}$, $B = \\{2, 3\\}$ the left side is $\\{1, 3, 4\\}$ but $A^c \\cap B^c = \\{4\\}$.',
          },
          {
            title: 'Reordering a difference',
            wrong: '$A \\setminus B = B \\setminus A$',
            right: 'with $A = \\{1, 2, 3\\}$, $B = \\{3, 4\\}$: $\\{1, 2\\} \\neq \\{4\\}$',
          },
        ],
        related: ['subset-check', 'venn-two-sets', 'venn-three-sets'],
        builtOn: [
          { label: 'Set equality criterion', url: ruleUrl('st.set-equality-criterion') },
          { label: "De Morgan's law (intersection)", url: ruleUrl('st.de-morgan-law-intersection') },
          { label: 'Distributive law (intersection over union)', url: ruleUrl('st.distributive-law-intersection-over-union') },
          { label: 'Verifying identities with Venn diagrams (lesson)', url: ruleUrl('lesson.st.venn-diagrams.5') },
        ],
      },
    },
    {
      id: 'power-set',
      slug: 'power-set',
      name: 'How to list the power set of a set',
      description: 'List every subset of a finite set, from the empty set to the set itself, and check the count against $2^n$.',
      uses: ['subsets', 'union', '2^n'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to List the Power Set of a Set | Learn Math Class',
        description: 'List a power set step by step: count the elements, expect 2^n subsets, start with the empty set and list by size or by doubling. Worked examples and mistakes.',
        keywords: ['how to find the power set', 'power set examples', 'list all subsets of a set', 'power set of a set with 3 elements', 'power set of empty set'],
      },
      page: {
        h1: 'How to List the Power Set of a Set',
        lead:
          'The power set $\\mathcal{P}(A)$ is the set of all subsets of $A$. List them in an order that cannot miss any: by size from the empty set up, or by doubling the list each time a new element is added. A set with $n$ elements has $2^n$ subsets, which checks the list.',
        recognize:
          'The question asks for $\\mathcal{P}(A)$, $2^A$, "all subsets of $A$", or whether something is an element of $\\mathcal{P}(A)$. $A$ is a small finite set, usually with $2$ to $4$ elements. Test: the answer is a set whose elements are themselves sets, so every entry needs its own braces.',
        recognizeNote: `The power set is defined in the ${link('lesson.st.subsets.5', 'power set lesson')}.`,
        methods: [
          {
            name: 'By size',
            tag: 'usual',
            preferred: true,
            formula: '\\emptyset;\\ \\text{singletons};\\ \\text{pairs};\\ \\ldots;\\ A',
            body: 'List the subsets with $0$ elements, then $1$, then $2$, up to $A$ itself.',
          },
          {
            name: 'Doubling',
            tag: 'build up',
            formula: '\\mathcal{P}(A \\cup \\{c\\}) = \\mathcal{P}(A) \\cup \\{S \\cup \\{c\\} : S \\in \\mathcal{P}(A)\\}',
            body: 'Keep the list for the elements so far, then add a copy with the new element $c$ put into each subset.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\{a, b, c\\}$',
          items: [
            {
              title: 'Count the elements.',
              body: 'A set with $n$ elements has $2^n$ subsets; this is the target count.',
              state: '$n = 3$, so $2^3 = 8$ subsets',
            },
            {
              title: 'Start with the empty set.',
              body: 'The empty set is a subset of every set.',
              state: '$\\emptyset$',
            },
            {
              title: 'List the subsets by size.',
              body: 'All singletons, then all pairs. Write each subset once; the order inside its braces does not matter.',
              state: '$\\{a\\}, \\{b\\}, \\{c\\}, \\{a, b\\}, \\{a, c\\}, \\{b, c\\}$',
            },
            {
              title: 'End with the set itself and check the count.',
              body: 'Every set is a subset of itself. Count the entries against $2^n$.',
              state: '$\\mathcal{P}(A) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a, b\\}, \\{a, c\\}, \\{b, c\\}, \\{a, b, c\\}\\}$',
            },
          ],
        },
        examples: [
          {
            title: 'two elements',
            badge: 'by size',
            lines: [
              { math: '$A = \\{x, y\\}$: $2^2 = 4$ subsets', why: 'target count' },
              { math: '$\\mathcal{P}(A) = \\{\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}\\}$', why: 'sizes $0$, $1$, $1$, $2$', answer: true },
            ],
          },
          {
            title: 'three elements by doubling',
            badge: 'doubling',
            lines: [
              { math: '$\\mathcal{P}(\\{1, 2\\}) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$', why: 'list for the first two' },
              { math: 'add $3$ to each: $\\{3\\}, \\{1, 3\\}, \\{2, 3\\}, \\{1, 2, 3\\}$', why: 'copy with the new element' },
              { math: '$4 + 4 = 8$ subsets of $\\{1, 2, 3\\}$', why: 'old list plus new list', answer: true },
            ],
          },
          {
            title: 'a set that contains the empty set',
            badge: 'tricky',
            lines: [
              { math: '$A = \\{\\emptyset, 1\\}$: $2$ elements, $4$ subsets', why: '$\\emptyset$ counts as an element here' },
              { math: '$\\emptyset$, $\\{\\emptyset\\}$, $\\{1\\}$, $\\{\\emptyset, 1\\}$', why: 'by size' },
              { math: '$\\mathcal{P}(A) = \\{\\emptyset, \\{\\emptyset\\}, \\{1\\}, \\{\\emptyset, 1\\}\\}$', why: '$\\emptyset$ and $\\{\\emptyset\\}$ are different', answer: true },
            ],
          },
        ],
        examplesAfter: 'Build power sets element by element in the [power set tool](!/set-theory/visual-tools/power-set).',
        visual: {
          caption:
            'Each element of $A$ is a switch: in the subset or out of it. A subset is one setting of all the switches, so $n$ switches give $2 \\cdot 2 \\cdots 2 = 2^n$ subsets. Doubling follows the same picture: one more switch keeps every old setting with the new switch off and adds a copy of each with the switch on.',
        },
        pitfalls: [
          {
            title: 'Leaving out the empty set or the set itself',
            wrong: '$\\mathcal{P}(\\{x, y\\}) = \\{\\{x\\}, \\{y\\}\\}$',
            right: 'four subsets: $\\{\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}\\}$',
          },
          {
            title: 'Dropping the inner braces',
            wrong: '$\\mathcal{P}(\\{1, 2\\}) = \\{\\emptyset, 1, 2, \\{1, 2\\}\\}$',
            right: '$1$ is an element, $\\{1\\}$ is a subset: $\\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$',
          },
          {
            title: 'Taking the power set of the empty set to be empty',
            wrong: '$\\mathcal{P}(\\emptyset) = \\emptyset$',
            right: '$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$, with $1$ element',
          },
          {
            title: 'Listing the same subset twice',
            wrong: '$\\{1, 2\\}$ and $\\{2, 1\\}$ as two entries',
            right: 'order inside braces does not matter; they are one subset',
          },
        ],
        related: ['count-subsets', 'subset-check', 'cartesian-product'],
        builtOn: [
          { label: 'Cardinality of power set', url: ruleUrl('st.cardinality-of-power-set') },
          { label: 'Number of subsets (lesson)', url: ruleUrl('lesson.st.subsets.4') },
          { label: 'Power set (lesson)', url: ruleUrl('lesson.st.subsets.5') },
        ],
      },
    },
    {
      id: 'count-subsets',
      slug: 'count-subsets',
      name: 'How to count subsets',
      description: 'Count the subsets of a finite set: $2^n$ in all, $2^n - 1$ proper, $\\binom{n}{k}$ of size $k$, and fewer choices when elements are forced in or out.',
      uses: ['2^n', 'binomial coefficient', 'complement'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Count Subsets (All, Proper, Size k) | Learn Math Class',
        description: 'Count subsets of a finite set: 2^n in all, 2^n - 1 proper, n choose k of a given size, and rules for elements that must be in or out. Examples and mistakes.',
        keywords: ['how many subsets does a set have', 'number of subsets formula', 'number of proper subsets', 'subsets of size k', 'count subsets with conditions'],
      },
      page: {
        h1: 'How to Count Subsets',
        lead:
          'Each element of an $n$-element set is either in a subset or out of it, so there are $2^n$ subsets in all. Conditions change only the number of free choices: a fixed size uses $\\binom{n}{k}$, a forced element removes one choice, and "at least one" is counted from its opposite.',
        recognize:
          'The question asks **how many** subsets, not which: "how many subsets does $\\{a, b, c, d, e\\}$ have", "proper subsets", "subsets with $3$ elements", "subsets that contain $1$ but not $2$", "subsets with at least one even number". Test: you need a number, so do not list unless $n$ is tiny.',
        recognizeNote: `Subset counting is explained in the ${link('lesson.st.subsets.4', 'number of subsets lesson')}.`,
        methods: [
          {
            name: 'All subsets',
            tag: 'usual',
            preferred: true,
            formula: '|\\mathcal{P}(A)| = 2^{n}',
            body: `The ${link('st.cardinality-of-power-set', 'size of the power set')}; for proper subsets use the ${link('st.number-of-proper-subsets', 'proper subset count')} $2^n - 1$.`,
          },
          {
            name: 'Fixed size',
            tag: 'size k',
            formula: '\\binom{n}{k}',
            body: 'Subsets with exactly $k$ elements are combinations; the [combinations method](!/combinatorics/methods/combinations) counts them.',
          },
          {
            name: 'Forced elements',
            tag: 'conditions',
            formula: '2^{\\,n - m}',
            body: 'If $m$ elements must be in or must be out, only the other $n - m$ elements are free choices.',
          },
        ],
        steps: {
          traceLabel: 'On subsets of $\\{1, 2, 3, 4, 5, 6\\}$ that contain $1$ but not $2$',
          items: [
            {
              title: 'Count the elements.',
              body: 'Every element of the set is one in or out choice.',
              state: '$n = 6$',
            },
            {
              title: 'Fix the forced elements.',
              body: 'An element that must be in, or must be out, has no choice left.',
              state: '$1$ in, $2$ out: $m = 2$',
            },
            {
              title: 'Give each free element two choices.',
              body: 'In or out, independently of the others.',
              state: '$2^{6 - 2} = 2^4$',
            },
            {
              title: 'Compute and adjust for the wording.',
              body: 'Subtract $1$ for "proper" (the set itself) or for "nonempty" (the empty set), if the question says so.',
              state: '$16$ subsets',
            },
          ],
        },
        examples: [
          {
            title: 'all and proper subsets',
            badge: 'all, proper',
            lines: [
              { math: '$\\{a, b, c, d, e\\}$: $n = 5$', why: 'count the elements' },
              { math: '$2^5 = 32$ subsets', why: 'two choices per element' },
              { math: '$32 - 1 = 31$ proper subsets', why: 'leave out the set itself', answer: true },
            ],
          },
          {
            title: 'a fixed size',
            badge: 'size k',
            lines: [
              { math: 'subsets of size $3$ from $6$ elements', why: 'order inside a set never matters' },
              { math: '$\\binom{6}{3} = \\dfrac{6 \\cdot 5 \\cdot 4}{3!}$', why: 'combinations' },
              { math: '$20$ subsets', why: 'simplify', answer: true },
            ],
          },
          {
            title: 'at least one even number',
            badge: 'complement',
            lines: [
              { math: 'subsets of $\\{1, \\ldots, 8\\}$: $2^8 = 256$', why: 'all subsets' },
              { math: 'no even number: subsets of $\\{1, 3, 5, 7\\}$, $2^4 = 16$', why: 'count the opposite' },
              { math: '$256 - 16 = 240$', why: 'subtract', answer: true },
            ],
          },
        ],
        examplesAfter: 'The "count the opposite" step is the [complementary counting method](!/combinatorics/methods/complementary-counting). See all subsets of a small set at once in the [power set tool](!/set-theory/visual-tools/power-set).',
        visual: {
          caption: `Line the elements up and give each a switch, in or out. Every subset is one row of switch settings, and there are $2^n$ rows. Fixing a switch halves the count, which is why each forced element turns $2^n$ into $2^{n-1}$. Grouping the rows by how many switches are on gives the ${link('cb.binomial-row-sum', 'binomial row sum')} $\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n} = 2^n$.`,
        },
        pitfalls: [
          {
            title: 'Removing two subsets for "proper"',
            wrong: 'proper subsets of a $5$-element set: $2^5 - 2 = 30$',
            right: 'only the set itself is left out: $2^5 - 1 = 31$',
            note: 'The empty set is a proper subset of every nonempty set.',
          },
          {
            title: 'Squaring instead of using powers of 2',
            wrong: 'subsets of a $5$-element set: $5^2 = 25$',
            right: '$2^5 = 32$',
          },
          {
            title: 'Using a power of 2 for a fixed size',
            wrong: 'subsets of size $2$ from $5$ elements: $2^2 = 4$',
            right: '$\\binom{5}{2} = 10$',
          },
        ],
        related: ['power-set', 'subset-check', 'union-cardinality'],
        builtOn: [
          { label: 'Cardinality of power set', url: ruleUrl('st.cardinality-of-power-set') },
          { label: 'Number of proper subsets', url: ruleUrl('st.number-of-proper-subsets') },
          { label: 'Binomial coefficient', url: ruleUrl('cb.binomial-coefficient') },
        ],
      },
    },
    {
      id: 'union-cardinality',
      slug: 'union-cardinality',
      name: 'How to find the size of a union of sets',
      description: 'Find $|A \\cup B|$ or $|A \\cup B \\cup C|$ from the set sizes and their overlaps with inclusion-exclusion; add directly when the sets are disjoint.',
      uses: ['intersection', 'inclusion-exclusion', 'cardinality'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Size of a Union of Sets (Inclusion-Exclusion) | Learn Math Class',
        description: 'Find the size of a union of two or three sets: add the sizes, subtract the overlaps, add back the triple overlap. Worked examples with listed sets and mistakes.',
        keywords: ['size of union of sets', 'cardinality of union', 'inclusion exclusion sets', 'A union B formula', 'number of elements in A union B'],
      },
      page: {
        h1: 'How to Find the Size of a Union of Sets',
        lead:
          'Adding $|A|$ and $|B|$ counts every shared element twice, so subtract the size of the overlap once: $|A \\cup B| = |A| + |B| - |A \\cap B|$. For three sets, subtract the three pairwise overlaps and add back the triple overlap.',
        recognize:
          'The question asks for $|A \\cup B|$, $|A \\cup B \\cup C|$ or "how many elements are in at least one set", or it gives the union and asks for an overlap. You know, or can find, the sizes of the sets and of their intersections. Test: if the sets share no element, the size of the union is the plain sum.',
        recognizeNote: `Inclusion-exclusion for finite sets is stated in the ${link('lesson.st.cardinality.2', 'finite sets lesson')}.`,
        methods: [
          {
            name: 'Two sets',
            tag: 'usual',
            preferred: true,
            formula: '|A \\cup B| = |A| + |B| - |A \\cap B|',
            body: `The ${link('st.inclusion-exclusion-two-sets', 'two-set inclusion-exclusion formula')}.`,
          },
          {
            name: 'Three sets',
            tag: 'three sets',
            formula: '|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|',
            body: `The ${link('st.inclusion-exclusion-three-sets', 'three-set formula')}: singles plus, pairs minus, triple plus.`,
          },
          {
            name: 'Disjoint sets',
            tag: 'no overlap',
            formula: '|A \\cup B| = |A| + |B|',
            body: `When $A \\cap B = \\emptyset$, the ${link('st.cardinality-of-disjoint-union', 'disjoint union rule')} adds the sizes.`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\{1, 2, 3, 4, 5, 6\\}$, $B = \\{4, 5, 6, 7, 8\\}$',
          items: [
            {
              title: 'Find the size of each set.',
              body: 'Count the elements of each set once.',
              state: '$|A| = 6$, $|B| = 5$',
            },
            {
              title: 'Find the overlap.',
              body: 'List the shared elements. If there are none, the sets are disjoint and you just add.',
              state: '$A \\cap B = \\{4, 5, 6\\}$, $|A \\cap B| = 3$',
              atomic: 'intersection',
            },
            {
              title: 'Add the sizes and subtract the overlap once.',
              body: 'Each shared element was counted once with $A$ and once with $B$.',
              state: '$6 + 5 - 3 = 8$',
            },
            {
              title: 'Check against the union when it is small.',
              body: 'List the union directly; the two counts must match.',
              state: '$A \\cup B = \\{1, \\ldots, 8\\}$, $|A \\cup B| = 8$',
              atomic: 'union',
            },
          ],
        },
        examples: [
          {
            title: 'disjoint sets',
            badge: 'no overlap',
            lines: [
              { math: '$|A| = 7$, $|B| = 5$, $A \\cap B = \\emptyset$', why: 'nothing is shared' },
              { math: '$|A \\cup B| = 7 + 5 = 12$', why: 'a disjoint union adds', answer: true },
            ],
          },
          {
            title: 'find the overlap',
            badge: 'reverse',
            lines: [
              { math: '$|A \\cup B| = 20$, $|A| = 14$, $|B| = 11$', why: 'overlap unknown' },
              { math: '$20 = 14 + 11 - |A \\cap B|$', why: 'two-set formula' },
              { math: '$|A \\cap B| = 5$', why: 'solve', answer: true },
            ],
          },
          {
            title: 'three listed sets',
            badge: 'three sets',
            lines: [
              { math: '$A = \\{1, \\ldots, 5\\}$, $B = \\{4, 5, 6, 7\\}$, $C = \\{1, 5, 7, 8\\}$', why: 'sizes $5$, $4$, $4$' },
              { math: '$A \\cap B = \\{4, 5\\}$, $A \\cap C = \\{1, 5\\}$, $B \\cap C = \\{5, 7\\}$', why: 'three pairs, size $2$ each' },
              { math: '$A \\cap B \\cap C = \\{5\\}$', why: 'triple overlap' },
              { math: '$13 - 6 + 1 = 8$', why: 'union is $\\{1, \\ldots, 8\\}$', answer: true },
            ],
          },
        ],
        examplesAfter: 'For counting problems told as stories, the combinatorics hub has its own pages: [inclusion-exclusion for two sets](!/combinatorics/methods/inclusion-exclusion-two-sets) and [inclusion-exclusion for three sets](!/combinatorics/methods/inclusion-exclusion-three-sets). Watch the terms add and cancel in the [inclusion-exclusion tool](!/set-theory/visual-tools/inclusion-exclusion).',
        visual: {
          caption:
            'Think of each region of the Venn diagram as a pile of elements. $|A| + |B|$ picks up the lens pile twice, once with each circle, so one copy of $|A \\cap B|$ is taken off. With three circles, adding the circles counts each pair-only pile twice and the center pile three times; subtracting the three pairs leaves the center counted zero times, so the triple overlap is added back once.',
        },
        pitfalls: [
          {
            title: 'Adding overlapping sets',
            wrong: '$|A \\cup B| = 6 + 5 = 11$',
            right: '$4$, $5$ and $6$ were counted twice: $11 - 3 = 8$',
          },
          {
            title: 'Forgetting the triple overlap',
            wrong: '$|A \\cup B \\cup C| = 13 - 6 = 7$',
            right: 'the element $5$ was added three times and subtracted three times: $13 - 6 + 1 = 8$',
          },
          {
            title: 'Leaving out one of the sets',
            wrong: '$|A \\cup B| = |A| - |A \\cap B|$',
            right: 'that is $|A \\setminus B|$; the union also needs $|B|$: $|A| + |B| - |A \\cap B|$',
          },
        ],
        related: ['venn-two-sets', 'venn-three-sets', 'count-subsets'],
        builtOn: [
          { label: 'Inclusion-exclusion (two sets)', url: ruleUrl('st.inclusion-exclusion-two-sets') },
          { label: 'Inclusion-exclusion (three sets)', url: ruleUrl('st.inclusion-exclusion-three-sets') },
          { label: 'Cardinality of disjoint union', url: ruleUrl('st.cardinality-of-disjoint-union') },
          { label: 'Finite sets (lesson)', url: ruleUrl('lesson.st.cardinality.2') },
        ],
      },
    },
    {
      id: 'cartesian-product',
      slug: 'cartesian-product',
      name: 'How to find a Cartesian product',
      description: 'List $A \\times B$ as ordered pairs, first coordinate from $A$ and second from $B$, and count it as $|A| \\cdot |B|$.',
      uses: ['ordered pairs', 'multiplication principle'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Cartesian Product of Sets | Learn Math Class',
        description: 'Find the Cartesian product of two sets: fix the order, pair each element of A with every element of B, list the ordered pairs, count |A| times |B|. Examples.',
        keywords: ['cartesian product of sets', 'how to find A x B', 'cartesian product examples', 'ordered pairs of sets', 'size of cartesian product'],
      },
      page: {
        h1: 'How to Find a Cartesian Product',
        lead:
          'The Cartesian product $A \\times B$ is the set of all ordered pairs $(a, b)$ with $a$ from $A$ and $b$ from $B$. Pair each element of $A$ with every element of $B$; there are $|A| \\cdot |B|$ pairs.',
        recognize:
          'The question asks for $A \\times B$, $A \\times A$ or $A^2$, "all ordered pairs", the points of a grid, or the outcomes of two stages such as a coin and a die. Test: the result is a set of pairs in which order matters, so $(1, x)$ and $(x, 1)$ are different.',
        recognizeNote: `The size rule $|A \\times B| = |A| \\cdot |B|$ is the ${link('cb.multiplication-rule', 'multiplication rule')}, explained in the ${link('lesson.cb.counting-principles.2', 'counting principles lesson')}; set notation is in the ${link('lesson.st.basics.2', 'set theory notation section')}.`,
        methods: [
          {
            name: 'Row by row',
            tag: 'usual',
            preferred: true,
            formula: 'A \\times B = \\{(a, b) : a \\in A,\\ b \\in B\\}',
            body: 'Fix one element of $A$ and run through all of $B$, then move on to the next element of $A$.',
          },
          {
            name: 'Table',
            tag: 'grid',
            formula: '|A| \\text{ rows} \\times |B| \\text{ columns}',
            body: 'Put $A$ down the side and $B$ across the top; each cell holds one pair.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\{1, 2, 3\\}$, $B = \\{x, y\\}$',
          items: [
            {
              title: 'Fix the order of the factors.',
              body: 'The first coordinate comes from the first set, so $A \\times B$ and $B \\times A$ are different sets.',
              state: 'pairs $(a, b)$ with $a \\in A$, $b \\in B$',
            },
            {
              title: 'Pair the first element of A with every element of B.',
              body: 'Keep $a$ fixed and let $b$ run through $B$.',
              state: '$(1, x), (1, y)$',
            },
            {
              title: 'Repeat for each remaining element of A.',
              body: 'One block of $|B|$ pairs for every element of $A$.',
              state: '$(2, x), (2, y), (3, x), (3, y)$',
            },
            {
              title: 'Collect the pairs and check the count.',
              body: 'There must be $|A| \\cdot |B|$ pairs.',
              state: '$A \\times B = \\{(1, x), (1, y), (2, x), (2, y), (3, x), (3, y)\\}$; $3 \\cdot 2 = 6$',
            },
          ],
        },
        examples: [
          {
            title: 'swapping the factors',
            badge: 'order matters',
            lines: [
              { math: '$A = \\{0, 1\\}$, $B = \\{p, q\\}$', why: 'two elements each' },
              { math: '$A \\times B = \\{(0, p), (0, q), (1, p), (1, q)\\}$', why: 'first coordinate from A' },
              { math: '$B \\times A = \\{(p, 0), (p, 1), (q, 0), (q, 1)\\}$', why: 'different pairs, same size $4$', answer: true },
            ],
          },
          {
            title: 'a set with itself',
            badge: 'square',
            lines: [
              { math: '$A = \\{1, 2\\}$, $A \\times A = A^2$', why: 'both coordinates from A' },
              { math: '$A^2 = \\{(1, 1), (1, 2), (2, 1), (2, 2)\\}$', why: '$(1, 2) \\neq (2, 1)$', answer: true },
            ],
          },
          {
            title: 'three sets',
            badge: 'counting',
            lines: [
              { math: '$|A| = 2$, $|B| = 3$, $|C| = 4$', why: 'triples $(a, b, c)$' },
              { math: '$|A \\times B \\times C| = 2 \\cdot 3 \\cdot 4$', why: 'one factor per coordinate' },
              { math: '$24$ ordered triples', why: 'multiply', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Write $A$ down the left side of a table and $B$ along the top. Each cell is the pair (row label, column label), so the table has $|A|$ rows of $|B|$ cells each, $|A| \\cdot |B|$ cells in all. Swapping the sets turns the table on its side: the cells hold the same two labels in the opposite order, which is why $A \\times B \\neq B \\times A$ unless $A = B$ or one of the sets is empty.',
        },
        pitfalls: [
          {
            title: 'Writing sets instead of ordered pairs',
            wrong: '$\\{1, x\\} \\in A \\times B$',
            right: '$(1, x) \\in A \\times B$; in a pair the order is fixed',
          },
          {
            title: 'Treating the product as commutative',
            wrong: '$\\{0, 1\\} \\times \\{p, q\\} = \\{p, q\\} \\times \\{0, 1\\}$',
            right: '$(0, p)$ is in the first product, $(p, 0)$ in the second',
          },
          {
            title: 'Adding the sizes',
            wrong: '$|A \\times B| = 3 + 2 = 5$',
            right: 'each element of $A$ pairs with each element of $B$: $3 \\cdot 2 = 6$',
          },
          {
            title: 'Forgetting the empty set',
            wrong: '$\\{1, 2\\} \\times \\emptyset = \\{1, 2\\}$',
            right: 'there is no second coordinate to choose: $\\{1, 2\\} \\times \\emptyset = \\emptyset$',
          },
        ],
        related: ['power-set', 'count-subsets', 'union-cardinality'],
        builtOn: [
          { label: 'Multiplication rule', url: ruleUrl('cb.multiplication-rule') },
          { label: 'The multiplication rule (lesson)', url: ruleUrl('lesson.cb.counting-principles.2') },
          { label: 'Notation used in set theory (lesson)', url: ruleUrl('lesson.st.basics.2') },
        ],
      },
    },
    {
      id: 'subset-check',
      slug: 'subset-check',
      name: 'How to check whether one set is a subset of another',
      description: 'Test $A \\subseteq B$ element by element: every element of $A$ must be in $B$; for a proper subset, $B$ also needs an element outside $A$.',
      uses: ['membership', 'difference'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check If a Set Is a Subset of Another | Learn Math Class',
        description: 'Check whether A is a subset of B: test every element of A for membership in B, stop at the first miss, then test for a proper subset. Examples and mistakes.',
        keywords: ['how to check if a set is a subset', 'subset test', 'proper subset check', 'subset vs element', 'is A a subset of B'],
      },
      page: {
        h1: 'How to Check Whether One Set Is a Subset of Another',
        lead:
          '$A \\subseteq B$ means every element of $A$ is also an element of $B$. Go through the elements of $A$ one at a time; a single element missing from $B$ is enough to say no.',
        recognize:
          'The question asks whether $A \\subseteq B$, $A \\subset B$ or $B \\supseteq A$, whether "every ... is also a ...", or which of several sets lie inside another. The sets are given as lists or by a rule such as "multiples of $6$". Test: only the elements of $A$ need checking; extra elements of $B$ never break $A \\subseteq B$.',
        recognizeNote: `Subsets and proper subsets are defined in the ${link('lesson.st.subsets.1', 'subsets lesson')}.`,
        methods: [
          {
            name: 'Element by element',
            tag: 'usual',
            preferred: true,
            formula: 'A \\subseteq B \\iff \\forall x\\,(x \\in A \\Rightarrow x \\in B)',
            body: 'Check each element of $A$ and stop at the first one that is not in $B$.',
          },
          {
            name: 'Difference test',
            tag: 'one operation',
            formula: 'A \\subseteq B \\iff A \\setminus B = \\emptyset',
            body: 'Remove from $A$ everything that is in $B$; the subset holds exactly when nothing is left.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\{2, 4, 8\\}$, $B = \\{1, 2, 4, 6, 8\\}$',
          items: [
            {
              title: 'Take the elements of A one at a time.',
              body: 'Only these elements need checking.',
              state: '$2$, $4$, $8$',
            },
            {
              title: 'Look for each one in B.',
              body: 'Note any element of $A$ that is missing from $B$; this is the same as computing $A \\setminus B$.',
              state: '$A \\setminus B = \\emptyset$',
              atomic: 'difference',
            },
            {
              title: 'Decide whether A is a subset.',
              body: 'No missing element means $A \\subseteq B$; one missing element means $A \\not\\subseteq B$.',
              state: '$A \\subseteq B$',
            },
            {
              title: 'Check for a proper subset.',
              body: '$A \\subset B$ also needs an element of $B$ outside $A$, so that $A \\neq B$.',
              state: '$1, 6 \\in B \\setminus A$, so $A \\subset B$',
            },
          ],
        },
        examples: [
          {
            title: 'one element missing',
            badge: 'not a subset',
            lines: [
              { math: '$\\{2, 5\\} \\subseteq \\{1, 2, 4, 6, 8\\}$?', why: 'check $2$, then $5$' },
              { math: '$2$ is in, $5$ is not', why: 'one miss is enough' },
              { math: '$\\{2, 5\\} \\not\\subseteq \\{1, 2, 4, 6, 8\\}$', why: 'stop at the first miss', answer: true },
            ],
          },
          {
            title: 'a set as an element',
            badge: 'element vs subset',
            lines: [
              { math: '$\\{1, \\{2\\}\\} \\subseteq \\{1, 2, 3\\}$?', why: 'two elements: $1$ and $\\{2\\}$' },
              { math: '$1 \\in \\{1, 2, 3\\}$, but $\\{2\\} \\notin \\{1, 2, 3\\}$', why: '$\\{2\\}$ is a set, not $2$' },
              { math: '$\\{1, \\{2\\}\\} \\not\\subseteq \\{1, 2, 3\\}$', why: 'the element $\\{2\\}$ is missing', answer: true },
            ],
          },
          {
            title: 'sets given by a rule',
            badge: 'infinite sets',
            lines: [
              { math: '$A$ = multiples of $6$, $B$ = multiples of $3$', why: 'take an arbitrary $x \\in A$' },
              { math: '$x = 6k = 3(2k)$, so $x \\in B$', why: 'every element of A passes' },
              { math: '$3 \\in B$ but $3 \\notin A$', why: 'B has an extra element' },
              { math: '$A \\subset B$', why: 'proper subset', answer: true },
            ],
          },
        ],
        examplesAfter: 'Draw one set inside another with the [Venn diagram generator](!/set-theory/visual-tools/venn-generator).',
        visual: {
          caption:
            'In a Venn diagram, $A \\subseteq B$ means circle $A$ lies completely inside circle $B$: the region "in $A$ but not in $B$" is empty. That empty region is the set $A \\setminus B$, which is why the difference test works. Elements of $B$ outside $A$ do not matter for $A \\subseteq B$; they only decide whether the subset is proper.',
        },
        pitfalls: [
          {
            title: 'Confusing element and subset',
            wrong: '$2 \\subseteq \\{1, 2, 3\\}$',
            right: '$2 \\in \\{1, 2, 3\\}$ and $\\{2\\} \\subseteq \\{1, 2, 3\\}$',
          },
          {
            title: 'Doubting the empty set',
            wrong: '$\\emptyset \\not\\subseteq \\{1, 2\\}$ because it has no elements',
            right: '$\\emptyset \\subseteq A$ for every set $A$: no element can fail the test',
          },
          {
            title: 'Calling a set a proper subset of itself',
            wrong: '$\\{1, 2\\} \\subset \\{1, 2\\}$',
            right: '$\\{1, 2\\} \\subseteq \\{1, 2\\}$ holds, but a proper subset must leave something out',
          },
          {
            title: 'Checking the wrong direction',
            wrong: '$\\{1, 2, 3\\} \\subseteq \\{1, 2\\}$ because $1$ and $2$ match',
            right: 'every element of the left set must be on the right, and $3$ is not',
          },
        ],
        related: ['prove-set-identities', 'power-set', 'count-subsets'],
        builtOn: [
          { label: 'Subsets (lesson)', url: ruleUrl('lesson.st.subsets.1') },
          { label: 'Proper subsets (lesson)', url: ruleUrl('lesson.st.subsets.2') },
          { label: 'Set equality criterion', url: ruleUrl('st.set-equality-criterion') },
        ],
      },
    },

    // ═══ III. Applied ══════════════════════════════════════════════════
    {
      id: 'survey-problems',
      slug: 'survey-problems',
      name: 'How to solve Venn diagram survey problems',
      description: 'Turn survey wording such as "both", "only A", "exactly one" and "neither" into Venn regions, fill them center out, and add the regions asked for.',
      uses: ['Venn diagrams', 'inclusion-exclusion', 'complement'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Venn Diagram Survey Problems | Learn Math Class',
        description: 'Solve survey word problems with a Venn diagram: translate both, only, exactly one and neither into regions, fill from the center out, add. Worked examples.',
        keywords: ['venn diagram word problems', 'survey problems sets', 'how many like neither', 'exactly one venn diagram', 'three circle venn diagram problems'],
      },
      page: {
        h1: 'How to Solve Venn Diagram Survey Problems',
        lead:
          'A survey problem gives totals for categories that overlap and asks about one part of the picture. Draw one circle per category, translate each phrase into a region, fill the regions from the center out, and add the regions the question names.',
        recognize: `Trigger words: **surveyed**, **like both**, **only**, **exactly one**, **exactly two**, **at least one**, **neither**, **none of the three**. Numbers are given for whole categories and for overlaps; the answer is a count of people or items in a region or a group of regions. The regions are named as in the ${link('lesson.st.venn-diagrams.3', 'three-set Venn diagrams lesson')}.`,
        setup: [
          { label: 'Universe', body: 'The number surveyed is $|U|$. Everyone in the survey sits in exactly one region, including the people outside every circle.' },
          { label: 'Sets', body: 'Name one set per category, such as $F$ for football. Two categories need two circles, three need three.' },
          { label: 'Phrases', body: '"Both $A$ and $B$" is $A \\cap B$ and includes anyone who is also in $C$. "Only $A$" is the region in $A$ and in no other set. "At least one" is the union, "neither" or "none" is the outside, and "exactly one" is the sum of the single regions.' },
          { label: 'Fill', body: 'Write the most specific number first: the all-three count in the center, then the pair-only regions, then the single regions, then the outside.' },
          { label: 'Answer', body: 'Add exactly the regions the question names, and check that all regions add up to $|U|$.' },
        ],
        handoff: {
          to: 'venn-three-sets',
          body: `Fill the regions with the [three-set Venn method](!${HUB}/venn-three-sets); with only two categories use the [two-set Venn method](!${HUB}/venn-two-sets).`,
        },
        interpretation: `Every region is a count of people, so it must be a whole number of at least $0$; a negative region means a misread phrase, most often a pair total written in a pair-only region. Check that the regions add up to the number surveyed, and answer in the words of the question, for example "$57$ students play exactly one sport". To turn a region into a probability, divide by the total; the ${link('prob.addition-rule', 'addition rule')} works on the same diagram.`,
        examples: [
          {
            title: 'two drinks',
            badge: 'two categories',
            lines: [
              { math: '$120$ people: $70$ drink tea, $55$ coffee, $20$ neither', why: 'how many drink only tea?' },
              { math: 'at least one: $120 - 20 = 100$', why: 'remove the outside' },
              { math: 'both: $70 + 55 - 100 = 25$', why: 'inclusion-exclusion solved for the overlap' },
              { math: 'only tea: $70 - 25 = 45$', why: 'tea circle minus the lens', answer: true },
            ],
          },
          {
            title: 'three sports',
            badge: 'exactly one',
            lines: [
              { math: '$100$ students: football $45$, basketball $38$, volleyball $30$', why: 'circle totals' },
              { math: 'pairs $15$, $12$, $10$; all three $6$', why: 'pairs FB, FV, BV' },
              { math: 'pair-only $9$, $6$, $4$; single-only $24$, $19$, $14$', why: 'fill center out' },
              { math: 'exactly one: $24 + 19 + 14 = 57$; none: $100 - 82 = 18$', why: 'the inner regions add to $82$', answer: true },
            ],
          },
          {
            title: 'no pair totals given',
            badge: 'exactly counts',
            lines: [
              { math: '$60$ students, each in art, music or drama: $30$, $26$, $24$; $4$ in all three', why: 'how many take exactly one?' },
              { math: '$30 + 26 + 24 = 80 = e_1 + 2e_2 + 3 \\cdot 4$', why: 'each student counted once per class' },
              { math: '$e_1 + e_2 + 4 = 60$', why: 'everyone takes at least one' },
              { math: '$e_2 = 12$, $e_1 = 44$', why: 'subtract the two equations', answer: true },
            ],
          },
        ],
        examplesAfter: 'Draw your own survey with the [three-set Venn diagram tool](!/set-theory/visual-tools/three-sets-basic-venn) or the [Venn diagram generator](!/set-theory/visual-tools/venn-generator).',
        visual: {
          caption:
            'Each person in a survey answers yes or no for every category, so each person lands in exactly one region. A total for a category or a pair always includes the people further in, which is why the center is filled first. Once all regions are filled, any question, "only", "exactly two", "at least one", "none", is a sum of regions.',
        },
        pitfalls: [
          {
            title: 'Reading "both" as "only those two"',
            wrong: 'football and basketball: $15$, written in the pair-only region',
            right: '$15$ includes the $6$ who play all three: pair-only is $9$',
          },
          {
            title: 'Confusing "only A" with "A"',
            wrong: 'only football: $45$',
            right: '$45$ is the whole circle; only football is $24$',
          },
          {
            title: 'Forgetting the people in no circle',
            wrong: '$|U| = 82$ because the regions add to $82$',
            right: 'the survey had $100$ students, so $18$ play none of the three',
          },
        ],
        related: ['venn-three-sets', 'venn-two-sets', 'union-cardinality'],
        builtOn: [
          { label: 'Three-set Venn diagrams (lesson)', url: ruleUrl('lesson.st.venn-diagrams.3') },
          { label: 'Inclusion-exclusion (two sets)', url: ruleUrl('st.inclusion-exclusion-two-sets') },
          { label: 'Inclusion-exclusion (three sets)', url: ruleUrl('st.inclusion-exclusion-three-sets') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Set operations', blurb: 'Atomic · one operation, applied once' },
    { id: 'composite', label: 'Venn diagrams, proofs, subsets and products', blurb: 'Composite · each opens its own page' },
    { id: 'applied', label: 'Survey problems', blurb: 'both, only, exactly one, neither' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'applied', label: 'Applied' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other methods',
    links: [
      { url: '/logic/methods', label: 'Logic methods' },
      { url: '/combinatorics/methods', label: 'Combinatorics methods' },
      { url: '/probability/methods', label: 'Probability methods' },
    ],
  },
};

export default setTheoryMethods;
