
// tables-optimized: v4 | 2026-05-20 | 4 tables (obj3 aggregation, obj8 aggregation, obj9 comparison, obj11 summary capstone)

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  'inverse matrix',
  'matrix inverse',
  'inverse of a matrix',
  'invertible matrix',
  'how to find inverse matrix',
  '2x2 inverse formula',
  'inverse matrix row reduction',
  'adjugate matrix inverse',
  'invertible matrix theorem',
  'singular matrix',
  'nonsingular matrix',
  'matrix inverse properties',
  'inverse matrix determinant',
  'solve system matrix inverse',
  'inverse special matrices'
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj3 — aggregation: the Invertible Matrix Theorem (TFAE)
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Category</th>
      <th style="${tableHeaders.aggregation}">Equivalent condition (for n × n matrix A)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/determinants" style="${linkStyle}">Determinant</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) ≠ 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/rank" style="${linkStyle}">Rank</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = n (full rank)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Columns</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/vector-spaces/linear-independence" style="${linkStyle}">linearly independent</a>; <a href="/linear-algebra/vector-spaces/span" style="${linkStyle}">span</a> ℝⁿ; form a <a href="/linear-algebra/vector-spaces/basis" style="${linkStyle}">basis</a> for ℝⁿ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rows</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">linearly independent</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">null(A) = {0}</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Homogeneous system</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Ax = 0 has only the trivial solution</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General system</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Ax = b has a unique solution for every b ∈ ℝⁿ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row reduction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/linear-systems/echelon-form" style="${linkStyle}">rref</a>(A) = I</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Factorization</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is a product of elementary matrices</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Spectrum</td>
      <td style="padding: 12px 15px; color: #34495e;">0 is not an <a href="/linear-algebra/eigen" style="${linkStyle}">eigenvalue</a> of A</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — aggregation: inverses of special matrix types
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Type</th>
      <th style="${tableHeaders.aggregation}">Invertible when</th>
      <th style="${tableHeaders.aggregation}">Inverse</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/types" style="${linkStyle}">Diagonal</a> D = diag(d₁,…,dₙ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every dᵢ ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">D⁻¹ = diag(1/d₁,…,1/dₙ)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Orthogonal Q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always (det Q = ±1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Q⁻¹ = Qᵀ (free — just transpose)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Upper triangular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every diagonal entry ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">upper triangular (back-substitution)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Lower triangular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every diagonal entry ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lower triangular (forward substitution)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">also symmetric: (A⁻¹)ᵀ = A⁻¹</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Block diagonal diag(A₁,…,Aₖ)</td>
      <td style="padding: 12px 15px; color: #34495e;">each block Aᵢ invertible</td>
      <td style="padding: 12px 15px; color: #34495e;">diag(A₁⁻¹,…,Aₖ⁻¹) &nbsp;(block-wise)</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — comparison: common errors (wrong vs correct)
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Mistake</th>
      <th style="${tableHeaders.comparison}">Wrong</th>
      <th style="${tableHeaders.comparison}">Correct</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Distributing over sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c;">(A + B)⁻¹ = A⁻¹ + B⁻¹</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no simple formula relates them</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Order in a product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c;">(AB)⁻¹ = A⁻¹B⁻¹</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(AB)⁻¹ = B⁻¹A⁻¹ (order reverses)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Assuming invertibility</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c;">every square A has an inverse</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A⁻¹ exists iff det(A) ≠ 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Entry-by-entry reciprocal</td>
      <td style="padding: 12px 15px; color: #e74c3c;">(A⁻¹)ᵢⱼ = 1/aᵢⱼ</td>
      <td style="padding: 12px 15px; color: #34495e;">inverse is a global operation depending on all entries</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: methods of computing the inverse
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">Applies when</th>
      <th style="${tableHeaders.summary}">Cost (n × n)</th>
      <th style="${tableHeaders.summary}">Best for</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">2 × 2 swap-and-negate formula</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n = 2 and ad − bc ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">trivial (constant time)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">by-hand work on 2 × 2 matrices</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row reduction of [A | I]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) ≠ 0 (verified during reduction)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">≈ 2n³ operations</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerical computation when A⁻¹ itself is needed</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Adjugate formula &nbsp;A⁻¹ = adj(A)/det(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) ≠ 0; symbolic entries</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n² <a href="/linear-algebra/determinants/cofactors" style="${linkStyle}">cofactors</a>, each an (n−1)-determinant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">theoretical derivations, sensitivity formulas</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Solve Ax = b directly (skip A⁻¹)</td>
      <td style="padding: 12px 15px; color: #34495e;">only A⁻¹b is needed, not A⁻¹ itself</td>
      <td style="padding: 12px 15px; color: #34495e;">≈ ⅔ n³ (<a href="/linear-algebra/linear-systems/gaussian-elimination" style="${linkStyle}">Gaussian elimination</a>) + reusable LU</td>
      <td style="padding: 12px 15px; color: #34495e;">virtually every practical linear system</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose preserved verbatim) ----------

