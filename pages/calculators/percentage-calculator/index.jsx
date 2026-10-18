import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import PercentageCalculator from '@/app/components/calculators/arithmetics/PercentageCalculator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import Head from 'next/head'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

/* calculators-mesh: finished 2026-10-16 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/calculators/percentage-calculator" in calculators-mesh-registry.json (same folder): 4 usage sections, each with a demo; 7 panel notes; 12 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps() {
const detailInstructions = [
  `Pick a mode with the five radio buttons under **Choose Calculation Mode**; the word between the two boxes changes to show how the numbers are read, and both boxes are cleared. [Learn more about the modes](!#choosing-a-calculation-mode)`,
  `Type the two numbers in the order the row shows, percentage then amount, original then new, part then whole, or numerator then denominator; hover the **?** for a hint. [Learn more about the two numbers](!#entering-the-two-numbers)`,
  `In **Add/Subtract Percentage**, pick **% added to** or **% subtracted from** in the drop-down between the boxes. [Learn more about adding and subtracting](!#entering-the-two-numbers)`,
  `Click **Calculate**; the answer appears after the equals sign with two decimals, with a percent sign in the three percentage modes; **Reset** returns to the first mode with empty boxes. [Learn more about the result](!#calculating-reading-the-result-and-resetting)`,
  `Read the box under the buttons: it explains the selected mode and links to its section below. [Learn more about the explanation box](!#the-explanation-box)`,
];
const percentageExplanations = {
  percentageOf: { title: 'Percentage of a number', content: `Multiplies the whole amount by the percentage as hundredths: $N \\cdot \\frac{p}{100}$, so $20\\%$ of $150$ is $30$. Used for discounts, tips and shares of a total. [Learn more about percentage of a number](!#percentage-of-a-number) · [All five calculations](!#the-five-percentage-calculations)` },
  percentageChange: { title: 'Percentage change', content: `Divides the difference by the original value and multiplies by $100$: $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\cdot 100$; a decrease comes out negative. Used for prices, growth and rates. [Learn more about percentage change](!#percentage-change) · [All five calculations](!#the-five-percentage-calculations)` },
  reversePercentage: { title: 'Percentage ratio', content: `Finds what percent the part is of the whole: $\\frac{\\text{part}}{\\text{whole}} \\cdot 100$, so $30$ of $120$ is $25\\%$. [Learn more about the percentage ratio](!#what-percent-one-number-is-of-another) · [All five calculations](!#the-five-percentage-calculations)` },
  addSubtractPercentage: { title: 'Add or subtract a percentage', content: `Scales the base number by $1 \\pm \\frac{p}{100}$; pick the direction in the drop-down between the boxes. [All add and subtract cases](!#adding-and-subtracting-a-percentage)` },
  'addSubtractPercentage:add': { title: 'Adding a percentage', content: `Increases the base number by $p\\%$: $N \\cdot \\left(1 + \\frac{p}{100}\\right)$, so $15\\%$ added to $200$ is $230$. Used for mark-ups, taxes and raises. [Learn more about adding a percentage](!#adding-a-percentage) · [All add and subtract cases](!#adding-and-subtracting-a-percentage)` },
  'addSubtractPercentage:subtract': { title: 'Subtracting a percentage', content: `Decreases the base number by $p\\%$: $N \\cdot \\left(1 - \\frac{p}{100}\\right)$, so $15\\%$ subtracted from $200$ is $170$. Used for discounts and losses. [Learn more about subtracting a percentage](!#subtracting-a-percentage) · [All add and subtract cases](!#adding-and-subtracting-a-percentage)` },
  fractionToPercentage: { title: 'Fraction to percentage', content: `Divides the numerator by the denominator and multiplies by $100$: $\\frac{3}{8}$ is $37.5\\%$. [Learn more about fraction to percentage](!#fraction-to-percentage) · [All five calculations](!#the-five-percentage-calculations)` },
};
const demos = {
  'choosing-a-calculation-mode': {
    title: 'Three of the five modes',
    scale: 0.6,
    minHeight: 302,
    script: [
      { say: 'CLICK Calculate Percentage Change\nThe row now reads "changed to"; both boxes are cleared.', at: 'tr' },
      { click: '#percentageChange' },
      { wait: 2600 },
      { say: 'CLICK Add/Subtract Percentage\nA drop-down appears between the boxes: % added to, % subtracted from.', at: 'tr' },
      { click: '#addSubtractPercentage' },
      { wait: 2600 },
      { say: 'CLICK Fraction to Percentage\nThe row reads "/": numerator over denominator.', at: 'tr' },
      { click: '#fractionToPercentage' },
      { wait: 2600 },
    ],
  },
  'entering-the-two-numbers': {
    title: 'Three modes with their two numbers',
    scale: 0.6,
    minHeight: 302,
    script: [
      { say: 'TYPE 20 and 150, CLICK Calculate\n20% of 150 = 30.00.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '20' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '150' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 2800 },
      { say: 'CLICK Calculate Percentage Ratio, TYPE 30 and 120, CLICK Calculate\n30 is what % of 120: 25.00%.', at: 'tr' },
      { click: '#reversePercentage' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '30' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '120' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 3000 },
      { say: 'CLICK Fraction to Percentage, TYPE 3 and 8, CLICK Calculate\n3 / 8 = 37.50%.', at: 'tr' },
      { click: '#fractionToPercentage' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '8' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 3000 },
    ],
  },
  'calculating-reading-the-result-and-resetting': {
    title: 'A change, an error, a subtraction, Reset',
    scale: 0.6,
    minHeight: 302,
    script: [
      { say: 'CLICK Calculate Percentage Change, TYPE 80 and 100, CLICK Calculate\n80 changed to 100: 25.00%.', at: 'tr' },
      { click: '#percentageChange' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '80' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '100' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 3000 },
      { say: 'CLICK Add/Subtract Percentage, CLICK Calculate\nThe boxes were cleared by the mode change: Error: Invalid input.', at: 'tr' },
      { click: '#addSubtractPercentage' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 2800 },
      { say: 'TYPE 15 and 200, PICK % subtracted from, CLICK Calculate\n15% subtracted from 200 = 170.00.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '15' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '200' },
      { set: { css: 'select', nth: 0 }, value: 'subtract' },
      { click: { button: 'Calculate', exact: true } },
      { wait: 3000 },
      { say: 'CLICK Reset\nBack to Calculate Percentage of a Number, empty boxes, % added to.', at: 'tr' },
      { click: { button: 'Reset', exact: true } },
      { wait: 2600 },
    ],
  },
  'the-explanation-box': {
    title: 'The box for two modes and the subtract option',
    scale: 0.6,
    minHeight: 302,
    script: [
      { say: 'CLICK Calculate Percentage Change\nThe box explains the change formula and links to its section.', at: 'tr' },
      { click: '#percentageChange' },
      { wait: 2600 },
      { say: 'CLICK Add/Subtract Percentage\nThe note for adding a percentage: mark-ups and taxes.', at: 'tr' },
      { click: '#addSubtractPercentage' },
      { wait: 2600 },
      { say: 'PICK % subtracted from\nThe note changes to subtracting a percentage: discounts.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'subtract' },
      { wait: 2600 },
    ],
  },
};
const sectionsContent = {
  obj1: {
    title: `Choosing a Calculation Mode`,
    content: `The calculator opens under the heading **Choose Calculation Mode** with five radio buttons: **Calculate Percentage of a Number**, **Calculate Percentage Change**, **Calculate Percentage Ratio**, **Add/Subtract Percentage** and **Fraction to Percentage**. The first is selected when the page loads. Clicking another mode changes the word between the two boxes, which tells you how the numbers are read: "% of", "changed to", "is what % of", a small drop-down with "% added to" and "% subtracted from", or "/" for a fraction. The explanation box under the buttons changes with the mode too.

Switching mode empties both boxes and the result, so pick the mode first and type afterwards. Each mode is one formula: a percentage of a number, the percentage change from an old value to a new one, the percentage one number is of another, a number increased or decreased by a percentage, and a fraction written as a percentage. The five formulas are compared in [The Five Percentage Calculations](!#the-five-percentage-calculations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Entering the Two Numbers`,
    content: `Every mode takes two numbers, typed in the two boxes on the calculator row. The word between them says how they are read, and the small **?** before each box shows a hint on hover: in **Calculate Percentage of a Number** the first box is the percentage and the second the whole amount, so $20$ and $150$ means $20\\%$ of $150$; in **Calculate Percentage Change** the first box is the original value and the second the new value; in **Calculate Percentage Ratio** the first is the part and the second the whole, so $30$ and $120$ asks what percent $30$ is of $120$; in **Add/Subtract Percentage** the first is the percentage and the second the base number; in **Fraction to Percentage** they are the numerator and the denominator, so $3$ and $8$ is $\\frac{3}{8}$.

The boxes accept decimals and negative numbers; the percent sign is never typed, the calculator supplies it. Nothing is computed until you click **Calculate**, so you can correct a number before asking for the answer. Which number goes first matters in every mode except the fraction, where swapping gives the reciprocal: the formulas are set out in [The Five Percentage Calculations](!#the-five-percentage-calculations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Calculating, Reading the Result and Resetting`,
    content: `Click **Calculate** and the answer appears after the equals sign at the end of the row, rounded to two decimals. In three modes it carries a percent sign: the percentage change, the percentage ratio and the fraction to percentage, so $80$ changed to $100$ reads $25.00\\%$, $30$ is what $\\%$ of $120$ reads $25.00\\%$ and $3 / 8$ reads $37.50\\%$. In the other two the answer is an amount: $20\\%$ of $150$ reads $30.00$, and $15\\%$ subtracted from $200$ reads $170.00$. A decrease shows as a negative change, $100$ changed to $80$ gives $-20.00\\%$.

If a box is empty or holds something that is not a number, the row reads "Error: Invalid input"; type both numbers and click Calculate again. A percentage change from an original value of $0$ has no answer, and the row says "Error: The original value cannot be 0"; a whole or a denominator of $0$ is refused the same way. Typing in either box clears the old answer. **Reset** returns the calculator to its opening state: the first mode, both boxes empty, the drop-down back on "% added to". The result of a mode change is also a cleared row, since the two boxes are emptied. How each answer is formed is explained in [The Five Percentage Calculations](!#the-five-percentage-calculations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `The Explanation Box`,
    content: `The box under the Calculate and Reset buttons explains the selected mode in a few sentences: what the calculation finds and where it is used, such as discounts and tips for a percentage of a number, or price rises and population growth for a percentage change. It ends with a link to the section of this page that explains the formula, and it changes the moment you click another mode, before any number is typed.

In **Add/Subtract Percentage** the box follows the drop-down as well, so "% added to" and "% subtracted from" each have their own note, one for a mark-up or tax, one for a discount. The box does not react to the numbers you type; it describes the formula, while the row above shows the result. Read the two together: the row gives the answer, the box tells you what the answer means. The formulas themselves are in [The Five Percentage Calculations](!#the-five-percentage-calculations), starting with [Percentage of a Number](!#percentage-of-a-number).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The Five Percentage Calculations`,
    content: `A percentage is a number of hundredths: $p\\%$ means $\\frac{p}{100}$. Every mode of this calculator is one use of that definition. [Percentage of a Number](!#percentage-of-a-number) multiplies: $p\\%$ of $N$ is $N \\cdot \\frac{p}{100}$. [Percentage Change](!#percentage-change) divides a difference by the starting value: $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\cdot 100$. [What Percent One Number Is of Another](!#what-percent-one-number-is-of-another) divides a part by a whole: $\\frac{\\text{part}}{\\text{whole}} \\cdot 100$. [Adding and Subtracting a Percentage](!#adding-and-subtracting-a-percentage) scales a number by $1 \\pm \\frac{p}{100}$, and [Fraction to Percentage](!#fraction-to-percentage) is the ratio formula applied to a numerator and a denominator.

One example runs through all five: $20\\%$ of $150$ is $30$; going from $150$ to $180$ is a $20\\%$ change; $30$ is $20\\%$ of $150$; $150$ plus $20\\%$ is $180$ and minus $20\\%$ is $120$; and $\\frac{30}{150}$ is $20\\%$. The common mistake across all of them is to forget the factor $100$, or to apply it twice. The percent sign and its meaning are listed in the [arithmetic symbols reference](!/math-symbols/arithmetic).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Percentage of a Number`,
    content: `To take $p\\%$ of a number $N$, turn the percentage into a fraction of one hundred and multiply: $N \\cdot \\frac{p}{100}$. For $20\\%$ of $150$: $150 \\cdot 0.20 = 30$. The calculator's first mode does exactly this, with the percentage in the first box and the amount in the second, so $20$ and $150$ give $30.00$.

This is the calculation behind tips, discounts and shares of a total: a $15\\%$ tip on $60$ is $9$, a $30\\%$ discount on $80$ is $24$. Two shortcuts help with mental arithmetic: $10\\%$ is a shift of the decimal point, and $p\\%$ of $N$ equals $N\\%$ of $p$, so $8\\%$ of $25$ is $25\\%$ of $8$, which is $2$. The common mistake is to divide by the percentage instead of by $100$, or to read the answer as the new price when the question asked for the discount alone; for the new price use [Adding and Subtracting a Percentage](!#adding-and-subtracting-a-percentage).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Percentage Change`,
    content: `The percentage change from an old value to a new one is the difference divided by the old value, times $100$: $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\cdot 100$. From $80$ to $100$ the change is $\\frac{20}{80} \\cdot 100 = 25\\%$; from $100$ back to $80$ it is $\\frac{-20}{100} \\cdot 100 = -20\\%$, not $-25\\%$, because the base has changed. The calculator's second mode takes the original value first and the new value second and marks a decrease with a minus sign.

The base is always the starting value, which is the usual mistake: dividing by the new value, or by the difference. A change from $0$ has no percentage, since nothing can be divided by the starting value; the calculator answers "The original value cannot be 0" in that case. Percentage points are a different measure: a rate moving from $4\\%$ to $5\\%$ rises by one point but by $25\\%$ in relative terms.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `What Percent One Number Is of Another`,
    content: `To express a part as a percentage of a whole, divide and multiply by $100$: $\\frac{\\text{part}}{\\text{whole}} \\cdot 100$. $30$ out of $120$ is $\\frac{30}{120} \\cdot 100 = 25\\%$; $45$ out of $60$ is $75\\%$. The calculator's third mode, labelled **Calculate Percentage Ratio**, takes the part first and the whole second and adds the percent sign to the answer.

This is the reverse of taking a percentage of a number, which is why the answer can be checked by going back: $25\\%$ of $120$ is $30$. The part may exceed the whole, giving more than $100\\%$: $150$ out of $120$ is $125\\%$. The common mistake is to swap the two numbers, which gives the reciprocal percentage, $400\\%$ instead of $25\\%$ in the example; the hints on the two boxes name the part and the whole to prevent it.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Adding and Subtracting a Percentage`,
    content: `Increasing or decreasing a number by a percentage is one multiplication: $N \\cdot \\left(1 + \\frac{p}{100}\\right)$ to add, $N \\cdot \\left(1 - \\frac{p}{100}\\right)$ to subtract. The calculator's fourth mode offers the two directions in a drop-down between the boxes, "% added to" and "% subtracted from", with the percentage in the first box and the base number in the second. The two cases have their own sections: [Adding a Percentage](!#adding-a-percentage) for mark-ups, taxes and growth, and [Subtracting a Percentage](!#subtracting-a-percentage) for discounts and losses.

With $p = 15$ and $N = 200$ the two answers are $230$ and $170$. The shared rule is that the percentage is taken of the base number, never of the result: adding $15\\%$ and then subtracting $15\\%$ does not return to the start, since the second $15\\%$ is taken of $230$ and gives $195.50$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Adding a Percentage`,
    content: `Adding $p\\%$ to a number $N$ gives $N + N \\cdot \\frac{p}{100} = N \\cdot \\left(1 + \\frac{p}{100}\\right)$. For $15\\%$ added to $200$: $200 \\cdot 1.15 = 230$; the calculator shows $230.00$ when the drop-down reads "% added to". A sales tax of $8\\%$ on $50$ gives $54$, and a $3\\%$ raise on $2{,}000$ gives $2{,}060$.

The factor form is the one to remember: a $15\\%$ increase is multiplication by $1.15$, so two such increases multiply by $1.15^2 = 1.3225$, a rise of $32.25\\%$ rather than $30\\%$. The common mistake is to add percentage points to the number itself, $200 + 15 = 215$, forgetting that $15\\%$ is a share of $200$, not a count.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Subtracting a Percentage`,
    content: `Subtracting $p\\%$ from a number $N$ gives $N - N \\cdot \\frac{p}{100} = N \\cdot \\left(1 - \\frac{p}{100}\\right)$. For $15\\%$ subtracted from $200$: $200 \\cdot 0.85 = 170$; the calculator shows $170.00$ when the drop-down reads "% subtracted from". A $30\\%$ discount on $80$ leaves $56$; a stock that falls $10\\%$ from $120$ is worth $108$.

A discount followed by the same percentage increase does not restore the price: $170 \\cdot 1.15 = 195.50$, not $200$, because the second percentage is taken of the smaller base. The common mistake is the reverse of the adding case, taking the number of points off the amount, $200 - 15 = 185$. Subtracting more than $100\\%$ gives a negative result, which the calculator reports as such.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj12: {
    title: `Fraction to Percentage`,
    content: `A fraction becomes a percentage by dividing the numerator by the denominator and multiplying by $100$: $\\frac{a}{b} \\cdot 100\\%$. For $\\frac{3}{8}$: $3 \\div 8 = 0.375$, so $37.5\\%$; the calculator's fifth mode, with the numerator in the first box and the denominator in the second, shows $37.50\\%$. Common fractions worth knowing: $\\frac{1}{4} = 25\\%$, $\\frac{1}{3} \\approx 33.33\\%$, $\\frac{2}{5} = 40\\%$, $\\frac{5}{4} = 125\\%$.

The idea is an equivalent fraction with denominator $100$: $\\frac{3}{8} = \\frac{37.5}{100}$. The common mistake is to divide the other way round, $8 \\div 3$, which gives $266.67\\%$; the numerator is the part on top. The parts of a fraction are named in [Numerator and denominator](!/arithmetic/fractions#2), the equivalent-fraction view in [Creating equivalent fractions](!/arithmetic/fractions/equivalent#2), and the division route in [Decimal conversion method](!/arithmetic/fractions/comparing#6).`,
    before: ``,
    after: ``,
    link: '',
  },
};
  return { props: { detailInstructions, percentageExplanations, demos, sectionsContent } };
}

export default function PercentageCalculatorPage({ detailInstructions = [], percentageExplanations = null, demos = {}, sectionsContent = {} }) {
     
    const keyWords=['percentage calculator','percentage']


    
const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      // {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

const demoPlayer = (slug) => (
  <ToolDemoPlayer
    key={`demo-${slug}`}
    script={demos[slug].script}
    title={demos[slug].title}
    label={`Demo: ${demos[slug].title}`}
    scale={demos[slug].scale || 0.6}
    minHeight={demos[slug].minHeight || undefined}
    renderText={processContent}
  >
    <PercentageCalculator explanations={percentageExplanations || undefined} />
  </ToolDemoPlayer>
)
const genericSections = [
  { id: 'choosing-a-calculation-mode', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('choosing-a-calculation-mode'), sectionsContent.obj1.content] },
  { id: 'entering-the-two-numbers', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('entering-the-two-numbers'), sectionsContent.obj2.content] },
  { id: 'calculating-reading-the-result-and-resetting', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('calculating-reading-the-result-and-resetting'), sectionsContent.obj3.content] },
  { id: 'the-explanation-box', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('the-explanation-box'), sectionsContent.obj4.content] },
  { id: 'the-five-percentage-calculations', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [sectionsContent.obj5.content] },
  { id: 'percentage-of-a-number', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [sectionsContent.obj6.content] },
  { id: 'percentage-change', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
  { id: 'what-percent-one-number-is-of-another', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
  { id: 'adding-and-subtracting-a-percentage', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
  { id: 'adding-a-percentage', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
  { id: 'subtracting-a-percentage', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
  { id: 'fraction-to-percentage', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [sectionsContent.obj12.content] },
]

  return (
    <>
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
    <Head>
      <title>Percentage Calculator – Percent of, Change, Increase &amp; Decrease | Learn Math Class</title>
      <meta name="description" content="Free percentage calculator. Find a percentage of a number, percentage change, reverse percentage, add or subtract a percent, and convert fractions to percentages." />
      <meta name="keywords" content={keyWords.join(', ')} />
      <link rel="canonical" href="https://www.learnmathclass.com/calculators/percentage-calculator" />
      <meta property="og:title" content="Percentage Calculator | Learn Math Class" />
      <meta property="og:url" content="https://www.learnmathclass.com/calculators/percentage-calculator" />
    </Head>
    {/* <GenericNavbar/> */}
    <br/>
    <br/>
    <br/>
    <br/>
      <OperaSidebar 
            side='right'
            topOffset='55px' 
            sidebarWidth='45px'
            panelWidth='300px'
            iconColor='white'
            panelBackgroundColor='#f2f2f2'
          /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Percentage Calculator</h1>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails instructions={detailInstructions} title='How to use Percentage Calculator' />
    </div>
   
   
    <div className="layout-container">
    {/* <div style={{
      display: 'grid',
      gridTemplateColumns: '10% 90%',
      gap: '20px',
      width: '100%'
   }}> */}
      {/* Left column - Sidebar */}
      <div>
        <br/>
       
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='200px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'100%',margin:'auto'}}>
          <div style={{transform:'scale(0.95)'}}>
            <PercentageCalculator explanations={percentageExplanations || undefined} />
       
      </div> 
          
       
            <br/>
            <br/>
            <br/>
           
            
         </div>
      </div>
   </div>
   
   {/* <div style={{transform:'scale(0.9)'}}>
    <PercentageCalculator/>
    </div> */}
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}
    
    </>
  )
}
