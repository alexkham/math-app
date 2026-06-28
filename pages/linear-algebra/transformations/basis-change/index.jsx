
// tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj9 aggregation, obj10 summary capstone)

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
  "change of basis",
  "change of basis matrix",
  "similar matrices",
  "similarity transformation",
  "P inverse AP",
  "diagonalization basis change",
  "coordinate transformation",
  "orthogonal similarity",
  "Jordan normal form",
  "eigenvector basis",
  "similarity invariants",
  "change of basis example",
  "basis change linear algebra",
  "matrix representation basis"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj4 — comparison: what similarity preserves vs what it does not
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Quantity / property of A</th>
      <th style="${tableHeaders.comparison} text-align: center;">Preserved under A ↦ P⁻¹AP?</th>
      <th style="${tableHeaders.comparison}">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/determinants" style="${linkStyle}">Determinant</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(P⁻¹AP) = det(P⁻¹) det(A) det(P) = det(A)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Trace</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tr(P⁻¹AP) = tr(APP⁻¹) = tr(A) by cyclic property</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/eigen" style="${linkStyle}">Eigenvalues</a> (with algebraic multiplicities)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">characteristic polynomial is preserved</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Characteristic polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(P⁻¹AP − λI) = det(P⁻¹(A − λI)P) = det(A − λI)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/rank" style="${linkStyle}">Rank</a> and nullity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplication by invertible matrices cannot change rank</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Individual entries</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">entries are basis-dependent coordinates; they change with P</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry (A = Aᵀ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserved only when P is <a href="/linear-algebra/matrix/types" style="${linkStyle}">orthogonal</a> (P⁻¹ = Pᵀ)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Sparsity / triangular structure</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; color: #34495e;">generally destroyed unless P is itself sparse / triangular</td>
    </tr>
  </tbody>
</table>
`

// obj9 — aggregation: strategic basis choices
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">New basis</th>
      <th style="${tableHeaders.aggregation}">Resulting matrix form</th>
      <th style="${tableHeaders.aggregation}">What it simplifies</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Eigenvector basis (when n indep. eigenvectors exist)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonal D = diag(λ₁, ..., λₙ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matrix powers Aᵏ = PDᵏP⁻¹; exponentials e^(At); differential systems x' = Ax decouple into scalar ODEs</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/orthogonal-sets" style="${linkStyle}">Orthonormal</a> eigenbasis (symmetric A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonal D, with P orthogonal (P⁻¹ = Pᵀ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/orthogonality/projections" style="${linkStyle}">projections</a>, <a href="/linear-algebra/orthogonality/least-squares" style="${linkStyle}">least-squares</a>, numerical stability (condition number κ(P) = 1)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Jordan basis (when diagonalization fails)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">block-diagonal Jordan normal form</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">canonical representative for defective matrices; isolates each defective eigenvalue into a small block</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Standard basis (default)</td>
      <td style="padding: 12px 15px; color: #34495e;">the original matrix A</td>
      <td style="padding: 12px 15px; color: #34495e;">rarely the best choice — the natural starting point but the right basis can convert a hard problem into an easy one</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: matrix structure → canonical form achievable via similarity
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Structure of A</th>
      <th style="${tableHeaders.summary}">Canonical form via similarity</th>
      <th style="${tableHeaders.summary}">Choice of P</th>
      <th style="${tableHeaders.summary}">Source theorem</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">All n eigenvalues distinct</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonal D = P⁻¹AP</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns = the n eigenvectors (automatically independent)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distinct eigenvalues ⇒ independent eigenvectors</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Geometric mult. = algebraic mult. for every eigenvalue</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonal D</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns = n linearly independent eigenvectors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/eigen/diagonalization" style="${linkStyle}">diagonalization theorem</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real and symmetric (A = Aᵀ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonal D via orthogonal similarity D = PᵀAP</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns = orthonormal eigenvectors; P orthogonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Spectral Theorem (always succeeds)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Defective (geom. mult. &lt; alg. mult. for some eigenvalue)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Jordan normal form J = P⁻¹AP (block-diagonal, with 1's on superdiagonal)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns = eigenvectors + generalized eigenvectors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Jordan decomposition theorem</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">General complex square matrix</td>
      <td style="padding: 12px 15px; color: #34495e;">upper triangular Schur form T = U*AU</td>
      <td style="padding: 12px 15px; color: #34495e;">unitary U (complex orthogonal)</td>
      <td style="padding: 12px 15px; color: #34495e;">Schur decomposition (always exists over ℂ)</td>
    </tr>
  </tbody>
</table>
`

// ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `The Problem`,
//     content: `A linear transformation $T: V \\to V$ is a fixed geometric object — it sends each vector to a definite image regardless of how coordinates are assigned. But the [matrix](!/linear-algebra/transformations/matrix-representation) that represents $T$ depends on the choice of [basis](!/linear-algebra/vector-spaces). Different bases assign different coordinates to the same vectors, and the matrix that converts input coordinates to output coordinates changes accordingly.

// This raises a natural question: if $T$ has matrix $A$ in one basis and matrix $A'$ in another, how are $A$ and $A'$ related? The answer is the similarity relation $A' = P^{-1}AP$, where $P$ is the change-of-basis matrix. Understanding this relation is the key to choosing bases strategically — picking the basis that makes the matrix as simple as possible.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Change-of-Basis Matrix`,
//     content: `If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ converts $\\mathcal{B}$-coordinates to $\\mathcal{C}$-coordinates:

// $$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_\\mathcal{B}$$

// Column $j$ of $P$ is the $\\mathcal{C}$-coordinate vector of the $j$-th basis vector of $\\mathcal{B}$. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P^{-1}$.

// ## Worked Example

// In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of the $\\mathcal{B}$-basis vectors are just their components: $(1, 1)$ and $(1, -1)$. So

// $$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$

// To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (5, 1)$: solve $P\\mathbf{c} = (5, 1)$. Using $P^{-1} = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}$, we get $\\mathbf{c} = (3, 2)$. So $\\mathbf{v} = 3(1, 1) + 2(1, -1)$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Similarity Relation`,
//     content: `If $T: V \\to V$ has matrix $A$ in basis $\\mathcal{B}$ and matrix $A'$ in basis $\\mathcal{C}$, then

// $$A' = P^{-1}AP$$

// where $P = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ is the change-of-basis matrix from $\\mathcal{B}$ to $\\mathcal{C}$.

// The derivation is direct. For any vector $\\mathbf{v}$, the transformation in $\\mathcal{B}$-coordinates reads $[T(\\mathbf{v})]_\\mathcal{B} = A[\\mathbf{v}]_\\mathcal{B}$. Converting to $\\mathcal{C}$-coordinates: $[T(\\mathbf{v})]_\\mathcal{C} = P^{-1}[T(\\mathbf{v})]_\\mathcal{B} = P^{-1}A[\\mathbf{v}]_\\mathcal{B} = P^{-1}AP[\\mathbf{v}]_\\mathcal{C}$. Since this holds for every $\\mathbf{v}$, the matrix of $T$ in basis $\\mathcal{C}$ is $P^{-1}AP$.

// Two matrices related by $A' = P^{-1}AP$ for some invertible $P$ are called similar. Similarity is an equivalence relation: every matrix is similar to itself ($P = I$), similarity is symmetric ($A' = P^{-1}AP$ implies $A = PA'P^{-1}$), and it is transitive.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Properties Preserved by Similarity`,
//     content: `Similar matrices represent the same transformation, so they share every property that is intrinsic to the transformation rather than to a particular coordinate system.

// The [determinant](!/linear-algebra/determinants) is preserved: $\\det(P^{-1}AP) = \\det(P^{-1})\\det(A)\\det(P) = \\det(A)$.

