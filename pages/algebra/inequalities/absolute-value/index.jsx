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
import renderFunctionPlotV2 from '@/app/utils/illustrations/functions/graphs/functionPlot.v2'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'



export async function getStaticProps(){
const keyWords = [
  "absolute value inequalities",
  "solving absolute value inequalities",
  "less than absolute value",
  "greater than absolute value",
  "compound inequality conversion",
  "absolute value distance",
  "conjunction disjunction inequality",
  "absolute value examples",
  "interval notation absolute value",
  "squaring method inequality",
  "absolute value both sides",
  "geometric interpretation absolute value",
  "linear absolute value inequality",
  "quadratic absolute value inequality"
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

// obj3 — aggregation (reference): k-edge-cases matrix consolidating obj2 + obj3 content
// Concept introduction (section 1) — template F, collapse. Running instance:
// |x| < 3 (the section's demo frame uses k = 3; tool state abs-centered).
// Old obj1 text is kept in sectionsContent.obj1, unused; every widget it held
// is carried into the introduction unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciBothTable = ciTableOpen(['x', 'distance |x|', 'closer than 3?', 'between −3 and 3?']) +
  ciRow(['−4', '4', 'no', 'no']) +
  ciRow(['−3', '3', 'no', 'no'], { shade: true, color: '#B45309' }) +
  ciRow(['−1', '1', 'yes', 'yes'], { color: '#2563EB' }) +
  ciRow(['0', '0', 'yes', 'yes'], { shade: true, color: '#2563EB' }) +
  ciRow(['2', '2', 'yes', 'yes'], { color: '#2563EB' }) +
  ciRow(['3', '3', 'no', 'no'], { shade: true, color: '#B45309' }) +
  ciRow(['4', '4', 'no', 'no'], { last: true }) +
  '</tbody></table>'
const ciSidesTable = ciTableOpen(['side of 0', '|x| is', '|x| &lt; 3 says', 'which means']) +
  ciRow(['x ≥ 0', 'x', 'x &lt; 3', 'right part stops before 3']) +
  ciRow(['x &lt; 0', '−x', '−x &lt; 3', 'x &gt; −3: left part stops after −3'], { shade: true }) +
  ciRow(['both sides', '', '', '−3 &lt; x &lt; 3'], { last: true, color: '#2563EB' }) +
  '</tbody></table>'

const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">k value</th>
      <th style="${tableHeaders.aggregation}">|f(x)| &lt; k</th>
      <th style="${tableHeaders.aggregation}">|f(x)| ≤ k</th>
      <th style="${tableHeaders.aggregation}">|f(x)| &gt; k</th>
      <th style="${tableHeaders.aggregation}">|f(x)| ≥ k</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">k &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded open interval&nbsp;&nbsp;(−k &lt; f &lt; k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded closed interval&nbsp;&nbsp;(−k ≤ f ≤ k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two open rays&nbsp;&nbsp;(f &lt; −k or f &gt; k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two closed rays&nbsp;&nbsp;(f ≤ −k or f ≥ k)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">k = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅&nbsp;&nbsp;(empty)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">roots of f(x) = 0 only</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all reals except roots of f(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)&nbsp;&nbsp;all reals</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">k &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">∅</td>
      <td style="padding: 12px 15px; color: #34495e;">∅</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
    </tr>
  </tbody>
</table>
`

// obj6 — comparison: squaring method vs case-splitting
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Method</th>
      <th style="${tableHeaders.comparison}">Procedure</th>
      <th style="${tableHeaders.comparison}">Resulting problem</th>
      <th style="${tableHeaders.comparison}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Squaring</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">replace |A| compared to |B| with A² compared to B²; rearrange and factor as a difference of squares</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomial inequality (g − f)(g + f) compared to 0; solve by sign chart</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cleanest when f and g are polynomial; less natural for transcendental expressions</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Case-splitting</td>
      <td style="padding: 12px 15px; color: #34495e;">find intervals where f(x) and g(x) have constant signs; remove |·| using the piecewise definition on each interval; solve on each</td>
      <td style="padding: 12px 15px; color: #34495e;">several inequalities, one per sign-region; combine the partial solutions</td>
      <td style="padding: 12px 15px; color: #34495e;">more laborious but works for non-polynomial expressions</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary: capstone of inequality structures covered on the page
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Form</th>
      <th style="${tableHeaders.summary}">Conversion</th>
      <th style="${tableHeaders.summary}">Resulting inequality</th>
      <th style="${tableHeaders.summary}">Solve as</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|f(x)| &lt; k&nbsp;&nbsp;(k &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjunction:&nbsp;&nbsp;−k &lt; f(x) &lt; k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">double inequality of the same kind as f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/algebra/inequalities/linear" style="${linkStyle}">linear</a> chain, or sign chart for higher-degree f</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|f(x)| &gt; k&nbsp;&nbsp;(k &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">disjunction:&nbsp;&nbsp;f(x) &lt; −k or f(x) &gt; k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two inequalities of the same kind as f(x); union the solutions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">linear, <a href="/algebra/inequalities/quadratic" style="${linkStyle}">quadratic</a>, or higher-degree, depending on f</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|f(x)| compared to 0 or to a negative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no algebra — read off the table in Section 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅, (−∞, ∞), or the roots / non-roots of f</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) = 0 if needed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">|f(x)| compared to |g(x)|</td>
      <td style="padding: 12px 15px; color: #34495e;">squaring:&nbsp;&nbsp;(g − f)(g + f) compared to 0&nbsp;&nbsp;(or case-split)</td>
      <td style="padding: 12px 15px; color: #34495e;"><a href="/algebra/inequalities/polynomial" style="${linkStyle}">polynomial inequality</a> in factored form</td>
      <td style="padding: 12px 15px; color: #34495e;">sign chart on the factored difference of squares</td>
    </tr>
  </tbody>
</table>
`


//  const sectionsContent = {

//   obj0: {
//   title: `Key Terms`,
//   content: `
// ## Core Concepts
 
// - [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality) — less-than gives a bounded interval, greater-than gives two rays
// - [Compound Inequality](!/algebra/definitions#compound_inequality) — the conversion target: conjunction for $<$, disjunction for $>$
// - [Interval Notation](!/algebra/definitions#interval_notation) — express conjunction as $(a, b)$ or $[a, b]$, disjunction as union
 
// ## From Other Categories
 
// - [Absolute Value](!/algebra/definitions#absolute_value) — distance from zero; always non-negative

// ## Formulas Used on This Page

// - [Absolute Value Inequalities](!/algebra/formulas#absolute_value_inequalities) — $|p| < b \\implies -b < p < b$; $|p| > b \\implies p < -b \\text{ or } p > b$
// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },
//   obj1: {
//     title: `Two Fundamental Forms`,
//     content: `Every absolute value inequality involving a single absolute value term and a constant reduces to one of two forms, each with its own conversion rule.

// The "less than" form $|f(x)| < k$ states that the expression $f(x)$ is within $k$ units of zero. This converts to a conjunction — a double inequality:

// $$-k < f(x) < k$$

// Both conditions must hold simultaneously. The solution is the set of $x$ values for which $f(x)$ lies strictly between $-k$ and $k$.

// The "greater than" form $|f(x)| > k$ states that $f(x)$ is more than $k$ units from zero. This converts to a disjunction — two separate inequalities:

// $$f(x) < -k \\quad \\text{or} \\quad f(x) > k$$

// At least one condition must hold. The solution is the set of $x$ values for which $f(x)$ falls outside the interval $[-k, k]$.

// The non-strict versions $\\leq$ and $\\geq$ work identically, with the boundary values included rather than excluded. The conversions are the same; only the inequality symbols change from strict to non-strict throughout.

// These two translations — less-than becomes a conjunction, greater-than becomes a disjunction — are the entire method. Everything that follows is the application of this principle to increasingly complex expressions inside the absolute value.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Solving the Less-Than Form`,
//     content: `The inequality $|f(x)| < k$ converts to $-k < f(x) < k$. The value of $k$ determines whether a solution exists before any algebra begins.

// When $k > 0$, the double inequality defines a bounded region. The two inequalities $f(x) > -k$ and $f(x) < k$ are solved simultaneously, and the solution is their intersection — the set of $x$ values satisfying both.

// When $k = 0$, the inequality $|f(x)| < 0$ asks for the [absolute value](!/algebra/equations/absolute-value) to be strictly negative, which is impossible. The solution set is empty. The non-strict version $|f(x)| \\leq 0$ has a solution only at the roots of $f(x) = 0$, because zero is the only non-negative value that satisfies $\\leq 0$.

// When $k < 0$, both $|f(x)| < k$ and $|f(x)| \\leq k$ have empty solution sets. Absolute value is never negative, so it can never be less than a negative number.

// For linear $f(x)$, the double inequality is a three-part chain solved by isolating $x$ in the middle. The inequality $|2x - 3| < 5$ becomes $-5 < 2x - 3 < 5$. Adding $3$ throughout: $-2 < 2x < 8$. Dividing by $2$: $-1 < x < 4$. The solution is the open interval $(-1, 4)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Solving the Greater-Than Form`,
//     content: `The inequality $|f(x)| > k$ converts to $f(x) < -k$ or $f(x) > k$. Each part is solved independently, and the solution is the union of the two individual solution sets.

// When $k > 0$, each part contributes a separate region, and the union typically produces two rays — one extending to the left and one to the right.

// When $k = 0$, the inequality $|f(x)| > 0$ asks where $f(x)$ is nonzero. The solution is all real numbers except the roots of $f(x) = 0$. The non-strict version $|f(x)| \\geq 0$ is satisfied by every real number, since absolute value is always non-negative.

// When $k < 0$, the inequality $|f(x)| > k$ is satisfied by every real number — absolute value is always at least zero, which exceeds any negative number. The solution is $(-\\infty, \\infty)$.

// For a linear example: $|4x + 1| \\geq 7$ becomes $4x + 1 \\leq -7$ or $4x + 1 \\geq 7$. From the first: $4x \\leq -8$, so $x \\leq -2$. From the second: $4x \\geq 6$, so $x \\geq \\frac{3}{2}$. The solution is $(-\\infty, -2] \\cup [\\frac{3}{2}, \\infty)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Worked Examples with Linear Expressions`,
//     content: `When the expression inside the absolute value is linear, the compound inequality after conversion is also linear, and the solution follows from the methods on the [linear inequalities](!/algebra/inequalities/linear) page.

// Solve $|3x - 7| < 2$. Convert: $-2 < 3x - 7 < 2$. Add $7$: $5 < 3x < 9$. Divide by $3$: $\\frac{5}{3} < x < 3$. The solution is $\\left(\\frac{5}{3}, 3\\right)$.

// Solve $|1 - 2x| \\geq 5$. Convert: $1 - 2x \\leq -5$ or $1 - 2x \\geq 5$. From the first: $-2x \\leq -6$, so $x \\geq 3$ (direction flips when dividing by $-2$). From the second: $-2x \\geq 4$, so $x \\leq -2$. The solution is $(-\\infty, -2] \\cup [3, \\infty)$.

// Solve $|5x + 3| < -1$. No conversion needed — absolute value is never negative, so it is certainly never less than $-1$. The solution set is empty.

// Solve $|x - 4| > 0$. Convert: $x - 4 < 0$ or $x - 4 > 0$, meaning $x < 4$ or $x > 4$. This is every real number except $x = 4$. The solution is $(-\\infty, 4) \\cup (4, \\infty)$, or equivalently $\\mathbb{R} \\setminus \\{4\\}$.

// In every linear case, the less-than form produces a single bounded interval, and the greater-than form produces two rays. The center of symmetry is the root of $f(x) = 0$, and the radius is determined by $k$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Absolute Value Inequalities with Quadratic or Other Expressions`,
//     content: `When the expression inside the absolute value is not linear, the compound inequality after conversion requires more powerful methods — typically the sign chart.

// Solve $|x^2 - 4| < 5$. Convert to $-5 < x^2 - 4 < 5$. This is two simultaneous inequalities: $x^2 - 4 > -5$ and $x^2 - 4 < 5$.

// From $x^2 - 4 > -5$: $x^2 > -1$. Since $x^2 \\geq 0$ for all real $x$, this holds everywhere. It imposes no restriction.

// From $x^2 - 4 < 5$: $x^2 < 9$, which gives $-3 < x < 3$.

// The intersection of "all real numbers" and "$-3 < x < 3$" is simply $(-3, 3)$.

// Solve $|x^2 - 7x + 10| \\geq 2$. Convert to $x^2 - 7x + 10 \\leq -2$ or $x^2 - 7x + 10 \\geq 2$.

// From the first: $x^2 - 7x + 12 \\leq 0$. Factor: $(x - 3)(x - 4) \\leq 0$. This is a [quadratic inequality](!/algebra/inequalities/quadratic) with roots $3$ and $4$, positive leading coefficient. The expression is non-positive between the roots: $[3, 4]$.

// From the second: $x^2 - 7x + 8 \\geq 0$. The discriminant is $49 - 32 = 17 > 0$. The roots are $\\frac{7 \\pm \\sqrt{17}}{2}$, approximately $1.44$ and $5.56$. With positive leading coefficient, the expression is non-negative outside the roots: $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

// The solution is the union of both parts: $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup [3, 4] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

// The absolute value conversion reduces the problem to standard inequality types. The difficulty is determined by whatever sits inside the bars, not by the absolute value itself.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Inequalities with Absolute Value on Both Sides`,
//     content: `When absolute value appears on both sides — $|f(x)| < |g(x)|$ or $|f(x)| > |g(x)|$ — the standard less-than/greater-than conversion does not apply directly because the right-hand side is not a constant. Two alternative approaches handle these cases.

// The squaring method exploits the fact that $|A| < |B|$ if and only if $A^2 < B^2$ (since both sides are non-negative). The inequality $|f(x)| < |g(x)|$ becomes $[f(x)]^2 < [g(x)]^2$, which rearranges to $[g(x)]^2 - [f(x)]^2 > 0$. Factoring the difference of squares:

// $$(g(x) - f(x))(g(x) + f(x)) > 0$$

// This is a [polynomial inequality](!/algebra/inequalities/polynomial) solvable by sign chart. The critical points are the roots of $g(x) - f(x) = 0$ and $g(x) + f(x) = 0$.

// For $|2x - 1| < |x + 3|$, square both sides: $(2x - 1)^2 < (x + 3)^2$. Rearrange: $(x + 3)^2 - (2x - 1)^2 > 0$. Factor: $((x + 3) - (2x - 1))((x + 3) + (2x - 1)) > 0$, which gives $(4 - x)(3x + 2) > 0$. The roots are $x = 4$ and $x = -\\frac{2}{3}$. The sign chart yields the solution $\\left(-\\frac{2}{3}, 4\\right)$.

// The case-splitting method is the alternative: consider the signs of $f(x)$ and $g(x)$ on each interval defined by their roots, remove the absolute value bars using the piecewise definition, and solve the resulting inequality on each interval. This approach is more laborious but avoids squaring and works for non-polynomial expressions as well.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Geometric Interpretation`,
//     content: `Absolute value measures distance on the number line, and this interpretation turns every absolute value inequality into a geometric statement about proximity or separation.

// The inequality $|x - a| < d$ asks: which points lie within distance $d$ of $a$? The answer is the open interval $(a - d, a + d)$, centered at $a$ with radius $d$. The inequality $|x - 5| < 3$ describes all points within $3$ units of $5$: the interval $(2, 8)$.

// The inequality $|x - a| > d$ asks: which points lie farther than distance $d$ from $a$? The answer is two rays: $(-\\infty, a - d) \\cup (a + d, \\infty)$. The inequality $|x - 5| > 3$ describes all points more than $3$ units from $5$: $(-\\infty, 2) \\cup (8, \\infty)$.

// The inequality $|x - a| < |x - b|$ asks: which points are closer to $a$ than to $b$? On the number line, the set of points closer to $a$ is everything on $a$'s side of the midpoint $m = \\frac{a + b}{2}$. If $a < b$, the solution is $(-\\infty, m)$. This follows from the squaring method: $|x - a| < |x - b|$ becomes $(x - a)^2 < (x - b)^2$, which simplifies to a linear inequality whose solution is the ray ending at the midpoint.

// These geometric readings provide instant answers for simple absolute value inequalities and serve as sanity checks for more complex ones. If the algebraic solution to $|x - 5| < 3$ produces something other than a symmetric interval centered at $5$ with radius $3$, the algebra contains an error.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Summary of Absolute Value Inequality Forms`,
//     content: `Every absolute value inequality is solved in two stages: first remove the absolute value bars by applying the appropriate conversion, then solve the resulting compound inequality using whatever method its internal structure demands. The table below collects the cases covered above, the conversion that removes the absolute value, and the kind of inequality that remains.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## Core Concepts

- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality) — less-than gives a bounded interval, greater-than gives two rays
- [Compound Inequality](!/algebra/definitions#compound_inequality) — the conversion target: conjunction for $<$, disjunction for $>$
- [Interval Notation](!/algebra/definitions#interval_notation) — express conjunction as $(a, b)$ or $[a, b]$, disjunction as union

## From Other Categories

- [Absolute Value](!/algebra/definitions#absolute_value) — distance from zero; always non-negative

## Formulas Used on This Page

- [Absolute Value Inequalities](!/algebra/formulas#absolute_value_inequalities) — $|p| < b \\implies -b < p < b$; $|p| > b \\implies p < -b \\text{ or } p > b$
`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

  obj1: {
    title: `Two Fundamental Forms`,
    content: `Every absolute value inequality involving a single absolute value term and a constant reduces to one of two forms, each with its own conversion rule.

@academic[formula_callout:Absolute Value Inequalities
$$|p| < b \\implies -b < p < b \\qquad |p| > b \\implies p < -b \\text{ or } p > b$$
/algebra/formulas#absolute_value_inequalities]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The "less than" form $|f(x)| < k$ states that the expression $f(x)$ is within $k$ units of zero. This converts to a conjunction — a double inequality:

@academic[formula_callout:Two Fundamental Forms
$$-k < f(x) < k$$]@

Both conditions must hold simultaneously. The solution is the set of $x$ values for which $f(x)$ lies strictly between $-k$ and $k$.

The "greater than" form $|f(x)| > k$ states that $f(x)$ is more than $k$ units from zero. This converts to a disjunction — two separate inequalities:

@academic[formula_callout:Two Fundamental Forms
$$f(x) < -k \\quad \\text{or} \\quad f(x) > k$$]@

At least one condition must hold. The solution is the set of $x$ values for which $f(x)$ falls outside the interval $[-k, k]$.

@academic[rule_corollary_plain:The non-strict versions $\\leq$ and $\\geq$ work identically, with the boundary values included rather than excluded.]@

The conversions are the same; only the inequality symbols change from strict to non-strict throughout.

These two translations — less-than becomes a conjunction, greater-than becomes a disjunction — are the entire method. Everything that follows is the application of this principle to increasingly complex expressions inside the absolute value.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Solving the Less-Than Form`,
    content: `The inequality $|f(x)| < k$ converts to $-k < f(x) < k$. The value of $k$ determines whether a solution exists before any algebra begins.

When $k > 0$, the double inequality defines a bounded region. The two inequalities $f(x) > -k$ and $f(x) < k$ are solved simultaneously, and the solution is their intersection — the set of $x$ values satisfying both.

When $k = 0$, the inequality $|f(x)| < 0$ asks for the [absolute value](!/algebra/equations/absolute-value) to be strictly negative, which is impossible. The solution set is empty. The non-strict version $|f(x)| \\leq 0$ has a solution only at the roots of $f(x) = 0$, because zero is the only non-negative value that satisfies $\\leq 0$.

@academic[rule_corollary_plain:When $k < 0$, both $|f(x)| < k$ and $|f(x)| \\leq k$ have empty solution sets. Absolute value is never negative, so it can never be less than a negative number.]@

For linear $f(x)$, the double inequality is a three-part chain solved by isolating $x$ in the middle.

@academic[example:Example
The inequality $|2x - 3| < 5$ becomes $-5 < 2x - 3 < 5$. Adding $3$ throughout: $-2 < 2x < 8$. Dividing by $2$: $-1 < x < 4$. The solution is the open interval $(-1, 4)$.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving the Greater-Than Form`,
    content: `The inequality $|f(x)| > k$ converts to $f(x) < -k$ or $f(x) > k$. Each part is solved independently, and the solution is the union of the two individual solution sets.

When $k > 0$, each part contributes a separate region, and the union typically produces two rays — one extending to the left and one to the right.

When $k = 0$, the inequality $|f(x)| > 0$ asks where $f(x)$ is nonzero. The solution is all real numbers except the roots of $f(x) = 0$. The non-strict version $|f(x)| \\geq 0$ is satisfied by every real number, since absolute value is always non-negative.

@academic[rule_corollary_plain:When $k < 0$, the inequality $|f(x)| > k$ is satisfied by every real number — absolute value is always at least zero, which exceeds any negative number.]@

The solution is $(-\\infty, \\infty)$.

@academic[example:Example
For a linear example: $|4x + 1| \\geq 7$ becomes $4x + 1 \\leq -7$ or $4x + 1 \\geq 7$. From the first: $4x \\leq -8$, so $x \\leq -2$. From the second: $4x \\geq 6$, so $x \\geq \\frac{3}{2}$. The solution is $(-\\infty, -2] \\cup [\\frac{3}{2}, \\infty)$.]@

@academic[pitfall,aside:true,width:35%:Writing the greater-than form as a chain
Writing $|4x + 1| \\geq 7$ as $-7 \\leq 4x + 1 \\leq 7$ gives $-2 \\leq x \\leq \\frac{3}{2}$, the points where $|4x + 1| \\leq 7$. The greater-than form splits instead: $x \\leq -2$ or $x \\geq \\frac{3}{2}$.
[Read more](!#pitfalls)]@

The two parts of the disjunction are solved one at a time, and each answer is a ray. Here both rays start $\\frac{7}{4}$ away from $x = -\\frac{1}{4}$, the point where $4x + 1 = 0$, and run outward in opposite directions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Worked Examples with Linear Expressions`,
    content: `When the expression inside the absolute value is linear, the compound inequality after conversion is also linear, and the solution follows from the methods on the [linear inequalities](!/algebra/inequalities/linear) page.

Solve $|3x - 7| < 2$. Convert: $-2 < 3x - 7 < 2$. Add $7$: $5 < 3x < 9$. Divide by $3$: $\\frac{5}{3} < x < 3$. The solution is $\\left(\\frac{5}{3}, 3\\right)$.

Solve $|1 - 2x| \\geq 5$. Convert: $1 - 2x \\leq -5$ or $1 - 2x \\geq 5$. From the first: $-2x \\leq -6$, so $x \\geq 3$ (direction flips when dividing by $-2$). From the second: $-2x \\geq 4$, so $x \\leq -2$. The solution is $(-\\infty, -2] \\cup [3, \\infty)$.

Solve $|5x + 3| < -1$. No conversion needed — absolute value is never negative, so it is certainly never less than $-1$. The solution set is empty.

Solve $|x - 4| > 0$. Convert: $x - 4 < 0$ or $x - 4 > 0$, meaning $x < 4$ or $x > 4$. This is every real number except $x = 4$. The solution is $(-\\infty, 4) \\cup (4, \\infty)$, or equivalently $\\mathbb{R} \\setminus \\{4\\}$.

@academic[pitfall,aside:true,width:35%:Forgetting to flip when dividing by a negative
Dividing $-2x \\leq -6$ and $-2x \\geq 4$ by $-2$ without flipping gives $x \\leq 3$ or $x \\geq -2$, which is every real number. Flipping both signs gives $(-\\infty, -2] \\cup [3, \\infty)$.
[Read more](!#pitfalls)]@

In every linear case with $k > 0$, the less-than form produces a single bounded interval, and the greater-than form produces two rays. The center of symmetry is the root of $f(x) = 0$, and the radius is determined by $k$.

To solve your own absolute value inequality with each step shown, use the [absolute value inequality solver](!/algebra/calculators/inequalities/absolute-value).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Absolute Value Inequalities with Quadratic or Other Expressions`,
    content: `When the expression inside the absolute value is not linear, the compound inequality after conversion requires more powerful methods — typically the sign chart.

@academic[example:Example
Solve $|x^2 - 4| < 5$. Convert to $-5 < x^2 - 4 < 5$. This is two simultaneous inequalities: $x^2 - 4 > -5$ and $x^2 - 4 < 5$.

From $x^2 - 4 > -5$: $x^2 > -1$. Since $x^2 \\geq 0$ for all real $x$, this holds everywhere. It imposes no restriction.

From $x^2 - 4 < 5$: $x^2 < 9$, which gives $-3 < x < 3$.

The intersection of "all real numbers" and "$-3 < x < 3$" is simply $(-3, 3)$.]@

Solve $|x^2 - 7x + 10| \\geq 2$. Convert to $x^2 - 7x + 10 \\leq -2$ or $x^2 - 7x + 10 \\geq 2$.

From the first: $x^2 - 7x + 12 \\leq 0$. Factor: $(x - 3)(x - 4) \\leq 0$. This is a [quadratic inequality](!/algebra/inequalities/quadratic) with roots $3$ and $4$, positive leading coefficient. The expression is non-positive between the roots: $[3, 4]$.

From the second: $x^2 - 7x + 8 \\geq 0$. The discriminant is $49 - 32 = 17 > 0$. The roots are $\\frac{7 \\pm \\sqrt{17}}{2}$, approximately $1.44$ and $5.56$. With positive leading coefficient, the expression is non-negative outside the roots: $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

@academic[pitfall,aside:true,width:35%:Solving only the positive part
Solving only $x^2 - 7x + 10 \\geq 2$ gives the two outer rays and loses $[3, 4]$, where the inside is $-2$ or less: at $x = 3.5$, $|-2.25| = 2.25 \\geq 2$. The part $x^2 - 7x + 10 \\leq -2$ supplies that piece.
[Read more](!#pitfalls)]@

The solution is the union of both parts: $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup [3, 4] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

The absolute value conversion reduces the problem to standard inequality types. The difficulty is determined by whatever sits inside the bars, not by the absolute value itself.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Inequalities with Absolute Value on Both Sides`,
    content: `When absolute value appears on both sides — $|f(x)| < |g(x)|$ or $|f(x)| > |g(x)|$ — the standard less-than/greater-than conversion does not apply directly because the right-hand side is not a constant. Two alternative approaches handle these cases.

@academic[rule_plain:The squaring method exploits the fact that $|A| < |B|$ if and only if $A^2 < B^2$ (since both sides are non-negative).]@

The inequality $|f(x)| < |g(x)|$ becomes $[f(x)]^2 < [g(x)]^2$, which rearranges to $[g(x)]^2 - [f(x)]^2 > 0$. Factoring the difference of squares:

@academic[formula_callout:Inequalities with Absolute Value on Both Sides
$$(g(x) - f(x))(g(x) + f(x)) > 0$$]@

This is a [polynomial inequality](!/algebra/inequalities/polynomial) solvable by sign chart. The critical points are the roots of $g(x) - f(x) = 0$ and $g(x) + f(x) = 0$.

@academic[example:Example
For $|2x - 1| < |x + 3|$, square both sides: $(2x - 1)^2 < (x + 3)^2$. Rearrange: $(x + 3)^2 - (2x - 1)^2 > 0$. Factor: $((x + 3) - (2x - 1))((x + 3) + (2x - 1)) > 0$, which gives $(4 - x)(3x + 2) > 0$. The roots are $x = 4$ and $x = -\\frac{2}{3}$. The sign chart yields the solution $\\left(-\\frac{2}{3}, 4\\right)$.]@

@academic[pitfall,aside:true,width:35%:Dropping the bars on both sides
Dropping the bars in $|2x - 1| < |x + 3|$ gives $2x - 1 < x + 3$, so $x < 4$. That keeps $x = -1$, where $|-3| = 3$ is not less than $|2| = 2$. Squaring gives $\\left(-\\frac{2}{3}, 4\\right)$.
[Read more](!#pitfalls)]@

The case-splitting method is the alternative: consider the signs of $f(x)$ and $g(x)$ on each interval defined by their roots, remove the absolute value bars using the piecewise definition, and solve the resulting inequality on each interval. This approach is more laborious but avoids squaring and works for non-polynomial expressions as well.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Geometric Interpretation`,
    content: `Absolute value measures distance on the number line, and this interpretation turns every absolute value inequality into a geometric statement about proximity or separation.

@academic[fact,aside:true,width:35%:Calculus is written in this language
A function $f$ is continuous at $a$ when every $\\varepsilon > 0$ has a $\\delta > 0$ such that $|x - a| < \\delta$ forces $|f(x) - f(a)| < \\varepsilon$. Both conditions are distance inequalities of exactly this kind: an interval around a centre.]@

The inequality $|x - a| < d$ asks: which points lie within distance $d$ of $a$? The answer is the open interval $(a - d, a + d)$, centered at $a$ with radius $d$. The inequality $|x - 5| < 3$ describes all points within $3$ units of $5$: the interval $(2, 8)$.

The inequality $|x - a| > d$ asks: which points lie farther than distance $d$ from $a$? The answer is two rays: $(-\\infty, a - d) \\cup (a + d, \\infty)$. The inequality $|x - 5| > 3$ describes all points more than $3$ units from $5$: $(-\\infty, 2) \\cup (8, \\infty)$.

The inequality $|x - a| < |x - b|$ asks: which points are closer to $a$ than to $b$? On the number line, the set of points closer to $a$ is everything on $a$'s side of the midpoint $m = \\frac{a + b}{2}$. If $a < b$, the solution is $(-\\infty, m)$. This follows from the squaring method: $|x - a| < |x - b|$ becomes $(x - a)^2 < (x - b)^2$, which simplifies to a linear inequality whose solution is the ray ending at the midpoint.

@academic[pitfall,aside:true,width:35%:Reading the centre with the wrong sign
Reading $|x + 2| < 3$ as distance from $2$ gives $(-1, 5)$. Since $|x + 2| = |x - (-2)|$, the centre is $-2$ and the answer is $(-5, 1)$.
[Read more](!#pitfalls)]@

These geometric readings provide instant answers for simple absolute value inequalities and serve as sanity checks for more complex ones. If the algebraic solution to $|x - 5| < 3$ produces something other than a symmetric interval centered at $5$ with radius $3$, the algebra contains an error.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Summary of Absolute Value Inequality Forms`,
    content: `Every absolute value inequality is solved in two stages: first remove the absolute value bars by applying the appropriate conversion, then solve the resulting compound inequality using whatever method its internal structure demands. The table below collects the cases covered above, the conversion that removes the absolute value, and the kind of inequality that remains.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for most wrong answers to absolute value inequalities. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Writing the greater-than form as a chain**

The greater-than form is converted with the same double inequality as the less-than form, so the answer is the interval between the boundaries instead of the two rays outside them.

Wrong working:
$$|4x + 1| \\geq 7 \\implies -7 \\leq 4x + 1 \\leq 7 \\implies -2 \\leq x \\leq \\frac{3}{2}$$

Right working: greater-than becomes a disjunction.
$$4x + 1 \\leq -7 \\text{ or } 4x + 1 \\geq 7 \\implies x \\leq -2 \\text{ or } x \\geq \\frac{3}{2}$$
The solution is $(-\\infty, -2] \\cup \\left[\\frac{3}{2}, \\infty\\right)$.

Why it happens: the chain $-k < f(x) < k$ is usually learned first and is the more familiar shape, so it gets used for both forms.

How to check: test a point from the wrong answer. $x = 0$ gives $|1| = 1$, which is not $\\geq 7$. A point from the right answer, $x = 2$, gives $|9| = 9 \\geq 7$.

**Forgetting to flip when dividing by a negative**

In $|1 - 2x| \\geq 5$, both parts end with a division by $-2$, and the inequality signs are kept as they were.

Wrong working:
$$1 - 2x \\leq -5 \\implies -2x \\leq -6 \\implies x \\leq 3$$
$$1 - 2x \\geq 5 \\implies -2x \\geq 4 \\implies x \\geq -2$$
Together, $x \\leq 3$ or $x \\geq -2$ covers every real number.

Right working: dividing by $-2$ reverses each sign.
$$-2x \\leq -6 \\implies x \\geq 3 \\qquad -2x \\geq 4 \\implies x \\leq -2$$
The solution is $(-\\infty, -2] \\cup [3, \\infty)$.

Why it happens: the sign rule belongs to [linear inequalities](!/algebra/inequalities/linear), and it slips once attention is on the absolute value conversion.

How to check: a greater-than inequality with $k > 0$ never holds for every $x$. Here $x = 0$ gives $|1| = 1$, which is not $\\geq 5$, while $x = 3$ gives $|-5| = 5 \\geq 5$.

**Solving only the positive part**

For $|x^2 - 7x + 10| \\geq 2$, only $x^2 - 7x + 10 \\geq 2$ is solved, and the values where the inside is $-2$ or less are lost.

Wrong working:
$$x^2 - 7x + 8 \\geq 0 \\implies x \\leq \\frac{7 - \\sqrt{17}}{2} \\text{ or } x \\geq \\frac{7 + \\sqrt{17}}{2}$$

Right working: the second part $x^2 - 7x + 10 \\leq -2$ gives $(x - 3)(x - 4) \\leq 0$, so $3 \\leq x \\leq 4$. The solution is $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup [3, 4] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

Why it happens: with a linear inside, the negative part always gives a ray and is hard to overlook. With a quadratic inside, it can be a short bounded piece in the middle that looks as if it adds nothing.

How to check: test a point between the two outer rays. $x = 3.5$ gives $12.25 - 24.5 + 10 = -2.25$, and $|-2.25| = 2.25 \\geq 2$, so it belongs to the answer.

**Dropping the bars on both sides**

With absolute value on both sides, the bars are removed and the inner expressions are compared directly.

Wrong working:
$$|2x - 1| < |x + 3| \\implies 2x - 1 < x + 3 \\implies x < 4$$

Right working: squaring keeps the comparison valid, because both sides are non-negative.
$$(x + 3)^2 - (2x - 1)^2 > 0 \\implies (4 - x)(3x + 2) > 0 \\implies -\\frac{2}{3} < x < 4$$

Why it happens: removing matching bars from both sides looks like cancelling the same operation, but $|A| < |B|$ compares sizes and says nothing about the signs of $A$ and $B$.

How to check: test a point from the wrong answer. $x = -1$ gives $|-3| = 3$ on the left and $|2| = 2$ on the right, and $3 < 2$ is false.

**Reading the centre with the wrong sign**

The inequality $|x + 2| < 3$ is read as "within $3$ of $2$", taking the number inside the bars as the centre.

Wrong working: centre $2$, radius $3$, so the answer is $(-1, 5)$.

Right working: $|x + 2| = |x - (-2)|$ is the distance from $x$ to $-2$. The answer is $(-2 - 3, -2 + 3) = (-5, 1)$.

Why it happens: the pattern $|x - a|$ has a minus sign, and when the bars hold a plus sign the number is copied as it appears.

How to check: convert algebraically. $-3 < x + 2 < 3$ gives $-5 < x < 1$. Or test $x = 4$ from the wrong answer: $|6| = 6$, which is not less than $3$.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Compound Inequalities Through the Lens of Distance`,
  content: `An absolute value inequality converts into a compound inequality through one of two standard translations — one for "less than," one for "greater than." The less-than form produces a bounded interval, the greater-than form produces two unbounded rays, and the geometric interpretation as distance on the number line makes both conversions intuitive. Once the absolute value is removed, the resulting compound inequality is solved by whatever method its internal structure requires: linear techniques for linear expressions, sign charts for quadratic or polynomial expressions, and so on. The absolute value is the outer shell; the content inside determines the difficulty.`,
};




const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Absolute Value Inequalities",
    "description": "Master absolute value inequalities: less-than and greater-than forms, conversion to compound inequalities, linear and quadratic cases, squaring method for both sides, and geometric distance interpretation.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/absolute-value",
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
      "name": "Absolute Value Inequalities"
    },
    "teaches": [
      "Less-than form converts to conjunction",
      "Greater-than form converts to disjunction",
      "Solving with linear expressions inside",
      "Solving with quadratic expressions inside",
      "Squaring method for absolute value on both sides",
      "Geometric interpretation as distance"
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
        "name": "Absolute Value Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/absolute-value"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpAbsForms = { kind: 'domainOpen', svgTitle: '|x| < 3 is one interval; |x| > 3 is two rays', range: [-6, 6],
    rows: [
      { label: '|x| < 3: within 3 of 0', color: 'f', segs: [[-3, 3, true, true]], tag: { text: '(−3, 3)', x: 4.5 } },
      { label: '|x| > 3: more than 3 from 0', color: 'r', segs: [[null, -3, false, true], [3, null, true]], tag: { text: '(−∞, −3) ∪ (3, ∞)', x: 3.6 } },
    ],
    caption: 'Less-than traps x between two bounds; greater-than pushes it out' };
  const fpAbsFold = { kind: 'pieces', svgTitle: '|x^2 - 7x + 10| >= 2 holds on three pieces', xRange: [-0.5, 7.5], yRange: [-1, 8],
    pieces: [
      { fn: (x) => Math.abs(x * x - 7 * x + 10), from: -0.5, to: 7.5, ends: [null, null], color: 'f' },
      { fn: () => 2, from: -0.5, to: 7.5, ends: [null, null], color: 'g', label: { text: 'y = 2', x: 7.2, y: 2, pos: 'n' } },
    ],
    points: [{ x: (7 - Math.sqrt(17)) / 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: (7 + Math.sqrt(17)) / 2, y: 2 }],
    notes: [{ x: 0.45, y: 7.4, text: 'x ≤ 1.44, 3 ≤ x ≤ 4, x ≥ 5.56', pos: 'e', color: 'r' },
      { x: 3.5, y: 2.6, text: '[3, 4]: the fold tops 2', pos: 'n', color: 'f' }],
    caption: '|x² − 7x + 10| ≥ 2 holds on three separate pieces' };
  const fpAbsDistance = { kind: 'domainOpen', svgTitle: '|x - 5| < 3 and |x - 1| < |x - 7| read as distances', range: [-2, 10],
    rows: [
      { label: '|x − 5| < 3: within 3 of 5', color: 'f', segs: [[2, 8, true, true]], tag: { text: '(2, 8)', x: 9 } },
      { label: '|x − 1| < |x − 7|: closer to 1 than to 7', color: 'r', segs: [[null, 4, false, true]], tag: { text: 'x < 4', x: 8 } },
    ],
    caption: 'Distance from a point, or nearer of two points: 4 is the midpoint' };

  // Concept introduction figures (section 1), one running instance: |x| < 3.
  const fpCiDistance = { kind: 'domainOpen', svgTitle: '|x| < 3: the points less than 3 away from 0', range: [-5, 5],
    rows: [
      { label: '|x| < 3: closer than 3 to 0', color: 'f', segs: [[-3, 3, true, true]], tag: { text: '(−3, 3)', x: 4 } },
    ],
    caption: 'Every point less than 3 away from 0, on either side' };

  const conceptIntroFigures = {
    distance: renderFunctionPlotV2(fpCiDistance),
    graph: inequalityVisualizerDiagrams['abs-centered'],
    bothTable: ciBothTable,
    sidesTable: ciSidesTable,
  };

  const demoUnits = {
    lessThan: demoUnitFrame({
      svg: inequalityVisualizerDiagrams['abs-shifted'],
      caption: '|x &#8722; 2| &#8722; 4 &lt; 0: the interval (&#8722;2, 6)',
      text: 'The V has its corner at x = 2 and dips below the axis between its zeros at &#8722;2 and 6, so the less-than inequality holds on that bounded interval: the compound inequality &#8722;4 &lt; x &#8722; 2 &lt; 4 drawn out. Shifting the corner shifts the interval without changing its width. Move the corner and the level on the',
      href: '/algebra/visual-tools/inequality',
      linkText: 'inequality visual explorer',
    }),
    forms: demoUnitFrame({
      svg: renderFunctionPlotV2(fpAbsForms),
      caption: 'One interval or two rays',
      text: 'With k = 3: |x| &lt; 3 asks for points within 3 of zero, a single bounded interval from &#8722;3 to 3, written as the conjunction &#8722;3 &lt; x &lt; 3. |x| &gt; 3 asks for points more than 3 from zero, two rays heading away from each other, written as the disjunction x &lt; &#8722;3 or x &gt; 3. Both boundaries are open because both inequalities are strict.',
    }),
    fold: demoUnitFrame({
      svg: renderFunctionPlotV4(fpAbsFold),
      caption: 'Three pieces from one inequality',
      text: 'The section\'s |x&#178; &#8722; 7x + 10| &#8805; 2. The bars fold the dip of the parabola between 2 and 5 upward, and the folded hump just reaches above 2 between x = 3 and x = 4. Together with the two outer arms, the graph is on or above the level on three pieces: x &#8804; (7 &#8722; &#8730;17)/2 &#8776; 1.44, 3 &#8804; x &#8804; 4, and x &#8805; (7 + &#8730;17)/2 &#8776; 5.56.',
    }),
    distance: demoUnitFrame({
      svg: renderFunctionPlotV2(fpAbsDistance),
      caption: 'Absolute value as distance on the line',
      text: '|x &#8722; 5| &lt; 3 collects the points less than 3 away from 5: the interval (2, 8) centred at 5. |x &#8722; 1| &lt; |x &#8722; 7| compares two distances: the points nearer to 1 than to 7 are everything left of their midpoint 4, the open ray x &lt; 4. No algebra is needed once each side is read as a distance.',
    }),
  };

  return {
  props: {
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj3Table,
    obj6Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Absolute Value Inequalities: Less-Than & Greater-Than | Learn Math Class",
      description: "Master absolute value inequalities: less-than and greater-than forms, conversion to compound inequalities, linear and quadratic cases, squaring method for both sides, and geometric distance interpretation.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/absolute-value",
      name: "Absolute Value Inequalities"
    },
  }
}
   }

export default function AbsoluteValueInequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj3Table,
  obj6Table,
  summaryTable,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template F (collapse).
  const conceptIntro = {
    beats: [
      {
        id: 'distance',
        lead: `Absolute value measures distance from zero.`,
        content: `The number $|x|$ is how far $x$ is from $0$ on the number line, whichever side it is on: $|2| = 2$ and $|-2| = 2$. Read that way, $|x| < 3$ asks for every point closer than $3$ to zero. There are such points on both sides, and they form one unbroken stretch.`,
        visual: ciSvg('distance'),
        caption: `The bar is every point whose distance from $0$ is under $3$. The open dots at $-3$ and $3$ are exactly $3$ away, so they are left out.`,
      },
      {
        id: 'second',
        lead: `The same condition can also be written as two ordinary inequalities.`,
        content: [
          `Drop the picture and use the rule instead: $|x| < 3$ is the same as $-3 < x < 3$ — the number is above $-3$ and, at the same time, below $3$. In general, with any expression $f(x)$ inside the bars:`,
          `@academic[formula_callout:Two Fundamental Forms
$$-k < f(x) < k$$]@`,
          `Both conditions must hold simultaneously. No distances are involved, only two comparisons joined by AND.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Both descriptions give the same answer on every value.`,
        content: [
          `Test the same values against each one: the distance reading in one column, the double inequality in the next.`,
          ciTable('bothTable'),
          `The two columns never disagree. Both accept $-1$, $0$ and $2$, both reject $\\pm 4$, and both reject the borders $\\pm 3$ for the same reason: a distance of exactly $3$ is not less than $3$.`,
        ],
        visual: ciSvg('graph'),
        caption: `The graph of $|x| - 3$ is below the axis exactly where $|x| < 3$: on $(-3, 3)$, the "yes" rows of the table, with the open circles at $\\pm 3$. The same state is on the [inequality visual explorer](!/algebra/visual-tools/inequality).`,
      },
      {
        id: 'agree',
        lead: `The two descriptions were never separate, because each side of zero gives one half of the chain.`,
        content: [
          `On the right of zero the distance is $x$ itself; on the left it is $-x$. So "closer than $3$" turns into one ordinary inequality on each side.`,
          ciTable('sidesTable'),
          `The right side contributes $x < 3$, the left side contributes $x > -3$, and a point belongs if it satisfies its own side's condition. Put together that is $-3 < x < 3$: the double inequality is the distance picture, written one side at a time.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `An [absolute value inequality](!/algebra/definitions#absolute_value_inequality) is an inequality in which the unknown appears inside absolute value bars, such as $|x| < 3$ or $|2x - 3| \\geq 5$. With one absolute value and a constant it takes one of two forms, each with its own conversion:`,
        formula: `@academic[formula_callout:Absolute Value Inequalities
$$|p| < b \\implies -b < p < b \\qquad |p| > b \\implies p < -b \\text{ or } p > b$$
/algebra/formulas#absolute_value_inequalities]@`,
        footer: `@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@`,
      },
      {
        id: 'kind',
        lead: `An absolute value inequality is a statement about distance, and its answer is a set.`,
        content: [
          `It is not a number and not a function. It is true for some values of $x$ and false for others, and its answer collects the values that make it true. Less-than keeps the points near the centre, so its answer is one interval. Greater-than keeps the points far away, so its answer is two rays pointing apart.`,
          <div key={'unit-forms'} dangerouslySetInnerHTML={{ __html: demoUnits.forms }} />,
          `Less-than becomes AND, greater-than becomes OR: the shape of the answer follows.`,
        ],
      },
      {
        id: 'caveat',
        lead: `Read the distance when the inside is simple; convert when it is not.`,
        content: [
          `For $|x| < 3$ or $|x - 5| < 2$ the distance picture gives the answer at a glance. For $|2x - 3| < 5$ or $|x^2 - 4| > 1$ there is no single centre to read from, and the conversion does the work. The less-than form becomes the chain above. The greater-than form becomes a disjunction — two separate inequalities:`,
          `@academic[formula_callout:Two Fundamental Forms
$$f(x) < -k \\quad \\text{or} \\quad f(x) > k$$]@`,
          `At least one condition must hold. The solution is the set of $x$ values for which $f(x)$ falls outside the interval $[-k, k]$.`,
          `@academic[rule_corollary_plain:The non-strict versions $\\leq$ and $\\geq$ work identically, with the boundary values included rather than excluded.]@`,
          `The conversions are the same; only the inequality symbols change from strict to non-strict throughout. One edge the conversion hides: a distance is never negative, so when $k$ is negative $|f(x)| < k$ has no solutions at all and $|f(x)| > k$ holds for every $x$.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page applies these two conversions: the less-than and greater-than forms in detail, worked linear examples, expressions with squares inside the bars, absolute value on both sides, and the distance reading again as a geometric interpretation.`,
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
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
                  <div key={'unit-lessThan'} dangerouslySetInnerHTML={{ __html: demoUnits.lessThan }} />,
          `The centre of the interval is wherever the expression inside the bars vanishes; its width is 2k divided by the size of the coefficient of x.`,
        ]
    },

    // obj3: prose + k-edge-cases matrix consolidating obj2 + obj3 content
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
          `@academic[punchline:Greater-than splits into two separate conditions joined by OR, and the answer is the union of what each one allows.]@`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-fold'} dangerouslySetInnerHTML={{ __html: demoUnits.fold }} />,
          `With a non-linear inside, each half of the conversion can contribute its own pieces.`,
        ]
    },

    // obj6: prose + squaring vs case-splitting comparison table
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div
            key={'obj6-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj6Table }}
          />,
          `@academic[punchline:Bars on both sides can be removed by squaring, which is safe because both sides are sizes and never negative.]@`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-distance'} dangerouslySetInnerHTML={{ __html: demoUnits.distance }} />,
          `Reading |x − a| as distance from a turns many of these inequalities into a picture on the number line.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Absolute Value Inequalities</h1>
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