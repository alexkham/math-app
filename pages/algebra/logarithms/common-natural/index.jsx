import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import { tableHeaders } from '@/app/styles/theme'
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import powersRootsLogsNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/algebra-powers-roots-logarithms'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "common logarithm",
  "natural logarithm",
  "log base 10",
  "ln x",
  "log vs ln",
  "what is e",
  "euler number",
  "log base e",
  "natural log definition",
  "common log examples",
  "change of base formula",
  "ln to log conversion",
  "when to use ln vs log",
  "e 2.71828",
  "logarithm calculator conventions"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj3 — aggregation: three independent definitions of e, all giving the same number
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Definition</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Where it comes from</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Compound interest limit</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e = lim (1 + 1⁄n)ⁿ as n → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">100% interest on $1 with infinitely many compounding periods</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Infinite series</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e = Σ 1⁄n! = 1 + 1 + 1⁄2! + 1⁄3! + ...</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Taylor series of eˣ evaluated at x = 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Calculus characterization</td>
      <td style="padding: 12px 15px; color: #34495e;">unique base a for which d⁄dx aˣ = aˣ</td>
      <td style="padding: 12px 15px; color: #34495e;">the exponential function that is its own derivative</td>
    </tr>
  </tbody>
</table>
`

  // obj4 — aggregation (reference): notation across tools, with the Python trap
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Tool</th>
      <th style="${tableHeaders.aggregation}">Common log (base 10)</th>
      <th style="${tableHeaders.aggregation}">Natural log (base e)</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scientific calculator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LOG key</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LN key</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matches standard mathematical notation</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Python (math module)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">math.log10(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">math.log(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">trap: math.log defaults to natural log, not common</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Excel / Google Sheets</td>
      <td style="padding: 12px 15px; color: #34495e;">LOG(x) or LOG10(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">LN(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">LOG(x, base) handles arbitrary bases</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: log vs ln side-by-side
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Aspect</th>
      <th style="${tableHeaders.summary} text-align: center;">Common log: log(x)</th>
      <th style="${tableHeaders.summary} text-align: center;">Natural log: ln(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Base</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">10</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">e ≈ 2.71828</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Anchor (a, 1) on graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(10, 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(e, 1) ≈ (2.718, 1)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">log(2) reference value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">log(2) ≈ 0.301</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">ln(2) ≈ 0.693</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Steepness (for x &gt; 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">gentler — base 10 is larger</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">steeper — smaller base means faster initial rise</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Calculus property</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">d⁄dx log(x) = 1 ⁄ (x · ln(10))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">d⁄dx ln(x) = 1⁄x — cleanest possible</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Where it shows up</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">Richter scale, decibels, pH, orders of magnitude</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">calculus, continuous growth/decay, theoretical derivations</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Conversion to the other</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">log(x) = ln(x) ⁄ ln(10) ≈ ln(x) ⁄ 2.303</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">ln(x) = log(x) · ln(10) ≈ 2.303 · log(x)</td>
    </tr>
  </tbody>
</table>
`


