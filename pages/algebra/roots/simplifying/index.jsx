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
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "simplify radicals",
  "simplifying square roots",
  "rationalize denominator",
  "simplest radical form",
  "factor out perfect squares",
  "simplify cube roots",
  "rationalizing binomial denominator",
  "conjugate radical",
  "simplify radicals with variables",
  "reduce radical index",
  "perfect square factors",
  "radical simplification",
  "simplify nth roots",
  "rationalize square root denominator",
  "simplify radical expressions"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj1 — aggregation: three criteria for simplest form, as a checklist
  const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Criterion</th>
      <th style="${tableHeaders.aggregation}">What it prohibits</th>
      <th style="${tableHeaders.aggregation}">Example of a violation</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">No perfect power factors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a factor of the radicand that is itself a perfect nth power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√72 — the factor 36 = 6² could be extracted</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">No fractions under the radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a radicand that is itself a fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(3 ⁄ 4) — split into √3 ⁄ √4 and continue</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">No radicals in denominators</td>
      <td style="padding: 12px 15px; color: #34495e;">a denominator that contains any radical</td>
      <td style="padding: 12px 15px; color: #34495e;">5 ⁄ √3 — rationalize to 5√3 ⁄ 3</td>
    </tr>
  </tbody>
</table>
`

  // obj2 — aggregation: perfect powers by radical index
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Index</th>
      <th style="${tableHeaders.aggregation}">Perfect powers to look for</th>
      <th style="${tableHeaders.aggregation}">Worked extraction</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square root (n = 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4, 9, 16, 25, 36, 49, 64, 81, 100, …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√72 = √(36 · 2) = 6√2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube root (n = 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8, 27, 64, 125, 216, …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛54 = ∛(27 · 2) = 3∛2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">nth root (general)</td>
      <td style="padding: 12px 15px; color: #34495e;">any aⁿ for that specific n (e.g., for n = 4: 16, 81, 256, …)</td>
      <td style="padding: 12px 15px; color: #34495e;">⁴√48 = ⁴√(16 · 3) = 2⁴√3</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — comparison: rationalization patterns across every denominator type
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Denominator type</th>
      <th style="${tableHeaders.comparison}">Multiply numerator and denominator by</th>
      <th style="${tableHeaders.comparison}">Why it works</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single square root: √b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√b · √b = b — a perfect square</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 ⁄ √3 = 5√3 ⁄ 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single higher root: ⁿ√(bᵏ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ⁿ√(bⁿ⁻ᵏ) — whatever completes a perfect nth power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">creates ⁿ√(bⁿ) = b in the denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 ⁄ ∛5 = 2∛25 ⁄ 5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Binomial, square roots: a + √b &nbsp;or&nbsp; √a + √b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the conjugate (sign flipped on the radical term)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + √b)(a − √b) = a² − b — difference of squares</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 ⁄ (2 + √5) = −3(2 − √5)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Binomial, cube roots: ∛a + ∛b &nbsp;(or with 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">the sum/difference-of-cubes companion: a² − ab + b² &nbsp;(adapted to the cube-root terms)</td>
      <td style="padding: 12px 15px; color: #34495e;">(a + b)(a² − ab + b²) = a³ + b³</td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ (∛2 + 1) = (∛4 − ∛2 + 1) ⁄ 3</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — summary capstone: simplification techniques at a glance
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Technique</th>
      <th style="${tableHeaders.summary}">When to use</th>
      <th style="${tableHeaders.summary}">Procedure</th>
      <th style="${tableHeaders.summary}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Extract perfect powers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the radicand has a factor that is a perfect nth power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">apply the product rule and pull out the perfect power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√72 = 6√2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Simplify variable powers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a variable's exponent is at least the index</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">divide exponent by index; the quotient extracts, the remainder stays</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(x⁷) = x³√x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combined numerical + variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the radicand mixes a coefficient and variable powers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor the coefficient and each variable separately, then extract</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(50x⁵) = 5x²√(2x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rationalize a monomial denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a single radical sits in the denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply num and denom by what completes a perfect nth power under the radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 ⁄ √3 = 5√3 ⁄ 3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rationalize a binomial denominator (square roots)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the denominator is a sum or difference involving √b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply by the conjugate; difference-of-squares clears the radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 ⁄ (2 + √5) = −3(2 − √5)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rationalize a binomial denominator (cube roots)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the denominator is ∛a + ∛b or similar with cube roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply by the sum or difference-of-cubes companion factor</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (∛2 + 1) = (∛4 − ∛2 + 1) ⁄ 3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Reduce the index</td>
      <td style="padding: 12px 15px; color: #34495e;">the index and the radicand's exponent share a common factor</td>
      <td style="padding: 12px 15px; color: #34495e;">convert to rational-exponent form, reduce the fraction, convert back if desired</td>
      <td style="padding: 12px 15px; color: #34495e;">⁶√(x⁴) = ∛(x²)</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Simplification Concepts
 
- [Simplest Form](!/algebra/definitions#simplest_form) — three conditions: no perfect powers in the radicand, no fractions under the radical, no radicals in denominators
- [Perfect Square](!/algebra/definitions#perfect_square) — an integer equal to $n^2$; extracted from radicands during simplification
- [Perfect Cube](!/algebra/definitions#perfect_cube) — an integer equal to $n^3$; extracted from cube root radicands
- [Rationalization](!/algebra/definitions#rationalization) — eliminating radicals from denominators by multiplying by an appropriate form
- [Conjugate](!/algebra/definitions#conjugate) — for $a + b\\sqrt{c}$, its conjugate $a - b\\sqrt{c}$; used to rationalize binomial denominators
 
## Rules Used
 
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — splits a radical of a product to extract perfect powers
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — splits a radical of a fraction
- [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals)) — reduces the index by canceling common factors between exponent and index`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What Simplest Form Means`,
    content: `A radical is in simplest form when three conditions hold:

