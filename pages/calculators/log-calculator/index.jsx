


import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import React from 'react';
import '../../pages.css';
import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "C:/Program Files/Git/calculators/log-calculator" in calculators-mesh-registry.json (same folder): 9 usage sections, each with a demo; 14 panel notes; 27 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

// Per-state notes for the How this works panel (explanations.states in LogarithmCalculator):
// key = mode, or mode:sub-option; the component shows the combined key first, then the mode key.
const logarithmExplanations = {
  states: {
    calc: {
      title: `Calculate Mode`,
      content: `Finds one logarithm: pick a base with the buttons, type the argument, and read the result and its forms on the left. [All bases](!#what-are-logarithms)`,
    },
    'calc:log2': {
      title: `Binary Logarithm`,
      content: `Base $2$: the result is the power of $2$ that gives the argument, $\\log_2(8) = 3$. Whole numbers at the chips, decimals elsewhere. [Learn more about the binary logarithm](!#binary-logarithm-base-2) · [All bases](!#what-are-logarithms)`,
    },
    'calc:ln': {
      title: `Natural Logarithm`,
      content: `Base $e \\approx 2.7183$: the exponent of $e$ that gives the argument, $\\ln(e^2) = 2$. The logarithm of growth and decay. [Learn more about the natural logarithm](!#natural-logarithm-base-e) · [All bases](!#what-are-logarithms)`,
    },
    'calc:log10': {
      title: `Common Logarithm`,
      content: `Base $10$: the power of ten that gives the argument, $\\log_{10}(1000) = 3$. One unit per factor of $10$. [Learn more about the common logarithm](!#common-logarithm-base-10) · [All bases](!#what-are-logarithms)`,
    },
    'calc:custom': {
      title: `Custom Base`,
      content: `Any base $b > 0$ with $b \\neq 1$, computed as $\\ln(x) / \\ln(b)$: $\\log_3(9) = 2$ because $3^2 = 9$. [Learn more about custom bases](!#custom-bases-and-change-of-base) · [All bases](!#what-are-logarithms)`,
    },
    laws: {
      title: `Laws Mode`,
      content: `Applies one logarithm law to your numbers and shows the steps. Pick a law on the left, then edit the boxes. [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:product': {
      title: `Product Rule`,
      content: `$\\log_b(xy) = \\log_b(x) + \\log_b(y)$: a product inside becomes a sum outside. [Learn more about the product rule](!#the-product-rule) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:quotient': {
      title: `Quotient Rule`,
      content: `$\\log_b(x/y) = \\log_b(x) - \\log_b(y)$: a quotient inside becomes a difference outside. [Learn more about the quotient rule](!#the-quotient-rule) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:power': {
      title: `Power Rule`,
      content: `$\\log_b(x^n) = n \\log_b(x)$: an exponent inside becomes a factor outside. [Learn more about the power rule](!#the-power-rule) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:changeBase': {
      title: `Change of Base`,
      content: `$\\log_b(x) = \\log_a(x) / \\log_a(b)$: any base from any other base. [Learn more about change of base](!#change-of-base) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:identity': {
      title: `Log of Base`,
      content: `$\\log_b(b) = 1$, because $b^1 = b$. [Learn more about the log of the base](!#log-of-the-base) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:logOne': {
      title: `Log of One`,
      content: `$\\log_b(1) = 0$, because $b^0 = 1$. [Learn more about the log of one](!#log-of-one) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    'laws:inverse': {
      title: `Inverse Pair`,
      content: `$\\log_b(b^x) = x$ and $b^{\\log_b(x)} = x$: logarithm and exponential undo each other. [Learn more about the inverse pair](!#inverse-pair) · [All logarithm laws](!#simple-logarithm-rules)`,
    },
    compare: {
      title: `Compare Mode`,
      content: `Computes two logarithms and says which is larger, by how much and by what ratio. [Learn more about comparing logarithms](!#comparing-two-logarithms)`,
    },
  },
};

const detailInstructions = [
  `Pick a mode with the three tabs at the top: **Calculate** finds one logarithm, **Laws** applies a logarithm law to your numbers, **Compare** sets two logarithms side by side. [Learn more about the modes](!#getting-started-with-the-calculator)`,
  `In Calculate mode, pick the base with the **log₂**, **ln**, **log₁₀** or **Custom** button; the result updates at once and the argument stays. [Learn more about the base buttons](!#choosing-between-standard-and-custom-base)`,
  `The chips under the buttons load a common argument for the chosen base: powers of 2, powers of e, or powers of 10. [Learn more about the standard bases](!#using-standard-bases)`,
  `With **Custom** selected, type any base greater than 0 except 1 in the **Base** box. [Learn more about custom bases](!#working-with-custom-base)`,
  `Type the number you want the logarithm of in the **Argument** box; it must be greater than 0. [Learn more about the argument](!#entering-your-number)`,
  `The result appears after the equals sign as you type; the **Result** card lists it in several forms. Click **Add to history** to keep it in the **Recent** strip. [Learn more about the results](!#understanding-your-results-and-errors)`,
  `The **How this works** panel on the right explains the current base, law or comparison with your own numbers; its link opens the section below that explains the topic in full. [Learn more about the panel](!#the-how-this-works-panel)`,
  `In Laws mode, click a law on the left, edit its boxes, and read the numbered steps. [Learn more about Laws mode](!#using-laws-mode)`,
  `In Compare mode, type a base and an argument for expression A and for expression B, then read the verdict. [Learn more about Compare mode](!#using-compare-mode)`,
  `Click **Reset** to return to log₂(8) = 3. A message replaces the result when the argument is 0 or negative, or the base is 1. [Learn more about getting started](!#getting-started-with-the-calculator)`,
];

const demos = {
  'getting-started-with-the-calculator': {
    title: 'The three modes and Reset',
    script: [
      { say: 'CLICK Laws\nLaw buttons and Step-by-step replace the form.', at: 'tr' },
      { click: { button: 'Laws' } },
      { wait: 2000 },
      { say: 'CLICK Compare\nExpression A against expression B, with a verdict.', at: 'tr' },
      { click: { button: 'Compare' } },
      { wait: 2000 },
      { say: 'CLICK Calculate\nBack to the form.\nEach mode keeps its own numbers.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 1800 },
      { say: 'TYPE 16 as the argument\nResult updates: log₂(16) = 4.', at: 'tr' },
      { set: 'input.arg', value: '16' },
      { wait: 2000 },
      { say: 'CLICK Reset\nBack to log₂(8) = 3.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'choosing-between-standard-and-custom-base': {
    title: 'The four base buttons',
    script: [
      { say: 'CLICK ln\nSame argument, base e.\nln(8) = 2.0794.', at: 'tr' },
      { click: { button: 'ln', exact: true } },
      { wait: 2200 },
      { say: 'CLICK log₁₀\nBase 10.\nlog₁₀(8) = 0.9031.', at: 'tr' },
      { click: { button: 'log10', exact: true } },
      { wait: 2200 },
      { say: 'CLICK Custom\nA Base box appears, set to 3.\nlog₃(8) = 1.8928.', at: 'tr' },
      { click: { button: 'Custom', exact: true } },
      { wait: 2200 },
      { say: 'TYPE 5 as the base\nlog₅(8) = 1.2920.', at: 'tr' },
      { set: 'input.basein', value: '5' },
      { wait: 2200 },
      { say: 'CLICK log₂\nBack to the binary logarithm.\nlog₂(8) = 3.', at: 'tr' },
      { click: { button: 'log2', exact: true } },
      { wait: 2200 },
    ],
  },
  'using-standard-bases': {
    title: 'Chips for base 2, base e and base 10',
    script: [
      { say: 'CLICK the 1024 chip\nPowers of 2 give whole numbers.\nlog₂(1024) = 10.', at: 'tr' },
      { click: { button: '1024', exact: true } },
      { wait: 2200 },
      { say: 'CLICK ln\nSame argument, base e.\nln(1024) = 6.9315.', at: 'tr' },
      { click: { button: 'ln', exact: true } },
      { wait: 2200 },
      { say: 'CLICK the e² chip\nPowers of e give whole numbers.\nln(e²) = 2.', at: 'tr' },
      { click: { css: '.chips-list button', nth: 2 } },
      { wait: 2200 },
      { say: 'CLICK log₁₀\nBase 10.\nlog₁₀(e²) = 0.8686.', at: 'tr' },
      { click: { button: 'log10', exact: true } },
      { wait: 2200 },
      { say: 'CLICK the 1000 chip\nlog₁₀(1000) = 3.', at: 'tr' },
      { click: { button: '1000', exact: true } },
      { wait: 2400 },
    ],
  },
  'working-with-custom-base': {
    title: 'Any base, and a base that is not allowed',
    script: [
      { say: 'CLICK Custom\nBase box appears with 3.\nlog₃(8) = 1.8928.', at: 'tr' },
      { click: { button: 'Custom', exact: true } },
      { wait: 2000 },
      { say: 'TYPE 9 as the argument\nlog₃(9) = 2, since 3² = 9.', at: 'tr' },
      { set: 'input.arg', value: '9' },
      { wait: 2000 },
      { say: 'TYPE 5 as the base\nlog₅(9) = 1.3652.', at: 'tr' },
      { set: 'input.basein', value: '5' },
      { wait: 2000 },
      { say: 'TYPE 125 as the argument\nlog₅(125) = 3, since 5³ = 125.', at: 'tr' },
      { set: 'input.arg', value: '125' },
      { wait: 2000 },
      { say: 'TYPE 1 as the base\nBase must be positive and not equal to 1.', at: 'tr' },
      { set: 'input.basein', value: '1' },
      { wait: 2600 },
    ],
  },
  'entering-your-number': {
    title: 'Arguments below 1, equal to 1, decimal, zero and large',
    script: [
      { say: 'TYPE 0.5\nBelow 1: a negative result.\nlog₂(0.5) = -1.', at: 'tr' },
      { set: 'input.arg', value: '0.5' },
      { wait: 2000 },
      { say: 'TYPE 1\nlog₂(1) = 0 in every base.', at: 'tr' },
      { set: 'input.arg', value: '1' },
      { wait: 2000 },
      { say: 'TYPE 2.5\nDecimals work.\nlog₂(2.5) = 1.3219.', at: 'tr' },
      { set: 'input.arg', value: '2.5' },
      { wait: 2000 },
      { say: 'TYPE 0\nArgument must be greater than 0.', at: 'tr' },
      { set: 'input.arg', value: '0' },
      { wait: 2200 },
      { say: 'TYPE 1000000\nLarge numbers are fine.\nlog₂(1000000) = 19.9316.', at: 'tr' },
      { set: 'input.arg', value: '1000000' },
      { wait: 2400 },
    ],
  },
  'understanding-your-results-and-errors': {
    title: 'Result forms, neighbors, history and a negative result',
    script: [
      { say: 'TYPE 5\nlog₂(5) = 2.3219.\nDecimal, Scientific, As exponent equation.', at: 'tr' },
      { set: 'input.arg', value: '5' },
      { wait: 2200 },
      { say: 'CLICK Add to history\nRecent strip stores log₂(5).', at: 'tr' },
      { click: { button: 'Add to history' } },
      { wait: 2000 },
      { say: 'CLICK the neighbor 20\nArgument × 4: log₂(20) = 4.3219.', at: 'tr' },
      { click: { css: '.neighbor', nth: 4 } },
      { wait: 2200 },
      { say: 'CLICK the 64 chip\nExact form appears: log₂(64) = 6.', at: 'tr' },
      { click: { button: '64', exact: true } },
      { wait: 2200 },
      { say: 'TYPE 0.01\nNegative result, not an error.\nlog₂(0.01) = -6.6439.', at: 'tr' },
      { set: 'input.arg', value: '0.01' },
      { wait: 2600 },
    ],
  },
  'the-how-this-works-panel': {
    title: 'What the panel says for different arguments',
    script: [
      { say: 'TYPE 32\nWhat just happened: 2⁵ = 32, so log₂(32) = 5.', at: 'tr' },
      { set: 'input.arg', value: '32' },
      { wait: 2200 },
      { say: 'TYPE 1\nWorth knowing: log of 1 is 0.', at: 'tr' },
      { set: 'input.arg', value: '1' },
      { wait: 2200 },
      { say: 'TYPE 2\nWorth knowing: log of the base is 1.', at: 'tr' },
      { set: 'input.arg', value: '2' },
      { wait: 2200 },
      { say: 'TYPE 0.25\nWorth knowing: negative result.\nlog₂(0.25) = -2.', at: 'tr' },
      { set: 'input.arg', value: '0.25' },
      { wait: 2200 },
      { say: 'CLICK ln\nThe concept changes to the natural logarithm.\nln(0.25) = -1.3863.', at: 'tr' },
      { click: { button: 'ln', exact: true } },
      { wait: 2600 },
    ],
  },
  'using-laws-mode': {
    title: 'Product, quotient, power and change of base',
    script: [
      { say: 'CLICK Laws\nProduct rule: log₂(4) + log₂(8) = 2 + 3 = 5.', at: 'tr' },
      { click: { button: 'Laws' } },
      { wait: 2200 },
      { say: 'TYPE 16 as y\nlog₂(4) + log₂(16) = 2 + 4 = 6 = log₂(64).', at: 'tr' },
      { set: { css: 'input.law-num', nth: 1 }, value: '16' },
      { wait: 2400 },
      { say: 'CLICK Quotient rule\nlog₂(32) - log₂(4) = 5 - 2 = 3.', at: 'tr' },
      { click: { button: 'Quotient rule' } },
      { wait: 2400 },
      { say: 'CLICK Power rule\nlog₂(4³) = 3 · 2 = 6.', at: 'tr' },
      { click: { button: 'Power rule' } },
      { wait: 2400 },
      { say: 'CLICK Change of base\nlog₈(64) = log₂(64) / log₂(8) = 6 / 3 = 2.', at: 'tr' },
      { click: { button: 'Change of base' } },
      { wait: 2600 },
    ],
  },
  'using-compare-mode': {
    title: 'Compare two logarithms',
    script: [
      { say: 'CLICK Compare\nlog₂(64) = 6 against log₁₀(1000) = 3.\nA is larger.', at: 'tr' },
      { click: { button: 'Compare' } },
      { wait: 2200 },
      { say: 'TYPE 8 as the argument of A\nlog₂(8) = 3: the two are equal.', at: 'tr' },
      { set: { css: 'input.cmp-arg', nth: 0 }, value: '8' },
      { wait: 2400 },
      { say: 'TYPE 100 as the argument of B\nlog₁₀(100) = 2: A is larger by 1.', at: 'tr' },
      { set: { css: 'input.cmp-arg', nth: 1 }, value: '100' },
      { wait: 2400 },
      { say: 'TYPE 2 as the base of B\nlog₂(100) = 6.6439: B is larger.', at: 'tr' },
      { set: { css: 'input.cmp-base', nth: 1 }, value: '2' },
      { wait: 2600 },
    ],
  },
};

const keyWords = [
  'logarithm calculator',
  'log calculator',
  'natural log calculator',
  'log base 2 calculator',
  'log base 10 calculator',
  'logarithmic calculator',
  'calculate logarithm',
  'online log calculator',
  'free logarithm tool',
  'binary logarithm',
  'natural logarithm',
  'common logarithm',
  'custom base logarithm',
  'log calc',
  'logarithm solver'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Calculator`,
    content: `The calculator has three modes, picked with the tabs at the top: **Calculate**, **Laws** and **Compare**. Calculate finds one logarithm and shows it in several forms. Laws applies one logarithm rule to numbers you choose and lists the steps. Compare sets two logarithms side by side and says which is larger. Each mode keeps its own numbers, so you can switch tabs without losing anything. The demo above clicks through them and ends with **Reset**.

In Calculate mode, start with the **Base** row: the buttons **log₂**, **ln** and **log₁₀** pick the three standard bases, and **Custom** opens a box for any other base. A row of chips under the buttons offers common arguments for the chosen base.

Type the number you want the logarithm of in the **Argument** box. It must be greater than $0$: whole numbers like $8$ or $1000$ and decimals like $2.5$ both work. The result appears at once after the equals sign; the calculator starts with $\\log_2(8) = 3$, and $16$ gives $\\log_2(16) = 4$.

Click **Add to history** to keep the current logarithm in the **Recent** strip, and **Reset** to return to $\\log_2(8)$. What a logarithm is, and why the argument must be positive, is explained in [what are logarithms](!#what-are-logarithms).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Choosing Between Standard and Custom Base`,
    content: `The **Base** row holds four buttons. **log₂** uses base $2$, the binary logarithm of computer science. **ln** uses base $e \\approx 2.7183$, the natural logarithm of calculus and science. **log₁₀** uses base $10$, the common logarithm of scientific notation and measurement scales. Pick one and the result updates at once; the argument stays, so you can compare $\\log_2(8) = 3$, $\\ln(8) \\approx 2.0794$ and $\\log_{10}(8) \\approx 0.9031$ with three clicks.

**Custom** opens a **Base** box next to the argument, filled with $3$ to begin with: $\\log_3(8) \\approx 1.8928$. Type any positive number except $1$; with base $5$, $\\log_5(8) \\approx 1.2920$. Decimal bases such as $2.5$ work as well.

The chips under the buttons change with the base: powers of $2$ for log₂, powers of $e$ for ln, powers of $10$ for log₁₀, and powers of $2$ again for a custom base. Click a chip to load that argument.

Why the same number has a different logarithm in every base is explained in [understanding different bases](!#understanding-different-bases).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Entering Your Number`,
    content: `The **Argument** box holds the number you want the logarithm of, the $N$ in $\\log_b(N)$. Whole numbers like $8$ or $1000$ and decimals like $2.5$ or $50.75$ work; with base $2$, $\\log_2(2.5) \\approx 1.3219$ and $\\log_2(1000000) \\approx 19.9316$. Very large and very small numbers are accepted.

Numbers between $0$ and $1$ give negative results: $\\log_2(0.5) = -1$, because $2^{-1} = 0.5$. The argument $1$ gives $0$ in every base, because $b^0 = 1$.

Zero and negative numbers have no logarithm. The result line then reads **Argument must be greater than 0**, and an empty box reads **Enter an argument**; the Result card shows a matching status. Correct the box and the result returns at once; nothing has to be clicked.

The chips under the base buttons fill the box with a common argument for the chosen base. The reason zero and negative numbers are excluded is explained in [what are logarithms](!#what-are-logarithms).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using Standard Bases`,
    content: `With **log₂** selected, the chips offer $2, 4, 8, \\dots, 1024$, and every chip gives a whole number: $\\log_2(1024) = 10$ because $2^{10} = 1024$. Base $2$ measures how many times a number can be halved, which is why it appears in information and algorithm analysis.

With **ln** selected, the chips are $1$, $e$, $e^2$, $e^3$, $10$ and $100$. The powers of $e$ give whole numbers, $\\ln(e^2) = 2$, while $\\ln(1024) \\approx 6.9315$ and $\\ln(10) \\approx 2.3026$ do not. Natural logarithms describe growth and decay.

With **log₁₀** selected, the chips are $10$ to $1000000$: $\\log_{10}(1000) = 3$ because $10^3 = 1000$, and $\\log_{10}(e^2) \\approx 0.8686$. The common logarithm counts the digits of a number, roughly, and runs the pH and decibel scales.

Switch between the three buttons with the same argument to see how the base changes the answer. The three logarithms are described one by one, starting with [binary logarithm](!#binary-logarithm-base-2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Working with Custom Base`,
    content: `Click **Custom** to unlock the **Base** box; it opens with base $3$, so the argument $8$ gives $\\log_3(8) \\approx 1.8928$. Type any base greater than $0$ except $1$. With argument $9$ and base $3$ the result is $\\log_3(9) = 2$, because $3^2 = 9$; change the base to $5$ and $\\log_5(9) \\approx 1.3652$; with argument $125$, $\\log_5(125) = 3$.

Decimal bases work: base $2.5$ and argument $6.25$ give $2$, because $2.5^2 = 6.25$. Large bases work too: base $100$ and argument $10000$ give $2$.

A base of $1$, $0$ or a negative number has no logarithm. The result line then reads **Base must be positive and not equal to 1** and the Result card shows a matching status; correct the base and the result returns. Base $1$ fails because $1$ raised to any power is $1$, so no exponent reaches $9$.

The calculator computes a custom-base logarithm with the change of base formula, $\\log_b(x) = \\ln(x) / \\ln(b)$, which is explained in [custom bases and change of base](!#custom-bases-and-change-of-base).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Understanding Your Results and Errors`,
    content: `The result appears after the equals sign as soon as the base and the argument are valid; you do not have to click anything. Whole-number results print in full, $\\log_2(8) = 3$; others show four decimal places, $\\log_2(5) \\approx 2.3219$.

The **Result** card below the form lists the value in several forms: **Exact** when the argument is a whole power of the base, **Decimal** to six places, **Scientific**, the logarithm **As exponent equation** ($2^3 = 8$), and for a custom base the **Change of base** quotient. The copy icon next to each form copies it.

Under the forms, **Neighboring arguments** shows the argument multiplied and divided by the base once and twice, with their logarithms; click one to load it, for example $20$ next to $5$, with $\\log_2(20) \\approx 4.3219$. **Add to history** stores the current logarithm in the **Recent** strip; click an entry to bring it back. The **Powers of** table on the right lists the arguments whose logarithm is a whole number and marks the current one; $64$ gives the exact value $6$.

Messages replace the result when an input is not valid: **Enter an argument**, **Argument must be greater than 0**, **Base must be positive and not equal to 1**, and **Overflow** for a value beyond the computer's range; the Result card shows **Waiting for input** or a matching status. Negative results are not errors: $\\log_2(0.01) \\approx -6.6439$ and $\\log_{10}(0.01) = -2$ are correct, as explained in [common logarithm](!#common-logarithm-base-10).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Logarithms`,
    content: `A logarithm answers the question: "What exponent do I need?" If you know $2^? = 8$, the logarithm tells you the answer is $3$. We write this as $\\log_2(8) = 3$. Logarithms are the opposite (inverse) of exponents—they undo what exponents do.

Think of it like division versus multiplication. If $3 \\times 4 = 12$, then $12 \\div 3 = 4$ reverses the operation. Similarly, if $2^3 = 8$, then $\\log_2(8) = 3$ reverses it. The logarithm "undoes" the exponent to reveal what power was used.

The general form is $\\log_b(N) = x$, which means $b^x = N$. The **base** ($b$) is the number being raised to a power, the **argument** ($N$) is the result you're trying to reach, and the **logarithm** ($x$) is the exponent needed. So $\\log_5(25) = 2$ because $5^2 = 25$.

Logarithms only work with positive numbers. You cannot find $\\log(0)$ or $\\log(-5)$ because no real exponent makes a positive base equal zero or negative. Also, base $1$ doesn't work because $1$ raised to any power always equals $1$.

In Calculate mode the base buttons pick which logarithm is found: [binary logarithm](!#binary-logarithm-base-2), [natural logarithm](!#natural-logarithm-base-e), [common logarithm](!#common-logarithm-base-10), or a [custom base](!#custom-bases-and-change-of-base). The definition is in [what is a logarithm](!/algebra/logarithms#1), the limits on base and argument in [restrictions on base and argument](!/algebra/logarithms#2), and the undoing of exponents in [inverse identities](!/algebra/logarithms#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Understanding Different Bases`,
    content: `The **base** determines which number is being raised to a power. Base $2$ means powers of $2$: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$. So $\\log_2(4) = 2$ because $4$ is the second power of $2$. Different bases give different answers for the same number.

**Base 2** (binary logarithm) is fundamental in computer science. Computers use binary (base $2$), so $\\log_2$ measures things like how many times you can divide by $2$, or how many bits are needed. Eight items need $\\log_2(8) = 3$ bits to represent.

**Base e** (natural logarithm) uses $e \\approx 2.71828$, a special mathematical constant. Natural logarithms appear in growth and decay: population growth, radioactive decay, compound interest. The notation $\\ln(x)$ means $\\log_e(x)$. For example, $\\ln(20) \\approx 2.996$.

**Base 10** (common logarithm) matches our decimal system. It tells you how many digits a number has (roughly). Since $10^2 = 100$ and $10^3 = 1000$, numbers between $100$ and $1000$ have logarithms between $2$ and $3$. This helps with scientific notation and measuring scales like pH or decibels.

The three standard bases are compared in [side-by-side summary](!/algebra/logarithms/common-natural#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Simple Logarithm Rules`,
    content: `[The logarithm of 1 always equals 0](!#log-of-one), regardless of base: $\\log_2(1) = 0$, $\\log_{10}(1) = 0$, $\\log_5(1) = 0$. This is because any number to the power $0$ equals $1$: $2^0 = 1$, $10^0 = 1$, $5^0 = 1$.

[The logarithm of the base equals 1](!#log-of-the-base): $\\log_2(2) = 1$, $\\log_{10}(10) = 1$, $\\log_7(7) = 1$. This makes sense because the base to the first power equals itself: $2^1 = 2$, $10^1 = 10$, $7^1 = 7$.

[Multiplication becomes addition](!#the-product-rule) with logarithms: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$. For example, $\\log_2(8) + \\log_2(4) = 3 + 2 = 5 = \\log_2(32)$ because $8 \\times 4 = 32$. This property makes logarithms useful for simplifying multiplication.

[Division becomes subtraction](!#the-quotient-rule): $\\log_b(\\frac{x}{y}) = \\log_b(x) - \\log_b(y)$. Try $\\log_2(8) - \\log_2(4) = 3 - 2 = 1 = \\log_2(2)$ because $8 \\div 4 = 2$. And [exponents become multiplication](!#the-power-rule): $\\log_b(x^n) = n \\cdot \\log_b(x)$. So $\\log_2(8^2) = 2 \\cdot \\log_2(8) = 2 \\times 3 = 6$.

Laws mode also covers the [change of base](!#change-of-base) formula and the [inverse pair](!#inverse-pair) $\\log_b(b^x) = x$. Every rule is a rewriting of an exponent rule, because a logarithm is an exponent. The complete list with proofs is in [logarithm rules](!/algebra/logarithms#7) and [summary of logarithm rules](!/algebra/logarithms/rules#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Practice Problems to Try`,
    content: `**Easy problems with base 2**: Calculate $\\log_2(4)$, $\\log_2(16)$, and $\\log_2(32)$. Answers: $2$ (because $2^2 = 4$), $4$ (because $2^4 = 16$), and $5$ (because $2^5 = 32$). These are all whole numbers because the inputs are perfect powers of $2$.

**Base 10 problems**: Find $\\log_{10}(100)$, $\\log_{10}(1000)$, and $\\log_{10}(10000)$. Answers: $2$, $3$, and $4$. Notice the pattern—each answer tells you how many zeros are in the number (plus one for the leading $1$).

**Problems with decimals**: Try $\\log_2(5)$, $\\log_{10}(50)$, and $\\log_3(10)$. Answers: approximately $2.3219$, $1.6990$, and $2.0959$. These give decimals because the inputs aren't perfect powers of their bases.

**Negative logarithms**: Calculate $\\log_2(0.5)$, $\\log_{10}(0.1)$, and $\\log_5(0.2)$. Answers: $-1$, $-1$, and $-1$. All equal $-1$ because $2^{-1} = 0.5$, $10^{-1} = 0.1$, and $5^{-1} = 0.2$.

**Custom base challenges**: Find $\\log_3(27)$, $\\log_5(125)$, and $\\log_7(49)$. Answers: $3$, $3$, and $2$. Check: $3^3 = 27$, $5^3 = 125$, and $7^2 = 49$. More values to check against are in [key logarithmic values](!/algebra/logarithms#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Real-World Uses of Logarithms`,
    content: `**pH Scale** uses base $10$ logarithms to measure acidity. A pH of $7$ is neutral, below $7$ is acidic, above $7$ is basic. The formula involves $\\log_{10}$ of hydrogen ion concentration. Each whole number change represents a tenfold difference—pH $5$ is ten times more acidic than pH $6$.

**Decibels** measure sound intensity using $\\log_{10}$. The formula is $10 \\cdot \\log_{10}(\\frac{I}{I_0})$ where $I$ is intensity. A whisper is about $30$ dB, normal conversation $60$ dB, a rock concert $120$ dB. Every $10$ dB increase means the sound is ten times more intense.

**Earthquake magnitude** (Richter scale) uses logarithms. A magnitude $5$ earthquake releases about $32$ times more energy than magnitude $4$ because the scale is logarithmic. $\\log_{10}$ helps compress the huge range of earthquake energies into manageable numbers.

**Population growth** and **compound interest** use natural logarithms (base $e$). If bacteria double every hour, $\\ln$ helps calculate how long to reach a certain population. The formula $t = \\frac{\\ln(N/N_0)}{\\ln(2)}$ tells you how many doublings occurred.

**Computer algorithms** use $\\log_2$ to analyze efficiency. Binary search has complexity $O(\\log_2 n)$—it divides the problem in half each step. Searching $1024$ items takes only about $\\log_2(1024) = 10$ steps instead of checking all $1024$. Which base suits which application is discussed in [when to use which](!/algebra/logarithms/common-natural#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Related Calculators and Tools`,
    content: `**[Exponent Calculator](!/calculators/exponent-calculator)** performs the opposite operation. Instead of finding what exponent gives a result, you calculate the result from a known base and exponent. Use it to verify logarithms: if $\\log_2(8) = 3$, check that $2^3 = 8$ using the exponent calculator.

**[Root Calculator](!/calculators/root-calculator)** finds roots, which are fractional exponents. The square root of $16$ equals $16^{0.5}$, and you can verify this using logarithms: $0.5 \\cdot \\log(16) = \\log(4)$. Roots and logarithms are related through exponent rules.

**Scientific Calculator** combines logarithms with other operations for complex formulas. Use it when logarithms are part of longer calculations involving multiple steps, parentheses, or different operations.

**[Logarithmic Tables](!/tables/logarithm)** provide pre-calculated values for common logarithms. Before calculators existed, people looked up logarithms in books. Our tables page shows logarithms for reference and helps you understand patterns in logarithmic values.

For deeper learning, explore exponential growth and decay, logarithmic scales in science, change of base formula, and how logarithms simplify multiplication and division in complex calculations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `The How This Works Panel`,
    content: `The **How this works** card at the top of the right-hand column changes with every click and keystroke. It opens with a short note on the current state: the base you have picked, the law, or the comparison, each ending with a link to the section on this page that explains it in full.

In Calculate mode the card then shows **What just happened**, which writes the logarithm as an exponent equation for your numbers, $\\log_2(32) = 5$ because $2^5 = 32$; **Worth knowing**, which appears only when something is special: an argument of $1$, an argument equal to the base, an argument below $1$ with its negative result such as $\\log_2(0.25) = -2$, or a note on how computers evaluate a logarithm that is not a whole number; and **The concept**, which states what the chosen base means, for example $\\ln(0.25) \\approx -1.3863$ for the natural logarithm.

In Laws mode the card names the law, explains why it holds and shows a common mistake. In Compare mode it explains how the two logarithms are compared.

Below the card, Calculate mode also shows the **Powers of** table for the current base; click a row to load that argument. The laws the panel refers to are collected in [simple logarithm rules](!#simple-logarithm-rules).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Using Laws Mode`,
    content: `Click the **Laws** tab to apply one logarithm rule to numbers of your own. The left card lists seven laws as buttons, each with its formula: product rule, quotient rule, power rule, change of base, log of base, log of one and inverse pair. The product rule is selected when you open the mode.

Under the buttons, the input row shows the boxes the law needs: a base and the numbers $x$ and $y$ for the product and quotient rules, a base, $x$ and $n$ for the power rule, two bases and $x$ for the change of base, and a single base for the log of base and the log of one. The boxes start with sample values, so a result is visible at once: $\\log_2(4) + \\log_2(8) = 2 + 3 = 5 = \\log_2(32)$, and with $y = 16$ the sum becomes $2 + 4 = 6 = \\log_2(64)$. The quotient rule starts with $\\log_2(32) - \\log_2(4) = 3$, the power rule with $\\log_2(4^3) = 3 \\cdot 2 = 6$, and the change of base with $\\log_8(64) = 6 / 3 = 2$.

The **Step-by-step** list under the inputs rewrites your numbers with the law: the starting expression, the law applied, the value, and a direct check. Change a box and the steps follow at once.

The **How this works** card on the right explains the selected law and warns about its most common mistake. All seven laws are summarised in [simple logarithm rules](!#simple-logarithm-rules).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Using Compare Mode`,
    content: `Click the **Compare** tab to set two logarithms side by side. The card shows **Expression A** and **Expression B**, each with a base box and an argument box, and prints the value of each as you type. The mode opens with $\\log_2(64) = 6$ against $\\log_{10}(1000) = 3$, so A is larger.

The **Verdict** line says which expression is larger, or that they are equal, and gives the difference. Under it, a row of figures lists both values to six decimals, the difference $A - B$, the ratio $A / B$, and, when the bases are equal, the difference written as one logarithm by the quotient rule.

Type $8$ as the argument of A to make the two equal, $\\log_2(8) = 3 = \\log_{10}(1000)$; type $100$ as the argument of B and A is larger again by $1$, since $\\log_{10}(100) = 2$; change the base of B to $2$ and $\\log_2(100) \\approx 6.6439$ makes B the larger one.

Negative and zero arguments show a dash, since they have no logarithm. How the base and the argument decide the size of a logarithm is explained in [comparing two logarithms](!#comparing-two-logarithms).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Binary Logarithm (Base 2)`,
    content: `The binary logarithm $\\log_2(x)$ answers the question: how many times must $2$ be multiplied by itself to reach $x$? Its values at the powers of $2$ are whole numbers: $\\log_2(8) = 3$, $\\log_2(1024) = 10$, $\\log_2(0.5) = -1$. Between them it grows slowly: $\\log_2(5) \\approx 2.3219$ sits between $\\log_2(4) = 2$ and $\\log_2(8) = 3$.

Another reading: $\\log_2(x)$ is the number of times $x$ can be halved before it drops to $1$. Halving $1024$ ten times gives $1$. That is why $\\log_2$ counts the steps of a binary search and the bits needed to label $x$ items: $8$ items need $3$ bits.

To estimate by hand, find the two powers of $2$ around $x$: $64 < 100 < 128$, so $\\log_2(100)$ is between $6$ and $7$, in fact about $6.6439$. The common mistake is to expect $\\log_2(100)$ to be $50$; a logarithm grows far more slowly than its argument.

The reference values are in [key logarithmic values](!/algebra/logarithms#3); how a calculator converts between bases is in [calculator conventions](!/algebra/logarithms/common-natural#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Natural Logarithm (Base e)`,
    content: `The natural logarithm $\\ln(x) = \\log_e(x)$ uses the base $e \\approx 2.71828$. Its whole-number values sit at the powers of $e$: $\\ln(1) = 0$, $\\ln(e) = 1$, $\\ln(e^2) = 2$. For other arguments it is irrational: $\\ln(8) \\approx 2.0794$, $\\ln(10) \\approx 2.3026$, $\\ln(1024) \\approx 6.9315$.

The base $e$ is chosen because it makes continuous change simple: a quantity that grows at a rate equal to its own size has $e^t$ as its formula, so $\\ln$ turns a growth factor back into elapsed time. A population that has multiplied by $8$ while doubling every hour has been growing for $\\ln(8) / \\ln(2) = 3$ hours.

In the calculator, the chips for ln are $1$, $e$, $e^2$, $e^3$, $10$ and $100$. The common mistake is to read $\\ln$ as the base-$10$ logarithm: $\\ln(100) \\approx 4.6052$, while $\\log_{10}(100) = 2$.

See [the natural logarithm](!/algebra/logarithms/common-natural#2) and [the number e](!/algebra/logarithms/common-natural#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Common Logarithm (Base 10)`,
    content: `The common logarithm $\\log_{10}(x)$ counts powers of ten: $\\log_{10}(10) = 1$, $\\log_{10}(100) = 2$, $\\log_{10}(1000) = 3$, and $\\log_{10}(0.01) = -2$. For a number between two powers of ten the result lies between two whole numbers: $\\log_{10}(8) \\approx 0.9031$, just under $1$.

The whole part of $\\log_{10}(x)$ is one less than the number of digits of a whole number $x$: $1000$ has four digits and $\\log_{10}(1000) = 3$. That is why base $10$ drives scales that compress huge ranges: pH, decibels and earthquake magnitude all report a common logarithm, and one unit on them means a factor of $10$.

In many textbooks and on most hand calculators the button labelled **log** means $\\log_{10}$, while **ln** means the natural logarithm. The common mistake is to mix the two: $\\log_{10}(e^2) \\approx 0.8686$, not $2$.

See [the common logarithm](!/algebra/logarithms/common-natural#1) and [when to use which](!/algebra/logarithms/common-natural#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `Custom Bases and Change of Base`,
    content: `A logarithm can have any base $b > 0$ with $b \\neq 1$. $\\log_3(9) = 2$ because $3^2 = 9$; $\\log_5(125) = 3$ because $5^3 = 125$; $\\log_{2.5}(6.25) = 2$ because $2.5^2 = 6.25$. Base $1$ is excluded because $1$ raised to any power is $1$, so no exponent reaches another number; a base of $0$ or below has no real powers of the needed kind.

Calculators do not store every base. They use the change of base formula, $\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}$, or the same with $\\log_{10}$. For $\\log_5(8)$: $\\ln(8) \\approx 2.0794$ and $\\ln(5) \\approx 1.6094$, and their quotient is about $1.2920$. The calculator shows this quotient in the Result card as the **Change of base** form.

The common mistake is to divide the arguments instead of the logarithms: $\\log_5(8)$ is not $8 / 5$. Another is to write $\\ln(8) - \\ln(5)$, which is $\\ln(8/5)$, a different number.

The formula is in [the change of base formula](!/algebra/logarithms/rules#4) and [converting between bases](!/algebra/logarithms/common-natural#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj20: {
    title: `The Product Rule`,
    content: `The product rule turns a logarithm of a product into a sum: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$.

It is the product rule of exponents read backwards. If $x = b^m$ and $y = b^n$, then $xy = b^{m+n}$, so the exponent of $xy$ is $m + n$. Example: $\\log_2(4 \\times 8) = \\log_2(4) + \\log_2(8) = 2 + 3 = 5$, and indeed $4 \\times 8 = 32 = 2^5$. With $y = 16$: $2 + 4 = 6 = \\log_2(64)$.

The rule is how logarithm tables turned multiplication into addition before calculators: add the logarithms, then look up the antilogarithm. The common mistake is to apply it to a sum: $\\log_b(x + y)$ is not $\\log_b(x) + \\log_b(y)$; $\\log_2(4 + 4) = 3$, while $\\log_2(4) + \\log_2(4) = 4$.

See [the product rule](!/algebra/logarithms/rules#1) and [expanding logarithmic expressions](!/algebra/logarithms/rules#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `The Quotient Rule`,
    content: `The quotient rule turns a logarithm of a quotient into a difference: $\\log_b\\left(\\frac{x}{y}\\right) = \\log_b(x) - \\log_b(y)$.

It mirrors the quotient rule of exponents: $b^m / b^n = b^{m-n}$. Example: $\\log_2(32 / 4) = \\log_2(32) - \\log_2(4) = 5 - 2 = 3$, and $32 / 4 = 8 = 2^3$. Read the other way, it condenses a difference into one logarithm, which is how Compare mode writes $A - B$ as a single logarithm when the bases agree.

The order matters: $\\log_b(x) - \\log_b(y)$ is the logarithm of $x / y$, not of $y / x$; swapping gives the opposite sign. The common mistake is to turn a quotient of logarithms into a difference: $\\frac{\\log_b(x)}{\\log_b(y)}$ is not $\\log_b(x) - \\log_b(y)$; the first is a change of base, the second the logarithm of a quotient.

See [the quotient rule](!/algebra/logarithms/rules#2) and [condensing logarithmic expressions](!/algebra/logarithms/rules#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `The Power Rule`,
    content: `The power rule brings an exponent down as a factor: $\\log_b(x^n) = n \\cdot \\log_b(x)$.

It follows from the power of a power: if $x = b^m$ then $x^n = b^{mn}$, so the exponent of $x^n$ is $n$ times the exponent of $x$. Example: $\\log_2(4^3) = 3 \\cdot \\log_2(4) = 3 \\times 2 = 6$, and $4^3 = 64 = 2^6$. A root is a fractional power: $\\log_2(\\sqrt{16}) = \\frac{1}{2} \\log_2(16) = 2$.

The rule is what makes logarithms solve exponential equations: taking $\\log_2$ of both sides of $2^x = 100$ gives $x = \\log_2(100) \\approx 6.6439$. The common mistake is to confuse $(\\log_b x)^2$ with $\\log_b(x^2)$: the first squares the logarithm, the second doubles it; $(\\log_2 8)^2 = 9$, while $\\log_2(8^2) = 6$.

See [the power rule](!/algebra/logarithms/rules#3) and [solving exponential equations via logarithms](!/algebra/logarithms/equations#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj23: {
    title: `Change of Base`,
    content: `The change of base formula rewrites a logarithm in any base you can compute: $\\log_b(x) = \\frac{\\log_a(x)}{\\log_a(b)}$ for any base $a > 0$, $a \\neq 1$.

It follows from the power rule. Let $y = \\log_b(x)$, so $b^y = x$. Taking $\\log_a$ of both sides gives $y \\log_a(b) = \\log_a(x)$, and dividing by $\\log_a(b)$ isolates $y$. Example: $\\log_8(64) = \\frac{\\log_2(64)}{\\log_2(8)} = \\frac{6}{3} = 2$, and $8^2 = 64$. With natural logarithms, $\\log_5(8) = \\ln(8) / \\ln(5) \\approx 2.0794 / 1.6094 \\approx 1.2920$.

A useful consequence: $\\log_b(x)$ and $\\log_a(x)$ differ only by the constant factor $1 / \\log_a(b)$, so all logarithms of $x$ are proportional. The common mistake is to drop the divisor and report $\\log_a(x)$ alone, or to put the base on top: the base's logarithm goes in the denominator.

See [the change of base formula](!/algebra/logarithms/rules#4) and [converting between bases](!/algebra/logarithms/common-natural#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj24: {
    title: `Log of the Base`,
    content: `For every valid base, $\\log_b(b) = 1$: $\\log_2(2) = 1$, $\\log_{10}(10) = 1$, $\\ln(e) = 1$, $\\log_5(5) = 1$.

The reason is $b^1 = b$: the exponent that turns $b$ into itself is $1$. The calculator points this out in **Worth knowing** whenever the argument equals the base. The identity marks the point where every logarithm curve reaches the height $1$, and together with $\\log_b(1) = 0$ it fixes the two anchor points of the graph.

It also explains the units of a logarithmic scale: on the base-$10$ scale, going from $1$ to $10$ is one unit because $\\log_{10}(10) = 1$. The common mistake is to think $\\log_b(b)$ depends on $b$; it is $1$ for $b = 2$ and for $b = 1000$ alike.

See [key logarithmic values](!/algebra/logarithms#3) and [inverse identities](!/algebra/logarithms#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj25: {
    title: `Log of One`,
    content: `For every valid base, $\\log_b(1) = 0$: $\\log_2(1) = 0$, $\\log_{10}(1) = 0$, $\\ln(1) = 0$.

The reason is $b^0 = 1$ for every $b \\neq 0$: the exponent that produces $1$ is $0$, whatever the base. In the calculator, typing $1$ as the argument gives $0$ for any base, and **Worth knowing** says why.

The identity divides the arguments into two groups: arguments above $1$ have positive logarithms and arguments between $0$ and $1$ have negative ones, since $\\log_b(x) < \\log_b(1) = 0$ there for a base above $1$. It is the point where every logarithm graph crosses the horizontal axis. The common mistake is to confuse it with $\\log_b(0)$, which does not exist: the curve falls without bound as the argument approaches $0$ and never reaches it.

See [key logarithmic values](!/algebra/logarithms#3) and [the vertical asymptote](!/algebra/logarithms/graphs#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj26: {
    title: `Inverse Pair`,
    content: `Logarithm and exponential with the same base undo each other: $\\log_b(b^x) = x$ and $b^{\\log_b(x)} = x$.

The first says: raise $b$ to the power $x$, then ask which power of $b$ you have, and the answer is $x$. Example: $\\log_2(2^5) = 5$. The second runs the other way: $2^{\\log_2(5)} = 5$, because $\\log_2(5) \\approx 2.3219$ is by definition the exponent that produces $5$. In Laws mode, the inverse pair law shows both directions for a base and an exponent of your choice.

These identities are the tool for solving equations: to solve $2^x = 100$, apply $\\log_2$ to both sides and the left side collapses to $x$; to solve $\\log_2(x) = 5$, raise $2$ to both sides and get $x = 32$. The common mistake is to pair a logarithm with an exponential of a different base: $\\log_2(10^x)$ does not collapse to $x$; it equals $x \\log_2(10)$.

See [inverse identities](!/algebra/logarithms#4) and [inverse relationship with exponential functions](!/algebra/logarithms/properties#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj27: {
    title: `Comparing Two Logarithms`,
    content: `Two logarithms are compared by their values, and two rules predict the order without computing.

With the same base above $1$, the larger argument has the larger logarithm: $\\log_2(64) > \\log_2(8)$ because $64 > 8$, and the difference is one logarithm, $\\log_2(64 / 8) = 3$. With a base between $0$ and $1$ the order flips, because such a logarithm decreases as the argument grows.

With different bases, no shortcut by argument alone works: $\\log_2(64) = 6$ beats $\\log_{10}(1000) = 3$ although $1000$ is far larger than $64$, because base $2$ needs many more factors to reach a number. Convert both to one base with the change of base formula, or simply compute: $\\log_2(100) \\approx 6.6439$ against $\\log_{10}(1000) = 3$.

The common mistake is to compare arguments and ignore the bases. In Compare mode the verdict, the difference $A - B$ and the ratio $A / B$ make the comparison explicit.

See [base greater than one: direction preserved](!/algebra/logarithms/inequalities#1), [base between zero and one: direction reversed](!/algebra/logarithms/inequalities#2) and [effect of base on shape](!/algebra/logarithms/graphs#5).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I calculate a logarithm?",
    answer: "To calculate a logarithm, choose your base (use Standard for bases 2, e, or 10, or Custom for any other positive number except 1), enter the number you want to find the logarithm of, and click Calculate. The result tells you what exponent is needed. For example, log₂(8) = 3 because 2³ = 8."
  },
  obj2: {
    question: "What's the difference between log, ln, and log₂?",
    answer: "log usually means base 10 (common logarithm), ln means base e (natural logarithm where e ≈ 2.71828), and log₂ means base 2 (binary logarithm). They all find exponents, but for different bases. This calculator supports all three: select base 10 or e from Standard, or enter 2 in Custom base."
  },
  obj3: {
    question: "Why can't I calculate the logarithm of negative numbers or zero?",
    answer: "Logarithms only work with positive numbers because you cannot raise a positive base to any real exponent and get zero or a negative result. For example, 2 raised to any power (positive or negative) always gives a positive number, never zero or negative. This is a fundamental mathematical limitation."
  },
  obj4: {
    question: "What does a negative logarithm mean?",
    answer: "A negative logarithm means the result is less than 1. For example, log₂(0.5) = -1 because 2⁻¹ = 0.5. Negative logarithms represent negative exponents—they tell you the denominator of a fraction with numerator 1. So log₁₀(0.01) = -2 means 10⁻² = 1/100 = 0.01."
  },
  obj5: {
    question: "Why can't I use base 1?",
    answer: "Base 1 is undefined for logarithms because 1 raised to any power always equals 1 (1¹ = 1, 1² = 1, 1¹⁰⁰ = 1). This means log₁(5) would be asking 'what exponent makes 1 equal 5?' which has no answer. The calculator requires bases greater than 0 and not equal to 1."
  },
  obj6: {
    question: "How do I calculate log base 2 of a number?",
    answer: "Use the change of base formula: log₂(x) = ln(x) / ln(2). For example, log₂(1000) = 6.9078 / 0.6931 ≈ 9.9658. For powers of 2 the answer is a whole number: log₂(8) = 3, log₂(1024) = 10. In this calculator, choose base 2 and enter the number."
  },
  obj7: {
    question: "What are common log base 2 values?",
    answer: "log₂(2) = 1, log₂(4) = 2, log₂(8) = 3, log₂(16) = 4, log₂(1024) = 10. For powers of 10: log₂(10) ≈ 3.3219, log₂(100) ≈ 6.6439, log₂(1000) ≈ 9.9658, log₂(10,000) ≈ 13.2877 and log₂(1,000,000) ≈ 19.9316."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Logarithm Calculator - Calculate Log with Any Base",
    "description": "Free online logarithm calculator for base 2, e, 10, or custom bases. Calculate logarithms instantly with step-by-step explanations and examples.",
    "url": "https://www.learnmathclass.com/calculators/log-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Standard base logarithms (base 2, e, 10)",
      "Custom base logarithm calculation",
      "Binary logarithm (log₂)",
      "Natural logarithm (ln or logₑ)",
      "Common logarithm (log₁₀)",
      "High-precision arithmetic",
      "Decimal and whole number support",
      "Real-time error validation"
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
        "name": "Logarithm Calculator",
        "item": "https://www.learnmathclass.com/calculators/log-calculator"
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

return {
  props: {
    logarithmExplanations,
    detailInstructions,
    demos,
    sectionsContent,
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Logarithm Calculator | Calculate Log Base 2, e, 10 & Custom",
      description: "Free logarithm calculator for any base. Calculate log₂, ln, log₁₀ and custom base logarithms instantly. Easy-to-use tool with examples and explanations.",
      keywords: keyWords.join(", "),
      url: "/calculators/log-calculator",
      name: "Logarithm Calculator - Log Base 2, e, 10 & Custom Tool"
    },
  },
  revalidate: 86400
};
}

export default function LogCalculatorPage({seoData, sectionsContent, logarithmExplanations, detailInstructions, demos, navigationGroup, faqQuestions, schemas}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.4}
    minHeight={471}
    renderText={processContent}
  >
    <LogarithmCalculator explanations={logarithmExplanations} />
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
    id: 'choosing-between-standard-and-custom-base',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('choosing-between-standard-and-custom-base'), sectionsContent.obj2.content],
  },
  {
    id: 'using-standard-bases',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('using-standard-bases'), sectionsContent.obj4.content],
  },
  {
    id: 'working-with-custom-base',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('working-with-custom-base'), sectionsContent.obj5.content],
  },
  {
    id: 'entering-your-number',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('entering-your-number'), sectionsContent.obj3.content],
  },
  {
    id: 'understanding-your-results-and-errors',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('understanding-your-results-and-errors'), sectionsContent.obj6.content],
  },
  {
    id: 'the-how-this-works-panel',
    title: sectionsContent.obj13.title,
    link: sectionsContent.obj13.link,
    content: [demoPlayer('the-how-this-works-panel'), sectionsContent.obj13.content],
  },
  {
    id: 'using-laws-mode',
    title: sectionsContent.obj14.title,
    link: sectionsContent.obj14.link,
    content: [demoPlayer('using-laws-mode'), sectionsContent.obj14.content],
  },
  {
    id: 'using-compare-mode',
    title: sectionsContent.obj15.title,
    link: sectionsContent.obj15.link,
    content: [demoPlayer('using-compare-mode'), sectionsContent.obj15.content],
  },
  {
    id: 'what-are-logarithms',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'binary-logarithm-base-2',
    title: sectionsContent.obj16.title,
    link: sectionsContent.obj16.link,
    content: [sectionsContent.obj16.content],
  },
  {
    id: 'natural-logarithm-base-e',
    title: sectionsContent.obj17.title,
    link: sectionsContent.obj17.link,
    content: [sectionsContent.obj17.content],
  },
  {
    id: 'common-logarithm-base-10',
    title: sectionsContent.obj18.title,
    link: sectionsContent.obj18.link,
    content: [sectionsContent.obj18.content],
  },
  {
    id: 'custom-bases-and-change-of-base',
    title: sectionsContent.obj19.title,
    link: sectionsContent.obj19.link,
    content: [sectionsContent.obj19.content],
  },
  {
    id: 'simple-logarithm-rules',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'the-product-rule',
    title: sectionsContent.obj20.title,
    link: sectionsContent.obj20.link,
    content: [sectionsContent.obj20.content],
  },
  {
    id: 'the-quotient-rule',
    title: sectionsContent.obj21.title,
    link: sectionsContent.obj21.link,
    content: [sectionsContent.obj21.content],
  },
  {
    id: 'the-power-rule',
    title: sectionsContent.obj22.title,
    link: sectionsContent.obj22.link,
    content: [sectionsContent.obj22.content],
  },
  {
    id: 'change-of-base',
    title: sectionsContent.obj23.title,
    link: sectionsContent.obj23.link,
    content: [sectionsContent.obj23.content],
  },
  {
    id: 'log-of-the-base',
    title: sectionsContent.obj24.title,
    link: sectionsContent.obj24.link,
    content: [sectionsContent.obj24.content],
  },
  {
    id: 'log-of-one',
    title: sectionsContent.obj25.title,
    link: sectionsContent.obj25.link,
    content: [sectionsContent.obj25.content],
  },
  {
    id: 'inverse-pair',
    title: sectionsContent.obj26.title,
    link: sectionsContent.obj26.link,
    content: [sectionsContent.obj26.content],
  },
  {
    id: 'comparing-two-logarithms',
    title: sectionsContent.obj27.title,
    link: sectionsContent.obj27.link,
    content: [sectionsContent.obj27.content],
  },
  {
    id: 'understanding-different-bases',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'practice-problems-to-try',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
  },
  {
    id: 'real-world-uses-of-logarithms',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'related-calculators-and-tools',
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
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'-20px'}}>Logarithm Calculator</h1>
    {/* <div style={{marginBottom:'10px'}}>
      <ExplanationDetails 
        instructions={detailInstructionsLogarithms}
        title='How to use Logarithm Calculator'
      />
    </div> */}
    <div style={{marginTop:'30px',marginBottom:'20px'}}>
      <ExplanationDetails
        instructions={detailInstructions}
        title='How to use Logarithm Calculator'
      />
    </div>
    
    <div className="layout-container">
      <div>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="230px"       
          theme='brilliantBlue'
          isSticky={true}
          verticalOffset='230px'
        />
      </div>

      <div>
        <div style={{width:'100%',margin:'auto',marginLeft:'-100px'}}>
          {/* <div style={{transform:'scale(0.95)'}}> */}
            <LogarithmCalculator 
              explanations={logarithmExplanations}
            />
          {/* </div>  */}
          <br/>
        </div>
      </div>
    </div>

    <br/>
    <SectionTableOfContents sections={genericSections}/>
   
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