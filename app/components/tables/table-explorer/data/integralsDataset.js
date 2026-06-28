// // =========================================================
// //   IntegralsDataset
// //   Indefinite integrals reference. Same shape as
// //   derivativeDataset so it drops into GenericTableExplorer
// //   with no component changes.
// // =========================================================

// const INTEGRALS_DATASET = {

//   categories: {
//     polynomial: {
//       label: 'Polynomial',
//       bg:    '#dbeafe', fg: '#1e40af',
//       icon:  'x^n',
//       desc:  'Powers of $x$, roots, and reciprocals \u2014 the power rule, reversed.',
//     },
//     exponential: {
//       label: 'Exponential',
//       bg:    '#ede9fe', fg: '#5b21b6',
//       icon:  'e^x',
//       desc:  'Natural and general exponential integrands.',
//     },
//     logarithmic: {
//       label: 'Logarithmic',
//       bg:    '#e0e7ff', fg: '#3730a3',
//       icon:  'ln',
//       desc:  'Reciprocal and logarithmic integrands.',
//     },
//     trigonometry: {
//       label: 'Trigonometry',
//       bg:    '#d1fae5', fg: '#065f46',
//       icon:  'sin',
//       desc:  'All six basic trigonometric functions and their squared / product forms.',
//     },
//     inverseTrigonometry: {
//       label: 'Inverse trigonometry',
//       bg:    '#ffe4e6', fg: '#9f1239',
//       icon:  'arc',
//       desc:  'Integrands whose antiderivative is an inverse trigonometric function.',
//     },
//     hyperbolic: {
//       label: 'Hyperbolic',
//       bg:    '#ffedd5', fg: '#9a3412',
//       icon:  'sinh',
//       desc:  'Hyperbolic sine, cosine, and their relatives.',
//     },
//   },

//   items: [
//     // ─── POLYNOMIAL ────────────────────────────────────────
//     {
//       id: 'p_const',
//       cat: 'polynomial',
//       title: 'Constant rule',
//       f: 'k',
//       fAlts: ['constant', 'k'],
//       F: 'kx',
//       FAlts: ['kx'],
//       tip: 'The antiderivative of a constant $k$ is $kx$. Special case: $\\int 1\\, dx = x + C$.',
//     },
//     {
//       id: 'p_ident',
//       cat: 'polynomial',
//       title: 'Identity',
//       f: 'x',
//       fAlts: ['x'],
//       F: '\\dfrac{x^2}{2}',
//       FAlts: ['x^2/2'],
//       tip: 'Special case of the power rule with $n = 1$.',
//     },
//     {
//       id: 'p_power',
//       cat: 'polynomial',
//       title: 'Power rule',
//       f: 'x^n',
//       fAlts: ['x^n', 'x^k', 'power'],
//       F: '\\dfrac{x^{n+1}}{n+1}',
//       FAlts: ['x^(n+1)/(n+1)'],
//       tip: 'Increment the exponent by 1, divide by the new exponent. Requires $n \\neq -1$ \u2014 for $n = -1$, see the $1/x$ entry.',
//     },
//     {
//       id: 'p_sqrt',
//       cat: 'polynomial',
//       title: 'Square root',
//       f: '\\sqrt{x}',
//       fAlts: ['sqrt(x)', 'x^(1/2)', 'x^0.5'],
//       F: '\\dfrac{2}{3}\\,x^{3/2}',
//       FAlts: ['(2/3)x^(3/2)'],
//       tip: 'Apply the power rule with $n = \\tfrac{1}{2}$.',
//     },
//     {
//       id: 'p_recip2',
//       cat: 'polynomial',
//       title: 'Reciprocal square',
//       f: '\\dfrac{1}{x^2}',
//       fAlts: ['1/x^2', 'x^-2', 'x^(-2)'],
//       F: '-\\dfrac{1}{x}',
//       FAlts: ['-1/x'],
//       tip: 'Power rule with $n = -2$.',
//     },

//     // ─── EXPONENTIAL ───────────────────────────────────────
//     {
//       id: 'e_ex',
//       cat: 'exponential',
//       title: 'Natural exponential',
//       f: 'e^x',
//       fAlts: ['e^x', 'exp(x)'],
//       F: 'e^x',
//       FAlts: ['e^x', 'exp(x)'],
//       tip: '$e^x$ is its own derivative and its own antiderivative.',
//     },
//     {
//       id: 'e_ekx',
//       cat: 'exponential',
//       title: 'Scaled exponential',
//       f: 'e^{kx}',
//       fAlts: ['e^(kx)', 'exp(kx)'],
//       F: '\\dfrac{e^{kx}}{k}',
//       FAlts: ['e^(kx)/k'],
//       tip: 'Divide by the inner coefficient. Reachable by $u$-substitution with $u = kx$.',
//     },
//     {
//       id: 'e_ax',
//       cat: 'exponential',
//       title: 'General exponential',
//       f: 'a^x',
//       fAlts: ['a^x'],
//       F: '\\dfrac{a^x}{\\ln a}',
//       FAlts: ['a^x/ln(a)'],
//       tip: 'Requires $a > 0$ and $a \\neq 1$. Reduces to the natural exponential when $a = e$.',
//     },