No perfect power factors remain under the radical. The radicand contains no factor that could be extracted.

No fractions appear under the radical. A radical of a fraction should be rewritten as a fraction of radicals.

No radicals appear in denominators. Denominators are rationalized — rewritten without radical signs.

@academic[formula_callout:What Simplest Form Means
$$\\sqrt{72} \\quad \\text{is not simplified — 36 is a perfect square factor}$$]@

@academic[formula_callout:What Simplest Form Means
$$\\sqrt{\\frac{3}{4}} \\quad \\text{is not simplified — fraction under radical}$$]@

@academic[formula_callout:What Simplest Form Means
$$\\frac{5}{\\sqrt{3}} \\quad \\text{is not simplified — radical in denominator}$$]@

These criteria define the target. The techniques that follow show how to reach it.

The table below collects the three criteria as a checklist for verifying simplest form.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Factoring Out Perfect Powers`,
    content: `To simplify a radical, identify perfect power factors in the radicand and extract them.

For square roots, find perfect square factors:

@academic[formula_callout:Factoring Out Perfect Powers
$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$$]@

For cube roots, find perfect cube factors:

@academic[formula_callout:Factoring Out Perfect Powers
$$\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = \\sqrt[3]{27} \\cdot \\sqrt[3]{2} = 3\\sqrt[3]{2}$$]@

For $n$th roots, find perfect $n$th power factors:

@academic[formula_callout:Factoring Out Perfect Powers
$$\\sqrt[4]{48} = \\sqrt[4]{16 \\cdot 3} = \\sqrt[4]{16} \\cdot \\sqrt[4]{3} = 2\\sqrt[4]{3}$$]@

The process uses the product rule from [radical rules](!/algebra/roots/radical-rules). Factor the radicand, separate into two radicals, simplify the perfect power.

@academic[fact,aside:true,width:35%:Most square roots are already simplest
Of the numbers from $1$ to $100$, $61$ have no square factor other than $1$, so their square roots cannot be simplified. Over all whole numbers the share tends to $\\frac{6}{\\pi^2} \\approx 0.608$: each prime $p$ rules out the multiples of $p^2$, and the product of all the factors $1 - \\frac{1}{p^2}$ equals $\\frac{6}{\\pi^2}$.]@

Not every radicand contains a perfect power to extract. In $30 = 2 \\cdot 3 \\cdot 5$ no prime appears twice, so no factor of $30$ other than $1$ is a perfect square, and $\\sqrt{30}$ is already in simplest form. A square root can be simplified exactly when some prime appears at least twice in the factorization of its radicand.

When multiple perfect power factors exist, extract them all:

@academic[formula_callout:Factoring Out Perfect Powers
$$\\sqrt{200} = \\sqrt{100 \\cdot 2} = 10\\sqrt{2}$$]@

Recognizing perfect powers quickly — 4, 9, 16, 25, 36, 49, 64, 81, 100 for squares; 8, 27, 64, 125 for cubes — speeds the work.

