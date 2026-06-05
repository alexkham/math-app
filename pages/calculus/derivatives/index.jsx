
// tables-optimized: v4 | 2026-05-24 | 2 tables (obj2 notation aggregation, roadmap summary capstone)

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


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

$$\\frac{f(a + h) - f(a)}{h}$$

Geometrically, this is the slope of the secant line connecting $(a, f(a))$ and $(a + h, f(a + h))$. As $h \\to 0$, the secant line rotates toward the tangent line at $x = a$.

The derivative of $f$ at $a$ is defined as the limit of the difference quotient:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

When this limit exists, $f'(a)$ equals the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. When the limit does not exist—due to a corner, cusp, vertical tangent, or discontinuity—the derivative is undefined at that point.

An equivalent form uses $x$ approaching $a$ directly:

$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$

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

## Euler Notation

The operator $D$ or $D_x$ applied to a function: $Df(x)$ means the same as $f'(x)$. Higher orders use powers of the operator: $D^2 f$, $D^n f$. This notation appears in differential equations and operator theory.

## Newton Notation

A dot above the variable: $\\dot{y}$ for the first derivative, $\\ddot{y}$ for the second. Used almost exclusively where the independent variable is time. The notation signals that differentiation is with respect to $t$.

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

The graph of $f'$ encodes the behavior of $f$: where $f$ climbs, $f'$ is positive; where $f$ descends, $f'$ is negative; where $f$ has an extremum, $f'$ crosses zero. Reading one graph from the other—and reversing the process—is a core skill.

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

Differentiability implies [continuity](!/calculus/limits/continuity)—a function must be unbroken at a point to have a tangent line there. The converse is false: $f(x) = |x|$ is continuous at $x = 0$ but not differentiable, because the left-hand and right-hand slopes disagree.

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

const faqQuestions = {
  obj1: {
    question: "What is a derivative?",
    answer: "A derivative measures the instantaneous rate of change of a function at a point. It is defined as the limit of the difference quotient: f'(a) = lim(h→0) [f(a+h) - f(a)]/h. Geometrically, this equals the slope of the tangent line to the graph at that point.",
    sectionId: "1"
  },
  obj2: {
    question: "What are the different notations for derivatives?",
    answer: "Four notations are common: Lagrange (f'(x)), Leibniz (dy/dx), Euler (Df), and Newton (dot notation). Lagrange is compact for functions, Leibniz behaves like a fraction in chain rule, Euler appears in operator theory, and Newton is used for time derivatives.",
    sectionId: "2"
  },
  obj3: {
    question: "What does the derivative tell you about a function?",
    answer: "The sign of f'(x) indicates direction: positive means increasing, negative means decreasing. Where f'(x) = 0 are critical points (potential extrema). The second derivative f''(x) indicates concavity: positive is concave up, negative is concave down.",
    sectionId: "3"
  },
  obj4: {
    question: "When is a function not differentiable?",
    answer: "A function fails to be differentiable at corners, cusps, vertical tangents, and discontinuities. Differentiability requires continuity (but continuity alone is not sufficient). The classic example is |x|, which is continuous but not differentiable at x = 0.",
    sectionId: "5"
  },
  obj5: {
    question: "What are the basic differentiation rules?",
    answer: "The main rules are: power rule (d/dx[x^n] = nx^(n-1)), product rule, quotient rule, and chain rule for compositions. These convert the limit definition into algebraic procedures, making derivative computation efficient.",
    sectionId: "6"
  },
  obj6: {
    question: "What is implicit differentiation?",
    answer: "Implicit differentiation finds dy/dx when y is not given explicitly as a function of x. Differentiate both sides of the equation with respect to x, treating y as a function of x (applying chain rule), then solve for dy/dx.",
    sectionId: "7"
  },
  obj7: {
    question: "What are higher-order derivatives?",
    answer: "Higher-order derivatives result from differentiating repeatedly. The second derivative f''(x) measures concavity, the third and beyond capture finer behavior. Some functions exhibit patterns: e^x stays unchanged, polynomials eventually become zero, and trig functions cycle.",
    sectionId: "10"
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
}


   return {
  props: {
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


   export default function DerivativesPage({
     seoData,
     sectionsContent,
     introContent,
     obj2Table,
     roadmapTable,
     faqQuestions,
     schemas
   }) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          sectionsContent.obj1.content,
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
        id:'roadmap',
        title:sectionsContent.roadmap.title,
        link:sectionsContent.roadmap.link,
        content:[
          sectionsContent.roadmap.content,
          <div key={'roadmap-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: roadmapTable}}/>,
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

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}