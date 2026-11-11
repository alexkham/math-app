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
import powersTableDiagrams from '@/app/components/visualizations/algebra/powers/powersTableDiagrams'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import SpecialCases from '@/app/components/infographics/SpecialCases/SpecialCases'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'
import PropertySheet from '@/app/components/infographics/PropertySheet/PropertySheet'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'


export async function getStaticProps(){
const keyWords = [
  "exponent rules",
  "laws of exponents",
  "exponent laws",
  "product rule exponents",
  "quotient rule exponents",
  "power of a power rule",
  "power of a product",
  "negative exponent rule",
  "zero exponent rule",
  "a^m * a^n = a^(m+n)",
  "exponent rules list",
  "simplify exponents",
  "exponent properties",
  "all exponent rules",
  "exponent rules examples"
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

  // obj9 — aggregation: domain restrictions narrowing across exponent types
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Exponent type</th>
      <th style="${tableHeaders.aggregation}">Restriction on base a</th>
      <th style="${tableHeaders.aggregation}">Why this restriction</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/powers/natural-exponents" style="${linkStyle}">Natural</a> &nbsp;(n ≥ 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any real number</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">repeated multiplication is defined for every real a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero &amp; <a href="/algebra/powers/negative-exponents" style="${linkStyle}">negative integer</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0⁻ⁿ involves division by zero; 0⁰ has no single agreed value</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/powers/rational-exponents" style="${linkStyle}">Rational</a> with even root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even roots of negatives are not real</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/algebra/powers/irrational-exponents" style="${linkStyle}">Irrational</a> / general real</td>
      <td style="padding: 12px 15px; color: #34495e;">a &gt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">continuous extension to a<sup>x</sup> requires a strictly positive base</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — aggregation: edge cases and common mistakes
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Expression</th>
      <th style="${tableHeaders.aggregation}">Interpretation</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0<sup>0</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">undefined in analysis; equal to 1 by convention in discrete math</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not covered by a<sup>0</sup> = 1 (which requires a ≠ 0); see <a href="/algebra/powers/zero-powers" style="${linkStyle}">zero powers</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0<sup>−n</sup> &nbsp;(n &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">undefined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">would require dividing by zero</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(−a)<sup>n</sup> &nbsp;vs&nbsp; −a<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−3)<sup>2</sup> = 9 &nbsp;vs&nbsp; −3<sup>2</sup> = −9</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parentheses change which operation comes first</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(a + b)<sup>n</sup> &nbsp;≠&nbsp; a<sup>n</sup> + b<sup>n</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">(2 + 3)<sup>2</sup> = 25 &nbsp;vs&nbsp; 2<sup>2</sup> + 3<sup>2</sup> = 13</td>
      <td style="padding: 12px 15px; color: #34495e;">exponent distributes over products, not sums</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary: master reference of every law of exponents on this page
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Rule</th>
      <th style="${tableHeaders.summary}">Formula</th>
      <th style="${tableHeaders.summary}">Example</th>
      <th style="${tableHeaders.summary}">Domain restriction</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>3</sup> · x<sup>5</sup> = x<sup>8</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bases must match</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>m</sup> ⁄ a<sup>n</sup> = a<sup>m−n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>7</sup> ⁄ x<sup>2</sup> = x<sup>5</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power of a power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x<sup>3</sup>)<sup>4</sup> = x<sup>12</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distinct from stacked a<sup>m<sup>n</sup></sup></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power of a product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ab)<sup>n</sup> = a<sup>n</sup> · b<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3x)<sup>4</sup> = 81 x<sup>4</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">applies to products, not sums</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power of a quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a ⁄ b)<sup>n</sup> = a<sup>n</sup> ⁄ b<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2 ⁄ 5)<sup>3</sup> = 8 ⁄ 125</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">b ≠ 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative exponent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>−n</sup> = 1 ⁄ a<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4<sup>−2</sup> = 1 ⁄ 16</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero exponent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>0</sup> = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">7<sup>0</sup> = 1, &nbsp;(−3)<sup>0</sup> = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0 &nbsp;(0<sup>0</sup> excluded)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Rational exponent</td>
      <td style="padding: 12px 15px; color: #34495e;">a<sup>m/n</sup> = <sup>n</sup>√(a<sup>m</sup>) = (<sup>n</sup>√a)<sup>m</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">8<sup>2/3</sup> = (∛8)<sup>2</sup> = 4</td>
      <td style="padding: 12px 15px; color: #34495e;">a ≥ 0 when n is even</td>
    </tr>
  </tbody>
</table>
`

//     const sectionsContent={
// obj0: {
//   title: `Key Terms`,
//   content: `
// ## The Rules
 
// - [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents)) — $a^m \\cdot a^n = a^{m+n}$
// - [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — $a^m / a^n = a^{m-n}$
// - [Power of a Power](!/algebra/definitions#power_of_a_power) — $(a^m)^n = a^{mn}$
// - [Power of a Product](!/algebra/definitions#power_of_a_product) — $(ab)^n = a^n b^n$
// - [Power of a Quotient](!/algebra/definitions#power_of_a_quotient) — $(a/b)^n = a^n / b^n$
// - [Zero Exponent](!/algebra/definitions#zero_exponent) — $a^0 = 1$
// - [Negative Exponent](!/algebra/definitions#negative_exponent) — $a^{-n} = 1/a^n$
// - [Rational Exponent](!/algebra/definitions#rational_exponent) — $a^{m/n} = \\sqrt[n]{a^m}$

// ## Formulas Used on This Page

// - [Product Rule](!/algebra/formulas#product_rule_exponents) — $a^m \\cdot a^n = a^{m+n}$
// - [Quotient Rule](!/algebra/formulas#quotient_rule_exponents) — $\\frac{a^m}{a^n} = a^{m-n}$
// - [Power of a Power](!/algebra/formulas#power_of_a_power) — $(a^m)^n = a^{mn}$
// - [Power of a Product](!/algebra/formulas#power_of_a_product) — $(ab)^n = a^n \\cdot b^n$
// - [Power of a Quotient](!/algebra/formulas#power_of_a_quotient) — $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$
// - [Negative Exponent](!/algebra/formulas#negative_exponent) — $a^{-n} = \\frac{1}{a^n}$
// - [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip) — $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$
// - [Zero Exponent](!/algebra/formulas#zero_exponent) — $a^0 = 1$
// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },
 
  
//     obj1: {
//   title: `Product Rule`,
//   content: `Multiplying two powers that share the same base adds the exponents:

// $$a^m \\cdot a^n = a^{m+n}$$

// The base stays fixed. Only the exponents combine. The expression $x^3 \\cdot x^5 = x^8$, and $2^{-1} \\cdot 2^{4} = 2^3 = 8$.