// const sectionsContent = {
//   obj1: {
//     title: `Definition of the Inverse`,
//     content: `For a square matrix $A$ of order $n$, the inverse — if it exists — is the unique matrix $A^{-1}$ satisfying

// $$AA^{-1} = A^{-1}A = I$$

// Both products must equal the identity. A matrix possessing an inverse is called invertible or nonsingular. A matrix with no inverse is called singular.

// Uniqueness follows from a short argument. Suppose both $B$ and $C$ satisfy $AB = I$ and $CA = I$. Then $B = IB = (CA)B = C(AB) = CI = C$, so $B$ and $C$ must be the same matrix. This means a matrix either has no inverse or has exactly one.

// The inverse is defined only for square matrices. A rectangular matrix cannot satisfy $AA^{-1} = A^{-1}A = I$ because the products would require incompatible dimensions. One-sided inverses (left or right) can exist for rectangular matrices with full column or full row [rank](!/linear-algebra/matrix/rank), but the two-sided inverse is a strictly square concept.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The 2×2 Inverse Formula`,
//     content: `For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ with $ad - bc \\neq 0$, the inverse is

// $$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

// The recipe is: swap the diagonal entries, negate the off-diagonal entries, and divide everything by the [determinant](!/linear-algebra/determinants) $ad - bc$.

// ## Worked Examples

// For $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$, the determinant is $3 \\cdot 2 - 1 \\cdot 5 = 1$. The inverse is $A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. Since $\\det(A) = 1$, every entry of $A^{-1}$ is an integer.

// Verification: $AA^{-1} = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 6 - 5 & -3 + 3 \\\\ 10 - 10 & -5 + 6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

// For $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 6 \\end{pmatrix}$, the determinant is $2 \\cdot 6 - 4 \\cdot 3 = 0$. The second column is twice the first, the columns are linearly dependent, and no inverse exists.

// For $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$, the determinant is $7 - 6 = 1$. The inverse is $A^{-1} = \\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `When Does the Inverse Exist?`,
//     content: `The invertible matrix theorem collects a list of conditions that are all equivalent for an $n \\times n$ matrix $A$. Each approaches invertibility from a different angle — algebraic, geometric, computational, spectral — but they are all either simultaneously true or simultaneously false.

// $A$ is invertible. The [determinant](!/linear-algebra/determinants) $\\det(A) \\neq 0$. The [rank](!/linear-algebra/matrix/rank) of $A$ equals $n$. The columns of $A$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence). The rows of $A$ are linearly independent. The columns of $A$ [span](!/linear-algebra/vector-spaces/span) $\\mathbb{R}^n$. The columns of $A$ form a [basis](!/linear-algebra/vector-spaces/basis) for $\\mathbb{R}^n$. The homogeneous system $Ax = \\mathbf{0}$ has only the trivial solution. The system $Ax = \\mathbf{b}$ has a unique solution for every $\\mathbf{b} \\in \\mathbb{R}^n$. The [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is $\\{\\mathbf{0}\\}$. The [reduced row echelon form](!/linear-algebra/linear-systems/echelon-form) of $A$ is $I$. The matrix $A$ is a product of elementary matrices. Zero is not an [eigenvalue](!/linear-algebra/eigen) of $A$.

// The power of this theorem is that proving any one condition automatically establishes all the others. Checking the determinant is often the fastest single test, but in large-scale computation, rank determination via row reduction is more practical.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Computing the Inverse by Row Reduction`,
//     content: `The standard algorithm for computing the inverse of an $n \\times n$ matrix $A$ is to form the $n \\times 2n$ augmented matrix $[A \\mid I]$ and apply row operations to reduce the left half to the identity. If the reduction succeeds, the right half becomes $A^{-1}$:

// $$[A \\mid I] \\xrightarrow{\\text{row ops}} [I \\mid A^{-1}]$$

// Each row operation is left-multiplication by an elementary matrix. If the sequence of operations is $E_1, E_2, \\dots, E_k$, then $E_k \\cdots E_2 E_1 A = I$, which means $A^{-1} = E_k \\cdots E_2 E_1$. Applying the same operations to $I$ produces exactly this product.

// ## Worked Example

// $$A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 3 & 3 \\end{pmatrix}$$

// Form $[A \\mid I]$ and reduce. Subtract $2$ times row $1$ from row $2$, and subtract row $1$ from row $3$:

// $$\\begin{pmatrix} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 1 & 2 & -1 & 0 & 1 \\end{pmatrix}$$

// Subtract row $2$ from row $3$:

// $$\\begin{pmatrix} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 0 & 1 & 1 & -1 & 1 \\end{pmatrix}$$

