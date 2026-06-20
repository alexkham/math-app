// // // // =========================================================
// // // //   DerivativesDataset
// // // //   Default dataset for GenericExplorer.
// // // //
// // // //   Shape:
// // // //     items         array of rows; each row has its own cat id
// // // //     categories    map: catId -> { label, bg, fg, icon, desc }
// // // //     extraFilters  array of cross-cutting filter cards (id, icon, title, desc, match)
// // // //     properties    array of structural rule cards (icon, title, body, example)
// // // //     templates     functions that turn an item into LaTeX strings
// // // //                     left(d), right(d), full(d), detailLabels
// // // //     searchModes   array of search modes (id, label, placeholder, mainKey, altKey)
// // // //     meta          static section headings / intro text
// // // //     theme         optional theme overrides for TablePuzzle2 (object or null)
// // // //
// // // //   Items reference categories by `cat` string. To remove or add
// // // //   a filter card, edit `categories` (and optionally items).
// // // // =========================================================

// // // const DERIVATIVES_DATASET = {

// // //   categories: {
// // //     polynomial: {
// // //       label: 'Polynomial',
// // //       bg:    '#dbeafe', fg: '#1e40af',
// // //       icon:  'x^n',
// // //       desc:  'Constants, powers, roots, and reciprocals.',
// // //     },
// // //     exp: {
// // //       label: 'Exp / Log',
// // //       bg:    '#ede9fe', fg: '#5b21b6',
// // //       icon:  'e^x',
// // //       desc:  'Exponentials and logarithms, natural and general.',
// // //     },
// // //     trig: {
// // //       label: 'Trig',
// // //       bg:    '#d1fae5', fg: '#065f46',
// // //       icon:  'sin',
// // //       desc:  'All six basic trig functions.',
// // //     },
// // //     inverse: {
// // //       label: 'Inverse trig',
// // //       bg:    '#ffe4e6', fg: '#9f1239',
// // //       icon:  'sin\u207B\u00B9',
// // //       desc:  'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
// // //     },
// // //     hyperbolic: {
// // //       label: 'Hyperbolic',
// // //       bg:    '#ffedd5', fg: '#9a3412',
// // //       icon:  'sinh',
// // //       desc:  'Hyperbolic sine, cosine, tan, and their reciprocals.',
// // //     },
// // //     inverseHyperbolic: {
// // //       label: 'Inverse hyp.',
// // //       bg:    '#cffafe', fg: '#155e75',
// // //       icon:  'sinh\u207B\u00B9',
// // //       desc:  'Inverse hyperbolic: $\\operatorname{arcsinh}$, $\\operatorname{arccosh}$, $\\operatorname{arctanh}$.',
// // //     },
// // //   },

