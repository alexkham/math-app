// identities.methods.js (trigonometry)
// Single data source for /trigonometry/identities/methods (hub) and
// /trigonometry/identities/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/trigonometry/identities/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/trigonometry/identities/methods';

const trigIdentitiesMethods = {
  hubPath: HUB,
  hubLabel: 'identity methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'pythagorean-identities',
      name: 'How to use the Pythagorean identities',
      subtitle: 'Pythagorean identities',
      glyph: 's²+c²',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A squared sine or cosine to trade for the other, or $1 + \\tan^2$, $1 + \\cot^2$: $1 - \\cos^2 x$, $\\sec^2 x - 1$.',
      formula: '\\sin^2 x + \\cos^2 x = 1 \\qquad 1 + \\tan^2 x = \\sec^2 x \\qquad 1 + \\cot^2 x = \\csc^2 x',
      fields: {
        steps: ['1. Spot the square that matches one of the three forms.', '2. Replace it by the other side, rearranged as needed.'],
        worked_example: '$\\frac{1 - \\cos^2 x}{\\sin x} = \\frac{\\sin^2 x}{\\sin x} = \\sin x$',
      },
      links: [
        { url: ruleUrl('trig.pythagorean-identities'), label: 'Pythagorean identities' },
        { url: ruleUrl('lesson.trig.identities.pythagorean'), label: 'Pythagorean identities (lesson)' },
      ],
    },
    {
      id: 'double-angle',
      name: 'How to use the double-angle identities',
      subtitle: 'Double-angle identities',
      glyph: '2θ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A function of $2\\theta$ to rewrite in terms of $\\theta$, or the reverse: $\\sin 2x$, $\\cos 2x$, $2\\sin x\\cos x$.',
      formula: '\\sin 2\\theta = 2\\sin\\theta\\cos\\theta \\qquad \\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta',
      fields: {
        steps: ['1. Pick the form of $\\cos 2\\theta$ that leaves one function.', '2. Substitute and simplify.'],
        worked_example: '$2\\sin 15^\\circ\\cos 15^\\circ = \\sin 30^\\circ = \\frac{1}{2}$',
      },
      links: [
        { url: ruleUrl('trig.sine-double-angle'), label: 'Sine double angle' },
        { url: ruleUrl('trig.cosine-double-angle'), label: 'Cosine double angle' },
        { url: ruleUrl('trig.tangent-double-angle'), label: 'Tangent double angle' },
      ],
    },
    {
      id: 'half-angle',
      name: 'How to use the half-angle identities',
      subtitle: 'Half-angle identities',
      glyph: 'θ⁄2',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A function of $\\frac{\\theta}{2}$ where $\\cos\\theta$ is known: $\\sin 15^\\circ$, $\\cos\\frac{\\pi}{8}$, $\\tan 22.5^\\circ$.',
      formula: '\\sin\\tfrac{\\theta}{2} = \\pm\\sqrt{\\tfrac{1 - \\cos\\theta}{2}} \\qquad \\cos\\tfrac{\\theta}{2} = \\pm\\sqrt{\\tfrac{1 + \\cos\\theta}{2}} \\qquad \\tan\\tfrac{\\theta}{2} = \\tfrac{1 - \\cos\\theta}{\\sin\\theta}',
      fields: {
        steps: ['1. Write the angle as half of an angle with a known cosine.', '2. Take the sign from the quadrant of the half angle.'],
        worked_example: '$\\cos\\frac{\\pi}{8} = \\sqrt{\\frac{1 + \\frac{\\sqrt{2}}{2}}{2}} = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}$',
      },
      links: [
        { url: ruleUrl('trig.sine-half-angle'), label: 'Sine half angle' },
        { url: ruleUrl('trig.cosine-half-angle'), label: 'Cosine half angle' },
        { url: ruleUrl('trig.tangent-half-angle'), label: 'Tangent half angle' },
      ],
    },
    {
      id: 'sum-difference',
      name: 'How to use the sum and difference identities',
      subtitle: 'Sum and difference identities',
      glyph: 'A±B',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A function of a sum or difference of two angles: $\\sin(x + \\frac{\\pi}{3})$, $\\cos(A - B)$, $\\sin 75^\\circ$ as $\\sin(45^\\circ + 30^\\circ)$.',
      formula: '\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B \\qquad \\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B',
      fields: {
        steps: ['1. Identify $A$ and $B$.', '2. Expand; note the sign flips in the cosine formula.'],
        worked_example: '$\\cos(x - \\frac{\\pi}{2}) = \\cos x\\cdot 0 + \\sin x\\cdot 1 = \\sin x$',
      },
      links: [
        { url: ruleUrl('trig.sine-sum-difference'), label: 'Sine sum and difference' },
        { url: ruleUrl('trig.cosine-sum-difference'), label: 'Cosine sum and difference' },
        { url: ruleUrl('trig.tangent-sum-difference'), label: 'Tangent sum and difference' },
      ],
    },
    {
      id: 'negative-angle',
      name: 'How to handle a negative angle',
      subtitle: 'Even-odd identities',
      glyph: '−θ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A trig function of $-x$: $\\sin(-\\frac{\\pi}{6})$, $\\cos(-x)$, $\\tan(-\\theta)$.',
      formula: '\\sin(-x) = -\\sin x \\qquad \\cos(-x) = \\cos x \\qquad \\tan(-x) = -\\tan x',
      fields: {
        steps: ['1. Cosine (and secant) is even: drop the minus.', '2. The others are odd: bring the minus outside.'],
        worked_example: '$\\cos(-\\frac{\\pi}{3}) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}, \\qquad \\sin(-\\frac{\\pi}{6}) = -\\frac{1}{2}$',
      },
      links: [
        { url: ruleUrl('trig.even-odd-identities'), label: 'Even-odd identities' },
        { url: ruleUrl('lesson.trig.identities.even-odd'), label: 'Even-odd identities (lesson)' },
      ],
    },
    {
      id: 'shift-identities',
      name: 'How to simplify a shift by π/2 or π',
      subtitle: 'Shift, cofunction and supplement identities',
      glyph: 'θ+π⁄2',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'An angle shifted by a quarter or a half turn: $\\sin(x + \\frac{\\pi}{2})$, $\\cos(\\pi - x)$, $\\sin(\\frac{\\pi}{2} - x)$.',
      formula: '\\sin\\left(\\tfrac{\\pi}{2} - x\\right) = \\cos x \\qquad \\sin(\\pi - x) = \\sin x \\qquad \\cos(\\pi - x) = -\\cos x \\qquad \\sin\\left(x + \\tfrac{\\pi}{2}\\right) = \\cos x',
      fields: {
        steps: ['1. A quarter turn swaps sine and cosine; a half turn keeps the function.', '2. Fix the sign by the quadrant the shifted angle lands in (for small $x > 0$).'],
        worked_example: '$\\cos(\\pi - x) = -\\cos x$: for small $x$, $\\pi - x$ is in quadrant II, where cosine is negative',
      },
      links: [
        { url: ruleUrl('trig.cofunction-identities'), label: 'Cofunction identities' },
        { url: ruleUrl('trig.supplement-identities'), label: 'Supplement and shift identities' },
        { url: ruleUrl('lesson.trig.identities.shift'), label: 'Shift identities (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'prove-identities',
      slug: 'prove-identities',
      name: 'How to prove a trigonometric identity',
      description: 'Work on one side only: rewrite in sine and cosine, combine fractions, use the Pythagorean identity.',
      uses: ['Pythagorean identities', 'reciprocal and quotient identities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Prove Trigonometric Identities (Step by Step) | Learn Math Class',
        description: 'Prove trig identities: start from the harder side, rewrite in sin and cos, combine fractions, use the Pythagorean identity or a conjugate, reach the other side.',
        keywords: ['how to prove trig identities', 'proving trigonometric identities', 'verify trig identity', 'trig identity proof examples'],
      },
      page: {
        h1: 'How to Prove a Trigonometric Identity',
        lead:
          'An identity is proved by transforming one side, step by step, until it becomes the other. Never move terms across the equals sign: that would assume what you are proving.',
        recognize:
          '"Prove", "verify" or "show that" followed by an equation of trig expressions: $\\tan x + \\cot x = \\sec x\\csc x$, $\\sec x - \\cos x = \\sin x\\tan x$, $\\frac{\\sin x}{1 - \\cos x} = \\frac{1 + \\cos x}{\\sin x}$.',
        recognizeNote: `The identities you may use are all in the ${link('lesson.trig.identities', 'identities lesson')}; the most used are the ${link('lesson.trig.identities.pythagorean', 'Pythagorean')} and ${link('lesson.trig.identities.reciprocal', 'reciprocal')} ones.`,
        steps: {
          traceLabel: 'On proving $\\tan x + \\cot x = \\sec x\\csc x$',
          items: [
            {
              title: 'Start with the more complicated side.',
              body: 'More terms, fractions or compound angles to work with.',
              state: 'left side: $\\tan x + \\cot x$',
            },
            {
              title: 'Rewrite everything in sine and cosine.',
              body: `${link('trig.quotient-identities', 'Quotient')} and ${link('trig.reciprocal-identities', 'reciprocal')} identities.`,
              state: '$\\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}$',
            },
            {
              title: 'Combine fractions and simplify.',
              body: 'Common denominator; look for $\\sin^2 + \\cos^2$.',
              state: '$\\frac{\\sin^2 x + \\cos^2 x}{\\sin x\\cos x} = \\frac{1}{\\sin x\\cos x}$',
              atomic: 'pythagorean-identities',
            },
            {
              title: 'Arrive at the other side.',
              body: 'Write the chain as one line of equalities, ending with the right side.',
              state: '$\\frac{1}{\\cos x}\\cdot\\frac{1}{\\sin x} = \\sec x\\csc x$ ∎',
            },
          ],
        },
        examples: [
          {
            title: 'a difference',
            badge: 'common denominator',
            lines: [
              { math: '$\\sec x - \\cos x = \\frac{1}{\\cos x} - \\cos x = \\frac{1 - \\cos^2 x}{\\cos x}$', why: '' },
              { math: '$= \\frac{\\sin^2 x}{\\cos x} = \\sin x\\cdot\\frac{\\sin x}{\\cos x} = \\sin x\\tan x$ ∎', why: '', answer: true },
            ],
          },
          {
            title: 'a conjugate',
            badge: 'multiply by 1',
            lines: [
              { math: '$\\frac{\\sin x}{1 - \\cos x}\\cdot\\frac{1 + \\cos x}{1 + \\cos x} = \\frac{\\sin x(1 + \\cos x)}{1 - \\cos^2 x}$', why: '' },
              { math: '$= \\frac{\\sin x(1 + \\cos x)}{\\sin^2 x} = \\frac{1 + \\cos x}{\\sin x}$ ∎', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'sines and cosines',
            lines: [
              { math: '$\\tan x + \\cot x = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x\\cos x}$', why: '' },
              { math: '$= \\sec x\\csc x$ ∎', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Graph both sides: if the identity is true, the two curves lie exactly on top of each other. That is a check, not a proof; the proof is the chain of rewrites that explains why the curves must coincide.',
        },
        pitfalls: [
          {
            title: 'Working on both sides at once',
            wrong: 'cross-multiplying and reaching $1 = 1$',
            right: 'transform one side into the other',
          },
          {
            title: 'Splitting a fraction over a sum in the denominator',
            wrong: '$\\frac{1}{\\sin x + \\cos x} = \\frac{1}{\\sin x} + \\frac{1}{\\cos x}$',
            right: 'only the numerator splits',
          },
          {
            title: 'Proof by one example',
            wrong: '"true at $x = \\frac{\\pi}{4}$, so proved"',
            right: 'one value can disprove an identity, never prove it',
          },
        ],
        related: ['simplify-trig-expressions', 'which-identity', 'double-angle-evaluation'],
        builtOn: [
          { label: 'Pythagorean identities', url: ruleUrl('trig.pythagorean-identities') },
          { label: 'Reciprocal identities', url: ruleUrl('trig.reciprocal-identities') },
          { label: 'Quotient identities', url: ruleUrl('trig.quotient-identities') },
        ],
      },
    },
    {
      id: 'simplify-trig-expressions',
      slug: 'simplify-trig-expressions',
      name: 'How to simplify a trigonometric expression',
      description: 'Rewrite in sine and cosine, cancel, and recognise a Pythagorean pattern.',
      uses: ['reciprocal and quotient identities', 'Pythagorean identities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Simplify Trigonometric Expressions | Learn Math Class',
        description: 'Simplify trig expressions: rewrite secant, cosecant, tangent and cotangent in sine and cosine, combine fractions, use the Pythagorean identity, cancel.',
        keywords: ['simplify trig expressions', 'simplify trigonometric expressions', 'trig simplification examples', 'rewrite in sine and cosine'],
      },
      page: {
        h1: 'How to Simplify a Trigonometric Expression',
        lead:
          'Most trig expressions shrink once everything is written in sine and cosine: reciprocals cancel, fractions combine, and a $1 - \\sin^2$ turns into a $\\cos^2$.',
        recognize:
          '"Simplify" with a trig expression: $\\frac{1 - \\sin^2 x}{\\cos x}$, $\\csc x - \\sin x$, $\\frac{\\tan x}{\\sec x}$, $\\sec x\\sin x\\cot x$. Test: there is no equals sign to reach, just a shorter form.',
        recognizeNote: `The conversions are the ${link('lesson.trig.functions.reciprocal-quotient', 'reciprocal and quotient relationships')}; the ${link('lesson.trig.identities.summary', 'summary of identities')} lists the rest.`,
        steps: {
          traceLabel: 'On $\\csc x - \\sin x$',
          items: [
            {
              title: 'Rewrite in sine and cosine.',
              body: `${link('trig.reciprocal-identities', 'Reciprocal identities')}.`,
              state: '$\\frac{1}{\\sin x} - \\sin x$',
            },
            {
              title: 'Combine into one fraction.',
              body: '',
              state: '$\\frac{1 - \\sin^2 x}{\\sin x}$',
            },
            {
              title: 'Apply a Pythagorean identity.',
              body: '',
              state: '$\\frac{\\cos^2 x}{\\sin x}$',
              atomic: 'pythagorean-identities',
            },
            {
              title: 'Cancel or regroup into a standard function.',
              body: 'Stop when no further identity shortens it.',
              state: '$\\cos x\\cdot\\frac{\\cos x}{\\sin x} = \\cos x\\cot x$',
            },
          ],
        },
        examples: [
          {
            title: 'a Pythagorean numerator',
            badge: 'basic',
            lines: [
              { math: '$\\frac{1 - \\sin^2 x}{\\cos x} = \\frac{\\cos^2 x}{\\cos x}$', why: '' },
              { math: '$= \\cos x$', why: '', answer: true },
            ],
          },
          {
            title: 'a quotient of functions',
            badge: 'reciprocals cancel',
            lines: [
              { math: '$\\frac{\\tan x}{\\sec x} = \\frac{\\sin x}{\\cos x}\\cdot\\cos x$', why: '' },
              { math: '$= \\sin x$', why: '', answer: true },
            ],
          },
          {
            title: 'a product',
            badge: 'everything cancels',
            lines: [
              { math: '$\\sec x\\sin x\\cot x = \\frac{1}{\\cos x}\\cdot\\sin x\\cdot\\frac{\\cos x}{\\sin x}$', why: '' },
              { math: '$= 1$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Writing everything in sine and cosine is like converting every currency to one before adding: only then do matching terms become visible and cancel.',
        },
        pitfalls: [
          {
            title: 'Cancelling across a sum',
            wrong: '$\\frac{1 - \\sin^2 x}{\\sin x} = 1 - \\sin x$',
            right: 'only factors cancel: $\\frac{\\cos^2 x}{\\sin x}$',
          },
          {
            title: 'Squaring wrongly',
            wrong: '$\\sin^2 x = \\sin(x^2)$',
            right: '$\\sin^2 x = (\\sin x)^2$',
          },
          {
            title: 'Pythagorean sign error',
            wrong: '$1 + \\sin^2 x = \\cos^2 x$',
            right: '$1 - \\sin^2 x = \\cos^2 x$',
          },
        ],
        related: ['prove-identities', 'power-reduction', 'which-identity'],
        builtOn: [
          { label: 'Reciprocal identities', url: ruleUrl('trig.reciprocal-identities') },
          { label: 'Pythagorean identities', url: ruleUrl('trig.pythagorean-identities') },
        ],
      },
    },
    {
      id: 'exact-values-sum-difference',
      slug: 'exact-values-sum-difference',
      name: 'How to find exact values with the sum and difference formulas',
      description: 'Split angles like $75^\\circ$ or $\\frac{7\\pi}{12}$ into two standard angles and expand.',
      uses: ['sum and difference identities', 'exact values'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'Exact Values with Sum and Difference Formulas (sin 75°, cos 15°) | Learn Math Class',
        description: 'Find exact values like sin 75°, cos 15° or tan 105°: write the angle as a sum or difference of standard angles, expand with the formula, simplify the radicals.',
        keywords: ['exact value sin 75', 'sum and difference formulas exact values', 'cos 15 exact value', 'tan 105 exact'],
      },
      page: {
        h1: 'How to Find Exact Values with the Sum and Difference Formulas',
        lead:
          'Angles such as $75^\\circ$, $15^\\circ$ or $\\frac{7\\pi}{12}$ are sums or differences of $30^\\circ$, $45^\\circ$ and $60^\\circ$. Split the angle, expand with the formula, and every piece is a known exact value.',
        recognize:
          '"Find the exact value of" an angle that is a multiple of $15^\\circ$ ($\\frac{\\pi}{12}$) but not of $30^\\circ$ or $45^\\circ$: $\\sin 75^\\circ$, $\\cos 15^\\circ$, $\\tan 105^\\circ$, $\\cos\\frac{7\\pi}{12}$.',
        recognizeNote: `The formulas are in the lesson sections ${link('lesson.trig.identities.sum', 'sum identities')} and ${link('lesson.trig.identities.difference', 'difference identities')}.`,
        steps: {
          traceLabel: 'On $\\sin 75^\\circ$',
          items: [
            {
              title: 'Write the angle as a sum or difference of standard angles.',
              body: 'Use $30^\\circ$, $45^\\circ$, $60^\\circ$ (or $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$).',
              state: '$75^\\circ = 45^\\circ + 30^\\circ$',
            },
            {
              title: 'Expand with the matching formula.',
              body: `${link('trig.sine-sum-difference', 'Sine of a sum')}.`,
              state: '$\\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ$',
              atomic: 'sum-difference',
            },
            {
              title: 'Substitute the exact values.',
              body: `${link('lesson.trig.right-triangle.exact-values', 'Exact values at the standard angles')}.`,
              state: '$\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}$',
            },
            {
              title: 'Simplify.',
              body: 'Combine over one denominator; rationalize a tangent.',
              state: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4} \\approx 0.966$',
            },
          ],
        },
        examples: [
          {
            title: 'a difference',
            badge: 'cosine',
            lines: [
              { math: '$\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}$', why: 'minus becomes plus' },
              { math: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'radians',
            badge: 'cosine of a sum',
            lines: [
              { math: '$\\cos\\frac{7\\pi}{12} = \\cos(\\frac{\\pi}{3} + \\frac{\\pi}{4}) = \\frac{1}{2}\\cdot\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{3}}{2}\\cdot\\frac{\\sqrt{2}}{2}$', why: '' },
              { math: '$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$', why: 'negative: $\\frac{7\\pi}{12}$ is in quadrant II', answer: true },
            ],
          },
          {
            title: 'tangent',
            badge: 'rationalize',
            lines: [
              { math: '$\\tan 105^\\circ = \\tan(60^\\circ + 45^\\circ) = \\frac{\\sqrt{3} + 1}{1 - \\sqrt{3}}$', why: '' },
              { math: '$= \\frac{(\\sqrt{3} + 1)^2}{1 - 3} = -2 - \\sqrt{3}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Rotating by $45^\\circ$ and then by $30^\\circ$ is the same as rotating by $75^\\circ$. The sum formulas record what that two-step rotation does to the coordinates $(\\cos, \\sin)$ of a point on the unit circle.',
        },
        pitfalls: [
          {
            title: 'Distributing the function',
            wrong: '$\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ + \\sin 30^\\circ$',
            right: 'expand with the formula; the shortcut gives $1.21$, the truth is $0.97$',
          },
          {
            title: 'Wrong sign in the cosine formula',
            wrong: '$\\cos(A - B) = \\cos A\\cos B - \\sin A\\sin B$',
            right: 'cosine flips the sign: $+\\sin A\\sin B$',
          },
          {
            title: 'Leaving a radical in a denominator',
            wrong: '$\\tan 105^\\circ = \\frac{\\sqrt{3} + 1}{1 - \\sqrt{3}}$ as final',
            right: 'rationalize: $-2 - \\sqrt{3}$',
          },
        ],
        related: ['half-angle-evaluation', 'double-angle-evaluation', 'which-identity'],
        builtOn: [
          { label: 'Sine sum and difference', url: ruleUrl('trig.sine-sum-difference') },
          { label: 'Cosine sum and difference', url: ruleUrl('trig.cosine-sum-difference') },
          { label: 'Tangent sum and difference', url: ruleUrl('trig.tangent-sum-difference') },
        ],
      },
    },
    {
      id: 'double-angle-evaluation',
      slug: 'double-angle-evaluation',
      name: 'How to evaluate with the double-angle formulas',
      description: 'From one value of $\\theta$ and its quadrant, find $\\sin 2\\theta$, $\\cos 2\\theta$ and $\\tan 2\\theta$.',
      uses: ['double-angle identities', 'reference triangle'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Double-Angle Formulas to Find sin 2θ and cos 2θ | Learn Math Class',
        description: 'Find sin 2θ, cos 2θ and tan 2θ from one value of θ: get sin θ and cos θ with their quadrant signs, apply the double-angle formulas, simplify. Worked examples.',
        keywords: ['double angle formulas', 'find sin 2theta', 'find cos 2theta', 'double angle identity examples', 'given sin find sin 2x'],
      },
      page: {
        h1: 'How to Evaluate with the Double-Angle Formulas',
        lead:
          'To find $\\sin 2\\theta$ or $\\cos 2\\theta$ you need $\\sin\\theta$ and $\\cos\\theta$ with the right signs. Get both from the given value and its quadrant, then substitute into the double-angle formulas.',
        recognize:
          '"Given $\\sin\\theta = \\frac{3}{5}$ with $\\theta$ in quadrant II, find $\\sin 2\\theta$", "evaluate $2\\sin 15^\\circ\\cos 15^\\circ$", "find $\\cos 2\\theta$ if $\\cos\\theta = \\frac{1}{3}$".',
        recognizeNote: `The formulas are in ${link('lesson.trig.identities.double', 'double-angle identities')}; finding the second value is the method for [all trig values from one value](!/trigonometry/methods/exact-values).`,
        steps: {
          traceLabel: 'On $\\sin\\theta = \\frac{3}{5}$, $\\theta$ in quadrant II',
          items: [
            {
              title: 'Find the missing sine or cosine with its sign.',
              body: 'Reference triangle or Pythagorean identity.',
              state: '$\\cos\\theta = -\\frac{4}{5}$',
            },
            {
              title: 'Apply sin 2θ = 2 sin θ cos θ.',
              body: `${link('trig.sine-double-angle', 'Sine double angle')}.`,
              state: '$\\sin 2\\theta = 2\\cdot\\frac{3}{5}\\cdot\\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$',
              atomic: 'double-angle',
            },
            {
              title: 'Apply the form of cos 2θ that uses what you have.',
              body: `${link('trig.cosine-double-angle', 'Cosine double angle')}.`,
              state: '$\\cos 2\\theta = \\frac{16}{25} - \\frac{9}{25} = \\frac{7}{25}$',
            },
            {
              title: 'Divide for the tangent and check the quadrant of 2θ.',
              body: 'Signs $\\sin 2\\theta < 0$, $\\cos 2\\theta > 0$ put $2\\theta$ in quadrant IV.',
              state: '$\\tan 2\\theta = -\\frac{24}{7}$',
            },
          ],
        },
        examples: [
          {
            title: 'only cosine given',
            badge: 'one form is enough',
            lines: [
              { math: '$\\cos\\theta = \\frac{1}{3}$: $\\cos 2\\theta = 2\\cos^2\\theta - 1$', why: 'no sine needed' },
              { math: '$= \\frac{2}{9} - 1 = -\\frac{7}{9}$', why: '', answer: true },
            ],
          },
          {
            title: 'recognise the pattern',
            badge: 'run it backwards',
            lines: [
              { math: '$2\\sin 15^\\circ\\cos 15^\\circ = \\sin 30^\\circ$', why: 'sine double angle in reverse' },
              { math: '$\\frac{1}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'quadrant II',
            lines: [
              { math: '$\\sin\\theta = \\frac{3}{5}$, $\\cos\\theta = -\\frac{4}{5}$', why: '' },
              { math: '$\\sin 2\\theta = -\\frac{24}{25}$, $\\cos 2\\theta = \\frac{7}{25}$, $\\tan 2\\theta = -\\frac{24}{7}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Doubling the angle doubles how far round the circle you go, but not the coordinates: $\\sin 2\\theta$ is not $2\\sin\\theta$. The formula $2\\sin\\theta\\cos\\theta$ says the height at $2\\theta$ depends on both coordinates at $\\theta$.',
        },
        pitfalls: [
          {
            title: 'Doubling the value',
            wrong: '$\\sin 2\\theta = 2\\cdot\\frac{3}{5} = \\frac{6}{5}$',
            right: 'a sine above $1$ is impossible; use $2\\sin\\theta\\cos\\theta$',
          },
          {
            title: 'Wrong sign of cos θ',
            wrong: '$\\cos\\theta = \\frac{4}{5}$ in quadrant II',
            right: '$-\\frac{4}{5}$',
          },
          {
            title: 'cos 2θ as 2 cos θ − 1',
            wrong: '$\\cos 2\\theta = 2\\cos\\theta - 1$',
            right: 'the cosine is squared: $2\\cos^2\\theta - 1$',
          },
        ],
        related: ['half-angle-evaluation', 'exact-values-sum-difference', 'power-reduction'],
        builtOn: [
          { label: 'Sine double angle', url: ruleUrl('trig.sine-double-angle') },
          { label: 'Cosine double angle', url: ruleUrl('trig.cosine-double-angle') },
          { label: 'Double-angle identities (lesson)', url: ruleUrl('lesson.trig.identities.double') },
        ],
      },
    },
    {
      id: 'half-angle-evaluation',
      slug: 'half-angle-evaluation',
      name: 'How to evaluate with the half-angle formulas',
      description: 'Write the angle as half of a known one, apply the formula, take the sign from the half angle\'s quadrant.',
      uses: ['half-angle identities', 'quadrant signs'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Half-Angle Formulas (sin 15°, cos π/8) | Learn Math Class',
        description: 'Find exact values like sin 15° or cos π/8 with the half-angle formulas: write the angle as half a known one, substitute its cosine, pick the sign by quadrant.',
        keywords: ['half angle formulas', 'sin 15 degrees exact', 'cos pi/8 exact value', 'half angle identity examples', 'half angle sign'],
      },
      page: {
        h1: 'How to Evaluate with the Half-Angle Formulas',
        lead:
          'An angle like $15^\\circ$ is half of $30^\\circ$, whose cosine is known. The half-angle formulas turn that cosine into the sine, cosine or tangent of the half angle; the $\\pm$ is settled by the quadrant the half angle lies in.',
        recognize:
          '"Exact value" of half a standard angle: $\\sin 15^\\circ$, $\\cos\\frac{\\pi}{8}$, $\\tan 22.5^\\circ$, or "given $\\cos\\theta$, find $\\sin\\frac{\\theta}{2}$".',
        recognizeNote: `The formulas are in ${link('lesson.trig.identities.half', 'half-angle identities')}; they come from the [power-reduction formulas](!${HUB}/power-reduction).`,
        steps: {
          traceLabel: 'On $\\sin 15^\\circ$',
          items: [
            {
              title: 'Write the angle as half of a known angle.',
              body: '',
              state: '$15^\\circ = \\frac{30^\\circ}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$',
            },
            {
              title: 'Choose the sign from the half angle\'s quadrant.',
              body: 'Not from the full angle.',
              state: '$15^\\circ$ is in quadrant I: $+$',
            },
            {
              title: 'Substitute into the formula.',
              body: `${link('trig.sine-half-angle', 'Sine half angle')}.`,
              state: '$\\sqrt{\\frac{1 - \\frac{\\sqrt{3}}{2}}{2}} = \\sqrt{\\frac{2 - \\sqrt{3}}{4}}$',
              atomic: 'half-angle',
            },
            {
              title: 'Simplify the nested radical.',
              body: '',
              state: '$\\frac{\\sqrt{2 - \\sqrt{3}}}{2} \\approx 0.259$',
            },
          ],
        },
        examples: [
          {
            title: 'tangent without a root',
            badge: 'no ±',
            lines: [
              { math: '$\\tan 22.5^\\circ = \\frac{1 - \\cos 45^\\circ}{\\sin 45^\\circ} = \\frac{1 - \\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{2}}{2}}$', why: '' },
              { math: '$= \\sqrt{2} - 1$', why: '', answer: true },
            ],
          },
          {
            title: 'a sign decided by the half angle',
            badge: 'quadrant II',
            lines: [
              { math: '$\\cos\\theta = -\\frac{3}{5}$, $\\pi < \\theta < \\frac{3\\pi}{2}$: so $\\frac{\\pi}{2} < \\frac{\\theta}{2} < \\frac{3\\pi}{4}$', why: '' },
              { math: '$\\sin\\frac{\\theta}{2} = \\sqrt{\\frac{1 + \\frac{3}{5}}{2}} = \\frac{2}{\\sqrt{5}}$, $\\cos\\frac{\\theta}{2} = -\\sqrt{\\frac{1 - \\frac{3}{5}}{2}} = -\\frac{1}{\\sqrt{5}}$', why: '', answer: true },
            ],
          },
          {
            title: 'radians',
            badge: 'cosine',
            lines: [
              { math: '$\\cos\\frac{\\pi}{8} = \\sqrt{\\frac{1 + \\frac{\\sqrt{2}}{2}}{2}}$', why: 'quadrant I' },
              { math: '$\\frac{\\sqrt{2 + \\sqrt{2}}}{2} \\approx 0.924$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Halving an angle moves its point back toward the start of the circle. The formula only knows $\\cos\\theta$, which is the same for $\\theta$ and $-\\theta$, so it cannot tell on its own which half you meant: that is why the sign must come from the picture.',
        },
        pitfalls: [
          {
            title: 'Sign from the full angle',
            wrong: '$\\theta$ in quadrant III, so $\\sin\\frac{\\theta}{2} < 0$',
            right: '$\\frac{\\theta}{2}$ is in quadrant II: positive',
          },
          {
            title: 'Halving the value',
            wrong: '$\\sin 15^\\circ = \\frac{1}{2}\\sin 30^\\circ = \\frac{1}{4}$',
            right: 'use the formula: about $0.259$',
          },
          {
            title: 'Swapping the signs inside the root',
            wrong: '$\\sin\\frac{\\theta}{2} = \\sqrt{\\frac{1 + \\cos\\theta}{2}}$',
            right: 'sine has $1 - \\cos\\theta$, cosine has $1 + \\cos\\theta$',
          },
        ],
        related: ['double-angle-evaluation', 'power-reduction', 'exact-values-sum-difference'],
        builtOn: [
          { label: 'Sine half angle', url: ruleUrl('trig.sine-half-angle') },
          { label: 'Cosine half angle', url: ruleUrl('trig.cosine-half-angle') },
          { label: 'Half-angle identities (lesson)', url: ruleUrl('lesson.trig.identities.half') },
        ],
      },
    },
    {
      id: 'power-reduction',
      slug: 'power-reduction',
      name: 'How to reduce powers of sine and cosine',
      description: 'Trade $\\sin^2$ and $\\cos^2$ for first powers of $\\cos 2x$; repeat for higher powers.',
      uses: ['power-reducing formulas', 'double-angle identities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Power-Reducing Formulas (sin²x, cos⁴x) | Learn Math Class',
        description: 'Rewrite sin²x, cos²x and higher powers without exponents: apply the power-reducing formulas, expand, reduce again, collect into cosines of multiple angles.',
        keywords: ['power reducing formulas', 'reduce sin^4 x', 'cos^2 x = (1 + cos 2x)/2', 'power reduction identity examples'],
      },
      page: {
        h1: 'How to Reduce Powers of Sine and Cosine',
        lead:
          'A square of sine or cosine equals a first power of a cosine at twice the angle: $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$. Applied repeatedly, this rewrites any even power as a sum of plain cosines, which is what integrals and some proofs need.',
        recognize:
          '"Rewrite without powers greater than one", "express $\\sin^4 x$ in terms of cosines of multiple angles", or a step in [integrating powers of sine and cosine](!/calculus/integrals/techniques/trig-powers-integrals). Test: even powers of sine or cosine.',
        recognizeNote: `The formulas are in ${link('lesson.trig.identities.power-reducing', 'power-reducing identities')}: ${link('trig.sine-squared-reduction', 'sine squared')} and ${link('trig.cosine-squared-reduction', 'cosine squared')}.`,
        steps: {
          traceLabel: 'On $\\sin^4 x$',
          items: [
            {
              title: 'Write the power as a power of a square.',
              body: '',
              state: '$(\\sin^2 x)^2$',
            },
            {
              title: 'Reduce the square.',
              body: '$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$.',
              state: '$\\left(\\frac{1 - \\cos 2x}{2}\\right)^2 = \\frac{1 - 2\\cos 2x + \\cos^2 2x}{4}$',
              atomic: 'double-angle',
            },
            {
              title: 'Reduce any square that remains.',
              body: '$\\cos^2 2x = \\frac{1 + \\cos 4x}{2}$.',
              state: '$\\frac{1 - 2\\cos 2x + \\frac{1 + \\cos 4x}{2}}{4}$',
            },
            {
              title: 'Collect into one fraction.',
              body: '',
              state: '$\\frac{3 - 4\\cos 2x + \\cos 4x}{8}$',
            },
          ],
        },
        examples: [
          {
            title: 'a product of squares',
            badge: 'double angle first',
            lines: [
              { math: '$\\sin^2 x\\cos^2 x = \\left(\\frac{\\sin 2x}{2}\\right)^2 = \\frac{\\sin^2 2x}{4}$', why: '' },
              { math: '$= \\frac{1 - \\cos 4x}{8}$', why: '', answer: true },
            ],
          },
          {
            title: 'cosine to the fourth',
            badge: 'twice',
            lines: [
              { math: '$\\cos^4 x = \\left(\\frac{1 + \\cos 2x}{2}\\right)^2$', why: '' },
              { math: '$= \\frac{3 + 4\\cos 2x + \\cos 4x}{8}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'sine to the fourth',
            lines: [
              { math: '$\\sin^4 x$', why: '' },
              { math: '$\\frac{3 - 4\\cos 2x + \\cos 4x}{8}$', why: 'check at $x = 0$: $\\frac{3 - 4 + 1}{8} = 0$ ✓', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            '$\\cos^2 x$ is a wave between $0$ and $1$ that repeats twice as fast as $\\cos x$: exactly the wave $\\frac{1}{2} + \\frac{1}{2}\\cos 2x$. Squaring a wave doubles its frequency and lifts it above the axis.',
        },
        pitfalls: [
          {
            title: 'Forgetting the ½',
            wrong: '$\\cos^2 x = 1 + \\cos 2x$',
            right: '$\\frac{1 + \\cos 2x}{2}$',
          },
          {
            title: 'Squaring term by term',
            wrong: '$\\left(\\frac{1 - \\cos 2x}{2}\\right)^2 = \\frac{1 - \\cos^2 2x}{4}$',
            right: 'expand: $\\frac{1 - 2\\cos 2x + \\cos^2 2x}{4}$',
          },
          {
            title: 'Wrong angle in the second reduction',
            wrong: '$\\cos^2 2x = \\frac{1 + \\cos 2x}{2}$',
            right: 'double the angle again: $\\frac{1 + \\cos 4x}{2}$',
          },
        ],
        related: ['half-angle-evaluation', 'double-angle-evaluation', 'product-to-sum'],
        builtOn: [
          { label: 'Sine squared reduction', url: ruleUrl('trig.sine-squared-reduction') },
          { label: 'Cosine squared reduction', url: ruleUrl('trig.cosine-squared-reduction') },
          { label: 'Power-reducing identities (lesson)', url: ruleUrl('lesson.trig.identities.power-reducing') },
        ],
      },
    },
    {
      id: 'product-to-sum',
      slug: 'product-to-sum',
      name: 'How to rewrite a product of sines and cosines as a sum',
      description: 'Turn $\\sin A\\cos B$, $\\cos A\\cos B$ or $\\sin A\\sin B$ into a half-sum of two functions.',
      uses: ['product-to-sum formulas'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Product-to-Sum Formulas | Learn Math Class',
        description: 'Rewrite sin A cos B, cos A cos B or sin A sin B as a sum: pick the formula, compute A + B and A − B, substitute, simplify. Exact values and integrals.',
        keywords: ['product to sum formulas', 'sin a cos b formula', 'product to sum identity examples', 'cos 75 cos 15'],
      },
      page: {
        h1: 'How to Rewrite a Product of Sines and Cosines as a Sum',
        lead:
          'A product of two trig functions equals half the sum (or difference) of two functions of $A + B$ and $A - B$. Products are hard to integrate or evaluate; sums are easy.',
        recognize:
          'Two trig functions with different angles multiplied: $\\sin 5x\\cos 3x$, $\\cos 75^\\circ\\cos 15^\\circ$, $\\sin 3x\\sin x$, often inside an integral.',
        recognizeNote: `The formulas are in ${link('lesson.trig.identities.product-sum', 'product-to-sum identities')}; they come from adding two [sum and difference formulas](!${HUB}/exact-values-sum-difference).`,
        methods: [
          {
            name: 'The three formulas',
            tag: 'pick by the functions',
            preferred: true,
            formula: '\\sin A\\cos B = \\tfrac{1}{2}[\\sin(A + B) + \\sin(A - B)] \\quad \\cos A\\cos B = \\tfrac{1}{2}[\\cos(A - B) + \\cos(A + B)] \\quad \\sin A\\sin B = \\tfrac{1}{2}[\\cos(A - B) - \\cos(A + B)]',
            body: `${link('trig.product-to-sum', 'Sine–cosine')}, ${link('trig.product-to-sum-cos-cos', 'cosine–cosine')} and ${link('trig.product-to-sum-sin-sin', 'sine–sine')} formulas.`,
          },
        ],
        titles: { methods: 'The formulas' },
        steps: {
          traceLabel: 'On $\\sin 5x\\cos 3x$',
          items: [
            {
              title: 'Identify the pair of functions.',
              body: 'Sine–cosine, cosine–cosine or sine–sine.',
              state: 'sine–cosine, $A = 5x$, $B = 3x$',
            },
            {
              title: 'Compute A + B and A − B.',
              body: '',
              state: '$8x$ and $2x$',
            },
            {
              title: 'Substitute into the formula.',
              body: '',
              state: '$\\tfrac{1}{2}(\\sin 8x + \\sin 2x)$',
              atomic: 'sum-difference',
            },
            {
              title: 'Simplify negative angles if any.',
              body: `$\\sin(-u) = -\\sin u$, $\\cos(-u) = \\cos u$ (${link('trig.even-odd-identities', 'even-odd')}).`,
              state: 'none here',
            },
          ],
        },
        examples: [
          {
            title: 'an exact value',
            badge: 'cosine–cosine',
            lines: [
              { math: '$\\cos 75^\\circ\\cos 15^\\circ = \\tfrac{1}{2}(\\cos 60^\\circ + \\cos 90^\\circ)$', why: '' },
              { math: '$= \\tfrac{1}{2}\\left(\\tfrac{1}{2} + 0\\right) = \\tfrac{1}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'sine–sine',
            badge: 'difference',
            lines: [
              { math: '$\\sin 3x\\sin x = \\tfrac{1}{2}(\\cos 2x - \\cos 4x)$', why: '' },
              { math: 'ready to integrate term by term', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'sine–cosine',
            lines: [
              { math: '$\\sin 5x\\cos 3x$', why: '' },
              { math: '$\\tfrac{1}{2}(\\sin 8x + \\sin 2x)$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Multiply a fast wave by a slow one and you hear a beat: two notes, one at the sum and one at the difference of the frequencies. The product-to-sum formulas are that observation written as an identity.',
        },
        pitfalls: [
          {
            title: 'Forgetting the ½',
            wrong: '$\\sin 5x\\cos 3x = \\sin 8x + \\sin 2x$',
            right: '$\\tfrac{1}{2}(\\sin 8x + \\sin 2x)$',
          },
          {
            title: 'Wrong sign for sine–sine',
            wrong: '$\\sin A\\sin B = \\tfrac{1}{2}[\\cos(A + B) - \\cos(A - B)]$',
            right: '$\\tfrac{1}{2}[\\cos(A - B) - \\cos(A + B)]$',
          },
          {
            title: 'Multiplying the angles',
            wrong: '$\\sin 5x\\cos 3x = \\sin 15x^2$',
            right: 'angles add and subtract, they never multiply',
          },
        ],
        related: ['sum-to-product', 'power-reduction', 'which-identity'],
        builtOn: [
          { label: 'Product-to-sum (sine–cosine)', url: ruleUrl('trig.product-to-sum') },
          { label: 'Product-to-sum (cosine–cosine)', url: ruleUrl('trig.product-to-sum-cos-cos') },
          { label: 'Product-to-sum identities (lesson)', url: ruleUrl('lesson.trig.identities.product-sum') },
        ],
      },
    },
    {
      id: 'sum-to-product',
      slug: 'sum-to-product',
      name: 'How to rewrite a sum of sines or cosines as a product',
      description: 'Turn $\\sin A \\pm \\sin B$ or $\\cos A \\pm \\cos B$ into a product, often to solve an equation.',
      uses: ['sum-to-product formulas'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Sum-to-Product Formulas | Learn Math Class',
        description: 'Rewrite sin A ± sin B or cos A ± cos B as a product: compute the half-sum and half-difference, apply the formula, then use the product to solve or simplify.',
        keywords: ['sum to product formulas', 'sin a + sin b', 'cos a - cos b formula', 'sum to product identity examples'],
      },
      page: {
        h1: 'How to Rewrite a Sum of Sines or Cosines as a Product',
        lead:
          'A sum of two sines (or two cosines) is a product of a sine and a cosine at the half-sum and half-difference of the angles. A product equal to zero splits into two easy equations, which is the main use.',
        recognize:
          'Two sines or two cosines with different angles added or subtracted: $\\sin 5x + \\sin 3x$, $\\cos 75^\\circ + \\cos 15^\\circ$, an equation $\\sin 3x + \\sin x = 0$.',
        recognizeNote: `The formulas are in ${link('lesson.trig.identities.sum-product', 'sum-to-product identities')}; they are the [product-to-sum formulas](!${HUB}/product-to-sum) read backwards.`,
        methods: [
          {
            name: 'The four formulas',
            tag: 'half-sum and half-difference',
            preferred: true,
            formula: '\\sin A + \\sin B = 2\\sin\\tfrac{A + B}{2}\\cos\\tfrac{A - B}{2} \\qquad \\cos A + \\cos B = 2\\cos\\tfrac{A + B}{2}\\cos\\tfrac{A - B}{2}',
            body: `With minus signs, see the ${link('trig.sum-to-product-sin-diff', 'difference of sines')} and the ${link('trig.sum-to-product-cos-diff', 'difference of cosines')}; the second has a leading minus: $\\cos A - \\cos B = -2\\sin\\frac{A+B}{2}\\sin\\frac{A-B}{2}$.`,
          },
        ],
        titles: { methods: 'The formulas' },
        steps: {
          traceLabel: 'On $\\sin 5x + \\sin 3x$',
          items: [
            {
              title: 'Identify the pattern and the angles.',
              body: '',
              state: '$\\sin A + \\sin B$, $A = 5x$, $B = 3x$',
            },
            {
              title: 'Compute the half-sum and half-difference.',
              body: '',
              state: '$\\frac{A + B}{2} = 4x$, $\\frac{A - B}{2} = x$',
            },
            {
              title: 'Apply the formula.',
              body: `${link('trig.sum-to-product-sin-sum', 'Sine sum to product')}.`,
              state: '$2\\sin 4x\\cos x$',
            },
            {
              title: 'Use the product.',
              body: 'Set factors to zero in an equation, or evaluate exact values.',
              state: 'product form',
            },
          ],
        },
        examples: [
          {
            title: 'an exact value',
            badge: 'cosine sum',
            lines: [
              { math: '$\\cos 75^\\circ + \\cos 15^\\circ = 2\\cos 45^\\circ\\cos 30^\\circ$', why: '' },
              { math: '$= 2\\cdot\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{6}}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'an equation',
            badge: 'product = 0',
            lines: [
              { math: '$\\sin 3x + \\sin x = 0$ on $[0, \\pi)$: $2\\sin 2x\\cos x = 0$', why: '' },
              { math: '$\\sin 2x = 0$: $x = 0, \\frac{\\pi}{2}$; $\\cos x = 0$: $x = \\frac{\\pi}{2}$', why: '' },
              { math: '$x = 0, \\frac{\\pi}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'sine sum',
            lines: [
              { math: '$\\sin 5x + \\sin 3x$', why: '' },
              { math: '$2\\sin 4x\\cos x$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Add two waves of nearly equal frequency and the result swells and fades: a fast wave at the average frequency inside a slow envelope at half the difference. That is $2\\sin\\frac{A + B}{2}\\cos\\frac{A - B}{2}$ drawn.',
        },
        pitfalls: [
          {
            title: 'Full sum instead of half',
            wrong: '$\\sin 5x + \\sin 3x = 2\\sin 8x\\cos 2x$',
            right: 'halve both: $2\\sin 4x\\cos x$',
          },
          {
            title: 'Missing minus in cos A − cos B',
            wrong: '$\\cos A - \\cos B = 2\\sin\\frac{A + B}{2}\\sin\\frac{A - B}{2}$',
            right: 'there is a leading minus: $-2\\sin\\ldots\\sin\\ldots$',
          },
          {
            title: 'Adding the functions directly',
            wrong: '$\\sin 5x + \\sin 3x = \\sin 8x$',
            right: 'a sum of sines is not the sine of the sum',
          },
        ],
        related: ['product-to-sum', 'exact-values-sum-difference', 'which-identity'],
        builtOn: [
          { label: 'Sine sum to product', url: ruleUrl('trig.sum-to-product-sin-sum') },
          { label: 'Cosine sum to product', url: ruleUrl('trig.sum-to-product-cos-sum') },
          { label: 'Sum-to-product identities (lesson)', url: ruleUrl('lesson.trig.identities.sum-product') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-identity',
      slug: 'which-identity',
      name: 'Which identity should I use?',
      description: 'A decision tree from the task and the shape of the expression to the identity that fits.',
      uses: 'leads to 8 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Trig Identity to Use? Decision Tree | Learn Math Class',
        description: 'Choose a trig identity from the task: prove or simplify, the exact value of a non-standard angle, a product or a sum to rewrite, or a power to reduce.',
        keywords: ['which trig identity to use', 'trig identity strategy', 'choose an identity', 'trig identities decision tree'],
      },
      page: {
        h1: 'Which Identity Should I Use?',
        lead:
          'Start from what you are asked to do, then look at the angles and powers in the expression. Each path ends at the identity family that does the job.',
        tree: {
          rootId: 'task',
          svgW: 1150,
          nodes: {
            task: {
              type: 'q',
              text: 'What is the task?',
              children: [
                { label: 'prove', to: 'prove' },
                { label: 'simplify', to: 'simplify' },
                { label: 'exact value', to: 'angle' },
                { label: 'product or sum', to: 'prodsum' },
                { label: 'lower a power', to: 'power' },
              ],
            },
            angle: {
              type: 'q',
              text: 'How is the angle related to a standard one?',
              children: [
                { label: 'sum or difference', to: 'sumdiff' },
                { label: 'half', to: 'half' },
                { label: 'double', to: 'double' },
              ],
            },
            prodsum: {
              type: 'q',
              text: 'Which way?',
              children: [
                { label: 'product → sum', to: 'p2s' },
                { label: 'sum → product', to: 's2p' },
              ],
            },
            prove: { type: 'leaf', to: 'prove-identities', short: 'Prove an identity' },
            simplify: { type: 'leaf', to: 'simplify-trig-expressions', short: 'Simplify' },
            sumdiff: { type: 'leaf', to: 'exact-values-sum-difference', short: 'Sum and difference' },
            half: { type: 'leaf', to: 'half-angle-evaluation', short: 'Half angle' },
            double: { type: 'leaf', to: 'double-angle-evaluation', short: 'Double angle' },
            p2s: { type: 'leaf', to: 'product-to-sum', short: 'Product to sum' },
            s2p: { type: 'leaf', to: 'sum-to-product', short: 'Sum to product' },
            power: { type: 'leaf', to: 'power-reduction', short: 'Power reduction' },
          },
          branches: [
            {
              condition: 'You must show two expressions are equal.',
              answer: `[Prove the identity](!${HUB}/prove-identities) by transforming one side into the other.`,
            },
            {
              condition: 'You must make one expression shorter.',
              answer: `[Simplify](!${HUB}/simplify-trig-expressions): sines and cosines first, then the ${link('trig.pythagorean-identities', 'Pythagorean identities')}.`,
            },
            {
              condition: 'An exact value of an angle that is a sum or difference of $30^\\circ$, $45^\\circ$, $60^\\circ$ (like $75^\\circ$).',
              answer: `Use the [sum and difference formulas](!${HUB}/exact-values-sum-difference).`,
            },
            {
              condition: 'An exact value of half a standard angle (like $15^\\circ$ or $\\frac{\\pi}{8}$).',
              answer: `Use the [half-angle formulas](!${HUB}/half-angle-evaluation), sign from the half angle's quadrant.`,
            },
            {
              condition: 'A value at $2\\theta$ when $\\theta$ is described.',
              answer: `Use the [double-angle formulas](!${HUB}/double-angle-evaluation).`,
            },
            {
              condition: 'A product of sines and cosines with different angles.',
              answer: `Rewrite it as a sum: [product to sum](!${HUB}/product-to-sum).`,
            },
            {
              condition: 'A sum of two sines or two cosines.',
              answer: `Rewrite it as a product: [sum to product](!${HUB}/sum-to-product).`,
            },
            {
              condition: 'Even powers of sine or cosine to remove.',
              answer: `Use the [power-reducing formulas](!${HUB}/power-reduction).`,
            },
          ],
        },
        related: ['prove-identities', 'simplify-trig-expressions', 'exact-values-sum-difference'],
        builtOn: [
          { label: 'Summary of identities (lesson)', url: ruleUrl('lesson.trig.identities.summary') },
          { label: 'Trigonometric identities (lesson)', url: ruleUrl('lesson.trig.identities') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Identity families', blurb: 'Atomic · one identity, applied once' },
    { id: 'composite', label: 'Working with identities', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing an identity', blurb: 'Strategy' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other trigonometry methods',
    links: [
      { url: '/trigonometry/methods', label: 'Trigonometry methods' },
      { url: '/trigonometry/equations/methods', label: 'Equations' },
    ],
  },
};

export default trigIdentitiesMethods;
