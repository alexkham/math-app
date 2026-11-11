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

//  const keyWords = [
//   "exponential form complex numbers",
//   "Euler's formula",
//   "e to the i theta",
//   "Euler's identity",
//   "e^(iπ) + 1 = 0",
//   "complex number exponential notation",
//   "re^(iθ)",
//   "convert to exponential form",
//   "multiply complex exponential form",
//   "divide complex exponential form",
//   "complex number powers exponential",
//   "roots of complex numbers",
//   "Taylor series Euler formula",
//   "cis notation exponential",
//   "polar to exponential form"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj2 — aggregation/reference: canonical values of e^(iθ)
//   const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation} text-align: center;">θ</th>
//       <th style="${tableHeaders.aggregation}">eⁱᶿ via Euler's formula</th>
//       <th style="${tableHeaders.aggregation}">Cartesian a + bi</th>
//       <th style="${tableHeaders.aggregation}">Location on unit circle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos 0 + i sin 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive real axis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄6</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄6) + i sin(π⁄6)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√3⁄2 + (1⁄2)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">30° from positive real axis</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄4) + i sin(π⁄4)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√2⁄2 + (√2⁄2)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">45° (first quadrant diagonal)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄3) + i sin(π⁄3)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄2 + (√3⁄2)i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">60°</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄2) + i sin(π⁄2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive imaginary axis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos π + i sin π</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative real axis&nbsp;&nbsp;<span style="font-size: 13px;">(Euler's identity)</span></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3π⁄2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(3π⁄2) + i sin(3π⁄2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−i</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative imaginary axis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">2π</td>
//       <td style="padding: 12px 15px; color: #34495e;">cos 2π + i sin 2π</td>
//       <td style="padding: 12px 15px; color: #34495e;">1</td>
//       <td style="padding: 12px 15px; color: #34495e;">back to start; full rotation</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj5 — aggregation/process: conversion procedures both directions
//   const obj5Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Conversion</th>
//       <th style="${tableHeaders.aggregation}">Formulas</th>
//       <th style="${tableHeaders.aggregation}">Worked example</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic → Exponential&nbsp;&nbsp;<span style="font-size: 13px;">(a + bi → re&#x2071;&#x1D52;)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">
//         r = √(a² + b²)<br/>
//         θ = arctan(b ⁄ a), adjusted for quadrant<br/>
//         z = re&#x2071;&#x1D52;
//       </td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">
//         z = 1 + i<br/>
//         r = √(1² + 1²) = √2<br/>
//         θ = arctan(1) = π⁄4&nbsp;&nbsp;<span style="font-size: 13px;">(first quadrant)</span><br/>
//         <span style="font-weight: bold;">→ 1 + i = √2 · e&#x2071;⁽π/4⁾</span>
//       </td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Exponential → Algebraic&nbsp;&nbsp;<span style="font-size: 13px;">(re&#x2071;&#x1D52; → a + bi)</span></td>
//       <td style="padding: 12px 15px; color: #34495e;">
//         a = r · cos θ<br/>
//         b = r · sin θ<br/>
//         z = a + bi
//       </td>
//       <td style="padding: 12px 15px; color: #34495e;">
//         z = 4e&#x2071;⁽²π/3⁾<br/>
//         a = 4 · cos(2π⁄3) = 4 · (−1⁄2) = −2<br/>
//         b = 4 · sin(2π⁄3) = 4 · (√3⁄2) = 2√3<br/>
//         <span style="font-weight: bold;">→ 4e&#x2071;⁽²π/3⁾ = −2 + 2√3 i</span>
//       </td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — aggregation: the three cube roots of 8 worked out
//   const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation} text-align: center;">k</th>
//       <th style="${tableHeaders.aggregation}">Argument formula (φ + 2πk) ⁄ n</th>
//       <th style="${tableHeaders.aggregation}">Argument</th>
//       <th style="${tableHeaders.aggregation}">z_k exponential</th>
//       <th style="${tableHeaders.aggregation}">z_k algebraic</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0 + 0) ⁄ 3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 e&#x2071;⁽⁰⁾</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0 + 2π) ⁄ 3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2π⁄3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 e&#x2071;⁽²π/3⁾</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1 + √3 i</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">2</td>
//       <td style="padding: 12px 15px; color: #34495e;">(0 + 4π) ⁄ 3</td>
//       <td style="padding: 12px 15px; color: #34495e;">4π⁄3</td>
//       <td style="padding: 12px 15px; color: #34495e;">2 e&#x2071;⁽⁴π/3⁾</td>
//       <td style="padding: 12px 15px; color: #34495e;">−1 − √3 i</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — summary capstone: each operation in algebraic vs exponential
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Operation on z, w</th>
//       <th style="${tableHeaders.summary}">Algebraic form<br/><span style="font-weight: normal; font-size: 13px;">z = a + bi,&nbsp;w = c + di</span></th>
//       <th style="${tableHeaders.summary}">Exponential form<br/><span style="font-weight: normal; font-size: 13px;">z = r₁e&#x2071;⁽&#x1D52;¹⁾,&nbsp;w = r₂e&#x2071;⁽&#x1D52;²⁾</span></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplication&nbsp;&nbsp;z · w</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ac − bd) + (ad + bc)i&nbsp;&nbsp;<span style="font-size: 13px;">(FOIL + apply i² = −1)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁r₂ · e&#x2071;⁽&#x1D52;¹ ⁺ &#x1D52;²⁾&nbsp;&nbsp;<span style="font-size: 13px;">(moduli multiply, args add)</span></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Division&nbsp;&nbsp;z ⁄ w</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply num and denom by w̄, then expand</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(r₁ ⁄ r₂) · e&#x2071;⁽&#x1D52;¹ ⁻ &#x1D52;²⁾&nbsp;&nbsp;<span style="font-size: 13px;">(moduli divide, args subtract)</span></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power&nbsp;&nbsp;zⁿ&nbsp;&nbsp;<span style="font-size: 13px;">(integer n)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">binomial expansion + repeated i²-collapse</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁ⁿ · e&#x2071;⁽ⁿ&#x1D52;¹⁾&nbsp;&nbsp;<span style="font-size: 13px;">(modulus to nth power, arg × n; De Moivre)</span></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">n-th root&nbsp;&nbsp;<span style="font-size: 13px;">(zⁿ = w)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no clean closed-form method</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₂&#xB9;&#x141;ⁿ · e&#x2071;⁽&#x1D52;² ⁺ ²&#x3C0;&#x1D4F;⁾&#x141;ⁿ&nbsp;&nbsp;<span style="font-size: 13px;">for k = 0, 1, …, n − 1</span></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modulus&nbsp;&nbsp;|z|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(a² + b²)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁&nbsp;&nbsp;<span style="font-size: 13px;">(read directly)</span></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Argument&nbsp;&nbsp;arg(z)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan(b ⁄ a) with quadrant adjustment</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">θ₁&nbsp;&nbsp;<span style="font-size: 13px;">(read directly)</span></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Conjugate&nbsp;&nbsp;z̄</td>
//       <td style="padding: 12px 15px; color: #34495e;">a − bi</td>
//       <td style="padding: 12px 15px; color: #34495e;">r₁ · e&#x207B;&#x2071;&#x1D52;¹&nbsp;&nbsp;<span style="font-size: 13px;">(modulus same, argument negates)</span></td>
//     </tr>
//   </tbody>
// </table>
// `

//   // ---------- SECTIONS (original prose unchanged; obj11 added) ----------

// //     const sectionsContent={

// //   obj0: {
// //   title: `Key Terms`,
// //   content: `
// // - [Exponential Form](!/complex-numbers/definitions#exponential_form) — representation as $re^{i\\theta}$
// // - [Modulus](!/complex-numbers/definitions#modulus) — the scaling factor $r$
// // - [Argument](!/complex-numbers/definitions#argument) — the exponent angle $\\theta$
// // - [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form) — the expanded equivalent using $\\cos$ and $\\sin$
// // - [Roots of Unity](!/complex-numbers/definitions#roots_of_unity) — naturally expressed in exponential form`,
// //   before: ``,
// //   after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
// //   link: '',
// // },

// //     obj1: {
// //   title: `Euler's Formula`,
// //   before: ``,
// //   content: `In 1748, Leonhard Euler published a relationship that would become one of mathematics' most celebrated results:

// // $$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

// // The formula asserts an equality between an exponential expression and a trigonometric one. On the left, the base $e$ — the fundamental constant of calculus, approximately $2.71828$ — is raised to an imaginary power $i\\theta$. On the right, ordinary cosine and sine combine with the [imaginary unit](!/complex-numbers/imaginary-numbers) to form a complex number.

// // The equation holds for every real value of $\\theta$. When $\\theta = 0$, both sides equal $1$. When $\\theta = \\pi/2$, the left side is $e^{i\\pi/2}$ and the right side is $\\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$. The formula claims these are equal, and they are.

// // Euler's formula bridges two mathematical worlds. Exponential functions describe growth and decay — populations, radioactive isotopes, compound interest. Trigonometric functions describe oscillation and rotation — waves, circles, periodic phenomena. The formula reveals these as two faces of the same underlying structure, connected through the imaginary unit.

// // The significance extends beyond elegance. Euler's formula transforms complex arithmetic into exponential arithmetic, where the rules are simpler and more intuitive. It provides the foundation for the exponential form of complex numbers and enables computational techniques impossible with purely algebraic methods.`,
// //   after: ``,
// //   link: '',
// // },
   

// //     obj2: {
// //   title: `Understanding Euler's Formula`,
// //   before: ``,
// //   content: `Euler's formula is not an arbitrary definition but a theorem derivable from fundamental principles. The proof emerges from Taylor series — infinite polynomial expansions that represent functions as sums of powers.

// // The exponential function has the Taylor series:

// // $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

// // Substituting $x = i\\theta$:

// // $$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$$

// // The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and so on. Substituting:

// // $$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$$

// // Separating real and imaginary parts:

// // $$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$$

// // The real part is the Taylor series for $\\cos\\theta$. The imaginary part is the Taylor series for $\\sin\\theta$. Therefore $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

// // Geometrically, as $\\theta$ increases from $0$, the point $e^{i\\theta}$ traces the unit circle in the [complex plane](!/complex-numbers/geometric-representation). At $\\theta = 0$, we start at $1$. At $\\theta = \\pi/2$, we reach $i$. At $\\theta = \\pi$, we arrive at $-1$. At $\\theta = 2\\pi$, we complete the circle and return to $1$. The exponential $e^{i\\theta}$ parametrizes circular motion.`,
// //   after: ``,
// //   link: '',
// // },
 

// //     obj3: {
// //   title: `Euler's Identity`,
// //   before: ``,
// //   content: `A special case of Euler's formula achieves legendary status. Substituting $\\theta = \\pi$:

// // $$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$$

// // Rearranging:

// // $$e^{i\\pi} + 1 = 0$$

// // This equation — Euler's identity — connects five of mathematics' most fundamental constants in a single statement. The number $e$, base of natural logarithms and central to calculus. The number $i$, foundation of complex arithmetic. The number $\\pi$, ratio of circumference to diameter and key to circular geometry. The number $1$, the multiplicative identity. The number $0$, the additive identity.

// // Each constant emerged from different mathematical needs: $e$ from growth and limits, $i$ from algebraic completeness, $\\pi$ from measurement of circles, $1$ and $0$ from the structure of arithmetic itself. That a single equation links all five suggests deep unity beneath apparently disparate branches of mathematics.

// // Mathematicians and physicists routinely cite Euler's identity as the most beautiful formula ever discovered. Richard Feynman called it "the most remarkable formula in mathematics." The equation appears on countless posters, t-shirts, and tattoos — a rare piece of abstract mathematics that captures popular imagination.

// // Beyond aesthetics, the identity encodes practical information. It confirms that $e^{i\\pi} = -1$, useful whenever exponential and trigonometric expressions interact. It demonstrates that raising a positive real number to an imaginary power can produce a negative real result — a counterintuitive fact with computational consequences.`,
// //   after: ``,
// //   link: '',
// // },

   

// //     obj4: {
// //   title: `The Exponential Form of a Complex Number`,
// //   before: ``,
// //   content: `Euler's formula transforms the [trigonometric form](!/complex-numbers/trigonometric-form) into something more compact. Since $\\text{cis}\\theta = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$, any complex number $z = r\\text{cis}\\theta$ can be written:

// // $$z = re^{i\\theta}$$

// // Here $r = |z|$ is the [modulus](!/complex-numbers/absolute-value) and $\\theta = \\arg(z)$ is the argument. The exponential form packages both pieces of information into a single expression resembling a power.

// // The three representations of a complex number are equivalent:

// // $$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$

// // Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.

// // The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.

// // Every nonzero complex number has an exponential form. The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
// //   after: ``,
// //   link: '',
// // },
   
// //     obj5: {
// //   title: `Converting Between Forms`,
// //   before: ``,
// //   content: `Moving between [algebraic](!/complex-numbers/algebraic-form), trigonometric, and exponential forms requires computing modulus and argument or recovering real and imaginary parts.

// // **Algebraic to Exponential:**

// // Given $z = a + bi$, find $r$ and $\\theta$:

// // $$r = \\sqrt{a^2 + b^2}$$

// // $$\\theta = \\begin{cases} \\arctan(b/a) & \\text{if } a > 0 \\\\ \\arctan(b/a) + \\pi & \\text{if } a < 0, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & \\text{if } a < 0, b < 0 \\\\ \\pi/2 & \\text{if } a = 0, b > 0 \\\\ -\\pi/2 & \\text{if } a = 0, b < 0 \\end{cases}$$

// // Then write $z = re^{i\\theta}$.

// // Example: Convert $z = 1 + i$. The modulus is $r = \\sqrt{1 + 1} = \\sqrt{2}$. With $a = 1 > 0$ and $b = 1 > 0$, the argument is $\\theta = \\arctan(1) = \\pi/4$. Thus $1 + i = \\sqrt{2}e^{i\\pi/4}$.

// // **Exponential to Algebraic:**

// // Given $z = re^{i\\theta}$, compute:

// // $$a = r\\cos\\theta \\qquad b = r\\sin\\theta$$

// // Then write $z = a + bi$.

// // Example: Convert $z = 4e^{i(2\\pi/3)}$. The real part is $a = 4\\cos(2\\pi/3) = 4(-1/2) = -2$. The imaginary part is $b = 4\\sin(2\\pi/3) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$. Thus $4e^{i(2\\pi/3)} = -2 + 2\\sqrt{3}i$.

// // Both conversions are routine once the formulas are memorized. The exponential form serves computation; the algebraic form displays components explicitly.`,
// //   after: ``,
// //   link: '',
// // },
  

// //     obj6: {
// //   title: `Multiplication in Exponential Form`,
// //   before: ``,
// //   content: `Multiplying complex numbers in exponential form reduces to elementary exponent rules. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$:

// // $$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2} = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$

// // The moduli multiply: $|z_1 \\cdot z_2| = r_1r_2$. The arguments add: $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$.

// // This rule follows from the standard law of exponents: $e^a \\cdot e^b = e^{a+b}$. The complex setting changes nothing about how exponents combine.

// // Geometrically, multiplication scales and rotates. Multiplying by $z_2 = r_2e^{i\\theta_2}$ stretches lengths by factor $r_2$ and rotates counterclockwise by angle $\\theta_2$. Multiplying by $e^{i\\pi/2} = i$ rotates by $90°$ without changing length. Multiplying by $2$ doubles length without rotation. Multiplying by $2e^{i\\pi/4}$ doubles length and rotates $45°$.

// // Example: Compute $(3e^{i\\pi/6})(2e^{i\\pi/3})$.