// // //   items: [
// // //     { id: 0, cat: 'polynomial', fx: 'c', dfx: '0',
// // //       fxAlt: ['constant'], dfxAlt: ['zero'],
// // //       tip:  'The derivative of any constant is zero \u2014 constants don\'t change with $x$.',
// // //       // link: '/calculus/derivatives/constant-rule'
// // //     },
// // //     { id: 1, cat: 'polynomial', fx: 'x', dfx: '1',
// // //       fxAlt: ['identity'], dfxAlt: ['one'],
// // //       tip:  'The identity function changes at a constant rate of 1.',
// // //       // link: '/calculus/derivatives/identity'
// // //     },
// // //     { id: 2, cat: 'polynomial', fx: 'x^n', dfx: 'nx^{n-1}',
// // //       fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
// // //       tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
// // //       // link: '/calculus/derivatives/power-rule'
// // //     },
// // //     { id: 3, cat: 'polynomial', fx: '\\frac{1}{x}', dfx: '-\\frac{1}{x^2}',
// // //       fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
// // //       tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
// // //       // link: '/calculus/derivatives/reciprocal'
// // //     },
// // //     { id: 4, cat: 'polynomial', fx: '\\sqrt{x}', dfx: '\\frac{1}{2\\sqrt{x}}',
// // //       fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
// // //       tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
// // //       // link: '/calculus/derivatives/square-root'
// // //     },
// // //     { id: 5, cat: 'exp', fx: 'e^x', dfx: 'e^x',
// // //       fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
// // //       tip:  'The natural exponential is its own derivative \u2014 the defining property of $e$.',
// // //       // link: '/calculus/derivatives/exponential'
// // //     },
// // //     { id: 6, cat: 'exp', fx: 'a^x', dfx: 'a^x \\ln(a)',
// // //       fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
// // //       tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
// // //       // link: '/calculus/derivatives/general-exponential'
// // //     },
// // //     { id: 7, cat: 'exp', fx: '\\ln(x)', dfx: '\\frac{1}{x}',
// // //       fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
// // //       tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
// // //       // link: '/calculus/derivatives/logarithm'
// // //     },
// // //     { id: 8, cat: 'exp', fx: '\\log_a(x)', dfx: '\\frac{1}{x \\ln(a)}',
// // //       fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
// // //       tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
// // //       // link: '/calculus/derivatives/general-logarithm'
// // //     },
// // //     { id: 9, cat: 'trig', fx: '\\sin(x)', dfx: '\\cos(x)',
// // //       fxAlt: ['sine'], dfxAlt: ['cosine'],
// // //       tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
// // //       // link: '/calculus/derivatives/sine'
// // //     },
// // //     { id: 10, cat: 'trig', fx: '\\cos(x)', dfx: '-\\sin(x)',
// // //       fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
// // //       tip:  'Cosine\'s derivative is negative sine \u2014 the sign flip reflects the 90\u00B0 phase shift between the two.',
// // //       // link: '/calculus/derivatives/cosine'
// // //     },
// // //     { id: 11, cat: 'trig', fx: '\\tan(x)', dfx: '\\sec^2(x)',
// // //       fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
// // //       tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
// // //       // link: '/calculus/derivatives/tangent'
// // //     },
// // //     { id: 12, cat: 'trig', fx: '\\cot(x)', dfx: '-\\csc^2(x)',
// // //       fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
// // //       tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
// // //       // link: '/calculus/derivatives/cotangent'
// // //     },
// // //     { id: 13, cat: 'trig', fx: '\\sec(x)', dfx: '\\sec(x)\\tan(x)',
// // //       fxAlt: ['secant'], dfxAlt: ['sec tan'],
// // //       tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
// // //       // link: '/calculus/derivatives/secant'
// // //     },
// // //     { id: 14, cat: 'trig', fx: '\\csc(x)', dfx: '-\\csc(x)\\cot(x)',
// // //       fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
// // //       tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product \u2014 but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
// // //       // link: '/calculus/derivatives/cosecant'
// // //     },
// // //     { id: 15, cat: 'inverse', fx: '\\arcsin(x)', dfx: '\\frac{1}{\\sqrt{1-x^2}}',
// // //       fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
// // //       tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
// // //       // link: '/calculus/derivatives/arcsine'
// // //     },
// // //     { id: 16, cat: 'inverse', fx: '\\arccos(x)', dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
// // //       fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
// // //       tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
// // //       // link: '/calculus/derivatives/arccosine'
// // //     },
// // //     { id: 17, cat: 'inverse', fx: '\\arctan(x)', dfx: '\\frac{1}{1+x^2}',
// // //       fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
// // //       tip:  'A beautiful derivative \u2014 rational, defined for all real $x$, central to many integration tricks.',
// // //       // link: '/calculus/derivatives/arctangent'
// // //     },
// // //     { id: 18, cat: 'inverse', fx: '\\operatorname{arccot}(x)', dfx: '-\\frac{1}{1+x^2}',
// // //       fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
// // //       tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
// // //       // link: '/calculus/derivatives/arccotangent'
// // //     },
// // //     { id: 19, cat: 'inverse', fx: '\\operatorname{arcsec}(x)', dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
// // //       fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
// // //       tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
// // //       // link: '/calculus/derivatives/arcsecant'
// // //     },
// // //     { id: 20, cat: 'inverse', fx: '\\operatorname{arccsc}(x)', dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
// // //       fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
// // //       tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
// // //       // link: '/calculus/derivatives/arccosecant'
// // //     },
// // //     { id: 21, cat: 'hyperbolic', fx: '\\sinh(x)', dfx: '\\cosh(x)',
// // //       fxAlt: ['hyperbolic sine'], dfxAlt: ['hyperbolic cosine'],
// // //       tip:  'Hyperbolic analog of $\\sin \\to \\cos$. No sign flips \u2014 $\\cosh$ relates to $\\sinh$ as $\\cos$ does to $\\sin$, but without the negative.',
// // //       // link: '/calculus/derivatives/sinh'
// // //     },
// // //     { id: 22, cat: 'hyperbolic', fx: '\\cosh(x)', dfx: '\\sinh(x)',
// // //       fxAlt: ['hyperbolic cosine'], dfxAlt: ['hyperbolic sine'],
// // //       tip:  'Hyperbolic cosine differentiates to $\\sinh$ \u2014 no negative sign, unlike the trig version.',
// // //       // link: '/calculus/derivatives/cosh'
// // //     },
// // //     { id: 23, cat: 'hyperbolic', fx: '\\tanh(x)', dfx: '\\operatorname{sech}^2(x)',
// // //       fxAlt: ['hyperbolic tangent'], dfxAlt: ['sech squared', 'sech^2'],
// // //       tip:  'Direct analog of $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$, with hyperbolic functions in place of trig.',
// // //       // link: '/calculus/derivatives/tanh'
// // //     },
// // //     { id: 24, cat: 'hyperbolic', fx: '\\coth(x)', dfx: '-\\operatorname{csch}^2(x)',
// // //       fxAlt: ['hyperbolic cotangent'], dfxAlt: ['negative csch squared'],
// // //       tip:  'Hyperbolic analog of $\\cot$. The negative sign matches the trig case.',
// // //       // link: '/calculus/derivatives/coth'
// // //     },
// // //     { id: 25, cat: 'hyperbolic', fx: '\\operatorname{sech}(x)', dfx: '-\\operatorname{sech}(x)\\tanh(x)',
// // //       fxAlt: ['hyperbolic secant'], dfxAlt: ['negative sech tanh'],
// // //       tip:  'Hyperbolic analog of $\\sec$, but with a negative sign \u2014 opposite of the trig version.',
// // //       // link: '/calculus/derivatives/sech'
// // //     },
// // //     { id: 26, cat: 'hyperbolic', fx: '\\operatorname{csch}(x)', dfx: '-\\operatorname{csch}(x)\\coth(x)',
// // //       fxAlt: ['hyperbolic cosecant'], dfxAlt: ['negative csch coth'],
// // //       tip:  'Hyperbolic analog of $\\csc$. Like $\\csc$, the result is a product, and the sign also matches.',
// // //       // link: '/calculus/derivatives/csch'
// // //     },
// // //     { id: 27, cat: 'inverseHyperbolic', fx: '\\operatorname{arcsinh}(x)', dfx: '\\frac{1}{\\sqrt{x^2+1}}',
// // //       fxAlt: ['arc sinh', 'inverse hyperbolic sine'], dfxAlt: ['1/sqrt(x^2+1)'],
// // //       tip:  'Note the $+1$ inside the radical (vs $-1$ for $\\arcsin$). Defined for all real $x$.',
// // //       // link: '/calculus/derivatives/arcsinh'
// // //     },
// // //     { id: 28, cat: 'inverseHyperbolic', fx: '\\operatorname{arccosh}(x)', dfx: '\\frac{1}{\\sqrt{x^2-1}}',
// // //       fxAlt: ['arc cosh', 'inverse hyperbolic cosine'], dfxAlt: ['1/sqrt(x^2-1)'],
// // //       tip:  'Defined for $x > 1$. The radical is $x^2 - 1$, the reverse of $\\arcsin$\'s domain.',
// // //       // link: '/calculus/derivatives/arccosh'
// // //     },
// // //     { id: 29, cat: 'inverseHyperbolic', fx: '\\operatorname{arctanh}(x)', dfx: '\\frac{1}{1-x^2}',
// // //       fxAlt: ['arc tanh', 'inverse hyperbolic tangent'], dfxAlt: ['1/(1-x^2)'],
// // //       tip:  'Defined for $|x| < 1$. Same denominator structure as $\\arctan$, but with subtraction inside.',
// // //       // link: '/calculus/derivatives/arctanh'
// // //     },
// // //   ],

