// tables-optimized: v4 | 2026-05-24 | 4 tables (obj6 comparison, obj7 comparison, obj10 aggregation, overview summary capstone)

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


export async function getStaticProps(){
const keyWords = [
  "graph analysis derivatives",
  "first derivative test",
  "second derivative test",
  "critical points calculus",
  "concavity",
  "inflection points",
  "increasing decreasing functions",
  "curve sketching",
  "optimization calculus",
  "related rates",
  "local maximum minimum",
  "tangent line equation",
  "extrema derivatives",
  "concave up concave down"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj6 — comparison: first vs second derivative test
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Test</th>
      <th style="${tableHeaders.comparison}">When applicable</th>
      <th style="${tableHeaders.comparison}">How it works</th>
      <th style="${tableHeaders.comparison}">Verdict at c</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">First derivative test</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f continuous at c (works even if f&apos;(c) does not exist)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">examine the sign of f&apos; immediately to the left and right of c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">+ → −: local maximum;&nbsp; − → +: local minimum;&nbsp; no sign change: neither</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Second derivative test</td>
      <td style="padding: 12px 15px; color: #34495e;">f&apos;(c) = 0 and f&apos;&apos;(c) exists</td>
      <td style="padding: 12px 15px; color: #34495e;">evaluate the sign of f&apos;&apos;(c)</td>
      <td style="padding: 12px 15px; color: #34495e;">f&apos;&apos;(c) &gt; 0: local minimum;&nbsp; f&apos;&apos;(c) &lt; 0: local maximum;&nbsp; f&apos;&apos;(c) = 0: inconclusive</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — comparison: 4 sign combinations of f' and f''
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison} text-align: center;">Sign of f&apos;</th>
      <th style="${tableHeaders.comparison} text-align: center;">Sign of f&apos;&apos;</th>
      <th style="${tableHeaders.comparison}">What f does on the interval</th>
      <th style="${tableHeaders.comparison}">Visual picture</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing and concave up</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rising with slope getting steeper</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing and concave down</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rising but flattening — like a thrown ball approaching its peak</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing and concave up</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">falling but flattening — approaching a local minimum from the left</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">−</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">−</td>
      <td style="padding: 12px 15px; color: #34495e;">decreasing and concave down</td>
      <td style="padding: 12px 15px; color: #34495e;">falling with slope getting more negative</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — aggregation/process: optimization workflow
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">identify the quantity to optimize</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">names the objective the derivative will be taken of</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">express it as a function of a single variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constraints are used here to eliminate extra variables</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">determine the feasible domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">physical or geometric meaning restricts where the variable can live</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find the critical points inside that domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">candidates for the extremum come from f&apos;(x) = 0 or f&apos;(x) undefined</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">compare values at critical points and at the endpoints</td>
      <td style="padding: 12px 15px; color: #34495e;">on a closed interval, the Extreme Value Theorem guarantees the maximum and minimum lie among these</td>
    </tr>
  </tbody>
</table>
`

  // overview — summary capstone: master reference of derivative tools
  const overviewTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Tool</th>
      <th style="${tableHeaders.summary}">What it reveals</th>
      <th style="${tableHeaders.summary}">Derivative information needed</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Value of f&apos;(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">slope and direction of f at the single point (a, f(a))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">first derivative evaluated at a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Tangent line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">best linear approximation to f near x = a:&nbsp; y − f(a) = f&apos;(a)(x − a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">first derivative evaluated at a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign of f&apos;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intervals where f is increasing or decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">first derivative across each interval</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Critical points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">candidates for local extrema (must be tested further)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solutions of f&apos;(x) = 0 plus points where f&apos; is undefined</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">First derivative test</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">classifies a critical point as max, min, or neither</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign of f&apos; on each side of the critical point</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Second derivative test</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">faster classification when f&apos;&apos; is available and nonzero</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value of f&apos;&apos;(c) at a critical point with f&apos;(c) = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign of f&apos;&apos;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intervals of concave up or concave down behavior</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">second derivative across each interval</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inflection points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">points where concavity reverses</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;&apos;(x) = 0 or undefined, plus a sign change of f&apos;&apos; across the point</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Curve sketching</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a complete qualitative picture: monotonicity, extrema, concavity, asymptotes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos; and f&apos;&apos; combined with domain, intercepts, and end behavior</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Optimization</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absolute maximum or minimum on a domain or under a constraint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">critical points of the objective function, plus endpoint values</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Related rates</td>
      <td style="padding: 12px 15px; color: #34495e;">how an unknown rate of change depends on known rates of related quantities</td>
      <td style="padding: 12px 15px; color: #34495e;">implicit differentiation of a constraint equation with respect to time</td>
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

//   const sectionsContent = {
//   // ─── /calculus/derivatives/graph-analysis ─────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// ## First Derivative

// - [Tangent Line](!/calculus/definitions#tangent_line) — line through $(a, f(a))$ with slope $f'(a)$
// - [Critical Point](!/calculus/definitions#critical_point) — where $f' = 0$ or $f'$ is undefined
// - [Local Extremum](!/calculus/definitions#local_extremum) — local maximum or minimum at a critical point
// - [Monotonic Function](!/calculus/definitions#monotonic_function) — $f' > 0$ means increasing, $f' < 0$ means decreasing

// ## Second Derivative

// - [Concavity](!/calculus/definitions#concavity) — $f'' > 0$ concave up, $f'' < 0$ concave down
// - [Inflection Point](!/calculus/definitions#inflection_point) — where concavity reverses`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `The Derivative at a Point`,
//     content: `
// The value $f'(a)$ is a number—the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. A positive value means the function is increasing at that instant. A negative value means it is decreasing. A value of zero means the graph is momentarily flat.

// The magnitude $|f'(a)|$ measures steepness. A derivative of $10$ at a point means the function is climbing steeply; a derivative of $0.01$ means it is nearly flat. The sign gives direction; the size gives intensity.

// At points where $f'(a)$ does not exist—corners, cusps, vertical tangents, or discontinuities—the function has no well-defined instantaneous rate of change. These points require separate treatment under [differentiability](!/calculus/derivatives/differentiability).
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Tangent Lines`,
//     content: `
// The tangent line to $f$ at $x = a$ passes through $(a, f(a))$ with slope $f'(a)$. Its equation in point-slope form is:

// $$y - f(a) = f'(a)(x - a)$$

// This line is the best linear approximation to $f$ near $x = a$. For values of $x$ close to $a$, the tangent line and the curve are nearly indistinguishable. This is the geometric foundation of [linear approximation](!/calculus/derivatives/differentials).

// The normal line at the same point is perpendicular to the tangent. If $f'(a) \\neq 0$, its slope is $-1/f'(a)$. If $f'(a) = 0$, the tangent is horizontal and the normal is vertical.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Increasing and Decreasing Functions`,
//     content: `
// The sign of $f'$ on an interval determines the direction of $f$ on that interval.

// If $f'(x) > 0$ for all $x$ in an open interval $(a, b)$, then $f$ is strictly increasing on $(a, b)$: larger inputs produce larger outputs. If $f'(x) < 0$ on $(a, b)$, then $f$ is strictly decreasing: larger inputs produce smaller outputs.

// The proof relies on the [Mean Value Theorem](!/calculus/derivatives/rules). For any two points $x_1 < x_2$ in $(a, b)$, there exists $c$ between them with $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. If $f'(c) > 0$ and $x_2 - x_1 > 0$, then $f(x_2) - f(x_1) > 0$, confirming $f$ is increasing.

// To find where a function increases or decreases: solve $f'(x) = 0$ and identify where $f'$ is undefined, then test the sign of $f'$ in each resulting interval.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Critical Points`,
//     content: `
// A critical point of $f$ is a value $x = c$ in the domain of $f$ where either $f'(c) = 0$ or $f'(c)$ does not exist.

// Critical points are the only candidates for local extrema. If $f$ has a local maximum or minimum at $c$, then $c$ must be a critical point. This is Fermat's theorem: a local extremum at an interior point requires the derivative to vanish or fail to exist.

// The converse is false. The function $f(x) = x^3$ has $f'(0) = 0$, so $x = 0$ is a critical point, but $f$ has no extremum there—it increases through the origin. A critical point is a candidate that must be tested further.

// Finding critical points is the first step in any extremum or optimization problem. The subsequent tests—first derivative test and second derivative test—classify what happens at each candidate.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `The First Derivative Test`,
//     content: `
// The first derivative test classifies a critical point $c$ by examining how $f'$ changes sign around it.

// If $f'$ changes from positive to negative at $c$—the function rises then falls—then $f$ has a local maximum at $c$. If $f'$ changes from negative to positive—the function falls then rises—then $f$ has a local minimum at $c$. If $f'$ does not change sign—positive on both sides or negative on both sides—then $c$ is neither a maximum nor a minimum.

// The test works even when $f'(c)$ does not exist, as long as $f$ is continuous at $c$. It requires checking the sign of $f'$ in an interval immediately to the left and immediately to the right of $c$. No information about $f''$ is needed, making this test universally applicable among derivative-based classification methods.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `The Second Derivative Test`,
//     content: `
// When $f'(c) = 0$ and $f''(c)$ exists, the second derivative test provides a quicker classification.

// If $f''(c) > 0$, the graph is concave up at $c$, and the horizontal tangent sits at the bottom of a cup: $f$ has a local minimum at $c$. If $f''(c) < 0$, the graph is concave down, and the horizontal tangent sits at the top of a cap: $f$ has a local maximum at $c$.

// If $f''(c) = 0$, the test is inconclusive. The point might be an extremum or an inflection point—further analysis is required. In this case, fall back to the first derivative test or examine [higher-order derivatives](!/calculus/derivatives/higher-order).

// The second derivative test is faster than the first derivative test when $f''$ is easy to compute, but it cannot handle critical points where $f'$ does not exist. The table below sets the two tests side by side across their hypotheses, mechanics, and verdicts.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Concavity`,
//     content: `
// Concavity describes how the slope of $f$ changes, not whether the function rises or falls but how it bends while doing so.

// If $f''(x) > 0$ on an interval, the derivative $f'$ is increasing there: the slope gets steeper (or less negative). The graph bends upward—concave up. Visually, the curve lies above its tangent lines.

// If $f''(x) < 0$ on an interval, the derivative $f'$ is decreasing: the slope gets less steep (or more negative). The graph bends downward—concave down. The curve lies below its tangent lines.

// A function can be increasing and concave down simultaneously—rising but decelerating, like a ball thrown upward before reaching its peak. Concavity and direction are independent properties controlled by $f''$ and $f'$ respectively. The four sign combinations of $f'$ and $f''$ produce four qualitatively distinct shapes, collected in the table below alongside the visual picture each one produces.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Inflection Points`,
//     content: `
// An inflection point is a point where the concavity of $f$ changes—from concave up to concave down, or the reverse.

// At an inflection point, $f''$ must either equal zero or fail to exist. However, $f''(c) = 0$ alone does not guarantee an inflection point. The function $f(x) = x^4$ has $f''(0) = 0$, but the concavity does not change at $x = 0$—the graph is concave up on both sides. The sign of $f''$ must actually switch across the point.

// To locate inflection points: find where $f''(x) = 0$ or $f''$ is undefined, then verify that $f''$ changes sign. On the graph of $f'$, inflection points of $f$ correspond to local extrema of $f'$—the slope of $f$ reaches a peak or trough and reverses direction.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Curve Sketching`,
//     content: `
// Curve sketching assembles all derivative information into a complete picture of a function's graph.

// The process begins with preliminary analysis: domain, intercepts, symmetry (even, odd, periodic), and asymptotes. Vertical asymptotes arise where the function is undefined; horizontal asymptotes come from [limits at infinity](!/calculus/limits/infinity).

// First derivative analysis determines where $f$ increases and decreases, and locates all local extrema. Second derivative analysis determines concavity intervals and inflection points. End behavior—the function's direction as $x \\to \\pm\\infty$—frames the overall shape.

// Combining these elements produces a qualitative sketch without plotting individual points. The derivative framework reveals structure that pointwise computation alone would miss: a function might appear flat in a table of values while the derivatives expose a subtle extremum nearby.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj10: {
//     title: `Optimization`,
//     content: `
// Optimization finds the absolute maximum or minimum value of a function, often on a specified interval or subject to constraints.

// On a closed interval $[a, b]$, the Extreme Value Theorem guarantees that a continuous function attains both an absolute maximum and an absolute minimum. The candidates are the critical points inside $(a, b)$ and the endpoints $a$ and $b$. Evaluate $f$ at each candidate; the largest value is the absolute maximum, the smallest is the absolute minimum.

// Applied optimization problems translate a real scenario into a function of one variable. The steps are: identify the quantity to optimize, express it as a function of a single variable, determine the feasible domain, find critical points within that domain, and compare values at critical points and endpoints.

// The derivative identifies candidates; the context determines which candidate solves the problem. Checking that a critical point is actually a maximum (or minimum) rather than merely a critical point is an essential final step. The table below collects this procedure as a five-step recipe.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj11: {
//     title: `Related Rates`,
//     content: `
// Related rates problems involve two or more quantities that change simultaneously with respect to a common variable, usually time $t$. A known rate of change in one quantity determines an unknown rate of change in another, connected through an equation.

// The method uses [implicit differentiation](!/calculus/derivatives/techniques) with respect to $t$. Start with an equation relating the variables—geometric, physical, or algebraic. Differentiate both sides with respect to $t$, applying the chain rule to every variable that depends on $t$. Substitute known values and known rates, then solve for the unknown rate.

// Setting up the relationship correctly is the critical step. The equation must hold at all times, not just at the particular instant in question. Constants can be substituted only after differentiation—replacing a variable with a fixed value before differentiating eliminates its rate of change from the equation.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   overview: {
//     title: `The Full Derivative Toolkit at a Glance`,
//     content: `
// Every section above introduced a separate way the first or second derivative answers a question about the graph of f — direction, steepness, extrema, concavity, inflection, sketching, optimization, related rates. The table below lays them all out side by side: each tool, the geometric or applied question it settles, and the specific derivative information it needs.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// formulas-optimized: v1 | 2026-06-09 | 9 callouts (obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj10)
const sectionsContent = {
  // ─── /calculus/derivatives/graph-analysis ─────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
## First Derivative

- [Tangent Line](!/calculus/definitions#tangent_line) — line through $(a, f(a))$ with slope $f'(a)$
- [Critical Point](!/calculus/definitions#critical_point) — where $f' = 0$ or $f'$ is undefined
- [Local Extremum](!/calculus/definitions#local_extremum) — local maximum or minimum at a critical point
- [Monotonic Function](!/calculus/definitions#monotonic_function) — $f' > 0$ means increasing, $f' < 0$ means decreasing

## Second Derivative

- [Concavity](!/calculus/definitions#concavity) — $f'' > 0$ concave up, $f'' < 0$ concave down
- [Inflection Point](!/calculus/definitions#inflection_point) — where concavity reverses`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Derivative at a Point`,
    content: `
The value $f'(a)$ is a number—the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. A positive value means the function is increasing at that instant. A negative value means it is decreasing. A value of zero means the graph is momentarily flat.

The magnitude $|f'(a)|$ measures steepness. A derivative of $10$ at a point means the function is climbing steeply; a derivative of $0.01$ means it is nearly flat. The sign gives direction; the size gives intensity.

At points where $f'(a)$ does not exist—corners, cusps, vertical tangents, or discontinuities—the function has no well-defined instantaneous rate of change. These points require separate treatment under [differentiability](!/calculus/derivatives/differentiability).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Tangent Lines`,
    content: `
The tangent line to $f$ at $x = a$ passes through $(a, f(a))$ with slope $f'(a)$. Its equation in point-slope form is:

@academic[formula_callout:Tangent Line Equation
$$y - f(a) = f'(a)(x - a) \\qquad y = f(a) + f'(a)(x - a)$$
/calculus/derivatives/formulas#tangent_line_equation]@

This line is the best linear approximation to $f$ near $x = a$. For values of $x$ close to $a$, the tangent line and the curve are nearly indistinguishable. This is the geometric foundation of [linear approximation](!/calculus/derivatives/differentials).

The normal line at the same point is perpendicular to the tangent. If $f'(a) \\neq 0$, its slope is $-1/f'(a)$. If $f'(a) = 0$, the tangent is horizontal and the normal is vertical.

@academic[formula_callout:Normal Line Equation
$$y - f(a) = -\\frac{1}{f'(a)}(x - a)$$
/calculus/derivatives/formulas#normal_line_equation]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Increasing and Decreasing Functions`,
    content: `
The sign of $f'$ on an interval determines the direction of $f$ on that interval.

If $f'(x) > 0$ for all $x$ in an open interval $(a, b)$, then $f$ is strictly increasing on $(a, b)$: larger inputs produce larger outputs. If $f'(x) < 0$ on $(a, b)$, then $f$ is strictly decreasing: larger inputs produce smaller outputs.

@academic[formula_callout:Sign of First Derivative
$$f'(x) > 0 \\implies f \\text{ increasing}, \\quad f'(x) < 0 \\implies f \\text{ decreasing}$$
/calculus/derivatives/formulas#sign_of_first_derivative]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

The proof relies on the [Mean Value Theorem](!/calculus/derivatives/rules). For any two points $x_1 < x_2$ in $(a, b)$, there exists $c$ between them with $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. If $f'(c) > 0$ and $x_2 - x_1 > 0$, then $f(x_2) - f(x_1) > 0$, confirming $f$ is increasing.

To find where a function increases or decreases: solve $f'(x) = 0$ and identify where $f'$ is undefined, then test the sign of $f'$ in each resulting interval.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Critical Points`,
    content: `
A critical point of $f$ is a value $x = c$ in the domain of $f$ where either $f'(c) = 0$ or $f'(c)$ does not exist.

@academic[formula_callout:Critical Point Condition
$$f'(c) = 0 \\quad \\text{or} \\quad f'(c) \\text{ undefined}$$
/calculus/derivatives/formulas#critical_point_condition]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

Critical points are the only candidates for local extrema. If $f$ has a local maximum or minimum at $c$, then $c$ must be a critical point. This is Fermat's theorem: a local extremum at an interior point requires the derivative to vanish or fail to exist.

The converse is false. The function $f(x) = x^3$ has $f'(0) = 0$, so $x = 0$ is a critical point, but $f$ has no extremum there—it increases through the origin. A critical point is a candidate that must be tested further.

Finding critical points is the first step in any extremum or optimization problem. The subsequent tests—first derivative test and second derivative test—classify what happens at each candidate.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The First Derivative Test`,
    content: `
The first derivative test classifies a critical point $c$ by examining how $f'$ changes sign around it.

If $f'$ changes from positive to negative at $c$—the function rises then falls—then $f$ has a local maximum at $c$. If $f'$ changes from negative to positive—the function falls then rises—then $f$ has a local minimum at $c$. If $f'$ does not change sign—positive on both sides or negative on both sides—then $c$ is neither a maximum nor a minimum.

@academic[formula_callout:First Derivative Test
$$f'(x) \\text{ changes } + \\to - \\text{ at } c \\implies c \\text{ is a local max}$$
$$f'(x) \\text{ changes } - \\to + \\text{ at } c \\implies c \\text{ is a local min}$$
/calculus/derivatives/formulas#first_derivative_test]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

The test works even when $f'(c)$ does not exist, as long as $f$ is continuous at $c$. It requires checking the sign of $f'$ in an interval immediately to the left and immediately to the right of $c$. No information about $f''$ is needed, making this test universally applicable among derivative-based classification methods.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `The Second Derivative Test`,
    content: `
When $f'(c) = 0$ and $f''(c)$ exists, the second derivative test provides a quicker classification.

If $f''(c) > 0$, the graph is concave up at $c$, and the horizontal tangent sits at the bottom of a cup: $f$ has a local minimum at $c$. If $f''(c) < 0$, the graph is concave down, and the horizontal tangent sits at the top of a cap: $f$ has a local maximum at $c$.

@academic[formula_callout:Second Derivative Test
$$f'(c) = 0, \\; f''(c) > 0 \\implies c \\text{ is a local min}$$
$$f'(c) = 0, \\; f''(c) < 0 \\implies c \\text{ is a local max}$$
/calculus/derivatives/formulas#second_derivative_test]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

If $f''(c) = 0$, the test is inconclusive. The point might be an extremum or an inflection point—further analysis is required. In this case, fall back to the first derivative test or examine [higher-order derivatives](!/calculus/derivatives/higher-order).

The second derivative test is faster than the first derivative test when $f''$ is easy to compute, but it cannot handle critical points where $f'$ does not exist. The table below sets the two tests side by side across their hypotheses, mechanics, and verdicts.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Concavity`,
    content: `
Concavity describes how the slope of $f$ changes, not whether the function rises or falls but how it bends while doing so.

If $f''(x) > 0$ on an interval, the derivative $f'$ is increasing there: the slope gets steeper (or less negative). The graph bends upward—concave up. Visually, the curve lies above its tangent lines.

If $f''(x) < 0$ on an interval, the derivative $f'$ is decreasing: the slope gets less steep (or more negative). The graph bends downward—concave down. The curve lies below its tangent lines.

@academic[formula_callout:Concavity from Second Derivative
$$f''(x) > 0 \\implies f \\text{ concave up}, \\quad f''(x) < 0 \\implies f \\text{ concave down}$$
/calculus/derivatives/formulas#concavity_from_second_derivative]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

A function can be increasing and concave down simultaneously—rising but decelerating, like a ball thrown upward before reaching its peak. Concavity and direction are independent properties controlled by $f''$ and $f'$ respectively. The four sign combinations of $f'$ and $f''$ produce four qualitatively distinct shapes, collected in the table below alongside the visual picture each one produces.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Inflection Points`,
    content: `
An inflection point is a point where the concavity of $f$ changes—from concave up to concave down, or the reverse.

@academic[formula_callout:Inflection Point Condition
$$f''(c) = 0 \\text{ or undefined}, \\text{ and } f''(x) \\text{ changes sign at } c$$
/calculus/derivatives/formulas#inflection_point_condition]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

At an inflection point, $f''$ must either equal zero or fail to exist. However, $f''(c) = 0$ alone does not guarantee an inflection point. The function $f(x) = x^4$ has $f''(0) = 0$, but the concavity does not change at $x = 0$—the graph is concave up on both sides. The sign of $f''$ must actually switch across the point.

To locate inflection points: find where $f''(x) = 0$ or $f''$ is undefined, then verify that $f''$ changes sign. On the graph of $f'$, inflection points of $f$ correspond to local extrema of $f'$—the slope of $f$ reaches a peak or trough and reverses direction.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Curve Sketching`,
    content: `
Curve sketching assembles all derivative information into a complete picture of a function's graph.

The process begins with preliminary analysis: domain, intercepts, symmetry (even, odd, periodic), and asymptotes. Vertical asymptotes arise where the function is undefined; horizontal asymptotes come from [limits at infinity](!/calculus/limits/infinity).

First derivative analysis determines where $f$ increases and decreases, and locates all local extrema. Second derivative analysis determines concavity intervals and inflection points. End behavior—the function's direction as $x \\to \\pm\\infty$—frames the overall shape.

Combining these elements produces a qualitative sketch without plotting individual points. The derivative framework reveals structure that pointwise computation alone would miss: a function might appear flat in a table of values while the derivatives expose a subtle extremum nearby.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Optimization`,
    content: `
Optimization finds the absolute maximum or minimum value of a function, often on a specified interval or subject to constraints.

On a closed interval $[a, b]$, the Extreme Value Theorem guarantees that a continuous function attains both an absolute maximum and an absolute minimum. The candidates are the critical points inside $(a, b)$ and the endpoints $a$ and $b$. Evaluate $f$ at each candidate; the largest value is the absolute maximum, the smallest is the absolute minimum.

@academic[formula_callout:Extreme Value Theorem
$$f \\text{ continuous on } [a, b] \\implies f \\text{ attains a max and min on } [a, b]$$
/calculus/derivatives/formulas#extreme_value_theorem]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

Applied optimization problems translate a real scenario into a function of one variable. The steps are: identify the quantity to optimize, express it as a function of a single variable, determine the feasible domain, find critical points within that domain, and compare values at critical points and endpoints.

The derivative identifies candidates; the context determines which candidate solves the problem. Checking that a critical point is actually a maximum (or minimum) rather than merely a critical point is an essential final step. The table below collects this procedure as a five-step recipe.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Related Rates`,
    content: `
Related rates problems involve two or more quantities that change simultaneously with respect to a common variable, usually time $t$. A known rate of change in one quantity determines an unknown rate of change in another, connected through an equation.

The method uses [implicit differentiation](!/calculus/derivatives/techniques) with respect to $t$. Start with an equation relating the variables—geometric, physical, or algebraic. Differentiate both sides with respect to $t$, applying the chain rule to every variable that depends on $t$. Substitute known values and known rates, then solve for the unknown rate.

Setting up the relationship correctly is the critical step. The equation must hold at all times, not just at the particular instant in question. Constants can be substituted only after differentiation—replacing a variable with a fixed value before differentiating eliminates its rate of change from the equation.
`,
    before: ``,
    after: ``,
    link: '',
  },
  overview: {
    title: `The Full Derivative Toolkit at a Glance`,
    content: `
Every section above introduced a separate way the first or second derivative answers a question about the graph of f — direction, steepness, extrema, concavity, inflection, sketching, optimization, related rates. The table below lays them all out side by side: each tool, the geometric or applied question it settles, and the specific derivative information it needs.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `Reading Functions Through Their Derivatives`,
  content: `
A function's graph carries information about direction, curvature, turning points, and long-run behavior. The derivative extracts this information systematically. Where the derivative is positive, the function rises. Where it is negative, the function falls. Where it equals zero, something potentially interesting happens—a peak, a valley, or a momentary pause.

The second derivative adds depth. It determines whether the graph bends upward or downward, distinguishing between a function that accelerates and one that decelerates. Together, the first and second derivatives provide a complete toolkit for analyzing the shape of any differentiable function.

This page develops the full framework: from the derivative at a single point through tangent lines, monotonicity, extrema, concavity, inflection points, curve sketching, optimization, and related rates.
`
};



const faqQuestions = {
  obj1: {
    question: "What does the derivative at a point tell you?",
    answer: "The value f'(a) gives the slope of the tangent line at (a, f(a)). Positive means the function is increasing at that instant; negative means decreasing; zero means momentarily flat. The magnitude |f'(a)| measures steepness.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the equation of a tangent line?",
    answer: "The tangent line to f at x = a has equation y − f(a) = f'(a)(x − a). It passes through (a, f(a)) with slope f'(a). This line is the best linear approximation to f near x = a.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find where a function is increasing or decreasing?",
    answer: "If f'(x) > 0 on an interval, f is strictly increasing there. If f'(x) < 0, f is strictly decreasing. Find where f'(x) = 0 or is undefined, then test the sign of f' in each resulting interval.",
    sectionId: "3"
  },
  obj4: {
    question: "What is a critical point?",
    answer: "A critical point is a value x = c in the domain of f where f'(c) = 0 or f'(c) does not exist. Critical points are the only candidates for local extrema. However, not every critical point is an extremum.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the first derivative test?",
    answer: "The first derivative test classifies critical points by sign changes. If f' changes from positive to negative at c, f has a local maximum. If f' changes from negative to positive, f has a local minimum. No sign change means no extremum.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the second derivative test?",
    answer: "When f'(c) = 0: if f''(c) > 0, f has a local minimum (concave up); if f''(c) < 0, f has a local maximum (concave down). If f''(c) = 0, the test is inconclusive—use the first derivative test instead.",
    sectionId: "6"
  },
  obj7: {
    question: "What is concavity?",
    answer: "Concavity describes how f bends. If f''(x) > 0, the graph is concave up—slopes are increasing and the curve lies above its tangent lines. If f''(x) < 0, the graph is concave down—slopes are decreasing.",
    sectionId: "7"
  },
  obj8: {
    question: "What is an inflection point?",
    answer: "An inflection point is where concavity changes—from concave up to concave down or vice versa. At such points, f'' must equal zero or be undefined, and f'' must actually change sign across the point.",
    sectionId: "8"
  },
  obj9: {
    question: "What is curve sketching?",
    answer: "Curve sketching combines derivative analysis to graph a function: find domain, intercepts, asymptotes; use f' to determine increasing/decreasing intervals and extrema; use f'' to determine concavity and inflection points; analyze end behavior.",
    sectionId: "9"
  },
  obj10: {
    question: "How do you solve optimization problems?",
    answer: "On a closed interval, evaluate f at all critical points and endpoints—the largest value is the absolute maximum, smallest is the absolute minimum. For applied problems, express the quantity to optimize as a function of one variable first.",
    sectionId: "10"
  },
  obj11: {
    question: "What are related rates problems?",
    answer: "Related rates involve quantities changing simultaneously with respect to time. Write an equation relating the variables, differentiate implicitly with respect to t, substitute known values and rates, then solve for the unknown rate.",
    sectionId: "11"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Graph Analysis with Derivatives",
    "description": "Complete guide to analyzing graphs with derivatives: critical points, first and second derivative tests, concavity, inflection points, curve sketching, optimization, and related rates.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/graph-analysis",
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
      "name": "Graph Analysis with Derivatives"
    },
    "teaches": [
      "Tangent lines and derivative at a point",
      "Increasing and decreasing functions",
      "Critical points and extrema tests",
      "Concavity and inflection points",
      "Curve sketching techniques",
      "Optimization and related rates"
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
        "name": "Graph Analysis with Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/graph-analysis"
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

  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Graph Analyzis with Derivatives | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/graph-analysis",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props: {
    sectionsContent,
    introContent,
    obj6Table,
    obj7Table,
    obj10Table,
    overviewTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Graph Analysis with Derivatives: Extrema & Curves | Learn Math Class",
      description: "Complete guide to analyzing graphs with derivatives: critical points, first and second derivative tests, concavity, inflection points, curve sketching, optimization, and related rates.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/graph-analysis",
      name: "Graph Analysis with Derivatives"
    },
  }
}
   }
export default function PageTemplate({
  seoData,
  sectionsContent,
  introContent,
  obj6Table,
  obj7Table,
  obj10Table,
  overviewTable,
  faqQuestions,
  schemas
}) {

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
          <div key={'obj6-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj6Table}}/>,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'obj7-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj7Table}}/>,
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
          <div key={'obj10-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj10Table}}/>,
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
        id:'overview',
        title:sectionsContent.overview.title,
        link:sectionsContent.overview.link,
        content:[
          sectionsContent.overview.content,
          <div key={'overview-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: overviewTable}}/>,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Graph Analyzis with Derivatives</h1>
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