// // Multiply moduli: $3 \\cdot 2 = 6$.
// // Add arguments: $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2$.

// // Result: $6e^{i\\pi/2} = 6i$.

// // Compare this to multiplying the equivalent algebraic forms and simplifying — the exponential approach is faster and less error-prone.`,
// //   after: ``,
// //   link: '',
// // },
   

// //     obj7: {
// //   title: `Division in Exponential Form`,
// //   before: ``,
// //   content: `Division mirrors multiplication with subtraction replacing addition. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$ with $z_2 \\neq 0$:

// // $$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot \\frac{e^{i\\theta_1}}{e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$

// // The moduli divide: $|z_1/z_2| = r_1/r_2$. The arguments subtract: $\\arg(z_1/z_2) = \\theta_1 - \\theta_2$.

// // The exponent law $e^a / e^b = e^{a-b}$ governs the calculation, just as with real exponentials.

// // Geometrically, dividing by $z_2$ shrinks by factor $1/r_2$ and rotates clockwise by angle $\\theta_2$ (equivalently, counterclockwise by $-\\theta_2$). Division undoes multiplication: if $w = z_1 \\cdot z_2$, then $z_1 = w/z_2$ recovers the original factor.

// // Example: Compute $\\frac{8e^{i(5\\pi/6)}}{2e^{i(\\pi/3)}}$.

// // Divide moduli: $8/2 = 4$.
// // Subtract arguments: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.

// // Result: $4e^{i\\pi/2} = 4i$.

// // In [algebraic form](!/complex-numbers/algebraic-form), this division would require multiplying by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator and simplifying — a lengthier process. Exponential form bypasses that machinery entirely.`,
// //   after: ``,
// //   link: '',
// // },
  

// //     obj8: {
// //   title: `Powers in Exponential Form`,
// //   before: ``,
// //   content: `Raising a complex number to a power becomes trivial in exponential form. For $z = re^{i\\theta}$ and any integer $n$:

// // $$z^n = (re^{i\\theta})^n = r^n \\cdot (e^{i\\theta})^n = r^n e^{in\\theta}$$

// // The modulus raises to the $n$-th power. The argument multiplies by $n$. Both operations are elementary.

// // This is [De Moivre's theorem](!/complex-numbers/demoivre-theorem) expressed in exponential notation. The trigonometric statement $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$ becomes the exponential statement $(e^{i\\theta})^n = e^{in\\theta}$, a direct consequence of the power rule for exponents.

// // Example: Compute $(1 + i)^{12}$.

// // Convert to exponential form: $1 + i = \\sqrt{2}e^{i\\pi/4}$.

// // Apply the power rule: $(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i \\cdot 3\\pi} = 64e^{i \\cdot 3\\pi}$.

// // Simplify the argument: $3\\pi = 2\\pi + \\pi$, so $e^{i \\cdot 3\\pi} = e^{i\\pi} = -1$.

// // Result: $64 \\cdot (-1) = -64$.

// // The computation required no binomial expansion, no tracking of $i$ powers, no collection of terms. Converting to exponential form, applying the power rule, and simplifying completed the calculation in a few lines.`,
// //   after: ``,
// //   link: '',
// // },
  

// //     obj9: {
// //   title: `Roots in Exponential Form`,
// //   before: ``,
// //   content: `Finding $n$-th roots inverts the power operation. Given $w = Re^{i\\phi}$, the solutions to $z^n = w$ are:

// // $$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n} \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

// // Each value of $k$ produces a distinct root. Beyond $k = n-1$, the arguments differ by full rotations of $2\\pi$, repeating previous roots.

// // All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle of that radius in the [complex plane](!/complex-numbers/geometric-representation). Their arguments differ by $2\\pi/n$, spacing them evenly around the circle. The roots form vertices of a regular $n$-gon.

// // Example: Find the cube roots of $8$.

// // Write $8 = 8e^{i \\cdot 0}$ (modulus $8$, argument $0$).

// // Apply the formula: $z_k = 8^{1/3} e^{i(0 + 2\\pi k)/3} = 2e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$.

// // $z_0 = 2e^{i \\cdot 0} = 2$
// // $z_1 = 2e^{i \\cdot 2\\pi/3} = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$
// // $z_2 = 2e^{i \\cdot 4\\pi/3} = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$

// // Three roots forming an equilateral triangle of radius $2$, one vertex at $2$ on the positive real axis.

// // The exponential formula makes root extraction systematic: convert to exponential form, apply the root formula, enumerate distinct values of $k$.`,
// //   after: ``,
// //   link: '',
// // },
   

// //     obj10: {
// //   title: `Why Exponential Form Matters`,
// //   before: ``,
// //   content: `The exponential representation of complex numbers is not merely a notational convenience — it fundamentally simplifies how we think about and compute with complex quantities.

// // **Computational Efficiency:** Multiplication becomes addition of exponents. Division becomes subtraction. Powers become multiplication by integers. Roots become division by integers. Every operation reduces to arithmetic on the modulus and argument, bypassing the algebraic expansion and simplification that [rectangular form](!/complex-numbers/algebraic-form) demands.

// // **Conceptual Unification:** Exponential form reveals that circular motion and exponential growth are manifestations of the same mathematical structure. A point rotating around the origin traces $e^{i\\theta}$ as $\\theta$ increases — circular motion encoded as an exponential. Conversely, the exponential function, when extended to imaginary inputs, produces rotation rather than growth.

// // **Foundation for Advanced Mathematics:** Fourier analysis decomposes signals into sums of complex exponentials $e^{i\\omega t}$, each representing a pure oscillation at frequency $\\omega$. Signal processing relies on this decomposition to filter, compress, and analyze audio, images, and communications. Quantum mechanics writes wave functions using complex exponentials, encoding the probability amplitudes that govern particle behavior.

// // The exponential form appears wherever oscillation, rotation, or periodic phenomena arise. Electrical engineers use it to analyze AC circuits. Physicists use it in wave equations. Mathematicians use it throughout complex analysis. Learning to think in exponential form equips you with a tool that extends far beyond the algebra of complex numbers into the mathematical description of the physical world.`,
// //   after: ``,
// //   link: '',
// // },
// //     obj11:{
// //       title:`Summary: Operations in Algebraic vs Exponential Form`,
// //       content:`The advantage of exponential form lies in computational simplicity — every operation that requires careful expansion in [algebraic form](!/complex-numbers/algebraic-form) reduces to elementary exponent arithmetic in exponential form. The table below collects each operation in both representations side by side, making the contrast explicit: where the algebraic column needs distribution, conjugates, or term-collection, the exponential column performs the same work via addition, subtraction, or multiplication of the argument $\\theta$.`,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
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


// // formulas-optimized: v1 | 2026-06-11 | 5 callouts (obj1, obj3, obj4, obj5, obj8)
// const sectionsContent={

//   obj0: {
//   title: `Key Terms`,
//   content: `
// - [Exponential Form](!/complex-numbers/definitions#exponential_form) — representation as $re^{i\\theta}$
// - [Modulus](!/complex-numbers/definitions#modulus) — the scaling factor $r$
// - [Argument](!/complex-numbers/definitions#argument) — the exponent angle $\\theta$
// - [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form) — the expanded equivalent using $\\cos$ and $\\sin$
// - [Roots of Unity](!/complex-numbers/definitions#roots_of_unity) — naturally expressed in exponential form`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },

//     obj1: {
//   title: `Euler's Formula`,
//   before: ``,
//   content: `In 1748, Leonhard Euler published a relationship that would become one of mathematics' most celebrated results:

// @academic[formula_callout:Euler's Formula
// $$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$
// /complex-numbers/formulas#eulers_formula]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// The formula asserts an equality between an exponential expression and a trigonometric one. On the left, the base $e$ — the fundamental constant of calculus, approximately $2.71828$ — is raised to an imaginary power $i\\theta$. On the right, ordinary cosine and sine combine with the [imaginary unit](!/complex-numbers/imaginary-numbers) to form a complex number.

// The equation holds for every real value of $\\theta$. When $\\theta = 0$, both sides equal $1$. When $\\theta = \\pi/2$, the left side is $e^{i\\pi/2}$ and the right side is $\\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$. The formula claims these are equal, and they are.

// Euler's formula bridges two mathematical worlds. Exponential functions describe growth and decay — populations, radioactive isotopes, compound interest. Trigonometric functions describe oscillation and rotation — waves, circles, periodic phenomena. The formula reveals these as two faces of the same underlying structure, connected through the imaginary unit.

// The significance extends beyond elegance. Euler's formula transforms complex arithmetic into exponential arithmetic, where the rules are simpler and more intuitive. It provides the foundation for the exponential form of complex numbers and enables computational techniques impossible with purely algebraic methods.`,
//   after: ``,
//   link: '',
// },
   

//     obj2: {
//   title: `Understanding Euler's Formula`,
//   before: ``,
//   content: `Euler's formula is not an arbitrary definition but a theorem derivable from fundamental principles. The proof emerges from Taylor series — infinite polynomial expansions that represent functions as sums of powers.

// The exponential function has the Taylor series:

// $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

// Substituting $x = i\\theta$:

// $$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$$

// The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and so on. Substituting:

// $$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$$

// Separating real and imaginary parts:

// $$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$$

// The real part is the Taylor series for $\\cos\\theta$. The imaginary part is the Taylor series for $\\sin\\theta$. Therefore $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

// Geometrically, as $\\theta$ increases from $0$, the point $e^{i\\theta}$ traces the unit circle in the [complex plane](!/complex-numbers/geometric-representation). At $\\theta = 0$, we start at $1$. At $\\theta = \\pi/2$, we reach $i$. At $\\theta = \\pi$, we arrive at $-1$. At $\\theta = 2\\pi$, we complete the circle and return to $1$. The exponential $e^{i\\theta}$ parametrizes circular motion.`,
//   after: ``,
//   link: '',
// },
 

//     obj3: {
//   title: `Euler's Identity`,
//   before: ``,
//   content: `A special case of Euler's formula achieves legendary status. Substituting $\\theta = \\pi$:

// $$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$$

// Rearranging:

// @academic[formula_callout:Euler's Identity
// $$e^{i\\pi} + 1 = 0$$
// /complex-numbers/formulas#eulers_identity]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// This equation — Euler's identity — connects five of mathematics' most fundamental constants in a single statement. The number $e$, base of natural logarithms and central to calculus. The number $i$, foundation of complex arithmetic. The number $\\pi$, ratio of circumference to diameter and key to circular geometry. The number $1$, the multiplicative identity. The number $0$, the additive identity.

// Each constant emerged from different mathematical needs: $e$ from growth and limits, $i$ from algebraic completeness, $\\pi$ from measurement of circles, $1$ and $0$ from the structure of arithmetic itself. That a single equation links all five suggests deep unity beneath apparently disparate branches of mathematics.

// Mathematicians and physicists routinely cite Euler's identity as the most beautiful formula ever discovered. Richard Feynman called it "the most remarkable formula in mathematics." The equation appears on countless posters, t-shirts, and tattoos — a rare piece of abstract mathematics that captures popular imagination.

// Beyond aesthetics, the identity encodes practical information. It confirms that $e^{i\\pi} = -1$, useful whenever exponential and trigonometric expressions interact. It demonstrates that raising a positive real number to an imaginary power can produce a negative real result — a counterintuitive fact with computational consequences.`,
//   after: ``,
//   link: '',
// },

   

//     obj4: {
//   title: `The Exponential Form of a Complex Number`,
//   before: ``,
//   content: `Euler's formula transforms the [trigonometric form](!/complex-numbers/trigonometric-form) into something more compact. Since $\\text{cis}\\theta = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$, any complex number $z = r\\text{cis}\\theta$ can be written:

// @academic[formula_callout:Exponential Form
// $$z = re^{i\\theta}$$
// /complex-numbers/formulas#exponential_form]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Here $r = |z|$ is the [modulus](!/complex-numbers/absolute-value) and $\\theta = \\arg(z)$ is the argument. The exponential form packages both pieces of information into a single expression resembling a power.

// The three representations of a complex number are equivalent:

// $$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$

// Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.

// The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.

// Every nonzero complex number has an exponential form. The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
//   after: ``,
//   link: '',
// },

// notation: {
//   title: `Exponential Form Notation`,
//   lead: `One mark does the work here: the imaginary exponent. This section owns its reading, the full form that carries a modulus in front, and the periodicity that makes exponents non-unique — the price of importing power rules into rotation.`,
//   inherited: `$z$, $a + bi$ and $\\mathbb{C}$ come from [complex numbers basics](!/complex-numbers/basics#notation), $i$ from [the imaginary unit](!/complex-numbers/imaginary-numbers#notation), $r$, $\\theta$, $\\arg$ and $\\operatorname{cis}$ from the [trigonometric form](!/complex-numbers/trigonometric-form#notation); the letter $e$ itself is a [reserved constant](!/algebra/powers/exponential-functions#notation).`,
//   entries: [
//     {
//       id: 'e-i-theta',
//       tex: `$e^{i\\theta}$`,
//       read: `e to the i theta`,
//       means: `A power with an imaginary exponent — defined, not computed: **Euler's Formula** above assigns it the value $\\cos\\theta + i\\sin\\theta$, and the notation is chosen precisely so the exponent rules keep working.`,
//       cases: `Always modulus $1$: $e^{i\\theta}$ walks the unit circle, $\\theta$ the arc walked. The exponent writes $i$ first — $e^{i\\theta}$ — echoing the [i-first order](!/complex-numbers/imaginary-numbers#notation) used whenever the coefficient is an expression.`,
//       alsoWritten: `$\\exp(i\\theta)$ — the [functional spelling](!/algebra/powers/exponential-functions#notation) of analysis and programming, obligatory once the exponent outgrows a superscript.`,
//       confusedWith: `A growth process. Real $e^x$ grows; an imaginary exponent rotates — larger $\\theta$ means more turning, never more magnitude.`,
//     },
//     {
//       id: 'r-e-i-theta',
//       tex: `$re^{i\\theta}$`,
//       read: `r e to the i theta`,
//       means: `The full form: size out front, direction in the exponent — $r = |z|$ from the [absolute value](!/complex-numbers/absolute-value), $\\theta = \\arg(z)$ from the [trigonometric form](!/complex-numbers/trigonometric-form#notation). The chain $a + bi = r\\operatorname{cis}\\theta = re^{i\\theta}$ of **The Exponential Form of a Complex Number** above closes the three-form family.`,
//       cases: `The sign lives in the exponent, never on $r$: $-2 = 2e^{i\\pi}$, not $(-2)e^{i0}$; pure imaginaries drop the coefficient entirely — $i = e^{i\\pi/2}$.`,
//       alsoWritten: `$Ae^{i\\omega t}$ — the physics and engineering costume: amplitude $A$, angular frequency $\\omega$, time $t$; the same mark running oscillations and waves.`,
//       confusedWith: `A merged exponent. Only the $e^{i\\theta}$ factor rotates; sliding $r$ into the exponent — $e^{ri\\theta}$ or $e^{r + i\\theta}$ — names a different number.`,
//     },
//     {
//       id: 'periodic-exponent',
//       tex: `$e^{i(\\theta + 2\\pi k)}$`,
//       read: `e to the i, theta plus two pi k`,
//       means: `The exponent is determined only up to full turns: $e^{i(\\theta + 2\\pi)} = e^{i\\theta}$. Equal values under visibly different exponents — the multivalued [argument](!/complex-numbers/trigonometric-form#notation) wearing exponential clothing.`,
//       cases: `Harmless in a single computation, load-bearing for roots: **Roots in Exponential Form** below finds all $n$ answers precisely by writing $z = re^{i(\\theta + 2\\pi k)}$ before dividing the exponent by $n$.`,
//       confusedWith: `Real-exponential injectivity. For real exponents, $e^{x_1} = e^{x_2}$ forces $x_1 = x_2$; with imaginary exponents that cancellation is invalid — silently "equating exponents" is how root solutions get lost.`,
//     },
//   ],
//   symbolsHref: `/math-symbols/complex-numbers`,
//   symbolsLabel: `All complex number symbols`,
//   parentHref: `/complex-numbers`,
//   parentLabel: `Complex Numbers`,
// },
   
