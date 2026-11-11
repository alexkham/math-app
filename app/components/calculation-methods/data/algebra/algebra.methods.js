// algebra.methods.js
// Single data source for the algebra section hub's own items:
// /algebra/methods (hub) and /algebra/methods/[view] (leaf pages).
// Topics: powers, roots, logarithms, sequences, and two applied word-problem
// methods. Equations, inequalities and polynomials have their own sub-hubs.
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/algebra/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/algebra/methods';

const algebraMethods = {
  hubPath: HUB,
  hubLabel: 'algebra methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ Atomic — powers ═══════════════════════════════════════════════
    {
      id: 'product-of-powers',
      name: 'How to multiply powers with the same base',
      subtitle: 'Product rule for exponents',
      glyph: 'aᵐaⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'powers',
      when: 'Two powers of the **same** base multiplied: $x^3\\cdot x^5$, $2^4\\cdot 2$, $a^{1/2}a^{3/2}$.',
      formula: 'a^m\\cdot a^n = a^{m+n}',
      fields: {
        steps: ['1. Check the bases are identical.', '2. Keep the base, add the exponents.'],
        worked_example: '$x^3\\cdot x^5 = x^{8}$',
      },
      links: [
        { url: ruleUrl('exponents.product-rule'), label: 'Product rule' },
        { url: ruleUrl('lesson.powers.exponent-rules'), label: 'Exponent rules (lesson)' },
      ],
    },
    {
      id: 'quotient-of-powers',
      name: 'How to divide powers with the same base',
      subtitle: 'Quotient rule for exponents',
      glyph: 'aᵐ⁄aⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'powers',
      when: 'A power of a base divided by another power of the same base: $\\frac{x^7}{x^2}$, $\\frac{5^3}{5^5}$.',
      formula: '\\frac{a^m}{a^n} = a^{m-n} \\qquad (a \\neq 0)',
      fields: {
        steps: ['1. Check the bases are identical.', '2. Keep the base, subtract the bottom exponent from the top one.', '3. A negative result means the power belongs in the denominator.'],
        worked_example: '$\\frac{x^7}{x^2} = x^5, \\qquad \\frac{5^3}{5^5} = 5^{-2} = \\frac{1}{25}$',
      },
      links: [{ url: ruleUrl('exponents.quotient-rule'), label: 'Quotient rule' }],
    },
    {
      id: 'power-of-power',
      name: 'How to raise a power to a power',
      subtitle: 'Power of a power, product and quotient',
      glyph: '(aᵐ)ⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'powers',
      when: 'A bracket with a power on it: $(x^3)^4$, $(2x)^5$, $\\left(\\frac{a}{b}\\right)^3$.',
      formula: '(a^m)^n = a^{mn} \\qquad (ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}',
      fields: {
        steps: ['1. Give the outer exponent to every factor inside the bracket.', '2. Multiply exponents where a power meets a power.'],
        worked_example: '$(2x^3)^4 = 2^4 x^{12} = 16x^{12}$',
      },
      links: [
        { url: ruleUrl('exponents.power-of-a-power'), label: 'Power of a power' },
        { url: ruleUrl('exponents.power-of-a-product'), label: 'Power of a product' },
        { url: ruleUrl('exponents.power-of-a-quotient'), label: 'Power of a quotient' },
      ],
    },
    {
      id: 'negative-exponents',
      name: 'How to rewrite a negative exponent',
      subtitle: 'Negative exponent rule',
      glyph: 'a⁻ⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'powers',
      when: 'A negative exponent anywhere: $x^{-3}$, $\\frac{1}{2^{-4}}$, $\\left(\\frac{2}{3}\\right)^{-2}$.',
      formula: 'a^{-n} = \\frac{1}{a^n} \\qquad \\frac{1}{a^{-n}} = a^n \\qquad \\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n',
      fields: {
        steps: ['1. Move the power across the fraction bar.', '2. Make the exponent positive. Only the power moves, not a coefficient next to it.'],
        worked_example: '$3x^{-2} = \\frac{3}{x^2}, \\qquad \\left(\\frac{2}{3}\\right)^{-2} = \\frac{9}{4}$',
      },
      links: [
        { url: ruleUrl('exponents.negative-exponent'), label: 'Negative exponent rule' },
        { url: ruleUrl('lesson.powers.negative-exponents'), label: 'Negative exponents (lesson)' },
      ],
    },
    {
      id: 'zero-exponent',
      name: 'How to handle a zero exponent',
      subtitle: 'Zero exponent rule',
      glyph: 'a⁰',
      level: 'atomic',
      tag: 'Atomic',
      category: 'powers',
      when: 'Anything nonzero raised to the power $0$: $7^0$, $(3x)^0$, $x^0$ with $x \\neq 0$.',
      formula: 'a^0 = 1 \\qquad (a \\neq 0)',
      fields: {
        steps: ['1. Check the base is not $0$.', '2. Replace the whole power by $1$; a coefficient outside the power stays.'],
        worked_example: '$5x^0 = 5\\cdot 1 = 5, \\qquad (5x)^0 = 1$',
      },
      links: [{ url: ruleUrl('exponents.zero-exponent'), label: 'Zero exponent rule' }],
    },
    {
      id: 'rational-exponents',
      name: 'How to convert between rational exponents and roots',
      subtitle: 'Rational exponent rule',
      glyph: 'aᵐ⁄ⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'powers',
      when: 'A fraction in the exponent, or a root that would be easier as a power: $8^{2/3}$, $\\sqrt[5]{x^2}$, $x^{1/2}$.',
      formula: 'a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m',
      fields: {
        steps: ['1. The denominator of the exponent is the index of the root; the numerator is the power.', '2. Take the root first when the base is a perfect power; the numbers stay small.'],
        worked_example: '$8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$',
      },
      links: [
        { url: ruleUrl('exponents.radical-to-exponent'), label: 'Radical to exponent conversion' },
        { url: ruleUrl('lesson.powers.rational-exponents'), label: 'Rational exponents (lesson)' },
      ],
    },

    // ═══ Atomic — roots ════════════════════════════════════════════════
    {
      id: 'radical-product-rule',
      name: 'How to split or combine a root of a product',
      subtitle: 'Product rule for radicals',
      glyph: '√ab',
      level: 'atomic',
      tag: 'Atomic',
      category: 'roots',
      when: 'A root of a product, or two roots with the same index multiplied: $\\sqrt{50}$, $\\sqrt{3}\\cdot\\sqrt{12}$, $\\sqrt[3]{16x^4}$.',
      formula: '\\sqrt[n]{ab} = \\sqrt[n]{a}\\,\\sqrt[n]{b} \\qquad (a, b \\ge 0 \\text{ for even } n)',
      fields: {
        steps: ['1. Check both roots have the same index.', '2. Split a product into roots, or combine roots into one; never split a sum.'],
        worked_example: '$\\sqrt{3}\\cdot\\sqrt{12} = \\sqrt{36} = 6$',
      },
      links: [
        { url: ruleUrl('radicals.product-rule'), label: 'Product rule for radicals' },
        { url: ruleUrl('lesson.roots.radical-rules'), label: 'Radical rules (lesson)' },
      ],
    },
    {
      id: 'radical-quotient-rule',
      name: 'How to split or combine a root of a quotient',
      subtitle: 'Quotient rule for radicals',
      glyph: '√a⁄b',
      level: 'atomic',
      tag: 'Atomic',
      category: 'roots',
      when: 'A root of a fraction, or two roots with the same index divided: $\\sqrt{\\frac{9}{16}}$, $\\frac{\\sqrt{50}}{\\sqrt{2}}$.',
      formula: '\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} \\qquad (b \\neq 0)',
      fields: {
        steps: ['1. Check both roots have the same index.', '2. Take the root of top and bottom separately, or combine two roots into one fraction.'],
        worked_example: '$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5$',
      },
      links: [{ url: ruleUrl('radicals.quotient-rule'), label: 'Quotient rule for radicals' }],
    },

    // ═══ Atomic — logarithms ═══════════════════════════════════════════
    {
      id: 'log-product-rule',
      name: 'How to split the log of a product',
      subtitle: 'Product rule for logarithms',
      glyph: 'log xy',
      level: 'atomic',
      tag: 'Atomic',
      category: 'logarithms',
      when: 'A logarithm of a product, or two logs with the same base added: $\\log(xy)$, $\\ln 2 + \\ln 5$.',
      formula: '\\log_b(xy) = \\log_b x + \\log_b y',
      fields: {
        steps: ['1. Check both logs have the same base.', '2. A product inside becomes a sum outside, and back. A sum inside the log does **not** split.'],
        worked_example: '$\\ln 2 + \\ln 5 = \\ln 10$',
      },
      links: [
        { url: ruleUrl('logarithms.product-rule'), label: 'Product rule (lesson)' },
        { url: ruleUrl('logarithms.expanding'), label: 'Expanding logarithms' },
      ],
    },
    {
      id: 'log-quotient-rule',
      name: 'How to split the log of a quotient',
      subtitle: 'Quotient rule for logarithms',
      glyph: 'log x⁄y',
      level: 'atomic',
      tag: 'Atomic',
      category: 'logarithms',
      when: 'A logarithm of a fraction, or two logs with the same base subtracted: $\\log\\frac{x}{y}$, $\\log_2 40 - \\log_2 5$.',
      formula: '\\log_b\\frac{x}{y} = \\log_b x - \\log_b y',
      fields: {
        steps: ['1. Check both logs have the same base.', '2. A quotient inside becomes a difference outside, and back. The numerator comes first.'],
        worked_example: '$\\log_2 40 - \\log_2 5 = \\log_2 8 = 3$',
      },
      links: [{ url: ruleUrl('logarithms.quotient-rule'), label: 'Quotient rule (lesson)' }],
    },
    {
      id: 'log-power-rule',
      name: 'How to bring an exponent out of a log',
      subtitle: 'Power rule for logarithms',
      glyph: 'log xⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'logarithms',
      when: 'A power inside a logarithm, or a number multiplying a log: $\\log x^3$, $\\ln\\sqrt{x}$, $2\\log 5$.',
      formula: '\\log_b x^n = n\\log_b x',
      fields: {
        steps: ['1. The exponent of the argument becomes a factor in front.', '2. A root is a fractional exponent: $\\ln\\sqrt{x} = \\tfrac{1}{2}\\ln x$.'],
        worked_example: '$2\\log 5 = \\log 25$',
      },
      links: [{ url: ruleUrl('logarithms.power-rule'), label: 'Power rule (lesson)' }],
    },
    {
      id: 'change-of-base',
      name: 'How to change the base of a logarithm',
      subtitle: 'Change of base formula',
      glyph: 'log₂',
      level: 'atomic',
      tag: 'Atomic',
      category: 'logarithms',
      when: 'A log whose base your calculator does not have, or two logs with different bases in one problem: $\\log_2 10$, $\\log_5 x$.',
      formula: '\\log_b x = \\frac{\\log_c x}{\\log_c b} = \\frac{\\ln x}{\\ln b}',
      fields: {
        steps: ['1. Pick a base $c$ you can compute with ($10$ or $e$).', '2. Divide the log of the argument by the log of the old base.'],
        worked_example: '$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} \\approx \\frac{2.303}{0.693} \\approx 3.32$',
      },
      links: [
        { url: ruleUrl('logarithms.change-of-base-formula'), label: 'Change of base formula' },
        { url: ruleUrl('logarithms.change-of-base'), label: 'Change of base (lesson)' },
      ],
    },

    // ═══ Composite — powers ════════════════════════════════════════════
    {
      id: 'simplify-exponent-expressions',
      slug: 'simplify-exponent-expressions',
      name: 'How to simplify expressions with exponents',
      description: 'Combine several exponent rules into one clean answer with positive exponents.',
      uses: ['product rule', 'quotient rule', 'power of a power', 'negative exponents'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'powers',
      indexed: false,
      seo: {
        title: 'How to Simplify Expressions with Exponents (Step by Step) | Learn Math Class',
        description: 'Simplify exponent expressions: clear brackets, combine same bases with the product and quotient rules, write positive exponents. Examples and mistakes.',
        keywords: ['simplify exponent expressions', 'how to simplify expressions with exponents', 'laws of exponents examples', 'simplify negative exponents'],
      },
      page: {
        h1: 'How to Simplify Expressions with Exponents',
        lead:
          'An exponent expression is simplified by applying the exponent rules in a fixed order: clear the brackets, combine powers of the same base, then rewrite negative exponents. The answer has each base once and every exponent positive.',
        recognize:
          'Several powers of the same letters multiplied, divided or raised to a power: $\\frac{(2x^3y)^2}{4x^5}$, $x^{-2}\\cdot x^5$, $\\left(\\frac{a^3}{b}\\right)^{-2}$. Test: the same base appears more than once, or a bracket carries an exponent, or an exponent is negative.',
        recognizeNote: `All the rules are collected in the ${link('lesson.powers.exponent-rules', 'exponent rules lesson')}; the ${link('lesson.powers.exponent-rules.mistakes', 'edge cases')} there are the mistakes below.`,
        steps: {
          traceLabel: 'On $\\frac{(2x^3y)^2}{4x^5y^{-1}}$',
          items: [
            {
              title: 'Clear the brackets.',
              body: `Give the outer exponent to every factor inside: ${link('exponents.power-of-a-product', 'power of a product')}, ${link('exponents.power-of-a-power', 'power of a power')}.`,
              state: '$\\frac{4x^6y^2}{4x^5y^{-1}}$',
              atomic: 'power-of-power',
            },
            {
              title: 'Combine the numbers.',
              body: 'Multiply or cancel the coefficients like ordinary numbers.',
              state: '$\\frac{x^6y^2}{x^5y^{-1}}$',
            },
            {
              title: 'Combine each base.',
              body: `Same base multiplied: add exponents (${link('exponents.product-rule', 'product rule')}). Same base divided: subtract (${link('exponents.quotient-rule', 'quotient rule')}). Subtracting a negative exponent adds.`,
              state: '$x^{6-5}y^{2-(-1)} = x\\,y^3$',
              atomic: 'quotient-of-powers',
            },
            {
              title: 'Write every exponent positive.',
              body: `Move any power with a negative exponent across the fraction bar (${link('exponents.negative-exponent', 'negative exponent rule')}). Check: each base appears once.`,
              state: '$x y^3$',
              atomic: 'negative-exponents',
            },
          ],
        },
        examples: [
          {
            title: 'brackets, then combine',
            badge: 'basic',
            lines: [
              { math: '$\\frac{(2x^3y)^2}{4x^5y^{-1}} = \\frac{4x^6y^2}{4x^5y^{-1}}$', why: 'clear the bracket' },
              { math: '$= x^{6-5}y^{2+1} = xy^3$', why: 'quotient rule on each base', answer: true },
            ],
          },
          {
            title: 'a negative exponent on a fraction',
            badge: 'flip first',
            lines: [
              { math: '$\\left(\\frac{a^3}{b}\\right)^{-2} = \\left(\\frac{b}{a^3}\\right)^{2}$', why: 'negative exponent flips the fraction' },
              { math: '$= \\frac{b^2}{a^6}$', why: 'power of a quotient, power of a power', answer: true },
            ],
          },
          {
            title: 'mixed negatives',
            badge: 'coefficients stay put',
            lines: [
              { math: '$\\frac{6x^{-2}y^3}{3x^4y^{-2}} = 2x^{-2-4}y^{3-(-2)}$', why: 'cancel $6/3$; quotient rule' },
              { math: '$= 2x^{-6}y^{5} = \\frac{2y^5}{x^6}$', why: 'only $x^{-6}$ moves down; the $2$ stays', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Every exponent rule is a counting shortcut: $x^3\\cdot x^5$ is three $x$s next to five $x$s, eight in all, and $(x^3)^4$ is four groups of three. Keeping that picture in mind tells you when to add and when to multiply exponents.',
        },
        pitfalls: [
          {
            title: 'Multiplying exponents when multiplying powers',
            wrong: '$x^3\\cdot x^5 = x^{15}$',
            right: '$x^3\\cdot x^5 = x^{8}$; exponents add, they multiply only for a power of a power',
          },
          {
            title: 'Forgetting the coefficient inside a bracket',
            wrong: '$(2x^3)^2 = 2x^6$',
            right: '$(2x^3)^2 = 4x^6$',
          },
          {
            title: 'Moving the coefficient with the negative exponent',
            wrong: '$3x^{-2} = \\frac{1}{3x^2}$',
            right: '$3x^{-2} = \\frac{3}{x^2}$',
          },
          {
            title: 'Adding exponents of different bases',
            wrong: '$x^2 y^3 = (xy)^5$',
            right: 'different bases stay apart; only a common exponent can be factored out',
          },
        ],
        related: ['exponential-equations-same-base', 'simplify-radicals', 'expand-condense-logarithms'],
        builtOn: [
          { label: 'Product rule', url: ruleUrl('exponents.product-rule') },
          { label: 'Quotient rule', url: ruleUrl('exponents.quotient-rule') },
          { label: 'Power of a power', url: ruleUrl('exponents.power-of-a-power') },
          { label: 'Negative exponent rule', url: ruleUrl('exponents.negative-exponent') },
        ],
      },
    },
    {
      id: 'exponential-equations-same-base',
      slug: 'exponential-equations-same-base',
      name: 'How to solve an exponential equation by matching bases',
      description: 'Write both sides as powers of one base, then set the exponents equal.',
      uses: ['exponent rules', 'linear equations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'powers',
      indexed: false,
      seo: {
        title: 'How to Solve Exponential Equations by Matching Bases | Learn Math Class',
        description: 'Solve exponential equations without logs: rewrite both sides as powers of one base, equate the exponents, solve what is left. Examples and mistakes.',
        keywords: ['exponential equations same base', 'how to solve exponential equations', 'equate exponents', 'exponential equation examples'],
      },
      page: {
        h1: 'How to Solve an Exponential Equation by Matching Bases',
        lead:
          'When both sides of an equation can be written as a power of the same number, the exponents must be equal. That turns an exponential equation into an ordinary one, with no logarithms needed.',
        recognize:
          'The unknown is in an exponent and every number in the equation is a power of one base: $2^{x+1} = 32$, $9^x = 27$, $\\left(\\tfrac{1}{4}\\right)^x = 8$, $5^{2x} = 5^{x+3}$. Test: can every base be written as $b^k$ for one $b$? If a number like $7$ or $10$ cannot be, use logarithms instead.',
        recognizeNote: `The lesson calls this ${link('lesson.powers.exponential-equations.matching-bases', 'matching bases')}; it rests on the fact that $b^x$ is one-to-one (${link('lesson.powers.exponential-functions', 'exponential functions')}).`,
        methods: [
          {
            name: 'Match bases, equate exponents',
            tag: 'usual choice',
            preferred: true,
            formula: 'b^{u} = b^{v} \\;\\Rightarrow\\; u = v \\qquad (b > 0,\\ b \\neq 1)',
            body: 'Works whenever every number is a power of one base. Fractions and roots are powers with negative or fractional exponents.',
          },
          {
            name: 'Take logarithms',
            tag: 'when bases cannot match',
            formula: 'b^{u} = c \\;\\Rightarrow\\; u = \\log_b c',
            body: `For equations like $3^x = 10$: see [solving with logarithms](!${HUB}/exponential-equations-logarithms).`,
          },
        ],
        steps: {
          traceLabel: 'On $9^{x} = 27^{x-1}$',
          items: [
            {
              title: 'Pick the common base.',
              body: 'The smallest number of which every base is a power.',
              state: '$9 = 3^2$, $27 = 3^3$: base $3$',
            },
            {
              title: 'Rewrite each side as a single power of that base.',
              body: `Use ${link('exponents.power-of-a-power', 'power of a power')}: $(3^2)^x = 3^{2x}$. Fractions: $\\frac{1}{9} = 3^{-2}$; roots: $\\sqrt{3} = 3^{1/2}$.`,
              state: '$3^{2x} = 3^{3(x-1)}$',
              atomic: 'power-of-power',
            },
            {
              title: 'Set the exponents equal.',
              body: 'Same base on both sides means the exponents match.',
              state: '$2x = 3(x - 1)$',
            },
            {
              title: 'Solve the resulting equation and check.',
              body: `Usually a [linear equation](!/algebra/equations/methods/linear-equations). Substitute back (${link('lesson.powers.exponential-equations.checking', 'checking solutions')}).`,
              state: '$2x = 3x - 3 \\;\\Rightarrow\\; x = 3$; check: $9^3 = 729 = 27^2$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'one side a plain number',
            badge: 'basic',
            lines: [
              { math: '$2^{x+1} = 32$', why: '$32 = 2^5$' },
              { math: '$x + 1 = 5 \\;\\Rightarrow\\; x = 4$', why: '', answer: true },
            ],
          },
          {
            title: 'both sides powers',
            badge: 'power of a power',
            lines: [
              { math: '$9^x = 27^{x-1} \\;\\Rightarrow\\; 3^{2x} = 3^{3x-3}$', why: 'base $3$' },
              { math: '$2x = 3x - 3 \\;\\Rightarrow\\; x = 3$', why: '', answer: true },
            ],
          },
          {
            title: 'a fraction and a root',
            badge: 'negative and fractional exponents',
            lines: [
              { math: '$\\left(\\tfrac{1}{4}\\right)^x = 8\\sqrt{2}$', why: '$\\frac{1}{4} = 2^{-2}$, $8\\sqrt{2} = 2^3\\cdot 2^{1/2} = 2^{7/2}$' },
              { math: '$2^{-2x} = 2^{7/2} \\;\\Rightarrow\\; -2x = \\tfrac{7}{2} \\;\\Rightarrow\\; x = -\\tfrac{7}{4}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The graph of $y = 3^t$ never takes the same height twice: it only climbs. So if $3^{2x}$ and $3^{3x-3}$ are the same height, their inputs $2x$ and $3x - 3$ must be the same number. That one-to-one property is the whole method.',
        },
        pitfalls: [
          {
            title: 'Equating exponents with different bases',
            wrong: '$2^x = 3^{x+1} \\Rightarrow x = x + 1$',
            right: 'the bases differ; take logarithms instead',
          },
          {
            title: 'Dropping the bracket when rewriting',
            wrong: '$27^{x-1} = 3^{3x-1}$',
            right: '$27^{x-1} = 3^{3(x-1)} = 3^{3x-3}$',
          },
          {
            title: 'A fraction with a positive exponent',
            wrong: '$\\left(\\tfrac{1}{4}\\right)^x = 2^{2x}$',
            right: '$\\left(\\tfrac{1}{4}\\right)^x = 2^{-2x}$',
          },
        ],
        related: ['exponential-equations-logarithms', 'exponential-inequalities', 'simplify-exponent-expressions'],
        builtOn: [
          { label: 'Power of a power', url: ruleUrl('exponents.power-of-a-power') },
          { label: 'Negative exponent rule', url: ruleUrl('exponents.negative-exponent') },
          { label: 'Matching bases (lesson)', url: ruleUrl('lesson.powers.exponential-equations.matching-bases') },
        ],
      },
    },
    {
      id: 'exponential-equations-logarithms',
      slug: 'exponential-equations-logarithms',
      name: 'How to solve an exponential equation with logarithms',
      description: 'Isolate the power, take a log of both sides, bring the exponent down, solve.',
      uses: ['log power rule', 'change of base'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'powers',
      indexed: false,
      seo: {
        title: 'How to Solve Exponential Equations with Logarithms | Learn Math Class',
        description: 'Solve exponential equations like 3^x = 20: isolate the power, take ln of both sides, bring the exponent down, divide. Examples and common mistakes.',
        keywords: ['solve exponential equations with logarithms', 'how to solve 3^x = 20', 'exponential equation ln both sides', 'exponential equations examples'],
      },
      page: {
        h1: 'How to Solve an Exponential Equation with Logarithms',
        lead:
          'When the two sides cannot be written with the same base, take a logarithm of both sides. The power rule brings the unknown exponent down to the ground floor, where ordinary algebra finishes the job.',
        recognize:
          'The unknown is in an exponent and the numbers are not powers of one base: $3^x = 20$, $5\\cdot 2^{x} = 60$, $e^{0.3t} = 4$, $7^{x+2} = 3^{x}$. Test: substitution of small integers does not land exactly, and the bases do not match.',
        recognizeNote: `The lesson calls this ${link('lesson.powers.exponential-equations.logarithms', 'solving with logarithms')}; the log rules it uses are in ${link('logarithms.expanding', 'expanding logarithmic expressions')}.`,
        methods: [
          {
            name: 'Take ln (or log) of both sides',
            tag: 'usual choice',
            preferred: true,
            formula: 'b^u = c \\;\\Rightarrow\\; u\\ln b = \\ln c \\;\\Rightarrow\\; u = \\frac{\\ln c}{\\ln b}',
            body: `Any base works; $\\ln$ is standard. The ${link('logarithms.power-rule', 'power rule')} moves the exponent in front.`,
          },
          {
            name: 'Rewrite as a logarithm directly',
            tag: 'same thing, shorter',
            formula: 'b^u = c \\;\\Rightarrow\\; u = \\log_b c = \\frac{\\ln c}{\\ln b}',
            body: `Read the equation as "$u$ is the exponent that turns $b$ into $c$" and evaluate with the ${link('logarithms.change-of-base-formula', 'change of base formula')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $5\\cdot 2^{x} - 3 = 57$',
          items: [
            {
              title: 'Isolate the power.',
              body: `Undo the additions and multiplications around it first (${link('lesson.powers.exponential-equations.preparing', 'preparing the equation')}). Logarithms must see a lone power on one side.`,
              state: '$5\\cdot 2^x = 60 \\;\\Rightarrow\\; 2^x = 12$',
            },
            {
              title: 'Take ln of both sides.',
              body: 'Both sides, the whole side.',
              state: '$\\ln(2^x) = \\ln 12$',
            },
            {
              title: 'Bring the exponent down.',
              body: `${link('logarithms.power-rule', 'Power rule')}: $\\ln(2^x) = x\\ln 2$. If the exponent is an expression, it comes down as a bracket.`,
              state: '$x\\ln 2 = \\ln 12$',
              atomic: 'log-power-rule',
            },
            {
              title: 'Solve for the unknown and evaluate.',
              body: 'Divide by the log in front; give the exact form, then a decimal.',
              state: '$x = \\frac{\\ln 12}{\\ln 2} \\approx 3.585$',
            },
          ],
        },
        examples: [
          {
            title: 'a plain power equals a number',
            badge: 'basic',
            lines: [
              { math: '$3^x = 20 \\;\\Rightarrow\\; x\\ln 3 = \\ln 20$', why: 'ln both sides, power rule' },
              { math: '$x = \\frac{\\ln 20}{\\ln 3} \\approx 2.727$', why: '', answer: true },
            ],
          },
          {
            title: 'base e with a rate',
            badge: 'ln cancels e',
            lines: [
              { math: '$e^{0.3t} = 4 \\;\\Rightarrow\\; 0.3t = \\ln 4$', why: '$\\ln e^{u} = u$' },
              { math: '$t = \\frac{\\ln 4}{0.3} \\approx 4.62$', why: '', answer: true },
            ],
          },
          {
            title: 'the unknown on both sides',
            badge: 'collect the x terms',
            lines: [
              { math: '$7^{x+2} = 3^{x} \\;\\Rightarrow\\; (x + 2)\\ln 7 = x\\ln 3$', why: 'ln both sides; brackets around the exponent' },
              { math: '$x(\\ln 7 - \\ln 3) = -2\\ln 7$', why: 'collect $x$ on one side' },
              { math: '$x = \\frac{-2\\ln 7}{\\ln 7 - \\ln 3} \\approx -4.59$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A logarithm answers "which exponent?". Asking $\\ln$ about $2^x$ returns $x$ times $\\ln 2$, so the unknown drops out of the exponent and becomes a factor. Everything after that is a linear equation.',
        },
        pitfalls: [
          {
            title: 'Taking the log before isolating',
            wrong: '$\\ln(5\\cdot 2^x - 3) = \\ln 57$, then stuck',
            right: 'isolate first: $2^x = 12$, then take logs',
          },
          {
            title: 'Splitting a log over a sum',
            wrong: '$\\ln(2^x + 3) = x\\ln 2 + \\ln 3$',
            right: 'no rule does that; isolate the power instead',
          },
          {
            title: 'Dropping the bracket on a compound exponent',
            wrong: '$\\ln 7^{x+2} = x + 2\\ln 7$',
            right: '$\\ln 7^{x+2} = (x + 2)\\ln 7$',
          },
          {
            title: 'Dividing the logs the wrong way',
            wrong: '$x = \\frac{\\ln 3}{\\ln 20}$ for $3^x = 20$',
            right: '$x = \\frac{\\ln 20}{\\ln 3}$; the argument goes on top',
          },
        ],
        related: ['exponential-equations-same-base', 'logarithmic-equations', 'exponential-growth-decay-problems'],
        builtOn: [
          { label: 'Power rule for logarithms', url: ruleUrl('logarithms.power-rule') },
          { label: 'Change of base formula', url: ruleUrl('logarithms.change-of-base-formula') },
          { label: 'Solving with logarithms (lesson)', url: ruleUrl('lesson.powers.exponential-equations.logarithms') },
        ],
      },
    },
    {
      id: 'exponential-inequalities',
      slug: 'exponential-inequalities',
      name: 'How to solve an exponential inequality',
      description: 'Match bases and compare exponents; flip the sign when the base is between 0 and 1.',
      uses: ['exponent rules', 'monotonicity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'powers',
      indexed: false,
      seo: {
        title: 'How to Solve Exponential Inequalities (When to Flip the Sign) | Learn Math Class',
        description: 'Solve exponential inequalities: write both sides with one base, compare exponents, keep the sign for a base above 1 and flip it below 1. Examples.',
        keywords: ['exponential inequalities', 'how to solve exponential inequalities', 'flip inequality sign base less than 1', 'exponential inequality examples'],
      },
      page: {
        h1: 'How to Solve an Exponential Inequality',
        lead:
          'An exponential inequality is solved like the equation, by comparing exponents, with one extra rule: a base greater than $1$ keeps the direction of the inequality, a base between $0$ and $1$ reverses it.',
        recognize:
          'The unknown is in an exponent and the sides are compared with $<$, $\\le$, $>$ or $\\ge$: $2^{x} > 32$, $\\left(\\tfrac{1}{3}\\right)^{x} \\le 9$, $5^{2x-1} < 125$, $e^{x} \\ge 7$.',
        recognizeNote: `The lesson states the ${link('lesson.powers.exponential-inequalities.base', 'key principle')}: the base decides the direction. The equation version is [matching bases](!${HUB}/exponential-equations-same-base).`,
        methods: [
          {
            name: 'Match bases, compare exponents',
            tag: 'usual choice',
            preferred: true,
            formula: 'b > 1:\\ b^u < b^v \\iff u < v \\qquad 0 < b < 1:\\ b^u < b^v \\iff u > v',
            body: 'An increasing base preserves order; a decreasing base reverses it.',
          },
          {
            name: 'Take logarithms',
            tag: 'bases do not match',
            formula: 'b^u < c \\;\\Rightarrow\\; u\\ln b < \\ln c \\quad (\\text{divide by } \\ln b;\\ \\ln b < 0 \\text{ flips})',
            body: 'Same rule in disguise: dividing by a negative $\\ln b$ flips the sign, exactly when $0 < b < 1$.',
          },
        ],
        steps: {
          traceLabel: 'On $\\left(\\tfrac{1}{3}\\right)^{x-2} \\le 9$',
          items: [
            {
              title: 'Write both sides as powers of one base.',
              body: `As for the equation (${link('lesson.powers.exponential-inequalities.simplification', 'simplification')}). Choose the base greater than $1$ if you can, so nothing flips.`,
              state: '$3^{-(x-2)} \\le 3^{2}$',
              atomic: 'power-of-power',
            },
            {
              title: 'Decide whether the base flips the sign.',
              body: 'Base $> 1$: keep the direction. Base between $0$ and $1$: reverse it. Here the base is $3$, so nothing flips (the flip was absorbed by the minus sign in the exponent).',
              state: 'base $3 > 1$: keep $\\le$',
            },
            {
              title: 'Compare the exponents.',
              body: 'Write the inequality between the exponents, with the direction decided in step 2.',
              state: '$-(x - 2) \\le 2$',
            },
            {
              title: 'Solve the resulting inequality.',
              body: `A [linear inequality](!/algebra/inequalities/methods/linear-inequalities); remember that dividing by a negative number flips the sign there too.`,
              state: '$-x + 2 \\le 2 \\;\\Rightarrow\\; -x \\le 0 \\;\\Rightarrow\\; x \\ge 0$',
            },
          ],
        },
        examples: [
          {
            title: 'base greater than 1',
            badge: 'no flip',
            lines: [
              { math: '$2^{x} > 32 = 2^5$', why: 'match bases' },
              { math: '$x > 5$', why: 'base $2 > 1$ keeps the direction', answer: true },
            ],
          },
          {
            title: 'base between 0 and 1',
            badge: 'flip',
            lines: [
              { math: '$\\left(\\tfrac{1}{2}\\right)^{x} < \\tfrac{1}{8} = \\left(\\tfrac{1}{2}\\right)^3$', why: 'match bases' },
              { math: '$x > 3$', why: 'base $\\frac{1}{2}$ reverses the direction', answer: true },
            ],
          },
          {
            title: 'with logarithms',
            badge: 'bases cannot match',
            lines: [
              { math: '$3^{x} \\ge 7 \\;\\Rightarrow\\; x\\ln 3 \\ge \\ln 7$', why: 'ln both sides' },
              { math: '$x \\ge \\frac{\\ln 7}{\\ln 3} \\approx 1.77$', why: '$\\ln 3 > 0$, no flip', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw $y = 2^t$ and $y = \\left(\\tfrac{1}{2}\\right)^t$. The first climbs, so a bigger exponent means a bigger value and the inequality direction survives. The second falls, so a bigger exponent means a smaller value, and the direction turns around.',
        },
        pitfalls: [
          {
            title: 'Forgetting the flip for a small base',
            wrong: '$\\left(\\tfrac{1}{2}\\right)^x < \\left(\\tfrac{1}{2}\\right)^3 \\Rightarrow x < 3$',
            right: '$x > 3$',
          },
          {
            title: 'Flipping twice',
            wrong: 'rewriting $\\left(\\tfrac{1}{3}\\right)^{x}$ as $3^{-x}$ and also reversing the sign',
            right: 'the minus in the exponent already does the flip; reverse once, not twice',
          },
          {
            title: 'Treating the inequality as an equation',
            wrong: 'answer $x = 5$ for $2^x > 32$',
            right: 'the answer is a range: $x > 5$',
          },
        ],
        related: ['exponential-equations-same-base', 'logarithmic-inequalities', 'exponential-equations-logarithms'],
        builtOn: [
          { label: 'Base determines direction (lesson)', url: ruleUrl('lesson.powers.exponential-inequalities.base') },
          { label: 'Power of a power', url: ruleUrl('exponents.power-of-a-power') },
          { label: 'Properties of inequalities', url: ruleUrl('lesson.inequalities.properties') },
        ],
      },
    },

    // ═══ Composite — roots ═════════════════════════════════════════════
    {
      id: 'simplify-radicals',
      slug: 'simplify-radicals',
      name: 'How to simplify a radical',
      description: 'Factor out every perfect power from under the root, with numbers and with variables.',
      uses: ['product rule for radicals', 'perfect squares'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'roots',
      indexed: false,
      seo: {
        title: 'How to Simplify a Radical (Square Roots and Higher Roots) | Learn Math Class',
        description: 'Simplify radicals: split the radicand into a perfect power times a leftover, take the root of the perfect power. Numbers, variables and cube roots.',
        keywords: ['how to simplify radicals', 'simplify square roots', 'simplify radicals with variables', 'simplify cube roots', 'simplest radical form'],
      },
      page: {
        h1: 'How to Simplify a Radical',
        lead:
          'A radical is in simplest form when nothing under the root is a perfect power of the index. Pull every perfect square (or cube, or $n$th power) outside; whatever remains stays under the root.',
        recognize:
          'A root of a number or expression that is not itself a perfect power: $\\sqrt{72}$, $\\sqrt{50x^3}$, $\\sqrt[3]{54a^5}$, $\\sqrt{12}\\cdot\\sqrt{3}$. Test: does the radicand have a factor that is a perfect square (cube, $n$th power)? If so, it is not simplified yet.',
        recognizeNote: `What "simplest form" means is in ${link('lesson.roots.simplifying.simplest-form', 'the simplifying radicals lesson')}; the rule that makes it work is the ${link('radicals.product-rule', 'product rule for radicals')}.`,
        steps: {
          traceLabel: 'On $\\sqrt{50x^3}$',
          items: [
            {
              title: 'Factor the number: pull out the largest perfect power.',
              body: `For a square root, the largest perfect square factor; for a cube root, the largest perfect cube (${link('lesson.roots.simplifying.perfect-powers', 'factoring out perfect powers')}).`,
              state: '$50 = 25\\cdot 2$',
            },
            {
              title: 'Factor the variables: split each power into a multiple of the index plus a remainder.',
              body: `$x^3 = x^2\\cdot x$ for a square root; $a^5 = a^3\\cdot a^2$ for a cube root (${link('lesson.roots.simplifying.variables', 'simplifying with variables')}).`,
              state: '$x^3 = x^2\\cdot x$',
            },
            {
              title: 'Split the root with the product rule and take the perfect roots.',
              body: `${link('radicals.product-rule', 'Product rule')}: the root of a product is the product of the roots.`,
              state: '$\\sqrt{25}\\cdot\\sqrt{x^2}\\cdot\\sqrt{2x} = 5|x|\\sqrt{2x}$',
              atomic: 'radical-product-rule',
            },
            {
              title: 'Write the answer and settle the sign.',
              body: `An even root of $x^2$ is $|x|$ (${link('radicals.even-root-identity', 'even root identity')}); if the problem says $x \\ge 0$, drop the bars. Odd roots keep the sign and need no bars.`,
              state: '$5x\\sqrt{2x}$ for $x \\ge 0$',
            },
          ],
        },
        examples: [
          {
            title: 'a number',
            badge: 'basic',
            lines: [
              { math: '$\\sqrt{72} = \\sqrt{36\\cdot 2}$', why: '$36$ is the largest square factor' },
              { math: '$= 6\\sqrt{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'number and variables',
            badge: 'even root, sign',
            lines: [
              { math: '$\\sqrt{50x^3} = \\sqrt{25x^2}\\cdot\\sqrt{2x}$', why: 'split off the perfect squares' },
              { math: '$= 5x\\sqrt{2x}$ ($x \\ge 0$)', why: 'the radicand forces $x \\ge 0$ anyway', answer: true },
            ],
          },
          {
            title: 'a cube root',
            badge: 'index 3',
            lines: [
              { math: '$\\sqrt[3]{54a^5} = \\sqrt[3]{27a^3}\\cdot\\sqrt[3]{2a^2}$', why: '$27$ and $a^3$ are perfect cubes' },
              { math: '$= 3a\\sqrt[3]{2a^2}$', why: 'no absolute value for an odd root', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            '$\\sqrt{72}$ is the side of a square of area $72$. Cut that square into $36$ small squares of area $2$ each, arranged $6$ by $6$: the side is $6$ small sides, each $\\sqrt{2}$ long. Simplifying a radical is finding that grid.',
        },
        pitfalls: [
          {
            title: 'Splitting a sum under the root',
            wrong: '$\\sqrt{9 + 16} = 3 + 4$',
            right: '$\\sqrt{25} = 5$; the product rule works for products only',
          },
          {
            title: 'Pulling out a non-square',
            wrong: '$\\sqrt{72} = \\sqrt{8}\\cdot\\sqrt{9} = 3\\sqrt{8}$ and stopping',
            right: '$\\sqrt{8}$ still holds a square: $3\\cdot 2\\sqrt{2} = 6\\sqrt{2}$',
          },
          {
            title: 'Halving the exponent of every variable',
            wrong: '$\\sqrt{x^3} = x^{1.5}$ as the simplified form',
            right: '$\\sqrt{x^3} = x\\sqrt{x}$; the leftover stays under the root',
          },
          {
            title: 'Losing the absolute value',
            wrong: '$\\sqrt{x^2} = x$ for all $x$',
            right: '$\\sqrt{x^2} = |x|$; $\\sqrt{(-3)^2} = 3$',
          },
        ],
        related: ['radical-operations', 'rationalize-denominator', 'radical-equations'],
        builtOn: [
          { label: 'Product rule for radicals', url: ruleUrl('radicals.product-rule') },
          { label: 'Even root identity', url: ruleUrl('radicals.even-root-identity') },
          { label: 'Simplifying radicals (lesson)', url: ruleUrl('lesson.roots.simplifying') },
        ],
      },
    },
    {
      id: 'rationalize-denominator',
      slug: 'rationalize-denominator',
      name: 'How to rationalize a denominator',
      description: 'Remove roots from the bottom of a fraction: multiply by a root, a conjugate, or a missing power.',
      uses: ['product rule for radicals', 'conjugates'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'roots',
      indexed: false,
      seo: {
        title: 'How to Rationalize a Denominator (Roots and Conjugates) | Learn Math Class',
        description: 'Rationalize a denominator: multiply by the root, by the conjugate of a two-term denominator, or by the missing power of a cube root. Examples.',
        keywords: ['how to rationalize the denominator', 'rationalize denominator conjugate', 'rationalizing cube roots', 'rationalize denominator examples'],
      },
      page: {
        h1: 'How to Rationalize a Denominator',
        lead:
          'A fraction is not in simplest form while a root sits in its denominator. Multiply top and bottom by the same thing, chosen so that the denominator becomes a whole number or a plain polynomial, and the value of the fraction does not change.',
        recognize:
          'A root in a denominator: $\\frac{3}{\\sqrt{5}}$, $\\frac{2}{\\sqrt{3} - 1}$, $\\frac{1}{\\sqrt[3]{4}}$, $\\frac{\\sqrt{x}}{\\sqrt{x} + 2}$. Test: is there a radical sign below the fraction bar?',
        recognizeNote: `The three cases are worked through in the lesson: ${link('lesson.roots.simplifying.rationalize-monomial', 'monomial')}, ${link('lesson.roots.simplifying.rationalize-binomial', 'binomial')} and ${link('lesson.roots.simplifying.rationalize-higher', 'higher-index')} denominators.`,
        methods: [
          {
            name: 'Single root: multiply by that root',
            tag: 'monomial denominator',
            preferred: true,
            formula: '\\frac{a}{\\sqrt{b}}\\cdot\\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}',
            body: `$\\sqrt{b}\\cdot\\sqrt{b} = b$ by the ${link('radicals.product-rule', 'product rule')}.`,
          },
          {
            name: 'Two terms: multiply by the conjugate',
            tag: 'binomial denominator',
            formula: '\\frac{a}{\\sqrt{b} + c}\\cdot\\frac{\\sqrt{b} - c}{\\sqrt{b} - c} = \\frac{a(\\sqrt{b} - c)}{b - c^2}',
            body: `The ${link('identities.difference-of-squares', 'difference of squares')} kills the root (${link('lesson.roots.operations.conjugates', 'conjugates')}).`,
          },
          {
            name: 'Cube root: multiply by the missing power',
            tag: 'higher index',
            formula: '\\frac{a}{\\sqrt[3]{b}}\\cdot\\frac{\\sqrt[3]{b^2}}{\\sqrt[3]{b^2}} = \\frac{a\\sqrt[3]{b^2}}{b}',
            body: 'Complete the radicand to a perfect cube: $\\sqrt[3]{b}\\cdot\\sqrt[3]{b^2} = \\sqrt[3]{b^3} = b$.',
          },
        ],
        titles: { methods: 'Three cases' },
        steps: {
          traceLabel: 'On $\\frac{2}{\\sqrt{3} - 1}$',
          items: [
            {
              title: 'Identify the shape of the denominator.',
              body: 'One root, two terms with a root, or a root with index above $2$. That picks the multiplier.',
              state: 'two terms: $\\sqrt{3} - 1$',
            },
            {
              title: 'Build the multiplier.',
              body: 'Single root: the root itself. Two terms: the conjugate (same terms, opposite middle sign). Cube root of $b$: $\\sqrt[3]{b^2}$.',
              state: 'conjugate $\\sqrt{3} + 1$',
            },
            {
              title: 'Multiply numerator and denominator by it.',
              body: 'Both, so the fraction keeps its value. Expand the denominator with the difference of squares; expand the numerator as it comes.',
              state: '$\\frac{2(\\sqrt{3} + 1)}{(\\sqrt{3})^2 - 1^2} = \\frac{2(\\sqrt{3} + 1)}{2}$',
              atomic: 'radical-product-rule',
            },
            {
              title: 'Simplify.',
              body: `Cancel common factors; [simplify any remaining radical](!${HUB}/simplify-radicals) in the numerator.`,
              state: '$\\sqrt{3} + 1$',
            },
          ],
        },
        examples: [
          {
            title: 'single square root',
            badge: 'monomial',
            lines: [
              { math: '$\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{\\sqrt{5}\\cdot\\sqrt{5}}$', why: 'multiply by $\\frac{\\sqrt{5}}{\\sqrt{5}}$' },
              { math: '$= \\frac{3\\sqrt{5}}{5}$', why: '', answer: true },
            ],
          },
          {
            title: 'two terms',
            badge: 'conjugate',
            lines: [
              { math: '$\\frac{2}{\\sqrt{3} - 1} = \\frac{2(\\sqrt{3} + 1)}{3 - 1}$', why: 'conjugate; difference of squares' },
              { math: '$= \\sqrt{3} + 1$', why: '', answer: true },
            ],
          },
          {
            title: 'cube root',
            badge: 'missing power',
            lines: [
              { math: '$\\frac{1}{\\sqrt[3]{4}} = \\frac{\\sqrt[3]{2}}{\\sqrt[3]{4}\\cdot\\sqrt[3]{2}}$', why: '$4\\cdot 2 = 8$ is a perfect cube' },
              { math: '$= \\frac{\\sqrt[3]{2}}{2}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Multiplying by $\\frac{\\sqrt{5}}{\\sqrt{5}}$ is multiplying by $1$: the number does not change, only its costume. The point of the costume is that $\\frac{3\\sqrt{5}}{5}$ can be estimated by hand ($3\\cdot 2.236 \\div 5$) while $\\frac{3}{\\sqrt{5}}$ asks you to divide by an endless decimal.',
        },
        pitfalls: [
          {
            title: 'Multiplying only the denominator',
            wrong: '$\\frac{3}{\\sqrt{5}} = \\frac{3}{5}$',
            right: 'multiply the numerator too: $\\frac{3\\sqrt{5}}{5}$',
          },
          {
            title: 'Using the root instead of the conjugate on two terms',
            wrong: '$\\frac{2}{\\sqrt{3} - 1}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3 - \\sqrt{3}}$, still a root below',
            right: 'multiply by the conjugate $\\sqrt{3} + 1$',
          },
          {
            title: 'Squaring a cube root',
            wrong: '$\\frac{1}{\\sqrt[3]{4}}\\cdot\\frac{\\sqrt[3]{4}}{\\sqrt[3]{4}} = \\frac{\\sqrt[3]{4}}{\\sqrt[3]{16}}$, still a root below',
            right: 'complete to a cube: multiply by $\\sqrt[3]{2}$',
          },
        ],
        related: ['simplify-radicals', 'radical-operations', 'radical-equations'],
        builtOn: [
          { label: 'Product rule for radicals', url: ruleUrl('radicals.product-rule') },
          { label: 'Difference of squares', url: ruleUrl('identities.difference-of-squares') },
          { label: 'Conjugates (lesson)', url: ruleUrl('lesson.roots.operations.conjugates') },
        ],
      },
    },
    {
      id: 'radical-operations',
      slug: 'radical-operations',
      name: 'How to add, subtract, multiply and divide radicals',
      description: 'Simplify first, then combine like radicals; multiply and divide roots with the same index.',
      uses: ['product rule for radicals', 'like terms'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'roots',
      indexed: false,
      seo: {
        title: 'How to Add, Subtract, Multiply and Divide Radicals | Learn Math Class',
        description: 'Operate on radicals: simplify each root, add only like radicals, multiply or divide roots with the same index, expand like binomials. Examples.',
        keywords: ['operations with radicals', 'adding and subtracting radicals', 'multiplying radicals', 'like radicals', 'radical expressions examples'],
      },
      page: {
        h1: 'How to Add, Subtract, Multiply and Divide Radicals',
        lead:
          'Radicals behave like algebraic terms: $3\\sqrt{2} + 5\\sqrt{2}$ combines because the roots match, $\\sqrt{2} + \\sqrt{3}$ does not. Simplify every root first, since matching roots often hide inside unsimplified ones.',
        recognize:
          'Roots combined with $+$, $-$, $\\times$ or $\\div$: $\\sqrt{12} + \\sqrt{27}$, $2\\sqrt{6}\\cdot 3\\sqrt{2}$, $(\\sqrt{5} + 1)(\\sqrt{5} - 2)$, $\\frac{\\sqrt{40}}{\\sqrt{5}}$.',
        recognizeNote: `The lesson on ${link('lesson.roots.operations', 'operations on radicals')} covers all four; the key idea is ${link('lesson.roots.operations.like-radicals', 'like radicals')}.`,
        methods: [
          {
            name: 'Add or subtract: like radicals only',
            tag: 'same root, same index',
            preferred: true,
            formula: 'a\\sqrt[n]{r} + b\\sqrt[n]{r} = (a + b)\\sqrt[n]{r}',
            body: `Combine the coefficients; the root stays. Unlike radicals are left as a sum (${link('lesson.roots.operations.add-subtract', 'adding and subtracting')}).`,
          },
          {
            name: 'Multiply or divide: same index',
            tag: 'product and quotient rules',
            formula: '\\sqrt[n]{a}\\cdot\\sqrt[n]{b} = \\sqrt[n]{ab}, \\qquad \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}',
            body: `Multiply coefficients together and radicands together, then simplify (${link('lesson.roots.operations.multiply', 'multiplying')}, ${link('lesson.roots.operations.divide', 'dividing')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\sqrt{12} + \\sqrt{27} - \\sqrt{3}$',
          items: [
            {
              title: 'Simplify every radical.',
              body: `[Pull out perfect powers](!${HUB}/simplify-radicals) so hidden like radicals appear.`,
              state: '$2\\sqrt{3} + 3\\sqrt{3} - \\sqrt{3}$',
              atomic: 'radical-product-rule',
            },
            {
              title: 'Group like radicals.',
              body: 'Same radicand and same index. Treat each distinct root as a different variable.',
              state: 'all three are multiples of $\\sqrt{3}$',
            },
            {
              title: 'Add or subtract the coefficients.',
              body: 'The root is carried along unchanged.',
              state: '$(2 + 3 - 1)\\sqrt{3} = 4\\sqrt{3}$',
            },
            {
              title: 'For products, multiply then simplify; for quotients, divide then rationalize.',
              body: `Expand products of sums term by term as with binomials, then [rationalize](!${HUB}/rationalize-denominator) any root left in a denominator.`,
              state: 'not needed here',
            },
          ],
        },
        examples: [
          {
            title: 'sum of unsimplified roots',
            badge: 'simplify first',
            lines: [
              { math: '$\\sqrt{12} + \\sqrt{27} - \\sqrt{3} = 2\\sqrt{3} + 3\\sqrt{3} - \\sqrt{3}$', why: 'simplify each' },
              { math: '$= 4\\sqrt{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'a product',
            badge: 'multiply, then simplify',
            lines: [
              { math: '$2\\sqrt{6}\\cdot 3\\sqrt{2} = 6\\sqrt{12}$', why: 'coefficients together, radicands together' },
              { math: '$= 6\\cdot 2\\sqrt{3} = 12\\sqrt{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'a product of two binomials',
            badge: 'FOIL',
            lines: [
              { math: '$(\\sqrt{5} + 1)(\\sqrt{5} - 2) = 5 - 2\\sqrt{5} + \\sqrt{5} - 2$', why: 'four products' },
              { math: '$= 3 - \\sqrt{5}$', why: 'combine like terms', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Think of $\\sqrt{3}$ as a unit, like a centimetre. $2\\sqrt{3} + 3\\sqrt{3}$ is $2$ units plus $3$ units; $\\sqrt{2} + \\sqrt{3}$ is centimetres plus inches, which can only be written side by side.',
        },
        pitfalls: [
          {
            title: 'Adding radicands',
            wrong: '$\\sqrt{2} + \\sqrt{3} = \\sqrt{5}$',
            right: 'unlike radicals stay apart; $\\sqrt{2} + \\sqrt{3} \\approx 3.15$, $\\sqrt{5} \\approx 2.24$',
          },
          {
            title: 'Skipping the simplification',
            wrong: '"$\\sqrt{12} + \\sqrt{27}$ cannot be combined"',
            right: 'both simplify to multiples of $\\sqrt{3}$: $5\\sqrt{3}$',
          },
          {
            title: 'Squaring a sum term by term',
            wrong: '$(\\sqrt{5} + 1)^2 = 5 + 1$',
            right: '$(\\sqrt{5} + 1)^2 = 5 + 2\\sqrt{5} + 1 = 6 + 2\\sqrt{5}$',
          },
        ],
        related: ['simplify-radicals', 'rationalize-denominator', 'radical-equations'],
        builtOn: [
          { label: 'Product rule for radicals', url: ruleUrl('radicals.product-rule') },
          { label: 'Quotient rule for radicals', url: ruleUrl('radicals.quotient-rule') },
          { label: 'Operations on radicals (lesson)', url: ruleUrl('lesson.roots.operations') },
        ],
      },
    },
    {
      id: 'radical-equations',
      slug: 'radical-equations',
      name: 'How to solve a radical equation',
      description: 'Isolate the root, raise both sides to the index, solve, then check for extraneous solutions.',
      uses: ['powers', 'quadratic equations', 'checking'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'roots',
      indexed: false,
      seo: {
        title: 'How to Solve Radical Equations (and Catch Extraneous Solutions) | Learn Math Class',
        description: 'Solve radical equations: isolate the root, square or cube both sides, solve, then check every answer in the original. Two-radical case included.',
        keywords: ['how to solve radical equations', 'radical equations extraneous solutions', 'square root equations', 'equations with two radicals'],
      },
      page: {
        h1: 'How to Solve a Radical Equation',
        lead:
          'Get the root alone on one side, then raise both sides to the power that undoes it. Squaring can create solutions the original equation never had, so every answer must be checked in the original equation.',
        recognize:
          'The unknown is under a root: $\\sqrt{2x + 3} = x$, $\\sqrt{x + 7} - 1 = x$, $\\sqrt[3]{x - 1} = 2$, $\\sqrt{x + 5} = \\sqrt{2x} + 1$. Test: is there a radical sign with $x$ inside it?',
        recognizeNote: `The ${link('lesson.roots.equations.strategy', 'basic strategy')} and the reason for ${link('lesson.roots.equations.extraneous', 'extraneous solutions')} are in the radical equations lesson.`,
        steps: {
          traceLabel: 'On $\\sqrt{x + 7} - 1 = x$',
          items: [
            {
              title: 'Isolate one radical.',
              body: `Move everything else to the other side (${link('lesson.roots.equations.isolation', 'why isolation comes first')}).`,
              state: '$\\sqrt{x + 7} = x + 1$',
            },
            {
              title: 'Raise both sides to the index.',
              body: 'Square for a square root, cube for a cube root. Square the **whole** side: $(x + 1)^2$, not $x^2 + 1$.',
              state: '$x + 7 = x^2 + 2x + 1$',
              atomic: 'power-of-power',
            },
            {
              title: 'If a radical remains, isolate it and raise again.',
              body: `Equations with two square roots need this (${link('lesson.roots.equations.two-radicals', 'two radicals')}).`,
              state: 'none left',
            },
            {
              title: 'Solve the resulting equation.',
              body: `Usually a [quadratic](!/algebra/equations/methods/quadratic-factoring).`,
              state: '$x^2 + x - 6 = 0 \\;\\Rightarrow\\; (x + 3)(x - 2) = 0 \\;\\Rightarrow\\; x = -3, 2$',
            },
            {
              title: 'Check every answer in the original equation.',
              body: 'Squaring is not reversible: $-3 = 3$ is false, but $9 = 9$ is true. Reject anything that fails.',
              state: '$x = 2$: $\\sqrt{9} - 1 = 2$ ✓; $x = -3$: $\\sqrt{4} - 1 = 1 \\neq -3$ ✗. Solution: $x = 2$',
            },
          ],
        },
        examples: [
          {
            title: 'one square root',
            badge: 'extraneous root appears',
            lines: [
              { math: '$\\sqrt{x + 7} - 1 = x \\;\\Rightarrow\\; x + 7 = (x + 1)^2$', why: 'isolate, square' },
              { math: '$x = -3$ or $x = 2$; only $x = 2$ checks', why: '', answer: true },
            ],
          },
          {
            title: 'a cube root',
            badge: 'no extraneous solutions',
            lines: [
              { math: '$\\sqrt[3]{x - 1} = 2 \\;\\Rightarrow\\; x - 1 = 8$', why: 'cube both sides' },
              { math: '$x = 9$', why: 'cubing is reversible; still check', answer: true },
            ],
          },
          {
            title: 'two square roots',
            badge: 'square twice',
            lines: [
              { math: '$\\sqrt{x + 5} = \\sqrt{2x} + 1 \\;\\Rightarrow\\; x + 5 = 2x + 2\\sqrt{2x} + 1$', why: 'square; the cross term keeps a root' },
              { math: '$4 - x = 2\\sqrt{2x} \\;\\Rightarrow\\; 16 - 8x + x^2 = 8x$', why: 'isolate the root, square again' },
              { math: '$x^2 - 16x + 16 = 0 \\;\\Rightarrow\\; x = 8 \\pm 4\\sqrt{3}$; only $x = 8 - 4\\sqrt{3} \\approx 1.07$ checks', why: '$8 + 4\\sqrt{3}$ makes $4 - x$ negative', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Squaring both sides folds the number line: $3$ and $-3$ both land on $9$. The squared equation is true for any solution of the original, but also for the "mirror" solutions that squaring created. The check at the end unfolds the line again.',
        },
        pitfalls: [
          {
            title: 'Squaring term by term',
            wrong: '$(x + 1)^2 = x^2 + 1$',
            right: '$(x + 1)^2 = x^2 + 2x + 1$',
          },
          {
            title: 'Squaring before isolating',
            wrong: '$(\\sqrt{x + 7} - 1)^2 = x^2$ expands into a mess with a root still inside',
            right: 'isolate first: $\\sqrt{x + 7} = x + 1$',
          },
          {
            title: 'Skipping the check',
            wrong: '$x = -3$ and $x = 2$ both reported',
            right: '$x = -3$ fails in the original; a square root is never negative',
          },
        ],
        related: ['simplify-radicals', 'radical-operations', 'exponential-equations-same-base'],
        builtOn: [
          { label: 'Radical equations (lesson)', url: ruleUrl('lesson.roots.equations') },
          { label: 'Even root identity', url: ruleUrl('radicals.even-root-identity') },
          { label: 'Square of a sum', url: ruleUrl('identities.square-of-a-sum') },
        ],
      },
    },

    // ═══ Composite — logarithms ════════════════════════════════════════
    {
      id: 'evaluate-logarithms',
      slug: 'evaluate-logarithms',
      name: 'How to evaluate a logarithm',
      description: 'Ask "which exponent?", use the key values, or change the base for a calculator.',
      uses: ['definition of the logarithm', 'change of base'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'logarithms',
      indexed: false,
      seo: {
        title: 'How to Evaluate a Logarithm Without a Calculator | Learn Math Class',
        description: 'Evaluate logarithms: turn log_b(x) into the question b^? = x, write x as a power of b (fractions and roots too), or change the base. Examples.',
        keywords: ['how to evaluate logarithms', 'evaluate log without a calculator', 'log base 2 of 8', 'logarithm of a fraction', 'change of base evaluate'],
      },
      page: {
        h1: 'How to Evaluate a Logarithm',
        lead:
          '$\\log_b x$ asks one question: to what power must $b$ be raised to give $x$? Write $x$ as a power of $b$ and the exponent is the answer. When $x$ is not a nice power, change the base and use a calculator.',
        recognize:
          '"Evaluate $\\log_2 8$", "find $\\log_3\\frac{1}{9}$", "$\\ln\\sqrt{e}$", "$\\log_5 20$ to three decimals". Test: a logarithm with numbers only, no unknown.',
        recognizeNote: `The question-form is the ${link('lesson.logarithms.definition', 'definition of a logarithm')}; the ${link('lesson.logarithms.key-values', 'key values')} $\\log_b 1 = 0$ and $\\log_b b = 1$ are worth memorizing.`,
        methods: [
          {
            name: 'Write the argument as a power of the base',
            tag: 'usual choice',
            preferred: true,
            formula: '\\log_b x = n \\iff b^n = x',
            body: `Exact answers. Fractions give negative exponents, roots give fractional ones (${link('lesson.powers.rational-exponents', 'rational exponents')}).`,
          },
          {
            name: 'Change the base',
            tag: 'calculator answers',
            formula: '\\log_b x = \\frac{\\ln x}{\\ln b}',
            body: `${link('logarithms.change-of-base-formula', 'Change of base formula')} for arguments that are not powers of the base.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\log_3\\frac{1}{9}$',
          items: [
            {
              title: 'Turn the log into an exponent question.',
              body: '$\\log_b x = ?$ means $b^{?} = x$.',
              state: '$3^{?} = \\frac{1}{9}$',
            },
            {
              title: 'Write the argument as a power of the base.',
              body: `Use ${link('exponents.negative-exponent', 'negative exponents')} for fractions and ${link('exponents.radical-to-exponent', 'fractional exponents')} for roots.`,
              state: '$\\frac{1}{9} = 3^{-2}$',
              atomic: 'negative-exponents',
            },
            {
              title: 'Read off the exponent.',
              body: 'That exponent is the value of the logarithm.',
              state: '$\\log_3\\frac{1}{9} = -2$',
            },
            {
              title: 'If no exact power exists, change the base and compute.',
              body: `${link('logarithms.change-of-base-formula', 'Change of base')} with $\\ln$ or $\\log_{10}$.`,
              state: 'not needed here',
              atomic: 'change-of-base',
            },
          ],
        },
        examples: [
          {
            title: 'a whole-number power',
            badge: 'basic',
            lines: [
              { math: '$\\log_2 8$: $2^{?} = 8 = 2^3$', why: '' },
              { math: '$= 3$', why: '', answer: true },
            ],
          },
          {
            title: 'a root of the base',
            badge: 'fractional exponent',
            lines: [
              { math: '$\\ln\\sqrt{e} = \\ln e^{1/2}$', why: '$\\sqrt{e} = e^{1/2}$' },
              { math: '$= \\tfrac{1}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'not a power of the base',
            badge: 'change of base',
            lines: [
              { math: '$\\log_5 20 = \\frac{\\ln 20}{\\ln 5}$', why: 'change of base' },
              { math: '$\\approx \\frac{2.996}{1.609} \\approx 1.861$', why: 'between $1$ ($\\log_5 5$) and $2$ ($\\log_5 25$)', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A logarithm counts doublings, triplings, tenfoldings. $\\log_2 8 = 3$ because $8$ is three doublings of $1$; $\\log_3\\frac{1}{9} = -2$ because $\\frac{1}{9}$ is two "un-triplings". Negative logs are not negative numbers gone wrong, they are steps taken backwards.',
        },
        pitfalls: [
          {
            title: 'Dividing instead of asking for the exponent',
            wrong: '$\\log_2 8 = 4$',
            right: '$2^3 = 8$, so $\\log_2 8 = 3$',
          },
          {
            title: 'A log of a fraction between 0 and 1 is negative',
            wrong: '$\\log_3\\frac{1}{9} = 2$',
            right: '$-2$; the argument is below $1$',
          },
          {
            title: 'Logs of 0 or negatives',
            wrong: '$\\log_2 0 = 0$',
            right: `$\\log_b x$ is undefined for $x \\le 0$ (${link('lesson.logarithms.restrictions', 'restrictions')})`,
          },
        ],
        related: ['expand-condense-logarithms', 'logarithmic-equations', 'exponential-equations-logarithms'],
        builtOn: [
          { label: 'Definition of a logarithm (lesson)', url: ruleUrl('lesson.logarithms.definition') },
          { label: 'Change of base formula', url: ruleUrl('logarithms.change-of-base-formula') },
          { label: 'Logarithm of the base', url: ruleUrl('logarithms.log-of-base') },
        ],
      },
    },
    {
      id: 'expand-condense-logarithms',
      slug: 'expand-condense-logarithms',
      name: 'How to expand and condense logarithms',
      description: 'Break one log into a sum of simple logs, or fold a sum back into one log.',
      uses: ['log product rule', 'log quotient rule', 'log power rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'logarithms',
      indexed: false,
      seo: {
        title: 'How to Expand and Condense Logarithmic Expressions | Learn Math Class',
        description: 'Expand a logarithm with the quotient, product and power rules in that order, and condense a sum of logs back into one. Examples and mistakes.',
        keywords: ['expand logarithms', 'condense logarithms', 'expanding logarithmic expressions', 'write as a single logarithm', 'log rules examples'],
      },
      page: {
        h1: 'How to Expand and Condense Logarithms',
        lead:
          'Expanding takes a logarithm of a product, quotient or power apart into simple logs; condensing runs the same three rules backwards to write a sum of logs as one logarithm. The order matters: quotient first, then product, then power.',
        recognize:
          '"Expand $\\log\\frac{x^2\\sqrt{y}}{z}$", "write $2\\ln x - \\ln y + 3\\ln z$ as a single logarithm", or a log equation whose logs must be combined before solving. Test: logs with products, quotients or powers inside, or several logs with the same base added and subtracted.',
        recognizeNote: `The lesson sections ${link('logarithms.expanding', 'expanding')} and ${link('logarithms.condensing', 'condensing')} cover both directions.`,
        methods: [
          {
            name: 'Expand: quotient, product, power',
            tag: 'outside in',
            preferred: true,
            formula: '\\log_b\\frac{xy^n}{z} = \\log_b x + n\\log_b y - \\log_b z',
            body: `${link('logarithms.quotient-rule', 'Quotient')} splits the fraction, ${link('logarithms.product-rule', 'product')} splits the factors, ${link('logarithms.power-rule', 'power')} brings exponents down.`,
          },
          {
            name: 'Condense: power, product, quotient',
            tag: 'the reverse',
            formula: 'n\\log_b y + \\log_b x - \\log_b z = \\log_b\\frac{xy^n}{z}',
            body: 'First turn coefficients back into exponents, then merge $+$ into products and $-$ into quotients.',
          },
        ],
        steps: {
          traceLabel: 'On expanding $\\log\\frac{x^2\\sqrt{y}}{z}$',
          items: [
            {
              title: 'Split the quotient: top minus bottom.',
              body: `${link('logarithms.quotient-rule', 'Quotient rule')}.`,
              state: '$\\log(x^2\\sqrt{y}) - \\log z$',
              atomic: 'log-quotient-rule',
            },
            {
              title: 'Split each product into a sum.',
              body: `${link('logarithms.product-rule', 'Product rule')}.`,
              state: '$\\log x^2 + \\log\\sqrt{y} - \\log z$',
              atomic: 'log-product-rule',
            },
            {
              title: 'Bring every exponent down as a coefficient.',
              body: `${link('logarithms.power-rule', 'Power rule')}; a root is a fractional exponent.`,
              state: '$2\\log x + \\tfrac{1}{2}\\log y - \\log z$',
              atomic: 'log-power-rule',
            },
            {
              title: 'To condense, run the three steps in reverse.',
              body: 'Coefficients become exponents, sums become products, differences become quotients, finishing with one log.',
              state: 'reverse of the above',
            },
          ],
        },
        examples: [
          {
            title: 'expanding',
            badge: 'quotient, product, power',
            lines: [
              { math: '$\\log\\frac{x^2\\sqrt{y}}{z}$', why: '' },
              { math: '$= 2\\log x + \\tfrac{1}{2}\\log y - \\log z$', why: '', answer: true },
            ],
          },
          {
            title: 'condensing',
            badge: 'power, product, quotient',
            lines: [
              { math: '$2\\ln x - \\ln y + 3\\ln z = \\ln x^2 - \\ln y + \\ln z^3$', why: 'coefficients up' },
              { math: '$= \\ln\\frac{x^2 z^3}{y}$', why: 'plus multiplies, minus divides', answer: true },
            ],
          },
          {
            title: 'a numeric condensation',
            badge: 'evaluate at the end',
            lines: [
              { math: '$\\log_2 48 - \\log_2 3 = \\log_2\\frac{48}{3} = \\log_2 16$', why: 'quotient rule' },
              { math: '$= 4$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Logarithms turn multiplication into addition, which is what slide rules were built on. Expanding a log is sliding the multiplication apart into additions; condensing is sliding it back together. A log of a sum has no rule because addition is already as simple as it gets.',
        },
        pitfalls: [
          {
            title: 'Splitting a sum inside the log',
            wrong: '$\\log(x + y) = \\log x + \\log y$',
            right: 'there is no rule for a sum inside; only products and quotients split',
          },
          {
            title: 'Power rule applied to part of the argument',
            wrong: '$\\log(xy)^2 = \\log x\\cdot y^2$',
            right: '$\\log(xy)^2 = 2\\log(xy) = 2\\log x + 2\\log y$',
          },
          {
            title: 'Condensing a difference as a product',
            wrong: '$\\ln x - \\ln y = \\ln(xy)$',
            right: '$\\ln x - \\ln y = \\ln\\frac{x}{y}$',
          },
          {
            title: 'Mixing bases',
            wrong: '$\\log_2 x + \\log_3 y = \\log(xy)$',
            right: 'the rules need one common base',
          },
        ],
        related: ['evaluate-logarithms', 'logarithmic-equations', 'exponential-equations-logarithms'],
        builtOn: [
          { label: 'Product rule', url: ruleUrl('logarithms.product-rule') },
          { label: 'Quotient rule', url: ruleUrl('logarithms.quotient-rule') },
          { label: 'Power rule', url: ruleUrl('logarithms.power-rule') },
        ],
      },
    },
    {
      id: 'logarithmic-equations',
      slug: 'logarithmic-equations',
      name: 'How to solve a logarithmic equation',
      description: 'Condense to one log, convert to exponential form or equate arguments, then check the domain.',
      uses: ['log rules', 'exponential form', 'domain'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'logarithms',
      indexed: false,
      seo: {
        title: 'How to Solve Logarithmic Equations (Step by Step) | Learn Math Class',
        description: 'Solve log equations: condense to one logarithm, rewrite as an exponential or equate the arguments, solve, then reject answers outside the domain. Examples.',
        keywords: ['how to solve logarithmic equations', 'log equations', 'logarithmic equation extraneous solutions', 'log equation examples', 'condense then solve'],
      },
      page: {
        h1: 'How to Solve a Logarithmic Equation',
        lead:
          'Get the equation into one of two shapes: a single log equal to a number, or a single log on each side with the same base. The first becomes an exponential equation, the second an equation between the arguments. Then throw away any answer that makes a log of a non-positive number.',
        recognize:
          'The unknown is inside a logarithm: $\\log_2(x - 1) = 3$, $\\ln x + \\ln(x - 3) = \\ln 4$, $\\log(x + 3) - \\log x = 1$, $\\log_3 x = \\log_3(2x - 5)$. Test: is there a log sign with $x$ in its argument?',
        recognizeNote: `The lesson covers the ${link('lesson.logarithms.equations.basic', 'basic form')}, ${link('lesson.logarithms.equations.both-sides', 'logs on both sides')} and why ${link('lesson.logarithms.equations.extraneous', 'extraneous solutions')} appear.`,
        methods: [
          {
            name: 'One log = number: exponential form',
            tag: 'usual choice',
            preferred: true,
            formula: '\\log_b u = k \\;\\Rightarrow\\; u = b^k',
            body: `The ${link('lesson.logarithms.definition', 'definition of the logarithm')} read backwards.`,
          },
          {
            name: 'Log = log: equate arguments',
            tag: 'same base both sides',
            formula: '\\log_b u = \\log_b v \\;\\Rightarrow\\; u = v',
            body: 'Logarithms are one-to-one. Both sides must be a single log with the same base first.',
          },
        ],
        steps: {
          traceLabel: 'On $\\ln x + \\ln(x - 3) = \\ln 4$',
          items: [
            {
              title: 'Note the domain.',
              body: `Every argument must be positive (${link('lesson.logarithms.equations.domain', 'domain restrictions')}). Write the conditions down now; you will need them in step 5.`,
              state: '$x > 0$ and $x - 3 > 0$: need $x > 3$',
            },
            {
              title: 'Condense each side to a single logarithm.',
              body: `[Expand and condense logarithms](!${HUB}/expand-condense-logarithms): coefficients become exponents, sums become products.`,
              state: '$\\ln\\big(x(x - 3)\\big) = \\ln 4$',
              atomic: 'log-product-rule',
            },
            {
              title: 'Remove the logs.',
              body: 'Log = number: rewrite as a power of the base. Log = log (same base): set the arguments equal.',
              state: '$x(x - 3) = 4$',
            },
            {
              title: 'Solve the resulting equation.',
              body: `Often a [quadratic](!/algebra/equations/methods/quadratic-factoring).`,
              state: '$x^2 - 3x - 4 = 0 \\;\\Rightarrow\\; (x - 4)(x + 1) = 0 \\;\\Rightarrow\\; x = 4, -1$',
            },
            {
              title: 'Reject answers outside the domain.',
              body: 'Compare with step 1. An answer that makes any original argument zero or negative is extraneous.',
              state: '$x = -1 < 3$ rejected; solution $x = 4$',
            },
          ],
        },
        examples: [
          {
            title: 'one log equals a number',
            badge: 'exponential form',
            lines: [
              { math: '$\\log_2(x - 1) = 3 \\;\\Rightarrow\\; x - 1 = 2^3$', why: 'definition' },
              { math: '$x = 9$', why: 'check: $\\log_2 8 = 3$ ✓', answer: true },
            ],
          },
          {
            title: 'sum of logs',
            badge: 'condense first',
            lines: [
              { math: '$\\ln x + \\ln(x - 3) = \\ln 4 \\;\\Rightarrow\\; x(x - 3) = 4$', why: 'product rule, equate arguments' },
              { math: '$x = 4$ (and $x = -1$ rejected)', why: 'domain $x > 3$', answer: true },
            ],
          },
          {
            title: 'difference of logs equals a number',
            badge: 'quotient rule, then base 10',
            lines: [
              { math: '$\\log(x + 3) - \\log x = 1 \\;\\Rightarrow\\; \\log\\frac{x + 3}{x} = 1$', why: 'quotient rule' },
              { math: '$\\frac{x + 3}{x} = 10 \\;\\Rightarrow\\; x + 3 = 10x \\;\\Rightarrow\\; x = \\tfrac{1}{3}$', why: 'in the domain $x > 0$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The graph of $y = \\ln x$ lives entirely to the right of the $y$-axis. Solving the squared-out equation can produce a point on the left, like $x = -1$, where the graph does not exist. The domain check is just looking at the picture.',
        },
        pitfalls: [
          {
            title: 'Removing logs term by term',
            wrong: '$\\ln x + \\ln(x - 3) = \\ln 4 \\Rightarrow x + (x - 3) = 4$',
            right: 'condense to one log first: $x(x - 3) = 4$',
          },
          {
            title: 'Skipping the domain check',
            wrong: 'reporting $x = -1$ as a solution',
            right: '$\\ln(-1)$ does not exist; reject it',
          },
          {
            title: 'Treating a coefficient as part of the argument',
            wrong: '$2\\log x = \\log 9 \\Rightarrow 2x = 9$',
            right: '$2\\log x = \\log x^2$, so $x^2 = 9$, $x = 3$ (not $-3$)',
          },
        ],
        related: ['expand-condense-logarithms', 'exponential-equations-logarithms', 'logarithmic-inequalities'],
        builtOn: [
          { label: 'Definition of a logarithm (lesson)', url: ruleUrl('lesson.logarithms.definition') },
          { label: 'Condensing logarithms', url: ruleUrl('logarithms.condensing') },
          { label: 'Domain restrictions (lesson)', url: ruleUrl('lesson.logarithms.equations.domain') },
        ],
      },
    },
    {
      id: 'logarithmic-inequalities',
      slug: 'logarithmic-inequalities',
      name: 'How to solve a logarithmic inequality',
      description: 'Remove the logs keeping or flipping the direction by the base, then intersect with the domain.',
      uses: ['monotonicity', 'domain'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'logarithms',
      indexed: false,
      seo: {
        title: 'How to Solve Logarithmic Inequalities (Base Above or Below 1) | Learn Math Class',
        description: 'Solve log inequalities: write the domain, condense, remove the logs (keep the sign for base > 1, flip it for base < 1), intersect with the domain.',
        keywords: ['logarithmic inequalities', 'how to solve log inequalities', 'log inequality base less than 1', 'logarithmic inequality domain', 'log inequality examples'],
      },
      page: {
        h1: 'How to Solve a Logarithmic Inequality',
        lead:
          'A logarithmic inequality is solved like the equation, with two extra cares: the direction of the inequality survives for a base above $1$ and reverses for a base between $0$ and $1$, and the final answer must lie inside the domain where every log exists.',
        recognize:
          'The unknown is inside a logarithm and the sides are compared: $\\log_2(x - 1) < 3$, $\\log_{1/2}(x + 2) \\ge -1$, $\\ln(2x) > \\ln(x + 5)$. Test: a log sign, an inequality sign, and $x$ in the argument.',
        recognizeNote: `The lesson separates the two cases: ${link('lesson.logarithms.inequalities.base-gt-1', 'base greater than one')} and ${link('lesson.logarithms.inequalities.base-lt-1', 'base between zero and one')}, and stresses the ${link('lesson.logarithms.inequalities.domain', 'domain')}.`,
        methods: [
          {
            name: 'Base above 1: keep the direction',
            tag: 'usual case',
            preferred: true,
            formula: 'b > 1:\\quad \\log_b u < \\log_b v \\iff 0 < u < v',
            body: 'An increasing function preserves order.',
          },
          {
            name: 'Base below 1: reverse the direction',
            tag: '0 < b < 1',
            formula: '0 < b < 1:\\quad \\log_b u < \\log_b v \\iff u > v > 0',
            body: 'A decreasing function reverses order. The positivity conditions stay.',
          },
        ],
        steps: {
          traceLabel: 'On $\\log_{1/2}(x + 2) \\ge -1$',
          items: [
            {
              title: 'Write the domain.',
              body: 'Every argument must be positive.',
              state: '$x + 2 > 0$: need $x > -2$',
            },
            {
              title: 'Get a single log on each side with the same base.',
              body: `Condense sums, and write a plain number as a log of the base: $-1 = \\log_{1/2}\\big((\\tfrac{1}{2})^{-1}\\big) = \\log_{1/2} 2$.`,
              state: '$\\log_{1/2}(x + 2) \\ge \\log_{1/2} 2$',
              atomic: 'log-power-rule',
            },
            {
              title: 'Remove the logs, choosing the direction by the base.',
              body: 'Base $> 1$: keep. Base between $0$ and $1$: flip.',
              state: 'base $\\tfrac{1}{2}$: flip: $x + 2 \\le 2$',
            },
            {
              title: 'Solve the resulting inequality.',
              body: `A [linear](!/algebra/inequalities/methods/linear-inequalities) or [quadratic inequality](!/algebra/inequalities/methods/quadratic-inequalities).`,
              state: '$x \\le 0$',
            },
            {
              title: 'Intersect with the domain.',
              body: 'The answer is the overlap of step 4 with step 1.',
              state: '$-2 < x \\le 0$',
            },
          ],
        },
        examples: [
          {
            title: 'base greater than 1',
            badge: 'keep the direction',
            lines: [
              { math: '$\\log_2(x - 1) < 3 \\;\\Rightarrow\\; 0 < x - 1 < 8$', why: 'domain and $2^3 = 8$ together' },
              { math: '$1 < x < 9$', why: '', answer: true },
            ],
          },
          {
            title: 'base between 0 and 1',
            badge: 'flip',
            lines: [
              { math: '$\\log_{1/2}(x + 2) \\ge -1 \\;\\Rightarrow\\; x + 2 \\le 2$', why: 'flip; domain $x > -2$' },
              { math: '$-2 < x \\le 0$', why: '', answer: true },
            ],
          },
          {
            title: 'log on both sides',
            badge: 'equate arguments',
            lines: [
              { math: '$\\ln(2x) > \\ln(x + 5) \\;\\Rightarrow\\; 2x > x + 5$', why: 'base $e > 1$; domain $x > 0$ and $x > -5$' },
              { math: '$x > 5$', why: 'already inside the domain', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            '$y = \\log_2 x$ rises, so larger inputs give larger outputs and the inequality keeps its direction. $y = \\log_{1/2} x$ falls, so the direction turns around. Both graphs stop dead at the $y$-axis, which is why the domain cuts the answer.',
        },
        pitfalls: [
          {
            title: 'Forgetting the domain',
            wrong: '$\\log_2(x - 1) < 3 \\Rightarrow x < 9$',
            right: 'also $x - 1 > 0$: the answer is $1 < x < 9$',
          },
          {
            title: 'Keeping the direction with a small base',
            wrong: '$\\log_{1/2}(x + 2) \\ge -1 \\Rightarrow x + 2 \\ge 2$',
            right: 'base $\\frac{1}{2}$ reverses: $x + 2 \\le 2$',
          },
          {
            title: 'Dropping logs with different bases',
            wrong: '$\\log_2 x < \\log_3 y \\Rightarrow x < y$',
            right: 'convert to one base first',
          },
        ],
        related: ['logarithmic-equations', 'exponential-inequalities', 'evaluate-logarithms'],
        builtOn: [
          { label: 'Base greater than one (lesson)', url: ruleUrl('lesson.logarithms.inequalities.base-gt-1') },
          { label: 'Base between zero and one (lesson)', url: ruleUrl('lesson.logarithms.inequalities.base-lt-1') },
          { label: 'Properties of inequalities', url: ruleUrl('lesson.inequalities.properties') },
        ],
      },
    },

    // ═══ Composite — sequences ═════════════════════════════════════════
    {
      id: 'arithmetic-sequence-nth-term',
      slug: 'arithmetic-sequence-nth-term',
      name: 'How to find the nth term of an arithmetic sequence',
      description: 'Find the common difference, then $a_n = a_1 + (n - 1)d$; also from two given terms.',
      uses: ['common difference', 'general term'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'sequences',
      indexed: false,
      seo: {
        title: 'How to Find the nth Term of an Arithmetic Sequence | Learn Math Class',
        description: 'Find the nth term of an arithmetic sequence: compute the common difference, apply a_n = a_1 + (n − 1)d, or solve for a_1 and d from two terms.',
        keywords: ['nth term of an arithmetic sequence', 'arithmetic sequence formula', 'common difference', 'find the general term', 'arithmetic sequence examples'],
      },
      page: {
        h1: 'How to Find the nth Term of an Arithmetic Sequence',
        lead:
          'An arithmetic sequence adds the same number, the common difference $d$, at every step. Starting from $a_1$, the $n$th term has had $n - 1$ additions: $a_n = a_1 + (n - 1)d$.',
        recognize:
          'A list of numbers with a constant gap: $5, 8, 11, 14, \\ldots$; "the 20th term", "a formula for $a_n$", or two given terms such as $a_3 = 10$ and $a_7 = 22$. Test: subtract neighbours; if the difference is always the same, it is arithmetic.',
        recognizeNote: `Identification and the formula are in the ${link('lesson.sequences.arithmetic', 'arithmetic sequences lesson')} (${link('lesson.sequences.arithmetic.identifying', 'identifying')}, ${link('lesson.sequences.arithmetic.finding-terms', 'finding terms')}).`,
        methods: [
          {
            name: 'From the first term and the difference',
            tag: 'usual choice',
            preferred: true,
            formula: 'a_n = a_1 + (n - 1)d',
            body: `The ${link('sequences.arithmetic-general-term', 'general term')}; $d$ is the ${link('sequences.common-difference', 'common difference')}.`,
          },
          {
            name: 'From two known terms',
            tag: 'a_1 unknown',
            formula: 'd = \\frac{a_m - a_k}{m - k}, \\qquad a_1 = a_k - (k - 1)d',
            body: 'The gap between two terms is $d$ times the number of steps between them.',
          },
        ],
        steps: {
          traceLabel: 'On $5, 8, 11, 14, \\ldots$: find $a_{20}$ and $a_n$',
          items: [
            {
              title: 'Find the common difference.',
              body: 'Subtract any term from the next one. Check it twice.',
              state: '$d = 8 - 5 = 3$',
            },
            {
              title: 'Identify the first term.',
              body: '$a_1$ is the first listed term (unless the sequence starts at $a_0$; read the problem).',
              state: '$a_1 = 5$',
            },
            {
              title: 'Substitute into the general term.',
              body: `${link('sequences.arithmetic-general-term', 'General term')}: $a_n = a_1 + (n - 1)d$. Simplify to the form $dn + c$.`,
              state: '$a_n = 5 + 3(n - 1) = 3n + 2$',
            },
            {
              title: 'Evaluate at the wanted n and check against the list.',
              body: 'The formula must reproduce the given terms.',
              state: '$a_{20} = 62$; check $a_2 = 8$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'from a list',
            badge: 'basic',
            lines: [
              { math: '$5, 8, 11, 14, \\ldots$: $d = 3$, $a_1 = 5$', why: '' },
              { math: '$a_n = 3n + 2, \\qquad a_{20} = 62$', why: '', answer: true },
            ],
          },
          {
            title: 'from two terms',
            badge: 'solve for d and a₁',
            lines: [
              { math: '$a_3 = 10$, $a_7 = 22$: $d = \\frac{22 - 10}{7 - 3} = 3$', why: 'four steps between them' },
              { math: '$a_1 = 10 - 2\\cdot 3 = 4$, so $a_n = 3n + 1$', why: '', answer: true },
            ],
          },
          {
            title: 'which term equals a value?',
            badge: 'solve for n',
            lines: [
              { math: '$a_n = 3n + 2 = 101$', why: 'is $101$ in the sequence?' },
              { math: '$n = 33$', why: 'a whole number, so yes: the 33rd term', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Plot the terms against $n$ and they sit on a straight line of slope $d$. The general term $a_n = dn + (a_1 - d)$ is that line\'s equation, which is why arithmetic sequences and linear functions are the same idea.',
        },
        pitfalls: [
          {
            title: 'Using n instead of n − 1',
            wrong: '$a_n = a_1 + nd$',
            right: '$a_n = a_1 + (n - 1)d$; the first term has had no additions',
          },
          {
            title: 'Wrong sign of d',
            wrong: '$d = 5 - 8 = -3$ for $5, 8, 11$',
            right: '$d = $ next minus previous $= 3$',
          },
          {
            title: 'Dividing by the term numbers',
            wrong: '$d = \\frac{22 - 10}{7}$',
            right: 'divide by the number of steps, $7 - 3 = 4$',
          },
        ],
        related: ['arithmetic-series-sum', 'geometric-sequence-nth-term', 'recursive-to-explicit'],
        builtOn: [
          { label: 'General term of an arithmetic sequence', url: ruleUrl('sequences.arithmetic-general-term') },
          { label: 'Common difference', url: ruleUrl('sequences.common-difference') },
          { label: 'Finding terms (lesson)', url: ruleUrl('lesson.sequences.arithmetic.finding-terms') },
        ],
      },
    },
    {
      id: 'arithmetic-series-sum',
      slug: 'arithmetic-series-sum',
      name: 'How to sum an arithmetic series',
      description: 'Count the terms, then $S_n = \\frac{n}{2}(a_1 + a_n)$, or the version with $d$.',
      uses: ['nth term', 'series formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'sequences',
      indexed: false,
      seo: {
        title: 'How to Sum an Arithmetic Series (Step by Step) | Learn Math Class',
        description: 'Sum an arithmetic series: find the number of terms, the first and the last term, then apply S_n = n(a_1 + a_n)/2, or the form with d. Examples and mistakes.',
        keywords: ['arithmetic series sum', 'sum of arithmetic sequence formula', 'how to sum an arithmetic series', 'sum of first n terms', 'arithmetic series examples'],
      },
      page: {
        h1: 'How to Sum an Arithmetic Series',
        lead:
          'Pair the first term with the last, the second with the second-to-last, and so on: every pair has the same sum $a_1 + a_n$, and there are $\\frac{n}{2}$ pairs. That is the whole formula.',
        recognize:
          '"Find the sum of the first $n$ terms", "$3 + 7 + 11 + \\cdots + 99$", a sigma sum $\\sum_{k=1}^{n}(2k + 1)$, or a word problem with equal increments (seats in rows, savings growing by a fixed amount). Test: the terms added have a constant difference.',
        recognizeNote: `The formula and its pairing argument are in ${link('lesson.sequences.arithmetic.series', 'arithmetic series')}; the sum is the ${link('sequences.arithmetic-series-sum', 'arithmetic series sum')}.`,
        methods: [
          {
            name: 'First and last term known',
            tag: 'usual choice',
            preferred: true,
            formula: 'S_n = \\frac{n}{2}\\,(a_1 + a_n)',
            body: 'Average of the first and last term, times the number of terms.',
          },
          {
            name: 'Last term unknown',
            tag: 'use d instead',
            formula: 'S_n = \\frac{n}{2}\\,\\big(2a_1 + (n - 1)d\\big)',
            body: 'The same formula with $a_n$ replaced by $a_1 + (n - 1)d$.',
          },
        ],
        steps: {
          traceLabel: 'On $3 + 7 + 11 + \\cdots + 99$',
          items: [
            {
              title: 'Find a₁, d and the last term.',
              body: 'Read them off the sum.',
              state: '$a_1 = 3$, $d = 4$, $a_n = 99$',
            },
            {
              title: 'Count the terms.',
              body: `Solve $a_n = a_1 + (n - 1)d$ for $n$ ([nth term](!${HUB}/arithmetic-sequence-nth-term)). This is the step most often skipped.`,
              state: '$99 = 3 + 4(n - 1) \\;\\Rightarrow\\; n = 25$',
            },
            {
              title: 'Apply the sum formula.',
              body: `${link('sequences.arithmetic-series-sum', 'Arithmetic series sum')}: $\\frac{n}{2}(a_1 + a_n)$.`,
              state: '$S_{25} = \\frac{25}{2}(3 + 99) = 25\\cdot 51$',
            },
            {
              title: 'Compute and sanity-check.',
              body: 'The sum should be about $n$ times the middle term.',
              state: '$1275$; middle term $a_{13} = 51$, and $25\\cdot 51 = 1275$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'explicit first and last',
            badge: 'count first',
            lines: [
              { math: '$3 + 7 + \\cdots + 99$: $n = 25$', why: '$99 = 3 + 4(n - 1)$' },
              { math: '$S = \\frac{25}{2}(3 + 99) = 1275$', why: '', answer: true },
            ],
          },
          {
            title: 'first n terms, last term unknown',
            badge: 'formula with d',
            lines: [
              { math: 'first $40$ terms of $2, 5, 8, \\ldots$', why: '$a_1 = 2$, $d = 3$, $n = 40$' },
              { math: '$S_{40} = \\frac{40}{2}\\big(4 + 39\\cdot 3\\big) = 20\\cdot 121 = 2420$', why: '', answer: true },
            ],
          },
          {
            title: 'sigma notation',
            badge: 'read a₁ and aₙ from the formula',
            lines: [
              { math: '$\\sum_{k=1}^{30}(2k + 1)$: $a_1 = 3$, $a_{30} = 61$', why: 'plug in $k = 1$ and $k = 30$' },
              { math: '$= \\frac{30}{2}(3 + 61) = 960$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Write the series forwards and backwards under each other: $3 + 7 + \\cdots + 99$ over $99 + 95 + \\cdots + 3$. Every column adds to $102$, there are $25$ columns, and the two rows together make $2S$. So $S = \\frac{25\\cdot 102}{2}$.',
        },
        pitfalls: [
          {
            title: 'Guessing the number of terms',
            wrong: '$n = 99$ or $n = 24$',
            right: 'solve $a_n = a_1 + (n - 1)d$: $n = 25$',
          },
          {
            title: 'Forgetting to halve',
            wrong: '$S = n(a_1 + a_n)$',
            right: '$S = \\frac{n}{2}(a_1 + a_n)$',
          },
          {
            title: 'Using the sum formula for a geometric series',
            wrong: 'pairing $1 + 2 + 4 + 8$',
            right: `a constant ratio needs the [geometric series](!${HUB}/geometric-series-sum) formula`,
          },
        ],
        related: ['arithmetic-sequence-nth-term', 'geometric-series-sum', 'recursive-to-explicit'],
        builtOn: [
          { label: 'Arithmetic series sum', url: ruleUrl('sequences.arithmetic-series-sum') },
          { label: 'General term of an arithmetic sequence', url: ruleUrl('sequences.arithmetic-general-term') },
          { label: 'Arithmetic series (lesson)', url: ruleUrl('lesson.sequences.arithmetic.series') },
        ],
      },
    },
    {
      id: 'geometric-sequence-nth-term',
      slug: 'geometric-sequence-nth-term',
      name: 'How to find the nth term of a geometric sequence',
      description: 'Find the common ratio, then $a_n = a_1 r^{\\,n-1}$; also from two given terms.',
      uses: ['common ratio', 'general term'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'sequences',
      indexed: false,
      seo: {
        title: 'How to Find the nth Term of a Geometric Sequence | Learn Math Class',
        description: 'Find the nth term of a geometric sequence: compute the common ratio, apply a_n = a_1·r^(n−1), or recover r and a_1 from two known terms. Examples and mistakes.',
        keywords: ['nth term of a geometric sequence', 'geometric sequence formula', 'common ratio', 'geometric sequence from two terms', 'geometric sequence examples'],
      },
      page: {
        h1: 'How to Find the nth Term of a Geometric Sequence',
        lead:
          'A geometric sequence multiplies by the same number, the common ratio $r$, at every step. Starting from $a_1$, the $n$th term has been multiplied $n - 1$ times: $a_n = a_1 r^{\\,n-1}$.',
        recognize:
          'A list where each term is a fixed multiple of the previous: $3, 6, 12, 24, \\ldots$; $81, -27, 9, \\ldots$; "the 10th term", or two given terms such as $a_2 = 6$ and $a_5 = 162$. Test: divide neighbours; if the quotient is always the same, it is geometric.',
        recognizeNote: `The ${link('lesson.sequences.geometric', 'geometric sequences lesson')} covers ${link('lesson.sequences.geometric.identifying', 'identifying')} and ${link('lesson.sequences.geometric.finding-terms', 'finding terms')}.`,
        methods: [
          {
            name: 'From the first term and the ratio',
            tag: 'usual choice',
            preferred: true,
            formula: 'a_n = a_1\\,r^{\\,n-1}',
            body: `The ${link('sequences.geometric-general-term', 'general term')}; $r$ is the ${link('sequences.common-ratio', 'common ratio')}.`,
          },
          {
            name: 'From two known terms',
            tag: 'a_1 unknown',
            formula: 'r^{\\,m-k} = \\frac{a_m}{a_k}, \\qquad a_1 = \\frac{a_k}{r^{\\,k-1}}',
            body: 'The quotient of two terms is $r$ to the power of the number of steps between them; take the root.',
          },
        ],
        steps: {
          traceLabel: 'On $3, 6, 12, 24, \\ldots$: find $a_{10}$ and $a_n$',
          items: [
            {
              title: 'Find the common ratio.',
              body: 'Divide any term by the previous one. A negative ratio makes the signs alternate; a ratio between $-1$ and $1$ makes the terms shrink.',
              state: '$r = \\frac{6}{3} = 2$',
            },
            {
              title: 'Identify the first term.',
              body: 'Read $a_1$ off the list.',
              state: '$a_1 = 3$',
            },
            {
              title: 'Substitute into the general term.',
              body: `${link('sequences.geometric-general-term', 'General term')}: $a_n = a_1 r^{n-1}$. Keep the exponent $n - 1$; do not "simplify" it away.`,
              state: '$a_n = 3\\cdot 2^{\\,n-1}$',
              atomic: 'quotient-of-powers',
            },
            {
              title: 'Evaluate at the wanted n and check against the list.',
              body: '',
              state: '$a_{10} = 3\\cdot 2^9 = 1536$; check $a_3 = 3\\cdot 4 = 12$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'from a list',
            badge: 'basic',
            lines: [
              { math: '$3, 6, 12, 24, \\ldots$: $r = 2$, $a_1 = 3$', why: '' },
              { math: '$a_n = 3\\cdot 2^{\\,n-1}, \\qquad a_{10} = 1536$', why: '', answer: true },
            ],
          },
          {
            title: 'negative ratio',
            badge: 'alternating signs',
            lines: [
              { math: '$81, -27, 9, \\ldots$: $r = \\frac{-27}{81} = -\\tfrac{1}{3}$', why: '' },
              { math: '$a_n = 81\\left(-\\tfrac{1}{3}\\right)^{n-1}, \\qquad a_6 = 81\\cdot\\left(-\\tfrac{1}{3}\\right)^5 = -\\tfrac{1}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'from two terms',
            badge: 'take a root',
            lines: [
              { math: '$a_2 = 6$, $a_5 = 162$: $r^3 = \\frac{162}{6} = 27 \\;\\Rightarrow\\; r = 3$', why: 'three steps between them' },
              { math: '$a_1 = \\frac{6}{3} = 2$, so $a_n = 2\\cdot 3^{\\,n-1}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Plot the terms against $n$ and they trace an exponential curve $y = a_1 r^{n-1}$: doubling at every step for $r = 2$, decaying toward $0$ for $|r| < 1$, flipping sign for $r < 0$. A geometric sequence is an exponential function sampled at whole numbers.',
        },
        pitfalls: [
          {
            title: 'Using n instead of n − 1',
            wrong: '$a_n = a_1 r^n$',
            right: '$a_n = a_1 r^{\\,n-1}$; the first term has been multiplied zero times',
          },
          {
            title: 'Multiplying 3 and 2 before raising to the power',
            wrong: '$3\\cdot 2^{n-1} = 6^{n-1}$',
            right: 'the exponent applies to $2$ only',
          },
          {
            title: 'Losing the sign of r',
            wrong: '$r = \\frac{27}{81} = \\frac{1}{3}$ for $81, -27, 9$',
            right: '$r = -\\frac{1}{3}$; alternating signs mean a negative ratio',
          },
        ],
        related: ['geometric-series-sum', 'arithmetic-sequence-nth-term', 'recursive-to-explicit'],
        builtOn: [
          { label: 'General term of a geometric sequence', url: ruleUrl('sequences.geometric-general-term') },
          { label: 'Common ratio', url: ruleUrl('sequences.common-ratio') },
          { label: 'Finding terms (lesson)', url: ruleUrl('lesson.sequences.geometric.finding-terms') },
        ],
      },
    },
    {
      id: 'geometric-series-sum',
      slug: 'geometric-series-sum',
      name: 'How to sum a finite geometric series',
      description: 'Count the terms, then $S_n = a_1\\frac{1 - r^n}{1 - r}$.',
      uses: ['common ratio', 'finite series formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'sequences',
      indexed: false,
      seo: {
        title: 'How to Sum a Finite Geometric Series (Step by Step) | Learn Math Class',
        description: 'Sum a finite geometric series: find a_1, r and the number of terms, then apply S_n = a_1(1 − r^n)/(1 − r). Examples with sigma notation and mistakes.',
        keywords: ['geometric series sum', 'sum of a geometric sequence formula', 'how to sum a geometric series', 'finite geometric series examples'],
      },
      page: {
        h1: 'How to Sum a Finite Geometric Series',
        lead:
          'Multiply the whole sum by $r$ and subtract: almost everything cancels, leaving $S_n - rS_n = a_1 - a_1 r^n$. Solving for $S_n$ gives the formula; the only work is counting the terms.',
        recognize:
          '"Sum the first $n$ terms of $2, 6, 18, \\ldots$", "$1 + \\tfrac{1}{2} + \\tfrac{1}{4} + \\cdots + \\tfrac{1}{64}$", a sigma sum $\\sum_{k=0}^{n} 3\\cdot 2^k$, or a word problem that doubles or decays by a fixed factor each period. Test: the terms added have a constant ratio.',
        recognizeNote: `The formula is derived in ${link('lesson.sequences.geometric.finite-series', 'finite geometric series')}; the sum is the ${link('sequences.finite-geometric-series-sum', 'finite geometric series sum')}.`,
        methods: [
          {
            name: 'Finite sum formula',
            tag: 'usual choice',
            preferred: true,
            formula: 'S_n = a_1\\,\\frac{1 - r^{\\,n}}{1 - r} = a_1\\,\\frac{r^{\\,n} - 1}{r - 1} \\qquad (r \\neq 1)',
            body: 'Both forms are the same; the second is tidier when $r > 1$. For $r = 1$ the sum is simply $n a_1$.',
          },
          {
            name: 'Infinitely many terms',
            tag: '|r| < 1 only',
            formula: 'S = \\frac{a_1}{1 - r}',
            body: `When the terms never stop and $|r| < 1$: see [infinite geometric series](!${HUB}/infinite-geometric-series).`,
          },
        ],
        steps: {
          traceLabel: 'On $2 + 6 + 18 + \\cdots$ to $8$ terms',
          items: [
            {
              title: 'Find a₁ and r.',
              body: 'First term and the ratio of neighbours.',
              state: '$a_1 = 2$, $r = 3$',
            },
            {
              title: 'Count the terms.',
              body: `Given directly, or solve $a_1 r^{n-1} = a_n$ for $n$ ([nth term](!${HUB}/geometric-sequence-nth-term)). In $\\sum_{k=0}^{n}$ there are $n + 1$ terms.`,
              state: '$n = 8$',
            },
            {
              title: 'Apply the formula.',
              body: `${link('sequences.finite-geometric-series-sum', 'Finite geometric series sum')}.`,
              state: '$S_8 = 2\\cdot\\frac{3^8 - 1}{3 - 1} = 3^8 - 1$',
              atomic: 'power-of-power',
            },
            {
              title: 'Compute and sanity-check.',
              body: 'For $r > 1$ the sum is a bit more than the last term; for $0 < r < 1$ it is less than $\\frac{a_1}{1 - r}$.',
              state: '$6560$; last term $2\\cdot 3^7 = 4374 < 6560$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'ratio greater than 1',
            badge: 'basic',
            lines: [
              { math: '$2 + 6 + 18 + \\cdots$, $8$ terms: $S_8 = 2\\cdot\\frac{3^8 - 1}{2}$', why: '$a_1 = 2$, $r = 3$' },
              { math: '$= 6560$', why: '', answer: true },
            ],
          },
          {
            title: 'ratio between 0 and 1',
            badge: 'count via the last term',
            lines: [
              { math: '$1 + \\tfrac{1}{2} + \\cdots + \\tfrac{1}{64}$: $\\left(\\tfrac{1}{2}\\right)^{n-1} = \\tfrac{1}{64} \\Rightarrow n = 7$', why: '' },
              { math: '$S_7 = \\frac{1 - (1/2)^7}{1 - 1/2} = 2\\left(1 - \\tfrac{1}{128}\\right) = \\tfrac{127}{64}$', why: 'just under $2$', answer: true },
            ],
          },
          {
            title: 'sigma from k = 0',
            badge: 'n + 1 terms',
            lines: [
              { math: '$\\sum_{k=0}^{5} 3\\cdot 2^k$: $a_1 = 3$, $r = 2$, $6$ terms', why: '$k = 0, 1, \\ldots, 5$' },
              { math: '$= 3\\cdot\\frac{2^6 - 1}{2 - 1} = 189$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Line up $S = 2 + 6 + 18 + 54$ and $3S = 6 + 18 + 54 + 162$. Subtract the first from the second: the middle terms vanish, leaving $2S = 162 - 2$. The formula is this cancellation written once for all $n$.',
        },
        pitfalls: [
          {
            title: 'Miscounting the terms',
            wrong: '$\\sum_{k=0}^{5}$ has $5$ terms',
            right: 'from $0$ to $5$ is $6$ terms',
          },
          {
            title: 'Exponent n − 1 in the sum formula',
            wrong: '$S_n = a_1\\frac{1 - r^{n-1}}{1 - r}$',
            right: 'the sum formula uses $r^n$; $n - 1$ belongs to the $n$th term',
          },
          {
            title: 'Using the arithmetic formula',
            wrong: '$\\frac{n}{2}(a_1 + a_n)$ for $2 + 6 + 18$',
            right: 'a constant ratio needs the geometric formula',
          },
        ],
        related: ['geometric-sequence-nth-term', 'infinite-geometric-series', 'arithmetic-series-sum'],
        builtOn: [
          { label: 'Finite geometric series sum', url: ruleUrl('sequences.finite-geometric-series-sum') },
          { label: 'General term of a geometric sequence', url: ruleUrl('sequences.geometric-general-term') },
          { label: 'Finite geometric series (lesson)', url: ruleUrl('lesson.sequences.geometric.finite-series') },
        ],
      },
    },
    {
      id: 'infinite-geometric-series',
      slug: 'infinite-geometric-series',
      name: 'How to sum an infinite geometric series',
      description: 'Check $|r| < 1$, then $S = \\frac{a_1}{1 - r}$; also turns repeating decimals into fractions.',
      uses: ['common ratio', 'convergence'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'sequences',
      indexed: false,
      seo: {
        title: 'How to Sum an Infinite Geometric Series (and Convert Repeating Decimals) | Learn Math Class',
        description: 'Sum an infinite geometric series: check that |r| < 1, then S = a_1/(1 − r). Includes turning a repeating decimal into a fraction and what happens when |r| ≥ 1.',
        keywords: ['infinite geometric series', 'sum to infinity formula', 'does the series converge', 'repeating decimal to fraction', 'infinite geometric series examples'],
      },
      page: {
        h1: 'How to Sum an Infinite Geometric Series',
        lead:
          'When the ratio is between $-1$ and $1$, the terms shrink toward $0$ and the partial sums settle on a limit: $S = \\frac{a_1}{1 - r}$. When $|r| \\ge 1$ the terms do not shrink and there is no sum.',
        recognize:
          '"Find the sum to infinity", "$1 + \\tfrac{1}{3} + \\tfrac{1}{9} + \\cdots$", "$\\sum_{k=1}^{\\infty} 5\\left(\\tfrac{2}{5}\\right)^k$", "write $0.\\overline{27}$ as a fraction", a bouncing ball or a repeated percentage reduction. Test: a geometric pattern with no last term.',
        recognizeNote: `The convergence condition and the formula are in ${link('lesson.sequences.geometric.infinite-series', 'infinite geometric series')}; the sum is the ${link('sequences.infinite-geometric-series-sum', 'infinite geometric series sum')}.`,
        methods: [
          {
            name: 'Sum to infinity',
            tag: '|r| < 1',
            preferred: true,
            formula: 'S = \\frac{a_1}{1 - r} \\qquad (|r| < 1)',
            body: `The finite formula with $r^n \\to 0$ (see [finite geometric series](!${HUB}/geometric-series-sum)).`,
          },
          {
            name: 'Repeating decimal as a series',
            tag: 'a special case',
            formula: '0.\\overline{27} = \\frac{27}{100} + \\frac{27}{100^2} + \\cdots = \\frac{27/100}{1 - 1/100}',
            body: 'The repeating block is $a_1$ over the right power of $10$, and $r$ is $1$ over that power.',
          },
        ],
        steps: {
          traceLabel: 'On $1 + \\tfrac{1}{3} + \\tfrac{1}{9} + \\cdots$',
          items: [
            {
              title: 'Find a₁ and r.',
              body: 'First term, and the ratio of neighbours.',
              state: '$a_1 = 1$, $r = \\tfrac{1}{3}$',
            },
            {
              title: 'Check convergence: is |r| < 1?',
              body: 'If not, stop: the series has no sum (it diverges). Negative ratios are fine as long as $|r| < 1$.',
              state: '$\\left|\\tfrac{1}{3}\\right| < 1$ ✓',
            },
            {
              title: 'Apply the formula.',
              body: `${link('sequences.infinite-geometric-series-sum', 'Infinite geometric series sum')}.`,
              state: '$S = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\tfrac{3}{2}$',
            },
            {
              title: 'Sanity-check against a few partial sums.',
              body: 'The partial sums should creep toward the answer without passing it (for $r > 0$).',
              state: '$1,\\ 1.33,\\ 1.44,\\ 1.48,\\ \\ldots \\to 1.5$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'positive ratio',
            badge: 'basic',
            lines: [
              { math: '$1 + \\tfrac{1}{3} + \\tfrac{1}{9} + \\cdots = \\frac{1}{1 - 1/3}$', why: '$|r| = \\frac{1}{3} < 1$' },
              { math: '$= \\tfrac{3}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'negative ratio in sigma notation',
            badge: 'watch the first term',
            lines: [
              { math: '$\\sum_{k=1}^{\\infty} 5\\left(-\\tfrac{2}{5}\\right)^k$: $a_1 = -2$, $r = -\\tfrac{2}{5}$', why: 'the first term is at $k = 1$' },
              { math: '$S = \\frac{-2}{1 + 2/5} = -\\tfrac{10}{7}$', why: '', answer: true },
            ],
          },
          {
            title: 'a repeating decimal',
            badge: 'to a fraction',
            lines: [
              { math: '$0.\\overline{27} = \\frac{27}{100} + \\frac{27}{100^2} + \\cdots$', why: '$a_1 = \\frac{27}{100}$, $r = \\frac{1}{100}$' },
              { math: '$= \\frac{27/100}{99/100} = \\tfrac{27}{99} = \\tfrac{3}{11}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Walk toward a wall $2$ metres away, covering half the remaining distance at each step: $1 + \\tfrac{1}{2} + \\tfrac{1}{4} + \\cdots$. You never arrive in finitely many steps, but no step takes you past $2$, and every gap you can name is eventually beaten. The sum is the wall.',
        },
        pitfalls: [
          {
            title: 'Summing a divergent series',
            wrong: '$1 + 2 + 4 + \\cdots = \\frac{1}{1 - 2} = -1$',
            right: '$|r| = 2 \\ge 1$: no sum exists',
          },
          {
            title: 'Wrong first term in sigma notation',
            wrong: '$a_1 = 5$ for $\\sum_{k=1}^{\\infty} 5\\left(-\\tfrac{2}{5}\\right)^k$',
            right: '$a_1$ is the term at the starting index: $5\\cdot\\left(-\\tfrac{2}{5}\\right) = -2$',
          },
          {
            title: 'Sign slip with a negative ratio',
            wrong: '$1 - r = 1 - \\tfrac{2}{5}$ for $r = -\\tfrac{2}{5}$',
            right: '$1 - (-\\tfrac{2}{5}) = \\tfrac{7}{5}$',
          },
        ],
        related: ['geometric-series-sum', 'geometric-sequence-nth-term', 'exponential-growth-decay-problems'],
        builtOn: [
          { label: 'Infinite geometric series sum', url: ruleUrl('sequences.infinite-geometric-series-sum') },
          { label: 'Infinite geometric series (lesson)', url: ruleUrl('lesson.sequences.geometric.infinite-series') },
          { label: 'Common ratio', url: ruleUrl('sequences.common-ratio') },
        ],
      },
    },
    {
      id: 'recursive-to-explicit',
      slug: 'recursive-to-explicit',
      name: 'How to convert a recursive formula to an explicit one',
      description: 'Read the step rule, decide arithmetic or geometric, write the closed form, check it.',
      uses: ['recursive formulas', 'general terms'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'sequences',
      indexed: false,
      seo: {
        title: 'How to Convert a Recursive Formula to an Explicit Formula | Learn Math Class',
        description: 'Turn a recursive rule like a_n = a_(n−1) + 4 or a_n = 3a_(n−1) into an explicit formula: identify the type, use a_1, verify on the first terms.',
        keywords: ['recursive to explicit formula', 'recursive formula to closed form', 'explicit formula for a sequence', 'recursive sequence examples', 'recursive and explicit formulas'],
      },
      page: {
        h1: 'How to Convert a Recursive Formula to an Explicit One',
        lead:
          'A recursive formula tells you how to get each term from the one before; an explicit formula gives the $n$th term directly. For arithmetic and geometric rules the conversion is immediate: adding $d$ each time gives $a_1 + (n - 1)d$, multiplying by $r$ each time gives $a_1 r^{n-1}$.',
        recognize:
          '"$a_1 = 5$, $a_n = a_{n-1} + 4$", "$a_n = 3a_{n-1}$ with $a_1 = 2$", "write an explicit formula", "find $a_{50}$ without listing the terms". Test: the formula for $a_n$ mentions $a_{n-1}$.',
        recognizeNote: `The two kinds of definition are compared in ${link('lesson.sequences.explicit-recursive', 'explicit and recursive definitions')}; the recursive forms are ${link('sequences.arithmetic-recursive', 'arithmetic')} and ${link('sequences.geometric-recursive', 'geometric')}.`,
        methods: [
          {
            name: 'Adding a constant: arithmetic',
            tag: 'a_n = a_(n−1) + d',
            preferred: true,
            formula: 'a_n = a_{n-1} + d \\;\\Rightarrow\\; a_n = a_1 + (n - 1)d',
            body: `[nth term of an arithmetic sequence](!${HUB}/arithmetic-sequence-nth-term).`,
          },
          {
            name: 'Multiplying by a constant: geometric',
            tag: 'a_n = r·a_(n−1)',
            formula: 'a_n = r\\,a_{n-1} \\;\\Rightarrow\\; a_n = a_1\\,r^{\\,n-1}',
            body: `[nth term of a geometric sequence](!${HUB}/geometric-sequence-nth-term).`,
          },
        ],
        steps: {
          traceLabel: 'On $a_1 = 5$, $a_n = a_{n-1} + 4$',
          items: [
            {
              title: 'Read the step rule.',
              body: 'What is done to $a_{n-1}$ to get $a_n$: add a constant (arithmetic), multiply by a constant (geometric), or something else (neither; list terms and look for a pattern).',
              state: 'add $4$: arithmetic with $d = 4$',
            },
            {
              title: 'Take the starting value.',
              body: 'The given $a_1$ (or $a_0$: then the exponent or multiplier uses $n$ instead of $n - 1$).',
              state: '$a_1 = 5$',
            },
            {
              title: 'Write the explicit formula.',
              body: `${link('sequences.arithmetic-general-term', 'Arithmetic')}: $a_1 + (n - 1)d$. ${link('sequences.geometric-general-term', 'Geometric')}: $a_1 r^{n-1}$.`,
              state: '$a_n = 5 + 4(n - 1) = 4n + 1$',
            },
            {
              title: 'Verify on the first three terms.',
              body: 'Generate $a_1, a_2, a_3$ from the recursion and from the formula; they must agree.',
              state: 'recursion: $5, 9, 13$; formula: $5, 9, 13$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'adding a constant',
            badge: 'arithmetic',
            lines: [
              { math: '$a_1 = 5$, $a_n = a_{n-1} + 4$', why: '$d = 4$' },
              { math: '$a_n = 4n + 1$', why: '', answer: true },
            ],
          },
          {
            title: 'multiplying by a constant',
            badge: 'geometric',
            lines: [
              { math: '$a_1 = 2$, $a_n = 3a_{n-1}$', why: '$r = 3$' },
              { math: '$a_n = 2\\cdot 3^{\\,n-1}$', why: '', answer: true },
            ],
          },
          {
            title: 'starting at a₀',
            badge: 'shift the exponent',
            lines: [
              { math: '$a_0 = 100$, $a_n = 0.9\\,a_{n-1}$', why: 'geometric, but the first term is $a_0$' },
              { math: '$a_n = 100\\cdot 0.9^{\\,n}$', why: '$n$ multiplications from $a_0$ to $a_n$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A recursive rule is a staircase: to reach step $50$ you climb $49$ steps one at a time. The explicit formula is the elevator: it computes the height of step $50$ directly, because every step adds the same $d$ (or multiplies by the same $r$).',
        },
        pitfalls: [
          {
            title: 'Off by one in the exponent or multiplier',
            wrong: '$a_n = 2\\cdot 3^n$ for $a_1 = 2$, $a_n = 3a_{n-1}$',
            right: '$a_n = 2\\cdot 3^{\\,n-1}$; check $a_1 = 2$',
          },
          {
            title: 'Calling a_n = a_(n−1) + n arithmetic',
            wrong: '$a_n = a_1 + (n - 1)n$',
            right: 'the added amount changes with $n$; list terms ($1, 3, 6, 10, \\ldots$ are triangular numbers)',
          },
          {
            title: 'Dropping the starting value',
            wrong: 'answering "$a_n = a_{n-1} + 4$" when an explicit formula is asked',
            right: 'the explicit formula needs $a_1$: $a_n = 4n + 1$',
          },
        ],
        related: ['arithmetic-sequence-nth-term', 'geometric-sequence-nth-term', 'geometric-series-sum'],
        builtOn: [
          { label: 'Recursive form of an arithmetic sequence', url: ruleUrl('sequences.arithmetic-recursive') },
          { label: 'Recursive form of a geometric sequence', url: ruleUrl('sequences.geometric-recursive') },
          { label: 'Explicit and recursive definitions (lesson)', url: ruleUrl('lesson.sequences.explicit-recursive') },
        ],
      },
    },

    // ═══ Applied ══════════════════════════════════════════════════════
    {
      id: 'exponential-growth-decay-problems',
      slug: 'exponential-growth-decay-problems',
      name: 'How to solve exponential growth and decay problems',
      description: 'Populations, half-lives, depreciation: build the model, find the rate, solve for the time.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Exponential Growth and Decay Problems | Learn Math Class',
        description: 'Growth and decay word problems: choose A = A₀·b^t or A₀·e^(kt), find the rate from the data, solve for an amount or a time. Half-life example.',
        keywords: ['exponential growth and decay word problems', 'half-life problems', 'population growth problem', 'how to find the growth rate', 'exponential decay examples'],
      },
      page: {
        h1: 'How to Solve Exponential Growth and Decay Problems',
        lead:
          'A quantity that grows or shrinks by the same **percentage** every period follows $A = A_0 b^t$: the starting amount times a fixed factor per period. The work is reading $A_0$, $b$ and $t$ out of the words; the equation is then solved by matching bases or with logarithms.',
        recognize:
          'Trigger words: **grows by 5% per year**, **doubles every**, **half-life**, **decays**, **depreciates**, **compounded continuously**. A starting amount, a percentage or a factor per period, and a question about an amount at a later time or about when a target is reached.',
        setup: [
          { label: 'Starting amount', body: 'Read $A_0$: the value at time $t = 0$. If the problem gives the value at some other time, treat that as a data point, not as $A_0$.' },
          { label: 'Growth factor', body: 'Percent per period: $b = 1 + \\text{rate}$ for growth, $b = 1 - \\text{rate}$ for decay. Doubling: $b = 2$ per doubling time. Half-life: $b = \\tfrac{1}{2}$ per half-life.' },
          { label: 'Time unit', body: 'Measure $t$ in the same unit the rate is given in. A half-life of $8$ days with $t$ in days gives $A = A_0\\left(\\tfrac{1}{2}\\right)^{t/8}$.' },
          { label: 'Model', body: `$A = A_0 b^t$, or $A = A_0 e^{kt}$ when a continuous rate $k$ is given (${link('lesson.powers.exponential-functions', 'exponential functions')}). Unknown rate: use one data point to find $b$ or $k$ first.` },
          { label: 'Question', body: 'Amount at a given time: substitute $t$. Time to reach an amount: substitute $A$ and solve for $t$.' },
        ],
        handoff: {
          to: 'exponential-equations-logarithms',
          body: `Solve for $t$ with logarithms (or by [matching bases](!${HUB}/exponential-equations-same-base) when the numbers allow). For an amount, just evaluate the power.`,
        },
        interpretation:
          'Give the amount with its unit, or the time in the period used by the model, rounded sensibly. Check direction: a decaying quantity must come out smaller than $A_0$, and a doubling-time answer must be a positive number of periods.',
        examples: [
          {
            title: 'population growth',
            badge: 'amount after t',
            lines: [
              { math: 'a town of $20{,}000$ grows $3\\%$ per year; population after $10$ years?', why: '$A_0 = 20000$, $b = 1.03$, $t = 10$' },
              { math: '$A = 20000\\cdot 1.03^{10} \\approx 26{,}878$', why: '', answer: true },
            ],
          },
          {
            title: 'half-life',
            badge: 'solve for t',
            lines: [
              { math: 'a $80$ mg sample has a half-life of $8$ days; when is $5$ mg left?', why: '$A = 80\\left(\\tfrac{1}{2}\\right)^{t/8}$' },
              { math: '$\\left(\\tfrac{1}{2}\\right)^{t/8} = \\tfrac{1}{16} = \\left(\\tfrac{1}{2}\\right)^4 \\;\\Rightarrow\\; \\tfrac{t}{8} = 4$', why: 'matching bases' },
              { math: '$t = 32$ days', why: 'four half-lives', answer: true },
            ],
          },
          {
            title: 'unknown rate',
            badge: 'find k first',
            lines: [
              { math: 'a culture grows from $500$ to $800$ cells in $3$ hours; when does it reach $2000$?', why: '$A = 500e^{kt}$' },
              { math: '$800 = 500e^{3k} \\;\\Rightarrow\\; k = \\tfrac{1}{3}\\ln 1.6 \\approx 0.1567$', why: 'rate from the data point' },
              { math: '$2000 = 500e^{kt} \\;\\Rightarrow\\; t = \\frac{\\ln 4}{k} \\approx 8.85$ hours', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Growth by a fixed percentage is a staircase whose steps get taller: each step is a percentage of a bigger base. Decay is the mirror image, steps that get shorter but never reach zero. The $t$ in the exponent counts those steps, which is why logarithms, the step-counters, solve for time.',
        },
        pitfalls: [
          {
            title: 'Adding the rate instead of multiplying by the factor',
            wrong: '$A = 20000 + 0.03t$',
            right: '$A = 20000\\cdot 1.03^{t}$; percentage growth compounds',
          },
          {
            title: 'Decay factor written as the rate',
            wrong: '$b = 0.05$ for "decays 5% per year"',
            right: '$b = 0.95$; $95\\%$ remains each year',
          },
          {
            title: 'Mismatched time units',
            wrong: '$t = 32$ with a half-life in days and $t$ in hours',
            right: 'one unit throughout; convert first',
          },
          {
            title: 'Using a data point as A₀',
            wrong: '$A_0 = 800$ for a culture measured at $t = 3$',
            right: '$A_0$ is the value at $t = 0$; the $800$ is used to find $k$',
          },
        ],
        related: ['exponential-equations-logarithms', 'compound-interest-problems', 'infinite-geometric-series'],
        builtOn: [
          { label: 'Exponential functions (lesson)', url: ruleUrl('lesson.powers.exponential-functions') },
          { label: 'Power rule for logarithms', url: ruleUrl('logarithms.power-rule') },
          { label: 'Solving with logarithms (lesson)', url: ruleUrl('lesson.powers.exponential-equations.logarithms') },
        ],
      },
    },
    {
      id: 'compound-interest-problems',
      slug: 'compound-interest-problems',
      name: 'How to solve compound interest problems',
      description: 'A = P(1 + r/n)^(nt) and A = Pe^(rt): find the amount, the principal, the time or the rate.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Compound Interest Problems (Step by Step) | Learn Math Class',
        description: 'Compound interest problems: identify P, r, n and t, use A = P(1 + r/n)^(nt) or Pe^(rt), then solve for the amount, the principal, the time or the rate.',
        keywords: ['compound interest problems', 'compound interest formula', 'how long to double money', 'continuous compounding', 'compound interest examples'],
      },
      page: {
        h1: 'How to Solve Compound Interest Problems',
        lead:
          'Money that earns interest on its interest grows exponentially. With $n$ compounding periods a year the formula is $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$; with continuous compounding it is $A = Pe^{rt}$. Which of $A$, $P$, $r$, $t$ is unknown decides the algebra.',
        recognize:
          'Trigger words: **interest**, **compounded** monthly / quarterly / annually / continuously, **APR**, **principal**, **how long until**, **doubles**, **investment**, **loan**. A sum of money, a rate, a compounding frequency and a time, with one of them missing.',
        setup: [
          { label: 'Principal', body: '$P$, the starting amount.' },
          { label: 'Rate', body: 'Write $r$ as a decimal: $6\\% \\to 0.06$. It is the annual rate; the formula splits it by $n$.' },
          { label: 'Compounding', body: '$n$ per year: annually $1$, semi-annually $2$, quarterly $4$, monthly $12$, daily $365$. "Continuously" means the $e^{rt}$ model.' },
          { label: 'Time', body: '$t$ in years. Months must be converted: $18$ months $= 1.5$ years.' },
          { label: 'Unknown', body: `Amount: evaluate. Principal: divide. Time: logarithms ([exponential equations with logarithms](!${HUB}/exponential-equations-logarithms)). Rate: take an $nt$-th root (${link('lesson.powers.rational-exponents', 'rational exponents')}).` },
        ],
        handoff: {
          to: 'exponential-equations-logarithms',
          body: 'When the time is unknown, isolate the power and take logarithms. The other unknowns need only arithmetic or a root.',
        },
        interpretation:
          'Report money to the cent and time in years (or convert to months). A sanity check: more frequent compounding gives a slightly larger amount, never a smaller one, and continuous compounding is the largest of all.',
        examples: [
          {
            title: 'amount after t years',
            badge: 'monthly compounding',
            lines: [
              { math: '$\\text{\\textdollar}5{,}000$ at $6\\%$ compounded monthly for $4$ years', why: '$P = 5000$, $r = 0.06$, $n = 12$, $t = 4$' },
              { math: '$A = 5000\\left(1 + \\tfrac{0.06}{12}\\right)^{48} = 5000\\cdot 1.005^{48} \\approx \\text{\\textdollar}6{,}352.45$', why: '', answer: true },
            ],
          },
          {
            title: 'time to double',
            badge: 'solve for t with logs',
            lines: [
              { math: 'how long for money to double at $5\\%$ compounded continuously?', why: '$2P = Pe^{0.05t}$' },
              { math: '$e^{0.05t} = 2 \\;\\Rightarrow\\; t = \\frac{\\ln 2}{0.05} \\approx 13.9$ years', why: 'the $P$ cancels', answer: true },
            ],
          },
          {
            title: 'unknown rate',
            badge: 'take a root',
            lines: [
              { math: '$\\text{\\textdollar}2{,}000$ grows to $\\text{\\textdollar}2{,}600$ in $5$ years, compounded annually; rate?', why: '$2600 = 2000(1 + r)^5$' },
              { math: '$(1 + r)^5 = 1.3 \\;\\Rightarrow\\; 1 + r = 1.3^{1/5} \\approx 1.0539$', why: 'fifth root' },
              { math: '$r \\approx 5.39\\%$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Compounding monthly instead of yearly is like taking twelve small steps instead of one big one: each small step is a twelfth of the rate, but there are twelve of them on an ever-growing base, so you end a little higher. Push the steps to zero size and you reach $e^{rt}$.',
        },
        pitfalls: [
          {
            title: 'Rate left as a percent',
            wrong: '$\\left(1 + \\tfrac{6}{12}\\right)^{48}$',
            right: '$r = 0.06$: $\\left(1 + \\tfrac{0.06}{12}\\right)^{48}$',
          },
          {
            title: 'Exponent t instead of nt',
            wrong: '$5000\\cdot 1.005^{4}$',
            right: '$5000\\cdot 1.005^{48}$: $12$ periods a year for $4$ years',
          },
          {
            title: 'Simple interest formula',
            wrong: '$A = P(1 + rt)$',
            right: 'compound interest multiplies by $(1 + r/n)$ every period',
          },
          {
            title: 'Solving for t by dividing',
            wrong: '$e^{0.05t} = 2 \\Rightarrow t = \\frac{2}{0.05e}$',
            right: 'take $\\ln$ of both sides: $t = \\frac{\\ln 2}{0.05}$',
          },
        ],
        related: ['exponential-growth-decay-problems', 'exponential-equations-logarithms', 'geometric-series-sum'],
        builtOn: [
          { label: 'Exponential functions (lesson)', url: ruleUrl('lesson.powers.exponential-functions') },
          { label: 'Rational exponents (lesson)', url: ruleUrl('lesson.powers.rational-exponents') },
          { label: 'Power rule for logarithms', url: ruleUrl('logarithms.power-rule') },
        ],
      },
    },
  ],

  categories: [
    { id: 'powers', label: 'Powers and exponents', blurb: 'rules, simplifying, exponential equations and inequalities' },
    { id: 'roots', label: 'Roots and radicals', blurb: 'rules, simplifying, rationalizing, radical equations' },
    { id: 'logarithms', label: 'Logarithms', blurb: 'rules, evaluating, expanding, logarithmic equations and inequalities' },
    { id: 'sequences', label: 'Sequences and series', blurb: 'arithmetic, geometric, recursive to explicit' },
    { id: 'applied', label: 'Word problems', blurb: 'growth and decay, compound interest' },
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
    title: 'Algebra sub-hubs',
    links: [
      { url: '/algebra/equations/methods', label: 'Equations' },
      { url: '/algebra/inequalities/methods', label: 'Inequalities' },
      { url: '/algebra/polynomials/methods', label: 'Polynomials' },
    ],
  },
};

export default algebraMethods;