//     // ─── LOGARITHMIC ───────────────────────────────────────
//     {
//       id: 'l_recip',
//       cat: 'logarithmic',
//       title: 'Reciprocal',
//       f: '\\dfrac{1}{x}',
//       fAlts: ['1/x', 'x^-1', 'x^(-1)'],
//       F: '\\ln|x|',
//       FAlts: ['ln|x|'],
//       tip: 'The exception to the power rule. Absolute value keeps the formula valid for negative $x$.',
//     },
//     {
//       id: 'l_ln',
//       cat: 'logarithmic',
//       title: 'Natural logarithm',
//       f: '\\ln(x)',
//       fAlts: ['ln(x)', 'log(x)', 'log_e(x)'],
//       F: 'x\\ln(x) - x',
//       FAlts: ['x ln(x) - x'],
//       tip: 'Derive by parts with $u = \\ln(x)$, $dv = dx$.',
//     },

//     // ─── TRIGONOMETRY ──────────────────────────────────────
//     {
//       id: 't_sin',
//       cat: 'trigonometry',
//       title: 'Sine',
//       f: '\\sin(x)',
//       fAlts: ['sin(x)', 'sin x', 'sine'],
//       F: '-\\cos(x)',
//       FAlts: ['-cos(x)'],
//       tip: 'Mind the sign \u2014 $\\dfrac{d}{dx}[\\cos(x)] = -\\sin(x)$, so reversing gives a negative cosine.',
//     },
//     {
//       id: 't_cos',
//       cat: 'trigonometry',
//       title: 'Cosine',
//       f: '\\cos(x)',
//       fAlts: ['cos(x)', 'cos x', 'cosine'],
//       F: '\\sin(x)',
//       FAlts: ['sin(x)'],
//       tip: 'No sign flip \u2014 $\\dfrac{d}{dx}[\\sin(x)] = \\cos(x)$.',
//     },
//     {
//       id: 't_tan',
//       cat: 'trigonometry',
//       title: 'Tangent',
//       f: '\\tan(x)',
//       fAlts: ['tan(x)', 'tan x'],
//       F: '\\ln|\\sec(x)|',
//       FAlts: ['ln|sec(x)|', '-ln|cos(x)|'],
//       tip: 'Rewrite as $\\sin/\\cos$ and substitute $u = \\cos(x)$.',
//     },
//     {
//       id: 't_cot',
//       cat: 'trigonometry',
//       title: 'Cotangent',
//       f: '\\cot(x)',
//       fAlts: ['cot(x)', 'cot x'],
//       F: '\\ln|\\sin(x)|',
//       FAlts: ['ln|sin(x)|'],
//       tip: 'Substitute $u = \\sin(x)$.',
//     },
//     {
//       id: 't_sec',
//       cat: 'trigonometry',
//       title: 'Secant',
//       f: '\\sec(x)',
//       fAlts: ['sec(x)', 'sec x'],
//       F: '\\ln|\\sec(x) + \\tan(x)|',
//       FAlts: ['ln|sec(x) + tan(x)|'],
//       tip: 'Multiply numerator and denominator by $\\sec(x) + \\tan(x)$ to expose a $du/u$ structure.',
//     },
//     {
//       id: 't_csc',
//       cat: 'trigonometry',
//       title: 'Cosecant',
//       f: '\\csc(x)',
//       fAlts: ['csc(x)', 'csc x'],
//       F: '-\\ln|\\csc(x) + \\cot(x)|',
//       FAlts: ['-ln|csc(x) + cot(x)|'],
//       tip: 'Mirror of the secant trick \u2014 multiply numerator and denominator by $\\csc(x) + \\cot(x)$.',
//     },
//     {
//       id: 't_sec2',
//       cat: 'trigonometry',
//       title: 'Secant squared',
//       f: '\\sec^2(x)',
//       fAlts: ['sec^2(x)', 'sec(x)^2'],
//       F: '\\tan(x)',
//       FAlts: ['tan(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\tan(x)] = \\sec^2(x)$.',
//     },
//     {
//       id: 't_csc2',
//       cat: 'trigonometry',
//       title: 'Cosecant squared',
//       f: '\\csc^2(x)',
//       fAlts: ['csc^2(x)', 'csc(x)^2'],
//       F: '-\\cot(x)',
//       FAlts: ['-cot(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\cot(x)] = -\\csc^2(x)$.',
//     },
//     {
//       id: 't_sectan',
//       cat: 'trigonometry',
//       title: 'Secant \u00B7 Tangent',
//       f: '\\sec(x)\\tan(x)',
//       fAlts: ['sec(x) tan(x)', 'sec*tan'],
//       F: '\\sec(x)',
//       FAlts: ['sec(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\sec(x)] = \\sec(x)\\tan(x)$.',
//     },
//     {
//       id: 't_csccot',
//       cat: 'trigonometry',
//       title: 'Cosecant \u00B7 Cotangent',
//       f: '\\csc(x)\\cot(x)',
//       fAlts: ['csc(x) cot(x)', 'csc*cot'],
//       F: '-\\csc(x)',
//       FAlts: ['-csc(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\csc(x)] = -\\csc(x)\\cot(x)$.',
//     },

