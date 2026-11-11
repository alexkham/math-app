// trigonometry.methods.js
// Single data source for the trigonometry section hub's own items:
// /trigonometry/methods (hub) and /trigonometry/methods/[view] (leaf pages).
// Topics: angles, the unit circle, triangles, graphs, inverse functions and
// inequalities, and two applied methods. Equations and identities have their
// own sub-hubs.
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/trigonometry/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/trigonometry/methods';

const trigonometryMethods = {
  hubPath: HUB,
  hubLabel: 'trigonometry methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ Atomic — angles ═══════════════════════════════════════════════
    {
      id: 'degrees-to-radians',
      name: 'How to convert degrees to radians',
      subtitle: 'Degrees to radians',
      glyph: '°→rad',
      level: 'atomic',
      tag: 'Atomic',
      category: 'angles',
      when: 'An angle in degrees that a formula needs in radians: $150^\\circ$, $-45^\\circ$, $270^\\circ$.',
      formula: '\\theta_{\\text{rad}} = \\theta_{\\text{deg}}\\cdot\\frac{\\pi}{180}',
      fields: {
        steps: ['1. Multiply by $\\frac{\\pi}{180}$.', '2. Simplify the fraction in front of $\\pi$.'],
        worked_example: '$150^\\circ = 150\\cdot\\frac{\\pi}{180} = \\frac{5\\pi}{6}$',
      },
      links: [
        { url: ruleUrl('trig.degree-radian-conversion'), label: 'Degree-radian conversion' },
        { url: ruleUrl('lesson.trig.degrees-radians.converting'), label: 'Converting (lesson)' },
      ],
    },
    {
      id: 'radians-to-degrees',
      name: 'How to convert radians to degrees',
      subtitle: 'Radians to degrees',
      glyph: 'rad→°',
      level: 'atomic',
      tag: 'Atomic',
      category: 'angles',
      when: 'An angle in radians to be read in degrees: $\\frac{3\\pi}{4}$, $\\frac{7\\pi}{6}$, $2$ (no $\\pi$).',
      formula: '\\theta_{\\text{deg}} = \\theta_{\\text{rad}}\\cdot\\frac{180}{\\pi}',
      fields: {
        steps: ['1. Multiply by $\\frac{180}{\\pi}$; the $\\pi$ cancels if there is one.', '2. Without a $\\pi$, the answer is a decimal: $2 \\text{ rad} \\approx 114.6^\\circ$.'],
        worked_example: '$\\frac{3\\pi}{4} = \\frac{3\\pi}{4}\\cdot\\frac{180}{\\pi} = 135^\\circ$',
      },
      links: [{ url: ruleUrl('trig.degree-radian-conversion'), label: 'Degree-radian conversion' }],
    },
    {
      id: 'coterminal-angles',
      name: 'How to find a coterminal angle',
      subtitle: 'Coterminal angles',
      glyph: '±360°',
      level: 'atomic',
      tag: 'Atomic',
      category: 'angles',
      when: 'An angle larger than one turn or negative, to be brought into $[0^\\circ, 360^\\circ)$ or $[0, 2\\pi)$: $765^\\circ$, $-\\frac{5\\pi}{3}$.',
      formula: '\\theta + 360^\\circ k \\quad \\text{or} \\quad \\theta + 2\\pi k, \\quad k \\in \\mathbb{Z}',
      fields: {
        steps: ['1. Add or subtract full turns.', '2. Stop when the angle lies in one turn; it ends on the same terminal side.'],
        worked_example: '$765^\\circ - 2\\cdot 360^\\circ = 45^\\circ, \\qquad -\\frac{5\\pi}{3} + 2\\pi = \\frac{\\pi}{3}$',
      },
      links: [{ url: ruleUrl('lesson.trig.degrees-radians.coterminal'), label: 'Coterminal angles (lesson)' }],
    },
    {
      id: 'reference-angle',
      name: 'How to find a reference angle',
      subtitle: 'Reference angle',
      glyph: 'θ′',
      level: 'atomic',
      tag: 'Atomic',
      category: 'angles',
      when: 'An angle outside the first quadrant whose trig values you want from a first-quadrant angle: $225^\\circ$, $\\frac{5\\pi}{6}$, $300^\\circ$.',
      formula: 'Q_{II}:\\ 180^\\circ - \\theta \\qquad Q_{III}:\\ \\theta - 180^\\circ \\qquad Q_{IV}:\\ 360^\\circ - \\theta',
      fields: {
        steps: ['1. Bring the angle into one turn and find its quadrant.', '2. Measure the acute angle to the $x$-axis with the formula for that quadrant.'],
        worked_example: '$225^\\circ$ is in quadrant III: reference angle $225^\\circ - 180^\\circ = 45^\\circ$',
      },
      links: [{ url: ruleUrl('lesson.trig.unit-circle.reference-angles'), label: 'Reference angles (lesson)' }],
    },

    // ═══ Composite — unit circle ═══════════════════════════════════════
    {
      id: 'unit-circle-values',
      slug: 'unit-circle-values',
      name: 'How to find trig values with the unit circle',
      description: 'Any standard angle: reduce it, find the quadrant and reference angle, attach the sign.',
      uses: ['reference angle', 'quadrant signs'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'circle',
      indexed: false,
      seo: {
        title: 'How to Find Sin, Cos and Tan with the Unit Circle | Learn Math Class',
        description: 'Find exact sin, cos and tan of any standard angle: reduce it to one turn, find the quadrant and reference angle, take the values, attach the signs.',
        keywords: ['unit circle values', 'how to use the unit circle', 'exact trig values', 'sin cos tan of any angle', 'reference angle method'],
      },
      page: {
        h1: 'How to Find Trig Values with the Unit Circle',
        lead:
          'Every angle has the same trig values as its reference angle in the first quadrant, up to a sign. Find the reference angle, read its values from the unit circle, and let the quadrant decide the signs.',
        recognize:
          'An exact value is asked for a multiple of $30^\\circ$ or $45^\\circ$ ($\\frac{\\pi}{6}$ or $\\frac{\\pi}{4}$): $\\sin\\frac{5\\pi}{6}$, $\\cos(-\\frac{2\\pi}{3})$, $\\tan 315^\\circ$, $\\sin\\frac{7\\pi}{4}$. Test: no calculator, and the angle reduces to one of the sixteen standard angles.',
        recognizeNote: `The unit circle lesson covers ${link('lesson.trig.unit-circle.coordinates', 'coordinates as trig values')}, the ${link('lesson.trig.unit-circle.quadrant-signs', 'quadrant signs')} and the ${link('lesson.trig.unit-circle.exact-values', 'exact values')}.`,
        steps: {
          traceLabel: 'On $\\sin$, $\\cos$, $\\tan$ of $\\frac{5\\pi}{6}$',
          items: [
            {
              title: 'Bring the angle into one turn.',
              body: 'Add or subtract $2\\pi$.',
              state: '$\\frac{5\\pi}{6}$ is already in $[0, 2\\pi)$',
              atomic: 'coterminal-angles',
            },
            {
              title: 'Find the quadrant and the reference angle.',
              body: `${link('lesson.trig.unit-circle.reference-angles', 'Reference angles')}.`,
              state: 'quadrant II; reference angle $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$',
              atomic: 'reference-angle',
            },
            {
              title: 'Take the values of the reference angle.',
              body: 'The point on the unit circle at $\\frac{\\pi}{6}$ is $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$: $\\cos$ is $x$, $\\sin$ is $y$.',
              state: '$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$',
            },
            {
              title: 'Attach the signs of the quadrant.',
              body: `All positive in I, sine in II, tangent in III, cosine in IV (${link('lesson.trig.unit-circle.quadrant-signs', 'quadrant signs')}).`,
              state: '$\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$, $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$, $\\tan\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'quadrant IV',
            badge: 'basic',
            lines: [
              { math: '$\\sin\\frac{7\\pi}{4}$: quadrant IV, reference $\\frac{\\pi}{4}$', why: 'sine negative in IV' },
              { math: '$-\\frac{\\sqrt{2}}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'a negative angle',
            badge: 'coterminal first',
            lines: [
              { math: '$\\cos\\left(-\\frac{2\\pi}{3}\\right)$: coterminal $\\frac{4\\pi}{3}$, quadrant III, reference $\\frac{\\pi}{3}$', why: '' },
              { math: '$-\\frac{1}{2}$', why: 'cosine negative in III', answer: true },
            ],
          },
          {
            title: 'on an axis',
            badge: 'undefined tangent',
            lines: [
              { math: '$\\frac{3\\pi}{2}$ is the point $(0, -1)$', why: '' },
              { math: '$\\sin = -1$, $\\cos = 0$, $\\tan = \\frac{-1}{0}$ undefined', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'AngleExplorer',
          caption:
            'Turn the angle round the circle and watch its point: the coordinates are always the reference angle\'s coordinates with the signs of the quadrant. Reflection in the axes changes signs, never sizes.',
        },
        pitfalls: [
          {
            title: 'Swapping sine and cosine',
            wrong: '$\\sin\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$',
            right: 'sine is the $y$-coordinate: $\\frac{1}{2}$',
          },
          {
            title: 'Wrong reference angle',
            wrong: 'reference angle of $\\frac{5\\pi}{6}$ is $\\frac{5\\pi}{6} - \\pi$',
            right: 'measure to the nearest $x$-axis: $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$',
          },
          {
            title: 'Sign of the reference angle\'s value kept',
            wrong: '$\\cos\\frac{5\\pi}{6} = \\frac{\\sqrt{3}}{2}$',
            right: 'quadrant II: cosine is negative',
          },
        ],
        related: ['exact-values', 'inverse-trig-values', 'graph-sine-cosine'],
        builtOn: [
          { label: 'Exact values (lesson)', url: ruleUrl('lesson.trig.unit-circle.exact-values') },
          { label: 'Reference angles (lesson)', url: ruleUrl('lesson.trig.unit-circle.reference-angles') },
          { label: 'Quadrant signs (lesson)', url: ruleUrl('lesson.trig.unit-circle.quadrant-signs') },
        ],
      },
    },
    {
      id: 'exact-values',
      slug: 'exact-values',
      name: 'How to find all trig values from one given value',
      description: 'Given $\\sin\\theta$ (or any one value) and the quadrant, find the other five.',
      uses: ['Pythagorean identity', 'reference triangle'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'circle',
      indexed: false,
      seo: {
        title: 'How to Find All Trig Values from One Given Value | Learn Math Class',
        description: 'Given one trig value and the quadrant, find the other five: draw the reference triangle, get the third side by Pythagoras, take ratios, apply the signs.',
        keywords: ['find all trig values', 'given sin find cos and tan', 'reference triangle', 'trig values from one value', 'six trig functions'],
      },
      page: {
        h1: 'How to Find All Trig Values from One Given Value',
        lead:
          'One trig value fixes a right triangle, and the triangle gives every other ratio. Draw it, find the missing side with Pythagoras, read off the ratios, and let the quadrant decide the signs.',
        recognize:
          '"$\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in quadrant II; find $\\cos\\theta$ and $\\tan\\theta$", "$\\tan\\theta = -2$ with $\\cos\\theta > 0$", "find the other five functions". Test: one value is given, plus information that fixes the quadrant.',
        recognizeNote: `The lesson section is ${link('lesson.trig.functions.from-one-value', 'Finding All Function Values from One Known Value')}; the reciprocal values follow from the ${link('lesson.trig.functions.reciprocal-quotient', 'reciprocal and quotient relationships')}.`,
        methods: [
          {
            name: 'Reference triangle',
            tag: 'usual choice',
            preferred: true,
            formula: 'x^2 + y^2 = r^2, \\quad \\sin\\theta = \\frac{y}{r},\\ \\cos\\theta = \\frac{x}{r},\\ \\tan\\theta = \\frac{y}{x}',
            body: 'Place the angle in standard position; the given ratio supplies two of $x$, $y$, $r$ with signs, Pythagoras the third.',
          },
          {
            name: 'Pythagorean identity',
            tag: 'no drawing',
            formula: '\\cos\\theta = \\pm\\sqrt{1 - \\sin^2\\theta}',
            body: `The ${link('trig.pythagorean-identity', 'Pythagorean identity')} solved for the missing function; the quadrant picks the sign.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\sin\\theta = \\frac{3}{5}$, $\\theta$ in quadrant II',
          items: [
            {
              title: 'Write the given ratio as two sides with signs.',
              body: '$\\sin = \\frac{y}{r}$ and $r$ is always positive.',
              state: '$y = 3$, $r = 5$',
            },
            {
              title: 'Find the third side with Pythagoras.',
              body: '$x^2 + y^2 = r^2$; two square roots, sign from the quadrant.',
              state: '$x = \\pm 4$; quadrant II: $x = -4$',
            },
            {
              title: 'Take the ratios.',
              body: '$\\cos = \\frac{x}{r}$, $\\tan = \\frac{y}{x}$.',
              state: '$\\cos\\theta = -\\frac{4}{5}$, $\\tan\\theta = -\\frac{3}{4}$',
            },
            {
              title: 'Take reciprocals for the other three.',
              body: `${link('trig.reciprocal-identities', 'Reciprocal identities')}.`,
              state: '$\\csc\\theta = \\frac{5}{3}$, $\\sec\\theta = -\\frac{5}{4}$, $\\cot\\theta = -\\frac{4}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'given a tangent',
            badge: 'r from both legs',
            lines: [
              { math: '$\\tan\\theta = -2$, $\\cos\\theta > 0$: quadrant IV, $x = 1$, $y = -2$', why: '' },
              { math: '$r = \\sqrt{5}$: $\\sin\\theta = -\\frac{2}{\\sqrt{5}}$, $\\cos\\theta = \\frac{1}{\\sqrt{5}}$', why: '', answer: true },
            ],
          },
          {
            title: 'with the identity',
            badge: 'no triangle',
            lines: [
              { math: '$\\cos\\theta = \\frac{1}{3}$, $\\sin\\theta < 0$: $\\sin\\theta = -\\sqrt{1 - \\frac{1}{9}}$', why: 'quadrant IV' },
              { math: '$\\sin\\theta = -\\frac{2\\sqrt{2}}{3}$, $\\tan\\theta = -2\\sqrt{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'quadrant II',
            lines: [
              { math: '$\\sin\\theta = \\frac{3}{5}$ in quadrant II', why: '' },
              { math: '$\\cos\\theta = -\\frac{4}{5}$, $\\tan\\theta = -\\frac{3}{4}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Drop a perpendicular from the angle\'s point to the $x$-axis: the right triangle it makes has legs $|x|$ and $|y|$ and hypotenuse $r$. Every trig value is a ratio of those three sides, with the signs of the coordinates.',
        },
        pitfalls: [
          {
            title: 'Ignoring the quadrant',
            wrong: '$\\cos\\theta = \\frac{4}{5}$ for $\\theta$ in quadrant II',
            right: '$x$ is negative in quadrant II: $-\\frac{4}{5}$',
          },
          {
            title: 'A negative hypotenuse',
            wrong: '$\\sin\\theta = -\\frac{2}{\\sqrt{5}}$ read as $r = -\\sqrt{5}$',
            right: '$r > 0$ always; the sign belongs to $y$',
          },
          {
            title: 'Reciprocal confused with inverse',
            wrong: '$\\csc\\theta = \\arcsin\\frac{3}{5}$',
            right: '$\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{5}{3}$',
          },
        ],
        related: ['unit-circle-values', 'inverse-trig-values', 'solve-right-triangle'],
        builtOn: [
          { label: 'Values from one known value (lesson)', url: ruleUrl('lesson.trig.functions.from-one-value') },
          { label: 'Pythagorean identity', url: ruleUrl('trig.pythagorean-identity') },
          { label: 'Reciprocal identities', url: ruleUrl('trig.reciprocal-identities') },
        ],
      },
    },

    // ═══ Composite — triangles ═════════════════════════════════════════
    {
      id: 'solve-right-triangle',
      slug: 'solve-right-triangle',
      name: 'How to solve a right triangle',
      description: 'Find every missing side and angle from two pieces of information with SOH-CAH-TOA.',
      uses: ['sine, cosine, tangent ratios', 'Pythagoras'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'triangles',
      indexed: false,
      seo: {
        title: 'How to Solve a Right Triangle (SOH-CAH-TOA, Step by Step) | Learn Math Class',
        description: 'Solve a right triangle: label the sides from the known angle, pick the ratio linking known and unknown, solve, finish with the angle sum and Pythagoras.',
        keywords: ['solve a right triangle', 'SOH CAH TOA', 'find missing side right triangle', 'find missing angle', 'right triangle trigonometry examples'],
      },
      page: {
        h1: 'How to Solve a Right Triangle',
        lead:
          'In a right triangle, each acute angle ties two sides together through sine, cosine or tangent. Label the sides relative to the angle you know, pick the ratio that contains what you know and what you want, and solve.',
        recognize:
          `A right angle plus two other pieces (not both angles): an angle and a side, or two sides. "Find the missing side", "find $\\angle A$", "solve the triangle". Test: is there a right angle? If not, use the [law of sines](!${HUB}/law-of-sines) or [cosines](!${HUB}/law-of-cosines).`,
        recognizeNote: `The ratios are defined in ${link('lesson.trig.right-triangle.ratios', 'Defining Sine, Cosine, and Tangent')}; the lesson works through ${link('lesson.trig.right-triangle.missing-sides', 'missing sides')} and ${link('lesson.trig.right-triangle.missing-angles', 'missing angles')}.`,
        steps: {
          traceLabel: 'On a right triangle with $A = 35^\\circ$, hypotenuse $10$',
          items: [
            {
              title: 'Label the sides relative to the known angle.',
              body: `Opposite, adjacent, hypotenuse (${link('lesson.trig.right-triangle.sides', 'naming the sides')}).`,
              state: 'hypotenuse $10$; opposite $a$, adjacent $b$ unknown',
            },
            {
              title: 'Pick the ratio with the known and the wanted side.',
              body: `SOH: $\\sin = \\frac{O}{H}$, CAH: $\\cos = \\frac{A}{H}$, TOA: $\\tan = \\frac{O}{A}$ (${link('trig.sine-definition', 'sine')}, ${link('trig.cosine-definition', 'cosine')}, ${link('trig.tangent-definition', 'tangent')}).`,
              state: '$\\sin 35^\\circ = \\frac{a}{10}$, $\\cos 35^\\circ = \\frac{b}{10}$',
            },
            {
              title: 'Solve for the unknown.',
              body: 'Multiply or divide; for a missing angle, apply the inverse function.',
              state: '$a = 10\\sin 35^\\circ \\approx 5.74$, $b = 10\\cos 35^\\circ \\approx 8.19$',
            },
            {
              title: 'Finish with the angle sum and check with Pythagoras.',
              body: 'The acute angles add to $90^\\circ$.',
              state: '$B = 55^\\circ$; $5.74^2 + 8.19^2 \\approx 100$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'two legs',
            badge: 'find the angles',
            lines: [
              { math: 'legs $5$ and $12$: hypotenuse $13$', why: 'Pythagoras' },
              { math: '$A = \\arctan\\frac{5}{12} \\approx 22.62^\\circ$, $B \\approx 67.38^\\circ$', why: '', answer: true },
            ],
          },
          {
            title: 'adjacent side and angle',
            badge: 'tangent',
            lines: [
              { math: 'adjacent $8$, angle $50^\\circ$, opposite?', why: '$\\tan 50^\\circ = \\frac{O}{8}$' },
              { math: '$O = 8\\tan 50^\\circ \\approx 9.53$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'hypotenuse known',
            lines: [
              { math: '$A = 35^\\circ$, hypotenuse $10$', why: '' },
              { math: '$a \\approx 5.74$, $b \\approx 8.19$, $B = 55^\\circ$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'All right triangles with a $35^\\circ$ angle are scaled copies of one another, so the ratio of opposite to hypotenuse is the same number for all of them: $\\sin 35^\\circ \\approx 0.574$. Solving a triangle is scaling that standard shape to the size you are given.',
        },
        pitfalls: [
          {
            title: 'Sides labelled from the wrong angle',
            wrong: 'opposite and adjacent read from the right angle',
            right: 'label from the acute angle in the ratio',
          },
          {
            title: 'Calculator in radian mode',
            wrong: '$\\sin 35 \\approx -0.43$',
            right: 'degree mode: $\\sin 35^\\circ \\approx 0.574$',
          },
          {
            title: 'Dividing when you should multiply',
            wrong: '$a = \\frac{10}{\\sin 35^\\circ}$',
            right: '$\\frac{a}{10} = \\sin 35^\\circ \\Rightarrow a = 10\\sin 35^\\circ$',
          },
        ],
        related: ['law-of-sines', 'heights-distances-problems', 'which-triangle-law'],
        builtOn: [
          { label: 'The three ratios (lesson)', url: ruleUrl('lesson.trig.right-triangle.ratios') },
          { label: 'Finding missing sides (lesson)', url: ruleUrl('lesson.trig.right-triangle.missing-sides') },
          { label: 'Finding missing angles (lesson)', url: ruleUrl('lesson.trig.right-triangle.missing-angles') },
        ],
      },
    },
    {
      id: 'law-of-sines',
      slug: 'law-of-sines',
      name: 'How to use the law of sines',
      description: 'Two angles and a side (AAS, ASA): each side over the sine of its opposite angle is the same.',
      uses: ['law of sines', 'angle sum'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'triangles',
      indexed: false,
      seo: {
        title: 'How to Use the Law of Sines (AAS and ASA Triangles) | Learn Math Class',
        description: 'Solve AAS and ASA triangles with the law of sines: find the third angle, set up a/sin A = b/sin B, cross-multiply for each missing side, check. Worked examples.',
        keywords: ['law of sines', 'how to use the law of sines', 'AAS triangle', 'ASA triangle', 'law of sines examples'],
      },
      page: {
        h1: 'How to Use the Law of Sines',
        lead:
          'In any triangle, each side divided by the sine of the angle opposite it gives the same number. Once you know one complete pair (a side and its opposite angle), every other side follows.',
        recognize:
          `A triangle with no right angle and two angles plus one side known (AAS or ASA): $A = 40^\\circ$, $B = 60^\\circ$, $a = 10$. Two sides with an angle not between them (SSA) also use it, but with care: see the [ambiguous case](!${HUB}/ambiguous-case).`,
        recognizeNote: `The ${link('trig.law-of-sines', 'law of sines')} is in the ${link('lesson.trig.laws.sines', 'law of sines lesson')}, with ${link('lesson.trig.laws.when-sines', 'when to use it')}.`,
        steps: {
          traceLabel: 'On $A = 40^\\circ$, $B = 60^\\circ$, $a = 10$',
          items: [
            {
              title: 'Find the third angle.',
              body: 'The angles add to $180^\\circ$.',
              state: '$C = 80^\\circ$',
            },
            {
              title: 'Write the law with the complete pair.',
              body: `${link('trig.law-of-sines', 'Law of sines')}: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.`,
              state: '$\\frac{10}{\\sin 40^\\circ} = \\frac{b}{\\sin 60^\\circ}$',
            },
            {
              title: 'Cross-multiply for each missing side.',
              body: 'One equation per unknown side, always using the complete pair.',
              state: '$b = \\frac{10\\sin 60^\\circ}{\\sin 40^\\circ} \\approx 13.47$, $c = \\frac{10\\sin 80^\\circ}{\\sin 40^\\circ} \\approx 15.32$',
            },
            {
              title: 'Check: the longest side faces the largest angle.',
              body: '',
              state: '$c$ opposite $80^\\circ$ is longest ✓',
            },
          ],
        },
        examples: [
          {
            title: 'ASA',
            badge: 'side between the angles',
            lines: [
              { math: '$A = 30^\\circ$, $C = 45^\\circ$, $b = 12$: $B = 105^\\circ$', why: 'complete pair $b$, $B$' },
              { math: '$a = \\frac{12\\sin 30^\\circ}{\\sin 105^\\circ} \\approx 6.21$, $c = \\frac{12\\sin 45^\\circ}{\\sin 105^\\circ} \\approx 8.78$', why: '', answer: true },
            ],
          },
          {
            title: 'AAS',
            badge: 'the trace',
            lines: [
              { math: '$A = 40^\\circ$, $B = 60^\\circ$, $a = 10$', why: '' },
              { math: '$C = 80^\\circ$, $b \\approx 13.47$, $c \\approx 15.32$', why: '', answer: true },
            ],
          },
          {
            title: 'finding an angle',
            badge: 'SSA, one solution',
            lines: [
              { math: '$a = 12$, $b = 10$, $A = 30^\\circ$: $\\sin B = \\frac{10\\sin 30^\\circ}{12} \\approx 0.417$', why: '' },
              { math: '$B \\approx 24.62^\\circ$ (the obtuse option $155.38^\\circ$ leaves no room)', why: 'see the ambiguous case', answer: true },
            ],
          },
        ],
        visual: {
          component: 'TriangleExplorer',
          caption:
            'Drag a vertex: every side grows and shrinks with the sine of the angle across from it, and the three ratios side ÷ sine stay equal to one another. That common value is the diameter of the circle through the three vertices.',
        },
        pitfalls: [
          {
            title: 'Pairing a side with the wrong angle',
            wrong: '$\\frac{a}{\\sin B}$',
            right: 'each side goes with the angle opposite it: $\\frac{a}{\\sin A}$',
          },
          {
            title: 'Using it for SAS or SSS',
            wrong: 'law of sines with two sides and the angle between them',
            right: `there is no complete pair; use the [law of cosines](!${HUB}/law-of-cosines)`,
          },
          {
            title: 'Forgetting the second angle in SSA',
            wrong: 'always taking $B = \\arcsin(\\ldots)$',
            right: '$180^\\circ - B$ may also work; check the ambiguous case',
          },
        ],
        related: ['law-of-cosines', 'ambiguous-case', 'which-triangle-law'],
        builtOn: [
          { label: 'Law of sines', url: ruleUrl('trig.law-of-sines') },
          { label: 'Law of sines (lesson)', url: ruleUrl('lesson.trig.laws.sines') },
          { label: 'Triangle notation (lesson)', url: ruleUrl('lesson.trig.laws.notation') },
        ],
      },
    },
    {
      id: 'law-of-cosines',
      slug: 'law-of-cosines',
      name: 'How to use the law of cosines',
      description: 'Two sides and the included angle (SAS), or three sides (SSS).',
      uses: ['law of cosines', 'inverse cosine'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'triangles',
      indexed: false,
      seo: {
        title: 'How to Use the Law of Cosines (SAS and SSS Triangles) | Learn Math Class',
        description: 'Solve SAS and SSS triangles with the law of cosines: find the third side from c² = a² + b² − 2ab cos C, or an angle from cos C = (a² + b² − c²)/2ab. Examples.',
        keywords: ['law of cosines', 'how to use the law of cosines', 'SAS triangle', 'SSS triangle', 'find angle law of cosines'],
      },
      page: {
        h1: 'How to Use the Law of Cosines',
        lead:
          'The law of cosines is Pythagoras with a correction term: $c^2 = a^2 + b^2 - 2ab\\cos C$. Use it when you know two sides and the angle between them, or all three sides.',
        recognize:
          'A triangle with no right angle where no side is known together with its opposite angle: two sides and the included angle (SAS: $a = 7$, $b = 5$, $C = 60^\\circ$) or three sides (SSS: $5, 6, 7$).',
        recognizeNote: `The ${link('trig.law-of-cosines', 'law of cosines')} is in the ${link('lesson.trig.laws.cosines', 'law of cosines lesson')}, with ${link('lesson.trig.laws.when-cosines', 'when to use it')}.`,
        methods: [
          {
            name: 'SAS: find the third side',
            tag: 'side form',
            preferred: true,
            formula: 'c^2 = a^2 + b^2 - 2ab\\cos C',
            body: 'The angle in the formula is the one between the two known sides.',
          },
          {
            name: 'SSS: find an angle',
            tag: 'angle form',
            formula: '\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}',
            body: 'Solve for the largest angle first; a negative cosine means an obtuse angle.',
          },
        ],
        steps: {
          traceLabel: 'On $a = 5$, $b = 6$, $c = 7$ (SSS)',
          items: [
            {
              title: 'Identify the case.',
              body: 'SAS: the side form. SSS: the angle form.',
              state: 'SSS',
            },
            {
              title: 'Find the largest angle first.',
              body: 'It sits opposite the longest side; the cosine sign tells whether it is obtuse.',
              state: '$\\cos C = \\frac{25 + 36 - 49}{60} = 0.2 \\Rightarrow C \\approx 78.46^\\circ$',
            },
            {
              title: 'Find a second angle.',
              body: 'Law of cosines again (or the law of sines, now that a complete pair exists).',
              state: '$\\cos A = \\frac{36 + 49 - 25}{84} \\approx 0.714 \\Rightarrow A \\approx 44.42^\\circ$',
            },
            {
              title: 'Finish with the angle sum.',
              body: '',
              state: '$B \\approx 180^\\circ - 78.46^\\circ - 44.42^\\circ = 57.12^\\circ$',
            },
          ],
        },
        examples: [
          {
            title: 'SAS',
            badge: 'third side',
            lines: [
              { math: '$a = 7$, $b = 5$, $C = 60^\\circ$: $c^2 = 49 + 25 - 70\\cdot\\frac{1}{2}$', why: '' },
              { math: '$c = \\sqrt{39} \\approx 6.24$', why: '', answer: true },
            ],
          },
          {
            title: 'an obtuse angle',
            badge: 'negative cosine',
            lines: [
              { math: '$a = 3$, $b = 4$, $c = 6$: $\\cos C = \\frac{9 + 16 - 36}{24} \\approx -0.458$', why: '' },
              { math: '$C \\approx 117.28^\\circ$', why: 'obtuse', answer: true },
            ],
          },
          {
            title: 'SSS',
            badge: 'the trace',
            lines: [
              { math: '$5, 6, 7$', why: '' },
              { math: '$A \\approx 44.42^\\circ$, $B \\approx 57.12^\\circ$, $C \\approx 78.46^\\circ$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'TriangleExplorer',
          caption:
            'Open the angle $C$ between two fixed sides: at $90^\\circ$ the correction term vanishes and the law is Pythagoras; a sharper angle shortens $c$, a wider one lengthens it. $-2ab\\cos C$ measures exactly that.',
        },
        pitfalls: [
          {
            title: 'Wrong angle in the formula',
            wrong: '$c^2 = a^2 + b^2 - 2ab\\cos A$',
            right: 'the angle must be opposite the side on the left: $\\cos C$',
          },
          {
            title: 'Subtracting before multiplying',
            wrong: '$c^2 = (49 + 25 - 70)\\cos 60^\\circ$',
            right: '$c^2 = 74 - 70\\cos 60^\\circ = 39$',
          },
          {
            title: 'Smallest angle first with the law of sines',
            wrong: 'finding an obtuse angle by arcsine',
            right: 'arcsine never returns an obtuse angle; get the largest angle by cosines',
          },
        ],
        related: ['law-of-sines', 'triangle-area', 'which-triangle-law'],
        builtOn: [
          { label: 'Law of cosines', url: ruleUrl('trig.law-of-cosines') },
          { label: 'Law of cosines (lesson)', url: ruleUrl('lesson.trig.laws.cosines') },
          { label: 'Choosing between the laws (lesson)', url: ruleUrl('lesson.trig.laws.choosing') },
        ],
      },
    },
    {
      id: 'ambiguous-case',
      slug: 'ambiguous-case',
      name: 'How to handle the ambiguous case (SSA)',
      description: 'Two sides and a non-included angle: zero, one or two triangles.',
      uses: ['law of sines', 'height test'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'triangles',
      indexed: false,
      seo: {
        title: 'The Ambiguous Case (SSA): Zero, One or Two Triangles | Learn Math Class',
        description: 'Handle SSA triangles: compare the side opposite the angle with the height h = b sin A, decide whether there are zero, one or two triangles, then solve each one.',
        keywords: ['ambiguous case', 'SSA triangle', 'law of sines ambiguous case', 'two triangles SSA', 'how many triangles'],
      },
      page: {
        h1: 'How to Handle the Ambiguous Case (SSA)',
        lead:
          'Two sides and an angle that is not between them do not always fix a triangle. The side opposite the angle can swing to hit the third side twice, once, or not at all. Compare it with the height to decide.',
        recognize:
          'Two sides and a non-included angle: "$a = 7$, $b = 10$, $A = 30^\\circ$; solve the triangle", "how many triangles are possible?". Test: the known angle is opposite one of the two known sides.',
        recognizeNote: `The lesson section is ${link('lesson.trig.laws.ambiguous', 'The Ambiguous Case (SSA)')}; the solving itself is the [law of sines](!${HUB}/law-of-sines).`,
        steps: {
          traceLabel: 'On $a = 7$, $b = 10$, $A = 30^\\circ$',
          items: [
            {
              title: 'Compute the height h = b sin A.',
              body: 'The shortest distance from the far vertex to the base line.',
              state: '$h = 10\\sin 30^\\circ = 5$',
            },
            {
              title: 'Compare a with h and b (A acute).',
              body: '$a < h$: none. $a = h$: one (right). $h < a < b$: two. $a \\ge b$: one. If $A$ is obtuse: one triangle if $a > b$, none otherwise.',
              state: '$5 < 7 < 10$: two triangles',
            },
            {
              title: 'Find the first value of the second angle.',
              body: `${link('trig.law-of-sines', 'Law of sines')}.`,
              state: '$\\sin B = \\frac{10\\sin 30^\\circ}{7} = \\frac{5}{7}$, $B_1 \\approx 45.58^\\circ$',
            },
            {
              title: 'Take the supplementary angle for the second triangle.',
              body: 'Keep it only if it leaves a positive third angle.',
              state: '$B_2 = 180^\\circ - 45.58^\\circ = 134.42^\\circ$',
            },
            {
              title: 'Finish each triangle.',
              body: 'Third angle by the angle sum, third side by the law of sines.',
              state: '$C_1 \\approx 104.42^\\circ$, $c_1 \\approx 13.56$; $\\;C_2 \\approx 15.58^\\circ$, $c_2 \\approx 3.76$',
            },
          ],
        },
        examples: [
          {
            title: 'two triangles',
            badge: 'h < a < b',
            lines: [
              { math: '$a = 7$, $b = 10$, $A = 30^\\circ$: $h = 5$', why: '' },
              { math: '$B \\approx 45.58^\\circ$ or $134.42^\\circ$', why: 'both valid', answer: true },
            ],
          },
          {
            title: 'no triangle',
            badge: 'a < h',
            lines: [
              { math: '$a = 4$, $b = 10$, $A = 30^\\circ$: $h = 5 > 4$', why: 'or: $\\sin B = 1.25 > 1$' },
              { math: 'no triangle', why: '', answer: true },
            ],
          },
          {
            title: 'one triangle',
            badge: 'a ≥ b',
            lines: [
              { math: '$a = 12$, $b = 10$, $A = 30^\\circ$: $\\sin B \\approx 0.417$, $B \\approx 24.62^\\circ$', why: '' },
              { math: 'one triangle ($155.38^\\circ + 30^\\circ > 180^\\circ$)', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Fix side $b$ and the angle $A$, then let side $a$ swing from the far vertex like a pendulum. Too short and it misses the base line; exactly $h$ and it just touches; a bit longer and it crosses at two points; longer than $b$ and only one crossing is on the correct side.',
        },
        pitfalls: [
          {
            title: 'Missing the second triangle',
            wrong: 'only $B \\approx 45.58^\\circ$',
            right: 'also $134.42^\\circ$ when $h < a < b$',
          },
          {
            title: 'Keeping an impossible supplement',
            wrong: '$B_2 = 155.38^\\circ$ with $A = 30^\\circ$',
            right: 'the angles would exceed $180^\\circ$; reject it',
          },
          {
            title: 'An arcsine of a number above 1',
            wrong: 'calculator error read as "B = 90°"',
            right: '$\\sin B > 1$ means no triangle exists',
          },
        ],
        related: ['law-of-sines', 'law-of-cosines', 'which-triangle-law'],
        builtOn: [
          { label: 'The ambiguous case (lesson)', url: ruleUrl('lesson.trig.laws.ambiguous') },
          { label: 'Law of sines', url: ruleUrl('trig.law-of-sines') },
        ],
      },
    },
    {
      id: 'triangle-area',
      slug: 'triangle-area',
      name: 'How to find the area of a triangle with trigonometry',
      description: 'Half the product of two sides and the sine of the included angle, or Heron with three sides.',
      uses: ['SAS area formula', "Heron's formula"],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'triangles',
      indexed: false,
      seo: {
        title: 'How to Find the Area of a Triangle with Trigonometry | Learn Math Class',
        description: 'Find the area of a triangle without its height: ½ab sin C with two sides and the included angle, Heron with three sides, or the law of sines first.',
        keywords: ['area of a triangle trigonometry', '1/2 ab sin C', "heron's formula", 'area of a triangle without height', 'triangle area examples'],
      },
      page: {
        h1: 'How to Find the Area of a Triangle with Trigonometry',
        lead:
          'Half base times height still holds; trigonometry just supplies the height. With two sides and the angle between them the area is $\\frac{1}{2}ab\\sin C$; with three sides, Heron\'s formula.',
        recognize:
          '"Find the area" of a triangle given by sides and angles rather than a base and a height: $a = 8$, $b = 11$, $C = 40^\\circ$; three sides $5, 6, 7$; two angles and a side.',
        recognizeNote: `Both formulas are in the lesson: ${link('lesson.trig.laws.area', 'area using trigonometry')} and ${link('lesson.trig.laws.heron', 'Heron\'s formula')}.`,
        methods: [
          {
            name: 'Two sides and the included angle',
            tag: 'usual choice',
            preferred: true,
            formula: 'K = \\tfrac{1}{2}ab\\sin C',
            body: `${link('trig.triangle-area-sas', 'SAS area formula')}: $b\\sin C$ is the height on side $a$.`,
          },
          {
            name: 'Three sides',
            tag: "Heron's formula",
            formula: 'K = \\sqrt{s(s - a)(s - b)(s - c)}, \\quad s = \\tfrac{a + b + c}{2}',
            body: `${link('trig.herons-formula', "Heron's formula")}: no angles needed.`,
          },
        ],
        steps: {
          traceLabel: 'On $a = 8$, $b = 11$, $C = 40^\\circ$',
          items: [
            {
              title: 'Identify what is known.',
              body: 'SAS: the sine formula. SSS: Heron. Two angles and a side: find a second side with the law of sines first.',
              state: 'SAS',
            },
            {
              title: 'Make sure the angle is between the two sides.',
              body: 'If not, find the included angle first.',
              state: '$C$ is between $a$ and $b$ ✓',
            },
            {
              title: 'Apply the formula.',
              body: '',
              state: '$K = \\tfrac{1}{2}\\cdot 8\\cdot 11\\cdot\\sin 40^\\circ$',
            },
            {
              title: 'Compute with units squared.',
              body: '',
              state: '$K \\approx 44\\cdot 0.643 \\approx 28.28$ square units',
            },
          ],
        },
        examples: [
          {
            title: "Heron's formula",
            badge: 'three sides',
            lines: [
              { math: 'sides $5, 6, 7$: $s = 9$', why: '' },
              { math: '$K = \\sqrt{9\\cdot 4\\cdot 3\\cdot 2} = \\sqrt{216} = 6\\sqrt{6} \\approx 14.70$', why: '', answer: true },
            ],
          },
          {
            title: 'two angles and a side',
            badge: 'law of sines first',
            lines: [
              { math: '$A = 40^\\circ$, $B = 60^\\circ$, $a = 10$: $b \\approx 13.47$, $C = 80^\\circ$', why: 'law of sines' },
              { math: '$K = \\tfrac{1}{2}\\cdot 10\\cdot 13.47\\cdot\\sin 80^\\circ \\approx 66.34$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'SAS',
            lines: [
              { math: '$a = 8$, $b = 11$, $C = 40^\\circ$', why: '' },
              { math: '$K \\approx 28.28$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Take side $a$ as the base. The height to it is the other side $b$ tilted by angle $C$: its vertical part is $b\\sin C$. Half base times height gives $\\frac{1}{2}ab\\sin C$.',
        },
        pitfalls: [
          {
            title: 'A non-included angle',
            wrong: '$\\frac{1}{2}ab\\sin A$',
            right: 'the angle must be between the two sides: $\\sin C$',
          },
          {
            title: 'Forgetting the ½',
            wrong: '$K = ab\\sin C$',
            right: 'that is a parallelogram; a triangle is half',
          },
          {
            title: 'Perimeter instead of semiperimeter',
            wrong: '$s = a + b + c$ in Heron',
            right: '$s$ is half the perimeter',
          },
        ],
        related: ['law-of-cosines', 'law-of-sines', 'which-triangle-law'],
        builtOn: [
          { label: 'SAS area formula', url: ruleUrl('trig.triangle-area-sas') },
          { label: "Heron's formula", url: ruleUrl('trig.herons-formula') },
          { label: 'Area using trigonometry (lesson)', url: ruleUrl('lesson.trig.laws.area') },
        ],
      },
    },
    // ═══ Composite — graphs, inverses, inequalities ════════════════════
    {
      id: 'graph-sine-cosine',
      slug: 'graph-sine-cosine',
      name: 'How to graph a sine or cosine function',
      description: 'Read amplitude, period, phase shift and midline from $y = A\\sin(B(x - C)) + D$, then plot five key points.',
      uses: ['amplitude', 'period', 'phase shift', 'midline'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'graphs',
      indexed: false,
      seo: {
        title: 'How to Graph Sine and Cosine Functions (Amplitude, Period, Shift) | Learn Math Class',
        description: 'Graph y = A sin(B(x − C)) + D: factor B, read amplitude, period, phase shift and midline, plot five key points a quarter-period apart. Examples.',
        keywords: ['graph sine and cosine', 'amplitude period phase shift', 'sinusoidal graph', 'how to graph y = A sin(Bx + C) + D', 'equation from a graph'],
      },
      page: {
        h1: 'How to Graph a Sine or Cosine Function',
        lead:
          'Every sine or cosine graph is the basic wave stretched, squeezed and shifted. Read the four parameters from $y = A\\sin\\big(B(x - C)\\big) + D$, then plot five key points a quarter-period apart and join them.',
        recognize:
          '"Graph $y = 3\\sin(2x - \\pi) + 1$", "state the amplitude, period and phase shift", "write an equation for this graph". Test: a sine or cosine with numbers in front, inside or added.',
        recognizeNote: `The four parameters are explained in the graphs lesson: ${link('lesson.trig.graphs.amplitude', 'amplitude')}, ${link('lesson.trig.graphs.period', 'period')}, ${link('lesson.trig.graphs.phase-shift', 'phase shift')} and ${link('lesson.trig.graphs.midline', 'midline')}; the plotting is the ${link('lesson.trig.graphs.key-points', 'key-point method')}.`,
        steps: {
          traceLabel: 'On $y = 3\\sin(2x - \\pi) + 1$',
          items: [
            {
              title: 'Factor B out of the bracket.',
              body: 'The phase shift is only visible in the form $B(x - C)$.',
              state: '$y = 3\\sin\\big(2(x - \\tfrac{\\pi}{2})\\big) + 1$',
            },
            {
              title: 'Read the four parameters.',
              body: 'Amplitude $|A|$, period $\\frac{2\\pi}{|B|}$, phase shift $C$ (right if positive), midline $y = D$. A negative $A$ flips the wave.',
              state: 'amplitude $3$, period $\\pi$, shift $\\frac{\\pi}{2}$ right, midline $y = 1$',
            },
            {
              title: 'Mark one period starting at the shift.',
              body: 'Split it into four equal steps.',
              state: 'from $x = \\frac{\\pi}{2}$ to $\\frac{3\\pi}{2}$, step $\\frac{\\pi}{4}$',
            },
            {
              title: 'Plot the five key points.',
              body: 'Sine: midline, max, midline, min, midline. Cosine: max, midline, min, midline, max. Heights are $D \\pm |A|$.',
              state: '$(\\tfrac{\\pi}{2}, 1)$, $(\\tfrac{3\\pi}{4}, 4)$, $(\\pi, 1)$, $(\\tfrac{5\\pi}{4}, -2)$, $(\\tfrac{3\\pi}{2}, 1)$',
            },
            {
              title: 'Join with a smooth wave and repeat each period.',
              body: '',
              state: 'one full wave, then copies left and right',
            },
          ],
        },
        examples: [
          {
            title: 'a reflected cosine',
            badge: 'negative A',
            lines: [
              { math: '$y = -2\\cos\\frac{x}{2}$: amplitude $2$, period $4\\pi$', why: 'starts at a minimum' },
              { math: '$(0, -2)$, $(\\pi, 0)$, $(2\\pi, 2)$, $(3\\pi, 0)$, $(4\\pi, -2)$', why: '', answer: true },
            ],
          },
          {
            title: 'equation from a graph',
            badge: 'reverse',
            lines: [
              { math: 'max $5$, min $-1$, period $8$, a maximum at $x = 0$', why: '$A = \\frac{5 - (-1)}{2} = 3$, $D = 2$, $B = \\frac{2\\pi}{8}$' },
              { math: '$y = 3\\cos\\frac{\\pi x}{4} + 2$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'all four parameters',
            lines: [
              { math: '$y = 3\\sin(2x - \\pi) + 1$', why: '' },
              { math: 'amplitude $3$, period $\\pi$, shift $\\frac{\\pi}{2}$ right, midline $y = 1$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'SinusoidalParameterExplorer',
          caption:
            'Move one parameter at a time: $A$ stretches the wave vertically, $B$ squeezes it horizontally, $C$ slides it sideways, $D$ lifts it. Each of the four steps of the method undoes one of those moves.',
        },
        pitfalls: [
          {
            title: 'Phase shift read before factoring',
            wrong: '$\\sin(2x - \\pi)$: shift $\\pi$',
            right: '$2(x - \\frac{\\pi}{2})$: shift $\\frac{\\pi}{2}$',
          },
          {
            title: 'Period as B',
            wrong: 'period of $\\sin 2x$ is $2$',
            right: '$\\frac{2\\pi}{2} = \\pi$',
          },
          {
            title: 'Amplitude negative',
            wrong: 'amplitude of $-2\\cos x$ is $-2$',
            right: 'amplitude $2$; the minus sign reflects the graph',
          },
        ],
        related: ['graph-tangent', 'unit-circle-values', 'inverse-trig-values'],
        builtOn: [
          { label: 'The general sinusoidal form (lesson)', url: ruleUrl('lesson.trig.graphs.sinusoidal') },
          { label: 'Period (lesson)', url: ruleUrl('lesson.trig.graphs.period') },
          { label: 'Key-point method (lesson)', url: ruleUrl('lesson.trig.graphs.key-points') },
        ],
      },
    },
    {
      id: 'graph-tangent',
      slug: 'graph-tangent',
      name: 'How to graph a tangent function',
      description: 'Find the period and the asymptotes, mark the zero and the two quarter points, draw each branch.',
      uses: ['period', 'vertical asymptotes'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'graphs',
      indexed: false,
      seo: {
        title: 'How to Graph a Tangent Function (Period and Asymptotes) | Learn Math Class',
        description: 'Graph y = A tan(B(x − C)) + D: find the period π/|B|, place the asymptotes half a period from the centre, plot the zero and quarter points, repeat each branch.',
        keywords: ['graph tangent function', 'tangent period and asymptotes', 'graph y = tan(bx)', 'tangent graph transformations'],
      },
      page: {
        h1: 'How to Graph a Tangent Function',
        lead:
          'A tangent graph is a row of identical branches separated by vertical asymptotes. Each branch is centred on a zero, rises through it, and runs off to infinity at the asymptotes half a period away on either side.',
        recognize:
          '"Graph $y = 2\\tan(x - \\frac{\\pi}{4})$", "find the asymptotes of $y = \\tan 2x$", "state the period". Test: a tangent (or cotangent) with numbers in front or inside.',
        recognizeNote: `The basic graph is in ${link('lesson.trig.graphs.tangent', 'Graph of the Tangent Function')}; the tangent repeats every $\\pi$ (${link('trig.periodicity', 'periodicity identities')}).`,
        steps: {
          traceLabel: 'On $y = 2\\tan(x - \\frac{\\pi}{4})$',
          items: [
            {
              title: 'Find the period.',
              body: 'Tangent: $\\frac{\\pi}{|B|}$, not $\\frac{2\\pi}{|B|}$.',
              state: 'period $\\pi$',
            },
            {
              title: 'Find the centre of one branch.',
              body: 'Where the bracket is $0$: $x = C$. The graph passes through $(C, D)$ there.',
              state: 'centre $x = \\frac{\\pi}{4}$, point $(\\frac{\\pi}{4}, 0)$',
            },
            {
              title: 'Place the asymptotes half a period either side.',
              body: 'Where the bracket equals $\\pm\\frac{\\pi}{2}$.',
              state: '$x = -\\frac{\\pi}{4}$ and $x = \\frac{3\\pi}{4}$',
            },
            {
              title: 'Plot the quarter points and draw the branch.',
              body: 'Halfway to each asymptote the height is $D \\pm A$. Repeat the branch every period.',
              state: '$(0, -2)$ and $(\\frac{\\pi}{2}, 2)$; branches every $\\pi$',
            },
          ],
        },
        examples: [
          {
            title: 'horizontal squeeze',
            badge: 'B = 2',
            lines: [
              { math: '$y = \\tan 2x$: period $\\frac{\\pi}{2}$', why: '' },
              { math: 'asymptotes $x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$', why: 'where $2x = \\frac{\\pi}{2} + k\\pi$', answer: true },
            ],
          },
          {
            title: 'reflected and stretched',
            badge: 'decreasing branches',
            lines: [
              { math: '$y = -\\tan\\frac{x}{2}$: period $2\\pi$, asymptotes $x = \\pm\\pi$', why: '' },
              { math: 'each branch falls from left to right through $(0, 0)$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'shifted',
            lines: [
              { math: '$y = 2\\tan(x - \\frac{\\pi}{4})$', why: '' },
              { math: 'period $\\pi$, zero at $\\frac{\\pi}{4}$, asymptotes $-\\frac{\\pi}{4}$, $\\frac{3\\pi}{4}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'TrigFunctionsExplorer',
          props: { initialFunction: 'tan', initialAngleDeg: 45 },
          caption:
            '$\\tan x = \\frac{\\sin x}{\\cos x}$ blows up wherever $\\cos x = 0$, which happens every $\\pi$: that is why the tangent has asymptotes instead of a minimum and a maximum, and why its period is half that of sine.',
        },
        pitfalls: [
          {
            title: 'Using the sine period',
            wrong: 'period of $\\tan 2x$ is $\\pi$',
            right: '$\\frac{\\pi}{2}$',
          },
          {
            title: 'Asymptotes at the zeros',
            wrong: 'asymptote at $x = 0$ for $\\tan x$',
            right: '$\\tan 0 = 0$; asymptotes are at $\\pm\\frac{\\pi}{2}$',
          },
          {
            title: 'Calling A an amplitude',
            wrong: '"amplitude $2$" for $2\\tan x$',
            right: 'tangent is unbounded; $A$ only sets the height at the quarter points',
          },
        ],
        related: ['graph-sine-cosine', 'inverse-trig-values', 'unit-circle-values'],
        builtOn: [
          { label: 'Graph of the tangent (lesson)', url: ruleUrl('lesson.trig.graphs.tangent') },
          { label: 'Periodicity identities', url: ruleUrl('trig.periodicity') },
          { label: 'Tangent as a quotient', url: ruleUrl('trig.tangent-quotient') },
        ],
      },
    },
    {
      id: 'inverse-trig-values',
      slug: 'inverse-trig-values',
      name: 'How to evaluate inverse trig functions',
      description: 'Find the one angle in the restricted range; compositions with a right triangle.',
      uses: ['restricted ranges', 'reference triangle'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'graphs',
      indexed: false,
      seo: {
        title: 'How to Evaluate Inverse Trig Functions (arcsin, arccos, arctan) | Learn Math Class',
        description: 'Evaluate arcsin, arccos and arctan: find the angle with that value inside the restricted range, and simplify compositions like sin(arccos x).',
        keywords: ['evaluate inverse trig functions', 'arcsin arccos arctan values', 'range of arcsin', 'sin(arccos x)', 'inverse trig compositions'],
      },
      page: {
        h1: 'How to Evaluate Inverse Trig Functions',
        lead:
          'An inverse trig function returns an angle, and only one: the one in its restricted range. arcsin and arctan answer between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$, arccos between $0$ and $\\pi$.',
        recognize:
          '$\\arcsin(-\\frac{1}{2})$, $\\cos^{-1}(-\\frac{\\sqrt{2}}{2})$, $\\arctan\\sqrt{3}$, $\\sin(\\arccos\\frac{3}{5})$, $\\arcsin(\\sin\\frac{5\\pi}{6})$. Test: an inverse function, alone or composed with a trig function.',
        recognizeNote: `The ranges come from ${link('lesson.trig.inverse.restriction', 'why restriction is necessary')}; the lesson covers ${link('lesson.trig.inverse.evaluating', 'evaluating')} and ${link('lesson.trig.inverse.compositions', 'compositions')}.`,
        methods: [
          {
            name: 'Angle in the restricted range',
            tag: 'exact values',
            preferred: true,
            formula: '\\arcsin, \\arctan \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right], \\qquad \\arccos \\in [0, \\pi]',
            body: 'Find the reference angle from the absolute value, then place it in the range according to the sign.',
          },
          {
            name: 'Right triangle for compositions',
            tag: 'trig of an inverse',
            formula: '\\sin(\\arccos x) = \\sqrt{1 - x^2}',
            body: 'Let $\\theta$ be the inner angle, draw its triangle, read the outer function off it.',
          },
        ],
        steps: {
          traceLabel: 'On $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right)$',
          items: [
            {
              title: 'Recall the range of the function.',
              body: `${link('lesson.trig.inverse.arccosine', 'arccos')}: $[0, \\pi]$.`,
              state: 'answer must be in $[0, \\pi]$',
            },
            {
              title: 'Find the reference angle from the absolute value.',
              body: '',
              state: '$\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$: reference $\\frac{\\pi}{4}$',
              atomic: 'reference-angle',
            },
            {
              title: 'Place it in the range using the sign.',
              body: 'Negative arccos: quadrant II. Negative arcsin or arctan: quadrant IV, given as a negative angle.',
              state: '$\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$',
            },
            {
              title: 'Check by applying the function.',
              body: '',
              state: '$\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'negative arcsine',
            badge: 'negative angle',
            lines: [
              { math: '$\\arcsin\\left(-\\frac{1}{2}\\right)$: reference $\\frac{\\pi}{6}$', why: 'range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$' },
              { math: '$-\\frac{\\pi}{6}$', why: 'not $\\frac{7\\pi}{6}$ or $\\frac{11\\pi}{6}$', answer: true },
            ],
          },
          {
            title: 'a composition',
            badge: 'triangle',
            lines: [
              { math: '$\\sin\\left(\\arccos\\frac{3}{5}\\right)$: $\\theta$ with adjacent $3$, hypotenuse $5$', why: 'opposite $4$' },
              { math: '$\\frac{4}{5}$', why: '$\\theta$ in quadrant I, sine positive', answer: true },
            ],
          },
          {
            title: 'inverse of a function',
            badge: 'outside the range',
            lines: [
              { math: '$\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\arcsin\\frac{1}{2}$', why: '$\\frac{5\\pi}{6}$ is outside arcsin\'s range' },
              { math: '$\\frac{\\pi}{6}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'InverseFunctionExplorer',
          caption:
            'A horizontal line at height $\\frac{1}{2}$ cuts the sine curve infinitely often, so "the angle whose sine is $\\frac{1}{2}$" needs a rule. The restricted range is that rule: it keeps the one piece of the curve that passes every height exactly once.',
        },
        pitfalls: [
          {
            title: 'An answer outside the range',
            wrong: '$\\arcsin(-\\frac{1}{2}) = \\frac{11\\pi}{6}$',
            right: '$-\\frac{\\pi}{6}$',
          },
          {
            title: 'Inverse read as reciprocal',
            wrong: '$\\sin^{-1} x = \\frac{1}{\\sin x}$',
            right: '$\\sin^{-1} x = \\arcsin x$; the reciprocal is $\\csc x$',
          },
          {
            title: 'arcsin(sin x) = x always',
            wrong: '$\\arcsin(\\sin\\frac{5\\pi}{6}) = \\frac{5\\pi}{6}$',
            right: 'only for $x$ in the range; here $\\frac{\\pi}{6}$',
          },
        ],
        related: ['unit-circle-values', 'exact-values', 'trig-inequalities'],
        builtOn: [
          { label: 'Arcsine (lesson)', url: ruleUrl('lesson.trig.inverse.arcsine') },
          { label: 'Arccosine (lesson)', url: ruleUrl('lesson.trig.inverse.arccosine') },
          { label: 'Arctangent (lesson)', url: ruleUrl('lesson.trig.inverse.arctangent') },
        ],
      },
    },
    {
      id: 'trig-inequalities',
      slug: 'trig-inequalities',
      name: 'How to solve a trigonometric inequality',
      description: 'Solve the matching equation, then read the intervals off the unit circle or the graph.',
      uses: ['trig equations', 'unit circle', 'periodicity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'graphs',
      indexed: false,
      seo: {
        title: 'How to Solve Trigonometric Inequalities (Step by Step) | Learn Math Class',
        description: 'Solve trig inequalities: isolate the function, solve the matching equation on one period, read the intervals off the graph, then add the period.',
        keywords: ['trigonometric inequalities', 'how to solve trig inequalities', 'sin x > 1/2', 'trig inequality examples', 'unit circle inequality'],
      },
      page: {
        h1: 'How to Solve a Trigonometric Inequality',
        lead:
          'Turn the inequality into an equation, find its solutions in one period, and look at the graph (or the unit circle) to see where the function is above or below the line. The boundary points split the period into intervals.',
        recognize:
          'A trig function compared with a number: $\\sin x > \\frac{1}{2}$, $\\cos x \\le -\\frac{\\sqrt{2}}{2}$, $2\\sin x + 1 \\ge 0$, $\\tan x < 1$, usually on $[0, 2\\pi)$ or for all $x$.',
        recognizeNote: `The lesson covers ${link('lesson.trig.inequalities.intervals', 'solutions as intervals')} by the ${link('lesson.trig.inequalities.graphical', 'graphical method')} and the ${link('lesson.trig.inequalities.unit-circle', 'unit circle method')}.`,
        steps: {
          traceLabel: 'On $2\\sin x + 1 \\ge 0$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Isolate the trig function.',
              body: 'As in a linear inequality; flip the sign when dividing by a negative.',
              state: '$\\sin x \\ge -\\frac{1}{2}$',
            },
            {
              title: 'Solve the matching equation on one period.',
              body: `See [basic trig equations](!/trigonometry/equations/methods/basic-trig-equations).`,
              state: '$\\sin x = -\\frac{1}{2}$ at $x = \\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$',
            },
            {
              title: 'Decide which intervals satisfy the inequality.',
              body: 'Test one point in each piece, or look at the graph: $\\sin x$ dips below $-\\frac{1}{2}$ only between the two boundary points.',
              state: '$\\sin x < -\\frac{1}{2}$ on $(\\frac{7\\pi}{6}, \\frac{11\\pi}{6})$',
            },
            {
              title: 'Write the solution set; add the period for all x.',
              body: 'Include the boundary points for $\\le$ or $\\ge$.',
              state: '$\\left[0, \\frac{7\\pi}{6}\\right] \\cup \\left[\\frac{11\\pi}{6}, 2\\pi\\right)$',
            },
          ],
        },
        examples: [
          {
            title: 'sine above a value',
            badge: 'one interval',
            lines: [
              { math: '$\\sin x > \\frac{1}{2}$ on $[0, 2\\pi)$: boundary $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$', why: '' },
              { math: '$\\left(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right)$; for all $x$: $\\left(\\frac{\\pi}{6} + 2k\\pi, \\frac{5\\pi}{6} + 2k\\pi\\right)$', why: '', answer: true },
            ],
          },
          {
            title: 'cosine below a value',
            badge: 'closed interval',
            lines: [
              { math: '$\\cos x \\le -\\frac{\\sqrt{2}}{2}$: boundary $\\frac{3\\pi}{4}$, $\\frac{5\\pi}{4}$', why: '' },
              { math: '$\\left[\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right]$', why: '', answer: true },
            ],
          },
          {
            title: 'tangent',
            badge: 'period π',
            lines: [
              { math: '$\\tan x < 1$ on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$: boundary $\\frac{\\pi}{4}$', why: 'tangent increases' },
              { math: '$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{4}\\right)$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw $y = \\sin x$ and the horizontal line $y = -\\frac{1}{2}$. The curve is above the line everywhere except a single dip between $\\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$. The inequality asks for the $x$-values of the part above the line.',
        },
        pitfalls: [
          {
            title: 'Applying arcsin to both sides',
            wrong: '$\\sin x > \\frac{1}{2} \\Rightarrow x > \\frac{\\pi}{6}$',
            right: 'sine rises and falls; the solution is $(\\frac{\\pi}{6}, \\frac{5\\pi}{6})$',
          },
          {
            title: 'Only one boundary point',
            wrong: 'using $\\frac{7\\pi}{6}$ alone',
            right: 'find every solution of the equation in the period',
          },
          {
            title: 'Wrong period for tangent',
            wrong: 'adding $2k\\pi$ to a tangent solution',
            right: 'tangent repeats every $\\pi$',
          },
        ],
        related: ['inverse-trig-values', 'graph-sine-cosine', 'unit-circle-values'],
        builtOn: [
          { label: 'Graphical method (lesson)', url: ruleUrl('lesson.trig.inequalities.graphical') },
          { label: 'Sine inequalities (lesson)', url: ruleUrl('lesson.trig.inequalities.sine') },
          { label: 'Cosine and tangent inequalities (lesson)', url: ruleUrl('lesson.trig.inequalities.cosine-tangent') },
        ],
      },
    },

    // ═══ Strategy ═════════════════════════════════════════════════════
    {
      id: 'which-triangle-law',
      slug: 'which-triangle-law',
      name: 'Which method should I use to solve a triangle?',
      description: 'A decision tree from what you know about the triangle to the method that solves it.',
      uses: 'leads to 5 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Law of Sines or Law of Cosines? Triangle Decision Tree | Learn Math Class',
        description: 'Choose how to solve a triangle: ratios for a right angle, law of sines for AAS or ASA, law of cosines for SAS or SSS, the ambiguous case for SSA.',
        keywords: ['law of sines or cosines', 'which law to use', 'solve any triangle', 'SSS SAS ASA AAS SSA', 'triangle decision tree'],
      },
      page: {
        h1: 'Which Method Should I Use to Solve a Triangle?',
        lead:
          'What you know decides the method. A right angle means plain ratios; otherwise the pattern of known sides (S) and angles (A) points to the law of sines, the law of cosines, or the ambiguous case.',
        tree: {
          rootId: 'area',
          svgW: 1050,
          nodes: {
            area: {
              type: 'q',
              text: 'Is only the area asked?',
              children: [
                { label: 'yes', to: 'areaLeaf' },
                { label: 'no', to: 'right' },
              ],
            },
            right: {
              type: 'q',
              text: 'Is there a right angle?',
              children: [
                { label: 'yes', to: 'rightLeaf' },
                { label: 'no', to: 'given' },
              ],
            },
            given: {
              type: 'q',
              text: 'What is known?',
              children: [
                { label: 'AAS or ASA', to: 'sines' },
                { label: 'SAS', to: 'cosSAS' },
                { label: 'SSS', to: 'cosSSS' },
                { label: 'SSA', to: 'ssa' },
              ],
            },
            areaLeaf: { type: 'leaf', to: 'triangle-area', short: 'Area formula' },
            rightLeaf: { type: 'leaf', to: 'solve-right-triangle', short: 'SOH-CAH-TOA' },
            sines: { type: 'leaf', to: 'law-of-sines', short: 'Law of sines' },
            cosSAS: { type: 'leaf', to: 'law-of-cosines', short: 'Law of cosines (side)' },
            cosSSS: { type: 'leaf', to: 'law-of-cosines', short: 'Law of cosines (angle)' },
            ssa: { type: 'leaf', to: 'ambiguous-case', short: 'Ambiguous case' },
          },
          branches: [
            {
              condition: 'Only the area is wanted.',
              answer: `Use [the area formulas](!${HUB}/triangle-area): $\\frac{1}{2}ab\\sin C$ for SAS, Heron for SSS.`,
            },
            {
              condition: 'The triangle has a right angle.',
              answer: `[Solve the right triangle](!${HUB}/solve-right-triangle) with sine, cosine and tangent (${link('lesson.trig.right-triangle.ratios', 'the ratios')}).`,
            },
            {
              condition: 'Two angles and any side are known (AAS or ASA).',
              answer: `Use the [law of sines](!${HUB}/law-of-sines) (${link('trig.law-of-sines', 'formula')}).`,
            },
            {
              condition: 'Two sides and the angle between them are known (SAS).',
              answer: `Use the [law of cosines](!${HUB}/law-of-cosines) to find the third side (${link('trig.law-of-cosines', 'formula')}).`,
            },
            {
              condition: 'All three sides are known (SSS).',
              answer: `Use the [law of cosines](!${HUB}/law-of-cosines) in its angle form, largest angle first.`,
            },
            {
              condition: 'Two sides and an angle not between them are known (SSA).',
              answer: `Work through the [ambiguous case](!${HUB}/ambiguous-case): there may be zero, one or two triangles.`,
            },
          ],
        },
        related: ['law-of-sines', 'law-of-cosines', 'ambiguous-case'],
        builtOn: [
          { label: 'Choosing between the two laws (lesson)', url: ruleUrl('lesson.trig.laws.choosing') },
          { label: 'Law of sines', url: ruleUrl('trig.law-of-sines') },
          { label: 'Law of cosines', url: ruleUrl('trig.law-of-cosines') },
        ],
      },
    },

    // ═══ Applied ══════════════════════════════════════════════════════
    {
      id: 'heights-distances-problems',
      slug: 'heights-distances-problems',
      name: 'How to solve height and distance problems',
      description: 'Angles of elevation and depression: draw the right triangle, pick the ratio, solve.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Height and Distance Problems (Elevation and Depression) | Learn Math Class',
        description: 'Solve elevation and depression problems: sketch the right triangle, place the angle, label known and unknown sides, pick the ratio, solve. Examples.',
        keywords: ['angle of elevation problems', 'angle of depression problems', 'height and distance trigonometry', 'trigonometry word problems'],
      },
      page: {
        h1: 'How to Solve Height and Distance Problems',
        lead:
          'An observer looks up (elevation) or down (depression) at an object. The line of sight, the horizontal and the vertical form a right triangle, and one trig ratio connects the height, the distance and the angle.',
        recognize:
          'Trigger words: **angle of elevation**, **angle of depression**, **looks up at**, **from the top of**, **how tall**, **how far**. A height or a horizontal distance is unknown, an angle is measured from the horizontal.',
        setup: [
          { label: 'Sketch', body: 'Draw the ground, the object and the observer. Draw the horizontal through the observer\'s eye.' },
          { label: 'Angle', body: 'Mark the angle between the horizontal and the line of sight. Elevation looks up, depression looks down; both are measured from the horizontal.' },
          { label: 'Triangle', body: 'Mark the right angle where the vertical meets the horizontal. Label the known side and the unknown side relative to the angle.' },
          { label: 'Ratio', body: 'Height and horizontal distance: tangent. A sloped length (a ramp, a kite string) with height: sine; with distance: cosine.' },
          { label: 'Two observers', body: 'With two angles from two points, write one tangent equation per observer and solve the pair.' },
        ],
        handoff: {
          to: 'solve-right-triangle',
          body: 'Solve the right triangle for the unknown side.',
        },
        interpretation:
          'Answer with units and sensible rounding. Add the observer\'s eye height if the question asks for the full height of the object. A depression angle from above equals the elevation angle from below, so either can be placed in the triangle.',
        examples: [
          {
            title: 'a tree',
            badge: 'elevation',
            lines: [
              { math: 'from $50$ m away, the top of a tree is at $32^\\circ$ elevation', why: '$\\tan 32^\\circ = \\frac{h}{50}$' },
              { math: '$h = 50\\tan 32^\\circ \\approx 31.24$ m', why: '', answer: true },
            ],
          },
          {
            title: 'a boat from a cliff',
            badge: 'depression',
            lines: [
              { math: 'from a $60$ m cliff, a boat is at $25^\\circ$ depression', why: '$\\tan 25^\\circ = \\frac{60}{d}$' },
              { math: '$d = \\frac{60}{\\tan 25^\\circ} \\approx 128.67$ m', why: '', answer: true },
            ],
          },
          {
            title: 'two observation points',
            badge: 'two equations',
            lines: [
              { math: 'a tower seen at $45^\\circ$ and, $20$ m further back, at $30^\\circ$', why: '$h = x\\tan 45^\\circ = x$, $h = (x + 20)\\tan 30^\\circ$' },
              { math: '$x = \\frac{x + 20}{\\sqrt{3}} \\Rightarrow x = \\frac{20}{\\sqrt{3} - 1}$', why: '' },
              { math: '$h \\approx 27.32$ m', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The horizontal through your eye, the vertical through the object and your line of sight always make a right angle at the foot of the vertical. Every height-and-distance problem is that one triangle, scaled and labelled differently.',
        },
        pitfalls: [
          {
            title: 'Depression angle measured from the vertical',
            wrong: 'putting $25^\\circ$ between the cliff face and the line of sight',
            right: 'depression is measured from the horizontal',
          },
          {
            title: 'Wrong ratio',
            wrong: '$\\sin 32^\\circ = \\frac{h}{50}$ with $50$ the ground distance',
            right: 'height and ground distance are opposite and adjacent: tangent',
          },
          {
            title: 'Forgetting the eye height',
            wrong: 'reporting $31.24$ m when the observer\'s eye is $1.6$ m up',
            right: 'add it if the question wants the full height: $32.84$ m',
          },
        ],
        related: ['solve-right-triangle', 'bearings-problems', 'law-of-sines'],
        builtOn: [
          { label: 'Angles of elevation and depression (lesson)', url: ruleUrl('lesson.trig.right-triangle.elevation') },
          { label: 'Finding missing sides (lesson)', url: ruleUrl('lesson.trig.right-triangle.missing-sides') },
        ],
      },
    },
    {
      id: 'bearings-problems',
      slug: 'bearings-problems',
      name: 'How to solve bearing problems',
      description: 'Navigation: turn bearings into angles of a triangle, then use the triangle laws.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Bearing Problems in Trigonometry | Learn Math Class',
        description: 'Solve bearing problems: draw north lines at every point, turn bearings into triangle angles, then use the law of cosines or sines, or east-north parts.',
        keywords: ['bearing problems trigonometry', 'navigation word problems', 'bearings and distances', 'true bearing', 'law of cosines word problems'],
      },
      page: {
        h1: 'How to Solve Bearing Problems',
        lead:
          'A bearing is an angle measured clockwise from north. Draw a north line at every point where a direction is given, turn the bearings into the interior angles of a triangle, and the problem becomes an ordinary triangle to solve.',
        recognize:
          'Trigger words: **bearing**, **heading**, **N 40° E**, **three-figure bearings** like $060^\\circ$, **sails**, **flies**, **how far apart**, **on what bearing must it return**. Ships, planes or walkers moving along straight legs.',
        setup: [
          { label: 'North lines', body: 'Draw a short north arrow at the start and at every turning point.' },
          { label: 'Legs', body: 'Draw each leg at its bearing, clockwise from north, with its length (speed × time).' },
          { label: 'Angles', body: 'Find the interior angles of the triangle from the bearings, using parallel north lines (co-interior angles add to $180^\\circ$).' },
          { label: 'Choose the law', body: 'Two sides and the angle between them: law of cosines; an angle-side pair known: law of sines; a right angle: plain ratios.' },
          { label: 'Components', body: 'Alternatively, split each leg into an east part $d\\sin\\theta$ and a north part $d\\cos\\theta$, add them, and use Pythagoras.' },
        ],
        handoff: {
          to: 'law-of-cosines',
          body: `Solve the triangle with the law of cosines (or the [law of sines](!${HUB}/law-of-sines)), then convert any angle back to a bearing.`,
        },
        interpretation:
          'Give distances with units and bearings as three figures clockwise from north ($096.9^\\circ$). Check the direction on the sketch: a bearing between $090^\\circ$ and $180^\\circ$ points south-east.',
        examples: [
          {
            title: 'two legs at right angles',
            badge: 'distance and bearing back',
            lines: [
              { math: '$40$ km on $060^\\circ$, then $30$ km on $150^\\circ$', why: 'the turn is $90^\\circ$' },
              { math: 'distance $\\sqrt{40^2 + 30^2} = 50$ km', why: '' },
              { math: 'bearing from the start $060^\\circ + \\arctan\\frac{30}{40} \\approx 096.9^\\circ$', why: '', answer: true },
            ],
          },
          {
            title: 'two ships from one port',
            badge: 'law of cosines',
            lines: [
              { math: 'bearings $040^\\circ$ at $20$ km/h and $110^\\circ$ at $15$ km/h, after $2$ h', why: 'sides $40$, $30$, angle $70^\\circ$' },
              { math: '$d^2 = 1600 + 900 - 2400\\cos 70^\\circ \\Rightarrow d \\approx 40.98$ km', why: '', answer: true },
            ],
          },
          {
            title: 'east and north parts',
            badge: 'components',
            lines: [
              { math: '$10$ km on $120^\\circ$: east $10\\sin 120^\\circ$, north $10\\cos 120^\\circ$', why: '' },
              { math: '$8.66$ km east, $5$ km south', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'North lines at two points are parallel, so the angle you turn through at a waypoint can be read from the two bearings. The triangle\'s interior angle at the turn is $180^\\circ$ minus that turn, which is the angle the law of cosines needs.',
        },
        pitfalls: [
          {
            title: 'Measuring anticlockwise or from east',
            wrong: 'bearing $060^\\circ$ drawn $60^\\circ$ above east',
            right: 'clockwise from north: $60^\\circ$ east of north',
          },
          {
            title: 'Using the turn instead of the interior angle',
            wrong: 'angle $90^\\circ$ "because the bearing changed by $90^\\circ$" in every case',
            right: 'interior angle $= 180^\\circ -$ change of direction; here both happen to be $90^\\circ$',
          },
          {
            title: 'Sine and cosine swapped in components',
            wrong: 'east part $d\\cos\\theta$',
            right: 'bearings start from north: east $= d\\sin\\theta$, north $= d\\cos\\theta$',
          },
        ],
        related: ['law-of-cosines', 'law-of-sines', 'heights-distances-problems'],
        builtOn: [
          { label: 'Law of cosines', url: ruleUrl('trig.law-of-cosines') },
          { label: 'Applications of the laws (lesson)', url: ruleUrl('lesson.trig.laws.applications') },
        ],
      },
    },
  ],

  categories: [
    { id: 'angles', label: 'Angles', blurb: 'converting, coterminal and reference angles' },
    { id: 'circle', label: 'The unit circle and exact values', blurb: 'values at any standard angle' },
    { id: 'triangles', label: 'Solving triangles', blurb: 'right triangles, the two laws, area' },
    { id: 'graphs', label: 'Graphs, inverses and inequalities', blurb: 'sinusoids, tangent, inverse functions, inequalities' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
    { id: 'applied', label: 'Word problems', blurb: 'heights, distances, bearings' },
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
    title: 'Trigonometry sub-hubs',
    links: [
      { url: '/trigonometry/equations/methods', label: 'Equations' },
      { url: '/trigonometry/identities/methods', label: 'Identities' },
    ],
  },
};

export default trigonometryMethods;
