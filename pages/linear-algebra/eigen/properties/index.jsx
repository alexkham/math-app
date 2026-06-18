
// tables-optimized: v4 | 2026-05-18 | 3 tables (obj3 comparison, obj8 aggregation, obj11 summary capstone)
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


export async function getStaticProps(){
const keyWords = [
  "eigenvalue properties",
  "eigenvector properties",
  "trace eigenvalues sum",
  "determinant eigenvalues product",
  "algebraic multiplicity",
  "geometric multiplicity",
  "eigenvalues of inverse",
  "eigenvalues of powers",
  "eigenvalue shifting",
  "eigenvalues of transpose",
  "similar matrices eigenvalues",
  "symmetric matrix eigenvalues",
  "eigenvector independence",
  "spectral properties"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj3 — comparison: algebraic vs geometric multiplicity
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Attribute</th>
      <th style="${tableHeaders.comparison}">Algebraic multiplicity m<sub>a</sub>(λ)</th>
      <th style="${tableHeaders.comparison}">Geometric multiplicity m<sub>g</sub>(λ)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">number of times λ appears as a root of the characteristic polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dimension of the eigenspace E<sub>λ</sub> = Null(A − λI)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ≤ m<sub>a</sub>(λ) ≤ n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ≤ m<sub>g</sub>(λ) ≤ m<sub>a</sub>(λ)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Computed from</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring p(λ) = det(A − λI)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row reducing A − λI; counting free variables</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Diagonalizability test</td>
      <td style="padding: 12px 15px; color: #34495e;">total Σ m<sub>a</sub>(λ) is always n</td>
      <td style="padding: 12px 15px; color: #34495e;">A is diagonalizable ⟺ m<sub>g</sub>(λ) = m<sub>a</sub>(λ) for every λ</td>
    </tr>
  </tbody>
</table>
`

// obj8 — aggregation: special matrix types and their eigenvalue constraints
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Matrix type</th>
      <th style="${tableHeaders.aggregation}">Defining property</th>
      <th style="${tableHeaders.aggregation}">Eigenvalue constraint</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/types" style="${linkStyle}">Diagonal / triangular</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">zeros above or below (or both) the main diagonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues are the diagonal entries (visible by inspection)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real symmetric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = A<sup>T</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all eigenvalues are real; eigenvectors for distinct λ are <a href="/linear-algebra/orthogonality" style="${linkStyle}">orthogonal</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real skew-symmetric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = −A<sup>T</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues are zero or purely imaginary, in conjugate pairs ± bi</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Orthogonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>T</sup>A = I</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|λ| = 1; real eigenvalues are ±1; complex eigenvalues in conjugate pairs on the unit circle</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Idempotent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>2</sup> = A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">λ ∈ {0, 1}</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Nilpotent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>k</sup> = 0 for some positive integer k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all eigenvalues equal zero</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Involutory</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>2</sup> = I</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">λ ∈ {+1, −1}</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Positive definite (symmetric)</td>
      <td style="padding: 12px 15px; color: #34495e;">x<sup>T</sup>A x &gt; 0 for every nonzero x, with A symmetric</td>
      <td style="padding: 12px 15px; color: #34495e;">all eigenvalues strictly positive</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: quantities and operations vs eigenvalues
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Quantity / Operation on A</th>
      <th style="${tableHeaders.summary}">Eigenvalue relationship</th>
      <th style="${tableHeaders.summary}">Eigenvector behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trace tr(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tr(A) = λ₁ + λ₂ + ⋯ + λₙ (with algebraic multiplicity)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Determinant det(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) = λ₁ · λ₂ ⋯ λₙ; A invertible ⟺ no λᵢ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse A<sup>−1</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues become 1 / λᵢ (requires A invertible)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unchanged</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Transpose A<sup>T</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same eigenvalues λᵢ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">generally different — these are the left eigenvectors of A</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power A<sup>k</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues become λᵢ<sup>k</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unchanged</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial q(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues become q(λᵢ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unchanged</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Shift A + cI</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues become λᵢ + c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unchanged</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiple cA</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvalues become c · λᵢ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unchanged</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Similar P<sup>−1</sup>AP</td>
      <td style="padding: 12px 15px; color: #34495e;">same eigenvalues λᵢ (with same algebraic and geometric multiplicities)</td>
      <td style="padding: 12px 15px; color: #34495e;">transformed by P<sup>−1</sup></td>
    </tr>
  </tbody>
</table>
`


// const sectionsContent = {
//   obj1: {
//     title: `Trace and Eigenvalues`,
//     content: `The [trace](!/linear-algebra/matrix/trace) of $A$ equals the sum of its eigenvalues, counted with algebraic multiplicity:

// $$\\text{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n$$

// This follows from the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation). The coefficient of $\\lambda^{n-1}$ in $p(\\lambda) = \\det(A - \\lambda I)$ is $(-1)^{n-1}\\text{tr}(A)$, and by Vieta's formulas, the sum of the roots of a degree-$n$ polynomial equals (up to sign) the coefficient of the $(n-1)$-th power term.

// The trace provides a quick consistency check. A $3 \\times 3$ matrix with diagonal entries $7, -2, 4$ has trace $9$. If the eigenvalues are computed as $5, 3, 1$, the sum is $9$ — consistent. If the sum does not match the trace, a computation error has occurred.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Determinant and Eigenvalues`,
//     content: `The [determinant](!/linear-algebra/determinants) of $A$ equals the product of its eigenvalues:

// $$\\det(A) = \\lambda_1 \\cdot \\lambda_2 \\cdots \\lambda_n$$

// This follows from evaluating the characteristic polynomial at $\\lambda = 0$: $p(0) = \\det(A - 0 \\cdot I) = \\det(A)$, and since the roots of $p$ are $\\lambda_1, \\dots, \\lambda_n$, the constant term is (up to sign) their product.

// The most immediate consequence is that $A$ is [invertible](!/linear-algebra/matrix/inverse) if and only if no eigenvalue is zero. A single vanishing eigenvalue makes the product zero, collapsing the determinant and rendering $A$ singular. Conversely, all eigenvalues nonzero means $\\det(A) \\neq 0$ and $A$ is invertible.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Algebraic and Geometric Multiplicity`,
//     content: `Every eigenvalue $\\lambda$ has two multiplicity measures. The algebraic multiplicity $m_a(\\lambda)$ is the number of times $\\lambda$ appears as a root of the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation). The geometric multiplicity $m_g(\\lambda)$ is the [dimension](!/linear-algebra/vector-spaces/dimension) of the eigenspace $E_\\lambda = \\text{Null}(A - \\lambda I)$.

// These two numbers always satisfy

// $$1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$$

// The geometric multiplicity is at least $1$ because the eigenspace must contain at least one nonzero eigenvector. It cannot exceed the algebraic multiplicity — a fact whose proof requires the Jordan normal form or the theory of invariant subspaces.

// When $m_g = m_a$ for every eigenvalue, the matrix is [diagonalizable](!/linear-algebra/eigen/diagonalization) — there are enough independent eigenvectors to form a [basis](!/linear-algebra/vector-spaces). When $m_g < m_a$ for any eigenvalue, the matrix is defective and cannot be diagonalized.

// For $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$, the eigenvalue $\\lambda = 2$ has $m_a = 2$ but $m_g = 1$ (the eigenspace is one-dimensional, spanned by $(1, 0)$). This matrix is not diagonalizable.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Eigenvalues of the Inverse`,
//     content: `If $\\lambda$ is an eigenvalue of an invertible matrix $A$ with eigenvector $\\mathbf{v}$, then $1/\\lambda$ is an eigenvalue of $A^{-1}$ with the same eigenvector.

// The proof is one line: $A\\mathbf{v} = \\lambda\\mathbf{v}$ implies $\\mathbf{v} = \\lambda A^{-1}\\mathbf{v}$, so $A^{-1}\\mathbf{v} = (1/\\lambda)\\mathbf{v}$.

// The eigenvalues of $A^{-1}$ are the reciprocals of the eigenvalues of $A$, and the eigenvectors are unchanged. This requires $\\lambda \\neq 0$, which is guaranteed by the invertibility of $A$.

// If $A$ has eigenvalues $2, -3, 5$, then $A^{-1}$ has eigenvalues $1/2, -1/3, 1/5$. The [trace](!/linear-algebra/matrix/trace) of $A^{-1}$ is $1/2 - 1/3 + 1/5 = 11/30$, and $\\det(A^{-1}) = 1/(2 \\cdot (-3) \\cdot 5) = -1/30$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Eigenvalues of Powers and Polynomials`,
//     content: `If $A\\mathbf{v} = \\lambda\\mathbf{v}$, then $A^k\\mathbf{v} = \\lambda^k\\mathbf{v}$ for every positive integer $k$. The proof is induction: $A^{k+1}\\mathbf{v} = A(A^k\\mathbf{v}) = A(\\lambda^k\\mathbf{v}) = \\lambda^k A\\mathbf{v} = \\lambda^{k+1}\\mathbf{v}$.

// The eigenvectors are preserved; only the eigenvalues change by raising to the $k$-th power.

// More generally, if $q(\\lambda) = c_0 + c_1\\lambda + \\cdots + c_m\\lambda^m$ is any polynomial, then $q(A)$ has eigenvalues $q(\\lambda_i)$ with the same eigenvectors:

// $$q(A)\\mathbf{v} = (c_0 I + c_1 A + \\cdots + c_m A^m)\\mathbf{v} = (c_0 + c_1\\lambda + \\cdots + c_m\\lambda^m)\\mathbf{v} = q(\\lambda)\\mathbf{v}$$

// If $A$ has eigenvalue $3$, then $2A^2 - A + 4I$ has eigenvalue $2(9) - 3 + 4 = 19$ for the same eigenvector.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Eigenvalue Shifting`,
//     content: `Adding a scalar multiple of the identity to $A$ shifts every eigenvalue by that scalar while leaving the eigenvectors unchanged.

// If $A\\mathbf{v} = \\lambda\\mathbf{v}$, then $(A + cI)\\mathbf{v} = A\\mathbf{v} + c\\mathbf{v} = (\\lambda + c)\\mathbf{v}$.

// The eigenvalues of $A + cI$ are $\\lambda_1 + c, \\lambda_2 + c, \\dots, \\lambda_n + c$. Scaling works similarly: $cA$ has eigenvalues $c\\lambda_1, c\\lambda_2, \\dots, c\\lambda_n$ with the same eigenvectors.

// These operations are useful in practice. Adding $cI$ can shift all eigenvalues to be positive (making a matrix positive definite for numerical purposes), or shift a known eigenvalue to zero (making $A - \\lambda_0 I$ singular, which is exactly how the eigenvalue equation is set up).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Eigenvalues of the Transpose`,
//     content: `A matrix $A$ and its [transpose](!/linear-algebra/matrix/operations) $A^T$ have the same eigenvalues. The characteristic polynomials are identical:

// $$\\det(A^T - \\lambda I) = \\det((A - \\lambda I)^T) = \\det(A - \\lambda I)$$

// The second equality uses [transpose invariance](!/linear-algebra/determinants/properties) of the determinant.

// The eigenvectors are generally different. If $\\mathbf{v}$ is a right eigenvector of $A$ ($A\\mathbf{v} = \\lambda\\mathbf{v}$), the corresponding left eigenvector $\\mathbf{w}$ satisfies $\\mathbf{w}^T A = \\lambda \\mathbf{w}^T$, which is the same as $A^T\\mathbf{w} = \\lambda\\mathbf{w}$. So the left eigenvectors of $A$ are the (right) eigenvectors of $A^T$. The eigenvalues match, but the directions are different.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Eigenvalues of Special Matrix Types`,
//     content: `The structure of a matrix constrains which eigenvalues are possible.

// [Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices have their eigenvalues on the diagonal — immediately visible.

// Real [symmetric](!/linear-algebra/matrix/types) matrices have all real eigenvalues, and eigenvectors for distinct eigenvalues are [orthogonal](!/linear-algebra/orthogonality). This is the spectral theorem's prerequisite.

// Real [skew-symmetric](!/linear-algebra/matrix/types) matrices have eigenvalues that are zero or purely imaginary — they come in conjugate pairs $\\pm bi$.

// [Orthogonal](!/linear-algebra/matrix/types) matrices have eigenvalues on the unit circle: $|\\lambda| = 1$. For real orthogonal matrices, real eigenvalues are restricted to $\\pm 1$, and complex eigenvalues come in conjugate pairs of modulus $1$.

// [Idempotent](!/linear-algebra/matrix/types) matrices ($A^2 = A$) have eigenvalues satisfying $\\lambda^2 = \\lambda$, so $\\lambda = 0$ or $\\lambda = 1$.

// [Nilpotent](!/linear-algebra/matrix/types) matrices ($A^k = 0$) have all eigenvalues equal to zero.

// [Involutory](!/linear-algebra/matrix/types) matrices ($A^2 = I$) have eigenvalues satisfying $\\lambda^2 = 1$, so $\\lambda = \\pm 1$.

// Positive definite [symmetric](!/linear-algebra/matrix/types) matrices have all eigenvalues strictly positive.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Independence of Eigenvectors`,
//     content: `Eigenvectors corresponding to distinct eigenvalues are always [linearly independent](!/linear-algebra/vector-spaces/linear-independence).

// The proof proceeds by induction. For a single eigenvector, independence is trivial (one nonzero vector is independent). Suppose $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{k-1}\\}$ are independent eigenvectors with distinct eigenvalues. If $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$, multiply both sides by $A$ to get $c_1\\lambda_1\\mathbf{v}_1 + \\cdots + c_k\\lambda_k\\mathbf{v}_k = \\mathbf{0}$. Subtract $\\lambda_k$ times the original equation: $c_1(\\lambda_1 - \\lambda_k)\\mathbf{v}_1 + \\cdots + c_{k-1}(\\lambda_{k-1} - \\lambda_k)\\mathbf{v}_{k-1} = \\mathbf{0}$. By the induction hypothesis, all coefficients $c_i(\\lambda_i - \\lambda_k) = 0$. Since the eigenvalues are distinct, $\\lambda_i - \\lambda_k \\neq 0$, forcing $c_i = 0$ for all $i < k$. Then the original equation gives $c_k\\mathbf{v}_k = \\mathbf{0}$, so $c_k = 0$.

// The immediate consequence: a matrix with $n$ distinct eigenvalues has $n$ independent eigenvectors and is automatically [diagonalizable](!/linear-algebra/eigen/diagonalization). Distinctness of eigenvalues is a sufficient condition for diagonalizability, though not a necessary one.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Similar Matrices and Spectral Invariants`,
//     content: `[Similar](!/linear-algebra/transformations/basis-change) matrices share every spectral property: eigenvalues, algebraic multiplicities, geometric multiplicities, and the characteristic polynomial are all identical.

// If $B = P^{-1}AP$ and $\\mathbf{v}$ is an eigenvector of $A$ with eigenvalue $\\lambda$, then $P^{-1}\\mathbf{v}$ is an eigenvector of $B$ with the same eigenvalue: $B(P^{-1}\\mathbf{v}) = P^{-1}AP(P^{-1}\\mathbf{v}) = P^{-1}A\\mathbf{v} = P^{-1}\\lambda\\mathbf{v} = \\lambda(P^{-1}\\mathbf{v})$.

// The eigenvalues stay the same; the eigenvectors transform by $P^{-1}$. This is consistent with the interpretation that eigenvalues are properties of the [transformation](!/linear-algebra/transformations), not of the matrix. Changing the basis changes the matrix and the eigenvector coordinates, but the eigenvalues — the intrinsic scaling factors — are invariant.

// The [trace](!/linear-algebra/matrix/trace), [determinant](!/linear-algebra/determinants), and [rank](!/linear-algebra/matrix/rank) are all derivable from the eigenvalues, so their invariance under similarity is a corollary of eigenvalue invariance.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Spectral Properties at a Glance`,
//     content: `The trace, determinant, and the seven transformations of A introduced across this page all interact with the eigenvalue spectrum in predictable ways. The table below collects every relationship into a single reference card, pairing each quantity or operation with what happens to the eigenvalues and how the eigenvectors behave.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// formulas-injected: v1 | 2026-06-16 | 7 callouts (obj3 multiplicity_inequality direct, obj4 eigenvalue_of_inverse inline-promote, obj5 eigenvalue_of_power + eigenvalue_of_polynomial inline-promote, obj6 eigenvalue_shift inline-promote, obj8 special_matrix_eigenvalue_restrictions prose-insert, obj9 independence_of_distinct_eigenvectors prose-insert)

const sectionsContent = {
  obj1: {
    title: `Trace and Eigenvalues`,
    content: `The [trace](!/linear-algebra/matrix/trace) of $A$ equals the sum of its eigenvalues, counted with algebraic multiplicity:

$$\\text{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n$$

This follows from the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation). The coefficient of $\\lambda^{n-1}$ in $p(\\lambda) = \\det(A - \\lambda I)$ is $(-1)^{n-1}\\text{tr}(A)$, and by Vieta&apos;s formulas, the sum of the roots of a degree-$n$ polynomial equals (up to sign) the coefficient of the $(n-1)$-th power term.

The trace provides a quick consistency check. A $3 \\times 3$ matrix with diagonal entries $7, -2, 4$ has trace $9$. If the eigenvalues are computed as $5, 3, 1$, the sum is $9$ — consistent. If the sum does not match the trace, a computation error has occurred.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Determinant and Eigenvalues`,
    content: `The [determinant](!/linear-algebra/determinants) of $A$ equals the product of its eigenvalues:

$$\\det(A) = \\lambda_1 \\cdot \\lambda_2 \\cdots \\lambda_n$$

This follows from evaluating the characteristic polynomial at $\\lambda = 0$: $p(0) = \\det(A - 0 \\cdot I) = \\det(A)$, and since the roots of $p$ are $\\lambda_1, \\dots, \\lambda_n$, the constant term is (up to sign) their product.

The most immediate consequence is that $A$ is [invertible](!/linear-algebra/matrix/inverse) if and only if no eigenvalue is zero. A single vanishing eigenvalue makes the product zero, collapsing the determinant and rendering $A$ singular. Conversely, all eigenvalues nonzero means $\\det(A) \\neq 0$ and $A$ is invertible.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Algebraic and Geometric Multiplicity`,
    content: `Every eigenvalue $\\lambda$ has two multiplicity measures. The algebraic multiplicity $m_a(\\lambda)$ is the number of times $\\lambda$ appears as a root of the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation). The geometric multiplicity $m_g(\\lambda)$ is the [dimension](!/linear-algebra/vector-spaces/dimension) of the eigenspace $E_\\lambda = \\text{Null}(A - \\lambda I)$.

These two numbers always satisfy

@academic[formula_callout:multiplicity_inequality|Multiplicity Inequality|$$1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$$]@
@academic[formulas_link:/linear-algebra/formulas#multiplicity_inequality]@

The geometric multiplicity is at least $1$ because the eigenspace must contain at least one nonzero eigenvector. It cannot exceed the algebraic multiplicity — a fact whose proof requires the Jordan normal form or the theory of invariant subspaces.

When $m_g = m_a$ for every eigenvalue, the matrix is [diagonalizable](!/linear-algebra/eigen/diagonalization) — there are enough independent eigenvectors to form a [basis](!/linear-algebra/vector-spaces). When $m_g < m_a$ for any eigenvalue, the matrix is defective and cannot be diagonalized.

For $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$, the eigenvalue $\\lambda = 2$ has $m_a = 2$ but $m_g = 1$ (the eigenspace is one-dimensional, spanned by $(1, 0)$). This matrix is not diagonalizable.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Eigenvalues of the Inverse`,
    content: `If $\\lambda$ is an eigenvalue of an invertible matrix $A$ with eigenvector $\\mathbf{v}$, then the eigenvector is preserved and the eigenvalue inverts:

@academic[formula_callout:eigenvalue_of_inverse|Eigenvalue of Inverse|$$A\\mathbf{v} = \\lambda\\mathbf{v} \\Rightarrow A^{-1}\\mathbf{v} = \\frac{1}{\\lambda}\\mathbf{v}$$]@
@academic[formulas_link:/linear-algebra/formulas#eigenvalue_of_inverse]@

The proof is one line: $A\\mathbf{v} = \\lambda\\mathbf{v}$ implies $\\mathbf{v} = \\lambda A^{-1}\\mathbf{v}$, so $A^{-1}\\mathbf{v} = (1/\\lambda)\\mathbf{v}$.

The eigenvalues of $A^{-1}$ are the reciprocals of the eigenvalues of $A$, and the eigenvectors are unchanged. This requires $\\lambda \\neq 0$, which is guaranteed by the invertibility of $A$.

If $A$ has eigenvalues $2, -3, 5$, then $A^{-1}$ has eigenvalues $1/2, -1/3, 1/5$. The [trace](!/linear-algebra/matrix/trace) of $A^{-1}$ is $1/2 - 1/3 + 1/5 = 11/30$, and $\\det(A^{-1}) = 1/(2 \\cdot (-3) \\cdot 5) = -1/30$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Eigenvalues of Powers and Polynomials`,
    content: `Powers of $A$ preserve the eigenvector and raise the eigenvalue:

@academic[formula_callout:eigenvalue_of_power|Eigenvalue of Power|$$A\\mathbf{v} = \\lambda\\mathbf{v} \\Rightarrow A^k\\mathbf{v} = \\lambda^k\\mathbf{v}$$]@
@academic[formulas_link:/linear-algebra/formulas#eigenvalue_of_power]@

The proof is induction: $A^{k+1}\\mathbf{v} = A(A^k\\mathbf{v}) = A(\\lambda^k\\mathbf{v}) = \\lambda^k A\\mathbf{v} = \\lambda^{k+1}\\mathbf{v}$.

The eigenvectors are preserved; only the eigenvalues change by raising to the $k$-th power.

More generally, if $q(\\lambda) = c_0 + c_1\\lambda + \\cdots + c_m\\lambda^m$ is any polynomial, then $q(A)$ has eigenvalues $q(\\lambda_i)$ with the same eigenvectors:

@academic[formula_callout:eigenvalue_of_polynomial|Eigenvalue of Polynomial|$$q(A)\\mathbf{v} = q(\\lambda)\\mathbf{v}$$]@
@academic[formulas_link:/linear-algebra/formulas#eigenvalue_of_polynomial]@

This follows by expansion:

$$q(A)\\mathbf{v} = (c_0 I + c_1 A + \\cdots + c_m A^m)\\mathbf{v} = (c_0 + c_1\\lambda + \\cdots + c_m\\lambda^m)\\mathbf{v} = q(\\lambda)\\mathbf{v}$$

If $A$ has eigenvalue $3$, then $2A^2 - A + 4I$ has eigenvalue $2(9) - 3 + 4 = 19$ for the same eigenvector.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Eigenvalue Shifting`,
    content: `Adding a scalar multiple of the identity to $A$ shifts every eigenvalue by that scalar while leaving the eigenvectors unchanged:

@academic[formula_callout:eigenvalue_shift|Eigenvalue Shift|$$A\\mathbf{v} = \\lambda\\mathbf{v} \\Rightarrow (A + cI)\\mathbf{v} = (\\lambda + c)\\mathbf{v}$$]@
@academic[formulas_link:/linear-algebra/formulas#eigenvalue_shift]@

The proof: $(A + cI)\\mathbf{v} = A\\mathbf{v} + c\\mathbf{v} = \\lambda\\mathbf{v} + c\\mathbf{v} = (\\lambda + c)\\mathbf{v}$.

The eigenvalues of $A + cI$ are $\\lambda_1 + c, \\lambda_2 + c, \\dots, \\lambda_n + c$. Scaling works similarly: $cA$ has eigenvalues $c\\lambda_1, c\\lambda_2, \\dots, c\\lambda_n$ with the same eigenvectors.

These operations are useful in practice. Adding $cI$ can shift all eigenvalues to be positive (making a matrix positive definite for numerical purposes), or shift a known eigenvalue to zero (making $A - \\lambda_0 I$ singular, which is exactly how the eigenvalue equation is set up).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Eigenvalues of the Transpose`,
    content: `A matrix $A$ and its [transpose](!/linear-algebra/matrix/operations) $A^T$ have the same eigenvalues. The characteristic polynomials are identical:

$$\\det(A^T - \\lambda I) = \\det((A - \\lambda I)^T) = \\det(A - \\lambda I)$$

The second equality uses [transpose invariance](!/linear-algebra/determinants/properties) of the determinant.

The eigenvectors are generally different. If $\\mathbf{v}$ is a right eigenvector of $A$ ($A\\mathbf{v} = \\lambda\\mathbf{v}$), the corresponding left eigenvector $\\mathbf{w}$ satisfies $\\mathbf{w}^T A = \\lambda \\mathbf{w}^T$, which is the same as $A^T\\mathbf{w} = \\lambda\\mathbf{w}$. So the left eigenvectors of $A$ are the (right) eigenvectors of $A^T$. The eigenvalues match, but the directions are different.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Eigenvalues of Special Matrix Types`,
    content: `The structure of a matrix constrains which eigenvalues are possible:

@academic[formula_callout:special_matrix_eigenvalue_restrictions|Special Matrix Eigenvalue Restrictions|$$\\begin{aligned} \\text{symmetric (real)}: \\;& \\lambda \\in \\mathbb{R} \\\\ \\text{skew-symmetric (real)}: \\;& \\lambda = 0 \\text{ or } \\lambda \\in i\\mathbb{R} \\\\ \\text{orthogonal}: \\;& |\\lambda| = 1 \\\\ \\text{idempotent}: \\;& \\lambda \\in \\{0, 1\\} \\\\ \\text{nilpotent}: \\;& \\lambda = 0 \\\\ \\text{involutory}: \\;& \\lambda \\in \\{-1, +1\\} \\\\ \\text{positive definite}: \\;& \\lambda > 0 \\end{aligned}$$]@
@academic[formulas_link:/linear-algebra/formulas#special_matrix_eigenvalue_restrictions]@

[Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices have their eigenvalues on the diagonal — immediately visible.

Real [symmetric](!/linear-algebra/matrix/types) matrices have all real eigenvalues, and eigenvectors for distinct eigenvalues are [orthogonal](!/linear-algebra/orthogonality). This is the spectral theorem&apos;s prerequisite.

Real [skew-symmetric](!/linear-algebra/matrix/types) matrices have eigenvalues that are zero or purely imaginary — they come in conjugate pairs $\\pm bi$.

[Orthogonal](!/linear-algebra/matrix/types) matrices have eigenvalues on the unit circle: $|\\lambda| = 1$. For real orthogonal matrices, real eigenvalues are restricted to $\\pm 1$, and complex eigenvalues come in conjugate pairs of modulus $1$.

[Idempotent](!/linear-algebra/matrix/types) matrices ($A^2 = A$) have eigenvalues satisfying $\\lambda^2 = \\lambda$, so $\\lambda = 0$ or $\\lambda = 1$.

[Nilpotent](!/linear-algebra/matrix/types) matrices ($A^k = 0$) have all eigenvalues equal to zero.

[Involutory](!/linear-algebra/matrix/types) matrices ($A^2 = I$) have eigenvalues satisfying $\\lambda^2 = 1$, so $\\lambda = \\pm 1$.

Positive definite [symmetric](!/linear-algebra/matrix/types) matrices have all eigenvalues strictly positive.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Independence of Eigenvectors`,
    content: `Eigenvectors corresponding to distinct eigenvalues are always [linearly independent](!/linear-algebra/vector-spaces/linear-independence):

@academic[formula_callout:independence_of_distinct_eigenvectors|Independence of Distinct Eigenvectors|$$\\lambda_1, \\ldots, \\lambda_k \\text{ distinct} \\Rightarrow \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} \\text{ linearly independent}$$]@
@academic[formulas_link:/linear-algebra/formulas#independence_of_distinct_eigenvectors]@

The proof proceeds by induction. For a single eigenvector, independence is trivial (one nonzero vector is independent). Suppose $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{k-1}\\}$ are independent eigenvectors with distinct eigenvalues. If $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$, multiply both sides by $A$ to get $c_1\\lambda_1\\mathbf{v}_1 + \\cdots + c_k\\lambda_k\\mathbf{v}_k = \\mathbf{0}$. Subtract $\\lambda_k$ times the original equation: $c_1(\\lambda_1 - \\lambda_k)\\mathbf{v}_1 + \\cdots + c_{k-1}(\\lambda_{k-1} - \\lambda_k)\\mathbf{v}_{k-1} = \\mathbf{0}$. By the induction hypothesis, all coefficients $c_i(\\lambda_i - \\lambda_k) = 0$. Since the eigenvalues are distinct, $\\lambda_i - \\lambda_k \\neq 0$, forcing $c_i = 0$ for all $i < k$. Then the original equation gives $c_k\\mathbf{v}_k = \\mathbf{0}$, so $c_k = 0$.

The immediate consequence: a matrix with $n$ distinct eigenvalues has $n$ independent eigenvectors and is automatically [diagonalizable](!/linear-algebra/eigen/diagonalization). Distinctness of eigenvalues is a sufficient condition for diagonalizability, though not a necessary one.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Similar Matrices and Spectral Invariants`,
    content: `[Similar](!/linear-algebra/transformations/basis-change) matrices share every spectral property: eigenvalues, algebraic multiplicities, geometric multiplicities, and the characteristic polynomial are all identical.

If $B = P^{-1}AP$ and $\\mathbf{v}$ is an eigenvector of $A$ with eigenvalue $\\lambda$, then $P^{-1}\\mathbf{v}$ is an eigenvector of $B$ with the same eigenvalue: $B(P^{-1}\\mathbf{v}) = P^{-1}AP(P^{-1}\\mathbf{v}) = P^{-1}A\\mathbf{v} = P^{-1}\\lambda\\mathbf{v} = \\lambda(P^{-1}\\mathbf{v})$.

The eigenvalues stay the same; the eigenvectors transform by $P^{-1}$. This is consistent with the interpretation that eigenvalues are properties of the [transformation](!/linear-algebra/transformations), not of the matrix. Changing the basis changes the matrix and the eigenvector coordinates, but the eigenvalues — the intrinsic scaling factors — are invariant.

The [trace](!/linear-algebra/matrix/trace), [determinant](!/linear-algebra/determinants), and [rank](!/linear-algebra/matrix/rank) are all derivable from the eigenvalues, so their invariance under similarity is a corollary of eigenvalue invariance.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Spectral Properties at a Glance`,
    content: `The trace, determinant, and the seven transformations of A introduced across this page all interact with the eigenvalue spectrum in predictable ways. The table below collects every relationship into a single reference card, pairing each quantity or operation with what happens to the eigenvalues and how the eigenvectors behave.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



const introContent = {
   id: "intro",
  title: `How Eigenvalues Behave Under Matrix Operations`,
  content: `Eigenvalues interact in predictable ways with the trace, determinant, transpose, inverse, powers, and special matrix structures. These relationships provide shortcuts for computing eigenvalues, constraints on what eigenvalues are possible for a given matrix type, and structural connections between the eigenvalue spectrum and the algebraic properties of the matrix.`,
}


const faqQuestions = {
  obj1: {
    question: "How is the trace related to eigenvalues?",
    answer: "The trace equals the sum of all eigenvalues (with algebraic multiplicity): tr(A) = λ₁ + λ₂ + ... + λₙ. This follows from the characteristic polynomial coefficients and provides a quick consistency check when computing eigenvalues.",
    sectionId: "1"
  },
  obj2: {
    question: "How is the determinant related to eigenvalues?",
    answer: "The determinant equals the product of all eigenvalues: det(A) = λ₁·λ₂·...·λₙ. This means A is invertible iff no eigenvalue is zero. A single zero eigenvalue makes the determinant zero and the matrix singular.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between algebraic and geometric multiplicity?",
    answer: "Algebraic multiplicity is how many times λ appears as a root of the characteristic polynomial. Geometric multiplicity is the dimension of the eigenspace. Always: 1 ≤ geometric ≤ algebraic. When they differ, the matrix is not diagonalizable.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the eigenvalues of the inverse matrix?",
    answer: "If λ is an eigenvalue of invertible A with eigenvector v, then 1/λ is an eigenvalue of A⁻¹ with the same eigenvector. The eigenvalues of A⁻¹ are the reciprocals of those of A.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the eigenvalues of A^k?",
    answer: "If Av = λv, then Aᵏv = λᵏv. The eigenvalues of Aᵏ are the k-th powers of the eigenvalues of A, with the same eigenvectors. More generally, for polynomial q(A), the eigenvalues are q(λᵢ).",
    sectionId: "5"
  },
  obj6: {
    question: "What happens to eigenvalues when you add cI to a matrix?",
    answer: "Adding cI shifts every eigenvalue by c: eigenvalues of A + cI are λ₁ + c, λ₂ + c, ..., λₙ + c. The eigenvectors remain unchanged. Similarly, cA has eigenvalues cλ₁, cλ₂, ..., cλₙ.",
    sectionId: "6"
  },
  obj7: {
    question: "Do A and A^T have the same eigenvalues?",
    answer: "Yes. det(Aᵀ - λI) = det(A - λI) because determinant is transpose-invariant. The characteristic polynomials are identical, so eigenvalues match. However, the eigenvectors are generally different—eigenvectors of Aᵀ are left eigenvectors of A.",
    sectionId: "7"
  },
  obj8: {
    question: "What eigenvalues do special matrices have?",
    answer: "Symmetric: all real. Orthogonal: |λ| = 1. Idempotent (A² = A): λ = 0 or 1. Nilpotent (Aᵏ = 0): all λ = 0. Involutory (A² = I): λ = ±1. Positive definite symmetric: all λ > 0. Triangular/diagonal: eigenvalues on diagonal.",
    sectionId: "8"
  },
  obj9: {
    question: "Are eigenvectors of distinct eigenvalues independent?",
    answer: "Yes, always. Eigenvectors corresponding to distinct eigenvalues are linearly independent. A matrix with n distinct eigenvalues automatically has n independent eigenvectors and is diagonalizable.",
    sectionId: "9"
  },
  obj10: {
    question: "Do similar matrices have the same eigenvalues?",
    answer: "Yes. If B = P⁻¹AP, then A and B share eigenvalues, algebraic multiplicities, geometric multiplicities, and characteristic polynomial. Eigenvalues are properties of the transformation, not the matrix representation. Eigenvectors transform by P⁻¹.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Eigenvalues and Eigenvectors",
    "description": "Learn eigenvalue properties: trace as sum, determinant as product, algebraic vs geometric multiplicity, eigenvalues of inverse/powers/transpose, special matrix types, and similarity invariance.",
    "url": "https://www.learnmathclass.com/linear-algebra/eigen/properties",
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
      "name": "Eigenvalue Properties"
    },
    "teaches": [
      "Trace equals sum of eigenvalues",
      "Determinant equals product of eigenvalues",
      "Algebraic vs geometric multiplicity",
      "Eigenvalues of inverse, powers, transpose",
      "Eigenvalue shifting with cI",
      "Special matrix eigenvalue constraints",
      "Eigenvector independence theorem",
      "Similarity invariance of spectrum"
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
        "name": "Properties of Eigenvalues and Eigenvectors",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen/properties"
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
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Eigenvalue Properties: Trace, Determinant & More | Learn Math Class",
      description: "Learn eigenvalue properties: trace as sum, determinant as product, algebraic vs geometric multiplicity, eigenvalues of inverse/powers/transpose, special matrix types, and similarity invariance.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/eigen/properties",
      name: "Properties of Eigenvalues and Eigenvectors"
    },
  }
}
   }


export default function EigenvaluePropertiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj3Table,
  obj8Table,
  summaryTable,
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
          <div
            key={'obj8-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj8Table }}
          />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Properties of Eigenvalue and Eigenvector</h1>
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