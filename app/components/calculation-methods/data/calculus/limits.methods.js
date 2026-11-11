// limits.methods.js
// Single data source for /calculus/limits/methods (hub) and
// /calculus/limits/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/calculus/limits/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/calculus/limits/methods';

const limitsMethods = {
  hubPath: HUB,
  hubLabel: 'limit methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic — one rule applied once (cards on the hub) ═══════════
    {
      id: 'direct-substitution',
      name: 'How to evaluate a limit by direct substitution',
      subtitle: 'Direct substitution',
      glyph: 'f(a)',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The function is continuous at $a$: polynomials, rational functions whose denominator is not $0$ at $a$, roots, exponentials, logarithms and trig functions on their domains.',
      formula: '\\lim_{x\\to a} f(x) = f(a) \\qquad (f \\text{ continuous at } a)',
      fields: {
        steps: [
          '1. Check that $a$ is in the domain and $f$ is built from continuous pieces.',
          '2. Substitute $x = a$.',
          '3. If the result is $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, stop: that is not an answer, pick a technique.',
        ],
        worked_example: '$\\lim_{x\\to 2}(x^2 + 3x) = 4 + 6 = 10$',
      },
      links: [
        { url: ruleUrl('lesson.limits.evaluating.direct-substitution'), label: 'Direct substitution (lesson)' },
        { url: ruleUrl('limits.polynomial'), label: 'Limit of a polynomial' },
        { url: ruleUrl('limits.rational-function'), label: 'Limit of a rational function' },
        { url: ruleUrl('limits.continuity-at-a-point'), label: 'Continuity at a point' },
      ],
    },
    {
      id: 'limit-laws',
      name: 'How to split a limit with the limit laws',
      subtitle: 'Limit laws',
      glyph: '+·÷',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A sum, difference, product, quotient, power or root of functions whose limits you already know.',
      formula: '\\lim (f \\pm g) = \\lim f \\pm \\lim g \\qquad \\lim (fg) = \\lim f \\cdot \\lim g \\qquad \\lim \\frac{f}{g} = \\frac{\\lim f}{\\lim g}\\ (\\lim g \\neq 0)',
      fields: {
        steps: [
          '1. Split the expression into pieces along $+$, $-$, $\\times$, $\\div$, powers and roots.',
          '2. Take the limit of each piece.',
          '3. Recombine; for a quotient, check that the denominator limit is not $0$.',
        ],
        worked_example: '$\\lim_{x\\to 1}\\frac{x^2 + 1}{x + 3} = \\frac{1 + 1}{1 + 3} = \\frac{1}{2}$',
      },
      links: [
        { url: ruleUrl('limits.sum-difference-rule'), label: 'Sum and difference rule' },
        { url: ruleUrl('limits.product-rule'), label: 'Product rule' },
        { url: ruleUrl('limits.quotient-rule'), label: 'Quotient rule' },
        { url: ruleUrl('limits.power-rule'), label: 'Power rule' },
        { url: ruleUrl('limits.root-rule'), label: 'Root rule' },
      ],
    },
    {
      id: 'sin-x-over-x-limit',
      name: 'How to use the limit of sin x over x',
      subtitle: 'Fundamental trigonometric limit',
      glyph: 'sin x⁄x',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Sine of something divided by that same something, as it goes to $0$: $\\frac{\\sin 3x}{x}$, $\\frac{\\sin x}{5x}$, $\\frac{\\tan x}{x}$, $\\frac{1 - \\cos x}{x}$.',
      formula: '\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1 \\qquad \\lim_{x\\to 0}\\frac{1 - \\cos x}{x} = 0 \\qquad \\lim_{x\\to 0}\\frac{\\tan x}{x} = 1',
      fields: {
        steps: [
          '1. Make the argument of the sine match the denominator by multiplying and dividing by a constant.',
          '2. Replace $\\frac{\\sin u}{u}$ by $1$ as $u \\to 0$.',
        ],
        worked_example: '$\\lim_{x\\to 0}\\frac{\\sin 3x}{x} = \\lim_{x\\to 0} 3\\cdot\\frac{\\sin 3x}{3x} = 3$',
      },
      links: [
        { url: ruleUrl('limits.sin-x-over-x'), label: 'Sine limit at zero' },
        { url: ruleUrl('limits.cos-limit'), label: 'Cosine limit at zero' },
        { url: ruleUrl('limits.tan-limit'), label: 'Tangent limit at zero' },
        { url: ruleUrl('lesson.limits.special.sin-x-over-x'), label: 'The fundamental trigonometric limit (lesson)' },
      ],
    },
    {
      id: 'e-limit',
      name: 'How to use the limits that define e',
      subtitle: 'Exponential limits',
      glyph: 'e',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: '$\\left(1 + \\frac{1}{n}\\right)^n$ as $n \\to \\infty$, $(1 + x)^{1/x}$ as $x \\to 0$, or $\\frac{e^x - 1}{x}$ as $x \\to 0$.',
      formula: '\\lim_{n\\to\\infty}\\left(1 + \\frac{1}{n}\\right)^n = e \\qquad \\lim_{x\\to 0}\\frac{e^x - 1}{x} = 1',
      fields: {
        steps: [
          '1. Match the expression to one of the two forms.',
          '2. Fix a constant that is in the way with a substitution ($u = \\frac{n}{2}$ turns $(1 + \\frac{2}{n})^n$ into $(1 + \\frac{1}{u})^{2u}$).',
          '3. Apply the limit.',
        ],
        worked_example: '$\\lim_{n\\to\\infty}\\left(1 + \\frac{2}{n}\\right)^n = \\lim_{u\\to\\infty}\\left[\\left(1 + \\frac{1}{u}\\right)^u\\right]^2 = e^2$',
      },
      links: [
        { url: ruleUrl('limits.e-definition'), label: 'Definition of e as a limit' },
        { url: ruleUrl('limits.exp-limit'), label: 'Exponential limit at zero' },
        { url: ruleUrl('lesson.limits.special.e'), label: 'The definition of e (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'factoring-limits',
      slug: 'factoring-limits',
      name: 'How to evaluate a limit by factoring',
      description: 'A $\\frac{0}{0}$ form with polynomials: factor, cancel the vanishing factor, substitute.',
      uses: ['factoring', 'direct substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate a Limit by Factoring (0/0 Form) | Learn Math Class',
        description:
          'Evaluate a 0/0 limit by factoring: factor numerator and denominator, cancel the common factor, substitute. Examples with quadratics and a cube, plus mistakes.',
        keywords: ['limit by factoring', 'how to evaluate a 0/0 limit', 'factor and cancel limit', 'limits of rational functions examples', 'indeterminate form 0/0'],
      },
      page: {
        h1: 'How to Evaluate a Limit by Factoring',
        lead:
          'When substitution gives $\\frac{0}{0}$, the numerator and the denominator share a factor that vanishes at $a$. Factor both, cancel that factor, then substitute again.',
        recognize:
          'A rational expression that gives $\\frac{0}{0}$ at $a$: $\\frac{x^2 - 4}{x - 2}$, $\\frac{x^2 + x - 6}{x^2 - 4}$, $\\frac{x^3 - 1}{x - 1}$. Test: substitution gives $\\frac{0}{0}$ and both top and bottom are polynomials, so $(x - a)$ is a factor of each.',
        recognizeNote: `Why $\\frac{0}{0}$ is not an answer is explained under ${link('lesson.limits.evaluating.indeterminate-forms', 'indeterminate forms')}; the technique itself is ${link('lesson.limits.evaluating.factoring', 'factoring and canceling')} in the same lesson.`,
        methods: [
          {
            name: 'Factor and cancel',
            tag: 'usual choice',
            preferred: true,
            formula: '\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2 \\quad (x \\neq 2)',
            body: `Cancelling is allowed because a limit never looks at $x = a$ itself. Factoring patterns are in the ${link('polynomials.factoring-strategy', 'factoring strategy')}.`,
          },
          {
            name: 'Divide by (x − a)',
            tag: 'higher degree',
            formula: 'x^3 - 1 = (x - 1)(x^2 + x + 1)',
            body: `When the factor is not obvious, ${link('polynomials.long-division', 'divide')} the polynomial by $(x - a)$; the remainder must be $0$.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to 2}\\frac{x^2 - 4}{x - 2}$',
          items: [
            {
              title: 'Substitute and confirm the form.',
              body: '$\\frac{0}{0}$ means "not yet decided", not "undefined". A nonzero number over $0$ is a different situation: see one-sided limits.',
              state: '$\\frac{4 - 4}{2 - 2} = \\frac{0}{0}$',
              atomic: 'direct-substitution',
            },
            {
              title: 'Factor the numerator and the denominator.',
              body: 'Because both are $0$ at $x = a$, both contain the factor $(x - a)$.',
              state: '$\\frac{(x - 2)(x + 2)}{x - 2}$',
            },
            {
              title: 'Cancel the common factor.',
              body: 'Legal for $x \\neq a$, which is all the limit cares about.',
              state: '$x + 2$',
            },
            {
              title: 'Substitute again.',
              body: 'The simplified expression is continuous at $a$.',
              state: '$2 + 2 = 4$',
              atomic: 'direct-substitution',
            },
          ],
        },
        examples: [
          {
            title: 'difference of squares',
            badge: 'basic',
            lines: [
              { math: '$\\lim_{x\\to 2}\\frac{x^2 - 4}{x - 2}$', why: '$\\frac{0}{0}$' },
              { math: '$= \\lim_{x\\to 2}\\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x\\to 2}(x + 2)$', why: 'factor, cancel' },
              { math: '$= 4$', why: '', answer: true },
            ],
          },
          {
            title: 'both sides factor',
            badge: 'quadratic over quadratic',
            lines: [
              { math: '$\\lim_{x\\to 2}\\frac{x^2 + x - 6}{x^2 - 4}$', why: '$\\frac{0}{0}$' },
              { math: '$= \\lim_{x\\to 2}\\frac{(x + 3)(x - 2)}{(x + 2)(x - 2)} = \\lim_{x\\to 2}\\frac{x + 3}{x + 2}$', why: 'cancel $(x - 2)$' },
              { math: '$= \\frac{5}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'difference of cubes',
            badge: 'degree 3',
            lines: [
              { math: '$\\lim_{x\\to 1}\\frac{x^3 - 1}{x - 1}$', why: '$\\frac{0}{0}$' },
              { math: '$= \\lim_{x\\to 1}\\frac{(x - 1)(x^2 + x + 1)}{x - 1} = \\lim_{x\\to 1}(x^2 + x + 1)$', why: 'sum-of-cubes pattern or division' },
              { math: '$= 3$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The graph of $\\frac{x^2 - 4}{x - 2}$ is the line $y = x + 2$ with one point missing at $x = 2$. The limit asks for the height the graph approaches, not for the missing value, so the cancelled factor costs nothing.',
        },
        pitfalls: [
          {
            title: 'Stopping at 0/0',
            wrong: '"the limit is $\\frac{0}{0}$, undefined"',
            right: '$\\frac{0}{0}$ means keep working; the limit here is $4$',
          },
          {
            title: 'Cancelling something that is not a factor',
            wrong: '$\\frac{x^2 - 4}{x - 2} = \\frac{x^2}{x} - 2$',
            right: 'factor first; only a common factor cancels',
          },
          {
            title: 'Factoring when the form is c/0',
            wrong: '$\\lim_{x\\to 2}\\frac{x + 1}{x - 2}$ "factor and cancel"',
            right: `$\\frac{3}{0}$ is not indeterminate: the one-sided limits are infinite; see [one-sided limits](!${HUB}/one-sided-limits)`,
          },
        ],
        related: ['rationalizing-limits', 'removable-discontinuities', 'which-limit-technique'],
        builtOn: [
          { label: 'Factoring strategy', url: ruleUrl('polynomials.factoring-strategy') },
          { label: 'Indeterminate forms', url: ruleUrl('lesson.limits.evaluating.indeterminate-forms') },
          { label: 'Quotient rule (limits)', url: ruleUrl('limits.quotient-rule') },
        ],
      },
    },
    {
      id: 'rationalizing-limits',
      slug: 'rationalizing-limits',
      name: 'How to evaluate a limit by rationalizing',
      description: 'A root in a $\\frac{0}{0}$ (or $\\infty - \\infty$) form: multiply by the conjugate, cancel, substitute.',
      uses: ['conjugates', 'direct substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate a Limit by Rationalizing (Conjugates) | Learn Math Class',
        description:
          'Clear a square root from a 0/0 limit: multiply top and bottom by the conjugate, cancel, substitute. Examples including a limit at infinity, plus mistakes.',
        keywords: ['limit by rationalizing', 'conjugate limit', 'limit with square root 0/0', 'rationalize the numerator limit', 'limits with radicals examples'],
      },
      page: {
        h1: 'How to Evaluate a Limit by Rationalizing',
        lead:
          'A square root that produces $\\frac{0}{0}$ is cleared by multiplying top and bottom by the conjugate. The difference of squares removes the root, the troublesome factor appears, and it cancels.',
        recognize:
          'A square root in a $\\frac{0}{0}$ limit: $\\frac{\\sqrt{x} - 2}{x - 4}$, $\\frac{\\sqrt{x + 1} - 1}{x}$, $\\frac{x - 9}{\\sqrt{x} - 3}$. Also $\\sqrt{x^2 + x} - x$ as $x \\to \\infty$, an $\\infty - \\infty$ form. Test: substitution gives $\\frac{0}{0}$ or $\\infty - \\infty$ and a root is involved.',
        recognizeNote: `The lesson calls this ${link('lesson.limits.evaluating.rationalizing', 'rationalizing by conjugate multiplication')}; the root is handled by the ${link('limits.root-rule', 'root rule')} once the form is gone.`,
        methods: [
          {
            name: 'Multiply by the conjugate',
            tag: 'usual choice',
            preferred: true,
            formula: '(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2',
            body: 'Multiply numerator and denominator by the conjugate of the part with the root. The root disappears from that part and the vanishing factor shows up.',
          },
          {
            name: 'Substitute u = the root',
            tag: 'alternative',
            formula: 'u = \\sqrt{x} \\;\\Rightarrow\\; x = u^2, \\quad \\frac{\\sqrt{x} - 2}{x - 4} = \\frac{u - 2}{u^2 - 4}',
            body: `Turns the root into a polynomial in $u$, which is then handled by [factoring](!${HUB}/factoring-limits).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to 4}\\frac{\\sqrt{x} - 2}{x - 4}$',
          items: [
            {
              title: 'Substitute and confirm the form.',
              body: '$\\frac{0}{0}$ with a root in it.',
              state: '$\\frac{2 - 2}{4 - 4} = \\frac{0}{0}$',
              atomic: 'direct-substitution',
            },
            {
              title: 'Multiply top and bottom by the conjugate.',
              body: 'The conjugate of $\\sqrt{x} - 2$ is $\\sqrt{x} + 2$. Expand only the part with the root; leave the other factor as it is.',
              state: '$\\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)} = \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)}$',
            },
            {
              title: 'Cancel the common factor.',
              body: 'The factor that was hiding inside the root is now visible.',
              state: '$\\frac{1}{\\sqrt{x} + 2}$',
            },
            {
              title: 'Substitute again.',
              body: 'The expression is continuous at $a$ now.',
              state: '$\\frac{1}{2 + 2} = \\frac{1}{4}$',
              atomic: 'direct-substitution',
            },
          ],
        },
        examples: [
          {
            title: 'root in the numerator',
            badge: 'basic',
            lines: [
              { math: '$\\lim_{x\\to 4}\\frac{\\sqrt{x} - 2}{x - 4}$', why: '$\\frac{0}{0}$; conjugate $\\sqrt{x} + 2$' },
              { math: '$= \\lim_{x\\to 4}\\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x\\to 4}\\frac{1}{\\sqrt{x} + 2}$', why: 'cancel' },
              { math: '$= \\frac{1}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'root of a sum',
            badge: 'x → 0',
            lines: [
              { math: '$\\lim_{x\\to 0}\\frac{\\sqrt{x + 1} - 1}{x}$', why: 'conjugate $\\sqrt{x + 1} + 1$' },
              { math: '$= \\lim_{x\\to 0}\\frac{x}{x(\\sqrt{x + 1} + 1)} = \\lim_{x\\to 0}\\frac{1}{\\sqrt{x + 1} + 1}$', why: 'cancel $x$' },
              { math: '$= \\frac{1}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'infinity minus infinity',
            badge: 'x → ∞',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\big(\\sqrt{x^2 + x} - x\\big)$', why: '$\\infty - \\infty$; conjugate $\\sqrt{x^2 + x} + x$' },
              { math: '$= \\lim_{x\\to\\infty}\\frac{x}{\\sqrt{x^2 + x} + x} = \\lim_{x\\to\\infty}\\frac{1}{\\sqrt{1 + \\frac{1}{x}} + 1}$', why: 'divide top and bottom by $x$; inside the root by $x^2$' },
              { math: '$= \\frac{1}{2}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Near $x = 4$, the quotient $\\frac{\\sqrt{x} - 2}{x - 4}$ is the slope of a chord of $y = \\sqrt{x}$ from $4$ to $x$. The limit $\\frac{1}{4}$ is the slope of the tangent at $4$, which is why it agrees with the derivative of $\\sqrt{x}$ there.',
        },
        pitfalls: [
          {
            title: 'Multiplying only the numerator',
            wrong: 'the top gets the conjugate, the bottom does not',
            right: 'multiply top and bottom by the same thing, or the value changes',
          },
          {
            title: 'Expanding the denominator',
            wrong: '$(x - 4)(\\sqrt{x} + 2)$ multiplied out',
            right: 'leave it factored so the cancellation is visible',
          },
          {
            title: 'Wrong sign in the conjugate',
            wrong: 'multiplying by $\\sqrt{x} - 2$ again',
            right: 'flip the sign: $\\sqrt{x} + 2$, so the product is a difference of squares',
          },
          {
            title: 'Dividing inside a root by x',
            wrong: '$\\frac{\\sqrt{x^2 + x}}{x} = \\sqrt{x + 1}$',
            right: '$\\frac{\\sqrt{x^2 + x}}{x} = \\sqrt{\\frac{x^2 + x}{x^2}} = \\sqrt{1 + \\frac{1}{x}}$ for $x > 0$',
          },
        ],
        related: ['factoring-limits', 'limits-at-infinity-radicals', 'which-limit-technique'],
        builtOn: [
          { label: 'Rationalizing (lesson)', url: ruleUrl('lesson.limits.evaluating.rationalizing') },
          { label: 'Root rule (limits)', url: ruleUrl('limits.root-rule') },
          { label: 'Indeterminate forms', url: ruleUrl('lesson.limits.evaluating.indeterminate-forms') },
        ],
      },
    },
    {
      id: 'one-sided-limits',
      slug: 'one-sided-limits',
      name: 'How to evaluate one-sided limits',
      description: 'Left and right limits separately; the two-sided limit exists only when they agree.',
      uses: ['two-sided existence theorem', 'sign analysis'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate One-Sided Limits (Left and Right) | Learn Math Class',
        description:
          'Evaluate left and right limits separately: find which formula or sign applies on each side, compute both, compare. If they differ, no two-sided limit. Examples.',
        keywords: ['one-sided limits', 'left hand limit right hand limit', 'how to evaluate one sided limits', 'limit does not exist', 'one-sided infinite limits'],
      },
      page: {
        h1: 'How to Evaluate One-Sided Limits',
        lead:
          'A one-sided limit looks at $x$ approaching $a$ from one side only. Evaluate the left limit and the right limit separately; the two-sided limit exists exactly when the two agree.',
        recognize:
          '$x \\to a^-$ or $x \\to a^+$ in the question; an absolute value $|x - a|$; a denominator that is $0$ at $a$; a root defined on one side only; a piecewise function with a break at $a$. Test: does the formula, or the sign of something, change at $a$?',
        recognizeNote: `The ${link('limits.two-sided-existence', 'two-sided limit existence theorem')} ties the sides together; the lesson works through ${link('lesson.limits.one-sided.evaluating', 'evaluating one-sided limits')}.`,
        methods: [
          {
            name: 'Evaluate each side',
            tag: 'usual choice',
            preferred: true,
            formula: '\\lim_{x\\to a} f(x) = L \\iff \\lim_{x\\to a^-} f(x) = \\lim_{x\\to a^+} f(x) = L',
            body: `On each side use the formula that is valid there; then compare (${link('lesson.limits.one-sided.connection', 'connection to two-sided limits')}).`,
          },
          {
            name: 'Sign analysis for infinite limits',
            tag: 'when the form is c/0',
            formula: '\\frac{\\text{nonzero}}{0^+} = \\pm\\infty, \\qquad \\frac{\\text{nonzero}}{0^-} = \\mp\\infty',
            body: `Decide the sign of each factor on each side of $a$; the signs give $+\\infty$ or $-\\infty$ (${link('lesson.limits.evaluating.sign-analysis', 'sign analysis near the point')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\frac{|x - 2|}{x - 2}$ at $x = 2$',
          items: [
            {
              title: 'Identify what changes at a.',
              body: 'An absolute value changes its formula, a denominator changes sign, a piecewise function changes piece.',
              state: '$|x - 2| = -(x - 2)$ for $x < 2$, and $x - 2$ for $x > 2$',
            },
            {
              title: 'Left limit: use the formula valid for x < a.',
              body: 'Simplify first, then substitute or do sign analysis.',
              state: '$\\lim_{x\\to 2^-}\\frac{-(x - 2)}{x - 2} = -1$',
            },
            {
              title: 'Right limit: use the formula valid for x > a.',
              body: 'Same procedure on the other side.',
              state: '$\\lim_{x\\to 2^+}\\frac{x - 2}{x - 2} = 1$',
            },
            {
              title: 'Compare.',
              body: `Equal: that common value is the two-sided limit. Different: the two-sided limit does not exist (${link('limits.two-sided-existence', 'existence theorem')}).`,
              state: '$-1 \\neq 1$: the limit does not exist',
            },
          ],
        },
        examples: [
          {
            title: 'absolute value',
            badge: 'jump',
            lines: [
              { math: '$\\lim_{x\\to 2^-}\\frac{|x - 2|}{x - 2} = -1,\\qquad \\lim_{x\\to 2^+}\\frac{|x - 2|}{x - 2} = 1$', why: 'different formulas on the two sides' },
              { math: '$\\lim_{x\\to 2}\\frac{|x - 2|}{x - 2}$ does not exist', why: 'the sides disagree', answer: true },
            ],
          },
          {
            title: 'nonzero over zero',
            badge: 'infinite one-sided limits',
            lines: [
              { math: '$\\lim_{x\\to 1^-}\\frac{1}{x - 1}$', why: 'denominator $\\to 0^-$, numerator $1$' },
              { math: '$= -\\infty, \\qquad \\lim_{x\\to 1^+}\\frac{1}{x - 1} = +\\infty$', why: 'sign analysis on each side', answer: true },
            ],
          },
          {
            title: 'a root defined on one side',
            badge: 'domain edge',
            lines: [
              { math: '$\\lim_{x\\to 0^+}\\sqrt{x} = 0$', why: 'the right side is in the domain' },
              { math: '$\\lim_{x\\to 0^-}\\sqrt{x}$ is undefined, so $\\lim_{x\\to 0}\\sqrt{x}$ does not exist', why: 'but the one-sided limit is a perfectly good $0$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Walk toward $x = 2$ from the left along $\\frac{|x - 2|}{x - 2}$ and you stay at height $-1$; walk in from the right and you stay at $1$. A limit is where both walks end up, and here they end at different heights, so there is no single answer.',
        },
        pitfalls: [
          {
            title: 'Using the wrong formula for a side',
            wrong: 'the left limit computed from the formula for $x > a$',
            right: 'left side uses the $x < a$ formula',
          },
          {
            title: '"1/0 is undefined, so there is no limit"',
            wrong: 'stopping at $\\frac{1}{0}$',
            right: 'one-sided limits can be $\\pm\\infty$; find the sign on each side',
          },
          {
            title: 'Declaring a two-sided limit when the sides differ',
            wrong: '$\\lim_{x\\to 2}\\frac{|x - 2|}{x - 2} = 1$',
            right: 'the limit does not exist; only the one-sided limits do',
          },
          {
            title: 'Letting f(a) interfere',
            wrong: '"$f(2)$ is undefined, so the one-sided limits are undefined"',
            right: 'limits never use the value at $a$',
          },
        ],
        related: ['piecewise-limits', 'vertical-asymptotes', 'continuity-check'],
        builtOn: [
          { label: 'Two-sided limit existence theorem', url: ruleUrl('limits.two-sided-existence') },
          { label: 'Evaluating one-sided limits (lesson)', url: ruleUrl('lesson.limits.one-sided.evaluating') },
          { label: 'Sign analysis near the point', url: ruleUrl('lesson.limits.evaluating.sign-analysis') },
        ],
      },
    },
    {
      id: 'piecewise-limits',
      slug: 'piecewise-limits',
      name: 'How to find the limit of a piecewise function',
      description: 'At a break, the lower piece gives the left limit and the upper piece the right; compare.',
      uses: ['one-sided limits', 'direct substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Limit of a Piecewise Function | Learn Math Class',
        description:
          'Limits of piecewise functions: at a break use the lower piece for the left limit and the upper piece for the right, then compare; ignore the value at the point.',
        keywords: ['limit of a piecewise function', 'piecewise function limits', 'left and right limits piecewise', 'piecewise limit examples'],
      },
      page: {
        h1: 'How to Find the Limit of a Piecewise Function',
        lead:
          'At a point where the formula changes, use the piece for $x < a$ for the left limit and the piece for $x > a$ for the right limit. Away from the breaks, just substitute into the piece that applies.',
        recognize:
          'A function defined by cases with a curly brace, and a limit asked at a boundary between the cases or at a point inside one case. Test: which piece is active immediately to the left of $a$, and which immediately to the right?',
        recognizeNote: `The lesson treats this under ${link('lesson.limits.one-sided.piecewise', 'piecewise functions')}; a mismatch between the sides is a ${link('lesson.limits.one-sided.jump', 'jump discontinuity')}.`,
        methods: [
          {
            name: 'At a boundary point',
            tag: 'two one-sided limits',
            preferred: true,
            formula: '\\lim_{x\\to a^-} f(x) = \\text{lower piece at } a, \\qquad \\lim_{x\\to a^+} f(x) = \\text{upper piece at } a',
            body: 'Substitute $a$ into each neighbouring piece (each piece is usually continuous on its own), then compare the two values.',
          },
          {
            name: 'Inside one piece',
            tag: 'no break nearby',
            formula: '\\lim_{x\\to c} f(x) = f(c) \\text{ by the active piece}',
            body: 'Only one formula is in force near $c$, so direct substitution into that formula is all that is needed.',
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^2 + 1$ for $x < 1$, $\\;3$ for $x = 1$, $\\;2x$ for $x > 1$, at $a = 1$',
          items: [
            {
              title: 'Locate a relative to the breaks.',
              body: 'If $a$ is strictly inside one piece, substitute into that piece and you are done. If $a$ is a break, continue.',
              state: '$a = 1$ is the break between $x^2 + 1$ and $2x$',
            },
            {
              title: 'Left limit from the piece for x < a.',
              body: 'Substitute $a$ into that formula.',
              state: '$\\lim_{x\\to 1^-}(x^2 + 1) = 2$',
              atomic: 'direct-substitution',
            },
            {
              title: 'Right limit from the piece for x > a.',
              body: 'Substitute $a$ into that formula.',
              state: '$\\lim_{x\\to 1^+} 2x = 2$',
              atomic: 'direct-substitution',
            },
            {
              title: 'Compare, and ignore the value at a.',
              body: `Equal: that is the limit. Different: the limit does not exist. The value $f(a)$ matters only for [continuity](!${HUB}/continuity-check), never for the limit.`,
              state: 'limit $= 2$, although $f(1) = 3$',
            },
          ],
        },
        examples: [
          {
            title: 'limit exists, value is wrong',
            badge: 'removable',
            lines: [
              { math: '$f(x) = x^2 + 1\\ (x < 1),\\quad 3\\ (x = 1),\\quad 2x\\ (x > 1)$', why: 'at $a = 1$' },
              { math: 'left $2$, right $2$', why: 'both neighbouring pieces give $2$' },
              { math: '$\\lim_{x\\to 1} f(x) = 2$', why: '$f(1) = 3$ does not change that', answer: true },
            ],
          },
          {
            title: 'a jump',
            badge: 'limit does not exist',
            lines: [
              { math: '$f(x) = x\\ (x \\le 0),\\quad x + 1\\ (x > 0)$', why: 'at $a = 0$' },
              { math: 'left $0$, right $1$', why: 'the pieces disagree' },
              { math: '$\\lim_{x\\to 0} f(x)$ does not exist', why: 'a jump of size $1$', answer: true },
            ],
          },
          {
            title: 'inside one piece',
            badge: 'no break',
            lines: [
              { math: 'same $f$, limit at $x = 2$', why: 'only the piece $x + 1$ is active near $2$' },
              { math: '$\\lim_{x\\to 2} f(x) = 3$', why: 'direct substitution', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Cover the point $x = a$ with a finger and look at the graph on each side: the left piece heads toward one height, the right piece toward another. The limit exists only if the two heights are the same, whatever the dot at $a$ itself shows.',
        },
        pitfalls: [
          {
            title: 'Using the piece that contains a for both sides',
            wrong: 'the left limit from the piece marked $x \\ge 1$',
            right: 'the left limit uses the piece for $x < 1$',
          },
          {
            title: 'Taking f(a) as the limit',
            wrong: '$\\lim_{x\\to 1} f(x) = 3$ because $f(1) = 3$',
            right: 'the limit is $2$; the value at the point is irrelevant',
          },
          {
            title: 'Checking one side only',
            wrong: '"the limit is $2$ since the left piece gives $2$"',
            right: 'check the right piece too; a jump would hide there',
          },
          {
            title: 'Substituting into a piece outside its range',
            wrong: '$x = 1$ into $2x$ for the left limit',
            right: 'the left side uses $x^2 + 1$',
          },
        ],
        related: ['one-sided-limits', 'continuity-check', 'removable-discontinuities'],
        builtOn: [
          { label: 'Piecewise functions (lesson)', url: ruleUrl('lesson.limits.one-sided.piecewise') },
          { label: 'Two-sided limit existence theorem', url: ruleUrl('limits.two-sided-existence') },
          { label: 'Continuity at a point', url: ruleUrl('limits.continuity-at-a-point') },
        ],
      },
    },
    {
      id: 'limits-at-infinity-rational',
      slug: 'limits-at-infinity-rational',
      name: 'How to find limits at infinity of rational functions',
      description: 'Compare degrees, or divide every term by the highest power of $x$ in the denominator.',
      uses: ['dominant term', 'limit laws'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'Limits at Infinity of Rational Functions (Step by Step) | Learn Math Class',
        description:
          'Find the limit of a rational function as x → ±∞: compare degrees, or divide every term by the highest power of x in the denominator. Examples and mistakes.',
        keywords: ['limits at infinity', 'limit of a rational function at infinity', 'compare degrees limit', 'end behavior rational function', 'limits at infinity examples'],
      },
      page: {
        h1: 'How to Find Limits at Infinity of Rational Functions',
        lead:
          'As $x \\to \\pm\\infty$ only the highest powers matter. Divide top and bottom by the highest power of $x$ in the denominator, or compare degrees: bigger on top gives $\\pm\\infty$, equal degrees give the ratio of leading coefficients, bigger on the bottom gives $0$.',
        recognize:
          '$x \\to \\infty$ or $x \\to -\\infty$ with a polynomial over a polynomial: $\\frac{3x^2 - x}{2x^2 + 5}$, $\\frac{x + 1}{x^3 - 4}$, $\\frac{x^3}{x^2 + 1}$. Also any question about horizontal asymptotes of a rational function.',
        recognizeNote: `The lesson covers this under ${link('lesson.limits.infinity.rational', 'evaluating limits at infinity of rational functions')} and explains why with ${link('lesson.limits.infinity.dominant-term', 'dominant term analysis')}.`,
        methods: [
          {
            name: 'Compare degrees',
            tag: 'usual choice',
            preferred: true,
            formula: 'n < m:\\ 0, \\qquad n = m:\\ \\frac{a_n}{b_m}, \\qquad n > m:\\ \\pm\\infty',
            body: '$n$ is the degree of the numerator, $m$ of the denominator, $a_n$ and $b_m$ the leading coefficients. For $n > m$ the sign depends on the leading terms and on which infinity.',
          },
          {
            name: 'Divide by the highest power',
            tag: 'shows why',
            formula: '\\frac{3x^2 - x}{2x^2 + 5} = \\frac{3 - \\frac{1}{x}}{2 + \\frac{5}{x^2}}',
            body: `Divide every term by $x^m$. Every $\\frac{c}{x^k}$ goes to $0$ by the ${link('limits.quotient-rule', 'quotient rule')}, and what is left is the answer.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to\\infty}\\frac{3x^2 - x}{2x^2 + 5}$',
          items: [
            {
              title: 'Read off the degrees of top and bottom.',
              body: 'The comparison of $n$ and $m$ already tells you the kind of answer.',
              state: '$n = 2$, $m = 2$: equal degrees, expect a finite nonzero limit',
            },
            {
              title: 'Divide every term by the highest power of x in the denominator.',
              body: 'Here by $x^2$. Do it to every term, top and bottom.',
              state: '$\\frac{3 - \\frac{1}{x}}{2 + \\frac{5}{x^2}}$',
            },
            {
              title: 'Send every c / xᵏ term to 0.',
              body: `${link('limits.sum-difference-rule', 'Limit laws')}: each small term vanishes, the constants stay.`,
              state: '$\\frac{3 - 0}{2 + 0}$',
              atomic: 'limit-laws',
            },
            {
              title: 'Read off the limit; for x → −∞ check the signs of odd powers.',
              body: 'With equal degrees both infinities give the same value. With $n > m$ the sign can differ between $+\\infty$ and $-\\infty$.',
              state: '$\\frac{3}{2}$',
            },
          ],
        },
        examples: [
          {
            title: 'equal degrees',
            badge: 'ratio of leading coefficients',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\frac{3x^2 - x}{2x^2 + 5} = \\lim_{x\\to\\infty}\\frac{3 - \\frac{1}{x}}{2 + \\frac{5}{x^2}}$', why: 'divide by $x^2$' },
              { math: '$= \\frac{3}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'bottom heavier',
            badge: 'limit 0',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\frac{x + 1}{x^3 - 4} = \\lim_{x\\to\\infty}\\frac{\\frac{1}{x^2} + \\frac{1}{x^3}}{1 - \\frac{4}{x^3}}$', why: 'divide by $x^3$' },
              { math: '$= \\frac{0}{1} = 0$', why: '', answer: true },
            ],
          },
          {
            title: 'top heavier, toward minus infinity',
            badge: 'sign matters',
            lines: [
              { math: '$\\lim_{x\\to-\\infty}\\frac{x^3}{x^2 + 1} = \\lim_{x\\to-\\infty}\\frac{x}{1 + \\frac{1}{x^2}}$', why: 'divide by $x^2$' },
              { math: '$= -\\infty$', why: 'the surviving $x$ is large and negative', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Far from the origin, $3x^2 - x$ is indistinguishable from $3x^2$: the $-x$ is a rounding error. Dividing by the highest power makes that visible, because every lower term turns into some $\\frac{c}{x^k}$ and fades to $0$.',
        },
        pitfalls: [
          {
            title: 'Dividing by the wrong power',
            wrong: 'dividing by $x$ when the denominator has $x^2$',
            right: 'divide by the highest power of $x$ in the denominator',
          },
          {
            title: 'Reading ∞/∞ as 1',
            wrong: '$\\frac{3x^2}{2x^2} \\to \\frac{\\infty}{\\infty} = 1$',
            right: '$\\frac{\\infty}{\\infty}$ is indeterminate; the ratio is $\\frac{3}{2}$',
          },
          {
            title: 'Forgetting the sign at −∞',
            wrong: '$\\frac{x^3}{x^2 + 1} \\to +\\infty$ as $x \\to -\\infty$',
            right: '$-\\infty$: an odd power of a negative number is negative',
          },
          {
            title: 'Plugging in infinity',
            wrong: '$\\frac{3\\infty^2 - \\infty}{2\\infty^2 + 5}$',
            right: 'infinity is not a number; divide first, then take the limit',
          },
        ],
        related: ['limits-at-infinity-radicals', 'horizontal-asymptotes', 'which-limit-technique'],
        builtOn: [
          { label: 'Limits at infinity of rational functions (lesson)', url: ruleUrl('lesson.limits.infinity.rational') },
          { label: 'Dominant term analysis', url: ruleUrl('lesson.limits.infinity.dominant-term') },
          { label: 'Horizontal asymptote condition', url: ruleUrl('limits.horizontal-asymptote') },
        ],
      },
    },
    {
      id: 'limits-at-infinity-radicals',
      slug: 'limits-at-infinity-radicals',
      name: 'How to find limits at infinity with square roots',
      description: 'Factor the highest power out of the root; $\\sqrt{x^2} = |x|$, which is $-x$ as $x \\to -\\infty$.',
      uses: ['root rule', 'conjugates'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'Limits at Infinity with Square Roots (x → ±∞) | Learn Math Class',
        description:
          'Limits at infinity with roots: factor the highest power out of the root, replace √x² by |x| (−x as x → −∞), divide and simplify; rationalize ∞ − ∞ forms.',
        keywords: ['limits at infinity with square roots', 'sqrt(x^2) = |x| limit', 'limit at negative infinity radical', 'infinity minus infinity limit', 'end behavior with radicals'],
      },
      page: {
        h1: 'How to Find Limits at Infinity with Square Roots',
        lead:
          'Pull the highest power out of the root: $\\sqrt{x^2 + x} = |x|\\sqrt{1 + \\frac{1}{x}}$. For $x \\to -\\infty$ that $|x|$ is $-x$, which flips the sign, and that flip is where most mistakes happen.',
        recognize:
          '$x \\to \\pm\\infty$ with a root: $\\frac{\\sqrt{4x^2 + 1}}{x - 3}$, $\\frac{x}{\\sqrt{x^2 + 1}}$, $\\sqrt{x^2 + 6x} - x$. Test: a square root whose inside grows without bound.',
        recognizeNote: `The idea is ${link('lesson.limits.infinity.dominant-term', 'dominant term analysis')} applied inside a root; the ${link('limits.root-rule', 'root rule')} lets the limit pass through the root once the form is gone.`,
        methods: [
          {
            name: 'Factor the highest power out of the root',
            tag: 'usual choice',
            preferred: true,
            formula: '\\sqrt{x^2 + x} = \\sqrt{x^2}\\,\\sqrt{1 + \\tfrac{1}{x}} = |x|\\sqrt{1 + \\tfrac{1}{x}}',
            body: 'Then $|x| = x$ for $x \\to +\\infty$ and $|x| = -x$ for $x \\to -\\infty$. Divide top and bottom by $x$ afterwards.',
          },
          {
            name: 'Conjugate for ∞ − ∞',
            tag: 'root minus polynomial',
            formula: '\\sqrt{x^2 + 6x} - x = \\frac{6x}{\\sqrt{x^2 + 6x} + x}',
            body: `A difference of two growing quantities must be [rationalized](!${HUB}/rationalizing-limits) first; then factor out the highest power as above.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to-\\infty}\\frac{\\sqrt{4x^2 + 1}}{x - 3}$',
          items: [
            {
              title: 'Factor the highest power out of the root.',
              body: 'Remember $\\sqrt{x^2} = |x|$, never plain $x$.',
              state: '$\\sqrt{4x^2 + 1} = |x|\\sqrt{4 + \\tfrac{1}{x^2}}$',
            },
            {
              title: 'Replace |x| according to the direction.',
              body: '$x \\to +\\infty$: $|x| = x$. $\\;x \\to -\\infty$: $|x| = -x$.',
              state: '$x \\to -\\infty$, so $|x| = -x$: $\\;\\frac{-x\\sqrt{4 + \\frac{1}{x^2}}}{x - 3}$',
            },
            {
              title: 'Divide top and bottom by x and send c / xᵏ to 0.',
              body: `${link('limits.sum-difference-rule', 'Limit laws')} finish it.`,
              state: '$\\frac{-\\sqrt{4 + \\frac{1}{x^2}}}{1 - \\frac{3}{x}} \\to \\frac{-\\sqrt{4}}{1}$',
              atomic: 'limit-laws',
            },
            {
              title: 'Read off the limit.',
              body: 'The same function has limit $+2$ as $x \\to +\\infty$: two different horizontal asymptotes.',
              state: '$-2$',
            },
          ],
        },
        examples: [
          {
            title: 'toward minus infinity',
            badge: '|x| = −x',
            lines: [
              { math: '$\\lim_{x\\to-\\infty}\\frac{\\sqrt{4x^2 + 1}}{x - 3} = \\lim_{x\\to-\\infty}\\frac{-x\\sqrt{4 + \\frac{1}{x^2}}}{x - 3}$', why: '$\\sqrt{x^2} = -x$ here' },
              { math: '$= \\lim_{x\\to-\\infty}\\frac{-\\sqrt{4 + \\frac{1}{x^2}}}{1 - \\frac{3}{x}} = -2$', why: '', answer: true },
            ],
          },
          {
            title: 'toward plus infinity',
            badge: '|x| = x',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\frac{x}{\\sqrt{x^2 + 1}} = \\lim_{x\\to\\infty}\\frac{x}{x\\sqrt{1 + \\frac{1}{x^2}}}$', why: 'factor $x^2$ out of the root' },
              { math: '$= \\lim_{x\\to\\infty}\\frac{1}{\\sqrt{1 + \\frac{1}{x^2}}} = 1$', why: '', answer: true },
            ],
          },
          {
            title: 'infinity minus infinity',
            badge: 'conjugate first',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\big(\\sqrt{x^2 + 6x} - x\\big) = \\lim_{x\\to\\infty}\\frac{6x}{\\sqrt{x^2 + 6x} + x}$', why: 'multiply by the conjugate' },
              { math: '$= \\lim_{x\\to\\infty}\\frac{6}{\\sqrt{1 + \\frac{6}{x}} + 1} = \\frac{6}{2} = 3$', why: 'divide by $x$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'For large negative $x$, $\\sqrt{4x^2 + 1}$ is about $2|x| = -2x$, a large positive number, while $x - 3$ is large negative. Their ratio sits near $-2$. The two horizontal asymptotes $y = 2$ and $y = -2$ come from the two signs of $|x|$.',
        },
        pitfalls: [
          {
            title: 'Writing √x² = x for negative x',
            wrong: 'limit $+2$ as $x \\to -\\infty$',
            right: '$\\sqrt{x^2} = |x| = -x$ there; the limit is $-2$',
          },
          {
            title: 'Splitting a root over a sum',
            wrong: '$\\sqrt{x^2 + x} = x + \\sqrt{x}$',
            right: 'factor $x^2$ out inside the root instead',
          },
          {
            title: 'Subtracting infinities',
            wrong: '$\\sqrt{x^2 + 6x} - x = \\infty - \\infty = 0$',
            right: 'rationalize; the limit is $3$',
          },
          {
            title: 'Dividing inside the root by x',
            wrong: '$\\frac{\\sqrt{x^2 + 1}}{x} = \\sqrt{x + \\tfrac{1}{x}}$',
            right: 'dividing by $x$ outside means dividing by $x^2$ inside: $\\sqrt{1 + \\tfrac{1}{x^2}}$',
          },
        ],
        related: ['limits-at-infinity-rational', 'rationalizing-limits', 'horizontal-asymptotes'],
        builtOn: [
          { label: 'Root rule (limits)', url: ruleUrl('limits.root-rule') },
          { label: 'Dominant term analysis', url: ruleUrl('lesson.limits.infinity.dominant-term') },
          { label: 'Horizontal asymptote condition', url: ruleUrl('limits.horizontal-asymptote') },
        ],
      },
    },
    {
      id: 'squeeze-theorem',
      slug: 'squeeze-theorem',
      name: 'How to use the squeeze theorem',
      description: 'Trap an oscillating function between two bounds that share a limit.',
      uses: ['squeeze theorem', 'bounded functions'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Squeeze Theorem (Step by Step) | Learn Math Class',
        description:
          'Squeeze theorem: bound the oscillating factor, multiply by the factor that goes to 0 (mind the sign), take the limits of both bounds. Examples and mistakes.',
        keywords: ['squeeze theorem', 'how to use the squeeze theorem', 'sandwich theorem examples', 'limit of x^2 sin(1/x)', 'bounded times zero limit'],
      },
      page: {
        h1: 'How to Use the Squeeze Theorem',
        lead:
          'When a function is trapped between two others that share the same limit, it has that limit too. The usual trap is a bounded factor such as $\\sin\\frac{1}{x}$ or $\\cos x$ multiplied by something that goes to $0$.',
        recognize:
          'A bounded, oscillating piece times something small: $x^2\\sin\\frac{1}{x}$ as $x \\to 0$, $\\frac{\\cos x}{x}$ as $x \\to \\infty$, $\\frac{\\sin x}{x}$ as $x \\to \\infty$ (not the famous one at $0$). The limit laws fail because $\\lim\\sin\\frac{1}{x}$ does not exist. Test: a factor stuck between $-1$ and $1$, and a factor that goes to $0$.',
        recognizeNote: `The theorem is stated as the ${link('limits.squeeze-theorem', 'squeeze theorem')} and discussed under ${link('lesson.limits.rules.squeeze', 'the squeeze theorem')} in the limit rules lesson.`,
        methods: [
          {
            name: 'Bound the oscillating factor',
            tag: 'usual choice',
            preferred: true,
            formula: '-1 \\le \\sin\\theta \\le 1 \\;\\Rightarrow\\; -|g(x)| \\le g(x)\\sin\\theta \\le |g(x)|',
            body: 'Multiply the bound by the other factor. Using $|g(x)|$ keeps the inequalities true whatever the sign of $g$.',
          },
          {
            name: 'Geometric trig bounds',
            tag: 'the classic proof',
            formula: '\\cos x \\le \\frac{\\sin x}{x} \\le 1 \\quad \\text{near } 0',
            body: `This is how ${link('limits.sin-x-over-x', 'the limit of sin x over x')} is proved: both bounds go to $1$.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to 0} x^2\\sin\\frac{1}{x}$',
          items: [
            {
              title: 'Bound the oscillating factor between two constants.',
              body: 'Sine and cosine of anything lie in $[-1, 1]$.',
              state: '$-1 \\le \\sin\\frac{1}{x} \\le 1$',
            },
            {
              title: 'Multiply through by the other factor.',
              body: 'If that factor can be negative, use its absolute value, or the inequalities flip.',
              state: '$-x^2 \\le x^2\\sin\\frac{1}{x} \\le x^2$',
            },
            {
              title: 'Take the limits of the two bounds.',
              body: 'They must be equal, or the squeeze says nothing.',
              state: '$\\lim_{x\\to 0}(-x^2) = 0 = \\lim_{x\\to 0} x^2$',
              atomic: 'direct-substitution',
            },
            {
              title: 'Conclude.',
              body: `By the ${link('limits.squeeze-theorem', 'squeeze theorem')} the function in the middle has the same limit.`,
              state: '$\\lim_{x\\to 0} x^2\\sin\\frac{1}{x} = 0$',
            },
          ],
        },
        examples: [
          {
            title: 'the classic',
            badge: 'x → 0',
            lines: [
              { math: '$-x^2 \\le x^2\\sin\\frac{1}{x} \\le x^2$', why: '$|\\sin| \\le 1$, times $x^2 \\ge 0$' },
              { math: '$\\lim_{x\\to 0} x^2\\sin\\frac{1}{x} = 0$', why: 'both bounds $\\to 0$', answer: true },
            ],
          },
          {
            title: 'bounded over growing',
            badge: 'x → ∞',
            lines: [
              { math: '$-\\frac{1}{x} \\le \\frac{\\cos x}{x} \\le \\frac{1}{x}$ for $x > 0$', why: '$|\\cos x| \\le 1$' },
              { math: '$\\lim_{x\\to\\infty}\\frac{\\cos x}{x} = 0$', why: 'both bounds $\\to 0$', answer: true },
            ],
          },
          {
            title: 'a factor that changes sign',
            badge: 'use |x|',
            lines: [
              { math: '$-|x| \\le x\\cos\\frac{1}{x^2} \\le |x|$', why: '$x$ may be negative, so bound with $|x|$' },
              { math: '$\\lim_{x\\to 0} x\\cos\\frac{1}{x^2} = 0$', why: '$\\pm|x| \\to 0$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw $y = x^2$ and $y = -x^2$: a narrow funnel pinched shut at the origin. The graph of $x^2\\sin\\frac{1}{x}$ oscillates faster and faster as $x \\to 0$ but can never leave the funnel, so at $0$ it has nowhere to go but $0$.',
        },
        pitfalls: [
          {
            title: 'Using the product law',
            wrong: '$\\lim x^2 \\cdot \\lim\\sin\\frac{1}{x}$',
            right: 'the second limit does not exist, so the law does not apply; squeeze instead',
          },
          {
            title: 'Bounds with the wrong sign',
            wrong: '$-x \\le x\\cos\\frac{1}{x^2} \\le x$ for all $x$',
            right: 'false for $x < 0$; use $-|x| \\le \\ldots \\le |x|$',
          },
          {
            title: 'Bounds with different limits',
            wrong: '$-1 \\le x^2\\sin\\frac{1}{x} \\le 1$, "so the limit is between $-1$ and $1$"',
            right: 'the two bounds must share one limit; multiply the bound by $x^2$',
          },
          {
            title: 'Mixing up the two sin x / x limits',
            wrong: '$\\lim_{x\\to\\infty}\\frac{\\sin x}{x} = 1$',
            right: 'that value is for $x \\to 0$; as $x \\to \\infty$ the squeeze gives $0$',
          },
        ],
        related: ['limits-at-infinity-rational', 'factoring-limits', 'which-limit-technique'],
        builtOn: [
          { label: 'Squeeze theorem', url: ruleUrl('limits.squeeze-theorem') },
          { label: 'The squeeze theorem (lesson)', url: ruleUrl('lesson.limits.rules.squeeze') },
          { label: 'Sine limit at zero', url: ruleUrl('limits.sin-x-over-x') },
        ],
      },
    },
    {
      id: 'lhopitals-rule',
      slug: 'lhopitals-rule',
      name: "How to use L'Hôpital's rule",
      description: 'For $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$: differentiate top and bottom separately and take the limit again.',
      uses: ["L'Hôpital's rule", 'derivatives'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Use L'Hôpital's Rule (0/0 and ∞/∞) | Learn Math Class",
        description:
          "Apply L'Hôpital's rule: confirm the 0/0 or ∞/∞ form, differentiate top and bottom separately, take the limit again, repeat only while indeterminate. Examples.",
        keywords: ["l'hopital's rule", "how to use l'hopital's rule", 'lhopital rule examples', '0/0 limit derivative', 'indeterminate form 0 times infinity'],
      },
      page: {
        h1: "How to Use L'Hôpital's Rule",
        lead:
          'For a $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ limit, differentiate the top and the bottom separately (not as a quotient) and take the limit again. Repeat if the new limit is again indeterminate; stop as soon as it is not.',
        recognize:
          'Substitution gives exactly $\\frac{0}{0}$ or $\\pm\\frac{\\infty}{\\infty}$: $\\frac{e^x - 1}{x}$ at $0$, $\\frac{\\ln x}{x}$ at $\\infty$, $\\frac{x^2}{e^x}$ at $\\infty$. Other forms ($0\\cdot\\infty$, $\\infty - \\infty$, $1^\\infty$) must be rewritten as a quotient first. Test: confirm the form before differentiating; on a non-indeterminate quotient the rule gives wrong answers.',
        recognizeNote: `The rule is stated as ${link('derivatives.lhopital-rule', "L'Hôpital's rule")} in the derivative rules lesson; the forms it handles are listed under ${link('lesson.limits.evaluating.indeterminate-forms', 'indeterminate forms')}.`,
        methods: [
          {
            name: 'Differentiate top and bottom',
            tag: 'usual choice',
            preferred: true,
            formula: "\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f'(x)}{g'(x)} \\qquad \\Big(\\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}\\Big)",
            body: `${link('derivatives.lhopital-rule', "L'Hôpital's rule")}: separate derivatives, never the quotient rule. The derivatives come from the [derivative techniques](!/calculus/derivatives/techniques).`,
          },
          {
            name: 'Rewrite 0 · ∞ as a quotient',
            tag: 'for products',
            formula: 'f\\cdot g = \\frac{f}{1/g} \\quad \\text{or} \\quad \\frac{g}{1/f}',
            body: 'Move one factor to the denominator as a reciprocal; choose the version whose derivatives are simpler.',
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to\\infty}\\frac{\\ln x}{x}$',
          items: [
            {
              title: 'Check the form by substitution.',
              body: 'It must be exactly $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. Anything else: either evaluate directly or rewrite first.',
              state: '$\\frac{\\ln x}{x} \\to \\frac{\\infty}{\\infty}$ ✓',
              atomic: 'direct-substitution',
            },
            {
              title: 'Differentiate the numerator and the denominator separately.',
              body: 'Two independent derivatives. Do not touch the fraction as a whole.',
              state: "$\\frac{(\\ln x)'}{(x)'} = \\frac{1/x}{1}$",
            },
            {
              title: 'Take the new limit.',
              body: 'If it is again indeterminate, apply the rule once more. If not, stop; differentiating again would be wrong.',
              state: '$\\lim_{x\\to\\infty}\\frac{1}{x} = 0$',
            },
            {
              title: 'State the result.',
              body: `Here it also confirms the ${link('lesson.limits.infinity.growth-rates', 'growth hierarchy')}: $\\ln x$ grows slower than $x$.`,
              state: '$\\lim_{x\\to\\infty}\\frac{\\ln x}{x} = 0$',
            },
          ],
        },
        examples: [
          {
            title: 'logarithm over x',
            badge: '∞/∞, once',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\frac{\\ln x}{x} = \\lim_{x\\to\\infty}\\frac{1/x}{1}$', why: 'differentiate top and bottom' },
              { math: '$= 0$', why: '', answer: true },
            ],
          },
          {
            title: 'polynomial over exponential',
            badge: '∞/∞, twice',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\frac{x^2}{e^x} = \\lim_{x\\to\\infty}\\frac{2x}{e^x}$', why: 'still $\\frac{\\infty}{\\infty}$' },
              { math: '$= \\lim_{x\\to\\infty}\\frac{2}{e^x} = 0$', why: 'second application; now determinate', answer: true },
            ],
          },
          {
            title: 'a 0 · ∞ product',
            badge: 'rewrite first',
            lines: [
              { math: '$\\lim_{x\\to 0^+} x\\ln x = \\lim_{x\\to 0^+}\\frac{\\ln x}{1/x}$', why: 'now $\\frac{-\\infty}{\\infty}$' },
              { math: '$= \\lim_{x\\to 0^+}\\frac{1/x}{-1/x^2} = \\lim_{x\\to 0^+}(-x)$', why: 'differentiate, simplify' },
              { math: '$= 0$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            "Near the point, both $f$ and $g$ are nearly their tangent lines, so $\\frac{f(x)}{g(x)} \\approx \\frac{f'(a)(x - a)}{g'(a)(x - a)} = \\frac{f'(a)}{g'(a)}$. L'Hôpital compares the slopes with which the two functions reach $0$ (or run off to infinity).",
        },
        pitfalls: [
          {
            title: 'Using the quotient rule',
            wrong: 'differentiating $\\frac{f}{g}$ as one function',
            right: "differentiate top and bottom separately: $\\frac{f'}{g'}$",
          },
          {
            title: 'Applying it to a determinate form',
            wrong: '$\\lim_{x\\to 0}\\frac{x + 1}{x + 2} = \\lim\\frac{1}{1} = 1$',
            right: 'substitution gives $\\frac{1}{2}$; the rule did not apply',
          },
          {
            title: 'Not stopping',
            wrong: 'differentiating $\\frac{1/x}{1}$ once more',
            right: 'once the form is determinate, evaluate; extra steps change the answer',
          },
          {
            title: 'Treating 0 · ∞ as 0',
            wrong: '$x\\ln x \\to 0\\cdot(-\\infty) = 0$ "obviously"',
            right: 'rewrite as a quotient; $x\\cdot\\frac{1}{x} \\to 1$ shows the form is indeterminate',
          },
        ],
        related: ['indeterminate-powers', 'factoring-limits', 'which-limit-technique'],
        builtOn: [
          { label: "L'Hôpital's rule", url: ruleUrl('derivatives.lhopital-rule') },
          { label: 'Indeterminate forms', url: ruleUrl('lesson.limits.evaluating.indeterminate-forms') },
          { label: 'Growth rates', url: ruleUrl('lesson.limits.infinity.growth-rates') },
        ],
      },
    },
    {
      id: 'indeterminate-powers',
      slug: 'indeterminate-powers',
      name: 'How to evaluate indeterminate powers',
      description: '$1^\\infty$, $0^0$ and $\\infty^0$: take the logarithm, find the limit of $g\\ln f$, exponentiate.',
      uses: ['logarithms', "L'Hôpital's rule", 'definition of e'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate Indeterminate Powers: 1^∞, 0^0 and ∞^0 | Learn Math Class',
        description:
          "Evaluate limits of f^g that give 1^∞, 0^0 or ∞^0: take the logarithm, find the limit of g ln f with L'Hôpital, exponentiate the result. Examples and mistakes.",
        keywords: ['indeterminate powers', '1 to the infinity limit', '0^0 limit', 'limit of x^(1/x)', 'limit of (1+1/x)^x'],
      },
      page: {
        h1: 'How to Evaluate Indeterminate Powers',
        lead:
          'A limit of the form $f(x)^{g(x)}$ that lands on $1^\\infty$, $0^0$ or $\\infty^0$ is handled through the logarithm: find $\\lim g(x)\\ln f(x)$, usually with L\'Hôpital\'s rule, then exponentiate.',
        recognize:
          'A variable base and a variable exponent: $\\left(1 + \\frac{1}{x}\\right)^x$, $x^x$ as $x \\to 0^+$, $x^{1/x}$ as $x \\to \\infty$, $(\\cos x)^{1/x^2}$. Test: substitution gives $1^\\infty$, $0^0$ or $\\infty^0$. Note that $0^\\infty = 0$ and $\\infty^\\infty = \\infty$ are **not** indeterminate.',
        recognizeNote: `These are the last three ${link('lesson.limits.evaluating.indeterminate-forms', 'indeterminate forms')}; the most famous one is the ${link('limits.e-definition', 'definition of e as a limit')}.`,
        methods: [
          {
            name: 'Take logarithms',
            tag: 'usual choice',
            preferred: true,
            formula: 'L = \\lim f^g \\;\\Rightarrow\\; \\ln L = \\lim g\\ln f \\;\\Rightarrow\\; L = e^{\\lim g\\ln f}',
            body: `The product $g\\ln f$ is a $0\\cdot\\infty$ form; rewrite it as a quotient and use [L'Hôpital's rule](!${HUB}/lhopitals-rule).`,
          },
          {
            name: 'Recognize the e-limit',
            tag: 'the (1 + a/x)^(bx) family',
            formula: '\\lim_{x\\to\\infty}\\left(1 + \\frac{a}{x}\\right)^{bx} = e^{ab}',
            body: `A direct consequence of the ${link('limits.e-definition', 'definition of e')}; no logarithms needed when the expression has exactly this shape.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to\\infty} x^{1/x}$',
          items: [
            {
              title: 'Confirm the form.',
              body: 'Substitute: base and exponent separately.',
              state: 'base $\\to \\infty$, exponent $\\to 0$: $\\;\\infty^0$',
              atomic: 'direct-substitution',
            },
            {
              title: 'Set y = f^g and take ln.',
              body: 'The log rule for powers brings the exponent down: $\\ln y = g\\ln f$.',
              state: '$\\ln y = \\frac{1}{x}\\ln x = \\frac{\\ln x}{x}$',
            },
            {
              title: 'Find the limit of ln y.',
              body: `Usually $\\frac{\\infty}{\\infty}$ or $\\frac{0}{0}$ after rewriting: [L'Hôpital's rule](!${HUB}/lhopitals-rule).`,
              state: '$\\lim_{x\\to\\infty}\\frac{\\ln x}{x} = \\lim_{x\\to\\infty}\\frac{1/x}{1} = 0$',
            },
            {
              title: 'Exponentiate.',
              body: 'The limit you found is $\\ln L$, not $L$.',
              state: '$L = e^0 = 1$',
            },
          ],
        },
        examples: [
          {
            title: 'x to the 1/x',
            badge: '∞⁰',
            lines: [
              { math: '$\\ln y = \\frac{\\ln x}{x} \\to 0$', why: "L'Hôpital" },
              { math: '$\\lim_{x\\to\\infty} x^{1/x} = e^0 = 1$', why: '', answer: true },
            ],
          },
          {
            title: 'x to the x',
            badge: '0⁰',
            lines: [
              { math: '$\\ln y = x\\ln x = \\frac{\\ln x}{1/x} \\to 0$ as $x \\to 0^+$', why: "rewrite $0\\cdot\\infty$, L'Hôpital" },
              { math: '$\\lim_{x\\to 0^+} x^x = e^0 = 1$', why: '', answer: true },
            ],
          },
          {
            title: 'one to the infinity',
            badge: '1^∞',
            lines: [
              { math: '$\\ln y = \\frac{\\ln(1 + 2x)}{x} \\to \\frac{2/(1 + 2x)}{1} \\to 2$ as $x \\to 0$', why: "L'Hôpital on $\\frac{0}{0}$" },
              { math: '$\\lim_{x\\to 0}(1 + 2x)^{1/x} = e^2$', why: 'matches $(1 + \\frac{a}{n})^{bn} \\to e^{ab}$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'In $\\left(1 + \\frac{1}{x}\\right)^x$ the base creeps toward $1$ while the exponent races to infinity, and the two effects fight. The logarithm turns the fight into the product $x\\ln\\left(1 + \\frac{1}{x}\\right)$, whose limit $1$ measures the balance. Other pairings of "how close to 1" and "how large" give every value from $0$ to $\\infty$.',
        },
        pitfalls: [
          {
            title: 'Declaring 1^∞ = 1',
            wrong: '$\\left(1 + \\frac{1}{x}\\right)^x \\to 1^\\infty = 1$',
            right: 'the form is indeterminate; the limit is $e$',
          },
          {
            title: 'Forgetting to exponentiate',
            wrong: '$\\lim x^{1/x} = 0$',
            right: '$0$ is the limit of $\\ln y$; the answer is $e^0 = 1$',
          },
          {
            title: 'Taking the limit in one part only',
            wrong: '$\\left(1 + \\frac{1}{x}\\right)^x \\to (1 + 0)^x = 1$',
            right: 'base and exponent move together; use logarithms',
          },
          {
            title: "L'Hôpital on the power itself",
            wrong: 'differentiating $x^{1/x}$ as a quotient',
            right: "the rule needs a quotient such as $\\frac{\\ln x}{x}$; take logs first",
          },
        ],
        related: ['lhopitals-rule', 'limits-at-infinity-rational', 'which-limit-technique'],
        builtOn: [
          { label: 'Definition of e as a limit', url: ruleUrl('limits.e-definition') },
          { label: "L'Hôpital's rule", url: ruleUrl('derivatives.lhopital-rule') },
          { label: 'Indeterminate forms', url: ruleUrl('lesson.limits.evaluating.indeterminate-forms') },
        ],
      },
    },
    {
      id: 'vertical-asymptotes',
      slug: 'vertical-asymptotes',
      name: 'How to find vertical asymptotes',
      description: 'Cancel common factors, find the zeros of the denominator, then the sign of each one-sided limit.',
      uses: ['one-sided limits', 'sign analysis'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Vertical Asymptotes (Step by Step) | Learn Math Class',
        description:
          'Find vertical asymptotes: factor and cancel, set the remaining denominator to zero, check the numerator, then find the sign of each one-sided limit. Examples.',
        keywords: ['how to find vertical asymptotes', 'vertical asymptote', 'infinite limits', 'hole vs vertical asymptote', 'vertical asymptotes of rational functions'],
      },
      page: {
        h1: 'How to Find Vertical Asymptotes',
        lead:
          'A vertical asymptote $x = a$ appears where a one-sided limit is $\\pm\\infty$, typically where a denominator is $0$ while the numerator is not. Cancel common factors first, then check each side.',
        recognize:
          '"Find the vertical asymptotes", "describe the behaviour near $x = a$", a rational function, $\\tan x$, $\\ln x$ near $0$. Test: a point where the function is undefined and the problem does not simplify away.',
        recognizeNote: `The ${link('limits.vertical-asymptote', 'vertical asymptote condition')} is the definition; the lesson covers ${link('lesson.limits.infinity.vertical-asymptotes', 'vertical asymptotes')} and ${link('lesson.limits.infinity.sign-analysis', 'sign analysis for infinite limits')}.`,
        methods: [
          {
            name: 'Zeros of the denominator',
            tag: 'usual choice',
            preferred: true,
            formula: 'g(a) = 0,\\ f(a) \\neq 0 \\;\\Rightarrow\\; x = a \\text{ is a vertical asymptote of } \\tfrac{f}{g}',
            body: 'After cancelling common factors. A factor that cancels gives a hole, not an asymptote.',
          },
          {
            name: 'Sign analysis for each side',
            tag: 'which infinity',
            formula: '\\lim_{x\\to a^\\pm}\\frac{f(x)}{g(x)} = \\pm\\infty \\text{ by the signs of } f \\text{ and } g \\text{ near } a',
            body: `Decide the sign of every factor just left and just right of $a$ (${link('lesson.limits.infinity.sign-analysis', 'sign analysis')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\frac{x + 1}{x^2 - x - 2}$',
          items: [
            {
              title: 'Factor and cancel common factors.',
              body: `A cancelled factor marks a [hole](!${HUB}/removable-discontinuities), not an asymptote.`,
              state: '$\\frac{x + 1}{(x - 2)(x + 1)} = \\frac{1}{x - 2}$ for $x \\neq -1$',
            },
            {
              title: 'Set the remaining denominator to zero.',
              body: 'Each solution is a candidate asymptote.',
              state: '$x = 2$',
            },
            {
              title: 'Check that the numerator is not zero there.',
              body: 'Nonzero over zero: the one-sided limits are infinite.',
              state: 'numerator $1 \\neq 0$ ✓',
            },
            {
              title: 'Find the sign of each one-sided limit.',
              body: `Just left of $2$ the denominator is a small negative number; just right, a small positive one. See [one-sided limits](!${HUB}/one-sided-limits).`,
              state: '$\\lim_{x\\to 2^-}\\frac{1}{x - 2} = -\\infty, \\qquad \\lim_{x\\to 2^+}\\frac{1}{x - 2} = +\\infty$',
            },
            {
              title: 'Conclude.',
              body: 'State the asymptotes and the holes separately.',
              state: 'vertical asymptote $x = 2$; hole at $x = -1$',
            },
          ],
        },
        examples: [
          {
            title: 'one asymptote and one hole',
            badge: 'cancel first',
            lines: [
              { math: '$\\frac{x + 1}{x^2 - x - 2} = \\frac{1}{x - 2}$, $x \\neq -1$', why: 'the factor $(x + 1)$ cancels' },
              { math: 'asymptote $x = 2$ ($-\\infty$ from the left, $+\\infty$ from the right); hole at $x = -1$', why: '', answer: true },
            ],
          },
          {
            title: 'two asymptotes',
            badge: 'sign on each side',
            lines: [
              { math: '$f(x) = \\frac{x^2 + 1}{x^2 - 4} = \\frac{x^2 + 1}{(x - 2)(x + 2)}$', why: 'denominator zero at $\\pm 2$, numerator never zero' },
              { math: 'near $2$: $\\frac{5}{(0^\\mp)(4)}$, so $-\\infty$ from the left and $+\\infty$ from the right', why: 'sign analysis' },
              { math: 'vertical asymptotes $x = 2$ and $x = -2$', why: '', answer: true },
            ],
          },
          {
            title: 'tangent',
            badge: 'not a rational function',
            lines: [
              { math: '$\\tan x = \\frac{\\sin x}{\\cos x}$, $\\cos\\frac{\\pi}{2} = 0$, $\\sin\\frac{\\pi}{2} = 1$', why: 'nonzero over zero' },
              { math: '$\\lim_{x\\to\\pi/2^-}\\tan x = +\\infty, \\qquad \\lim_{x\\to\\pi/2^+}\\tan x = -\\infty$', why: '$\\cos x$ changes from positive to negative', answer: true },
            ],
          },
          {
            title: 'logarithm at the edge of its domain',
            badge: 'one side only',
            lines: [
              { math: '$\\lim_{x\\to 0^+}\\ln x = -\\infty$', why: 'the left side is outside the domain' },
              { math: 'vertical asymptote $x = 0$', why: 'one infinite one-sided limit is enough', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Factor first. In $\\frac{x + 1}{(x - 2)(x + 1)}$ both top and bottom vanish at $x = -1$, which leaves a hole the graph passes through as if nothing happened; only the bottom vanishes at $x = 2$, and there the graph shoots off to infinity.',
        },
        pitfalls: [
          {
            title: 'Asymptote at a hole',
            wrong: '$x = -1$ is a vertical asymptote',
            right: 'the factor cancels; $x = -1$ is a removable discontinuity',
          },
          {
            title: 'Skipping the sign on each side',
            wrong: '"the limit at $2$ is $\\infty$"',
            right: '$-\\infty$ from the left, $+\\infty$ from the right; they differ',
          },
          {
            title: 'Writing a vertical asymptote as y = …',
            wrong: 'vertical asymptote $y = 2$',
            right: 'vertical asymptotes are vertical lines: $x = 2$',
          },
          {
            title: 'Stopping at "undefined"',
            wrong: '"$f(2)$ is undefined, so nothing can be said"',
            right: 'undefined at a point is exactly where to look for an asymptote or a hole',
          },
        ],
        related: ['horizontal-asymptotes', 'removable-discontinuities', 'one-sided-limits'],
        builtOn: [
          { label: 'Vertical asymptote condition', url: ruleUrl('limits.vertical-asymptote') },
          { label: 'Vertical asymptotes (lesson)', url: ruleUrl('lesson.limits.infinity.vertical-asymptotes') },
          { label: 'Sign analysis for infinite limits', url: ruleUrl('lesson.limits.infinity.sign-analysis') },
        ],
      },
    },
    {
      id: 'horizontal-asymptotes',
      slug: 'horizontal-asymptotes',
      name: 'How to find horizontal asymptotes',
      description: 'Take the limits as $x \\to \\infty$ and $x \\to -\\infty$ separately; each finite value gives $y = L$.',
      uses: ['limits at infinity', 'end behaviour'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Horizontal Asymptotes (Step by Step) | Learn Math Class',
        description:
          'Find horizontal asymptotes: take the limit as x → ∞ and as x → −∞ separately; each finite value L gives y = L. Rational, exponential and arctan examples.',
        keywords: ['how to find horizontal asymptotes', 'horizontal asymptote', 'end behavior', 'two horizontal asymptotes', 'horizontal asymptote rules'],
      },
      page: {
        h1: 'How to Find Horizontal Asymptotes',
        lead:
          'A horizontal asymptote is a limit at infinity: $y = L$ if $f(x) \\to L$ as $x \\to \\infty$ or as $x \\to -\\infty$. Compute both limits; a function can have two different horizontal asymptotes, one, or none.',
        recognize:
          '"Find the horizontal asymptotes", "end behaviour", a rational function, a root, $e^x$, $\\arctan x$. Test: what does $f$ do as $x \\to +\\infty$, and separately as $x \\to -\\infty$?',
        recognizeNote: `The ${link('limits.horizontal-asymptote', 'horizontal asymptote condition')} is the definition; the lesson section is ${link('lesson.limits.infinity.horizontal-asymptotes', 'horizontal asymptotes')}.`,
        methods: [
          {
            name: 'Rational functions: compare degrees',
            tag: 'shortcut',
            preferred: true,
            formula: 'n < m:\\ y = 0, \\qquad n = m:\\ y = \\frac{a_n}{b_m}, \\qquad n > m:\\ \\text{none}',
            body: `The same rule as for [limits at infinity of rational functions](!${HUB}/limits-at-infinity-rational); one asymptote serves both directions.`,
          },
          {
            name: 'Everything else: compute both limits',
            tag: 'roots, exponentials, arctan',
            formula: 'y = L \\iff \\lim_{x\\to\\infty} f(x) = L \\;\\text{ or }\\; \\lim_{x\\to-\\infty} f(x) = L',
            body: `Roots and exponentials can behave differently at the two ends (${link('limits.exponential-end-behavior', 'exponential end behaviour')}); check each.`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\frac{e^x}{1 + e^x}$',
          items: [
            {
              title: 'Take the limit as x → +∞.',
              body: `Rational: compare degrees. Roots: [factor out the highest power](!${HUB}/limits-at-infinity-radicals). Exponentials: divide by the dominant exponential.`,
              state: '$\\frac{e^x}{1 + e^x} = \\frac{1}{e^{-x} + 1} \\to \\frac{1}{0 + 1} = 1$',
              atomic: 'limit-laws',
            },
            {
              title: 'Take the limit as x → −∞ separately.',
              body: 'Do not assume it matches.',
              state: '$e^x \\to 0$, so $\\frac{e^x}{1 + e^x} \\to \\frac{0}{1} = 0$',
            },
            {
              title: 'Each finite limit gives an asymptote y = L.',
              body: 'An infinite limit gives none in that direction.',
              state: '$y = 1$ (right) and $y = 0$ (left)',
            },
            {
              title: 'Optional: check whether the graph crosses the asymptote.',
              body: 'It may, at finite $x$; the asymptote only describes the far ends. Solve $f(x) = L$ if asked.',
              state: '$\\frac{e^x}{1 + e^x} = 1$ has no solution; $= 0$ has none either',
            },
          ],
        },
        examples: [
          {
            title: 'two different asymptotes',
            badge: 'logistic curve',
            lines: [
              { math: '$f(x) = \\frac{e^x}{1 + e^x}$', why: 'right limit $1$, left limit $0$' },
              { math: 'horizontal asymptotes $y = 1$ and $y = 0$', why: '', answer: true },
            ],
          },
          {
            title: 'rational, equal degrees',
            badge: 'one asymptote both ways',
            lines: [
              { math: '$f(x) = \\frac{3x^2 - x}{2x^2 + 5}$', why: '$n = m = 2$' },
              { math: 'horizontal asymptote $y = \\frac{3}{2}$', why: 'ratio of leading coefficients', answer: true },
            ],
          },
          {
            title: 'none',
            badge: 'top degree larger',
            lines: [
              { math: '$f(x) = \\frac{x^3}{x^2 + 1} \\to \\pm\\infty$', why: '$n > m$' },
              { math: 'no horizontal asymptote (the graph follows the oblique line $y = x$)', why: '', answer: true },
            ],
          },
          {
            title: 'arctangent',
            badge: 'two asymptotes',
            lines: [
              { math: '$\\lim_{x\\to\\infty}\\arctan x = \\frac{\\pi}{2}, \\qquad \\lim_{x\\to-\\infty}\\arctan x = -\\frac{\\pi}{2}$', why: '' },
              { math: 'horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The logistic curve $\\frac{e^x}{1 + e^x}$ flattens toward $0$ on the left and toward $1$ on the right: two horizontal asymptotes, because the two ends of the $x$-axis are different places. Rational functions behave the same at both ends; roots and exponentials need not.',
        },
        pitfalls: [
          {
            title: 'Assuming one limit covers both ends',
            wrong: '$\\arctan x$ has the asymptote $y = \\frac{\\pi}{2}$ only',
            right: 'also $y = -\\frac{\\pi}{2}$ as $x \\to -\\infty$',
          },
          {
            title: '"The graph never crosses an asymptote"',
            wrong: 'ruling out solutions of $f(x) = L$',
            right: '$\\frac{\\sin x}{x}$ crosses $y = 0$ infinitely often; the asymptote describes only the far ends',
          },
          {
            title: 'Mixing up x = and y =',
            wrong: 'horizontal asymptote $x = \\frac{3}{2}$',
            right: 'horizontal asymptotes are horizontal lines: $y = \\frac{3}{2}$',
          },
          {
            title: 'Misreading the degree rule',
            wrong: '$n > m$ gives $y = \\frac{a_n}{b_m}$',
            right: '$n > m$ gives no horizontal asymptote',
          },
        ],
        related: ['limits-at-infinity-rational', 'limits-at-infinity-radicals', 'vertical-asymptotes'],
        builtOn: [
          { label: 'Horizontal asymptote condition', url: ruleUrl('limits.horizontal-asymptote') },
          { label: 'Horizontal asymptotes (lesson)', url: ruleUrl('lesson.limits.infinity.horizontal-asymptotes') },
          { label: 'Exponential end behaviour', url: ruleUrl('limits.exponential-end-behavior') },
        ],
      },
    },
    {
      id: 'continuity-check',
      slug: 'continuity-check',
      name: 'How to check whether a function is continuous at a point',
      description: 'Three conditions: $f(a)$ exists, the limit exists, they are equal; then classify any failure.',
      uses: ['continuity at a point', 'one-sided limits'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check Whether a Function Is Continuous at a Point | Learn Math Class',
        description:
          'Test continuity at a point: f(a) exists, the limit exists, they are equal; classify a failure as removable, jump or infinite. Examples with a parameter.',
        keywords: ['how to check continuity at a point', 'continuity three conditions', 'find k so that f is continuous', 'classify discontinuities', 'continuous function test'],
      },
      page: {
        h1: 'How to Check Whether a Function Is Continuous at a Point',
        lead:
          'Three things must hold at $x = a$: $f(a)$ exists, $\\lim_{x\\to a} f(x)$ exists, and the two are equal. Check them in that order; the first one that fails names the kind of discontinuity.',
        recognize:
          '"Is $f$ continuous at $a$?", "find $k$ so that $f$ is continuous", "classify the discontinuity", a piecewise function at its break, a rational function at a zero of its denominator. Test: a specific point and the word continuous or discontinuous.',
        recognizeNote: `The three conditions are the ${link('limits.continuity-at-a-point', 'definition of continuity at a point')}; the kinds of failure are listed under ${link('lesson.limits.continuity.types', 'types of discontinuities')}.`,
        methods: [
          {
            name: 'Three-part check',
            tag: 'usual choice',
            preferred: true,
            formula: 'f(a) \\text{ defined}, \\qquad \\lim_{x\\to a} f(x) \\text{ exists}, \\qquad \\lim_{x\\to a} f(x) = f(a)',
            body: `${link('limits.continuity-at-a-point', 'Continuity at a point')}. The middle condition usually means two one-sided limits.`,
          },
          {
            name: 'Solve for a parameter',
            tag: 'make it continuous',
            formula: '\\lim_{x\\to a^-} f(x) = \\lim_{x\\to a^+} f(x) = f(a) \\;\\Rightarrow\\; \\text{an equation in } k',
            body: 'Set the two one-sided limits equal to each other and to $f(a)$; solve for the unknown constant.',
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^2 + 1$ for $x < 1$, $\\;3$ for $x = 1$, $\\;2x$ for $x > 1$, at $a = 1$',
          items: [
            {
              title: 'Is f(a) defined?',
              body: 'Read the value off the formula or the piece whose condition includes $a$.',
              state: '$f(1) = 3$ ✓',
            },
            {
              title: 'Does the limit exist?',
              body: `Left and right limits, as for a [piecewise function](!${HUB}/piecewise-limits).`,
              state: 'left $1 + 1 = 2$, right $2\\cdot 1 = 2$: limit $= 2$ ✓',
              atomic: 'direct-substitution',
            },
            {
              title: 'Are they equal?',
              body: 'Compare the limit with the value.',
              state: '$2 \\neq 3$: **not** continuous at $1$',
            },
            {
              title: 'Classify the failure.',
              body: `Limit exists but $f(a)$ is missing or different: removable. One-sided limits differ: jump. A one-sided limit is infinite: infinite discontinuity (${link('lesson.limits.continuity.types', 'types')}).`,
              state: 'removable discontinuity at $x = 1$',
            },
          ],
        },
        examples: [
          {
            title: 'value does not match the limit',
            badge: 'removable',
            lines: [
              { math: '$f(1) = 3$, $\\lim_{x\\to 1} f(x) = 2$', why: 'conditions 1 and 2 hold, 3 fails' },
              { math: 'removable discontinuity; redefining $f(1) = 2$ would fix it', why: '', answer: true },
            ],
          },
          {
            title: 'find the parameter',
            badge: 'solve for k',
            lines: [
              { math: '$f(x) = kx + 1$ for $x \\le 2$, $\\;x^2$ for $x > 2$', why: 'continuous at $2$?' },
              { math: '$2k + 1 = 4$', why: 'left limit $=$ right limit $=$ $f(2)$' },
              { math: '$k = \\tfrac{3}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'a zero in the denominator',
            badge: 'infinite',
            lines: [
              { math: '$f(x) = \\frac{1}{x - 1}$ at $a = 1$', why: '$f(1)$ undefined' },
              { math: 'one-sided limits $\\mp\\infty$', why: 'condition 2 fails badly' },
              { math: 'infinite discontinuity', why: '', answer: true },
            ],
          },
          {
            title: 'continuous after all',
            badge: 'all three hold',
            lines: [
              { math: '$f(x) = \\frac{\\sin x}{x}$ for $x \\neq 0$, $\\;f(0) = 1$', why: '' },
              { math: '$f(0) = 1$, $\\lim_{x\\to 0} f(x) = 1$, equal', why: 'the fundamental trig limit' },
              { math: 'continuous at $0$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionContinuity',
          caption:
            'Switch between a hole, a jump and an asymptote and watch which of the three conditions breaks: a hole fails the equality (or the value), a jump fails the limit, an asymptote fails everything. Continuity means you can draw through the point without lifting the pen.',
        },
        pitfalls: [
          {
            title: 'Checking only f(a)',
            wrong: '"$f(1) = 3$ exists, so $f$ is continuous"',
            right: 'the limit must exist and equal $3$; here it is $2$',
          },
          {
            title: 'Checking only one side',
            wrong: 'left limit $2$, "so the limit is $2$"',
            right: 'compute the right limit too',
          },
          {
            title: 'Reading f(a) from the wrong piece',
            wrong: '$f(1)$ from the piece marked $x > 1$',
            right: 'the piece whose condition includes $x = 1$',
          },
          {
            title: '"Undefined means a jump"',
            wrong: 'any undefined point called a jump',
            right: 'classify by the limits: undefined with a finite limit is removable',
          },
        ],
        related: ['piecewise-limits', 'removable-discontinuities', 'one-sided-limits'],
        builtOn: [
          { label: 'Continuity at a point', url: ruleUrl('limits.continuity-at-a-point') },
          { label: 'One-sided continuity', url: ruleUrl('limits.one-sided-continuity') },
          { label: 'Types of discontinuities', url: ruleUrl('lesson.limits.continuity.types') },
        ],
      },
    },
    {
      id: 'removable-discontinuities',
      slug: 'removable-discontinuities',
      name: 'How to find and remove a removable discontinuity',
      description: 'A hole: the limit exists but $f(a)$ is missing or wrong. Cancel, find the limit, redefine.',
      uses: ['factoring', 'continuity at a point'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find and Remove a Removable Discontinuity | Learn Math Class',
        description:
          'Find holes in a graph: locate where f is undefined, check for 0/0, cancel the common factor to get the limit, redefine f(a) as that limit. Hole or asymptote.',
        keywords: ['removable discontinuity', 'how to remove a discontinuity', 'hole in a graph', 'redefine function to make it continuous', 'hole vs vertical asymptote'],
      },
      page: {
        h1: 'How to Find and Remove a Removable Discontinuity',
        lead:
          'A removable discontinuity is a hole: the limit exists, but the function is undefined there or has the wrong value. Find the limit by cancelling the common factor, then redefine $f(a)$ to be that limit.',
        recognize:
          '"Find the removable discontinuities", "redefine $f$ to make it continuous", "where does the graph have a hole", a rational function whose numerator and denominator share a zero. Test: substitution gives $\\frac{0}{0}$ and the factor cancels.',
        recognizeNote: `Defined under ${link('lesson.limits.continuity.removable', 'removable discontinuity')} in the continuity lesson; the repair makes the function satisfy ${link('limits.continuity-at-a-point', 'continuity at a point')}.`,
        methods: [
          {
            name: 'Cancel and redefine',
            tag: 'usual choice',
            preferred: true,
            formula: 'f(a) := \\lim_{x\\to a} f(x)',
            body: 'Cancel the common factor to read the limit off the simplified expression, then set the value at $a$ to that limit.',
          },
          {
            name: 'Hole or asymptote?',
            tag: 'tell them apart',
            formula: '\\tfrac{0}{0} \\text{ and the factor cancels: hole}, \\qquad \\tfrac{c}{0},\\ c \\neq 0: \\text{asymptote}',
            body: `Only a hole can be removed. A nonzero numerator over zero is a [vertical asymptote](!${HUB}/vertical-asymptotes) and nothing can be filled in.`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\frac{x^2 - 9}{x - 3}$',
          items: [
            {
              title: 'Find where f is undefined.',
              body: 'Zeros of the denominator.',
              state: '$x = 3$',
            },
            {
              title: 'Check the form at that point.',
              body: '$\\frac{0}{0}$ is a hole candidate; $\\frac{c}{0}$ with $c \\neq 0$ is an asymptote.',
              state: '$\\frac{9 - 9}{3 - 3} = \\frac{0}{0}$: hole candidate',
              atomic: 'direct-substitution',
            },
            {
              title: 'Factor, cancel, and read off the limit.',
              body: `As in [limits by factoring](!${HUB}/factoring-limits).`,
              state: '$\\frac{(x - 3)(x + 3)}{x - 3} = x + 3 \\;\\Rightarrow\\; \\lim_{x\\to 3} f(x) = 6$',
            },
            {
              title: 'Remove it: define f(a) as the limit.',
              body: 'The extended function is continuous at $a$. The original function is still undefined there; the repair is a new function.',
              state: '$g(x) = x + 3$; the hole at $(3, 6)$ is filled',
            },
          ],
        },
        examples: [
          {
            title: 'undefined at the hole',
            badge: 'basic',
            lines: [
              { math: '$f(x) = \\frac{x^2 - 9}{x - 3}$, undefined at $3$, $\\frac{0}{0}$', why: '' },
              { math: '$\\lim_{x\\to 3} f(x) = 6$; define $f(3) = 6$', why: 'the extended function is $x + 3$', answer: true },
            ],
          },
          {
            title: 'defined with the wrong value',
            badge: 'redefine',
            lines: [
              { math: '$f(x) = \\frac{x^2 - 9}{x - 3}$ for $x \\neq 3$, $\\;f(3) = 5$', why: 'the limit is $6$, not $5$' },
              { math: 'removable: redefine $f(3) = 6$', why: '', answer: true },
            ],
          },
          {
            title: 'not a rational function',
            badge: 'sin x / x',
            lines: [
              { math: '$f(x) = \\frac{\\sin x}{x}$, undefined at $0$', why: '$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$' },
              { math: 'define $f(0) = 1$', why: 'the standard extension', answer: true },
            ],
          },
          {
            title: 'not removable',
            badge: 'c/0',
            lines: [
              { math: '$f(x) = \\frac{x + 3}{x - 3}$ at $3$: $\\frac{6}{0}$', why: 'the numerator is not zero' },
              { math: 'vertical asymptote, no value can fill it', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The graph of $\\frac{x^2 - 9}{x - 3}$ is the line $y = x + 3$ with a single point punched out at $(3, 6)$. Filling that point in is all it takes; nothing else about the function changes, which is what "removable" means.',
        },
        pitfalls: [
          {
            title: 'Calling a hole an asymptote',
            wrong: '$x = 3$ is a vertical asymptote of $\\frac{x^2 - 9}{x - 3}$',
            right: 'the factor cancels; it is a hole',
          },
          {
            title: 'Redefining with the old value',
            wrong: 'keeping $f(3) = 5$',
            right: '$f(3) = 6$, the limit',
          },
          {
            title: 'Forgetting the exclusion after cancelling',
            wrong: '"$f(x) = x + 3$, so $f(3) = 6$" as if the original were defined there',
            right: 'the original is undefined at $3$; the redefinition is a new function',
          },
          {
            title: 'Trying to remove a c/0 point',
            wrong: 'redefining $\\frac{x + 3}{x - 3}$ at $3$',
            right: 'the limit is infinite; the discontinuity is not removable',
          },
        ],
        related: ['factoring-limits', 'vertical-asymptotes', 'continuity-check'],
        builtOn: [
          { label: 'Removable discontinuity (lesson)', url: ruleUrl('lesson.limits.continuity.removable') },
          { label: 'Continuity at a point', url: ruleUrl('limits.continuity-at-a-point') },
          { label: 'Factoring strategy', url: ruleUrl('polynomials.factoring-strategy') },
        ],
      },
    },
    {
      id: 'epsilon-delta-proofs',
      slug: 'epsilon-delta-proofs',
      name: 'How to write an epsilon-delta proof',
      description: 'Scratch work backwards to find $\\delta$ in terms of $\\varepsilon$, then the proof forwards.',
      uses: ['definition of the limit', 'absolute value inequalities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Write an Epsilon-Delta Proof of a Limit | Learn Math Class',
        description:
          'Write an ε-δ proof: simplify |f(x) − L| to a multiple of |x − a|, solve for δ in scratch work, bound extra factors with δ ≤ 1, then write the proof forwards.',
        keywords: ['epsilon delta proof', 'how to write an epsilon delta proof', 'epsilon delta definition of limit', 'epsilon delta examples', 'find delta for epsilon'],
      },
      page: {
        h1: 'How to Write an Epsilon-Delta Proof',
        lead:
          'To prove $\\lim_{x\\to a} f(x) = L$ you show: for every $\\varepsilon > 0$ there is a $\\delta > 0$ such that $0 < |x - a| < \\delta$ forces $|f(x) - L| < \\varepsilon$. The work is scratch work backwards (find $\\delta$ in terms of $\\varepsilon$), then the proof forwards.',
        recognize:
          '"Prove using the definition of the limit", "find $\\delta$ for a given $\\varepsilon$", "$\\varepsilon$-$\\delta$". Test: the word prove, or the Greek letters, together with a linear or simple quadratic function.',
        recognizeNote: `The intuitive version is ${link('lesson.limits.idea', 'the central idea of a limit')}; the site has no separate section on the formal definition, so this page is where the proof technique lives.`,
        methods: [
          {
            name: 'Linear functions: solve directly',
            tag: 'usual choice',
            preferred: true,
            formula: '|f(x) - L| = |m|\\,|x - a| < \\varepsilon \\iff |x - a| < \\frac{\\varepsilon}{|m|}',
            body: 'For $f(x) = mx + b$ the factor in front of $|x - a|$ is a constant, so $\\delta = \\frac{\\varepsilon}{|m|}$ works at once.',
          },
          {
            name: 'Nonlinear: bound the extra factor first',
            tag: 'quadratics and beyond',
            formula: '|x^2 - a^2| = |x + a|\\,|x - a| \\le (2|a| + 1)\\,|x - a| \\quad \\text{if } |x - a| < 1',
            body: 'Restrict $\\delta \\le 1$ to bound the extra factor by a constant $M$, then take $\\delta = \\min\\!\\big(1, \\frac{\\varepsilon}{M}\\big)$.',
          },
        ],
        steps: {
          traceLabel: 'On $\\lim_{x\\to 2}(3x - 1) = 5$',
          items: [
            {
              title: 'Write |f(x) − L| and simplify it to a multiple of |x − a|.',
              body: 'For a polynomial, $(x - a)$ always factors out of $f(x) - f(a)$.',
              state: '$|3x - 1 - 5| = |3x - 6| = 3|x - 2|$',
            },
            {
              title: 'Scratch work: solve |f(x) − L| < ε for |x − a|.',
              body: 'This runs backwards from the goal. It is not the proof yet.',
              state: '$3|x - 2| < \\varepsilon \\iff |x - 2| < \\frac{\\varepsilon}{3}$',
            },
            {
              title: 'Choose δ.',
              body: 'Here $\\delta = \\frac{\\varepsilon}{3}$. For a nonlinear $f$, $\\delta = \\min(1, \\ldots)$ so the bound on the extra factor stays valid.',
              state: '$\\delta = \\frac{\\varepsilon}{3}$',
            },
            {
              title: 'Write the proof forwards.',
              body: 'Let $\\varepsilon > 0$. Take $\\delta = \\frac{\\varepsilon}{3}$. If $0 < |x - 2| < \\delta$, then $|f(x) - 5| = 3|x - 2| < 3\\delta = \\varepsilon$. ∎',
              state: 'proof complete',
            },
          ],
        },
        examples: [
          {
            title: 'a linear function',
            badge: 'δ = ε / |m|',
            lines: [
              { math: '$\\lim_{x\\to 2}(3x - 1) = 5$: $\\;|f(x) - 5| = 3|x - 2|$', why: 'scratch work' },
              { math: 'take $\\delta = \\frac{\\varepsilon}{3}$; then $0 < |x - 2| < \\delta \\Rightarrow |f(x) - 5| < \\varepsilon$', why: 'the proof', answer: true },
            ],
          },
          {
            title: 'a quadratic',
            badge: 'δ = min(1, ε/M)',
            lines: [
              { math: '$\\lim_{x\\to 3} x^2 = 9$: $\\;|x^2 - 9| = |x + 3|\\,|x - 3|$', why: 'extra factor $|x + 3|$' },
              { math: 'if $|x - 3| < 1$ then $2 < x < 4$, so $|x + 3| < 7$', why: 'bound it with $\\delta \\le 1$' },
              { math: 'take $\\delta = \\min\\!\\big(1, \\frac{\\varepsilon}{7}\\big)$; then $|x^2 - 9| < 7\\cdot\\frac{\\varepsilon}{7} = \\varepsilon$', why: 'the proof', answer: true },
            ],
          },
          {
            title: 'a reciprocal',
            badge: 'keep x away from 0',
            lines: [
              { math: '$\\lim_{x\\to 1}\\frac{1}{x} = 1$: $\\;\\Big|\\frac{1}{x} - 1\\Big| = \\frac{|x - 1|}{|x|}$', why: 'extra factor $\\frac{1}{|x|}$' },
              { math: 'if $|x - 1| < \\frac{1}{2}$ then $x > \\frac{1}{2}$, so $\\frac{1}{|x|} < 2$', why: 'bound it' },
              { math: 'take $\\delta = \\min\\!\\big(\\frac{1}{2}, \\frac{\\varepsilon}{2}\\big)$; then $\\Big|\\frac{1}{x} - 1\\Big| < 2\\cdot\\frac{\\varepsilon}{2} = \\varepsilon$', why: 'the proof', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionLimit',
          caption:
            'Shrink the $\\varepsilon$-band around $L$ and watch the $\\delta$-window around $a$ shrink with it. The proof is a recipe that produces a working $\\delta$ for any $\\varepsilon$ you are handed. For a steeper function the window must be narrower; the slope is the price.',
        },
        pitfalls: [
          {
            title: 'A δ that depends on x',
            wrong: '$\\delta = \\frac{\\varepsilon}{|x + 3|}$',
            right: '$\\delta$ may depend only on $\\varepsilon$ (and $a$); bound $|x + 3|$ by a constant first',
          },
          {
            title: 'Writing the scratch work as the proof',
            wrong: 'starting from $|f(x) - L| < \\varepsilon$ and deriving $|x - a| < \\delta$',
            right: 'the proof starts from $0 < |x - a| < \\delta$ and ends at $|f(x) - L| < \\varepsilon$',
          },
          {
            title: 'Forgetting the min with 1',
            wrong: '$\\delta = \\frac{\\varepsilon}{7}$ alone for $x^2$ at $3$',
            right: 'the bound $|x + 3| < 7$ needed $|x - 3| < 1$, so $\\delta = \\min(1, \\frac{\\varepsilon}{7})$',
          },
          {
            title: 'Including x = a',
            wrong: '$|x - a| < \\delta$',
            right: '$0 < |x - a| < \\delta$; the value at $a$ is irrelevant to the limit',
          },
        ],
        related: ['one-sided-limits', 'continuity-check', 'which-limit-technique'],
        builtOn: [
          { label: 'The central idea of a limit', url: ruleUrl('lesson.limits.idea') },
          { label: 'Two-sided limit existence theorem', url: ruleUrl('limits.two-sided-existence') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-limit-technique',
      slug: 'which-limit-technique',
      name: 'Which limit technique should I use?',
      description: 'A decision tree from what substitution gives you to the right technique.',
      uses: 'leads to 8 techniques',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Limit Technique to Use? Decision Tree | Learn Math Class',
        description:
          "Choose a limit technique from what substitution gives: a number, 0/0 (factor, rationalize, L'Hôpital), c/0 (one-sided limits) or x → ∞ (degrees, roots, powers).",
        keywords: ['which limit technique', 'how to choose a limit method', 'limit decision tree', 'evaluating limits strategy', 'limits flowchart'],
      },
      page: {
        h1: 'Which Limit Technique Should I Use?',
        lead:
          'Always start the same way: substitute $x = a$. What comes out decides everything. A number is the answer; $\\frac{0}{0}$ needs algebra or L\'Hôpital; a nonzero number over $0$ means one-sided infinite limits; and $x \\to \\pm\\infty$ has its own tools.',
        tree: {
          rootId: 'subst',
          svgW: 1100,
          nodes: {
            subst: {
              type: 'q',
              text: 'Substitute x = a. What do you get?',
              children: [
                { label: 'a number', to: 'direct' },
                { label: '0 / 0', to: 'zeroZero' },
                { label: 'c / 0, c ≠ 0', to: 'oneSided' },
                { label: 'x → ±∞ instead', to: 'infinity' },
              ],
            },
            zeroZero: {
              type: 'q',
              text: 'What is in the 0/0?',
              children: [
                { label: 'polynomials', to: 'factor' },
                { label: 'a square root', to: 'rationalize' },
                { label: 'sin, e^x, ln', to: 'lhopital' },
              ],
            },
            infinity: {
              type: 'q',
              text: 'What kind of function?',
              children: [
                { label: 'polynomial over polynomial', to: 'rational' },
                { label: 'a square root', to: 'radical' },
                { label: 'a power f^g', to: 'power' },
              ],
            },
            direct: { type: 'leaf', to: 'direct-substitution', short: 'That number is the limit' },
            oneSided: { type: 'leaf', to: 'one-sided-limits', short: 'One-sided infinite limits' },
            factor: { type: 'leaf', to: 'factoring-limits', short: 'Factor and cancel' },
            rationalize: { type: 'leaf', to: 'rationalizing-limits', short: 'Multiply by the conjugate' },
            lhopital: { type: 'leaf', to: 'lhopitals-rule', short: "L'Hôpital's rule" },
            rational: { type: 'leaf', to: 'limits-at-infinity-rational', short: 'Compare degrees' },
            radical: { type: 'leaf', to: 'limits-at-infinity-radicals', short: 'Factor out the highest power' },
            power: { type: 'leaf', to: 'indeterminate-powers', short: 'Take logarithms' },
          },
          branches: [
            {
              condition: 'Substitution gives an ordinary number.',
              answer: `That number is the limit: ${link('lesson.limits.evaluating.direct-substitution', 'direct substitution')}, because the function is continuous there.`,
            },
            {
              condition: 'Substitution gives $\\frac{0}{0}$ and the expression is built from polynomials.',
              answer: `[Factor and cancel](!${HUB}/factoring-limits) the common factor $(x - a)$, then substitute again.`,
            },
            {
              condition: 'Substitution gives $\\frac{0}{0}$ and a square root is involved.',
              answer: `[Rationalize](!${HUB}/rationalizing-limits): multiply top and bottom by the conjugate, cancel, substitute.`,
            },
            {
              condition: 'Substitution gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ with sines, exponentials or logarithms in it.',
              answer: `Use [L'Hôpital's rule](!${HUB}/lhopitals-rule) (${link('derivatives.lhopital-rule', 'statement')}), or recognize a special limit such as ${link('limits.sin-x-over-x', 'sin x over x')}.`,
            },
            {
              condition: 'Substitution gives a nonzero number over $0$.',
              answer: `The limit is infinite or does not exist: find the sign of each [one-sided limit](!${HUB}/one-sided-limits); this also locates a [vertical asymptote](!${HUB}/vertical-asymptotes).`,
            },
            {
              condition: '$x \\to \\pm\\infty$ and the function is a polynomial over a polynomial.',
              answer: `[Compare degrees](!${HUB}/limits-at-infinity-rational) or divide by the highest power of $x$ in the denominator.`,
            },
            {
              condition: '$x \\to \\pm\\infty$ and a square root is involved.',
              answer: `[Factor the highest power out of the root](!${HUB}/limits-at-infinity-radicals), remembering $\\sqrt{x^2} = |x|$.`,
            },
            {
              condition: 'A variable base raised to a variable exponent gives $1^\\infty$, $0^0$ or $\\infty^0$.',
              answer: `Take logarithms: see [indeterminate powers](!${HUB}/indeterminate-powers).`,
            },
          ],
        },
        related: ['factoring-limits', 'lhopitals-rule', 'limits-at-infinity-rational'],
        builtOn: [
          { label: 'Direct substitution (lesson)', url: ruleUrl('lesson.limits.evaluating.direct-substitution') },
          { label: 'Indeterminate forms', url: ruleUrl('lesson.limits.evaluating.indeterminate-forms') },
          { label: 'Two-sided limit existence theorem', url: ruleUrl('limits.two-sided-existence') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Multi-step methods', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
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
    title: 'Other Calculus methods',
    links: [
      { url: '/calculus/derivatives/techniques', label: 'Derivatives' },
      { url: '/calculus/integrals/techniques', label: 'Integrals' },
    ],
  },
};

export default limitsMethods;
