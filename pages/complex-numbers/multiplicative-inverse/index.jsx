
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){
// const keyWords = [
//   "multiplicative inverse complex number",
//   "reciprocal complex number",
//   "complex number inverse formula",
//   "one over z complex",
//   "z inverse formula",
//   "conjugate over modulus squared",
//   "complex division inverse",
//   "inverse complex number calculator",
//   "z times z inverse equals one",
//   "complex reciprocal",
//   "multiplicative inverse definition",
//   "invert complex number",
//   "complex number one divided by",
//   "inverse vs conjugate",
//   "unit circle inverse equals conjugate"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj4 — aggregation: notation reference
//   const obj4Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Notation</th>
//       <th style="${tableHeaders.aggregation}">Reads as</th>
//       <th style="${tableHeaders.aggregation}">Note / when used</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z⁻¹</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"z to the negative one"</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">algebraic; parallels powers z², z³, … and extends naturally to z⁻ⁿ</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ z</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"one over z"</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fraction notation; emphasizes division</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a + bi)⁻¹</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of the whole expression</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always parenthesize compound bases; <em>a + bi⁻¹</em> would mean a + 1⁄(bi)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 ⁄ (a + bi)</td>
//       <td style="padding: 12px 15px; color: #34495e;">"one over the whole denominator"</td>
//       <td style="padding: 12px 15px; color: #34495e;">parenthesize the denominator; <em>1⁄a + bi</em> would mean (1⁄a) + bi</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj6 — aggregation: properties of the multiplicative inverse
//   const obj6Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Property</th>
//       <th style="${tableHeaders.aggregation}">Formula</th>
//       <th style="${tableHeaders.aggregation}">Meaning</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Double inversion</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z⁻¹)⁻¹ = z</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverting twice returns the original number</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse of a product</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z₁ · z₂)⁻¹ = z₁⁻¹ · z₂⁻¹</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">to invert a product, invert each factor</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commute with conjugation</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z̄)⁻¹ = <span style="text-decoration: overline;">z⁻¹</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate-then-invert equals invert-then-conjugate</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modulus inverts</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z⁻¹| = 1 ⁄ |z|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distance from origin flips reciprocally</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Argument negates</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arg(z⁻¹) = −arg(z)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direction reflects across the real axis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Powers and negative exponents</td>
//       <td style="padding: 12px 15px; color: #34495e;">(zⁿ)⁻¹ = (z⁻¹)ⁿ = z⁻ⁿ</td>
//       <td style="padding: 12px 15px; color: #34495e;">negative exponents behave consistently for complex bases</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj7 — comparison: inverse vs conjugate
//   const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Aspect</th>
//       <th style="${tableHeaders.comparison}">Conjugate&nbsp;&nbsp;z̄</th>
//       <th style="${tableHeaders.comparison}">Multiplicative inverse&nbsp;&nbsp;z⁻¹</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Formula (for z = a + bi)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a − bi</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − bi) ⁄ (a² + b²)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real part</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a (unchanged)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ⁄ (a² + b²)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Imaginary part</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−b</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−b ⁄ (a² + b²)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modulus</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z̄| = |z|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z⁻¹| = 1 ⁄ |z|</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Geometry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection across the real axis (same circle)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection + rescale to a different circle</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Defined for which z</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every z (including 0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every z ≠ 0</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">When they coincide</td>
//       <td colspan="2" style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">z⁻¹ = z̄ if and only if |z| = 1 (on the unit circle)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Example (z = 3 + 4i)</td>
//       <td style="padding: 12px 15px; color: #34495e;">3 − 4i</td>
//       <td style="padding: 12px 15px; color: #34495e;">(3 − 4i) ⁄ 25 = 3⁄25 − (4⁄25)i</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — aggregation: common mistakes
//   const obj11Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Mistake</th>
//       <th style="${tableHeaders.aggregation}">Wrong</th>
//       <th style="${tableHeaders.aggregation}">Correct</th>
//       <th style="${tableHeaders.aggregation}">Why</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverting componentwise</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (3 + 2i) = 1⁄3 + (1⁄2)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (3 + 2i) = (3 − 2i) ⁄ 13</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the inverse of a sum is not the sum of inverses</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign error in |z|²</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">for 3 − 4i: 9 − 16 = −7</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">9 + 16 = 25</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z|² = a² + b² is always a sum; signs in z don't affect it</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing z⁻¹ with −z</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of 2 + i is −2 − i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of 2 + i is (2 − i) ⁄ 5</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−z is the additive inverse; z⁻¹ is the multiplicative inverse</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing z⁻¹ with z̄</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">for 3 + 4i: z⁻¹ = 3 − 4i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z⁻¹ = (3 − 4i) ⁄ 25</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z⁻¹ = z̄ ⁄ |z|² — must divide by the modulus squared</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Leaving a complex denominator</td>
//       <td style="padding: 12px 15px; color: #34495e;">(2 + 3i) ⁄ (1 − i) as final answer</td>
//       <td style="padding: 12px 15px; color: #34495e;">multiply by (1 + i) ⁄ (1 + i) to rationalize</td>
//       <td style="padding: 12px 15px; color: #34495e;">standard form a + bi requires a real denominator</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj12 — summary capstone: worked examples reference card
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">z</th>
//       <th style="${tableHeaders.summary}">z̄</th>
//       <th style="${tableHeaders.summary}">|z|²</th>
//       <th style="${tableHeaders.summary}">z⁻¹ = z̄ ⁄ |z|²</th>
//       <th style="${tableHeaders.summary}">Geometric note</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">5&nbsp;&nbsp;<span style="font-size: 13px;">(positive real)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">25</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄5</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">on the positive real axis; inverse on the same ray, closer to origin</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">2i&nbsp;&nbsp;<span style="font-size: 13px;">(pure imaginary)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−2i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−(1⁄2)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">on positive imaginary axis; inverse on negative imaginary axis</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 + i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 − i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(1 − i) ⁄ 2 = 1⁄2 − (1⁄2)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">modulus √2; inverse on circle of radius 1⁄√2</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">3 + 4i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 − 4i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">25</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 − 4i) ⁄ 25 = 3⁄25 − (4⁄25)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">modulus 5; inverse on circle of radius 1⁄5</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(3⁄5) + (4⁄5)i&nbsp;&nbsp;<span style="font-size: 13px;">(on unit circle)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁄5 − (4⁄5)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁄5 − (4⁄5)i&nbsp;&nbsp;<span style="font-size: 13px;">(= z̄)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z| = 1, so inverse equals conjugate; both remain on the unit circle</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">−1 + 2i</td>
//       <td style="padding: 12px 15px; color: #34495e;">−1 − 2i</td>
//       <td style="padding: 12px 15px; color: #34495e;">5</td>
//       <td style="padding: 12px 15px; color: #34495e;">(−1 − 2i) ⁄ 5 = −1⁄5 − (2⁄5)i</td>
//       <td style="padding: 12px 15px; color: #34495e;">second quadrant; inverse moves to third quadrant (reflection + rescale)</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // ---------- SECTIONS (original prose unchanged; obj12 added) ----------

// //     const sectionsContent={

// //     obj0: {
// //   title: `Key Terms`,
// //   content: `
// // - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — the number $z^{-1}$ satisfying $z \\cdot z^{-1} = 1$
// // - [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — used in the formula $z^{-1} = \\overline{z}/|z|^2$
// // - [Modulus](!/complex-numbers/definitions#modulus) — appears in the denominator of the inverse formula
// // - [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — the additive counterpart`,
// //   before: ``,
// //   after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
// //   link: '',
// // },
// //     obj1: {
// //   title: `Multiplicative Inverse in Real Numbers`,
// //   content: `For any nonzero real number $a$, the multiplicative inverse is $\\frac{1}{a}$, also written $a^{-1}$. The defining property is:

// // $$a \\cdot \\frac{1}{a} = 1$$

// // The product of a number and its multiplicative inverse always equals one.

// // The inverse of $5$ is $\\frac{1}{5}$, since $5 \\cdot \\frac{1}{5} = 1$. The inverse of $-3$ is $-\\frac{1}{3}$, since $(-3) \\cdot \\left(-\\frac{1}{3}\\right) = 1$. The inverse of $\\frac{2}{3}$ is $\\frac{3}{2}$, since $\\frac{2}{3} \\cdot \\frac{3}{2} = 1$. Inversion swaps numerator and denominator.

// // On the number line, the multiplicative inverse relates to distance from the origin in a reciprocal fashion. Numbers with absolute value greater than one have inverses with absolute value less than one, and vice versa. The number $5$ lies five units from the origin; its inverse $\\frac{1}{5}$ lies only one-fifth of a unit away. The number $\\frac{1}{4}$ lies close to the origin; its inverse $4$ lies far away. Numbers with absolute value exactly one — just $1$ and $-1$ — are their own multiplicative inverses.

// // Zero has no multiplicative inverse. No real number $x$ satisfies $0 \\cdot x = 1$, because zero times anything is zero. This exception carries over to complex numbers.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
// // obj2: {
// //   title: `Multiplicative Inverse of a Complex Number`,
// //   content: `For a nonzero complex number $z = a + bi$, the multiplicative inverse is the unique complex number $w$ satisfying $z \\cdot w = 1$. The formula is:

// // $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$

// // This expression uses the [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z} = a - bi$ in the numerator and the square of the [modulus](!/complex-numbers/absolute-value) $|z|^2 = a^2 + b^2$ in the denominator.

// // Separating into real and imaginary parts:

// // $$z^{-1} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$$

// // Consider $z = 3 + 4i$. The conjugate is $\\overline{z} = 3 - 4i$ and the modulus squared is $|z|^2 = 9 + 16 = 25$. The multiplicative inverse is:

// // $$z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$$

// // Verification: $(3 + 4i)\\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = 1$.

// // For $z = 2i$, a pure imaginary number, the conjugate is $-2i$ and the modulus squared is $4$. The inverse is $\\frac{-2i}{4} = -\\frac{1}{2}i$. For $z = 1 + i$, the conjugate is $1 - i$ and the modulus squared is $2$. The inverse is $\\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },

// // obj3: {
// //   title: `Why the Formula Works`,
// //   content: `The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ is not arbitrary. It emerges from a natural strategy: eliminate the imaginary unit from the denominator.

// // Starting with $\\frac{1}{z} = \\frac{1}{a + bi}$, the goal is to rewrite this with a real denominator. Multiply numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate):

// // $$\\frac{1}{a + bi} = \\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi} = \\frac{a - bi}{(a + bi)(a - bi)}$$

// // The denominator simplifies using the identity $z \\cdot \\overline{z} = |z|^2$:

// // $$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$$

// // This is a real number — the square of the modulus. The result:

// // $$\\frac{1}{z} = \\frac{a - bi}{a^2 + b^2} = \\frac{\\overline{z}}{|z|^2}$$

// // The key insight is that multiplying any complex number by its conjugate produces a real number. This property converts division by a complex number into division by a real number, which is straightforward.

// // Verification confirms the formula works:

// // $$z \\cdot z^{-1} = z \\cdot \\frac{\\overline{z}}{|z|^2} = \\frac{z \\cdot \\overline{z}}{|z|^2} = \\frac{|z|^2}{|z|^2} = 1$$

// // The product of $z$ and $\\overline{z}$ in the numerator equals $|z|^2$, canceling the denominator exactly.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },

// // obj4: {
// //   title: `Notation`,
// //   content: `The multiplicative inverse of $z$ appears in three equivalent notations: $z^{-1}$, $\\frac{1}{z}$, and $1/z$. All three denote the same complex number — the one satisfying $z \\cdot z^{-1} = 1$.

// // The exponent notation $z^{-1}$ emphasizes the algebraic role of the inverse. It parallels the notation for powers: $z^2$ means $z \\cdot z$, and $z^{-1}$ means the number that "undoes" multiplication by $z$. This notation extends naturally to negative integer exponents, where $z^{-n} = (z^{-1})^n = (z^n)^{-1}$.

// // The fraction notation $\\frac{1}{z}$ emphasizes division. It reads as "one divided by $z$" and connects to the broader concept of dividing complex numbers.

// // Parentheses prevent ambiguity when the base is an expression. The inverse of $3 + 2i$ should be written $(3 + 2i)^{-1}$, not $3 + 2i^{-1}$. The latter means $3 + \\frac{1}{2}i = 3 + \\frac{1}{2}i$, something entirely different. Without parentheses, the exponent binds only to $i$.

// // Similarly, $\\frac{1}{3 + 2i}$ is unambiguous, but inline expressions require care. Writing $1/3 + 2i$ means $\\frac{1}{3} + 2i$, not $\\frac{1}{3 + 2i}$. Use $1/(3 + 2i)$ or $(3 + 2i)^{-1}$ instead.

// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Symbols and Notations](!/math-symbols/complex-numbers) →@

// // `,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },


// // obj5: {
// //   title: `Geometric Interpretation`,
// //   content: `The multiplicative inverse transforms both the distance and direction of a complex number in the [complex plane](!/complex-numbers/geometric-representation).

// // The modulus inverts:

// // $$|z^{-1}| = \\frac{1}{|z|}$$

// // A number far from the origin has an inverse close to the origin, and vice versa. If $|z| = 5$, then $|z^{-1}| = \\frac{1}{5}$. If $|z| = \\frac{1}{3}$, then $|z^{-1}| = 3$. Numbers with modulus greater than one have inverses with modulus less than one. Numbers with modulus less than one have inverses with modulus greater than one.

// // Numbers on the unit circle — those with $|z| = 1$ — have inverses also on the unit circle, since $|z^{-1}| = \\frac{1}{1} = 1$. These numbers stay the same distance from the origin after inversion.

// // The argument negates:

// // $$\\arg(z^{-1}) = -\\arg(z)$$

// // If $z$ points in direction $\\theta$, then $z^{-1}$ points in direction $-\\theta$. A number in the upper half-plane has its inverse in the lower half-plane, and vice versa. A number at angle $\\frac{\\pi}{4}$ (northeast) has its inverse at angle $-\\frac{\\pi}{4}$ (southeast).

// // Combining both effects: the multiplicative inverse reflects $z$ across the real axis and scales its distance from the origin by $\\frac{1}{|z|^2}$. Alternatively, in [trigonometric form](!/complex-numbers/trigonometric-form), if $z = r\\,\\text{cis}\\,\\theta$, then $z^{-1} = \\frac{1}{r}\\,\\text{cis}(-\\theta)$.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },


// // obj6: {
// //   title: `Properties of Multiplicative Inverse`,
// //   content: `The multiplicative inverse interacts with other operations in predictable ways. These properties parallel the corresponding rules for real numbers.

// // Double inversion returns the original number:

// // $$(z^{-1})^{-1} = z$$

// // Taking the multiplicative inverse twice leaves $z$ unchanged. If $w$ is the inverse of $z$, then $z$ is the inverse of $w$.

// // The inverse of a product equals the product of inverses:

// // $$(z_1 \\cdot z_2)^{-1} = z_1^{-1} \\cdot z_2^{-1}$$

// // To invert a product, invert each factor. Order does not matter since multiplication is commutative.

// // Inversion and [conjugation](!/complex-numbers/complex-conjugate) commute:

// // $$(\\overline{z})^{-1} = \\overline{z^{-1}}$$

// // Conjugating first and then inverting produces the same result as inverting first and then conjugating.

// // The modulus inverts:

// // $$|z^{-1}| = \\frac{1}{|z|}$$

// // The argument negates:

// // $$\\arg(z^{-1}) = -\\arg(z)$$

// // Powers and inverses interact naturally:

// // $$(z^n)^{-1} = (z^{-1})^n = z^{-n}$$

// // The inverse of $z^n$ equals the $n$th power of $z^{-1}$, and both equal $z^{-n}$. This consistency allows negative exponents to work seamlessly with complex numbers, just as they do with real numbers.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },

// // obj7: {
// //   title: `Multiplicative Inverse vs. Complex Conjugate`,
// //   content: `Both the multiplicative inverse and the [complex conjugate](!/complex-numbers/complex-conjugate) involve transforming a complex number, but they serve different purposes and produce different results.

// // The conjugate of $z = a + bi$ is $\\overline{z} = a - bi$. Only the imaginary part changes sign. The real part stays fixed.

// // The multiplicative inverse of $z = a + bi$ is $z^{-1} = \\frac{a - bi}{a^2 + b^2}$. Both parts are divided by $a^2 + b^2$, and the imaginary part also changes sign.

// // For $z = 3 + 4i$: the conjugate is $\\overline{z} = 3 - 4i$, while the inverse is $z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$. These differ by a factor of $25 = |z|^2$.

// // Geometrically, conjugation reflects across the real axis while preserving the modulus: $|\\overline{z}| = |z|$. Inversion also reflects across the real axis but additionally scales: $|z^{-1}| = \\frac{1}{|z|}$. The conjugate stays on the same circle centered at the origin; the inverse moves to a different circle.

// // The relationship between them is:

// // $$z^{-1} = \\frac{\\overline{z}}{|z|^2}$$

// // When are they equal? Only when $|z|^2 = 1$, meaning $|z| = 1$. On the unit circle, $z^{-1} = \\overline{z}$. For $z = \\frac{3}{5} + \\frac{4}{5}i$, which has modulus $1$, the inverse and conjugate are both $\\frac{3}{5} - \\frac{4}{5}i$. Off the unit circle, they always differ.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },


// // obj8: {
// //   title: `Why Zero Has No Multiplicative Inverse`,
// //   content: `Zero is the sole complex number without a multiplicative inverse. No complex number $w$ satisfies $0 \\cdot w = 1$.

// // The reason is fundamental: zero times any number equals zero, never one. Regardless of what $w$ might be, the product $0 \\cdot w$ vanishes. The equation $0 \\cdot w = 1$ has no solution.

// // The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ reveals the problem algebraically. For $z = 0$, the modulus is $|z| = 0$, so $|z|^2 = 0$ appears in the denominator. Division by zero is undefined, and the formula produces no result.

// // This exception is unavoidable in any field. The [field axioms](!/complex-numbers/properties) guarantee multiplicative inverses for all nonzero elements, but explicitly exclude zero. The additive identity cannot have a multiplicative inverse — the two roles are incompatible.

// // The absence of $0^{-1}$ is why division by zero remains undefined for complex numbers, just as for real numbers. The expression $\\frac{z}{0}$ has no meaning. Any calculation that leads to division by zero has gone astray.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },


// // obj9: {
// //   title: `Connection to Division`,
// //   content: `Division of complex numbers is multiplication by the multiplicative inverse:

// // $$\\frac{z_1}{z_2} = z_1 \\cdot z_2^{-1}$$

// // This definition reduces division to multiplication, which is already well understood. Every property of division follows from properties of multiplication combined with properties of the inverse.

// // Substituting the formula for $z_2^{-1}$:

// // $$\\frac{z_1}{z_2} = z_1 \\cdot \\frac{\\overline{z_2}}{|z_2|^2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$

// // This is the standard method for dividing complex numbers: multiply the numerator by the conjugate of the denominator, then divide by the modulus squared.

// // Consider $\\frac{5 + 3i}{1 + 2i}$. The conjugate of the denominator is $1 - 2i$, and $|1 + 2i|^2 = 1 + 4 = 5$. Computing:

// // $$\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{5} = \\frac{5 - 10i + 3i - 6i^2}{5} = \\frac{5 - 7i + 6}{5} = \\frac{11 - 7i}{5} = \\frac{11}{5} - \\frac{7}{5}i$$

// // The connection explains why division by zero is undefined: zero has no multiplicative inverse, so $z_1 \\cdot 0^{-1}$ is meaningless.

// // For detailed coverage of division and other arithmetic, see [operations](!/complex-numbers/operations).`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },


// // obj10: {
// //   title: `Uniqueness`,
// //   content: `Every nonzero complex number has exactly one multiplicative inverse.

// // Existence is established by the formula: for any $z = a + bi$ with $z \\neq 0$, the number $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ satisfies $z \\cdot z^{-1} = 1$. Since $z \\neq 0$, at least one of $a$ or $b$ is nonzero, so $|z|^2 = a^2 + b^2 > 0$ and the formula is well-defined.

// // Uniqueness follows from a short argument. Suppose $w_1$ and $w_2$ both satisfy $z \\cdot w_1 = 1$ and $z \\cdot w_2 = 1$. Then:

// // $$w_1 = w_1 \\cdot 1 = w_1 \\cdot (z \\cdot w_2) = (w_1 \\cdot z) \\cdot w_2 = 1 \\cdot w_2 = w_2$$

// // Any two multiplicative inverses of the same number must be equal.

// // This uniqueness is guaranteed by the [field axioms](!/complex-numbers/properties). In any field, multiplicative inverses of nonzero elements are unique. The argument above uses only associativity of multiplication and the property of one as the multiplicative identity.

// // Uniqueness justifies the notation $z^{-1}$ and $\\frac{1}{z}$. If multiple inverses existed, these expressions would be ambiguous. Because exactly one inverse exists, the notation refers to a single, well-defined complex number.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },


// // obj11: {
// //   title: `Common Mistakes`,
// //   content: `Several errors recur when students compute multiplicative inverses of complex numbers.

// // Forgetting to use the conjugate is common. Students attempt $\\frac{1}{3 + 2i} = \\frac{1}{3} + \\frac{1}{2}i$, treating real and imaginary parts separately. This is incorrect. The inverse of a sum is not the sum of inverses. The correct approach multiplies by $\\frac{3 - 2i}{3 - 2i}$ to obtain $\\frac{3 - 2i}{13}$.

// // Errors in computing $|z|^2$ are frequent. For $z = 3 - 4i$, the modulus squared is $3^2 + (-4)^2 = 9 + 16 = 25$, not $9 - 16 = -7$. The formula is $a^2 + b^2$, always a sum, never a difference. Signs in the original number do not affect the addition.

// // Confusing $z^{-1}$ with $-z$ conflates two unrelated operations. The multiplicative inverse $z^{-1}$ satisfies $z \\cdot z^{-1} = 1$. The [additive inverse](!/complex-numbers/additive-inverse) $-z$ satisfies $z + (-z) = 0$. For $z = 2 + i$, the multiplicative inverse is $\\frac{2 - i}{5}$; the additive inverse is $-2 - i$. These share nothing but a sign change in the imaginary part.

// // Confusing $z^{-1}$ with $\\overline{z}$ is another pitfall. They are equal only on the unit circle. For $z = 3 + 4i$, the conjugate is $3 - 4i$ while the inverse is $\\frac{3 - 4i}{25}$. Forgetting to divide by $|z|^2$ leaves the answer off by a factor of $25$.

// // Leaving a complex denominator unreduced is incomplete. A final answer like $\\frac{2 + 3i}{1 - i}$ requires rationalization. Multiply by $\\frac{1 + i}{1 + i}$ to obtain a real denominator and express the result in standard [algebraic form](!/complex-numbers/algebraic-form).`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
// //     obj12:{
// //       title:`Summary: Worked Examples of z⁻¹`,
// //       content:`The formula $z^{-1} = \\overline{z}/|z|^2$ produces predictable patterns across different kinds of complex numbers. The table below works the inverse for several representative cases — a positive real, a pure imaginary, points off the unit circle, a point on the unit circle, and a point in the second quadrant — collecting $\\overline{z}$, $|z|^2$, $z^{-1}$, and a brief geometric note for each.`,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// // formulas-optimized: v1 | 2026-06-11 | 2 callouts (obj2, obj5)
// const sectionsContent={

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — the number $z^{-1}$ satisfying $z \\cdot z^{-1} = 1$
// - [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — used in the formula $z^{-1} = \\overline{z}/|z|^2$
// - [Modulus](!/complex-numbers/definitions#modulus) — appears in the denominator of the inverse formula
// - [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — the additive counterpart`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },
//     obj1: {
//   title: `Multiplicative Inverse in Real Numbers`,
//   content: `For any nonzero real number $a$, the multiplicative inverse is $\\frac{1}{a}$, also written $a^{-1}$. The defining property is:

// $$a \\cdot \\frac{1}{a} = 1$$

// The product of a number and its multiplicative inverse always equals one.

// The inverse of $5$ is $\\frac{1}{5}$, since $5 \\cdot \\frac{1}{5} = 1$. The inverse of $-3$ is $-\\frac{1}{3}$, since $(-3) \\cdot \\left(-\\frac{1}{3}\\right) = 1$. The inverse of $\\frac{2}{3}$ is $\\frac{3}{2}$, since $\\frac{2}{3} \\cdot \\frac{3}{2} = 1$. Inversion swaps numerator and denominator.

// On the number line, the multiplicative inverse relates to distance from the origin in a reciprocal fashion. Numbers with absolute value greater than one have inverses with absolute value less than one, and vice versa. The number $5$ lies five units from the origin; its inverse $\\frac{1}{5}$ lies only one-fifth of a unit away. The number $\\frac{1}{4}$ lies close to the origin; its inverse $4$ lies far away. Numbers with absolute value exactly one — just $1$ and $-1$ — are their own multiplicative inverses.

// Zero has no multiplicative inverse. No real number $x$ satisfies $0 \\cdot x = 1$, because zero times anything is zero. This exception carries over to complex numbers.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
// obj2: {
//   title: `Multiplicative Inverse of a Complex Number`,
//   content: `For a nonzero complex number $z = a + bi$, the multiplicative inverse is the unique complex number $w$ satisfying $z \\cdot w = 1$. The formula is:

// @academic[formula_callout:Multiplicative Inverse
// $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$
// /complex-numbers/formulas#multiplicative_inverse]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// This expression uses the [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z} = a - bi$ in the numerator and the square of the [modulus](!/complex-numbers/absolute-value) $|z|^2 = a^2 + b^2$ in the denominator.

// Separating into real and imaginary parts:

// $$z^{-1} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$$

// Consider $z = 3 + 4i$. The conjugate is $\\overline{z} = 3 - 4i$ and the modulus squared is $|z|^2 = 9 + 16 = 25$. The multiplicative inverse is:

// $$z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$$

// Verification: $(3 + 4i)\\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = 1$.

// For $z = 2i$, a pure imaginary number, the conjugate is $-2i$ and the modulus squared is $4$. The inverse is $\\frac{-2i}{4} = -\\frac{1}{2}i$. For $z = 1 + i$, the conjugate is $1 - i$ and the modulus squared is $2$. The inverse is $\\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj3: {
//   title: `Why the Formula Works`,
//   content: `The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ is not arbitrary. It emerges from a natural strategy: eliminate the imaginary unit from the denominator.

// Starting with $\\frac{1}{z} = \\frac{1}{a + bi}$, the goal is to rewrite this with a real denominator. Multiply numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate):

// $$\\frac{1}{a + bi} = \\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi} = \\frac{a - bi}{(a + bi)(a - bi)}$$

// The denominator simplifies using the identity $z \\cdot \\overline{z} = |z|^2$:

// $$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$$

// This is a real number — the square of the modulus. The result:

// $$\\frac{1}{z} = \\frac{a - bi}{a^2 + b^2} = \\frac{\\overline{z}}{|z|^2}$$

// The key insight is that multiplying any complex number by its conjugate produces a real number. This property converts division by a complex number into division by a real number, which is straightforward.

// Verification confirms the formula works:

// $$z \\cdot z^{-1} = z \\cdot \\frac{\\overline{z}}{|z|^2} = \\frac{z \\cdot \\overline{z}}{|z|^2} = \\frac{|z|^2}{|z|^2} = 1$$

// The product of $z$ and $\\overline{z}$ in the numerator equals $|z|^2$, canceling the denominator exactly.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// notation: {
//   title: `Multiplicative Inverse Notation`,
//   lead: `The corner exponent, its fraction twin, and the parentheses that keep both honest. The $-1$ superscript here joins a mark that crosses four topics — numbers, functions, trigonometry, matrices — each with its own meaning.`,
//   inherited: `$z$, $a + bi$ and $\\mathbb{C}$ come from [complex numbers basics](!/complex-numbers/basics#notation), $i$ from [the imaginary unit](!/complex-numbers/imaginary-numbers#notation); the conjugate bar and the modulus in the formula $z^{-1} = \\bar{z}/|z|^2$ belong to [their](!/complex-numbers/complex-conjugate#notation) [pages](!/complex-numbers/absolute-value#notation).`,
//   entries: [
//     {
//       id: 'z-inverse',
//       tex: `$z^{-1}$`,
//       read: `z to the minus one; z inverse`,
//       means: `The $-1$ superscript as an exponent in earnest: $z^{-1}$ is the number with $z \\cdot z^{-1} = 1$, computed by $\\bar{z}/|z|^2$ — **Multiplicative Inverse of a Complex Number** above. The same corner mark [negative powers](!/algebra/powers/negative-exponents#notation) put on real numbers, now paid for by a conjugate.`,
//       cases: `Extends along the exponent ladder — $z^{-n} = (z^{-1})^n = (z^n)^{-1}$; in polar dress the corner distributes: $z^{-1} = r^{-1}e^{-i\\theta}$, modulus inverted, [argument negated](!/complex-numbers/exponential-form#notation).`,
//       confusedWith: `The conjugate. $z^{-1} = \\bar{z}/|z|^2$ makes them parallel, and on the unit circle equal — $|z| = 1$ forces $z^{-1} = \\bar{z}$; off the circle they differ in length, and **Multiplicative Inverse vs. Complex Conjugate** below separates them.`,
//       sameGlyphElsewhere: `The corner changes job by base: undo-the-map on functions ($f^{-1}$), [matrix inversion](!/linear-algebra/matrix/inverse#notation) on $A^{-1}$ — on numbers alone it is honest arithmetic.`,
//     },
//     {
//       id: 'one-over-z',
//       tex: `$\\frac{1}{z}$`,
//       read: `one over z`,
//       means: `The division spelling of the same number, wearing the fraction bar — the notation of choice when the next step is [division](!/complex-numbers/operations), since $\\frac{w}{z} = w \\cdot \\frac{1}{z}$.`,
//       cases: `Displayed fractions scope themselves — $\\frac{1}{3+2i}$ is unambiguous; inline, the slash binds tight: $1/3 + 2i$ means $\\frac{1}{3} + 2i$, so inline work writes $1/(3 + 2i)$.`,
//       confusedWith: `A finished answer. $\\frac{1}{z}$ is a division still owed — evaluating it **requires** the conjugate trick of **Why the Formula Works** above; the bar promises the operation, not the result.`,
//     },
//     {
//       id: 'inverse-parentheses',
//       tex: `$(3 + 2i)^{-1}$`,
//       read: `the inverse of three plus two i`,
//       means: `Parentheses decide what the corner grips. $(3 + 2i)^{-1}$ inverts the whole number; unparenthesized, the exponent binds only to the nearest symbol — $3 + 2i^{-1} = 3 + 2(-i) = 3 - 2i$, a different number entirely.`,
//       cases: `Named variables carry no ambiguity — $z^{-1}$ grips all of $z$; the hazard lives where literals are inverted inline, the same place the slash trap above strikes.`,
//       confusedWith: `A decoration. The $-1$ is an operative exponent, not a label — dropping the parentheses does not roughly invert the number, it silently computes something else.`,
//     },
//   ],
//   symbolsHref: `/math-symbols/complex-numbers`,
//   symbolsLabel: `All complex number symbols`,
//   parentHref: `/complex-numbers`,
//   parentLabel: `Complex Numbers`,
// },


// obj5: {
//   title: `Geometric Interpretation`,
//   content: `The multiplicative inverse transforms both the distance and direction of a complex number in the [complex plane](!/complex-numbers/geometric-representation).

// The modulus inverts:

// @academic[formula_callout:Modulus of Inverse
// $$|z^{-1}| = \\frac{1}{|z|}$$
// /complex-numbers/formulas#modulus_of_inverse]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// A number far from the origin has an inverse close to the origin, and vice versa. If $|z| = 5$, then $|z^{-1}| = \\frac{1}{5}$. If $|z| = \\frac{1}{3}$, then $|z^{-1}| = 3$. Numbers with modulus greater than one have inverses with modulus less than one. Numbers with modulus less than one have inverses with modulus greater than one.

// Numbers on the unit circle — those with $|z| = 1$ — have inverses also on the unit circle, since $|z^{-1}| = \\frac{1}{1} = 1$. These numbers stay the same distance from the origin after inversion.

// The argument negates:

// $$\\arg(z^{-1}) = -\\arg(z)$$

// If $z$ points in direction $\\theta$, then $z^{-1}$ points in direction $-\\theta$. A number in the upper half-plane has its inverse in the lower half-plane, and vice versa. A number at angle $\\frac{\\pi}{4}$ (northeast) has its inverse at angle $-\\frac{\\pi}{4}$ (southeast).

// Combining both effects: the multiplicative inverse reflects $z$ across the real axis and scales its distance from the origin by $\\frac{1}{|z|^2}$. Alternatively, in [trigonometric form](!/complex-numbers/trigonometric-form), if $z = r\\,\\text{cis}\\,\\theta$, then $z^{-1} = \\frac{1}{r}\\,\\text{cis}(-\\theta)$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj6: {
//   title: `Properties of Multiplicative Inverse`,
//   content: `The multiplicative inverse interacts with other operations in predictable ways. These properties parallel the corresponding rules for real numbers.

// Double inversion returns the original number:

// $$(z^{-1})^{-1} = z$$

// Taking the multiplicative inverse twice leaves $z$ unchanged. If $w$ is the inverse of $z$, then $z$ is the inverse of $w$.

// The inverse of a product equals the product of inverses:

// $$(z_1 \\cdot z_2)^{-1} = z_1^{-1} \\cdot z_2^{-1}$$

// To invert a product, invert each factor. Order does not matter since multiplication is commutative.

// Inversion and [conjugation](!/complex-numbers/complex-conjugate) commute:

// $$(\\overline{z})^{-1} = \\overline{z^{-1}}$$

// Conjugating first and then inverting produces the same result as inverting first and then conjugating.

// The modulus inverts:

// $$|z^{-1}| = \\frac{1}{|z|}$$

// The argument negates:

// $$\\arg(z^{-1}) = -\\arg(z)$$

// Powers and inverses interact naturally:

// $$(z^n)^{-1} = (z^{-1})^n = z^{-n}$$

// The inverse of $z^n$ equals the $n$th power of $z^{-1}$, and both equal $z^{-n}$. This consistency allows negative exponents to work seamlessly with complex numbers, just as they do with real numbers.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj7: {
//   title: `Multiplicative Inverse vs. Complex Conjugate`,
//   content: `Both the multiplicative inverse and the [complex conjugate](!/complex-numbers/complex-conjugate) involve transforming a complex number, but they serve different purposes and produce different results.

// The conjugate of $z = a + bi$ is $\\overline{z} = a - bi$. Only the imaginary part changes sign. The real part stays fixed.

// The multiplicative inverse of $z = a + bi$ is $z^{-1} = \\frac{a - bi}{a^2 + b^2}$. Both parts are divided by $a^2 + b^2$, and the imaginary part also changes sign.

// For $z = 3 + 4i$: the conjugate is $\\overline{z} = 3 - 4i$, while the inverse is $z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$. These differ by a factor of $25 = |z|^2$.

// Geometrically, conjugation reflects across the real axis while preserving the modulus: $|\\overline{z}| = |z|$. Inversion also reflects across the real axis but additionally scales: $|z^{-1}| = \\frac{1}{|z|}$. The conjugate stays on the same circle centered at the origin; the inverse moves to a different circle.

// The relationship between them is:

// $$z^{-1} = \\frac{\\overline{z}}{|z|^2}$$

// When are they equal? Only when $|z|^2 = 1$, meaning $|z| = 1$. On the unit circle, $z^{-1} = \\overline{z}$. For $z = \\frac{3}{5} + \\frac{4}{5}i$, which has modulus $1$, the inverse and conjugate are both $\\frac{3}{5} - \\frac{4}{5}i$. Off the unit circle, they always differ.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj8: {
//   title: `Why Zero Has No Multiplicative Inverse`,
//   content: `Zero is the sole complex number without a multiplicative inverse. No complex number $w$ satisfies $0 \\cdot w = 1$.

// The reason is fundamental: zero times any number equals zero, never one. Regardless of what $w$ might be, the product $0 \\cdot w$ vanishes. The equation $0 \\cdot w = 1$ has no solution.

// The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ reveals the problem algebraically. For $z = 0$, the modulus is $|z| = 0$, so $|z|^2 = 0$ appears in the denominator. Division by zero is undefined, and the formula produces no result.

// This exception is unavoidable in any field. The [field axioms](!/complex-numbers/properties) guarantee multiplicative inverses for all nonzero elements, but explicitly exclude zero. The additive identity cannot have a multiplicative inverse — the two roles are incompatible.

// The absence of $0^{-1}$ is why division by zero remains undefined for complex numbers, just as for real numbers. The expression $\\frac{z}{0}$ has no meaning. Any calculation that leads to division by zero has gone astray.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj9: {
//   title: `Connection to Division`,
//   content: `Division of complex numbers is multiplication by the multiplicative inverse:

// $$\\frac{z_1}{z_2} = z_1 \\cdot z_2^{-1}$$

// This definition reduces division to multiplication, which is already well understood. Every property of division follows from properties of multiplication combined with properties of the inverse.

// Substituting the formula for $z_2^{-1}$:

// $$\\frac{z_1}{z_2} = z_1 \\cdot \\frac{\\overline{z_2}}{|z_2|^2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$

// This is the standard method for dividing complex numbers: multiply the numerator by the conjugate of the denominator, then divide by the modulus squared.

// Consider $\\frac{5 + 3i}{1 + 2i}$. The conjugate of the denominator is $1 - 2i$, and $|1 + 2i|^2 = 1 + 4 = 5$. Computing:

// $$\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{5} = \\frac{5 - 10i + 3i - 6i^2}{5} = \\frac{5 - 7i + 6}{5} = \\frac{11 - 7i}{5} = \\frac{11}{5} - \\frac{7}{5}i$$

// The connection explains why division by zero is undefined: zero has no multiplicative inverse, so $z_1 \\cdot 0^{-1}$ is meaningless.

// For detailed coverage of division and other arithmetic, see [operations](!/complex-numbers/operations).`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj10: {
//   title: `Uniqueness`,
//   content: `Every nonzero complex number has exactly one multiplicative inverse.

// Existence is established by the formula: for any $z = a + bi$ with $z \\neq 0$, the number $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ satisfies $z \\cdot z^{-1} = 1$. Since $z \\neq 0$, at least one of $a$ or $b$ is nonzero, so $|z|^2 = a^2 + b^2 > 0$ and the formula is well-defined.

// Uniqueness follows from a short argument. Suppose $w_1$ and $w_2$ both satisfy $z \\cdot w_1 = 1$ and $z \\cdot w_2 = 1$. Then:

// $$w_1 = w_1 \\cdot 1 = w_1 \\cdot (z \\cdot w_2) = (w_1 \\cdot z) \\cdot w_2 = 1 \\cdot w_2 = w_2$$

// Any two multiplicative inverses of the same number must be equal.

// This uniqueness is guaranteed by the [field axioms](!/complex-numbers/properties). In any field, multiplicative inverses of nonzero elements are unique. The argument above uses only associativity of multiplication and the property of one as the multiplicative identity.

// Uniqueness justifies the notation $z^{-1}$ and $\\frac{1}{z}$. If multiple inverses existed, these expressions would be ambiguous. Because exactly one inverse exists, the notation refers to a single, well-defined complex number.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj11: {
//   title: `Common Mistakes`,
//   content: `Several errors recur when students compute multiplicative inverses of complex numbers.

// Forgetting to use the conjugate is common. Students attempt $\\frac{1}{3 + 2i} = \\frac{1}{3} + \\frac{1}{2}i$, treating real and imaginary parts separately. This is incorrect. The inverse of a sum is not the sum of inverses. The correct approach multiplies by $\\frac{3 - 2i}{3 - 2i}$ to obtain $\\frac{3 - 2i}{13}$.

// Errors in computing $|z|^2$ are frequent. For $z = 3 - 4i$, the modulus squared is $3^2 + (-4)^2 = 9 + 16 = 25$, not $9 - 16 = -7$. The formula is $a^2 + b^2$, always a sum, never a difference. Signs in the original number do not affect the addition.

// Confusing $z^{-1}$ with $-z$ conflates two unrelated operations. The multiplicative inverse $z^{-1}$ satisfies $z \\cdot z^{-1} = 1$. The [additive inverse](!/complex-numbers/additive-inverse) $-z$ satisfies $z + (-z) = 0$. For $z = 2 + i$, the multiplicative inverse is $\\frac{2 - i}{5}$; the additive inverse is $-2 - i$. These share nothing but a sign change in the imaginary part.

// Confusing $z^{-1}$ with $\\overline{z}$ is another pitfall. They are equal only on the unit circle. For $z = 3 + 4i$, the conjugate is $3 - 4i$ while the inverse is $\\frac{3 - 4i}{25}$. Forgetting to divide by $|z|^2$ leaves the answer off by a factor of $25$.

// Leaving a complex denominator unreduced is incomplete. A final answer like $\\frac{2 + 3i}{1 - i}$ requires rationalization. Multiply by $\\frac{1 + i}{1 + i}$ to obtain a real denominator and express the result in standard [algebraic form](!/complex-numbers/algebraic-form).`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     obj12:{
//       title:`Summary: Worked Examples of z⁻¹`,
//       content:`The formula $z^{-1} = \\overline{z}/|z|^2$ produces predictable patterns across different kinds of complex numbers. The table below works the inverse for several representative cases — a positive real, a pure imaginary, points off the unit circle, a point on the unit circle, and a point in the second quadrant — collecting $\\overline{z}$, $|z|^2$, $z^{-1}$, and a brief geometric note for each.`,
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

//   const introContent = {
//   id: "intro",
//   title: "The Number That Cancels Through Multiplication",
//   content: `Every nonzero complex number has a counterpart that, when multiplied by it, produces one. This counterpart is called the multiplicative inverse. Unlike the [additive inverse](!/complex-numbers/additive-inverse), which simply negates both components, the multiplicative inverse requires a formula involving the [conjugate](!/complex-numbers/complex-conjugate) and [modulus](!/complex-numbers/absolute-value). Understanding this inverse clarifies the nature of division and completes the arithmetic structure of complex numbers.`
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is the multiplicative inverse of a complex number?",
//     answer: "The multiplicative inverse of z = a + bi is the number z⁻¹ satisfying z · z⁻¹ = 1. The formula is z⁻¹ = z̄/|z|² = (a - bi)/(a² + b²). It uses the conjugate in the numerator and the modulus squared in the denominator."
//   },
//   obj2: {
//     question: "How do you find the multiplicative inverse of a complex number?",
//     answer: "Take the conjugate and divide by the modulus squared. For z = 3 + 4i: the conjugate is 3 - 4i, the modulus squared is 25, so z⁻¹ = (3 - 4i)/25 = 3/25 - 4i/25. Verify by checking that z · z⁻¹ = 1."
//   },
//   obj3: {
//     question: "Why does the inverse formula use the conjugate?",
//     answer: "Multiplying by the conjugate eliminates the imaginary unit from the denominator. Since z · z̄ = |z|² (a real number), we get 1/z = z̄/(z · z̄) = z̄/|z|². This converts division by a complex number into division by a real number."
//   },
//   obj4: {
//     question: "What is the geometric meaning of the multiplicative inverse?",
//     answer: "The inverse reflects z across the real axis and scales its distance from the origin by 1/|z|². The modulus inverts: |z⁻¹| = 1/|z|. The argument negates: arg(z⁻¹) = -arg(z). Numbers far from the origin have inverses close to it."
//   },
//   obj5: {
//     question: "Does zero have a multiplicative inverse?",
//     answer: "No. Zero is the only complex number without a multiplicative inverse. No number w satisfies 0 · w = 1 because zero times anything is zero. This is why division by zero is undefined for complex numbers."
//   },
//   obj6: {
//     question: "What is the difference between multiplicative inverse and conjugate?",
//     answer: "The conjugate z̄ = a - bi only changes the sign of the imaginary part. The inverse z⁻¹ = (a - bi)/(a² + b²) also divides by the modulus squared. They are equal only on the unit circle, where |z| = 1."
//   },
//   obj7: {
//     question: "When are the inverse and conjugate equal?",
//     answer: "Only when |z| = 1 (on the unit circle). In that case, |z|² = 1, so z⁻¹ = z̄/1 = z̄. For example, if z = (3/5) + (4/5)i, then |z| = 1 and both z⁻¹ and z̄ equal (3/5) - (4/5)i."
//   },
//   obj8: {
//     question: "How is division related to multiplicative inverse?",
//     answer: "Division is multiplication by the inverse: z₁/z₂ = z₁ · z₂⁻¹. Substituting the formula gives z₁/z₂ = z₁ · z̄₂/|z₂|² = (z₁ · z̄₂)/|z₂|². This is the standard method for dividing complex numbers."
//   },
//   obj9: {
//     question: "What is double inversion?",
//     answer: "Double inversion returns the original: (z⁻¹)⁻¹ = z. Taking the multiplicative inverse twice leaves the number unchanged. If w is the inverse of z, then z is the inverse of w."
//   },
//   obj10: {
//     question: "Do inversion and conjugation commute?",
//     answer: "Yes. The order does not matter: (z̄)⁻¹ = (z⁻¹)̄. You can conjugate first then invert, or invert first then conjugate — the result is the same."
//   },
//   obj11: {
//     question: "What is the inverse of a product?",
//     answer: "The inverse of a product is the product of the inverses: (z₁ · z₂)⁻¹ = z₁⁻¹ · z₂⁻¹. To invert a product, invert each factor. Order does not matter since multiplication is commutative."
//   },
//   obj12: {
//     question: "Is the multiplicative inverse unique?",
//     answer: "Yes. Every nonzero complex number has exactly one multiplicative inverse. If two numbers both satisfy z · w = 1, they must be equal. This uniqueness justifies the notation z⁻¹ and 1/z."
//   },
//   obj13: {
//     question: "What is a common mistake when finding the inverse?",
//     answer: "A common error is treating 1/(a + bi) as 1/a + 1/bi, inverting each part separately. This is wrong. The correct method multiplies by the conjugate: 1/(a + bi) = (a - bi)/(a² + b²)."
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Multiplicative Inverse of Complex Numbers",
//     "description": "Learn the multiplicative inverse of complex numbers: formula z⁻¹ = z̄/|z|², geometric meaning, properties, comparison with conjugate, connection to division, and why zero has no inverse.",
//     "url": "https://www.learnmathclass.com/complex-numbers/multiplicative-inverse",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Multiplicative Inverse of Complex Numbers"
//     },
//     "teaches": [
//       "Definition of multiplicative inverse: z⁻¹ = z̄/|z|²",
//       "Derivation using conjugate multiplication",
//       "Geometric interpretation: modulus inverts, argument negates",
//       "Properties: double inversion, products, conjugation",
//       "Difference between inverse and conjugate",
//       "Why zero has no multiplicative inverse",
//       "Connection between division and multiplicative inverse",
//       "Worked examples of z⁻¹ across representative complex numbers"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Complex Numbers",
//         "item": "https://www.learnmathclass.com/complex-numbers"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Multiplicative Inverse",
//         "item": "https://www.learnmathclass.com/complex-numbers/multiplicative-inverse"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }




//   return {
//   props:{
//     sectionsContent,
//     introContent,
//     obj4Table,
//     obj6Table,
//     obj7Table,
//     obj11Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Multiplicative Inverse: Reciprocal of ℂ | Learn Math Class",
//       description: "Learn the multiplicative inverse of complex numbers: formula z⁻¹ = z̄/|z|², geometric meaning, properties, comparison with conjugate, connection to division, and why zero has no inverse.",
//       keywords: keyWords.join(", "),
//       url: "/complex-numbers/multiplicative-inverse",
//       name: "Multiplicative Inverse of Complex Numbers"
//     },
//   }
// }
//    }

// export default function MultiplicativeInversePage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj4Table,
//   obj6Table,
//   obj7Table,
//   obj11Table,
//   summaryTable,
//   faqQuestions,
//   schemas,
// }) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.notation.title,
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.notation.title}
//             lead={sectionsContent.notation.lead}
//             inherited={sectionsContent.notation.inherited}
//             entries={sectionsContent.notation.entries}
//             symbolsHref={sectionsContent.notation.symbolsHref}
//             symbolsLabel={sectionsContent.notation.symbolsLabel}
//             parentHref={sectionsContent.notation.parentHref}
//             parentLabel={sectionsContent.notation.parentLabel}
//             theme={'navy'}
//           />,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//           <div
//             key={'obj6-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj6Table }}
//           />,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//           <div
//             key={'obj7-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj7Table }}
//           />,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           <div
//             key={'obj11-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj11Table }}
//           />,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//           <div
//             key={'summary-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: summaryTable }}
//           />,
//         ]
//     },
// ]

