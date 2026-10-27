import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import { tableHeaders } from '@/app/styles/theme'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaAnatomy from '@/app/components/infographics/FormulaAnatomy/FormulaAnatomy'


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

@academic[example:Example
$\\log_2(8 \\cdot 4) = \\log_2(8) + \\log_2(4) = 3 + 2 = 5$. Verification: $8 \\cdot 4 = 32 = 2^5$.]@

The rule extends to any number of factors:
@academic[formula_callout:The Product Rule
$$\\log_a(xyz) = \\log_a(x) + \\log_a(y) + \\log_a(z)$$]@

@academic[pitfall,aside:true,width:35%:Splitting a sum
Writing $\\log_2(4 + 4)$ as $\\log_2(4) + \\log_2(4)$ gives $2 + 2 = 4$. But $\\log_2(4 + 4) = \\log_2(8) = 3$: the rule splits products only, and $\\log_a(x + y)$ does not split.
[Read more](!#7)]@

In every use of the rule, the first step is to read the argument and find its factors. In $\\log_2(8 \\cdot 4)$ the factors are $8$ and $4$, and each one contributes its own logarithm to the sum. The same reading works with variables: $\\log_a(3x)$ has the factors $3$ and $x$, so it becomes $\\log_a(3) + \\log_a(x)$.`,
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

@academic[example:Example
$\\log_3(81/9) = \\log_3(81) - \\log_3(9) = 4 - 2 = 2$. Verification: $81/9 = 9 = 3^2$.]@

@academic[rule_corollary_plain:The quotient rule also yields: $\\log_a(1/x) = \\log_a(1) - \\log_a(x) = 0 - \\log_a(x) = -\\log_a(x)$.]@

@academic[pitfall,aside:true,width:35%:Dividing the logarithms
Writing $\\log_2(32/4)$ as $\\frac{\\log_2(32)}{\\log_2(4)}$ gives $\\frac{5}{2}$. The rule subtracts instead: $\\log_2(32) - \\log_2(4) = 5 - 2 = 3$, and $32/4 = 8 = 2^3$.
[Read more](!#7)]@

The quotient rule always works on a single logarithm whose argument is a fraction. In $\\log_3(81/9)$ the division sits inside the logarithm, and the rule turns it into the subtraction $\\log_3(81) - \\log_3(9)$. Read the other way, a difference of two logarithms in the same base condenses back into one logarithm of a quotient.`,
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

@academic[example:Example
$\\log_2(8^4) = 4 \\cdot \\log_2(8) = 4 \\cdot 3 = 12$. Verification: $8^4 = 4096 = 2^{12}$.]@

The rule holds for any real exponent $n$, including fractions and negatives:
@academic[formula_callout:The Power Rule
$$\\log_a(\\sqrt{x}) = \\log_a(x^{1/2}) = \\frac{1}{2}\\log_a(x)$$]@
@academic[formula_callout:The Power Rule
$$\\log_a(x^{-3}) = -3\\log_a(x)$$]@`,
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
@academic[formula_callout:The Change of Base Formula
$$\\log_2(10) = \\frac{\\log(10)}{\\log(2)} = \\frac{1}{0.301} \\approx 3.322$$]@
@academic[formula_callout:The Change of Base Formula
$$\\log_5(7) = \\frac{\\ln(7)}{\\ln(5)} = \\frac{1.946}{1.609} \\approx 1.209$$]@

@academic[rule_corollary_plain:A useful special case: $\\log_a(b) = \\frac{1}{\\log_b(a)}$. The logarithms are reciprocals when arguments and bases swap.]@

@academic[pitfall,aside:true,width:35%:Inverting the fraction
Writing $\\log_2(8)$ as $\\frac{\\ln(2)}{\\ln(8)}$ puts the base on top and gives $\\frac{1}{3}$. The argument goes in the numerator: $\\frac{\\ln(8)}{\\ln(2)} = 3$, and $2^3 = 8$.
[Read more](!#7)]@

Each application above follows the same pattern: two logarithms in a base the calculator knows, one divided by the other. A rough size check is always available. $\\log_2(10)$ must lie between $3$ and $4$, because $2^3 = 8$ and $2^4 = 16$, and $\\log_5(7)$ must lie between $1$ and $2$, because $5 < 7 < 25$.

The four rules above all follow the same shape: name the logarithms, convert to exponential form, apply the matching exponent law, then read the result back as a logarithm. The table below sets the four derivations side by side so the shared pattern is visible at a glance.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Expanding Logarithmic Expressions`,
    content: `A single logarithm with a compound argument can be written as a sum or difference of simpler logarithms, with exponents pulled out as coefficients. The product rule splits multiplication, the quotient rule splits division, and the power rule extracts exponents.

@academic[example:Example
Expand $\\log_2\\left(\\frac{x^3 y}{z^2}\\right)$.

$$\\log_2\\left(\\frac{x^3 y}{z^2}\\right) = \\log_2(x^3 y) - \\log_2(z^2)$$
$$= \\log_2(x^3) + \\log_2(y) - \\log_2(z^2)$$
$$= 3\\log_2(x) + \\log_2(y) - 2\\log_2(z)$$]@

@academic[example:Example
Expand $\\ln\\left(\\sqrt{\\frac{a}{b^3}}\\right)$.

$$\\ln\\left(\\sqrt{\\frac{a}{b^3}}\\right) = \\ln\\left(\\frac{a}{b^3}\\right)^{1/2} = \\frac{1}{2}\\ln\\left(\\frac{a}{b^3}\\right)$$
$$= \\frac{1}{2}\\left(\\ln(a) - \\ln(b^3)\\right) = \\frac{1}{2}\\ln(a) - \\frac{3}{2}\\ln(b)$$]@

@academic[pitfall,aside:true,width:35%:Applying an exponent to the whole argument
Writing $\\log_2(2 \\cdot 4^3)$ as $3\\log_2(2 \\cdot 4)$ gives $3 \\cdot 3 = 9$. The exponent belongs to $4$ only: $\\log_2(2) + 3\\log_2(4) = 1 + 6 = 7$, and $2 \\cdot 4^3 = 128 = 2^7$.
[Read more](!#7)]@

In both examples the expansion runs from the outside in. The outermost operation is split first, and the power rule comes last, applied to each piece that carries its own exponent. In the first example the exponent $3$ sits on $x$ and the exponent $2$ sits on $z$, so each becomes the coefficient of its own logarithm; in the second, the square root covers the whole fraction, so its $\\frac{1}{2}$ multiplies everything.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Condensing Logarithmic Expressions`,
    content: `Multiple logarithms can be combined into a single logarithm by reversing the expansion process. Coefficients become exponents through the power rule, sums become products through the product rule, and differences become quotients through the quotient rule.

@academic[example:Example
Condense $2\\log(x) + \\log(y) - 3\\log(z)$.

$$2\\log(x) + \\log(y) - 3\\log(z) = \\log(x^2) + \\log(y) - \\log(z^3)$$
$$= \\log(x^2 y) - \\log(z^3) = \\log\\left(\\frac{x^2 y}{z^3}\\right)$$]@

@academic[example:Example
Condense $\\frac{1}{2}\\ln(a+1) - \\ln(b) - \\ln(c)$.

$$\\frac{1}{2}\\ln(a+1) - \\ln(b) - \\ln(c) = \\ln(a+1)^{1/2} - \\ln(b) - \\ln(c)$$
$$= \\ln\\sqrt{a+1} - \\ln(bc) = \\ln\\left(\\frac{\\sqrt{a+1}}{bc}\\right)$$]@

@academic[pitfall,aside:true,width:35%:Turning a coefficient into a factor
Condensing $2\\log(x) + \\log(y)$ to $\\log(2xy)$: with $x = y = 10$ the sum is $2 + 1 = 3$, but $\\log(200) \\approx 2.301$. The coefficient becomes an exponent: $\\log(x^2 y) = \\log(1000) = 3$.
[Read more](!#7)]@

The order of the steps is the same in both examples. Every coefficient is dealt with first, so that each logarithm stands alone with coefficient $1$; only then do the sums and differences merge into a single argument. In the second example both $\\ln(b)$ and $\\ln(c)$ are subtracted, so $b$ and $c$ both end up in the denominator.

Condensing is essential for solving [equations](!/algebra/logarithms/equations) where multiple logarithms must combine before applying the one-to-one [property](!/algebra/logarithms/properties).

@academic[punchline:Condensing runs expansion backwards: turn every coefficient into an exponent first, then merge everything into one logarithm.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Common Errors`,
    content: `Several incorrect "rules" persistently appear. None of the following equalities hold:

@academic[formula_callout:Common Errors
$$\\log_a(x + y) \\neq \\log_a(x) + \\log_a(y)$$]@

The logarithm of a sum does not split. There is no simplification for $\\log_a(x + y)$.

@academic[formula_callout:Common Errors
$$\\log_a(x - y) \\neq \\log_a(x) - \\log_a(y)$$]@

The logarithm of a difference does not split either.

@academic[formula_callout:Common Errors
$$\\log_a(x) \\cdot \\log_a(y) \\neq \\log_a(xy)$$]@

Multiplying logarithms is not the same as the logarithm of a product.

@academic[formula_callout:Common Errors
$$\\frac{\\log_a(x)}{\\log_a(y)} \\neq \\log_a\\left(\\frac{x}{y}\\right)$$]@

Dividing logarithms is not the same as the logarithm of a quotient. However, note that $\\frac{\\log_a(x)}{\\log_a(y)} = \\log_y(x)$ by the change of base formula.

@academic[formula_callout:Common Errors
$$(\\log_a(x))^n \\neq n\\log_a(x)$$]@

Raising a logarithm to a power is not the same as multiplying by that power. The power rule applies to exponents inside the argument, not outside.

**Inverting the fraction**

The change of base formula is written with the two logarithms in the wrong places: the base of the original logarithm goes in the numerator and the argument goes in the denominator.

Wrong working:
$$\\log_2(8) = \\frac{\\ln(2)}{\\ln(8)} = \\frac{\\ln(2)}{3\\ln(2)} = \\frac{1}{3}$$
That value is $\\log_8(2)$, the reciprocal of the right answer.

Right working: the argument goes on top and the old base below.
$$\\log_2(8) = \\frac{\\ln(8)}{\\ln(2)} = \\frac{3\\ln(2)}{\\ln(2)} = 3$$

Why it happens: once both logarithms are in the new base they look alike, and nothing in the notation $\\log_a(x)$ shows which one belongs on top.

How to check: estimate first. $\\log_2(8)$ asks for the power of $2$ that gives $8$, which is $3$, not a number below $1$. With a base greater than $1$, an argument larger than the base always gives a result greater than $1$.

**Applying an exponent to the whole argument**

The argument is a product with an exponent on one factor, and the power rule is used as if the exponent covered the whole product.

Wrong working:
$$\\log_2(2 \\cdot 4^3) = 3\\log_2(2 \\cdot 4) = 3\\log_2(8) = 9$$

Right working: split the product first, then apply the power rule to the factor that carries the exponent.
$$\\log_2(2 \\cdot 4^3) = \\log_2(2) + \\log_2(4^3) = 1 + 3\\log_2(4) = 1 + 6 = 7$$

Why it happens: the exponent is the most visible part of the argument, so the power rule is applied before the product is taken apart.

How to check: compute the argument directly. $2 \\cdot 4^3 = 2 \\cdot 64 = 128 = 2^7$, so the value is $7$. The exponent moves out as a coefficient only when it covers the entire argument, as in $\\log_2((2 \\cdot 4)^3) = 3\\log_2(8) = 9$.

**Turning a coefficient into a factor**

When condensing, a coefficient in front of a logarithm is moved into the argument as a multiplier instead of as an exponent.

Wrong working:
$$2\\log(x) + \\log(y) = \\log(2x) + \\log(y) = \\log(2xy)$$

Right working: the power rule turns the coefficient into an exponent, then the product rule combines the two logarithms.
$$2\\log(x) + \\log(y) = \\log(x^2) + \\log(y) = \\log(x^2 y)$$

Why it happens: in ordinary algebra a coefficient multiplies, so $2x$ looks like the natural way to bring the $2$ inside.

How to check: substitute numbers. With $x = y = 10$, the original is $2 \\cdot 1 + 1 = 3$. The wrong form gives $\\log(200) \\approx 2.301$; the right form gives $\\log(1000) = 3$.`,
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
    question: "Can you split $\\log(x + y)$ into $\\log(x) + \\log(y)$?",
    answer: "No. The product rule turns a product inside the argument into a sum outside it, which is the reverse of what this asks. There is no rule for a sum or a difference inside a logarithm, so $\\log_a(x + y)$ and $\\log_a(x - y)$ do not simplify at all. Check it: $\\log_{10}(1 + 99) = 2$, while $\\log_{10}(1) + \\log_{10}(99) \\approx 1.996$.",
    sectionId: "7"
  },
  obj2: {
    question: "What is $\\frac{\\log_a(x)}{\\log_a(y)}$ if it isn't $\\log_a\\left(\\frac{x}{y}\\right)$?",
    answer: "It is $\\log_y(x)$, which is the change of base formula read backwards. Dividing two logarithms changes the base rather than dividing the arguments; the quotient rule needs the division to sit inside a single logarithm. Multiplying fares no better: $\\log_a(x) \\cdot \\log_a(y)$ is not $\\log_a(xy)$ and has no tidy form.",
    sectionId: "7"
  },
  obj3: {
    question: "Why doesn't the power rule apply to $(\\log_a x)^n$?",
    answer: "Because the power rule moves an exponent sitting inside the argument, not one applied to the finished logarithm. $\\log_a(x^n) = n\\log_a(x)$, but $(\\log_a x)^n$ raises the output and stays where it is. Take $\\log_{10}(100) = 2$: then $\\log_{10}(100^3) = 6$, while $(\\log_{10} 100)^3 = 8$. The position of the exponent decides everything.",
    sectionId: "7"
  },
  obj4: {
    question: "Is $\\log_a(b)$ related to $\\log_b(a)$?",
    answer: "They are reciprocals: $\\log_a(b) = \\frac{1}{\\log_b(a)}$. Swapping the base and the argument inverts the value. It falls out of change of base with $x = b$, since $\\log_a(b) = \\frac{\\log_b(b)}{\\log_b(a)}$ and $\\log_b(b) = 1$. So $\\log_2(8) = 3$ forces $\\log_8(2) = \\frac{1}{3}$, which is right because $8^{1/3} = 2$.",
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
  }
}

  const fpLogProduct = { kind: 'pieces', svgTitle: 'log2 32 = log2 8 + log2 4: multiplying inputs adds outputs', xRange: [0, 34], yRange: [-1, 6], xStep: 4,
    pieces: [{ fn: (x) => Math.log2(x), from: 0.5, to: 34, ends: [null, null], color: 'f', label: { text: 'y = log₂ x', x: 20, y: Math.log2(20), pos: 's' } }],
    points: [{ x: 4, y: 2, label: 'log₂ 4 = 2', pos: 'se' }, { x: 8, y: 3, label: 'log₂ 8 = 3', pos: 'se' }, { x: 32, y: 5, label: 'log₂ 32 = 5 = 3 + 2', pos: 'nw' }],
    notes: [{ x: 1, y: 5.6, text: '8 × 4 = 32, and 3 + 2 = 5', pos: 'e', color: 'r' }],
    caption: 'Multiplying inputs adds outputs: log₂(8 · 4) = log₂ 8 + log₂ 4' };

  const demoUnits = {
    product: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLogProduct),
      caption: 'The product rule on the graph',
      text: 'The section\'s example on the curve y = log&#8322; x. At x = 4 the height is 2 and at x = 8 it is 3. Multiplying the inputs, 8 &#215; 4 = 32, gives the point (32, 5), and 5 is exactly 3 + 2. The logarithm turns the multiplication of inputs into the addition of heights, which is the product rule log&#8322;(xy) = log&#8322; x + log&#8322; y.',
    }),
  };

  const logRuleTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Four rules for logarithms',
    preface: 'Three rules turn multiplication, division and powers into addition, subtraction and multiplication. The fourth moves between bases.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Logarithms turn hard operations into easy ones',
    conclusion: 'Each of the first three rules mirrors an exponent law; change of base lets any logarithm be computed with the one your calculator has.',
    root: { name: 'Logarithm rules', sub: '4 rules' },
    children: [
      { id: 'prod', name: 'Product', symbol: '$\\log(xy) = \\log x + \\log y$', items: [ { label: 'Turns', text: 'multiplication into addition' } ] },
      { id: 'quot', name: 'Quotient', symbol: '$\\log(x/y) = \\log x - \\log y$', items: [ { label: 'Turns', text: 'division into subtraction' } ] },
      { id: 'pow', name: 'Power', symbol: '$\\log x^n = n \\log x$', items: [ { label: 'Turns', text: 'a power into a multiple' } ] },
      { id: 'cob', name: 'Change of base', symbol: '$\\log_a x = \\log_b x / \\log_b a$', items: [ { label: 'Does', text: 'rewrites in any base' } ] },
    ],
  };

  const changeOfBaseAnatomy = {
    header: {
      kicker: 'the formula, part by part',
      title: 'Change of base',
      lede: 'any logarithm becomes a quotient of two logarithms in a base the calculator knows',
    },
    formula: [
      { kind: 'part', id: 'want', children: [
        { kind: 'op', text: 'log', tight: true }, { kind: 'sub', children: [ { kind: 'var', text: 'a' } ] },
        { kind: 'op', text: '(', tight: true }, { kind: 'var', text: 'x' }, { kind: 'op', text: ')', tight: true },
      ] },
      { kind: 'op', text: '=' },
      { kind: 'frac',
        num: [
          { kind: 'part', id: 'arg', children: [
            { kind: 'op', text: 'log', tight: true }, { kind: 'sub', children: [ { kind: 'var', text: 'b' } ] },
            { kind: 'op', text: '(', tight: true }, { kind: 'var', text: 'x' }, { kind: 'op', text: ')', tight: true },
          ] },
        ],
        den: [
          { kind: 'part', id: 'base', children: [
            { kind: 'op', text: 'log', tight: true }, { kind: 'sub', children: [ { kind: 'var', text: 'b' } ] },
            { kind: 'op', text: '(', tight: true }, { kind: 'var', text: 'a' }, { kind: 'op', text: ')', tight: true },
          ] },
        ],
      },
    ],
    parts: [
      { id: 'want', chip: 'logₐ(x)', title: 'The logarithm you want', side: 'top',
        tip: 'The power a must be raised to in order to give x.',
        desc: 'Base a, argument x, in a base the calculator may not have. Example: log₂(10) asks which power of 2 gives 10. It must lie between 3 and 4, because 2³ = 8 and 2⁴ = 16.' },
      { id: 'arg', chip: 'numerator', title: 'Argument on top', side: 'top',
        tip: 'The argument x, rewritten in the new base b.',
        desc: 'Any base works as long as top and bottom use the same one; in practice 10 or e, which a calculator has. Example: for log₂(10) in base 10, the top is log(10) = 1.' },
      { id: 'base', chip: 'denominator', title: 'Old base below', side: 'bottom',
        tip: 'The old base a, in the same new base b.',
        desc: 'Swapping top and bottom gives the reciprocal, a different number. Example: the bottom is log(2) ≈ 0.301, so log₂(10) = 1 / 0.301 ≈ 3.322. Upside down it would give 0.301, not a power between 3 and 4.' },
    ],
  };

   return {
  props: {
    changeOfBaseAnatomy,
    logRuleTree,
    sectionsContent,
    introContent,
    derivationsTable,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
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

 export default function LogarithmRulesPage({changeOfBaseAnatomy, logRuleTree, 
   seoData,
   sectionsContent,
   introContent,
   derivationsTable,
   obj7Table,
   summaryTable,
   faqQuestions,
   schemas,
   demoUnits,
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
          <div key={'unit-product'} dangerouslySetInnerHTML={{ __html: demoUnits.product }} />,
          `Dividing inputs subtracts heights in the same way, which is the quotient rule.`,
          `@academic[fact,aside:true,width:35%:Multiplying by adding for 350 years
John Napier published the first table of logarithms in 1614. Such tables, and slide rules that add lengths on logarithmic scales, were the standard tool of scientists and engineers for multiplying until pocket calculators took over in the 1970s.]@

The graph also suggests a way to multiply without multiplying. Suppose a table lists the common logarithm of every number to several decimal places. To find $xy$, look up $\\log(x)$ and $\\log(y)$, add the two values, and then search the table for the number whose logarithm is that sum. A long multiplication becomes one addition and three look-ups.`,
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
          <DiagramFrame
            key={'obj4-diagram'}
            id="change-of-base-anatomy"
            title="Change of base, part by part"
            source="/algebra/logarithms/rules"
            before={"Taking the formula apart: the logarithm you want on the left, the argument in the numerator, the old base in the denominator."}
            after={"The part most often misread is the order: the argument goes on top, the base below. The same formula gives the reciprocal rule $\\log_a(b) = \\frac{1}{\\log_b(a)}$."}
          >
            <FormulaAnatomy data={changeOfBaseAnatomy} />
          </DiagramFrame>,
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
          <DiagramFrame
            key={'obj8-diagram'}
            id="logarithm-rules-tree"
            title="The four logarithm rules"
            source="/algebra/logarithms/rules"
          >
            <TopDownTree data={logRuleTree} />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Logarithm Rules FAQ`,
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