@academic[pitfall,aside:true,width:35%:Splitting a sum under the radical
Writing $72 = 64 + 8$ and splitting, $\\sqrt{64 + 8} = 8 + \\sqrt{8}$, treats a sum like a product. But $8 + \\sqrt{8} \\approx 10.83$, while $\\sqrt{72} \\approx 8.49$. Only a product splits: $\\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.
[Read more](!#pitfalls)]@

Every extraction above begins by writing the radicand as a product, such as $72 = 36 \\cdot 2$ or $48 = 16 \\cdot 3$. The product rule then gives each factor its own radical, and the perfect power factor leaves the radical as a whole number. How the radicand is broken up is the first decision in every simplification.

The table below collects the perfect powers for each common index with a worked extraction example.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Simplifying with Variables`,
    content: `Variables under radicals follow the same process: extract perfect powers.

@academic[formula_callout:Simplifying with Variables
$$\\sqrt{x^6} = |x^3|$$]@

The exponent 6 divides evenly by the index 2, so the entire power extracts.

@academic[formula_callout:Simplifying with Variables
$$\\sqrt{x^7} = \\sqrt{x^6 \\cdot x} = x^3\\sqrt{x}$$]@

The exponent 7 does not divide evenly. Separate into the largest even power (6) and the remainder (1).

@academic[formula_callout:Simplifying with Variables
$$\\sqrt[3]{y^{10}} = \\sqrt[3]{y^9 \\cdot y} = y^3\\sqrt[3]{y}$$]@

For cube roots, extract the largest multiple of 3.

The general rule: divide the exponent by the index. The quotient is the extracted power; the remainder stays under the radical.

@academic[formula_callout:Simplifying with Variables
$$\\sqrt[n]{x^m} = x^{\\lfloor m/n \\rfloor} \\cdot \\sqrt[n]{x^{m \\mod n}}$$]@

When the index is even, absolute values may be needed. The [properties of radicals](!/algebra/roots/properties) page explains when $\\sqrt{x^2} = |x|$ rather than $x$. A common convention assumes all variables are positive, avoiding absolute value complications.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Combined Numerical and Variable Simplification`,
    content: `Most expressions combine numbers and variables. Simplify each part.

@academic[formula_callout:Combined Numerical and Variable Simplification
$$\\sqrt{50x^5} = \\sqrt{25 \\cdot 2 \\cdot x^4 \\cdot x} = 5x^2\\sqrt{2x}$$]@

Factor 50 into $25 \\cdot 2$. Factor $x^5$ into $x^4 \\cdot x$. Extract the perfect squares.

@academic[formula_callout:Combined Numerical and Variable Simplification
$$\\sqrt[3]{-128a^7b^4} = \\sqrt[3]{-64 \\cdot 2 \\cdot a^6 \\cdot a \\cdot b^3 \\cdot b}$$]@

@academic[formula_callout:Combined Numerical and Variable Simplification
$$= -4a^2b\\sqrt[3]{2ab}$$]@

The negative radicand is fine for odd index — cube roots handle negatives naturally, as explained in [properties](!/algebra/roots/properties).

@academic[pitfall,aside:true,width:35%:Taking out the square instead of its root
Moving the perfect square out unchanged, $\\sqrt{50x^5} = 25x^4\\sqrt{2x}$, skips its root. At $x = 1$ this gives $25\\sqrt{2} \\approx 35.4$, but $\\sqrt{50} \\approx 7.07$. The factor that leaves is $\\sqrt{25x^4} = 5x^2$, so the result is $5x^2\\sqrt{2x}$.
[Read more](!#pitfalls)]@

Organize work systematically: factor the coefficient, factor each variable's power, extract what divides evenly, leave remainders under the radical.

Both examples follow the same pattern. The radicand is split into a perfect power part and a remainder, the perfect power part leaves the radical, and the remainder stays inside. For the cube root, the perfect power part is $-64a^6b^3$ and the remainder is $2ab$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Rationalizing Monomial Denominators`,
    content: `A radical in the denominator violates simplest form. Rationalizing removes it.

For a square root denominator, multiply by that square root over itself:

@academic[formula_callout:Rationalizing Monomial Denominators
$$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$]@

The denominator becomes $\\sqrt{3} \\cdot \\sqrt{3} = \\sqrt{9} = 3$, a rational number.

For higher roots, multiply to create a perfect power under the radical:

@academic[formula_callout:Rationalizing Monomial Denominators
$$\\frac{2}{\\sqrt[3]{5}} = \\frac{2}{\\sqrt[3]{5}} \\cdot \\frac{\\sqrt[3]{25}}{\\sqrt[3]{25}} = \\frac{2\\sqrt[3]{25}}{\\sqrt[3]{125}} = \\frac{2\\sqrt[3]{25}}{5}$$]@

The cube root of 5 needs two more factors of 5 to become $\\sqrt[3]{125} = 5$.

@academic[pitfall,aside:true,width:35%:Multiplying by the same cube root
Multiplying $\\frac{2}{\\sqrt[3]{5}}$ by $\\frac{\\sqrt[3]{5}}{\\sqrt[3]{5}}$, as for a square root, gives $\\frac{2\\sqrt[3]{5}}{\\sqrt[3]{25}}$, and $\\sqrt[3]{25}$ is still irrational. The multiplier must be $\\sqrt[3]{25}$, giving $\\frac{2\\sqrt[3]{25}}{5}$.
[Read more](!#pitfalls)]@

General principle: multiply by $\\sqrt[n]{a^{n-k}}$ where $k$ is the current power of $a$ under the radical. This creates $\\sqrt[n]{a^n} = a$ in the denominator.

The multiplier goes into both the numerator and the denominator, so the value of the fraction does not change; only its form does. What the multiplier has to produce is a perfect $n$th power under the radical in the denominator.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Rationalizing Binomial Denominators`,
    content: `When the denominator is a sum or difference involving a square root, multiply by the conjugate.

The conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$. Their product eliminates the radical:

@academic[formula_callout:Rationalizing Binomial Denominators
$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$$]@

This is the difference of squares pattern.

@academic[formula_callout:Rationalizing Binomial Denominators
$$\\frac{3}{2 + \\sqrt{5}} = \\frac{3}{2 + \\sqrt{5}} \\cdot \\frac{2 - \\sqrt{5}}{2 - \\sqrt{5}} = \\frac{3(2 - \\sqrt{5})}{4 - 5} = \\frac{3(2 - \\sqrt{5})}{-1}$$]@

@academic[formula_callout:Rationalizing Binomial Denominators
$$= -3(2 - \\sqrt{5}) = -6 + 3\\sqrt{5}$$]@

@academic[pitfall,aside:true,width:35%:Dropping the sign of a negative denominator
Removing the $-1$ denominator without changing signs gives $6 - 3\\sqrt{5} \\approx -0.71$. But $\\frac{3}{2 + \\sqrt{5}}$ is positive; the result is $-6 + 3\\sqrt{5} \\approx 0.71$.
[Read more](!#pitfalls)]@

Here the product of the conjugates is $4 - 5 = -1$. The radicand $5$ is larger than $a^2 = 4$, so $a^2 - b$ is negative, even though the original denominator $2 + \\sqrt{5}$ is positive. The last step clears that $-1$ from the denominator.

When both terms are radicals:

@academic[formula_callout:Rationalizing Binomial Denominators
$$\\frac{1}{\\sqrt{7} + \\sqrt{3}} = \\frac{\\sqrt{7} - \\sqrt{3}}{(\\sqrt{7})^2 - (\\sqrt{3})^2} = \\frac{\\sqrt{7} - \\sqrt{3}}{4}$$]@

Conjugates also appear in [operations with radicals](!/algebra/roots/operations) for simplifying products and in [radical equations](!/algebra/roots/equations) for isolating terms.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Rationalizing Higher-Index Denominators`,
    content: `Binomial denominators with cube roots or higher require different patterns.

For cube roots, use the sum or difference of cubes:

@academic[formula_callout:Rationalizing Higher-Index Denominators
$$(a + b)(a^2 - ab + b^2) = a^3 + b^3$$]@

@academic[formula_callout:Rationalizing Higher-Index Denominators
$$(a - b)(a^2 + ab + b^2) = a^3 - b^3$$]@

To rationalize $\\frac{1}{\\sqrt[3]{2} + 1}$, let $a = \\sqrt[3]{2}$ and $b = 1$:

@academic[formula_callout:Rationalizing Higher-Index Denominators
$$\\frac{1}{\\sqrt[3]{2} + 1} \\cdot \\frac{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}$$]@

The denominator becomes:

@academic[formula_callout:Rationalizing Higher-Index Denominators
$$(\\sqrt[3]{2})^3 + 1^3 = 2 + 1 = 3$$]@

The result:

@academic[formula_callout:Rationalizing Higher-Index Denominators
$$\\frac{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}{3}$$]@

@academic[fact,aside:true,width:35%:A reciprocal with no fraction left
When $a - b^n = 1$, the denominator disappears entirely. For $\\sqrt[3]{2} - 1$ the product is $2 - 1 = 1$, so $\\frac{1}{\\sqrt[3]{2} - 1} = \\sqrt[3]{4} + \\sqrt[3]{2} + 1 \\approx 3.85$, a plain sum of roots.]@

The same idea works for any index. The factorization $x^n - b^n = (x - b)(x^{n-1} + x^{n-2}b + \\cdots + b^{n-1})$ supplies a multiplier for a denominator $\\sqrt[n]{a} - b$: with $x = \\sqrt[n]{a}$, the product becomes the rational number $a - b^n$. The multiplier has $n$ terms, so the higher the index, the longer the numerator.

These patterns are algebraically intensive. Converting to [rational exponents](!/algebra/roots/rational-exponents) sometimes offers a cleaner path.

The table below collects every rationalization pattern covered above — monomial and binomial denominators, square roots and higher-index roots — with the multiplying factor that does the work and a representative example.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Reducing the Index`,
    content: `Sometimes the index of a radical can be reduced by finding common factors with the radicand's exponent.

@academic[formula_callout:Reducing the Index
$$\\sqrt[6]{x^4} = x^{4/6} = x^{2/3} = \\sqrt[3]{x^2}$$]@

The index dropped from 6 to 3 because 4 and 6 share a common factor of 2.

@academic[formula_callout:Reducing the Index
$$\\sqrt[4]{a^2} = a^{2/4} = a^{1/2} = \\sqrt{a}$$]@

For $a \\geq 0$, the fourth root of a square is just a square root.

Converting to [rational exponents](!/algebra/roots/rational-exponents) makes this process mechanical: write the exponent as a fraction, reduce it, convert back if desired.

@academic[formula_callout:Reducing the Index
$$\\sqrt[8]{y^6} = y^{6/8} = y^{3/4} = \\sqrt[4]{y^3}$$]@

This holds for $y \\geq 0$.

Index reduction is a form of simplification — smaller indices are generally preferred when mathematically equivalent.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Simplification Strategy`,
    content: `A systematic approach prevents missed simplifications.

First, factor the radicand completely — both numbers and variables. Identify all perfect power factors relative to the index.

Second, extract perfect powers using the product rule from [radical rules](!/algebra/roots/radical-rules).

Third, check for index reduction by examining whether the radicand's exponents share a common factor with the index.

Fourth, rationalize any denominators — monomial or binomial — to eliminate radicals from the bottom.

Fifth, verify the result meets all three criteria: no perfect power factors, no fractions under radicals, no radicals in denominators.

This process prepares expressions for [operations](!/algebra/roots/operations) and for solving [radical equations](!/algebra/roots/equations). Two expressions that appear different may simplify to the same form, revealing them as equal.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Simplification Techniques at a Glance`,
    content: `Simplifying a radical means choosing the right technique for what the expression currently looks like. The table below collects every technique covered above as a lookup card: the condition that triggers it, the procedure to follow, and a worked example. Use it when a radical doesn't fit a familiar mold — find the row that matches its shape, then apply the procedure.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Common Pitfalls`,
    content: `Four mistakes come up again and again when simplifying radicals. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Splitting a sum under the radical**

The radicand is broken into a sum instead of a product, and the radical is then applied to each part separately, as if the product rule also covered addition.

Wrong working:
$$\\sqrt{72} = \\sqrt{64 + 8} = \\sqrt{64} + \\sqrt{8} = 8 + 2\\sqrt{2}$$

Right working: write $72$ as a product that contains a perfect square factor.
$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$$

Why it happens: the product rule $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$ seems to invite an addition version, and $64$ is the largest perfect square that fits inside $72$.

How to check: compare decimals. $8 + 2\\sqrt{2} \\approx 10.83$, while $\\sqrt{72} \\approx 8.49$ and $6\\sqrt{2} \\approx 8.49$. A small test case shows the rule at once: $\\sqrt{9 + 16} = \\sqrt{25} = 5$, not $3 + 4 = 7$.

**Taking out the square instead of its root**

The perfect square factor is found correctly, but it is moved outside the radical as it is, without taking its square root.

Wrong working:
$$\\sqrt{50x^5} = \\sqrt{25x^4 \\cdot 2x} = 25x^4\\sqrt{2x}$$

Right working: the part that leaves the radical is the square root of the perfect square factor.
$$\\sqrt{50x^5} = \\sqrt{25x^4} \\cdot \\sqrt{2x} = 5x^2\\sqrt{2x}$$

Why it happens: after the factoring step, attention moves to what stays inside, and the factor that leaves is copied across instead of being rooted.

How to check: square the outside factor and multiply it back in. $(5x^2)^2 \\cdot 2x = 25x^4 \\cdot 2x = 50x^5$, the original radicand, while $(25x^4)^2 \\cdot 2x = 1250x^9$.

**Multiplying by the same cube root**

The square-root method, multiplying by the radical over itself, is used for a cube root. The new denominator is the cube root of a square, which is still irrational.

Wrong working:
$$\\frac{2}{\\sqrt[3]{5}} \\cdot \\frac{\\sqrt[3]{5}}{\\sqrt[3]{5}} = \\frac{2\\sqrt[3]{5}}{\\sqrt[3]{25}}$$

Right working: the denominator needs $5^3$ under the cube root, so two more factors of $5$ are needed, and the multiplier is $\\sqrt[3]{25}$.
$$\\frac{2}{\\sqrt[3]{5}} \\cdot \\frac{\\sqrt[3]{25}}{\\sqrt[3]{25}} = \\frac{2\\sqrt[3]{25}}{\\sqrt[3]{125}} = \\frac{2\\sqrt[3]{25}}{5}$$

Why it happens: for square roots, multiplying a radical by itself always clears it, and that habit is carried over to every index.

How to check: look at the radicand left in the denominator. It must be a perfect power for the index: $25$ is not a perfect cube, while $125 = 5^3$ is.

**Dropping the sign of a negative denominator**

Multiplying by the conjugate gives the denominator $a^2 - b$, which is negative when $b$ is larger than $a^2$. The $-1$ is then removed from the denominator without changing the signs in the numerator.

Wrong working:
$$\\frac{3}{2 + \\sqrt{5}} = \\frac{3(2 - \\sqrt{5})}{4 - 5} = 3(2 - \\sqrt{5}) = 6 - 3\\sqrt{5}$$

Right working: dividing by $-1$ changes the sign of the whole numerator.
$$\\frac{3(2 - \\sqrt{5})}{-1} = -3(2 - \\sqrt{5}) = -6 + 3\\sqrt{5}$$

Why it happens: a product of conjugates is expected to come out positive, and a denominator of $-1$ looks as if it can simply be left out.

How to check: estimate the sign. $\\frac{3}{2 + \\sqrt{5}}$ is a positive number divided by a positive number, about $0.71$. The wrong answer $6 - 3\\sqrt{5} \\approx -0.71$ has the opposite sign; $-6 + 3\\sqrt{5} \\approx 0.71$ matches.`,
    before: ``,
    after: ``,
    link: '',
  },

}

 const introContent = {
  id: "intro",
  title: "Reducing to Simplest Form",
  content: `A radical in simplest form has no perfect powers hiding under the radical sign, no fractions beneath it, and no radicals in any denominator. Achieving this form requires factoring, applying radical rules, and sometimes rationalizing.

Simplification is not cosmetic. Simpler forms reveal structure, enable comparison, and prepare expressions for further operations. Two radicals that look different may be identical once simplified.`
}



const faqQuestions = {
  obj1: {
    question: "Why do you have to rationalize the denominator at all?",
    answer: "It is a convention for canonical form, not a mathematical necessity: $\\frac{5}{\\sqrt{3}}$ and $\\frac{5\\sqrt{3}}{3}$ are the same number. The habit began when division was done by hand, where dividing by $1.732$ is far more work than multiplying by it. It survives because one agreed form makes two expressions easy to compare and answers easy to match.",
    sectionId: "5"
  },
  obj2: {
    question: "Does it matter which perfect square factor you pull out first?",
    answer: "Not for correctness, only for effort. $\\sqrt{72} = \\sqrt{4 \\cdot 18} = 2\\sqrt{18}$ is a valid step, but $18$ still contains a perfect square, so the work is unfinished; carry on and you reach $6\\sqrt{2}$. Taking the largest perfect square factor, $36$, gets there in one move. Both routes end at the same simplest form.",
    sectionId: "2"
  },
  obj3: {
    question: "Why do textbooks say to assume all variables are positive?",
    answer: "To avoid absolute value bars. With an even index the honest answer carries them, since $\\sqrt{a^2}$ is $|a|$ rather than $a$, and they accumulate quickly across a long expression. Declaring every variable positive removes the sign question so the bars can be dropped. It is a stated assumption, not a fact, so check that your problem grants it.",
    sectionId: "3"
  },
  obj4: {
    question: "Why doesn't the conjugate work for a cube root denominator?",
    answer: "Because the conjugate relies on the difference of squares, which only clears square roots. Multiplying $\\sqrt[3]{2} + 1$ by $\\sqrt[3]{2} - 1$ leaves $\\sqrt[3]{4} - 1$, still irrational. Cube roots need the sum or difference of cubes instead, so the multiplier for $\\sqrt[3]{2} + 1$ is $\\sqrt[3]{4} - \\sqrt[3]{2} + 1$, which yields $2 + 1 = 3$.",
    sectionId: "7"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Simplifying Radicals",
    "description": "Learn to simplify radicals: factor perfect powers, simplify with variables, rationalize monomial and binomial denominators, reduce indices, and achieve simplest form.",
    "url": "https://www.learnmathclass.com/algebra/roots/simplifying",
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
      "name": "Simplifying Radicals"
    },
    "teaches": [
      "Criteria for simplest radical form",
      "Factoring out perfect powers",
      "Simplifying radicals with variables",
      "Rationalizing monomial denominators",
      "Rationalizing binomial denominators using conjugates",
      "Rationalizing higher-index denominators",
      "Reducing radical indices",
      "Systematic simplification strategy"
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
        "name": "Simplifying Radicals",
        "item": "https://www.learnmathclass.com/algebra/roots/simplifying"
      }
    ]
  }
}




  const demoUnits = {
    conjugateArea: demoUnitFrame({
      svg: identityDiagrams['dos-4'],
      caption: 'Why a conjugate clears the radical',
      text: 'The product of conjugates is a difference of squares: an a &#215; a square with a b &#215; b corner removed rearranges into one rectangle of sides a + b and a &#8722; b. With the section&#8217;s a = &#8730;7 and b = &#8730;3 the two squares have areas 7 and 3, so (&#8730;7 + &#8730;3)(&#8730;7 &#8722; &#8730;3) = 7 &#8722; 3 = 4. Only the squares survive, and squares of square roots are rational. Step through the rearrangement on the',
      href: '/algebra/visual-tools/identities/difference-of-squares',
      linkText: 'difference of squares explorer',
    }),
  };

  // BeforeAfter (obj5): the section's square-root example, radical denominator vs rational denominator
  const rationalizeMonomial = {
    header: {
      kicker: 'Simplest form',
      title: 'Rationalizing a monomial denominator',
      lede: 'A radical in the denominator violates simplest form. One multiplication removes it without changing the value.',
    },
    before: {
      form: 'Radical in the denominator',
      expr: '$\\dfrac{5}{\\sqrt{3}}$',
      meta: 'Not in simplest form',
    },
    after: {
      form: 'Rational denominator',
      expr: '$\\dfrac{5\\sqrt{3}}{3}$',
      meta: 'Simplest form: the denominator is the rational number $3$',
    },
    operation: {
      name: 'Rationalize',
      desc: 'Multiply by $\\dfrac{\\sqrt{3}}{\\sqrt{3}}$',
      detailsLabel: 'Cube roots',
      detailsTitle: 'Higher roots need a perfect power',
      details: [
        'For a cube root, the multiplier must turn the denominator into a perfect cube:',
        '$$\\frac{2}{\\sqrt[3]{5}} \\cdot \\frac{\\sqrt[3]{25}}{\\sqrt[3]{25}} = \\frac{2\\sqrt[3]{25}}{\\sqrt[3]{125}} = \\frac{2\\sqrt[3]{25}}{5}$$',
      ],
    },
    notes: [
      { id: 'changed', badge: 'What changed',
        body: 'The denominator: √3 · √3 = √9 = 3, a rational number.' },
      { id: 'stayed', badge: 'What stayed', tone: 'warm',
        body: 'The value: the multiplier goes into both the numerator and the denominator, so only the form changes.' },
    ],
  };

  // BeforeAfter (obj6): the section's binomial example, rationalized by the conjugate
  const rationalizeBinomialSteps = {
    header: {
      kicker: 'Simplest form',
      title: 'Rationalizing with the conjugate',
      lede: 'Multiplying by the conjugate makes a difference of squares below the bar, and the radical leaves the denominator.',
    },
    steps: [
      { id: 'binomial', label: 'Binomial denominator', stamp: 'Before', expr: '$\\dfrac{3}{2 + \\sqrt{5}}$',
        move: { label: 'Multiply by the conjugate', note: '(2 + √5)(2 − √5) = 4 − 5 = −1' } },
      { id: 'minusone', label: 'Denominator is −1', expr: '$\\dfrac{3(2 - \\sqrt{5})}{-1}$',
        move: { label: 'Clear the −1', note: 'every sign flips: −3(2 − √5)' } },
      { id: 'rational', label: 'Rational denominator', stamp: 'After', expr: '$-6 + 3\\sqrt{5}$',
        detailsLabel: 'Check the sign',
        detailsTitle: '',
        details: 'The original fraction is positive, and $-6 + 3\\sqrt{5} \\approx 0.71$ is positive too. Dropping the $-1$ without changing signs would give $6 - 3\\sqrt{5} \\approx -0.71$.' },
    ],
  };

  // BeforeAfter (obj8): the section's first example, index 6 reduced to index 3 through exponent form
  const reduceIndexSteps = {
    header: {
      kicker: 'Simplest form',
      title: 'Reducing the index',
      lede: 'Converting to a rational exponent makes the reduction mechanical: write the exponent as a fraction, reduce it, convert back.',
    },
    steps: [
      { id: 'index6', label: 'Radical, index 6', stamp: 'Before', expr: '$\\sqrt[6]{x^4}$',
        move: { label: 'Write as a rational exponent', note: 'the index becomes the denominator' } },
      { id: 'exp46', label: 'Exponent form', expr: '$x^{4/6}$',
        move: { label: 'Reduce the fraction', note: '4 and 6 share a common factor of 2' } },
      { id: 'exp23', label: 'Reduced exponent', expr: '$x^{2/3}$',
        move: { label: 'Convert back', note: 'the denominator 3 is the new index' } },
      { id: 'index3', label: 'Radical, index 3', stamp: 'After', expr: '$\\sqrt[3]{x^2}$' },
    ],
  };

return {
  props: {
    rationalizeMonomial,
    rationalizeBinomialSteps,
    reduceIndexSteps,
    sectionsContent,
    introContent,
    obj1Table,
    obj2Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    seoData: {
      title: "Simplifying Radicals: Rationalize & Reduce | Learn Math Class",
      description: "Learn to simplify radicals: factor perfect powers, simplify with variables, rationalize monomial and binomial denominators, reduce indices, and achieve simplest form.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/simplifying",
      name: "Simplifying Radicals"
    },
  }
}
   }

// export default function SimplifyingPage({seoData,sectionsContent , introContent}) {
export default function SimplifyingPage({
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj2Table,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas,
  demoUnits,
  rationalizeMonomial,
  rationalizeBinomialSteps,
  reduceIndexSteps,
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
          <div key={'obj1-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj1Table }} />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'obj2-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj2Table }} />,
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
          <DiagramFrame
            key={'obj5-diagram'}
            id="rationalize-monomial-before-after"
            title="Rationalizing 5 over the square root of 3"
            source="/algebra/roots/simplifying"
            before={"The square-root example of this section as two forms of one number. Compare the denominators."}
            after={"The same move works for any index: the multiplier must make a perfect power under the radical in the denominator. With two terms in the denominator, the next section multiplies by the conjugate instead."}
          >
            <BeforeAfter
              data={rationalizeMonomial}
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-conjugateArea'} dangerouslySetInnerHTML={{ __html: demoUnits.conjugateArea }} />,
          `Multiplying by a + √b instead would add a cross term 2a√b and keep the radical.`,
          <DiagramFrame
            key={'obj6-diagram'}
            id="rationalize-binomial-steps"
            title="Rationalizing 3 over 2 plus the square root of 5"
            source="/algebra/roots/simplifying"
            before={"The section's example, one move at a time. Watch the denominator: it turns into $-1$ before it disappears."}
            after={"The $-1$ appears because the radicand $5$ is larger than $a^2 = 4$. Whenever that happens the last move flips every sign, and a quick estimate confirms the result is still positive."}
          >
            <BeforeAfter
              data={rationalizeBinomialSteps}
              variant="progression"
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
          `@academic[punchline:Multiplying by the conjugate makes a difference of squares, and squaring is what removes a square root.]@`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'obj7-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj7Table }} />,
          `@academic[punchline:Each index needs its own identity: squares clear square roots, cubes clear cube roots, $n$th powers clear $n$th roots.]@`,
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
            id="reduce-index-steps"
            title="Reducing the index of ⁶√(x⁴)"
            source="/algebra/roots/simplifying"
            before={"The section's first example, one move at a time. The detour through exponent form is what makes the reduction mechanical."}
            after={"The index dropped from $6$ to $3$ because $4$ and $6$ share a common factor of $2$. The same three moves turn $\\sqrt[4]{a^2}$ into $\\sqrt{a}$ and $\\sqrt[8]{y^6}$ into $\\sqrt[4]{y^3}$."}
          >
            <BeforeAfter
              data={reduceIndexSteps}
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
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
        title:`Simplifying Radicals FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Simplifying Roots</h1>
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