
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import svdDiagrams from '@/app/components/linear-algebra copy/matrix/svdDiagrams'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import DecisionBox from '@/app/components/infographics/DecisionMaker/DecisionBox'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'


export async function getStaticProps(){
const keyWords = [
  "matrix decompositions",
  "matrix factorization",
  "LU decomposition",
  "QR decomposition",
  "Cholesky decomposition",
  "spectral decomposition",
  "singular value decomposition",
  "SVD linear algebra",
  "triangular factorization",
  "orthogonal factorization",
  "choosing matrix decomposition",
  "matrix factorization comparison",
  "decompositions linear algebra",
  "diagonal factorization"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj8 — comparison (decision matrix): problem → decomposition
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Problem / Matrix context</th>
      <th style="${tableHeaders.comparison}">Best decomposition</th>
      <th style="${tableHeaders.comparison}">Why</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General square system, one or many right-hand sides</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/decompositions/lower-upper" style="${linkStyle}">LU</a> (with pivoting if needed)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor once, then cheap forward/back substitution per right-hand side</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric positive definite system</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/decompositions/cholesky" style="${linkStyle}">Cholesky</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">half the cost of LU, no pivoting required, doubles as a definiteness test</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Least squares / overdetermined system</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">avoids the condition-number squaring of the normal equations</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric eigenvalue problem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/decompositions/spectral" style="${linkStyle}">Spectral</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">guarantees real eigenvalues and an orthogonal eigenvector basis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Rectangular, rank-deficient, or unknown structure</td>
      <td style="padding: 12px 15px; color: #34495e;"><a href="/linear-algebra/decompositions/svd" style="${linkStyle}">SVD</a></td>
      <td style="padding: 12px 15px; color: #34495e;">universal — exists for every matrix; reveals rank, pseudoinverse, low-rank approximation, and condition number</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — summary capstone: 5 decompositions side by side
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Decomposition</th>
      <th style="${tableHeaders.summary} text-align: center;">Form</th>
      <th style="${tableHeaders.summary}">Matrix requirement</th>
      <th style="${tableHeaders.summary}">Factor structure</th>
      <th style="${tableHeaders.summary}">Key application</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/lower-upper" style="${linkStyle}">LU</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">A = LU  (or PA = LU)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">square; pivoting handles general invertible</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">L lower triangular, U upper triangular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solving linear systems, especially with multiple right-hand sides</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">A = QR</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any m × n with linearly independent columns</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Q with orthonormal columns, R upper triangular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">least squares; iterative algorithm for eigenvalues</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/cholesky" style="${linkStyle}">Cholesky</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">A = LL<sup>T</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">symmetric positive definite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">L lower triangular with positive diagonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">SPD systems at half LU cost; positive-definiteness test</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/spectral" style="${linkStyle}">Spectral</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">A = QDQ<sup>T</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">real symmetric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Q orthogonal (eigenvectors), D diagonal of eigenvalues</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">symmetric eigenproblems, quadratic forms, PCA</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/svd" style="${linkStyle}">SVD</a></td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">A = UΣV<sup>T</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">any m × n — no restriction</td>
      <td style="padding: 12px 15px; color: #34495e;">U, V orthogonal; Σ diagonal of non-negative singular values</td>
      <td style="padding: 12px 15px; color: #34495e;">rank, pseudoinverse, low-rank approximation, condition number</td>
    </tr>
  </tbody>
</table>
`

// Concept introduction (section 1, "What a Decomposition Is") — template A,
// definition last. Running instance: A = [[2, 1], [4, 3]] = LU. Old obj1 text
// is kept in sectionsContent.obj1, unused; its four passages and the fact
// aside are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciLuTable = ciTableOpen(['question', 'read from L and U', 'checked on A']) +
  ciRow(['determinant', '1 · (2 · 1) = 2', '2 · 3 − 1 · 4 = 2']) +
  ciRow(['solve Ax = b', 'Ly = b, then Ux = y — two substitutions', 'the same x'], { shade: true }) +
  ciRow(['new right-hand side', 'reuse L and U, no new factoring', 'the same answer'], { last: true, color: '#2563EB', cols: [1] }) +
  '</tbody></table>'

const sectionsContent = {
  obj1: {
    title: `What a Decomposition Is`,
    content: `A matrix decomposition (or factorization) expresses a [matrix](!/linear-algebra/matrix) $A$ as a product of two or more matrices with known, exploitable structure. The factors are typically [triangular](!/linear-algebra/matrix/types), [diagonal](!/linear-algebra/matrix/types), or [orthogonal](!/linear-algebra/matrix/types) — matrices for which solving systems, computing [determinants](!/linear-algebra/determinants), and extracting [eigenvalues](!/linear-algebra/eigen) are either trivial or dramatically simplified.

@academic[fact,aside:true,width:35%:A way of working made the top ten
In 2000 the journal Computing in Science and Engineering named the ten algorithms most influential on 20th-century science. One entry was not a single algorithm but the decompositional approach itself, formalized by Alston Householder in 1951: factor the matrix, then reuse the factors.]@

A decomposition does not change the matrix. It reveals the internal structure of $A$ by splitting it into interpretable components. The product of the factors always reproduces $A$ exactly — the information is rearranged, not altered.

Every decomposition represents a trade: an upfront cost to compute the factors, followed by cheap operations that use them. The factorization is done once; the payoff is reaped every time the factors are applied.

The same factors serve many different questions. A single LU factorization solves a system for any right-hand side, gives the determinant from the diagonal of $U$, and builds the inverse column by column; a single SVD gives the rank, the pseudoinverse and the best low-rank approximation at once. The work goes into finding the structure, and the answers are then read off it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Why Decompositions Matter`,
    content: `Decompositions transform hard problems into sequences of easy ones.

Solving [linear systems](!/linear-algebra/linear-systems): the [LU decomposition](!/linear-algebra/decompositions/lower-upper) converts a single factorization into cheap triangular solves for any number of right-hand sides. The [Cholesky decomposition](!/linear-algebra/decompositions/cholesky) does the same at half the cost when the matrix is symmetric positive definite.

[Least squares](!/linear-algebra/orthogonality/least-squares): the [QR decomposition](!/linear-algebra/decompositions/qr) avoids squaring the condition number, providing a numerically stable solution to overdetermined systems.

Eigenvalue computation: the QR algorithm — an iterative process built on repeated QR factorizations — is the standard method for finding eigenvalues of general matrices, entirely avoiding the characteristic polynomial.

Dimensionality reduction: the [singular value decomposition](!/linear-algebra/decompositions/svd) identifies the most important directions in the data and discards the rest, enabling compression, noise removal, and low-rank approximation.

Numerical stability: orthogonal factors ($Q$ in QR, $U$ and $V$ in SVD) preserve lengths and condition numbers, keeping rounding errors under control throughout the computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `LU Decomposition`,
    content: `The [LU decomposition](!/linear-algebra/decompositions/lower-upper) factors a square matrix as $A = LU$ (or $PA = LU$ with row pivoting), where $L$ is lower triangular and $U$ is upper triangular. It captures the entire process of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) in matrix form: $U$ is the [echelon form](!/linear-algebra/linear-systems/echelon-form), and $L$ stores the multipliers used during elimination.

Solving $A\\mathbf{x} = \\mathbf{b}$ reduces to two triangular substitutions — forward ($L\\mathbf{y} = \\mathbf{b}$) then backward ($U\\mathbf{x} = \\mathbf{y}$) — each costing $O(n^2)$. The factorization itself costs $\\frac{2}{3}n^3$, but each additional right-hand side costs only $O(n^2)$. For $k$ systems sharing the same coefficient matrix, LU amortizes the dominant cost over all $k$ solves.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `QR Decomposition`,
    content: `The [QR decomposition](!/linear-algebra/decompositions/qr) factors an $m \\times n$ matrix as $A = QR$, where $Q$ has [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is upper triangular. It is produced by the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt), by Householder reflections, or by Givens rotations.

QR is the standard method for least-squares problems: the normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ simplify to the triangular system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$, avoiding the condition-number-squaring that comes from forming $A^TA$ directly.

The QR algorithm for eigenvalues — an iterative scheme that repeatedly factors and recombines — converges to the eigenvalues of a general matrix without computing the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation). It is the dominant eigenvalue algorithm in numerical software.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Cholesky Decomposition`,
    content: `The [Cholesky decomposition](!/linear-algebra/decompositions/cholesky) factors a [symmetric](!/linear-algebra/matrix/types) positive definite matrix as $A = LL^T$, where $L$ is lower triangular with positive diagonal entries. It exists if and only if $A$ is symmetric positive definite — all [eigenvalues](!/linear-algebra/eigen) strictly positive and $A = A^T$.

Cholesky exploits symmetry to achieve half the cost of LU: $\\frac{1}{3}n^3$ versus $\\frac{2}{3}n^3$. Only the lower triangle of $A$ is read, and only $L$ is computed — the upper factor $L^T$ is just the transpose.

@academic[rule_theorem_plain:Cholesky requires no pivoting. Positive definiteness guarantees that every diagonal entry encountered during the algorithm is strictly positive, so no zero pivots can occur.]@

If the algorithm breaks down (a non-positive value under the square root), the matrix is not positive definite — the decomposition doubles as a definiteness test.

@academic[pitfall,aside:true,width:35%:Applying Cholesky to any symmetric matrix
Starting Cholesky on the symmetric $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$ gives $l_{11} = 1$, $l_{21} = 2$, then $l_{22}^2 = 1 - 4 = -3$, with no real square root. The eigenvalues of $A$ are $3$ and $-1$, so it is not positive definite and has no Cholesky factor.
[Read more](!#pitfalls)]@

The two conditions are checked in different ways. Symmetry can be read directly from the entries, since each $a_{ij}$ must equal $a_{ji}$. Positive definiteness cannot be seen entry by entry: it is a property of the whole matrix, carried by the signs of its eigenvalues or, equivalently, of its leading principal minors.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Spectral Decomposition`,
    content: `The [spectral decomposition](!/linear-algebra/decompositions/spectral) factors a real symmetric matrix as $A = QDQ^T$, where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $D$ is diagonal. This is the [diagonalization](!/linear-algebra/eigen/diagonalization) of a symmetric matrix, with the additional guarantee that the diagonalizing matrix $Q$ is orthogonal — not merely [invertible](!/linear-algebra/matrix/inverse).

@academic[pitfall,aside:true,width:35%:Using the spectral form on a non-symmetric matrix
For $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}$, with eigenvalues $2$ and $1$ and unit eigenvectors as the columns of $Q$, the product is $QDQ^T = \\begin{pmatrix} 5/2 & -1/2 \\\\ -1/2 & 1/2 \\end{pmatrix} \\neq A$. These eigenvectors are not orthogonal, so the factorization is $A = PDP^{-1}$.
[Read more](!#pitfalls)]@

In outer product form, $A = \\lambda_1 \\mathbf{q}_1\\mathbf{q}_1^T + \\lambda_2 \\mathbf{q}_2\\mathbf{q}_2^T + \\cdots + \\lambda_n \\mathbf{q}_n\\mathbf{q}_n^T$. Each term is the eigenvalue times the [projection](!/linear-algebra/orthogonality/projections) matrix onto the corresponding eigenvector direction. The matrix is decomposed into a sum of independent rank-one projections, weighted by eigenvalues.

The spectral decomposition is the foundation of quadratic form analysis, principal component analysis, and the classification of symmetric matrices as positive definite, positive semi-definite, or indefinite.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Singular Value Decomposition`,
    content: `The [singular value decomposition](!/linear-algebra/decompositions/svd) factors any $m \\times n$ matrix as $A = U\\Sigma V^T$, where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with non-negative entries (the singular values). It exists for every matrix of every shape and every [rank](!/linear-algebra/matrix/rank).

The SVD is the most informative factorization in linear algebra. The number of nonzero singular values equals the rank. The columns of $U$ and $V$ provide orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The pseudoinverse is $A^+ = V\\Sigma^+ U^T$. The best rank-$k$ approximation to $A$ is obtained by truncating the SVD at $k$ terms. The [condition number](!/linear-algebra/matrix/rank) is $\\sigma_1/\\sigma_r$.

@academic[pitfall,aside:true,width:35%:Counting nonzero eigenvalues for the rank
Both eigenvalues of $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ are $0$, which suggests rank $0$. Its singular values are $1$ and $0$, so the rank is $1$, as the nonzero column shows.
[Read more](!#pitfalls)]@

Geometrically, every [linear transformation](!/linear-algebra/transformations) is a rotation or reflection ($V^T$), followed by a coordinate-axis scaling ($\\Sigma$), followed by another rotation or reflection ($U$). The SVD makes this decomposition explicit.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Choosing the Right Decomposition`,
    content: `The choice of decomposition depends on the matrix structure and the question being asked.

For a square invertible system with one or many right-hand sides, LU is the standard choice — factor once, solve cheaply. For a symmetric positive definite system, Cholesky is faster and more stable. For a [least-squares](!/linear-algebra/orthogonality/least-squares) problem or an overdetermined system, QR avoids condition-number issues. For [eigenvalues](!/linear-algebra/eigen) of a symmetric matrix, the spectral decomposition gives real eigenvalues and orthogonal eigenvectors. For rank determination, the pseudoinverse, low-rank approximation, or any problem where the matrix may be rectangular or rank-deficient, the SVD is the universal tool.

More specialized decompositions exist for more specialized structures. Banded matrices have banded LU factors. Sparse matrices benefit from fill-reducing permutations. Iterative methods (Krylov subspace methods) avoid explicit factorization entirely for very large systems. But the five decompositions on this page cover the vast majority of problems encountered in a standard linear algebra course and in applied work.

The decision compresses into a single lookup keyed on the type of problem at hand.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Relationships Between Decompositions`,
    content: `The five decompositions are not independent — each can be viewed as a refinement or generalization of another.

LU is [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) recorded as a matrix product. QR is [Gram-Schmidt](!/linear-algebra/orthogonality/gram-schmidt) recorded as a matrix product. Cholesky is the symmetric-positive-definite specialization of LU: when $A = A^T$ with positive eigenvalues, the factorization $A = LDL^T$ compresses into $A = LL^T$ by absorbing $\\sqrt{D}$ into $L$.

The spectral decomposition is eigendecomposition restricted to symmetric matrices, where the eigenvector matrix is guaranteed to be orthogonal. The SVD generalizes the spectral decomposition to non-symmetric and non-square matrices: for a symmetric positive semi-definite matrix, the SVD and spectral decomposition coincide.

Each decomposition occupies a specific niche — defined by the matrix structure it requires and the information it provides — but they are all connected through the common themes of triangularity, orthogonality, and diagonality.`,
    before: ``,
    after: ``,
    link: ``,
  },
  // NEW capstone section: obj10
  obj10: {
    title: `Summary: The Five Decompositions Side by Side`,
    content: `The five decompositions covered above admit a single side-by-side comparison along four structural attributes: the algebraic form, the kind of matrix each one accepts, the structure of the factors it produces, and the primary application it enables. The table below collects this comparison as one reference card — useful both for orienting a new problem to the right factorization and for seeing how the family of decompositions is organized as a whole.`,
    before: ``,
    after: ``,
    link: ``,
  },
  pitfalls: {
    title: `Common Pitfalls`,
    content: `Three mistakes come from using a decomposition outside the conditions it needs, or from reading the wrong numbers off it. Each is marked with a box where it happens in the sections above; here each is worked through in full.

**Applying Cholesky to any symmetric matrix**

A symmetric matrix is factored as $A = LL^T$ because it is symmetric, without checking that it is positive definite. The algorithm then reaches a negative number under a square root, or the sign is quietly dropped to keep going.

Wrong working: for $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$, $l_{11} = \\sqrt{1} = 1$ and $l_{21} = 2/1 = 2$, then $l_{22} = \\sqrt{1 - 2^2} = \\sqrt{-3}$. Taking $l_{22} = \\sqrt{3}$ instead gives
$$LL^T = \\begin{pmatrix} 1 & 0 \\\\ 2 & \\sqrt{3} \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 0 & \\sqrt{3} \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 2 & 7 \\end{pmatrix} \\neq A$$

Right working: test definiteness first. The leading principal minors are $1 > 0$ and $\\det A = 1 - 4 = -3 < 0$, and the eigenvalues are $3$ and $-1$, so $A$ is indefinite and has no Cholesky factor. LU still works:
$$A = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 0 & -3 \\end{pmatrix}$$
and the negative pivot $-3$ is the same sign of trouble.

Why it happens: Cholesky is introduced as the symmetric version of LU, and symmetry is the condition that can be seen at a glance. Positive definiteness is the half of the requirement that has to be computed.

How to check: every leading principal minor must be positive. Multiplying $LL^T$ back must also return $A$ exactly.

**Using the spectral form on a non-symmetric matrix**

A diagonalizable matrix that is not symmetric is written as $A = QDQ^T$, with its unit eigenvectors as the columns of $Q$, as if $Q^T$ were the inverse of $Q$.

Wrong working: $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}$ has eigenvalue $2$ with unit eigenvector $(1, 0)$ and eigenvalue $1$ with unit eigenvector $\\frac{1}{\\sqrt{2}}(1, -1)$. Then
$$QDQ^T = 2\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} + \\frac{1}{2}\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 5/2 & -1/2 \\\\ -1/2 & 1/2 \\end{pmatrix} \\neq A$$

Right working: the eigenvectors are not orthogonal, so the inverse must be computed. With $P = \\begin{pmatrix} 1 & 1 \\\\ 0 & -1 \\end{pmatrix}$, $P^{-1} = P$ and
$$PDP^{-1} = \\begin{pmatrix} 1 & 1 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix} = A$$

Why it happens: the spectral decomposition and ordinary diagonalization have the same shape, and $Q^T = Q^{-1}$ is easy to apply without noticing that it needs orthonormal columns.

How to check: $QDQ^T$ is always symmetric, so it can never equal a non-symmetric $A$. The dot product of the two eigenvectors here is $1/\\sqrt{2}$, not $0$.

**Counting nonzero eigenvalues for the rank**

The rank is read off as the number of nonzero eigenvalues instead of the number of nonzero singular values.

Wrong working: $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ has characteristic polynomial $\\lambda^2$, so both eigenvalues are $0$, and the count gives rank $0$.

Right working: $A^TA = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$ has eigenvalues $0$ and $1$, so the singular values are $\\sigma_1 = 1$ and $\\sigma_2 = 0$. One is nonzero, and the rank is $1$.

Why it happens: for symmetric matrices, and for diagonalizable ones in general, the two counts agree, so the shortcut works on most examples met first. A matrix that cannot be diagonalized breaks it.

How to check: rank $0$ belongs only to the zero matrix. A matrix with any nonzero entry has rank at least $1$.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `Factoring Matrices into Simpler Pieces`,
  content: `A matrix decomposition writes a matrix as a product of simpler matrices — triangular, diagonal, orthogonal, or some combination — whose structure makes subsequent computation cheap. The upfront cost of factoring is repaid every time the factors are used to solve a system, compute eigenvalues, approximate data, or analyze stability. Decompositions are the computational backbone of applied linear algebra.`,
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Matrix Decompositions",
    "description": "Overview of matrix decompositions: LU, QR, Cholesky, spectral, and SVD. When to use each factorization, computational costs, relationships between decompositions, and applications.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions",
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
      "name": "Matrix Decompositions"
    },
    "teaches": [
      "What matrix decompositions are and why they matter",
      "LU decomposition for system solving",
      "QR decomposition for least squares and eigenvalues",
      "Cholesky decomposition for symmetric positive definite matrices",
      "Spectral decomposition for symmetric eigenproblems",
      "SVD as the universal matrix factorization",
      "Choosing the right decomposition for a given problem",
      "Side-by-side comparison of all five decompositions on form, requirements, factor structure, and key applications"
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
        "name": "Matrix Decompositions",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const conceptIntroFigures = {
    luTable: ciLuTable,
  };

  const demoUnits = {
    // Hub page: one unit, on the decomposition that applies to every
    // matrix and therefore anchors the comparison the page is making.
    svd: demoUnitFrame({
      svg: svdDiagrams.factor,
      caption: 'The one factorisation every matrix has',
      text: 'Two orthogonal factors with a rectangular diagonal between them. Of the five decompositions catalogued on this page, this is the only one that demands nothing of its input &#8212; no squareness, no symmetry, no positive definiteness, no full set of eigenvectors. Compare its cost against the others on the',
      href: '/linear-algebra/visual-tools/singular-value-decomposition',
      linkText: 'SVD visualizer',
    }),
  };

  const decompositionTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Five ways to factor a matrix',
    preface: 'Each decomposition writes a matrix as a product of simpler pieces. They differ in which matrices they accept and what they are used for.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Pick by the matrix you have',
    conclusion: 'Cholesky and the spectral decomposition need symmetric matrices; the SVD accepts any matrix of any shape.',
    root: { name: 'Matrix decompositions', sub: '5 factorizations' },
    children: [
      { id: 'lu', name: '[LU](!/linear-algebra/decompositions/lower-upper)', symbol: '$A = LU$', items: [
        { label: 'What it is', text: 'Gaussian elimination recorded' },
        { label: 'Cost', text: '$\\frac{2}{3}n^3$ once, then $O(n^2)$ per right-hand side' } ] },
      { id: 'qr', name: '[QR](!/linear-algebra/decompositions/qr)', symbol: '$A = QR$', items: [
        { label: 'Factors', text: '$Q$ orthonormal, $R$ upper triangular' },
        { label: 'Used for', text: 'least squares, the QR eigenvalue algorithm' } ] },
      { id: 'chol', name: '[Cholesky](!/linear-algebra/decompositions/cholesky)', symbol: '$A = LL^T$', flag: true, warn: 'symmetric positive definite only', items: [
        { label: 'Cost', text: 'half of LU, no pivoting' } ] },
      { id: 'spec', name: '[Spectral](!/linear-algebra/decompositions/spectral)', symbol: '$A = QDQ^T$', flag: true, warn: 'real symmetric only', items: [
        { label: 'Meaning', text: 'a sum of rank-one projections' } ] },
      { id: 'svd', name: '[SVD](!/linear-algebra/decompositions/svd)', symbol: '$A = U\\Sigma V^T$', items: [
        { label: 'Accepts', text: 'any matrix of any shape' },
        { label: 'Gives', text: 'rank, pseudoinverse, low-rank approximation' } ] },
    ],
    legend: [{ label: 'decomposition' }, { label: 'restricted to special matrices', tone: 'warn' }],
  };

  // DecisionMaker + DecisionWalker (obj8): decomposition-decision
  const decompositionDecision = {
    header: {
      kicker: 'decompositions',
      title: 'Which decomposition?',
      lede: 'First the question being asked, then the shape and structure of the matrix.',
    },
    start: 'task',
    nodes: {
      task: { question: 'What is the question?', answers: [
        { label: 'Ax = b', to: 'kind' },
        { label: 'least squares', to: 'qr' },
        { label: 'eigenvalues', to: 'spectral' },
        { label: 'rank', to: 'svd' },
      ] },
      kind: { question: 'What kind of matrix?', hint: 'SPD = symmetric positive definite', answers: [
        { label: 'SPD', to: 'cholesky' },
        { label: 'square', to: 'lu' },
        { label: 'other', to: 'svd2' },
      ] },
    },
    outcomes: {
      cholesky: { title: 'Cholesky', action: 'faster and more stable than LU for this case', link: { label: 'Cholesky', href: '/linear-algebra/decompositions#5' } },
      lu: { title: 'LU', action: 'square and invertible: factor once, then solve cheaply for each right-hand side', link: { label: 'LU', href: '/linear-algebra/decompositions#3' } },
      svd2: { title: 'SVD', action: 'rectangular or rank-deficient: the SVD handles any shape and rank', link: { label: 'SVD', href: '/linear-algebra/decompositions#7' } },
      qr: { title: 'QR', action: 'also overdetermined systems; avoids condition-number issues', link: { label: 'QR', href: '/linear-algebra/decompositions#4' } },
      spectral: { title: 'Spectral', action: 'for a symmetric matrix: real eigenvalues, orthogonal eigenvectors', link: { label: 'Spectral', href: '/linear-algebra/decompositions#6' } },
      svd: { title: 'SVD', action: 'rank, pseudoinverse and low-rank approximation', link: { label: 'SVD', href: '/linear-algebra/decompositions#7' } },
    },
    last: [{ label: 'Very large systems', text: 'Iterative (Krylov subspace) methods avoid an explicit factorization altogether.' }],
  };

  // FAQ pass 2026-11-01: new FAQ section (the page had none). Section overview,
  // so only what this page holds and no child page asks: the swap-matrix line
  // and the top-ten fact box (intro), the rank pitfall under the SVD section,
  // the LDL^T line under Relationships and the requirement column of the
  // summary table.
  const faqQuestions = {
    obj1: {
      question: "Does every matrix have an LU decomposition?",
      answer: "No. $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ has none: its first pivot is $0$, so elimination cannot start until the rows are swapped, and that gives $PA = LU$ instead. The other factorizations have conditions too: Cholesky needs a symmetric positive definite matrix, and the spectral decomposition a symmetric one. Only the SVD exists for every matrix of every shape and rank.",
      sectionId: "1"
    },
    obj2: {
      question: "Which decompositions work for a rectangular matrix?",
      answer: "The SVD and QR. The SVD $A = U\\Sigma V^T$ accepts any $m \\times n$ matrix of any rank. QR, as used on this page, needs linearly independent columns, the usual case for a tall least-squares matrix. LU is used here for square systems, and Cholesky and the spectral decomposition need square symmetric matrices. A rank-deficient rectangular matrix therefore goes to the SVD, which also gives its rank, pseudoinverse and best low-rank approximation.",
      sectionId: "10"
    },
    obj3: {
      question: "Can you find the rank of a matrix by counting its nonzero eigenvalues?",
      answer: "No, not in general; count the nonzero singular values instead. $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ has characteristic polynomial $\\lambda^2$, so both eigenvalues are $0$, yet its nonzero column gives rank $1$. Its singular values are $1$ and $0$, and one of them is nonzero. The eigenvalue count does work for symmetric matrices, and for diagonalizable ones in general, which is why it seems reliable on the first examples met.",
      sectionId: "7"
    },
    obj4: {
      question: "How is the Cholesky decomposition related to LU?",
      answer: "It is the symmetric positive definite case of LU. For such a matrix the factorization can be written $A = LDL^T$, with $L$ unit lower triangular and $D$ a diagonal of positive pivots, and multiplying $\\sqrt{D}$ into $L$ gives the Cholesky factor. For $\\begin{pmatrix} 4 & 2 \\\\ 2 & 3 \\end{pmatrix}$, $D$ holds $4$ and $2$, and the Cholesky factor has rows $(2, 0)$ and $(1, \\sqrt{2})$. Using the symmetry halves the cost: $\\frac{1}{3}n^3$ against $\\frac{2}{3}n^3$.",
      sectionId: "9"
    },
    obj5: {
      question: "Is matrix decomposition one of the top ten algorithms of the 20th century?",
      answer: "Yes, as a way of working rather than a single algorithm. In 2000 the journal Computing in Science and Engineering named the ten algorithms most influential on 20th-century science, and one entry was the decompositional approach to matrix computation, formalized by Alston Householder in 1951: factor the matrix once, then reuse the factors. One LU factorization, for example, solves $A\\mathbf{x} = \\mathbf{b}$ for any right-hand side and gives the determinant from the diagonal of $U$.",
      sectionId: "1"
    }
  }

  return {
  props:{
    faqQuestions,
    decompositionDecision,
    decompositionTree,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj8Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Matrix Decompositions: LU, QR, SVD & More | Learn Math Class",
      description: "Overview of matrix decompositions: LU, QR, Cholesky, spectral, and SVD. When to use each factorization, computational costs, relationships between decompositions, and applications.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions",
      name: "Matrix Decompositions"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function DecompositionsPage({faqQuestions, decompositionDecision, decompositionTree,
  seoData,
  sectionsContent,
  introContent,
  obj8Table,
  summaryTable,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Some matrices make every job easy: a triangular system is solved by substitution, and its determinant is the product of the diagonal.`,
        content: [
          `Most matrices are not like that. $A = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$ has no zeros to exploit.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Yet A is the product of two triangular matrices — and they answer the questions asked of A.`,
        content: [
          `$$A = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix} = LU$$`,
          ciTable('luTable'),
          `Every answer read from $L$ and $U$ is an answer about $A$, because their product is $A$.`,
        ],
      },
      {
        id: 'pattern',
        lead: `Splitting A into structured factors turns hard questions into easy ones, and A itself is unchanged.`,
        content: [
          `A decomposition does not change the matrix. It reveals the internal structure of $A$ by splitting it into interpretable components. The product of the factors always reproduces $A$ exactly — the information is rearranged, not altered.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A **matrix decomposition** writes a matrix $A$ as a product of matrices with known structure — triangular, diagonal or orthogonal — whose product is exactly $A$.`,
        formula: [
          `A matrix decomposition (or factorization) expresses a [matrix](!/linear-algebra/matrix) $A$ as a product of two or more matrices with known, exploitable structure. The factors are typically [triangular](!/linear-algebra/matrix/types), [diagonal](!/linear-algebra/matrix/types), or [orthogonal](!/linear-algebra/matrix/types) — matrices for which solving systems, computing [determinants](!/linear-algebra/determinants), and extracting [eigenvalues](!/linear-algebra/eigen) are either trivial or dramatically simplified.`,
        ],
        footer: `So $A = LU$ above is a decomposition: an [LU decomposition](!/linear-algebra/definitions#lu_decomposition), with $L$ lower triangular and $U$ upper triangular.`,
      },
      {
        id: 'kind',
        lead: `A decomposition is an investment: pay once to factor, then reuse the factors.`,
        content: [
          `Every decomposition represents a trade: an upfront cost to compute the factors, followed by cheap operations that use them. The factorization is done once; the payoff is reaped every time the factors are applied.`,
          `The same factors serve many different questions. A single LU factorization solves a system for any right-hand side, gives the determinant from the diagonal of $U$, and builds the inverse column by column; a single SVD gives the rank, the pseudoinverse and the best low-rank approximation at once. The work goes into finding the structure, and the answers are then read off it.`,
          `@academic[fact,aside:true,width:35%:A way of working made the top ten
In 2000 the journal Computing in Science and Engineering named the ten algorithms most influential on 20th-century science. One entry was not a single algorithm but the decompositional approach itself, formalized by Alston Householder in 1951: factor the matrix, then reuse the factors.]@`,
        ],
      },
      {
        id: 'caveat',
        lead: `Not every matrix has every decomposition.`,
        content: [
          `$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ has no LU decomposition without first swapping its rows, Cholesky needs a symmetric positive definite matrix, and the spectral decomposition a symmetric one, while every matrix has an SVD. Which one fits is set out in [choosing the right decomposition](!/linear-algebra/decompositions#8).`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers why decompositions matter, the LU, QR, Cholesky, spectral and singular value decompositions, how to choose among them, how they are related, a summary table and common pitfalls.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
                  <div key={'unit-svd'} dangerouslySetInnerHTML={{ __html: demoUnits.svd }} />,
          `The cheaper factorisations above are worth using precisely when their conditions happen to hold; this one is the fallback when they do not.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
          `The paragraphs above, as a map: first the question being asked, then what the matrix looks like.`,
          <DiagramFrame
            key={'obj8-decision'}
            id="decomposition-decision"
            title="Which decomposition?"
            source="/linear-algebra/decompositions"
          >
            <DecisionBox data={decompositionDecision} variant="tree" />
          </DiagramFrame>,
          `Two routes end at the SVD. It is the one decomposition that asks nothing of the shape or rank of the matrix, which is why it catches every case the others cannot take. The [relationships between the decompositions](!#9) show how the five connect.`,
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
    // NEW capstone section: obj10
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
          <DiagramFrame
            key={'obj10-diagram'}
            id="decompositions-tree"
            title="The five matrix decompositions"
            source="/linear-algebra/decompositions"
          >
            <TopDownTree data={decompositionTree} />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:sectionsContent.pitfalls.link,
        content:[
          sectionsContent.pitfalls.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Decompositions FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Decompositions</h1>
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