//     // ─── INVERSE TRIGONOMETRY ──────────────────────────────
//     {
//       id: 'i_arcsin',
//       cat: 'inverseTrigonometry',
//       title: 'Arcsine integrand',
//       f: '\\dfrac{1}{\\sqrt{1 - x^2}}',
//       fAlts: ['1/sqrt(1-x^2)', '1/(1-x^2)^(1/2)'],
//       F: '\\arcsin(x)',
//       FAlts: ['arcsin(x)', 'asin(x)', 'sin^-1(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\arcsin(x)] = \\dfrac{1}{\\sqrt{1 - x^2}}$. Valid for $|x| < 1$.',
//     },
//     {
//       id: 'i_arctan',
//       cat: 'inverseTrigonometry',
//       title: 'Arctangent integrand',
//       f: '\\dfrac{1}{1 + x^2}',
//       fAlts: ['1/(1+x^2)'],
//       F: '\\arctan(x)',
//       FAlts: ['arctan(x)', 'atan(x)', 'tan^-1(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\arctan(x)] = \\dfrac{1}{1 + x^2}$.',
//     },
//     {
//       id: 'i_arcsec',
//       cat: 'inverseTrigonometry',
//       title: 'Arcsecant integrand',
//       f: '\\dfrac{1}{x\\sqrt{x^2 - 1}}',
//       fAlts: ['1/(x sqrt(x^2-1))'],
//       F: '\\operatorname{arcsec}|x|',
//       FAlts: ['arcsec|x|', 'arcsec(x)'],
//       tip: 'Valid for $|x| > 1$. Some references drop the absolute value and require $x > 1$.',
//     },

//     // ─── HYPERBOLIC ────────────────────────────────────────
//     {
//       id: 'h_sinh',
//       cat: 'hyperbolic',
//       title: 'Hyperbolic sine',
//       f: '\\sinh(x)',
//       fAlts: ['sinh(x)', 'sinh x'],
//       F: '\\cosh(x)',
//       FAlts: ['cosh(x)'],
//       tip: 'Unlike circular sine, no sign flip \u2014 $\\dfrac{d}{dx}[\\cosh(x)] = \\sinh(x)$.',
//     },
//     {
//       id: 'h_cosh',
//       cat: 'hyperbolic',
//       title: 'Hyperbolic cosine',
//       f: '\\cosh(x)',
//       fAlts: ['cosh(x)', 'cosh x'],
//       F: '\\sinh(x)',
//       FAlts: ['sinh(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\sinh(x)] = \\cosh(x)$.',
//     },
//     {
//       id: 'h_tanh',
//       cat: 'hyperbolic',
//       title: 'Hyperbolic tangent',
//       f: '\\tanh(x)',
//       fAlts: ['tanh(x)'],
//       F: '\\ln(\\cosh(x))',
//       FAlts: ['ln(cosh(x))'],
//       tip: 'No absolute value needed \u2014 $\\cosh(x) > 0$ for all real $x$.',
//     },
//     {
//       id: 'h_sech2',
//       cat: 'hyperbolic',
//       title: 'Hyperbolic sech\u00B2',
//       f: '\\operatorname{sech}^2(x)',
//       fAlts: ['sech^2(x)'],
//       F: '\\tanh(x)',
//       FAlts: ['tanh(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\tanh(x)] = \\operatorname{sech}^2(x)$.',
//     },
//     {
//       id: 'h_csch2',
//       cat: 'hyperbolic',
//       title: 'Hyperbolic csch\u00B2',
//       f: '\\operatorname{csch}^2(x)',
//       fAlts: ['csch^2(x)'],
//       F: '-\\coth(x)',
//       FAlts: ['-coth(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\coth(x)] = -\\operatorname{csch}^2(x)$.',
//     },
//     {
//       id: 'h_sechtanh',
//       cat: 'hyperbolic',
//       title: 'sech \u00B7 tanh',
//       f: '\\operatorname{sech}(x)\\tanh(x)',
//       fAlts: ['sech(x) tanh(x)'],
//       F: '-\\operatorname{sech}(x)',
//       FAlts: ['-sech(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\operatorname{sech}(x)] = -\\operatorname{sech}(x)\\tanh(x)$.',
//     },
//     {
//       id: 'h_cschcoth',
//       cat: 'hyperbolic',
//       title: 'csch \u00B7 coth',
//       f: '\\operatorname{csch}(x)\\coth(x)',
//       fAlts: ['csch(x) coth(x)'],
//       F: '-\\operatorname{csch}(x)',
//       FAlts: ['-csch(x)'],
//       tip: 'Reverse of $\\dfrac{d}{dx}[\\operatorname{csch}(x)] = -\\operatorname{csch}(x)\\coth(x)$.',
//     },
//   ],