// The [trace](!/linear-algebra/matrix/trace) is preserved: $\\text{tr}(P^{-1}AP) = \\text{tr}(APP^{-1}) = \\text{tr}(A)$ by the cyclic property.

// The [eigenvalues](!/linear-algebra/eigen) are preserved: $\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$, so the characteristic polynomial — and therefore all eigenvalues with their multiplicities — is the same.

// The [rank](!/linear-algebra/matrix/rank) is preserved: multiplying by invertible matrices cannot change the rank.

// Individual matrix entries, symmetry, and sparsity are generally not preserved. A [symmetric](!/linear-algebra/matrix/types) matrix $A$ can become non-symmetric under $P^{-1}AP$ if $P$ is not [orthogonal](!/linear-algebra/matrix/types).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Diagonalization as a Change of Basis`,
//     content: `If $T$ has $n$ [linearly independent](!/linear-algebra/vector-spaces/linear-independence) eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ with eigenvalues $\\lambda_1, \\dots, \\lambda_n$, use them as the basis $\\mathcal{B}$. In this eigenvector basis, $T$ acts by scaling each basis vector:

// $$T(\\mathbf{v}_i) = \\lambda_i \\mathbf{v}_i$$

// The matrix of $T$ in this basis is diagonal: $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$.

// The change-of-basis matrix $P$ has the eigenvectors as columns: $P = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$. The similarity relation gives $A = PDP^{-1}$, or equivalently $D = P^{-1}AP$.

// [Diagonalization](!/linear-algebra/eigen/diagonalization) is the most powerful application of basis change. It reduces matrix powers to diagonal powers: $A^k = PD^kP^{-1} = P\\,\\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)\\,P^{-1}$. It simplifies differential equations, recurrence relations, and any computation involving repeated application of the same transformation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `When Diagonalization Fails`,
//     content: `Not every matrix is diagonalizable. A transformation may not have $n$ linearly independent eigenvectors — this happens when the geometric multiplicity of some eigenvalue is strictly less than its algebraic multiplicity.

// For example, $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ has eigenvalue $\\lambda = 2$ with algebraic multiplicity $2$, but the eigenspace is one-dimensional (spanned by $(1, 0)$). There is no basis of eigenvectors, so $A$ cannot be diagonalized.

// In such cases, the best achievable form under similarity is the Jordan normal form: a block-diagonal matrix where each block is an upper triangular matrix with a single eigenvalue on the diagonal and ones on the superdiagonal. The Jordan form is unique up to ordering of blocks and is the canonical representative of the similarity class. Its full development belongs to advanced linear algebra.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Orthogonal Similarity`,
//     content: `When the change-of-basis matrix $P$ is [orthogonal](!/linear-algebra/matrix/types) ($P^{-1} = P^T$), the similarity relation becomes $A' = P^TAP$. This is called orthogonal similarity.

// Orthogonal similarity preserves more than ordinary similarity. If $A$ is [symmetric](!/linear-algebra/matrix/types), then $P^TAP$ is also symmetric — a property that ordinary similarity does not guarantee.

// The Spectral Theorem states that every real symmetric matrix is orthogonally similar to a diagonal matrix. The eigenvectors of a symmetric matrix can be chosen [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets), and the columns of $P$ form an orthonormal basis. This is a stronger conclusion than ordinary diagonalizability — the diagonalizing basis is not just independent but orthonormal, which simplifies [projections](!/linear-algebra/orthogonality/projections), [least squares](!/linear-algebra/orthogonality/least-squares), and numerical computation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Worked Example: Full Basis Change`,
//     content: `Let $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. Find a diagonalization $A = PDP^{-1}$.

// The characteristic polynomial is $\\det(A - \\lambda I) = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. Eigenvalues: $\\lambda_1 = 2$, $\\lambda_2 = 5$.

// For $\\lambda_1 = 2$: $(A - 2I)\\mathbf{v} = \\mathbf{0}$ gives $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, so $\\mathbf{v}_1 = (1, -2)$.

