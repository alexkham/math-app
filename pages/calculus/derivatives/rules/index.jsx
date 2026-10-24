// tables-optimized: v4 | 2026-05-24 | 2 tables (theorems comparison, overview summary capstone)


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'

import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import functionMVTDiagrams from '@/app/components/functions/mvt/functionMVTDiagrams'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "derivative rules",
  "differentiation rules",
  "power rule derivative",
  "product rule calculus",
  "quotient rule formula",
  "chain rule derivative",
  "constant rule differentiation",
  "sum rule derivative",
  "mean value theorem",
  "Rolle's theorem",
  "L'Hôpital's rule",
  "derivative formulas",
  "calculus differentiation",
  "basic derivative rules"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // theoremsTable — comparison: MVT vs Rolle's vs L'Hôpital
  const theoremsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Theorem</th>
      <th style="${tableHeaders.comparison}">Hypotheses</th>
      <th style="${tableHeaders.comparison}">Conclusion</th>
      <th style="${tableHeaders.comparison}">Primary use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Mean Value Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f continuous on [a, b]; f differentiable on (a, b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">there is some c ∈ (a, b) with f&apos;(c) = (f(b) − f(a)) ⁄ (b − a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">connecting instantaneous and average rates; foundation for many subsequent results</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rolle&apos;s Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f continuous on [a, b]; f differentiable on (a, b);&nbsp; f(a) = f(b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">there is some c ∈ (a, b) with f&apos;(c) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">stepping stone in proofs (including MVT itself); counting roots via f&apos;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">L&apos;Hôpital&apos;s Rule</td>
      <td style="padding: 12px 15px; color: #34495e;">limit of f ⁄ g gives indeterminate form 0 ⁄ 0 or ∞ ⁄ ∞; limit of f&apos; ⁄ g&apos; exists (or is ±∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">lim f ⁄ g = lim f&apos; ⁄ g&apos;</td>
      <td style="padding: 12px 15px; color: #34495e;">resolving indeterminate limits via differentiation</td>
    </tr>
  </tbody>
</table>
`

  // overviewTable — summary capstone: 10-row master reference
  const overviewTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Rule or theorem</th>
      <th style="${tableHeaders.summary}">Formula</th>
      <th style="${tableHeaders.summary}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">if f(x) = c then f&apos;(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constant functions have zero slope everywhere</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant multiple rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(c · f(x))&apos; = c · f&apos;(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constants factor straight through differentiation</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x<sup>n</sup>)&apos; = n · x<sup>n − 1</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">valid for any real exponent n</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum &amp; difference rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f ± g)&apos; = f&apos; ± g&apos;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">extends to any finite number of terms; differentiate term by term</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f · g)&apos; = f&apos; · g + f · g&apos;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">each factor takes a turn being differentiated; generalises to more than two factors</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f ⁄ g)&apos; = (f&apos; · g − f · g&apos;) ⁄ g<sup>2</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">requires g(x) ≠ 0; numerator order matters</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Chain rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f(g(x)))&apos; = f&apos;(g(x)) · g&apos;(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handles compositions; extends to any depth of nesting</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Mean Value Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(c) = (f(b) − f(a)) ⁄ (b − a) for some c ∈ (a, b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">requires continuity on [a, b] and differentiability on (a, b)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rolle&apos;s Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(c) = 0 for some c ∈ (a, b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">special case of MVT when f(a) = f(b)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">L&apos;Hôpital&apos;s Rule</td>
      <td style="padding: 12px 15px; color: #34495e;">lim f ⁄ g = lim f&apos; ⁄ g&apos;</td>
      <td style="padding: 12px 15px; color: #34495e;">applies to indeterminate forms 0 ⁄ 0 and ∞ ⁄ ∞; other forms must be converted first</td>
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

 
const derivativeRulesData = {
  "Differentiation Rules": [
    {
      id: 1,
      rule: "Constant Rule",
      formula: "If $f(x) = c$, then $f'(x) = 0$",
      explanation: "The derivative of any constant is zero"
    },
    {
      id: 2,
      rule: "Constant Multiple Rule",
      formula: "If $g(x) = c \\cdot f(x)$, then $g'(x) = c \\cdot f'(x)$",
      explanation: "Constants can be factored out of derivatives"
    },
    {
      id: 3,
      rule: "Power Rule",
      formula: "If $f(x) = x^n$, then $f'(x) = nx^{n-1}$",
      explanation: "Bring down the exponent and reduce the power by one"
    },
    {
      id: 4,
      rule: "Sum and Difference Rule",
      formula: "If $h(x) = f(x) \\pm g(x)$, then $h'(x) = f'(x) \\pm g'(x)$",
      explanation: "The derivative of a sum/difference is the sum/difference of derivatives"
    },
    {
      id: 5,
      rule: "Product Rule",
      formula: "If $h(x) = f(x)g(x)$, then $h'(x) = f'(x)g(x) + f(x)g'(x)$",
      explanation: "Derivative of first times second plus first times derivative of second"
    },
    {
      id: 6,
      rule: "Quotient Rule",
      formula: "If $h(x) = \\frac{f(x)}{g(x)}$, then $h'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
      explanation: "Low d-high minus high d-low over low squared"
    },
    {
      id: 7,
      rule: "Chain Rule",
      formula: "If $h(x) = f(g(x))$, then $h'(x) = f'(g(x))g'(x)$",
      explanation: "Derivative of outside function times derivative of inside function"
    },
    {
      id: 8,
      rule: "Mean Value Theorem",
      formula: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$",
      explanation: "Instantaneous rate equals average rate at some interior point"
    },
    {
      id: 9,
      rule: "Rolle's Theorem",
      formula: "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then $f'(c) = 0$ for some $c \\in (a,b)$",
      explanation: "Equal endpoint values guarantee a horizontal tangent between them"
    },
    {
      id: 10,
      rule: "L'Hôpital's Rule",
      formula: "If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, then $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$",
      explanation: "Replace indeterminate limit of functions with limit of their derivatives"
    }
  ]
};

// const sectionsContent = {
//   // ─── /calculus/derivatives/rules ──────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Derivative](!/calculus/definitions#derivative) — the object these rules compute
// - [Differentiability](!/calculus/definitions#differentiability) — the hypothesis required for every rule to apply`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Constant Rule`,
//     content: `
// If $f(x) = c$ for some constant $c$, then

// $$f'(x) = 0$$

// A constant function has a horizontal graph—its slope is zero everywhere. From the limit definition: the difference quotient $\\frac{c - c}{h} = 0$ for all $h$, so the limit is $0$.

// This rule is simple but essential. It establishes the baseline: quantities that do not change have zero rate of change. It also appears implicitly in every application of the sum rule, where constant terms vanish under differentiation.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Power Rule`,
//     content: `
// For any real exponent $n$:

// $$\\frac{d}{dx}[x^n] = nx^{n-1}$$

// The rule covers positive integers ($x^3 \\to 3x^2$), negative integers ($x^{-2} \\to -2x^{-3}$), fractions ($x^{1/2} \\to \\frac{1}{2}x^{-1/2}$), and irrational exponents ($x^\\pi \\to \\pi x^{\\pi - 1}$). For positive integer $n$, the proof uses the binomial expansion of $(x+h)^n$ in the limit definition. Extension to rational and real exponents requires [logarithmic differentiation](!/calculus/derivatives/techniques) or the generalized exponential $x^n = e^{n \\ln x}$.

// The power rule is the most frequently applied differentiation formula. Combined with the constant multiple and sum rules, it handles all polynomials and many algebraic expressions directly.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Constant Multiple Rule`,
//     content: `
// If $c$ is a constant and $f$ is differentiable, then

// $$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$

// Constants factor out of derivatives. The proof is immediate from the limit definition: the constant $c$ factors out of the difference quotient and passes through the limit.

// This rule is a special case of the product rule (one factor being constant), but it is worth stating separately. In practice, factoring constants out before differentiating simplifies every computation.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Sum and Difference Rules`,
//     content: `
// If $f$ and $g$ are both differentiable, then

// $$\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$

// $$\\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$

// The derivative of a sum is the sum of the derivatives. This follows from the limit definition by splitting the difference quotient into two parts and applying the sum rule for [limits](!/calculus/limits/rules).

// The rule extends to any finite number of terms: the derivative of $f_1 + f_2 + \\cdots + f_n$ is $f_1' + f_2' + \\cdots + f_n'$. Combined with the constant multiple rule, this handles all linear combinations. In particular, every polynomial is differentiated term by term.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Product Rule`,
//     content: `
// If $f$ and $g$ are both differentiable, then

// $$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

// The derivative of a product is not the product of the derivatives. Each factor takes a turn being differentiated while the other remains unchanged, and the two contributions are added.

// The proof adds and subtracts $f(x+h)g(x)$ inside the difference quotient for $f(x)g(x)$, splitting it into a piece that isolates $g'$ and a piece that isolates $f'$. The fact that [differentiability implies continuity](!/calculus/derivatives/differentiability) ensures that $f(x+h) \\to f(x)$ as $h \\to 0$.

// For three factors: $(fgh)' = f'gh + fg'h + fgh'$. The pattern generalizes—each factor is differentiated once while all others remain, and the results are summed.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Quotient Rule`,
//     content: `
// If $f$ and $g$ are differentiable and $g(x) \\neq 0$, then

// $$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

// The numerator subtracts where the product rule adds, and the entire expression is divided by the square of the denominator. The order matters: $f'g - fg'$, not $fg' - f'g$.

// The quotient rule can be derived from the product rule by writing $f/g = f \\cdot g^{-1}$ and applying the chain rule to $g^{-1}$. Both approaches yield the same formula. In practice, the quotient rule is applied directly when the function is naturally a fraction, and rewriting as a product is preferred when the denominator is a simple power.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Chain Rule`,
//     content: `
// If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then the composite function $f \\circ g$ is differentiable at $x$ and

// $$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

// Differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function. In Leibniz notation, with $y = f(u)$ and $u = g(x)$:

// $$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

// The notation suggests fraction cancellation, and while $dy/dx$ is not literally a fraction, the chain rule makes Leibniz notation behave as though it were.

// The chain rule extends to deeper compositions. For $f(g(h(x)))$: differentiate the outermost function at its argument, multiply by the derivative of the next layer at its argument, and continue inward. Each layer contributes a multiplicative factor.

// This is the most powerful of the basic rules. Without it, [composite functions](!/calculus/derivatives/common)—$\\sin(x^2)$, $e^{3x}$, $\\ln(\\cos x)$—cannot be differentiated. Most applications of differentiation involve the chain rule at some level.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Mean Value Theorem`,
//     content: `
// If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c \\in (a, b)$ such that

// $$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

// The instantaneous rate of change at $c$ equals the average rate of change over the entire interval. Geometrically, there is a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.

// The Mean Value Theorem is primarily a theoretical tool. It proves that a function with positive derivative on an interval is increasing. It establishes that two functions with the same derivative differ by a constant. It justifies the connection between antiderivatives and definite integrals in the Fundamental Theorem of Calculus.

// The hypotheses are essential. Continuity on the closed interval $[a, b]$ ensures no gaps at the endpoints. Differentiability on the open interval $(a, b)$ ensures the derivative exists at interior points. Functions that violate either condition may fail the conclusion.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Rolle's Theorem`,
//     content: `
// Rolle's Theorem is the special case of the Mean Value Theorem where $f(a) = f(b)$.

// If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists at least one point $c \\in (a, b)$ with $f'(c) = 0$.

// A function that starts and ends at the same value must have a horizontal tangent somewhere between. If the function rises above its starting value, it must turn around—creating a maximum with zero slope. If it drops below, it must turn upward—creating a minimum. If it stays constant, $f'(x) = 0$ everywhere on the interval.

// Rolle's Theorem is often used as a stepping stone in proofs. The Mean Value Theorem itself is proven by applying Rolle's Theorem to an auxiliary function constructed to satisfy $g(a) = g(b)$. It also appears in arguments about the number of roots: between any two roots of $f$, there must be a root of $f'$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj10: {
//     title: `L'Hôpital's Rule`,
//     content: `
// If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ produces the indeterminate form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, and if $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ exists (or equals $\\pm\\infty$), then

// $$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

// The rule replaces a difficult limit of functions with a (potentially simpler) limit of their derivatives. It applies equally when $a$ is finite or $a = \\pm\\infty$.

// Critical requirements: the original limit must be an indeterminate form, and the limit of the derivative ratio must exist or be $\\pm\\infty$. If the derivative ratio produces another indeterminate form, L'Hôpital's rule may be applied again. If the derivative ratio oscillates or fails to exist, the rule gives no information—it does not say the original limit fails to exist, only that this method does not resolve it.

// Other indeterminate forms—$0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$—can be converted to $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ through algebraic rearrangement, then handled by L'Hôpital's rule. The conversion step varies by form: $0 \\cdot \\infty$ becomes a fraction by moving one factor to the denominator; exponential forms use the identity $f(x)^{g(x)} = e^{g(x) \\ln f(x)}$.

// The Mean Value Theorem, Rolle's Theorem, and L'Hôpital's rule are the three theorems on this page that govern derivative behavior on intervals. The table below sets them side by side across their hypotheses, conclusions, and the role each plays in practice.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   overview: {
//     title: `All Rules and Theorems at a Glance`,
//     content: `
// The ten formulas above split naturally into seven algebraic rules — constant, constant multiple, power, sum/difference, product, quotient, chain — and three interval theorems — Mean Value, Rolle&apos;s, and L&apos;Hôpital&apos;s. The table below collects every formula introduced on this page as a single reference card, with the key condition or note that governs its use.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// formulas-optimized: v1 | 2026-06-09 | 10 callouts (obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10)
const sectionsContent = {
  // ─── /calculus/derivatives/rules ──────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Derivative](!/calculus/definitions#derivative) — the object these rules compute
- [Differentiability](!/calculus/definitions#differentiability) — the hypothesis required for every rule to apply`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Constant Rule`,
    content: `
If $f(x) = c$ for some constant $c$, then

@academic[formula_callout:Constant Rule (Derivatives)
$$\\frac{d}{dx}[c] = 0$$
/calculus/formulas#constant_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

A constant function has a horizontal graph—its slope is zero everywhere. From the limit definition: the difference quotient $\\frac{c - c}{h} = 0$ for all $h$, so the limit is $0$.

@academic[pitfall,aside:true,width:35%:Treating a constant as a variable
Applying the power rule to $\\pi^2$ gives $\\frac{d}{dx}[\\pi^2] = 2\\pi$, as if $\\pi$ were the variable. But $\\pi^2 \\approx 9.87$ is a fixed number with no $x$ in it, so its derivative is $0$.
[Read more](!#pitfalls)]@

This rule is simple but essential. It establishes the baseline: quantities that do not change have zero rate of change. It also appears implicitly in every application of the sum rule, where constant terms vanish under differentiation.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Power Rule`,
    content: `
For any real exponent $n$:

@academic[formula_callout:Power Rule (Derivatives)
$$\\frac{d}{dx}[x^n] = n x^{n-1}$$
/calculus/formulas#power_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The rule covers positive integers ($x^3 \\to 3x^2$), negative integers ($x^{-2} \\to -2x^{-3}$), fractions ($x^{1/2} \\to \\frac{1}{2}x^{-1/2}$), and irrational exponents ($x^\\pi \\to \\pi x^{\\pi - 1}$). For positive integer $n$, the proof uses the binomial expansion of $(x+h)^n$ in the limit definition. Extension to rational exponents follows from implicit differentiation; for all real exponents it uses [logarithmic differentiation](!/calculus/derivatives/techniques) or the generalized exponential $x^n = e^{n \\ln x}$.

The power rule is the most frequently applied differentiation formula. Combined with the constant multiple and sum rules, it handles all polynomials and many algebraic expressions directly.

@academic[pitfall,aside:true,width:35%:Moving a negative exponent toward zero
Lowering $-2$ to $-1$ gives $\\frac{d}{dx}[x^{-2}] = -2x^{-1}$, which is $-1$ at $x = 2$. One less than $-2$ is $-3$: the derivative is $-2x^{-3}$, which is $-0.25$ at $x = 2$.
[Read more](!#pitfalls)]@

Negative and fractional exponents follow the same two steps as positive ones: the exponent comes down as a coefficient, and the new exponent is one less than the old. Roots and reciprocals are first rewritten as powers, $\\sqrt{x} = x^{1/2}$ and $\\frac{1}{x^2} = x^{-2}$, so that the rule can be applied to them. The result is then usually written back in the original form, as in $-2x^{-3} = -\\frac{2}{x^3}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Constant Multiple Rule`,
    content: `
If $c$ is a constant and $f$ is differentiable, then

@academic[formula_callout:Constant Multiple Rule (Derivatives)
$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$
/calculus/formulas#constant_multiple_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

Constants factor out of derivatives. The proof is immediate from the limit definition: the constant $c$ factors out of the difference quotient and passes through the limit.

This rule is a special case of the product rule (one factor being constant), but it is worth stating separately. In practice, factoring constants out before differentiating simplifies every computation.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Sum and Difference Rules`,
    content: `
If $f$ and $g$ are both differentiable, then

@academic[formula_callout:Sum and Difference Rule (Derivatives)
$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$
/calculus/formulas#sum_and_difference_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The derivative of a sum is the sum of the derivatives. This follows from the limit definition by splitting the difference quotient into two parts and applying the sum rule for [limits](!/calculus/limits/rules).

The rule extends to any finite number of terms: the derivative of $f_1 + f_2 + \\cdots + f_n$ is $f_1' + f_2' + \\cdots + f_n'$. Combined with the constant multiple rule, this handles all linear combinations. In particular, every polynomial is differentiated term by term.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Product Rule`,
    content: `
If $f$ and $g$ are both differentiable, then

@academic[formula_callout:Product Rule (Derivatives)
$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$
/calculus/formulas#product_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The derivative of a product is not the product of the derivatives. Each factor takes a turn being differentiated while the other remains unchanged, and the two contributions are added.

@academic[fact,aside:true,width:35%:Leibniz tried $dx\\,dy$ first
In a manuscript of 11 November 1675, Leibniz examined whether $d(xy)$ is the same as $dx\\,dy$, and a worked example showed that it is not. Ten days later, on 21 November, he wrote down the correct rule $d(xy) = x\\,dy + y\\,dx$.]@

The tempting guess fails on the simplest product. For $x \\cdot x = x^2$ the derivative is $2x$, while the product of the derivatives is $1 \\cdot 1 = 1$; at $x = 3$ that is $6$ against $1$. The product rule gives the right answer: $1 \\cdot x + x \\cdot 1 = 2x$.

The proof adds and subtracts $f(x+h)g(x)$ inside the difference quotient for $f(x)g(x)$, splitting it into a piece that isolates $g'$ and a piece that isolates $f'$. The fact that [differentiability implies continuity](!/calculus/derivatives/differentiability) ensures that $f(x+h) \\to f(x)$ as $h \\to 0$.

For three factors: $(fgh)' = f'gh + fg'h + fgh'$. The pattern generalizes—each factor is differentiated once while all others remain, and the results are summed.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Quotient Rule`,
    content: `
If $f$ and $g$ are differentiable and $g(x) \\neq 0$, then

@academic[formula_callout:Quotient Rule (Derivatives)
$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$
/calculus/formulas#quotient_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The numerator subtracts where the product rule adds, and the entire expression is divided by the square of the denominator. The order matters: $f'g - fg'$, not $fg' - f'g$.

The quotient rule can be derived from the product rule by writing $f/g = f \\cdot g^{-1}$ and applying the chain rule to $g^{-1}$. Both approaches yield the same formula. In practice, the quotient rule is applied directly when the function is naturally a fraction, and rewriting as a product is preferred when the denominator is a simple power.

@academic[punchline:A quotient is a product with a reciprocal factor, so the quotient rule is the product rule plus the chain rule.]@
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Chain Rule`,
    content: `
If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then the composite function $f \\circ g$ is differentiable at $x$ and

@academic[formula_callout:Chain Rule
$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$]@

Differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function. In Leibniz notation, with $y = f(u)$ and $u = g(x)$:

@academic[formula_callout:Chain Rule
$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$]@

@academic[formula_callout:Chain Rule
$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x) \\qquad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$
/calculus/formulas#chain_rule]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The notation suggests fraction cancellation, and while $dy/dx$ is not literally a fraction, the chain rule makes Leibniz notation behave as though it were.

The chain rule extends to deeper compositions. For $f(g(h(x)))$: differentiate the outermost function at its argument, multiply by the derivative of the next layer at its argument, and continue inward. Each layer contributes a multiplicative factor.

@academic[pitfall,aside:true,width:35%:Leaving out the inner derivative
Differentiating only the outer function gives $\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2)$, without the factor from $x^2$. The chain rule multiplies by $(x^2)' = 2x$: the derivative is $2x\\cos(x^2)$.
[Read more](!#pitfalls)]@

This is the most powerful of the basic rules. Without it, [composite functions](!/calculus/derivatives/common)—$\\sin(x^2)$, $e^{3x}$, $\\ln(\\cos x)$—cannot be differentiated. Most applications of differentiation involve the chain rule at some level.

@academic[punchline:However deep the composition, its derivative is the product of the derivatives of its layers, each taken at its own input.]@
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Mean Value Theorem`,
    content: `
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c \\in (a, b)$ such that

@academic[formula_callout:Mean Value Theorem
$$f'(c) = \\frac{f(b) - f(a)}{b - a} \\qquad \\text{for some } c \\in (a, b)$$
/calculus/formulas#mean_value_theorem]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[fact,aside:true,width:35%:No mean value on a circle
The theorem needs real-valued functions. A point moving round the unit circle as $(\\cos t, \\sin t)$, $0 \\leq t \\leq 2\\pi$, ends where it started, so its average velocity is zero, yet its velocity $(-\\sin t, \\cos t)$ has length $1$ at every moment.]@

The instantaneous rate of change at $c$ equals the average rate of change over the entire interval. Geometrically, there is a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.

The Mean Value Theorem is primarily a theoretical tool. It proves that a function with positive derivative on an interval is increasing. It establishes that two functions with the same derivative differ by a constant. It justifies the connection between antiderivatives and definite integrals in the Fundamental Theorem of Calculus.

The hypotheses are essential. Continuity on the closed interval $[a, b]$ ensures no gaps at the endpoints. Differentiability on the open interval $(a, b)$ ensures the derivative exists at interior points. Functions that violate either condition may fail the conclusion.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Rolle's Theorem`,
    content: `
Rolle's Theorem is the special case of the Mean Value Theorem where $f(a) = f(b)$.

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists at least one point $c \\in (a, b)$ with $f'(c) = 0$.

@academic[formula_callout:Rolle&apos;s Theorem
$$\\text{If } f(a) = f(b), \\text{ then } f'(c) = 0 \\text{ for some } c \\in (a, b)$$
/calculus/formulas#rolles_theorem]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

A function that starts and ends at the same value must have a horizontal tangent somewhere between. If the function rises above its starting value, it must turn around—creating a maximum with zero slope. If it drops below, it must turn upward—creating a minimum. If it stays constant, $f'(x) = 0$ everywhere on the interval.

Rolle's Theorem is often used as a stepping stone in proofs. The Mean Value Theorem itself is proven by applying Rolle's Theorem to an auxiliary function constructed to satisfy $g(a) = g(b)$. It also appears in arguments about the number of roots: between any two roots of $f$, there must be a root of $f'$.

@academic[pitfall,aside:true,width:35%:Skipping the differentiability check
Concluding that $f(x) = |x|$ on $[-1, 1]$ has $f'(c) = 0$ somewhere, because $f(-1) = f(1) = 1$, is wrong: $f'(x)$ is $-1$ or $1$ and never $0$. The corner at $x = 0$ breaks differentiability, so Rolle's Theorem does not apply.
[Read more](!#pitfalls)]@

Each hypothesis has a job in this argument. Equal endpoint values make the secant through the endpoints flat, continuity on $[a, b]$ keeps the graph from jumping over the turning point, and differentiability on $(a, b)$ means the graph has a tangent line at every interior point, including the one where it turns. The sine curve below meets all three on $[0, 2\\pi]$: it is smooth everywhere, and $\\sin 0 = \\sin 2\\pi = 0$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `L'Hôpital's Rule`,
    content: `
If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ produces the indeterminate form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, and if $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ exists (or equals $\\pm\\infty$), then

@academic[formula_callout:L&apos;Hôpital&apos;s Rule
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\quad \\text{for indeterminate forms } \\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}$$
/calculus/formulas#lhôpitals_rule]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The rule replaces a difficult limit of functions with a (potentially simpler) limit of their derivatives. It applies equally when $a$ is finite or $a = \\pm\\infty$.

@academic[pitfall,aside:true,width:35%:Differentiating the fraction as a whole
Applying the quotient rule to $\\frac{\\sin 2x}{x}$ gives $\\frac{2x\\cos 2x - \\sin 2x}{x^2}$, whose limit at $0$ is $0$, not the answer. The rule differentiates top and bottom separately: $\\frac{2\\cos 2x}{1} \\to 2$.
[Read more](!#pitfalls)]@

Critical requirements: the original limit must be an indeterminate form, and the limit of the derivative ratio must exist or be $\\pm\\infty$. If the derivative ratio produces another indeterminate form, L'Hôpital's rule may be applied again. If the derivative ratio oscillates or fails to exist, the rule gives no information—it does not say the original limit fails to exist, only that this method does not resolve it.

Other indeterminate forms—$0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$—can be converted to $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ through algebraic rearrangement, then handled by L'Hôpital's rule. The conversion step varies by form: $0 \\cdot \\infty$ becomes a fraction by moving one factor to the denominator; exponential forms use the identity $f(x)^{g(x)} = e^{g(x) \\ln f(x)}$.

The Mean Value Theorem, Rolle's Theorem, and L'Hôpital's rule are the three theorems on this page that govern derivative behavior on intervals. The table below sets them side by side across their hypotheses, conclusions, and the role each plays in practice.
`,
    before: ``,
    after: ``,
    link: '',
  },
  overview: {
    title: `All Rules and Theorems at a Glance`,
    content: `
The ten formulas above split naturally into seven algebraic rules — constant, constant multiple, power, sum/difference, product, quotient, chain — and three interval theorems — Mean Value, Rolle&apos;s, and L&apos;Hôpital&apos;s. The table below collects every formula introduced on this page as a single reference card, with the key condition or note that governs its use.
`,
    before: ``,
    after: ``,
    link: '',
  },
  pitfalls: {
    title: `Common Pitfalls`,
    content: `
Seven mistakes cause most wrong answers when these rules and theorems are used. Five of them are marked where they happen in the sections above; the other two are the ones the product rule and quotient rule sections warn against. Here each is worked through in full, with the wrong and the right working side by side.

**Treating a constant as a variable**

A constant that is written with a letter or a power, such as $\\pi^2$, $e^3$ or $\\ln 5$, is differentiated as if the letter were the variable.

Wrong working: by the power rule, $\\dfrac{d}{dx}[\\pi^2] = 2\\pi$.

Right working: $\\pi^2 \\approx 9.87$ contains no $x$, so $f(x) = \\pi^2$ is a constant function, and by the constant rule $\\dfrac{d}{dx}[\\pi^2] = 0$.

Why it happens: the expression has the shape $x^n$ with $\\pi$ in the place of $x$, and the power rule is applied to the shape before anyone asks which symbol is the variable.

How to check: ask whether the value changes when $x$ changes. The graph of $y = \\pi^2$ is a horizontal line at a height of about $9.87$, and its slope is $0$ everywhere.

**Moving a negative exponent toward zero**

With a negative exponent, one is subtracted in the wrong direction: the exponent is moved toward zero instead of away from it.

Wrong working: $\\dfrac{d}{dx}[x^{-2}] = -2x^{-1} = -\\dfrac{2}{x}$.

Right working: the new exponent is $-2 - 1 = -3$, so $\\dfrac{d}{dx}[x^{-2}] = -2x^{-3} = -\\dfrac{2}{x^3}$.

Why it happens: for positive exponents, one less always means closer to zero, as in $3 \\to 2$. The habit is carried over to $-2$, where one less is $-3$.

How to check: compare with a difference quotient at one point. For $f(x) = \\dfrac{1}{x^2}$, $\\dfrac{f(2.01) - f(1.99)}{0.02} \\approx -0.25$, which matches $-\\dfrac{2}{2^3} = -0.25$ and not $-\\dfrac{2}{2} = -1$.

**Multiplying the derivatives of the factors**

The derivative of a product is taken as the product of the derivatives, $(fg)' = f'g'$, following the pattern of the sum rule.

Wrong working: for $x^2 \\cdot x^3$, $(x^2)' \\cdot (x^3)' = 2x \\cdot 3x^2 = 6x^3$.

Right working: the product rule gives $2x \\cdot x^3 + x^2 \\cdot 3x^2 = 2x^4 + 3x^4 = 5x^4$.

Why it happens: the sum rule lets each term be differentiated on its own, and it seems natural for products to work the same way.

How to check: simplify first where possible. Here $x^2 \\cdot x^3 = x^5$, and the power rule gives $5x^4$ directly; $6x^3$ does not match.

**Reversing the quotient rule numerator**

The two terms in the numerator of the quotient rule are written in the wrong order, $fg' - f'g$, which flips the sign of the whole derivative.

Wrong working: for $\\dfrac{x}{x + 1}$, $\\dfrac{x \\cdot 1 - 1 \\cdot (x + 1)}{(x + 1)^2} = -\\dfrac{1}{(x + 1)^2}$.

Right working: $\\dfrac{1 \\cdot (x + 1) - x \\cdot 1}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$.

Why it happens: in the product rule the two terms are added, so their order does not matter, and the quotient rule is remembered as the same two terms with a minus sign between them.

How to check: look at the sign. For $x > -1$ the function $\\dfrac{x}{x + 1}$ increases, from $0$ at $x = 0$ to $\\dfrac{1}{2}$ at $x = 1$, so its derivative must be positive there.

**Leaving out the inner derivative**

In a composite function only the outer function is differentiated, and the derivative of the inner function is never multiplied in.

Wrong working: $\\dfrac{d}{dx}[\\sin(x^2)] = \\cos(x^2)$.

Right working: the outer function is $\\sin u$ with $u = x^2$. Its derivative $\\cos u$ is evaluated at $u = x^2$ and multiplied by $\\dfrac{du}{dx} = 2x$, so $\\dfrac{d}{dx}[\\sin(x^2)] = 2x\\cos(x^2)$.

Why it happens: the derivative of $\\sin$ is known by heart, and the inner $x^2$ is read as part of the argument rather than as a function with its own rate of change.

How to check: compare with a difference quotient at one point. At $x = 1$, $\\dfrac{\\sin(1.01^2) - \\sin(0.99^2)}{0.02} \\approx 1.08$, which matches $2\\cos 1 \\approx 1.08$ and not $\\cos 1 \\approx 0.54$.

**Skipping the differentiability check**

Rolle's Theorem is applied as soon as $f(a) = f(b)$, without checking that $f$ is differentiable at every point of $(a, b)$.

Wrong working: $f(x) = |x|$ on $[-1, 1]$ has $f(-1) = f(1) = 1$, so there is some $c$ in $(-1, 1)$ with $f'(c) = 0$.

Right working: $f'(x) = -1$ for $x < 0$, $f'(x) = 1$ for $x > 0$, and $f'(0)$ does not exist. Differentiability fails at $0$, so the theorem does not apply, and in fact no $c$ has $f'(c) = 0$.

Why it happens: the equal endpoint values are the condition that stands out, and continuity is easy to see on a graph; a single corner is easy to overlook.

How to check: look for corners, cusps and vertical tangents inside the interval. The graph of $|x|$ has a corner at $0$, and its lowest point is a sharp point, not a horizontal tangent.

**Differentiating the fraction as a whole**

L'Hôpital's rule is applied by differentiating the quotient $\\dfrac{f}{g}$ with the quotient rule, instead of taking the ratio of the separate derivatives $\\dfrac{f'}{g'}$.

Wrong working: for $\\lim_{x \\to 0} \\dfrac{\\sin 2x}{x}$, $\\left(\\dfrac{\\sin 2x}{x}\\right)' = \\dfrac{2x\\cos 2x - \\sin 2x}{x^2}$, and this tends to $0$ as $x \\to 0$.

Right working: differentiate the top and the bottom separately. $\\lim_{x \\to 0} \\dfrac{(\\sin 2x)'}{(x)'} = \\lim_{x \\to 0} \\dfrac{2\\cos 2x}{1} = 2$.

Why it happens: differentiating a fraction has always meant the quotient rule, and the rule's wording, the limit of the derivatives, is read the same way.

How to check: evaluate the original quotient at a small $x$. At $x = 0.01$, $\\dfrac{\\sin 0.02}{0.01} \\approx 1.9999$, close to $2$ and far from $0$.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `Replacing the Limit with Algebra`,
  content: `
The [limit definition](!/calculus/derivatives) of the derivative is precise but impractical for routine computation. Evaluating $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$ for every function and every point would make calculus unworkable. Differentiation rules extract patterns from the definition and package them into algebraic formulas that apply to entire classes of functions.

The basic rules—power, sum, product, quotient, chain—handle nearly all explicit functions encountered in practice. Each rule is proven once from the limit definition, then used without returning to it. Together they reduce differentiation to mechanical manipulation, freeing attention for the harder question of what the derivative means in context.

Beyond computational rules, three theorems govern the behavior of derivatives on intervals. The Mean Value Theorem connects instantaneous and average rates of change. Rolle's Theorem guarantees horizontal tangents under symmetric conditions. L'Hôpital's rule turns indeterminate [limits](!/calculus/limits/evaluating) into derivative computations.
`
};




// FAQ pass: cut four case-A questions — the basic-rules survey plus power,
// chain and Mean Value Theorem, each with its own rule-named h2. Kept the
// L'Hôpital conditions and the product-vs-quotient comparison, both extended;
// invented two from caveats buried in closing paragraphs.
const faqQuestions = {
  obj1: {
    question: "When can you use L'Hôpital's rule?",
    answer: "Only when the limit is already an indeterminate form of type 0/0 or ∞/∞, and the limit of the derivative ratio exists or is ±∞. Applying it to a determinate limit produces wrong answers. If the derivative ratio yields another indeterminate form you may apply the rule again; if it oscillates or fails to exist, the rule simply gives no information — it does not show the original limit fails.",
    sectionId: "10"
  },
  obj2: {
    question: "Can you use L'Hôpital's rule on 0 × ∞ or ∞ − ∞?",
    answer: "Not directly — the rule accepts only 0/0 and ∞/∞. The other forms have to be rewritten as a quotient first. For 0 · ∞, move one factor into the denominator; for ∞ − ∞, combine the terms into a single fraction. The exponential forms 0⁰, 1^∞ and ∞⁰ go through the identity f(x)^g(x) = e^(g(x)·ln f(x)), which converts them to 0 · ∞.",
    sectionId: "10"
  },
  obj3: {
    question: "What is the difference between the product rule and the quotient rule?",
    answer: "The product rule adds two terms: (fg)′ = f′g + fg′. The quotient rule subtracts, then divides: (f/g)′ = (f′g − fg′)/g². Order matters in that numerator — it is f′g − fg′, never fg′ − f′g, because subtraction is not commutative. The quotient rule follows from the product rule applied to f · g⁻¹, so the two are not independent.",
    sectionId: "6"
  },
  obj4: {
    question: "How do you apply the chain rule to three nested functions?",
    answer: "Work from the outside in, with each layer contributing one factor. For f(g(h(x))) the derivative is f′(g(h(x))) · g′(h(x)) · h′(x): differentiate the outermost function at its argument, multiply by the derivative of the next layer at its argument, and continue until the innermost function is reached. Any depth of nesting follows the same pattern.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Derivative Rules",
    "description": "Complete guide to differentiation rules: power, product, quotient, chain rules plus Mean Value Theorem, Rolle's Theorem, and L'Hôpital's rule with proofs and examples.",
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
      "name": "Derivative Rules"
    },
    "teaches": [
      "Power rule, constant rule, and constant multiple rule",
      "Sum, difference, product, and quotient rules",
      "Chain rule for composite functions",
      "Mean Value Theorem and its applications",
      "Rolle's Theorem as a special case of MVT",
      "L'Hôpital's rule for indeterminate limits"
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
        "name": "Derivative Rules",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      }
    ]
  }
}



 


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpLhopital = { kind: 'pieces', svgTitle: 'sin 2x and x both vanish at 0 with slopes 2 and 1, so sin 2x / x tends to 2', xRange: [-1.6, 1.6], yRange: [-1.5, 1.5],
    pieces: [
      { fn: (x) => 2 * x, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[-0.72, 0.72]] },
      { fn: (x) => Math.sin(2 * x), from: -1.6, to: 1.6, ends: [null, null], color: 'f' },
      { fn: (x) => x, from: -1.5, to: 1.5, ends: [null, null], color: 'g' },
    ],
    points: [{ x: 0.3, y: Math.sin(0.6) }, { x: 0.3, y: 0.3 }],
    vlines: [{ x: 0.3 }],
    notes: [{ x: -1.55, y: 1.3, text: 'slopes at 0: 2 and 1', pos: 'e', color: 'r' }, { x: 0.4, y: -0.45, text: 'x = 0.3: 0.565 / 0.3 ≈ 1.88', pos: 'e' }, { x: 0.4, y: -0.8, text: 'blue: sin 2x', pos: 'e', color: 'f' }, { x: 0.4, y: -1.05, text: 'navy: y = x', pos: 'e', color: 'g' }, { x: 0.4, y: -1.3, text: 'dashed: y = 2x, tangent at 0', pos: 'e', color: 'r' }],
    caption: 'Near 0 the ratio of heights tends to the ratio of slopes: 2 / 1 = 2' };
  const prBox = (x0, x1, y0, y1, c) => [
    { fn: () => y0, from: x0, to: x1, ends: [null, null], color: c }, { fn: () => y1, from: x0, to: x1, ends: [null, null], color: c },
    { fn: (x) => y0 + (x - x0) * 1e6, from: x0, to: x0 + (y1 - y0) / 1e6, ends: [null, null], color: c },
    { fn: (x) => y0 + (x1 - x) * 1e6, from: x1 - (y1 - y0) / 1e6, to: x1, ends: [null, null], color: c }];
  const fpProductRect = { kind: 'pieces', svgTitle: 'Rectangle with sides f and g grown by small steps: the new area is f times g plus two strips g times delta f and f times delta g plus a tiny corner', xRange: [-0.3, 4.6], yRange: [-0.3, 4.1], xStep: 20, yStep: 20, xLetter: ' ', yLetter: ' ',
    pieces: [].concat(prBox(0, 3, 0, 2, 'g'), prBox(3, 3.6, 0, 2, 'r'), prBox(0, 3, 2, 2.5, 'f'), prBox(3, 3.6, 2, 2.5, 'g')),
    notes: [{ x: 1.5, y: 1, text: 'f · g', pos: 'n', color: 'g' }, { x: 3.3, y: 1, text: 'g·Δf', pos: 'n', color: 'r' }, { x: 1.5, y: 2.25, text: 'f · Δg', pos: 'e', color: 'f' }, { x: 3.65, y: 2.25, text: 'Δf · Δg', pos: 'e', color: 'g' },
      { x: 1.5, y: 0, text: 'f', pos: 's', color: 'g' }, { x: 0, y: 1, text: 'g', pos: 'w', color: 'g' },
      { x: 0.15, y: 3.85, text: 'Δ(fg) = g · Δf + f · Δg + Δf · Δg', pos: 'e' }, { x: 0.15, y: 3.45, text: 'divide by Δx and let Δx → 0: the corner term vanishes', pos: 'e' }, { x: 0.15, y: 3.05, text: '(fg)′ = f′g + fg′', pos: 'e', color: 'r' }],
    caption: 'Each factor grows while the other stays fixed' };
  const demoUnits = {
    mvt: demoUnitFrame({
      svg: functionMVTDiagrams.quadratic,
      caption: 'Secant over [a, b] and the parallel tangent at c',
      text: 'The dashed line joins the endpoints of the interval and has slope (f(b) &#8722; f(a))/(b &#8722; a); the solid tangent at the marked c has the same slope, so the two lines are parallel. The theorem promises such a c on any interval where the function is smooth, and for the parabola there is exactly one. Change the interval and watch c move to keep the tangent parallel on the',
      href: '/calculus/visual-tools/mean-value-theorem',
      linkText: 'mean value theorem visualizer',
    }),
    rolleSine: demoUnitFrame({
      svg: functionMVTDiagrams.sine,
      caption: 'Rolle&#8217;s theorem on a full period of sine',
      text: 'f(x) = sin x on [0, 2&#960;] starts and ends at 0, so the secant through the endpoints is flat. Rolle&#8217;s theorem promises at least one point inside where the tangent is flat too, and here there are two: cos c = 0 at c = &#960;/2, the peak, and c = 3&#960;/2, the trough. The curve rises above its starting height and has to turn back down, and then it dips below and has to turn back up. Try other intervals on the',
      href: '/calculus/visual-tools/mean-value-theorem',
      linkText: 'mean value theorem visualizer',
    }),
    lhopital: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLhopital),
      caption: 'Why the derivatives decide 0/0',
      text: 'Take lim sin(2x)/x as x &#8594; 0. Both curves pass through the origin, so the quotient starts as 0/0. Close to 0 each curve is almost its tangent line: sin 2x is almost 2x and x is exactly x. The ratio of the heights is then almost the ratio of the slopes, 2/1. At x = 0.3 the heights are 0.565 and 0.3, a ratio of 1.88, and the ratio closes in on 2 as x shrinks.',
    }),
    productRect: demoUnitFrame({
      svg: renderFunctionPlotV4(fpProductRect),
      caption: 'The product rule as a growing rectangle',
      text: 'Think of f &#183; g as the area of a rectangle with sides f and g. When x moves a little, f grows by &#916;f and g grows by &#916;g. The new area adds a strip g &#183; &#916;f on the right, a strip f &#183; &#916;g on top, and a small corner &#916;f &#183; &#916;g. Dividing by &#916;x, the strips give f&#8242;g and fg&#8242;, while the corner, a product of two small changes, shrinks to nothing.',
    }),
  };

  const derivRuleOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Seven rules and three theorems',
    preface: 'The page collects seven algebraic rules for computing derivatives and three theorems about derivatives on an interval.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Rules compute, theorems reason',
    conclusion: 'The rules turn derivatives into algebra; the theorems connect a derivative to the behaviour of the function across an interval.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Derivative rules and theorems', children: [
        { id: 'rules', name: 'Algebraic rules', children: [
          { id: 'c', name: 'Constant', example: "f′ = 0" },
          { id: 'cm', name: 'Constant multiple', example: "(cf)′ = cf′" },
          { id: 'p', name: 'Power', example: 'nxⁿ⁻¹' },
          { id: 's', name: 'Sum and difference' },
          { id: 'prod', name: 'Product', example: "f′g + fg′" },
          { id: 'q', name: 'Quotient', def: 'needs g ≠ 0' },
          { id: 'ch', name: 'Chain', example: "f′(g)·g′" },
        ] },
        { id: 'thm', name: 'Interval theorems', children: [
          { id: 'mvt', name: 'Mean Value Theorem' },
          { id: 'rolle', name: "Rolle's theorem", def: 'special case of the MVT with f(a) = f(b)' },
          { id: 'lh', name: "L'Hôpital's rule", def: '0/0 and ∞/∞ forms' },
        ] },
      ] },
    ],
  };

  return {
  props:{
    derivRuleOutline,
    demoUnits,
    sectionsContent,
    introContent,
    theoremsTable,
    overviewTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Derivative Rules: Formulas & Theorems | Learn Math Class",
      description: "Complete guide to differentiation rules: power, product, quotient, chain rules plus Mean Value Theorem, Rolle's Theorem, and L'Hôpital's rule with proofs and examples.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives",
      name: "Derivative Rules"
    },
  }
}
   }

