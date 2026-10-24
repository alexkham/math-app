
// tables-optimized: v4 | 2026-05-24 | 2 tables (obj2 notation aggregation, roadmap summary capstone)

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import functionDerivativeLocalDiagrams from '@/app/components/calculus/visualizers/functionDerivativeLocalDiagrams'
import functionTangentLineDiagrams from '@/app/components/calculus/visualizers/functionTangentLineDiagrams'
import functionConcavityDiagrams from '@/app/components/calculus/visualizers/functionConcavityDiagrams'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "derivatives calculus",
  "derivative definition",
  "difference quotient",
  "derivative notation",
  "differentiation rules",
  "chain rule",
  "product rule",
  "quotient rule",
  "implicit differentiation",
  "higher order derivatives",
  "differentiability",
  "tangent line slope",
  "instantaneous rate of change",
  "derivative formulas",
  "differentials"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation: four derivative notation systems
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">First derivative</th>
      <th style="${tableHeaders.aggregation}">Higher derivatives</th>
      <th style="${tableHeaders.aggregation}">Typical context</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Lagrange</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;&apos;(x), f&apos;&apos;&apos;(x), f<sup>(n)</sup>(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">compact, function-centric; standard in textbook calculus</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Leibniz</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dy ⁄ dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>2</sup>y ⁄ dx<sup>2</sup>,&nbsp; d<sup>n</sup>y ⁄ dx<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">behaves like a ratio; natural for chain rule and differentials</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Euler</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Df(x)&nbsp; or&nbsp; D<sub>x</sub>f</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">D<sup>2</sup>f,&nbsp; D<sup>n</sup>f</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">differential equations and operator theory</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Newton</td>
      <td style="padding: 12px 15px; color: #34495e;">ẏ</td>
      <td style="padding: 12px 15px; color: #34495e;">ÿ,&nbsp; ⃛y</td>
      <td style="padding: 12px 15px; color: #34495e;">used almost exclusively when the independent variable is time</td>
    </tr>
  </tbody>
</table>
`

  // roadmap — summary capstone: map of the derivatives subtree
  const roadmapTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Sub-topic</th>
      <th style="${tableHeaders.summary}">Category</th>
      <th style="${tableHeaders.summary}">Focus</th>
      <th style="${tableHeaders.summary}">What it gives the reader</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/graph-analysis" style="${linkStyle}">Graph analysis</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Concept</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signs of f&apos; and f&apos;&apos; control function shape</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direction, critical points, concavity, inflection</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/function" style="${linkStyle}">The derivative as a function</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Concept</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(x) as its own function with its own graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reading f&apos;s behavior from f&apos; and vice versa</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/differentiability" style="${linkStyle}">Differentiability</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Concept</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when the derivative exists and when it fails</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">failure modes (corner, cusp, vertical tangent), continuity vs differentiability</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/rules" style="${linkStyle}">Differentiation rules</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Computation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">algebraic procedures replacing the limit definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">power, product, quotient, chain rules; MVT, Rolle, L&apos;Hôpital</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/techniques" style="${linkStyle}">Differentiation techniques</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Computation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">methods for non-explicit forms</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">implicit, logarithmic, parametric differentiation; inverse-function formula</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/common" style="${linkStyle}">Derivatives of common functions</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Catalog</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard function derivatives as a reference set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">power, trigonometric, exponential, and logarithmic formulas</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/special" style="${linkStyle}">Derivatives of special functions</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Catalog</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">families beyond the standard set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse trigonometric, hyperbolic, piecewise, and parametric derivatives</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/higher-order" style="${linkStyle}">Higher-order derivatives</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Extension</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">repeated differentiation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">concavity, derivative patterns, smoothness classes, connection to Taylor series</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/differentials" style="${linkStyle}">Differentials</a></td>
      <td style="padding: 12px 15px; color: #34495e;">Extension</td>
      <td style="padding: 12px 15px; color: #34495e;">dy = f&apos;(x) · dx as a standalone quantity</td>
      <td style="padding: 12px 15px; color: #34495e;">linear approximation and error estimation</td>
    </tr>
  </tbody>
</table>
`

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

  


// Concept introduction (section 1) — template E, widening. Running instance:
// f(x) = x² at a = 3. Old obj1 text is kept in sectionsContent.obj1, unused;
// its three formula boxes, three sentences and the secant demo frame with its
// line are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciSecantTable = ciTableOpen(['second point x', 'rise f(x) − 9', 'run x − 3', 'slope']) +
  ciRow(['4', '7', '1', '7']) +
  ciRow(['3.5', '3.25', '0.5', '6.5'], { shade: true }) +
  ciRow(['3.1', '0.61', '0.1', '6.1']) +
  ciRow(['3.01', '0.0601', '0.01', '6.01'], { shade: true }) +
  ciRow(['2.99', '−0.0599', '−0.01', '5.99']) +
  ciRow(['2.9', '−0.59', '−0.1', '5.9'], { shade: true, last: true }) +
  '</tbody></table>'

const sectionsContent = {
  // ─── /calculus/derivatives (hub) ──────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
## The Derivative

- [Derivative](!/calculus/definitions#derivative) — instantaneous rate of change: $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$
- [Differentiability](!/calculus/definitions#differentiability) — the derivative exists and is finite
- [Tangent Line](!/calculus/definitions#tangent_line) — best linear approximation at a point

## Rates of Change

- [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change) — rate at a single point, equal to $f'(a)$
- [Average Rate of Change](!/calculus/definitions#average_rate_of_change) — slope of the secant line over an interval

## Extensions

- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — derivatives of derivatives: $f'', f''', f^{(n)}$
- [Differential](!/calculus/definitions#differential) — $dy = f'(x) \\cdot dx$, the tangent-line estimate of change
- [Partial Derivative](!/calculus/definitions#partial_derivative) — derivative with respect to one variable, others held constant

## Graph Analysis

- [Critical Point](!/calculus/definitions#critical_point) — where $f' = 0$ or $f'$ is undefined
- [Local Extremum](!/calculus/definitions#local_extremum) — a local peak or valley
- [Concavity](!/calculus/definitions#concavity) — bending direction, controlled by $f''$
- [Inflection Point](!/calculus/definitions#inflection_point) — where concavity reverses
- [Monotonic Function](!/calculus/definitions#monotonic_function) — strictly increasing or strictly decreasing`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Difference Quotient and Its Limit`,
    content: `
Given a function $f$ and a point $x = a$, the difference quotient measures the average rate of change of $f$ over the interval from $a$ to $a + h$:

@academic[formula_callout:The Difference Quotient and Its Limit
$$\\frac{f(a + h) - f(a)}{h}$$]@

Geometrically, this is the slope of the secant line connecting $(a, f(a))$ and $(a + h, f(a + h))$. As $h \\to 0$, the secant line rotates toward the tangent line at $x = a$.

The derivative of $f$ at $a$ is defined as the limit of the difference quotient:

@academic[formula_callout:The Difference Quotient and Its Limit
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$]@

When this limit exists, $f'(a)$ equals the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. When the limit does not exist—due to a corner, cusp, vertical tangent, or discontinuity—the derivative is undefined at that point.

An equivalent form uses $x$ approaching $a$ directly:

@academic[formula_callout:The Difference Quotient and Its Limit
$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$]@

Both forms define the same quantity. The first emphasizes the increment $h$; the second emphasizes the point $x$ approaching $a$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Notation`,
    content: `
Several notation systems for derivatives coexist, each suited to different contexts.

## Lagrange Notation

The symbol $f'(x)$ denotes the derivative of $f$ with respect to $x$. Higher derivatives use repeated primes: $f''(x)$, $f'''(x)$. For the $n$th derivative, parenthetical notation avoids stacking primes: $f^{(n)}(x)$. This notation is compact and emphasizes the function itself.

## Leibniz Notation

The symbol $\\frac{dy}{dx}$ denotes the derivative of $y$ with respect to $x$. It suggests a ratio of infinitesimal changes—and while the derivative is defined as a limit rather than a literal fraction, this notation behaves like a fraction in the [chain rule](!/calculus/derivatives/rules) and in [differentials](!/calculus/derivatives/differentials). Higher derivatives follow the pattern $\\frac{d^2y}{dx^2}$, $\\frac{d^3y}{dx^3}$. The operator form $\\frac{d}{dx}[f(x)]$ emphasizes differentiation as an operation applied to an expression.

@academic[pitfall,aside:true,width:35%:Squaring the first derivative
Reading $\\frac{d^2y}{dx^2}$ as $\\left(\\frac{dy}{dx}\\right)^2$ turns $y = x^3$ into $(3x^2)^2 = 9x^4$. Differentiating twice gives $\\frac{d^2y}{dx^2} = 6x$.
[Read more](!#pitfalls)]@

The symbol $\\frac{d^2y}{dx^2}$ is shorthand for $\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$: the operator $\\frac{d}{dx}$ is applied to $y$, and then applied again to the result. The upper $2$ is attached to $d$ and counts the applications; the lower $2$ is attached to $dx$ and records that both are taken with respect to $x$.

## Euler Notation

The operator $D$ or $D_x$ applied to a function: $Df(x)$ means the same as $f'(x)$. Higher orders use powers of the operator: $D^2 f$, $D^n f$. This notation appears in differential equations and operator theory.

## Newton Notation

@academic[fact,aside:true,width:35%:Newton's dots against Leibniz's d
In 1712 a Royal Society committee ruled that Newton came first; its report was drafted by Newton himself, then the Society's President. British mathematicians kept his dots for a century, until Cambridge students led by Charles Babbage campaigned for "pure D-ism" against "the Dot-age of the University".]@

A dot above the variable: $\\dot{y}$ for the first derivative, $\\ddot{y}$ for the second. Used almost exclusively where the independent variable is time. The notation signals that differentiation is with respect to $t$.

Newton called a derivative a fluxion, the rate at which a flowing quantity, a fluent, changes with time, and he was working with fluxions by 1666. Leibniz reached the same methods independently in the 1670s, wrote $dy$ and $dx$ for infinitely small differences, and published first, in 1684. Which of the two had invented calculus, and whose notation to use, became a bitter dispute between British and continental mathematicians.

In [LaTeX](!/latex) source, the Leibniz form is produced by \\frac{dy}{dx}, the primes by f' directly, and the Newton dots by \\dot{y} and \\ddot{y}.

The table below collects the four systems side by side with their first-derivative and higher-derivative forms and the contexts where each one is most commonly used.


 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Derivative Graph Analysis`,
    content: `
The sign of the derivative at a point reveals whether the function is increasing or decreasing there. Where $f'(x) > 0$, the function rises; where $f'(x) < 0$, the function falls. Points where $f'(x) = 0$ or $f'(x)$ is undefined are critical points—candidates for local maxima, minima, or neither.

@academic[pitfall,aside:true,width:35%:Calling every critical point an extremum
Treating $f'(c) = 0$ as proof of a peak or valley makes $x = 0$ an extremum of $f(x) = x^3$, since $f'(0) = 0$. But $f'(x) = 3x^2$ is positive on both sides, so $x^3$ keeps rising and $x = 0$ is neither.
[Read more](!#pitfalls)]@

For $f(x) = x^3 - 3x$, the derivative $f'(x) = 3x^2 - 3$ is zero at $x = -1$ and $x = 1$. It is positive to the left of $-1$, negative between the two points and positive to the right of $1$. The graph rises, falls and rises again, so $x = -1$ is a local maximum and $x = 1$ a local minimum.

The second derivative adds another layer. Where $f''(x) > 0$, the graph is concave up; where $f''(x) < 0$, the graph is concave down. Points where concavity changes are inflection points. Together, the first and second derivatives determine the complete shape of a curve: its direction, its turning points, and its bending.

[Derivative graph analysis](!/calculus/derivatives/graph-analysis) combines these tools into a systematic framework for understanding function behavior, from tangent line equations to optimization and curve sketching.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/graph-analysis',
  },
  obj4: {
    title: `The Derivative as a Function`,
    content: `
The definition $f'(a)$ produces a single number—the slope at one point. Replacing $a$ with a variable $x$ yields $f'(x)$, a function that assigns a slope to every point in its domain. The derivative function has its own graph, its own properties, and can itself be differentiated.

The graph of $f'$ encodes the behavior of $f$: where $f$ climbs, $f'$ is positive or zero; where $f$ descends, $f'$ is negative or zero; where $f$ has an extremum, $f'$ crosses zero or is undefined. Reading one graph from the other—and reversing the process—is a core skill.

[The derivative as a function](!/calculus/derivatives/function) develops this perspective, including the domain of $f'$, the relationship between the graphs of $f$ and $f'$, and the interpretation of $f'$ as a standalone object.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/function',
  },
  obj5: {
    title: `Differentiability`,
    content: `
Not every function has a derivative at every point. The limit definition requires the limit to exist and be finite, which fails at corners, cusps, vertical tangents, and discontinuities. Each failure mode has a distinct geometric signature on the graph.

@academic[rule_theorem_plain:Differentiability implies [continuity](!/calculus/limits/continuity)—a function must be unbroken at a point to have a tangent line there.]@

The converse is false: $f(x) = |x|$ is continuous at $x = 0$ but not differentiable, because the left-hand and right-hand slopes disagree.

[Differentiability](!/calculus/derivatives/differentiability) examines when derivatives exist, one-sided derivatives, differentiability on intervals, and pathological cases where continuity holds everywhere but differentiability fails everywhere.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/differentiability',
  },
  obj6: {
    title: `Differentiation Rules`,
    content: `
Computing derivatives from the limit definition is tedious for all but the simplest functions. Differentiation rules replace the limit with algebraic procedures: the power rule handles $x^n$, the product rule handles $f \\cdot g$, the quotient rule handles $f/g$, and the chain rule handles compositions $f(g(x))$.

@academic[pitfall,aside:true,width:35%:Multiplying the derivatives
Writing $(fg)' = f'g'$ turns $\\frac{d}{dx}[x^2 \\cdot x^3]$ into $2x \\cdot 3x^2 = 6x^3$. The product rule $(fg)' = f'g + fg'$ gives $2x \\cdot x^3 + x^2 \\cdot 3x^2 = 5x^4$, the derivative of $x^5$.
[Read more](!#pitfalls)]@

A function built from simpler pieces is differentiated from the outside in: the rule for the outermost operation is applied first, and each piece it produces is then differentiated by another rule or by a formula from the list of common derivatives. For $x^2 \\sin x$ that means the product rule once, followed by the derivatives of $x^2$ and $\\sin x$.

Beyond computational rules, the Mean Value Theorem guarantees that every differentiable function achieves its average rate of change at some interior point. Rolle's Theorem and L'Hôpital's rule follow as consequences, connecting derivatives to existence results and limit evaluation.

[Differentiation rules](!/calculus/derivatives/rules) covers all standard rules, their derivations from the limit definition, and the major theorems that govern derivative behavior.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/rules',
  },
  obj7: {
    title: `Differentiation Techniques`,
    content: `
Standard rules apply directly when $y$ is given explicitly as a function of $x$. Many relationships, however, are not written in explicit form. The equation $x^2 + y^2 = 25$ defines $y$ implicitly; implicit differentiation extracts $dy/dx$ by differentiating both sides and solving.

Logarithmic differentiation handles products with many factors and expressions with variable exponents like $x^x$. Parametric differentiation computes slopes of curves given as $x = x(t)$, $y = y(t)$. The inverse function derivative formula recovers the derivative of $f^{-1}$ from the derivative of $f$.

[Differentiation techniques](!/calculus/derivatives/techniques) develops each method with its underlying logic and the situations where it applies.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/techniques',
  },
  obj8: {
    title: `Derivatives of Common Functions`,
    content: `
A small set of derivative formulas covers the vast majority of computation. The power rule gives $\\frac{d}{dx}[x^n] = nx^{n-1}$. Trigonometric derivatives follow a pattern: $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$, $(\\tan x)' = \\sec^2 x$. The exponential $e^x$ is its own derivative, and $(\\ln x)' = 1/x$.

These formulas, combined with [differentiation rules](!/calculus/derivatives/rules), handle polynomials, rational functions, and all standard transcendental functions. Memorizing them eliminates the need to return to the limit definition.

[Derivatives of common functions](!/calculus/derivatives/common) catalogs these results, derives key formulas from the limit definition, and organizes them into a reference framework.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/common',
  },
  obj9: {
    title: `Derivatives of Special Functions`,
    content: `
Beyond the standard functions, several families have derivatives that appear frequently in advanced work. Inverse trigonometric functions produce algebraic derivatives: $(\\arcsin x)' = 1/\\sqrt{1 - x^2}$, $(\\arctan x)' = 1/(1 + x^2)$. Hyperbolic functions parallel their trigonometric counterparts: $(\\sinh x)' = \\cosh x$, $(\\tanh x)' = \\text{sech}^2\\,x$.

Piecewise functions require checking differentiability at each boundary, and parametric curves use the formula $dy/dx = (dy/dt)/(dx/dt)$.

[Derivatives of special functions](!/calculus/derivatives/special) collects these results, derives them via implicit differentiation and inverse function methods, and highlights the patterns connecting them to [common derivatives](!/calculus/derivatives/common).
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/special',
  },
  obj10: {
    title: `Higher-Order Derivatives`,
    content: `
Since $f'$ is a function, it can be differentiated again. The second derivative $f''(x)$ measures how the slope itself changes—geometrically, this is [concavity](!/calculus/derivatives/graph-analysis). The third derivative and beyond capture progressively finer aspects of a function's behavior.

Certain functions exhibit patterns under repeated differentiation. Polynomials of degree $n$ have $(n+1)$th derivative equal to zero. The exponential $e^x$ is unchanged at every order. Sine and cosine cycle through four derivatives before repeating.

[Higher-order derivatives](!/calculus/derivatives/higher-order) explores notation, derivative patterns, smoothness classes, and the connection to Taylor series.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/higher-order',
  },
  obj11: {
    title: `Differentials`,
    content: `
The derivative $dy/dx$ is defined as a limit—a single object. Differentials separate it into two independent quantities: $dx$, a small change in $x$, and $dy = f'(x) \\cdot dx$, the corresponding change predicted by the tangent line.

The differential $dy$ approximates the actual change $\\Delta y = f(x + dx) - f(x)$. For small $dx$, the approximation is accurate, making differentials a practical tool for linear approximation and error estimation.

[Differentials](!/calculus/derivatives/differentials) develops the formalism, connects it to Leibniz notation, and applies it to approximation and error propagation.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/differentials',
  },
  pitfalls: {
    title: `Common Pitfalls`,
    content: `
Four mistakes come up again and again when derivatives are first computed and read. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Squaring a sum term by term**

Working from the definition, $f(a + h)$ has to be written out before $f(a)$ is subtracted. For $f(x) = x^2$ at $a = 3$, the square $(3 + h)^2$ is written as $3^2 + h^2$.

Wrong working: $\\dfrac{(3 + h)^2 - 9}{h} = \\dfrac{9 + h^2 - 9}{h} = h$, which tends to $0$, so $f'(3) = 0$.

Right working: $(3 + h)^2 = 9 + 6h + h^2$, so $\\dfrac{(3 + h)^2 - 9}{h} = \\dfrac{6h + h^2}{h} = 6 + h$, which tends to $6$. So $f'(3) = 6$.

Why it happens: a power does spread over a product, $(3h)^2 = 9h^2$, and the same move looks just as natural over a sum, where it fails: the cross term $2 \\cdot 3 \\cdot h$ is lost.

How to check: put $h = 1$ into both forms. The original gives $\\dfrac{16 - 9}{1} = 7$, the slope of the secant from $x = 3$ to $x = 4$; the wrong form gives $1$. A derivative of $0$ would also mean a level tangent at $(3, 9)$, where the parabola is clearly rising.

**Squaring the first derivative**

The second derivative $\\dfrac{d^2y}{dx^2}$ is read as the square of the first derivative, because the $2$s look like exponents of a fraction.

Wrong working: for $y = x^3$, $\\dfrac{dy}{dx} = 3x^2$, so $\\dfrac{d^2y}{dx^2} = (3x^2)^2 = 9x^4$.

Right working: differentiate the first derivative. $\\dfrac{d^2y}{dx^2} = \\dfrac{d}{dx}\\left(3x^2\\right) = 6x$.

Why it happens: Leibniz notation is built to behave like a fraction in the chain rule and in differentials, so the superscripts are read as powers of that fraction as well.

How to check: each differentiation lowers the degree of a polynomial by one, so the second derivative of a cubic has degree $1$. The result $9x^4$ has degree $4$; at $x = 1$ it gives $9$, while $6x$ gives $6$.

**Calling every critical point an extremum**

A critical point is found by solving $f'(x) = 0$, and it is declared a local maximum or minimum without looking at the sign of $f'$ on either side.

Wrong working: for $f(x) = x^3$, $f'(x) = 3x^2$ and $f'(0) = 0$, so $x = 0$ is a local extremum.

Right working: $f'(x) = 3x^2 > 0$ for every $x \\neq 0$, so the derivative is positive on both sides of $0$ and does not change sign. The function rises through $x = 0$, which is neither a maximum nor a minimum.

Why it happens: at every peak and valley of a smooth graph the tangent is level, and the statement is read backwards, as if every level tangent were a peak or a valley.

How to check: compare values on either side. $f(-0.1) = -0.001$, $f(0) = 0$ and $f(0.1) = 0.001$, so $f(0)$ is neither the largest nor the smallest of the three.

**Multiplying the derivatives**

The derivative of a product is taken as the product of the derivatives of its factors.

Wrong working: $\\dfrac{d}{dx}[x^2 \\cdot x^3] = 2x \\cdot 3x^2 = 6x^3$.

Right working: the product rule $(fg)' = f'g + fg'$ gives $2x \\cdot x^3 + x^2 \\cdot 3x^2 = 2x^4 + 3x^4 = 5x^4$.

Why it happens: the sum rule $(f + g)' = f' + g'$ works piece by piece, and a product is expected to behave the same way.

How to check: simplify first when possible. $x^2 \\cdot x^3 = x^5$, and the power rule gives $5x^4$, not $6x^3$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  roadmap: {
    title: `Roadmap of the Derivatives Subtree`,
    content: `
The sections above describe each branch of the derivatives subtree in turn. The table below collects them as a single roadmap — grouping the nine sub-pages by category, naming what each one focuses on, and indicating the main payoff a reader should expect from following the link.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `From Average to Instantaneous`,
  content: `
The slope of a line measures constant rate of change. But most functions do not change at a constant rate—their graphs curve, steepen, and flatten. The derivative extends the idea of slope to curves, capturing how fast a function changes at a single point rather than over an interval.

The construction begins with the difference quotient: the slope of a secant line through two points on the graph. As the two points draw closer together, the secant line approaches the tangent line. The derivative is the [limit](!/calculus/limits) of this process—the slope of the tangent line, defined precisely through a limiting operation.

This single concept—instantaneous rate of change via a limiting process—generates an entire framework. Rules convert the limit definition into efficient computation. Techniques extend differentiation to implicit and parametric settings. The derivative as a function reveals the shape of curves through sign analysis. Higher-order derivatives capture concavity and deeper layers of change.
`
};

// FAQ pass: cut five owned by dedicated subpages — graph analysis,
// differentiability, rules, techniques (implicit differentiation) and
// higher-order. Kept the definition, which the hub owns and whose h2 reads
// only "The Difference Quotient and Its Limit"; replaced the generic
// notation question with three specific confusions buried inside that
// section, none of which any heading surfaces.
const faqQuestions = {
  obj1: {
    question: "What is a derivative?",
    answer: "A derivative measures the instantaneous rate of change of a function. It is defined as the limit of the difference quotient: f′(a) = lim(h→0) [f(a+h) − f(a)]/h. Geometrically the difference quotient is the slope of a secant line, and as h shrinks toward zero that secant rotates into the tangent line — so f′(a) is the slope of the tangent at (a, f(a)).",
    sectionId: "1"
  },
  obj2: {
    question: "Is dy/dx a fraction?",
    answer: "Not literally. The derivative is defined as a limit, not as a quotient of two numbers, and dy and dx carry no independent meaning inside that definition. But the notation is built to behave like a fraction, which is why the chain rule reads as though factors cancel and why [differentials](!/calculus/derivatives/differentials) can treat dy and dx as separate quantities. Useful as an analogy, unsound as a proof.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between dy/dx and f′(x)?",
    answer: "They denote the same derivative in different notations. Lagrange’s f′(x) names the derivative as a function and stacks primes for higher orders, switching to f⁽ⁿ⁾(x) once they pile up. Leibniz’s dy/dx names the two variables being related, which makes the chain rule and substitution transparent; higher orders become d²y/dx². Lagrange is compact, Leibniz is explicit about the variables.",
    sectionId: "2"
  },
  obj4: {
    question: "What does a dot over a variable mean in calculus?",
    answer: "It is Newton’s notation for a derivative with respect to time: ẏ means dy/dt, and ÿ means the second derivative with respect to time. The dot is used almost exclusively when the independent variable is time, which is why it runs throughout physics and mechanics — velocity and acceleration appear as ẋ and ẍ — signalling the variable without naming it.",
    sectionId: "2"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Derivatives in Calculus",
    "description": "Master derivatives: difference quotient definition, notation systems, differentiation rules, implicit and logarithmic differentiation, common and special function derivatives, higher-order derivatives, and differentials.",
    "url": "https://www.learnmathclass.com/calculus/derivatives",
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
      "name": "Derivatives in Calculus"
    },
    "teaches": [
      "Derivative definition via difference quotient",
      "Derivative notation systems",
      "Derivative graph analysis",
      "Differentiability conditions",
      "Differentiation rules and techniques",
      "Common and special function derivatives",
      "Higher-order derivatives",
      "Differentials and linear approximation"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  // Concept introduction figures (section 1), one running instance: x² at 3.
  const fpCiLine = { kind: 'pieces', svgTitle: 'A straight line has the same slope 2 between any two of its points', xRange: [0, 5], yRange: [-1, 9],
    pieces: [
      { fn: (x) => 2 * x - 1, from: 0, to: 5, ends: [null, null], color: 'f', label: { text: 'y = 2x − 1', x: 3.6, y: 6.2, pos: 'nw' } },
    ],
    points: [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4.5, y: 8 }],
    notes: [{ x: 2.6, y: 2.6, text: '1 → 2: rise 2, run 1', pos: 'e' }, { x: 2.6, y: 1.8, text: '3 → 4.5: rise 3, run 1.5', pos: 'e' },
      { x: 2.6, y: 1.0, text: 'slope 2 both times', pos: 'e', color: 'r' }],
    caption: 'On a line, any two points give the same slope' };
  const fpCiSecants = { kind: 'pieces', svgTitle: 'Secants of y = x^2 from (3, 9) have different slopes', xRange: [1, 4.5], yRange: [0, 18], yStep: 2,
    pieces: [
      { fn: (x) => x * x, from: 1, to: 4.25, ends: [null, null], color: 'f', label: { text: 'y = x²', x: 1.1, y: 3, pos: 'e' } },
      { fn: (x) => 7 * x - 12, from: 4.2, to: 4.201, ends: [null, null], color: 'g', ghost: [[2.2, 4.4]] },
      { fn: (x) => 5 * x - 6, from: 4.2, to: 4.201, ends: [null, null], color: 'g', ghost: [[1.6, 4.4]] },
      { fn: (x) => 6 * x - 9, from: 2, to: 4.4, ends: [null, null], color: 'g' },
    ],
    points: [{ x: 3, y: 9 }, { x: 4, y: 16 }, { x: 2, y: 4 }],
    notes: [{ x: 3.15, y: 3.4, text: 'to x = 4: slope 7', pos: 'e' }, { x: 3.15, y: 2.2, text: 'to x = 2: slope 5', pos: 'e' },
      { x: 3.15, y: 1, text: 'tangent: slope 6', pos: 'e', color: 'r' }],
    caption: 'Two points on a curve: the slope depends on which two' };

  const conceptIntroFigures = {
    line: renderFunctionPlotV4(fpCiLine),
    secants: renderFunctionPlotV4(fpCiSecants),
    secantTable: ciSecantTable,
  };

  const demoUnits = {
    secant: demoUnitFrame({
      svg: functionDerivativeLocalDiagrams.asc,
      caption: 'Secant through P&#8321; and P&#8322;: m = &#916;y/&#916;x = 1.93',
      text: 'The two marked points are a and a + h on the curve; the rise &#916;y over the run &#916;x is the difference quotient, drawn as the slope of the secant line through them, 1.93 here. Slide P&#8322; toward P&#8321; and the secant turns into the tangent while its slope settles on the derivative. Drag the second point in on the',
      href: '/calculus/visual-tools/average-rate-of-change',
      linkText: 'average rate of change visualizer',
    }),
    critical: demoUnitFrame({
      svg: functionTangentLineDiagrams.max,
      caption: 'Horizontal tangent: slope = 0.00 at a local maximum',
      text: 'At the marked point the tangent line is level and the slope readout is exactly zero: the function has stopped rising and is about to fall, which is what a critical point looks like on the graph. To the left the tangents tilt up, to the right they tilt down, the sign change the first derivative test reads. Slide the point across the hilltop on the',
      href: '/calculus/visual-tools/tangent-line',
      linkText: 'tangent line at a point tool',
    }),
    concavity: demoUnitFrame({
      svg: functionConcavityDiagrams.infl,
      caption: 'f&#8243;(c) = 0.00 at an inflection point',
      text: 'The second derivative is read off the bend of the curve: positive where it cups upward, negative where it cups downward, and zero at the marked point where the bending switches sides. That switch is the inflection point, and f&#8243; changes sign through it. Move the marker into either bend and watch f&#8243;(c) leave zero on the',
      href: '/calculus/visual-tools/inflection-points',
      linkText: 'concavity and inflection points tool',
    }),
  };

  const derivRoadmapOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Nine pages in four groups',
    preface: 'The derivatives pages split into the concept, the computation, the catalogue of results, and the extensions.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Where to go next',
    conclusion: 'Start with the concept pages, learn the rules and techniques, keep the catalogues as reference, and move to the extensions last.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Derivatives', def: '9 pages', children: [
        { id: 'concept', name: 'Concept', children: [
          { id: 'ga', name: '[Graph analysis](!/calculus/derivatives/graph-analysis)', def: "signs of f′ and f″ control the shape" },
          { id: 'fn', name: '[Derivative as a function](!/calculus/derivatives/function)', def: "f′(x) as its own function" },
          { id: 'dif', name: '[Differentiability](!/calculus/derivatives/differentiability)', def: 'when the derivative exists or fails' },
        ] },
        { id: 'comp', name: 'Computation', children: [
          { id: 'rules', name: '[Rules](!/calculus/derivatives/rules)', def: 'algebraic procedures replacing the limit' },
          { id: 'tech', name: '[Techniques](!/calculus/derivatives/techniques)', def: 'methods for non-explicit forms' },
        ] },
        { id: 'cat', name: 'Catalogue', children: [
          { id: 'common', name: '[Common](!/calculus/derivatives/common)', def: 'standard function derivatives' },
          { id: 'special', name: '[Special](!/calculus/derivatives/special)', def: 'families beyond the standard set' },
        ] },
        { id: 'ext', name: 'Extension', children: [
          { id: 'higher', name: '[Higher-order](!/calculus/derivatives/higher-order)', def: 'repeated differentiation' },
          { id: 'diffs', name: '[Differentials](!/calculus/derivatives/differentials)', example: "dy = f′(x)·dx" },
        ] },
      ] },
    ],
  };

   return {
  props: {
    derivRoadmapOutline,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj2Table,
    roadmapTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Derivatives: Definition, Rules & Techniques | Learn Math Class",
      description: "Master derivatives: difference quotient definition, notation systems, differentiation rules, implicit and logarithmic differentiation, common and special function derivatives, higher-order derivatives, and differentials.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives",
      name: "Derivatives in Calculus"
    },
  }
}
   }


   export default function DerivativesPage({derivRoadmapOutline, 
     seoData,
     sectionsContent,
     introContent,
     obj2Table,
     roadmapTable,
     faqQuestions,
     schemas, demoUnits, conceptIntroFigures
   }) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template E (widening).
  const conceptIntro = {
    beats: [
      {
        id: 'line',
        lead: `You can already find the slope of a straight line.`,
        content: `Take any two points on it, divide the rise by the run, and the answer is the slope. For a straight line it does not matter which two points you pick: $y = 2x - 1$ rises $2$ for every $1$ across, between any pair.`,
        visual: ciSvg('line'),
        caption: `Two different pairs of points on $y = 2x - 1$ — from $(1, 1)$ to $(2, 3)$, and from $(3, 5)$ to $(4.5, 8)$ — give the same slope $2$.`,
      },
      {
        id: 'wall',
        kind: 'instance',
        lead: `On a curve, the slope at one point cannot be found that way.`,
        content: [
          `On $y = x^2$, ask how steep the curve is at $x = 3$, where $f(3) = 9$. Rise over run needs a second point, and the answer depends on which one.`,
          `@academic[formula_callout:The Difference Quotient and Its Limit
$$\\frac{f(a + h) - f(a)}{h}$$]@`,
          `Geometrically, this is the slope of the secant line connecting $(a, f(a))$ and $(a + h, f(a + h))$. As $h \\to 0$, the secant line rotates toward the tangent line at $x = a$.`,
          ciTable('secantTable'),
          `Every second point gives a different slope — $7$, $6.5$, $6.1$ — so no single pair answers the question. But as the second point closes in on $3$ from either side, the slopes close in on one number: $6$.`,
        ],
        visual: ciSvg('secants'),
        caption: `The dashed secants from $(3, 9)$ to $x = 4$ and $x = 2$ have slopes $7$ and $5$. The solid line touching the curve at $(3, 9)$ has slope $6$ — the value the table's slopes approach.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [derivative](!/calculus/definitions#derivative) of $f$ at $a$ is the limit of the difference quotient — the slope of the curve at that single point:`,
        formula: `@academic[formula_callout:The Difference Quotient and Its Limit
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$]@`,
        footer: `For $f(x) = x^2$ at $a = 3$: $\\frac{(3 + h)^2 - 9}{h} = 6 + h$, so $f'(3) = 6$.`,
      },
      {
        id: 'kind',
        lead: `A derivative at a point is a number: the slope of the tangent line there.`,
        content: `$f'(3) = 6$ is one number, the slope of the line that touches $y = x^2$ at $(3, 9)$. Doing the same at every point gives a new function, $f'(x) = 2x$, which is what "the derivative of $f$" usually means.`,
      },
      {
        id: 'survives',
        lead: `Rise over run still does all the work.`,
        content: [
          `The derivative is not a new kind of computation — it is the old slope, taken between two points that close in on each other. For a straight line nothing changes: every secant is the line itself, so the derivative of $2x - 1$ is $2$ at every point. The same quotient can be written with the second point called $x$ instead of $a + h$:`,
          `@academic[formula_callout:The Difference Quotient and Its Limit
$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$]@`,
          `Both forms define the same quantity. The first emphasizes the increment $h$; the second emphasizes the point $x$ approaching $a$.`,
          <div key={'unit-secant'} dangerouslySetInnerHTML={{ __html: demoUnits.secant }} />,
          `The derivative is the number this slope approaches, and every later rule is a shortcut for computing it.`,
        ],
      },
      {
        id: 'caveat',
        tone: 'break',
        lead: `What you lose: the limit may not exist.`,
        content: `A straight line always has a slope; a curve does not always have one at every point. When this limit exists, $f'(a)$ equals the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. When the limit does not exist—due to a corner, cusp, vertical tangent, or discontinuity—the derivative is undefined at that point. Which points fail, and why, is the subject of [differentiability](!/calculus/derivatives/differentiability).`,
      },
      {
        id: 'exit',
        content: `The rest of the page covers derivative notation, what the derivative says about a graph, the differentiation rules that replace the limit with shortcuts, derivatives of common functions, and the main applications.`,
      },
    ],
  }

  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
          `@academic[pitfall,aside:true,width:35%:Squaring a sum term by term
Writing $(3 + h)^2$ as $9 + h^2$ turns the difference quotient of $x^2$ at $3$ into $\\frac{h^2}{h} = h$, and the limit into $0$. The full square $9 + 6h + h^2$ gives $6 + h$, so $f'(3) = 6$.
[Read more](!#pitfalls)]@

Working from the definition always takes the same three steps: write out $f(a + h)$, subtract $f(a)$, and divide by $h$. The subtraction removes every term that does not contain $h$, which is what makes the division possible. For $f(x) = x^2$ at a general point $a$, the three steps give $\\frac{2ah + h^2}{h} = 2a + h$, and the limit is $2a$.`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'obj2-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj2Table}}/>,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
                  <div key={'unit-critical'} dangerouslySetInnerHTML={{ __html: demoUnits.critical }} />,
          `The critical points are where the analysis starts; the sign of the derivative on either side finishes it.`,
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
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
                  <div key={'unit-concavity'} dangerouslySetInnerHTML={{ __html: demoUnits.concavity }} />,
          `Each further derivative describes a finer feature of the graph, but the second is the last one with a shape of its own.`,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:sectionsContent.pitfalls.link,
        content:[
          sectionsContent.pitfalls.content,
        ]
    },
    {
        id:'roadmap',
        title:sectionsContent.roadmap.title,
        link:sectionsContent.roadmap.link,
        content:[
          sectionsContent.roadmap.content,
          <div key={'roadmap-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: roadmapTable}}/>,
          <DiagramFrame
            key={'roadmap-diagram'}
            id="derivatives-roadmap-outline"
            title="The derivatives pages"
            source="/calculus/derivatives"
          >
            <TaxonomyOutline data={derivRoadmapOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Derivatives FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Derivatives</h1>
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}