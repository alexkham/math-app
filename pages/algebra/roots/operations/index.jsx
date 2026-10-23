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
import identityDiagrams from '@/app/components/algebra/identities/identityDiagrams'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "operations with radicals",
  "adding radicals",
  "subtracting radicals",
  "multiplying radicals",
  "dividing radicals",
  "like radicals",
  "conjugate radicals",
  "radical operations",
  "combine radicals",
  "multiply square roots",
  "add square roots",
  "radical expressions operations",
  "simplify radical expressions",
  "FOIL radicals",
  "squaring radicals"
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

// obj1 — aggregation (classification): like radicals checklist
const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Pair</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Same index?</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Same radicand?</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Like radicals?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">3√5, &nbsp; 7√5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">√3, &nbsp; √5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">√2, &nbsp; ∛2</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
  </tbody>
</table>
`

// obj6 — aggregation: conjugate patterns and their radical-free products
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Pattern</th>
      <th style="${tableHeaders.aggregation}">Conjugate</th>
      <th style="${tableHeaders.aggregation}">Product (radical eliminated)</th>
      <th style="${tableHeaders.aggregation}">Numerical example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a + √b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a − √b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² − b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 + √2)(3 − √2) = 7</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">√a + √b</td>
      <td style="padding: 12px 15px; color: #34495e;">√a − √b</td>
      <td style="padding: 12px 15px; color: #34495e;">a − b</td>
      <td style="padding: 12px 15px; color: #34495e;">(√7 + √3)(√7 − √3) = 4</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary: operations strategy at a glance
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation</th>
      <th style="${tableHeaders.summary}">Requirement</th>
      <th style="${tableHeaders.summary}">Rule</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Add / subtract</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">like radicals (same index AND same radicand)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine coefficients, keep the radical unchanged</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3√5 + 7√5 = 10√5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiply</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same index — else convert to <a href="/algebra/roots/rational-exponents" style="${linkStyle}">rational exponents</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product rule; multiply coefficients separately</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√3 · √12 = 6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Divide</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same index — else convert to rational exponents</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quotient rule; rationalize if a radical remains</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√50 ⁄ √2 = 5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Expand binomial product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributive (FOIL); combine like radicals at the end</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2 + √3)(4 − √3) = 5 + 2√3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square a binomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)² formula — keep the middle term 2ab</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(√5 + √2)² = 7 + 2√10</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Multiply conjugates</td>
      <td style="padding: 12px 15px; color: #34495e;">binomial × its conjugate</td>
      <td style="padding: 12px 15px; color: #34495e;">difference of squares — the radicals eliminate</td>
      <td style="padding: 12px 15px; color: #34495e;">(a + √b)(a − √b) = a² − b</td>
    </tr>
  </tbody>
</table>
`

const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Combining Radicals
 