// // //   extraFilters: [
// // //     { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
// // //       desc:  'Derivatives whose result is a fraction \u2014 a quotient form.',
// // //       match: (d) => /^-?\\frac\{/.test(d.dfx) },
// // //   ],

// // //   properties: [
// // //     { icon: '\u2295', title: 'Linearity',
// // //       body:    'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
// // //       example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$' },
// // //     { icon: '\u00D7', title: 'Product rule',
// // //       body:    '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
// // //       example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$' },
// // //     { icon: '\u00F7', title: 'Quotient rule',
// // //       body:    '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
// // //       example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$' },
// // //     { icon: '\u2218', title: 'Chain rule',
// // //       body:    '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
// // //       example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$' },
// // //   ],

// // //   templates: {
// // //     left:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`,
// // //     right: (d) => `$${d.dfx}$`,
// // //     full:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right] = ${d.dfx}$`,
// // //     input: (d) => `$${d.fx}$`,
// // //     detailLabels: { left: 'f(x)', right: 'f\u2032(x)' },
// // //   },

// // //   searchModes: [
// // //     { id: 'byF',  label: 'Find by f(x)',
// // //       placeholder: 'Enter f(x) (e.g., sin, ln, tanh, arcsin)',
// // //       mainKey: 'fx',  altKey: 'fxAlt' },
// // //     { id: 'byDF', label: 'Find by f\u2032(x)',
// // //       placeholder: 'Enter f\u2032(x) (e.g., cos, 1/x, sech^2)',
// // //       mainKey: 'dfx', altKey: 'dfxAlt' },
// // //   ],

// // //   meta: {
// // //     intro:               'Reference table of the most-used derivative identities. Try **puzzle** mode to drill, or read the full',
// // //     introLinkText:       'derivatives explanation \u2192',
// // //     articleHref:         '/calculus/derivatives/common',
// // //     toolTitle:           'Derivative Tool',
// // //     toolSubtitle:        'Every answer takes you to the table. Pick a question:',
// // //     categoriesTitle:     'Categories',
// // //     categoriesSubtitle:  'Click a card to highlight matching entries in the table above.',
// // //     propertiesTitle:     'Differentiation rules',
// // //     propertiesSubtitle:  'The four structural rules that combine and extend the identities above.',
// // //     referenceModeNote:   'Reference mode: click any card to see the explanation right there.',
// // //     puzzleModeNote:      'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.',
// // //   },

// // //   theme: null,  // null = TablePuzzle2 uses its own indigo defaults
// // // };

// // // export default DERIVATIVES_DATASET;


// // // =========================================================
// // //   DerivativesDataset
// // //   Default dataset for GenericExplorer.
// // //
// // //   Shape:
// // //     items         array of rows; each row has its own cat id
// // //     categories    map: catId -> { label, bg, fg, icon, desc }
// // //     extraFilters  array of cross-cutting filter cards (id, icon, title, desc, match)
// // //     properties    array of structural rule cards (icon, title, body, example)
// // //     templates     functions that turn an item into LaTeX strings
// // //                     left(d), right(d), full(d), detailLabels
// // //     searchModes   array of search modes (id, label, placeholder, mainKey, altKey)
// // //     meta          static section headings / intro text
// // //     theme         optional theme overrides for TablePuzzle2 (object or null)
// // //
// // //   Items reference categories by `cat` string. To remove or add
// // //   a filter card, edit `categories` (and optionally items).
// // // =========================================================

// // const DERIVATIVES_DATASET = {

// //   categories: {
// //     polynomial: {
// //       label: 'Polynomial',
// //       bg:    '#dbeafe', fg: '#1e40af',
// //       icon:  'x^n',
// //       desc:  'Constants, powers, roots, and reciprocals.',
// //     },
// //     linear: {
// //       label: 'Linear',
// //       bg:    '#cffafe', fg: '#155e75',
// //       icon:  'ax+b',
// //       desc:  'Linear functions $ax + b$ \u2014 the derivative is the slope $a$.',
// //     },
// //     exp: {
// //       label: 'Exp / Log',
// //       bg:    '#ede9fe', fg: '#5b21b6',
// //       icon:  'e^x',
// //       desc:  'Exponentials and logarithms, natural and general.',
// //     },
// //     trig: {
// //       label: 'Trig',
// //       bg:    '#d1fae5', fg: '#065f46',
// //       icon:  'sin',
// //       desc:  'All six basic trig functions.',
// //     },
// //     inverse: {
// //       label: 'Inverse trig',
// //       bg:    '#ffe4e6', fg: '#9f1239',
// //       icon:  'sin\u207B\u00B9',
// //       desc:  'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
// //     },
// //   },