//   return (
//    <>
  

// <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>

//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Multiplicative Inverse of a Complex Number</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//      showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "siblings"
//          secondaryNavTitle="More in Complex Numbers"
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//     <KeyTermsCard
//            id="0"
//            title={sectionsContent.obj0.title}
//            content={sectionsContent.obj0.content}
//            after={sectionsContent.obj0.after}
//            variant="light"
//          />
//    <br/>
//    <Sections sections={genericSections.slice(1)}
  
//    />
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import deMoivreDiagrams from '@/app/components/calculators/complex-numbers/deMoivreDiagrams'
import complexDivisionDiagrams from '@/app/components/calculators/complex-numbers/complexDivisionDiagrams'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'



export async function getStaticProps(){
const keyWords = [
  "multiplicative inverse complex number",
  "reciprocal complex number",
  "complex number inverse formula",
  "one over z complex",
  "z inverse formula",
  "conjugate over modulus squared",
  "complex division inverse",
  "inverse complex number calculator",
  "z times z inverse equals one",
  "complex reciprocal",
  "multiplicative inverse definition",
  "invert complex number",
  "complex number one divided by",
  "inverse vs conjugate",
  "unit circle inverse equals conjugate"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation: notation reference
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">Reads as</th>
      <th style="${tableHeaders.aggregation}">Note / when used</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z⁻¹</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"z to the negative one"</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">algebraic; parallels powers z², z³, … and extends naturally to z⁻ⁿ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"one over z"</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fraction notation; emphasizes division</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a + bi)⁻¹</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of the whole expression</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always parenthesize compound bases; <em>a + bi⁻¹</em> would mean a + 1⁄(bi)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 ⁄ (a + bi)</td>
      <td style="padding: 12px 15px; color: #34495e;">"one over the whole denominator"</td>
      <td style="padding: 12px 15px; color: #34495e;">parenthesize the denominator; <em>1⁄a + bi</em> would mean (1⁄a) + bi</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — aggregation: properties of the multiplicative inverse
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Property</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Double inversion</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z⁻¹)⁻¹ = z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverting twice returns the original number</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse of a product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z₁ · z₂)⁻¹ = z₁⁻¹ · z₂⁻¹</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">to invert a product, invert each factor</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commute with conjugation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z̄)⁻¹ = <span style="text-decoration: overline;">z⁻¹</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate-then-invert equals invert-then-conjugate</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modulus inverts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z⁻¹| = 1 ⁄ |z|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distance from origin flips reciprocally</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Argument negates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arg(z⁻¹) = −arg(z)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direction reflects across the real axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Powers and negative exponents</td>
      <td style="padding: 12px 15px; color: #34495e;">(zⁿ)⁻¹ = (z⁻¹)ⁿ = z⁻ⁿ</td>
      <td style="padding: 12px 15px; color: #34495e;">negative exponents behave consistently for complex bases</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — comparison: inverse vs conjugate
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Conjugate&nbsp;&nbsp;z̄</th>
      <th style="${tableHeaders.comparison}">Multiplicative inverse&nbsp;&nbsp;z⁻¹</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Formula (for z = a + bi)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a − bi</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − bi) ⁄ (a² + b²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real part</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a (unchanged)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ⁄ (a² + b²)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Imaginary part</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−b ⁄ (a² + b²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modulus</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z̄| = |z|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z⁻¹| = 1 ⁄ |z|</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Geometry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection across the real axis (same circle)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection + rescale to a different circle</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Defined for which z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every z (including 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every z ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">When they coincide</td>
      <td colspan="2" style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">z⁻¹ = z̄ if and only if |z| = 1 (on the unit circle)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Example (z = 3 + 4i)</td>
      <td style="padding: 12px 15px; color: #34495e;">3 − 4i</td>
      <td style="padding: 12px 15px; color: #34495e;">(3 − 4i) ⁄ 25 = 3⁄25 − (4⁄25)i</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — aggregation: common mistakes
  const obj11Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Mistake</th>
      <th style="${tableHeaders.aggregation}">Wrong</th>
      <th style="${tableHeaders.aggregation}">Correct</th>
      <th style="${tableHeaders.aggregation}">Why</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverting componentwise</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (3 + 2i) = 1⁄3 + (1⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ (3 + 2i) = (3 − 2i) ⁄ 13</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the inverse of a sum is not the sum of inverses</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign error in |z|²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">for 3 − 4i: 9 − 16 = −7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">9 + 16 = 25</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z|² = a² + b² is always a sum; signs in z don't affect it</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing z⁻¹ with −z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of 2 + i is −2 − i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of 2 + i is (2 − i) ⁄ 5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−z is the additive inverse; z⁻¹ is the multiplicative inverse</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing z⁻¹ with z̄</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">for 3 + 4i: z⁻¹ = 3 − 4i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z⁻¹ = (3 − 4i) ⁄ 25</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z⁻¹ = z̄ ⁄ |z|² — must divide by the modulus squared</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Leaving a complex denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">(2 + 3i) ⁄ (1 − i) as final answer</td>
      <td style="padding: 12px 15px; color: #34495e;">multiply by (1 + i) ⁄ (1 + i) to rationalize</td>
      <td style="padding: 12px 15px; color: #34495e;">standard form a + bi requires a real denominator</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — summary capstone: worked examples reference card
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">z</th>
      <th style="${tableHeaders.summary}">z̄</th>
      <th style="${tableHeaders.summary}">|z|²</th>
      <th style="${tableHeaders.summary}">z⁻¹ = z̄ ⁄ |z|²</th>
      <th style="${tableHeaders.summary}">Geometric note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">5&nbsp;&nbsp;<span style="font-size: 13px;">(positive real)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">25</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">on the positive real axis; inverse on the same ray, closer to origin</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">2i&nbsp;&nbsp;<span style="font-size: 13px;">(pure imaginary)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−2i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−(1⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">on positive imaginary axis; inverse on negative imaginary axis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 + i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 − i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(1 − i) ⁄ 2 = 1⁄2 − (1⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">modulus √2; inverse on circle of radius 1⁄√2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">3 + 4i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 − 4i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">25</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(3 − 4i) ⁄ 25 = 3⁄25 − (4⁄25)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">modulus 5; inverse on circle of radius 1⁄5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(3⁄5) + (4⁄5)i&nbsp;&nbsp;<span style="font-size: 13px;">(on unit circle)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁄5 − (4⁄5)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁄5 − (4⁄5)i&nbsp;&nbsp;<span style="font-size: 13px;">(= z̄)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z| = 1, so inverse equals conjugate; both remain on the unit circle</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">−1 + 2i</td>
      <td style="padding: 12px 15px; color: #34495e;">−1 − 2i</td>
      <td style="padding: 12px 15px; color: #34495e;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">(−1 − 2i) ⁄ 5 = −1⁄5 − (2⁄5)i</td>
      <td style="padding: 12px 15px; color: #34495e;">second quadrant; inverse moves to third quadrant (reflection + rescale)</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose unchanged; obj12 added) ----------

//     const sectionsContent={

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — the number $z^{-1}$ satisfying $z \\cdot z^{-1} = 1$
// - [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — used in the formula $z^{-1} = \\overline{z}/|z|^2$
// - [Modulus](!/complex-numbers/definitions#modulus) — appears in the denominator of the inverse formula
// - [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — the additive counterpart`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },
//     obj1: {
//   title: `Multiplicative Inverse in Real Numbers`,
//   content: `For any nonzero real number $a$, the multiplicative inverse is $\\frac{1}{a}$, also written $a^{-1}$. The defining property is:

// $$a \\cdot \\frac{1}{a} = 1$$

// The product of a number and its multiplicative inverse always equals one.

// The inverse of $5$ is $\\frac{1}{5}$, since $5 \\cdot \\frac{1}{5} = 1$. The inverse of $-3$ is $-\\frac{1}{3}$, since $(-3) \\cdot \\left(-\\frac{1}{3}\\right) = 1$. The inverse of $\\frac{2}{3}$ is $\\frac{3}{2}$, since $\\frac{2}{3} \\cdot \\frac{3}{2} = 1$. Inversion swaps numerator and denominator.

// On the number line, the multiplicative inverse relates to distance from the origin in a reciprocal fashion. Numbers with absolute value greater than one have inverses with absolute value less than one, and vice versa. The number $5$ lies five units from the origin; its inverse $\\frac{1}{5}$ lies only one-fifth of a unit away. The number $\\frac{1}{4}$ lies close to the origin; its inverse $4$ lies far away. Numbers with absolute value exactly one — just $1$ and $-1$ — are their own multiplicative inverses.

// Zero has no multiplicative inverse. No real number $x$ satisfies $0 \\cdot x = 1$, because zero times anything is zero. This exception carries over to complex numbers.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
// obj2: {
//   title: `Multiplicative Inverse of a Complex Number`,
//   content: `For a nonzero complex number $z = a + bi$, the multiplicative inverse is the unique complex number $w$ satisfying $z \\cdot w = 1$. The formula is:

// $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$

// This expression uses the [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z} = a - bi$ in the numerator and the square of the [modulus](!/complex-numbers/absolute-value) $|z|^2 = a^2 + b^2$ in the denominator.

// Separating into real and imaginary parts:

// $$z^{-1} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$$

// Consider $z = 3 + 4i$. The conjugate is $\\overline{z} = 3 - 4i$ and the modulus squared is $|z|^2 = 9 + 16 = 25$. The multiplicative inverse is:

// $$z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$$

// Verification: $(3 + 4i)\\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = 1$.

// For $z = 2i$, a pure imaginary number, the conjugate is $-2i$ and the modulus squared is $4$. The inverse is $\\frac{-2i}{4} = -\\frac{1}{2}i$. For $z = 1 + i$, the conjugate is $1 - i$ and the modulus squared is $2$. The inverse is $\\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj3: {
//   title: `Why the Formula Works`,
//   content: `The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ is not arbitrary. It emerges from a natural strategy: eliminate the imaginary unit from the denominator.

// Starting with $\\frac{1}{z} = \\frac{1}{a + bi}$, the goal is to rewrite this with a real denominator. Multiply numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate):

// $$\\frac{1}{a + bi} = \\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi} = \\frac{a - bi}{(a + bi)(a - bi)}$$

// The denominator simplifies using the identity $z \\cdot \\overline{z} = |z|^2$:

// $$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$$

// This is a real number — the square of the modulus. The result:

// $$\\frac{1}{z} = \\frac{a - bi}{a^2 + b^2} = \\frac{\\overline{z}}{|z|^2}$$

// The key insight is that multiplying any complex number by its conjugate produces a real number. This property converts division by a complex number into division by a real number, which is straightforward.

// Verification confirms the formula works:

// $$z \\cdot z^{-1} = z \\cdot \\frac{\\overline{z}}{|z|^2} = \\frac{z \\cdot \\overline{z}}{|z|^2} = \\frac{|z|^2}{|z|^2} = 1$$

// The product of $z$ and $\\overline{z}$ in the numerator equals $|z|^2$, canceling the denominator exactly.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj4: {
//   title: `Notation`,
//   content: `The multiplicative inverse of $z$ appears in three equivalent notations: $z^{-1}$, $\\frac{1}{z}$, and $1/z$. All three denote the same complex number — the one satisfying $z \\cdot z^{-1} = 1$.

// The exponent notation $z^{-1}$ emphasizes the algebraic role of the inverse. It parallels the notation for powers: $z^2$ means $z \\cdot z$, and $z^{-1}$ means the number that "undoes" multiplication by $z$. This notation extends naturally to negative integer exponents, where $z^{-n} = (z^{-1})^n = (z^n)^{-1}$.

// The fraction notation $\\frac{1}{z}$ emphasizes division. It reads as "one divided by $z$" and connects to the broader concept of dividing complex numbers.

// Parentheses prevent ambiguity when the base is an expression. The inverse of $3 + 2i$ should be written $(3 + 2i)^{-1}$, not $3 + 2i^{-1}$. The latter means $3 + \\frac{1}{2}i = 3 + \\frac{1}{2}i$, something entirely different. Without parentheses, the exponent binds only to $i$.

// Similarly, $\\frac{1}{3 + 2i}$ is unambiguous, but inline expressions require care. Writing $1/3 + 2i$ means $\\frac{1}{3} + 2i$, not $\\frac{1}{3 + 2i}$. Use $1/(3 + 2i)$ or $(3 + 2i)^{-1}$ instead.

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Symbols and Notations](!/math-symbols/complex-numbers) →@

// `,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj5: {
//   title: `Geometric Interpretation`,
//   content: `The multiplicative inverse transforms both the distance and direction of a complex number in the [complex plane](!/complex-numbers/geometric-representation).

// The modulus inverts:

// $$|z^{-1}| = \\frac{1}{|z|}$$

// A number far from the origin has an inverse close to the origin, and vice versa. If $|z| = 5$, then $|z^{-1}| = \\frac{1}{5}$. If $|z| = \\frac{1}{3}$, then $|z^{-1}| = 3$. Numbers with modulus greater than one have inverses with modulus less than one. Numbers with modulus less than one have inverses with modulus greater than one.

// Numbers on the unit circle — those with $|z| = 1$ — have inverses also on the unit circle, since $|z^{-1}| = \\frac{1}{1} = 1$. These numbers stay the same distance from the origin after inversion.

// The argument negates:

// $$\\arg(z^{-1}) = -\\arg(z)$$

// If $z$ points in direction $\\theta$, then $z^{-1}$ points in direction $-\\theta$. A number in the upper half-plane has its inverse in the lower half-plane, and vice versa. A number at angle $\\frac{\\pi}{4}$ (northeast) has its inverse at angle $-\\frac{\\pi}{4}$ (southeast).

// Combining both effects: the multiplicative inverse reflects $z$ across the real axis and scales its distance from the origin by $\\frac{1}{|z|^2}$. Alternatively, in [trigonometric form](!/complex-numbers/trigonometric-form), if $z = r\\,\\text{cis}\\,\\theta$, then $z^{-1} = \\frac{1}{r}\\,\\text{cis}(-\\theta)$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj6: {
//   title: `Properties of Multiplicative Inverse`,
//   content: `The multiplicative inverse interacts with other operations in predictable ways. These properties parallel the corresponding rules for real numbers.

// Double inversion returns the original number:

// $$(z^{-1})^{-1} = z$$

// Taking the multiplicative inverse twice leaves $z$ unchanged. If $w$ is the inverse of $z$, then $z$ is the inverse of $w$.

// The inverse of a product equals the product of inverses:

// $$(z_1 \\cdot z_2)^{-1} = z_1^{-1} \\cdot z_2^{-1}$$

// To invert a product, invert each factor. Order does not matter since multiplication is commutative.

// Inversion and [conjugation](!/complex-numbers/complex-conjugate) commute:

// $$(\\overline{z})^{-1} = \\overline{z^{-1}}$$

// Conjugating first and then inverting produces the same result as inverting first and then conjugating.

// The modulus inverts:

// $$|z^{-1}| = \\frac{1}{|z|}$$

// The argument negates:

// $$\\arg(z^{-1}) = -\\arg(z)$$

// Powers and inverses interact naturally:

// $$(z^n)^{-1} = (z^{-1})^n = z^{-n}$$

// The inverse of $z^n$ equals the $n$th power of $z^{-1}$, and both equal $z^{-n}$. This consistency allows negative exponents to work seamlessly with complex numbers, just as they do with real numbers.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj7: {
//   title: `Multiplicative Inverse vs. Complex Conjugate`,
//   content: `Both the multiplicative inverse and the [complex conjugate](!/complex-numbers/complex-conjugate) involve transforming a complex number, but they serve different purposes and produce different results.

// The conjugate of $z = a + bi$ is $\\overline{z} = a - bi$. Only the imaginary part changes sign. The real part stays fixed.

// The multiplicative inverse of $z = a + bi$ is $z^{-1} = \\frac{a - bi}{a^2 + b^2}$. Both parts are divided by $a^2 + b^2$, and the imaginary part also changes sign.

// For $z = 3 + 4i$: the conjugate is $\\overline{z} = 3 - 4i$, while the inverse is $z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$. These differ by a factor of $25 = |z|^2$.

// Geometrically, conjugation reflects across the real axis while preserving the modulus: $|\\overline{z}| = |z|$. Inversion also reflects across the real axis but additionally scales: $|z^{-1}| = \\frac{1}{|z|}$. The conjugate stays on the same circle centered at the origin; the inverse moves to a different circle.

// The relationship between them is:

// $$z^{-1} = \\frac{\\overline{z}}{|z|^2}$$

// When are they equal? Only when $|z|^2 = 1$, meaning $|z| = 1$. On the unit circle, $z^{-1} = \\overline{z}$. For $z = \\frac{3}{5} + \\frac{4}{5}i$, which has modulus $1$, the inverse and conjugate are both $\\frac{3}{5} - \\frac{4}{5}i$. Off the unit circle, they always differ.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj8: {
//   title: `Why Zero Has No Multiplicative Inverse`,
//   content: `Zero is the sole complex number without a multiplicative inverse. No complex number $w$ satisfies $0 \\cdot w = 1$.

// The reason is fundamental: zero times any number equals zero, never one. Regardless of what $w$ might be, the product $0 \\cdot w$ vanishes. The equation $0 \\cdot w = 1$ has no solution.

// The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ reveals the problem algebraically. For $z = 0$, the modulus is $|z| = 0$, so $|z|^2 = 0$ appears in the denominator. Division by zero is undefined, and the formula produces no result.

// This exception is unavoidable in any field. The [field axioms](!/complex-numbers/properties) guarantee multiplicative inverses for all nonzero elements, but explicitly exclude zero. The additive identity cannot have a multiplicative inverse — the two roles are incompatible.

// The absence of $0^{-1}$ is why division by zero remains undefined for complex numbers, just as for real numbers. The expression $\\frac{z}{0}$ has no meaning. Any calculation that leads to division by zero has gone astray.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj9: {
//   title: `Connection to Division`,
//   content: `Division of complex numbers is multiplication by the multiplicative inverse:

// $$\\frac{z_1}{z_2} = z_1 \\cdot z_2^{-1}$$

// This definition reduces division to multiplication, which is already well understood. Every property of division follows from properties of multiplication combined with properties of the inverse.

// Substituting the formula for $z_2^{-1}$:

// $$\\frac{z_1}{z_2} = z_1 \\cdot \\frac{\\overline{z_2}}{|z_2|^2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$

// This is the standard method for dividing complex numbers: multiply the numerator by the conjugate of the denominator, then divide by the modulus squared.

// Consider $\\frac{5 + 3i}{1 + 2i}$. The conjugate of the denominator is $1 - 2i$, and $|1 + 2i|^2 = 1 + 4 = 5$. Computing:

// $$\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{5} = \\frac{5 - 10i + 3i - 6i^2}{5} = \\frac{5 - 7i + 6}{5} = \\frac{11 - 7i}{5} = \\frac{11}{5} - \\frac{7}{5}i$$

// The connection explains why division by zero is undefined: zero has no multiplicative inverse, so $z_1 \\cdot 0^{-1}$ is meaningless.

// For detailed coverage of division and other arithmetic, see [operations](!/complex-numbers/operations).`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj10: {
//   title: `Uniqueness`,
//   content: `Every nonzero complex number has exactly one multiplicative inverse.

// Existence is established by the formula: for any $z = a + bi$ with $z \\neq 0$, the number $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ satisfies $z \\cdot z^{-1} = 1$. Since $z \\neq 0$, at least one of $a$ or $b$ is nonzero, so $|z|^2 = a^2 + b^2 > 0$ and the formula is well-defined.

// Uniqueness follows from a short argument. Suppose $w_1$ and $w_2$ both satisfy $z \\cdot w_1 = 1$ and $z \\cdot w_2 = 1$. Then:

// $$w_1 = w_1 \\cdot 1 = w_1 \\cdot (z \\cdot w_2) = (w_1 \\cdot z) \\cdot w_2 = 1 \\cdot w_2 = w_2$$

// Any two multiplicative inverses of the same number must be equal.

// This uniqueness is guaranteed by the [field axioms](!/complex-numbers/properties). In any field, multiplicative inverses of nonzero elements are unique. The argument above uses only associativity of multiplication and the property of one as the multiplicative identity.

// Uniqueness justifies the notation $z^{-1}$ and $\\frac{1}{z}$. If multiple inverses existed, these expressions would be ambiguous. Because exactly one inverse exists, the notation refers to a single, well-defined complex number.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj11: {
//   title: `Common Mistakes`,
//   content: `Several errors recur when students compute multiplicative inverses of complex numbers.

// Forgetting to use the conjugate is common. Students attempt $\\frac{1}{3 + 2i} = \\frac{1}{3} + \\frac{1}{2}i$, treating real and imaginary parts separately. This is incorrect. The inverse of a sum is not the sum of inverses. The correct approach multiplies by $\\frac{3 - 2i}{3 - 2i}$ to obtain $\\frac{3 - 2i}{13}$.

// Errors in computing $|z|^2$ are frequent. For $z = 3 - 4i$, the modulus squared is $3^2 + (-4)^2 = 9 + 16 = 25$, not $9 - 16 = -7$. The formula is $a^2 + b^2$, always a sum, never a difference. Signs in the original number do not affect the addition.

// Confusing $z^{-1}$ with $-z$ conflates two unrelated operations. The multiplicative inverse $z^{-1}$ satisfies $z \\cdot z^{-1} = 1$. The [additive inverse](!/complex-numbers/additive-inverse) $-z$ satisfies $z + (-z) = 0$. For $z = 2 + i$, the multiplicative inverse is $\\frac{2 - i}{5}$; the additive inverse is $-2 - i$. These share nothing but a sign change in the imaginary part.

// Confusing $z^{-1}$ with $\\overline{z}$ is another pitfall. They are equal only on the unit circle. For $z = 3 + 4i$, the conjugate is $3 - 4i$ while the inverse is $\\frac{3 - 4i}{25}$. Forgetting to divide by $|z|^2$ leaves the answer off by a factor of $25$.

// Leaving a complex denominator unreduced is incomplete. A final answer like $\\frac{2 + 3i}{1 - i}$ requires rationalization. Multiply by $\\frac{1 + i}{1 + i}$ to obtain a real denominator and express the result in standard [algebraic form](!/complex-numbers/algebraic-form).`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     obj12:{
//       title:`Summary: Worked Examples of z⁻¹`,
//       content:`The formula $z^{-1} = \\overline{z}/|z|^2$ produces predictable patterns across different kinds of complex numbers. The table below works the inverse for several representative cases — a positive real, a pure imaginary, points off the unit circle, a point on the unit circle, and a point in the second quadrant — collecting $\\overline{z}$, $|z|^2$, $z^{-1}$, and a brief geometric note for each.`,
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


// formulas-optimized: v1 | 2026-06-11 | 2 callouts (obj2, obj5)
// Concept introduction (section 2, "Multiplicative Inverse of a Complex
// Number") — template C, failure first. Running instance: z = 3 + 4i, the
// section's own. Old obj2 text is kept in sectionsContent.obj2, unused; its
// four formula boxes and link, the pitfall aside and seven passages are
// carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciBreakTable = ciTableOpen(['piece of (3 + 4i)(1/3 + i/4)', 'value']) +
  ciRow(['3 · 1/3', '1']) +
  ciRow(['3 · i/4', '3i/4'], { shade: true }) +
  ciRow(['4i · 1/3', '4i/3']) +
  ciRow(['4i · i/4', 'i² = −1'], { shade: true }) +
  ciRow(['total', '25i/12, not 1'], { last: true, color: '#a4243b', cols: [1] }) +
  '</tbody></table>'
const ciSumTable = ciTableOpen(['', 'invert the whole', 'invert each piece']) +
  ciRow(['real: 2 + 3', '1/5 = 0.2', '1/2 + 1/3 ≈ 0.83']) +
  ciRow(['complex: 3 + 4i', '3/25 − 4i/25', '1/3 + i/4'], { shade: true, last: true }) +
  '</tbody></table>'

const sectionsContent={

    obj0: {
  title: `Key Terms`,
  content: `
- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — the number $z^{-1}$ satisfying $z \\cdot z^{-1} = 1$
- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — used in the formula $z^{-1} = \\overline{z}/|z|^2$
- [Modulus](!/complex-numbers/definitions#modulus) — appears in the denominator of the inverse formula
- [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — the additive counterpart`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
  link: '',
},
    obj1: {
  title: `Multiplicative Inverse in Real Numbers`,
  content: `For any nonzero real number $a$, the multiplicative inverse is $\\frac{1}{a}$, also written $a^{-1}$. The defining property is:

@academic[formula_callout:Multiplicative Inverse in Real Numbers
$$a \\cdot \\frac{1}{a} = 1$$]@

The product of a number and its multiplicative inverse always equals one.

The inverse of $5$ is $\\frac{1}{5}$, since $5 \\cdot \\frac{1}{5} = 1$. The inverse of $-3$ is $-\\frac{1}{3}$, since $(-3) \\cdot \\left(-\\frac{1}{3}\\right) = 1$. The inverse of $\\frac{2}{3}$ is $\\frac{3}{2}$, since $\\frac{2}{3} \\cdot \\frac{3}{2} = 1$. Inversion swaps numerator and denominator.

On the number line, the multiplicative inverse relates to distance from the origin in a reciprocal fashion. Numbers with absolute value greater than one have inverses with absolute value less than one, and vice versa. The number $5$ lies five units from the origin; its inverse $\\frac{1}{5}$ lies only one-fifth of a unit away. The number $\\frac{1}{4}$ lies close to the origin; its inverse $4$ lies far away. Numbers with absolute value exactly one — just $1$ and $-1$ — are their own multiplicative inverses.

Zero has no multiplicative inverse. No real number $x$ satisfies $0 \\cdot x = 1$, because zero times anything is zero. This exception carries over to complex numbers.`,
  before: ``,
  after: ``,
  link: '',
},
obj2: {
  title: `Multiplicative Inverse of a Complex Number`,
  content: `For a nonzero complex number $z = a + bi$, the multiplicative inverse is the unique complex number $w$ satisfying $z \\cdot w = 1$. The formula is:

@academic[formula_callout:Multiplicative Inverse
$$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$
/complex-numbers/formulas#multiplicative_inverse]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

This expression uses the [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z} = a - bi$ in the numerator and the square of the [modulus](!/complex-numbers/absolute-value) $|z|^2 = a^2 + b^2$ in the denominator.

Separating into real and imaginary parts:

@academic[formula_callout:Multiplicative Inverse of a Complex Number
$$z^{-1} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$$]@

Consider $z = 3 + 4i$. The conjugate is $\\overline{z} = 3 - 4i$ and the modulus squared is $|z|^2 = 9 + 16 = 25$. The multiplicative inverse is:

@academic[formula_callout:Multiplicative Inverse of a Complex Number
$$z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$$]@

Verification: $(3 + 4i)\\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = 1$.

@academic[pitfall,aside:true,width:35%:Inverting each part separately
Writing $\\frac{1}{3 + 4i}$ as $\\frac{1}{3} + \\frac{1}{4}i$ inverts the two parts on their own, and $(3 + 4i)\\left(\\frac{1}{3} + \\frac{1}{4}i\\right) = \\frac{25}{12}i$, not $1$. The conjugate formula gives $\\frac{3}{25} - \\frac{4}{25}i$.
[Read more](!#11)]@

For $z = 2i$, a pure imaginary number, the conjugate is $-2i$ and the modulus squared is $4$. The inverse is $\\frac{-2i}{4} = -\\frac{1}{2}i$. For $z = 1 + i$, the conjugate is $1 - i$ and the modulus squared is $2$. The inverse is $\\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Why the Formula Works`,
  content: `The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ is not arbitrary. It emerges from a natural strategy: eliminate the imaginary unit from the denominator.

Starting with $\\frac{1}{z} = \\frac{1}{a + bi}$, the goal is to rewrite this with a real denominator. Multiply numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate):

@academic[formula_callout:Why the Formula Works
$$\\frac{1}{a + bi} = \\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi} = \\frac{a - bi}{(a + bi)(a - bi)}$$]@

The denominator simplifies using the identity $z \\cdot \\overline{z} = |z|^2$:

@academic[formula_callout:Why the Formula Works
$$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$$]@

This is a real number — the square of the modulus. The result:

@academic[formula_callout:Why the Formula Works
$$\\frac{1}{z} = \\frac{a - bi}{a^2 + b^2} = \\frac{\\overline{z}}{|z|^2}$$]@

@academic[pitfall,aside:true,width:35%:Forgetting that i squared is −1
Expanding $(2 + 5i)(2 - 5i)$ to $4 - 25 = -21$ takes $(5i)^2$ to be $25$. Since $(5i)^2 = 25i^2 = -25$, the denominator is $4 + 25 = 29$, and $\\frac{1}{2 + 5i} = \\frac{2 - 5i}{29}$.
[Read more](!#11)]@

The key insight is that multiplying any complex number by its conjugate produces a real number. This property converts division by a complex number into division by a real number, which is straightforward.

Verification confirms the formula works:

@academic[formula_callout:Why the Formula Works
$$z \\cdot z^{-1} = z \\cdot \\frac{\\overline{z}}{|z|^2} = \\frac{z \\cdot \\overline{z}}{|z|^2} = \\frac{|z|^2}{|z|^2} = 1$$]@

The product of $z$ and $\\overline{z}$ in the numerator equals $|z|^2$, canceling the denominator exactly.`,
  before: ``,
  after: ``,
  link: '',
},

notation: {
  title: `Multiplicative Inverse Notation`,
  lead: `The corner exponent, its fraction twin, and the parentheses that keep both honest. The $-1$ superscript here joins a mark that crosses four topics — numbers, functions, trigonometry, matrices — each with its own meaning.`,
  inherited: `$z$, $a + bi$ and $\\mathbb{C}$ come from [complex numbers basics](!/complex-numbers/basics#notation), $i$ from [the imaginary unit](!/complex-numbers/imaginary-numbers#notation); the conjugate bar and the modulus in the formula $z^{-1} = \\bar{z}/|z|^2$ belong to [their](!/complex-numbers/complex-conjugate#notation) [pages](!/complex-numbers/absolute-value#notation).`,
  entries: [
    {
      id: 'z-inverse',
      tex: `$z^{-1}$`,
      read: `z to the minus one; z inverse`,
      means: `The $-1$ superscript as an exponent in earnest: $z^{-1}$ is the number with $z \\cdot z^{-1} = 1$, computed by $\\bar{z}/|z|^2$ — **Multiplicative Inverse of a Complex Number** above. The same corner mark [negative powers](!/algebra/powers/negative-exponents#notation) put on real numbers, now paid for by a conjugate.`,
      cases: `Extends along the exponent ladder — $z^{-n} = (z^{-1})^n = (z^n)^{-1}$; in polar dress the corner distributes: $z^{-1} = r^{-1}e^{-i\\theta}$, modulus inverted, [argument negated](!/complex-numbers/exponential-form#notation).`,
      confusedWith: `The conjugate. $z^{-1} = \\bar{z}/|z|^2$ makes them parallel, and on the unit circle equal — $|z| = 1$ forces $z^{-1} = \\bar{z}$; off the circle they differ in length, and **Multiplicative Inverse vs. Complex Conjugate** below separates them.`,
      sameGlyphElsewhere: `The corner changes job by base: undo-the-map on functions ($f^{-1}$), [matrix inversion](!/linear-algebra/matrix/inverse#notation) on $A^{-1}$ — on numbers alone it is honest arithmetic.`,
    },
    {
      id: 'one-over-z',
      tex: `$\\frac{1}{z}$`,
      read: `one over z`,
      means: `The division spelling of the same number, wearing the fraction bar — the notation of choice when the next step is [division](!/complex-numbers/operations), since $\\frac{w}{z} = w \\cdot \\frac{1}{z}$.`,
      cases: `Displayed fractions scope themselves — $\\frac{1}{3+2i}$ is unambiguous; inline, the slash binds tight: $1/3 + 2i$ means $\\frac{1}{3} + 2i$, so inline work writes $1/(3 + 2i)$.`,
      confusedWith: `A finished answer. $\\frac{1}{z}$ is a division still owed — evaluating it **requires** the conjugate trick of **Why the Formula Works** above; the bar promises the operation, not the result.`,
    },
    {
      id: 'inverse-parentheses',
      tex: `$(3 + 2i)^{-1}$`,
      read: `the inverse of three plus two i`,
      means: `Parentheses decide what the corner grips. $(3 + 2i)^{-1}$ inverts the whole number; unparenthesized, the exponent binds only to the nearest symbol — $3 + 2i^{-1} = 3 + 2(-i) = 3 - 2i$, a different number entirely.`,
      cases: `Named variables carry no ambiguity — $z^{-1}$ grips all of $z$; the hazard lives where literals are inverted inline, the same place the slash trap above strikes.`,
      confusedWith: `A decoration. The $-1$ is an operative exponent, not a label — dropping the parentheses does not roughly invert the number, it silently computes something else.`,
    },
  ],
  symbolsHref: `/math-symbols/complex-numbers`,
  symbolsLabel: `All complex number symbols`,
  parentHref: `/complex-numbers`,
  parentLabel: `Complex Numbers`,
},


obj5: {
  title: `Geometric Interpretation`,
  content: `The multiplicative inverse transforms both the distance and direction of a complex number in the [complex plane](!/complex-numbers/geometric-representation).

The modulus inverts:

@academic[formula_callout:Modulus of Inverse
$$|z^{-1}| = \\frac{1}{|z|}$$
/complex-numbers/formulas#modulus_of_inverse]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

A number far from the origin has an inverse close to the origin, and vice versa. If $|z| = 5$, then $|z^{-1}| = \\frac{1}{5}$. If $|z| = \\frac{1}{3}$, then $|z^{-1}| = 3$. Numbers with modulus greater than one have inverses with modulus less than one. Numbers with modulus less than one have inverses with modulus greater than one.

Numbers on the unit circle — those with $|z| = 1$ — have inverses also on the unit circle, since $|z^{-1}| = \\frac{1}{1} = 1$. These numbers stay the same distance from the origin after inversion.

The argument negates:

@academic[formula_callout:Geometric Interpretation
$$\\arg(z^{-1}) = -\\arg(z)$$]@

@academic[pitfall,aside:true,width:35%:Inverting only the modulus
For $|z| = 2$ and $\\arg(z) = \\frac{\\pi}{3}$, taking the number with modulus $\\frac{1}{2}$ and the same argument gives a product with $z$ of argument $\\frac{2\\pi}{3}$, which is not $1$. The argument negates too: $\\arg(z^{-1}) = -\\frac{\\pi}{3}$.
[Read more](!#11)]@

If $z$ points in direction $\\theta$, then $z^{-1}$ points in direction $-\\theta$. A number in the upper half-plane has its inverse in the lower half-plane, and vice versa. A number at angle $\\frac{\\pi}{4}$ (northeast) has its inverse at angle $-\\frac{\\pi}{4}$ (southeast).

Combining both effects: the multiplicative inverse reflects $z$ across the real axis and scales its distance from the origin by $\\frac{1}{|z|^2}$. Alternatively, in [trigonometric form](!/complex-numbers/trigonometric-form), if $z = r\\,\\text{cis}\\,\\theta$, then $z^{-1} = \\frac{1}{r}\\,\\text{cis}(-\\theta)$.`,
  before: ``,
  after: ``,
  link: '',
},


obj6: {
  title: `Properties of Multiplicative Inverse`,
  content: `The multiplicative inverse interacts with other operations in predictable ways. These properties parallel the corresponding rules for real numbers.

Double inversion returns the original number:

@academic[formula_callout:Properties of Multiplicative Inverse
$$(z^{-1})^{-1} = z$$]@

Taking the multiplicative inverse twice leaves $z$ unchanged. If $w$ is the inverse of $z$, then $z$ is the inverse of $w$.

The inverse of a product equals the product of inverses:

@academic[formula_callout:Properties of Multiplicative Inverse
$$(z_1 \\cdot z_2)^{-1} = z_1^{-1} \\cdot z_2^{-1}$$]@

To invert a product, invert each factor. Order does not matter since multiplication is commutative.

Inversion and [conjugation](!/complex-numbers/complex-conjugate) commute:

@academic[formula_callout:Properties of Multiplicative Inverse
$$(\\overline{z})^{-1} = \\overline{z^{-1}}$$]@

Conjugating first and then inverting produces the same result as inverting first and then conjugating.

The modulus inverts:

@academic[formula_callout:Modulus of Inverse
$$|z^{-1}| = \\frac{1}{|z|}$$
/complex-numbers/formulas#modulus_of_inverse]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The argument negates:

@academic[formula_callout:Properties of Multiplicative Inverse
$$\\arg(z^{-1}) = -\\arg(z)$$]@

Powers and inverses interact naturally:

@academic[formula_callout:Properties of Multiplicative Inverse
$$(z^n)^{-1} = (z^{-1})^n = z^{-n}$$]@

The inverse of $z^n$ equals the $n$th power of $z^{-1}$, and both equal $z^{-n}$. This consistency allows negative exponents to work seamlessly with complex numbers, just as they do with real numbers.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `Multiplicative Inverse vs. Complex Conjugate`,
  content: `Both the multiplicative inverse and the [complex conjugate](!/complex-numbers/complex-conjugate) involve transforming a complex number, but they serve different purposes and produce different results.

The conjugate of $z = a + bi$ is $\\overline{z} = a - bi$. Only the imaginary part changes sign. The real part stays fixed.

The multiplicative inverse of $z = a + bi$ is $z^{-1} = \\frac{a - bi}{a^2 + b^2}$. Both parts are divided by $a^2 + b^2$, and the imaginary part also changes sign.

For $z = 3 + 4i$: the conjugate is $\\overline{z} = 3 - 4i$, while the inverse is $z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$. These differ by a factor of $25 = |z|^2$.

@academic[pitfall,aside:true,width:35%:Stopping at the conjugate
Taking $z^{-1} = \\overline{z}$ for $z = 1 + 2i$ gives $1 - 2i$, but $(1 + 2i)(1 - 2i) = 5$, not $1$. Dividing by $|z|^2 = 5$ gives $z^{-1} = \\frac{1}{5} - \\frac{2}{5}i$.
[Read more](!#11)]@

Geometrically, conjugation reflects across the real axis while preserving the modulus: $|\\overline{z}| = |z|$. Inversion also reflects across the real axis but additionally scales: $|z^{-1}| = \\frac{1}{|z|}$. The conjugate stays on the same circle centered at the origin; the inverse moves to a different circle.

The relationship between them is:

@academic[formula_callout:Multiplicative Inverse vs. Complex Conjugate
$$z^{-1} = \\frac{\\overline{z}}{|z|^2}$$]@

When are they equal? Only when $|z|^2 = 1$, meaning $|z| = 1$.

@academic[rule_corollary_plain:On the unit circle, $z^{-1} = \\overline{z}$.]@

For $z = \\frac{3}{5} + \\frac{4}{5}i$, which has modulus $1$, the inverse and conjugate are both $\\frac{3}{5} - \\frac{4}{5}i$. Off the unit circle, they always differ.`,
  before: ``,
  after: ``,
  link: '',
},


obj8: {
  title: `Why Zero Has No Multiplicative Inverse`,
  content: `@academic[rule_theorem_plain:Zero is the sole complex number without a multiplicative inverse.]@

No complex number $w$ satisfies $0 \\cdot w = 1$.

The reason is fundamental: zero times any number equals zero, never one. Regardless of what $w$ might be, the product $0 \\cdot w$ vanishes. The equation $0 \\cdot w = 1$ has no solution.

@academic[fact,aside:true,width:35%:On a sphere, inverting is a half-turn
Complex analysis often adds one point $\\infty$ with $\\frac{1}{0} = \\infty$ and draws $\\mathbb{C}$ as a sphere with $\\infty$ at the top. There $z \\mapsto \\frac{1}{z}$ is a half-turn of the sphere about the axis through $1$ and $-1$, swapping $0$ and $\\infty$. The extended system is no field: $0 \\cdot \\infty$ stays undefined.]@

The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ reveals the problem algebraically. For $z = 0$, the modulus is $|z| = 0$, so $|z|^2 = 0$ appears in the denominator. Division by zero is undefined, and the formula produces no result.

This exception is unavoidable in any field. The [field axioms](!/complex-numbers/properties) guarantee multiplicative inverses for all nonzero elements, but explicitly exclude zero. The additive identity cannot have a multiplicative inverse — the two roles are incompatible.

The absence of $0^{-1}$ is why division by zero remains undefined for complex numbers, just as for real numbers. The expression $\\frac{z}{0}$ has no meaning. Any calculation that leads to division by zero has gone astray.`,
  before: ``,
  after: ``,
  link: '',
},


obj9: {
  title: `Connection to Division`,
  content: `Division of complex numbers is multiplication by the multiplicative inverse:

@academic[formula_callout:Connection to Division
$$\\frac{z_1}{z_2} = z_1 \\cdot z_2^{-1}$$]@

This definition reduces division to multiplication, which is already well understood. Every property of division follows from properties of multiplication combined with properties of the inverse.

Substituting the formula for $z_2^{-1}$:

@academic[formula_callout:Connection to Division
$$\\frac{z_1}{z_2} = z_1 \\cdot \\frac{\\overline{z_2}}{|z_2|^2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$]@

This is the standard method for dividing complex numbers: multiply the numerator by the conjugate of the denominator, then divide by the modulus squared.

Consider $\\frac{5 + 3i}{1 + 2i}$. The conjugate of the denominator is $1 - 2i$, and $|1 + 2i|^2 = 1 + 4 = 5$. Computing:

@academic[formula_callout:Connection to Division
$$\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{5} = \\frac{5 - 10i + 3i - 6i^2}{5} = \\frac{5 - 7i + 6}{5} = \\frac{11 - 7i}{5} = \\frac{11}{5} - \\frac{7}{5}i$$]@

@academic[pitfall,aside:true,width:35%:Dividing by the modulus, not its square
Dividing $(5 + 3i)(1 - 2i) = 11 - 7i$ by $|1 + 2i| = \\sqrt{5}$ gives $\\frac{11 - 7i}{\\sqrt{5}}$, too long by a factor of $\\sqrt{5}$. The divisor is $|1 + 2i|^2 = 5$, so the quotient is $\\frac{11}{5} - \\frac{7}{5}i$.
[Read more](!#11)]@

The work splits into two products. The numerator $5 + 3i$ is multiplied by the conjugate $1 - 2i$, giving $11 - 7i$, and the denominator $1 + 2i$ is multiplied by the same conjugate, giving the real number $5$. Each part of $11 - 7i$ is then divided by that real number, and the quotient lands in standard form.

The connection explains why division by zero is undefined: zero has no multiplicative inverse, so $z_1 \\cdot 0^{-1}$ is meaningless.

For detailed coverage of division and other arithmetic, see [operations](!/complex-numbers/operations).`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Uniqueness`,
  content: `@academic[rule_theorem_plain:Every nonzero complex number has exactly one multiplicative inverse.]@

Existence is established by the formula: for any $z = a + bi$ with $z \\neq 0$, the number $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ satisfies $z \\cdot z^{-1} = 1$. Since $z \\neq 0$, at least one of $a$ or $b$ is nonzero, so $|z|^2 = a^2 + b^2 > 0$ and the formula is well-defined.

Uniqueness follows from a short argument. Suppose $w_1$ and $w_2$ both satisfy $z \\cdot w_1 = 1$ and $z \\cdot w_2 = 1$. Then:

@academic[formula_callout:Uniqueness
$$w_1 = w_1 \\cdot 1 = w_1 \\cdot (z \\cdot w_2) = (w_1 \\cdot z) \\cdot w_2 = 1 \\cdot w_2 = w_2$$]@

Any two multiplicative inverses of the same number must be equal.

This uniqueness is guaranteed by the [field axioms](!/complex-numbers/properties). In any field, multiplicative inverses of nonzero elements are unique. The argument above uses only associativity of multiplication and the property of one as the multiplicative identity.

Uniqueness justifies the notation $z^{-1}$ and $\\frac{1}{z}$. If multiple inverses existed, these expressions would be ambiguous. Because exactly one inverse exists, the notation refers to a single, well-defined complex number.`,
  before: ``,
  after: ``,
  link: '',
},


obj11: {
  title: `Common Mistakes`,
  content: `Several errors recur when students compute multiplicative inverses of complex numbers.

Forgetting to use the conjugate is common. Students attempt $\\frac{1}{3 + 2i} = \\frac{1}{3} + \\frac{1}{2}i$, treating real and imaginary parts separately. This is incorrect. The inverse of a sum is not the sum of inverses. The correct approach multiplies by $\\frac{3 - 2i}{3 - 2i}$ to obtain $\\frac{3 - 2i}{13}$.

Errors in computing $|z|^2$ are frequent. For $z = 3 - 4i$, the modulus squared is $3^2 + (-4)^2 = 9 + 16 = 25$, not $9 - 16 = -7$. The formula is $a^2 + b^2$, always a sum, never a difference. Signs in the original number do not affect the addition.

Confusing $z^{-1}$ with $-z$ conflates two unrelated operations. The multiplicative inverse $z^{-1}$ satisfies $z \\cdot z^{-1} = 1$. The [additive inverse](!/complex-numbers/additive-inverse) $-z$ satisfies $z + (-z) = 0$. For $z = 2 + i$, the multiplicative inverse is $\\frac{2 - i}{5}$; the additive inverse is $-2 - i$. These share nothing but a sign change in the imaginary part.

Confusing $z^{-1}$ with $\\overline{z}$ is another pitfall. They are equal only on the unit circle. For $z = 3 + 4i$, the conjugate is $3 - 4i$ while the inverse is $\\frac{3 - 4i}{25}$. Forgetting to divide by $|z|^2$ leaves the answer off by a factor of $25$.

Leaving a complex denominator unreduced is incomplete. A final answer like $\\frac{2 + 3i}{1 - i}$ requires rationalization. Multiply by $\\frac{1 + i}{1 + i}$ to obtain a real denominator and express the result in standard [algebraic form](!/complex-numbers/algebraic-form).

**Inverting only the modulus**

In polar form, the modulus of $z$ is replaced by its reciprocal, but the argument is copied unchanged. The result has the right distance from the origin and points in the wrong direction.

Wrong working: for $z = 2\\,\\text{cis}\\,\\frac{\\pi}{3}$, $z^{-1} = \\frac{1}{2}\\,\\text{cis}\\,\\frac{\\pi}{3}$.

Right working: the modulus inverts and the argument negates, so $z^{-1} = \\frac{1}{2}\\,\\text{cis}\\left(-\\frac{\\pi}{3}\\right)$. Then $z \\cdot z^{-1} = 2 \\cdot \\frac{1}{2}\\,\\text{cis}\\left(\\frac{\\pi}{3} - \\frac{\\pi}{3}\\right) = \\text{cis}\\,0 = 1$.

Why it happens: for real numbers the inverse is just the reciprocal, so the step is applied to the length alone. The arguments of real numbers, $0$ and $\\pi$, give the same direction when negated, so the angle never had to change before.

How to check: multiply the answer by $z$. Moduli multiply and arguments add, so the wrong answer gives $2 \\cdot \\frac{1}{2}\\,\\text{cis}\\left(\\frac{\\pi}{3} + \\frac{\\pi}{3}\\right) = \\text{cis}\\,\\frac{2\\pi}{3}$, not $1$.

**Dividing by the modulus, not its square**

The conjugate method divides by $|z|^2$, but the denominator is written as $|z|$, the modulus itself. The result points in the right direction but has the wrong length.

Wrong working: $\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{|1 + 2i|} = \\frac{11 - 7i}{\\sqrt{5}}$.

Right working: $(1 + 2i)(1 - 2i) = 1 + 4 = 5 = |1 + 2i|^2$, so $\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{5} = \\frac{11 - 7i}{5} = \\frac{11}{5} - \\frac{7}{5}i$.

Why it happens: the modulus is the quantity usually named and computed, and the square is easy to lose next to $\\sqrt{a^2 + b^2}$. Multiplying the denominator by its conjugate gives $a^2 + b^2$ itself, with no square root.

How to check: multiply the answer by the denominator; it must give the numerator back. $\\left(\\frac{11}{5} - \\frac{7}{5}i\\right)(1 + 2i) = \\frac{11}{5} + \\frac{22}{5}i - \\frac{7}{5}i - \\frac{14}{5}i^2 = 5 + 3i$, while the wrong answer gives $\\frac{(11 - 7i)(1 + 2i)}{\\sqrt{5}} = \\frac{25 + 15i}{\\sqrt{5}} = \\sqrt{5}\\,(5 + 3i)$.`,
  before: ``,
  after: ``,
  link: '',
},
    obj12:{
      title:`Summary: Worked Examples of z⁻¹`,
      content:`The formula $z^{-1} = \\overline{z}/|z|^2$ produces predictable patterns across different kinds of complex numbers. The table below works the inverse for several representative cases — a positive real, a pure imaginary, points off the unit circle, a point on the unit circle, and a point in the second quadrant — collecting $\\overline{z}$, $|z|^2$, $z^{-1}$, and a brief geometric note for each.`,
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
  
    },
  
    faq: {
      title: `Multiplicative Inverse FAQ`,
    },
  }

  const introContent = {
  id: "intro",
  title: "The Number That Cancels Through Multiplication",
  content: `Every nonzero complex number has a counterpart that, when multiplied by it, produces one. This counterpart is called the multiplicative inverse. Unlike the [additive inverse](!/complex-numbers/additive-inverse), which simply negates both components, the multiplicative inverse requires a formula involving the [conjugate](!/complex-numbers/complex-conjugate) and [modulus](!/complex-numbers/absolute-value). Understanding this inverse clarifies the nature of division and completes the arithmetic structure of complex numbers.`
}


const faqQuestions = {
  obj1: {
    question: "Why does the formula for the inverse of a complex number use the conjugate?",
    answer: "Because a number times its conjugate is real, which clears i out of the denominator. Multiplying top and bottom of one over z by the conjugate leaves the value unchanged while turning the bottom into the squared modulus, a plain real number the components can then be divided by.",
    sectionId: "3"
  },
  obj2: {
    question: "What is the geometric meaning of the multiplicative inverse?",
    answer: "It inverts the distance and negates the angle. A point twice as far from the origin has an inverse half as far, and the inverse sits on the opposite side of the real axis. Points on the unit circle are the exception: their inverse is simply their conjugate, since the distance is already one.",
    sectionId: "5"
  },
  obj3: {
    question: "Why does zero have no multiplicative inverse?",
    answer: "Because the defining requirement is that a number times its inverse gives one, and zero times anything is zero. No complex number can rescue that. The formula shows the same obstruction from another angle: it divides by the squared modulus, which is zero exactly when the number is zero.",
    sectionId: "8"
  },
  obj4: {
    question: "What is the inverse of a product?",
    answer: "The product of the inverses, in either order, since complex multiplication commutes. This mirrors the real case and follows from the moduli multiplying and the arguments adding, so inverting reverses both. It is what makes dividing by a product the same as dividing by each factor in turn. Try it on the [division explorer](!/complex-numbers/visual-tools/division).",
    sectionId: "6"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Multiplicative Inverse of Complex Numbers",
    "description": "Learn the multiplicative inverse of complex numbers: formula z⁻¹ = z̄/|z|², geometric meaning, properties, comparison with conjugate, connection to division, and why zero has no inverse.",
    "url": "https://www.learnmathclass.com/complex-numbers/multiplicative-inverse",
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
      "name": "Multiplicative Inverse of Complex Numbers"
    },
    "teaches": [
      "Definition of multiplicative inverse: z⁻¹ = z̄/|z|²",
      "Derivation using conjugate multiplication",
      "Geometric interpretation: modulus inverts, argument negates",
      "Properties: double inversion, products, conjugation",
      "Difference between inverse and conjugate",
      "Why zero has no multiplicative inverse",
      "Connection between division and multiplicative inverse",
      "Worked examples of z⁻¹ across representative complex numbers"
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
        "name": "Multiplicative Inverse",
        "item": "https://www.learnmathclass.com/complex-numbers/multiplicative-inverse"
      }
    ]
  }

}





  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.

  const conceptIntroFigures = {
    breakTable: ciBreakTable,
    sumTable: ciSumTable,
  };

  const demoUnits = {
    geom: demoUnitFrame({
      svg: deMoivreDiagrams.inverse,
      caption: 'z = 3 + 4i and z&#8315;&#185; = 0.12 &#8722; 0.16i',
      text: 'The inverse points in the mirrored direction, argument &#8722;&#952;, and its length is the reciprocal 1/5 of the original 5, which is why it needs a zoom to be seen: the modulus inverts and the argument negates. That is the formula z&#8315;&#185; = z&#772;/|z|&#178; as a picture. Watch the inverse shrink as z grows on the',
      href: '/complex-numbers/visual-tools/demoivre-visualizer',
      linkText: 'De Moivre visualizer',
    }),
    division: demoUnitFrame({
      svg: complexDivisionDiagrams.general,
      caption: 'z&#8321;/z&#8322;: arguments subtract, moduli divide',
      text: 'The quotient sits at the angle &#952;&#8321; &#8722; &#952;&#8322; and at distance |z&#8321;|/|z&#8322;|: division undoes the rotation and the scaling that multiplication performs. Multiplying numerator and denominator by the conjugate is the algebra that produces this picture. Move the divisor and watch the quotient counter-rotate on the',
      href: '/complex-numbers/visual-tools/division',
      linkText: 'complex division tool',
    }),
    divByZero: demoUnitFrame({
      svg: complexDivisionDiagrams.divideByZero,
      caption: 'Dividing by zero: nothing to draw',
      text: 'The division visualizer with z&#8321; = 4 + 2i and the denominator z&#8322; set to 0. Every other quotient has a length |z&#8321;|/|z&#8322;| and an angle &#952;&#8321; &#8722; &#952;&#8322;; here the length would need a division by |z&#8322;| = 0 and z&#8322; has no angle at all, so the tool draws no quotient. Move z&#8322; off the origin on the',
      href: '/complex-numbers/visual-tools/division',
      linkText: 'complex division visualizer',
    }),
  };

  const complexInverseCases = {
    prefaceTitle: 'The modulus inverts',
    preface: 'The inverse of $z$ has modulus $\\dfrac{1}{|z|}$: a number far from the origin has an inverse close to it, and vice versa. Comparing $|z|$ with $1$ decides which.',
    conclusionTitle: 'The argument negates',
    conclusion: 'In every case $\\arg(z^{-1}) = -\\arg(z)$: the inverse reflects $z$ across the real axis and scales its distance by $\\dfrac{1}{|z|^2}$.',
    parent: {
      kicker: 'Multiplicative inverse',
      formula: '$|z^{-1}| = \\dfrac{1}{|z|}$',
      splitBy: '$|z|$ compared with $1$',
    },
    cases: [
      {
        id: 'far', condition: '$|z| > 1$',
        count: { n: '↓' },
        headline: 'Moves closer',
        desc: 'the inverse has modulus less than one',
        example: '$|z| = 5 \\Rightarrow |z^{-1}| = \\frac{1}{5}$',
      },
      {
        id: 'near', condition: '$|z| < 1$',
        count: { n: '↑' },
        headline: 'Moves farther out',
        desc: 'the inverse has modulus greater than one',
        example: '$|z| = \\frac{1}{3} \\Rightarrow |z^{-1}| = 3$',
      },
      {
        id: 'unit', condition: '$|z| = 1$',
        count: { n: '=' },
        headline: 'Stays on the unit circle',
        desc: 'the same distance from the origin after inversion',
      },
    ],
  };

  const realInverseCases = {
    prefaceTitle: 'Reciprocal distance',
    preface: 'For a nonzero real number $a$, the inverse $\\frac{1}{a}$ satisfies $a \\cdot \\frac{1}{a} = 1$. On the number line, its distance from the origin is the reciprocal of the distance of $a$.',
    conclusionTitle: 'Carries over',
    conclusion: 'The exception for zero carries over to complex numbers.',
    parent: {
      kicker: 'Inverse of a real number',
      formula: '$a \\cdot \\dfrac{1}{a} = 1$',
      splitBy: '$|a|$ compared with $1$',
    },
    cases: [
      {
        id: 'big', condition: '$|a| > 1$',
        count: { n: '↓' },
        headline: 'Inverse is closer to 0',
        example: '$5 \\to \\frac{1}{5}$',
      },
      {
        id: 'small', condition: '$0 < |a| < 1$',
        count: { n: '↑' },
        headline: 'Inverse is farther from 0',
        example: '$\\frac{1}{4} \\to 4$',
      },
      {
        id: 'one', condition: '$|a| = 1$',
        count: { n: '=' },
        headline: 'Its own inverse',
        desc: 'just $1$ and $-1$',
      },
      {
        id: 'zero', condition: '$a = 0$',
        count: { n: '✗' },
        headline: 'No inverse',
        desc: 'no real $x$ satisfies $0 \\cdot x = 1$',
      },
    ],
  };

  return {
  props:{
    realInverseCases,
    complexInverseCases,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj4Table,
    obj6Table,
    obj7Table,
    obj11Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Multiplicative Inverse: Reciprocal of ℂ | Learn Math Class",
      description: "Learn the multiplicative inverse of complex numbers: formula z⁻¹ = z̄/|z|², geometric meaning, properties, comparison with conjugate, connection to division, and why zero has no inverse.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/multiplicative-inverse",
      name: "Multiplicative Inverse of Complex Numbers"
    },
  }
}
   }

const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function MultiplicativeInversePage({realInverseCases, complexInverseCases, 
  seoData,
  sectionsContent,
  introContent,
  obj4Table,
  obj6Table,
  obj7Table,
  obj11Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 2 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `For real numbers, the inverse is a flipped fraction — so it seems natural to flip each part of a complex number.`,
        content: [
          `The inverse of $5$ is $\\frac{1}{5}$ and the inverse of $4$ is $\\frac{1}{4}$. A complex number like $3 + 4i$ is built from a $3$ and a $4$, so a sensible first guess is $\\frac{1}{3} + \\frac{1}{4}i$.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `Multiplying back shows the guess is wrong: the product is not 1.`,
        content: [
          `An inverse must multiply with $3 + 4i$ to give $1$. Expand the product piece by piece.`,
          ciTable('breakTable'),
          `@academic[pitfall,aside:true,width:35%:Inverting each part separately
Writing $\\frac{1}{3 + 4i}$ as $\\frac{1}{3} + \\frac{1}{4}i$ inverts the two parts on their own, and $(3 + 4i)\\left(\\frac{1}{3} + \\frac{1}{4}i\\right) = \\frac{25}{12}i$, not $1$. The conjugate formula gives $\\frac{3}{25} - \\frac{4}{25}i$.
[Read more](!#11)]@`,
        ],
      },
      {
        id: 'diagnosis',
        lead: `The failure was predictable: 3 + 4i is a sum, and a sum cannot be inverted piece by piece.`,
        content: [
          `The same thing happens with plain numbers. $\\frac{1}{2 + 3}$ is $\\frac{1}{5}$, not $\\frac{1}{2} + \\frac{1}{3}$. When two complex numbers are multiplied, every part meets every other part and $i \\cdot i$ turns into $-1$, so the real and imaginary parts cannot be handled one at a time. Any inverse has to be found for the number as a whole.`,
          ciTable('sumTable'),
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [multiplicative inverse](!/complex-numbers/definitions#multiplicative_inverse) of a nonzero complex number $z$, written $z^{-1}$ or $\\frac{1}{z}$, is the complex number $w$ with $z \\cdot w = 1$.`,
        formula: [
          `For a nonzero complex number $z = a + bi$, the multiplicative inverse is the unique complex number $w$ satisfying $z \\cdot w = 1$. The formula is:`,
          `@academic[formula_callout:Multiplicative Inverse
$$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$
/complex-numbers/formulas#multiplicative_inverse]@`,
          `@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@`,
          `This expression uses the [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z} = a - bi$ in the numerator and the square of the [modulus](!/complex-numbers/absolute-value) $|z|^2 = a^2 + b^2$ in the denominator.`,
          `Separating into real and imaginary parts:`,
          `@academic[formula_callout:Multiplicative Inverse of a Complex Number
$$z^{-1} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$$]@`,
        ],
        footer: `So $(3 + 4i)^{-1} = \\frac{3}{25} - \\frac{4}{25}i$, not $\\frac{1}{3} + \\frac{1}{4}i$.`,
      },
      {
        id: 'kind',
        lead: `z⁻¹ is again a complex number, worked out from the conjugate and the modulus.`,
        content: [
          `Consider $z = 3 + 4i$. The conjugate is $\\overline{z} = 3 - 4i$ and the modulus squared is $|z|^2 = 9 + 16 = 25$. The multiplicative inverse is:`,
          `@academic[formula_callout:Multiplicative Inverse of a Complex Number
$$z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$$]@`,
          `Verification: $(3 + 4i)\\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = 1$.`,
          `For $z = 2i$, a pure imaginary number, the conjugate is $-2i$ and the modulus squared is $4$. The inverse is $\\frac{-2i}{4} = -\\frac{1}{2}i$. For $z = 1 + i$, the conjugate is $1 - i$ and the modulus squared is $2$. The inverse is $\\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`,
        ],
      },
      {
        id: 'caveat',
        lead: `Read backwards, the definition is a test — and it shows why 0 is left out.`,
        content: `A number $w$ is the inverse of $z$ exactly when $z \\cdot w = 1$, so any answer can be checked by multiplying it back; the guess $\\frac{1}{3} + \\frac{1}{4}i$ fails that check, $\\frac{3}{25} - \\frac{4}{25}i$ passes it. The same test explains the exclusion: $0 \\cdot w = 0$ for every $w$, so no number passes it for $z = 0$, as the section on [why zero has no multiplicative inverse](!/complex-numbers/multiplicative-inverse#8) explains.`,
      },
      {
        id: 'exit',
        content: `The next section shows where the formula comes from; after it come the notation, the picture of the inverse, its properties, the comparison with the conjugate, zero, division and uniqueness.`,
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
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <DiagramFrame
            key={'obj1-diagram'}
            id="real-inverse-distance-cases"
            title="The inverse of a real number"
            source="/complex-numbers/multiplicative-inverse"
          >
            <CaseSplit data={realInverseCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          <ConceptIntro key={'obj2-intro'} data={conceptIntro} />,
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
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
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
                  <div key={'unit-geom'} dangerouslySetInnerHTML={{ __html: demoUnits.geom }} />,
          `Points inside the unit circle have inverses outside it, and the circle itself maps onto itself, although only 1 and -1 stay in place.`,
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
            id="complex-inverse-modulus-cases"
            title="The inverse of z: closer, farther or on the circle"
            source="/complex-numbers/multiplicative-inverse"
          >
            <CaseSplit data={complexInverseCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
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
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
          `@academic[punchline:The inverse and the conjugate always point the same way; they differ only in length, and agree only on the unit circle.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'unit-divByZero'} dangerouslySetInnerHTML={{ __html: demoUnits.divByZero }} />,
          `The same is true of 0⁻¹ = 1/0: with z₁ = 1 the figure stays empty, because no w gives 0 · w = 1.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
                  <div key={'unit-division'} dangerouslySetInnerHTML={{ __html: demoUnits.division }} />,
          `Every division is a multiplication by an inverse, which is why the two share one picture.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div
            key={'obj11-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj11Table }}
          />,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
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
        title:sectionsContent.faq.title,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Multiplicative Inverse of a Complex Number</h1>
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
   <Sections sections={genericSections.slice(1)}
  
   />
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}