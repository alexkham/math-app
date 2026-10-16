

import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator';
import '../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "C:/Program Files/Git/calculators/root-calculator" in calculators-mesh-registry.json (same folder): 8 usage sections, each with a demo; 12 panel notes; 22 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup = [
  {
    title: 'Other Calculators',
    items: [
      {title: 'Exponent Calculator', link: '/calculators/exponent-calculator'},
      {title: 'Modulo Calculator', link: '/calculators/modulo-calculator'},
      {title: 'Logarithm Calculator', link: '/calculators/log-calculator'},
      {title: 'Percentage Calculator', link: '/calculators/percentage-calculator'},
      {title: 'Factorial Calculator', link: '/calculators/factorial-calculator'},
      {title: 'Fractions Calculator', link: '/calculators/fraction-calculator'},
      {title: 'Complex Numbers Calculator', link: '/calculators/complex-numbers'},
      {title: 'Trigonometry Calculator', link: '/calculators/trigonometry-calculator'},
      {title: 'Statistics Calculator', link: '/calculators/statistics-calculator'},
    ]
  }
];

const detailInstructions = [
  `Pick a mode with the three tabs at the top: **Calculate** finds one root, **Laws** applies a radical law to your numbers, **Compare** sets two radicals side by side. [Learn more about the modes](!#getting-started-with-the-root-calculator)`,
  `In Calculate mode, click **Square** for a square root. [Learn more about square roots](!#using-square-root-mode)`,
  `Click **Cube** for a cube root; negative numbers are allowed here. [Learn more about cube roots](!#using-cube-root-mode)`,
  `Click **Custom** and type the index in the small box for any other root. [Learn more about nth roots](!#using-nth-root-mode)`,
  `Type the number under the radical sign, or click a chip under the buttons to load a perfect square, cube or power. [Learn more about the number](!#getting-started-with-the-root-calculator)`,
  `The result appears after the equals sign as you type; the **Result** card lists it in several forms. Click **Calculate** to keep it in the **Recent** strip. [Learn more about the results](!#reading-results-and-understanding-output)`,
  `The **How this works** panel on the right explains the current root, law or comparison with your own numbers; its link opens the section below that explains the topic in full. [Learn more about the panel](!#using-the-explanation-panel)`,
  `In Laws mode, click a law on the left, edit its boxes, and read the numbered steps. [Learn more about Laws mode](!#using-laws-mode)`,
  `In Compare mode, type an index and a number for expression A and for expression B, then read the verdict. [Learn more about Compare mode](!#using-compare-mode)`,
  `Click **Reset** to return to the square root of 25. The result reads **imaginary** for an even root of a negative number. [Learn more about getting started](!#getting-started-with-the-root-calculator)`,
];

// Per-state notes for the How this works panel (explanations.states in RootCalculator):
// key = mode, or mode:sub-option; the component shows the combined key first, then the mode key.
const explanations = {
  states: {
    calc: {
      title: `Calculate Mode`,
      content: `Finds one root: pick Square, Cube or Custom, type the number, and read the result and its forms on the left. [All root types](!#what-are-roots)`,
    },
    'calc:square': {
      title: `Square Root`,
      content: `The number that multiplied by itself gives the radicand: $\\sqrt{25} = 5$. A negative radicand has no real square root. [Learn more about square roots](!#square-roots) · [All root types](!#what-are-roots)`,
    },
    'calc:cube': {
      title: `Cube Root`,
      content: `The number that multiplied by itself twice gives the radicand: $\\sqrt[3]{27} = 3$, and $\\sqrt[3]{-8} = -2$. [Learn more about cube roots](!#cube-roots) · [All root types](!#what-are-roots)`,
    },
    'calc:custom': {
      title: `Nth Root`,
      content: `Any index $n$: the number whose $n$-th power is the radicand, $\\sqrt[4]{81} = 3$. Even indices need a non-negative radicand. [Learn more about nth roots](!#nth-roots) · [All root types](!#what-are-roots)`,
    },
    laws: {
      title: `Laws Mode`,
      content: `Applies one radical law to your numbers and shows the steps. Pick a law on the left, then edit the boxes. [All radical laws](!#properties-of-roots)`,
    },
    'laws:product': {
      title: `Product Rule`,
      content: `$\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$ for the same index: $\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$. [Learn more about the product rule](!#the-product-rule-for-radicals) · [All radical laws](!#properties-of-roots)`,
    },
    'laws:quotient': {
      title: `Quotient Rule`,
      content: `$\\sqrt[n]{a} / \\sqrt[n]{b} = \\sqrt[n]{a/b}$ for the same index: $\\sqrt{50} / \\sqrt{2} = \\sqrt{25} = 5$. [Learn more about the quotient rule](!#the-quotient-rule-for-radicals) · [All radical laws](!#properties-of-roots)`,
    },
    'laws:power-root': {
      title: `Power of a Root`,
      content: `$(\\sqrt[n]{a})^m = \\sqrt[n]{a^m} = a^{m/n}$: $(\\sqrt{4})^3 = \\sqrt{64} = 8$. [Learn more about powers of roots](!#power-of-a-root) · [All radical laws](!#properties-of-roots)`,
    },
    'laws:nested': {
      title: `Nested Radicals`,
      content: `$\\sqrt[n]{\\sqrt[m]{a}} = \\sqrt[nm]{a}$: the indices multiply, $\\sqrt{\\sqrt[3]{64}} = \\sqrt[6]{64} = 2$. [Learn more about nested radicals](!#nested-radicals) · [All radical laws](!#properties-of-roots)`,
    },
    'laws:rationalize': {
      title: `Rationalize`,
      content: `Removes a root from a denominator: $1 / \\sqrt{2} = \\sqrt{2} / 2$. [Learn more about rationalizing](!#rationalizing-the-denominator) · [All radical laws](!#properties-of-roots)`,
    },
    'laws:exp-form': {
      title: `Exponent Form`,
      content: `$\\sqrt[n]{a} = a^{1/n}$: a root is a fractional power, $\\sqrt[3]{8} = 8^{1/3} = 2$. [Learn more about exponent form](!#exponent-form) · [All radical laws](!#properties-of-roots)`,
    },
    compare: {
      title: `Compare Mode`,
      content: `Computes two radicals and says which is larger and by what ratio; with different indices it restates both over a common index. [Learn more about comparing radicals](!#comparing-two-radicals)`,
    },
  },
};

