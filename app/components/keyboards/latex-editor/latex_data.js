// // latex_data.js - Scalable data structure for LaTeX editor
// // Each category contains button configurations with display, label, and LaTeX code

// const latexData = {
//   basic: [
//     {
//       display: 'x<sup>2</sup>',
//       label: 'Superscript',
//       latex: '^{}',
//       requiresSelection: false
//     },
//     {
//       display: 'x<sub>1</sub>',
//       label: 'Subscript',
//       latex: '_{}',
//       requiresSelection: false
//     },
//     {
//       display: '<i>x̄</i>',
//       label: 'Bar',
//       latex: '\\bar{}',
//       requiresSelection: true
//     },
//     {
//       display: '<i>x̂</i>',
//       label: 'Hat',
//       latex: '\\hat{}',
//       requiresSelection: true
//     },
//     {
//       display: '<i>x⃗</i>',
//       label: 'Vector',
//       latex: '\\vec{}',
//       requiresSelection: true
//     },
//     {
//       display: '√',
//       label: 'Square Root',
//       latex: '\\sqrt{}',
//       requiresSelection: false
//     },
//     {
//       display: '∛',
//       label: 'Nth Root',
//       latex: '\\sqrt[]{}',
//       requiresSelection: false
//     },
//     {
//       display: 'x/y',
//       label: 'Fraction',
//       latex: '\\frac{}{}',
//       requiresSelection: false
//     },
//     {
//       display: '( )',
//       label: 'Parentheses',
//       latex: '\\left( \\right)',
//       requiresSelection: false
//     },
//     {
//       display: '[ ]',
//       label: 'Brackets',
//       latex: '\\left[ \\right]',
//       requiresSelection: false
//     },
//     {
//       display: '{ }',
//       label: 'Braces',
//       latex: '\\left\\{ \\right\\}',
//       requiresSelection: false
//     },
//     {
//       display: '| |',
//       label: 'Absolute',
//       latex: '\\left| \\right|',
//       requiresSelection: false
//     },
//   ],

//   operators: [
//     {
//       display: '+',
//       label: 'Plus',
//       latex: '+',
//       requiresSelection: false
//     },
//     {
//       display: '−',
//       label: 'Minus',
//       latex: '-',
//       requiresSelection: false
//     },
//     {
//       display: '×',
//       label: 'Times',
//       latex: '\\times',
//       requiresSelection: false
//     },
//     {
//       display: '÷',
//       label: 'Divide',
//       latex: '\\div',
//       requiresSelection: false
//     },
//     {
//       display: '±',
//       label: 'Plus-Minus',
//       latex: '\\pm',
//       requiresSelection: false
//     },
//     {
//       display: '∓',
//       label: 'Minus-Plus',
//       latex: '\\mp',
//       requiresSelection: false
//     },
//     {
//       display: '⋅',
//       label: 'Dot',
//       latex: '\\cdot',
//       requiresSelection: false
//     },
//     {
//       display: '∗',
//       label: 'Asterisk',
//       latex: '\\ast',
//       requiresSelection: false
//     },
//     {
//       display: '=',
//       label: 'Equals',
//       latex: '=',
//       requiresSelection: false
//     },
//     {
//       display: '≠',
//       label: 'Not Equal',
//       latex: '\\neq',
//       requiresSelection: false
//     },
//     {
//       display: '<',
//       label: 'Less Than',
//       latex: '<',
//       requiresSelection: false
//     },
//     {
//       display: '>',
//       label: 'Greater Than',
//       latex: '>',
//       requiresSelection: false
//     },
//     {
//       display: '≤',
//       label: 'Less Equal',
//       latex: '\\leq',
//       requiresSelection: false
//     },
//     {
//       display: '≥',
//       label: 'Greater Equal',
//       latex: '\\geq',
//       requiresSelection: false
//     },
//     {
//       display: '≈',
//       label: 'Approx',
//       latex: '\\approx',
//       requiresSelection: false
//     },
//     {
//       display: '≡',
//       label: 'Equivalent',
//       latex: '\\equiv',
//       requiresSelection: false
//     },
//   ],

