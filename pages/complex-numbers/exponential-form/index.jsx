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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic → Exponential&nbsp;&nbsp;<span style="font-size: 13px;">(a + bi → re&#x2071;&#x1D52;)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">
        r = √(a² + b²)<br/>
        θ = arctan(b ⁄ a), adjusted for quadrant<br/>
        z = re&#x2071;&#x1D52;
      </td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">
        z = 1 + i<br/>
        r = √(1² + 1²) = √2<br/>
        θ = arctan(1) = π⁄4&nbsp;&nbsp;<span style="font-size: 13px;">(first quadrant)</span><br/>
        <span style="font-weight: bold;">→ 1 + i = √2 · e&#x2071;⁽π/4⁾</span>
      </td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Exponential → Algebraic&nbsp;&nbsp;<span style="font-size: 13px;">(re&#x2071;&#x1D52; → a + bi)</span></td>
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
      <th style="${tableHeaders.summary}">Exponential form<br/><span style="font-weight: normal; font-size: 13px;">z = r₁e&#x2071;⁽&#x1D52;¹⁾,&nbsp;w = r₂e&#x2071;⁽&#x1D52;²⁾</span></th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplication&nbsp;&nbsp;z · w</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ac − bd) + (ad + bc)i&nbsp;&nbsp;<span style="font-size: 13px;">(FOIL + apply i² = −1)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁r₂ · e&#x2071;⁽&#x1D52;¹ ⁺ &#x1D52;²⁾&nbsp;&nbsp;<span style="font-size: 13px;">(moduli multiply, args add)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Division&nbsp;&nbsp;z ⁄ w</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply num and denom by w̄, then expand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(r₁ ⁄ r₂) · e&#x2071;⁽&#x1D52;¹ ⁻ &#x1D52;²⁾&nbsp;&nbsp;<span style="font-size: 13px;">(moduli divide, args subtract)</span></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power&nbsp;&nbsp;zⁿ&nbsp;&nbsp;<span style="font-size: 13px;">(integer n)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">binomial expansion + repeated i²-collapse</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₁ⁿ · e&#x2071;⁽ⁿ&#x1D52;¹⁾&nbsp;&nbsp;<span style="font-size: 13px;">(modulus to nth power, arg × n; De Moivre)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">n-th root&nbsp;&nbsp;<span style="font-size: 13px;">(zⁿ = w)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no clean closed-form method</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r₂&#xB9;&#x141;ⁿ · e&#x2071;⁽&#x1D52;² ⁺ ²&#x3C0;&#x1D4F;⁾&#x141;ⁿ&nbsp;&nbsp;<span style="font-size: 13px;">for k = 0, 1, …, n − 1</span></td>
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
      <td style="padding: 12px 15px; color: #34495e;">r₁ · e&#x207B;&#x2071;&#x1D52;¹&nbsp;&nbsp;<span style="font-size: 13px;">(modulus same, argument negates)</span></td>
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

$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

Substituting $x = i\\theta$:

$$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$$

The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and so on. Substituting:

$$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$$

Separating real and imaginary parts:

$$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$$

The real part is the Taylor series for $\\cos\\theta$. The imaginary part is the Taylor series for $\\sin\\theta$. Therefore $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

Geometrically, as $\\theta$ increases from $0$, the point $e^{i\\theta}$ traces the unit circle in the [complex plane](!/complex-numbers/geometric-representation). At $\\theta = 0$, we start at $1$. At $\\theta = \\pi/2$, we reach $i$. At $\\theta = \\pi$, we arrive at $-1$. At $\\theta = 2\\pi$, we complete the circle and return to $1$. The exponential $e^{i\\theta}$ parametrizes circular motion.`,
  after: ``,
  link: '',
},
 

    obj3: {
  title: `Euler's Identity`,
  before: ``,
  content: `A special case of Euler's formula achieves legendary status. Substituting $\\theta = \\pi$:

$$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$$

Rearranging:

@academic[formula_callout:Euler's Identity
$$e^{i\\pi} + 1 = 0$$
/complex-numbers/formulas#eulers_identity]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

This equation — Euler's identity — connects five of mathematics' most fundamental constants in a single statement. The number $e$, base of natural logarithms and central to calculus. The number $i$, foundation of complex arithmetic. The number $\\pi$, ratio of circumference to diameter and key to circular geometry. The number $1$, the multiplicative identity. The number $0$, the additive identity.

Each constant emerged from different mathematical needs: $e$ from growth and limits, $i$ from algebraic completeness, $\\pi$ from measurement of circles, $1$ and $0$ from the structure of arithmetic itself. That a single equation links all five suggests deep unity beneath apparently disparate branches of mathematics.

Mathematicians and physicists routinely cite Euler's identity as the most beautiful formula ever discovered. Richard Feynman called it "the most remarkable formula in mathematics." The equation appears on countless posters, t-shirts, and tattoos — a rare piece of abstract mathematics that captures popular imagination.

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

$$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$

Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.

The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.

Every nonzero complex number has an exponential form. The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
  after: ``,
  link: '',
},
   
    obj5: {
  title: `Converting Between Forms`,
  before: ``,
  content: `Moving between [algebraic](!/complex-numbers/algebraic-form), trigonometric, and exponential forms requires computing modulus and argument or recovering real and imaginary parts.

**Algebraic to Exponential:**

Given $z = a + bi$, find $r$ and $\\theta$:

$$r = \\sqrt{a^2 + b^2}$$

$$\\theta = \\begin{cases} \\arctan(b/a) & \\text{if } a > 0 \\\\ \\arctan(b/a) + \\pi & \\text{if } a < 0, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & \\text{if } a < 0, b < 0 \\\\ \\pi/2 & \\text{if } a = 0, b > 0 \\\\ -\\pi/2 & \\text{if } a = 0, b < 0 \\end{cases}$$

Then write $z = re^{i\\theta}$.

Example: Convert $z = 1 + i$. The modulus is $r = \\sqrt{1 + 1} = \\sqrt{2}$. With $a = 1 > 0$ and $b = 1 > 0$, the argument is $\\theta = \\arctan(1) = \\pi/4$. Thus $1 + i = \\sqrt{2}e^{i\\pi/4}$.

**Exponential to Algebraic:**

Given $z = re^{i\\theta}$, compute:

@academic[formula_callout:Polar to Rectangular Conversion
$$a = r\\cos\\theta, \\qquad b = r\\sin\\theta$$
/complex-numbers/formulas#polar_to_rectangular_conversion]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Then write $z = a + bi$.

Example: Convert $z = 4e^{i(2\\pi/3)}$. The real part is $a = 4\\cos(2\\pi/3) = 4(-1/2) = -2$. The imaginary part is $b = 4\\sin(2\\pi/3) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$. Thus $4e^{i(2\\pi/3)} = -2 + 2\\sqrt{3}i$.

Both conversions are routine once the formulas are memorized. The exponential form serves computation; the algebraic form displays components explicitly.`,
  after: ``,
  link: '',
},
  

    obj6: {
  title: `Multiplication in Exponential Form`,
  before: ``,
  content: `Multiplying complex numbers in exponential form reduces to elementary exponent rules. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$:

$$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2} = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$

The moduli multiply: $|z_1 \\cdot z_2| = r_1r_2$. The arguments add: $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$.

This rule follows from the standard law of exponents: $e^a \\cdot e^b = e^{a+b}$. The complex setting changes nothing about how exponents combine.

Geometrically, multiplication scales and rotates. Multiplying by $z_2 = r_2e^{i\\theta_2}$ stretches lengths by factor $r_2$ and rotates counterclockwise by angle $\\theta_2$. Multiplying by $e^{i\\pi/2} = i$ rotates by $90°$ without changing length. Multiplying by $2$ doubles length without rotation. Multiplying by $2e^{i\\pi/4}$ doubles length and rotates $45°$.

Example: Compute $(3e^{i\\pi/6})(2e^{i\\pi/3})$.

Multiply moduli: $3 \\cdot 2 = 6$.
Add arguments: $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2$.

Result: $6e^{i\\pi/2} = 6i$.

Compare this to multiplying the equivalent algebraic forms and simplifying — the exponential approach is faster and less error-prone.`,
  after: ``,
  link: '',
},
   

    obj7: {
  title: `Division in Exponential Form`,
  before: ``,
  content: `Division mirrors multiplication with subtraction replacing addition. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$ with $z_2 \\neq 0$:

$$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot \\frac{e^{i\\theta_1}}{e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$

The moduli divide: $|z_1/z_2| = r_1/r_2$. The arguments subtract: $\\arg(z_1/z_2) = \\theta_1 - \\theta_2$.

The exponent law $e^a / e^b = e^{a-b}$ governs the calculation, just as with real exponentials.

Geometrically, dividing by $z_2$ shrinks by factor $1/r_2$ and rotates clockwise by angle $\\theta_2$ (equivalently, counterclockwise by $-\\theta_2$). Division undoes multiplication: if $w = z_1 \\cdot z_2$, then $z_1 = w/z_2$ recovers the original factor.

Example: Compute $\\frac{8e^{i(5\\pi/6)}}{2e^{i(\\pi/3)}}$.

Divide moduli: $8/2 = 4$.
Subtract arguments: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.

Result: $4e^{i\\pi/2} = 4i$.

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

Example: Compute $(1 + i)^{12}$.

Convert to exponential form: $1 + i = \\sqrt{2}e^{i\\pi/4}$.

Apply the power rule: $(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i \\cdot 3\\pi} = 64e^{i \\cdot 3\\pi}$.

Simplify the argument: $3\\pi = 2\\pi + \\pi$, so $e^{i \\cdot 3\\pi} = e^{i\\pi} = -1$.

Result: $64 \\cdot (-1) = -64$.

The computation required no binomial expansion, no tracking of $i$ powers, no collection of terms. Converting to exponential form, applying the power rule, and simplifying completed the calculation in a few lines.`,
  after: ``,
  link: '',
},
  

    obj9: {
  title: `Roots in Exponential Form`,
  before: ``,
  content: `Finding $n$-th roots inverts the power operation. Given $w = Re^{i\\phi}$, the solutions to $z^n = w$ are:

$$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n} \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

Each value of $k$ produces a distinct root. Beyond $k = n-1$, the arguments differ by full rotations of $2\\pi$, repeating previous roots.

All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle of that radius in the [complex plane](!/complex-numbers/geometric-representation). Their arguments differ by $2\\pi/n$, spacing them evenly around the circle. The roots form vertices of a regular $n$-gon.

Example: Find the cube roots of $8$.

Write $8 = 8e^{i \\cdot 0}$ (modulus $8$, argument $0$).

Apply the formula: $z_k = 8^{1/3} e^{i(0 + 2\\pi k)/3} = 2e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$.

$z_0 = 2e^{i \\cdot 0} = 2$
$z_1 = 2e^{i \\cdot 2\\pi/3} = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$
$z_2 = 2e^{i \\cdot 4\\pi/3} = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$

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
      content:`The advantage of exponential form lies in computational simplicity — every operation that requires careful expansion in [algebraic form](!/complex-numbers/algebraic-form) reduces to elementary exponent arithmetic in exponential form. The table below collects each operation in both representations side by side, making the contrast explicit: where the algebraic column needs distribution, conjugates, or term-collection, the exponential column performs the same work via addition, subtraction, or multiplication of the argument $\\theta$.`,
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
  title: "The Elegant Union of Exponentials and Circles",
  content: `The [trigonometric form](!/complex-numbers/trigonometric-form) $r\\text{cis}\\theta$ simplifies multiplication and powers, but notation can be streamlined further. Euler's formula reveals that $e^{i\\theta}$ equals $\\cos\\theta + i\\sin\\theta$, allowing us to write any complex number as $z = re^{i\\theta}$. This exponential form inherits all the advantages of trigonometric representation while invoking the familiar rules of exponents — multiplication adds exponents, division subtracts them, and powers simply multiply.`
}

const faqQuestions = {
  obj1: {
    question: "What is Euler's formula?",
    answer: "Euler's formula states that e^(iθ) = cos θ + i sin θ for any real angle θ. It connects exponential functions with trigonometric functions through the imaginary unit, revealing that growth and oscillation are mathematically unified."
  },
  obj2: {
    question: "How do you prove Euler's formula?",
    answer: "Euler's formula is proven using Taylor series. Substitute iθ into the exponential series e^x = 1 + x + x²/2! + ..., then use the cyclic powers of i to separate real and imaginary parts. The real part becomes the cosine series, and the imaginary part becomes the sine series."
  },
  obj3: {
    question: "What is Euler's identity?",
    answer: "Euler's identity is e^(iπ) + 1 = 0, a special case of Euler's formula when θ = π. It connects five fundamental mathematical constants (e, i, π, 1, and 0) in a single equation, often called the most beautiful formula in mathematics."
  },
  obj4: {
    question: "What is the exponential form of a complex number?",
    answer: "The exponential form writes a complex number as z = re^(iθ), where r is the modulus (distance from origin) and θ is the argument (angle from positive real axis). It is equivalent to the trigonometric form z = r(cos θ + i sin θ) = r cis θ."
  },
  obj5: {
    question: "How do you convert algebraic form to exponential form?",
    answer: "For z = a + bi, calculate r = √(a² + b²) for the modulus and θ = arctan(b/a) adjusted for quadrant for the argument. Then write z = re^(iθ). For example, 1 + i = √2 · e^(iπ/4)."
  },
  obj6: {
    question: "How do you convert exponential form to algebraic form?",
    answer: "For z = re^(iθ), compute the real part a = r cos θ and imaginary part b = r sin θ. Then write z = a + bi. For example, 4e^(i·2π/3) = -2 + 2√3i."
  },
  obj7: {
    question: "How do you multiply complex numbers in exponential form?",
    answer: "To multiply z₁ = r₁e^(iθ₁) and z₂ = r₂e^(iθ₂), multiply the moduli and add the arguments: z₁·z₂ = (r₁r₂)e^(i(θ₁+θ₂)). The standard exponent rule e^a · e^b = e^(a+b) applies directly."
  },
  obj8: {
    question: "How do you divide complex numbers in exponential form?",
    answer: "To divide z₁ = r₁e^(iθ₁) by z₂ = r₂e^(iθ₂), divide the moduli and subtract the arguments: z₁/z₂ = (r₁/r₂)e^(i(θ₁-θ₂)). This follows from the exponent rule e^a / e^b = e^(a-b)."
  },
  obj9: {
    question: "How do you raise a complex number to a power in exponential form?",
    answer: "For z = re^(iθ) and integer n, apply the power rule: z^n = r^n · e^(inθ). The modulus raises to the nth power and the argument multiplies by n. This is De Moivre's theorem in exponential notation."
  },
  obj10: {
    question: "How do you find the nth roots of a complex number?",
    answer: "For w = Re^(iφ), the n roots are z_k = R^(1/n) · e^(i(φ + 2πk)/n) for k = 0, 1, ..., n-1. All roots have modulus R^(1/n) and are evenly spaced around a circle, separated by angle 2π/n."
  },
  obj11: {
    question: "What does e^(iπ) equal?",
    answer: "e^(iπ) = -1. By Euler's formula, e^(iπ) = cos π + i sin π = -1 + 0 = -1. This result, rearranged as e^(iπ) + 1 = 0, is Euler's identity."
  },
  obj12: {
    question: "What does e^(iπ/2) equal?",
    answer: "e^(iπ/2) = i. By Euler's formula, e^(iπ/2) = cos(π/2) + i sin(π/2) = 0 + i·1 = i. This shows that e raised to iπ/2 produces the imaginary unit."
  },
  obj13: {
    question: "Why is exponential form useful for complex numbers?",
    answer: "Exponential form simplifies arithmetic: multiplication adds exponents, division subtracts them, powers multiply the exponent, and roots divide it. It also reveals the connection between circular motion and exponential functions, which is foundational in Fourier analysis, signal processing, and physics."
  },
  obj14: {
    question: "What is the relationship between cis θ and e^(iθ)?",
    answer: "They are equal: cis θ = cos θ + i sin θ = e^(iθ). The notation 'cis' is shorthand for 'cos + i sin,' while e^(iθ) expresses the same value using Euler's formula. Both represent a point on the unit circle at angle θ."
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


export default function ExponentialFormPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj5Table,
  obj9Table,
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
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
          />,
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
        ]
    },
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
   {/* <ScrollUpButton/> */}
   </>
  )
}