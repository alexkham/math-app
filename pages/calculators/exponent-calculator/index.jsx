



import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';
import '../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

/* calculators-mesh: finished 2026-10-12 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "C:/Program Files/Git/calculators/exponent-calculator" in calculators-mesh-registry.json (same folder): 9 usage sections, each with a demo; 13 panel notes; 25 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

const detailInstructions = [
  `Pick a mode with the three tabs at the top: **Power** raises one number to a power, **Rules** applies a law of exponents to your numbers, **Compare** sets two powers side by side. [Learn more about the modes](!#getting-started-with-the-calculator)`,
  `In Power mode, click **Square**, **Cube** or **Custom**. Square and Cube lock the exponent at 2 or 3; Custom unlocks it and shows quick chips for common exponents. [Learn more about the power types](!#choosing-between-square-cube-and-custom-power)`,
  `Type the base in the large box on the left of the equals sign. Whole numbers, decimals and negative numbers all work. [Learn more about the base](!#entering-your-base-number)`,
  `Type the exponent in the small raised box (Custom only), or click a chip such as **x¹⁰** or **x⁻²**. [Learn more about the exponent](!#setting-the-exponent)`,
  `The result appears after the equals sign as you type. Click **Calculate** to add the power to the **Recent** strip; the **Result** card lists the value in several forms. [Learn more about the results](!#reading-your-results)`,
  `The **How this works** panel on the right explains the current power, rule or comparison with your own numbers. Its link opens the section below that explains the topic in full. [Learn more about the panel](!#the-how-this-works-panel)`,
  `In Rules mode, click a rule on the left, edit its bases and exponents, and read the numbered steps. [Learn more about Rules mode](!#using-rules-mode)`,
  `In Compare mode, type a base and an exponent for expression A and for expression B, then read the verdict. [Learn more about Compare mode](!#using-compare-mode)`,
  `Click **Reset** to return to 5 squared. An impossible input such as 0 to a negative power shows "undefined" instead of a number. [Learn more about messages](!#understanding-error-and-warning-messages)`,
];

// Per-state notes for the How this works panel (explanations.states in ExponentCalculator):
// key = mode, or mode:sub-option; the component shows the combined key first, then the mode key.
const explanations = {
  states: {
    power: {
      title: `Power Mode`,
      content: `Raises a base to an exponent: $b^n$. Pick Square, Cube or Custom to set the exponent, type the base, and read the result and its forms on the left. [All power types](!#what-are-exponents)`,
    },
    'power:square': {
      title: `Square`,
      content: `Multiplies the base by itself once: $b^2 = b \\times b$. The exponent box is locked at $2$; a negative base gives a positive square. [Learn more about squaring](!#squaring-a-number) · [All power types](!#what-are-exponents)`,
    },
    'power:cube': {
      title: `Cube`,
      content: `Multiplies the base by itself twice: $b^3 = b \\times b \\times b$. The exponent box is locked at $3$; a negative base keeps a negative cube. [Learn more about cubing](!#cubing-a-number) · [All power types](!#what-are-exponents)`,
    },
    'power:custom': {
      title: `Custom Power`,
      content: `Raises the base to any exponent you type: positive, negative or decimal. A negative exponent gives a reciprocal, a decimal exponent a root. [Learn more about custom powers](!#positive-vs-negative-exponents) · [All power types](!#what-are-exponents)`,
    },
    rules: {
      title: `Rules Mode`,
      content: `Applies one law of exponents to your numbers and shows the steps. Pick a rule on the left, then edit the bases and exponents. [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:product': {
      title: `Product Rule`,
      content: `Same base multiplied: add the exponents, $b^m \\cdot b^n = b^{m+n}$. The bases must match, or the rule does not apply. [Learn more about the product rule](!#the-product-rule) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:quotient': {
      title: `Quotient Rule`,
      content: `Same base divided: subtract the exponents, $\\frac{b^m}{b^n} = b^{m-n}$. The base cannot be $0$. [Learn more about the quotient rule](!#the-quotient-rule) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:power': {
      title: `Power of a Power`,
      content: `A power raised to a power: multiply the exponents, $(b^m)^n = b^{mn}$. [Learn more about power of a power](!#power-of-a-power) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:product-power': {
      title: `Product to a Power`,
      content: `A product raised to a power: give the exponent to each factor, $(ab)^n = a^n b^n$. It does not work over a sum. [Learn more about product to a power](!#product-to-a-power) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:quotient-power': {
      title: `Quotient to a Power`,
      content: `A fraction raised to a power: give the exponent to the top and to the bottom, $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$. [Learn more about quotient to a power](!#quotient-to-a-power) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:negative': {
      title: `Negative Exponent`,
      content: `A negative exponent means a reciprocal: $b^{-n} = \\frac{1}{b^n}$. The result is a positive fraction, not a negative number. [Learn more about the negative exponent rule](!#the-negative-exponent-rule) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    'rules:zero': {
      title: `Zero Exponent`,
      content: `Any non-zero base to the power $0$ equals $1$: $b^0 = 1$. $0^0$ stays undefined. [Learn more about the zero exponent rule](!#the-zero-exponent-rule) · [All exponent rules](!#basic-exponent-rules-you-should-know)`,
    },
    compare: {
      title: `Compare Mode`,
      content: `Computes two powers and says which is larger and by how many orders of magnitude. With equal bases it compares the exponents; otherwise it compares logarithms. [Learn more about comparing powers](!#comparing-two-powers)`,
    },
  },
};

const demos = {
  'getting-started-with-the-calculator': {
    title: 'The three modes and Reset',
    script: [
      { say: 'CLICK Rules\nRule list and Step-by-step replace the power form.', at: 'tr' },
      { click: { button: 'Rules' } },
      { wait: 2000 },
      { say: 'CLICK Compare\nExpression A against expression B, with a verdict.', at: 'tr' },
      { click: { button: 'Compare' } },
      { wait: 2000 },
      { say: 'CLICK Power\nBack to the power form.\nEach mode keeps its own numbers.', at: 'tr' },
      { click: { button: 'Power' } },
      { wait: 1800 },
      { say: 'TYPE 7 as the base\nResult updates: 7 squared = 49.', at: 'tr' },
      { set: 'input.base', value: '7' },
      { wait: 2000 },
      { say: 'CLICK Reset\nBack to 5 squared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'entering-your-base-number': {
    title: 'Decimal, negative and impossible bases',
    script: [
      { say: 'TYPE 2.5 as the base\nDecimals use a dot.\n2.5 squared = 6.25.', at: 'tr' },
      { set: 'input.base', value: '2.5' },
      { wait: 2000 },
      { say: 'TYPE -3 as the base\nEven exponent: positive result.\n(-3) squared = 9.', at: 'tr' },
      { set: 'input.base', value: '-3' },
      { wait: 2200 },
      { say: 'CLICK Cube\nOdd exponent keeps the sign.\n(-3) cubed = -27.', at: 'tr' },
      { click: { button: 'Cube' } },
      { wait: 2200 },
      { say: 'CLICK Custom\nExponent box unlocks.\nChips appear.', at: 'tr' },
      { click: { button: 'Custom' } },
      { wait: 1800 },
      { say: 'CLICK the x¹ᐟ² chip\nNegative base, decimal exponent.\nResult: undefined.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 4 } },
      { wait: 2600 },
    ],
  },
  'setting-the-exponent': {
    title: 'Whole, negative, decimal and zero exponents',
    script: [
      { say: 'CLICK Custom\nExponent box unlocks.\nChips with common exponents appear.', at: 'tr' },
      { click: { button: 'Custom' } },
      { wait: 1800 },
      { say: 'TYPE 4 as the exponent\n5 to the 4th = 625.', at: 'tr' },
      { set: 'input.exp', value: '4' },
      { wait: 2000 },
      { say: 'CLICK the x⁻² chip\nNegative exponent: a fraction.\n5⁻² = 0.04 = 1/25.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 6 } },
      { wait: 2400 },
      { say: 'TYPE 0.5 as the exponent\nDecimal exponent: a root.\nAs radical: √5 = 2.2361.', at: 'tr' },
      { set: 'input.exp', value: '0.5' },
      { wait: 2400 },
      { say: 'CLICK the x⁰ chip\nAny non-zero base to the 0 = 1.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 7 } },
      { wait: 2200 },
    ],
  },
  'reading-your-results': {
    title: 'Result forms, neighboring powers and Recent',
    script: [
      { say: 'TYPE 2 as the base\n2 squared = 4.\nExact, Decimal, Scientific, Expanded 2 · 2.', at: 'tr' },
      { set: 'input.base', value: '2' },
      { wait: 2000 },
      { say: 'CLICK the neighbor 2⁴\nNeighboring powers load into the form.\n2⁴ = 16, Custom selected.', at: 'tr' },
      { click: { css: '.neighbor', nth: 5 } },
      { wait: 2200 },
      { say: 'TYPE 3 as the base\n3⁴ = 81.\nExpanded: 3 · 3 · 3 · 3.', at: 'tr' },
      { set: 'input.base', value: '3' },
      { wait: 2000 },
      { say: 'CLICK Calculate\nRecent strip stores 3⁴ = 81.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2000 },
      { say: 'CLICK the x¹⁰ chip\n3¹⁰ = 59049.\nExact 59,049 · Scientific 5.9049e+4.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 3 } },
      { wait: 2600 },
    ],
  },
  'the-how-this-works-panel': {
    title: 'What the panel says for different numbers',
    script: [
      { say: 'TYPE 1 as the base\nWorth knowing: base 1, the exponent has no effect.', at: 'tr' },
      { set: 'input.base', value: '1' },
      { wait: 2200 },
      { say: 'TYPE -2 as the base\nWorth knowing: negative base, even exponent.\n(-2) squared = 4.', at: 'tr' },
      { set: 'input.base', value: '-2' },
      { wait: 2400 },
      { say: 'CLICK Custom\nExponent box unlocks.\nChips appear.', at: 'tr' },
      { click: { button: 'Custom' } },
      { wait: 1800 },
      { say: 'CLICK the x⁻¹ chip\nWhat just happened: the reciprocal.\n(-2)⁻¹ = -0.5.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 5 } },
      { wait: 2400 },
      { say: 'CLICK the row n = 3 in Powers of -2\nThe row loads into the form.\n(-2) cubed = -8.', at: 'tr' },
      { click: { css: '.powers-table tbody tr', nth: 5 } },
      { wait: 2600 },
    ],
  },
  'understanding-error-and-warning-messages': {
    title: 'Undefined results and a rule that does not apply',
    script: [
      { say: 'CLICK Custom\nExponent box unlocks.\nChips appear.', at: 'tr' },
      { click: { button: 'Custom' } },
      { wait: 1800 },
      { say: 'CLICK the x⁻¹ chip\n5⁻¹ = 0.2.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 5 } },
      { wait: 2000 },
      { say: 'TYPE 0 as the base\n0⁻¹: undefined.\nStatus: Undefined. The panel says why.', at: 'tr' },
      { set: 'input.base', value: '0' },
      { wait: 2600 },
      { say: 'CLICK Rules\nProduct rule: 2³ · 2⁴.', at: 'tr' },
      { click: { button: 'Rules' } },
      { wait: 2000 },
      { say: 'TYPE 3 as the second base\nBases do not match.\nThe rule does not apply.', at: 'tr' },
      { set: { css: 'input.rule-base', nth: 1 }, value: '3' },
      { wait: 2600 },
    ],
  },
  'choosing-between-square-cube-and-custom-power': {
    title: 'Square, cube and a custom power',
    script: [
      { say: 'CLICK Cube\nExponent box locks at 3.\n5 cubed = 125.', at: 'tr' },
      { click: { button: 'Cube' } },
      { wait: 2000 },
      { say: 'CLICK Custom\nExponent box unlocks.\nChips with common exponents appear.', at: 'tr' },
      { click: { button: 'Custom' } },
      { wait: 1800 },
      { say: 'CLICK the x¹⁰ chip\n5 to the 10th = 9765625.\nResult card: exact, decimal, scientific.', at: 'tr' },
      { click: { css: '.exp-chip', nth: 3 } },
      { wait: 2200 },
      { say: 'TYPE 2 as the base\nResult updates as you type.\n2 to the 10th = 1024.', at: 'tr' },
      { set: 'input.base', value: '2' },
      { wait: 2000 },
      { say: 'CLICK Calculate\nAdds 2^10 to Recent.\nClick a Recent chip to bring it back.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
    ],
  },
  'using-rules-mode': {
    title: 'Apply the product, quotient and power-of-a-power rules',
    script: [
      { say: 'CLICK Rules\nSeven rules on the left.\nProduct rule is selected.', at: 'tr' },
      { click: { button: 'Rules' } },
      { wait: 2000 },
      { say: 'TYPE 5 as the first exponent\n2^5 · 2^4: same base, add exponents.\n2^9 = 512.', at: 'tr' },
      { set: 'input.rule-exp', value: '5' },
      { wait: 2200 },
      { say: 'CLICK Quotient rule\n3^5 / 3^2: subtract exponents.\n3^3 = 27.', at: 'tr' },
      { click: { button: 'Quotient rule' } },
      { wait: 2200 },
      { say: 'TYPE 7 as the top exponent\n3^7 / 3^2 = 3^5.\n3^5 = 243.', at: 'tr' },
      { set: 'input.rule-exp', value: '7' },
      { wait: 2200 },
      { say: 'CLICK Power of a power\n(2^3)^4: multiply exponents.\n2^12 = 4096.', at: 'tr' },
      { click: { button: 'Power of a power' } },
      { wait: 2600 },
    ],
  },
  'using-compare-mode': {
    title: 'Compare two powers',
    script: [
      { say: 'CLICK Compare\nExpression A against expression B.\nStarts with 2^10 vs 10^3.', at: 'tr' },
      { click: { button: 'Compare' } },
      { wait: 2000 },
      { say: 'TYPE 3 and 5 for A\n3^5 = 243 against 10^3 = 1000.\nDifferent bases: logarithms decide.', at: 'tr' },
      { set: { css: 'input.cmp-base', nth: 0 }, value: '3' },
      { set: { css: 'input.cmp-exp', nth: 0 }, value: '5' },
      { wait: 2400 },
      { say: 'TYPE 3 and 4 for B\nSame base: compare exponents.\n5 > 4, so A is larger.', at: 'tr' },
      { set: { css: 'input.cmp-base', nth: 1 }, value: '3' },
      { set: { css: 'input.cmp-exp', nth: 1 }, value: '4' },
      { wait: 2400 },
      { say: 'TYPE 20 as the exponent of B\n3^20 = 3486784401.\nAbout 7 orders of magnitude apart.', at: 'tr' },
      { set: { css: 'input.cmp-exp', nth: 1 }, value: '20' },
      { wait: 2800 },
    ],
  },
};

const keyWords = [
  'exponent calculator',
  'power calculator',
  'exponential calculator',
  'square calculator',
  'cube calculator',
  'calculate exponents',
  'raise to power',
  'exponentiation calculator',
  'online exponent tool',
  'free power calculator',
  'math exponent calculator',
  'exponential notation',
  'powers and exponents',
  'base and exponent',
  'scientific notation calculator'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Calculator`,
    content: `The calculator has three modes, picked with the tabs at the top: **Power**, **Rules** and **Compare**. The demo above clicks through them and ends with **Reset**. Power mode is the one most people need: it raises a base to an exponent and shows the result in several forms. Rules mode applies one law of exponents to numbers you choose and lists the steps. Compare mode puts two powers side by side and says which is larger and by how much. Each mode keeps its own numbers, so you can switch tabs without losing anything.

In Power mode, start by choosing between Square (power of 2), Cube (power of 3), or Custom (any exponent you choose). Then enter your base number in the large box on the left of the equals sign. The calculator accepts whole numbers, decimals, and negative numbers. For example, try $5$, $2.5$, or $-3$.

The small raised box holds your exponent. For Square and Cube it fills automatically with $2$ or $3$. For Custom, you can type any exponent you want: positive, negative, or decimal. Try $4$ for a fourth power, or $0.5$ for a square root.

The result appears after the equals sign as soon as both boxes hold numbers. Click the **Calculate** button to store the power in the **Recent** strip, and **Reset** to go back to $5^2$. What a base and an exponent mean is explained in [what are exponents](!#what-are-exponents).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Choosing Between Square, Cube, and Custom Power`,
    content: `The three buttons **Square**, **Cube** and **Custom** at the top of the Power card pick which type of power calculation to perform. **Square** is the most common: it multiplies your number by itself once ($x \\times x = x^2$). Choose this when you need to find areas, work with quadratic equations, or square measurements.

**Cube** multiplies your number by itself twice ($x \\times x \\times x = x^3$). Select this option for volume calculations, cubic measurements, or when working with three-dimensional problems. The cube of $2$ is $8$, and the cube of $3$ is $27$.

**Custom** opens up all possibilities. The exponent box unlocks and a row of chips appears with common exponents: $x^4$, $x^5$, $x^6$, $x^{10}$, $x^{1/2}$, $x^{-1}$, $x^{-2}$ and $x^0$. Click a chip or type any exponent: whole numbers like $4$ or $5$, negative numbers like $-2$ (which gives you fractions), or decimals like $1.5$. This mode is perfect for advanced calculations, fractional exponents, or when following specific formulas.

Switch between types by clicking the buttons. The calculator keeps your base number, so you can easily compare $5^2$ versus $5^3$ versus $5^4$ by changing the type and reading the result. Why a square is never negative while a cube keeps the sign of its base is explained in [squaring a number](!#squaring-a-number).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Entering Your Base Number`,
    content: `Click in the large box on the left of the equals sign to enter your base number. You can type whole numbers ($5$, $12$, $100$), decimals ($2.5$, $3.14$, $0.75$), or negative numbers ($-3$, $-10$, $-2.5$). The calculator handles all these types automatically.

For decimals, use a period (dot) not a comma: type $3.5$ not $3,5$. You can enter as many decimal places as you need—the calculator uses high-precision math to maintain accuracy. Try $2.718$ (approximately $e$) or $3.14159$ (approximately $\\pi$).

Negative bases work but have restrictions. You can square or cube them freely: $(-3)^2 = 9$ and $(-3)^3 = -27$, because an even exponent gives a positive result and an odd one keeps the sign. For custom powers, negative bases only work with whole number exponents. Trying $(-2)^{2.5}$ will cause an error because fractional powers of negatives involve imaginary numbers.

If the base cannot be used with the current exponent, the result reads **undefined** and the **How this works** panel says why: $0$ with a negative exponent, or a negative base with a decimal exponent. Correct the entry and the result returns. What each kind of exponent does to a base is explained in [positive vs negative exponents](!#positive-vs-negative-exponents).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Setting the Exponent`,
    content: `The small raised box controls your exponent (the power). For **Square** and **Cube** modes, this box automatically fills with $2$ or $3$ and is locked—you cannot edit it. This prevents mistakes and makes these common calculations faster.

In **Custom** mode, the exponent box becomes editable and a row of chips offers common exponents; click one or type your own. Positive whole numbers like $4$, $5$, or $10$ work straightforwardly: $2^4 = 16$, $2^5 = 32$, $2^{10} = 1024$.

**Negative exponents** flip your number into a fraction. The exponent $-2$ means "one divided by the square": $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4} = 0.25$. Try $3^{-1} = 0.3333$ or $10^{-3} = 0.001$.

**Decimal exponents** work too: $4^{0.5}$ equals $\\sqrt{4} = 2$, and $8^{0.333}$ approximately equals the cube root of $8$, which is $2$. The $x^0$ chip gives $1$ for any non-zero base. Remember that negative bases cannot use decimal exponents. The rule behind a negative exponent is explained in [the negative exponent rule](!#the-negative-exponent-rule).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Reading Your Results`,
    content: `The result appears after the equals sign as soon as the base and the exponent are numbers; you do not have to click anything. Whole-number results print in full, for example $5^2 = 25$ and $2^{20} = 1048576$. Results with a decimal part show up to four decimal places: $2.5^2 = 6.2500$. Only results above $10^{12}$ or below $0.0001$ switch to scientific notation, such as $2^{100} = 1.2677e+30$, where $e+30$ means "move the decimal point 30 places right".

The **Result** card below the form repeats the power and lists the value in several forms: **Exact** with thousands separators, **Decimal** (six places for a result with a decimal part), and **Scientific**. Depending on the power you also see a **Fraction** (for a negative exponent, $2^{-3}$ gives $\\frac{1}{8}$), the **Expanded** product for whole exponents up to $6$, the power **As reciprocal**, or **As radical** for a fractional exponent ($4^{0.5}$ gives $\\sqrt{4}$). The copy icon next to each form copies it.

Under the forms, **Neighboring powers** shows the same base with exponents from three below to three above the current one; click one to load it. Clicking **Calculate** adds the current power to the **Recent** strip, which keeps the last eight; click a chip there to bring a power back.

Large results grow fast: $2^{10} = 1024$, but $2^{30}$ is over a billion. Where such numbers turn up is shown in [real-world examples of exponents](!#real-world-examples-of-exponents).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Understanding Error and Warning Messages`,
    content: `The calculator does not stop you from typing anything, so it reports problems in the result itself. While a box is empty or holds something that is not a number, the result reads **enter values** and the Result card shows the status **Waiting for input**.

Three inputs have no real-number answer, and for them the result reads **undefined**: $0^0$, zero with a negative exponent such as $0^{-1}$ (it would divide by zero), and a negative base with a decimal exponent such as $(-2)^{1.5}$ (the answer is a complex number). The Result card then shows **Undefined** or **Complex (not real)**, and the **How this works** panel explains the reason in one sentence. An exponent so large that the value passes the limits of the computer shows **Overflow / infinity**.

In Rules mode, the product and quotient rules need the same base on both sides; with different bases a message under **Step-by-step** says that the rule does not apply and asks you to make the bases equal.

Click **Reset** in Power mode to return to $5^2$ with the Square type selected. Why $0^0$ has no single value is explained in [the zero exponent rule](!#the-zero-exponent-rule).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `The How This Works Panel`,
    content: `The **How this works** card sits at the top of the right-hand column and changes with every click and keystroke. It opens with a short note on the current state: the power type, the rule or the comparison you have picked, each ending with a link to the section on this page that explains it in full.

In Power mode the card then shows three blocks. **What just happened** writes out the computation for your numbers: $2^3 = 2 \\cdot 2 \\cdot 2 = 8$ for a small whole exponent, the reciprocal for a negative exponent, or the root form for a fractional one. **Worth knowing** appears only when something is special, such as a negative base with an even exponent, a base of $1$ or $-1$, or a very large or very small result. **The concept** states the rule that justifies the computation.

Below the card, Power mode also shows a **Powers of** table with your base raised to every exponent from $-2$ to $8$; click a row to load that power. In Rules mode the card names the rule, explains why it works and shows a common mistake. In Compare mode it compares the two powers by exponent or by logarithm and counts the orders of magnitude between them.

The laws the panel refers to are collected in [basic exponent rules you should know](!#basic-exponent-rules-you-should-know).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Using Rules Mode`,
    content: `Click the **Rules** tab to apply one law of exponents to numbers of your own. The left card lists seven rules as buttons, each with its formula: product rule, quotient rule, power of a power, product to a power, quotient to a power, negative exponent and zero exponent. The product rule is selected when you open the mode.

Under the buttons, the input row shows the shape of the chosen rule with boxes for its bases and exponents. The product rule shows $b^m \\cdot b^n$ with four boxes; the quotient rule a fraction; power of a power a bracket with an outer exponent; the zero exponent rule a single base. The boxes start with sample values such as $2^3 \\cdot 2^4$, so a result is visible at once.

The **Step-by-step** list under the inputs rewrites your numbers with the rule: the starting expression, the rule applied to the exponents, the value, and a direct check by computing both sides. For the product and quotient rules the two bases must be the same; type different bases and the list is replaced by a note that the rule does not apply.

The **How this works** card on the right explains the selected rule and warns about its most common mistake. All seven rules are summarised in [basic exponent rules you should know](!#basic-exponent-rules-you-should-know).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Using Compare Mode`,
    content: `Click the **Compare** tab to set two powers side by side. The card shows **Expression A** and **Expression B**, each with a base box and a raised exponent box, and prints the value of each under its boxes as you type. The mode opens with $2^{10}$ against $10^3$, that is $1024$ against $1000$.

The **Verdict** line says which expression is larger, or that they are equal, and how many times larger it is. Under it three figures give the ratio of the two values, their difference, and the orders of magnitude between them (a factor of $10$ per order), so you see not only the winner but by how much.

The **How this works** card on the right picks the method that fits. When both bases are equal, it compares the exponents directly: $3^5$ against $3^4$ is settled by $5 > 4$. When the bases differ, it takes the common logarithm of each power, $\\log(3^5) = 5 \\cdot \\log 3 \\approx 2.386$ and $\\log(5^3) = 3 \\cdot \\log 5 \\approx 2.097$, and the larger logarithm marks the larger power. A last block counts the orders of magnitude between the two values.

Negative bases need whole-number exponents here as in Power mode; otherwise the value shows as a dash. The methods are explained in [comparing two powers](!#comparing-two-powers).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Exponents`,
    content: `An exponent tells you how many times to multiply a number by itself. In the expression $2^3$, the $2$ is the **base** and the $3$ is the **exponent** or **power**. This means: multiply $2$ by itself $3$ times: $2 \\times 2 \\times 2 = 8$.

Think of exponents as a shorthand for repeated multiplication. Instead of writing $5 \\times 5 \\times 5 \\times 5$, we write $5^4$. This is much cleaner and easier to read, especially for large powers like $2^{100}$.

The exponent can be any number. Whole number exponents are straightforward: $3^4 = 81$ means multiply $3$ four times. But exponents can also be fractions (like $4^{0.5} = 2$), decimals (like $2^{1.5} \\approx 2.828$), or even negative (like $2^{-2} = 0.25$).

**Special cases**: Any number to the power of $1$ equals itself: $7^1 = 7$. Any number to the power of $0$ equals $1$: $5^0 = 1$ (except $0^0$, which is undefined). These rules work for all numbers.

In Power mode the calculator offers three power types, each explained in its own section: [squaring a number](!#squaring-a-number) gives $b^2$, [cubing a number](!#cubing-a-number) gives $b^3$, and a custom power with any exponent is covered in [positive vs negative exponents](!#positive-vs-negative-exponents). The words base and exponent are defined in [definition and terminology](!/algebra/powers#1), and the ways of writing a power in [exponent notation](!/algebra/powers/natural-exponents#notation).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Squaring a Number`,
    content: `Squaring a number means multiplying it by itself: $b^2 = b \\times b$. The name comes from geometry: a square with side $b$ has area $b^2$, so $12^2 = 144$ is the area of a square with side $12$.

The method is one multiplication. For a decimal base it works the same way: $2.5^2 = 2.5 \\times 2.5 = 6.25$, and $0.3^2 = 0.09$, smaller than $0.3$ because a base between $0$ and $1$ shrinks when it is raised to a power.

A square is never negative. Two negative factors give a positive product, so $(-7)^2 = (-7) \\times (-7) = 49$. The common mistake is to drop the parentheses: $-7^2$ means $-(7^2) = -49$, because the exponent binds only to the $7$. In the calculator the base box holds the whole number, sign included, so typing $-7$ with Square selected gives $49$.

The definition of a natural exponent is in [definition](!/algebra/powers/natural-exponents#1), the sign rule in [sign behavior](!/algebra/powers/natural-exponents#2), and the inverse operation in [square roots, cube roots, and beyond](!/algebra/roots#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Cubing a Number`,
    content: `Cubing a number means multiplying it by itself twice: $b^3 = b \\times b \\times b$. A cube with edge $b$ has volume $b^3$, which is where the name comes from: $4^3 = 64$ cubic units for an edge of $4$.

Work from left to right: $1.5^3 = 1.5 \\times 1.5 \\times 1.5 = 2.25 \\times 1.5 = 3.375$. Powers of $10$ are the quickest: $10^3 = 1000$, one zero per factor.

Unlike a square, a cube keeps the sign of its base. Three negative factors give a negative product: $(-3)^3 = (-3) \\times (-3) \\times (-3) = 9 \\times (-3) = -27$. The same holds for every odd exponent, while every even exponent gives a positive result for a negative base. The common mistake is to expect $(-3)^3$ to be positive like $(-3)^2$; the calculator shows the sign in the result and the **How this works** panel notes it.

The sign rule for odd and even exponents is in [sign behavior](!/algebra/powers/natural-exponents#2); cube roots, which undo cubing, are in [square roots, cube roots, and beyond](!/algebra/roots#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Positive vs Negative Exponents`,
    content: `The **Custom** type raises the base to any exponent you type, so this section covers the three kinds of exponent you can enter.

[Positive exponents](!/algebra/powers/natural-exponents#1) make numbers bigger (unless the base is between $0$ and $1$). When you see $2^5$, count up: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$. Each step multiplies by the base again.

[Negative exponents](!/algebra/powers/negative-exponents#3) create fractions by flipping the base. The rule is: $x^{-n} = \\frac{1}{x^n}$. So $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} = 0.125$. Think of negative exponents as "reciprocal powers." Try $5^{-2} = \\frac{1}{25} = 0.04$.

Negative exponents never make the base negative—they make results smaller (between $0$ and $1$ for bases greater than $1$). For example, $10^{-1} = 0.1$, $10^{-2} = 0.01$, $10^{-3} = 0.001$. This pattern continues: each negative power adds another zero after the decimal.

[Fractional (decimal) exponents](!/algebra/powers/rational-exponents#3) relate to roots: $x^{0.5} = \\sqrt{x}$, $x^{0.333...} \\approx \\sqrt[3]{x}$. The fraction $\\frac{1}{n}$ as an exponent means "take the nth root." So $16^{0.25} = \\sqrt[4]{16} = 2$ because $2^4 = 16$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Basic Exponent Rules You Should Know`,
    content: `[Multiplying same bases](!#the-product-rule): When multiplying powers with the same base, add the exponents: $x^a \\times x^b = x^{a+b}$. Example: $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$. You can verify: $8 \\times 16 = 128$.

[Dividing same bases](!#the-quotient-rule): When dividing powers with the same base, subtract the exponents: $\\frac{x^a}{x^b} = x^{a-b}$. Example: $\\frac{2^5}{2^2} = 2^{5-2} = 2^3 = 8$. Check: $\\frac{32}{4} = 8$.

[Power of a power](!#power-of-a-power): When raising a power to another power, multiply the exponents: $(x^a)^b = x^{a \\times b}$. Example: $(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$. Verify: $8^2 = 64$.

**Special bases**: $1$ raised to any power equals $1$: $1^{100} = 1$. Zero raised to any positive power equals $0$: $0^5 = 0$. But $0^0$ and $0^{-1}$ are undefined. Negative bases with even exponents give positive results: $(-2)^4 = 16$. Negative bases with odd exponents stay negative: $(-2)^3 = -8$.

Rules mode also covers four more laws: [product to a power](!#product-to-a-power), [quotient to a power](!#quotient-to-a-power), [the negative exponent rule](!#the-negative-exponent-rule) and [the zero exponent rule](!#the-zero-exponent-rule). Every rule rests on the same idea: a power is a count of equal factors, so multiplying, dividing or nesting powers only changes the count. All of them are listed together in [laws of exponents](!/algebra/powers#8) and in the [master reference of exponent laws](!/algebra/powers/exponent-rules#11).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `The Product Rule`,
    content: `The product rule says that two powers of the same base multiply by adding the exponents: $b^m \\cdot b^n = b^{m+n}$. The base must be the same on both sides; the rule says nothing about $2^3 \\cdot 5^2$.

The reason is counting. $b^m$ is $m$ copies of $b$ multiplied together and $b^n$ is $n$ copies, so the product is $m + n$ copies of $b$. For example, $2^3 \\cdot 2^4 = (2 \\cdot 2 \\cdot 2)(2 \\cdot 2 \\cdot 2 \\cdot 2) = 2^7 = 128$, and a direct check gives $8 \\cdot 16 = 128$.

The common mistake is to multiply the exponents: $2^3 \\cdot 2^4$ is not $2^{12}$. Multiplying exponents belongs to a power raised to a power. In Rules mode the calculator refuses the product rule when the two bases differ and asks you to make them equal.

The rule is proved and practised in [product rule](!/algebra/powers/exponent-rules#1) and in [the product rule for natural exponents](!/algebra/powers/natural-exponents#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `The Quotient Rule`,
    content: `The quotient rule says that two powers of the same base divide by subtracting the exponents: $\\frac{b^m}{b^n} = b^{m-n}$, with $b \\neq 0$.

Each factor $b$ on the bottom cancels one factor $b$ on the top. With $m$ factors above and $n$ below, $m - n$ factors remain: $\\frac{5^6}{5^4} = 5^{6-4} = 5^2 = 25$. Checking directly, $5^6 = 15625$ and $5^4 = 625$, and $15625 \\div 625 = 25$.

When the bottom exponent is the larger one, the result has a negative exponent: $\\frac{2^2}{2^5} = 2^{-3} = \\frac{1}{8}$. When both exponents are equal, the result is $b^0 = 1$. The common mistake is to apply the rule to different bases: $\\frac{2^5}{3^2}$ does not simplify to a single power. The base cannot be $0$, because that would mean dividing by zero; the calculator says so in its steps.

More examples are in [quotient rule](!/algebra/powers/exponent-rules#2) and in [the quotient rule for natural exponents](!/algebra/powers/natural-exponents#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj20: {
    title: `Power of a Power`,
    content: `When a power is raised to another power, multiply the exponents: $(b^m)^n = b^{m \\cdot n}$.

$(b^m)^n$ means $n$ copies of $b^m$ multiplied together, and each copy holds $m$ factors of $b$, so there are $m \\cdot n$ factors in all. For example, $(3^2)^3 = 3^2 \\cdot 3^2 \\cdot 3^2 = 3^{2+2+2} = 3^6 = 729$; directly, $3^2 = 9$ and $9^3 = 729$.

The common mistake is to add the exponents, which is the product rule: $(3^2)^3$ is not $3^5 = 243$. A second trap is the tower $3^{2^3}$ without brackets, which means $3^{(2^3)} = 3^8 = 6561$, not $(3^2)^3$. In the calculator the brackets are drawn around the inner power, so the outer exponent always applies to the whole bracket.

The rule is explained in [power of a power](!/algebra/powers/exponent-rules#3) in the rules lesson and in [natural exponents](!/algebra/powers/natural-exponents#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `Product to a Power`,
    content: `When a product is raised to a power, the exponent goes to each factor: $(a \\cdot b)^n = a^n \\cdot b^n$.

$(a \\cdot b)^n$ is $n$ copies of $a \\cdot b$, so the factors can be regrouped into $n$ copies of $a$ and $n$ copies of $b$. For example, $(2 \\cdot 5)^3 = 2^3 \\cdot 5^3 = 8 \\cdot 125 = 1000$, which agrees with $10^3 = 1000$.

The rule is often used backwards, to combine $4^3 \\cdot 25^3$ into $(4 \\cdot 25)^3 = 100^3 = 1000000$ without computing either power. The common mistake is to use it over a sum: $(a + b)^n$ is not $a^n + b^n$; $(2 + 3)^2 = 25$ while $2^2 + 3^2 = 13$. Expanding a sum needs the binomial theorem.

See [power of a product](!/algebra/powers/exponent-rules#4) and [the same rule for natural exponents](!/algebra/powers/natural-exponents#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `Quotient to a Power`,
    content: `When a fraction is raised to a power, the exponent goes to the numerator and to the denominator: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$, with $b \\neq 0$.

The reason is the same as for a product: $n$ copies of $\\frac{a}{b}$ multiply to $n$ copies of $a$ over $n$ copies of $b$. For example, $\\left(\\frac{6}{2}\\right)^3 = \\frac{6^3}{2^3} = \\frac{216}{8} = 27$, and indeed $\\frac{6}{2} = 3$ and $3^3 = 27$. With a fraction in lowest terms the rule gives an exact answer where a decimal would be rounded: $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.

The common mistake mirrors the one for products: $(a - b)^n$ is not $a^n - b^n$. The exponent distributes over multiplication and division only.

The rule is in [power of a quotient](!/algebra/powers/exponent-rules#5) and in [natural exponents](!/algebra/powers/natural-exponents#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj23: {
    title: `The Negative Exponent Rule`,
    content: `A negative exponent means a reciprocal: $b^{-n} = \\frac{1}{b^n}$, for $b \\neq 0$.

The rule is forced by the quotient rule. Dividing $b^0$ by $b^n$ gives $b^{0-n} = b^{-n}$ by subtracting exponents, and $\\frac{1}{b^n}$ by direct division, so the two must be equal. For example, $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16} = 0.0625$, and $2^{-3} = \\frac{1}{8} = 0.125$. A negative exponent on a fraction flips it: $\\left(\\frac{2}{3}\\right)^{-1} = \\frac{3}{2}$.

The common mistake is to think the result is negative: $2^{-3}$ is $\\frac{1}{8}$, not $-8$. For a base greater than $1$ a negative exponent gives a small positive number; it never changes the sign. In the calculator, a power with a negative exponent shows its **Fraction** and **As reciprocal** forms in the Result card.

See [negative exponent rule](!/algebra/powers/exponent-rules#6) and [definition of negative exponents](!/algebra/powers/negative-exponents#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj24: {
    title: `The Zero Exponent Rule`,
    content: `Any non-zero number raised to the power $0$ equals $1$: $b^0 = 1$.

The value is not a convention chosen at random; it is the only one that keeps the quotient rule true. $\\frac{b^n}{b^n}$ equals $1$ because a number divided by itself is $1$, and it equals $b^{n-n} = b^0$ by subtracting exponents, so $b^0$ must be $1$. The pattern of powers shows the same thing: $7^3 = 343$, $7^2 = 49$, $7^1 = 7$, each step dividing by $7$, and one more step gives $7^0 = 1$.

The base $0$ is the exception. $0^0$ is left undefined in general arithmetic, because two patterns clash: $0^n = 0$ for every positive $n$, while $b^0 = 1$ for every other base. The calculator shows **undefined** for $0^0$ and for $0$ with a negative exponent. The common mistake is to answer $0$ for $b^0$.

See [zero exponent rule](!/algebra/powers/exponent-rules#7), [zero as an exponent](!/algebra/powers/zero-powers#3) and [where both directions collide](!/algebra/powers/zero-powers#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj25: {
    title: `Comparing Two Powers`,
    content: `Two powers can be compared without computing them in full, and the method depends on whether they share a base.

With the same base greater than $1$, the larger exponent wins: $3^5 > 3^4$ because $5 > 4$. For a base between $0$ and $1$ the order flips, since each extra factor makes the value smaller: $0.5^3 = 0.125$ is less than $0.5^2 = 0.25$.

With different bases, take the common logarithm of each power. The exponent comes down as a multiplier, $\\log(b^n) = n \\cdot \\log b$, so $\\log(3^5) = 5 \\cdot \\log 3 \\approx 2.386$ and $\\log(5^3) = 3 \\cdot \\log 5 \\approx 2.097$. The larger logarithm belongs to the larger power, so $3^5 = 243$ beats $5^3 = 125$. The difference of the logarithms, here about $0.29$, counts the orders of magnitude between the values: a difference of $1$ means a factor of $10$.

The common mistake is to compare bases alone: $10^3 = 1000$ is smaller than $2^{10} = 1024$ even though $10$ is far larger than $2$. Once the exponents are large, they matter more than the bases.

See [key principle: base determines direction](!/algebra/powers/exponential-inequalities#1) and [the common logarithm](!/algebra/logarithms/common-natural#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Real-World Examples of Exponents`,
    content: `**Area and Volume**: When you calculate the area of a square with side length $5$ meters, you compute $5^2 = 25$ square meters. For a cube's volume with side $3$ cm, calculate $3^3 = 27$ cubic centimeters.

**Population Growth**: If a bacteria population doubles every hour, after $4$ hours you have $2^4 = 16$ times the original amount. After $10$ hours: $2^{10} = 1024$ times more bacteria.

**Computer Memory**: Storage sizes use powers of $2$. One kilobyte is $2^{10} = 1024$ bytes. One megabyte is $2^{20} = 1,048,576$ bytes. One gigabyte is $2^{30}$ bytes, over one billion.

**Money and Interest**: With $5\\%$ annual compound interest, 1000 USD grows to 1000 times $1.05^{10}$ $\\approx 1628.89$ after $10$ years. The exponent $10$ represents the number of years.

**Distance and Scale**: Scientific notation uses powers of $10$. The Earth's mass is about $6 \\times 10^{24}$ kg, which means $6$ followed by $24$ zeros. Light travels at $3 \\times 10^8$ meters per second. Growth that multiplies by a fixed factor each period is the subject of [exponential functions](!/algebra/powers#11).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Practice Problems to Try`,
    content: `**Easy problems**: Calculate $3^2$, $4^3$, and $10^4$. Answers: $9$, $64$, and $10000$. Try $6^2$ and verify you get $36$. Compute $1^{100}$ and confirm it equals $1$.

**Negative exponents**: Find $2^{-3}$, $5^{-2}$, and $10^{-4}$. Answers: $0.125$, $0.04$, and $0.0001$. Remember these give fractions—reciprocals of the positive powers.

**Decimal bases**: Calculate $2.5^2$, $1.5^3$, and $0.5^4$. Answers: $6.25$, $3.375$, and $0.0625$. Notice how bases less than $1$ get smaller when raised to powers.

**Mixed problems**: Try $(-2)^3$, $(-3)^2$, and $(-1)^5$. Answers: $-8$, $9$, and $-1$. Observe that negative bases with even powers turn positive, but odd powers stay negative.

**Challenge problems**: Compute $2^{10}$, $3^5$, and $5^4$. Answers: $1024$, $243$, and $625$. For advanced practice, try $2^{-5}$ (answer: $0.03125$) and verify $4^{0.5} = 2$. More solved problems are in [worked examples](!/algebra/powers/natural-exponents#8) and in [worked examples with negative exponents](!/algebra/powers/negative-exponents#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Related Calculators and Resources`,
    content: `**Root Calculator** performs the inverse of exponents. Instead of $2^3 = 8$, find what number cubed equals $8$ (answer: $2$). Use this when you know the result and need to find the base.

**Logarithm Calculator** solves for exponents. If $2^x = 32$, logarithms tell you $x = 5$. Logarithms and exponents are inverse operations, like addition and subtraction.

**Exponential Tables** show pre-calculated powers for quick reference. Look up $2^1$ through $2^{20}$ or other common bases without calculating each time.

**Scientific Calculator** combines exponents with other operations for complex equations. Use it when exponents are part of larger formulas requiring multiple steps.

For deeper learning, explore exponential growth and decay in science, compound interest in finance, and polynomial functions in algebra where exponents appear in every term.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I calculate an exponent or power?",
    answer: "To calculate an exponent, multiply the base number by itself as many times as indicated by the exponent. For example, 2^3 means 2 × 2 × 2 = 8. Use this calculator by entering your base number, selecting the power type (square, cube, or custom), and clicking Calculate. The result appears instantly."
  },
  obj2: {
    question: "What's the difference between square and cube?",
    answer: "Square means raising a number to the power of 2 (multiplying it by itself once): 5^2 = 5 × 5 = 25. Cube means raising to the power of 3 (multiplying by itself twice): 5^3 = 5 × 5 × 5 = 125. Square gives area measurements, while cube gives volume measurements."
  },
  obj3: {
    question: "Can I use negative numbers as the base?",
    answer: "Yes, but with limitations. Negative bases work perfectly for whole number exponents: (-2)^3 = -8 and (-2)^4 = 16. However, you cannot raise negative numbers to decimal or fractional exponents in this calculator because that would produce imaginary numbers. For custom powers with negative bases, use only integer exponents."
  },
  obj4: {
    question: "What does a negative exponent mean?",
    answer: "A negative exponent means reciprocal or 'one divided by' the positive power. For example, 2^(-3) = 1/(2^3) = 1/8 = 0.125. Negative exponents create fractions less than 1. They're common in scientific notation for very small numbers like 0.001 = 10^(-3)."
  },
  obj5: {
    question: "Why does anything to the power of 0 equal 1?",
    answer: "By mathematical convention and the rules of exponents, any non-zero number raised to the power of 0 equals 1. This comes from the division rule: x^a ÷ x^a = x^(a-a) = x^0, and any number divided by itself equals 1. Therefore x^0 = 1. The only exception is 0^0, which is undefined."
  },
  obj6: {
    question: "How do I raise a number to a decimal power, like 100 to the power of 2.5?",
    answer: "Split the exponent into a whole part and a fraction: 2.5 = 2 + 1/2, so a^2.5 = a² · √a. For example, 100^2.5 = 10,000 · 10 = 100,000, and 5^2.5 = 25 · √5 ≈ 55.9017. In this calculator, choose Custom and type the decimal exponent; the result is also shown in radical form."
  },
  obj7: {
    question: "How do I calculate a decimal base, like 1.05 to the power of 5?",
    answer: "Multiply the base by itself as many times as the exponent says: 1.05^5 = 1.05 × 1.05 × 1.05 × 1.05 × 1.05 ≈ 1.2763. This is the growth factor for 5 periods of 5% growth, as in compound interest. Bases between 0 and 1 shrink instead: 0.5^7 = 0.0078125."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Exponent Calculator - Calculate Powers and Exponents",
    "description": "Free online exponent calculator for square, cube, and custom powers. Calculate any base raised to any exponent with instant results and step-by-step explanations.",
    "url": "https://www.learnmathclass.com/calculators/exponent-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Square calculation (power of 2)",
      "Cube calculation (power of 3)",
      "Custom power calculation with any exponent",
      "Support for positive and negative bases",
      "Support for positive and negative exponents",
      "Decimal and fractional exponent support",
      "High-precision arithmetic with scientific notation",
      "Real-time error validation and helpful messages"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "Middle School, High School, College",
    "keywords": keyWords.join(", ")
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.learnmathclass.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Exponent Calculator",
        "item": "https://www.learnmathclass.com/calculators/exponent-calculator"
      }
    ]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.keys(faqQuestions).map(key => ({
      "@type": "Question",
      "name": faqQuestions[key].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqQuestions[key].answer
      }
    }))
  }
};

const introContent = {
  id: "intro",
  title: "",
  content: ``
};

return {
  props: {
    detailInstructions,
    explanations,
    demos,
    sectionsContent,
    introContent,
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Exponent Calculator | Calculate Powers and Exponents Online",
      description: "Free exponent calculator for square, cube, and custom powers. Calculate any base raised to any exponent instantly with step-by-step explanations and examples.",
      keywords: keyWords.join(", "),
      url: "/calculators/exponent-calculator",
      name: "Exponent Calculator - Powers and Exponents Tool"
    },
  },
  revalidate: 86400
};
}

export default function ExponentCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, explanations, demos, navigationGroup, faqQuestions, schemas}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.4}
    minHeight={489}
    renderText={processContent}
  >
    <ExponentCalculator explanations={explanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'choosing-between-square-cube-and-custom-power',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('choosing-between-square-cube-and-custom-power'), sectionsContent.obj2.content],
  },
  {
    id: 'entering-your-base-number',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('entering-your-base-number'), sectionsContent.obj3.content],
  },
  {
    id: 'setting-the-exponent',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('setting-the-exponent'), sectionsContent.obj4.content],
  },
  {
    id: 'reading-your-results',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('reading-your-results'), sectionsContent.obj5.content],
  },
  {
    id: 'the-how-this-works-panel',
    title: sectionsContent.obj13.title,
    link: sectionsContent.obj13.link,
    content: [demoPlayer('the-how-this-works-panel'), sectionsContent.obj13.content],
  },
  {
    id: 'using-rules-mode',
    title: sectionsContent.obj14.title,
    link: sectionsContent.obj14.link,
    content: [demoPlayer('using-rules-mode'), sectionsContent.obj14.content],
  },
  {
    id: 'using-compare-mode',
    title: sectionsContent.obj15.title,
    link: sectionsContent.obj15.link,
    content: [demoPlayer('using-compare-mode'), sectionsContent.obj15.content],
  },
  {
    id: 'understanding-error-and-warning-messages',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('understanding-error-and-warning-messages'), sectionsContent.obj6.content],
  },
  {
    id: 'what-are-exponents',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'squaring-a-number',
    title: sectionsContent.obj16.title,
    link: sectionsContent.obj16.link,
    content: [sectionsContent.obj16.content],
  },
  {
    id: 'cubing-a-number',
    title: sectionsContent.obj17.title,
    link: sectionsContent.obj17.link,
    content: [sectionsContent.obj17.content],
  },
  {
    id: 'positive-vs-negative-exponents',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'basic-exponent-rules-you-should-know',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'the-product-rule',
    title: sectionsContent.obj18.title,
    link: sectionsContent.obj18.link,
    content: [sectionsContent.obj18.content],
  },
  {
    id: 'the-quotient-rule',
    title: sectionsContent.obj19.title,
    link: sectionsContent.obj19.link,
    content: [sectionsContent.obj19.content],
  },
  {
    id: 'power-of-a-power',
    title: sectionsContent.obj20.title,
    link: sectionsContent.obj20.link,
    content: [sectionsContent.obj20.content],
  },
  {
    id: 'product-to-a-power',
    title: sectionsContent.obj21.title,
    link: sectionsContent.obj21.link,
    content: [sectionsContent.obj21.content],
  },
  {
    id: 'quotient-to-a-power',
    title: sectionsContent.obj22.title,
    link: sectionsContent.obj22.link,
    content: [sectionsContent.obj22.content],
  },
  {
    id: 'the-negative-exponent-rule',
    title: sectionsContent.obj23.title,
    link: sectionsContent.obj23.link,
    content: [sectionsContent.obj23.content],
  },
  {
    id: 'the-zero-exponent-rule',
    title: sectionsContent.obj24.title,
    link: sectionsContent.obj24.link,
    content: [sectionsContent.obj24.content],
  },
  {
    id: 'comparing-two-powers',
    title: sectionsContent.obj25.title,
    link: sectionsContent.obj25.link,
    content: [sectionsContent.obj25.content],
  },
  {
    id: 'real-world-examples-of-exponents',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
  },
  {
    id: 'practice-problems-to-try',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'related-calculators-and-resources',
    title: sectionsContent.obj12.title,
    link: sectionsContent.obj12.link,
    content: [sectionsContent.obj12.content],
  },
];

return (
  <>
    <Head>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Learn Math Class" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />

      <meta name="robots" content="index, follow" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
    </Head>

    <style jsx>{`
      @media (max-width: 1024px) {
        .layout-container > div:first-child,
        .layout-container > div:first-child *,
        :global([class*="vertical"]),
        :global([class*="vertical"]) * {
          position: static !important;
        }
      }

      .layout-container {
        display: grid;
        grid-template-columns: 20% 80%;
        gap: 20px;
        width: 100%;
      }

      @media (max-width: 1024px) {
        .layout-container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar
      side='right'
      sidebarWidth='45px'
      panelWidth='300px'
      iconColor='white'
      panelBackgroundColor='#f2f2f2'
    />

    <h1 className='title' style={{marginTop:'0px',marginBottom:'-20px'}}>Exponent Calculator</h1>
    {/* <div style={{marginBottom:'20px'}}>
      <ExplanationDetails
        instructions={detailInstructions}
        title='How to use Exponent Calculator'
      />
    </div> */}
    <div style={{marginTop:'30px',marginBottom:'20px'}}>
      <ExplanationDetails
        instructions={detailInstructions}
        title='How to use Exponent Calculator'
      />
    </div>

    <div className="layout-container">
      <div>
        <br/>
        <VerticalButtonGroup
          items={navigationGroup}
          width="250px"
          theme='brilliantBlue'
          isSticky={true}
          verticalOffset='230px'
        />
      </div>

      <div>
        <div style={{width:'100%',marginLeft:'-100px'}}>
          {/* <div style={{transform:'scale(0.9)'}}> */}
            <ExponentCalculator
              explanations={explanations}
              detailInstructions={detailInstructions}
            />
          {/* </div>  */}
          <br/>
        </div>
      </div>
    </div>


    <br/>
    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
  </>
);
}