//   calculus: [
//     {
//       display: '∫',
//       label: 'Integral',
//       latex: '\\int ',
//       requiresSelection: false
//     },
//     {
//       display: '∫<sub>a</sub><sup>b</sup>',
//       label: 'Def Integral',
//       latex: '\\int_{a}^{b} ',
//       requiresSelection: false
//     },
//     {
//       display: '∬',
//       label: 'Double Integral',
//       latex: '\\iint ',
//       requiresSelection: false
//     },
//     {
//       display: '∭',
//       label: 'Triple Integral',
//       latex: '\\iiint ',
//       requiresSelection: false
//     },
//     {
//       display: '∮',
//       label: 'Contour',
//       latex: '\\oint ',
//       requiresSelection: false
//     },
//     {
//       display: '∂',
//       label: 'Partial',
//       latex: '\\partial ',
//       requiresSelection: false
//     },
//     {
//       display: 'lim',
//       label: 'Limit',
//       latex: '\\lim_{}',
//       requiresSelection: false
//     },
//     {
//       display: 'lim<sub>x→a</sub>',
//       label: 'Limit To',
//       latex: '\\lim_{x \\to a}',
//       requiresSelection: false
//     },
//     {
//       display: '∑',
//       label: 'Sum',
//       latex: '\\sum ',
//       requiresSelection: false
//     },
//     {
//       display: '∑<sub>i=1</sub><sup>n</sup>',
//       label: 'Sum Range',
//       latex: '\\sum_{i=1}^{n} ',
//       requiresSelection: false
//     },
//     {
//       display: '∏',
//       label: 'Product',
//       latex: '\\prod ',
//       requiresSelection: false
//     },
//     {
//       display: '∏<sub>i=1</sub><sup>n</sup>',
//       label: 'Product Range',
//       latex: '\\prod_{i=1}^{n} ',
//       requiresSelection: false
//     },
//   ],

//   greek: [
//     {
//       display: 'α',
//       label: 'alpha',
//       latex: '\\alpha ',
//       requiresSelection: false
//     },
//     {
//       display: 'β',
//       label: 'beta',
//       latex: '\\beta ',
//       requiresSelection: false
//     },
//     {
//       display: 'γ',
//       label: 'gamma',
//       latex: '\\gamma ',
//       requiresSelection: false
//     },
//     {
//       display: 'δ',
//       label: 'delta',
//       latex: '\\delta ',
//       requiresSelection: false
//     },
//     {
//       display: 'ε',
//       label: 'epsilon',
//       latex: '\\epsilon ',
//       requiresSelection: false
//     },
//     {
//       display: 'θ',
//       label: 'theta',
//       latex: '\\theta ',
//       requiresSelection: false
//     },
//     {
//       display: 'λ',
//       label: 'lambda',
//       latex: '\\lambda ',
//       requiresSelection: false
//     },
//     {
//       display: 'μ',
//       label: 'mu',
//       latex: '\\mu ',
//       requiresSelection: false
//     },
//     {
//       display: 'π',
//       label: 'pi',
//       latex: '\\pi ',
//       requiresSelection: false
//     },
//     {
//       display: 'σ',
//       label: 'sigma',
//       latex: '\\sigma ',
//       requiresSelection: false
//     },
//     {
//       display: 'φ',
//       label: 'phi',
//       latex: '\\phi ',
//       requiresSelection: false
//     },
//     {
//       display: 'ω',
//       label: 'omega',
//       latex: '\\omega ',
//       requiresSelection: false
//     },
//     {
//       display: 'Δ',
//       label: 'Delta',
//       latex: '\\Delta ',
//       requiresSelection: false
//     },
//     {
//       display: 'Σ',
//       label: 'Sigma',
//       latex: '\\Sigma ',
//       requiresSelection: false
//     },
//     {
//       display: 'Π',
//       label: 'Pi',
//       latex: '\\Pi ',
//       requiresSelection: false
//     },
//     {
//       display: 'Ω',
//       label: 'Omega',
//       latex: '\\Omega ',
//       requiresSelection: false
//     },
//   ],