- [Like Radicals](!/algebra/definitions#like_radicals) — radicals with the same index and radicand; only like radicals can be added or subtracted
- [Conjugate](!/algebra/definitions#conjugate) — a binomial with the sign between terms reversed; its product with the original eliminates the radical
 
## Rules Used
 
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — multiplying radicals with the same index
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — dividing radicals with the same index
- [Rational Exponent](!/algebra/definitions#rational_exponent) — used to multiply radicals with different indices by finding a common denominator
- [Simplest Form](!/algebra/definitions#simplest_form) — simplify each radical before attempting to add or subtract`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

  obj1: {
    title: `Like Radicals`,
    content: `Like radicals share the same index and the same radicand.

@academic[rule_plain:Only like radicals can be added or subtracted.]@

@academic[formula_callout:Like Radicals
$$3\\sqrt{5} \\text{ and } 7\\sqrt{5} \\quad \\text{are like radicals}$$]@

@academic[formula_callout:Like Radicals
$$\\sqrt{3} \\text{ and } \\sqrt{5} \\quad \\text{are not like — different radicands}$$]@

@academic[formula_callout:Like Radicals
$$\\sqrt{2} \\text{ and } \\sqrt[3]{2} \\quad \\text{are not like — different indices}$$]@

The concept parallels like terms in algebra. Just as $3x$ and $7x$ can combine but $3x$ and $7y$ cannot, radicals combine only when their radical parts match exactly.

Recognizing like radicals sometimes requires [simplification](!/algebra/roots/simplifying) first. Two radicals that appear different may become like after simplifying.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Adding and Subtracting Like Radicals`,
    content: `To add or subtract like radicals, combine the coefficients and keep the radical unchanged.

@academic[formula_callout:Adding and Subtracting Like Radicals
$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$]@

@academic[formula_callout:Adding and Subtracting Like Radicals
$$8\\sqrt[3]{2} - 3\\sqrt[3]{2} = 5\\sqrt[3]{2}$$]@

@academic[formula_callout:Adding and Subtracting Like Radicals
$$\\frac{1}{2}\\sqrt{7} + \\frac{3}{4}\\sqrt{7} = \\frac{5}{4}\\sqrt{7}$$]@

Unlike radicals cannot be combined:

@academic[formula_callout:Adding and Subtracting Like Radicals
$$\\sqrt{2} + \\sqrt{3}$$]@

This expression is already in simplest form. No further reduction is possible.

When radicals appear unlike but can be simplified to like form:

@academic[formula_callout:Adding and Subtracting Like Radicals
$$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$$]@

Always [simplify](!/algebra/roots/simplifying) each radical before attempting to add or subtract.

@academic[pitfall,aside:true,width:35%:Adding the radicands
Writing $\\sqrt{2} + \\sqrt{3} = \\sqrt{5}$ adds what is under the radical signs. But $\\sqrt{2} + \\sqrt{3} \\approx 3.15$, while $\\sqrt{5} \\approx 2.24$. Unlike radicals do not combine, so $\\sqrt{2} + \\sqrt{3}$ is already the final form.
[Read more](!#pitfalls)]@

Addition of radicals works like collecting like terms. The radical part acts as a common factor, so $3\\sqrt{5} + 7\\sqrt{5} = (3 + 7)\\sqrt{5} = 10\\sqrt{5}$, in the same way that $3x + 7x = (3 + 7)x = 10x$. Simplifying first is what reveals such a common factor when the radicals do not look alike at the start.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Multiplying Radicals with the Same Index`,
    content: `When radicals share the same index, multiply the radicands and keep the index.

@academic[formula_callout:Multiplying Radicals with the Same Index
$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$$]@

This is the product rule from [radical rules](!/algebra/roots/radical-rules).

@academic[formula_callout:Multiplying Radicals with the Same Index
$$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$$]@

@academic[formula_callout:Multiplying Radicals with the Same Index
$$\\sqrt[3]{4} \\cdot \\sqrt[3]{2} = \\sqrt[3]{8} = 2$$]@

When coefficients are present, multiply them separately:

@academic[formula_callout:Multiplying Radicals with the Same Index
$$3\\sqrt{2} \\cdot 4\\sqrt{5} = 12\\sqrt{10}$$]@

@academic[formula_callout:Multiplying Radicals with the Same Index
$$(2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$$]@

Multiplication often produces results that can be [simplified](!/algebra/roots/simplifying):

@academic[formula_callout:Multiplying Radicals with the Same Index
$$\\sqrt{6} \\cdot \\sqrt{8} = \\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$$]@

@academic[pitfall,aside:true,width:35%:Squaring only the radical
Squaring only the radical part, $(2\\sqrt{3})^2 = 2 \\cdot 3 = 6$, leaves the coefficient unsquared. Both factors are squared: $2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$.
[Read more](!#pitfalls)]@

In each product above, the coefficients and the radicals are handled as two separate groups: the numbers outside multiply together, and the radicands multiply under a single radical. A square such as $(2\\sqrt{3})^2$ is the same kind of product, $2\\sqrt{3} \\cdot 2\\sqrt{3}$, written in shorter form.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Multiplying Radicals with Different Indices`,
    content: `When indices differ, the product rule does not apply directly. Convert to [rational exponents](!/algebra/roots/rational-exponents), find a common denominator, then proceed.

@academic[formula_callout:Multiplying Radicals with Different Indices
$$\\sqrt{2} \\cdot \\sqrt[3]{2} = 2^{1/2} \\cdot 2^{1/3}$$]@

Find a common denominator for the exponents:

@academic[formula_callout:Multiplying Radicals with Different Indices
$$= 2^{3/6} \\cdot 2^{2/6} = 2^{5/6} = \\sqrt[6]{2^5} = \\sqrt[6]{32}$$]@

Alternatively, convert both radicals to the same index first:

@academic[formula_callout:Multiplying Radicals with Different Indices
$$\\sqrt{2} = \\sqrt[6]{2^3} = \\sqrt[6]{8}$$]@

@academic[formula_callout:Multiplying Radicals with Different Indices
$$\\sqrt[3]{2} = \\sqrt[6]{2^2} = \\sqrt[6]{4}$$]@

@academic[formula_callout:Multiplying Radicals with Different Indices
$$\\sqrt[6]{8} \\cdot \\sqrt[6]{4} = \\sqrt[6]{32}$$]@

@academic[pitfall,aside:true,width:35%:Multiplying across different indices
Writing $\\sqrt{2} \\cdot \\sqrt[3]{2} = \\sqrt[6]{4}$ multiplies the radicands as if the indices matched. But $\\sqrt[6]{4} \\approx 1.26$, while the product is about $1.41 \\cdot 1.26 \\approx 1.78$. With exponents, $2^{1/2} \\cdot 2^{1/3} = 2^{5/6} = \\sqrt[6]{32}$.
[Read more](!#pitfalls)]@

Both methods reach the same result. The exponent approach is often more efficient for complex expressions.

Both routes rest on the same fact: radicals can share one radical sign only once they have the same index. Here the common index is $6$, the least common multiple of $2$ and $3$, and each radicand is raised to the power that the new index requires: $2^3$ for the square root and $2^2$ for the cube root.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Dividing Radicals`,
    content: `Division follows the quotient rule from [radical rules](!/algebra/roots/radical-rules):

@academic[formula_callout:Dividing Radicals
$$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$]@

@academic[formula_callout:Dividing Radicals
$$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$$]@

@academic[formula_callout:Dividing Radicals
$$\\frac{\\sqrt[3]{54}}{\\sqrt[3]{2}} = \\sqrt[3]{\\frac{54}{2}} = \\sqrt[3]{27} = 3$$]@

With coefficients:

@academic[formula_callout:Dividing Radicals
$$\\frac{12\\sqrt{15}}{4\\sqrt{3}} = \\frac{12}{4} \\cdot \\sqrt{\\frac{15}{3}} = 3\\sqrt{5}$$]@

When indices differ, convert to [rational exponents](!/algebra/roots/rational-exponents):

@academic[formula_callout:Dividing Radicals
$$\\frac{\\sqrt{8}}{\\sqrt[3]{4}} = \\frac{2^{3/2}}{2^{2/3}} = 2^{3/2 - 2/3} = 2^{9/6 - 4/6} = 2^{5/6} = \\sqrt[6]{32}$$]@

If the result leaves a radical in the denominator, [rationalize](!/algebra/roots/simplifying) to achieve simplest form.

@academic[pitfall,aside:true,width:35%:Cancelling a number into the radicand
Writing $\\frac{\\sqrt{12}}{2} = \\sqrt{6}$ divides the radicand by a number outside the radical. But $\\sqrt{6} \\approx 2.45$, while $\\frac{\\sqrt{12}}{2} \\approx 1.73$. Simplify first: $\\frac{\\sqrt{12}}{2} = \\frac{2\\sqrt{3}}{2} = \\sqrt{3}$.
[Read more](!#pitfalls)]@

In the example with coefficients, the division splits into two independent quotients: $\\frac{12}{4} = 3$ for the numbers outside the radicals and $\\frac{15}{3} = 5$ for the radicands inside. The two results are then written side by side as $3\\sqrt{5}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Conjugates`,
    content: `The conjugate of a binomial expression reverses the sign between terms.

Conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$.

Conjugate of $\\sqrt{a} - \\sqrt{b}$ is $\\sqrt{a} + \\sqrt{b}$.

The key property: multiplying conjugates eliminates radicals.

@academic[formula_callout:Conjugates
$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$$]@

@academic[formula_callout:Conjugates
$$(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b$$]@

These are difference of squares patterns.

@academic[formula_callout:Conjugates
$$( 3 + \\sqrt{2})(3 - \\sqrt{2}) = 9 - 2 = 7$$]@

@academic[formula_callout:Conjugates
$$(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3}) = 7 - 3 = 4$$]@

Conjugates are essential for [rationalizing denominators](!/algebra/roots/simplifying) and appear in solving certain [radical equations](!/algebra/roots/equations).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Expanding Products with Radicals`,
    content: `Binomials containing radicals expand using the [distributive property](!/arithmetic/properties#5), just like algebraic binomials.

@academic[formula_callout:Expanding Products with Radicals
$$(2 + \\sqrt{3})(4 - \\sqrt{3})$$]@

Apply FOIL:

@academic[formula_callout:Expanding Products with Radicals
$$= 2 \\cdot 4 + 2 \\cdot (-\\sqrt{3}) + \\sqrt{3} \\cdot 4 + \\sqrt{3} \\cdot (-\\sqrt{3})$$]@

@academic[formula_callout:Expanding Products with Radicals
$$= 8 - 2\\sqrt{3} + 4\\sqrt{3} - 3$$]@

@academic[formula_callout:Expanding Products with Radicals
$$= 5 + 2\\sqrt{3}$$]@

Squaring a binomial:

@academic[formula_callout:Expanding Products with Radicals
$$(\\sqrt{5} + \\sqrt{2})^2 = (\\sqrt{5})^2 + 2\\sqrt{5}\\sqrt{2} + (\\sqrt{2})^2$$]@

@academic[formula_callout:Expanding Products with Radicals
$$= 5 + 2\\sqrt{10} + 2 = 7 + 2\\sqrt{10}$$]@

Common error: $(a + \\sqrt{b})^2 \\neq a^2 + b$. The middle term $2a\\sqrt{b}$ must not be forgotten.

These expansions appear frequently in [radical equations](!/algebra/roots/equations) when both sides are squared.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Squaring Radical Expressions`,
    content: `Squaring eliminates square roots:

@academic[formula_callout:Squaring Radical Expressions
$$(\\sqrt{x})^2 = x$$]@

@academic[formula_callout:Squaring Radical Expressions
$$(3\\sqrt{5})^2 = 9 \\cdot 5 = 45$$]@

For binomials, expand fully:

@academic[formula_callout:Squaring Radical Expressions
$$(\\sqrt{x} + 3)^2 = x + 6\\sqrt{x} + 9$$]@

@academic[formula_callout:Squaring Radical Expressions
$$(\\sqrt{x + 1} - 2)^2 = (x + 1) - 4\\sqrt{x + 1} + 4 = x + 5 - 4\\sqrt{x + 1}$$]@

When solving [radical equations](!/algebra/roots/equations), squaring both sides is the primary technique for eliminating radicals. The expressions above show what results from squaring — and why squaring a binomial with a radical does not fully eliminate the radical unless conjugates are involved.

Squaring can also introduce extraneous solutions. Any solution must be checked in the original equation, as detailed in the [equations](!/algebra/roots/equations) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Operations Strategy`,
    content: `A systematic approach to radical operations:

Before adding or subtracting, [simplify](!/algebra/roots/simplifying) each radical to identify like radicals.

Before multiplying or dividing, check whether indices match. If they do, apply the product or quotient rule. If not, convert to [rational exponents](!/algebra/roots/rational-exponents).

After any operation, simplify the result. Multiplication often creates perfect power factors. Division may leave radicals in denominators requiring rationalization.

When expanding products, apply distributive property carefully. Track each term. Combine like radicals at the end.

These operations prepare expressions for solving [radical equations](!/algebra/roots/equations) and for analyzing [radical functions](!/algebra/roots/functions). Fluency here makes those topics more accessible.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Common Pitfalls`,
    content: `Five mistakes come up again and again in operations with radicals. The first four are marked where they happen in the sections above, and the fifth is the error named in the section on expanding products. Here each one is worked through in full, with the wrong and the right working side by side.

**Adding the radicands**

Two radicals are added by adding the numbers under the radical signs, as if the radical were a bracket that could hold the sum.

Wrong working:
$$\\sqrt{2} + \\sqrt{3} = \\sqrt{5}$$
The same slip with like radicals gives $3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{10}$.

Right working: $\\sqrt{2}$ and $\\sqrt{3}$ are unlike, so the sum stays $\\sqrt{2} + \\sqrt{3}$. For like radicals only the coefficients are added:
$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$

Why it happens: the product rule $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$ seems to invite an addition version, and adding the numbers under the radicals feels like the natural way to combine them.

How to check: compare decimals. $\\sqrt{2} + \\sqrt{3} \\approx 3.15$, while $\\sqrt{5} \\approx 2.24$. Likewise $10\\sqrt{10} \\approx 31.62$, while $3\\sqrt{5} + 7\\sqrt{5} \\approx 22.36 \\approx 10\\sqrt{5}$.

**Squaring only the radical**

A term with a coefficient, such as $2\\sqrt{3}$, is squared, but only the radical part is squared and the coefficient is left as it was.

Wrong working:
$$(2\\sqrt{3})^2 = 2 \\cdot 3 = 6$$

Right working: the square applies to both factors of the term.
$$(2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$$

Why it happens: $(\\sqrt{3})^2 = 3$ is the step that stands out, and the coefficient in front is treated as if it stood outside the brackets.

How to check: write the square as a product. $2\\sqrt{3} \\cdot 2\\sqrt{3} = (2 \\cdot 2)(\\sqrt{3} \\cdot \\sqrt{3}) = 4 \\cdot 3 = 12$. In decimals, $2\\sqrt{3} \\approx 3.46$, and $3.46^2 \\approx 12$.

**Multiplying across different indices**

The product rule is applied to radicals whose indices differ, and the radicands are multiplied under some combined index.

Wrong working:
$$\\sqrt{2} \\cdot \\sqrt[3]{2} = \\sqrt[6]{2 \\cdot 2} = \\sqrt[6]{4}$$

Right working: convert to rational exponents and add them over a common denominator.
$$\\sqrt{2} \\cdot \\sqrt[3]{2} = 2^{1/2} \\cdot 2^{1/3} = 2^{3/6 + 2/6} = 2^{5/6} = \\sqrt[6]{32}$$

Why it happens: the product rule $\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$ is used without checking that both radicals share the same index $n$.

How to check: compare decimals. $\\sqrt{2} \\cdot \\sqrt[3]{2} \\approx 1.414 \\cdot 1.260 \\approx 1.78$ and $\\sqrt[6]{32} \\approx 1.78$, while $\\sqrt[6]{4} \\approx 1.26$.

**Cancelling a number into the radicand**

A number outside the radical is divided into the radicand, as if both stood under the same radical sign.

Wrong working:
$$\\frac{\\sqrt{12}}{2} = \\sqrt{\\frac{12}{2}} = \\sqrt{6}$$

Right working: simplify the radical first, then cancel numbers that stand outside it.
$$\\frac{\\sqrt{12}}{2} = \\frac{2\\sqrt{3}}{2} = \\sqrt{3}$$

Why it happens: the quotient rule lets radicands be divided under one radical, and the $2$ in the denominator is treated as if it were a radicand too.

How to check: compare decimals. $\\frac{\\sqrt{12}}{2} \\approx \\frac{3.46}{2} \\approx 1.73$ and $\\sqrt{3} \\approx 1.73$, while $\\sqrt{6} \\approx 2.45$.

**Dropping the middle term**

A binomial that contains a radical is squared, and only the squares of the two terms are written down.

Wrong working:
$$(\\sqrt{5} + \\sqrt{2})^2 = 5 + 2 = 7$$

Right working: the square of a binomial has three terms.
$$(\\sqrt{5} + \\sqrt{2})^2 = (\\sqrt{5})^2 + 2\\sqrt{5}\\sqrt{2} + (\\sqrt{2})^2 = 7 + 2\\sqrt{10}$$

Why it happens: a product squares factor by factor, $(ab)^2 = a^2b^2$, and the same move is carried over to a sum.

How to check: compare decimals. $\\sqrt{5} + \\sqrt{2} \\approx 3.65$, and $3.65^2 \\approx 13.32$, which matches $7 + 2\\sqrt{10} \\approx 13.32$ and not $7$.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Combining Radical Expressions",
  content: `Radicals can be added, subtracted, multiplied, and divided — but each operation has its own requirements. Addition and subtraction work only with like radicals. Multiplication and division follow the radical rules but require matching indices.

Mastering these operations transforms complicated expressions into simpler ones and prepares the ground for solving equations where radicals appear.`
}


const faqQuestions = {
  obj1: {
    question: "Why can't you add $\\sqrt{2} + \\sqrt{3}$?",
    answer: "Because they are unlike radicals, exactly as $3x + 7y$ cannot be combined. Adding requires a matching index and a matching radicand, and these two share no radicand, so $\\sqrt{2} + \\sqrt{3}$ is already in simplest form. Simplify before deciding, though: $\\sqrt{12} + \\sqrt{27}$ looks unlike but becomes $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.",
    sectionId: "2"
  },
  obj2: {
    question: "Why does multiplying by the conjugate remove the radical when squaring doesn't?",
    answer: "Because they trigger different patterns. A conjugate pair gives a difference of squares with no middle term: $(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3}) = 7 - 3 = 4$, fully rational. Squaring gives a perfect square trinomial whose middle term still carries a radical: $(\\sqrt{5} + \\sqrt{2})^2 = 7 + 2\\sqrt{10}$. The opposite signs are what cancel the cross terms.",
    sectionId: "6"
  },
  obj3: {
    question: "Why is $(a + \\sqrt{b})^2$ not $a^2 + b$?",
    answer: "Because squaring a binomial produces three terms, not two. The expansion is $a^2 + 2a\\sqrt{b} + b$, and the middle term $2a\\sqrt{b}$ is the one most often dropped. Concretely $(3 + \\sqrt{2})^2 = 9 + 6\\sqrt{2} + 2 = 11 + 6\\sqrt{2}$, not $11$. The same omission produces wrong answers when a radical equation is squared.",
    sectionId: "7"
  },
  obj4: {
    question: "Do you still need to simplify after multiplying radicals?",
    answer: "Usually yes, because multiplying tends to create perfect power factors that were not there before. $\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$ leaves no radical at all, and $\\sqrt{6} \\cdot \\sqrt{10} = \\sqrt{60} = 2\\sqrt{15}$ still needs extracting. Division has the mirror problem: the quotient may leave a radical in the denominator to rationalize.",
    sectionId: "3"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Operations on Roots",
    "description": "Learn operations with radicals: adding, subtracting, multiplying, and dividing radical expressions. Includes conjugates, expanding products, and squaring radicals.",
    "url": "https://www.learnmathclass.com/algebra/roots/operations",
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
      "name": "Radical Operations"
    },
    "teaches": [
      "Identifying like radicals",
      "Adding and subtracting radicals",
      "Multiplying radicals with same index",
      "Multiplying radicals with different indices",
      "Dividing radicals",
      "Using conjugates",
      "Expanding products with radicals",
      "Squaring radical expressions",
      "Reference card of radical operations and their requirements"
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
        "name": "Operations on Roots",
        "item": "https://www.learnmathclass.com/algebra/roots/operations"
      }
    ]
  }
}



  const demoUnits = {
    squareOfSum: demoUnitFrame({
      svg: identityDiagrams['sum-4'],
      caption: 'Why the middle term stays',
      text: 'The square of a sum as an area: a side a + b cut into an a &#215; a square, a b &#215; b square and two a &#215; b rectangles. With a = &#8730;5 and b = &#8730;2 the squares have areas 5 and 2 and each rectangle has area &#8730;5&#183;&#8730;2 = &#8730;10, so (&#8730;5 + &#8730;2)&#178; = 7 + 2&#8730;10. Writing a&#178; + b&#178; alone drops the two rectangles. Build the square piece by piece on the',
      href: '/algebra/visual-tools/identities/square-of-sum',
      linkText: 'square of a sum explorer',
    }),
  };

return {
  props: {
    sectionsContent,
    introContent,
    obj1Table,
    obj6Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    seoData: {
      title: "Operations on Radicals: Add, Subtract, Multiply, Divide | Learn Math Class",
      description: "Learn operations with radicals: adding, subtracting, multiplying, and dividing radical expressions. Includes conjugates, expanding products, and squaring radicals.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/operations",
      name: "Operations on Roots"
    },
  }
}
   }

// export default function OperationsPage({seoData,sectionsContent , introContent}) {


export default function OperationsPage({seoData, sectionsContent, introContent, obj1Table, obj6Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
          <div
            key={'obj1-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj1Table }}
          />,
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
          <div
            key={'obj6-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj6Table }}
          />,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-squareOfSum'} dangerouslySetInnerHTML={{ __html: demoUnits.squareOfSum }} />,
          `The two rectangles are the 2a√b of (a + √b)², which is why squaring a binomial leaves a radical behind.`,
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
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Operations on Roots FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Roots</h1>
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