// For $\\lambda_2 = 5$: $(A - 5I)\\mathbf{v} = \\mathbf{0}$ gives $\\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, so $\\mathbf{v}_2 = (1, 1)$.

// $$P = \\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$$

// Verification: $P^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$, and $PDP^{-1} = \\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}\\frac{1}{3}\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix} = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix} = A$.

// Application: $A^{10} = PD^{10}P^{-1} = P\\begin{pmatrix} 2^{10} & 0 \\\\ 0 & 5^{10} \\end{pmatrix}P^{-1} = P\\begin{pmatrix} 1024 & 0 \\\\ 0 & 9765625 \\end{pmatrix}P^{-1}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Why Basis Choice Matters`,
//     content: `The standard basis is the default, but it is rarely the best choice for a given problem.

// An [eigenvector](!/linear-algebra/eigen) basis diagonalizes the matrix, reducing powers and exponentials to operations on diagonal entries. A system of differential equations $\\mathbf{x}' = A\\mathbf{x}$ decouples into independent scalar equations when $A$ is diagonal.

// An [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) basis simplifies [projections](!/linear-algebra/orthogonality/projections) and [least-squares](!/linear-algebra/orthogonality/least-squares) computations. Coordinates relative to an orthonormal basis are computed by dot products rather than by solving systems, and numerical errors are minimized because the change-of-basis matrix has condition number $1$.

// A Jordan basis achieves the simplest possible form for non-diagonalizable matrices, isolating the defective eigenvalues into small blocks.

// Choosing the right basis is often the key insight that converts a hard problem into an easy one. The transformation does not change — only its numerical description does — but the right description can make all the difference between a tractable computation and an intractable one.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: Matrix Structure → Canonical Form`,
//     content: `The strategic-basis discussion above was organized by which kind of basis you choose. Reading the page in the other direction — starting from what you know about the matrix and asking what form it can be reduced to — gives a recognition guide for similarity transformations. The table below collects the standard canonical forms: when a matrix's structure permits a stronger reduction, similarity can deliver it; when no diagonalization exists, similarity still delivers the Jordan form (over ℝ or ℂ) and Schur form (always available over ℂ). It is the lookup card to consult when a specific A is in front of you and the question is how far similarity can simplify it.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



// tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj9 aggregation, obj10 summary capstone)

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `The Problem`,
    content: `A linear transformation $T: V \\to V$ is a fixed geometric object — it sends each vector to a definite image regardless of how coordinates are assigned. But the [matrix](!/linear-algebra/transformations/matrix-representation) that represents $T$ depends on the choice of [basis](!/linear-algebra/vector-spaces). Different bases assign different coordinates to the same vectors, and the matrix that converts input coordinates to output coordinates changes accordingly.

This raises a natural question: if $T$ has matrix $A$ in one basis and matrix $A'$ in another, how are $A$ and $A'$ related? The answer is the similarity relation $A' = P^{-1}AP$, where $P$ is the change-of-basis matrix. Understanding this relation is the key to choosing bases strategically — picking the basis that makes the matrix as simple as possible.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Change-of-Basis Matrix`,
    content: `If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ converts $\\mathcal{B}$-coordinates to $\\mathcal{C}$-coordinates:

$$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_\\mathcal{B}$$

Column $j$ of $P$ is the $\\mathcal{C}$-coordinate vector of the $j$-th basis vector of $\\mathcal{B}$. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P^{-1}$.

## Worked Example

In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of the $\\mathcal{B}$-basis vectors are just their components: $(1, 1)$ and $(1, -1)$. So

$$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$

To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (5, 1)$: solve $P\\mathbf{c} = (5, 1)$. Using $P^{-1} = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}$, we get $\\mathbf{c} = (3, 2)$. So $\\mathbf{v} = 3(1, 1) + 2(1, -1)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Similarity Relation`,
    content: `If $T: V \\to V$ has matrix $A$ in basis $\\mathcal{B}$ and matrix $A'$ in basis $\\mathcal{C}$, then

@academic[formula_callout:Similarity Relation
$$A' = P^{-1}AP$$
/linear-algebra/formulas#similarity_relation]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

where $P = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ is the change-of-basis matrix from $\\mathcal{B}$ to $\\mathcal{C}$.

The derivation is direct. For any vector $\\mathbf{v}$, the transformation in $\\mathcal{B}$-coordinates reads $[T(\\mathbf{v})]_\\mathcal{B} = A[\\mathbf{v}]_\\mathcal{B}$. Converting to $\\mathcal{C}$-coordinates: $[T(\\mathbf{v})]_\\mathcal{C} = P^{-1}[T(\\mathbf{v})]_\\mathcal{B} = P^{-1}A[\\mathbf{v}]_\\mathcal{B} = P^{-1}AP[\\mathbf{v}]_\\mathcal{C}$. Since this holds for every $\\mathbf{v}$, the matrix of $T$ in basis $\\mathcal{C}$ is $P^{-1}AP$.

Two matrices related by $A' = P^{-1}AP$ for some invertible $P$ are called similar. Similarity is an equivalence relation: every matrix is similar to itself ($P = I$), similarity is symmetric ($A' = P^{-1}AP$ implies $A = PA'P^{-1}$), and it is transitive.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Properties Preserved by Similarity`,
    content: `Similar matrices represent the same transformation, so they share every property that is intrinsic to the transformation rather than to a particular coordinate system. Formally:

@academic[formula_callout:Similarity Invariants
$$A' = P^{-1}AP \\Rightarrow \\begin{cases} \\det(A') = \\det(A) \\\\ \\text{tr}(A') = \\text{tr}(A) \\\\ \\text{rank}(A') = \\text{rank}(A) \\\\ \\text{eigenvalues}(A') = \\text{eigenvalues}(A) \\end{cases}$$
/linear-algebra/formulas#similarity_invariants]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The [determinant](!/linear-algebra/determinants) is preserved: $\\det(P^{-1}AP) = \\det(P^{-1})\\det(A)\\det(P) = \\det(A)$.

The [trace](!/linear-algebra/matrix/trace) is preserved: $\\text{tr}(P^{-1}AP) = \\text{tr}(APP^{-1}) = \\text{tr}(A)$ by the cyclic property.

The [eigenvalues](!/linear-algebra/eigen) are preserved: $\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$, so the characteristic polynomial — and therefore all eigenvalues with their multiplicities — is the same.

The [rank](!/linear-algebra/matrix/rank) is preserved: multiplying by invertible matrices cannot change the rank.

Individual matrix entries, symmetry, and sparsity are generally not preserved. A [symmetric](!/linear-algebra/matrix/types) matrix $A$ can become non-symmetric under $P^{-1}AP$ if $P$ is not [orthogonal](!/linear-algebra/matrix/types).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Diagonalization as a Change of Basis`,
    content: `If $T$ has $n$ [linearly independent](!/linear-algebra/vector-spaces/linear-independence) eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ with eigenvalues $\\lambda_1, \\dots, \\lambda_n$, use them as the basis $\\mathcal{B}$. In this eigenvector basis, $T$ acts by scaling each basis vector:

$$T(\\mathbf{v}_i) = \\lambda_i \\mathbf{v}_i$$

The matrix of $T$ in this basis is diagonal: $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$.

The change-of-basis matrix $P$ has the eigenvectors as columns. The similarity relation then gives the diagonalization:

@academic[formula_callout:Diagonalization Formula
$$A = PDP^{-1}, \\quad D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n), \\quad P = [\\mathbf{v}_1 \\;\\cdots\\; \\mathbf{v}_n]$$
/linear-algebra/formulas#diagonalization_formula]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Equivalently, $D = P^{-1}AP$.

[Diagonalization](!/linear-algebra/eigen/diagonalization) is the most powerful application of basis change. It reduces matrix powers to diagonal powers: $A^k = PD^kP^{-1} = P\\,\\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)\\,P^{-1}$. It simplifies differential equations, recurrence relations, and any computation involving repeated application of the same transformation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `When Diagonalization Fails`,
    content: `Not every matrix is diagonalizable. A transformation may not have $n$ linearly independent eigenvectors — this happens when the geometric multiplicity of some eigenvalue is strictly less than its algebraic multiplicity.