//   matrices: [
//     {
//       display: '[ ]',
//       label: '2×2 Matrix',
//       latex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}',
//       requiresSelection: false
//     },
//     {
//       display: '[ ]',
//       label: '3×3 Matrix',
//       latex: '\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}',
//       requiresSelection: false
//     },
//     {
//       display: '( )',
//       label: '2×2 Paren',
//       latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
//       requiresSelection: false
//     },
//     {
//       display: '| |',
//       label: 'Determinant',
//       latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}',
//       requiresSelection: false
//     },
//     {
//       display: '{}',
//       label: 'Cases',
//       latex: '\\begin{cases} x & \\text{if } x > 0 \\\\ -x & \\text{if } x < 0 \\end{cases}',
//       requiresSelection: false
//     },
//   ],

//   functions: [
//     {
//       display: 'sin',
//       label: 'Sine',
//       latex: '\\sin ',
//       requiresSelection: false
//     },
//     {
//       display: 'cos',
//       label: 'Cosine',
//       latex: '\\cos ',
//       requiresSelection: false
//     },
//     {
//       display: 'tan',
//       label: 'Tangent',
//       latex: '\\tan ',
//       requiresSelection: false
//     },
//     {
//       display: 'log',
//       label: 'Log',
//       latex: '\\log ',
//       requiresSelection: false
//     },
//     {
//       display: 'ln',
//       label: 'Natural Log',
//       latex: '\\ln ',
//       requiresSelection: false
//     },
//     {
//       display: 'exp',
//       label: 'Exponential',
//       latex: '\\exp ',
//       requiresSelection: false
//     },
//     {
//       display: 'max',
//       label: 'Maximum',
//       latex: '\\max ',
//       requiresSelection: false
//     },
//     {
//       display: 'min',
//       label: 'Minimum',
//       latex: '\\min ',
//       requiresSelection: false
//     },
//   ],
// };

// export default latexData;


// latex_data.js - Comprehensive LaTeX editor data