// Subtract row $3$ from row $2$, and subtract row $3$ from row $1$:

// $$\\begin{pmatrix} 1 & 2 & 0 & 0 & 1 & -1 \\\\ 0 & 1 & 0 & -3 & 2 & -1 \\\\ 0 & 0 & 1 & 1 & -1 & 1 \\end{pmatrix}$$

// Subtract $2$ times row $2$ from row $1$:

// $$\\begin{pmatrix} 1 & 0 & 0 & 6 & -3 & 1 \\\\ 0 & 1 & 0 & -3 & 2 & -1 \\\\ 0 & 0 & 1 & 1 & -1 & 1 \\end{pmatrix}$$

// So $A^{-1} = \\begin{pmatrix} 6 & -3 & 1 \\\\ -3 & 2 & -1 \\\\ 1 & -1 & 1 \\end{pmatrix}$.

// If at any point during reduction the left half develops a row of all zeros, $A$ is singular and no inverse exists.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Computing the Inverse via the Adjugate`,
//     content: `The [adjugate](!/linear-algebra/determinants/cofactors) identity $A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$ gives an explicit formula when $\\det(A) \\neq 0$:

// $$A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$$

// The adjugate is the transpose of the [cofactor](!/linear-algebra/determinants/cofactors) matrix, so each entry of $A^{-1}$ is a cofactor of $A$ divided by $\\det(A)$.

// For the $2 \\times 2$ case, the adjugate formula reduces to the swap-and-negate formula from section $2$. The cofactor matrix of $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is $\\begin{pmatrix} d & -c \\\\ -b & a \\end{pmatrix}$, and transposing gives $\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, which is exactly the numerator matrix in the $2 \\times 2$ inverse formula.

// For $3 \\times 3$ and larger matrices, the adjugate formula remains exact and fully symbolic — it shows explicitly how each entry of $A^{-1}$ depends on the entries of $A$. This makes it valuable for theoretical work and for deriving sensitivity formulas. For numerical computation, however, it is vastly more expensive than row reduction: computing the adjugate requires $n^2$ cofactors, each of which is an $(n-1) \\times (n-1)$ determinant.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Properties of the Inverse`,
//     content: `The inverse satisfies a collection of identities that mirror and extend the familiar rules for reciprocals of real numbers.

// Applying the inverse twice recovers the original: $(A^{-1})^{-1} = A$. The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This generalizes to any number of factors — $(A_1 A_2 \\cdots A_k)^{-1} = A_k^{-1} \\cdots A_2^{-1} A_1^{-1}$.

// Transpose and inverse commute: $(A^T)^{-1} = (A^{-1})^T$. It does not matter whether you transpose first and then invert, or invert first and then transpose.

// Scalars pass through as expected: $(cA)^{-1} = \\frac{1}{c} A^{-1}$ for any nonzero scalar $c$. Powers behave cleanly: $(A^k)^{-1} = (A^{-1})^k = A^{-k}$.

// The determinant of the inverse is the reciprocal of the determinant: $\\det(A^{-1}) = 1/\\det(A)$. This follows immediately from the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(A)\\det(A^{-1}) = \\det(AA^{-1}) = \\det(I) = 1$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Solving Systems with the Inverse`,
//     content: `When $A$ is invertible, the system $Ax = \\mathbf{b}$ has the unique solution

// $$\\mathbf{x} = A^{-1}\\mathbf{b}$$

// This is the matrix analogue of dividing both sides by $A$. Multiplying both sides on the left by $A^{-1}$ gives $A^{-1}A\\mathbf{x} = A^{-1}\\mathbf{b}$, which simplifies to $\\mathbf{x} = A^{-1}\\mathbf{b}$.

// In principle, this solves the system in one matrix-vector multiplication — but only if $A^{-1}$ is already known. Computing $A^{-1}$ from scratch requires roughly as much work as solving the system by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination), and the elimination approach is more numerically stable. Even when multiple systems share the same coefficient matrix $A$ with different right-hand sides, the LU decomposition is preferred: factor $A = LU$ once, then solve each system with two cheap triangular substitutions.

// The formula $\\mathbf{x} = A^{-1}\\mathbf{b}$ is most valuable as a theoretical tool. It proves that an invertible system always has a unique solution, and it makes the dependence of $\\mathbf{x}$ on $\\mathbf{b}$ explicit and linear.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Inverses of Special Matrix Types`,
//     content: `Several matrix types have inverses with guaranteed structure, and some are trivially cheap to compute.

// A [diagonal](!/linear-algebra/matrix/types) matrix $D = \\text{diag}(d_1, \\dots, d_n)$ is invertible if and only if every diagonal entry is nonzero, and its inverse is $D^{-1} = \\text{diag}(1/d_1, \\dots, 1/d_n)$ — simply reciprocate each entry.

