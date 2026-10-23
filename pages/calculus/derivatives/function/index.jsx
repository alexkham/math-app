// tables-optimized: v4 | 2026-05-24 | 3 tables (obj6 aggregation, obj7 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import functionDerivativeDiagrams from '@/app/components/functions/derivative/functionDerivativeDiagrams'
import NestedContainment from '@/app/components/infographics/NestedContainment/NestedContainment'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "derivative function",
  "derivative as a function",
  "graphing derivatives",
  "graph f prime from f",
  "derivative function definition",
  "rate of change function",
  "domain of derivative",
  "continuity of derivative",
  "Darboux theorem",
  "derivative graph relationship",
  "f and f prime",
  "derivative from limit",
  "slope function calculus",
  "derivative function examples"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj6 — aggregation: derivative as rate of change across domains
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Context</th>
      <th style="${tableHeaders.aggregation}">Quantity f</th>
      <th style="${tableHeaders.aggregation}">Derivative f&apos;</th>
      <th style="${tableHeaders.aggregation}">What f&apos; reveals</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quantity as a function of x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">instantaneous rate of change at each x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where the quantity accelerates, plateaus, or reverses</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Kinematics</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">position s(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">velocity s&apos;(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">stops (zeros), reversals (sign changes), maximum speed (extrema)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Economics</td>
      <td style="padding: 12px 15px; color: #34495e;">total cost C(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">marginal cost C&apos;(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">whether production costs are accelerating or stabilizing</td>
    </tr>
  </tbody>
</table>
`

// obj7 — aggregation: smoothness hierarchy and behavior of f'
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Class</th>
      <th style="${tableHeaders.aggregation}">Definition</th>
      <th style="${tableHeaders.aggregation}">Behavior of f&apos;</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Continuous (C⁰)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f continuous on its domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">may not exist at every point</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x| — continuous, not differentiable at 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives/differentiability" style="${linkStyle}">Differentiable</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; exists at every point of the domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, but may itself be discontinuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x² sin(1/x) extended by f(0)=0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Continuously differentiable (C¹)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f differentiable and f&apos; continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous on the whole domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomials, sin x, eˣ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Smooth (C∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">all higher derivatives exist and are continuous</td>
      <td style="padding: 12px 15px; color: #34495e;">itself C∞ — infinitely differentiable</td>
      <td style="padding: 12px 15px; color: #34495e;">polynomials, eˣ, sin x, cos x</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: the f ↔ f' dictionary
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Behavior of f</th>
      <th style="${tableHeaders.summary}">Corresponding behavior of f&apos;</th>
      <th style="${tableHeaders.summary}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is increasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(x) ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph of f&apos; lies on or above the x-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(x) ≤ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph of f&apos; lies on or below the x-axis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f has a local extremum at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(a) = 0, or f&apos; undefined at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal tangent on f when f&apos;(a) = 0 (corner or cusp when f&apos; is undefined)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f has a local maximum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; changes sign + → − (sufficient, not necessary)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; crosses zero from above, or jumps from + to − at a corner or cusp</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f has a local minimum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; changes sign − → + (sufficient, not necessary)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; crosses zero from below, or jumps from − to + at a corner or cusp</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is steep at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|f&apos;(a)| is large</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; graph far from the x-axis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is nearly flat at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(a) ≈ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; graph near the x-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is linear on an interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; is constant on that interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal segment on the graph of f&apos;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is concave up</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; is increasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">slope of f is rising</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f is concave down</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; is decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">slope of f is falling</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f has an inflection point at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; has a local extremum at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">concavity of f flips</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">f shifted vertically by C</td>
      <td style="padding: 12px 15px; color: #34495e;">f&apos; is unchanged</td>
      <td style="padding: 12px 15px; color: #34495e;">vertical translation is invisible to the derivative</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/derivatives/function ───────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Derivative](!/calculus/definitions#derivative) — the limit of the difference quotient, producing a slope at each point
// - [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change) — the derivative interpreted as a rate
// - [Average Rate of Change](!/calculus/definitions#average_rate_of_change) — secant slope over an interval
// - [Differentiability](!/calculus/definitions#differentiability) — determines the domain of the derivative function
// - [Monotonic Function](!/calculus/definitions#monotonic_function) — sign of $f'$ determines where $f$ rises or falls`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `The Derivative Function Defined`,
//     content: `
// Fix a function $f$ and consider the limit

// $$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$

// evaluated not at a single point $a$ but at a variable $x$. Wherever this limit produces a finite value, $f'(x)$ is defined. The result is a function $f'$ whose input is $x$ and whose output is the slope of $f$ at $x$.

// The domain of $f'$ is a subset of the domain of $f$. Every point where $f$ is [differentiable](!/calculus/derivatives/differentiability) belongs to the domain of $f'$; every point where the limit fails—corners, cusps, vertical tangents, discontinuities—is excluded. For a polynomial, the domains of $f$ and $f'$ coincide. For $f(x) = |x|$, the domain of $f$ is all reals, but $x = 0$ is missing from the domain of $f'$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Computing the Derivative Function from the Definition`,
//     content: `
// Applying the limit definition with $x$ as a free variable produces an expression in $x$—the derivative function in closed form.

// For $f(x) = x^2$:

// $$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$$

// The result $f'(x) = 2x$ is a function: input $x$, output the slope of the parabola at that $x$. At $x = 3$, the slope is $6$. At $x = -1$, the slope is $-2$.

// Once [differentiation rules](!/calculus/derivatives/rules) are established, this limit computation becomes unnecessary for standard functions. But the limit definition remains the foundation—every rule is proven from it, and nonstandard functions may require returning to it directly.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Graphing f' from f`,
//     content: `
// The graph of $f'$ can be read directly from the graph of $f$ without computing any formula.

// Where $f$ is increasing, $f'$ is positive—the graph of $f'$ lies above the $x$-axis. Where $f$ is decreasing, $f'$ is negative—the graph of $f'$ lies below the $x$-axis. Where $f$ has a local extremum, $f'$ crosses zero (or is undefined).

// Steep sections of $f$ correspond to large values of $|f'|$. Flat sections of $f$ correspond to $f'$ near zero. A straight segment of $f$ with constant slope corresponds to $f'$ being constant—a horizontal segment on the graph of $f'$.

// Where $f$ is concave up, the slope is increasing, so $f'$ is an increasing function on that interval. Where $f$ is concave down, $f'$ is decreasing. Inflection points of $f$—where concavity changes—correspond to local extrema of $f'$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Graphing f from f'`,
//     content: `
// The reverse problem—reconstructing $f$ from $f'$—is possible up to a vertical shift.

// Where $f'$ is positive, $f$ is rising. Where $f'$ is negative, $f$ is falling. Where $f'$ crosses zero from positive to negative, $f$ has a local maximum. Where $f'$ crosses zero from negative to positive, $f$ has a local minimum.

// The magnitude of $f'$ controls steepness: large positive values of $f'$ mean $f$ is climbing steeply; values of $f'$ near zero mean $f$ is nearly flat. Where $f'$ is increasing, $f$ is concave up. Where $f'$ is decreasing, $f$ is concave down.

// The one piece of information $f'$ does not determine is the vertical position. The derivative of $f(x) = x^2$ and the derivative of $g(x) = x^2 + 5$ are identical: both equal $2x$. The graph of $f$ can be shifted vertically by any constant without changing $f'$. This ambiguity is resolved only when a specific function value is known—an initial condition.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `The Relationship Between f and f'`,
//     content: `
// The derivative function $f'$ encodes the shape of $f$ completely, up to vertical translation. The correspondence runs in both directions:

// Zeros of $f'$ correspond to horizontal tangents on $f$—local extrema or plateaus. Sign changes of $f'$ correspond to direction changes of $f$. Extrema of $f'$ correspond to inflection points of $f$, where the bending direction reverses.

// If $f'$ is itself a smooth, well-behaved function, then $f$ is smooth as well. If $f'$ has jumps or singularities, those indicate abrupt changes in the slope of $f$—corners, cusps, or worse.

// This relationship extends to [higher-order derivatives](!/calculus/derivatives/higher-order). The function $f''$ relates to $f'$ in the same way that $f'$ relates to $f$: the second derivative is the derivative of the derivative, and the correspondence between zeros, sign changes, and extrema repeats at each level.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `The Derivative as Rate of Change`,
//     content: `
// When $f$ models a quantity that varies with input $x$, the derivative function $f'(x)$ models how fast that quantity changes at each value of $x$.

// In kinematics, if $s(t)$ is position as a function of time, then $s'(t)$ is velocity—a function that gives the speed and direction of motion at every instant. The velocity function can be graphed, analyzed for zeros (stops), sign changes (reversals), and extrema (maximum speed). Differentiating again yields $s''(t)$, acceleration, which is itself a function of time.

// In economics, if $C(x)$ is the cost of producing $x$ units, then $C'(x)$ is the marginal cost—the rate at which cost changes per additional unit. The marginal cost function reveals whether production costs are accelerating or stabilizing.

// In each context, the derivative function provides a running commentary on how the original quantity evolves—not at a single frozen moment, but across the entire domain.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Continuity of the Derivative`,
//     content: `
// A natural question: if $f$ is differentiable everywhere, must $f'$ be continuous?

// The answer is no. Consider $f(x) = x^2 \\sin(1/x)$ for $x \\neq 0$ and $f(0) = 0$. This function is differentiable at every real number, including $x = 0$, yet $f'$ oscillates near the origin and is discontinuous there. Differentiability of $f$ does not guarantee continuity of $f'$.

// However, derivatives satisfy a strong structural constraint. Darboux's theorem states that $f'$ always has the intermediate value property: if $f'$ takes values $A$ and $B$ on an interval, it takes every value between $A$ and $B$ somewhere on that interval. This means $f'$ cannot have jump discontinuities. The only discontinuities possible for a derivative are oscillatory ones—the kind seen in the example above.

// Functions whose derivatives are continuous everywhere form the class $C^1$. Most functions encountered in standard calculus belong to $C^1$ or higher smoothness classes, but the distinction matters in theoretical work and in the study of [differentiability](!/calculus/derivatives/differentiability).
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Summary: How f and f' Correspond`,
//     content: `
// The two graphical translations covered above—reading $f'$ from $f$, and reconstructing $f$ from $f'$—are two views of a single dictionary connecting features of one function to features of the other. The table below collects this correspondence in compact form, organized by behavior of $f$ with the parallel behavior of $f'$ alongside; reading the columns in reverse order recovers the $f' \\to f$ mapping. Together with the vertical-translation ambiguity in the final row, this is everything the derivative function knows about the shape of $f$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

// formulas-optimized: v1 | 2026-06-09 | 1 callout (obj1)



const sectionsContent = {
  // ─── /calculus/derivatives/function ───────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Derivative](!/calculus/definitions#derivative) — the limit of the difference quotient, producing a slope at each point
- [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change) — the derivative interpreted as a rate
- [Average Rate of Change](!/calculus/definitions#average_rate_of_change) — secant slope over an interval
- [Differentiability](!/calculus/definitions#differentiability) — determines the domain of the derivative function
- [Monotonic Function](!/calculus/definitions#monotonic_function) — sign of $f'$ determines where $f$ rises or falls`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Derivative Function Defined`,
    content: `
Fix a function $f$ and consider the limit

@academic[formula_callout:Derivative Limit Definition
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = \\lim_{t \\to x} \\frac{f(t) - f(x)}{t - x}$$
/calculus/formulas#derivative_limit_definition]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

evaluated not at a single point $a$ but at a variable $x$. Wherever this limit produces a finite value, $f'(x)$ is defined. The result is a function $f'$ whose input is $x$ and whose output is the slope of $f$ at $x$.

@academic[rule_corollary_plain:The domain of $f'$ is a subset of the domain of $f$.]@

Every point where $f$ is [differentiable](!/calculus/derivatives/differentiability) belongs to the domain of $f'$; every point where the limit fails—corners, cusps, vertical tangents, discontinuities—is excluded. For a polynomial, the domains of $f$ and $f'$ coincide. For $f(x) = |x|$, the domain of $f$ is all reals, but $x = 0$ is missing from the domain of $f'$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Computing the Derivative Function from the Definition`,
    content: `
Applying the limit definition with $x$ as a free variable produces an expression in $x$—the derivative function in closed form.

For $f(x) = x^2$:

@academic[formula_callout:Computing the Derivative Function from the Definition
$$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$$]@

@academic[pitfall,aside:true,width:35%:Squaring a sum term by term
Writing $(x + h)^2$ as $x^2 + h^2$ leaves $\\frac{h^2}{h} = h$, which tends to $0$, so $f'(x) = 0$ for every $x$. With $(x + h)^2 = x^2 + 2xh + h^2$ the quotient is $2x + h$, and $f'(x) = 2x$.
[Read more](!#pitfalls)]@

The result $f'(x) = 2x$ is a function: input $x$, output the slope of the parabola at that $x$. At $x = 3$, the slope is $6$. At $x = -1$, the slope is $-2$.

Once [differentiation rules](!/calculus/derivatives/rules) are established, this limit computation becomes unnecessary for standard functions. But the limit definition remains the foundation—every rule is proven from it, and nonstandard functions may require returning to it directly.
`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Derivative Notation: Function vs Point`,
    lead: `The prime mark, the quotient it is built from, and the two ways to say “now evaluate at $a$” — the distinction this whole page turns on.`,
    inherited: `$\\lim$ and its arrow — [two-sided limits](!/calculus/limits/two-sided); the four systems for higher orders — [higher-order derivatives](!/calculus/derivatives/higher-order#notation); the quotient reading of $\\frac{dy}{dx}$ — [differentials](!/calculus/derivatives/differentials#notation).`,
    entries: [
      {
        id: 'difference-quotient',
        tex: `$\\frac{f(x+h) - f(x)}{h}$`,
        read: `The difference quotient`,
        means: `Average slope over the step from $x$ to $x+h$ — the object whose limit **is** the derivative. $h$ is a free increment, the same role $\\Delta x$ plays on [differentials](!/calculus/derivatives/differentials#notation).`,
        cases: `The $h$-form for computation; the $t$-form $\\frac{f(t)-f(x)}{t-x}$ in proofs, where the moving point has a name. Numerical work adds the symmetric form $\\frac{f(x+h)-f(x-h)}{2h}$, accurate to one order higher.`,
        alsoWritten: `$\\frac{\\Delta y}{\\Delta x}$ — the increment form, standard in physics-flavoured texts.`,
        confusedWith: `A fraction you can evaluate at $h = 0$. There it is the [indeterminate form](!/calculus/limits/evaluating#notation) $0/0$ — the limit is the entire content of the definition.`,
      },
      {
        id: 'prime-function',
        tex: `$f'(x)$`,
        read: `f prime of x`,
        means: `One mark turns a function into its slope function. Binding order matters: $f'(x)$ is $(f')(x)$ — differentiate first, then feed in $x$.`,
        cases: `$f'(a)$ — the same function evaluated at a point: one number, one slope. The domain shrinks where [differentiability](!/calculus/derivatives/differentiability) fails — $f(x) = |x|$ loses $x = 0$ on the way from $f$ to $f'$.`,
        alsoWritten: `$\\frac{dy}{dx}$, $\\dot{y}$, $Df$ — Leibniz, Newton, Euler; all four systems compared on [higher-order derivatives](!/calculus/derivatives/higher-order#notation).`,
        confusedWith: `“$f'(a)$ = differentiate $f(a)$.” Substituting first leaves a constant, and its derivative is $0$ — evaluation always comes **after** the prime.`,
        sameGlyphElsewhere: `The prime marks a [set complement](!/set-theory/operations) $A'$ and a transformed point in geometry — labels, not rates.`,
      },
      {
        id: 'evaluation-bar',
        tex: `$\\left.\\frac{dy}{dx}\\right|_{x=a}$`,
        read: `d y by d x, evaluated at x equals a`,
        means: `The evaluation bar. Prime notation evaluates by ordinary substitution — $f'(a)$ — but $\\frac{dy}{dx}$ names no input slot, so Leibniz notation needs an explicit “now substitute” mark. The [LaTeX reference](!/latex) builds it with @[\\left.\\frac{dy}{dx}\\right|_{x=a}]@.`,
        cases: `Attaches to any operator expression, not only $\\frac{dy}{dx}$. When the function has a name, $f'(a)$ says the same thing shorter — the bar earns its keep when the derivative exists only as an expression.`,
        alsoWritten: `$\\frac{dy}{dx}(a)$ in some texts — compact but easy to misread as multiplication.`,
        confusedWith: `An absolute value or a divider. The bar is an instruction, not an operation — and it must sit outside a **finished** derivative; substituting $a$ before differentiating repeats the constant-trap above.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/derivatives`,
    parentLabel: `Derivatives`,
  },
  obj3: {
    title: `Graphing f' from f`,
    content: `
The graph of $f'$ can be read directly from the graph of $f$ without computing any formula.

Where $f$ is increasing, $f' \\geq 0$—the graph of $f'$ lies on or above the $x$-axis (as for $x^3$ at $x = 0$). Where $f$ is decreasing, $f' \\leq 0$—the graph of $f'$ lies on or below the $x$-axis. Where $f$ has a local extremum, $f'$ crosses zero (or is undefined).

@academic[pitfall,aside:true,width:35%:Reading the slope from the height
Taking the sign of $f'$ from the height of $f$: $f(x) = x^2$ is positive at $x = -1$, which suggests $f'(-1) > 0$. But $f$ is falling there, and $f'(-1) = 2(-1) = -2$.
[Read more](!#pitfalls)]@

Steep sections of $f$ correspond to large values of $|f'|$. Flat sections of $f$ correspond to $f'$ near zero. A straight segment of $f$ with constant slope corresponds to $f'$ being constant—a horizontal segment on the graph of $f'$.

Where $f$ is concave up, the slope is increasing, so $f'$ is an increasing function on that interval. Where $f$ is concave down, $f'$ is decreasing. Inflection points of $f$—where concavity changes—correspond to local extrema of $f'$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Graphing f from f'`,
    content: `
The reverse problem—reconstructing $f$ from $f'$—is possible up to a vertical shift.

Where $f'$ is positive, $f$ is rising. Where $f'$ is negative, $f$ is falling. Where $f'$ crosses zero from positive to negative, $f$ has a local maximum. Where $f'$ crosses zero from negative to positive, $f$ has a local minimum.

@academic[pitfall,aside:true,width:35%:Taking every zero of the derivative as an extremum
Reading $f'(a) = 0$ alone as a maximum or minimum fails for $f(x) = x^3$: $f'(0) = 0$, yet $f$ rises on both sides of $0$. Since $f'(x) = 3x^2$ does not change sign at $0$, there is no extremum there.
[Read more](!#pitfalls)]@

The magnitude of $f'$ controls steepness: large positive values of $f'$ mean $f$ is climbing steeply; values of $f'$ near zero mean $f$ is nearly flat. Where $f'$ is increasing, $f$ is concave up. Where $f'$ is decreasing, $f$ is concave down.

The one piece of information $f'$ does not determine is the vertical position. The derivative of $f(x) = x^2$ and the derivative of $g(x) = x^2 + 5$ are identical: both equal $2x$.

@academic[rule_plain:The graph of $f$ can be shifted vertically by any constant without changing $f'$.]@

This ambiguity is resolved only when a specific function value is known—an initial condition.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The Relationship Between f and f'`,
    content: `
The derivative function $f'$ encodes the shape of $f$ completely, up to vertical translation. The correspondence runs in both directions:

Zeros of $f'$ correspond to horizontal tangents on $f$—local extrema or plateaus. Sign changes of $f'$ correspond to direction changes of $f$. Extrema of $f'$ correspond to inflection points of $f$, where the bending direction reverses.

If $f'$ is itself a smooth, well-behaved function, then $f$ is smooth as well. If $f'$ has jumps or singularities, those indicate abrupt changes in the slope of $f$—corners, cusps, or worse.

This relationship extends to [higher-order derivatives](!/calculus/derivatives/higher-order). The function $f''$ relates to $f'$ in the same way that $f'$ relates to $f$: the second derivative is the derivative of the derivative, and the correspondence between zeros, sign changes, and extrema repeats at each level.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `The Derivative as Rate of Change`,
    content: `
When $f$ models a quantity that varies with input $x$, the derivative function $f'(x)$ models how fast that quantity changes at each value of $x$.

In kinematics, if $s(t)$ is position as a function of time, then $s'(t)$ is velocity—a function that gives the speed and direction of motion at every instant. The velocity function can be graphed, analyzed for zeros (stops), sign changes (reversals), and extrema (maximum speed). Differentiating again yields $s''(t)$, acceleration, which is itself a function of time.

In economics, if $C(x)$ is the cost of producing $x$ units, then $C'(x)$ is the marginal cost—the rate at which cost changes per additional unit. The marginal cost function reveals whether production costs are accelerating or stabilizing.

In each context, the derivative function provides a running commentary on how the original quantity evolves—not at a single frozen moment, but across the entire domain.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Continuity of the Derivative`,
    content: `
A natural question: if $f$ is differentiable everywhere, must $f'$ be continuous?

The answer is no. Consider $f(x) = x^2 \\sin(1/x)$ for $x \\neq 0$ and $f(0) = 0$. This function is differentiable at every real number, including $x = 0$, yet $f'$ oscillates near the origin and is discontinuous there. Differentiability of $f$ does not guarantee continuity of $f'$.

However, derivatives satisfy a strong structural constraint.

@academic[rule_theorem:Darboux's theorem
Darboux's theorem states that $f'$ always has the intermediate value property: if $f'$ takes values $A$ and $B$ on an interval, it takes every value between $A$ and $B$ somewhere on that interval.]@

This means $f'$ cannot have jump discontinuities. The only discontinuities possible for a derivative are oscillatory ones—the kind seen in the example above.

Functions whose derivatives are continuous everywhere form the class $C^1$. Most functions encountered in standard calculus belong to $C^1$ or higher smoothness classes, but the distinction matters in theoretical work and in the study of [differentiability](!/calculus/derivatives/differentiability).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary: How f and f' Correspond`,
    content: `
The two graphical translations covered above—reading $f'$ from $f$, and reconstructing $f$ from $f'$—are two views of a single dictionary connecting features of one function to features of the other. The table below collects this correspondence in compact form, organized by behavior of $f$ with the parallel behavior of $f'$ alongside; reading the columns in reverse order recovers the $f' \\to f$ mapping. Together with the vertical-translation ambiguity in the final row, this is everything the derivative function knows about the shape of $f$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `
Three mistakes cause most wrong answers when the derivative function is computed from the definition or read from a graph. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Squaring a sum term by term**

In the limit definition for $f(x) = x^2$, the term $f(x + h) = (x + h)^2$ is expanded as if a square could be taken one term at a time, and the cross term $2xh$ is lost.

Wrong working: $\\dfrac{(x + h)^2 - x^2}{h} = \\dfrac{x^2 + h^2 - x^2}{h} = \\dfrac{h^2}{h} = h$, and as $h \\to 0$ this gives $f'(x) = 0$ for every $x$.

Right working: $(x + h)^2 = x^2 + 2xh + h^2$, so $\\dfrac{(x + h)^2 - x^2}{h} = \\dfrac{2xh + h^2}{h} = 2x + h$, which tends to $2x$. So $f'(x) = 2x$.

Why it happens: multiplication spreads over a sum, $3(x + h) = 3x + 3h$, and squaring is treated as if it did the same. It does not: $(x + h)^2 = (x + h)(x + h)$, and multiplying out produces the cross term $2xh$.

How to check: a derivative equal to $0$ everywhere belongs to a flat graph, and the parabola is not flat. Numerically, at $x = 3$ with $h = 0.01$ the quotient is $\\dfrac{3.01^2 - 9}{0.01} = 6.01$, close to $6$ and far from $0$.

**Reading the slope from the height**

When the graph of $f'$ is sketched from the graph of $f$, the sign of $f'$ is taken from where $f$ sits, above or below the $x$-axis, instead of from whether $f$ is rising or falling.

Wrong working: $f(x) = x^2$ lies above the $x$-axis for every $x \\neq 0$, so $f'$ is drawn positive everywhere, and $f'(-1) > 0$.

Right working: for $x < 0$ the parabola falls, so $f'$ is negative there. With $f'(x) = 2x$, $f'(-1) = -2$; the graph of $f'$ is below the axis to the left of $0$ and above it to the right.

Why it happens: both graphs are drawn on the same kind of axes, and copying the shape of $f$ is easier than reading its slope point by point.

How to check: follow the tangent at a sample point. At $x = -1$ the tangent to $x^2$ goes down to the right, so its slope, which is the value of $f'$ there, is negative.

**Taking every zero of the derivative as an extremum**

When $f$ is reconstructed from $f'$, every point where $f'$ equals $0$ is marked as a maximum or a minimum, without checking whether $f'$ changes sign there.

Wrong working: for $f(x) = x^3$, $f'(x) = 3x^2$ is $0$ at $x = 0$, so $f$ is said to have a local extremum at $0$.

Right working: $3x^2 > 0$ on both sides of $0$, so $f$ rises before $0$ and after it. The tangent at $0$ is horizontal, but there is no extremum: $f(-0.1) = -0.001$ is below $f(0) = 0$, and $f(0.1) = 0.001$ is above it.

Why it happens: at a smooth maximum or minimum the tangent is always horizontal, and the statement is read backwards: horizontal tangent, therefore extremum.

How to check: look at the sign of $f'$ just left and just right of the zero. An extremum needs a change of sign, from positive to negative for a maximum and from negative to positive for a minimum.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `From a Single Slope to an Entire Function`,
  content: `
The derivative at a point $f'(a)$ is a number—one slope at one location. But the definition works at every point where the limit exists, and letting the input vary produces a new function $f'(x)$ that maps each $x$ to the slope of $f$ at that $x$.

This shift in perspective is fundamental. The derivative function $f'$ has its own domain, its own graph, its own behavior. It can be continuous or discontinuous, positive or negative, increasing or decreasing. It can itself be differentiated, producing [higher-order derivatives](!/calculus/derivatives/higher-order).

Understanding $f'$ as a function—not just a computation applied at isolated points—connects the local information encoded in slopes to global information about the shape of $f$.
`
};



// FAQ pass: all seven originals restated their own h2 — the definition,
// computing from the definition, graphing f' from f, graphing f from f',
// the f/f' relationship, rate of change, and continuity of f' (whose
// section opens with that exact question). Replaced with three traps from
// the notation section and the one buried consequence of Darboux's theorem.
const faqQuestions = {
  obj1: {
    question: "What does the vertical bar in dy/dx|ₓ₌ₐ mean?",
    answer: "It means evaluate the derivative at x = a, after differentiating. Prime notation has an input slot, so f′(a) substitutes directly, but dy/dx names no slot — the bar supplies the missing “now substitute” instruction. It is not an absolute value or a divider, and it must sit outside a finished derivative: substituting a first leaves a constant, whose derivative is 0.",
    sectionId: "notation"
  },
  obj2: {
    question: "What is the difference between f′(a) and the derivative of f(a)?",
    answer: "f′(a) means differentiate f first, then substitute a — the prime binds to the function, not to the value. The derivative of f(a) is something else entirely: f(a) is a fixed number, and the derivative of a constant is 0. Evaluation always comes after differentiation, which is why the prime is attached to f rather than to f(a).",
    sectionId: "notation"
  },
  obj3: {
    question: "What is the symmetric difference quotient?",
    answer: "It is the two-sided version of the difference quotient, [f(x+h) − f(x−h)]/(2h), which steps forward and backward by h instead of forward only. Its limit is the same derivative, but for a fixed h it approximates the slope one order more accurately, so numerical differentiation almost always uses it. It can also return a value where no derivative exists.",
    sectionId: "notation"
  },
  obj4: {
    question: "Can a derivative have a jump discontinuity?",
    answer: "No. Darboux's theorem says every derivative has the intermediate value property: if f′ takes two values on an interval, it takes every value between them, and a jump would skip values. Derivatives can still be discontinuous — x²sin(1/x) is [differentiable](!/calculus/derivatives/differentiability) everywhere yet its derivative oscillates at 0 — but only oscillatory discontinuities are possible.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Derivatives as Functions",
    "description": "Understand the derivative as a function f'(x): definition, graphing f' from f and vice versa, rate of change interpretation, and continuity properties including Darboux's theorem.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/function",
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
      "name": "Derivatives as Functions"
    },
    "teaches": [
      "Definition of the derivative function",
      "Computing derivatives from the limit definition",
      "Graphing f' from f and f from f'",
      "Relationship between function and derivative",
      "Derivative as rate of change",
      "Continuity and Darboux's theorem"
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Derivatives as Functions",
        "item": "https://www.learnmathclass.com/calculus/derivatives/function"
      }
    ]
  }
}





  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fnTan = (c) => (x) => 2.25 + c + 3 * (x - 1.5);
  const fpShiftFamily = { kind: 'pieces', svgTitle: 'x^2 + 3, x^2 and x^2 - 2 have the same derivative 2x: at x = 1.5 all three tangents have slope 3', xRange: [-3, 3], yRange: [-3, 9],
    pieces: [
      { fn: fnTan(3), from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0.6, 2.4]] },
      { fn: fnTan(0), from: 99, to: 99, ends: [null, null], color: 'f', ghost: [[0.6, 2.4]] },
      { fn: fnTan(-2), from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[0.6, 2.4]] },
      { fn: (x) => x * x + 3, from: -2.4, to: 2.4, ends: [null, null], color: 'g' },
      { fn: (x) => x * x, from: -2.9, to: 2.9, ends: [null, null], color: 'f' },
      { fn: (x) => x * x - 2, from: -3, to: 3, ends: [null, null], color: 'r' },
    ],
    points: [{ x: 1.5, y: 5.25 }, { x: 1.5, y: 2.25 }, { x: 1.5, y: 0.25 }],
    notes: [{ x: 0.08, y: 2.45, text: 'x² + 3', pos: 'e', color: 'g' }, { x: 0.08, y: -0.6, text: 'x²', pos: 'e', color: 'f' }, { x: 0.08, y: -2.6, text: 'x² − 2', pos: 'e', color: 'r' }, { x: 0.95, y: -2.0, text: 'same slope 3 at x = 1.5', pos: 'e', color: 'r' }],
    caption: 'f′ fixes every slope but not the height: f is known only up to + C' };
  const demoUnits = {
    fAndFp: demoUnitFrame({
      svg: functionDerivativeDiagrams.cubic,
      caption: 'f(x) = x&#179; above, f&#8242;(x) = 3x&#178; below',
      text: 'Wherever the cubic rises its derivative sits above the axis, and at x = 0, where the cubic flattens for an instant, the derivative touches zero without crossing: the graph of f&#8242; is read off the slopes of f. At the marker, x = 1, the cubic has slope 3 and the parabola has height 3. Slide the marker and watch height below follow slope above on the',
      href: '/calculus/visual-tools/derivative',
      linkText: 'derivative explorer',
    }),
    shiftFamily: demoUnitFrame({
      svg: renderFunctionPlotV4(fpShiftFamily),
      caption: 'One derivative, many functions',
      text: 'The section&#8217;s x&#178; and x&#178; + 5 idea with three curves: x&#178; + 3, x&#178; and x&#178; &#8722; 2. Each is the others moved up or down, so at any x they all have the same slope. At x = 1.5 the three dashed tangents are parallel, each with slope 3, and everywhere the derivative is 2x. Reading f from f&#8242; recovers this shape, but which of the curves is f needs one known value.',
    }),
  };

  const smoothNest = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'How smooth is the derivative?',
    preface: 'Functions sort into classes by how well their derivatives behave. Each class sits inside the one around it.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Differentiable is not the same as C¹',
    conclusion: 'A derivative can exist everywhere and still be discontinuous, as $x^2 \\sin(1/x)$ shows; by Darboux\'s theorem it can never have a jump.',
    levels: [
      { id: 'cinf', symbol: 'C∞', name: '[Smooth](!/calculus/derivatives/higher-order)', note: 'all higher derivatives exist and are continuous' },
      { id: 'c1', symbol: 'C¹', name: 'Continuously differentiable', note: '$f\'$ exists and is continuous', example: 'polynomials, sin x, eˣ' },
      { id: 'd', symbol: 'D', name: '[Differentiable](!/calculus/derivatives/differentiability)', note: '$f\'$ exists everywhere but may be discontinuous', example: 'x² sin(1/x), f(0) = 0' },
      { id: 'c0', symbol: 'C⁰', name: '[Continuous](!/calculus/limits/continuity)', note: '$f\'$ may not exist', example: '|x|' },
    ],
  };

  return {
  props: {
    smoothNest,
    demoUnits,
    sectionsContent,
    introContent,
    obj6Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Derivatives as Functions: Graphing & Properties | Learn Math Class",
      description: "Understand the derivative as a function f'(x): definition, graphing f' from f and vice versa, rate of change interpretation, and continuity properties including Darboux's theorem.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/function",
      name: "Derivatives as Functions"
    },
  }
}
   }

export default function PageTemplate({smoothNest, seoData, sectionsContent, introContent, obj6Table, obj7Table, summaryTable, faqQuestions, schemas, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
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
                  <div key={'unit-fAndFp'} dangerouslySetInnerHTML={{ __html: demoUnits.fAndFp }} />,
          `The reverse reading, from f&#8242; back to f, uses the same dictionary in the other direction.`,
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
          <div key={'unit-shiftFamily'} dangerouslySetInnerHTML={{ __html: demoUnits.shiftFamily }} />,
          `Knowing f(0) = 3 would single out x² + 3 from the whole family.`,
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
          <div key={'obj6-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj6Table }} />,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'obj7-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj7Table }} />,
          <DiagramFrame
            key={'obj7-diagram'}
            id="derivative-continuity-nesting"
            title="Classes of functions by their derivative"
            source="/calculus/derivatives/function"
          >
            <NestedContainment data={smoothNest} />
          </DiagramFrame>,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Derivative Function FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Derivatives as Functions</h1>
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