const latexData = {
  basic: [
    {
      display: 'x<sup>2</sup>',
      label: 'Superscript',
      latex: '^{}',
      requiresSelection: false
    },
    {
      display: 'x<sub>1</sub>',
      label: 'Subscript',
      latex: '_{}',
      requiresSelection: false
    },
    {
      display: '<i>x̄</i>',
      label: 'Bar',
      latex: '\\bar{}',
      requiresSelection: true
    },
    {
      display: '<i>x̂</i>',
      label: 'Hat',
      latex: '\\hat{}',
      requiresSelection: true
    },
    {
      display: '<i>x⃗</i>',
      label: 'Vector',
      latex: '\\vec{}',
      requiresSelection: true
    },
    {
      display: '<i>x̃</i>',
      label: 'Tilde',
      latex: '\\tilde{}',
      requiresSelection: true
    },
    {
      display: '<i>ẋ</i>',
      label: 'Dot',
      latex: '\\dot{}',
      requiresSelection: true
    },
    {
      display: '√',
      label: 'Square Root',
      latex: '\\sqrt{}',
      requiresSelection: false
    },
    {
      display: '∛',
      label: 'Nth Root',
      latex: '\\sqrt[]{}',
      requiresSelection: false
    },
    {
      display: 'x/y',
      label: 'Fraction',
      latex: '\\frac{}{}',
      requiresSelection: false
    },
    {
      display: '( )',
      label: 'Parentheses',
      latex: '\\left( \\right)',
      requiresSelection: false
    },
    {
      display: '[ ]',
      label: 'Brackets',
      latex: '\\left[ \\right]',
      requiresSelection: false
    },
    {
      display: '{ }',
      label: 'Braces',
      latex: '\\left\\{ \\right\\}',
      requiresSelection: false
    },
    {
      display: '| |',
      label: 'Absolute',
      latex: '\\left| \\right|',
      requiresSelection: false
    },
  ],

  operators: [
    {
      display: '+',
      label: 'Plus',
      latex: '+',
      requiresSelection: false
    },
    {
      display: '−',
      label: 'Minus',
      latex: '-',
      requiresSelection: false
    },
    {
      display: '×',
      label: 'Times',
      latex: '\\times ',
      requiresSelection: false
    },
    {
      display: '÷',
      label: 'Divide',
      latex: '\\div ',
      requiresSelection: false
    },
    {
      display: '±',
      label: 'Plus-Minus',
      latex: '\\pm ',
      requiresSelection: false
    },
    {
      display: '∓',
      label: 'Minus-Plus',
      latex: '\\mp ',
      requiresSelection: false
    },
    {
      display: '⋅',
      label: 'Dot',
      latex: '\\cdot ',
      requiresSelection: false
    },
    {
      display: '∗',
      label: 'Asterisk',
      latex: '\\ast ',
      requiresSelection: false
    },
    {
      display: '=',
      label: 'Equals',
      latex: '=',
      requiresSelection: false
    },
    {
      display: '≠',
      label: 'Not Equal',
      latex: '\\neq ',
      requiresSelection: false
    },
    {
      display: '<',
      label: 'Less Than',
      latex: '<',
      requiresSelection: false
    },
    {
      display: '>',
      label: 'Greater Than',
      latex: '>',
      requiresSelection: false
    },
    {
      display: '≤',
      label: 'Less Equal',
      latex: '\\leq ',
      requiresSelection: false
    },
    {
      display: '≥',
      label: 'Greater Equal',
      latex: '\\geq ',
      requiresSelection: false
    },
    {
      display: '≈',
      label: 'Approx',
      latex: '\\approx ',
      requiresSelection: false
    },
    {
      display: '≡',
      label: 'Equivalent',
      latex: '\\equiv ',
      requiresSelection: false
    },
    {
      display: '≪',
      label: 'Much Less',
      latex: '\\ll ',
      requiresSelection: false
    },
    {
      display: '≫',
      label: 'Much Greater',
      latex: '\\gg ',
      requiresSelection: false
    },
    {
      display: '∝',
      label: 'Proportional',
      latex: '\\propto ',
      requiresSelection: false
    },
    {
      display: '∼',
      label: 'Similar',
      latex: '\\sim ',
      requiresSelection: false
    },
  ],

  calculus: [
    {
      display: '∫',
      label: 'Integral',
      latex: '\\int ',
      requiresSelection: false
    },
    {
      display: '∫<sub>a</sub><sup>b</sup>',
      label: 'Def Integral',
      latex: '\\int_{a}^{b} ',
      requiresSelection: false
    },
    {
      display: '∬',
      label: 'Double Integral',
      latex: '\\iint ',
      requiresSelection: false
    },
    {
      display: '∭',
      label: 'Triple Integral',
      latex: '\\iiint ',
      requiresSelection: false
    },
    {
      display: '∮',
      label: 'Contour',
      latex: '\\oint ',
      requiresSelection: false
    },
    {
      display: '∂',
      label: 'Partial',
      latex: '\\partial ',
      requiresSelection: false
    },
    {
      display: '∇',
      label: 'Nabla',
      latex: '\\nabla ',
      requiresSelection: false
    },
    {
      display: 'lim',
      label: 'Limit',
      latex: '\\lim_{}',
      requiresSelection: false
    },
    {
      display: 'lim<sub>x→a</sub>',
      label: 'Limit To',
      latex: '\\lim_{x \\to a}',
      requiresSelection: false
    },
    {
      display: '∑',
      label: 'Sum',
      latex: '\\sum ',
      requiresSelection: false
    },
    {
      display: '∑<sub>i=1</sub><sup>n</sup>',
      label: 'Sum Range',
      latex: '\\sum_{i=1}^{n} ',
      requiresSelection: false
    },
    {
      display: '∏',
      label: 'Product',
      latex: '\\prod ',
      requiresSelection: false
    },
    {
      display: '∏<sub>i=1</sub><sup>n</sup>',
      label: 'Product Range',
      latex: '\\prod_{i=1}^{n} ',
      requiresSelection: false
    },
    {
      display: 'd/dx',
      label: 'Derivative',
      latex: '\\frac{d}{dx}',
      requiresSelection: false
    },
    {
      display: 'dy/dx',
      label: 'Derivative Of',
      latex: '\\frac{dy}{dx}',
      requiresSelection: false
    },
    {
      display: '∞',
      label: 'Infinity',
      latex: '\\infty ',
      requiresSelection: false
    },
  ],

  greek: [
    {
      display: 'α',
      label: 'alpha',
      latex: '\\alpha ',
      requiresSelection: false
    },
    {
      display: 'β',
      label: 'beta',
      latex: '\\beta ',
      requiresSelection: false
    },
    {
      display: 'γ',
      label: 'gamma',
      latex: '\\gamma ',
      requiresSelection: false
    },
    {
      display: 'δ',
      label: 'delta',
      latex: '\\delta ',
      requiresSelection: false
    },
    {
      display: 'ε',
      label: 'epsilon',
      latex: '\\epsilon ',
      requiresSelection: false
    },
    {
      display: 'ζ',
      label: 'zeta',
      latex: '\\zeta ',
      requiresSelection: false
    },
    {
      display: 'η',
      label: 'eta',
      latex: '\\eta ',
      requiresSelection: false
    },
    {
      display: 'θ',
      label: 'theta',
      latex: '\\theta ',
      requiresSelection: false
    },
    {
      display: 'ι',
      label: 'iota',
      latex: '\\iota ',
      requiresSelection: false
    },
    {
      display: 'κ',
      label: 'kappa',
      latex: '\\kappa ',
      requiresSelection: false
    },
    {
      display: 'λ',
      label: 'lambda',
      latex: '\\lambda ',
      requiresSelection: false
    },
    {
      display: 'μ',
      label: 'mu',
      latex: '\\mu ',
      requiresSelection: false
    },
    {
      display: 'ν',
      label: 'nu',
      latex: '\\nu ',
      requiresSelection: false
    },
    {
      display: 'ξ',
      label: 'xi',
      latex: '\\xi ',
      requiresSelection: false
    },
    {
      display: 'π',
      label: 'pi',
      latex: '\\pi ',
      requiresSelection: false
    },
    {
      display: 'ρ',
      label: 'rho',
      latex: '\\rho ',
      requiresSelection: false
    },
    {
      display: 'σ',
      label: 'sigma',
      latex: '\\sigma ',
      requiresSelection: false
    },
    {
      display: 'τ',
      label: 'tau',
      latex: '\\tau ',
      requiresSelection: false
    },
    {
      display: 'υ',
      label: 'upsilon',
      latex: '\\upsilon ',
      requiresSelection: false
    },
    {
      display: 'φ',
      label: 'phi',
      latex: '\\phi ',
      requiresSelection: false
    },
    {
      display: 'χ',
      label: 'chi',
      latex: '\\chi ',
      requiresSelection: false
    },
    {
      display: 'ψ',
      label: 'psi',
      latex: '\\psi ',
      requiresSelection: false
    },
    {
      display: 'ω',
      label: 'omega',
      latex: '\\omega ',
      requiresSelection: false
    },
    {
      display: 'Γ',
      label: 'Gamma',
      latex: '\\Gamma ',
      requiresSelection: false
    },
    {
      display: 'Δ',
      label: 'Delta',
      latex: '\\Delta ',
      requiresSelection: false
    },
    {
      display: 'Θ',
      label: 'Theta',
      latex: '\\Theta ',
      requiresSelection: false
    },
    {
      display: 'Λ',
      label: 'Lambda',
      latex: '\\Lambda ',
      requiresSelection: false
    },
    {
      display: 'Ξ',
      label: 'Xi',
      latex: '\\Xi ',
      requiresSelection: false
    },
    {
      display: 'Π',
      label: 'Pi',
      latex: '\\Pi ',
      requiresSelection: false
    },
    {
      display: 'Σ',
      label: 'Sigma',
      latex: '\\Sigma ',
      requiresSelection: false
    },
    {
      display: 'Φ',
      label: 'Phi',
      latex: '\\Phi ',
      requiresSelection: false
    },
    {
      display: 'Ψ',
      label: 'Psi',
      latex: '\\Psi ',
      requiresSelection: false
    },
    {
      display: 'Ω',
      label: 'Omega',
      latex: '\\Omega ',
      requiresSelection: false
    },
  ],

  set_theory: [
    {
      display: '∈',
      label: 'Element',
      latex: '\\in ',
      requiresSelection: false
    },
    {
      display: '∉',
      label: 'Not Element',
      latex: '\\notin ',
      requiresSelection: false
    },
    {
      display: '⊂',
      label: 'Subset',
      latex: '\\subset ',
      requiresSelection: false
    },
    {
      display: '⊆',
      label: 'Subset Equal',
      latex: '\\subseteq ',
      requiresSelection: false
    },
    {
      display: '⊃',
      label: 'Superset',
      latex: '\\supset ',
      requiresSelection: false
    },
    {
      display: '⊇',
      label: 'Superset Equal',
      latex: '\\supseteq ',
      requiresSelection: false
    },
    {
      display: '∪',
      label: 'Union',
      latex: '\\cup ',
      requiresSelection: false
    },
    {
      display: '∩',
      label: 'Intersection',
      latex: '\\cap ',
      requiresSelection: false
    },
    {
      display: '∅',
      label: 'Empty Set',
      latex: '\\emptyset ',
      requiresSelection: false
    },
    {
      display: '∖',
      label: 'Set Minus',
      latex: '\\setminus ',
      requiresSelection: false
    },
    {
      display: 'ℕ',
      label: 'Naturals',
      latex: '\\mathbb{N}',
      requiresSelection: false
    },
    {
      display: 'ℤ',
      label: 'Integers',
      latex: '\\mathbb{Z}',
      requiresSelection: false
    },
    {
      display: 'ℚ',
      label: 'Rationals',
      latex: '\\mathbb{Q}',
      requiresSelection: false
    },
    {
      display: 'ℝ',
      label: 'Reals',
      latex: '\\mathbb{R}',
      requiresSelection: false
    },
    {
      display: 'ℂ',
      label: 'Complex',
      latex: '\\mathbb{C}',
      requiresSelection: false
    },
    {
      display: '⋃',
      label: 'Big Union',
      latex: '\\bigcup ',
      requiresSelection: false
    },
    {
      display: '⋂',
      label: 'Big Intersection',
      latex: '\\bigcap ',
      requiresSelection: false
    },
  ],

  logic: [
    {
      display: '∧',
      label: 'And',
      latex: '\\land ',
      requiresSelection: false
    },
    {
      display: '∨',
      label: 'Or',
      latex: '\\lor ',
      requiresSelection: false
    },
    {
      display: '¬',
      label: 'Not',
      latex: '\\neg ',
      requiresSelection: false
    },
    {
      display: '→',
      label: 'Implies',
      latex: '\\to ',
      requiresSelection: false
    },
    {
      display: '⇒',
      label: 'Implies',
      latex: '\\Rightarrow ',
      requiresSelection: false
    },
    {
      display: '↔',
      label: 'Iff',
      latex: '\\leftrightarrow ',
      requiresSelection: false
    },
    {
      display: '⇔',
      label: 'Iff',
      latex: '\\Leftrightarrow ',
      requiresSelection: false
    },
    {
      display: '∀',
      label: 'For All',
      latex: '\\forall ',
      requiresSelection: false
    },
    {
      display: '∃',
      label: 'Exists',
      latex: '\\exists ',
      requiresSelection: false
    },
    {
      display: '∄',
      label: 'Not Exists',
      latex: '\\nexists ',
      requiresSelection: false
    },
    {
      display: '⊤',
      label: 'True',
      latex: '\\top ',
      requiresSelection: false
    },
    {
      display: '⊥',
      label: 'False',
      latex: '\\bot ',
      requiresSelection: false
    },
    {
      display: '⊕',
      label: 'XOR',
      latex: '\\oplus ',
      requiresSelection: false
    },
    {
      display: '⊻',
      label: 'XOR',
      latex: '\\veebar ',
      requiresSelection: false
    },
  ],

  arrows: [
    {
      display: '←',
      label: 'Left',
      latex: '\\leftarrow ',
      requiresSelection: false
    },
    {
      display: '→',
      label: 'Right',
      latex: '\\rightarrow ',
      requiresSelection: false
    },
    {
      display: '↑',
      label: 'Up',
      latex: '\\uparrow ',
      requiresSelection: false
    },
    {
      display: '↓',
      label: 'Down',
      latex: '\\downarrow ',
      requiresSelection: false
    },
    {
      display: '↔',
      label: 'Left Right',
      latex: '\\leftrightarrow ',
      requiresSelection: false
    },
    {
      display: '⇐',
      label: 'Left Double',
      latex: '\\Leftarrow ',
      requiresSelection: false
    },
    {
      display: '⇒',
      label: 'Right Double',
      latex: '\\Rightarrow ',
      requiresSelection: false
    },
    {
      display: '⇔',
      label: 'Left Right Double',
      latex: '\\Leftrightarrow ',
      requiresSelection: false
    },
    {
      display: '↦',
      label: 'Maps To',
      latex: '\\mapsto ',
      requiresSelection: false
    },
    {
      display: '⟶',
      label: 'Long Right',
      latex: '\\longrightarrow ',
      requiresSelection: false
    },
    {
      display: '⟵',
      label: 'Long Left',
      latex: '\\longleftarrow ',
      requiresSelection: false
    },
    {
      display: '⟷',
      label: 'Long Left Right',
      latex: '\\longleftrightarrow ',
      requiresSelection: false
    },
  ],

  matrices: [
    {
      display: '[ ]',
      label: '2×2 Matrix',
      latex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}',
      requiresSelection: false
    },
    {
      display: '[ ]',
      label: '3×3 Matrix',
      latex: '\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}',
      requiresSelection: false
    },
    {
      display: '( )',
      label: '2×2 Paren',
      latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
      requiresSelection: false
    },
    {
      display: '( )',
      label: '3×3 Paren',
      latex: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}',
      requiresSelection: false
    },
    {
      display: '| |',
      label: '2×2 Det',
      latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}',
      requiresSelection: false
    },
    {
      display: '| |',
      label: '3×3 Det',
      latex: '\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix}',
      requiresSelection: false
    },
    {
      display: '{}',
      label: 'Cases',
      latex: '\\begin{cases} x & \\text{if } x > 0 \\\\ -x & \\text{if } x < 0 \\end{cases}',
      requiresSelection: false
    },
  ],

  functions: [
    {
      display: 'sin',
      label: 'Sine',
      latex: '\\sin ',
      requiresSelection: false
    },
    {
      display: 'cos',
      label: 'Cosine',
      latex: '\\cos ',
      requiresSelection: false
    },
    {
      display: 'tan',
      label: 'Tangent',
      latex: '\\tan ',
      requiresSelection: false
    },
    {
      display: 'cot',
      label: 'Cotangent',
      latex: '\\cot ',
      requiresSelection: false
    },
    {
      display: 'sec',
      label: 'Secant',
      latex: '\\sec ',
      requiresSelection: false
    },
    {
      display: 'csc',
      label: 'Cosecant',
      latex: '\\csc ',
      requiresSelection: false
    },
    {
      display: 'arcsin',
      label: 'Arcsine',
      latex: '\\arcsin ',
      requiresSelection: false
    },
    {
      display: 'arccos',
      label: 'Arccosine',
      latex: '\\arccos ',
      requiresSelection: false
    },
    {
      display: 'arctan',
      label: 'Arctangent',
      latex: '\\arctan ',
      requiresSelection: false
    },
    {
      display: 'sinh',
      label: 'Hyperbolic Sine',
      latex: '\\sinh ',
      requiresSelection: false
    },
    {
      display: 'cosh',
      label: 'Hyperbolic Cosine',
      latex: '\\cosh ',
      requiresSelection: false
    },
    {
      display: 'tanh',
      label: 'Hyperbolic Tangent',
      latex: '\\tanh ',
      requiresSelection: false
    },
    {
      display: 'log',
      label: 'Log',
      latex: '\\log ',
      requiresSelection: false
    },
    {
      display: 'ln',
      label: 'Natural Log',
      latex: '\\ln ',
      requiresSelection: false
    },
    {
      display: 'log<sub>b</sub>',
      label: 'Log Base',
      latex: '\\log_{} ',
      requiresSelection: false
    },
    {
      display: 'exp',
      label: 'Exponential',
      latex: '\\exp ',
      requiresSelection: false
    },
    {
      display: 'max',
      label: 'Maximum',
      latex: '\\max ',
      requiresSelection: false
    },
    {
      display: 'min',
      label: 'Minimum',
      latex: '\\min ',
      requiresSelection: false
    },
    {
      display: 'sup',
      label: 'Supremum',
      latex: '\\sup ',
      requiresSelection: false
    },
    {
      display: 'inf',
      label: 'Infimum',
      latex: '\\inf ',
      requiresSelection: false
    },
    {
      display: 'gcd',
      label: 'GCD',
      latex: '\\gcd ',
      requiresSelection: false
    },
    {
      display: 'lcm',
      label: 'LCM',
      latex: '\\text{lcm} ',
      requiresSelection: false
    },
  ],

  geometry: [
    {
      display: '∠',
      label: 'Angle',
      latex: '\\angle ',
      requiresSelection: false
    },
    {
      display: '∡',
      label: 'Measured Angle',
      latex: '\\measuredangle ',
      requiresSelection: false
    },
    {
      display: '△',
      label: 'Triangle',
      latex: '\\triangle ',
      requiresSelection: false
    },
    {
      display: '□',
      label: 'Square',
      latex: '\\square ',
      requiresSelection: false
    },
    {
      display: '∥',
      label: 'Parallel',
      latex: '\\parallel ',
      requiresSelection: false
    },
    {
      display: '⊥',
      label: 'Perpendicular',
      latex: '\\perp ',
      requiresSelection: false
    },
    {
      display: '∦',
      label: 'Not Parallel',
      latex: '\\nparallel ',
      requiresSelection: false
    },
    {
      display: '≅',
      label: 'Congruent',
      latex: '\\cong ',
      requiresSelection: false
    },
    {
      display: '∼',
      label: 'Similar',
      latex: '\\sim ',
      requiresSelection: false
    },
    {
      display: '○',
      label: 'Circle',
      latex: '\\circ ',
      requiresSelection: false
    },
    {
      display: '°',
      label: 'Degree',
      latex: '^\\circ ',
      requiresSelection: false
    },
  ],

  brackets: [
    {
      display: '( )',
      label: 'Parentheses',
      latex: '\\left( \\right)',
      requiresSelection: false
    },
    {
      display: '[ ]',
      label: 'Brackets',
      latex: '\\left[ \\right]',
      requiresSelection: false
    },
    {
      display: '{ }',
      label: 'Braces',
      latex: '\\left\\{ \\right\\}',
      requiresSelection: false
    },
    {
      display: '⟨ ⟩',
      label: 'Angle Brackets',
      latex: '\\langle \\rangle',
      requiresSelection: false
    },
    {
      display: '| |',
      label: 'Absolute',
      latex: '\\left| \\right|',
      requiresSelection: false
    },
    {
      display: '∥ ∥',
      label: 'Norm',
      latex: '\\left\\| \\right\\|',
      requiresSelection: false
    },
    {
      display: '⌈ ⌉',
      label: 'Ceiling',
      latex: '\\lceil \\rceil',
      requiresSelection: false
    },
    {
      display: '⌊ ⌋',
      label: 'Floor',
      latex: '\\lfloor \\rfloor',
      requiresSelection: false
    },
  ],
};

export default latexData;