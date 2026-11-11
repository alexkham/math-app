// arithmetic.methods.js (arithmetic)
// Single data source for /arithmetic/methods (hub) and
// /arithmetic/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/arithmetic/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/arithmetic/methods';

const arithmeticMethods = {
  hubPath: HUB,
  hubLabel: 'arithmetic methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'divisibility-by-2',
      name: 'How to test divisibility by 2',
      subtitle: 'Divisibility rule for 2',
      glyph: '2 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You need to know whether a whole number is even, for example before halving it or factoring out a $2$: $1{,}746$, $3{,}821$, $90{,}318$.',
      formula: '2 \\mid n \\iff \\text{the last digit of } n \\text{ is } 0, 2, 4, 6 \\text{ or } 8',
      fields: {
        steps: [
          '1. Look only at the last digit.',
          '2. If it is $0, 2, 4, 6$ or $8$, then $2 \\mid n$; if it is odd, $n$ leaves remainder $1$.',
        ],
        worked_example: '$3{,}748$ ends in $8$, so $2 \\mid 3748$; $5{,}291$ ends in $1$, so $2 \\nmid 5291$',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.2'), label: 'Divisibility by 2 (lesson)' },
      ],
    },
    {
      id: 'divisibility-by-3',
      name: 'How to test divisibility by 3',
      subtitle: 'Digit-sum rule for 3',
      glyph: '3 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You want to know whether $3$ divides a number without dividing it: $729$, $1{,}234$, $5{,}832$.',
      formula: '3 \\mid n \\iff 3 \\mid (\\text{sum of the digits of } n)',
      fields: {
        steps: [
          '1. Add the digits of the number.',
          '2. If the sum is still large, add its digits again.',
          '3. The number is divisible by $3$ exactly when the sum is.',
        ],
        worked_example: '$5{,}832$: $5 + 8 + 3 + 2 = 18$, so $3 \\mid 5832$ ($5832 = 3 \\cdot 1944$)',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.3'), label: 'Divisibility by 3 (lesson)' },
        { url: ruleUrl('lesson.ar.divisibility.rules.13'), label: 'Why these rules work' },
      ],
    },
    {
      id: 'divisibility-by-4',
      name: 'How to test divisibility by 4',
      subtitle: 'Last-two-digits rule for 4',
      glyph: '4 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You need to know whether $4$ divides a number with three or more digits: $3{,}516$, $7{,}230$, $2{,}134$.',
      formula: '4 \\mid n \\iff 4 \\mid (\\text{number formed by the last two digits of } n)',
      fields: {
        steps: [
          '1. Read the number formed by the last two digits.',
          '2. If $4$ divides that two-digit number, $4$ divides the whole number.',
        ],
        worked_example: '$7{,}312$: $12 = 4 \\cdot 3$, so $4 \\mid 7312$; $7{,}318$: $4 \\nmid 18$, so $4 \\nmid 7318$',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.4'), label: 'Divisibility by 4 (lesson)' },
      ],
    },
    {
      id: 'divisibility-by-5',
      name: 'How to test divisibility by 5',
      subtitle: 'Divisibility rule for 5',
      glyph: '5 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You want to know whether $5$ divides a number, for example while factoring or simplifying a fraction: $4{,}835$, $7{,}832$, $990$.',
      formula: '5 \\mid n \\iff \\text{the last digit of } n \\text{ is } 0 \\text{ or } 5',
      fields: {
        steps: [
          '1. Look only at the last digit.',
          '2. If it is $0$ or $5$, then $5 \\mid n$; otherwise $5 \\nmid n$.',
        ],
        worked_example: '$9{,}485$ ends in $5$, so $5 \\mid 9485$ ($9485 = 5 \\cdot 1897$)',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.5'), label: 'Divisibility by 5 (lesson)' },
      ],
    },
    {
      id: 'divisibility-by-6',
      name: 'How to test divisibility by 6',
      subtitle: 'Rule for 6: test 2 and 3',
      glyph: '6 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You need to know whether $6$ divides a number: $1{,}254$, $1{,}234$, $4{,}512$. Since $6 = 2 \\cdot 3$ with $\\gcd(2, 3) = 1$, two quick tests decide it.',
      formula: '6 \\mid n \\iff 2 \\mid n \\text{ and } 3 \\mid n',
      fields: {
        steps: [
          '1. Check that the last digit is even (the test for $2$).',
          '2. Check that the digit sum is divisible by $3$.',
          '3. Only if both tests pass is the number divisible by $6$.',
        ],
        worked_example: '$4{,}512$: even, and $4 + 5 + 1 + 2 = 12$, so $6 \\mid 4512$ ($4512 = 6 \\cdot 752$)',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.6'), label: 'Divisibility by 6 (lesson)' },
        { url: ruleUrl('lesson.ar.divisibility.rules.11'), label: 'Combining rules' },
      ],
    },
    {
      id: 'divisibility-by-9',
      name: 'How to test divisibility by 9',
      subtitle: 'Digit-sum rule for 9',
      glyph: '9 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You want to know whether $9$ divides a number: $8{,}127$, $4{,}825$, $6{,}471$. The digit sum also gives the remainder after division by $9$.',
      formula: '9 \\mid n \\iff 9 \\mid (\\text{sum of the digits of } n)',
      fields: {
        steps: [
          '1. Add the digits of the number; repeat on the sum if it is large.',
          '2. The number is divisible by $9$ exactly when the digit sum is.',
        ],
        worked_example: '$6{,}471$: $6 + 4 + 7 + 1 = 18$, so $9 \\mid 6471$ ($6471 = 9 \\cdot 719$)',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.8'), label: 'Divisibility by 9 (lesson)' },
        { url: ruleUrl('lesson.ar.divisibility.rules.13'), label: 'Why these rules work' },
      ],
    },
    {
      id: 'divisibility-by-10',
      name: 'How to test divisibility by 10',
      subtitle: 'Divisibility rule for 10',
      glyph: '10 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You need to know whether $10$ divides a number, or whether both $2$ and $5$ do: $5{,}230$, $5{,}235$, $7{,}250$.',
      formula: '10 \\mid n \\iff \\text{the last digit of } n \\text{ is } 0',
      fields: {
        steps: [
          '1. Look only at the last digit.',
          '2. If it is $0$, then $10 \\mid n$; any other digit means $10 \\nmid n$.',
        ],
        worked_example: '$7{,}250$ ends in $0$, so $10 \\mid 7250$; $7{,}205$ ends in $5$, so $10 \\nmid 7205$',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.9'), label: 'Divisibility by 10 (lesson)' },
      ],
    },
    {
      id: 'divisibility-by-11',
      name: 'How to test divisibility by 11',
      subtitle: 'Alternating-sum rule for 11',
      glyph: '11 | n',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You want to know whether $11$ divides a number, for example while factoring: $9{,}273$, $5{,}831$, $143$.',
      formula: '11 \\mid n \\iff 11 \\mid (d_0 - d_1 + d_2 - d_3 + \\cdots)',
      fields: {
        steps: [
          '1. Starting from the last digit $d_0$, add and subtract the digits in turn: $d_0 - d_1 + d_2 - \\cdots$.',
          '2. If the result is $0$ or a multiple of $11$ (negative is fine), then $11 \\mid n$.',
        ],
        worked_example: '$8{,}349$: $9 - 4 + 3 - 8 = 0$, so $11 \\mid 8349$ ($8349 = 11 \\cdot 759$)',
      },
      links: [
        { url: ruleUrl('lesson.ar.divisibility.rules.10'), label: 'Divisibility by 11 (lesson)' },
        { url: ruleUrl('lesson.ar.divisibility.rules.13'), label: 'Why these rules work' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'order-of-operations',
      slug: 'order-of-operations',
      name: 'How to use the order of operations',
      description: 'Evaluate an expression with several operations: groups first, then powers, then $\\times$ and $\\div$ left to right, then $+$ and $-$ left to right.',
      uses: ['parentheses', 'powers', 'left to right', 'sign rules'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Order of Operations (PEMDAS) | Learn Math Class',
        description: 'Evaluate expressions in the right order: groups, powers, multiplication and division left to right, then addition and subtraction. Examples and mistakes.',
        keywords: ['order of operations', 'PEMDAS steps', 'order of operations examples', 'how to evaluate expressions', 'BODMAS'],
      },
      page: {
        h1: 'How to Use the Order of Operations',
        lead:
          'An expression with several operations has exactly one value. Work inside groups first, then powers, then multiplication and division from left to right, and last addition and subtraction from left to right.',
        recognize:
          'One expression mixes several operations: $3 + 4 \\cdot 2$, $20 - 12 \\div 4 \\cdot 2$, $(5 - 2)^2 + 6 \\div 3$, a fraction bar with a sum above or below it. Test: if doing the operations in a different order could give a different number, the order rules decide which one is right.',
        recognizeNote: `The order of operations is a convention; the rules it works with, such as how multiplication spreads over a sum and how signs combine, are in the ${link('lesson.ar.properties', 'properties of arithmetic operations')} lesson.`,
        steps: {
          traceLabel: 'On $20 - 12 \\div 4 \\cdot 2 + (1 + 2)^2$',
          items: [
            {
              title: 'Work inside grouping symbols.',
              body: 'Parentheses, brackets, and the top and bottom of a fraction bar each count as a group. Start with the innermost group.',
              state: '$20 - 12 \\div 4 \\cdot 2 + 3^2$',
            },
            {
              title: 'Evaluate powers.',
              body: 'An exponent applies only to the number or group directly in front of it.',
              state: '$20 - 12 \\div 4 \\cdot 2 + 9$',
            },
            {
              title: 'Multiply and divide from left to right.',
              body: 'Multiplication and division have the same rank: do whichever comes first as you read. Here $12 \\div 4 = 3$, then $3 \\cdot 2 = 6$.',
              state: '$20 - 6 + 9$',
            },
            {
              title: 'Add and subtract from left to right.',
              body: `Subtracting is adding the opposite (${link('lesson.ar.properties.10', 'subtraction as inverse addition')}), so the two share one rank and go strictly left to right.`,
              state: '$14 + 9 = 23$',
            },
          ],
        },
        examples: [
          {
            title: 'a product inside a sum',
            badge: 'two ranks',
            lines: [
              { math: '$7 + 3 \\cdot 5 - 2$', why: 'multiplication outranks addition' },
              { math: '$7 + 15 - 2$', why: 'multiply first' },
              { math: '$20$', why: 'add and subtract left to right', answer: true },
            ],
          },
          {
            title: 'division and multiplication in a row',
            badge: 'left to right',
            lines: [
              { math: '$36 \\div 3 \\cdot 2 - 2^3$', why: 'one power, then equal ranks' },
              { math: '$36 \\div 3 \\cdot 2 - 8$', why: 'power first' },
              { math: '$12 \\cdot 2 - 8 = 24 - 8$', why: 'divide, then multiply, left to right' },
              { math: '$16$', why: 'subtract last', answer: true },
            ],
          },
          {
            title: 'nested groups and a negative',
            badge: 'brackets',
            lines: [
              { math: '$-2^2 + 3[10 - (4 - 6)^2]$', why: 'innermost group first' },
              { math: '$(4 - 6)^2 = (-2)^2 = 4$', why: 'group, then its power' },
              { math: '$3[10 - 4] = 3 \\cdot 6 = 18$', why: 'finish the bracket, then multiply' },
              { math: '$-2^2 = -4$', why: 'the power comes before the minus' },
              { math: '$-4 + 18 = 14$', why: 'add last', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Think of an expression as a tree of operations. Each operation needs finished numbers on both sides before it can run, so the operations deeper in the tree, inside groups and powers, are done first. The rank order, groups, powers, multiplication and division, addition and subtraction, tells you how the tree is built when no parentheses are written, and "left to right" settles ties between operations of the same rank.',
        },
        pitfalls: [
          {
            title: 'Adding before multiplying',
            wrong: '$7 + 3 \\cdot 5 = 10 \\cdot 5 = 50$',
            right: '$7 + 3 \\cdot 5 = 7 + 15 = 22$',
          },
          {
            title: 'Always multiplying before dividing',
            wrong: '$48 \\div 6 \\cdot 2 = 48 \\div 12 = 4$',
            right: 'left to right: $48 \\div 6 \\cdot 2 = 8 \\cdot 2 = 16$',
            note: 'The letters M and D in PEMDAS share one rank; so do A and S.',
          },
          {
            title: 'Squaring the minus sign',
            wrong: '$-3^2 = 9$',
            right: '$-3^2 = -(3^2) = -9$; only $(-3)^2 = 9$',
            note: `The product of two negatives is positive by the ${link('lesson.ar.properties.9', 'sign rules')}, but in $-3^2$ the minus is not part of the base.`,
          },
          {
            title: 'Adding before a subtraction on its left',
            wrong: '$10 - 4 + 3 = 10 - 7 = 3$',
            right: '$10 - 4 + 3 = 6 + 3 = 9$',
          },
        ],
        related: ['complex-fractions', 'add-subtract-fractions', 'modular-arithmetic'],
        builtOn: [
          { label: 'Distributive property', url: ruleUrl('lesson.ar.properties.5') },
          { label: 'Sign rules', url: ruleUrl('lesson.ar.properties.9') },
          { label: 'Subtraction as inverse addition', url: ruleUrl('lesson.ar.properties.10') },
          { label: 'Division as inverse multiplication', url: ruleUrl('lesson.ar.properties.11') },
        ],
      },
    },
    {
      id: 'prime-factorization',
      slug: 'prime-factorization',
      name: 'How to find the prime factorization of a number',
      description: 'Write a whole number as a product of primes: divide out $2$, then $3$, $5$, $7$, … until the quotient is $1$, as in $360 = 2^3 \\cdot 3^2 \\cdot 5$.',
      uses: ['divisibility rules', 'repeated division', 'prime numbers'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Prime Factorization of a Number | Learn Math Class',
        description: 'Find the prime factorization of any number: divide out the smallest prime again and again, use divisibility rules, check by multiplying. Examples and mistakes.',
        keywords: ['prime factorization', 'how to find prime factorization', 'prime factorization examples', 'factor tree', 'product of primes'],
      },
      page: {
        h1: 'How to Find the Prime Factorization of a Number',
        lead:
          'Every whole number greater than $1$ is a product of primes in exactly one way. Divide out the smallest prime that fits, again and again, until the quotient is $1$.',
        recognize:
          'You need the building blocks of a number: to find a GCD or LCM, to simplify a fraction, to count divisors. Typical wording: "write $360$ as a product of primes", "factor $1{,}001$ completely", an answer like $2^3 \\cdot 3^2 \\cdot 5$. Test: a number with no prime factor up to its square root is itself prime, so you never need to try beyond $\\sqrt{n}$.',
        recognizeNote: `Primes are defined in ${link('lesson.ar.divisibility.7', 'prime numbers')}, and the uniqueness of the factorization is explained in ${link('lesson.ar.divisibility.8', 'prime factorization')} on the divisibility lesson.`,
        methods: [
          {
            name: 'Repeated division',
            tag: 'usual',
            preferred: true,
            formula: 'n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}',
            body: `Divide by $2, 3, 5, 7, \\ldots$ in order, spotting each prime with the ${link('lesson.ar.divisibility.rules', 'divisibility rules')}.`,
          },
          {
            name: 'Factor tree',
            tag: 'any split',
            formula: 'n = a \\cdot b, \\ \\text{then split } a \\text{ and } b',
            body: `Split the number into any two factors and keep splitting until every branch ends in a prime; by the ${link('lesson.ar.divisibility.8', 'Fundamental Theorem of Arithmetic')} every tree ends with the same primes.`,
          },
        ],
        steps: {
          traceLabel: 'On $n = 1{,}260$',
          items: [
            {
              title: 'Test the smallest prime, 2.',
              body: 'The last digit $0$ is even, so $2$ divides the number.',
              state: '$1260 = 2 \\cdot 630$',
              atomic: 'divisibility-by-2',
            },
            {
              title: 'Divide out that prime as often as it fits.',
              body: 'Keep dividing the quotient by the same prime until it no longer divides.',
              state: '$630 = 2 \\cdot 315$, and $315$ is odd: $1260 = 2^2 \\cdot 315$',
            },
            {
              title: 'Move to the next prime, 3.',
              body: 'The digit sum of $315$ is $9$, so $3$ divides it; the quotient $105$ has digit sum $6$, so $3$ divides again.',
              state: '$315 = 3^2 \\cdot 35$: $1260 = 2^2 \\cdot 3^2 \\cdot 35$',
              atomic: 'divisibility-by-3',
            },
            {
              title: 'Continue until the quotient is prime.',
              body: 'The number $35$ ends in $5$, and $35 \\div 5 = 7$ is prime.',
              state: '$1260 = 2^2 \\cdot 3^2 \\cdot 5 \\cdot 7$',
              atomic: 'divisibility-by-5',
            },
            {
              title: 'Multiply back to check.',
              body: 'The product of the prime powers must give the original number.',
              state: '$4 \\cdot 9 \\cdot 35 = 1260$',
            },
          ],
        },
        examples: [
          {
            title: 'a small number',
            badge: 'two steps',
            lines: [
              { math: '$84 = 2 \\cdot 42 = 2^2 \\cdot 21$', why: 'halve twice' },
              { math: '$21 = 3 \\cdot 7$', why: 'digit sum $3$' },
              { math: '$84 = 2^2 \\cdot 3 \\cdot 7$', why: 'collect the primes', answer: true },
            ],
          },
          {
            title: 'repeated primes',
            badge: 'exponents',
            lines: [
              { math: '$360 = 2^3 \\cdot 45$', why: 'halve three times' },
              { math: '$45 = 3^2 \\cdot 5$', why: 'digit sum $9$, then ends in $5$' },
              { math: '$360 = 2^3 \\cdot 3^2 \\cdot 5$', why: 'collect the primes', answer: true },
            ],
          },
          {
            title: 'larger prime factors',
            badge: 'beyond 5',
            lines: [
              { math: '$1{,}001$: odd, digit sum $2$, ends in $1$', why: 'no $2$, $3$ or $5$' },
              { math: '$1001 = 7 \\cdot 143$', why: 'try the next prime, $7$' },
              { math: '$143$: $3 - 4 + 1 = 0$, so $143 = 11 \\cdot 13$', why: 'alternating sum for $11$' },
              { math: '$1001 = 7 \\cdot 11 \\cdot 13$', why: 'all factors prime', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check a factorization with the [prime calculator](!/arithmetic/calculators/prime-calculator), or find which small primes divide a number with the [divisibility calculator](!/arithmetic/calculators/divisibility-calculator).',
        visual: {
          caption:
            'Picture the number as a block that you keep cutting into equal pieces. Each cut by a prime makes the block smaller, and a prime block cannot be cut any further. Because you always cut by the smallest prime that fits, no prime is skipped and the primes come out in increasing order. The pieces you removed, multiplied together, rebuild the original number, and any other way of cutting ends with exactly the same pieces.',
        },
        pitfalls: [
          {
            title: 'Stopping at a composite factor',
            wrong: '$360 = 2^3 \\cdot 45$',
            right: '$45 = 3^2 \\cdot 5$, so $360 = 2^3 \\cdot 3^2 \\cdot 5$',
          },
          {
            title: 'Writing each prime only once',
            wrong: '$72 = 2 \\cdot 3$',
            right: '$72 = 2^3 \\cdot 3^2$: check $8 \\cdot 9 = 72$',
          },
          {
            title: 'Testing far past the square root',
            wrong: 'to show $97$ is prime, try every number up to $96$',
            right: 'try the primes up to $\\sqrt{97} < 10$: $2, 3, 5, 7$ all fail, so $97$ is prime',
          },
          {
            title: 'Listing 1 as a prime factor',
            wrong: '$84 = 1 \\cdot 2^2 \\cdot 3 \\cdot 7$',
            right: '$1$ is not prime: $84 = 2^2 \\cdot 3 \\cdot 7$',
          },
        ],
        related: ['gcd-prime-factorization', 'lcm', 'simplify-fractions'],
        builtOn: [
          { label: 'Prime numbers', url: ruleUrl('lesson.ar.divisibility.7') },
          { label: 'Prime factorization', url: ruleUrl('lesson.ar.divisibility.8') },
          { label: 'Divisibility rules', url: ruleUrl('lesson.ar.divisibility.rules') },
        ],
      },
    },
    {
      id: 'gcd-prime-factorization',
      slug: 'gcd-prime-factorization',
      name: 'How to find the GCD by prime factorization',
      description: 'Factor both numbers into primes and keep the shared primes with the smaller exponent: $\\gcd(72, 120) = 2^3 \\cdot 3 = 24$.',
      uses: ['prime factorization', 'minimum exponent', 'gcd'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the GCD by Prime Factorization | Learn Math Class',
        description: 'Find the greatest common divisor by prime factorization: factor both numbers, keep shared primes with the smaller exponent, multiply. Examples and mistakes.',
        keywords: ['gcd by prime factorization', 'how to find the greatest common divisor', 'greatest common factor', 'gcf prime factorization', 'gcd examples'],
      },
      page: {
        h1: 'How to Find the GCD by Prime Factorization',
        lead:
          'The greatest common divisor is the largest number that divides both numbers. Factor both into primes; the GCD keeps only the primes they share, each with the smaller of its two exponents.',
        recognize:
          'Wording such as "greatest common divisor", "greatest common factor (GCF)", "largest number that divides both", "largest square tile", or a fraction to reduce. Typical inputs: $\\gcd(36, 60)$, $\\gcd(84, 126, 210)$, numbers already given as $2^3 \\cdot 3^2$. Test: if you can factor both numbers in a few steps, use this method; for large numbers that resist factoring, use the Euclidean algorithm.',
        recognizeNote: `The GCD and the notation $\\gcd(a, b)$ are defined in the ${link('lesson.ar.divisibility.gcd', 'GCD lesson')}.`,
        methods: [
          {
            name: 'Prime factorization',
            tag: 'usual',
            preferred: true,
            formula: '\\gcd(a, b) = \\prod p^{\\min(\\alpha_p, \\beta_p)}',
            body: `For each prime in both numbers, take the ${link('lesson.ar.divisibility.gcd.4', 'smaller exponent')}.`,
          },
          {
            name: 'Listing factors',
            tag: 'small numbers',
            formula: '\\text{largest number in both factor lists}',
            body: `List all factors of each number and pick the largest common one (${link('lesson.ar.divisibility.gcd.3', 'listing factors')}); fine for numbers below about $100$.`,
          },
          {
            name: 'Euclidean algorithm',
            tag: 'large numbers',
            formula: '\\gcd(a, b) = \\gcd(b, \\; a \\bmod b)',
            body: `Needs no factoring; see the [Euclidean algorithm method](!${HUB}/gcd-euclidean-algorithm).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\gcd(72, 120)$',
          items: [
            {
              title: 'Factor each number into primes.',
              body: `Use [prime factorization](!${HUB}/prime-factorization) on each number separately.`,
              state: '$72 = 2^3 \\cdot 3^2$, $\\; 120 = 2^3 \\cdot 3 \\cdot 5$',
            },
            {
              title: 'Keep the primes that appear in both.',
              body: 'A prime that divides only one of the numbers cannot divide the GCD.',
              state: '$2$ and $3$ (not $5$)',
            },
            {
              title: 'Take the smaller exponent of each shared prime.',
              body: 'The GCD can use only as many copies of a prime as both numbers contain.',
              state: '$2^{\\min(3, 3)} \\cdot 3^{\\min(2, 1)} = 2^3 \\cdot 3$',
            },
            {
              title: 'Multiply.',
              body: 'Check: the GCD divides both numbers, and the two quotients share no factor.',
              state: '$\\gcd(72, 120) = 24$ ($72 = 24 \\cdot 3$, $120 = 24 \\cdot 5$)',
            },
          ],
        },
        examples: [
          {
            title: 'two numbers',
            badge: 'shared primes',
            lines: [
              { math: '$36 = 2^2 \\cdot 3^2$, $\\; 60 = 2^2 \\cdot 3 \\cdot 5$', why: 'factor both' },
              { math: '$2^{\\min(2, 2)} \\cdot 3^{\\min(2, 1)} = 2^2 \\cdot 3$', why: 'smaller exponents' },
              { math: '$\\gcd(36, 60) = 12$', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'no prime in common',
            badge: 'coprime',
            lines: [
              { math: '$35 = 5 \\cdot 7$, $\\; 72 = 2^3 \\cdot 3^2$', why: 'factor both' },
              { math: 'no shared prime', why: 'only $1$ divides both' },
              { math: '$\\gcd(35, 72) = 1$', why: 'the numbers are coprime', answer: true },
            ],
          },
          {
            title: 'three numbers',
            badge: 'three inputs',
            lines: [
              { math: '$84 = 2^2 \\cdot 3 \\cdot 7$, $\\; 126 = 2 \\cdot 3^2 \\cdot 7$', why: 'factor all three' },
              { math: '$210 = 2 \\cdot 3 \\cdot 5 \\cdot 7$', why: '$5$ is only here' },
              { math: '$2^1 \\cdot 3^1 \\cdot 7^1$', why: 'smallest exponent among three' },
              { math: '$\\gcd(84, 126, 210) = 42$', why: 'multiply', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your answer with the [GCF calculator](!/arithmetic/calculators/gcf-calculator).',
        visual: {
          caption:
            'Picture each number as a stack of prime blocks: $72$ is three blocks of $2$ and two blocks of $3$, and $120$ is three blocks of $2$, one block of $3$ and one block of $5$. A common divisor can only be built from blocks that both stacks have. Line the stacks up prime by prime and keep the overlap: three $2$s and one $3$. The overlap is the largest stack that fits inside both numbers, and that is the GCD.',
        },
        pitfalls: [
          {
            title: 'Taking the larger exponent',
            wrong: '$\\gcd(36, 60) = 2^2 \\cdot 3^2 = 36$',
            right: '$36$ does not divide $60$; smaller exponents give $2^2 \\cdot 3 = 12$',
            note: 'The larger exponents belong to the LCM.',
          },
          {
            title: 'Including a prime that only one number has',
            wrong: '$\\gcd(36, 60) = 2^2 \\cdot 3 \\cdot 5 = 60$',
            right: 'the $5$ is only in $60$: $\\gcd(36, 60) = 12$',
          },
          {
            title: 'Answering 0 when nothing is shared',
            wrong: '$\\gcd(35, 72) = 0$',
            right: `$\\gcd(35, 72) = 1$: the numbers are ${link('lesson.ar.divisibility.gcd.7', 'coprime')}`,
          },
        ],
        related: ['gcd-euclidean-algorithm', 'lcm', 'simplify-fractions'],
        builtOn: [
          { label: 'What is GCD?', url: ruleUrl('lesson.ar.divisibility.gcd.1') },
          { label: 'GCD by prime factorization', url: ruleUrl('lesson.ar.divisibility.gcd.4') },
          { label: 'Coprime numbers', url: ruleUrl('lesson.ar.divisibility.gcd.7') },
          { label: 'GCD of more than two numbers', url: ruleUrl('lesson.ar.divisibility.gcd.9') },
        ],
      },
    },
    {
      id: 'gcd-euclidean-algorithm',
      slug: 'gcd-euclidean-algorithm',
      name: 'How to find the GCD with the Euclidean algorithm',
      description: 'Replace the pair $(a, b)$ by $(b, a \\bmod b)$ until the remainder is $0$; the last nonzero remainder is the GCD. No factoring needed.',
      uses: ['division with remainder', 'gcd'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the GCD with the Euclidean Algorithm | Learn Math Class',
        description: 'Find the GCD of two numbers with the Euclidean algorithm: divide, keep the remainder, repeat until it is zero, read the last divisor. Examples and mistakes.',
        keywords: ['euclidean algorithm', 'how to find gcd euclidean algorithm', 'euclidean algorithm steps', 'euclidean algorithm examples', 'gcd of large numbers'],
      },
      page: {
        h1: 'How to Find the GCD with the Euclidean Algorithm',
        lead:
          'Divide the larger number by the smaller and keep only the remainder. The pair (smaller number, remainder) has the same GCD, so repeat until the remainder is $0$: the last nonzero remainder is the GCD.',
        recognize:
          'You need $\\gcd(a, b)$ and the numbers are large or hard to factor: $\\gcd(1{,}212, 540)$, $\\gcd(437, 323)$, or reducing a fraction like $\\frac{925}{1961}$. Test: if neither number factors quickly with the divisibility rules, use this method; it never needs a factorization.',
        recognizeNote: `The algorithm is introduced in ${link('lesson.ar.divisibility.gcd.5', 'the Euclidean algorithm')} section of the GCD lesson.`,
        steps: {
          traceLabel: 'On $\\gcd(1{,}212, 540)$',
          items: [
            {
              title: 'Divide the larger number by the smaller.',
              body: `Write the division as dividend $=$ divisor $\\cdot$ quotient $+$ remainder, with the remainder between $0$ and the divisor (${link('lesson.ar.modulo.51', 'how to compute a remainder')}).`,
              state: '$1212 = 540 \\cdot 2 + 132$',
            },
            {
              title: 'Replace the pair by (divisor, remainder).',
              body: 'Any number that divides both $a$ and $b$ also divides $a \\bmod b$, so the GCD does not change.',
              state: '$\\gcd(1212, 540) = \\gcd(540, 132)$',
            },
            {
              title: 'Repeat until the remainder is 0.',
              body: 'Each remainder is smaller than the last divisor, so the numbers shrink and the process stops.',
              state: '$540 = 132 \\cdot 4 + 12$, $\\; 132 = 12 \\cdot 11 + 0$',
            },
            {
              title: 'Read the last nonzero remainder.',
              body: 'It is the divisor in the final division, the one that leaves remainder $0$.',
              state: '$\\gcd(1212, 540) = 12$',
            },
          ],
        },
        examples: [
          {
            title: 'two divisions',
            badge: 'short',
            lines: [
              { math: '$84 = 36 \\cdot 2 + 12$', why: 'divide the larger by the smaller' },
              { math: '$36 = 12 \\cdot 3 + 0$', why: 'divide the old divisor by the remainder' },
              { math: '$\\gcd(84, 36) = 12$', why: 'last nonzero remainder', answer: true },
            ],
          },
          {
            title: 'four divisions',
            badge: 'longer chain',
            lines: [
              { math: '$270 = 192 \\cdot 1 + 78$', why: 'first division' },
              { math: '$192 = 78 \\cdot 2 + 36$', why: 'new pair $(192, 78)$' },
              { math: '$78 = 36 \\cdot 2 + 6$', why: 'new pair $(78, 36)$' },
              { math: '$36 = 6 \\cdot 6 + 0$, so $\\gcd(270, 192) = 6$', why: 'remainder $0$: stop', answer: true },
            ],
          },
          {
            title: 'reducing a fraction',
            badge: 'application',
            lines: [
              { math: '$\\dfrac{323}{437}$: $\\; 437 = 323 \\cdot 1 + 114$', why: 'no small prime divides both' },
              { math: '$323 = 114 \\cdot 2 + 95$, $\\; 114 = 95 \\cdot 1 + 19$', why: 'keep dividing' },
              { math: '$95 = 19 \\cdot 5 + 0$, so the GCD is $19$', why: 'remainder $0$: stop' },
              { math: '$\\dfrac{323 \\div 19}{437 \\div 19} = \\dfrac{17}{23}$', why: 'divide top and bottom', answer: true },
            ],
          },
        ],
        examplesAfter: 'Watch every division row in the [Euclidean algorithm visualizer](!/arithmetic/visual-tools/euclidean-algorithm), or check the result with the [GCF calculator](!/arithmetic/calculators/gcf-calculator).',
        visual: {
          caption:
            'Picture a $1212 \\times 540$ rectangle. Cut off as many $540 \\times 540$ squares as fit: two, leaving a $132 \\times 540$ strip. Cut that strip into $132 \\times 132$ squares: four, leaving a $132 \\times 12$ strip, which splits exactly into $12 \\times 12$ squares. Every square size along the way is a multiple of the last one, so the $12 \\times 12$ square tiles the whole rectangle, and no larger square can. Each division in the algorithm is one round of cutting.',
        },
        pitfalls: [
          {
            title: 'Dividing the original number again',
            wrong: 'after $1212 = 540 \\cdot 2 + 132$, divide $1212$ by $132$',
            right: 'divide the old divisor by the remainder: $540 = 132 \\cdot 4 + 12$',
          },
          {
            title: 'Reporting the last quotient',
            wrong: '$36 = 12 \\cdot 3 + 0$, so $\\gcd(84, 36) = 3$',
            right: 'the GCD is the divisor in that row: $\\gcd(84, 36) = 12$',
          },
          {
            title: 'Answering 0',
            wrong: 'the last remainder is $0$, so the GCD is $0$',
            right: 'the answer is the last nonzero remainder, $12$',
          },
        ],
        related: ['gcd-prime-factorization', 'simplify-fractions', 'lcm'],
        builtOn: [
          { label: 'Euclidean algorithm', url: ruleUrl('lesson.ar.divisibility.gcd.5') },
          { label: 'Euclidean algorithm step by step', url: ruleUrl('lesson.ar.divisibility.gcd.6') },
          { label: 'How to compute a remainder', url: ruleUrl('lesson.ar.modulo.51') },
        ],
      },
    },
    {
      id: 'lcm',
      slug: 'lcm',
      name: 'How to find the least common multiple',
      description: 'Find the smallest number that two or more numbers divide: take every prime with its larger exponent, or use $\\operatorname{lcm}(a, b) = \\frac{a \\cdot b}{\\gcd(a, b)}$.',
      uses: ['prime factorization', 'maximum exponent', 'gcd'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Least Common Multiple (LCM) | Learn Math Class',
        description: 'Find the LCM of two or more numbers: factor them, take every prime with its larger exponent, or divide the product by the GCD. Worked examples and mistakes.',
        keywords: ['how to find lcm', 'least common multiple', 'lcm by prime factorization', 'lcm using gcd', 'lcm examples'],
      },
      page: {
        h1: 'How to Find the Least Common Multiple',
        lead:
          'The least common multiple is the smallest positive number that all the given numbers divide. Take every prime that appears in any of the numbers, each with its largest exponent; for two numbers you can also divide their product by their GCD.',
        recognize:
          'Wording such as "least common multiple", "smallest number divisible by both", "when do the two events happen together again", or a common denominator for fractions. Typical inputs: $\\operatorname{lcm}(4, 6)$, $\\operatorname{lcm}(24, 90)$, $\\operatorname{lcm}(12, 15, 20)$. Test: if you need a number that each input goes into, it is an LCM; if you need a number that goes into each input, it is a GCD.',
        recognizeNote: `The LCM and the notation $\\operatorname{lcm}(a, b)$ are defined in the ${link('lesson.ar.divisibility.lcm', 'LCM lesson')}.`,
        methods: [
          {
            name: 'Prime factorization',
            tag: 'usual',
            preferred: true,
            formula: '\\operatorname{lcm}(a, b) = \\prod p^{\\max(\\alpha_p, \\beta_p)}',
            body: `Every prime of either number, with the ${link('lesson.ar.divisibility.lcm.4', 'larger exponent')}; works for any number of inputs.`,
          },
          {
            name: 'Using the GCD',
            tag: 'two numbers',
            formula: '\\operatorname{lcm}(a, b) = \\dfrac{a \\cdot b}{\\gcd(a, b)}',
            body: `The ${link('lesson.ar.divisibility.lcm.6', 'GCD–LCM relationship')}; fast when the GCD is easy, for example from the Euclidean algorithm.`,
          },
          {
            name: 'Listing multiples',
            tag: 'small numbers',
            formula: '\\text{first number in both lists of multiples}',
            body: `List multiples of each number until one appears in every list (${link('lesson.ar.divisibility.lcm.3', 'listing multiples')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\operatorname{lcm}(24, 90)$',
          items: [
            {
              title: 'Factor each number into primes.',
              body: `Use [prime factorization](!${HUB}/prime-factorization) on each number.`,
              state: '$24 = 2^3 \\cdot 3$, $\\; 90 = 2 \\cdot 3^2 \\cdot 5$',
            },
            {
              title: 'List every prime that appears in any of them.',
              body: 'A multiple of both numbers must contain all the primes of each.',
              state: '$2$, $3$, $5$',
            },
            {
              title: 'Take the larger exponent of each prime.',
              body: 'The LCM needs as many copies of each prime as the number that has the most of it.',
              state: '$2^3 \\cdot 3^2 \\cdot 5$',
            },
            {
              title: 'Multiply, and check with the GCD.',
              body: 'For two numbers, $\\operatorname{lcm}(a, b) \\cdot \\gcd(a, b) = a \\cdot b$.',
              state: '$\\operatorname{lcm}(24, 90) = 360$; check: $\\frac{24 \\cdot 90}{6} = 360$',
            },
          ],
        },
        examples: [
          {
            title: 'small numbers',
            badge: 'listing',
            lines: [
              { math: 'multiples of $4$: $4, 8, 12, \\ldots$', why: 'list the first few' },
              { math: 'multiples of $6$: $6, 12, \\ldots$', why: 'stop at the first match' },
              { math: '$\\operatorname{lcm}(4, 6) = 12$', why: 'first common multiple', answer: true },
            ],
          },
          {
            title: 'with the GCD',
            badge: 'formula',
            lines: [
              { math: '$\\gcd(18, 30) = 6$', why: 'shared $2 \\cdot 3$' },
              { math: '$\\operatorname{lcm}(18, 30) = \\dfrac{18 \\cdot 30}{6} = \\dfrac{540}{6}$', why: 'product over GCD' },
              { math: '$\\operatorname{lcm}(18, 30) = 90$', why: 'divide', answer: true },
            ],
          },
          {
            title: 'three numbers',
            badge: 'three inputs',
            lines: [
              { math: '$12 = 2^2 \\cdot 3$, $\\; 15 = 3 \\cdot 5$, $\\; 20 = 2^2 \\cdot 5$', why: 'factor all three' },
              { math: '$2^2 \\cdot 3 \\cdot 5$', why: 'largest exponent of each prime' },
              { math: '$\\operatorname{lcm}(12, 15, 20) = 60$', why: 'multiply', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your answer with the [LCM calculator](!/arithmetic/calculators/lcm-calculator).',
        visual: {
          caption:
            'Picture two runners on a track, one finishing a lap every $24$ seconds and one every $90$ seconds. They pass the start line together again at the first time that is a whole number of laps for both, and that time must contain every prime block of $24$ and every prime block of $90$. Using the larger stack of each prime is just enough to cover both numbers, so $360$ seconds is the first meeting.',
        },
        pitfalls: [
          {
            title: 'Taking the smaller exponent',
            wrong: '$\\operatorname{lcm}(24, 90) = 2 \\cdot 3 = 6$',
            right: '$6$ is the GCD; the LCM takes the larger exponents: $2^3 \\cdot 3^2 \\cdot 5 = 360$',
          },
          {
            title: 'Multiplying the numbers',
            wrong: '$\\operatorname{lcm}(18, 30) = 18 \\cdot 30 = 540$',
            right: 'divide by the GCD: $\\frac{540}{6} = 90$',
            note: `The product is the LCM only when the numbers are ${link('lesson.ar.divisibility.lcm.7', 'coprime')}.`,
          },
          {
            title: 'Dropping a prime that only one number has',
            wrong: '$\\operatorname{lcm}(24, 90) = 2^3 \\cdot 3^2 = 72$',
            right: 'include the $5$ from $90$: $2^3 \\cdot 3^2 \\cdot 5 = 360$',
          },
        ],
        related: ['gcd-prime-factorization', 'add-subtract-fractions', 'prime-factorization'],
        builtOn: [
          { label: 'What is LCM?', url: ruleUrl('lesson.ar.divisibility.lcm.1') },
          { label: 'LCM by prime factorization', url: ruleUrl('lesson.ar.divisibility.lcm.4') },
          { label: 'The GCD–LCM relationship', url: ruleUrl('lesson.ar.divisibility.lcm.6') },
          { label: 'LCM of more than two numbers', url: ruleUrl('lesson.ar.divisibility.lcm.9') },
        ],
      },
    },
    {
      id: 'simplify-fractions',
      slug: 'simplify-fractions',
      name: 'How to simplify fractions',
      description: 'Reduce a fraction to lowest terms: divide the numerator and the denominator by their GCD, as in $\\frac{84}{126} = \\frac{2}{3}$.',
      uses: ['gcd', 'divisibility rules', 'equivalent fractions'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Simplify Fractions (Lowest Terms) | Learn Math Class',
        description: 'Simplify fractions to lowest terms: spot common factors with divisibility rules, divide top and bottom by the GCD, check nothing is left. Examples and mistakes.',
        keywords: ['how to simplify fractions', 'reduce fractions to lowest terms', 'simplest form fraction', 'simplifying fractions examples', 'reduce fraction using gcd'],
      },
      page: {
        h1: 'How to Simplify Fractions',
        lead:
          'Dividing the numerator and the denominator by the same number gives an equal fraction. Divide both by their GCD and no common factor is left: the fraction is in simplest form.',
        recognize:
          'Wording such as "reduce", "lowest terms", "simplest form", or the last step of any fraction calculation. Typical inputs: $\\frac{18}{24}$, $\\frac{150}{225}$, $\\frac{925}{1961}$. Test: if the top and bottom are both even, both have digit sums divisible by $3$, or both end in $0$ or $5$, the fraction can still be reduced.',
        recognizeNote: `Equivalent fractions and simplest form are explained in ${link('lesson.ar.fractions.equivalent.3', 'simplifying fractions')} in the equivalent fractions lesson.`,
        methods: [
          {
            name: 'Divide by the GCD',
            tag: 'usual',
            preferred: true,
            formula: '\\dfrac{a}{b} = \\dfrac{a \\div g}{b \\div g}, \\quad g = \\gcd(a, b)',
            body: `One division finishes the job (${link('lesson.ar.divisibility.gcd.10', 'applications of GCD')}).`,
          },
          {
            name: 'Cancel in stages',
            tag: 'mental',
            formula: '\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}, \\ k \\text{ any common factor}',
            body: 'Divide by any common factor you spot, such as $2$, $3$ or $5$, and repeat until none is left.',
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{84}{126}$',
          items: [
            {
              title: 'Check quickly for a common factor.',
              body: 'Both numbers are even and their digit sums, $12$ and $9$, are divisible by $3$, so $6$ divides both.',
              state: 'not in simplest form',
              atomic: 'divisibility-by-6',
            },
            {
              title: 'Find the GCD of the top and bottom.',
              body: `Use [prime factorization](!${HUB}/gcd-prime-factorization) or the [Euclidean algorithm](!${HUB}/gcd-euclidean-algorithm).`,
              state: '$\\gcd(84, 126) = 42$',
            },
            {
              title: 'Divide both by the GCD.',
              body: 'Dividing top and bottom by the same number does not change the value.',
              state: '$\\dfrac{84 \\div 42}{126 \\div 42} = \\dfrac{2}{3}$',
            },
            {
              title: 'Check that no common factor is left.',
              body: 'The new numerator and denominator must be coprime.',
              state: '$\\gcd(2, 3) = 1$',
            },
          ],
        },
        examples: [
          {
            title: 'one division',
            badge: 'GCD',
            lines: [
              { math: '$\\gcd(18, 24) = 6$', why: 'largest shared factor' },
              { math: '$\\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$', why: 'divide top and bottom', answer: true },
            ],
          },
          {
            title: 'in stages',
            badge: 'mental',
            lines: [
              { math: '$\\dfrac{150}{225} = \\dfrac{30}{45}$', why: 'both end in $0$ or $5$' },
              { math: '$\\dfrac{30}{45} = \\dfrac{6}{9}$', why: 'divide by $5$ again' },
              { math: '$\\dfrac{6}{9} = \\dfrac{2}{3}$', why: 'digit sums: divide by $3$', answer: true },
            ],
          },
          {
            title: 'no small common factor',
            badge: 'Euclid',
            lines: [
              { math: '$\\dfrac{925}{1961}$: digit sums $16$ and $17$, $1961$ odd', why: 'no $2$, $3$ or $5$ in both' },
              { math: '$1961 = 925 \\cdot 2 + 111$, $\\; 925 = 111 \\cdot 8 + 37$', why: 'Euclidean algorithm' },
              { math: '$111 = 37 \\cdot 3 + 0$, so $\\gcd = 37$', why: 'last nonzero remainder' },
              { math: '$\\dfrac{925 \\div 37}{1961 \\div 37} = \\dfrac{25}{53}$', why: 'divide by the GCD', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'Picture the fraction as a bar cut into equal pieces, some of them shaded. Grouping the pieces into equal bundles gives fewer, larger pieces with the same shaded length: $84$ of $126$ pieces, bundled $42$ at a time, is $2$ of $3$ bundles. The GCD is the largest bundle size that fits both the shaded part and the whole bar evenly, so it gives the fewest pieces possible.',
        },
        pitfalls: [
          {
            title: 'Stopping at a smaller common factor',
            wrong: '$\\dfrac{18}{24} = \\dfrac{9}{12}$, done',
            right: '$9$ and $12$ still share $3$; dividing by $\\gcd(18, 24) = 6$ gives $\\dfrac{3}{4}$',
          },
          {
            title: 'Crossing out digits',
            wrong: '$\\dfrac{13}{35} = \\dfrac{1}{5}$ by crossing out the $3$s',
            right: '$\\gcd(13, 35) = 1$, so $\\dfrac{13}{35}$ is already in simplest form',
          },
          {
            title: 'Subtracting instead of dividing',
            wrong: '$\\dfrac{6}{9} = \\dfrac{6 - 3}{9 - 3} = \\dfrac{3}{6}$',
            right: '$\\dfrac{6 \\div 3}{9 \\div 3} = \\dfrac{2}{3}$',
          },
          {
            title: 'Cancelling one term of a sum',
            wrong: '$\\dfrac{2 + 6}{2} = 6$',
            right: '$\\dfrac{2 + 6}{2} = \\dfrac{8}{2} = 4$; cancel only common factors',
          },
        ],
        related: ['gcd-euclidean-algorithm', 'gcd-prime-factorization', 'multiply-fractions'],
        builtOn: [
          { label: 'Simplifying fractions', url: ruleUrl('lesson.ar.fractions.equivalent.3') },
          { label: 'Simplest form', url: ruleUrl('lesson.ar.fractions.equivalent.4') },
          { label: 'Applications of GCD', url: ruleUrl('lesson.ar.divisibility.gcd.10') },
        ],
      },
    },
    {
      id: 'compare-fractions',
      slug: 'compare-fractions',
      name: 'How to compare fractions',
      description: 'Decide which fraction is larger: compare numerators over a common denominator, or cross-multiply, $\\frac{a}{b} > \\frac{c}{d}$ when $ad > bc$.',
      uses: ['cross-multiplication', 'common denominator', 'LCD'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compare Fractions (Cross-Multiplication) | Learn Math Class',
        description: 'Compare fractions step by step: use same denominators or numerators, cross-multiply, or order several with a common denominator. Examples and common mistakes.',
        keywords: ['how to compare fractions', 'comparing fractions cross multiplication', 'which fraction is bigger', 'ordering fractions', 'compare fractions examples'],
      },
      page: {
        h1: 'How to Compare Fractions',
        lead:
          'Two fractions are easy to compare once they share a denominator: the larger numerator wins. Cross-multiplication is a shortcut that gives those numerators directly.',
        recognize:
          'Wording such as "which is larger", "order from least to greatest", or a blank between two fractions to fill with $<$, $>$ or $=$. Typical inputs: $\\frac{3}{7}$ and $\\frac{3}{5}$, $\\frac{5}{8}$ and $\\frac{7}{11}$, a list like $\\frac{2}{3}, \\frac{5}{8}, \\frac{7}{12}$. Test: same denominator, compare numerators; same numerator, the smaller denominator wins; otherwise cross-multiply or use a common denominator.',
        recognizeNote: `All the comparison methods are collected in the ${link('lesson.ar.fractions.comparing', 'comparing fractions')} lesson.`,
        methods: [
          {
            name: 'Cross-multiplication',
            tag: 'two fractions',
            preferred: true,
            formula: '\\dfrac{a}{b} > \\dfrac{c}{d} \\iff a \\cdot d > b \\cdot c \\quad (b, d > 0)',
            body: `Each cross product stays on the side of its numerator (${link('lesson.ar.fractions.comparing.4', 'cross-multiplication method')}).`,
          },
          {
            name: 'Common denominator',
            tag: 'several fractions',
            formula: '\\dfrac{a}{b} = \\dfrac{a \\cdot (L / b)}{L}, \\quad L = \\operatorname{lcm}(\\text{denominators})',
            body: `Rewrite every fraction over the LCD and compare numerators (${link('lesson.ar.fractions.comparing.3', 'common denominator method')}); best for ordering a list.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{5}{8}$ and $\\dfrac{7}{11}$',
          items: [
            {
              title: 'Look for a shortcut.',
              body: 'Equal denominators or equal numerators decide at once. Here neither matches.',
              state: 'no shortcut',
            },
            {
              title: 'Multiply each numerator by the other denominator.',
              body: 'Both denominators are positive, so the cross products can be compared directly.',
              state: '$5 \\cdot 11 = 55$, $\\; 8 \\cdot 7 = 56$',
            },
            {
              title: 'Keep each product beside its own numerator.',
              body: 'The product $55$ came from the numerator $5$, so it belongs to $\\frac{5}{8}$; $56$ belongs to $\\frac{7}{11}$.',
              state: '$55 < 56$',
            },
            {
              title: 'Write the comparison.',
              body: 'The fraction with the larger cross product is the larger fraction.',
              state: '$\\dfrac{5}{8} < \\dfrac{7}{11}$',
            },
          ],
        },
        examples: [
          {
            title: 'same numerator',
            badge: 'shortcut',
            lines: [
              { math: '$\\dfrac{3}{7}$ vs $\\dfrac{3}{5}$', why: 'three pieces each' },
              { math: 'fifths are larger than sevenths', why: 'fewer pieces per whole' },
              { math: '$\\dfrac{3}{5} > \\dfrac{3}{7}$', why: 'smaller denominator wins', answer: true },
            ],
          },
          {
            title: 'cross-multiply',
            badge: 'two fractions',
            lines: [
              { math: '$\\dfrac{7}{9}$ vs $\\dfrac{4}{5}$', why: 'no shortcut' },
              { math: '$7 \\cdot 5 = 35$, $\\; 9 \\cdot 4 = 36$', why: 'cross products' },
              { math: '$\\dfrac{7}{9} < \\dfrac{4}{5}$', why: '$35 < 36$', answer: true },
            ],
          },
          {
            title: 'ordering three fractions',
            badge: 'LCD',
            lines: [
              { math: '$\\dfrac{2}{3}, \\dfrac{5}{8}, \\dfrac{7}{12}$: LCD $= 24$', why: '$\\operatorname{lcm}(3, 8, 12)$' },
              { math: '$\\dfrac{16}{24}, \\dfrac{15}{24}, \\dfrac{14}{24}$', why: 'rewrite each' },
              { math: '$\\dfrac{7}{12} < \\dfrac{5}{8} < \\dfrac{2}{3}$', why: 'order the numerators', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'Picture two equal bars, one cut into $8$ parts with $5$ shaded and one cut into $11$ parts with $7$ shaded. The parts have different sizes, so the counts cannot be compared yet. Cut both bars into $88$ equal parts: the first now has $55$ shaded parts and the second $56$. Cross-multiplication computes exactly these two counts without drawing the common cut.',
        },
        pitfalls: [
          {
            title: 'Bigger denominator, bigger fraction',
            wrong: '$\\dfrac{1}{8} > \\dfrac{1}{6}$ because $8 > 6$',
            right: '$\\dfrac{1}{8} < \\dfrac{1}{6}$: eighths are smaller pieces than sixths',
          },
          {
            title: 'Reading the cross products backwards',
            wrong: '$\\dfrac{5}{8}$ vs $\\dfrac{2}{3}$: $8 \\cdot 2 = 16$ goes with $\\dfrac{5}{8}$, so $\\dfrac{5}{8}$ is larger',
            right: '$5 \\cdot 3 = 15$ belongs to $\\dfrac{5}{8}$ and $16$ to $\\dfrac{2}{3}$, so $\\dfrac{2}{3} > \\dfrac{5}{8}$',
          },
          {
            title: 'Comparing numerators only',
            wrong: '$\\dfrac{4}{9} > \\dfrac{3}{5}$ because $4 > 3$',
            right: '$4 \\cdot 5 = 20 < 27 = 9 \\cdot 3$, so $\\dfrac{4}{9} < \\dfrac{3}{5}$',
          },
        ],
        related: ['add-subtract-fractions', 'lcm', 'mixed-numbers'],
        builtOn: [
          { label: 'Same numerator', url: ruleUrl('lesson.ar.fractions.comparing.2') },
          { label: 'Common denominator method', url: ruleUrl('lesson.ar.fractions.comparing.3') },
          { label: 'Cross-multiplication method', url: ruleUrl('lesson.ar.fractions.comparing.4') },
          { label: 'Ordering multiple fractions', url: ruleUrl('lesson.ar.fractions.comparing.8') },
        ],
      },
    },
    {
      id: 'add-subtract-fractions',
      slug: 'add-subtract-fractions',
      name: 'How to add and subtract fractions',
      description: 'Rewrite the fractions over the least common denominator, add or subtract the numerators, keep the denominator, and simplify.',
      uses: ['LCD', 'equivalent fractions', 'simplifying'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Add and Subtract Fractions | Learn Math Class',
        description: 'Add and subtract fractions with unlike denominators: find the LCD, rewrite each fraction, combine numerators, simplify. Mixed numbers, examples and mistakes.',
        keywords: ['how to add fractions', 'how to subtract fractions', 'adding fractions with different denominators', 'least common denominator', 'subtracting mixed numbers'],
      },
      page: {
        h1: 'How to Add and Subtract Fractions',
        lead:
          'Fractions can be added only when they count pieces of the same size. Rewrite them over a common denominator, preferably the least one, then add or subtract the numerators and keep the denominator.',
        recognize:
          'A sum or difference of fractions or mixed numbers: $\\frac{5}{9} - \\frac{2}{9}$, $\\frac{5}{6} + \\frac{3}{8}$, $4\\tfrac{1}{3} - 1\\tfrac{3}{4}$, $3 - \\frac{2}{5}$. Test: if the denominators are equal, combine the numerators at once; if not, convert first.',
        recognizeNote: `The full set of cases is in the ${link('lesson.ar.fractions.adding-subtracting', 'adding and subtracting fractions')} lesson.`,
        methods: [
          {
            name: 'Least common denominator',
            tag: 'usual',
            preferred: true,
            formula: '\\dfrac{a}{b} \\pm \\dfrac{c}{d} = \\dfrac{a \\cdot \\frac{L}{b} \\pm c \\cdot \\frac{L}{d}}{L}, \\quad L = \\operatorname{lcm}(b, d)',
            body: `Keeps the numbers small (${link('lesson.ar.fractions.adding-subtracting.3', 'finding a common denominator')}); find $L$ with the [LCM method](!${HUB}/lcm).`,
          },
          {
            name: 'Product of the denominators',
            tag: 'always works',
            formula: '\\dfrac{a}{b} \\pm \\dfrac{c}{d} = \\dfrac{a d \\pm b c}{b d}',
            body: 'No LCD needed, but the numbers grow and the result usually needs simplifying.',
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{5}{6} + \\dfrac{3}{8}$',
          items: [
            {
              title: 'Find the least common denominator.',
              body: 'It is the LCM of the denominators.',
              state: '$\\operatorname{lcm}(6, 8) = 24$',
            },
            {
              title: 'Rewrite each fraction over the LCD.',
              body: `Multiply top and bottom by the same factor, $\\frac{24}{6} = 4$ and $\\frac{24}{8} = 3$ (${link('lesson.ar.fractions.adding-subtracting.4', 'converting to a common denominator')}).`,
              state: '$\\dfrac{20}{24} + \\dfrac{9}{24}$',
            },
            {
              title: 'Add or subtract the numerators; keep the denominator.',
              body: 'The pieces are now the same size, so count them.',
              state: '$\\dfrac{29}{24}$',
            },
            {
              title: 'Simplify, and convert if needed.',
              body: '$\\gcd(29, 24) = 1$, so only the conversion to a mixed number is left.',
              state: '$\\dfrac{29}{24} = 1\\tfrac{5}{24}$',
            },
          ],
        },
        examples: [
          {
            title: 'same denominator',
            badge: 'like fractions',
            lines: [
              { math: '$\\dfrac{5}{9} - \\dfrac{2}{9} = \\dfrac{3}{9}$', why: 'subtract the numerators' },
              { math: '$\\dfrac{3}{9} = \\dfrac{1}{3}$', why: 'simplify by $3$', answer: true },
            ],
          },
          {
            title: 'different denominators',
            badge: 'LCD',
            lines: [
              { math: '$\\dfrac{7}{10} - \\dfrac{4}{15}$: LCD $= 30$', why: '$\\operatorname{lcm}(10, 15)$' },
              { math: '$\\dfrac{21}{30} - \\dfrac{8}{30}$', why: 'multiply by $3$ and by $2$' },
              { math: '$\\dfrac{13}{30}$', why: 'subtract; already simplest', answer: true },
            ],
          },
          {
            title: 'mixed numbers with borrowing',
            badge: 'borrow',
            lines: [
              { math: '$4\\tfrac{1}{3} - 1\\tfrac{3}{4} = 4\\tfrac{4}{12} - 1\\tfrac{9}{12}$', why: 'LCD $12$' },
              { math: '$3\\tfrac{16}{12} - 1\\tfrac{9}{12}$', why: '$\\frac{4}{12} < \\frac{9}{12}$: borrow $1 = \\frac{12}{12}$' },
              { math: '$2\\tfrac{7}{12}$', why: 'subtract wholes and fractions', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'Picture thirds and quarters of the same bar. A third and a quarter are different sizes, so "one plus one" pieces means nothing until both are cut into a size that fits each: twelfths. A third is $4$ twelfths and a quarter is $3$ twelfths, and now the pieces can be counted together. The common denominator is that shared piece size; the least one keeps the count smallest.',
        },
        pitfalls: [
          {
            title: 'Adding the denominators',
            wrong: '$\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{2}{5}$',
            right: '$\\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}$',
          },
          {
            title: 'Changing only the denominator',
            wrong: '$\\dfrac{2}{3} + \\dfrac{1}{4} = \\dfrac{2}{12} + \\dfrac{1}{12} = \\dfrac{3}{12}$',
            right: 'scale the numerators too: $\\dfrac{8}{12} + \\dfrac{3}{12} = \\dfrac{11}{12}$',
          },
          {
            title: 'Subtracting the fractions the wrong way round',
            wrong: '$6\\tfrac{1}{5} - 3\\tfrac{4}{5} = 3\\tfrac{3}{5}$',
            right: `borrow first: $5\\tfrac{6}{5} - 3\\tfrac{4}{5} = 2\\tfrac{2}{5}$ (${link('lesson.ar.fractions.adding-subtracting.6', 'subtracting mixed numbers')})`,
          },
        ],
        related: ['lcm', 'mixed-numbers', 'fraction-word-problems'],
        builtOn: [
          { label: 'Finding a common denominator', url: ruleUrl('lesson.ar.fractions.adding-subtracting.3') },
          { label: 'Converting to a common denominator', url: ruleUrl('lesson.ar.fractions.adding-subtracting.4') },
          { label: 'Subtracting mixed numbers', url: ruleUrl('lesson.ar.fractions.adding-subtracting.6') },
        ],
      },
    },
    {
      id: 'multiply-fractions',
      slug: 'multiply-fractions',
      name: 'How to multiply fractions',
      description: 'Multiply numerators together and denominators together, $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$, cancelling common factors first.',
      uses: ['cross-canceling', 'improper fractions', 'simplifying'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Multiply Fractions (with Cross-Canceling) | Learn Math Class',
        description: 'Multiply fractions step by step: rewrite whole and mixed numbers, cancel common factors across, multiply straight across, simplify. Examples and mistakes.',
        keywords: ['how to multiply fractions', 'multiplying fractions', 'cross canceling fractions', 'multiplying mixed numbers', 'fraction of a number'],
      },
      page: {
        h1: 'How to Multiply Fractions',
        lead:
          'Multiplying fractions needs no common denominator: multiply the numerators together and the denominators together. Cancel common factors across the fractions first so the numbers stay small.',
        recognize:
          'A product of fractions, or a fraction "of" a quantity: $\\frac{2}{3} \\times \\frac{4}{5}$, $\\frac{3}{4}$ of $20$, $2\\tfrac{1}{4} \\times 1\\tfrac{1}{3}$. Test: the word "of" between a fraction and an amount means multiply.',
        recognizeNote: `The rule and its special cases are in the ${link('lesson.ar.fractions.multiplying', 'multiplying fractions')} lesson.`,
        methods: [
          {
            name: 'Cancel first, then multiply',
            tag: 'usual',
            preferred: true,
            formula: '\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\cdot c}{b \\cdot d}',
            body: `Divide any numerator and any denominator by a common factor before multiplying (${link('lesson.ar.fractions.multiplying.3', 'cross-canceling')}).`,
          },
          {
            name: 'Multiply, then simplify',
            tag: 'direct',
            formula: '\\dfrac{a \\cdot c}{b \\cdot d} = \\dfrac{(a c) \\div g}{(b d) \\div g}',
            body: `Gives the same answer, but you then [simplify](!${HUB}/simplify-fractions) larger numbers.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{9}{14} \\times \\dfrac{7}{12}$',
          items: [
            {
              title: 'Write every factor as a fraction.',
              body: 'A whole number $n$ becomes $\\frac{n}{1}$; a mixed number becomes an improper fraction.',
              state: 'both factors are already fractions',
            },
            {
              title: 'Cancel common factors across.',
              body: 'Pair any numerator with any denominator: $9$ and $12$ share $3$, and $7$ and $14$ share $7$.',
              state: '$\\dfrac{3}{2} \\times \\dfrac{1}{4}$',
            },
            {
              title: 'Multiply straight across.',
              body: 'Numerator times numerator, denominator times denominator.',
              state: '$\\dfrac{3 \\cdot 1}{2 \\cdot 4} = \\dfrac{3}{8}$',
            },
            {
              title: 'Check that the result is in simplest form.',
              body: 'If you cancelled fully, nothing is left to reduce.',
              state: '$\\gcd(3, 8) = 1$: $\\dfrac{3}{8}$',
            },
          ],
        },
        examples: [
          {
            title: 'two proper fractions',
            badge: 'basic',
            lines: [
              { math: '$\\dfrac{2}{3} \\times \\dfrac{4}{5} = \\dfrac{2 \\cdot 4}{3 \\cdot 5}$', why: 'nothing to cancel' },
              { math: '$\\dfrac{8}{15}$', why: 'multiply across', answer: true },
            ],
          },
          {
            title: 'a fraction of a number',
            badge: '"of"',
            lines: [
              { math: '$\\dfrac{3}{4}$ of $20 = \\dfrac{3}{4} \\times \\dfrac{20}{1}$', why: '"of" means multiply' },
              { math: '$\\dfrac{3}{1} \\times \\dfrac{5}{1}$', why: 'cancel $4$ into $20$' },
              { math: '$15$', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'mixed numbers',
            badge: 'convert first',
            lines: [
              { math: '$2\\tfrac{1}{4} \\times 1\\tfrac{1}{3} = \\dfrac{9}{4} \\times \\dfrac{4}{3}$', why: 'improper fractions' },
              { math: '$\\dfrac{3}{1} \\times \\dfrac{1}{1}$', why: 'cancel $4$ with $4$, $9$ with $3$' },
              { math: '$3$', why: 'multiply', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'Picture a square of area $1$. Shade $\\frac{2}{3}$ of it with vertical cuts, then take $\\frac{4}{5}$ of the shaded part with horizontal cuts. The square is now a grid of $3 \\cdot 5 = 15$ small rectangles, and the doubly shaded region covers $2 \\cdot 4 = 8$ of them. That is why the denominators multiply to give the grid size and the numerators multiply to give the shaded count.',
        },
        pitfalls: [
          {
            title: 'Multiplying the parts of mixed numbers separately',
            wrong: '$2\\tfrac{1}{4} \\times 1\\tfrac{1}{3} = 2\\tfrac{1}{12}$',
            right: `convert first: $\\dfrac{9}{4} \\times \\dfrac{4}{3} = 3$ (${link('lesson.ar.fractions.multiplying.4', 'multiplying mixed numbers')})`,
          },
          {
            title: 'Cancelling a numerator with a numerator',
            wrong: '$\\dfrac{4}{5} \\times \\dfrac{2}{7} = \\dfrac{2}{5} \\times \\dfrac{1}{7} = \\dfrac{2}{35}$',
            right: 'cancel only a top with a bottom: $\\dfrac{4 \\cdot 2}{5 \\cdot 7} = \\dfrac{8}{35}$',
          },
          {
            title: 'Multiplying a whole number into both parts',
            wrong: '$5 \\times \\dfrac{2}{3} = \\dfrac{10}{15}$',
            right: '$\\dfrac{5}{1} \\times \\dfrac{2}{3} = \\dfrac{10}{3}$',
          },
        ],
        related: ['divide-fractions', 'simplify-fractions', 'fraction-word-problems'],
        builtOn: [
          { label: 'Multiplying fractions: basic rule', url: ruleUrl('lesson.ar.fractions.multiplying.1') },
          { label: 'Cross-canceling', url: ruleUrl('lesson.ar.fractions.multiplying.3') },
          { label: 'Multiplying mixed numbers', url: ruleUrl('lesson.ar.fractions.multiplying.4') },
          { label: 'The word "of" means multiply', url: ruleUrl('lesson.ar.fractions.multiplying.6') },
        ],
      },
    },
    {
      id: 'divide-fractions',
      slug: 'divide-fractions',
      name: 'How to divide fractions',
      description: 'Keep the first fraction, change $\\div$ to $\\times$, flip the second fraction, then multiply: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.',
      uses: ['reciprocal', 'keep change flip', 'multiplying fractions'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Divide Fractions (Keep, Change, Flip) | Learn Math Class',
        description: 'Divide fractions with keep, change, flip: rewrite whole and mixed numbers, multiply by the reciprocal of the divisor, simplify. Worked examples and mistakes.',
        keywords: ['how to divide fractions', 'keep change flip', 'dividing fractions by whole numbers', 'dividing mixed numbers', 'reciprocal of a fraction'],
      },
      page: {
        h1: 'How to Divide Fractions',
        lead:
          'Dividing by a fraction is the same as multiplying by its reciprocal. Keep the first fraction, change division to multiplication, flip the second fraction, and multiply.',
        recognize:
          'A quotient with a fraction in it: $\\frac{3}{4} \\div \\frac{2}{5}$, $6 \\div \\frac{3}{4}$, $\\frac{5}{6} \\div 10$, $3\\tfrac{1}{3} \\div 1\\tfrac{1}{9}$. Word clues: "how many pieces of size … fit into …", "split equally into …". Test: the divisor is the number after the $\\div$ sign; only that one gets flipped.',
        recognizeNote: `Reciprocals and the division rule are explained in the ${link('lesson.ar.fractions.dividing', 'dividing fractions')} lesson.`,
        methods: [
          {
            name: 'Keep, change, flip',
            tag: 'usual',
            preferred: true,
            formula: '\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}',
            body: `Multiply by the ${link('lesson.ar.fractions.dividing.1', 'reciprocal')} of the divisor (${link('lesson.ar.fractions.dividing.3', 'why this works')}).`,
          },
          {
            name: 'Common denominator',
            tag: 'alternative',
            formula: '\\dfrac{a}{n} \\div \\dfrac{c}{n} = \\dfrac{a}{c}',
            body: 'Over a common denominator, the quotient is the quotient of the numerators: $\\frac{4}{9} \\div \\frac{2}{9} = \\frac{4}{2} = 2$.',
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{5}{6} \\div \\dfrac{10}{9}$',
          items: [
            {
              title: 'Write every number as a fraction.',
              body: 'A whole number $n$ is $\\frac{n}{1}$; a mixed number becomes an improper fraction.',
              state: 'both are already fractions',
            },
            {
              title: 'Keep the first fraction and change ÷ to ×.',
              body: 'The dividend stays exactly as it is.',
              state: '$\\dfrac{5}{6} \\times \\ldots$',
            },
            {
              title: 'Flip the second fraction.',
              body: 'Swap the numerator and denominator of the divisor only.',
              state: '$\\dfrac{5}{6} \\times \\dfrac{9}{10}$',
            },
            {
              title: 'Cancel and multiply.',
              body: `Now it is a [fraction product](!${HUB}/multiply-fractions): $5$ cancels into $10$ and $3$ into both $6$ and $9$.`,
              state: '$\\dfrac{1}{2} \\times \\dfrac{3}{2} = \\dfrac{3}{4}$',
            },
          ],
        },
        examples: [
          {
            title: 'two fractions',
            badge: 'basic',
            lines: [
              { math: '$\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2}$', why: 'keep, change, flip' },
              { math: '$\\dfrac{15}{8}$', why: 'multiply across' },
              { math: '$1\\tfrac{7}{8}$', why: 'as a mixed number', answer: true },
            ],
          },
          {
            title: 'a whole number by a fraction',
            badge: 'whole number',
            lines: [
              { math: '$6 \\div \\dfrac{3}{4} = \\dfrac{6}{1} \\times \\dfrac{4}{3}$', why: 'write $6$ as $\\frac{6}{1}$, flip' },
              { math: '$\\dfrac{2}{1} \\times \\dfrac{4}{1}$', why: 'cancel $3$ into $6$' },
              { math: '$8$', why: 'eight three-quarters fit in $6$', answer: true },
            ],
          },
          {
            title: 'mixed numbers',
            badge: 'convert first',
            lines: [
              { math: '$3\\tfrac{1}{3} \\div 1\\tfrac{1}{9} = \\dfrac{10}{3} \\div \\dfrac{10}{9}$', why: 'improper fractions' },
              { math: '$\\dfrac{10}{3} \\times \\dfrac{9}{10}$', why: 'flip the divisor' },
              { math: '$3$', why: 'cancel $10$, then $\\frac{9}{3}$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'Division asks how many copies of the divisor fit into the dividend. How many quarters fit into $3$? Each whole holds $4$ quarters, so $3 \\div \\frac{1}{4} = 3 \\cdot 4 = 12$. In general, a piece of size $\\frac{c}{d}$ fits $\\frac{d}{c}$ times into one whole, so it fits $\\frac{a}{b} \\cdot \\frac{d}{c}$ times into $\\frac{a}{b}$. Flipping the divisor counts pieces per whole.',
        },
        pitfalls: [
          {
            title: 'Flipping the first fraction',
            wrong: '$\\dfrac{2}{3} \\div \\dfrac{4}{5} = \\dfrac{3}{2} \\times \\dfrac{4}{5} = \\dfrac{6}{5}$',
            right: 'flip the divisor: $\\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{5}{6}$',
          },
          {
            title: 'Forgetting to flip',
            wrong: '$\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3 \\cdot 2}{4 \\cdot 5} = \\dfrac{3}{10}$',
            right: '$\\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8}$',
          },
          {
            title: 'Multiplying by a whole-number divisor',
            wrong: '$\\dfrac{5}{6} \\div 10 = \\dfrac{5}{6} \\times 10 = \\dfrac{25}{3}$',
            right: `the reciprocal of $10$ is $\\frac{1}{10}$: $\\dfrac{5}{6} \\times \\dfrac{1}{10} = \\dfrac{1}{12}$ (${link('lesson.ar.fractions.dividing.4', 'dividing by whole numbers')})`,
          },
        ],
        related: ['multiply-fractions', 'complex-fractions', 'mixed-numbers'],
        builtOn: [
          { label: 'Reciprocals', url: ruleUrl('lesson.ar.fractions.dividing.1') },
          { label: 'Dividing fractions: basic rule', url: ruleUrl('lesson.ar.fractions.dividing.2') },
          { label: 'Why multiply by the reciprocal', url: ruleUrl('lesson.ar.fractions.dividing.3') },
          { label: 'Dividing mixed numbers', url: ruleUrl('lesson.ar.fractions.dividing.6') },
        ],
      },
    },
    {
      id: 'mixed-numbers',
      slug: 'mixed-numbers',
      name: 'How to work with mixed numbers',
      description: 'Convert between mixed numbers and improper fractions, $w\\tfrac{a}{b} = \\frac{wb + a}{b}$, and use the conversion to multiply and divide them.',
      uses: ['improper fractions', 'division with remainder', 'conversion'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Work with Mixed Numbers and Improper Fractions | Learn Math Class',
        description: 'Convert mixed numbers to improper fractions and back, then multiply and divide them: whole times denominator plus numerator, divide back. Examples, mistakes.',
        keywords: ['mixed numbers', 'convert mixed number to improper fraction', 'improper fraction to mixed number', 'multiplying mixed numbers', 'dividing mixed numbers'],
      },
      page: {
        h1: 'How to Work with Mixed Numbers',
        lead:
          'A mixed number is a whole number plus a proper fraction. To calculate with it, turn it into an improper fraction; to write the answer, divide the numerator by the denominator and turn the remainder back into a fraction.',
        recognize:
          'Mixed numbers such as $3\\tfrac{2}{5}$ or improper fractions such as $\\frac{17}{5}$; wording like "write as a mixed number" or "as an improper fraction"; any product or quotient with a mixed number in it. Test: a fraction whose numerator is at least its denominator is improper and can be written as a mixed number.',
        recognizeNote: `Mixed numbers, improper fractions and their notation are defined in the ${link('lesson.ar.fractions.mixed-numbers', 'mixed numbers lesson')}.`,
        methods: [
          {
            name: 'Mixed number to improper fraction',
            tag: 'to calculate',
            preferred: true,
            formula: 'w\\tfrac{a}{b} = \\dfrac{w \\cdot b + a}{b}',
            body: `Turn the wholes into pieces and add the extra pieces (${link('lesson.ar.fractions.mixed-numbers.4', 'converting mixed numbers to improper fractions')}).`,
          },
          {
            name: 'Improper fraction to mixed number',
            tag: 'to answer',
            formula: '\\dfrac{n}{b} = q\\tfrac{r}{b}, \\quad n = q \\cdot b + r, \\ 0 \\le r < b',
            body: `Divide with remainder: the quotient is the whole part (${link('lesson.ar.fractions.mixed-numbers.3', 'converting improper fractions to mixed numbers')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $2\\tfrac{3}{4} \\times 1\\tfrac{3}{5}$',
          items: [
            {
              title: 'Convert each mixed number to an improper fraction.',
              body: 'Whole part times denominator, plus numerator, over the same denominator: $2 \\cdot 4 + 3 = 11$ and $1 \\cdot 5 + 3 = 8$.',
              state: '$\\dfrac{11}{4} \\times \\dfrac{8}{5}$',
            },
            {
              title: 'Do the operation with the improper fractions.',
              body: `Here it is a [fraction product](!${HUB}/multiply-fractions); cancel $4$ into $8$.`,
              state: '$\\dfrac{11}{1} \\times \\dfrac{2}{5} = \\dfrac{22}{5}$',
            },
            {
              title: 'Divide the numerator by the denominator.',
              body: 'Write the division with a remainder smaller than the denominator.',
              state: '$22 = 5 \\cdot 4 + 2$',
            },
            {
              title: 'Write the quotient as the whole part and the remainder over the denominator.',
              body: 'The denominator does not change.',
              state: '$\\dfrac{22}{5} = 4\\tfrac{2}{5}$',
            },
          ],
        },
        examples: [
          {
            title: 'mixed number to improper fraction',
            badge: 'convert',
            lines: [
              { math: '$5\\tfrac{3}{8} = \\dfrac{5 \\cdot 8 + 3}{8}$', why: 'wholes become eighths' },
              { math: '$\\dfrac{43}{8}$', why: '$40 + 3$ eighths', answer: true },
            ],
          },
          {
            title: 'improper fraction to mixed number',
            badge: 'convert back',
            lines: [
              { math: '$\\dfrac{47}{6}$: $\\; 47 = 6 \\cdot 7 + 5$', why: 'divide with remainder' },
              { math: '$7\\tfrac{5}{6}$', why: 'quotient, then remainder over $6$', answer: true },
            ],
          },
          {
            title: 'dividing mixed numbers',
            badge: 'operation',
            lines: [
              { math: '$3\\tfrac{3}{4} \\div 2\\tfrac{1}{2} = \\dfrac{15}{4} \\div \\dfrac{5}{2}$', why: 'convert both' },
              { math: '$\\dfrac{15}{4} \\times \\dfrac{2}{5} = \\dfrac{3}{2}$', why: 'flip the divisor, cancel' },
              { math: '$1\\tfrac{1}{2}$', why: 'convert back', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'Picture $5\\tfrac{3}{8}$ as five full pizzas and three slices of a sixth pizza, every pizza cut into eighths. Counting slices only, the five full pizzas hold $5 \\cdot 8 = 40$ slices, and with the extra $3$ that is $43$ eighths. Going back, $43$ slices fill $5$ whole pizzas of $8$ with $3$ slices left over, which is exactly division with remainder.',
        },
        pitfalls: [
          {
            title: 'Adding the whole number to the numerator',
            wrong: '$5\\tfrac{3}{8} = \\dfrac{5 + 3}{8} = 1$',
            right: '$5\\tfrac{3}{8} = \\dfrac{5 \\cdot 8 + 3}{8} = \\dfrac{43}{8}$',
          },
          {
            title: 'Swapping quotient and remainder',
            wrong: '$\\dfrac{47}{6} = 5\\tfrac{7}{6}$',
            right: '$47 = 6 \\cdot 7 + 5$, so $\\dfrac{47}{6} = 7\\tfrac{5}{6}$',
          },
          {
            title: 'Reading a mixed number as a product',
            wrong: '$2\\tfrac{1}{3} = 2 \\cdot \\dfrac{1}{3} = \\dfrac{2}{3}$',
            right: '$2\\tfrac{1}{3} = 2 + \\dfrac{1}{3} = \\dfrac{7}{3}$',
          },
          {
            title: 'Multiplying wholes and fractions separately',
            wrong: '$2\\tfrac{3}{4} \\times 1\\tfrac{3}{5} = 2\\tfrac{9}{20}$',
            right: `convert first: $\\dfrac{11}{4} \\times \\dfrac{8}{5} = 4\\tfrac{2}{5}$ (${link('lesson.ar.fractions.mixed-numbers.6', 'operations with mixed numbers')})`,
          },
        ],
        related: ['add-subtract-fractions', 'multiply-fractions', 'divide-fractions'],
        builtOn: [
          { label: 'Mixed number notation', url: ruleUrl('lesson.ar.fractions.mixed-numbers.notation') },
          { label: 'Improper fractions to mixed numbers', url: ruleUrl('lesson.ar.fractions.mixed-numbers.3') },
          { label: 'Mixed numbers to improper fractions', url: ruleUrl('lesson.ar.fractions.mixed-numbers.4') },
          { label: 'Operations with mixed numbers', url: ruleUrl('lesson.ar.fractions.mixed-numbers.6') },
        ],
      },
    },
    {
      id: 'complex-fractions',
      slug: 'complex-fractions',
      name: 'How to simplify complex fractions',
      description: 'Simplify a fraction whose top or bottom contains fractions: multiply both by the LCD of the inner denominators, or divide the top by the bottom.',
      uses: ['LCD', 'dividing fractions', 'adding fractions'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Simplify Complex Fractions | Learn Math Class',
        description: 'Simplify complex fractions two ways: multiply top and bottom by the LCD of the inner denominators, or divide the top by the bottom. Examples, nested, mistakes.',
        keywords: ['how to simplify complex fractions', 'complex fractions', 'compound fractions', 'fraction within a fraction', 'complex fractions examples'],
      },
      page: {
        h1: 'How to Simplify Complex Fractions',
        lead:
          'A complex fraction has fractions inside its numerator or denominator. Clear them all at once by multiplying the top and bottom by the LCD of the inner denominators, or read the main bar as division.',
        recognize:
          'More than one fraction bar, one longer than the others: $\\dfrac{\\frac{2}{5}}{\\frac{4}{15}}$, $\\dfrac{2 + \\frac{1}{3}}{\\frac{7}{9}}$, $\\dfrac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{1}{4} - \\frac{1}{6}}$. Test: the longest bar is the main one; everything above it is one numerator and everything below it one denominator.',
        recognizeNote: `Complex fractions and both methods are defined in the ${link('lesson.ar.fractions.complex', 'complex fractions')} lesson.`,
        methods: [
          {
            name: 'Multiply by the LCD',
            tag: 'sums inside',
            preferred: true,
            formula: '\\dfrac{N}{D} = \\dfrac{N \\cdot L}{D \\cdot L}, \\quad L = \\text{LCD of the inner denominators}',
            body: `Clears every inner denominator in one step (${link('lesson.ar.fractions.complex.3', 'LCD method')}).`,
          },
          {
            name: 'Divide the top by the bottom',
            tag: 'single fractions',
            formula: '\\dfrac{\\frac{a}{b}}{\\frac{c}{d}} = \\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}',
            body: `The main bar is a division; [divide the fractions](!${HUB}/divide-fractions) (${link('lesson.ar.fractions.complex.2', 'division method')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{1}{4} - \\frac{1}{6}}$',
          items: [
            {
              title: 'Find the main bar and list the inner denominators.',
              body: 'Look at every small fraction in the top and in the bottom.',
              state: 'inner denominators $2, 3, 4, 6$',
            },
            {
              title: 'Find their least common denominator.',
              body: `It is the [least common multiple](!${HUB}/lcm) of all the inner denominators.`,
              state: '$\\operatorname{lcm}(2, 3, 4, 6) = 12$',
            },
            {
              title: 'Multiply every term of the top and the bottom by the LCD.',
              body: 'Each term, whole numbers included; multiplying top and bottom by the same number keeps the value.',
              state: '$\\dfrac{6 + 4}{3 - 2}$',
            },
            {
              title: 'Simplify.',
              body: 'What is left is an ordinary fraction.',
              state: '$\\dfrac{10}{1} = 10$',
            },
          ],
        },
        examples: [
          {
            title: 'a fraction over a fraction',
            badge: 'division',
            lines: [
              { math: '$\\dfrac{\\frac{2}{5}}{\\frac{4}{15}} = \\dfrac{2}{5} \\times \\dfrac{15}{4}$', why: 'main bar means divide' },
              { math: '$\\dfrac{1}{1} \\times \\dfrac{3}{2}$', why: 'cancel $2$ and $5$' },
              { math: '$\\dfrac{3}{2}$', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'a whole number in the top',
            badge: 'LCD',
            lines: [
              { math: '$\\dfrac{2 + \\frac{1}{3}}{\\frac{7}{9}}$: LCD $= 9$', why: 'inner denominators $3$, $9$' },
              { math: '$\\dfrac{18 + 3}{7} = \\dfrac{21}{7}$', why: 'multiply every term by $9$' },
              { math: '$3$', why: 'simplify', answer: true },
            ],
          },
          {
            title: 'nested fractions',
            badge: 'inside out',
            lines: [
              { math: '$\\dfrac{1}{1 + \\frac{1}{1 + \\frac{1}{2}}}$: $\\; 1 + \\frac{1}{2} = \\frac{3}{2}$', why: 'start at the deepest level' },
              { math: '$\\dfrac{1}{\\frac{3}{2}} = \\dfrac{2}{3}$', why: 'one over a fraction flips it' },
              { math: '$1 + \\dfrac{2}{3} = \\dfrac{5}{3}$', why: 'next level' },
              { math: '$\\dfrac{1}{\\frac{5}{3}} = \\dfrac{3}{5}$', why: 'flip once more', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your own answers with the [fraction calculator](!/calculators/fraction-calculator).',
        visual: {
          caption:
            'A complex fraction is a fraction whose top and bottom happen to be fractions too, and multiplying top and bottom by the same number never changes a fraction. Choosing that number to be a common multiple of every inner denominator turns every inner fraction into a whole number at once, just as $\\frac{1}{2} \\cdot 12 = 6$. The stacked expression collapses into an ordinary fraction with the same value.',
        },
        pitfalls: [
          {
            title: 'Forgetting to flip',
            wrong: '$\\dfrac{\\frac{2}{5}}{\\frac{4}{15}} = \\dfrac{2}{5} \\times \\dfrac{4}{15} = \\dfrac{8}{75}$',
            right: '$\\dfrac{2}{5} \\times \\dfrac{15}{4} = \\dfrac{3}{2}$',
          },
          {
            title: 'Multiplying only some terms by the LCD',
            wrong: '$\\dfrac{2 + \\frac{1}{3}}{\\frac{7}{9}} = \\dfrac{2 + 3}{7} = \\dfrac{5}{7}$',
            right: 'the $2$ is multiplied too: $\\dfrac{18 + 3}{7} = 3$',
          },
          {
            title: 'Flipping a sum term by term',
            wrong: '$\\dfrac{1}{\\frac{1}{2} + \\frac{1}{3}} = 2 + 3 = 5$',
            right: `combine first: $\\dfrac{1}{\\frac{5}{6}} = \\dfrac{6}{5}$ (${link('lesson.ar.fractions.complex.4', 'sums or differences inside')})`,
          },
        ],
        related: ['divide-fractions', 'add-subtract-fractions', 'lcm'],
        builtOn: [
          { label: 'Method 1: division', url: ruleUrl('lesson.ar.fractions.complex.2') },
          { label: 'Method 2: LCD', url: ruleUrl('lesson.ar.fractions.complex.3') },
          { label: 'Sums or differences inside', url: ruleUrl('lesson.ar.fractions.complex.4') },
          { label: 'Nested complex fractions', url: ruleUrl('lesson.ar.fractions.complex.6') },
        ],
      },
    },
    {
      id: 'modular-arithmetic',
      slug: 'modular-arithmetic',
      name: 'How to do modular arithmetic',
      description: 'Find the remainder of a sum, product or power: reduce each number mod $n$ first, operate on the remainders, reduce again; use cycles for powers.',
      uses: ['remainders', 'congruence', 'power cycles'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Do Modular Arithmetic (Remainders and Powers) | Learn Math Class',
        description: 'Do modular arithmetic step by step: reduce each number first, add or multiply the remainders, reduce again, use power cycles. Examples and common mistakes.',
        keywords: ['modular arithmetic', 'how to do modular arithmetic', 'remainder of a large power', 'mod calculation steps', 'last digit of a power'],
      },
      page: {
        h1: 'How to Do Modular Arithmetic',
        lead:
          'When only the remainder matters, you never need the full number. Replace each number by its remainder, add, subtract or multiply the remainders, and reduce again; for large powers, find the cycle of remainders.',
        recognize:
          'Wording such as "find the remainder when … is divided by $n$", "last digit of", "what day of the week", or congruences like $a \\equiv b \\pmod{n}$. Typical inputs: $(47 \\cdot 38 + 125) \\bmod 9$, $3^{50} \\bmod 7$, the last digit of $7^{100}$. Test: the question asks only for a remainder, not for the value itself.',
        recognizeNote: `The remainder $a \\bmod n$ and congruence are defined in the ${link('lesson.ar.modulo', 'modulo lesson')}; the operations are developed in ${link('lesson.ar.modulo.operations', 'modular arithmetic')}.`,
        methods: [
          {
            name: 'Reduce, then operate',
            tag: 'sums and products',
            preferred: true,
            formula: '(a \\cdot b) \\bmod n = \\big((a \\bmod n) \\cdot (b \\bmod n)\\big) \\bmod n',
            body: `Replacing a number by a congruent one never changes the remainder (${link('lesson.ar.modulo.operations.2', 'the core principle')}); the same holds for $+$ and $-$.`,
          },
          {
            name: 'Power cycles',
            tag: 'large powers',
            formula: 'a^{k} \\equiv a^{k \\bmod m} \\pmod{n} \\quad (\\text{cycle of length } m \\text{ through } 1)',
            body: `The remainders of $a, a^2, a^3, \\ldots$ repeat; reduce the exponent by the ${link('lesson.ar.modulo.operations.7', 'cycle length')}, not by $n$.`,
          },
        ],
        steps: {
          traceLabel: 'On $(47 \\cdot 38 + 125) \\bmod 9$',
          items: [
            {
              title: 'Reduce each number modulo n.',
              body: `Divide by $n$ and keep the remainder (${link('lesson.ar.modulo.51', 'how to compute a remainder')}). For $n = 9$, the digit sum gives it quickly.`,
              state: '$47 \\equiv 2$, $\\; 38 \\equiv 2$, $\\; 125 \\equiv 8 \\pmod{9}$',
            },
            {
              title: 'Do the operations on the remainders.',
              body: 'Follow the usual order of operations.',
              state: '$2 \\cdot 2 + 8 = 12$',
            },
            {
              title: 'Reduce the result.',
              body: 'The final answer must lie between $0$ and $n - 1$.',
              state: '$12 \\bmod 9 = 3$',
            },
            {
              title: 'Check with the full numbers, if they are small.',
              body: 'Both routes give the same remainder.',
              state: '$47 \\cdot 38 + 125 = 1911 = 9 \\cdot 212 + 3$',
            },
          ],
        },
        examples: [
          {
            title: 'last digit of a sum',
            badge: 'mod 10',
            lines: [
              { math: '$(1234 + 5678) \\bmod 10$', why: 'last digit means mod $10$' },
              { math: '$4 + 8 = 12$', why: 'keep only the last digits' },
              { math: '$12 \\bmod 10 = 2$', why: 'reduce', answer: true },
            ],
          },
          {
            title: 'a product',
            badge: 'mod 7',
            lines: [
              { math: '$53 \\equiv 4$, $\\; 29 \\equiv 1 \\pmod{7}$', why: 'subtract $49$ and $28$' },
              { math: '$(53 \\cdot 29) \\bmod 7 = (4 \\cdot 1) \\bmod 7$', why: 'multiply the remainders' },
              { math: '$4$', why: 'check: $1537 = 7 \\cdot 219 + 4$', answer: true },
            ],
          },
          {
            title: 'a large power',
            badge: 'cycle',
            lines: [
              { math: '$3^1, 3^2, \\ldots, 3^6 \\bmod 7$: $\\; 3, 2, 6, 4, 5, 1$', why: 'the cycle has length $6$' },
              { math: '$50 = 6 \\cdot 8 + 2$', why: 'reduce the exponent by $6$' },
              { math: '$3^{50} \\equiv 3^2 = 9 \\equiv 2 \\pmod{7}$', why: 'same place as $3^2$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See how remainders wrap around a circle in the [modular wheel](!/arithmetic/visual-tools/modular-wheel).',
        visual: {
          caption:
            'Picture a clock with $n$ positions, $0$ to $n - 1$. Every whole number lands on one position, and adding $n$ just goes once around the clock. Adding two numbers means walking the first distance and then the second, and the position you end on depends only on where each walk ends, not on how many full turns it made. That is why you can drop the full turns, which is reducing mod $n$, at any point.',
        },
        pitfalls: [
          {
            title: 'Reducing the exponent by the modulus',
            wrong: '$3^{50} \\bmod 7$: $50 \\bmod 7 = 1$, so the answer is $3$',
            right: 'the powers repeat every $6$ steps: $50 \\bmod 6 = 2$, so $3^{50} \\equiv 3^2 \\equiv 2$',
          },
          {
            title: 'Dividing remainders',
            wrong: '$(42 \\div 6) \\bmod 4 = (2 \\div 2) = 1$',
            right: `$42 \\div 6 = 7$ and $7 \\bmod 4 = 3$; division does not carry over to remainders (${link('lesson.ar.modulo.operations.8', 'why division is different')})`,
          },
          {
            title: 'Forgetting the final reduction',
            wrong: '$(7 + 8) \\bmod 9 = 15$',
            right: '$15 \\bmod 9 = 6$',
          },
          {
            title: 'Reading remainder 0 as the first place in a cycle',
            wrong: 'last digit of $2^{20}$: $20 = 4 \\cdot 5 + 0$, first place of $2, 4, 8, 6$, so $2$',
            right: 'remainder $0$ means the last place of the cycle: the last digit is $6$',
          },
        ],
        related: ['modulo-negative-numbers', 'gcd-euclidean-algorithm', 'order-of-operations'],
        builtOn: [
          { label: 'How to compute a remainder', url: ruleUrl('lesson.ar.modulo.51') },
          { label: 'Congruence', url: ruleUrl('lesson.ar.modulo.5') },
          { label: 'The core principle', url: ruleUrl('lesson.ar.modulo.operations.2') },
          { label: 'Detecting cycles in powers', url: ruleUrl('lesson.ar.modulo.operations.7') },
        ],
      },
    },
    {
      id: 'modulo-negative-numbers',
      slug: 'modulo-negative-numbers',
      name: 'How to find the modulo of a negative number',
      description: 'Round the quotient down, not toward zero, so the remainder lands in $0, \\ldots, n - 1$: $(-38) \\bmod 7 = 4$ because $-38 = 7 \\cdot (-6) + 4$.',
      uses: ['floored division', 'floor function', 'congruence'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Modulo of a Negative Number | Learn Math Class',
        description: 'Find the modulo of a negative number: round the quotient down, multiply back, subtract, or add the modulus to a negative remainder. Examples, code and mistakes.',
        keywords: ['modulo of negative numbers', 'negative mod', 'how to calculate negative modulo', 'floored division remainder', 'negative remainder fix'],
      },
      page: {
        h1: 'How to Find the Modulo of a Negative Number',
        lead:
          'In mathematics the remainder $a \\bmod n$ always lies between $0$ and $n - 1$, even when $a$ is negative. Round the quotient down, toward $-\\infty$, then subtract $n$ times that quotient from $a$.',
        recognize:
          'A negative dividend: $(-7) \\bmod 3$, $(-38) \\bmod 7$, $-100 \\% \\; 9$ in code, or a clock or calendar counted backward. Test: if your remainder came out negative, it used the truncated convention; the mathematical answer is that number plus $n$.',
        recognizeNote: `Both conventions are compared in the ${link('lesson.ar.modulo.negative-numbers', 'modulo of negative numbers')} lesson.`,
        methods: [
          {
            name: 'Floored division',
            tag: 'usual',
            preferred: true,
            formula: 'a \\bmod n = a - n \\left\\lfloor \\dfrac{a}{n} \\right\\rfloor',
            body: `Round the quotient down with the ${link('lesson.ar.integer-part.1', 'floor')} (${link('lesson.ar.modulo.negative-numbers.4', 'floored division')}).`,
          },
          {
            name: 'Add multiples of n',
            tag: 'mental',
            formula: 'a \\bmod n = a + k n, \\quad k \\text{ chosen so that } 0 \\le a + k n < n',
            body: `Adding $n$ does not change the remainder, by ${link('lesson.ar.modulo.negative-numbers.8', 'congruence')}; add copies until the result is in range.`,
          },
          {
            name: 'Fix a truncated remainder',
            tag: 'in code',
            formula: '((a \\% \\; n) + n) \\% \\; n',
            body: `Turns the truncated result of C, Java or JavaScript into the mathematical one (${link('lesson.ar.modulo.negative-numbers.7', 'converting between conventions')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $(-38) \\bmod 7$',
          items: [
            {
              title: 'Divide and round the quotient down.',
              body: 'Down means toward $-\\infty$: $-5.43$ rounds down to $-6$, not to $-5$.',
              state: '$-38 \\div 7 = -5.43\\ldots$, so $q = -6$',
            },
            {
              title: 'Multiply back.',
              body: 'This is the largest multiple of $n$ at or below $a$.',
              state: '$7 \\cdot (-6) = -42$',
            },
            {
              title: 'Subtract it from the dividend.',
              body: 'The gap from that multiple up to $a$ is the remainder.',
              state: '$-38 - (-42) = 4$',
            },
            {
              title: 'Check the range and the division equation.',
              body: 'The remainder must satisfy $0 \\le r < n$ and $a = n \\cdot q + r$.',
              state: '$-38 = 7 \\cdot (-6) + 4$, so $(-38) \\bmod 7 = 4$',
            },
          ],
        },
        examples: [
          {
            title: 'a small negative',
            badge: 'floor',
            lines: [
              { math: '$-2 \\div 5 = -0.4$, so $q = -1$', why: 'round down, not to $0$' },
              { math: '$-2 - 5 \\cdot (-1) = -2 + 5$', why: 'subtract $n \\cdot q$' },
              { math: '$(-2) \\bmod 5 = 3$', why: 'in range $0$ to $4$', answer: true },
            ],
          },
          {
            title: 'adding multiples',
            badge: 'mental',
            lines: [
              { math: '$(-47) \\bmod 6$', why: 'nearest multiple of $6$ above $47$ is $48$' },
              { math: '$-47 + 6 \\cdot 8 = -47 + 48 = 1$', why: 'add $8$ copies of $6$' },
              { math: '$(-47) \\bmod 6 = 1$', why: '$0 \\le 1 < 6$', answer: true },
            ],
          },
          {
            title: 'fixing a result from code',
            badge: 'in code',
            lines: [
              { math: '$-100 \\% \\; 9 = -1$', why: 'JavaScript rounds toward zero' },
              { math: '$-1 + 9 = 8$', why: 'add the modulus once' },
              { math: '$(-100) \\bmod 9 = 8$', why: 'check: $-100 = 9 \\cdot (-12) + 8$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Step backward around the circle of remainders in the [modular wheel](!/arithmetic/visual-tools/modular-wheel).',
        visual: {
          caption:
            'Picture the multiples of $7$ as fence posts along the number line: $\\ldots, -49, -42, -35, \\ldots$ The remainder is the distance from the nearest post on the left up to the number. For $-38$ that post is $-42$, not $-35$, because $-35$ lies to the right. The distance $4$ is positive, and it is always less than the gap $7$ between posts.',
        },
        pitfalls: [
          {
            title: 'Dropping the minus sign',
            wrong: '$(-38) \\bmod 7 = 38 \\bmod 7 = 3$',
            right: '$(-38) \\bmod 7 = 4$, since $-38 = 7 \\cdot (-6) + 4$',
          },
          {
            title: 'Rounding the quotient toward zero',
            wrong: '$q = -5$: $\\; -38 - 7 \\cdot (-5) = -3$',
            right: 'round down to $q = -6$: $-38 + 42 = 4$',
          },
          {
            title: 'Dropping the final reduction in code',
            wrong: '$(a \\% \\; n) + n$ for $a = 14$, $n = 7$: $\\; 0 + 7 = 7$',
            right: '$((14 \\% \\; 7) + 7) \\% \\; 7 = 0$',
          },
        ],
        related: ['modular-arithmetic', 'gcd-euclidean-algorithm'],
        builtOn: [
          { label: 'Two conventions', url: ruleUrl('lesson.ar.modulo.negative-numbers.2') },
          { label: 'Floored division', url: ruleUrl('lesson.ar.modulo.negative-numbers.4') },
          { label: 'Converting between conventions', url: ruleUrl('lesson.ar.modulo.negative-numbers.7') },
          { label: 'The integer part (floor)', url: ruleUrl('lesson.ar.integer-part.1') },
        ],
      },
    },

    // ═══ III. Applied ══════════════════════════════════════════════════
    {
      id: 'fraction-word-problems',
      slug: 'fraction-word-problems',
      name: 'How to solve fraction word problems',
      description: 'Recipes, shares, distances and parts of a whole: decide what the whole is, pick the operation from the wording, and compute with fractions.',
      uses: ['adding fractions', 'multiplying fractions', 'dividing fractions'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 4 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Fraction Word Problems | Learn Math Class',
        description: 'Solve fraction word problems: find the whole, choose add, subtract, multiply or divide from the wording, handle parts of the rest. Recipes, distances, shares.',
        keywords: ['fraction word problems', 'how to solve fraction word problems', 'fraction of a number word problems', 'dividing fractions word problems', 'adding fractions word problems'],
      },
      page: {
        h1: 'How to Solve Fraction Word Problems',
        lead:
          'A fraction word problem hides one of the four operations behind everyday wording. Decide what the whole is, translate the words into an operation, and the calculation is an ordinary fraction method.',
        recognize:
          'Trigger words: **of** (multiply), **in total** or **altogether** (add), **left** or **how much more** (subtract), **how many pieces** or **each** (divide), **of the rest** (work on what remains). The numbers are fractions or mixed numbers attached to a quantity: cups of flour, miles, a class of students, a length of ribbon.',
        setup: [
          { label: 'The whole', body: 'Name what one whole is: the full recipe, the whole trip, the class, the ribbon. Every fraction in the story is a part of some whole.' },
          { label: 'The fractions', body: 'Write each fraction next to the quantity it is a fraction of, for example "two fifths of $30$ students".' },
          { label: 'The operation', body: '"Of" means multiply; "in total" means add; "left" or "more than" means subtract; "how many pieces of size" means divide the total by the piece size.' },
          { label: 'The order', body: 'If a fraction is taken "of the rest" or "of what is left", compute the remaining amount first, then take the fraction of it.' },
          { label: 'The calculation', body: 'Convert mixed numbers to improper fractions, compute, simplify, and convert back to a mixed number for a measured amount.' },
        ],
        handoff: {
          to: 'add-subtract-fractions',
          body: `Do the arithmetic with [adding and subtracting fractions](!${HUB}/add-subtract-fractions), [multiplying fractions](!${HUB}/multiply-fractions) or [dividing fractions](!${HUB}/divide-fractions), depending on the operation you chose.`,
        },
        interpretation:
          'Attach the unit: cups, miles, students, pieces. A count of people or pieces must be a whole number; if it is not, recheck the operation. A part taken "of" something must be smaller than that thing when the fraction is less than $1$. Write measured amounts as mixed numbers, such as $4\\tfrac{1}{12}$ miles, which are easier to picture than $\\frac{49}{12}$.',
        examples: [
          {
            title: 'scaling a recipe',
            badge: 'of',
            lines: [
              { math: 'a recipe uses $2\\tfrac{1}{4}$ cups of flour; make $\\frac{2}{3}$ of it', why: '"of" means multiply' },
              { math: '$\\dfrac{2}{3} \\times \\dfrac{9}{4} = \\dfrac{18}{12} = \\dfrac{3}{2}$', why: 'convert, multiply, simplify' },
              { math: '$1\\tfrac{1}{2}$ cups of flour', why: 'mixed number with unit', answer: true },
            ],
          },
          {
            title: 'total distance',
            badge: 'in total',
            lines: [
              { math: 'run $1\\tfrac{3}{4}$ miles, then $2\\tfrac{1}{3}$ miles; how far in total?', why: '"in total" means add' },
              { math: '$\\dfrac{7}{4} + \\dfrac{7}{3} = \\dfrac{21}{12} + \\dfrac{28}{12}$', why: 'LCD $12$' },
              { math: '$\\dfrac{49}{12} = 4\\tfrac{1}{12}$ miles', why: 'add and convert', answer: true },
            ],
          },
          {
            title: 'part of the rest',
            badge: 'of the rest',
            lines: [
              { math: '$30$ students: $\\frac{2}{5}$ walk, $\\frac{1}{3}$ of the rest bike', why: 'two wholes: class, then rest' },
              { math: '$\\dfrac{2}{5} \\times 30 = 12$ walk; $30 - 12 = 18$ remain', why: 'compute the rest first' },
              { math: '$\\dfrac{1}{3} \\times 18 = 6$ students bike', why: 'fraction of the rest', answer: true },
            ],
          },
          {
            title: 'equal pieces',
            badge: 'how many pieces',
            lines: [
              { math: '$6$ m of ribbon cut into pieces $\\frac{3}{8}$ m long', why: 'how many pieces fit' },
              { math: '$6 \\div \\dfrac{3}{8} = \\dfrac{6}{1} \\times \\dfrac{8}{3}$', why: 'total divided by piece size' },
              { math: '$16$ pieces', why: 'cancel $3$ into $6$, multiply', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw a bar model: one long bar for the whole, cut into as many equal parts as the denominator. For "two fifths of $30$ students walk", cut the bar into $5$ parts of $6$ students and shade $2$ of them. For "a third of the rest", draw a new bar only for the $18$ unshaded students and cut that into $3$. The picture shows which whole each fraction belongs to, the step most word problems turn on.',
        },
        pitfalls: [
          {
            title: 'Taking a fraction of the whole instead of the rest',
            wrong: '$\\frac{1}{3}$ of the rest bike: $\\frac{1}{3} \\times 30 = 10$ students',
            right: 'the rest is $18$ students: $\\frac{1}{3} \\times 18 = 6$',
          },
          {
            title: 'Adding when the problem says "of"',
            wrong: '$\\frac{2}{3}$ of $2\\tfrac{1}{4}$ cups: $\\frac{2}{3} + 2\\tfrac{1}{4} = 2\\tfrac{11}{12}$ cups',
            right: `"of" means multiply (${link('lesson.ar.fractions.multiplying.6', 'the word "of" means multiply')}): $1\\tfrac{1}{2}$ cups`,
          },
          {
            title: 'Dividing the wrong way round',
            wrong: 'pieces of $\\frac{3}{8}$ m from $6$ m: $\\frac{3}{8} \\div 6 = \\frac{1}{16}$ pieces',
            right: 'total divided by piece size: $6 \\div \\frac{3}{8} = 16$ pieces',
          },
        ],
        related: ['add-subtract-fractions', 'multiply-fractions', 'divide-fractions'],
        builtOn: [
          { label: 'What is a fraction', url: ruleUrl('lesson.ar.fractions.1') },
          { label: 'The word "of" means multiply', url: ruleUrl('lesson.ar.fractions.multiplying.6') },
          { label: 'Adding mixed numbers', url: ruleUrl('lesson.ar.fractions.adding-subtracting.5') },
          { label: 'Dividing fractions: word problems', url: ruleUrl('lesson.ar.fractions.dividing.8') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Divisibility rules', blurb: 'Atomic · one test, applied once' },
    { id: 'composite', label: 'Factors, fractions and remainders', blurb: 'Composite · each opens its own page' },
    { id: 'applied', label: 'Word problems', blurb: 'recipes, distances, shares, parts of a whole' },
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
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/combinatorics/methods', label: 'Combinatorics methods' },
      { url: '/functions/methods', label: 'Functions methods' },
    ],
  },
};

export default arithmeticMethods;