For example, $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ has eigenvalue $\\lambda = 2$ with algebraic multiplicity $2$, but the eigenspace is one-dimensional (spanned by $(1, 0)$). There is no basis of eigenvectors, so $A$ cannot be diagonalized.

In such cases, the best achievable form under similarity is the Jordan normal form: a block-diagonal matrix where each block is an upper triangular matrix with a single eigenvalue on the diagonal and ones on the superdiagonal. The Jordan form is unique up to ordering of blocks and is the canonical representative of the similarity class. Its full development belongs to advanced linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Orthogonal Similarity`,
    content: `When the change-of-basis matrix $P$ is [orthogonal](!/linear-algebra/matrix/types) ($P^{-1} = P^T$), the similarity relation becomes $A' = P^TAP$. This is called orthogonal similarity.

Orthogonal similarity preserves more than ordinary similarity. If $A$ is [symmetric](!/linear-algebra/matrix/types), then $P^TAP$ is also symmetric — a property that ordinary similarity does not guarantee.

The Spectral Theorem states that every real symmetric matrix is orthogonally similar to a diagonal matrix. The eigenvectors of a symmetric matrix can be chosen [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets), and the columns of $P$ form an orthonormal basis. This is a stronger conclusion than ordinary diagonalizability — the diagonalizing basis is not just independent but orthonormal, which simplifies [projections](!/linear-algebra/orthogonality/projections), [least squares](!/linear-algebra/orthogonality/least-squares), and numerical computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Worked Example: Full Basis Change`,
    content: `Let $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. Find a diagonalization $A = PDP^{-1}$.

The characteristic polynomial is $\\det(A - \\lambda I) = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. Eigenvalues: $\\lambda_1 = 2$, $\\lambda_2 = 5$.

For $\\lambda_1 = 2$: $(A - 2I)\\mathbf{v} = \\mathbf{0}$ gives $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, so $\\mathbf{v}_1 = (1, -2)$.

For $\\lambda_2 = 5$: $(A - 5I)\\mathbf{v} = \\mathbf{0}$ gives $\\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, so $\\mathbf{v}_2 = (1, 1)$.

$$P = \\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$$

Verification: $P^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$, and $PDP^{-1} = \\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}\\frac{1}{3}\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix} = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix} = A$.

Application: $A^{10} = PD^{10}P^{-1} = P\\begin{pmatrix} 2^{10} & 0 \\\\ 0 & 5^{10} \\end{pmatrix}P^{-1} = P\\begin{pmatrix} 1024 & 0 \\\\ 0 & 9765625 \\end{pmatrix}P^{-1}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Why Basis Choice Matters`,
    content: `The standard basis is the default, but it is rarely the best choice for a given problem.

An [eigenvector](!/linear-algebra/eigen) basis diagonalizes the matrix, reducing powers and exponentials to operations on diagonal entries. A system of differential equations $\\mathbf{x}' = A\\mathbf{x}$ decouples into independent scalar equations when $A$ is diagonal.

An [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) basis simplifies [projections](!/linear-algebra/orthogonality/projections) and [least-squares](!/linear-algebra/orthogonality/least-squares) computations. Coordinates relative to an orthonormal basis are computed by dot products rather than by solving systems, and numerical errors are minimized because the change-of-basis matrix has condition number $1$.

A Jordan basis achieves the simplest possible form for non-diagonalizable matrices, isolating the defective eigenvalues into small blocks.