export default function RulesPage({derivRuleOutline, 
  seoData,
  sectionsContent,
  introContent,
  theoremsTable,
  overviewTable,
  faqQuestions,
  schemas, demoUnits
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
                  <div key={'unit-productRect'} dangerouslySetInnerHTML={{ __html: demoUnits.productRect }} />,
          `That is why the product rule has two terms and not f′g′: the corner is the only place both factors change.`,
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
                  <div key={'unit-mvt'} dangerouslySetInnerHTML={{ __html: demoUnits.mvt }} />,
          `Somewhere the instantaneous rate equals the average rate: that is the whole theorem, and Rolle&#8217;s is its level special case.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'unit-rolleSine'} dangerouslySetInnerHTML={{ __html: demoUnits.rolleSine }} />,
          `Between two roots of f there is always a root of f′: here between 0 and π lies π/2.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'unit-lhopital'} dangerouslySetInnerHTML={{ __html: demoUnits.lhopital }} />,
          `L’Hôpital’s rule compares slopes: lim f/g = lim f′/g′ = 2 cos 0 / 1 = 2.`,
          <div key={'theorems-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: theoremsTable}}/>,
        ]
    },
    {
        id:'overview',
        title:sectionsContent.overview.title,
        link:sectionsContent.overview.link,
        content:[
          sectionsContent.overview.content,
          <div key={'overview-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: overviewTable}}/>,
          <DiagramFrame
            key={'overview-diagram'}
            id="derivative-rules-outline"
            title="Derivative rules and theorems"
            source="/calculus/derivatives/rules"
          >
            <TaxonomyOutline data={derivRuleOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
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
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Derivative Rules FAQ`,
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
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Derivative Rules</h1>
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