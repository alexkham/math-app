// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){

//   const keyWords = [
//   "complex number properties",
//   "field axioms complex numbers",
//   "complex numbers field",
//   "complex conjugate properties",
//   "modulus properties",
//   "argument properties",
//   "triangle inequality complex numbers",
//   "algebraic closure",
//   "fundamental theorem of algebra",
//   "ordered field",
//   "commutative property complex numbers",
//   "associative property complex numbers",
//   "distributive property",
//   "multiplicative inverse complex number",
//   "reverse triangle inequality"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj3 — aggregation: the 11 field axioms organized by + / · parallel
//   const obj3Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Axiom group</th>
//       <th style="${tableHeaders.aggregation}">Additive form (+)</th>
//       <th style="${tableHeaders.aggregation}">Multiplicative form (·)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Closure</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ + z₂ ∈ ℂ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ · z₂ ∈ ℂ</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commutativity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ + z₂ = z₂ + z₁</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ · z₂ = z₂ · z₁</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Associativity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z₁ · z₂) · z₃ = z₁ · (z₂ · z₃)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Identity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z + 0 = z (additive identity 0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z · 1 = z (multiplicative identity 1)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−z exists; z + (−z) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z⁻¹ exists for z ≠ 0; z · z⁻¹ = 1<br/><span style="font-size: 13px;">(formula: z⁻¹ = z̄ / |z|²)</span></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Distributivity</td>
//       <td colspan="2" style="padding: 12px 15px; color: #34495e; text-align: center;">z₁ · (z₂ + z₃) = z₁ · z₂ + z₁ · z₃ &nbsp;&nbsp; <span style="font-size: 13px;">(multiplication distributes over addition)</span></td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj7 — comparison: algebraic closure, ℝ vs ℂ
//   const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Question</th>
//       <th style="${tableHeaders.comparison} text-align: center;">ℝ (real numbers)</th>
//       <th style="${tableHeaders.comparison} text-align: center;">ℂ (complex numbers)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraically closed?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">✗ No</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">✓ Yes</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Every non-constant polynomial has a root in the field?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Not always — e.g., x² + 1 = 0 has no real root</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Always — guaranteed by the Fundamental Theorem of Algebra</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Degree-n polynomial factors completely into n linear factors?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Not always (some factors remain irreducible quadratics)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Always: p(z) = aₙ(z − r₁)(z − r₂)⋯(z − rₙ)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Number of roots of a degree-n polynomial</td>
//       <td style="padding: 12px 15px; color: #34495e;">0 to n</td>
//       <td style="padding: 12px 15px; color: #34495e;">exactly n (counting multiplicity)</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — summary capstone: operation × (conjugate, modulus, argument)
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Operation</th>
//       <th style="${tableHeaders.summary}">Conjugate behaves as…</th>
//       <th style="${tableHeaders.summary}">Modulus behaves as…</th>
//       <th style="${tableHeaders.summary}">Argument behaves as…</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum&nbsp;&nbsp; z₁ + z₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ + z̄₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁ + z₂| ≤ |z₁| + |z₂|<br/><span style="font-size: 13px;">(triangle inequality)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no simple rule</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference&nbsp;&nbsp; z₁ − z₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ − z̄₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁ − z₂| ≥ &#124;&thinsp;|z₁| − |z₂|&thinsp;&#124;<br/><span style="font-size: 13px;">(reverse triangle inequality)</span></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no simple rule</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product&nbsp;&nbsp; z₁ · z₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ · z̄₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁| · |z₂|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arg(z₁) + arg(z₂)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient&nbsp;&nbsp; z₁ / z₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ / z̄₂</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁| / |z₂|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arg(z₁) − arg(z₂)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power&nbsp;&nbsp; zⁿ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z̄)ⁿ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z|ⁿ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n · arg(z)<br/><span style="font-size: 13px;">(De Moivre)</span></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Conjugation&nbsp;&nbsp; z̄</td>
//       <td style="padding: 12px 15px; color: #34495e;">z (double conjugate)</td>
//       <td style="padding: 12px 15px; color: #34495e;">|z| (unchanged)</td>
//       <td style="padding: 12px 15px; color: #34495e;">−arg(z)</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // ---------- SECTIONS (original prose unchanged; obj9 added) ----------

// //     const sectionsContent={

// //     obj0: {
// //   title: `Key Terms`,
// //   content: `
// // - [Complex Number](!/complex-numbers/definitions#complex_number) — elements of the field $\\mathbb{C}$
// // - [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — guarantees subtraction in $\\mathbb{C}$
// // - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — guarantees division for nonzero elements
// // - [Modulus](!/complex-numbers/definitions#modulus) — underpins the metric structure of $\\mathbb{C}$`,
// //   before: ``,
// //   after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
// //   link: '',
// // },

// //     obj1: {
// //   title: `Overview of Complex Number Properties`,
// //   content: `The properties of complex numbers fall into distinct categories based on their origin and nature.

// // **Arithmetic properties** govern basic operations — addition, subtraction, multiplication, and division. These properties derive from the fact that complex numbers form what mathematicians call a field, an algebraic structure shared with the [real numbers](!/complex-numbers/algebraic-form) $\\mathbb{R}$ and rational numbers $\\mathbb{Q}$. Any rule that works for real arithmetic also works for complex arithmetic.

// // **Conjugate, modulus, and argument properties** are unique to complex numbers. The [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ reflects a number across the real axis. The [modulus](!/complex-numbers/absolute-value) $|z|$ measures distance from the origin. The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ specifies direction. Each of these concepts carries its own set of rules describing how it behaves under arithmetic operations.

// // **Algebraic closure** is a property that makes $\\mathbb{C}$ more powerful than $\\mathbb{R}$. Every polynomial equation has solutions in the complex numbers — a guarantee that real numbers cannot provide.

// // **Ordering** is a property that $\\mathbb{C}$ lacks. Unlike real numbers, complex numbers cannot be arranged on a line from smallest to largest. The familiar comparisons "greater than" and "less than" do not apply.

// // The sections that follow examine each category in detail.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },

// //     obj2: {
// //   title: `Complex Numbers as a Field`,
// //   content: `In abstract algebra, a field is a set equipped with two operations — addition and multiplication — that satisfy a specific collection of axioms. These axioms guarantee predictable arithmetic: you can add, subtract, multiply, and divide (except by zero) and always obtain a result within the same set.

// // The rational numbers $\\mathbb{Q}$ form a field. So do the real numbers $\\mathbb{R}$. The complex numbers $\\mathbb{C}$ extend this pattern — they too satisfy every field axiom.

// // Why does this matter? Because field structure ensures that algebraic techniques transfer seamlessly. Factoring, expanding, simplifying, solving equations — all the methods developed for real numbers work identically for complex numbers. No special cases, no exceptions, no hidden traps.

// // The field axioms divide into several groups:

// // • **Closure:** Operations keep you inside the set

// // • **Commutativity:** Order of operands does not matter

// // • **Associativity:** Grouping of operands does not matter

// // • **Identity elements:** Zero for addition, one for multiplication

// // • **Inverse elements:** Every number has a negative; every nonzero number has a reciprocal

// // • **Distributivity:** Multiplication distributes over addition

// // The next section lists these axioms precisely and confirms that $\\mathbb{C}$ satisfies each one.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },

// //     obj3: {
// //   title: `Arithmetic Properties (Field Axioms)`,
// //   content: `The eleven field axioms, all satisfied by $\\mathbb{C}$:

// // ## Closure

// // • $z_1 + z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

// // • $z_1 \\cdot z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

// // Adding or multiplying complex numbers always produces a complex number.

// // ## Commutativity

// // • $z_1 + z_2 = z_2 + z_1$

// // • $z_1 \\cdot z_2 = z_2 \\cdot z_1$

// // Order does not affect the result.

// // ## Associativity

// // • $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$

// // • $(z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$

// // Grouping does not affect the result.

// // ## Identity Elements

// // • Additive identity: $z + 0 = z$

// // • Multiplicative identity: $z \\cdot 1 = z$

// // ## Inverse Elements

// // • Additive inverse: For every $z$, there exists $-z$ such that $z + (-z) = 0$

// // • Multiplicative inverse: For every $z \\neq 0$, there exists $z^{-1}$ such that $z \\cdot z^{-1} = 1$

// // The multiplicative inverse is $z^{-1} = \\frac{\\overline{z}}{|z|^2}$.

// // ## Distributivity

// // • $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$

// // Multiplication distributes over addition.

// // These eleven properties guarantee that complex arithmetic behaves consistently and predictably, just like real arithmetic.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
   

// //     obj4: {
// //   title: `Properties of the Conjugate`,
// //   content: `The [complex conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ of $z = a + bi$ is $\\overline{z} = a - bi$. Conjugation interacts with arithmetic operations in predictable ways.

// // ## Conjugate of a Conjugate

// // $$\\overline{\\overline{z}} = z$$

// // Conjugating twice returns the original number.

// // ## Conjugate of a Sum

// // $$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$

// // The conjugate of a sum equals the sum of conjugates.

// // ## Conjugate of a Difference

// // $$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$

// // ## Conjugate of a Product

// // $$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$

// // The conjugate of a product equals the product of conjugates.

// // ## Conjugate of a Quotient

// // $$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$

// // ## Extracting Real and Imaginary Parts

// // $$z + \\overline{z} = 2\\text{Re}(z)$$

// // $$z - \\overline{z} = 2i \\cdot \\text{Im}(z)$$

// // ## Product with Conjugate

// // $$z \\cdot \\overline{z} = |z|^2$$

// // A complex number multiplied by its conjugate yields the square of its [modulus](!/complex-numbers/absolute-value) — always a non-negative real number. This property is essential for [division](!/complex-numbers/operations) of complex numbers.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
   
// //     obj5: {
// //   title: `Properties of the Modulus`,
// //   content: `The [modulus](!/complex-numbers/absolute-value) $|z|$ of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, representing the distance from the origin to $z$ in the complex plane.

// // ## Non-Negativity

// // $$|z| \\geq 0$$

// // $$|z| = 0 \\iff z = 0$$

// // The modulus is zero only for the number zero itself.

// // ## Modulus of a Conjugate

// // $$|\\overline{z}| = |z|$$

// // A number and its [conjugate](!/complex-numbers/complex-conjugate) have equal moduli.

// // ## Modulus of a Product

// // $$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$

// // The modulus of a product equals the product of moduli.

// // ## Modulus of a Quotient

// // $$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$

// // ## Modulus of a Power

// // $$|z^n| = |z|^n$$

// // ## Triangle Inequality

// // $$|z_1 + z_2| \\leq |z_1| + |z_2|$$

// // The distance from the origin to $z_1 + z_2$ never exceeds the sum of individual distances. Geometrically, one side of a triangle cannot exceed the sum of the other two sides.

// // ## Reverse Triangle Inequality

// // $$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$$

// // The difference of moduli never exceeds the modulus of the difference.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
   
