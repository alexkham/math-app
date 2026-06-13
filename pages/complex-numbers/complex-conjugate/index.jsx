
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
  "complex conjugate",
  "conjugate of complex number",
  "z bar notation",
  "complex conjugate definition",
  "conjugate properties",
  "z times z bar",
  "conjugate pairs",
  "reflection real axis",
  "divide complex numbers conjugate",
  "conjugate modulus",
  "z* notation",
  "real part conjugate",
  "imaginary part conjugate",
  "conjugate polynomial roots",
  "complex number division"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj1 — aggregation: z → z̄ examples across categories
  const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">z</th>
      <th style="${tableHeaders.aggregation}">Category</th>
      <th style="${tableHeaders.aggregation}">z̄</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">3 + 2i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">general complex (Q1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 − 2i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">imaginary part flips sign</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">−1 − 4i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">general complex (Q3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−1 + 4i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative imaginary becomes positive</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">real</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unchanged — z̄ = z for every real z</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">7i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pure imaginary</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−7i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄ = −z for every pure imaginary z</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">zero (both real and pure imag.)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the unique fixed point of every reflection</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(1⁄2) + (√3⁄2)i</td>
      <td style="padding: 12px 15px; color: #34495e;">on the unit circle (|z| = 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">(1⁄2) − (√3⁄2)i</td>
      <td style="padding: 12px 15px; color: #34495e;">here z̄ also equals z⁻¹</td>
    </tr>
  </tbody>
</table>
`

  // obj3 — aggregation: distributive properties of conjugation
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Property</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">In words</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Involution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><span style="text-decoration: overline;">z̄</span> = z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugating twice returns the original</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Additivity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><span style="text-decoration: overline;">z₁ + z₂</span> = z̄₁ + z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate of a sum = sum of conjugates</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Subtraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><span style="text-decoration: overline;">z₁ − z₂</span> = z̄₁ − z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate of a difference = difference of conjugates</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplicativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><span style="text-decoration: overline;">z₁ · z₂</span> = z̄₁ · z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate of a product = product of conjugates</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><span style="text-decoration: overline;">z₁ ⁄ z₂</span> = z̄₁ ⁄ z̄₂&nbsp;&nbsp;<span style="font-size: 13px;">(z₂ ≠ 0)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conjugate of a quotient = quotient of conjugates</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Powers</td>
      <td style="padding: 12px 15px; color: #34495e;"><span style="text-decoration: overline;">zⁿ</span> = (z̄)ⁿ&nbsp;&nbsp;<span style="font-size: 13px;">(integer n)</span></td>
      <td style="padding: 12px 15px; color: #34495e;">conjugate of a power = power of the conjugate</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — comparison: classification tests (real vs pure imaginary)
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Category of z</th>
      <th style="${tableHeaders.comparison}">Algebraic test</th>
      <th style="${tableHeaders.comparison}">Geometric meaning</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real (b = 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄ = z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lies on the real axis — the mirror itself, fixed by reflection</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z = 5: z̄ = 5 = z&nbsp;&nbsp;<span style="color: #27ae60; font-weight: bold;">✓</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Pure imaginary (a = 0)</td>
      <td style="padding: 12px 15px; color: #34495e;">z̄ = −z</td>
      <td style="padding: 12px 15px; color: #34495e;">lies on the imaginary axis — reflection sends to opposite point through origin</td>
      <td style="padding: 12px 15px; color: #34495e;">z = 4i: z̄ = −4i = −z&nbsp;&nbsp;<span style="color: #27ae60; font-weight: bold;">✓</span></td>
    </tr>
  </tbody>
</table>
`

  // obj9 — summary capstone: what z̄ reveals about z
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Expression involving z̄</th>
      <th style="${tableHeaders.summary}">Result</th>
      <th style="${tableHeaders.summary}">Always…</th>
      <th style="${tableHeaders.summary}">What it gives you</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z + z̄</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 · Re(z) = 2a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">real</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">isolates the real part of z</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z − z̄</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2i · Im(z) = 2bi</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pure imaginary</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">isolates the imaginary part of z</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z · z̄</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z|² = a² + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">real and non-negative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the squared modulus; underpins division</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|z̄|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">equal to |z|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">confirms that reflection preserves distance from origin</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z̄ = z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condition for…</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">true iff z is real</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">classification test for membership in ℝ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">z̄ = −z</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condition for…</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">true iff z is pure imaginary</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">classification test for membership in iℝ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">z̄ = z⁻¹</td>
      <td style="padding: 12px 15px; color: #34495e;">condition for…</td>
      <td style="padding: 12px 15px; color: #34495e;">true iff |z| = 1</td>
      <td style="padding: 12px 15px; color: #34495e;">classification test for points on the unit circle</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose unchanged; obj9 added) ----------

//     const sectionsContent={
// obj0: {
//   title: `Key Terms`,
//   content: `
// - [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — the reflection $\\overline{z} = a - bi$
// - [Modulus](!/complex-numbers/definitions#modulus) — satisfies $|z|^2 = z \\cdot \\overline{z}$
// - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — computed using the conjugate
// - [Complex Plane](!/complex-numbers/definitions#complex_plane) — conjugation reflects across the real axis`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },

//     obj1: {
//   title: `Definition of the Conjugate`,
//   before: ``,
//   content: `For any complex number $z = a + bi$, the conjugate is defined as:

// $$\\bar{z} = a - bi$$

// The operation preserves the real part $a$ exactly while reversing the sign of the imaginary part. Where the original number has $+bi$, the conjugate has $-bi$. Where the original has $-bi$, the conjugate has $+bi$. Only the vertical component changes; the horizontal component remains untouched.

// Concrete examples illustrate the pattern. The conjugate of $3 + 2i$ is $3 - 2i$. The conjugate of $-1 - 4i$ is $-1 + 4i$ — the negative imaginary part becomes positive. The conjugate of $5$ (a real number, written as $5 + 0i$) is simply $5$ — with no imaginary part to flip, nothing changes. The conjugate of $7i$ (pure imaginary, written as $0 + 7i$) is $-7i$ — the entire number negates because the real part contributes nothing.

// Two notations appear in mathematical literature. The overline $\\bar{z}$ dominates pure mathematics and most textbooks. The asterisk $z^*$ appears frequently in physics and engineering, particularly in quantum mechanics and signal processing. Both symbols denote the identical operation. This text uses the overline convention, but readers should recognize both forms as equivalent.

// The conjugate is not the same as negation. The negative of $3 + 2i$ is $-3 - 2i$, changing both signs. The conjugate $3 - 2i$ changes only the imaginary sign. Confusing these operations leads to errors, particularly when manipulating equations involving both.`,
//   after: ``,
//   link: '',
// },

//   obj2: {
//   title: `Geometric Interpretation`,
//   before: ``,
//   content: `The [complex plane](!/complex-numbers/geometric-representation) transforms the conjugate from an algebraic rule into a visible action. If $z = a + bi$ corresponds to the point $(a, b)$, then $\\bar{z} = a - bi$ corresponds to $(a, -b)$. The horizontal coordinate stays fixed while the vertical coordinate negates. This is reflection across the real axis.

// Picture the real axis as a horizontal mirror. Every point above the axis has a mirror image below; every point below has an image above. The conjugate operation sends each complex number to its reflection. The point $2 + 3i$ at coordinates $(2, 3)$ reflects to $2 - 3i$ at $(2, -3)$. The point $-1 - 4i$ at $(-1, -4)$ reflects to $-1 + 4i$ at $(-1, 4)$.

// Points lying directly on the mirror remain stationary. These are precisely the real numbers — they have no vertical displacement to reverse, so conjugation leaves them unchanged. The number $5$ sits at $(5, 0)$ on the real axis, and its reflection lands at the same spot. This geometric fact corresponds to the algebraic observation that $\\bar{a} = a$ for any real $a$.

// Points on the imaginary axis exhibit different behavior. They lie perpendicular to the mirror, equidistant above and below the real axis. Reflection sends each to the opposite side of the origin. The number $4i$ at $(0, 4)$ reflects to $-4i$ at $(0, -4)$. For pure imaginary numbers, conjugation equals negation: $\\bar{z} = -z$.

// The reflection interpretation explains why conjugating twice returns the original number. Reflect a point across a line, then reflect again across the same line — the point returns home. Two mirror operations cancel completely, regardless of where the point started.`,
//   after: ``,
//   link: '',
// },

  

//     obj3: {
//   title: `Fundamental Properties`,
//   before: ``,
//   content: `The conjugate operation interacts predictably with arithmetic. Five properties govern how conjugation passes through sums, products, and powers, enabling simplification of complicated expressions.

// The involution property states that conjugating twice recovers the original: $\\overline{\\bar{z}} = z$. Apply the definition twice: if $z = a + bi$, then $\\bar{z} = a - bi$, and $\\overline{\\bar{z}} = a - (-b)i = a + bi = z$. The double sign flip restores the original imaginary part. Geometrically, reflecting twice across the same axis brings every point back to its starting position.

// Additivity allows conjugation to distribute over sums: $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$. The conjugate of a sum equals the sum of the conjugates. Proof: let $z_1 = a + bi$ and $z_2 = c + di$. Then $z_1 + z_2 = (a + c) + (b + d)i$, so $\\overline{z_1 + z_2} = (a + c) - (b + d)i = (a - bi) + (c - di) = \\bar{z_1} + \\bar{z_2}$. The same property extends to subtraction: $\\overline{z_1 - z_2} = \\bar{z_1} - \\bar{z_2}$.

// Multiplicativity states that conjugation distributes over products: $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$. The conjugate of a product equals the product of the conjugates. Verification requires expanding both sides and comparing — the algebra confirms equality. This property proves invaluable when simplifying products or verifying identities.

// Division follows the same pattern: $\\overline{z_1 / z_2} = \\bar{z_1} / \\bar{z_2}$ for $z_2 \\neq 0$. Conjugation passes through quotients just as it passes through products.

// Powers inherit the multiplicative property: $\\overline{z^n} = (\\bar{z})^n$ for any integer $n$. Repeated application of the product rule establishes this for positive integers, and the quotient rule extends it to negative integers. Conjugating a power equals powering the conjugate.`,
//   after: ``,
//   link: '',
// },
   

//     obj4: {
//   title: `Conjugate and Modulus`,
//   before: ``,
//   content: `A fundamental identity connects the conjugate to the [modulus](!/complex-numbers/absolute-value):

// $$z \\cdot \\bar{z} = |z|^2$$

// The product of any complex number with its conjugate yields the square of its modulus — a real, non-negative value. This relationship lies at the heart of complex arithmetic.

// The proof follows from direct expansion. Let $z = a + bi$, so $\\bar{z} = a - bi$. The product becomes:

// $$z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 - abi + abi - b^2i^2 = a^2 - b^2(-1) = a^2 + b^2$$

// The middle terms cancel, and $i^2 = -1$ converts the final term to positive. The result $a^2 + b^2$ matches the definition $|z|^2 = a^2 + b^2$ exactly.

// This identity explains why $z \\cdot \\bar{z}$ always produces a real number. The imaginary parts eliminate each other through the cancellation of $-abi$ and $+abi$. No matter how complicated $z$ appears, multiplying by its conjugate guarantees a real outcome.

// A related fact: conjugation preserves modulus. The numbers $z$ and $\\bar{z}$ lie at equal distances from the origin, as reflection across a line through the origin does not change radial distance. Algebraically, $|\\bar{z}| = |a - bi| = \\sqrt{a^2 + (-b)^2} = \\sqrt{a^2 + b^2} = |z|$. The identity $|\\bar{z}| = |z|$ holds universally.

// Taking square roots of $z \\cdot \\bar{z} = |z|^2$ gives $|z| = \\sqrt{z \\cdot \\bar{z}}$, an alternative formula for modulus that sometimes proves more convenient than $\\sqrt{a^2 + b^2}$.`,
//   after: ``,
//   link: '',
// },
   

//     obj5: {
//   title: `Classification Theorems`,
//   before: ``,
//   content: `The conjugate provides algebraic tests for determining whether a complex number belongs to special subcategories. Two classification theorems identify real numbers and [pure imaginary numbers](!/complex-numbers/imaginary-numbers) through their relationship with their conjugates.

// The first theorem: a complex number $z$ is real if and only if $z = \\bar{z}$.

// For the forward direction, suppose $z$ is real, meaning $z = a + 0i = a$ for some $a \\in \\mathbb{R}$. Then $\\bar{z} = a - 0i = a = z$. The conjugate equals the original.

// For the reverse direction, suppose $z = \\bar{z}$. Writing $z = a + bi$, the equation becomes $a + bi = a - bi$. Comparing imaginary parts: $b = -b$, which forces $2b = 0$ and thus $b = 0$. With zero imaginary part, $z = a$ is real.

// Geometrically, real numbers sit on the real axis — the mirror line for conjugation. Points on a mirror remain fixed under reflection, so $z = \\bar{z}$ characterizes exactly those points.

// The second theorem: a complex number $z$ is pure imaginary if and only if $\\bar{z} = -z$.

// Forward: if $z = bi$ for real $b$, then $\\bar{z} = -bi = -(bi) = -z$.

// Reverse: if $\\bar{z} = -z$, then $a - bi = -a - bi$. Comparing real parts: $a = -a$, so $2a = 0$ and $a = 0$. The number has no real part and is pure imaginary.

// Geometrically, pure imaginaries sit on the imaginary axis, perpendicular to the mirror. Reflection through the real axis sends each such point to its opposite through the origin, making $\\bar{z} = -z$.`,
//   after: ``,
//   link: '',
// },

 

//     obj6: {
//   title: `Useful Identities`,
//   before: ``,
//   content: `Three identities involving $z$ and $\\bar{z}$ appear constantly in calculations. Each extracts specific information from a complex number or produces a value with guaranteed properties.

// The sum of a number and its conjugate isolates the real part:

// $$z + \\bar{z} = (a + bi) + (a - bi) = 2a$$

// The imaginary terms cancel, leaving twice the real part. Rearranging provides a formula: $Re(z) = \\frac{z + \\bar{z}}{2}$. This identity guarantees that $z + \\bar{z}$ is always real, regardless of the original number. Encountering this sum in any calculation signals that the result lies on the real axis.

// The difference between a number and its conjugate isolates the imaginary part:

// $$z - \\bar{z} = (a + bi) - (a - bi) = 2bi$$

// The real terms cancel, leaving twice the imaginary term. Rearranging: $Im(z) = \\frac{z - \\bar{z}}{2i}$. This identity guarantees that $z - \\bar{z}$ is always pure imaginary. The result necessarily sits on the vertical axis.

// The product of a number and its conjugate yields the squared modulus:

// $$z \\cdot \\bar{z} = a^2 + b^2 = |z|^2$$

// This result is always real and always non-negative. It equals zero only when $z = 0$. The identity underlies division, modulus computation, and countless proofs.

// These three identities — sum, difference, and product with the conjugate — form a toolkit for manipulating complex expressions. Recognizing when they apply often transforms an intimidating calculation into straightforward algebra.`,
//   after: ``,
//   link: '',
// },

   
//     obj7: {
//   title: `Applications to Division`,
//   before: ``,
//   content: `Division of complex numbers requires expressing the quotient in standard [algebraic form](!/complex-numbers/algebraic-form) $a + bi$. A complex denominator violates this requirement — the conjugate provides the remedy.

// Consider the division $\\frac{w}{z}$ where both $w$ and $z$ are complex. The denominator $z = c + di$ contains an imaginary part, preventing direct interpretation as a number in standard form. The strategy: multiply both numerator and denominator by $\\bar{z}$, the conjugate of the denominator.

// $$\\frac{w}{z} = \\frac{w}{z} \\cdot \\frac{\\bar{z}}{\\bar{z}} = \\frac{w \\cdot \\bar{z}}{z \\cdot \\bar{z}} = \\frac{w \\cdot \\bar{z}}{|z|^2}$$

// The denominator becomes $z \\cdot \\bar{z} = |z|^2$, a real number. The numerator $w \\cdot \\bar{z}$ is some complex number that can be computed by standard multiplication. Dividing a complex number by a real number simply scales both components, yielding standard form.

// A complete example: compute $\\frac{3 + 2i}{1 - 4i}$.

// The denominator is $1 - 4i$, so its conjugate is $1 + 4i$. Multiply numerator and denominator:

// $$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$

// The denominator: $(1 - 4i)(1 + 4i) = 1 - 16i^2 = 1 + 16 = 17$.

// The numerator: $(3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$.

// The quotient: $\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$.

// Without the conjugate, no systematic method converts complex quotients to standard form. The identity $z \\cdot \\bar{z} = |z|^2$ makes the technique work — it guarantees the denominator becomes real.`,
//   after: ``,
//   link: '',
// },


  

//     obj8: {
//   title: `Conjugate Pairs in Polynomials`,
//   before: ``,
//   content: `Polynomials with real coefficients exhibit remarkable structure in their complex roots: non-real roots always appear in conjugate pairs. If $z_0$ solves the equation, so does $\\bar{z_0}$.

// The theorem states: let $p(z) = a_nz^n + a_{n-1}z^{n-1} + \\cdots + a_1z + a_0$ be a polynomial with all coefficients $a_k$ real. If $p(z_0) = 0$ for some complex number $z_0$, then $p(\\bar{z_0}) = 0$ as well.

// The proof exploits how conjugation interacts with polynomial evaluation. Since conjugation distributes over sums and products, and since conjugating a real number leaves it unchanged:

// $$\\overline{p(z_0)} = \\overline{a_nz_0^n + \\cdots + a_0} = a_n\\overline{z_0^n} + \\cdots + a_0 = a_n(\\bar{z_0})^n + \\cdots + a_0 = p(\\bar{z_0})$$

// The key step uses $\\overline{a_k} = a_k$ because each coefficient is real. If $p(z_0) = 0$, then $\\overline{p(z_0)} = \\bar{0} = 0$, so $p(\\bar{z_0}) = 0$.

// Consequences flow immediately. A real quadratic with no real roots must have two complex conjugate roots — if $2 + 3i$ solves it, so does $2 - 3i$. A real cubic always has at least one real root, since complex roots pair off and an odd number of roots cannot all be paired. A real polynomial of degree 4 might have four real roots, two real and two complex conjugates, or two pairs of complex conjugates — but never three real and one complex.

// Conjugate pairs multiply to give real quadratic factors. If $z_0 = a + bi$ is a root, then $(z - z_0)(z - \\bar{z_0}) = z^2 - 2az + (a^2 + b^2)$, a quadratic with real coefficients. This factorization explains why every real polynomial factors completely into real linear and real quadratic terms — the [Fundamental Theorem of Algebra](!/complex-numbers/equations-polynomials) guarantees complex roots exist, and conjugate pairing ensures they combine into real factors.`,
//   after: ``,
//   link: '',
// },
//     obj9:{
//       title:`Summary: What z̄ Tells You About z`,
//       content:`The conjugate is most useful not for its own sake but for what it reveals when combined with z itself. The table below collects the identities and tests in which z̄ extracts a specific quantity from z, signals a real or non-negative result, or characterizes z as belonging to a special subset (the real axis, the imaginary axis, or the unit circle).`,
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

// formulas-optimized: v1 | 2026-06-11 | 8 callouts (obj1, obj3 ×5, obj5 ×2)
const sectionsContent={
obj0: {
  title: `Key Terms`,
  content: `
- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate) — the reflection $\\overline{z} = a - bi$
- [Modulus](!/complex-numbers/definitions#modulus) — satisfies $|z|^2 = z \\cdot \\overline{z}$
- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — computed using the conjugate
- [Complex Plane](!/complex-numbers/definitions#complex_plane) — conjugation reflects across the real axis`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
  link: '',
},

    obj1: {
  title: `Definition of the Conjugate`,
  before: ``,
  content: `For any complex number $z = a + bi$, the conjugate is defined as:

@academic[formula_callout:Complex Conjugate
$$\\overline{z} = a - bi \\quad \\text{for} \\;\\; z = a + bi$$
/complex-numbers/formulas#complex_conjugate]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The operation preserves the real part $a$ exactly while reversing the sign of the imaginary part. Where the original number has $+bi$, the conjugate has $-bi$. Where the original has $-bi$, the conjugate has $+bi$. Only the vertical component changes; the horizontal component remains untouched.

Concrete examples illustrate the pattern. The conjugate of $3 + 2i$ is $3 - 2i$. The conjugate of $-1 - 4i$ is $-1 + 4i$ — the negative imaginary part becomes positive. The conjugate of $5$ (a real number, written as $5 + 0i$) is simply $5$ — with no imaginary part to flip, nothing changes. The conjugate of $7i$ (pure imaginary, written as $0 + 7i$) is $-7i$ — the entire number negates because the real part contributes nothing.

Two notations appear in mathematical literature. The overline $\\bar{z}$ dominates pure mathematics and most textbooks. The asterisk $z^*$ appears frequently in physics and engineering, particularly in quantum mechanics and signal processing. Both symbols denote the identical operation. This text uses the overline convention, but readers should recognize both forms as equivalent.

The conjugate is not the same as negation. The negative of $3 + 2i$ is $-3 - 2i$, changing both signs. The conjugate $3 - 2i$ changes only the imaginary sign. Confusing these operations leads to errors, particularly when manipulating equations involving both.`,
  after: ``,
  link: '',
},

  obj2: {
  title: `Geometric Interpretation`,
  before: ``,
  content: `The [complex plane](!/complex-numbers/geometric-representation) transforms the conjugate from an algebraic rule into a visible action. If $z = a + bi$ corresponds to the point $(a, b)$, then $\\bar{z} = a - bi$ corresponds to $(a, -b)$. The horizontal coordinate stays fixed while the vertical coordinate negates. This is reflection across the real axis.

Picture the real axis as a horizontal mirror. Every point above the axis has a mirror image below; every point below has an image above. The conjugate operation sends each complex number to its reflection. The point $2 + 3i$ at coordinates $(2, 3)$ reflects to $2 - 3i$ at $(2, -3)$. The point $-1 - 4i$ at $(-1, -4)$ reflects to $-1 + 4i$ at $(-1, 4)$.

Points lying directly on the mirror remain stationary. These are precisely the real numbers — they have no vertical displacement to reverse, so conjugation leaves them unchanged. The number $5$ sits at $(5, 0)$ on the real axis, and its reflection lands at the same spot. This geometric fact corresponds to the algebraic observation that $\\bar{a} = a$ for any real $a$.

Points on the imaginary axis exhibit different behavior. They lie perpendicular to the mirror, equidistant above and below the real axis. Reflection sends each to the opposite side of the origin. The number $4i$ at $(0, 4)$ reflects to $-4i$ at $(0, -4)$. For pure imaginary numbers, conjugation equals negation: $\\bar{z} = -z$.

The reflection interpretation explains why conjugating twice returns the original number. Reflect a point across a line, then reflect again across the same line — the point returns home. Two mirror operations cancel completely, regardless of where the point started.`,
  after: ``,
  link: '',
},

  

    obj3: {
  title: `Fundamental Properties`,
  before: ``,
  content: `The conjugate operation interacts predictably with arithmetic. Five properties govern how conjugation passes through sums, products, and powers, enabling simplification of complicated expressions.

The involution property states that conjugating twice recovers the original:

@academic[formula_callout:Conjugate of a Conjugate
$$\\overline{\\overline{z}} = z$$
/complex-numbers/formulas#conjugate_of_a_conjugate]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Apply the definition twice: if $z = a + bi$, then $\\bar{z} = a - bi$, and $\\overline{\\bar{z}} = a - (-b)i = a + bi = z$. The double sign flip restores the original imaginary part. Geometrically, reflecting twice across the same axis brings every point back to its starting position.

Additivity allows conjugation to distribute over sums:

@academic[formula_callout:Conjugate of a Sum
$$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$
/complex-numbers/formulas#conjugate_of_a_sum]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The conjugate of a sum equals the sum of the conjugates. Proof: let $z_1 = a + bi$ and $z_2 = c + di$. Then $z_1 + z_2 = (a + c) + (b + d)i$, so $\\overline{z_1 + z_2} = (a + c) - (b + d)i = (a - bi) + (c - di) = \\bar{z_1} + \\bar{z_2}$. The same property extends to subtraction: $\\overline{z_1 - z_2} = \\bar{z_1} - \\bar{z_2}$.

Multiplicativity states that conjugation distributes over products:

@academic[formula_callout:Conjugate of a Product
$$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$
/complex-numbers/formulas#conjugate_of_a_product]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The conjugate of a product equals the product of the conjugates. Verification requires expanding both sides and comparing — the algebra confirms equality. This property proves invaluable when simplifying products or verifying identities.

Division follows the same pattern:

@academic[formula_callout:Conjugate of a Quotient
$$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$
/complex-numbers/formulas#conjugate_of_a_quotient]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

valid for $z_2 \\neq 0$. Conjugation passes through quotients just as it passes through products.

Powers inherit the multiplicative property:

@academic[formula_callout:Conjugate of a Power
$$\\overline{z^n} = (\\overline{z})^n$$
/complex-numbers/formulas#conjugate_of_a_power]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

for any integer $n$. Repeated application of the product rule establishes this for positive integers, and the quotient rule extends it to negative integers. Conjugating a power equals powering the conjugate.`,
  after: ``,
  link: '',
},
   

    obj4: {
  title: `Conjugate and Modulus`,
  before: ``,
  content: `A fundamental identity connects the conjugate to the [modulus](!/complex-numbers/absolute-value):

$$z \\cdot \\bar{z} = |z|^2$$

The product of any complex number with its conjugate yields the square of its modulus — a real, non-negative value. This relationship lies at the heart of complex arithmetic.

The proof follows from direct expansion. Let $z = a + bi$, so $\\bar{z} = a - bi$. The product becomes:

$$z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 - abi + abi - b^2i^2 = a^2 - b^2(-1) = a^2 + b^2$$

The middle terms cancel, and $i^2 = -1$ converts the final term to positive. The result $a^2 + b^2$ matches the definition $|z|^2 = a^2 + b^2$ exactly.

This identity explains why $z \\cdot \\bar{z}$ always produces a real number. The imaginary parts eliminate each other through the cancellation of $-abi$ and $+abi$. No matter how complicated $z$ appears, multiplying by its conjugate guarantees a real outcome.

A related fact: conjugation preserves modulus. The numbers $z$ and $\\bar{z}$ lie at equal distances from the origin, as reflection across a line through the origin does not change radial distance. Algebraically, $|\\bar{z}| = |a - bi| = \\sqrt{a^2 + (-b)^2} = \\sqrt{a^2 + b^2} = |z|$. The identity $|\\bar{z}| = |z|$ holds universally.

Taking square roots of $z \\cdot \\bar{z} = |z|^2$ gives $|z| = \\sqrt{z \\cdot \\bar{z}}$, an alternative formula for modulus that sometimes proves more convenient than $\\sqrt{a^2 + b^2}$.`,
  after: ``,
  link: '',
},
   

    obj5: {
  title: `Classification Theorems`,
  before: ``,
  content: `The conjugate provides algebraic tests for determining whether a complex number belongs to special subcategories. Two classification theorems identify real numbers and [pure imaginary numbers](!/complex-numbers/imaginary-numbers) through their relationship with their conjugates.

The first theorem characterizes real numbers via the conjugate:

@academic[formula_callout:Real Number Test
$$z \\in \\mathbb{R} \\iff z = \\overline{z}$$
/complex-numbers/formulas#real_number_test]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

For the forward direction, suppose $z$ is real, meaning $z = a + 0i = a$ for some $a \\in \\mathbb{R}$. Then $\\bar{z} = a - 0i = a = z$. The conjugate equals the original.

For the reverse direction, suppose $z = \\bar{z}$. Writing $z = a + bi$, the equation becomes $a + bi = a - bi$. Comparing imaginary parts: $b = -b$, which forces $2b = 0$ and thus $b = 0$. With zero imaginary part, $z = a$ is real.

Geometrically, real numbers sit on the real axis — the mirror line for conjugation. Points on a mirror remain fixed under reflection, so $z = \\bar{z}$ characterizes exactly those points.

The second theorem characterizes pure imaginary numbers:

@academic[formula_callout:Pure Imaginary Test
$$z \\;\\text{is pure imaginary} \\iff \\overline{z} = -z$$
/complex-numbers/formulas#pure_imaginary_test]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Forward: if $z = bi$ for real $b$, then $\\bar{z} = -bi = -(bi) = -z$.

Reverse: if $\\bar{z} = -z$, then $a - bi = -a - bi$. Comparing real parts: $a = -a$, so $2a = 0$ and $a = 0$. The number has no real part and is pure imaginary.

Geometrically, pure imaginaries sit on the imaginary axis, perpendicular to the mirror. Reflection through the real axis sends each such point to its opposite through the origin, making $\\bar{z} = -z$.`,
  after: ``,
  link: '',
},

 

    obj6: {
  title: `Useful Identities`,
  before: ``,
  content: `Three identities involving $z$ and $\\bar{z}$ appear constantly in calculations. Each extracts specific information from a complex number or produces a value with guaranteed properties.

The sum of a number and its conjugate isolates the real part:

$$z + \\bar{z} = (a + bi) + (a - bi) = 2a$$

The imaginary terms cancel, leaving twice the real part. Rearranging provides a formula: $Re(z) = \\frac{z + \\bar{z}}{2}$. This identity guarantees that $z + \\bar{z}$ is always real, regardless of the original number. Encountering this sum in any calculation signals that the result lies on the real axis.

The difference between a number and its conjugate isolates the imaginary part:

$$z - \\bar{z} = (a + bi) - (a - bi) = 2bi$$

The real terms cancel, leaving twice the imaginary term. Rearranging: $Im(z) = \\frac{z - \\bar{z}}{2i}$. This identity guarantees that $z - \\bar{z}$ is always pure imaginary. The result necessarily sits on the vertical axis.

The product of a number and its conjugate yields the squared modulus:

$$z \\cdot \\bar{z} = a^2 + b^2 = |z|^2$$

This result is always real and always non-negative. It equals zero only when $z = 0$. The identity underlies division, modulus computation, and countless proofs.

These three identities — sum, difference, and product with the conjugate — form a toolkit for manipulating complex expressions. Recognizing when they apply often transforms an intimidating calculation into straightforward algebra.`,
  after: ``,
  link: '',
},

   
    obj7: {
  title: `Applications to Division`,
  before: ``,
  content: `Division of complex numbers requires expressing the quotient in standard [algebraic form](!/complex-numbers/algebraic-form) $a + bi$. A complex denominator violates this requirement — the conjugate provides the remedy.

Consider the division $\\frac{w}{z}$ where both $w$ and $z$ are complex. The denominator $z = c + di$ contains an imaginary part, preventing direct interpretation as a number in standard form. The strategy: multiply both numerator and denominator by $\\bar{z}$, the conjugate of the denominator.

$$\\frac{w}{z} = \\frac{w}{z} \\cdot \\frac{\\bar{z}}{\\bar{z}} = \\frac{w \\cdot \\bar{z}}{z \\cdot \\bar{z}} = \\frac{w \\cdot \\bar{z}}{|z|^2}$$

The denominator becomes $z \\cdot \\bar{z} = |z|^2$, a real number. The numerator $w \\cdot \\bar{z}$ is some complex number that can be computed by standard multiplication. Dividing a complex number by a real number simply scales both components, yielding standard form.

A complete example: compute $\\frac{3 + 2i}{1 - 4i}$.

The denominator is $1 - 4i$, so its conjugate is $1 + 4i$. Multiply numerator and denominator:

$$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$

The denominator: $(1 - 4i)(1 + 4i) = 1 - 16i^2 = 1 + 16 = 17$.

The numerator: $(3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$.

The quotient: $\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$.

Without the conjugate, no systematic method converts complex quotients to standard form. The identity $z \\cdot \\bar{z} = |z|^2$ makes the technique work — it guarantees the denominator becomes real.`,
  after: ``,
  link: '',
},


  

    obj8: {
  title: `Conjugate Pairs in Polynomials`,
  before: ``,
  content: `Polynomials with real coefficients exhibit remarkable structure in their complex roots: non-real roots always appear in conjugate pairs. If $z_0$ solves the equation, so does $\\bar{z_0}$.

The theorem states: let $p(z) = a_nz^n + a_{n-1}z^{n-1} + \\cdots + a_1z + a_0$ be a polynomial with all coefficients $a_k$ real. If $p(z_0) = 0$ for some complex number $z_0$, then $p(\\bar{z_0}) = 0$ as well.

The proof exploits how conjugation interacts with polynomial evaluation. Since conjugation distributes over sums and products, and since conjugating a real number leaves it unchanged:

$$\\overline{p(z_0)} = \\overline{a_nz_0^n + \\cdots + a_0} = a_n\\overline{z_0^n} + \\cdots + a_0 = a_n(\\bar{z_0})^n + \\cdots + a_0 = p(\\bar{z_0})$$

The key step uses $\\overline{a_k} = a_k$ because each coefficient is real. If $p(z_0) = 0$, then $\\overline{p(z_0)} = \\bar{0} = 0$, so $p(\\bar{z_0}) = 0$.

Consequences flow immediately. A real quadratic with no real roots must have two complex conjugate roots — if $2 + 3i$ solves it, so does $2 - 3i$. A real cubic always has at least one real root, since complex roots pair off and an odd number of roots cannot all be paired. A real polynomial of degree 4 might have four real roots, two real and two complex conjugates, or two pairs of complex conjugates — but never three real and one complex.

Conjugate pairs multiply to give real quadratic factors. If $z_0 = a + bi$ is a root, then $(z - z_0)(z - \\bar{z_0}) = z^2 - 2az + (a^2 + b^2)$, a quadratic with real coefficients. This factorization explains why every real polynomial factors completely into real linear and real quadratic terms — the [Fundamental Theorem of Algebra](!/complex-numbers/equations-polynomials) guarantees complex roots exist, and conjugate pairing ensures they combine into real factors.`,
  after: ``,
  link: '',
},
    obj9:{
      title:`Summary: What z̄ Tells You About z`,
      content:`The conjugate is most useful not for its own sake but for what it reveals when combined with z itself. The table below collects the identities and tests in which z̄ extracts a specific quantity from z, signals a real or non-negative result, or characterizes z as belonging to a special subset (the real axis, the imaginary axis, or the unit circle).`,
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
  title: "The Mirror Operation",
  content: `
  The Mirror Operation
  `
}

const faqQuestions = {
  obj1: {
    question: "What is the complex conjugate?",
    answer: "For a complex number z = a + bi, the conjugate is z̄ = a - bi. It preserves the real part while negating the imaginary part. For example, the conjugate of 3 + 2i is 3 - 2i. Geometrically, it represents reflection across the real axis."
  },
  obj2: {
    question: "What does z̄ or z* notation mean?",
    answer: "Both z̄ (overline) and z* (asterisk) denote the complex conjugate. The overline notation dominates in pure mathematics, while the asterisk appears frequently in physics and engineering, especially in quantum mechanics and signal processing. They represent the identical operation."
  },
  obj3: {
    question: "What is the geometric meaning of the conjugate?",
    answer: "The conjugate is reflection across the real axis in the complex plane. If z = a + bi corresponds to point (a, b), then z̄ = a - bi corresponds to (a, -b). The real axis acts as a mirror, with points above reflecting to corresponding points below."
  },
  obj4: {
    question: "What is z times z̄ equal to?",
    answer: "The product z·z̄ equals |z|², the square of the modulus. For z = a + bi, we get z·z̄ = (a + bi)(a - bi) = a² + b². This product is always a real, non-negative number, and equals zero only when z = 0."
  },
  obj5: {
    question: "What happens when you conjugate twice?",
    answer: "Conjugating twice returns the original number: z̄̄ = z. This is called the involution property. Geometrically, reflecting across the real axis twice brings every point back to its starting position."
  },
  obj6: {
    question: "Does conjugation distribute over addition and multiplication?",
    answer: "Yes. For addition: the conjugate of z₁ + z₂ equals z̄₁ + z̄₂. For multiplication: the conjugate of z₁·z₂ equals z̄₁·z̄₂. These properties also extend to subtraction, division, and powers."
  },
  obj7: {
    question: "How do you know if a complex number is real using conjugates?",
    answer: "A complex number z is real if and only if z = z̄. Real numbers sit on the real axis, which is the mirror line for conjugation. Points on a mirror remain fixed under reflection, so z = z̄ characterizes exactly the real numbers."
  },
  obj8: {
    question: "How do you know if a complex number is pure imaginary using conjugates?",
    answer: "A complex number z is pure imaginary if and only if z̄ = -z. Pure imaginary numbers sit on the imaginary axis, perpendicular to the mirror. Reflection sends each to its opposite through the origin, making the conjugate equal the negative."
  },
  obj9: {
    question: "How does the conjugate help with complex division?",
    answer: "To divide w/z, multiply both numerator and denominator by z̄: (w/z)·(z̄/z̄) = (w·z̄)/(z·z̄) = (w·z̄)/|z|². The denominator becomes real (|z|²), allowing the quotient to be written in standard form a + bi."
  },
  obj10: {
    question: "What is the formula for the real and imaginary parts using conjugates?",
    answer: "Re(z) = (z + z̄)/2 and Im(z) = (z - z̄)/(2i). The sum z + z̄ = 2a isolates the real part, and the difference z - z̄ = 2bi isolates the imaginary part. These identities appear frequently in calculations."
  },
  obj11: {
    question: "Does the conjugate preserve the modulus?",
    answer: "Yes, |z̄| = |z|. The conjugate has the same distance from the origin as the original number because reflection across a line through the origin does not change radial distance. Algebraically, |a - bi| = √(a² + b²) = |a + bi|."
  },
  obj12: {
    question: "Why do complex roots of real polynomials come in conjugate pairs?",
    answer: "Because conjugation distributes over polynomial evaluation and leaves real coefficients unchanged. If p(z₀) = 0 for polynomial p with real coefficients, then p(z̄₀) = p̄(z₀) = 0̄ = 0. So z̄₀ is also a root."
  },
  obj13: {
    question: "Is the conjugate the same as negation?",
    answer: "No. The negative of 3 + 2i is -3 - 2i (both signs change). The conjugate of 3 + 2i is 3 - 2i (only the imaginary sign changes). Confusing these operations leads to errors. They coincide only for pure imaginary numbers."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Complex Conjugate",
    "description": "Master the complex conjugate: definition, geometric meaning as reflection, properties, the identity z·z̄ = |z|², applications to division, and conjugate pairs in polynomial roots.",
    "url": "https://www.learnmathclass.com/complex-numbers/complex-conjugate",
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
      "name": "Complex Conjugate"
    },
    "teaches": [
      "Definition of complex conjugate z̄ = a - bi",
      "Geometric interpretation as reflection across real axis",
      "Properties: involution, additivity, multiplicativity",
      "The identity z·z̄ = |z|²",
      "Classification theorems for real and pure imaginary numbers",
      "Using conjugates for complex division",
      "Conjugate pairs in real polynomial roots",
      "Master reference of identities that extract real/imaginary parts, modulus, and category from z using z̄"
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
        "name": "Complex Conjugate",
        "item": "https://www.learnmathclass.com/complex-numbers/complex-conjugate"
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
    obj1Table,
    obj3Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Complex Conjugate: Definition & Properties | Learn Math Class",
      description: "Master the complex conjugate: definition, geometric meaning as reflection, properties, the identity z·z̄ = |z|², applications to division, and conjugate pairs in polynomial roots.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/complex-conjugate",
      name: "Complex Conjugate"
    },
  }
}
   }



export default function ComplexConjugatePage({
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj3Table,
  obj5Table,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Conjugate</h1>
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