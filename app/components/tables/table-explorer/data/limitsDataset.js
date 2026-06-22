// =========================================================
//   LimitsDataset
//   Common limits reference. Same shape as derivativeDataset
//   and integralsDataset so it drops into GenericTableExplorer
//   with no component changes.
//
//   Item fields:
//     f       LaTeX of the expression under the limit (no $..$)
//     point   LaTeX of the limit point ('0', '\\infty', '0^+', 'a', ...)
//     L       LaTeX of the value of the limit
//     fAlts   search keywords for the expression
//     LAlts   search keywords for the value
// =========================================================

const LIMITS_DATASET = {

  categories: {
    basic: {
      label: 'Basic limits',
      bg:    '#dbeafe', fg: '#1e40af',
      icon:  'c',
      desc:  'Constant, identity, and other elementary limits that follow from continuity.',
    },
    trigonometric: {
      label: 'Trigonometric limits',
      bg:    '#d1fae5', fg: '#065f46',
      icon:  'sin',
      desc:  'Classical trigonometric limits \u2014 the foundation of every trig derivative.',
    },
    exponential: {
      label: 'Exponential limits',
      bg:    '#ede9fe', fg: '#5b21b6',
      icon:  'e^x',
      desc:  'Limits that define or relate to the constant $e$.',
    },
    logarithmic: {
      label: 'Logarithmic limits',
      bg:    '#e0e7ff', fg: '#3730a3',
      icon:  'ln',
      desc:  'Limits involving the natural logarithm.',
    },
    atInfinity: {
      label: 'Limits at infinity',
      bg:    '#cffafe', fg: '#155e75',
      icon:  '\u221E',
      desc:  'End behavior of polynomial, rational, exponential, and logarithmic expressions.',
    },
    oneSided: {
      label: 'One-sided limits',
      bg:    '#ffe4e6', fg: '#9f1239',
      icon:  '0\u207A',
      desc:  'Limits approached from the right or left only \u2014 useful where the two-sided limit fails to exist.',
    },
  },

  items: [
    // ─── BASIC ────────────────────────────────────────────
    {
      id: 'b_const',
      cat: 'basic',
      title: 'Constant',
      f: 'c',
      point: 'a',
      L: 'c',
      fAlts: ['constant'],
      LAlts: ['c', 'constant'],
      tip: 'A constant function takes the same value everywhere, so its limit at any point equals the constant itself.',
    },
    {
      id: 'b_ident',
      cat: 'basic',
      title: 'Identity',
      f: 'x',
      point: 'a',
      L: 'a',
      fAlts: ['identity', 'x'],
      LAlts: ['a'],
      tip: 'The identity function is continuous everywhere, so $\\lim_{x \\to a} x = a$.',
    },
    {
      id: 'b_power',
      cat: 'basic',
      title: 'Power at a point',
      f: 'x^n',
      point: 'a',
      L: 'a^n',
      fAlts: ['power', 'x^n'],
      LAlts: ['a^n'],
      tip: 'Polynomials are continuous everywhere, so the limit equals the value at the point.',
    },

    // ─── TRIGONOMETRIC ────────────────────────────────────
    {
      id: 't_sinx_x',
      cat: 'trigonometric',
      title: 'Sine over x',
      f: '\\dfrac{\\sin(x)}{x}',
      point: '0',
      L: '1',
      fAlts: ['sin(x)/x', 'sinx/x'],
      LAlts: ['1', 'one'],
      tip: 'The foundational trigonometric limit. Proven by the squeeze theorem. Every standard trigonometric derivative reduces to this.',
    },
    {
      id: 't_tanx_x',
      cat: 'trigonometric',
      title: 'Tangent over x',
      f: '\\dfrac{\\tan(x)}{x}',
      point: '0',
      L: '1',
      fAlts: ['tan(x)/x', 'tanx/x'],
      LAlts: ['1', 'one'],
      tip: 'Follows from $\\sin(x)/x \\to 1$ and $\\cos(x) \\to 1$ at $x = 0$.',
    },
    {
      id: 't_1cos_x',
      cat: 'trigonometric',
      title: '(1 - cos x) over x',
      f: '\\dfrac{1 - \\cos(x)}{x}',
      point: '0',
      L: '0',
      fAlts: ['(1-cos(x))/x', '1-cosx/x'],
      LAlts: ['0', 'zero'],
      tip: 'Multiply top and bottom by $1 + \\cos(x)$ to get $\\sin^2(x)/(x(1+\\cos(x)))$, which goes to $0$.',
    },
    {
      id: 't_1cos_x2',
      cat: 'trigonometric',
      title: '(1 - cos x) over x squared',
      f: '\\dfrac{1 - \\cos(x)}{x^2}',
      point: '0',
      L: '\\dfrac{1}{2}',
      fAlts: ['(1-cos(x))/x^2'],
      LAlts: ['1/2', 'one half'],
      tip: 'Same trick \u2014 the extra factor of $x$ in the denominator is exactly what is needed to give $1/2$.',
    },
    {
      id: 't_sinkx_x',
      cat: 'trigonometric',
      title: 'Sine of kx over x',
      f: '\\dfrac{\\sin(kx)}{x}',
      point: '0',
      L: 'k',
      fAlts: ['sin(kx)/x'],
      LAlts: ['k'],
      tip: 'Rewrite as $k \\cdot \\sin(kx)/(kx)$; the inner factor goes to $1$.',
    },
    {
      id: 't_sinx_inf',
      cat: 'trigonometric',
      title: 'Sine over x at infinity',
      f: '\\dfrac{\\sin(x)}{x}',
      point: '\\infty',
      L: '0',
      fAlts: ['sin(x)/x at infinity'],
      LAlts: ['0', 'zero'],
      tip: 'By the squeeze theorem: $|\\sin(x)| \\leq 1$, so $|\\sin(x)/x| \\leq 1/|x| \\to 0$.',
    },

    // ─── EXPONENTIAL ──────────────────────────────────────
    {
      id: 'e_def_e_inf',
      cat: 'exponential',
      title: 'Definition of e at infinity',
      f: '\\left(1 + \\dfrac{1}{x}\\right)^x',
      point: '\\infty',
      L: 'e',
      fAlts: ['(1+1/x)^x'],
      LAlts: ['e'],
      tip: 'One of the classical definitions of $e$.',
    },
    {
      id: 'e_def_e_zero',
      cat: 'exponential',
      title: 'Definition of e at zero',
      f: '(1 + x)^{1/x}',
      point: '0',
      L: 'e',
      fAlts: ['(1+x)^(1/x)'],
      LAlts: ['e'],
      tip: 'Substitute $u = 1/x$ to convert this form into the infinity version of the same definition.',
    },
    {
      id: 'e_def_ea',
      cat: 'exponential',
      title: 'Scaled definition of e',
      f: '\\left(1 + \\dfrac{a}{x}\\right)^x',
      point: '\\infty',
      L: 'e^a',
      fAlts: ['(1+a/x)^x'],
      LAlts: ['e^a'],
      tip: 'Generalization of the classical limit. Substitute $u = x/a$ to recover the basic form.',
    },
    {
      id: 'e_ex_minus1',
      cat: 'exponential',
      title: 'e to the x minus one over x',
      f: '\\dfrac{e^x - 1}{x}',
      point: '0',
      L: '1',
      fAlts: ['(e^x-1)/x'],
      LAlts: ['1', 'one'],
      tip: 'This is exactly the derivative of $e^x$ at $x = 0$, which equals $e^0 = 1$.',
    },
    {
      id: 'e_ax_minus1',
      cat: 'exponential',
      title: 'a to the x minus one over x',
      f: '\\dfrac{a^x - 1}{x}',
      point: '0',
      L: '\\ln(a)',
      fAlts: ['(a^x-1)/x'],
      LAlts: ['ln(a)', 'ln a'],
      tip: 'This is the derivative of $a^x$ at $x = 0$, which equals $a^0 \\ln(a) = \\ln(a)$.',
    },

    // ─── LOGARITHMIC ──────────────────────────────────────
    {
      id: 'l_ln1x_x',
      cat: 'logarithmic',
      title: 'ln(1+x) over x',
      f: '\\dfrac{\\ln(1 + x)}{x}',
      point: '0',
      L: '1',
      fAlts: ['ln(1+x)/x'],
      LAlts: ['1', 'one'],
      tip: 'The derivative of $\\ln(1+x)$ at $x = 0$. Equivalent to $\\ln$ of the classical $e$-limit.',
    },
    {
      id: 'l_lnx_x',
      cat: 'logarithmic',
      title: 'ln x over x at infinity',
      f: '\\dfrac{\\ln(x)}{x}',
      point: '\\infty',
      L: '0',
      fAlts: ['ln(x)/x at infinity'],
      LAlts: ['0', 'zero'],
      tip: 'Polynomials grow faster than logarithms. Confirmed by L\\\'H\u00F4pital\\\'s rule: $\\lim 1/x = 0$.',
    },
    {
      id: 'l_xlnx',
      cat: 'logarithmic',
      title: 'x times ln x at 0+',
      f: 'x\\ln(x)',
      point: '0^+',
      L: '0',
      fAlts: ['x ln(x)', 'x*ln(x)'],
      LAlts: ['0', 'zero'],
      tip: 'The $\\ln(x) \\to -\\infty$ is dominated by the $x \\to 0$. Confirmable by L\\\'H\u00F4pital after rewriting as $\\ln(x)/(1/x)$.',
    },

    // ─── AT INFINITY ──────────────────────────────────────
    {
      id: 'i_recip',
      cat: 'atInfinity',
      title: 'Reciprocal at infinity',
      f: '\\dfrac{1}{x}',
      point: '\\infty',
      L: '0',
      fAlts: ['1/x at infinity'],
      LAlts: ['0', 'zero'],
      tip: 'The cornerstone limit at infinity. Everything that grows without bound has reciprocal going to zero.',
    },
    {
      id: 'i_recipn',
      cat: 'atInfinity',
      title: 'Reciprocal power at infinity',
      f: '\\dfrac{1}{x^n}',
      point: '\\infty',
      L: '0',
      fAlts: ['1/x^n at infinity'],
      LAlts: ['0', 'zero'],
      tip: 'Valid for $n > 0$. The larger the exponent, the faster the approach to zero.',
    },
    {
      id: 'i_xpow_inf',
      cat: 'atInfinity',
      title: 'Power at infinity',
      f: 'x^n',
      point: '\\infty',
      L: '\\infty',
      fAlts: ['x^n at infinity'],
      LAlts: ['infinity', 'infty'],
      tip: 'For $n > 0$. Positive powers of $x$ grow without bound.',
    },
    {
      id: 'i_xn_ex',
      cat: 'atInfinity',
      title: 'Power over exponential',
      f: '\\dfrac{x^n}{e^x}',
      point: '\\infty',
      L: '0',
      fAlts: ['x^n/e^x'],
      LAlts: ['0', 'zero'],
      tip: 'Exponentials dominate polynomials. Provable by repeated L\\\'H\u00F4pital, peeling off one factor of $x$ at a time.',
    },
    {
      id: 'i_lnx_xn',
      cat: 'atInfinity',
      title: 'Logarithm over power',
      f: '\\dfrac{\\ln(x)}{x^n}',
      point: '\\infty',
      L: '0',
      fAlts: ['ln(x)/x^n'],
      LAlts: ['0', 'zero'],
      tip: 'Valid for $n > 0$. Polynomials dominate logarithms by the same L\\\'H\u00F4pital argument.',
    },
    {
      id: 'i_eneg',
      cat: 'atInfinity',
      title: 'Negative exponential',
      f: 'e^{-x}',
      point: '\\infty',
      L: '0',
      fAlts: ['e^-x', 'e^(-x)'],
      LAlts: ['0', 'zero'],
      tip: 'Decay limit. Equivalent to $1/e^x$, which goes to zero by the reciprocal-at-infinity argument.',
    },
    {
      id: 'i_x1x',
      cat: 'atInfinity',
      title: 'x to the one over x',
      f: 'x^{1/x}',
      point: '\\infty',
      L: '1',
      fAlts: ['x^(1/x)'],
      LAlts: ['1', 'one'],
      tip: 'Take $\\ln$: $\\ln(x)/x \\to 0$, so the original goes to $e^0 = 1$.',
    },

    // ─── ONE-SIDED ────────────────────────────────────────
    {
      id: 'o_recip_plus',
      cat: 'oneSided',
      title: 'Reciprocal from the right',
      f: '\\dfrac{1}{x}',
      point: '0^+',
      L: '+\\infty',
      fAlts: ['1/x at 0+'],
      LAlts: ['+infinity', '+infty', 'positive infinity'],
      tip: 'As $x$ approaches $0$ from positive side, $1/x$ grows without bound.',
    },
    {
      id: 'o_recip_minus',
      cat: 'oneSided',
      title: 'Reciprocal from the left',
      f: '\\dfrac{1}{x}',
      point: '0^-',
      L: '-\\infty',
      fAlts: ['1/x at 0-'],
      LAlts: ['-infinity', '-infty', 'negative infinity'],
      tip: 'Mirror of the right-hand limit. The two-sided limit does not exist because the one-sided values disagree.',
    },
    {
      id: 'o_sqrt_plus',
      cat: 'oneSided',
      title: 'Square root from the right',
      f: '\\sqrt{x}',
      point: '0^+',
      L: '0',
      fAlts: ['sqrt(x) at 0+'],
      LAlts: ['0', 'zero'],
      tip: 'The square root is only defined for $x \\geq 0$, so only the right-hand limit makes sense at $0$.',
    },
    {
      id: 'o_xx_plus',
      cat: 'oneSided',
      title: 'x to the x from the right',
      f: 'x^x',
      point: '0^+',
      L: '1',
      fAlts: ['x^x at 0+'],
      LAlts: ['1', 'one'],
      tip: 'Take $\\ln$: $x \\ln(x) \\to 0$, so the original goes to $e^0 = 1$. An indeterminate form $0^0$ resolved.',
    },
  ],

  properties: [
    {
      icon: '+',
      title: 'Sum and difference',
      body: 'The limit of a sum (or difference) is the sum (or difference) of the limits, provided both exist.',
      example: '$\\displaystyle\\lim_{x \\to a}\\bigl(f(x) \\pm g(x)\\bigr) = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x)$',
    },
    {
      icon: '\u00D7',
      title: 'Product and constant multiple',
      body: 'The limit of a product is the product of the limits. Constants pull out of the limit.',
      example: '$\\displaystyle\\lim_{x \\to a}\\bigl(f(x)\\,g(x)\\bigr) = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$',
    },
    {
      icon: '\u00F7',
      title: 'Quotient',
      body: 'The limit of a quotient is the quotient of the limits, provided the denominator&apos;s limit is not zero.',
      example: '$\\displaystyle\\lim_{x \\to a}\\dfrac{f(x)}{g(x)} = \\dfrac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\lim g \\neq 0$',
    },
    {
      icon: '\u2248',
      title: 'Squeeze theorem',
      body: 'If $f(x) \\leq g(x) \\leq h(x)$ near $a$ and $\\lim f = \\lim h = L$, then $\\lim g = L$ as well. Useful when direct evaluation is hard but bounds are easy.',
      example: '$\\displaystyle\\lim_{x \\to 0} x^2 \\sin(1/x) = 0 \\quad \\text{since} \\quad -x^2 \\leq x^2\\sin(1/x) \\leq x^2$',
    },
    {
      icon: 'L',
      title: 'L\\\'H\u00F4pital\\\'s rule',
      body: 'For indeterminate forms $0/0$ or $\\infty/\\infty$, differentiating top and bottom separately gives a limit of the same value (when it exists).',
      example: '$\\displaystyle\\lim_{x \\to a}\\dfrac{f(x)}{g(x)} = \\lim_{x \\to a}\\dfrac{f\\\'(x)}{g\\\'(x)}$',
    },
    {
      icon: 'C',
      title: 'Continuity',
      body: 'A function is continuous at $a$ exactly when the limit equals the value. Every polynomial, rational, exponential, logarithmic, and trig function is continuous on its domain.',
      example: '$\\displaystyle f \\text{ continuous at } a \\iff \\lim_{x \\to a} f(x) = f(a)$',
    },
  ],

  templates: {
    left:  (d) => `$\\displaystyle\\lim_{x \\to ${d.point}} ${d.f}$`,
    right: (d) => `$${d.L}$`,
    full:  (d) => `$\\displaystyle\\lim_{x \\to ${d.point}} ${d.f} \\;=\\; ${d.L}$`,
    input: (d) => `$\\displaystyle\\lim_{x \\to ${d.point}} ${d.f}$`,
    detailLabels: { left: 'Limit expression', right: 'Value' },
  },

  searchModes: [
    {
      id: 'byF',
      label: 'Find by expression',
      placeholder: 'Search by the expression (e.g., sin(x)/x, (1+1/x)^x)',
      mainKey: 'f',
      altKey:  'fAlts',
    },
    {
      id: 'byL',
      label: 'Find by value',
      placeholder: 'Search by the value of the limit (e.g., 1, e, 0, infinity)',
      mainKey: 'L',
      altKey:  'LAlts',
    },
  ],

  meta: {
    intro:               'Reference table of common limit identities. Try **puzzle** mode to drill, or read the full',
    introLinkText:       'limits explanation \u2192',
    articleHref:         '/calculus/limits/common',
    toolTitle:           'Common limits tool',
    toolSubtitle:        'Search by expression, by value, by name \u2014 or pick a family.',
    categoriesTitle:     'Families of limits',
    categoriesSubtitle:  'Click a family to highlight its entries in the table above.',
    propertiesTitle:     'Limit laws and theorems',
    propertiesSubtitle:  'The rules that combine, transform, and evaluate limits.',
    referenceModeNote:   'Reference mode: click any card to see the full identity and details.',
    puzzleModeNote:      'Puzzle mode: drag each value tile to its matching limit expression.',
  },

  theme: null,

  // -------------------------------------------------------
  // Quiz generator. Called on every "next question" by QuizWidget.
  // Returns { question, options, correct }. Rotates three types:
  //   1. Given a limit, pick its value.
  //   2. Given a value, pick which limit equals it.
  //   3. Given a limit, pick its family.
  // Each question has 4 options, one correct + three distractors.
  // -------------------------------------------------------
  quizGenerator: () => {
    const items      = LIMITS_DATASET.items;
    const categories = LIMITS_DATASET.categories;

    const rand    = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const pickN = (arr, n) => shuffle(arr).slice(0, n);
    const limitStr = (d) => `$\\displaystyle\\lim_{x \\to ${d.point}} ${d.f}$`;

    const subject = rand(items);
    const type    = rand(['value', 'expression', 'category']);

    if (type === 'value') {
      const distractors = pickN(
        items.filter((d) => d.L !== subject.L),
        3,
      ).map((d) => `$${d.L}$`);
      const correct = `$${subject.L}$`;
      return {
        question: `What is $\\displaystyle\\lim_{x \\to ${subject.point}} ${subject.f}$?`,
        options:  shuffle([correct, ...distractors]),
        correct,
      };
    }

    if (type === 'expression') {
      // Distractors must have a different value so the question has a unique answer.
      const distractors = pickN(
        items.filter((d) => d.L !== subject.L),
        3,
      ).map(limitStr);
      const correct = limitStr(subject);
      return {
        question: `Which limit equals $${subject.L}$?`,
        options:  shuffle([correct, ...distractors]),
        correct,
      };
    }

    // type === 'category'
    const catIds       = Object.keys(categories);
    const correctLabel = categories[subject.cat].label;
    const distractors  = pickN(
      catIds.filter((id) => id !== subject.cat),
      3,
    ).map((id) => categories[id].label);
    return {
      question: `Which family does $\\displaystyle\\lim_{x \\to ${subject.point}} ${subject.f}$ belong to?`,
      options:  shuffle([correctLabel, ...distractors]),
      correct:  correctLabel,
    };
  },
};

export default LIMITS_DATASET;