// //     obj6: {
// //   title: `Properties of the Argument`,
// //   content: `The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ is the angle from the positive real axis to the line connecting the origin to $z$. Arguments are determined only up to multiples of $2\\pi$, so the following properties hold modulo $2\\pi$.

// // ## Argument of a Product

// // $$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$

// // Multiplying complex numbers adds their arguments. Geometrically, multiplication rotates by the sum of the angles.

// // ## Argument of a Quotient

// // $$\\arg\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$

// // Dividing complex numbers subtracts arguments.

// // ## Argument of a Power

// // $$\\arg(z^n) = n \\cdot \\arg(z)$$

// // Raising to the $n$th power multiplies the argument by $n$. This property underlies [De Moivre's theorem](!/complex-numbers/demoivre-theorem).

// // ## Argument of a Conjugate

// // $$\\arg(\\overline{z}) = -\\arg(z)$$

// // Conjugation reflects across the real axis, negating the angle.

// // ## Argument of a Negative

// // $$\\arg(-z) = \\arg(z) + \\pi$$

// // Negation rotates by $180°$.

// // ## Note on Multivaluedness

// // Since $\\arg(z)$ is defined only up to $2\\pi k$ for integer $k$, these equalities hold in the sense that representative values from each side differ by a multiple of $2\\pi$. When using the principal argument $\\text{Arg}(z)$, results may need adjustment to stay within the chosen interval.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
   

// //     obj7: {
// //   title: `Algebraic Closure`,
// //   content: `A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed. The real numbers are not.

// // ## The Fundamental Theorem of Algebra

// // Every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$, counting multiplicity.

// // This theorem guarantees that polynomial equations always have solutions — no need to invent further number systems beyond $\\mathbb{C}$.

// // ## Why $\\mathbb{R}$ Fails

// // The polynomial $x^2 + 1 = 0$ has no real solutions. No real number squared equals $-1$. This limitation motivated the creation of complex numbers in the first place.

// // In $\\mathbb{C}$, the equation $x^2 + 1 = 0$ has two solutions: $x = i$ and $x = -i$.

// // ## Practical Consequence

// // When factoring polynomials over $\\mathbb{C}$, every polynomial of degree $n$ factors completely into $n$ linear factors:

// // $$p(z) = a_n(z - r_1)(z - r_2)\\cdots(z - r_n)$$

// // Over $\\mathbb{R}$, some polynomials resist complete factorization. Over $\\mathbb{C}$, none do.

// // For more on polynomial roots, see [equations and polynomials](!/complex-numbers/equations-polynomials).`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },
    

// //     obj8: {
// //   title: `What Complex Numbers Lack`,
// //   content: `Despite their algebraic completeness, complex numbers lack one property that real numbers possess: order.

// // ## Not an Ordered Field

// // The real numbers are ordered. Given distinct $a, b \\in \\mathbb{R}$, either $a < b$ or $b < a$. This ordering respects arithmetic: if $a < b$, then $a + c < b + c$ for any $c$, and $ac < bc$ when $c > 0$.

// // No such ordering exists for $\\mathbb{C}$. There is no way to define "$<$" on complex numbers that remains consistent with the field operations.

// // ## Why Ordering Fails

// // Suppose an ordering existed. Consider where $i$ falls relative to $0$.

// // **Case 1:** $i > 0$

// // Then $i \\cdot i > 0$, so $i^2 > 0$, meaning $-1 > 0$. But this contradicts $1 > 0$ (which must hold in any ordered field).

// // **Case 2:** $i < 0$

// // Then $-i > 0$, so $(-i)(-i) > 0$, meaning $i^2 > 0$, so $-1 > 0$. Same contradiction.

// // Neither case works. The number $i$ cannot be consistently placed relative to $0$, and the same argument applies to every non-real complex number.

// // ## What We Can Compare

// // Although $z_1 < z_2$ is meaningless for complex numbers, we can compare their [moduli](!/complex-numbers/absolute-value). The statement $|z_1| < |z_2|$ is well-defined because moduli are real numbers. We compare sizes, not positions.`,
// //   before: ``,
// //   after: ``,
// //   link: '',
// // },

// //     obj9: {
// //       title: `Summary: Operation Effects on Conjugate, Modulus, and Argument`,
// //       content: `The conjugate, modulus, and argument each interact predictably with the same arithmetic operations. The table below collects how each of the three invariants behaves under sum, difference, product, quotient, power, and conjugation — exposing the parallel structure that the preceding sections established one at a time.`,
// //       before: ``,
// //       after: ``,
// //       link: '',
// //     },

// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
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


