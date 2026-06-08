import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  'logarithm rules',
  'log product rule',
  'log quotient rule',
  'log power rule',
  'change of base formula',
  'expanding logarithms',
  'condensing logarithms',
  'logarithm properties',
  'log rules algebra',
  'logarithmic expressions',
  'log of a product',
  'log of a quotient',
  'logarithm common errors',
  'logarithm exponent connection'
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // After obj4 — aggregation: parallel derivations of all four rules
  const derivationsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Rule</th>
      <th style="${tableHeaders.aggregation}">Setup</th>
      <th style="${tableHeaders.aggregation}">Exponent law applied</th>
      <th style="${tableHeaders.aggregation}">Read off as a logarithm</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">let logₐ(x) = m, logₐ(y) = n, so x = aᵐ, y = aⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">aᵐ · aⁿ = aᵐ⁺ⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(xy) = m + n = logₐ(x) + logₐ(y)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same setup: x = aᵐ, y = aⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">aᵐ ⁄ aⁿ = aᵐ⁻ⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(x⁄y) = m − n = logₐ(x) − logₐ(y)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">let logₐ(x) = m, so x = aᵐ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(aᵐ)ⁿ = aᵐⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(xⁿ) = mn = n · logₐ(x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Change of base</td>
      <td style="padding: 12px 15px; color: #34495e;">let logₐ(x) = y, so aʸ = x</td>
      <td style="padding: 12px 15px; color: #34495e;">take log_b of both sides; apply the power rule</td>
      <td style="padding: 12px 15px; color: #34495e;">y · log_b(a) = log_b(x), so logₐ(x) = log_b(x) ⁄ log_b(a)</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — comparison: incorrect "rules" vs the truth
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Incorrect &quot;rule&quot;</th>
      <th style="${tableHeaders.comparison}">What is actually true</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x + y) ≠ logₐ(x) + logₐ(y)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sums inside a logarithm have no expansion — leave logₐ(x + y) as written</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x − y) ≠ logₐ(x) − logₐ(y)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">differences inside a logarithm have no expansion either</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) · logₐ(y) ≠ logₐ(xy)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the product rule equates logₐ(xy) with the sum logₐ(x) + logₐ(y), not the product</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) ⁄ logₐ(y) ≠ logₐ(x⁄y)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">this ratio equals log_y(x) by change of base — a different logarithm entirely</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(logₐ(x))ⁿ ≠ n · logₐ(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">the power rule applies to exponents <em>inside</em> the argument; an exponent on the whole logarithm does not move</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: the four rules in one place
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Rule</th>
      <th style="${tableHeaders.summary}">Identity</th>
      <th style="${tableHeaders.summary}">What it transforms</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(x·y) = logₐ(x) + logₐ(y)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplication inside ↔ addition outside</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(8·4) = 3 + 2 = 5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(x⁄y) = logₐ(x) − logₐ(y)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">division inside ↔ subtraction outside</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₃(81⁄9) = 4 − 2 = 2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(xⁿ) = n · logₐ(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exponent inside ↔ coefficient outside</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(8³) = 3 · 3 = 9</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Change of base</td>
      <td style="padding: 12px 15px; color: #34495e;">logₐ(x) = log_b(x) ⁄ log_b(a)</td>
      <td style="padding: 12px 15px; color: #34495e;">rewrites a logarithm in any new base b</td>
      <td style="padding: 12px 15px; color: #34495e;">log₂(7) = log(7)⁄log(2) ≈ 2.807</td>
    </tr>
  </tbody>
</table>
`


// const sectionsContent = {
  
// obj0: {
//   title: `Key Terms`,
//   content: `
// ## The Rules
 
// - [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms)) — $\\log_a(xy) = \\log_a(x) + \\log_a(y)$
// - [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_(logarithms)) — $\\log_a(x/y) = \\log_a(x) - \\log_a(y)$
// - [Power Rule (Logarithms)](!/algebra/definitions#power_rule_(logarithms)) — $\\log_a(x^n) = n \\cdot \\log_a(x)$
// - [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — $\\log_a(x) = \\log_b(x) / \\log_b(a)$
 
// ## Supporting Concepts
 
// - [Logarithm](!/algebra/definitions#logarithm) — each rule derives from an exponent law inverted through the definition
// - [Common Logarithm](!/algebra/definitions#common_logarithm) — typical target base for change of base
// - [Natural Logarithm](!/algebra/definitions#natural_logarithm) — alternative target base

// ## Formulas Used on This Page

// - [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms) — $\\log_a(xy) = \\log_a(x) + \\log_a(y)$
// - [Quotient Rule (Logarithms)](!/algebra/formulas#quotient_rule_logarithms) — $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$
// - [Power Rule (Logarithms)](!/algebra/formulas#power_rule_logarithms) — $\\log_a(x^n) = n \\cdot \\log_a(x)$
// - [Change of Base Formula](!/algebra/formulas#change_of_base_formula) — $\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$

// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },
 
//   obj1: {
//     title: `The Product Rule`,
//     content: `The logarithm of a product equals the sum of the logarithms:

// $$\\log_a(xy) = \\log_a(x) + \\log_a(y)$$

// Multiplication inside the argument becomes addition outside.

// Derivation: Let $\\log_a(x) = m$ and $\\log_a(y) = n$. Then $x = a^m$ and $y = a^n$. The product $xy = a^m \\cdot a^n = a^{m+n}$. Taking the logarithm: $\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$.

// Example: $\\log_2(8 \\cdot 4) = \\log_2(8) + \\log_2(4) = 3 + 2 = 5$. Verification: $8 \\cdot 4 = 32 = 2^5$.

// The rule extends to any number of factors:
// $$\\log_a(xyz) = \\log_a(x) + \\log_a(y) + \\log_a(z)$$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `The Quotient Rule`,
//     content: `The logarithm of a quotient equals the difference of the logarithms:

// $$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$$

// Division inside the argument becomes subtraction outside.

// Derivation: Let $\\log_a(x) = m$ and $\\log_a(y) = n$. Then $x = a^m$ and $y = a^n$. The quotient $\\frac{x}{y} = \\frac{a^m}{a^n} = a^{m-n}$. Taking the logarithm: $\\log_a(x/y) = m - n = \\log_a(x) - \\log_a(y)$.

// Example: $\\log_3(81/9) = \\log_3(81) - \\log_3(9) = 4 - 2 = 2$. Verification: $81/9 = 9 = 3^2$.

// The quotient rule also yields: $\\log_a(1/x) = \\log_a(1) - \\log_a(x) = 0 - \\log_a(x) = -\\log_a(x)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `The Power Rule`,
//     content: `The logarithm of a power equals the exponent times the logarithm:

// $$\\log_a(x^n) = n \\cdot \\log_a(x)$$

// Exponents inside the argument become coefficients outside.

// Derivation: Let $\\log_a(x) = m$, so $x = a^m$. Then $x^n = (a^m)^n = a^{mn}$. Taking the logarithm: $\\log_a(x^n) = mn = n \\cdot \\log_a(x)$.

// Example: $\\log_2(8^4) = 4 \\cdot \\log_2(8) = 4 \\cdot 3 = 12$. Verification: $8^4 = 4096 = 2^{12}$.

// The rule holds for any real exponent $n$, including fractions and negatives:
// $$\\log_a(\\sqrt{x}) = \\log_a(x^{1/2}) = \\frac{1}{2}\\log_a(x)$$
// $$\\log_a(x^{-3}) = -3\\log_a(x)$$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `The Change of Base Formula`,
//     content: `A logarithm in one base can be expressed using logarithms in any other base:

// $$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$

// This formula converts logarithms to a convenient base — typically $10$ or $e$ for calculator computation.

// Derivation: Let $\\log_a(x) = y$, so $a^y = x$. Taking $\\log_b$ of both sides: $\\log_b(a^y) = \\log_b(x)$. By the power rule: $y \\cdot \\log_b(a) = \\log_b(x)$. Solving for $y$: $y = \\frac{\\log_b(x)}{\\log_b(a)}$.

// Common applications:
// $$\\log_2(10) = \\frac{\\log(10)}{\\log(2)} = \\frac{1}{0.301} \\approx 3.322$$
// $$\\log_5(7) = \\frac{\\ln(7)}{\\ln(5)} = \\frac{1.946}{1.609} \\approx 1.209$$

// A useful special case: $\\log_a(b) = \\frac{1}{\\log_b(a)}$. The logarithms are reciprocals when arguments and bases swap.

// The four rules above all follow the same shape: name the logarithms, convert to exponential form, apply the matching exponent law, then read the result back as a logarithm. The table below sets the four derivations side by side so the shared pattern is visible at a glance.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Expanding Logarithmic Expressions`,
//     content: `A single logarithm with a compound argument can be written as a sum or difference of simpler logarithms, with exponents pulled out as coefficients. The product rule splits multiplication, the quotient rule splits division, and the power rule extracts exponents.

// Example: Expand $\\log_2\\left(\\frac{x^3 y}{z^2}\\right)$.

// $$\\log_2\\left(\\frac{x^3 y}{z^2}\\right) = \\log_2(x^3 y) - \\log_2(z^2)$$
// $$= \\log_2(x^3) + \\log_2(y) - \\log_2(z^2)$$
// $$= 3\\log_2(x) + \\log_2(y) - 2\\log_2(z)$$

// Example: Expand $\\ln\\left(\\sqrt{\\frac{a}{b^3}}\\right)$.

// $$\\ln\\left(\\sqrt{\\frac{a}{b^3}}\\right) = \\ln\\left(\\frac{a}{b^3}\\right)^{1/2} = \\frac{1}{2}\\ln\\left(\\frac{a}{b^3}\\right)$$
// $$= \\frac{1}{2}\\left(\\ln(a) - \\ln(b^3)\\right) = \\frac{1}{2}\\ln(a) - \\frac{3}{2}\\ln(b)$$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Condensing Logarithmic Expressions`,
//     content: `Multiple logarithms can be combined into a single logarithm by reversing the expansion process. Coefficients become exponents through the power rule, sums become products through the product rule, and differences become quotients through the quotient rule.

// Example: Condense $2\\log(x) + \\log(y) - 3\\log(z)$.

// $$2\\log(x) + \\log(y) - 3\\log(z) = \\log(x^2) + \\log(y) - \\log(z^3)$$
// $$= \\log(x^2 y) - \\log(z^3) = \\log\\left(\\frac{x^2 y}{z^3}\\right)$$

// Example: Condense $\\frac{1}{2}\\ln(a+1) - \\ln(b) - \\ln(c)$.

// $$\\frac{1}{2}\\ln(a+1) - \\ln(b) - \\ln(c) = \\ln(a+1)^{1/2} - \\ln(b) - \\ln(c)$$
// $$= \\ln\\sqrt{a+1} - \\ln(bc) = \\ln\\left(\\frac{\\sqrt{a+1}}{bc}\\right)$$

// Condensing is essential for solving [equations](!/algebra/logarithms/equations) where multiple logarithms must combine before applying the one-to-one [property](!/algebra/logarithms/properties).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Common Errors`,
//     content: `Several incorrect "rules" persistently appear. None of the following equalities hold:

// $$\\log_a(x + y) \\neq \\log_a(x) + \\log_a(y)$$

// The logarithm of a sum does not split. There is no simplification for $\\log_a(x + y)$.

// $$\\log_a(x - y) \\neq \\log_a(x) - \\log_a(y)$$

// The logarithm of a difference does not split either.

// $$\\log_a(x) \\cdot \\log_a(y) \\neq \\log_a(xy)$$

// Multiplying logarithms is not the same as the logarithm of a product.

// $$\\frac{\\log_a(x)}{\\log_a(y)} \\neq \\log_a\\left(\\frac{x}{y}\\right)$$

// Dividing logarithms is not the same as the logarithm of a quotient. However, note that $\\frac{\\log_a(x)}{\\log_a(y)} = \\log_y(x)$ by the change of base formula.

// $$(\\log_a(x))^n \\neq n\\log_a(x)$$

// Raising a logarithm to a power is not the same as multiplying by that power. The power rule applies to exponents inside the argument, not outside.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Summary of Logarithm Rules`,
//     content: `The four rules together form a single transformation system: each one converts an operation inside the argument into a different operation on the outside. The table below collects the rules in one place — identity, what gets transformed, and a quick numerical example — useful as a reference card while expanding or condensing expressions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## The Rules

- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms)) — $\\log_a(xy) = \\log_a(x) + \\log_a(y)$
- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_(logarithms)) — $\\log_a(x/y) = \\log_a(x) - \\log_a(y)$
- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_(logarithms)) — $\\log_a(x^n) = n \\cdot \\log_a(x)$
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — $\\log_a(x) = \\log_b(x) / \\log_b(a)$