Choosing the right basis is often the key insight that converts a hard problem into an easy one. The transformation does not change — only its numerical description does — but the right description can make all the difference between a tractable computation and an intractable one.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Summary: Matrix Structure → Canonical Form`,
    content: `The strategic-basis discussion above was organized by which kind of basis you choose. Reading the page in the other direction — starting from what you know about the matrix and asking what form it can be reduced to — gives a recognition guide for similarity transformations. The table below collects the standard canonical forms: when a matrix's structure permits a stronger reduction, similarity can deliver it; when no diagonalization exists, similarity still delivers the Jordan form (over ℝ or ℂ) and Schur form (always available over ℂ). It is the lookup card to consult when a specific A is in front of you and the question is how far similarity can simplify it.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Same Transformation, Different Matrix`,
  content: `The same linear transformation has different matrix representations in different bases. Changing the basis changes the numbers but not the map itself. The relationship between two matrix representations of the same transformation is similarity — and choosing the right basis is how difficult matrices become simple ones.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a change-of-basis matrix?",
    answer: "The change-of-basis matrix P converts coordinates from one basis to another. Column j of P is the coordinate vector of the j-th basis vector of the source basis expressed in the target basis. The inverse P⁻¹ converts in the reverse direction.",
    sectionId: "2"
  },
  obj2: {
    question: "What does it mean for two matrices to be similar?",
    answer: "Two matrices A and A' are similar if A' = P⁻¹AP for some invertible matrix P. Similar matrices represent the same linear transformation in different bases. They share the same determinant, trace, eigenvalues, characteristic polynomial, and rank.",
    sectionId: "3"
  },
  obj3: {
    question: "What properties are preserved by similarity?",
    answer: "Similar matrices share every property intrinsic to the transformation: determinant, trace, eigenvalues with multiplicities, characteristic polynomial, and rank. Individual entries, symmetry, and sparsity are generally not preserved unless the change-of-basis matrix has special structure.",
    sectionId: "4"
  },
  obj4: {
    question: "How is diagonalization a change of basis?",
    answer: "Diagonalization uses eigenvectors as the new basis. In this basis, the transformation acts by scaling each basis vector by its eigenvalue, so the matrix becomes diagonal: D = P⁻¹AP where P has eigenvectors as columns. This reduces powers to A^k = PD^kP⁻¹.",
    sectionId: "5"
  },
  obj5: {
    question: "What is orthogonal similarity?",
    answer: "Orthogonal similarity uses an orthogonal change-of-basis matrix P (where P⁻¹ = Pᵀ), giving A' = PᵀAP. It preserves symmetry and is the basis of the spectral theorem: every real symmetric matrix is orthogonally similar to a diagonal matrix of its eigenvalues.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Change of Basis and Similarity",
    "description": "Change of basis in linear algebra: coordinate conversion, similar matrices, similarity invariants, diagonalization as basis change, orthogonal similarity, and Jordan normal form.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/basis-change",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Change of Basis"
    },
    "teaches": [
      "Change-of-basis matrix and coordinate conversion",
      "Similarity relation A' = P⁻¹AP",
      "Properties preserved by similarity",
      "Diagonalization as eigenvector basis change",
      "Non-diagonalizable matrices and Jordan form",
      "Orthogonal similarity and the spectral theorem",
      "Strategic basis choice for simplifying computations"
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
        "name": "Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Change of Basis",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/basis-change"
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
    obj4Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Change of Basis & Similarity | Learn Math Class",
      description: "Change of basis in linear algebra: coordinate conversion, similar matrices, similarity invariants, diagonalization as basis change, orthogonal similarity, and Jordan normal form.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/basis-change",
      name: "Change of Basis and Similarity"
    },
  }
}
   }

export default function BasisChangePage({seoData, sectionsContent, introContent, obj4Table, obj9Table, summaryTable, faqQuestions, schemas}) {

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
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Change of Basis</h1>
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