//     obj5: {
//   title: `Converting Between Forms`,
//   before: ``,
//   content: `Moving between [algebraic](!/complex-numbers/algebraic-form), trigonometric, and exponential forms requires computing modulus and argument or recovering real and imaginary parts.

// **Algebraic to Exponential:**

// Given $z = a + bi$, find $r$ and $\\theta$:

// $$r = \\sqrt{a^2 + b^2}$$

// $$\\theta = \\begin{cases} \\arctan(b/a) & \\text{if } a > 0 \\\\ \\arctan(b/a) + \\pi & \\text{if } a < 0, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & \\text{if } a < 0, b < 0 \\\\ \\pi/2 & \\text{if } a = 0, b > 0 \\\\ -\\pi/2 & \\text{if } a = 0, b < 0 \\end{cases}$$

// Then write $z = re^{i\\theta}$.

// Example: Convert $z = 1 + i$. The modulus is $r = \\sqrt{1 + 1} = \\sqrt{2}$. With $a = 1 > 0$ and $b = 1 > 0$, the argument is $\\theta = \\arctan(1) = \\pi/4$. Thus $1 + i = \\sqrt{2}e^{i\\pi/4}$.

// **Exponential to Algebraic:**

// Given $z = re^{i\\theta}$, compute:

// @academic[formula_callout:Polar to Rectangular Conversion
// $$a = r\\cos\\theta, \\qquad b = r\\sin\\theta$$
// /complex-numbers/formulas#polar_to_rectangular_conversion]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Then write $z = a + bi$.

// Example: Convert $z = 4e^{i(2\\pi/3)}$. The real part is $a = 4\\cos(2\\pi/3) = 4(-1/2) = -2$. The imaginary part is $b = 4\\sin(2\\pi/3) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$. Thus $4e^{i(2\\pi/3)} = -2 + 2\\sqrt{3}i$.

// Both conversions are routine once the formulas are memorized. The exponential form serves computation; the algebraic form displays components explicitly.`,
//   after: ``,
//   link: '',
// },
  

//     obj6: {
//   title: `Multiplication in Exponential Form`,
//   before: ``,
//   content: `Multiplying complex numbers in exponential form reduces to elementary exponent rules. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$:

// $$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2} = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$

// The moduli multiply: $|z_1 \\cdot z_2| = r_1r_2$. The arguments add: $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$.

// This rule follows from the standard law of exponents: $e^a \\cdot e^b = e^{a+b}$. The complex setting changes nothing about how exponents combine.

// Geometrically, multiplication scales and rotates. Multiplying by $z_2 = r_2e^{i\\theta_2}$ stretches lengths by factor $r_2$ and rotates counterclockwise by angle $\\theta_2$. Multiplying by $e^{i\\pi/2} = i$ rotates by $90°$ without changing length. Multiplying by $2$ doubles length without rotation. Multiplying by $2e^{i\\pi/4}$ doubles length and rotates $45°$.

// Example: Compute $(3e^{i\\pi/6})(2e^{i\\pi/3})$.

// Multiply moduli: $3 \\cdot 2 = 6$.
// Add arguments: $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2$.

// Result: $6e^{i\\pi/2} = 6i$.

// Compare this to multiplying the equivalent algebraic forms and simplifying — the exponential approach is faster and less error-prone.`,
//   after: ``,
//   link: '',
// },
   

//     obj7: {
//   title: `Division in Exponential Form`,
//   before: ``,
//   content: `Division mirrors multiplication with subtraction replacing addition. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$ with $z_2 \\neq 0$:

// $$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot \\frac{e^{i\\theta_1}}{e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$

// The moduli divide: $|z_1/z_2| = r_1/r_2$. The arguments subtract: $\\arg(z_1/z_2) = \\theta_1 - \\theta_2$.

// The exponent law $e^a / e^b = e^{a-b}$ governs the calculation, just as with real exponentials.

// Geometrically, dividing by $z_2$ shrinks by factor $1/r_2$ and rotates clockwise by angle $\\theta_2$ (equivalently, counterclockwise by $-\\theta_2$). Division undoes multiplication: if $w = z_1 \\cdot z_2$, then $z_1 = w/z_2$ recovers the original factor.

// Example: Compute $\\frac{8e^{i(5\\pi/6)}}{2e^{i(\\pi/3)}}$.

// Divide moduli: $8/2 = 4$.
// Subtract arguments: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.

// Result: $4e^{i\\pi/2} = 4i$.

// In [algebraic form](!/complex-numbers/algebraic-form), this division would require multiplying by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator and simplifying — a lengthier process. Exponential form bypasses that machinery entirely.`,
//   after: ``,
//   link: '',
// },
  

//     obj8: {
//   title: `Powers in Exponential Form`,
//   before: ``,
//   content: `Raising a complex number to a power becomes trivial in exponential form. For $z = re^{i\\theta}$ and any integer $n$:

// @academic[formula_callout:Power in Polar Form
// $$z^n = r^n e^{in\\theta}$$
// /complex-numbers/formulas#power_in_polar_form]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// The modulus raises to the $n$-th power. The argument multiplies by $n$. Both operations are elementary.

// This is [De Moivre's theorem](!/complex-numbers/demoivre-theorem) expressed in exponential notation. The trigonometric statement $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$ becomes the exponential statement $(e^{i\\theta})^n = e^{in\\theta}$, a direct consequence of the power rule for exponents.

// Example: Compute $(1 + i)^{12}$.

// Convert to exponential form: $1 + i = \\sqrt{2}e^{i\\pi/4}$.

// Apply the power rule: $(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i \\cdot 3\\pi} = 64e^{i \\cdot 3\\pi}$.

// Simplify the argument: $3\\pi = 2\\pi + \\pi$, so $e^{i \\cdot 3\\pi} = e^{i\\pi} = -1$.

// Result: $64 \\cdot (-1) = -64$.

// The computation required no binomial expansion, no tracking of $i$ powers, no collection of terms. Converting to exponential form, applying the power rule, and simplifying completed the calculation in a few lines.`,
//   after: ``,
//   link: '',
// },
  

//     obj9: {
//   title: `Roots in Exponential Form`,
//   before: ``,
//   content: `Finding $n$-th roots inverts the power operation. Given $w = Re^{i\\phi}$, the solutions to $z^n = w$ are:

// $$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n} \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

// Each value of $k$ produces a distinct root. Beyond $k = n-1$, the arguments differ by full rotations of $2\\pi$, repeating previous roots.

// All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle of that radius in the [complex plane](!/complex-numbers/geometric-representation). Their arguments differ by $2\\pi/n$, spacing them evenly around the circle. The roots form vertices of a regular $n$-gon.

// Example: Find the cube roots of $8$.

// Write $8 = 8e^{i \\cdot 0}$ (modulus $8$, argument $0$).

// Apply the formula: $z_k = 8^{1/3} e^{i(0 + 2\\pi k)/3} = 2e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$.

// $z_0 = 2e^{i \\cdot 0} = 2$
// $z_1 = 2e^{i \\cdot 2\\pi/3} = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$
// $z_2 = 2e^{i \\cdot 4\\pi/3} = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$

// Three roots forming an equilateral triangle of radius $2$, one vertex at $2$ on the positive real axis.

// The exponential formula makes root extraction systematic: convert to exponential form, apply the root formula, enumerate distinct values of $k$.`,
//   after: ``,
//   link: '',
// },
   

//     obj10: {
//   title: `Why Exponential Form Matters`,
//   before: ``,
//   content: `The exponential representation of complex numbers is not merely a notational convenience — it fundamentally simplifies how we think about and compute with complex quantities.

// **Computational Efficiency:** Multiplication becomes addition of exponents. Division becomes subtraction. Powers become multiplication by integers. Roots become division by integers. Every operation reduces to arithmetic on the modulus and argument, bypassing the algebraic expansion and simplification that [rectangular form](!/complex-numbers/algebraic-form) demands.

// **Conceptual Unification:** Exponential form reveals that circular motion and exponential growth are manifestations of the same mathematical structure. A point rotating around the origin traces $e^{i\\theta}$ as $\\theta$ increases — circular motion encoded as an exponential. Conversely, the exponential function, when extended to imaginary inputs, produces rotation rather than growth.

// **Foundation for Advanced Mathematics:** Fourier analysis decomposes signals into sums of complex exponentials $e^{i\\omega t}$, each representing a pure oscillation at frequency $\\omega$. Signal processing relies on this decomposition to filter, compress, and analyze audio, images, and communications. Quantum mechanics writes wave functions using complex exponentials, encoding the probability amplitudes that govern particle behavior.

// The exponential form appears wherever oscillation, rotation, or periodic phenomena arise. Electrical engineers use it to analyze AC circuits. Physicists use it in wave equations. Mathematicians use it throughout complex analysis. Learning to think in exponential form equips you with a tool that extends far beyond the algebra of complex numbers into the mathematical description of the physical world.`,
//   after: ``,
//   link: '',
// },
//     obj11:{
//       title:`Summary: Operations in Algebraic vs Exponential Form`,
//       content:`The advantage of exponential form lies in computational simplicity — every operation that requires careful expansion in [algebraic form](!/complex-numbers/algebraic-form) reduces to elementary exponent arithmetic in exponential form. The table below collects each operation in both representations side by side, making the contrast explicit: where the algebraic column needs distribution, conjugates, or term-collection, the exponential column performs the same work via addition, subtraction, or multiplication of the argument $\\theta$.`,
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




//   const introContent = {
//   id: "intro",
//   title: "The Elegant Union of Exponentials and Circles",
//   content: `The [trigonometric form](!/complex-numbers/trigonometric-form) $r\\text{cis}\\theta$ simplifies multiplication and powers, but notation can be streamlined further. Euler's formula reveals that $e^{i\\theta}$ equals $\\cos\\theta + i\\sin\\theta$, allowing us to write any complex number as $z = re^{i\\theta}$. This exponential form inherits all the advantages of trigonometric representation while invoking the familiar rules of exponents — multiplication adds exponents, division subtracts them, and powers simply multiply.`
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is Euler's formula?",
//     answer: "Euler's formula states that e^(iθ) = cos θ + i sin θ for any real angle θ. It connects exponential functions with trigonometric functions through the imaginary unit, revealing that growth and oscillation are mathematically unified."
//   },
//   obj2: {
//     question: "How do you prove Euler's formula?",
//     answer: "Euler's formula is proven using Taylor series. Substitute iθ into the exponential series e^x = 1 + x + x²/2! + ..., then use the cyclic powers of i to separate real and imaginary parts. The real part becomes the cosine series, and the imaginary part becomes the sine series."
//   },
//   obj3: {
//     question: "What is Euler's identity?",
//     answer: "Euler's identity is e^(iπ) + 1 = 0, a special case of Euler's formula when θ = π. It connects five fundamental mathematical constants (e, i, π, 1, and 0) in a single equation, often called the most beautiful formula in mathematics."
//   },
//   obj4: {
//     question: "What is the exponential form of a complex number?",
//     answer: "The exponential form writes a complex number as z = re^(iθ), where r is the modulus (distance from origin) and θ is the argument (angle from positive real axis). It is equivalent to the trigonometric form z = r(cos θ + i sin θ) = r cis θ."
//   },
//   obj5: {
//     question: "How do you convert algebraic form to exponential form?",
//     answer: "For z = a + bi, calculate r = √(a² + b²) for the modulus and θ = arctan(b/a) adjusted for quadrant for the argument. Then write z = re^(iθ). For example, 1 + i = √2 · e^(iπ/4)."
//   },
//   obj6: {
//     question: "How do you convert exponential form to algebraic form?",
//     answer: "For z = re^(iθ), compute the real part a = r cos θ and imaginary part b = r sin θ. Then write z = a + bi. For example, 4e^(i·2π/3) = -2 + 2√3i."
//   },
//   obj7: {
//     question: "How do you multiply complex numbers in exponential form?",
//     answer: "To multiply z₁ = r₁e^(iθ₁) and z₂ = r₂e^(iθ₂), multiply the moduli and add the arguments: z₁·z₂ = (r₁r₂)e^(i(θ₁+θ₂)). The standard exponent rule e^a · e^b = e^(a+b) applies directly."
//   },
//   obj8: {
//     question: "How do you divide complex numbers in exponential form?",
//     answer: "To divide z₁ = r₁e^(iθ₁) by z₂ = r₂e^(iθ₂), divide the moduli and subtract the arguments: z₁/z₂ = (r₁/r₂)e^(i(θ₁-θ₂)). This follows from the exponent rule e^a / e^b = e^(a-b)."
//   },
//   obj9: {
//     question: "How do you raise a complex number to a power in exponential form?",
//     answer: "For z = re^(iθ) and integer n, apply the power rule: z^n = r^n · e^(inθ). The modulus raises to the nth power and the argument multiplies by n. This is De Moivre's theorem in exponential notation."
//   },
//   obj10: {
//     question: "How do you find the nth roots of a complex number?",
//     answer: "For w = Re^(iφ), the n roots are z_k = R^(1/n) · e^(i(φ + 2πk)/n) for k = 0, 1, ..., n-1. All roots have modulus R^(1/n) and are evenly spaced around a circle, separated by angle 2π/n."
//   },
//   obj11: {
//     question: "What does e^(iπ) equal?",
//     answer: "e^(iπ) = -1. By Euler's formula, e^(iπ) = cos π + i sin π = -1 + 0 = -1. This result, rearranged as e^(iπ) + 1 = 0, is Euler's identity."
//   },
//   obj12: {
//     question: "What does e^(iπ/2) equal?",
//     answer: "e^(iπ/2) = i. By Euler's formula, e^(iπ/2) = cos(π/2) + i sin(π/2) = 0 + i·1 = i. This shows that e raised to iπ/2 produces the imaginary unit."
//   },
//   obj13: {
//     question: "Why is exponential form useful for complex numbers?",
//     answer: "Exponential form simplifies arithmetic: multiplication adds exponents, division subtracts them, powers multiply the exponent, and roots divide it. It also reveals the connection between circular motion and exponential functions, which is foundational in Fourier analysis, signal processing, and physics."
//   },
//   obj14: {
//     question: "What is the relationship between cis θ and e^(iθ)?",
//     answer: "They are equal: cis θ = cos θ + i sin θ = e^(iθ). The notation 'cis' is shorthand for 'cos + i sin,' while e^(iθ) expresses the same value using Euler's formula. Both represent a point on the unit circle at angle θ."
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Exponential Form of Complex Numbers",
//     "description": "Master the exponential form z = re^(iθ) of complex numbers. Learn Euler's formula, Euler's identity, and how to multiply, divide, and find powers and roots using exponential notation.",
//     "url": "https://www.learnmathclass.com/complex-numbers/exponential-form",
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
//       "name": "Exponential Form of Complex Numbers"
//     },
//     "teaches": [
//       "Euler's formula e^(iθ) = cos θ + i sin θ",
//       "Euler's identity e^(iπ) + 1 = 0",
//       "Exponential form z = re^(iθ)",
//       "Converting between algebraic and exponential forms",
//       "Multiplication and division in exponential form",
//       "Powers and roots using exponential notation",
//       "Applications in signal processing and physics",
//       "Side-by-side comparison of operations in algebraic vs exponential form"
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
//         "name": "Exponential Form",
//         "item": "https://www.learnmathclass.com/complex-numbers/exponential-form"
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
//     obj2Table,
//     obj5Table,
//     obj9Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Exponential Form: Euler's Formula & Identity | Learn Math Class",
//       description: "Master the exponential form z = re^(iθ) of complex numbers. Learn Euler's formula, Euler's identity, and how to multiply, divide, and find powers and roots using exponential notation.",
//       keywords: keyWords.join(", "),
//       url: "/complex-numbers/exponential-form",
//       name: "Exponential Form of Complex Numbers"
//     },
//   }
// }
//    }