// // formulas-optimized: v1 | 2026-06-11 | 5 callouts (obj6 ×5)
// const sectionsContent={

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Complex Number](!/complex-numbers/definitions#complex_number) — elements of the field $\\mathbb{C}$
// - [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — guarantees subtraction in $\\mathbb{C}$
// - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — guarantees division for nonzero elements
// - [Modulus](!/complex-numbers/definitions#modulus) — underpins the metric structure of $\\mathbb{C}$`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },

//     obj1: {
//   title: `Overview of Complex Number Properties`,
//   content: `The properties of complex numbers fall into distinct categories based on their origin and nature.

// **Arithmetic properties** govern basic operations — addition, subtraction, multiplication, and division. These properties derive from the fact that complex numbers form what mathematicians call a field, an algebraic structure shared with the [real numbers](!/complex-numbers/algebraic-form) $\\mathbb{R}$ and rational numbers $\\mathbb{Q}$. Any rule that works for real arithmetic also works for complex arithmetic.

// **Conjugate, modulus, and argument properties** are unique to complex numbers. The [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ reflects a number across the real axis. The [modulus](!/complex-numbers/absolute-value) $|z|$ measures distance from the origin. The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ specifies direction. Each of these concepts carries its own set of rules describing how it behaves under arithmetic operations.

// **Algebraic closure** is a property that makes $\\mathbb{C}$ more powerful than $\\mathbb{R}$. Every polynomial equation has solutions in the complex numbers — a guarantee that real numbers cannot provide.

// **Ordering** is a property that $\\mathbb{C}$ lacks. Unlike real numbers, complex numbers cannot be arranged on a line from smallest to largest. The familiar comparisons "greater than" and "less than" do not apply.

// The sections that follow examine each category in detail.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj2: {
//   title: `Complex Numbers as a Field`,
//   content: `In abstract algebra, a field is a set equipped with two operations — addition and multiplication — that satisfy a specific collection of axioms. These axioms guarantee predictable arithmetic: you can add, subtract, multiply, and divide (except by zero) and always obtain a result within the same set.

// The rational numbers $\\mathbb{Q}$ form a field. So do the real numbers $\\mathbb{R}$. The complex numbers $\\mathbb{C}$ extend this pattern — they too satisfy every field axiom.

// Why does this matter? Because field structure ensures that algebraic techniques transfer seamlessly. Factoring, expanding, simplifying, solving equations — all the methods developed for real numbers work identically for complex numbers. No special cases, no exceptions, no hidden traps.

// The field axioms divide into several groups:

// • **Closure:** Operations keep you inside the set

// • **Commutativity:** Order of operands does not matter

// • **Associativity:** Grouping of operands does not matter

// • **Identity elements:** Zero for addition, one for multiplication

// • **Inverse elements:** Every number has a negative; every nonzero number has a reciprocal

// • **Distributivity:** Multiplication distributes over addition

// The next section lists these axioms precisely and confirms that $\\mathbb{C}$ satisfies each one.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj3: {
//   title: `Arithmetic Properties (Field Axioms)`,
//   content: `The eleven field axioms, all satisfied by $\\mathbb{C}$:

// ## Closure

// • $z_1 + z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

// • $z_1 \\cdot z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

// Adding or multiplying complex numbers always produces a complex number.

// ## Commutativity

// • $z_1 + z_2 = z_2 + z_1$

// • $z_1 \\cdot z_2 = z_2 \\cdot z_1$

// Order does not affect the result.

// ## Associativity

// • $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$

// • $(z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$

// Grouping does not affect the result.

// ## Identity Elements

// • Additive identity: $z + 0 = z$

// • Multiplicative identity: $z \\cdot 1 = z$

// ## Inverse Elements

// • Additive inverse: For every $z$, there exists $-z$ such that $z + (-z) = 0$

// • Multiplicative inverse: For every $z \\neq 0$, there exists $z^{-1}$ such that $z \\cdot z^{-1} = 1$

// The multiplicative inverse is $z^{-1} = \\frac{\\overline{z}}{|z|^2}$.

// ## Distributivity

// • $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$

// Multiplication distributes over addition.

// These eleven properties guarantee that complex arithmetic behaves consistently and predictably, just like real arithmetic.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   

//     obj4: {
//   title: `Properties of the Conjugate`,
//   content: `The [complex conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ of $z = a + bi$ is $\\overline{z} = a - bi$. Conjugation interacts with arithmetic operations in predictable ways.

// ## Conjugate of a Conjugate

// $$\\overline{\\overline{z}} = z$$

// Conjugating twice returns the original number.

// ## Conjugate of a Sum

// $$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$

// The conjugate of a sum equals the sum of conjugates.

// ## Conjugate of a Difference

// $$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$

// ## Conjugate of a Product

// $$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$

// The conjugate of a product equals the product of conjugates.

// ## Conjugate of a Quotient

// $$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$

// ## Extracting Real and Imaginary Parts

// $$z + \\overline{z} = 2\\text{Re}(z)$$

// $$z - \\overline{z} = 2i \\cdot \\text{Im}(z)$$

// ## Product with Conjugate

// $$z \\cdot \\overline{z} = |z|^2$$

// A complex number multiplied by its conjugate yields the square of its [modulus](!/complex-numbers/absolute-value) — always a non-negative real number. This property is essential for [division](!/complex-numbers/operations) of complex numbers.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   
//     obj5: {
//   title: `Properties of the Modulus`,
//   content: `The [modulus](!/complex-numbers/absolute-value) $|z|$ of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, representing the distance from the origin to $z$ in the complex plane.

// ## Non-Negativity

// $$|z| \\geq 0$$

// $$|z| = 0 \\iff z = 0$$

// The modulus is zero only for the number zero itself.

// ## Modulus of a Conjugate

// $$|\\overline{z}| = |z|$$

// A number and its [conjugate](!/complex-numbers/complex-conjugate) have equal moduli.

// ## Modulus of a Product

// $$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$

// The modulus of a product equals the product of moduli.

// ## Modulus of a Quotient

// $$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$

// ## Modulus of a Power

// $$|z^n| = |z|^n$$

// ## Triangle Inequality

// $$|z_1 + z_2| \\leq |z_1| + |z_2|$$

// The distance from the origin to $z_1 + z_2$ never exceeds the sum of individual distances. Geometrically, one side of a triangle cannot exceed the sum of the other two sides.

// ## Reverse Triangle Inequality

// $$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$$

// The difference of moduli never exceeds the modulus of the difference.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   
//     obj6: {
//   title: `Properties of the Argument`,
//   content: `The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ is the angle from the positive real axis to the line connecting the origin to $z$. Arguments are determined only up to multiples of $2\\pi$, so the following properties hold modulo $2\\pi$.

// ## Argument of a Product

// @academic[formula_callout:Argument of a Product
// $$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$
// /complex-numbers/formulas#argument_of_a_product]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Multiplying complex numbers adds their arguments. Geometrically, multiplication rotates by the sum of the angles.

// ## Argument of a Quotient

// @academic[formula_callout:Argument of a Quotient
// $$\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$
// /complex-numbers/formulas#argument_of_a_quotient]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Dividing complex numbers subtracts arguments.

// ## Argument of a Power

// @academic[formula_callout:Argument of a Power
// $$\\arg(z^n) = n \\cdot \\arg(z)$$
// /complex-numbers/formulas#argument_of_a_power]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Raising to the $n$th power multiplies the argument by $n$. This property underlies [De Moivre's theorem](!/complex-numbers/demoivre-theorem).

// ## Argument of a Conjugate

// @academic[formula_callout:Argument of Conjugate
// $$\\arg(\\overline{z}) = -\\arg(z)$$
// /complex-numbers/formulas#argument_of_conjugate]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Conjugation reflects across the real axis, negating the angle.

// ## Argument of a Negative

// @academic[formula_callout:Argument of Negative
// $$\\arg(-z) = \\arg(z) + \\pi$$
// /complex-numbers/formulas#argument_of_negative]@

// @academic[formulas_link:Browse all complex numbers formulas
// /complex-numbers/formulas]@

// Negation rotates by $180°$.

// ## Note on Multivaluedness

// Since $\\arg(z)$ is defined only up to $2\\pi k$ for integer $k$, these equalities hold in the sense that representative values from each side differ by a multiple of $2\\pi$. When using the principal argument $\\text{Arg}(z)$, results may need adjustment to stay within the chosen interval.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   

//     obj7: {
//   title: `Algebraic Closure`,
//   content: `A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed. The real numbers are not.

// ## The Fundamental Theorem of Algebra

// Every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$, counting multiplicity.

// This theorem guarantees that polynomial equations always have solutions — no need to invent further number systems beyond $\\mathbb{C}$.

// ## Why $\\mathbb{R}$ Fails

// The polynomial $x^2 + 1 = 0$ has no real solutions. No real number squared equals $-1$. This limitation motivated the creation of complex numbers in the first place.

// In $\\mathbb{C}$, the equation $x^2 + 1 = 0$ has two solutions: $x = i$ and $x = -i$.

// ## Practical Consequence

// When factoring polynomials over $\\mathbb{C}$, every polynomial of degree $n$ factors completely into $n$ linear factors:

// $$p(z) = a_n(z - r_1)(z - r_2)\\cdots(z - r_n)$$

// Over $\\mathbb{R}$, some polynomials resist complete factorization. Over $\\mathbb{C}$, none do.

// For more on polynomial roots, see [equations and polynomials](!/complex-numbers/equations-polynomials).`,
//   before: ``,
//   after: ``,
//   link: '',
// },
    

//     obj8: {
//   title: `What Complex Numbers Lack`,
//   content: `Despite their algebraic completeness, complex numbers lack one property that real numbers possess: order.

// ## Not an Ordered Field

// The real numbers are ordered. Given distinct $a, b \\in \\mathbb{R}$, either $a < b$ or $b < a$. This ordering respects arithmetic: if $a < b$, then $a + c < b + c$ for any $c$, and $ac < bc$ when $c > 0$.

// No such ordering exists for $\\mathbb{C}$. There is no way to define "$<$" on complex numbers that remains consistent with the field operations.

// ## Why Ordering Fails

// Suppose an ordering existed. Consider where $i$ falls relative to $0$.

// **Case 1:** $i > 0$

// Then $i \\cdot i > 0$, so $i^2 > 0$, meaning $-1 > 0$. But this contradicts $1 > 0$ (which must hold in any ordered field).

// **Case 2:** $i < 0$

// Then $-i > 0$, so $(-i)(-i) > 0$, meaning $i^2 > 0$, so $-1 > 0$. Same contradiction.

// Neither case works. The number $i$ cannot be consistently placed relative to $0$, and the same argument applies to every non-real complex number.

// ## What We Can Compare

// Although $z_1 < z_2$ is meaningless for complex numbers, we can compare their [moduli](!/complex-numbers/absolute-value). The statement $|z_1| < |z_2|$ is well-defined because moduli are real numbers. We compare sizes, not positions.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj9: {
//       title: `Summary: Operation Effects on Conjugate, Modulus, and Argument`,
//       content: `The conjugate, modulus, and argument each interact predictably with the same arithmetic operations. The table below collects how each of the three invariants behaves under sum, difference, product, quotient, power, and conjugation — exposing the parallel structure that the preceding sections established one at a time.`,
//       before: ``,
//       after: ``,
//       link: '',
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



//   const introContent = {
//   id: "intro",
//   title: "The Rules Governing Complex Arithmetic",
//   content: `Complex numbers obey specific rules that determine how they interact under arithmetic operations. Some of these properties arise from the algebraic structure shared with real numbers, while others are unique to the complex number system. Understanding these properties provides the foundation for manipulating complex expressions, simplifying calculations, and recognizing what complex numbers can and cannot do.`
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is a field in mathematics?",
//     answer: "A field is a set equipped with two operations (addition and multiplication) that satisfy specific axioms: closure, commutativity, associativity, identity elements, inverse elements, and distributivity. Fields guarantee predictable arithmetic where you can add, subtract, multiply, and divide (except by zero)."
//   },
//   obj2: {
//     question: "Are complex numbers a field?",
//     answer: "Yes, the complex numbers ℂ form a field. They satisfy all eleven field axioms, which means algebraic techniques developed for real numbers work identically for complex numbers — factoring, expanding, simplifying, and solving equations all transfer seamlessly."
//   },
//   obj3: {
//     question: "What is the multiplicative inverse of a complex number?",
//     answer: "For a nonzero complex number z, the multiplicative inverse is z⁻¹ = z̄/|z|², where z̄ is the conjugate and |z| is the modulus. This formula uses the property that z · z̄ = |z|² to eliminate the imaginary part from the denominator."
//   },
//   obj4: {
//     question: "What are the conjugate properties of complex numbers?",
//     answer: "Key conjugate properties include: the conjugate of a conjugate returns the original (double conjugate), conjugate distributes over addition and multiplication, z · z̄ = |z|², and z + z̄ = 2Re(z). The conjugate of a quotient equals the quotient of conjugates."
//   },
//   obj5: {
//     question: "What is the product of a complex number and its conjugate?",
//     answer: "A complex number multiplied by its conjugate always yields the square of its modulus: z · z̄ = |z|² = a² + b² for z = a + bi. This result is always a non-negative real number and is essential for complex division."
//   },
//   obj6: {
//     question: "What is the modulus of a product of complex numbers?",
//     answer: "The modulus of a product equals the product of the moduli: |z₁ · z₂| = |z₁| · |z₂|. Similarly, the modulus of a quotient equals the quotient of moduli, and the modulus of a power equals the modulus raised to that power."
//   },
//   obj7: {
//     question: "What is the triangle inequality for complex numbers?",
//     answer: "The triangle inequality states |z₁ + z₂| ≤ |z₁| + |z₂|. Geometrically, the distance from the origin to z₁ + z₂ never exceeds the sum of the individual distances. This is equivalent to saying one side of a triangle cannot exceed the sum of the other two."
//   },
//   obj8: {
//     question: "What is the reverse triangle inequality?",
//     answer: "The reverse triangle inequality states ||z₁| - |z₂|| ≤ |z₁ - z₂|. The absolute difference of moduli never exceeds the modulus of the difference. This provides a lower bound complementing the upper bound from the standard triangle inequality."
//   },
//   obj9: {
//     question: "How does the argument behave under multiplication?",
//     answer: "The argument of a product equals the sum of arguments: arg(z₁ · z₂) = arg(z₁) + arg(z₂). Geometrically, multiplying complex numbers adds their angles. Similarly, division subtracts arguments, and raising to a power multiplies the argument by the exponent."
//   },
//   obj10: {
//     question: "What is algebraic closure?",
//     answer: "A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed, meaning every polynomial equation has solutions in ℂ. The real numbers are not algebraically closed."
//   },
//   obj11: {
//     question: "What is the Fundamental Theorem of Algebra?",
//     answer: "The Fundamental Theorem of Algebra states that every polynomial of degree n ≥ 1 with complex coefficients has exactly n roots in ℂ, counting multiplicity. This guarantees polynomial equations always have solutions without needing number systems beyond the complex numbers."
//   },
//   obj12: {
//     question: "Why can't complex numbers be ordered?",
//     answer: "Complex numbers cannot be ordered because no consistent definition of 'less than' exists. If i > 0, then i² > 0, meaning -1 > 0 — a contradiction. If i < 0, then -i > 0, so (-i)² > 0, again giving -1 > 0. Neither case works, so no ordering is possible."
//   },
//   obj13: {
//     question: "Can you compare complex numbers at all?",
//     answer: "While z₁ < z₂ is meaningless for complex numbers, you can compare their moduli. The statement |z₁| < |z₂| is well-defined because moduli are real numbers. We compare sizes (distances from origin), not positions."
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Properties of Complex Numbers",
//     "description": "Learn properties of complex numbers: field axioms, conjugate properties, modulus and argument rules, triangle inequality, algebraic closure, and why complex numbers cannot be ordered.",
//     "url": "https://www.learnmathclass.com/complex-numbers/properties",
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
//       "name": "Properties of Complex Numbers"
//     },
//     "teaches": [
//       "Complex numbers as a mathematical field",
//       "The eleven field axioms and their verification",
//       "Properties of the complex conjugate",
//       "Properties of the modulus including triangle inequality",
//       "Properties of the argument under arithmetic operations",
//       "Algebraic closure and the Fundamental Theorem of Algebra",
//       "Why complex numbers cannot be ordered",
//       "How conjugate, modulus, and argument transform together under each arithmetic operation"
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
//         "name": "Properties",
//         "item": "https://www.learnmathclass.com/complex-numbers/properties"
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
//     obj3Table,
//     obj7Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Properties of Complex Numbers: Field Axioms | Learn Math Class",
//       description: "Learn properties of complex numbers: field axioms, conjugate properties, modulus and argument rules, triangle inequality, algebraic closure, and why complex numbers cannot be ordered.",
//       keywords: keyWords.join(", "),
//       url: "/complex-numbers/properties",
//       name: "Properties of Complex Numbers"
//     },
//   }
// }
//    }


// export default function PropertiesPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj3Table,
//   obj7Table,
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
//           <div
//             key={'obj3-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj3Table }}
//           />,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Compex Numbers Properties</h1>
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
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import conjugateModulusDiagrams from '@/app/components/calculators/complex-numbers/conjugateModulusDiagrams'
import polarRectangularDiagrams from '@/app/components/calculators/complex-numbers/polarRectangularDiagrams'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import PropertySheet from '@/app/components/infographics/PropertySheet/PropertySheet'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'


export async function getStaticProps(){

  const keyWords = [
  "complex number properties",
  "field axioms complex numbers",
  "complex numbers field",
  "complex conjugate properties",
  "modulus properties",
  "argument properties",
  "triangle inequality complex numbers",
  "algebraic closure",
  "fundamental theorem of algebra",
  "ordered field",
  "commutative property complex numbers",
  "associative property complex numbers",
  "distributive property",
  "multiplicative inverse complex number",
  "reverse triangle inequality"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj3 — aggregation: the 11 field axioms organized by + / · parallel
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Axiom group</th>
      <th style="${tableHeaders.aggregation}">Additive form (+)</th>
      <th style="${tableHeaders.aggregation}">Multiplicative form (·)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Closure</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ + z₂ ∈ ℂ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ · z₂ ∈ ℂ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commutativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ + z₂ = z₂ + z₁</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z₁ · z₂ = z₂ · z₁</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Associativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z₁ · z₂) · z₃ = z₁ · (z₂ · z₃)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z + 0 = z (additive identity 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z · 1 = z (multiplicative identity 1)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−z exists; z + (−z) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z⁻¹ exists for z ≠ 0; z · z⁻¹ = 1<br/><span style="font-size: 13px;">(formula: z⁻¹ = z̄ / |z|²)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Distributivity</td>
      <td colspan="2" style="padding: 12px 15px; color: #34495e; text-align: center;">z₁ · (z₂ + z₃) = z₁ · z₂ + z₁ · z₃ &nbsp;&nbsp; <span style="font-size: 13px;">(multiplication distributes over addition)</span></td>
    </tr>
  </tbody>
</table>
`

  // obj7 — comparison: algebraic closure, ℝ vs ℂ
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Question</th>
      <th style="${tableHeaders.comparison} text-align: center;">ℝ (real numbers)</th>
      <th style="${tableHeaders.comparison} text-align: center;">ℂ (complex numbers)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraically closed?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">✗ No</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">✓ Yes</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Every non-constant polynomial has a root in the field?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Not always — e.g., x² + 1 = 0 has no real root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Always — guaranteed by the Fundamental Theorem of Algebra</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Degree-n polynomial factors completely into n linear factors?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Not always (some factors remain irreducible quadratics)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Always: p(z) = aₙ(z − r₁)(z − r₂)⋯(z − rₙ)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Number of roots of a degree-n polynomial</td>
      <td style="padding: 12px 15px; color: #34495e;">0 to n</td>
      <td style="padding: 12px 15px; color: #34495e;">exactly n (counting multiplicity)</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — summary capstone: operation × (conjugate, modulus, argument)
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation</th>
      <th style="${tableHeaders.summary}">Conjugate behaves as…</th>
      <th style="${tableHeaders.summary}">Modulus behaves as…</th>
      <th style="${tableHeaders.summary}">Argument behaves as…</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum&nbsp;&nbsp; z₁ + z₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ + z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁ + z₂| ≤ |z₁| + |z₂|<br/><span style="font-size: 13px;">(triangle inequality)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no simple rule</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference&nbsp;&nbsp; z₁ − z₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ − z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁ − z₂| ≥ &#124;&thinsp;|z₁| − |z₂|&thinsp;&#124;<br/><span style="font-size: 13px;">(reverse triangle inequality)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no simple rule</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product&nbsp;&nbsp; z₁ · z₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ · z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁| · |z₂|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arg(z₁) + arg(z₂)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient&nbsp;&nbsp; z₁ / z₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">z̄₁ / z̄₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z₁| / |z₂|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arg(z₁) − arg(z₂)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power&nbsp;&nbsp; zⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(z̄)ⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|z|ⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n · arg(z)<br/><span style="font-size: 13px;">(De Moivre)</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Conjugation&nbsp;&nbsp; z̄</td>
      <td style="padding: 12px 15px; color: #34495e;">z (double conjugate)</td>
      <td style="padding: 12px 15px; color: #34495e;">|z| (unchanged)</td>
      <td style="padding: 12px 15px; color: #34495e;">−arg(z)</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose unchanged; obj9 added) ----------

//     const sectionsContent={

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Complex Number](!/complex-numbers/definitions#complex_number) — elements of the field $\\mathbb{C}$
// - [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — guarantees subtraction in $\\mathbb{C}$
// - [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — guarantees division for nonzero elements
// - [Modulus](!/complex-numbers/definitions#modulus) — underpins the metric structure of $\\mathbb{C}$`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
//   link: '',
// },

//     obj1: {
//   title: `Overview of Complex Number Properties`,
//   content: `The properties of complex numbers fall into distinct categories based on their origin and nature.

// **Arithmetic properties** govern basic operations — addition, subtraction, multiplication, and division. These properties derive from the fact that complex numbers form what mathematicians call a field, an algebraic structure shared with the [real numbers](!/complex-numbers/algebraic-form) $\\mathbb{R}$ and rational numbers $\\mathbb{Q}$. Any rule that works for real arithmetic also works for complex arithmetic.

// **Conjugate, modulus, and argument properties** are unique to complex numbers. The [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ reflects a number across the real axis. The [modulus](!/complex-numbers/absolute-value) $|z|$ measures distance from the origin. The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ specifies direction. Each of these concepts carries its own set of rules describing how it behaves under arithmetic operations.

// **Algebraic closure** is a property that makes $\\mathbb{C}$ more powerful than $\\mathbb{R}$. Every polynomial equation has solutions in the complex numbers — a guarantee that real numbers cannot provide.

// **Ordering** is a property that $\\mathbb{C}$ lacks. Unlike real numbers, complex numbers cannot be arranged on a line from smallest to largest. The familiar comparisons "greater than" and "less than" do not apply.

// The sections that follow examine each category in detail.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj2: {
//   title: `Complex Numbers as a Field`,
//   content: `In abstract algebra, a field is a set equipped with two operations — addition and multiplication — that satisfy a specific collection of axioms. These axioms guarantee predictable arithmetic: you can add, subtract, multiply, and divide (except by zero) and always obtain a result within the same set.

// The rational numbers $\\mathbb{Q}$ form a field. So do the real numbers $\\mathbb{R}$. The complex numbers $\\mathbb{C}$ extend this pattern — they too satisfy every field axiom.

// Why does this matter? Because field structure ensures that algebraic techniques transfer seamlessly. Factoring, expanding, simplifying, solving equations — all the methods developed for real numbers work identically for complex numbers. No special cases, no exceptions, no hidden traps.

// The field axioms divide into several groups:

// • **Closure:** Operations keep you inside the set

// • **Commutativity:** Order of operands does not matter

// • **Associativity:** Grouping of operands does not matter

// • **Identity elements:** Zero for addition, one for multiplication

// • **Inverse elements:** Every number has a negative; every nonzero number has a reciprocal

// • **Distributivity:** Multiplication distributes over addition

// The next section lists these axioms precisely and confirms that $\\mathbb{C}$ satisfies each one.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj3: {
//   title: `Arithmetic Properties (Field Axioms)`,
//   content: `The eleven field axioms, all satisfied by $\\mathbb{C}$:

// ## Closure

// • $z_1 + z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

// • $z_1 \\cdot z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

// Adding or multiplying complex numbers always produces a complex number.

// ## Commutativity

// • $z_1 + z_2 = z_2 + z_1$

// • $z_1 \\cdot z_2 = z_2 \\cdot z_1$

// Order does not affect the result.

// ## Associativity

// • $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$

// • $(z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$

// Grouping does not affect the result.

// ## Identity Elements

// • Additive identity: $z + 0 = z$

// • Multiplicative identity: $z \\cdot 1 = z$

// ## Inverse Elements

// • Additive inverse: For every $z$, there exists $-z$ such that $z + (-z) = 0$

// • Multiplicative inverse: For every $z \\neq 0$, there exists $z^{-1}$ such that $z \\cdot z^{-1} = 1$

// The multiplicative inverse is $z^{-1} = \\frac{\\overline{z}}{|z|^2}$.

// ## Distributivity

// • $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$

// Multiplication distributes over addition.

// These eleven properties guarantee that complex arithmetic behaves consistently and predictably, just like real arithmetic.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   

//     obj4: {
//   title: `Properties of the Conjugate`,
//   content: `The [complex conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ of $z = a + bi$ is $\\overline{z} = a - bi$. Conjugation interacts with arithmetic operations in predictable ways.

// ## Conjugate of a Conjugate

// $$\\overline{\\overline{z}} = z$$

// Conjugating twice returns the original number.

// ## Conjugate of a Sum

// $$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$

// The conjugate of a sum equals the sum of conjugates.

// ## Conjugate of a Difference

// $$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$

// ## Conjugate of a Product

// $$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$

// The conjugate of a product equals the product of conjugates.

// ## Conjugate of a Quotient

// $$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$

// ## Extracting Real and Imaginary Parts

// $$z + \\overline{z} = 2\\text{Re}(z)$$

// $$z - \\overline{z} = 2i \\cdot \\text{Im}(z)$$

// ## Product with Conjugate

// $$z \\cdot \\overline{z} = |z|^2$$

// A complex number multiplied by its conjugate yields the square of its [modulus](!/complex-numbers/absolute-value) — always a non-negative real number. This property is essential for [division](!/complex-numbers/operations) of complex numbers.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   
//     obj5: {
//   title: `Properties of the Modulus`,
//   content: `The [modulus](!/complex-numbers/absolute-value) $|z|$ of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, representing the distance from the origin to $z$ in the complex plane.

// ## Non-Negativity

// $$|z| \\geq 0$$

// $$|z| = 0 \\iff z = 0$$

// The modulus is zero only for the number zero itself.

// ## Modulus of a Conjugate

// $$|\\overline{z}| = |z|$$

// A number and its [conjugate](!/complex-numbers/complex-conjugate) have equal moduli.

// ## Modulus of a Product

// $$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$

// The modulus of a product equals the product of moduli.

// ## Modulus of a Quotient

// $$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$

// ## Modulus of a Power

// $$|z^n| = |z|^n$$

// ## Triangle Inequality

// $$|z_1 + z_2| \\leq |z_1| + |z_2|$$

// The distance from the origin to $z_1 + z_2$ never exceeds the sum of individual distances. Geometrically, one side of a triangle cannot exceed the sum of the other two sides.

// ## Reverse Triangle Inequality

// $$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$$

// The difference of moduli never exceeds the modulus of the difference.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   
//     obj6: {
//   title: `Properties of the Argument`,
//   content: `The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ is the angle from the positive real axis to the line connecting the origin to $z$. Arguments are determined only up to multiples of $2\\pi$, so the following properties hold modulo $2\\pi$.

// ## Argument of a Product

// $$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$

// Multiplying complex numbers adds their arguments. Geometrically, multiplication rotates by the sum of the angles.

// ## Argument of a Quotient

// $$\\arg\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$

// Dividing complex numbers subtracts arguments.

// ## Argument of a Power

// $$\\arg(z^n) = n \\cdot \\arg(z)$$

// Raising to the $n$th power multiplies the argument by $n$. This property underlies [De Moivre's theorem](!/complex-numbers/demoivre-theorem).

// ## Argument of a Conjugate

// $$\\arg(\\overline{z}) = -\\arg(z)$$

// Conjugation reflects across the real axis, negating the angle.

// ## Argument of a Negative

// $$\\arg(-z) = \\arg(z) + \\pi$$

// Negation rotates by $180°$.

// ## Note on Multivaluedness

// Since $\\arg(z)$ is defined only up to $2\\pi k$ for integer $k$, these equalities hold in the sense that representative values from each side differ by a multiple of $2\\pi$. When using the principal argument $\\text{Arg}(z)$, results may need adjustment to stay within the chosen interval.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
   

//     obj7: {
//   title: `Algebraic Closure`,
//   content: `A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed. The real numbers are not.

// ## The Fundamental Theorem of Algebra

// Every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$, counting multiplicity.

// This theorem guarantees that polynomial equations always have solutions — no need to invent further number systems beyond $\\mathbb{C}$.

// ## Why $\\mathbb{R}$ Fails

// The polynomial $x^2 + 1 = 0$ has no real solutions. No real number squared equals $-1$. This limitation motivated the creation of complex numbers in the first place.

// In $\\mathbb{C}$, the equation $x^2 + 1 = 0$ has two solutions: $x = i$ and $x = -i$.

// ## Practical Consequence

// When factoring polynomials over $\\mathbb{C}$, every polynomial of degree $n$ factors completely into $n$ linear factors:

// $$p(z) = a_n(z - r_1)(z - r_2)\\cdots(z - r_n)$$

// Over $\\mathbb{R}$, some polynomials resist complete factorization. Over $\\mathbb{C}$, none do.

// For more on polynomial roots, see [equations and polynomials](!/complex-numbers/equations-polynomials).`,
//   before: ``,
//   after: ``,
//   link: '',
// },
    

//     obj8: {
//   title: `What Complex Numbers Lack`,
//   content: `Despite their algebraic completeness, complex numbers lack one property that real numbers possess: order.

// ## Not an Ordered Field

// The real numbers are ordered. Given distinct $a, b \\in \\mathbb{R}$, either $a < b$ or $b < a$. This ordering respects arithmetic: if $a < b$, then $a + c < b + c$ for any $c$, and $ac < bc$ when $c > 0$.

// No such ordering exists for $\\mathbb{C}$. There is no way to define "$<$" on complex numbers that remains consistent with the field operations.

// ## Why Ordering Fails

// Suppose an ordering existed. Consider where $i$ falls relative to $0$.

// **Case 1:** $i > 0$

// Then $i \\cdot i > 0$, so $i^2 > 0$, meaning $-1 > 0$. But this contradicts $1 > 0$ (which must hold in any ordered field).

// **Case 2:** $i < 0$

// Then $-i > 0$, so $(-i)(-i) > 0$, meaning $i^2 > 0$, so $-1 > 0$. Same contradiction.

// Neither case works. The number $i$ cannot be consistently placed relative to $0$, and the same argument applies to every non-real complex number.

// ## What We Can Compare

// Although $z_1 < z_2$ is meaningless for complex numbers, we can compare their [moduli](!/complex-numbers/absolute-value). The statement $|z_1| < |z_2|$ is well-defined because moduli are real numbers. We compare sizes, not positions.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj9: {
//       title: `Summary: Operation Effects on Conjugate, Modulus, and Argument`,
//       content: `The conjugate, modulus, and argument each interact predictably with the same arithmetic operations. The table below collects how each of the three invariants behaves under sum, difference, product, quotient, power, and conjugation — exposing the parallel structure that the preceding sections established one at a time.`,
//       before: ``,
//       after: ``,
//       link: '',
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


// formulas-optimized: v1 | 2026-06-11 | 5 callouts (obj6 ×5)
// Concept introduction (section 2, "Complex Numbers as a Field") — template
// G, exclusion. Running instance: N, Z, Q, R and C tested on whether
// subtraction and division stay inside. Old obj2 text is kept in
// sectionsContent.obj2, unused; its five passages, six bullets and the
// punchline are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciSystemsTable = ciTableOpen(['number system', 'subtraction stays inside?', 'division by nonzero stays inside?', 'a field?']) +
  ciRow(['natural numbers ℕ', 'no: 2 − 5 = −3', '—', 'no'], { color: '#a4243b', cols: [1] }) +
  ciRow(['integers ℤ', 'yes', 'no: 1 ÷ 2 = 1/2', 'no'], { shade: true, color: '#a4243b', cols: [2] }) +
  ciRow(['rationals ℚ', 'yes', 'yes', 'yes'], { color: '#2563EB', cols: [3] }) +
  ciRow(['reals ℝ', 'yes', 'yes', 'yes'], { shade: true, color: '#2563EB', cols: [3] }) +
  ciRow(['complex numbers ℂ', 'yes', 'yes', 'yes'], { last: true, color: '#2563EB', cols: [3] }) +
  '</tbody></table>'

const sectionsContent={

    obj0: {
  title: `Key Terms`,
  content: `
- [Complex Number](!/complex-numbers/definitions#complex_number) — elements of the field $\\mathbb{C}$
- [Additive Inverse](!/complex-numbers/definitions#additive_inverse) — guarantees subtraction in $\\mathbb{C}$
- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse) — guarantees division for nonzero elements
- [Modulus](!/complex-numbers/definitions#modulus) — underpins the metric structure of $\\mathbb{C}$`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Complex Numbers Definitions](!/complex-numbers/definitions) →@`,
  link: '',
},

    obj1: {
  title: `Overview of Complex Number Properties`,
  content: `The properties of complex numbers fall into distinct categories based on their origin and nature.

**Arithmetic properties** govern basic operations — addition, subtraction, multiplication, and division. These properties derive from the fact that complex numbers form what mathematicians call a field, an algebraic structure shared with the [real numbers](!/complex-numbers/algebraic-form) $\\mathbb{R}$ and rational numbers $\\mathbb{Q}$. Every rule that follows from the field axioms — commutativity, associativity, distributivity, identities and inverses — works for complex arithmetic just as for real arithmetic.

**Conjugate, modulus, and argument properties** are unique to complex numbers. The [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ reflects a number across the real axis. The [modulus](!/complex-numbers/absolute-value) $|z|$ measures distance from the origin. The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ specifies direction. Each of these concepts carries its own set of rules describing how it behaves under arithmetic operations.

**Algebraic closure** is a property that makes $\\mathbb{C}$ more powerful than $\\mathbb{R}$. Every non-constant polynomial equation has solutions in the complex numbers — a guarantee that real numbers cannot provide.

**Ordering** is a property that $\\mathbb{C}$ lacks. Unlike real numbers, complex numbers cannot be arranged on a line from smallest to largest in a way that respects addition and multiplication. The familiar comparisons "greater than" and "less than" do not apply.

The sections that follow examine each category in detail.`,
  before: ``,
  after: ``,
  link: '',
},

    obj2: {
  title: `Complex Numbers as a Field`,
  content: `In abstract algebra, a field is a set equipped with two operations — addition and multiplication — that satisfy a specific collection of axioms. These axioms guarantee predictable arithmetic: you can add, subtract, multiply, and divide (except by zero) and always obtain a result within the same set.

The rational numbers $\\mathbb{Q}$ form a field. So do the real numbers $\\mathbb{R}$. The complex numbers $\\mathbb{C}$ extend this pattern — they too satisfy every field axiom.

Why does this matter? Because field structure ensures that algebraic techniques transfer seamlessly. Factoring, expanding, simplifying, solving equations — all the methods that rely only on the field rules work identically for complex numbers. Rules that depend on order or on real square roots, such as $x^2 \\geq 0$ or $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$, do not carry over.

The field axioms divide into several groups:

• **Closure:** Operations keep you inside the set

• **Commutativity:** Order of operands does not matter

• **Associativity:** Grouping of operands does not matter

• **Identity elements:** Zero for addition, one for multiplication

• **Inverse elements:** Every number has a negative; every nonzero number has a reciprocal

• **Distributivity:** Multiplication distributes over addition

The next section lists these axioms precisely and confirms that $\\mathbb{C}$ satisfies each one.

@academic[punchline:Whatever follows from the field rules alone holds in $\\mathbb{C}$; rules that need order or real square roots must be checked again.]@`,
  before: ``,
  after: ``,
  link: '',
},

    obj3: {
  title: `Arithmetic Properties (Field Axioms)`,
  content: `The eleven field axioms, all satisfied by $\\mathbb{C}$:

## Closure

• $z_1 + z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

• $z_1 \\cdot z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

Adding or multiplying complex numbers always produces a complex number.

## Commutativity

• $z_1 + z_2 = z_2 + z_1$

• $z_1 \\cdot z_2 = z_2 \\cdot z_1$

Order does not affect the result.

## Associativity

• $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$

• $(z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$

Grouping does not affect the result.

## Identity Elements

• Additive identity: $z + 0 = z$

• Multiplicative identity: $z \\cdot 1 = z$

## Inverse Elements

• Additive inverse: For every $z$, there exists $-z$ such that $z + (-z) = 0$

• Multiplicative inverse: For every $z \\neq 0$, there exists $z^{-1}$ such that $z \\cdot z^{-1} = 1$

The multiplicative inverse is $z^{-1} = \\frac{\\overline{z}}{|z|^2}$.

@academic[pitfall,aside:true,width:35%:Dividing by the modulus instead of its square
For $z = 1 + i$, taking $z^{-1} = \\frac{1 - i}{\\sqrt{2}}$ divides by $|z|$, and then $(1 + i) \\cdot \\frac{1 - i}{\\sqrt{2}} = \\sqrt{2}$, not $1$. Dividing by $|z|^2 = 2$ gives $z^{-1} = \\frac{1 - i}{2}$.
[Read more](!#pitfall-dividing-by-the-modulus-instead-of-its-square)]@

The conjugate in the numerator is what makes the formula work. Multiplying $z$ by $\\overline{z}$ produces the real number $|z|^2$, so the product $z \\cdot z^{-1}$ becomes $\\frac{z \\cdot \\overline{z}}{|z|^2}$, a real number divided by itself. The inverse is found without solving any equation, only by conjugating and scaling.

## Distributivity

• $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$

Multiplication distributes over addition.

These eleven properties guarantee that complex arithmetic behaves consistently and predictably, just like real arithmetic.`,
  before: ``,
  after: ``,
  link: '',
},
   

    obj4: {
  title: `Properties of the Conjugate`,
  content: `The [complex conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ of $z = a + bi$ is $\\overline{z} = a - bi$. Conjugation interacts with arithmetic operations in predictable ways.

## Conjugate of a Conjugate

@academic[formula_callout:Conjugate of a Conjugate
$$\\overline{\\overline{z}} = z$$
/complex-numbers/formulas#conjugate_of_a_conjugate]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Conjugating twice returns the original number.

## Conjugate of a Sum

@academic[formula_callout:Conjugate of a Sum
$$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$
/complex-numbers/formulas#conjugate_of_a_sum]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The conjugate of a sum equals the sum of conjugates.

## Conjugate of a Difference

@academic[formula_callout:Properties of the Conjugate
$$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$]@

## Conjugate of a Product

@academic[formula_callout:Conjugate of a Product
$$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$
/complex-numbers/formulas#conjugate_of_a_product]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The conjugate of a product equals the product of conjugates.

## Conjugate of a Quotient

@academic[formula_callout:Conjugate of a Quotient
$$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$
/complex-numbers/formulas#conjugate_of_a_quotient]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

## Extracting Real and Imaginary Parts

@academic[formula_callout:Properties of the Conjugate
$$z + \\overline{z} = 2\\text{Re}(z)$$]@

@academic[formula_callout:Properties of the Conjugate
$$z - \\overline{z} = 2i \\cdot \\text{Im}(z)$$]@

## Product with Conjugate

@academic[formula_callout:Properties of the Conjugate
$$z \\cdot \\overline{z} = |z|^2$$]@

@academic[pitfall,aside:true,width:35%:Forgetting that i squared is −1
Expanding $(2 + 3i)(2 - 3i)$ to $4 - 9 = -5$ takes $(3i)^2$ to be $9$. In fact $(3i)^2 = 9i^2 = -9$, so the product is $4 - (-9) = 13 = |2 + 3i|^2$.
[Read more](!#pitfall-forgetting-that-i-squared-is-1)]@

A complex number multiplied by its conjugate yields the square of its [modulus](!/complex-numbers/absolute-value) — always a non-negative real number. This property is essential for [division](!/complex-numbers/operations) of complex numbers.`,
  before: ``,
  after: ``,
  link: '',
},
   
    obj5: {
  title: `Properties of the Modulus`,
  content: `The [modulus](!/complex-numbers/absolute-value) $|z|$ of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, representing the distance from the origin to $z$ in the complex plane.

## Non-Negativity

@academic[formula_callout:Properties of the Modulus
$$|z| \\geq 0$$]@

@academic[formula_callout:Properties of the Modulus
$$|z| = 0 \\iff z = 0$$]@

The modulus is zero only for the number zero itself.

## Modulus of a Conjugate

@academic[formula_callout:Modulus of Conjugate
$$|\\overline{z}| = |z|$$
/complex-numbers/formulas#modulus_of_conjugate]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

A number and its [conjugate](!/complex-numbers/complex-conjugate) have equal moduli.

## Modulus of a Product

@academic[formula_callout:Modulus of a Product
$$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$
/complex-numbers/formulas#modulus_of_a_product]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The modulus of a product equals the product of moduli.

## Modulus of a Quotient

@academic[formula_callout:Modulus of a Quotient
$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$
/complex-numbers/formulas#modulus_of_a_quotient]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

## Modulus of a Power

@academic[formula_callout:Modulus of a Power
$$|z^n| = |z|^n$$
/complex-numbers/formulas#modulus_of_a_power]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

## Triangle Inequality

@academic[formula_callout:Triangle Inequality
$$|z_1 + z_2| \\leq |z_1| + |z_2|$$
/complex-numbers/formulas#triangle_inequality]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

@academic[pitfall,aside:true,width:35%:Adding the moduli of a sum
Writing $|3 + 4i| = |3| + |4i| = 7$ treats the triangle inequality as an equality. The modulus of the sum is $\\sqrt{3^2 + 4^2} = 5$, which is less than $7$.
[Read more](!#pitfall-adding-the-moduli-of-a-sum)]@

The distance from the origin to $z_1 + z_2$ never exceeds the sum of individual distances. Geometrically, one side of a triangle cannot exceed the sum of the other two sides.

## Reverse Triangle Inequality

@academic[formula_callout:Reverse Triangle Inequality
$$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$$
/complex-numbers/formulas#reverse_triangle_inequality]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

The difference of moduli never exceeds the modulus of the difference.`,
  before: ``,
  after: ``,
  link: '',
},
   
    obj6: {
  title: `Properties of the Argument`,
  content: `The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ is the angle from the positive real axis to the line connecting the origin to $z$. Arguments are determined only up to multiples of $2\\pi$, so the following properties hold modulo $2\\pi$.

## Argument of a Product

@academic[formula_callout:Argument of a Product
$$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$
/complex-numbers/formulas#argument_of_a_product]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

@academic[pitfall,aside:true,width:35%:Leaving the sum outside the principal range
Adding $\\text{Arg}(-1) = \\pi$ and $\\text{Arg}(i) = \\frac{\\pi}{2}$ gives $\\frac{3\\pi}{2}$ for the product $-i$, outside $(-\\pi, \\pi]$. Subtracting $2\\pi$ gives the principal value $\\text{Arg}(-i) = -\\frac{\\pi}{2}$.
[Read more](!#pitfall-leaving-the-sum-outside-the-principal-range)]@

Multiplying complex numbers adds their arguments. Geometrically, multiplication rotates by the sum of the angles.

## Argument of a Quotient

@academic[formula_callout:Argument of a Quotient
$$\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$
/complex-numbers/formulas#argument_of_a_quotient]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Dividing complex numbers subtracts arguments.

## Argument of a Power

@academic[formula_callout:Argument of a Power
$$\\arg(z^n) = n \\cdot \\arg(z)$$
/complex-numbers/formulas#argument_of_a_power]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Raising to the $n$th power multiplies the argument by $n$. This property underlies [De Moivre's theorem](!/complex-numbers/demoivre-theorem).

@academic[fact,aside:true,width:35%:Machin's $\\pi$ in one product
Multiplying out gives $(5 + i)^4(239 - i) = 114244(1 + i)$, so the angles add up to that of $1 + i$: $4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239} = \\frac{\\pi}{4}$. John Machin used this in 1706 to compute $\\pi$ to 100 decimal places.]@

The power rule turns sums of angles into products of numbers. The number $5 + i$ has argument $\\arctan\\frac{1}{5}$, so $(5 + i)^4$ has argument $4\\arctan\\frac{1}{5}$, and a further factor $239 - i$ subtracts $\\arctan\\frac{1}{239}$. Whatever such a combination of angles adds up to can be read off the single number that the product produces.

## Argument of a Conjugate

@academic[formula_callout:Argument of Conjugate
$$\\arg(\\overline{z}) = -\\arg(z)$$
/complex-numbers/formulas#argument_of_conjugate]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Conjugation reflects across the real axis, negating the angle.

## Argument of a Negative

@academic[formula_callout:Argument of Negative
$$\\arg(-z) = \\arg(z) + \\pi$$
/complex-numbers/formulas#argument_of_negative]@

@academic[formulas_link:Browse all complex numbers formulas
/complex-numbers/formulas]@

Negation rotates by $180°$.

## Note on Multivaluedness

Since $\\arg(z)$ is defined only up to $2\\pi k$ for integer $k$, these equalities hold in the sense that representative values from each side differ by a multiple of $2\\pi$. When using the principal argument $\\text{Arg}(z)$, results may need adjustment to stay within the chosen interval.`,
  before: ``,
  after: ``,
  link: '',
},
   

    obj7: {
  title: `Algebraic Closure`,
  content: `A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed. The real numbers are not.

## The Fundamental Theorem of Algebra

Every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$, counting multiplicity.

This theorem guarantees that polynomial equations always have solutions — no need to invent further number systems beyond $\\mathbb{C}$.

## Why $\\mathbb{R}$ Fails

The polynomial $x^2 + 1 = 0$ has no real solutions. No real number squared equals $-1$. This limitation motivated the creation of complex numbers in the first place.

In $\\mathbb{C}$, the equation $x^2 + 1 = 0$ has two solutions: $x = i$ and $x = -i$.

## Practical Consequence

When factoring polynomials over $\\mathbb{C}$, every polynomial of degree $n$ factors completely into $n$ linear factors:

@academic[formula_callout:Algebraic Closure
$$p(z) = a_n(z - r_1)(z - r_2)\\cdots(z - r_n)$$]@

Over $\\mathbb{R}$, some polynomials resist complete factorization. Over $\\mathbb{C}$, none do.

For more on polynomial roots, see [equations and polynomials](!/complex-numbers/equations-polynomials).`,
  before: ``,
  after: ``,
  link: '',
},
    

    obj8: {
  title: `What Complex Numbers Lack`,
  content: `Despite their algebraic completeness, complex numbers lack one property that real numbers possess: order.

## Not an Ordered Field

The real numbers are ordered. Given distinct $a, b \\in \\mathbb{R}$, either $a < b$ or $b < a$. This ordering respects arithmetic: if $a < b$, then $a + c < b + c$ for any $c$, and $ac < bc$ when $c > 0$.

No such ordering exists for $\\mathbb{C}$.

@academic[rule_theorem_plain:There is no way to define "$<$" on complex numbers that remains consistent with the field operations.]@

## Why Ordering Fails

Suppose an ordering existed. Consider where $i$ falls relative to $0$.

**Case 1:** $i > 0$

Then $i \\cdot i > 0$, so $i^2 > 0$, meaning $-1 > 0$. But this contradicts $1 > 0$ (which must hold in any ordered field).

**Case 2:** $i < 0$

Then $-i > 0$, so $(-i)(-i) > 0$, meaning $i^2 > 0$, so $-1 > 0$. Same contradiction.

Neither case works. The number $i$ cannot be consistently placed relative to $0$, and this single case already rules out any ordering of $\\mathbb{C}$ compatible with the field operations.

@academic[fact,aside:true,width:35%:A dictionary order that fails at $i$
Complex numbers can be put in a line: compare real parts, and break ties by imaginary parts, as a dictionary sorts words. This order even survives adding the same number to both sides, but not multiplying: $i > 0$ in it, yet $i \\cdot i = -1 < 0$.]@

The argument uses only two rules that every ordered field must follow: adding the same number to both sides keeps an inequality, and the product of two positive numbers is positive. Lining up the points of the plane is not the problem in itself; the problem is doing it while keeping both rules.

## What We Can Compare

Although $z_1 < z_2$ is meaningless for complex numbers, we can compare their [moduli](!/complex-numbers/absolute-value). The statement $|z_1| < |z_2|$ is well-defined because moduli are real numbers. We compare sizes, not positions.`,
  before: ``,
  after: ``,
  link: '',
},

    obj9: {
      title: `Summary: Operation Effects on Conjugate, Modulus, and Argument`,
      content: `The conjugate, modulus, and argument each interact predictably with the same arithmetic operations. The table below collects how each of the three invariants behaves under sum, difference, product, quotient, power, and conjugation — exposing the parallel structure that the preceding sections established one at a time.`,
      before: ``,
      after: ``,
      link: '',
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
  
    },
    obj16:{
      title:`Common Pitfalls`,
      content:`Five mistakes come up again and again when these properties are put to work. Four are marked where they happen in the sections above; the square-root rule is the one the field section already warns about. Here each is worked through in full, with the wrong and the right working side by side.`,
      before:``,
      after: `Each slip applies a rule outside the place where it holds. $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ fails for two negative numbers, the inverse divides by $|z|^2$, $z\\bar{z} = a^2 + b^2$ because $i^2 = -1$, the modulus of a sum is at most the sum of the moduli, and a sum of principal arguments may need $2\\pi$ subtracted. Multiplying back, or locating the product on the plane, catches each slip.`,
      link:'',
    },
  
    faq: {
      title: `Properties of Complex Numbers FAQ`,
    },
  }



  const introContent = {
  id: "intro",
  title: "The Rules Governing Complex Arithmetic",
  content: `Complex numbers obey specific rules that determine how they interact under arithmetic operations. Some of these properties arise from the algebraic structure shared with real numbers, while others are unique to the complex number system. Understanding these properties provides the foundation for manipulating complex expressions, simplifying calculations, and recognizing what complex numbers can and cannot do.`
}

// FAQ pass 2026-10-31: kept the argument and conjugation questions. Cut the
// reverse triangle inequality (h2 "Reverse Triangle Inequality") and what
// complex numbers lack (h2 "What Complex Numbers Lack"). Added Machin's
// formula (fact box under Properties of the Argument), the dictionary order
// (fact box under What Complex Numbers Lack) and the argument of a sum (the
// "no simple rule" cells of the summary table).
const faqQuestions = {
  obj1: {
    question: "How does the argument behave under multiplication and division?",
    answer: "Arguments add when you multiply and subtract when you divide, while the moduli multiply and divide. This is the whole reason polar form makes those operations easy. The sum may leave the principal range, so a full turn is often added or removed afterwards to bring it back.",
    sectionId: "6"
  },
  obj2: {
    question: "Does conjugation distribute over addition and multiplication?",
    answer: "Yes, over both, and over division too. The conjugate of a sum is the sum of the conjugates, and the same holds for products. This is why conjugating an entire polynomial equation with real coefficients leaves the coefficients alone while turning each root into its own conjugate.",
    sectionId: "4"
  },
  obj3: {
    question: "How do complex numbers prove Machin's formula for $\\pi$?",
    answer: "By multiplying, since arguments add. The number $5 + i$ has argument $\\arctan\\frac{1}{5}$ and $239 - i$ has argument $-\\arctan\\frac{1}{239}$, and the product works out to $(5 + i)^4(239 - i) = 114244(1 + i)$. A positive multiple of $1 + i$ has argument $\\frac{\\pi}{4}$, so $4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239} = \\frac{\\pi}{4}$. John Machin used this in 1706 to compute $\\pi$ to 100 decimal places.",
    sectionId: "6"
  },
  obj4: {
    question: "Can complex numbers be sorted in dictionary order?",
    answer: "Yes as a list, but not in a way that respects multiplication. Compare real parts first and break ties with imaginary parts, the way a dictionary sorts words. That order even survives adding the same number to both sides. It fails for products: $i > 0$ in it, since $0 + 1i$ beats $0 + 0i$, yet $i \\cdot i = -1 < 0$, so the product of two positive numbers comes out negative.",
    sectionId: "8"
  },
  obj5: {
    question: "Is the argument of a sum the sum of the arguments?",
    answer: "No, that rule belongs to products. For $1$ and $i$ the arguments are $0$ and $\\frac{\\pi}{2}$; they add to $\\frac{\\pi}{2}$, the argument of the product $i$, while the sum $1 + i$ has argument $\\frac{\\pi}{4}$. The argument of a sum has no simple rule, because it depends on the lengths of the two numbers as well as their angles. Compute the sum first, then read off its argument.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Complex Numbers",
    "description": "Learn properties of complex numbers: field axioms, conjugate properties, modulus and argument rules, triangle inequality, algebraic closure, and why complex numbers cannot be ordered.",
    "url": "https://www.learnmathclass.com/complex-numbers/properties",
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
      "name": "Properties of Complex Numbers"
    },
    "teaches": [
      "Complex numbers as a mathematical field",
      "The eleven field axioms and their verification",
      "Properties of the complex conjugate",
      "Properties of the modulus including triangle inequality",
      "Properties of the argument under arithmetic operations",
      "Algebraic closure and the Fundamental Theorem of Algebra",
      "Why complex numbers cannot be ordered",
      "How conjugate, modulus, and argument transform together under each arithmetic operation"
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
        "name": "Properties",
        "item": "https://www.learnmathclass.com/complex-numbers/properties"
      }
    ]
  }

}


 


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const conceptIntroFigures = {
    systemsTable: ciSystemsTable,
  };

  const demoUnits = {
    modulus: demoUnitFrame({
      svg: conjugateModulusDiagrams.start,
      caption: '|z| = |z&#772;| = 3.6',
      text: 'The modulus is a distance, so it is never negative and it is unchanged by conjugation, as the two equal arrows show; it is zero only for the origin. The multiplicativity |z&#8321;z&#8322;| = |z&#8321;||z&#8322;| is the scaling half of the multiplication picture. Check the properties on a moving point on the',
      href: '/complex-numbers/visual-tools/complex-conjugate',
      linkText: 'conjugate and modulus tool',
    }),
    argument: demoUnitFrame({
      svg: polarRectangularDiagrams.qii,
      caption: 'z = &#8722;4 + 3i: r = 5, argument in the second quadrant',
      text: 'The argument is the angle from the positive real axis to the arrow, here past 90&#176; because the point lies in the second quadrant; a calculator&#8217;s arctan(3/&#8722;4) would report the wrong quadrant, and the picture is the check. Adding 2&#960; to the angle changes nothing about the point. Move the point across a quadrant boundary on the',
      href: '/complex-numbers/visual-tools/polar-rectangular',
      linkText: 'polar and rectangular form converter',
    }),
  };

  const complexPropertyTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'What the complex numbers have, and lack',
    preface: 'The properties of $\\mathbb{C}$ fall into four groups: what it shares with the reals, what is new, what it guarantees, and what it gives up.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'A trade',
    conclusion: '$\\mathbb{C}$ gains roots for every non-constant polynomial and loses any ordering compatible with its arithmetic.',
    root: { name: 'Properties of complex numbers', sub: '4 groups' },
    children: [
      { id: 'field', name: 'Arithmetic', items: [ { label: 'Status', text: 'a field: same field rules as $\\mathbb{R}$ and $\\mathbb{Q}$' } ] },
      { id: 'new', name: '[Conjugate](!/complex-numbers/complex-conjugate), [modulus](!/complex-numbers/absolute-value), argument', items: [ { label: 'Status', text: 'unique to $\\mathbb{C}$' }, { label: 'Meaning', text: 'reflection, distance, direction' } ] },
      { id: 'closure', name: 'Algebraic closure', items: [ { label: 'Status', text: 'every non-constant polynomial has roots in $\\mathbb{C}$' } ] },
      { id: 'order', name: 'Ordering', items: [ { label: 'Status', text: 'no $<$ or $>$ compatible with its arithmetic' } ], flag: true, warn: 'lacking in $\\mathbb{C}$' },
    ],
  };

  // PropertySheet (obj9): complex-operation-properties
  const complexOperationProperties = {
    header: {
      kicker: 'complex numbers',
      title: 'What each operation does to conjugate, modulus and argument',
      lede: 'The conjugate passes through everything; the modulus and the argument each have their own gaps.',
    },
    labels: { property: 'Operation', notCovered: 'no simple rule' },
    verdicts: {
      exact: { label: 'Exact law', color: '#2563EB', bg: '#dbeafe', mark: 'check' },
      bound: { label: 'Bound only', color: '#0284C7', bg: '#e0f2fe', mark: 'dot' },
      mod: { label: 'Up to full turns', color: '#06357A', bg: '#e8eefc', mark: 'half' },
      none: { label: 'No simple rule', color: '#475569', bg: '#e2e8f0', mark: 'cross' },
    },
    subjects: [
      { id: 'conj', label: 'Conjugate' },
      { id: 'mod', label: 'Modulus' },
      { id: 'arg', label: 'Argument' },
    ],
    groups: [{ properties: [
      { id: 'sum', name: 'Sum', note: '$z_1 + z_2$', cells: {
        conj: { verdict: 'exact', text: '$\\bar{z}_1 + \\bar{z}_2$' },
        mod: { verdict: 'bound', text: '$|z_1 + z_2| \\leq |z_1| + |z_2|$',
          detailsLabel: 'Example', details: '$|3 + 4i| = 5$, while $|3| + |4i| = 7$: the triangle inequality is a bound, not an equality.' },
        arg: { verdict: 'none' },
      } },
      { id: 'diff', name: 'Difference', note: '$z_1 - z_2$', cells: {
        conj: { verdict: 'exact', text: '$\\bar{z}_1 - \\bar{z}_2$' },
        mod: { verdict: 'bound', text: '$|z_1 - z_2| \\geq \\big||z_1| - |z_2|\\big|$' },
        arg: { verdict: 'none' },
      } },
      { id: 'prod', name: 'Product', note: '$z_1 z_2$', cells: {
        conj: { verdict: 'exact', text: '$\\bar{z}_1 \\, \\bar{z}_2$' },
        mod: { verdict: 'exact', text: '$|z_1|\\,|z_2|$' },
        arg: { verdict: 'mod', text: '$\\arg z_1 + \\arg z_2$',
          detailsLabel: 'Example', details: '$\\text{Arg}(-1) + \\text{Arg}(i) = \\pi + \\frac{\\pi}{2} = \\frac{3\\pi}{2}$, outside $(-\\pi, \\pi]$; subtracting $2\\pi$ gives $\\text{Arg}(-i) = -\\frac{\\pi}{2}$.' },
      } },
      { id: 'quot', name: 'Quotient', note: '$z_1 / z_2$', cells: {
        conj: { verdict: 'exact', text: '$\\bar{z}_1 / \\bar{z}_2$' },
        mod: { verdict: 'exact', text: '$|z_1| / |z_2|$' },
        arg: { verdict: 'mod', text: '$\\arg z_1 - \\arg z_2$' },
      } },
      { id: 'pow', name: 'Power', note: '$z^n$', cells: {
        conj: { verdict: 'exact', text: '$(\\bar{z})^n$' },
        mod: { verdict: 'exact', text: '$|z|^n$' },
        arg: { verdict: 'mod', text: '$n \\arg z$ (De Moivre)' },
      } },
      { id: 'conjop', name: 'Conjugation', note: '$\\bar{z}$', cells: {
        conj: { verdict: 'exact', text: '$z$ (conjugating twice)' },
        mod: { verdict: 'exact', text: '$|z|$, unchanged' },
        arg: { verdict: 'mod', text: '$-\\arg z$' },
      } },
    ] }],
    footnote: 'Argument laws hold modulo $2\\pi$; with the principal value $\\text{Arg}$, a result may need $2\\pi$ added or subtracted to stay in $(-\\pi, \\pi]$.',
  };

  // MistakeFix batch 12, 2026-11-03: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj16 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'multiplying-square-roots-of-negative-numbers', name: `Multiplying square roots of negative numbers`, errorAt: 0,
        what: `The real rule $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ is carried over to negative numbers, whose square roots are imaginary. The two minus signs under the roots are multiplied away before the roots are taken.`,
        wrong: [`$\\sqrt{-4} \\cdot \\sqrt{-9} = \\sqrt{(-4)(-9)} = \\sqrt{36} = 6$.`],
        right: [`Take each root first, $\\sqrt{-4} = 2i$ and $\\sqrt{-9} = 3i$, then multiply: $2i \\cdot 3i = 6i^2 = -6$.`],
        why: `The rule holds for every pair of non-negative reals, so it feels like a general rule of arithmetic. It depends on real square roots and is not one of the field axioms.`,
        check: `Write every square root of a negative number as a multiple of $i$ before doing anything else; the factor $i \\cdot i = -1$ then appears on its own.` },
      { id: 'dividing-by-the-modulus-instead-of-its-square', name: `Dividing by the modulus instead of its square`, errorAt: 1,
        what: `The inverse formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ is copied with $|z|$ in the denominator instead of $|z|^2$.`,
        wrong: [`For $z = 1 + i$, $|z| = \\sqrt{2}$,`, `So $z^{-1} = \\frac{1 - i}{\\sqrt{2}}$. Then $(1 + i) \\cdot \\frac{1 - i}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$.`],
        right: [`For $z = 1 + i$, $|z| = \\sqrt{2}$,`, `$|z|^2 = 1^2 + 1^2 = 2$, so $z^{-1} = \\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$. Check: $(1 + i) \\cdot \\frac{1 - i}{2} = \\frac{1 - i^2}{2} = \\frac{2}{2} = 1$.`],
        why: `The modulus and its square look alike, and dividing $z$ by $|z|$ is a familiar step, the one that gives a number of length $1$ in the same direction.`,
        check: `Multiply $z$ by the proposed inverse. The product must be exactly $1$; a result equal to $|z|$, here $\\sqrt{2}$, shows that one factor of $|z|$ is missing.` },
      { id: 'forgetting-that-i-squared-is-1', name: `Forgetting that i squared is −1`, errorAt: 0,
        what: `In $z \\cdot \\overline{z} = (a + bi)(a - bi)$, the difference-of-squares pattern gives $a^2 - (bi)^2$, and $(bi)^2$ is then taken to be $b^2$.`,
        wrong: [`$(2 + 3i)(2 - 3i) = 4 - 9 = -5$.`],
        right: [`$(2 + 3i)(2 - 3i) = 4 - (3i)^2 = 4 - 9i^2 = 4 + 9 = 13$. Since $|2 + 3i| = \\sqrt{4 + 9} = \\sqrt{13}$, this is $|2 + 3i|^2 = 13$, as the identity requires.`],
        why: `The real pattern $(x + y)(x - y) = x^2 - y^2$ is applied with $y = 3$ instead of $y = 3i$.`,
        check: `$z \\cdot \\overline{z}$ is never negative. A negative result such as $-5$ shows the slip at once; the answer must equal $a^2 + b^2$.` },
      { id: 'adding-the-moduli-of-a-sum', name: `Adding the moduli of a sum`, errorAt: 0,
        what: `The modulus of a sum is replaced by the sum of the moduli, as if the triangle inequality were an equation. It only says that $|z_1 + z_2|$ is at most $|z_1| + |z_2|$.`,
        wrong: [`$|3 + 4i| = |3| + |4i| = 3 + 4 = 7$.`],
        right: [`$|3 + 4i| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. The sum of the moduli, $7$, is only an upper bound.`],
        why: `The conjugate passes through sums and the modulus passes through products, so it is tempting to expect the modulus to pass through sums as well.`,
        check: `Picture the two numbers as arrows. Unless they point in the same direction, the arrow of the sum is shorter than the two arrows laid end to end. Here $3$ points right and $4i$ points up, so the result must be less than $7$.` },
      { id: 'leaving-the-sum-outside-the-principal-range', name: `Leaving the sum outside the principal range`, errorAt: 0,
        what: `The rule $\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2)$ is applied to principal arguments, and the sum is reported as the principal argument of the product even when it falls outside the interval $(-\\pi, \\pi]$.`,
        wrong: [`$\\text{Arg}(-1) = \\pi$ and $\\text{Arg}(i) = \\frac{\\pi}{2}$, so $\\text{Arg}((-1) \\cdot i) = \\frac{3\\pi}{2}$.`],
        right: [`The sum $\\frac{3\\pi}{2}$ is a valid argument of $-i$, but it lies outside $(-\\pi, \\pi]$. Subtracting $2\\pi$ gives $\\text{Arg}(-i) = \\frac{3\\pi}{2} - 2\\pi = -\\frac{\\pi}{2}$.`],
        why: `The rule holds for $\\arg$, which allows any multiple of $2\\pi$, while $\\text{Arg}$ must land in one fixed interval.`,
        check: `Compute the product, here $-i$, and locate it. It lies on the negative imaginary axis, where the principal argument is $-\\frac{\\pi}{2}$.` },
    ],
  };

  return {
  props:{
    pitfallData,
    complexOperationProperties,
    complexPropertyTree,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj3Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Properties of Complex Numbers: Field Axioms | Learn Math Class",
      description: "Learn properties of complex numbers: field axioms, conjugate properties, modulus and argument rules, triangle inequality, algebraic closure, and why complex numbers cannot be ordered.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/properties",
      name: "Properties of Complex Numbers"
    },
  }
}
   }


export default function PropertiesPage({ pitfallData,complexOperationProperties, complexPropertyTree, 
  seoData,
  sectionsContent,
  introContent,
  obj3Table,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 2 concept introduction — template G (exclusion).
  const conceptIntro = {
    beats: [
      {
        id: 'candidates',
        lead: `Five number systems. In which of them can you add, subtract, multiply and divide without ever leaving the system?`,
        content: [
          `Addition and multiplication never cause trouble in any of them. Subtraction and division are the real test.`,
        ],
      },
      {
        id: 'sort',
        kind: 'instance',
        lead: `Three of the five pass every test.`,
        content: [
          ciTable('systemsTable'),
        ],
      },
      {
        id: 'fault',
        kind: 'instance',
        tone: 'break',
        lead: `The natural numbers fail at subtraction and the integers at division; ℚ, ℝ and ℂ never fail.`,
        content: [
          `$2 - 5 = -3$ is not a natural number, and $1 \\div 2 = \\frac{1}{2}$ is not an integer. In the last three systems every such result stays inside.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A **field** is a set with addition and multiplication satisfying the field axioms, so that adding, subtracting, multiplying, and dividing by anything nonzero always give a result in the set.`,
        formula: [
          `In abstract algebra, a field is a set equipped with two operations — addition and multiplication — that satisfy a specific collection of axioms. These axioms guarantee predictable arithmetic: you can add, subtract, multiply, and divide (except by zero) and always obtain a result within the same set.`,
          `The field axioms divide into several groups:`,
          `• **Closure:** Operations keep you inside the set`,
          `• **Commutativity:** Order of operands does not matter`,
          `• **Associativity:** Grouping of operands does not matter`,
          `• **Identity elements:** Zero for addition, one for multiplication`,
          `• **Inverse elements:** Every number has a negative; every nonzero number has a reciprocal`,
          `• **Distributivity:** Multiplication distributes over addition`,
        ],
        footer: `So $\\mathbb{Q}$, $\\mathbb{R}$ and $\\mathbb{C}$ are fields, while $\\mathbb{N}$ and $\\mathbb{Z}$ are not.`,
      },
      {
        id: 'kind',
        lead: `Being a field is what lets ordinary algebra carry over to complex numbers.`,
        content: [
          `The rational numbers $\\mathbb{Q}$ form a field. So do the real numbers $\\mathbb{R}$. The complex numbers $\\mathbb{C}$ extend this pattern — they too satisfy every field axiom.`,
          `Why does this matter? Because field structure ensures that algebraic techniques transfer seamlessly. Factoring, expanding, simplifying, solving equations — all the methods that rely only on the field rules work identically for complex numbers. Rules that depend on order or on real square roots, such as $x^2 \\geq 0$ or $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$, do not carry over.`,
          `@academic[punchline:Whatever follows from the field rules alone holds in $\\mathbb{C}$; rules that need order or real square roots must be checked again.]@`,
        ],
      },
      {
        id: 'caveat',
        lead: `A field need not have an order.`,
        content: [
          `$\\mathbb{C}$ satisfies every field axiom, yet it cannot be ordered in a way that respects its arithmetic; that is taken up in [what complex numbers lack](!/complex-numbers/properties#8).`,
          `The next section lists these axioms precisely and confirms that $\\mathbb{C}$ satisfies each one.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers the field axioms, the properties of the conjugate, modulus and argument, algebraic closure, what complex numbers lack, a summary and common pitfalls.`,
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
            id="complex-properties-tree"
            title="Properties of complex numbers"
            source="/complex-numbers/properties"
          >
            <TopDownTree data={complexPropertyTree} />
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
                  <div key={'unit-modulus'} dangerouslySetInnerHTML={{ __html: demoUnits.modulus }} />,
          `Each property of the modulus is a statement about lengths in the plane.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-argument'} dangerouslySetInnerHTML={{ __html: demoUnits.argument }} />,
          `The argument of a product is the sum of the arguments, which is the rotation rule of multiplication.`,
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
          `The same table as a grid of verdicts. Each cell shows whether the operation passes through as an exact law, gives only a bound, holds only up to a multiple of $2\\pi$, or has no simple rule. Click an operation or a column to focus on it.`,
          <DiagramFrame
            key={'obj9-propsheet'}
            id="complex-operation-properties"
            title="What each operation does to conjugate, modulus and argument"
            source="/complex-numbers/properties"
          >
            <PropertySheet data={complexOperationProperties} />
          </DiagramFrame>,
          `Read down the columns and the three sections above line up. The conjugate passes through every operation. The modulus turns products, quotients and powers into the same operations on lengths, but a sum gives only the [triangle inequality](!#5). The argument turns multiplication into addition, which is what makes [De Moivre's theorem](!/complex-numbers/demoivre-theorem) work, and has nothing simple to say about sums.`,
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
            id="complex-property-pitfalls"
            title="Common pitfalls with the properties of complex numbers"
            source="/complex-numbers/properties"
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Numbers Properties</h1>
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