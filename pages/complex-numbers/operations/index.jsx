import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){

 const keyWords = [
  "complex number operations",
  "add complex numbers",
  "subtract complex numbers",
  "multiply complex numbers",
  "divide complex numbers",
  "complex number addition",
  "complex number multiplication",
  "complex number division",
  "FOIL method complex numbers",
  "complex conjugate division",
  "multiplicative inverse complex number",
  "i squared equals negative one",
  "complex arithmetic",
  "complex number calculator",
  "how to divide complex numbers"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj3 — process: multiplication step-by-step
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Worked example: (2 + 3i)(4 − i)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Expand using distributivity (FOIL)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8 − 2i + 12i − 3i²</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Substitute i² = −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8 − 2i + 12i + 3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; color: #34495e;">Combine real and imaginary terms</td>
      <td style="padding: 12px 15px; color: #34495e;">11 + 10i</td>
    </tr>
  </tbody>
</table>
`

  // obj4 — process: division step-by-step
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Worked example: (3 + 2i) / (1 − 4i)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Identify the conjugate of the denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 + 4i</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Multiply numerator and denominator by that conjugate</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 + 2i)(1 + 4i) / [(1 − 4i)(1 + 4i)]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Simplify the denominator using z · z̄ = |z|²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 + 2i)(1 + 4i) / 17</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Expand and simplify the numerator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−5 + 14i) / 17</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">Write in standard form a + bi</td>
      <td style="padding: 12px 15px; color: #34495e;">−5⁄17 + (14⁄17)i</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation: common pitfalls (pitfall × wrong × correct × why)
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Pitfall</th>
      <th style="${tableHeaders.aggregation}">Wrong</th>
      <th style="${tableHeaders.aggregation}">Correct</th>
      <th style="${tableHeaders.aggregation}">Why</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting i² = −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2i)(3i) = 6i² = 6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2i)(3i) = 6i² = −6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every i² must be replaced with −1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign error in subtraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(5 + 3i) − (2 − 4i) = 3 − i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(5 + 3i) − (2 − 4i) = 3 + 7i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distribute the minus across both real and imaginary parts</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Leaving a complex denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 + 2i) ⁄ (1 + i) as final answer</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply by conjugate → 5⁄2 − (1⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard form a + bi requires a real denominator</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing conjugate with negative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate of 3 + 2i is −3 − 2i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate of 3 + 2i is 3 − 2i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugation flips the imaginary sign only; negation flips both</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Dividing by zero</td>
      <td style="padding: 12px 15px; color: #34495e;">z ⁄ 0 treated as some value</td>
      <td style="padding: 12px 15px; color: #34495e;">z ⁄ 0 is undefined</td>
      <td style="padding: 12px 15px; color: #34495e;">0 has no multiplicative inverse in ℂ (or ℝ)</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: four operations side by side
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation</th>
      <th style="${tableHeaders.summary}">General formula</th>
      <th style="${tableHeaders.summary}">Key technique</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + bi) + (c + di) = (a + c) + (b + d)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine like terms component-wise</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 + 2i) + (1 − 5i) = 4 − 3i</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Subtraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + bi) − (c + di) = (a − c) + (b − d)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distribute the minus, then combine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(7 + 4i) − (2 + 6i) = 5 − 2i</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplication</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + bi)(c + di) = (ac − bd) + (ad + bc)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">FOIL, then apply i² = −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2 + 3i)(4 − i) = 11 + 10i</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Division</td>
      <td style="padding: 12px 15px; color: #34495e;">(a + bi) ⁄ (c + di) = [(a + bi)(c − di)] ⁄ (c² + d²)</td>
      <td style="padding: 12px 15px; color: #34495e;">multiply num and denom by conjugate of denom</td>
      <td style="padding: 12px 15px; color: #34495e;">(3 + 2i) ⁄ (1 − 4i) = −5⁄17 + (14⁄17)i</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose unchanged; obj8 added) ----------

//     const sectionsContent={
// obj0: {
//   title: `Key Terms`,
//   content: `
// - [Complex Number](!/complex-numbers/definitions#complex_number) — the objects being operated on
// - [Algebraic Form](!/complex-numbers/definitions#algebraic_form) — the form used for addition and subtraction
// - [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — essential for division
// - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — the reciprocal enabling division`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },

//     obj1: {
//   title: `Addition of Complex Numbers`,
//   before: ``,
//   content: `Adding complex numbers works exactly as intuition suggests: combine like terms. Real parts add to real parts, imaginary parts add to imaginary parts, and the two sums form the new complex number.

// The formula states the rule precisely. For $z_1 = a + bi$ and $z_2 = c + di$:

// $$(a + bi) + (c + di) = (a + c) + (b + d)i$$

// The operation treats the real and imaginary components independently. No interaction occurs between them during addition — the real sum $a + c$ ignores the imaginary values, and the imaginary sum $b + d$ ignores the real values.

// Example: Add $3 + 2i$ and $1 - 5i$.

// $$(3 + 2i) + (1 - 5i) = (3 + 1) + (2 + (-5))i = 4 + (-3)i = 4 - 3i$$

// The real parts $3$ and $1$ sum to $4$. The imaginary parts $2$ and $-5$ sum to $-3$. The result is $4 - 3i$.

// On the [complex plane](!/complex-numbers/geometric-representation), addition corresponds to vector addition. Place the two complex numbers as arrows from the origin. Position the second arrow so its tail sits at the head of the first. The sum extends from the origin to the final head — the familiar parallelogram or tip-to-tail rule from physics and geometry. This geometric interpretation makes addition visual and connects complex arithmetic to vector mechanics.

// Addition is both commutative ($z_1 + z_2 = z_2 + z_1$) and associative ($(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$). Order and grouping do not affect the result.`,
//   after: ``,
//   link: '',
// },
   

//     obj2: {
//   title: `Subtraction of Complex Numbers`,
//   before: ``,
//   content: `Subtraction mirrors addition with signs reversed. Subtract real parts separately, subtract imaginary parts separately, and combine the differences into the result.

// The formula: for $z_1 = a + bi$ and $z_2 = c + di$:

// $$(a + bi) - (c + di) = (a - c) + (b - d)i$$

// Each component undergoes its own subtraction independently.

// Example: Compute $(7 + 4i) - (2 + 6i)$.

// $$(7 + 4i) - (2 + 6i) = (7 - 2) + (4 - 6)i = 5 + (-2)i = 5 - 2i$$

// The real parts $7 - 2 = 5$. The imaginary parts $4 - 6 = -2$. The result is $5 - 2i$.

// A common error occurs when the second number has a negative imaginary part. Consider $(5 + 3i) - (2 - 4i)$. The subtraction must distribute across both terms:

// $$(5 + 3i) - (2 - 4i) = 5 + 3i - 2 + 4i = 3 + 7i$$

// Forgetting to negate the $-4i$ term — leaving it as $-4i$ instead of $+4i$ — produces the wrong answer $3 - i$. Always distribute the negative sign before combining terms.

// Geometrically, $z_1 - z_2$ represents the vector from $z_2$ to $z_1$. Its [modulus](!/complex-numbers/absolute-value) $|z_1 - z_2|$ gives the distance between the two points in the complex plane. Subtraction answers the question: how far and in what direction must one travel from $z_2$ to reach $z_1$?`,
//   after: ``,
//   link: '',
// },
  
  

//     obj3: {
//   title: `Multiplication of Complex Numbers`,
//   before: ``,
//   content: `Multiplication requires more care than addition. The distributive property expands the product into four terms, and the identity $i^2 = -1$ collapses one of those terms into the real part.

// For $z_1 = a + bi$ and $z_2 = c + di$, expand using distribution (the FOIL method):

// $$(a + bi)(c + di) = ac + adi + bci + bdi^2$$

// The term $bdi^2$ contains $i^2 = -1$, so $bdi^2 = -bd$. Collecting real and imaginary parts:

// $$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

// The real part of the product is $ac - bd$. The imaginary part is $ad + bc$. Both involve contributions from all four original values.

// Step-by-step example: Compute $(2 + 3i)(4 - i)$.

// Expand: $2 \\cdot 4 + 2 \\cdot (-i) + 3i \\cdot 4 + 3i \\cdot (-i) = 8 - 2i + 12i - 3i^2$

// Substitute $i^2 = -1$: $= 8 - 2i + 12i - 3(-1) = 8 - 2i + 12i + 3$

// Combine: $= (8 + 3) + (-2 + 12)i = 11 + 10i$

// Multiplying by a pure real number scales both components proportionally. The product $3(2 + 5i) = 6 + 15i$ stretches the number by factor $3$ without rotating it. Multiplying by $i$ rotates $90°$ counterclockwise: $i(2 + 5i) = 2i + 5i^2 = -5 + 2i$. The [trigonometric form](!/complex-numbers/trigonometric-form) reveals multiplication's full geometric meaning — moduli multiply, arguments add.`,
//   after: ``,
//   link: '',
// },
   

//     obj4: {
//   title: `Division of Complex Numbers`,
//   before: ``,
//   content: `Division presents a challenge absent in the other operations: a complex denominator violates the standard [algebraic form](!/complex-numbers/algebraic-form) $a + bi$. The solution employs the [conjugate](!/complex-numbers/complex-conjugate) to convert the denominator to a real number.

// The technique: multiply both numerator and denominator by the conjugate of the denominator. For $z_1 = a + bi$ and $z_2 = c + di$ with $z_2 \\neq 0$:

// $$\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{(a + bi)(c - di)}{c^2 + d^2}$$

// The denominator becomes $c^2 + d^2$, a real number, because $z \\cdot \\bar{z} = |z|^2$ for any complex $z$. The numerator requires standard complex multiplication. Once the denominator is real, divide each component of the numerator by it.

// Step-by-step example: Compute $\\frac{3 + 2i}{1 - 4i}$.

// Identify the conjugate of the denominator: $\\overline{1 - 4i} = 1 + 4i$.

// Multiply numerator and denominator:

// $$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$

// Compute the denominator: $(1 - 4i)(1 + 4i) = 1 - 16i^2 = 1 + 16 = 17$.

// Compute the numerator: $(3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$.

// Divide: $\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$.

// The result sits in standard form with real denominator eliminated.`,
//   after: ``,
//   link: '',
// },
  
//     obj5: {
//   title: `Properties of Complex Arithmetic`,
//   before: ``,
//   content: `Complex arithmetic inherits the structural properties that govern real number operations. These properties ensure that algebraic manipulation proceeds predictably, following rules familiar from elementary mathematics.

// **Commutativity** holds for both addition and multiplication:

// $$z_1 + z_2 = z_2 + z_1 \\qquad z_1 \\cdot z_2 = z_2 \\cdot z_1$$

// Order does not matter. Adding $3 + 2i$ to $1 - 5i$ yields the same result as adding $1 - 5i$ to $3 + 2i$. The same holds for products.

// **Associativity** allows regrouping without changing results:

// $$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3) \\qquad (z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$$

// When adding or multiplying three or more complex numbers, parentheses may be placed anywhere.

// **Distributivity** connects addition and multiplication:

// $$z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$$

// Multiplication distributes over sums, enabling expansion of products and factoring of expressions.

// **Identity elements** exist for both operations. The additive identity is $0 = 0 + 0i$, satisfying $z + 0 = z$ for every $z$. The multiplicative identity is $1 = 1 + 0i$, satisfying $z \\cdot 1 = z$ for every $z$.

// **Inverse elements** also exist. Every complex number $z$ has an additive inverse $-z$ with $z + (-z) = 0$. Every nonzero complex number has a multiplicative inverse $z^{-1}$ with $z \\cdot z^{-1} = 1$. These properties make $\\mathbb{C}$ a mathematical field.`,
//   after: ``,
//   link: '',
// },
   

//     obj6: {
//   title: `The Multiplicative Inverse`,
//   before: ``,
//   content: `Every nonzero complex number possesses a multiplicative inverse — a number that multiplies with it to produce $1$. Finding this inverse employs the same conjugate technique used for division.

// For $z = a + bi \\neq 0$, the multiplicative inverse is:

// $$z^{-1} = \\frac{1}{z} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$

// The formula multiplies $1/z$ by $\\bar{z}/\\bar{z}$, converting the denominator to the real value $|z|^2 = a^2 + b^2$. The result expresses $z^{-1}$ in standard algebraic form.

// Example: Find the multiplicative inverse of $3 + 4i$.

// Compute the modulus squared: $|3 + 4i|^2 = 9 + 16 = 25$.

// Find the conjugate: $\\overline{3 + 4i} = 3 - 4i$.

// Apply the formula: $(3 + 4i)^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$.

// Verification: $(3 + 4i) \\cdot \\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = \\frac{25}{25} = 1$.

// The inverse exists precisely when $|z|^2 \\neq 0$, which occurs exactly when $z \\neq 0$. Division by zero remains undefined in $\\mathbb{C}$ as in $\\mathbb{R}$ — the number $0$ has no multiplicative inverse.

// Geometrically, $z^{-1}$ lies on the same ray from the origin as $\\bar{z}$, but at distance $1/|z|$ rather than $|z|$. Inversion reflects across the real axis and rescales the [modulus](!/complex-numbers/absolute-value) to its reciprocal.`,
//   after: ``,
//   link: '',
// },
   

//     obj7: {
//   title: `Common Pitfalls and Tips`,
//   before: ``,
//   content: `Complex arithmetic follows clear rules, but several common errors trap students repeatedly. Recognizing these pitfalls prevents mistakes and builds computational confidence.

// **Forgetting $i^2 = -1$:** The most frequent error in multiplication. After expanding $(a + bi)(c + di)$, the term $bdi^2$ must become $-bd$, not $+bd$. Every $i^2$ in any calculation converts to $-1$ without exception.

// **Sign errors in subtraction:** When subtracting $(c + di)$, both the real part $c$ and the imaginary part $di$ must be negated. The expression $(5 + 3i) - (2 - 4i)$ becomes $5 + 3i - 2 + 4i$, not $5 + 3i - 2 - 4i$. Distribute the negative sign completely before combining terms.

// **Leaving complex denominators:** Final answers in [algebraic form](!/complex-numbers/algebraic-form) require real denominators. A result like $\\frac{3 + 2i}{1 + i}$ is incomplete. Multiply by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator to obtain proper form: $\\frac{(3 + 2i)(1 - i)}{(1 + i)(1 - i)} = \\frac{5 - i}{2} = \\frac{5}{2} - \\frac{1}{2}i$.

// **Division by zero:** The expression $z/0$ is undefined for any $z$. No multiplicative inverse of $0$ exists, and division by zero produces no meaningful result. Always verify denominators are nonzero before dividing.

// **Confusing conjugate and negative:** The conjugate of $3 + 2i$ is $3 - 2i$, not $-3 - 2i$. Conjugation flips only the imaginary sign; negation flips both. These operations differ and serve different purposes.

// **Tips for accuracy:** Work step by step, writing each intermediate result. Check products by verifying that the [modulus](!/complex-numbers/absolute-value) of the product equals the product of moduli: $|z_1 z_2| = |z_1||z_2|$. For division, verify that multiplying the quotient by the divisor recovers the dividend.`,
//   after: ``,
//   link: '',
// },
//     obj8:{
//       title:`Summary: The Four Operations Side by Side`,
//       content:`The four operations on complex numbers share a common pattern — combine like terms for addition and subtraction, expand and apply $i^2 = -1$ for multiplication, and convert to real-denominator form via the [conjugate](!/complex-numbers/complex-conjugate) for division. The table below collects each operation's general formula, the key technique that makes it work, and a worked example side by side for quick reference.`,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
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



// formulas-optimized: v1 | 2026-06-11 | 4 callouts (obj1, obj2, obj3, obj4)
const sectionsContent={
obj0: {
  title: `Key Terms`,
  content: `
- [Complex Number](!/complex-numbers/definitions#complex_number) — the objects being operated on
- [Algebraic Form](!/complex-numbers/definitions#algebraic_form) — the form used for addition and subtraction
- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — essential for division
- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — the reciprocal enabling division`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
  link: '',
},

    obj1: {
  title: `Addition of Complex Numbers`,
  before: ``,
  content: `Adding complex numbers works exactly as intuition suggests: combine like terms. Real parts add to real parts, imaginary parts add to imaginary parts, and the two sums form the new complex number.

The formula states the rule precisely. For $z_1 = a + bi$ and $z_2 = c + di$:

@academic[formula_callout:Addition
$$(a + bi) + (c + di) = (a + c) + (b + d)i$$
/complex-numbers/formulas#addition]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The operation treats the real and imaginary components independently. No interaction occurs between them during addition — the real sum $a + c$ ignores the imaginary values, and the imaginary sum $b + d$ ignores the real values.

Example: Add $3 + 2i$ and $1 - 5i$.

$$(3 + 2i) + (1 - 5i) = (3 + 1) + (2 + (-5))i = 4 + (-3)i = 4 - 3i$$

The real parts $3$ and $1$ sum to $4$. The imaginary parts $2$ and $-5$ sum to $-3$. The result is $4 - 3i$.

On the [complex plane](!/complex-numbers/geometric-representation), addition corresponds to vector addition. Place the two complex numbers as arrows from the origin. Position the second arrow so its tail sits at the head of the first. The sum extends from the origin to the final head — the familiar parallelogram or tip-to-tail rule from physics and geometry. This geometric interpretation makes addition visual and connects complex arithmetic to vector mechanics.

Addition is both commutative ($z_1 + z_2 = z_2 + z_1$) and associative ($(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$). Order and grouping do not affect the result.`,
  after: ``,
  link: '',
},
   

    obj2: {
  title: `Subtraction of Complex Numbers`,
  before: ``,
  content: `Subtraction mirrors addition with signs reversed. Subtract real parts separately, subtract imaginary parts separately, and combine the differences into the result.

The formula: for $z_1 = a + bi$ and $z_2 = c + di$:

@academic[formula_callout:Subtraction
$$(a + bi) - (c + di) = (a - c) + (b - d)i$$
/complex-numbers/formulas#subtraction]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Each component undergoes its own subtraction independently.

Example: Compute $(7 + 4i) - (2 + 6i)$.

$$(7 + 4i) - (2 + 6i) = (7 - 2) + (4 - 6)i = 5 + (-2)i = 5 - 2i$$

The real parts $7 - 2 = 5$. The imaginary parts $4 - 6 = -2$. The result is $5 - 2i$.

A common error occurs when the second number has a negative imaginary part. Consider $(5 + 3i) - (2 - 4i)$. The subtraction must distribute across both terms:

$$(5 + 3i) - (2 - 4i) = 5 + 3i - 2 + 4i = 3 + 7i$$

Forgetting to negate the $-4i$ term — leaving it as $-4i$ instead of $+4i$ — produces the wrong answer $3 - i$. Always distribute the negative sign before combining terms.

Geometrically, $z_1 - z_2$ represents the vector from $z_2$ to $z_1$. Its [modulus](!/complex-numbers/absolute-value) $|z_1 - z_2|$ gives the distance between the two points in the complex plane. Subtraction answers the question: how far and in what direction must one travel from $z_2$ to reach $z_1$?`,
  after: ``,
  link: '',
},
  
  

    obj3: {
  title: `Multiplication of Complex Numbers`,
  before: ``,
  content: `Multiplication requires more care than addition. The distributive property expands the product into four terms, and the identity $i^2 = -1$ collapses one of those terms into the real part.

For $z_1 = a + bi$ and $z_2 = c + di$, expand using distribution (the FOIL method):

$$(a + bi)(c + di) = ac + adi + bci + bdi^2$$

The term $bdi^2$ contains $i^2 = -1$, so $bdi^2 = -bd$. Collecting real and imaginary parts:

@academic[formula_callout:Multiplication
$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$
/complex-numbers/formulas#multiplication]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The real part of the product is $ac - bd$. The imaginary part is $ad + bc$. Both involve contributions from all four original values.

Step-by-step example: Compute $(2 + 3i)(4 - i)$.

Expand: $2 \\cdot 4 + 2 \\cdot (-i) + 3i \\cdot 4 + 3i \\cdot (-i) = 8 - 2i + 12i - 3i^2$

Substitute $i^2 = -1$: $= 8 - 2i + 12i - 3(-1) = 8 - 2i + 12i + 3$

Combine: $= (8 + 3) + (-2 + 12)i = 11 + 10i$

Multiplying by a pure real number scales both components proportionally. The product $3(2 + 5i) = 6 + 15i$ stretches the number by factor $3$ without rotating it. Multiplying by $i$ rotates $90°$ counterclockwise: $i(2 + 5i) = 2i + 5i^2 = -5 + 2i$. The [trigonometric form](!/complex-numbers/trigonometric-form) reveals multiplication's full geometric meaning — moduli multiply, arguments add.`,
  after: ``,
  link: '',
},
   

    obj4: {
  title: `Division of Complex Numbers`,
  before: ``,
  content: `Division presents a challenge absent in the other operations: a complex denominator violates the standard [algebraic form](!/complex-numbers/algebraic-form) $a + bi$. The solution employs the [conjugate](!/complex-numbers/complex-conjugate) to convert the denominator to a real number.

The technique: multiply both numerator and denominator by the conjugate of the denominator. For $z_1 = a + bi$ and $z_2 = c + di$ with $z_2 \\neq 0$:

@academic[formula_callout:Division
$$\\frac{a + bi}{c + di} = \\frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$$
/complex-numbers/formulas#division]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The denominator becomes $c^2 + d^2$, a real number, because $z \\cdot \\bar{z} = |z|^2$ for any complex $z$. The numerator requires standard complex multiplication. Once the denominator is real, divide each component of the numerator by it.

Step-by-step example: Compute $\\frac{3 + 2i}{1 - 4i}$.

Identify the conjugate of the denominator: $\\overline{1 - 4i} = 1 + 4i$.

Multiply numerator and denominator:

$$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$

Compute the denominator: $(1 - 4i)(1 + 4i) = 1 - 16i^2 = 1 + 16 = 17$.

Compute the numerator: $(3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$.

Divide: $\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$.

The result sits in standard form with real denominator eliminated.`,
  after: ``,
  link: '',
},
  
    obj5: {
  title: `Properties of Complex Arithmetic`,
  before: ``,
  content: `Complex arithmetic inherits the structural properties that govern real number operations. These properties ensure that algebraic manipulation proceeds predictably, following rules familiar from elementary mathematics.

**Commutativity** holds for both addition and multiplication:

$$z_1 + z_2 = z_2 + z_1 \\qquad z_1 \\cdot z_2 = z_2 \\cdot z_1$$

Order does not matter. Adding $3 + 2i$ to $1 - 5i$ yields the same result as adding $1 - 5i$ to $3 + 2i$. The same holds for products.

**Associativity** allows regrouping without changing results:

$$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3) \\qquad (z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$$

When adding or multiplying three or more complex numbers, parentheses may be placed anywhere.

**Distributivity** connects addition and multiplication:

$$z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$$

Multiplication distributes over sums, enabling expansion of products and factoring of expressions.

**Identity elements** exist for both operations. The additive identity is $0 = 0 + 0i$, satisfying $z + 0 = z$ for every $z$. The multiplicative identity is $1 = 1 + 0i$, satisfying $z \\cdot 1 = z$ for every $z$.

**Inverse elements** also exist. Every complex number $z$ has an additive inverse $-z$ with $z + (-z) = 0$. Every nonzero complex number has a multiplicative inverse $z^{-1}$ with $z \\cdot z^{-1} = 1$. These properties make $\\mathbb{C}$ a mathematical field.`,
  after: ``,
  link: '',
},
   

    obj6: {
  title: `The Multiplicative Inverse`,
  before: ``,
  content: `Every nonzero complex number possesses a multiplicative inverse — a number that multiplies with it to produce $1$. Finding this inverse employs the same conjugate technique used for division.

For $z = a + bi \\neq 0$, the multiplicative inverse is:

$$z^{-1} = \\frac{1}{z} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$

The formula multiplies $1/z$ by $\\bar{z}/\\bar{z}$, converting the denominator to the real value $|z|^2 = a^2 + b^2$. The result expresses $z^{-1}$ in standard algebraic form.

Example: Find the multiplicative inverse of $3 + 4i$.

Compute the modulus squared: $|3 + 4i|^2 = 9 + 16 = 25$.

Find the conjugate: $\\overline{3 + 4i} = 3 - 4i$.

Apply the formula: $(3 + 4i)^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$.

Verification: $(3 + 4i) \\cdot \\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = \\frac{25}{25} = 1$.

The inverse exists precisely when $|z|^2 \\neq 0$, which occurs exactly when $z \\neq 0$. Division by zero remains undefined in $\\mathbb{C}$ as in $\\mathbb{R}$ — the number $0$ has no multiplicative inverse.

Geometrically, $z^{-1}$ lies on the same ray from the origin as $\\bar{z}$, but at distance $1/|z|$ rather than $|z|$. Inversion reflects across the real axis and rescales the [modulus](!/complex-numbers/absolute-value) to its reciprocal.`,
  after: ``,
  link: '',
},
   

    obj7: {
  title: `Common Pitfalls and Tips`,
  before: ``,
  content: `Complex arithmetic follows clear rules, but several common errors trap students repeatedly. Recognizing these pitfalls prevents mistakes and builds computational confidence.

**Forgetting $i^2 = -1$:** The most frequent error in multiplication. After expanding $(a + bi)(c + di)$, the term $bdi^2$ must become $-bd$, not $+bd$. Every $i^2$ in any calculation converts to $-1$ without exception.

**Sign errors in subtraction:** When subtracting $(c + di)$, both the real part $c$ and the imaginary part $di$ must be negated. The expression $(5 + 3i) - (2 - 4i)$ becomes $5 + 3i - 2 + 4i$, not $5 + 3i - 2 - 4i$. Distribute the negative sign completely before combining terms.

**Leaving complex denominators:** Final answers in [algebraic form](!/complex-numbers/algebraic-form) require real denominators. A result like $\\frac{3 + 2i}{1 + i}$ is incomplete. Multiply by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator to obtain proper form: $\\frac{(3 + 2i)(1 - i)}{(1 + i)(1 - i)} = \\frac{5 - i}{2} = \\frac{5}{2} - \\frac{1}{2}i$.

**Division by zero:** The expression $z/0$ is undefined for any $z$. No multiplicative inverse of $0$ exists, and division by zero produces no meaningful result. Always verify denominators are nonzero before dividing.

**Confusing conjugate and negative:** The conjugate of $3 + 2i$ is $3 - 2i$, not $-3 - 2i$. Conjugation flips only the imaginary sign; negation flips both. These operations differ and serve different purposes.

**Tips for accuracy:** Work step by step, writing each intermediate result. Check products by verifying that the [modulus](!/complex-numbers/absolute-value) of the product equals the product of moduli: $|z_1 z_2| = |z_1||z_2|$. For division, verify that multiplying the quotient by the divisor recovers the dividend.`,
  after: ``,
  link: '',
},
    obj8:{
      title:`Summary: The Four Operations Side by Side`,
      content:`The four operations on complex numbers share a common pattern — combine like terms for addition and subtraction, expand and apply $i^2 = -1$ for multiplication, and convert to real-denominator form via the [conjugate](!/complex-numbers/complex-conjugate) for division. The table below collects each operation's general formula, the key technique that makes it work, and a worked example side by side for quick reference.`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }

  const introContent = {
  id: "intro",
  title: "Computing with Two-Part Numbers",
  content: `Complex numbers combine real and imaginary components, and arithmetic must handle both parts systematically. Addition and subtraction operate component-wise, just like vector arithmetic. Multiplication requires the distributive property and the fundamental identity $i^2 = -1$. Division introduces the [conjugate](!/complex-numbers/complex-conjugate) as an essential tool for eliminating imaginary denominators. These four operations extend real arithmetic into the complex plane while preserving the algebraic structure that makes calculation predictable.`
}

const faqQuestions = {
  obj1: {
    question: "How do you add complex numbers?",
    answer: "To add complex numbers, combine like terms: add the real parts together and add the imaginary parts together. For z₁ = a + bi and z₂ = c + di, the sum is (a + c) + (b + d)i. The real and imaginary components are handled independently."
  },
  obj2: {
    question: "How do you subtract complex numbers?",
    answer: "To subtract complex numbers, subtract the real parts and subtract the imaginary parts separately. For z₁ = a + bi and z₂ = c + di, the difference is (a - c) + (b - d)i. Be careful to distribute the negative sign to both parts of the subtracted number."
  },
  obj3: {
    question: "How do you multiply complex numbers?",
    answer: "Multiply complex numbers using the FOIL method (distributive property), then use i² = -1 to simplify. For (a + bi)(c + di), expand to get ac + adi + bci + bdi², then substitute i² = -1 to get (ac - bd) + (ad + bc)i."
  },
  obj4: {
    question: "How do you divide complex numbers?",
    answer: "To divide complex numbers, multiply both numerator and denominator by the conjugate of the denominator. This converts the denominator to a real number since z · z̄ = |z|². Then divide each part of the numerator by this real number to get standard a + bi form."
  },
  obj5: {
    question: "Why do we multiply by the conjugate when dividing complex numbers?",
    answer: "Multiplying by the conjugate eliminates the imaginary part from the denominator. When you multiply (c + di) by its conjugate (c - di), you get c² + d², which is always a real number. This allows the result to be written in standard algebraic form."
  },
  obj6: {
    question: "What is i² equal to?",
    answer: "i² = -1 by definition. This is the fundamental property of the imaginary unit i. In any complex number calculation, whenever i² appears, it must be replaced with -1. This is the most common source of errors in complex multiplication."
  },
  obj7: {
    question: "What is the multiplicative inverse of a complex number?",
    answer: "The multiplicative inverse of z = a + bi is z⁻¹ = z̄/|z|² = (a - bi)/(a² + b²). This is the number that when multiplied by z gives 1. Every nonzero complex number has a multiplicative inverse; only zero has no inverse."
  },
  obj8: {
    question: "What is the geometric meaning of complex addition?",
    answer: "Complex addition corresponds to vector addition on the complex plane. Place two complex numbers as arrows from the origin, then position the second arrow's tail at the first arrow's head. The sum extends from the origin to the final head — the parallelogram or tip-to-tail rule."
  },
  obj9: {
    question: "What does multiplying by i do geometrically?",
    answer: "Multiplying a complex number by i rotates it 90° counterclockwise in the complex plane. For example, i(2 + 5i) = 2i + 5i² = -5 + 2i. The original point (2, 5) rotates to (-5, 2), a quarter turn around the origin."
  },
  obj10: {
    question: "What are common mistakes when working with complex numbers?",
    answer: "Common mistakes include: forgetting that i² = -1 in multiplication, not distributing the negative sign in subtraction, leaving complex numbers in the denominator, and confusing conjugate (flip imaginary sign only) with negative (flip both signs)."
  },
  obj11: {
    question: "Is complex number multiplication commutative?",
    answer: "Yes, complex multiplication is commutative: z₁ · z₂ = z₂ · z₁. It is also associative: (z₁ · z₂) · z₃ = z₁ · (z₂ · z₃). These properties, along with distributivity, make complex numbers a mathematical field."
  },
  obj12: {
    question: "What is |z₁ - z₂| in the complex plane?",
    answer: "The modulus |z₁ - z₂| represents the distance between points z₁ and z₂ in the complex plane. Subtraction z₁ - z₂ gives the vector from z₂ to z₁, and its modulus measures how far apart these two complex numbers are."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Operations on Complex Numbers",
    "description": "Learn how to add, subtract, multiply, and divide complex numbers. Step-by-step examples, the conjugate method for division, multiplicative inverse, and common pitfalls to avoid.",
    "url": "https://www.learnmathclass.com/complex-numbers/operations",
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
      "name": "Complex Number Arithmetic"
    },
    "teaches": [
      "Adding complex numbers by combining like terms",
      "Subtracting complex numbers with proper sign distribution",
      "Multiplying complex numbers using FOIL and i² = -1",
      "Dividing complex numbers using the conjugate",
      "Finding the multiplicative inverse of a complex number",
      "Geometric interpretation of complex operations",
      "Common pitfalls and how to avoid them",
      "Side-by-side comparison of the four operations and their key techniques"
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
        "name": "Complex Numbers",
        "item": "https://www.learnmathclass.com/complex-numbers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Operations",
        "item": "https://www.learnmathclass.com/complex-numbers/operations"
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
    obj3Table,
    obj4Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Operations on Complex Numbers: Add, Multiply, Divide | Learn Math Class",
      description: "Learn how to add, subtract, multiply, and divide complex numbers. Step-by-step examples, the conjugate method for division, multiplicative inverse, and common pitfalls to avoid.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/operations",
      name: "Operations on Complex Numbers"
    },
  }
}
   }



export default function OperationsPage({
  seoData,
  sectionsContent,
  introContent,
  obj3Table,
  obj4Table,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          <div
            key={'obj3-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj3Table }}
          />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Complex Numbers</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
   showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in Complex Numbers"
   
   
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