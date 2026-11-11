// complex-numbers.methods.js (complex numbers)
// Single data source for /complex-numbers/methods (hub) and
// /complex-numbers/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/complex-numbers/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/complex-numbers/methods';

const complexNumbersMethods = {
  hubPath: HUB,
  hubLabel: 'complex number methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'powers-of-i',
      name: 'How to simplify a power of i',
      subtitle: 'Powers of i cycle',
      glyph: 'iⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A power of the imaginary unit appears in an expression or a product: $i^2$ after multiplying out, $i^{3}$, $i^{47}$, $i^{100}$.',
      formula: 'i^n = i^{\\,r}, \\quad r = n \\bmod 4: \\quad i^0 = 1,\\ i^1 = i,\\ i^2 = -1,\\ i^3 = -i',
      fields: {
        steps: [
          '1. Divide the exponent by $4$ and keep the remainder $r$.',
          '2. Replace $i^n$ with $i^r$ from the cycle $1, i, -1, -i$.',
        ],
        worked_example: '$i^{47}:\\quad 47 = 4 \\cdot 11 + 3 \\;\\Rightarrow\\; i^{47} = i^3 = -i$',
      },
      links: [
        { url: ruleUrl('cx.powers-of-i-cycle'), label: 'Powers of i cycle' },
        { url: ruleUrl('lesson.cx.imaginary-numbers.5'), label: 'The cyclic powers of i (lesson)' },
      ],
    },
    {
      id: 'complex-conjugate',
      name: 'How to find the complex conjugate',
      subtitle: 'Complex conjugate',
      glyph: 'z̄',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You need $\\overline{z}$ to divide, to make a product real, or to pair a root: $\\overline{3 - 4i}$, $\\overline{-2 + i}$, $\\overline{5i}$.',
      formula: '\\overline{a + bi} = a - bi, \\qquad (a + bi)(a - bi) = a^2 + b^2',
      fields: {
        steps: [
          '1. Keep the real part.',
          '2. Change the sign of the imaginary part.',
        ],
        worked_example: '$\\overline{3 - 4i} = 3 + 4i, \\quad (3 - 4i)(3 + 4i) = 9 + 16 = 25$',
      },
      links: [
        { url: ruleUrl('cx.complex-conjugate'), label: 'Complex conjugate' },
        { url: ruleUrl('cx.conjugate-times-number'), label: 'Conjugate times number' },
        { url: ruleUrl('lesson.cx.complex-conjugate.1'), label: 'Definition of the conjugate (lesson)' },
      ],
    },
    {
      id: 'modulus',
      name: 'How to find the modulus of a complex number',
      subtitle: 'Modulus',
      glyph: '|z|',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'You need the distance of $z = a + bi$ from the origin, for example as the $r$ of the polar form: $|3 + 4i|$, $|-5 + 12i|$, $|-4i|$.',
      formula: '|a + bi| = \\sqrt{a^2 + b^2}',
      fields: {
        steps: [
          '1. Square the real part and the imaginary part (the imaginary part without $i$).',
          '2. Add the squares and take the positive square root.',
        ],
        worked_example: '$|-5 + 12i| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{169} = 13$',
      },
      links: [
        { url: ruleUrl('cx.modulus'), label: 'Modulus' },
        { url: ruleUrl('lesson.cx.absolute-value.1'), label: 'Definition of modulus (lesson)' },
      ],
    },
    {
      id: 'add-subtract-complex',
      name: 'How to add or subtract complex numbers',
      subtitle: 'Addition and subtraction',
      glyph: 'z ± w',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Two complex numbers in the form $a + bi$ are joined by a plus or minus sign: $(2 + 3i) + (5 - i)$, $(4 - 3i) - (1 - 5i)$.',
      formula: '(a + bi) \\pm (c + di) = (a \\pm c) + (b \\pm d)i',
      fields: {
        steps: [
          '1. Remove the brackets; a minus sign changes the sign of both parts of the second number.',
          '2. Combine the real parts and the imaginary parts separately.',
        ],
        worked_example: '$(4 - 3i) - (1 - 5i) = (4 - 1) + (-3 + 5)i = 3 + 2i$',
      },
      links: [
        { url: ruleUrl('cx.addition'), label: 'Addition' },
        { url: ruleUrl('cx.subtraction'), label: 'Subtraction' },
        { url: ruleUrl('lesson.cx.operations.1'), label: 'Addition of complex numbers (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'multiply-complex',
      slug: 'multiply-complex',
      name: 'How to multiply complex numbers',
      description: 'Expand the brackets term by term, replace $i^2$ with $-1$, and collect the real and imaginary parts.',
      uses: ['distributive property', 'i squared is -1', 'combine like terms'],
      level: 'composite',
      tag: 'Composite',
      meta: '3 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Multiply Complex Numbers | Learn Math Class',
        description: 'Multiply complex numbers in a + bi form: expand all four products, replace i squared with -1, collect real and imaginary parts. Worked examples and mistakes.',
        keywords: ['how to multiply complex numbers', 'multiplying complex numbers', 'complex number multiplication', 'foil complex numbers', 'multiply a + bi'],
      },
      page: {
        h1: 'How to Multiply Complex Numbers',
        lead:
          'Multiply two complex numbers like two binomials: every term of the first times every term of the second. The only new move is $i^2 = -1$, which turns one of the four products into a real number.',
        recognize:
          'Two complex numbers in the form $a + bi$ stand side by side or with a dot: $(2 + 3i)(4 - i)$, $3i(2 - 5i)$, $(1 + 2i)^2$, $(2 - i)^3$. Test: both factors have small whole-number parts and no modulus or angle is given. If the numbers come as $r(\\cos\\theta + i\\sin\\theta)$ or $re^{i\\theta}$, use [multiplying in polar form](!' + HUB + '/multiply-divide-polar) instead.',
        recognizeNote: `Products of complex numbers are explained in the ${link('lesson.cx.operations.3', 'multiplication lesson')}.`,
        methods: [
          {
            name: 'Expand term by term',
            tag: 'usual',
            preferred: true,
            formula: '(a + bi)(c + di) = ac + adi + bci + bdi^2',
            body: 'Multiply the four pairs, then use $i^2 = -1$ on the last one.',
          },
          {
            name: 'Use the product formula',
            tag: 'formula',
            formula: '(a + bi)(c + di) = (ac - bd) + (ad + bc)i',
            body: `Read $a, b, c, d$ and substitute into the ${link('cx.multiplication', 'multiplication formula')}.`,
          },
          {
            name: 'Multiply in polar form',
            tag: 'polar',
            formula: 'r_1 r_2\\,\\big(\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)\\big)',
            body: `Multiply the moduli and add the arguments (${link('cx.multiplication-in-polar-form', 'multiplication in polar form')}); best when angles are given.`,
          },
        ],
        steps: {
          traceLabel: 'On $(2 + 3i)(4 - i)$',
          items: [
            {
              title: 'Expand every pair of terms.',
              body: 'First, outer, inner, last: four products. Keep the $i$ attached to each imaginary term.',
              state: '$8 - 2i + 12i - 3i^2$',
            },
            {
              title: 'Replace i squared with -1.',
              body: 'The product of the two imaginary terms becomes real. Watch the sign: $-3i^2 = +3$. Higher powers follow the cycle of four.',
              state: '$8 - 2i + 12i + 3$',
              atomic: 'powers-of-i',
            },
            {
              title: 'Collect the real and imaginary parts.',
              body: 'Add the real numbers, add the coefficients of $i$, and write the result as $a + bi$.',
              state: '$11 + 10i$',
            },
          ],
        },
        examples: [
          {
            title: 'a pure imaginary factor',
            badge: 'distribute',
            lines: [
              { math: '$3i(2 - 5i) = 6i - 15i^2$', why: 'distribute $3i$' },
              { math: '$= 6i + 15$', why: '$i^2 = -1$' },
              { math: '$15 + 6i$', why: 'real part first', answer: true },
            ],
          },
          {
            title: 'two binomials',
            badge: 'four products',
            lines: [
              { math: '$(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2$', why: 'four products' },
              { math: '$= 3 - i + 6i + 2$', why: '$-2i^2 = 2$' },
              { math: '$5 + 5i$', why: 'collect parts', answer: true },
            ],
          },
          {
            title: 'a cube',
            badge: 'repeated product',
            lines: [
              { math: '$(2 - i)^2 = 4 - 4i + i^2 = 3 - 4i$', why: 'square first' },
              { math: '$(3 - 4i)(2 - i) = 6 - 3i - 8i + 4i^2$', why: 'multiply by $2 - i$ again' },
              { math: '$= 6 - 11i - 4$', why: '$4i^2 = -4$' },
              { math: '$2 - 11i$', why: 'collect parts', answer: true },
            ],
          },
        ],
        examplesAfter: 'See the product rotate and stretch in the [multiplication visualizer](!/complex-numbers/visual-tools/multiplication).',
        visual: {
          caption:
            'Multiplying by a complex number does two things at once: it scales and it rotates. Multiplying by $i$ alone turns every point a quarter turn counterclockwise, which is why $i \\cdot i = -1$ lands on the opposite side of the origin. The term-by-term expansion is just the bookkeeping of that rotation in coordinates: the real part collects $ac - bd$ and the imaginary part collects $ad + bc$.',
        },
        pitfalls: [
          {
            title: 'Multiplying part by part',
            wrong: '$(1 + 2i)(3 + 4i) = 3 + 8i$',
            right: 'all four products: $3 + 4i + 6i + 8i^2 = -5 + 10i$',
          },
          {
            title: 'Keeping the wrong sign after i squared',
            wrong: '$(2 + 3i)(4 - i) = 8 + 10i - 3 = 5 + 10i$',
            right: '$-3i^2 = +3$, so the product is $11 + 10i$',
          },
          {
            title: 'Squaring each part',
            wrong: '$(2 + 3i)^2 = 4 + 9i^2 = -5$',
            right: '$(2 + 3i)^2 = 4 + 12i + 9i^2 = -5 + 12i$',
            note: 'The middle term $2ab\\,i$ is the whole imaginary part.',
          },
        ],
        related: ['divide-complex', 'multiply-divide-polar', 'which-form'],
        builtOn: [
          { label: 'Multiplication', url: ruleUrl('cx.multiplication') },
          { label: 'Powers of i cycle', url: ruleUrl('cx.powers-of-i-cycle') },
          { label: 'Multiplication of complex numbers (lesson)', url: ruleUrl('lesson.cx.operations.3') },
        ],
      },
    },
    {
      id: 'divide-complex',
      slug: 'divide-complex',
      name: 'How to divide complex numbers',
      description: 'Multiply the top and bottom by the conjugate of the denominator, so the denominator becomes the real number $c^2 + d^2$.',
      uses: ['complex conjugate', 'multiplication', 'modulus squared'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Divide Complex Numbers | Learn Math Class',
        description: 'Divide complex numbers: multiply the top and bottom by the conjugate of the denominator, expand, and split into a + bi. Worked examples and common mistakes.',
        keywords: ['how to divide complex numbers', 'dividing complex numbers', 'complex division conjugate', 'divide a + bi', 'complex fraction standard form'],
      },
      page: {
        h1: 'How to Divide Complex Numbers',
        lead:
          'A quotient is not in standard form while $i$ sits in the denominator. Multiply the top and bottom by the conjugate of the denominator: the bottom becomes a real number, and the top splits into a real and an imaginary part.',
        recognize:
          'A complex number is divided by another: $\\frac{5 + 5i}{1 + 2i}$, $\\frac{6}{1 + i}$, $\\frac{2 + 3i}{i}$, or the question asks for $z^{-1}$ in the form $a + bi$. Test: the denominator contains $i$. If both numbers are given by modulus and angle, [dividing in polar form](!' + HUB + '/multiply-divide-polar) is faster.',
        recognizeNote: `Division of complex numbers is explained in the ${link('lesson.cx.operations.4', 'division lesson')}.`,
        methods: [
          {
            name: 'Multiply by the conjugate',
            tag: 'usual',
            preferred: true,
            formula: '\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{c^2 + d^2}',
            body: `The ${link('cx.division', 'division formula')} comes from this one move.`,
          },
          {
            name: 'Divide in polar form',
            tag: 'polar',
            formula: '\\frac{r_1}{r_2}\\big(\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)\\big)',
            body: `Divide the moduli and subtract the arguments (${link('cx.division-in-polar-form', 'division in polar form')}).`,
          },
          {
            name: 'Multiply by the reciprocal',
            tag: 'inverse',
            formula: 'z^{-1} = \\frac{\\overline{z}}{|z|^2}',
            body: `Find the ${link('cx.multiplicative-inverse', 'multiplicative inverse')} of the denominator, then multiply.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\dfrac{5 + 5i}{1 + 2i}$',
          items: [
            {
              title: 'Write the conjugate of the denominator.',
              body: 'Keep the real part and change the sign of the imaginary part.',
              state: '$\\overline{1 + 2i} = 1 - 2i$',
              atomic: 'complex-conjugate',
            },
            {
              title: 'Multiply the top and the bottom by it.',
              body: 'This multiplies the fraction by $1$, so its value does not change.',
              state: '$\\dfrac{(5 + 5i)(1 - 2i)}{(1 + 2i)(1 - 2i)}$',
            },
            {
              title: 'Simplify the denominator and the numerator.',
              body: `The bottom is $c^2 + d^2$ by the ${link('cx.modulus-squared', 'modulus squared')} rule. Expand the top as in [multiplying complex numbers](!${HUB}/multiply-complex).`,
              state: '$\\dfrac{5 - 10i + 5i - 10i^2}{1 + 4} = \\dfrac{15 - 5i}{5}$',
            },
            {
              title: 'Split into real and imaginary parts.',
              body: 'Divide each part of the numerator by the real denominator and simplify the fractions.',
              state: '$3 - i$',
            },
          ],
        },
        examples: [
          {
            title: 'a real numerator',
            badge: 'conjugate',
            lines: [
              { math: '$\\dfrac{6}{1 + i} \\cdot \\dfrac{1 - i}{1 - i} = \\dfrac{6 - 6i}{2}$', why: '$(1 + i)(1 - i) = 2$' },
              { math: '$3 - 3i$', why: 'divide both parts by $2$', answer: true },
            ],
          },
          {
            title: 'dividing by i',
            badge: 'pure imaginary',
            lines: [
              { math: '$\\dfrac{2 + 3i}{i} \\cdot \\dfrac{-i}{-i} = \\dfrac{-2i - 3i^2}{-i^2}$', why: '$\\overline{i} = -i$' },
              { math: '$= \\dfrac{3 - 2i}{1}$', why: '$i^2 = -1$ top and bottom' },
              { math: '$3 - 2i$', why: 'denominator is $1$', answer: true },
            ],
          },
          {
            title: 'fractional parts',
            badge: 'general case',
            lines: [
              { math: '$\\dfrac{3 + 2i}{1 - 4i} \\cdot \\dfrac{1 + 4i}{1 + 4i}$', why: 'conjugate of $1 - 4i$' },
              { math: '$= \\dfrac{3 + 12i + 2i + 8i^2}{1 + 16} = \\dfrac{-5 + 14i}{17}$', why: 'expand, $c^2 + d^2 = 17$' },
              { math: '$-\\dfrac{5}{17} + \\dfrac{14}{17}i$', why: 'split into parts', answer: true },
            ],
          },
        ],
        examplesAfter: 'Follow the conjugate step and the polar picture side by side in the [division visualizer](!/complex-numbers/visual-tools/division).',
        visual: {
          caption:
            'A number times its conjugate is always real: $(c + di)(c - di) = c^2 + d^2 = |c + di|^2$. Geometrically, the conjugate is the mirror image across the real axis, so its angle cancels the angle of the denominator. Multiplying top and bottom by it removes the rotation from the bottom and moves it to the top, which leaves a plain real number to divide by.',
        },
        pitfalls: [
          {
            title: 'Dividing part by part',
            wrong: '$\\dfrac{4 + 6i}{2 + 3i} = \\dfrac{4}{2} + \\dfrac{6}{3}i = 2 + 2i$',
            right: '$4 + 6i = 2(2 + 3i)$, so the quotient is $2$',
          },
          {
            title: 'Multiplying only the denominator',
            wrong: '$\\dfrac{5 + 5i}{(1 + 2i)(1 - 2i)} = \\dfrac{5 + 5i}{5} = 1 + i$',
            right: 'multiply the numerator too: $\\dfrac{(5 + 5i)(1 - 2i)}{5} = 3 - i$',
          },
          {
            title: 'Subtracting the squares in the denominator',
            wrong: '$(1 + 2i)(1 - 2i) = 1 - 4 = -3$',
            right: '$(1 + 2i)(1 - 2i) = 1 - 4i^2 = 1 + 4 = 5$',
          },
        ],
        related: ['multiply-complex', 'multiply-divide-polar', 'which-form'],
        builtOn: [
          { label: 'Division', url: ruleUrl('cx.division') },
          { label: 'Complex conjugate', url: ruleUrl('cx.complex-conjugate') },
          { label: 'Applications of the conjugate to division (lesson)', url: ruleUrl('lesson.cx.complex-conjugate.7') },
        ],
      },
    },
    {
      id: 'rectangular-to-polar',
      slug: 'rectangular-to-polar',
      name: 'How to convert a complex number to polar form',
      description: 'Find the modulus $r$, find the argument from $\\tan\\theta = \\frac{b}{a}$ with a quadrant check, and write $r(\\cos\\theta + i\\sin\\theta)$.',
      uses: ['modulus', 'argument', 'quadrant check'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Convert a Complex Number to Polar Form | Learn Math Class',
        description: 'Convert a + bi to polar form: find the modulus, take the reference angle from b/a, fix the quadrant, and write r(cos θ + i sin θ). Worked examples and mistakes.',
        keywords: ['how to convert complex numbers to polar form', 'rectangular to polar complex', 'find the argument of a complex number', 'trigonometric form of a complex number', 'modulus and argument'],
      },
      page: {
        h1: 'How to Convert a Complex Number to Polar Form',
        lead:
          'Polar form describes $z = a + bi$ by its distance from the origin and its angle. The distance is one formula; the angle needs care, because $\\tan\\theta = \\frac{b}{a}$ alone cannot tell opposite quadrants apart.',
        recognize:
          'You have $z = a + bi$ and need $r(\\cos\\theta + i\\sin\\theta)$, $r\\,\\text{cis}\\,\\theta$, $re^{i\\theta}$, or just $|z|$ and $\\arg(z)$: for example $-1 + \\sqrt{3}i$, $-2 - 2i$, $-4i$. It is also the first step before raising to a power or taking roots. Test: the signs of $a$ and $b$ tell you the quadrant before you compute anything.',
        recognizeNote: `Modulus, argument and the trigonometric form are defined in the ${link('lesson.cx.trigonometric-form.7', 'trigonometric form lesson')}.`,
        methods: [
          {
            name: 'Tangent plus a quadrant check',
            tag: 'usual',
            preferred: true,
            formula: '\\theta = \\arctan\\tfrac{b}{a} \\ (+\\pi \\text{ in Q II},\\ -\\pi \\text{ in Q III})',
            body: `Take the arctangent, then adjust for the quadrant (${link('lesson.cx.trigonometric-form.5', 'quadrant considerations')}).`,
          },
          {
            name: 'Cosine and sine of the angle',
            tag: 'unit circle',
            formula: '\\cos\\theta = \\tfrac{a}{r}, \\quad \\sin\\theta = \\tfrac{b}{r}',
            body: 'Find the one angle in $(-\\pi, \\pi]$ with both values, as in [finding unit circle values](!/trigonometry/methods/unit-circle-values).',
          },
        ],
        steps: {
          traceLabel: 'On $z = -1 + \\sqrt{3}i$',
          items: [
            {
              title: 'Locate the quadrant.',
              body: 'Read the signs of $a$ and $b$. A zero part puts $z$ on an axis, where the angle is $0$, $\\frac{\\pi}{2}$, $\\pi$ or $-\\frac{\\pi}{2}$.',
              state: '$a < 0$, $b > 0$: quadrant II',
            },
            {
              title: 'Find the modulus.',
              body: 'The modulus is the distance from the origin.',
              state: '$r = \\sqrt{1 + 3} = 2$',
              atomic: 'modulus',
            },
            {
              title: 'Find the reference angle.',
              body: 'Use the sizes of the parts only: $\\alpha = \\arctan\\left|\\frac{b}{a}\\right|$, an acute angle.',
              state: '$\\alpha = \\arctan\\sqrt{3} = \\frac{\\pi}{3}$',
            },
            {
              title: 'Place the angle in its quadrant.',
              body: 'Quadrant I: $\\theta = \\alpha$. II: $\\pi - \\alpha$. III: $-\\pi + \\alpha$. IV: $-\\alpha$. This gives the principal argument in $(-\\pi, \\pi]$.',
              state: '$\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$',
            },
            {
              title: 'Write the polar form.',
              body: 'Put $r$ in front and the same $\\theta$ in both the cosine and the sine.',
              state: '$z = 2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$',
            },
          ],
        },
        examples: [
          {
            title: 'first quadrant',
            badge: 'no adjustment',
            lines: [
              { math: '$z = \\sqrt{3} + i$: $r = \\sqrt{3 + 1} = 2$', why: 'modulus' },
              { math: '$\\theta = \\arctan\\frac{1}{\\sqrt{3}} = \\frac{\\pi}{6}$', why: 'quadrant I, no change' },
              { math: '$z = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$', why: 'assemble', answer: true },
            ],
          },
          {
            title: 'third quadrant',
            badge: 'quadrant check',
            lines: [
              { math: '$z = -2 - 2i$: $r = \\sqrt{4 + 4} = 2\\sqrt{2}$', why: 'modulus' },
              { math: '$\\alpha = \\arctan 1 = \\frac{\\pi}{4}$', why: 'reference angle' },
              { math: '$\\theta = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$', why: 'both parts negative: quadrant III' },
              { math: '$z = 2\\sqrt{2}\\left(\\cos\\left(-\\frac{3\\pi}{4}\\right) + i\\sin\\left(-\\frac{3\\pi}{4}\\right)\\right)$', why: 'assemble', answer: true },
            ],
          },
          {
            title: 'a point on an axis',
            badge: 'axis',
            lines: [
              { math: '$z = -4i$: $a = 0$, $b = -4$', why: '$\\frac{b}{a}$ is undefined' },
              { math: '$r = 4$, $\\theta = -\\frac{\\pi}{2}$', why: 'negative imaginary axis' },
              { math: '$z = 4\\left(\\cos\\left(-\\frac{\\pi}{2}\\right) + i\\sin\\left(-\\frac{\\pi}{2}\\right)\\right)$', why: 'assemble', answer: true },
            ],
          },
        ],
        examplesAfter: 'Drag a point and watch $r$ and $\\theta$ update in the [polar-rectangular converter](!/complex-numbers/visual-tools/polar-rectangular).',
        visual: {
          caption:
            'Draw the point $(a, b)$ and drop a perpendicular to the real axis. The right triangle has legs $|a|$ and $|b|$, so its hypotenuse is $r$ and its angle at the origin is the reference angle. The arctangent only sees the ratio $\\frac{b}{a}$, and $-2 - 2i$ has the same ratio as $2 + 2i$. The signs of $a$ and $b$ are what tell the two points apart, so the quadrant check is never optional.',
        },
        pitfalls: [
          {
            title: 'Skipping the quadrant check',
            wrong: '$-1 + \\sqrt{3}i$: $\\theta = \\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$',
            right: 'quadrant II: $\\theta = \\frac{2\\pi}{3}$; the angle $-\\frac{\\pi}{3}$ belongs to $1 - \\sqrt{3}i$',
          },
          {
            title: 'Using the reference angle as the argument',
            wrong: '$\\arg(-2 - 2i) = \\frac{\\pi}{4}$',
            right: '$\\arg(-2 - 2i) = -\\frac{3\\pi}{4}$, in quadrant III',
          },
          {
            title: 'Adding the parts for the modulus',
            wrong: '$|3 + 4i| = 3 + 4 = 7$',
            right: '$|3 + 4i| = \\sqrt{9 + 16} = 5$',
          },
          {
            title: 'Dividing by a zero real part',
            wrong: '$\\arg(-4i) = \\arctan\\frac{-4}{0}$',
            right: 'a point on an axis has a known angle: $\\arg(-4i) = -\\frac{\\pi}{2}$',
          },
        ],
        related: ['polar-to-rectangular', 'exponential-form', 'which-form'],
        builtOn: [
          { label: 'Modulus', url: ruleUrl('cx.modulus') },
          { label: 'Argument', url: ruleUrl('cx.argument') },
          { label: 'Converting algebraic to trigonometric (lesson)', url: ruleUrl('lesson.cx.trigonometric-form.8') },
        ],
      },
    },
    {
      id: 'polar-to-rectangular',
      slug: 'polar-to-rectangular',
      name: 'How to convert a complex number from polar to rectangular form',
      description: 'Evaluate $\\cos\\theta$ and $\\sin\\theta$, multiply both by $r$, and write $a + bi$.',
      uses: ['unit circle values', 'a = r cos θ', 'b = r sin θ'],
      level: 'composite',
      tag: 'Composite',
      meta: '3 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Convert a Complex Number from Polar to Rectangular Form | Learn Math Class',
        description: 'Convert r(cos θ + i sin θ) or r cis θ to a + bi: evaluate cosine and sine at θ, multiply both by r, and simplify. Examples with exact values and mistakes.',
        keywords: ['polar to rectangular complex', 'how to convert polar form to a + bi', 'trigonometric form to algebraic form', 'r cis theta to rectangular', 'complex number standard form'],
      },
      page: {
        h1: 'How to Convert a Complex Number from Polar to Rectangular Form',
        lead:
          'Going from polar to rectangular form is plain evaluation: the real part is $r\\cos\\theta$ and the imaginary part is $r\\sin\\theta$. Cosine and sine already carry the right signs, so no quadrant check is needed.',
        recognize:
          'The number is given by modulus and angle and the answer must be $a + bi$: $4\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$, $6\\,\\text{cis}\\,\\frac{\\pi}{3}$, $5\\,\\text{cis}\\,270°$. It is also the last step after a power, a root or a polar product. Test: the angle is a standard angle, so exact values are possible.',
        recognizeNote: `The trigonometric form and its notation are defined in the ${link('lesson.cx.trigonometric-form.7', 'trigonometric form lesson')}.`,
        steps: {
          traceLabel: 'On $z = 4\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$',
          items: [
            {
              title: 'Evaluate the cosine and the sine.',
              body: `Use exact ${link('lesson.trig.unit-circle.exact-values', 'unit circle values')}; the quadrant of $\\theta$ gives the signs. If you use a calculator, check its angle mode.`,
              state: '$\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$, $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$',
            },
            {
              title: 'Multiply both values by the modulus.',
              body: `The ${link('cx.polar-to-rectangular-conversion', 'conversion formulas')} are $a = r\\cos\\theta$ and $b = r\\sin\\theta$.`,
              state: '$a = 4 \\cdot \\left(-\\frac{\\sqrt{3}}{2}\\right) = -2\\sqrt{3}$, $b = 4 \\cdot \\frac{1}{2} = 2$',
            },
            {
              title: 'Write the result as a + bi.',
              body: 'Put the real part first and attach $i$ to the imaginary part.',
              state: '$z = -2\\sqrt{3} + 2i$',
            },
          ],
        },
        examples: [
          {
            title: 'a first-quadrant angle',
            badge: 'radians',
            lines: [
              { math: '$6\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right) = 6\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right)$', why: 'exact values' },
              { math: '$3 + 3\\sqrt{3}i$', why: 'multiply both parts by $6$', answer: true },
            ],
          },
          {
            title: 'an angle on an axis',
            badge: 'axis',
            lines: [
              { math: '$5\\,\\text{cis}\\,\\frac{3\\pi}{2}$: $\\cos\\frac{3\\pi}{2} = 0$, $\\sin\\frac{3\\pi}{2} = -1$', why: 'bottom of the circle' },
              { math: '$a = 0$, $b = -5$', why: 'multiply by $5$' },
              { math: '$-5i$', why: 'pure imaginary', answer: true },
            ],
          },
          {
            title: 'a negative angle',
            badge: 'quadrant III',
            lines: [
              { math: '$2\\sqrt{2}\\left(\\cos\\left(-\\frac{3\\pi}{4}\\right) + i\\sin\\left(-\\frac{3\\pi}{4}\\right)\\right)$', why: 'given' },
              { math: '$\\cos\\left(-\\frac{3\\pi}{4}\\right) = \\sin\\left(-\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$', why: 'both negative in quadrant III' },
              { math: '$a = b = 2\\sqrt{2} \\cdot \\left(-\\frac{\\sqrt{2}}{2}\\right) = -2$', why: '$\\sqrt{2} \\cdot \\sqrt{2} = 2$' },
              { math: '$-2 - 2i$', why: 'assemble', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check a conversion by dragging the point in the [polar-rectangular converter](!/complex-numbers/visual-tools/polar-rectangular).',
        visual: {
          caption:
            'The point at distance $r$ and angle $\\theta$ from the origin has coordinates $(r\\cos\\theta, r\\sin\\theta)$, the same way a point on the unit circle has coordinates $(\\cos\\theta, \\sin\\theta)$. The modulus only stretches the unit circle point outward. That is why the signs come for free: an angle in quadrant II already has a negative cosine, so the real part comes out negative on its own.',
        },
        pitfalls: [
          {
            title: 'Swapping cosine and sine',
            wrong: '$4\\,\\text{cis}\\,\\frac{5\\pi}{6} = 4\\sin\\frac{5\\pi}{6} + 4i\\cos\\frac{5\\pi}{6} = 2 - 2\\sqrt{3}i$',
            right: 'cosine gives the real part: $-2\\sqrt{3} + 2i$',
          },
          {
            title: 'Calculator in the wrong angle mode',
            wrong: '$4\\cos 60°$ in radian mode: $4\\cos(60) \\approx -3.81$',
            right: 'in degree mode $4\\cos 60° = 2$, and $4\\,\\text{cis}\\,60° = 2 + 2\\sqrt{3}i$',
          },
          {
            title: 'Multiplying only one part by r',
            wrong: '$6\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right) = 3 + \\frac{\\sqrt{3}}{2}i$',
            right: 'both parts are scaled: $3 + 3\\sqrt{3}i$',
          },
        ],
        related: ['rectangular-to-polar', 'exponential-form', 'which-form'],
        builtOn: [
          { label: 'Polar to rectangular conversion', url: ruleUrl('cx.polar-to-rectangular-conversion') },
          { label: 'Converting trigonometric to algebraic (lesson)', url: ruleUrl('lesson.cx.trigonometric-form.9') },
          { label: 'Exact values on the unit circle (lesson)', url: ruleUrl('lesson.trig.unit-circle.exact-values') },
        ],
      },
    },
    {
      id: 'exponential-form',
      slug: 'exponential-form',
      name: 'How to write a complex number in exponential form',
      description: 'Find $r$ and $\\theta$ in radians and write $re^{i\\theta}$; go back with Euler\'s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.',
      uses: ["Euler's formula", 'modulus', 'argument'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Write a Complex Number in Exponential Form | Learn Math Class',
        description: "Write a complex number as re^(iθ): find the modulus and the argument in radians, then use Euler's formula to go back to a + bi. Worked examples and mistakes.",
        keywords: ['how to write a complex number in exponential form', 'exponential form of a complex number', 'euler form complex number', 're^(i theta)', 'convert a + bi to exponential form'],
      },
      page: {
        h1: 'How to Write a Complex Number in Exponential Form',
        lead:
          'Exponential form $re^{i\\theta}$ is polar form written with one symbol: Euler\'s formula says $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Find the same $r$ and $\\theta$ as for polar form, with $\\theta$ in radians, and the rest is notation.',
        recognize:
          'The question asks for $re^{i\\theta}$, or gives a number such as $4e^{i\\pi/3}$ and asks for $a + bi$. Typical inputs: $1 - i$, $-2$, $-\\sqrt{3} + i$, $2e^{i5\\pi/6}$. Test: if you can find the polar form, you can write the exponential form; the only extra rule is radians in the exponent.',
        recognizeNote: `The exponential form and Euler's formula are defined in the ${link('lesson.cx.exponential-form.4', 'exponential form lesson')}.`,
        methods: [
          {
            name: 'From rectangular form',
            tag: 'usual',
            preferred: true,
            formula: 'a + bi = re^{i\\theta}, \\quad r = \\sqrt{a^2 + b^2}',
            body: 'Find $r$ and the argument with a quadrant check, as in [converting to polar form](!' + HUB + '/rectangular-to-polar).',
          },
          {
            name: 'From trigonometric form',
            tag: 'rewrite',
            formula: 'r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}',
            body: `Replace the bracket by $e^{i\\theta}$ using ${link('cx.eulers-formula', "Euler's formula")}; nothing is computed.`,
          },
        ],
        steps: {
          traceLabel: 'On $z = 1 - i$',
          items: [
            {
              title: 'Find the modulus.',
              body: 'The modulus becomes the factor in front of the exponential.',
              state: '$r = \\sqrt{1 + 1} = \\sqrt{2}$',
              atomic: 'modulus',
            },
            {
              title: 'Find the argument in radians.',
              body: 'Locate the quadrant from the signs of $a$ and $b$, then adjust the reference angle. Degrees do not belong in the exponent.',
              state: 'quadrant IV: $\\theta = -\\frac{\\pi}{4}$',
            },
            {
              title: 'Write r times e to the i theta.',
              body: 'Put the argument in the exponent next to $i$.',
              state: '$z = \\sqrt{2}\\,e^{-i\\pi/4}$',
            },
            {
              title: "Check with Euler's formula.",
              body: 'Expand $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ and multiply by $r$; you must get the original number back.',
              state: '$\\sqrt{2}\\left(\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}i\\right) = 1 - i$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a negative real number',
            badge: 'axis',
            lines: [
              { math: '$z = -2$: $r = 2$, $\\theta = \\pi$', why: 'negative real axis' },
              { math: '$-2 = 2e^{i\\pi}$', why: 'same as $e^{i\\pi} = -1$', answer: true },
            ],
          },
          {
            title: 'exponential to rectangular',
            badge: "Euler's formula",
            lines: [
              { math: '$4e^{i\\pi/3} = 4\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$', why: 'expand $e^{i\\theta}$' },
              { math: '$= 4\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right)$', why: 'exact values' },
              { math: '$2 + 2\\sqrt{3}i$', why: 'multiply by $4$', answer: true },
            ],
          },
          {
            title: 'second quadrant',
            badge: 'quadrant check',
            lines: [
              { math: '$z = -\\sqrt{3} + i$: $r = \\sqrt{3 + 1} = 2$', why: 'modulus' },
              { math: '$\\alpha = \\arctan\\frac{1}{\\sqrt{3}} = \\frac{\\pi}{6}$', why: 'reference angle' },
              { math: '$\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$', why: '$a < 0$, $b > 0$: quadrant II' },
              { math: '$z = 2e^{i5\\pi/6}$', why: 'assemble', answer: true },
            ],
          },
        ],
        examplesAfter: 'Turn the angle and watch $e^{i\\theta}$ trace the unit circle in the [Euler formula explorer](!/complex-numbers/visual-tools/euler-formula).',
        visual: {
          caption:
            'As $\\theta$ grows, $e^{i\\theta}$ walks around the unit circle at the point $(\\cos\\theta, \\sin\\theta)$; at $\\theta = \\pi$ it reaches $-1$, which is Euler\'s identity. The factor $r$ stretches that point out to distance $r$. Because angles sit in an exponent, multiplying two numbers adds their angles by the ordinary law $e^{x}e^{y} = e^{x + y}$, which is the main reason to use this form.',
        },
        pitfalls: [
          {
            title: 'Dropping the i in the exponent',
            wrong: '$1 + \\sqrt{3}i = 2e^{\\pi/3}$',
            right: '$1 + \\sqrt{3}i = 2e^{i\\pi/3}$; without $i$, $2e^{\\pi/3} \\approx 5.70$ is a real number',
          },
          {
            title: 'Putting degrees in the exponent',
            wrong: '$1 + \\sqrt{3}i = 2e^{60i}$',
            right: 'the exponent needs radians: $2e^{i\\pi/3}$; $e^{60i}$ means $60$ radians',
          },
          {
            title: 'Leaving a negative factor in front',
            wrong: '$-2e^{i\\pi/4}$ has modulus $-2$',
            right: 'absorb the minus sign as a half turn: $-2e^{i\\pi/4} = 2e^{-i3\\pi/4}$, modulus $2$',
          },
          {
            title: 'Reading a modulus from the exponent',
            wrong: '$|3e^{2i}| = 3e^{2}$',
            right: '$|e^{i\\theta}| = 1$ for every real $\\theta$, so $|3e^{2i}| = 3$',
          },
        ],
        related: ['rectangular-to-polar', 'multiply-divide-polar', 'which-form'],
        builtOn: [
          { label: "Euler's formula", url: ruleUrl('cx.eulers-formula') },
          { label: 'Exponential form', url: ruleUrl('cx.exponential-form') },
          { label: 'Converting between forms (lesson)', url: ruleUrl('lesson.cx.exponential-form.5') },
        ],
      },
    },
    {
      id: 'multiply-divide-polar',
      slug: 'multiply-divide-polar',
      name: 'How to multiply and divide complex numbers in polar form',
      description: 'Multiply or divide the moduli, add or subtract the arguments, and bring the angle back into $(-\\pi, \\pi]$.',
      uses: ['moduli multiply', 'arguments add', 'angle reduction'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Multiply and Divide Complex Numbers in Polar Form | Learn Math Class',
        description: 'Multiply and divide complex numbers in polar form: multiply or divide the moduli, add or subtract the angles, then reduce the angle. Examples and mistakes.',
        keywords: ['multiply complex numbers in polar form', 'divide complex numbers in polar form', 'polar form multiplication', 'complex numbers exponential form multiplication', 'moduli multiply arguments add'],
      },
      page: {
        h1: 'How to Multiply and Divide Complex Numbers in Polar Form',
        lead:
          'In polar form a product is two small jobs: multiply the moduli and add the arguments. A quotient divides the moduli and subtracts the arguments. No brackets to expand and no $i^2$ to track.',
        recognize:
          'The numbers are given as $r(\\cos\\theta + i\\sin\\theta)$, $r\\,\\text{cis}\\,\\theta$ or $re^{i\\theta}$, or their rectangular forms have standard angles: $3e^{i\\pi/4} \\cdot 2e^{i\\pi/2}$, $\\frac{10\\,\\text{cis}\\,(2\\pi/3)}{2\\,\\text{cis}\\,(\\pi/6)}$, $(1 + \\sqrt{3}i)(\\sqrt{3} + i)$. Test: you know (or can find quickly) each modulus and angle.',
        recognizeNote: `Products and quotients in polar form are explained in the ${link('lesson.cx.trigonometric-form.10', 'trigonometric form lesson')}.`,
        methods: [
          {
            name: 'Trigonometric form',
            tag: 'usual',
            preferred: true,
            formula: 'r_1\\,\\text{cis}\\,\\theta_1 \\cdot r_2\\,\\text{cis}\\,\\theta_2 = r_1 r_2\\,\\text{cis}(\\theta_1 + \\theta_2)',
            body: `Apply the ${link('cx.multiplication-in-polar-form', 'product rule')} or the ${link('cx.division-in-polar-form', 'quotient rule')} for polar form.`,
          },
          {
            name: 'Exponential form',
            tag: 'exponents',
            formula: 'r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2\\,e^{i(\\theta_1 + \\theta_2)}',
            body: `The same rule read as exponent laws (${link('lesson.cx.exponential-form.6', 'multiplication in exponential form')}).`,
          },
          {
            name: 'Rectangular form',
            tag: 'expand',
            formula: '(a + bi)(c + di) = (ac - bd) + (ad + bc)i',
            body: 'Better when the angles are not standard; see [multiplying complex numbers](!' + HUB + '/multiply-complex).',
          },
        ],
        steps: {
          traceLabel: 'On $(1 + \\sqrt{3}i)(\\sqrt{3} + i)$',
          items: [
            {
              title: 'Write both numbers in polar form.',
              body: 'Find each modulus and argument, as in [converting to polar form](!' + HUB + '/rectangular-to-polar).',
              state: '$2\\,\\text{cis}\\,\\frac{\\pi}{3}$ and $2\\,\\text{cis}\\,\\frac{\\pi}{6}$',
            },
            {
              title: 'Multiply or divide the moduli.',
              body: 'For a quotient, divide the first modulus by the second.',
              state: '$2 \\cdot 2 = 4$',
            },
            {
              title: 'Add or subtract the arguments.',
              body: 'Product: $\\theta_1 + \\theta_2$. Quotient: $\\theta_1 - \\theta_2$, numerator angle first.',
              state: '$\\frac{\\pi}{3} + \\frac{\\pi}{6} = \\frac{\\pi}{2}$',
            },
            {
              title: 'Reduce the angle.',
              body: 'Add or subtract $2\\pi$ until the angle lies in $(-\\pi, \\pi]$, if the question asks for the principal argument.',
              state: '$\\frac{\\pi}{2}$ is already in range: $4\\,\\text{cis}\\,\\frac{\\pi}{2}$',
            },
            {
              title: 'Convert back if needed.',
              body: 'Evaluate cosine and sine and multiply by the new modulus, as in [converting polar to rectangular form](!' + HUB + '/polar-to-rectangular).',
              state: '$4(0 + i) = 4i$',
            },
          ],
        },
        examples: [
          {
            title: 'a product in exponential form',
            badge: 'multiply',
            lines: [
              { math: '$3e^{i\\pi/4} \\cdot 2e^{i\\pi/2} = 6e^{i3\\pi/4}$', why: '$3 \\cdot 2$, $\\frac{\\pi}{4} + \\frac{\\pi}{2}$' },
              { math: '$= 6\\left(-\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i\\right)$', why: 'expand $e^{i3\\pi/4}$' },
              { math: '$-3\\sqrt{2} + 3\\sqrt{2}i$', why: 'multiply by $6$', answer: true },
            ],
          },
          {
            title: 'a quotient',
            badge: 'divide',
            lines: [
              { math: '$\\dfrac{10\\,\\text{cis}\\,\\frac{2\\pi}{3}}{2\\,\\text{cis}\\,\\frac{\\pi}{6}} = 5\\,\\text{cis}\\left(\\frac{2\\pi}{3} - \\frac{\\pi}{6}\\right)$', why: '$\\frac{10}{2}$, subtract the angles' },
              { math: '$= 5\\,\\text{cis}\\,\\frac{\\pi}{2}$', why: '$\\frac{4\\pi}{6} - \\frac{\\pi}{6} = \\frac{\\pi}{2}$' },
              { math: '$5i$', why: '$\\cos\\frac{\\pi}{2} = 0$, $\\sin\\frac{\\pi}{2} = 1$', answer: true },
            ],
          },
          {
            title: 'an angle past half a turn',
            badge: 'reduce',
            lines: [
              { math: '$2\\,\\text{cis}\\,\\frac{2\\pi}{3} \\cdot 3\\,\\text{cis}\\,\\frac{5\\pi}{6} = 6\\,\\text{cis}\\,\\frac{3\\pi}{2}$', why: '$\\frac{4\\pi}{6} + \\frac{5\\pi}{6} = \\frac{9\\pi}{6}$' },
              { math: '$\\frac{3\\pi}{2} - 2\\pi = -\\frac{\\pi}{2}$', why: 'bring into $(-\\pi, \\pi]$' },
              { math: '$6\\,\\text{cis}\\left(-\\frac{\\pi}{2}\\right) = -6i$', why: 'convert back', answer: true },
            ],
          },
        ],
        examplesAfter: 'Drag two points and watch the angles add in the [multiplication visualizer](!/complex-numbers/visual-tools/multiplication).',
        visual: {
          caption:
            'Multiplying by $r_2\\,\\text{cis}\\,\\theta_2$ stretches every point by $r_2$ and turns it by $\\theta_2$. Stretches combine by multiplying and turns combine by adding, so the product of two polar numbers has modulus $r_1r_2$ and angle $\\theta_1 + \\theta_2$. Dividing undoes the stretch and the turn, which is why the moduli divide and the angles subtract.',
        },
        pitfalls: [
          {
            title: 'Multiplying the angles',
            wrong: '$2\\,\\text{cis}\\,\\frac{\\pi}{3} \\cdot 2\\,\\text{cis}\\,\\frac{\\pi}{6} = 4\\,\\text{cis}\\,\\frac{\\pi^2}{18}$',
            right: 'angles add: $4\\,\\text{cis}\\,\\frac{\\pi}{2} = 4i$',
          },
          {
            title: 'Adding the moduli',
            wrong: '$3e^{i\\pi/4} \\cdot 2e^{i\\pi/2} = 5e^{i3\\pi/4}$',
            right: 'moduli multiply: $6e^{i3\\pi/4}$',
          },
          {
            title: 'Subtracting the angles in the wrong order',
            wrong: '$\\frac{10\\,\\text{cis}\\,(2\\pi/3)}{2\\,\\text{cis}\\,(\\pi/6)} = 5\\,\\text{cis}\\left(-\\frac{\\pi}{2}\\right) = -5i$',
            right: 'numerator angle minus denominator angle: $5\\,\\text{cis}\\,\\frac{\\pi}{2} = 5i$',
          },
        ],
        related: ['de-moivre-powers', 'multiply-complex', 'which-form'],
        builtOn: [
          { label: 'Multiplication in polar form', url: ruleUrl('cx.multiplication-in-polar-form') },
          { label: 'Division in polar form', url: ruleUrl('cx.division-in-polar-form') },
          { label: 'Argument of a product', url: ruleUrl('cx.argument-of-a-product') },
        ],
      },
    },
    {
      id: 'de-moivre-powers',
      slug: 'de-moivre-powers',
      name: "How to raise a complex number to a power with De Moivre's theorem",
      description: 'Write the number in polar form, raise the modulus to the power, multiply the angle by it, and convert back.',
      uses: ["De Moivre's theorem", 'polar form', 'angle reduction'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Raise a Complex Number to a Power (De Moivre's Theorem) | Learn Math Class",
        description: "Raise a complex number to a power with De Moivre's theorem: write it in polar form, raise r to n, multiply the angle by n, reduce, convert back. With examples.",
        keywords: ["de moivre's theorem powers", 'how to raise a complex number to a power', 'powers of complex numbers', '(1 + i)^10', "de moivre's theorem examples"],
      },
      page: {
        h1: "How to Raise a Complex Number to a Power with De Moivre's Theorem",
        lead:
          "Multiplying $a + bi$ by itself ten times is slow and error-prone. In polar form a power is two quick moves: raise the modulus to the power and multiply the angle by it. That is De Moivre's theorem.",
        recognize:
          'The question asks for a whole-number power of a complex number: $(1 + i)^{10}$, $(\\sqrt{3} - i)^6$, $\\left(2\\,\\text{cis}\\,\\frac{\\pi}{12}\\right)^6$, $(1 - \\sqrt{3}i)^5$. Test: the exponent is $4$ or more, or the number already has a standard angle. For a square or a cube with small parts, [multiplying out](!' + HUB + '/multiply-complex) is just as quick.',
        recognizeNote: `The theorem and its use for powers are explained in the ${link('lesson.cx.demoivre-theorem.4', "De Moivre's theorem lesson")}.`,
        methods: [
          {
            name: "De Moivre's theorem",
            tag: 'usual',
            preferred: true,
            formula: '\\big(r(\\cos\\theta + i\\sin\\theta)\\big)^n = r^n(\\cos n\\theta + i\\sin n\\theta)',
            body: `Apply ${link('cx.de-moivres-theorem', "De Moivre's theorem")} to the polar form.`,
          },
          {
            name: 'Repeated multiplication',
            tag: 'small powers',
            formula: 'z^3 = z^2 \\cdot z',
            body: 'For a square or a cube, expand and use $i^2 = -1$; for $z^4$, square twice.',
          },
        ],
        steps: {
          traceLabel: 'On $(1 + i)^{10}$',
          items: [
            {
              title: 'Write the base in polar form.',
              body: 'Find the modulus and the argument with a quadrant check, as in [converting to polar form](!' + HUB + '/rectangular-to-polar).',
              state: '$1 + i = \\sqrt{2}\\,\\text{cis}\\,\\frac{\\pi}{4}$',
            },
            {
              title: 'Raise the modulus to the power.',
              body: 'The modulus is a positive real number, so this is ordinary arithmetic.',
              state: '$(\\sqrt{2})^{10} = 2^5 = 32$',
            },
            {
              title: 'Multiply the argument by the power.',
              body: `This is the ${link('cx.argument-of-a-power', 'argument of a power')} rule.`,
              state: '$10 \\cdot \\frac{\\pi}{4} = \\frac{5\\pi}{2}$',
            },
            {
              title: 'Reduce the angle.',
              body: 'Subtract whole turns of $2\\pi$ until the angle is in $(-\\pi, \\pi]$.',
              state: '$\\frac{5\\pi}{2} - 2\\pi = \\frac{\\pi}{2}$',
            },
            {
              title: 'Convert back to a + bi.',
              body: 'Evaluate cosine and sine at the reduced angle and multiply by the new modulus.',
              state: '$32\\left(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}\\right) = 32i$',
            },
          ],
        },
        examples: [
          {
            title: 'already in polar form',
            badge: 'direct',
            lines: [
              { math: '$\\left(2\\,\\text{cis}\\,\\frac{\\pi}{12}\\right)^6 = 2^6\\,\\text{cis}\\,\\frac{6\\pi}{12}$', why: "De Moivre's theorem" },
              { math: '$= 64\\,\\text{cis}\\,\\frac{\\pi}{2}$', why: 'simplify the angle' },
              { math: '$64i$', why: 'convert back', answer: true },
            ],
          },
          {
            title: 'a fourth-quadrant base',
            badge: 'negative angle',
            lines: [
              { math: '$\\sqrt{3} - i = 2\\,\\text{cis}\\left(-\\frac{\\pi}{6}\\right)$', why: '$r = 2$, quadrant IV' },
              { math: '$(\\sqrt{3} - i)^6 = 64\\,\\text{cis}(-\\pi)$', why: '$2^6$, $6 \\cdot \\left(-\\frac{\\pi}{6}\\right)$' },
              { math: '$-64$', why: '$\\cos(-\\pi) = -1$, $\\sin(-\\pi) = 0$', answer: true },
            ],
          },
          {
            title: 'an angle that needs reducing',
            badge: 'reduce',
            lines: [
              { math: '$1 - \\sqrt{3}i = 2\\,\\text{cis}\\left(-\\frac{\\pi}{3}\\right)$', why: '$r = 2$, quadrant IV' },
              { math: '$(1 - \\sqrt{3}i)^5 = 32\\,\\text{cis}\\left(-\\frac{5\\pi}{3}\\right)$', why: '$2^5$, $5 \\cdot \\left(-\\frac{\\pi}{3}\\right)$' },
              { math: '$-\\frac{5\\pi}{3} + 2\\pi = \\frac{\\pi}{3}$', why: 'add one turn' },
              { math: '$32\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right) = 16 + 16\\sqrt{3}i$', why: 'convert back', answer: true },
            ],
          },
        ],
        examplesAfter: 'Watch the powers spiral out from the origin in the [De Moivre visualizer](!/complex-numbers/visual-tools/demoivre-visualizer).',
        visual: {
          caption:
            'Each multiplication by $z$ stretches by $r$ and turns by $\\theta$. Doing it $n$ times stretches by $r^n$ and turns by $n\\theta$, so the powers of $z$ lie on a spiral that winds around the origin. When $r = 1$ the spiral becomes the unit circle and the powers simply step around it, like the cycle $1, i, -1, -i$ of the powers of $i$.',
        },
        pitfalls: [
          {
            title: 'Raising each part to the power',
            wrong: '$(1 + i)^{10} = 1^{10} + i^{10} = 1 - 1 = 0$',
            right: 'use the polar form: $(1 + i)^{10} = 32i$',
          },
          {
            title: 'Multiplying the modulus by n',
            wrong: '$(\\sqrt{3} - i)^6 = 6 \\cdot 2\\,\\text{cis}(-\\pi) = -12$',
            right: 'the modulus is raised to the power: $2^6 = 64$, so the answer is $-64$',
          },
          {
            title: 'Taking the argument from the tangent alone',
            wrong: '$-1 + i = \\sqrt{2}\\,\\text{cis}\\left(-\\frac{\\pi}{4}\\right)$, so $(-1 + i)^3 = -2 - 2i$',
            right: 'quadrant II: $\\theta = \\frac{3\\pi}{4}$ and $(-1 + i)^3 = 2\\sqrt{2}\\,\\text{cis}\\,\\frac{9\\pi}{4} = 2 + 2i$',
          },
        ],
        related: ['nth-roots', 'multiply-divide-polar', 'which-form'],
        builtOn: [
          { label: "De Moivre's theorem", url: ruleUrl('cx.de-moivres-theorem') },
          { label: 'Power in polar form', url: ruleUrl('cx.power-in-polar-form') },
          { label: "De Moivre's formula (lesson)", url: ruleUrl('lesson.cx.demoivre-theorem.2') },
        ],
      },
    },
    {
      id: 'nth-roots',
      slug: 'nth-roots',
      name: 'How to find the nth roots of a complex number',
      description: 'Write $w$ in polar form, take the real $n$th root of its modulus, and spread $n$ angles $\\frac{\\varphi + 2\\pi k}{n}$ evenly around the circle.',
      uses: ['nth roots formula', 'polar form', 'roots of unity'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the nth Roots of a Complex Number | Learn Math Class',
        description: 'Find all n roots of a complex number: write it in polar form, take the nth root of the modulus, add 2πk to the angle before dividing by n. Examples, mistakes.',
        keywords: ['how to find nth roots of a complex number', 'cube roots of a complex number', 'solve z^n = w', 'roots of unity', 'complex roots formula'],
      },
      page: {
        h1: 'How to Find the nth Roots of a Complex Number',
        lead:
          'Every nonzero complex number has exactly $n$ different $n$th roots. They all have the same modulus, and their angles are spaced $\\frac{2\\pi}{n}$ apart, so they form a regular polygon around the origin.',
        recognize:
          'The question asks to solve $z^n = w$ or to find "all cube roots", "the fourth roots" or "the roots of unity": $z^3 = 8i$, $z^4 = 1$, $z^3 = -8$, $z^4 = -8 + 8\\sqrt{3}i$. Test: the answer is a list of $n$ numbers, not one. For a square root with whole-number parts, [the algebraic method](!' + HUB + '/complex-square-roots) is often faster.',
        recognizeNote: `The roots formula is derived in the ${link('lesson.cx.demoivre-theorem.6', "De Moivre's theorem lesson")}.`,
        steps: {
          traceLabel: 'On $z^3 = 8i$',
          items: [
            {
              title: 'Write w in polar form.',
              body: 'Find the modulus $R$ and the argument $\\varphi$ of the right-hand side.',
              state: '$8i = 8\\,\\text{cis}\\,\\frac{\\pi}{2}$',
            },
            {
              title: 'Take the real nth root of the modulus.',
              body: 'Every root has this same modulus, the positive real $\\sqrt[n]{R}$.',
              state: '$\\sqrt[3]{8} = 2$',
            },
            {
              title: 'List the n angles.',
              body: `Add $2\\pi k$ before dividing by $n$, for $k = 0, 1, \\ldots, n - 1$ (${link('cx.nth-roots-formula', 'nth roots formula')}).`,
              state: '$\\frac{\\pi/2 + 2\\pi k}{3}$: $\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$',
            },
            {
              title: 'Convert each root to a + bi.',
              body: 'Evaluate cosine and sine at each angle and multiply by the common modulus.',
              state: '$\\sqrt{3} + i$, $-\\sqrt{3} + i$, $-2i$',
            },
            {
              title: 'Check one root.',
              body: 'Raise a root to the $n$th power; you must get $w$. The roots of a real $w$ also come in conjugate pairs.',
              state: '$(-2i)^3 = -8i^3 = 8i$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'fourth roots of unity',
            badge: 'unit circle',
            lines: [
              { math: '$z^4 = 1 = \\text{cis}\\,0$', why: '$R = 1$, $\\varphi = 0$' },
              { math: 'angles $\\frac{2\\pi k}{4} = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$', why: 'quarter turns' },
              { math: '$z = 1,\\ i,\\ -1,\\ -i$', why: 'a square on the circle', answer: true },
            ],
          },
          {
            title: 'cube roots of a negative number',
            badge: 'real w',
            lines: [
              { math: '$z^3 = -8 = 8\\,\\text{cis}\\,\\pi$', why: 'negative real axis' },
              { math: 'modulus $2$, angles $\\frac{\\pi + 2\\pi k}{3} = \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$', why: '$k = 0, 1, 2$' },
              { math: '$z = 1 + \\sqrt{3}i,\\ -2,\\ 1 - \\sqrt{3}i$', why: 'one real root, one conjugate pair', answer: true },
            ],
          },
          {
            title: 'fourth roots of a complex number',
            badge: 'general w',
            lines: [
              { math: '$-8 + 8\\sqrt{3}i = 16\\,\\text{cis}\\,\\frac{2\\pi}{3}$', why: '$R = \\sqrt{64 + 192} = 16$, quadrant II' },
              { math: 'modulus $\\sqrt[4]{16} = 2$', why: 'real fourth root' },
              { math: 'angles $\\frac{2\\pi/3 + 2\\pi k}{4} = \\frac{\\pi}{6}, \\frac{2\\pi}{3}, \\frac{7\\pi}{6}, \\frac{5\\pi}{3}$', why: 'step $\\frac{\\pi}{2}$' },
              { math: '$z = \\sqrt{3} + i,\\ -1 + \\sqrt{3}i,\\ -\\sqrt{3} - i,\\ 1 - \\sqrt{3}i$', why: 'convert each', answer: true },
            ],
          },
        ],
        examplesAfter: 'See the four roots of $z^4 + 1 = 0$ placed on the unit circle in the [complex numbers diagrams](!/complex-numbers/visual-tools/diagrams).',
        visual: {
          caption:
            'Raising to the $n$th power multiplies every angle by $n$. So any angle that becomes $\\varphi$ after $n$ turns-worth of multiplying works, and adding a full turn $2\\pi$ to $\\varphi$ before dividing gives a new angle each time. After $n$ steps the angles repeat. The roots therefore sit at equal steps of $\\frac{2\\pi}{n}$ on one circle of radius $\\sqrt[n]{R}$: three roots make a triangle, four a square.',
        },
        pitfalls: [
          {
            title: 'Adding the full turn after dividing',
            wrong: '$z^3 = 8i$: angles $\\frac{\\pi}{6} + 2\\pi k$, one root three times',
            right: 'add before dividing: $\\frac{\\pi/2 + 2\\pi k}{3} = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$',
          },
          {
            title: 'Stopping at the real root',
            wrong: '$z^3 = -8$ has the solution $z = -2$',
            right: 'there are three: $-2$ and $1 \\pm \\sqrt{3}i$',
          },
          {
            title: 'Dividing the modulus by n',
            wrong: '$z^3 = 8i$: every root has modulus $\\frac{8}{3}$',
            right: 'take the real cube root: $\\sqrt[3]{8} = 2$',
          },
          {
            title: 'Letting k run up to n',
            wrong: '$k = 0, 1, 2, 3$ for cube roots',
            right: '$k = 3$ gives $\\frac{13\\pi}{6}$, the same point as $\\frac{\\pi}{6}$; stop at $k = n - 1$',
          },
        ],
        related: ['complex-square-roots', 'de-moivre-powers', 'polynomial-complex-roots'],
        builtOn: [
          { label: 'nth roots formula', url: ruleUrl('cx.nth-roots-formula') },
          { label: 'Roots of unity', url: ruleUrl('cx.roots-of-unity') },
          { label: 'Geometric interpretation of roots (lesson)', url: ruleUrl('lesson.cx.demoivre-theorem.7') },
        ],
      },
    },
    {
      id: 'complex-square-roots',
      slug: 'complex-square-roots',
      name: 'How to find the square roots of a complex number',
      description: 'Set $(x + yi)^2 = a + bi$, use $x^2 - y^2 = a$ and $x^2 + y^2 = |w|$, and pick the signs from $2xy = b$.',
      uses: ['equality of complex numbers', 'modulus', 'polar halving'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Square Roots of a Complex Number | Learn Math Class',
        description: 'Find both square roots of a + bi: set (x + yi)² = a + bi, compare parts, use the modulus to get x² and y², and pick the signs. Worked examples and mistakes.',
        keywords: ['square root of a complex number', 'how to find the square root of a + bi', 'square roots of complex numbers', 'sqrt of i', 'complex square root algebraic method'],
      },
      page: {
        h1: 'How to Find the Square Roots of a Complex Number',
        lead:
          'Every nonzero complex number has two square roots, $\\pm(x + yi)$. Find them by comparing parts of $(x + yi)^2 = a + bi$; the modulus gives a third equation that makes the system easy.',
        recognize:
          'You need $\\sqrt{w}$ for a complex $w$, most often a discriminant inside the quadratic formula: $\\sqrt{-3 + 4i}$, $\\sqrt{2i}$, $\\sqrt{-5 - 12i}$, $\\sqrt{15 + 8i}$. Test: $w$ has whole-number parts and $a^2 + b^2$ is a perfect square, so the roots will have whole or simple parts.',
        recognizeNote: `Equality of complex numbers, which drives this method, is defined in the ${link('lesson.cx.algebraic-form.3', 'algebraic form lesson')}.`,
        methods: [
          {
            name: 'Compare real and imaginary parts',
            tag: 'usual',
            preferred: true,
            formula: 'x^2 - y^2 = a, \\quad 2xy = b, \\quad x^2 + y^2 = \\sqrt{a^2 + b^2}',
            body: `Expand, then use ${link('cx.equality-of-complex-numbers', 'equality of complex numbers')} and the modulus.`,
          },
          {
            name: 'Halve the angle in polar form',
            tag: 'polar',
            formula: '\\sqrt{R}\\,\\text{cis}\\,\\frac{\\varphi}{2}, \\quad \\sqrt{R}\\,\\text{cis}\\left(\\frac{\\varphi}{2} + \\pi\\right)',
            body: 'The case $n = 2$ of [finding nth roots](!' + HUB + '/nth-roots); best when $w$ has a standard angle.',
          },
        ],
        steps: {
          traceLabel: 'On $\\sqrt{-3 + 4i}$',
          items: [
            {
              title: 'Set up the square.',
              body: 'Write the unknown root as $x + yi$ with real $x$ and $y$ and expand its square.',
              state: '$(x + yi)^2 = (x^2 - y^2) + 2xyi = -3 + 4i$',
            },
            {
              title: 'Compare the parts.',
              body: 'Real parts are equal and imaginary parts are equal.',
              state: '$x^2 - y^2 = -3$, $2xy = 4$',
            },
            {
              title: 'Add the modulus equation.',
              body: 'Since $|z|^2 = |w|$, the squares add up to the modulus of $w$.',
              state: '$x^2 + y^2 = \\sqrt{9 + 16} = 5$',
              atomic: 'modulus',
            },
            {
              title: 'Solve for the squares and pick the signs.',
              body: 'Add and subtract the two equations. Then $2xy = b$ decides the signs: $x$ and $y$ have the same sign if $b > 0$, opposite signs if $b < 0$.',
              state: '$x^2 = 1$, $y^2 = 4$; $xy = 2 > 0$: $\\pm(1 + 2i)$',
            },
            {
              title: 'Check by squaring.',
              body: 'Square one root; the other is its negative.',
              state: '$(1 + 2i)^2 = 1 + 4i - 4 = -3 + 4i$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'the square roots of 2i',
            badge: 'real part zero',
            lines: [
              { math: '$x^2 - y^2 = 0$, $2xy = 2$, $x^2 + y^2 = 2$', why: '$a = 0$, $b = 2$, $|w| = 2$' },
              { math: '$x^2 = 1$, $y^2 = 1$, $xy = 1 > 0$', why: 'same signs' },
              { math: '$\\sqrt{2i} = \\pm(1 + i)$', why: '$(1 + i)^2 = 2i$', answer: true },
            ],
          },
          {
            title: 'a negative imaginary part',
            badge: 'opposite signs',
            lines: [
              { math: '$w = -5 - 12i$: $|w| = 13$', why: '$\\sqrt{25 + 144}$' },
              { math: '$x^2 = \\frac{13 - 5}{2} = 4$, $y^2 = \\frac{13 + 5}{2} = 9$', why: 'add and subtract' },
              { math: '$xy = -6 < 0$: $\\pm(2 - 3i)$', why: '$(2 - 3i)^2 = -5 - 12i$', answer: true },
            ],
          },
          {
            title: 'a standard angle',
            badge: 'polar',
            lines: [
              { math: '$w = -8 - 8\\sqrt{3}i = 16\\,\\text{cis}\\left(-\\frac{2\\pi}{3}\\right)$', why: 'quadrant III' },
              { math: '$\\sqrt{16} = 4$, half angle $-\\frac{\\pi}{3}$', why: 'halve the angle' },
              { math: '$4\\,\\text{cis}\\left(-\\frac{\\pi}{3}\\right) = 2 - 2\\sqrt{3}i$', why: 'convert back' },
              { math: '$\\pm(2 - 2\\sqrt{3}i)$', why: 'second root opposite', answer: true },
            ],
          },
        ],
        examplesAfter: 'Square your answer in the [De Moivre visualizer](!/complex-numbers/visual-tools/demoivre-visualizer) to see it land on $w$.',
        visual: {
          caption:
            'Squaring doubles the angle and squares the modulus. So a square root halves the angle and takes the square root of the modulus. Halving can start from $\\varphi$ or from $\\varphi + 2\\pi$, which gives two answers half a turn apart: the two square roots are always opposite points, $z$ and $-z$. The algebraic method finds the same two points without computing any angle.',
        },
        pitfalls: [
          {
            title: 'Splitting the root over a sum',
            wrong: '$\\sqrt{-3 + 4i} = \\sqrt{-3} + \\sqrt{4i}$',
            right: 'solve $(x + yi)^2 = -3 + 4i$: the roots are $\\pm(1 + 2i)$',
          },
          {
            title: 'Ignoring the sign of b',
            wrong: '$\\sqrt{-5 - 12i} = \\pm(2 + 3i)$',
            right: '$(2 + 3i)^2 = -5 + 12i$; with $b < 0$ the signs differ: $\\pm(2 - 3i)$',
          },
          {
            title: 'Using the modulus squared',
            wrong: '$x^2 + y^2 = |w|^2 = 169$ for $w = -5 - 12i$',
            right: '$|x + yi|^2 = |w|$, so $x^2 + y^2 = 13$',
          },
          {
            title: 'Giving only one root',
            wrong: '$\\sqrt{-3 + 4i} = 1 + 2i$ only',
            right: 'both $1 + 2i$ and $-1 - 2i$ square to $-3 + 4i$',
          },
        ],
        related: ['quadratic-complex-roots', 'nth-roots', 'which-form'],
        builtOn: [
          { label: 'Equality of complex numbers', url: ruleUrl('cx.equality-of-complex-numbers') },
          { label: 'Modulus squared', url: ruleUrl('cx.modulus-squared') },
          { label: 'nth roots formula', url: ruleUrl('cx.nth-roots-formula') },
        ],
      },
    },
    {
      id: 'quadratic-complex-roots',
      slug: 'quadratic-complex-roots',
      name: 'How to solve a quadratic equation with complex roots',
      description: 'Use the quadratic formula; a negative discriminant gives $\\sqrt{-k} = i\\sqrt{k}$, a complex one needs a complex square root.',
      uses: ['quadratic formula', 'square root of a negative', "Vieta's formulas"],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a Quadratic Equation with Complex Roots | Learn Math Class',
        description: 'Solve quadratics with complex roots: compute the discriminant, write the square root of a negative with i, apply the quadratic formula, and check with Vieta.',
        keywords: ['quadratic equation complex roots', 'how to solve quadratics with complex solutions', 'negative discriminant', 'quadratic formula complex numbers', 'complex conjugate roots'],
      },
      page: {
        h1: 'How to Solve a Quadratic Equation with Complex Roots',
        lead:
          'The quadratic formula works for every quadratic over the complex numbers. When the discriminant is negative, its square root is $i$ times a real root, and the two solutions come out as a conjugate pair.',
        recognize:
          'A quadratic $az^2 + bz + c = 0$ with no real solutions, or with complex coefficients: $z^2 - 4z + 13 = 0$, $z^2 + 9 = 0$, $2z^2 - 2z + 5 = 0$, $z^2 + z + (1 - i) = 0$. Test: compute $\\Delta = b^2 - 4ac$ first; $\\Delta < 0$ or a non-real $\\Delta$ means complex roots.',
        recognizeNote: `Quadratics over the complex numbers are covered in the ${link('lesson.cx.equations-polynomials.6', 'complex equations lesson')}.`,
        methods: [
          {
            name: 'Quadratic formula',
            tag: 'usual',
            preferred: true,
            formula: 'z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
            body: `The ${link('cx.quadratic-formula-in-complex', 'quadratic formula')} holds unchanged; see also [using the quadratic formula](!/algebra/equations/methods/quadratic-formula).`,
          },
          {
            name: 'Completing the square',
            tag: 'vertex form',
            formula: 'z^2 - 4z + 13 = 0 \\;\\Rightarrow\\; (z - 2)^2 = -9',
            body: 'Isolate the square and take $\\pm$ the square root, as in [completing the square](!/algebra/equations/methods/completing-the-square).',
          },
        ],
        steps: {
          traceLabel: 'On $z^2 - 4z + 13 = 0$',
          items: [
            {
              title: 'Compute the discriminant.',
              body: 'Read $a$, $b$, $c$ with their signs and find $\\Delta = b^2 - 4ac$.',
              state: '$\\Delta = 16 - 52 = -36$',
            },
            {
              title: 'Take the square root of the discriminant.',
              body: `For $\\Delta < 0$, use the ${link('cx.square-root-of-negative', 'square root of a negative')}: $\\sqrt{-k} = i\\sqrt{k}$. For a non-real $\\Delta$, use [complex square roots](!${HUB}/complex-square-roots).`,
              state: '$\\sqrt{-36} = 6i$',
            },
            {
              title: 'Apply the quadratic formula.',
              body: 'Divide both terms of the numerator by $2a$.',
              state: '$z = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$',
            },
            {
              title: 'Check with the sum and product of the roots.',
              body: `By ${link('cx.vietas-quadratic', "Vieta's formulas")} the sum is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$.`,
              state: 'sum $4$ ✓, product $4 + 9 = 13$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'no linear term',
            badge: 'b = 0',
            lines: [
              { math: '$z^2 + 9 = 0 \\Rightarrow z^2 = -9$', why: 'isolate $z^2$' },
              { math: '$z = \\pm\\sqrt{-9} = \\pm 3i$', why: '$\\sqrt{-9} = 3i$', answer: true },
            ],
          },
          {
            title: 'a leading coefficient',
            badge: 'a ≠ 1',
            lines: [
              { math: '$2z^2 - 2z + 5 = 0$: $\\Delta = 4 - 40 = -36$', why: '$a = 2$, $b = -2$, $c = 5$' },
              { math: '$z = \\frac{2 \\pm 6i}{4}$', why: '$2a = 4$' },
              { math: '$z = \\frac{1}{2} \\pm \\frac{3}{2}i$', why: 'divide both terms', answer: true },
            ],
          },
          {
            title: 'a complex coefficient',
            badge: 'complex Δ',
            lines: [
              { math: '$z^2 + z + (1 - i) = 0$: $\\Delta = 1 - 4(1 - i) = -3 + 4i$', why: 'discriminant is not real' },
              { math: '$\\sqrt{-3 + 4i} = \\pm(1 + 2i)$', why: 'complex square root' },
              { math: '$z = \\frac{-1 \\pm (1 + 2i)}{2}$', why: 'quadratic formula' },
              { math: '$z = i$ or $z = -1 - i$', why: 'not a conjugate pair', answer: true },
            ],
          },
        ],
        examplesAfter: 'Plot a conjugate pair of roots and see the mirror symmetry in the [complex number explorer](!/complex-numbers/visual-tools/complex-explorer).',
        visual: {
          caption:
            'With real coefficients, the formula gives $-\\frac{b}{2a} \\pm$ something. When $\\Delta < 0$ that something is purely imaginary, so the two roots sit straight above and below the point $-\\frac{b}{2a}$ on the real axis: a conjugate pair, mirror images in the real axis. That is the complex version of the parabola never touching the $x$-axis. With complex coefficients the symmetry is lost, and the roots can be anywhere.',
        },
        pitfalls: [
          {
            title: 'Writing the root of a negative without i',
            wrong: '$\\sqrt{-36} = -6$',
            right: '$\\sqrt{-36} = 6i$, since $(6i)^2 = -36$',
          },
          {
            title: 'Dividing only one term by 2a',
            wrong: '$z = \\frac{4 \\pm 6i}{2} = 4 \\pm 3i$',
            right: 'both terms: $z = 2 \\pm 3i$',
          },
          {
            title: 'Expecting a conjugate pair with complex coefficients',
            wrong: '$z^2 + z + (1 - i) = 0$ has roots $i$ and $-i$',
            right: '$-i$ gives $-1 - i + 1 - i = -2i \\neq 0$; the roots are $i$ and $-1 - i$',
          },
        ],
        related: ['complex-square-roots', 'polynomial-complex-roots', 'which-form'],
        builtOn: [
          { label: 'Quadratic formula in complex numbers', url: ruleUrl('cx.quadratic-formula-in-complex') },
          { label: 'Square root of a negative', url: ruleUrl('cx.square-root-of-negative') },
          { label: "Vieta's formulas for quadratics", url: ruleUrl('cx.vietas-quadratic') },
        ],
      },
    },
    {
      id: 'polynomial-complex-roots',
      slug: 'polynomial-complex-roots',
      name: 'How to find all complex roots of a polynomial',
      description: 'Expect $n$ roots, peel off a real root or a conjugate pair by division, and solve the last quadratic over the complex numbers.',
      uses: ['fundamental theorem of algebra', 'conjugate root theorem', 'synthetic division', 'quadratic formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find All Complex Roots of a Polynomial | Learn Math Class',
        description: 'Find all complex roots of a polynomial: count n roots, find a real root or use a conjugate pair, divide it out, and solve the last quadratic. Worked examples.',
        keywords: ['how to find complex roots of a polynomial', 'complex zeros of a polynomial', 'conjugate root theorem', 'find all zeros given a complex zero', 'fundamental theorem of algebra examples'],
      },
      page: {
        h1: 'How to Find All Complex Roots of a Polynomial',
        lead:
          'A polynomial of degree $n$ has exactly $n$ complex roots, counted with multiplicity. Peel them off a few at a time: a real root or a conjugate pair lowers the degree, until a quadratic is left for the quadratic formula.',
        recognize:
          'The question asks for "all zeros", "all complex solutions" or gives one complex root and asks for the rest: $z^3 - 3z^2 + 7z - 5 = 0$, $z^3 - 8 = 0$, "$2 + i$ is a root of $z^3 - 5z^2 + 9z - 5$". Test: the coefficients are real (needed for conjugate pairs) and the degree tells you how many roots to find.',
        recognizeNote: `Roots of polynomials over the complex numbers are covered in the ${link('lesson.cx.equations-polynomials.5', 'polynomials with real coefficients lesson')}.`,
        methods: [
          {
            name: 'Find a real root first',
            tag: 'usual',
            preferred: true,
            formula: 'p(r) = 0 \\;\\Rightarrow\\; p(z) = (z - r)\\,q(z)',
            body: 'Test candidates with the [rational root test](!/algebra/polynomials/methods/rational-root-test), then divide.',
          },
          {
            name: 'Use a given complex root',
            tag: 'conjugate pair',
            formula: '(z - w)(z - \\overline{w}) = z^2 - 2\\,\\text{Re}(w)\\,z + |w|^2',
            body: `By the ${link('cx.conjugate-root-theorem', 'conjugate root theorem')}, $\\overline{w}$ is a root too; divide by this real quadratic.`,
          },
          {
            name: 'Factor a pattern',
            tag: 'patterns',
            formula: 'z^3 - a^3 = (z - a)(z^2 + az + a^2)',
            body: 'Differences of cubes and quadratics in $z^2$ split at once; see [sum and difference of cubes](!/algebra/polynomials/methods/sum-difference-of-cubes).',
          },
        ],
        steps: {
          traceLabel: 'On $p(z) = z^3 - 3z^2 + 7z - 5$',
          items: [
            {
              title: 'Count the roots.',
              body: `By the ${link('cx.fundamental-theorem-of-algebra', 'fundamental theorem of algebra')} a degree-$n$ polynomial has $n$ roots in $\\mathbb{C}$.`,
              state: 'degree $3$: three roots',
            },
            {
              title: 'Find one root.',
              body: 'Try the rational candidates (divisors of the constant term over divisors of the leading coefficient), or use a root you were given.',
              state: '$p(1) = 1 - 3 + 7 - 5 = 0$',
            },
            {
              title: 'Divide it out.',
              body: 'Use [synthetic division](!/algebra/polynomials/methods/synthetic-division) by $z - r$, or long division by a quadratic factor.',
              state: '$p(z) = (z - 1)(z^2 - 2z + 5)$',
            },
            {
              title: 'Solve the quadratic factor.',
              body: 'Use the quadratic formula; a negative discriminant gives a conjugate pair, as in [quadratics with complex roots](!' + HUB + '/quadratic-complex-roots).',
              state: '$z = \\frac{2 \\pm \\sqrt{-16}}{2} = 1 \\pm 2i$',
            },
            {
              title: 'List all roots.',
              body: 'Check that the count matches the degree and that non-real roots come in conjugate pairs.',
              state: '$z = 1,\\ 1 + 2i,\\ 1 - 2i$',
            },
          ],
        },
        examples: [
          {
            title: 'a difference of cubes',
            badge: 'pattern',
            lines: [
              { math: '$z^3 - 8 = (z - 2)(z^2 + 2z + 4)$', why: 'difference of cubes' },
              { math: '$z^2 + 2z + 4 = 0$: $z = \\frac{-2 \\pm \\sqrt{-12}}{2}$', why: '$\\Delta = 4 - 16$' },
              { math: '$z = 2,\\ -1 + \\sqrt{3}i,\\ -1 - \\sqrt{3}i$', why: '$\\sqrt{-12} = 2\\sqrt{3}i$', answer: true },
            ],
          },
          {
            title: 'one complex root given',
            badge: 'conjugate pair',
            lines: [
              { math: '$2 + i$ is a root of $z^3 - 5z^2 + 9z - 5$, so $2 - i$ is too', why: 'real coefficients' },
              { math: '$(z - (2 + i))(z - (2 - i)) = z^2 - 4z + 5$', why: 'sum $4$, product $5$' },
              { math: '$z^3 - 5z^2 + 9z - 5 = (z^2 - 4z + 5)(z - 1)$', why: 'divide' },
              { math: '$z = 2 + i,\\ 2 - i,\\ 1$', why: 'three roots', answer: true },
            ],
          },
          {
            title: 'a quartic with two pairs',
            badge: 'degree 4',
            lines: [
              { math: '$2i$ is a root of $z^4 - 2z^3 + 6z^2 - 8z + 8$', why: 'given' },
              { math: '$(z - 2i)(z + 2i) = z^2 + 4$', why: 'conjugate pair' },
              { math: '$z^4 - 2z^3 + 6z^2 - 8z + 8 = (z^2 + 4)(z^2 - 2z + 2)$', why: 'divide' },
              { math: '$z = \\pm 2i,\\ 1 \\pm i$', why: '$z^2 - 2z + 2$: $\\Delta = -4$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See why conjugate roots mirror each other across the real axis in the [complex conjugate explorer](!/complex-numbers/visual-tools/complex-conjugate).',
        visual: {
          caption:
            'A polynomial with real coefficients does not change when you conjugate everything, so if $w$ makes it zero, so does $\\overline{w}$. On the plane the non-real roots therefore come in mirror pairs across the real axis, and each pair multiplies to a real quadratic. A real cubic has room for at most one such pair, which is why it always has at least one real root.',
        },
        pitfalls: [
          {
            title: 'Stopping at the real roots',
            wrong: '$z^3 - 8 = 0$ has the only solution $z = 2$',
            right: 'degree $3$ means three roots: $2$ and $-1 \\pm \\sqrt{3}i$',
          },
          {
            title: 'Taking the wrong conjugate',
            wrong: 'if $2 + i$ is a root, so is $-2 + i$',
            right: 'the conjugate changes only the sign of the imaginary part: $2 - i$',
          },
          {
            title: 'Pairing roots without real coefficients',
            wrong: '$-i$ is a root of $z^2 + 2iz - 1$, so $i$ is too',
            right: 'the coefficient $2i$ is not real; $z^2 + 2iz - 1 = (z + i)^2$ and $-i$ is the only root',
          },
        ],
        related: ['quadratic-complex-roots', 'nth-roots', 'complex-square-roots'],
        builtOn: [
          { label: 'Fundamental theorem of algebra', url: ruleUrl('cx.fundamental-theorem-of-algebra') },
          { label: 'Conjugate root theorem', url: ruleUrl('cx.conjugate-root-theorem') },
          { label: 'Factoring polynomials over C (lesson)', url: ruleUrl('lesson.cx.equations-polynomials.3') },
        ],
      },
    },
    {
      id: 'plot-on-argand-plane',
      slug: 'plot-on-argand-plane',
      name: 'How to plot complex numbers on the Argand plane',
      description: 'Plot $a + bi$ as the point $(a, b)$: real part across, imaginary part up; read off the modulus, the conjugate and sums from the picture.',
      uses: ['real and imaginary parts', 'modulus', 'conjugate reflection'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Plot Complex Numbers on the Argand Plane | Learn Math Class',
        description: 'Plot complex numbers on the Argand plane: real part on the horizontal axis, imaginary part on the vertical axis, then read the modulus, conjugate and sums.',
        keywords: ['how to plot complex numbers', 'argand diagram', 'complex plane plotting', 'graph a + bi', 'plot complex conjugate'],
      },
      page: {
        h1: 'How to Plot Complex Numbers on the Argand Plane',
        lead:
          'The Argand plane draws $z = a + bi$ as the point $(a, b)$: the real part goes across and the imaginary part goes up. Once a number is a point, its modulus is a distance, its conjugate is a reflection and a sum is a parallelogram.',
        recognize:
          'The question says "plot", "represent on the complex plane" or "sketch on an Argand diagram", or asks where $z$, $\\overline{z}$ or $z_1 + z_2$ lie: $-3 + 2i$, $4i$, $2 - 3i$, $(1 + 2i) + (3 - i)$. Test: identify $\\text{Re}(z)$ and $\\text{Im}(z)$; the imaginary part is the real number in front of $i$.',
        recognizeNote: `The complex plane and its axes are introduced in the ${link('lesson.cx.geometric-representation.3', 'complex plane lesson')}.`,
        methods: [
          {
            name: 'As a point',
            tag: 'usual',
            preferred: true,
            formula: 'a + bi \\;\\longleftrightarrow\\; (a, b)',
            body: `Use the ${link('cx.real-and-imaginary-parts', 'real and imaginary parts')} as coordinates.`,
          },
          {
            name: 'As a vector',
            tag: 'arrows',
            formula: 'z_1 + z_2 \\;\\longleftrightarrow\\; \\text{tip-to-tail arrows}',
            body: `Draw an arrow from the origin; sums and differences follow the parallelogram rule (${link('lesson.cx.geometric-representation.4', 'complex numbers as vectors')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $z = -3 + 2i$',
          items: [
            {
              title: 'Read the real and imaginary parts.',
              body: 'The imaginary part is the coefficient of $i$, without the $i$.',
              state: '$\\text{Re}(z) = -3$, $\\text{Im}(z) = 2$',
            },
            {
              title: 'Plot the point.',
              body: 'Move along the real (horizontal) axis by $a$, then parallel to the imaginary (vertical) axis by $b$.',
              state: 'point $(-3, 2)$, quadrant II',
            },
            {
              title: 'Read the distance from the origin.',
              body: 'The modulus is the length of the segment from $0$ to the point.',
              state: '$|z| = \\sqrt{9 + 4} = \\sqrt{13}$',
              atomic: 'modulus',
            },
            {
              title: 'Add related points if asked.',
              body: 'The conjugate is the reflection in the real axis; $-z$ is the reflection through the origin.',
              state: '$\\overline{z} = -3 - 2i$ at $(-3, -2)$; $-z$ at $(3, -2)$',
              atomic: 'complex-conjugate',
            },
          ],
        },
        examples: [
          {
            title: 'points on the axes',
            badge: 'axes',
            lines: [
              { math: '$4i = 0 + 4i$: point $(0, 4)$', why: 'pure imaginary: vertical axis' },
              { math: '$-2 = -2 + 0i$: point $(-2, 0)$', why: 'real: horizontal axis' },
              { math: '$4i$ at $(0, 4)$, $-2$ at $(-2, 0)$', why: 'one coordinate is zero', answer: true },
            ],
          },
          {
            title: 'a number, its conjugate and its negative',
            badge: 'reflections',
            lines: [
              { math: '$z = 2 - 3i$: point $(2, -3)$', why: 'quadrant IV' },
              { math: '$\\overline{z} = 2 + 3i$: point $(2, 3)$', why: 'mirror in the real axis' },
              { math: '$-z = -2 + 3i$: point $(-2, 3)$', why: 'half turn about $0$', answer: true },
            ],
          },
          {
            title: 'a sum and a distance',
            badge: 'vectors',
            lines: [
              { math: '$z_1 = 1 + 2i$ at $(1, 2)$, $z_2 = 3 - i$ at $(3, -1)$', why: 'plot both' },
              { math: '$z_1 + z_2 = 4 + i$ at $(4, 1)$', why: 'fourth corner of the parallelogram' },
              { math: '$|z_1 - z_2| = |-2 + 3i| = \\sqrt{13}$', why: 'distance between the points', answer: true },
            ],
          },
        ],
        examplesAfter: 'Drag points and read the parts live in the [complex number explorer](!/complex-numbers/visual-tools/complex-explorer), or measure distances with the [distance and midpoint tool](!/complex-numbers/visual-tools/distance-midpoint).',
        visual: {
          caption:
            'The complex plane is the ordinary coordinate plane with new names: the $x$-axis becomes the real axis and the $y$-axis the imaginary axis. Every algebraic fact turns into a picture. Adding moves tip to tail, the modulus is the length of the arrow, the conjugate flips the arrow over the real axis, and $|z_1 - z_2|$ is the distance between two points.',
        },
        pitfalls: [
          {
            title: 'Swapping the axes',
            wrong: '$2 - 3i$ at the point $(-3, 2)$',
            right: 'real part across, imaginary part up: $(2, -3)$',
          },
          {
            title: 'Reflecting the conjugate in the wrong axis',
            wrong: '$\\overline{2 - 3i}$ at $(-2, -3)$',
            right: '$\\overline{2 - 3i} = 2 + 3i$ at $(2, 3)$, the mirror in the real axis',
          },
          {
            title: 'Putting a pure imaginary number on the real axis',
            wrong: '$4i$ at $(4, 0)$',
            right: '$4i = 0 + 4i$ at $(0, 4)$',
          },
          {
            title: 'Ordering complex numbers by position',
            wrong: '$1 + 3i > 2 + i$ because it is higher',
            right: 'complex numbers have no order; compare moduli instead: $\\sqrt{10} > \\sqrt{5}$',
          },
        ],
        related: ['rectangular-to-polar', 'multiply-complex', 'which-form'],
        builtOn: [
          { label: 'Real and imaginary parts', url: ruleUrl('cx.real-and-imaginary-parts') },
          { label: 'Distance between complex numbers', url: ruleUrl('cx.distance-between-complex-numbers') },
          { label: 'Visualizing the conjugate (lesson)', url: ruleUrl('lesson.cx.geometric-representation.5') },
        ],
      },
    },

    // ═══ III. Strategy ═════════════════════════════════════════════════
    {
      id: 'which-form',
      slug: 'which-form',
      name: 'Which form of a complex number should I use?',
      description: 'A decision tree from the task (sum, product, power, root, conversion) to the form that makes it easy and the method that does it.',
      uses: 'leads to 7 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Form of a Complex Number to Use (Decision Tree) | Learn Math Class',
        description: 'Choose rectangular, polar or exponential form for each task: sums, products, quotients, powers, roots and conversions. With a decision tree and method links.',
        keywords: ['rectangular vs polar form', 'which form of complex number to use', 'polar or rectangular form', 'complex numbers decision tree', 'when to use exponential form'],
      },
      page: {
        h1: 'Which Form of a Complex Number Should I Use?',
        lead:
          'The same number can be written as $a + bi$, $r(\\cos\\theta + i\\sin\\theta)$ or $re^{i\\theta}$. Rectangular form makes sums easy; polar and exponential forms make products, powers and roots easy. Pick the form that fits the task.',
        recognize:
          'You have a calculation with complex numbers and are not sure whether to expand brackets or switch to modulus and angle: $(2 + 3i) + (5 - i)$, $(1 + i)^{10}$, $\\frac{10\\,\\text{cis}\\,(2\\pi/3)}{2\\,\\text{cis}\\,(\\pi/6)}$, $z^3 = 8i$. Test: name the operation first, then look at how the numbers are given.',
        recognizeNote: `The three forms are compared in the ${link('lesson.cx.basics.10', 'three forms at a glance')} section.`,
        tree: {
          rootId: 'task',
          svgW: 1100,
          nodes: {
            task: {
              type: 'q',
              text: 'What does the task ask for?',
              children: [
                { label: 'a sum or difference', to: 'addLeaf' },
                { label: 'a product or quotient', to: 'given' },
                { label: 'a power', to: 'powerLeaf' },
                { label: 'a root', to: 'rootKind' },
                { label: 'another form', to: 'convertLeaf' },
              ],
            },
            given: {
              type: 'q',
              text: 'How are the numbers given?',
              children: [
                { label: 'a + bi, small parts', to: 'rectLeaf' },
                { label: 'modulus and angle', to: 'polarLeaf' },
              ],
            },
            rootKind: {
              type: 'q',
              text: 'Which root?',
              children: [
                { label: 'square root', to: 'sqrtLeaf' },
                { label: 'cube root or higher', to: 'nthLeaf' },
              ],
            },
            addLeaf: { type: 'leaf', to: 'add-subtract-complex', short: 'Add the parts' },
            rectLeaf: { type: 'leaf', to: 'multiply-complex', short: 'Expand brackets' },
            polarLeaf: { type: 'leaf', to: 'multiply-divide-polar', short: 'Polar product' },
            powerLeaf: { type: 'leaf', to: 'de-moivre-powers', short: 'De Moivre' },
            sqrtLeaf: { type: 'leaf', to: 'complex-square-roots', short: 'Square roots' },
            nthLeaf: { type: 'leaf', to: 'nth-roots', short: 'nth roots' },
            convertLeaf: { type: 'leaf', to: 'rectangular-to-polar', short: 'Convert forms' },
          },
          branches: [
            {
              condition: 'You add or subtract complex numbers.',
              answer: `Use rectangular form: parts add separately, while angles do not add. Use the [add or subtract card](!${HUB}#add-subtract-complex); rectangular form is described in the ${link('lesson.cx.algebraic-form.1', 'standard form lesson')}.`,
            },
            {
              condition: 'You multiply or divide numbers given as $a + bi$ with small whole-number parts, or with angles that are not standard.',
              answer: `Stay in rectangular form: expanding four products is quicker than converting both numbers. Use [multiplying complex numbers](!${HUB}/multiply-complex) or [dividing complex numbers](!${HUB}/divide-complex).`,
            },
            {
              condition: 'You multiply or divide numbers given by modulus and angle, or whose angles are standard.',
              answer: `Use polar or exponential form: moduli multiply and angles add, with no brackets. Use [multiplying and dividing in polar form](!${HUB}/multiply-divide-polar); the form is defined in the ${link('lesson.cx.trigonometric-form.7', 'trigonometric form lesson')}.`,
            },
            {
              condition: 'You raise a complex number to a whole-number power, especially $4$ or more.',
              answer: `Use polar form and ${link('lesson.cx.demoivre-theorem.2', "De Moivre's formula")}: one power of the modulus and one multiplication of the angle replace many products. Use [powers with De Moivre's theorem](!${HUB}/de-moivre-powers).`,
            },
            {
              condition: 'You need the two square roots of a complex number, for example a discriminant.',
              answer: `With whole-number parts, rectangular form works best: compare parts of $(x + yi)^2$. With a standard angle, halve it in polar form. Use [complex square roots](!${HUB}/complex-square-roots).`,
            },
            {
              condition: 'You need cube roots or higher roots, or you solve $z^n = w$.',
              answer: `Use polar or exponential form: the roots share one modulus and their angles are evenly spaced (${link('lesson.cx.exponential-form.9', 'roots in exponential form')}). Use [finding nth roots](!${HUB}/nth-roots).`,
            },
            {
              condition: 'The task asks you to rewrite a number in another form.',
              answer: `From $a + bi$ to modulus and angle, use [converting to polar form](!${HUB}/rectangular-to-polar); back again, use [converting polar to rectangular form](!${HUB}/polar-to-rectangular); for $re^{i\\theta}$, use [writing the exponential form](!${HUB}/exponential-form), defined in the ${link('lesson.cx.exponential-form.4', 'exponential form lesson')}.`,
            },
          ],
        },
        examplesAfter: 'Compare all three forms of one number side by side in the [polar-rectangular converter](!/complex-numbers/visual-tools/polar-rectangular).',
        related: ['multiply-divide-polar', 'de-moivre-powers', 'rectangular-to-polar'],
        builtOn: [
          { label: 'Algebraic form', url: ruleUrl('cx.algebraic-form') },
          { label: 'Trigonometric form', url: ruleUrl('cx.trigonometric-form') },
          { label: 'Exponential form', url: ruleUrl('cx.exponential-form') },
          { label: 'Operations in algebraic vs exponential form (lesson)', url: ruleUrl('lesson.cx.exponential-form.11') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Arithmetic, forms, powers, roots and equations', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a form', blurb: 'Strategy' },
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
    title: 'Other methods',
    links: [
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/trigonometry/methods', label: 'Trigonometry methods' },
      { url: '/functions/methods', label: 'Functions methods' },
    ],
  },
};

export default complexNumbersMethods;