//   properties: [
//     {
//       icon: '+',
//       title: 'Linearity',
//       body: 'The integral of a sum is the sum of integrals, and a constant multiplier passes through the integral sign.',
//       example: '$\\displaystyle \\int \\!\\bigl(af(x) + bg(x)\\bigr)\\, dx = a\\!\\int\\! f(x)\\, dx + b\\!\\int\\! g(x)\\, dx$',
//     },
//     {
//       icon: 'C',
//       title: 'Constant of integration',
//       body: 'An indefinite integral is determined only up to an additive constant. Any two antiderivatives of the same function differ by a constant.',
//       example: '$\\displaystyle \\int\\! f(x)\\, dx = F(x) + C$',
//     },
//     {
//       icon: 'u',
//       title: 'Substitution',
//       body: 'When the integrand contains a function and its derivative, substitute $u = g(x)$ so that $du = g\\\'(x)\\, dx$. Reverses the chain rule.',
//       example: '$\\displaystyle \\int\\! f(g(x))\\, g\\\'(x)\\, dx = \\int\\! f(u)\\, du$',
//     },
//     {
//       icon: 'uv',
//       title: 'Integration by parts',
//       body: 'Reverses the product rule. Choose $u$ so it simplifies under differentiation, and $dv$ so you can integrate it.',
//       example: '$\\displaystyle \\int\\! u\\, dv = uv - \\int\\! v\\, du$',
//     },
//     {
//       icon: '\u2194',
//       title: 'Inverse of differentiation',
//       body: 'Integration and differentiation are inverse operations. Every entry in the derivatives table is also an integral, read backwards.',
//       example: '$\\displaystyle \\dfrac{d}{dx}\\!\\left[\\int\\! f(x)\\, dx\\right] = f(x)$',
//     },
//   ],

//   templates: {
//     left:  (d) => `$${d.f}$`,
//     right: (d) => `$${d.F} + C$`,
//     full:  (d) => `$\\displaystyle \\int ${d.f}\\, dx \\;=\\; ${d.F} + C$`,
//     input: (d) => `$\\displaystyle \\int ${d.f}\\, dx$`,
//     detailLabels: { left: 'Integrand', right: 'Antiderivative' },
//   },

//   searchModes: [
//     {
//       id: 'byF',
//       label: 'Find by f(x)',
//       placeholder: 'Search by integrand (e.g., sin(x), 1/x, x^n)',
//       mainKey: 'f',
//       altKey: 'fAlts',
//     },
//     {
//       id: 'byBigF',
//       label: 'Find by F(x)',
//       placeholder: 'Search by antiderivative (e.g., -cos(x), ln|x|, arctan(x))',
//       mainKey: 'F',
//       altKey: 'FAlts',
//     },
//   ],

//   meta: {
//     intro:               'Reference table of common indefinite integrals. Try **puzzle** mode to drill, or read the full',
//     introLinkText:       'integration explanation \u2192',
//     articleHref:         '/calculus/integrals/common',
//     toolTitle:           'Indefinite integral tool',
//     toolSubtitle:        'Search by integrand, by antiderivative, by name \u2014 or pick a family.',
//     categoriesTitle:     'Families of integrals',
//     categoriesSubtitle:  'Click a family to highlight its entries in the table above.',
//     propertiesTitle:     'Properties of indefinite integration',
//     propertiesSubtitle:  'Rules that combine and transform integrals.',
//     referenceModeNote:   'Reference mode: click any card to see the full formula and details.',
//     puzzleModeNote:      'Puzzle mode: drag each antiderivative tile to its matching integrand.',
//   },

//   theme: null,

//   // -------------------------------------------------------
//   // Quiz generator. Called on every "next question" by QuizWidget.
//   // Returns { question, options, correct }. Rotates three types:
//   //   1. Given f(x), pick its antiderivative F(x).
//   //   2. Given F(x), pick which f(x) integrates to it.
//   //   3. Given f(x), pick its family.
//   // Each question has 4 options, one correct + three distractors.
//   // -------------------------------------------------------
//   quizGenerator: () => {
//     const items      = INTEGRALS_DATASET.items;
//     const categories = INTEGRALS_DATASET.categories;

//     const rand    = (arr) => arr[Math.floor(Math.random() * arr.length)];
//     const shuffle = (arr) => {
//       const a = [...arr];
//       for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//       }
//       return a;
//     };
//     const pickN = (arr, n) => shuffle(arr).slice(0, n);

//     const subject = rand(items);
//     const type    = rand(['antiderivative', 'integrand', 'category']);

//     if (type === 'antiderivative') {
//       const distractors = pickN(
//         items.filter((d) => d.F !== subject.F),
//         3,
//       ).map((d) => `$${d.F} + C$`);
//       const correct = `$${subject.F} + C$`;
//       return {
//         question: `What is $\\displaystyle \\int ${subject.f}\\, dx$?`,
//         options:  shuffle([correct, ...distractors]),
//         correct,
//       };
//     }

//     if (type === 'integrand') {
//       const distractors = pickN(
//         items.filter((d) => d.f !== subject.f),
//         3,
//       ).map((d) => `$${d.f}$`);
//       const correct = `$${subject.f}$`;
//       return {
//         question: `Which integrand has antiderivative $${subject.F} + C$?`,
//         options:  shuffle([correct, ...distractors]),
//         correct,
//       };
//     }