// export default function ExponentialFormPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj2Table,
//   obj5Table,
//   obj9Table,
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
//           <div
//             key={'obj2-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj2Table }}
//           />,
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
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'notation',
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
//           <div
//             key={'obj5-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj5Table }}
//           />,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
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
//           <div
//             key={'obj9-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj9Table }}
//           />,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Exponential Form</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//    showSecondaryNav={true}
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
//    <Sections sections={genericSections.slice(1)}/>
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
import eulerFormulaDiagrams from '@/app/components/calculators/complex-numbers/eulerFormulaDiagrams'
import complexMultiplicationDiagrams from '@/app/components/calculators/complex-numbers/complexMultiplicationDiagrams'
import deMoivreDiagrams from '@/app/components/calculators/complex-numbers/deMoivreDiagrams'
import complexDivisionDiagrams from '@/app/components/calculators/complex-numbers/complexDivisionDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import complexNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/complex-numbers'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import ProofSteps from '@/app/components/infographics/ProofSteps/ProofSteps'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'


export async function getStaticProps(){

 const keyWords = [
  "exponential form complex numbers",
  "Euler's formula",
  "e to the i theta",
  "Euler's identity",
  "e^(iπ) + 1 = 0",
  "complex number exponential notation",
  "re^(iθ)",
  "convert to exponential form",
  "multiply complex exponential form",
  "divide complex exponential form",
  "complex number powers exponential",
  "roots of complex numbers",
  "Taylor series Euler formula",
  "cis notation exponential",
  "polar to exponential form"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation/reference: canonical values of e^(iθ)
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">θ</th>
      <th style="${tableHeaders.aggregation}">eⁱᶿ via Euler's formula</th>
      <th style="${tableHeaders.aggregation}">Cartesian a + bi</th>
      <th style="${tableHeaders.aggregation}">Location on unit circle</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos 0 + i sin 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive real axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄6) + i sin(π⁄6)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√3⁄2 + (1⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">30° from positive real axis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄4) + i sin(π⁄4)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√2⁄2 + (√2⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">45° (first quadrant diagonal)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄3) + i sin(π⁄3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄2 + (√3⁄2)i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">60°</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π⁄2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(π⁄2) + i sin(π⁄2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive imaginary axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">π</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos π + i sin π</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative real axis&nbsp;&nbsp;<span style="font-size: 13px;">(Euler's identity)</span></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3π⁄2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(3π⁄2) + i sin(3π⁄2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative imaginary axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">2π</td>
      <td style="padding: 12px 15px; color: #34495e;">cos 2π + i sin 2π</td>
      <td style="padding: 12px 15px; color: #34495e;">1</td>
      <td style="padding: 12px 15px; color: #34495e;">back to start; full rotation</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — aggregation/process: conversion procedures both directions
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Conversion</th>
      <th style="${tableHeaders.aggregation}">Formulas</th>
      <th style="${tableHeaders.aggregation}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic → Exponential&nbsp;&nbsp;<span style="font-size: 13px;">(a + bi → re&#x2071;&#x1DBF;)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">
        r = √(a² + b²)<br/>
        θ = arctan(b ⁄ a), adjusted for quadrant<br/>
        z = re&#x2071;&#x1DBF;
      </td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">
        z = 1 + i<br/>
        r = √(1² + 1²) = √2<br/>
        θ = arctan(1) = π⁄4&nbsp;&nbsp;<span style="font-size: 13px;">(first quadrant)</span><br/>
        <span style="font-weight: bold;">→ 1 + i = √2 · e&#x2071;⁽π/4⁾</span>
      </td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Exponential → Algebraic&nbsp;&nbsp;<span style="font-size: 13px;">(re&#x2071;&#x1DBF; → a + bi)</span></td>
      <td style="padding: 12px 15px; color: #34495e;">
        a = r · cos θ<br/>
        b = r · sin θ<br/>
        z = a + bi
      </td>
      <td style="padding: 12px 15px; color: #34495e;">
        z = 4e&#x2071;⁽²π/3⁾<br/>
        a = 4 · cos(2π⁄3) = 4 · (−1⁄2) = −2<br/>
        b = 4 · sin(2π⁄3) = 4 · (√3⁄2) = 2√3<br/>
        <span style="font-weight: bold;">→ 4e&#x2071;⁽²π/3⁾ = −2 + 2√3 i</span>
      </td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: the three cube roots of 8 worked out
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">k</th>
      <th style="${tableHeaders.aggregation}">Argument formula (φ + 2πk) ⁄ n</th>
      <th style="${tableHeaders.aggregation}">Argument</th>
      <th style="${tableHeaders.aggregation}">z_k exponential</th>
      <th style="${tableHeaders.aggregation}">z_k algebraic</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0 + 0) ⁄ 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 e&#x2071;⁽⁰⁾</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0 + 2π) ⁄ 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2π⁄3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 e&#x2071;⁽²π/3⁾</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1 + √3 i</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; color: #34495e;">(0 + 4π) ⁄ 3</td>
      <td style="padding: 12px 15px; color: #34495e;">4π⁄3</td>
      <td style="padding: 12px 15px; color: #34495e;">2 e&#x2071;⁽⁴π/3⁾</td>
      <td style="padding: 12px 15px; color: #34495e;">−1 − √3 i</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: each operation in algebraic vs exponential
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation on z, w</th>
      <th style="${tableHeaders.summary}">Algebraic form<br/><span style="font-weight: normal; font-size: 13px;">z = a + bi,&nbsp;w = c + di</span></th>
      <th style="${tableHeaders.summary}">Exponential form<br/><span style="font-weight: normal; font-size: 13px;">z = r₁e&#x2071;⁽&#x1DBF;¹⁾,&nbsp;w = r₂e&#x2071;⁽&#x1DBF;²⁾</span></th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplication&nbsp;&nbsp;z · w</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ac − bd) + (ad + bc)i&nbsp;&nbsp;<span style="font-size: 13px;">(FOIL + apply i² = −1)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁r₂ · e&#x2071;⁽&#x1DBF;¹ ⁺ &#x1DBF;²⁾&nbsp;&nbsp;<span style="font-size: 13px;">(moduli multiply, args add)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Division&nbsp;&nbsp;z ⁄ w</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply num and denom by w̄, then expand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(r₁ ⁄ r₂) · e&#x2071;⁽&#x1DBF;¹ ⁻ &#x1DBF;²⁾&nbsp;&nbsp;<span style="font-size: 13px;">(moduli divide, args subtract)</span></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power&nbsp;&nbsp;zⁿ&nbsp;&nbsp;<span style="font-size: 13px;">(integer n)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">binomial expansion + repeated i²-collapse</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁ⁿ · e&#x2071;⁽ⁿ&#x1DBF;¹⁾&nbsp;&nbsp;<span style="font-size: 13px;">(modulus to nth power, arg × n; De Moivre)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">n-th root&nbsp;&nbsp;<span style="font-size: 13px;">(zⁿ = w)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no clean closed-form method</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₂&#xB9;/ⁿ · e&#x2071;⁽&#x1DBF;² ⁺ ²&#x3C0;&#x1D4F;⁾/ⁿ&nbsp;&nbsp;<span style="font-size: 13px;">for k = 0, 1, …, n − 1</span></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modulus&nbsp;&nbsp;|z|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(a² + b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁&nbsp;&nbsp;<span style="font-size: 13px;">(read directly)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Argument&nbsp;&nbsp;arg(z)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan(b ⁄ a) with quadrant adjustment</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">θ₁&nbsp;&nbsp;<span style="font-size: 13px;">(read directly)</span></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Conjugate&nbsp;&nbsp;z̄</td>
      <td style="padding: 12px 15px; color: #34495e;">a − bi</td>
      <td style="padding: 12px 15px; color: #34495e;">r₁ · e&#x207B;&#x2071;&#x1DBF;¹&nbsp;&nbsp;<span style="font-size: 13px;">(modulus same, argument negates)</span></td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose unchanged; obj11 added) ----------

//     const sectionsContent={

//   obj0: {
//   title: `Key Terms`,
//   content: `
// - [Exponential Form](!/complex-numbers/definitions#exponential_form) — representation as $re^{i\\theta}$
// - [Modulus](!/complex-numbers/definitions#modulus) — the scaling factor $r$
// - [Argument](!/complex-numbers/definitions#argument) — the exponent angle $\\theta$
// - [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form) — the expanded equivalent using $\\cos$ and $\\sin$
// - [Roots of Unity](!/complex-numbers/definitions#roots_of_unity) — naturally expressed in exponential form`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },

//     obj1: {
//   title: `Euler's Formula`,
//   before: ``,
//   content: `In 1748, Leonhard Euler published a relationship that would become one of mathematics' most celebrated results:

// $$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

// The formula asserts an equality between an exponential expression and a trigonometric one. On the left, the base $e$ — the fundamental constant of calculus, approximately $2.71828$ — is raised to an imaginary power $i\\theta$. On the right, ordinary cosine and sine combine with the [imaginary unit](!/complex-numbers/imaginary-numbers) to form a complex number.

// The equation holds for every real value of $\\theta$. When $\\theta = 0$, both sides equal $1$. When $\\theta = \\pi/2$, the left side is $e^{i\\pi/2}$ and the right side is $\\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$. The formula claims these are equal, and they are.

// Euler's formula bridges two mathematical worlds. Exponential functions describe growth and decay — populations, radioactive isotopes, compound interest. Trigonometric functions describe oscillation and rotation — waves, circles, periodic phenomena. The formula reveals these as two faces of the same underlying structure, connected through the imaginary unit.

// The significance extends beyond elegance. Euler's formula transforms complex arithmetic into exponential arithmetic, where the rules are simpler and more intuitive. It provides the foundation for the exponential form of complex numbers and enables computational techniques impossible with purely algebraic methods.`,
//   after: ``,
//   link: '',
// },
   

//     obj2: {
//   title: `Understanding Euler's Formula`,
//   before: ``,
//   content: `Euler's formula is not an arbitrary definition but a theorem derivable from fundamental principles. The proof emerges from Taylor series — infinite polynomial expansions that represent functions as sums of powers.

// The exponential function has the Taylor series:

// $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

// Substituting $x = i\\theta$:

// $$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$$

// The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and so on. Substituting:

// $$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$$

// Separating real and imaginary parts:

// $$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$$

// The real part is the Taylor series for $\\cos\\theta$. The imaginary part is the Taylor series for $\\sin\\theta$. Therefore $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

// Geometrically, as $\\theta$ increases from $0$, the point $e^{i\\theta}$ traces the unit circle in the [complex plane](!/complex-numbers/geometric-representation). At $\\theta = 0$, we start at $1$. At $\\theta = \\pi/2$, we reach $i$. At $\\theta = \\pi$, we arrive at $-1$. At $\\theta = 2\\pi$, we complete the circle and return to $1$. The exponential $e^{i\\theta}$ parametrizes circular motion.`,
//   after: ``,
//   link: '',
// },
 

//     obj3: {
//   title: `Euler's Identity`,
//   before: ``,
//   content: `A special case of Euler's formula achieves legendary status. Substituting $\\theta = \\pi$:

// $$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$$

// Rearranging:

// $$e^{i\\pi} + 1 = 0$$

// This equation — Euler's identity — connects five of mathematics' most fundamental constants in a single statement. The number $e$, base of natural logarithms and central to calculus. The number $i$, foundation of complex arithmetic. The number $\\pi$, ratio of circumference to diameter and key to circular geometry. The number $1$, the multiplicative identity. The number $0$, the additive identity.

// Each constant emerged from different mathematical needs: $e$ from growth and limits, $i$ from algebraic completeness, $\\pi$ from measurement of circles, $1$ and $0$ from the structure of arithmetic itself. That a single equation links all five suggests deep unity beneath apparently disparate branches of mathematics.

// Mathematicians and physicists routinely cite Euler's identity as the most beautiful formula ever discovered. Richard Feynman called it "the most remarkable formula in mathematics." The equation appears on countless posters, t-shirts, and tattoos — a rare piece of abstract mathematics that captures popular imagination.

// Beyond aesthetics, the identity encodes practical information. It confirms that $e^{i\\pi} = -1$, useful whenever exponential and trigonometric expressions interact. It demonstrates that raising a positive real number to an imaginary power can produce a negative real result — a counterintuitive fact with computational consequences.`,
//   after: ``,
//   link: '',
// },

   

//     obj4: {
//   title: `The Exponential Form of a Complex Number`,
//   before: ``,
//   content: `Euler's formula transforms the [trigonometric form](!/complex-numbers/trigonometric-form) into something more compact. Since $\\text{cis}\\theta = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$, any complex number $z = r\\text{cis}\\theta$ can be written:

// $$z = re^{i\\theta}$$

// Here $r = |z|$ is the [modulus](!/complex-numbers/absolute-value) and $\\theta = \\arg(z)$ is the argument. The exponential form packages both pieces of information into a single expression resembling a power.

// The three representations of a complex number are equivalent:

// $$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$

// Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.

// The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.

// Every nonzero complex number has an exponential form. The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
//   after: ``,
//   link: '',
// },
   
//     obj5: {
//   title: `Converting Between Forms`,
//   before: ``,
//   content: `Moving between [algebraic](!/complex-numbers/algebraic-form), trigonometric, and exponential forms requires computing modulus and argument or recovering real and imaginary parts.

// **Algebraic to Exponential:**

// Given $z = a + bi$, find $r$ and $\\theta$:

// $$r = \\sqrt{a^2 + b^2}$$

// $$\\theta = \\begin{cases} \\arctan(b/a) & \\text{if } a > 0 \\\\ \\arctan(b/a) + \\pi & \\text{if } a < 0, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & \\text{if } a < 0, b < 0 \\\\ \\pi/2 & \\text{if } a = 0, b > 0 \\\\ -\\pi/2 & \\text{if } a = 0, b < 0 \\end{cases}$$

// Then write $z = re^{i\\theta}$.

// Example: Convert $z = 1 + i$. The modulus is $r = \\sqrt{1 + 1} = \\sqrt{2}$. With $a = 1 > 0$ and $b = 1 > 0$, the argument is $\\theta = \\arctan(1) = \\pi/4$. Thus $1 + i = \\sqrt{2}e^{i\\pi/4}$.

// **Exponential to Algebraic:**

// Given $z = re^{i\\theta}$, compute:

// $$a = r\\cos\\theta \\qquad b = r\\sin\\theta$$

// Then write $z = a + bi$.

// Example: Convert $z = 4e^{i(2\\pi/3)}$. The real part is $a = 4\\cos(2\\pi/3) = 4(-1/2) = -2$. The imaginary part is $b = 4\\sin(2\\pi/3) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$. Thus $4e^{i(2\\pi/3)} = -2 + 2\\sqrt{3}i$.

// Both conversions are routine once the formulas are memorized. The exponential form serves computation; the algebraic form displays components explicitly.`,
//   after: ``,
//   link: '',
// },
  

//     obj6: {
//   title: `Multiplication in Exponential Form`,
//   before: ``,
//   content: `Multiplying complex numbers in exponential form reduces to elementary exponent rules. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$:

// $$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2} = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$

// The moduli multiply: $|z_1 \\cdot z_2| = r_1r_2$. The arguments add: $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$.

// This rule follows from the standard law of exponents: $e^a \\cdot e^b = e^{a+b}$. The complex setting changes nothing about how exponents combine.

// Geometrically, multiplication scales and rotates. Multiplying by $z_2 = r_2e^{i\\theta_2}$ stretches lengths by factor $r_2$ and rotates counterclockwise by angle $\\theta_2$. Multiplying by $e^{i\\pi/2} = i$ rotates by $90°$ without changing length. Multiplying by $2$ doubles length without rotation. Multiplying by $2e^{i\\pi/4}$ doubles length and rotates $45°$.

// Example: Compute $(3e^{i\\pi/6})(2e^{i\\pi/3})$.

// Multiply moduli: $3 \\cdot 2 = 6$.
// Add arguments: $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2$.

// Result: $6e^{i\\pi/2} = 6i$.

// Compare this to multiplying the equivalent algebraic forms and simplifying — the exponential approach is faster and less error-prone.`,
//   after: ``,
//   link: '',
// },
   

//     obj7: {
//   title: `Division in Exponential Form`,
//   before: ``,
//   content: `Division mirrors multiplication with subtraction replacing addition. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$ with $z_2 \\neq 0$:

// $$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot \\frac{e^{i\\theta_1}}{e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$

// The moduli divide: $|z_1/z_2| = r_1/r_2$. The arguments subtract: $\\arg(z_1/z_2) = \\theta_1 - \\theta_2$.

// The exponent law $e^a / e^b = e^{a-b}$ governs the calculation, just as with real exponentials.

// Geometrically, dividing by $z_2$ shrinks by factor $1/r_2$ and rotates clockwise by angle $\\theta_2$ (equivalently, counterclockwise by $-\\theta_2$). Division undoes multiplication: if $w = z_1 \\cdot z_2$, then $z_1 = w/z_2$ recovers the original factor.

// Example: Compute $\\frac{8e^{i(5\\pi/6)}}{2e^{i(\\pi/3)}}$.

// Divide moduli: $8/2 = 4$.
// Subtract arguments: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.

// Result: $4e^{i\\pi/2} = 4i$.

// In [algebraic form](!/complex-numbers/algebraic-form), this division would require multiplying by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator and simplifying — a lengthier process. Exponential form bypasses that machinery entirely.`,
//   after: ``,
//   link: '',
// },
  

//     obj8: {
//   title: `Powers in Exponential Form`,
//   before: ``,
//   content: `Raising a complex number to a power becomes trivial in exponential form. For $z = re^{i\\theta}$ and any integer $n$:

// $$z^n = (re^{i\\theta})^n = r^n \\cdot (e^{i\\theta})^n = r^n e^{in\\theta}$$

// The modulus raises to the $n$-th power. The argument multiplies by $n$. Both operations are elementary.

// This is [De Moivre's theorem](!/complex-numbers/demoivre-theorem) expressed in exponential notation. The trigonometric statement $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$ becomes the exponential statement $(e^{i\\theta})^n = e^{in\\theta}$, a direct consequence of the power rule for exponents.

// Example: Compute $(1 + i)^{12}$.

// Convert to exponential form: $1 + i = \\sqrt{2}e^{i\\pi/4}$.

// Apply the power rule: $(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i \\cdot 3\\pi} = 64e^{i \\cdot 3\\pi}$.

// Simplify the argument: $3\\pi = 2\\pi + \\pi$, so $e^{i \\cdot 3\\pi} = e^{i\\pi} = -1$.

// Result: $64 \\cdot (-1) = -64$.

// The computation required no binomial expansion, no tracking of $i$ powers, no collection of terms. Converting to exponential form, applying the power rule, and simplifying completed the calculation in a few lines.`,
//   after: ``,
//   link: '',
// },
  

//     obj9: {
//   title: `Roots in Exponential Form`,
//   before: ``,
//   content: `Finding $n$-th roots inverts the power operation. Given $w = Re^{i\\phi}$, the solutions to $z^n = w$ are:

// $$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n} \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

// Each value of $k$ produces a distinct root. Beyond $k = n-1$, the arguments differ by full rotations of $2\\pi$, repeating previous roots.

// All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle of that radius in the [complex plane](!/complex-numbers/geometric-representation). Their arguments differ by $2\\pi/n$, spacing them evenly around the circle. The roots form vertices of a regular $n$-gon.

// Example: Find the cube roots of $8$.

// Write $8 = 8e^{i \\cdot 0}$ (modulus $8$, argument $0$).

// Apply the formula: $z_k = 8^{1/3} e^{i(0 + 2\\pi k)/3} = 2e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$.

// $z_0 = 2e^{i \\cdot 0} = 2$
// $z_1 = 2e^{i \\cdot 2\\pi/3} = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$
// $z_2 = 2e^{i \\cdot 4\\pi/3} = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$

// Three roots forming an equilateral triangle of radius $2$, one vertex at $2$ on the positive real axis.

// The exponential formula makes root extraction systematic: convert to exponential form, apply the root formula, enumerate distinct values of $k$.`,
//   after: ``,
//   link: '',
// },
   

//     obj10: {
//   title: `Why Exponential Form Matters`,
//   before: ``,
//   content: `The exponential representation of complex numbers is not merely a notational convenience — it fundamentally simplifies how we think about and compute with complex quantities.

// **Computational Efficiency:** Multiplication becomes addition of exponents. Division becomes subtraction. Powers become multiplication by integers. Roots become division by integers. Every operation reduces to arithmetic on the modulus and argument, bypassing the algebraic expansion and simplification that [rectangular form](!/complex-numbers/algebraic-form) demands.

// **Conceptual Unification:** Exponential form reveals that circular motion and exponential growth are manifestations of the same mathematical structure. A point rotating around the origin traces $e^{i\\theta}$ as $\\theta$ increases — circular motion encoded as an exponential. Conversely, the exponential function, when extended to imaginary inputs, produces rotation rather than growth.

// **Foundation for Advanced Mathematics:** Fourier analysis decomposes signals into sums of complex exponentials $e^{i\\omega t}$, each representing a pure oscillation at frequency $\\omega$. Signal processing relies on this decomposition to filter, compress, and analyze audio, images, and communications. Quantum mechanics writes wave functions using complex exponentials, encoding the probability amplitudes that govern particle behavior.

// The exponential form appears wherever oscillation, rotation, or periodic phenomena arise. Electrical engineers use it to analyze AC circuits. Physicists use it in wave equations. Mathematicians use it throughout complex analysis. Learning to think in exponential form equips you with a tool that extends far beyond the algebra of complex numbers into the mathematical description of the physical world.`,
//   after: ``,
//   link: '',
// },
//     obj11:{
//       title:`Summary: Operations in Algebraic vs Exponential Form`,
//       content:`The advantage of exponential form lies in computational simplicity — every operation that requires careful expansion in [algebraic form](!/complex-numbers/algebraic-form) reduces to elementary exponent arithmetic in exponential form. The table below collects each operation in both representations side by side, making the contrast explicit: where the algebraic column needs distribution, conjugates, or term-collection, the exponential column performs the same work via addition, subtraction, or multiplication of the argument $\\theta$.`,
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


// formulas-optimized: v1 | 2026-06-11 | 5 callouts (obj1, obj3, obj4, obj5, obj8)
// Concept introduction (section 4, "The Exponential Form of a Complex
// Number") — template D, comparison. Running instance: z = 2e^(iπ/3) =
// 1 + √3 i, the Euler visualizer's scaled state already shown in this section.
// Old obj4 text is kept in sectionsContent.obj4, unused; its three formula
// boxes and link, the rule box, the pitfall aside, six passages and the
// scaledPolar demo frame with its line are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciWasteTable = ciTableOpen(['step', 'squaring 2(cos π/3 + i sin π/3)', 'squaring 2e^(iπ/3)']) +
  ciRow(['1', '4(cos π/3 + i sin π/3)²', '4e^(2iπ/3) — done'], { color: '#2563EB', cols: [2] }) +
  ciRow(['2', '4(cos² π/3 + 2i sin π/3 cos π/3 − sin² π/3)', ''], { shade: true }) +
  ciRow(['3', '4((cos² π/3 − sin² π/3) + i · 2 sin π/3 cos π/3)', '']) +
  ciRow(['4', 'recognise two double-angle identities', ''], { shade: true }) +
  ciRow(['5', '4(cos 2π/3 + i sin 2π/3)', ''], { last: true }) +
  '</tbody></table>'
const ciFreeTable = ciTableOpen(['with z = 2e^(iπ/3)', 'exponent rule', 'result']) +
  ciRow(['z · z', 'add the exponents', '4e^(2iπ/3) = −2 + 2√3 i']) +
  ciRow(['z³', 'multiply the exponent by 3', '8e^(iπ) = −8'], { shade: true }) +
  ciRow(['1 / z', 'negate the exponent', '(1/2)e^(−iπ/3)']) +
  ciRow(['z / z', 'subtract the exponents', 'e⁰ = 1'], { shade: true, last: true }) +
  '</tbody></table>'

const sectionsContent={

  obj0: {
  title: `Key Terms`,
  content: `
- [Exponential Form](!/complex-numbers/definitions#exponential_form) — representation as $re^{i\\theta}$
- [Modulus](!/complex-numbers/definitions#modulus) — the scaling factor $r$
- [Argument](!/complex-numbers/definitions#argument) — the exponent angle $\\theta$
- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form) — the expanded equivalent using $\\cos$ and $\\sin$
- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity) — naturally expressed in exponential form`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
  link: '',
},

    obj1: {
  title: `Euler's Formula`,
  before: ``,
  content: `In 1748, Leonhard Euler published a relationship that would become one of mathematics' most celebrated results:

@academic[formula_callout:Euler's Formula
$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$
/complex-numbers/formulas#eulers_formula]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The formula asserts an equality between an exponential expression and a trigonometric one. On the left, the base $e$ — the fundamental constant of calculus, approximately $2.71828$ — is raised to an imaginary power $i\\theta$. On the right, ordinary cosine and sine combine with the [imaginary unit](!/complex-numbers/imaginary-numbers) to form a complex number.

@academic[fact,aside:true,width:35%:$i^i$ is a real number
Raising both sides of $e^{i\\pi/2} = i$ to the power $i$ gives $i^i = e^{i \\cdot i\\pi/2} = e^{-\\pi/2} \\approx 0.2079$. The other angles of $i$, $\\frac{\\pi}{2} + 2\\pi k$, give infinitely many values $e^{-\\pi/2 - 2\\pi k}$, and every one of them is real.]@

The equation holds for every real value of $\\theta$. When $\\theta = 0$, both sides equal $1$. When $\\theta = \\pi/2$, the left side is $e^{i\\pi/2}$ and the right side is $\\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$. The formula claims these are equal, and they are.

Euler's formula bridges two mathematical worlds. Exponential functions describe growth and decay — populations, radioactive isotopes, compound interest. Trigonometric functions describe oscillation and rotation — waves, circles, periodic phenomena. The formula reveals these as two faces of the same underlying structure, connected through the imaginary unit.

The significance extends beyond elegance. Euler's formula transforms complex arithmetic into exponential arithmetic, where the rules are simpler and more intuitive. It provides the foundation for the exponential form of complex numbers and enables computational techniques impossible with purely algebraic methods.`,
  after: ``,
  link: '',
},
   

    obj2: {
  title: `Understanding Euler's Formula`,
  before: ``,
  content: `Euler's formula is not an arbitrary definition but a theorem derivable from fundamental principles. The proof emerges from Taylor series — infinite polynomial expansions that represent functions as sums of powers.

The exponential function has the Taylor series:

@academic[formula_callout:Understanding Euler's Formula
$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$]@

Substituting $x = i\\theta$:

@academic[formula_callout:Understanding Euler's Formula
$$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$$]@

The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and so on. Substituting:

@academic[formula_callout:Understanding Euler's Formula
$$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$$]@

Separating real and imaginary parts:

@academic[formula_callout:Understanding Euler's Formula
$$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$$]@

The real part is the Taylor series for $\\cos\\theta$. The imaginary part is the Taylor series for $\\sin\\theta$. Therefore $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.`,
      afterProof: `Geometrically, as $\\theta$ increases from $0$, the point $e^{i\\theta}$ traces the unit circle in the [complex plane](!/complex-numbers/geometric-representation). At $\\theta = 0$, we start at $1$. At $\\theta = \\pi/2$, we reach $i$. At $\\theta = \\pi$, we arrive at $-1$. At $\\theta = 2\\pi$, we complete the circle and return to $1$. The exponential $e^{i\\theta}$ parametrizes circular motion.`,
  after: ``,
  link: '',
},
 

    obj3: {
  title: `Euler's Identity`,
  before: ``,
  content: `A special case of Euler's formula achieves legendary status. Substituting $\\theta = \\pi$:

@academic[formula_callout:Euler's Identity
$$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$$]@

Rearranging:

@academic[formula_callout:Euler's Identity
$$e^{i\\pi} + 1 = 0$$
/complex-numbers/formulas#eulers_identity]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@`,
      afterProof: `This equation — Euler's identity — connects five of mathematics' most fundamental constants in a single statement. The number $e$, base of natural logarithms and central to calculus. The number $i$, foundation of complex arithmetic. The number $\\pi$, ratio of circumference to diameter and key to circular geometry. The number $1$, the multiplicative identity. The number $0$, the additive identity.

Each constant emerged from different mathematical needs: $e$ from growth and limits, $i$ from algebraic completeness, $\\pi$ from measurement of circles, $1$ and $0$ from the structure of arithmetic itself. That a single equation links all five suggests deep unity beneath apparently disparate branches of mathematics.

@academic[fact,aside:true,width:35%:The logarithm of $-1$ was once disputed
Leibniz and Johann Bernoulli argued in letters over $\\ln(-1)$, and Bernoulli held that it was $0$, like $\\ln 1$. Euler settled it with this identity: $e^{i\\pi} = -1$ makes $\\ln(-1) = i\\pi$, and adding full turns gives infinitely many values $i\\pi + 2\\pi k i$.]@

Mathematicians and physicists routinely cite Euler's identity as the most beautiful formula ever discovered. Richard Feynman called its parent, Euler's formula, "the most remarkable formula in mathematics." The equation appears on countless posters, t-shirts, and tattoos — a rare piece of abstract mathematics that captures popular imagination.

Beyond aesthetics, the identity encodes practical information. It confirms that $e^{i\\pi} = -1$, useful whenever exponential and trigonometric expressions interact. It demonstrates that raising a positive real number to an imaginary power can produce a negative real result — a counterintuitive fact with computational consequences.`,
  after: ``,
  link: '',
},

   

    obj4: {
  title: `The Exponential Form of a Complex Number`,
  before: ``,
  content: `Euler's formula transforms the [trigonometric form](!/complex-numbers/trigonometric-form) into something more compact. Since $\\text{cis}\\theta = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$, any complex number $z = r\\text{cis}\\theta$ can be written:

@academic[formula_callout:Exponential Form
$$z = re^{i\\theta}$$
/complex-numbers/formulas#exponential_form]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Here $r = |z|$ is the [modulus](!/complex-numbers/absolute-value) and $\\theta = \\arg(z)$ is the argument. The exponential form packages both pieces of information into a single expression resembling a power.

The three representations of a complex number are equivalent:

@academic[formula_callout:The Exponential Form of a Complex Number
$$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$]@

Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.

The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.

@academic[rule_plain:Every nonzero complex number has an exponential form.]@

@academic[pitfall,aside:true,width:35%:Putting degrees in the exponent
Writing $3 + 4i = 5e^{i \\cdot 53.13}$ feeds degrees into a formula that reads radians: $5e^{i \\cdot 53.13} \\approx -4.81 + 1.37i$, a different point. With the angle in radians, $5e^{i \\cdot 0.927} \\approx 3 + 4i$.
[Read more](!#pitfall-putting-degrees-in-the-exponent)]@

The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
  after: ``,
  link: '',
},

notation: {
  title: `Exponential Form Notation`,
  lead: `One mark does the work here: the imaginary exponent. This section owns its reading, the full form that carries a modulus in front, and the periodicity that makes exponents non-unique — the price of importing power rules into rotation.`,
  inherited: `$z$, $a + bi$ and $\\mathbb{C}$ come from [complex numbers basics](!/complex-numbers/basics#notation), $i$ from [the imaginary unit](!/complex-numbers/imaginary-numbers#notation), $r$, $\\theta$, $\\arg$ and $\\operatorname{cis}$ from the [trigonometric form](!/complex-numbers/trigonometric-form#notation); the letter $e$ itself is a [reserved constant](!/algebra/powers/exponential-functions#notation).`,
  entries: [
    {
      id: 'e-i-theta',
      tex: `$e^{i\\theta}$`,
      read: `e to the i theta`,
      means: `A power with an imaginary exponent — defined, not computed: **Euler's Formula** above assigns it the value $\\cos\\theta + i\\sin\\theta$, and the notation is chosen precisely so the exponent rules keep working.`,
      cases: `Always modulus $1$: $e^{i\\theta}$ walks the unit circle, $\\theta$ the arc walked. The exponent writes $i$ first — $e^{i\\theta}$ — echoing the [i-first order](!/complex-numbers/imaginary-numbers#notation) used whenever the coefficient is an expression.`,
      alsoWritten: `$\\exp(i\\theta)$ — the [functional spelling](!/algebra/powers/exponential-functions#notation) of analysis and programming, obligatory once the exponent outgrows a superscript.`,
      confusedWith: `A growth process. Real $e^x$ grows; an imaginary exponent rotates — larger $\\theta$ means more turning, never more magnitude.`,
    },
    {
      id: 'r-e-i-theta',
      tex: `$re^{i\\theta}$`,
      read: `r e to the i theta`,
      means: `The full form: size out front, direction in the exponent — $r = |z|$ from the [absolute value](!/complex-numbers/absolute-value), $\\theta = \\arg(z)$ from the [trigonometric form](!/complex-numbers/trigonometric-form#notation). The chain $a + bi = r\\operatorname{cis}\\theta = re^{i\\theta}$ of **The Exponential Form of a Complex Number** above closes the three-form family.`,
      cases: `The sign lives in the exponent, never on $r$: $-2 = 2e^{i\\pi}$, not $(-2)e^{i0}$; pure imaginaries drop the coefficient entirely — $i = e^{i\\pi/2}$.`,
      alsoWritten: `$Ae^{i\\omega t}$ — the physics and engineering costume: amplitude $A$, angular frequency $\\omega$, time $t$; the same mark running oscillations and waves.`,
      confusedWith: `A merged exponent. Only the $e^{i\\theta}$ factor rotates; sliding $r$ into the exponent — $e^{ri\\theta}$ or $e^{r + i\\theta}$ — names a different number.`,
    },
    {
      id: 'periodic-exponent',
      tex: `$e^{i(\\theta + 2\\pi k)}$`,
      read: `e to the i, theta plus two pi k`,
      means: `The exponent is determined only up to full turns: $e^{i(\\theta + 2\\pi)} = e^{i\\theta}$. Equal values under visibly different exponents — the multivalued [argument](!/complex-numbers/trigonometric-form#notation) wearing exponential clothing.`,
      cases: `Harmless in a single computation, load-bearing for roots: **Roots in Exponential Form** below finds all $n$ answers precisely by writing $z = re^{i(\\theta + 2\\pi k)}$ before dividing the exponent by $n$.`,
      confusedWith: `Real-exponential injectivity. For real exponents, $e^{x_1} = e^{x_2}$ forces $x_1 = x_2$; with imaginary exponents that cancellation is invalid — silently "equating exponents" is how root solutions get lost.`,
    },
  ],
  symbolsHref: `/math-symbols/complex-numbers`,
  symbolsLabel: `All complex number symbols`,
  parentHref: `/complex-numbers`,
  parentLabel: `Complex Numbers`,
},
   
    obj5: {
  title: `Converting Between Forms`,
  before: ``,
  content: `Moving between [algebraic](!/complex-numbers/algebraic-form), trigonometric, and exponential forms requires computing modulus and argument or recovering real and imaginary parts.

**Algebraic to Exponential:**

Given $z = a + bi$, find $r$ and $\\theta$:

@academic[formula_callout:Converting Between Forms
$$r = \\sqrt{a^2 + b^2}$$]@

@academic[formula_callout:Converting Between Forms
$$\\theta = \\begin{cases} \\arctan(b/a) & \\text{if } a > 0 \\\\ \\arctan(b/a) + \\pi & \\text{if } a < 0, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & \\text{if } a < 0, b < 0 \\\\ \\pi/2 & \\text{if } a = 0, b > 0 \\\\ -\\pi/2 & \\text{if } a = 0, b < 0 \\end{cases}$$]@

Then write $z = re^{i\\theta}$.

@academic[example:Example
Convert $z = 1 + i$. The modulus is $r = \\sqrt{1 + 1} = \\sqrt{2}$. With $a = 1 > 0$ and $b = 1 > 0$, the argument is $\\theta = \\arctan(1) = \\pi/4$. Thus $1 + i = \\sqrt{2}e^{i\\pi/4}$.]@

@academic[pitfall,aside:true,width:35%:Ignoring the quadrant
For $z = -1 - i$, taking $\\theta = \\arctan(1) = \\pi/4$ gives $\\sqrt{2}e^{i\\pi/4} = 1 + i$, the opposite point. Since $a < 0$ and $b < 0$, $\\theta = \\pi/4 - \\pi = -3\\pi/4$, and $-1 - i = \\sqrt{2}e^{-i \\cdot 3\\pi/4}$.
[Read more](!#pitfall-ignoring-the-quadrant)]@

In this example both parts are positive, so the point lies in the first quadrant and the first line of the case formula applies. The remaining lines handle points in the second and third quadrants and on the imaginary axis, adding or subtracting $\\pi$ or replacing the arctangent outright. The modulus formula needs no such cases: it is the same in every quadrant.

**Exponential to Algebraic:**

Given $z = re^{i\\theta}$, compute:

@academic[formula_callout:Polar to Rectangular Conversion
$$a = r\\cos\\theta, \\qquad b = r\\sin\\theta$$
/complex-numbers/formulas#polar_to_rectangular_conversion]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Then write $z = a + bi$.

@academic[example:Example
Convert $z = 4e^{i(2\\pi/3)}$. The real part is $a = 4\\cos(2\\pi/3) = 4(-1/2) = -2$. The imaginary part is $b = 4\\sin(2\\pi/3) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$. Thus $4e^{i(2\\pi/3)} = -2 + 2\\sqrt{3}i$.]@

Both conversions are routine once the formulas are memorized. The exponential form serves computation; the algebraic form displays components explicitly.`,
  after: ``,
  link: '',
},
  

    obj6: {
  title: `Multiplication in Exponential Form`,
  before: ``,
  content: `Multiplying complex numbers in exponential form reduces to elementary exponent rules. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$:

@academic[formula_callout:Multiplication in Exponential Form
$$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2} = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$]@

The moduli multiply: $|z_1 \\cdot z_2| = r_1r_2$. The arguments add: $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$.

This rule follows from the standard law of exponents: $e^a \\cdot e^b = e^{a+b}$. The complex setting changes nothing about how exponents combine.`,
      afterProof: `@academic[pitfall,aside:true,width:35%:Adding the moduli
Adding the moduli along with the arguments turns $(2e^{i\\pi/4})(3e^{i\\pi/4})$ into $5e^{i\\pi/2} = 5i$. Only the arguments add; the moduli multiply, so the product is $6e^{i\\pi/2} = 6i$.
[Read more](!#pitfall-adding-the-moduli)]@

Geometrically, multiplication scales and rotates. Multiplying by $z_2 = r_2e^{i\\theta_2}$ stretches lengths by factor $r_2$ and rotates counterclockwise by angle $\\theta_2$. Multiplying by $e^{i\\pi/2} = i$ rotates by $90°$ without changing length. Multiplying by $2$ doubles length without rotation. Multiplying by $2e^{i\\pi/4}$ doubles length and rotates $45°$.

@academic[example:Example
Compute $(3e^{i\\pi/6})(2e^{i\\pi/3})$.

Multiply moduli: $3 \\cdot 2 = 6$.
Add arguments: $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2$.

Result: $6e^{i\\pi/2} = 6i$.]@

Compare this to multiplying the equivalent algebraic forms and simplifying — the exponential approach is faster and less error-prone.`,
  after: ``,
  link: '',
},
   

    obj7: {
  title: `Division in Exponential Form`,
  before: ``,
  content: `Division mirrors multiplication with subtraction replacing addition. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$ with $z_2 \\neq 0$:

@academic[formula_callout:Division in Exponential Form
$$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot \\frac{e^{i\\theta_1}}{e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$]@

The moduli divide: $|z_1/z_2| = r_1/r_2$. The arguments subtract: $\\arg(z_1/z_2) = \\theta_1 - \\theta_2$.

The exponent law $e^a / e^b = e^{a-b}$ governs the calculation, just as with real exponentials.

@academic[pitfall,aside:true,width:35%:Subtracting in the wrong order
Computing $\\frac{6e^{i\\pi/2}}{3e^{i\\pi/6}}$ with $\\pi/6 - \\pi/2 = -\\pi/3$ gives $2e^{-i\\pi/3} = 1 - \\sqrt{3}i$. The denominator's argument is the one subtracted: $\\pi/2 - \\pi/6 = \\pi/3$, so the quotient is $2e^{i\\pi/3} = 1 + \\sqrt{3}i$.
[Read more](!#pitfall-subtracting-in-the-wrong-order)]@

Geometrically, dividing by $z_2$ shrinks by factor $1/r_2$ and rotates clockwise by angle $\\theta_2$ (equivalently, counterclockwise by $-\\theta_2$). Division undoes multiplication: if $w = z_1 \\cdot z_2$, then $z_1 = w/z_2$ recovers the original factor.

@academic[example:Example
Compute $\\frac{8e^{i(5\\pi/6)}}{2e^{i(\\pi/3)}}$.

Divide moduli: $8/2 = 4$.
Subtract arguments: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.

Result: $4e^{i\\pi/2} = 4i$.]@

In [algebraic form](!/complex-numbers/algebraic-form), this division would require multiplying by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator and simplifying — a lengthier process. Exponential form bypasses that machinery entirely.`,
  after: ``,
  link: '',
},
  

    obj8: {
  title: `Powers in Exponential Form`,
  before: ``,
  content: `Raising a complex number to a power becomes trivial in exponential form. For $z = re^{i\\theta}$ and any integer $n$:

@academic[formula_callout:Power in Polar Form
$$z^n = r^n e^{in\\theta}$$
/complex-numbers/formulas#power_in_polar_form]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The modulus raises to the $n$-th power. The argument multiplies by $n$. Both operations are elementary.

This is [De Moivre's theorem](!/complex-numbers/demoivre-theorem) expressed in exponential notation. The trigonometric statement $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$ becomes the exponential statement $(e^{i\\theta})^n = e^{in\\theta}$, a direct consequence of the power rule for exponents.

@academic[example:Example
Compute $(1 + i)^{12}$.

Convert to exponential form: $1 + i = \\sqrt{2}e^{i\\pi/4}$.

Apply the power rule: $(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i \\cdot 3\\pi} = 64e^{i \\cdot 3\\pi}$.

Simplify the argument: $3\\pi = 2\\pi + \\pi$, so $e^{i \\cdot 3\\pi} = e^{i\\pi} = -1$.

Result: $64 \\cdot (-1) = -64$.]@

@academic[pitfall,aside:true,width:35%:Leaving the modulus unpowered
Multiplying only the angle by $12$ turns $(\\sqrt{2}e^{i\\pi/4})^{12}$ into $\\sqrt{2}e^{i \\cdot 3\\pi} = -\\sqrt{2}$. The modulus is raised too, $(\\sqrt{2})^{12} = 64$, so the result is $64e^{i \\cdot 3\\pi} = -64$.
[Read more](!#pitfall-leaving-the-modulus-unpowered)]@

The computation required no binomial expansion, no tracking of $i$ powers, no collection of terms. Converting to exponential form, applying the power rule, and simplifying completed the calculation in a few lines.`,
  after: ``,
  link: '',
},
  

    obj9: {
  title: `Roots in Exponential Form`,
  before: ``,
  content: `Finding $n$-th roots inverts the power operation. Given $w = Re^{i\\phi}$, the solutions to $z^n = w$ are:

@academic[formula_callout:Roots in Exponential Form
$$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n} \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$]@

Each value of $k$ produces a distinct root. Beyond $k = n-1$, the arguments differ by full rotations of $2\\pi$, repeating previous roots.

@academic[pitfall,aside:true,width:35%:Adding the full turn after dividing
Writing the square roots of $-9 = 9e^{i\\pi}$ as $3e^{i(\\pi/2 + 2\\pi k)}$ gives $3i$ for every $k$, so $-3i$ is lost. The full turn is divided too: $3e^{i(\\pi + 2\\pi k)/2}$ gives $3i$ for $k = 0$ and $-3i$ for $k = 1$.
[Read more](!#pitfall-adding-the-full-turn-after-dividing)]@

All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle of that radius in the [complex plane](!/complex-numbers/geometric-representation). Their arguments differ by $2\\pi/n$, spacing them evenly around the circle. The roots form vertices of a regular $n$-gon.

@academic[example:Example
Find the cube roots of $8$.

Write $8 = 8e^{i \\cdot 0}$ (modulus $8$, argument $0$).

Apply the formula: $z_k = 8^{1/3} e^{i(0 + 2\\pi k)/3} = 2e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$.

$z_0 = 2e^{i \\cdot 0} = 2$
$z_1 = 2e^{i \\cdot 2\\pi/3} = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$
$z_2 = 2e^{i \\cdot 4\\pi/3} = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$]@

Three roots forming an equilateral triangle of radius $2$, one vertex at $2$ on the positive real axis.

The exponential formula makes root extraction systematic: convert to exponential form, apply the root formula, enumerate distinct values of $k$.`,
  after: ``,
  link: '',
},
   

    obj10: {
  title: `Why Exponential Form Matters`,
  before: ``,
  content: `The exponential representation of complex numbers is not merely a notational convenience — it fundamentally simplifies how we think about and compute with complex quantities.

**Computational Efficiency:** Multiplication becomes addition of exponents. Division becomes subtraction. Powers become multiplication by integers. Roots become division by integers. Every operation reduces to arithmetic on the modulus and argument, bypassing the algebraic expansion and simplification that [rectangular form](!/complex-numbers/algebraic-form) demands.

**Conceptual Unification:** Exponential form reveals that circular motion and exponential growth are manifestations of the same mathematical structure. A point rotating around the origin traces $e^{i\\theta}$ as $\\theta$ increases — circular motion encoded as an exponential. Conversely, the exponential function, when extended to imaginary inputs, produces rotation rather than growth.

**Foundation for Advanced Mathematics:** Fourier analysis decomposes signals into sums of complex exponentials $e^{i\\omega t}$, each representing a pure oscillation at frequency $\\omega$. Signal processing relies on this decomposition to filter, compress, and analyze audio, images, and communications. Quantum mechanics writes wave functions using complex exponentials, encoding the probability amplitudes that govern particle behavior.

The exponential form appears wherever oscillation, rotation, or periodic phenomena arise. Electrical engineers use it to analyze AC circuits. Physicists use it in wave equations. Mathematicians use it throughout complex analysis. Learning to think in exponential form equips you with a tool that extends far beyond the algebra of complex numbers into the mathematical description of the physical world.`,
  after: ``,
  link: '',
},
    obj11:{
      title:`Summary: Operations in Algebraic vs Exponential Form`,
      content:`This summary sets each operation on two complex numbers in algebraic form beside the same operation in exponential form. Each row is one operation: multiplication, division, a power, an n-th root, the modulus, the argument and the conjugate. The left column gives the algebraic formula or method, the right column the exponential one, each with a line on how the work is done, and the right one with a link to the section that explains it.

Where the [algebraic form](!/complex-numbers/algebraic-form) needs distribution, conjugates or collecting terms, the exponential column does the same work by multiplying or dividing the moduli and adding, subtracting or multiplying the argument.`,
      formulaSheetAfter: `For products, quotients, powers and roots, converting to exponential form first saves the most work: the moduli and the arguments are handled separately with simple arithmetic, and the result is converted back to algebraic form at the end if it is needed.`,
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
  
    },
  
    obj16:{
      title:`Common Pitfalls`,
      content:`Six mistakes account for many of the wrong answers in work with the exponential form. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.`,
      before:``,
      after: `Each slip misuses a rule of $re^{i\\theta}$. The exponent takes radians, the argument depends on the quadrant, moduli multiply while arguments add, a quotient subtracts the second argument from the first, a power raises the modulus too, and the full turn $2\\pi k$ is divided by $n$ along with the angle. Converting back, or multiplying the answer by the denominator, catches each slip.`,
      link:'',
    },
    faq: {
      title: `Exponential Form FAQ`,
    },
  }




  const introContent = {
  id: "intro",
  title: "The Elegant Union of Exponentials and Circles",
  content: `The [trigonometric form](!/complex-numbers/trigonometric-form) $r\\text{cis}\\theta$ simplifies multiplication and powers, but notation can be streamlined further. Euler's formula reveals that $e^{i\\theta}$ equals $\\cos\\theta + i\\sin\\theta$, allowing us to write any complex number as $z = re^{i\\theta}$. This exponential form inherits all the advantages of trigonometric representation while invoking the familiar rules of exponents — multiplication adds exponents, division subtracts them, and powers simply multiply.`
}

// FAQ pass 2026-10-31: cut three heading questions: "What is Euler's
// formula?" (h2 Euler's Formula), "What is Euler's identity and why is it
// famous?" (h2 Euler's Identity) and "Why is exponential form useful?" (h2 Why
// Exponential Form Matters). Kept why the formula works and cis. Added i to
// the i and ln(-1) (fact boxes under "Euler's Formula" and "Euler's
// Identity"), degrees in the exponent and adding in exponential form (pitfall
// and closing paragraph of "The Exponential Form of a Complex Number"); no
// heading asks any of them.
const faqQuestions = {
  obj1: {
    question: "Why does Euler's formula work?",
    answer: "Because the power series for the exponential, split into its even and odd terms, produces exactly the series for cosine and for sine once i is substituted. Nothing is assumed: the identity falls out of expansions already known for real numbers. Differentiating both sides gives a second, shorter argument.",
    sectionId: "2"
  },
  obj2: {
    question: "What is the relationship between cis and the exponential form?",
    answer: "They are the same thing written differently, since cis theta and e to the i theta both denote cosine plus i sine. The exponential spelling is preferred because it obeys the ordinary rules of exponents, making the multiplication and power laws automatic rather than facts to memorise separately.",
    sectionId: "notation"
  },
  obj3: {
    question: "Is $i^i$ a real number?",
    answer: "Yes. Since $i = e^{i\\pi/2}$, raising it to the power $i$ gives $i^i = e^{i \\cdot i\\pi/2} = e^{-\\pi/2} \\approx 0.2079$. The value is not unique: $i$ also equals $e^{i(\\pi/2 + 2\\pi k)}$ for every integer $k$, and these angles give infinitely many values $e^{-\\pi/2 - 2\\pi k}$. Every one of them is a positive real number; $e^{-\\pi/2}$ is the one that comes from the principal argument.",
    sectionId: "1"
  },
  obj4: {
    question: "What is $\\ln(-1)$?",
    answer: "In the complex numbers it is $i\\pi$, because Euler's identity says $e^{i\\pi} = -1$. Adding full turns gives every other value, $i\\pi + 2\\pi k i$ for any integer $k$, so the complex logarithm has infinitely many values. Among the real numbers $\\ln(-1)$ stays undefined, since $e^x$ is positive for every real $x$. Leibniz and Johann Bernoulli argued over it in letters, and Bernoulli held that it was $0$, like $\\ln 1$.",
    sectionId: "3"
  },
  obj5: {
    question: "Can the angle in $e^{i\\theta}$ be in degrees?",
    answer: "No, it must be in radians, because Euler's formula comes from Taylor series in which $\\theta$ is measured in radians. Writing $3 + 4i = 5e^{i \\cdot 53.13}$ with the angle in degrees gives a different point, about $-4.81 + 1.37i$. Converting first, $53.13° \\cdot \\frac{\\pi}{180°} \\approx 0.927$, gives $5e^{i \\cdot 0.927} \\approx 3 + 4i$. Degrees are only safe where the unit is written down, as in $\\text{cis}\\,53.13°$.",
    sectionId: "4"
  },
  obj6: {
    question: "How do you add two complex numbers in exponential form?",
    answer: "By converting them back to $a + bi$ first. The exponent rules cover products, quotients and powers, but there is no rule for $e^{i\\alpha} + e^{i\\beta}$, so a sum is worked out across and up and then turned back into $re^{i\\theta}$ if needed. For example, $e^{i\\pi/2} + e^{i\\pi} = i + (-1) = -1 + i = \\sqrt{2}e^{i \\cdot 3\\pi/4}$. This is why the algebraic form stays in use beside the exponential one.",
    sectionId: "4"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Exponential Form of Complex Numbers",
    "description": "Master the exponential form z = re^(iθ) of complex numbers. Learn Euler's formula, Euler's identity, and how to multiply, divide, and find powers and roots using exponential notation.",
    "url": "https://www.learnmathclass.com/complex-numbers/exponential-form",
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
      "name": "Exponential Form of Complex Numbers"
    },
    "teaches": [
      "Euler's formula e^(iθ) = cos θ + i sin θ",
      "Euler's identity e^(iπ) + 1 = 0",
      "Exponential form z = re^(iθ)",
      "Converting between algebraic and exponential forms",
      "Multiplication and division in exponential form",
      "Powers and roots using exponential notation",
      "Applications in signal processing and physics",
      "Side-by-side comparison of operations in algebraic vs exponential form"
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
        "name": "Exponential Form",
        "item": "https://www.learnmathclass.com/complex-numbers/exponential-form"
      }
    ]
  }

}





  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.

  const conceptIntroFigures = {
    wasteTable: ciWasteTable,
    freeTable: ciFreeTable,
  };

  const demoUnits = {
    euler: demoUnitFrame({
      svg: eulerFormulaDiagrams.theta45,
      caption: 'e^(i&#952;) at &#952; = 45&#176;: the point (cos &#952;, sin &#952;)',
      text: 'The point e^(i&#952;) sits on the unit circle at angle &#952;, with horizontal leg cos &#952; and vertical leg sin &#952; drawn in: Euler&#8217;s formula is the statement that the exponential of an imaginary number is a point on this circle. At 45&#176; both legs are &#8730;2/2. Sweep &#952; round the circle on the',
      href: '/complex-numbers/visual-tools/euler-formula',
      linkText: 'Euler formula visualizer',
    }),
    identity: demoUnitFrame({
      svg: eulerFormulaDiagrams.theta180,
      caption: 'e^(i&#960;) = &#8722;1',
      text: 'At &#952; = &#960; the point has travelled half way round the unit circle and sits at &#8722;1 on the real axis: the sine leg has vanished and the cosine leg points left. That single position is Euler&#8217;s identity, e^(i&#960;) + 1 = 0. Park the angle at &#960; on the',
      href: '/complex-numbers/visual-tools/euler-formula',
      linkText: 'Euler formula visualizer',
    }),
    mult: demoUnitFrame({
      svg: complexMultiplicationDiagrams.general,
      caption: 'z&#8321;z&#8322;: arguments add, moduli multiply',
      text: 'The product sits at the angle &#952;&#8321; + &#952;&#8322; marked in the picture and at distance |z&#8321;||z&#8322;| from the origin: multiplying by a complex number rotates by its argument and scales by its modulus. Nothing in the algebraic expansion shows this; the picture does. Turn one factor and watch the product swing round on the',
      href: '/complex-numbers/visual-tools/multiplication',
      linkText: 'complex multiplication tool',
    }),
    power: demoUnitFrame({
      svg: deMoivreDiagrams.squared,
      caption: 'z and z&#178;: (re^(i&#952;))&#178; = r&#178;e^(2i&#952;)',
      text: 'Squaring doubles the angle and squares the length, exactly what the exponent rule (e^(i&#952;))&#178; = e^(2i&#952;) predicts; the picture and the exponential form say the same thing in two languages. Raise the power and watch the exponent rule turn into a spiral on the',
      href: '/complex-numbers/visual-tools/demoivre-visualizer',
      linkText: 'De Moivre visualizer',
    }),
    scaledPolar: demoUnitFrame({
      svg: eulerFormulaDiagrams.scaled,
      caption: 'z = 2e^(iπ/3)',
      text: 'The exponential form reads as directions for reaching z: turn to the angle &#952; = &#960;/3, then go out a distance r = 2. The factor e^(i&#952;) supplies the direction on the unit circle and r stretches it, so the point lands on the circle of radius 2, with coordinates r cos &#952; = 1 and r sin &#952; = &#8730;3 &#8212; the algebraic form 1 + &#8730;3 i. Change r and &#952; on the',
      href: '/complex-numbers/visual-tools/euler-formula',
      linkText: 'Euler\'s formula visualizer',
    }),
    divAngles: demoUnitFrame({
      svg: complexDivisionDiagrams.general,
      caption: 'Dividing subtracts the angles',
      text: 'z&#8321; = 4 + 2i divided by z&#8322; = 1 &#8722; i. In exponential form the quotient is (r&#8321;/r&#8322;) e^(i(&#952;&#8321; &#8722; &#952;&#8322;)): its angle is &#952;&#8321; &#8722; &#952;&#8322;, marked on the figure, and its length is &#8730;20/&#8730;2 = &#8730;10. The result is 1 + 3i. Try other pairs on the',
      href: '/complex-numbers/visual-tools/division',
      linkText: 'complex division visualizer',
    }),
  };

  // MistakeFix batch 12, 2026-11-03: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj16 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'putting-degrees-in-the-exponent', name: `Putting degrees in the exponent`, errorAt: 0,
        what: `The argument of a number is found in degrees, and the degree value is written straight into the exponent. Euler's formula comes from Taylor series in which $\\theta$ is measured in radians, so $e^{i\\theta}$ reads any number in the exponent as radians.`,
        wrong: [`The argument of $3 + 4i$ is $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 53.13}$. Read in radians, $5e^{i \\cdot 53.13} = 5(\\cos 53.13 + i\\sin 53.13) \\approx -4.81 + 1.37i$.`],
        right: [`Convert first, $53.13° \\cdot \\frac{\\pi}{180°} \\approx 0.927$, so $3 + 4i = 5e^{i \\cdot 0.927}$. Check: $5(\\cos 0.927 + i\\sin 0.927) \\approx 3 + 4i$.`],
        why: `The trigonometric form is often written in degrees, as in $\\text{cis}(45°)$, and calculators are often left in degree mode. The habit carries over to the exponent.`,
        check: `Convert back with $a = r\\cos\\theta$ and $b = r\\sin\\theta$ in radian mode; the result must be the original number. An exponent larger than $2\\pi \\approx 6.28$ in a plain conversion is a warning sign.` },
      { id: 'ignoring-the-quadrant', name: `Ignoring the quadrant`, errorAt: 0,
        what: `The argument is taken as $\\arctan(b/a)$ with no adjustment. The ratio $b/a$ is the same for $z$ and $-z$, and the arctangent only returns angles between $-\\pi/2$ and $\\pi/2$, so a point with $a < 0$ is given the angle of the opposite point.`,
        wrong: [`For $z = -1 - i$, $\\theta = \\arctan\\frac{-1}{-1} = \\arctan(1) = \\pi/4$, so $-1 - i = \\sqrt{2}e^{i\\pi/4}$. But $\\sqrt{2}e^{i\\pi/4} = 1 + i$.`],
        right: [`$r = \\sqrt{2}$. Since $a < 0$ and $b < 0$, the third line of the case formula applies: $\\theta = \\arctan(1) - \\pi = -3\\pi/4$. So $-1 - i = \\sqrt{2}e^{-i \\cdot 3\\pi/4}$, and indeed
$$\\sqrt{2}\\left(\\cos(-3\\pi/4) + i\\sin(-3\\pi/4)\\right)$$
$$= \\sqrt{2}\\left(-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}i\\right) = -1 - i$$`],
        why: `In first-quadrant examples such as $1 + i$ the plain arctangent is correct, and the case formula looks like fine print.`,
        check: `Sketch the point. $-1 - i$ lies in the third quadrant, so its argument must lie between $-\\pi$ and $-\\pi/2$; $\\pi/4$ points into the first quadrant.` },
      { id: 'adding-the-moduli', name: `Adding the moduli`, errorAt: 0,
        what: `When two numbers are multiplied, the arguments add, and the moduli are added as well instead of multiplied.`,
        wrong: [`$(2e^{i\\pi/4})(3e^{i\\pi/4}) = (2 + 3)e^{i(\\pi/4 + \\pi/4)} = 5e^{i\\pi/2} = 5i$.`],
        right: [`The moduli multiply, $2 \\cdot 3 = 6$, and the arguments add, $\\pi/4 + \\pi/4 = \\pi/2$. The product is $6e^{i\\pi/2} = 6i$.`],
        why: `The arguments sit in the exponent, where multiplication turns into addition; the moduli are ordinary factors in front, where multiplication stays multiplication. The two parts look alike and get the same treatment.`,
        check: `Try a real case. With both arguments $0$, $(2e^{i \\cdot 0})(3e^{i \\cdot 0}) = 2 \\cdot 3 = 6$, not $5$.` },
      { id: 'subtracting-in-the-wrong-order', name: `Subtracting in the wrong order`, errorAt: 0,
        what: `In a quotient the arguments are subtracted the wrong way round, the numerator's argument from the denominator's.`,
        wrong: [`$\\frac{6e^{i\\pi/2}}{3e^{i\\pi/6}}$: moduli $6/3 = 2$, arguments $\\pi/6 - \\pi/2 = -\\pi/3$, so the quotient is $2e^{-i\\pi/3} = 1 - \\sqrt{3}i$.`],
        right: [`The argument of the quotient is $\\theta_1 - \\theta_2 = \\pi/2 - \\pi/6 = \\pi/3$, so the quotient is $2e^{i\\pi/3} = 1 + \\sqrt{3}i$.`],
        why: `Subtraction is the one step where order matters, and the wrong answer differs only in the sign of the angle, so it looks just as plausible.`,
        check: `Multiply the answer by the denominator; it must give the numerator back. $2e^{i\\pi/3} \\cdot 3e^{i\\pi/6} = 6e^{i\\pi/2}$, while $2e^{-i\\pi/3} \\cdot 3e^{i\\pi/6} = 6e^{-i\\pi/6}$.` },
      { id: 'leaving-the-modulus-unpowered', name: `Leaving the modulus unpowered`, errorAt: 0,
        what: `In a power the angle is multiplied by $n$, but the modulus is left as it was.`,
        wrong: [`$(\\sqrt{2}e^{i\\pi/4})^{12} = \\sqrt{2}e^{i \\cdot 12 \\cdot \\pi/4} = \\sqrt{2}e^{i \\cdot 3\\pi} = -\\sqrt{2}$.`],
        right: [`$(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 3\\pi} = 64 \\cdot (-1) = -64$.`],
        why: `In De Moivre's theorem for the unit circle, $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$, there is no modulus at all, and the angle step is the memorable part.`,
        check: `$|z^n| = |z|^n$. Here $|1 + i| = \\sqrt{2}$, so $|(1 + i)^{12}|$ must be $(\\sqrt{2})^{12} = 64$. A second route agrees: $(1 + i)^2 = 2i$, so $(1 + i)^{12} = (2i)^6 = 64i^6 = -64$.` },
      { id: 'adding-the-full-turn-after-dividing', name: `Adding the full turn after dividing`, errorAt: 1,
        what: `In the root formula, the argument $\\phi$ is divided by $n$ and the full turn $2\\pi k$ is added afterwards, instead of dividing $\\phi + 2\\pi k$ as a whole. The full turns then survive undivided, and every $k$ gives the same point.`,
        wrong: [`$z^2 = -9$ with $-9 = 9e^{i\\pi}$.`, `Then $z_k = 3e^{i(\\pi/2 + 2\\pi k)}$: $k = 0$ gives $3e^{i\\pi/2} = 3i$, and $k = 1$ gives $3e^{i \\cdot 5\\pi/2} = 3i$ again. One root is found twice.`],
        right: [`$z^2 = -9$ with $-9 = 9e^{i\\pi}$.`, `$z_k = 3e^{i(\\pi + 2\\pi k)/2}$. For $k = 0$, $3e^{i\\pi/2} = 3i$; for $k = 1$, $3e^{i \\cdot 3\\pi/2} = -3i$. Both satisfy $(\\pm 3i)^2 = -9$.`],
        why: `Adding $2\\pi k$ at the end looks like the familiar remark that an argument repeats every full turn, which is true for a number but not for its roots.`,
        check: `The $n$ roots must be spaced $2\\pi/n$ apart around the circle. If two values of $k$ give the same point, the $2\\pi k$ was not divided by $n$.` },
    ],
  };

  // Formula Summary 2026-11-07: the page's own formulas, replacing the summary table summaryTable.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    sides: [
      { name: 'Algebraic form', sub: 'with $z = a + bi$ and $w = c + di$', tone: 'direct' },
      { name: 'Exponential form', sub: 'with $z = r_1e^{i\\theta_1}$ and $w = r_2e^{i\\theta_2}$', tone: 'reversed' },
    ],
    rows: [
      { op: 'Multiplication', cells: [
        { formula: '$z \\cdot w = (ac - bd) + (ad + bc)i$', effect: 'Multiply out with FOIL, then apply $i^2 = -1$.' },
        { formula: '$z \\cdot w = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$', effect: 'The moduli multiply and the arguments add, as [multiplication in exponential form](!#6) shows.' },
      ] },
      { op: 'Division', cells: [
        { formula: '$\\displaystyle \\frac{z}{w} = \\frac{z \\cdot \\bar{w}}{w \\cdot \\bar{w}}$', effect: 'Multiply the top and the bottom by $\\bar{w}$, then expand.' },
        { formula: '$\\displaystyle \\frac{z}{w} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$', effect: 'The moduli divide and the arguments subtract, from [division in exponential form](!#7).' },
      ] },
      { op: 'Power', cells: [
        { formula: '$z^n = (a + bi)^n$', effect: 'Binomial expansion, then every $i^2$ collapsed to $-1$, again and again.' },
        { formula: '$z^n = r_1^n \\cdot e^{in\\theta_1}$', effect: "De Moivre's rule: the modulus goes to the $n$-th power and the argument is multiplied by $n$, as [powers in exponential form](!#8) shows.",
          condition: 'for an integer $n$' },
      ] },
      { op: 'n-th root', cells: [
        { formula: '$z^n = w$', effect: 'No clean closed-form method in algebraic form.' },
        { formula: '$z_k = r_2^{1/n} \\cdot e^{i(\\theta_2 + 2\\pi k)/n}$', effect: 'All $n$ solutions of $z^n = w$, from [roots in exponential form](!#9).',
          condition: '$k = 0, 1, \\ldots, n - 1$' },
      ] },
      { op: 'Modulus', cells: [
        { formula: '$|z| = \\sqrt{a^2 + b^2}$', effect: 'Computed from the two parts.' },
        { formula: '$|z| = r_1$', effect: 'Read directly from the form; [converting between forms](!#5) finds it from $a$ and $b$.' },
      ] },
      { op: 'Argument', cells: [
        { formula: '$\\arg(z) = \\arctan(b/a)$', effect: 'Computed from the two parts.', condition: 'adjust for the quadrant' },
        { formula: '$\\arg(z) = \\theta_1$', effect: 'Read directly from the exponent, as [converting between forms](!#5) shows.' },
      ] },
      { op: 'Conjugate', cells: [
        { formula: '$\\bar{z} = a - bi$', effect: 'The imaginary part changes sign.' },
        { formula: '$\\bar{z} = r_1 \\cdot e^{-i\\theta_1}$', effect: 'The modulus stays the same and the argument changes sign, in the notation of [the exponential form](!#4).' },
      ] },
    ],
  };

  // ProofSteps 2026-11-08: "Deriving Euler's formula from Taylor series" (chain), from the page's own formulas.
  const proofStepsData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    goal: { label: 'Derive', text: '$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$' },
    steps: [
      { math: '$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$', tag: 'series', why: 'The Taylor series of the exponential function' },
      { math: '$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$', tag: 'substitute', why: 'Substituting $x = i\\theta$' },
      { math: '$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$', tag: 'powers of i', why: 'The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$' },
      { math: '$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$', tag: 'key step', key: true, why: 'Separating real and imaginary parts' },
    ],
    conclusion: { text: '$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$', say: 'The real part is the Taylor series for $\\cos\\theta$; the imaginary part is the Taylor series for $\\sin\\theta$.' },
  };

  // ProofSteps 2026-11-08: "Deriving Euler's identity" (chain), from the page's own formulas.
  const proofStepsData2 = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    goal: { label: 'Derive', text: '$e^{i\\pi} + 1 = 0$' },
    steps: [
      { math: '$e^{i\\pi} = \\cos\\pi + i\\sin\\pi$', tag: 'substitute', why: "Euler's formula with $\\theta = \\pi$" },
      { math: '$= -1 + 0$', tag: 'key step', key: true, why: '$\\cos\\pi = -1$ and $\\sin\\pi = 0$' },
      { math: '$= -1$', tag: 'simplify', why: 'The imaginary part vanishes' },
      { math: '$e^{i\\pi} + 1 = 0$', tag: 'rearrange', why: 'Rearranging' },
    ],
  };

  // ProofSteps 2026-11-08: "Deriving the multiplication rule" (chain), from the page's own formulas.
  const proofStepsData3 = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    goal: { label: 'Derive', text: '$z_1 \\cdot z_2 = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$' },
    steps: [
      { math: '$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2}$', tag: 'substitute', why: 'Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$' },
      { math: '$= r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2}$', tag: 'regroup', why: 'Grouping the two moduli together' },
      { math: '$= r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$', tag: 'key step', key: true, why: 'The standard law of exponents: $e^a \\cdot e^b = e^{a+b}$' },
    ],
    conclusion: { text: '$|z_1 \\cdot z_2| = r_1r_2$ and $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$', say: 'The moduli multiply. The arguments add.' },
  };

  return {
  props:{
    proofStepsData3,
    proofStepsData2,
    proofStepsData,
    formulaSummaryData,
    pitfallData,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj2Table,
    obj5Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Exponential Form: Euler's Formula & Identity | Learn Math Class",
      description: "Master the exponential form z = re^(iθ) of complex numbers. Learn Euler's formula, Euler's identity, and how to multiply, divide, and find powers and roots using exponential notation.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/exponential-form",
      name: "Exponential Form of Complex Numbers"
    },
  }
}
   }