// The rule requires the bases to match. The product $2^3 \\cdot 3^4$ cannot be reduced by adding exponents — different bases mean the rule does not apply.

// This identity holds for all real exponents $m$ and $n$, subject to the domain restrictions on the base outlined later on this page.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
// obj2: {
//   title: `Quotient Rule`,
//   content: `Dividing two powers that share the same base subtracts the exponents:

// $$\\frac{a^m}{a^n} = a^{m-n} \\qquad (a \\neq 0)$$

// The expression $\\frac{x^7}{x^2} = x^5$, and $\\frac{5^3}{5^5} = 5^{-2} = \\frac{1}{25}$.

// When $m = n$, the result is $a^0 = 1$. When $m < n$, the result is a [negative exponent](!/algebra/powers/negative-exponents) — a reciprocal. Both cases are natural consequences of subtracting exponents, and both require $a \\neq 0$.

// As with the product rule, the bases must be identical for the rule to apply.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj3: {
//   title: `Power of a Power`,
//   content: `Raising a power to another power multiplies the exponents:

// $$(a^m)^n = a^{m \\cdot n}$$

// The expression $(x^3)^4 = x^{12}$, and $(2^{-1})^3 = 2^{-3} = \\frac{1}{8}$.

// This rule must not be confused with stacked exponents. The notation $a^{m^n}$ means $a^{(m^n)}$, evaluated from the top down — it is not the same as $(a^m)^n = a^{mn}$. For example, $2^{3^2} = 2^9 = 512$, while $(2^3)^2 = 2^6 = 64$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj4: {
//   title: `Power of a Product`,
//   content: `An exponent applied to a product distributes to each factor:

// $$(ab)^n = a^n \\cdot b^n$$

// The expression $(3x)^4 = 3^4 \\cdot x^4 = 81x^4$. The rule extends to any number of factors: $(abc)^n = a^n b^n c^n$.

// The distribution works because multiplication is commutative — the factors can be rearranged so that all copies of $a$ group together and all copies of $b$ group together.

// A critical warning: this rule applies to products only. It does not extend to sums. The expression $(a + b)^n$ is not equal to $a^n + b^n$. Expanding a sum raised to a power requires the binomial theorem or direct multiplication.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj5: {
//   title: `Power of a Quotient`,
//   content: `An exponent applied to a quotient distributes to numerator and denominator:

// $$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\qquad (b \\neq 0)$$

// The expression $\\left(\\frac{2}{5}\\right)^3 = \\frac{8}{125}$, and $\\left(\\frac{x}{y^2}\\right)^4 = \\frac{x^4}{y^8}$.

// Combined with the negative exponent rule, this identity also handles cases where the exponent is negative. The expression $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$ — the negative exponent flips the fraction before the positive power is applied.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


   

//     obj6: {
//   title: `Negative Exponent Rule`,
//   content: `A negative exponent produces the reciprocal of the corresponding positive power:

// $$a^{-n} = \\frac{1}{a^n} \\qquad (a \\neq 0)$$

// The expression $4^{-2} = \\frac{1}{16}$, and $x^{-1} = \\frac{1}{x}$.

// The rule works in both directions. A negative exponent in the denominator moves the term to the numerator: $\\frac{1}{a^{-n}} = a^n$. An expression like $\\frac{x^{-3}}{y^{-2}}$ rewrites as $\\frac{y^2}{x^3}$ — each negative exponent crosses the fraction bar and becomes positive.

// The full development of this rule, including why the definition is forced by the quotient rule, appears on the [negative exponents](!/algebra/powers/negative-exponents) page.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj7: {
//   title: `Zero Exponent Rule`,
//   content: `Any nonzero base raised to the power of zero equals $1$:

// $$a^0 = 1 \\qquad (a \\neq 0)$$

// The result follows from the quotient rule: $a^0 = a^{n-n} = \\frac{a^n}{a^n} = 1$.

// This holds for every nonzero base — positive, negative, large, small, fractional. The expressions $7^0$, $(-3)^0$, and $(0.001)^0$ all equal $1$.

// The case $a = 0$ is excluded. The expression $0^0$ is not covered by this rule — it is addressed separately on the [zero powers](!/algebra/powers/zero-powers) page.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj8: {
//   title: `Rational Exponent Rule`,
//   content: `A fractional exponent connects powers to roots:

// $$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

// Both forms are equivalent. The expression $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$, and $27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$.

// The special case $m = 1$ gives the pure root: $a^{1/n} = \\sqrt[n]{a}$. Exponent notation and radical notation are interchangeable representations of the same operation.

// When $m/n$ is negative, the [negative exponent](!/algebra/powers/negative-exponents) rule applies first: $a^{-m/n} = \\frac{1}{a^{m/n}}$. The full treatment, including domain considerations for even roots, appears on the [rational exponents](!/algebra/powers/rational-exponents) page.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj9: {
//   title: `Domain Restrictions`,
//   content: `Each extension of the exponent definition tightens the conditions on the base. The laws themselves do not change — but the set of bases for which they apply narrows.

// For [natural exponents](!/algebra/powers/natural-exponents) ($n \\geq 1$), no restriction exists. Any real number — positive, negative, or zero — can serve as the base.

// For [zero and negative exponents](!/algebra/powers/negative-exponents), the base must be nonzero: $a \\neq 0$. Division by zero makes $0^{-n}$ and $0^0$ problematic.

// For [rational exponents](!/algebra/powers/rational-exponents) with even roots, the base must be non-negative: $a \\geq 0$. Even roots of negative numbers are not real.

// For [irrational exponents](!/algebra/powers/irrational-exponents) and real exponents generally, the base must be strictly positive: $a > 0$. The continuous extension that defines $a^x$ for all real $x$ requires a positive base to function.

// The pattern is monotonic — each stage permits fewer bases than the last. Recognizing which restriction applies to a given expression prevents applying laws outside their valid domain.`,
//   before: ``,
//   after: ``,
//   link: '',
// },



// obj10: {
//   title: `Edge Cases and Common Mistakes`,
//   content: `Several expressions sit at the boundaries of the rules and require specific attention.

// The expression $0^0$ is undefined in analysis and equal to $1$ by convention in discrete mathematics. It is not covered by the zero exponent rule, which requires $a \\neq 0$. The [zero powers](!/algebra/powers/zero-powers) page addresses this case in full.

// The expression $0^{-n}$ is undefined for any positive $n$, since it demands division by zero. No law of exponents produces a value for it.

// The expressions $(-a)^n$ and $-a^n$ are not interchangeable. The first raises the negative quantity to the power: $(-3)^2 = 9$. The second raises $a$ to the power and then negates: $-3^2 = -9$. Parentheses determine which interpretation applies.