// //   items: [
// //     { id: 0, cat: 'polynomial', fx: 'c', dfx: '0',
// //       fxAlt: ['constant'], dfxAlt: ['zero'],
// //       tip:  'The derivative of any constant is zero \u2014 constants don\'t change with $x$.',
// //       // link: '/calculus/derivatives/constant-rule'
// //     },
// //     { id: 1, cat: 'polynomial', fx: 'x', dfx: '1',
// //       fxAlt: ['identity'], dfxAlt: ['one'],
// //       tip:  'The identity function changes at a constant rate of 1.',
// //       // link: '/calculus/derivatives/identity'
// //     },
// //     { id: 2, cat: 'linear', fx: 'ax + b', dfx: 'a',
// //       fxAlt: ['linear', 'ax+b', 'slope-intercept', 'ax plus b'], dfxAlt: ['a', 'slope'],
// //       tip:  'A linear function $ax + b$ has constant slope $a$. The constant $b$ contributes 0 to the derivative.',
// //       // link: '/calculus/derivatives/linear'
// //     },
// //     { id: 3, cat: 'polynomial', fx: 'x^n', dfx: 'nx^{n-1}',
// //       fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
// //       tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
// //       // link: '/calculus/derivatives/power-rule'
// //     },
// //     { id: 4, cat: 'polynomial', fx: '\\frac{1}{x}', dfx: '-\\frac{1}{x^2}',
// //       fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
// //       tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
// //       // link: '/calculus/derivatives/reciprocal'
// //     },
// //     { id: 5, cat: 'polynomial', fx: '\\sqrt{x}', dfx: '\\frac{1}{2\\sqrt{x}}',
// //       fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
// //       tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
// //       // link: '/calculus/derivatives/square-root'
// //     },
// //     { id: 6, cat: 'exp', fx: 'e^x', dfx: 'e^x',
// //       fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
// //       tip:  'The natural exponential is its own derivative \u2014 the defining property of $e$.',
// //       // link: '/calculus/derivatives/exponential'
// //     },
// //     { id: 7, cat: 'exp', fx: 'a^x', dfx: 'a^x \\ln(a)',
// //       fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
// //       tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
// //       // link: '/calculus/derivatives/general-exponential'
// //     },
// //     { id: 8, cat: 'exp', fx: '\\ln(x)', dfx: '\\frac{1}{x}',
// //       fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
// //       tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
// //       // link: '/calculus/derivatives/logarithm'
// //     },
// //     { id: 9, cat: 'exp', fx: '\\log_a(x)', dfx: '\\frac{1}{x \\ln(a)}',
// //       fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
// //       tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
// //       // link: '/calculus/derivatives/general-logarithm'
// //     },
// //     { id: 10, cat: 'trig', fx: '\\sin(x)', dfx: '\\cos(x)',
// //       fxAlt: ['sine'], dfxAlt: ['cosine'],
// //       tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
// //       // link: '/calculus/derivatives/sine'
// //     },
// //     { id: 11, cat: 'trig', fx: '\\cos(x)', dfx: '-\\sin(x)',
// //       fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
// //       tip:  'Cosine\'s derivative is negative sine \u2014 the sign flip reflects the 90\u00B0 phase shift between the two.',
// //       // link: '/calculus/derivatives/cosine'
// //     },
// //     { id: 12, cat: 'trig', fx: '\\tan(x)', dfx: '\\sec^2(x)',
// //       fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
// //       tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
// //       // link: '/calculus/derivatives/tangent'
// //     },
// //     { id: 13, cat: 'trig', fx: '\\cot(x)', dfx: '-\\csc^2(x)',
// //       fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
// //       tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
// //       // link: '/calculus/derivatives/cotangent'
// //     },
// //     { id: 14, cat: 'trig', fx: '\\sec(x)', dfx: '\\sec(x)\\tan(x)',
// //       fxAlt: ['secant'], dfxAlt: ['sec tan'],
// //       tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
// //       // link: '/calculus/derivatives/secant'
// //     },
// //     { id: 15, cat: 'trig', fx: '\\csc(x)', dfx: '-\\csc(x)\\cot(x)',
// //       fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
// //       tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product \u2014 but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
// //       // link: '/calculus/derivatives/cosecant'
// //     },
// //     { id: 16, cat: 'inverse', fx: '\\arcsin(x)', dfx: '\\frac{1}{\\sqrt{1-x^2}}',
// //       fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
// //       tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
// //       // link: '/calculus/derivatives/arcsine'
// //     },
// //     { id: 17, cat: 'inverse', fx: '\\arccos(x)', dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
// //       fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
// //       tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
// //       // link: '/calculus/derivatives/arccosine'
// //     },
// //     { id: 18, cat: 'inverse', fx: '\\arctan(x)', dfx: '\\frac{1}{1+x^2}',
// //       fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
// //       tip:  'A beautiful derivative \u2014 rational, defined for all real $x$, central to many integration tricks.',
// //       // link: '/calculus/derivatives/arctangent'
// //     },
// //     { id: 19, cat: 'inverse', fx: '\\operatorname{arccot}(x)', dfx: '-\\frac{1}{1+x^2}',
// //       fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
// //       tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
// //       // link: '/calculus/derivatives/arccotangent'
// //     },
// //     { id: 20, cat: 'inverse', fx: '\\operatorname{arcsec}(x)', dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
// //       fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
// //       tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
// //       // link: '/calculus/derivatives/arcsecant'
// //     },
// //     { id: 21, cat: 'inverse', fx: '\\operatorname{arccsc}(x)', dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
// //       fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
// //       tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
// //       // link: '/calculus/derivatives/arccosecant'
// //     },
// //   ],