//     // type === 'category'
//     const catIds       = Object.keys(categories);
//     const correctLabel = categories[subject.cat].label;
//     const distractors  = pickN(
//       catIds.filter((id) => id !== subject.cat),
//       3,
//     ).map((id) => categories[id].label);
//     return {
//       question: `Which family does $${subject.f}$ belong to?`,
//       options:  shuffle([correctLabel, ...distractors]),
//       correct:  correctLabel,
//     };
//   },
// };

// export default INTEGRALS_DATASET;


// =========================================================
//   IntegralsDataset
//   Indefinite integrals reference. Same shape as
//   derivativeDataset so it drops into GenericTableExplorer
//   with no component changes.
// =========================================================

const INTEGRALS_DATASET = {

  categories: {
    polynomial: {
      label: 'Polynomial',
      bg:    '#dbeafe', fg: '#1e40af',
      icon:  'x^n',
      desc:  'Powers of $x$, roots, and reciprocals \u2014 the power rule, reversed.',
    },
    exponential: {
      label: 'Exponential',
      bg:    '#ede9fe', fg: '#5b21b6',
      icon:  'e^x',
      desc:  'Natural and general exponential integrands.',
    },
    logarithmic: {
      label: 'Logarithmic',
      bg:    '#e0e7ff', fg: '#3730a3',
      icon:  'ln',
      desc:  'Reciprocal and logarithmic integrands.',
    },
    trigonometry: {
      label: 'Trigonometry',
      bg:    '#d1fae5', fg: '#065f46',
      icon:  'sin',
      desc:  'All six basic trigonometric functions and their squared / product forms.',
    },
    inverseTrigonometry: {
      label: 'Inverse trigonometry',
      bg:    '#ffe4e6', fg: '#9f1239',
      icon:  'arc',
      desc:  'Integrands whose antiderivative is an inverse trigonometric function.',
    },
    hyperbolic: {
      label: 'Hyperbolic',
      bg:    '#ffedd5', fg: '#9a3412',
      icon:  'sinh',
      desc:  'Hyperbolic sine, cosine, and their relatives.',
    },
  },

  items: [
    // ─── POLYNOMIAL ────────────────────────────────────────
    {
      id: 'p_const',
      cat: 'polynomial',
      title: 'Constant rule',
      f: 'k',
      fAlts: ['constant', 'k'],
      F: 'kx',
      FAlts: ['kx'],
      tip: 'The antiderivative of a constant $k$ is $kx$. Special case: $\\int 1\\, dx = x + C$.',
      link: '/calculus/integrals/special#2',
    },
    {
      id: 'p_ident',
      cat: 'polynomial',
      title: 'Identity',
      f: 'x',
      fAlts: ['x'],
      F: '\\dfrac{x^2}{2}',
      FAlts: ['x^2/2'],
      tip: 'Special case of the power rule with $n = 1$.',
      link: '/calculus/integrals/special#2',
    },
    {
      id: 'p_power',
      cat: 'polynomial',
      title: 'Power rule',
      f: 'x^n',
      fAlts: ['x^n', 'x^k', 'power'],
      F: '\\dfrac{x^{n+1}}{n+1}',
      FAlts: ['x^(n+1)/(n+1)'],
      tip: 'Increment the exponent by 1, divide by the new exponent. Requires $n \\neq -1$ \u2014 for $n = -1$, see the $1/x$ entry.',
      link: '/calculus/integrals/special#2',
    },
    {
      id: 'p_sqrt',
      cat: 'polynomial',
      title: 'Square root',
      f: '\\sqrt{x}',
      fAlts: ['sqrt(x)', 'x^(1/2)', 'x^0.5'],
      F: '\\dfrac{2}{3}\\,x^{3/2}',
      FAlts: ['(2/3)x^(3/2)'],
      tip: 'Apply the power rule with $n = \\tfrac{1}{2}$.',
      link: '/calculus/integrals/special#2',
    },
    {
      id: 'p_recip2',
      cat: 'polynomial',
      title: 'Reciprocal square',
      f: '\\dfrac{1}{x^2}',
      fAlts: ['1/x^2', 'x^-2', 'x^(-2)'],
      F: '-\\dfrac{1}{x}',
      FAlts: ['-1/x'],
      tip: 'Power rule with $n = -2$.',
      link: '/calculus/integrals/special#2',
    },

    // ─── EXPONENTIAL ───────────────────────────────────────
    {
      id: 'e_ex',
      cat: 'exponential',
      title: 'Natural exponential',
      f: 'e^x',
      fAlts: ['e^x', 'exp(x)'],
      F: 'e^x',
      FAlts: ['e^x', 'exp(x)'],
      tip: '$e^x$ is its own derivative and its own antiderivative.',
      link: '/calculus/integrals/special#3',
    },
    {
      id: 'e_ekx',
      cat: 'exponential',
      title: 'Scaled exponential',
      f: 'e^{kx}',
      fAlts: ['e^(kx)', 'exp(kx)'],
      F: '\\dfrac{e^{kx}}{k}',
      FAlts: ['e^(kx)/k'],
      tip: 'Divide by the inner coefficient. Reachable by $u$-substitution with $u = kx$.',
      link: '/calculus/integrals/special#3',
    },
    {
      id: 'e_ax',
      cat: 'exponential',
      title: 'General exponential',
      f: 'a^x',
      fAlts: ['a^x'],
      F: '\\dfrac{a^x}{\\ln a}',
      FAlts: ['a^x/ln(a)'],
      tip: 'Requires $a > 0$ and $a \\neq 1$. Reduces to the natural exponential when $a = e$.',
      link: '/calculus/integrals/special#3',
    },

    // ─── LOGARITHMIC ───────────────────────────────────────
    {
      id: 'l_recip',
      cat: 'logarithmic',
      title: 'Reciprocal',
      f: '\\dfrac{1}{x}',
      fAlts: ['1/x', 'x^-1', 'x^(-1)'],
      F: '\\ln|x|',
      FAlts: ['ln|x|'],
      tip: 'The exception to the power rule. Absolute value keeps the formula valid for negative $x$.',
      link: '/calculus/integrals/special#2',
    },
    {
      id: 'l_ln',
      cat: 'logarithmic',
      title: 'Natural logarithm',
      f: '\\ln(x)',
      fAlts: ['ln(x)', 'log(x)', 'log_e(x)'],
      F: 'x\\ln(x) - x',
      FAlts: ['x ln(x) - x'],
      tip: 'Derive by parts with $u = \\ln(x)$, $dv = dx$.',
      link: '/calculus/integrals/special#6',
    },

    // ─── TRIGONOMETRY ──────────────────────────────────────
    {
      id: 't_sin',
      cat: 'trigonometry',
      title: 'Sine',
      f: '\\sin(x)',
      fAlts: ['sin(x)', 'sin x', 'sine'],
      F: '-\\cos(x)',
      FAlts: ['-cos(x)'],
      tip: 'Mind the sign \u2014 $\\dfrac{d}{dx}[\\cos(x)] = -\\sin(x)$, so reversing gives a negative cosine.',
      link: '/calculus/integrals/special#4',
    },
    {
      id: 't_cos',
      cat: 'trigonometry',
      title: 'Cosine',
      f: '\\cos(x)',
      fAlts: ['cos(x)', 'cos x', 'cosine'],
      F: '\\sin(x)',
      FAlts: ['sin(x)'],
      tip: 'No sign flip \u2014 $\\dfrac{d}{dx}[\\sin(x)] = \\cos(x)$.',
      link: '/calculus/integrals/special#4',
    },
    {
      id: 't_tan',
      cat: 'trigonometry',
      title: 'Tangent',
      f: '\\tan(x)',
      fAlts: ['tan(x)', 'tan x'],
      F: '\\ln|\\sec(x)|',
      FAlts: ['ln|sec(x)|', '-ln|cos(x)|'],
      tip: 'Rewrite as $\\sin/\\cos$ and substitute $u = \\cos(x)$.',
      link: '/calculus/integrals/special#7',
    },
    {
      id: 't_cot',
      cat: 'trigonometry',
      title: 'Cotangent',
      f: '\\cot(x)',
      fAlts: ['cot(x)', 'cot x'],
      F: '\\ln|\\sin(x)|',
      FAlts: ['ln|sin(x)|'],
      tip: 'Substitute $u = \\sin(x)$.',
      link: '/calculus/integrals/special#7',
    },
    {
      id: 't_sec',
      cat: 'trigonometry',
      title: 'Secant',
      f: '\\sec(x)',
      fAlts: ['sec(x)', 'sec x'],
      F: '\\ln|\\sec(x) + \\tan(x)|',
      FAlts: ['ln|sec(x) + tan(x)|'],
      tip: 'Multiply numerator and denominator by $\\sec(x) + \\tan(x)$ to expose a $du/u$ structure.',
      link: '/calculus/integrals/special#7',
    },
    {
      id: 't_csc',
      cat: 'trigonometry',
      title: 'Cosecant',
      f: '\\csc(x)',
      fAlts: ['csc(x)', 'csc x'],
      F: '-\\ln|\\csc(x) + \\cot(x)|',
      FAlts: ['-ln|csc(x) + cot(x)|'],
      tip: 'Mirror of the secant trick \u2014 multiply numerator and denominator by $\\csc(x) + \\cot(x)$.',
      link: '/calculus/integrals/special#7',
    },
    {
      id: 't_sec2',
      cat: 'trigonometry',
      title: 'Secant squared',
      f: '\\sec^2(x)',
      fAlts: ['sec^2(x)', 'sec(x)^2'],
      F: '\\tan(x)',
      FAlts: ['tan(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\tan(x)] = \\sec^2(x)$.',
      link: '/calculus/integrals/special#4',
    },
    {
      id: 't_csc2',
      cat: 'trigonometry',
      title: 'Cosecant squared',
      f: '\\csc^2(x)',
      fAlts: ['csc^2(x)', 'csc(x)^2'],
      F: '-\\cot(x)',
      FAlts: ['-cot(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\cot(x)] = -\\csc^2(x)$.',
      link: '/calculus/integrals/special#4',
    },
    {
      id: 't_sectan',
      cat: 'trigonometry',
      title: 'Secant \u00B7 Tangent',
      f: '\\sec(x)\\tan(x)',
      fAlts: ['sec(x) tan(x)', 'sec*tan'],
      F: '\\sec(x)',
      FAlts: ['sec(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\sec(x)] = \\sec(x)\\tan(x)$.',
      link: '/calculus/integrals/special#4',
    },
    {
      id: 't_csccot',
      cat: 'trigonometry',
      title: 'Cosecant \u00B7 Cotangent',
      f: '\\csc(x)\\cot(x)',
      fAlts: ['csc(x) cot(x)', 'csc*cot'],
      F: '-\\csc(x)',
      FAlts: ['-csc(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\csc(x)] = -\\csc(x)\\cot(x)$.',
      link: '/calculus/integrals/special#4',
    },

    // ─── INVERSE TRIGONOMETRY ──────────────────────────────
    {
      id: 'i_arcsin',
      cat: 'inverseTrigonometry',
      title: 'Arcsine integrand',
      f: '\\dfrac{1}{\\sqrt{1 - x^2}}',
      fAlts: ['1/sqrt(1-x^2)', '1/(1-x^2)^(1/2)'],
      F: '\\arcsin(x)',
      FAlts: ['arcsin(x)', 'asin(x)', 'sin^-1(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\arcsin(x)] = \\dfrac{1}{\\sqrt{1 - x^2}}$. Valid for $|x| < 1$.',
      link: '/calculus/integrals/special#5',
    },
    {
      id: 'i_arctan',
      cat: 'inverseTrigonometry',
      title: 'Arctangent integrand',
      f: '\\dfrac{1}{1 + x^2}',
      fAlts: ['1/(1+x^2)'],
      F: '\\arctan(x)',
      FAlts: ['arctan(x)', 'atan(x)', 'tan^-1(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\arctan(x)] = \\dfrac{1}{1 + x^2}$.',
      link: '/calculus/integrals/special#5',
    },
    {
      id: 'i_arcsec',
      cat: 'inverseTrigonometry',
      title: 'Arcsecant integrand',
      f: '\\dfrac{1}{x\\sqrt{x^2 - 1}}',
      fAlts: ['1/(x sqrt(x^2-1))'],
      F: '\\operatorname{arcsec}|x|',
      FAlts: ['arcsec|x|', 'arcsec(x)'],
      tip: 'Valid for $|x| > 1$. Some references drop the absolute value and require $x > 1$.',
      link: '/calculus/integrals/special#5',
    },

    // ─── HYPERBOLIC ────────────────────────────────────────
    // NOTE: no hyperbolic-integral entries exist in calculusFormulasList.
    // `link` field intentionally omitted for these 7 items — the component
    // will skip the "Read more" link. Backfill once source data exists.
    {
      id: 'h_sinh',
      cat: 'hyperbolic',
      title: 'Hyperbolic sine',
      f: '\\sinh(x)',
      fAlts: ['sinh(x)', 'sinh x'],
      F: '\\cosh(x)',
      FAlts: ['cosh(x)'],
      tip: 'Unlike circular sine, no sign flip \u2014 $\\dfrac{d}{dx}[\\cosh(x)] = \\sinh(x)$.',
    },
    {
      id: 'h_cosh',
      cat: 'hyperbolic',
      title: 'Hyperbolic cosine',
      f: '\\cosh(x)',
      fAlts: ['cosh(x)', 'cosh x'],
      F: '\\sinh(x)',
      FAlts: ['sinh(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\sinh(x)] = \\cosh(x)$.',
    },
    {
      id: 'h_tanh',
      cat: 'hyperbolic',
      title: 'Hyperbolic tangent',
      f: '\\tanh(x)',
      fAlts: ['tanh(x)'],
      F: '\\ln(\\cosh(x))',
      FAlts: ['ln(cosh(x))'],
      tip: 'No absolute value needed \u2014 $\\cosh(x) > 0$ for all real $x$.',
    },
    {
      id: 'h_sech2',
      cat: 'hyperbolic',
      title: 'Hyperbolic sech\u00B2',
      f: '\\operatorname{sech}^2(x)',
      fAlts: ['sech^2(x)'],
      F: '\\tanh(x)',
      FAlts: ['tanh(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\tanh(x)] = \\operatorname{sech}^2(x)$.',
    },
    {
      id: 'h_csch2',
      cat: 'hyperbolic',
      title: 'Hyperbolic csch\u00B2',
      f: '\\operatorname{csch}^2(x)',
      fAlts: ['csch^2(x)'],
      F: '-\\coth(x)',
      FAlts: ['-coth(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\coth(x)] = -\\operatorname{csch}^2(x)$.',
    },
    {
      id: 'h_sechtanh',
      cat: 'hyperbolic',
      title: 'sech \u00B7 tanh',
      f: '\\operatorname{sech}(x)\\tanh(x)',
      fAlts: ['sech(x) tanh(x)'],
      F: '-\\operatorname{sech}(x)',
      FAlts: ['-sech(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\operatorname{sech}(x)] = -\\operatorname{sech}(x)\\tanh(x)$.',
    },
    {
      id: 'h_cschcoth',
      cat: 'hyperbolic',
      title: 'csch \u00B7 coth',
      f: '\\operatorname{csch}(x)\\coth(x)',
      fAlts: ['csch(x) coth(x)'],
      F: '-\\operatorname{csch}(x)',
      FAlts: ['-csch(x)'],
      tip: 'Reverse of $\\dfrac{d}{dx}[\\operatorname{csch}(x)] = -\\operatorname{csch}(x)\\coth(x)$.',
    },
  ],

  properties: [
    {
      icon: '+',
      title: 'Linearity',
      body: 'The integral of a sum is the sum of integrals, and a constant multiplier passes through the integral sign.',
      example: '$\\displaystyle \\int \\!\\bigl(af(x) + bg(x)\\bigr)\\, dx = a\\!\\int\\! f(x)\\, dx + b\\!\\int\\! g(x)\\, dx$',
    },
    {
      icon: 'C',
      title: 'Constant of integration',
      body: 'An indefinite integral is determined only up to an additive constant. Any two antiderivatives of the same function differ by a constant.',
      example: '$\\displaystyle \\int\\! f(x)\\, dx = F(x) + C$',
    },
    {
      icon: 'u',
      title: 'Substitution',
      body: 'When the integrand contains a function and its derivative, substitute $u = g(x)$ so that $du = g\\\'(x)\\, dx$. Reverses the chain rule.',
      example: '$\\displaystyle \\int\\! f(g(x))\\, g\\\'(x)\\, dx = \\int\\! f(u)\\, du$',
    },
    {
      icon: 'uv',
      title: 'Integration by parts',
      body: 'Reverses the product rule. Choose $u$ so it simplifies under differentiation, and $dv$ so you can integrate it.',
      example: '$\\displaystyle \\int\\! u\\, dv = uv - \\int\\! v\\, du$',
    },
    {
      icon: '\u2194',
      title: 'Inverse of differentiation',
      body: 'Integration and differentiation are inverse operations. Every entry in the derivatives table is also an integral, read backwards.',
      example: '$\\displaystyle \\dfrac{d}{dx}\\!\\left[\\int\\! f(x)\\, dx\\right] = f(x)$',
    },
  ],

  templates: {
    left:  (d) => `$${d.f}$`,
    right: (d) => `$${d.F} + C$`,
    full:  (d) => `$\\displaystyle \\int ${d.f}\\, dx \\;=\\; ${d.F} + C$`,
    input: (d) => `$\\displaystyle \\int ${d.f}\\, dx$`,
    detailLabels: { left: 'Integrand', right: 'Antiderivative' },
  },

  searchModes: [
    {
      id: 'byF',
      label: 'Find by f(x)',
      placeholder: 'Search by integrand (e.g., sin(x), 1/x, x^n)',
      mainKey: 'f',
      altKey: 'fAlts',
    },
    {
      id: 'byBigF',
      label: 'Find by F(x)',
      placeholder: 'Search by antiderivative (e.g., -cos(x), ln|x|, arctan(x))',
      mainKey: 'F',
      altKey: 'FAlts',
    },
  ],

  meta: {
    intro:               'Reference table of common indefinite integrals. Try **puzzle** mode to drill, or read the full',
    introLinkText:       'integration explanation \u2192',
    articleHref:         '/calculus/integrals/common',
    toolTitle:           'Indefinite integral tool',
    toolSubtitle:        'Search by integrand, by antiderivative, by name \u2014 or pick a family.',
    categoriesTitle:     'Families of integrals',
    categoriesSubtitle:  'Click a family to highlight its entries in the table above.',
    propertiesTitle:     'Properties of indefinite integration',
    propertiesSubtitle:  'Rules that combine and transform integrals.',
    referenceModeNote:   'Reference mode: click any card to see the full formula and details.',
    puzzleModeNote:      'Puzzle mode: drag each antiderivative tile to its matching integrand.',
  },

  theme: null,

  // -------------------------------------------------------
  // Quiz generator. Called on every "next question" by QuizWidget.
  // Returns { question, options, correct }. Rotates three types:
  //   1. Given f(x), pick its antiderivative F(x).
  //   2. Given F(x), pick which f(x) integrates to it.
  //   3. Given f(x), pick its family.
  // Each question has 4 options, one correct + three distractors.
  // -------------------------------------------------------
  quizGenerator: () => {
    const items      = INTEGRALS_DATASET.items;
    const categories = INTEGRALS_DATASET.categories;

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

    const subject = rand(items);
    const type    = rand(['antiderivative', 'integrand', 'category']);

    if (type === 'antiderivative') {
      const distractors = pickN(
        items.filter((d) => d.F !== subject.F),
        3,
      ).map((d) => `$${d.F} + C$`);
      const correct = `$${subject.F} + C$`;
      return {
        question: `What is $\\displaystyle \\int ${subject.f}\\, dx$?`,
        options:  shuffle([correct, ...distractors]),
        correct,
      };
    }

    if (type === 'integrand') {
      const distractors = pickN(
        items.filter((d) => d.f !== subject.f),
        3,
      ).map((d) => `$${d.f}$`);
      const correct = `$${subject.f}$`;
      return {
        question: `Which integrand has antiderivative $${subject.F} + C$?`,
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
      question: `Which family does $${subject.f}$ belong to?`,
      options:  shuffle([correctLabel, ...distractors]),
      correct:  correctLabel,
    };
  },
};

export default INTEGRALS_DATASET;