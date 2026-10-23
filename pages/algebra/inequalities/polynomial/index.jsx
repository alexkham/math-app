import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import inequalityVisualizerDiagrams from '@/app/components/algebra/inequalities/visualizer/inequalityVisualizerDiagrams'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import renderFunctionPlotV2 from '@/app/utils/illustrations/functions/graphs/functionPlot.v2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'



export async function getStaticProps(){
const keyWords = [
  "polynomial inequalities",
  "sign chart method",
  "root multiplicity",
  "solving polynomial inequalities",
  "factored polynomial inequality",
  "cubic inequality",
  "higher degree inequality",
  "end behavior polynomial",
  "sign analysis",
  "odd even multiplicity",
  "polynomial inequality examples",
  "interval notation polynomial",
  "test point method",
  "polynomial sign change"
]
  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

   

const linkStyle = 'color: inherit; text-decoration: underline;'


// ---------- TABLES ----------

// obj2 — aggregation (process): 5-step sign-chart procedure
// Concept introduction (section 1) — template G, exclusion. Running instance:
// (x + 1)x(x − 1) < 0, the inequality tool's poly-cluster state; the other
// candidates are its rat-simple, rad-basic and abs-centered states. Old obj1
// text is kept in sectionsContent.obj1, unused; its formula box and theorem
// box are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciFaultTable = ciTableOpen(['candidate', 'what x is doing', 'what the graph does']) +
  ciRow(['A', 'whole powers only: x³ − x', 'unbroken, defined everywhere'], { color: '#2563EB', cols: [0] }) +
  ciRow(['B', 'x in a denominator', 'breaks at the wall x = −2'], { shade: true }) +
  ciRow(['C', 'x under a root', 'starts at 0, nothing to the left'], {}) +
  ciRow(['D', 'x inside bars', 'has a corner at 0'], { shade: true, last: true }) +
  '</tbody></table>'
const ciSignsTable = ciTableOpen(['piece of the line', 'x + 1', 'x', 'x − 1', 'product']) +
  ciRow(['left of −1', '−', '−', '−', '− : in'], { color: '#2563EB', cols: [4] }) +
  ciRow(['between −1 and 0', '+', '−', '−', '+'], { shade: true }) +
  ciRow(['between 0 and 1', '+', '+', '−', '− : in'], { color: '#2563EB', cols: [4] }) +
  ciRow(['right of 1', '+', '+', '+', '+'], { shade: true, last: true }) +
  '</tbody></table>'
const ciRescueTable = ciTableOpen(['rejected candidate', 'how it is still solved']) +
  ciRow(['B · rational', 'same sign chart, with the denominator zeros added as walls']) +
  ciRow(['C · radical', 'restrict to where the root exists first, then compare'], { shade: true }) +
  ciRow(['D · absolute value', 'convert to a compound inequality without bars'], { last: true }) +
  '</tbody></table>'

const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Tool / detail</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve P(x) = 0 to find all real roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring; rational root theorem; quadratic formula after degree reduction; numerical methods if needed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">order the roots on the number line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">smallest to largest; intervals form between consecutive roots</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">determine the sign of P(x) in each interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">test points, factor signs from factored form, or end behavior + multiplicity</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">select intervals matching the inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive intervals for P(x) &gt; 0; negative intervals for P(x) &lt; 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">apply endpoint rules</td>
      <td style="padding: 12px 15px; color: #34495e;">include roots for ≤ ⁄ ≥; exclude for &lt; ⁄ &gt;</td>
    </tr>
  </tbody>
</table>
`

// obj4 — comparison: odd vs even multiplicity
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Multiplicity at root r</th>
      <th style="${tableHeaders.comparison}">Example factor</th>
      <th style="${tableHeaders.comparison}">Sign behavior crossing r</th>
      <th style="${tableHeaders.comparison}">Graph behavior at r</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd&nbsp;&nbsp;(1, 3, 5, …)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x − r),&nbsp;&nbsp;(x − r)³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flips — adjacent intervals have opposite signs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph crosses the x-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Even&nbsp;&nbsp;(2, 4, 6, …)</td>
      <td style="padding: 12px 15px; color: #34495e;">(x − r)²,&nbsp;&nbsp;(x − r)⁴</td>
      <td style="padding: 12px 15px; color: #34495e;">preserved — adjacent intervals have the same sign</td>
      <td style="padding: 12px 15px; color: #34495e;">graph touches the x-axis but does not cross (tangent)</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation (reference): end-behavior matrix
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Case</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Leftmost interval (x → −∞)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Rightmost interval (x → +∞)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even degree, aₙ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even degree, aₙ &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd degree, aₙ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Odd degree, aₙ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary: capstone no-test-points workflow
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Step</th>
      <th style="${tableHeaders.summary}">What you determine</th>
      <th style="${tableHeaders.summary}">How</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real roots, ordered on the number line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor; rational root theorem; quadratic formula; numerical methods if needed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplicity at each root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">read directly from the factored form (exponent of each factor)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign in the rightmost interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">end behavior — sign of aₙ for odd degree; sign of aₙ for even degree (both ends share it)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign in every other interval, working leftward</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flip the sign at each root of odd multiplicity; keep it the same at each root of even multiplicity</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">solution set</td>
      <td style="padding: 12px 15px; color: #34495e;">select intervals matching the inequality; include roots for ≤ ⁄ ≥, exclude for &lt; ⁄ &gt;</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Core Concepts
 
- [Polynomial Inequality](!/algebra/definitions#polynomial_inequality) — $P(x) > 0$ for degree $\\geq 3$; sign chart with multiplicity awareness
- [Sign Analysis](!/algebra/definitions#sign_analysis) — the primary method: find roots, partition, test each interval
 
## From Polynomials Category
 
- [Multiplicity](!/algebra/definitions#multiplicity) — odd multiplicity causes sign change, even does not
- [End Behavior](!/algebra/definitions#end_behavior) — determines the sign in the outermost intervals
- [Factoring](!/algebra/definitions#factoring) — required to locate all real roots`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 
  obj1: {
    title: `Definition`,
    content: `A polynomial inequality has the form

@academic[formula_callout:Definition
$$P(x) > 0$$]@

(or $<$, $\\leq$, $\\geq$), where $P(x)$ is a polynomial of degree $n \\geq 3$. The inequality asks where the polynomial takes positive or negative values — not where it equals zero, but which stretches of the number line lie above or below the horizontal axis.

[Linear](!/algebra/inequalities/linear) and [quadratic](!/algebra/inequalities/quadratic) inequalities are special cases corresponding to $n = 1$ and $n = 2$. At those low degrees, the structure is simple enough that dedicated methods suffice. From degree three onward, the number of roots and the variety of sign patterns increase, and a general method is needed. The sign chart provides that method.

@academic[rule_theorem_plain:As with [polynomial equations](!/algebra/equations/polynomial), the degree $n$ sets an upper bound: a polynomial of degree $n$ has at most $n$ real roots, and these roots create at most $n + 1$ intervals on the number line. Within each interval, the polynomial maintains a constant sign.]@

The task is to determine that sign in every interval and select those that satisfy the inequality.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Sign Chart Method`,
    content: `The sign chart is a systematic procedure for solving any polynomial inequality once the real roots are known.

Step 1: Solve $P(x) = 0$ to find all real roots. Use factoring, the [rational root theorem](!/algebra/polynomials/rules), or the [quadratic formula](!/algebra/equations/quadratic) after degree reduction — whatever combination of techniques produces the roots.

@academic[pitfall,aside:true,width:35%:Dividing both sides by x
Dividing $x^3 > 4x$ by $x$ gives $x^2 > 4$, so $x < -2$ or $x > 2$, but $x = -3$ fails: $-27 < -12$. Kept as $x(x + 2)(x - 2) > 0$, the root $0$ stays on the chart and the answer is $(-2, 0) \\cup (2, \\infty)$.
[Read more](!#pitfalls)]@

Step 2: Order the roots on the number line from smallest to largest. They divide the line into intervals: one to the left of the smallest root, one between each consecutive pair, and one to the right of the largest.

Step 3: In each interval, determine the sign of $P(x)$. Choose any convenient test point within the interval and evaluate the sign — either by substituting into $P(x)$ directly or, if $P(x)$ is in factored form, by tracking the sign of each factor separately and multiplying.

Step 4: Select the intervals where the sign matches the inequality. For $P(x) > 0$, take the positive intervals. For $P(x) < 0$, take the negative ones.

Step 5: Decide on endpoint inclusion. For non-strict inequalities ($\\leq$ or $\\geq$), include the roots themselves because $P(r) = 0$ satisfies $\\leq 0$ and $\\geq 0$. For strict inequalities ($<$ or $>$), exclude them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Factored Form and Sign Analysis`,
    content: `When the polynomial is expressed as a product of linear factors, the sign in each interval can be determined without evaluating $P(x)$ numerically. Instead, the sign of each individual factor is tracked, and the signs are multiplied together.

Consider $(x + 2)(x - 1)(x - 5) < 0$. The roots are $-2$, $1$, and $5$, creating four intervals. In each interval, every factor is either positive or negative depending on whether the test point lies to the left or right of that factor's root.

In $(-\\infty, -2)$: all three factors are negative. Three negatives multiply to a negative. The product is negative.

In $(-2, 1)$: the factor $(x + 2)$ is positive, while $(x - 1)$ and $(x - 5)$ are negative. One positive and two negatives: the product is positive.

In $(1, 5)$: the factors $(x + 2)$ and $(x - 1)$ are positive, $(x - 5)$ is negative. Two positives and one negative: the product is negative.

In $(5, \\infty)$: all three factors are positive. The product is positive.

@academic[pitfall,aside:true,width:35%:Misreading a reversed factor
Reading $(5 - x)$ in $(x + 2)(x - 1)(5 - x) < 0$ like $(x - 5)$ gives $(-\\infty, -2) \\cup (1, 5)$, but $x = 3$ gives $5 \\cdot 2 \\cdot 2 = 20 > 0$. The factor $5 - x$ is positive left of $5$, so the answer is $(-2, 1) \\cup (5, \\infty)$.
[Read more](!#pitfalls)]@

The inequality $< 0$ selects the negative intervals: $(-\\infty, -2) \\cup (1, 5)$. No numerical evaluation of $P(x)$ was needed — only sign tracking.

This approach is faster than substituting test points into the expanded polynomial, especially for higher-degree expressions with many terms. It requires the polynomial to be in factored form, which is why factoring is typically the first step.

@academic[punchline:On any interval between roots, a product is negative exactly when an odd number of its factors are negative.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Root Multiplicity and Sign Changes`,
    content: `Not every root causes the sign of the polynomial to change. Whether the sign flips at a root depends on the root's multiplicity.

@academic[rule_plain:At a root of odd multiplicity (simple root, triple root, etc.), the polynomial changes sign. The graph crosses the $x$-axis, and the intervals on either side have opposite signs.]@

A factor $(x - r)^1$ is negative to the left of $r$ and positive to the right, so crossing it flips the sign of the product.

@academic[rule_plain:At a root of even multiplicity (double root, quadruple root, etc.), the polynomial keeps its sign. The graph touches the $x$-axis and turns back without crossing.]@

A factor $(x - r)^2$ is positive on both sides of $r$ (and zero at $r$ itself), so crossing it does not flip the sign of the product.

Consider $(x + 1)(x - 3)^2 > 0$. The roots are $x = -1$ (multiplicity $1$) and $x = 3$ (multiplicity $2$). In $(-\\infty, -1)$: $(x + 1)$ is negative and $(x - 3)^2$ is positive — product is negative. In $(-1, 3)$: $(x + 1)$ is positive and $(x - 3)^2$ is positive — product is positive. In $(3, \\infty)$: both are positive — product is positive. The sign changes at $x = -1$ (odd multiplicity) but not at $x = 3$ (even multiplicity). The solution is $(-1, 3) \\cup (3, \\infty)$, which simplifies to $(-1, \\infty) \\setminus \\{3\\}$ — all $x > -1$ except $x = 3$, where the expression equals zero.

@academic[pitfall,aside:true,width:35%:Flipping the sign at a double root
Alternating the signs at every root of $(x + 1)(x - 3)^2 > 0$ makes $(-1, 3)$ negative and gives $(-\\infty, -1) \\cup (3, \\infty)$. The double root $3$ keeps the sign, so the answer is $(-1, 3) \\cup (3, \\infty)$.
[Read more](!#pitfalls)]@

This multiplicity rule eliminates the need to test points in every interval. Once the sign is known in any one interval, the sign in each adjacent interval is determined by whether the separating root has odd or even multiplicity.

In practice the chart is filled by walking along the number line one root at a time and carrying the sign across each root in turn. The exponent of each factor is read straight from the factored form, which is why repeated factors are collected into a single power, such as $(x - 3)^2$, before the chart is drawn.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `End Behavior`,
    content: `@academic[rule_plain:The sign of a polynomial for very large values of $|x|$ is controlled entirely by the leading term $a_nx^n$.]@

This provides a guaranteed starting point for the sign chart: the sign in the outermost intervals is known before any test points are evaluated.

For even degree with $a_n > 0$: the polynomial is positive for both very large positive and very large negative $x$. Both outer intervals are positive.

For even degree with $a_n < 0$: the polynomial is negative on both outer intervals.

For odd degree with $a_n > 0$: the polynomial is negative far to the left and positive far to the right. The leftmost interval is negative and the rightmost is positive.

For odd degree with $a_n < 0$: the polynomial is positive far to the left and negative far to the right. The signs are reversed from the previous case.

@academic[fact,aside:true,width:35%:Odd degree always has a root
Every polynomial of odd degree has at least one real root, because a graph with no breaks cannot pass from one side of the axis to the other without meeting it. So an odd-degree $P(x) > 0$ never holds for every $x$, as $x^2 + 1 > 0$ does.]@

In both odd-degree cases the two outer intervals carry opposite signs: far to the left the polynomial lies on one side of the axis, and far to the right on the other. In both even-degree cases the two ends lie on the same side. Between the two ends, the graph of a polynomial runs along the whole number line with no breaks or jumps.

Knowing the outermost signs and applying the multiplicity rule inward determines the sign in every interval without any test-point computation. Start from the rightmost interval (whose sign is the sign of $a_n$ for odd degree, or positive for even degree with $a_n > 0$), then flip or preserve the sign at each root moving leftward according to its multiplicity. This technique is faster and less error-prone than substituting numerical test points.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Polynomials That Do Not Factor Over the Rationals`,
    content: `The sign chart method requires knowing the real roots, but it does not require those roots to be rational. When the polynomial has no rational roots — when the [rational root theorem](!/algebra/polynomials/rules) produces no valid candidates — irrational or approximate roots still serve as valid boundary points.

The polynomial $x^3 - 2 = 0$ has the single real root $x = \\sqrt[3]{2} \\approx 1.26$. For the inequality $x^3 - 2 > 0$, this root divides the number line into two intervals. Since the leading coefficient is positive and the degree is odd, the polynomial is negative for $x < \\sqrt[3]{2}$ and positive for $x > \\sqrt[3]{2}$. The solution is $(\\sqrt[3]{2}, \\infty)$.

When multiple irrational roots exist and exact values are unavailable, numerical approximations from graphing or iterative methods (bisection, Newton's method) identify the boundary points to whatever precision is needed. The sign chart is then constructed using these approximate values. The logical structure — roots create intervals, signs are constant within intervals — holds regardless of whether the roots are rational, irrational, or only known approximately.

For polynomials that factor partially — say, one rational root found and a remaining irreducible quadratic with $\\Delta < 0$ — the irreducible factor contributes no real roots and maintains constant sign. It affects the overall sign in every interval uniformly but creates no new boundary points.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Worked Examples`,
    content: `A cubic with three distinct real roots: solve $x^3 - 6x^2 + 11x - 6 \\leq 0$. The polynomial factors as $(x - 1)(x - 2)(x - 3)$. The roots $1$, $2$, $3$ create four intervals. All three roots have odd multiplicity, so the sign alternates. The leading coefficient is positive and the degree is odd, so the rightmost interval $(3, \\infty)$ is positive. Moving left: $(2, 3)$ is negative, $(1, 2)$ is positive, $(-\\infty, 1)$ is negative. The inequality $\\leq 0$ selects the negative intervals and includes the roots: $(-\\infty, 1] \\cup [2, 3]$.

A quartic with a repeated root: solve $(x + 2)^2(x - 1)(x - 4) > 0$. The roots are $-2$ (multiplicity $2$), $1$ (multiplicity $1$), and $4$ (multiplicity $1$). The leading term is $x^4$ (positive), so both outermost intervals are positive. Moving inward from the right: $(4, \\infty)$ is positive. At $x = 4$ (odd), the sign flips: $(1, 4)$ is negative. At $x = 1$ (odd), the sign flips: $(-2, 1)$ is positive. At $x = -2$ (even), the sign stays: $(-\\infty, -2)$ is positive. The solution to $> 0$ is $(-\\infty, -2) \\cup (-2, 1) \\cup (4, \\infty)$, — the even-multiplicity root $-2$ splits the left interval without changing the sign, and since $P(-2) = 0$, the strict inequality excludes $-2$ automatically. The solution is $(-\\infty, -2) \\cup (-2, 1) \\cup (4, \\infty)$.

@academic[pitfall,aside:true,width:35%:Losing an isolated root
Solving $(x + 2)^2(x - 1)(x - 4) \\leq 0$ from the negative interval alone gives $[1, 4]$ and loses $x = -2$, where the product is $0$. The solution is $\\{-2\\} \\cup [1, 4]$.
[Read more](!#pitfalls)]@

The double root $-2$ is the one place in this example where the endpoint rule and the multiplicity rule meet. The sign does not change there: the polynomial is positive on both sides of $-2$ and touches zero at that single point. Whether a point like this belongs to the answer is decided by the endpoint rule of Step 5, not by the intervals around it.

A polynomial with an irrational root: solve $x^3 - 3x + 1 > 0$. The rational root theorem yields no rational roots. Numerical methods show three real roots near $x \\approx -1.88$, $x \\approx 0.35$, and $x \\approx 1.53$. All have odd multiplicity, so the sign alternates. The leading coefficient is positive, so the pattern from right to left is $+, -, +, -$. The solution is approximately $(-1.88, 0.35) \\cup (1.53, \\infty)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Summary: Filling the Sign Chart Without Test Points`,
    content: `The sign chart for a polynomial inequality of degree three or higher can be filled in entirely without test points by combining the root multiplicity rule (Section 4) with the end behavior of the polynomial (Section 5). The table below collects the resulting workflow: each step lists what is determined at that stage and the tool that supplies it, building the sign chart from the rightmost interval inward.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Common Pitfalls`,
    content: `Four mistakes come up again and again when polynomial inequalities are solved by hand. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Dividing both sides by x**

An inequality with $x$ in every term, such as $x^3 > 4x$, is simplified by dividing both sides by $x$, as one might in an equation. The sign of $x$ is unknown, so it is unclear whether the inequality should flip, and the root $x = 0$ disappears from the chart.

Wrong working:
$$x^3 > 4x \\implies x^2 > 4 \\implies x < -2 \\text{ or } x > 2$$

Right working: collect everything on one side and factor.
$$x^3 - 4x > 0 \\implies x(x + 2)(x - 2) > 0$$
The roots $-2$, $0$ and $2$ are all simple. The degree is odd and the leading coefficient is positive, so from the right the signs are $+$ on $(2, \\infty)$, $-$ on $(0, 2)$, $+$ on $(-2, 0)$ and $-$ on $(-\\infty, -2)$. The solution is $(-2, 0) \\cup (2, \\infty)$.

Why it happens: cancelling a common factor is routine in equations, and dividing an inequality by a positive number is safe, so a variable factor gets treated like any other number.

How to check: test a value from the wrong answer. $x = -3$ gives $(-3)^3 = -27$, which is not greater than $4(-3) = -12$. A value the wrong answer left out, $x = -1$, gives $-1 > -4$, which is true.

**Misreading a reversed factor**

A factor written as $(5 - x)$ instead of $(x - 5)$ is given the usual pattern in the sign chart: negative to the left of its root and positive to the right. For $(5 - x)$ it is the other way round.

Wrong working: $(x + 2)(x - 1)(5 - x) < 0$ is charted with the signs of $(x + 2)(x - 1)(x - 5)$, which is negative on $(-\\infty, -2)$ and $(1, 5)$. The answer is given as $(-\\infty, -2) \\cup (1, 5)$.

Right working: $5 - x$ is positive for $x < 5$ and negative for $x > 5$.

In $(-\\infty, -2)$: $(-)(-)(+)$, positive.

In $(-2, 1)$: $(+)(-)(+)$, negative.

In $(1, 5)$: $(+)(+)(+)$, positive.

In $(5, \\infty)$: $(+)(+)(-)$, negative.

The solution is $(-2, 1) \\cup (5, \\infty)$. Equivalently, $5 - x = -(x - 5)$, so the inequality is $(x + 2)(x - 1)(x - 5) > 0$.

Why it happens: the rule "negative left of the root, positive right of it" is learned on factors of the form $(x - r)$ and then applied to every factor by habit. In $(5 - x)$ the coefficient of $x$ is negative, which reverses the pattern.

How to check: substitute a value from the answer. $x = 3$ gives $(5)(2)(2) = 20$, which is not below zero. End behavior catches it too: the leading term is $-x^3$, so the rightmost interval must be negative.

**Flipping the sign at a double root**

The signs are alternated at every root, as in a chart where all roots are simple, without reading the multiplicity of each root.

Wrong working: for $(x + 1)(x - 3)^2 > 0$, the rightmost interval $(3, \\infty)$ is positive. Flipping at $3$ makes $(-1, 3)$ negative, and flipping at $-1$ makes $(-\\infty, -1)$ positive. The answer is given as $(-\\infty, -1) \\cup (3, \\infty)$.

Right working: $3$ has multiplicity $2$, so the sign stays positive on $(-1, 3)$. The simple root $-1$ flips it, so $(-\\infty, -1)$ is negative. The solution is $(-1, 3) \\cup (3, \\infty)$.

Why it happens: the first examples of sign charts usually have only simple roots, where alternating is right every time, so alternation becomes the rule instead of multiplicity.

How to check: test one point next to the repeated root. $x = 0$ gives $(1)(9) = 9 > 0$, so $(-1, 3)$ is positive. A value from the wrong answer, $x = -2$, gives $(-1)(25) = -25$.

**Losing an isolated root**

For a non-strict inequality, the answer is read only from the chosen intervals and their endpoints. A root of even multiplicity that sits between two intervals of the wrong sign satisfies $P(r) = 0$ but is the endpoint of no chosen interval, so it is lost.

Wrong working: for $(x + 2)^2(x - 1)(x - 4) \\leq 0$, the signs are $+$ on $(-\\infty, -2)$, $+$ on $(-2, 1)$, $-$ on $(1, 4)$ and $+$ on $(4, \\infty)$. The only negative interval is $(1, 4)$; with its endpoints, the answer is given as $[1, 4]$.

Right working: $P(-2) = 0$, and $0 \\leq 0$, so $x = -2$ satisfies the inequality. The solution is $\\{-2\\} \\cup [1, 4]$.

Why it happens: Step 5 is read as "include the endpoints of the chosen intervals", and $-2$ is not an endpoint of any chosen interval. It is a single point where the graph touches the axis.

How to check: for $\\leq$ or $\\geq$, list every root at the end. Each root makes $P(x) = 0$, so each one satisfies the inequality and must appear in the answer.`,
    before: ``,
    after: ``,
    link: '',
  },
};



  const introContent = {
  id: 'intro',
  title: `Sign Charts, Root Multiplicity, and the Shape of the Solution`,
  content: `When a polynomial inequality reaches degree three or higher, the parabola-based reasoning of the quadratic case no longer applies — the graph can cross the axis multiple times, flatten at certain roots, and reverse direction repeatedly. The sign chart becomes the primary tool: find every real root, partition the number line, and determine the sign in each interval. The new ingredient is multiplicity. A root where the polynomial merely touches zero without crossing behaves differently from one where it passes through, and the sign chart must reflect this distinction to produce the correct solution.`,
};



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Polynomial Inequalities",
    "description": "Master polynomial inequalities of degree 3 and higher: sign chart method, root multiplicity (odd vs even), end behavior, factored form analysis, and worked examples with cubic and quartic polynomials.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/polynomial",
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
      "name": "Polynomial Inequalities"
    },
    "teaches": [
      "Sign chart method for polynomial inequalities",
      "Factored form sign analysis",
      "Root multiplicity (odd vs even) effects",
      "End behavior and leading coefficient",
      "Handling irrational and approximate roots",
      "Worked examples with cubic and quartic polynomials"
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
        "name": "Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Polynomial Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/polynomial"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpCubeRootBoundary = { kind: 'pieces', svgTitle: 'x^3 - 2 > 0 exactly for x greater than the cube root of 2', xRange: [-2, 3], yRange: [-10, 15], yStep: 5,
    pieces: [{ fn: (x) => x ** 3 - 2, from: -2, to: 3, ends: [null, null], color: 'f', label: { text: 'y = x³ − 2', x: 2.3, y: 10.2, pos: 'w' } }],
    points: [{ x: Math.cbrt(2), y: 0, label: '∛2 ≈ 1.26', pos: 'nw' }],
    notes: [{ x: -1.8, y: 12, text: 'x³ − 2 > 0 only right of ∛2', pos: 'e', color: 'r' }, { x: -1.8, y: 7.5, text: 'solution (∛2, ∞)', pos: 'e', color: 'r' }],
    caption: 'An irrational root is still a boundary: x³ − 2 > 0 for x > ∛2' };
  const fpQuarticSigns = { kind: 'pieces', svgTitle: '(x + 2)^2 (x - 1)(x - 4) > 0: touches at -2, crosses at 1 and 4', xRange: [-3.5, 5], yRange: [-60, 40], yStep: 20,
    pieces: [{ fn: (x) => (x + 2) ** 2 * (x - 1) * (x - 4), from: -3.5, to: 5, ends: [null, null], color: 'f', label: { text: '(x + 2)²(x − 1)(x − 4)', x: 2.5, y: 25, pos: 'n' } }],
    points: [{ x: -2, y: 0 }, { x: 1, y: 0 }, { x: 4, y: 0 }],
    notes: [{ x: -3.4, y: -25, text: '−2: double root, the sign does not change', pos: 'e', color: 'g' },
      { x: -3.4, y: -40, text: '1 and 4: simple roots, the sign flips', pos: 'e', color: 'g' },
      { x: -3.4, y: -52, text: 'solution: x < −2, −2 < x < 1, x > 4', pos: 'e', color: 'r' }],
    caption: 'Positive at both ends; the double root −2 keeps the sign' };

  // Concept introduction figures (section 1), one running instance: (x + 1)x(x − 1) < 0.
  const fpCiSet = { kind: 'domainOpen', svgTitle: 'The solution set of (x + 1)x(x - 1) < 0', range: [-3, 3],
    rows: [
      { label: '(x + 1)x(x − 1) < 0', color: 'f', segs: [[null, -1, false, true], [0, 1, true, true]], tag: { text: '(−∞, −1) ∪ (0, 1)', x: 1.9 } },
    ],
    caption: 'Two of the four pieces; the three roots left out' };

  const conceptIntroFigures = {
    cubic: inequalityVisualizerDiagrams['poly-cluster'],
    rational: inequalityVisualizerDiagrams['rat-simple'],
    radical: inequalityVisualizerDiagrams['rad-basic'],
    absolute: inequalityVisualizerDiagrams['abs-centered'],
    set: renderFunctionPlotV2(fpCiSet),
    faultTable: ciFaultTable,
    signsTable: ciSignsTable,
    rescueTable: ciRescueTable,
  };

  const demoUnits = {
    chart: demoUnitFrame({
      svg: inequalityVisualizerDiagrams['poly-three'],
      caption: 'Three simple roots, four intervals, alternating signs',
      text: 'With roots at &#8722;2, 1 and 5 the axis splits into four intervals, and because each root is simple the sign flips at every one of them: the chart reads &#8722;, +, &#8722;, + and the strict inequality selects the two shaded intervals. No test points are needed once the roots and their multiplicities are known. Fill the chart for any factored polynomial on the',
      href: '/algebra/visual-tools/inequality',
      linkText: 'inequality visual explorer',
    }),
    double: demoUnitFrame({
      svg: inequalityVisualizerDiagrams['poly-double'],
      caption: 'The double root at x = 2 keeps the sign',
      text: 'The factor (x &#8722; 2)&#178; is never negative, so the curve touches the axis at 2 and bounces back: the sign chart shows the same sign on both sides of that root, and only the simple root at &#8722;3 produces a flip. Even multiplicity touches, odd multiplicity crosses. Compare a simple and a double root side by side on the',
      href: '/algebra/visual-tools/inequality',
      linkText: 'inequality visual explorer',
    }),
    irrational: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCubeRootBoundary),
      caption: 'A boundary that is not a rational number',
      text: 'The section\'s x&#179; &#8722; 2 &gt; 0. Its only real root is &#8731;2 &#8776; 1.26, which the rational root theorem could never find, yet it splits the line exactly like any other root: the curve is below the axis to its left and above it to its right. The solution is (&#8731;2, &#8734;), with the boundary excluded because the inequality is strict.',
    }),
    quartic: demoUnitFrame({
      svg: renderFunctionPlotV4(fpQuarticSigns),
      caption: 'Reading the signs from the ends inward',
      text: 'The section\'s (x + 2)&#178;(x &#8722; 1)(x &#8722; 4) &gt; 0. Its leading term x&#8308; makes both ends positive. Moving inward from the right, the simple root 4 flips the sign to negative and the simple root 1 flips it back to positive; the double root &#8722;2 only touches the axis, so the sign stays positive on both sides. Excluding the roots themselves, the solution is x &lt; &#8722;2, &#8722;2 &lt; x &lt; 1, or x &gt; 4.',
    }),
  };

   return {
  props: {
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj2Table,
    obj4Table,
    obj5Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Polynomial Inequalities: Sign Charts & Multiplicity | Learn Math Class",
      description: "Master polynomial inequalities of degree 3 and higher: sign chart method, root multiplicity (odd vs even), end behavior, factored form analysis, and worked examples with cubic and quartic polynomials.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/polynomial",
      name: "Polynomial Inequalities"
    },
  }
}
   }



   export default function PolynomialInequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj4Table,
  obj5Table,
  summaryTable,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciCandidates = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px' }}>
      {[['cubic', 'A', '(x + 1)x(x − 1) < 0'], ['rational', 'B', '(x − 1)/(x + 2) < 0'], ['radical', 'C', '√x − 2 < 0'], ['absolute', 'D', '|x| − 3 < 0']].map(([k, letter, label]) => (
        <div key={k} style={{ textAlign: 'center' }}>
          <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[k] }} />
          <div style={{ fontWeight: 700, color: '#06357a', fontSize: '15px', margin: '-4px 0 6px' }}>{letter} · {label}</div>
        </div>
      ))}
    </div>
  )

  // Section 1 concept introduction — template G (exclusion).
  const conceptIntro = {
    beats: [
      {
        id: 'candidates',
        lead: `Four inequalities look alike, and only one of them is a polynomial inequality.`,
        content: `Each of these asks where an expression is below zero: A, $(x + 1)x(x - 1) < 0$; B, $\\frac{x - 1}{x + 2} < 0$; C, $\\sqrt{x} - 2 < 0$; D, $|x| - 3 < 0$. Written out, they differ only in a symbol or two. Drawn, they do not.`,
        visual: ciCandidates,
        caption: `Each graph is the left side; the blue bar on the axis is where it is below zero. These are four frozen states of the [inequality visual explorer](!/algebra/visual-tools/inequality).`,
      },
      {
        id: 'sort',
        kind: 'instance',
        lead: `Sorted, A is the polynomial inequality, and B, C and D are not.`,
        content: [
          `What decides it is what happens to $x$ inside each expression, and it shows directly in the graphs.`,
          ciTable('faultTable'),
        ],
      },
      {
        id: 'fault',
        lead: `Each rejected candidate fails at one exact place, and the near-misses do not fail at all.`,
        content: `B fails at $x = -2$, where its denominator is zero: the expression does not exist there, and the graph breaks. C fails left of $0$, where a square root has no real value. D fails at $0$ in a quieter way: the bars make it two different formulas glued at a corner. The near-misses pass. $(x + 1)x(x - 1)$ is in factored form, but multiplied out it is $x^3 - x$, an ordinary polynomial. $\\frac{x^2 + 1}{5} > x$ has a fraction, but its denominator is a constant, so it is just a polynomial times $\\frac{1}{5}$.`,
      },
      {
        id: 'rule',
        lead: `The rule: only whole-number powers of x, multiplied by constants and added.`,
        content: [
          `Such an expression is defined for every real $x$ and its graph never breaks, so it can change sign only by passing through zero — only at a root. That is what makes A easy: its roots $-1$, $0$ and $1$ cut the line into four pieces, and on each piece the sign is fixed.`,
          ciTable('signsTable'),
          `The product is negative on two pieces, so A's answer is $x < -1$ or $0 < x < 1$ — the two blue bars in its graph.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [polynomial inequality](!/algebra/definitions#polynomial_inequality) has the form below — or with $<$, $\\leq$ or $\\geq$ — where $P(x)$ is a polynomial of degree $n \\geq 3$.`,
        formula: `@academic[formula_callout:Definition
$$P(x) > 0$$]@`,
        footer: `Its equation counterpart: [polynomial equations](!/algebra/equations/polynomial).`,
      },
      {
        id: 'kind',
        lead: `A polynomial inequality is a statement about the sign of a polynomial, and its answer is a set.`,
        content: [
          `It is not a number and not a function. It asks where a polynomial is above or below the axis, and its answer collects those stretches of the line. [Linear](!/algebra/inequalities/linear) and [quadratic](!/algebra/inequalities/quadratic) inequalities are the special cases $n = 1$ and $n = 2$; from degree three onward the stretches multiply.`,
          `@academic[rule_theorem_plain:As with [polynomial equations](!/algebra/equations/polynomial), the degree $n$ sets an upper bound: a polynomial of degree $n$ has at most $n$ real roots, and these roots create at most $n + 1$ intervals on the number line. Within each interval, the polynomial maintains a constant sign.]@`,
        ],
        visual: ciSvg('set'),
        caption: `A's answer: two of its four pieces. The open dots are the roots $-1$, $0$ and $1$, where the product is $0$ and so not below it.`,
      },
      {
        id: 'caveat',
        lead: `The rejected candidates are not lost; each has its own way back.`,
        content: [
          `Excluding B, C and D only means the plain polynomial method does not apply to them as they stand.`,
          ciTable('rescueTable'),
          `Each has its own page: [rational inequalities](!/algebra/inequalities/rational), [absolute value inequalities](!/algebra/inequalities/absolute-value). The polynomial case is the one the others are brought back to.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page is the method for the polynomial case: the sign chart, reading signs from factored form, how root multiplicity decides whether the sign changes, end behavior, polynomials that do not factor nicely, worked examples, and filling the chart without test points.`,
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
          sectionsContent.obj0.after,
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

    // obj2: prose + 5-step process table
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
          />,
                  <div key={'unit-chart'} dangerouslySetInnerHTML={{ __html: demoUnits.chart }} />,
          `The method is the same for every degree; only the number of intervals grows.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },

    // obj4: prose + multiplicity comparison table
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
                  <div key={'unit-double'} dangerouslySetInnerHTML={{ __html: demoUnits.double }} />,
          `End behaviour, treated next, fixes the sign of the first interval; the rest follow by flipping at odd-multiplicity roots and keeping the sign at even ones.`,
        ]
    },

    // obj5: prose + end-behavior reference matrix
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
          `@academic[punchline:Far from the origin a polynomial follows its leading term, so its signs at both ends are known before any root is found.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-irrational'} dangerouslySetInnerHTML={{ __html: demoUnits.irrational }} />,
          `Approximate roots work the same way; only the precision of the boundary changes.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-quartic'} dangerouslySetInnerHTML={{ __html: demoUnits.quartic }} />,
          `End behavior plus multiplicity fills the whole sign chart without a single test point.`,
        ]
    },

    // obj8: NEW capstone with summary table
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
        ]
    },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Polynomial Inequalities</h1>
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