// //   extraFilters: [
// //     { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
// //       desc:  'Derivatives whose result is a fraction \u2014 a quotient form.',
// //       match: (d) => /^-?\\frac\{/.test(d.dfx) },
// //   ],

// //   properties: [
// //     { icon: '\u2295', title: 'Linearity',
// //       body:    'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
// //       example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$' },
// //     { icon: '\u00D7', title: 'Product rule',
// //       body:    '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
// //       example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$' },
// //     { icon: '\u00F7', title: 'Quotient rule',
// //       body:    '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
// //       example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$' },
// //     { icon: '\u2218', title: 'Chain rule',
// //       body:    '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
// //       example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$' },
// //   ],

// //   templates: {
// //     left:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`,
// //     right: (d) => `$${d.dfx}$`,
// //     full:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right] = ${d.dfx}$`,
// //     input: (d) => `$${d.fx}$`,
// //     detailLabels: { left: 'f(x)', right: 'f\u2032(x)' },
// //   },

// //   searchModes: [
// //     { id: 'byF',  label: 'Find by f(x)',
// //       placeholder: 'Enter f(x) (e.g., sin, ln, tanh, arcsin)',
// //       mainKey: 'fx',  altKey: 'fxAlt' },
// //     { id: 'byDF', label: 'Find by f\u2032(x)',
// //       placeholder: 'Enter f\u2032(x) (e.g., cos, 1/x, sech^2)',
// //       mainKey: 'dfx', altKey: 'dfxAlt' },
// //   ],

// //   meta: {
// //     intro:               'Reference table of the most-used derivative identities. Try **puzzle** mode to drill, or read the full',
// //     introLinkText:       'derivatives explanation \u2192',
// //     articleHref:         '/calculus/derivatives/common',
// //     toolTitle:           'Derivative Tool',
// //     toolSubtitle:        'Every answer takes you to the table. Pick a question:',
// //     categoriesTitle:     'Categories',
// //     categoriesSubtitle:  'Click a card to highlight matching entries in the table above.',
// //     propertiesTitle:     'Differentiation rules',
// //     propertiesSubtitle:  'The four structural rules that combine and extend the identities above.',
// //     referenceModeNote:   'Reference mode: click any card to see the explanation right there.',
// //     puzzleModeNote:      'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.',
// //   },

// //   theme: null,  // null = TablePuzzle2 uses its own indigo defaults
// // };

// // export default DERIVATIVES_DATASET;


// // =========================================================
// //   DerivativesDataset
// //   Default dataset for GenericExplorer.
// // =========================================================

// const DERIVATIVES_DATASET = {

//   categories: {
//     polynomial: {
//       label: 'Polynomial',
//       bg:    '#dbeafe', fg: '#1e40af',
//       icon:  'x^n',
//       desc:  'Constants, powers, roots, and reciprocals.',
//     },
//     linear: {
//       label: 'Linear',
//       bg:    '#cffafe', fg: '#155e75',
//       icon:  'ax+b',
//       desc:  'Linear functions $ax + b$ \u2014 the derivative is the slope $a$.',
//     },
//     exp: {
//       label: 'Exp / Log',
//       bg:    '#ede9fe', fg: '#5b21b6',
//       icon:  'e^x',
//       desc:  'Exponentials and logarithms, natural and general.',
//     },
//     trig: {
//       label: 'Trig',
//       bg:    '#d1fae5', fg: '#065f46',
//       icon:  'sin',
//       desc:  'All six basic trig functions.',
//     },
//     inverse: {
//       label: 'Inverse trig',
//       bg:    '#ffe4e6', fg: '#9f1239',
//       icon:  'sin\u207B\u00B9',
//       desc:  'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
//     },
//   },

