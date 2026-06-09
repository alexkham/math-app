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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0⁰ and 0⁻ⁿ involve division by zero</td>
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

When $m = n$, the result is $a^0 = 1$. When $m < n$, the result is a [negative exponent](!/algebra/powers/negative-exponents) — a reciprocal. Both cases are natural consequences of subtracting exponents, and both require $a \\neq 0$.

As with the product rule, the bases must be identical for the rule to apply.`,
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

This rule must not be confused with stacked exponents. The notation $a^{m^n}$ means $a^{(m^n)}$, evaluated from the top down — it is not the same as $(a^m)^n = a^{mn}$. For example, $2^{3^2} = 2^9 = 512$, while $(2^3)^2 = 2^6 = 64$.`,
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

The expression $(3x)^4 = 3^4 \\cdot x^4 = 81x^4$. The rule extends to any number of factors: $(abc)^n = a^n b^n c^n$.

The distribution works because multiplication is commutative — the factors can be rearranged so that all copies of $a$ group together and all copies of $b$ group together.

A critical warning: this rule applies to products only. It does not extend to sums. The expression $(a + b)^n$ is not equal to $a^n + b^n$. Expanding a sum raised to a power requires the binomial theorem or direct multiplication.`,
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

The rule works in both directions. A negative exponent in the denominator moves the term to the numerator: $\\frac{1}{a^{-n}} = a^n$. An expression like $\\frac{x^{-3}}{y^{-2}}$ rewrites as $\\frac{y^2}{x^3}$ — each negative exponent crosses the fraction bar and becomes positive.

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

The case $a = 0$ is excluded. The expression $0^0$ is not covered by this rule — it is addressed separately on the [zero powers](!/algebra/powers/zero-powers) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Rational Exponent Rule`,
    content: `A fractional exponent connects powers to roots:

$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

Both forms are equivalent. The expression $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$, and $27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$.

The special case $m = 1$ gives the pure root: $a^{1/n} = \\sqrt[n]{a}$. Exponent notation and radical notation are interchangeable representations of the same operation.

When $m/n$ is negative, the [negative exponent](!/algebra/powers/negative-exponents) rule applies first: $a^{-m/n} = \\frac{1}{a^{m/n}}$. The full treatment, including domain considerations for even roots, appears on the [rational exponents](!/algebra/powers/rational-exponents) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Domain Restrictions`,
    content: `Each extension of the exponent definition tightens the conditions on the base. The laws themselves do not change — but the set of bases for which they apply narrows.

For [natural exponents](!/algebra/powers/natural-exponents) ($n \\geq 1$), no restriction exists. Any real number — positive, negative, or zero — can serve as the base.

For [zero and negative exponents](!/algebra/powers/negative-exponents), the base must be nonzero: $a \\neq 0$. Division by zero makes $0^{-n}$ and $0^0$ problematic.

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
    after: ``,
    link: '',
  },

  obj11: {
    title: `Master Reference of Exponent Laws`,
    content: `Every rule introduced above belongs to a single family of identities — the laws of exponents. The table below is the master reference: each rule with its formula, a representative example, and the domain restriction that determines when it applies. This is the page in one card, useful both to review and to look up while solving problems elsewhere.`,
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

const faqQuestions = {
  obj1: {
    question: "What is the product rule for exponents?",
    answer: "When multiplying powers with the same base, add the exponents: a^m · a^n = a^(m+n). For example, x³ · x⁵ = x⁸. The bases must be identical for this rule to apply.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the quotient rule for exponents?",
    answer: "When dividing powers with the same base, subtract the exponents: a^m / a^n = a^(m-n). For example, x⁷ / x² = x⁵. The base cannot be zero.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the power of a power rule?",
    answer: "When raising a power to another power, multiply the exponents: (a^m)^n = a^(mn). For example, (x³)⁴ = x¹². Don't confuse with stacked exponents: a^(m^n) is different.",
    sectionId: "3"
  },
  obj4: {
    question: "Does the exponent distribute over addition?",
    answer: "No. (a + b)^n ≠ a^n + b^n. This is a common mistake. The power of a product rule only applies to multiplication: (ab)^n = a^n · b^n. Expanding (a + b)^n requires the binomial theorem.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the negative exponent rule?",
    answer: "A negative exponent means reciprocal: a^(-n) = 1/a^n. For example, 4^(-2) = 1/16. Negative exponents in denominators move to numerators: 1/a^(-n) = a^n.",
    sectionId: "6"
  },
  obj6: {
    question: "Why does anything to the power of 0 equal 1?",
    answer: "The quotient rule proves it: a^0 = a^(n-n) = a^n / a^n = 1. This holds for any nonzero base. The expression 0^0 is a special case not covered by this rule.",
    sectionId: "7"
  },
  obj7: {
    question: "How do fractional exponents work?",
    answer: "A fractional exponent combines roots and powers: a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m. For example, 8^(2/3) = (³√8)² = 2² = 4. The denominator indicates the root.",
    sectionId: "8"
  },
  obj8: {
    question: "When must the base be positive?",
    answer: "For irrational exponents and general real exponents, a > 0 is required. For rational exponents with even roots, a ≥ 0. For negative exponents, a ≠ 0. Natural exponents allow any base.",
    sectionId: "9"
  },
  obj9: {
    question: "What is the difference between (-a)^n and -a^n?",
    answer: "(-a)^n raises the negative quantity to the power: (-3)² = 9. But -a^n raises a to the power then negates: -3² = -9. Parentheses determine which interpretation applies.",
    sectionId: "10"
  },
  obj10: {
    question: "What are all the exponent rules?",
    answer: "The main rules: Product (a^m · a^n = a^(m+n)), Quotient (a^m / a^n = a^(m-n)), Power of power ((a^m)^n = a^(mn)), Power of product ((ab)^n = a^n b^n), Power of quotient ((a/b)^n = a^n/b^n), Negative (a^(-n) = 1/a^n), Zero (a^0 = 1).",
    sectionId: "1"
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
export default function RulesPage({seoData, sectionsContent, introContent, obj9Table, obj10Table, summaryTable, faqQuestions, schemas}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }
    
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
        ]
    },

    // obj11: NEW capstone with summary table — master reference of all exponent laws
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
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