## Supporting Concepts

- [Logarithm](!/algebra/definitions#logarithm) — each rule derives from an exponent law inverted through the definition
- [Common Logarithm](!/algebra/definitions#common_logarithm) — typical target base for change of base
- [Natural Logarithm](!/algebra/definitions#natural_logarithm) — alternative target base

## Formulas Used on This Page

- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms) — $\\log_a(xy) = \\log_a(x) + \\log_a(y)$
- [Quotient Rule (Logarithms)](!/algebra/formulas#quotient_rule_logarithms) — $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$
- [Power Rule (Logarithms)](!/algebra/formulas#power_rule_logarithms) — $\\log_a(x^n) = n \\cdot \\log_a(x)$
- [Change of Base Formula](!/algebra/formulas#change_of_base_formula) — $\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$

`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

  obj1: {
    title: `The Product Rule`,
    content: `The logarithm of a product equals the sum of the logarithms:

@academic[formula_callout:Product Rule (Logarithms)
$$\\log_a(xy) = \\log_a(x) + \\log_a(y)$$
/algebra/formulas#product_rule_logarithms]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Multiplication inside the argument becomes addition outside.

Derivation: Let $\\log_a(x) = m$ and $\\log_a(y) = n$. Then $x = a^m$ and $y = a^n$. The product $xy = a^m \\cdot a^n = a^{m+n}$. Taking the logarithm: $\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$.

Example: $\\log_2(8 \\cdot 4) = \\log_2(8) + \\log_2(4) = 3 + 2 = 5$. Verification: $8 \\cdot 4 = 32 = 2^5$.

The rule extends to any number of factors:
$$\\log_a(xyz) = \\log_a(x) + \\log_a(y) + \\log_a(z)$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Quotient Rule`,
    content: `The logarithm of a quotient equals the difference of the logarithms:

@academic[formula_callout:Quotient Rule (Logarithms)
$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$$
/algebra/formulas#quotient_rule_logarithms]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Division inside the argument becomes subtraction outside.

Derivation: Let $\\log_a(x) = m$ and $\\log_a(y) = n$. Then $x = a^m$ and $y = a^n$. The quotient $\\frac{x}{y} = \\frac{a^m}{a^n} = a^{m-n}$. Taking the logarithm: $\\log_a(x/y) = m - n = \\log_a(x) - \\log_a(y)$.

Example: $\\log_3(81/9) = \\log_3(81) - \\log_3(9) = 4 - 2 = 2$. Verification: $81/9 = 9 = 3^2$.

The quotient rule also yields: $\\log_a(1/x) = \\log_a(1) - \\log_a(x) = 0 - \\log_a(x) = -\\log_a(x)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Power Rule`,
    content: `The logarithm of a power equals the exponent times the logarithm:

@academic[formula_callout:Power Rule (Logarithms)
$$\\log_a(x^n) = n \\cdot \\log_a(x)$$
/algebra/formulas#power_rule_logarithms]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Exponents inside the argument become coefficients outside.

Derivation: Let $\\log_a(x) = m$, so $x = a^m$. Then $x^n = (a^m)^n = a^{mn}$. Taking the logarithm: $\\log_a(x^n) = mn = n \\cdot \\log_a(x)$.

Example: $\\log_2(8^4) = 4 \\cdot \\log_2(8) = 4 \\cdot 3 = 12$. Verification: $8^4 = 4096 = 2^{12}$.

The rule holds for any real exponent $n$, including fractions and negatives:
$$\\log_a(\\sqrt{x}) = \\log_a(x^{1/2}) = \\frac{1}{2}\\log_a(x)$$
$$\\log_a(x^{-3}) = -3\\log_a(x)$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Change of Base Formula`,
    content: `A logarithm in one base can be expressed using logarithms in any other base:

@academic[formula_callout:Change of Base Formula
$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$
/algebra/formulas#change_of_base_formula]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This formula converts logarithms to a convenient base — typically $10$ or $e$ for calculator computation.

Derivation: Let $\\log_a(x) = y$, so $a^y = x$. Taking $\\log_b$ of both sides: $\\log_b(a^y) = \\log_b(x)$. By the power rule: $y \\cdot \\log_b(a) = \\log_b(x)$. Solving for $y$: $y = \\frac{\\log_b(x)}{\\log_b(a)}$.

Common applications:
$$\\log_2(10) = \\frac{\\log(10)}{\\log(2)} = \\frac{1}{0.301} \\approx 3.322$$
$$\\log_5(7) = \\frac{\\ln(7)}{\\ln(5)} = \\frac{1.946}{1.609} \\approx 1.209$$

A useful special case: $\\log_a(b) = \\frac{1}{\\log_b(a)}$. The logarithms are reciprocals when arguments and bases swap.

The four rules above all follow the same shape: name the logarithms, convert to exponential form, apply the matching exponent law, then read the result back as a logarithm. The table below sets the four derivations side by side so the shared pattern is visible at a glance.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Expanding Logarithmic Expressions`,
    content: `A single logarithm with a compound argument can be written as a sum or difference of simpler logarithms, with exponents pulled out as coefficients. The product rule splits multiplication, the quotient rule splits division, and the power rule extracts exponents.

Example: Expand $\\log_2\\left(\\frac{x^3 y}{z^2}\\right)$.

$$\\log_2\\left(\\frac{x^3 y}{z^2}\\right) = \\log_2(x^3 y) - \\log_2(z^2)$$
$$= \\log_2(x^3) + \\log_2(y) - \\log_2(z^2)$$
$$= 3\\log_2(x) + \\log_2(y) - 2\\log_2(z)$$

Example: Expand $\\ln\\left(\\sqrt{\\frac{a}{b^3}}\\right)$.

$$\\ln\\left(\\sqrt{\\frac{a}{b^3}}\\right) = \\ln\\left(\\frac{a}{b^3}\\right)^{1/2} = \\frac{1}{2}\\ln\\left(\\frac{a}{b^3}\\right)$$
$$= \\frac{1}{2}\\left(\\ln(a) - \\ln(b^3)\\right) = \\frac{1}{2}\\ln(a) - \\frac{3}{2}\\ln(b)$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Condensing Logarithmic Expressions`,
    content: `Multiple logarithms can be combined into a single logarithm by reversing the expansion process. Coefficients become exponents through the power rule, sums become products through the product rule, and differences become quotients through the quotient rule.

Example: Condense $2\\log(x) + \\log(y) - 3\\log(z)$.

$$2\\log(x) + \\log(y) - 3\\log(z) = \\log(x^2) + \\log(y) - \\log(z^3)$$
$$= \\log(x^2 y) - \\log(z^3) = \\log\\left(\\frac{x^2 y}{z^3}\\right)$$

Example: Condense $\\frac{1}{2}\\ln(a+1) - \\ln(b) - \\ln(c)$.

$$\\frac{1}{2}\\ln(a+1) - \\ln(b) - \\ln(c) = \\ln(a+1)^{1/2} - \\ln(b) - \\ln(c)$$
$$= \\ln\\sqrt{a+1} - \\ln(bc) = \\ln\\left(\\frac{\\sqrt{a+1}}{bc}\\right)$$

Condensing is essential for solving [equations](!/algebra/logarithms/equations) where multiple logarithms must combine before applying the one-to-one [property](!/algebra/logarithms/properties).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Common Errors`,
    content: `Several incorrect "rules" persistently appear. None of the following equalities hold:

$$\\log_a(x + y) \\neq \\log_a(x) + \\log_a(y)$$

The logarithm of a sum does not split. There is no simplification for $\\log_a(x + y)$.

$$\\log_a(x - y) \\neq \\log_a(x) - \\log_a(y)$$

The logarithm of a difference does not split either.

$$\\log_a(x) \\cdot \\log_a(y) \\neq \\log_a(xy)$$

Multiplying logarithms is not the same as the logarithm of a product.

$$\\frac{\\log_a(x)}{\\log_a(y)} \\neq \\log_a\\left(\\frac{x}{y}\\right)$$

Dividing logarithms is not the same as the logarithm of a quotient. However, note that $\\frac{\\log_a(x)}{\\log_a(y)} = \\log_y(x)$ by the change of base formula.

$$(\\log_a(x))^n \\neq n\\log_a(x)$$

Raising a logarithm to a power is not the same as multiplying by that power. The power rule applies to exponents inside the argument, not outside.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Summary of Logarithm Rules`,
    content: `The four rules together form a single transformation system: each one converts an operation inside the argument into a different operation on the outside. The table below collects the rules in one place — identity, what gets transformed, and a quick numerical example — useful as a reference card while expanding or condensing expressions.`,
    before: ``,
    after: ``,
    link: '',
  },
};


  const introContent = {
  id: 'intro',
  title: `Transforming Products, Quotients, and Powers`,
  content: `The [logarithm](!/algebra/logarithms) of a product, quotient, or power breaks apart in predictable ways. Each rule corresponds to an exponent law, inverted through the logarithmic lens. Mastering these rules enables expanding complex logarithmic expressions into simpler components and condensing sums or differences of logarithms into single expressions — both essential skills for solving [equations](!/algebra/logarithms/equations).`,
};


const faqQuestions = {
  obj1: {
    question: "What are the main logarithm rules?",
    answer: "The main rules are the product rule log(xy) = log(x) + log(y), the quotient rule log(x/y) = log(x) - log(y), the power rule log(x^n) = n·log(x), and the change of base formula log_a(x) = log_b(x) / log_b(a). Each derives directly from corresponding exponent laws.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you expand a logarithmic expression?",
    answer: "To expand, apply the product rule to split multiplication into addition, the quotient rule to split division into subtraction, and the power rule to bring exponents out as coefficients. Work from the outermost operation inward until each term contains a single logarithm.",
    sectionId: "5"
  },
  obj3: {
    question: "How do you condense logarithmic expressions?",
    answer: "To condense, reverse the expansion process. Convert coefficients into exponents using the power rule, combine sums into products using the product rule, and combine differences into quotients using the quotient rule. The result is a single logarithm.",
    sectionId: "6"
  },
  obj4: {
    question: "Can you split the logarithm of a sum?",
    answer: "No. log(x + y) does not equal log(x) + log(y). The product, quotient, and power rules apply only to multiplication, division, and exponentiation inside the argument. There is no rule for sums or differences inside a logarithm.",
    sectionId: "7"
  },
  obj5: {
    question: "What is the change of base formula used for?",
    answer: "The change of base formula log_a(x) = log_b(x) / log_b(a) converts a logarithm to any other base. It is commonly used to evaluate logarithms on a calculator by converting to base 10 or base e, since most calculators only have log and ln keys.",
    sectionId: "4"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithm Rules",
    "description": "Master logarithm rules: product, quotient, power, and change of base. Learn to expand and condense logarithmic expressions with examples and common errors.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/rules",
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
      "name": "Logarithm Rules"
    },
    "teaches": [
      "Product rule for logarithms",
      "Quotient rule for logarithms",
      "Power rule for logarithms",
      "Change of base formula",
      "Expanding and condensing logarithmic expressions",
      "Common errors with logarithm rules"
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
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Logarithm Rules",
        "item": "https://www.learnmathclass.com/algebra/logarithms/rules"
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
    derivationsTable,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Logarithm Rules: Product, Quotient & Power | Learn Math Class",
      description: "Master logarithm rules: product, quotient, power, and change of base. Learn to expand and condense logarithmic expressions with examples and common errors.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/rules",
      name: "Logarithm Rules"
    },
  }
}
   }

 export default function LogarithmRulesPage({
   seoData,
   sectionsContent,
   introContent,
   derivationsTable,
   obj7Table,
   summaryTable,
   faqQuestions,
   schemas
 }) {

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
          <div
            key={'derivations-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: derivationsTable }}
          />,
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
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithms Rules</h1>
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