const demos = {
  'getting-started-with-the-root-calculator': {
    title: 'The three modes and Reset',
    script: [
      { say: 'CLICK Laws\nLaw buttons and Step-by-step replace the form.', at: 'tr' },
      { click: { button: 'Laws' } },
      { wait: 2000 },
      { say: 'CLICK Compare\nExpression A against expression B, with a verdict.', at: 'tr' },
      { click: { button: 'Compare' } },
      { wait: 2000 },
      { say: 'CLICK Calculate\nBack to the form.\nEach mode keeps its own numbers.', at: 'tr' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 1800 },
      { say: 'TYPE 36 under the radical\nResult updates: √36 = 6.', at: 'tr' },
      { set: 'input.rad', value: '36' },
      { wait: 2000 },
      { say: 'CLICK Reset\nBack to √25 = 5.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'using-square-root-mode': {
    title: 'Square roots: perfect, irrational and impossible',
    script: [
      { say: 'TYPE 36\n√36 = 6, a perfect square.', at: 'tr' },
      { set: 'input.rad', value: '36' },
      { wait: 2000 },
      { say: 'TYPE 50\n√50 = 7.0711.\nSimplified radical: 5√2.', at: 'tr' },
      { set: 'input.rad', value: '50' },
      { wait: 2200 },
      { say: 'CLICK the 144 chip\n√144 = 12.', at: 'tr' },
      { click: { button: '144', exact: true } },
      { wait: 2000 },
      { say: 'TYPE -25\nNo real square root: imaginary.', at: 'tr' },
      { set: 'input.rad', value: '-25' },
      { wait: 2200 },
      { say: 'TYPE 2\n√2 = 1.4142, irrational.', at: 'tr' },
      { set: 'input.rad', value: '2' },
      { wait: 2400 },
    ],
  },
  'using-cube-root-mode': {
    title: 'Cube roots, including negative numbers',
    script: [
      { say: 'CLICK Cube\nSame number, index 3.\n∛25 = 2.9240.', at: 'tr' },
      { click: { button: 'Cube', exact: true } },
      { wait: 2200 },
      { say: 'TYPE 27\n∛27 = 3, since 3³ = 27.', at: 'tr' },
      { set: 'input.rad', value: '27' },
      { wait: 2000 },
      { say: 'TYPE -8\n∛(-8) = -2: a negative cube root is fine.', at: 'tr' },
      { set: 'input.rad', value: '-8' },
      { wait: 2200 },
      { say: 'CLICK the 1000 chip\n∛1000 = 10.', at: 'tr' },
      { click: { button: '1000', exact: true } },
      { wait: 2000 },
      { say: 'TYPE 10\n∛10 = 2.1544.', at: 'tr' },
      { set: 'input.rad', value: '10' },
      { wait: 2400 },
    ],
  },
  'using-nth-root-mode': {
    title: 'Any index with Custom',
    script: [
      { say: 'CLICK Custom\nA small index box appears, set to 2.', at: 'tr' },
      { click: { button: 'Custom', exact: true } },
      { wait: 2000 },
      { say: 'TYPE 4 as the index\n⁴√25 = 2.2361.', at: 'tr' },
      { set: 'input.idx', value: '4' },
      { wait: 2000 },
      { say: 'TYPE 81 under the radical\n⁴√81 = 3, since 3⁴ = 81.', at: 'tr' },
      { set: 'input.rad', value: '81' },
      { wait: 2200 },
      { say: 'TYPE 5 as the index and 32 under the radical\n⁵√32 = 2.', at: 'tr' },
      { set: 'input.idx', value: '5' },
      { set: 'input.rad', value: '32' },
      { wait: 2200 },
      { say: 'TYPE -32\nOdd index: ⁵√(-32) = -2.', at: 'tr' },
      { set: 'input.rad', value: '-32' },
      { wait: 2400 },
    ],
  },
  'reading-results-and-understanding-output': {
    title: 'Result forms, Recent, neighbors and messages',
    script: [
      { say: 'TYPE 50\n√50 = 7.0711.\nDecimal, Scientific, Simplified radical 5√2, Fractional exponent.', at: 'tr' },
      { set: 'input.rad', value: '50' },
      { wait: 2400 },
      { say: 'CLICK Calculate\nRecent strip stores √50.', at: 'tr' },
      { click: { button: 'Calculate', exact: true, nth: 1 } },
      { wait: 2000 },
      { say: 'CLICK the neighbor 49\n√49 = 7: the Exact form appears.', at: 'tr' },
      { click: { css: '.neighbor', nth: 2 } },
      { wait: 2200 },
      { say: 'TYPE 0.25\n√0.25 = 0.5.', at: 'tr' },
      { set: 'input.rad', value: '0.25' },
      { wait: 2000 },
      { say: 'TYPE -4\nResult: imaginary.\nStatus: Imaginary (no real root).', at: 'tr' },
      { set: 'input.rad', value: '-4' },
      { wait: 2600 },
    ],
  },
  'using-the-explanation-panel': {
    title: 'What the panel says for different numbers',
    script: [
      { say: 'TYPE 0\nWorth knowing: root of zero.', at: 'tr' },
      { set: 'input.rad', value: '0' },
      { wait: 2200 },
      { say: 'TYPE 1\nWorth knowing: root of one.', at: 'tr' },
      { set: 'input.rad', value: '1' },
      { wait: 2200 },
      { say: 'TYPE 10\nWorth knowing: irrational.\n√10 = 3.1623.', at: 'tr' },
      { set: 'input.rad', value: '10' },
      { wait: 2200 },
      { say: 'TYPE 50\nWorth knowing: simplification possible, 5√2.', at: 'tr' },
      { set: 'input.rad', value: '50' },
      { wait: 2200 },
      { say: 'CLICK Cube\nThe concept changes to cube roots.\n∛50 = 3.6840.', at: 'tr' },
      { click: { button: 'Cube', exact: true } },
      { wait: 2600 },
    ],
  },
  'using-laws-mode': {
    title: 'Product, quotient, power and nested radicals',
    script: [
      { say: 'CLICK Laws\nProduct rule: √12 · √3 = √36 = 6.', at: 'tr' },
      { click: { button: 'Laws' } },
      { wait: 2200 },
      { say: 'TYPE 27 as a\n√27 · √3 = √81 = 9.', at: 'tr' },
      { set: { css: 'input.law-num', nth: 0 }, value: '27' },
      { wait: 2400 },
      { say: 'CLICK Quotient rule\n√50 / √2 = √25 = 5.', at: 'tr' },
      { click: { button: 'Quotient rule' } },
      { wait: 2400 },
      { say: 'CLICK Power of a root\n(√4)³ = √64 = 8.', at: 'tr' },
      { click: { button: 'Power of a root' } },
      { wait: 2400 },
      { say: 'CLICK Nested radicals\n√(∛64) = ⁶√64 = 2.', at: 'tr' },
      { click: { button: 'Nested radicals' } },
      { wait: 2600 },
    ],
  },
  'using-compare-mode': {
    title: 'Compare two radicals',
    script: [
      { say: 'CLICK Compare\n√50 = 7.0711 against ∛125 = 5.\nA is larger, about 1.414×.', at: 'tr' },
      { click: { button: 'Compare' } },
      { wait: 2200 },
      { say: 'TYPE 49 under the radical of A\n√49 = 7 against 5.', at: 'tr' },
      { set: { css: 'input.cmp-rad', nth: 0 }, value: '49' },
      { wait: 2400 },
      { say: 'TYPE 343 under the radical of B\n∛343 = 7: the two are equal.', at: 'tr' },
      { set: { css: 'input.cmp-rad', nth: 1 }, value: '343' },
      { wait: 2400 },
      { say: 'TYPE 2 as the index of B\n√343 = 18.5203: B is larger.', at: 'tr' },
      { set: { css: '.compare-side input.cmp-idx', nth: 1 }, value: '2' },
      { wait: 2600 },
    ],
  },
};

const keyWords = [
  'root calculator',
  'square root calculator',
  'cube root calculator',
  'nth root calculator',
  'calculate square root',
  'calculate cube root',
  'find root online',
  'sqrt calculator',
  'cubic root calculator',
  'free root calculator',
  'online root tool',
  'root calculator with steps',
  'calculate roots',
  'radical calculator',
  'root finder'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Root Calculator`,
    content: `The calculator has three modes, picked with the tabs at the top: **Calculate**, **Laws** and **Compare**. Calculate finds one root and shows it in several forms. Laws applies one radical law to numbers you choose and lists the steps. Compare sets two radicals side by side and says which is larger. Each mode keeps its own numbers, so you can switch tabs without losing anything. The demo above clicks through them and ends with **Reset**.

In Calculate mode, start with the **Root type** row: **Square** and **Cube** fix the index at $2$ or $3$, and **Custom** opens a small box for any other index. A row of chips under the buttons offers perfect squares, perfect cubes or powers of $2$, so a click gives a whole-number result.

Type the number under the radical sign in the large box. Whole numbers, decimals and, for odd indices, negative numbers all work. The result appears at once after the equals sign; the calculator starts with $\\sqrt{25} = 5$, and $36$ gives $\\sqrt{36} = 6$.

Click **Calculate** to keep the current root in the **Recent** strip, and **Reset** to return to $\\sqrt{25}$. What a root is, and why even roots of negative numbers are not real, is explained in [what are roots](!#what-are-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Square Root Mode`,
    content: `Click **Square** to take square roots. The radical sign shows no index, and the chips under the buttons offer the perfect squares from $4$ to $169$. A square root asks: what number multiplied by itself equals the radicand? For $\\sqrt{25}$ the answer is $5$, because $5 \\times 5 = 25$.

Type $36$ and the result reads $6$ at once; the Result card adds the **Exact** form because $36$ is a perfect square. Type $50$ and the result is $\\sqrt{50} \\approx 7.0711$, with the **Simplified radical** form $5\\sqrt{2}$ below it. Click the $144$ chip for $\\sqrt{144} = 12$, and type $2$ for the famous $\\sqrt{2} \\approx 1.4142$, which the panel marks as irrational.

A negative number has no real square root. Type $-25$ and the result reads **imaginary**; the Result card's status says **Imaginary (no real root)** and the panel explains why. Decimals work: $\\sqrt{0.25} = 0.5$.

The reasoning behind the principal root and the rule for negatives is in [square roots](!#square-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using Cube Root Mode`,
    content: `Click **Cube** to take cube roots. The radical sign shows the index $3$, and the chips offer the perfect cubes from $8$ to $1000$. A cube root asks: what number multiplied by itself twice equals the radicand? For $\\sqrt[3]{27}$ the answer is $3$, because $3 \\times 3 \\times 3 = 27$. With the starting number $25$, the cube root is $\\sqrt[3]{25} \\approx 2.9240$.

Type $27$ for $3$, click the $1000$ chip for $10$, and type $10$ for $\\sqrt[3]{10} \\approx 2.1544$, a decimal approximation because $10$ is not a perfect cube.

Unlike square roots, cube roots accept negative numbers: type $-8$ and the result is $-2$, because $(-2) \\times (-2) \\times (-2) = -8$; the panel notes that a negative cube root is fine. The same holds for every odd index.

Why odd roots of negative numbers exist while even ones do not is explained in [cube roots](!#cube-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using Nth Root Mode`,
    content: `Click **Custom** to take a root of any index. A small box appears to the left of the radical sign holding the index; it starts at $2$, so the result is unchanged until you type another index. With the starting number $25$ and index $4$, the result is $\\sqrt[4]{25} \\approx 2.2361$. The chips under the buttons change to the powers of $2$ from $2$ to $256$.

Type $4$ as the index and $81$ under the radical to get $3$, because $3^4 = 81$. Type $5$ and $32$ to get $2$, because $2^5 = 32$. The index must be a whole number greater than $0$; a $1$ returns the radicand itself.

For an even index a negative radicand gives **imaginary**, as with square roots. For an odd index it is allowed: index $5$ with $-32$ gives $-2$, because $(-2)^5 = -32$.

The index can be large: $\\sqrt[10]{1024} = 2$. How the index decides the sign rules is explained in [nth roots](!#nth-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Reading Results and Understanding Output`,
    content: `The result appears after the equals sign as soon as the radicand and the index are valid; you do not have to click anything. Whole-number results print in full, $\\sqrt{49} = 7$; others show four decimal places, $\\sqrt{50} \\approx 7.0711$.

The **Result** card below the form lists the value in several forms: **Exact** when the radicand is a perfect power, **Decimal** to six places, **Scientific**, the **Simplified radical** when a perfect power can be factored out, $\\sqrt{50} = 5\\sqrt{2}$, and the **Fractional exponent** form, $50^{1/2}$. The copy icon next to each form copies it.

Under the forms, **Neighboring roots** shows the radicands from three below to three above the current one with their roots; click one to load it, for example $49$ next to $50$, which gives the exact value $7$. **Calculate** stores the current root in the **Recent** strip; click an entry to bring it back. The reference table on the right lists the perfect powers near your number for the current index.

The result line reads **enter a value** while the box is empty, **imaginary** for an even root of a negative number, and **undefined** for a value beyond the computer's range; the Result card's status says **Waiting for input**, **Imaginary (no real root)** or the matching reason. The imaginary case is explained in [square roots](!#square-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Using the Explanation Panel`,
    content: `The **How this works** card at the top of the right-hand column changes with every click and keystroke. It opens with a short note on the current state: the root type, the law or the comparison you have picked, each ending with a link to the section on this page that explains it in full.

In Calculate mode the card then writes out the root for your numbers as a power equation, points out what is special about them, and states the concept behind the chosen root type. The special cases it flags are the root of zero, the root of one, an irrational result such as $\\sqrt{10} \\approx 3.1623$, a negative radicand under a cube root, and a radical that can be simplified, such as $\\sqrt{50} = 5\\sqrt{2}$. Switching to **Cube** changes the concept text and the computation: $\\sqrt[3]{50} \\approx 3.6840$.

In Laws mode the card names the law, explains why it holds and shows a common mistake. In Compare mode it explains how the two radicals are compared.

Below the card, Calculate mode also shows a reference table of perfect powers near your number; click a row to load that radicand. The laws the panel refers to are collected in [properties of roots](!#properties-of-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Roots`,
    content: `A root is a value that, when multiplied by itself a certain number of times, produces a given number. Roots represent the inverse operation of exponentiation. If $2^3 = 8$, then the cube root of $8$ is $2$. Roots "undo" powers.

Mathematicians express roots using radical notation with the radical symbol √. The **radicand** is the number under the symbol whose root you're finding. The **index** or **degree** is the small number indicating how many times to multiply. In $\\sqrt[3]{27}$, the radicand is $27$ and the index is $3$.

When no index appears, it's implicitly $2$, meaning square root. Writing √$16$ is the same as $\\sqrt[2]{16}$. Both mean "what squared equals $16$?" The answer is $4$. For cube roots, you write the $3$ explicitly: $\\sqrt[3]{8} = 2$.

Roots connect to exponents through fractional powers. The square root of $x$ equals $x^{1/2}$. The cube root of $x$ equals $x^{1/3}$. The nth root of $x$ equals $x^{1/n}$. This connection lets calculators and computers compute roots using exponentiation: $\\sqrt[4]{81} = 81^{1/4} = 3$.

In Calculate mode the three buttons pick the index: [square roots](!#square-roots), [cube roots](!#cube-roots), or any index with [nth roots](!#nth-roots). The definition is in [what is a root](!/algebra/roots#1), the notation in [radical and exponent notation](!/algebra/roots#4), and the link to powers in [connection to powers](!/algebra/roots#10).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Types of Roots Explained`,
    content: `**Square roots** are the most common roots. The square root of $x$ asks: "What number squared equals $x$?" Since $7^2 = 49$, we know $\\sqrt{49} = 7$. Square roots only work with non-negative numbers in real mathematics. Every positive number has two square roots (positive and negative), but calculators typically show only the principal (positive) root.

**Cube roots** involve three multiplications. The cube root of $x$ asks: "What number cubed equals $x$?" Since $4^3 = 64$, we know $\\sqrt[3]{64} = 4$. Unlike square roots, cube roots work with negative numbers: $\\sqrt[3]{-27} = -3$ because $(-3)^3 = -27$. Every real number has exactly one real cube root.

**Fourth roots and higher** follow the same pattern. The fourth root asks about four multiplications, the fifth about five, and so on. Even roots (2nd, 4th, 6th) behave like square roots—they don't accept negative inputs. Odd roots (3rd, 5th, 7th) behave like cube roots—they accept negative inputs.

[Principal roots](!/algebra/roots/properties#3) are the primary values calculators return. For even roots of positive numbers, this is the positive root. For $\\sqrt{16}$, both $4$ and $-4$ work mathematically ($4^2 = 16$ and $(-4)^2 = 16$), but calculators show $4$ as the principal root. The even and odd cases are compared in [even vs odd at a glance](!/algebra/roots/properties#9), and the root functions in [parent functions at a glance](!/algebra/roots/functions#11).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Properties of Roots`,
    content: `[Product property](!#the-product-rule-for-radicals): The root of a product equals the product of roots: $\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}$. For example, $\\sqrt{36} = \\sqrt{4 \\times 9} = \\sqrt{4} \\times \\sqrt{9} = 2 \\times 3 = 6$. This works for all roots: $\\sqrt[3]{8 \\times 27} = \\sqrt[3]{8} \\times \\sqrt[3]{27} = 2 \\times 3 = 6$.

[Quotient property](!#the-quotient-rule-for-radicals): The root of a quotient equals the quotient of roots: $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$. For example, $\\sqrt{\\frac{25}{4}} = \\frac{\\sqrt{25}}{\\sqrt{4}} = \\frac{5}{2} = 2.5$. This property helps simplify complex radical expressions.

[Power property](!#power-of-a-root): Taking a root and raising to a power are inverse operations: $(\\sqrt[n]{a})^n = a$ and $\\sqrt[n]{a^n} = a$ (for non-negative $a$ and even $n$). For example, $(\\sqrt{5})^2 = 5$ and $\\sqrt{3^2} = 3$. This relationship shows how roots "undo" exponents.

**Simplification**: Roots of perfect powers simplify to whole numbers. $\\sqrt{49} = 7$, $\\sqrt[3]{125} = 5$, $\\sqrt[4]{16} = 2$. Non-perfect powers remain as decimals or can be simplified using the product property: $\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$.

Laws mode also covers [nested radicals](!#nested-radicals), [rationalizing the denominator](!#rationalizing-the-denominator) and the [exponent form](!#exponent-form) of a root. Every law is an exponent law in disguise, because a root is a fractional power. The rules are collected in [rules for radicals](!/algebra/roots#5) and [summary of radical rules](!/algebra/roots/radical-rules#8); simplification is taught in [factoring out perfect powers](!/algebra/roots/simplifying#2) and [operations strategy](!/algebra/roots/operations#9).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Mathematical Tools`,
    content: `**Exponent Calculator** - Compute powers and exponents, the inverse operation of roots. If roots ask "what base gives this result," exponents compute the result directly. Use both calculators together to understand the relationship between powers and roots.

**Logarithm Calculator** - Find exponents when you know the base and result. Logarithms, exponents, and roots form a connected triangle of inverse operations in mathematics.

**Fraction Calculator** - Simplify radical expressions that produce fractions. Many root calculations yield fractional results, and this calculator helps reduce them to lowest terms.

**Complex Numbers Calculator** - Handle square roots of negative numbers by working with imaginary numbers. While the root calculator rejects negative square roots, complex numbers extend mathematics to include them.

**Perfect Squares Table** - Reference chart showing squares and square roots of common integers. Quickly check if a number is a perfect square.

**Perfect Cubes Table** - Reference chart showing cubes and cube roots of common integers. Identify perfect cubes at a glance.

For deeper theoretical understanding, explore **radical expressions**, **rational exponents**, **root simplification**, **irrational numbers**, and **nth root functions**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Using Laws Mode`,
    content: `Click the **Laws** tab to apply one radical law to numbers of your own. The left card lists six laws as buttons, each with its formula: product rule, quotient rule, power of a root, nested radicals, rationalize and exponent form. The product rule is selected when you open the mode.

Under the buttons, the input row shows the boxes the law needs: two radicands $a$ and $b$ and an index $n$ for the product and quotient rules, a radicand, a power $m$ and an index for the power of a root, two indices for nested radicals, and one radicand and index for rationalizing and the exponent form. The boxes start with sample values, so a result is visible at once: $\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$, and with $a = 27$ the product becomes $\\sqrt{81} = 9$. The quotient rule starts with $\\sqrt{50} / \\sqrt{2} = \\sqrt{25} = 5$, the power of a root with $(\\sqrt{4})^3 = \\sqrt{64} = 8$, and nested radicals with $\\sqrt{\\sqrt[3]{64}} = \\sqrt[6]{64} = 2$.

The **Step-by-step** list under the inputs rewrites your numbers with the law: the starting expression, the law applied, the value, and a direct check. Change a box and the steps follow at once.

The **How this works** card on the right explains the selected law and warns about its most common mistake. All six laws are summarised in [properties of roots](!#properties-of-roots).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Using Compare Mode`,
    content: `Click the **Compare** tab to set two radicals side by side. The card shows **Expression A** and **Expression B**, each with a small index box and a radicand box, and prints the value of each as you type. The mode opens with $\\sqrt{50} \\approx 7.0711$ against $\\sqrt[3]{125} = 5$, so A is larger, about $1.414$ times.

The **Verdict** line says which expression is larger, or that they are equal, and gives the ratio. Under it, a row of figures lists both values to six decimals, the ratio $A / B$ and the difference $A - B$; when the indices differ, it also restates both radicals over a common index.

Type $49$ under the radical of A for $\\sqrt{49} = 7$ against $5$; type $343$ under the radical of B and $\\sqrt[3]{343} = 7$ makes the two equal; change the index of B to $2$ and $\\sqrt{343} \\approx 18.5203$ makes B the larger one.

An even root of a negative number shows a dash, since it has no real value. How radicals with different indices are compared is explained in [comparing two radicals](!#comparing-two-radicals).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Square Roots`,
    content: `The square root of a non-negative number $a$ is the non-negative number whose square is $a$: $\\sqrt{25} = 5$ because $5^2 = 25$. Perfect squares give whole numbers, $\\sqrt{144} = 12$; every other positive number gives an irrational decimal, $\\sqrt{2} \\approx 1.4142$ and $\\sqrt{50} \\approx 7.0711$.

Two numbers square to $25$, namely $5$ and $-5$, but the radical sign means the principal root, the non-negative one. The solutions of $x^2 = 25$ are written $x = \\pm\\sqrt{25}$. A square root is often left exact and simplified instead of rounded: $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$.

No real number squares to a negative number, since a square is never negative, so $\\sqrt{-25}$ is not real; the calculator reports it as imaginary. In the complex numbers it is $5i$. The common mistake is to write $\\sqrt{25} = \\pm 5$: the radical itself is $5$, and the $\\pm$ belongs to the equation.

See [square roots, cube roots, and beyond](!/algebra/roots#2), [principal root convention](!/algebra/roots/properties#3) and [even index radicals](!/algebra/roots/properties#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Cube Roots`,
    content: `The cube root of $a$ is the number whose cube is $a$: $\\sqrt[3]{27} = 3$ because $3^3 = 27$, and $\\sqrt[3]{1000} = 10$. For a number that is not a perfect cube the root is an irrational decimal: $\\sqrt[3]{10} \\approx 2.1544$ and $\\sqrt[3]{25} \\approx 2.9240$.

Every real number has exactly one real cube root, negative numbers included, because a cube keeps the sign of its base: $\\sqrt[3]{-8} = -2$ since $(-2)^3 = -8$. There is no principal-root choice to make, as there is for even indices, and no imaginary case.

Cube roots turn a volume back into an edge length: a cube of volume $27$ cubic units has edge $3$. The common mistake is to treat $\\sqrt[3]{-8}$ like $\\sqrt{-8}$ and declare it impossible, or to halve instead of taking a root: $\\sqrt[3]{1000}$ is $10$, not $500$.

See [odd index radicals](!/algebra/roots/properties#2), [when radicands are negative](!/algebra/roots#9) and [the cube root function](!/algebra/roots/functions#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Nth Roots`,
    content: `The $n$-th root of $a$ is the number whose $n$-th power is $a$, written $\\sqrt[n]{a}$ with the index $n$ in the crook of the radical sign: $\\sqrt[4]{81} = 3$ because $3^4 = 81$, $\\sqrt[5]{32} = 2$ because $2^5 = 32$, $\\sqrt[10]{1024} = 2$. An index of $2$ is a square root and is usually left unwritten; an index of $1$ returns the number itself.

The sign rules follow the parity of the index. For an even $n$ the radicand must be non-negative and the principal root is the non-negative one; $\\sqrt[4]{-16}$ is not real. For an odd $n$ every real radicand works and the root keeps its sign: $\\sqrt[5]{-32} = -2$.

By the exponent form, $\\sqrt[n]{a} = a^{1/n}$, which is how the calculator evaluates any index: $\\sqrt[4]{25} = 25^{0.25} \\approx 2.2361$. The common mistake is to divide the radicand by the index: $\\sqrt[4]{81}$ is $3$, not $20.25$.

See [square roots, cube roots, and beyond](!/algebra/roots#2), [domain and range by index](!/algebra/roots/properties#6) and [general nth root functions](!/algebra/roots/functions#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `The Product Rule for Radicals`,
    content: `Roots with the same index multiply under one radical: $\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$, for radicands that are allowed under that index.

Example: $\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$, and with $27$ instead of $12$, $\\sqrt{27} \\cdot \\sqrt{3} = \\sqrt{81} = 9$. The rule is the exponent law $a^{1/n} b^{1/n} = (ab)^{1/n}$ in radical dress.

Read from right to left it simplifies radicals: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$, which the calculator shows as the simplified radical form. The common mistake is to multiply radicals of different indices under one sign: $\\sqrt{2} \\cdot \\sqrt[3]{2}$ is not $\\sqrt{4}$; the indices must match first. Another is to apply the rule to a sum: $\\sqrt{a + b}$ is not $\\sqrt{a} + \\sqrt{b}$, since $\\sqrt{9 + 16} = 5$ while $3 + 4 = 7$.

See [product rule](!/algebra/roots/radical-rules#1) and [multiplying radicals with the same index](!/algebra/roots/operations#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `The Quotient Rule for Radicals`,
    content: `Roots with the same index divide under one radical: $\\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\dfrac{a}{b}}$, with $b \\neq 0$.

Example: $\\sqrt{50} / \\sqrt{2} = \\sqrt{25} = 5$. In the other direction, $\\sqrt{\\dfrac{25}{4}} = \\dfrac{\\sqrt{25}}{\\sqrt{4}} = \\dfrac{5}{2}$. The rule is the exponent law $a^{1/n} / b^{1/n} = (a/b)^{1/n}$.

It is used to take roots of fractions one part at a time and, together with rationalizing, to clear roots out of denominators. The common mistake is to split a root over a difference: $\\sqrt{a - b}$ is not $\\sqrt{a} - \\sqrt{b}$; $\\sqrt{25 - 9} = 4$ while $5 - 3 = 2$. As with the product rule, the indices must agree.

See [quotient rule](!/algebra/roots/radical-rules#2) and [dividing radicals](!/algebra/roots/operations#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Power of a Root`,
    content: `A root raised to a power equals the root of the power: $(\\sqrt[n]{a})^m = \\sqrt[n]{a^m} = a^{m/n}$.

Example: $(\\sqrt{4})^3 = 2^3 = 8$, and $\\sqrt{4^3} = \\sqrt{64} = 8$ as well; both equal $4^{3/2}$. Likewise $(\\sqrt[3]{8})^2 = 4 = 8^{2/3}$. The special case $m = n$ undoes the root: $(\\sqrt[n]{a})^n = a$, and for an odd index $\\sqrt[n]{a^n} = a$ too, while for an even index $\\sqrt{a^2} = |a|$, so $\\sqrt{(-3)^2} = 3$.

The rule lets you take the root first, when the radicand is a perfect power, and raise the small number instead of the large one. The common mistake is to confuse the two numbers in the fraction: $a^{m/n}$ has the power $m$ on top and the index $n$ below, so $4^{3/2} = 8$, not $4^{2/3}$.

See [power rule](!/algebra/roots/radical-rules#3) and [the identity for even roots](!/algebra/roots/properties#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `Nested Radicals`,
    content: `A root of a root is a single root whose index is the product of the two indices: $\\sqrt[n]{\\sqrt[m]{a}} = \\sqrt[nm]{a}$.

Example: $\\sqrt{\\sqrt[3]{64}} = \\sqrt[6]{64} = 2$, because $2^6 = 64$; checking the long way, $\\sqrt[3]{64} = 4$ and $\\sqrt{4} = 2$. The rule is the exponent law $(a^{1/m})^{1/n} = a^{1/(mn)}$. The order of the two roots does not matter: $\\sqrt[3]{\\sqrt{64}} = \\sqrt[3]{8} = 2$ as well.

The common mistake is to add the indices: $\\sqrt{\\sqrt[3]{64}}$ is not $\\sqrt[5]{64} \\approx 2.2974$. For even indices the inner radicand must be non-negative at each stage.

See [radical of a radical](!/algebra/roots/radical-rules#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj20: {
    title: `Rationalizing the Denominator`,
    content: `Rationalizing rewrites a fraction so that no root remains in the denominator, by multiplying top and bottom by the same radical: $\\dfrac{1}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}} \\cdot \\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2} \\approx 0.7071$.

For a higher index, multiply by the power that completes the radicand: $\\dfrac{1}{\\sqrt[3]{2}} = \\dfrac{\\sqrt[3]{4}}{\\sqrt[3]{8}} = \\dfrac{\\sqrt[3]{4}}{2} \\approx 0.7937$. In general, $\\dfrac{1}{\\sqrt[n]{a}} = \\dfrac{\\sqrt[n]{a^{n-1}}}{a}$. The value does not change, since the fraction was multiplied by $1$.

Rationalized forms were the standard before calculators, because dividing by a decimal root by hand is awkward, and they are still the expected simplest form. The common mistake is to multiply only the denominator: $\\dfrac{1}{\\sqrt{2}}$ is not $\\dfrac{1}{2}$.

See [rationalizing monomial denominators](!/algebra/roots/simplifying#5) and [rationalizing higher-index denominators](!/algebra/roots/simplifying#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `Exponent Form`,
    content: `Every root is a fractional power: $\\sqrt[n]{a} = a^{1/n}$. $\\sqrt[3]{8} = 8^{1/3} = 2$, $\\sqrt[4]{81} = 81^{0.25} = 3$, $\\sqrt{50} = 50^{1/2}$, which the calculator lists as the fractional exponent form.

The exponent form is why every radical law is an exponent law: the product rule is $a^{1/n} b^{1/n} = (ab)^{1/n}$, the power of a root is $(a^{1/n})^m = a^{m/n}$, and nested radicals are $(a^{1/m})^{1/n} = a^{1/(mn)}$. Combining a power and a root gives a general rational exponent: $\\sqrt[3]{8^2} = 8^{2/3} = 4$.

It is also how computers evaluate roots, through logarithms and exponentials. The common mistake is to read $a^{1/n}$ as $a / n$: $8^{1/3}$ is $2$, not $8/3$.

See [radical and exponent notation](!/algebra/roots#4), [unit fraction exponents](!/algebra/roots/rational-exponents#1) and [converting between forms](!/algebra/roots/rational-exponents#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `Comparing Two Radicals`,
    content: `Two radicals with the same index compare like their radicands: $\\sqrt{50} > \\sqrt{49}$ because $50 > 49$, since the root function increases.

With different indices, bring both to a common index first. For $\\sqrt{50}$ against $\\sqrt[3]{125}$ the common index is $6$: $\\sqrt{50} = \\sqrt[6]{50^3} = \\sqrt[6]{125000}$ and $\\sqrt[3]{125} = \\sqrt[6]{125^2} = \\sqrt[6]{15625}$, so the square root is larger. The values agree: $7.0711$ against $5$, a ratio of about $1.414$. The exponent form gives the same test with fractions: compare $50^{1/2}$ with $125^{1/3}$ by raising both to the $6$-th power.

The common mistake is to compare radicands across indices: $\\sqrt[3]{343} = 7$ is far smaller than $\\sqrt{343} \\approx 18.5203$ although the radicands are equal, because a higher index pulls the value down faster.

See [multiplying radicals with different indices](!/algebra/roots/operations#4) and [combining radicals via exponents](!/algebra/roots/rational-exponents#8).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I calculate a square root?",
    answer: "Select Square Root mode, enter your number in the input field, and click Calculate. The square root is the value that, when multiplied by itself, equals your input. For example, the square root of 25 is 5 because 5 × 5 = 25. The calculator works with perfect squares and provides decimal approximations for non-perfect squares."
  },
  obj2: {
    question: "Can I find cube roots of negative numbers?",
    answer: "Yes, cube roots work with negative numbers. Enter a negative value in Cube Root mode and click Calculate. For example, the cube root of -8 is -2 because (-2) × (-2) × (-2) = -8. Unlike square roots, odd-degree roots (cube, 5th, 7th, etc.) accept negative inputs."
  },
  obj3: {
    question: "What is an nth root and how do I use it?",
    answer: "An nth root is a generalization where n can be any positive number. Select Nth Root mode, enter your desired n value in the small left box (like 4 for fourth root or 5 for fifth root), enter your number in the main field, and click Calculate. The result is the value that, when raised to the nth power, equals your input."
  },
  obj4: {
    question: "Why does the calculator show errors for some inputs?",
    answer: "Errors appear for mathematically impossible operations. Square roots and even-degree roots (4th, 6th, etc.) cannot be calculated for negative numbers in real mathematics. Also, the nth root requires n to be a positive number greater than zero. Make sure your inputs are valid for the selected root type."
  },
  obj5: {
    question: "How accurate are the decimal results?",
    answer: "The calculator displays results to four decimal places for precision. It uses JavaScript's built-in Math.sqrt() and Math.pow() functions, which provide high accuracy for most practical purposes. Results for perfect roots (like square root of 25 = 5.0000) are exact, while imperfect roots (like square root of 2 = 1.4142) are precise approximations."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Root Calculator - Square, Cube & Nth Roots",
    "description": "Free online root calculator for calculating square roots, cube roots, and nth roots. Get instant results with step-by-step explanations for any number.",
    "url": "https://www.learnmathclass.com/calculators/root-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Calculate square roots of any non-negative number",
      "Calculate cube roots including negative numbers",
      "Calculate nth roots with custom degree values",
      "Decimal precision to 4 decimal places",
      "Built-in explanations for each root type",
      "Error validation for invalid inputs",
      "Interactive tooltips for guidance",
      "Links to related educational resources"
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
        "name": "Root Calculator",
        "item": "https://www.learnmathclass.com/calculators/root-calculator"
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
      title: "Root Calculator | Square, Cube & Nth Root Online",
      description: "Free root calculator for square roots, cube roots, and nth roots. Calculate any root instantly with step-by-step explanations and examples.",
      keywords: keyWords.join(", "),
      url: "/calculators/root-calculator",
      name: "Root Calculator - Square, Cube & Nth Root Tool"
    },
  },
  revalidate: 86400
};
}

export default function RootCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, explanations, demos, navigationGroup, faqQuestions, schemas}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.4}
    minHeight={480}
    renderText={processContent}
  >
    <RootCalculator explanations={explanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-root-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-root-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'using-square-root-mode',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('using-square-root-mode'), sectionsContent.obj2.content],
  },
  {
    id: 'using-cube-root-mode',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('using-cube-root-mode'), sectionsContent.obj3.content],
  },
  {
    id: 'using-nth-root-mode',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('using-nth-root-mode'), sectionsContent.obj4.content],
  },
  {
    id: 'reading-results-and-understanding-output',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('reading-results-and-understanding-output'), sectionsContent.obj5.content],
  },
  {
    id: 'using-the-explanation-panel',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('using-the-explanation-panel'), sectionsContent.obj6.content],
  },
  {
    id: 'using-laws-mode',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [demoPlayer('using-laws-mode'), sectionsContent.obj11.content],
  },
  {
    id: 'using-compare-mode',
    title: sectionsContent.obj12.title,
    link: sectionsContent.obj12.link,
    content: [demoPlayer('using-compare-mode'), sectionsContent.obj12.content],
  },
  {
    id: 'what-are-roots',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'square-roots',
    title: sectionsContent.obj13.title,
    link: sectionsContent.obj13.link,
    content: [sectionsContent.obj13.content],
  },
  {
    id: 'cube-roots',
    title: sectionsContent.obj14.title,
    link: sectionsContent.obj14.link,
    content: [sectionsContent.obj14.content],
  },
  {
    id: 'nth-roots',
    title: sectionsContent.obj15.title,
    link: sectionsContent.obj15.link,
    content: [sectionsContent.obj15.content],
  },
  {
    id: 'properties-of-roots',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'the-product-rule-for-radicals',
    title: sectionsContent.obj16.title,
    link: sectionsContent.obj16.link,
    content: [sectionsContent.obj16.content],
  },
  {
    id: 'the-quotient-rule-for-radicals',
    title: sectionsContent.obj17.title,
    link: sectionsContent.obj17.link,
    content: [sectionsContent.obj17.content],
  },
  {
    id: 'power-of-a-root',
    title: sectionsContent.obj18.title,
    link: sectionsContent.obj18.link,
    content: [sectionsContent.obj18.content],
  },
  {
    id: 'nested-radicals',
    title: sectionsContent.obj19.title,
    link: sectionsContent.obj19.link,
    content: [sectionsContent.obj19.content],
  },
  {
    id: 'rationalizing-the-denominator',
    title: sectionsContent.obj20.title,
    link: sectionsContent.obj20.link,
    content: [sectionsContent.obj20.content],
  },
  {
    id: 'exponent-form',
    title: sectionsContent.obj21.title,
    link: sectionsContent.obj21.link,
    content: [sectionsContent.obj21.content],
  },
  {
    id: 'comparing-two-radicals',
    title: sectionsContent.obj22.title,
    link: sectionsContent.obj22.link,
    content: [sectionsContent.obj22.content],
  },
  {
    id: 'types-of-roots-explained',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'related-calculators-and-mathematical-tools',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
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
        grid-template-columns: 250px 1fr;
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
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'-20px'}}>Root Calculator</h1>
    {/* <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Root Calculator'
      />
    </div> */}
    <div style={{marginTop:'30px',marginBottom:'20px'}}>
      <ExplanationDetails
        instructions={detailInstructions}
        title='How to use Root Calculator'
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
        <div style={{width:'100%', maxWidth:'1200px'}}>
          <RootCalculator explanations={explanations} />
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