// An [orthogonal](!/linear-algebra/matrix/types) matrix $Q$ satisfies $Q^{-1} = Q^T$. The inverse is the transpose, which costs nothing to compute — just reinterpret the matrix with rows and columns swapped.

// The inverse of an upper triangular matrix is upper triangular, and the inverse of a lower triangular matrix is lower triangular. The computation can be done by back-substitution without forming the full augmented matrix.

// If $A$ is [symmetric](!/linear-algebra/matrix/types) and invertible, then $A^{-1}$ is also symmetric: $(A^{-1})^T = (A^T)^{-1} = A^{-1}$.

// A block diagonal matrix $\\text{diag}(A_1, \\dots, A_k)$ is invertible if and only if each block is invertible, and the inverse is $\\text{diag}(A_1^{-1}, \\dots, A_k^{-1})$ — each block is inverted independently.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Common Errors`,
//     content: `Several incorrect analogies from scalar arithmetic cause persistent mistakes when working with matrix inverses.

// The inverse does not distribute over addition. The expression $(A + B)^{-1}$ is not equal to $A^{-1} + B^{-1}$, and there is no simple formula relating the two. If $A = B = I$, then $(A + B)^{-1} = (2I)^{-1} = \\frac{1}{2}I$, while $A^{-1} + B^{-1} = I + I = 2I$ — these are clearly different.

// The inverse of a product reverses order. Writing $(AB)^{-1} = A^{-1}B^{-1}$ is wrong; the correct identity is $(AB)^{-1} = B^{-1}A^{-1}$. The reversal is a consequence of non-commutativity: to undo the operation "first apply $B$, then apply $A$," you must first undo $A$, then undo $B$.

// Not every matrix is invertible. Assuming an inverse exists without checking the determinant or rank leads to division-by-zero errors in the $2 \\times 2$ formula and to contradictions in row reduction.

// The inverse is not the entry-by-entry reciprocal. The matrix $A^{-1}$ is not obtained by replacing each $a_{ij}$ with $1/a_{ij}$. The inverse is a global operation that depends on all entries simultaneously.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `When Not to Compute the Inverse`,
//     content: `The formula $\\mathbf{x} = A^{-1}\\mathbf{b}$ is clean on paper but misleading as a computational strategy. In almost every practical setting, solving $Ax = \\mathbf{b}$ by row reduction or LU decomposition is faster and more numerically stable than computing $A^{-1}$ first and then multiplying.

// Row reduction requires roughly $\\frac{2}{3}n^3$ operations to factor a system. Computing the full inverse requires roughly $2n^3$ operations — three times the cost — and introduces additional rounding error in floating-point arithmetic. When multiple systems with the same $A$ need to be solved, the LU factorization should be computed once and reused, not replaced by an explicit inverse.

// The inverse is the right object when $A^{-1}$ itself — the entire matrix, not just its action on a specific $\\mathbf{b}$ — is what matters. This happens in theoretical derivations, in symbolic formulas where the dependence on parameters must be made explicit, in sensitivity analysis, and when working with small matrices by hand. For a $2 \\times 2$ or $3 \\times 3$ matrix, computing the inverse directly is perfectly reasonable. For an $n \\times n$ matrix with $n$ in the hundreds or thousands, it is almost never the right approach.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Methods of Computing the Inverse`,
//     content: `Three methods can produce $A^{-1}$ explicitly — the $2 \\times 2$ swap-and-negate formula, row reduction of $[A \\mid I]$, and the adjugate identity — and a fourth strategy, often the best one in practice, is to skip computing $A^{-1}$ altogether and solve $A\\mathbf{x} = \\mathbf{b}$ directly. The table below collects them with the conditions each requires, the cost in operations, and the situation each fits.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// formulas-injected: v1 | 2026-06-16 | 14 callouts (obj1 inverse_definition direct, obj2 inverse_2x2_formula direct, obj3 invertible_matrix_theorem prose-insert, obj4 inverse_via_row_reduction direct, obj5 inverse_via_adjugate direct, obj6 inverse_involution + inverse_of_product + inverse_of_transpose + inverse_of_scalar_multiple + inverse_of_power + determinant_of_inverse inline-promote, obj7 solve_system_via_inverse direct, obj8 diagonal_matrix_inverse + orthogonal_matrix_inverse inline-promote)