//   items: [
//     { id: 0, cat: 'polynomial', fx: 'c', dfx: '0',
//       title: 'Constant rule',
//       fxAlt: ['constant'], dfxAlt: ['zero'],
//       tip:  'The derivative of any constant is zero \u2014 constants don\'t change with $x$.',
//       // link: '/calculus/derivatives/constant-rule'
//     },
//     { id: 1, cat: 'polynomial', fx: 'x', dfx: '1',
//       title: 'Identity rule',
//       fxAlt: ['identity'], dfxAlt: ['one'],
//       tip:  'The identity function changes at a constant rate of 1.',
//       // link: '/calculus/derivatives/identity'
//     },
//     { id: 2, cat: 'linear', fx: 'ax + b', dfx: 'a',
//       title: 'Linear rule',
//       fxAlt: ['linear', 'ax+b', 'slope-intercept', 'ax plus b'], dfxAlt: ['a', 'slope'],
//       tip:  'A linear function $ax + b$ has constant slope $a$. The constant $b$ contributes 0 to the derivative.',
//       // link: '/calculus/derivatives/linear'
//     },
//     { id: 3, cat: 'polynomial', fx: 'x^n', dfx: 'nx^{n-1}',
//       title: 'Power rule',
//       fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
//       tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
//       // link: '/calculus/derivatives/power-rule'
//     },
//     { id: 4, cat: 'polynomial', fx: '\\frac{1}{x}', dfx: '-\\frac{1}{x^2}',
//       title: 'Reciprocal',
//       fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
//       tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
//       // link: '/calculus/derivatives/reciprocal'
//     },
//     { id: 5, cat: 'polynomial', fx: '\\sqrt{x}', dfx: '\\frac{1}{2\\sqrt{x}}',
//       title: 'Square root',
//       fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
//       tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
//       // link: '/calculus/derivatives/square-root'
//     },
//     { id: 6, cat: 'exp', fx: 'e^x', dfx: 'e^x',
//       title: 'Natural exponential',
//       fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
//       tip:  'The natural exponential is its own derivative \u2014 the defining property of $e$.',
//       // link: '/calculus/derivatives/exponential'
//     },
//     { id: 7, cat: 'exp', fx: 'a^x', dfx: 'a^x \\ln(a)',
//       title: 'General exponential',
//       fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
//       tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
//       // link: '/calculus/derivatives/general-exponential'
//     },
//     { id: 8, cat: 'exp', fx: '\\ln(x)', dfx: '\\frac{1}{x}',
//       title: 'Natural logarithm',
//       fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
//       tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
//       // link: '/calculus/derivatives/logarithm'
//     },
//     { id: 9, cat: 'exp', fx: '\\log_a(x)', dfx: '\\frac{1}{x \\ln(a)}',
//       title: 'General logarithm',
//       fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
//       tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
//       // link: '/calculus/derivatives/general-logarithm'
//     },
//     { id: 10, cat: 'trig', fx: '\\sin(x)', dfx: '\\cos(x)',
//       title: 'Sine',
//       fxAlt: ['sine'], dfxAlt: ['cosine'],
//       tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
//       // link: '/calculus/derivatives/sine'
//     },
//     { id: 11, cat: 'trig', fx: '\\cos(x)', dfx: '-\\sin(x)',
//       title: 'Cosine',
//       fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
//       tip:  'Cosine\'s derivative is negative sine \u2014 the sign flip reflects the 90\u00B0 phase shift between the two.',
//       // link: '/calculus/derivatives/cosine'
//     },
//     { id: 12, cat: 'trig', fx: '\\tan(x)', dfx: '\\sec^2(x)',
//       title: 'Tangent',
//       fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
//       tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
//       // link: '/calculus/derivatives/tangent'
//     },
//     { id: 13, cat: 'trig', fx: '\\cot(x)', dfx: '-\\csc^2(x)',
//       title: 'Cotangent',
//       fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
//       tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
//       // link: '/calculus/derivatives/cotangent'
//     },
//     { id: 14, cat: 'trig', fx: '\\sec(x)', dfx: '\\sec(x)\\tan(x)',
//       title: 'Secant',
//       fxAlt: ['secant'], dfxAlt: ['sec tan'],
//       tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
//       // link: '/calculus/derivatives/secant'
//     },
//     { id: 15, cat: 'trig', fx: '\\csc(x)', dfx: '-\\csc(x)\\cot(x)',
//       title: 'Cosecant',
//       fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
//       tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product \u2014 but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
//       // link: '/calculus/derivatives/cosecant'
//     },
//     { id: 16, cat: 'inverse', fx: '\\arcsin(x)', dfx: '\\frac{1}{\\sqrt{1-x^2}}',
//       title: 'Arcsine',
//       fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
//       tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
//       // link: '/calculus/derivatives/arcsine'
//     },
//     { id: 17, cat: 'inverse', fx: '\\arccos(x)', dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
//       title: 'Arccosine',
//       fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
//       tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
//       // link: '/calculus/derivatives/arccosine'
//     },
//     { id: 18, cat: 'inverse', fx: '\\arctan(x)', dfx: '\\frac{1}{1+x^2}',
//       title: 'Arctangent',
//       fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
//       tip:  'A beautiful derivative \u2014 rational, defined for all real $x$, central to many integration tricks.',
//       // link: '/calculus/derivatives/arctangent'
//     },
//     { id: 19, cat: 'inverse', fx: '\\operatorname{arccot}(x)', dfx: '-\\frac{1}{1+x^2}',
//       title: 'Arccotangent',
//       fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
//       tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
//       // link: '/calculus/derivatives/arccotangent'
//     },
//     { id: 20, cat: 'inverse', fx: '\\operatorname{arcsec}(x)', dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
//       title: 'Arcsecant',
//       fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
//       tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
//       // link: '/calculus/derivatives/arcsecant'
//     },
//     { id: 21, cat: 'inverse', fx: '\\operatorname{arccsc}(x)', dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
//       title: 'Arccosecant',
//       fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
//       tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
//       // link: '/calculus/derivatives/arccosecant'
//     },
//   ],

//   extraFilters: [
//     { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
//       desc:  'Derivatives whose result is a fraction \u2014 a quotient form.',
//       match: (d) => /^-?\\frac\{/.test(d.dfx) },
//   ],

//   properties: [
//     { icon: '\u2295', title: 'Linearity',
//       body:    'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
//       example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$' },
//     { icon: '\u00D7', title: 'Product rule',
//       body:    '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
//       example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$' },
//     { icon: '\u00F7', title: 'Quotient rule',
//       body:    '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
//       example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$' },
//     { icon: '\u2218', title: 'Chain rule',
//       body:    '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
//       example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$' },
//   ],

