// // tables-optimized: v4 | 2026-05-18 | 3 tables (obj3 aggregation, obj5 aggregation, obj10 summary capstone)
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){
// const keyWords = [
//   "characteristic equation",
//   "characteristic polynomial",
//   "eigenvalue equation",
//   "det(A - λI) = 0",
//   "find eigenvalues",
//   "characteristic polynomial calculator",
//   "algebraic multiplicity",
//   "Cayley-Hamilton theorem",
//   "eigenvalue polynomial",
//   "2x2 characteristic polynomial",
//   "3x3 characteristic polynomial",
//   "similar matrices eigenvalues",
//   "characteristic equation example",
//   "matrix eigenvalue formula"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj3 — aggregation: 2×2 discriminant trichotomy
// const obj3Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Discriminant Δ = tr(A)² − 4·det(A)</th>
//       <th style="${tableHeaders.aggregation}">Eigenvalue type</th>
//       <th style="${tableHeaders.aggregation}">Independent real eigenvectors</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Δ &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two distinct real eigenvalues</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 — always <a href="/linear-algebra/eigen/diagonalization" style="${linkStyle}">diagonalizable</a></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Δ = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one repeated real eigenvalue</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 or 2 — diagonalizable only when A = λ · I (otherwise defective)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Δ &lt; 0</td>
//       <td style="padding: 12px 15px; color: #34495e;"><a href="/linear-algebra/eigen/complex" style="${linkStyle}">complex</a> conjugate pair a ± bi</td>
//       <td style="padding: 12px 15px; color: #34495e;">0 real (one conjugate pair of complex eigenvectors over ℂ)</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj5 — aggregation: eigenvalue computation by matrix structure
// const obj5Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Matrix structure</th>
//       <th style="${tableHeaders.aggregation}">How to find the eigenvalues</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Diagonal</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues are the diagonal entries — read off by inspection</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Triangular (upper or lower)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues are the diagonal entries (det of a triangular matrix is the product of its diagonal)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Block triangular</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply the characteristic polynomials of each diagonal block; eigenvalues are the union of block eigenvalues</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General 2×2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quadratic formula on λ² − tr(A)·λ + det(A) = 0</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General 3×3 or 4×4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expand det(A − λI) and factor (rational-root testing, cubic/quartic formulas, or inspection)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">General n ≥ 5 (numerical)</td>
//       <td style="padding: 12px 15px; color: #34495e;">iterative algorithms such as <a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR iteration</a> — the polynomial is never formed explicitly</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj10 — summary capstone: characteristic polynomial structure at a glance
// const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Aspect of p(λ) = det(A − λI), for n × n A</th>
//       <th style="${tableHeaders.summary}">Statement</th>
//       <th style="${tableHeaders.summary}">Connection</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Degree</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">deg p = n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matches the matrix size</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Leading term</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−1)<sup>n</sup> λ<sup>n</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign alternates with n; sometimes flipped to make it monic</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Coefficient of λ<sup>n−1</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−1)<sup>n−1</sup> · tr(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum of eigenvalues equals tr(A)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant term p(0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product of eigenvalues equals det(A); A invertible ⟺ p(0) ≠ 0</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Roots</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the n eigenvalues with algebraic multiplicity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">spectral characterization of A</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Similarity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">similar matrices share p(λ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p is a basis-independent invariant of the transformation</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cayley-Hamilton</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p(A) = O (zero matrix)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>−1</sup> and high powers A<sup>k</sup> become polynomials in A of degree ≤ n − 1</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">2×2 form</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p(λ) = λ² − tr(A) · λ + det(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">discriminant Δ = tr² − 4·det classifies eigenvalue type</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">3×3 form</td>
//       <td style="padding: 12px 15px; color: #34495e;">p(λ) = −λ³ + tr(A) · λ² − M₂ · λ + det(A)</td>
//       <td style="padding: 12px 15px; color: #34495e;">M₂ is the sum of 2×2 principal minors</td>
//     </tr>
//   </tbody>
// </table>
// `


// //   const sectionsContent = {
// //   obj1: {
// //     title: `From Eigenvectors to the Determinant Condition`,
// //     content: `The equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ rearranges to $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. This is a [homogeneous system](!/linear-algebra/linear-systems/homogeneous), and eigenvectors are its nontrivial solutions. Nontrivial solutions exist if and only if the coefficient matrix $A - \\lambda I$ is singular:

// // $$\\det(A - \\lambda I) = 0$$

// // This is the characteristic equation. It holds for exactly those values of $\\lambda$ that are eigenvalues of $A$. Every other value of $\\lambda$ makes $A - \\lambda I$ [invertible](!/linear-algebra/matrix/inverse), the system has only the trivial solution, and no eigenvector exists for that $\\lambda$.

// // The characteristic equation transforms the geometric question "which directions does $A$ preserve?" into the algebraic question "for which $\\lambda$ is this [determinant](!/linear-algebra/determinants) zero?"`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Characteristic Polynomial`,
// //     content: `The expression $p(\\lambda) = \\det(A - \\lambda I)$ is a polynomial of degree $n$ in the variable $\\lambda$. It is called the characteristic polynomial of $A$.

// // For an $n \\times n$ matrix, $p(\\lambda)$ has degree $n$ with leading term $(-1)^n \\lambda^n$. The constant term is $p(0) = \\det(A)$ — the determinant of the matrix itself. The coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\text{tr}(A)$, connecting the next-to-leading term to the [trace](!/linear-algebra/matrix/trace).

// // The eigenvalues are precisely the roots of $p(\\lambda) = 0$. Every root is an eigenvalue, and every eigenvalue is a root. The characteristic polynomial packages the entire eigenvalue structure of the matrix into a single algebraic expression.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Computing the Characteristic Polynomial: 2×2`,
// //     content: `For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the characteristic polynomial is

// // $$p(\\lambda) = \\det\\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix} = (a - \\lambda)(d - \\lambda) - bc = \\lambda^2 - (a + d)\\lambda + (ad - bc)$$

// // This is $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A)$. The eigenvalues follow from the quadratic formula:

// // $$\\lambda = \\frac{\\text{tr}(A) \\pm \\sqrt{\\text{tr}(A)^2 - 4\\det(A)}}{2}$$

// // The discriminant $\\Delta = \\text{tr}(A)^2 - 4\\det(A)$ classifies the eigenvalue type. When $\\Delta > 0$, there are two distinct real eigenvalues. When $\\Delta = 0$, there is one repeated real eigenvalue. When $\\Delta < 0$, the eigenvalues are a [complex](!/linear-algebra/eigen/complex) conjugate pair.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$: $\\text{tr}(A) = 9$, $\\det(A) = 14$, $\\Delta = 81 - 56 = 25$. The eigenvalues are $\\lambda = \\frac{9 \\pm 5}{2}$, giving $\\lambda_1 = 7$ and $\\lambda_2 = 2$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Computing the Characteristic Polynomial: 3×3`,
// //     content: `For a $3 \\times 3$ matrix, expanding $\\det(A - \\lambda I)$ using [cofactor](!/linear-algebra/determinants/cofactors) expansion produces a cubic polynomial:

// // $$p(\\lambda) = -\\lambda^3 + \\text{tr}(A)\\lambda^2 - (\\text{sum of } 2 \\times 2 \\text{ principal minors})\\lambda + \\det(A)$$

// // The computation is lengthier but follows the same cofactor mechanics as any $3 \\times 3$ determinant.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$, this is upper [triangular](!/linear-algebra/matrix/types), so $A - \\lambda I$ is also upper triangular with diagonal entries $2 - \\lambda$, $3 - \\lambda$, $1 - \\lambda$:

// // $$p(\\lambda) = (2 - \\lambda)(3 - \\lambda)(1 - \\lambda)$$

// // The eigenvalues are $\\lambda = 1, 2, 3$ — readable directly from the diagonal. For triangular matrices, the characteristic polynomial always factors as the product of the diagonal terms, making the eigenvalues visible by inspection.

// // For non-triangular $3 \\times 3$ matrices, the cubic must be factored by finding rational roots (testing factors of the constant term), by inspection, or by the cubic formula.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Larger Matrices`,
// //     content: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, and finding its roots becomes increasingly difficult as $n$ grows. There is no general closed-form formula for roots of polynomials of degree $5$ or higher (Abel-Ruffini theorem), so explicit factoring is limited to small matrices or matrices with special structure.

// // [Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices are immediate: the eigenvalues are the diagonal entries. Block triangular matrices factor block by block: the characteristic polynomial is the product of the characteristic polynomials of the diagonal blocks.

// // For general large matrices, eigenvalues are computed numerically by iterative algorithms — most importantly the QR algorithm, which repeatedly applies [QR decompositions](!/linear-algebra/decompositions/qr) to converge on the eigenvalues without ever forming the characteristic polynomial explicitly. Computing the polynomial and then finding its roots is numerically unstable for large $n$ and is never used in practice.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Algebraic Multiplicity`,
// //     content: `If $\\lambda_0$ is a root of the characteristic polynomial $p(\\lambda)$, its algebraic multiplicity is the largest power $k$ such that $(\\lambda - \\lambda_0)^k$ divides $p(\\lambda)$. Equivalently, it is the multiplicity of $\\lambda_0$ as a root.

// // If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$. The algebraic multiplicities of all eigenvalues sum to $n$ — the degree of the polynomial — when complex roots are included.

// // The algebraic multiplicity is an upper bound for the geometric multiplicity: $1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$. The geometric multiplicity is the dimension of the eigenspace, and it can be strictly smaller than the algebraic multiplicity. When this gap occurs for any eigenvalue, the matrix is not [diagonalizable](!/linear-algebra/eigen/diagonalization).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Finding Eigenvectors After Finding Eigenvalues`,
// //     content: `Once the eigenvalues are known, the eigenvectors for each $\\lambda_i$ are found by solving the homogeneous system $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$.

// // Row reduce $A - \\lambda_i I$ and express the general solution in parametric form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for the eigenspace $E_{\\lambda_i}$.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$. Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = -1$.

// // For $\\lambda_1 = 5$: $A - 5I = \\begin{pmatrix} -4 & 2 \\\\ 4 & -2 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & -1/2 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = t/2$. Eigenvector: $\\mathbf{v}_1 = (1, 2)^T$.

// // For $\\lambda_2 = -1$: $A + I = \\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = -t$. Eigenvector: $\\mathbf{v}_2 = (-1, 1)^T$.

// // Verification: $A\\mathbf{v}_1 = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = 5\\mathbf{v}_1$ and $A\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = -1 \\cdot \\mathbf{v}_2$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `The Cayley-Hamilton Theorem`,
// //     content: `Every square matrix satisfies its own characteristic polynomial. If $p(\\lambda) = \\det(A - \\lambda I)$ is the characteristic polynomial, then

// // $$p(A) = 0$$

// // where $0$ is the zero matrix and $\\lambda$ is replaced by $A$ (with constant terms multiplied by $I$).

// // For example, if $p(\\lambda) = \\lambda^2 - 5\\lambda + 6$, then $A^2 - 5A + 6I = O$. This can be rearranged to express $A^{-1}$ as a polynomial in $A$: $A^{-1} = \\frac{1}{6}(5I - A)$ (provided $\\det(A) = 6 \\neq 0$). More generally, the Cayley-Hamilton theorem guarantees that $A^{-1}$ can always be written as a polynomial in $A$ of degree at most $n - 1$.

// // The theorem also shows that any power $A^k$ with $k \\geq n$ can be reduced to a polynomial in $A$ of degree at most $n - 1$ — the characteristic polynomial provides a recurrence that expresses higher powers in terms of lower ones.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Characteristic Polynomial and Similarity`,
// //     content: `[Similar](!/linear-algebra/transformations/basis-change) matrices have the same characteristic polynomial:

// // $$\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$$

// // The second equality uses the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$, since $\\det(P^{-1})\\det(P) = 1$.

// // This means the characteristic polynomial is a property of the linear transformation itself, not of any particular matrix representation. Changing the basis changes the matrix but not the polynomial. Since the eigenvalues are the roots of the polynomial, similar matrices have the same eigenvalues with the same algebraic multiplicities.

// // The [trace](!/linear-algebra/matrix/trace) and [determinant](!/linear-algebra/determinants) are just two of the $n$ coefficients of the characteristic polynomial. The polynomial carries more information than either one alone — it determines the complete multiset of eigenvalues, not just their sum and product.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Summary: The Characteristic Polynomial at a Glance`,
// //     content: `The characteristic polynomial p(λ) = det(A − λI) carries every spectral fact about A — its degree, individual coefficients, roots, and behavior under similarity all encode information about the matrix. The table below collects each structural property of the polynomial alongside its statement and the connection it makes to A.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }


// // formulas-injected: v1 | 2026-06-16 | 4 callouts (obj1 characteristic_equation direct, obj2 characteristic_polynomial inline-promote, obj3 characteristic_polynomial_2x2 inline-promote, obj8 cayley_hamilton direct)

// const sectionsContent = {
//   obj1: {
//     title: `From Eigenvectors to the Determinant Condition`,
//     content: `The equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ rearranges to $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. This is a [homogeneous system](!/linear-algebra/linear-systems/homogeneous), and eigenvectors are its nontrivial solutions. Nontrivial solutions exist if and only if the coefficient matrix $A - \\lambda I$ is singular:

// @academic[formula_callout:characteristic_equation|Characteristic Equation|$$\\det(A - \\lambda I) = 0$$]@
// @academic[formulas_link:/linear-algebra/formulas#characteristic_equation]@

// This is the characteristic equation. It holds for exactly those values of $\\lambda$ that are eigenvalues of $A$. Every other value of $\\lambda$ makes $A - \\lambda I$ [invertible](!/linear-algebra/matrix/inverse), the system has only the trivial solution, and no eigenvector exists for that $\\lambda$.

// The characteristic equation transforms the geometric question "which directions does $A$ preserve?" into the algebraic question "for which $\\lambda$ is this [determinant](!/linear-algebra/determinants) zero?"`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Characteristic Polynomial`,
//     content: `The characteristic polynomial of $A$ is the determinant of $A - \\lambda I$ viewed as a function of $\\lambda$:

// @academic[formula_callout:characteristic_polynomial|Characteristic Polynomial|$$p(\\lambda) = \\det(A - \\lambda I)$$]@
// @academic[formulas_link:/linear-algebra/formulas#characteristic_polynomial]@

// It is a polynomial of degree $n$ in the variable $\\lambda$.

// For an $n \\times n$ matrix, $p(\\lambda)$ has degree $n$ with leading term $(-1)^n \\lambda^n$. The constant term is $p(0) = \\det(A)$ — the determinant of the matrix itself. The coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\text{tr}(A)$, connecting the next-to-leading term to the [trace](!/linear-algebra/matrix/trace).

// The eigenvalues are precisely the roots of $p(\\lambda) = 0$. Every root is an eigenvalue, and every eigenvalue is a root. The characteristic polynomial packages the entire eigenvalue structure of the matrix into a single algebraic expression.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Computing the Characteristic Polynomial: 2×2`,
//     content: `For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the characteristic polynomial is

// $$p(\\lambda) = \\det\\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix} = (a - \\lambda)(d - \\lambda) - bc = \\lambda^2 - (a + d)\\lambda + (ad - bc)$$

// Rewritten in terms of trace and determinant:

// @academic[formula_callout:characteristic_polynomial_2x2|Characteristic Polynomial 2x2|$$p(\\lambda) = \\lambda^2 - \\text{tr}(A)\\,\\lambda + \\det(A)$$]@
// @academic[formulas_link:/linear-algebra/formulas#characteristic_polynomial_2x2]@

// The eigenvalues follow from the quadratic formula:

// $$\\lambda = \\frac{\\text{tr}(A) \\pm \\sqrt{\\text{tr}(A)^2 - 4\\det(A)}}{2}$$

// The discriminant $\\Delta = \\text{tr}(A)^2 - 4\\det(A)$ classifies the eigenvalue type. When $\\Delta > 0$, there are two distinct real eigenvalues. When $\\Delta = 0$, there is one repeated real eigenvalue. When $\\Delta < 0$, the eigenvalues are a [complex](!/linear-algebra/eigen/complex) conjugate pair.

// ## Worked Example

// For $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$: $\\text{tr}(A) = 9$, $\\det(A) = 14$, $\\Delta = 81 - 56 = 25$. The eigenvalues are $\\lambda = \\frac{9 \\pm 5}{2}$, giving $\\lambda_1 = 7$ and $\\lambda_2 = 2$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Computing the Characteristic Polynomial: 3×3`,
//     content: `For a $3 \\times 3$ matrix, expanding $\\det(A - \\lambda I)$ using [cofactor](!/linear-algebra/determinants/cofactors) expansion produces a cubic polynomial:

// $$p(\\lambda) = -\\lambda^3 + \\text{tr}(A)\\lambda^2 - (\\text{sum of } 2 \\times 2 \\text{ principal minors})\\lambda + \\det(A)$$

// The computation is lengthier but follows the same cofactor mechanics as any $3 \\times 3$ determinant.

// ## Worked Example

// For $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$, this is upper [triangular](!/linear-algebra/matrix/types), so $A - \\lambda I$ is also upper triangular with diagonal entries $2 - \\lambda$, $3 - \\lambda$, $1 - \\lambda$:

// $$p(\\lambda) = (2 - \\lambda)(3 - \\lambda)(1 - \\lambda)$$

// The eigenvalues are $\\lambda = 1, 2, 3$ — readable directly from the diagonal. For triangular matrices, the characteristic polynomial always factors as the product of the diagonal terms, making the eigenvalues visible by inspection.

// For non-triangular $3 \\times 3$ matrices, the cubic must be factored by finding rational roots (testing factors of the constant term), by inspection, or by the cubic formula.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Larger Matrices`,
//     content: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, and finding its roots becomes increasingly difficult as $n$ grows. There is no general closed-form formula for roots of polynomials of degree $5$ or higher (Abel-Ruffini theorem), so explicit factoring is limited to small matrices or matrices with special structure.

// [Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices are immediate: the eigenvalues are the diagonal entries. Block triangular matrices factor block by block: the characteristic polynomial is the product of the characteristic polynomials of the diagonal blocks.

// For general large matrices, eigenvalues are computed numerically by iterative algorithms — most importantly the QR algorithm, which repeatedly applies [QR decompositions](!/linear-algebra/decompositions/qr) to converge on the eigenvalues without ever forming the characteristic polynomial explicitly. Computing the polynomial and then finding its roots is numerically unstable for large $n$ and is never used in practice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Algebraic Multiplicity`,
//     content: `If $\\lambda_0$ is a root of the characteristic polynomial $p(\\lambda)$, its algebraic multiplicity is the largest power $k$ such that $(\\lambda - \\lambda_0)^k$ divides $p(\\lambda)$. Equivalently, it is the multiplicity of $\\lambda_0$ as a root.

// If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$. The algebraic multiplicities of all eigenvalues sum to $n$ — the degree of the polynomial — when complex roots are included.

// The algebraic multiplicity is an upper bound for the geometric multiplicity: $1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$. The geometric multiplicity is the dimension of the eigenspace, and it can be strictly smaller than the algebraic multiplicity. When this gap occurs for any eigenvalue, the matrix is not [diagonalizable](!/linear-algebra/eigen/diagonalization).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Finding Eigenvectors After Finding Eigenvalues`,
//     content: `Once the eigenvalues are known, the eigenvectors for each $\\lambda_i$ are found by solving the homogeneous system $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$.

// Row reduce $A - \\lambda_i I$ and express the general solution in parametric form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for the eigenspace $E_{\\lambda_i}$.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$. Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = -1$.

// For $\\lambda_1 = 5$: $A - 5I = \\begin{pmatrix} -4 & 2 \\\\ 4 & -2 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & -1/2 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = t/2$. Eigenvector: $\\mathbf{v}_1 = (1, 2)^T$.

// For $\\lambda_2 = -1$: $A + I = \\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = -t$. Eigenvector: $\\mathbf{v}_2 = (-1, 1)^T$.

// Verification: $A\\mathbf{v}_1 = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = 5\\mathbf{v}_1$ and $A\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = -1 \\cdot \\mathbf{v}_2$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `The Cayley-Hamilton Theorem`,
//     content: `Every square matrix satisfies its own characteristic polynomial. If $p(\\lambda) = \\det(A - \\lambda I)$ is the characteristic polynomial, then

// @academic[formula_callout:cayley_hamilton|Cayley-Hamilton|$$p(A) = O$$]@
// @academic[formulas_link:/linear-algebra/formulas#cayley_hamilton]@

// where $O$ is the zero matrix and $\\lambda$ is replaced by $A$ (with constant terms multiplied by $I$).

// For example, if $p(\\lambda) = \\lambda^2 - 5\\lambda + 6$, then $A^2 - 5A + 6I = O$. This can be rearranged to express $A^{-1}$ as a polynomial in $A$: $A^{-1} = \\frac{1}{6}(5I - A)$ (provided $\\det(A) = 6 \\neq 0$). More generally, the Cayley-Hamilton theorem guarantees that $A^{-1}$ can always be written as a polynomial in $A$ of degree at most $n - 1$.

// The theorem also shows that any power $A^k$ with $k \\geq n$ can be reduced to a polynomial in $A$ of degree at most $n - 1$ — the characteristic polynomial provides a recurrence that expresses higher powers in terms of lower ones.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Characteristic Polynomial and Similarity`,
//     content: `[Similar](!/linear-algebra/transformations/basis-change) matrices have the same characteristic polynomial:

// $$\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$$

// The second equality uses the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$, since $\\det(P^{-1})\\det(P) = 1$.

// This means the characteristic polynomial is a property of the linear transformation itself, not of any particular matrix representation. Changing the basis changes the matrix but not the polynomial. Since the eigenvalues are the roots of the polynomial, similar matrices have the same eigenvalues with the same algebraic multiplicities.

// The [trace](!/linear-algebra/matrix/trace) and [determinant](!/linear-algebra/determinants) are just two of the $n$ coefficients of the characteristic polynomial. The polynomial carries more information than either one alone — it determines the complete multiset of eigenvalues, not just their sum and product.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: The Characteristic Polynomial at a Glance`,
//     content: `The characteristic polynomial p(λ) = det(A − λI) carries every spectral fact about A — its degree, individual coefficients, roots, and behavior under similarity all encode information about the matrix. The table below collects each structural property of the polynomial alongside its statement and the connection it makes to A.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



//  const introContent = {
//    id: "intro",
//   title: `The Polynomial Whose Roots Are the Eigenvalues`,
//   content: `The eigenvalue problem Av = λv converts into a determinant condition: det(A − λI) = 0. This determinant is a polynomial in λ whose roots are the eigenvalues. Computing the characteristic polynomial and factoring it is the standard method for finding eigenvalues of small matrices — and the polynomial's coefficients encode the trace, determinant, and other invariants of the matrix.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is the characteristic equation?",
//     answer: "The characteristic equation is det(A - λI) = 0. It arises from the eigenvector equation Av = λv rewritten as (A - λI)v = 0. Nontrivial solutions exist only when A - λI is singular, which happens when its determinant is zero.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is the characteristic polynomial?",
//     answer: "The characteristic polynomial is p(λ) = det(A - λI), a degree-n polynomial for an n×n matrix. Its roots are the eigenvalues. The constant term is det(A), and the coefficient of λⁿ⁻¹ involves the trace.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do you find the characteristic polynomial of a 2×2 matrix?",
//     answer: "For A = [[a,b],[c,d]]: p(λ) = λ² - tr(A)λ + det(A) = λ² - (a+d)λ + (ad-bc). Use the quadratic formula: λ = (tr(A) ± √(tr(A)² - 4det(A)))/2.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How do you find eigenvalues of a 3×3 matrix?",
//     answer: "Expand det(A - λI) using cofactors to get a cubic polynomial. For triangular matrices, eigenvalues are the diagonal entries. Otherwise, factor the cubic by finding rational roots or using the cubic formula.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "How are eigenvalues found for large matrices?",
//     answer: "For n ≥ 5, no closed-form root formula exists (Abel-Ruffini). Large matrices use iterative algorithms like QR iteration, which converge to eigenvalues without forming the characteristic polynomial—direct polynomial root-finding is numerically unstable.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "What is algebraic multiplicity?",
//     answer: "Algebraic multiplicity is the power k such that (λ - λ₀)ᵏ divides the characteristic polynomial—the multiplicity of λ₀ as a root. It's an upper bound for geometric multiplicity. All algebraic multiplicities sum to n.",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "How do you find eigenvectors after finding eigenvalues?",
//     answer: "For each eigenvalue λᵢ, solve the homogeneous system (A - λᵢI)v = 0. Row reduce A - λᵢI and express the solution in parametric form. Free variables give basis vectors for the eigenspace.",
//     sectionId: "7"
//   },
//   obj8: {
//     question: "What is the Cayley-Hamilton theorem?",
//     answer: "Every matrix satisfies its own characteristic polynomial: p(A) = 0 (zero matrix). This lets you express A⁻¹ as a polynomial in A and reduce high powers Aᵏ to polynomials of degree at most n-1.",
//     sectionId: "8"
//   },
//   obj9: {
//     question: "Do similar matrices have the same characteristic polynomial?",
//     answer: "Yes. det(P⁻¹AP - λI) = det(A - λI) because det(P⁻¹)det(P) = 1. The characteristic polynomial is an invariant of the linear transformation, not the specific matrix representation. Similar matrices share eigenvalues with same multiplicities.",
//     sectionId: "9"
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Characteristic Equation",
//     "description": "Learn the characteristic equation det(A - λI) = 0: characteristic polynomial, 2×2 and 3×3 examples, algebraic multiplicity, Cayley-Hamilton theorem, and similarity invariance.",
//     "url": "https://www.learnmathclass.com/linear-algebra/eigen/characteristic-equation",
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
//       "name": "Characteristic Equation"
//     },
//     "teaches": [
//       "Characteristic equation det(A - λI) = 0",
//       "Characteristic polynomial structure",
//       "2×2 and 3×3 eigenvalue computation",
//       "Algebraic multiplicity of eigenvalues",
//       "Finding eigenvectors from eigenvalues",
//       "Cayley-Hamilton theorem",
//       "Similarity invariance of characteristic polynomial"
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
//         "name": "Linear Algebra",
//         "item": "https://www.learnmathclass.com/linear-algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Eigenvalues & Eigenvectors",
//         "item": "https://www.learnmathclass.com/linear-algebra/eigen"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Characteristic Equation",
//         "item": "https://www.learnmathclass.com/linear-algebra/eigen/characteristic-equation"
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



//    return {
//   props: {
//     sectionsContent,
//     introContent,
//     obj3Table,
//     obj5Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Characteristic Equation: Polynomial & Eigenvalues | Learn Math Class",
//       description: "Learn the characteristic equation det(A - λI) = 0: characteristic polynomial, 2×2 and 3×3 examples, algebraic multiplicity, Cayley-Hamilton theorem, and similarity invariance.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/eigen/characteristic-equation",
//       name: "Characteristic Equation"
//     },
//   }
// }
//    }
// export default function CharacteristicEquationPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj3Table,
//   obj5Table,
//   summaryTable,
//   faqQuestions,
//   schemas,
// }) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
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
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Characteristic Equation</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
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
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj3 aggregation, obj5 aggregation, obj10 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){
const keyWords = [
  "characteristic equation",
  "characteristic polynomial",
  "eigenvalue equation",
  "det(A - λI) = 0",
  "find eigenvalues",
  "characteristic polynomial calculator",
  "algebraic multiplicity",
  "Cayley-Hamilton theorem",
  "eigenvalue polynomial",
  "2x2 characteristic polynomial",
  "3x3 characteristic polynomial",
  "similar matrices eigenvalues",
  "characteristic equation example",
  "matrix eigenvalue formula"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj3 — aggregation: 2×2 discriminant trichotomy
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Discriminant Δ = tr(A)² − 4·det(A)</th>
      <th style="${tableHeaders.aggregation}">Eigenvalue type</th>
      <th style="${tableHeaders.aggregation}">Independent real eigenvectors</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Δ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two distinct real eigenvalues</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 — always <a href="/linear-algebra/eigen/diagonalization" style="${linkStyle}">diagonalizable</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Δ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one repeated real eigenvalue</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 or 2 — diagonalizable only when A = λ · I (otherwise defective)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Δ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;"><a href="/linear-algebra/eigen/complex" style="${linkStyle}">complex</a> conjugate pair a ± bi</td>
      <td style="padding: 12px 15px; color: #34495e;">0 real (one conjugate pair of complex eigenvectors over ℂ)</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation: eigenvalue computation by matrix structure
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Matrix structure</th>
      <th style="${tableHeaders.aggregation}">How to find the eigenvalues</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Diagonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues are the diagonal entries — read off by inspection</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Triangular (upper or lower)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues are the diagonal entries (det of a triangular matrix is the product of its diagonal)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Block triangular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply the characteristic polynomials of each diagonal block; eigenvalues are the union of block eigenvalues</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General 2×2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quadratic formula on λ² − tr(A)·λ + det(A) = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General 3×3 or 4×4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expand det(A − λI) and factor (rational-root testing, cubic/quartic formulas, or inspection)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">General n ≥ 5 (numerical)</td>
      <td style="padding: 12px 15px; color: #34495e;">iterative algorithms such as <a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR iteration</a> — the polynomial is never formed explicitly</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: characteristic polynomial structure at a glance
// obj10 — what the coefficients carry, what the roots carry, and the closed forms
const characteristicPolynomial = {
  kicker: 'Eigen \u00B7 characteristic polynomial',
  title: 'What the polynomial encodes',
  tallyLabel: 'readings',
  intro: 'The roots give the eigenvalues, which is the reason to form it. The coefficients give trace and determinant for free, which is the reason it is worth reading rather than only solving.',
  footnote: 'Every entry is a property of the transformation rather than of the matrix expressing it: similar matrices have the same polynomial, so all of trace, determinant and spectrum survive a change of basis. That invariance is what makes the polynomial a description of the map and not merely of the array.',
  groups: [
    {
      heading: 'What the coefficients carry',
      identities: [
        {
          name: 'Degree and leading term',
          anchor: '#2',
          formula: '$\\deg p = n$, leading term $(-1)^n\\lambda^n$',
          condition: 'the sign alternates with $n$',
          note: 'One root per dimension, counted with multiplicity, over $\\mathbb{C}$. Some texts negate the whole polynomial to make it monic \u2014 harmless, but it flips the sign of every coefficient below, so the convention has to be fixed before the formulas are quoted.',
        },
        {
          name: 'Coefficient of $\\lambda^{n-1}$',
          anchor: '#2',
          formula: '$\\sum \\lambda_i = \\operatorname{tr}(A)$',
          condition: 'with algebraic multiplicity',
          note: 'The [trace](!/linear-algebra/matrix/trace) is available without solving anything \u2014 it is the sum of the diagonal, and the polynomial says that sum is also the sum of the roots. A cheap consistency check on any eigenvalue computation.',
        },
        {
          name: 'Constant term',
          anchor: '#2',
          formula: '$p(0) = \\det(A) = \\prod \\lambda_i$',
          condition: 'always',
          key: true,
          note: 'Setting $\\lambda = 0$ in $\\det(A - \\lambda I)$ leaves $\\det(A)$. So $A$ is [invertible](!/linear-algebra/matrix/inverse) exactly when $p(0) \\neq 0$, which is the same as saying no eigenvalue is zero \u2014 three statements that turn out to be one.',
        },
      ],
    },
    {
      heading: 'What the roots carry',
      identities: [
        {
          name: 'Roots are the eigenvalues',
          anchor: '#1',
          formula: '$p(\\lambda) = 0 \\iff \\lambda$ is an eigenvalue',
          condition: 'over $\\mathbb{C}$, with multiplicity',
          key: true,
          note: 'The determinant condition is what turns &quot;$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution&quot; into an equation that can be solved. Over $\\mathbb{R}$ some roots may not exist \u2014 a rotation has none \u2014 which is why the spectrum is stated over $\\mathbb{C}$.',
        },
        {
          name: 'Algebraic multiplicity',
          anchor: '#6',
          formula: 'multiplicity of $\\lambda$ as a root',
          condition: '$m_g \\leq m_a$, never the reverse',
          strict: true,
          note: 'How many times a root repeats, which is not the same as how many independent eigenvectors it has. When the geometric count falls short the matrix is defective and cannot be [diagonalized](!/linear-algebra/eigen/diagonalization) \u2014 the polynomial cannot detect this on its own.',
        },
        {
          name: 'Similarity invariance',
          anchor: '#9',
          formula: '$p_{P^{-1}AP}(\\lambda) = p_A(\\lambda)$',
          condition: '$P$ invertible',
          note: 'Similar matrices share the polynomial, hence the eigenvalues, trace and determinant. Two matrices with different characteristic polynomials cannot represent the same transformation in different bases \u2014 which makes $p$ a usable test for similarity in one direction.',
        },
      ],
    },
    {
      heading: 'Closed forms and consequences',
      identities: [
        {
          name: '2\u00D72 form',
          anchor: '#3',
          formula: '$p(\\lambda) = \\lambda^2 - \\operatorname{tr}(A)\\lambda + \\det(A)$',
          condition: 'worth memorising',
          note: 'The discriminant $\\operatorname{tr}^2 - 4\\det$ classifies the pair before any solving: positive gives two distinct reals, zero gives a repeated root, negative gives a [complex conjugate](!/linear-algebra/eigen/complex) pair.',
        },
        {
          name: '3\u00D73 form',
          anchor: '#4',
          formula: '$-\\lambda^3 + \\operatorname{tr}(A)\\lambda^2 - M_2\\lambda + \\det(A)$',
          condition: '$M_2$ = sum of principal $2 \\times 2$ minors',
          note: 'The pattern continues: each coefficient is a sum of principal minors of one size. Beyond $3 \\times 3$ the expansion is not worth doing by hand, and numerical work does not compute the polynomial at all.',
        },
        {
          name: 'Cayley\u2013Hamilton',
          anchor: '#8',
          formula: '$p(A) = O$',
          condition: 'every square matrix satisfies its own polynomial',
          key: true,
          note: 'Substituting the matrix into its own characteristic polynomial gives the zero matrix. The practical consequence is that $A^n$ can be rewritten in terms of lower powers, so any power or the inverse is a polynomial in $A$ of degree below $n$.',
        },
      ],
    },
  ],
}


//   const sectionsContent = {
//   obj1: {
//     title: `From Eigenvectors to the Determinant Condition`,
//     content: `The equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ rearranges to $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. This is a [homogeneous system](!/linear-algebra/linear-systems/homogeneous), and eigenvectors are its nontrivial solutions. Nontrivial solutions exist if and only if the coefficient matrix $A - \\lambda I$ is singular:

// $$\\det(A - \\lambda I) = 0$$

// This is the characteristic equation. It holds for exactly those values of $\\lambda$ that are eigenvalues of $A$. Every other value of $\\lambda$ makes $A - \\lambda I$ [invertible](!/linear-algebra/matrix/inverse), the system has only the trivial solution, and no eigenvector exists for that $\\lambda$.

// The characteristic equation transforms the geometric question "which directions does $A$ preserve?" into the algebraic question "for which $\\lambda$ is this [determinant](!/linear-algebra/determinants) zero?"`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Characteristic Polynomial`,
//     content: `The expression $p(\\lambda) = \\det(A - \\lambda I)$ is a polynomial of degree $n$ in the variable $\\lambda$. It is called the characteristic polynomial of $A$.

// For an $n \\times n$ matrix, $p(\\lambda)$ has degree $n$ with leading term $(-1)^n \\lambda^n$. The constant term is $p(0) = \\det(A)$ — the determinant of the matrix itself. The coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\text{tr}(A)$, connecting the next-to-leading term to the [trace](!/linear-algebra/matrix/trace).

// The eigenvalues are precisely the roots of $p(\\lambda) = 0$. Every root is an eigenvalue, and every eigenvalue is a root. The characteristic polynomial packages the entire eigenvalue structure of the matrix into a single algebraic expression.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Computing the Characteristic Polynomial: 2×2`,
//     content: `For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the characteristic polynomial is

// $$p(\\lambda) = \\det\\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix} = (a - \\lambda)(d - \\lambda) - bc = \\lambda^2 - (a + d)\\lambda + (ad - bc)$$

// This is $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A)$. The eigenvalues follow from the quadratic formula:

// $$\\lambda = \\frac{\\text{tr}(A) \\pm \\sqrt{\\text{tr}(A)^2 - 4\\det(A)}}{2}$$

// The discriminant $\\Delta = \\text{tr}(A)^2 - 4\\det(A)$ classifies the eigenvalue type. When $\\Delta > 0$, there are two distinct real eigenvalues. When $\\Delta = 0$, there is one repeated real eigenvalue. When $\\Delta < 0$, the eigenvalues are a [complex](!/linear-algebra/eigen/complex) conjugate pair.

// ## Worked Example

// For $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$: $\\text{tr}(A) = 9$, $\\det(A) = 14$, $\\Delta = 81 - 56 = 25$. The eigenvalues are $\\lambda = \\frac{9 \\pm 5}{2}$, giving $\\lambda_1 = 7$ and $\\lambda_2 = 2$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Computing the Characteristic Polynomial: 3×3`,
//     content: `For a $3 \\times 3$ matrix, expanding $\\det(A - \\lambda I)$ using [cofactor](!/linear-algebra/determinants/cofactors) expansion produces a cubic polynomial:

// $$p(\\lambda) = -\\lambda^3 + \\text{tr}(A)\\lambda^2 - (\\text{sum of } 2 \\times 2 \\text{ principal minors})\\lambda + \\det(A)$$

// The computation is lengthier but follows the same cofactor mechanics as any $3 \\times 3$ determinant.

// ## Worked Example

// For $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$, this is upper [triangular](!/linear-algebra/matrix/types), so $A - \\lambda I$ is also upper triangular with diagonal entries $2 - \\lambda$, $3 - \\lambda$, $1 - \\lambda$:

// $$p(\\lambda) = (2 - \\lambda)(3 - \\lambda)(1 - \\lambda)$$

// The eigenvalues are $\\lambda = 1, 2, 3$ — readable directly from the diagonal. For triangular matrices, the characteristic polynomial always factors as the product of the diagonal terms, making the eigenvalues visible by inspection.

// For non-triangular $3 \\times 3$ matrices, the cubic must be factored by finding rational roots (testing factors of the constant term), by inspection, or by the cubic formula.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Larger Matrices`,
//     content: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, and finding its roots becomes increasingly difficult as $n$ grows. There is no general closed-form formula for roots of polynomials of degree $5$ or higher (Abel-Ruffini theorem), so explicit factoring is limited to small matrices or matrices with special structure.

// [Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices are immediate: the eigenvalues are the diagonal entries. Block triangular matrices factor block by block: the characteristic polynomial is the product of the characteristic polynomials of the diagonal blocks.

// For general large matrices, eigenvalues are computed numerically by iterative algorithms — most importantly the QR algorithm, which repeatedly applies [QR decompositions](!/linear-algebra/decompositions/qr) to converge on the eigenvalues without ever forming the characteristic polynomial explicitly. Computing the polynomial and then finding its roots is numerically unstable for large $n$ and is never used in practice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Algebraic Multiplicity`,
//     content: `If $\\lambda_0$ is a root of the characteristic polynomial $p(\\lambda)$, its algebraic multiplicity is the largest power $k$ such that $(\\lambda - \\lambda_0)^k$ divides $p(\\lambda)$. Equivalently, it is the multiplicity of $\\lambda_0$ as a root.

// If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$. The algebraic multiplicities of all eigenvalues sum to $n$ — the degree of the polynomial — when complex roots are included.

// The algebraic multiplicity is an upper bound for the geometric multiplicity: $1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$. The geometric multiplicity is the dimension of the eigenspace, and it can be strictly smaller than the algebraic multiplicity. When this gap occurs for any eigenvalue, the matrix is not [diagonalizable](!/linear-algebra/eigen/diagonalization).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Finding Eigenvectors After Finding Eigenvalues`,
//     content: `Once the eigenvalues are known, the eigenvectors for each $\\lambda_i$ are found by solving the homogeneous system $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$.

// Row reduce $A - \\lambda_i I$ and express the general solution in parametric form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for the eigenspace $E_{\\lambda_i}$.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$. Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = -1$.

// For $\\lambda_1 = 5$: $A - 5I = \\begin{pmatrix} -4 & 2 \\\\ 4 & -2 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & -1/2 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = t/2$. Eigenvector: $\\mathbf{v}_1 = (1, 2)^T$.

// For $\\lambda_2 = -1$: $A + I = \\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = -t$. Eigenvector: $\\mathbf{v}_2 = (-1, 1)^T$.

// Verification: $A\\mathbf{v}_1 = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = 5\\mathbf{v}_1$ and $A\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = -1 \\cdot \\mathbf{v}_2$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `The Cayley-Hamilton Theorem`,
//     content: `Every square matrix satisfies its own characteristic polynomial. If $p(\\lambda) = \\det(A - \\lambda I)$ is the characteristic polynomial, then

// $$p(A) = 0$$

// where $0$ is the zero matrix and $\\lambda$ is replaced by $A$ (with constant terms multiplied by $I$).

// For example, if $p(\\lambda) = \\lambda^2 - 5\\lambda + 6$, then $A^2 - 5A + 6I = O$. This can be rearranged to express $A^{-1}$ as a polynomial in $A$: $A^{-1} = \\frac{1}{6}(5I - A)$ (provided $\\det(A) = 6 \\neq 0$). More generally, the Cayley-Hamilton theorem guarantees that $A^{-1}$ can always be written as a polynomial in $A$ of degree at most $n - 1$.

// The theorem also shows that any power $A^k$ with $k \\geq n$ can be reduced to a polynomial in $A$ of degree at most $n - 1$ — the characteristic polynomial provides a recurrence that expresses higher powers in terms of lower ones.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Characteristic Polynomial and Similarity`,
//     content: `[Similar](!/linear-algebra/transformations/basis-change) matrices have the same characteristic polynomial:

// $$\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$$

// The second equality uses the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$, since $\\det(P^{-1})\\det(P) = 1$.

// This means the characteristic polynomial is a property of the linear transformation itself, not of any particular matrix representation. Changing the basis changes the matrix but not the polynomial. Since the eigenvalues are the roots of the polynomial, similar matrices have the same eigenvalues with the same algebraic multiplicities.

// The [trace](!/linear-algebra/matrix/trace) and [determinant](!/linear-algebra/determinants) are just two of the $n$ coefficients of the characteristic polynomial. The polynomial carries more information than either one alone — it determines the complete multiset of eigenvalues, not just their sum and product.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: The Characteristic Polynomial at a Glance`,
//     content: `The characteristic polynomial p(λ) = det(A − λI) carries every spectral fact about A — its degree, individual coefficients, roots, and behavior under similarity all encode information about the matrix. The table below collects each structural property of the polynomial alongside its statement and the connection it makes to A.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// formulas-injected: v1 | 2026-06-16 | 4 callouts (obj1 characteristic_equation direct, obj2 characteristic_polynomial inline-promote, obj3 characteristic_polynomial_2x2 inline-promote, obj8 cayley_hamilton direct)

const sectionsContent = {
  obj1: {
    title: `From Eigenvectors to the Determinant Condition`,
    content: `The equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ rearranges to $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. This is a [homogeneous system](!/linear-algebra/linear-systems/homogeneous), and eigenvectors are its nontrivial solutions. Nontrivial solutions exist if and only if the coefficient matrix $A - \\lambda I$ is singular:

@academic[formula_callout:characteristic_equation|Characteristic Equation|$$\\det(A - \\lambda I) = 0$$]@
@academic[formulas_link:/linear-algebra/formulas#characteristic_equation]@

This is the characteristic equation. It holds for exactly those values of $\\lambda$ that are eigenvalues of $A$. Every other value of $\\lambda$ makes $A - \\lambda I$ [invertible](!/linear-algebra/matrix/inverse), the system has only the trivial solution, and no eigenvector exists for that $\\lambda$.

The characteristic equation transforms the geometric question "which directions does $A$ preserve?" into the algebraic question "for which $\\lambda$ is this [determinant](!/linear-algebra/determinants) zero?"`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Eigenvalue Notation`,
    lead: `The Greek letter no one dares rename, the identity matrix that must not be dropped, and the subscript that names a space after a number.`,
    inherited: `$\\det$ and its bars — [determinant notation](!/linear-algebra/determinants/properties#notation); $I$ and matrix algebra — [matrix notation](!/linear-algebra/matrix/operations#notation); $\\text{Null}$ — [the four subspaces](!/linear-algebra/vector-spaces/fundamental-spaces#notation).`,
    entries: [
      {
        id: 'lambda-reserved',
        tex: `$A\\mathbf{v} = \\lambda\\mathbf{v}$`,
        read: `A v equals lambda v`,
        means: `$\\lambda$ is the subject's reserved letter — eigenvalues are $\\lambda$ in every textbook on earth, enumerated $\\lambda_1, \\lambda_2, \\ldots$ when there are several. The defining equation reads as a balance: matrix action on the left, plain scaling on the right, same vector both sides.`,
        cases: `The full set of eigenvalues has its own mark in advanced texts: the spectrum $\\sigma(A)$ — a set-valued operator, sibling to $\\text{Col}$ and $\\text{Null}$.`,
        alsoWritten: `$\\mu$ when $\\lambda$ is spoken for, in perturbation and two-matrix arguments; German texts historically used $\\lambda$ from the start — the letter is Hilbert-era and stuck.`,
        confusedWith: `A matrix. $\\lambda$ is a **scalar** — which is exactly why $A - \\lambda$ is illegal and the next entry's $I$ exists.`,
      },
      {
        id: 'lambda-i-object',
        tex: `$\\det(A - \\lambda I) = 0$`,
        read: `The determinant of A minus lambda I, set to zero`,
        means: `The $I$ is load-bearing: a scalar cannot be subtracted from a matrix, so $\\lambda$ must first become $\\lambda I$ — a scaling of the identity. Writing $A - \\lambda$ is the classic species error; the notation $A - \\lambda I$ is its permanent correction. The equation itself is derived in **From Eigenvectors to the Determinant Condition** above.`,
        cases: `Two sign conventions circulate: $\\det(A - \\lambda I)$ — this site's, keeping $A$ first — and $\\det(\\lambda I - A)$, which makes the polynomial monic. They differ by $(-1)^n$; the roots, being what matters, agree.`,
        alsoWritten: `$p(\\lambda)$, or $p_A(\\lambda)$ with the matrix as subscript — the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation) named as a function, per **The Characteristic Polynomial** below.`,
        confusedWith: `An equation to solve for $A$. The unknown is $\\lambda$ — the matrix is data, the scalar is the variable, an inversion of the usual roles that the notation quietly performs.`,
      },
      {
        id: 'eigenspace-subscript',
        tex: `$E_{\\lambda} = \\text{Null}(A - \\lambda I)$`,
        read: `The eigenspace for lambda`,
        means: `A space named after a number: the subscript on $E_{\\lambda}$ is the eigenvalue whose eigenvectors (plus $\\mathbf{0}$) fill it. One subscripted letter per eigenvalue — $E_3$ is the eigenspace for $\\lambda = 3$, not a third eigenspace.`,
        cases: `Each $\\lambda$ carries two counted quantities: algebraic multiplicity — its exponent as a root of $p(\\lambda)$, the [multiplicity notation](!/algebra/polynomials/roots#notation) of polynomials — and geometric multiplicity, $\\dim E_{\\lambda}$. The pair drives **Algebraic Multiplicity** below and the whole of diagonalization.`,
        alsoWritten: `$\\ker(A - \\lambda I)$ — the map-dialect spelling, per [kernel notation](!/linear-algebra/transformations/image-kernel#notation).`,
        confusedWith: `The standard-basis letter. $\\mathbf{e}_i$ is a basis vector, $E_{ij}$ a matrix unit, $E_{\\lambda}$ an eigenspace — one letter, three species, separated by bold, double subscripts, and a Greek subscript respectively.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/eigen`,
    parentLabel: `Eigenvalues and Eigenvectors`,
  },
  obj2: {
    title: `The Characteristic Polynomial`,
    content: `The characteristic polynomial of $A$ is the determinant of $A - \\lambda I$ viewed as a function of $\\lambda$:

@academic[formula_callout:characteristic_polynomial|Characteristic Polynomial|$$p(\\lambda) = \\det(A - \\lambda I)$$]@
@academic[formulas_link:/linear-algebra/formulas#characteristic_polynomial]@

It is a polynomial of degree $n$ in the variable $\\lambda$.

For an $n \\times n$ matrix, $p(\\lambda)$ has degree $n$ with leading term $(-1)^n \\lambda^n$. The constant term is $p(0) = \\det(A)$ — the determinant of the matrix itself. The coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\text{tr}(A)$, connecting the next-to-leading term to the [trace](!/linear-algebra/matrix/trace).

The eigenvalues are precisely the roots of $p(\\lambda) = 0$. Every root is an eigenvalue, and every eigenvalue is a root. The characteristic polynomial packages the entire eigenvalue structure of the matrix into a single algebraic expression.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Computing the Characteristic Polynomial: 2×2`,
    content: `For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the characteristic polynomial is

$$p(\\lambda) = \\det\\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix} = (a - \\lambda)(d - \\lambda) - bc = \\lambda^2 - (a + d)\\lambda + (ad - bc)$$

Rewritten in terms of trace and determinant:

@academic[formula_callout:characteristic_polynomial_2x2|Characteristic Polynomial 2x2|$$p(\\lambda) = \\lambda^2 - \\text{tr}(A)\\,\\lambda + \\det(A)$$]@
@academic[formulas_link:/linear-algebra/formulas#characteristic_polynomial_2x2]@

The eigenvalues follow from the quadratic formula:

$$\\lambda = \\frac{\\text{tr}(A) \\pm \\sqrt{\\text{tr}(A)^2 - 4\\det(A)}}{2}$$

The discriminant $\\Delta = \\text{tr}(A)^2 - 4\\det(A)$ classifies the eigenvalue type. When $\\Delta > 0$, there are two distinct real eigenvalues. When $\\Delta = 0$, there is one repeated real eigenvalue. When $\\Delta < 0$, the eigenvalues are a [complex](!/linear-algebra/eigen/complex) conjugate pair.

## Worked Example

For $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$: $\\text{tr}(A) = 9$, $\\det(A) = 14$, $\\Delta = 81 - 56 = 25$. The eigenvalues are $\\lambda = \\frac{9 \\pm 5}{2}$, giving $\\lambda_1 = 7$ and $\\lambda_2 = 2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the Characteristic Polynomial: 3×3`,
    content: `For a $3 \\times 3$ matrix, expanding $\\det(A - \\lambda I)$ using [cofactor](!/linear-algebra/determinants/cofactors) expansion produces a cubic polynomial:

$$p(\\lambda) = -\\lambda^3 + \\text{tr}(A)\\lambda^2 - (\\text{sum of } 2 \\times 2 \\text{ principal minors})\\lambda + \\det(A)$$

The computation is lengthier but follows the same cofactor mechanics as any $3 \\times 3$ determinant.

## Worked Example

For $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$, this is upper [triangular](!/linear-algebra/matrix/types), so $A - \\lambda I$ is also upper triangular with diagonal entries $2 - \\lambda$, $3 - \\lambda$, $1 - \\lambda$:

$$p(\\lambda) = (2 - \\lambda)(3 - \\lambda)(1 - \\lambda)$$

The eigenvalues are $\\lambda = 1, 2, 3$ — readable directly from the diagonal. For triangular matrices, the characteristic polynomial always factors as the product of the diagonal terms, making the eigenvalues visible by inspection.

For non-triangular $3 \\times 3$ matrices, the cubic must be factored by finding rational roots (testing factors of the constant term), by inspection, or by the cubic formula.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Larger Matrices`,
    content: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, and finding its roots becomes increasingly difficult as $n$ grows. There is no general closed-form formula for roots of polynomials of degree $5$ or higher (Abel-Ruffini theorem), so explicit factoring is limited to small matrices or matrices with special structure.

[Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices are immediate: the eigenvalues are the diagonal entries. Block triangular matrices factor block by block: the characteristic polynomial is the product of the characteristic polynomials of the diagonal blocks.

For general large matrices, eigenvalues are computed numerically by iterative algorithms — most importantly the QR algorithm, which repeatedly applies [QR decompositions](!/linear-algebra/decompositions/qr) to converge on the eigenvalues without ever forming the characteristic polynomial explicitly. Computing the polynomial and then finding its roots is numerically unstable for large $n$ and is never used in practice.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Algebraic Multiplicity`,
    content: `If $\\lambda_0$ is a root of the characteristic polynomial $p(\\lambda)$, its algebraic multiplicity is the largest power $k$ such that $(\\lambda - \\lambda_0)^k$ divides $p(\\lambda)$. Equivalently, it is the multiplicity of $\\lambda_0$ as a root.

If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$. The algebraic multiplicities of all eigenvalues sum to $n$ — the degree of the polynomial — when complex roots are included.

The algebraic multiplicity is an upper bound for the geometric multiplicity: $1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$. The geometric multiplicity is the dimension of the eigenspace, and it can be strictly smaller than the algebraic multiplicity. When this gap occurs for any eigenvalue, the matrix is not [diagonalizable](!/linear-algebra/eigen/diagonalization).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Finding Eigenvectors After Finding Eigenvalues`,
    content: `Once the eigenvalues are known, the eigenvectors for each $\\lambda_i$ are found by solving the homogeneous system $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$.

Row reduce $A - \\lambda_i I$ and express the general solution in parametric form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for the eigenspace $E_{\\lambda_i}$.

## Worked Example

For $A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$. Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = -1$.

For $\\lambda_1 = 5$: $A - 5I = \\begin{pmatrix} -4 & 2 \\\\ 4 & -2 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & -1/2 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = t/2$. Eigenvector: $\\mathbf{v}_1 = (1, 2)^T$.

For $\\lambda_2 = -1$: $A + I = \\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = -t$. Eigenvector: $\\mathbf{v}_2 = (-1, 1)^T$.

Verification: $A\\mathbf{v}_1 = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = 5\\mathbf{v}_1$ and $A\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = -1 \\cdot \\mathbf{v}_2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Cayley-Hamilton Theorem`,
    content: `Every square matrix satisfies its own characteristic polynomial. If $p(\\lambda) = \\det(A - \\lambda I)$ is the characteristic polynomial, then

@academic[formula_callout:cayley_hamilton|Cayley-Hamilton|$$p(A) = O$$]@
@academic[formulas_link:/linear-algebra/formulas#cayley_hamilton]@

where $O$ is the zero matrix and $\\lambda$ is replaced by $A$ (with constant terms multiplied by $I$).

For example, if $p(\\lambda) = \\lambda^2 - 5\\lambda + 6$, then $A^2 - 5A + 6I = O$. This can be rearranged to express $A^{-1}$ as a polynomial in $A$: $A^{-1} = \\frac{1}{6}(5I - A)$ (provided $\\det(A) = 6 \\neq 0$). More generally, the Cayley-Hamilton theorem guarantees that $A^{-1}$ can always be written as a polynomial in $A$ of degree at most $n - 1$.

The theorem also shows that any power $A^k$ with $k \\geq n$ can be reduced to a polynomial in $A$ of degree at most $n - 1$ — the characteristic polynomial provides a recurrence that expresses higher powers in terms of lower ones.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Characteristic Polynomial and Similarity`,
    content: `[Similar](!/linear-algebra/transformations/basis-change) matrices have the same characteristic polynomial:

$$\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$$

The second equality uses the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$, since $\\det(P^{-1})\\det(P) = 1$.

This means the characteristic polynomial is a property of the linear transformation itself, not of any particular matrix representation. Changing the basis changes the matrix but not the polynomial. Since the eigenvalues are the roots of the polynomial, similar matrices have the same eigenvalues with the same algebraic multiplicities.

The [trace](!/linear-algebra/matrix/trace) and [determinant](!/linear-algebra/determinants) are just two of the $n$ coefficients of the characteristic polynomial. The polynomial carries more information than either one alone — it determines the complete multiset of eigenvalues, not just their sum and product.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Summary: The Characteristic Polynomial at a Glance`,
    content: `The characteristic polynomial p(λ) = det(A − λI) carries every spectral fact about A — its degree, individual coefficients, roots, and behavior under similarity all encode information about the matrix. The table below collects each structural property of the polynomial alongside its statement and the connection it makes to A.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



 const introContent = {
   id: "intro",
  title: `The Polynomial Whose Roots Are the Eigenvalues`,
  content: `The eigenvalue problem Av = λv converts into a determinant condition: det(A − λI) = 0. This determinant is a polynomial in λ whose roots are the eigenvalues. Computing the characteristic polynomial and factoring it is the standard method for finding eigenvalues of small matrices — and the polynomial's coefficients encode the trace, determinant, and other invariants of the matrix.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the characteristic equation?",
    answer: "The characteristic equation is det(A - λI) = 0. It arises from the eigenvector equation Av = λv rewritten as (A - λI)v = 0. Nontrivial solutions exist only when A - λI is singular, which happens when its determinant is zero.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the characteristic polynomial?",
    answer: "The characteristic polynomial is p(λ) = det(A - λI), a degree-n polynomial for an n×n matrix. Its roots are the eigenvalues. The constant term is det(A), and the coefficient of λⁿ⁻¹ involves the trace.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find the characteristic polynomial of a 2×2 matrix?",
    answer: "For A = [[a,b],[c,d]]: p(λ) = λ² - tr(A)λ + det(A) = λ² - (a+d)λ + (ad-bc). Use the quadratic formula: λ = (tr(A) ± √(tr(A)² - 4det(A)))/2.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you find eigenvalues of a 3×3 matrix?",
    answer: "Expand det(A - λI) using cofactors to get a cubic polynomial. For triangular matrices, eigenvalues are the diagonal entries. Otherwise, factor the cubic by finding rational roots or using the cubic formula.",
    sectionId: "4"
  },
  obj5: {
    question: "How are eigenvalues found for large matrices?",
    answer: "For n ≥ 5, no closed-form root formula exists (Abel-Ruffini). Large matrices use iterative algorithms like QR iteration, which converge to eigenvalues without forming the characteristic polynomial—direct polynomial root-finding is numerically unstable.",
    sectionId: "5"
  },
  obj6: {
    question: "What is algebraic multiplicity?",
    answer: "Algebraic multiplicity is the power k such that (λ - λ₀)ᵏ divides the characteristic polynomial—the multiplicity of λ₀ as a root. It's an upper bound for geometric multiplicity. All algebraic multiplicities sum to n.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you find eigenvectors after finding eigenvalues?",
    answer: "For each eigenvalue λᵢ, solve the homogeneous system (A - λᵢI)v = 0. Row reduce A - λᵢI and express the solution in parametric form. Free variables give basis vectors for the eigenspace.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the Cayley-Hamilton theorem?",
    answer: "Every matrix satisfies its own characteristic polynomial: p(A) = 0 (zero matrix). This lets you express A⁻¹ as a polynomial in A and reduce high powers Aᵏ to polynomials of degree at most n-1.",
    sectionId: "8"
  },
  obj9: {
    question: "Do similar matrices have the same characteristic polynomial?",
    answer: "Yes. det(P⁻¹AP - λI) = det(A - λI) because det(P⁻¹)det(P) = 1. The characteristic polynomial is an invariant of the linear transformation, not the specific matrix representation. Similar matrices share eigenvalues with same multiplicities.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Characteristic Equation",
    "description": "Learn the characteristic equation det(A - λI) = 0: characteristic polynomial, 2×2 and 3×3 examples, algebraic multiplicity, Cayley-Hamilton theorem, and similarity invariance.",
    "url": "https://www.learnmathclass.com/linear-algebra/eigen/characteristic-equation",
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
      "name": "Characteristic Equation"
    },
    "teaches": [
      "Characteristic equation det(A - λI) = 0",
      "Characteristic polynomial structure",
      "2×2 and 3×3 eigenvalue computation",
      "Algebraic multiplicity of eigenvalues",
      "Finding eigenvectors from eigenvalues",
      "Cayley-Hamilton theorem",
      "Similarity invariance of characteristic polynomial"
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
        "name": "Linear Algebra",
        "item": "https://www.learnmathclass.com/linear-algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Eigenvalues & Eigenvectors",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Characteristic Equation",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen/characteristic-equation"
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
  props: {
    sectionsContent,
    introContent,
    obj3Table,
    obj5Table,
    characteristicPolynomial,
    faqQuestions,
    schemas,
    seoData: {
      title: "Characteristic Equation: Polynomial & Eigenvalues | Learn Math Class",
      description: "Learn the characteristic equation det(A - λI) = 0: characteristic polynomial, 2×2 and 3×3 examples, algebraic multiplicity, Cayley-Hamilton theorem, and similarity invariance.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/eigen/characteristic-equation",
      name: "Characteristic Equation"
    },
  }
}
   }
export default function CharacteristicEquationPage({
  seoData,
  sectionsContent,
  introContent,
  obj3Table,
  obj5Table,
  characteristicPolynomial,
  faqQuestions,
  schemas,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
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
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          `The polynomial is usually formed in order to solve it, and the roots are indeed the point. But the coefficients are informative before any solving happens: the constant term is the determinant, the next coefficient is the trace, and both are readable off the matrix directly. The grouping below separates what the coefficients tell you from what the roots tell you, with the closed forms and their consequences last.`,
          <DiagramFrame
            key={'obj10-diagram'}
            id="characteristic-polynomial"
            title="What the polynomial encodes"
            source="/linear-algebra/eigen/characteristic-equation"
          >
            <IdentitySheet data={characteristicPolynomial} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `Two of these are worth using as checks rather than as facts. Since the roots must sum to the trace and multiply to the determinant, both are available from the matrix in seconds and can be compared against any computed spectrum — a mismatch means an arithmetic error, found without redoing the work. For a $2 \\times 2$ matrix the discriminant $\\operatorname{tr}^2 - 4\\det$ goes further and classifies the eigenvalues before they are computed at all.`,
          `The one thing the polynomial cannot report is how many independent eigenvectors an eigenvalue has. Algebraic multiplicity counts root repetition; geometric multiplicity counts eigenvectors, and it can be strictly smaller. That gap is invisible in $p(\\lambda)$ and only appears when the null space of $A - \\lambda I$ is actually computed — which is why [diagonalizability](!/linear-algebra/eigen/diagonalization) is a separate question from finding the eigenvalues.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Characteristic Equation</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}