export default function ExponentialFormPage({ proofStepsData3, proofStepsData2, proofStepsData, formulaSummaryData, pitfallData,
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj5Table,
  obj9Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 4 concept introduction — template D (comparison).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `The trigonometric form already describes every complex number by distance and angle.`,
        content: [
          `$2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$ is the point at distance $2$ and angle $\\frac{\\pi}{3}$, which is $1 + \\sqrt{3}i$. Nothing is wrong with it, so any new way of writing the same number has to earn its place.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Squaring it in trigonometric form takes five steps; written as an exponential it takes one.`,
        content: [
          `The trigonometric form writes the angle twice and keeps cosine and sine apart, so every product has to be expanded and then put back together with trigonometric identities. The exponential form carries the angle once, in an exponent, and the ordinary exponent rules do the work.`,
          ciTable('wasteTable'),
          `It is the difference between writing $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$ and writing $2^5$: the same number, but one of them can be worked with directly.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `Writing a complex number as $z = re^{i\\theta}$, with $r$ its modulus and $\\theta$ its argument in radians, is its [exponential form](!/complex-numbers/definitions#exponential_form).`,
        formula: [
          `Euler's formula transforms the [trigonometric form](!/complex-numbers/trigonometric-form) into something more compact. Since $\\text{cis}\\theta = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$, any complex number $z = r\\text{cis}\\theta$ can be written:`,
          `@academic[formula_callout:Exponential Form
$$z = re^{i\\theta}$$
/complex-numbers/formulas#exponential_form]@`,
          `@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@`,
          `Here $r = |z|$ is the [modulus](!/complex-numbers/absolute-value) and $\\theta = \\arg(z)$ is the argument. The exponential form packages both pieces of information into a single expression resembling a power.`,
        ],
        footer: `So $1 + \\sqrt{3}i = 2e^{i\\pi/3}$.`,
      },
      {
        id: 'kind',
        lead: `It is the same number as before, in a third notation.`,
        content: [
          `The three representations of a complex number are equivalent:`,
          `@academic[formula_callout:The Exponential Form of a Complex Number
$$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$]@`,
          `Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.`,
          `@academic[rule_plain:Every nonzero complex number has an exponential form.]@`,
          `The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
          <div key={'unit-scaledPolar'} dangerouslySetInnerHTML={{ __html: demoUnits.scaledPolar }} />,
          `With r = 1 the same point sits on the unit circle: e^(iθ) alone is a pure direction.`,
        ],
      },
      {
        id: 'free',
        lead: `Multiplication, powers, reciprocals and division then follow without being asked for.`,
        content: [
          `The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.`,
          ciTable('freeTable'),
        ],
      },
      {
        id: 'caveat',
        lead: `All of this has one cause — Euler's formula makes e^(iθ) obey the exponent rules — and it has a price.`,
        content: [
          `The exponent rules only work with the angle in radians, because Euler's formula is stated in radians. And the form helps only with multiplying: adding two numbers in exponential form still means going back to $a + bi$, since there is no rule for $e^{i\\alpha} + e^{i\\beta}$. [Euler's formula](!/complex-numbers/exponential-form#1) itself is at the top of the page.`,
          `@academic[pitfall,aside:true,width:35%:Putting degrees in the exponent
Writing $3 + 4i = 5e^{i \\cdot 53.13}$ feeds degrees into a formula that reads radians: $5e^{i \\cdot 53.13} \\approx -4.81 + 1.37i$, a different point. With the angle in radians, $5e^{i \\cdot 0.927} \\approx 3 + 4i$.
[Read more](!#pitfall-putting-degrees-in-the-exponent)]@`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers the notation, converting between the forms, and multiplication, division, powers and roots in exponential form.`,
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
                  <div key={'unit-euler'} dangerouslySetInnerHTML={{ __html: demoUnits.euler }} />,
          `The formula turns the trigonometric form into a single exponential, which is what makes it useful.`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <DiagramFrame
            key={'proof-steps-euler-formula-taylor-proof'}
            id="euler-formula-taylor-proof"
            title="Deriving Euler's formula from Taylor series"
            source="/complex-numbers/exponential-form"
            related={false}
            before={"The series argument above, one line per row: substitute $i\\theta$, reduce the powers of $i$, then split into real and imaginary parts."}
            after={"The cycle of the powers of $i$ sorts the terms: the even powers land in the real part and the odd powers in the imaginary part."}
          >
            <ProofSteps data={proofStepsData} variant="chain" />
          </DiagramFrame>,
          sectionsContent.obj2.afterProof,
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
          />,
          `@academic[punchline:Feed an imaginary number into the series for $e^x$ and it splits exactly into the series for cosine and sine.]@`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <DiagramFrame
            key={'proof-steps-euler-identity-steps'}
            id="euler-identity-steps"
            title="Deriving Euler's identity"
            source="/complex-numbers/exponential-form"
            related={false}
            before={"The substitution $\\theta = \\pi$ above, split at each equals sign."}
            after={"Only two values are needed, $\\cos\\pi = -1$ and $\\sin\\pi = 0$; the last step is a rearrangement."}
          >
            <ProofSteps data={proofStepsData2} variant="chain" />
          </DiagramFrame>,
          sectionsContent.obj3.afterProof,
                  <div key={'unit-identity'} dangerouslySetInnerHTML={{ __html: demoUnits.identity }} />,
          `The identity is Euler&#8217;s formula evaluated at the one angle where both legs are integers.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          <ConceptIntro key={'obj4-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'notation',
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
          <NotationCheatSheet
            key={'notation-sheet'}
            sheet={complexNotationSheet}
            current={'/complex-numbers/exponential-form'}
          />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <DiagramFrame
            key={'proof-steps-exponential-form-multiplication-proof'}
            id="exponential-form-multiplication-proof"
            title="Deriving the multiplication rule"
            source="/complex-numbers/exponential-form"
            related={false}
            before={"The product above, split at each equals sign, with the reason for each step."}
            after={"Adding the arguments is adding exponents; only the moduli are multiplied."}
          >
            <ProofSteps data={proofStepsData3} variant="chain" />
          </DiagramFrame>,
          sectionsContent.obj6.afterProof,
                  <div key={'unit-mult'} dangerouslySetInnerHTML={{ __html: demoUnits.mult }} />,
          `Adding exponents and adding angles are the same operation.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-divAngles'} dangerouslySetInnerHTML={{ __html: demoUnits.divAngles }} />,
          `Here θ₂ is negative, so subtracting it turns the quotient further counterclockwise than z₁.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
                  <div key={'unit-power'} dangerouslySetInnerHTML={{ __html: demoUnits.power }} />,
          `Roots divide the exponent, and therefore the angle, in the same way.`,
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
          `@academic[punchline:The full turns hidden in a number's angle are where its $n$ different $n$-th roots come from.]@`,
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
          <DiagramFrame
            key={'formula-summary'}
            id="exponential-form-formula-summary"
            title="Operations in two forms"
            source="/complex-numbers/exponential-form"
            related={{ href: '/complex-numbers/formulas', label: 'All complex number formulas' }}
            after={sectionsContent.obj11.formulaSheetAfter}
          >
            <FormulaSheet data={formulaSummaryData} variant="paired" />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <DiagramFrame
            key={'obj16-mistakes'}
            id="exponential-form-pitfalls"
            title="Common pitfalls with the exponential form"
            source="/complex-numbers/exponential-form"
            after={sectionsContent.obj16.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Exponential Form</h1>
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
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}