//   templates: {
//     left:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`,
//     right: (d) => `$${d.dfx}$`,
//     full:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right] = ${d.dfx}$`,
//     input: (d) => `$${d.fx}$`,
//     detailLabels: { left: 'f(x)', right: 'f\u2032(x)' },
//   },

//   searchModes: [
//     { id: 'byF',  label: 'Find by f(x)',
//       placeholder: 'Enter f(x) (e.g., sin, ln, tanh, arcsin)',
//       mainKey: 'fx',  altKey: 'fxAlt' },
//     { id: 'byDF', label: 'Find by f\u2032(x)',
//       placeholder: 'Enter f\u2032(x) (e.g., cos, 1/x, sech^2)',
//       mainKey: 'dfx', altKey: 'dfxAlt' },
//   ],

//   meta: {
//     intro:               'Reference table of the most-used derivative identities. Try **puzzle** mode to drill, or read the full',
//     introLinkText:       'derivatives explanation \u2192',
//     articleHref:         '/calculus/derivatives/common',
//     toolTitle:           'Derivative Tool',
//     toolSubtitle:        'Every answer takes you to the table. Pick a question:',
//     categoriesTitle:     'Categories',
//     categoriesSubtitle:  'Click a card to highlight matching entries in the table above.',
//     propertiesTitle:     'Differentiation rules',
//     propertiesSubtitle:  'The four structural rules that combine and extend the identities above.',
//     referenceModeNote:   'Reference mode: click any card to see the explanation right there.',
//     puzzleModeNote:      'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.',
//   },

//   theme: null,
// };

// export default DERIVATIVES_DATASET;


// =========================================================
//   DerivativesDataset
//   Default dataset for GenericExplorer.
// =========================================================