const sectionsContent = {
  obj1: {
    title: `Definition of the Inverse`,
    content: `For a square matrix $A$ of order $n$, the inverse — if it exists — is the unique matrix $A^{-1}$ satisfying

@academic[formula_callout:inverse_definition|Inverse Definition|$$AA^{-1} = A^{-1}A = I$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_definition]@

Both products must equal the identity. A matrix possessing an inverse is called invertible or nonsingular. A matrix with no inverse is called singular.

Uniqueness follows from a short argument. Suppose both $B$ and $C$ satisfy $AB = I$ and $CA = I$. Then $B = IB = (CA)B = C(AB) = CI = C$, so $B$ and $C$ must be the same matrix. This means a matrix either has no inverse or has exactly one.

The inverse is defined only for square matrices. A rectangular matrix cannot satisfy $AA^{-1} = A^{-1}A = I$ because the products would require incompatible dimensions. One-sided inverses (left or right) can exist for rectangular matrices with full column or full row [rank](!/linear-algebra/matrix/rank), but the two-sided inverse is a strictly square concept.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The 2×2 Inverse Formula`,
    content: `For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ with $ad - bc \\neq 0$, the inverse is

@academic[formula_callout:inverse_2x2_formula|Inverse 2x2 Formula|$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_2x2_formula]@

The recipe is: swap the diagonal entries, negate the off-diagonal entries, and divide everything by the [determinant](!/linear-algebra/determinants) $ad - bc$.

## Worked Examples

For $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$, the determinant is $3 \\cdot 2 - 1 \\cdot 5 = 1$. The inverse is $A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. Since $\\det(A) = 1$, every entry of $A^{-1}$ is an integer.

Verification: $AA^{-1} = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 6 - 5 & -3 + 3 \\\\ 10 - 10 & -5 + 6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

For $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 6 \\end{pmatrix}$, the determinant is $2 \\cdot 6 - 4 \\cdot 3 = 0$. The second column is twice the first, the columns are linearly dependent, and no inverse exists.

For $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$, the determinant is $7 - 6 = 1$. The inverse is $A^{-1} = \\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `When Does the Inverse Exist?`,
    content: `The invertible matrix theorem collects a list of conditions that are all equivalent for an $n \\times n$ matrix $A$. Each approaches invertibility from a different angle — algebraic, geometric, computational, spectral — but they are all either simultaneously true or simultaneously false.

@academic[formula_callout:invertible_matrix_theorem|Invertible Matrix Theorem|$$\\begin{aligned} \\text{For } A \\in \\mathbb{R}^{n \\times n}, \\text{ the following are equivalent:} & \\\\ (1)\\ A \\text{ is invertible} \\quad (2)\\ \\det(A) \\neq 0 \\quad (3)\\ \\operatorname{rank}(A) = n & \\\\ (4)\\ \\text{columns of } A \\text{ are linearly independent} & \\\\ (5)\\ \\text{rows of } A \\text{ are linearly independent} & \\\\ (6)\\ \\text{columns of } A \\text{ span } \\mathbb{R}^n \\quad (7)\\ \\text{columns form a basis of } \\mathbb{R}^n & \\\\ (8)\\ A\\mathbf{x} = \\mathbf{0} \\text{ has only the trivial solution} & \\\\ (9)\\ A\\mathbf{x} = \\mathbf{b} \\text{ has a unique solution for every } \\mathbf{b} & \\\\ (10)\\ \\operatorname{Null}(A) = \\{\\mathbf{0}\\} & \\\\ (11)\\ \\operatorname{rref}(A) = I \\quad (12)\\ A \\text{ is a product of elementary matrices} & \\\\ (13)\\ 0 \\text{ is not an eigenvalue of } A & \\end{aligned}$$]@
@academic[formulas_link:/linear-algebra/formulas#invertible_matrix_theorem]@

$A$ is invertible. The [determinant](!/linear-algebra/determinants) $\\det(A) \\neq 0$. The [rank](!/linear-algebra/matrix/rank) of $A$ equals $n$. The columns of $A$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence). The rows of $A$ are linearly independent. The columns of $A$ [span](!/linear-algebra/vector-spaces/span) $\\mathbb{R}^n$. The columns of $A$ form a [basis](!/linear-algebra/vector-spaces/basis) for $\\mathbb{R}^n$. The homogeneous system $Ax = \\mathbf{0}$ has only the trivial solution. The system $Ax = \\mathbf{b}$ has a unique solution for every $\\mathbf{b} \\in \\mathbb{R}^n$. The [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is $\\{\\mathbf{0}\\}$. The [reduced row echelon form](!/linear-algebra/linear-systems/echelon-form) of $A$ is $I$. The matrix $A$ is a product of elementary matrices. Zero is not an [eigenvalue](!/linear-algebra/eigen) of $A$.

The power of this theorem is that proving any one condition automatically establishes all the others. Checking the determinant is often the fastest single test, but in large-scale computation, rank determination via row reduction is more practical.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the Inverse by Row Reduction`,
    content: `The standard algorithm for computing the inverse of an $n \\times n$ matrix $A$ is to form the $n \\times 2n$ augmented matrix $[A \\mid I]$ and apply row operations to reduce the left half to the identity. If the reduction succeeds, the right half becomes $A^{-1}$:

@academic[formula_callout:inverse_via_row_reduction|Inverse via Row Reduction|$$[A \\mid I] \\xrightarrow{\\text{row ops}} [I \\mid A^{-1}]$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_via_row_reduction]@

Each row operation is left-multiplication by an elementary matrix. If the sequence of operations is $E_1, E_2, \\dots, E_k$, then $E_k \\cdots E_2 E_1 A = I$, which means $A^{-1} = E_k \\cdots E_2 E_1$. Applying the same operations to $I$ produces exactly this product.

## Worked Example

$$A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 3 & 3 \\end{pmatrix}$$

Form $[A \\mid I]$ and reduce. Subtract $2$ times row $1$ from row $2$, and subtract row $1$ from row $3$:

$$\\begin{pmatrix} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 1 & 2 & -1 & 0 & 1 \\end{pmatrix}$$

Subtract row $2$ from row $3$:

$$\\begin{pmatrix} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 0 & 1 & 1 & -1 & 1 \\end{pmatrix}$$

Subtract row $3$ from row $2$, and subtract row $3$ from row $1$:

$$\\begin{pmatrix} 1 & 2 & 0 & 0 & 1 & -1 \\\\ 0 & 1 & 0 & -3 & 2 & -1 \\\\ 0 & 0 & 1 & 1 & -1 & 1 \\end{pmatrix}$$

Subtract $2$ times row $2$ from row $1$:

$$\\begin{pmatrix} 1 & 0 & 0 & 6 & -3 & 1 \\\\ 0 & 1 & 0 & -3 & 2 & -1 \\\\ 0 & 0 & 1 & 1 & -1 & 1 \\end{pmatrix}$$

So $A^{-1} = \\begin{pmatrix} 6 & -3 & 1 \\\\ -3 & 2 & -1 \\\\ 1 & -1 & 1 \\end{pmatrix}$.

If at any point during reduction the left half develops a row of all zeros, $A$ is singular and no inverse exists.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Computing the Inverse via the Adjugate`,
    content: `The [adjugate](!/linear-algebra/determinants/cofactors) identity $A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$ gives an explicit formula when $\\det(A) \\neq 0$:

@academic[formula_callout:inverse_via_adjugate|Inverse via Adjugate|$$A^{-1} = \\frac{1}{\\det(A)}\\, \\operatorname{adj}(A)$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_via_adjugate]@

The adjugate is the transpose of the [cofactor](!/linear-algebra/determinants/cofactors) matrix, so each entry of $A^{-1}$ is a cofactor of $A$ divided by $\\det(A)$.

For the $2 \\times 2$ case, the adjugate formula reduces to the swap-and-negate formula from section $2$. The cofactor matrix of $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is $\\begin{pmatrix} d & -c \\\\ -b & a \\end{pmatrix}$, and transposing gives $\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, which is exactly the numerator matrix in the $2 \\times 2$ inverse formula.

For $3 \\times 3$ and larger matrices, the adjugate formula remains exact and fully symbolic — it shows explicitly how each entry of $A^{-1}$ depends on the entries of $A$. This makes it valuable for theoretical work and for deriving sensitivity formulas. For numerical computation, however, it is vastly more expensive than row reduction: computing the adjugate requires $n^2$ cofactors, each of which is an $(n-1) \\times (n-1)$ determinant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Properties of the Inverse`,
    content: `The inverse satisfies a collection of identities that mirror and extend the familiar rules for reciprocals of real numbers.

Applying the inverse twice recovers the original:

@academic[formula_callout:inverse_involution|Inverse Involution|$$(A^{-1})^{-1} = A$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_involution]@

The inverse of a product reverses the order:

@academic[formula_callout:inverse_of_product|Inverse of Product|$$(AB)^{-1} = B^{-1} A^{-1}$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_of_product]@

This generalizes to any number of factors — $(A_1 A_2 \\cdots A_k)^{-1} = A_k^{-1} \\cdots A_2^{-1} A_1^{-1}$.

Transpose and inverse commute:

@academic[formula_callout:inverse_of_transpose|Inverse of Transpose|$$(A^T)^{-1} = (A^{-1})^T$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_of_transpose]@

It does not matter whether you transpose first and then invert, or invert first and then transpose.

Scalars pass through as expected:

@academic[formula_callout:inverse_of_scalar_multiple|Inverse of Scalar Multiple|$$(cA)^{-1} = \\frac{1}{c}\\, A^{-1}$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_of_scalar_multiple]@

for any nonzero scalar $c$. Powers behave cleanly:

@academic[formula_callout:inverse_of_power|Inverse of Power|$$(A^k)^{-1} = A^{-k}$$]@
@academic[formulas_link:/linear-algebra/formulas#inverse_of_power]@

equivalently $(A^{-1})^k$.

The determinant of the inverse is the reciprocal of the determinant:

@academic[formula_callout:determinant_of_inverse|Determinant of Inverse|$$\\det(A^{-1}) = \\frac{1}{\\det(A)}$$]@
@academic[formulas_link:/linear-algebra/formulas#determinant_of_inverse]@

This follows immediately from the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(A)\\det(A^{-1}) = \\det(AA^{-1}) = \\det(I) = 1$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Solving Systems with the Inverse`,
    content: `When $A$ is invertible, the system $Ax = \\mathbf{b}$ has the unique solution

@academic[formula_callout:solve_system_via_inverse|Solve System via Inverse|$$A\\mathbf{x} = \\mathbf{b} \\implies \\mathbf{x} = A^{-1}\\mathbf{b}$$]@
@academic[formulas_link:/linear-algebra/formulas#solve_system_via_inverse]@

This is the matrix analogue of dividing both sides by $A$. Multiplying both sides on the left by $A^{-1}$ gives $A^{-1}A\\mathbf{x} = A^{-1}\\mathbf{b}$, which simplifies to $\\mathbf{x} = A^{-1}\\mathbf{b}$.

In principle, this solves the system in one matrix-vector multiplication — but only if $A^{-1}$ is already known. Computing $A^{-1}$ from scratch requires roughly as much work as solving the system by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination), and the elimination approach is more numerically stable. Even when multiple systems share the same coefficient matrix $A$ with different right-hand sides, the LU decomposition is preferred: factor $A = LU$ once, then solve each system with two cheap triangular substitutions.

The formula $\\mathbf{x} = A^{-1}\\mathbf{b}$ is most valuable as a theoretical tool. It proves that an invertible system always has a unique solution, and it makes the dependence of $\\mathbf{x}$ on $\\mathbf{b}$ explicit and linear.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Inverses of Special Matrix Types`,
    content: `Several matrix types have inverses with guaranteed structure, and some are trivially cheap to compute.

A [diagonal](!/linear-algebra/matrix/types) matrix $D = \\text{diag}(d_1, \\dots, d_n)$ is invertible if and only if every diagonal entry is nonzero, and its inverse simply reciprocates each entry:

@academic[formula_callout:diagonal_matrix_inverse|Diagonal Matrix Inverse|$$D = \\text{diag}(d_1, \\dots, d_n) \\Rightarrow D^{-1} = \\text{diag}(1/d_1, \\dots, 1/d_n)$$]@
@academic[formulas_link:/linear-algebra/formulas#diagonal_matrix_inverse]@

An [orthogonal](!/linear-algebra/matrix/types) matrix $Q$ has the cheapest possible inverse — its transpose:

@academic[formula_callout:orthogonal_matrix_inverse|Orthogonal Matrix Inverse|$$Q^{-1} = Q^T$$]@
@academic[formulas_link:/linear-algebra/formulas#orthogonal_matrix_inverse]@

The inverse costs nothing to compute — just reinterpret the matrix with rows and columns swapped.

The inverse of an upper triangular matrix is upper triangular, and the inverse of a lower triangular matrix is lower triangular. The computation can be done by back-substitution without forming the full augmented matrix.

If $A$ is [symmetric](!/linear-algebra/matrix/types) and invertible, then $A^{-1}$ is also symmetric: $(A^{-1})^T = (A^T)^{-1} = A^{-1}$.

A block diagonal matrix $\\text{diag}(A_1, \\dots, A_k)$ is invertible if and only if each block is invertible, and the inverse is $\\text{diag}(A_1^{-1}, \\dots, A_k^{-1})$ — each block is inverted independently.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Common Errors`,
    content: `Several incorrect analogies from scalar arithmetic cause persistent mistakes when working with matrix inverses.

The inverse does not distribute over addition. The expression $(A + B)^{-1}$ is not equal to $A^{-1} + B^{-1}$, and there is no simple formula relating the two. If $A = B = I$, then $(A + B)^{-1} = (2I)^{-1} = \\frac{1}{2}I$, while $A^{-1} + B^{-1} = I + I = 2I$ — these are clearly different.

The inverse of a product reverses order. Writing $(AB)^{-1} = A^{-1}B^{-1}$ is wrong; the correct identity is $(AB)^{-1} = B^{-1}A^{-1}$. The reversal is a consequence of non-commutativity: to undo the operation &quot;first apply $B$, then apply $A$,&quot; you must first undo $A$, then undo $B$.

Not every matrix is invertible. Assuming an inverse exists without checking the determinant or rank leads to division-by-zero errors in the $2 \\times 2$ formula and to contradictions in row reduction.

The inverse is not the entry-by-entry reciprocal. The matrix $A^{-1}$ is not obtained by replacing each $a_{ij}$ with $1/a_{ij}$. The inverse is a global operation that depends on all entries simultaneously.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `When Not to Compute the Inverse`,
    content: `The formula $\\mathbf{x} = A^{-1}\\mathbf{b}$ is clean on paper but misleading as a computational strategy. In almost every practical setting, solving $Ax = \\mathbf{b}$ by row reduction or LU decomposition is faster and more numerically stable than computing $A^{-1}$ first and then multiplying.

Row reduction requires roughly $\\frac{2}{3}n^3$ operations to factor a system. Computing the full inverse requires roughly $2n^3$ operations — three times the cost — and introduces additional rounding error in floating-point arithmetic. When multiple systems with the same $A$ need to be solved, the LU factorization should be computed once and reused, not replaced by an explicit inverse.

The inverse is the right object when $A^{-1}$ itself — the entire matrix, not just its action on a specific $\\mathbf{b}$ — is what matters. This happens in theoretical derivations, in symbolic formulas where the dependence on parameters must be made explicit, in sensitivity analysis, and when working with small matrices by hand. For a $2 \\times 2$ or $3 \\times 3$ matrix, computing the inverse directly is perfectly reasonable. For an $n \\times n$ matrix with $n$ in the hundreds or thousands, it is almost never the right approach.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Methods of Computing the Inverse`,
    content: `Three methods can produce $A^{-1}$ explicitly — the $2 \\times 2$ swap-and-negate formula, row reduction of $[A \\mid I]$, and the adjugate identity — and a fourth strategy, often the best one in practice, is to skip computing $A^{-1}$ altogether and solve $A\\mathbf{x} = \\mathbf{b}$ directly. The table below collects them with the conditions each requires, the cost in operations, and the situation each fits.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
  id: "intro",
  title: `Undoing a Matrix`,
  content: `For real numbers, dividing by a means multiplying by 1/a. Matrices have no division operation, but invertible matrices have an inverse that plays the same role — multiplying by A⁻¹ reverses the effect of multiplying by A. Not every matrix has an inverse, and understanding when one exists, how to compute it, and what properties it carries is central to linear algebra.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the inverse of a matrix?",
    answer: "The inverse of a square matrix A is the unique matrix A⁻¹ satisfying AA⁻¹ = A⁻¹A = I. It effectively undoes the action of A. Not every square matrix has an inverse — a matrix is invertible if and only if its determinant is nonzero.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you find the inverse of a 2×2 matrix?",
    answer: "For a 2×2 matrix with entries a, b, c, d, swap the diagonal entries, negate the off-diagonal entries, and divide by the determinant ad − bc. The formula is A⁻¹ = (1/(ad−bc)) times the matrix [d, −b; −c, a]. The inverse exists only when ad − bc is nonzero.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you compute the inverse using row reduction?",
    answer: "Form the augmented matrix [A | I] and apply row operations to reduce the left half to the identity matrix. If the reduction succeeds, the right half becomes A⁻¹. If a row of zeros appears in the left half during reduction, the matrix is singular and has no inverse.",
    sectionId: "4"
  },
  obj4: {
    question: "What conditions make a matrix invertible?",
    answer: "A square matrix is invertible if and only if its determinant is nonzero, its rank equals its order, its columns are linearly independent, the homogeneous system Ax = 0 has only the trivial solution, and zero is not an eigenvalue. All of these conditions are equivalent.",
    sectionId: "3"
  },
  obj5: {
    question: "Why is computing the inverse often avoided in practice?",
    answer: "Computing A⁻¹ requires roughly three times the work of solving Ax = b by row reduction and introduces more rounding error. For solving linear systems, LU decomposition is faster and more stable. The inverse is best reserved for theoretical work, symbolic formulas, and small matrices computed by hand.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Inverse of a Matrix",
    "description": "Learn how to find the inverse of a matrix — 2×2 formula, row reduction method, adjugate approach, invertibility conditions, properties, and when to avoid computing the inverse.",
    "url": "https://www.learnmathclass.com/linear-algebra/matrix/inverse",
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
      "name": "Inverse of a Matrix"
    },
    "teaches": [
      "Definition and uniqueness of the matrix inverse",
      "The 2×2 inverse formula with worked examples",
      "The invertible matrix theorem and equivalent conditions",
      "Computing inverses by row reduction and adjugate formula",
      "Properties of the inverse including product reversal",
      "When to use the inverse versus direct system solving"
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
        "name": "Matrices",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Inverse of a Matrix",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix/inverse"
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
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Inverse Matrix: Formula & Computation | Learn Math Class",
      description: "Learn how to find the inverse of a matrix — 2×2 formula, row reduction method, adjugate approach, invertibility conditions, properties, and when to avoid computing the inverse.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/matrix/inverse",
      name: "Inverse of a Matrix"
    },
  }
}
   }


export default function MatrixInversePage({seoData, sectionsContent, introContent, obj3Table, obj8Table, obj9Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'obj3-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj3Table }} />,
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
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
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
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Inverse of a Matrix</h1>
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