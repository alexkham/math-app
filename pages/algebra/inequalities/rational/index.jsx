import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import inequalityVisualizerDiagrams from '@/app/components/algebra/inequalities/visualizer/inequalityVisualizerDiagrams'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import renderFunctionPlotV2 from '@/app/utils/illustrations/functions/graphs/functionPlot.v2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'



export async function getStaticProps(){
const keyWords = [
  "rational inequalities",
  "solving rational inequalities",
  "sign chart rational",
  "numerator denominator zeros",
  "critical points inequality",
  "cross-multiplication error",
  "rational inequality examples",
  "endpoint inclusion rules",
  "fraction inequality",
  "variable in denominator",
  "rational expression sign",
  "excluded values inequality",
  "rational inequality standard form",
  "combining fractions inequality"
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

// obj2 — comparison: numerator zero vs denominator zero
// Concept introduction (section 1) — template C, failure first. Running
// instance: (x − 2)/(x + 1) > 0, the section's own formula box and the sign
// chart example of obj3. Old obj1 text is kept in sectionsContent.obj1,
// unused; its formula box and rule box are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciBreakTable = ciTableOpen(['x', '(x − 2)/(x + 1)', 'really &gt; 0?', 'the guess says']) +
  ciRow(['−4', '2', 'yes', 'no ✗'], { color: '#a4243b', cols: [3] }) +
  ciRow(['−3', '2.5', 'yes', 'no ✗'], { shade: true, color: '#a4243b', cols: [3] }) +
  ciRow(['−1.5', '7', 'yes', 'no ✗'], { color: '#a4243b', cols: [3] }) +
  ciRow(['−1', 'undefined', 'no', 'no'], { shade: true }) +
  ciRow(['0', '−2', 'no', 'no']) +
  ciRow(['2', '0', 'no', 'no'], { shade: true }) +
  ciRow(['3', '0.25', 'yes', 'yes'], { last: true }) +
  '</tbody></table>'
const ciSignsTable = ciTableOpen(['piece of the line', 'x − 2', 'x + 1', '(x − 2)/(x + 1)']) +
  ciRow(['left of −1', '−', '−', '+'], { color: '#a4243b', cols: [3] }) +
  ciRow(['between −1 and 2', '−', '+', '−'], { shade: true }) +
  ciRow(['right of 2', '+', '+', '+'], { last: true, color: '#2563EB', cols: [3] }) +
  '</tbody></table>'

const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Critical-point type</th>
      <th style="${tableHeaders.comparison}">Defined by</th>
      <th style="${tableHeaders.comparison}">Value of expression there</th>
      <th style="${tableHeaders.comparison}">Inclusion in solution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Numerator zero</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(x) = 0,&nbsp;&nbsp;Q(x) ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">equals 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">possible — depends on strictness</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Denominator zero</td>
      <td style="padding: 12px 15px; color: #34495e;">Q(x) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">undefined</td>
      <td style="padding: 12px 15px; color: #34495e;">never</td>
    </tr>
  </tbody>
</table>
`

// obj3 — aggregation (process): the six-step sign-chart procedure
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">What it produces</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor the numerator and denominator completely</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every factor visible as a separate entity</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">identify all critical points (numerator zeros and denominator zeros)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ordered list of boundaries on the number line</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">build the chart: one row per factor, one column per interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign of each factor in each interval</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine factor signs into the sign of the quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign of P(x) ⁄ Q(x) in each interval</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">select intervals matching the inequality direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">candidate solution set</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; color: #34495e;">apply endpoint rules: numerator zeros for ≤ ⁄ ≥; denominator zeros never</td>
      <td style="padding: 12px 15px; color: #34495e;">final solution in interval notation</td>
    </tr>
  </tbody>
</table>
`

// obj4 — aggregation (reference / decision): inclusion of critical points by inequality strictness
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Critical point</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Strict (&lt;, &gt;)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Non-strict (≤, ≥)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Numerator zero&nbsp;&nbsp;(P(x) = 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Denominator zero&nbsp;&nbsp;(Q(x) = 0)</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary: capstone of starting-form variations
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Starting form</th>
      <th style="${tableHeaders.summary}">Example</th>
      <th style="${tableHeaders.summary}">Preparation step</th>
      <th style="${tableHeaders.summary}">Then</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Already standard:&nbsp;&nbsp;P(x) ⁄ Q(x) compared to 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x − 2) ⁄ (x + 1) &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor numerator and denominator; sign chart</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Compared to a constant:&nbsp;&nbsp;P(x) ⁄ Q(x) compared to k&nbsp;&nbsp;(k ≠ 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (x − 3) ≤ 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subtract k; combine into a single fraction over Q(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor; sign chart</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Two rational expressions:&nbsp;&nbsp;P₁ ⁄ Q₁ compared to P₂ ⁄ Q₂</td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ (x − 3) ≤ 2 ⁄ (x + 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">move everything to one side; combine over a common denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">factor; sign chart</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Core Concepts
 
- [Rational Inequality](!/algebra/definitions#rational_inequality) — variable in denominator; sign chart with two kinds of critical points
- [Critical Point](!/algebra/definitions#critical_point) — numerator zeros (expression $= 0$) vs denominator zeros (undefined)
- [Sign Analysis](!/algebra/definitions#sign_analysis) — applied to the quotient via factor-by-factor sign tracking
 
## Endpoint Rules
 
- [Inequality](!/algebra/definitions#inequality) — numerator zeros may be included for $\\leq$/$\\geq$; denominator zeros never
- [Interval Notation](!/algebra/definitions#interval_notation) — denominator zeros always get parentheses`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition`,
    content: `A rational inequality is any inequality involving at least one fraction in which the variable appears in the denominator. The inequality

@academic[formula_callout:Definition
$$\\frac{x - 2}{x + 1} > 0$$]@

is rational because the variable $x$ sits inside the denominator $x + 1$. The inequality $\\frac{x + 3}{5} \\leq 1$ is not rational — its denominator is a constant, making it a [linear inequality](!/algebra/inequalities/linear) in disguise.

Rational inequalities ask where a rational expression is positive, negative, or zero. Unlike [rational equations](!/algebra/equations/rational), which ask only where the expression equals zero, inequalities require knowing the sign of the expression across the entire number line. This is a harder question, and it demands the full sign chart rather than just the roots of the numerator.

The expression $\\frac{P(x)}{Q(x)}$ is a quotient of two [polynomials](!/algebra/polynomials).

@academic[rule_plain:Its sign at any point where it is defined equals the sign of the product $P(x) \\cdot Q(x)$, because a fraction is positive when numerator and denominator share the same sign, and negative when they differ.]@

This observation is what makes the sign chart — originally a tool for products — applicable to quotients as well.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Critical Points`,
    content: `A rational inequality has two kinds of critical points, and confusing them is a common source of error.

Numerator zeros are values where $P(x) = 0$. At these points the rational expression equals zero: $\\frac{0}{Q(x)} = 0$ (provided $Q(x) \\neq 0$). These are candidates for inclusion in the solution set when the inequality is non-strict ($\\leq$ or $\\geq$), because zero satisfies $\\leq 0$ and $\\geq 0$.

Denominator zeros are values where $Q(x) = 0$.

@academic[rule_plain:At these points the expression is undefined — division by zero has no value. These are never part of the solution set, regardless of the inequality symbol.]@

Even for $\\frac{P(x)}{Q(x)} \\leq 0$, a denominator zero is excluded because the expression does not exist there.

@academic[fact,aside:true,width:35%:Changing sign without passing zero
$\\frac{1}{x}$ is $-1$ at $x = -1$ and $1$ at $x = 1$, yet it is never $0$: it jumps across the wall at $x = 0$. A polynomial cannot do this, since its graph has no breaks, so it must pass through $0$ to change sign.]@

Both types of critical points go on the sign chart. Both create interval boundaries. The expression can change sign at either type. The difference appears only at the endpoint-inclusion step: numerator zeros may be included, denominator zeros are always excluded.

For the inequality $\\frac{(x - 3)(x + 1)}{(x - 5)(x + 4)} \\geq 0$, the numerator zeros are $x = 3$ and $x = -1$, and the denominator zeros are $x = 5$ and $x = -4$. All four values appear on the sign chart. The solution will include $x = 3$ and $x = -1$ (where the expression is zero) but will exclude $x = 5$ and $x = -4$ (where it is undefined).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Sign Chart Method for Rational Inequalities`,
    content: `The sign chart for a rational inequality follows the same logic as for [polynomial inequalities](!/algebra/inequalities/polynomial), with the numerator and denominator factors treated on equal footing during the sign-tracking phase.

Step 1: Factor the numerator and denominator completely. Every factor must be visible as a separate entity.

Step 2: Identify all critical points — zeros of the numerator and zeros of the denominator. Order them on the number line from smallest to largest.

Step 3: Create the sign chart. One row per factor (both numerator and denominator factors), with columns for each interval between consecutive critical points. Record the sign of each factor in each interval.

Step 4: Determine the sign of the rational expression in each interval. The sign is the product of all factor signs — or equivalently, count the number of negative factors: an even count means the expression is positive, odd means negative.

Step 5: Select the intervals matching the inequality.

Step 6: Handle endpoints. Numerator zeros are included for $\\leq$ or $\\geq$, excluded for $<$ or $>$. Denominator zeros are excluded always. Mark included endpoints with square brackets and excluded ones with parentheses.

@academic[example:Example
For $\\frac{x - 2}{x + 1} > 0$, the critical points are $x = 2$ (numerator) and $x = -1$ (denominator). Three intervals arise. In $(-\\infty, -1)$: $(x - 2)$ is negative, $(x + 1)$ is negative — quotient is positive. In $(-1, 2)$: $(x - 2)$ is negative, $(x + 1)$ is positive — quotient is negative. In $(2, \\infty)$: both positive — quotient is positive. The solution to $> 0$ is $(-\\infty, -1) \\cup (2, \\infty)$. Both critical points are excluded: $x = -1$ because it is a denominator zero, $x = 2$ because the inequality is strict.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Endpoint Inclusion Rules`,
    content: `The endpoint rules for rational inequalities are stricter than those for polynomial inequalities, and the reason is simple: a polynomial is defined everywhere, but a rational expression is not.

For a non-strict inequality like $\\frac{P(x)}{Q(x)} \\leq 0$, the expression must be less than or equal to zero. At a numerator zero where the denominator is nonzero, the expression equals zero, which satisfies $\\leq 0$. The point is included. At a denominator zero, the expression has no value — it is neither less than zero nor equal to zero nor anything else. The point is excluded.

For a strict inequality like $\\frac{P(x)}{Q(x)} < 0$, all critical points are excluded. Numerator zeros are excluded because the expression equals zero there, and zero does not satisfy $< 0$. Denominator zeros are excluded because the expression is undefined.

This produces four cases in practice. Under $\\leq$ or $\\geq$: numerator zeros included, denominator zeros excluded. Under $<$ or $>$: both excluded. There is no case where a denominator zero is included — the expression simply does not exist at that point.

In interval notation, included endpoints receive a square bracket $[$ or $]$, and excluded endpoints receive a parenthesis $($ or $)$. A denominator zero always gets a parenthesis. A numerator zero gets a bracket for $\\leq$ or $\\geq$ and a parenthesis for $<$ or $>$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `A Common Error: Cross-Multiplication`,
    content: `The most natural instinct when facing $\\frac{P(x)}{Q(x)} > 0$ is to multiply both sides by $Q(x)$ and work with $P(x) > 0$ or $P(x) < 0$. This instinct is wrong.

The problem is that $Q(x)$ changes sign. In some intervals $Q(x)$ is positive, and multiplying preserves the inequality direction. In other intervals $Q(x)$ is negative, and multiplying reverses it. A single multiplication cannot account for both cases simultaneously.

Consider $\\frac{x - 3}{x + 2} > 1$. Multiplying both sides by $(x + 2)$ gives $x - 3 > x + 2$ when $x + 2 > 0$, which simplifies to $-3 > 2$ — false everywhere. But when $x + 2 < 0$, the multiplication flips the inequality: $x - 3 < x + 2$, giving $-3 < 2$ — true everywhere in that region. Tracking these cases is cumbersome and error-prone.

The correct approach avoids cross-multiplication entirely. Move everything to one side first: $\\frac{x - 3}{x + 2} - 1 > 0$. Combine into a single fraction: $\\frac{x - 3 - (x + 2)}{x + 2} > 0$, which simplifies to $\\frac{-5}{x + 2} > 0$. Now the sign chart has one critical point, $x = -2$ (denominator zero). The numerator $-5$ is always negative. In $(-\\infty, -2)$, the denominator is negative, so the fraction is positive. In $(-2, \\infty)$, the denominator is positive, so the fraction is negative. The solution is $(-\\infty, -2)$.

The sign chart handled it cleanly. Cross-multiplication would have required splitting into cases and risked losing track of which direction applied where.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Getting the Inequality Into Standard Form`,
    content: `The sign chart requires a single rational expression compared to zero. When the inequality is not already in this form, it must be rearranged before the method can be applied.

The inequality $\\frac{P(x)}{Q(x)} > k$ is rewritten as $\\frac{P(x)}{Q(x)} - k > 0$. The two terms are then combined into a single fraction over a common denominator:

@academic[formula_callout:Getting the Inequality Into Standard Form
$$\\frac{P(x) - k \\cdot Q(x)}{Q(x)} > 0$$]@

This is now a standard rational inequality with everything on one side and zero on the other. The numerator $P(x) - k \\cdot Q(x)$ and the denominator $Q(x)$ are factored, critical points are identified, and the sign chart proceeds as usual.

For the inequality $\\frac{1}{x - 3} \\leq \\frac{2}{x + 1}$, subtract the right side: $\\frac{1}{x - 3} - \\frac{2}{x + 1} \\leq 0$. The common denominator is $(x - 3)(x + 1)$:

@academic[formula_callout:Getting the Inequality Into Standard Form
$$\\frac{(x + 1) - 2(x - 3)}{(x - 3)(x + 1)} \\leq 0$$]@

@academic[formula_callout:Getting the Inequality Into Standard Form
$$\\frac{x + 1 - 2x + 6}{(x - 3)(x + 1)} \\leq 0$$]@

@academic[formula_callout:Getting the Inequality Into Standard Form
$$\\frac{-x + 7}{(x - 3)(x + 1)} \\leq 0$$]@

The critical points are $x = 7$ (numerator zero), $x = 3$ and $x = -1$ (denominator zeros). The sign chart takes over from here.

Skipping the combination step — trying to work with two separate fractions — leads to the same cross-multiplication trap. A single fraction compared to zero is the form the sign chart is built for.

@academic[pitfall,aside:true,width:35%:Subtracting the constant from the numerator only
Writing $\\frac{x - 3}{x + 2} - 1$ as $\\frac{x - 4}{x + 2}$ takes the $1$ off the numerator alone, and $\\frac{x - 4}{x + 2} > 0$ gives $(-\\infty, -2) \\cup (4, \\infty)$. With $1 = \\frac{x + 2}{x + 2}$, the fraction is $\\frac{-5}{x + 2}$ and the solution is $(-\\infty, -2)$.
[Read more](!#pitfalls)]@

The combination step is ordinary fraction subtraction. Before two terms are merged, each one is written over the common denominator, so in the general form the constant $k$ enters the numerator as $k \\cdot Q(x)$, and in the example the fraction $\\frac{2}{x + 1}$ enters it as $2(x - 3)$.

Only after that rewriting are the numerators combined and simplified. The result is a single numerator over a single denominator, ready to be factored for the sign chart.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Worked Examples`,
    content: `A simple rational inequality: solve $\\frac{x - 2}{x + 1} > 0$. Critical points: $x = 2$ (numerator), $x = -1$ (denominator). Three intervals. In $(-\\infty, -1)$: both factors negative, quotient positive. In $(-1, 2)$: numerator negative, denominator positive, quotient negative. In $(2, \\infty)$: both positive, quotient positive. The solution to $> 0$ is $(-\\infty, -1) \\cup (2, \\infty)$.

An inequality requiring combination: solve $\\frac{1}{x - 3} \\leq \\frac{2}{x + 1}$. After combining into $\\frac{-x + 7}{(x - 3)(x + 1)} \\leq 0$, the critical points are $x = -1$, $x = 3$ (denominator zeros), and $x = 7$ (numerator zero). Four intervals. End behavior: for large positive $x$, the numerator $-x + 7$ is negative, $(x - 3)$ is positive, $(x + 1)$ is positive — product of signs is negative. Moving left using multiplicity (all factors have odd multiplicity, so sign flips at every critical point): $(7, \\infty)$ is negative, $(3, 7)$ is positive, $(-1, 3)$ is negative, $(-\\infty, -1)$ is positive. The inequality $\\leq 0$ selects negative intervals and includes the numerator zero: $(-1, 3) \\cup [7, \\infty)$. The denominator zeros $x = -1$ and $x = 3$ are excluded.

@academic[pitfall,aside:true,width:35%:Bracketing a denominator zero
Under $\\leq 0$, giving every critical point a bracket turns the answer into $[-1, 3] \\cup [7, \\infty)$, but at $x = -1$ and $x = 3$ the fraction $\\frac{-x + 7}{(x - 3)(x + 1)}$ is undefined. Only the numerator zero gets a bracket: $(-1, 3) \\cup [7, \\infty)$.
[Read more](!#pitfalls)]@

In this example the inequality is non-strict, and all three critical points sit at the ends of the selected intervals. Which of them belong to the answer is a separate question from which intervals are selected, and it is settled point by point with the endpoint rules from the earlier section.

An inequality with a repeated factor: solve $\\frac{(x - 1)^2}{x + 3} \\geq 0$. Critical points: $x = 1$ (numerator, multiplicity $2$) and $x = -3$ (denominator). The factor $(x - 1)^2$ is non-negative everywhere, so it does not change the sign — only the denominator $(x + 3)$ controls the sign. In $(-\\infty, -3)$: $(x + 3)$ is negative, so the expression is non-positive. In $(-3, \\infty)$: $(x + 3)$ is positive, so the expression is non-negative. The inequality $\\geq 0$ selects $(-3, \\infty)$, and since the expression equals zero at $x = 1$, that point is included (it already lies within the selected interval). The denominator zero $x = -3$ is excluded. The solution is $(-3, \\infty)$.

@academic[pitfall,aside:true,width:35%:Alternating signs past a squared factor
Flipping the sign at every critical point of $\\frac{(x - 1)^2}{x + 3} \\geq 0$ makes $(-\\infty, -3)$ positive and gives $(-\\infty, -3) \\cup [1, \\infty)$. But $x = -4$ gives $\\frac{25}{-1} = -25$. The sign changes only at $x = -3$, and the answer is $(-3, \\infty)$.
[Read more](!#pitfalls)]@

The second example could move from right to left flipping the sign at each critical point, because every factor there has odd multiplicity. Here the factor $(x - 1)$ is squared, so the multiplicity of each critical point is read before the chart is filled in.

Since the selected interval $(-3, \\infty)$ already contains $x = 1$, the endpoint rule for the numerator zero changes nothing in this example. Under the strict inequality $> 0$ it would matter: $x = 1$ would be removed, leaving $(-3, 1) \\cup (1, \\infty)$.

To solve your own rational inequality with each step shown, use the [rational inequality solver](!/algebra/calculators/inequalities/rational).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Connection to Rational Equations`,
    content: `[Rational equations](!/algebra/equations/rational) and rational inequalities begin with the same kind of expression — a quotient $\\frac{P(x)}{Q(x)}$ — but ask different questions, and therefore require different tools.

@academic[rule_plain:A rational equation $\\frac{P(x)}{Q(x)} = 0$ asks where the expression equals zero. The answer depends only on the numerator: $P(x) = 0$ (with denominator zeros excluded).]@

The denominator determines the domain restrictions, but once those are enforced, only the numerator matters. Clearing the denominator by multiplying both sides is safe for equations because the target value is zero, and zero times anything is zero.

A rational inequality $\\frac{P(x)}{Q(x)} > 0$ asks where the expression is positive. This depends on both the numerator and the denominator — the sign of each matters in every interval. Clearing the denominator is not safe because the multiplication may need to flip the inequality in some intervals but not others.

The sign chart handles the inequality question by treating numerator and denominator factors on equal footing: all contribute critical points, all contribute sign information, and the overall sign is determined by the combination. The equation question is a degenerate case where only the numerator zeros matter and the sign chart is unnecessary.

@academic[punchline:An equation needs only the numerator's zeros; an inequality needs the signs of numerator and denominator alike.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Summary of Rational Inequality Forms`,
    content: `All rational inequalities reduce to a single fraction $\\frac{P(x)}{Q(x)}$ compared to $0$ once the appropriate preparation step is applied. The table below collects the most common starting forms, an example of each, the preparation step that brings it to standard form, and how the sign chart proceeds from there.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Common Pitfalls`,
    content: `Cross-multiplication has a section of its own above. Three more mistakes account for many wrong answers to rational inequalities; each one is marked where it happens in the sections above, and here each is worked through in full, with the wrong and the right working side by side.

**Subtracting the constant from the numerator only**

An inequality compared with a constant is moved into standard form, but the constant is subtracted from the numerator without first being written over the denominator.

Wrong working:
$$\\frac{x - 3}{x + 2} > 1 \\implies \\frac{x - 3 - 1}{x + 2} > 0 \\implies \\frac{x - 4}{x + 2} > 0$$
The critical points $x = -2$ and $x = 4$ give the solution $(-\\infty, -2) \\cup (4, \\infty)$.

Right working: write $1$ as $\\frac{x + 2}{x + 2}$ before subtracting.
$$\\frac{x - 3 - (x + 2)}{x + 2} > 0 \\implies \\frac{-5}{x + 2} > 0$$
The numerator is always negative, so the fraction is positive only where $x + 2 < 0$. The solution is $(-\\infty, -2)$.

Why it happens: the constant has no visible denominator, so it looks as if it can be taken straight off the numerator, and the common-denominator step is skipped.

How to check: test a value from the wrong answer that lies outside the right one. $x = 5$ gives $\\frac{5 - 3}{5 + 2} = \\frac{2}{7}$, which is not greater than $1$. A value from the right answer, $x = -3$, gives $\\frac{-6}{-1} = 6 > 1$.

**Bracketing a denominator zero**

Under a non-strict inequality, every critical point at the end of a selected interval is given a square bracket, including the zeros of the denominator.

Wrong working: for $\\frac{-x + 7}{(x - 3)(x + 1)} \\leq 0$, the negative intervals are $(-1, 3)$ and $(7, \\infty)$, and with $\\leq$ all their endpoints are included: $[-1, 3] \\cup [7, \\infty)$.

Right working: $x = 7$ is a numerator zero, where the expression equals $0$, so it is included. $x = -1$ and $x = 3$ are denominator zeros, where the expression is undefined, so they are excluded under every symbol. The solution is $(-1, 3) \\cup [7, \\infty)$.

Why it happens: the habit of including every endpoint under $\\leq$ and $\\geq$ comes from polynomial inequalities, where every critical point is a zero of the expression. A rational inequality has a second kind of critical point that this habit does not cover.

How to check: substitute each bracketed endpoint into the expression. At $x = 3$ the denominator is $(3 - 3)(3 + 1) = 0$, so the expression has no value to compare with $0$. At $x = 7$ it is $\\frac{0}{32} = 0$, which satisfies $\\leq 0$.

**Alternating signs past a squared factor**

The sign chart is filled in by flipping the sign at every critical point, even where the factor that vanishes there has even multiplicity.

Wrong working: for $\\frac{(x - 1)^2}{x + 3} \\geq 0$, the sign is positive on $(1, \\infty)$, then flipped to negative on $(-3, 1)$ and to positive on $(-\\infty, -3)$. With the numerator zero included, the answer is $(-\\infty, -3) \\cup [1, \\infty)$.

Right working: $(x - 1)^2$ is never negative, so the sign does not change at $x = 1$. Only $x + 3$ changes sign, at $x = -3$: the expression is negative on $(-\\infty, -3)$ and non-negative on $(-3, \\infty)$. The solution is $(-3, \\infty)$.

Why it happens: the right-to-left flipping shortcut works whenever every factor has odd multiplicity, as in the second worked example, and it gets applied without checking the exponents.

How to check: test one value in each interval. $x = -4$ gives $\\frac{25}{-1} = -25$, so $(-\\infty, -3)$ fails; $x = 0$ gives $\\frac{1}{3} > 0$, so $(-3, 1)$ belongs to the answer.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Two Kinds of Critical Points and the Danger of Cross-Multiplication`,
  content: `A rational inequality asks where a fraction involving the variable is positive, negative, or zero. The sign chart method applies exactly as it does for polynomials, but with an added layer: the denominator contributes critical points of its own. Where the numerator is zero, the expression equals zero. Where the denominator is zero, the expression does not exist. Both types partition the number line into intervals, both affect the sign analysis, but they are treated differently when deciding which boundary points belong to the solution. The temptation to clear the denominator by cross-multiplying must be resisted — the denominator changes sign across the number line, making a single multiplication invalid.`,
};

const faqQuestions = {
  obj1: {
    question: "Why can a numerator zero be included but a denominator zero never?",
    answer: "Because they fail for different reasons. At a numerator zero the expression equals zero, which satisfies $\\leq$ or $\\geq$ but not a strict sign, so it is included under non-strict inequalities only. At a denominator zero the expression has no value at all, so it is neither less than, equal to, nor greater than anything, and it is excluded under every inequality sign.",
    sectionId: "4"
  },
  obj2: {
    question: "Why does cross-multiplying work for rational equations but not inequalities?",
    answer: "Because an equation has no direction to lose. Multiplying by the denominator $Q(x)$ preserves an equality regardless of sign, but for an inequality it preserves the direction where $Q(x) > 0$ and reverses it where $Q(x) < 0$. One multiplication cannot cover both regions, so a single cross-multiplication silently mixes two contradictory cases.",
    sectionId: "5"
  },
  obj3: {
    question: "What goes wrong if you leave fractions on both sides?",
    answer: "The sign chart has nothing to read. It needs one rational expression compared to zero, so $\\frac{1}{x-3} \\leq \\frac{2}{x+1}$ must first become $\\frac{-x+7}{(x-3)(x+1)} \\leq 0$ by subtracting and combining over a common denominator. Working across two separate fractions leads straight back into the cross-multiplication trap.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Rational Inequalities",
    "description": "Master rational inequalities: sign chart method, numerator vs denominator zeros, endpoint inclusion rules, why cross-multiplication fails, standard form conversion, and worked examples.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/rational",
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
      "name": "Rational Inequalities"
    },
    "teaches": [
      "Definition of rational inequalities",
      "Numerator zeros vs denominator zeros",
      "Sign chart method for rational expressions",
      "Endpoint inclusion rules",
      "Why cross-multiplication fails",
      "Converting to standard form",
      "Handling repeated factors"
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
        "name": "Rational Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/rational"
      }
    ]
  },
}
   
   



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpCrossMult = { kind: 'pieces', svgTitle: '(x - 3)/(x + 2) > 1 holds exactly for x < -2', xRange: [-8, 6], yRange: [-6, 8],
    pieces: [
      { fn: (x) => (x - 3) / (x + 2), from: -8, to: -2.01, ends: [null, null], color: 'f' },
      { fn: (x) => (x - 3) / (x + 2), from: -1.99, to: 6, ends: [null, null], color: 'f', label: { text: '(x − 3)/(x + 2)', x: 2, y: -1.3, pos: 's' } },
      { fn: () => 1, from: -8, to: 6, ends: [null, null], color: 'g', label: { text: 'y = 1', x: 5, y: 1, pos: 'n' } },
    ],
    vlines: [{ x: -2 }],
    notes: [{ x: -7.8, y: -2, text: 'above 1 for x < −2', pos: 'e', color: 'r' }, { x: -1.1, y: -5.2, text: 'multiplying by x + 2 misses it', pos: 'e', color: 'g' }],
    caption: '(x − 3)/(x + 2) > 1 holds exactly for x < −2' };
  const fpRatSigns = { kind: 'pieces', svgTitle: '(7 - x)/((x - 3)(x + 1)) <= 0 on (-1, 3) and [7, inf)', xRange: [-4, 12], yRange: [-3, 3],
    pieces: [
      { fn: (x) => (7 - x) / ((x - 3) * (x + 1)), from: -4, to: -1.01, ends: [null, null], color: 'f' },
      { fn: (x) => (7 - x) / ((x - 3) * (x + 1)), from: -0.99, to: 2.99, ends: [null, null], color: 'f' },
      { fn: (x) => (7 - x) / ((x - 3) * (x + 1)), from: 3.01, to: 12, ends: [null, null], color: 'f' },
    ],
    vlines: [{ x: -1 }, { x: 3 }],
    points: [{ x: 7, y: 0 }],
    notes: [{ x: -0.8, y: 2.4, text: '−1, 3: excluded', pos: 'e' }, { x: 7, y: 0.6, text: '7: included', pos: 'n', color: 'r' },
      { x: 3.6, y: 2.4, text: 'solution: −1 < x < 3 or x ≥ 7', pos: 'e', color: 'r' }],
    caption: 'Denominator zeros are walls; the numerator zero 7 joins ≤ 0' };

  // Concept introduction figures (section 1), one running instance: (x − 2)/(x + 1) > 0.
  const fpCiGuess = { kind: 'domainOpen', svgTitle: 'The guess: numerator positive, so x > 2', range: [-5, 5],
    rows: [
      { label: 'the guess: x − 2 > 0', color: 'g', segs: [[2, null, true]], tag: { text: '(2, ∞)', x: 3.7 } },
    ],
    caption: 'Treated like an equation: only the numerator decides' };
  const fpCiBreak = { kind: 'pieces', svgTitle: '(x - 2)/(x + 1) is positive left of -1 and right of 2', xRange: [-6, 5], yRange: [-6, 8],
    pieces: [
      { fn: (x) => (x - 2) / (x + 1), from: -6, to: -1.02, ends: [null, null], color: 'f' },
      { fn: (x) => (x - 2) / (x + 1), from: -0.98, to: 5, ends: [null, null], color: 'f', label: { text: 'y = (x − 2)/(x + 1)', x: 0.3, y: -4.5, pos: 'e' } },
    ],
    vlines: [{ x: -1 }],
    notes: [{ x: -5.8, y: 6, text: 'positive here too', pos: 'e', color: 'r' },
      { x: 2.4, y: 3, text: 'x > 2: positive', pos: 'e', color: 'f' }],
    caption: 'Above the axis on two pieces; the guess found only one' };
  const fpCiAnswer = { kind: 'domainOpen', svgTitle: 'The solution set of (x - 2)/(x + 1) > 0', range: [-5, 5],
    rows: [
      { label: '(x − 2)/(x + 1) > 0', color: 'f', segs: [[null, -1, false, true], [2, null, true]], tag: { text: '(−∞, −1) ∪ (2, ∞)', x: 2.6 } },
    ],
    caption: 'Two rays; −1 left out because the fraction does not exist there' };
  const fpCiEnds = { kind: 'domainOpen', svgTitle: 'With >= the numerator zero joins; the denominator zero never does', range: [-5, 5],
    rows: [
      { label: '(x − 2)/(x + 1) > 0', color: 'f', segs: [[null, -1, false, true], [2, null, true]], tag: { text: '(−∞, −1) ∪ (2, ∞)', x: 2.6 } },
      { label: '(x − 2)/(x + 1) ≥ 0', color: 'r', segs: [[null, -1, false, true], [2, null, false]], tag: { text: '(−∞, −1) ∪ [2, ∞)', x: 2.6 } },
    ],
    caption: 'With ≥ the dot at 2 fills in; the dot at −1 stays open' };

  const conceptIntroFigures = {
    guess: renderFunctionPlotV2(fpCiGuess),
    break: renderFunctionPlotV4(fpCiBreak),
    answer: renderFunctionPlotV2(fpCiAnswer),
    ends: renderFunctionPlotV2(fpCiEnds),
    breakTable: ciBreakTable,
    signsTable: ciSignsTable,
  };

  const demoUnits = {
    critical: demoUnitFrame({
      svg: inequalityVisualizerDiagrams['rat-simple'],
      caption: 'Numerator zero at 1, pole at &#8722;2',
      text: 'Both critical points divide the axis, but they behave differently: at x = 1 the expression is zero and the curve crosses the axis, while at x = &#8722;2 the denominator vanishes and the curve runs off along the dashed asymptote. The solution, the interval between them, can include the first endpoint but never the second. Distinguish the two kinds on the',
      href: '/algebra/visual-tools/inequality',
      linkText: 'inequality visual explorer',
    }),
    crossMult: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCrossMult),
      caption: 'What cross-multiplying gets wrong',
      text: 'The section\'s (x &#8722; 3)/(x + 2) &gt; 1. Multiplying by x + 2 as if it were positive gives &#8722;3 &gt; 2, which suggests no solution. The graph disagrees: left of the wall at x = &#8722;2 the whole branch lies above y = 1, because there x + 2 is negative and the multiplication should have flipped the inequality. Rewriting as &#8722;5/(x + 2) &gt; 0 gives the true answer, x &lt; &#8722;2.',
    }),
    signs: demoUnitFrame({
      svg: renderFunctionPlotV4(fpRatSigns),
      caption: 'Two kinds of critical points on one graph',
      text: 'The section\'s (7 &#8722; x)/((x &#8722; 3)(x + 1)) &#8804; 0. The denominator zeros &#8722;1 and 3 are walls where the graph breaks and the expression is undefined, so they are excluded even though the inequality is non-strict. The numerator zero 7 is where the graph touches 0, so it is included. The graph is on or below the axis on &#8722;1 &lt; x &lt; 3 and from 7 onward, where it stays just below the axis.',
    }),
  };

  // BeforeAfter (obj5): the section's inequality brought into sign-chart form without cross-multiplying
  const oneSideSteps = {
    header: {
      kicker: 'Rational inequalities',
      title: 'One side, one fraction, compared with zero',
      lede: 'Instead of multiplying by $x + 2$, whose sign changes, move everything to one side and combine it into a single fraction.',
    },
    steps: [
      { id: 'vsone', label: 'Fraction compared with 1', stamp: 'Before', expr: '$\\dfrac{x - 3}{x + 2} > 1$',
        move: { label: 'Move everything to one side', note: 'subtract 1 from both sides' } },
      { id: 'vszero', label: 'Compared with zero', expr: '$\\dfrac{x - 3}{x + 2} - 1 > 0$',
        move: { label: 'Combine into a single fraction', note: 'over the common denominator x + 2' } },
      { id: 'single', label: 'Single fraction', expr: '$\\dfrac{x - 3 - (x + 2)}{x + 2} > 0$',
        move: { label: 'Simplify the numerator', note: 'x − 3 − x − 2 = −5' } },
      { id: 'chart', label: 'Ready for the sign chart', stamp: 'After', expr: '$\\dfrac{-5}{x + 2} > 0$',
        detailsLabel: 'Read the signs',
        detailsTitle: '',
        details: 'One critical point, $x = -2$. The numerator $-5$ is always negative, so the fraction is positive exactly where $x + 2 < 0$. The solution is $(-\\infty, -2)$.' },
    ],
  };

return {
  props: {
    demoUnits,
    conceptIntroFigures,
    oneSideSteps,
    sectionsContent,
    introContent,
    obj2Table,
    obj3Table,
    obj4Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Rational Inequalities: Sign Charts & Critical Points | Learn Math Class",
      description: "Master rational inequalities: sign chart method, numerator vs denominator zeros, endpoint inclusion rules, why cross-multiplication fails, standard form conversion, and worked examples.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/rational",
      name: "Rational Inequalities"
    },
  }
}}

export default function RationalInequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj3Table,
  obj4Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures, oneSideSteps
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'assumption',
        lead: `For a fraction equation, only the numerator decides the answer.`,
        content: `A fraction is zero exactly when its top is zero, so $\\frac{x - 2}{x + 1} = 0$ means $x - 2 = 0$, and $x = 2$. The denominator only rules out the value that would break the fraction, here $x = -1$. It is reasonable to expect the same of $\\frac{x - 2}{x + 1} > 0$: make the top positive, $x - 2 > 0$, and the answer is $x > 2$.`,
        visual: ciSvg('guess'),
        caption: `The guess: every $x$ greater than $2$, read off the numerator alone.`,
      },
      {
        id: 'break',
        kind: 'instance',
        tone: 'break',
        lead: `Checking values shows the guess is wrong.`,
        content: [
          `Put actual numbers into the fraction and compare with what the guess predicts.`,
          ciTable('breakTable'),
          `Right of $2$ the guess holds. But at $x = -4$, $-3$ and $-1.5$ the fraction is positive and the guess says no. A whole stretch of answers is missing.`,
        ],
        visual: ciSvg('break'),
        caption: `The curve is above the axis on two separate pieces: right of $2$, which the guess found, and left of the wall at $x = -1$, which it missed. Those are the three "✗" rows of the table.`,
      },
      {
        id: 'diagnosis',
        lead: `The miss was predictable: left of −1 the denominator is negative.`,
        content: [
          `A fraction's sign comes from both parts. A negative over a negative is positive, so wherever $x - 2$ and $x + 1$ are both negative, the fraction is positive even though the top is not. Recording the sign of each part on each piece of the line shows it in advance.`,
          ciTable('signsTable'),
          `The expression $\\frac{P(x)}{Q(x)}$ is a quotient of two [polynomials](!/algebra/polynomials).`,
          `@academic[rule_plain:Its sign at any point where it is defined equals the sign of the product $P(x) \\cdot Q(x)$, because a fraction is positive when numerator and denominator share the same sign, and negative when they differ.]@`,
          `This observation is what makes the sign chart — originally a tool for products — applicable to quotients as well.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [rational inequality](!/algebra/definitions#rational_inequality) is an inequality involving at least one fraction in which the variable appears in the denominator, such as`,
        formula: `@academic[formula_callout:Definition
$$\\frac{x - 2}{x + 1} > 0$$]@`,
        footer: `Its equation counterpart: [rational equations](!/algebra/equations/rational).`,
      },
      {
        id: 'kind',
        lead: `A rational inequality is a statement about a fraction's sign, and its answer is a set.`,
        content: `It is not a number and not a function. It asks where a fraction is positive, negative or zero, and its answer collects those values — for $\\frac{x - 2}{x + 1} > 0$, the two rays left of $-1$ and right of $2$. The variable has to be in the denominator: $\\frac{x + 3}{5} \\leq 1$ is not rational — its denominator is a constant, making it a [linear inequality](!/algebra/inequalities/linear) in disguise.`,
        visual: ciSvg('answer'),
        caption: `The two "yes" stretches of the table. The open dot at $2$ is where the fraction is $0$; the open dot at $-1$ is where it does not exist.`,
      },
      {
        id: 'caveat',
        lead: `The failure becomes the method: every zero of the denominator goes on the chart, and none of them is ever in the answer.`,
        content: `Wherever the denominator can turn negative, clearing it by multiplying through is unsafe, so the sign chart takes its place. Its boundaries are the zeros of the numerator, where the fraction is $0$, and the zeros of the denominator, where it is undefined. The two behave differently at the end: with $\\geq$ or $\\leq$ a numerator zero joins the answer, but a denominator zero never does, because there is no value there to compare.`,
        visual: ciSvg('ends'),
        caption: `Switching $>$ to $\\geq$ fills the dot at $2$, where the fraction equals $0$. The dot at $-1$ stays open under every symbol.`,
      },
      {
        id: 'exit',
        content: `The rest of the page turns this into a procedure: the two kinds of critical points, the sign chart step by step, the endpoint rules, why cross-multiplication fails, getting an inequality into standard form, worked examples, and how all of this relates to rational equations.`,
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

    // obj2: prose + critical-point comparison table
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
                  <div key={'unit-critical'} dangerouslySetInnerHTML={{ __html: demoUnits.critical }} />,
          `Every rational sign chart is built from these two kinds of marks and nothing else.`,
        ]
    },

    // obj3: prose + 6-step sign-chart process table
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
          `@academic[punchline:Every factor counts alike while the signs are tracked; only at the endpoints does it matter which ones are in the denominator.]@`,
        ]
    },

    // obj4: prose + endpoint-inclusion ✓/✗ lookup table
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
          <div key={'unit-crossMult'} dangerouslySetInnerHTML={{ __html: demoUnits.crossMult }} />,
          `Moving everything to one side and using a sign chart avoids the case split entirely.`,
          <DiagramFrame
            key={'obj5-diagram'}
            id="one-side-steps"
            title="Rewriting (x − 3)/(x + 2) > 1 for the sign chart"
            source="/algebra/inequalities/rational"
            before={"The correct route for the section's inequality, one move at a time. No move multiplies by $x + 2$, so the direction of the inequality never has to be tracked."}
            after={"Every move keeps the inequality exactly equivalent, and the last form has a single critical point, $x = -2$. The next section uses the same moves to bring any rational inequality into standard form."}
          >
            <BeforeAfter
              data={oneSideSteps}
              variant="progression"
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
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
          <div key={'unit-signs'} dangerouslySetInnerHTML={{ __html: demoUnits.signs }} />,
          `Numerator zeros follow the inequality symbol; denominator zeros are always excluded.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },

    // obj9: NEW capstone with summary table
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Rational Inequalities FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rational Inequalities</h1>
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