// The most persistent algebraic error is distributing an exponent over a sum: $(a + b)^n \\neq a^n + b^n$. The power of a product rule applies to multiplication, not addition. The expression $(2 + 3)^2 = 25$, while $2^2 + 3^2 = 13$. Expanding $(a + b)^n$ requires the binomial theorem or term-by-term multiplication — the exponent does not distribute.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     obj11:{
//       title:`Master Reference of Exponent Laws`,
//       content:`Every rule introduced above belongs to a single family of identities — the laws of exponents. The table below is the master reference: each rule with its formula, a representative example, and the domain restriction that determines when it applies. This is the page in one card, useful both to review and to look up while solving problems elsewhere.`,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
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


// Concept introduction (section 1, "Product Rule") — template A, definition
// last. Running instance: three products of powers written out factor by
// factor. Old obj1 text is kept in sectionsContent.obj1, unused; its six
// passages, formula box and link, pitfall, the product demo frame and its line
// are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciFactorsTable = ciTableOpen(['product', 'written out', 'factors', 'result']) +
  ciRow(['2² · 2³', '(2 · 2) · (2 · 2 · 2)', '2 + 3 = 5', '2⁵ = 32']) +
  ciRow(['x³ · x⁵', '(x · x · x) · (x · x · x · x · x)', '3 + 5 = 8', 'x⁸'], { shade: true }) +
  ciRow(['10² · 10⁴', '100 · 10 000', '2 + 4 = 6', '10⁶'], { last: true, color: '#2563EB', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## The Rules

- [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents)) — $a^m \\cdot a^n = a^{m+n}$
- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — $a^m / a^n = a^{m-n}$
- [Power of a Power](!/algebra/definitions#power_of_a_power) — $(a^m)^n = a^{mn}$
- [Power of a Product](!/algebra/definitions#power_of_a_product) — $(ab)^n = a^n b^n$
- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient) — $(a/b)^n = a^n / b^n$
- [Zero Exponent](!/algebra/definitions#zero_exponent) — $a^0 = 1$
- [Negative Exponent](!/algebra/definitions#negative_exponent) — $a^{-n} = 1/a^n$
- [Rational Exponent](!/algebra/definitions#rational_exponent) — $a^{m/n} = \\sqrt[n]{a^m}$

## Formulas Used on This Page

- [Product Rule](!/algebra/formulas#product_rule_exponents) — $a^m \\cdot a^n = a^{m+n}$
- [Quotient Rule](!/algebra/formulas#quotient_rule_exponents) — $\\frac{a^m}{a^n} = a^{m-n}$
- [Power of a Power](!/algebra/formulas#power_of_a_power) — $(a^m)^n = a^{mn}$
- [Power of a Product](!/algebra/formulas#power_of_a_product) — $(ab)^n = a^n \\cdot b^n$
- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient) — $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$
- [Negative Exponent](!/algebra/formulas#negative_exponent) — $a^{-n} = \\frac{1}{a^n}$
- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip) — $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$
- [Zero Exponent](!/algebra/formulas#zero_exponent) — $a^0 = 1$
`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

  obj1: {
    title: `Product Rule`,
    content: `Multiplying two powers that share the same base adds the exponents:

@academic[formula_callout:Product Rule
$$a^m \\cdot a^n = a^{m+n}$$
/algebra/formulas#product_rule_exponents]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The base stays fixed. Only the exponents combine. The expression $x^3 \\cdot x^5 = x^8$, and $2^{-1} \\cdot 2^{4} = 2^3 = 8$.

@academic[pitfall,aside:true,width:35%:Multiplying the exponents
Writing $2^3 \\cdot 2^2$ as $2^6$ gives $64$. The product is $8 \\cdot 4 = 32 = 2^5$: the exponents add, $3 + 2 = 5$.
[Read more](!#pitfall-multiplying-the-exponents)]@

Counting factors shows why the exponents add. In $x^3 \\cdot x^5$ the first power holds three factors of $x$ and the second holds five, and writing them side by side gives one string of eight factors. The rule is a shortcut for that count.

The rule requires the bases to match. The product $2^3 \\cdot 3^4$ cannot be reduced by adding exponents — different bases mean the rule does not apply.

This identity holds for all real exponents $m$ and $n$, subject to the domain restrictions on the base outlined later on this page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Quotient Rule`,
    content: `Dividing two powers that share the same base subtracts the exponents:

@academic[formula_callout:Quotient Rule
$$\\frac{a^m}{a^n} = a^{m-n}$$
/algebra/formulas#quotient_rule_exponents]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The rule requires $a \\neq 0$. The expression $\\frac{x^7}{x^2} = x^5$, and $\\frac{5^3}{5^5} = 5^{-2} = \\frac{1}{25}$.

@academic[pitfall,aside:true,width:35%:Dividing the exponents
Writing $\\frac{2^6}{2^2}$ as $2^{6/2} = 2^3$ gives $8$. The quotient is $\\frac{64}{4} = 16 = 2^4$: the exponents subtract, $6 - 2 = 4$.
[Read more](!#pitfall-dividing-the-exponents)]@

When $m = n$, the result is $a^0 = 1$. When $m < n$, the result is a [negative exponent](!/algebra/powers/negative-exponents) — a reciprocal. Both cases are natural consequences of subtracting exponents, and both require $a \\neq 0$.

As with the product rule, the bases must be identical for the rule to apply.

The subtraction always runs in the same order: the exponent of the numerator minus the exponent of the denominator. In $\\frac{5^3}{5^5}$ that is $3 - 5 = -2$, which is why the result is a fraction below $1$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Power of a Power`,
    content: `Raising a power to another power multiplies the exponents:

@academic[formula_callout:Power of a Power
$$(a^m)^n = a^{mn}$$
/algebra/formulas#power_of_a_power]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The expression $(x^3)^4 = x^{12}$, and $(2^{-1})^3 = 2^{-3} = \\frac{1}{8}$.

@academic[pitfall,aside:true,width:35%:Adding the exponents
Writing $(3^2)^3$ as $3^{2+3} = 3^5$ gives $243$. The value is $9^3 = 729 = 3^6$: the exponents multiply, $2 \\cdot 3 = 6$.
[Read more](!#pitfall-adding-the-exponents)]@

Counting factors shows why the exponents multiply. The power $(x^3)^4$ is four copies of the block $x^3$, and each block holds three factors of $x$, so the total is $4 \\cdot 3 = 12$ factors.

This rule must not be confused with stacked exponents. The notation $a^{m^n}$ means $a^{(m^n)}$, evaluated from the top down — it is not the same as $(a^m)^n = a^{mn}$. For example, $2^{3^2} = 2^9 = 512$, while $(2^3)^2 = 2^6 = 64$.

@academic[fact,aside:true,width:35%:A tower of five 2s
Grouped from the bottom, five $2$s give $(((2^2)^2)^2)^2 = 2^{16} = 65536$. Stacked as a tower, the same five $2$s give $2^{65536}$, a number with 19,729 digits: each level becomes the exponent of the next.]@

The gap between the two readings widens quickly as more exponents are stacked. With four $2$s, grouping from the bottom gives $((2^2)^2)^2 = 2^{2 \\cdot 2 \\cdot 2} = 2^8 = 256$, because the power of a power rule only multiplies the exponents. Read from the top, the stack gives $2^{2^{2^2}} = 2^{2^4} = 2^{16} = 65536$, because each result becomes the exponent of the level below it.

@academic[punchline:Exponents add when groups of factors are joined and multiply when one group is copied.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Power of a Product`,
    content: `An exponent applied to a product distributes to each factor:

@academic[formula_callout:Power of a Product
$$(ab)^n = a^n \\cdot b^n$$
/algebra/formulas#power_of_a_product]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The expression $(3x)^4 = 3^4 \\cdot x^4 = 81x^4$.

@academic[rule_corollary_plain:The rule extends to any number of factors: $(abc)^n = a^n b^n c^n$.]@

@academic[pitfall,aside:true,width:35%:Raising only the variable
Writing $(2x)^3$ as $2x^3$ leaves the $2$ unraised: at $x = 1$ it gives $2$, but $(2 \\cdot 1)^3 = 8$. Every factor takes the exponent: $(2x)^3 = 8x^3$.
[Read more](!#pitfall-raising-only-the-variable)]@

The distribution works because multiplication is commutative — the factors can be rearranged so that all copies of $a$ group together and all copies of $b$ group together.

A critical warning: this rule applies to products only. It does not extend to sums. The expression $(a + b)^n$ is not equal to $a^n + b^n$. Expanding a sum raised to a power requires the binomial theorem or direct multiplication.

@academic[punchline:An exponent distributes over multiplication, factor by factor, but not over addition.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Power of a Quotient`,
    content: `An exponent applied to a quotient distributes to numerator and denominator:

@academic[formula_callout:Power of a Quotient
$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$
/algebra/formulas#power_of_a_quotient]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The rule requires $b \\neq 0$. The expression $\\left(\\frac{2}{5}\\right)^3 = \\frac{8}{125}$, and $\\left(\\frac{x}{y^2}\\right)^4 = \\frac{x^4}{y^8}$.

Combined with the negative exponent rule, this identity also handles cases where the exponent is negative. The expression $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$ — the negative exponent flips the fraction before the positive power is applied.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Negative Exponent Rule`,
    content: `A negative exponent produces the reciprocal of the corresponding positive power:

@academic[formula_callout:Negative Exponent
$$a^{-n} = \\frac{1}{a^n}$$
/algebra/formulas#negative_exponent]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The rule requires $a \\neq 0$. The expression $4^{-2} = \\frac{1}{16}$, and $x^{-1} = \\frac{1}{x}$.

@academic[rule_corollary_plain:The rule works in both directions. A negative exponent in the denominator moves the term to the numerator: $\\frac{1}{a^{-n}} = a^n$.]@

@academic[pitfall,aside:true,width:35%:Reading a negative exponent as a negative number
Writing $5^{-2}$ as $-25$ treats the minus sign as the sign of the value. The exponent asks for a reciprocal: $5^{-2} = \\frac{1}{25}$, which is positive.
[Read more](!#pitfall-reading-a-negative-exponent-as-a-negative-number)]@

An expression like $\\frac{x^{-3}}{y^{-2}}$ rewrites as $\\frac{y^2}{x^3}$ — each negative exponent crosses the fraction bar and becomes positive.

Numbers make the pattern easy to follow. $2^{-1} = \\frac{1}{2}$, $2^{-2} = \\frac{1}{4}$ and $2^{-3} = \\frac{1}{8}$: each step down in the exponent divides by the base once more, so the values shrink toward $0$ as the exponent decreases.

Applied to an entire fraction, the negative exponent flips it:

@academic[formula_callout:Negative Exponent Flip
$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$
/algebra/formulas#negative_exponent_flip]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The full development of this rule, including why the definition is forced by the quotient rule, appears on the [negative exponents](!/algebra/powers/negative-exponents) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Zero Exponent Rule`,
    content: `Any nonzero base raised to the power of zero equals $1$:

@academic[formula_callout:Zero Exponent
$$a^0 = 1$$
/algebra/formulas#zero_exponent]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The rule requires $a \\neq 0$. The result follows from the quotient rule: $a^0 = a^{n-n} = \\frac{a^n}{a^n} = 1$.

This holds for every nonzero base — positive, negative, large, small, fractional. The expressions $7^0$, $(-3)^0$, and $(0.001)^0$ all equal $1$.

The case $a = 0$ is excluded. The expression $0^0$ is not covered by this rule — it is addressed separately on the [zero powers](!/algebra/powers/zero-powers) page.

@academic[punchline:For any nonzero base, $a^0 = 1$ is the only value that keeps the quotient rule true.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Rational Exponent Rule`,
    content: `A fractional exponent connects powers to roots:

@academic[formula_callout:Rational Exponent Rule
$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$]@

Both forms are equivalent. The expression $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$, and $27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$.

@academic[rule_corollary_plain:The special case $m = 1$ gives the pure root: $a^{1/n} = \\sqrt[n]{a}$.]@

@academic[pitfall,aside:true,width:35%:Multiplying by the exponent
Writing $9^{1/2}$ as $9 \\cdot \\frac{1}{2}$ gives $4.5$. The exponent $\\frac{1}{2}$ asks for a square root: $9^{1/2} = \\sqrt{9} = 3$.
[Read more](!#pitfall-multiplying-by-the-exponent)]@

In $8^{2/3}$, the denominator $3$ of the exponent names the root and the numerator $2$ names the power. Taking the root first keeps the numbers small: $\\sqrt[3]{8} = 2$, and then $2^2 = 4$. Taking the power first reaches the same value by a longer route, $\\sqrt[3]{64} = 4$.

Exponent notation and radical notation are interchangeable representations of the same operation.

When $m/n$ is negative, the [negative exponent](!/algebra/powers/negative-exponents) rule applies first: $a^{-m/n} = \\frac{1}{a^{m/n}}$. The full treatment, including domain considerations for even roots, appears on the [rational exponents](!/algebra/powers/rational-exponents) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Domain Restrictions`,
    content: `Each extension of the exponent definition tightens the conditions on the base. The laws themselves do not change — but the set of bases for which they apply narrows.

For [natural exponents](!/algebra/powers/natural-exponents) ($n \\geq 1$), no restriction exists. Any real number — positive, negative, or zero — can serve as the base.

For [zero and negative exponents](!/algebra/powers/negative-exponents), the base must be nonzero: $a \\neq 0$. Division by zero rules out $0^{-n}$, and $0^0$ has no single agreed value.

For [rational exponents](!/algebra/powers/rational-exponents) with even roots, the base must be non-negative: $a \\geq 0$. Even roots of negative numbers are not real.

For [irrational exponents](!/algebra/powers/irrational-exponents) and real exponents generally, the base must be strictly positive: $a > 0$. The continuous extension that defines $a^x$ for all real $x$ requires a positive base to function.

The pattern is monotonic — each stage permits fewer bases than the last. Recognizing which restriction applies to a given expression prevents applying laws outside their valid domain.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Edge Cases and Common Mistakes`,
    content: `Several expressions sit at the boundaries of the rules and require specific attention.

The expression $0^0$ is undefined in analysis and equal to $1$ by convention in discrete mathematics. It is not covered by the zero exponent rule, which requires $a \\neq 0$. The [zero powers](!/algebra/powers/zero-powers) page addresses this case in full.

The expression $0^{-n}$ is undefined for any positive $n$, since it demands division by zero. No law of exponents produces a value for it.

The expressions $(-a)^n$ and $-a^n$ are not interchangeable. The first raises the negative quantity to the power: $(-3)^2 = 9$. The second raises $a$ to the power and then negates: $-3^2 = -9$. Parentheses determine which interpretation applies.

The most persistent algebraic error is distributing an exponent over a sum: $(a + b)^n \\neq a^n + b^n$. The power of a product rule applies to multiplication, not addition. The expression $(2 + 3)^2 = 25$, while $2^2 + 3^2 = 13$. Expanding $(a + b)^n$ requires the binomial theorem or term-by-term multiplication — the exponent does not distribute.`,
    before: ``,
    after: `Four of the six slips misapply a rule for combining exponents: the product rule adds them, the quotient rule subtracts them, a power of a power multiplies them, and a power of a product goes to every factor. The other two read the exponent as an ordinary number: $5^{-2}$ is a reciprocal, not $-25$, and $9^{1/2}$ is a square root, not $9 \\cdot \\frac{1}{2}$. A quick numerical check exposes each of them: evaluate both sides, substitute $x = 1$, or square the answer.`,
    link: '',
  },

  obj11: {
    title: `Master Reference of Exponent Laws`,
    content: `This summary collects all eight laws of exponents from the page on one set of cards. Each card gives the name of the law, its formula and a worked example, with a line on what the law does and a link to the section that explains it. A badge at the bottom of each card states when the law holds.

The first five cards combine powers: the product and the quotient of powers with the same base, a power raised to a power, and a power of a product or of a quotient. The last three extend the meaning of an exponent to negative numbers, to zero and to fractions, and their badges keep a zero base or an even root of a negative number out.`,
    formulaSheetAfter: `Before applying a law, check two things on its card: that the expression has the shape the law needs, such as matching bases or a product rather than a sum, and that the base meets the condition in the badge. Most slips with exponents come from skipping one of these checks.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
  obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
  obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
  obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

}


  const introContent = {
  id: "intro",
  title: "The Rules in One Place",
  content: `The [laws of exponents](!/algebra/powers/exponent-rules/) were derived step by step across the preceding pages — first for [natural exponents](!/algebra/powers/natural-exponents), then verified as the definition extended to [negative](!/algebra/powers/negative-exponents), [rational](!/algebra/powers/rational-exponents), and [irrational](!/algebra/powers/irrational-exponents) exponents. This page collects every rule, its domain restrictions, and the edge cases that require caution.`
}

// FAQ pass 2026-10-31: kept all four. Added different bases (one paragraph
// under the product rule; the matching-exponent case is the power of a
// product rule read backwards) and the order of subtraction in the quotient
// rule (one sentence under the quotient rule). No heading asks either.
const faqQuestions = {
  obj1: {
    question: "Does an exponent distribute over addition?",
    answer: "No. $(a + b)^n \\neq a^n + b^n$. Check it with numbers: $(2 + 3)^2 = 25$, while $2^2 + 3^2 = 13$. The distribution rule covers products only, $(ab)^n = a^n b^n$, and it works because multiplication is commutative, so copies of $a$ and $b$ can be regrouped. A sum raised to a power needs the binomial theorem or direct multiplication.",
    sectionId: "10"
  },
  obj2: {
    question: "Why do you add exponents when multiplying but multiply them for a power of a power?",
    answer: "They count different things. In $a^m \\cdot a^n$ you set two groups of factors side by side, so the totals add and you get $a^{m+n}$. In $(a^m)^n$ you make $n$ copies of the whole block $a^m$, so the count is $m$ taken $n$ times, giving $a^{mn}$. Adding joins groups; multiplying repeats one group.",
    sectionId: "1"
  },
  obj3: {
    question: "Which exponents require a positive base?",
    answer: "It depends on the exponent type, and the restriction tightens at each stage. [Natural exponents](!/algebra/powers/natural-exponents) permit any real base. [Negative exponents](!/algebra/powers/negative-exponents) and the zero exponent require $a \\neq 0$. [Rational exponents](!/algebra/powers/rational-exponents) with an even root require $a \\geq 0$. [Irrational exponents](!/algebra/powers/irrational-exponents) and real exponents generally require $a > 0$.",
    sectionId: "9"
  },
  obj4: {
    question: "Do the exponent laws change when the exponent is not a whole number?",
    answer: "No. The product, quotient, and power rules read identically for natural, negative, rational, and irrational exponents, and that invariance is precisely what justifies extending the definition in the first place. What changes is the set of bases each law is valid for, which narrows at every stage. The algebra stays put; only the domain needs checking.",
    sectionId: "9"
  },
  obj5: {
    question: "Can you add exponents when the bases are different?",
    answer: "No. The product rule needs one shared base, so $2^3 \\cdot 3^4$ cannot be turned into a single power by adding exponents: its value is $8 \\cdot 81 = 648$, nowhere near $6^7 = 279936$. When the exponents match instead, the power of a product rule read backwards does combine the bases: $2^3 \\cdot 3^3 = (2 \\cdot 3)^3 = 6^3 = 216$.",
    sectionId: "1"
  },
  obj6: {
    question: "In the quotient rule, which exponent is subtracted from which?",
    answer: "The numerator's exponent minus the denominator's, always in that order. In $\\frac{5^3}{5^5}$ that is $3 - 5 = -2$, so the result is $5^{-2} = \\frac{1}{25}$. Subtracting the other way gives $5^2 = 25$, the reciprocal of the right answer. A quick check for a base above $1$: when the larger exponent sits below the bar, the quotient must come out less than $1$.",
    sectionId: "2"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Exponent Rules",
    "description": "Complete list of exponent rules: product, quotient, power of a power, negative exponents, zero exponent, and fractional exponents with examples and domain restrictions.",
    "url": "https://www.learnmathclass.com/algebra/powers/exponent-rules",
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
      "name": "Laws of Exponents"
    },
    "teaches": [
      "Product rule: a^m · a^n = a^(m+n)",
      "Quotient rule: a^m / a^n = a^(m-n)",
      "Power of a power: (a^m)^n = a^(mn)",
      "Power of a product: (ab)^n = a^n b^n",
      "Negative exponent rule: a^(-n) = 1/a^n",
      "Zero exponent rule: a^0 = 1",
      "Domain restrictions for different exponent types"
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
        "name": "Powers",
        "item": "https://www.learnmathclass.com/algebra/powers"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Exponent Rules",
        "item": "https://www.learnmathclass.com/algebra/powers/exponent-rules"
      }
    ]
  }
}




  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const conceptIntroFigures = {
    factorsTable: ciFactorsTable,
  };

  const demoUnits = {
    product: demoUnitFrame({
      svg: powersTableDiagrams['b2-default'],
      caption: '2&#179; &#183; 2&#8308; = 2&#8311;: add the rows',
      text: 'Read 8 from the row of 2&#179; and 16 from the row of 2&#8308;; their product, 128, sits in the row of 2&#8311;, three rows plus four rows down. Multiplying powers of the same base adds the exponents because it concatenates the lists of factors, and the table makes the addition of row numbers visible. Check any product against the table on the',
      href: '/algebra/visual-tools/powers-table',
      linkText: 'powers table',
    }),
  };

  const expQuotientCases = {
    prefaceTitle: 'Three outcomes of one rule',
    preface: 'Dividing two powers of the same base subtracts the exponents. Whether $m - n$ comes out positive, zero or negative decides what the result looks like.',
    conclusionTitle: 'Takeaway',
    conclusion: 'All three cases are natural consequences of subtracting exponents, and all three require $a \\neq 0$ and identical bases.',
    parent: {
      kicker: 'Quotient rule',
      formula: '$\\dfrac{a^m}{a^n} = a^{m-n}$',
      splitBy: '$m$ compared with $n$',
      desc: 'requires $a \\neq 0$',
    },
    cases: [
      {
        id: 'greater', condition: '$m > n$',
        count: { n: '+' },
        headline: 'A positive power',
        formula: '$a^{m-n}$ with $m - n > 0$',
        example: '$\\dfrac{x^7}{x^2} = x^5$',
      },
      {
        id: 'equal', condition: '$m = n$',
        count: { n: '1' },
        headline: 'The result is 1',
        formula: '$a^0 = 1$',
      },
      {
        id: 'less', condition: '$m < n$',
        count: { n: '−' },
        headline: 'A negative exponent',
        desc: 'a reciprocal; see [negative exponents](!/algebra/powers/negative-exponents)',
        example: '$\\dfrac{5^3}{5^5} = 5^{-2} = \\dfrac{1}{25}$',
      },
    ],
  };

  // PropertySheet (obj11): exponent-law-restrictions
  const exponentLawCards = {
    header: {
      kicker: 'laws of exponents',
      title: 'Each law with its restriction',
      lede: 'Five of the eight laws always come with a condition, and the other three need one beyond natural exponents; the condition is part of the law.',
    },
    labels: { more: 'Example', detailsTitle: '' },
    verdicts: {
      always: { label: 'Free for natural exponents', color: '#2563EB', bg: '#dbeafe', mark: 'check' },
      cond: { label: 'Restricted', color: '#06357A', bg: '#e8eefc', mark: 'half' },
    },
    groups: [{ properties: [
      { id: 'prod', name: 'Product', verdict: 'always', statement: '$a^m \\cdot a^n = a^{m+n}$', note: 'the bases must match', condition: '$a \\neq 0$ if an exponent is zero or negative', details: '$x^3 \\cdot x^5 = x^8$' },
      { id: 'quot', name: 'Quotient', verdict: 'cond', statement: '$\\dfrac{a^m}{a^n} = a^{m-n}$', condition: '$a \\neq 0$', details: '$\\dfrac{x^7}{x^2} = x^5$' },
      { id: 'pp', name: 'Power of a power', verdict: 'always', statement: '$(a^m)^n = a^{mn}$', note: 'not the stacked $a^{m^n}$', condition: '$a \\neq 0$ if an exponent is zero or negative; $a \\geq 0$ for fractional exponents, since $((-3)^2)^{1/2} = 3$ but $(-3)^1 = -3$', details: '$(x^3)^4 = x^{12}$' },
      { id: 'pprod', name: 'Power of a product', verdict: 'always', statement: '$(ab)^n = a^n b^n$', note: 'for products only, never sums', condition: '$a, b \\neq 0$ if $n$ is zero or negative; $a, b \\geq 0$ for fractional $n$', details: '$(3x)^4 = 81x^4$' },
      { id: 'pquot', name: 'Power of a quotient', verdict: 'cond', statement: '$\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$', condition: '$b \\neq 0$', details: '$\\left(\\dfrac{2}{5}\\right)^3 = \\dfrac{8}{125}$' },
      { id: 'neg', name: 'Negative exponent', verdict: 'cond', statement: '$a^{-n} = \\dfrac{1}{a^n}$', condition: '$a \\neq 0$', details: '$4^{-2} = \\dfrac{1}{16}$' },
      { id: 'zero', name: 'Zero exponent', verdict: 'cond', statement: '$a^0 = 1$', condition: '$a \\neq 0$; $0^0$ is excluded', details: '$7^0 = 1$ and $(-3)^0 = 1$' },
      { id: 'rat', name: 'Rational exponent', verdict: 'cond', statement: '$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$', condition: '$a \\geq 0$ when $n$ is even', details: '$8^{2/3} = (\\sqrt[3]{8})^2 = 4$' },
    ] }],
  };

  // MistakeFix batch 5, 2026-11-02: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj10 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'multiplying-the-exponents', name: `Multiplying the exponents`, errorAt: 1,
        what: `Two powers of the same base are multiplied, and the exponents are multiplied too, as in the power of a power rule.`,
        wrong: [`$$2^3 \\cdot 2^2$$`, `$$= 2^{3 \\cdot 2} = 2^6 = 64$$`],
        right: [`$$2^3 \\cdot 2^2$$`, `The product rule adds the exponents.
$$= 2^{3 + 2} = 2^5 = 32$$`],
        why: `The product rule and the power of a power rule both combine two exponents, and the one that multiplies is easily borrowed for the one that adds.`,
        check: `Evaluate both sides. $2^3 \\cdot 2^2 = 8 \\cdot 4 = 32$, which matches $2^5$ and not $2^6 = 64$.` },
      { id: 'dividing-the-exponents', name: `Dividing the exponents`, errorAt: 1,
        what: `Two powers of the same base are divided, and the exponents are divided as well.`,
        wrong: [`$$\\frac{2^6}{2^2}$$`, `$$= 2^{6/2} = 2^3 = 8$$`],
        right: [`$$\\frac{2^6}{2^2}$$`, `The quotient rule subtracts the exponents.
$$= 2^{6 - 2} = 2^4 = 16$$`],
        why: `Dividing the powers suggests dividing the exponents, by the same pattern that makes multiplying them look right in the product rule.`,
        check: `Evaluate both sides. $\\frac{2^6}{2^2} = \\frac{64}{4} = 16 = 2^4$. Cancelling shows it too: two of the six factors of $2$ cancel, leaving four.` },
      { id: 'adding-the-exponents', name: `Adding the exponents`, errorAt: 1,
        what: `A power is raised to another power, and the exponents are added as in the product rule.`,
        wrong: [`$$(3^2)^3$$`, `$$= 3^{2 + 3} = 3^5 = 243$$`],
        right: [`$$(3^2)^3$$`, `The power of a power rule multiplies the exponents.
$$= 3^{2 \\cdot 3} = 3^6 = 729$$`],
        why: `$(3^2)^3$ shows two exponents next to each other, which looks like the two exponents of the product rule's $a^m \\cdot a^n$.`,
        check: `Write out the copies. $(3^2)^3 = 3^2 \\cdot 3^2 \\cdot 3^2$ is three blocks of two factors, six factors in all, and $9 \\cdot 9 \\cdot 9 = 729$.` },
      { id: 'raising-only-the-variable', name: `Raising only the variable`, errorAt: 1,
        what: `A product such as $2x$ is raised to a power, and the exponent is applied to the variable but not to the number in front of it.`,
        wrong: [`$$(2x)^3$$`, `$$= 2x^3$$`],
        right: [`$$(2x)^3$$`, `The exponent goes to every factor of the product.
$$= 2^3 \\cdot x^3 = 8x^3$$`],
        why: `$2x^3$ and $(2x)^3$ differ only by the parentheses, and the coefficient is read as standing outside the power.`,
        check: `Substitute $x = 1$. The original gives $(2 \\cdot 1)^3 = 8$; the wrong form gives $2$ and the right form gives $8$.` },
      { id: 'reading-a-negative-exponent-as-a-negative-number', name: `Reading a negative exponent as a negative number`, errorAt: 1,
        what: `The minus sign in the exponent is moved onto the value, so the power becomes negative instead of becoming a reciprocal.`,
        wrong: [`$$5^{-2}$$`, `$$= -5^2 = -25$$`],
        right: [`$$5^{-2}$$`, `A negative exponent gives the reciprocal of the positive power.
$$= \\frac{1}{5^2} = \\frac{1}{25}$$`],
        why: `Everywhere else a minus sign makes a number negative, and that meaning is carried into the exponent.`,
        check: `A positive base raised to any power is positive, so a negative result is impossible. The pattern $5^1 = 5$, $5^0 = 1$, $5^{-1} = \\frac{1}{5}$, $5^{-2} = \\frac{1}{25}$ divides by $5$ at each step.` },
      { id: 'multiplying-by-the-exponent', name: `Multiplying by the exponent`, errorAt: 1,
        what: `A fractional exponent is treated as a multiplier, so the base is multiplied by the fraction instead of having a root taken.`,
        wrong: [`$$9^{1/2}$$`, `$$= 9 \\cdot \\frac{1}{2} = 4.5$$`],
        right: [`$$9^{1/2}$$`, `The exponent $\\frac{1}{2}$ is a square root.
$$= \\sqrt{9} = 3$$`],
        why: `The exponent is read as an ordinary number to multiply by, instead of as an instruction about repeated multiplication.`,
        check: `Square the answer. Since $(9^{1/2})^2 = 9^1 = 9$, the value must square to $9$. But $4.5^2 = 20.25$, while $3^2 = 9$.` },
    ],
  };

  // Formula Summary 2026-11-06: replaces the summary table summaryTable, same rows.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    items: [
      { name: 'Product', formula: '$a^m \\cdot a^n = a^{m+n}$', example: '$x^3 \\cdot x^5 = x^8$', restriction: 'the bases must match',
        text: 'Multiplying powers of the same base adds the exponents, as [the product rule](!#1) shows by counting factors.' },
      { name: 'Quotient', formula: '$\\displaystyle \\frac{a^m}{a^n} = a^{m-n}$', example: '$\\displaystyle \\frac{x^7}{x^2} = x^5$', restriction: '$a \\neq 0$',
        text: 'Dividing powers of the same base subtracts the exponent of the denominator, from [the quotient rule](!#2).' },
      { name: 'Power of a power', formula: '$(a^m)^n = a^{mn}$', example: '$(x^3)^4 = x^{12}$', restriction: 'not the same as the stacked $a^{m^n}$',
        text: 'Raising a power to a power multiplies the exponents; [power of a power](!#3) explains why the brackets matter.' },
      { name: 'Power of a product', formula: '$(ab)^n = a^n \\cdot b^n$', example: '$(3x)^4 = 81x^4$', restriction: 'for products, not sums',
        text: 'The exponent goes to every factor inside the brackets, including the number in front, as [power of a product](!#4) shows.' },
      { name: 'Power of a quotient', formula: '$\\displaystyle \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$', example: '$\\displaystyle \\left(\\frac{2}{5}\\right)^3 = \\frac{8}{125}$', restriction: '$b \\neq 0$',
        text: 'The exponent goes to the numerator and to the denominator separately, from [power of a quotient](!#5).' },
      { name: 'Negative exponent', formula: '$\\displaystyle a^{-n} = \\frac{1}{a^n}$', example: '$\\displaystyle 4^{-2} = \\frac{1}{16}$', restriction: '$a \\neq 0$',
        text: 'A negative exponent stands for the reciprocal of the positive power, as [the negative exponent rule](!#6) shows.' },
      { name: 'Zero exponent', formula: '$a^0 = 1$', example: '$7^0 = 1, \\quad (-3)^0 = 1$', restriction: '$a \\neq 0$, so $0^0$ is excluded',
        text: 'Any nonzero base to the power zero is 1, which keeps the quotient rule working when the exponents are equal ([the zero exponent rule](!#7)).' },
      { name: 'Rational exponent', formula: '$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$', example: '$8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 4$', restriction: '$a \\geq 0$ when $n$ is even',
        text: 'The denominator of the exponent is a root and the numerator a power, taken in either order, as [the rational exponent rule](!#8) shows.' },
    ],
  };

  // SpecialCases 2026-11-09: "Two special exponents" (substitute), from the page's own text.
  const specialCasesData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    labels: { set: 'For' },
    general: { label: 'Rule', text: '$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$' },
    cases: [
      { when: '$m = 1$', result: '$a^{1/n} = \\sqrt[n]{a}$', name: 'Pure root',
        text: 'The special case $m = 1$ gives the pure root.' },
      { when: 'a negative exponent $-\\frac{m}{n}$', result: '$a^{-m/n} = \\frac{1}{a^{m/n}}$', name: 'Reciprocal',
        text: 'The [negative exponent](!/algebra/powers/negative-exponents) rule applies first.' },
    ],
  };

  return {
  props: {
    specialCasesData,
    formulaSummaryData,
    pitfallData,
    exponentLawCards,
    expQuotientCases,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj9Table,
    obj10Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Exponent Rules: All Laws of Exponents with Examples | Learn Math Class",
      description: "Complete list of exponent rules: product, quotient, power of a power, negative exponents, zero exponent, and fractional exponents with examples and domain restrictions.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/exponent-rules",
      name: "Exponent Rules"
    },
  }
}
   }

// export default function RulesPage({seoData,sectionsContent , introContent}) {
const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function RulesPage({ specialCasesData, formulaSummaryData, pitfallData,exponentLawCards, expQuotientCases, seoData, sectionsContent, introContent, obj9Table, obj10Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `2² · 2³ can be worked out as 4 · 8 = 32. Is there a faster way, straight from the exponents?`,
        content: [
          `Write each power out as a string of equal factors and count them.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Multiplying two powers of the same base just joins their strings of factors.`,
        content: [
          ciTable('factorsTable'),
          `The number of factors in the product is the sum of the numbers of factors in the two powers.`,
        ],
      },
      {
        id: 'pattern',
        lead: `Same base: count the factors, and the exponents add.`,
        content: [
          `Counting factors shows why the exponents add. In $x^3 \\cdot x^5$ the first power holds three factors of $x$ and the second holds five, and writing them side by side gives one string of eight factors. The rule is a shortcut for that count.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The **product rule** for exponents: powers of the same base multiply by adding their exponents, $a^m \\cdot a^n = a^{m+n}$.`,
        formula: [
          `Multiplying two powers that share the same base adds the exponents:`,
          `@academic[formula_callout:Product Rule
$$a^m \\cdot a^n = a^{m+n}$$
/algebra/formulas#product_rule_exponents]@`,
          `@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@`,
          `The base stays fixed. Only the exponents combine. The expression $x^3 \\cdot x^5 = x^8$, and $2^{-1} \\cdot 2^{4} = 2^3 = 8$.`,
        ],
        footer: `So $2^2 \\cdot 2^3 = 2^5 = 32$ and $x^3 \\cdot x^5 = x^8$.`,
      },
      {
        id: 'kind',
        lead: `The rule starts from counting factors and extends to every real exponent.`,
        content: [
          `This identity holds for all real exponents $m$ and $n$, subject to the domain restrictions on the base outlined later on this page.`,
          <div key={'unit-product'} dangerouslySetInnerHTML={{ __html: demoUnits.product }} />,
          `The quotient rule reads the same table upward instead of downward.`,
        ],
      },
      {
        id: 'caveat',
        lead: `The bases must match, and the exponents add — they are not multiplied.`,
        content: [
          `The rule requires the bases to match. The product $2^3 \\cdot 3^4$ cannot be reduced by adding exponents — different bases mean the rule does not apply.`,
          `@academic[pitfall,aside:true,width:35%:Multiplying the exponents
Writing $2^3 \\cdot 2^2$ as $2^6$ gives $64$. The product is $8 \\cdot 4 = 32 = 2^5$: the exponents add, $3 + 2 = 5$.
[Read more](!#pitfall-multiplying-the-exponents)]@`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers the quotient rule, powers of powers, products and quotients, negative, zero and rational exponents, domain restrictions, edge cases and common mistakes, and a master reference.`,
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
            key={'obj2-diagram'}
            id="exponent-quotient-rule-cases"
            title="The quotient rule for exponents: three outcomes"
            source="/algebra/powers/exponent-rules"
          >
            <CaseSplit data={expQuotientCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
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
          <DiagramFrame
            key={'special-cases-rational-exponent-rule-special-cases'}
            id="rational-exponent-rule-special-cases"
            title="Two special exponents"
            source="/algebra/powers/exponent-rules"
            related={false}
            before={"Each card puts one special exponent into the rational exponent rule and shows what it becomes."}
            after={"Both come from the same rule: $m = 1$ leaves only the root, and a negative exponent adds a reciprocal."}
          >
            <SpecialCases data={specialCasesData} variant="substitute" />
          </DiagramFrame>,
        ]
    },

    // obj9: prose + domain-restrictions aggregation table
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div
            key={'obj9-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj9Table }}
          />,
        ]
    },

    // obj10: prose + edge-cases aggregation table
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
          <DiagramFrame
            key={'obj10-mistakes'}
            id="exponent-rule-pitfalls"
            title="Common pitfalls with the exponent rules"
            source="/algebra/powers/exponent-rules"
            after={sectionsContent.obj10.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },

    // obj11: NEW capstone with summary table — master reference of all exponent laws
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <DiagramFrame
            key={'formula-summary'}
            id="exponent-law-formula-summary"
            title="Exponent laws"
            source="/algebra/powers/exponent-rules"
            related={{ href: '/algebra/formulas', label: 'All algebra formulas' }}
            after={sectionsContent.obj11.formulaSheetAfter}
          >
            <FormulaSheet data={formulaSummaryData} variant="tiles" />
          </DiagramFrame>,
          `The same eight laws as cards, sorted by whether they carry a restriction. Click a verdict in the legend to see only the restricted ones.`,
          <DiagramFrame
            key={'obj11-propsheet'}
            id="exponent-law-restrictions"
            title="Each exponent law with its restriction"
            source="/algebra/powers/exponent-rules"
          >
            <PropertySheet data={exponentLawCards} />
          </DiagramFrame>,
          `Every restriction keeps a division by zero or an even root of a negative number out of the law. That is why $a \\neq 0$ appears whenever $a$ ends up in a denominator, as in the [negative exponent rule](!#6), and why the [rational exponent rule](!#8) asks for $a \\geq 0$ when the root is even.`,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Exponent Rules FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Exponent Rules</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
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