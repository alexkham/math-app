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
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import polyEqIneqNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/algebra-polynomials-equations-inequalities'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import TheoremCard from '@/app/components/infographics/TheoremCard/TheoremCard'



export async function getStaticProps(){
const keyWords = [
  "polynomial theorems",
  "remainder theorem",
  "factor theorem",
  "rational root theorem",
  "Vieta's formulas",
  "Descartes rule of signs",
  "fundamental theorem of algebra",
  "integer root theorem",
  "polynomial upper lower bounds",
  "polynomial division remainder",
  "find rational roots",
  "sum product of roots",
  "polynomial root theorems",
  "how to use factor theorem",
  "polynomial rules algebra"
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

  // obj10 — aggregation: upper and lower bound tests via synthetic division
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Bound type</th>
      <th style="${tableHeaders.aggregation}">Condition on the synthetic-division row</th>
      <th style="${tableHeaders.aggregation}">Example &nbsp;(P(x) = x<sup>3</sup> − 4x<sup>2</sup> + x + 6)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Upper bound &nbsp;(c &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every entry in the bottom row is non-negative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c = 5 &nbsp;→&nbsp; row 1, 1, 6, 36 &nbsp;(all ≥ 0) &nbsp;⇒&nbsp; 5 is an upper bound</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Lower bound &nbsp;(c &lt; 0)</td>
      <td style="padding: 12px 15px; color: #34495e;">entries alternate in sign &nbsp;(zeros count as either sign)</td>
      <td style="padding: 12px 15px; color: #34495e;">c = −2 &nbsp;→&nbsp; row 1, −6, 13, −20 &nbsp;(alternating) &nbsp;⇒&nbsp; −2 is a lower bound</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — aggregation: Vieta's formulas for monic quadratic and cubic
  const obj12Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Monic polynomial</th>
      <th style="${tableHeaders.aggregation}">Sum of roots</th>
      <th style="${tableHeaders.aggregation}">Sum of pairwise products</th>
      <th style="${tableHeaders.aggregation}">Product of all roots</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x<sup>2</sup> + bx + c &nbsp;(roots r<sub>1</sub>, r<sub>2</sub>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r<sub>1</sub> + r<sub>2</sub> = −b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r<sub>1</sub> · r<sub>2</sub> = c</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">x<sup>3</sup> + bx<sup>2</sup> + cx + d &nbsp;(roots r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub>)</td>
      <td style="padding: 12px 15px; color: #34495e;">r<sub>1</sub> + r<sub>2</sub> + r<sub>3</sub> = −b</td>
      <td style="padding: 12px 15px; color: #34495e;">r<sub>1</sub>r<sub>2</sub> + r<sub>1</sub>r<sub>3</sub> + r<sub>2</sub>r<sub>3</sub> = c</td>
      <td style="padding: 12px 15px; color: #34495e;">r<sub>1</sub> · r<sub>2</sub> · r<sub>3</sub> = −d</td>
    </tr>
  </tbody>
</table>
`

  // obj13 — aggregation: common mistakes catalogued by theorem
  const obj13Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Theorem</th>
      <th style="${tableHeaders.aggregation}">Common mistake</th>
      <th style="${tableHeaders.aggregation}">Correct version</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Remainder vs Factor</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">treating (x − c) as a &quot;partial factor&quot; when P(c) ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Factor Theorem requires P(c) = 0 exactly; otherwise P(c) is just the remainder</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational Root Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">forgetting negative candidates, or skipping fractional candidates when a<sub>n</sub> ≠ 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">include ± p ⁄ q for every p | a<sub>0</sub> and every q | a<sub>n</sub></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Descartes&apos; Rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">computing P(−x) incorrectly (changing wrong terms)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">only odd-powered terms flip sign; even-powered terms stay the same</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Vieta&apos;s formulas</td>
      <td style="padding: 12px 15px; color: #34495e;">sign errors — writing sum as +b or product as +d</td>
      <td style="padding: 12px 15px; color: #34495e;">k-th symmetric polynomial = (−1)<sup>k</sup> · (coefficient of x<sup>n−k</sup>); alternating signs</td>
    </tr>
  </tbody>
</table>
`

  // obj14 — summary: capstone master toolkit of all eight theorems on the page
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Theorem</th>
      <th style="${tableHeaders.summary}">What it does</th>
      <th style="${tableHeaders.summary}">When to use</th>
      <th style="${tableHeaders.summary}">Output</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Remainder Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">replaces division by (x − c) with a single evaluation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find a remainder without long division</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">remainder = P(c)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Factor Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">links roots to linear factors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">verify a factor, or build polynomials from known roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x − c) is a factor &nbsp;⟺&nbsp; P(c) = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational Root Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">restricts rational roots to ± p ⁄ q with p | a<sub>0</sub>, q | a<sub>n</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomial has integer coefficients; search for rational roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">finite candidate list</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Integer Root Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">RRT simplified: all rational roots are integers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">monic polynomial &nbsp;(a<sub>n</sub> = 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">candidates are divisors of a<sub>0</sub> only</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Descartes&apos; Rule of Signs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">counts sign changes in P(x) and P(−x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">estimate count of positive and negative real roots before solving</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">upper bound on positive / negative roots &nbsp;(or less by an even number)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Upper / Lower Bound Test</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">brackets the interval containing all real roots via synthetic division</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine with RRT to eliminate candidates outside the bracket</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">interval [c<sub>low</sub>, c<sub>high</sub>] containing every real root</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fundamental Theorem of Algebra</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">guarantees every degree-n polynomial has exactly n roots over ℂ &nbsp;(with multiplicity)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">confirm the total number of roots to look for</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">existence guarantee; complex roots of real polynomials come in conjugate pairs</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Vieta&apos;s Formulas</td>
      <td style="padding: 12px 15px; color: #34495e;">express symmetric functions of roots from coefficients alone</td>
      <td style="padding: 12px 15px; color: #34495e;">verify a factorization, or work with sums/products of roots without finding them</td>
      <td style="padding: 12px 15px; color: #34495e;">root–coefficient identities &nbsp;(sum, pairwise products, full product)</td>
    </tr>
  </tbody>
</table>
`

//     const sectionsContent={

  
// obj0: {
//   title: `Key Terms`,
//   content: `
// ## Division Theorems
 
// - [Remainder Theorem](!/algebra/definitions#remainder_theorem) — remainder of $P(x) \\div (x-c)$ is $P(c)$
// - [Factor Theorem](!/algebra/definitions#factor_theorem) — $(x-c)$ divides $P(x)$ exactly when $P(c) = 0$
 
// ## Root-Finding Theorems
 
// - [Rational Root Theorem](!/algebra/definitions#rational_root_theorem) — if $p/q$ is a rational root, $p \\mid a_0$ and $q \\mid a_n$
// - [Descartes' Rule of Signs](!/algebra/definitions#descartes'_rule_of_signs) — sign changes bound the count of positive and negative roots
// - [Fundamental Theorem of Algebra](!/algebra/definitions#fundamental_theorem_of_algebra) — every degree-$n$ polynomial has exactly $n$ complex roots
 
// ## Coefficient-Root Relations
 
// - [Vieta's Formulas](!/algebra/definitions#vieta's_formulas) — root sums and products from coefficients alone
// - [Root (of a Polynomial)](!/algebra/definitions#root_(of_a_polynomial)) — the values these theorems locate
// - [Synthetic Division](!/algebra/definitions#synthetic_division) — the computational tool for testing candidates

// ## Formulas Used on This Page

// - [Remainder Theorem](!/algebra/formulas#remainder_theorem) — $P(x) = (x - c) \\cdot Q(x) + P(c)$
// - [Factor Theorem](!/algebra/formulas#factor_theorem) — $(x - c)$ is a factor of $P(x) \\iff P(c) = 0$
// - [Rational Root Theorem](!/algebra/formulas#rational_root_theorem) — if $\\frac{p}{q}$ is a root: $p \\mid a_0$ and $q \\mid a_n$

// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },

//     obj1: {
//   title: `The Remainder Theorem`,
//   content: `When a polynomial $P(x)$ is divided by a linear binomial $(x - c)$, the remainder is a constant — and that constant equals $P(c)$, the value of the polynomial evaluated at $x = c$.

// This means the remainder can be found without performing any division at all. To find the remainder when $P(x) = x^3 - 4x + 2$ is divided by $(x - 3)$, simply compute $P(3) = 27 - 12 + 2 = 17$. The remainder is $17$.

// The theorem applies to any polynomial and any value of $c$. If $P(x) = 2x^4 - x^2 + 5$ and the divisor is $(x + 1)$, read $(x + 1)$ as $(x - (-1))$ and evaluate $P(-1) = 2(1) - 1 + 5 = 6$. The remainder is $6$, confirmed instantly without setting up [long division or synthetic division](!/algebra/polynomials/operations).`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj2: {
//   title: `Why the Remainder Theorem Works`,
//   content: `The proof follows directly from the division algorithm. Dividing $P(x)$ by $(x - c)$ produces a quotient $Q(x)$ and a remainder $R$:

// $$P(x) = (x - c) \\cdot Q(x) + R$$

// Because the divisor $(x - c)$ has degree $1$, the remainder $R$ must have degree less than $1$ — meaning $R$ is a constant, independent of $x$.

// Now substitute $x = c$ into both sides:

// $$P(c) = (c - c) \\cdot Q(c) + R = 0 \\cdot Q(c) + R = R$$

// The factor $(c - c)$ annihilates the quotient term, leaving $P(c) = R$. Evaluation and division are not separate operations — evaluating $P$ at $c$ is equivalent to extracting the remainder of division by $(x - c)$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj3: {
//   title: `The Factor Theorem`,
//   content: `The Factor Theorem is a direct consequence of the Remainder Theorem: $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.

// The logic is immediate. If the remainder when dividing by $(x - c)$ is zero, then $P(x) = (x - c) \\cdot Q(x)$ with no leftover term — so $(x - c)$ divides $P(x)$ exactly. Conversely, if $(x - c)$ is a factor, then $P(c) = (c - c) \\cdot Q(c) = 0$.

// This creates a bridge between [roots](!/algebra/polynomials/roots) and [factors](!/algebra/polynomials/factoring). The value $c$ is a root of $P(x)$ precisely when $(x - c)$ is a factor of $P(x)$. Finding one gives the other automatically.

// To test whether $(x - 2)$ is a factor of $x^3 - 6x^2 + 11x - 6$, evaluate $P(2) = 8 - 24 + 22 - 6 = 0$. Since the result is zero, $(x - 2)$ is indeed a factor, and $2$ is a root.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj4: {
//   title: `Using the Factor Theorem`,
//   content: `The Factor Theorem works in both directions — it can verify suspected factors and it can build polynomials from known roots.

// To test potential roots, substitute each candidate into $P(x)$ and check for zero. For $P(x) = x^3 - 7x + 6$, testing $x = 1$ gives $P(1) = 1 - 7 + 6 = 0$, confirming that $(x - 1)$ is a factor. Dividing out this factor via [synthetic division](!/algebra/polynomials/operations) yields the quotient $x^2 + x - 6$, which factors further as $(x + 3)(x - 2)$. The complete factorization is $(x - 1)(x + 3)(x - 2)$.

// To construct a polynomial from its roots, reverse the process. If a cubic polynomial has roots $1$, $-2$, and $4$, the Factor Theorem guarantees that $(x - 1)$, $(x + 2)$, and $(x - 4)$ are all factors. Their product gives:

// $$(x - 1)(x + 2)(x - 4) = x^3 - 3x^2 - 6x + 8$$

// Any nonzero scalar multiple $a(x - 1)(x + 2)(x - 4)$ shares the same roots, so the polynomial is determined up to a constant factor unless additional information — such as a specific function value — pins it down.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj5: {
//   title: `The Rational Root Theorem`,
//   content: `For polynomials with integer coefficients, the Rational Root Theorem restricts which rational numbers can possibly be roots. If $P(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ has integer coefficients and $\\frac{p}{q}$ is a rational root expressed in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$.

// This transforms an infinite search into a finite one. Instead of testing every rational number, only the fractions formed by divisors of $a_0$ over divisors of $a_n$ need to be checked.

// For $P(x) = 2x^3 + x^2 - 13x + 6$, the constant term is $6$ with divisors $\\pm 1, \\pm 2, \\pm 3, \\pm 6$, and the leading coefficient is $2$ with divisors $\\pm 1, \\pm 2$. The candidate list is:

// $$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$$

// Twelve candidates replace infinitely many possibilities. Each can be tested by substitution or synthetic division until all rational roots are found or the list is exhausted.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj6: {
//   title: `Applying the Rational Root Theorem`,
//   content: `The theorem produces a candidate list, but the actual work lies in testing each candidate efficiently. A systematic approach avoids redundant effort.

// Start by listing all divisors of the constant term $a_0$ — these are the possible values of $p$. Then list all divisors of the leading coefficient $a_n$ — these are the possible values of $q$. Form every fraction $\\pm \\frac{p}{q}$ and reduce to lowest terms to eliminate duplicates.

// For $2x^3 + x^2 - 13x + 6$, begin testing with the simplest candidates. $P(1) = 2 + 1 - 13 + 6 = -4$, so $1$ is not a root. $P(2) = 16 + 4 - 26 + 6 = 0$, so $2$ is a root. By the Factor Theorem, $(x - 2)$ is a factor. Synthetic division gives a quotient of $2x^2 + 5x - 3$, which factors as $(2x - 1)(x + 3)$.

// The complete factorization is $(x - 2)(2x - 1)(x + 3)$, giving roots $2$, $\\frac{1}{2}$, and $-3$ — all members of the candidate list.

// Testing via synthetic division is often more efficient than direct substitution, since each test simultaneously produces the quotient polynomial if the candidate turns out to be a root.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj7: {
//   title: `Limitations of the Rational Root Theorem`,
//   content: `The Rational Root Theorem identifies only rational roots. Irrational roots and [complex roots](!/complex-numbers/equations-polynomials) lie entirely outside its reach.

// The polynomial $x^2 - 2$ illustrates this clearly. Its constant term is $-2$ and its leading coefficient is $1$, producing candidates $\\pm 1, \\pm 2$. Testing each: $P(1) = -1$, $P(-1) = -1$, $P(2) = 2$, $P(-2) = 2$. None equals zero. The actual roots are $\\pm\\sqrt{2}$, both irrational — invisible to the theorem.

// A polynomial may have no rational roots at all. The polynomial $x^4 + x^3 + x^2 + x + 1$ has integer coefficients and candidates $\\pm 1$, but neither works. All four of its roots are complex, and no amount of rational testing will find them.

// The theorem is best understood as a first filter, not a complete solution. When it finds roots, synthetic division reduces the polynomial's degree, potentially making the remaining roots accessible through the quadratic formula or other methods. When it finds none, it confirms that the roots are irrational or complex and signals the need for different tools.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj8: {
//   title: `The Integer Root Theorem`,
//   content: `When the leading coefficient of a polynomial is $1$ — a monic polynomial — the Rational Root Theorem simplifies considerably. Every rational root $\\frac{p}{q}$ has $q$ dividing $1$, which forces $q = \\pm 1$, which means $\\frac{p}{q}$ is an integer. So all rational roots of a monic polynomial are integers, and they must divide the constant term.

// For $x^3 - 6x^2 + 11x - 6$, the only candidates are the divisors of $-6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. No fractions need to be considered.

// Testing: $P(1) = 1 - 6 + 11 - 6 = 0$, so $1$ is a root. Dividing out $(x - 1)$ leaves $x^2 - 5x + 6 = (x - 2)(x - 3)$. All three roots — $1$, $2$, $3$ — are integers dividing $6$, exactly as the theorem predicts.

// This simplification makes monic polynomials particularly approachable. The candidate list is shorter, the candidates are easier to test, and the search is faster. Recognizing that a polynomial is monic before beginning the root search saves unnecessary work with fractions.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj9: {
//   title: `Descartes' Rule of Signs`,
//   content: `Descartes' Rule of Signs estimates the number of positive and negative real roots of a polynomial by counting sign changes in its coefficients.

// To count positive real roots, write $P(x)$ in standard form and count how many times the sign of the coefficients changes from one term to the next. For $P(x) = x^3 - 2x^2 - x + 2$, the coefficient signs are $+, -, -, +$. The sign changes twice: from $+$ to $-$ and from $-$ to $+$. The polynomial has either $2$ or $0$ positive real roots — the actual count equals the number of sign changes or less by an even number.

// To count negative real roots, apply the same procedure to $P(-x)$. Substituting $-x$ gives $P(-x) = -x^3 - 2x^2 + x + 2$, with signs $-, -, +, +$. One sign change occurs, so the polynomial has exactly $1$ negative real root.

// The rule does not identify the roots or specify which of the possible counts is correct. For $P(x) = x^3 - 2x^2 - x + 2$, the actual roots are $1$, $2$, and $-1$ — two positive and one negative, consistent with the prediction. But the rule alone cannot distinguish between $2$ positive roots and $0$ positive roots without further analysis.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj10: {
//   title: `Upper and Lower Bounds`,
//   content: `Synthetic division provides a way to establish bounds on the real roots of a polynomial, narrowing the interval where roots can exist.

// The upper bound test works as follows: divide $P(x)$ by $(x - c)$ where $c > 0$ using synthetic division. If every entry in the bottom row is non-negative (positive or zero), then $c$ is an upper bound — no real root of $P(x)$ exceeds $c$.

// The lower bound test is similar but uses a negative value of $c$. Divide $P(x)$ by $(x - c)$ where $c < 0$. If the entries in the bottom row alternate in sign (with zeros counting as either sign), then $c$ is a lower bound — no real root is less than $c$.

// For $P(x) = x^3 - 4x^2 + x + 6$, synthetic division by $(x - 5)$ produces the row $1, 1, 6, 36$ — all non-negative, so $5$ is an upper bound. Synthetic division by $(x + 2)$, meaning $c = -2$, produces $1, -6, 13, -20$ — the signs alternate, so $-2$ is a lower bound. All real roots of this polynomial lie in the interval $[-2, 5]$.

// These bounds are especially useful when combined with the Rational Root Theorem, eliminating candidates that fall outside the established range before any testing begins.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj11: {
//   title: `The Fundamental Theorem of Algebra`,
//   content: `The Fundamental Theorem of Algebra makes a sweeping guarantee: every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in the [complex numbers](!/complex-numbers), counted with multiplicity.

// A quadratic has $2$ roots. A cubic has $3$. A degree-$10$ polynomial has $10$. No polynomial of positive degree can avoid having roots — the theorem eliminates the possibility of a polynomial that simply never equals zero.

// Some roots may repeat. The polynomial $x^3 - 3x^2 + 3x - 1 = (x - 1)^3$ has degree $3$ but only one distinct root, $x = 1$, appearing with multiplicity $3$. The count of $n$ roots includes these repetitions.

// For polynomials with real coefficients, an additional constraint applies: complex roots come in conjugate pairs. If $a + bi$ is a root, then $a - bi$ is also a root. This means a real polynomial of odd degree must have at least one real root — an odd number of roots cannot be paired off entirely into conjugate pairs.

// The theorem guarantees existence but offers no method for finding roots. For degree $5$ and above, no general formula in radicals exists — a result proven by Abel and Galois. Numerical methods, the Rational Root Theorem, and other tools from this page fill the gap between knowing roots exist and actually computing them.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj12: {
//   title: `Vieta's Formulas`,
//   content: `Vieta's formulas express symmetric relationships between the roots of a polynomial and its coefficients, without requiring the roots to be known individually.

// For a monic quadratic $x^2 + bx + c$ with roots $r_1$ and $r_2$:

// $$r_1 + r_2 = -b \\qquad r_1 \\cdot r_2 = c$$

// The sum of the roots equals the negative of the linear coefficient, and the product equals the constant term.

// For a monic cubic $x^3 + bx^2 + cx + d$ with roots $r_1$, $r_2$, $r_3$:

// $$r_1 + r_2 + r_3 = -b$$

// $$r_1r_2 + r_1r_3 + r_2r_3 = c$$

// $$r_1 \\cdot r_2 \\cdot r_3 = -d$$

// The pattern extends to any degree: the $k$-th elementary symmetric polynomial of the roots equals $(-1)^k$ times the coefficient of $x^{n-k}$ in a monic degree-$n$ polynomial.

// These relationships are useful for verifying [factorizations](!/algebra/polynomials/factoring). After finding roots $1$, $2$, and $3$ for $x^3 - 6x^2 + 11x - 6$, Vieta's formulas confirm: $1 + 2 + 3 = 6 = -(-6)$, $1 \\cdot 2 + 1 \\cdot 3 + 2 \\cdot 3 = 11$, and $1 \\cdot 2 \\cdot 3 = 6 = -(-6)$. All three match the coefficients. They also allow solving problems where individual roots are not needed — for instance, finding the sum of the squares of the roots using $(r_1 + r_2 + r_3)^2 - 2(r_1r_2 + r_1r_3 + r_2r_3) = 36 - 22 = 14$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj13: {
//   title: `Common Mistakes`,
//   content: `The theorems on this page are closely related, and confusing their roles or misapplying their details produces errors that are easy to make and sometimes hard to spot.

// The Remainder Theorem and the Factor Theorem are frequently conflated. The Remainder Theorem says dividing $P(x)$ by $(x - c)$ leaves a remainder of $P(c)$. The Factor Theorem adds one specific condition: if that remainder is zero, then $(x - c)$ is a factor. Applying the Factor Theorem when $P(c) \\neq 0$ — concluding that $(x - c)$ is somehow a partial factor — reflects a misunderstanding of what the theorem actually states.

// With the Rational Root Theorem, two errors dominate. The first is forgetting negative candidates — the divisors of $a_0$ and $a_n$ include both positive and negative values. The second is omitting fractional candidates when the leading coefficient is not $1$. For $2x^3 + x - 6$, candidates include $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$, not just integers.

// In Descartes' Rule of Signs, the most common error occurs when computing $P(-x)$. Every odd-powered term changes sign while even-powered terms stay the same. Writing $P(-x)$ incorrectly — changing the wrong terms or missing one — corrupts the sign-change count.

// With Vieta's formulas, sign errors are persistent. The sum of roots for $x^2 + bx + c$ is $-b$, not $b$. The product of roots for a cubic $x^3 + bx^2 + cx + d$ is $-d$, not $d$. The alternating sign pattern $(-1)^k$ is easy to lose track of, especially at higher degrees.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     obj14:{
//       title:`Master Toolkit of Polynomial Theorems`,
//       content:`The theorems on this page form a coordinated toolkit for analyzing polynomials — locating roots, factoring, bounding the search, and relating coefficients to roots. The table below collects every theorem covered above with its purpose, the situation where it applies, and the output it produces.`,
//       before:``,
//       after:``,
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


// Concept introduction (section 1, "The Remainder Theorem") — template F,
// two descriptions shown to agree. Running instance: x³ − 4x + 2 divided by
// x − 1, x − 2 and x − 3, long-division remainders against P(c). Old obj1 text
// is kept in sectionsContent.obj1, unused; its six passages, formula box and
// link, two examples and pitfall are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciRemTable = ciTableOpen(['divisor', 'remainder by long division', 'P(c)']) +
  ciRow(['x − 1', '−1', 'P(1) = 1 − 4 + 2 = −1']) +
  ciRow(['x − 2', '2', 'P(2) = 8 − 8 + 2 = 2'], { shade: true }) +
  ciRow(['x − 3', '17', 'P(3) = 27 − 12 + 2 = 17'], { last: true, color: '#2563EB', cols: [1, 2] }) +
  '</tbody></table>'

const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## Division Theorems

- [Remainder Theorem](!/algebra/definitions#remainder_theorem) — remainder of $P(x) \\div (x-c)$ is $P(c)$
- [Factor Theorem](!/algebra/definitions#factor_theorem) — $(x-c)$ divides $P(x)$ exactly when $P(c) = 0$

## Root-Finding Theorems

- [Rational Root Theorem](!/algebra/definitions#rational_root_theorem) — if $p/q$ is a rational root, $p \\mid a_0$ and $q \\mid a_n$
- [Descartes' Rule of Signs](!/algebra/definitions#descartes'_rule_of_signs) — sign changes bound the count of positive and negative roots
- [Fundamental Theorem of Algebra](!/algebra/definitions#fundamental_theorem_of_algebra) — every degree-$n$ polynomial has exactly $n$ complex roots

## Coefficient-Root Relations

- [Vieta's Formulas](!/algebra/definitions#vieta's_formulas) — root sums and products from coefficients alone
- [Root (of a Polynomial)](!/algebra/definitions#root_(of_a_polynomial)) — the values these theorems locate
- [Synthetic Division](!/algebra/definitions#synthetic_division) — the computational tool for testing candidates

## Formulas Used on This Page

- [Remainder Theorem](!/algebra/formulas#remainder_theorem) — $P(x) = (x - c) \\cdot Q(x) + P(c)$
- [Factor Theorem](!/algebra/formulas#factor_theorem) — $(x - c)$ is a factor of $P(x) \\iff P(c) = 0$
- [Rational Root Theorem](!/algebra/formulas#rational_root_theorem) — if $\\frac{p}{q}$ is a root: $p \\mid a_0$ and $q \\mid a_n$

`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

    notation:{
      title:`Polynomial Rules Notation`,
      lead:`The shorthand the theorems on this page lean on: division written as a product, evaluation in parentheses, a candidate fraction, and roots counted by subscript.`,
      inherited:`Coefficients $a_n, \\ldots, a_0$, degree and multiplicity follow [polynomial notation](!/algebra/polynomials/roots#notation); $p \\mid a_0$ is read as in [divisibility notation](!/arithmetic/divisibility#2).`,
      entries:[
        {
          id:'division-form',
          tex:`$P(x) = (x - c)\\,Q(x) + R$`,
          read:`P of x equals x minus c times Q of x, plus R`,
          means:`Division written as a product: $P$ the dividend, $(x - c)$ the divisor, $Q(x)$ the quotient, $R$ the remainder — a constant, because the divisor has degree $1$. The [Remainder Theorem](!#1) says $R = P(c)$.`,
          cases:`When $R = 0$, $(x - c)$ is a factor of $P(x)$ — the [Factor Theorem](!#3).`,
          alsoWritten:`$\\dfrac{P(x)}{x - c} = Q(x) + \\dfrac{R}{x - c}$ — the fraction form; $P = DQ + R$ with $\\deg R < \\deg D$ for a divisor $D$ of any degree.`,
          confusedWith:`The sign of $c$. Dividing by $(x + 3)$ means $c = -3$, so the remainder is $P(-3)$, not $P(3)$.`,
        },
        {
          id:'evaluation',
          tex:`$P(c), \\; P(-x)$`,
          read:`P of c; P of minus x`,
          means:`Parentheses after $P$ mean put in, not multiply. $P(c)$ is a number, the value at $x = c$; $P(-x)$ is a new polynomial, with $-x$ put in for every $x$ — [Descartes' rule](!#9) counts its sign changes for the negative roots.`,
          cases:`In $P(-x)$ only odd powers change sign: $x^3 - 2x^2 - x + 2$ becomes $-x^3 - 2x^2 + x + 2$.`,
          confusedWith:`$-P(x)$, which flips every sign. $P(-x)$ mirrors the graph across the vertical axis, $-P(x)$ across the horizontal one — see [transformation notation](!/functions/transformations#notation).`,
        },
        {
          id:'candidate-fraction',
          tex:`$\\pm\\dfrac{p}{q}, \\quad p \\mid a_0, \\; q \\mid a_n$`,
          read:`plus or minus p over q, with p dividing a sub zero and q dividing a sub n`,
          means:`The candidate list of the [Rational Root Theorem](!#5): $p$ runs over the divisors of the constant term, $q$ over the divisors of the leading coefficient, the fraction in lowest terms.`,
          cases:`The $\\pm$ doubles every fraction; for $2x^3 + x^2 - 13x + 6$ the list has twelve candidates, $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$ among them.`,
          confusedWith:`$p$ as a prime, as in [prime number notation](!/algebra/sequences/prime-numbers#notation). Here $p$ is any divisor, prime or not: $6$ is a valid $p$.`,
        },
        {
          id:'root-list',
          tex:`$r_1, r_2, \\ldots, r_n$`,
          read:`r sub one up to r sub n — the roots`,
          means:`Roots named by place in a list, with no order implied. [Vieta's formulas](!#12) combine them into symmetric sums: for $x^2 + bx + c$, $r_1 + r_2 = -b$ and $r_1 r_2 = c$.`,
          cases:`A repeated root is listed once per multiplicity: $(x - 2)^2$ has $r_1 = r_2 = 2$. The sum of the roots is $-b$, not $b$.`,
          confusedWith:`The coefficient subscripts $a_0, \\ldots, a_n$. Those name a power of $x$; root subscripts only count.`,
        },
      ],
      symbolsHref:`/math-symbols/algebra`,
      symbolsLabel:`All algebra symbols`,
      parentHref:`/algebra/polynomials`,
      parentLabel:`Polynomials`,
      before:``,
      after:``,
    },

  obj1: {
    title: `The Remainder Theorem`,
    content: `When a polynomial $P(x)$ is divided by a linear binomial $(x - c)$, the remainder is a constant — and that constant equals $P(c)$, the value of the polynomial evaluated at $x = c$.

Formally:

@academic[formula_callout:Remainder Theorem
$$P(x) = (x - c) \\cdot Q(x) + P(c)$$
/algebra/formulas#remainder_theorem]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This means the remainder can be found without performing any division at all.

@academic[example:Example
To find the remainder when $P(x) = x^3 - 4x + 2$ is divided by $(x - 3)$, simply compute $P(3) = 27 - 12 + 2 = 17$. The remainder is $17$.]@

The theorem applies to any polynomial and any value of $c$.

@academic[example:Example
If $P(x) = 2x^4 - x^2 + 5$ and the divisor is $(x + 1)$, read $(x + 1)$ as $(x - (-1))$ and evaluate $P(-1) = 2(1) - 1 + 5 = 6$. The remainder is $6$, confirmed instantly without setting up [long division or synthetic division](!/algebra/polynomials/operations).]@

@academic[pitfall,aside:true,width:35%:Using the wrong sign of c
Evaluating at the number shown in the divisor: for $x^3 - 4x + 2$ divided by $(x + 3)$, $P(3) = 17$ is the remainder for $(x - 3)$. Here $c = -3$, so the remainder is $P(-3) = -13$.
[Read more](!#pitfall-using-the-wrong-sign-of-c)]@

In both examples the whole computation is a single evaluation, and the only choice to make is the value of $c$. The theorem is stated for a divisor written as $(x - c)$, so $c$ is the number that makes the divisor equal to zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Why the Remainder Theorem Works`,
    content: `The proof follows directly from the division algorithm. Dividing $P(x)$ by $(x - c)$ produces a quotient $Q(x)$ and a remainder $R$:

@academic[formula_callout:Why the Remainder Theorem Works
$$P(x) = (x - c) \\cdot Q(x) + R$$]@

Because the divisor $(x - c)$ has degree $1$, the remainder $R$ must have degree less than $1$ — meaning $R$ is a constant, independent of $x$.

Now substitute $x = c$ into both sides:

@academic[formula_callout:Why the Remainder Theorem Works
$$P(c) = (c - c) \\cdot Q(c) + R = 0 \\cdot Q(c) + R = R$$]@

The factor $(c - c)$ annihilates the quotient term, leaving $P(c) = R$. Evaluation and division are not separate operations — evaluating $P$ at $c$ is equivalent to extracting the remainder of division by $(x - c)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Factor Theorem`,
    content: `The Factor Theorem is a direct consequence of the Remainder Theorem: $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.

Formally:

@academic[formula_callout:Factor Theorem
$$(x - c) \\text{ is a factor of } P(x) \\iff P(c) = 0$$
/algebra/formulas#factor_theorem]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The logic is immediate. If the remainder when dividing by $(x - c)$ is zero, then $P(x) = (x - c) \\cdot Q(x)$ with no leftover term — so $(x - c)$ divides $P(x)$ exactly. Conversely, if $(x - c)$ is a factor, then $P(c) = (c - c) \\cdot Q(c) = 0$.

This creates a bridge between [roots](!/algebra/polynomials/roots) and [factors](!/algebra/polynomials/factoring). The value $c$ is a root of $P(x)$ precisely when $(x - c)$ is a factor of $P(x)$. Finding one gives the other automatically.

@academic[example:Example
To test whether $(x - 2)$ is a factor of $x^3 - 6x^2 + 11x - 6$, evaluate $P(2) = 8 - 24 + 22 - 6 = 0$. Since the result is zero, $(x - 2)$ is indeed a factor, and $2$ is a root.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using the Factor Theorem`,
    content: `The Factor Theorem works in both directions — it can verify suspected factors and it can build polynomials from known roots.

To test potential roots, substitute each candidate into $P(x)$ and check for zero.

@academic[example:Example
For $P(x) = x^3 - 7x + 6$, testing $x = 1$ gives $P(1) = 1 - 7 + 6 = 0$, confirming that $(x - 1)$ is a factor. Dividing out this factor via [synthetic division](!/algebra/polynomials/operations) yields the quotient $x^2 + x - 6$, which factors further as $(x + 3)(x - 2)$. The complete factorization is $(x - 1)(x + 3)(x - 2)$.]@

To construct a polynomial from its roots, reverse the process. If a cubic polynomial has roots $1$, $-2$, and $4$, the Factor Theorem guarantees that $(x - 1)$, $(x + 2)$, and $(x - 4)$ are all factors. Their product gives:

@academic[formula_callout:Using the Factor Theorem
$$(x - 1)(x + 2)(x - 4) = x^3 - 3x^2 - 6x + 8$$]@

Any nonzero scalar multiple $a(x - 1)(x + 2)(x - 4)$ shares the same roots, so the polynomial is determined up to a constant factor unless additional information — such as a specific function value — pins it down.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `The Rational Root Theorem`,
    content: `For polynomials with integer coefficients, the Rational Root Theorem restricts which rational numbers can possibly be roots. If $P(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ has integer coefficients and $\\frac{p}{q}$ is a rational root expressed in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$.

Formally:

@academic[formula_callout:Rational Root Theorem
$$\\text{if } \\tfrac{p}{q} \\text{ is a root: } p \\mid a_0 \\text{ and } q \\mid a_n$$
/algebra/formulas#rational_root_theorem]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This transforms an infinite search into a finite one. Instead of testing every rational number, only the fractions formed by divisors of $a_0$ over divisors of $a_n$ need to be checked.

For $P(x) = 2x^3 + x^2 - 13x + 6$, the constant term is $6$ with divisors $\\pm 1, \\pm 2, \\pm 3, \\pm 6$, and the leading coefficient is $2$ with divisors $\\pm 1, \\pm 2$. The candidate list is:

@academic[formula_callout:The Rational Root Theorem
$$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$$]@

@academic[pitfall,aside:true,width:35%:Leaving out the fractions
Listing only the divisors of $6$ for $2x^3 + x^2 - 13x + 6$ gives $\\pm 1, \\pm 2, \\pm 3, \\pm 6$ and misses the root $\\frac{1}{2}$. Dividing by $q = \\pm 2$ adds $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$.
[Read more](!#13)]@

Twelve candidates replace infinitely many possibilities. Each can be tested by substitution or synthetic division until all rational roots are found or the list is exhausted.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Applying the Rational Root Theorem`,
    content: `The theorem produces a candidate list, but the actual work lies in testing each candidate efficiently. A systematic approach avoids redundant effort.

Start by listing all divisors of the constant term $a_0$ — these are the possible values of $p$. Then list all divisors of the leading coefficient $a_n$ — these are the possible values of $q$. Form every fraction $\\pm \\frac{p}{q}$ and reduce to lowest terms to eliminate duplicates.

@academic[example:Example
For $2x^3 + x^2 - 13x + 6$, begin testing with the simplest candidates. $P(1) = 2 + 1 - 13 + 6 = -4$, so $1$ is not a root. $P(2) = 16 + 4 - 26 + 6 = 0$, so $2$ is a root. By the Factor Theorem, $(x - 2)$ is a factor. Synthetic division gives a quotient of $2x^2 + 5x - 3$, which factors as $(2x - 1)(x + 3)$.

The complete factorization is $(x - 2)(2x - 1)(x + 3)$, giving roots $2$, $\\frac{1}{2}$, and $-3$ — all members of the candidate list.]@

Testing via synthetic division is often more efficient than direct substitution, since each test simultaneously produces the quotient polynomial if the candidate turns out to be a root.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Limitations of the Rational Root Theorem`,
    content: `The Rational Root Theorem identifies only rational roots. Irrational roots and [complex roots](!/complex-numbers/equations-polynomials) lie entirely outside its reach.

@academic[example:Example
The polynomial $x^2 - 2$ illustrates this clearly. Its constant term is $-2$ and its leading coefficient is $1$, producing candidates $\\pm 1, \\pm 2$. Testing each: $P(1) = -1$, $P(-1) = -1$, $P(2) = 2$, $P(-2) = 2$. None equals zero. The actual roots are $\\pm\\sqrt{2}$, both irrational — invisible to the theorem.]@

A polynomial may have no rational roots at all. The polynomial $x^4 + x^3 + x^2 + x + 1$ has integer coefficients and candidates $\\pm 1$, but neither works. All four of its roots are complex, and no amount of rational testing will find them.

The theorem is best understood as a first filter, not a complete solution. When it finds roots, synthetic division reduces the polynomial's degree, potentially making the remaining roots accessible through the quadratic formula or other methods. When it finds none, it confirms that the roots are irrational or complex and signals the need for different tools.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `The Integer Root Theorem`,
    content: `When the leading coefficient of a polynomial is $1$ — a monic polynomial — the Rational Root Theorem simplifies considerably. Every rational root $\\frac{p}{q}$ has $q$ dividing $1$, which forces $q = \\pm 1$, which means $\\frac{p}{q}$ is an integer.

@academic[rule_theorem:Integer Root Theorem
So all rational roots of a monic polynomial are integers, and they must divide the constant term.]@

@academic[example:Example
For $x^3 - 6x^2 + 11x - 6$, the only candidates are the divisors of $-6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. No fractions need to be considered.

Testing: $P(1) = 1 - 6 + 11 - 6 = 0$, so $1$ is a root. Dividing out $(x - 1)$ leaves $x^2 - 5x + 6 = (x - 2)(x - 3)$. All three roots — $1$, $2$, $3$ — are integers dividing $6$, exactly as the theorem predicts.]@

@academic[fact,aside:true,width:35%:A square root is whole or irrational
For a whole number $n$, the polynomial $x^2 - n$ is monic, so any rational root it has is an integer. Hence $\\sqrt{n}$ is either a whole number or irrational: no fraction squares to exactly $2$, though $\\left(\\frac{7}{5}\\right)^2 = 1.96$ comes close.]@

This simplification makes monic polynomials particularly approachable. The candidate list is shorter, the candidates are easier to test, and the search is faster. Recognizing that a polynomial is monic before beginning the root search saves unnecessary work with fractions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Descartes' Rule of Signs`,
    content: `Descartes' Rule of Signs estimates the number of positive and negative real roots of a polynomial by counting sign changes in its coefficients.

@academic[fact,aside:true,width:35%:Few terms, few real roots
Whatever its degree, a polynomial with $k$ nonzero terms has at most $2k - 1$ distinct real roots: at most $k - 1$ sign changes for positive roots, as many for negative ones, plus possibly $0$. So $x^{100} - 1$ has only two real roots, $1$ and $-1$, out of its hundred.]@

To count positive real roots, write $P(x)$ in standard form and count how many times the sign of the coefficients changes from one term to the next. For $P(x) = x^3 - 2x^2 - x + 2$, the coefficient signs are $+, -, -, +$. The sign changes twice: from $+$ to $-$ and from $-$ to $+$. The polynomial has either $2$ or $0$ positive real roots — the actual count equals the number of sign changes or less by an even number.

To count negative real roots, apply the same procedure to $P(-x)$. Substituting $-x$ gives $P(-x) = -x^3 - 2x^2 + x + 2$, with signs $-, -, +, +$. One sign change occurs, so the polynomial has exactly $1$ negative real root.

@academic[pitfall,aside:true,width:35%:Changing the sign of every term
Writing $P(-x)$ for $x^3 - 2x^2 - x + 2$ as $-x^3 + 2x^2 + x - 2$ flips all four signs and gives $2$ changes, so $2$ or $0$ negative roots. Only odd powers flip: $-x^3 - 2x^2 + x + 2$ has $1$ change, exactly $1$ negative root.
[Read more](!#13)]@

The rule does not identify the roots or specify which of the possible counts is correct. For $P(x) = x^3 - 2x^2 - x + 2$, the actual roots are $1$, $2$, and $-1$ — two positive and one negative, consistent with the prediction. But the rule alone cannot distinguish between $2$ positive roots and $0$ positive roots without further analysis.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Upper and Lower Bounds`,
    content: `Synthetic division provides a way to establish bounds on the real roots of a polynomial, narrowing the interval where roots can exist.

The upper bound test works as follows: divide $P(x)$ by $(x - c)$ where $c > 0$ using synthetic division. If every entry in the bottom row is non-negative (positive or zero), then $c$ is an upper bound — no real root of $P(x)$ exceeds $c$.

The lower bound test is similar but uses a negative value of $c$. Divide $P(x)$ by $(x - c)$ where $c < 0$. If the entries in the bottom row alternate in sign (with zeros counting as either sign), then $c$ is a lower bound — no real root is less than $c$.

@academic[example:Example
For $P(x) = x^3 - 4x^2 + x + 6$, synthetic division by $(x - 5)$ produces the row $1, 1, 6, 36$ — all non-negative, so $5$ is an upper bound. Synthetic division by $(x + 2)$, meaning $c = -2$, produces $1, -6, 13, -20$ — the signs alternate, so $-2$ is a lower bound. All real roots of this polynomial lie in the interval $[-2, 5]$.]@

These bounds are especially useful when combined with the Rational Root Theorem, eliminating candidates that fall outside the established range before any testing begins.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `The Fundamental Theorem of Algebra`,
    content: `@academic[rule_theorem:Fundamental Theorem of Algebra
The Fundamental Theorem of Algebra makes a sweeping guarantee: every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in the [complex numbers](!/complex-numbers), counted with multiplicity.]@

A quadratic has $2$ roots. A cubic has $3$. A degree-$10$ polynomial has $10$. No polynomial of positive degree can avoid having roots — the theorem eliminates the possibility of a polynomial that simply never equals zero.

Some roots may repeat. The polynomial $x^3 - 3x^2 + 3x - 1 = (x - 1)^3$ has degree $3$ but only one distinct root, $x = 1$, appearing with multiplicity $3$. The count of $n$ roots includes these repetitions.

@academic[pitfall,aside:true,width:35%:Expecting all roots to be real
Reading exactly $n$ roots as $n$ real roots: $x^3 - x^2 + x - 1$ would then cross the x-axis three times. It factors as $(x - 1)(x^2 + 1)$, so it crosses only at $x = 1$; the other roots are $\\pm i$.
[Read more](!#pitfall-expecting-all-roots-to-be-real)]@

For polynomials with real coefficients, an additional constraint applies: complex roots come in conjugate pairs. If $a + bi$ is a root, then $a - bi$ is also a root. This means a real polynomial of odd degree must have at least one real root — an odd number of roots cannot be paired off entirely into conjugate pairs.

The theorem guarantees existence but offers no method for finding roots. For degree $5$ and above, no general formula in radicals exists — the Abel–Ruffini theorem, with Galois later explaining which equations are solvable by radicals. Numerical methods, the Rational Root Theorem, and other tools from this page fill the gap between knowing roots exist and actually computing them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Vieta's Formulas`,
    content: `Vieta's formulas express symmetric relationships between the roots of a polynomial and its coefficients, without requiring the roots to be known individually.

For a monic quadratic $x^2 + bx + c$ with roots $r_1$ and $r_2$:

@academic[formula_callout:Vieta's Formulas
$$r_1 + r_2 = -b \\qquad r_1 \\cdot r_2 = c$$]@

The sum of the roots equals the negative of the linear coefficient, and the product equals the constant term.

For a monic cubic $x^3 + bx^2 + cx + d$ with roots $r_1$, $r_2$, $r_3$:

@academic[formula_callout:Vieta's Formulas
$$r_1 + r_2 + r_3 = -b$$]@

@academic[formula_callout:Vieta's Formulas
$$r_1r_2 + r_1r_3 + r_2r_3 = c$$]@

@academic[formula_callout:Vieta's Formulas
$$r_1 \\cdot r_2 \\cdot r_3 = -d$$]@

@academic[rule_theorem:Vieta's Formulas
The pattern extends to any degree: the $k$-th elementary symmetric polynomial of the roots equals $(-1)^k$ times the coefficient of $x^{n-k}$ in a monic degree-$n$ polynomial.]@

@academic[pitfall,aside:true,width:35%:Taking the sum of the roots as b
Reading the sum of the roots of $x^2 - 5x + 6$ as $b = -5$ clashes with its roots $2$ and $3$. The sum is $-b = 5$ and the product is $c = 6$.
[Read more](!#13)]@

These relationships are useful for verifying [factorizations](!/algebra/polynomials/factoring).

@academic[example:Example
After finding roots $1$, $2$, and $3$ for $x^3 - 6x^2 + 11x - 6$, Vieta's formulas confirm: $1 + 2 + 3 = 6 = -(-6)$, $1 \\cdot 2 + 1 \\cdot 3 + 2 \\cdot 3 = 11$, and $1 \\cdot 2 \\cdot 3 = 6 = -(-6)$. All three match the coefficients.]@

They also allow solving problems where individual roots are not needed — for instance, finding the sum of the squares of the roots using $(r_1 + r_2 + r_3)^2 - 2(r_1r_2 + r_1r_3 + r_2r_3) = 36 - 22 = 14$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Common Mistakes`,
    content: `The theorems on this page are closely related, and confusing their roles or misapplying their details produces errors that are easy to make and sometimes hard to spot.

The Remainder Theorem and the Factor Theorem are frequently conflated. The Remainder Theorem says dividing $P(x)$ by $(x - c)$ leaves a remainder of $P(c)$. The Factor Theorem adds one specific condition: if that remainder is zero, then $(x - c)$ is a factor. Applying the Factor Theorem when $P(c) \\neq 0$ — concluding that $(x - c)$ is somehow a partial factor — reflects a misunderstanding of what the theorem actually states.

With the Rational Root Theorem, two errors dominate. The first is forgetting negative candidates — the divisors of $a_0$ and $a_n$ include both positive and negative values. The second is omitting fractional candidates when the leading coefficient is not $1$. For $2x^3 + x - 6$, candidates include $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$, not just integers.

In Descartes' Rule of Signs, the most common error occurs when computing $P(-x)$. Every odd-powered term changes sign while even-powered terms stay the same. Writing $P(-x)$ incorrectly — changing the wrong terms or missing one — corrupts the sign-change count.

With Vieta's formulas, sign errors are persistent. The sum of roots for $x^2 + bx + c$ is $-b$, not $b$. The product of roots for a cubic $x^3 + bx^2 + cx + d$ is $-d$, not $d$. The alternating sign pattern $(-1)^k$ is easy to lose track of, especially at higher degrees.`,
    before: ``,
    after: `Both slips read a theorem too quickly. The Remainder Theorem evaluates at the value $c$ that makes the divisor zero, so dividing by $(x + 3)$ means $c = -3$. The Fundamental Theorem of Algebra counts complex roots, so degree $3$ guarantees three roots but not three real ones. Synthetic division confirms the first answer, and a look at the factor $x^2 + 1$ confirms the second.`,
    link: '',
  },

  obj14: {
    title: `Master Toolkit of Polynomial Theorems`,
    content: `The theorems on this page form a coordinated toolkit for analyzing polynomials — locating roots, factoring, bounding the search, and relating coefficients to roots. The table below collects every theorem covered above with its purpose, the situation where it applies, and the output it produces.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: ``,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  }

}


  const introContent = {
  id: "intro",
  title: "The Theorems Behind the Toolkit",
  content: `Working with polynomials involves a great deal of computation — dividing, testing values, searching for [roots](!/algebra/polynomials/roots). But underneath that work sits a collection of theorems that explain why certain shortcuts are valid, why certain searches are guaranteed to terminate, and why the structure of a polynomial's coefficients reveals information about its solutions before a single calculation is performed.

These results connect seemingly separate tasks. Evaluating a polynomial at a point turns out to be the same as finding a division remainder. Knowing one root immediately produces a [factor](!/algebra/polynomials/factoring). The coefficients of a polynomial place strict limits on which rational numbers could possibly be roots. Each theorem removes guesswork and replaces it with structure.`
}

// FAQ pass 2026-10-31: kept the three questions. Added the irrationality of
// the square root of 2 (fact box under "The Integer Root Theorem"), the real
// root limit for polynomials with few terms (fact box under Descartes' rule)
// and when Descartes' rule gives an exact count (the one-sign-change example
// in the same section). No heading asks them.
const faqQuestions = {
  obj1: {
    question: "What is the difference between the Remainder Theorem and the Factor Theorem?",
    answer: "One is general, the other is a special case. The Remainder Theorem says dividing $P(x)$ by $(x - c)$ always leaves the remainder $P(c)$, whatever that value is. The Factor Theorem adds a condition: only when that remainder is zero is $(x - c)$ a factor. A nonzero remainder gives you information, not a partial factor.",
    sectionId: "13"
  },
  obj2: {
    question: "Which candidates does the Rational Root Theorem actually list?",
    answer: "Every ratio of a divisor of the constant term to a divisor of the leading coefficient, taken with both signs. Two omissions are common: dropping the negative candidates, and forgetting fractions when the leading coefficient is not $1$. For $2x^3 + x - 6$ the list includes $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$, not just whole numbers.",
    sectionId: "13"
  },
  obj3: {
    question: "Why do Vieta's formulas alternate signs?",
    answer: "Because expanding $(x - r_1)(x - r_2)\\cdots$ introduces a factor of $-1$ with each root, giving the pattern $(-1)^k$. So for $x^2 + bx + c$ the sum of roots is $-b$ rather than $b$, and for a cubic $x^3 + bx^2 + cx + d$ the product is $-d$ rather than $d$. Losing track of that alternation is the usual source of error at higher degrees.",
    sectionId: "13"
  },
  obj4: {
    question: "How does the Rational Root Theorem show that $\\sqrt{2}$ is irrational?",
    answer: "$\\sqrt{2}$ is a root of $x^2 - 2$, which is monic, so any rational root it has must be an integer dividing $-2$: one of $\\pm 1$ and $\\pm 2$. None of them squares to $2$, so $x^2 - 2$ has no rational root and $\\sqrt{2}$ is irrational. The same argument shows that $\\sqrt{n}$, for any whole number $n$, is either a whole number or irrational; $\\left(\\frac{7}{5}\\right)^2 = 1.96$ comes close, but no fraction squares to exactly $2$.",
    sectionId: "8"
  },
  obj5: {
    question: "How many real roots can a polynomial with only a few terms have?",
    answer: "At most $2k - 1$ distinct real roots for $k$ nonzero terms, whatever the degree. Descartes' Rule of Signs allows at most $k - 1$ sign changes, so at most $k - 1$ positive roots, as many negative ones, plus possibly the root $0$. That is why $x^{100} - 1$, with two terms, has only two real roots, $1$ and $-1$; the other $98$ of its hundred roots are complex.",
    sectionId: "9"
  },
  obj6: {
    question: "When does Descartes' Rule of Signs give an exact count?",
    answer: "When it counts $0$ or $1$ sign changes. The true number of positive roots is the number of sign changes or less by an even number, and neither $0$ nor $1$ can drop by $2$. For $x^3 - 2x^2 - x + 2$, $P(-x) = -x^3 - 2x^2 + x + 2$ has one sign change, so there is exactly one negative root, $-1$; the two changes in $P(x)$ leave $2$ or $0$ positive roots undecided by the rule alone.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Polynomial Theorems and Rules",
    "description": "Master polynomial theorems: Remainder Theorem, Factor Theorem, Rational Root Theorem, Descartes' Rule of Signs, Fundamental Theorem of Algebra, Vieta's formulas, and root bounds.",
    "url": "https://www.learnmathclass.com/algebra/polynomials/rules",
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
      "name": "Polynomial Theorems"
    },
    "teaches": [
      "Remainder Theorem and its proof",
      "Factor Theorem for roots and factors",
      "Rational Root Theorem for integer-coefficient polynomials",
      "Integer Root Theorem for monic polynomials",
      "Descartes' Rule of Signs for counting roots",
      "Fundamental Theorem of Algebra",
      "Vieta's formulas for root-coefficient relationships"
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
        "name": "Polynomials",
        "item": "https://www.learnmathclass.com/algebra/polynomials"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Rules",
        "item": "https://www.learnmathclass.com/algebra/polynomials/rules"
      }
    ]
  },
}



  const fpCandidatesMiss = { kind: 'pieces', svgTitle: 'x^2 - 2: the candidates 1, -1, 2, -2 all miss; the roots are plus or minus sqrt 2', xRange: [-3, 3], yRange: [-3, 5],
    pieces: [
      { fn: (x) => x * x - 2, from: -3, to: -Math.SQRT2, ends: [null, 'closed'], color: 'f' },
      { fn: (x) => x * x - 2, from: -Math.SQRT2, to: Math.SQRT2, ends: ['closed', 'closed'], color: 'f' },
      { fn: (x) => x * x - 2, from: Math.SQRT2, to: 3, ends: ['closed', null], color: 'f' },
    ],
    points: [{ x: -2, y: 2, label: 'P(−2) = 2', pos: 'w' }, { x: -1, y: -1, label: 'P(−1) = −1', pos: 'sw' },
      { x: 1, y: -1, label: 'P(1) = −1', pos: 'se' }, { x: 2, y: 2, label: 'P(2) = 2', pos: 'e' }],
    notes: [{ x: -2.9, y: -2.6, text: 'roots ±√2 ≈ ±1.41 (blue dots): irrational', pos: 'e', color: 'f' }],
    caption: 'No candidate from ±1, ±2 is a root: the roots ±√2 are irrational' };
  const fpDescartes = { kind: 'pieces', svgTitle: 'x^3 - 2x^2 - x + 2 has two positive roots and one negative root', xRange: [-2, 3], yRange: [-4, 4],
    pieces: [{ fn: (x) => x ** 3 - 2 * x * x - x + 2, from: -2, to: 3, ends: [null, null], color: 'f' }],
    points: [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
    notes: [{ x: -1.8, y: 3.6, text: 'P(x): signs + − − +, 2 changes: 2 or 0 positive roots', pos: 'e', color: 'f' },
      { x: -1.8, y: 2.6, text: 'P(−x): signs − − + +, 1 change: 1 negative root', pos: 'e', color: 'g' },
      { x: 0.2, y: -3.2, text: 'actual roots: −1, 1, 2', pos: 'e', color: 'r' }],
    caption: 'Descartes allows 2 positive, 1 negative root: here 1, 2 and −1' };

  const conceptIntroFigures = {
    remTable: ciRemTable,
  };

  const demoUnits = {
    candidates: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCandidatesMiss),
      caption: 'Where the theorem cannot see',
      text: 'The section\'s x&#178; &#8722; 2. Its rational candidates are &#177;1 and &#177;2, and each one lands off the axis: P(&#177;1) = &#8722;1 and P(&#177;2) = 2. The graph still crosses the axis twice, at &#177;&#8730;2 &#8776; &#177;1.41 (blue dots), but these roots are irrational, so the list could never contain them.',
    }),
    descartes: demoUnitFrame({
      svg: renderFunctionPlotV4(fpDescartes),
      caption: 'Checking Descartes\' count against the graph',
      text: 'The section\'s x&#179; &#8722; 2x&#178; &#8722; x + 2. The coefficients of P(x) change sign twice, so there are 2 or 0 positive roots; those of P(&#8722;x) change sign once, so there is exactly 1 negative root. The graph confirms the count: it crosses at x = 1 and x = 2 on the positive side and at x = &#8722;1 on the negative side.',
    }),
  };

  // MistakeFix batch 5, 2026-11-02: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj13 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'using-the-wrong-sign-of-c', name: `Using the wrong sign of c`, errorAt: 0,
        what: `The divisor has a plus sign, as in $(x + 3)$, and the number shown in it is substituted directly. The theorem is stated for $(x - c)$, so the evaluation happens at the wrong point.`,
        wrong: [`For $P(x) = x^3 - 4x + 2$ divided by $(x + 3)$,
$$P(3) = 27 - 12 + 2 = 17$$`],
        right: [`$(x + 3) = (x - (-3))$, so $c = -3$ and
$$P(-3) = -27 + 12 + 2 = -13$$`, `The remainder is $-13$.`],
        why: `The theorem is written with a minus sign in the divisor, so the sign of $c$ is the opposite of the sign that appears there. Reading the number straight off the divisor skips that step.`,
        check: `$c$ is the value that makes the divisor zero. $x = -3$ gives $x + 3 = 0$; $x = 3$ does not. Synthetic division by $(x + 3)$ gives the bottom row $1, -3, 5, -13$, ending in the same remainder $-13$.` },
      { id: 'expecting-all-roots-to-be-real', name: `Expecting all roots to be real`, errorAt: 0,
        what: `The Fundamental Theorem of Algebra promises $n$ roots for a polynomial of degree $n$, and that is read as $n$ real roots, so $n$ crossings of the x-axis are expected.`,
        wrong: [`$x^3 - x^2 + x - 1$ has degree $3$, so its graph is expected to cross the x-axis three times. After the root $x = 1$ is found, two more real roots are searched for, and none exists.`],
        right: [`$P(1) = 1 - 1 + 1 - 1 = 0$, and dividing out $(x - 1)$ leaves $x^2 + 1$:
$$x^3 - x^2 + x - 1 = (x - 1)(x^2 + 1)$$`, `The factor $x^2 + 1$ has roots $\\pm i$. The three roots are $1$, $i$ and $-i$: one real, two complex.`],
        why: `The roots met in early work are real numbers, and the theorem's count of roots in the complex numbers is easy to read as a count of x-intercepts.`,
        check: `Look for real roots in each factor. $x^2 + 1 = 0$ needs $x^2 = -1$, which no real number satisfies, and since $x^2 + 1 > 0$ for every $x$, the graph of $x^3 - x^2 + x - 1$ crosses the x-axis only at $x = 1$.` },
    ],
  };
  // TheoremCard data (remainder-theorem-chain); every fact is from the section text
  const remainderChain = {
    header: { kicker: 'Polynomial theorems', title: 'Why the Remainder Theorem works', lede: 'Evaluation and division are not separate operations.' },
    chain: [
      { name: 'Division algorithm', text: '$P(x) = (x - c) \\cdot Q(x) + R$', edge: 'degree of $(x - c)$ is $1$' },
      { name: 'The remainder is a constant', text: '$R$ has degree less than $1$', items: ['Independent of $x$'], edge: 'substitute $x = c$' },
      { name: 'Remainder Theorem', text: '$P(c) = 0 \\cdot Q(c) + R = R$', items: ['The factor $(c - c)$ annihilates the quotient term'] },
    ],
  };

  // TheoremCard data (factor-theorem-iff); every fact is from the section text
  const factorIff = {
    header: { kicker: 'Polynomial theorems', title: 'The Factor Theorem', lede: 'A bridge between roots and factors.' },
    theorem: {
      left: '$P(c) = 0$', leftSay: '$c$ is a root',
      right: '$(x - c)$ is a factor of $P(x)$', rightSay: '$P(x) = (x - c) \\cdot Q(x)$ with no leftover term',
      forward: 'remainder is zero', backward: '$P(c) = (c - c) \\cdot Q(c) = 0$',
      general: { label: 'Remainder Theorem (general case)', text: '$P(x) = (x - c) \\cdot Q(x) + P(c)$',
        say: 'Dividing by $(x - c)$ leaves remainder $P(c)$; the Factor Theorem is the case $P(c) = 0$.' },
      misuse: { label: 'Using the wrong sign of $c$',
        text: 'For $x^3 - 4x + 2$ divided by $(x + 3)$, $P(3) = 17$ is the remainder for $(x - 3)$. Here $c = -3$, so the remainder is $P(-3) = -13$.' },
    },
  };

  // TheoremCard data (rational-root-theorem-apply); every fact is from the section text
  const rationalRootApply = {
    header: { kicker: 'Polynomial theorems', title: 'The Rational Root Theorem', lede: 'An infinite search becomes a finite one.' },
    theorem: {
      statement: 'If $P(x)$ has integer coefficients and $\\frac{p}{q}$ is a rational root in lowest terms, then $p \\mid a_0$ and $q \\mid a_n$.',
      steps: [
        { label: 'Read the ends', text: '$2x^3 + x^2 - 13x + 6$: constant term $6$, leading coefficient $2$.' },
        { label: 'Divisors', text: '$p$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$ · $q$: $\\pm 1, \\pm 2$' },
        { label: 'Candidates', text: '$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$: twelve in all.' },
        { label: 'Test', hit: true, text: '$P(1) = -4$, not a root. $P(2) = 16 + 4 - 26 + 6 = 0$, so $2$ is a root and $(x - 2)$ is a factor.' },
        { label: 'Reduce', text: 'Synthetic division leaves $2x^2 + 5x - 3 = (2x - 1)(x + 3)$: roots $2$, $\\frac{1}{2}$, $-3$, all on the list.' },
      ],
      misuse: { label: 'Leaving out the fractions',
        text: 'Listing only the divisors of $6$ gives $\\pm 1, \\pm 2, \\pm 3, \\pm 6$ and misses the root $\\frac{1}{2}$. Dividing by $q = \\pm 2$ adds $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$.' },
    },
  };

  // TheoremCard data (rational-root-limits-converse); every fact is from the section text
  const rationalRootConverse = {
    header: { kicker: 'Polynomial theorems', title: 'Limits of the Rational Root Theorem', lede: 'It identifies only rational roots.' },
    theorem: {
      says: 'If $\\frac{p}{q}$ is a rational root of a polynomial with integer coefficients, then $p$ divides $a_0$ and $q$ divides $a_n$.',
      not: 'Every polynomial has a rational root, or every candidate on the list is a root.',
      counter: {
        label: 'Reading an empty list as "no roots"',
        wrong: '$x^2 - 2$ has candidates $\\pm 1, \\pm 2$; none is a root, so the polynomial has no roots.',
        right: 'The roots are $\\pm\\sqrt{2}$, irrational and invisible to the theorem. $x^4 + x^3 + x^2 + x + 1$ has candidates $\\pm 1$ and four complex roots.',
      },
      scope: '**A first filter, not a complete solution:** when it finds roots, synthetic division lowers the degree; when it finds none, the roots are irrational or complex.',
    },
  };

  // TheoremCard data (integer-root-theorem-chain); every fact is from the section text
  const integerRootChain = {
    header: { kicker: 'Polynomial theorems', title: 'The Integer Root Theorem', lede: 'A monic polynomial has only integer rational roots.' },
    chain: [
      { name: 'Rational Root Theorem', text: '$\\tfrac{p}{q}$ a root $\\implies q \\mid a_n$', edge: 'monic: $a_n = 1$' },
      { name: 'Denominator forced', text: '$q = \\pm 1$, so $\\tfrac{p}{q}$ is an integer', edge: 'hence' },
      { name: 'Integer Root Theorem', text: 'Rational roots are integers dividing $a_0$', items: [
        '$x^3 - 6x^2 + 11x - 6$: candidates $\\pm 1, \\pm 2, \\pm 3, \\pm 6$; roots $1, 2, 3$',
        '$x^2 - n$ is monic, so $\\sqrt{n}$ is a whole number or irrational',
      ] },
    ],
  };

  // TheoremCard data (fundamental-theorem-algebra-converse); every fact is from the section text
  const ftaConverse = {
    header: { kicker: 'Polynomial theorems', title: 'The Fundamental Theorem of Algebra', lede: 'Every polynomial of degree $n \\geq 1$ has exactly $n$ complex roots, counted with multiplicity.' },
    theorem: {
      says: 'A polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in the complex numbers, counted with multiplicity.',
      not: 'A polynomial of degree $n$ has $n$ real roots and crosses the $x$-axis $n$ times.',
      counter: {
        label: 'Expecting all roots to be real',
        wrong: '$x^3 - x^2 + x - 1$ has three roots, so its graph crosses the $x$-axis three times.',
        right: 'It factors as $(x - 1)(x^2 + 1)$: one crossing at $x = 1$, the other two roots are $\\pm i$. Repeats count too: $(x - 1)^3$ has one distinct root with multiplicity $3$.',
      },
      scope: '**Existence, not a method:** for degree $5$ and above no general formula in radicals exists (Abel–Ruffini). With real coefficients, complex roots come in conjugate pairs, so odd degree forces at least one real root.',
    },
  };

  // TheoremCard data (vieta-formulas-apply); every fact is from the section text
  const vietaApply = {
    header: { kicker: 'Polynomial theorems', title: 'Vieta’s Formulas', lede: 'Symmetric relationships between roots and coefficients.' },
    theorem: {
      statement: 'For a monic polynomial of degree $n$, the $k$-th elementary symmetric polynomial of the roots equals $(-1)^k$ times the coefficient of $x^{n-k}$.',
      steps: [
        { label: 'Quadratic', text: '$x^2 + bx + c$ with roots $r_1, r_2$: $r_1 + r_2 = -b$ and $r_1 r_2 = c$.' },
        { label: 'Cubic', text: '$x^3 + bx^2 + cx + d$: $r_1 + r_2 + r_3 = -b$, $r_1 r_2 + r_1 r_3 + r_2 r_3 = c$, $r_1 r_2 r_3 = -d$.' },
        { label: 'Check a factorization', hit: true, text: '$x^3 - 6x^2 + 11x - 6$ with roots $1, 2, 3$: $1 + 2 + 3 = 6 = -(-6)$, $1 \\cdot 2 + 1 \\cdot 3 + 2 \\cdot 3 = 11$, $1 \\cdot 2 \\cdot 3 = 6 = -(-6)$.' },
        { label: 'Without the roots', text: 'Sum of the squares of the roots: $(r_1 + r_2 + r_3)^2 - 2(r_1 r_2 + r_1 r_3 + r_2 r_3) = 36 - 22 = 14$.' },
      ],
      misuse: { label: 'Taking the sum of the roots as $b$',
        text: 'Reading the sum of the roots of $x^2 - 5x + 6$ as $b = -5$ clashes with its roots $2$ and $3$. The sum is $-b = 5$ and the product is $c = 6$.' },
    },
  };


  return {
  props:{
      remainderChain, factorIff, rationalRootApply, rationalRootConverse, integerRootChain, ftaConverse, vietaApply,
    pitfallData,
    sectionsContent,
    introContent,
    obj10Table,
    obj12Table,
    obj13Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    conceptIntroFigures,
    seoData: {
      title: "Polynomial Theorems: Remainder, Factor & Rational Root | Learn Math Class",
      description: "Master polynomial theorems: Remainder Theorem, Factor Theorem, Rational Root Theorem, Descartes' Rule of Signs, Fundamental Theorem of Algebra, Vieta's formulas, and root bounds.",
      keywords: keyWords.join(", "),
      url: "/algebra/polynomials/rules",
      name: "Polynomial Theorems and Rules"
    },
  }
}
   }

const theoremTheme = { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' }

export default function RulesPage({remainderChain, factorIff, rationalRootApply, rationalRootConverse, integerRootChain, ftaConverse, vietaApply,  pitfallData,seoData, sectionsContent, introContent, obj10Table, obj12Table, obj13Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template F (two descriptions agree).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Dividing x³ − 4x + 2 by x − 3 by long division takes several steps. Is there a shortcut to the remainder?`,
        content: [
          `Compare the long-division remainders for three divisors with the values of the polynomial at $1$, $2$ and $3$.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `For each divisor x − c, the long-division remainder equals the value of the polynomial at c.`,
        content: [
          ciTable('remTable'),
          `Three divisions, three evaluations, the same three numbers.`,
        ],
      },
      {
        id: 'agree',
        lead: `The remainder on division by x − c is just P(c).`,
        content: [
          `This means the remainder can be found without performing any division at all.`,
          `@academic[example:Example
To find the remainder when $P(x) = x^3 - 4x + 2$ is divided by $(x - 3)$, simply compute $P(3) = 27 - 12 + 2 = 17$. The remainder is $17$.]@`,
          `The theorem applies to any polynomial and any value of $c$.`,
          `@academic[example:Example
If $P(x) = 2x^4 - x^2 + 5$ and the divisor is $(x + 1)$, read $(x + 1)$ as $(x - (-1))$ and evaluate $P(-1) = 2(1) - 1 + 5 = 6$. The remainder is $6$, confirmed instantly without setting up [long division or synthetic division](!/algebra/polynomials/operations).]@`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [remainder theorem](!/algebra/definitions#remainder_theorem) states that dividing a polynomial $P(x)$ by $x - c$ leaves the remainder $P(c)$.`,
        formula: [
          `When a polynomial $P(x)$ is divided by a linear binomial $(x - c)$, the remainder is a constant — and that constant equals $P(c)$, the value of the polynomial evaluated at $x = c$.`,
          `Formally:`,
          `@academic[formula_callout:Remainder Theorem
$$P(x) = (x - c) \\cdot Q(x) + P(c)$$
/algebra/formulas#remainder_theorem]@`,
          `@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@`,
        ],
        footer: `So dividing $x^3 - 4x + 2$ by $x - 3$ leaves the remainder $P(3) = 17$.`,
      },
      {
        id: 'kind',
        lead: `It holds because the quotient term vanishes at x = c.`,
        content: [
          `In $P(x) = (x - c)Q(x) + r$, setting $x = c$ makes $(x - c)Q(x)$ equal to $0$, so $P(c) = r$. The full argument is in [why the remainder theorem works](!/algebra/polynomials/rules#2).`,
        ],
      },
      {
        id: 'caveat',
        lead: `c is the number that makes the divisor zero, so watch its sign.`,
        content: [
          `@academic[pitfall,aside:true,width:35%:Using the wrong sign of c
Evaluating at the number shown in the divisor: for $x^3 - 4x + 2$ divided by $(x + 3)$, $P(3) = 17$ is the remainder for $(x - 3)$. Here $c = -3$, so the remainder is $P(-3) = -13$.
[Read more](!#pitfall-using-the-wrong-sign-of-c)]@`,
          `In both examples the whole computation is a single evaluation, and the only choice to make is the value of $c$. The theorem is stated for a divisor written as $(x - c)$, so $c$ is the number that makes the divisor equal to zero.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers why the theorem works, the factor theorem, the rational root and integer root theorems, Descartes' rule of signs, bounds on roots, the fundamental theorem of algebra, Vieta's formulas, common mistakes and a summary toolkit.`,
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
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
          <NotationSection
            key={'notation-notation'}
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
          <NotationCheatSheet
            key={'notation-sheet'}
            sheet={polyEqIneqNotationSheet}
            current={'/algebra/polynomials/rules'}
          />,
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
          <DiagramFrame
            key={'obj2-theorem'}
            id="remainder-theorem-chain"
            title="Why the Remainder Theorem works"
            source="/algebra/polynomials/rules"
            before={`The proof is three steps from the division algorithm. The chain runs them in order.`}
            after={`Evaluating $P$ at $c$ and extracting the remainder of division by $(x - c)$ are the same operation.`}
          >
            <TheoremCard data={remainderChain} variant="chain" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <DiagramFrame
            key={'obj3-theorem'}
            id="factor-theorem-iff"
            title="The Factor Theorem"
            source="/algebra/polynomials/rules"
            before={`The theorem runs both ways: a root gives a factor, a factor gives a root. The card shows each direction with its reason.`}
            after={`Finding one gives the other automatically.`}
          >
            <TheoremCard data={factorIff} variant="iff" theme={theoremTheme} />
          </DiagramFrame>,
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
          <DiagramFrame
            key={'obj6-theorem'}
            id="rational-root-theorem-apply"
            title="The Rational Root Theorem, applied"
            source="/algebra/polynomials/rules"
            before={`The theorem as a procedure, on the page’s cubic: a finite list of candidates, then a test that pays twice.`}
            after={`Twelve candidates replace infinitely many possibilities, and each root found lowers the degree by one.`}
          >
            <TheoremCard data={rationalRootApply} variant="apply" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-candidates'} dangerouslySetInnerHTML={{ __html: demoUnits.candidates }} />,
          `An empty candidate list rules out rational roots only, never roots in general.`,
          <DiagramFrame
            key={'obj7-theorem'}
            id="rational-root-limits-converse"
            title="The Rational Root Theorem: what it does not say"
            source="/algebra/polynomials/rules"
            before={`The theorem filters candidates; it does not promise roots. The card separates the two.`}
            after={`An empty candidate list is information too: the roots are irrational or complex, and other tools take over.`}
          >
            <TheoremCard data={rationalRootConverse} variant="converse" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <DiagramFrame
            key={'obj8-theorem'}
            id="integer-root-theorem-chain"
            title="From the Rational Root Theorem to the Integer Root Theorem"
            source="/algebra/polynomials/rules"
            before={`For a monic polynomial the candidate list loses its fractions. The chain shows why.`}
            after={`Recognising a monic polynomial before the search saves the work with fractions.`}
          >
            <TheoremCard data={integerRootChain} variant="chain" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'unit-descartes'} dangerouslySetInnerHTML={{ __html: demoUnits.descartes }} />,
          `The rule gives possible counts; finding the roots still takes the other tools on this page.`,
        ]
    },

    // obj10: prose + upper/lower bound aggregation table
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'obj10-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj10Table }}
          />,
          `@academic[punchline:Two synthetic divisions can fence in every real root, so candidates outside the fence never need testing.]@`,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <DiagramFrame
            key={'obj11-theorem'}
            id="fundamental-theorem-algebra-converse"
            title="The Fundamental Theorem of Algebra: what it does not say"
            source="/algebra/polynomials/rules"
            before={`Exactly $n$ roots, but where they live and how to find them are separate questions. The card keeps them apart.`}
            after={`Existence is guaranteed; the finding is left to the other tools on this page.`}
          >
            <TheoremCard data={ftaConverse} variant="converse" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },

    // obj12: prose + Vieta's formulas aggregation table
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div
            key={'obj12-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj12Table }}
          />,
          `@academic[punchline:Any symmetric expression in the roots can be computed from the coefficients, without solving for a single root.]@`,
          <DiagramFrame
            key={'obj12-theorem'}
            id="vieta-formulas-apply"
            title="Vieta’s formulas, applied"
            source="/algebra/polynomials/rules"
            before={`The formulas as a check on a factorization, on the page’s cubic.`}
            after={`The coefficients know the roots’ sum and product before the roots themselves are found.`}
          >
            <TheoremCard data={vietaApply} variant="apply" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },

    // obj13: prose + common-mistakes aggregation table
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div
            key={'obj13-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj13Table }}
          />,
          <DiagramFrame
            key={'obj13-mistakes'}
            id="polynomial-theorem-pitfalls"
            title="Common pitfalls with the polynomial theorems"
            source="/algebra/polynomials/rules"
            after={sectionsContent.obj13.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },

    // obj14: NEW capstone with summary table — master toolkit of all theorems
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Polynomial Rules FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Polynomial Rules</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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