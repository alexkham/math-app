// tables-optimized: v4 | 2026-05-24 | 3 tables (obj4 aggregation, obj7 aggregation, obj8 summary capstone)

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
  "special derivatives",
  "inverse trigonometric derivatives",
  "arcsin derivative",
  "arctan derivative",
  "hyperbolic function derivatives",
  "inverse hyperbolic derivatives",
  "piecewise function derivative",
  "arcsecant derivative",
  "sinh cosh derivative",
  "derivative arccos",
  "tanh derivative",
  "derivative formulas calculus",
  "inverse trig differentiation",
  "special derivative formulas"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation: three algebraic forms shared by cofunction pairs
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Algebraic form (magnitude)</th>
      <th style="${tableHeaders.aggregation}">Cofunction pair</th>
      <th style="${tableHeaders.aggregation}">Why they share the same magnitude</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ √(1 − x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x&nbsp; ↔&nbsp; arccos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x + arccos x = π ⁄ 2, so the two derivatives sum to zero</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ (1 + x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan x&nbsp; ↔&nbsp; arccot x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan x + arccot x = π ⁄ 2, so the two derivatives sum to zero</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 ⁄ (|x| √(x<sup>2</sup> − 1))</td>
      <td style="padding: 12px 15px; color: #34495e;">arcsec x&nbsp; ↔&nbsp; arccsc x</td>
      <td style="padding: 12px 15px; color: #34495e;">arcsec x + arccsc x = π ⁄ 2, so the two derivatives sum to zero</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation: piecewise differentiability at a boundary
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Condition at boundary x = c</th>
      <th style="${tableHeaders.aggregation}">What it requires</th>
      <th style="${tableHeaders.aggregation}">Failure mode if violated</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Continuity at c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the two pieces meet: the left and right values both equal f(c)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">jump discontinuity — no tangent line possible</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">One-sided derivatives exist</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both the left-hand and right-hand derivatives at c are finite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical tangent or cusp — slope is infinite or undefined on one side</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">One-sided derivatives agree</td>
      <td style="padding: 12px 15px; color: #34495e;">left derivative at c equals right derivative at c</td>
      <td style="padding: 12px 15px; color: #34495e;">corner — e.g., |x| at 0, where the slopes are −1 and +1</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: master reference of 15 special derivatives
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Category</th>
      <th style="${tableHeaders.summary}">Function</th>
      <th style="${tableHeaders.summary}">Derivative</th>
      <th style="${tableHeaders.summary}">Domain</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ √(1 − x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x| &lt; 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1 ⁄ √(1 − x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x| &lt; 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (1 + x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccot x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1 ⁄ (1 + x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsec x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (|x| √(x<sup>2</sup> − 1))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x| &gt; 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccsc x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1 ⁄ (|x| √(x<sup>2</sup> − 1))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x| &gt; 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sinh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cosh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cosh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sinh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tanh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sech<sup>2</sup> x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">coth x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−csch<sup>2</sup> x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sech x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−sech x · tanh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">csch x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−csch x · coth x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsinh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ √(x<sup>2</sup> + 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse hyperbolic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccosh x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ √(x<sup>2</sup> − 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x &gt; 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Inverse hyperbolic</td>
      <td style="padding: 12px 15px; color: #34495e;">arctanh x</td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ (1 − x<sup>2</sup>)</td>
      <td style="padding: 12px 15px; color: #34495e;">|x| &lt; 1</td>
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
//   // ─── /calculus/derivatives/special ────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Derivative](!/calculus/definitions#derivative) — the formulas here extend the common derivatives to inverse trig, hyperbolic, and piecewise functions
// - [Differentiability](!/calculus/definitions#differentiability) — piecewise functions require boundary checks`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Inverse Trigonometric Functions — Arcsine and Arccosine`,
//     content: `
// The derivatives of $\\arcsin x$ and $\\arccos x$ are:

// $$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}} \\qquad |x| < 1$$

// $$\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1 - x^2}} \\qquad |x| < 1$$

// The two derivatives differ only by sign. This follows from the identity $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$: differentiating both sides gives $(\\arcsin x)' + (\\arccos x)' = 0$.

// To derive the arcsine formula: let $y = \\arcsin x$, so $\\sin y = x$ with $y \\in [-\\pi/2, \\pi/2]$. Differentiating implicitly: $\\cos y \\cdot \\frac{dy}{dx} = 1$. Since $y$ lies in the first or fourth quadrant, $\\cos y \\geq 0$, so $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$. Solving gives $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^2}}$.

// The domain restriction $|x| < 1$ reflects the range of $\\sin y$ on $[-\\pi/2, \\pi/2]$. At $x = \\pm 1$, the denominator vanishes—the graph of $\\arcsin x$ has vertical tangents at its endpoints.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Inverse Trigonometric Functions — Arctangent and Arccotangent`,
//     content: `
// $$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2} \\qquad \\qquad \\frac{d}{dx}[\\text{arccot}\\, x] = -\\frac{1}{1 + x^2}$$

// Again the derivatives are negatives of each other, following from $\\arctan x + \\text{arccot}\\, x = \\frac{\\pi}{2}$.

// To derive the arctangent formula: let $y = \\arctan x$, so $\\tan y = x$. Differentiating: $\\sec^2 y \\cdot \\frac{dy}{dx} = 1$. Using the identity $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$ gives $\\frac{dy}{dx} = \\frac{1}{1 + x^2}$.

// Unlike arcsine and arccosine, arctangent is defined for all real $x$—no domain restriction. The derivative $\\frac{1}{1 + x^2}$ is always positive, confirming that $\\arctan x$ is strictly increasing. As $x \\to \\pm\\infty$, the derivative approaches zero, reflecting the horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$. The function rises everywhere but flattens out at the extremes.

// This derivative appears prominently in [integration](!/calculus/integrals/special): $\\int \\frac{1}{1 + x^2}\\,dx = \\arctan x + C$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Inverse Trigonometric Functions — Arcsecant and Arccosecant`,
//     content: `
// $$\\frac{d}{dx}[\\text{arcsec}\\, x] = \\frac{1}{|x|\\sqrt{x^2 - 1}} \\qquad |x| > 1$$

// $$\\frac{d}{dx}[\\text{arccsc}\\, x] = -\\frac{1}{|x|\\sqrt{x^2 - 1}} \\qquad |x| > 1$$

// The derivation for arcsecant: let $y = \\text{arcsec}\\, x$, so $\\sec y = x$. Differentiating: $\\sec y \\tan y \\cdot \\frac{dy}{dx} = 1$. Since $\\sec y = x$ and $\\tan y = \\pm\\sqrt{\\sec^2 y - 1} = \\pm\\sqrt{x^2 - 1}$, the sign depends on the quadrant. The absolute value $|x|$ in the formula resolves this: $\\sec y \\tan y = |x|\\sqrt{x^2 - 1}$ across the full domain.

// These derivatives are less frequently encountered than the arcsine and arctangent versions. They appear primarily in integrals of the form $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx$ and in problems involving [trigonometric substitution](!/calculus/integrals/techniques).

// The domain $|x| > 1$ reflects the range of secant: $\\sec y$ never takes values between $-1$ and $1$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Patterns in Inverse Trigonometric Derivatives`,
//     content: `
// The six inverse trigonometric derivatives organize into three pairs, each pair summing to zero:

// $(\\arcsin x)' + (\\arccos x)' = 0$, both involving $\\frac{1}{\\sqrt{1 - x^2}}$

// $(\\arctan x)' + (\\text{arccot}\\, x)' = 0$, both involving $\\frac{1}{1 + x^2}$

// $(\\text{arcsec}\\, x)' + (\\text{arccsc}\\, x)' = 0$, both involving $\\frac{1}{|x|\\sqrt{x^2 - 1}}$

// Each pair shares the same magnitude because the two functions in each pair sum to a constant ($\\frac{\\pi}{2}$). The cofunction always carries the negative sign—the same pattern seen in the [common trigonometric derivatives](!/calculus/derivatives/common) where $\\cos$, $\\cot$, and $\\csc$ derivatives are negative.

// Two distinct algebraic forms appear: $\\sqrt{1 - x^2}$ for the sine/cosine pair, $1 + x^2$ for the tangent/cotangent pair, and $|x|\\sqrt{x^2 - 1}$ for the secant/cosecant pair. These three expressions reappear in integration, where recognizing them triggers the corresponding inverse trigonometric antiderivative. The table below collects the three algebraic forms alongside their cofunction pairs and the identity that explains why each pair shares the same magnitude.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Hyperbolic Functions`,
//     content: `
// The hyperbolic functions are defined through exponentials:

// $$\\sinh x = \\frac{e^x - e^{-x}}{2} \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2} \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x}$$

// Their derivatives parallel the trigonometric pattern:

// $$\\frac{d}{dx}[\\sinh x] = \\cosh x \\qquad \\qquad \\frac{d}{dx}[\\cosh x] = \\sinh x$$

// $$\\frac{d}{dx}[\\tanh x] = \\text{sech}^2\\, x \\qquad \\qquad \\frac{d}{dx}[\\coth x] = -\\text{csch}^2\\, x$$

// $$\\frac{d}{dx}[\\text{sech}\\, x] = -\\text{sech}\\, x \\tanh x \\qquad \\qquad \\frac{d}{dx}[\\text{csch}\\, x] = -\\text{csch}\\, x \\coth x$$

// The critical difference from trigonometric derivatives: $(\\cosh x)' = \\sinh x$ carries no negative sign, whereas $(\\cos x)' = -\\sin x$ does. This single sign difference propagates through all six formulas.

// Each derivative is verified directly by differentiating the exponential definitions. For $\\sinh x$: $\\frac{d}{dx}\\left[\\frac{e^x - e^{-x}}{2}\\right] = \\frac{e^x + e^{-x}}{2} = \\cosh x$. No special limits or implicit differentiation are needed—the [exponential derivative](!/calculus/derivatives/common) does all the work.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Inverse Hyperbolic Functions`,
//     content: `
// The inverse hyperbolic functions have derivatives that resemble the inverse trigonometric ones with sign changes under the radical:

// $$\\frac{d}{dx}[\\text{arcsinh}\\, x] = \\frac{1}{\\sqrt{x^2 + 1}} \\qquad \\qquad \\frac{d}{dx}[\\text{arccosh}\\, x] = \\frac{1}{\\sqrt{x^2 - 1}}, \\quad x > 1$$

// $$\\frac{d}{dx}[\\text{arctanh}\\, x] = \\frac{1}{1 - x^2}, \\quad |x| < 1$$

// Compare with inverse trigonometric derivatives: $\\sqrt{1 - x^2}$ becomes $\\sqrt{x^2 + 1}$ or $\\sqrt{x^2 - 1}$, and $1 + x^2$ becomes $1 - x^2$. The signs inside the expressions flip.

// These derivatives can be established through implicit differentiation or through the logarithmic representations. For instance, $\\text{arcsinh}\\, x = \\ln(x + \\sqrt{x^2 + 1})$. Differentiating this logarithmic form directly using the chain rule confirms $\\frac{1}{\\sqrt{x^2 + 1}}$.

// Inverse hyperbolic derivatives appear in integration: $\\int \\frac{1}{\\sqrt{x^2 + 1}}\\,dx = \\text{arcsinh}\\, x + C$ and $\\int \\frac{1}{\\sqrt{x^2 - 1}}\\,dx = \\text{arccosh}\\, x + C$ provide alternatives to trigonometric substitution for certain radical integrals.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Piecewise Functions`,
//     content: `
// A piecewise function uses different formulas on different intervals. On each interval's interior, standard [differentiation rules](!/calculus/derivatives/rules) apply to the governing formula. The derivative of the piecewise function is itself piecewise—computed piece by piece.

// The challenge lies at the boundaries. At a point $x = c$ where the formula changes, the derivative exists only if three conditions hold: the function is continuous at $c$ (the pieces connect), the left-hand derivative exists, and the right-hand derivative exists and equals the left-hand derivative.

// Consider $f(x) = x^2$ for $x \\leq 1$ and $f(x) = 2x - 1$ for $x > 1$. Continuity at $x = 1$: $f(1) = 1$ from the left, $2(1) - 1 = 1$ from the right—they match. Left derivative at $1$: $\\frac{d}{dx}[x^2]\\big|_{x=1} = 2$. Right derivative at $1$: $\\frac{d}{dx}[2x - 1]\\big|_{x=1} = 2$. Both derivatives match, so $f'(1) = 2$.

// If either continuity fails or the one-sided derivatives disagree, the function is not [differentiable](!/calculus/derivatives/differentiability) at that boundary. The absolute value function $|x|$ is the canonical example: continuous at $x = 0$, but left derivative $-1$ and right derivative $+1$ do not match. The table below names each of the three boundary conditions, what it requires, and the failure mode that appears when it is violated.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Summary of Special Derivatives`,
//     content: `
// The complete set of special derivative formulas:

// $$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}} \\qquad \\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1-x^2}}$$

// $$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2} \\qquad \\frac{d}{dx}[\\text{arccot}\\, x] = -\\frac{1}{1+x^2}$$

// $$\\frac{d}{dx}[\\text{arcsec}\\, x] = \\frac{1}{|x|\\sqrt{x^2-1}} \\qquad \\frac{d}{dx}[\\text{arccsc}\\, x] = -\\frac{1}{|x|\\sqrt{x^2-1}}$$

// $$\\frac{d}{dx}[\\sinh x] = \\cosh x \\qquad \\frac{d}{dx}[\\cosh x] = \\sinh x$$

// $$\\frac{d}{dx}[\\tanh x] = \\text{sech}^2\\, x \\qquad \\frac{d}{dx}[\\coth x] = -\\text{csch}^2\\, x$$

// $$\\frac{d}{dx}[\\text{sech}\\, x] = -\\text{sech}\\, x\\tanh x \\qquad \\frac{d}{dx}[\\text{csch}\\, x] = -\\text{csch}\\, x\\coth x$$

// $$\\frac{d}{dx}[\\text{arcsinh}\\, x] = \\frac{1}{\\sqrt{x^2+1}} \\qquad \\frac{d}{dx}[\\text{arccosh}\\, x] = \\frac{1}{\\sqrt{x^2-1}}$$

// $$\\frac{d}{dx}[\\text{arctanh}\\, x] = \\frac{1}{1-x^2}$$

// Together with the [common derivatives](!/calculus/derivatives/common), these formulas cover every standard function encountered in calculus. Recognizing the algebraic forms—$\\sqrt{1-x^2}$, $1+x^2$, $\\sqrt{x^2 \\pm 1}$, $1-x^2$—is equally important for integration, where these expressions signal inverse trigonometric or inverse hyperbolic antiderivatives. The table below assembles all 15 formulas as a single reference card, organized by category and including the domain on which each derivative is valid.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// formulas-optimized: v1 | 2026-06-09 | 15 callouts (obj1, obj2, obj3, obj5, obj6)
const sectionsContent = {
  // ─── /calculus/derivatives/special ────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Derivative](!/calculus/definitions#derivative) — the formulas here extend the common derivatives to inverse trig, hyperbolic, and piecewise functions
- [Differentiability](!/calculus/definitions#differentiability) — piecewise functions require boundary checks`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Inverse Trigonometric Functions — Arcsine and Arccosine`,
    content: `
The derivatives of $\\arcsin x$ and $\\arccos x$ are:

@academic[formula_callout:Derivative of Arcsine
$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$$
/calculus/derivatives/formulas#derivative_of_arcsine]@

@academic[formula_callout:Derivative of Arccosine
$$\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1 - x^2}}$$
/calculus/derivatives/formulas#derivative_of_arccosine]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

The two derivatives differ only by sign. This follows from the identity $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$: differentiating both sides gives $(\\arcsin x)' + (\\arccos x)' = 0$.

To derive the arcsine formula: let $y = \\arcsin x$, so $\\sin y = x$ with $y \\in [-\\pi/2, \\pi/2]$. Differentiating implicitly: $\\cos y \\cdot \\frac{dy}{dx} = 1$. Since $y$ lies in the first or fourth quadrant, $\\cos y \\geq 0$, so $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$. Solving gives $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^2}}$.

The domain restriction $|x| < 1$ reflects the range of $\\sin y$ on $[-\\pi/2, \\pi/2]$. At $x = \\pm 1$, the denominator vanishes—the graph of $\\arcsin x$ has vertical tangents at its endpoints.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Inverse Trigonometric Functions — Arctangent and Arccotangent`,
    content: `
@academic[formula_callout:Derivative of Arctangent
$$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2}$$
/calculus/derivatives/formulas#derivative_of_arctangent]@

@academic[formula_callout:Derivative of Arccotangent
$$\\frac{d}{dx}[\\operatorname{arccot} x] = -\\frac{1}{1 + x^2}$$
/calculus/derivatives/formulas#derivative_of_arccotangent]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

Again the derivatives are negatives of each other, following from $\\arctan x + \\text{arccot}\\, x = \\frac{\\pi}{2}$.

To derive the arctangent formula: let $y = \\arctan x$, so $\\tan y = x$. Differentiating: $\\sec^2 y \\cdot \\frac{dy}{dx} = 1$. Using the identity $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$ gives $\\frac{dy}{dx} = \\frac{1}{1 + x^2}$.

Unlike arcsine and arccosine, arctangent is defined for all real $x$—no domain restriction. The derivative $\\frac{1}{1 + x^2}$ is always positive, confirming that $\\arctan x$ is strictly increasing. As $x \\to \\pm\\infty$, the derivative approaches zero, reflecting the horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$. The function rises everywhere but flattens out at the extremes.

This derivative appears prominently in [integration](!/calculus/integrals/special): $\\int \\frac{1}{1 + x^2}\\,dx = \\arctan x + C$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Inverse Trigonometric Functions — Arcsecant and Arccosecant`,
    content: `
@academic[formula_callout:Derivative of Arcsecant
$$\\frac{d}{dx}[\\operatorname{arcsec} x] = \\frac{1}{|x| \\sqrt{x^2 - 1}}$$
/calculus/derivatives/formulas#derivative_of_arcsecant]@

@academic[formula_callout:Derivative of Arccosecant
$$\\frac{d}{dx}[\\operatorname{arccsc} x] = -\\frac{1}{|x| \\sqrt{x^2 - 1}}$$
/calculus/derivatives/formulas#derivative_of_arccosecant]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

The derivation for arcsecant: let $y = \\text{arcsec}\\, x$, so $\\sec y = x$. Differentiating: $\\sec y \\tan y \\cdot \\frac{dy}{dx} = 1$. Since $\\sec y = x$ and $\\tan y = \\pm\\sqrt{\\sec^2 y - 1} = \\pm\\sqrt{x^2 - 1}$, the sign depends on the quadrant. The absolute value $|x|$ in the formula resolves this: $\\sec y \\tan y = |x|\\sqrt{x^2 - 1}$ across the full domain.

These derivatives are less frequently encountered than the arcsine and arctangent versions. They appear primarily in integrals of the form $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx$ and in problems involving [trigonometric substitution](!/calculus/integrals/techniques).

The domain $|x| > 1$ reflects the range of secant: $\\sec y$ never takes values between $-1$ and $1$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Patterns in Inverse Trigonometric Derivatives`,
    content: `
The six inverse trigonometric derivatives organize into three pairs, each pair summing to zero:

$(\\arcsin x)' + (\\arccos x)' = 0$, both involving $\\frac{1}{\\sqrt{1 - x^2}}$

$(\\arctan x)' + (\\text{arccot}\\, x)' = 0$, both involving $\\frac{1}{1 + x^2}$

$(\\text{arcsec}\\, x)' + (\\text{arccsc}\\, x)' = 0$, both involving $\\frac{1}{|x|\\sqrt{x^2 - 1}}$

Each pair shares the same magnitude because the two functions in each pair sum to a constant ($\\frac{\\pi}{2}$). The cofunction always carries the negative sign—the same pattern seen in the [common trigonometric derivatives](!/calculus/derivatives/common) where $\\cos$, $\\cot$, and $\\csc$ derivatives are negative.

Two distinct algebraic forms appear: $\\sqrt{1 - x^2}$ for the sine/cosine pair, $1 + x^2$ for the tangent/cotangent pair, and $|x|\\sqrt{x^2 - 1}$ for the secant/cosecant pair. These three expressions reappear in integration, where recognizing them triggers the corresponding inverse trigonometric antiderivative. The table below collects the three algebraic forms alongside their cofunction pairs and the identity that explains why each pair shares the same magnitude.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Hyperbolic Functions`,
    content: `
The hyperbolic functions are defined through exponentials:

$$\\sinh x = \\frac{e^x - e^{-x}}{2} \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2} \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x}$$

Their derivatives parallel the trigonometric pattern:

@academic[formula_callout:Derivative of Hyperbolic Sine
$$\\frac{d}{dx}[\\sinh x] = \\cosh x$$
/calculus/derivatives/formulas#derivative_of_hyperbolic_sine]@

@academic[formula_callout:Derivative of Hyperbolic Cosine
$$\\frac{d}{dx}[\\cosh x] = \\sinh x$$
/calculus/derivatives/formulas#derivative_of_hyperbolic_cosine]@

@academic[formula_callout:Derivative of Hyperbolic Tangent
$$\\frac{d}{dx}[\\tanh x] = \\operatorname{sech}^2 x$$
/calculus/derivatives/formulas#derivative_of_hyperbolic_tangent]@

@academic[formula_callout:Derivative of Hyperbolic Cotangent
$$\\frac{d}{dx}[\\coth x] = -\\operatorname{csch}^2 x$$
/calculus/derivatives/formulas#derivative_of_hyperbolic_cotangent]@

@academic[formula_callout:Derivative of Hyperbolic Secant
$$\\frac{d}{dx}[\\operatorname{sech} x] = -\\operatorname{sech} x \\tanh x$$
/calculus/derivatives/formulas#derivative_of_hyperbolic_secant]@

@academic[formula_callout:Derivative of Hyperbolic Cosecant
$$\\frac{d}{dx}[\\operatorname{csch} x] = -\\operatorname{csch} x \\coth x$$
/calculus/derivatives/formulas#derivative_of_hyperbolic_cosecant]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

The critical difference from trigonometric derivatives: $(\\cosh x)' = \\sinh x$ carries no negative sign, whereas $(\\cos x)' = -\\sin x$ does. This single sign difference propagates through all six formulas.

Each derivative is verified directly by differentiating the exponential definitions. For $\\sinh x$: $\\frac{d}{dx}\\left[\\frac{e^x - e^{-x}}{2}\\right] = \\frac{e^x + e^{-x}}{2} = \\cosh x$. No special limits or implicit differentiation are needed—the [exponential derivative](!/calculus/derivatives/common) does all the work.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Inverse Hyperbolic Functions`,
    content: `
The inverse hyperbolic functions have derivatives that resemble the inverse trigonometric ones with sign changes under the radical:

@academic[formula_callout:Derivative of Inverse Hyperbolic Sine
$$\\frac{d}{dx}[\\operatorname{arcsinh} x] = \\frac{1}{\\sqrt{x^2 + 1}}$$
/calculus/derivatives/formulas#derivative_of_inverse_hyperbolic_sine]@

@academic[formula_callout:Derivative of Inverse Hyperbolic Cosine
$$\\frac{d}{dx}[\\operatorname{arccosh} x] = \\frac{1}{\\sqrt{x^2 - 1}}$$
/calculus/derivatives/formulas#derivative_of_inverse_hyperbolic_cosine]@

@academic[formula_callout:Derivative of Inverse Hyperbolic Tangent
$$\\frac{d}{dx}[\\operatorname{arctanh} x] = \\frac{1}{1 - x^2}$$
/calculus/derivatives/formulas#derivative_of_inverse_hyperbolic_tangent]@

@academic[formulas_link:Browse all derivative formulas
/calculus/derivatives/formulas]@

Compare with inverse trigonometric derivatives: $\\sqrt{1 - x^2}$ becomes $\\sqrt{x^2 + 1}$ or $\\sqrt{x^2 - 1}$, and $1 + x^2$ becomes $1 - x^2$. The signs inside the expressions flip.

These derivatives can be established through implicit differentiation or through the logarithmic representations. For instance, $\\text{arcsinh}\\, x = \\ln(x + \\sqrt{x^2 + 1})$. Differentiating this logarithmic form directly using the chain rule confirms $\\frac{1}{\\sqrt{x^2 + 1}}$.

Inverse hyperbolic derivatives appear in integration: $\\int \\frac{1}{\\sqrt{x^2 + 1}}\\,dx = \\text{arcsinh}\\, x + C$ and $\\int \\frac{1}{\\sqrt{x^2 - 1}}\\,dx = \\text{arccosh}\\, x + C$ provide alternatives to trigonometric substitution for certain radical integrals.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Piecewise Functions`,
    content: `
A piecewise function uses different formulas on different intervals. On each interval's interior, standard [differentiation rules](!/calculus/derivatives/rules) apply to the governing formula. The derivative of the piecewise function is itself piecewise—computed piece by piece.

The challenge lies at the boundaries. At a point $x = c$ where the formula changes, the derivative exists only if three conditions hold: the function is continuous at $c$ (the pieces connect), the left-hand derivative exists, and the right-hand derivative exists and equals the left-hand derivative.

Consider $f(x) = x^2$ for $x \\leq 1$ and $f(x) = 2x - 1$ for $x > 1$. Continuity at $x = 1$: $f(1) = 1$ from the left, $2(1) - 1 = 1$ from the right—they match. Left derivative at $1$: $\\frac{d}{dx}[x^2]\\big|_{x=1} = 2$. Right derivative at $1$: $\\frac{d}{dx}[2x - 1]\\big|_{x=1} = 2$. Both derivatives match, so $f'(1) = 2$.

If either continuity fails or the one-sided derivatives disagree, the function is not [differentiable](!/calculus/derivatives/differentiability) at that boundary. The absolute value function $|x|$ is the canonical example: continuous at $x = 0$, but left derivative $-1$ and right derivative $+1$ do not match. The table below names each of the three boundary conditions, what it requires, and the failure mode that appears when it is violated.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Special Derivatives`,
    content: `
The complete set of special derivative formulas:

$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}} \\qquad \\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1-x^2}}$$

$$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2} \\qquad \\frac{d}{dx}[\\text{arccot}\\, x] = -\\frac{1}{1+x^2}$$

$$\\frac{d}{dx}[\\text{arcsec}\\, x] = \\frac{1}{|x|\\sqrt{x^2-1}} \\qquad \\frac{d}{dx}[\\text{arccsc}\\, x] = -\\frac{1}{|x|\\sqrt{x^2-1}}$$

$$\\frac{d}{dx}[\\sinh x] = \\cosh x \\qquad \\frac{d}{dx}[\\cosh x] = \\sinh x$$

$$\\frac{d}{dx}[\\tanh x] = \\text{sech}^2\\, x \\qquad \\frac{d}{dx}[\\coth x] = -\\text{csch}^2\\, x$$

$$\\frac{d}{dx}[\\text{sech}\\, x] = -\\text{sech}\\, x\\tanh x \\qquad \\frac{d}{dx}[\\text{csch}\\, x] = -\\text{csch}\\, x\\coth x$$

$$\\frac{d}{dx}[\\text{arcsinh}\\, x] = \\frac{1}{\\sqrt{x^2+1}} \\qquad \\frac{d}{dx}[\\text{arccosh}\\, x] = \\frac{1}{\\sqrt{x^2-1}}$$

$$\\frac{d}{dx}[\\text{arctanh}\\, x] = \\frac{1}{1-x^2}$$

Together with the [common derivatives](!/calculus/derivatives/common), these formulas cover every standard function encountered in calculus. Recognizing the algebraic forms—$\\sqrt{1-x^2}$, $1+x^2$, $\\sqrt{x^2 \\pm 1}$, $1-x^2$—is equally important for integration, where these expressions signal inverse trigonometric or inverse hyperbolic antiderivatives. The table below assembles all 15 formulas as a single reference card, organized by category and including the domain on which each derivative is valid.
`,
    before: ``,
    after: ``,
    link: '',
  },
};



const introContent = {
  id: `intro`,
  title: `Derivatives That Require Deeper Techniques`,
  content: `
The [common derivatives](!/calculus/derivatives/common) cover polynomials, trigonometric functions, exponentials, and logarithms. Beyond these lie function families whose derivatives are less immediately obvious and harder to rederive on the spot. Inverse trigonometric functions produce algebraic expressions involving square roots. Hyperbolic functions mirror their trigonometric counterparts with subtle sign differences. Piecewise functions demand separate treatment on each interval with careful attention at boundaries.

Most of these derivatives are established through [implicit differentiation or the inverse function formula](!/calculus/derivatives/techniques) rather than direct computation from the limit definition. Understanding the derivation builds insight; memorizing the result builds speed. Both matter.
`
};


const faqQuestions = {
  obj1: {
    question: "What is the derivative of arcsin x?",
    answer: "The derivative of arcsin x is 1/√(1 − x²) for |x| < 1. It is derived by setting y = arcsin x, so sin y = x, then applying implicit differentiation. The derivative of arccos x is the negative of this, −1/√(1 − x²).",
    sectionId: "1"
  },
  obj2: {
    question: "What is the derivative of arctan x?",
    answer: "The derivative of arctan x is 1/(1 + x²), valid for all real x. This is derived by implicit differentiation of tan y = x, using the identity sec²y = 1 + tan²y. The result appears frequently in integration as the antiderivative of 1/(1 + x²).",
    sectionId: "2"
  },
  obj3: {
    question: "How do inverse trigonometric derivatives relate to each other?",
    answer: "The six inverse trig derivatives form three pairs (arcsin/arccos, arctan/arccot, arcsec/arccsc), and within each pair the derivatives are negatives of each other. This follows from each pair summing to π/2, so their derivatives sum to zero.",
    sectionId: "4"
  },
  obj4: {
    question: "What are the derivatives of hyperbolic functions?",
    answer: "The hyperbolic derivatives mirror the trigonometric ones: (sinh x)' = cosh x, (cosh x)' = sinh x, and (tanh x)' = sech²x. The key difference is that (cosh x)' = sinh x has no negative sign, whereas (cos x)' = −sin x does.",
    sectionId: "5"
  },
  obj5: {
    question: "How do you differentiate a piecewise function at a boundary?",
    answer: "At a boundary point where the formula changes, the derivative exists only if the function is continuous there and the left-hand and right-hand derivatives are equal. If either condition fails, the function is not differentiable at that point.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Special Derivatives",
    "description": "Derivatives of inverse trigonometric, hyperbolic, inverse hyperbolic, and piecewise functions. Complete formulas with derivations for arcsin, arctan, sinh, cosh, and more.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/special",
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
      "name": "Special Derivatives"
    },
    "teaches": [
      "Derivatives of arcsin, arccos via implicit differentiation",
      "Derivatives of arctan, arccot, arcsec, arccsc",
      "Cofunction pairing patterns in inverse trig derivatives",
      "Hyperbolic function derivatives from exponential definitions",
      "Inverse hyperbolic derivatives and logarithmic forms",
      "Piecewise function differentiation at boundary points"
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
        "name": "Special Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/special"
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
  props:{
    sectionsContent,
    introContent,
    obj4Table,
    obj7Table,
    obj8Table,
    faqQuestions,
    schemas,
    seoData: {
      title: "Special Derivatives: Inverse Trig & Hyperbolic | Learn Math Class",
      description: "Derivatives of inverse trigonometric, hyperbolic, inverse hyperbolic, and piecewise functions. Complete formulas with derivations for arcsin, arctan, sinh, cosh, and more.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/special",
      name: "Special Derivatives"
    },
  }
}
   }

export default function PageTemplate({
  seoData,
  sectionsContent,
  introContent,
  obj4Table,
  obj7Table,
  obj8Table,
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
          <div key={'obj4-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj4Table}}/>,
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
          <div key={'obj7-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj7Table}}/>,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'obj8-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj8Table}}/>,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Special Derivatives</h1>
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