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



export async function getStaticProps(){
const keyWords = [
  "quadratic inequalities",
  "solving quadratic inequalities",
  "quadratic inequality discriminant",
  "sign chart method",
  "parabola inequality",
  "ax2 + bx + c inequality",
  "quadratic inequality examples",
  "interval notation quadratic",
  "two roots inequality",
  "quadratic inequality graph",
  "positive negative quadratic",
  "reducible inequalities",
  "factored quadratic inequality",
  "leading coefficient sign"
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

// obj2 — comparison: discriminant cases and structural consequences
// Concept introduction (section 1) — template A, definition last. Running
// instance: x² < 3x + 10, the section's own demo frame (belowLine). Old obj1
// text is kept in sectionsContent.obj1, unused; its formula box and the demo
// frame with its closing line are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciRaceTable = ciTableOpen(['x', 'x²', '3x + 10', 'x² smaller?']) +
  ciRow(['−10', '100', '−20', 'no']) +
  ciRow(['0', '0', '10', 'yes'], { shade: true, color: '#2563EB', cols: [3] }) +
  ciRow(['10', '100', '40', 'no'], { last: true }) +
  '</tbody></table>'
const ciFactorTable = ciTableOpen(['piece of the line', 'x + 2', 'x − 5', '(x + 2)(x − 5)']) +
  ciRow(['left of −2', '−', '−', '+']) +
  ciRow(['between −2 and 5', '+', '−', '− : the answer'], { shade: true, color: '#2563EB', cols: [3] }) +
  ciRow(['right of 5', '+', '+', '+'], { last: true }) +
  '</tbody></table>'

const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison} text-align: center;">Discriminant Δ = b² − 4ac</th>
      <th style="${tableHeaders.comparison} text-align: center;"># of real roots</th>
      <th style="${tableHeaders.comparison} text-align: center;"># of intervals</th>
      <th style="${tableHeaders.comparison}">Sign behavior of the quadratic</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">2 distinct (r₁ &lt; r₂)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign alternates: outer regions opposite to inner</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1 repeated (r)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign of a everywhere; equals 0 only at r</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">Δ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">none</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">1 (whole line)</td>
      <td style="padding: 12px 15px; color: #34495e;">sign of a everywhere; never zero</td>
    </tr>
  </tbody>
</table>
`

// obj7 — comparison: parabola direction × where it lies above/below the x-axis (assumes Δ > 0)
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Leading coefficient</th>
      <th style="${tableHeaders.comparison}">Parabola opens</th>
      <th style="${tableHeaders.comparison}">Above x-axis (expression &gt; 0)</th>
      <th style="${tableHeaders.comparison}">Below x-axis (expression &lt; 0)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">upward</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">outside the roots: (−∞, r₁) ∪ (r₂, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">between the roots: (r₁, r₂)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">a &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">downward</td>
      <td style="padding: 12px 15px; color: #34495e;">between the roots: (r₁, r₂)</td>
      <td style="padding: 12px 15px; color: #34495e;">outside the roots: (−∞, r₁) ∪ (r₂, ∞)</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary: capstone Δ × answer matrix (assumes a > 0)
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Discriminant</th>
      <th style="${tableHeaders.summary}">Roots</th>
      <th style="${tableHeaders.summary}">Sign pattern across the line (a &gt; 0)</th>
      <th style="${tableHeaders.summary}">Solution to expression &gt; 0</th>
      <th style="${tableHeaders.summary}">Solution to expression &lt; 0</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁ &lt; r₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">+&nbsp;&nbsp;−&nbsp;&nbsp;+&nbsp;&nbsp;(across r₁, r₂)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, r₁) ∪ (r₂, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(r₁, r₂)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r (repeated)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">+&nbsp;&nbsp;everywhere; equals 0 at r</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all x ≠ r</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅ (empty)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">Δ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">none</td>
      <td style="padding: 12px 15px; color: #34495e;">+&nbsp;&nbsp;everywhere</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">∅ (empty)</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Core Concepts
 
- [Quadratic Inequality](!/algebra/definitions#quadratic_inequality) — $ax^2 + bx + c > 0$; roots are boundaries, parabola determines sign regions
- [Sign Analysis](!/algebra/definitions#sign_analysis) — sign chart partitions the number line into intervals of constant sign
- [Interval Notation](!/algebra/definitions#interval_notation) — express the solution as intervals or unions
 
## From Other Categories
 
- [Discriminant](!/algebra/definitions#discriminant) — $\\Delta = b^2 - 4ac$ determines the number of boundary points`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition and Standard Form`,
    content: `A quadratic inequality in one variable is any inequality that can be written as

@academic[formula_callout:Definition and Standard Form
$$ax^2 + bx + c > 0$$]@

(or with $<$, $\\leq$, or $\\geq$), where $a$, $b$, $c$ are real constants and $a \\neq 0$. The expression on the left is a quadratic polynomial, and the inequality asks where that polynomial takes positive or negative values.

Every quadratic inequality can be brought into standard form by moving all terms to one side. The inequality $x^2 < 3x + 10$ becomes $x^2 - 3x - 10 < 0$ after subtracting $3x + 10$ from both sides. The right-hand side is zero, and the question reduces to determining the sign of the left-hand side across the number line.

The solution depends entirely on the roots of the corresponding [quadratic equation](!/algebra/equations/quadratic) $ax^2 + bx + c = 0$. These roots, if they exist, are the boundary points — the values where the expression changes from positive to negative or vice versa. The sign of $a$ determines which regions are positive and which are negative.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Role of the Discriminant`,
    content: `The discriminant $\\Delta = b^2 - 4ac$ determines how many real roots the quadratic has, and therefore how many boundary points appear on the number line. This settles the structure of the solution before any interval testing begins.

When $\\Delta > 0$, two distinct real roots $r_1 < r_2$ exist. They divide the number line into three intervals: $(-\\infty, r_1)$, $(r_1, r_2)$, and $(r_2, \\infty)$. The sign of the quadratic alternates across these intervals, and the solution is either the middle interval, the two outer intervals, or some combination depending on the inequality direction and the sign of $a$.

When $\\Delta = 0$, one repeated root $r$ exists. The quadratic factors as $a(x - r)^2$, which is a perfect square scaled by $a$. The expression equals zero at $x = r$ and has the sign of $a$ everywhere else. The number line is effectively split into two intervals with identical sign, separated by a single point of zero.

When $\\Delta < 0$, no real roots exist. The quadratic never touches zero and maintains one sign throughout the entire real line — the sign of $a$. The inequality is either satisfied everywhere or nowhere, with no intervals to analyze.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving When the Discriminant Is Positive`,
    content: `When $\\Delta > 0$, the two roots $r_1 < r_2$ create three intervals. The sign of the quadratic in these intervals follows a fixed pattern determined by the leading coefficient $a$.

@academic[rule_plain:If $a > 0$, the parabola opens upward. The quadratic is positive on the outer intervals $(-\\infty, r_1)$ and $(r_2, \\infty)$, and negative on the inner interval $(r_1, r_2)$.]@

The expression dips below zero between the roots and rises above zero outside them.

@academic[pitfall,aside:true,width:35%:Multiplying by -1 without flipping the sign
Turning $-x^2 + x + 6 > 0$ into $x^2 - x - 6 > 0$ keeps the sign and gives $x < -2$ or $x > 3$. Multiplying by $-1$ flips it: $x^2 - x - 6 < 0$, so $-2 < x < 3$.
[Read more](!#pitfalls)]@

If $a < 0$, the parabola opens downward. The signs are reversed: the quadratic is negative on the outer intervals and positive on the inner interval $(r_1, r_2)$. The expression rises above zero only between the roots.

To solve $x^2 - 5x + 4 > 0$, find the roots of $x^2 - 5x + 4 = 0$. Factoring gives $(x - 1)(x - 4) = 0$, so $r_1 = 1$ and $r_2 = 4$. Since $a = 1 > 0$, the expression is positive outside the roots. The solution is $(-\\infty, 1) \\cup (4, \\infty)$.

To solve $x^2 - 5x + 4 \\leq 0$ instead, select the interval where the expression is non-positive: $[1, 4]$. The endpoints are included because the inequality is non-strict and the expression equals zero at the roots.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Solving When the Discriminant Is Zero`,
    content: `When $\\Delta = 0$, the quadratic has a single repeated root $r = -\\frac{b}{2a}$, and the expression factors as $a(x - r)^2$.

@academic[rule_plain:The square $(x - r)^2$ is non-negative for all real $x$ and equals zero only at $x = r$. The sign of the entire expression is therefore determined by $a$ alone, except at the single point $x = r$ where the expression is zero.]@

If $a > 0$: the expression is positive everywhere except at $x = r$, where it is zero. The inequality $ax^2 + bx + c > 0$ is satisfied by all $x \\neq r$, and the solution is $(-\\infty, r) \\cup (r, \\infty)$. The non-strict version $ax^2 + bx + c \\geq 0$ is satisfied by every real number: $(-\\infty, \\infty)$.

@academic[pitfall,aside:true,width:35%:Missing the root in a non-strict inequality
Reading $(x - 2)^2 \\leq 0$ as "a square is never negative, so no solution" drops the equality. Since $x^2 - 4x + 4 = (x - 2)^2$ equals $0$ at $x = 2$, the solution is the single point $x = 2$.
[Read more](!#pitfalls)]@

If $a < 0$: the expression is negative everywhere except at $x = r$, where it is zero. The inequality $ax^2 + bx + c < 0$ is satisfied by all $x \\neq r$, and the non-strict version $ax^2 + bx + c \\leq 0$ holds for all real $x$. The inequality $ax^2 + bx + c > 0$ has no solution — a negative times a non-negative square is never positive.

Consider $x^2 - 6x + 9 > 0$. The discriminant is $36 - 36 = 0$, and the expression factors as $(x - 3)^2$. This is positive for all $x \\neq 3$ and zero at $x = 3$. The solution is $(-\\infty, 3) \\cup (3, \\infty)$, the entire real line minus one point.

@academic[fact,aside:true,width:35%:Why the square wins on area
A rectangle with perimeter $20$ and one side $x$ has area $x(10 - x)$, and $25 - x(10 - x) = (x - 5)^2 \\geq 0$. So no rectangle with that perimeter beats the $5 \\times 5$ square, and only the square reaches $25$.]@

The same perfect square settles questions that do not look like inequalities at first. When an expression can be rewritten as a constant minus a square, $k - (x - r)^2$, it can never be larger than $k$, because the square is never negative, and it equals $k$ only at $x = r$. The claim that $k$ is the largest value is then just the inequality $(x - r)^2 \\geq 0$, the $\\Delta = 0$ case of this section with $a > 0$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Solving When the Discriminant Is Negative`,
    content: `@academic[rule_plain:When $\\Delta < 0$, the quadratic has no real roots. It never equals zero and never changes sign. The sign of the expression for every real $x$ is the sign of the leading coefficient $a$.]@

If $a > 0$: the expression is positive everywhere. The inequality $ax^2 + bx + c > 0$ (or $\\geq 0$) is satisfied by every real number, and the solution is $(-\\infty, \\infty)$. The inequality $ax^2 + bx + c < 0$ (or $\\leq 0$) has no solution.

If $a < 0$: the expression is negative everywhere. The inequality $ax^2 + bx + c < 0$ (or $\\leq 0$) holds for all $x$, and $ax^2 + bx + c > 0$ (or $\\geq 0$) has no solution.

@academic[pitfall,aside:true,width:35%:Reading no roots as no solution
Concluding from $\\Delta = 4 - 20 = -16$ that $x^2 + 2x + 5 > 0$ has no solution answers the equation, not the inequality. With $a = 1 > 0$ the expression is always positive, so every real $x$ is a solution.
[Read more](!#pitfalls)]@

The equation $x^2 + x + 1 = 0$ has $\\Delta = 1 - 4 = -3 < 0$, and since $a = 1 > 0$, the expression $x^2 + x + 1$ is positive for every real $x$. The inequality $x^2 + x + 1 > 0$ is universally true. The inequality $x^2 + x + 1 < 0$ is universally false.

No sign chart is needed in this case. The absence of real roots means no critical points exist, so there is only one interval — the entire number line — and its sign is determined by $a$.

@academic[fact,aside:true,width:35%:The discriminant proves Cauchy–Schwarz
For any numbers $p, q, r, s$, the quadratic $(pt + r)^2 + (qt + s)^2$ in $t$ is never negative, so its discriminant is at most $0$. Written out, that is $(pr + qs)^2 \\leq (p^2 + q^2)(r^2 + s^2)$, the inequality behind $|\\cos\\theta| \\leq 1$ for the angle between two vectors.]@

The reasoning also runs backwards. If a quadratic with $a > 0$ is known to be non-negative for every real $x$, it cannot have two distinct real roots, because it would be negative between them, so its discriminant must satisfy $\\Delta \\leq 0$. A statement about the sign of an expression at every point then becomes a single inequality between its coefficients, with no $x$ left in it.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Sign Chart Method`,
    content: `The sign chart provides a systematic alternative to reasoning from the parabola's shape. It works by tracking the sign of each linear factor across the intervals created by the roots.

For the inequality $(x - 1)(x - 4) > 0$, the roots are $r_1 = 1$ and $r_2 = 4$, creating three intervals. In the interval $(-\\infty, 1)$, both factors $x - 1$ and $x - 4$ are negative, so their product is positive. In $(1, 4)$, the factor $x - 1$ is positive while $x - 4$ is negative, so the product is negative. In $(4, \\infty)$, both factors are positive, so the product is positive. The sign chart summarizes this:

@academic[formula_callout:Sign Chart Method
$$\\begin{array}{c|ccc} & x < 1 & 1 < x < 4 & x > 4 \\\\ \\hline (x-1) & - & + & + \\\\ (x-4) & - & - & + \\\\ \\hline \\text{product} & + & - & + \\end{array}$$]@

@academic[pitfall,aside:true,width:35%:Setting each factor positive
Solving $(x + 2)(x - 3) > 0$ as $x + 2 > 0$ or $x - 3 > 0$ gives $x > -2$, which includes $x = 0$, where the product is $-6$. The product is positive when both factors share a sign: $x < -2$ or $x > 3$.
[Read more](!#pitfalls)]@

The solution to the $> 0$ inequality consists of the intervals where the product is positive: $(-\\infty, 1) \\cup (4, \\infty)$.

When the quadratic does not factor neatly, the roots from the quadratic formula serve the same purpose. The sign chart does not require integer or rational roots — any pair of real numbers works as boundary points. The method fails only when no real roots exist ($\\Delta < 0$), in which case the sign is constant and no chart is needed.

To solve your own quadratic inequality with each step shown, use the [quadratic inequality solver](!/algebra/calculators/inequalities/quadratic).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Connection to the Parabola`,
    content: `The inequality $ax^2 + bx + c > 0$ asks a geometric question: where does the parabola $y = ax^2 + bx + c$ lie above the $x$-axis? The inequality $ax^2 + bx + c < 0$ asks where it lies below.

When $a > 0$, the parabola opens upward. It dips below the axis between its roots (if they exist) and rises above the axis outside them. The $> 0$ inequality selects the outer regions; the $< 0$ inequality selects the inner region.

When $a < 0$, the parabola opens downward. It rises above the axis between its roots and falls below outside. The $> 0$ inequality selects the inner region; the $< 0$ inequality selects the outer regions.

This geometric reading makes the sign chart unnecessary for many students — once the roots and the direction of opening are identified, the solution is visible from the shape of the curve. The sign chart is the algebraic encoding of the same information, and either approach yields identical results.

The vertex of the parabola, located at $x = -\\frac{b}{2a}$, is the point of maximum depth below the axis (when $a > 0$ and the parabola crosses the axis) or maximum height above it (when $a < 0$). Its position does not directly affect the solution set of the inequality, but it determines how far the parabola penetrates into the region of the opposite sign.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Reducible Inequalities`,
    content: `Certain inequalities of degree higher than two can be reduced to quadratic inequalities through substitution, following the same strategy used for [reducible equations](!/algebra/equations/quadratic).

The bi-quadratic inequality $x^4 - 5x^2 + 4 > 0$ becomes $u^2 - 5u + 4 > 0$ with the substitution $u = x^2$. The quadratic factors as $(u - 1)(u - 4) > 0$, which is satisfied when $u < 1$ or $u > 4$. Back-substituting: $x^2 < 1$ gives $-1 < x < 1$, and $x^2 > 4$ gives $x < -2$ or $x > 2$. The complete solution is $(-\\infty, -2) \\cup (-1, 1) \\cup (2, \\infty)$.

@academic[pitfall,aside:true,width:35%:Taking only the positive square root
Turning $x^2 > 9$ into $x > 3$ loses half the answer: $x = -4$ also works, since $(-4)^2 = 16 > 9$. The solution is $x < -3$ or $x > 3$.
[Read more](!#pitfalls)]@

The back-substitution step requires care. The condition $u = x^2$ forces $u \\geq 0$, so any solution for $u$ that is negative produces no real values of $x$. Additionally, each positive value of $u$ splits into two symmetric values $x = \\pm\\sqrt{u}$, potentially doubling the number of boundary points on the $x$-axis.

The substitution pattern extends to any inequality of the form $a[f(x)]^2 + b[f(x)] + c > 0$. Setting $u = f(x)$ reduces it to a quadratic inequality in $u$, and the solution in $u$ is translated back through the function $f$ — subject to whatever domain and range constraints $f$ imposes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Summary of Quadratic Inequality Cases`,
    content: `All quadratic inequalities reduce to one of three structural cases determined by the discriminant $\\Delta$. The table below collects each case with the resulting sign pattern of the expression and the solutions to the strict $> 0$ and $< 0$ inequalities, assuming $a > 0$. For $a < 0$, the $> 0$ and $< 0$ solutions swap. For non-strict inequalities ($\\geq 0$ or $\\leq 0$), include the roots where the expression equals zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for most wrong answers to quadratic inequalities. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Multiplying by -1 without flipping the sign**

The leading coefficient is negative, and the inequality is multiplied by $-1$ to make it positive, which makes factoring easier. Every term changes sign, but the inequality sign is left as it was.

Wrong working:
$$-x^2 + x + 6 > 0 \\implies x^2 - x - 6 > 0 \\implies (x + 2)(x - 3) > 0 \\implies x < -2 \\text{ or } x > 3$$

Right working: multiplying both sides by a negative number reverses the inequality.
$$-x^2 + x + 6 > 0 \\implies x^2 - x - 6 < 0 \\implies (x + 2)(x - 3) < 0 \\implies -2 < x < 3$$

Why it happens: multiplying by $-1$ feels like tidying up the expression, and the inequality sign is forgotten as part of the same operation.

How to check: test one value. $x = 0$ gives $-0 + 0 + 6 = 6 > 0$, so $0$ must be in the answer; it lies in $-2 < x < 3$ but not in the wrong answer. The shape agrees: with $a = -1 < 0$ the parabola opens downward and is positive between its roots.

**Missing the root in a non-strict inequality**

When $\\Delta = 0$, the expression is a multiple of a perfect square, and the inequality includes equality. The square is treated as if it could only be positive or negative, and the point where it equals zero is lost.

Wrong working:
$$x^2 - 4x + 4 \\leq 0 \\implies (x - 2)^2 \\leq 0$$
and since a square is never negative, the inequality is declared to have no solution.

Right working: $(x - 2)^2 \\leq 0$ means $(x - 2)^2 < 0$ or $(x - 2)^2 = 0$. The first never happens; the second happens at $x = 2$. The solution is the single point $x = 2$.

Why it happens: the familiar fact that a square is never negative answers the strict question $< 0$, and the "or equal" part of $\\leq$ gets dropped.

How to check: substitute the repeated root. $x = 2$ gives $4 - 8 + 4 = 0$, and $0 \\leq 0$ is true, so the solution set cannot be empty.

**Reading no roots as no solution**

The discriminant is negative, so the corresponding equation has no real roots, and that verdict is carried over to the inequality.

Wrong working:
$$x^2 + 2x + 5 > 0, \\quad \\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$$
so the inequality is declared to have no solution.

Right working: with $\\Delta < 0$ the expression never changes sign, and its sign is the sign of $a$. Here $a = 1 > 0$, so $x^2 + 2x + 5 > 0$ for every real $x$. The solution is $(-\\infty, \\infty)$.

Why it happens: for equations, a negative discriminant does mean no real solutions, and the same verdict is applied out of habit. An inequality asks about the sign of the expression, not about where it equals zero.

How to check: substitute any value. $x = 0$ gives $5 > 0$, so the solution set is not empty. Completing the square shows why it holds everywhere: $x^2 + 2x + 5 = (x + 1)^2 + 4 \\geq 4$.

**Setting each factor positive**

After factoring, the inequality $(x - r_1)(x - r_2) > 0$ is solved like an equation, by applying the condition to each factor separately.

Wrong working:
$$(x + 2)(x - 3) > 0 \\implies x + 2 > 0 \\text{ or } x - 3 > 0 \\implies x > -2$$

Right working: a product of two factors is positive when both factors have the same sign. Both are positive when $x > 3$; both are negative when $x < -2$. The solution is $(-\\infty, -2) \\cup (3, \\infty)$.

Why it happens: the zero-product property, a product is zero when one factor is zero, is carried over to inequalities. There is no such rule for "greater than zero": a product is positive only when its factors share a sign, which is a condition on both factors at once.

How to check: test one value from the wrong answer. $x = 0$ gives $(0 + 2)(0 - 3) = -6 < 0$. Values from the right answer, $x = -3$ and $x = 4$, give $(-1)(-6) = 6$ and $(6)(1) = 6$, both positive.

**Taking only the positive square root**

After back-substitution, an inequality of the form $x^2 > p$ or $x^2 < p$ with $p > 0$ remains, and the square root is taken as if both sides were positive numbers.

Wrong working:
$$x^2 > 9 \\implies x > 3$$

Right working: $x^2 > 9$ means $|x| > 3$, so $x < -3$ or $x > 3$. In the same way, $x^2 < 9$ means $|x| < 3$, that is $-3 < x < 3$.

Why it happens: taking the square root of both sides is the step used for equations like $x^2 = 9$, where the $\\pm$ is easy to remember. In an inequality the negative side becomes a separate interval, and it is left out.

How to check: test a negative value. $x = -4$ gives $(-4)^2 = 16 > 9$, so it belongs to the answer, yet $-4 > 3$ is false. The same test catches the $<$ case: $x < 3$ would include $x = -5$, where $25 < 9$ is false.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Where the Parabola Meets the Number Line`,
  content: `A quadratic inequality asks not where a parabola crosses the horizontal axis, but where it lies above or below it. The roots of the corresponding quadratic equation mark the boundaries, the leading coefficient determines which way the parabola opens, and the discriminant decides whether there are two boundaries, one, or none. The solution is always readable from the shape of the parabola, and the sign chart formalizes that reading into a systematic procedure.`,
};

const faqQuestions = {
  obj1: {
    question: "Why is the solution to $x^2 - 6x + 9 > 0$ everything except one point?",
    answer: "Because the expression factors as $(x - 3)^2$, which is positive everywhere except at $x = 3$, where it equals zero. Zero fails a strict inequality, so that single point drops out and the answer is $(-\\infty, 3) \\cup (3, \\infty)$. Switch to $\\geq 0$ and the point returns, making the solution every real number.",
    sectionId: "4"
  },
  obj2: {
    question: "Can a quadratic inequality have no solution at all?",
    answer: "Yes, whenever the direction contradicts the sign the expression always has. With $\\Delta < 0$ and $a > 0$ the expression is positive everywhere, so $ax^2 + bx + c < 0$ is satisfied by nothing. The same happens at a double root: with $a < 0$, the expression is never positive, so $> 0$ has no solution.",
    sectionId: "5"
  },
  obj3: {
    question: "If a quadratic has no real roots, do you still need a sign chart?",
    answer: "No. Real roots are what carve the number line into intervals, so without them there is a single interval, the whole line, and one sign to determine. That sign is the sign of the leading coefficient $a$. Evaluate the discriminant, check $a$, and the answer is either all reals or nothing at all.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Quadratic Inequalities",
    "description": "Master quadratic inequalities: discriminant cases, sign chart method, parabola interpretation, solving with two roots, one root, or no real roots, and reducible bi-quadratic inequalities.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/quadratic",
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
      "name": "Quadratic Inequalities"
    },
    "teaches": [
      "Standard form ax² + bx + c > 0",
      "Discriminant determines solution structure",
      "Sign chart method for factored forms",
      "Parabola above/below x-axis interpretation",
      "Two roots, one root, and no roots cases",
      "Reducible bi-quadratic inequalities"
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
        "name": "Quadratic Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/quadratic"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpQuadBelowLine = { kind: 'pieces', svgTitle: 'x^2 < 3x + 10: the parabola is below the line for -2 < x < 5', xRange: [-4, 7], yRange: [-4, 36], yStep: 4,
    pieces: [
      { fn: (x) => x * x, from: -4, to: 7, ends: [null, null], color: 'f', label: { text: 'y = x²', x: -3.6, y: 13, pos: 'e' } },
      { fn: (x) => 3 * x + 10, from: -4, to: 7, ends: [null, null], color: 'g', label: { text: 'y = 3x + 10', x: 3.2, y: 19.6, pos: 'w' } },
    ],
    points: [{ x: -2, y: 4 }, { x: 5, y: 25 }],
    notes: [{ x: -3.9, y: 32, text: 'x² below the line: −2 < x < 5', pos: 'e', color: 'r' }],
    caption: 'x² < 3x + 10, or x² − 3x − 10 < 0: solution −2 < x < 5' };
  const fpQuadTouch = { kind: 'pieces', svgTitle: '(x - 2)^2 > 0 for every x except 2', xRange: [-1, 5], yRange: [-2, 9],
    pieces: [
      { fn: (x) => (x - 2) ** 2, from: -1, to: 2, ends: [null, 'open'], color: 'f', label: { text: '(x − 2)²', x: 0.6, y: 2.0, pos: 'w' } },
      { fn: (x) => (x - 2) ** 2, from: 2, to: 5, ends: ['open', null], color: 'f' },
    ],
    notes: [{ x: 0.1, y: 8, text: '> 0: every x except 2', pos: 'e', color: 'r' }, { x: 0.1, y: 6.8, text: '≥ 0: every real x', pos: 'e', color: 'g' }],
    caption: 'Δ = 0: touches the axis once, positive everywhere else' };
  const fpBiquadIneq = { kind: 'pieces', svgTitle: 'x^4 - 5x^2 + 4 > 0 on three pieces', xRange: [-2.8, 2.8], yRange: [-3, 10],
    pieces: [{ fn: (x) => x ** 4 - 5 * x * x + 4, from: -2.8, to: 2.8, ends: [null, null], color: 'f' }],
    points: [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
    notes: [{ x: -2.2, y: 9, text: 'u = x²: (u − 1)(u − 4) > 0, so u < 1 or u > 4', pos: 'e', color: 'g' },
      { x: -2.2, y: 7.2, text: 'solution x < −2, −1 < x < 1, x > 2', pos: 'e', color: 'r' }],
    caption: 'x⁴ − 5x² + 4 > 0 on three pieces, found through u = x²' };

  // Concept introduction figures (section 1), one running instance: x² − 3x − 10 < 0.
  const fpCiForced = { kind: 'pieces', svgTitle: 'y = x^2 - 3x - 10 opens upward and is negative only between -2 and 5', xRange: [-4, 7], yRange: [-14, 20], yStep: 4,
    pieces: [
      { fn: (x) => x * x - 3 * x - 10, from: -4, to: 7, ends: [null, null], color: 'f', label: { text: 'y = x² − 3x − 10', x: 3.3, y: 12, pos: 'w' } },
    ],
    points: [{ x: -2, y: 0 }, { x: 5, y: 0 }],
    notes: [{ x: 1.5, y: -3.5, text: 'below 0 only here', pos: 's', color: 'r' }],
    caption: 'a = 1 > 0: opens upward, so negative only between the roots' };
  const fpCiSet = { kind: 'domainOpen', svgTitle: 'The solution set of x^2 < 3x + 10 is (-2, 5)', range: [-4, 7],
    rows: [
      { label: 'x² − 3x − 10 < 0', color: 'f', segs: [[-2, 5, true, true]], tag: { text: '(−2, 5)', x: 6 } },
    ],
    caption: 'One interval; −2 and 5 left out because the inequality is strict' };
  const fpCiCases = { kind: 'domainOpen', svgTitle: 'Same roots, opposite a: one interval or two rays', range: [-4, 7],
    rows: [
      { label: 'x² − 3x − 10 < 0   (a = 1)', color: 'f', segs: [[-2, 5, true, true]], tag: { text: '(−2, 5)', x: 6 } },
      { label: '−x² + 3x + 10 < 0   (a = −1)', color: 'r', segs: [[null, -2, false, true], [5, null, true]], tag: { text: '(−∞, −2) ∪ (5, ∞)', x: 4.4 } },
    ],
    caption: 'Same roots; the sign of a decides inside or outside' };

  const conceptIntroFigures = {
    forced: renderFunctionPlotV4(fpCiForced),
    set: renderFunctionPlotV2(fpCiSet),
    cases: renderFunctionPlotV2(fpCiCases),
    raceTable: ciRaceTable,
    factorTable: ciFactorTable,
  };

  const demoUnits = {
    positive: demoUnitFrame({
      svg: inequalityVisualizerDiagrams['quad-two'],
      caption: '&#916; &gt; 0: the parabola dips between its two roots',
      text: 'With two roots the parabola crosses the axis twice and lies below it exactly between the crossings, so ax&#178; + bx + c &lt; 0 holds on (&#8722;2, 3) and the reverse inequality holds on the two outer rays. The leading coefficient decides which of the two patterns applies. Flip a and watch the shading invert on the',
      href: '/algebra/visual-tools/inequality',
      linkText: 'inequality visual explorer',
    }),
    negative: demoUnitFrame({
      svg: inequalityVisualizerDiagrams['quad-none'],
      caption: '&#916; &lt; 0: x&#178; + 4 never reaches the axis',
      text: 'The parabola floats above the axis, never touching it, so x&#178; + 4 is positive for every real x: the inequality x&#178; + 4 &lt; 0 has no solution at all, and x&#178; + 4 &gt; 0 has every real number. With no roots there are no boundaries and the sign is constant. See the empty solution set on the',
      href: '/algebra/visual-tools/inequality',
      linkText: 'inequality visual explorer',
    }),
    belowLine: demoUnitFrame({
      svg: renderFunctionPlotV4(fpQuadBelowLine),
      caption: 'Before and after standard form',
      text: 'The section\'s x&#178; &lt; 3x + 10, with each side drawn as its own graph. The parabola dips below the line between their crossings at x = &#8722;2 and x = 5, so that stretch is the solution. Moving everything to one side gives x&#178; &#8722; 3x &#8722; 10 &lt; 0, whose roots are the same &#8722;2 and 5: rewriting in standard form changes how the question looks, not its answer.',
    }),
    touch: demoUnitFrame({
      svg: renderFunctionPlotV4(fpQuadTouch),
      caption: 'A single root that never changes the sign',
      text: 'With &#916; = 0 the quadratic is a perfect square, here (x &#8722; 2)&#178;. It touches the axis at x = 2 and is positive everywhere else. So (x &#8722; 2)&#178; &gt; 0 holds for every x except 2 (the open circle), &#8805; 0 holds for every real number, &lt; 0 never holds, and &#8804; 0 holds only at x = 2.',
    }),
    biquad: demoUnitFrame({
      svg: renderFunctionPlotV4(fpBiquadIneq),
      caption: 'A quartic inequality solved as a quadratic',
      text: 'The section\'s x&#8308; &#8722; 5x&#178; + 4 &gt; 0. With u = x&#178; it becomes (u &#8722; 1)(u &#8722; 4) &gt; 0, true for u &lt; 1 or u &gt; 4. Back in x, u &lt; 1 is &#8722;1 &lt; x &lt; 1 and u &gt; 4 is x &lt; &#8722;2 or x &gt; 2: exactly the three stretches where the curve is above the axis, with the four boundaries &#177;1 and &#177;2 excluded.',
    }),
  };

  return {
  props: {
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj2Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Quadratic Inequalities: Sign Charts & Parabolas | Learn Math Class",
      description: "Master quadratic inequalities: discriminant cases, sign chart method, parabola interpretation, solving with two roots, one root, or no real roots, and reducible bi-quadratic inequalities.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/quadratic",
      name: "Quadratic Inequalities"
    },
  }
}
   }

   export default function QuadraticInequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `A square beats a line far out, but not in the middle.`,
        content: [
          `Compare $x^2$ with $3x + 10$. Far to the right the square wins easily, and far to the left too, because squaring makes negatives positive. Near zero the line is ahead. So $x^2 < 3x + 10$ holds somewhere in the middle — but guessing values will never say exactly where it starts and stops.`,
          ciTable('raceTable'),
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Working it out takes three moves.`,
        content: [
          `Move everything to one side, so the question becomes a sign: $x^2 - 3x - 10 < 0$. Factor it: $(x + 2)(x - 5) < 0$. A product is negative only when its two factors have opposite signs, and each factor changes sign at one point — $x + 2$ at $-2$, $x - 5$ at $5$.`,
          ciTable('factorTable'),
          `Only the middle piece gives a negative product, so the answer is $-2 < x < 5$. Check one value from inside and one from outside: at $x = 0$, $0 < 10$ is true; at $x = 6$, $36 < 28$ is false. At $x = 5$ both sides are $25$, which is not "smaller".`,
          <div key={'unit-belowLine'} dangerouslySetInnerHTML={{ __html: demoUnits.belowLine }} />,
          `Any inequality between two expressions can be read as one graph above or below another.`,
        ],
      },
      {
        id: 'forcing',
        lead: `Nothing in that answer was chosen; each part was forced.`,
        content: `The borders $-2$ and $5$ were forced by the equation $x^2 - 3x - 10 = 0$: they are its two roots, the only places the expression can change sign. Which side to keep was forced by the leading coefficient: $a = 1$ is positive, so the parabola opens upward, sits above the axis outside its roots and dips below only between them. Two roots and a sign — that is all the arithmetic was ever finding.`,
        visual: ciSvg('forced'),
        caption: `The dots are the roots $-2$ and $5$. Between them the upward parabola is below the axis: the "−" row of the table.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [quadratic inequality](!/algebra/definitions#quadratic_inequality) in one variable is an inequality that can be written in the form below — or with $<$, $\\leq$ or $\\geq$ — where $a$, $b$, $c$ are real constants and $a \\neq 0$.`,
        formula: `@academic[formula_callout:Definition and Standard Form
$$ax^2 + bx + c > 0$$]@`,
        footer: `Its equation counterpart: [quadratic equations](!/algebra/equations/quadratic).`,
      },
      {
        id: 'kind',
        lead: `A quadratic inequality is a statement about the sign of a quadratic, and its answer is a set.`,
        content: `It is not a number and not a function. It asks where a quadratic polynomial is positive or negative, and its answer collects those values — for our example, the interval $(-2, 5)$. Depending on the roots and on $a$, the answer can be one interval, two rays, a single point, every real number or none at all.`,
        visual: ciSvg('set'),
        caption: `The bar is the middle piece of the table; the open dots are the two roots, left out because $<$ is strict.`,
      },
      {
        id: 'caveat',
        lead: `Two things carry over to every quadratic inequality, and two were peculiar to this one.`,
        content: `What carries over: the borders are always the roots of the matching equation, and the sign of $a$ always decides between inside and outside. What was peculiar: the example had two different roots and an upward parabola. Turn the parabola over and the same roots give the opposite answer. With one repeated root, or none — $x^2 + 4 < 0$ has no solution at all — there are fewer borders or none, and the answer is a single point, everything or nothing.`,
        visual: ciSvg('cases'),
        caption: `The same roots $-2$ and $5$ with opposite $a$: an upward parabola keeps the inside, a downward one keeps the two outside rays.`,
      },
      {
        id: 'exit',
        content: `The rest of the page sorts quadratic inequalities by the discriminant — two roots, one root, no roots — then gives the sign chart method, the connection to the parabola, inequalities that reduce to quadratics, and a summary of every case.`,
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

    // obj2: prose + discriminant-cases comparison table
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
          `@academic[punchline:A quadratic can change sign only at a real root, and the discriminant counts those roots before any testing.]@`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
                  <div key={'unit-positive'} dangerouslySetInnerHTML={{ __html: demoUnits.positive }} />,
          `The two-root case is the only one where the answer is a genuine interval with two endpoints.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-touch'} dangerouslySetInnerHTML={{ __html: demoUnits.touch }} />,
          `The repeated root is the only point where a strict inequality can fail.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
                  <div key={'unit-negative'} dangerouslySetInnerHTML={{ __html: demoUnits.negative }} />,
          `A negative discriminant makes the inequality trivial one way and impossible the other.`,
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

    // obj7: prose + parabola-direction comparison table
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
          `@academic[punchline:A quadratic inequality is a question about a parabola: its roots and the way it opens decide the answer.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'unit-biquad'} dangerouslySetInnerHTML={{ __html: demoUnits.biquad }} />,
          `Each positive value of u yields two symmetric boundaries in x.`,
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
        title:`Quadratic Inequalities FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Quadratic Inequalities</h1>
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