const DERIVATIVES_DATASET = {

  categories: {
    polynomial: {
      label: 'Polynomial',
      bg:    '#dbeafe', fg: '#1e40af',
      icon:  'x^n',
      desc:  'Constants, powers, roots, and reciprocals.',
    },
    linear: {
      label: 'Linear',
      bg:    '#cffafe', fg: '#155e75',
      icon:  'ax+b',
      desc:  'Linear functions $ax + b$ \u2014 the derivative is the slope $a$.',
    },
    exp: {
      label: 'Exp / Log',
      bg:    '#ede9fe', fg: '#5b21b6',
      icon:  'e^x',
      desc:  'Exponentials and logarithms, natural and general.',
    },
    trig: {
      label: 'Trig',
      bg:    '#d1fae5', fg: '#065f46',
      icon:  'sin',
      desc:  'All six basic trig functions.',
    },
    inverse: {
      label: 'Inverse trig',
      bg:    '#ffe4e6', fg: '#9f1239',
      icon:  'sin\u207B\u00B9',
      desc:  'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
    },
  },

  items: [
    { id: 0, cat: 'polynomial', fx: 'c', dfx: '0',
      title: 'Constant rule',
      fxAlt: ['constant'], dfxAlt: ['zero'],
      tip:  'The derivative of any constant is zero \u2014 constants don\'t change with $x$.',
    },
    { id: 1, cat: 'polynomial', fx: 'x', dfx: '1',
      title: 'Identity rule',
      fxAlt: ['identity'], dfxAlt: ['one'],
      tip:  'The identity function changes at a constant rate of 1.',
    },
    { id: 2, cat: 'linear', fx: 'ax + b', dfx: 'a',
      title: 'Linear rule',
      fxAlt: ['linear', 'ax+b', 'slope-intercept', 'ax plus b'], dfxAlt: ['a', 'slope'],
      tip:  'A linear function $ax + b$ has constant slope $a$. The constant $b$ contributes 0 to the derivative.',
    },
    { id: 3, cat: 'polynomial', fx: 'x^n', dfx: 'nx^{n-1}',
      title: 'Power rule',
      fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
      tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
    },
    { id: 4, cat: 'polynomial', fx: '\\frac{1}{x}', dfx: '-\\frac{1}{x^2}',
      title: 'Reciprocal',
      fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
      tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
    },
    { id: 5, cat: 'polynomial', fx: '\\sqrt{x}', dfx: '\\frac{1}{2\\sqrt{x}}',
      title: 'Square root',
      fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
      tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
    },
    { id: 6, cat: 'exp', fx: 'e^x', dfx: 'e^x',
      title: 'Natural exponential',
      fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
      tip:  'The natural exponential is its own derivative \u2014 the defining property of $e$.',
    },
    { id: 7, cat: 'exp', fx: 'a^x', dfx: 'a^x \\ln(a)',
      title: 'General exponential',
      fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
      tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
    },
    { id: 8, cat: 'exp', fx: '\\ln(x)', dfx: '\\frac{1}{x}',
      title: 'Natural logarithm',
      fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
      tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
    },
    { id: 9, cat: 'exp', fx: '\\log_a(x)', dfx: '\\frac{1}{x \\ln(a)}',
      title: 'General logarithm',
      fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
      tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
    },
    { id: 10, cat: 'trig', fx: '\\sin(x)', dfx: '\\cos(x)',
      title: 'Sine',
      fxAlt: ['sine'], dfxAlt: ['cosine'],
      tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
    },
    { id: 11, cat: 'trig', fx: '\\cos(x)', dfx: '-\\sin(x)',
      title: 'Cosine',
      fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
      tip:  'Cosine\'s derivative is negative sine \u2014 the sign flip reflects the 90\u00B0 phase shift between the two.',
    },
    { id: 12, cat: 'trig', fx: '\\tan(x)', dfx: '\\sec^2(x)',
      title: 'Tangent',
      fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
      tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
    },
    { id: 13, cat: 'trig', fx: '\\cot(x)', dfx: '-\\csc^2(x)',
      title: 'Cotangent',
      fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
      tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
    },
    { id: 14, cat: 'trig', fx: '\\sec(x)', dfx: '\\sec(x)\\tan(x)',
      title: 'Secant',
      fxAlt: ['secant'], dfxAlt: ['sec tan'],
      tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
    },
    { id: 15, cat: 'trig', fx: '\\csc(x)', dfx: '-\\csc(x)\\cot(x)',
      title: 'Cosecant',
      fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
      tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product \u2014 but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
    },
    { id: 16, cat: 'inverse', fx: '\\arcsin(x)', dfx: '\\frac{1}{\\sqrt{1-x^2}}',
      title: 'Arcsine',
      fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
      tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
    },
    { id: 17, cat: 'inverse', fx: '\\arccos(x)', dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
      title: 'Arccosine',
      fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
      tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
    },
    { id: 18, cat: 'inverse', fx: '\\arctan(x)', dfx: '\\frac{1}{1+x^2}',
      title: 'Arctangent',
      fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
      tip:  'A beautiful derivative \u2014 rational, defined for all real $x$, central to many integration tricks.',
    },
    { id: 19, cat: 'inverse', fx: '\\operatorname{arccot}(x)', dfx: '-\\frac{1}{1+x^2}',
      title: 'Arccotangent',
      fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
      tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
    },
    { id: 20, cat: 'inverse', fx: '\\operatorname{arcsec}(x)', dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
      title: 'Arcsecant',
      fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
      tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
    },
    { id: 21, cat: 'inverse', fx: '\\operatorname{arccsc}(x)', dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
      title: 'Arccosecant',
      fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
      tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
    },
  ],

  extraFilters: [
    { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
      desc:  'Derivatives whose result is a fraction \u2014 a quotient form.',
      match: (d) => /^-?\\frac\{/.test(d.dfx) },
  ],

  properties: [
    { icon: '\u2295', title: 'Linearity',
      body:    'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
      example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$' },
    { icon: '\u00D7', title: 'Product rule',
      body:    '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
      example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$' },
    { icon: '\u00F7', title: 'Quotient rule',
      body:    '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
      example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$' },
    { icon: '\u2218', title: 'Chain rule',
      body:    '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
      example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$' },
  ],

  templates: {
    left:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`,
    right: (d) => `$${d.dfx}$`,
    full:  (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right] = ${d.dfx}$`,
    input: (d) => `$${d.fx}$`,
    detailLabels: { left: 'f(x)', right: 'f\u2032(x)' },
  },

  searchModes: [
    { id: 'byF',  label: 'Find by f(x)',
      placeholder: 'Enter f(x) (e.g., sin, ln, tanh, arcsin)',
      mainKey: 'fx',  altKey: 'fxAlt' },
    { id: 'byDF', label: 'Find by f\u2032(x)',
      placeholder: 'Enter f\u2032(x) (e.g., cos, 1/x, sech^2)',
      mainKey: 'dfx', altKey: 'dfxAlt' },
  ],

  meta: {
    intro:               'Reference table of the most-used derivative identities. Try **puzzle** mode to drill, or read the full',
    introLinkText:       'derivatives explanation \u2192',
    articleHref:         '/calculus/derivatives/common',
    toolTitle:           'Derivative Tool',
    toolSubtitle:        'Every answer takes you to the table. Pick a question:',
    categoriesTitle:     'Categories',
    categoriesSubtitle:  'Click a card to highlight matching entries in the table above.',
    propertiesTitle:     'Differentiation rules',
    propertiesSubtitle:  'The four structural rules that combine and extend the identities above.',
    referenceModeNote:   'Reference mode: click any card to see the explanation right there.',
    puzzleModeNote:      'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.',
  },

  theme: null,

  // -------------------------------------------------------
  // Quiz generator. Called on every "next question" by QuizWidget.
  // Returns { question, options, correct }. Rotates three types at random:
  //   1. Given f(x), pick f'(x).
  //   2. Given f'(x), pick f(x).
  //   3. Given f(x), pick its category.
  // Each question has 4 options, one correct + three distractors.
  // -------------------------------------------------------
  quizGenerator: () => {
    const items      = DERIVATIVES_DATASET.items;
    const categories = DERIVATIVES_DATASET.categories;

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
    const type    = rand(['derivative', 'antiderivative', 'category']);

    if (type === 'derivative') {
      const distractors = pickN(
        items.filter((d) => d.dfx !== subject.dfx),
        3,
      ).map((d) => `$${d.dfx}$`);
      const correct = `$${subject.dfx}$`;
      return {
        question: `What is $\\dfrac{d}{dx}\\!\\left[${subject.fx}\\right]$?`,
        options:  shuffle([correct, ...distractors]),
        correct,
      };
    }

    if (type === 'antiderivative') {
      const distractors = pickN(
        items.filter((d) => d.fx !== subject.fx),
        3,
      ).map((d) => `$${d.fx}$`);
      const correct = `$${subject.fx}$`;
      return {
        question: `Which function has derivative $${subject.dfx}$?`,
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
      question: `Which family does $${subject.fx}$ belong to?`,
      options:  shuffle([correctLabel, ...distractors]),
      correct:  correctLabel,
    };
  },
};

export default DERIVATIVES_DATASET;