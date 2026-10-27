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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import { tableHeaders } from '@/app/styles/theme'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'


export async function getStaticProps(){
const keyWords = [
  "rational exponents",
  "fractional exponents",
  "a^(1/n) meaning",
  "a^(m/n) definition",
  "convert radical to exponent",
  "exponent form radical",
  "negative rational exponents",
  "fractional powers",
  "exponent rules fractions",
  "simplify rational exponents",
  "radicals as exponents",
  "x^(1/2) equals sqrt x",
  "rational exponent examples",
  "laws of exponents fractions",
  "exponent to radical form"
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

// obj4 — aggregation (mapping): radical ↔ rational-exponent conversion patterns
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Radical form</th>
      <th style="${tableHeaders.aggregation}">Exponent form</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><sup>n</sup>√a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>1/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√x = x<sup>1/2</sup></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><sup>n</sup>√(a<sup>m</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>m/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛(y²) = y<sup>2/3</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(<sup>n</sup>√a)<sup>m</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>m/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(∛8)² = 8<sup>2/3</sup> = 4</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ <sup>n</sup>√a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>−1/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ √x = x<sup>−1/2</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 ⁄ <sup>n</sup>√(a<sup>m</sup>)</td>
      <td style="padding: 12px 15px; color: #34495e;">a<sup>−m/n</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ ∛(a²) = a<sup>−2/3</sup></td>
    </tr>
  </tbody>
</table>
`

// obj9 — comparison (decision matrix): when to use radical vs exponent form
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Task</th>
      <th style="${tableHeaders.comparison} text-align: center;">Preferred form</th>
      <th style="${tableHeaders.comparison}">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Numerical evaluation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">Radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direct, intuitive: √16 reads as &ldquo;the square root of 16&rdquo;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Expressing final answers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">Radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conventional notation in most contexts; the index is visually prominent</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic manipulation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">Exponent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard fraction arithmetic on the exponents</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combining different indices</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">Exponent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a common denominator unifies them in one step</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/algebra/roots/equations" style="${linkStyle}">Solving radical equations</a></td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">Exponent</td>
      <td style="padding: 12px 15px; color: #34495e;">the same exponent laws apply; isolating the base is mechanical</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary: capstone reference of rational-exponent forms
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Form</th>
      <th style="${tableHeaders.summary}">Pattern</th>
      <th style="${tableHeaders.summary}">Radical equivalent</th>
      <th style="${tableHeaders.summary}">Restriction (real values)</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unit fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>1/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><sup>n</sup>√a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≥ 0 if n even; any real a if n odd</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8<sup>1/3</sup> = 2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General m ⁄ n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>m/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><sup>n</sup>√(a<sup>m</sup>) = (<sup>n</sup>√a)<sup>m</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≥ 0 if n even; any real a if n odd</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8<sup>2/3</sup> = 4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative unit fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>−1/n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ <sup>n</sup>√a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unit-fraction rules apply, plus a ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8<sup>−1/3</sup> = 1 ⁄ 2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Negative m ⁄ n</td>
      <td style="padding: 12px 15px; color: #34495e;">a<sup>−m/n</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ <sup>n</sup>√(a<sup>m</sup>)</td>
      <td style="padding: 12px 15px; color: #34495e;">general m ⁄ n rules apply, plus a ≠ 0</td>
      <td style="padding: 12px 15px; color: #34495e;">8<sup>−2/3</sup> = 1 ⁄ 4</td>
    </tr>
  </tbody>
</table>
`

// ---------- SECTIONS (original prose preserved verbatim; obj10 added) ----------

// const sectionsContent = {
//  obj0: {
//   title: `Key Terms`,
//   content: `
// ## Core Concept
 
// - [Rational Exponent](!/algebra/definitions#rational_exponent) — a fractional power where $a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$
 
// ## Radical Equivalents
 
// - [Root](!/algebra/definitions#root) — $a^{1/n} = \\sqrt[n]{a}$; the denominator of the exponent becomes the index
// - [Radical](!/algebra/definitions#radical) — the notation that rational exponents replace or complement
// - [Index](!/algebra/definitions#index) — becomes the denominator in exponent form
// - [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals)) — the bridge identity $\\sqrt[n]{a^m} = a^{m/n}$

// ## Formulas Used on This Page

// - [Radical–Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion) — $\\sqrt[n]{a} = a^{1/n}$
// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },
 

//   obj1: {
//     title: `Unit Fraction Exponents`,
//     content: `A unit fraction exponent denotes a root.

// $$a^{1/n} = \\sqrt[n]{a}$$

// The denominator becomes the index. The base remains the radicand.

// $$25^{1/2} = \\sqrt{25} = 5$$

// $$8^{1/3} = \\sqrt[3]{8} = 2$$

// $$81^{1/4} = \\sqrt[4]{81} = 3$$

// This definition is forced by the laws of exponents. If exponent laws hold, then:

// $$(a^{1/2})^2 = a^{(1/2) \\cdot 2} = a^1 = a$$

// The only number whose square is $a$ is $\\sqrt{a}$. Therefore $a^{1/2} = \\sqrt{a}$.

// The same reasoning applies for any index: $(a^{1/n})^n = a$, so $a^{1/n}$ must be $\\sqrt[n]{a}$.

// This connection to the [powers](!/algebra/powers) section shows that rational exponents are not new operations but extensions of integer exponents.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `General Rational Exponents`,
//     content: `When the numerator is not 1, both root and power apply.

// $$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$

// Either interpretation gives the same result. The root can be taken first, or the power can be applied first.

// $$8^{2/3} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$$

// $$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$$

// Taking the root first often produces smaller numbers, making mental calculation easier.

// $$27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$$

// Computing $27^4 = 531441$ first and then taking $\\sqrt[3]{531441}$ reaches the same answer but with harder arithmetic.

// The [radical rules](!/algebra/roots/radical-rules) translate directly: the power rule states $\\sqrt[n]{a^m} = a^{m/n}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Negative Rational Exponents`,
//     content: `A negative exponent indicates a reciprocal. Combined with a fractional exponent:

// $$a^{-m/n} = \\frac{1}{a^{m/n}}$$

// $$8^{-2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{4}$$

// $$16^{-3/4} = \\frac{1}{16^{3/4}} = \\frac{1}{(\\sqrt[4]{16})^3} = \\frac{1}{2^3} = \\frac{1}{8}$$

// Alternatively, the reciprocal can be taken first:

// $$8^{-2/3} = \\left(\\frac{1}{8}\\right)^{2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{4}$$

// Negative rational exponents combine the rules for negative exponents from [powers](!/algebra/powers) with rational exponent definitions. The base must still satisfy domain restrictions — nonzero for negative exponents, non-negative for even roots.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Converting Between Forms`,
//     content: `Any radical converts to exponent form:

// $$\\sqrt[n]{a^m} = a^{m/n}$$

// $$\\sqrt{x} = x^{1/2}$$

// $$\\sqrt[3]{y^2} = y^{2/3}$$

// $$\\sqrt[5]{z^4} = z^{4/5}$$

// Any rational exponent converts to radical form:

// $$a^{m/n} = \\sqrt[n]{a^m}$$

// $$x^{3/4} = \\sqrt[4]{x^3}$$

// $$y^{-2/5} = \\frac{1}{\\sqrt[5]{y^2}}$$

// Expressions in denominators convert similarly:

// $$\\frac{1}{\\sqrt{x}} = \\frac{1}{x^{1/2}} = x^{-1/2}$$

// $$\\frac{1}{\\sqrt[3]{a^2}} = a^{-2/3}$$

// This flexibility allows choosing the form best suited to the task. Exponent form for algebraic manipulation; radical form for numerical evaluation or clarity.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Domain Restrictions`,
//     content: `Rational exponents inherit the domain restrictions of radicals.

// When the denominator of the exponent is even, the base must be non-negative.

// $$(-4)^{1/2} \\quad \\text{is not real}$$

// No real number squares to $-4$. The expression requires complex numbers.

// When the denominator is odd, any real base is permitted.

// $$(-8)^{1/3} = -2$$

// Negative bases have real odd roots.

// The [properties of radicals](!/algebra/roots/properties) page details these restrictions. They apply equally whether the expression is written as $\\sqrt[n]{a}$ or $a^{1/n}$.

// When exponents are negative, the additional restriction $a \\neq 0$ applies — division by zero is undefined.

// These domain considerations matter when [simplifying](!/algebra/roots/simplifying) and when defining [radical functions](!/algebra/roots/functions).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Laws of Exponents with Rationals`,
//     content: `All exponent laws extend to rational exponents.

// Product rule — same base, add exponents:

// $$a^{m/n} \\cdot a^{p/q} = a^{m/n + p/q}$$

// $$x^{1/2} \\cdot x^{1/3} = x^{3/6 + 2/6} = x^{5/6}$$

// Quotient rule — same base, subtract exponents:

// $$\\frac{a^{m/n}}{a^{p/q}} = a^{m/n - p/q}$$

// $$\\frac{y^{3/4}}{y^{1/2}} = y^{3/4 - 2/4} = y^{1/4}$$

// Power of a power — multiply exponents:

// $$(a^{m/n})^{p/q} = a^{(m/n)(p/q)} = a^{mp/(nq)}$$

// $$(x^{2/3})^{3/4} = x^{6/12} = x^{1/2}$$

// These are the same laws from [powers](!/algebra/powers), now with fractional arithmetic. Finding common denominators is often necessary when adding or subtracting exponents.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Simplifying with Rational Exponents`,
//     content: `Exponent form often simplifies manipulation that would be awkward with radicals.

// $$\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{1/2} \\cdot x^{1/3} = x^{5/6}$$

// In radical form, this requires converting to a common index. In exponent form, it requires only adding fractions.

// $$\\frac{\\sqrt[4]{a^3}}{\\sqrt{a}} = \\frac{a^{3/4}}{a^{1/2}} = a^{3/4 - 2/4} = a^{1/4} = \\sqrt[4]{a}$$

// Factoring with rational exponents:

// $$x^{1/2} + x^{3/2} = x^{1/2}(1 + x)$$

// The smallest exponent factors out, just as with integer exponents.

// Reducing exponents to lowest terms simplifies radicals:

// $$x^{4/6} = x^{2/3}$$

// This corresponds to reducing the index from 6 to 3, a technique from [simplifying radicals](!/algebra/roots/simplifying).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Combining Radicals via Exponents`,
//     content: `When radicals have different indices, direct combination is impossible. Converting to exponents provides a path.

// $$\\sqrt{2} \\cdot \\sqrt[3]{4}$$

// Convert:

// $$= 2^{1/2} \\cdot 4^{1/3} = 2^{1/2} \\cdot (2^2)^{1/3} = 2^{1/2} \\cdot 2^{2/3}$$

// Add exponents:

// $$= 2^{3/6 + 4/6} = 2^{7/6}$$

// Convert back if desired:

// $$= \\sqrt[6]{2^7} = \\sqrt[6]{128}$$

// Division works similarly:

// $$\\frac{\\sqrt[3]{x}}{\\sqrt[4]{x}} = \\frac{x^{1/3}}{x^{1/4}} = x^{4/12 - 3/12} = x^{1/12} = \\sqrt[12]{x}$$

// The exponent approach handles [operations](!/algebra/roots/operations) that radical notation makes cumbersome.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `When to Use Which Form`,
//     content: `Radical form is often clearer for:

// Numerical evaluation — $\\sqrt{16} = 4$ is more intuitive than $16^{1/2} = 4$.

// Expressing final answers — many contexts prefer $\\sqrt{5}$ over $5^{1/2}$.

// Identifying the root being taken — the index is visually prominent.

// Exponent form is often better for:

// Algebraic manipulation — adding, subtracting, and multiplying exponents follows standard fraction rules.

// Combining expressions with different indices — a common denominator unifies them.

// Applying exponent laws — the rules are the same as for integer exponents.

// Solving [radical equations](!/algebra/roots/equations) — some equations simplify faster in exponent form.

// Fluency in both notations and the ability to convert freely between them is the goal. The [radical rules](!/algebra/roots/radical-rules) and exponent laws are two languages for the same mathematics.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Summary of Rational Exponent Forms`,
//     content: `The forms introduced in the sections above collect into a single reference card. Each row gives a form, its general pattern, the radical equivalent, the restriction on the base for the expression to be real-valued, and a numerical example — useful for quick translation in either direction and for reviewing the territory at a glance.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }

const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## Core Concept

- [Rational Exponent](!/algebra/definitions#rational_exponent) — a fractional power where $a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$

## Radical Equivalents

- [Root](!/algebra/definitions#root) — $a^{1/n} = \\sqrt[n]{a}$; the denominator of the exponent becomes the index
- [Radical](!/algebra/definitions#radical) — the notation that rational exponents replace or complement
- [Index](!/algebra/definitions#index) — becomes the denominator in exponent form
- [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals)) — the bridge identity $\\sqrt[n]{a^m} = a^{m/n}$

## Formulas Used on This Page

- [Radical–Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion) — $\\sqrt[n]{a} = a^{1/n}$
`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

  obj1: {
    title: `Unit Fraction Exponents`,
    content: `A unit fraction exponent denotes a root.

@academic[formula_callout:Radical–Exponent Conversion
$$\\sqrt[n]{a} = a^{1/n}$$
/algebra/formulas#radical_to_exponent_conversion]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The denominator becomes the index. The base remains the radicand.

@academic[formula_callout:Unit Fraction Exponents
$$25^{1/2} = \\sqrt{25} = 5$$]@

@academic[formula_callout:Unit Fraction Exponents
$$8^{1/3} = \\sqrt[3]{8} = 2$$]@

@academic[formula_callout:Unit Fraction Exponents
$$81^{1/4} = \\sqrt[4]{81} = 3$$]@

This definition is forced by the laws of exponents. If exponent laws hold, then:

@academic[formula_callout:Unit Fraction Exponents
$$(a^{1/2})^2 = a^{(1/2) \\cdot 2} = a^1 = a$$]@

@academic[pitfall,aside:true,width:35%:Multiplying the base by the exponent
Reading $8^{1/3}$ as $8 \\cdot \\frac{1}{3} = \\frac{8}{3}$ treats the exponent as a factor. A denominator in the exponent means a root: $8^{1/3} = \\sqrt[3]{8} = 2$.
[Read more](!#pitfalls)]@

The only non-negative number whose square is $a$ is $\\sqrt{a}$. Therefore $a^{1/2} = \\sqrt{a}$.

The same reasoning applies for any index: $(a^{1/n})^n = a$, so $a^{1/n}$ must be $\\sqrt[n]{a}$.

This connection to the [powers](!/algebra/powers) section shows that rational exponents are not new operations but extensions of integer exponents.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `General Rational Exponents`,
    content: `When the numerator is not 1, both root and power apply.

@academic[formula_callout:General Rational Exponents
$$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$]@

For $a \\geq 0$, either interpretation gives the same result. The root can be taken first, or the power can be applied first.

@academic[formula_callout:General Rational Exponents
$$8^{2/3} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$$]@

@academic[formula_callout:General Rational Exponents
$$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$$]@

Taking the root first often produces smaller numbers, making mental calculation easier.

@academic[formula_callout:General Rational Exponents
$$27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$$]@

@academic[pitfall,aside:true,width:35%:Swapping the index and the power
Reading $8^{2/3}$ as $\\sqrt{8^3} = \\sqrt{512} \\approx 22.6$ makes the numerator the index. The denominator is the index: $8^{2/3} = \\sqrt[3]{8^2} = 4$.
[Read more](!#pitfalls)]@

Computing $27^4 = 531441$ first and then taking $\\sqrt[3]{531441}$ reaches the same answer but with harder arithmetic.

The [radical rules](!/algebra/roots/radical-rules) translate directly: the power rule states $\\sqrt[n]{a^m} = a^{m/n}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Negative Rational Exponents`,
    content: `A negative exponent indicates a reciprocal. Combined with a fractional exponent:

@academic[formula_callout:Negative Rational Exponents
$$a^{-m/n} = \\frac{1}{a^{m/n}}$$]@

@academic[formula_callout:Negative Rational Exponents
$$8^{-2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{4}$$]@

@academic[formula_callout:Negative Rational Exponents
$$16^{-3/4} = \\frac{1}{16^{3/4}} = \\frac{1}{(\\sqrt[4]{16})^3} = \\frac{1}{2^3} = \\frac{1}{8}$$]@

Alternatively, the reciprocal can be taken first:

@academic[formula_callout:Negative Rational Exponents
$$8^{-2/3} = \\left(\\frac{1}{8}\\right)^{2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{4}$$]@

@academic[pitfall,aside:true,width:35%:Making the result negative
Reading $8^{-2/3}$ as $-8^{2/3} = -4$ treats the minus sign as a sign of the value. A negative exponent means a reciprocal: $8^{-2/3} = \\frac{1}{4}$, which is positive.
[Read more](!#pitfalls)]@

Negative rational exponents combine the rules for negative exponents from [powers](!/algebra/powers) with rational exponent definitions. The base must still satisfy domain restrictions — nonzero for negative exponents, non-negative for even roots.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Converting Between Forms`,
    content: `Any radical converts to exponent form:

@academic[formula_callout:Power Rule (Radicals)
$$\\sqrt[n]{a^m} = a^{m/n}$$
/algebra/formulas#power_rule_radicals]@

@academic[formula_callout:Converting Between Forms
$$\\sqrt{x} = x^{1/2}$$]@

@academic[formula_callout:Converting Between Forms
$$\\sqrt[3]{y^2} = y^{2/3}$$]@

@academic[formula_callout:Converting Between Forms
$$\\sqrt[5]{z^4} = z^{4/5}$$]@

Any rational exponent converts to radical form:

@academic[formula_callout:Converting Between Forms
$$a^{m/n} = \\sqrt[n]{a^m}$$]@

@academic[formula_callout:Converting Between Forms
$$x^{3/4} = \\sqrt[4]{x^3}$$]@

@academic[formula_callout:Converting Between Forms
$$y^{-2/5} = \\frac{1}{\\sqrt[5]{y^2}}$$]@

Expressions in denominators convert similarly:

@academic[formula_callout:Converting Between Forms
$$\\frac{1}{\\sqrt{x}} = \\frac{1}{x^{1/2}} = x^{-1/2}$$]@

@academic[formula_callout:Converting Between Forms
$$\\frac{1}{\\sqrt[3]{a^2}} = a^{-2/3}$$]@

@academic[fact,aside:true,width:35%:A4 paper in rational exponents
An A4 sheet measures $2^{-9/4}$ by $2^{-7/4}$ meters, that is $\\frac{1}{\\sqrt[4]{512}}$ by $\\frac{1}{\\sqrt[4]{128}}$, which rounds to $210$ by $297$ millimeters. A0 has sides $2^{-1/4}$ and $2^{1/4}$, and four halvings divide each side by $2^2 = 4$.]@

The same conversions describe the international paper sizes. The largest sheet, A0, has an area of $1$ square meter, and its long side is $\\sqrt{2} = 2^{1/2}$ times its short side. Cutting a sheet in half across its long side gives the next size, A1, then A2, A3 and A4. Each cut halves the area, while the ratio of the long side to the short side stays $\\sqrt{2}$.

This flexibility allows choosing the form best suited to the task. Exponent form for algebraic manipulation; radical form for numerical evaluation or clarity.

To evaluate a root numerically in either form, use the [root calculator](!/calculators/root-calculator).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Domain Restrictions`,
    content: `@academic[rule_plain:Rational exponents inherit the domain restrictions of radicals.

When the denominator of the exponent is even, the base must be non-negative.]@

@academic[formula_callout:Domain Restrictions
$$(-4)^{1/2} \\quad \\text{is not real}$$]@

No real number squares to $-4$. The expression requires complex numbers.

When the denominator is odd, any real base is permitted.

@academic[formula_callout:Domain Restrictions
$$(-8)^{1/3} = -2$$]@

Negative bases have real odd roots.

The [properties of radicals](!/algebra/roots/properties) page details these restrictions. They apply equally whether the expression is written as $\\sqrt[n]{a}$ or $a^{1/n}$.

When exponents are negative, the additional restriction $a \\neq 0$ applies — division by zero is undefined.

These domain considerations matter when [simplifying](!/algebra/roots/simplifying) and when defining [radical functions](!/algebra/roots/functions).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Laws of Exponents with Rationals`,
    content: `@academic[rule_theorem_plain:All exponent laws extend to rational exponents.]@

Product rule — same base, add exponents:

@academic[formula_callout:Laws of Exponents with Rationals
$$a^{m/n} \\cdot a^{p/q} = a^{m/n + p/q}$$]@

@academic[formula_callout:Laws of Exponents with Rationals
$$x^{1/2} \\cdot x^{1/3} = x^{3/6 + 2/6} = x^{5/6}$$]@

Quotient rule — same base, subtract exponents:

@academic[formula_callout:Laws of Exponents with Rationals
$$\\frac{a^{m/n}}{a^{p/q}} = a^{m/n - p/q}$$]@

@academic[formula_callout:Laws of Exponents with Rationals
$$\\frac{y^{3/4}}{y^{1/2}} = y^{3/4 - 2/4} = y^{1/4}$$]@

Power of a power — multiply exponents:

@academic[formula_callout:Laws of Exponents with Rationals
$$(a^{m/n})^{p/q} = a^{(m/n)(p/q)} = a^{mp/(nq)}$$]@

@academic[formula_callout:Laws of Exponents with Rationals
$$(x^{2/3})^{3/4} = x^{6/12} = x^{1/2}$$]@

@academic[pitfall,aside:true,width:35%:Adding numerators and denominators
Adding the exponents as $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$ turns $x^{1/2} \\cdot x^{1/3}$ into $x^{2/5}$. The sum is $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$, so the product is $x^{5/6}$.
[Read more](!#pitfalls)]@

These are the same laws from [powers](!/algebra/powers), now with fractional arithmetic. Finding common denominators is often necessary when adding or subtracting exponents.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Simplifying with Rational Exponents`,
    content: `Exponent form often simplifies manipulation that would be awkward with radicals.

@academic[formula_callout:Simplifying with Rational Exponents
$$\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{1/2} \\cdot x^{1/3} = x^{5/6}$$]@

In radical form, this requires converting to a common index. In exponent form, it requires only adding fractions.

@academic[formula_callout:Simplifying with Rational Exponents
$$\\frac{\\sqrt[4]{a^3}}{\\sqrt{a}} = \\frac{a^{3/4}}{a^{1/2}} = a^{3/4 - 2/4} = a^{1/4} = \\sqrt[4]{a}$$]@

Factoring with rational exponents:

@academic[formula_callout:Simplifying with Rational Exponents
$$x^{1/2} + x^{3/2} = x^{1/2}(1 + x)$$]@

@academic[pitfall,aside:true,width:35%:Adding the exponents of a sum
Adding the exponents in $x^{1/2} + x^{3/2}$ gives $x^2$. At $x = 4$ that is $16$, but the sum is $2 + 8 = 10$. The exponent laws are for products; a sum can only be factored: $x^{1/2}(1 + x)$.
[Read more](!#pitfalls)]@

The smallest exponent factors out, just as with integer exponents.

Reducing exponents to lowest terms simplifies radicals:

@academic[formula_callout:Simplifying with Rational Exponents
$$x^{4/6} = x^{2/3}$$]@

This corresponds to reducing the index from 6 to 3, a technique from [simplifying radicals](!/algebra/roots/simplifying).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Combining Radicals via Exponents`,
    content: `When radicals have different indices, direct combination is impossible. Converting to exponents provides a path.

@academic[formula_callout:Combining Radicals via Exponents
$$\\sqrt{2} \\cdot \\sqrt[3]{4}$$]@

Convert:

@academic[formula_callout:Combining Radicals via Exponents
$$= 2^{1/2} \\cdot 4^{1/3} = 2^{1/2} \\cdot (2^2)^{1/3} = 2^{1/2} \\cdot 2^{2/3}$$]@

Add exponents:

@academic[formula_callout:Combining Radicals via Exponents
$$= 2^{3/6 + 4/6} = 2^{7/6}$$]@

Convert back if desired:

@academic[formula_callout:Combining Radicals via Exponents
$$= \\sqrt[6]{2^7} = \\sqrt[6]{128}$$]@

Division works similarly:

@academic[formula_callout:Combining Radicals via Exponents
$$\\frac{\\sqrt[3]{x}}{\\sqrt[4]{x}} = \\frac{x^{1/3}}{x^{1/4}} = x^{4/12 - 3/12} = x^{1/12} = \\sqrt[12]{x}$$]@

The exponent approach handles [operations](!/algebra/roots/operations) that radical notation makes cumbersome.

@academic[fact,aside:true,width:35%:Twelve equal steps nearly make $\\frac{3}{2}$
A pure fifth has the frequency ratio $\\frac{3}{2}$, and seven piano steps give $2^{7/12} \\approx 1.4983$, about $0.1$ percent short. It can never be exact: $2^{7/12} = \\frac{3}{2}$ would mean $2^{19} = 3^{12}$, an even number equal to an odd one.]@

Twelfth roots have an everyday use in music. A piano splits each octave, a doubling of the frequency, into twelve equal steps, so one step multiplies the frequency by $2^{1/12} = \\sqrt[12]{2} \\approx 1.0595$. A run of $k$ steps multiplies it by $2^{k/12}$, and joining two runs adds their exponents over the common denominator $12$, just as in the products above. A run of seven steps is the interval musicians call a fifth.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `When to Use Which Form`,
    content: `Radical form is often clearer for:

Numerical evaluation — $\\sqrt{16} = 4$ is more intuitive than $16^{1/2} = 4$.

Expressing final answers — many contexts prefer $\\sqrt{5}$ over $5^{1/2}$.

Identifying the root being taken — the index is visually prominent.

Exponent form is often better for:

Algebraic manipulation — adding, subtracting, and multiplying exponents follows standard fraction rules.

Combining expressions with different indices — a common denominator unifies them.

Applying exponent laws — the rules are the same as for integer exponents.

Solving [radical equations](!/algebra/roots/equations) — some equations simplify faster in exponent form.

Fluency in both notations and the ability to convert freely between them is the goal. The [radical rules](!/algebra/roots/radical-rules) and exponent laws are two languages for the same mathematics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Summary of Rational Exponent Forms`,
    content: `The forms introduced in the sections above collect into a single reference card. Each row gives a form, its general pattern, the radical equivalent, the restriction on the base for the expression to be real-valued, and a numerical example — useful for quick translation in either direction and for reviewing the territory at a glance.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Common Pitfalls`,
    content: `Five mistakes come up again and again with rational exponents. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Multiplying the base by the exponent**

A unit fraction exponent is read as an ordinary factor, so the base is multiplied by the fraction instead of having a root taken.

Wrong working:
$$8^{1/3} = 8 \\cdot \\frac{1}{3} = \\frac{8}{3}$$

Right working: the denominator $3$ is the index of a root.
$$8^{1/3} = \\sqrt[3]{8} = 2$$

Why it happens: an exponent written as a fraction looks like a number to multiply by, and the meaning "denominator = index" has not yet replaced that first reading.

How to check: raise the answer to the power of the denominator; it must give back the base. $\\left(\\frac{8}{3}\\right)^3 = \\frac{512}{27}$, which is not $8$, while $2^3 = 8$.

**Swapping the index and the power**

In $a^{m/n}$ the numerator and the denominator trade roles, so the numerator is taken as the index of the root and the denominator as the power.

Wrong working:
$$8^{2/3} = \\sqrt{8^3} = \\sqrt{512} \\approx 22.6$$

Right working: the denominator $3$ is the index and the numerator $2$ is the power.
$$8^{2/3} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$$
or, root first, $(\\sqrt[3]{8})^2 = 2^2 = 4$.

Why it happens: the fraction is read from the top down, and the first number seen is taken for the root.

How to check: estimate the size. The base $8$ is greater than $1$ and the exponent $\\frac{2}{3}$ lies between $0$ and $1$, so the result must lie between $1$ and $8$. The value $22.6$ is too large; $4$ fits.

**Making the result negative**

The minus sign in the exponent is read as a minus sign on the result.

Wrong working:
$$8^{-2/3} = -8^{2/3} = -4$$

Right working: a negative exponent means a reciprocal.
$$8^{-2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{4}$$

Why it happens: everywhere else in arithmetic a minus sign makes a number negative, and that meaning is carried over to the exponent.

How to check: a positive base raised to any power gives a positive result, so a negative answer from a positive base is always wrong. Also $8^{2/3} \\cdot 8^{-2/3} = 8^0 = 1$: indeed $4 \\cdot \\frac{1}{4} = 1$, while $4 \\cdot (-4) = -16$.

**Adding numerators and denominators**

The product rule is applied correctly, but the two exponent fractions are added by adding their numerators and their denominators separately.

Wrong working:
$$x^{1/2} \\cdot x^{1/3} = x^{\\frac{1 + 1}{2 + 3}} = x^{2/5}$$

Right working: bring the fractions to a common denominator first.
$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}, \\qquad x^{1/2} \\cdot x^{1/3} = x^{5/6}$$

Why it happens: the attention is on the exponent law, and the fraction sum is done in the quickest-looking way.

How to check: try a value that is a perfect sixth power, such as $x = 64$. Then $64^{1/2} \\cdot 64^{1/3} = 8 \\cdot 4 = 32$, and $64^{5/6} = 2^5 = 32$, while $64^{2/5} = 2^{12/5} \\approx 5.28$.

**Adding the exponents of a sum**

The rule "same base, add the exponents" is used on a sum of two powers, where it does not apply.

Wrong working:
$$x^{1/2} + x^{3/2} = x^{1/2 + 3/2} = x^2$$

Right working: $x^{1/2}$ and $x^{3/2}$ are unlike terms and cannot be combined into one power. The sum can be factored by taking out the smallest exponent.
$$x^{1/2} + x^{3/2} = x^{1/2}(1 + x)$$

Why it happens: the product rule is used so often that it gets applied whenever two powers of the same base stand next to each other, whatever the sign between them.

How to check: substitute $x = 4$. The sum is $4^{1/2} + 4^{3/2} = 2 + 8 = 10$, and $4^{1/2}(1 + 4) = 2 \\cdot 5 = 10$, but $4^2 = 16$.`,
    before: ``,
    after: ``,
    link: '',
  },

}



 const introContent = {
  id: "intro",
  title: "Fractions as Powers",
  content: `Radicals and exponents are two notations for the same concept. A square root is a power of one-half. A cube root is a power of one-third. Any radical can be written as a fractional exponent, and any fractional exponent can be written as a radical.

This equivalence is not merely notational convenience. Exponent form often simplifies algebraic manipulation, revealing patterns that radical notation obscures.`
}


const faqQuestions = {
  obj1: {
    question: "Why does $a^{1/n}$ mean the $n$th root?",
    answer: "Because the exponent laws force it. If $(a^m)^n = a^{mn}$ is to keep holding, then $(a^{1/2})^2 = a^{(1/2) \\cdot 2} = a^1 = a$. The only non-negative number whose square is $a$ is $\\sqrt{a}$, so $a^{1/2}$ must be $\\sqrt{a}$. The same argument gives $(a^{1/n})^n = a$, making $a^{1/n}$ the $n$th root.",
    sectionId: "1"
  },
  obj2: {
    question: "Should you take the root or the power first in $a^{m/n}$?",
    answer: "Either order gives the same answer, but taking the root first keeps the numbers small. For $27^{4/3}$ that means $(\\sqrt[3]{27})^4 = 3^4 = 81$. Going the other way requires computing $27^4 = 531441$ and then extracting its cube root: same result, far worse arithmetic. Reach for the root first unless the power is trivial.",
    sectionId: "2"
  },
  obj3: {
    question: "What restricts the base in $a^{-1/2}$?",
    answer: "Two conditions stack, and together they force $a > 0$. The even denominator requires a non-negative base, since no real number squares to a negative. The negative exponent separately requires $a \\neq 0$, because it produces a reciprocal and zero cannot sit in a denominator. Neither restriction alone is enough; combined they rule out zero as well as negatives.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Rational Exponents",
    "description": "Learn rational exponents: fractional powers as roots, a^(m/n) meaning, negative rational exponents, converting between forms, and applying exponent laws.",
    "url": "https://www.learnmathclass.com/algebra/roots/rational-exponents",
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
      "name": "Rational Exponents"
    },
    "teaches": [
      "Unit fraction exponents as roots",
      "General rational exponents a^(m/n)",
      "Negative rational exponents",
      "Converting between radical and exponent form",
      "Domain restrictions for rational exponents",
      "Laws of exponents with fractions",
      "Simplifying with rational exponents",
      "Combining radicals via exponents",
      "Overview of rational exponent forms and their radical equivalents"
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
        "name": "Roots",
        "item": "https://www.learnmathclass.com/algebra/roots"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Rational Exponents",
        "item": "https://www.learnmathclass.com/algebra/roots/rational-exponents"
      }
    ]
  }
}



  const fpThirdSteps = { kind: 'pieces', svgTitle: '8^x at thirds: 8^(2/3) = 4 and 8^(-2/3) = 1/4 are reciprocals', xRange: [-1, 1], yRange: [-1, 9],
    pieces: [{ fn: (x) => 8 ** x, from: -1, to: 1, ends: [null, null], color: 'f', label: { text: 'y = 8ˣ', x: 0.88, y: 8 ** 0.88, pos: 'w' } }],
    points: [{ x: -1, y: 1 / 8 }, { x: -2 / 3, y: 1 / 4, label: '8^(−2/3) = 1/4', pos: 'n' }, { x: -1 / 3, y: 1 / 2 }, { x: 0, y: 1 },
      { x: 1 / 3, y: 2, label: '8^(1/3) = 2', pos: 'se' }, { x: 2 / 3, y: 4, label: '8^(2/3) = 4', pos: 'nw' }, { x: 1, y: 8, label: '8', pos: 'w' }],
    notes: [{ x: 0.12, y: 0.6, text: 'each +1/3 doubles the value', pos: 'e', color: 'r' },
      { x: 0.06, y: -0.5, text: '±2/3: 4 and 1/4, reciprocals', pos: 'e', color: 'r' }],
    caption: '8^(−2/3) = 1 / 8^(2/3) = 1/4: a negative exponent flips the value' };
  const demoUnits = {
    thirdSteps: demoUnitFrame({
      svg: renderFunctionPlotV4(fpThirdSteps),
      caption: 'Exponents in thirds, both signs',
      text: 'The curve y = 8&#739; marked at every third from &#8722;1 to 1. Since 8&#185;&#8725;&#179; = 2, each step of 1/3 to the right doubles the value: 1, 2, 4, 8. Stepping left halves it: 1/2, 1/4, 1/8. So 8&#8315;&#178;&#8725;&#179; = 1/4 sits as far left of 0 as 8&#178;&#8725;&#179; = 4 sits right, with the reciprocal value.',
    }),
  };

  const ratExpDomainCases = {
    prefaceTitle: 'Inherited from radicals',
    preface: 'Rational exponents inherit the domain restrictions of radicals. Whether a negative base is allowed depends on the denominator of the exponent.',
    conclusionTitle: 'One more restriction',
    conclusion: 'When the exponent is negative, $a \\neq 0$ is required as well: division by zero is undefined. The restrictions apply equally to $\\sqrt[n]{a}$ and $a^{1/n}$.',
    parent: {
      kicker: 'Rational exponent',
      formula: '$a^{m/n}$',
      splitBy: 'whether the denominator $n$ is even or odd',
    },
    cases: [
      {
        id: 'even', condition: '$n$ even',
        count: { n: '≥0' },
        headline: 'Base must be non-negative',
        desc: 'no real number squares to a negative number; the expression would require complex numbers',
        example: '$(-4)^{1/2}$ is not real',
      },
      {
        id: 'odd', condition: '$n$ odd',
        count: { n: 'ℝ' },
        headline: 'Any real base',
        desc: 'negative bases have real odd roots',
        example: '$(-8)^{1/3} = -2$',
      },
    ],
  };

  // BeforeAfter (obj8): radicals with different indices combined through exponent form
  const combineRadicalsSteps = {
    header: {
      kicker: 'Rational exponents',
      title: 'Combining radicals with different indices',
      lede: 'Direct combination is impossible when the indices differ. Converting to exponents provides a path.',
    },
    steps: [
      { id: 'radicals', label: 'Different indices', stamp: 'Before', expr: '$\\sqrt{2} \\cdot \\sqrt[3]{4}$',
        move: { label: 'Convert', note: 'to exponents over one base: $4^{1/3} = (2^2)^{1/3} = 2^{2/3}$' } },
      { id: 'onebase', label: 'Exponent form, one base', expr: '$2^{1/2} \\cdot 2^{2/3}$',
        move: { label: 'Add exponents', note: '3/6 + 4/6 = 7/6' } },
      { id: 'power', label: 'Single power', expr: '$2^{7/6}$',
        move: { label: 'Convert back', note: 'the denominator 6 becomes the index' } },
      { id: 'radical', label: 'Single radical', stamp: 'After', expr: '$\\sqrt[6]{128}$',
        detailsLabel: 'Division',
        detailsTitle: 'Division works the same way',
        details: '$$\\frac{\\sqrt[3]{x}}{\\sqrt[4]{x}} = \\frac{x^{1/3}}{x^{1/4}} = x^{4/12 - 3/12} = x^{1/12} = \\sqrt[12]{x}$$' },
    ],
  };

return {
  props: {
    ratExpDomainCases,
    combineRadicalsSteps,
    sectionsContent,
    introContent,
    obj4Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    seoData: {
      title: "Rational Exponents: Fractional Powers & Radicals | Learn Math Class",
      description: "Learn rational exponents: fractional powers as roots, a^(m/n) meaning, negative rational exponents, converting between forms, and applying exponent laws.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/rational-exponents",
      name: "Rational Exponents"
    },
  }
}
   }

// export default function RationalExponentsPage({seoData,sectionsContent , introContent}) {


const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function RationalExponentsPage({ratExpDomainCases, combineRadicalsSteps, seoData, sectionsContent, introContent, obj4Table, obj9Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
          `@academic[punchline:In a rational exponent the denominator is the root and the numerator is the power: $a^{m/n}$ does both.]@`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-thirdSteps'} dangerouslySetInnerHTML={{ __html: demoUnits.thirdSteps }} />,
          `An exponent and its negative always give reciprocals: aᵗ · a⁻ᵗ = a⁰ = 1.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div
            key={'obj4-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj4Table }}
          />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <DiagramFrame
            key={'obj5-diagram'}
            id="rational-exponent-domain-cases"
            title="Rational exponents: which bases are allowed"
            source="/algebra/roots/rational-exponents"
          >
            <CaseSplit data={ratExpDomainCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
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
          `@academic[punchline:Written as powers of one base, radicals simplify by ordinary fraction arithmetic on the exponents.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <DiagramFrame
            key={'obj8-diagram'}
            id="combine-radicals-steps"
            title="Combining √2 and ∛4"
            source="/algebra/roots/rational-exponents"
            before={"The section's product, one move at a time. Every move happens in exponent form; radical notation comes back only at the end."}
            after={"The common denominator $6$ of the exponents becomes the index of the result. The same detour handles quotients, and it is the arithmetic behind the twelve equal steps of a piano octave."}
          >
            <BeforeAfter
              data={combineRadicalsSteps}
              variant="progression"
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
        ]
    },
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
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Rational Exponents FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rational Exponents</h1>
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