// Concept introduction (section 1, "The Common Logarithm") — template A,
// definition last. Running instance: log of 7, 70, 700 and 7000, where each
// factor of 10 adds 1. Old obj1 text is kept in sectionsContent.obj1, unused;
// its four passages and the fact aside are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciTensTable = ciTableOpen(['number', 'as a power of 10', 'power']) +
  ciRow(['1000', '10³', '3']) +
  ciRow(['7', '10<sup>0.845</sup>', '0.845'], { shade: true }) +
  ciRow(['70', '10<sup>1.845</sup>', '1.845']) +
  ciRow(['700', '10<sup>2.845</sup>', '2.845'], { shade: true }) +
  ciRow(['7000', '10<sup>3.845</sup>', '3.845'], { last: true, color: '#2563EB', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {
  
obj0: {
  title: `Key Terms`,
  content: `
## The Two Special Bases
 
- [Common Logarithm](!/algebra/definitions#common_logarithm) — base $10$, written $\\log(x)$
- [Natural Logarithm](!/algebra/definitions#natural_logarithm) — base $e$, written $\\ln(x)$
- [Euler's Number (e)](!/algebra/definitions#euler's_number_(e)) — the irrational constant $e \\approx 2.71828$, base of the natural logarithm
 
## Converting
 
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — converts between any two bases using $\\log$ or $\\ln$`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `The Common Logarithm`,
    content: `The common logarithm is the [logarithm](!/algebra/logarithms) with base $10$. It is written $\\log(x)$ without a subscript, or $\\log_{10}(x)$ when clarity is needed.

Base $10$ connects directly to the decimal number system. Each power of $10$ corresponds to a place value: $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$. The common logarithm inverts this relationship, reporting how many powers of ten a number contains.

@academic[fact,aside:true,width:35%:Counting digits without writing them
A whole number has one more digit than the integer part of its common logarithm. Since $\\log(2^{100}) = 100 \\cdot \\log(2) \\approx 30.1$, the number $2^{100}$ has $31$ digits.]@

For powers of $10$, the values are immediate: $\\log(10) = 1$, $\\log(100) = 2$, $\\log(1000) = 3$, $\\log(0.1) = -1$, $\\log(0.01) = -2$. For other numbers, the integer part indicates the order of magnitude. Since $\\log(500) \\approx 2.699$, the number $500$ lies between $10^2 = 100$ and $10^3 = 1000$, and on a logarithmic scale it sits closer to the latter.

Historically, common logarithms enabled calculation before electronic computers. Logarithm tables converted multiplication into addition — a far simpler operation to perform by hand. Though tables are obsolete, the notation persists, and base $10$ remains natural for human-scale quantities.`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Logarithm Notation`,
    lead: `The subscript that names the base, the three-way war over what a bare log means, and the two Latin letters everyone reads differently.`,
    inherited: `$e$ and $\\exp$ — [exponential functions](!/algebra/powers/exponential-functions#notation); the defining equivalence $\\log_b x = y \\iff b^y = x$ — the [logarithms](!/algebra/logarithms) family page.`,
    entries: [
      {
        id: 'log-anatomy',
        tex: `$\\log_b x$`,
        read: `Log base b of x`,
        means: `Three slots: the base as a **subscript**, the argument on the line, and the output — which is an exponent: the power $b$ needs to reach $x$. Like $\\sin x$, the argument often goes unparenthesised: $\\log x$ and $\\log(x)$ are the same statement.`,
        cases: `Subscript present — unambiguous, any base. Subscript dropped — a dialect question, next entry. Two-argument software form — @[LOG(x, base)]@, argument first, base second, as in **Calculator Conventions** below.`,
        alsoWritten: `$\\log_b(x)$ with full parentheses, obligatory once the argument is a sum: $\\log_b(x+1)$, never $\\log_b x + 1$.`,
        confusedWith: `A product. $\\log x$ is one operator applied to $x$ — not $l \\cdot o \\cdot g \\cdot x$, and the subscript multiplies nothing.`,
      },
      {
        id: 'bare-log-wars',
        tex: `$\\log x$`,
        read: `Log of x — base depends on who is writing`,
        means: `The unsubscripted log is a dialect. School texts, engineering, and this page read base $10$; advanced mathematics — analysis, number theory — reads base $e$; computer science reads base $2$. The software side of the split is mapped in **Calculator Conventions** below.`,
        cases: `Within one document the convention is fixed and usually silent — the danger is **crossing** documents: a formula lifted from an analysis text into an engineering context silently changes by the constant factor $\\ln 10$.`,
        alsoWritten: `$\\lg x$ — base 10 in Russian and European texts (the form this site's calculus pages may meet in imported formulas); $\\operatorname{lb} x$ — the ISO mark for base 2; $\\operatorname{ld} x$ — the older German **logarithmus dualis**.`,
        confusedWith: `A portable symbol. The three readings differ by constant factors, so graphs, slopes, and constants shift with the dialect — the formula looks identical and is not.`,
      },
      {
        id: 'ln-letters',
        tex: `$\\ln x$`,
        read: `Ell-en of x; natural log of x`,
        means: `Latin, not English: **logarithmus naturalis** — which is why the letters run “ln” and not “nl”. The mark is credited to Irving Stringham, 1893. Base $e$ always, no dialect, no exceptions — the one logarithm symbol that means the same thing everywhere.`,
        cases: `Powers attach to the operator the way trigonometry writes them: $\\ln^2 x$ means $(\\ln x)^2$, borrowing the [squared-function convention](!/trigonometry/identities) — while the iterate is spelled out as $\\ln \\ln x$.`,
        alsoWritten: `$\\log_e x$, on the rare occasions the base is spelled; $\\log x$ itself, in the analysis dialect above.`,
        confusedWith: `$\\ln^2 x$ with $\\ln(x^2)$. The first squares the output, the second doubles it — $\\ln(x^2) = 2\\ln x$ by the [logarithm rules](!/algebra/logarithms/rules) — and the two agree only at $x = 1$ and $x = e^2$.`,
      },
    ],
    symbolsHref: `/math-symbols/algebra`,
    symbolsLabel: `All algebra symbols`,
    parentHref: `/algebra/logarithms`,
    parentLabel: `Logarithms`,
  },
  obj2: {
    title: `The Natural Logarithm`,
    content: `The natural logarithm is the logarithm with base $e$, where $e \\approx 2.71828$. It is written $\\ln(x)$, read "natural log of $x$," or occasionally $\\log_e(x)$.

The number $e$ is not chosen arbitrarily. It emerges from the study of continuous growth: if a quantity grows at a rate proportional to its current size, $e$ appears in the formula describing that growth. Compound interest computed with infinitely many compounding periods, radioactive decay, population dynamics — all involve $e$ naturally.

@academic[rule_theorem_plain:In calculus, $e$ has a unique property: the derivative of $e^x$ is $e^x$ itself. No other base produces this self-replicating behavior under differentiation. The natural logarithm inherits a corresponding property: the derivative of $\\ln(x)$ is $1/x$, the simplest possible form.]@

The values $\\ln(1) = 0$ and $\\ln(e) = 1$ follow from the general [properties](!/algebra/logarithms/properties). Additional reference points: $\\ln(2) \\approx 0.693$, $\\ln(10) \\approx 2.303$. These approximations appear frequently in applications.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `The Number e`,
    content: `The constant $e$ is an irrational number approximately equal to $2.71828$. Its decimal expansion continues without repeating: $e = 2.718281828459045...$

One definition comes from compound interest. If one dollar earns $100\\%$ interest per year, compounded $n$ times, the year-end balance is $(1 + 1/n)^n$. As $n$ increases — daily, hourly, every second, continuously — this expression approaches $e$:

@academic[formula_callout:The Number e
$$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$$]@

@academic[fact,aside:true,width:35%:Infinite compounding, finite money
One dollar at $100\\%$ grows to about $2.613$ dollars compounded monthly, $2.715$ daily and $2.718$ every second. However often interest is added, the balance never passes $e$ dollars.]@

The limit can be followed step by step. Compounding monthly means $n = 12$, daily means $n = 365$, and once every second means $n = 31{,}536{,}000$, the number of seconds in a $365$-day year. Each step multiplies the number of compounding periods many times over, and each one pays a little more than the step before. The question is how far this growth can go as $n$ keeps increasing.

Another definition uses an infinite series:

@academic[formula_callout:The Number e
$$e = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\frac{1}{4!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$$]@

The number appears throughout mathematics far beyond logarithms — in probability, complex analysis, differential equations, and number theory. Its ubiquity justifies elevating $\\log_e$ to the status of "natural."

Three independent definitions of $e$ are now in play — the compound-interest limit, the infinite series, and the calculus characterization mentioned in the previous section. The table below puts them side by side; each produces the same irrational constant from a different starting point.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Calculator Conventions`,
    content: `Scientific calculators and programming languages use varying conventions for logarithm notation, which can cause confusion.

Most scientific calculators have two buttons: $\\log$ for the common logarithm (base $10$) and $\\ln$ for the natural logarithm (base $e$). This matches standard mathematical notation. To compute a logarithm with a different base, the change of base formula is required.

Some programming languages diverge. In Python, the $\\texttt{math.log(x)}$ function computes the natural logarithm by default, not the common logarithm. The common logarithm requires $\\texttt{math.log10(x)}$. Other languages follow similar patterns — always check documentation.

Spreadsheet software like Excel uses $\\texttt{LOG(x)}$ for common logarithm and $\\texttt{LN(x)}$ for natural logarithm, matching calculator conventions. The function $\\texttt{LOG(x, base)}$ allows arbitrary bases.

When in doubt, test with known values. If the software returns $1$ for $\\log(10)$, it uses base $10$. If it returns $1$ for $\\log(e)$, it uses base $e$.

The [log calculator](!/calculators/log-calculator) has separate options for base 10, base e and base 2, plus a custom base, so you do not have to rely on these conventions.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `When to Use Which`,
    content: `The choice between common and natural logarithms depends on context.

Use common logarithms when working with orders of magnitude, human-readable scales, or decimal-based measurements. The Richter scale for earthquakes, the decibel scale for sound intensity, and the pH scale for acidity all employ base $10$. A change of $1$ on the Richter and pH scales represents a factor of $10$ — intuitive for decimal-system thinkers; on the decibel scale, a factor of $10$ in intensity is a change of $10$ decibels.

Use natural logarithms when working with continuous growth or decay, calculus, or theoretical derivations. Exponential models of the form $Ae^{kt}$ pair naturally with $\\ln$. Solving $e^{2x} = 5$ is cleanest with natural logarithms: $2x = \\ln(5)$, so $x = \\ln(5)/2$.

For solving general exponential [equations](!/algebra/logarithms/equations), either logarithm works. The equation $3^x = 7$ can be solved as $x = \\log(7)/\\log(3)$ or $x = \\ln(7)/\\ln(3)$ — both yield the same numerical answer. Choose whichever is available or conventional in the given context.

@academic[pitfall,aside:true,width:35%:Turning a quotient of logs into the log of a quotient
Computing $x = \\frac{\\log(7)}{\\log(3)}$ as $\\log\\left(\\frac{7}{3}\\right) \\approx 0.368$ gives $3^{0.368} \\approx 1.5$, not $7$. The two logarithms are divided as numbers: $x \\approx \\frac{0.845}{0.477} \\approx 1.771$.
[Read more](!#pitfall-turning-a-quotient-of-logs-into-the-log-of-a-quotient)]@

Either way, the answer is a fraction with one logarithm above the bar and another below it. Its value does not depend on which base is used, as long as the same base appears on top and on the bottom.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Converting Between Bases`,
    content: `The change of base formula from [logarithm rules](!/algebra/logarithms/rules) enables conversion between common and natural logarithms:

@academic[formula_callout:Change of Base Formula
$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$
/algebra/formulas#change_of_base_formula]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

To convert a logarithm of any base to common logarithms:

@academic[formula_callout:Converting Between Bases
$$\\log_a(x) = \\frac{\\log(x)}{\\log(a)}$$]@

To convert to natural logarithms:

@academic[formula_callout:Converting Between Bases
$$\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$$]@

@academic[pitfall,aside:true,width:35%:Flipping the change-of-base fraction
Putting the base on top, $\\log_2(10) = \\frac{\\ln(2)}{\\ln(10)} \\approx 0.301$, gives $2^{0.301} \\approx 1.23$, not $10$. The argument goes on top: $\\frac{\\ln(10)}{\\ln(2)} \\approx 3.322$.
[Read more](!#pitfall-flipping-the-change-of-base-fraction)]@

@academic[example:Example
For example, $\\log_2(10) = \\frac{\\ln(10)}{\\ln(2)} = \\frac{2.303}{0.693} \\approx 3.322$. Verification: $2^{3.322} \\approx 10$.]@

Converting between common and natural logarithms directly uses $\\ln(10) \\approx 2.303$:

@academic[formula_callout:Converting Between Bases
$$\\ln(x) = \\log(x) \\cdot \\ln(10) \\approx 2.303 \\cdot \\log(x)$$]@

@academic[formula_callout:Converting Between Bases
$$\\log(x) = \\frac{\\ln(x)}{\\ln(10)} \\approx \\frac{\\ln(x)}{2.303}$$]@

These conversions allow computation with any base using only the $\\log$ and $\\ln$ buttons available on standard calculators.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Comparing Graphs`,
    content: `The [graphs](!/algebra/logarithms/graphs) of $y = \\log(x)$ and $y = \\ln(x)$ share the same basic shape but differ in steepness.

Both pass through $(1, 0)$ — all logarithms satisfy $\\log_a(1) = 0$. The common logarithm passes through $(10, 1)$; the natural logarithm passes through $(e, 1) \\approx (2.718, 1)$. Both have vertical asymptotes at $x = 0$ and extend to $+\\infty$ as $x$ increases.

Since $e < 10$, the natural logarithm reaches $1$ at a smaller input value. This makes $\\ln(x)$ grow faster initially and appear steeper for small $x$.

@academic[rule_plain:For any positive $x > 1$, $\\ln(x) > \\log(x)$ because the natural logarithm uses a smaller base.]@

@academic[pitfall,aside:true,width:35%:Dividing by ln 10 instead of multiplying
Converting $\\log(100) = 2$ to natural log as $\\frac{2}{2.303} \\approx 0.868$ makes $\\ln(100)$ smaller than $\\log(100)$. The factor multiplies: $\\ln(100) \\approx 2 \\cdot 2.303 \\approx 4.605$.
[Read more](!#pitfall-dividing-by-ln-10-instead-of-multiplying)]@

The ratio between them is constant: $\\ln(x) = \\ln(10) \\cdot \\log(x) \\approx 2.303 \\cdot \\log(x)$. The graphs are vertical stretches of each other. Multiplying every output of the common logarithm by $\\ln(10)$ produces the natural logarithm.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Side-by-Side Summary`,
    content: `Across base, key values, graph behavior, calculus role, applications, and conversion formulas, common and natural logarithms are two distinct tools that serve different purposes — but they live on the same family of curves and convert into each other through one constant. The table below pairs every aspect covered above so the two can be compared at a glance.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `Three mistakes account for most wrong answers when common and natural logarithms are used for computing. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.`,
    before: ``,
    after: `All three slips put a number in the wrong place: a quotient of two logarithms is merged into one logarithm, the argument and the base trade places in the change-of-base fraction, and $\\ln(10)$ divides where it should multiply. An estimate made before the calculation catches each of them. Knowing that $\\log_2(10)$ lies between $3$ and $4$, or that $\\ln(x)$ is larger than $\\log(x)$ for $x > 1$, rules out the wrong values at a glance, and raising the base to the answer confirms the right one.`,
    link: '',
  },
};

  const introContent = {
  id: "intro",
   title: `Two Bases That Dominate`,
  content: `Among infinitely many possible bases, two have earned special notation and widespread use. The common logarithm uses base $10$, aligning with the decimal system and appearing throughout applied sciences. The natural logarithm uses base $e \\approx 2.71828$, emerging from calculus and dominating theoretical mathematics. Understanding when to use each — and how to convert between them — is essential for practical computation.`,
};

// FAQ pass 2026-10-31: kept the four notation questions. Added counting
// digits (fact box in "The Common Logarithm"), ln against log below x = 1
// (the rule box in "Comparing Graphs" covers only x > 1) and the
// compounding limit (fact box in "The Number e").
const faqQuestions = {
  obj1: {
    question: "What base does a bare $\\log$ mean?",
    answer: "It depends on the field, and the three readings disagree. School texts and engineering read base $10$; analysis and number theory read base $e$; computer science reads base $2$. Within one document the convention is fixed and usually left unstated. The hazard is crossing documents, where a formula lifted from an analysis text into an engineering context silently shifts by a factor of $\\ln 10$.",
    sectionId: "notation"
  },
  obj2: {
    question: "Does $\\log_b x + 1$ mean $\\log_b(x + 1)$?",
    answer: "No. Like $\\sin x$, the logarithm binds only to what immediately follows it, so $\\log_b x + 1$ reads as $(\\log_b x) + 1$. At $x = 9$ in base $10$ that is about $1.954$, while $\\log_{10}(9 + 1)$ is exactly $1$. Once the argument is a sum the parentheses are obligatory.",
    sectionId: "notation"
  },
  obj3: {
    question: "What does $\\ln^2 x$ mean?",
    answer: "It means $(\\ln x)^2$, the output squared. The superscript attaches to the operator, borrowing the [squared-function convention](!/trigonometry/identities) from trigonometry, where $\\sin^2 x$ behaves the same way. Repeated application gets spelled out instead, as $\\ln \\ln x$. Note that $\\ln^2 x$ and $\\ln(x^2)$ are different quantities: the second doubles rather than squares.",
    sectionId: "notation"
  },
  obj4: {
    question: "Why is the natural logarithm written ln and not nl?",
    answer: "Because the letters are Latin rather than English: **logarithmus naturalis**, so the $l$ leads. The mark is credited to Irving Stringham in 1893. Unlike a bare $\\log$, it carries no dialect at all, meaning base $e$ in every field, which makes it the one logarithm symbol you can move between documents without checking first.",
    sectionId: "notation"
  },
  obj5: {
    question: "How can a logarithm tell you how many digits a number has?",
    answer: "A whole number has one more digit than the integer part of its common logarithm. A number with $d$ digits is at least $10^{d-1}$ and below $10^d$, so its logarithm is at least $d - 1$ and below $d$. For $2^{100}$, $\\log(2^{100}) = 100 \\cdot \\log(2) \\approx 30.1$, so $2^{100}$ has $31$ digits, found without writing it out.",
    sectionId: "1"
  },
  obj6: {
    question: "Is $\\ln(x)$ always larger than $\\log(x)$?",
    answer: "No, only for $x > 1$. Since $\\ln(x) = \\ln(10) \\cdot \\log(x) \\approx 2.303 \\cdot \\log(x)$, the natural logarithm is the common one stretched by $2.303$. For $x > 1$ both are positive and $\\ln(x)$ is larger; at $x = 1$ both are $0$; for $0 < x < 1$ both are negative and $\\ln(x)$ is the more negative, as in $\\log(0.1) = -1$ against $\\ln(0.1) \\approx -2.303$.",
    sectionId: "7"
  },
  obj7: {
    question: "Does compounding interest more often make the balance grow without limit?",
    answer: "No. One dollar at $100\\%$ for a year grows to $\\left(1 + \\frac{1}{n}\\right)^n$ dollars with $n$ compounding periods: about $2.613$ monthly, $2.715$ daily and $2.718$ every second. The balance rises as $n$ increases, by less each time, and never passes $e \\approx 2.71828$, the limit of $\\left(1 + \\frac{1}{n}\\right)^n$. That limit is one of the standard definitions of $e$.",
    sectionId: "3"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Common and Natural Logarithms",
    "description": "Learn common logarithm (base 10) and natural logarithm (base e): definitions, the number e, calculator conventions, when to use each, and how to convert between them.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/common-natural",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Common and Natural Logarithms"
    },
    "teaches": [
      "Common logarithm (base 10) definition",
      "Natural logarithm (base e) definition",
      "The number e and its properties",
      "Calculator and programming conventions",
      "When to use common vs natural logarithms",
      "Converting between logarithm bases",
      "Comparing log and ln graphs"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Common and Natural Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms/common-natural"
      }
    ]
  }
}


  const fpLnVsLog = { kind: 'pieces', svgTitle: 'ln x and log x: both through (1, 0); ln x is log x stretched by ln 10', xRange: [0, 12], yRange: [-2, 3],
    pieces: [
      { fn: (x) => Math.log(x), from: 0.14, to: 12, ends: [null, null], color: 'f', label: { text: 'ln x', x: 11.5, y: Math.log(11.5), pos: 'n' } },
      { fn: (x) => Math.log10(x), from: 0.01, to: 12, ends: [null, null], color: 'g', label: { text: 'log x', x: 11.5, y: Math.log10(11.5), pos: 'n' } },
    ],
    vlines: [{ x: 10 }],
    points: [{ x: 1, y: 0 }, { x: Math.E, y: 1, label: '(e, 1)', pos: 'nw' }, { x: 10, y: 1, label: '(10, 1)', pos: 'se' }, { x: 10, y: Math.log(10), label: '(10, ln 10 ≈ 2.303)', pos: 'nw' }],
    notes: [{ x: 0.5, y: -1.4, text: 'at every x: ln x ≈ 2.303 · log x', pos: 'e' }],
    caption: 'Same shape: ln x is log x stretched by ln 10 ≈ 2.303' };

  const conceptIntroFigures = {
    tensTable: ciTensTable,
  };

  const demoUnits = {
    lnVsLog: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLnVsLog),
      caption: 'One curve, two vertical scales',
      text: 'ln x and log x drawn together. Both cross the axis at (1, 0). The natural logarithm reaches 1 already at x = e &#8776; 2.718, the common logarithm only at x = 10, so ln x is the steeper of the two. At x = 10 the dashed line shows the fixed ratio between them: log 10 = 1 while ln 10 &#8776; 2.303, and the same factor 2.303 links their heights at every x.',
    }),
  };

  // MistakeFix batch 2, 2026-11-01: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj9 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'turning-a-quotient-of-logs-into-the-log-of-a-quotient', name: `Turning a quotient of logs into the log of a quotient`, errorAt: 1,
        what: `An exponential equation such as $3^x = 7$ is solved to $x = \\frac{\\log(7)}{\\log(3)}$, and the fraction of two logarithms is then read as the logarithm of a fraction.`,
        wrong: [`$$x = \\frac{\\log(7)}{\\log(3)}$$`, `$$= \\log\\left(\\frac{7}{3}\\right) \\approx \\log(2.333) \\approx 0.368$$`],
        right: [`$$x = \\frac{\\log(7)}{\\log(3)}$$`, `Each logarithm is evaluated on its own, and the two values are divided.
$$\\approx \\frac{0.845}{0.477} \\approx 1.771$$`],
        why: `The quotient rule $\\log(M) - \\log(N) = \\log\\left(\\frac{M}{N}\\right)$ turns a difference of logarithms into the logarithm of a quotient. A quotient of logarithms looks similar, but no rule simplifies it.`,
        check: `Substitute the answer back. $3^{0.368} \\approx 1.5$, far from $7$, while $3^{1.771} \\approx 7.0$.` },
      { id: 'flipping-the-change-of-base-fraction', name: `Flipping the change-of-base fraction`, errorAt: 1,
        what: `In $\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$, the base and the argument swap places, so the logarithm of the base ends up on top.`,
        wrong: [`$$\\log_2(10)$$`, `$$= \\frac{\\ln(2)}{\\ln(10)} \\approx \\frac{0.693}{2.303} \\approx 0.301$$`],
        right: [`$$\\log_2(10)$$`, `The argument goes on top, the base below.
$$= \\frac{\\ln(10)}{\\ln(2)} \\approx \\frac{2.303}{0.693} \\approx 3.322$$`],
        why: `Both numbers appear in the formula with the same logarithm applied to them, and nothing in the notation shows which one belongs on top. The swapped fraction is itself a real logarithm, $\\log_{10}(2) \\approx 0.301$, so the wrong answer does not look strange.`,
        check: `Estimate first. $2^3 = 8$ and $2^4 = 16$, so $\\log_2(10)$ lies between $3$ and $4$. The wrong value fails at once: $2^{0.301} \\approx 1.23$.` },
      { id: 'dividing-by-ln-10-instead-of-multiplying', name: `Dividing by ln 10 instead of multiplying`, errorAt: 1,
        what: `A common logarithm is converted to a natural logarithm, and the factor $\\ln(10) \\approx 2.303$ is divided out instead of multiplied in.`,
        wrong: [`$$\\ln(100)$$`, `$$= \\frac{\\log(100)}{2.303} = \\frac{2}{2.303} \\approx 0.868$$`],
        right: [`$$\\ln(100)$$`, `$$= \\log(100) \\cdot \\ln(10) \\approx 2 \\cdot 2.303 \\approx 4.605$$`],
        why: `The two conversion formulas look alike. One multiplies by $\\ln(10)$ and the other divides by it, and it is easy to recall the wrong one.`,
        check: `For $x > 1$, the natural logarithm is always larger than the common logarithm, because its base is smaller. The wrong value $0.868$ is smaller than $\\log(100) = 2$, so it cannot be right. The right value passes a second test as well: $e^{4.605} \\approx 100$.` },
    ],
  };

return {
  props: {
    pitfallData,
    sectionsContent,
    introContent,
    obj3Table,
    obj4Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    conceptIntroFigures,
    seoData: {
      title: "Common & Natural Logarithms: Log vs Ln Explained | Learn Math Class",
      description: "Learn common logarithm (base 10) and natural logarithm (base e): definitions, the number e, calculator conventions, when to use each, and how to convert between them.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/common-natural",
      name: "Common and Natural Logarithms"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function PageTemplate({ pitfallData,
  seoData,
  sectionsContent,
  introContent,
  obj3Table,
  obj4Table,
  summaryTable,
  faqQuestions,
  schemas,
  demoUnits,
  conceptIntroFigures,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `To what power must 10 be raised to give a number?`,
        content: [
          `For $1000$ the answer is $3$, because $10^3 = 1000$. The question still has an answer for numbers that are not powers of $10$.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Multiplying a number by 10 adds exactly 1 to the power.`,
        content: [
          ciTable('tensTable'),
          `The decimal part $0.845$ comes from the digit $7$; the integer part counts the places, one less than the number of digits.`,
        ],
      },
      {
        id: 'pattern',
        lead: `The power measures size in factors of ten.`,
        content: [
          `Base $10$ connects directly to the decimal number system. Each power of $10$ corresponds to a place value: $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$. The common logarithm inverts this relationship, reporting how many powers of ten a number contains.`,
          `For powers of $10$, the values are immediate: $\\log(10) = 1$, $\\log(100) = 2$, $\\log(1000) = 3$, $\\log(0.1) = -1$, $\\log(0.01) = -2$. For other numbers, the integer part indicates the order of magnitude. Since $\\log(500) \\approx 2.699$, the number $500$ lies between $10^2 = 100$ and $10^3 = 1000$, and on a logarithmic scale it sits closer to the latter.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [common logarithm](!/algebra/definitions#common_logarithm) of a positive number $x$ is the power to which $10$ must be raised to give $x$: $\\log(x) = y$ exactly when $10^y = x$.`,
        formula: [
          `The common logarithm is the [logarithm](!/algebra/logarithms) with base $10$. It is written $\\log(x)$ without a subscript, or $\\log_{10}(x)$ when clarity is needed.`,
        ],
        footer: `So $\\log(1000) = 3$ and $\\log(7000) \\approx 3.845$, because $10^{3.845} \\approx 7000$.`,
      },
      {
        id: 'kind',
        lead: `Base 10 suits the decimal system and quantities on a human scale.`,
        content: [
          `@academic[fact,aside:true,width:35%:Counting digits without writing them
A whole number has one more digit than the integer part of its common logarithm. Since $\\log(2^{100}) = 100 \\cdot \\log(2) \\approx 30.1$, the number $2^{100}$ has $31$ digits.]@`,
          `Historically, common logarithms enabled calculation before electronic computers. Logarithm tables converted multiplication into addition — a far simpler operation to perform by hand. Though tables are obsolete, the notation persists, and base $10$ remains natural for human-scale quantities.`,
        ],
      },
      {
        id: 'caveat',
        lead: `A bare "log" does not mean base 10 everywhere.`,
        content: [
          `In much of higher mathematics and in many programming languages, $\\log(x)$ means the logarithm with base $e$. The conventions are compared in [logarithm notation](!/algebra/logarithms/common-natural#notation), and base $e$ is introduced in [the natural logarithm](!/algebra/logarithms/common-natural#2).`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers notation, the natural logarithm and the number $e$, calculator conventions, when to use which, converting between bases, comparing graphs, a side-by-side summary and common pitfalls.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
          <NotationCheatSheet
            key={'notation-sheet'}
            sheet={powersRootsLogsNotationSheet}
            current={'/algebra/logarithms/common-natural'}
          />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div
            key={'obj3-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj3Table }}
          />,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div
            key={'obj4-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj4Table }}
          />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-lnVsLog'} dangerouslySetInnerHTML={{ __html: demoUnits.lnVsLog }} />,
          `Every logarithm is a vertical stretch of every other, by the change-of-base constant.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <DiagramFrame
            key={'obj9-mistakes'}
            id="common-natural-log-pitfalls"
            title="Common pitfalls with common and natural logarithms"
            source="/algebra/logarithms/common-natural"
            after={sectionsContent.obj9.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Common and Natural Logarithms FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },

]

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
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Common Natural Logarithms</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
    <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}